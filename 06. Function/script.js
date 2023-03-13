var lulusKedokteran, lulusInformatika, lulusSekolah, lulusKeperawatan;

function lulusKedokteran(ipa, ips, mtk, bIndo) {
  const nilai = ipa > 70 && ips > 70 && mtk > 70 && bIndo > 70;
  return nilai;
}

function lulusInformatika(ipa, ips, mtk, bIndo) {
  const nilai = ipa > 70 || ips > 70 || (mtk > 70 && bIndo > 70);
  return nilai;
}
function lulusSekolah(ipa, ips, mtk, bIndo) {
  const nilai = (ipa + ips + mtk + bIndo) / 4;
  return nilai;
}
function lulusKeperawatan(lulusKedokteran, lulusSekolah) {
  const nilai = !lulusKedokteran && lulusSekolah;
  return nilai;
}

console.log("Lulus Kedokteran = ", lulusKedokteran(80, 70, 90, 98));
console.log("Lulus Informatika = ", lulusInformatika(80, 70, 90, 98));
console.log("Lulus Sekolah = ", lulusSekolah(80, 70, 90, 98));
console.log("Lulus Keperawatan = ", lulusKeperawatan(true, true));
