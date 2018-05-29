
var elements = null ;
chrome.runtime.onMessage.addListener(gotMessge);

function gotMessge(message , sender , sendResponse){
	console.log(message.txt);
	elements = document.getElementsByClassName("_khz _4sz1 _4rw5 _3wv2");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].childNodes[0].getAttribute("aria-pressed") == "false") {
			elements[i].childNodes[0].click();
			console.log("like");

		}else{
			console.log("nothing");
		}
	}
}