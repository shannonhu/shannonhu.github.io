$(document).ready(function() {
  $("#img1").fadeIn(1250);
  $(".title").fadeIn(1000);
  $(".title").click(function(){
    $(".title").fadeOut(1000);
    $(".scene1").fadeIn(1000);
  });
  $("#man1").click(function(){
    $(".scene1").fadeOut(1000);
    $(".scene2-1").fadeIn(1000);
    setTimeout(function(){$("#man2").fadeOut(1000);}, 5000);
    setTimeout(function(){$(".scene2-1-1").fadeIn(1000);}, 6000);
    setTimeout(function(){$(".scene2-1-1").fadeOut(1000);}, 9000);
    setTimeout(function(){$(".scene2-1-2").fadeIn(1000);}, 10000);
    setTimeout(function(){$(".scene2-1-2").fadeOut(1000);}, 13000);
    setTimeout(function(){$(".scene2-1-3").fadeIn(1000);}, 14000); 
    canvasDraw.init();
  });
  $("#submit").click(function(){
    $(".scene2-1-3").fadeOut(1000);
    $(".scene3-1-1").fadeIn(1000);
    setTimeout(function(){$(".scene3-1-1").fadeOut(1000);}, 4000);
    setTimeout(function(){$(".scene3-1-2").fadeIn(2000);}, 6000);
    setTimeout(function(){$(".scene3-1-2").fadeOut(1000);}, 10000);
    setTimeout(function(){$(".scene3-1-3").fadeIn(1000);}, 11000);
    setTimeout(function(){$(".scene3-1-3").fadeOut(1000);}, 14000);
    setTimeout(function(){$(".scene3-1-4").fadeIn(1000);}, 15000);
    setTimeout(function(){$(".scene3-1-4").fadeOut(1000);}, 18000);
    setTimeout(function(){$(".scene3-1-5").fadeIn(1000);}, 19000);

  });
  $("#umbrella1").click(function(){
    $(".scene1").fadeOut(1000);
    $(".scene2-2").fadeIn(1000);
    setTimeout(function(){$(".scene2-2").fadeOut(1000);}, 5000);
    setTimeout(function(){$(".scene3-2").fadeIn(1000);}, 6000);
  });
  $("#store").click(function(){
    $(".scene3-2").fadeOut(1000);
    $("#img1").fadeOut(1000);
    $(".scene4-1-1").fadeIn(1000);
    setTimeout(function(){$(".scene4-1-1").fadeOut(1000);}, 4000);
    setTimeout(function(){$(".scene4-1-2").fadeIn(1000);}, 5000);
    var canvas = document.getElementById("shopRain");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var context = canvas.getContext("2d");
    var defaultNumOfObj = 20;
    var rainFall = []; 
  
    function fallingObj(x, y, img) {
      this.x = x;
      this.y = y;
      this.img = img;

      this.show = function() {
        context.drawImage(this.img, this.x, this.y, 100,90);
      };

      this.fall = function() {
        this.y += 1;
        if (this.y > canvas.height) {
          this.y = 0;
        };
      };
    };

    function drawFallingObj(numOfRain) {
      context.fillStyle = "black";
      context.fillRect(0,0,canvas.width, canvas.height);
      if (numOfRain == rainFall.length) {
        for (var i = 0; i < numOfRain; i++) {
          rainFall[i].show(); 
          rainFall[i].fall();
        };
        window.requestAnimationFrame(function() {drawFallingObj(numOfRain)});
      }
    };

    function createFallingObj(img, numOfRain) {
      for (var i = 0; i < numOfRain; i++) {
        var x = Math.floor(Math.random()*canvas.width);
        var y = Math.floor(Math.random()*canvas.height);
        rainFall[i] = new fallingObj(x,y, img);
      };
    }

    function clearFallingObj() {
      context.fillStyle = "black";
      context.fillRect(0,0,canvas.width, canvas.height);
      rainFall.length = 0;
    }

    $(".items").mouseover(function(e) { 
      var id = $(e.target).attr('id');
      var img = new Image();
      img.src = "images/"+id.charAt(1)+".png";
      createFallingObj(img, defaultNumOfObj);
      window.requestAnimationFrame(function() {drawFallingObj(defaultNumOfObj)});
    });

    $(".items").mouseout(function() { 
      clearFallingObj();
    });

    $("#exit").click(function(){
      $(".scene4-1-2").fadeOut(1000);
      $("#img1").fadeIn(1000);
      $(".scene3-2").fadeIn(1000);
    });
  });

  $("#dog").click(function(){
    $(".scene3-2").fadeOut(1000);
    $(".scene4-2-1").fadeIn(1000);
    setTimeout(function(){$("#dogwalk").fadeOut(1000);}, 5000);
    setTimeout(function(){$(".scene4-2-2").fadeIn(1000);}, 6000);
    setTimeout(function(){$(".scene4-2-2").fadeOut(1000);}, 10000);
    setTimeout(function(){$(".scene4-2-3").fadeIn(1000);}, 10000);
    setTimeout(function(){$(".scene4-2-3").fadeOut(1000);}, 13000);
    setTimeout(function(){$(".scene4-2-4").fadeIn(1000);}, 14000);
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      return {
        total,
        minutes,
        seconds
      };
    }
    function initializeClock(id, endtime) {
      const clock = document.getElementById('timer');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');
    
      function updateClock() {
        const t = getTimeRemaining(endtime);
    
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
          $(".scene4-2-4").fadeOut(1000);
          setTimeout(function(){$(".title").fadeIn(1000);}, 2000);
        }
      }
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }
    const deadline = new Date(Date.parse(new Date()) + Math.floor(Math.random() * 3) * Math.floor(Math.random() * 61) * 1000);
    initializeClock('timer', deadline);
  });
});

