import os
from gdrive_connection import GspreadConnection

class GdriveWriter(object):
    def __init__(self):
        self.connection = GspreadConnection()
        self.file_key = os.environ.get('GDRIVE_FILE_KEY')

    def add_guests_to_gdrive(self, name, phone, number):
        sheet = self.connection.gc.open_by_key(os.environ.get('GDRIVE_FILE_KEY'))
        print "Adding to gspread: name, phone, number = %s, %s, %s" % (name, phone, number)
        sheet.worksheet('Sheet1').append_row([name, phone, number])


