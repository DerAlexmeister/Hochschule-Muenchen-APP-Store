from django.test import TestCase
from .models import CustomUser

class userTestClass(TestCase):

    def setUp(self):
        CustomUser.objects.create(
            typOfAccount = 'ST',
            Fakultaet = 'FK01',
            email = 'test@test.com',
            password = 'test',
        )


    def test_password(self):
        testUser = CustomUser.objects.first()
        self.assertNotEqual(
            testUser.password, 
            'test',
            'Got a different password then expected'
            )

    def test_isActive(self):
        testUser = CustomUser.objects.first()
        self.assertTrue(
            testUser.is_active, 
            'Got a different boolan for isActive then expected'
            )

    def test_isNoStuff(self):
        testUser = CustomUser.objects.first()
        self.assertTrue(
            testUser.is_stuff, 
            'Got a different boolan for isNoStuff then expected'
            )

    def test_email(self):
        testUser = CustomUser.objects.first()
        self.assertEqual(
            testUser.email, 
            'test@test.com',
            'Got a different email then expected'
            )

    def test_typeOfAccount(self):
        testUser = CustomUser.objects.first()
        self.assertEqual(
            testUser.typOfAccount, 
            'ST',
            'Got a different Account-Type then expected'
            )

    def test_FAK(self):
        testUser = CustomUser.objects.first()
        self.assertEqual(
            testUser.Fakultaet, 
            'FK01',
            'Got a different FK then expected'
            )

    def test_date_joined(self):
        testUser = CustomUser.objects.first()
        self.assertIsNotNone(
            testUser.date_joined, 
            'date_joined is None but expected not to be none'
            )
