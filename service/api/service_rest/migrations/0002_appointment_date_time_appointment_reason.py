# Generated by Django 4.0.3 on 2023-07-25 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='date_time',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='appointment',
            name='reason',
            field=models.TextField(null=True),
        ),
    ]
