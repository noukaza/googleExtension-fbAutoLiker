

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let msg = {
		txt : "hello you"
	}
chrome.tabs.sendMessage(tab.id,msg);
}