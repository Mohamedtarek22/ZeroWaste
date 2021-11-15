# Generated by Django 3.2.7 on 2021-10-10 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20211008_1420'),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('subtitle', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='images/')),
            ],
            options={
                'verbose_name': 'team',
                'verbose_name_plural': 'team',
            },
        ),
        migrations.AddField(
            model_name='setting',
            name='email',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]