chrome.runtime.getBackgroundPage(function callback(backgroundPage){
    backgroundPage.sayHello("felix")
})

// const page = chrome.extension.getBackgroundPage()
// page.sayHello("felix")