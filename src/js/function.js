const new_sit = document.getElementById('new_sit')
const new_usn = document.getElementById('new_usn')
const new_pwd = document.getElementById('new_pwd')
const new_pin = document.getElementById('new_pin')
const new_eml = document.getElementById('new_eml')
const new_num = document.getElementById('new_num')
const new_oth = document.getElementById('new_oth')
const new_acc = document.getElementById('new_acc')
const res_new_acc = document.getElementById('res_new_acc')

const cng_web = document.getElementById('cng_sit')
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

const s_bar = document.getElementById('s_bar')

const new_btn = document.getElementById('newbutton')
const set_btn = document.getElementById('settingbutton')
const abt_btn = document.getElementById('aboutbutton')

var toggleBool = false

const divikey = '+{ngqy--HZN--ngqy}+'
const nullkey = '+{akjg--HZN--akjg}+'
const xIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'
const uIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/></svg>'
const dIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16"><path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/></svg>'
const eIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>'
const plusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>'
const settingIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/></svg>'
const infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.18em" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16"><path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"/></svg>'

const languages = language_list

const letters = letter_list

var __language = document.getElementById('languages').value

async function changeLanguage(language) {
    __language = language
    
    savesettings(document.getElementById('fonts').value, document.getElementById('palettes').value, document.getElementById('zip_name_box').value, __language)

    const l_num = getLangNumber(__language)

    // Titles
    document.getElementById('top_title').innerText = languages[l_num].title
    document.getElementById('title').innerText = languages[l_num].title
    document.getElementById('title_nac').innerHTML = languages[l_num].section.nac
    document.getElementById('title_set').innerHTML = languages[l_num].section.set
    document.getElementById('title_abt').innerHTML = languages[l_num].section.abt
    document.getElementById('title_edt').innerHTML = languages[l_num].section.edt
    document.getElementById('title_dlt').innerHTML = languages[l_num].section.dlt
    document.getElementById('title_dl2').innerHTML = languages[l_num].section.dlt
    document.getElementById('title_cnb').innerHTML = languages[l_num].section.cnb
    document.getElementById('title_isb').innerHTML = languages[l_num].section.isb
    document.getElementById('title_inb').innerHTML = languages[l_num].section.inb
    document.getElementById('title_ib2').innerHTML = languages[l_num].section.inb
    document.getElementById('title_exb').innerHTML = languages[l_num].section.exb

    // Discriptions
    document.getElementById('dsc_cnb').innerText = languages[l_num].description[0]
    document.getElementById('dsc_ib2').innerText = languages[l_num].description[1]
    document.getElementById('dsc_isb').innerText = languages[l_num].description[2]
    document.getElementById('dsc_dl2').innerText = languages[l_num].description[3]

    // Buttons
    checkForSizeChange()
    document.getElementById('set_new').innerText = languages[l_num].buttons.new
    document.getElementById('set_ope').innerText = languages[l_num].buttons.opn
    document.getElementById('set_fol').innerText = languages[l_num].buttons.fdr
    document.getElementById('set_imp').innerText = languages[l_num].buttons.imp
    document.getElementById('set_exp').innerText = languages[l_num].buttons.exp
    document.getElementById('btn_cl1').innerText = languages[l_num].buttons.cls
    document.getElementById('btn_cl2').innerText = languages[l_num].buttons.cls
    document.getElementById('btn_fl1').innerText = languages[l_num].buttons.fdr
    document.getElementById('btn_fl2').innerText = languages[l_num].buttons.fdr
    document.getElementById('btn_ope').innerText = languages[l_num].buttons.opn
    document.getElementById('btn_imp').innerText = languages[l_num].buttons.imp
    document.getElementById('btn_iao').innerText = languages[l_num].buttons.iao
    document.getElementById('new_acc').innerText = languages[l_num].buttons.smt
    document.getElementById('res_new_acc').innerText = languages[l_num].buttons.rst
    document.getElementById('btn_rst').innerText = languages[l_num].buttons.rst
    document.getElementById('btn_cfm').innerText = languages[l_num].buttons.cfm
    document.getElementById('cfmdel_acc').innerText = languages[l_num].buttons.cfm
    document.getElementById('del_acc').innerText = languages[l_num].buttons.dlt
    document.getElementById('cng_acc').innerText = languages[l_num].buttons.sav
    for (let i=1; i<6; i++) {
        document.getElementById(`btn_cc${i}`).innerText = languages[l_num].buttons.ccl
    }
    for (let i=1; i<5; i++) {
        document.getElementById(`btn_rt${i}`).innerText = languages[l_num].buttons.rtn
    }
    for (let i=1; i<4; i++) {
        document.getElementById(`web_${i}`).innerText = languages[l_num].headers.web
        document.getElementById(`usn_${i}`).innerText = languages[l_num].headers.usn
        document.getElementById(`pwd_${i}`).innerText = languages[l_num].headers.pwd
        document.getElementById(`pin_${i}`).innerText = languages[l_num].headers.pin
        document.getElementById(`eml_${i}`).innerText = languages[l_num].headers.eml
        document.getElementById(`phn_${i}`).innerText = languages[l_num].headers.phn
        document.getElementById(`det_${i}`).innerText = languages[l_num].headers.det
    }

    // Colors
    document.getElementById('blu').innerText = languages[l_num].colours.blue
    document.getElementById('gre').innerText = languages[l_num].colours.grey
    document.getElementById('pur').innerText = languages[l_num].colours.purple
    document.getElementById('red').innerText = languages[l_num].colours.red

    // Setting Headers
    document.getElementById('set_bkn').innerText = languages[l_num].setting[0]
    document.getElementById('set_lng').innerText = languages[l_num].setting[1]
    document.getElementById('set_fnt').innerText = languages[l_num].setting[2]
    document.getElementById('set_plt').innerText = languages[l_num].setting[3]
    
    // About Page (except title)
    for (let i=0; i<11; i++) {
        document.getElementById(`ap${i+1}`).innerHTML = languages[l_num].about[i]
    }

    // Regenerates Account List in New Language
    var clearAccounts = Array.from(document.getElementsByClassName('account'))
    clearAccounts.forEach((account) => {
        account.parentNode.removeChild(account)
    })
    await loadfiles()
    changePalette(document.getElementById('palettes').value)

    if (__language == languages[0].name || __language == languages[5].name) {
        document.body.classList.add('rtl')
        document.getElementById('aboutbutton').classList.add('rtl_button')
        document.getElementById('settingbutton').classList.add('rtl_button')
        document.getElementById('newbutton').classList.add('rtl_button')
        Array.from(document.getElementsByClassName('buttondiv')).forEach((item) => {
            item.classList.add('rtl_account')
        })
    }
    else {
        document.body.classList.remove('rtl')
        document.getElementById('aboutbutton').classList.remove('rtl_button')
        document.getElementById('settingbutton').classList.remove('rtl_button')
        document.getElementById('newbutton').classList.remove('rtl_button')
        Array.from(document.getElementsByClassName('buttondiv')).forEach((item) => {
            item.classList.remove('rtl_account')
        })
    }
}

