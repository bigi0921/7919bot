const discord = new require('discord.js');

module.exports = {
    name : '상금',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 안내')
            .addFields(
                {name:"상금 지급 안내",value : "```[2021 KL리그 시즌1] \n\ = 1위 팀: 종목별 총 참가비의 50% [64팀 참가시 100만원으로 지급] \n\ = 2위 팀: 종목별 총 참가비의 15% \n\ = 3위 팀: 종목별 총 참가비의 5% \n\ ---상금은 세금(4.4%) 제외하고 지급됩니다. \n\ ---참가비에 30%는 광고비 및 인건비로 사용됩니다.```"},
            );
        msg.channel.send(embmsg);
    }
}