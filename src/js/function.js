const new_sit = document.getElementById('new_sit')
const new_usn = document.getElementById('new_usn')
const new_pwd = document.getElementById('new_pwd')
const new_pin = document.getElementById('new_pin')
const new_eml = document.getElementById('new_eml')
const new_num = document.getElementById('new_num')
const new_oth = document.getElementById('new_oth')
const new_acc = document.getElementById('new_acc')
const res_new_acc = document.getElementById('res_new_acc')
const cng_sit = document.getElementById('cng_sit')
const cng_usn = document.getElementById('cng_usn')
const cng_pwd = document.getElementById('cng_pwd')
const cng_pin = document.getElementById('cng_pin')
const cng_eml = document.getElementById('cng_eml')
const cng_num = document.getElementById('cng_num')
const cng_oth = document.getElementById('cng_oth')
const cng_acc = document.getElementById('cng_acc')
const res_cng_acc = document.getElementById('res_cng_acc')
const divikey = '+{ngqy--HZN--ngqy}+'
const nullkey = '+{akjg--HZN--akjg}+'

new_acc.addEventListener('click', async () => {
    const sit = new_sit.value
    if (sit == '') { return }
    var usn = new_usn.value
    if (usn == '') { usn = nullkey }
    var pwd = new_pwd.value
    if (pwd == '') { pwd = nullkey }
    var pin = new_pin.value
    if (pin == '') { pin = nullkey }
    var eml = new_eml.value
    if (eml == '') { eml = nullkey }
    var num = new_num.value
    if (num == '') { num = nullkey }
    var oth = new_oth.value
    if (oth == '') { oth = nullkey }

    const content = `${sit}${divikey}${usn}${divikey}${pwd}${divikey}${pin}${divikey}${eml}${divikey}${num}${divikey}${oth}`
    
    const save = await api.savePass({ sit, content })

    location.reload()
})

res_new_acc.addEventListener('click', () => {
    new_sit.value = ''
    new_usn.value = ''
    new_pwd.value = ''
    new_pin.value = ''
    new_eml.value = ''
    new_num.value = ''
    new_oth.value = ''
})

function addAccount(site, username, password, pin, email, phone, other) {
    let diff = 0
    while ($(`#${site.replace(/[^a-zA-Z0-9]/g,'_')}`).length != 0) {
        diff++
        site = `${site}${diff}`
    }

    const large = document.createElement('div')
        large.className = 'account'
        large.id = `${site.replace(/[^a-zA-Z0-9]/g,'_')}`
    const site_title = document.createElement('a')
        site_title.className = 'site'
        site_title.id = 'webname'
        site_title.innerHTML = `${site}<span id=accButtons onclick='expand(this.parentNode.parentNode, this)'>▼</span><span id=accButtons onclick='editFile(${site.replace(/[^a-zA-Z0-9]/g,'_')})'>EDIT</span>`
        large.appendChild(site_title)
    const container = document.createElement('div')
        container.className = 'inneraccountcontainer'
        large.appendChild(container)
    const usnrow = document.createElement('div')
        usnrow.className = 'accountrow'
        usnrow.id = 'usnrow'
        usnrow.innerHTML = `<a class=textL>Username:</a><a class=text id=username>${nullkeyReplacement(username)}</a>`
        container.appendChild(usnrow)
    const pwdrow = document.createElement('div')
        pwdrow.className = 'accountrow'
        pwdrow.id = 'pwdrow'
        pwdrow.innerHTML = `<a class=textL>Password:</a><a class=text id=password>${nullkeyReplacement(password)}</a>`
        container.appendChild(pwdrow)
    const pinrow = document.createElement('div')
        pinrow.className = 'accountrow'
        pinrow.id = 'pinrow'
        pinrow.innerHTML = `<a class=textL>PIN:</a><a class=text id=pin>${nullkeyReplacement(pin)}</a>`
        container.appendChild(pinrow)
    const emlrow = document.createElement('div')
        emlrow.className = 'accountrow'
        emlrow.id = 'emlrow'
        emlrow.innerHTML = `<a class=textL>Email:</a><a class=text id=email>${nullkeyReplacement(email)}</a>`
        container.appendChild(emlrow)
    const numrow = document.createElement('div')
        numrow.className = 'accountrow'
        numrow.id = 'numrow'
        numrow.innerHTML = `<a class=textL>Phone:</a><a class=text id=phone>${nullkeyReplacement(phone)}</a>`
        container.appendChild(numrow)
    const othrow = document.createElement('div')
        othrow.className = 'accountrow'
        othrow.id = 'othrow'
        othrow.innerHTML = `<a class=textL>Details:</a><a class=text id=other>${nullkeyReplacement(other)}</a>`
        container.appendChild(othrow)
    var labeldiscriminator
    try { labeldiscriminator = site.charAt(0).toUpperCase() }
    catch { labeldiscriminator = '-' }
    document.getElementById(`acc${labeldiscriminator}`).appendChild(large)
    configure()
}

async function editFile(fileName) {
    fileName = fileName.id+''
    const fileArraySingle = await api.loadFileSingle(fileName)
    const toFile = fileArraySingle[0]
    const dataArray = fileArraySingle[1].split(divikey)
    openEditMenu(toFile, dataArray)
}

function openEditMenu(path, data) {
    cng_usn.value = nullkeyReplacement(data[1])
    cng_pwd.value = nullkeyReplacement(data[2])
    cng_pin.value = nullkeyReplacement(data[3])
    cng_eml.value = nullkeyReplacement(data[4])
    cng_num.value = nullkeyReplacement(data[5])
    cng_oth.value = nullkeyReplacement(data[6])
    reveal('cng_container')
}

function nullkeyReplacement(string) {
    if (string == nullkey) { string = '' }
    return string
}

function reveal(id) {
    const hidden = document.getElementById(id)
    hidden.classList.remove('hidden')
}

function hide(id) {
    const shown = document.getElementById(id)
    shown.classList.add('hidden')
}

function expand(parent, element) {
    if (element.innerText == '\u25BC') { $(`#${parent.id}`).children('.inneraccountcontainer').slideToggle('slow', () => { element.innerText = '\u25B2' }) }
    else { $(`#${parent.id}`).children('.inneraccountcontainer').slideToggle('slow', () => { element.innerText = '\u25BC' }) }
}

function windowScroll(discriminator) {
    document.getElementById(`acc${discriminator}`).scrollIntoView({ behavior: "smooth" })
}

function configure() {
    const headers = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','-' ]
    headers.forEach((x) => {
        const header = document.getElementById(`acc${x}`)
        if (header.childElementCount == 0 || header.childElementCount == 1) {
            hide(`acc${x}`)
            hide(`scr${x}`)
        }
        else {
            reveal(`acc${x}`)
            reveal(`scr${x}`)
        }
    })
}

async function loadfiles() {
    const fileArray = await api.loadFile()
    fileArray.forEach((account) => {
        const accountArray = account.split(divikey)
        addAccount(accountArray[0],accountArray[1],accountArray[2],accountArray[3],accountArray[4],accountArray[5],accountArray[6])
    })
}

window.onload = async () => {
    configure()
    await loadfiles()
}