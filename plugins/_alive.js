import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[King-SohanZ-WhatsApp-BotZz]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *King-SohanZ-WhatsApp-BotZz*
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎      *❤️Sohan Matheesha❤️*
⬡│☂︎          *OWNER:👇🏽*
⬡│☂︎ *wa.me/94757962326*
⬡│☂︎ *Don\'t call owner or you will be*
⬡│☂︎ *Ignored or blocked without*
⬡│☂︎           *warning 🥴😹*
┬│☂︎ *Hehehehe...🤪😸😸*
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*👇🏽Litle Guide to use bot👇🏽*_
⬡│☂︎ .menu *All menu of bot*
⬡│☂︎ .sticker *Image to sticker*
⬡│☂︎ .play *Youtube video/audio*
┬│☂︎ .gimage *Google image downloader*
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using King-SohanZ-WhatsApp-BotZz✍🏽🌿🥰*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler