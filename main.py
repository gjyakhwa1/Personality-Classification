from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import pickle
from sklearn.feature_extraction.text import CountVectorizer


class SearchItem(BaseModel):
    text: str
    model: str


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

vectorizer = pickle.load(open('./models/vectorizer.sav', 'rb'))

models = {}
models["MultiNomial Naive Bayes"]=pickle.load(open("./models/multinomial.sav", 'rb'))
models["Logistic Regression"]=pickle.load(open("./models/logistic.sav", 'rb'))
models["Linear Support Vector Classifier"]=pickle.load(open("./models/linear_svc.sav", 'rb'))
models["K Nearest Neighbor"]=pickle.load(open("./models/knn.sav", 'rb'))
models["Random Forest Classifier"]= pickle.load(open("./models/rf_classifier.sav", 'rb'))


@app.post("/")
async def find_personality(search: SearchItem):
    vectorize_post = vectorizer.transform([search.text])
    result = models[search.model].predict(vectorize_post)[0]
    return {"searchResult": result}
