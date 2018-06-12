const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  console.log('sending file');
  response.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = router;