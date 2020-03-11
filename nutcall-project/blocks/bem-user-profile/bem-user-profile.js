(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function UserProfileBlock($label) {

        this.$label = $label;
        this.init();

    }

    /**
     * Init.
     */
    UserProfileBlock.prototype.init = function () {

        var self = this;

        self.$label.on('click', function () {
            if (jQuery(window).width() <= '768') {
                jQuery('.bem-disabled').toggleClass('bem-disabled_show');
                jQuery('body').css('overflow', 'hidden');
                $('.bem-user-profile__list').addClass('bem-user-profile_show');
                $('.bem-user-profile__list').animate({'right':'0px'},300);
                jQuery('body').css('position', 'fixed');
            } else {
                if ($('.bem-user-profile__list').css('right') == '0px') {
                    $('.bem-user-profile__list').animate({'right':'-240px'},300);
                }
                $('.bem-user-profile__list').toggleClass('bem-user-profile_show');
            }
            return false;
        });

    };

    window.UserProfileBlock = UserProfileBlock;

    $(function () {
        var $labels = $('.bem-user-profile');
        
        $labels.each(function () {
            $(this).data('UserProfileLabel', new UserProfileBlock($(this)));
        });
    });

}) (jQuery);