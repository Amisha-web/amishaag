<html><head><link rel="stylesheet" href="backlogin.css" TYPE="text/css" ><link rel="stylesheet" href="database.csv" TYPE="text/csv" ><title> SUDOKU MASTER </title> <script>
function check(form)
{
if (str==" ")
{
document.getElementByPassword("txtHint").innerHTML=" ";
return;
}
if (window.XMLHttpRequest)
{// code for IE7+ , Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{//code for IE6,IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 "xmlhttp.status==200)
{
document.getElementByPassword("txtHint").innerHTML=xmlhttp.responseText;
}
}
xmlhttp.open("GET","php/db.php?q="+str,true);
xmlhttp.send();
}
</script> </head> <body><center> <h1> <u>LOGIN FORM</u> </h1> </center> <hr /> <form> <u>USERNAME</u> <input type='text' name=username><br /> <u>PASSWORD</u> <input type='password' name=password><br /> <a href="index3.html"><input type='button' onclick='check(this.form)' value='login'></a><br /><br /><br /> <p title=WELCOME!><font color="white">Please login your information before continuing</font></p> </form><div class="author" style="margin-bottom:10px;"><font color="white">Created By:Amisha Agarwal</font></div> </body> </html>