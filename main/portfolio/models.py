from django.db import models


class Projects(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=1000)
    image = models.ImageField(upload_to='projects-img')
    github_link = models.URLField(max_length=500)
    site_link = models.URLField(max_length=500, blank=True)
