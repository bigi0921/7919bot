module.exports = {
    name : "역할제거",
    execute(msg,args) {
        args.forEach(element => {
            msg.guild.channels.cache.find(a => a.name == `${element}` && a.type == 'text').delete();
            msg.guild.channels.cache.find(a => a.name == `${element}` && a.type == 'voice').delete();
            msg.guild.roles.cache.find(a => a.name == `${element}`).delete();
        });
    }
}