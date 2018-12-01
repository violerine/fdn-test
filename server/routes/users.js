var express = require('express');
var router = express.Router();
let { addNewUser,getUsers, removeUser, pivotTable, dynamicPivot} = require ('../controllers/user_controller')

/* GET users listing. */
router.get('/',getUsers );

router.post('/new',addNewUser)
router.delete('/delete',removeUser)
router.get('/pivot',pivotTable)
router.get('/dynamicpivot',dynamicPivot)


module.exports = router;
