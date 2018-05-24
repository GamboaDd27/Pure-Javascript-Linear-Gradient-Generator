var css=document.querySelector("h3");
var color1=document.querySelector("#color1");
var color2=document.querySelector("#color2");
var body=document.querySelector("body");
var button=document.querySelector(".button1");
class gradRegExp1 extends RegExp {
  [Symbol.match](str) {
    var result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      console.log(result)
    }
    return 'INVALID';
  }
}
var unparsedCss=window.getComputedStyle(document.body,null).getPropertyValue('background');
var gradientRegex=/linear-gradient\(.+\)/gm; //Regular expression to parse the gradient part of the css
css.textContent=unparsedCss.match(gradientRegex);
function setGradient(e){
	body.style.background="linear-gradient(to right, "+ color1.value+", "
	+color2.value+")";
	button.style.background="linear-gradient(to right, "+ color1.value+", "
	+color2.value+")";
	css.textContent=body.style.background+";";
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(a) {
    return "#" + componentToHex(a[0]) + componentToHex(a[1]) + componentToHex(a[2]);
}
function randomRGB(){
	return [(Math.floor(Math.random() * 255) + 1),+ (Math.floor(Math.random() * 255) + 1),+(Math.floor(Math.random() * 255) + 1)]
}
function randomHex(){
	return rgbToHex(randomRGB());
}
function randomGradient(){
	color1.value=randomHex();
	color2.value=randomHex();
}

color1.addEventListener("change",setGradient);
color2.addEventListener("change",setGradient);
console.log(window.getComputedStyle(document.body,null).getPropertyValue('background'));
button.addEventListener("click",randomGradient);
button.addEventListener("click",setGradient);