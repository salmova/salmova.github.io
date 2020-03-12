/*
    Block: SearchBlock
    Init:
        Очищение поля ввода SearchBlock.$labelInput
    Events:
        SearchBlock.$labelClean.click - очистка истории поиска
        SearchBlock.$labelInput.input - отображение истории поиска при изменении поля ввода
        SearchBlock.$labelBtn.click - скрытие истории поиска при нажатии на кнопку "Искать" 
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function SearchBlock($label) {

        this.$label = $label;
        this.$labelInput = $label.find('.bem-search__input');
        this.$labelBtn = $label.find('.bem-search__bem-button');
        this.$labelHistory = $label.find('.bem-search__history');
        this.$labelClean = $label.find('.bem-search__history-caption .bem-link');
        
        this.init();

    }

    /**
     * Init.
     */
    SearchBlock.prototype.init = function () {

        var self = this;
        
        self.$labelInput.val('');
        
        self.$labelClean.on('click', function() {
            self.$labelHistory.find('.bem-search__history-list').text('');
            return false;   
        });
        
        self.$labelInput.on('input.input', function(){
            self.$labelHistory.addClass('bem-search_show');
        });
        
        self.$labelBtn.on ('click', function() {
            self.$labelHistory.removeClass('bem-search_show');
            return false;
        })

    };

    window.SearchBlock = SearchBlock;

    $(function () {
        var $labels = $('.bem-search');
        
        $labels.each(function () {
            $(this).data('SearchLabel', new SearchBlock($(this)));
        });
    });

}) (jQuery);
