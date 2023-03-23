const router = require("express").Router(), // just getting  express router
book = require('../models/book'), // getting user
pageSchema = require('../models/page'),
mongoose = require("mongoose"),
page = mongoose.model("page",pageSchema);
// handling get request
router.route("/").get((req,res)=>{
  book.find()
  .then((books)=> res.json(books)) // returning all users
  .catch(err => res.status(400).json('error: ' + err))
}) // ends get request
// handling post request
router.route("/add").post((req,res)=>{
  const obj = req.body;
  newBook = new book(); // creating new user
  const {name,autherId,autherName,autherPhoto,visibility,otherUsers,categories,bookCover} = obj;
  newBook.name = name
  newBook.autherId = autherId
  newBook.autherName = autherName
  newBook.autherPhoto = autherPhoto
  newBook.visibility = visibility
  newBook.otherUsers = otherUsers
  newBook.categories = categories  
  newBook.bookCover = bookCover
  newBook.save()
  .then((result)=> res.json({result}))
  .catch((err)=> res.json("error: " + err))
}) // post request
router.route("/add-page/:id").post((req,res)=>{
  // const {otherUsers,content,pageNumber,pageType,visibility} = req.body;
  // let newPage = new page(
  //   {
  //     content,
  //     pageNumber: Number(pageNumber),
  //     pageType,
  //     otherUsers,
  //     visibility
  //   }
  // );
  let newPage = new page({pageNumber: req.body.pageNumber,content: ""});
  book.findByIdAndUpdate(req.params.id,{ $push: {pages: newPage}}).then((result)=> res.json(newPage + result)).catch((err)=> res.json("error: " + err))

}) // ends add page route
// router.route("/delete-all").get((req,res)=>{
//   book.deleteMany()
//   .then((result)=> res.json(result)).catch((err)=> res.json(err))
// })
// this route handle search based on given condition
router.route("/search/:key/:value").get((req,res)=>{
  book.find({[req.params.key]: req.params.value}).then((o)=> res.json(o)).catch((err)=> res.json(err))
}) // ends search route
// this route will return single doc
router.route("/:id").get((req,res)=>{
  book.findById(req.params.id).then((o)=> res.json(o)).catch((err)=> res.json(err))
}) // ends getting single doc by id
router.route("/update-page/:id").post((req,res)=>{
  book.updateOne({_id: req.params.id}, { $set: { [req.body.field]: req.body.content } }).then((o)=> res.json(o)).catch((err)=> res.json(err))
}) // ens updtade-page route
router.route("/update-fields/:id").post((req,res)=>{
  book.updateMany({_id: req.params.id},
     { $set: req.body }).then((o)=> res.json(o)).catch((err)=> res.json(err))
})
module.exports = router;


