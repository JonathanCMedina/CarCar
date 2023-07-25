from common.json import ModelEncoder
from .models import Sale, Salesperson, AutomobileVO, Customer

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id", "vin", "sold"
    ]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "id", "first_name", "last_name", "employee_id"
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id", "first_name", "last_name", "address", "phone_number"
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price"
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
    }
