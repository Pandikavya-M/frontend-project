from django.db import models

# Create your models here.
class Datas(models.Model):
    Firstname=models.CharField(max_length=25,default="")
    Lastname=models.CharField(max_length=25,default="")
    Email=models.CharField(max_length=50,default="")
    Password=models.CharField(max_length=20,default="")