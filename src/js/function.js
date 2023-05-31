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

function addAccount(site, username, password, pin, email, phone, other) {
    if (username == nullkey) { username = '' }
    if (password == nullkey) { password = '' }
    if (pin == nullkey) { pin = '' }
    if (email == nullkey) { email = '' }
    if (phone == nullkey) { phone = '' }
    if (other == nullkey) { other = '' }

    const large = document.createElement('div')
        large.className = 'account'
        large.id = 'name'
    const site_title = document.createElement('a')
        site_title.className = 'site'
        site_title.id = 'webname'
        site_title.innerHTML = `${site}<span id=accExpand onclick='expand(this.parentNode.parentNode, this)'>▼</span>`
        large.appendChild(site_title)
    const container = document.createElement('div')
        container.className = 'innercontainer'
        large.appendChild(container)
    const usnrow = document.createElement('div')
        usnrow.className = 'accountrow'
        usnrow.id = 'usnrow'
        usnrow.innerHTML = `<a class=textL>Username:</a><a class=text id=username>${username}</a>`
        container.appendChild(usnrow)
    const pwdrow = document.createElement('div')
        pwdrow.className = 'accountrow'
        pwdrow.id = 'pwdrow'
        pwdrow.innerHTML = `<a class=textL>Password:</a><a class=text id=password>${password}</a>`
        container.appendChild(pwdrow)
    const pinrow = document.createElement('div')
        pinrow.className = 'accountrow'
        pinrow.id = 'pinrow'
        pinrow.innerHTML = `<a class=textL>PIN:</a><a class=text id=pin>${pin}</a>`
        container.appendChild(pinrow)
    const emlrow = document.createElement('div')
        emlrow.className = 'accountrow'
        emlrow.id = 'emlrow'
        emlrow.innerHTML = `<a class=textL>Email:</a><a class=text id=email>${email}</a>`
        container.appendChild(emlrow)
    const numrow = document.createElement('div')
        numrow.className = 'accountrow'
        numrow.id = 'numrow'
        numrow.innerHTML = `<a class=textL>Phone:</a><a class=text id=phone>${phone}</a>`
        container.appendChild(numrow)
    const othrow = document.createElement('div')
        othrow.className = 'accountrow'
        othrow.id = 'othrow'
        othrow.innerHTML = `<a class=textL>Other:</a><a class=text id=other>${other}</a>`
        container.appendChild(othrow)
    var labeldiscriminator
    try { labeldiscriminator = site.charAt(0).toUpperCase() }
    catch { labeldiscriminator = '-' }
    document.getElementById(`acc${labeldiscriminator}`).appendChild(large)
    configure()
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