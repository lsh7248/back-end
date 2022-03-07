from django.views.generic import ListView, DetailView

from noticeBoard.models import Post


class PostLV(ListView):
    model = Post
    # template_name = 'noticeBoard/post_list.html'

class PostDV(DetailView):
    model = Post