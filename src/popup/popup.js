// chrome.runtime.getBackgroundPage(function callback(backgroundPage){
//     backgroundPage.sayHello("felix")
// })

// const page = chrome.extension.getBackgroundPage()
// page.sayHello("felix")

// function sendMessage(message, callback) {
// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
// 			callback && callback(response);
// 		});
// 	});
// }

// sendMessage({ cmd: "test", value: "hello felix" }, (response) => {
// 	console.log("content说：", response);
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log("收到来自content-script的消息：");
	console.log(request, sender, sendResponse);
	sendResponse("我是pop，我已收到你的消息：" + JSON.stringify(request));
});
