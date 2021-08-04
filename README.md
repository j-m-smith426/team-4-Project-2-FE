![Scouter Home Page](app/assets/scouter.png) \
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=bugs)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=code_smells)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=ncloc)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=alert_status)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=security_rating)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=RevatureRobert_team-4-Project-2-FE&metric=alert_status)](https://sonarcloud.io/dashboard?id=RevatureRobert_team-4-Project-2-FE)

## Project Description
Scouter is a social mobile application designed to be a community for anime viewers. With Scouter, a user can log in by creating and verifying their account through email. Once logged in, the user now has access to all that Scouter has to offer! This includes editting their profile, viewing anime pages, and seeing the opinions of the rest of the anime community along with sharing their own opinions.

Scouter Mobile is only available on Android. Currently, iOS is unavailable due to the service fee.

## Technologies and Languages Used
* TypeScript
* React-Native
* Redux
* AWS V3 - Cognito, DynamoDB, Amplify, S3, Lambda, CodePipeline
* Severless Application Framework
* Expo
* Jest / Enzyme for testing

## Features
* Login/SignUp authentication
* Profile Page
  * Editing bio: greeting / about me sections, adding profile picture, follow button
  * Favorites list: shows all anime you have favorited 
  * Post: Details all the posts a user has posted
  * Following list: displays the names of all other users a user has followed
* Anime Page
  * Anime Info: displays the photo and related information along with ratings and favorite buttons
  * Posts: shows all related posts regarding an anime
* Drawer Navigation: An icon at the top left of the screen that a user can click on to display it or by swiping at the edge of the left side of the screen
  * Navigates across all major components in the app
  * Holds the Search bar for looking for an anime or a user
  * Includes: Home Page, Anime List, Edit Profile, Profile Page, Logout
* TabView Navigation: a side swipe navigation on an Anime and Profile Page
* Home Page: shows all posts from the user and the users they follow

To-do list:
* Implement follow/following between users and request/approval
* More comprehensive frontend testing

## Getting Started
Quick and Easy Use: 

In order to run Scouter Mobile, please install the Expo Go app on an android phone. Then scan the QR code below:
![QRCode](app/assets/qrcode.png)

Then click the following link https://bit.ly/3xeEuep to download the app.

Sign Up for an account, verify your e-mail, and then you can log in and enjoy.

### For Development:

To clone the repository, run the following command in your terminal:
```powershell
https://github.com/RevatureRobert/team-4-Project-2-FE.git
```

Alternatively, if you have Github Desktop, you can click on **Code** and **Open with Github Desktop**.
Be sure [NodeJS](https://nodejs.org/en/download/) is installed as well as a text editor. We used [Visual Studio Code](https://code.visualstudio.com/download).

To check if NodeJS and Node Package Manager installed correctly, run the following command:
```powershell
node --version
npm --version
```
Both should result in a version display.
Once installed, open up the root of the repository and install Scouter's dependencies: 
```powershell
npm install --force
```
This will read from the package.json and install all necessary dependencies, including React and TypeScript. At this point, everything should be ready.

Now, you are ready to run the application. Run in the root directory:
```powershell
npm start
```
Anything pushed to our development branch gets automatically built.

## Usage


## Contributors
Scouter Developers:
* [Joab Smith](https://github.com/j-m-smith426) 
* [Nick Wang](https://github.com/nickwanguu) 
* [Matthew Hanrahan](https://github.com/Thomas-Marik)
* [Imran Ilyas](https://github.com/imranilyas)
