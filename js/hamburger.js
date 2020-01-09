
 let menu=document.getElementById("menu_hide");
 let btn_1=document.getElementById("explore_list_hide");
 let btn_2=document.getElementById("explore_one");
 let btn_3=document.getElementById("explore_two");

function hamburger(){
    let hamburger=document.getElementById("menu_hide");
    menu.classList.toggle("show");
    // document.body.style.overflowY="hidden"
    if(menu.classList.contains("show")==false){
        btn_1.classList.remove("show_bt");
        btn_2.classList.remove("show_bt");
        btn_3.classList.remove("show_bt");
        document.body.style.overflowY="scroll";
    }else if(menu.classList.contains("show")==true){
        document.body.style.overflowY="hidden";
    }
}


function hamburger_bt1(){
    btn_1.classList.toggle("show_bt");
    if( btn_1.classList.contains("show_bt")){
        btn_2.classList.remove("show_bt");
        btn_3.classList.remove("show_bt");
    }
}
function hamburger_bt2(){
    btn_2.classList.toggle("show_bt");
    if( btn_2.classList.contains("show_bt")){
        btn_1.classList.remove("show_bt");
        btn_3.classList.remove("show_bt");
    }
}
function hamburger_bt3(){
    btn_3.classList.toggle("show_bt");
    if( btn_3.classList.contains("show_bt")){
        btn_2.classList.remove("show_bt");
        btn_1.classList.remove("show_bt");
    }
}

     document.getElementById("hamburger").onclick=hamburger;
     document.getElementById("explore_hide").onclick=hamburger_bt1;
     document.getElementById("explore_hide_one").onclick=hamburger_bt2;
     document.getElementById("explore_hide_two").onclick=hamburger_bt3;
 
     $(function(){
  
        // hamburger icon 的切換
        $("button.hamburger").on("click", function(){
          $(this).toggleClass("is-active");
        });
      
      });

