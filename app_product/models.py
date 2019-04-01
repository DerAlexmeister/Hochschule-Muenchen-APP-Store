from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import JSONField,ArrayField
from django.utils import timezone
#from users.models import CustomUser

def user_directory_path(instance, filename):
      return 'media/user_{0}/{1}'.format(instance.creator.getUserName(), filename)

# class imagesForApp(models.Model):
#     img = models.ImageField(upload_to=user_directory_path)
#     name = models.TextField()
 
class APP(models.Model):
    appID = models.AutoField(primary_key=True)
    creator = models.ForeignKey(
      settings.AUTH_USER_MODEL,
      on_delete=models.CASCADE
    )
    appname = models.CharField(max_length=128)
    body = models.TextField(max_length=500)
    downloads = models.IntegerField(default=0)
    #upload = models.ManyToManyField(imagesForApp)
    keywords = JSONField()
    createdAt = models.DateTimeField(default=timezone.now)
    lastMod = models.DateField(auto_now=True)
    website = models.URLField(max_length=512, blank=True, null=True)
    contectEmail = models.EmailField(max_length=70)
    sourcefiles = models.FileField(upload_to=user_directory_path)
    objects = models.Manager()
  
class appKomments(models.Model):
    models.AutoField(primary_key=True)
    creator = models.ForeignKey(
      settings.AUTH_USER_MODEL,
      on_delete=models.CASCADE
    )
    post = models.ForeignKey(
            APP,
            on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    kommentar = models.CharField(max_length=1024)
    objects = models.Manager()