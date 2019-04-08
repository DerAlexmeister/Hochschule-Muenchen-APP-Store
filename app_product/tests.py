from django.test import TestCase
from .models import APP,appKomments
from users.models import CustomUser

class AppUserCommentsRelationshipTestCase(TestCase):
    
    def setUp(self):
        testUser = CustomUser.objects.create(
            typOfAccount = 'ST',
            Fakultaet = 'FK01',
            email = 'test@test.com',
            password = 'test',
        )
        app = APP.objects.create(
            creator = testUser,
            appname = 'TESTAPP',
            body = 'Body',
            website = 'www.test.com',
            contectEmail = 'anotherEmail@something.de',
            typOfAccount = 'ST',
            Fakultaet = 'FK01',
        )
        appKomments.objects.create( 
            creator=testUser,
            post=app,
            title="Testtitle",
            kommentar="Kommentarfeld"
        )

    
    def test_creatorEquals(self):
        testcomment = appKomments.objects.first()
        users = CustomUser.objects.first()
        self.assertEqual(
            testcomment.creator, 
            users,
            'Got a different creator then expected'
            )


    def test_postEquals(self):
        testcomment = appKomments.objects.first()
        app = APP.objects.first()
        self.assertEqual(
            testcomment.post, 
            app,
            'Got a different post then expected'
            )

    def test_titleEquals(self):
        testcomment = appKomments.objects.first()
        self.assertEqual(
            testcomment.title, 
            "Testtitle",
            'Got a different title then expected'
            )

    def test_kommentarEquals(self):
        testcomment = appKomments.objects.first()
        self.assertEqual(
            testcomment.kommentar, 
            "Kommentarfeld",
            'Got a different kommentar then expected'
            )

    def test_notNoneDate(self):
        testcomment = appKomments.objects.first()
        self.assertIsNotNone(
            testcomment.createdAt,
            "createdAt date is None but expected not to be none"
        )

    def test_notNoneDate_changed(self):
        testcomment = appKomments.objects.first()
        self.assertIsNotNone(
            testcomment.lastMod,
            "lastMod date is None but expected not to be none"
        )

class AppTestCase(TestCase):
    
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

    def test_appid(self):
        testapp = APP.objects.first()
        self.assertEqual(
            testapp.appID, 
            1,
            'Got a different appID then expected'
        )

    def test_creatorEquals(self):
        testapp = APP.objects.first()
        users = CustomUser.objects.first()
        self.assertEqual(
            testapp.creator, 
            users,
            'Got a different creator then expected'
        )

    def test_titleEquals(self):
        testapp = APP.objects.first()
        self.assertEqual(
            testapp.appname, 
            'TESTAPP',
            'Got a different appname then expected'
            )

    def test_BodyEquals(self):
        testapp = APP.objects.first()
        self.assertEqual(
            testapp.body,
            'Body',
            'Got a different body then expected'
            )

    def test_downloads(self):
        testapp = APP.objects.first()
        self.assertEqual(
            testapp.downloads, 
            0, 
            'Got different downloads then expected'
        )

    def test_createdAt(self):
        testapp = APP.objects.first()
        self.assertIsNotNone(
            testapp.createdAt,
            "createdAt date is None but expected not to be none"
        )
    
    def test_lostMod(self):
        testapp = APP.objects.first()
        self.assertIsNotNone(
            testapp.lastMod,
            "lastMod date is None but expected not to be none"
        )
    
    def test_WebsiteEquals(self):
        testapp = APP.objects.first()
        self.assertEqual(
            testapp.website, 
            'www.test.com',
            'Got a different website then expected'
            )

    def test_ContectEmailEquals(self):
        testapp = APP.objects.first()
        self.assertEqual(
            testapp.contectEmail, 
            'anotherEmail@something.de',
            'Got a different Email then expected'
            )

    def test_typeOfAccount(self):
        testapp = APP.objects.first()
        self.assertEqual(
            testapp.typOfAccount, 
            'ST',
            'Got a different Account-Type then expected'
            )

    def test_FAK(self):
        testapp = APP.objects.first()
        self.assertEqual(
            testapp.Fakultaet, 
            'FK01',
            'Got a different FK then expected'
            )