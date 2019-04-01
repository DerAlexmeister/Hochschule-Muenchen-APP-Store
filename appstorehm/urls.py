from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index),
    path('admin/', admin.site.urls),
    path('api/', include('restService.urls')),
    path('rest-auth/', include('rest_auth.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)