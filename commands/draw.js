const { MessageMedia } = require('whatsapp-web.js');
const generate = require('../utils/drawmodule');

let processingRequest = false;

module.exports = async function drawCommand(client, message, prefix) {
    if (processingRequest) {
        return await message.reply('Another request is currently being processed. Please wait.');
    }

    processingRequest = true;

    try {
        const utext = message.body.split(prefix + "draw")[1];
        if(!utext.trim()){
            await message.reply(`No query!\nExample: ${prefix}draw 1girl, Dark red hair, black dress, silver hair in manga style`)
            return;
        }
        const processing = await message.reply(`*Processing...*`);
        const models = ['quartz', 'MeinaHentai', 'Counterfeit-V3.0', 'MeinaUnreal', 'NUKE - ColorMax Anime', 'Loli Diffusion AOM2 SFW', 'AnythingElse V4', '万象熔炉 | Anything V5/Ink', 'Hardcore - Asian Porn', 'Pastel+lines mix', 'Kawaii Realistic Manga Mix', 'cornflower - stylized', 'fiamix++ H'];
        const randomModel = models[Math.floor(Math.random() * models.length)];
        const neg_prompt = 'Bad hand, bad face, bad art, bad legs, bad chest, bad body, bad quality'

        const data = await generate(utext, neg_prompt, randomModel);
        const processedImg = data.img;
        const chosmodel = data.model;
        await processing.edit('Done!');
        const media = await MessageMedia.fromUrl(processedImg, {unsafeMime: true});
        await client.sendMessage(message.from, media, {caption: `*Prompt:* ${utext}\n*Model:* ${chosmodel}`})
    } catch (error) {
        console.error(error);
        await message.reply('An error occurred while processing your request. Please try again later.');
    } finally {
        processingRequest = false;
    }
}
