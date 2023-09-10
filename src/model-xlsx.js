function genXlsx() {
  // Contoh data dalam format JSON
  var data = [
    { name: "John", age: 28, city: "New York" },
    { name: "Mike", age: 23, city: "Los Angeles" }
  ];

  // Membuat workbook dan worksheet
  var ws = XLSX.utils.json_to_sheet(data);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Memicu unduhan
  XLSX.writeFile(wb, "output.xlsx");

}