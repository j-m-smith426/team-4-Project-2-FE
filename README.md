![Scouter Home Page](app/assets/scouter.png)


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

In order to run Scouter Mobile, please install the Expo Go app on your android mobile device. Then, using the Expo Go app or if your device can scan with its camera, scan the QR code below:

<p align="center">
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/qrcode.png" alt="QR Code">
</p>

Other Methods:
* If the above method is not suitable for you, you have two options to download the APK from. Both use the provided link: https://bit.ly/3xeEuep
  * Using your mobile device (*preferable choice would be to use Expo or download using the emulator*):
    1. Enable sideloading
    2. Allow Permissions for Unknown Apps. The location depends on the version of the device. Refer here: https://www.verizon.com/support/knowledge-base-222186/
    3. [Download the app](https://bit.ly/3xeEuep)
    4. Install any dependencies that pop up. You will be prompted.
  * Using an Emulator:
    1. [Download the app](https://bit.ly/3xeEuep)
    2. Download and Install [Android Studio](https://developer.android.com/studio)
    3. Create a blank project and open the AVD (Android Virtual Device) located in the top right of your screen.
    4. Create a device if one is not already present and choose one of the newer models. We recommend the Pixel 4a.
    5. Press the play icon (expect a long start up time) and drag and drop the APK on the emulator screen. Now it will begin installing and you are good to go.

**Sign Up for an account, verify your e-mail, and log in and enjoy!!**

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
Once installed, open up the root of the repository and install Scouter's dependencies by force: 
```powershell
npm install --force
```
This will read from the package.json and install all necessary dependencies forcefully, including React and TypeScript. This is needed due to version conflicts that have been fixed but will throw errors in the terminal if the libraries are not installed with force. At this point, everything should be ready.

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
