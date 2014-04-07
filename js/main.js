var my_notes = localStorage.getItem("my_notes");

$('#notes')[0].innerHTML = my_notes;

$('#notes').keydown(function(event){
  localStorage.setItem("my_notes", $('#notes')[0].innerHTML)
});
