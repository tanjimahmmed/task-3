(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
     // -- start work -- //
    $(".homepage_slides").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        autoplay:false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    $(".team_list").owlCarousel({
        items:3,
        margin:30,
        loop:true,
        nav:false,
        dots:true,
        autoplay:false
    });

    $(".testimonial_list").owlCarousel({
        items:3,
        margin:30,
        loop:true,
        nav:false,
        dots:true,
        autoplay:false
    });

    
    $(".logo_carousel").owlCarousel({
        items:1,
        margin:0,
        loop:true,
        nav:false,
        dots:false,
        autoplay:false
    });

    $(".web_design_skill_bar").circleProgress({
        animation: {
            duration: 2000,
            easing: "circleProgressEasing",
        },
        delay: 3000,
        lineCap: "round",
        value: 0.90,
        size: 250,
        thickness: 3,
        emptyFill: 'rgba(255,255,255,0.2)',
        fill: {
            gradient: ["#0bbbc1"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.skill_count_number').html(Math.round(90 * progress) + '<i>%</i>');
    });
    $(".graphic_design_skill_bar").circleProgress({
        animation: {
            duration: 2000,
            easing: "circleProgressEasing",
        },
        delay: 3000,
        lineCap: "round",
        value: 0.95,
        size: 250,
        thickness: 3,
        emptyFill: 'rgba(255,255,255,0.2)',
        fill: {
            gradient: ["#0bbbc1"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.skill_count_number').html(Math.round(95 * progress) + '<i>%</i>');
    });
    $(".marketing_design_skill_bar").circleProgress({
        animation: {
            duration: 2000,
            easing: "circleProgressEasing",
        },
        delay: 3000,
        lineCap: "round",
        value: 0.84,
        size: 250,
        thickness: 3,
        emptyFill: 'rgba(255,255,255,0.2)',
        fill: {
            gradient: ["#0bbbc1"]
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.skill_count_number').html(Math.round(84 * progress) + '<i>%</i>');
    });


    $(".portfolio_filter li").on('click', function(){
        var filterValue = $(this).attr("data-filter");
        $(".portfolio_list").isotope({
            filter: filterValue,
            layoutMode: 'masonry',
            masonry:{
                columnWidth:'.col-md-3',
                horizontalOrder:false
            }
        });
        $(".portfolio_filter li").removeClass('active');
        $(this).addClass('active')
    });


    $(".portfolio_list").isotope({
        layoutMode: 'masonry',
        masonry:{
            columnWidth:'.col-md-3',
            horizontalOrder:false
        }
    });

    


     // -- End work -- //
            
    });

   jQuery(window).load(function(){

   });

}(jQuery));	