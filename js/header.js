
document.getElementById("header").innerHTML = 
'<a class="navbar-brand" href="./index.html">'+
'<img src="./img/logo/logo.png" alt="" height="50px">'+
'</a>'+
'<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">'+
'<span class="navbar-toggler-icon"></span>'+
'</button>'+
'<div class="collapse navbar-collapse" id="main_nav">'+
'<ul class="navbar-nav ">'+
'<li class="nav-item active"> <a class="nav-link " href="./index.html">Home </a> </li>'+
'<li class="nav-item"><a class="nav-link " href="#"> About </a></li>'+
'<li class="nav-item"><a class="nav-link " href="#"> Contact </a></li>'+

'<li class="nav-item ">'+
   '<a class="nav-link  " href="./nuochoa.html"> Nước Hoa</a>'+
  //  '<ul class="dropdown-menu fade-up nav-links">'+
  //    '<li><a class="dropdown-item" href="#"> Submenu item 1</a></li>'+
  //    '<li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>'+
  //    '<li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>'+
  //  '</ul>'+
'</li>'+
'<li class="nav-item dropdown">'+
'<a class="nav-link " href="./dongho.html" > Đồng Hồ </a>'+
// '<ul class="dropdown-menu fade-up nav-links">'+
//   '<li><a class="dropdown-item" href="#"> Submenu item 1</a></li>'+
//   '<li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>'+
//   '<li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>'+
// '</ul>'+
'</li>'+
'<li class="nav-item dropdown">'+
'<a class="nav-link  " href="./daychuyen.html"> Day Chuyen</a>'+
// '<ul class="dropdown-menu fade-up nav-links">'+
//   '<li><a class="dropdown-item" href="#"> Submenu item 1</a></li>'+
//   '<li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>'+
//   '<li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>'+
// '</ul>'+
'</li>'+
'</ul>'+
'<ul class="navbar-nav ms-auto nav-links">'+
'<form class="d-flex">'+
'<input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">'+
'<button class="btn"><i class="fa-solid fa-magnifying-glass fa-1x"></i> </button>'+
'</form>'+
'<li class="nav-item"><a class="nav-link " href="#"> <i class="fa-solid fa-user"></i> </a></li>'+

'<li class="nav-item  container-shop ">'+
'<header>'+
  
    '<div class="shopping " id="gh">'+
      '<i class="fa-solid fa-cart-shopping"></i>'+

      '<span class="quantity total-soluong">0</span>'+
  '</div>'+
  
  

'</header>'+

   
'</li>'+
'</ul>'+
'</div>'