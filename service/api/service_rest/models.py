from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    href = models.CharField(max_length=255, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.id})

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Appointment(models.Model):
    date_time = models.DateTimeField(null=True)
    reason = models.TextField(null=True)
    status = models.CharField(max_length=10, default="Active")
    vin = models.CharField(max_length=17, unique=True) # Might need to change to false
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
        null=True
    )

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"vin": self.vin})

    def __str__(self):
        return self.vin
