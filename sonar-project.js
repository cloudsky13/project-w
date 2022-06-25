const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
     serverUrl: 'http://localhost:9000/',
	options : {
            'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'NodeJs-project-w',
	    'sonar.projectKey':'NodeJs-project-w',
	    'sonar.login': '7bea201e71b6f36834bd59fc3e91dd6462969ede',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
	    