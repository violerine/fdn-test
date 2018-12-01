
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

<b>How to install postgres<b>

with Homebrew
```
$ brew install postgresql
```

for windows can refer to this link 

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

<b>How to run client side<b>



```
Go to /client directory in terminal

$npm run serve
```

Open  http://localhost:8080/ in your browser.

<b>How to run server side</b>

```
Go to /server directory in terminal

$npm start
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

Explain what these tests test and why

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



