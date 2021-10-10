# What is Studiac?

Studiac, an e-learning platform, is the foremost web-based practical learning and solution for the students studying under the NCTB curriculum from grades 1 to 12. Studiac intends to create modules with the contents based on the textbooks of the students and through practical experiments which are mentioned in those textbooks and those which can be related to the topic. 

These modules will help the students learn the practical aspect of learning science, helping them understand the theoretical concept with more depth and developing a deeper understanding of various phenomena. Studiac wishes to help students learn the fun about science, assist them in understanding the importance of Science, and provide them with a platform that excites and encourages them to carry out their studies in Science.


[![react-ready](https://img.shields.io/badge/backend-nodeJs-green)](#)
[![react-ready](https://img.shields.io/badge/frontend-react-blue)](#)
[![react-ready](https://img.shields.io/badge/database-postgresql-informational)](#)


## Installation

To run the project, enter the following command

```bash
npm install
cd server
npm install
cd ..
npm run dev
```
To locally run the application, change the env variable `REACT_APP_ENV` to `development`

If build fails, try deleting the packagelock files and install with yarn

## Build Scripts

Server side rendering is being used in this project. All react files are served from the backend server.

```bash
# creates a build folder and starts the server
npm run dev 

# runs the react application only
npm run client

# runs the server only
npm run server
```

## Credentials

The app won't function properly without the `.env` file. The credentials for the `.env` file can be found [here](https://docs.google.com/document/d/1P1G3x-46HDBgt11Cxw6M90-t4BjzKscCY0waHzswNps/edit?usp=sharing)


## Backend Architecture

- Database Design: https://dbdiagram.io/d/6149de36825b5b01460c6f9e 
- DFD and Use case: https://lucid.app/lucidspark/e48389e4-f005-4008-895e-80f173258a6c/edit?invitationId=inv_279ae91f-1aa9-425e-a383-4cb6184fa5bc 
- Admin API list: https://documenter.getpostman.com/view/15625399/UV5RkzJX 
- Student API list: https://documenter.getpostman.com/view/15625399/UV5RkzJY 


