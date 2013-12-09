function redump(thevar)
{
	var dump=function(n,v)
	{
		var r='';
		if (n)n+=' : ';
		else n='';
		var t=Object.prototype.toString.call(v);
		t=t.substr(8,t.length-9);
		switch(t)
		{
			case 'String':
			case 'Date':
				r+=n+t+' = "'+v.toString().replace('"','\\"')+'"';
				break;
			case 'Number':
			case 'RegExp':
			case 'Boolean':
				r+=n+t+' = '+v;
				break;
			case 'Null':
			case 'Undefined':
				r+=n+t;
				break;
			case 'Array':
				r+=n+'Array = [<ul style="list-style:none">';
				for (c in v)
				{
					r+='<li>';
					r+=dump('['+c+']',v[c])+',';
					r+='</li>';
				}
				r+='</ul>]';
				break;
			case 'Object':
				r+=n+'Object = {<ul style="list-style:none">';
				for (c in v)
				{
					r+='<li>';
					r+=dump('.'+c,v[c])+',';
					r+='</li>';
				}
				r+='</ul>}'
				break;
			case 'Function':
				r+=n+t+' = '+v.toString().substr(0,v.toString().indexOf('{'));
				r+='{<ul style="list-style:none">';
					r+='<li>Arguments: '+v.length+'</li>';
				r+='</ul>}';
				break;
			default:
				r+='>>'+t+'<<'+n;
				break;
		}
		return r;
	}
	return dump('',thevar);
}
