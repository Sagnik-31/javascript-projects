const answer= {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
}

const form = document.getElementById('quizForm')
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data = new FormData(form);
    finalscore = 0;

    for(let [name,value] of data.entries()){
        if(answer[name]==value){
            finalscore += 1
        }

    }

    document.getElementById("out").textContent = `Your score is ${finalscore} out of 5`
    
    form.reset();

})