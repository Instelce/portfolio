from django.shortcuts import render, get_object_or_404
from django.views import generic

from .models import *
from taggit.models import Tag


def home(request):
    return render(request, 'portfolio/home.html')


def projects(request):
    projects = Project.objects.order_by('date')
    context = {'projects': projects}
    return render(request, 'portfolio/projects.html', context)


def tagged(request, slug):
    tag = get_object_or_404(Tag, slug=slug)

    projects = Project.objects.filter(tags=tag)

    context = {
        'tag': tag,
        'projects': projects,
    }

    return render(request, 'portfolio/projects.html', context)
