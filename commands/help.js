const { MessageMedia } = require('whatsapp-web.js');

module.exports = async function helpCommand(client, message, prefix) {
    const helpImg = 'https://te.legra.ph/file/86aa8d8ffedc0c2c7ce7f.jpg';
    const helpMsg = `
Hey 👋 I am Koyuki🧣 

*OWNER 🌊*
 eval,term,sudos,addsudo,delsudo

*BOT 🤖*
 start,help,ping,hi

*GROUP 🍁*
 promote,demote,kick,revoke,invite
 chatbot,id,info,extract,tagall

*UTILS 🍀*
 report,support,tl,tr,paste,tiny,wiki
 sauce,getprompt,truecaller

*Learning 📚*
 code,gpt,bard

*Downloader 🫧*
 song,video,insta,detail

*Media 🪵*
 sticker,rmbg,enhance,pint

*FUN 🧣*
 q,imagine,draw,meme,joke
 wanted,tts,emoji,pp,carbon
 toanim,toanime3d

*NSFW 🏮*
 hanime,hbar*

*OTHER 🍫*
 repo,owner

*Bot from  Crystal🔮*
    `;
    const media = await MessageMedia.fromUrl(helpImg, { unsafeMime: true });
    await client.sendMessage(message.from, media, { caption: helpMsg })
    }
