import requests
from django.shortcuts import render
from django.http import Http404, HttpResponse

import os
from . import settings


def index(request):
    return render(request, 'index.html')

def get_img(request, filename):
    img_dir = os.path.join(settings.STATICFILES_DIRS[0], 'img')
    img_path = os.path.join(img_dir, filename)

    if os.path.exists(img_path):
        with open(img_path, 'rb') as f:
            return HttpResponse(f.read(), content_type='image/png')
    else:
        raise Http404('Image not found')

        

