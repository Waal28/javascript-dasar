var ipa,ips,mtk,bIndo,lulusKedokteran,lulusInformatika,lulusSekolah,lulusKeperawatan;

ipa = 70;
ips = 80;
mtk = 90;
bIndo = 60;

lulusKedokteran = ipa > 70 && ips > 70 && mtk > 70 && bIndo > 70;
lulusInformatika = ipa > 70 || ips > 70 || mtk > 70 && bIndo > 70;
lulusSekolah = (ipa + ips + mtk + bIndo) / 4;
lulusKeperawatan = !lulusKedokteran && lulusSekolah;

console.log("Lulus Kedokteran = ",lulusKedokteran);
console.log("Lulus Informatika = ",lulusInformatika);
console.log("Lulus Sekolah = ",lulusSekolah);
console.log("Lulus Keperawatan = ",lulusKeperawatan);