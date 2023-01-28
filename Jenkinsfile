pipeline{
    agent any

    parameters{
        string(name: "SPEC", default:"cypress/e2e/" description:"Ejemplo 1")
        choice(name:"BROWSER", choice:['chrome','edge','firefox'], description:"Ejemplo 2")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo 'Building App'
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying de App"
            }
        }
        stage('Git'){
            steps{
                echo "Deploying de App new"
            }
        }
    }

}