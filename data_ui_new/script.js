export function home() {
  window.location.href = "/home";
}

export function formatRupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
