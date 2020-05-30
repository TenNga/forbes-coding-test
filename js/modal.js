const modal = document.querySelector(".modal");

const toggleModalDisplay =  {
    open: ()=>{
        modal.classList.remove("close")
        modal.classList.add("open");
    },
    close: () => {
        modal.classList.remove("open")
        modal.classList.add("close");
    }
}
//onclick image, display image in modal
const handleImgClick = (e) => {
    const modalImag = document.querySelector('#modal-img');
    toggleModalDisplay.open();

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
    toggleModalDisplay.close();
}

// close modal on clicking X
const handleCloseModal = () => toggleModalDisplay.close();
