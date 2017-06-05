// $(document).ready(function(){
//     var click = false;
//     $("#blog-main-carousel").carousel({
//         interval: 1000
//     }).on('click', '.list-group li',function(){
//         click = true;
//         $('.list-group li').removeClass('active');
//         $(this).addClass('active');
//     }).on('slid.bs.carousel',function(event){
//         if(!click){
//             var count = $('.list-group').children().length -1;
//             var current = $('.list-group li.active');
//             current.removeClass('active').next().addClass('active');
//             var id = parseInt(current.data('slide-to'));
//             if(count == id){
//                 $('.list-group li').first().addClass('active');
//             }
//         }
//         click = false;
//     });
// });


$(document).ready(function(){
    console.log('Hi');
    var clickEvent = false;
    $('#blog-main-carousel-ctrl').
    on('click', '.list-group li', function() {
        clickEvent = true;
        $('.list-group li').removeClass('active');
        $(this).addClass('active');
    });

    $('#blog-main-carousel').carousel({
        interval:   1000
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.list-group').children().length -1;
            var current = $('#blog-main-carousel-ctrl .list-group li.active');
            // console.log("Current", current);
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.list-group li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
});


$(document).ready(function() {
    var boxheight = $('#blog-main-carousel .carousel-inner').innerHeight();
    console.log('boxheight: ' + boxheight);
    var itemlength = $('#blog-main-carousel-ctrl .list-group').innerHeight();
    console.log('list-group-itemlength: ' + itemlength);

    var triggerheight = Math.round(boxheight/itemlength+1) * 5;
    console.log('triggerheight: ' + triggerheight);
    $('#blog-main-carousel .carousel-inner').outerHeight(itemlength);
});