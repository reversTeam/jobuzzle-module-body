var BodyCoverTemplateMainView = function (props, context) {
	MasterView.call(this, props, context);
}

BodyCoverTemplateMainView.prototype = Object.create(MasterView.prototype);

BodyCoverTemplateMainView.prototype.render = function () {
	var activeState = 'disable';
	if (this.state.visible)
		activeState = 'enable'
	return (<div className={activeState} id="cover" onClick={this.coverHide.bind(this)}>
		Covers
	</div>);
};


BodyCoverTemplateMainView.prototype.getInitialState = function () {
	return ({ visible : false });
};

BodyCoverTemplateMainView.prototype.coverShow = function () {
	this.setState({ visible : true });
};

BodyCoverTemplateMainView.prototype.coverHide = function () {
	this.setState({ visible : false });
};