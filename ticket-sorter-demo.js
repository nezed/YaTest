var sorter = new Explorer();
sorter.addTickets( [
	{
		start: {
			city: 'Stockholm',
			place: 'airport'
		},
		finish: {
			city: 'New York',
			place: 'airport',
			name: 'New York JFK'
		},
		transport: {
			type: 'flight',
			voyage: 'SK22',
			gate: 22,
			seat: '7b',
			comment: 'Baggage will be automatically transferred from your last leg.'
		}
	},

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
		}
	},
	
	{
		start: {
			city: 'Barcelona',
			place: 'airport',
			name: 'Girona airport'
		},
		finish: {
			city: 'Stockholm',
			place: 'airport'
		},
		transport: {
			type: 'flight',
			voyage: 'sk455',
			gate: '45b',
			seat: '3a',
			comment: 'Baggage drop at ticket counter 344'
		}
	},

	{
		start: {
			city: 'Barcelona',
			place: 'train station'
		},
		finish: {
			city: 'Barcelona',
			place: 'airport',
			name: 'Girona Airport'
		},
		transport: {
			type: 'bus',
			comment: 'No seat assigment'
		}
	}
] );

sorter.addTickets( {
	finish: {
		city: 'Moscow'
	},
	start: {
		city: "New York",
		name: "New York JFK",
		place: "airport"
	},
	transport: {
		type: 'boat',
		seat: 1
	}
});
