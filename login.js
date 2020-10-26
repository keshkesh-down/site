function login() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
    var username = document.getElementById("login").value;
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    alert(username)
      fetch(`http://127.0.0.1:8080/Server/rest/api/register?username=${username}&email=${mail}&password=${pass}`, requestOptions)
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => alert('error', error)); //Ошибка на пустом месте
}