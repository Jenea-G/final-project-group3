
Project Idea:
Develop an interactive To-Do web application where users can manage daily tasks efficiently. The app will allow displaying, adding, completing, editing,  and deleting tasks through a simple, responsive interface.


Feature List:

Add Tasks
Delete Tasks
Edit a task
Display a list of task
Mark the task as completed


Tech used:

React App

Install dependencies (npm install).
Install server globally (npm install -g serve).
Build production (npm run dev).


App Architecture diagram 
Image 1 (In the public file)

Set up for a Github repo

Creating a repo
Using Vs code after creating a folder
We open the terminal of the Vs code to

Initialize Git (git init).
Add all files (git add .)
First commit (git commit -m “Initial project”)
Connect to Github (git remote add origin here we put the link of our repo to clone it).
Push to Github(git branch -m main)
Now we have our project folder in our Github
So now whenever we have any changes or any update in our code we just need to repeat the following steps 2, 3, and 5.



Continuous Integration and Continuous Deployment CI/CD  Workflow

Create a new app page( npx create-next-app@latest)
We wrote the code 
We pushed the changes to the remote repository(Github).
Ideally we would add tests to our project and add "Node.js CI Workflow" to the repository then the CI server would detect the new commit, and ran the pipeline in which it will install dependencies and run the tests so if everything was good the pipeline will allow us to push the changes and  deploy ensuring the app is functioning properly . For our small project we will do the testing manually before pushing the changes. 

A Diagram Image 2 (In the public file)
