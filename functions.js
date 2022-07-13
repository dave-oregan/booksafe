$(document).ready(() => 
{
    $(window).keydown((event) =>
    {
        if(event.keyCode == 13)
        {
            event.preventDefault();
            return false;
        }
    });
});

$(document).on('keyup', (e) => 
{
    if(e.which === 27)
    {
        $(".popbox").css("display", "none");
        $(".popboxS").css("display", "none");
    }
});

function addNew() 
{
    let siteName = document.getElementById('ipWeb').value;
    let userName = document.getElementById('ipUse').value;
    let passName = document.getElementById('ipPas').value;
    let emaiName = document.getElementById('ipEma').value;
    let detaName = document.getElementById('ipDet').value;
    console.log(`${siteName} : ${userName} : ${passName}`);

    let list2add = document.getElementById(`ul${siteName.charAt(0).toUpperCase()}`);
    if (list2add == null)
        list2add = document.getElementById('ulOTHER');
    console.log(list2add);
    let newLi = document.createElement('li');
        let div1 = document.createElement('div');
            div1.setAttribute('class','row');
        let div2 = document.createElement('div');
            div2.setAttribute('class','rowE');
        let div3 = document.createElement('div');
            div3.setAttribute('class','rowE');
        let div4 = document.createElement('div');
            div4.setAttribute('class','rowE');
        let div5 = document.createElement('div');
            div5.setAttribute('class','rowE');
            let span = document.createElement('span');
                span.setAttribute('id','liNam');
                span.innerHTML = `<b>${siteName}</b>`;
            div1.appendChild(span);
            let span3 = document.createElement('span');
                span3.className = 'collapsible';
                span3.setAttribute('onclick','expandLI(this);');
                span3.appendChild(document.createTextNode("🔽"));
                span3.setAttribute('title','Expand');
            div1.appendChild(span3);
            let span2 = document.createElement('span');
                span2.className = 'liButton';
                span2.setAttribute('onclick','removeLI(this);');
                span2.appendChild(document.createTextNode("🗑️"));
                span2.setAttribute('title','Delete');
            div1.appendChild(span2);
        newLi.appendChild(div1);
            let span10 = document.createElement('span');
                span10.className = 'idatalabels';
                span10.innerHTML = `Email:`;
            div4.appendChild(span10);
            let span12 = document.createElement('span');
                span12.setAttribute('id','impData3');
                span12.setAttribute('class','idata');
                span12.innerHTML = `${emaiName}`;
            div4.appendChild(span12);
            let span11 = document.createElement('span');
                span11.setAttribute('class','editButton');
                span11.setAttribute('onclick','edit(this);');
                span11.innerHTML = '✏️';
                span11.setAttribute('title','Edit');
            div4.appendChild(span11);
        newLi.appendChild(div4);
            let span4 = document.createElement('span');
                span4.className = 'idatalabels';
                span4.innerHTML = `Username:`;
            div2.appendChild(span4);
            let span5 = document.createElement('span');
                span5.setAttribute('id','impData');
                span5.setAttribute('class','idata');
                span5.innerHTML = `${userName}`;
            div2.appendChild(span5);
            let span8 = document.createElement('span');
                span8.setAttribute('class','editButton');
                span8.setAttribute('onclick','edit(this);');
                span8.innerHTML = '✏️';
                span8.setAttribute('title','Edit');
            div2.appendChild(span8);
        newLi.appendChild(div2);
            let span6 = document.createElement('span');
                span6.className = 'idatalabels';
                span6.innerHTML = `Password:`;
            div3.appendChild(span6);
            let span7 = document.createElement('span');
                span7.setAttribute('id','impData2');
                span7.setAttribute('class','idata');
                span7.innerHTML = `${passName}`;
            div3.appendChild(span7);
            let span9 = document.createElement('span');
                span9.setAttribute('class','editButton');
                span9.setAttribute('onclick','edit(this);');
                span9.innerHTML = '✏️';
                span9.setAttribute('title','Edit');
            div3.appendChild(span9);
        newLi.appendChild(div3);
            let span13 = document.createElement('span');
                span13.className = 'idatalabels';
                span13.innerHTML = `Details:`;
            div5.appendChild(span13);
            let span14 = document.createElement('span');
                span14.setAttribute('id','impData4');
                span14.setAttribute('class','idata');
                span14.innerHTML = `${detaName}`;
            div5.appendChild(span14);
            let span15 = document.createElement('span');
                span15.setAttribute('class','editButton');
                span15.setAttribute('onclick','edit(this);');
                span15.innerHTML = '✏️';
                span15.setAttribute('title','Edit');
            div5.appendChild(span15);
        newLi.appendChild(div5);

    list2add.appendChild(newLi);
    updateFont();
    updateColour();
    clearNew();
}

