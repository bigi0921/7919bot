module.exports = {
    name: "초기화",
    execute(msg,args,guild){
        const roles = msg.member.roles.cache;
        msg.member.roles.remove(roles);
        msg.member.setNickname(`${msg.member.user.username}`)
        msg.reply("성공적으로 역할을 지급하고 별명을 변경하였습니다.")
    }
}