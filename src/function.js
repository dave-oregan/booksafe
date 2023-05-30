const title_el = document.getElementById('title')
const new_sit = document.getElementById('new_sit')
const new_usn = document.getElementById('new_usn')
const new_pwd = document.getElementById('new_pwd')
const new_pin = document.getElementById('new_pin')
const new_eml = document.getElementById('new_eml')
const new_num = document.getElementById('new_num')
const new_scq = document.getElementById('new_scq')
const new_acc = document.getElementById('new_acc')
const divikey = '+{ngqy--HZN--ngqy}+'
const nullkey = '+{akjg--HZN--akjg}+'

title_el.innerText = api.title

new_acc.addEventListener('click', async () => {
    const sit = new_sit.value
    if (sit == '') { return }
    const usn = new_usn.value
    if (usn == '') { usn = nullkey }
    const pwd = new_pwd.value
    if (pwd == '') { pwd = nullkey }
    const pin = new_pin.value
    if (pin == '') { pin = nullkey }
    const eml = new_eml.value
    if (eml == '') { eml = nullkey }
    const num = new_num.value
    if (num == '') { num = nullkey }
    const scq = new_scq.value
    if (scq == '') { scq = nullkey }

    const content = `${sit}${divikey}${usn}${divikey}${pwd}${divikey}${pin}${divikey}${eml}${divikey}${num}${divikey}${scq}`
    
    const save = await api.savePass({
        sit, content
    })
    
    console.log(save)

    new_sit.value = ''
    new_usn.value = ''
    new_pwd.value = ''
    new_pin.value = ''
    new_eml.value = ''
    new_num.value = ''
    new_scq.value = ''
})

function reveal(id) {
    const hidden = document.getElementById(id)
    hidden.classList.remove('hidden')
}

function hide(id) {
    const shown = document.getElementById(id)
    shown.classList.add('hidden')
}