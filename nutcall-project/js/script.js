jQuery( document ).ready( function() {
	front.basic.init();
} );

front = {
    basic : {
        elements : {},
        elementsInit(){
            this.elements.personsList = jQuery('.bem-content__persons__bem-link');
			this.elements.headerBlock = jQuery('.bem-header');
            this.elements.headerBlockFix = jQuery('.bem-header__fixed');
            this.elements.newUserButton = jQuery('.bem-header__new-user');
            this.elements.selectForm = jQuery('.bem-select');
            this.elements.scrollTop = jQuery(window).scrollTop();
            this.elements.userProfile = jQuery('.bem-user-profile');
            this.elements.userProfileList = jQuery('.bem-user-profile__list');
        },
        init() {
			this.elementsInit();
			
			//Усечение имени/фамилии пользователя для секции "В тренде" 
			this.elements.personsList.each(function() {
                var res = $(this).text().split(' ');
                $(this).html(res.reduce(function(acc, subS) {
                    var tmp = subS.length > 9 ? subS.substr(0, 6)+'...' : subS;
                    return `${acc}${tmp}<br>`;    
                }, ''));   
            });
            
            //Появление фиксированной плашки меню при скролле
            jQuery(window).scroll( function() {
                  var dir = (jQuery(window).scrollTop() - front.basic.elements.scrollTop) >= 0 ? 'down' : 'up';
                  if ((dir == 'down') && ((jQuery(window).scrollTop() >= '440' && jQuery(window).width() > '768') || (jQuery(window).scrollTop() >= '250' && jQuery(window).width() <= '768'))) {
                      front.basic.elements.headerBlock.addClass('bem-header__fixed');
                      front.basic.elements.headerBlock.css('margin-top', '0');
                      if (jQuery(window).width() > '768') {
                          front.basic.elements.newUserButton.addClass('bem-button');
                      }
                  } 
                  if ((dir == 'up') && ((jQuery(window).scrollTop() < '440' && jQuery(window).width() > '768') || (jQuery(window).scrollTop() < '250' && jQuery(window).width() <= '768'))){
                      //headerBlock.removeClass('bem-header__fixed').delay(800);
                      front.basic.elements.headerBlock.css('margin-top', '-56px');
                      //newUserButton.removeClass('bem-button');
                  }
                  if (jQuery(window).scrollTop() <= 100) {
                      front.basic.elements.headerBlock.removeClass('bem-header__fixed');
                      front.basic.elements.newUserButton.removeClass('bem-button');
                  }
                  
                //    jQuery('.bem-user-profile__list').removeClass('bem-user-profile_show');   
                  front.basic.elements.scrollTop = jQuery(window).scrollTop();
                  
              } );
            // При клике на документ все открытые формы скрываются
            jQuery(document).on('click', function () {
                jQuery('.bem-user-profile__list').attr('style', '');
                jQuery('body').attr('style', '');
                jQuery('.bem-header').removeClass('bem-disabled');
                jQuery('.bem-user-profile__list').removeClass('bem-user-profile_show');   
                jQuery('.bem-select__gap').removeClass('on');
                jQuery('.bem-select__list').slideUp(500);
            });
            
            // Подмена стандартного select на свой стилизованный
            this.elements.selectForm.each(function(){
        		// Variables
        		var $this = $(this),
        			selectOption = $this.find('option'),
        			selectOptionLength = selectOption.length,
        			selectedOption = selectOption.filter(':selected'),
        			dur = 500;
        
        		$this.hide();
        		// Wrap all in select box
        		$this.wrap('<div class="bem-select"></div>');
        		// Style box
        		$('<div>',{
        			class: 'bem-select__gap',
        			text: selectOption.eq(0).text()
        		}).insertAfter($this);
        		
        		var selectGap = $this.next('.bem-select__gap'),
        			caret = selectGap.find('.caret');
        		// Add ul list
        		$('<ul>',{
        			class: 'bem-select__list'
        		}).insertAfter(selectGap);		
        
        		var selectList = selectGap.next('.bem-select__list');
        		// Add li - option items
        		for(var i = 0; i < selectOptionLength; i++){
        			$('<li>',{
        				class: 'bem-select__item',
        				html: $('<span>',{
        					text: selectOption.eq(i).text()
        				})				
        			})
        			.attr('data-value', selectOption.eq(i).val())
        			.appendTo(selectList);
        		}
        		// Find all items
        		var selectItem = selectList.find('li');
        
        		selectList.slideUp(0);
        		selectGap.on('click', function(){
        			if(!$(this).hasClass('on')){
        				$(this).addClass('on');
        				selectList.slideDown(dur);
        
        				selectItem.on('click', function(){
        					var chooseItem = $(this).data('value');
        
        					$('select').val(chooseItem).attr('selected', 'selected');
        					selectGap.text($(this).find('span').text());
        
        					selectList.slideUp(dur);
        					selectGap.removeClass('on');
        				});
        				
        			} else {
        				$(this).removeClass('on');
        				selectList.slideUp(dur);
        			}
        			return false;
        		});		
        
        	});
            
            // Выпадающий список профайла пользователя
            this.elements.userProfile.click( function() {
                  
                  if (jQuery(window).width() <= '768') {
                      front.basic.elements.userProfileList.css({right: 0});
                      jQuery('.bem-header').toggleClass('bem-disabled');
                      jQuery('body').css('overflow', 'hidden');
                  } else {
                      front.basic.elements.userProfileList.toggleClass('bem-user-profile_show');
                  }
                  return false;
                  
              } );           
		}
    }
}