from rest_framework import serializers
from app_product import models
from users import models as userModel

class AppSmallSerializer(serializers.ModelSerializer):
    '''
    Serializer Class for the APP Model. (non Detailed Views)
    '''
    class Meta:
        '''
        Meta Class for the APP Model.
        '''
        model = models.APP
        fields = ('appID', 
            'creator', 
            'appname', 
            'body',
            'downloads',
            'smallPic',
            'typOfAccount',
            'Fakultaet', 
            'linkImg',
            'createdAt',
        )


class AppSerializer(serializers.ModelSerializer):
    '''
    Serializer Class for the APP Model.
    '''
    class Meta:
        '''
        Meta Class for the APP Model.
        '''
        model = models.APP
        fields = ('appID', 
            'creator', 
            'appname', 
            'body',
            'downloads',
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

class CommentSerializer(serializers.ModelSerializer):
    '''
    Serializer Class for the Comment Model.
    '''
    class Meta:
        '''
        Meta Class for the Comment Model.
        '''
        model = models.appKomments
        fields = ('creator',
            'post',
            'title',
            'kommentar',
            'createdAt',
            'lastMod'
        )


class UserSerializer(serializers.ModelSerializer):
    '''
    Serializer Class for the User Model.
    '''
    class Meta:
        '''
        Meta Class for the User Model.
        '''
        model = userModel.CustomUser
        fields = (
            'email', 
            'date_joined',
            'nickname',
            'smallPic',
            'linkImg',
            'verified',
            'typOfAccount',
            'Fakultaet',
            'fb', 
            'twitter',
            'xing',
            'linkedin', 
            'youtube',
            'github',
            'insta', 
            'website' 
        )