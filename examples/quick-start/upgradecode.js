export function setupgradecode(document) {
  console.log("!!! stuff here");
document.addEventListener('DOMContentLoaded', (event) => {
  let upgradeCode = localStorage.getItem('quick_start_upgrade_code');
  if (!upgradeCode) {
    upgradeCode = this.crypto.randomUUID();
    localStorage.setItem('quick_start_upgrade_code', upgradeCode);
  }

  Array.from(document.getElementsByTagName('span'))
       .filter(s => s.textContent === 'PUT-GUID-HERE')
       .forEach(s => s.innerText = upgradeCode);
});
}


/*
<script>{`
document.addEventListener('DOMContentLoaded', (event) => {
  let upgradeCode = localStorage.getItem('quick_start_upgrade_code');
  if (!upgradeCode) {
    upgradeCode = this.crypto.randomUUID();
    localStorage.setItem('quick_start_upgrade_code', upgradeCode);
  }

  Array.from(document.getElementsByTagName('span'))
       .filter(s => s.textContent === 'PUT-GUID-HERE')
       .forEach(s => s.innerText = upgradeCode);

  document.querySelectorAll('button[data-code]')
          .forEach(button => {
            console.log('!!! button', button);
            console.log('!!! button.dataset', button.dataset);
            const dataCodeAttribute = button.dataset.code;
            console.log('!!! dataCodeAttribute', dataCodeAttribute);
            button.dataset.code = button.dataset.code.replace('PUT-GUID-HERE', upgradeCode);
          });
});
`}</script>
*/
