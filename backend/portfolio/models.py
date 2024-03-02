from django.db import models
from django.utils import timezone
from django.template.defaultfilters import slugify


class AboutMe(models.Model):
    picture = models.ImageField(upload_to='images/about-me/')
    about_me = models.TextField()
    cv = models.FileField(upload_to='cv/')

    class Meta:
        verbose_name_plural = "About me"

    def __str__(self):
        return 'About Me'


class Teck(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/tecks/')

    def __str__(self):
        return self.name


class MainTeck(models.Model):
    teck = models.ForeignKey(Teck, on_delete=models.CASCADE)

    def __str__(self):
        return self.teck.name + ' is a main teck'


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='', blank=True)
    image = models.ImageField(upload_to='images/projects/main/')
    year = models.IntegerField(default=timezone.now().year)
    live_link = models.URLField(default='', blank=True)
    github_link = models.URLField(default='', blank=True)

    slug = models.SlugField(editable=False, unique=True)

    def save(self, *arg, **kwargs):
        self.slug = slugify(self.name)
        super(Project, self).save(*arg, **kwargs)

    def __str__(self):
        return self.name + ' - ' + str(self.year) + ' - ' + ('github' if self.github_link else '') + ' - ' + ('live' if self.live_link else '')


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    description = models.TextField(default='', blank=True)
    image = models.ImageField(upload_to='images/projects/')

    def __str__(self):
        return self.project.name + ' - ' + self.image.name


class ProjectTeck(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    teck = models.ForeignKey(Teck, on_delete=models.CASCADE)

    def __str__(self):
        return self.project.name + ' has build with ' + self.teck.name
