let inputpassword = document.getElementById('pass');
let body = document.body;
let button = document.querySelector('.btn');

inputpassword.addEventListener('keypress' ,(e) =>{
    let passwordlength = e.target.value;
    body.style.backdropFilter = `blur(${10-(passwordlength.length + 1)}px)`
})

