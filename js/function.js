
 var restFild = $("#result")

function insertNumber(number){
	
	var existingNumber =restFild.val();
	$("#result").val(existingNumber+number)
	
};

 function clearResult(){ 
	 restFild.val('');
 };
 
 function calculate(){
	 
	  var lstRes= eval(restFild.val());
	  restFild.val(lstRes)
	 
 };
 
 function deleteNumber(){
	 
	var valNum =  restFild.val();
	
	if(valNum !="" ){
		
		 restFild.val(restFild.val().slice(0,-1));
	}
	 
 };