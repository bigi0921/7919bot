const discord = require('discord.js')
const Textfiles = require('./Text/text.json');
const {prefix} = require('../config.json')

module.exports = {
	execute(msg) {
    	const msgname = msg.content.slice(prefix.length).trim().split(/ +/).shift();
		for(const text of Textfiles.texts) {
			if(text.name == msgname) {
				let embmsg = new discord.MessageEmbed()
					.setColor('#87CEEB')
					.setTitle('대회봇 안내')
				for(const i of text.value) {
					embmsg.addField(i.name,i.value)
				}
				msg.channel.send(embmsg);
			}
		}
	}
}