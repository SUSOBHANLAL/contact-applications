const express = require("express");
const asyncHaandler = require("express-async-handler")
const router = express.Router();
// const { getContactContact, getContact, createContact, updateContact, deleteContacts } = require("../controllers/contactController");

const Contact = require("../models/contactmodel")


router.route("/").get(asyncHaandler(async(req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
}))




// router.route("/").get(getContact)
router.route("/:id").get(asyncHaandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not fount")
    }
    res.status(200).json(contact)
}))




router.route("/").post( asyncHaandler(async (req,res) => {
   
    console.log("the request body is",req.body);
    
    const {name,email,phno} = req.body;

    if(!name || !email || !phno){
        res.status(400);
        throw new Error("all fields are menditary");
    }

    const contact = await Contact.create({
        name,
        email,
        phno,
    });

res.status(201).json(contact);
}))




router.route("/:id").put(asyncHaandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not fount")
    }

    const updateContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{ new: true} );

    res.status(200).json(updateContact)
}))

// router.route("/:id").put(asyncHaandler(async (req,res) => {
//     res.status(200).json({message:` update all the contacts ${req.params.id}`})
// }))


router.route("/:id").delete(asyncHaandler(async (req,res) => {

    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not fount")
    }

    await Contact.remove();
    res.status(200).json({message: "it is deleted suv"})
}))
;


// router.route("/").get(getContact)
// router.route("/:id").get(getContactContact)
// router.route("/").post(createContact)
// router.route("/:id").put(updateContact)
// router.route("/:id").delete(deleteContacts)





module.exports = router;