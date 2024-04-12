let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
})

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


let form_obj = document.querySelector('#contact_form');

form_obj.addEventListener('submit', ()=>{
    event.preventDefault();
    let flag = true;
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#phnum').value;
    let subject = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;

    if (!name || !email || !number || !subject || !message) {
        alert('All fields are required!');
        flag = false;
        return;
    }

    let phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/im;
    if (!phoneRegex.test(number) || number.length < 10 || number.length > 13) {
        alert('Please enter a valid phone number');
        flag = false;
        return;
    }

    let data = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message
    }

    if (flag){
        alert("Your message was sent!");
        form_obj.reset();
    }
})

// let cvdownload = document.querySelector('#downloadBtn');
// cvdownload.addEventListener('click', function(event) {
//     event.preventDefault();
//     this.click();
// })