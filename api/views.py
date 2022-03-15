from django.contrib.auth import login
from django.contrib.auth.views import LoginView
from django.http import JsonResponse
from django.views.generic.list import BaseListView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from api.views_util import obj_to_post
from noticeBoard.models import Post


class ApiPostLV(BaseListView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        #     safe: Dict인 경우 True, 아니면 False
        qs = context['object_list']
        postList = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=postList, safe=False, status=200)

# class ApiLoginView(LoginView):
#     def form_valid(self, form):
#         user = form.get_user()
#         login(self.request, user)
#         userDict = vars(user)
#         del userDict['_state'], userDict['password']
#         return JsonResponse(data=userDict, safe=True, status=200)
#
#     def form_invalid(self, form):
#         return JsonResponse(data=form.errors, safe=True, status=400)

class ApiLogoutView(APIView):

    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    # def form_valid(self, form):
    #     user = form.get_user()
    #     login(self.request, user)
    #     userDict = vars(user)
    #     del userDict['_state'], userDict['password']
    #     return JsonResponse(data=userDict, safe=True, status=200)
    #
    # def form_invalid(self, form):
    #     return JsonResponse(data=form.errors, safe=True, status=400)