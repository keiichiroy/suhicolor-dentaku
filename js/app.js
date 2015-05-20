(function() {

angular.module('suhiColorApp', [])

  .controller('suhiColorCtrl', function() {
  })

  .filter('char2num', function(){
  	return function(input){
	    input = input || '';
	    var out = "";
	    for (var i = 0; i < input.length; i++) {
	      out = out + input.charAt(i);
	    }
  		return out;
  	}
  })
})();