import { Bot } from "grammy";

const bot = new Bot("8997561749:AAHdwGV583UgBDSlc8xGD35bRMTee0hcnrg");

bot.command("start", (ctx) => {
  ctx.reply("Привіт! Я Telegram бот 🤖");
});

bot.command("help", (ctx) => {
  ctx.reply(`
Команди:
/start
/help
/joke
  `);
});

bot.command("joke", (ctx) => {
  ctx.reply("Я жартівливий бот 😄");
});

bot.hears(["hello", "привіт"], (ctx) => {
  ctx.reply("Привіт 👋");
});

bot.on("message:text", (ctx) => {
  ctx.reply(`Я отримав твоє повідомлення: ${ctx.message.text}`);
});

bot.start();
console.log("Бот запущений");