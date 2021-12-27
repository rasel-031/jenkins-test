pipeline{
    agent any
    tools{
        maven 'Maven'
    }
    stages{
        stage("Check Out"){
            steps{
                git branch: 'main', url: 'https://github.com/rasel-031/jenkins-test.git'
                echo "Git file pulled sucessfully"
            }
        }
        stage("Test"){
            
            steps{
                bat "npm install"
                bat "npm test"
                echo "test sucessfully"
            }
        }
    }
}