function getLangNumber(lang_value) {
    const language = languages.find(language => lang_value === language.name)

    return language.number
}

window.addEventListener('resize', () => {
    checkForSizeChange()
})

function checkForSizeChange() {
    const screenWidth = window.innerWidth

    const selector = document.getElementById('fonts')

    const font_value = selector.options[selector.selectedIndex].id

    if (screenWidth < languages[getLangNumber(__language)].transform_limit[font_value]) {
        new_btn.innerHTML = `<span class=iconheightlimit>${plusIcon}</span>`
        set_btn.innerHTML = `<span class=iconheightlimit>${settingIcon}</span>`
        abt_btn.innerHTML = `<span class=iconheightlimit>${infoIcon}</span>`
    }
    else {
        new_btn.innerHTML = `${languages[getLangNumber(__language)].buttons.new}`
        set_btn.innerHTML = `${languages[getLangNumber(__language)].buttons.set}`
        abt_btn.innerHTML = `${languages[getLangNumber(__language)].buttons.abt}`
    }
}

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
    contentArray.push(nullkeyReplacement(cng_web.value, false))
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
    if (cfm_del.value == languages[getLangNumber(__language)].buttons.dlt) {
        var path = del_container.getAttribute('name')
        const deleteFile = await api.deleteFile(path)
        location.reload()
    } else {
        hide('cfmdel_container')
        cfm_del.value = ''
    }
})

