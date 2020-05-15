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
        $(document).on('input.input', '.bem-search .bem-search__input', function () {
            $(this).parents('.bem-search').find('.bem-search__history').addClass('bem-search_show');
        });
        
        self.$labelBtn.on ('click', function() {
            self.$labelHistory.removeClass('bem-search_show');
            return false;
        })
        $(document).on('click', '.bem-search__history .bem-search__bem-icon-block', function() {
            let imgSrc = $(this).find('img').attr('src');
            let text = $(this).find('span:first').text();
            const parentEl = $(this).parents('.bem-search');
            parentEl.find('.bem-search__input').val(text);
            if (imgSrc && parentEl.hasClass('bem-auth__work-item')) {
                const imgBlock = $('<img>', {
                        'class': `bem-search__icon`,
                        'src': imgSrc
                    });
                if (parentEl.find('.bem-seach__icon').length) parentEl.find('.bem-search__icon').remove();
                parentEl.append(imgBlock);
            }
            parentEl.find('.bem-search__history').removeClass('bem-search_show');
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
