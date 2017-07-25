from cgi import parse_qs
from wsgiref.simple_server import make_server
from jinja2 import Environment, FileSystemLoader
import fnmatch
import mimetypes
import sys
import json
import requests

# Set system encoding to UTF-8
reload(sys)
sys.setdefaultencoding('utf-8')

env = Environment(loader=FileSystemLoader('templates'))

#load config
with open('config.json') as json_data_file:
    config = json.load(json_data_file)

#unmatched endpoints
def not_found(environ, start_response):
    start_response('404 Not Found', [('content-type','application/json')])
    return ['route not found']

    return [template.render().encode('utf-8')]

#Main application page
def index(environ, start_response):
    start_response('200 OK', [('content-type','text/html')])
    template = env.get_template('index.html')

    return [template.render().encode('utf-8')]

#Api endpoint to get distance info
def distance(environ, start_response):
    try:
        parameters = parse_qs(environ.get('QUERY_STRING', ''))
        if len(parameters) < 2:
            start_response('400 BAD REQUEST', [('content-type','application/json')])
            return ['origin and destination required']
        values = {
            'origins': parameters['origin'][0],
            'destinations': parameters['destination'][0]
        }

        result = requests.get(config['googleMaps']['distanceMatrix'], params=values)
        distance = result.text.encode("utf8")
        start_response('200 OK', [('content-type','application/json')])
        return [distance]
    except Exception as e:
        start_response('400 BAD REQUEST', [('Content-Type', 'application/json')])
        return ['Error resolving distance']

#static files such as js and css
def static(environ, start_response):
    try:
        path = environ['PATH_INFO'].strip("/")
        mimeType = mimetypes.guess_type(path)
        mime = mimeType[0]
        file = open(path, "r")
        start_response(
            '200 OK',
            [
                ('content-type', mime)
            ]
        )
        return file
    except IOError as e:
        print "I/O error({0}): {1}".format(e.errno, e.strerror)
        start_response('404 NOT FOUND', [('Content-Type', 'text/plain')])
        return ['Error processing file']

def application(environ, start_response):
    for path, app in routes:
        if fnmatch.fnmatch(environ['PATH_INFO'], path):
            return app(environ, start_response)
    return not_found(environ, start_response)

routes = [
        ('/dist/*', static),
        ('/distance', distance),
        ('/', index)
    ]

httpd = make_server('', 8000, application)
print "Serving HTTP on port 8000..."

# Respond to requests until process is killed
httpd.serve_forever()
