from django.urls import include, path
from . import views


urlpatterns = [
    path('apps/', views.AppListView.as_view()),
    path('users/', views.UserListView)
]