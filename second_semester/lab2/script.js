var modal = document.getElementById("myModal");
var modalTeacher = document.getElementById("modalTeacher");

var span = document.getElementsByClassName("close")[1];

document.querySelectorAll(".modal-toggle").forEach(btn => { 
  btn.addEventListener('click',()=>{
    modal.style.display = "block";
  }) 
 })

 document.querySelectorAll(".modal-teacher-toggle").forEach(btn => { 
  btn.addEventListener('click',()=>{
    modalTeacher.style.display = "block";
  }) 
 })

span.onclick = function() {
  modal.style.display = "none";
  modalTeacher.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalTeacher.style.display = "none";
  }
} 