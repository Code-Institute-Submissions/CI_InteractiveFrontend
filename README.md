# Data Dashboard Creation - Let's learn about cats!
 **Code Institute - Interactive Frontend Project**

 Project live here: https://nuagesdencre.github.io/CI_InteractiveFrontend/
***********


## Purpose of the project
For this project, I needed to build a data dashboard that visualizes a dataset of my choice.

Datasets can be found all over the web but are not always reliable or (let's face it) presented interestingly.

In this case, I decided to pick a whimsical subject and present it as simply, playfully as possible. Who doesn't like cats?

### *Let's learn about cats!*

## Features
- Page by page presentation of content for a better user experience (using pagePiling.js)
- Charts created using d3.js, dc.js and crossfilter
- Interactive filtering of data reflected in a datatable
   > The datatable clearly displays the information available and offers an external link to the associated wikipedia page for more details 
- Revolving quotes and information snippets at the top of the page
- Disclaimer page
- Drawings and pictures

## Functionality of the project 
I incorporated links and buttons to allow my user to navigate the site, along with an easier control of the site functionality.

I endeavoured to make the site is as responsive as possible, however I realised that the best user experience with charts necessitated a bigger screen than most smartphones. Charts using D3.js are not responsive as they are designed for desktop or large-screen viewing. I tested this by checking the site on different screen sizes and browsers. 

My chart containers are responsive however and will be displayed differently at the medium and large breaking points. Again, charts using D3.js are not responsive as they are designed for desktop or large-screen viewing.

To ensure visitors would not miss out, I included a message to invite visitors back to the site using a bigger viewport.


## Process
 I wrote down user stories and created a wireframe before embarking on full-blown development.
### *Meet our Users*
 
  ![](stories/userstory_frame.png?raw=true)

| User    | Purpose of visit                                                                                                                                                                                  | What the user wants                                                                                                                                                                                                                                                                                                                                                                                       | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------ | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Mike    | Mike wanted to impress his overseas girlfriend with his knowledge of fancy cats.                                                                                                                  | As a site visitor, Mike wants to be able to easily apply filters on the data available, so he can manipulate it accordingly.  Mike also wants to see the correct data displayed as he manipulates it, so he can analyze it.                                                                                                                                                                               | Mike quickly accessed the webpage and clicked the charts to select the hairless cat category. He used the search field to narrow down his search for the cats in Canada (where is girlfriend lives). He thought the webpage' colours were a bit bright but okay for a short visit. Mike enjoyed the random fact wheel at the top section of the page, that he noticed after scrolling up and down a few times.                                                                                                                                                                                                            |
| Lou     | Lou's daughters are eager to look at anything cute and fluffy. Lou set up the webpage on his iPad so they could look at cats together.                                                            | As a site visitor, Lou expects to see clear explanation of the data visualisations used, so he and his daughters can understand the displayed information. Lou wants to be able to easily apply filters on the data available, so he can manipulate it accordingly.                                                                                                                                       | Lou and his daughters were happy to click on the piecharts and see them be animated with each touch. The table displayed a lot of lovely pictures and Lou showed the girls how to use the pagination to see all of them. The girls enjoy the bright colors and turn the iPad in all directions to see everything.                                                                                                                                                                                                                                                                                                 |
| Camille | Camille wishes to purchase a fancy cat she can pamper and doll up. She wants to know which cat is the most glamourous of them all and confirm the information is from a trusted, relevant source. | As a site visitor, Camille can identify the data source, so she can confirm its accuracy and relevance. Camille wants a resource where there is a clear explanation of the data visualisations used, so she can understand the displayed information. Moreover, the webpage administrator provided contact information, so Camille can inform him/her of technical issues with the page or ask questions. | At first, Camille tries to access the page using her phone - but a message advises her that the webpage can be viewed on bigger screen only. She uses her tablet instead. By clicking on the 'fur pattern' wheel, Camille is able to pinpoint the type of appareance of her future pet. She finds the Toyger quite adorable and she clicks on the 'Learn more' button within the table to access the wikipedia page for more details. Before she leaves the webpage, Camille uses the contact information available to send a question to the webmaster regarding the cat drawing displayed in the page header.   |
| Harry   | Harry rescued a kitten while reorganising his brother-in-law's garage. He has since adopted the kitty and he now wants to know which kind of cat it could be.                                     | As a visitor, Harry expects to see clear explanation of the data visualisations used, so he can understand the displayed information. Harry also expects that access to the resource is straightforward (no login, no popups).                                                                                                                                                                            | As he accesses the page, Harry has a quick overall look (no endless paragraphs to read, no login needed, no pop-ups, okay). Harry was told by his family it could probably be a 'tabby'. He looks up in the alphabetical drop-down menu but does not see tabby right away. He carefully selects the relevant criteria on the piewheel to see the results. There are a lot of choices, so he starts with the wheels where he can read most of them. He concludes his visit  convinced that the cat is, in the end, of no breed in particular. He calls his son over to look at weird-looking cats in the meantime. |

## The webpage's mockup
* v1. [Wireframe here!](./dashboard.png)
* v2. Updated [wireframe](./dashboard_v2.png) for powerpoint-like presentation

## Technologies used 
 Since my single-page application makes use of Bootstrap (a CSS frameworks) and other libraries, I created a vendor file to ensure a clear separation between the library code and my own code.
 
 - HTML5
 - CSS3
  
- [Bootstrap v.4.1](https://getbootstrap.com/)  
   > Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.                         

- [pagePiling](https://github.com/alvarotrigo/pagePiling.js)
  > JQuery plugin to create beautiful scrollable websites
- jQuery
  > jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.
- Data-specific Javascript libraries
  - [D3.js](https://d3js.org)
  - [DC.js](https://dc-js.github.io/dc.js)
  - [Crossfilter](https://square.github.io/crossfilter)
  > *D3.js* is a JavaScript library for manipulating documents based on data. *dc.js* is a javascript charting library with native crossfilter support, allowing highly efficient exploration on large multi-dimensional datasets (inspired by crossfilter's demo). It leverages d3 to render charts in CSS-friendly SVG format. *Crossfilter* is a JavaScript library for exploring large multivariate datasets in the browser                       
  - queue
  >*d3-queue* is a tiny library for running asynchronous tasks with configurable concurrency.


I used Git & GitHub for version control. Each new piece of functionality should be in a separate commit; I proceeded with that in mind, although a bit clumsily in retrospect. I will create branches for future commits and subsquent projects!

The final version of my code is hosted on GitHub Pages.
The project live here: https://nuagesdencre.github.io/CI_InteractiveFrontend/


## Testing

To the best of my abilitities, I conducted and documented tests to ensure that all of my website's functionality work well, while taking in account the user stories.


1. Access and filter data on the webpage
   
    I. Upon access to the webpage, the second section of the webpage indicates where to find filters and how to navigate the site. The possible ways to filter the charts are through the collapsible menu (via hamburger icon), by resetting all filters at once using the double arrow icon at the top-left corner of the screen or by clicking on the charts directly.
    
    II.  The top-left hamburger menu reveals once clicked three diffent ways to filter the results. A note informs the visitor that the window can be closed following his/her choice.
    
    III. Use of the 'search' input filters the data vailable by country. If country is mispelled or does not correspond to the available data, the charts remain blank.

    IV. An error message is displayed in the filter menu and in the datatable section for a few seconds if a visitor types in something that does not match the data available. This message invites the visitor to make another attempt.
    
    V. Use of the drop-down menu allows for the selection of a specific breed of a cat at a time. If data is already filtered, the available choices are limited.
    
    VI. The 'reset all filters' button allows for all filters to be removed at once. The same option is available at the top-left corner of the screen when the menu is closed and at the datatable section.

    VII. Regardless of where the filters are chosen, there is no issue in selecting a filter by clicking on a chart and then accessing the menu for further filtering.  
    

2. Charts
   
    I. The piecharts have a limited amount of slices displayed to simplify the data presented. 

    II. The color palette used on all charts allows for an easier read of each element.The barchart displays multiple labels to allow for an easier view of the data available or filtered.

    III.  Clicking on a slice of the piechart or on the barchart affects all other charts available on the webpage.

    IV. Additional filtering is not possible through the datatable. The datatable displays the data available (and/or filtered) allowing a view of 5 elements maximum at once. This is set up to prevent too much information to be displayed, leading to the confusion of the viewer.

    V. The datatable is paginated to permit access further data. Pagination is disabled if no further data can be displayed.


3. Responsiveness of the webpage
   
    I. The webpage has been tested on various devices and screen sizes. I requested inputs from friends and family members using a variety of devices to ensure an equal viewing experience. Browserling [(link here)](https://www.browserling.com/) was also used review browser compatibility.
    
    II. A message is displayed when screen size deemed too small for a proper view of the dashboard. This message invites the viewer to return to the page using a larger sized screen.

    III. The chart containers are responsive even if the charts themselves are not. The charts have been separated in different sections for a less 'crowded' or overwelming user experience (since the webpage appeals to children and adults). The charts will also be displayed differently following the medium and large breaking points of to the viewport.

4. Redirection to external pages
   
    I. Links on the webpage are set up so that they open in a separate window. The user can keep their current view of the webpage in parallel. 
    
    II. Links are easily identified through the usage of button elements or highlights in a different color. For instance, the links within the datatable are yellow buttons with the value 'Learn more'. 

5. Communication
   
    I. An introductory paragraph has been included at the top of the webpage to go through the purpose of the page and the interaction possible with its elements.
    
    II. A direct reference to the webmaster's email is provided at the bottom of the webpage (footer section), along with a reference in the disclaimer modal.
 
    

**Comments**

- Jasmine : Jasmine testing is useful when input is given by the visitor, and when the DOM generates  & returns a value.
This particular project did not give me the opportunity to use it.
However I have inspected the javascript and jQuery code using jsLint and jsHint (http://jshint.com/).

* Errors and warnings found using [W3C CSS Validation service](https://jigsaw.w3.org/css-validator/validator)
  
  This warning relates to the apparence of the selection drop-down menu. The transparency on both elements is desired.
  > 	.dc-select-menu	Same color for background-color and border-color

* Errors and warnings found using [Nu Html Checker](https://validator.w3.org/)
  
  The following errors where picked up and corrected accordingly.
  > Error: The element a must not appear as a descendant of the button element.

  > Error: Element badge not allowed as child of element p in this context.


## Deployment 

This project was deployed through the Github pages.
It can be download or cloned using the relevant Github option at the top-right of the project page. 

The project is live here: https://nuagesdencre.github.io/CI_InteractiveFrontend/


## Hurdles

- GitHub organisation: I realised quite far in the project that the git commits require a new branch for every new feature or bug for a clearer understanding. 
- Overall UX: After presenting my webpage to a few children, I quickly noticed 2 things: their attention span is limited, which means they can normally focus on one element (or image) at a time. This is why I decided to go ahead with a cleaner, powerpoint-like presentation instead of the initial scrolling-down amalgamation of the charts. I discovered the plugin 'pagePiling' while experimenting with different approaches that also allowed for navigation using the keyboard instead of the mouse or touchscreen.
- After filling in the pre-submission checklist, I noticed that there was no error message displayed when an erroneous country name, or something else that didn't correspond to the data available, was provided by a visitor. I added a message on both the filter menu and the datatable section to remedy to the situation.
  
## Credits and Content

This information has also been included (in fewer words) in the disclaimer portion of the webpage.
                              
- [Disclaimer Generator](https://disclaimergenerator.net#wizard)
  > I added a disclaimer page as the data used for the purposes of the project, while quite detailed, might be incorrect, incomplete or repetitive. I did my best to tailor and rectify certain details (such as combining the length of fur variations), however I do not claim to be a cat expert and wished to make that clear. 
- Data 
   >My data is stored locally; I retrieved it [here](https://mysafeinfo.com/content/options/catbreeds) and tailored it using the wikipedia resource pages [Cat Breeds](https://en.wikipedia.org/wiki/List_of_cat_breeds). The contents of the webpage, including the cat pictures from the data table, are also issued from the Cat Breeds' wikipedia resource pages.
- [Google fonts Open Sans & Concert One](https://fonts.google.com/specimen/Concert+One) 
   > The webpage's fanciful fonts can be found, along with many other great fonts, in Google's own collection.    
- [Bootstrap v.4.1](https://getbootstrap.com/)  
                        
- [w3schools](https://www.w3schools.com/howto/howto_css_modals.asp)
  > This modal template inspired me to include the disclaimer notice as it is currently shown on the website. I wished to disclose the source of the code accordingly, even if I have tailored the modal to the project. This modal format suited the project as it was unobtrusive and elegant - I styled it and modified the elements to match the webpage accordingly.           
- The vector images were created by and remain property of my humble self :) [(Veronique Savard)](http://www.nuagesdencre.com)
                                    

## Contact

Feel free to get in touch for feedback.

**vero@nuagesdencre.com**
