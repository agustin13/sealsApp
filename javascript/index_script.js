//Submission Cap
var counter = 0;
var container = $('#container');
//Opens Form
function displayForm() {
    var form = document.getElementById("form");
    var formBackground = document.getElementById("form-background");
        if (form.style.display == "none" || form.style.display == "") {
            form.style.display = "block";
            formBackground.style.display = "block";
        }
}

document.getElementById("addNoteButton").addEventListener("click", displayForm);
//Closes Form
function closeForm(){
    var form = document.getElementById("form");
    var formBackground = document.getElementById("form-background");
    if (form.style.display == "block" || form.style.display == "") {
                form.style.display = "none";
                formBackground.style.display = "none";
            }
}
document.getElementById("cancel-button").addEventListener("click", closeForm);


//This is the Submission Function
$(document).ready(function() {
    
    //$( "h1" ).effect( "slide", 2200 );
    $("#container").effect("shake", 2200);

    $('#submit').click(function() {
        //counter
        counter += 1;
        console.log(counter);
        if (counter > 4){
            alert("You've reached the max amount of submissions. Sorry ):");
            return false;
        }
        else{
        //Form Disappears after Submission
        var form = document.getElementById("form");
        var formBackground = document.getElementById("form-background");
        if (form.style.display == "block" || form.style.display == "") {
                form.style.display = "none";
                formBackground.style.display = "none";
            }

        //Creates New Div After Submission
        var titleInput = document.getElementById("titleInput").value;
        var descInput = document.getElementById("descInput").value;
        var structure = $('<div class="note"><div class="note-content"><div class="imagecontainer"><img src="../images/jose.jpg"/></div><div class="description"><h3>'+ titleInput +'</h3><p>'+ descInput +'</p></div></div></div>');
        $('#container').append(structure);
        return false;
        }
    });

//Using JSON information
    $.ajax({
            crossOrigin: true,
        type:'GET',
        url: 'https://p-notetaker.herokuapp.com/json/data.json',
        dataType: 'json',

        error: function(){
            alert("There was an Error")
        },
        
        success: function(data){
            //data = jQuery.parseJSON(data);
            $('#container').append($('<div class="note"><div class="note-content"><div class="imagecontainer"><img src="../images/jose.jpg"/></div><div class="description"><h3>'+ data.title +'</h3><p>'+ data.description +'</p></div></div></div>'));

            /*$.each(data, function(index, item){
                $.each(item, function(key, value) {
                    $('#container').append($('<div class="note"><div class="note-content"><div class="imagecontainer"><img src="../images/jose.jpg"/></div><div class="description"><h3>'+ key +'</h3><p>'+ value +'</p></div></div></div>'));
                });
            })*/

        }
    });

});
