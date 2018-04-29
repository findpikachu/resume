var APP_ID = '5uYB4cFPpSY8MxPEtEuXsYwI-gzGzoHsz';
var APP_KEY = 'CCuwmOmv8qPTxsCScL3D2yTw';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
let form = document.querySelector("#leaveMessage");
form.addEventListener("submit",(e) => {
    e.preventDefault()
    let content = document.querySelector("[name=content]").value
    document.querySelector("[name=content]").value = ""
    let _name = document.querySelector("[name=name]").value
    if (content === "" || _name === "")
        return
    var Message = AV.Object.extend('message');
    var message = new Message();
    message.save({
        cnt: content,
        name: _name,
    }).then(function(object) {
        console.log("leave message success")
        let li = document.createElement("li")
        li.textContent = `${object.get("name")}:  ${object.get("cnt")}`
        ulMessage.appendChild(li)
    }).catch(() => console.log("leave message fail"))


})

var query = new AV.Query('message');
var ulMessage = document.querySelector("#leaveMessage ul")
query.find().then(function (messages) {
    messages.forEach(function (message) {
        let li = document.createElement("li")
        li.textContent = `${message.get("name")}:  ${message.get("cnt")}`
        ulMessage.appendChild(li)

    })
})