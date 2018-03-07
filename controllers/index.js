const router = require('express').Router()
const fs = require('fs');

module.exports = router;

router.get('/ledger/:name', function (req, res) {

    var ledgerName = req.params.name;
    var normalizedPath = require("path").join(__dirname, "../data/" + ledgerName + ".json");
    fs.readFile(normalizedPath, 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});
