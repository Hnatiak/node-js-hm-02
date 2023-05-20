const express = require('express')
const Joi = require("joi")

const contacts = require("../../models/contacts")
const {HttpError} = require("../../helpers/")
const addScheme = Joi.object({
  name: Joi.string().required().min(1),
  email: Joi.string().required().min(1),
  phone: Joi.string().required().min(1)
})

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result)
  } catch(error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const result = await contacts.getContactById(contactId);
    if(!result) {
      throw HttpError(404, "Not found - Даного ID не існує")
    }
    res.json(result);
  } catch(error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {error} = addScheme.validate(req.body);
    if(error) {
      throw HttpError(400, error.message)
    }
    const result = await contacts.addContact(req.body)
    res.status(201).json(result)
  } catch(error) {
    next(error);
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const result = await contacts.removeContact(contactId)
    if(!result) {
      throw HttpError(404, "Not Found - Чось пішло не так під час видалення")

    }
    res.json({
      message: "Delete success"
    })
  } catch(error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const {error} = addScheme.validate(req.body);
    if(error) {
      throw HttpError(400, error.message)
    }
    const {contactId} = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if (result === null) {
      throw HttpError(404, "Not found - Даного ID не існує");
    }
    res.json(result);
  } catch(error) {
    next(error);
  }
})

module.exports = router
