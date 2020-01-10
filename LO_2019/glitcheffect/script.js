const pol1 = document.getElementById("polygon1");
const pol2 = document.getElementById("polygon2");
const pol3 = document.getElementById("polygon3");
const pol4 = document.getElementById("polygon4");
const hlblock = document.getElementById("headliners");
let canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  img = new Image();
let user = detect.parse(navigator.userAgent);


const artists = [['<p class="bigCharacter">rae sremmurd</p><p>DENZEL CURRY</p><p>ХЛЕБ</p><p>МАЧЕТЕ</p><p>ПОШЛАЯ МОЛЛИ</p><p>OFFMI</p>', 'src/Rae_Sremmurd_2.jpg'], 
                 ['<p class="bigCharacter">AMERICAN AUTHORS</p><p>МАЧЕТЕ</p><p>ПОШЛАЯ МОЛЛИ</p><p>OFFMI</p>', 'src/American_Authors.jpg'],
                 ['<p class="bigCharacter">ЗВЕРИ</p><p>МАЧЕТЕ</p><p>PLС</p>', 'src/Zveri.jpg']]

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

/*
const moveBgMobile = (pointX, pointY, dirX, dirY) => {
    let x = pointX;
    let y = pointY;
    let dx = dirX;
    let dy = dirY;
    console.log(x, y, dx, dy);
    console.log(window.innerWidth - 20);
    if ((x + dx) >= (window.innerWidth - 20)) {
        dx = -1;
    } else if (x + dx <= 20) {
        dx = 1;
    } else if (y + dy >= (window.innerHeight - 20)) {
        dy = -1;
    } else if (y + dy <= 20) {
        dy = 1;
    }
    moveBg(x,y);
    setInterval(function(){
            moveBgMobile(x + dx, y + dy, dx, dy);
          }, 500);
}
*/
  
document.body.addEventListener("mousemove", function(e) {
  const mousePosX = e.clientX;
  const mousePosY = e.clientY;
  moveBg(mousePosX, mousePosY);   
});

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
    }
};

const termHover = () => document.getElementById("termcond").style.borderBottom = "1px solid rgba(255, 255, 255, .5)";
const termInactive = () => document.getElementById("termcond").style.borderBottom = "1px solid rgba(255, 255, 255, 0)";

const headlinersBlockShow = (cityId) => {
    if (user.device.type === 'Desktop') {
        glitch(cityId);    
    }    
    hlblock.style.animation = 'imageshow 1s linear';
    hlblock.style.opacity = 1;
    document.getElementById("headlinersList").innerHTML = artists[cityId][0];
    document.getElementById("originImage").src = artists[cityId][1];
    document.getElementById("originImage").style.animation = 'imageshow 1s linear';
    document.body.addEventListener("mousemove", function(e) {
        const mousePosX = e.clientX;
        const mousePosY = e.clientY;
        posY = mousePosY - 20;  
        if ((posY + document.getElementById("headliners").clientHeight) > (window.innerHeight - 100)) {
            hlblock.style.bottom = "100px";   
            hlblock.style.top = "inherit"; 
        } else {
            hlblock.style.top = posY + "px";
            hlblock.style.bottom = "inherit";    
        }
        posX = window.innerWidth - (mousePosX + 30);
        if (mousePosX + 30 - document.getElementById("headliners").clientWidth < 60) {
            hlblock.style.left = "60px";   
            hlblock.style.right = "inherit"; 
        } else {
            hlblock.style.right = posX + "px";
            hlblock.style.left = "inherit";    
        }
        if (Math.round((document.getElementById("headliners").clientWidth / window.innerWidth) * 100) > 90) {
            hlblock.style.right = "inherit";
            hlblock.style.left = "10px";
        }
    });
     
    
       
};
const headlinersHidden = () => {
    document.getElementById("originImage").style.animation = 'imagehide 1s linear';
    hlblock.style.animation = 'imagehide 1s linear';  
    hlblock.style.opacity = 0;      
};

