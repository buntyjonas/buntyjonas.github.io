 var navbarHeight = $('.navbar').height(); 

$(window).scroll(function() {
  var navbarColor = "91, 161, 255";//color attr for rgba
  var smallLogoHeight = $('.small-logo').height();
  var bigLogoHeight = $('.big-logo').height();
  
  
  var smallLogoEndPos = 0;
  var smallSpeed = (smallLogoHeight / bigLogoHeight);
  
  var ySmall = ($(window).scrollTop() * smallSpeed); 
  
  /*var smallPadding = navbarHeight - ySmall;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }
  
  $('.small-logo-container ').css({ "padding-top": smallPadding});
  
  var navOpacity = ySmall / smallLogoHeight; 
  if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  $('.navbar').css({"background-color": navBackColor});
  
  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    $('.navbar').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
    $('.navbar').css({"box-shadow": "none"});
  }*/
  
  
  
}); 

function MVPmobilen() {
    
    ga('send', 'event', 'orderMobile', 'click', 'MVPMobile');
}


function MVPdesktop() {
    
    ga('send', 'event', 'orderDesktop', 'click', 'MVPdesktop');
}

var iosVariable = "sms:/ +4676-6862203 /&body=Vad behöver du:%0a%0aNär vill du ha det:%0a%0aVart vill du ha det:%0a%0aVad du tycker det är värt(ange värdet för ärendet exklusive eventuella inköp):";

var androidVariable = "sms:+4676-6862203?body=Vad behöver du:%0a%0aNär vill du ha det:%0a%0aVart vill du ha det:%0a%0aVad du tycker det är värt(ange värdet för ärendet exklusive eventuella inköp):";

$(function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
console.log("GET OPERATING SYSTEM");
    var isIOS= userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i );
  if(isIOS)
  {
 console.log("IOS");
document.getElementById("sms").href = iosVariable;
      console.log("IOS");
  }
  else if( userAgent.match( /Android/i ) )
  {
console.log("ANDROID");
      document.getElementById("sms").href = androidVariable;
      console.log("Android");
      
  }
});


