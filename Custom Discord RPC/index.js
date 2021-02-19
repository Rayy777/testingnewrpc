var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "In A Public Sesssion",
assets : {
large_image : "Image",
large_text : "GTAV online" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "join" , url : "https://www.youtube.com/channel/UCHE7K19D-UzbPWUr7sJaICQ"},{label : "Sponsered Server",url : "https://discord.gg/yryTQe3EF2"}]
}
})
})
client.login({ clientId : "788651921308123136" }).catch(console.error);
