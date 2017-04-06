$(document).ready(function ()
{
    if (typeof (localStorage.getItem("token")) !== "undefined")
    {
        $("#userName").text(localStorage.getItem("userName"));
    } else {
        window.location.href = "index.html";
    }

    $("#logout").click(function (e)
    {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "index.html";
    });
});
$("form").validate({
    errorPlacement: function (error, element) {

    }
});
$(document).ready(function ()
{



//    $(".form-control").keyup(function ()
//    {
//        $("#message").addClass("hidden");
////        $(".form-control").each(function()
////        {
////            $(this).removeClass('error');
////        });
//    })

    $(documnt).on('click', '.close', function (e) {
        e.preventDefault();
        $("#message").addClass("hidden");
    });

});

$(document).ready(function ()
{
    if (typeof (localStorage.getItem("token")) !== "undefined")
    {
        /*$("#form-edit").validate({
         errorPlacement: function (error, element) {
         }
         });*/

        $("#Submit2").click(function ()
        {
            if ($("#Agentname").val() != "")
            {
                if ($("#Empid").val() != "")
                {
                    if ($("#Designation").val() != "")
                    {
                        if ($("#Department").val() != "")
                        {
                            if ($("#Campaign").val() != "")
                            {
                                if ($("#Supervisor").val() != "")
                                {
                                    localStorage.setItem("Agentname", $("#Agentname").val());
                                    localStorage.setItem("Empid", $("#Empid").val());
                                    localStorage.setItem("Designation", $("#Designation").val());
                                    localStorage.setItem("Department", $("#Department").val());
                                    localStorage.setItem("Campaign", $("#Campaign").val());
                                    localStorage.setItem("Supervisor", $("#Supervisor").val());
                                    window.location.href = 'page3.html';
                                } else {
                                    Alert('danger', 'Supervisor is required');

                                }

                            } else {
                                Alert('danger', 'Campaign is required');

                            }
                        } else {
                            Alert('danger', 'Department is required');

                        }
                    } else {
                        Alert('danger', 'Designation is required');

                    }
                } else {
                    Alert('danger', 'Empid is required');
                }
            } else {
                Alert('danger', 'Agentname is required');
            }
        });

    } else {
        alert("Invalid login");
        localStorage.setItem("token", "");
        window.location.href = 'index.html';
    }

});
$(document).ready(function ()
{
    if (typeof (localStorage.getItem("token")) !== "undefined")
    {
        $("#form-page3").validate({
            errorPlacement: function (error, element) {
            }
        });

        $("#name").text(localStorage.getItem("Agentname"));
    } else {
        alert("Invalid login");
        localStorage.setItem("token", "");
        window.location.href = 'index.html';
    }


});