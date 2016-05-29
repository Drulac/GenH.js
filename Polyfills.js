/*************************************************************************/
/*							   Polyfills		    					 */
/*************************************************************************/

function empty(str)
{
	return (!str || 0 === str.length);
};

function gettype(value)
{
	var s = typeof value;
	if (s === 'object') {
		if (value) {
			if (value instanceof Array) {
				s = 'array';
			}
		} else {
			s = 'null';
		}
	}
	return s;
}

function htmlspecialchars(text)
{
	return text;
}
