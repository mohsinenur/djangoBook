from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email_verify = models.CharField(max_length=10, default='0')
    phone = models.CharField(max_length=15, unique=True)
    phone_verify = models.CharField(max_length=10, default='0')
    gender = models.CharField(max_length=100, null=True, blank=True)
    password_recovery = models.CharField(max_length=10, default='0')
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    district = models.CharField(max_length=64, null=True, blank=True)
    account_active = models.CharField(max_length=1, default='0')
    account_block = models.CharField(max_length=1, default='0')
    last_login = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=False)
    deleted = models.BooleanField(default=False)


class Post(models.Model):
    description = models.CharField(max_length=1000)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=False)
    deleted = models.BooleanField(default=False)
