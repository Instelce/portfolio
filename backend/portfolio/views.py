from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import *
from .serializers import *


@api_view(['GET'])
def get_about_me(request, format=None):
    serializer = AboutMeSerializer(AboutMe.objects.first())
    return Response(serializer.data)


@api_view(['GET'])
def get_main_teck(request, format=None):
    serializer = MainTeckSerializer(MainTeck.objects.all(), many=True)
    return Response(serializer.data)


class TeckReadOnlyViewSet(ReadOnlyModelViewSet):
    queryset = Teck.objects.all()
    serializer_class = TeckSerializer


class ProjectReadOnlyViewSet(ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


@api_view(['GET'])
def get_project_images(request, project_pk, format=None):
    serializer = ProjectImageSerializer(ProjectImage.objects.filter(project_id=project_pk), many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_project_tecks(request, project_pk, format=None):
    serializer = ProjectTeckSerializer(ProjectTeck.objects.filter(project_id=project_pk), many=True)
    return Response(serializer.data)

