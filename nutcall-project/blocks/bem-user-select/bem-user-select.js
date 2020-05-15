/*
    Блок UserSelectBlock - пользовательский select (подмена стандарстного select)
    click: отображение выпадающего списка
*/
(function ($) {

    /**
     * @param {object} $label
     * @constructor
     */
    function UserSelectBlock($label) {

        this.$label = $label;
        this.$selectOption = $label.find('option');
        this.$selectOptionLength = this.$selectOption.length;
		this.$selectedOption = this.$selectOption.filter(':selected');
        this.$selectClasses = $label.attr('class');
        this.$dur = 200;

        this.init();

    }

    /**
     * Init.
     */
    UserSelectBlock.prototype.init = function () {

        var self = this;
        
        self.$label.hide();
		// Wrap all in select box
		self.$label.wrap('<div class="'+ self.$selectClasses +'"></div>');
		// Style box
		$('<div>',{
			class: 'bem-user-select__gap',
			text: self.$selectOption.eq(0).text()
		}).insertAfter(self.$label);
		
		var selectGap = self.$label.next('.bem-user-select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'bem-user-select__list'
		}).insertAfter(selectGap);		

		var selectList = selectGap.next('.bem-user-select__list');
		// Add li - option items
		for(var i = 0; i < self.$selectOptionLength; i++){
			$('<li>',{
				class: 'bem-user-select__item',
				html: $('<span>',{
					text: self.$selectOption.eq(i).text()
				})				
			})
			.attr('data-value', self.$selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(self.$dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');

					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(self.$dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(self.$dur);
			}
			return false;
		});		
    };

    window.UserSelectBlock = UserSelectBlock;

    $(function () {
        var $labels = $('.bem-user-select');
        
        $labels.each(function () {
            $(this).data('UserSelectLabel', new UserSelectBlock($(this)));
        });
    });

}) (jQuery);