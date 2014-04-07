var my_notes = localStorage.getItem("my_notes");

if (my_notes != "") {
    $('#notes')[0].innerHTML = my_notes;
} else {
    $('#notes')[0].innerHTML = "NoteTab";
}

$('#notes').keypress(function(event){
  localStorage.setItem("my_notes", $('#notes')[0].innerHTML ? $('#notes')[0].innerHTML : "NoteTab")
});


