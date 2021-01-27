//create all the handlers
const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');

const listApi = ((req, res) => {
      res.send('THIS Works')
})

module.exports = listApi
