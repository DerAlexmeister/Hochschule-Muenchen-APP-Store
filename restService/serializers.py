from rest_framework import serializers
from app_product import models

class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.APP
        fields = ('appID', 'creator', '')

    