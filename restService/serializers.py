from rest_framework import serializers
from app_product import models

class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.APP
        fields = ('appID', 
            'creator', 
            'appname', 
            'body',
            'downloads',
            'keywords',
            'createdAt',
            'lastMod',
            'website',
            'contectEmail',
            'sourcefiles',
            'smallPic',
            'bigimg',
        )

    
class CommentSerilzaer(serializers.ModelSerializer):
    class Meta:
        model = models.appKomments
        fields = ('creator',
            'post',
            'title',
            'kommentar',
            'createdAt',
            'lastMod'
        )