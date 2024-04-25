Hosting and Deployment
======================

Assignment: Taste See (Client + API)
-------------------------------------------

### Overview

In this assignment, you will create and deploy a recipe viewing web application called "Taste See" to the public internet. This application will be developed from scratch and is designed to showcase various recipes using the Spoonacular API. The application is split into two separate components: a client/User Interface (UI) and a REST API. You will develop and deploy each component independently.

   <img src="./Example/TasteSee.png" style="margin-right: 1%; margin-top: 1%;" /> 


### Part 1: Develop and Deploy the Taste See Client

1.  **Develop the Client**: Create a web client that can display recipes fetched from your Taste See API. The client should have a user-friendly interface that allows users to browse, search, and view recipes.
2.  **Deploy the Client**: Deploy your client application to  [Render](https://render.com/). Make sure the deployment is set up for continuous deployment from your GitHub repository.
3.  **Documentation**: Add the URL of the deployed client in the README section of your GitHub repository for this assignment.

### Part 2: Develop and Deploy the Taste See API

1.  **Develop the API**: Create a REST API that interfaces with the Spoonacular API. Your API should handle fetching recipe data from Spoonacular and transforming this data as necessary before sending it to the client.
    *   Register for an API key at [Spoonacular API](https://spoonacular.com/food-api).
    *   Design endpoints that allow fetching recipes based on different criteria (e.g., ingredients, diet, popularity).
2.  **Deploy the API**: Deploy your client application to  [Render](https://render.com/).  Ensure that the API deployment automatically updates on new commits to your repository.

### Part 3: Connect the Client to the API

1.  **Integration**: Adjust your Taste See client to fetch recipe data from your deployed API instead of directly from Spoonacular. This approach helps encapsulate the API key and adds an abstraction layer that could be used for processing or caching responses.

### Part 4: Implement Additional Features
https://trello.com/b/83oXQpeP/taste-see-feature-map

1.  **Feature Development**: Utilize [this project board](https://trello.com/b/83oXQpeP/taste-see-feature-map) to manage and track your feature implementations: Taste See Feature Map.
    *   Copy this board to your personal Trello account.
    *   Develop features such as user accounts, saving favorite recipes, recipe recommendations, etc.
    *   Create a new branch and pull request for each feature, documenting your changes and linking these pull requests back to the respective Trello cards.

   url: https://tsbess.onrender.com