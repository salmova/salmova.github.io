ready( function() { 
    
  var headerBlock = jQuery('.bem-header');
  var headerBlockFix = jQuery('.bem-header__fixed');
  var newUserButton = jQuery('.bem-header__new-user');
  var scrollTop = jQuery(window).scrollTop();
  var searchTop = parseInt(jQuery('.bem-search').outerHeight());
  var dir = 'down';
  var vh = jQuery(window).height() * 0.34 + 40;
  
  if (jQuery(window).width() <= '768') {
      newUserButton.addClass('bem-circle-block bem-circle-block_size_mid');
  }
  jQuery(window).scroll( function() {
      dir = (jQuery(window).scrollTop() - scrollTop) >= 0 ? 'down' : 'up';
      
      if ((dir == 'down') && ((jQuery(window).scrollTop() >= vh && jQuery(window).width() > '768') || (jQuery(window).scrollTop() >= '200' && jQuery(window).width() <= '768'))) {
          headerBlock.addClass('bem-header__fixed');
          $('.bem-header__bem-search').append($('.bem-content__bem-search .bem-search'));
          jQuery('.bem-search__history').removeClass('bem-search_show');
          if (jQuery(window).width() > '768') {
              newUserButton.addClass('bem-button');
          }
      } 
      if ((dir == 'up') && ((jQuery(window).scrollTop() < vh && jQuery(window).width() > '768') || (jQuery(window).scrollTop() < '200' && jQuery(window).width() <= '768'))){
          headerBlock.removeClass('bem-header__fixed');
          $('.bem-content__bem-search').append($('.bem-header__bem-search .bem-search'));
          jQuery('.bem-search__history').removeClass('bem-search_show');
          newUserButton.removeClass('bem-button');
      }
      
      scrollTop = jQuery(window).scrollTop();
      
  } );
} );