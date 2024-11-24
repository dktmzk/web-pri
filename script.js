let currentContent = '';
let currentTitle = '';

document.getElementById('myButton').addEventListener('click', function() {
    const text1 = 'Proses daur ulang baterai EV bekas dimulai dari discharging, pembongkaran, crushing, dan penyaringan, dilanjutkan dengan leaching menggunakan H2SO4. Selanjutnya, mangan diendapkan sebagai MnO2 di Settling Tank Mn, kemudian Al dan Fe dipisahkan menggunakan D2EHPA 10%. Proses pemisahan berikutnya menggunakan PC-88A di Ni Solvent Extraction untuk memisahkan nikel dan lithium, dimana lithium diproses menjadi Li2CO3 di Li Settling Tank, sedangkan nikel dimurnikan melalui Li Scrubber Column dan Ni Stripping Column menjadi NiSO4. Secara paralel, kobalt dipisahkan menggunakan PC-88A 60% Na melalui Co Solvent Extraction dan dimurnikan menjadi CoSO4, dengan sistem daur ulang terintegrasi untuk mengoptimalkan perolehan logam berharga.';
    const text2 = 'Selamat datang di platform simulasi daur ulang baterai kendaraan listrik! Platform ini dirancang untuk membantu Anda memahami proses daur ulang baterai EV secara komprehensif dan interaktif. Anda dapat menjelajahi diagram alir proses, mencoba simulator untuk melihat hasil perolehan logam berharga, dan berkonsultasi dengan chatbot kami untuk informasi lebih detail tentang proses daur ulang maupun rekomendasi kebijakan terkait. Kami berharap platform ini dapat menjadi sumber pengetahuan yang bermanfaat bagi siapapun yang tertarik dengan keberlanjutan industri kendaraan listrik di Indonesia.';
    
    const title1 = 'Proses Daur Ulang Baterai EV Bekas';
    const title2 = 'Sistem Daur Ulang Baterai EV Bekas K36';

    const newText = currentContent === text1 ? text2 : text1;
    const newTitle = currentTitle === title1 ? title2 : title1;

    document.getElementById('helloText').textContent = newTitle;
    document.getElementById('paragraphText').innerHTML = newText.replace(/\n/g, '<br>');

    currentContent = newText;
    currentTitle = newTitle;
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

function calculate() {    
    const b2 = parseFloat(document.getElementById('b2').value);
    const b3 = parseFloat(document.getElementById('b3').value);
    const b4 = parseFloat(document.getElementById('b4').value);
    const b5 = parseFloat(document.getElementById('b5').value);
    const b6 = parseFloat(document.getElementById('b6').value);
    const b7 = parseFloat(document.getElementById('b7').value);
    const b9 = parseFloat(document.getElementById('b9').value);

    console.log(b2);

    if (isNaN(b2) || isNaN(b3) || isNaN(b4) || isNaN(b5) || isNaN(b6) || isNaN(b7) || isNaN(b9) ||
    b2 < 0 || b3 < 0 || b4 < 0 || b5 < 0 || b6 < 0 || b7 < 0 || b9 <= 0) {
    document.getElementById('result').textContent = 'Pastikan mengisi semua kolom dengan angka valid.';
    return;
}

    if (b2 + b3 + b4 + b5 + b6 + b7 !== 100) {
        document.getElementById('result').textContent = 'Pastikan total komposisi baterai adalah 100%.';
        return;
    }

    document.getElementById('result').textContent = '';

    const c2 = b2 / 100 * b9;
    const c3 = b3 / 100 * b9;
    const c4 = b4 / 100 * b9;
    const c5 = b5 / 100 * b9;
    const c6 = b6 / 100 * b9;
    const c7 = b7 / 100 * b9;
    const c8 = c2 + c3 + c4 + c5 + c6 + c7;

    let d10Low = 0;
    let d10High = 100;
    let d10 = (d10Low + d10High) / 2;
    let e4 = 0;

    while (Math.abs(e4 - 99) > 0.01) {
        let d2 = (100 - d10) / 100 * c2;
        let d3 = (100 - d10) / 100 * c3;
        let d4 = d10 / 100 * c4;
        let d5 = (100 - d10) / 100 * c5;
        let d6 = (100 - d10) / 100 * c6;
        let d7 = (100 - d10) / 100 * c7;
        let d8 = d2 + d3 + d4 + d5 + d6 + d7;

        e4 = d4 / d8 * 100;
        console.log("e4: " + e4);
        

        if (e4 < 99) {
            d10Low = d10;
        } else {
            d10High = d10;
        }
        d10 = (d10Low + d10High) / 2;
    }

    let d2 = (100 - d10) / 100 * c2;
    let d3 = (100 - d10) / 100 * c3;
    let d4 = d10 / 100 * c4;
    let d5 = (100 - d10) / 100 * c5;
    let d6 = (100 - d10) / 100 * c6;
    let d7 = (100 - d10) / 100 * c7;
    let d8 = d2 + d3 + d4 + d5 + d6 + d7;

    const e1 = 'Produk Mn';
    let e2 = d2 / d8 * 100;
    let e3 = d3 / d8 * 100;
    e4 = d4 / d8 * 100;
    let e5 = d5 / d8 * 100;
    let e6 = d6 / d8 * 100;
    let e7 = d7 / d8 * 100;
    let e9 = d8;

    const resultTable = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    const rows = resultTable.getElementsByTagName('tr');

    rows[0].cells[2].textContent = e2.toFixed(3);
    rows[1].cells[2].textContent = e3.toFixed(3);
    rows[2].cells[2].textContent = e4.toFixed(3);
    rows[3].cells[2].textContent = e5.toFixed(3);
    rows[4].cells[2].textContent = e6.toFixed(3);
    rows[5].cells[2].textContent = e7.toFixed(3);
    rows[6].cells[2].textContent = e9.toFixed(3);

    const f2 = c2 - d2;
    const f3 = c3 - d3;
    const f4 = c4 - d4;
    const f5 = c5 - d5;
    const f6 = c6 - d6;
    const f7 = c7 - d7;
    const f8 = c8 - d8;

    const g10 = 99.9
    const g2 = (100 - g10) / 100 * f2;
    const g3 = (100 - g10) / 100 * f3;
    const g4 = (100 - g10) / 100 * f4;
    const g5 = (100 - g10) / 100 * f5;
    const g6 = g10 / 100 * f6;
    const g7 = g10 / 100 * f7;
    const g8 = g2 + g3 + g4 + g5 + g6 + g7;

    const h1 = 'Produk LO';
    const h2 = g2 / g8 * 100;
    const h3 = g3 / g8 * 100;
    const h4 = g4 / g8 * 100;
    const h5 = g5 / g8 * 100;
    const h6 = g6 / g8 * 100;
    const h7 = g7 / g8 * 100;
    const h9 = g8;

    rows[0].cells[3].textContent = h2.toFixed(3);
    rows[1].cells[3].textContent = h3.toFixed(3);
    rows[2].cells[3].textContent = h4.toFixed(3);
    rows[3].cells[3].textContent = h5.toFixed(3);
    rows[4].cells[3].textContent = h6.toFixed(3);
    rows[5].cells[3].textContent = h7.toFixed(3);
    rows[6].cells[3].textContent = h9.toFixed(3);

    const i2 = f2 - g2;
    const i3 = f3 - g3;
    const i4 = f4 - g4;
    const i5 = f5 - g5;
    const i6 = f6 - g6;
    const i7 = f7 - g7;
    const i8 = i2 + i3 + i4 + i5 + i6 + i7;

    let j10Low = 0;
    let j10High = 100;
    let j10 = (j10Low + j10High) / 2;
    let k5 = 0;
    let iterationCount = 0;

    while (Math.abs(k5 - 99.9) > 0.01 && iterationCount < 100) {
        let j2 = (100 - j10) / 100 * i2;
        let j3 = (100 - j10) / 100 * i3;
        let j4 = (100 - j10) / 100 * i4;
        let j5 = j10 / 100 * i5;
        let j6 = (100 - j10) / 100 * i6;
        let j7 = (100 - j10) / 100 * i7;
        let j8 = j2 + j3 + j4 + j5 + j6 + j7;

        k5 = j5 / j8 * 100;
        console.log("k5: " + k5);

        if (k5 < 99.9) {
            j10Low = j10;
        } else {
            j10High = j10;
        }
        j10 = (j10Low + j10High) / 2;
        iterationCount++;
    }

    let j2 = (100 - j10) / 100 * i2;
    let j3 = (100 - j10) / 100 * i3;
    let j4 = (100 - j10) / 100 * i4;
    let j5 = j10 / 100 * i5;
    let j6 = (100 - j10) / 100 * i6;
    let j7 = (100 - j10) / 100 * i7;
    let j8 = j2 + j3 + j4 + j5 + j6 + j7;

    const k1 = 'Produk Co';
    let k2 = j2 / j8 * 100;
    let k3 = j3 / j8 * 100;
    let k4 = j4 / j8 * 100;
    k5 = j5 / j8 * 100;
    let k6 = j6 / j8 * 100;
    let k7 = j7 / j8 * 100;
    let k9 = j8;

    rows[0].cells[4].textContent = k2.toFixed(3);
    rows[1].cells[4].textContent = k3.toFixed(3);
    rows[2].cells[4].textContent = k4.toFixed(3);
    rows[3].cells[4].textContent = k5.toFixed(3);
    rows[4].cells[4].textContent = k6.toFixed(3);
    rows[5].cells[4].textContent = k7.toFixed(3);
    rows[6].cells[4].textContent = k9.toFixed(3);


    const l2 = i2 - j2;
    const l3 = i3 - j3;
    const l4 = i4 - j4;
    const l5 = i5 - j5;
    const l6 = i6 - j6;
    const l7 = i7 - j7;
    const l8 = l2 + l3 + l4 + l5 + l6 + l7;

    let m10Low = 0;
    let m10High = 100;
    let m10 = (m10Low + m10High) / 2;
    let n3 = 0;
    iterationCount = 0;

    while (Math.abs(n3 - 99.8) > 0.01 && iterationCount < 100) {
        let m2 = (100 - m10) / 100 * l2;
        let m3 = m10 / 100 * l3;
        let m4 = (100 - m10) / 100 * l4;
        let m5 = (100 - m10) / 100 * l5;
        let m6 = (100 - m10) / 100 * l6;
        let m7 = (100 - m10) / 100 * l7;
        let m8 = m2 + m3 + m4 + m5 + m6 + m7;

        n3 = m3 / m8 * 100;
        console.log("n3: " + n3);

        if (n3 < 99.8) {
            m10Low = m10;
        } else {
            m10High = m10;
        }
        m10 = (m10Low + m10High) / 2;
        iterationCount++;
    }

    let m2 = (100 - m10) / 100 * l2;
    let m3 = m10 / 100 * l3;
    let m4 = (100 - m10) / 100 * l4;
    let m5 = (100 - m10) / 100 * l5;
    let m6 = (100 - m10) / 100 * l6;
    let m7 = (100 - m10) / 100 * l7;
    let m8 = m2 + m3 + m4 + m5 + m6 + m7;

    const n1 = 'Produk Ni';
    let n2 = m2 / m8 * 100;
    n3 = m3 / m8 * 100;
    let n4 = m4 / m8 * 100;
    let n5 = m5 / m8 * 100;
    let n6 = m6 / m8 * 100;
    let n7 = m7 / m8 * 100;
    let n9 = m8;

    rows[0].cells[5].textContent = n2.toFixed(3);
    rows[1].cells[5].textContent = n3.toFixed(3);
    rows[2].cells[5].textContent = n4.toFixed(3);
    rows[3].cells[5].textContent = n5.toFixed(3);
    rows[4].cells[5].textContent = n6.toFixed(3);
    rows[5].cells[5].textContent = n7.toFixed(3);
    rows[6].cells[5].textContent = n9.toFixed(3);

    const o2 = l2 - m2;
    const o3 = l3 - m3;
    const o4 = l4 - m4;
    const o5 = l5 - m5;
    const o6 = l6 - m6;
    const o7 = l7 - m7;
    const o8 = o2 + o3 + o4 + o5 + o6 + o7;

    let p10Low = 0;
    let p10High = 100;
    let p10 = (p10Low + p10High) / 2;
    let q2 = 0;

    while (Math.abs(q2 - 99.99) > 0.01) {
        let p2 = p10 / 100 * o2;
        let p3 = (100 - p10) / 100 * o3;
        let p4 = (100 - p10) / 100 * o4;
        let p5 = (100 - p10) / 100 * o5;
        let p6 = (100 - p10) / 100 * o6;
        let p7 = (100 - p10) / 100 * o7;
        let p8 = p2 + p3 + p4 + p5 + p6 + p7;

        q2 = p2 / p8 * 100;
        console.log("q2: " + q2);

        if (q2 < 99.99) {
            p10Low = p10;
        } else {
            p10High = p10;
        }
        p10 = (p10Low + p10High) / 2;
    }

    let p2 = p10 / 100 * o2;
    let p3 = (100 - p10) / 100 * o3;
    let p4 = (100 - p10) / 100 * o4;
    let p5 = (100 - p10) / 100 * o5;
    let p6 = (100 - p10) / 100 * o6;
    let p7 = (100 - p10) / 100 * o7;
    let p8 = p2 + p3 + p4 + p5 + p6 + p7;

    const q1 = 'Produk Li';
    let q3 = p3 / p8 * 100;
    let q4 = p4 / p8 * 100;
    let q5 = p5 / p8 * 100;
    let q6 = p6 / p8 * 100;
    let q7 = p7 / p8 * 100;
    let q9 = p8;

    rows[0].cells[6].textContent = q2.toFixed(3);
    rows[1].cells[6].textContent = q3.toFixed(3);
    rows[2].cells[6].textContent = q4.toFixed(3);
    rows[3].cells[6].textContent = q5.toFixed(3);
    rows[4].cells[6].textContent = q6.toFixed(3);
    rows[5].cells[6].textContent = q7.toFixed(3);
    rows[6].cells[6].textContent = q9.toFixed(3);


    const r2 = o2 - p2;
    const r3 = o3 - p3;
    const r4 = o4 - p4;
    const r5 = o5 - p5;
    const r6 = o6 - p6;
    const r7 = o7 - p7;
    const r8 = r2 + r3 + r4 + r5 + r6 + r7;

    console.log(o2, p2);
    console.log(o3, p3);
    console.log(o4, p4);
    console.log(o5, p5);
    console.log(o6, p6);
    console.log(o7, p7);
    console.log(r2, r3, r4, r5, r6, r7, r8);



    const s1 = 'Waste';
    const s2 = r2 / r8 * 100;
    const s3 = r3 / r8 * 100;
    const s4 = r4 / r8 * 100;
    const s5 = r5 / r8 * 100;
    const s6 = r6 / r8 * 100;
    const s7 = r7 / r8 * 100;
    const s9 = r8;

    rows[0].cells[7].textContent = s2.toFixed(3);
    rows[1].cells[7].textContent = s3.toFixed(3);
    rows[2].cells[7].textContent = s4.toFixed(3);
    rows[3].cells[7].textContent = s5.toFixed(3);
    rows[4].cells[7].textContent = s6.toFixed(3);
    rows[5].cells[7].textContent = s7.toFixed(3);
    rows[6].cells[7].textContent = s9.toFixed(3);

}

document.getElementById('calculateButton').addEventListener('click', calculate);

document.querySelectorAll('.hoverPath').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        alert('Path element hovered!');
    });
});