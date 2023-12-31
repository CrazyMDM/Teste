const Discord = require("discord.js");
module.exports = {
    name: "cleardm",


    run: async (client, message) => {
      
  const dm = await message.member.createDM();
  await message.reply({content: "<a:sim:1115828258676678747>・A Sua DM foi limpa com sucesso!", ephemeral: true});

  const deleteMessages = await client.channels.cache
    .get(dm.id)
    .messages.fetch({ limit: 99 });

  await deleteMessages.map((msg) => {
    if (msg.author.bot) {
      msg.delete();
    }
  });
}
}