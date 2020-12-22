setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    hrotation = hour*30 + mn/2;
    mnrotation = mn*6;
    scrotation = sc*6;

    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mnrotation}deg)`;
    sec.style.transform = `rotate(${scrotation}deg)`;
    
}, 1000);