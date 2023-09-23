const param1 = new URLSearchParams(window.location.search).get('user');
const param2 = new URLSearchParams(window.location.search).get('pass');
const url = `https://www.call2all.co.il/ym/api/Login?username=${param1}&password=${param2}`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.responseStatus === 'OK') {
            return data.token;
        } else {
            return 'Error'
        }
    })
