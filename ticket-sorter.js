'use strict';

function Explorer() {
	var tickets_sorted = false,
	is_next_ticket = function( a, b) {
		if(
			( a.finish.city == b.start.city ) &&
			( a.finish.place == b.start.place ) &&
			( (!a.finish.name) || ( a.finish.name.toLowerCase() == b.start.name.toLowerCase() ) )
		) {
			return true;
		}
		return false;
	},
	sort = function() {

		var breaks = 2;
		while( breaks > 1 )
		for( var i = 0, l = tickets.length; i < l; i++ ) {
			breaks = 0;
			for( var j = i+2; j < l; j++ ) {
				if( is_next_ticket( tickets[i], tickets[j]) ) {
					var a = tickets[j];
					tickets[j] = tickets[i+1];
					tickets[i+1] = a;
					break;
				} else if( is_next_ticket( tickets[i+1], tickets[i] ) ) {
					var a = tickets[i+1];
					tickets[i+1] = tickets[i];
					tickets[i] = a;
					break;
				}
			}
			if( i < l-1 && !is_next_ticket( tickets[i], tickets[i+1] ) ) {
				breaks++;
				console.log( breaks );
			}
		}
		
		while( is_next_ticket( tickets[ l-1 ], tickets[0] ) ) {
			tickets.push( tickets.shift() );
		}
	},
	tickets = [];
		this.is_next_ticket = is_next_ticket;
	
	this.addTickets = function( new_tickets ) {
		/*
		 * TODO Validator
		 */
		if( !(new_tickets instanceof Array) ) {
			new_tickets = [new_tickets];
		}
		tickets.push.apply(tickets, new_tickets);
	}
	
	this.way = function() {
		if( !tickets_sorted ) {
			sort();
		}
		return tickets;
	}
	
	this.humanize = function() {
		
	}
}

