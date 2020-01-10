let screen = 1;
let head = 0;
        
var tapTimer = null;
var bubbleAnimationTime = 400;
let mc;

const randBg = () => {
   let id = Math.round(Math.random() * 2) + 1; 
   $('.block1').addClass(`bg-pic${id}`);  
};
const basic = () => {
    const el = document.getElementById('main');
    mc = new Hammer(el);
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    // listen to events...
    mc.on("swipe", function(ev) {
        changeScreen();
    });

};

const changeScreen = () => {
    let startScreen = screen;
    screen = screen == 3 ? 1 : screen + 1;
    $(`.block${startScreen}`).removeClass('show');
    $(`.block${startScreen}`).addClass('moveUp');    
	tapTimer = setTimeout(function(){ 
		tapTimer = null;
        $(`.block${startScreen}`).removeClass('moveUp');
        $(`.block${startScreen}`).addClass('hidden');
        $(`.block${screen}`).removeClass('hidden');
        $(`.block${screen}`).addClass('show');
	}, bubbleAnimationTime);    
    if (screen == 2) {
        head = 0;
        $('#main-content').html('');
        $('#arrow').attr('onclick', 'visibleDiv();');
        mc.off("swipe");
        mc.on("swipe", function(ev) {
            visibleDiv();
        });
        generateStory(); 
    }
    
    if (screen == 3) {
        $('#arrow').addClass('up');
        $('#arrow').attr('onclick', 'changeScreen();');
         mc.off("swipe");
        mc.on("swipe", function(ev) {
            changeScreen();
        });
    } else {
        $('#arrow').removeClass('up');
    }
    console.log(screen);
};

function generateStory(){
    var html = '';
    var colRole = '#000';
    for(var i = 0; i < lines.length; i += 1) {
        const hid = i === 0 ? '': 'hidden';
        const author = lines[i].name === '' ? 'author' : '';
        const img = lines[i].text.indexOf('[https') === 0 ? lines[i].text.substr(1, lines[i].text.length - 2) : '';
        if (img === '') {
            colRole = getColor(lines[i].name);
            html += `<div class='message ${hid}' id='mess${i}'><div class='role ${lines[i].align}' style='color: ${colRole};'>${lines[i].name}</div><div class='quote ${lines[i].align} ${author}'>${lines[i].text}</div></div>`; 
        } else {
            html += `<div class='message ${hid}' id='mess${i}'><div class='role ${lines[i].align}'>${lines[i].name}</div><div class='quote ${lines[i].align} img'><img src='${img}'></div></div>`;    
        }
    }
    $('#main-content').html(html);
};

function visibleDiv(){
//	if (tapTimer != null || col > lines.length) { return false; }
	col = lines.length;
	tapTimer = setTimeout(function(){ 
		tapTimer = null;
	}, bubbleAnimationTime);
	
    if (col == head + 1) {
        $('#arrow').attr('onclick', 'changeScreen();');    
        changeScreen();           
    } else {
       head += 1;
       $(`#mess${head}`).toggleClass('hidden');
       $(`#mess${head}`).addClass('show'); 
    }
	scrollTo(document.getElementById('main-content'), bubbleAnimationTime);
};


function scrollTo(element, duration) {
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

function getColor(name) {
    for(var i = 0; i < colors.length; i += 1) {
        if ((name === colors[i].name) || (colors[i].name === '')) {
            colors[i].name = name;
            return colors[i].color;
        }
    }
    return '#000';
};