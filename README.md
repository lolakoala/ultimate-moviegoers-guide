# ultimate-moviegoers-guide
Code challenge for CCB. UI for displaying movie info, sorting, searching. 

# Front-End Developer Test

## Overview

Your client has tasked you with making the Ultimate Moviegoers Guide using _The Movie Database API_. They are asking for an app that at least covers the following:

* Shows the user a list of movies where the user can sort by
  * Now Playing
  * Popular
  * Top Rated
* Allows the user to search for a movie
* Allows the user to select a movie and see more details. The more details, the better.

Best of all is the client has given you full creative control.
Make the Ultimate Moviegoers Guide the best looking app out there.
Feel free to use any front-end framework of your choice - React, React-Native, Vue, Vue Native, Angular, Ember etc.

### Keep in mind the following questions

* What design patterns did you use?
  I used MaterialUI for a consistent and simple visual feel.
  As far as code design/structure, I tried to keep everything modular so that components only recieve data relevant to them. I extracted out the API call, and kept most data persistence in App.js, separating it from the other more view-related components.  
* How would you test your application?
  I prefer react-testing-library, as I have been working with it the most lately. I feel like it has more ability to test actual user interactions than Jest/Enzyme, but I'm certainly not opposed to the latter.
* How do you manage/store application state?
  In local state with hooks. I like hooks because they isolate each piece of state. Most state is kept in App, but some smaller components hold local state relevant to them, such as controls.
* What ways could you structure the code to make it easy to understand and maintain?
  I could have extracted out the data methods from App, but I like having them there so I can see most of what they are doing. I could have added comments here and there about decisions I made, but I think the app is small enough and the flow of logic is straightforward enough that more comments are not needed. 
  Using native HTML instead of MaterialUI (and having a stylesheet instead of JSS/inline styles) would have made it easier for someone unfamiliar with that technology to maintain.  
* What other considerations and tradeoffs did you make when building the application?
  I wanted to interact with the API as much as possible, displaying a good amount of information. This is why I added paging and pulled extra details for the dialog. 



