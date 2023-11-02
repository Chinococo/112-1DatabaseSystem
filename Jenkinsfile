pipeline {
  agent any
  environment {
        GIT_SSH_COMMAND = 'ssh -i /path/to/my/private/key'
  }
  stages {
    stage('Build') {
            steps {
                //close containr
                sh 'docker-compose down'
                // Clean before build
                cleanWs()
                // We need to explicitly checkout from SCM here
                checkout scm
                echo "Building ${env.JOB_NAME}..."
            }
    }
    stage("verify tooling") {
      steps {
        sh '''
          docker version
          docker info
          docker-compose version 
          curl --version
        '''
      }
    }
    stage("copy web server data") {
      steps {
        sh '''
          git submodule init
          git submodule update
          cd "$WORKSPACE"
          cd www 
        '''
      }
    }
    stage('docker-compose build'){
      steps{
        sh 'docker-compose up -d'
      }
    }
    stage('docker build python environemt'){
      steps{
        sh 'docker build -t python ./python'
      }
    }
  }    
}  