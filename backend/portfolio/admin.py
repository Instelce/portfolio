from django.contrib import admin

from .models import *

admin.site.register(AboutMe)
admin.site.register(Teck)
admin.site.register(MainTeck)
admin.site.register(ProjectImage)
admin.site.register(ProjectTeck)


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage


class ProjectTeckInline(admin.TabularInline):
    model = ProjectTeck


class ProjectAdmin(admin.ModelAdmin):
    model = Project
    inlines = [
        ProjectImageInline,
        ProjectTeckInline
    ]


admin.site.register(Project, ProjectAdmin)
