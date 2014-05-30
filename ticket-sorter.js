function Explorer() {
	var tickets_sorted = false;
	var sort = function() {
		// tickets_sorted = true;
	}
	var tickets = [];
	
	this.addTickets = function( new_tickets ) {
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
