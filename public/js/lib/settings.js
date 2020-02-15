define({

	title: 'Ascetiq - Online',

	ttl: 60000,

	motd: '<b>Enignum is the simplest way to start encrypted instant chat</b>.<br>Messages are encrypted in your browser, never stored in the database and will be erased after 60 seconds from the screen.<br>&copy; 2020 LDM Sàrl, France.<hr>',

	nick: {
		maxLen: 20,
		minLen: 2,	
	},

	key: {
		maxLen: 1024,
		minLen: 6,	
	},

	room: {
		minLen: 1,
		maxLen: 64
	},

	notifications: {
		maxOnePerMs: 3000
	}
});