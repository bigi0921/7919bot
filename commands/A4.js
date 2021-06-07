const discord = new require('discord.js');

module.exports = {
    name : '진영',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"진영안내",value : ":arrow_forward:진연선택 방법 안내 바로가기:https://discord.gg/kMzb3k56"},
            );
        msg.channel.send(embmsg);
    }
}