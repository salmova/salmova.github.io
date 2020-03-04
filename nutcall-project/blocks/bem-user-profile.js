const ready = require('../../js/utils/documentReady.js');

ready( function() { 
    
  var userProfile = jQuery('.bem-user-profile');
  var userProfileList = jQuery('.bem-user-profile__list');
  
  userProfile.click( function() {
      
      if (jQuery(window).width() <= '768') {
          userProfileList.css({right: 0});
          jQuery('.bem-header').toggleClass('bem-disabled');
          jQuery('body').css('overflow', 'hidden');
      } else {
          userProfileList.toggleClass('bem-user-profile_show');
      }
      return false;
      
  } );
} );