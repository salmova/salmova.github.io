const ready = require('../../js/utils/documentReady.js');

ready( function() { 
    
  var headerBlock = jQuery('.bem-header');
  var headerBlockFix = jQuery('.bem-header__fixed');
  var newUserButton = jQuery('.bem-header__new-user');
  var scrollTop = jQuery(window).scrollTop();
  var searchTop = parseInt(jQuery('.bem-search').outerHeight());
  var dir = 'down';
  
  if (jQuery(window).width() <= '768') {
      newUserButton.addClass('bem-circle-block bem-circle-block_size_mid');
  }
  jQuery(window).scroll( function() {
      dir = (jQuery(window).scrollTop() - scrollTop) >= 0 ? 'down' : 'up';
      
      jQuery('.bem-search__history').removeClass('bem-search_show');
      
      if ((dir == 'down') && ((jQuery(window).scrollTop() >= '350' && jQuery(window).width() > '768') || (jQuery(window).scrollTop() >= '250' && jQuery(window).width() <= '768'))) {
          headerBlock.addClass('bem-header__fixed');
          headerBlock.css('margin-top', '0');
          if (jQuery(window).width() > '768') {
              newUserButton.addClass('bem-button');
          }
      } 
      if ((dir == 'up') && ((jQuery(window).scrollTop() < '350' && jQuery(window).width() > '768') || (jQuery(window).scrollTop() < '250' && jQuery(window).width() <= '768'))){
          //headerBlock.removeClass('bem-header__fixed').delay(800);
          headerBlock.css('margin-top', '-56px');
          //newUserButton.removeClass('bem-button');
      }
      if (jQuery(window).scrollTop() <= 100) {
          headerBlock.removeClass('bem-header__fixed');
          newUserButton.removeClass('bem-button');
      }
      
    //    jQuery('.bem-user-profile__list').removeClass('bem-user-profile_show');   
      scrollTop = jQuery(window).scrollTop();
      
  } );
} );