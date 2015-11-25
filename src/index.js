import Marionette from 'backbone.marionette';
import $ from 'jquery';
import TestView from './views/test';
import TestModel from './models/test';

let testView = new TestView({
	model: new TestModel
});

testView.render().$el.appendTo('body');
