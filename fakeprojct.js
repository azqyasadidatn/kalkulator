// qi, kalau bingung ini tuh dipanggil berdasarkan fungsi yang ada di onClicknya
// jadi tinggal dipanggil di js nya aja dan ditambah sedikit logika
function appendValue(value){
    document.getElementById ("displai") .value += value;
}
function cleanDisplay(){
    alert("Aku hapus layarnya  dulu ya~");
    document .getElementById ("displai") .value = "";

} 
//bagian ini cara biar pas si button di clik itu angka nya muncul 
// di display terus bisa di hapus dgn di hubungkan ke clean

function calcute(){ //dibagian ini pengaplikasian hitungannya
    const displai = document.getElementById("displai");
    try{
        displai.value = eval(displai.value);
    }catch{
        displai.value ="Eror";
    }
}