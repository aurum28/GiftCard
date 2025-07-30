function submitName() {
  const name = document.getElementById('nameInput').value.trim();
  const allowedNames = ['Ali', 'Sara', 'Hazik', 'Haris', 'Iftikhar', 'Alizay', 'Hamza', 'Mubashir', 'Zohaib', 'Taha', 'Muneeb', 'Ibrahim', 'Sami', 'Aisha', 'Usman', 'Amna', 'Fatima', 'Zaibii']; // Add more verified names here
  const error = document.getElementById('error');

  if (name === '') {
    error.textContent = 'Please enter your name.';
    return;
  }

  if (allowedNames.includes(name)) {
    localStorage.setItem('friendName', name);
    localStorage.setItem('verified', 'yes');
    window.location.href = 'card.html';
  } else {
    error.textContent = 'Sorry, you are not on the verified friends list.';
    localStorage.removeItem('verified');
  }
}
