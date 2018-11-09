from flask import Flask, render_template
from flask_cors import CORS
import sys
import os
FRONTEND_FOLDER = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'frontend')
app = Flask(__name__, static_folder="../dist/static",
        template_folder="../dist")
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# @app.route('/')
# def hello_world():
#     return 'Hello World!'
@app.route('/')
def index():
    print(FRONTEND_FOLDER)
    print(sys.path)
    return render_template("index.html")


if __name__ == '__main__':
    app.run(host="127.0.0.1",port=8000)
