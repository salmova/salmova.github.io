/*
    Блок InfoBlock - оформление информационного блока
    resize: при изменении ширины экрана информационный блок перемещается в блок меню
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function InfoBlock($label) {

        this.$label = $label;
        this.$labelHidden = $label.find('.bem-info-block_hidden');
        this.$labelContent = $label.find('.bem-info-block__content');
        this.init();

    }

    /**
     * Init.
     */
    InfoBlock.prototype.init = function () {

        var self = this;
        var dir = 'left';
        if (jQuery(window).width() <= '768') {
            self.$labelHidden.append($('.bem-info-block__content > .bem-info-block__container'));
            dir = 'right';
        }
        
        $(window).resize(function() {
            if (jQuery(window).width() <= '768' && self.$labelHidden && dir == 'left') {
                self.$labelHidden.append($(self.$labelContent).children());
                dir = 'right';
            } 
            if (jQuery(window).width() > '768' && self.$labelHidden && dir == 'right') {
                self.$labelContent.append($(self.$labelHidden).children());
                dir = 'left';
            }             
        });
    };

    window.InfoBlock = InfoBlock;

    $(function () {
        var $labels = $('.bem-info-block');
        
        $labels.each(function () {
            $(this).data('InfoLabel', new InfoBlock($(this)));
        });
    });

}) (jQuery);