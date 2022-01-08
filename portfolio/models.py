from django.db import models
from taggit.managers import TaggableManager


class Project(models.Model):
    image = models.ImageField(upload_to='projects_image/')
    name = models.CharField(max_length=80)
    description = models.TextField()
    date = models.DateField(auto_now_add=True)
    slug = models.SlugField(max_length=100)
    tags = TaggableManager()

    def __str__(self):
        return self.name


class ProjectLink(models.Model):
    site_name = models.CharField(max_length=80)
    url = models.CharField(max_length=200)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.project} - {self.site_name} - {self.url}'
