import React from 'react'
import './Timeline.css'
import $ from "jquery";
const Timeline = () => {
    // var $element=$('.each-event, .title');
    // var $window = $(window);
    // $window.on('scroll resize', check_for_fade);
    // $window.trigger('scroll');
    // function check_for_fade() { 
    //     var window_height = $window.height();
        
    //     $.each($element, function (event) {
    //         var $element = $(this);
    //         var element_height = $element.outerHeight();
    //         var element_offset = $element.offset().top;
    //        let space = window_height - (element_height + element_offset -$(window).scrollTop());
    //         if (space < 60) {
    //             $element.addClass("non-focus");
    //         } else {
    //             $element.removeClass("non-focus");
    //         }
     
    //     });
    // };
  return (
    <div class="wrapper">
   <img src={require('../../Sources/Roadmap.png')} />
    </div>
  )
}

export default Timeline