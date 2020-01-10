const pol1 = document.getElementById("polygon1");
const pol2 = document.getElementById("polygon2");
const pol3 = document.getElementById("polygon3");
const pol4 = document.getElementById("polygon4");
const hlblock = document.getElementById("headliners");
let user = detect.parse(navigator.userAgent);


const artists = [['<p class="action-date">29.06</p><p class="bigCharacter">Skepta</p><p>the score</p><p>Walking on cars</p><p>mgzavrebi</p><p>МАЧЕТЕ</p><p>Rsac</p><p>Щенки</p><p class="action-date">30.06</p><p class="bigCharacter">rae sremmurd</p><p>ROISIN MURPHY</p><p>DENZEL CURRY</p><p>Bhad Bhabie</p><p>GONE.FLUDD</p><p>ПОШЛАЯ МОЛЛИ</p><p>OFFMI</p>', 'src/Skepta.jpg', 1280, 720], 
                 ['<p class="bigCharacter">desiigner</p><p>grandson</p><p>AMERICAN AUTHORS</p><p>МАЧЕТЕ</p><p>ПОШЛАЯ МОЛЛИ</p><p>OFFMI</p><p>Rsac</p><p>Щенки</p><p>zivert</p>', 'src/desiigner-45.jpg', 1280, 720],
                 ['<p class="bigCharacter">ЗВЕРИ</p><p>MGZAVREBI</p><p>PLС</p><p>МАЧЕТЕ</p><p>zivert</p>', 'src/Zveri.jpg', 1280, 720]]

//Перерисовка background по заданным координатам контрольной точки
const moveBg = (x, y) => {
  pol1.style.height = y + "px";
  
  pol2.style.width = x + "px";
  pol2.style.clipPath = "polygon(0 0, 0 100%, 100% 100%, 100% " + pol1.style.height + ")";
  pol2.style.WebkitClipPath = "polygon(0 0, 0 100%, 100% 100%, 100% " + pol1.style.height + ")";
  
  pol3.style.height = (window.innerHeight - y) + "px";
  pol3.style.top = y + "px";
  pol3.style.clipPath = "polygon(0 100%, " + pol2.style.width + " 0, 100% 0, 100% 100%)";
  pol3.style.WebkitClipPath = "polygon(0 100%, " + pol2.style.width + " 0, 100% 0, 100% 100%)";
   
  pol4.style.width = (window.innerWidth - x) + "px";
  pol4.style.left = x + "px";
  pol4.style.clipPath = "polygon(100% 0, 0 " + pol1.style.height + ", 100% 100%)";
  pol4.style.WebkitClipPath = "polygon(100% 0, 0 " + pol1.style.height + ", 100% 100%)";
    
};

//Перемещение фона за курсором  
document.body.addEventListener("mousemove", function(e) {
  const mousePosX = e.clientX;
  const mousePosY = e.clientY;
  moveBg(mousePosX, mousePosY);   
});

//Заливка фона 1 из 3 вариантов цветовой гаммы (random), запуск анимации фона для мобильных устройств и планшетов
const bgGradRand = () => {
    const colorList = [
        ['#803BD9', '#DC3984', '#943BC7'], 
        ['#005D9B', '#0074FF', '#0160A7'], 
        ['#0082B9', '#32B4E3', '#0160A7']];
    const x = Math.random() * 2;
    const randInd = Math.round(x);
    
    if (randInd > 0) {
        pol1.style.background = 'linear-gradient(180deg, ' + colorList[randInd][0]+ ' 0%, ' + colorList[randInd][1] + ' 100%)';
        pol2.style.background = 'linear-gradient(180deg, ' + colorList[randInd][0]+ ' 0%, ' + colorList[randInd][1] + ' 100%)';
        pol3.style.background = 'linear-gradient(180deg, ' + colorList[randInd][0]+ ' 0%, ' + colorList[randInd][1] + ' 100%)';
        pol4.style.background = 'linear-gradient(180deg, ' + colorList[randInd][0]+ ' 0%, ' + colorList[randInd][1] + ' 100%)';
        let testElements = document.getElementsByClassName("btnByeTicket");
        Array.prototype.filter.call(testElements, function(testElement){
            return testElement.style.color = colorList[randInd][2];
        });
        
    }
    
    if (user.device.type === 'Mobile' || user.device.type === 'Tablet') {
        document.getElementById("polygon1").style.animation = "pol1 15s infinite ease-in-out alternate";
        document.getElementById("polygon2").style.animation = "pol2 15s infinite ease-in-out alternate";
        document.getElementById("polygon3").style.animation = "pol3 15s infinite ease-in-out alternate";
        document.getElementById("polygon4").style.animation = "pol4 15s infinite ease-in-out alternate";
        
        let dVer = document.getElementsByClassName("desktop-ver");
        Array.prototype.filter.call(dVer, function(dVerel){
            return dVerel.style.display = 'none';
        });
        
        let mVer = document.getElementsByClassName("mobile-ver");
        Array.prototype.filter.call(mVer, function(mVerel){
            return mVerel.style.display = 'block';
        });
        let mainBlock = document.getElementsByClassName("main");
        Array.prototype.filter.call(mainBlock, function(x){
            return x.style.flexDirection = 'column';
        });
        document.getElementById("closeBtn").style.display = "none";
    }
};

