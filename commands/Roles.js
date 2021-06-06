module.exports = {
    name : "역할",
    execute(msg,args) {
        args.forEach(element => {
            msg.guild.roles.create({
                data: {
                    name: `${element}`,
                    color: 'GREEN',
                },
            })
            .then(console.log)
            .catch(console.error);
        });
    }
}