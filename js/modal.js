const modal = document.querySelector(".modal");

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

const handleCloseModal = () => {
    if(modal.style.display === "block")
        modal.style.display = "none";
}