import os
import gspread
from oauth2client.client import GoogleCredentials


class GspreadConnection(object):
    def __init__(self):
        self._gc = None
    
    @property
    def gc(self):
        if self._gc is None:
            credentials = GoogleCredentials.get_application_default()
            credentials = credentials.create_scoped(['https://spreadsheets.google.com/feeds'])
            gc = gspread.authorize(credentials)
            self._gc = gc

        return self._gc


