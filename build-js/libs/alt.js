'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

var _makeFinalStore = require('alt-utils/lib/makeFinalStore');

var _makeFinalStore2 = _interopRequireDefault(_makeFinalStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// NOTE: Dispatching in Alt
// To log everything just use:  alt.dispatcher.register(console.log.bind(console));
// Alternatively: trigger this.dispatcher.register(...)  at a store constructor.

var Flux = function (_Alt) {
	_inherits(Flux, _Alt);

	function Flux(config) {
		_classCallCheck(this, Flux);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Flux).call(this, config));

		_this.FinalStore = (0, _makeFinalStore2.default)(_this);
		return _this;
	}

	return Flux;
}(_alt2.default);

var flux = new Flux();

exports.default = flux;