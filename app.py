from flask import Flask, render_template, jsonify, send_from_directory
from flask_cors import CORS
import bib
from constants import *
import time

# automatically serve all files from folder /static at url /
app = Flask(__name__, static_url_path='')

#CORS(app)


@app.route('/bib')
def getAllBibs():
    #time.sleep(2)
    return jsonify(bib.readJsonBib())

@app.route('/')
def root():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    bib.parseBib(verbose = True)
    app.run(host='0.0.0.0', port=80, threaded=True)

