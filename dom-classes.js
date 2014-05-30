//"use strict";
(function(){
		var clean = function( className ) {
				return className.replace(/\s{2,}/g, ' ').trim();
		};
		Node.prototype.setClass = function( className ) {
				this.className = className;
				return this;
		};
		Node.prototype.getClass = function() {
				return this.className || '';
		};
		Node.prototype.hasClass = function( className ) {
				return ( (this.className + ' ').indexOf( className.trim() + ' ' ) > -1 );
		};
		Node.prototype.addClass = function( className ) {
				if( this.hasClass( className ) )
						return this;
				return this.setClass( clean( this.getClass() + ' ' + className ) );
		};
		Node.prototype.removeClass = function( className ) {
				return this.setClass( clean( this.getClass().replace(className, '') ) );
		};
		Node.prototype.toggleClass = function( className ) {
				return ( this.hasClass(className) ? this.removeClass(className) : this.addClass(className) );
		};
		
		NodeList.prototype.setClass = function( className ){
				for( var i = 0, l = this.length; i < l; i++ ) {
						this[i].setClass( className );
				}
				return this;
		};
		NodeList.prototype.getClass = function( className ){
				for( var i = 0, l = this.length; i < l; i++ ) {
						this[i].getClass( className );
				}
				return this;
		};
		NodeList.prototype.hasClass = function( className ){
				for( var i = 0, l = this.length; i < l; i++ ) {
						this[i].hasClass( className );
				}
				return this;
		};
		NodeList.prototype.addClass = function( className ){
				for( var i = 0, l = this.length; i < l; i++ ) {
						this[i].addClass( className );
				}
				return this;
		};
		NodeList.prototype.removeClass = function( className ){
				for( var i = 0, l = this.length; i < l; i++ ) {
						this[i].removeClass( className );
				}
				return this;
		};
		NodeList.prototype.toggleClass = function( className ){
				for( var i = 0, l = this.length; i < l; i++ ) {
						this[i].toggleClass( className );
				}
				return this;
		};
})();