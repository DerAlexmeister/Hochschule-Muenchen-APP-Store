
![](https://github.com/DerAlexx/HM-APP-Store/blob/master/static/img/logo_with_name_github.png)
# 🤘🏼 🤘🏼  Appmon 🤘🏼 🤘🏼 

![](https://github.com/DerAlexx/HM-APP-Store/blob/master/src/assets/banner1.jpg)
# FAQ ❓ ❔ ❓ ❔ ❓ 
## Was ist Appmon ❓
``` Informationen 
Appmon ist ein Appstore für die Hochschule München. Er bietet die Möglichkeit sich 
anzumelden bzw. sich zu registieren und Software anzulegen und herunterzuladen. Hierbei 
ist er nicht auf nur für eine Fakultät vorgesehen und auch nicht nur für Professoren 
sondern Studenten jeder Fakultät können ihre Projekte veröffentlichen. Studenten die 
nicht der Hochschule München angehören haben die Option sich als Externer Student 
anzumelden und so Software herunterzuladen oder zu veröffentlichen. Da natürlich ein 
gewisser Qualitätsstandart gewahrt werden  möchte kann ein Creator (Appersteller) durch 
ein Administrator zu einem verifizierten Nutzer erhoben werden (zu erkennen an einem 
grünen Haken neben dem Namen des Creators auf dessen Profilseite) und somit als 
verlässliche Quelle betrachtet werden. 

```

## Für wen ist Appmon ❔
``` Informationen
Für Studenten, Professoren, wissenschaftliche Mitarbeiter und externe 
Kooperationspartner (Studenten und Professoren sowie Mitarbeiter anderer Hochschulen).

```
## 👨🏼‍🎓  👩🏼‍🎓  👩🏼‍🏫 👨🏼‍🏫  👩🏼‍🔧 👨🏼‍🔧 👩🏼‍🔬 👨🏼‍🔬

## Wie bekomme ich einen Zugang zu Appmon ❓
``` Informationen
Einfach auf der Seite registieren und einloggen!
 
--> hmappstore.heroku-app.com/signup 
```
## Ich bin nicht von der FK07 kann ich Appmon trotzdem nutzen ❔
``` Informationen
Natürlich! Jeder der Hochschule München ist willkommen! Hierbei ist es egal ob du von 
der Hochschule München kommst oder von einer anderen Fakultät bist. Registiere dich
einfach und dann kannst du deine Software oder dein Service mit anderen Teilen. 
```
# Umsetzung 👨🏼‍💻

``` Creator
    > Alexander M. Westphal 😎 
    > Paul Schröder 🤓
```

# Technische Aspekte (für Nerds 👾 🤓)
``` Verwendete Versionen
    1. Python Django (Backend) 🐍
        1. Version Python: 3.7
        2. Version Django: 2.2
    2. ReactJS (Frontend) 💫
        1. Version npm: 6.8.0
        2. Version React: 16.8.6
        3. Version NodeJS: 11.10.0
    3. Gunicorn (Webserver) 🦄
        1. Version Gunicorn: 19.9.0
        2. Version Django-WSGI: 2.2 (Python 3.7)
    4. PostGresSQL/SQLite3 (Datenbank) 🐘 🕊
        1. SQLite3 (Entwicklungsdatenbank): 3.27.2
        2. Version PostGresSQL (Produktivdatenbank): 11.2
    
```

# Python Module (notwendig) 🐍
``` astroid==2.2.5
    attrs==19.1.0
    autobahn==19.3.2
    Automat==0.7.0
    certifi==2019.3.9
    chardet==3.0.4
    colorama==0.4.1
    constantly==15.1.0
    defusedxml==0.5.0
    dj-database-url==0.5.0
    Django==2.1.7
    django-allauth==0.37.1
    django-channels==0.7.0
    django-cors-headers==2.5.2
    django-filter==2.1.0
    django-rest-auth==0.9.3
    djangorestframework==3.9.1
    gunicorn==19.9.0
    hyperlink==18.0.0
    idna==2.8
    incremental==17.5.0
    isort==4.3.15
    lazy-object-proxy==1.3.1
    Markdown==3.0.1
    mccabe==0.6.1
    oauthlib==3.0.1
    Pillow==5.4.1
    psycopg2==2.7.7
    psycopg2-binary==2.7.7
    PyHamcrest==1.9.0
    pylint==2.3.1
    pylint-django==2.0.6
    python3-openid==3.1.0
    pytz==2018.9
    requests==2.21.0
    requests-oauthlib==1.2.0
    six==1.12.0
    txaio==18.8.1
    typed-ast==1.3.1
    urllib3==1.24.1
    whitenoise==4.1.2
    wrapt==1.11.1
    zope.interface==4.6.0
```

# Projekt-Struktur 📁

``` ServerStrucktur
    1. Django-Projekt (Python/Backend) 📁
        1. Microservices 
            1. app_product (Model und funktionen einer APP für den Appstore)
            2. appstorehm (Hauptapp die alle anderen Microservices verwaltet)
            3. restService verantwortlich für alle REST-API funktionen
            4. users Micorservice für das Usermanagement (+ Models und Manager)
    2. ReactJS (Frontend) 📁
        1. /build enthält alle gebauten ReactJS-Dateien
        2. /pulbic alle öffentlich zugänglichen nicht-Django-static-Dateien
        3. package(-json),yarn.lock information über npm, react, etc.
        4. /src sourceefolder der ReactJS Dateien
    3. Heroku spezifische Dateien 📁
        1. Procfile (Heroku file für Prozesse)
        2. Runtime.txt (Runtime version für Python)
        3. Requirements.txt (Notwendige Packete für Django/Python)
    4. Staticfiles (Javascript [nicht ReactJS], CSS, Bilder, etc.) 📁
        1. /static/ enthält alle statischen Dateien im Entwicklungsmodus
        2. /live-static-files/ enthält alle Dateien für Productionsmodus
    5. Sonstige Dateien (Medien/etc.) 📁
        1. gimp_files (enthält alle gimp Dateien für Logos, etc.)
        2. gitfiles (README.md, gitignore, gitattributes)
        3. /testJson enthält testprogramme für die REST-API
```

# REST-API-URL

``` Rest
    Basisadresse: www.hostname.de/api/... 

    1. /apps/... (Gibt ein set mit allen Apps zurück) ✔️
        1. /new (erzeigt eine neue App in der Datenbank)
        2. /newest (liefert ein Set mit allen Apps sortiert nach Neuheit)
        3. /oldest (umgekehrt zu /newest)
        4. /mostdownloads (Set sortiert mit den erfolgreichstens Apps absteigend)
        5. /lessdownloads (umgekehrt zu /mostdownloads)
        6. /<int:pk> (gib detailierte Informationen über die App aus)
        7. //creator/c/<int:creator> (Gibt Informationen über den Creator aus)

        # not in use so dont use them ❌

        8. /creator/<int:creator> / (Gibt alle Apps eines Creators)
        9. /newcomments (Erzeugt einen neuen Kommentar)
        10. /changecomment (ermöglicht das ändern eines Kommentars)

    2. /users/ ... (Gibt ein Set mit allen usern zurück) ✔️
        1. /new (Erzeugt einen neuen User)
        2. /login (Logged einen User ein)
```
 
# Ziele und Verbesserungen für die Zukunft 📈 🔮 
``` Informationen 
    1. Eine Verbindung der Accounts mit offiziellen Primusaccounts  ✅
    2. Höhere Vielfalt an Apps und Software 🎏
    3. Mobile Appstore 📱
```
# Release 🥂
``` Release 
    Releaseplan 📅

    1. Release v. 1.0 am 01.05.2019
    2. Release v. (noch in Planung)
```