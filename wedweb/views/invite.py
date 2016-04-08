from flask.blueprints import Blueprint
from flask.templating import render_template
from wedweb import app


mod = Blueprint('invite', __name__)

@mod.route("/")
def invite(name=None):
    return render_template('invite.html', name=name)
