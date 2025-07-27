// Reservation data
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

// Main function triggered by the button
function checkReservation() {
  const name = document.getElementById("nameInput").value
  const resultDiv = document.getElementById("result")

  if (reservations[name]) {
    if (!reservations[name].claimed) {
      resultDiv.innerHTML = `Welcome, ${name}`
    } else {
      resultDiv.innerHTML = "Hmm, someone already claimed this reservation"
    }
  } else {
    resultDiv.innerHTML = "You have no reservation"
  }
}
