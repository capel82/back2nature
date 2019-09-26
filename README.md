# Back2Nature Travel

## Introduction
The aim of this project is to design a front-end website for a travel agent called Back2Nature which specialised in providing private tours in island of Langkawi, Malaysia.  This incorporating HTML, CSS and Javascripts, D3.js and email.js.

### A. Objectives
The objectives of creating this webpages are:

-to make customers aware of the existence of travel agent in Langkawi that can customise and arrange private tours to visit places in Langkawi.  This especially suit for visitors who want less stressful holidays as transports and tour guide are provided according to their needs and budgets.

-to give ideas of places available to visit in Langkawi by using google maps.

-to provide general ideas on hotels available ranging from 3 stars to 5 stars hotels.


### B. Wireframes

[wireframe](Wireframes.png)

### C. User Stories
**Homepage**
As a user of this webpage, I will be quickly captured by the jumbotron background image revealing the tranquility of Langkawi.  The caption of ‘Langkawi’ gives me the impression that this webpage is all about Langkawi and if i continue to read the line below I will made aware that it is a holiday destination in Malaysia.  
The button ‘Private Tour’ with hover effect will prompt me to click on it and a modal will appear to explain more about how to arrange for private tours.

**About page**
This section will help me to know a little about Langkawi and the average temperature of this island.  Further down, I will know more about this travel agent Back2Nature specialises in and a button to click if i want to know more and get a quote.

**Places to visit**
Markers of places are in placed with pop-up info windows give me the popular places that can be visited in Langkawi.  Images incorporated in each info windows helped to enhance impression of the places and I can easily get more information with a link provided by clicking on ‘More Info’ button. 

**Hotels**
I can browse through hotels available in Langkawi of different star-ratings through links provided.  Fontawesome icons displayed help me to know quick summary key features of each hotels.

**Contact page**
I can see clear contact page in which this travel agent can be contacted either by filling up the query form, by phone or by email.

###  D. FEATURES
-**Navbar** - This features uses Bootstrap Navbar toggles and collapsible features which allow when in smaller screen to toggle and collapse, featuring  like a dropdown for easier navigation. It is sticky in feature to allows users to switch between sections easily. 


-**Home page** - The jumbotron is responsive with responsive headings.  Button feature is used so user can click on ‘Private Tour’ with a modal appears in the centre with darkened background.  This uses simple javascript D.O.M features.

-**About section** - This section uses bootstrap 4 grid system for responsiveness.  User can get simple idea of Langkawi and if they want to know more, user can click on the button ‘More’ which linked to wikipedia for more readings.  Also in the same row is the average temperature bar chart created using D3.js with simple animation when user hover over each month that changes colour to lighter blue.  Again, there is another button for request quotes is set at the end of information about this travel agent’s roles. By clicking on the request quote button, it will direct users to contact page.

-**Places to Visit** - This page requires google maps API which helps to display locations of popular places to visit in Langkawi.  Markers of these places have been manually inserted with the use of Javascript and documentation from Google maps.  Infowindows are customised to allow user to briefly know the place by viewing the image of each place.  Each info windows can be closed down before clicking on the next marker so there is no overcrowding of informations on the google maps.  Links of the places also provided inside the info windows for easier navigation by clicking on ‘more info’ button.
Below the map, an example of itinerary of a day tour is illustrated through timeline CSS features to give users a general idea of how this travel agent arranges the private tour.

-**Hotels** - This page uses card decks group components from Bootstrap 4 with CSS animations  to show different hotels available in Langkawi.  A brief features of hotels are illustrated on hovering at each card and utilises font awesome icons for easier grasp of information.  User can easily navigate to each hotel official sites through the link provided by clicking on ‘Book’ button on each card.

-**Contact page** - This page uses form features of bootstraps.  Users can choose either to fill in the form to be contacted back or they can choose to call or visit the admin office directly. Three fields of Your Name, E-mail and queries are made as required fields so that if user not fill in any of the fields, message will appear to ask to fill in.

**_Features to implement in future_**

1.To make D3.chart responsive.

2.To make timeline in cooperating javascript animation that the timeline appears whenever user in their viewports.

3.To make the ability to have hotels and places all in one map.

4.Contact form - to be able to incorporate GDPR consent and CAPTCHA.

### E.Technologies Used

