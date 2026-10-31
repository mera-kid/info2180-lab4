/*Now write some JavaScript code so that when a user clicks a Search 
button, the list of Superheroes appears as a JavaScript alert.*/

window.onload = function(){
    let search = document.querySelector("#srch");
    search.addEventListener("click", function(){
        $.ajax("http://localhost/info2180-lab4/superheroes.php")
            .done(function(result){
                alert(result)
            })
    })
}