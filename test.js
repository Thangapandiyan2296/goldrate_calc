function verify()
{
    var name=document.getElementById("name");
    var age=document.getElementById("age");
    var nation=document.getElementById("nation");
    if(nation!="indian")
    {
        alert("onle indian only able to vote");
    }
    else
    {
        if(age>=18)
        {
            document.write("welcome to your firse vote");
        }
        else if(age<18)
        {
            document.write("not eligible for vote");
        }

        
    }
}