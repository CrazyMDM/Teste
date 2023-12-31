const Discord = require("discord.js")
const { JsonDatabase, } = require("wio.db");
const config = new JsonDatabase({ databasePath:"./config.json" });
const axios = require('axios');

module.exports = {
    name: "cancelar",
    run: async(client, message, args) => {
    
            if(!args[0]) return message.reply(`<a:planeta:1115828269774819348>・Você não selecionou nenhum ID!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
        if(args[1]) return message.reply(`<a:planeta:1115828269774819348>・Você não pode selecionar dois IDs de uma vez!`).then(msg => setTimeout(() => msg.delete().catch(err => console.log(err)), 5000));
        
    axios.get(`https://spacefama.com/api/v2?action=cancel&order=${args[0]}&key=cDtMeUC2YUFfIdPlsekWNwZZLWGaF2zdEIDVyCVeuEktrXrayP4hm3p01xKy`).then(async res => {
    
    data = res.data
    
    message.reply(`<a:load:1117290048388354158> **・Verificando seus dados...**`)
        
        let texto = `${data.ok}`;
    texto = texto.replace("false", "Cancelamento do pedido recusado");
    texto = texto.replace("true", "Cancelamento do pedido com sucesso");
    
    const embed = new Discord.MessageEmbed()
    
    .setTitle(`Painel SMM・Gerenciamento`)
    .setColor(`GREEN`)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`Cancelamento de Pedido`, client.user.displayAvatarURL())
    .setDescription(`<:mysql:1109636930599125012> **・${texto}**`)
    
    message.channel.send({ embeds: [embed] })
        
    })
    }
}