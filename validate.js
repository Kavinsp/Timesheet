// this is the script code
var count =0;  
function IsNumber(evt)
        {
           var charCode = (evt.which) ? evt.which : evt.keyCode
           if (charCode > 31 && (charCode < 48 || charCode > 57))
              return false;

           return true;
      }

function NumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if(charCode < 31)
		return false;
	else if ((charCode >=48 && charCode <=57)||(charCode >=65 && charCode <=92) || (charCode >=97 && charCode <= 122) && (count <= 25))
	{
		count++;
		return true;
	}
		return false;
	
	}
	function alphabet(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if(charCode < 31)
		return false;
	else if ((charCode >=65 && charCode <=92) || (charCode >=97 && charCode <= 122) && (count <= 25))
	{
		count++;
		return true;
	}
		return false;
	
	}
