from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login
from .models import Datas
# Create your views here.
# def login (request):
#     if request.method=="POST":
#         username=request.POST['name']
#         password=request.POST['password']
#         user=authenticate(request, Firstname=username, Password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('new')
#         else:
#             return render(request, 'login.html', {'error': 'Invalid password'})
#     return render(request, "login.html")
#     #     user=Datas.objects.get(Firstname=username)
#     #     if user.Password==password:
#     #             return redirect ('new')
#     #     else:
#     #             return render(request,'login.html',{'error':'Invalid password'})
#     # return render(request,"login.html")

# def new(request):
#     return render(request,"new.html")

# def signup (request):
#     if request.method=="POST":
#         fname=request.POST['fname']
#         lname=request.POST['lname']
#         email=request.POST['email']
#         password=request.POST['password']

#         obj=Datas()
#         obj.Firstname=fname
#         obj.Lastname=lname
#         obj.Email=email
#         obj.Password=password
#         obj.save()
#         mydata=Datas.objects.all()
#     return render(request,"signup.html")

def login(request):
    if request.method == "POST":
        username = request.POST['name']
        password = request.POST['password']
        try:
            user = Datas.objects.get(Firstname=username)
            if user.Password == password:
                # You need to create a custom authentication backend to authenticate users using your custom model
                # For now, I'll just log the user in without authentication
                request.session['username'] = username
                return redirect('new')
            else:
                return render(request, 'login.html', {'error': 'Invalid password'})
        except Datas.DoesNotExist:
            return render(request, 'login.html', {'error': 'User does not exist'})
    return render(request, "login.html")

# def new(request):
#     if 'username' in request.session:
#         username = request.session['username']
#         return render(request, "new.html", {'username': username})
#     else:
#         return redirect('login')

def new(request):
    return render(request,"new.html")
    
def signup(request):
    if request.method == "POST":
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        password = request.POST['password']

        obj = Datas()
        obj.Firstname = fname
        obj.Lastname = lname
        obj.Email = email
        obj.Password = password
        obj.save()
        mydata = Datas.objects.all()
    return render(request, "signup.html")

def forget(request):
    
    if request.method=='POST':
        username=request.POST['name']
        npassword=request.POST['npassword']
        try:
            mydata = Datas.objects.get(Firstname=username)
            mydata.Password=npassword
            mydata.save()
            return redirect('log') 
        except Datas.DoesNotExist:
            return render(request, 'forget.html', {'error': 'User does not exist'})
    return render(request,"Forget.html")