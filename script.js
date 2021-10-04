function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal < 1)
    {
        if (window.confirm('Please Enter a positive number'))
        {
            
            document.getElementById("principal").focus();
        }
        return false;
    }
    else
    {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
    }
}

function updateRate()
{
    var rate  = document.getElementById("rate").value;
    var rateV = document.getElementById('rate_val');

    var newValue = Number( (rate - 1) * 95 / (20 - 1) );
    var newPosition = 0;
    rateV.innerHTML = `<span>${rate}%</span>`;
    rateV.style.left = `calc(${newValue}% + (${newPosition}px))`;

    document.getElementById("rate_val").innerText = rate + "%";
}