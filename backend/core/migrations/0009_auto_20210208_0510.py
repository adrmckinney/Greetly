# Generated by Django 3.1.6 on 2021-02-08 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20210208_0508'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='size',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
