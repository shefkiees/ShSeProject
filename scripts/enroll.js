const forma = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function checkInputs(){
    const items = document.querySelectorAll(".shse-item");
    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
            checkPhone();
        }
        items[1].addEventListener("keyup",  () => {
            checkEmail();
            checkPhone();
        });


        item.addEventListener("keyup", () =>{
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

};


function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".shse-error-txt.email");


if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != ""){
        errorTxtEmail.innerText = "Write your E-Mail in the right way!";
    }
    else{
        errorTxtEmail.innerText = "Please write your E-Mail Address";
    }
}
else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
}
};

function checkPhone(){
    const phoneRegex = /[0-9]/;
    const errorTxtPhone = document.querySelector(".shse-error-txt.phone");

    if(!phone.value.match(phoneRegex)){
        phone.classList.add("error");
        phone.parentElement.classList.add("error");

        if(phone.value != ""){
            errorTxtPhone.innerText = "Number given doesnt exist!";
        }
        else{
            errorTxtPhone.innerText = "Please write your number!";
        }
    }
    else{
        phone.classList.remove("error");
        phone.parentElement.classList.remove("error");
    }
};



 

forma.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
                        Swal.fire({
                            title: "Success!",
                            text: "Enroll succeded!",
                            icon: "success"
                        })

        forma.reset();
        return false;
        }
    }
);
