inc = document.getElementById('increase')
dec = document.getElementById('decrease')

count = 0
increase.addEventListener('click',()=>{
    count +=1
    document.getElementById('result').textContent = count
})
decrease.addEventListener('click',()=>{
    count -=1
    document.getElementById('result').textContent = count
})

reset.addEventListener('click',()=>{

    document.getElementById('result').textContent = 0

})


