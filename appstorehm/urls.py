from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('my/', admin.site.urls),
    path('', views.index),
    path('test/', views.test),
    path('test2/', views.test2),
    path('test2/login', views.login_),
    path('test2/logout', views.login_)
]