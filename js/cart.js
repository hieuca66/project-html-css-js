let tenSanpham = localStorage.getItem('tenSanpham')
let giatien = localStorage.getItem('giatien')
let hinhanh = localStorage.getItem('hinhanh')


console.log(tenSanpham,giatien,hinhanh)
let tensp = document.getElementsByClassName('name')
for( let i = 0; i < tensp.length; i++){
    tensp[i].innerHTML = tenSanpham

}
let gt = document.getElementsByClassName('price')
for( let i = 0; i < gt.length; i++){
    gt[i].innerHTML = giatien
}
let ha = document.getElementsByClassName('img-item')
for( let i = 0; i < ha.length; i++ ){
    ha[i].src = './img/Sanpham/' + hinhanh
}
