/*
const ready = require('../../js/utils/documentReady.js');

ready( function() { 
    
  var disabledBlock = jQuery('.bem-disabled');
  var userProfileList = jQuery('.bem-user-profile__list');
  
  disabledBlock.on('click', function() {
        userProfileList.animate({'right':'-240px'},1000);
        setTimeout(function (){
            userProfileList.removeClass('bem-user-profile_show');
            disabledBlock.removeClass('bem-disabled_show');
        },1000); 
        jQuery('body').attr('style', '');
  });
} );
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function DisabledBlock($label) {

        this.$label = $label;
        this.init();

    }

    /**
     * Init.
     */
    DisabledBlock.prototype.init = function () {

        var self = this;

        self.$label.on('click', function () {
            $('.bem-user-profile__list').animate({'right':'-240px'},1000);
            setTimeout(function (){
               jQuery('.bem-user-profile__list').removeClass('bem-user-profile_show');
                self.$label.removeClass('bem-disabled_show');
            },1000); 
            jQuery('body').attr('style', '');
        });

    };

    window.DisabledBlock = DisabledBlock;

    $(function () {
        var $labels = $('.bem-disabled');
        
        $labels.each(function () {
            $(this).data('DisabledLabel', new DisabledBlock($(this)));
        });
    });

}) (jQuery);