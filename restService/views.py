# Local Dependencys
from app_product.models import APP as appModel
from app_product.models import appKomments as commentModel
from users.models import CustomUser as userModel
from . import serializers
import json

# Django-Import
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.db.models import Q

# REST-API Import 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework import generics
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)

#@login_required(login_url='/account/login/')

class appListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all()
    serializer_class = serializers.AppSmallSerializer

class UserListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all Users in the Database
    only accessably as an Loggedin Admin
    '''
    permission_classes = (IsAuthenticated, IsAdminUser)
    http_method_names = ['get']
    queryset = userModel.objects.all()
    serializer_class = serializers.UserSerializer


class newestAppsListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database 
    sorted by their creationtime newest to oldest
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all().order_by('-createdAt')
    serializer_class = serializers.AppSmallSerializer


class oldestAppsListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database 
    sorted by their creationtime oldest to newest
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all().order_by('createdAt')
    serializer_class = serializers.AppSmallSerializer


class mostDownloadsListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database 
    sorted by their downloadrates best to worst
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all().order_by('-downloads')
    serializer_class = serializers.AppSmallSerializer


class tinyDownloadsListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database 
    sorted by their downloadrates worst to best
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all().order_by('downloads')
    serializer_class = serializers.AppSmallSerializer

#
# Function-Based Views 
#


@csrf_exempt
@api_view(['GET', 'POST'])
@permission_classes((AllowAny, ))
def searchApp(request):
    '''
    Method to get all apps created by a creator
    '''
    print('sdfnsofnbvo')
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            query = data.get('term')
            data = appModel.objects.filter(Q(appname__icontains=query) | Q(appID__icontains=query) | Q(body__icontains=query) | Q(typOfAccount__icontains=query) | Q(Fakultaet__icontains=query)).order_by('-downloads')
            print(data)
        except:
            return JsonResponse({ "error" : "Unknown Searchterm"}, status=400)
        if data is None: return JsonResponse({ "missing": "nichts gefunden" }, status=200)
        serializer = serializers.AppSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    else:
        return JsonResponse({ "error": "Only POST - Requests are allowed" }, status=400)

@csrf_exempt
@api_view(['GET'])
@permission_classes((AllowAny, ))
def app_details(request, pk):
    '''
    Method to get a detailed-view of an APP
    '''
    if request.method == 'GET':
        try:
            data = appModel.objects.get(appID=pk)
        except:
            return Response(status=HTTP_404_NOT_FOUND)
        if data is None:
            return JsonResponse({
                "error": "Unknown App"
        }, status=400)
        serialized_data = serializers.AppSerializer(data)
        return JsonResponse(serialized_data.data, status=200)
    else:
        return JsonResponse({
                "error": "Only GET - Requests are allowed"
            }, status=400)

@csrf_exempt
@api_view(['GET'])
@permission_classes((AllowAny, ))
def appsFromCreator(request, creator):
    '''
    Method to get all apps created by a creator
    '''
    if request.method == 'GET':
        try:
            data = appModel.objects.all().filter(creator=creator)
            print(data)
        except:
            return JsonResponse({
                "error" : "Unknown Creator"
            }, status=400)
        if data is None:
            return JsonResponse({
            "error": "Unknown Creator"
        }, status=400)
        serialized_data = serializers.AppSerializer(data, many=True)
        return JsonResponse(serialized_data.data, status=200, safe=False)
    else:
        return JsonResponse({
                "error": "Only GET - Requests are allowed"
            }, status=400)

@csrf_exempt
@api_view(['GET'])
@permission_classes((AllowAny, ))
def infoCreator(request, creator):
    '''
    Method to get all apps created by a creator
    '''
    if request.method == 'GET':
        try:
            data = userModel.objects.all().filter(id=creator)
        except:
            return JsonResponse({
                "error" : "Unknown Creator"
            }, status=400)
        if data is None:
            return JsonResponse({
            "error": "Unknown Creator"
        }, status=400)
        serialized_data = serializers.UserSerializer(data, many=True)
        return JsonResponse(serialized_data.data, status=200, safe=False)
    else:
        return JsonResponse({
                "error": "Only GET - Requests are allowed"
            }, status=400)

@csrf_exempt
def createUser(request):
    '''
    Method to create a User out of a POST request
    '''
    if request.method == 'POST':
        data = JSONParser().parse(request)
        print(data)
        
        User = get_user_model()
        user = User.objects.create_user(
            email = data.get('email'),
            password = data.get('password'),
            nickname =data.get('nickname'),
            typOfAccount = data.get('typOfAccount'),
            Fakultaet = data.get('Fakultaet'),
            linkImg = data.get('linkImg'),
            fb = data.get('fb'),
            twitter = data.get('twitter'),
            xing = data.get('xing'),
            linkedin = data.get('linkedin'),
            youtube =  data.get('youtube'),
            github = data.get('github'),
            insta = data.get('insta'),
            website = data.get('website'),
        )
        return JsonResponse({}, status=201)
        return JsonResponse({}, status=400)
    else:
        return redirect('Basic_user_url')

@csrf_exempt
def newComments(request):
    '''
    Method to create a comment out of a POST Method
    '''
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = serializers.CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        return redirect('newComment')


@csrf_exempt
def changecomment(request):
    '''
    Method to change a comment with the PATCH Method
    '''
    if request.method == 'PATCH':
        data = JSONParser().parse(request)
        serializer = serializers.CommentSerializer(data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        return redirect('Apps-Basic-Url')



@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    '''
    Managing login for the rest-api will respone a TOKEN to login without user/pass combination
    '''
    username = request.data.get("email")
    password = request.data.get("password")
    print(username)
    print(password)
    if username is None or password is None:
        return Response({'error': 'Username or Password is missing'}, status=HTTP_400_BAD_REQUEST)
    user = authenticate(email=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'}, status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return JsonResponse({'token': token.key, 'user_id': user.id}, status=HTTP_200_OK)

@csrf_exempt
@api_view(['GET','POST'])
@authentication_classes((TokenAuthentication,))
def createApp(request):
    '''
    Method to recieve data via POST-Method and Store it in the Database
    '''
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = serializers.AppSerializer(data=data)
        print(data)
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=502)
    else:
        return JsonResponse({"test":"est"}, status=500)


# Delete something

@csrf_exempt
@api_view(['GET','POST'])
@authentication_classes((TokenAuthentication,))
def deleteComment(request):
    '''
    Method to delete a Comment out of a POST request
    '''
    if request.method == 'POST':
        try:
            current_user = request.user
            data = commentModel.objects.all().filter(creator=current_user.id).filter(appID=request.data.get("comment_Id")).delete()
            return JsonResponse({
                "Note" : "Your Comment has been deleted {}".format(data)
            }, status=201)
        except:
            return JsonResponse({
            "error" : "Please check your credentials"
        }, status=400)
    else:
        return redirect('Basic_user_url')

@csrf_exempt
@api_view(['GET','POST'])
@authentication_classes((TokenAuthentication,))
def deleteApp(request):
    '''
    Method to delete a App out of a POST request
    '''
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            print(data)
            current_user  = data.get('creator')
            print(current_user)
            whichapp  = data.get('app_Id')
            data = appModel.objects.all().filter(creator=current_user).filter(appID=whichapp).delete()
            print(data)
            return JsonResponse({
                "Note" : "Your APP has been deleted {}".format(data)
            }, status=201)
        except Exception as error:
            print(error)
            return JsonResponse({
            "error" : "Please check your credentials"
        }, status=400)
    else:
        return redirect('Basic_user_url')


@csrf_exempt
@api_view(['GET','POST'])
@authentication_classes((TokenAuthentication,))
def deleteUser(request):
    '''
    Method to delete a User out of a POST request
    '''
    if request.method == 'POST':
        try:
            current_user = request.user
            userId= current_user.id 
            data = userModel.objects.all().filter(id=userId).delete()
            return JsonResponse({
                "Note" : "Your accounted has been deleted {}".format(data)
            }, status=201)
        except:
            return JsonResponse({
            "error" : "Please check your credentials"
        }, status=400)
    else:
        return redirect('Basic_user_url')

# Update Function

@csrf_exempt
@api_view(['GET','POST'])
@authentication_classes((TokenAuthentication,))
def updateApp(request):
    '''
    Method to update a App out of a POST request
    '''
    if request.method == 'POST':
        try:
            current_user = request.user
            mod = appModel.objects.all().filter(creator=current_user.id).filter(appID=request.data.get("app_Id"))
            setattr(mod, str(request.data.get("field_to_change"), request.data.get('field_value')))
            mod.save([str(request.data.get("field_to_change"))])
            return JsonResponse({
                "Note" : "Your APP has been updated"
            }, status=201)
        except:
            return JsonResponse({
            "error" : "Please check your credentials"
        }, status=400)
    else:
        return redirect('Basic_user_url')

@csrf_exempt
@api_view(['GET','POST'])
@authentication_classes((TokenAuthentication,))
def updateComment(request):
    '''
    Method to update a App out of a POST request
    '''
    if request.method == 'POST':
        try:
            current_user = request.user
            mod = commentModel.objects.all().filter(creator=current_user.id).filter(post=request.data.get("app_Id"))
            setattr(mod, str(request.data.get("field_to_change"), request.data.get('field_value')))
            mod.save([str(request.data.get("field_to_change"))])
            return JsonResponse({
                "Note" : "Your Comment has been updated"
            }, status=201)
        except:
            return JsonResponse({
            "error" : "Please check your credentials"
        }, status=400)
    else:
        return redirect('Basic_user_url')

@csrf_exempt
@api_view(['GET','POST'])
@authentication_classes((TokenAuthentication,))
def updateUser(request):
    '''
    Method to update a App out of a POST request
    '''
    if request.method == 'POST':
        try:
            current_user = request.user
            mod = userModel.objects.all().filter(id=current_user.id)
            setattr(mod, str(request.data.get("field_to_change"), request.data.get('field_value')))
            mod.save([str(request.data.get("field_to_change"))])
            return JsonResponse({
                "Note" : "Your Profil has been updated"
            }, status=201)
        except:
            return JsonResponse({
            "error" : "Please check your credentials"
        }, status=400)
    else:
        return redirect('Basic_user_url')