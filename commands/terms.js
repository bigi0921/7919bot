const discord = new require('discord.js');

module.exports = {
    name : '참가조건',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"참가 조건",value : "```- 대회에 참여하기위해서는 만 14세 이상, 1시즌 전 or 현 시즌 플레이 횟수 200회 이상(개인랭크), 한국 서버 본인명의(가족명의) 계정으로 참여해야 한다. ```"},
                {name:"인증 방법",value : ":arrow_forward:라이엇 계정 인증 방법 안내 바로가기:https://discord.gg/D8GCryQy \n\ \n\ :arrow_forward:본인 인증 방법 안내 바로가기:https://discord.gg/yCH4nSGF"},
            );
        msg.channel.send(embmsg);
    }
}