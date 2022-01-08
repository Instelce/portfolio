from django.contrib import admin

from .models import *


class ProjectUrlInline(admin.TabularInline):
    model = ProjectLink
    extra = 3


class ProjectsAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,      {'fields': ['image']}),
        ('Content', {'fields': ['name']}),
        (None,      {'fields': ['description']}),
        ('Tags',    {'fields': ['tags']}),
    ]
    inlines = [ProjectUrlInline]


admin.site.register(Project, ProjectsAdmin)
admin.site.register(ProjectLink)
