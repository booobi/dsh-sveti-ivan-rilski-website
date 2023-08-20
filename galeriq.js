// Get the modal
var modal = document.getElementById("myModal");

$(".gallery-item").each(function(INDEX, EL) {
    EL.addEventListener('click', () => {
      modal.style.display = "flex";
      modal.style.alignItems = "center";
      modal.style.justifyContent = "center";
      modalImgContainer.style.backgroundImage = `url(${this.src})`;
    })
})

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImgContainer = document.getElementById("modalImage");
// img.onclick = function(){
//   modal.style.display = "flex";
//   modal.style.alignItems = "center";
//   modal.style.justifyContent = "center";
//   modalImgContainer.style.backgroundImage = `url(${this.src})`;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
