from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import viewsets
from django.views import View
from rest_framework import generics

# Create your views here.
class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
class CompanyVacancyViewSet(generics.ListAPIView):
    serializer_class = VacancySerializer
    def get_queryset(self):
        id = self.kwargs['id']
        return Vacancy.objects.filter(company=id)
class TopTenVacancyViewSet(generics.ListAPIView):
    serializer_class = VacancySerializer
    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]