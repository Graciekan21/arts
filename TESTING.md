# User Story Testing

[Document can be viewed here]()



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
