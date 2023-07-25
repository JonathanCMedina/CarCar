from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)

    def get_api_url(self):
        return reverse("show_technician", kwargs={"pk": self.id})

    def __str__(self):
        return self.name

class Appointment(models.Model):
    date_time = models.DateTimeField
    reason = models.TextField
    status = models.BooleanField(default=False)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.PROTECT,
        null=True
    )

    def get_api_url(self):
        return reverse("show_appointment", kwargs={"pk": self.id})

    def __str__(self):
        return self.name
