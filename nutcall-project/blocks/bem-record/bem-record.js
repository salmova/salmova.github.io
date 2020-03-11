/*
const ready = require('../../js/utils/documentReady.js');

ready(function(){
    var recordLike = jQuery('.bem-record__like');
        
    recordLike.on('click', function() {
        likePost(this);
        return true;
    });
    
    const likePost = (el) => {
        var count =  parseInt($(el).children('span').html()) + 1;
        $(el).children('span').text(count >= 0 ? count: 0);
        return true;
    };

})
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function RecordLikeBlock($label) {

        this.$label = $label;
        this.init();

    }
    const likePost = (el) => {
        var count =  parseInt($(el).children('span').html()) + 1;
        $(el).children('span').text(count >= 0 ? count: 0);
        return true;
    };

    /**
     * Init.
     */
    RecordLikeBlock.prototype.init = function () {

        var self = this;

        self.$label.on('click', function () {
            $(this).addClass('bem-record_active');
            likePost(this);
            return true;
        });

    };

    window.RecordLikeBlock = RecordLikeBlock;

    $(function () {
        var $labels = $('.bem-record__like');
        
        $labels.each(function () {
            $(this).data('RecordLikeBlockLabel', new RecordLikeBlock($(this)));
        });
    });

}) (jQuery);