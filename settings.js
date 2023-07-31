const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.gopayno = "-"
global.danano = "-"
global.shopeepayno = "-"
global.creator = "6285870808160"
global.fake = `-`
global.prefa = ['.']
global.packname = `-`
global.author = `-`
global.copyright = `darkbotzmd`
global.openai = ["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", "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", " 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", "sk-ksigSpvrB0fvEdEqm93MT3BlbkFJAjWn3nSjFXQn86lmNzYHsk-ksigSpvrB0fvEdEqm93MT3BlbkFJAjWn3nSjFXQn86lmNzYH"]
//global.keyopenai = global.openai[Math.floor(Math.random() * global.openai.length)]
global.keyopenai = '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'
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.ownerNomor = '6285870808160'
global.ownerName = 'Darkness'
global.ownerNumber = ["6285870808160@s.whatsapp.net"]
global.mess = {
    wait: 'Wait',
    succes: 'Done',
    register: 'Maaf, Nomer Anda Belum Terdaftar Di Database Bot, Silakan Ketik .daftar Terlebih Dahulu Di Private Chat!!!',
    premium: 'Khusus Premium!!!',
    admin: 'Khusus Admin Group!!!',
    botAdmin: 'Maaf, Bot Bukan Admin!!!',
    owner: 'Khusus Owner!!!',
    endLimit: 'Limit Habis!!!',
    group: 'Khusus Groups!!!',
    private: 'Khusus Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Erorr',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
  }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
