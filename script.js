var resourceDescriptions=document.getElementById('theResourceList').children;

function showDescription(e){
  for (var i=0; i<10; i++){
    if (e==document.getElementById('theResourceList').children[i]){
      if (document.getElementById('theResourceList').children[i].children[1].style.display=="block"){
        document.getElementById('theResourceList').children[i].children[1].style.display="none";
      }
      else{
        document.getElementById('theResourceList').children[i].children[1].style.display="block";
      }
    }
    else{
      document.getElementById('theResourceList').children[i].children[1].style.display="none";
    }
  }
}


$(document).ready(function(){
  //faq toggle stuff

  $('.togglefaq').click(function(e) {
      e.preventDefault();
      $("#answer1").css("display", "");
      // $(this).toggleClass('active').next().slideToggle("fast");
      // $(this).children('i').toggleClass('icon-plus icon-minus');
  });

  // $('.togglefaq').click(function(e) {
  //     e.preventDefault();
  //     var notthis = $('.active').not(this);
  //     notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
  //     notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
  //     $(this).toggleClass('active').next().slideToggle("fast");
  //     $(this).children('i').toggleClass('icon-plus icon-minus');
  // });

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
