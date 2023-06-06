function loadData(){
    var ĐH = []
    for (let i = 0; i < data.length; i++  ){
        if ( data[i].ĐH == true){
            ĐH.push( data[i])

        }
    }
    load(ĐH,'content')
}
function load(list,id){
    var load = ''
    for(let i = 0 ; i < list.length ; i++){
        load += `<div class="sp" data-id="${list[i].id}}">
            <h1>${list[i].name}</h1>
            
           <img src="./img/sanpham/${list[i].img}" alt="">
           <p>Gia: ${list[i].price}</p>
           
        </div>`
    //     load += '<div class="container margin-bottom col-xs-12 col-sm-6 col-md-3">'+
    //     '<div class="card center"' +' data-id='+list[i].id + '>'+
    //         '<img class="image" style="width: 100%;" src="./img/Sanpham/'+ list[i].image +'" alt="">'+
    //         '<h5>'+ list[i].name+'</h5>'+
    //         '<h6 class="text-green" style="padding-bottom: 16px;">'+''+list[i].price+'</h6>'+
    //         '<button>Add To Card</button>;'+
            
    //     '</div>'+
    // '</div>'
        
    }
    document.getElementById(id).innerHTML = load;

}
window.onload = loadData();