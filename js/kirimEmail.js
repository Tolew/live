function kirimEmail() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var subjek = document.getElementById('subjek').value;
    var pesan = document.getElementById('pesan').value;

    var mailtoLink = 'mailto:brotherstradeinter@gmail.com' +
      '?subject=' + encodeURIComponent(subjek) +
      '&body=' + encodeURIComponent('Nama: ' + nama + '\nEmail: ' + email + '\n\nPesan:\n' + pesan);

    window.location.href = mailtoLink;
  }