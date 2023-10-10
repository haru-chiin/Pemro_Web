function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
        alert("semua field harus diisi");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Format sesat");
        return false;
    }

    alert("Akun berhasil dibuat!");
    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("alamat").value = "";
    return false;
}

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
