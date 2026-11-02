window.onload = function(){
    var srchBtn = document.getElementById('srch-btn');
    var srchInpt = document.getElementById('srch-inpt');
    var resultDiv = document.getElementById('result');

    srchBtn.addEventListener("click", function (event){
        event.preventDefault();

        var search = srchInpt.value.trim();

        var url = "superheroes.php";
        if (search != ""){
            url = url + "?query=" + (search);
        }

        $.ajax(url)
            .done(function (result){
                resultDiv.innerHTML = result;
            })

    });

    /*Now write some JavaScript code so that when a user clicks a Search button, the list of Superheroes appears as a JavaScript alert.
    let search = document.querySelector("#srch");
    search.addEventListener("click", function(){
        $.ajax("http://localhost/info2180-lab4/superheroes.php")
            .done(function(result){
                alert(result)
            })
    })*/
}


