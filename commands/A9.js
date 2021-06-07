const discord = new require('discord.js');

module.exports = {
    name : '신청방법',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"신청방법",value : ":arrow_forward:신청방법 안내 바로가기:https://discord.gg/NtEDaZag"},
            );
        msg.channel.send(embmsg);
    }
}