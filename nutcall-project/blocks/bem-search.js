const ready = require('../../js/utils/documentReady.js');

ready(function(){
    
    var cleanBtn = $('.bem-search__history-caption .bem-link');
    var historyList = $('.bem-search__history-list');
    var searchInput = $('.bem-search__input');
    var searchBlock = $('.bem-search');
    
    searchInput.val('');
    
    cleanBtn.on('click', function() {
        historyList.text('');
        return false;   
    });
    
    searchBlock.on('input.input', '.bem-search__input', function(){
        var formItem = $(this).parents('.bem-search');
        $(formItem).children('.bem-search__history').addClass('bem-search_show');
    });
    
    searchBlock.on ('click', '.bem-search__bem-button', function() {
        var formItem = $(this).parents('.bem-search');
        $(formItem).children('.bem-search__history').removeClass('bem-search_show');
        return false;
    })
    
    


})
