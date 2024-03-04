const new_sit = document.getElementById('new_sit')
const new_usn = document.getElementById('new_usn')
const new_pwd = document.getElementById('new_pwd')
const new_pin = document.getElementById('new_pin')
const new_eml = document.getElementById('new_eml')
const new_num = document.getElementById('new_num')
const new_oth = document.getElementById('new_oth')
const new_acc = document.getElementById('new_acc')
const res_new_acc = document.getElementById('res_new_acc')

const cng_usn = document.getElementById('cng_usn')
const cng_pwd = document.getElementById('cng_pwd')
const cng_pin = document.getElementById('cng_pin')
const cng_eml = document.getElementById('cng_eml')
const cng_num = document.getElementById('cng_num')
const cng_oth = document.getElementById('cng_oth')
const cng_acc = document.getElementById('cng_acc')
const cngaccount = document.getElementById('cngaccount')
const cng_container = document.getElementById('cng_container')

const del_sit = document.getElementById('del_sit')
const del_usn = document.getElementById('del_usn')
const del_pwd = document.getElementById('del_pwd')
const del_pin = document.getElementById('del_pin')
const del_eml = document.getElementById('del_eml')
const del_num = document.getElementById('del_num')
const del_oth = document.getElementById('del_oth')
const del_acc = document.getElementById('del_acc')
const delaccount = document.getElementById('delaccount')
const del_container = document.getElementById('del_container')

const cfm_del = document.getElementById('cfm_del')
const cmfdelaccount = document.getElementById('cmfdelaccount')
const cfmdel_container = document.getElementById('cfmdel_container')
const cfmdel_acc = document.getElementById('cfmdel_acc')

const divikey = '+{ngqy--HZN--ngqy}+'
const nullkey = '+{akjg--HZN--akjg}+'
const xIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'
const uIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/></svg>'
const dIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16"><path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/></svg>'
const eIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>'
var toggleBool = false;

