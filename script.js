$("path").click(function () {
    $("path").css("fill","#FF6F91");
    $(this).css("fill","#fff");
    let name = $(this).attr("name");
    $(".current").html(name,500);

});

// let path = document.querySelectorAll('path');
// let current = document.querySelector(".current");
// path.forEach(el=>{

//     el.addEventListener('click',function(){
//         el.style.fill = "#FF6F91";
//         this.style.fill = "#FFF";
//         let name = this.getAttribute("name");
//         current.innerHTML = name,500;
//         console.log(name);
//     })
// })