/* 内容管理对象 */

var H5 = function(){
	this.id = ('h5_'+Math.random()).replace('.','_')
	this.el = $('<div class="h5" id="'+this.id+'">').hide();
	this.page = [];
	$('body').append(this.el);

	/**
	 *新增一个页
	 * @param {string} [name] [组件名称,会加入到ClassName中]
	 * @param {string} [text] [页内的默认文本]
	 * @return {H5} [H5对象，可以重复使用H5对象支持的方法]
	 */

	this.addPage = function(name, text){
		var page = $('<div class="h5_page section">');

		if( name != undefined){
			page.addClass('h5_page_'+name);
		}
		if( text != undefined){ //用于测试
			page.text(text);
		}
		this.el.append(page); //需要加这个addPage才能在html上生效，坑
		this.page.push(page);
		return this;
	}
	// 新增一个组件
	this.addComponent = function(name, cfg){
		var cfg = cfg || {};
		cfg = $.extend({
			type: 'base'
		}, cfg); //默认添加type

		var component;
		var page = this.page.slice(-1)[0]; //??? 注意括号和中括号用法

		switch( cfg.type){
			case 'base': //坑，记得冒号
				component = new H5ComponentBase(name, cfg);
			break; //正确的应该再缩进四格？？？

			default: //坑，注意这里是冒号，不是分号
		}

		page.append(component);

		return this; //坑，记得return this
	}
	// H5对象初始化呈现
	this.loader = function(){
		this.el.fullpage(); //依赖classname里有section
		this.el.show();
	}
	return this;
}