//base by Tech-God
//re-upload? recode? copy code? give credit ya :)
//YouTube: @techgod143
//Instagram: techgod143
//Telegram: t.me/techgod143
//GitHub: @techgod143
//WhatsApp me: 254796281776
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@techgod143
const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "254796281776"
global.ownername = "I𝐂𝐀𝐋𝐕𝐈𝐍𝐄 𝐎𝐁𝐎𝐔𝐎𝐑𝐎≈≈𝐓𝐄𝐂𝐇"
global.ytname = "YT: 𝛸-𝐹𝛩𝑅𝐶𝛯-𝛭𝐷 𝛻2"
global.socialm = "GitHub: calvineonyango"
global.location = "Migori,Kenya"

global.ownernumber = '254796281776'  //creator number
global.ownername = '𝐂𝐀𝐋𝐕𝐈𝐍𝐄 𝐎𝐁𝐎𝐔𝐎𝐑𝐎≈≈𝐓𝐄𝐂𝐇' //owner name
global.botname = '𝛸-𝐹𝛩𝑅𝐶𝛯-𝛭𝐷 𝛻2' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = '𝐂𝐀𝐋𝐕𝐈𝐍𝐄 𝐎𝐁𝐎𝐔𝐎𝐑𝐎≈≈𝐓𝐄𝐂𝐇\n\nContact: +254796281776'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Youtube Tech God."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vadx3PxJ3juvWsDlrN11'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//text bug
global.xbugtex = {
xtxt: '🚨YT_Tech-God🚨',
}
global.bimg = ' '
//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by Tech god or premium user only',
    admin: 'This feature can be used by Tech god or admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by Tech god or owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
