// countdown.js

function startCountdown() {
    // Haal de geselecteerde datum en tijd op
    const selectedDate = document.getElementById("userDate").value;
    const selectedTime = document.getElementById("userTime").value;
    
    // Combineer de datum en tijd tot één string in het formaat "YYYY-MM-DDTHH:MM"
    const combinedDateTimeString = `${selectedDate}T${selectedTime}:00`;
  
    // Controleer of de gecombineerde datum en tijd geldig is
    if (isNaN(new Date(combinedDateTimeString))) {
      alert("Ongeldige datum of tijd.");
      return;
    }
    
    // Parse de gecombineerde datum en tijd
    const targetDate = new Date(combinedDateTimeString);
    
    // Haal het huidige tijdstip op
    const currentDate = new Date();
    
    // Bereken het verschil in seconden tussen het doel en het huidige tijdstip
    const timeLeftInSeconds = (targetDate - currentDate) / 1000;
    
    if (timeLeftInSeconds > 0) {
      document.getElementById("countdownResult").innerText = `Het duurt nog ${timeLeftInSeconds.toFixed(2)} seconden`;
    } else {
      document.getElementById("countdownResult").innerText = "De ingevoerde datum en tijd liggen in het verleden.";
    }
  }
  