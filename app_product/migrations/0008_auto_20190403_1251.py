# Generated by Django 2.1.7 on 2019-04-03 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_product', '0007_auto_20190401_1700'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='app',
            name='keywords',
        ),
        migrations.AlterField(
            model_name='app',
            name='body',
            field=models.TextField(max_length=512),
        ),
        migrations.AlterField(
            model_name='appkomments',
            name='title',
            field=models.CharField(max_length=128),
        ),
    ]
