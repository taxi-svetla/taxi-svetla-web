const cookieBar = document.getElementById('cookie-bar');
const savedConsent = localStorage.getItem('taxi-svetla-cookie-consent');
if (savedConsent) cookieBar.hidden = true;
function saveCookieChoice(choice) { localStorage.setItem('taxi-svetla-cookie-consent', choice); cookieBar.hidden = true; }
document.getElementById('cookies-essential').addEventListener('click', () => saveCookieChoice('essential'));
document.getElementById('cookies-accept').addEventListener('click', () => saveCookieChoice('accepted'));
