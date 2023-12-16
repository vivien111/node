from django.http import HttpResponse
from django.shortcuts import render


def home_view(request):
    #return HttpResponse('Bonjour Tout le monde!')
    return render (request, 'home.html')
