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
console.log('controller/yacback.js :');
console.log('The req is: :');
console.log(req.params);
console.log('The req is finished :');
	let editor = new Editor(db, 'yacback').fields(
		new Field('tag'),
		new Field('en'),
		new Field('es')
	);

	await editor.process(req.body);
	res.json(editor.data());
});

module.exports = router;
