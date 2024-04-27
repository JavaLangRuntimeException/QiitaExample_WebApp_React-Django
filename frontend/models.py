from django.db import models

# Create your models here.
# models.py

from django.db import models

class Users(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
