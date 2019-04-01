from django.shortcuts import render
from rest_framework import generics
from .models import APP as appModel
from . import serializers

class AppListView(generics.ListCreateAPIView):
    queryset = appModel.objects.all()
    serializer_class = serializers.AppSerializer