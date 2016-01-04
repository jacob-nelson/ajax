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

	serialize = function(obj) {
	  var str = [];
	  for(var p in obj)
		if (obj.hasOwnProperty(p)) {
		  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
	  return str.join("&");
	}
	
	var get = function(options, callback){
		options.method = "GET";
		request(options, callback)
	}

	var post = function(options, callback){
		options.method = "POST";
		request(options, callback);
	}
	
	var request = function(options, callback){
		cb = callback;
		path = options.path;
		method = options.method;
		if(options.data)
			data = serialize(options.data);
		if(method == "GET"){
			xmlhttp.open(method, path+"?"+data, true);
			data = null;
		}
		else
			xmlhttp.open(method, path, true);
		
		if(method == "POST")
			xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		if(options.requestHeaders){
			requestHeaders = options.requestHeaders;
			for (var key in requestHeaders) {
			  if (requestHeaders.hasOwnProperty(key)) {
				xmlhttp.setRequestHeader(key, requestHeaders[key]);
			  }
			}	
		}
		xmlhttp.send(data); // if data, send(data)		
	}
	
  return {
    get,
	post
  }	
	
})();
