<!DOCTYPE html> 
<html> 
<head> 
<title>sorting</title>  
<style type="text/css"> 
 h2 
 { 
  color: purple; 
  background-color: #fff0b3; 
  background-blend-mode: hard-light; 
  font-size: 40px; 
 } 
         p 
             { 
  color: blue; 
  background-color:pink; 
  background-blend-mode: hard-light; 
  font-family: times new roman; 
  font-size: 35px; 
 } 
 b 
             { 
  color:red; 
  background-color:pink; 
  background-blend-mode: hard-light; 
  font-family: times new roman; 
                                                                                                                                                      GARVITA SAPRA 
                                                                                                                                                        (00824302019) 
106 
 
  font-size: 35px; 
  display: block; 
 } 
 button 
             { 
  color:#330080; 
  background-color:#b3ffb3; 
  font-family: castellar; 
  border: 2px; 
  border-style: dashed; 
  font-size: 35px; 
  width: 170px; 
  border-color: #e8ff52; 
  } 
 input 
               { 
  color:#330080; 
  background-color:#8cffff; 
  font-family: ink free; 
  font-size: 30px; 
  width: 150px; 
  border-color:#66ffff; 
                    } 
</style> 
</head> 
<body bgcolor="#eb4034"> 
<center> 
                                                                                                                                                      GARVITA SAPRA 
                                                                                                                                                        (00824302019) 
107 
 
<u><h2>JavaScript Array Sort</h2></u> 
<b>Tap on the button to sort the given array</b><br> 
 <input type="number" id="arr0"><br><br> 
 <input type="number" id="arr1"><br><br> 
 <input type="number" id="arr2"><br><br> 
 <input type="number" id="arr3"><br><br> 
 <input type="number" id="arr4"><br><br> 
 <button value="submit" onclick="myfunc()">Submit</button> 
<p id="dem"></p> 
</center> 
</body> 
<script> 
function myfunc() 
 { 
   let arr=[0,0,0,0,0]; 
   arr[0]=document.getElementById("arr0").value; 
   arr[1]=document.getElementById("arr1").value; 
   arr[2]=document.getElementById("arr2").value; 
   arr[3]=document.getElementById("arr3").value; 
  arr[4]=document.getElementById("arr4").value; 
  arr.sort(function(a,b){return a-b;} 
) 
document.getElementById("dem").innerHTML=arr; 
} 
</script> 
</html>
