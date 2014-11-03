'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
	question: {
		type: String,
		default: '',
		required: 'Please enter a question',
		trim: true
	},
	numberOfTimesAsked: {
		type: Number,
		default: 1
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Question', QuestionSchema);