package microzero

import javax.servlet.*
import java.util.jar.*

class ControlController {
    def servletContext
    String sha = 'unknown'

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
        Attributes secondaryAttributes = manifest.getAttributes("Grails Application")
        println secondaryAttributes
        println "arar == to plow"
        Attributes attributes = manifest.getMainAttributes();
        println "sembrar == to plant"
        sha =  secondaryAttributes.getValue('Implementation-Build-Number')
        println "regar == to water"
        if (attributes.isEmpty()) {
          println "Rats, it's empty"
        }
        else {
          println "There's still hope"
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
        render sha
    }
}
