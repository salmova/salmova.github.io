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
