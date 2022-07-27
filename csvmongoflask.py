from flask import Flask, render_template
from numpy import append
import pymongo
import pandas as pd
import csv

app = Flask(__name__)

client = pymongo.MongoClient("mongodb://localhost:27017")

df = pd.read_csv("data/data.csv")

db = client.data_db
cat = db.collection.insert_many(df.to_dict("records"))


dict_from_csv={}
    with open ('data/data.csv',mode='r') as inp:
        reader = csv.reader(inp)
        dict_from_csv = {rows[0]:rows[1] for rows in reader}
        print(dict_from_csv)

        
@app.route("/")
def home():
    
    # newDict=[]
    # for row in db.collection.find()[:10]:
    #     newDict.append(row["Name"])
    #     returndict = {"results":newDict}
    # return returndict

if __name__ == "__main__":
    app.run(debug=True)