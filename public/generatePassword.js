 import { restClient } from '@polygon.io/client-js';
const rest = restClient("YOUR_API_KEY");

function generatePassword(length = 8) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
      return password;
    }

    document.getElementById('password').textContent = generatePassword();
   

rest.reference.tickerNews({
	order: "asc",
	limit: 10,
	sort: "published_utc"
}).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});