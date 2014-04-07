
$('#notes')[0].innerHTML = localStorage.getItem("my_notes");

$('#notes')[0].focus();

$('#notes').keypress(function(event){
          //do something here
          localStorage.setItem("my_notes", $('#notes')[0].innerHTML)
      });



// localStorage.setItem("lastNode", bookmarkId);
