from django.forms import ModelForm, TextInput,Textarea,FileInput
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

from ipywidgets import Textarea

from ckeditor_uploader.fields import RichTextUploadingField

class Setting(models.Model):
    address = models.CharField(blank=True,max_length=100)
    phone=models.CharField(blank=True,max_length=15)
    email=models.CharField(blank=True,max_length=50)
    gmail = models.CharField(blank=True,max_length=50)
    facebook = models.CharField(blank=True,max_length=50)
    twitter = models.CharField(blank=True,max_length=50)
    youtube = models.CharField(blank=True, max_length=50)
    instagram = models.CharField(blank=True, max_length=50)
    aboutus = RichTextUploadingField(blank=True)
    contact = RichTextUploadingField(blank=True)

    def __str__(self):
        return self.phone

class ContactMessage(models.Model):
    STATUS = (
        ('New', 'New'),
        ('Read', 'Read'),
        ('Closed', 'Closed'),
    )
    name= models.CharField(blank=True,max_length=20,null=False)
    email= models.CharField(blank=True,max_length=50)
    subject= models.CharField(blank=True,max_length=50)
    message= models.TextField(blank=True,max_length=255)
    status=models.CharField(max_length=10,choices=STATUS,default='New')
    ip = models.CharField(blank=True, max_length=20)
    note = models.CharField(blank=True, max_length=100)
    create_at=models.DateTimeField(auto_now_add=True)
    update_at=models.DateTimeField(auto_now=True)
    image =models.ImageField(blank=True,upload_to='images/')

    def __str__(self):
        return self.name
    
    

class ContactForm(ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject','message','image']
        widgets = {
            'name'   : TextInput(attrs={'class': 'input','placeholder':'Name & Surname'}),
            'subject' : TextInput(attrs={'class': 'input','placeholder':'Subject'}),
            'email'   : TextInput(attrs={'class': 'input','placeholder':'Email Address'}),
            'message' : TextInput(attrs={'class': 'input','placeholder':'Your Message','rows':'5'}),
            'image'     : FileInput(attrs={'class': 'input', 'placeholder': 'image', }),
        }


class imagesProjects(models.Model):
    image =models.ImageField(blank=True,upload_to='images/')


class Team(models.Model):
    name = models.CharField(max_length=50)
    subtitle =models.CharField(max_length=50)
    image =models.ImageField(upload_to="images/")
    facebook = models.CharField(blank=True, max_length=50)
    twitter = models.CharField(blank=True, max_length=50)
    linkedin=models.CharField(blank=True,max_length=50)


    class Meta:
        verbose_name = 'team'
        verbose_name_plural = 'team'

    def __str__(self):
        return self.name