function clearNew()
{
    document.getElementById('ipWeb').value = '';
    document.getElementById('ipUse').value = '';
    document.getElementById('ipPas').value = '';
    document.getElementById('ipEma').value = '';
    document.getElementById('ipDet').value = '';
}

function hideBlank()
{
    let alphabet = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','OTHER' ];

    for (let i=0; i<alphabet.length; i++)
    {
        if (!$(`#ul${alphabet[i]} li`).length > 0)
        {
            $(`#l${alphabet[i]}`).hide();
            $(`#t${alphabet[i]}`).hide();
        }
    }
}

function showNonBlank()
{
    let alphabet = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','OTHER' ];

    for (let i=0; i<alphabet.length; i++)
    {
        if ($(`#ul${alphabet[i]} li`).length > 0)
        {
            $(`#l${alphabet[i]}`).show();
            $(`#t${alphabet[i]}`).show();
            $(`#ul${alphabet[i]}`).children('li').sort(function(a, b) {
                var A = $(a).text().toUpperCase();
                var B = $(b).text().toUpperCase();
                return (A < B) ? -1 : (A > B) ? 1 : 0;
            }).appendTo(`#ul${alphabet[i]}`);
        }
    }
}

function removeLI(liname)
{
    let confirm_ = prompt("Are you sure you want to delete this account? This cannot be undone! Type 'DELETE' & press 'OK' to confirm.");
    if (confirm_.toUpperCase() == 'DELETE')
    {
        liname.parentNode.parentNode.remove(liname);
    }
    hideBlank();
    showNonBlank();
}

function expandLI(liname)
{
    liname.innerHTML = '🔼';
    liname.setAttribute('onclick','retractLI(this);');
    liname.setAttribute('title','Retract');
    liname.parentNode.parentNode.style.height = '180px';
}

function retractLI(liname)
{
    liname.innerHTML = '🔽';
    liname.setAttribute('onclick','expandLI(this);');
    liname.setAttribute('title','Expand');
    liname.parentNode.parentNode.style.height = '32px';
}

function edit(liname)
{
    if (confirm("Confirm that you want to edit this by clicking 'OK'."))
    {
        $(liname).siblings('.idata').attr('contentEditable',true);
        $(liname).siblings('.idata').css('font-style','italic');
        $(liname).siblings('.idata').css('filter','brightness(1.3)');
        liname.setAttribute('title','Done');
        liname.innerHTML = '✅';
        liname.setAttribute('onclick','saveEdit(this);');
    }
}

function saveEdit(liname)
{
    $(liname).siblings('.idata').attr('contentEditable',false);
    $(liname).siblings('.idata').css('font-style','normal');
    $(liname).siblings('.idata').css('filter','brightness(1)');
    liname.setAttribute('title','Edit');
    liname.innerHTML = '✏️';
    liname.setAttribute('onclick','edit(this);');
}

var fontt = 'Times New Roman, serif';
function changeFont(value)
{
    fontt = value;
    updateFont();
}

function updateFont()
{
    $("body").css("font-family", fontt);
    $("button").css("font-family", fontt);
    $(".ipBox").css("font-family", fontt);
    $("select").css("font-family", fontt);
    if (fontt == 'Times New Roman, serif' || fontt == 'Garamond, serif')
    {
        $('.idatalabels').css('flex', '3.5');
    }
    else
    {
        $('.idatalabels').css('flex', '4');
    }
    $('#fonts').val(fontt);
}

var colourr = 'grey';
function changeColour(value)
{
    colourr = value;
    updateColour();
}

