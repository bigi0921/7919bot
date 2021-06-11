const Discord = require('discord.js')
const client = new Discord.Client()
const {prefix, token} = require('./config.json')
const fs = require('fs')
const auth = require('./function/auth')

client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))


for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name,command)
}

client.on('ready', ()=>{
    console.log('봇이 준비되었습니다')
})

client.on('message',msg=>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    try{
        command.execute(msg,args);
    }
    catch(error){
        msg.channel.send("해당 명령어가 존재하지 않습니다. !help로 어떤 명령어가 있는지 확인해 보세요.");
        console.log(error)
    }
})


client.login(token)