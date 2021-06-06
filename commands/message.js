const discord = new require('discord.js');

module.exports = {
    name : '일정',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회 일정')
            /*.addFields(
                {value : "안녕하세요. "},
                {value : "대회에 참여하기위해서는 본인명의 라이엇 계정 중 시즌10,11 최고티어 계정 인증 및 디스코드 계정 인증을 해야합니다\."},
                {value : ":arrow_forward:라이엇 계정 인증 방법 안내 바로가기:https://discord.gg/3sAYDf8FuK"},
            )*/;
        msg.channel.send(embmsg);
    }
}