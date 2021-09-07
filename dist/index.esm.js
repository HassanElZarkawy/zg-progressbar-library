import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".single-milestone-hidden .progress-container {\n  opacity: 0.5; }\n\n.progress-container {\n  opacity: 1;\n  transition: 500ms;\n  display: block;\n  width: 100%;\n  height: 75px;\n  position: relative; }\n\n.milestone-progress-bar {\n  text-align: left;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n  -webkit-box-direction: normal;\n  box-sizing: border-box;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  vertical-align: baseline;\n  position: relative;\n  height: 30px;\n  width: calc(100% - 60px);\n  margin-left: 30px;\n  margin-right: 30px;\n  background: linear-gradient(270deg, #a2aaa7 0, #76988b 34%, #828383 67%, #6f7070 100%);\n  opacity: 0.6;\n  box-shadow: 0 0 44px 0 rgba(255, 255, 255, 0.25);\n  clip-path: polygon(100% 0, 0 50%, 100% 100%);\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1; }\n\n.milestone-user-draggable {\n  user-select: none;\n  position: absolute;\n  top: 50%;\n  margin-top: -30px;\n  z-index: 9; }\n  .milestone-user-draggable .milestone-user-img {\n    opacity: 0.9;\n    transition: 500ms;\n    --webkit-transition: 500ms;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    -ms-user-drag: none;\n    user-drag: none;\n    width: 60px;\n    height: 60px;\n    display: block;\n    z-index: 10;\n    border-radius: 50%; }\n    .milestone-user-draggable .milestone-user-img:hover {\n      transform: scale(1.15);\n      opacity: 1; }\n\n.completion-checkmark {\n  position: absolute;\n  top: 5px;\n  right: -37px;\n  width: 45px;\n  height: 45px;\n  z-index: 99; }\n\n.milestones-extra-controls {\n  clip-path: polygon(50% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 60%);\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  position: absolute;\n  top: -30px;\n  left: -30px;\n  z-index: -1; }\n\n.milestone-percent-indicator {\n  display: block;\n  position: absolute;\n  bottom: 3px;\n  color: white;\n  width: 120px;\n  text-align: center;\n  font-size: 1rem;\n  font-family: Lato;\n  font-weight: 400; }\n\n.milestone-swap {\n  display: block;\n  bottom: 1px;\n  position: absolute;\n  left: 14px;\n  font-size: 1.5rem;\n  opacity: 0.7;\n  cursor: pointer; }\n  .milestone-swap:hover {\n    opacity: 1; }\n\n.milestone-chat {\n  display: block;\n  bottom: 4px;\n  position: absolute;\n  right: 14px;\n  font-size: 18px;\n  opacity: 0.7;\n  cursor: pointer; }\n  .milestone-chat:hover {\n    opacity: 1; }\n\n.milestone-user-img-container {\n  transition: left 500ms; }\n\n.progress-container .milestones-extra-controls {\n  transition: opacity 500ms;\n  opacity: 0; }\n\n.progress-container:hover .milestones-extra-controls {\n  opacity: 1; }\n";
n(css,{});

var ACT_MS_PROGRESSBAR_WIDTH = 'ACT_MS_PROGRESSBAR_WIDTH';

