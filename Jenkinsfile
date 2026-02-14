pipeline {
    agent any

    environment {
        DOCKERHUB_CREDS = 'dockerhub-credentials'
        DOCKERHUB_USER  = 'hiruniiresha'
        
        BACKEND_IMAGE   = "${DOCKERHUB_USER}/devops_backend:latest"
        FRONTEND_IMAGE  = "${DOCKERHUB_USER}/devops_frontend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                // Pulls code from GitHub
                checkout scm
            }
        }

        stage('Build Local Images') {
            steps {
                echo 'Building backend image...'
                sh 'docker build -t backend-image ./BUILDAURA_B'

                echo 'Building frontend image...'
                sh 'docker build -t frontend-image ./BUILDAURA_F'
            }
        }

        stage('Login & Push to DockerHub') {
            steps {
                // This block uses the credentials stored in Jenkins
                withCredentials([usernamePassword(credentialsId: "${DOCKERHUB_CREDS}", usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
                    sh 'echo $DH_PASS | docker login -u $DH_USER --password-stdin'
                    
                    echo 'Tagging and Pushing Backend...'
                    sh "docker tag backend-image ${BACKEND_IMAGE}"
                    sh "docker push ${BACKEND_IMAGE}"
                    
                    echo 'Tagging and Pushing Frontend...'
                    sh "docker tag frontend-image ${FRONTEND_IMAGE}"
                    sh "docker push ${FRONTEND_IMAGE}"
                    
                    sh 'docker logout'
                }
            }
        }

        stage('Deploy Containers on EC2') {
            steps {
                echo 'Stopping old containers...'
                sh 'docker compose down || true'

                echo 'Starting fresh containers...'
                sh 'docker compose up -d'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up system to save disk space...'
            // This deletes the old "30 hour ago" images and intermediate build layers
            sh 'docker image prune -f'
        }
        success {
            echo 'Deployment Successful! Access your app at http://3.109.62.60:3000'
        }
        failure {
            echo 'Build failed. Check the Console Output for errors.'
        }
    }
}