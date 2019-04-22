// value of readyState:
// 0: UNSENT
// 1: OPENED
// 2: HEADERS_RECIVED
// 3: LOADING
// 4: DONE

// Normal sending request
let xhr;
// Create XMLHttpRequest Object
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
// Bind the callback of readyState change
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.reponseText);
            console.log('Request Success!');
        } else {
            console.log('Request Error!');
        }
    }
}
// Initialize request
xhr.open('GET', '/api/info');
// Setting header (optional)
xhr.setRequestHeader('Accept', '*/*');
// Send request
xhr.send();

// Sending form data
let xhr = new XMLHttpRequest();
let formData = new FormData();
formData.append('username', 'ada');
formData.append('age', 18);
xhr.open('POSt', '/api/form');
xhr.send(formData);
