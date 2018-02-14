var letter = function(let){
	this.getLtr = let;
	this.show = false;
	this.letterRender = function(){
		return !(this.show) ? "_" : this.getLtr;
	};
};

//export the constructor
module.exports = letter;