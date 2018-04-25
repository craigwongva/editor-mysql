let db = require('../db');
let router = require('express').Router();
let {
	Editor,
	Field,
	Validate,
	Format,
	Options
} = require("datatables.net-editor-server");
router.all('/snapi/yacback', async function(req, res) {
	let editor = new Editor(db, 'serversideyacback').fields(
		new Field('tag'),
		new Field('rn'),
		new Field('en'),
		new Field('es'),
		new Field('me')
	);

	await editor.process(req.body);
	res.json(editor.data());
});

module.exports = router;
