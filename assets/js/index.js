const inputTyping = (e)=>{
    const input = e.target
    input.classList.add('labelShow')
}
const inputUnFocus = (e)=>{
    const input = e.target
    if(input.value.length>0){
        return
    }
    input.classList.remove('labelShow')
}

const form_fields = document.querySelectorAll('.form_field input')

for(input of form_fields){
    input.addEventListener('input',inputTyping)
    input.addEventListener('focus',inputTyping)
    input.addEventListener('blur',inputUnFocus)
}