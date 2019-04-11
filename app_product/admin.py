from django.contrib import admin
from .models import APP,appKomments

'''
Add all models to the Adminpanel 
'''
admin.site.register(APP)
admin.site.register(appKomments)