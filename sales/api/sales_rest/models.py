from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


class Salesperson(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    employee_id = models.CharField(max_length=20)


class Customer(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=13)


class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sale",
        on_delete=models.CASCADE,
        null=True
        )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sale",
        on_delete=models.CASCADE,
        null=True
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sale",
        on_delete=models.CASCADE,
        null=True
    )
    price = models.PositiveIntegerField()
