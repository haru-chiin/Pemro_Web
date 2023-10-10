function jumlahkan() {
    var b1 = parseFloat(document.getElementById("b1").value);
    var b2 = parseFloat(document.getElementById("b2").value);
    var hasil = b1 + b2;

    alert("Hasil penjumlahan adalah: " + hasil);
}

function resetInput() {
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
}
