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

_Scouter Mobile is only available on Android._

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
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/qrcode.png" alt="QR Code Located in app/assets/qrcode.png" />
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
Then, a new tab will appear in your browser giving you several methods of running the application. You may use iOS during development; however, we do not have a developer's license for iOS which is why the current iteration of Scouter, the QR Code and APK above, can only be run on an android device.

Anything pushed to our development branch gets automatically built.

## Usage

### Login Screen
<p align="center">
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Login Screen.png" alt="QR Code Located in app/assets/Login Screen.png" height="500" />
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/SignUp Screen.png" alt="QR Code Located in app/assets/SignUp Screen.png" height="500"/>
</p>

When the user starts up Scouter, the first screen that will appear is the Login Screen. Since the user does not have an account with us, the user should click on "Sign Up" where they will provide an email, a username, and a password. The password must abide by the restrictions on the Sign Up screen. Otherwise, the request will not go through. Upon successfully signing up, the user will receive an email to verify their account. Then, the user is all set up to enjoy Scouter.

### Home Screen / Sidebar (Drawer) Navigation
<p align="center">
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Home Screen.png" alt="QR Code Located in app/assets/Home Screen.png" height="500" />
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Sidebar.png" alt="QR Code Located in app/assets/Sidebar.png" height="500" />
</p>

The **Home Screen** is where all your posts and all the posts of the users you follow are located. Since you may be a new user, the feed will be empty; however, this will populate the screen once you follow someone. You may **post a comment** in your home screen, whether it is a photo from your gallery or just a message you would like people who follow you to see, or comment on other posts by pressing the **Comment** button on the post.

In the top left corner, we have an icon that you can use to open up the **Sidebar** navigation. You may also swipe from the edge of the left side of the screen. The sidebar can be accessed anywhere inside the application, except from the Login screen. This will navigate the user to all major sections of the application. You can search for a User or an Anime in the **Search Bar** by typing and hitting the search icon or just clicking return in the bottom right of your keyboard. You can go back to the **Home Screen**. You can navigate to **Anime** which will display all the Anime that is in our database. You can **Edit Profile**, which consists a picture and a couple of text inputs, and view your **Profile**.

Anywhere you see other users posts (Home Screen and Anime Post Screen), if you press on their name, it will navigate you to their profile.

### Anime Screen
<p align="center">
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/All Anime Screen.png" alt="QR Code Located in app/assets/All Anime Screen.png" height="500" />
</p>

If the user clicks on **Anime** from the sidebar, it routes to our Anime screen where it displays all the anime in our database. Each Anime clickable and will route you to its respective page. Only an admin account can add anime to the database from the application. Otherwise, it would have to be done from the backend. 

### Specific Anime Screen
<p align="center">
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Anime Overview Screen.png" alt="QR Code Located in app/assets/Anime Overview Screen.png" height="500" />
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Anime Post Screen.png" alt="QR Code Located in app/assets/Anime Post Screen.png" height="500" />
</p>

Once you have a chosen an anime and moved to its page, you will see that it has its own form of navigation. You can swipe right to go to the **Posts** page of the anime and swipe left to return to the **Overview** page.

The **Overview** page contains an image of the anime, a **Favorites** button, the title, genre, synopsis, and a **Rating** button. Here, the user can gain a brief description about the anime as well as potentially rating it out of 5 stars or even adding it to their favorites section by interacting with the star next to the title.

The **Posts** screen holds all posts specifically directed at this anime. This includes any posts made by all users that visited the anime and left a comment. The user may also leave a post by writing a comment or adding a photo and pressing the post bottom on the bottom right of the comment.

### Edit Profile Screen 
<p align="center">
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Edit Profile Screen.png" alt="QR Code Located in app/assets/Edit Profile Screen.png" height="500" />
</p>

To navigate to this screen, open up the sidebar and press **Edit Profile**. The edit profile screen is simple. It asks for a profile photo, a greeting for other users who visit your profile to see, and a little bit about the user. If you choose to leave it blank, it will reflect on the user's **Profile** screen. Press **submit** to send it to your profile.

### Profile Screen
<p align="center">
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Profile Screen.png" alt="QR Code Located in app/assets/Profile Screen.png" height="450" />
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Profile Posts Screen.png" alt="QR Code Located in app/assets/Profile Posts Screen.png" height="450" />
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Favorite Anime.png" alt="QR Code Located in app/assets/Favorite Anime.png" height="450" />
 <img src = "https://github.com/RevatureRobert/team-4-Project-2-FE/blob/main/app/assets/Follow Screen.png" alt="QR Code Located in app/assets/Follow Screen.png" height="450" />
</p>

Navigate to the profile screen by pressing on **Profile** in the sidebar. Similar to a specific Anime's page, the Profile Screen also has its own swipeable navigation that consists of Profile, Posts, Favorite, and Follow.

The **Profile section** contains all the information that a user filled out in the Edit Profile screen (profile picture, username, greeting, about me). Also, if you are visiting another User's profile, there is a **Follow** button that you may press on to start following that user.

The **Posts section** are all the Posts that belong to a specific user.

The **Favorite section** holds all the anime a user has favorited. You can also route to that specific anime through pressing on the anime.

The **Follow section** holds all the users you follow. Like the favorite section, each user is pressable and may route to a user's profile upon press.

## Contributors
Scouter Developers:
* [Joab Smith](https://github.com/j-m-smith426) 
* [Nick Wang](https://github.com/nickwanguu) 
* [Matthew Hanrahan](https://github.com/Thomas-Marik)
* [Imran Ilyas](https://github.com/imranilyas)
