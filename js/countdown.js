
function startCountdown(date = undefined, time = undefined) {
    let targetDate = new Date();

    if (date) {
        const [day, month, year] = date.split(' ')[0].split('.');
        targetDate = new Date(`${month}/${day}/${year} ${date.split(' ')[1]}`);
    } else if (time) {
        const timeParts = time.split('m');
        const minutes = parseInt(timeParts[0]);
        const seconds = parseInt(timeParts[1].replace('s', ''));

        targetDate = new Date();
        targetDate.setMinutes(targetDate.getMinutes() + minutes);
        targetDate.setSeconds(targetDate.getSeconds() + seconds);
    }

    // Update the count down every 1 second
    const x = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = targetDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

        // Display the result in the element with id="demo"
        document.querySelector('.countdown__days').innerHTML = days;
        document.querySelector('.countdown__hours').innerHTML = hours;
        document.querySelector('.countdown__min').innerHTML = minutes;
        document.querySelector('.countdown__sec').innerHTML = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector('.countdown__days').innerHTML = '00';
            document.querySelector('.countdown__hours').innerHTML = '00';
            document.querySelector('.countdown__min').innerHTML = '00';
            document.querySelector('.countdown__sec').innerHTML = '00';
        }
    }, 1000);
}