**Figma**
[Figma](https://www.figma.com)

Why it is being used: Tools to draft wireframe easily.

**Bootstrap v 4.3**

(https://getbootstrap.com/)

Why it is being used: As mobile digitals are increasing and so widely used, Bootstraps has been chosen for mobile first -approach for the design of the webpages so that it can be easily made responsive with many different features offered.

**Bootstrap own Javascript, jQuery and Popper.js**
(https://getbootstrap.com/docs/4.3/getting-started/introduction/)

 Why it is being used: As many of bootstrap v4.3 required use of Javascript, jQuery and Popper.js, these technologies were also incorporated into this project.    
     
**HTML5**
 
 Why it is being used: Using up-to-date features offered which is HTML5 through Cloud9 IDE for programming languages.

**CSS3**

Why is being used: Using the latest Cascading Style Sheets to support for responsive designs and styling.
 
**D3.js**
Why is being used: required to create the simple bar chart.

**Email.js**
Why is being used: to make the webpage less static and more interative. Queries can be sent to business email account.

[W3C Markup Validation Service](https://validator.w3.org/)
Why it is being used: to help to validate codes


[google fonts](http://fonts.google.com)
why it is being used: use to style the fonts in all the pages


[Font awesome](https://fontawesome.bootstrapcheatsheets.com/)
why it is being used: to add icons to website


### F. Testing
In the process of developing this project, Chrome Development Tool was used to assess responsiveness as well as designing and debugging.  HTML validator was used to validate the codes.

Browsers tested were Safari and Google Chrome.

The website also tested with my iPhone SE and MacAir.

##### **Manual testings:**
**Navbar** - clicking on all pages to ensure they are all properly linked to the right page.  I also reduced to smaller device screen to test for ability to toggle. In smaller screens, the menu showing "Home, About, Places, Hotels and Contact" appeared vertically on the left. 

**Buttons** - all manually tested with workable links. When i clicked on the buttons, background color and font-color changed indicating the hover effect worked.

**modal** - modal appeared on clicking ‘private tour’ button with darken background and able to close the modal using the closing button.


**Contact Form** - checked by entering incorrect information ie wrong format emails will show the form is correctly validated. If required field not filled, error message will come out to ask to fill the field. When form is filled and click on 'send', the button changes color and to 'sent'.

### G. Deployment
As introduced by Code Institute, I have used *Cloud9 IDE* through AWS website which supports [Github](https://github.com/) and Git repositories as the main platform to develop my website.

Codes developed in Cloud 9 IDE were committed to Git with a repository created in Github beforehand. 

Then I pushed them to Github through in-built function of Cloud 9 IDE.

Then I signed into Github account and clicked on the **repository** with the name **‘Capel82/back2nature’**

This showed the files, images, readme and assets.  

I then go the settings of Github account page, scroll to Github Page and select Source as 'Master Branch' and Theme Choose as "Cayman". My site is then published as displayed by the link which i can click on to deploy.

### H.Credits

a. **Contents:** The contents about Langkawi information were taken from [Wikipedia](https://en.wikipedia.org/wiki/Langkawi) websites.  The average temperature.csv was created however by myself judging from temperatures shown in the same wikipedia page.

b. **Codes :**- taken and adjusted

*modal* - https://www.youtube.com/watch?v=gLWIYk0Sd38&t=2s by **RichardCodes** : Create a Simple Modal Popup

*timeline* - https://www.w3schools.com/howto/howto_css_timeline.asp by **w3schools.com**

*google maps makers* - https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=1457s by **Traversy Media** : Google Maps JavaScript API Tutorial

*D3 bar chart* - https://www.d3-graph-gallery.com/graph/barplot_animation_start.html -**D3.js Graph Gallery**

*email.js* - as taught by Code Institute 'Sending Emails using EmailJS'.

c.. **Photos used:**  The photos used were taken from several sites as below:

*1. Jumbotron background image -* https://www.thecrazytourist.com/25-best-things-to-do-in-langkawi-malaysia/

*2. Google map Infowindows -*
Langkawi Skybridge - https://en.wikipedia.org/wiki/Langkawi_Sky_Bridge

Cenang Beach - https://en.wikipedia.org/wiki/Langkawi#/media/File:Pantai_Cenang_Beach_at_sunset.jpg

Langkawi Crocodile Farm - https://en.wikipedia.org/wiki/Langkawi#/media/File:CROC_FARM_14_0703.jpg

Langkawi Underwater World - https://en.wikipedia.org/wiki/Dugong

Temurun Water Fall - http:www.langkawi-info.com

Seven Wells Waterfall - https://halimabobs.com/2014/05/things-to-do-in-langkawi.html

Tanjung Rhu - https://www.tripadvisor.ie/Hotel_Review-g298283-d315644-Reviews-Tanjung_Rhu_Resort-Langkawi_Langkawi_District_Kedah.html#apg=6d5e5ba456d249c19af31d598cf68295&ss=D8EE453B82315B958A988BEB6C4A2254

Geopark Mangrove -https://www.thedanna.com/en/the-hotel/location/unesco-discovery

Wildlife Park - https://www.shoreexcursions.asia/langkawi-wildlife-park-and-crocodile-farm/

*3.Hotels-*

**all** images for hotels taken from www.booking.com.



### I. Acknowledgement
A special thanks to my mentor **Maranatha Ilesanmi** who has very kindly encouraged, guided and taught me with so much patience towards me in finishing this second milestone project.

I also thanked my wonderful husband who has allowed me to have my protected time to complete this project by looking after my two young boys.

Not forget the tutors in Code Institute who had faithfully helping to solve any problems arising in completing this project.