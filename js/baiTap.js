// Thêm phần tử vào mảng
var soDuocThem = [];


function themSo() {
    var themSoVaoMang = Number(document.getElementById("ThemSo").value);

    soDuocThem.push(themSoVaoMang);
    document.getElementById("txtResultThemSo").innerHTML = soDuocThem;

}
document.getElementById("btnThemSo").onclick = themSo;


//! TÍNH TỔNG CÁC SỐ DƯƠNG

function tongSoDuong() {
    var sum = 0;
    for (var i = 0; i < soDuocThem.length; i++) {
        if (soDuocThem[i] >= 0) {
            sum += Number(soDuocThem[i]);
        }
    }
    document.getElementById("txtResultTongSoDuong").innerHTML = "Tổng số dương: " + sum;

}
document.getElementById("tinhTong").onclick = tongSoDuong;


//! ĐẾM SỐ DƯƠNG
function ketQuaSoDuong() {
    var count = 0;
    for (var i = 0; i < soDuocThem.length; i++) {
        if (soDuocThem[i] > 0) {
            count++;
        }
    }
    document.getElementById("txtResultDemSoDuong").innerHTML = "Số dương: " + count;
}
document.getElementById("demSo").onclick = ketQuaSoDuong;


//! TÌM SỐ NHỎ NHẤT
function ketQuaSoNhoNhat() {
    var min = 0;
    for (var i = 0; i < soDuocThem.length; i++) {
        if (soDuocThem[i] < min) {
            min = soDuocThem[i];
        }
    }
    document.getElementById("txtResultSoNhoNhat").innerHTML = "Số nhỏ nhất là:  " + min;
}
document.getElementById("soNhoNhat").onclick = ketQuaSoNhoNhat;

//! TÌM SỐ DƯƠNG NHỎ NHẤT
function ketQuaSoDuongNhoNhat() {
    var mangPhu = [];
    for (var i = 0; i < soDuocThem.length; i++) {
        if (soDuocThem[i] > 0) {
            mangPhu.push(soDuocThem[i]);
        }
    }

    var minDuong = mangPhu[0];
    for (var k = 0; k < mangPhu.length; k++) {
        if (mangPhu[k] < minDuong) {
            minDuong = mangPhu[k];
        }
    }
    document.getElementById("txtResultSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất là:  " + minDuong;
}
document.getElementById("soDuongNhoNhat").onclick = ketQuaSoDuongNhoNhat;

//! TÌM SỐ CHẴN CUỔI CÙNG
function ketquaSoChanCC(){
    var mangTam = [];

    for(var i = 0 ; i < soDuocThem.length; i++){
        if(soDuocThem[i] % 2 == 0){
            mangTam.push(soDuocThem[i]);
        }
    }
    console.log(mangTam);
    console.log(mangTam.length-1);
    document.getElementById("txtResultSoChanCuoiCung").innerHTML = "Số chẵn cuối cùng:  " + mangTam[mangTam.length - 1];
    

} 
document.getElementById("soChanCuoiCung").onclick = ketquaSoChanCC;


//! ĐỔI CHỖ
function ketQuaDoiCho() {
    var viTriOne = Number(document.getElementById("viTri1").value);
    var viTriTwo = Number(document.getElementById("viTri2").value);

    var bienTam = soDuocThem[viTriTwo];
    soDuocThem[viTriTwo] = soDuocThem[viTriOne];
    soDuocThem[viTriOne] = bienTam;


    document.getElementById("txtResultDoiCho").innerHTML = "Đổi chỗ" + soDuocThem;
}
document.getElementById("doiCho").onclick = ketQuaDoiCho;

//! SẮP XẾP THỨ TỰ
function ketQuaSapXep() {

    for (var i = 0; i < soDuocThem.length - 1; i++) {
        for (var k = 0; k < soDuocThem.length; k++) {
            if (soDuocThem[k] > soDuocThem[k + 1]) {
                var bienTam = soDuocThem[k];
                soDuocThem[k] = soDuocThem[k + 1];
                soDuocThem[k + 1] = bienTam
            }
        }
    }


    document.getElementById("txtResultTangDan").innerHTML = "Mảng sau khi sắp xếp: " + soDuocThem;
}
document.getElementById("SXTangDan").onclick = ketQuaSapXep;


//! SỐ NGUYÊN TỐ ĐẦU TIÊN
function ketQuaSNT() {

    var mangTam = [];

    for (var i = 0; i < soDuocThem.length; i++) {
        if (soDuocThem[i] >= 2) {
            mangTam.push(soDuocThem[i]);
        } else {
            document.getElementById("txtResultSoNguyenTo").innerHTML = "-1";
        }
    }

    for (var k = 0; k < mangTam.length; k++) {
        var checkSNT = true
        if (mangTam[k] == 2 || mangTam[k] == 3) {
            document.getElementById("txtResultSoNguyenTo").innerHTML = mangTam[k];
            break;
        } else if (mangTam[k] % 2 == 0 || mangTam[k] % 3 == 0) {
            checkSNT = false;
        } else {
            document.getElementById("txtResultSoNguyenTo").innerHTML = mangTam[k];
            break;
        }
    }


}
document.getElementById("soNguyenTo").onclick = ketQuaSNT;

//! ĐẾM SỐ NGUYÊN
var themSoVaoMang = [];


function ketQuaThemSo() {
    var themSVM = Number(document.getElementById("soDuocThemVM").value);

    themSoVaoMang.push(themSVM);
    document.getElementById("txtResultSoDuocThemVM").innerHTML = themSoVaoMang;

}
document.getElementById("themSoVM").onclick = ketQuaThemSo;

function checkSoNguyen() {
    var count = 0
    for (var i = 0; i < themSoVaoMang.length; i++) {
        if (Number.isInteger(themSoVaoMang[i]) == true) {
            count++;
        }
    }
    document.getElementById("txtResultDemSoNguyen").innerHTML = "số nguyên: " + count;

}
document.getElementById("demSoNguyen").onclick = checkSoNguyen;

//! SO SÁNH SỐ ÂM VÀ DƯƠNG 

function soSanhSo() {
    var soAm = 0;
    var soDuong = 0;
    for (var i = 0; i < soDuocThem.length; i++) {
        if (soDuocThem[i] < 0) {
            soAm++;
        } else if (soDuocThem[i] > 0) {
            soDuong++;
        }
    }

    if (soAm > soDuong) {
        document.getElementById("txtResultSoSanh").innerHTML = "Số âm > số dương";
    } else if (soAm < soDuong) {
        document.getElementById("txtResultSoSanh").innerHTML = "Số âm < số dương";
    } else {
        document.getElementById("txtResultSoSanh").innerHTML = "Số âm = số dương";
    }
}
document.getElementById("soSanh").onclick = soSanhSo; 
