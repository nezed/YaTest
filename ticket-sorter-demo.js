/**
 * Создание экземпляра сортировщика
 * @type Explorer
 */
var sorter = new Explorer();
/**
 * Передаем в экземпляр билеты
 * @param {Explorer.tickets} param
 */
sorter.addTickets( [
	{
		// Описание точки отправления
		start: {
			// Город отправления
			city: 'Stockholm',
			// Пункт отправления
			place: 'airport'
		},
		// Описание точки прибытия
		finish: {
			city: 'New York',
			place: 'airport',
			// Уникальное название пункта
			name: 'New York JFK'
		},
		// Описание транспорта
		transport: {
			// Типа транспорта
			type: 'flight',
			// Рейс
			voyage: 'SK22',
			// Платформа
			gate: 22,
			// Место
			seat: '7b',
			// Дополительное описание, предупреждения, дополнительный услуги
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
			seat: '45b'
		}
	},
	
	{
		start: {
			city: 'Barcelona',
			place: 'airport',
			name: 'Girona Airport'
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
			name: 'airport bus',
			comment: 'No seat assigment'
		}
	}
] );
/**
 * Просто почему бы не попробовать? =)
 */
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
