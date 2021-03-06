jQuery( document ).ready( function() {
	page.basic.init();
} );

page = {
    basic : {
        elements: {},
        elementsInit() {
            this.elements.screen = 1;
            this.elements.bubbleQuote = 0;
            this.elements.tapTimer = null;
            this.elements.bubbleAnimationTime = 400;
            this.elements.mc = '';
            this.elements.colors = [
                {'name' : '', 'color' : '#F42F2F'},
                {'name' : '', 'color' : '#17FFB7'},
                {'name' : '', 'color' : '#FFF533'},
                {'name' : '', 'color' : '#FF33FF'},
                {'name' : '', 'color' : '#5BFF39'},
                {'name' : '', 'color' : '#24E0FF'},
                {'name' : '', 'color' : '#9F45FF'},
                {'name' : '', 'color' : '#FF7415'},
                {'name' : '', 'color' : '#CCCCCC'},
                {'name' : '', 'color' : '#559AFF'}
            ]; 
            this.elements.arrow = $('#arrow');
        },
        //Поиск фоновой картинки
        randBg() {
            let id = Math.round(Math.random() * 2) + 1; 
            $('.block1').addClass(`bg-pic${id}`);  
        },
        //Смена экрана
        changeScreen() {
            let startScreen = this.elements.screen;
            this.elements.screen = this.elements.screen == 3 ? 1 : this.elements.screen + 1;
            $(`.block${startScreen}`).removeClass('show');
            $(`.block${startScreen}`).addClass('moveUp');    
        	this.elements.tapTimer = setTimeout(function(){ 
        		page.basic.elements.tapTimer = null;
                $(`.block${startScreen}`).removeClass('moveUp');
                $(`.block${startScreen}`).addClass('hidden');
                $(`.block${page.basic.elements.screen}`).removeClass('hidden');
                $(`.block${page.basic.elements.screen}`).addClass('show');
        	}, this.elements.bubbleAnimationTime);    
            if (this.elements.screen == 2) {
                this.elements.bubbleQuote = 0;
                $('#main-content').html('');
                this.elements.arrow.unbind();
                this.elements.arrow.click(function() { page.basic.visibleDiv();});
                this.elements.mc.off("swipe");
                this.elements.mc.on("swipe", function(ev) { page.basic.visibleDiv();});
                this.generateStory(); 
            }
            
            if (this.elements.screen == 3) {
                this.elements.arrow.addClass('hidden');
                this.elements.mc.off("swipe");
                setTimeout(function(){ 
        		    page.basic.elements.arrow.addClass('up');
        		    page.basic.elements.arrow.removeClass('hidden');
        		    page.basic.elements.mc.on("swipe", function(ev) { page.basic.changeScreen();});
        	    }, 3000);  

                this.elements.arrow.unbind();
                this.elements.arrow.click(function() { page.basic.changeScreen();});
            } else {
                this.elements.arrow.removeClass('up');
            }       
        },
        //Загрузка истории
        generateStory(){
            var html = '';
            var colRole = '#000';
            for(var i = 0; i < lines.length; i += 1) {
                const hid = i === 0 ? '': 'hidden';
                const author = lines[i].name === '' ? 'author' : '';
                const img = lines[i].text.indexOf('[https') === 0 ? lines[i].text.substr(1, lines[i].text.length - 2) : '';
                if (img === '') {
                    colRole = this.getColor(lines[i].name);
                    html += `<div class='message ${hid}' id='mess${i}'><div class='role ${lines[i].align}' style='color: ${colRole};'>${lines[i].name}</div><div class='quote ${lines[i].align} ${author}'>${lines[i].text}</div></div>`; 
                } else {
                    html += `<div class='message ${hid}' id='mess${i}'><div class='role ${lines[i].align}'>${lines[i].name}</div><div class='quote ${lines[i].align} img'><img src='${img}'></div></div>`;    
                }
            }
            $('#main-content').html(html);
        },
        //Подгрузка реплик
        visibleDiv(){              
            if (this.elements.tapTimer != null) { return false; }
            
        	col = lines.length;
        	
        	this.elements.tapTimer = setTimeout(function(){ 
        		page.basic.elements.tapTimer = null;
        	}, 400);
        	
            if (col == this.elements.bubbleQuote + 1) {
                this.elements.arrow.click(function() { page.basic.changeScreen();});   
                this.changeScreen();

/*
                this.elements.tapTimer = setTimeout(function(){ 
        		    page.basic.elements.tapTimer = null;
        		    page.basic.changeScreen();
        	    }, 500);  
*/

        	    return false;         
            } else {
               this.elements.bubbleQuote += 1;
               $(`#mess${this.elements.bubbleQuote}`).toggleClass('hidden');
               $(`#mess${this.elements.bubbleQuote}`).addClass('show'); 
            }
            
        	this.scrollTo(document.getElementById('main-content'), this.elements.bubbleAnimationTime);
        },
        //анимированное проскроливание элементов вверх
        scrollTo(element, duration) {
            var start = element.scrollTop,
                change = element.scrollHeight - start,
                currentTime = 0,
                increment = 20;
                
            var animateScroll = function(){        
                currentTime += increment;
                var val = Math.easeInOutQuad(currentTime, start, change, duration);
                element.scrollTop = val;
                if(currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };
            animateScroll();
        },
        //Получить текущий цвет персоны
        getColor(name) {
            for(var i = 0; i < this.elements.colors.length; i += 1) {
                if ((name === this.elements.colors[i].name) || (this.elements.colors[i].name === '')) {
                    this.elements.colors[i].name = name;
                    return this.elements.colors[i].color;
                }
            }
            return '#000';
        },
        init() {
            this.elementsInit();
            //this.randBg();
            //Отслеживание swipe
            const el = document.getElementById('main');
            this.elements.mc = new Hammer(el);
            this.elements.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            // listen to events...
            this.elements.mc.on("swipe", function(ev) {
                page.basic.changeScreen();
            });
            this.elements.arrow.click(function() { page.basic.changeScreen();});
            $('.block2').click(function() {page.basic.visibleDiv();});
        }
    }
};

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

