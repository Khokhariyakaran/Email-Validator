console.log("This is my script")

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!");
    resultCont.innerHTML = `<img width='123' src="Loader.svg" alt="">`
    let key = "ema_live_RU37v5vI2eUdyIvJmEmxLmqQc32LNqleZJUpQkcn"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str);
    resultCont.innerHTML = str
})