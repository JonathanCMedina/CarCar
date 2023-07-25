from django.shortcuts import render
from .models import Sale, Salesperson, AutomobileVO, Customer
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from sales_rest.encoders import AutomobileVOEncoder, SalespersonEncoder, CustomerEncoder, SaleEncoder


# Create your views here.

@require_http_methods(["GET", "POST"])
def list_salespeople_view(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
            )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def delete_salesperson(request, pk):
    if request.method == "DELETE":
        count, _ = Salesperson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_customers_view(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def delete_customer(request, pk):
    if request.method == "DELETE":
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_sales_view(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder
        )
    else:
        content = json.loads(request.body)
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def delete_sale(request, pk):
    if request.method == "DELETE":
        count, _ = Sale.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
