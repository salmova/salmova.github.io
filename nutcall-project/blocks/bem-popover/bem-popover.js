/*
    Block: Popover
    Constructor: Popover(id, parentEl)
    Properties:
        id - popover id
        newObj - new object status
        title - popover title
        footer - popover footer content
        idFooter - popover footer parent id
        content - popover content
        idContent - popover content parent id
        width - popover width
        autoClose - close by click on the screen status
        arrow - css-class for popover without arrow 
        busy - use preloader status
        pos - popover position
        $parent - element calling popover
        closeHandler - function when closing the popover 
    Methods:
        setId(id)
        getId
        setTitle(title)
        setWidth(width)
        setContent(idContentParent)
        setFooter(idFooterParent)
        setAutoClose
        setPosition(pos)
        setBusy  
        setNoArrow
        setCloseHandler
        positionPopover
        hide/close
        remove
        checkClick(e)
        show
*/

(function ($) {

    /**
     * Popover
     * @typedef {Object} Popover
     * @constructor
     * @param {string} id
     * @param $parent
     * @returns {Object}
     * @returns id - popover id
     * @returns newObj - new object status
     * @returns title - popover title
     * @returns footer - popover footer content
     * @returns idFooter - popover footer parent id
     * @returns content - popover content
     * @returns idContent - popover content parent id
     * @returns width - popover width
     * @returns autoClose - close by click on the screen status
     * @returns arrow - css-class for popover without arrow 
     * @returns busy - use preloader status
     * @returns pos - popover position
     * @returns $parent - element calling popover
     * @returns closeHandler - function when closing the popover
     */
    function Popover(id = '', $parent = null) {
        
        // check for existence
        if (nutcallPopovers[id]) {
            if ($(`#popover-${id}`).length) nutcallPopovers[id].newObj = false;
            return nutcallPopovers[id];
        }
        
        this.id = `popover-${id}`;
        this.newObj = true;
        this.title = '';
        this.idFooter = '';
        this.footer = '';
        this.width = 460;
        this.autoClose = true;
        this.arrow = '';
        this.busy = false;
        this.idContent = '';
        this.content = '';
        this.pos = 'bem-popover_position_left';
        this.$parent = $parent ? $parent : $('.bem-page');
        this.closeHandler = null;
        nutcallPopovers[id] = this;

    }

    Object.defineProperty(Popover.prototype, "position", {
      get: function () {
          return this.pos;
      },
      set: function (value) {
          this.pos = `bem-popover_position_${value}`;
      }
    });
    
    /**
     * Set popover id.
     * @memberof Popover
     * @param {string} id
     * @returns {Popover}
     */
    Popover.prototype.setId = function (id) {
        this.id = id;
        return this;
    };
    
    /**
     * Get popover id.
     * @memberof Popover
     * @returns {string}
     */
    Popover.prototype.getId = function () {
        return this.id;
    };
    
    /**
     * Set popover title.
     * @memberof Popover
     * @param {string} title
     * @returns {Popover}
     */
    Popover.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    
    /**
     * Set popover position.
     * @memberof Popover
     * @param {string} pos Position: left/right/top/bottom.
     * @returns {Popover}
     */
    Popover.prototype.setPosition = function (pos) {
        this.pos = `bem-popover_position_${pos}`;
        return this;
    };
    
    /**
     * Set popover width - max width 90vw.
     * @memberof Popover
     * @param {number} width
     * @returns {Popover}
     */
    Popover.prototype.setWidth = function (width) {
        this.width = width;
        return this;
    };
        
    /**
     * Set popover content.
     * @memberof Popover
     * @param {string} idOrHtml DOM element ID or HTML code.
     * @returns {Popover}
     */
    Popover.prototype.setContent = function (idOrHtml) {
        if (idOrHtml !== '' && $(`#${idOrHtml}`).length) {
            this.content = $(`#${idOrHtml}`).children();
            this.idContent = idOrHtml;
        } else {
            this.content = idOrHtml;
            this.idContent = '';
        }
        if ($(`#${this.id}`)) {
            $(`#${this.id} .bem-popover__content`).html('');
            $(`#${this.id} .bem-popover__content`).append(this.content);
            this.positionPopover();
        }
        return this;
    };

    /**
     * Set footer content.
     * @memberof Popover
     * @param {string} idOrHtml DOM element ID or HTML code.
     * @returns {Popover}
     */
    Popover.prototype.setFooter = function (idOrHtml) {
        if (idOrHtml !== '' && $(`#${idOrHtml}`).length) {
            this.footer = $(`#${idOrHtml}`).children();
            this.idFooter = idOrHtml;
        } else {
            this.footer = idOrHtml;
            this.idFooter = ''; 
        }
        if ($(`#${this.id}`)) {
            $(`#${this.id} .bem-popover__footer`).html('');
            $(`#${this.id} .bem-popover__footer`).append(this.footer);
            this.positionPopover();
        }
        return this;
    }

    /**
     * Set autoClose property - closing a popover when clicking on any area of ​​the screen.
     * @memberof Popover
     * @param {boolean} autoClose Default - true.
     * @returns {Popover}
     */
    Popover.prototype.setAutoClose = function (autoClose) {
        this.autoClose = (typeof autoClose == 'undefined') ? true : autoClose;
        return this;
    }
    
    /**
     * Popover without arrow.
     * @memberof Popover
     * @returns {Popover}
     */
    Popover.prototype.setNoArrow = function () {
        this.arrow = 'bem-popover_arrow_none';
        return this;
    }   
    
    /**
     * Set popover's busy state.
     * @memberof Popover
     * @returns {Popover}
     */
    Popover.prototype.setBusy = function () {
        this.busy = true;
        return this;
    }
    
    /**
     * Set the function that is called when the popover is closed.
     * @memberof Popover
     * @returns {Popover}
     */
    Popover.prototype.setCloseHandler = function (func) {
        if (this.validateCloseHandler(func)) {
            this.closeHandler = func;
        }
        return this;
    }

    /**
     * Validate popover close handler function.
     * @memberof Popover
     * @param func
     * @returns {boolean}
     */
    Popover.prototype.validateCloseHandler = function (func) {
        return typeof func === 'function';
    }

    /**
     * Automatic popover position based on specified parameters and screen sizes.
     * @memberof Popover
     */
    Popover.prototype.positionPopover = function () {
        if ($(`#${this.id}`).hasClass('hidden')) return;
        const el = this.$parent;
        
        var left = $(el).position().left;
        var top = $(el).position().top;
        var heightEl = $(`#${this.id}`).innerHeight();
        var widthEl = $(`#${this.id}`).innerWidth();
        var leftPos = 0, topPos = 0;   
        var direction = this.pos; 
        $(`#${this.id}`).removeClass().addClass(`bem-popover ${this.arrow}`);
        
        // if the popover does not fit on the left, then display it at the bottom of the element
        if (left - widthEl - 20 < 24 && this.pos == 'bem-popover_position_left') {
            $(`#${this.id}`).removeClass(direction);
            direction = 'bem-popover_position_bottom';
        }
        // if the popover does not fit on the right, then display it at the bottom of the element
        if ((left + widthEl + $(el).innerWidth() + 20 > document.body.clientWidth) && (this.pos == 'bem-popover_position_right')) {
            $(`#${this.id}`).removeClass(direction);
            direction = 'bem-popover_position_bottom';
        }
        // if the popover does not fit on the bottom, then display it at the top of the element
        if ((top + $(el).innerHeight() + 10 + heightEl > document.body.clientHeight) && (this.pos == 'bem-popover_position_bottom' || direction == 'bem-popover_position_bottom')) {
            $(`#${this.id}`).removeClass(direction);
            direction = 'bem-popover_position_top';
        }
        // if the popover does not fit on the top, then display it at the bottom of the element
        if ((top - 10 - heightEl < 66) && (this.pos == 'bem-popover_position_top')) {
            $(`#${this.id}`).removeClass(direction);
            direction = 'bem-popover_position_bottom';
        }
        
        $(`#${this.id}`).addClass(direction);
        
        // popover display by calculated coordinates
        if (direction == 'bem-popover_position_bottom') {
            leftPos = left + $(el).innerWidth()/2 - widthEl/2 < 24 ? 24 : left + $(el).innerWidth()/2 - widthEl/2;
            $(`#${this.id}`).css('left', leftPos);
            $(`#${this.id}`).css('top', top + $(el).innerHeight() + 10); 
        } else if (direction == 'bem-popover_position_top') {
            leftPos = left + $(el).innerWidth()/2 - widthEl/2 < 24 ? 24 : left + $(el).innerWidth()/2 - widthEl/2;
            $(`#${this.id}`).css('left', leftPos);
            $(`#${this.id}`).css('top', top - heightEl - 10); 
        } else if (direction == 'bem-popover_position_right') {
            $(`#${this.id}`).css('left', left + $(el).innerWidth() + 20);
            $(`#${this.id}`).css('top', top + $(el).innerHeight()/2 - heightEl/2);
        } else {
            $(`#${this.id}`).css('left', left - widthEl - 20);
            $(`#${this.id}`).css('top', top + $(el).innerHeight()/2 - heightEl/2);
        }

    }

    
    /**
     * Hide a popover.
     * @memberof Popover
     */
    Popover.prototype.hide = function () {
        if (typeof this.closeHandler == 'function') {
            this.closeHandler();
        }
        $(`#${this.id}`).addClass('hidden');
        $(document).off('mouseup', this.checkClick);
    }
    
    /**
     * Hide a popover.
     * @alias Popover.hide()
     */
    Popover.prototype.close = function () {
        this.hide();   
    }
    
    /**
     * Remove a popover.
     * @memberof Popover
     */
    Popover.prototype.remove = function () {
        if (typeof this.closeHandler == 'function') {
            this.closeHandler();
        }
        if (this.idContent !== '') {
            $(`#${this.idContent}`).append($(`#${this.id} .bem-popover__content`).children());
        }
        if (this.idFooter !== '') {
            $(`#${this.idFooter}`).append($(`#${this.id} .bem-popover__footer`).children());
        }
        $(`#${this.id}`).detach();
        $(window).off('resize', this.positionPopover);
        $(document).off('mouseup', this.checkClick);
        nutcallPopovers.splice(nutcallPopovers.indexOf(this.id), 1);
    }
    
    /**
     * Check click on the screen: click inside the element - no change, click outside the element - close the popover.
     * @memberof Popover
     * @param e
     */
    Popover.prototype.checkClick = function (e) {  
        if (!$(`#${this.id}`).hasClass('hidden')) {
            var el = `#${this.id} .bem-popover__container`;
            if ($(e.target).closest(el).length) return;
            this.hide();
        }
    }  
         
    /**
     * Display a popover with the specified properties.
     * @memberof Popover
     * @todo Describe in detail the parameter e.
     */
    Popover.prototype.show = function (e = null) {
        var self = this;
        const el = self.$parent;
        
        const removeEl = self.remove.bind(self);
        const hideEl = self.hide.bind(self);
        const checkClickEl = self.checkClick.bind(self);
        
        
        if ($(`.bem-popover`).length) {
            $(`.bem-popover`).addClass('hidden');
        }
        
        
        if (!self.newObj) {
            $(`#${self.id}`).removeClass('hidden');

        } else {
        
            // popover frame forming
            const elContainer =  $('<div>', {
                        'class': `bem-popover ${self.arrow}`,
                        'id': self.id
                    }).append($('<div>', {
                        'class': `bem-popover__container`,
                        'style': `width: ${self.width}px`
                    }).append($('<div>', {
                        'class': self.title !== '' ? 'bem-popover__title' : 'bem-popover__title hidden',
                        text : self.title
                    })).append($('<div>', {
                        'class': 'bem-popover__content',
                        text : ''
                    })).append($('<div>', {
                        'class': self.footer !== '' ? 'bem-popover__footer' : 'bem-popover__footer hidden',
                        text : ''
                    })).append($('<div>', {
                        'class': 'bem-popover__close'
                    })));
            
            // create a popover after a given element
            $(el).after(elContainer);
            
                        
            // $('.bem-popover__content').append((this.content !=='' && $(`#${this.content}`).children()) ? $(`#${this.content}`).children() : '');
            $(`#${self.id} .bem-popover__content`).append(this.content);
            $(`#${self.id} .bem-popover__footer`).append(this.footer);
            
            // use preloader 
            if (self.busy && self.content == '') {
                $(`#${self.id} .bem-popover__content`).append('<div class="bem-page__column bem-page__column_center bem-page__row_center">Загрузка...</div>');
            }
            
            // popover positioning
            this.positionPopover();
            
            // change the position of the popover when the screen size changes
            const positionEl = self.positionPopover.bind(self);
            $(window).on('resize', positionEl);
            
            // close the popover when you click on the close icon
            $(`#${self.id} .bem-popover__close`).on('click', hideEl); 

        }
                    
        // close the popover when you click on any area of ​​the screen
        if (self.autoClose && $(`#${self.id}`)) {
            if (e) {
                e.stopPropagation();
            }
            
            $(document).on('mouseup', checkClickEl);
        }
    
    };

    window.Popover = Popover;

}) (jQuery);

/**
 * Create and show a popover.
 * @function
 * @param $parent Related element (Object).
 * @param {string} contentIdOrHtml DOM element ID or content HTML.
 * @param {string} id popover unique ID.
 * @return {Popover}
 */
const showPopover = ($parent, contentIdOrHtml, id) => {
    var popover = new Popover(id, $parent);
    if (popover.newObj) {
        popover.setContent(contentIdOrHtml)
    }     
    popover.show();
    return popover;
};

var nutcallPopovers = [];