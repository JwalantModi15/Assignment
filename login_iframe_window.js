var selectedCountry = ""
var countrySelect = document.getElementById('country')
var stateSelect = document.getElementById('state')

// The below function is used to fetch states according to country 
async function onStateSelect(){
    const res = await fetch("https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json");
    var data = await res.json()

    for(var i=0;i<data.length;i++){
        if(selectedCountry!="" && data[i].name==selectedCountry){
            for(var j=0;j<data[i].states.length;j++){
                var option = document.createElement('option');
                option.text = data[i].states[j].name;
                stateSelect.add(option, j);
            }
            break;
        }
    }

    selectedCountry = ""
}

// The below function is used to send the data from the IFrame to its parent window
function sentDataToParent(){
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var phone_no = document.getElementById('phone').value;
    var userCountry = countrySelect.value
    var userState = stateSelect.value

    const msg = JSON.stringify({
        name: userName,
        email: userEmail,
        phone: phone_no,
        country: userCountry,
        state: userState,
});
    window.parent.postMessage(msg, '*');
}

// The below function is used to fetch countries
async function onCountrySelect(){
    stateSelect.disabled = ""
    while(stateSelect.length!=0){
        await onDeleteState()
    }
    
    if(countrySelect.length==0){
        const res = await fetch("https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json");
        var data = await res.json()
        
        for(var i=0;i<data.length;i++){
            var option = document.createElement('option');
            option.text = data[i].name;
            countrySelect.add(option, i);
        }
    }
    selectedCountry = countrySelect.value;
}

function onDeleteState(){
    for(var k=0;k<stateSelect.length;k++){
        stateSelect.remove(0)
    }   
}
