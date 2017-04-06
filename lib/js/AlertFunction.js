function Alert(type, message)
{
    $(".error_message").removeClass("hidden");
    $(".error_message").html('<div class="alert alert-' + type + ' alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">X</a>' + message + '</div>')
    window.setTimeout(function () {
        //$(".error_message").slideUp(function () {
        //$(".error_message").addClass('hidden');
        //});
       // $(".error_message").slideUp(400, function () {
            // Animation complete.
           $(".error_message").addClass('hidden');
        //});

    }, 2500);
}
