(function() {

angular.module('suhiColorApp', [])

  /**
   * @ngdoc controller
   * @name suhiColorCtrl
   * @description App controller
   */
  .controller('suhiColorCtrl',['$scope', function($scope) {

    // Init callback
    $scope.init = function(){
      //console.log('suhicolordentaku.init');
    }
    $scope.init();

  }])

  /**
   * @ngdoc filter
   * @name char2num
   * @description convert each one character to number (1 to 9), through ascii code.
   */
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

  /**
   * @ngdoc filter
   * @name summary
   * @description calculate sum of all number strings (use after alphabet is converted to number)
   */
 .filter('summary', function(){
    return function(input){
      input = input || '';
      var out = 0;
      for (var i = 0; i < input.length; i++) {
        out = out + Number(input.charAt(i));
      }
      return out;
    }
  })

  /**
   * @ngdoc filter
   * @name vowel
   * @description extract vowel characters
   */
 .filter('vowel', function(){
    return function(input){
      input = input || '';
      var out = '';
      for (var i = 0; i < input.length; i++) {
        var ch = input.charAt(i);
        var re = /[aAeEiIoOuU]/;
        if(re.test(ch)){
          out = out + ch;
        }
      }
      return out;
    }
  })

  /**
   * @ngdoc filter
   * @name consolant
   * @description extract consonant characters
   */
 .filter('consonant', function(){
    return function(input){
      input = input || '';
      var out = '';
      for (var i = 0; i < input.length; i++) {
        var ch = input.charAt(i);
        var re = /[bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTuUvVwWxXyYzZ]/;
        if(re.test(ch)){
          out = out + ch;
        }
      }
      return out;
    }
  })

})();