function cekNilai(keaktifan, ujian, absensi) {
  if (keaktifan >= 100 && ujian >= 100 && absensi >= 100) {
    return "Outstanding";
  } else if (keaktifan >= 90 && ujian >= 90 && absensi >= 90) {
    return "Excellent";
  } else if (keaktifan >= 80 && ujian >= 80 && absensi >= 80) {
    return "Good";
  } else {
    return "Participant";
  }
}

console.log(cekNilai(79, 79, 79));