new_acc.addEventListener('click', async () => {
    const sit = new_sit.value
    if (sit == '') { return }
    var usn = nullkeyReplacement(new_usn.value, false)
    var pwd = nullkeyReplacement(new_pwd.value, false)
    var pin = nullkeyReplacement(new_pin.value, false)
    var eml = nullkeyReplacement(new_eml.value, false)
    var num = nullkeyReplacement(new_num.value, false)
    var oth = nullkeyReplacement(new_oth.value, false)

    const content = `${sit}${divikey}${usn}${divikey}${pwd}${divikey}${pin}${divikey}${eml}${divikey}${num}${divikey}${oth}`

    const save = await api.savePass(sit, content, divikey)

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

cng_acc.addEventListener('click', async () => {
    var path = cng_container.getAttribute('name')
    var contentArray = []
    contentArray.push(cngaccount.getAttribute('name'))
    contentArray.push(nullkeyReplacement(cng_usn.value, false))
    contentArray.push(nullkeyReplacement(cng_pwd.value, false))
    contentArray.push(nullkeyReplacement(cng_pin.value, false))
    contentArray.push(nullkeyReplacement(cng_eml.value, false))
    contentArray.push(nullkeyReplacement(cng_num.value, false))
    contentArray.push(nullkeyReplacement(cng_oth.value, false))
    contentArray.push(cng_usn.getAttribute('name'))

    const contentCNG = contentArray.join(divikey)

    const save = await api.saveOver(path, contentCNG)

    location.reload()
})

del_acc.addEventListener('click', () => {
    reveal('cfmdel_container')

    hide('del_container')
})

cfmdel_acc.addEventListener('click', async () => {
    if (cfm_del.value == 'DELETE') {
        var path = del_container.getAttribute('name')
        const deleteFile = await api.deleteFile(path)
        location.reload()
    } else {
        hide('cfmdel_container')
        cfm_del.value = ''
    }
})

function addAccount(site, username, password, pin, email, phone, other, file) {
    let diff = 0
    let oldsite = site
    while ($(`[name="${site}"]`).length != 0) {
        diff++
        site = `${oldsite} (${diff})`
    }

    const large = document.createElement('div')
    large.className = 'account'
    large.id = `${file}`
    large.setAttribute('name', `${site}`)
    const site_title = document.createElement('a')
    site_title.className = 'site'
    site_title.id = 'webname'
    site_title.innerHTML = `${site}<div id=buttondiv><span class=accButtons onclick='expand(this.parentNode.parentNode.parentNode, this)'>${dIcon}</span><span class=accButtons onclick='deleteFile("${file}")'>${xIcon}</span><span class=accButtons onclick='editFile("${file}")'>${eIcon}</span><div>`
    large.appendChild(site_title)
    const container = document.createElement('div')
    container.className = 'inneraccountcontainer'
    large.appendChild(container)
    const usnrow = document.createElement('div')
    usnrow.className = 'accountrow'
    usnrow.id = 'usnrow'
    usnrow.innerHTML = `<span class=text id=username>${nullkeyReplacement(username, true)}</span><a class=textL>Username:</a>`
    container.appendChild(usnrow)
    const pwdrow = document.createElement('div')
    pwdrow.className = 'accountrow'
    pwdrow.id = 'pwdrow'
    pwdrow.innerHTML = `<span class=text id=password>${nullkeyReplacement(password, true)}</span><a class=textL>Password:</a>`
    container.appendChild(pwdrow)
    const pinrow = document.createElement('div')
    pinrow.className = 'accountrow'
    pinrow.id = 'pinrow'
    pinrow.innerHTML = `<span class=text id=pin>${nullkeyReplacement(pin, true)}</span><a class=textL>PIN:</a>`
    container.appendChild(pinrow)
    const emlrow = document.createElement('div')
    emlrow.className = 'accountrow'
    emlrow.id = 'emlrow'
    emlrow.innerHTML = `<span class=text id=email>${nullkeyReplacement(email, true)}</span><a class=textL>Email:</a>`
    container.appendChild(emlrow)
    const numrow = document.createElement('div')
    numrow.className = 'accountrow'
    numrow.id = 'numrow'
    numrow.innerHTML = `<span class=text id=phone>${nullkeyReplacement(phone, true)}</span><a class=textL>Phone:</a>`
    container.appendChild(numrow)
    const othrow = document.createElement('div')
    othrow.className = 'accountrow'
    othrow.id = 'othrow'
    othrow.innerHTML = `<span class=text id=other>${nullkeyReplacement(other, true)}</span><a class=textL>Details:</a>`
    container.appendChild(othrow)
    var labeldiscriminator
    try { labeldiscriminator = site.charAt(0).toUpperCase() }
    catch { labeldiscriminator = '-' }
    if (/[^a-zA-Z]/.test(labeldiscriminator)) { labeldiscriminator = '-' }
    document.getElementById(`acc${labeldiscriminator}`).appendChild(large)
    configure()
}

async function editFile(fileName) {
    const fileArraySingle = await api.loadFileSingle(fileName)
    const toFile = fileArraySingle[0]
    const dataArray = fileArraySingle[1].split(divikey)
    openEditMenu(toFile, dataArray)
}

function openEditMenu(path, data) {
    cng_usn.defaultValue = nullkeyReplacement(data[1], true)
    cng_usn.setAttribute('name', data[7])
    cng_pwd.defaultValue = nullkeyReplacement(data[2], true)
    cng_pin.defaultValue = nullkeyReplacement(data[3], true)
    cng_eml.defaultValue = nullkeyReplacement(data[4], true)
    cng_num.defaultValue = nullkeyReplacement(data[5], true)
    cng_oth.defaultValue = nullkeyReplacement(data[6], true)
    cngaccount.setAttribute('name', data[0])
    cng_container.setAttribute('name', path)

    reveal('cng_container')
}

async function deleteFile(fileName) {
    const fileArraySingle = await api.loadFileSingle(fileName)
    const toFile = fileArraySingle[0]
    const dataArray = fileArraySingle[1].split(divikey)
    openDeleteMenu(toFile, dataArray)
}

function openDeleteMenu(path, data) {
    del_sit.defaultValue = nullkeyReplacement(data[0], true)
    del_usn.defaultValue = nullkeyReplacement(data[1], true)
    del_pwd.defaultValue = nullkeyReplacement(data[2], true)
    del_pin.defaultValue = nullkeyReplacement(data[3], true)
    del_eml.defaultValue = nullkeyReplacement(data[4], true)
    del_num.defaultValue = nullkeyReplacement(data[5], true)
    del_oth.defaultValue = nullkeyReplacement(data[6], true)
    delaccount.setAttribute('name', data[0])
    del_container.setAttribute('name', path)

    reveal('del_container')
}

function nullkeyReplacement(string, bool) {
    if (string == nullkey && bool) { string = '' }
    if (string == '' && !bool) { string = nullkey }
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
    $(`#${parent.id}`).children('.inneraccountcontainer').slideToggle('medium')
    $(`#${parent.id}`).toggleClass('expanded')
    toggleBool = !toggleBool
    if (toggleBool) { element.innerHTML = `${uIcon}` }
    else { element.innerHTML = `${dIcon}` }
}

function changeFont(font) {
    savesettings(font, document.getElementById('palettes').value, document.getElementById('zip_name_box').value)
    $("body").css("font-family", font);
}

function changePalette(colour) {
    savesettings(document.getElementById('fonts').value, colour, document.getElementById('zip_name_box').value)
    if (colour == 'red')
    {
        $('body').css('color', `white`);
        $('body').css('background-color', `lightcoral`);
        $('.containers').css('background-color', `indianred`);
        $('.typerpop').css('background-color', `indianred`);
        $('.account').css('background-color', `#A04040`);
        $('.button').css('background-color', `#A04040`);
    }
    else if (colour == 'purple')
    {
        $('body').css('color', `white`);
        $('body').css('background-color', `#D8A1E7`);
        $('.containers').css('background-color', `#C46EDA`);
        $('.typerpop').css('background-color', `#C46EDA`);
        $('.account').css('background-color', `mediumorchid`);
        $('.button').css('background-color', `mediumorchid`);
    }
    else if (colour == 'blue')
    {
        $('body').css('color', `white`);
        $('body').css('background-color', `lightsky${colour}`);
        $('.containers').css('background-color', `#708EE8`);
        $('.typerpop').css('background-color', `#708EE8`);
        $('.account').css('background-color', `royal${colour}`);
        $('.button').css('background-color', `royal${colour}`);
    }
    else if (colour == 'grey')
    {
        $('body').css('color', `black`);
        $('body').css('background-color', `white`);
        $('.containers').css('background-color', `light${colour}`);
        $('.typerpop').css('background-color', `light${colour}`);
        $('.account').css('background-color', `dark${colour}`);
        $('.button').css('background-color', `dark${colour}`);
    }
}

function resetWindow() {
    setOptions('Trebuchet MS, sans-serif', 'grey');
    changeFont('Trebuchet MS, sans-serif');
    changePalette('grey');
}

function setOptions(font, colour) {
    document.getElementById('fonts').selectedIndex = [...document.getElementById('fonts').options].findIndex(option => option.value === font);
    document.getElementById('palettes').selectedIndex = [...document.getElementById('palettes').options].findIndex(option => option.value === colour);
}

function windowScroll(discriminator) {
    document.getElementById(`acc${discriminator}`).scrollIntoView({ behavior: "smooth" })
}

function configure() {
    const headers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']
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
        addAccount(accountArray[0], accountArray[1], accountArray[2], accountArray[3], accountArray[4], accountArray[5], accountArray[6], accountArray[7])
    })
}

