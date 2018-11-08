from flask import Flask, render_template
import os
FRONTEND_FOLDER = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'frontend')
app = Flask(__name__, static_folder=os.path.join(FRONTEND_FOLDER, 'dist'),
        template_folder=FRONTEND_FOLDER)


# @app.route('/')
# def hello_world():
#     return 'Hello World!'
@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host="127.0.0.1",port=8080)
