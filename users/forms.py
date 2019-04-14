#https://testdriven.io/blog/django-custom-user-model/
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = CustomUser
        fields = (
                'email',
                'typOfAccount',
                'Fakultaet',   
        )

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = (
                'email',
                'typOfAccount',
                'Fakultaet',   
        )

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = (
        'email', 
        'is_staff', 
        'is_active',
        'date_joined',
        'smallPic',
        'linkImg',
        'verified',
        'typOfAccount',
        'Fakultaet'

    )
    list_filter = (
        'email', 
        'is_staff', 
        'is_active',
        'verified'
    )
    fieldsets = (
        (None, {'fields': (
        'email', 
        'password',
        'date_joined',
        'smallPic',
        'linkImg',
        'verified',
        'typOfAccount',
        'Fakultaet',
        'nickname',
        'fb', 
        'twitter',
        'xing',
        'linkedin', 
        'youtube',
        'github',
        'insta', 
        'website' 

    )}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email', 
                'password1',
                'password2',
                'is_staff', 
                'is_active',
                'date_joined',
                'smallPic',
                'linkImg',
                'verified',
                'typOfAccount',
                'Fakultaet',
                'nickname',
                'fb', 
                'twitter',
                'xing',
                'linkedin', 
                'youtube',
                'github',
                'insta', 
                'website' 
    )}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)
