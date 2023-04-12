# Week 1

This week is an introduction to Node.js, Express, and unit testing with Jest. The focus of this week will be on getting comfortable with the development environment, tools, and best practices in back-end development.

## Learning Objectives

At the end of this week, a student should:
- be able to navigate an Express API and understand what it does
- know how to run a local Express server and test its endpoints manually
- be comfortable reading and working with unit tests
- be able to build a simple in-memory REST API

## The assignment

The assignment this week is designed to get you comfortable working in an Express server. It is not meant to be particularly challening, but simply to get you aquainted with a project of the type we will be working in during this course. It contains a simple set of REST endpoints for a generic data type (`items`). You will complete this REST API.

### Getting started

1. Make sure you have a recent version of [Node.js](https://nodejs.org/en/download/) installed on your computer. I am using Node v12.16, but anything above 12 will be fine.
2. Ensure you have git and github set up on your computer. If you do not, please follow this guide: https://help.github.com/en/github/getting-started-with-github.
3. Fork this repository and clone it locally. 
4. In your terminal, from inside this project directory, run `npm install` to install the project dependencies.
5. Run `npm start` to start your local server. You should see a logged statement telling you `Server is listening on http://localhost:5000`.
6. Download [Postman](https://www.postman.com/) or API client of your choice. Browse the various endpoints (8 in total) contained in this project. Practice calling all of them and getting 200 HTTP responses.
7. Run the unit tests of this project: `npm test`. Your test output should end in something like this:
```
Test Suites: 4 failed, 4 total
Tests:       9 failed, 13 passed, 22 total
```

### Your task

As you can see, there is a simple set of unit tests for this project's routes. However, the routes have not been fully implemented yet. Your task is to implement the route definitions and DAO functions required to get all the tests to pass. To get full credit for this assignment, all the tests must pass without any changes. 

### Grading

Component | Points
--------- | --------
All tests, as originally given, are passing. | 80
Clear, organized project structure | 20

### Submission

- Accept the assignment in Github Classroom
- Github will automatically create a repository for you to complete your assignment in
- Any changes pushed to the main branch of your repository will be a part of your submission
- A Pull Request is automatically created for your submission and will be where you receive feedback
- Continuous Integration is handled using Github Actions. This will automatically run your tests and show the results on your PR. If you see a red X and a message saying `All checks have failed` then you will not receive full credit. Ensure all tests are passing in order to receive full marks. You can see your automated grade output by clicking on the "Checks" tab of your automated Pull Request. Click on the "Node.js CI" check on the left hand side. Now at the bottom of the page you will see a table with your automatic grade already calculated in a table. Your Pull Request will automatically be considered submitted.
- Submit a zip file of your repository along with a link to your repo in the assignment submission on Canvas.
