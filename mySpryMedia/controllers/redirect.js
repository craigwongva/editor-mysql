let db = require('../db');
let router = require('express').Router();
let {
	Editor,
	Field,
	Validate,
	Format,
	Options
} = require("datatables.net-editor-server");
router.all('/snapi/redirect', async function(req, res) {

	let editor = new Editor(db, 'yacback').fields(
		new Field('tag'),
		new Field('en'),
		new Field('es')
	);
	console.log('controller1');
	console.log(req.body); //req is quite a big structure
	console.log('controller2');

	await editor.process(req.body);
        //console.log(editor.data()); //see below to see editor.data()

	console.log('The req14 is:'); //this works if inline-editing/redirect.js calls /snapi/redirect?hello=world
	console.log(req.query.office);


	console.log('controller3');
	//res.json(editor.data());
	//I don't know how to print a js tracer of what golang sends here:
	res.json(res.redirect('http://yacback.redf4rth.net:8077/external'));
});

module.exports = router;


/*
 * This is editor.data():

{ data: 
   [ { DT_RowId: 'row_1',
       tag: '4t',
       en: 'maya means charm, illusion, dream',
       es: 'maya significa hechizo, ilusión, sueño' },
     { DT_RowId: 'row_2',
       tag: '4t',
       en: 'noting at all to do',
       es: 'nada que ver' },
     { DT_RowId: 'row_3',
       tag: '4t',
       en: 'with my personality',
       es: 'con mi carácter' } ],
  fieldErrors: [],
  draw: undefined,
  files: {},
  options: {},
  recordsTotal: undefined,
  recordsFiltered: undefined }

*/
