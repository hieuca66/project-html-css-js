function loadData(){
    var dh = []
    for (let i = 0; i < data.length; i++  ){
        if ( data[i].dh == true){
           dh.push(data[i])

        }
    }
    load1(dh,'content')
}
function load1(list,id){
    console.log('dong ho =', list)
    console.log(data)
    var load = ''
    for(let i = 0 ; i < list.length ; i++){

        load += `<div class="sp" data-id="${list[i].id}">
            <h1>${list[i].name}</h1>
            
           <img src="./img/sanpham/${list[i].img}" alt="">
           <p>Gia: ${list[i].price}</p>
           
        </div>`
   
        
    }
    document.getElementById(id).innerHTML = load;

}
window.onload = loadData();