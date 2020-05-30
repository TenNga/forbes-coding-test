const modal = document.querySelector(".modal");

const toggleModalDisplay =  () => {
   modal.classList.toggle("open");
}

//onclick image, display image in modal
const handleImgClick = (e) => {
    const modalImag = document.querySelector('#modal-img');
    toggleModalDisplay();

    if (modalImag) 
        modalImag.src = e.target.src;
    else {
        modal.insertAdjacentHTML('beforeend',`<img id="modal-img"src=${e.target.src}>`)
        console.log("Event: ", modal.style)
    }
}

//close modal on clicking outside image
const closeModal = (e) => {
    if (e.target.id === "modal-img") return;
    toggleModalDisplay();
}