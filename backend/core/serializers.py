from rest_framework import serializers
from .models import User, Card, UserFollowing
  

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'name' ]

    

class CardSerializer(serializers.HyperlinkedModelSerializer):
    author = UserSerializer(read_only=True)
   
    class Meta:
        model = Card
        fields = ['url', "pk", 'author', 'genre', "access",'message', 'created_at', "size", "color", "style", "font", "weight", "alignment", "textboxalignment","image", "textbackgroundopacity", "backgroundopacity", "backgroundcolor","textbackgroundcolor"]


class UserFollowingSerializer (serializers.ModelSerializer):
    
    class Meta:
        model = UserFollowing 
        fields = ['touser', "fromuser"]
        read_only_fields = ['fromuser']

    
