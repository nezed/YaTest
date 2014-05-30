var sorter = new Explorer();
sorter.addTickets( [
	{
		start: {
			city: 'Madrid',
			place: 'train station'
		},
		finish: {
			city: 'Barcelona',
			place: 'train station'
		},
		transport: {
			type: 'train',
			voyage: '78a',
			seat: '75b'
		},
		comment: ''
	},
	
	{
		start: {
			city: 'Stockholm',
			place: 'airport'
		},
		finish: {
			// JFK? WTF?
			city: 'New York',
			place: 'airport'
		},
		transport: {
			type: 'flight',
			voyage: 'SJ22',
			gate: 22,
			seat: '78b',
			comment: 'Baggage will be automatically transferred from your last leg.'
		}
	}
] );