from flask.templating import render_template
from wedweb import app

@app.route("/")
def invite(name=None):
    return render_template('invite.heml', name=name)
