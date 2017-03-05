$(document).ready(function(){
  $("#Default").show();
  $("#CCCH").hide();
  $("#CCGL").hide();
  $("#CCHU").hide();
  $("#CCST").hide();

  $("#CCCHbutton").click(function(){
    $("#Default").hide();
    $("#CCCH").fadeIn();
    $("#CCGL").hide();
    $("#CCHU").hide();
    $("#CCST").hide();
  });

  $("#CCGLbutton").click(function(){
	$("#Default").hide();
    $("#CCCH").hide();
    $("#CCGL").fadeIn();
	$("#CCHU").hide();
	$("#CCST").hide();
  });

  $("#CCHUbutton").click(function(){
    $("#Default").hide();
    $("#CCCH").hide();
    $("#CCGL").hide();
    $("#CCHU").fadeIn();
    $("#CCST").hide();
  });

  $("#CCSTbutton").click(function(){
    $("#Default").hide();
	$("#CCCH").hide();
    $("#CCGL").hide();
    $("#CCHU").hide();
    $("#CCST").fadeIn();
  });
});

