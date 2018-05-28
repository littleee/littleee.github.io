webpackJsonp([15],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(75);


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {//加载模块css
	__webpack_require__(25);
	//加载模板
	var html = __webpack_require__(26);

	module.exports = function(param) {

		var $dialog = $(html).clone();

		//传入内容
		$dialog.find('.content').html(param);

		//关闭对话框
		$dialog.find('.close').on('click', function() {
			$('body').removeClass('modal-open');
			$dialog.fadeOut(function() {
				$(this).remove();
			});
		});

		//加载渲染对话框
		$('body').append($dialog).addClass('modal-open');
		$dialog.fadeIn();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"dialog-wrapper\">\n\t<div class=\"dialog-bg\"></div>\n\t<div class=\"dialog\">\n\t\t<div class=\"header\">\n\t\t\t<span class=\"close\">×</span>\n\t\t</div>\n\t\t<div class=\"content\"></div>\n\t</div>\n</div>\n";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {//引入css,less
	__webpack_require__(10);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(76);

	//引入 js
	__webpack_require__(22);
	__webpack_require__(23);
	var Dialog =  __webpack_require__(24);

	$(document).ready(function(){
	  // 增加事件

	  $('.contact-us').click(function() {

	    __webpack_require__.e/* nsure */(4/* duplicate */, function(require){
	      var contact_form = __webpack_require__(45);
	      new Dialog(contact_form);
	    });
	  });


	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});