/**
 *  Block: ModalWindow
 */
(function ($) {

    /**
     * ModalWindow
     * @typedef {Object} ModalWindow
     * @constructor
     * @param {string} id
     * @returns {Object}
     * @returns id - modal window id
     * @returns newObj - new object status
     * @returns title - modal window title
     * @returns footer - modal window footer content
     * @returns idFooter - modal window footer parent id
     * @returns content - modal window content
     * @returns idContent - modal window content parent id
     * @returns width - modal window width
     * @returns autoClose - close by click on the screen status
     * @returns heightFull - css-class for height of full screen
     * @returns busy - use preloader status
     * @returns closeHandler - function when closing the modal window     
     */
    function ModalWindow(id) {

        // check for existence
        if (nutcallModalWindows[id]) {
            if ($(`#modal-window-${id}`).length) nutcallModalWindows[id].newObj = false;
            return nutcallModalWindows[id];
        }

        this.id = `modal-window-${id}`;
        this.newObj = true;
        this.title = '';
        this.idFooter = ''
        this.footer = '';
        this.width = 460;
        this.autoClose = true;
        this.heightFull = '';
        this.busy = false;
        this.idContent = '';
        this.content = '';
        this.closeHandler = null;
        nutcallModalWindows[id] = this;

    }

    /**
     * Set modal window id.
     * @memberof ModalWindow
     * @param {string} id
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setId = function (id) {
        this.id = id;
        return this;
    };

    /**
     * Get modal window id.
     * @memberof ModalWindow
     * @returns {string}
     */
    ModalWindow.prototype.getId = function () {
        return this.id;
    };

    /**
     * Set modal window title.
     * @memberof ModalWindow
     * @param {string} title
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };

    /**
     * Set modal width - max width 90vw.
     * @memberof ModalWindow
     * @param {number} width
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setWidth = function (width) {
        this.width = width;
        return this;
    };

    /**
     * Set modal window content.
     * @memberof ModalWindow
     * @param {string} idOrHtml DOM element ID or HTML code.
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setContent = function (idOrHtml) {
        this.content = idOrHtml;
        if (idOrHtml !== '' && $(`#${idOrHtml}`).length) {
            this.content = $(`#${idOrHtml}`).children();
            this.idContent = idOrHtml;
        } else {
            this.content = idOrHtml;
            this.idContent = '';
        }
        if ($(`#${this.id}`) && !$(`#${this.id}`).hasClass('hidden')) {
            $(`#${this.id} .bem-modal__content`).html('');
            $(`#${this.id} .bem-modal__content`).append(this.content);
        }
        return this;
    };

    /**
     * Set autoClose property - closing a modal window when clicking on any area of ​​the screen.
     * @memberof ModalWindow
     * @param {boolean} autoClose Default - true.
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setAutoClose = function (autoClose) {
        this.autoClose = (typeof autoClose == 'undefined') ? true : autoClose;
        return this;
    }

    /**
     * Display a modal window to the full height of the screen (max height 90vh).
     * @memberof ModalWindow
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setFullHeight = function () {
        this.heightFull = 'bem-modal_height_full';
        return this;
    }

    /**
     * Set footer content.
     * @memberof ModalWindow
     * @param {string} idOrHtml DOM element ID or HTML code.
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setFooter = function (idOrHtml) {
        if (idOrHtml !== '' && $(`#${idOrHtml}`).length) {
            this.footer = $(`#${idOrHtml}`).children();
            this.idFooter = idOrHtml;
        } else {
            this.footer = idOrHtml;
            this.idFooter = '';
        }
        if ($(`#${this.id}`) && !$(`#${this.id}`).hasClass('hidden')) {
            $(`#${this.id} .bem-modal__footer`).html('');
            $(`#${this.id} .bem-modal__footer`).append(this.footer);
            $(`#${this.id} .bem-modal__footer`).removeClass('hidden');
        }
        return this;
    };

    /**
     * Set busy state.
     * @memberof ModalWindow
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setBusy = function () {
        this.busy = true;
        return this;
    };

    /**
     * Set the function that is called when the modal window is closed.
     * @memberof ModalWindow
     * @param {function} func
     * @returns {ModalWindow}
     */
    ModalWindow.prototype.setCloseHandler = function (func) {
        if (this.validateCloseHandler(func)) {
            this.closeHandler = func;
        }
        return this;
    }

    /**
     * Validate modal window close handler function.
     * @memberof ModalWindow
     * @param func
     * @returns {boolean}
     */
    ModalWindow.prototype.validateCloseHandler = function (func) {
        return typeof func === 'function';
    }

    /**
     * Hide (close) a modal window.
     * @memberof ModalWindow
     */
    ModalWindow.prototype.hide = function () {
        if (this.validateCloseHandler(this.closeHandler)) {
            this.closeHandler();
        }
        $(`#${this.id}`).addClass('hidden');
        $('body').removeClass('overflow-hidden');
        $(document).off('mouseup', this.checkClick);
    }
    /**
     * Hide (close) a modal window.
     * @alias ModalWindow.hide()
     */
    ModalWindow.prototype.close = function () {
       this.hide();
    }

    /**
     * Remove a modal window.
     * @memberof ModalWindow
     */
    ModalWindow.prototype.remove = function () {
        if (this.validateCloseHandler(this.closeHandler)) {
            this.closeHandler();
        }
        if (this.idContent !== '') {
            $(`#${this.idContent}`).append($(`#${this.id} .bem-modal__content`).children());
        }
        if (this.idFooter !== '') {
            $(`#${this.idFooter}`).append($(`#${this.id} .bem-modal__footer`).children());
        }
        $(`#${this.id}`).detach();
        $('body').removeClass('overflow-hidden');
        $(document).off('mouseup', this.checkClick);
        nutcallModalWindows.splice(nutcallModalWindows.indexOf(this.id), 1);
    }

    /**
     * Сheck click on the screen: click inside the element - no change, click outside the element - close the modal window.
     * @memberof ModalWindow
     * @param e
     */
    ModalWindow.prototype.checkClick = function (e) {
       if (!$(`#${this.id}`).hasClass('hidden')) {
            var el = `#${this.id} .bem-modal__container`;
            if ($(e.target).closest(el).length) return;
            this.hide();
        }
    }

    /**
     * Display a modal window with the specified properties.
     * @memberof ModalWindow
     * @todo Describe in detail the parameter e.
     */
    ModalWindow.prototype.show = function(e) {
        var self = this;
        const removeEl = self.remove.bind(self);
        const hideEl = self.hide.bind(self);
        const checkClickEl = self.checkClick.bind(self);

        if (!self.newObj) {
            $(`#${self.id}`).removeClass('hidden');
            $('body').addClass('overflow-hidden');

        } else {
            // modal window frame forming
            const elContainer =  $('<div>', {
                        'class': 'bem-modal',
                        'id': self.id
                    }).append($('<div>', {
                        'class': `bem-modal__container ${self.heightFull}`,
                        'style': `width: ${self.width}px`
                    }).append($('<div>', {
                        'class': self.title !== '' ? 'bem-modal__title' : 'bem-modal__title hidden',
                        text : self.title
                    })).append($('<div>', {
                        'class': 'bem-modal__content',
                        text : ''
                    })).append($('<div>', {
                        'class': self.footer !== '' ? 'bem-modal__footer' : 'bem-modal__footer hidden',
                        text : ''
                    })).append($('<div>', {
                        'class': 'bem-modal__close'
                    })));

            // create a modal window after a given element
            $('body').append(elContainer);

            // non scrollable window
            $('body').addClass('overflow-hidden');

            $(`#${self.id} .bem-modal__content`).append(self.content);
            $(`#${self.id} .bem-modal__footer`).append(self.footer);

            // use preloader
            if (self.busy && self.content == '') {
                $(`#${self.id} .bem-modal__content`).append('<div class="bem-page__column bem-page__column_center bem-page__row_center">Загрузка...</div>');
            }

            // close the popover when you click on the close icon
            $(`#${self.id} .bem-modal__close`).on('click', hideEl);
        }

        if (self.autoClose && $(`#${self.id}`)) {
            if (e) {
                e.stopPropagation();
            }
            $(document).on('mouseup', checkClickEl);
        }

    };

    window.ModalWindow = ModalWindow;

}) (jQuery);

/**
 * Create and show a modal window.
 * @function
 * @param {string} idOrHtml Content element DOM ID or content HTML.
 * @param {string} id modal window unique ID.
 * @param {string} title Modal window title.
 * @param {number} width Modal window width.
 * @param {boolean} full_height Modal window to the full height of the screen.
 * @returns {ModalWindow}
 */
const showModalWindow = (idOrHtml = '', id, title = '', width = 460, full_height = false) => {
    var modal = new ModalWindow(id);
    if (modal.newObj) {
        modal.setTitle(title).setWidth(width).setContent(idOrHtml);
        if (full_height) {
            modal.setFullHeight();
        }
    }
    modal.show();
    return modal;
};

var nutcallModalWindows = [];
