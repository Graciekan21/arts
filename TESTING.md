## Testing

![Arts](documentation/images/responsive.png)
       
Visit the deployed site: [Arts Site](https://arts-afro-4626ca68624f.herokuapp.com/)


# Testing

Throughout the project, I tested functionality and styling after building each section or function/model, making any necessary corrections before moving forward. I consistently used Google Developer Tools to verify proper functionality and to diagnose unexpected issues. Additionally, I thoroughly inspected each page using both Google Chrome Developer Tools and the Firefox Inspector Tool to ensure responsiveness across different screen sizes and devices. I also had friends test the site by signing up, adding, and deleting comments on various devices and platforms (iOS, Android, mobile, tablet, etc.), and they reported any issues they encountered with functionality or styling.

___

## CONTENTS

- [AUTOMATED TESTING](#automated-testing)
  - [Bugs](#bugs)
- [Lighthouse](#lighthouse)
- [MANUAL TESTING](#manual-testing)
  - [Validation Testing](#validation-testing)
  - [HTML \& CSS](#html--css)
  - [Python Testing](#python-testing)
  - [Full Testing](#full-testing)
             
         
## Lighthouse Testing

Lighthouse testing was conducted, and the performance was found to be poor. This is not surprising given the large number of images, but performance could be improved in the future by compressing images before uploading them. Unfortunately, I wasn't able to implement this feature in this iteration.

Mobile

![Lighthouse Mobile Score]()

Desktop

![Lighthouse Desktop Score]()

## Manual Testing

# Posts


| TEST | Description | Steps | Expected | Actual | PASS/FAIL |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Create Account/ sign up | Ensure user is signed up | Go to Nav bar and click sign upif you are new user | sign up page displays | As expected | Pass |
| Login/signin | Ensure the post detail page is displays on  | Pass |
| Logout | Logout Successful | Pass |
| Read Full Post | PostDetail page loaded successfully | Pass |
| Add a post | Post added succssfully | Pass |


# Comments

User/Admin
| TEST | Description | Steps | Expected | Actual | PASS/FAIL |
|:---:|:---:|:---:|:---:|:---:|:---:|
| comment | Esure  Make several comments on a same post | comment calcuates the sum of all comments |  
# Profiles

ADMIN
| TEST | Description | Steps | Expected | Actual | PASS/FAIL |
|:---:|:---:|:---:|:---:|:---:|:---:|

# Notifications

ADMIN
| TEST | OUTCOME | PASS/FAIL|
|:---:|:---:|:---:|

* Open browser and navigate to 
* Open the developer tools (right click and inspect)
* Set to responsive and decrease width to 320px
* Set the zoom to 50%
* Click and drag the responsive window to maximum width

Expected:


## Deployment
## Heroku Deployment

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
The live link can be found here: [Live Site - Sizzle and Steak](https://arts-afro-4626ca68624f.herokuapp.com/)
<br>


## Unit Tests

Unit tests were created for the navbar module

## Lighthouse Testing

Lighthouse testing revealed that performance was poor, which is expected given the large number of images. Additionally, errors caused by the API contributed to the poor performance. To improve performance in the future, compressing images before uploading them could be beneficial. Unfortunately, I did not have time to implement this feature in this iteration.

![lighthouse](/readme/testing/lighthouse_mobile.PNG)
![lighthouse](/readme/testing/lighthouse_desktop)

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards, in accordance with the WCAG 2.1 Reflow criteria for responsive design, using Chrome, Edge, Firefox, and Opera browsers.

Steps to test:

Open your browser and navigate to arts.
Open the developer tools (right-click and select Inspect).
Switch to responsive mode and reduce the width to 320px.
Set the zoom to 50%.
Click and drag the responsive window to its maximum width.
Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.

Actual:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were seen:

Oukitel C21 Pro TCL 30 Pro iPhone SE

## Eslint

Eslint was installed and configured locally. After running, one warning appeared about react version not specified but no errors were logged.
  
## Validators

All CSS files were individually validated. 1 error was found relating to the scroll bar and the offending line subsequently removed.

![HTML](https://validator.w3.org/nu/#textarea)

## Bugs and their fixes

I was facing Error on yarn start. Error screenshot is attached below, this error just happened at the last mint and i couldn't run server again.
![react error](/readme/testing/)

Afraid to say that am so sad that i have error that just happened when am about to submit but i just and i have strangled alot with the error and Gitpod also closed alot of times but i wish i could finished to be able to hand in a better project

I also have a 500 error on the if you dev tool which i couldn't fix due to time. i would i am bit slower i and this time that i had so much it get 
