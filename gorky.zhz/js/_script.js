let hiddenBlockWidth = 640;
let change = 0;
let scroll_top = jQuery(window).scrollTop();
let timer = null;

//Мобильная версия - скрывает/показывает плашку с бургер-меню при скроллинге (при скролле вниз плашка уезжает, при скролле вверх - появляется)
const scrollWin = () => {
    jQuery(window).scroll(function(){
        if (jQuery('.site-header').height() <= '48') {
            if(scroll_top < jQuery(this).scrollTop() && jQuery(this).scrollTop() >= 0){
                jQuery('#masthead').addClass('hidemenu');
            } else { 
                jQuery('#masthead').removeClass('hidemenu');
            }
            scroll_top = jQuery(this).scrollTop() > 0 ? jQuery(this).scrollTop() : 0;
            
/*
            clearTimeout(timer);
  
            timer = setTimeout(function() {
                jQuery('#masthead').removeClass('hidemenu');
            }, 100);
*/
        }
    });
};

//Установка базовых параметров для работы страницы при загрузке
const basicParam = (main_page = true) => {
    
    //для десктопа на элементы вешается анимация
    if ($(window).width() > '767' && main_page){
        jQuery('.librarySection').hover(function() { moveLeft(0); return false;});
        jQuery('#menu-item-lib > a').hover(function() { moveLeft(0); return false;});
        jQuery('.librarySection').mouseleave(function() { moveLeft(1); return false;});
        jQuery('#menu-item-lib > a').mouseleave(function() { moveLeft(1); return false;});
        jQuery('.librarySection').click(function() {changeScreen("library"); return false;});
        jQuery('#menu-item-lib > a').click(function() {changeScreen("library"); return false;});    

        //подключение плагина masonry
        var scriptService = document.createElement('script');
        scriptService.src = "js/masonry.pkgd.min.js";
        document.body.appendChild(scriptService);

    }
    
    //когда меню скрытое (узкое) - анимированное раскрытие меню при наведении
    if ($(window).width() <= '896' && $(window).width() > '767'){
        jQuery('.site-header').hover(function() {
            if (main_page && jQuery('.magazineSection').position().left !== 0) {
                change = 128;
                jQuery('.magazineSection').css('left', `calc(-${hiddenBlockWidth}px + calc(4em + ${change}px))`);
            }
        });
        jQuery('.site-header').mouseleave(function() {
            if (main_page && jQuery('.magazineSection').position().left !== 0) {
                change = 0;
                jQuery('.magazineSection').css('left', `calc(-${hiddenBlockWidth}px + 4em)`);
            }
        });
    }
    
    //для мобильной версии
    if (jQuery(window).width() <= '767'){
        jQuery(".menu-item-has-children li.menu-item > p").parents('li').css({"width": "100%", 'padding-bottom': '16px'});
        if (main_page) {
            jQuery('#primary > section').toggleClass('mobile-bg');
        }
        jQuery('.articles-list').removeClass('masonry');
        jQuery('.articles-list-item').removeClass('masonry-brick');
        jQuery('.articles-list').removeAttr('data-masonry');

        scrollWin();
        
    }
    
};

$(document).ready(function(){
    //для мобильной версии - запуск slick-карусели
    if (jQuery(window).width() <= '767'){
        jQuery(".magazine-list").slick({
            arrows: false,
            infinite: false,
            mobileFirst: true,
            swipeToSlide: true,
            variableWidth: true,
            waitForAnimate: false,
            focusOnSelect: true,
            slidesToScroll: 1,
            centerPadding: `${jQuery(window).width() - 240}px 0 0`,
            centerMode: true
            });
            
        $('.magazine-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let x = jQuery(window).width() - 240;
            slick.options.centerPadding = `${x}px 0 0`;
            if (nextSlide == slick.slideCount-1) {
                slick.options.centerMode = true;
                x = (x > 0) ? `0px 0 ${x-16}px` : '0px';
                slick.options.centerPadding = x;
            } 
            else {
                x = (x > 0) ? `${x}px 0 0` : '0px';
                slick.options.centerPadding = x;
            }
        });
    }
    //подмена размера шрифта для длинных заголовков
    jQuery('.articles-list-item  h2').each(function(){
        if ($(this).html().length > 24) {
            $(this).addClass('smallTitle');
        }
    });

   
});

