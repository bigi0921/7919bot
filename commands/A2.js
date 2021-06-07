const discord = new require('discord.js');

module.exports = {
    name : '결과입력',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"대회 결과 입력",value : ":arrow_forward:대회 결과 입력 방법 안내 바로가기:https://discord.gg/4ZzMxZtM"},
            );
        msg.channel.send(embmsg);
    }
}