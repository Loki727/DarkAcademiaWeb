const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


const form= document.getElementById('nwsinput');
const btn= document.getElementById('nwsbutton');
const warn= document.getElementById('warn');


form.addEventListener('change', checkChange);
btn.addEventListener('click', checkClick);

function checkChange(e) {
    let textInput=e.target.value;
    if (!isEmailValid(textInput)) {
        let alertText='The e-mail address is incorrect!';
        $("#nwsinput").css("border-color", "red");
        warn.textContent=alertText;
    }else{
        $("#nwsinput").css("border-color", "green");
        warn.textContent=""
    }
}
function checkClick(e){
    let textInput=e.target.value;
    if (!isEmailValid(textInput)) {
        let alertText='The e-mail address is incorrect!';
        $("#nwsinput").css("border-color", "red");
        warn.textContent=alertText;
        e.preventDefault();
    }else{
        $("#nwsinput").css("border-color", "green");
        warn.textContent=""
        form.submit();
    }
}
function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}