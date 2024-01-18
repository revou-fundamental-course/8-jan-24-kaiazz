function hitung() {
    const panjangSisi = parseFloat(document.getElementById('panjangSisi').value);

    if (!isNaN(panjangSisi) && panjangSisi > 0) {
        const luas = panjangSisi * panjangSisi;
        const keliling = 4 * panjangSisi;

        document.getElementById('luas').textContent = luas;
        document.getElementById('keliling').textContent = keliling;
    } 
    else { 
        alert("Input Salah");
    }
}