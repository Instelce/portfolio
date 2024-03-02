from rest_framework.serializers import ModelSerializer

from .models import *


class AboutMeSerializer(ModelSerializer):
    class Meta:
        model = AboutMe
        fields = [
            'picture',
            'about_me',
            'cv'
        ]
        read_only_fields = fields


class TeckSerializer(ModelSerializer):
    class Meta:
        model = Teck
        fields = [
            'name',
            'image'
        ]
        read_only_fields = fields


class MainTeckSerializer(ModelSerializer):
    teck = TeckSerializer()

    class Meta:
        model = MainTeck
        fields = [
            'teck'
        ]
        read_only_fields = fields


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = [
            'name',
            'description',
            'image',
            'year',
            'live_link',
            'github_link',
            'slug'
        ]
        read_only_fields = fields


class ProjectImageSerializer(ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = [
            'project',
            'description',
            'image'
        ]
        read_only_fields = fields


class ProjectTeckSerializer(ModelSerializer):
    class Meta:
        model = ProjectTeck
        fields = [
            'project',
            'teck'
        ]
        read_only_fields = fields
