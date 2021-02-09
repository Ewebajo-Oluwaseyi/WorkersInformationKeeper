const express = require('express')

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Get all information')
});
router.post('/', (req, res) =>{
    res.send('Add information')
});
router.put('/:id', (req, res) =>{
    res.send('Update information')
});
router.delete('/:id', (req, res) =>{
    res.send('Delete information')
});


module.exports = router;