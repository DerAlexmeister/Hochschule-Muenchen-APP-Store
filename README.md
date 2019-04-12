
![](https://github.com/DerAlexx/HM-APP-Store/blob/master/static/img/logo_with_name_github.png)
# Appmon 

![](https://github.com/DerAlexx/HM-APP-Store/blob/master/src/assets/banner1.jpg)
# FAQ
## Was ist Appmon
``` Informationen
Appmon ist ein Appstore für die Hochschule München. 
```
## Was kann Appmon
``` Informationen
hss
```
## Für wen ist Appmon
``` Informationen
Für Studenten, Professoren, wissenschaftliche Mitarbeiter und externe   Kooperationspartner der Hochschule.
```
## Wie bekomme ich einen Zugang zu Appmon
``` Informationen
Einfach auf der Seite registieren und einloggen!
```
## Ich bin nicht von der FK07 kann ich Appmon trotzdem nutzen
``` Informationen
Natürlich! Jeder der Hochschule München ist willkommen!
```
# Umsetzung

``` Creator
    > Alexander M. Westphal
    > Paul Schröder 
```

# Technische Aspekte
``` Verwendete Versionen
    1. Python Django (Backend)
        1. Version Python: 3.7
        2. Version Django: 2.2
    2. ReactJS (Frontend)
        1. Version npm: 6.8.0
        2. Version React: 16.8.6
        3. Version NodeJS: 11.10.0
    3. Gunicorn (Webserver)
        1. Version Gunicorn: 19.9.0
        2. Version Django-WSGI: 2.2 (Python 3.7)
    4. PostGresSQL/SQLite3 (Datenbank)
        1. SQLite3 (Entwicklungsdatenbank): 3.27.2
        2. Version PostGresSQL (Produktivdatenbank): 11.2
    
```

# Python Module (notwendig)
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

# Projekt-Struktur

``` ServerStrucktur
    1. Django-Projekt (Python/Backend)
        1. Microservices 
            1. app_product (Model und funktionen einer APP für den Appstore)
            2. appstorehm (Hauptapp die alle anderen Microservices verwaltet)
            3. restService verantwortlich für alle REST-API funktionen
            4. users Micorservice für das Usermanagement (+ Models und Manager)
    2. ReactJS (Frontend)
        1. /build enthält alle gebauten ReactJS-Dateien
        2. /pulbic alle öffentlich zugänglichen nicht-Django-static-Dateien
        3. package(-json),yarn.lock information über npm, react, etc.
        4. /src sourceefolder der ReactJS Dateien
    3. Heroku spezifische Dateien
        1. Procfile (Heroku file für Prozesse)
        2. Runtime.txt (Runtime version für Python)
        3. Requirements.txt (Notwendige Packete für Django/Python)
    4. Staticfiles (Javascript [nicht ReactJS], CSS, Bilder, etc.)
        1. /static/ enthält alle statischen Dateien im Entwicklungsmodus
        2. /live-static-files/ enthält alle Dateien für Productionsmodus
    5. Sonstige Dateien (Medien/etc.)
        1. gimp_files (enthält alle gimp Dateien für Logos, etc.)
        2. gitfiles (README.md, gitignore, gitattributes)
        3. /testJson enthält testprogramme für die REST-API
```

# Ziele und Verbesserungen für die Zukunft
``` Informationen
    1. Eine Verbindung der Accounts mit offiziellen Primusaccounts
    2. Zugriff für anderen Universitäten und Hochschulen
    3. Höhere Vielfalt an Apps und Software
    4. Mobile Appstore
```
