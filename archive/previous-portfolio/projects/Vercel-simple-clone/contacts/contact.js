
const submitButton = document.querySelector(".submit-button");

const formInputs = document.querySelectorAll(".style_input")

submitButton.disabled = true;


let isFilled = false;

formInputs.forEach((input) =>
{
    input.addEventListener("keyup", () =>
    {
        submitButton.disabled = !checkAllInputsFilled();
    })
})


function checkAllInputsFilled()
{
    for (const input of formInputs)
    {
        if (input.value.trim() === "")
        {
            return false;
        }
    }
    return true;
}

// for submiting form to google sheets


const scriptURL = "https://script.google.com/macros/s/AKfycbwcFQSKPFzjdTqS1uqc6LZ7UcmYaSRvXrYXAaB-QhO-Iqh8qNyN7q_iA4CD17K1kILI/exec"
const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert('Success!', response))
      .catch(error => alert('Error!', error.message))

      form.reset();
  })
