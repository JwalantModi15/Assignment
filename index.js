// function for email validation
function emailValidation(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}

var para = document.getElementById('result')
var validatePhoneNo = /^\d{10}$/;

// event listener to receive the data coming from iframe window
window.addEventListener('message', function(e){
    const jsonData = e.data
    const data = JSON.parse(jsonData)

    var name = data.name
    var email = data.email
    var phone_no = data.phone
    var country = data.country
    var state = data.state

    if(name.length<4 || name.length>10){
        const jsonObj = JSON.stringify({name: {
            error: "length should be between 4-10",
        }});
        para.textContent = "Result: "+jsonObj
    }
    else if(!phone_no.match(validatePhoneNo)){
        const jsonObj = JSON.stringify({phone_no: {
            error: "phone number should be of length 10",
        }});
        para.textContent = "Result: "+jsonObj
    }
    else if(country==""){
        const jsonObj = JSON.stringify({country: {
            error: "country field should not be empty",
        }});
        para.textContent = "Result: "+jsonObj
    }
    else if(country!="" && state==""){
        const jsonObj = JSON.stringify({state: {
            error: "state field should not be empty",
        }});
        para.textContent = "Result: "+jsonObj
    }
    else if(email==""){
        const jsonObj = JSON.stringify({email: {
            error: "email field should not be empty.",
        }});
        para.textContent = "Result: "+jsonObj
    }
    else if(!emailValidation(email)){
        const jsonObj = JSON.stringify({email: {
            error: "email format is invalid.",
        }});
        para.textContent = "Result: "+jsonObj
    }
    
    else{
        const jsonObj = JSON.stringify({Success: "All fields are valid."});
        para.innerHTML = "Result: " + jsonObj
    }

})