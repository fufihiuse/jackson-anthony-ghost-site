let red = "no";

const booPopup = () => {
    if (red === "no") {
        alert("Boo!");
    }
}

const alertMode = () => {
    red = true;
    const alarm = new Audio("alarm.mp3");

    alarm.play();
    setInterval(() => { alarm.currentTime = 0; alarm.play(); }, 11500);

    document.body.style.backgroundImage = "url('')";
    document.body.style.backgroundColor = "black";

    document.body.innerHTML = `
    <center>
        <h1>ALERT!!!</h1>
        <div id="emergency-text">
            <h2 class="underline">If this is a true ghost emergency, take these steps to minimize risk:</h2>
            <ol>
                <li>If there are any mortal injuries, contact emergency services immediately!</li>
                <li>If you are being haunted by a possessed item, find an appropriately sized lockable box, and douse
                    the inside with ketchup. Ghosts HATE ketchup.</li>
                <li>If the house/apartment/domicile/building itself is haunted, <strong>VACATE THE PREMISES</strong>!
                </li>
                <li>Eat as much salt (NaCl) as you can as quickly as possible, to avoid ghostly possession</li>
                <li>CALL US: <a href="tel:+12107010873">(210)701-0873</a></li>
            </ol>
        </div>
    </center>
    `;

    setInterval(
        () => {
            red = !red;
            if (red) {
                document.body.style.backgroundColor = "red";
            }
            else {
                document.body.style.backgroundColor = "black";
            }
        }, 500)
}

window.onload = () => {
    setTimeout(booPopup, 30000);
    let button = document.querySelector("button");
    button.onclick = alertMode;
}