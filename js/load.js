function loadData(){
    var best = []
    for (let i = 0; i < data.length; i++  ){
        if ( data[i].best == true){
            best.push( data[i])

        }
    }
    load(best,'content')
}
function load(list,id){
    var load = ''
    for(let i = 0 ; i < list.length ; i++){
        load += `<div class="sp" data-id="${list[i].id}}">
            <h1>${list[i].name}</h1>
            
           <img src="./img/sanpham/${list[i].img}" alt="">
           <p>Gia: ${list[i].price}</p>
           
        </div>`
   
        
    }
    document.getElementById(id).innerHTML = load;

}
window.onload = loadData();