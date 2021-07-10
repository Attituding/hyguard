const { prefix } = require('../../userConfig.json');
module.exports = {
	name: 'uptime',
	description: 'Shows the uptime of the bot',
	title: 'Displays uptime of the bot',
  database: false,
  cooldown: 5,
	execute(message, args, client) {
		try {
			function uptimeFunc() {
				let totalSeconds = (client.uptime / 1000);
				let roundedNumber = Math.round(totalSeconds * 10) / 10;
				let pureDays = Math.floor(roundedNumber / (3600 * 24));
				let uptimeDays = pureDays > 0 ? pureDays + (pureDays == 1 ? ' day ' : ' days ') : ''; //checks if day or days should be used
				let hmsuptime = new Date(totalSeconds * 1000).toISOString().substr(11, 8);
					  return `:stopwatch: Current uptime is ${uptimeDays}${hmsuptime}, or ${roundedNumber} seconds.`;
					  }
				message.channel.send(uptimeFunc());
		} catch (err) {
			console.log(`Error 11: ${err}`);
			message.channel.send(`An unknown error occured. Please report this. ERROR_11: \`${err}\``);
		}
	},
};