document.getElementById('Jumlahkan').addEventListener('click', function() {
    var bilangan1 = parseFloat(document.getElementById('bilangan1').value);
    var bilangan2 = parseFloat(document.getElementById('bilangan2').value);
  
    if (isNaN(bilangan1) || isNaN(bilangan2)) {
      alert('Masukkan bilangan yang valid');
    } else {
      var hasil = bilangan1 + bilangan2;
      alert('Hasil Penjumlahan: ' + hasil);
    }
  });
  
  document.getElementById('Ulang').addEventListener('click', function() {
    document.getElementById('bilangan1').value = '';
    document.getElementById('bilangan2').value = '';
  });  