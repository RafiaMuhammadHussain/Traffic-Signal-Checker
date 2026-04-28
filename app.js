function clearAll() {
    document.getElementById("message").innerHTML = "";

    document.getElementById("redLight").className = "light";
    document.getElementById("yellowLight").className = "light";
    document.getElementById("greenLight").className = "light";
}

function signalChecker() {
    let color = document.getElementById("colorInput").value.toLowerCase();
    let message = document.getElementById("message");

    // Reset lights
    document.getElementById("redLight").className = "light";
    document.getElementById("yellowLight").className = "light";
    document.getElementById("greenLight").className = "light";

    if (color === "") {
        message.innerHTML = "⚠️ Please enter a color first!";
    }
    else if (color === "red") {
        message.innerHTML = "🛑 Must Stop";
        document.getElementById("redLight").className = "light red-on";
    }
    else if (color === "yellow") {
        message.innerHTML = "⚠️ Ready To Move";
        document.getElementById("yellowLight").className = "light yellow-on";
    }
    else if (color === "green") {
        message.innerHTML = "✅ Move Now";
        document.getElementById("greenLight").className = "light green-on";
    }
    else {
        message.innerHTML = "❌ Invalid Color!";
    }
}
