import flask
from datetime import datetime
import requests

app = flask.Flask(__name__)

@app.route("/")
def home():
   search_query_param = flask.request.args.get("q")

   if search_query_param:
      search_query = search_query_param

      if search_query.lower() == "all":
         response = requests.get('https://cms.factsforfriends.de/facts?_sort=createdAt:DESC')
      elif search_query.lower().startswith("kategorie:"):
         q = search_query.lower().split("kategorie:")[1]
         response = requests.get('https://cms.factsforfriends.de/facts?_sort=createdAt:DESC&category_contains=' + q)
      else:
         response = requests.get('https://cms.factsforfriends.de/facts?_sort=createdAt:DESC&snack_contains=' + search_query)

   else:
      search_query = ""
      response = requests.get('https://cms.factsforfriends.de/facts?_sort=createdAt:DESC&_limit=3')

   facts = response.json()
   
   for fact in facts:
      fact["tags"] = fact["tags"].split(" ")
      fact["categories"] = fact["category"].split(" ")
      fact["domain"] = fact["url"].split('/')[2].replace("www.", "")

      date_time_str = fact["createdAt"]
      date_parsed = datetime.strptime(date_time_str, '%Y-%m-%dT%H:%M:%S.%fZ')
      date_formatted = date_parsed.strftime("%d.%m.%Y")
      fact["date"] = date_formatted
      fact["snack"] = fact["snack"].replace('\n',' ')

   categories_response = requests.get('https://cms.factsforfriends.de/categories').json()
   categories = []
   for category in categories_response:
      categories.append(category["Name"])
   
   return flask.render_template("index.html", title="FactsForFriends", facts=facts, categories=categories, search_query=search_query)

@app.route("/snack/<string:snack_id>")
def snack(snack_id):
   print(snack_id)
   response = requests.get('https://cms.factsforfriends.de/facts/' + snack_id)
   fact = response.json()
      
   fact["tags"] = fact["tags"].split(" ")
   fact["categories"] = fact["category"].split(" ")
   #fact["domain"] = urlparse(fact["url"]).netloc

   date_time_str = fact["updatedAt"]
   date_parsed = datetime.strptime(date_time_str, '%Y-%m-%dT%H:%M:%S.%fZ')
   date_formatted = date_parsed.strftime("%d.%m.%Y %H:%M")
   fact["date"] = date_formatted

   return flask.render_template("snack_detail.html", title="FactsForFriends", fact=fact)

@app.route("/aboutus")
def about_us():
   return flask.render_template("about_us.html")

@app.route("/about/<string:name>")
def about(name):
   return flask.render_template(f'about/{name}.html')

@app.errorhandler(404)
def page_not_found(e):
    return flask.render_template('error/404.html'), 404

def create_app():
   app.run(debug=False)

if __name__ == "__main__":
   app.run(debug=True)