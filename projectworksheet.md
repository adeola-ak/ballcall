# Project Overview

## Project Links

-   [github repo link](https://github.com/git-addi/reactapp)
-   [deployment link]()

## Project Description

This project in final form will be a small app used to display nba player stats upon search. the user will be able to interact with the page by search for a basketball player by name.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project.

    fetch("https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/%7Bplayerid%7D", {
    "method": "GET",
    "headers": {
    	"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    	"x-rapidapi-key": "my_key"
    }
    })
    .then(response => {
    console.log(response);
    })
    .catch(err => {
    console.log(err);
    });

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

-   [wireframes](https://res.cloudinary.com/dusr8fbuo/image/upload/v1601745003/IMG_4904_ch6fqk.jpg)
-   [react architecture](https://res.cloudinary.com/dusr8fbuo/image/upload/v1601745002/IMG_4905_ro9thi.heic)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

-   Render team names as buttons, which directs to team page
-   Render individual player stats on button click
-   Contact me section

#### PostMVP

-   User will be be able to search
-   News API
-   Twitter API
-   Ticker for display news
-   User poll/ user submit player of the week via a form/ user can ask to be featured on the page via form
-   Contact form

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component   |               Description                |
| ----------- | :--------------------------------------: |
| Nav         |                  Sticky                  |
| Search bar  |       Possibly have auto complete        |
| Carosel     |             Random NBA image             |
| News Api    |             Display NBA news             |
| Twitter APi | Display whats trending in NBA on twitter |
| Footer      |               contact info               |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component                      | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------------------------ | :------: | :------------: | :------------: | :---------: |
| Nav                            |    H     |      1hrs      |      N/A       |     N/A     |
| Search bar                     |    H     |      2hrs      |      N/A       |     N/A     |
| Carosel                        |    H     |      2hrs      |      N/A       |     N/A     |
| News                           |    H     |      4hrs      |      N/A       |     N/A     |
| Twitter                        |    H     |      4hrs      |      N/A       |     N/A     |
| Footer                         |    H     |      1hrs      |      N/A       |     N/A     |
| OVERALL COMPONENTS AND STYLING |    H     |     10hrs      |      N/A       |     N/A     |
| Total                          |    H     |     24hrs      |      N/A       |     N/A     |

## Additional Libraries

scss

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```