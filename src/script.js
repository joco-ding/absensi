const message = 'Hello world' // Try edit me

elemenRoot.innerHTML = message
const elButtonXls = elemenButton
elButtonXls.id = "download-xlsx"
elButtonXls.innerText = 'Buat Xlsx'
elemenRoot.appendChild(elButtonXls)

document.getElementById("download-xlsx").addEventListener("click", genXlsx)

// Log to console
console.log(message)