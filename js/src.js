$(document).ready(function() {
    $('.lacal-cont-boot').click(function(){
        $('.local-cont').toggleClass('active-local');
    });
    $('.close-local-host').click(function(){
        $('.local-cont').removeClass('active-local');
    });

    $('.nav-foot-menu li a').click(function(){
        $('.tab-pane').addClass('fadeOut');

    });
    $('.more').click(function(){

        $('.table-panel-content-more-item').addClass('more-right');
        $('.left-butt').addClass('left-butt-active');


        $('.table-panel-content-item .buttons a').addClass('inactive');
        $('.table-panel-content-item .buttons .back').removeClass('inactive');
    });
    $('.back').click(function(){
        $('.left-butt').removeClass('left-butt-active');

        $('.table-panel-content-more-item').removeClass('more-right');
        $('.table-panel-content-item .buttons a').removeClass('inactive');
        $('.table-panel-content-item .buttons .back').addClass('inactive');
    });
    $('.guide-tab').click(function(){
        $('.tab-2-cont').css('margin-left',0);
        $('.tab-2-cont > .col-lg-4').removeClass('active-slayd');
        $('.tab-2-cont > .col-lg-4').eq( 0).addClass('active-slayd');
    });
    $('.genre-tab').click(function(){
        $('.tab-2-cont').css('margin-left',-1170);
        $('.tab-2-cont > .col-lg-4').removeClass('active-slayd');
        $('.tab-2-cont > .col-lg-4').eq( 1).addClass('active-slayd');
    });
    $('.fraq-tab').click(function(){
        $('.tab-2-cont').css('margin-left',-2340);
        $('.tab-2-cont > .col-lg-4').removeClass('active-slayd');
        $('.tab-2-cont > .col-lg-4').eq( 2).addClass('active-slayd');
    });

    $('.tab-link').click(function(){
        $('.tab-content .tab-pane').removeClass('fadeIn');
        $('.tab-content .tab-pane').css('opacity',0);
        $('#tab_below_7').css('opacity',1);
        setTimeout(function(){$('.tab-content .active').addClass('fadeIn')},true);
    });
    $('#heart').attr('class','fa fa-heart heart_like')

})
