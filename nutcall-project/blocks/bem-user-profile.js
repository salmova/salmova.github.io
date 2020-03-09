const ready = require('../../js/utils/documentReady.js');

ready( function() { 
    
  var userProfile = jQuery('.bem-user-profile');
  var userProfileList = jQuery('.bem-user-profile__list');
  
  userProfile.click( function() {
      
      if (jQuery(window).width() <= '768') {
          jQuery('.bem-header').toggleClass('bem-disabled');
          jQuery('body').css('overflow', 'hidden');
          userProfileList.addClass('bem-user-profile_show');
          userProfileList.animate({'right':'0px'},1000);
      } else {
          if (jQuery('.bem-user-profile__list').css('right') == '0px') {
              jQuery('.bem-user-profile__list').animate({'right':'-240px'},1000);
          }
          userProfileList.toggleClass('bem-user-profile_show');
      }
      return false;
      
  } );
} );