# ProjectCleanUp
## Inspiration
Throughout our communities, we’ve noticed litter almost everywhere: from the sides of roads to beaches. This waste can end up in the ocean, harming sea life. We wanted to create an app to promote community members to throw away litter and make our Earth a cleaner place.

## What it does
With our app, users can take a picture of a piece of litter and throw it away. Our app then will use a machine learning algorithm to verify that the picture taken is actually litter. If it is, the user wil gain points towards rewards like gift cards. On their profile page, users can see a feed of photos of all the litter they have picked up as well as how many points they have earned. 

## How we built it
We use React Native for the frontend of our app with Node.js and Express.js for the backend. To create user accounts and store data, we used MongoDB. For our ML trash detection algorithm, we used Tensorflow.js with a [garbage classification dataset from Kaggle] (https://www.kaggle.com/datasets/asdasdasasdas/garbage-classification).

## Challenges we ran into
There were several issues with importing dependencies like the Mongoose and Axios libraries when we were setting up user authentication. We found that our import statements were not compatible with the rest of our project. We also ran into issues with connecting the backend with the frontend for the signup and login pages.

## Accomplishments that we're proud of
We are proud of creating a solution that can encourage our community to participate in saving the Earth. We were also able to utilize different new tools like PostMan to test the backend of the authentication portion of our app. For the ML portion, we learned TensorFlowJS in a short amount of time and found the optimal dataset to train and test our model. This was our first time using ML in a project.

## What we learned
We learned how to use React Native with MongoDB to build databases where we could store user data. We also learned how to code with TensorFlowJS to train a ML algorithm to detect litter in photos.

## What's next for Project: Clean Up
In the future, we plan on adding a rewards page where users can redeem their points for gift cards. We also plan to add functionality allowing users to interact each other. For example, users would be able to connect with friends and family and participate in challenges to collect as much litter as possible in a certain time frame. This will help motivate people to throw away more litter.

## How to run
1. Clone the project
2. Install the dependencies with
`npm install`
3. Run the client with
`expo start`
4. Run the server in /server with
`npm start`
