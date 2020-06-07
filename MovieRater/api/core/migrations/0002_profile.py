# Generated by Django 2.2.7 on 2019-12-01 06:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email_verify', models.CharField(default='0', max_length=10)),
                ('phone', models.CharField(max_length=15, unique=True)),
                ('phone_verify', models.CharField(default='0', max_length=10)),
                ('gender', models.CharField(blank=True, max_length=100, null=True)),
                ('password_recovery', models.CharField(default='0', max_length=10)),
                ('bio', models.TextField(blank=True, max_length=500)),
                ('location', models.CharField(blank=True, max_length=30)),
                ('birth_date', models.DateField(blank=True, null=True)),
                ('district', models.CharField(blank=True, max_length=64, null=True)),
                ('account_active', models.CharField(default='0', max_length=1)),
                ('account_block', models.CharField(default='0', max_length=1)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]