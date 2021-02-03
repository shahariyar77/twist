$(document).ready(function(){
    /*========slick nav js=========*/
   $("#main-nav").slicknav({
        prependTo:'.mobile-manu-wrap',
        allowParentLinks:true
    });
/*========Modal video js=========*/
    
     new ModalVideo('.video-btn');
    
    /*========Homepage slider js=========*/
    
    $(".home-page-slide").owlCarousel({
       autoplay: true,
       navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
        dots:false,
       dotsSpeed: 2000,
       navSpeed: 2000,
       nav: true,
       loop: true,
      autoplayTimeout: 5000, 
     responsive: {
         0: {
         items: 1
         },
        600: {
        items: 1
        },
        1000: {
        items: 1
         }
        }
        
    })
    
   
   
    /*========Team carousel js=========*/
    
    $(".team-list").owlCarousel({
        items:3,
        autoplay: true,
        dots:true,
       dotsSpeed: 2000,
       navSpeed: 2000,
       nav: false,
       loop: true,
       margin:30,
      autoplayTimeout: 1000,
        responsive: {
         0: {
         items: 1
         },
        600: {
        items: 2
        },
        1000: {
        items: 3
         }
        }
    });
    /*========Testmonial js=========*/
    $(".testmonial-list").owlCarousel({
        items:3,
        autoplay: true,
        dots:true,
       dotsSpeed: 2000,
       navSpeed: 2000,
       nav: false,
       loop: true,
       margin:30,
      autoplayTimeout: 1000,
        responsive: {
         0: {
         items: 1
         },
        600: {
        items: 2
        },
        1000: {
        items: 3
         }
        }
    });
    /*========Logo carousel js=========*/
    $(".logo-carousel").owlCarousel({
        items:5,
        autoplay: true,
        dots:false,
        nav: false,
       loop: true,
       margin:30,
      autoplayTimeout: 1000,
        responsive: {
         0: {
         items: 2
         },
        600: {
        items: 5
        },
        1000: {
        items: 5
         }
        }
    });
    
   /*========Progressber  js=========*/
    
    $("#web-skilber").circleProgress({
        value: 0.90,
        size: 270,
        thickness:2,
        fill:"#22babf",
    }) .on('circle-animation-progress', function(event, progress) {
       $(this).find('.skil-count-no').html(Math.round(90 * progress) + '<i>%</i>');
  });
    $("#graphic-skilber").circleProgress({
        value: 0.90,
        size: 270,
        thickness:2,
        fill:"#22babf",
    }) .on('circle-animation-progress', function(event, progress) {
       $(this).find('.skil-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  });
    $("#digital-skilber").circleProgress({
        value: 0.90,
        size: 270,
        thickness:2,
        fill:"#22babf",
    }) .on('circle-animation-progress', function(event, progress) {
       $(this).find('.skil-count-no').html(Math.round(84 * progress) + '<i>%</i>');
  });   
    
});
           




          