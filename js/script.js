let input = $("#input-box");
let buttons = document.querySelectorAll('button');
let string = "";
let btnArray = Array.from(buttons)

btnArray.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        if (e.target.innerHTML === "="){
            string = eval(string);
            input.val(string)
        }

    })
})