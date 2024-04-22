function ValidateForm() {
    var name = document.getElementById('name').value
    var age = document.getElementById('age').value
    var qualification = document.getElementById('qualification').value
    var number = document.getElementById('number').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirmpassword = document.getElementById('confirmpassword').value
    var city = document.getElementById('city').value
    var gender = document.querySelector('input[name="gender"]:checked')
    var errors = ''

    var phoneregex = /^[6-9]\d{9}$/
    var emailregex = /^\w+@\w+\.\w+$/

    if(!name){
        errors += 'Enter name.<br>'
    }
    // if(age<0) errors += 'Enter a valid age.<br>'
    if(!gender) errors += 'Select a gender.<br>'
    if(!qualification) errors += 'Select a qualification.<br>'
    if(!phoneregex.test(number)) errors += 'Enter a valid Indian phone number.<br>'
    if(!emailregex.test(email)) errors += 'Enter a valid email.<br>'
    if(password.length<8) errors += 'Enter a password of atleast 8 characters.<br>'
    if(password !== confirmpassword) errors += 'Passwords do not match.<br>'
    if(!city) errors += 'Enter a city.<br>'

    if(errors){
        document.getElementById('errors').innerHTML = '<div class="error">' + errors + '</div>'
        return false
    }
    return true
}