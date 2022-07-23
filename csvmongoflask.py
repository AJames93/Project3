from flask import Flask, render_template
from numpy import append
import pymongo
import pandas as pd

app = Flask(__name__)

client = pymongo.MongoClient("mongodb://localhost:27017")

df = pd.read_csv("data.csv")

db = client.data_db
db.collection.insert_many(df.to_dict("records"))

@app.route("/")
def home():
    newDict=[]
    for row in db.collection.find()[:10]:
        newDict.append(row["Name"])
    returndict = {"results":newDict}
    return returndict

if __name__ == "__main__":
    app.run(debug=True)