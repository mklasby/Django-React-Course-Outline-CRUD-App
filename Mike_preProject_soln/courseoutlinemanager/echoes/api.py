from echoes.models import Echoes
from rest_framework import viewsets, permissions
from .serializer import EchoesSerializer

# Lead viewset
# we get CRUD api out of viewsets without having to define explicit message
# We don't even need to register the routes!


class EchoesViewSet(viewsets.ModelViewSet):
    queryset = Echoes.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EchoesSerializer
