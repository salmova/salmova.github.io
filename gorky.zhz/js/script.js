jQuery( document ).ready( function() {
	front.basic.init();
	front.article.init();
	front.magazine.init();
	if (jQuery(window).width() <= '767') {
        front.mobile.init();
    } else {
        front.screenMainChange.init();    
    }
} );

front = {
    basic : {
        elements : {},
        elementsInit(){
			this.elements.hiddenBlockWidth = 640;
			this.elements.change = 0;
			this.elements.artListItemTitle = jQuery('.articles-list-item  h2');
			this.elements.magLink = jQuery('a.mag-link');
			this.elements.siteHeader = jQuery('.site-header');
			this.elements.siteContent = jQuery('.site-content');
			this.elements.siteSubMenu = jQuery('.sub-menu');
			this.elements.magShareBlock = jQuery('.magazine-single-info .share-block');
			this.elements.closeBtnSubsc = jQuery('.subscribe .close-btn');
			this.elements.subscLink = jQuery('#subscribe-link');
        },
        init() {
			this.elementsInit();
			this.elements.artListItemTitle.each(function(){
                if (jQuery(this).html().length > 24) {
                     jQuery(this).addClass('smallTitle');
                }
            });
            this.elements.magLink.hover(function() {jQuery(this).parents('.magazine-list-item').toggleClass('hoverEl')});  
            if (jQuery(window).width() <= '896' && jQuery(window).width() >'767'){
                this.elements.siteSubMenu.addClass('hide-block');    
                this.elements.siteHeader.click( function() {
                    front.basic.elements.siteHeader.addClass('tablet'); 
                    setTimeout(function() {
                        front.basic.elements.siteSubMenu.removeClass('hide-block');          
                      }, 300);
                });
                this.elements.siteHeader.mouseleave(function() {
                      front.basic.elements.siteHeader.removeClass('tablet'); 
                      setTimeout(function() {
                        front.basic.elements.siteSubMenu.addClass('hide-block');          
                      }, 300);
                });
                this.elements.siteHeader.hover(function() {
                      front.basic.elements.siteHeader.removeClass('tablet'); 
                      setTimeout(function() {
                        front.basic.elements.siteSubMenu.removeClass('hide-block');          
                      }, 300);
                });
                this.elements.siteContent.click( function() {
                       front.basic.elements.siteHeader.removeClass('tablet'); 
                       setTimeout(function() {
                        front.basic.elements.siteSubMenu.addClass('hide-block');          
                      }, 300);
                });
            }
            if (jQuery(window).width() >'767') {
                if (jQuery('.magazine-single-info .magazine-title').length > 0) {
                    posY = jQuery('.magazine-single-info .magazine-title').height() + 255 + 72;
                    this.elements.magShareBlock.css('top', `${posY}px`);
                }
                if (jQuery('.issue-body').length > 0) {
                    posY = jQuery('.issue-body').offset().top > 152 ? jQuery('.issue-body').offset().top : 152;
                    jQuery('.issue-magazine + .share-block').css('top', `${posY}px`);
                }
            }
            this.elements.subscLink.click( function() {
                jQuery('.subscribe').addClass('flex-block');
                jQuery('.footer-content').addClass('hide-block');
                return false;  
            });
            this.elements.closeBtnSubsc.click( function() {
                jQuery('.subscribe').removeClass('flex-block');
                jQuery('.footer-content').removeClass('hide-block');
            });

		}
    },
    screenMainChange : {
        elements : {},
		elementsInit(){
			this.elements.librarySection = jQuery('.librarySection');
			this.elements.libraryLinkArea = jQuery('#menu-item-lib > a');
			this.elements.magazineLinkArea = jQuery('#menu-item-mag > a');
			this.elements.magazineSection = jQuery('.magazineSection');
			this.elements.articleList = jQuery('.librarySection > .articles-list');
			this.elements.siteHeader = jQuery('.site-header');
			this.elements.siteContent = jQuery('.site-content');
			this.elements.magazineList = jQuery('.magazineSection > .magazine-list');
		},
		//Анимация блока "Журналы" влево
		moveLeft(dir) {
            if (dir === 0) {
                this.elements.magazineSection.css({'left': '-8em'});
                this.setHoverState('.librarySection');
            } else {        
                this.elements.magazineSection.css({'left': '0'});
                this.resetHoverState('.librarySection');
            }    			
		},
		//Анимация блока "Журналы" вправо
        moveRight(dir) {
            const e = window.event;
            let X = e.pageX; // положения по оси X
            let Y = e.pageY; // положения по оси Y
             if (dir === 0) {
                this.elements.magazineSection.css('left', `calc(-${front.basic.elements.hiddenBlockWidth}px + calc(4em + 128px + ${front.basic.elements.change}px))`); 
             } else {
                this.elements.magazineSection.css('left', `calc(-${front.basic.elements.hiddenBlockWidth}px + calc(4em + ${front.basic.elements.change}px))`);  
             }
            return (dir === 0) ? this.setHoverState('.magazineSection') : this.resetHoverState('.magazineSection');
        },
		//установка Hover состояния для смежных эелементов - при наведении на боковые плашки и соответствующие пункты меню 
        setHoverState(el) {
            jQuery(el).css({'background': 'linear-gradient(0deg, rgba(251, 235, 224, 0.2), rgba(251, 235, 224, 0.2)), #FEFDFC'});
            jQuery(`${el} > .vert-title > p`).css('color', '#EB5160');
            jQuery(`${el} > .vert-title > .arrow`).css('opacity', '1');
            this.elements.magazineSection.css('box-shadow', '8px 0px 16px #FBEBE0');
        },
        //сброс Hover состояния
        resetHoverState(el) {
            jQuery(el).css({'background': '#FBEBE0'});
            jQuery(`${el} > .vert-title > p`).css('color', '#171615');
            jQuery(`${el} > .vert-title > .arrow`).css('opacity', '0');
            this.elements.magazineSection.css('box-shadow', 'none');
        },
        moveLibBlocksFunc() {
            this.elements.librarySection.hover(function() { front.screenMainChange.moveLeft(0); return false;});
            this.elements.libraryLinkArea.hover(function() { front.screenMainChange.moveLeft(0); return false;});
            this.elements.librarySection.mouseleave(function() { front.screenMainChange.moveLeft(1); return false;});
            this.elements.libraryLinkArea.mouseleave(function() { front.screenMainChange.moveLeft(1); return false;});
            this.elements.librarySection.click(function() { front.screenMainChange.changeScreen("library"); return false;});
            this.elements.libraryLinkArea.click(function() { front.screenMainChange.changeScreen("library"); return false;});
        },
        moveMagBlocksFunc() {
            this.elements.magazineSection.hover(function() { front.screenMainChange.moveRight(0); return false;});
            this.elements.magazineLinkArea.hover(function() { front.screenMainChange.moveRight(0); return false;});
            this.elements.magazineSection.mouseleave(function() { front.screenMainChange.moveRight(1); return false;});
            this.elements.magazineLinkArea.mouseleave(function() { front.screenMainChange.moveRight(1); return false;});
            this.elements.magazineSection.click(function() { front.screenMainChange.changeScreen("magazine"); return false;});
            this.elements.magazineLinkArea.click(function() { front.screenMainChange.changeScreen("magazine"); return false;});
        },
        //Смена экрана между "Журналы"/"Библиотека"
		changeScreen(marker) {
            if (marker === 'library') {
                change = ((jQuery(window).width() > '896') || ((jQuery(window).width() <= '896') && (jQuery('.site-header').width() != '224'))) ? 0 : 128;
                this.elements.magazineSection.css({'background' : '#FBEBE0', 'left' : `calc(-${front.basic.elements.hiddenBlockWidth}px + calc(4em + ${front.basic.elements.change}px))`, 'cursor' : 'pointer', 'width' : `${front.basic.elements.hiddenBlockWidth}px`});
                this.elements.librarySection.css({'background' : '#FEFDFC', 'cursor' : 'default'});
                jQuery('#libLink').css('opacity', '0');
                jQuery('#magLink').css({'opacity': '1', 'width': '4em'});
                   
                this.elements.librarySection.unbind(); 
                this.elements.libraryLinkArea.unbind();   
                
                this.moveMagBlocksFunc();
                
                this.elements.articleList.css({'pointer-events': 'auto'});
                this.elements.magazineList.css('pointer-events', 'none');
                this.resetHoverState('.magazineSection');        
            } else {
           
                jQuery('#magLink').css({'opacity': '0', 'width': '0'});
                this.elements.magazineSection.css({'background' : '#FEFDFC', 'left' : '0', 'width' : 'calc(100% - 4em)', 'cursor': 'default', 'box-shadow': 'none'});
                this.elements.librarySection.css({'background': '#FBEBE0', 'cursor': 'pointer'});
                
                jQuery('#libLink').css('opacity', '1');
                
                this.elements.magazineSection.unbind();
                this.elements.magazineLinkArea.unbind();
                        
                this.moveLibBlocksFunc();
                
                this.elements.articleList.css({'pointer-events': 'none'});
                this.elements.magazineList.css('pointer-events', 'auto');
                this.resetHoverState('.librarySection');
            }
            
            jQuery('#menu-item-mag').toggleClass('current-menu-item');
            jQuery('#menu-item-lib').toggleClass('current-menu-item'); 
        },
        init(){
			this.elementsInit();
			if (this.elements.librarySection.length !== 0) {
                this.moveLibBlocksFunc();
                var scriptService = document.createElement('script');
                scriptService.src = "js/masonry.pkgd.min.js";
                document.body.appendChild(scriptService);
                
                if (jQuery(window).width() <= '896'){
                    this.elements.siteHeader.hover(function() {
                        if (front.screenMainChange.elements.magazineSection.position().left !== 0) {
                            front.basic.elements.change = 128;
                            front.screenMainChange.elements.magazineSection.css('left', `calc(-${front.basic.elements.hiddenBlockWidth}px + calc(4em + ${front.basic.elements.change}px))`);
                        }
                    });
                    this.elements.siteHeader.mouseleave(function() {
                        if (front.screenMainChange.elements.magazineSection.position().left !== 0) {
                            front.basic.elements.change = 0;
                            front.screenMainChange.elements.magazineSection.css('left', `calc(-${front.basic.elements.hiddenBlockWidth}px + 4em)`);
                        }
                    });
                }
            }               
        }
    },
	mobile : {
		elements : {},
		elementsInit(){
			this.elements.scroll_top = jQuery(window).scrollTop();
			this.elements.magazineList = jQuery(".magazine-list");
			this.elements.menuToggle = jQuery("button.menu-toggle");
			this.elements.mainMenu = jQuery('#menu-mainmenu');
			this.elements.siteHeader = jQuery('.site-header');
			this.elements.logo = jQuery('.logo-block');
			this.elements.closeBtn = jQuery('.close-btn');
			this.elements.searchBtn = jQuery('.site-header > .search');
			this.elements.content = jQuery('#content');
			this.elements.articleList = jQuery('.articles-list');
			this.elements.articleListItem = jQuery('.articles-list-item');
			this.elements.librarySection = jQuery('.librarySection');
			this.elements.magazineSection = jQuery('.magazineSection');
			this.elements.scrollBlock = jQuery('.mobile-menu-toggle-block');
			this.elements.issueSectionSlider = jQuery('.mobile-slider');
			this.elements.issueSectionSliderTrack = jQuery('.mobile-slider .slick-track');
			this.elements.issueSectionBottomSlider = jQuery('.issue-mobile-bottom-slide');
			this.elements.magIssuesArchive = jQuery('.magazine-issues-archive');
			this.elements.shareIssueBtn = jQuery('.share-issue-btn');
			this.elements.shareBlock = jQuery('.share-block');
			this.elements.closeShareBlock = jQuery('.close-share-block');
			this.elements.abcList = jQuery('.abc-list');
			this.elements.abcListBtn = jQuery('.abc-list-mobile-block .default-btn');
			this.elements.abcListLink = jQuery('.abc-list a');
		},
		init(){
            this.elementsInit();
            if (this.elements.magazineSection.length !== 0) {
                this.elements.magazineList.slick({
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
                
                this.elements.magazineList.on('beforeChange', function(event, slick, currentSlide, nextSlide){
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
                
                this.elements.librarySection.toggleClass('mobile-bg');
                this.elements.magazineSection.toggleClass('mobile-bg');
                this.elements.articleList.removeClass('masonry');
                this.elements.articleListItem.removeClass('masonry-brick');
                this.elements.articleList.removeAttr('data-masonry');
            }
            
            this.elements.menuToggle.click( function(){
                front.mobile.elements.mainMenu.css({'display': 'block', 'position': 'inherit'});
                front.mobile.elements.siteHeader.addClass('show-menu');
                front.mobile.elements.logo.addClass('hide-block'); 
                jQuery(this).addClass('hide-block');
                front.mobile.elements.closeBtn.addClass('block');
                front.mobile.elements.content.addClass('hide-block');
                front.mobile.elements.siteHeader.focus();     
            });
                
            this.elements.closeBtn.click( function(){
                front.mobile.elements.mainMenu.css({'display': 'none'});
                front.mobile.elements.siteHeader.removeClass('show-menu');
                front.mobile.elements.logo.removeClass('hide-block'); 
                front.mobile.elements.menuToggle.removeClass('hide-block');
                front.mobile.elements.closeBtn.removeClass('block');
                front.mobile.elements.content.removeClass('hide-block');
            });
            
            jQuery(".menu-item-has-children li.menu-item > p").parents('li').css({"width": "100%", 'padding-bottom': '16px'});

            jQuery(window).scroll(function(){
                if (jQuery('.showmenu').length === 0) {
                    if(front.mobile.elements.scroll_top < jQuery(this).scrollTop() && jQuery(this).scrollTop() >= 0){
                        front.mobile.elements.scrollBlock.addClass('hidemenu');
                    } else { 
                        front.mobile.elements.scrollBlock.removeClass('hidemenu');
                    }
                    front.mobile.elements.scroll_top = jQuery(this).scrollTop() > 0 ? jQuery(this).scrollTop() : 0;
                    
                }
                if (front.mobile.elements.magIssuesArchive.length > 0) {
                    if (jQuery(this).scrollTop() > (front.mobile.elements.magIssuesArchive.offset().top - 12)) {
                        front.mobile.elements.magIssuesArchive.addClass('fixed-btn');
                    } 
                    if (front.mobile.elements.magIssuesArchive.offset().top < 348) {
                        front.mobile.elements.magIssuesArchive.removeClass('fixed-btn');
                    } 
                }
                if (front.mobile.elements.abcList.length > 0) {
                    if (jQuery(this).scrollTop() > (front.mobile.elements.abcList.height() + 64)) {
                        jQuery('.abc-list-mobile-block').addClass('block');
                    } else {
                        jQuery('.abc-list-mobile-block').removeClass('block');
                    } 
                }
                
            });
            if (this.elements.issueSectionSlider.length > 0) {
                this.elements.scrollBlock.addClass('hide-block');
                this.elements.issueSectionSlider.slick({
                    arrows: false,
                    infinite: false,
                    mobileFirst: true,
                    swipeToSlide: true,
                    variableWidth: true,
                    waitForAnimate: false,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    asNavFor: '.issue-mobile-bottom-slide'
                });
                this.elements.issueSectionBottomSlider.slick({
                    arrows: false,
                    infinite: false,
                    mobileFirst: true,
                    swipeToSlide: true,
                    variableWidth: true,
                    waitForAnimate: false,
                    focusOnSelect: true,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: false,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    asNavFor: '.mobile-slider'
                });
                this.elements.issueSectionSlider.on('afterChange', function(event, slick, currentSlide){
                    jQuery('body,html').animate({scrollTop: 0}, 300);
                });
            }
            this.elements.shareIssueBtn.click( function(){
                front.mobile.elements.shareBlock.addClass('flex-block');
                jQuery('.issue-magazine').css({'height': '100vh', 'filter': 'blur(2px)', '-webkit-filter': 'blur(2px)'});
            }); 
            this.elements.closeShareBlock.click( function() {
                front.mobile.elements.shareBlock.removeClass('flex-block');
                jQuery('.issue-magazine').attr('style', '');
            });  
            this.elements.abcListBtn.click( function() {
                front.mobile.elements.abcList.addClass('mobile-black-block'); 
                jQuery('.abc-list-mobile-block').removeClass('block');
                front.mobile.elements.scrollBlock.addClass('hide-block');
            });
            this.elements.abcListLink.click( function() {
                front.mobile.elements.abcList.removeClass('mobile-black-block');
                jQuery('.abc-list-mobile-block').addClass('block');
                front.mobile.elements.scrollBlock.removeClass('hide-block');
            });
            jQuery('.abc-list .default-btn').click( function() {
                front.mobile.elements.abcList.removeClass('mobile-black-block');
                jQuery('.abc-list-mobile-block').addClass('block');
                front.mobile.elements.scrollBlock.removeClass('hide-block');
            });       
		}
    },    
    article : {
		elements : {},
		elementsInit(){
    		this.elements.articleBlock = jQuery('.article').length > 0 ? jQuery('.article') : jQuery('.article-lib');
    		this.elements.articleBody = jQuery('.article > .article-body').length > 0 ? jQuery('.article > .article-body') : jQuery('.article-lib > .article-lib-body');
			this.elements.articleTitle = jQuery('.article > .article-title').length > 0 ? jQuery('.article > .article-title') : jQuery('.article-lib > .article-lib-title');		
			this.elements.articleNext = jQuery( '.articleNext' );
			this.elements.articleNextBody = jQuery('.articleNext > .article-body');
			this.elements.articleNextTitle = jQuery('.articleNext > .article-title');
			this.elements.articleNoteLinkList = jQuery('.article .text-link').length > 0 ? jQuery('.article .text-link') : jQuery('.article-lib .text-link');	
			this.elements.articleType = jQuery('.article-lib-type');	
			this.elements.nextMark = jQuery('.next-mark');
		},
		init(){
			this.elementsInit();
			this.elements.articleNext.click( function(){
				front.article.elements.articleBlock.addClass('opacity-change'); 
               // jQuery('body,html').animate({scrollTop: 0}, 600);
                if (front.article.elements.articleType.length > 0) {
                    front.article.elements.nextMark.html('Рецензии');
                    front.article.elements.articleNextBody.html('<p class="annotation">Аннотация</p><img src="img/article-lib-pic.png" alt="" class="article-lib-pic"/><h3>Подзаголовок</h3><p>Мир для чилийского поэта Гонсало Рохаса обрушился 27 февраля 2010 года. Сильнейшее землетрясение в Чили, цунами, шахтеры, заваленные в шахте, повторные мощные толчки. Он не смог оправиться от этого удара, но шел и шел до конца еще целый год, совсем немного не дойдя до своего столетия.</p><p><span><o:p>&nbsp;</o:p></span></p><p>***</p><h5 class="small">Об одном аккорде поэта Уго Самбельи</h5><p>И вместо арфы ты мне приносишь моего Бога,</p><p>и грязный пенный поцелуй реки,</p><p><span><o:p>&nbsp;</o:p></span></p><p>и ту землю, которую в детстве</p><p>я ел, как звереныш, прячась меж мокрых листьев.</p>');    
                } else {
                    front.article.elements.articleNextBody.html('<p>Мир для чилийского поэта Гонсало Рохаса обрушился 27 февраля 2010 года. Сильнейшее землетрясение в Чили, цунами, шахтеры, заваленные в шахте, повторные мощные толчки. Он не смог оправиться от этого удара, но шел и шел до конца еще целый год, совсем немного не дойдя до своего столетия.</p><p><span><o:p>&nbsp;</o:p></span></p><p>***</p><h5 class="small">Об одном аккорде поэта Уго Самбельи</h5><p>И вместо арфы ты мне приносишь моего Бога,</p><p>и грязный пенный поцелуй реки,</p><p><span><o:p>&nbsp;</o:p></span></p><p>и ту землю, которую в детстве</p><p>я ел, как звереныш, прячась меж мокрых листьев.</p>');
                }
            //    jQuery(window).scrollTop(0);
                if (jQuery(window).width() <= '767') {
            //        setTimeout(function() {
                        jQuery(this).addClass('mobile-scroll');   
                        jQuery(this).addClass('move-up-block');      
                        jQuery(window).scrollTop(0);
              //      }, 700);
                } else {
                    jQuery(this).addClass('move-up-block');
                    jQuery('body,html').animate({scrollTop: 0}, 600);
                }
                setTimeout(function() {
                    front.article.elements.articleNext.css('transition', 'background 0.3s ease-in-out');
                    front.article.elements.articleTitle.html('Бернард Шлинк «Три эссе»');
                    if (front.article.elements.articleType.length > 0) {
                        front.article.elements.articleType.html('Рецензии');
                        front.article.elements.articleBody.html('<p class="annotation">Аннотация</p><img src="img/article-lib-pic.png" alt="" class="article-lib-pic"/><h3>Подзаголовок</h3><p>Мир для чилийского поэта Гонсало Рохаса обрушился 27 февраля 2010 года. Сильнейшее землетрясение в Чили, цунами, шахтеры, заваленные в шахте, повторные мощные толчки. Он не смог оправиться от этого удара, но шел и шел до конца еще целый год, совсем немного не дойдя до своего столетия.</p><p><span><o:p>&nbsp;</o:p></span></p><p>***</p><h5 class="small">Об одном аккорде поэта Уго Самбельи</h5><p>И вместо арфы ты мне приносишь моего Бога,</p><p>и грязный пенный поцелуй реки,</p><p><span><o:p>&nbsp;</o:p></span></p><p>и ту землю, которую в детстве</p><p>я ел, как звереныш, прячась меж мокрых листьев.</p>');    
                    } else {
                        front.article.elements.articleBody.html('<p>Мир для чилийского поэта Гонсало Рохаса обрушился 27 февраля 2010 года. Сильнейшее землетрясение в Чили, цунами, шахтеры, заваленные в шахте, повторные мощные толчки. Он не смог оправиться от этого удара, но шел и шел до конца еще целый год, совсем немного не дойдя до своего столетия.</p><p><span><o:p>&nbsp;</o:p></span></p><p>***</p><h5 class="small">Об одном аккорде поэта Уго Самбельи</h5><p>И вместо арфы ты мне приносишь моего Бога,</p><p>и грязный пенный поцелуй реки,</p><p><span><o:p>&nbsp;</o:p></span></p><p>и ту землю, которую в детстве</p><p>я ел, как звереныш, прячась меж мокрых листьев.</p>');
                    }
                    front.article.elements.articleBlock.removeClass('opacity-change');
                    front.article.elements.articleNext.css({'opacity': '0'});   
                    front.article.elements.articleNext.removeClass('move-up-block');  
                }, 600);
                setTimeout(function() {
                    front.article.elements.articleNext.attr('style', '');
                    front.article.elements.articleNextTitle.html('Бернард Шлинк «Три эссе»');
                    front.article.elements.articleNextBody.html('<span>Эссе немецкого юриста и писателя</span>');
                }, 700);  
			});
			this.elements.articleNoteLinkList.click( function(){
    			note = jQuery(this).attr('id').replace('text', '');
    			jQuery(`#${note}`).addClass('active-note');
    			setTimeout(function() {
        		    jQuery(`#${note}`).removeClass('active-note');	
                }, 1000);
			});
			jQuery('.note-link').click( function() {
    			
    			var target = this.hash,
                $target = $(target);
                $(window).scrollTop(jQuery(target).offset().top - Math.round(jQuery(window).height()/3));
                return false;
			});
            if ((jQuery('.article-transl-info').width() + jQuery('.article-author-info').width()) >= jQuery('.article-body').width()) {
                jQuery('.article-transl-info').addClass('block');
            }
		}
    },
    magazine : {
        elements : {},
		elementsInit(){
    		this.elements.magazineIssuesList = jQuery('.magazine-issues-list');
    		this.elements.magIssuesArchiveBtn = jQuery('.magazine-issues-archive .default-btn');
    		this.elements.archiveSection = jQuery('.issue-archive-list');
    		this.elements.archiveSectionBtn = jQuery('.issue-archive-list .default-btn');
		},
		init(){
    		this.elementsInit();
    		colEl = Math.floor(jQuery('.magazine-single-body').width() / 128);
    		this.elements.magazineIssuesList.slick({
                    infinite: false,
                    swipeToSlide: true,
                    variableWidth: true,
                    waitForAnimate: false,
                    focusOnSelect: true,
                    slidesToScroll: 1,
                    slidesToShow: colEl,
                    //centerPadding: `${jQuery(window).width() - 240}px 0 0`,
                    centerMode: false
                });
            if (jQuery(window).width() <= '767' && this.elements.magazineIssuesList.length > 0) {
                this.elements.archiveSection.addClass('archive-section');
                this.elements.magIssuesArchiveBtn.click( function() {
                    front.magazine.elements.archiveSection.addClass('block');
                    jQuery('.magazine-single-info').addClass('hide-block');
                    jQuery('.mobile-menu-toggle-block').addClass('hide-block');
                });
                this.elements.archiveSectionBtn.click( function() {
                    front.magazine.elements.archiveSection.removeClass('block');
                    jQuery('.magazine-single-info').removeClass('hide-block');
                    jQuery('.mobile-menu-toggle-block').removeClass('hide-block');
                });
            }
        }
    }
}