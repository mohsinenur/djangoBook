from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Post
from .serializers import UserSerializer, PostSerializer
import re


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )

    def create(self, request, *args, **kwargs):
        if 'username' in request.data:
            phone_re = "(^([+]{1}[8]{2}|0088|88)?(01){1}[3-9]{1}\d{8})$"
            if re.search(phone_re, request.data['username']):
                response = {'message': request.data['username']}
                return Response(response, status=status.HTTP_200_OK)
            else:
                response = {'message': 'Phone number is not valid.'}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
        else:
            response = {'message': 'Username field is mendatory'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    # permission_classes = (AllowAny, )
