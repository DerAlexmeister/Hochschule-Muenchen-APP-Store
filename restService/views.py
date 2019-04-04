from django.shortcuts import render
from rest_framework import generics
from app_product.models import APP as appModel
from users.models import CustomUser as userModel
from . import serializers
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.shortcuts import redirect
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
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
#

@csrf_exempt
@api_view(['GET'])
@permission_classes((AllowAny, ))
def app_details(request, pk):
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
@permission_classes((AllowAny, ))
def appsFromCreator(request, creator):
    if request.method == 'GET':
        try:
            data = appModel.objects.get(creator=creator)
        except:
            return Response(status=HTTP_404_NOT_FOUND)
        if data is None:
            return JsonResponse({
            "error": "Unknown Creator"
        }, status=400)
        serialized_data = serializers.AppSerializer(data, many=True)
        return JsonResponse(serialized_data.data, status=200)
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
        serializer = serializers.UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
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
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Username or Password is missing'}, status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'}, status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key}, status=HTTP_200_OK)

@csrf_exempt
def app_list(request):
    '''
    Method to recieve data via POST-Method and Store it in the Database
    '''
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = serializers.AppSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        return redirect('Apps-Basic-Url')