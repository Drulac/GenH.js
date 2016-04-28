class view
{
	constructor(){
		this.html_start = 0;
		this.head_start = 0;
		this.body_start = 0;
		this.debug = 1;
	}

	debug(variable){
		console.debug('debug N°'+this.debug+' : ');
		this.debug++;
		console.debug(variable);
	}

	view(array)
	{
		var code = '';
		if (gettype(array) == 'array') {
			var i = 0;
			var c = array.length;
	
			while (i < c) {
				if (gettype(array[i]) == 'object') {
					var add = array[i].getCode(this);
					if(!empty(add))
						code = code.concat(add);
				}else if (gettype(array[i]) == 'string') {
					add = array[i];
					if(!empty(add))
						code = code.concat(add);
				}
				i++;
			}
		}else if (!empty(array) && gettype(array) == 'string'){
			code += htmlspecialchars(array);
		}else if (!empty(array) && gettype(array) == 'object'){
			if (gettype(array) == 'object') {
				add = array.getCode(this);
				if(!empty(add))
					code += add;
			}else if (gettype(array) == 'string') {
				add = array;
				if(!empty(add))
					code += add;
			}
		}
		return code;
	}
}

//__construct(array)
class Elemente
{	
	constructor (array = NULL)
	{
		if (!empty(array))
			this.array = array;
		return 1;
	}

	getAttribut()
	{
		if(!empty(this.attribut))
		{
			return this.attribut;
		}else{
			this.attribut = this.constructor.name.toLowerCase();
			return this.attribut;
		}
	}

	getCode(view)
	{
		var code = '<'+this.getAttribut();
		if (!empty(this.array)) {
			if (gettype(this.array) == 'array' || gettype(this.array) == 'object'){
				for (var cle in this.array){
					code += ' '+cle+'="'+this.array[cle]+'"';
				}
			}else{
				code += this.array;
			}
		}
		code += '>';
		return code;
	}
}

//__construct(content, array)
class Containere
{
	constructor (content = '', array = NULL)
	{
		if (!empty(array))
			this.array = array;
		if (!empty(content))
			this.content = content;
		return 1;
	}

	getAttribut()
	{
		if(!empty(this.attribut))
		{
			return this.attribut;
		}else{
			this.attribut = this.constructor.name.toLowerCase();
			return this.attribut;
		}
	}

	getCode(view)
	{
		var code = '';
		if(!empty(this.array) || !empty(this.content)){
			code = '<'+this.getAttribut();
			if (!empty(this.array)) {
				for (var cle in this.array){
					var element = this.array[cle];
					if (!empty(element) && !empty(cle))
						code += ' '+cle+'="'+element+'"';
				}
			}
			code += '>';
			if(gettype(this.content) == 'string'){
				code += this.content;
			}else{
				code += view.view(this.content);
			}

			code += '</'+this.getAttribut()+'>';
		}
		if(code == '<'+this.getAttribut()+'></'+this.getAttribut()+'>')
			code = '';
		return code;
	}
}

class input extends Elemente{}
class link extends Elemente{}
class meta extends Elemente{}
class img extends Elemente{}
class script extends Containere{}
class style extends Containere{}
class div extends Containere{}
class pre extends Containere{}
class ul extends Containere{}
class li extends Containere{}
class header extends Containere{}
class title extends Containere{}
class head extends Containere{}
class form extends Containere{}
class button extends Containere{}
class a extends Containere{}
class p extends Containere{}
class span extends Containere{}
class strong extends Containere{}
class em extends Containere{}
class code extends Containere{}
class h1 extends Containere{}
class h2 extends Containere{}
class h3 extends Containere{}
class h4 extends Containere{}
class h5 extends Containere{}
class h6 extends Containere{}
class textarea extends Containere{}
class Line
{
	getCode($view)
	{
		return '<br>';
	}
}
