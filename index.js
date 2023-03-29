//require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)\\
const { default: darkConnect, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const axios = require('axios')
const FileType = require('file-type')
const fetch = require('node-fetch')
const PhoneNumber = require('awesome-phonenumber')
const path = require('path')
const figlet = require('figlet')
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { uncache, nocache } = require('./lib/loader')
const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

//Database
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

//================[JANGAN DI UBAH]============\\
qrwa = null
PORT = 5000
const qrcode = require('qrcode')
const express = require('express')
const app = express()
app.enable('trust proxy')
app.set("json spaces",2)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.all('*', async (req, res) => {
    if (!qrwa) return res.send('reload cuy klo qr nya gk muncul"')
      res.type('.jpg').send(qrwa)
})
app.listen(PORT, async() => {
    console.log(`scan qr di bagian web`)
})

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

require('./dark.js')
nocache('../dark.js', module => console.log(color('[ UPDATE ]', 'cyan'), color(`'${module}'`, 'green'), 'File Is Update!!!'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ UPDATE ]', 'cyan'), color(`'${module}'`, 'green'), 'File Is Update!!!'))

async function darkBot() {
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  
  const { state, saveCreds } = await useMultiFileAuthState(`session`)
    const dark = darkConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Dark','Safari','1.0.0'],
        patchMessageBeforeSending: (message) => {
                const requiresPatch = !!(
                  message.buttonsMessage
              	  || message.templateMessage
              		|| message.listMessage
                );
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                },
                                ...message,
                            },
                        },
                    };
                }
                return message;
    },
        auth: state
    })

    store.bind(dark.ev)

console.log(color(figlet.textSync(`Dark`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'green'))

dark.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

dark.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
dark.sendNode({
  tag: 'call',
    attrs: {
      from: '6285870808160@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})
if (json.content[0].tag == 'offer') {
let qutsnya = await dark.sendContact(callerId, owner)
await dark.sendMessage(callerId, { text: `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`}, { quoted : qutsnya })
await sleep(8000)
await dark.updateBlockStatus(callerId, "block")
}
})

dark.ev.on('messages.upsert', async chatUpdate => {
try {
md = chatUpdate.messages[0]
if (!md.message) return
md.message = (Object.keys(md.message)[0] === 'ephemeralMessage') ? md.message.ephemeralMessage.message : md.message
if (md.key && md.key.remoteJid === 'status@broadcast') return
if (!dark.public && !md.key.fromMe && chatUpdate.type === 'notify') return
if (md.key.id.startsWith('BAE5') && md.key.id.length === 16) return
m = smsg(dark, md, store)
require('./dark')(dark, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

//Welcome
dark.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await dark.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await dark.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
ppgroup = await dark.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
if (anu.action == 'add') {
dark.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `Welcome To ${metadata.subject} @${num.split("@")[0]}` })
} else if (anu.action == 'remove') {
dark.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]} Leaving To ${metadata.subject}` })
}
}
} catch (err) {
console.log(err)
}
})

dark.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

dark.ev.on('contacts.update', update => {
for (let contact of update) {
let id = dark.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

dark.getName = (jid, withoutContact  = false) => {
id = dark.decodeJid(jid)
withoutContact = dark.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = dark.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === dark.decodeJid(dark.user.id) ?
dark.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

dark.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

dark.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await dark.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await dark.getName(i + '@s.whatsapp.net')}\n
FN:${await dark.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Faruqofc/.my.id\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
dark.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

dark.setStatus = (status) => {
dark.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

dark.public = true

dark.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await dark.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

dark.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await dark.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

dark.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await dark.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

dark.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await dark.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

dark.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

dark.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

dark.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

dark.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await dark.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await dark.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

dark.sendText = (jid, text, quoted = '', options) => dark.sendMessage(jid, { text: text, ...options }, { quoted })

dark.serializeM = (m) => smsg(dark, m, store)
    
dark.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr} = update	
  if (qr) {
				let qrkode = await qrcode.toDataURL(qr, {
					scale: 20
				})
				qrwa = Buffer.from(qrkode.split`,` [1], 'base64')
  }
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); dark.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); darkBot(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); darkBot(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); dark.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); dark.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); darkBot(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); darkBot(); }
            else if (reason === DisconnectReason.Multidevicemismatch) { console.log("Multi device mismatch, please scan again"); dark.logout(); }
            else dark.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    dark.ev.on('creds.update', saveCreds)

start('2',colors.bold.white('\nMenunggu Pesan Baru..'))

dark.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
dark.sendMessage(jid, buttonMessage, { quoted, ...options })
}

dark.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: dark.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "IDR",
"priceAmount1000": "100000",
"url": `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `6287705048235@s.whatsapp.net`
}
}, options)
return dark.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

dark.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
dark.relayMessage(jid, template.message, { messageId: template.key.id })
}

dark.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
dark.sendMessage(jid, fjejfjjjer, { quoted: m })
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

return dark
}

darkBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})