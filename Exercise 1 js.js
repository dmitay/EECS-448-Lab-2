function validate() 
{ 
    var thePassTag = document.getElementById("password").value;
    var thePassTag2 = document.getElementById("password2").value;
    var length = thePassTag.length;

    if (thePassTag != thePassTag2)
    {
        return("Passwords entered do not match")
    }
    
    else if (length < 8)
    {
		return("Password not at least 8 characters long")
	}
         
    else
	{
		return("Password is valid")
	} 
} 