/* Require discord.js */
const Discord = require('discord.js');
/* Create a new manager and spawn 2 shards */
const Manager = new Discord.ShardingManager('./app.js');
Manager.spawn(4);