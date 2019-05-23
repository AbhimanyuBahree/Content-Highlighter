alert('Welcome');
var s=0;
var flag=0;
var flag2=0;
var z,x;
var px; var py;
var idx=0;
var data=[];
$(function(){

$("#one")
.on("mouseup",function(event){
s=0;
console.log(" s= "+s);
console.log("mouseup");
     flag=0;
var options=document.getElementsByClassName("endgame")[0];
    x=window.getSelection().toString();
//alert(x);
     y=x.fontcolor('pink');
z='<mark style="background-color:pink;" id="'+idx.toString()+'"> '+x+" </mark>";
   if(x.length !== 0)
    {
px=event.pageX.toString()
 py=(event.pageY-40).toString()
 //alert(window.getSelection());
//alert(event.pageX+" "+event.pageY);
console.log(event.pageX);
console.log(event.pageY);
options.style.cssText="display: block;margin-left: "+event.pageX.toString()+"px;margin-top: "+(event.pageY-40).toString()+"px;width:80px;top: 20px;backgroundcolor:rgba(205,133,63,0.8);";
console.log(z);
console.log(x);
/*$(document.body).mousedown(function(event){
document.getElementById("one").innerHTML =document.getElementById("one").innerHTML.replace(z,x);
//alert(document.getElementById("one").innerHTML);


//alert("yo");
});*/

}


});

$("body").click(function(){
//alert("yoyo");
console.log("body click");
flag=flag+1;
if (flag >= 2)
{
var options=document.getElementsByClassName("endgame")[0];
options.style.display='none';
flag=0;
}
});

$("#btn").click(function(){
flag=0;
console.log("button click");

var options=document.getElementsByClassName("endgame")[0];
if(s === 0){
console.log("s = "+s);
s=1;
//highlight
console.log(z);
console.log(x);
data.push({pageX:px,pageY:py,replacetext:z,text:x,id:idx.toString()});
console.log(data);

document.getElementById("one").innerHTML =document.getElementById("one").innerHTML.replace(x,z);
var t=idx.toString();
$(document)
.on('mouseover', 'p > #'+t, function()
{
s=1;
console.log("mark selected text");
console.log("s = "+ s);
var options=document.getElementsByClassName("endgame")[0];
var saveindex;
for(var i=0;i<data.length;i++)
{
  if(data[i].id === t)
    {
          saveindex=i;
          break;
    }
}
options.style.cssText="display: block;margin-left: "+data[saveindex].pageX+"px;margin-top: "+data[saveindex].pageY+"px;width:90px;top: 50px;backgroundcolor:rgba(205,133,63,0.8);";
z=data[saveindex].replacetext;
x=data[saveindex].text;
flag=1;

})
.on('mouseover', '#btn', function()
{

console.log("mark button");
var options=document.getElementsByClassName("endgame")[0];
options.style.display='block';
var saveindex;
for(var i=0;i<data.length;i++)
{
  if(data[i].id === t)
    {
          saveindex=i;
          break;
    }
}
z=data[saveindex].replacetext;
x=data[saveindex].text;

flag=1;

})
.on('mouseout','p > #'+t,function(){
console.log("mark 2");
var options=document.getElementsByClassName("endgame")[0];
options.style.display='none';
});
idx=idx+1;
//alert("no");
}
else if(s === 1){
//alert("yes");
// dehighlight
console.log("s = "+s);
console.log(z);
console.log(x);
console.log(document.getElementById("one").innerHTML.replace(z,x));
document.getElementById("one").innerHTML =document.getElementById("one").innerHTML.replace(z,x);
options.style.display='none';
s=0;
}
});
/* $(document)
.on('mouseover', 'p > #one1', function()
{
console.log("mark selected text");
var options=document.getElementsByClassName("endgame")[0];
options.style.display='block';
flag=1;
})
.on('mouseover', '#btn', function()
{
console.log("mark button");
var options=document.getElementsByClassName("endgame")[0];
options.style.display='block';
flag=1;
})
.on('mouseout','p > #one1',function(){
console.log("mark 2");
var options=document.getElementsByClassName("endgame")[0];
options.style.display='none';
});*/



$("#two").mouseup(function(event){
    var x=window.getSelection().toString();
   if(x.length !== 0)
    {
 //alert(window.getSelection());
//alert(event.pageX+" "+event.pageY);
    }
 var y=x.fontcolor('purple');

document.getElementById("two").innerHTML =document.getElementById("two").innerHTML.replace(x,y);

$(document.body).mousedown(function(event){
document.getElementById("two").innerHTML =document.getElementById("two").innerHTML.replace(y,x);
//alert("yo");

});

});

$("#three").mouseup(function(event){
    var x=window.getSelection().toString();
   if(x.length !== 0)
    {
 //alert(window.getSelection());
//alert(event.pageX+" "+event.pageY);
    }
 var y=x.fontcolor('green');
document.getElementById("three").innerHTML =document.getElementById("three").innerHTML.replace(x,y);

$(document.body).mousedown(function(event){
document.getElementById("three").innerHTML =document.getElementById("three").innerHTML.replace(y,x);
//alert("yo");
});

});

$("#four").mouseup(function(event){
    var x=window.getSelection().toString();
   if(x.length !== 0)
    {
 //alert(window.getSelection());
//alert(event.pageX+" "+event.pageY);
    }
 var y=x.fontcolor('orange');
document.getElementById("four").innerHTML =document.getElementById("four").innerHTML.replace(x,y);

$(document.body).mousedown(function(event){
document.getElementById("four").innerHTML =document.getElementById("four").innerHTML.replace(y,x);
//alert("yo");
});

});



});
