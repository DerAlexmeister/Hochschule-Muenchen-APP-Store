from django.urls import include, path
from . import views


urlpatterns = [
    #Apps
    path('apps/', views.AppListView.as_view()),
    path('apps/newest', views.newestAppsListView.as_view()),
    path('apps/oldest', views.oldestAppsListView.as_view()),
    path('apps/newest', views.mostDownloadsListView.as_view()),
    path('apps/oldest', views.tinyDownloadsListView.as_view()),

    #User/Permission
    path('users/', views.UserListView)
]