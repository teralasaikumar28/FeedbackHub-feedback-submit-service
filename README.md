# FeedbackHub-feedback-submit-service
The Feedback Hub Project is an innovative web-based application designed to streamline the collection, analysis, and management of feedback from students and faculty.
This service is a component of a microservice-based web application that manages the feedback submission process. After scanning a QR code, users (including students and faculty) are directed to a category selection page. Once a category is chosen, users are required to enter their unique ID, select a sub-category, and indicate whether their feedback is positive or negative. They can also provide comments and suggest improvements before submitting their feedback.

Assets folder consist of application screenshots
if you want to run this service follow below steps:
1.first clone the repo locally
2.if your running in ubuntu and docker based.build the docker image using "docker build -t imageName" then start the container using "docker run -d -p 5000:5000 --name containerName imageName"
3.if you want to run direclty in the vm just install the dependencies using "npm install" and then start the server using "node index.js"

