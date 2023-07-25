from django.urls import path
from .views import (
    api_list_customers, api_list_sales, api_list_salespeople,
    api_delete_customer, api_delete_sale, api_delete_salesperson
)


urlpatterns = [
    path("salespeople/", api_list_salespeople, name="list_salespeople_view"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path(
        "salespeople/<int:id>/",
        api_delete_salesperson,
        name="api_delete_salesperson"
        ),
    path("customers/<int:id>/", api_delete_customer, name="api_delete_customer"),
    path("sales/<int:id>/", api_delete_sale, name="api_delete_sale")
]
