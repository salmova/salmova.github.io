/*
const ready = require('../../js/utils/documentReady.js');

ready(function(){
    
  var personsList = jQuery('.bem-content__persons__bem-link');
  
  personsList.each(function() {
    var res = $(this).text().split(' ');
    $(this).html(res.reduce(function(acc, subS) {
        var tmp = subS.length > 9 ? subS.substr(0, 6)+'...' : subS;
        return `${acc}${tmp}<br>`;    
    }, ''));   
  });
  
});
*/

(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function PersonListBlock($label) {

        this.$label = $label;
        this.init();

    }

    /**
     * Init.
     */
    PersonListBlock.prototype.init = function () {

        var self = this;

        self.$label.each(function() {
            var res = $(this).text().split(' ');
            $(this).html(res.reduce(function(acc, subS) {
                var tmp = subS.length > 9 ? subS.substr(0, 6)+'...' : subS;
                return `${acc}${tmp}<br>`;    
            }, ''));   
          });


    };

    window.PersonListBlock = PersonListBlock;

    $(function () {
        var $labels = $('.bem-content__persons__bem-link');
        
        $labels.each(function () {
            $(this).data('PersonListLabel', new PersonListBlock($(this)));
        });
    });

}) (jQuery);