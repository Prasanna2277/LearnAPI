from django.shortcuts import render
from .models import Item
from .serializers import *
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.exceptions import AuthenticationFailed

# Create your views here.
class ItemsetView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = Item.objects.all()
        serializer = Itemserializer(queryset, many=True)
        return Response(serializer.data)

    

class RegisterApiView(CreateAPIView):
    serializer_class= Userserializer
    permission_classes = [AllowAny]

    def post(self,request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message':'user registration successfull'})
        
        else:
            return Response({'message':'Failed'})


class CustomLoginView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer