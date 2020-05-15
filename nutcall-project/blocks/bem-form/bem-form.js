/*
    Block: FormBlock
    Init:
        Очищение поля ввода FormBlock.$labelTextarea
    Events:
        FormBlock.$labelTextarea.focus - вычисление высоты элемента
        FormBlock.$labelTextarea.input - изменение высоты textarea при вводе текста 
*/
(function ($) {

    /**
     * FormBlock
     * @param {object} $label
     * @constructor
     */
    function FormBlock($label) {

        this.$label = $label;
        this.$labelTextarea = $label.find('textarea.bem-form__input');
        this.$labelInput = $label.find('.bem-form__input');
                
        this.init();

    }

    /**
     * Init.
     */
    FormBlock.prototype.init = function () {

        var self = this;
        
        self.$labelTextarea.val(''); 
        
        self.$labelTextarea.one('focus', function(){
            baseH = this.scrollHeight;
        });
        
        self.$labelTextarea.on('input.textarea', function(){
            var padTop = parseInt($(this).css('padding-top'));
            if (baseH < this.scrollHeight) {
                $(this).height(0).height(this.scrollHeight - 2*padTop);
            }
            else {
                $(this).height(0).height(baseH - 2*padTop);
            }
        });
        self.$labelInput.on('focus', function() {
            $(this).removeClass('bem-form__error');
        })

    };

    window.FormBlock = FormBlock;

    $(function () {
        var $labels = $('.bem-form');
        
        $labels.each(function () {
            $(this).data('FormLabel', new FormBlock($(this)));
        });
    });

}) (jQuery);

