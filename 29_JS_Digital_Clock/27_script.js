// Indian Watch
let indianWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Kolkata'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('en-US',options);
    document.querySelector('#indian-time').textContent = time;
    document.querySelector('#indian-date').textContent = date;
};
setInterval(indianWatch,1000);

// USA Watch
let usaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'America/New_York'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('en-US',options);
    document.querySelector('#usa-time').textContent = time;
    document.querySelector('#usa-date').textContent = date;
};
setInterval(usaWatch,1000);

// USA Watch
let chinaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Shanghai'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('en-US',options);
    document.querySelector('#china-time').textContent = time;
    document.querySelector('#china-date').textContent = date;
};
setInterval(chinaWatch,1000);