window.Modals=function(){function o(o,n,s){var t={close:".js-modal-close",open:".js-modal-open-"+n,openClass:"modal--is-active"};if(this.$modal=$("#"+o),!this.$modal.length)return!1;this.nodes={$parent:$("html").add("body")},this.config=$.extend(t,s),this.modalIsOpen=!1,this.$focusOnOpen=this.config.focusOnOpen?$(this.config.focusOnOpen):this.$modal,this.init()}return o.prototype.init=function(){$(this.config.open).on("click",$.proxy(this.open,this)),this.$modal.find(this.config.close).on("click",$.proxy(this.close,this))},o.prototype.open=function(o){var n=!1;this.modalIsOpen||(o?o.preventDefault():n=!0,o&&o.stopPropagation&&(o.stopPropagation(),this.$activeSource=$(o.currentTarget)),this.modalIsOpen&&!n&&this.close(),this.$modal.addClass(this.config.openClass),this.nodes.$parent.addClass(this.config.openClass),this.modalIsOpen=!0,slate.a11y.trapFocus({$container:this.$modal,$elementToFocus:this.$focusOnOpen,namespace:"modal_focus"}),this.bindEvents())},o.prototype.close=function(){this.modalIsOpen&&($(document.activeElement).trigger("blur"),this.$modal.removeClass(this.config.openClass),this.nodes.$parent.removeClass(this.config.openClass),this.modalIsOpen=!1,slate.a11y.removeTrapFocus({$container:this.$modal,namespace:"modal_focus"}),this.unbindEvents())},o.prototype.bindEvents=function(){this.nodes.$parent.on("keyup.modal",$.proxy(function(o){27===o.keyCode&&this.close()},this))},o.prototype.unbindEvents=function(){this.nodes.$parent.off(".modal")},o}(),$(function(){var o="#LoginModal",n="[data-login-field]",s=document.querySelector(o),t=document.querySelector(n);if(s){var e=new window.Modals("LoginModal","login-modal",{focusOnOpen:"#Password"});t.hasAttribute("data-error")&&e.open()}});