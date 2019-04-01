from django.shortcuts import render
from rest_framework import generics
from app_product.models import APP as appModel
from . import serializers

class AppListView(generics.ListCreateAPIView):
    queryset = appModel.objects.all()
    serializer_class = serializers.AppSerializer
