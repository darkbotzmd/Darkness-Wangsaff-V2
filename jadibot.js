function _0x5454(){const _0x303e2a=['groupMetadata','decodeJid','log','parse','6287705048235@s.whatsapp.net','tag','replace','548754CAbmPU','22NxlnUt','ext','./database/owner.json','290903RpicLl','withoutContact','file-type','./kayla','attrs','server','reject','10QHlFhN','./lib/exif','\x20Kontak','silent','utf-8','startsWith','remoteJid','message','child','Unknown\x20DisconnectReason:\x20','fromBuffer','bind','getName','Sistem\x20Otomatis\x20Block!!!\x0aJangan\x20Menelpon\x20Bot!!!\x0aSilahkan\x20Hubungi\x20Owner\x20Untuk\x20Dibuka!!!','connectionClosed','length','toDataURL','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','rimraf','sendNode','Chrome','content','CB:Blocklist','@hapi/boom','CB:call','@adiwajshing/baileys','2643170lewJRs','8KEoIYE','contacts','matchAll','111185RrsPoD','1.0.0','output','map','*Connected\x20to\x20Whatsapp\x20-\x20Bot*\x0a\x0a*User\x20:*\x0a\x20_*×\x20id\x20:\x20','sendMessage','key','status','name','setStatus','sendText','writeFileSync','split','from','blocklist','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','connectionLost','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','call-creator','statusCode','logout','s.whatsapp.net','fromMe','parseMention','Connecting\x20to\x20jadibot..','notify','set','test','BEGIN:VCARD\x0a\x0aVERSION:3.0\x0a\x0aN:','connecting','*Terdeteksi\x20menumpang\x20Jadibot*\x0a\x0a\x20_×\x20User\x20:\x20@','call','push','\x0a\x0aFN:','\x0a\x0aitem1.TEL;waid=','toString','timedOut','badSession','creds.update','1742373risgNm','0@s.whatsapp.net','user','ephemeralMessage','time','getNumber','error','connectionReplaced','4750576dGTcYT','public','@s.whatsapp.net','call-id','join','./database/jadibot/','connection.update','subject','reply','chalk','Connection\x20TimedOut,\x20Reconnecting...','international','process','mimetype','qrcode','close','./lib/myfunc','BAE5','now','sendContact','258gMvSYk','concat','open','mtype','9764230sjpQPr','WhatsApp','msg','downloadMediaMessage'];_0x5454=function(){return _0x303e2a;};return _0x5454();}const _0x22846e=_0x3ce0;function _0x3ce0(_0x4a94c6,_0x3cb468){const _0x5454f8=_0x5454();return _0x3ce0=function(_0x3ce09f,_0xf4e33a){_0x3ce09f=_0x3ce09f-0x1d7;let _0x32e9e2=_0x5454f8[_0x3ce09f];return _0x32e9e2;},_0x3ce0(_0x4a94c6,_0x3cb468);}(function(_0x2e4958,_0x5f56a3){const _0x2902a6=_0x3ce0,_0x379263=_0x2e4958();while(!![]){try{const _0x2d68b0=-parseInt(_0x2902a6(0x236))/0x1*(-parseInt(_0x2902a6(0x23d))/0x2)+parseInt(_0x2902a6(0x232))/0x3+-parseInt(_0x2902a6(0x20f))/0x4+-parseInt(_0x2902a6(0x1e0))/0x5*(-parseInt(_0x2902a6(0x223))/0x6)+-parseInt(_0x2902a6(0x227))/0x7+-parseInt(_0x2902a6(0x1dd))/0x8*(-parseInt(_0x2902a6(0x207))/0x9)+-parseInt(_0x2902a6(0x1dc))/0xa*(-parseInt(_0x2902a6(0x233))/0xb);if(_0x2d68b0===_0x5f56a3)break;else _0x379263['push'](_0x379263['shift']());}catch(_0x56bef8){_0x379263['push'](_0x379263['shift']());}}}(_0x5454,0xb3089));const baileys=require('@adiwajshing/baileys'),chalk=require(_0x22846e(0x218)),fs=require('fs'),figlet=require('figlet'),FileType=require(_0x22846e(0x238)),path=require('path'),process=require(_0x22846e(0x21b)),PhoneNumber=require('awesome-phonenumber'),{Boom}=require(_0x22846e(0x1d9)),{default:makeWaSocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,generateWAMessage,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x22846e(0x1db)),{color,bgcolor}=require('./lib/color'),log=pino=require('pino'),qrcode=require(_0x22846e(0x21d)),rimraf=require(_0x22846e(0x24f)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x22846e(0x23e)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep,reSize}=require(_0x22846e(0x21f)),owner=JSON[_0x22846e(0x22e)](fs['readFileSync'](_0x22846e(0x235))[_0x22846e(0x203)]()),store=makeInMemoryStore({'logger':pino()[_0x22846e(0x245)]({'level':_0x22846e(0x240),'stream':'store'})});if(global['conns']instanceof Array)console['log']();else global['conns']=[];const jadibot=async(_0x548093,_0x130f85,_0x5d2cc4)=>{const _0x1a6642=_0x22846e,{sendImage:_0x136396,sendMessage:_0x4ffb1f}=_0x548093,{reply:_0x1f798,sender:_0x39ef4b}=_0x130f85,{state:_0x26afc0,saveCreds:_0x2d5191}=await useMultiFileAuthState(path[_0x1a6642(0x213)](__dirname,_0x1a6642(0x214)+_0x39ef4b['split']('@')[0x0]),log({'level':_0x1a6642(0x240)}));try{async function _0x58c55c(){const _0x26d7bd=_0x1a6642;let {version:_0x59a92e,isLatest:_0x2fd94a}=await fetchLatestBaileysVersion();const _0x2b79db=await makeWaSocket({'auth':_0x26afc0,'browser':['Jadibot\x20Md\x20By\x20(Kayla\x20Bot)',_0x26d7bd(0x251),_0x26d7bd(0x1e1)],'logger':log({'level':_0x26d7bd(0x240)}),'version':_0x59a92e});_0x2b79db['ws']['on'](_0x26d7bd(0x1d8),_0x2d12b9=>{const _0x15345e=_0x26d7bd;if(blocked[_0x15345e(0x24c)]>0x2)return;for(let _0x209622 of _0x2d12b9[0x1][_0x15345e(0x1ee)]){blocked[_0x15345e(0x200)](_0x209622['replace']('c.us',_0x15345e(0x1f5)));}}),_0x2b79db['ws']['on'](_0x26d7bd(0x1da),async _0x32c87e=>{const _0x16c9f4=_0x26d7bd,_0x4cee33=_0x32c87e['content'][0x0]['attrs'][_0x16c9f4(0x1f2)],_0x454029=_0x32c87e['content'][0x0][_0x16c9f4(0x23a)][_0x16c9f4(0x212)],_0x27bd17=_0x32c87e['attrs']['id'],_0x41d8fe=_0x32c87e[_0x16c9f4(0x23a)]['t'];_0x2b79db[_0x16c9f4(0x250)]({'tag':_0x16c9f4(0x1ff),'attrs':{'from':'6285798145596@s.whatsapp.net','id':_0x27bd17,'t':_0x41d8fe},'content':[{'tag':_0x16c9f4(0x23c),'attrs':{'call-creator':_0x4cee33,'call-id':_0x454029,'count':'0'},'content':null}]});if(_0x32c87e[_0x16c9f4(0x1d7)][0x0][_0x16c9f4(0x230)]=='offer'){let _0x52427d=await _0x2b79db[_0x16c9f4(0x222)](_0x4cee33,owner);await _0x2b79db['sendMessage'](_0x4cee33,{'text':_0x16c9f4(0x24a)},{'quoted':_0x52427d}),await sleep(0x1f40),await _0x2b79db['updateBlockStatus'](_0x4cee33,'block');}}),_0x2b79db['ev']['on']('messages.upsert',async _0x36ca98=>{const _0x434607=_0x26d7bd;try{kay=_0x36ca98['messages'][0x0];if(!kay[_0x434607(0x244)])return;kay[_0x434607(0x244)]=Object['keys'](kay[_0x434607(0x244)])[0x0]===_0x434607(0x20a)?kay[_0x434607(0x244)][_0x434607(0x20a)]['message']:kay[_0x434607(0x244)];if(kay['key']&&kay[_0x434607(0x1e6)][_0x434607(0x243)]==='status@broadcast')return;if(!_0x2b79db[_0x434607(0x210)]&&!kay['key'][_0x434607(0x1f6)]&&_0x36ca98['type']==='notify')return;if(kay['key']['id'][_0x434607(0x242)](_0x434607(0x220))&&kay[_0x434607(0x1e6)]['id'][_0x434607(0x24c)]===0x10)return;_0x130f85=smsg(_0x2b79db,kay,store),require(_0x434607(0x239))(_0x2b79db,_0x130f85,_0x36ca98,store);}catch(_0x484cca){console[_0x434607(0x22d)](_0x484cca);}}),_0x2b79db['public']=!![],store[_0x26d7bd(0x248)](_0x2b79db['ev']),_0x2b79db['ev']['on'](_0x26d7bd(0x206),_0x2d5191),_0x2b79db['ev']['on'](_0x26d7bd(0x215),async _0x15b369=>{const _0x3c13bc=_0x26d7bd,{lastDisconnect:_0xb60c37,connection:_0x1034d2}=_0x15b369;if(_0x1034d2==_0x3c13bc(0x1fd))return;if(_0x1034d2){if(_0x1034d2!=_0x3c13bc(0x1fd))console['log'](_0x3c13bc(0x1f8));}console[_0x3c13bc(0x22d)](_0x15b369);if(_0x15b369['qr'])await _0x136396(_0x5d2cc4,await qrcode[_0x3c13bc(0x24d)](_0x15b369['qr'],{'scale':0x8}),'Scan\x20QR\x20ini\x20untuk\x20jadi\x20bot\x20sementara\x0a\x0a1.\x20Klik\x20titik\x20tiga\x20di\x20pojok\x20kanan\x20atas\x0a2.\x20Ketuk\x20WhatsApp\x20Web\x0a3.\x20Scan\x20QR\x20ini\x20\x0aQR\x20Expired\x20dalam\x2030\x20detik',_0x130f85);console[_0x3c13bc(0x22d)](_0x1034d2);_0x1034d2==_0x3c13bc(0x225)&&(_0x2b79db['id']=_0x2b79db[_0x3c13bc(0x22c)](_0x2b79db['user']['id']),_0x2b79db[_0x3c13bc(0x20b)]=Date[_0x3c13bc(0x221)](),global['conns'][_0x3c13bc(0x200)](_0x2b79db),await _0x130f85[_0x3c13bc(0x217)](_0x3c13bc(0x1e4)+_0x2b79db['decodeJid'](_0x2b79db[_0x3c13bc(0x209)]['id'])+'*_'),user=''+_0x2b79db['decodeJid'](_0x2b79db[_0x3c13bc(0x209)]['id']),txt=_0x3c13bc(0x1fe)+user[_0x3c13bc(0x1ec)]('@')[0x0]+'_',_0x4ffb1f(_0x3c13bc(0x22f),{'text':txt,'mentions':[user]}));if(_0x1034d2===_0x3c13bc(0x21e)){let _0xc5eeec=new Boom(_0xb60c37?.[_0x3c13bc(0x20d)])?.[_0x3c13bc(0x1e2)][_0x3c13bc(0x1f3)];if(_0xc5eeec===DisconnectReason[_0x3c13bc(0x205)])console[_0x3c13bc(0x22d)](_0x3c13bc(0x24e)),_0x2b79db[_0x3c13bc(0x1f4)]();else{if(_0xc5eeec===DisconnectReason[_0x3c13bc(0x24b)])console[_0x3c13bc(0x22d)]('Connection\x20closed,\x20reconnecting....'),_0x58c55c();else{if(_0xc5eeec===DisconnectReason[_0x3c13bc(0x1f0)])console['log']('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),_0x58c55c();else{if(_0xc5eeec===DisconnectReason[_0x3c13bc(0x20e)])console['log'](_0x3c13bc(0x1ef)),_0x2b79db['logout']();else{if(_0xc5eeec===DisconnectReason['loggedOut'])console[_0x3c13bc(0x22d)](_0x3c13bc(0x1f1)),_0x2b79db[_0x3c13bc(0x1f4)]();else{if(_0xc5eeec===DisconnectReason['restartRequired'])console[_0x3c13bc(0x22d)]('Restart\x20Required,\x20Restarting...'),_0x58c55c();else{if(_0xc5eeec===DisconnectReason[_0x3c13bc(0x204)])console[_0x3c13bc(0x22d)](_0x3c13bc(0x219)),_0x58c55c();else _0x2b79db['end'](_0x3c13bc(0x246)+_0xc5eeec+'|'+_0x1034d2);}}}}}}}}),_0x2b79db[_0x26d7bd(0x22c)]=_0xfba720=>{const _0x2b7fa6=_0x26d7bd;if(!_0xfba720)return _0xfba720;if(/:\d+@/gi[_0x2b7fa6(0x1fb)](_0xfba720)){let _0xdc4d44=jidDecode(_0xfba720)||{};return _0xdc4d44[_0x2b7fa6(0x209)]&&_0xdc4d44[_0x2b7fa6(0x23b)]&&_0xdc4d44[_0x2b7fa6(0x209)]+'@'+_0xdc4d44[_0x2b7fa6(0x23b)]||_0xfba720;}else return _0xfba720;},_0x2b79db['ev']['on']('contacts.update',_0x48706a=>{const _0x5d4f23=_0x26d7bd;for(let _0x300006 of _0x48706a){let _0x773df8=_0x2b79db[_0x5d4f23(0x22c)](_0x300006['id']);if(store&&store['contacts'])store[_0x5d4f23(0x1de)][_0x773df8]={'id':_0x773df8,'name':_0x300006[_0x5d4f23(0x1f9)]};}}),_0x2b79db[_0x26d7bd(0x249)]=(_0x1f5b9b,_0x412456=![])=>{const _0x1cd598=_0x26d7bd;id=_0x2b79db[_0x1cd598(0x22c)](_0x1f5b9b),_0x412456=_0x2b79db[_0x1cd598(0x237)]||_0x412456;let _0x3278c4;if(id['endsWith']('@g.us'))return new Promise(async _0x10accf=>{const _0x3025df=_0x1cd598;_0x3278c4=store[_0x3025df(0x1de)][id]||{};if(!(_0x3278c4[_0x3025df(0x1e8)]||_0x3278c4[_0x3025df(0x216)]))_0x3278c4=_0x2b79db[_0x3025df(0x22b)](id)||{};_0x10accf(_0x3278c4[_0x3025df(0x1e8)]||_0x3278c4[_0x3025df(0x216)]||PhoneNumber('+'+id[_0x3025df(0x231)](_0x3025df(0x211),''))[_0x3025df(0x20c)](_0x3025df(0x21a)));});else _0x3278c4=id===_0x1cd598(0x208)?{'id':id,'name':_0x1cd598(0x228)}:id===_0x2b79db[_0x1cd598(0x22c)](_0x2b79db['user']['id'])?_0x2b79db[_0x1cd598(0x209)]:store[_0x1cd598(0x1de)][id]||{};return(_0x412456?'':_0x3278c4[_0x1cd598(0x1e8)])||_0x3278c4[_0x1cd598(0x216)]||_0x3278c4['verifiedName']||PhoneNumber('+'+_0x1f5b9b[_0x1cd598(0x231)]('@s.whatsapp.net',''))[_0x1cd598(0x20c)](_0x1cd598(0x21a));},_0x2b79db[_0x26d7bd(0x1f7)]=(_0x1dae68='')=>{const _0x5887c7=_0x26d7bd;return[..._0x1dae68[_0x5887c7(0x1df)](/@([0-9]{5,16}|0)/g)][_0x5887c7(0x1e3)](_0x4e02a9=>_0x4e02a9[0x1]+'@s.whatsapp.net');},_0x2b79db[_0x26d7bd(0x222)]=async(_0x1fd93e,_0x3362cd,_0x37410e='',_0x314963={})=>{const _0x31dd52=_0x26d7bd;let _0x3ffe3d=[];for(let _0x495d93 of _0x3362cd){_0x3ffe3d['push']({'displayName':await _0x2b79db['getName'](_0x495d93+_0x31dd52(0x211)),'vcard':_0x31dd52(0x1fc)+await _0x2b79db[_0x31dd52(0x249)](_0x495d93+_0x31dd52(0x211))+_0x31dd52(0x201)+await _0x2b79db[_0x31dd52(0x249)](_0x495d93+_0x31dd52(0x211))+_0x31dd52(0x202)+_0x495d93+':'+_0x495d93+'\x0a\x0aitem1.X-ABLabel:Ponsel\x0a\x0aitem2.EMAIL;type=INTERNET:tesheroku123@gmail.com\x0a\x0aitem2.X-ABLabel:Email\x0a\x0aitem3.URL:https://bit.ly/39Ivus6\x0a\x0aitem3.X-ABLabel:YouTube\x0a\x0aitem4.ADR:;;Indonesia;;;;\x0a\x0aitem4.X-ABLabel:Region\x0a\x0aEND:VCARD'});}_0x2b79db[_0x31dd52(0x1e5)](_0x1fd93e,{'contacts':{'displayName':_0x3ffe3d[_0x31dd52(0x24c)]+_0x31dd52(0x23f),'contacts':_0x3ffe3d},..._0x314963},{'quoted':_0x37410e});},_0x2b79db[_0x26d7bd(0x1e9)]=_0x13e5a7=>{const _0x303967=_0x26d7bd;return _0x2b79db['query']({'tag':'iq','attrs':{'to':_0x303967(0x211),'type':_0x303967(0x1fa),'xmlns':_0x303967(0x1e7)},'content':[{'tag':'status','attrs':{},'content':Buffer['from'](_0x13e5a7,_0x303967(0x241))}]}),_0x13e5a7;},_0x2b79db['downloadAndSaveMediaMessage']=async(_0x2a7d6a,_0x3a6d97,_0x295218=!![])=>{const _0x863244=_0x26d7bd;let _0x4e3b1c=_0x2a7d6a[_0x863244(0x229)]?_0x2a7d6a[_0x863244(0x229)]:_0x2a7d6a,_0x4cfaf7=(_0x2a7d6a['msg']||_0x2a7d6a)[_0x863244(0x21c)]||'',_0x2c5fd5=_0x2a7d6a['mtype']?_0x2a7d6a[_0x863244(0x226)][_0x863244(0x231)](/Message/gi,''):_0x4cfaf7[_0x863244(0x1ec)]('/')[0x0];const _0x38a0e8=await downloadContentFromMessage(_0x4e3b1c,_0x2c5fd5);let _0x4556db=Buffer['from']([]);for await(const _0x1ac83c of _0x38a0e8){_0x4556db=Buffer[_0x863244(0x224)]([_0x4556db,_0x1ac83c]);}let _0x7b43e7=await FileType[_0x863244(0x247)](_0x4556db);return trueFileName=_0x295218?_0x3a6d97+'.'+_0x7b43e7[_0x863244(0x234)]:_0x3a6d97,await fs[_0x863244(0x1eb)](trueFileName,_0x4556db),trueFileName;},_0x2b79db[_0x26d7bd(0x22a)]=async _0x5ba055=>{const _0x319fe6=_0x26d7bd;let _0x32d2f8=(_0x5ba055[_0x319fe6(0x229)]||_0x5ba055)[_0x319fe6(0x21c)]||'',_0x349756=_0x5ba055['mtype']?_0x5ba055[_0x319fe6(0x226)][_0x319fe6(0x231)](/Message/gi,''):_0x32d2f8[_0x319fe6(0x1ec)]('/')[0x0];const _0x5ad60a=await downloadContentFromMessage(_0x5ba055,_0x349756);let _0x4e55b6=Buffer[_0x319fe6(0x1ed)]([]);for await(const _0x18e158 of _0x5ad60a){_0x4e55b6=Buffer[_0x319fe6(0x224)]([_0x4e55b6,_0x18e158]);}return _0x4e55b6;},_0x2b79db[_0x26d7bd(0x1ea)]=(_0x5d9425,_0x4ccd51,_0x1364e7='',_0xc8284b)=>_0x2b79db['sendMessage'](_0x5d9425,{'text':_0x4ccd51,..._0xc8284b},{'quoted':_0x1364e7});}_0x58c55c();}catch(_0x5d8375){console[_0x1a6642(0x22d)](_0x5d8375);}};module['exports']={'jadibot':jadibot,'conns':conns};