let result = 0;
let detailedResults = [];

if(localStorage.getItem('myResult')) {
    result = parseInt(localStorage.getItem('myResult'));
    document.getElementById('result').innerHTML = result;
}


if(localStorage.getItem('details')) {
    detailedResults = JSON.parse(localStorage.getItem('details'));

    for (const result of detailedResults) {
        const listItem = document.createElement('li');
        listItem.innerHTML = result;

        document.getElementById('detailedResults').appendChild(listItem);
    }
}


addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    const number = document.getElementById('number').value;

    result = result + parseInt(number);
    localStorage.setItem('myResult', result);

    document.getElementById('result').innerHTML = result;


    detailedResults.push(number);
    localStorage.setItem('details', JSON.stringify(detailedResults));


    const listItem = document.createElement('li');
    listItem.innerHTML = number;

    document.getElementById('detailedResults').appendChild(listItem);
});

resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function () {
    localStorage.clear();
    window.location = '/';
});