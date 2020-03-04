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

