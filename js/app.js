(function() {
  var app = angular.module('blogUMS', []);

  app.controller('BlogController', function(){
    this.products = blog;
  });

  app.controller("PanelController", function(){
  this.tab = 1;  

  this.selectTab = function(setTab){
    this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  };
  });
  app.controller("ReviewController",function(){
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review={};
    };
  });

  var blog = [
   { title: 'Welcome!',
     description: "Hi my name is Shai Oliver and I am the creator of the Underneath My Skin blog site. The purpose behind this website is to learn about people from different backgrounds and cultures. It is my hope that through open dialogue we will be able to bridge the gap that lies between cultures, races, genders, and other social issues. Each week I hope to share an inspiring and uplifting message from different individuals across the world. We must remember that we all have a message to share and there are many people who are ready to receive. Please join in the conversation. Make your voice heard. Remember that people have a right to their opinions even if it’s different from your own. Try to learn and grow through the dialogue being shared. Let's try to make a change one message at a time. I can’t wait to get to know you all!",
    
     images:[
    {full: 'images/about.jpg'}
    ],
    reviews:[
    ] 
   },
    { title: 'No Future',
     description: "",
      
      images:[
    {full: 'images/no_future.jpg'}
    ],    
    reviews:[
    ] 
     }
  ];



/*closing brackets*/
})();