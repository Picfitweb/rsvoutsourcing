let navegador = navigator.userAgent;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
	console.log("Estás usando un dispositivo móvil!!");
	console.log(navigator.userAgent);
} else {
	console.log("No estás usando un móvil");
}

var options = {
	enableHighAccuracy: true,
	timeout: 6000,
	maximumAge: 0
  };
  
  navigator.geolocation.getCurrentPosition( success, error, options );
  
  function success(position) {
	var coordenadas = position.coords;
  
	console.log('Tu posición actual es:');
	console.log('Latitud : ' + coordenadas.latitude);
	console.log('Longitud: ' + coordenadas.longitude);
	console.log('Más o menos ' + coordenadas.accuracy + ' metros.');
  };
  
  function error(error) {
	console.warn('ERROR(' + error.code + '): ' + error.message);
  };

  var parser = new UAParser(); 
  parser.getResult()