var BodyLeftTemplateMainView = function (props, context) {
	MasterView.call(this, props, context);
}

BodyLeftTemplateMainView.prototype = Object.create(MasterView.prototype);

BodyLeftTemplateMainView.prototype.render = function () {
	return (<div id="left">
		Left
	</div>);
};