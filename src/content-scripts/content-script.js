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
chrome.runtime.sendMessage(
	{ greeting: "你好，我是content-script呀，我主动发消息给popup！" },
	function (response) {
		console.log("收到来自pop的回复：" + response);
	}
);
