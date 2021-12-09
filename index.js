const TOKEN = "5034967485:AAFb4wrFmtpoMqLuNku8aKttOSq9QXez_io";
const Telebot = require('telebot');
const TelegramBot = require('node-telegram-bot-api')
const bot = new Telebot(TOKEN);
const chatIds =[];
const CronJob = require('cron').CronJob; // bu bizga belgilagan vaqt oralig'ida habar yuboadi



const telebot = new TelegramBot(TOKEN , {polling:true});
const request = require('request');




const job = new CronJob('24/1 * * * * *', function() {

  console.log('Botni ishga tushirish muvofaqiyatli yakunlandi . . . . . . 👌');
  chatIds.forEach((chatId) => {
     bot.sendMessage(chatId , link + 'British Council va DTM hamkorligida tashkillashtirilgan APTIS FOR TEACHERS imtihoniga tayyorgarlik  uchun yaratilgan ');
  });
}, null, true);


bot.on('text' , () => msg.reply.text('kelgan habar: ' + msg.text));
bot.on(['/start'], (msg) => {
    let chatId = msg.chat.id;
    if(!chatIds.includes(chatId)){
        let link = 'https://t.me/aptis_for_teachers_uz'
        chatIds.push(chatId);
        msg.reply.text('Assalomu alaykum hurmatli foydalanuvchi       botimizga xush kelibsiz.        Botimizdan foydalanganingiz          uchun minnatdormiz' +   
       '            ' + '( ' + link  + ' )  '  + '     British Council va DTM hamkorligida tashkillashtirilgan APTIS FOR TEACHERS imtihoniga tayyorgarlik  uchun yaratilgan '
        );
        job.start();

    }
})

// telebot.onText(/\/kino (.+)/ , (msg,match) =>{
//     let kino = match[1];
//     let chatId = msg.chat.id;
//     request(`http://www.omdbapi.com/?i=tt3896198&apikey=59022c1b&t=${movie}` , (error,response,body)=> {
//         if(!error && response.statusCode == 200){
//             telebot.sendMessage(chatId , '_Loking for _' + movie + '...' , {parse_mode: 'Markdown'});
//             telebot.sendMessage(chatId , 'Result: \n ' + body )
//         }
//     })

// });







// telebot.onText(/\/echo (.+)/ , (msg,match) =>{
//     let echo = match[1];
//     let chatId = msg.chat.id;
//     telebot.sendMessage(chatId , echo);

// });
bot.start()
bot.on(['/stop'], (msg) => {
    let chatId = msg.chat.id;
    chatIds.pop(chatId)
})




