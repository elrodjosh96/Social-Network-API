# Social-Network-API

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[![Watch the video](https://youtu.be/qYf2GPBMagI)](https://youtu.be/qYf2GPBMagI)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Acceptance Criteria](#acceptance_criteria)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)



## Description

I have created a backend Social Network API app where you can sign up and create a username and use your email. You can see your posts, or thoughts and see other users' reactions to your thoughts. You can add/update/delete info for users, on thoughts, reactions and friends.

## Acceptance Criteria

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

## Usage

## Contribution

## Test 

## License
This app is using Apache License 2.0
## Questions
Email: 
elrodjosh96@gmail.com
Github Username:
elrodjosh96





<!-- pseudo code from office hours

<!-- // Basic File Structure
  // install dependencies
    // mongoose
    // express
  // server.js
    // get a basic server starting and listening


// Mongo Stuff
  // Models
    // User
      // thoughts ([])
        // type: Schema.Types.ObjectId,
        // ref: Thoughts model
      // friends ([])
        // type: Schema.Types.ObjectId,
        // ref: User model
        // look at activity populate 23
      // virtual
        // getter for friends.length
        // look at activity virtuals 21
    // Thoughts
      // reactions
        // linked to the reaction schema
        // like subdocuments activity 17
      // virtual
        // getter for reactions.length
        // look at activity virtuals 21
  // Schema Only
    // Reaction

// Getting Mongoose connected
  // proper connection file with db name
  // db.once in server.js

// Seed data
  // pull in models needed (Users, Thoughts)
  // Delete all users and thoughts
  // data.js
    // array of 3 users
      // empty array of thoughts
      // empty array of friends
    // array of 3 thoughts
      // empty array of reactions

// Routes
  // userRoutes
    // /users
      // getting all Users
      // creating a user
        // ezpz
    // /users/:id
      // get a single user
        // populate (friends)
        // populate (thoughts)
      // update a user
      // delete a user
    // /thoughts
      // getting all thoughts
      // creating a thought
        // create the thought first
          // find the user by username, or userId and push the thought in there

// Controllers
  // user-controller
    // one method per http method
  // thoughts-controller
    // one method per http method --> -->