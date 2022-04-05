from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Product, Category

from django.views import View
import json
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

@method_decorator(csrf_exempt, name='dispatch')

class ProductsView(View):
    def get(self, request):
        cnt = Product.objects.count()  # TOTAL books in the database
        products = Product.objects.all()  # Get all book objects from the database
        data = dict()
        for product in products:
            p = {
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active
            }
            data[product.id] = p
        return JsonResponse(data)
    def post(self, request):
        post_body = json.loads(request.body)
        name = post_body.get('name')
        price = post_body.get('price')
        description = post_body.get('description')
        count = post_body.get('count')
        is_active = post_body.get('is_active')

        product_data = {
            'name': str(name), 'price': float(price), 'description': str(description), 'count': int(count), 'is_active': bool(is_active)
        }
        obj = Product.objects.create(**product_data)
        data = {
            'message': f'Product created: {obj.id}'
        }
        return JsonResponse(data)

@method_decorator(csrf_exempt, name='dispatch')
class ProductView(View):
    def get(self, request, product_id):
        if Product.objects.filter(id=product_id).exists():
            product = Product.objects.get(id=product_id)
            data = {
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active
            }
        else:
            data = {
                'error': 'No such Product'
            }
        return JsonResponse(data)
    def put(self, request, product_id):
        if Product.objects.filter(id=product_id).exists():
            product = Product.objects.get(id=product_id)
            body = json.loads(request.body)
            name = body.get('name')
            price = body.get('price')
            description = body.get('description')
            count = body.get('count')
            is_active = body.get('is_active')
            product.name = name
            product.save()
            data = {
                'message': f'Changed: {product_id}'
            }
        else:
            data = {
                'error': 'No such Product'
            }
        return JsonResponse(data)

    def delete(self, request, product_id):
        if not Product.objects.filter(id=product_id).exists():
            data = {
                'message': f'Does not exist'
            }
            return JsonResponse(data)
        product = Product.objects.get(id=product_id)
        product.delete()
        data = {
            'message': f'Deleted: {product_id}'
        }
        return JsonResponse(data)

@method_decorator(csrf_exempt, name='dispatch')
class CategoriesView(View):
    def get(self, request):
        cnt = Category.objects.count()  # TOTAL books in the database
        categories = Category.objects.all()  # Get all book objects from the database
        data = dict()
        for category in categories:
            p = {
                'name': category.name
            }
            data[category.id] = p
        return JsonResponse(data)

    def post(self,request):
        body = json.loads(request.body)
        name = body.get('name')
        cat_data = {
            'name': str(name)
        }
        obj = Category.objects.create(**cat_data)
        data = {
            'message': f'Category created: {obj.id}'
        }
        return JsonResponse(data)

@method_decorator(csrf_exempt, name='dispatch')
class CategoryView(View):
    def get(self, request, category_id):
        if Category.objects.filter(id=category_id).exists():
            category = Category.objects.get(id=category_id)
            data = {
                'name': category.name
            }
        else:
            data = {
                'error': 'No such category'
            }
        return JsonResponse(data)