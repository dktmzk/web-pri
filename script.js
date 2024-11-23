document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('helloText').textContent = 'Info Solusi';
    document.getElementById('paragraphText').textContent = 'Penjelasan';
});

window.addEventListener('message', function(event) {
    if (event.data.type === 'changeText') {
        document.getElementById('helloText').textContent = event.data.h1;
        document.getElementById('paragraphText').textContent = event.data.p;
    } else if (event.data.type === 'buttonClicked') {
        document.getElementById('helloText').textContent = event.data.h1;
        document.getElementById('paragraphText').textContent = event.data.p;
    }
});

document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('helloText').textContent = 'Info Solusi';
    document.getElementById('paragraphText').textContent = 'Penjelasan';
});

window.addEventListener('message', function(event) {
    if (event.data.type === 'changeText') {
        document.getElementById('helloText').textContent = event.data.h1;
        document.getElementById('paragraphText').textContent = event.data.p;
    } else if (event.data.type === 'buttonClicked') {
        document.getElementById('helloText').textContent = event.data.h1;
        document.getElementById('paragraphText').textContent = event.data.p;
    }
});

document.getElementById('calculateButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result').textContent = 'Please enter valid numbers in all fields.';
        return;
    }

    if (num1 + num2 !== 100) {
        document.getElementById('result').textContent = 'The sum of Li and Ni percentages must equal 100.';
        return;
    }

    const jumlahLi = num1 / 100 * num3;
    const jumlahNi = num2 / 100 * num3;

    document.getElementById('result').textContent = 'Hasil daur ulang: 99,9% ' + (jumlahLi * 0.999).toFixed(2) + ' kg Li + 99,9% ' + (jumlahNi * 0.999).toFixed(2) + ' kg Ni';
});

document.querySelectorAll('.hoverPath').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        alert('Path element hovered!');
    });
});