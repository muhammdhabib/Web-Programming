document.getElementById('formulir').addEventListener('submit', function(event) {
    var namaLengkap = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var alamat = document.getElementById('alamat').value;

    if (!nama || !email || !alamat) {
        alert('Mohon isi semua data!');
        event.preventDefault();
    }
});
