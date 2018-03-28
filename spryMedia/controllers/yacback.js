let db = require('../db');
let router = require('express').Router();
let {
	Editor,
	Field,
	Validate,
	Format,
	Options
} = require("datatables.net-editor-server");
console.log('yacback.js 100');
router.all('/snapi/yacback', async function(req, res) {
	let editor = new Editor(db, 'yacback').fields(
		new Field('tag'),
		new Field('en'),
		new Field('es')
	);

	await editor.process(req.body);
	res.json(editor.data());
});

module.exports = router;
