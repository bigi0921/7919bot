const discord = new require('discord.js');

module.exports = {
    name : 'HELP',
    execute(msg) {
        const embmsg = new discord.MessageEmbed()
            .setColor('#87CEEB')
            .setTitle('대회봇 명령어 안내')
            .addFields(
                {name:"명령어",value : "\n\ 아래와 같은 명령어를 [#:robot:대회봇-문의]채널 or 대회봇에게 메세지를 보내면 답변안내드립니다. \n\ \n\ ```- !HELP         : 헬프봇 전체 명령어\n\- !팀명 XXX     : 팀명 찾기\n\- !HOME         : 대회 카페\n\- !참가조건      : 대회 참가 조건\n\- !신청방법      : 신청방법 안내 \n\- !일정          : 전체 대회 일정\n\- !상금          : 대회 상금\n\- !포인트        : 대회 참가 포인트\n\- !계정인증      : Riot 및 본인인증\n\- !결과입력      : 경기 종료 후 결과 입력\n\- !밴픽          : 밴픽 진행시 주의사항\n\- !진영          : 경기 진영 확인\n\- !일시정지      : 일시정지 방법 및 규정\n\- !팀원변경      : 팀원 변경 방법\n\- !방설정        : 경기 사용자 설정 방법\n\- !연락두절      : 노쇼 및 연락두절``` \n\ :arrow_forward:대회봇 문의채널 바로가기:https://discord.gg/TVSrCXND"},
            );
        msg.channel.send(embmsg);
    }
}