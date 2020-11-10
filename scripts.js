// window.addEventListener('load',desk);
// function initbody(){
//     let str="";
//     for(let i=1;i<8;i++)
//     {
//         for(let j=1;j<=i;j++)
//         {
//             str+="#";
//         }
//         str+="<br>";
//     }
//     document.write(str);
// }
// function desk()
// {
//     let str="";
//     for(let i=1;i<=8;i++)
//     {
//         for(let j=1;j<=8;j++)
//         {
//             if((i+j)%2==0) str+="#";
//             else str+="&nbsp&nbsp";
//         }
//         str+="<br>";
//     }
//     document.write(str);
// }
let but=document.getElementById("res");
let result=document.getElementById("result");
but.addEventListener("click",Min);
function Min()
{
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    if(a>b) result.innerHTML=b.toString();
    else result.innerHTML=a.toString();
}


