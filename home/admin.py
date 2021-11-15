from django.contrib import admin
from .models import Setting,ContactMessage,imagesProjects,Team
# Register your models here.
class SettingtAdmin(admin.ModelAdmin):
    list_display = ['phone']
admin.site.register(Setting,SettingtAdmin)

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name','subject', 'update_at','status']
    readonly_fields =('name','subject','email','message','ip')
    list_filter = ['status']

admin.site.register(ContactMessage,ContactMessageAdmin)

admin.site.register(imagesProjects)
admin.site.register(Team)