const router = require("express").Router(), // just getting  express router
user = require('../models/user'); // getting user
// handling get request
router.route("/").get((req,res)=>{
  user.find()
  .then((users)=> res.json(users)) // returning all users
  .catch(err => res.status(400).json('error: ' + err))
}) // ends get request
// handling post request
router.route("/add").post((req,res)=>{
  const firstName = req.body.firstName,
  lastName = req.body.lastName,
  newUser = new user({firstName,lastName}); // creating new user
  newUser.save()
  .then(()=> res.json('new user added!'))
  .catch((err)=> res.json('error: ' + err))
}) // post request
module.exports = router;