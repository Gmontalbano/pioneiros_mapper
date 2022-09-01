
function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {
    a = 'event.preventDefault()'
    let url = "http://localhost:1337/api/pessoas"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    console.log(nome)
    console.log(email)

    body = {"data":{
        "name": nome,
        "email": email
        }
    }


    fazPost(url, body)
}