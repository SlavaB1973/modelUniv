import io
import random
from flask import Flask
import datetime
from flask import request

app = Flask(__name__,static_url_path='/', static_folder='..//build')

@app.route('/')
def index():
    result = app.send_static_file('index.html')
    return result

@app.route('/app/time')
def get_time():
    return {'time':datetime.datetime.now(),'name':'Slava Birfir'}

@app.route('/app/great')
def get_great():
    username = request.args.get('name',default = 'zopa', type = str)    
    return {'great':'Hello ' + username}

