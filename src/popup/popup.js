// chrome.runtime.getBackgroundPage(function callback(backgroundPage){
//     backgroundPage.sayHello("felix")
// })

// const page = chrome.extension.getBackgroundPage()
// page.sayHello("felix")

function sendMessage(message, callback) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
			callback && callback(response);
		});
	});
}

sendMessage({ cmd: "test", value: "hello felix" }, (response) => {
	console.log("content说：", response);
});
