const discord = new require('discord.js');

module.exports = {
    name : '일시정지',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"일시정지",value : ":arrow_forward:일시정지 방법 안내 바로가기:https://discord.gg/AkDWKuME"},
            );
        msg.channel.send(embmsg);
    }
}