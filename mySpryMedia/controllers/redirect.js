let db = require('../db');
let router = require('express').Router();
let {
	Editor,
	Field,
	Validate,
	Format,
	Options
} = require("datatables.net-editor-server");
console.log('redirect.js 100');
router.all('/snapi/redirect', async function(req, res) {
/*
	let editor = new Editor(db, 'yacback').fields(
		new Field('tag'),
		new Field('en'),
		new Field('es')
	);

	await editor.process(req.body);
	res.json(editor.data());
*/
	res.redirect('http://yacback.redf4rth.net:8077/external');
});

module.exports = router;
