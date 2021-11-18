const findBarcode = (barcode, barcodeList) =>  { 
  return  barcodeList.find(item => item === barcode);
}

const findBarcodeIndex = (barcode, barcodeList) =>  { 
  return  barcodeList.findIndex(item => item === barcode);
}

module.exports = findBarcode;