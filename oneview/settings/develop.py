from .base import *

SECRET_KEY = 'django-insecure-8ygm!z__d)d@dq*w@f3s_m&g)+2^*wc^j&8+#=ex&)f26@!_2c'

DEBUG = True

ALLOWED_HOSTS = []
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = ['http://127.0.0.1:8000', 'http://localhost:8000',
                         'http://127.0.0.1:8080', 'http://localhost:8080']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}