const add=[];
const arrn=[];
const rightvalues=["Uttar Pradesh","Maharashtra","Bihar","West Bangal","Andhra Pradesh","Madhya Predesh","Tamilnadu","Rajasthan"];
const btn=[];
for(var k=0;k<=6;k++)
{
    btn[k+1]=document.getElementsByTagName("button")[k];
}
  function set(value) {
    let sum=0;
    const value1 = document.getElementsByTagName("td")[value - 1].innerHTML;
    const value2 = document.getElementsByTagName("td")[value].innerHTML;
    document.getElementsByTagName("td")[value - 1].innerHTML = value2;
    document.getElementsByTagName("td")[value].innerHTML = value1;
    for(var a=0;a<=7;a++)
    {
        add[a]=document.getElementsByTagName("td")[a].innerHTML;
    }
     for(var l=0;l<=7;l++)
      {
        if(rightvalues[l].trim()===add[l].trim())
        {
            sum++;
        document.getElementsByTagName("td")[l].style.color="green";
        }
        else{
           document.getElementsByTagName("td")[l].style.color="RED";
        }
      }
      if(sum==8){
          alert("✨Hey,you so intelligent✨")
      }
    }
btn[1].addEventListener("click",()=>{
    set(1);
});
btn[2].addEventListener("click",()=>{
    set(2);
});
btn[3].addEventListener("click",()=>{
    set(3);
});
btn[4].addEventListener("click",()=>{
    set(4);
});
btn[5].addEventListener("click",()=>{
    set(5);
});
btn[6].addEventListener("click",()=>{
    set(6);
});
btn[7].addEventListener("click",()=>{
    set(7);
});
