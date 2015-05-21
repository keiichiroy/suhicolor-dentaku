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
        // Uppercase
	      if(ascii > 64 && ascii < 91){
	        out = out + ((((ascii - 65) % 9)) + 1);
	      }
        // Lowercase
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
   * @description calculate sum of all number strings recursively (use after alphabet is converted to number)
   */
 .filter('summary', ['$filter', function($filter){
    return function(input){
      input = input || '';
      input = String(input);

      if(input.length < 2 || input === '11' || input === '22' || input === '33'){
        console.log('Exit: '+ input);
        return input;
      }

      var out = 0;
      for (var i = 0; i < input.length; i++) {
        out = out + Number(input.charAt(i));
      }

      console.log('continue: '+out);
      return $filter('summary')(String(out));
    }
  }])

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