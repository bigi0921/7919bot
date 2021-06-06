module.exports = {
    name : "역할",
    execute(msg,args,guild) {
        guild.roles.create({
            data: {
                name: 'Super Cool People',
                color: 'BLUE',
            },
            reason: 'we needed a role for Super Cool People',
        })
        .then(console.log)
        .catch(console.error);
    }
}