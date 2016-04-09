import os
import gspread
from oauth2client.service_account import ServiceAccountCredentials


class GspreadConnection(object):
    def __init__(self):
        self._gc = None
    
    @property
    def gc(self):
        if self._gc is None:
            cred_file = os.environ.get('GOOGLE_APPLICATION_CREDENTIALS')
            scope = ['https://spreadsheets.google.com/feeds']
            credentials = ServiceAccountCredentials.from_json_keyfile_name(cred_file, scope)
            gc = gspread.authorize(credentials)
            self._gc = gc

        return self._gc


