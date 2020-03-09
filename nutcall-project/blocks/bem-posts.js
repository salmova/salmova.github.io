const ready = require('../../js/utils/documentReady.js');

ready(function(){
    
    $('.bem-posts__input').val('');

    $(document)
    .one('focus.textarea', '.bem-posts__input', function(){
        baseH = this.scrollHeight;
    })
    .on('input.textarea', '.bem-posts__input', function(){
        if(baseH < this.scrollHeight) {
            $(this).height(0).height(this.scrollHeight);
        }
        else {
            $(this).height(0).height(baseH - 5);
        }
    });

})
