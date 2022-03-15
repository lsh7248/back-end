from django.urls import path

from api import views

app_name = 'api'
urlpatterns = [
    path('post/list/', views.ApiPostLV.as_view(), name='post_list'),
    path('logout/', views.ApiLogoutView.as_view(), name='auth_logout'),

    # path('login/', views.ApiLoginView.as_view(), name='login')
]