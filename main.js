import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = '7093204518:AAEMH3kRcxYO4PtMyb0_eMIGd0yMouaOvy8'
const webAppUrl = 'https://angular-tg-app-a0d5f.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Bienvenue! Cliquez sur le bouton ci-dessous pour lancer application',
        Markup.keyboard([
            Markup.button.webApp(
                'Envoyer un message',
                `${webAppUrl}feedback`
            )
        ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Votre message: ${data?.feedback}` ?? 'Message vide')
})

bot.launch()