/*
    Block: PostCreateBlock
    Init:
        Очищение поля ввода PostCreateBlock.$labelInput
        Замена placeholder и label checkbox на короткие названия на маленьких экранах
    Events:
        PostCreateBlock.$labelInput.focus - вычисление высоты элемента
        PostCreateBlock.$labelInput.input - изменение высоты textarea при вводе текста 
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function PostCreateBlock($label) {

        this.$label = $label;
        this.$labelInput = $label.find('.bem-posts__input');
        this.$labelCheckbox = $label.find('.bem-posts__checkbox-label span');
                
        this.init();

    }

    /**
     * Init.
     */
    PostCreateBlock.prototype.init = function () {

        var self = this;
        
        self.$labelInput.val('');
        
        
        if (jQuery(window).width() <= '375') {
            $('.bem-record__bem-posts__create .bem-posts__input').attr("placeholder", "Комментарий");
        } 
        
        if (jQuery(window).width() <= '768') {
            self.$labelCheckbox.text('Анонимно');
        }   
        
        self.$labelInput.one('focus', function(){
            baseH = this.scrollHeight;
        });
        
        self.$labelInput.on('input.textarea', function(){
            if (baseH < this.scrollHeight) {
                $(this).height(0).height(this.scrollHeight);
            }
            else {
                $(this).height(0).height(baseH - 5);
            }
        });

    };

    window.PostCreateBlock = PostCreateBlock;

    $(function () {
        var $labels = $('.bem-posts__create');
        
        $labels.each(function () {
            $(this).data('PostCreateLabel', new PostCreateBlock($(this)));
        });
    });

}) (jQuery);

