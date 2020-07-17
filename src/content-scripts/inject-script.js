console.log("---inject start---")
window.postMessage({"test": '你好！'}, '*');
console.log("---inject end---")