from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index),
    path('admin/', admin.site.urls),
    path('api/user/', include('users.urls')),
    path('api/apps/', include('app_product.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('test2/', views.test2),
    path('test2/login', views.login_),
    path('test2/logout', views.login_)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)