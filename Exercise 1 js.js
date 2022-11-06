function validate() 
{ 
    var thePassTag = document.getElementById("password").value;
    var thePassTag2 = document.getElementById("password2").value;

    if (thePassTag != thePassTag2)
    {
        return("Passwords entered do not match")
    }
    else
        for (let i = 0; i < thePassTag.length; i++)
        {
            if (i <= 7)
            {
                return("Password not at least 8 characters long")
            }
        } 
} 