import json
from flask.blueprints import Blueprint
from flask.helpers import make_response
from flask.templating import render_template
from flask import abort, request, logging
from wedweb.gdrive.gdrive_writer import GdriveWriter
from wedweb import app


mod = Blueprint('invite', __name__)
logger = logging.create_logger(app)

@mod.route("/")
def invite():
    return render_template('invite.html')


@mod.route("/rsvp", methods=['GET', 'POST'])
def rsvp():
    data = json.loads(request.data)
    name = data.get('name')
    phone = data.get('phone')
    guests = data.get('guests')

    if name is None:
        abort(404)

    if phone is None:
        abort(404)

    if guests is None:
        abort(404)

    writer = GdriveWriter()
    writer.add_guests_to_gdrive(name, phone, guests)

    logger.info("Saved (%s,%s,%s) to gspread" % (name, phone, guests))

    return make_response(render_template('invite.html'))
