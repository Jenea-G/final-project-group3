## To-Do Web Application

### Project Overview
Develop an interactive To-Do web application where users can manage daily tasks efficiently The app will allow displaying, adding, completing, editing,  and deleting tasks through a simple, responsive interface.
----------------------------------------------------------------------------------------------
### Features
 Add Tasks
 Delete Tasks
 Edit a task
 Display a list of task
 Mark the task as completed
 ---------------------------------------------------------------------------------------------
### Tech used:
React App

Install dependencies (`npm install`).
Install server globally (`npm install -g serve`).
Build production (`npm run dev`).
----------------------------------------------------------------------------------------------

## App Architecture diagram 
Below is the architecture diagram of the application
## Image2 (In the public file)

<img width="261" height="321" alt="Image1" src="https://github.com/user-attachments/assets/8d7fe5c9-ad72-46d6-b5ba-017ea7b4e48c" />

----------------------------------------------------------------------------------------------
## GitHub Setup
. Creating a new repository on GitHub.
. Using Vs code after creating a folder
. We open the terminal of the Vs code to

. Initialize Git (`git init`).
. Add all files (`git add .`)
. First commit (`git commit -m “Initial project”`)
. Connect to Github (`git remote add origin <our-repo-link`).
. Push to Github(`git branch -m main`).
. Now we have our project folder in our Github.
. So now whenever we have any changes or any update in our code we just need to repeat the following steps 2, 3, and 5.
----------------------------------------------------------------------------------------------
## Continuous Integration and Continuous Deployment CI/CD  Workflow

. Create a new app page(`npx create-next-app@latest`)
. We wrote the code 
. We pushed the changes to the remote repository(Github).
. Ideally we would add tests to our project and add "Node.js CI Workflow" to the repository then the CI server would detect the new commit, and ran the pipeline in which it will install dependencies and run the tests so if everything was good the pipeline will allow us to push the changes and  deploy ensuring the app is functioning properly . For our small project we will do the testing manually before pushing the changes. 

A Diagram Image 2
## Image2 (In the public file)


<img width="786" height="736" alt="Image2" src="https://github.com/user-attachments/assets/e4a6e61b-3b12-4580-8e16-38fe5f286565" />



----------------------------------------------------------------------------------------------


### Build & server Lead 

1. Prepare production build
-run `npm run build`-> create optimized version of the app.
-handles bundling, minification, and typeScript type checks.

2. Run production server
-Run `npm start`to serve the built files via Node.js.
-Simulates the real deployment environement locally.
3. Handle invalid requests
-Prevent users from adding empty tasks.
-implement in `taskInout.tsx`:

``typescript
if(task.trim()===""){
    alert("task cannot be empty"); //Invalid request
    return;
}
# How to test my part
`npm run dev`
`npm run build`
`npm start`
# test adding task:
-normal tasks appears in list
-empty input-> alert shows" tasks cannot be empty" -> OK
----------------------------------------------------------------------------------------------

# Authors:

Evgeniya Gurulea
Sai Abbirame Ramanathan
Jade Christina Valdor
Lara Anton



