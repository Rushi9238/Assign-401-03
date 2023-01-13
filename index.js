let arr=[
    "geek01.png","geek02.png","geek003.png"
]
let img=document.getElementById("Change-img");
img.src=arr[1];
let i=1;
function left(){
    if(0<i){
        i--;
        // console.log(i,'left');
        img.src=arr[i];
        
    }
    else{
        i=3;
        i--;
        img.src=arr[i];
    }
}
function right(){
    if(i<=2){
        // console.log(i,'right');
        img.src=arr[i];
        i++;
        
    }
    else{
        // console.log('hello');
        i=0;
        img.src=arr[i];
        i++;
    }
}
