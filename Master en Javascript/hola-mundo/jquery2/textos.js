$(document).ready(function(){

    reloadLinks();
    $("#addButton").click(function(){
        var enlace = $("#addLink").val();
        $("ul").append("<li><a href='"+enlace+"'></a></li>");
        reloadLinks();
    })
})

function reloadLinks(){
    $("a").each(function(index){
        var enlace = $(this).attr("href");
        $(this).text(enlace);
    })
}