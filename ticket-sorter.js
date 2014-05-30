'use strict';

function Explorer() {
	var tickets_sorted = false,
	tickets = [],
	places = [],
	sort = function() {
		var cursor;
		// Единственная вершина графа без предыдущей ей точки - начало
		// Находим и ставим курсор
		for( var i = 0, l = places.length; i < l; i++ ) {
			if( !places[i].hasOwnProperty('prev') ) {
				cursor = places[i];
				break;
			}
		}
		// Отсортированный список билетов
		var _tickets = [];
		// Движемся по графу, пока курсор не дойдет до конца
		while( cursor.next ) {
			_tickets.push( cursor.start );
			cursor = cursor.next;
		}
		return tickets = _tickets;
	},
	choose_place = function( info ) {
		var place = null;
		for( var i = 0, l = places.length; i < l; i++ ) {
			if( info.city.toLowerCase() === places[i].city.toLowerCase() && info.place.toLowerCase() === places[i].place.toLowerCase() && (info.name + '' ).toLowerCase() === (places[i].name + '').toLowerCase() ) {
				return places[i];
			}
		}
		return places[ (places.push( info ) - 1) ];
	};
	
	this.addTickets = function( new_tickets ) {
		/*
		 * TODO Validator
		 */
		if( new_tickets instanceof Array ) {
			return new_tickets.forEach( this.addTickets);
		}

		/*
		 * Создаем вершины графов и связываем их друг с другом
		 */
		var start_point = choose_place( new_tickets.start );
		var finish_point = choose_place( new_tickets.finish );

		new_tickets.start = start_point;
		new_tickets.finish = finish_point;

		start_point.next = finish_point;
		finish_point.prev = start_point;

		tickets.push(new_tickets);

		start_point.start = tickets[ tickets.length - 1 ];
		if( start_point.prev )
			start_point.prev.finish = start_point.start;
	}
	
	this.way = function() {
		if( !tickets_sorted ) {
			sort();
		}
		return tickets;
	}
	
	this.humanize = function() {
		if( !tickets_sorted ) {
			sort();
		}
		var instructions = [];
		for( var i = 0, l = tickets.length; i < l; i++ ) {
			var instruct = '',
			tic = tickets[i];

			if( tic.transport.type === 'flight' ) {
				instruct = 'From ' + ( tic.start.name || tic.start.city ) + ', take flight ' + tic.transport.voyage.toString().toUpperCase();
			} else {
				instruct = 'Take ' + ( !tic.transport.voyage ? 'the ' : '' ) + tic.transport.type + ' ' + 
						(tic.transport.voyage ? tic.transport.voyage.toString().toUpperCase() + ' ' : '') +
						'from ' + ( tic.start.name || tic.start.city );
			}
			instruct += ' to ' + ( tic.finish.name || tic.finish.city ) + '.';
			if( tic.transport.gate ) {
				instruct += ' Gate ' + tic.transport.gate.toString().toUpperCase() + '.';
			}
			if( tic.transport.seat ) {
				instruct += ' Seat ' + tic.transport.seat.toString().toUpperCase() + '.';
			}
			if( tic.transport.comment ) {
				instruct += ' ' + tic.transport.comment.toString().replace(/^\s+|\s*\.?\s*$/g, '') + '.';
			}

			instructions.push( instruct );
		}
		return instructions;
	}
}

