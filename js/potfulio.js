$(document).ready(function(){
 $(".portfulio-list").isotope({
       layoutMode: 'masonry',
        masonry:{
            columnWidth:'.col-lg-3'
        }
    
    });
     $(".portfulio-filter li").on('click', function(){
     $(".portfulio-filter li").removeClass("active");
        $(this).addClass("active");
        var filtervalue = $(this).attr("data-filter");
        $(".portfulio-list").isotope({
            filter:filtervalue,
            layoutMode: 'masonry',
             masonry:{
            columnWidth:'.col-lg-3'
        }
        });
        
    });   
});