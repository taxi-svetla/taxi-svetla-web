document.getElementById('booking-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = ['Dobrý den, mám zájem o objednání přepravy.','',`Jméno: ${data.get('name')}`,`Telefon: ${data.get('phone')}`,`Odkud: ${data.get('from')}`,`Kam: ${data.get('to')}`,`Datum: ${data.get('date')}`,`Čas: ${data.get('time')}`,`Počet osob: ${data.get('people')}`,`Poznámka: ${data.get('note') || '—'}`].join('\n');
  window.location.href = `mailto:fakturace.taxi.uhlir@gmail.com?subject=${encodeURIComponent('Objednávka přepravy z webu')}&body=${encodeURIComponent(body)}`;
});
