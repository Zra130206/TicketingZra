alert("Aplikasi tiket");

const nama = prompt("Masukkan Nama anda");
const umur = prompt("Masukkan Umur anda");

if (umur >= 13) {
    const studio = prompt("Pilih Studio");
    if (studio == 'A') {
        alert(`Tiket ${nama} \n Studio A \n Umur ${umur}`);
    } else if (studio == 'B') {
        alert(`Tiket ${nama} \n Studio B \n umur ${umur}`);
    } else if (studio == 'C') {
        alert(`Tiket ${nama} \n Studio C \n umur ${umur}`);
    }
} else {
    alert("Anda masi dibawah umur!!!");z
}