function updateColour()
{
    
    if (colourr == 'red')
    {
        $('body').css('color', `white`);
        $('body').css('background-color', `lightcoral`);
        $('#filebox').css('background-color', `indianred`);
        $('#settingBox').css('background-color', `indianred`);
        $('#a_z').css('background-color', 'indianred');
        $('#data').css('background-color', 'indianred');
        $('.new').css('background-color', 'indianred');
        $('#masterlist ul li').css('background-color', `#A04040`);
        $('.tpBut').css('background-color', `#A04040`);
        $('.idata').css('background-color','#A04040');
        $('.ipBut').css('color', `black`);
        $('body').get(0).style.setProperty('--sb-var','maroon');
        $('body').get(0).style.setProperty('--sbt-var','#AD5C5C');
    }
    else if (colourr == 'purple')
    {
        $('body').css('color', `white`);
        $('body').css('background-color', `#D8A1E7`);
        $('#filebox').css('background-color', `#C46EDA`);
        $('#settingBox').css('background-color', `#C46EDA`);
        $('#a_z').css('background-color', '#C46EDA');
        $('#data').css('background-color', '#C46EDA');
        $('.new').css('background-color', '#C46EDA');
        $('#masterlist ul li').css('background-color', `mediumorchid`);
        $('.tpBut').css('background-color', `mediumorchid`);
        $('.idata').css('background-color','mediumorchid');
        $('.ipBut').css('color', `black`);
        $('body').get(0).style.setProperty('--sb-var','darkmagenta');
        $('body').get(0).style.setProperty('--sbt-var','#CA80E9');
    }
    else if (colourr == 'blue')
    {
        $('body').css('color', `white`);
        $('body').css('background-color', `lightsky${colourr}`);
        $('#filebox').css('background-color', `#708EE8`);
        $('#settingBox').css('background-color', `#708EE8`);
        $('#a_z').css('background-color', `#708EE8`);
        $('#data').css('background-color', `#708EE8`);
        $('.new').css('background-color', `#708EE8`);
        $('#masterlist ul li').css('background-color', `royal${colourr}`);
        $('.tpBut').css('background-color', `royal${colourr}`);
        $('.idata').css('background-color',`royal${colourr}`);
        $('.ipBut').css('color', `black`);
        $('body').get(0).style.setProperty('--sb-var','#1919D2');
        $('body').get(0).style.setProperty('--sbt-var','#6699FF');
    }
    else if (colourr == 'grey')
    {
        $('body').css('color', `black`);
        $('body').css('background-color', `white`);
        $('#filebox').css('background-color', `light${colourr}`);
        $('#settingBox').css('background-color', `light${colourr}`);
        $('#a_z').css('background-color', `light${colourr}`);
        $('#data').css('background-color', `light${colourr}`);
        $('.new').css('background-color', `light${colourr}`);
        $('#masterlist ul li').css('background-color', `dark${colourr}`);
        $('.tpBut').css('background-color', `dark${colourr}`);
        $('.idata').css('background-color',`dark${colourr}`);
        $('.ipBut').css('color', `black`);
        $('body').get(0).style.setProperty('--sb-var','grey');
        $('body').get(0).style.setProperty('--sbt-var','#A8A8A8');
    }
    $('#palet').val(colourr);
}

function importPWS()
{
    let backup = document.getElementById("masterlist").outerHTML;
    $('#data').empty();
    try
    {
        let impFile = document.getElementById('fileImported').files[0];
        console.log(impFile);
        if(impFile.name.includes('pwlist_'))
        {
            let fr = new FileReader();
            let impFileLoad;
            fr.onload = ((fileLoadedEvent) =>
            {
                impFileLoad = fileLoadedEvent.target.result;
                let fileArray = impFileLoad.split(':horizon_str_split:');
                let htmlCode = fileArray[0];
                changeColour(fileArray[1]);
                changeFont(fileArray[2]);
                console.log(fileArray);
                $('#data').html(htmlCode);
                hideBlank();
                showNonBlank();
                updateColour();
            });
            fr.readAsText(impFile, 'UTF-8');
        }
        else
        {
            $('#data').html(backup);
        }
    }
    catch 
    {
        $('#data').html(backup);
    }
    $(".popbox").css("display", "none");
}

function exportPWS()
{
    let masterString = document.getElementById("masterlist").outerHTML;
    let colString = colourr;
    let fontString = fontt;
    let saveString = masterString+':horizon_str_split:'+colString+':horizon_str_split:'+fontString;
    console.log(saveString);
    let filename = `pwlist_${colourr.substring(0,3)}_${fontt.substring(0,4).toLowerCase()}.txt`;
    download(filename, saveString);
}

function download(newFile, list) 
{
    let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(list));
        element.setAttribute('download', newFile);
        element.style.display = 'none';
    document.body.appendChild(element);
        element.click();
    document.body.removeChild(element);
}