const hlVideoBlockShow = (id) => {
    let testElements = document.getElementsByClassName("citylist");
    Array.prototype.filter.call(testElements, function(testElement){
        return testElement.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    document.getElementById(id + 'Video').style.display = 'block';
    document.getElementById('closeBtn').style.display = 'inline-block';
}
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

const buyTicketFunc = () => {
    let win = window.open('https://www.parter.ru/noapp/tickets.html?affiliate=10J&erid= 2355636', '_blank');
    win.focus();
}

  const glitch = (cityId) => {
  'use strict';

  var currentFrame = 0,
  totalFrame = 10,
  offset = .01,
  width,
  height,
  imgData,
  data,

  pr = window.devicePixelRatio || 1,
  w = document.getElementById("originImage").width,
  h = document.getElementById("originImage").height,

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  window.requestAnimationFrame = requestAnimationFrame;

  img.crossOrigin = "Anonymous";
  img.src = artists[cityId][1];
  img.onload = function () {
    init();
    glitchAnimation();
  };

  var init = function () {

    canvas.width = width = w * pr;
    canvas.height = height = h * pr;

    //anvas.width = width = img.width; //* .5;
    offset = width * offset;
    //canvas.height = height = ~~(img.height * (width - offset * 2) / img.width);

    //document.querySelector('.glitch-image').style.width = width + 'px';
    //document.querySelector('.glitch-image').style.height = height + 'px';
  }.bind(this);

  var glitchAnimation = function () {

    if (!(currentFrame % totalFrame) || currentFrame > totalFrame) {

      clearCanvas();

      ctx.drawImage(img,
      0,
      0,
      img.width,
      img.height,
      offset,
      0,
      width - offset * 2,
      height);

      imgData = ctx.getImageData(0, 0, width, height);

      imgData = pixelProcessor(imgData, 4, pixelCooler);

      ctx.putImageData(imgData, 0, 0);

      currentFrame = 0;
    }

    if (currentFrame === randInt(0, totalFrame)) {

      imgData = pixelProcessor(imgData, 1, pixelFlick);

      ctx.putImageData(imgData, 0, 0);

      drawGlitch(width, height, randInt(3, 10), glitchBlock);

      drawGlitch(width, height, randInt(3, 30), glitchLine);
    }

    currentFrame++;

    window.requestAnimationFrame(glitchAnimation);

  };

  var pixelFlick = function (i, d) {
    d[i] = d[i + 16];
  };

  var pixelCooler = function (i, d) {
    d[i] = 1;
    d[i + 1] += randInt(2, 5);
    d[i + 2] *= randInt(1, 3) + 8;
  };

  var glitchBlock = function (i, x, y) {
    if (i > 3) {
      var spliceHeight = 1 + randInt(0, 10);

      ctx.drawImage(canvas,
      x,
      y,
      x,
      spliceHeight,
      randInt(0, x),
      y,
      randInt(x, width),
      spliceHeight);
    }
  };

  var glitchLine = function (i, x, y) {
    var spliceHeight = 1 + randInt(1, 50);

    ctx.drawImage(canvas,
    offset,
    y,
    width - offset * 2,
    spliceHeight,
    1 + randInt(0, offset * 2), //-offset / 3 + randInt(0, offset / 1.5),
    y + randInt(0, 10),
    width - offset,
    spliceHeight);
  };

  var pixelProcessor = function (imageData, step, callback) {
    var data = imageData.data || [],
    step = step * 4 || 4;

    if (data.length) {
      var rgb = [];

      for (var i = 0; i < data.length; i += step) {
        callback && callback(i, data);
      }

      return imageData;
    } else {
      return imageData;
    }
  };

  var drawGlitch = function (width, height, amount, callback) {
    for (var i = 0; i < (amount || 10); i++) {
      var x = Math.random() * width + 1,
      y = Math.random() * height + 1;

      callback(i, x, y);
    }
  };

  var randInt = function (a, b) {
    return ~~(Math.random() * (b - a) + a);
  };

  var clearCanvas = function () {
    ctx.clearRect(0, 0, width, height);
  };
};