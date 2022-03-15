from .base import *

SECRET_KEY = 'django-insecure-8ygm!z__d)d@dq*w@f3s_m&g)+2^*wc^j&8+#=ex&)f26@!_2c'

DEBUG = False

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}