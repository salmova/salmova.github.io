/*
    Блок HeaderBlock - блок-заголовок 
    scroll: при скролле страницы блок фиксируется, добавляется тень (есть дополнительная проверка на главную страницу)
    resize: при изменении ширины экрана меняется внешний вид кнопки new-user
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function HeaderBlock($label) {

        this.$label = $label;
        this.$labelMainPageBlock = $label.find('.bem-header.bem-page_main-page');
        this.$labelBlockFix = $label.find('.bem-header__fixed');
        this.$labelNewUserButton = $label.find('.bem-header__new-user');
        
        this.init();

    }

    /**
     * Init.
     */
    HeaderBlock.prototype.init = function () {

        var self = this;
        
        var scrollTop = jQuery(window).scrollTop();
        var searchTop = parseInt(jQuery('.bem-page_main-page .bem-search').outerHeight());
        var vh = jQuery(window).height() * 0.34 + 40;
        
        if (jQuery(window).width() <= '768') {
            self.$labelNewUserButton.addClass('bem-circle-block bem-circle-block_size_mid');
            self.$labelNewUserButton.removeClass('bem-button');
        }
        
        jQuery(window).resize( function() {
            if (jQuery(window).width() <= '768') {
                self.$labelNewUserButton.addClass('bem-circle-block bem-circle-block_size_mid');
                self.$labelNewUserButton.removeClass('bem-button');
            } else {
                self.$labelNewUserButton.removeClass('bem-circle-block bem-circle-block_size_mid');
                self.$labelNewUserButton.addClass('bem-button');
            }   
        });
        jQuery(window).scroll( function() {
            var dir = (jQuery(window).scrollTop() - scrollTop) >= 0 ? 'down' : 'up';
            if (dir == 'down') {
                if ( self.$labelMainPageBlock.length != 0 && ((jQuery(window).scrollTop() >= vh && jQuery(window).width() > '768') || (jQuery(window).scrollTop() >= '200' && jQuery(window).width() <= '768'))) {
                      self.$labelMainPageBlock.addClass('bem-header__fixed');
                      self.$labelMainPageBlock.addClass('bem-header_shadow');
                      $('.bem-page_main-page .bem-header__bem-search').append($('.bem-page_main-page .bem-content__bem-search .bem-search'));
                      jQuery('.bem-search__history').removeClass('bem-search_show');
                      if (jQuery(window).width() > '768') {
                           self.$labelNewUserButton.addClass('bem-button bem-button_theme_blue bem-button_compact');
                      }
                } else {
                    self.$labelBlockFix.addClass('bem-header_shadow');
                }
            } 
            if (dir == 'up') {
                if ( self.$labelMainPageBlock.length !=0 && ((jQuery(window).scrollTop() < vh && jQuery(window).width() > '768') || (jQuery(window).scrollTop() < '200' && jQuery(window).width() <= '768'))){
                      self.$labelMainPageBlock.removeClass('bem-header__fixed');
                      self.$labelMainPageBlock.removeClass('bem-header_shadow');
                      $('.bem-page_main-page .bem-content__bem-search').append($('.bem-page_main-page .bem-header__bem-search .bem-search'));
                      jQuery('.bem-search__history').removeClass('bem-search_show');
                      self.$labelNewUserButton.removeClass('bem-button bem-button_theme_blue bem-button_compact');
                }      
            }
            
            if (jQuery(window).scrollTop() <= 5) {
                self.$labelBlockFix.removeClass('bem-header_shadow');
            }
              
            scrollTop = jQuery(window).scrollTop();
              
        } );   
    };

    window.HeaderBlock = HeaderBlock;

    $(function () {
        var $labels = $('.bem-page');
        
        $labels.each(function () {
            $(this).data('HeaderLabel', new HeaderBlock($(this)));
        });
    });

}) (jQuery);