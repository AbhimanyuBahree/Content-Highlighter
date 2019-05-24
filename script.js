alert('Welcome');
var s=0;
var flag=0;
var paraselect="";
var z,x;
var px; var py;
var idx=0;
var data=[];
$(function(){

$("#one")
.on("mouseup",function(event){

console.log("mouseup");
     flag=1;
var options=document.getElementsByClassName("endgame")[0];
    x=window.getSelection().toString();
     y=x.fontcolor('yellow');
z='<mark style="background-color:#90EE90;" id="'+idx.toString()+'"> '+x+" </mark>";
   if(x.length !== 0)
    {
paraselect="one";
console.log(" s= "+s);
      s=0;
     flag=0;
px=(event.pageX).toString();
 py=(event.pageY).toString();
options.style.cssText="display: block;width:80px;top: "+event.pageY.toString() +"px;left: "+event.pageX.toString()+"px;backgroundcolor:rgba(205,133,63,0.8);";

}


});

$("#two")
.on("mouseup",function(event){

console.log("mouseup");
     flag=1;
var options=document.getElementsByClassName("endgame")[0];
    x=window.getSelection().toString();
     y=x.fontcolor('pink');
z='<mark style="background-color:#90EE90;" id="'+idx.toString()+'"> '+x+" </mark>";
   if(x.length !== 0)
    {
paraselect="two";
console.log(" s= "+s);
      s=0;
     flag=0;
px=(event.pageX).toString();
 py=(event.pageY).toString();
options.style.cssText="display: block;width:80px;top: "+event.pageY.toString() +"px;left: "+event.pageX.toString()+"px;backgroundcolor:rgba(205,133,63,0.8);";

}


});

$("#three")
.on("mouseup",function(event){

console.log("mouseup");
     flag=1;
var options=document.getElementsByClassName("endgame")[0];
    x=window.getSelection().toString();
     y=x.fontcolor('pink');
z='<mark style="background-color:#90EE90;" id="'+idx.toString()+'"> '+x+" </mark>";
   if(x.length !== 0)
    {
paraselect="three";
console.log(" s= "+s);
      s=0;
     flag=0;
px=(event.pageX).toString();
 py=(event.pageY).toString();
options.style.cssText="display: block;width:80px;top: "+event.pageY.toString() +"px;left: "+event.pageX.toString()+"px;backgroundcolor:rgba(205,133,63,0.8);";

}


});

$("#four")
.on("mouseup",function(event){

console.log("mouseup");
     flag=1;
var options=document.getElementsByClassName("endgame")[0];
    x=window.getSelection().toString();
     y=x.fontcolor('pink');
z='<mark style="background-color:#90EE90;" id="'+idx.toString()+'"> '+x+" </mark>";
   if(x.length !== 0)
    {
paraselect="four";
console.log(" s= "+s);
      s=0;
     flag=0;
px=(event.pageX).toString();
 py=(event.pageY).toString();
options.style.cssText="display: block;width:80px;top: "+event.pageY.toString() +"px;left: "+event.pageX.toString()+"px;backgroundcolor:rgba(205,133,63,0.8);";

}


});

$("body").click(function(){

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

data.push({pageX:px,pageY:py,replacetext:z,text:x,id:idx.toString(),paraselect:paraselect});
console.log(data);

document.getElementById(paraselect).innerHTML =document.getElementById(paraselect).innerHTML.replace(x,z);
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
console.log(data[saveindex]);

options.style.cssText="display:block;width80px;top:"+data[saveindex].pageY+"px;left:"+data[saveindex].pageX+"px;backgroundcolor:rgba(205,133,63,0.8);";
z=data[saveindex].replacetext;
x=data[saveindex].text;
paraselect=data[saveindex].paraselect;
flag=1;

})
.on('mouseover', '#btn', function()
{

console.log("mark button");
var options=document.getElementsByClassName("endgame")[0];
options.style.display='block';
/*var saveindex;
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
console.log(z);
console.log(x);
flag=1;
*/
})
.on('mouseout','p > #'+t,function(){
console.log("mark 2");
var options=document.getElementsByClassName("endgame")[0];
options.style.display='none';
});
idx=idx+1;

}
else if(s === 1){

// dehighlight
console.log("s = "+s);
console.log(document.getElementById(paraselect).innerHTML.replace(z,x));
document.getElementById(paraselect).innerHTML =document.getElementById(paraselect).innerHTML.replace(z,x);
options.style.display='none';
s=0;
}
});

});


/*$("#two").mouseup(function(event){
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
*/


