from django.urls import include, path
from . import views


urlpatterns = [
    #Apps
    path('apps/', views.app_list),
    #path('apps/<int:pk>', views.app_list),
    path('apps/newest', views.newestAppsListView.as_view()),
    path('apps/oldest', views.oldestAppsListView.as_view()),
    path('apps/mostdownloads', views.mostDownloadsListView.as_view()),
    path('apps/lessdownloads', views.tinyDownloadsListView.as_view()),

    #User/Permission
    path('users/', views.UserListView.as_view())
]