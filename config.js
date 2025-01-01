const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "SHABAN-SOBX-MD~iVJ0VACQ#y-wDzQNm5we5QFtujOxkMqdZZ1Feoki7L0-SLjnWb5U",
    CAPTION: process.env.CAPTION || "POWERED BY 𝛭𝛩𝛨𝑆𝛪𝛮 𝑆𝛨𝛥𝛨𝛧𝛥𝐷",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/9N1sJ41/Manul-Ofc-X.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M 𝛭𝛩𝛨𝑆𝛪𝛮 𝑆𝛨𝛥𝛨𝛧𝛥𝐷 WHATSAPP BOT 😊",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "𝛭𝛩𝛨𝑆𝛪𝛮 𝑆𝛨𝛥𝛨𝛧𝛥𝐷",
    STATUS_REPLY: process.env.STATUS_REPLY || "`𝛭𝛩𝛨𝑆𝛪𝛮 𝑆𝛨𝛥𝛨𝛧𝛥𝐷 sтαтυs sεεη נυsт ησω`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
