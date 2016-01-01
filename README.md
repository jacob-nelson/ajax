# ajax
functions to make ajax request, without depending to jQuery
This utility currently only supports get method.
In future, I will be adding support to other methods as well.

#### How to call?

```js
document.addEventListener("DOMContentLoaded", function(event) { 
  ajax.get(path, function(data){
	console.log(JSON.parse(data));
  });
});
