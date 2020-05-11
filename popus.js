(function(){
    let enteredTime;
    document.getElementById('start-btn').addEventListener('click', ()=>{
        enteredTime = document.getElementById('break-time').value*60
        document.getElementById('counter').textContent = enteredTime;
        let mins = Math.floor(enteredTime/60);
        let secs = Math.floor((enteredTime%60)/60);

        (function(){
            setInterval(() => {
                if(secs ==0){
                    mins--
                    secs=59
                }else{
                    secs--
                }
                document.getElementById('counter').textContent = `${mins}:${secs <10 ? `0${secs}`: secs}`
            }, 1000);
            
        })()

        

    })
})()