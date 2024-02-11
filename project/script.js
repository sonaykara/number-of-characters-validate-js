const textarea = document.getElementById("textArea")

const charNumberOfChar = document.getElementById("charNumberOfChar")
const charMaxNumber = document.getElementById("charMaxNumber")

textarea.addEventListener("keyup" , () => {

    let maxLength = 50;
    let valueOfTextArea = textarea.value;
    let valueTextAreaLength = valueOfTextArea.length;


    if(maxLength >= valueTextAreaLength)  {

        charNumberOfChar.textContent = `Number Of Characters :` + " " + valueTextAreaLength
        let maxChar = maxLength - valueTextAreaLength ;
        charMaxNumber.textContent = `Max Number Of Characters :` + " " + maxChar

    } else {
       
        textarea.setAttribute('disabled', 'true')
        
        
    }
 

})



    