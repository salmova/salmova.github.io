/*
    Блок PageBlock - настройки страницы
    resize: invite-page - при изменении ширины экрана происходит подмена длинных названий короткими и наоборот
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function PageBlock($label) {

        this.$label = $label;
        this.$labelInvite = $label.find('.bem-page_invite-page');
        this.$labelInviteCount = this.$labelInvite.find('.bem-page__invite-count');
        this.$labelInviteCaption = this.$labelInvite.find('.bem-page__invite-text');
        this.$labelInviteWarning = this.$labelInvite.find('.bem-warning');
        this.init();

    }

    /**
     * Init.
     */
    PageBlock.prototype.init = function () {

        var self = this;
        
        const textFull = 'Инвайтов<br>доступно:';
        const textShort = parseInt(self.$labelInviteCount.text()) < 5 ? 'Инвайта' : 'Инвайтов';
        const warning = 'Вы несёте ответственность за того, кого приглашаете. Администрация оставляет за собой право заблокировать вас, в случае, если будут замечены нарушения правил пользования сервисом Nutcall со стороны приглашённых вами персон.';
        const warningShort = 'Вы несёте ответственность за того, кого приглашаете.';
        
        const changeText = (inviteText, warnText) => {
            if (self.$labelInviteCount && self.$labelInviteCaption) {
                self.$labelInviteCaption.html(inviteText);
            }
            if (self.$labelInviteWarning) {
                self.$labelInviteWarning.text(warnText);
            }
            return true;
        }

        if (jQuery(window).width() <= '768') {
            changeText(textShort, warningShort);
        }
            
        $(window).resize(function() {
            if (jQuery(window).width() <= '768') {
                changeText(textShort, warningShort);
            } else {
                changeText(textFull, warning);
            }
        });
        
/*
        const showWindow = (el, type = 'modal', e) => {
            var modalId = el.getAttribute('data-modal');
            window[`${type}${modalId}`].show(el, e); 
        };  
        
        $('.bem-modal__btn').each(function () {
            $(this).on('click', function(e) {
                showWindow(this, 'modal', e);
            });
        }); 
        $('.bem-popover__btn').each(function () {
            $(this).on('click', function(e) {
                showWindow(this, 'popover', e);
            });
        }); 
*/
    };

    window.PageBlock = PageBlock;

    $(function () {
        var $labels = $('.bem-page');
        
        $labels.each(function () {
            $(this).data('PageLabel', new PageBlock($(this)));
        });
    });

}) (jQuery);