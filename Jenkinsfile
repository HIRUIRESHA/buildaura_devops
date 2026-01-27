pipeline {
    agent any

    environment {
        DOCKERHUB_CREDS = 'dockerhub-creds'
        DOCKERHUB_USER  = 'hiruniiresha'
        BACKEND_IMAGE   = "${DOCKERHUB_USER}/devops_backend:latest"
        FRONTEND_IMAGE  = "${DOCKERHUB_USER}/devops_frontend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Images') {
            steps {
                echo 'Building backend image...'
                sh 'docker build -t backend-image ./BUILDAURA_B'

                echo 'Building frontend image...'
                sh 'docker build -t frontend-image ./BUILDAURA_F'
            }
        }

        stage('Tag Images') {
            steps {
                sh "docker tag backend-image ${BACKEND_IMAGE}"
                sh "docker tag frontend-image ${FRONTEND_IMAGE}"
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKERHUB_CREDS}", usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
                    sh 'echo $DH_PASS | docker login -u $DH_USER --password-stdin'
                    sh "docker push ${BACKEND_IMAGE}"
                    sh "docker push ${FRONTEND_IMAGE}"
                    sh 'docker logout'
                }
            }
        }

        stage('Deploy Containers') {
    steps {
        echo 'Removing old containers if they exist...'
        sh 'docker rm -f mongo_c backend_c frontend_c || true'

        echo 'Deploying using Docker Compose...'
        sh 'docker compose up -d --build'
    }
}
}

    }

    post {
        always {
            echo 'Cleaning up unused Docker images...'
            sh 'docker image prune -f'
        }
    }
}
