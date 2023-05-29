const title_el = document.getElementById('title')
const new_sit = document.getElementById('new_sit')
const new_usn = document.getElementById('new_usn')
const new_pwd = document.getElementById('new_pwd')
const new_pin = document.getElementById('new_pin')
const new_eml = document.getElementById('new_eml')
const new_num = document.getElementById('new_num')
const new_scq = document.getElementById('new_scq')
const new_acc = document.getElementById('new_acc')
const split = '+{ngqy--HZN--ngqy}+';

title_el.innerText = api.title

new_acc.addEventListener('click', async () => {
    const sit = new_sit.value
    const usn = new_usn.value
    const pwd = new_pwd.value
    const pin = new_pin.value
    const eml = new_eml.value
    const num = new_num.value
    const scq = new_scq.value

    const content = `${sit}${split}${usn}${split}${pwd}${split}${pin}${split}${eml}${split}${num}${split}${scq}`
    
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