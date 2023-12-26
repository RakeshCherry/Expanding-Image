const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeAciveElement();
        // removeAciveZooming();
        panel.classList.add('active');
    })
})
function removeAciveElement(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}


// function removeAciveZooming(){
//     panels.forEach(panel => {
//         panel.classList.remove('expand')
//     })
// }