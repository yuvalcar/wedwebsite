from flask import Flask
import logging
from flask.templating import render_template
from werkzeug.contrib.fixers import ProxyFix

app = Flask(__name__)
app.config.from_object('webconfig')

app.wsgi_app = ProxyFix(app.wsgi_app)

@app.before_first_request
def setup_logging():
    if not app.debug:
        # In production mode, add log handler to sys.stderr.
        app.logger.addHandler(logging.StreamHandler())
        app.logger.setLevel(logging.INFO)

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404


from wedweb.views import invite
app.register_blueprint(invite.mod)
