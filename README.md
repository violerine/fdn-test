
# FDN Test

Display users table and pivotted table

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
npm
postgres
vue-cli
```

<b>How to install postgres</b>

with Homebrew
```
$ brew install postgresql
```

for Windows can refer to this link 

https://www.postgresql.org/download/windows/

<b>How to install vue</b>

```
$npm install -g @vue/cli
```

### Installing


```
$git clone https://github.com/violerine/fdn-test.git
```

The file consists of two folder, client and server. 

<b>How to run client side</b>



```
Go to /client directory in terminal

$npm run serve
```

Open  http://localhost:8080/ in your browser.

<b>How to run server side</b>

* Run postgres local database, create database name 'fdn'
* Import userdata.sql file to your local  postgres 


```
Go to /server directory in terminal

$npm start
```

Running on localhost:5000 .

To change the port go to file bin/www , search for 

```
var port = normalizePort(process.env.PORT || '5000');

```

## API 


| API  | HTTP | Purpose |
| ------------- | ------------ | ------------- |
| /users | GET | get all users   |
| /users/new | POST | add new user  |
| /users/delete | DELETE| delete user with specific id  |
| /user/dynamicpivot | GET | get pivotted user table by item  |


## Running the tests

Explain how to run the automated tests for this system

```
$npm test
```

### Break down into end to end tests


```
// Need properties id,firstname,lastname,email,item,quantity,totalprice

describe('User model should have some properties',function(){
    it('should have property id',function(){
        ...
    })
})

// Success displaying all user from database

describe('get all users',()=>{
  it('should return status 200',(done)=>{
      ...
  })
})

// Success adding new user to database 
describe('add new user',()=>{
  it('add new user and should return status 200',(done)=>{
      ...
  })
})

// Sucess deleting new user with specified Id
describe('delete user',()=>{
  it('should delete one specified user and return status 200',(done)=>{
      ...
  })
})

// Display the table with item types in column.

describe('show pivotted table',()=>{
  it('should return pivoted table and status 200',(done)=>{
        ...
    })
  })
})

```


## Built With

* VueJs  - The client framework used
* ExpressJs 
* Postgres

## Testing

* Mocha
* Chai


## Authors

* **Glady Sefirina** *



