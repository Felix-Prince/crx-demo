// function sayHello(name){
//     console.log("hello",name)
// }

const views = chrome.extension.getViews({ type: "popup" });
if(views.length > 0){
    console.log(views[0].document.body.innerText)
}