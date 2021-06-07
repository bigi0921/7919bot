const discord = new require('discord.js');

module.exports = {
    name : 'home',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"카페",value : "대회에 참여하기위해서는 카페가입과 본인명의 인증을 해야합니다. \n\ :arrow_forward: 네이버 카페 : https://cafe.naver.com/lof0525 \n\ \n\ :arrow_forward: 디스코드 서버 주소 : https://discord.gg/2jFZvSna "},
            );
        msg.channel.send(embmsg);
    }
}