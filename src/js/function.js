const new_sit = document.getElementById('new_sit')
const new_usn = document.getElementById('new_usn')
const new_pwd = document.getElementById('new_pwd')
const new_pin = document.getElementById('new_pin')
const new_eml = document.getElementById('new_eml')
const new_num = document.getElementById('new_num')
const new_oth = document.getElementById('new_oth')
const new_acc = document.getElementById('new_acc')
const divikey = '+{ngqy--HZN--ngqy}+'
const nullkey = '+{akjg--HZN--akjg}+'

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
    const oth = new_oth.value
    if (oth == '') { oth = nullkey }

    const content = `${sit}${divikey}${usn}${divikey}${pwd}${divikey}${pin}${divikey}${eml}${divikey}${num}${divikey}${oth}`
    
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
    new_oth.value = ''
})

function reveal(id) {
    const hidden = document.getElementById(id)
    hidden.classList.remove('hidden')
}

function hide(id) {
    const shown = document.getElementById(id)
    shown.classList.add('hidden')
}

function expand(parent, element) {
    if (element.innerText == '\u25BC') {
        parent.classList.add('expanded')
        element.innerText = '\u25B2'
    } else {
        parent.classList.remove('expanded')
        element.innerText = '\u25BC'
    }
}

function configure() {
    const headers = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','-' ]
    headers.forEach((x) => {
        const header = document.getElementById(`acc${x}`)
        if (header.childElementCount == 0 || header.childElementCount == 1) { hide(`acc${x}`) }
        else { reveal(`acc${x}`) }
    })
}

window.onload = () => {
    configure()
}