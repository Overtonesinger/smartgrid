'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Example = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseComponent = require('./BaseComponent');

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editors = ReactDataGridPlugins.Editors;
var Toolbar = ReactDataGridPlugins.Toolbar;
var AutoCompleteEditor = ReactDataGridPlugins.Editors.AutoComplete;
var DropDownEditor = ReactDataGridPlugins.Editors.DropDownEditor;

faker.locale = 'en_GB';

function createFakeRowObjectData(index) {
	return {
		id: 'id_' + index,
		avartar: faker.image.avatar(),
		county: faker.address.county(),
		email: faker.internet.email(),
		title: faker.name.prefix(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		street: faker.address.streetName(),
		zipCode: faker.address.zipCode(),
		date: faker.date.past().toLocaleDateString(),
		bs: faker.company.bs(),
		catchPhrase: faker.company.catchPhrase(),
		companyName: faker.company.companyName(),
		words: faker.lorem.words(),
		sentence: faker.lorem.sentence()
	};
}

function createRows(numberOfRows) {
	var rows = [];
	for (var i = 0; i < numberOfRows; i++) {
		rows[i] = createFakeRowObjectData(i);
	}
	return rows;
}

var counties = [{ id: 0, title: 'Bedfordshire' }, { id: 1, title: 'Berkshire' }, { id: 2, title: 'Buckinghamshire' }, { id: 3, title: 'Cambridgeshire' }, { id: 4, title: 'Cheshire' }, { id: 5, title: 'Cornwall' }, { id: 6, title: 'Cumbria, (Cumberland)' }, { id: 7, title: 'Derbyshire' }, { id: 8, title: 'Devon' }, { id: 9, title: 'Dorset' }, { id: 10, title: 'Durham' }, { id: 11, title: 'Essex' }, { id: 12, title: 'Gloucestershire' }, { id: 13, title: 'Hampshire' }, { id: 14, title: 'Hertfordshire' }, { id: 15, title: 'Huntingdonshire' }, { id: 16, title: 'Kent' }, { id: 17, title: 'Lancashire' }, { id: 18, title: 'Leicestershire' }, { id: 19, title: 'Lincolnshire' }, { id: 20, title: 'Middlesex' }, { id: 21, title: 'Norfolk' }, { id: 22, title: 'Northamptonshire' }, { id: 23, title: 'Northumberland' }, { id: 24, title: 'Nottinghamshire' }, { id: 25, title: 'Northamptonshire' }, { id: 26, title: 'Oxfordshire' }, { id: 27, title: 'Northamptonshire' }, { id: 28, title: 'Rutland' }, { id: 29, title: 'Shropshire' }, { id: 30, title: 'Somerset' }, { id: 31, title: 'Staffordshire' }, { id: 32, title: 'Suffolk' }, { id: 33, title: 'Surrey' }, { id: 34, title: 'Sussex' }, { id: 35, title: 'Warwickshire' }, { id: 36, title: 'Westmoreland' }, { id: 37, title: 'Wiltshire' }, { id: 38, title: 'Worcestershire' }, { id: 39, title: 'Yorkshire' }];

var titles = ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.'];

var columns = [{
	key: 'id',
	name: 'ID',
	width: 80,
	resizable: true
}, {
	key: 'avartar',
	name: 'Avartar',
	width: 60,
	formatter: ReactDataGridPlugins.Formatters.ImageFormatter,
	resizable: true,
	headerRenderer: _react2.default.createElement(ReactDataGridPlugins.Formatters.ImageFormatter, { value: faker.image.cats() })
}, {
	key: 'county',
	name: 'County',
	editor: _react2.default.createElement(AutoCompleteEditor, { options: counties }),
	width: 200,
	resizable: true
}, {
	key: 'title',
	name: 'Title',
	editor: _react2.default.createElement(DropDownEditor, { options: titles }),
	width: 200,
	resizable: true,
	events: {
		onDoubleClick: function onDoubleClick() {
			console.log("The user double clicked on title column");
		}
	}
}, {
	key: 'firstName',
	name: 'First Name',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'lastName',
	name: 'Last Name',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'email',
	name: 'Email',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'street',
	name: 'Street',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'zipCode',
	name: 'ZipCode',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'date',
	name: 'Date',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'bs',
	name: 'bs',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'catchPhrase',
	name: 'Catch Phrase',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'companyName',
	name: 'Company Name',
	editable: true,
	width: 200,
	resizable: true
}, {
	key: 'sentence',
	name: 'Sentence',
	editable: true,
	width: 200,
	resizable: true
}];
/*-----wrong syntax-highlight STOPPER!-----*/

//var Example = React.createClass({displayName: 'component',

var Example = exports.Example = function (_Base) {
	_inherits(Example, _Base);

	function Example(props) {
		_classCallCheck(this, Example);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Example).call(this, props));

		var fakeRows = createRows(2000);
		_this.state = { rows: fakeRows };
		return _this;
	}

	_createClass(Example, [{
		key: 'getInitialState',
		value: function getInitialState() {
			var fakeRows = createRows(2000);
			return { rows: fakeRows };
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(ReactDataGrid, { ref: 'grid',
				enableCellSelect: true,
				columns: this.getColumns(),
				rowGetter: this.getRowAt,
				rowsCount: this.getSize(),
				onGridRowsUpdated: this.handleGridRowsUpdated,
				toolbar: _react2.default.createElement(Toolbar, { onAddRow: this.handleAddRow }),
				enableRowSelect: true,
				rowHeight: 50,
				minHeight: 600,
				rowScrollTimeout: 200
			});
		}
	}, {
		key: 'getColumns',
		value: function getColumns() {
			var clonedColumns = columns.slice();
			clonedColumns[2].events = {
				onClick: function (ev, args) {
					var idx = args.idx;
					var rowIdx = args.rowIdx;
					this.refs.grid.openCellEditor(rowIdx, idx);
				}.bind(this)
			};

			return clonedColumns;
		}
	}, {
		key: 'handleGridRowsUpdated',
		value: function handleGridRowsUpdated(updatedRowData) {
			var rows = this.state.rows;

			for (var i = updatedRowData.fromRow; i <= updatedRowData.toRow; i++) {
				var rowToUpdate = rows[i];
				var updatedRow = _react2.default.addons.update(rowToUpdate, { $merge: updatedRowData.updated });
				rows[i] = updatedRow;
			}

			this.setState({ rows: rows });
		}
	}, {
		key: 'handleAddRow',
		value: function handleAddRow(e) {
			var newRow = {
				value: e.newRowIndex,
				userStory: '',
				developer: '',
				epic: '' };
			var rows = _react2.default.addons.update(this.state.rows, { $push: [newRow] });
			this.setState({ rows: rows });
		}
	}, {
		key: 'getRowAt',
		value: function getRowAt(index) {
			if (index < 0 || index > this.getSize()) {
				return undefined;
			}
			return this.state.rows[index];
		}
	}, {
		key: 'getSize',
		value: function getSize() {
			return this.state.rows.length;
		}
	}]);

	return Example;
}(_BaseComponent2.default);

ReactDOM.render(_react2.default.createElement(Example, null), mountNode);