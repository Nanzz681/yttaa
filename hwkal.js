// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')
const tiktok = require("./baseikal/download/tiktok")
const facebook = require("./baseikal/download/facebook")
const instagram = require("./baseikal/download/instagram")
const twitter = require("./baseikal/download/twitter")


//MODULNYA BY HW
global.baileys = require('@whiskeysockets/baileys') 
global.adiwajshing = require('@adiwajshing/baileys') 

global.gr = 'https://chat.whatsapp.com'
global.ig = '@nanzzxyz' // ubah aja
global.email = 'wkwkplrkuda@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Nanzz' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6282140059454'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'Nanzzbot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'ㅤ' // ubah aja ini nama sticker
global.author = '© Nanzz' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'baseikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 10
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
