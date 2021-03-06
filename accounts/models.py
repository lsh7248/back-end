from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)

ORGANIZATION_SELETED = (
    ('USER', '직원'),
    ('EXECE', '임원'),
    ('STAFF', '스탭'),
    ('ADMIN', '관리자'),
)

class MyUserManager(BaseUserManager):
    def create_user(self, user_id, email, name, organization, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not user_id:
            raise ValueError('Users must have an email address')

        user = self.model(
            user_id=user_id,
            name=name,
            email=self.normalize_email(email),
            organization=organization,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, user_id, email, name, organization, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            user_id,
            password=password,
            name=name,
            email=self.normalize_email(email),
            organization=organization,
        )
        user.is_admin = True
        user.is_active = True
        user.is_develop = True
        user.save(using=self._db)
        return user


class TimestampedModel(models.Model):
    # 생성된 날짜를 기록
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    # 수정된 날짜를 기록
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    class Meta:
        abstract = True
        ordering = ['-created_at', '-updated_at']

class User(AbstractBaseUser, TimestampedModel, PermissionsMixin):
    user_id = models.CharField(
        verbose_name='사번',
        max_length=20,
        unique=True,
        default='',
    )
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        default='',
    )
    name = models.CharField(
        verbose_name='이름',
        max_length=20,
        default='',
    )
    organization = models.CharField(
        verbose_name='권한 신청',
        max_length=5,
        choices=ORGANIZATION_SELETED,
        default='USER'
    )

    is_active = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_develop = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'user_id'
    REQUIRED_FIELDS = ['name', 'email', 'organization']

    def __str__(self):
        return self.user_id

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin