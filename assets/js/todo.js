
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which==13)
    {
        var todotext = $(this).val();
        $("ul").append("<li><span><a class='fas fa-trash'></a></span> "+todotext+"</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});