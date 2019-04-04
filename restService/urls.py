from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt  
from . import views

'''
URL Pattern for the entire REST-API
'''
urlpatterns = [
    # Apps
    path('apps/', views.appListView.as_view(), name="Apps-Basic-Url"),
    path('apps/new', views.app_list),
    path('apps/newest', views.newestAppsListView.as_view()),
    path('apps/oldest', views.oldestAppsListView.as_view()),
    path('apps/mostdownloads', views.mostDownloadsListView.as_view()),
    path('apps/lessdownloads', views.tinyDownloadsListView.as_view()),
    path('apps/newcomments', views.newComments, name="newComment"),
    path('apps/changecomment', views.changecomment, name="changecomment"),

    # Dynamic App URLs
    path('apps/<int:pk>', views.app_details),
    #path('apps/creator/<int:creator>', views.appsFromCreator, name="appsfromCreatorByID"),
    
    # User/Permission
    path('users/', views.UserListView.as_view(), name="Basic_user_url"),
    path('users/new', views.createUser, name="new User"),
    path('users/login', views.login, name="login_via_rest")
]