$(document).ready(function(){
    
    // peticiones ajax

    // load

    //$("#datos").load("https://reqres.in/api/users");

    // get

    $.get("https://reqres.in/api/users", { page: 2}, function(response){
        response.data.forEach(element => {
            $("#datos").append(`<p>${element.first_name}</p>`);
            
        })
    })

    // post

    $.post("https://reqres.in/api/users", {
        name: "morpheus",
        job: "leader"
    }, function(response){
        console.log(response);
    })

    // ajax
    
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users/2",
        beforeSend: function(){
            $("#datos").html("Cargando");
        },
        success: function(response){
            $("#datos").html(response.data.first_name);
        }, timeout: 3000,
        error: function(){
            $("#datos").html("Error");
        }
    })
    





})