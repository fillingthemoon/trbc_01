# TRBC Documentation
This project was created with ReactJS, AntDesign, ExpressJS and MongoDB.

The website is live at  [https://fillingthemoon.github.io/trbc_00/](https://fillingthemoon.github.io/trbc_00/).

![ ](https://trbcbucket.s3-ap-southeast-1.amazonaws.com/diagram.JPG)

# Backend
Overview (Half Assed UML)

![ ](https://trbcbucket.s3-ap-southeast-1.amazonaws.com/Half-Ass+UML.jpg)


    cd server
    npm start

## 
Our Team endpoint

    http://localhost:8080/team
GET (Success Response)

    
    
    [{
        "_id": "6043a8ae73aa4db5396c8360",
        "name": "Rev Adrian Limsssss",
        "designation": "Senior Pastor",
        "image": "https://trbcbucket.s3-ap-southeast-1.amazonaws.com/RevAdrianLim.jpg",
        "__v": 0
    }]
POST (Body)

    {
    "name":"Ivan Lim",
    "designation":"Caretaker",
    "image": "s3://trbcbucket/IvanChow.jpg"
    }

POST (Success)
    
    [{
        "name": "Ivan Lim",
        "designation": "Caretaker",
        "image": "s3://trbcbucket/IvanChow.jpg",
        "_id": "604429422ddf340e909c5d1f"
    }]
PUT (Body)

    {
    "_id": "604429422ddf340e909c5d1f",
    "name":"Ivan Li m",
    "designation":"Caretaker",
    "image": "s3://trbcbucket/IvanChow.jpg"
    }

PUT (Success)

    {
    "n": 1,
    "nModified": 1,
    "opTime": {
        "ts": "6936715780423680001",
        "t": 10
    },
    "electionId": "7fffffff000000000000000a",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6936715780423680001",
        "signature": {
            "hash": "ts1MDZWtG3+pqu13oBVixUX/IRY=",
            "keyId": "6896689704586969092"
        }
    },
    "operationTime": "6936715780423680001"}
DELETE (Body)

    {
    "_id": "604429422ddf340e909c5d1f"
    }



