const codeReader = new ZXing.BrowserQRCodeReader();
const videoElement = document.getElementById('scanner');
const hasilElement = document.getElementById('hasil');

document.addEventListener('DOMContentLoaded', function () {
  codeReader
    .decodeFromVideoDevice(
      undefined,
      videoElement,
      (result, error, controls) => {
        if (result) {
          // Hasil pemindaian tersedia di result.text
          console.log(result.text);
          hasilElement.innerText = result.text;
          controls.stop();
        }
        if (error) {
          console.error(error);
          if (error instanceof ZXing.NotFoundException) {
            console.warn('Tidak ada kode QR ditemukan.');
            hasilElement.innerText = 'Tidak ada kode QR ditemukan.';
          }
        }
      }
    )
    .catch(err => console.error(err));
});
