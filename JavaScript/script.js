//  MEDIA QUERY (RESPONSIVE) -->
$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function() {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    })
});



//  MEDIA QUERY (RESPONSIVE) -->
// $(document).ready(function(){

//     $('#menu').click(function(){
//         $(this).toggleClass('fa-times');
//         $('section').toggleClass('toggle');
//     });

//     $(window).on('scroll load',function(){

//         $('#menu').removeClass('fa-times');
//         $('section').removeClass('toggle');
//     })
// });
