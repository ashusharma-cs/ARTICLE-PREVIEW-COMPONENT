let details=document.getElementById("detail");
// let tooltip=document.getElementsByClassName("tooltip");
let tool =document.getElementById("tooltip");

tool.addEventListener("mouseover", show);
tool.addEventListener("mouseout",hide);

function show()
{
    // let details=document.getElementById("detail");
    if(details.style.visibility!='visible')
    {
        details.style.visibility='visible';
    }
}

function hide()
{
    if(details.style.visibility!='hidden')
    {
        details.style.visibility='hidden';
    }
}
