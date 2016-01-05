# ajax
functions to make ajax request, without depending to jQuery
This utility currently only supports get method.
In future, I will be adding support to other methods as well.

#### Ajax GET Request using ajax.get?

```js

var options = {
	path: "ajax.php",
	data: {
		name: "Jacob Nelson",
		place: "Trivandrum"
	},
	requestHeaders: {
		'X-Test-Header': 'test-value',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*'
	}
}

  ajax.get(options, function(data){
	console.log(JSON.parse(data));
  });
```
  
#### Ajax POST Request using ajax.post?

```js
var options = {
	path: "ajax.php",
	data: {
		name: "Jacob Nelson",
		place: "Trivandrum"
	},
	requestHeaders: {
		'X-Test-Header': 'test-value',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*'
	}
}

  ajax.post(options, function(data){
	console.log(JSON.parse(data));
  });
```

#### Ajax GET Request using ajax.request?

```js

var options = {
	path: "ajax.php",
	method: "GET",
	data: {
		name: "Jacob Nelson",
		place: "Trivandrum"
	},
	requestHeaders: {
		'X-Test-Header': 'test-value',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*'
	}
}

  ajax.request(options, function(data){
	console.log(JSON.parse(data));
  });
```
  
#### Ajax POST Request using ajax.request?

```js
var options = {
	path: "ajax.php",
	method: "POST",	
	data: {
		name: "Jacob Nelson",
		place: "Trivandrum"
	},
	requestHeaders: {
		'X-Test-Header': 'test-value',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*'
	}
}

  ajax.request(options, function(data){
	console.log(JSON.parse(data));
  });
```
