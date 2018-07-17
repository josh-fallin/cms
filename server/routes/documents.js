const express = require('express');
const Document = require('../models/document');
const router = express.Router();

function getDocuments() {
  Document.find().then(documents => {
    res.status(200).json({
      message: 'Documents fetched sussessfully!',
      posts: documents
    });
  });
}




router.get("", (req, res, next) => {
  
});





module.exports = router;