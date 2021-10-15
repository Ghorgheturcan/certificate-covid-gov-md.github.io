// Copy this code in browser console change data, and hit enter
// in clipboard you will have URL
(() => {
    const url = `https://certificate-covid-gov-md.github.io/verifym.php/index.html`
    const hash = btoa(encodeURIComponent(new URLSearchParams({
        nume: 'John',
        prenume: 'Smith',
        data_nastere: '1991-09-03',
        data_vaccin: '2021-07-18'
    })))
    copy(`${url}#${hash}`)
})()