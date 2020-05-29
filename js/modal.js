const modal = document.querySelector(".modal");

//onclick image, display image in modal
const handleImgClick = (e) => {
    const modalImag = document.querySelector('#modal-img');
    modal.style.display = "block";

    if (modalImag) 
        modalImag.src = e.target.src;
    else {
        modal.insertAdjacentHTML('beforeend',`<img id="modal-img"src=${e.target.src}>`)
        console.log("Event: ", modal.style)
    }
}

//close modal on clicking outside image
const handleOuterClickModal = (e) => {
    if (e.target.id === "modal-img") return;
    modal.style.display = "none";
}

// close modal on clicking X
const handleCloseModal = () => {
        modal.style.display = "none";
}