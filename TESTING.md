# User Story Testing

[Document can be viewed here](https://docs.google.com/spreadsheets/d/1fk4C6dZXSR9iqEICneUgaMbPz_t7yh9787sDF9QxkYc/edit?usp=sharing)



## Unit Tests

Unit tests were created for the navbar module

## Lighthouse Testing

Light house testing was performed and found performance to be poor. While this is to be expected with so many images, this could be improved in the future by compressing images before uploading them. Unfortunately, I did not have time to implement this functionality in this iteration.

![lighthouse](/readme/testing/lighthouse.PNG)


## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in WCAG 2.1 Reflow criteria for responsive design on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

* Open browser and navigate to body-doodles
* Open the developer tools (right click and inspect)
* Set to responsive and decrease width to 320px
* Set the zoom to 50%
* Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.

Actual:

Website behaved as expected.

Website was also opened on the following devices and no responsive issues were seen:

Oukitel C21 Pro TCL 30 Pro iPhone SE

## Eslint

Eslint was installed and configured locally. After running, one warning appeared about react version not specified but no errors were logged.

<blockquote>

C:\Users\garet\body-doodles>npx eslint src


npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration .</blockquote>

## Validators

All CSS files were individually validated. 1 error was found relating to the scroll bar and the offending line subsequently removed.

![CSS](https://raw.githubusercontent.com/Gareth-McGirr/body-doodles/main/readme/testing/css_validator.PNG)

## Bugs and their fixes

A memory leak was causing issues with the authentication system as it was continously reloading the popular profiles component. This was fixed by removing duplicate code that was un-needed.

Light house threw some errors on aria-labels in the nav, these were resolved by adding the aria-labels to affected Links.

Wave testing showed some colour contrasting issues with the links containing usernames. This was fixed by adjusting the colour to meet the WCAG guidelines for contrast ratios at level AA and AAA.

Due to having so many navigation links on the navbar, the elements were overlapping and causing scrolling and overflow issues. To rectify this, the mobile nav is now displayed until larger screen sizes. Ideally a sub navigation menu would of been implemented, leaving only the home, logo, profile image and auth buttons on the main nav. The remainder being added to a new sub navigation. Unfortunately I did not manage to complete thi before submission.

Some console errors are present due to the 