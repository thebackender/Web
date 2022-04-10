from django.urls import include, path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'vacancies', VacancyViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('companies/<int:id>/vacancies', CompanyVacancyViewSet.as_view()),
    path('vacancies/top_ten', TopTenVacancyViewSet.as_view())
]