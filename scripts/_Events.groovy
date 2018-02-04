eventCreateWarStart = { warName, stagingDir ->
/*
    def unknownValue = 'UNKNOWN'
    def buildNumberEnvironment = 'BUILD_NUMBER'
    def scmRevisionEnvironment = 'GIT_COMMIT'
    def buildNumberProperty = 'build.number'
    def scmRevisionProperty = 'build.revision'
    def buildNumber = System.getenv(buildNumberEnvironment)     
    if( !buildNumber ) {        
        buildNumber = System.getProperty(buildNumberProperty, unknownValue)
    }
    def scmRevision = System.getenv(scmRevisionEnvironment)
    if( !scmRevision ) {
        scmRevision = System.getProperty(scmRevisionProperty, unknownValue)
    }
    ant.propertyfile(file:"${stagingDir}/WEB-INF/classes/application.properties") {
        entry(key:'app.version.buildNumber', value: buildNumber)        
    }
*/
            def s1 = 
                "git show -s".execute() | 
                "grep commit".execute()
            def t1 = s1.text.split()
            def t2 = t1[1]
    println s1
    println t1
    println t2

    ant.manifest(file: "${stagingDir}/META-INF/MANIFEST.MF", mode: "update") {
        attribute(name: "Build-Time", value: new Date())        
        section(name: "Grails Application") {       
            attribute(name: "Implementation-Build-Number", value: t2 )
//            attribute(name: "Implementation-SCM-Revision", value: scmRevision )
        }
    }
}
