const discord = new require('discord.js');

module.exports = {
    name : '연락두절',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"연락두절",value : ":arrow_forward:연락두절 방법 안내 바로가기:https://discord.gg/AECNuzAT"},
            );
        msg.channel.send(embmsg);
    }
}

module.exports = {
    name : '대진표',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"대진표",value : ":arrow_forward:대진표 방법 안내 바로가기:https://discord.gg/h5BbReEf"},
            );
        msg.channel.send(embmsg);
    }
}