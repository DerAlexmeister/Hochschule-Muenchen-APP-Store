import json
from django.test import TestCase, Client
from django.urls import reverse
from rest_framework.test import APIRequestFactory
from rest_framework import status
from . import views
from . import serializers
from users.models import CustomUser
from app_product.models import APP
from users.forms import CustomUserCreationForm, CustomUserAdmin

client = Client()

class testClassBasedGetRestAPIViews(TestCase):

    def setUp(self):
        newInstance = CustomUserCreationForm(
            typOfAccount = 'ST',
            Fakultaet = 'FK01',
            email = 'test@test.com',
            password = 'dashieristeintestpasswort',
        )

        self.valid_user = {
            "username" : "test@test.com",
            "password" : "dashieristeintestpasswort"
        }

    def test_apps_general_singleApp_200(self):
        response = client.get(reverse('Apps-Basic-Url'))
        self.assertEquals(
            response.status_code, 
            status.HTTP_200_OK,
            "Expected a 200 response but got a different one"
        )
        

    def test_newestApps_200(self):
        response = client.get(reverse('newestApps'))
        self.assertEquals(
            response.status_code, 
            status.HTTP_200_OK,
            "Expected a 200 response but got a different one"
        )

    def test_oldestsApps_200(self):
        response = client.get(reverse('oldestApps'))
        self.assertEquals(
            response.status_code, 
            status.HTTP_200_OK,
            "Expected a 200 response but got a different one"
        )

    def test_most_downloads_200(self):
        response = client.get(reverse('mostDownloads'))
        self.assertEquals(
            response.status_code, 
            status.HTTP_200_OK,
            "Expected a 200 response but got a different one"
        )

    def test_less_downloads_200(self):
        response = client.get(reverse('lessDownloads'))
        self.assertEquals(
            response.status_code, 
            status.HTTP_200_OK,
            "Expected a 200 response but got a different one"
        )

    def test_users_401(self):
        response = client.get(reverse('Basic_user_url'))
        self.assertEquals(
            response.status_code, 
            status.HTTP_401_UNAUTHORIZED,
            "Expected a 401 response but got a different one"
        )

    def test_users_200(self):
        response = client.post(
            reverse('Basic_user_url'),
            data = json.dumps(
                self.valid_user
            ),
            content_type='application/json'
        )
        self.assertEquals(
            response.status_code, 
            status.HTTP_401_UNAUTHORIZED,
            "Expected a 401 response but got a different one"
        )
        


class functionBasedPOSTOnlyAPIRequests(TestCase):

    def setUp(self):
        testUser = CustomUser.objects.create(
            typOfAccount = 'ST',
            Fakultaet = 'FK01',
            email = 'test@test.com',
            password = 'test',
        )
        APP.objects.create(
            creator = testUser,
            appname = 'TESTAPP',
            body = 'Body',
            website = 'www.test.com',
            contectEmail = 'anotherEmail@something.de',
            typOfAccount = 'ST',
            Fakultaet = 'FK01',
        )

    def test_creator_profil(self):
        return 0


#    def test_app_id(self):
