module.exports = {
    name: "대학팀",
    execute(msg,args){
        let role = msg.guild.roles.cache.find(r => r.name === args[1]);
        msg.member.roles.add(role);
        msg.member.setNickname(`[인증된] ${msg.member.user.username}`)
        msg.reply("성공적으로 역할을 지급하고 별명을 변경하였습니다.")
    }
}