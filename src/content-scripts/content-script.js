// chrome.runtime.onMessage.addListener(function (
// 	request,
// 	sender,
// 	sendResponse
// ) {
// 	if (request.cmd == "test") {
// 		alert(request.value);
// 	}
// 	sendResponse("我收到了popup的信息");
// });
// chrome.runtime.sendMessage(
// 	{ greeting: "你好，我是content-script呀，我主动发消息给popup！" },
// 	function (response) {
// 		console.log("收到来自pop的回复：" + response);
// 	}
// );

// function injectCustomJs(jsPath)
// {
// 	jsPath = jsPath || 'content-scripts/inject-script.js';
// 	var temp = document.createElement('script');
// 	temp.setAttribute('type', 'text/javascript');
// 	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
// 	temp.src = chrome.extension.getURL(jsPath);
// 	temp.onload = function()
// 	{
// 		// 放在页面不好看，执行完后移除掉
// 		this.parentNode.removeChild(this);
//     };
// 	(document.head || document.documentElement).appendChild(temp);

// }

// injectCustomJs()

// window.addEventListener(
// 	"message",
// 	function (e) {
// 		console.log("content-script",e.data);
// 	},
// 	false
// );

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd == "test") alert(request.value);
    sendResponse("我收到了你的消息！");
});
