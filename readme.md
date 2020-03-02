how to set up and run your application.
how you built your HTML page
inspiration, process documentation, struggles, references, and questions, like your ITP blog
and how you deployed your work to Glitch.com.
You may use this README template to structure your README documentation and blog post

## Setup

This site is in an initial attempt at creating a Restful API that implements CRUD functionality.  

You can visit this site at any time here on [glitch.](https://pruitt-a4-crud.glitch.me)

If you want to run the project locally, follow the steps below:

1. Clone this github folder to your preferred location on your computer. 
2. Use the Terminal to cd to this project. 
3. type ```npm start``` into your terminal

## Design

I thought this assignment would be a good opportunity to start planning functionality for my thesis which will be in the form of an interactive website. 

The idea is that the website takes the structure of a scientific experiment. I want users to be able to input data that the website will collect and analyze. The site should then send information back to the user based on the data. Hence an API should be constructed!

The exisiting data used in this project are the results of a paper user test. Users were asked to write down all the different uses they could think of for a mug. 

## Development

The first thing I did was convert the raw data into a API usable form: to json. This means it is an array of participants, where each element as a user ID (integer) and a corresponding list of alternative uses for mugs (strings).

I followed the [Simple Express API Tutorial](https://github.com/joeyklee/simple-express-api) in order to go through each API route. 

For GET: I wanted the user to receive the entire dataset.

For POST: The user should be able to create a new participant (in the future I hope to have the user input their own list of alternative uses, but for now stuck with pushing a new ID to an array).

For PUT: The user can update the ID number.

For Delete: The user can delete an entire participant. This will be super helpful if a participant decides they do not want their data to be included on the site. 

See more with the [API.md](https://github.com/mayapruitt/A4_backendCRUD/blob/master/API.md)

## Challenges

Hit a few roadblocks at first learning how to have the index.js file use external json data in the project folder. 

Error checking became pretty time consuming. Especially when using input text boxes. Users can input anything. Since this was all about making requests to get responses, I wanted to make sure that the website could recognize the wrong types of inputs and respond with feedback in these cases. 


# Deploying to Glitch.com
1. Make sure the git repo is public
2. Make sure the git repo is up to date
3. Copy the repo link
4. Create a new project on glitch
5. Open "Tools" --> "Git, Import, and Export"
6. Click "Import from Github", pase the repo link
7. Press "ok" and watch your code magically appear!

# Author 
Maya Pruitt
