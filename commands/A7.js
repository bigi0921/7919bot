const discord = new require('discord.js');

module.exports = {
    name : '방설정',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"방설정",value : ":arrow_forward:방설정 방법 안내 바로가기:https://discord.gg/CpwsyKgz"},
            );
        msg.channel.send(embmsg);
    }
}