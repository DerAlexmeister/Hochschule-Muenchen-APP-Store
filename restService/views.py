from django.shortcuts import render
from rest_framework import generics
from app_product.models import APP as appModel
from users.models import CustomUser as userModel
from . import serializers
from rest_framework.permissions import IsAuthenticated 

class AppListView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = appModel.objects.all()
    serializer_class = serializers.AppSerializer


class UserListView(generics.ListCreateAPIView):
    queryset = userModel.objects.all()
    serializer_class = serializers.UserSerializer


