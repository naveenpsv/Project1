function Alert(type,message)
{
	$(".error_message").removeClass("hidden");
	$(".error_message").html('<div class="alert alert-'+type+' alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>'+message+'</div>')
}
$(".form-control").keyup(function()
{
	$(".error_message").addClass("hidden");
})