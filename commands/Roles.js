const Discord = require('discord.js')

module.exports = {
    name : "역할",
    execute(msg,args) {
        const category = msg.guild.channels.cache.find(c => c.id == "851389267623018536" && c.type == "category")
        args.forEach(element => {
            msg.guild.roles.create({
                data: {
                    name: `${element}`,
                    color: 'GREEN',
                },
            })
            .then(role => {
                msg.guild.channels.create(`${element}`, {
                    type : 'text',
                    permissions : [],
                }).then(channel => {
                        channel.setParent(category.id);
                        channel.createOverwrite(msg.guild.roles.cache.find(a => a.name == '@everyone'), { // Disallow Everyone to see, join, invite, or speak
                            'CREATE_INSTANT_INVITE' : false,        'VIEW_CHANNEL': false,
                            'CONNECT': false,                       'SPEAK': false
                        });
                        channel.createOverwrite(role, { 'VIEW_CHANNEL' : true, 'CONNECT' : true})
                    });


                msg.guild.channels.create(`${element}`,{
                    type : 'voice',
                    permissions : [],
                }).then(channel => {
                    channel.setParent(category.id);
                    channel.createOverwrite(msg.guild.roles.cache.find(a => a.name == '@everyone'), { // Disallow Everyone to see, join, invite, or speak
                        'CREATE_INSTANT_INVITE' : false,        'VIEW_CHANNEL': false,
                        'CONNECT': false,                       'SPEAK': false
                    });
                    channel.createOverwrite(role, { 'VIEW_CHANNEL' : true, 'CONNECT' : true})
                });
            })
            .catch(console.error);
        });
    }
}