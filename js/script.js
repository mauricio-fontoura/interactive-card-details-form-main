
/* Row Call */
const fill_name = document.querySelector("#print-name");
const fill_number = document.querySelector("#print-number");
const fill_exp = document.querySelector("#print-exp");
const fill_date = document.querySelector("#print-date");
const fill_cvc = document.querySelector("#print-cvc");
const btn_confirm = document.querySelector("#btn-confirm");

/* Row Digit value*/

fill_name.addEventListener("input", function () {
    fill_name.addEventListener("keypress", function (specialNot) {
        const code = (specialNot.keyCode ? specialNot.keyCode : specialNot.wich);
        if (code > 32 && code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122 && code < 232) {
            specialNot.preventDefault();
        };
    });
    const save_name = document.querySelector("#card-name");
    if (fill_name.value == fill_name.value.length) {
        save_name.innerText = "Felicia Leire"
    } else {
        save_name.innerText = fill_name.value;
    }
});

fill_number.addEventListener("input", function () {

    fill_number.addEventListener("keypress", function (num) {
        const code = (num.keyCode ? num.keyCode : num.wich);
        if (code > 32 && code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122 && code < 231) {
            num.preventDefault();
        };
    });
    const save_number = document.querySelector("#card-number");
    if (fill_number.value == fill_number.value.length) {
        save_number.innerHTML = "0000 0000 0000 0000"
    } else {
        save_number.innerHTML = fill_number.value;
    }

})

fill_exp.addEventListener("input", function () {

    fill_exp.addEventListener("keypress", function (num) {
        const code = (num.keyCode ? num.keyCode : num.wich);
        if (code > 32 && code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122 && code < 231) {
            num.preventDefault();
        };
    });
    const save_date = document.querySelector("#card-exp");
    if (fill_number.value == fill_exp.value.length) {
        save_date.innerHTML = "00/"
    } else if (fill_exp.value == 0) {
        fill_exp.value = ""
    } else if (fill_exp.value < 10) {
        save_date.innerHTML = "0" + fill_exp.value + "/";
    } else if (fill_exp.value < 13) {
        save_date.innerHTML = fill_exp.value + "/"
    } else if (fill_exp.value > 12) {
        fill_exp.value = ""
    };
});

fill_date.addEventListener("input", function () {

    fill_date.addEventListener("keypress", function (num) {
        const code = (num.keyCode ? num.keyCode : num.wich);
        if (code > 32 && code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122 && code < 231) {
            num.preventDefault();
        };
    });
    const save_date = document.querySelector("#card-date");
    if (fill_date.value == fill_date.value.length) {
        save_date.innerHTML = "22"
    } else if (fill_date.value == 0) {
        fill_date.value = "";
    } else if (fill_date.value > 21) {
        save_date.innerHTML = fill_date.value;
    };
});

fill_cvc.addEventListener("input", function () {

    fill_cvc.addEventListener("keypress", function (num) {
        const code = (num.keyCode ? num.keyCode : num.wich);
        if (code > 32 && code < 48 || code > 96 && code < 123 || code > 57 && code < 231) {
            num.preventDefault();
        };
    });
    const save_cvc = document.querySelector("#card-cvc");
    if (fill_cvc.value == fill_cvc.value.length) {
        save_cvc.innerText = " "
    } else {
        save_cvc.innerText = fill_cvc.value;
    }

});

/* Row Digit Error */

/* NAME: Wrong format  */
fill_name.addEventListener("keypress", function (name) {
    const code = (name.keyCode ? name.keyCode : name.wich);
    const error_name = document.querySelector("#name-error");
    if (code > 47 && code < 58) {
        error_name.innerHTML = "Wrong format, lettering only"
        fill_name.style.border = "1px solid hsl(0, 100%, 66%)";
        name.preventDefault()
    } else if (fill_name.value == fill_name.value.length) {
        error_name.innerHTML = ""
        fill_name.style.border = ""
    };
});

/* NUMBER: Wrong format  */
fill_number.addEventListener("keypress", function (num) {
    const code = (num.keyCode ? num.keyCode : num.wich);
    const error_number = document.querySelector("#number-error");
    if (code > 59 && code < 47 || code > 58 && code < 232) {
        error_number.innerHTML = "Wrong format, number only"
        fill_number.style.border = "1px solid hsl(0, 100%, 66%)";
        num.preventDefault()
    } else if (fill_number.value == fill_number.value.length) {
        error_number.innerHTML = ""
        fill_number.style.border = ""
    };
});
btn_confirm.addEventListener("click", function () {
    const error_name = document.querySelector("#name-error");

    /* Input NAME*/
    if (fill_name.value == fill_name.value.length) {
        error_name.innerHTML = "Can't be blank";
        fill_name.style.border = "1px solid hsl(0, 100%, 66%)";
    } else {
        error_name.innerHTML = "";
        fill_name.style.border = ""
    }
    /* Input EXP*/
    const error_exp = document.querySelector("#expDate-error");
    if (fill_exp.value == fill_exp.value.length) {
        error_exp.innerHTML = "Can't be blank";
        fill_exp.style.border = "1px solid hsl(0, 100%, 66%)"
    } else {
        error_exp.innerHTML = "";
        fill_exp.style.border = ""
    }
    /* Input DATE*/
    const error_expDate = document.querySelector("#expDate-error");
    if (fill_date.value == fill_date.value.length) {
        error_expDate.innerHTML = "Can't be blank";
        fill_date.style.border = "1px solid hsl(0, 100%, 66%)"
    } else {
        error_expDate.innerHTML = "";
        fill_date.style.border = ""
    }
    /* Input CVC*/
    const error_cvc = document.querySelector("#cvc-error");
    if (fill_cvc.value == fill_cvc.value.length) {
        error_cvc.innerHTML = "Can't be blank";
        fill_cvc.style.border = "1px solid hsl(0, 100%, 66%)"
    } else {
        error_cvc.innerHTML = "";
        fill_cvc.style.border = ""
    }
});

/* Row  Register Complete */
btn_confirm.addEventListener("click", function () {
    const page_confirm = document.querySelector(".container-completion");
    const page_register = document.querySelector(".container-register");
    const error_number = document.querySelector("#number-error");
    const error_cvc = document.querySelector("#cvc-error");

    if (fill_number.value.length < 19 || fill_number.value.length > 19) {
        error_number.innerHTML = "The max number is 19 caracter"
    }else if(fill_cvc.value.length < 3 || fill_cvc.value.length > 3){
        error_cvc.innerHTML = "The max number is 3 caracter"
    }else if (fill_date.value < 22) {
        fill_date.value = " "
    } else if (fill_name.value && fill_number.value && fill_exp.value && fill_date.value && fill_cvc.value != fill_name.value.length && fill_number.value.length && fill_exp.value.length && fill_date.value.length && fill_cvc.value.length) {
        page_confirm.style.display = "grid";
        page_register.style.display = "none"
    }
});