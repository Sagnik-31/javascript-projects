// upto 12L no tax
// 12-16 = 15%
// 16-20 = 20%
// 20-24 = 25%


const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

  const income = document.querySelector('#income')
  const amount = parseInt(income.value)
  const result = document.querySelector('h2')

    let totalTax = 0
    if(amount<=1200000){
        totalTax = 0;
    }
    else if(amount<=1600000){
        totalTax = (amount-1200000) * .15
    }
    else if(amount<=2000000){
        totalTax = (amount-1600000) * .20 + 60000
    }
    else if(amount<=2400000){
        totalTax = (amount-2000000) * .25 + 60000 + 80000
    }
    else{
        totalTax = (amount-2400000)*.30 + 60000 + 80000 + 100000
    }

    result.textContent = `Total Tax: ${totalTax}`
    form.reset();
})