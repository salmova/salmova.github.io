ready(function(){
    jQuery(document).on('click', function () {
        if (jQuery(window).width() > '768') {
            jQuery('.bem-user-profile__list').attr('style', '').removeClass('bem-user-profile_show');  
        }  
        jQuery('.bem-select__gap').removeClass('on');
        jQuery('.bem-select__list').slideUp(300);
        jQuery('.bem-search__history').removeClass('bem-search_show');
        
   });
   
});
