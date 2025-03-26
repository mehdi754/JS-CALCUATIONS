let BIRINCI_EDED  =  14;
let IKINCI_EDED =  4;
let TOPLAM_SONRASI  =  0;
// let YAZI_NETICE_UCUM  = "NETICENIZ"

function  topla () {
    TOPLAM_SONRASI = BIRINCI_EDED + IKINCI_EDED
    
 document.getElementById("NETICE").innerHTML = "NETICENIZ: "  + TOPLAM_SONRASI}

 function  cixma () {
    TOPLAM_SONRASI = BIRINCI_EDED - IKINCI_EDED
    
 document.getElementById("NETICE").innerHTML = "NETICENIZ: "  + TOPLAM_SONRASI}

 function  vurma () {
    TOPLAM_SONRASI = BIRINCI_EDED * IKINCI_EDED
    
 document.getElementById("NETICE").innerHTML = "NETICENIZ: "  + TOPLAM_SONRASI}

 function  bolme () {
    TOPLAM_SONRASI = BIRINCI_EDED / IKINCI_EDED
    
 document.getElementById("NETICE").innerHTML = "NETICENIZ: "  + TOPLAM_SONRASI}