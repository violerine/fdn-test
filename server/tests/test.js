var assert = require('assert');

const chai = require ('chai');
var chaiHttp = require ('chai-http')

var server = require ('../app')
var model = require ("../models")
var UserModel = model.User
var { addNewUser, getUsers, removeUser, pivotTable} = require ('../controllers/user_controller')

chai.use(chaiHttp)

describe('User model should have some properties',function(){
    it('should have property id',function(){
      let user = new UserModel()
      user.should.have.property('id')
      user.should.have.property('firstName')
      user.should.have.property('lastName')
      user.should.have.property('email')
      user.should.have.property('quantity')
      user.should.have.property('item')
      user.should.have.property('totalPrice')
    })
})

describe('get all users',()=>{
  it('should return status 200',(done)=>{
    chai.request(server)
    .get('/users')
    .end((err,res)=>{
      res.should.have.status(200)
      res.body.should.be.a('array')
      done()
    })
  })
})

describe('add new user',()=>{
  it('add new user and should return status 200',(done)=>{
    let userTest = {
      firstName: 'Testing firstName',
      lastName: 'testing lastname',
      email:'testing@mail.com',
      item:'barang1',
      quantity:2,
      totalPrice:100000
    }
    chai.request(server)
    .post('/users/new')
    .send(userTest)
    .end((err,res)=>{
        res.should.have.status(200)
      // res.body.should.be.a('object')
      done()
    })
  })
})


describe('delete user',()=>{
  it('should delete one specified user and return status 200',(done)=>{
    let userId = {
      id: 1
    }
    chai.request(server)
    .delete('/users/delete')
    .end((err,res)=>{
      res.should.have.status(200)
      done()
    })
  })
})

describe('show pivotted table',()=>{
  it('should return pivoted table',(done)=>{
    chai.request(server)
    .get('/users/pivot')
    .end((err,res)=>{
      res.should.have.status(200)
      res.body.should.be.a('array')
      done()
    })
  })
})


