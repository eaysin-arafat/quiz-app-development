const myButton = document.querySelector('.my_button')
const ruleBox = document.querySelector('.rules_box')
const exitButton = document.querySelector('.buttons .exit_button')
const continuButton = document.querySelector('.continu_button')
const question = document.querySelector('.question')


myButton.onclick = () => {
    ruleBox.classList.add("active_info")
}

exitButton.onclick = () => {
    ruleBox.classList.remove("active_info")
}

continuButton.onclick = () => {
    ruleBox.classList.remove("active_info")
    question.classList.add("activeQuiz")
    showQuestion(0)
}

const nextButton = document.querySelector(".next_button")

let questionCount = 0

nextButton.onclick = () => {
    if(questionCount < questions.length - 1) {
        questionCount++
        showQuestion(questionCount)
    } else {
        console.log('You Have Completed Your Task')
    }
}

function showQuestion (index) {
    const queText = document.querySelector('.text_question_all')
    const optionList = document.querySelector('.my_options')
    let optionTag = `<div class="options">` + questions[index].options[0] + `</div>`
                   + `<div class="options">` + questions[index].options[1] + `</div>`
                   + `<div class="options">` + questions[index].options[2] + `</div>`
                   + `<div class="options">` + questions[index].options[3] + `</div>`
    let queTag = "<span>" + questions[index].numb + '.' + ' ' + questions[index].question + "</span>"
    queText.innerHTML = queTag
    optionList.innerHTML = optionTag
    const totalQuestion = document.querySelector('.total_question')
    let totalQuestionTag = '<p>' +questions[index].numb + ' ' + 'Out of 5' + '</p>'
    totalQuestion.innerHTML = totalQuestionTag

    const option = optionList.querySelectorAll(".options")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent
    let correctAnswer = questions[questionCount].answer
 

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct')
        console.log('Answer is Correct')
    }else {
        answer.classList.add('incorrect')
        console.log('Answer is Wrong')
    }
    let allOptions = optionList.children.length

    for(let i=0; i<allOptions; i++){
        optionList.children[i].classList.add("disabled"); 
        }

}