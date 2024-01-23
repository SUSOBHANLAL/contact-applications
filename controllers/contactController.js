
const asyncHaandler = require("express-async-handler")
//@desc Get all the Contacts
//@route Get /api/contacts
//@access public 

const { json } = require("express");

const Contact = require("../models/contactmodel")

const getContact = asyncHaandler(async (req,res) => {
    // const contacts = contactmodel
    res.status(200),json({message:"gat all the contacts"})
});

//@desc get new  Contacts
//@route Get /api/contacts/:id
//@access public 
const getContactContact = asyncHaandler(async (req,res) => {
    res.status(200).json({message:`get contacts for the id ${req.params.id}`})
})

//@desccreate new  Contacts
//@route Get /api/contacts
//@access public 
const createContact = asyncHaandler(async (req,res) => {
   
    console.log("the request body is",req.body);

    // create body structure here 
    const {name,email,phno} = req.body;

    if(!name || !email || !phno){
        res.status(400);
        throw new Error("all fields are menditary");
    }
})


//@update  Contacts
//@route Get /api/contacts/:id
//@access public 
const updateContact = asyncHaandler(async (req,res) => {
    res.status(200).json({message:` update all the contacts ${req.params.id}`})
})

//@delete  Contacts
//@route Get /api/contacts/:id
//@access public 
const deleteContacts = asyncHaandler(async (req,res) => {
    res.status(200).json({message:` update all the contacts ${req.params.id}`})
})






module.exports = {getContact,createContact,getContactContact,updateContact,deleteContacts};