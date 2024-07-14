### Wireframes

<details>

<summary>All Wireframe Images</summary>

Full size wireframes available [here](https://github.com/Gareth-McGirr/body-doodles/tree/main/readme/wireframes)

Home / Posts

![Home / Posts](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/post.png)

Contact

![Contact](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/Contact.png)

Feed

![Feed](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/Feed.png)

Liked

![Liked](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/Liked.png)

Profiles

![Profiles](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/Profiles.png)

Artist List

![Artist List](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/artist-list.png)

Artist Profile

![Artist Profile](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/artist-profile.png)

Create Artist & Edit Artist

![Create Artist](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/create-artist.png)

Create Post & Edit Post

![Create Post](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/wireframes/create-post.png)

Sign In

![Sign In](https://github.com/Gareth-McGirr/body-doodles/blob/main/readme/wireframes/sign-in.png)

Sign Up

![Sign Up](https://github.com/Gareth-McGirr/body-doodles/blob/main/readme/wireframes/sign-up.png)

</details>

## The Surface Plane

### Design

#### Colour-Scheme

The background colour for individual componenets is black (#000000).

Icon, headings and border colours are gold (#cca53c).

Main text is white (#ffffff).

The main page background colour is an off shade of white (#f8f8f8).
<hr>
<br>

#### Typography

The main font used on the website is "DM Sans".
<hr>
<br>

#### Imagery

The images on this website are user uploaded except for the logo which was taken from the royalty free stock website [istockphoto](https://www.istockphoto.com/search/search-by-asset?affiliateredirect=true&assetid=1320[…]dium=affiliate_SP&utm_source=FreeImages&utm_term=letters+bd)
<hr>
<br>

## Technologies

* React
    * Main framework used to create the user interface
* Node
    * Package manager used to install dependencies
* Eslint
    * Linting tool used in order to check best practice coding standards
* Heroku
    * Used for application hosting
* Git
    * Version control software
* Github
    * Repository used to store base code and docs

<hr>
<br>

## Testing

Testing can be found in the [TESTING.md file](https://github.com/Gareth-McGirr/body-doodles/blob/main/TESTING.md)
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
The live link can be found here: [Live Site - Sizzle and Steak](https://body-doodles.onrender.com/)
<br>

## Version Control

The site was created using the Visual Studio Code editor and pushed to github to the remote repository ‘body-doodles’.

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

This  article was used to implement the simple star rating component:   
* [awran5/react-simple-star-rating](https://github.com/awran5/react-simple-star-rating)


### Content

Logo used was taken from [](https://www.istockphoto.com/search/search-by-asset?affiliateredirect=true&assetid=1320[…]dium=affiliate_SP&utm_source=FreeImages&utm_term=letters+bd)

Sign up & Sign in images taken from [](https://wallpaper.dog/traditional-tattoo-wallpapers)

### Acknowledgements

I'd like the thank slack user [](https://github.com/) for help with setting up eslint configs.

A special thanks to [](https://github.com/) for his help with help resolving a bug where my artist details were showing on other user profiles.

Thanks to [](https://github.com/) for also helping fix a memory leak.