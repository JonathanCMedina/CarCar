from django.shortcuts import render
from .models import Sale, Salesperson, AutomobileVO, Customer
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from sales_rest.encoders import (
    AutomobileVOEncoder,
    SalespersonEncoder,
    CustomerEncoder,
    SaleEncoder)


# Create your views here.

@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
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
def api_delete_salesperson(request, pk):
    if request.method == "DELETE":
        count, _ = Salesperson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
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
def api_delete_customer(request, pk):
    if request.method == "DELETE":
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_id = content['automobile']
            salesperson_id = content['salesperson']
            customer_id = content['customer']

            automobile = AutomobileVO.objects.get(id=automobile_id)
            salesperson = Salesperson.objects.get(id=salesperson_id)
            customer = Customer.objects.get(id=customer_id)

            content['automobile'] = automobile
            content['salesperson'] = salesperson
            content['customer'] = customer

            sale = Sale.objects.create(**content)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {'message': 'This automobile does not exist'},
                status=400
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {'message': 'This salesperson does not exist'},
                status=400
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {'message': 'This customer does not exist'},
                status=400
            )

@require_http_methods(["DELETE"])
def api_delete_sale(request, pk):
    if request.method == "DELETE":
        count, _ = Sale.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
