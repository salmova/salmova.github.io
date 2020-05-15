/*
    Block: ButtonBlock
    Events:
        FormBlock.$labelCopyText.click - копирование в буфер обмена
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function ButtonBlock($label) {

        this.$label = $label;
        this.$labelCopyText = $label.hasClass('bem-button_copy') ? $label : null;
        this.$labelInput = $('#copy-text');
                
        this.init();

    }

    /**
     * Init.
     */
    ButtonBlock.prototype.init = function () {

        var self = this;
        if  (self.$label.hasClass('bem-button_copy')) {
            self.$label.on('click', function(){
                const inputValue = self.$labelInput.val();
                if (inputValue) {
                    navigator.clipboard.writeText(inputValue)
                      .then(() => {
                      })
                      .catch(err => {
                        console.log('Something went wrong', err);
                      })
                }
                return false;
            });
        }
    };

    window.ButtonBlock = ButtonBlock;

    $(function () {
        var $labels = $('.bem-button');
        
        $labels.each(function () {
            $(this).data('ButtonLabel', new ButtonBlock($(this)));
        });
    });

}) (jQuery);

