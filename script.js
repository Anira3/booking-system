const form = document.getElementById('bookingForm');
const list = document.getElementById('reservationList');

let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

function renderReservations() {
  list.innerHTML = '';
  reservations.forEach((r, index) => {
    const li = document.createElement('li');
    li.className = "border p-2 rounded bg-gray-50";
    li.textContent = `${r.name} - ${r.date} at ${r.time}`;
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  reservations.push({ name, date, time });
  localStorage.setItem('reservations', JSON.stringify(reservations));

  renderReservations();
  form.reset();
});

renderReservations();
