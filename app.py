# -*- coding: utf-8 -*-
# http://champtheme.net/factory/

from flask import Flask, Markup, abort, current_app, render_template, jsonify, _app_ctx_stack

import sqlite3, markdown

app = Flask(__name__)
# app.config.from_pyfile('CONFIG')

# Route
@app.route("/")
def index():
    return render_template('test.html')


@app.route("/test")
def test():
    return render_template('website_top.html')


# run
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=801, threaded=True)
    # app.run(host='127.0.0.1', port=801, threaded=True)
