from django.db import models
from django.conf import settings
#from users.models import CustomUser

def user_directory_path(instance, filename):
      return 'user_{0}/{1}'.format(instance.user.id, filename)

class APP(models.Model):
    creator = models.ForeignKey(
      settings.AUTH_USER_MODEL,
      on_delete=models.CASCADE
    )
    appname = models.CharField(max_length=128)
    body = models.TextField(max_length=500)
    downloads = models.IntegerField(default=0)
    upload = models.ImageField(upload_to=user_directory_path)


    