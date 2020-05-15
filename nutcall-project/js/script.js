//const ready = require('./utils/documentReady.js');

ready(function(){
    jQuery(document).on('click', function () {
        if (jQuery(window).width() > '768') {
            jQuery('.bem-user-profile__list').attr('style', '').removeClass('bem-user-profile_show');  
        }  
        jQuery('.bem-select__gap').removeClass('on');
        jQuery('.bem-select__list').slideUp(300);
        jQuery('.bem-search__history').removeClass('bem-search_show');
        
   });   
});

var modal6 = new ModalWindow('modal6')
modal6.setTitle('Стандартное модальное окно с preloader').setFooter('footer-modal-6').setAutoClose().setBusy()
modal6.setCloseHandler(
  function() {
    alert('Сообщение');
  }
);


var popover8 = new Popover('popover8', $('#p-8'))
popover8.setTitle('Стандартное окно c preloader').setBusy();
popover8.setCloseHandler(
  function() {
    alert('Сообщение');
  }
);

const busyExample = (winUp, el, type='modal') => { 
    var elem = type=='modal' ? new ModalWindow(winUp) : new Popover(winUp, $('#p-8'));
    elem.show();
    if (elem.newObj) {
        var  t = setTimeout(function(){ elem.setContent(el)}, 3000)
    }
}
