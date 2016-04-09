from flask.blueprints import Blueprint
from flask.templating import render_template
from flask import abort, request
from wedweb.gdrive.gdrive_writer import GdriveWriter
from wedweb import app


mod = Blueprint('invite', __name__)


@mod.route("/")
def invite(name=None):
    return render_template('invite.html', name=name)


@mod.route("/rsvp")
def rsvp():
    name = request.args.get('name')
    phone = request.args.get('phone')
    guests = request.args.get('guests')

    if name is None:
        abort(404)

    if phone is None:
        abort(404)

    if guests is None:
        abort(404)

    writer = GdriveWriter()
    writer.add_guests_to_gdrive(name, phone, guests)

    return render_template('invite.html', name=name)
