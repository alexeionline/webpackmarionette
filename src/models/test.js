import Marionette from 'backbone.marionette';

let TestView = Backbone.Model.extend({
	defaults: {
		title: 'Test page title _',
		btntext: 'click me'
	}
});

 export default TestView;