// var pHello = document.getElementById('hello')
// pHello.innerText += " new order";
// pHello.innerText += " again";
// pHello.innerText = "Helloworld";
//
// var pClass = document.getElementsByClassName("pClass");
// pClass[0].innerText += "456";
//
// var tagName = document.getElementsByTagName("p");
// tagName[0].innerText = "world";
//
// tagName[0].outerHTML = '<h2 id="hello">world</h2>';
//
// var span = document.getElementsByTagName("span");
//
// span[0].innerHTML = '<h3>Hello</h3>';

var el = document.getElementById("style");

// el.style.background = "blue";
// el.style.color = "white";
// el.style.width = "200px";

// el.style.cssText = "background:blue; color:white; width:200px";
//
// el.style.cssText += "height:100px";

var myDiv = document.createElement("div");

myDiv.id = "divo";
myDiv.style.background = "red";
myDiv.style.width = "100px";
myDiv.style.height = "100px";
myDiv.innerText = "HELLO";
myDiv.style.color = "white";

document.body.appendChild( myDiv );