//раскрытие меню в мобильной версии
const menuShow = () => {
    jQuery('#menu-mainmenu').css({'display': 'block', 'position': 'inherit'});
    jQuery('.site-header').addClass('show-menu');
    jQuery('.logo-block').addClass('hide-block'); 
    jQuery('.menu-toggle').addClass('hide-block');
    jQuery('.close-block').addClass('flex-block');  
    jQuery('.site-header > .search').addClass('hide-block');
    jQuery('#content').addClass('hide-block');
    jQuery('.site-header').focus();   
};

//схлопывание меню в мобильной версии
const menuClose = () => {
    jQuery('#menu-mainmenu').css({'display': 'none'});
    jQuery('.site-header').removeClass('show-menu');
    jQuery('.logo-block').removeClass('hide-block'); 
    jQuery('.menu-toggle').removeClass('hide-block');
    jQuery('.close-block').removeClass('flex-block');  
    jQuery('.site-header > .search').removeClass('hide-block');
    jQuery('#content').removeClass('hide-block');
};

//установка Hover состояния для смежных эелементов - при наведении на боковые плашки и соответствующие пункты меню 
const setHoverState = (el) => {
    jQuery(el).css({'background': 'linear-gradient(0deg, rgba(251, 235, 224, 0.2), rgba(251, 235, 224, 0.2)), #FEFDFC'});
    jQuery(`${el} > .vert-title > p`).css('color', '#EB5160');
    jQuery(`${el} > .vert-title > .arrow`).css('opacity', '1');
    jQuery('.magazineSection').css('box-shadow', '8px 0px 16px #FBEBE0');
};
//сброс Hover состояния
const resetHoverState = (el) => {
    jQuery(el).css({'background': '#FBEBE0'});
    jQuery(`${el} > .vert-title > p`).css('color', '#171615');
    jQuery(`${el} > .vert-title > .arrow`).css('opacity', '0');
    jQuery('.magazineSection').css('box-shadow', 'none');
};

//Смена экрана между "Журналы"/"Библиотека"
const changeScreen = (marker) => {
    if (marker === 'library') {
        change = ((jQuery(window).width() > '896') || ((jQuery(window).width() <= '896') && (jQuery('.site-header').width() != '224'))) ? 0 : 128;
        jQuery('.magazineSection').css({'background' : '#FBEBE0', 'left' : `calc(-${hiddenBlockWidth}px + calc(4em + ${change}px))`, 'cursor' : 'pointer', 'width' : `${hiddenBlockWidth}px`});
        jQuery('.librarySection').css({'background' : '#FEFDFC', 'cursor' : 'default'});
        jQuery('#libLink').css('opacity', '0');
        jQuery('#magLink').css({'opacity': '1', 'width': '4em'});
           
        jQuery('.librarySection').unbind(); 
        jQuery('#menu-item-lib > a').unbind();   
        
        jQuery('.magazineSection').hover(function() { moveRight(0); return false;});
        jQuery('#menu-item-mag > a').hover(function() { moveRight(0); return false;});
        jQuery('.magazineSection').mouseleave(function() { moveRight(1); return false;});
        jQuery('#menu-item-mag > a').mouseleave(function() { moveRight(1); return false;});
        jQuery('.magazineSection').click(function() {changeScreen("magazine"); return false;});
        jQuery('#menu-item-mag > a').click(function() { changeScreen("magazine"); return false;});
        
        jQuery('.librarySection > .articles-list').css({'pointer-events': 'auto'});
        jQuery('.magazineSection > .magazine-list').css('pointer-events', 'none');
        resetHoverState('.magazineSection');        
    } else {
   
        jQuery('#magLink').css({'opacity': '0', 'width': '0'});
        jQuery('.magazineSection').css({'background' : '#FEFDFC', 'left' : '0', 'width' : 'calc(100% - 4em)', 'cursor': 'default', 'box-shadow': 'none'});
        jQuery('.librarySection').css({'background': '#FBEBE0', 'cursor': 'pointer'});
        
        jQuery('#libLink').css('opacity', '1');
        
        jQuery('.magazineSection').unbind();
        jQuery('#menu-item-mag > a').unbind();
                
        jQuery('.librarySection').hover(function() { moveLeft(0); return false;});
        jQuery('#menu-item-lib > a').hover(function() { moveLeft(0); return false;});
        jQuery('.librarySection').mouseleave(function() { moveLeft(1); return false;});
        jQuery('#menu-item-lib > a').mouseleave(function() { moveLeft(1); return false;});
        jQuery('.librarySection').click(function() {changeScreen("library"); return false;});
        jQuery('#menu-item-lib > a').click(function() {changeScreen("library"); return false;});
        
        jQuery('.librarySection > .articles-list').css({'pointer-events': 'none'});
        jQuery('.magazineSection > .magazine-list').css('pointer-events', 'auto');
        resetHoverState('.librarySection');
    }
    
    jQuery('#menu-item-mag').toggleClass('current-menu-item');
    jQuery('#menu-item-lib').toggleClass('current-menu-item'); 
};

