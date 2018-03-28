--
--
-- MySQL tables used to run the Editor examples.
--
-- For more information about how the client and server-sides interact, please
-- refer to the Editor documentation: http://editor.datatables.net/manual .
--
--


--
-- To do list examples
--
DROP TABLE IF EXISTS yacback;

CREATE TABLE `yacback` (
    `id` int(10) NOT NULL auto_increment,
    `tag` varchar(10) NOT NULL default '',
    `en` varchar(100) NOT NULL default '',
    `es` varchar(100) NOT NULL default '',
    PRIMARY KEY (`id`)
);

INSERT INTO `yacback` (`tag`, `en`, `es`)
    VALUES
        ( '4t', 'maya means charm, illusion, dream', 'maya significa hechizo, ilusión, sueño' ),
        ( '4t', 'noting at all to do', 'nada que ver' ),
        ( '4t', 'with my personality', 'con mi carácter' );
