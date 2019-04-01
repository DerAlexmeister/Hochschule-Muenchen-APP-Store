from django.urls import include, path
from . import views


urlpatterns = [
    #Apps
    path('apps/', views.AppListView.as_view()),
    path('apps/newest', views.AppListView.as_view()),
    
    #User/Permission
    path('users/', views.UserListView)

]