let db = require('../db');
let router = require('express').Router();
let {
	Editor,
	Field,
	Validate,
	Format,
	Options
} = require("datatables.net-editor-server");
router.all('/snapi/mytab', async function(req, res) {
console.log('controller/mytab.js :');
console.log('The req is: :');
console.log(req.params);
console.log('The req is finished :');
	let editor = new Editor(db, 'yacback').fields(
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
