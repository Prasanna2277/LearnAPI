from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'items',ItemsetView)

urlpatterns = [
    path('',include(router.urls)),
    path('register/',RegisterApiView.as_view(),name = 'register'),
    path('login/',CustomLoginView.as_view(), name='login'),

]

