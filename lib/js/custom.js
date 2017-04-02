$(document).ready(function()
{
	if(typeof(localStorage.getItem("token"))!== "undefined")
	{
				$("#userName").text(localStorage.getItem("userName"));
	}else{
		window.location.href="index.html";
	}
	
	$("#logout").click(function(e)
	{
		e.preventDefault();
		localStorage.clear();
		window.location.href="index.html";
	});
});
var stoargeAvaiable = false;
/* set userName and password to localstorage */
if (typeof(Storage) !== "undefined") {
	stoargeAvaiable = true;
	localStorage.setItem("userName", "admin");
	localStorage.setItem("password", "123");
	//alert(localStorage.getItem("password"));
} else {
$("#message").removeClass("hidden");
$("#message").html('<div class="alert alert-warning alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a><strong>Warning!</strong> Sorry! No Web Storage support..</div>');
}
$(document).ready(function()
{
if(stoargeAvaiable)
{
	$("#form-signin").click(function(e){
	e.preventDefault();
		if($("#Username").val()!="")
		{
			if($("#Password").val()!="")
			{
				if(localStorage.getItem("userName")==$("#Username").val())
				{
					if(localStorage.getItem("password")==$("#Password").val())
					{
						$("#message").addClass("hidden");
						localStorage.setItem("token","ok");
						window.location.href ='page2.html';
					}
					else{
					$("#message").removeClass("hidden");
					$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Password is incorrect</div>');
					}
				}else{
				$("#message").removeClass("hidden");
				$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Username is incorrect</div>');
				}
			}else{
				$("#message").removeClass("hidden");
			$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Password is required</div>');
			}
		}else{
			$("#message").removeClass("hidden");
			$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Username is required</div>');
		}
	});
	$("#form-signin").validate({
                    errorPlacement: function (error, element) {
                    }
                });
	
}


$(".form-control").keyup(function()
{
	$("#message").addClass("hidden");
})

$(documnt).on('click','.close',function(e){
	e.preventDefault();
	$("#message").addClass("hidden");
});
		
});

$(document).ready(function()
{
	if(typeof(localStorage.getItem("token"))!== "undefined")
	{
				/*$("#form-edit").validate({
                    errorPlacement: function (error, element) {
                    }
                });*/
				
				$("#Submit").click(function()
				{
					if($("#Agentname").val() != "")
					{
						if($("#Empid").val() != "")
						{
							if($("#Designation").val() != "")
							{
										if($("#Department").val() != "")
										{
											if($("#Campaign").val() != "")
											{
												if($("#Supervisor").val() != "")
												{
													localStorage.setItem("Agentname",$("#Agentname").val());
													window.location.href ='page3.html';
												}
												else{
													$("#message").removeClass("hidden");
													$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Supervisor is required</div>');
												}
												
											}
											else{
												$("#message").removeClass("hidden");
												$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Campaign is required</div>');
											}
										}
										else{
											$("#message").removeClass("hidden");
											$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Department is required</div>');
										}
							}
							else{
								$("#message").removeClass("hidden");
								$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Designation is required</div>');
							}
						}
						else{
							$("#message").removeClass("hidden");
							$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Empid is required</div>');
						}
					}
					else{
						$("#message").removeClass("hidden");
						$("#message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>Agentname is required</div>');
					}
				});
				
	}
	else{
		alert("Invalid login");
		localStorage.setItem("token","");
		window.location.href ='index.html';
	}
	$(".form-control").keyup(function()
	{
		$("#message").addClass("hidden");
	})
});
$(document).ready(function()
{
	if(typeof(localStorage.getItem("token"))!== "undefined")
	{
		$("#form-page3").validate({
                    errorPlacement: function (error, element) {
                    }
                });
				
				$("#name").text(localStorage.getItem("Agentname"));
	}
	else{
		alert("Invalid login");
		localStorage.setItem("token","");
		window.location.href ='index.html';
	}
	
	
});