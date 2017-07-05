// This is where it all goes :)
$(document).ready(function() {

	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	
	// Foundation
	$(function() {
	  $(document).foundation();
	});

	$('#fullpage').fullpage({
    // menu: '#menu-2',
    anchors: ['Home','Pics','What','Pillars','Help','Blog','None','Contact'],
    // fixedElements: '#top-menu-id-2',
    // afterRender: function(){
    //   $('#top-menu-id-2').hide();
    // },
    // verticalCentered: false,
    autoScrolling:false,
    fitToSection: false,
    slidesNavigation: true,
    recordHistory: false,
    controlArrows: false,
    scrollingSpeed: 1500,
    // continuousHorizontal: true,
    // loopHorizontal: true,
    afterRender: function () {
     //on page load, start the slideshow
      slideTimeout = setInterval(function () {
          $.fn.fullpage.moveSlideRight();
      }, 3500);
    },

    verticalCentered: false,
    //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
    css3:false,

    afterLoad: function(anchor, index){
      if(index == 1){
        $('.drawer-text').addClass('animation-left-header-services');
        $('.c-hamburger').addClass('animation-left-header-services');
        $('.header-logo').addClass('fade-element');
        $('.header-text').addClass('animation-left-header-text');
      }
      if(index == 2 && w>765){
        $('.header2-col-1').addClass('animation-up-pic-img-1');
        $('.header2-col-2').addClass('animation-up-pic-img-2');
        $('.header2-col-3').addClass('animation-up-pic-img-3');
      }
      if(index == 3 && w>765){
        $('.what-col-1').addClass('animation-left-what-col-1');
        $('.inner-slide').addClass('fade-element-what');
      }
      if(index == 4){
        $('.pillars-text').addClass('animation-left-pillar-text');
        $('.pillars-img').addClass('fade-element-pillars-img');
        $('.pillars-text-1').addClass('animation-left-pillar-text-1');
        $('.pillars-text-2').addClass('animation-left-pillar-text-2');
        $('.pillars-text-3').addClass('animation-left-pillar-text-3');        
        $('.ribbon-small-1').addClass('fade-element-ribbon-1');
        $('.ribbon-small-2').addClass('fade-element-ribbon-2');
        $('.ribbon-small-3').addClass('fade-element-ribbon-3');
      }
      if(index == 6 && w>765){
        $('.blog-link-1').addClass('animation-up-blog-img-1');
        $('.blog-link-2').addClass('animation-up-blog-img-2');
        $('.blog-link-3').addClass('animation-up-blog-img-3');
      }
      if(index == 7){
        $('.cta-img-1').addClass('fade-element-cta');
      }
      if(index == 7 && w>765){
        $('.footer-col-1').addClass('animation-up-footer-col-1');
        $('.footer-col-3').addClass('animation-up-footer-col-3');
      }     
    },
  });
	// $.fn.fullpage.setMouseWheelScrolling(false);
	// $.fn.fullpage.setAllowScrolling(false);
	// $.fn.fullpage.setAutoScrolling(false);


	// (function() {

 //      "use strict";

 //      var toggles = document.querySelectorAll(".c-hamburger-m");

 //      for (var i = toggles.length - 1; i >= 0; i--) {
 //        var toggle = toggles[i];
 //        toggleHandler(toggle);
 //      };

 //      function toggleHandler(toggle) {
 //        toggle.addEventListener( "click", function(e) {
 //          e.preventDefault();
 //          if ((this.classList.contains("is-active") === true)){ 
 //            this.classList.remove("is-active")}
 //          else{
 //              this.classList.add("is-active")
 //            }
 //          if ((this.classList.contains("is-active") === true)){
 //            $(".mobile-menu").removeClass("menu-hide")
 //            }
 //          else{$(".mobile-menu").addClass("menu-hide")
 //            }
 //        });
 //    }

 //  })();
});
	

      // <!--     <script type="text/javascript" charset="utf-8">
      // $(window).scroll(function (event) {
      //  var scroll = $(window).scrollTop();
      //   // Do something
      //   console.log("scroll");
      //   console.log(scroll);
      // });

