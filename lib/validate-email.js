$.fn.check = function() {
    let email= $('.myemail');
    let message = $('.mymessage')
    email.keyup(function () {
        let r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let result = r.test($(this).val())
        
        if (result) {
        message.text("")
        email.css("border-color", "green")
        
        } else {
        message.text('Email address is not valid').css('color', 'red')
        email.css("border-color", "red")     
        }
    })


}