s_bar.addEventListener('input', () => {
    const search = s_bar.value.toLowerCase()
    const accounts = Array.from(document.getElementsByClassName('account'))

    if (search == '') {
        accounts.forEach((account) => {
            account.classList.remove('hidden')
        })
    }
    else {
        accounts.forEach((account) => {
            if (!account.textContent.toLowerCase().includes(search) && !account.id.toLowerCase().includes(search)) {
                account.classList.add('hidden')
            }
            else {
                account.classList.remove('hidden')
            }
        })
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
        site_title.innerHTML = `${site}<div class=buttondiv><span class=accButtons onclick='expand(this.parentNode.parentNode.parentNode, this)'>${dIcon}</span><span class=accButtons onclick='deleteFile("${file}")'>${xIcon}</span><span class=accButtons onclick='editFile("${file}")'>${eIcon}</span><div>`
    large.appendChild(site_title)
    const container = document.createElement('div')
        container.className = 'inneraccountcontainer'
    large.appendChild(container)
    const usnrow = document.createElement('div')
        usnrow.className = 'accountrow'
        usnrow.id = 'usnrow'
        usnrow.innerHTML = `<span class=text id=username>${nullkeyReplacement(username, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.usn}:</a>`
    container.appendChild(usnrow)
    const pwdrow = document.createElement('div')
        pwdrow.className = 'accountrow'
        pwdrow.id = 'pwdrow'
        pwdrow.innerHTML = `<span class=text id=password>${nullkeyReplacement(password, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.pwd}:</a>`
    container.appendChild(pwdrow)
    const pinrow = document.createElement('div')
        pinrow.className = 'accountrow'
        pinrow.id = 'pinrow'
        pinrow.innerHTML = `<span class=text id=pin>${nullkeyReplacement(pin, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.pin}:</a>`
    container.appendChild(pinrow)
    const emlrow = document.createElement('div')
        emlrow.className = 'accountrow'
        emlrow.id = 'emlrow'
        emlrow.innerHTML = `<span class=text id=email>${nullkeyReplacement(email, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.eml}:</a>`
    container.appendChild(emlrow)
    const numrow = document.createElement('div')
        numrow.className = 'accountrow'
        numrow.id = 'numrow'
        numrow.innerHTML = `<span class=text id=phone>${nullkeyReplacement(phone, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.phn}:</a>`
    container.appendChild(numrow)
    const othrow = document.createElement('div')
        othrow.className = 'accountrow'
        othrow.id = 'othrow'
        othrow.innerHTML = `<span class=text id=other>${nullkeyReplacement(other, true)}</span><a class=textL>${languages[getLangNumber(__language)].headers.det}:</a>`
    container.appendChild(othrow)

    var labeldiscriminator
    try { 
        labeldiscriminator = site.charAt(0).toUpperCase()
        if (labeldiscriminator != "Ё" && labeldiscriminator != "Ñ") {
            labeldiscriminator = labeldiscriminator.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        }
    }
    catch { labeldiscriminator = '-' }
    if (/[^a-zA-ZЁА-Яёа-яЄєІіЇїҐґँ-ःअ-ऋए-ऐओ-औक-যড-হ়-্।-९א-תا-يء-يئ-ي‎-‎׳-״-]/.test(labeldiscriminator) && (labeldiscriminator != "Ё" && labeldiscriminator != "Ñ" && labeldiscriminator != 'Й' && labeldiscriminator != 'Ї')) { labeldiscriminator = '-' }
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
    cng_web.defaultValue = nullkeyReplacement(data[0], true)
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

function toggleSearch(containerID) {
    const toToggle = document.getElementById(containerID)
    if (toToggle.classList.contains('hidden')) {
        toToggle.classList.remove('hidden')
    }
    else {
        toToggle.classList.add('hidden')

        s_bar.value = ''

        const accounts = Array.from(document.getElementsByClassName('account'))

        accounts.forEach((account) => {
            account.classList.remove('hidden')
        })
    }
}

function expand(parent, element) {
    $(`#${parent.id}`).children('.inneraccountcontainer').slideToggle('medium')
    $(`#${parent.id}`).toggleClass('expanded')
    toggleBool = !toggleBool
    if (toggleBool) { element.innerHTML = `${uIcon}` }
    else { element.innerHTML = `${dIcon}` }
}

function changeFont(font) {
    savesettings(font, document.getElementById('palettes').value, document.getElementById('zip_name_box').value, document.getElementById('languages').value)
    $("body").css("font-family", font)
    checkForSizeChange()
}

function changePalette(colour) {
    savesettings(document.getElementById('fonts').value, colour, document.getElementById('zip_name_box').value, document.getElementById('languages').value)
    if (colour == 'red')
    {
        $('body').css('color', `white`)
        $('body').css('background-color', `lightcoral`)
        $('.containers').css('background-color', `indianred`)
        $('.typerpop').css('background-color', `indianred`)
        $('.account').css('background-color', `#A04040`)
        $('.button').css('background-color', `#A04040`)
    }
    else if (colour == 'purple')
    {
        $('body').css('color', `white`)
        $('body').css('background-color', `#D8A1E7`)
        $('.containers').css('background-color', `#C46EDA`)
        $('.typerpop').css('background-color', `#C46EDA`)
        $('.account').css('background-color', `mediumorchid`)
        $('.button').css('background-color', `mediumorchid`)
    }
    else if (colour == 'blue')
    {
        $('body').css('color', `white`)
        $('body').css('background-color', `lightsky${colour}`)
        $('.containers').css('background-color', `#708EE8`)
        $('.typerpop').css('background-color', `#708EE8`)
        $('.account').css('background-color', `royal${colour}`)
        $('.button').css('background-color', `royal${colour}`)
    }
    else if (colour == 'grey')
    {
        $('body').css('color', `black`)
        $('body').css('background-color', `white`)
        $('.containers').css('background-color', `light${colour}`)
        $('.typerpop').css('background-color', `light${colour}`)
        $('.account').css('background-color', `dark${colour}`)
        $('.button').css('background-color', `dark${colour}`)
    }
}

function resetWindow() {
    setOptions('Trebuchet MS, sans-serif', 'grey')
    changeFont('Trebuchet MS, sans-serif')
    changePalette('grey')
}

function setOptions(font, colour) {
    document.getElementById('fonts').selectedIndex = [...document.getElementById('fonts').options].findIndex(option => option.value === font)
    document.getElementById('palettes').selectedIndex = [...document.getElementById('palettes').options].findIndex(option => option.value === colour)
}

function windowScroll(discriminator) {
    document.getElementById(`acc${discriminator}`).scrollIntoView({ behavior: "smooth" })
}

function configure() {
    letters.forEach((x) => {
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

async function savesettings(font, colour, filename, language) {
    const content = `${font}${divikey}${colour}${divikey}${filename}${divikey}${language}`

    const save = await api.saveSettings(content, divikey)
}

async function loadsettings() {
    const file = await api.loadSettings()

    const settingArray = file[1].split(divikey)

    document.getElementById('languages').value = settingArray[3]
    document.getElementById('palettes').value = settingArray[1]
    document.getElementById('fonts').value = settingArray[0]

    setZipName(settingArray[2])
    changeFont(settingArray[0])
    changePalette(settingArray[1])
    changeLanguage(settingArray[3])

    setOptions(settingArray[0], settingArray[1])
}

async function exportZip() {
    filename = document.getElementById('zip_name_box').value

    savesettings(document.getElementById('fonts').value, document.getElementById('palettes').value, filename, document.getElementById('languages').value)

    const expZip = await api.packZip(filename)


    var save_status = `${languages[getLangNumber(__language)].description[4]}, ${filename}, ${languages[getLangNumber(__language)].description[5]}`

    
    if (filename == '') {
        save_status = `${languages[getLangNumber(__language)].description[4]} ${languages[getLangNumber(__language)].description[5]}`
    }

    if (!expZip[1]) {
        save_status = `${languages[getLangNumber(__language)].description[6]} ${expZip[0]}`
    }

    document.getElementById('save_status_desc').innerHTML = save_status
    
    reveal('save_container')
}

async function openExportFolder() {
    const explorer = await api.openExplorer(`exports`)
}

async function importZip(open_bool) {
    const result = await api.showDialog('')

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
            
            var import_status = `${languages[getLangNumber(__language)].description[4]} ${languages[getLangNumber(__language)].description[5]}`

            if (!copy[0]) {
                import_status = `${languages[getLangNumber(__language)].description[7]} ${copy[1]}`
            }

            document.getElementById('import_status_desc').innerHTML = import_status
    
            reveal('import_background_container')
        }
    }
}

async function importSavedZip() {
    const result = await api.showDialog('exports')

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

    savesettings(document.getElementById('fonts').value, document.getElementById('palettes').value, '', document.getElementById('languages').value)

    const clear = await api.clearFiles()
    
    location.reload()
}

function setZipName(newName) {
    document.getElementById('zip_name_box').value = newName
}

function website(link) {
    const openLink = api.openLink(link)
}

window.onload = async () => {
    configure()
    await loadsettings()
    await loadfiles()
    await loadsettings()
    checkForSizeChange()
}