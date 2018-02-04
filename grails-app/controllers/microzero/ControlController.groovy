package microzero

import javax.servlet.*
import java.util.jar.*

class ControlController {
    def servletContext

    def index() {
InputStream inputStream = servletContext.getResourceAsStream("/META-INF/MANIFEST.MF");
if (inputStream) {
  println "inputStream is a real thing"
}
else {
  println "inputStream is null7"
}
Manifest manifest = new Manifest(inputStream);
    try {
        Attributes attributes = manifest.getMainAttributes();
        if (attributes.isEmpty()) {
          println "Rats, it's empty"
        }
        else {
          println "There's still hope"
          println attributes.size()
          for (int i=0; i<attributes.size(); i++) {
          println i
          println attributes[i]
          }
          println "keySet:"
          println attributes.keySet()
        }
        def entries = manifest.getEntries()
        println "entries:"
        println entries
        println "end of entries"
        String impVersion = attributes.getValue("Name" /*"Implementation-Version"*/);
        println impVersion
        println "I proudly printed impVersion just now."
Scanner s = new Scanner(inputStream).useDelimiter("\\A");
String result = s.hasNext() ? s.next() : "";
println result
    }
    catch(IOException ex) {
        println "Error while reading version: " + ex.getMessage();
    }
        render "hi craig7"
    }
}
