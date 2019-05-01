from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt  
from . import views

'''
URL Pattern for the entire REST-API
'''
urlpatterns = [
    # Apps
    path('apps/', views.appListView.as_view(), name="Apps-Basic-Url"),
    path('apps/new', views.createApp, name="newAppsCreator"),
    path('apps/newest', views.newestAppsListView.as_view(), name="newestApps"),
    path('apps/oldest', views.oldestAppsListView.as_view(), name="oldestApps"),
    path('apps/mostdownloads', views.mostDownloadsListView.as_view(), name="mostDownloads"),
    path('apps/lessdownloads', views.tinyDownloadsListView.as_view(), name="lessDownloads"),
    path('apps/newcomments', views.newComments, name="newComment"),
    path('apps/changecomment', views.changecomment, name="changecomment"),
    path('apps/search/', views.searchApp, name='appsuche'),
    path('apps/delete', views.deleteApp, name="deleteApp"),

    # Dynamic App URLs
    path('apps/<int:pk>', views.app_details),
    path('apps/creator/<int:creator>', views.appsFromCreator, name="appsfromCreatorByID"),
    path('apps/creator/c/<int:creator>', views.infoCreator, name="CreatorByID"),

    # User/Permission
    path('users/', views.UserListView.as_view(), name="Basic_user_url"),
    path('users/new', views.createUser, name="new User"),
    path('users/login', views.login, name="login_via_rest")
]