async function savesettings(font, colour, filename) {
    const content = `${font}${divikey}${colour}${divikey}${filename}`

    const save = await api.saveSettings(content, divikey)
}

async function loadsettings() {
    const file = await api.loadSettings()

    const settingArray = file[1].split(divikey)

    setZipName(settingArray[2])
    changeFont(settingArray[0])
    changePalette(settingArray[1])

    setOptions(settingArray[0], settingArray[1])
}

async function exportZip() {
    filename = document.getElementById('zip_name_box').value

    savesettings(document.getElementById('fonts').value, document.getElementById('palettes').value, filename)

    const expZip = await api.packZip(filename)

    var save_status = `Your book, ${filename}, has successfully saved to the exports folder!`

    if (!expZip[1]) {
        save_status = `There was an error exporting your book: ${expZip[0]}`
    }

    document.getElementById('save_status_desc').innerHTML = save_status
    
    reveal('save_container')
}

async function openExportFolder() {
    const explorer = await api.openExplorer(`exports`)
}

async function importZip(open_bool) {
    const result = await api.showDialog('');

    if (result && result.length > 0) {
        const filePath = result[0]

        const copy = await api.copyZip(filePath)

        if (open_bool) {
            const clear = await api.clearFiles()
            const zipToGet = (await api.unpackZip(filePath)).slice(2)
            
            zipToGet.forEach(async (file) => {
                const split_file_contents = file.content.split(divikey)
                const addToApp = await api.savePass(split_file_contents[0], file.content, divikey)
            })

            location.reload()
        }
        else {
            hide('import_container')
            
            var import_status = `Your book has successfully saved to the exports folder!`

            if (!copy[0]) {
                import_status = `There was an error exporting your book: ${copy[1]}`
            }

            document.getElementById('import_status_desc').innerHTML = import_status
    
            reveal('import_background_container')
        }
    }
}

async function importSavedZip() {
    const result = await api.showDialog('exports');

    if (result && result.length > 0) {
        const filePath = result[0]

        const clear = await api.clearFiles()
        const zipToGet = (await api.unpackZip(filePath)).slice(2)
        
        zipToGet.forEach(async (file) => {
            const split_file_contents = file.content.split(divikey)
            const addToApp = await api.savePass(split_file_contents[0], file.content, divikey)
        })

        location.reload()
    }
}

async function newBook() {
    setZipName('')

    const clear = await api.clearFiles()
    
    location.reload()
}

function setZipName(newName) {
    document.getElementById('zip_name_box').value = newName
}

window.onload = async () => {
    configure()
    await loadfiles()
    await loadsettings()
}