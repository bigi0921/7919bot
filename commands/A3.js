const discord = new require('discord.js');

module.exports = {
    name : '벤픽',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"벤픽안내",value : ":arrow_forward:벤픽 방법 안내 바로가기:https://discord.gg/zWufK6yh"},
            );
        msg.channel.send(embmsg);
    }
}