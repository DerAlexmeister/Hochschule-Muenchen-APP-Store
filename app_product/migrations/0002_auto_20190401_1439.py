# Generated by Django 2.1.7 on 2019-04-01 12:39

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app_product', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appkomments',
            name='createdAt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='appkomments',
            name='lastMod',
            field=models.DateField(auto_now=True),
        ),
    ]