var updateProgressbarWidthAction = function updateProgressbarWidthAction(progressWidth) {
  return {
    type: ACT_MS_PROGRESSBAR_WIDTH,
    progressWidth: progressWidth
  };
};

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ZgProgressSlider = /*#__PURE__*/function (_Component) {
  _inherits(ZgProgressSlider, _Component);

  var _super = _createSuper(ZgProgressSlider);

  function ZgProgressSlider(props) {
    var _this;

    _classCallCheck(this, ZgProgressSlider);

    _this = _super.call(this, props);
    _this.progressBarRef = /*#__PURE__*/React.createRef();

    var offsetPos = _this.calcPos(props.initPercent, _this.props.progressWidth);

    var percentage = _this.calcPercent(offsetPos, _this.props.progressWidth);

    _this.state = {
      percentage: percentage,
      offsetPos: offsetPos,
      offsetPercent: 0,
      userChange: 0,
      sliderImage: props.sliderImage,
      updateCallback: props.onUpdateCallback,
      secondaryOptionCallback: props.onFunc2Click,
      primaryOptionCallback: props.onFunc1Click,
      primaryIcon: props.func1Icon,
      secondaryIcon: props.func2Icon,
      isDisabled: props.isDisabled
    };
    return _this;
  }

  _createClass(ZgProgressSlider, [{
    key: "calcPos",
    value: function calcPos(percent, progressWidth) {
      return percent / 100 * progressWidth;
    }
  }, {
    key: "calcPercent",
    value: function calcPercent(pos, progressWidth) {
      var progressPercent = pos / progressWidth * 100;
      var roundPercent;
      roundPercent = progressPercent > 51 ? Math.ceil(progressPercent) : Math.floor(progressPercent);
      roundPercent = roundPercent > 100 ? 100 : roundPercent < 0 ? 0 : roundPercent;
      return roundPercent;
    }
  }, {
    key: "changeProgress",
    value: function changeProgress(ev, data) {
      var offsetPos = this.state.offsetPos;
      var progressWidth = this.props.progressWidth;
      var percentage = this.calcPercent(data.x + offsetPos, progressWidth);
      this.setState({
        percentage: percentage,
        userChange: data.x
      });
    }
  }, {
    key: "reEvalWithoutChange",
    value: function reEvalWithoutChange(newWidth) {
      var _this$state = this.state,
          percentage = _this$state.percentage,
          userChange = _this$state.userChange;
      var newOffset = this.calcPos(percentage, newWidth);
      this.setState({
        offsetPos: newOffset - userChange
      });
    }
  }, {
    key: "reEvalOffset",
    value: function reEvalOffset(prevPercent, newPercent) {
      var _this$state2 = this.state,
          offsetPos = _this$state2.offsetPos,
          percentage = _this$state2.percentage;
      var progressWidth = this.props.progressWidth;

      if (newPercent === percentage) {
        return; // component already aware
      }

      var change = newPercent - prevPercent;
      var newOffset = this.calcPos(change, progressWidth);
      this.setState({
        percentage: newPercent,
        offsetPos: offsetPos + newOffset
      });
    }
  }, {
    key: "initSize",
    value: function initSize() {
      var updateProgressbarWidth = this.props.updateProgressbarWidth;
      updateProgressbarWidth(this.progressBarRef.current.getBoundingClientRect().width);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _this2 = this;

      if (this.progressBarRef.current === null) {
        return;
      }

      if (this.handleResizeTimeout) {
        clearTimeout(this.handleResizeTimeout);
      }

      this.handleResizeTimeout = setTimeout(function () {
        var updateProgressbarWidth = _this2.props.updateProgressbarWidth;
        updateProgressbarWidth(_this2.progressBarRef.current.getBoundingClientRect().width);
      }, 100);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      window.onresize = function () {
        return _this3.handleResize();
      };

      var progressWidthInit = this.props.progressWidthInit;

      if (!progressWidthInit) {
        this.initSize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this$props = this.props,
          initPercent = _this$props.initPercent,
          progressWidth = _this$props.progressWidth;

      if (prevProps.initPercent !== initPercent) {
        this.reEvalOffset(prevProps.initPercent, initPercent);
      }

      if (prevProps.progressWidth !== progressWidth) {
        this.reEvalWithoutChange(progressWidth);
      }
    }
  }, {
    key: "saveProgress",
    value: function saveProgress(ev, draggableData) {
      var updateCallback = this.state.updateCallback;

      if (updateCallback) {
        var offsetPos = this.state.offsetPos;
        var progressWidth = this.props.progressWidth;
        var percentage = this.calcPercent(draggableData.x + offsetPos, progressWidth);
        updateCallback(percentage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          percentage = _this$state3.percentage,
          offsetPos = _this$state3.offsetPos,
          isDisabled = _this$state3.isDisabled,
          sliderImage = _this$state3.sliderImage,
          primaryIcon = _this$state3.primaryIcon,
          secondaryIcon = _this$state3.secondaryIcon,
          primaryOptionCallback = _this$state3.primaryOptionCallback,
          secondaryOptionCallback = _this$state3.secondaryOptionCallback;
      var blockerText = percentage === 100 ? 'Completed milestones are locked' : 'Only milestone owner can transfer ownership';
      var swapIcon = !isDisabled ? /*#__PURE__*/React.createElement("div", {
        className: "milestone-swap",
        onClick: primaryOptionCallback
      }, /*#__PURE__*/React.createElement("img", {
        src: primaryIcon,
        width: "25"
      })) : /*#__PURE__*/React.createElement(OverlayTrigger, {
        placement: "left",
        delay: {
          show: 250,
          hide: 400
        },
        overlay: /*#__PURE__*/React.createElement(Tooltip, {
          id: "validation-blocker-tooltip"
        }, /*#__PURE__*/React.createElement("div", null, blockerText))
      }, /*#__PURE__*/React.createElement("div", {
        className: "milestone-swap"
      }, /*#__PURE__*/React.createElement("img", {
        src: primaryIcon,
        width: "25"
      })));
      var scale = 0.9 + percentage / 300;
      return /*#__PURE__*/React.createElement("div", {
        className: "progress-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "milestone-progress-bar",
        ref: this.progressBarRef
      }), /*#__PURE__*/React.createElement(Draggable, {
        bounds: "parent",
        axis: "x",
        enableUserSelectHack: "true",
        disabled: isDisabled,
        defaultClassName: "milestone-user-draggable",
        onDrag: function onDrag(ev, data) {
          return _this4.changeProgress(ev, data);
        },
        onStop: function onStop(ev, data) {
          return _this4.saveProgress(ev, data);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "milestone-user-img-container",
        style: {
          left: offsetPos
        }
      }, percentage === 100 ? /*#__PURE__*/React.createElement("img", {
        className: "completion-checkmark",
        src: "/img/checkmark-v2.png"
      }) : null, /*#__PURE__*/React.createElement("div", {
        className: "milestones-extra-controls"
      }, /*#__PURE__*/React.createElement("div", {
        className: "milestone-percent-indicator"
      }, percentage, "%"), swapIcon, /*#__PURE__*/React.createElement("div", {
        className: "milestone-chat",
        onClick: secondaryOptionCallback
      }, /*#__PURE__*/React.createElement("img", {
        src: secondaryIcon,
        width: "25"
      }))), /*#__PURE__*/React.createElement("img", {
        className: "milestone-user-img",
        src: sliderImage,
        alt: "",
        style: {
          transform: "scale(".concat(scale, ")")
        }
      }))));
    }
  }]);

  return ZgProgressSlider;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    progressWidth: state.milestones.progressWidth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateProgressbarWidth: function updateProgressbarWidth(newWidth) {
      return dispatch(updateProgressbarWidthAction(newWidth));
    }
  };
};

var ZgProgressSlider$1 = connect(mapStateToProps, mapDispatchToProps)(ZgProgressSlider); // export default ZgProgressSlider;

export { ZgProgressSlider$1 as default };
