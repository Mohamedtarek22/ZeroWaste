# Generated by Django 3.2.7 on 2021-10-10 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20211010_1542'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='facebook',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='team',
            name='linkedin',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='team',
            name='twitter',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