//hover-эффект для ссылки 'Пользовательское соглашение'
const termHover = () => document.getElementById("termcond").style.borderBottom = "1px solid rgba(255, 255, 255, .5)";
const termInactive = () => document.getElementById("termcond").style.borderBottom = "1px solid rgba(255, 255, 255, 0)";

//Отрисовка лайнапа (блок с исполнителями рядом с картинкой с distortion-эффектом) и перемещение его вслед за курсором
const headlinersBlockShow = (cityId) => {

    hlblock.style.animation = "imageshow 0.5s linear";
    hlblock.style.opacity = 1;
    document.getElementById("headlinersList").innerHTML = artists[cityId][0];

    document.body.addEventListener("mousemove", function(e) {
        const mousePosX = e.clientX;
        const mousePosY = e.clientY;
        
        var scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        );
        
        const r = artists[cityId][2]/artists[cityId][3];
        const hImg = 0.49 * window.innerHeight;
        const wImg = hImg * r;
        
        let hlTop = mousePosY + (0.8 * hImg) - document.getElementById("headliners").clientHeight;
        let hlLeft = mousePosX - (0.9 * wImg) - document.getElementById("headliners").clientWidth;
        
        if ((hlTop + document.getElementById("headliners").clientHeight) > (scrollHeight - document.getElementById("footer").clientHeight * 1.3)) {
            hlTop = scrollHeight - document.getElementById("footer").clientHeight * 1.3 - document.getElementById("headliners").clientHeight;
        }
        hlblock.style.top = hlTop + "px";
        hlblock.style.left = hlLeft + "px";
                
    });
                
};

//Сокрытие лайнапа
const headlinersHidden = () => {
    hlblock.style.animation = "imagehide 0.5s ease-in-out";    
    hlblock.style.opacity = 0;  
};

//Отображение блока с картинкой headliner (для мобильных)
const hlVideoBlockShow = (id) => {
    let testElements = document.getElementsByClassName("citylist");
    Array.prototype.filter.call(testElements, function(testElement){
        return testElement.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    document.getElementById(id + 'Video').style.display = 'block';
    document.getElementById('closeBtn').style.display = 'inline-block';
}
//Сокрытие изображения headliner (для мобильных)
const hlVideoBlockHide = () => {
    let testElements = document.getElementsByClassName("hlVideo");
    Array.prototype.filter.call(testElements, function(testElement){
        return testElement.style.display = 'none';
    });
    testElements = document.getElementsByClassName("citylist");
    Array.prototype.filter.call(testElements, function(testElement){
        return testElement.style.display = 'block';
    });

    document.getElementById('closeBtn').style.display = 'none';
    
}

//Покупка билета - Переход на сайт партнера
const buyTicketFunc = () => {
    let win = window.open('https://www.parter.ru/noapp/tickets.html?affiliate=10J&erid=2446515', '_blank');
    win.focus();
};

const newPixel = () => {
 //   let newpixel = document.getElementById("pixel");
    var scriptService = document.createElement('script');
    scriptService.src = "//pixel.mathtag.com/event/js?mt_id=1415269&mt_adid=224219&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=";
    scriptService.async = true;
    scriptService.setAttribute("language", "JavaScript1.1");
    document.body.appendChild(scriptService);
};
