# Arts

Arts is a social media platform for Artists and art lovers. Users are able to share their art pieces's, they have made or like as well as allowing Artists to showcase their work.
<br>
The live link can be found here: [Live-Site](https://arts-afro-4626ca68624f.herokuapp.com/)
<br>

![Mockup](/readme/images/mockup.png)

## The Strategy Plane

### Site Goals

arts is aimed at all t enthusiasts and show case and building a community of artists. The site aims to connect art
 users, to allow them to showcase their work, artist information as well as sharing it for visual pleasure.
<hr>

### Agile Planning

This project was developed using agile methodologies by delivering small features in incremental sprints. There were 3 sprints in total, spaced out evenly over three weeks.

All stories were assigned to epics, prioritized under the labels, Must have, should have, could have and assigned to sprints. "Must have" stories were completed first, "should haves" and then finally "could haves". It was done this way to ensure that all core requirements were completed first to give the project a complete feel, with the nice to have features being added should there be capacity.

The Kanban board was created using github projects and can be located [here](https://github.com/users/Graciekan21/projects/10/views/1) and can be viewed to see more information on the project cards. All stories except the documentation tasks have a full set of acceptance criteria in order to define the functionality that marks that story as complete.

<hr>

## Epics

**Set Up**

This Epic covers all the initial setup of the React application and dependencies in order to begin coding features.

**Posts**

This epic covers the front end creation of the application in regards to posts. This is to allow users to interact with the backend API via the user interface in order to create, read, update and delete their own posts.

**Comments**

This epic covers the front end creation of the application in regards to comments on posts. This is to allow users to interact with the backend API in order add comments on posts.

**Profiles**

This epic covers the front end creation of the application in regards to user profiles. This is to allow users to interact with the backend API via the user interface to manage their own profiles.

**Notifications** 

This epic covers the front end creation of the application in regards to user notifications. This is to allow users to interact with the backend API via the user interface to manage the notifications bell.


## User Stories

By Epic:

**Posts**

* As a logged in user I can create posts so that I can share my images
* As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page"
* As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
* As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
* As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
* As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
* As a logged in user I can like a post so that I can show my support for the posts that interest me
* As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.
* As a user I can view the details of a single post so that I can learn more about it

**Comments**

* As a logged in user I can add comments to a post so that I can share my thoughts about the post
* As a user I can see how long ago a comment was made so that I know how old a comment is
* As a user I can read comments on posts so that I can read what other users think about the posts
* As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
* As an owner of a comment I can edit my comment so that I can fix or update my existing comment

**Profiles**

* As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
* As a user I can view other users profiles so that I can see their posts and learn more about them
* As a user I can create a new account so that I can access all the features for signed up users
* As a user I can view user's avatars so that I can easily identify users of the application
* As a user I can tell if I am logged in or not so that I can log in if I need to
* As a user I can see a list of the most followed profiles so that I can see which profiles are popular
* As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
* As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
* As a logged in user I can edit my profile so that I can change my profile picture and bio
* As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

**Setup**

* As a user, I would like a favicon on the website so that I can easily know which tab belongs to body doodles

* As a logged out user I can see sign in and sign up options so that I can sign in / sign up

* As a user, I would like a fully responsive navigation menu so that I can easily access the site from any device

**notification**

* As a user i would like to turn on or off the notifications

* As a user you can delete your owen notifications 


Implementation:

A fully responsive navigation menu has been implemented across the website.

This will allow the users to navigate to different pages on the website with ease from any device. Nav items are different depending on the users logged in state to prevent them accessing areas of the application intended for signed in users.

Logged in users:

When a user is logged in the following navigation items are shown:

* Add Post
* Home
* Artists
* Feed
* Liked
* Sign Out
* Users Icon and Username

Implementation:

A fully responsive navigation menu has been implemented across the website.

This will allow the users to navigate to different pages on the website with ease from any device. Nav items are different depending on the users logged in state to prevent them accessing areas of the application intended for signed in users.

Logged in users:

When a user is logged in the following navigation items are shown:

* Add Post
* Home
* Artists
* Feed
* Liked
* Sign Out
* Users Icon and Username

Implementation:

A fully responsive navigation menu has been implemented across the website.

This will allow the users to navigate to different pages on the website with ease from any device. Nav items are different depending on the users logged in state to prevent them accessing areas of the application intended for signed in users.

Logged in users:

When a user is logged in the following navigation items are shown:

* Add Post
* Home
* Artists
* Feed
* Liked
* Sign Out
* Users Icon and Username

![navbar_loggedin_expanded](/readme/images/logged%20in.png)


`As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about`

Implementation:

Users can also click the Feed navigation item and this will display only posts from users the person has followed.

User Story:

`As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most`

Implementation:

Users can click the liked navigation item and display all of the posts they have liked.

User Story:

`As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.`

Implementation:

A search bar has been added that will allow users to search for keywords so that they can search for content that interests them.

![post_searchbar](/readme/images/post_searchbarr.png)

**Comments**

Below each post, there will be a comment box available to logged in users. This will allow users to add comments under posts.

![comment_create](/readme/images/comment_create.png)

A comment count will also be shown under the post, to allow users to see how many people have commented on each post.

A comment or updated time will be displayed in either minutes ago or days ago 

The username and Avatar of the user that created the comment will displayed on each comment

![comments_list_under_post](/readme/images/comments_list_under_post.png)

**Profiles**

User Story:

`As a user I can view other users profiles so that I can see their posts and learn more about them`

Implementation:

Profile pages have been implemented and can be viewed by clicking on a users Avatar that is displayed on a post.

To view a users own profile, they can click their icon from the navigation menu.

User Stories:

`As a logged in user I can edit my profile so that I can change my profile picture and bio`

Implementation:

If the user is the owner of the profile, they are able to edit the profile via the profile form accessed via the three dot drop down menu on the profile.

![profile_edit](/readme/images/profile_edit.png)

User Story:

`As a logged in user I can update my username and password so that I can change my display name and keep my profile secure`

Implemenation:

The drop down menu also allows the user to edit their user name or password by clicking the menu options and filling in the forms.

![profile_change_password](/readme/images/profile_change_password.png)


User Story:

`As a user I can tell if I am logged in or not so that I can log in if I need to`

Implementation:

When a user is logged in, their profile image is on display in the top right of the nav. This will allow the user to easily know when they are logged in and which account (if they have multiple)

![nav_loggedin_Avatar](/readme/images/nav_logged_in_Avatar.png)

**Most followed profiles**

User Stories:

`As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them`

`As a user I can see a list of the most followed profiles so that I can see which profiles are popular`

`As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them`

`As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed`


Implementation:

A component showing the most followed users is shown and the user profiles are able to be viewed by clicking on these. On a desktop, the most followed users has 10 users. On a mobile device this is restricted to 4 so that it does not take up too much room as scrolling may become a nuisance. A follow button will also be displayed that will allow the logged in user to follow the target user.

![most_followed_profiles](/readme/images/most_followed_pofiles.png)


**Notification**

Userstory:

``As a user, i would turnon and off my notification bell so that i get to know when someone has posted a new post.
![nav_notification_bell](/readme/images/nav_notification_bell.png)

<hr>
<br>

### Wireframes

<details>

<summary>All Wireframe Images</summary>

The wireframes available here.

Home / Posts

![Home page](/readme/wireframes/home_page.png)

Feed

![feed](/readme/wireframes/post_page.png)
   
Sign Up

![Sign Up](/readme/wireframes/signup_page.png)


The rest of the page almost look alike with the one i have shown here
</details>

## The Surface Plane

### Design

Implementation:

A site favicon was implemented with the sites logo. This will allow users to easily identify Body Doodles when they have multiple tabs open.

![favicon](/readme/images/favicon.png)

<hr>        
<br>

#### Colour-Scheme   

![color-scheme](/readme/images/color_scheme.png)
The site's color scheme was generated using Adobe Express.

<hr>        
<br>    

#### Typography

The main font used on the website is "DM Sans". from
[Google-fonts](https://fonts.google.com/)

<hr>
<br>

#### Imagery

website [imagery](https://www.pexels.com/photo/man-in-blue-knit-sweater-against-blue-wall-4890733/)

<hr>
<br>

## Technologies

* React
    * Main framework used to create the user interface
* Node
    * Package manager used to install dependencies

* Heroku
    * Used for application hosting
* Git
    * Gitpod 
* Github
    * Repository used to store base code and docs

<hr>
<br>

# TESTING

Testing can be found in the [TESTING.md file](https://github.com/Graciekan21/arts/tree/main)
<hr>
<br>

## Deployment
## Heroku Deployment

The site was deployed to Heroku. The steps to deploy are as follows:

* Navigate to heroku and create an account
* Click the new button in the top right corner
* Select create new app
* Enter app name
* Select region and click create app
* Click the resources tab and search for Heroku Postgres
* Select hobby dev and continue

* Click the deploy tab
* Scroll down to Connect to GitHub and sign in / authorize when prompted
* In the search box, find the repositoy you want to deploy and click connect
* Scroll down to Manual deploy and choose the main branch
* Click deploy
<hr>
<br>
The live link can be found here: [Live site](https://arts-afro-4626ca68624f.herokuapp.com/)
<br>

## Version Control

The site was created using the Gitpod Code editor and pushed to github to the remote repository ‘Graciekan21/arts’.

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.
<hr>
<br>
### Run Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

Install Dependencies:

```npm install```

Run Application:

```npm start```
<hr>
<br>

### Forking

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

- Navigate to the GitHub Repository you want to fork.

- On the top right of the page under the header, click the fork button.

- This will create a duplicate of the full project in your GitHub Repository.
<hr>
<br>

## Credits

This  article was used to implement the art lovers community to share knowledge about art at large.



### Content
           
Logo used was taken from

Sign up & Sign in images taken from, the ones used in the walk through 
         
### Acknowledgements

I would like to thank the Slack users for their help with the setup. A special thanks to all the tutor assistants for their support in resolving API and Heroku errors, and to the tutors for helping fix a bug where my artist details were showing errors in understanding.

my gratefulness goes out to my mentor[Gareth mentor](https://learn.codeinstitute.net/ci_support/spadvfe2024_1/mentor) for the time answring the many questions i throw out to him.