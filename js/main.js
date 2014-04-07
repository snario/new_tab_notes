var my_notes = localStorage.getItem("my_notes");

$('#notes')[0].innerHTML = my_notes;

$('#notes').keypress(function(event){
  localStorage.setItem("my_notes", $('#notes')[0].innerHTML)
});
