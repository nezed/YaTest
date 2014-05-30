'use strict';
/**
 * Класс для сортировки билетов
 * @returns {Explorer}
 */
function Explorer() {
	/**
	 * Отсортированы ли переменные
	 * @type Boolean
	 */
	var tickets_sorted = false,
	/**
	 * Объект хранящий билеты
	 * @type Array
	 */
	tickets = [],
	/**
	 * Объект хранящий пункты посадок/высадок
	 * т.е. вершин графов
	 * @type Array
	 */
	places = [],
    
    /**
     * Функция сортировки билетов, путем обхода графа
     * @returns {Explorer.tickets}
     */
	sort = function() {
		var cursor;
		// Единственная вершина графа без предшествующей ей вершины - начало
		// Находим и ставим курсор
		for( var i = 0, l = places.length; i < l; i++ ) {
			if( !places[i].hasOwnProperty('prev') ) {
				cursor = places[i];
				break;
			}
		}
		// Здесь будет отсортированный список билетов
		var _tickets = [];
		// Движемся по графу, пока курсор не дойдет до конца
		while( cursor.next ) {
			_tickets.push( cursor.start );
			cursor = cursor.next;
		}
		// Устанавливаем что с последнего добавления билета была произведена сортировка
		tickets_sorted = true;
		return tickets = _tickets;
	},
	/**
	 * Возвращает объект пункта отправки/прибытия (вершины графа).
	 * Если ранее не упомянался - заносится в объект places
	 * @param {Object} info Объект критериев опознавания пункта прибытия/отправления
	 * @returns {Object}
	 */
	choose_place = function( info ) {
		var place = null;
		// Ищем существует ли в памяти такой транспортный пункт, если да, то возвращаем его объект
		for( var i = 0, l = places.length; i < l; i++ ) {
			if( info.city.toLowerCase() === places[i].city.toLowerCase() && info.place.toLowerCase() === places[i].place.toLowerCase() && (info.name + '' ).toLowerCase() === (places[i].name + '').toLowerCase() ) {
				return places[i];
			}
		}
		// Если пункт не найден, то заносится в память и возвращается
		return places[ (places.push( info ) - 1) ];
	};
	
	/**
	 * Метод добавления билетов в экземпляр класса
	 * @param {Array} new_tickets Массив объектов билетов
	 * @returns {undefined}
	 */
	this.addTickets = function( new_tickets ) {
		/**
		 * Если передан список билетов, то вызываем эту же функцию для каждого билета
		 */
		if( new_tickets instanceof Array ) {
			return new_tickets.forEach( this.addTickets);
		}
		
		/**
		 * Validator
		 */
		if( !new_tickets.start.city || !new_tickets.finish.city || !new_tickets.transposrt.type )
				return;

		/*
		 * Создаем вершины графов и связываем их друг с другом
		 */
		var start_point = choose_place( new_tickets.start );
		var finish_point = choose_place( new_tickets.finish );

		// Переопределяем билету пункты отправления/прибытия, на объекты вершин графа
		new_tickets.start = start_point;
		new_tickets.finish = finish_point;
		// Устанавливаем связи между вершинами
		start_point.next = finish_point;
		finish_point.prev = start_point;
		// Добавляем билет в список
		tickets.push(new_tickets);
		// Связываем вершину графа с билетом - ребром
		start_point.start = tickets[ tickets.length - 1 ];
		if( start_point.prev )
			start_point.prev.finish = start_point.start;
	};
	/**
	 * Возвращает список объектов билетов
	 * @returns {Explorer.tickets}
	 */
	this.way = function() {
		if( !tickets_sorted ) {
			sort();
		}
		return tickets;
	};
	/**
	 * Возвращает массив человекопонятных описаний маршрута
	 * @returns {Array}
	 */
	this.humanize = function() {
		// Сортируем, если после последнего добавления билета не производилось сортировки
		if( !tickets_sorted ) {
			sort();
		}
		/**
		 * Будущий список описаний
		 * @type {Array}
		 */
		var instructions = [];
		for( var i = 0, l = tickets.length; i < l; i++ ) {
			var instruct = '',
			tic = tickets[i];

			// Я так понял, что для билетов на самолет описания выводятся немного в другом виде
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
	};
}
