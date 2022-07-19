from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import pickle
from sklearn.feature_extraction.text import CountVectorizer

class SearchItem(BaseModel):
    text:str
    model:str

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

vectorizer=pickle.load(open('./models/vectorizer.sav','rb'))

@app.post("/")
async def find_personality(search:SearchItem):
    postList=[]
    postList.append(search.text)
    vectorize_post=vectorizer.transform(postList)
    loaded_model=None
    if search.model=="MultiNomial Naive Bayes":
        loaded_model = pickle.load(open("./models/multinomial.sav", 'rb')) 
    elif search.model=="Logistic Regression":
        loaded_model = pickle.load(open("./models/logistic.sav", 'rb')) 
    elif search.model=="Linear Support Vector Classifier":
        loaded_model = pickle.load(open("./models/linear_svc.sav", 'rb'))
    elif search.model=='K Nearest Neighbor':
        loaded_model = pickle.load(open("./models/knn.sav", 'rb'))
    else:
        loaded_model = pickle.load(open("./models/rf_classifier.sav", 'rb')) 
    result = loaded_model.predict(vectorize_post)[0]
    return {"searchResult":result}


