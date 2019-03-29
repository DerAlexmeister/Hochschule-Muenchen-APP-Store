from django.shortcuts import render, HttpResponse, redirect
from django.contrib import admin
from django.shortcuts import render,HttpResponse, redirect
from django.contrib.auth.models import User as user
from django.contrib import auth
from django.contrib import admin

def index(request):
    return HttpResponse("Hallo Welt")


def test(request):
    return redirect(admin.site.urls)


def test2(request):
    return render(request, 'test.html')

def login_(request):
    if request.method == 'POST' and not request.user.is_authenticated:
        validusr = auth.authenticate(username=request.POST.get('username'), password=request.POST.get('psw'))
        if validusr is not None:
            auth.login(request, validusr)
            return HttpResponse("logged in ")
        else:
            return HttpResponse("Not logged in")
    elif request.user.is_authenticated:
        return HttpResponse("Hallo Welt User")
    else:
        return HttpResponse("Hallo Welt")


def logout_(request):
    if request.method == 'POST' and request.user.is_authenticated:
        return HttpResponse("You are now Logged out")
    else:
        return HttpResponse("Hallo Welt")