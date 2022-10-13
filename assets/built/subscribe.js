async function subscribe() {
    document.getElementById('sub-results').innerHTML = ``
    $('.button-loader').css( "display", "inline" )
    let email = document.getElementById('mailform-down-email').value
    let name = document.getElementById('mailform-down-name').value
    if (!name || !email) {
        console.log(`no email or name.. aborted`)
        $('.button-loader').css( "display", "none" )
        document.getElementById('sub-results').innerHTML = `לא הוזן שם או כתובת אימייל`
        return
    }
    const response = await fetch(`https://script.google.com/macros/s/AKfycbzr40HstrGWx3GAaNQTUIorXaV0pztwGb_Bp7FgZX9wefdKtnFE/exec?email=${email}&name=${name}&method=add`, { redirect: 'follow' })
    const json = await response.json()
    if (json.email === false) {
        console.log(`email not passed mail regex haha...`)
        $('.button-loader').css( "display", "none" )
        document.getElementById('sub-results').innerHTML = `האימייל שהזנת אינו תקין...`
        return
    }
    if (json.existed === true) {
        console.log(`email are exists in the list. all right`)
        $('.button-loader').css( "display", "none" )
        document.getElementById('sub-results').innerHTML = `הכתובת קיימת כבר במערכת. הכל טוב..`
        return
    }
    if (json.created === true) {
        console.log(`the email address are saved correctly. thank you`)
        $('.button-loader').css( "display", "none" )
        document.getElementById('sub-results').innerHTML = `נרשמת בהצלחה!!`
        return
    }
}

document.querySelector('#mailform-down-email').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        subscribe();
    }
})

document.querySelector('#mailform-down-name').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        subscribe();
    }
})