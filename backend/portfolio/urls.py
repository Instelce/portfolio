from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import *

router = SimpleRouter()
router.register(r'tecks', TeckReadOnlyViewSet)
router.register(r'projects', ProjectReadOnlyViewSet)

urlpatterns = [
    path('', include(router.urls)),

    path('about-me', get_about_me),
    path('main-teck', get_main_teck),

    path('project-images/<int:project_pk>', get_project_images),
    path('project-tecks/<int:project_pk>', get_project_tecks)
]