//Анимация блока "Журналы" влево
const moveLeft = (dir) => {
    if (dir === 0) {
        jQuery('.magazineSection').css({'left': '-8em'});
        setHoverState('.librarySection');
    } else {        
        jQuery('.magazineSection').css({'left': '0'});
        resetHoverState('.librarySection');
    }
};

//Анимация блока "Журналы" вправо
const moveRight = (dir) => {
    const e = window.event;
    let X = e.pageX; // положения по оси X
    let Y = e.pageY; // положения по оси Y
     if (dir === 0) {
        jQuery('.magazineSection').css('left', `calc(-${hiddenBlockWidth}px + calc(4em + 128px + ${change}px))`); 
     } else {
        jQuery('.magazineSection').css('left', `calc(-${hiddenBlockWidth}px + calc(4em + ${change}px))`);  
     }
    return (dir === 0) ? setHoverState('.magazineSection') : resetHoverState('.magazineSection');
};

//подсвечивание обложки журнала и названия (hover-состояние) - Г-образный вид
const hoverMagLink = el => jQuery(el).parents('.magazine-list-item').toggleClass('hoverEl');

const nextArticle = () => {
  jQuery('.article').css('opacity', '0.25'); 
   $('body,html').animate({
            scrollTop: 0
        }, 200);

  jQuery('.articleNext').addClass('move-up-block');  
  jQuery('.articleNext > .article-body').html('<p>Мир для чилийского поэта Гонсало Рохаса обрушился 27 февраля 2010 года. Сильнейшее землетрясение в Чили, цунами, шахтеры, заваленные в шахте, повторные мощные толчки. Он не смог оправиться от этого удара, но шел и шел до конца еще целый год, совсем немного не дойдя до своего столетия.</p><p><span><o:p>&nbsp;</o:p></span></p><p>***</p><h5 class="small">Об одном аккорде поэта Уго Самбельи</h5><p>И вместо арфы ты мне приносишь моего Бога,</p><p>и грязный пенный поцелуй реки,</p><p><span><o:p>&nbsp;</o:p></span></p><p>и ту землю, которую в детстве</p><p>я ел, как звереныш, прячась меж мокрых листьев.</p>');
  clearTimeout(timer);
  timer = setTimeout(function() {
                jQuery('.articleNext').css('transition', 'background 0.3s ease-in-out');
                jQuery('.article > .article-title').html('Бернард Шлинк «Три эссе»');
                jQuery('.article > .article-body').html('<p>Мир для чилийского поэта Гонсало Рохаса обрушился 27 февраля 2010 года. Сильнейшее землетрясение в Чили, цунами, шахтеры, заваленные в шахте, повторные мощные толчки. Он не смог оправиться от этого удара, но шел и шел до конца еще целый год, совсем немного не дойдя до своего столетия.</p><p><span><o:p>&nbsp;</o:p></span></p><p>***</p><h5 class="small">Об одном аккорде поэта Уго Самбельи</h5><p>И вместо арфы ты мне приносишь моего Бога,</p><p>и грязный пенный поцелуй реки,</p><p><span><o:p>&nbsp;</o:p></span></p><p>и ту землю, которую в детстве</p><p>я ел, как звереныш, прячась меж мокрых листьев.</p>');
                jQuery('.article').attr('style', '');
                jQuery('.articleNext').removeClass('move-up-block');
                jQuery('.articleNext > .article-title').html('Бернард Шлинк «Три эссе»');
                jQuery('.articleNext > .article-body').html('<span>Эссе немецкого юриста и писателя</span>');
            }, 500);
    timer = setTimeout(function() {
        jQuery('.articleNext').attr('style', '');
        }, 600);
};
