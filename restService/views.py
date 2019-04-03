from django.shortcuts import render
from rest_framework import generics
from app_product.models import APP as appModel
from users.models import CustomUser as userModel
from . import serializers
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view


class AppListView(generics.ListCreateAPIView):
    queryset = appModel.objects.all()
    serializer_class = serializers.AppSerializer


class UserListView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, IsAdminUser)
    queryset = userModel.objects.all()
    serializer_class = serializers.UserSerializer


class newestAppsListView(generics.ListCreateAPIView):
    queryset = appModel.objects.all().order_by('-createdAt')
    serializer_class = serializers.AppSerializer


class oldestAppsListView(generics.ListCreateAPIView):
    queryset = appModel.objects.all().order_by('createdAt')
    serializer_class = serializers.AppSerializer


class mostDownloadsListView(generics.ListCreateAPIView):
    queryset = appModel.objects.all().order_by('-downloads')
    serializer_class = serializers.AppSerializer


class tinyDownloadsListView(generics.ListCreateAPIView):
    queryset = appModel.objects.all().order_by('downloads')
    serializer_class = serializers.AppSerializer


'''
@api_view(['GET', 'POST'])
def sortedByFakListView():
    if request.method == 'POST':
        
    else:
        queryset = appModel.objects.all().order_by('createdAt')
        serializer_class = serializers.UserSerializer '''