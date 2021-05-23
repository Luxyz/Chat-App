const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server está ativo e funcionando');
});

module.exports = router;