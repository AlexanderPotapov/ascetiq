define({

	title: 'Ascetiq - Online',

	ttl: 1200000,

	motd: '
		<pre>Ascetiq is the first online chat that simulate the real talk</b>.
		<br /><br />
		- Invite the person to the same chat to start the conversation; 
  <br />- Only persons you have invited can read this, as all messages are encrypted in browser;
  <br />- Messages are gone forever in 1 minute after being sent.<br /><br />
        Ascetiq does not store messages or has access to them, as conversations 
        are encrypted in your browser by random key or key that you have set. ¯\_(ツ)_/¯
        <br /><br/>Try /help, /nick, /title, /count ...<br /><br/>
		<hr />
        </pre>',

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