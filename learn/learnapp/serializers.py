from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Item, CustomUser

class Itemserializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class Userserializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'role']

    def create(self, validate_data):
        user = CustomUser.objects.create_user(
            username=validate_data['username'],
            email=validate_data['email'],
            password=validate_data['password'],
            role=validate_data['role'],
        )
        return user


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data = update({'user': self.user.username})
        return data
