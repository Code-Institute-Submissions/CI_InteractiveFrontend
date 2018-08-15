# Data Dashboard Creation - Let's learn about cats!
## Code Institute - Interactive Frontend Project
 Project live here: https://nuagesdencre.github.io/CI_InteractiveFrontend/
***********


## Purpose of the project

[x] Create a Single-Page Application (SPA).
For this project, I needed to build a data dashboard that visualizes a dataset of my choice. In this case, I decided to pick a whimsical subjects and present it as simply, playfully as possible.

## *Let's learn about cats!*

My data is stored locally; I retrieve it [here](https://mysafeinfo.com/content/options/catbreeds) and tailored it using the wikipedia resource pages [Cat Breeds](https://en.wikipedia.org/wiki/List_of_cat_breeds). 

The data is displayed using D3.js and dc.js.
[x] Use Git & GitHub for version control. Each new piece of functionality should be in a separate commit.

[ ] Deploy the final version of your code to a hosting platform such as GitHub Pages.

## Functionality of the project 
[x] Incorporate links or buttons to allow your user to navigate the site and reset/control the site functionality.

[x] Use semantic HTML5 elements to structure your HTML code better.

[x] Make sure your site is as responsive as possible. You can test this by checking the site on different screen sizes and browsers. Please note that if you are building a data dashboard, only your chart containers are expected to be responsive. Charts using D3.js are not responsive as they are designed for desktop or large-screen viewing.
## Process

[x] Write down user stories and create wireframes/mockups before embarking on full-blown development.
## *Meet our Users*
<!-- * [User stories here! (wip)](stories/userstories.xlsx) -->
  ![](stories/userstory_frame.png?raw=true)

| User    | Purpose of visit                                                                                                                                         | What the user wants                                                              | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Mike    | Mike wanted to impress his overseas girlfriend with his knowledge of fancy cats.                                                                         | Resource where cats' data can be accessed quickly, without fuss                  | Mike quickly accessed the webpage and clicked the charts to select the hairless cat category. He used the search field to narrow down his search for the cats in Canada (where is girlfriend lives). He thought the webpage' colours were a bit bright but okay for a short visit. Mike enjoyed the random fact wheel at the top of the page, that he noticed after scrolling up and down a few times.                                                                                                                                    |
| Lou     | Lou's daughters are eager to look at anything cute and fluffy. Lou set up the webpage on his iPad so they could look at cats together.                   | A convivial webpage where kids and adults can learn about cats                   | Lou and his daughters were happy to click on the piecharts and see them be animated with each touch. The table displayed a lot of lovely pictures and Lou showed the girls how to use the pagination to see all of them. The girls enjoy the bright colors and turn the iPad in all directions to see everything.                                                                                                                                                                                                                         |
| Camille | Camille wishes to purchase a fancy cat she can pamper and doll up. She wants to know which cat is the most glamourous pf them all.                       | A place where the cats' data can be narrowed down according to their appearance  | At first, Camille tries to access the page using her phone - but a message advises her that the webpage can be viewed on bigger screen only. She uses her tablet instead. By clicking on the 'fur pattern' wheel, Camille is able to pinpoint the type of appareance of her future pet. She finds the Toyger quite adorable and she clicks on the 'Learn more' button within the table to access the wikipedia page for more details.                                                                                                     |
| Harry   | Harry rescued a kitten while reorganising his brother-in-law's garage. He has since adopted the kitty and he now wants to know which kind of cat it could be. | A cats' resource page where to narrow down a search using a variety of criterias | As he accesses the page, Harry has a quick overall look (no endless paragraphs to read, no login needed, no pop-ups, okay). Harry was told by his family it could probably be a 'tabby'. He looks up in the alphabetical drop-down menu but does not see tabby right away. He carefully selects the relevant criteria on the piewheel to see the results. There are a lot of choices, so he starts with the wheels where he can read most of them. He concludes his visit  convinced that the cat is, in the end, of no breed in particular. He calls his son over to look at weird-looking cats in the meantime. |

## The webpage's mockup
* [Mockup here!](datadashboard.png)

## Technologies used 

Since my single-page application makes use of Bootstrap (a CSS frameworks) and other libraries, I created a vendor file to ensure a clear separation between the library code and my own code.



```
HTML
CSS

Javascript Libraries:
- d3.js
- dc.js
- crossfilter.js
- queue.js
- jQuery
```
Detail how the project was deployed and tested and if some of the work was based on other code, explain what was kept and how it was changed to fit your need.

## Testing

```
Jasmine: useful when input is given, DOM generated  & retruns a value -- this project does not give me the opportunity to use it

Screen size
- Tested on various devices and screen sizes
- Message displayed when screen size deemed too small for a proper view of the dashboard. This message invites the viewer to return to the page using a larger size screen.

```
[wip] You should conduct and document tests to ensure that all of your website's functionality works well.

## Hurdles



## Contact
vero@nuagesdencre.com