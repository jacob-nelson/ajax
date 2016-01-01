var ajax = (function () {
    var xmlhttp;
	var cb;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
 			   cb(xmlhttp.responseText);
           }
           else if(xmlhttp.status == 400) {
              cb('There was an error 400');
           }
           else {
               cb('something else other than 200 was returned');
           }
        }
    }
	
	var get = function(path, callback){
		cb = callback;
		xmlhttp.open("GET", path, true);
		xmlhttp.send();
	}
	
  return {
    get
  }	
	
})();
