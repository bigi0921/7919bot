const discord = new require('discord.js');

module.exports = {
    name : '포인트',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(            
                {name:"포인트",value : ":arrow_forward:포인트 관련사항 안내 :https://discord.gg/w34ygwNd"},
            );
        msg.channel.send(embmsg);
    }
}