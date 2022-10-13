async function subscribeup() {
    document.getElementById('sub-results-up').innerHTML = ``
    $('.button-loader-up').css( "display", "inline" )
    let email = document.getElementById('mailform-up-email').value
    let name = document.getElementById('mailform-up-name').value
    if (!name || !email) {
        console.log(`no email or name.. aborted`)
        $('.button-loader-up').css( "display", "none" )
        document.getElementById('sub-results-up').innerHTML = `לא הוזן שם או כתובת אימייל`
        return
    }
    const response = await fetch(`https://script.google.com/macros/s/AKfycbzr40HstrGWx3GAaNQTUIorXaV0pztwGb_Bp7FgZX9wefdKtnFE/exec?email=${email}&name=${name}&method=add`, { redirect: 'follow' })
    const json = await response.json()
    if (json.email === false) {
        console.log(`email not passed mail regex haha...`)
        $('.button-loader-up').css( "display", "none" )
        document.getElementById('sub-results-up').innerHTML = `האימייל שהזנת אינו תקין...`
        return
    }
    if (json.existed === true) {
        console.log(`email are exists in the list. all right`)
        $('.button-loader-up').css( "display", "none" )
        document.getElementById('sub-results-up').innerHTML = `הכתובת קיימת כבר במערכת. הכל טוב..`
        return
    }
    if (json.created === true) {
        console.log(`the email address are saved correctly. thank you`)
        $('.button-loader-up').css( "display", "none" )
        document.getElementById('sub-results-up').innerHTML = `נרשמת בהצלחה!!`
        return
    }
}

document.querySelector('#mailform-up-email').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        subscribeup();
    }
})

document.querySelector('#mailform-up-name').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        subscribeup();
    }
})