const toggle = document.getElementById('toggle-btn');
const nav = document.getElementById('nav');
const thumbs = document.querySelectorAll('.thumb');
const jumbo = document.querySelector('.jumbo');
const main = document.querySelector('.box-main');


    for(let i = 0; i<thumbs.length; i++) {
        thumbs[i].addEventListener('mouseenter',function(e){
            thumbs[i].play();
        })
        thumbs[i].addEventListener('mouseout',function(e){
            thumbs[i].pause();
        })
        thumbs[i].addEventListener('click',function(e){
            jumbo.src = thumbs[i].src;
            jumbo.pause();
        })
    }

    main.addEventListener('click',function(e){
        if(e.target.className = 'thumb'){
            thumbs.forEach(function(thumb){
                thumb.className = 'thumb';
            })
            e.target.classList.add('active');
        }
    })


toggle.addEventListener('click',function() {
    nav.classList.toggle('nav-js');
})