var canvasDraw = {
  setting: {
    docW: 0,
    docH: 0,
    textFont: "Courier New",
    minFontSize: 50,
    maxFontSize: 150,
    baseSpeed: 1200,
    lowerSpeed: 5800,
    startPosY: 10,
  },
  stage: null,
  domSet: {},
  sizeSet: function(){
    var self = this;
    this.setting.docW = document.documentElement.clientWidth;
    this.setting.docH = document.documentElement.clientHeight;
    self.domSet.$canvas.setAttribute("width", self.setting.docW);
    self.domSet.$canvas.setAttribute("height", self.setting.docH); 
  },
  getHexString: function(){
    var self = this,
      c = function(){
          return String(("0" + self.getRandom(255).toString(16)).slice(-2));
        };
      var c = c();
      return c + c + c;
  },
  getRandom: function(n){
    return parseInt(Math.floor(Math.random() * n));
  },
  inputText: function(typeText, posX){
    var self = this,
      color = "#" + self.getHexString(),
      fontSize = self.setting.minFontSize + self.getRandom(self.setting.maxFontSize),
      text = new createjs.Text(typeText, fontSize + "px " + self.setting.textFont, color),
      speed = self.setting.baseSpeed + self.getRandom(self.setting.lowerSpeed)
      r = 360,
      b = text.getBounds();
    text.x = posX;
    text.y = self.setting.startPosY;
    text.regX = b.width / 2;
    text.regY = b.height / 2;
    this.textBaseline = "bottom";
    text.lineHeight = 0;
    this.stage.addChild(text);
    var timeline = new createjs.Timeline();
    var drop = createjs.Tween.get(text, {loop: false})
              .to({alpha: 0.7, y: self.setting.docH - b.height / 2}, speed)
              .wait(1000)
              .to({alpha: 0}, speed + 5000)
              .call(onComplete);
    var rotation = createjs.Tween.get(text, {loop: false})
              .to({rotation: r}, speed);
    timeline.addTween(drop, rotation).setPaused(false);
    function onComplete(){
      createjs.Tween.removeTweens(text);
    }
  },
  resize: function(){
    var self = this,
      queue = null;
    window.addEventListener('resize', function() {
      clearTimeout(queue);
      queue = setTimeout(function() {
      self.domSet.$response.value = ''; 
      self.sizeSet();
      self.stage.update();
      }, 200);
    }, false );
  },
  init: function(){
    this.stage = new createjs.Stage("textRain");
    this.domSet.$canvas = document.getElementById("textRain");
    this.domSet.$response = document.getElementById("response");
    this.setting.docW = document.documentElement.clientWidth;
    this.setting.docH = document.documentElement.clientHeight;
    var self = this;
    self.sizeSet();
    self.resize();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', this.stage);

    self.domSet.$response.onkeyup = function( e ){
      var keyEvent = e || window.e;
      if(e.ctrlKey){
        if(e.keyCode === 67 || e.keyCode === 86){
          return false;
        }
      } else {
        var typeText = this.value.slice(-1),
          posX = self.getRandom(self.setting.docW),
          maxX = self.setting.docW - self.setting.maxFontSize;
        if(posX > maxX){
          posX = maxX;
        }
        self.inputText(typeText , posX);
      }
    };

    document.addEventListener('paste', function( e ) {
      if(e.target.id == "response"){
          self.domSet.$response.value = '';
        setTimeout(function(){
          var text = self.domSet.$response.value,
            len = text.length;
          for(var i=0; i<len;i++){
            var posX = self.getRandom(self.setting.docW),
              maxX = self.setting.docW - self.setting.maxFontSize;
            if(posX > maxX){
              posX = maxX;
            }
            self.inputText(text.charAt(i) , posX);
          }
        }, 200);
      }
    }, false);
      }
};


