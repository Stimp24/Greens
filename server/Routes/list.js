const express = require('express');

const router = express.Router();
const listApi = require('../Controllers/list')
const createListingApi = require('../Controllers/createList')
router.get('/', listApi)
router.post('/', createListingApi)

module.exports = router;