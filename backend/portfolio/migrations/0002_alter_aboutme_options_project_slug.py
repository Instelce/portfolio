# Generated by Django 5.0.2 on 2024-03-02 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='aboutme',
            options={'verbose_name_plural': 'About me'},
        ),
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(default=''),
            preserve_default=False,
        ),
    ]