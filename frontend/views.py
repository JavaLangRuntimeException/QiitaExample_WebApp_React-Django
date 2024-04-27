from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import Users

# Create your views here.
def index(request, *args, **kwargs):
   return render(request, 'frontend/index.html')

class UserViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
