from django.urls import path

from .views import *

app_name = 'portfolio'
urlpatterns = [
    path('', home, name="home"),
    path('projets/', projects, name="projects"),
    path('tags/<slug:slug>/', tagged, name="tagged"),
]
