const btns = document.querySelectorAll('button');
const aboutContainer = document.querySelector('.aboutConatainer');

aboutContainer.onclick = function(e){
    console.log(e.target);

    //btns functionnalities
    btns.forEach(function(btn){
        btn.onclick = function(e){
            console.log(1)
        }
    })
}