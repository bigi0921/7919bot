const discord = new require('discord.js');

module.exports = {
    name : '일정',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회 일정')
            .addFields(
<<<<<<< HEAD
                {value : "안녕하세요. "},
                {value : "대회에 참여하기위해서는 본인명의 라이엇 계정 중 시즌10,11 최고티어 계정 인증 및 디스코드 계정 인증을 해야합니다\."},
                {value : ":arrow_forward:라이엇 계정 인증 방법 안내 바로가기:https://discord.gg/3sAYDf8FuK"},
            );
=======
                {name:"대회 기간",value : "7/16 ~ 7/18일 기간동안 진행 \n\ 7/16: 64강 ~ 16강 총 3경기 (예상 최대 소요시간 3시간) \n\ 7/17: 8강 ~ 준결승 최대 4경기 (예상 최대 소요시간 4시간) \n\ 7/18: 결승전 및 3,4위전 최대 3경기 (예상 최대 소요시간 3시간) "},
                {name:"대회 시간",value : "18:30 ~ 19:30: 1게임 [64강, 8강, 결승 및 3.4위전 1경기] \n\ 19:40 ~ 20:40: 2게임 [32강, 준결승 1경기] [결승 및 3.4위전 2경기] \n\ 20:50 ~ 21:50: 3경기 [16강, 준결승 2경기] [결승 및 3.4위전 3경기] \n\ 22:00 ~ 23:00: 4경기 [준결승 3경기] \n\ :arrow_forward:대회 일정 및 시간 안내:https://discord.gg/DfEmznbT"}
                );
>>>>>>> upstream/master
        msg.channel.send(embmsg);
    }
}