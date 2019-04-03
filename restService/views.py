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

class appListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all()
    serializer_class = serializers.AppSerializer

@csrf_exempt
def app_details(request, pk):
    return JsonResponse('lala', status=200)


class UserListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all Users in the Database
    only accessably as an Loggedin Admin
    '''
    permission_classes = (IsAuthenticated, IsAdminUser)
    queryset = userModel.objects.all()
    serializer_class = serializers.UserSerializer


class newestAppsListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database 
    sorted by their creationtime newest to oldest
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all().order_by('-createdAt')
    serializer_class = serializers.AppSerializer


class oldestAppsListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database 
    sorted by their creationtime oldest to newest
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all().order_by('createdAt')
    serializer_class = serializers.AppSerializer


class mostDownloadsListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database 
    sorted by their downloadrates best to worst
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all().order_by('-downloads')
    serializer_class = serializers.AppSerializer


class tinyDownloadsListView(generics.ListCreateAPIView):
    '''
    Simple Class-Based-View to show all APPS in the Database 
    sorted by their downloadrates worst to best
    '''
    http_method_names = ['get']
    queryset = appModel.objects.all().order_by('downloads')
    serializer_class = serializers.AppSerializer

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