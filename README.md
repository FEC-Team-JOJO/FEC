# FEC #
---
## Overview ##

This is a multi widget web page that takes a [modern approach](https://xd.adobe.com/view/e600dc0f-454c-44e3-5075-7872d04189ff-9031/?fullscreen) to a retail website. A requested overarching theme was taken into consideration for stylistic decisions.
---
## Getting started ##

### Installation ###

To run this program, inside of the project's root directory you will need to:

  1. `npm install`
  
      *For a full list of dependencies reference the package.json*
  3. Generate a Github personal API token with the following permissions:
     - read:org
     - read:user
     - user:email
     - user:follow
     
  3. Make a copy of the example file config.js to include your personal API token.
  4. `npm run build`
  5. `npm install forever -g`

### Running the page ###

To run this page you will need to:

  1. Run `npm run forever-server` in the project's root directory
  2. Open your browser to localhost:3000
  3. To shut down your server run the command `npm run stop-forever`

---
## Contents ##

### This website is seperated into 4 major widgets: ###

  1. The **Product Overview** module, created by Eunice Kim, is the main visual representation of the selected product and its given styles
     - Functionality and display:
       - Image gallery offers a default collapsed view and expanded view that allows alternate views of the same style
       - Styles can be changed via the style selector to the right of the main image
       - Size and quantity is reflected dynamically based on the style selected and the current inventory
       - An "add to cart" feature allows for a product with its selected style, size, and quantity to be added to the cart

  &emsp;  &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; ![alt text](Overview.gif)
       
  2. The **Related Items & Comparison** module, created by Alex Shiao, will display two carousels populated by product cards
     - Considerations:
       - The outfits carousel only shows three items so that outfits can be added at any given location in the carousel
     - Functionality and display:
       - The first carousel shows the items related to the current product
       - Each card in the first carousel features a compare button that compares that item with the current item
       - The second carousel shows the items that has been added to the outfit list
       - The outfit list persists through page navigation
       - Each card in the second carousel features a delete button that removes the undesired outfit from the list
   
  &emsp;  &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; ![alt text](Compare.gif)
     
  3. The **Questions & Answers** module, created by Casey Eads, allows access to product specific information outside what's provided by the Overview
     - Considerations:
       - Make the traversal of information and access to new information responive and intuitive
     - Functionality and display:
       - Search bar at the top allowing matching question to be found after 3 or more characters have been input
       - List of already asked questions and provided answers ordered by Seller, then level of helpfulness
       - Ability to mark questions and answers as helpful or report answers
       - Modals to provide a new question or answer an existing one
   
  &emsp;  &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; ![alt text](Q&A.gif)
       
  4. The **Ratings & Reviews** module, created by Adarsh Ravindran, will allow viewing and submission of reviews for the product selected
     - functionality and display
       - Write new review - accessible by clicking the Write Review button towards the bottom of the page. allows a review to be written about a product 
       - Review List - displays reviews of the current product
       - Product review breakdown - gives the overall reviews of the product as well as breakdowns for individual stars and specific characteristics
  
  &emsp;  &emsp;  &emsp; &emsp; &nbsp;&nbsp; ![alt text](R&R.gif)
---
## Contacts ##

Adarsh Ravindran &emsp; [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/adarshraj-ravindran) &emsp; [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/AdarshrajRav)

Casey Eads &emsp; &emsp; &emsp;&nbsp; [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/casey-eads-1d618/) &emsp; [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/ceads1618)

Eunice Kim &emsp; &emsp; &emsp; &nbsp; [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/euniceyunjkim/) &emsp; [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/euniceyunjkim)

Alex Shiao &emsp; &emsp; &emsp; &nbsp;&nbsp; [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/alexander-shiao-958221162/) &emsp; [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/alexshiao99)

---
## Technologies ##

- Setup and Configuration:&nbsp; &nbsp;
 ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
 ![git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
 ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
 ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
 
- Front End Development: &nbsp; &nbsp;
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  
- Back End Development: &emsp;
  ![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
  
- Testing Environment: &emsp; &emsp;
  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
  
- Team Collaboration: &emsp; &emsp; &nbsp;
  ![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
  ![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)
  ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
