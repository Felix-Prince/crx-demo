chrome.runtime.onMessage.addListener(function (
	request,
	sender,
	sendResponse
) {
	if (request.cmd == "test") {
		alert(request.value);
	}
	sendResponse("我收到了popup的信息");
});
