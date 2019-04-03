from django.urls import include, path
from . import views


urlpatterns = [
    #Apps
    path('apps/', views.appListView, name="Apps-Basic-Url"),
    path('apps/new', views.app_list),
    path('apps/<int:pk>', views.app_details),
    path('apps/newest', views.newestAppsListView.as_view()),
    path('apps/oldest', views.oldestAppsListView.as_view()),
    path('apps/mostdownloads', views.mostDownloadsListView.as_view()),
    path('apps/lessdownloads', views.tinyDownloadsListView.as_view()),

    #User/Permission
    path('users/', views.UserListView.as_view())
]