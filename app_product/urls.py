from django.urls import include, path

from . import views


urlpatterns = [
    path('', views.AppListView.as_view()),
]