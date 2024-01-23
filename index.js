let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');
let item5 = document.querySelector('.item5');
let item6 = document.querySelector('.item6');
let item7 = document.querySelector('.item7');
let item8 = document.querySelector('.item8');
let boxMsec = document.querySelector('.box-msec')

    function Soat(){

        let vaqt = new Date();
        let tame = vaqt.getTime()
        console.log(tame)

        let hour = vaqt.getHours();
        item1.innerHTML = Math.floor(hour/10);
        item2.innerHTML = hour%10;

                 // minuts
        let min = vaqt.getMinutes();
        item4.innerHTML = Math.floor(min/10);
        item5.innerHTML = min%10;
                 // Seconds
        let sec = vaqt.getSeconds();
        item7.innerHTML = Math.floor(sec/10);
        item8.innerHTML = sec%10;
    }
    
    setInterval(() => {
        Soat()
    }, 1000);


    setInterval(() => {
        if(item6.style.display == 'flex'){
             item6.style.display = 'none'; }
        else{
            item6.style.display = 'flex';
        }
    }, 500);

    setInterval(() => {
        if(item3.style.display == 'flex'){
             item3.style.display = 'none'; }
        else{
            item3.style.display = 'flex';
        }
    }, 1000);

    setInterval(() => {
        let v = new Date();
        let ms = v.getMilliseconds();
        boxMsec.innerHTML = ms;
    }, 1);
