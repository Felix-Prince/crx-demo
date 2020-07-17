// function sayHello(name){
//     console.log("hello",name)
// }

// const views = chrome.extension.getViews({ type: "popup" });
// if(views.length > 0){
//     console.log(views[0].document.body.innerText)
// }

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log("收到来自content-script的消息：");
	console.log(request, sender, sendResponse);
	sendResponse("我是后台，我已收到你的消息：" + JSON.stringify(request));
});
