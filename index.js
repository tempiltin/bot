const TeleBot = require('telebot')
const TELEGRAM_BOT_TOKEN = "5167690788:AAGHpsBK2w6ii6m8_M5MMwCac5-YUFMSfzs";
const bot = new TeleBot(TELEGRAM_BOT_TOKEN)
const chatIds = [];
const CronJob = require('cron').CronJob;
const job = new CronJob(' 0/3600 * * * *', function () {
    console.log('You will see this message every 5 seconds');
    chatIds.forEach((chatId) => {
        bot.sendMessage(chatId, 'Vazifalarni yuborish esdan chiqmasin');
    })
}, null, true);
// bot.on('text' , async (msg) => msg.reply.text('Siz shu habarni bizga  yubordingiz: ' + ' ( ' + msg.text + ' ) ' + 'Iltimos javob kelishni kuting 😊'))
bot.on(['/start'], (msg) => {
    let chatId = msg.chat.id;
    if (!chatIds.includes(chatId)) {
        chatIds.push(chatId);
        msg.reply.text('Assalomu alaykum Botimizga xush kelibsiz ' + ' Kiyingi bosqich "/vazifa" ');
    }
});
bot.on(['/vazifa'], (msg) => {
    let chatId = msg.chat.id;
    if (chatIds.includes(chatId)) {
        msg.reply.text('Vazifangizni bizga yuboring ');
    }
});
bot.on(['/stop'], async (msg) => {
    let chatId = msg.chat.id;
    chatIds.pop(chatId);
});
bot.start();


