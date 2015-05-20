(function() {

angular.module('suhiColorApp', [])

  .controller('suhiColorCtrl', function() {
  })

  .filter('char2num', function(){
  	return function(input){
	    input = input || '';
	    var out = "";
	    for (var i = 0; i < input.length; i++) {
	      var ascii = input.charCodeAt(i);
	      if(ascii > 64 && ascii < 91){
	        out = out + ((((ascii - 65) % 9)) + 1);
	      }
	      else if (ascii > 96 && ascii < 123){
	        out = out + ((((ascii - 97) % 9)) + 1);
	      }
	    }
  		return out;
  	}
  })

})();