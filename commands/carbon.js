const { MessageMedia } = require('whatsapp-web.js');

  module.exports = async function carbonCommand(client, message, prefix){
    try{
        const utext = message.body.split(prefix + "carbon")[1];
        if(!utext.trim()){
            await message.reply("No Query found");
            return;
        }else{
            const carbonAPI = 'https://api.yanzbotz.my.id/api/maker/carbon?text='
            const media = await MessageMedia.fromUrl(`${carbonAPI}${encodeURIComponent(utext)}`, {unsafeMime: true});
            media.mimetype = 'image/png';
            media.filename = "carbon.png";
            await message.reply(media);
        }
    }catch(err){
        message.reply("error!");
    }
  }
