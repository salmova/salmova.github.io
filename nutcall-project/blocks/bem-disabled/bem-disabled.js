/*
    Блок DisabledBlock - появляется на экранах меньше 768px при открытом меню профиля пользователя
    click: При клике на блок открытое меню плавно "уезжает" вправо
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
            $('.bem-user-profile__list').animate({'right':'-240px'},300);
            setTimeout(function (){
               jQuery('.bem-user-profile__list').removeClass('bem-user-profile_show');
                self.$label.removeClass('bem-disabled_show');
            },300); 
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