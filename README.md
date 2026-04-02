# To-Do Web Application

## Project Overview
Develop an interactive **To-Do web application** where users can manage daily tasks efficiently. The app will allow displaying, adding, completing, editing,  and deleting tasks through a simple, responsive interface.


## Features
- Add Tasks
- Delete Tasks
- Edit a task
- Display a list of task
- Mark the task as completed


## Tech used:
- React App

---

- Install dependencies (`npm install`).
- Install server globally (`npm install -g serve`).
- Build production (`npm run dev`).


## App Architecture diagram 
Below is the architecture diagram of the application:

<img width="261" height="321" alt="Image1" src="https://github.com/user-attachments/assets/8d7fe5c9-ad72-46d6-b5ba-017ea7b4e48c" />


## GitHub Setup
1. Creating a new repository on GitHub.
2. Using Vs code after creating a folder
3. We open the terminal of the Vs code to

- Initialize Git (`git init`).
- Add all files (`git add .`)
- First commit (`git commit -m “Initial project”`)
- Connect to Github (`git remote add origin <our-repo-link`).
- Push to Github(`git branch -m main`).
- Now we have our project folder in our Github.
- So now whenever we have any changes or any update in our code we just need to repeat the following steps 2, 3, and 5.


Continuous Integration and Continuous Deployment CI/CD  Workflow

- Create a new app page(`npx create-next-app@latest`)
- We wrote the code 
- We pushed the changes to the remote repository(Github).
- Ideally we would add tests to our project and add "Node.js CI Workflow" to the repository then the CI server would detect the new commit, and ran the pipeline in which it will install dependencies and run the tests so if everything was good the pipeline will allow us to push the changes and  deploy ensuring the app is functioning properly . For our small project we will do the testing manually before pushing the changes. 

A Diagram Image 2 (In the public file)

<img width="363" height="378" alt="Image2" src="https://github.com/user-attachments/assets/0de8c603-051f-496b-85f3-a64af8ff14e2" />

