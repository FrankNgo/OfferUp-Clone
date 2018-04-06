# Offer Up Clone

##### A web app clone of the website www.OfferUp.com. 4/6/2018

## By Frank Ngo

## Completed  Features
  * User can navigate with the navigation bar on top with successful routing
  * User can view listings on the landing page
  * User can add new items to the database in the admin tab
  * User can delete items in the database in the admin tab
  * User can edit items in the database in the admin tab
  * Website is fully deployed

## Features to be Added
  * User can Create an account
  * User authentication with created account
  * Protecting Routes
  * Route guards
  * User authentication with popular log in methods (Google, Facebook ,etc.)
  * User can mark a listing as favorite

## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* Node JS
* Angular CLI
* Firebase

## Run the Application  

1. ### Visit Deployed Website
```
https://offerclone-a1.firebaseapp.com/
```

2. ### Install and Host Locally

  clone the github respository
  ```
  $ git clone https://github.com/FrankNgo/OfferUp-Clone
  ```
  #### Add Firebase Credentials
  Create an account and get credentials from Firebase. https://firebase.google.com/   
  Create a new project.  
  Give it the name of your choice.  
  Select your Country/Region.  
  Choose the add Firebase to your web app option.  
  Add a file named api-keys.ts in the src/app directory.  

  Add the following code to the file with your credentials in place of xxxx.
  ```
  export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
  ```
  move into the directory
  ```
  $ cd project
  ```
  install npm
  ```
  $ npm install
  ```
  run the program
  ```
  $ ng serve --open
  ```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.


## Support and contact details

* contact the author at frankngomusic@gmail.com

### License

*MIT License*

Copyright (c) 2018 **_Frank Ngo_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
