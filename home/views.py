from django.shortcuts import render
from .models import Setting,ContactForm,ContactMessage,imagesProjects,Team
# Create your views here.
from django.http import HttpRequest,HttpResponse

from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, request
from django.contrib import messages
def index(request):
    setting=Setting.objects.get(pk=1)
    contact=ContactMessage.objects.all()
    images =imagesProjects.objects.all()
    team=Team.objects.all()
    context={'setting':setting,'contact':contact,'images':images,'team':team}
    return render(request,'index.html',context)


def contactus(request):
    if request.method == 'POST':  # check post
        form = ContactForm(request.POST)
        if form.is_valid():
            data = ContactMessage()  # create relation with model
            data.name = form.cleaned_data['name']  # get form input data
            data.email = form.cleaned_data['email']
            data.subject = form.cleaned_data['subject']
            data.message = form.cleaned_data['message']
            data.image= form.cleaned_data['image']
            data.ip = request.META.get('REMOTE_ADDR')
            data.save()  # save data to table
            messages.success(request, "Your message has ben sent. Thank you for your message.")
            return HttpResponseRedirect('/contact')
    form=ContactForm
    setting=Setting.objects.get(pk=1)
    context = {'setting': setting,'form':form}
    return render(request,'contact.html',context)

