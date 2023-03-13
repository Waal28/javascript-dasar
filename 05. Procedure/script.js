function tambah(a) {
  console.log(a);
}

const nama = tambah("iwal");

var ipa,
  ips,
  mtk,
  bIndo,
  lulusKedokteran,
  lulusInformatika,
  lulusSekolah,
  lulusKeperawatan;

ipa = 70;
ips = 80;
mtk = 90;
bIndo = 60;

function lulusKedokteran(ipa, ips, mtk, bIndo) {
  const nilai = ipa > 70 && ips > 70 && mtk > 70 && bIndo > 70;
  console.log("Lulus Kedokteran = ", nilai);
}

function lulusInformatika(ipa, ips, mtk, bIndo) {
  const nilai = ipa > 70 || ips > 70 || (mtk > 70 && bIndo > 70);
  console.log("Lulus Informatika = ", nilai);
}
function lulusSekolah(ipa, ips, mtk, bIndo) {
  const nilai = (ipa + ips + mtk + bIndo) / 4;
  console.log("Lulus Sekolah = ", nilai);
}
function lulusKeperawatan(lulusKedokteran, lulusSekolah) {
  const nilai = !lulusKedokteran && lulusSekolah;
  console.log("Lulus Keperawatan = ", nilai);
}

lulusKedokteran(80, 70, 90, 98);
lulusInformatika(80, 70, 90, 98);
lulusSekolah(80, 70, 90, 98);
lulusKeperawatan(true, true);
