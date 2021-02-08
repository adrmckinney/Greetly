# Generated by Django 3.1.6 on 2021-02-08 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_auto_20210208_1856'),
    ]

    operations = [
        migrations.RenameField(
            model_name='card',
            old_name='public',
            new_name='Access',
        ),
        migrations.AlterField(
            model_name='card',
            name='color',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='size',
            field=models.CharField(default='', max_length=100, null=True),
        ),
    ]