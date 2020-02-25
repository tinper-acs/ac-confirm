'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ConfirmModal = require('./ConfirmModal');

var _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Confirm = {
    create: function create(options) {
        options = _extends({
            confirmFn: function confirmFn() {
                // console.log('确认')
            },
            cancelFn: function cancelFn() {
                // console.log('取消')
            },
            title: '提示信息',
            keyword: '删除',
            content: '确定要删除吗?'
        }, options);
        var toast = document.createElement('div');
        toast.id = 'acConfirm';
        document.body.appendChild(toast);
        _reactDom2["default"].render(_react2["default"].createElement(_ConfirmModal2["default"], options), toast);
    }
};

exports["default"] = Confirm;
module.exports = exports['default'];