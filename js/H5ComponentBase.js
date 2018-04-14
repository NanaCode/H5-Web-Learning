// 基本图文组件对象

var H5ComponentBase = function( name, cfg ){
	var cfg = cfg || {};  //没有参数，空对象
	var id = ('h5_c_'+Math.random() ).replace('.', '_'); // 为component设置唯一id. 通过id定位component元素

	var cls = 'h5_component_'+cfg.type + ' h5_component_name_'+name;
	var component = $('<div class="h5_component '+cls+'" id="'+id+'">'); //创建DOM元素
	// component.appendTo('body');  //可以不这么做
	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);

	cfg.bg && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage', 'url('+cfg.bg+')')

	if(cfg.center === true){
		component.css({
			marginLeft: (cfg.width/4 * -1) + 'px',
			left: '50%'
		})
	}
	return component // 直接返回对象
}