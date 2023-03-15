const ipa = 91,
  ips = 91,
  bIndo = 91,
  mtk = 91,
  jmlhSertifikat = 7;

if (ipa > 90 && ips > 90 && bIndo > 90 && mtk > 90) {
  console.log("Lulus Negeri");
  if (jmlhSertifikat > 5) {
    console.log("Jurusan Informatika");
  } else if (jmlhSertifikat > 10) {
    console.log("Jurusan Keokteran");
  }
} else if (ipa > 70 && ips > 70 && bIndo > 70 && mtk > 70) {
  console.log("Lulus Swasta");
} else {
  console.log("Ga lulus");
}

switch (jmlhSertifikat) {
  case 10:
    console.log("Dapat beasiswa");
    break;

  default:
    console.log("Ga dapat beasiswa");
    break;
}
