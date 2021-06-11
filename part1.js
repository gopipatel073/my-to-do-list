function changePara1() 
{ 
    document.getElementById("para1").innerHTML="New Text!";
} 
function changePara2() 
{ 
    document.getElementById("para1").innerHTML="Original Text";
} 
function insertCurrentDate()
{ 
    document.getElementById("datePara").innerHTML=Date();
}
function clearCurrentDate()
{ 
    document.getElementById("datePara").innerHTML="Current Date and time";
}
window.onload = (event) => {
    document.getElementById("datePara").addEventListener("mouseover", function()
    {
        document.getElementById("datePara").style.border="1px solid greenyellow";
    });
    document.getElementById("datePara").addEventListener("mouseout", function()
    {
        document.getElementById("datePara").style.border="none";
    });

};


