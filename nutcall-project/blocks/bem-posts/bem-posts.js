ready(function(){
    
    $('.bem-posts__input').val('');
    if (jQuery(window).width() <= '375') {
        $('.bem-record__bem-posts__create .bem-posts__input').attr("placeholder", "Комментарий");
    } 

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
    if (jQuery(window).width() <= '768') {
        $('.bem-posts__checkbox-label span').text('Анонимно');
    }    
})
