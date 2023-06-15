const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const lastname = document.querySelector('#lastname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return Swal.fire({
            title: 'Error!',
            text: 'El usuario ya esta registrado',
            icon: 'error'
        })
    }

    Users.push({name: name, lastname: lastname, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
        Swal.fire({
        title: 'Success!',
        text: 'El usuario a sido registrado',
        icon: 'success',
        timer: 3000
        })
        setTimeout(() => {
            window.location.href = 'login.html'
        }, 3000);
        
})