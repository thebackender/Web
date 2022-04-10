from rest_framework import serializers
from .models import *


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('name', 'description', 'salary', 'company')

class CompanySerializer(serializers.ModelSerializer):
    vacancies = VacancySerializer(many=True)
    class Meta:
        model = Company
        fields = ('name', 'description', 'city', 'address', 'vacancies')
