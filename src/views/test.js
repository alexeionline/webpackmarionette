import Marionette from 'backbone.marionette';
import testTemplate from "../tpls/test.twig";

let TestModel = Marionette.ItemView.extend({
	
	template: testTemplate,
	
	ui: {
		btn: '.btn'
	},
	
	events: {
		'click @ui.btn': 'btnClick'
	},

	modelEvents: {
		"change": "render"
	},

	btnClick: function() {
		this.model.set({
			btntext: 'clicked'
		});
	}

});

 export default TestModel;
