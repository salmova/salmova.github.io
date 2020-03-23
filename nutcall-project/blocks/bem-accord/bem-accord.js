/*
    Блок AccordBlock - меню с раскрывающимися пунктами
    click: При клике раскрывается/закрывается активный пункт меню
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function AccordBlock($label) {

        this.$label = $label;
        this.$labelActive = $label.find('.bem-accord_active');
        this.$labelHidden = $label.find('.bem-accord_active > .bem-accord__detail');
        this.init();

    }

    /**
     * Init.
     */
    AccordBlock.prototype.init = function () {

        var self = this;

        self.$labelActive.on('click', function () {
            if (jQuery(window).width() <= '768') {
                self.$labelHidden.toggleClass('bem-accord_hidden');
                self.$labelActive.toggleClass('bem-accord_active');
            }
        });
        
    };

    window.AccordBlock = AccordBlock;

    $(function () {
        var $labels = $('.bem-accord');
        
        $labels.each(function () {
            $(this).data('AccordLabel', new AccordBlock($(this)));
        });
    });

}) (jQuery);