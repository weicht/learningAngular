#from flask import Flask
from __future__ import with_statement
from contextlib import closing
import os.path
from flask import Flask, make_response, request, session, g, redirect, url_for, abort, render_template, flash, _app_ctx_stack, json, jsonify
#from pymongo import MongoClient

#"g" is a special variable for our db connection

# configuration vars to load later
DEBUG = True
SECRET_KEY = 'development key'



app = Flask(__name__)
#load config variables from this file itself - all UPPERCASE vars will be used (see above)
app.config.from_object(__name__)


##### View stuff *****
@app.route('/')
def index():
    #flash('Displaying main Index of Angular experiements')
    #return render_template('index.html', title='Index Listing')
    #use make_response() so Flask's template engine is bypassed allowing Angular to be used
    return make_response(open('templates/index.html').read())

# use redirect() to reuse a route instead of render_tempate()
#    return redirect(url_for('show_entries'))



#### RESTful Services stuff ****
@app.route('/data/<username>', methods=['GET'])
def get_user(username):
    return jsonify( {'user': username} )



if __name__ == "__main__":
    app.run()

