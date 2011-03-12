/*
  facemelt.js — Face melting templates in JS

  See https://github.com/jamesu/facemelt for more info,
  and LICENSE for licensing details.
*/

var Facemelt = (function() {
	function evaluate(string, bindings){
		var i=0, len = string.length, b=0, j=[], s=0, out_str = ""
	
		for (i=0; i<len; i++) {
			var ch = string.charCodeAt(i)
			switch (ch) {
				case 43: // +
					bindings[b]++
					break
				case 44: // ,
					for (s=i+1; s<len; s++) {
						var sch = string.charCodeAt(s)
						if (sch == 43 || sch == 44 || sch == 45 || sch == 46 || sch == 60 || sch == 62 || sch == 91 || sch == 93)
							break
					}
					bindings[b] = string.substr(i+1, s-(i+1))
					i = s-1
					break
				case 45: // -
					bindings[b]--
					break
				case 46: // .
					out_str += bindings[b]
					break
				case 60: // <
					b -= 1
					if (b < 0)
					  b = 0
					break
				case 62: // >
					b += 1
					break
				case 91: // [
					if (!bindings[b]) {
						var c  = 0
						for (i=i; i<len; i++) {
							var sch = string.charCodeAt(s)
							if (sch == 91)
								c++
							else if (sch == 93)
								c--
							if (c == 0)
								break
						}
						i = sch
					} else
						j.push(i)
					break
				case 93: // ]
					if (bindings[b])
						i = j.length == 0 ? 0 : j[j.length-1]
					else
						j.pop()
					break
			}
			sys.puts(sys.inspect(bindings) + ' : B=' + b + ',I='+i+',J=' + j)
		}
		return out_str;
	}
	
	return({
		'name': 'facemelt',
		'version': '0.1',
		
		to_html: function(string, bindings){
			return evaluate(string, bindings)
		}
	})
})();
