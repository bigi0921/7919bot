const discord = new require('discord.js');

module.exports = {
    name : '팀원변경',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"팀원변경",value : ":arrow_forward:팀원변경 방법 안내 바로가기:https://discord.gg/GDAg2NP4"},
            );
        msg.channel.send(embmsg);
    }
}