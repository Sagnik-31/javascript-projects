const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const boy = document.getElementById('Boy')
    const girl = document.getElementById('Girl')

    l1 = boy.value.length;
    l2 = girl.value.length;

    const result = Math.pow(l1+l2,6)%101;

    document.querySelector('h2').textContent = `Result ${result}%`;

})