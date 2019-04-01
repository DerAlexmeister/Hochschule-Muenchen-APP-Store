from rest_framework import serializers
from app_product import models
from users import models as userModel

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
            'typOfAccount',
            'Fakultaet'
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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = userModel.CustomUser
        fields = ('email', 
            'typOfAccount', 
        )