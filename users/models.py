from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from .managers import CustomUserManager

'''
creating the directory depending on the username 
and the file to store it
'''
def user_directory_path(instance, filename):
      return 'user_{0}/{1}'.format(instance.getUserName(), filename)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    TypeOfUserAccount = (
    ('ST', 'Student'), #student
    ('SA', 'Staff'), #staff
    ('PR', 'Professor'), # prof
    ('Fr', 'Externer Student'), #foreign
    )

    FK = (
    ('FK01', 'Fakultät 01'),  
    ('FK02', 'Fakultät 02'),  
    ('FK03', 'Fakultät 03'),  
    ('FK04', 'Fakultät 04'),  
    ('FK05', 'Fakultät 05'),  
    ('FK06', 'Fakultät 06'),  
    ('FK07', 'Fakultät 07'),  
    ('FK08', 'Fakultät 08'),  
    ('FK09', 'Fakultät 09'),  
    ('FK10', 'Fakultät 10'),  
    ('FK11', 'Fakultät 11'),  
    ('FK12', 'Fakultät 12'),  
    ('FK13', 'Fakultät 13'),  
    ('FK14', 'Fakultät 14'),  
    )

    email = models.EmailField(_('email address'), unique=True)
    nickname = models.CharField(max_length=128, blank=True , default="Anonym")
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    typOfAccount = models.CharField(
        max_length=2,
        choices=TypeOfUserAccount,
        default='ST',
    )
    Fakultaet = models.CharField(
        max_length=4,
        choices=FK,
        default='FK07',
    )
    smallPic = models.ImageField(upload_to=user_directory_path, blank=True)
    linkImg = models.URLField(max_length=512, blank=True, null=True)
    fb = models.URLField(max_length=512, blank=True, null=True)
    twitter = models.URLField(max_length=512, blank=True, null=True)
    xing = models.URLField(max_length=512, blank=True, null=True)
    linkedin = models.URLField(max_length=512, blank=True, null=True)
    youtube =  models.URLField(max_length=512, blank=True, null=True)
    github = models.URLField(max_length=512, blank=True, null=True)
    insta = models.URLField(max_length=512, blank=True, null=True)
    website = models.URLField(max_length=512, blank=True, null=True)
    verified = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = CustomUserManager()

    def __str__(self):
        return self.email

    def getUserName(self):
        return str(self.email)


