! function(a) {
	"use strict";
	function b(a) {
		return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
	}

	function c(a, b) {
		var c = d(a, b) ? f : e;
		c(a, b)
	}
	var d, e, f;
	"classList" in document.documentElement ? (d = function(a, b) {
		return a.classList.contains(b)
	}, e = function(a, b) {
		a.classList.add(b)
	}, f = function(a, b) {
		a.classList.remove(b)
	}) : (d = function(a, c) {
		return b(c).test(a.className)
	}, e = function(a, b) {
		d(a, b) || (a.className = a.className + " " + b)
	}, f = function(a, c) {
		a.className = a.className.replace(b(c), " ")
	});
	var g = {
		hasClass: d,
		addClass: e,
		removeClass: f,
		toggleClass: c,
		has: d,
		add: e,
		remove: f,
		toggle: c
	};
	"function" == typeof define && define.amd ? define(g) : a.classie = g
}(window),
function(a) {
	a.fn.fullpage = function(b) {
		function c(c) {
			if (b.autoScrolling) {
				c.preventDefault();
				var d, e = c.originalEvent,
					f = a(".section.active");
				if (!L && !I) {
					var g = C(e);
					if (S = g.y, T = g.x, f.find(".slides").length && Math.abs(R - T) > Math.abs(Q - S)) Math.abs(R - T) > a(window).width() / 100 * b.touchSensitivity && (R > T ? f.find(".controlArrow.next:visible").trigger("click") : f.find(".controlArrow.prev:visible").trigger("click"));
					else if (d = f.find(".slides").length ? f.find(".slide.active").find(".scrollable") : f.find(".scrollable"), Math.abs(Q - S) > a(window).height() / 100 * b.touchSensitivity)
						if (Q > S)
							if (d.length > 0) {
								if (!m("bottom", d)) return !0;
								a.fn.fullpage.moveSectionDown()
							} else a.fn.fullpage.moveSectionDown();
							else
					if (S > Q)
						if (d.length > 0) {
							if (!m("top", d)) return !0;
							a.fn.fullpage.moveSectionUp()
						} else a.fn.fullpage.moveSectionUp()
				}
			}
		}

		function d(a) {
			if (b.autoScrolling) {
				var c = a.originalEvent,
					d = C(c);
				Q = d.y, R = d.x
			}
		}

		function e(c) {
			if (b.autoScrolling) {
				c = window.event || c;
				var d, e = Math.max(-1, Math.min(1, c.wheelDelta || -c.deltaY || -c.detail)),
					f = a(".section.active");
				if (!L)
					if (d = f.find(".slides").length ? f.find(".slide.active").find(".scrollable") : f.find(".scrollable"), 0 > e)
						if (d.length > 0) {
							if (!m("bottom", d)) return !0;
							a.fn.fullpage.moveSectionDown()
						} else a.fn.fullpage.moveSectionDown();
						else
				if (d.length > 0) {
					if (!m("top", d)) return !0;
					a.fn.fullpage.moveSectionUp()
				} else a.fn.fullpage.moveSectionUp();
				return !1
			}
		}

		function f(c, d, e) {
			var f, g = {}, h = c.position();
			if ("undefined" != typeof h) {
				var i = h.top,
					j = n(c),
					m = c.data("anchor"),
					o = c.index(".section"),
					p = c.find(".slide.active"),
					q = a(".section.active"),
					r = M;
				if (p.length) var t = p.data("anchor"),
				u = p.index();
				if (b.autoScrolling && b.continuousVertical && "undefined" != typeof e && (!e && "up" == j || e && "down" == j)) {
					e ? a(".section.active").before(q.nextAll(".section")) : a(".section.active").after(q.prevAll(".section").get().reverse()), D(a(".section.active").position().top);
					var v = q;
					h = c.position(), i = h.top, j = n(c)
				}
				var x = q.index(".section") + 1;
				c.addClass("active").siblings().removeClass("active"), L = !0, "undefined" != typeof m && w(u, t, m), b.autoScrolling ? (g.top = -i, f = "#superContainer") : (g.scrollTop = i, f = "html, body");
				var y = function() {
					v && v.length && (e ? a(".section:first").before(v) : a(".section:last").after(v), D(a(".section.active").position().top))
				};
				if (b.css3 && b.autoScrolling) {
					a.isFunction(b.onLeave) && !r && b.onLeave.call(this, x, j);
					var z = "translate3d(0px, -" + i + "px, 0px)";
					s(z, !0), setTimeout(function() {
						y(), a.isFunction(b.afterLoad) && !r && b.afterLoad.call(this, m, o + 1), setTimeout(function() {
							L = !1, a.isFunction(d) && d.call(this)
						}, F)
					}, b.scrollingSpeed)
				} else a.isFunction(b.onLeave) && !r && b.onLeave.call(this, x, j), a(f).animate(g, b.scrollingSpeed, b.easing, function() {
					y(), a.isFunction(b.afterLoad) && !r && b.afterLoad.call(this, m, o + 1), setTimeout(function() {
						L = !1, a.isFunction(d) && d.call(this)
					}, F)
				});
				G = m, b.autoScrolling && (l(m), k(m, o))
			}
		}

		function g() {
			var a = window.location.hash.replace("#", "").split("/"),
				b = a[0],
				c = a[1];
			b && t(b, c)
		}

		function h(c, d) {
			var e = d.position(),
				f = c.find(".slidesContainer").parent(),
				g = d.index(),
				h = c.closest(".section"),
				i = h.index(".section"),
				j = h.data("anchor"),
				k = h.find(".fullPage-slidesNav"),
				l = d.data("anchor"),
				m = M;
			if (b.onSlideLeave) {
				var n = h.find(".slide.active").index(),
					p = o(n, g);
				m || a.isFunction(b.onSlideLeave) && b.onSlideLeave.call(this, j, i + 1, n, p)
			}
			if (d.addClass("active").siblings().removeClass("active"), "undefined" == typeof l && (l = g), h.hasClass("active") && (b.loopHorizontal || (h.find(".controlArrow.prev").toggle(0 != g), h.find(".controlArrow.next").toggle(!d.is(":last-child"))), w(g, l, j)), b.css3) {
				var q = "translate3d(-" + e.left + "px, 0px, 0px)";
				c.find(".slidesContainer").toggleClass("easing", b.scrollingSpeed > 0).css(E(q)), setTimeout(function() {
					m || a.isFunction(b.afterSlideLoad) && b.afterSlideLoad.call(this, j, i + 1, l, g), I = !1
				}, b.scrollingSpeed, b.easing)
			} else f.animate({
				scrollLeft: e.left
			}, b.scrollingSpeed, b.easing, function() {
				m || a.isFunction(b.afterSlideLoad) && b.afterSlideLoad.call(this, j, i + 1, l, g), I = !1
			});
			k.find(".active").removeClass("active"), k.find("li").eq(g).find("a").addClass("active")
		}

		function i() {
			M = !0;
			var c = a(window).width();
			K = a(window).height(), b.resize && j(K, c), a(".section").each(function() {
				K - parseInt(a(this).css("padding-bottom")) - parseInt(a(this).css("padding-top"));
				if (b.verticalCentered && a(this).find(".tableCell").css("height", r(a(this)) + "px"), a(this).css("height", K + "px"), b.scrollOverflow) {
					var c = a(this).find(".slide");
					c.length ? c.each(function() {
						p(a(this))
					}) : p(a(this))
				}
				var c = a(this).find(".slides");
				c.length && h(c, c.find(".slide.active"))
			});
			var d = (a(".section.active").position(), a(".section.active"));
			d.index(".section") && f(d), M = !1
		}

		function j(b, c) {
			var d = 825,
				e = b;
			if (825 > b || 900 > c) {
				900 > c && (e = c, d = 900);
				var f = 100 * e / d,
					g = f.toFixed(2);
				a("body").css("font-size", g + "%")
			} else a("body").css("font-size", "100%")
		}

		function k(c, d) {
			b.navigation && (a("#fullPage-nav").find(".active").removeClass("active"), c ? a("#fullPage-nav").find('a[href="#' + c + '"]').addClass("active") : a("#fullPage-nav").find("li").eq(d).find("a").addClass("active"))
		}

		function l(c) {
			b.menu && (a(b.menu).find(".active").removeClass("active"), a(b.menu).find('[data-menuanchor="' + c + '"]').addClass("active"))
		}

		function m(a, b) {
			return "top" === a ? !b.scrollTop() : "bottom" === a ? b.scrollTop() + b.innerHeight() >= b[0].scrollHeight : void 0
		}

		function n(b) {
			var c = a(".section.active").index(".section"),
				d = b.index(".section");
			return c > d ? "up" : "down"
		}

		function o(a, b) {
			return a > b ? "left" : "right"
		}

		function p(a) {
			a.css("overflow", "hidden");
			var c = a.closest(".section"),
				d = a.find(".scrollable");
			if (d.length) var e = a.find(".scrollable").get(0).scrollHeight;
			else {
				var e = a.get(0).scrollHeight;
				b.verticalCentered && (e = a.find(".tableCell").get(0).scrollHeight)
			}
			var f = K - parseInt(c.css("padding-bottom")) - parseInt(c.css("padding-top"));
			e > f ? d.length ? d.css("height", f + "px").parent().css("height", f + "px") : (b.verticalCentered ? a.find(".tableCell").wrapInner('<div class="scrollable" />') : a.wrapInner('<div class="scrollable" />'), a.find(".scrollable").slimScroll({
				height: f + "px",
				size: "10px",
				alwaysVisible: !0
			})) : (a.find(".scrollable").children().first().unwrap().unwrap(), a.find(".slimScrollBar").remove(), a.find(".slimScrollRail").remove()), a.css("overflow", "")
		}

		function q(a) {
			a.addClass("table").wrapInner('<div class="tableCell" style="height:' + r(a) + 'px;" />')
		}

		function r(a) {
			var c = K;
			if (b.paddingTop || b.paddingBottom) {
				var d = a;
				d.hasClass("section") || (d = a.closest(".section"));
				var e = parseInt(d.css("padding-top")) + parseInt(d.css("padding-bottom"));
				c = K - e
			}
			return c
		}

		function s(b, c) {
			a("#superContainer").toggleClass("easing", c), a("#superContainer").css(E(b))
		}

		function t(b, c) {
			if ("undefined" == typeof c && (c = 0), isNaN(b)) var d = a('[data-anchor="' + b + '"]');
			else var d = a(".section").eq(b - 1);
			b === G || d.hasClass("active") ? u(d, c) : f(d, function() {
				u(d, c)
			})
		}

		function u(a, b) {
			if ("undefined" != typeof b) {
				var c = a.find(".slides"),
					d = c.find('[data-anchor="' + b + '"]');
				d.length || (d = c.find(".slide").eq(b)), d.length && h(c, d)
			}
		}

		function v(a, c) {
			a.append('<div class="fullPage-slidesNav"><ul></ul></div>');
			var d = a.find(".fullPage-slidesNav");
			d.addClass(b.slidesNavPosition);
			for (var e = 0; c > e; e++) d.find("ul").append('<li><a href="#"><span></span></a></li>');
			d.css("margin-left", "-" + d.width() / 2 + "px"), d.find("li").first().find("a").addClass("active")
		}

		function w(a, c, d) {
			var e = "";
			b.anchors.length && (a ? ("undefined" != typeof d && (e = d), "undefined" == typeof c && (c = a), H = c, location.hash = e + "/" + c) : "undefined" != typeof a ? (H = c, location.hash = d) : location.hash = d)
		}

		function x() {
			var a, b = document.createElement("p"),
				c = {
					webkitTransform: "-webkit-transform",
					OTransform: "-o-transform",
					msTransform: "-ms-transform",
					MozTransform: "-moz-transform",
					transform: "transform"
				};
			document.body.insertBefore(b, null);
			for (var d in c) void 0 !== b.style[d] && (b.style[d] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(c[d]));
			return document.body.removeChild(b), void 0 !== a && a.length > 0 && "none" !== a
		}

		function y() {
			document.addEventListener ? (document.removeEventListener("mousewheel", e, !1), document.removeEventListener("wheel", e, !1)) : document.detachEvent("onmousewheel", e)
		}

		function z() {
			document.addEventListener ? (document.addEventListener("mousewheel", e, !1), document.addEventListener("wheel", e, !1)) : document.attachEvent("onmousewheel", e)
		}

		function A() {
			J && (a(document).off("touchstart MSPointerDown").on("touchstart MSPointerDown", d), a(document).off("touchmove MSPointerMove").on("touchmove MSPointerMove", c))
		}

		function B() {
			J && (a(document).off("touchstart MSPointerDown"), a(document).off("touchmove MSPointerMove"))
		}

		function C(a) {
			var b = new Array;
			return window.navigator.msPointerEnabled ? (b.y = a.pageY, b.x = a.pageX) : (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX), b
		}

		function D(c) {
			if (b.css3) {
				var d = "translate3d(0px, -" + c + "px, 0px)";
				s(d, !1)
			} else a("#superContainer").css("top", -c)
		}

		function E(a) {
			return {
				"-webkit-transform": a,
				"-moz-transform": a,
				"-ms-transform": a,
				transform: a
			}
		}
		b = a.extend({
			verticalCentered: !0,
			resize: !0,
			slidesColor: [],
			anchors: [],
			scrollingSpeed: 700,
			easing: "easeInQuart",
			menu: !1,
			navigation: !1,
			navigationPosition: "right",
			navigationColor: "#000",
			navigationTooltips: [],
			slidesNavigation: !1,
			slidesNavPosition: "bottom",
			controlArrowColor: "#fff",
			loopBottom: !1,
			loopTop: !1,
			loopHorizontal: !0,
			autoScrolling: !0,
			scrollOverflow: !1,
			css3: !1,
			paddingTop: 0,
			paddingBottom: 0,
			fixedElements: null,
			normalScrollElements: null,
			keyboardScrolling: !0,
			touchSensitivity: 5,
			continuousVertical: !1,
			animateAnchor: !0,
			afterLoad: null,
			onLeave: null,
			afterRender: null,
			afterSlideLoad: null,
			onSlideLeave: null
		}, b), b.continuousVertical && (b.loopTop || b.loopBottom) && (b.continuousVertical = !1, console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));
		var F = 600;
		a.fn.fullpage.setAutoScrolling = function(c) {
			b.autoScrolling = c;
			var d = a(".section.active");
			b.autoScrolling ? (a("html, body").css({
				overflow: "hidden",
				height: "100%"
			}), d.length && D(d.position().top)) : (a("html, body").css({
				overflow: "auto",
				height: "auto"
			}), D(0), a("html, body").scrollTop(d.position().top))
		}, a.fn.fullpage.setScrollingSpeed = function(a) {
			b.scrollingSpeed = a
		}, a.fn.fullpage.setMouseWheelScrolling = function(a) {
			a ? z() : y()
		}, a.fn.fullpage.setAllowScrolling = function(b) {
			b ? (a.fn.fullpage.setMouseWheelScrolling(!0), A()) : (a.fn.fullpage.setMouseWheelScrolling(!1), B())
		}, a.fn.fullpage.setKeyboardScrolling = function(a) {
			b.keyboardScrolling = a
		};
		var G, H, I = !1,
			J = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/),
			K = a(window).height(),
			L = !1,
			M = !1;
		if (a.fn.fullpage.setAllowScrolling(!0), b.css3 && (b.css3 = x()), a("body").wrapInner('<div id="superContainer" />'), b.navigation) {
			a("body").append('<div id="fullPage-nav"><ul></ul></div>');
			var N = a("#fullPage-nav");
			N.css("color", b.navigationColor), N.addClass(b.navigationPosition)
		}
		a(".section").each(function(c) {
			var d = a(this),
				e = a(this).find(".slide"),
				f = e.length;
			if (c || 0 !== a(".section.active").length || a(this).addClass("active"), a(this).css("height", K + "px"), (b.paddingTop || b.paddingBottom) && a(this).css("padding", b.paddingTop + " 0 " + b.paddingBottom + " 0"), "undefined" != typeof b.slidesColor[c] && a(this).css("background-color", b.slidesColor[c]), "undefined" != typeof b.anchors[c] && a(this).attr("data-anchor", b.anchors[c]), b.navigation) {
				var g = "";
				b.anchors.length && (g = b.anchors[c]);
				var h = b.navigationTooltips[c];
				"undefined" == typeof h && (h = ""), N.find("ul").append('<li data-tooltip="' + h + '"><a href="#' + g + '"><span></span></a></li>')
			}
			if (f > 0) {
				var i = 100 * f,
					j = 100 / f;
				e.wrapAll('<div class="slidesContainer" />'), e.parent().wrap('<div class="slides" />'), a(this).find(".slidesContainer").css("width", i + "%"), a(this).find(".slides").after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>'), "#fff" != b.controlArrowColor && (a(this).find(".controlArrow.next").css("border-color", "transparent transparent transparent " + b.controlArrowColor), a(this).find(".controlArrow.prev").css("border-color", "transparent " + b.controlArrowColor + " transparent transparent")), b.loopHorizontal || a(this).find(".controlArrow.prev").hide(), b.slidesNavigation && v(a(this), f), e.each(function(c) {
					c || 0 != d.find(".slide.active").length || a(this).addClass("active"), a(this).css("width", j + "%"), b.verticalCentered && q(a(this))
				})
			} else b.verticalCentered && q(a(this))
		}).promise().done(function() {
			a.fn.fullpage.setAutoScrolling(b.autoScrolling);
			var c = a(".section.active").find(".slide.active");
			if (c.length && (0 != a(".section.active").index(".section") || 0 == a(".section.active").index(".section") && 0 != c.index())) {
				var d = b.scrollingSpeed;
				a.fn.fullpage.setScrollingSpeed(0), h(a(".section.active").find(".slides"), c), a.fn.fullpage.setScrollingSpeed(d)
			}
			b.fixedElements && b.css3 && a(b.fixedElements).appendTo("body"), b.navigation && (N.css("margin-top", "-" + N.height() / 2 + "px"), N.find("li").eq(a(".section.active").index(".section")).find("a").addClass("active")), b.menu && b.css3 && a(b.menu).appendTo("body"), b.scrollOverflow ? a(window).on("load", function() {
				a(".section").each(function() {
					var b = a(this).find(".slide");
					b.length ? b.each(function() {
						p(a(this))
					}) : p(a(this))
				}), a.isFunction(b.afterRender) && b.afterRender.call(this)
			}) : a.isFunction(b.afterRender) && b.afterRender.call(this);
			var e = window.location.hash.replace("#", "").split("/"),
				f = e[0];
			if (f.length) {
				var i = a('[data-anchor="' + f + '"]');
				!b.animateAnchor && i.length && (D(i.position().top), a.isFunction(b.afterLoad) && b.afterLoad.call(this, f, i.index(".section") + 1), i.addClass("active").siblings().removeClass("active"))
			}
			a(window).on("load", function() {
				g()
			})
		});
		var O, P = !1;
		a(window).scroll(function() {
			if (!b.autoScrolling) {
				var c = a(window).scrollTop(),
					d = a(".section").map(function() {
						return a(this).offset().top < c + 100 ? a(this) : void 0
					}),
					e = d[d.length - 1];
				if (!e.hasClass("active")) {
					P = !0;
					var f = n(e);
					a(".section.active").removeClass("active"), e.addClass("active");
					var g = e.data("anchor");
					a.isFunction(b.onLeave) && b.onLeave.call(this, e.index(".section"), f), a.isFunction(b.afterLoad) && b.afterLoad.call(this, g, e.index(".section") + 1), l(g), k(g, 0), b.anchors.length && !L && (G = g, location.hash = g), clearTimeout(O), O = setTimeout(function() {
						P = !1
					}, 100)
				}
			}
		});
		var Q = 0,
			R = 0,
			S = 0,
			T = 0;
		if (a.fn.fullpage.moveSectionUp = function() {
			var c = a(".section.active").prev(".section");
			c.length || !b.loopTop && !b.continuousVertical || (c = a(".section").last()), c.length && f(c, null, !0)
		}, a.fn.fullpage.moveSectionDown = function() {
			var c = a(".section.active").next(".section");
			c.length || !b.loopBottom && !b.continuousVertical || (c = a(".section").first()), (c.length > 0 || !c.length && (b.loopBottom || b.continuousVertical)) && f(c, null, !1)
		}, a.fn.fullpage.moveTo = function(b, c) {
			var d = "";
			d = isNaN(b) ? a('[data-anchor="' + b + '"]') : a(".section").eq(b - 1), "undefined" !== c ? t(b, c) : d.length > 0 && f(d)
		}, a(window).on("hashchange", function() {
			if (!P) {
				var a = window.location.hash.replace("#", "").split("/"),
					b = a[0],
					c = a[1],
					d = "undefined" == typeof G,
					e = "undefined" == typeof G && "undefined" == typeof c;
				(b && b !== G && !d || e || !I && H != c) && t(b, c)
			}
		}), a(document).keydown(function(c) {
			if (b.keyboardScrolling && !L) switch (c.which) {
				case 38:
				case 33:
					a.fn.fullpage.moveSectionUp();
					break;
				case 40:
				case 34:
					a.fn.fullpage.moveSectionDown();
					break;
				case 37:
					a(".section.active").find(".controlArrow.prev:visible").trigger("click");
					break;
				case 39:
					a(".section.active").find(".controlArrow.next:visible").trigger("click");
					break;
				default:
					return
			}
		}), a(document).on("click", "#fullPage-nav a", function(b) {
			b.preventDefault();
			var c = a(this).parent().index();
			f(a(".section").eq(c))
		}), a(document).on({
			mouseenter: function() {
				var c = a(this).data("tooltip");
				a('<div class="fullPage-tooltip ' + b.navigationPosition + '">' + c + "</div>").hide().appendTo(a(this)).fadeIn(200)
			},
			mouseleave: function() {
				a(this).find(".fullPage-tooltip").fadeOut().remove()
			}
		}, "#fullPage-nav li"), b.normalScrollElements && (a(document).on("mouseover", b.normalScrollElements, function() {
			a.fn.fullpage.setMouseWheelScrolling(!1)
		}), a(document).on("mouseout", b.normalScrollElements, function() {
			a.fn.fullpage.setMouseWheelScrolling(!0)
		})), a(".section").on("click", ".controlArrow", function() {
			if (!I) {
				I = !0;
				var b = a(this).closest(".section").find(".slides"),
					c = b.find(".slide.active"),
					d = null;
				d = a(this).hasClass("prev") ? c.prev(".slide") : c.next(".slide"), d.length || (d = c.siblings(a(this).hasClass("prev") ? ":last" : ":first")), h(b, d)
			}
		}), a(".section").on("click", ".toSlide", function(b) {
			b.preventDefault();
			var c = a(this).closest(".section").find(".slides"),
				d = (c.find(".slide.active"), null);
			d = c.find(".slide").eq(a(this).data("index") - 1), d.length > 0 && h(c, d)
		}), !J) {
			var U;
			a(window).resize(function() {
				clearTimeout(U), U = setTimeout(i, 500)
			})
		}
		var V = "onorientationchange" in window,
			W = V ? "orientationchange" : "resize";
		a(window).bind(W, function() {
			J && i()
		}), a(document).on("click", ".fullPage-slidesNav a", function(b) {
			b.preventDefault();
			var c = a(this).closest(".section").find(".slides"),
				d = c.find(".slide").eq(a(this).closest("li").index());
			h(c, d)
		})
	}
}(jQuery), jQuery.effects || function(a, b) {
	var c = a.uiBackCompat !== !1,
		d = "ui-effects-";
	a.effects = {
		effect: {}
	},
	function(b, c) {
		function d(a, b, c) {
			var d = m[b.type] || {};
			return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
		}

		function e(a) {
			var d = k(),
				e = d._rgba = [];
			return a = a.toLowerCase(), p(j, function(b, f) {
				var g, h = f.re.exec(a),
					i = h && f.parse(h),
					j = f.space || "rgba";
				return i ? (g = d[j](i), d[l[j].cache] = g[l[j].cache], e = d._rgba = g._rgba, !1) : c
			}), e.length ? ("0,0,0,0" === e.join() && b.extend(e, g.transparent), d) : g[a]
		}

		function f(a, b, c) {
			return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
		}
		var g, h = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
			i = /^([\-+])=\s*(\d+\.?\d*)/,
			j = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(a) {
					return [a[1], a[2], a[3], a[4]]
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(a) {
					return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
				}
			}, {
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function(a) {
					return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
				}
			}, {
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function(a) {
					return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function(a) {
					return [a[1], a[2] / 100, a[3] / 100, a[4]]
				}
			}],
			k = b.Color = function(a, c, d, e) {
				return new b.Color.fn.parse(a, c, d, e)
			}, l = {
				rgba: {
					props: {
						red: {
							idx: 0,
							type: "byte"
						},
						green: {
							idx: 1,
							type: "byte"
						},
						blue: {
							idx: 2,
							type: "byte"
						}
					}
				},
				hsla: {
					props: {
						hue: {
							idx: 0,
							type: "degrees"
						},
						saturation: {
							idx: 1,
							type: "percent"
						},
						lightness: {
							idx: 2,
							type: "percent"
						}
					}
				}
			}, m = {
				"byte": {
					floor: !0,
					max: 255
				},
				percent: {
					max: 1
				},
				degrees: {
					mod: 360,
					floor: !0
				}
			}, n = k.support = {}, o = b("<p>")[0],
			p = b.each;
		o.style.cssText = "background-color:rgba(1,1,1,.5)", n.rgba = o.style.backgroundColor.indexOf("rgba") > -1, p(l, function(a, b) {
			b.cache = "_" + a, b.props.alpha = {
				idx: 3,
				type: "percent",
				def: 1
			}
		}), k.fn = b.extend(k.prototype, {
			parse: function(f, h, i, j) {
				if (f === c) return this._rgba = [null, null, null, null], this;
				(f.jquery || f.nodeType) && (f = b(f).css(h), h = c);
				var m = this,
					n = b.type(f),
					o = this._rgba = [];
				return h !== c && (f = [f, h, i, j], n = "array"), "string" === n ? this.parse(e(f) || g._default) : "array" === n ? (p(l.rgba.props, function(a, b) {
					o[b.idx] = d(f[b.idx], b)
				}), this) : "object" === n ? (f instanceof k ? p(l, function(a, b) {
					f[b.cache] && (m[b.cache] = f[b.cache].slice())
				}) : p(l, function(b, c) {
					var e = c.cache;
					p(c.props, function(a, b) {
						if (!m[e] && c.to) {
							if ("alpha" === a || null == f[a]) return;
							m[e] = c.to(m._rgba)
						}
						m[e][b.idx] = d(f[a], b, !0)
					}), m[e] && 0 > a.inArray(null, m[e].slice(0, 3)) && (m[e][3] = 1, c.from && (m._rgba = c.from(m[e])))
				}), this) : c
			},
			is: function(a) {
				var b = k(a),
					d = !0,
					e = this;
				return p(l, function(a, f) {
					var g, h = b[f.cache];
					return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], p(f.props, function(a, b) {
						return null != h[b.idx] ? d = h[b.idx] === g[b.idx] : c
					})), d
				}), d
			},
			_space: function() {
				var a = [],
					b = this;
				return p(l, function(c, d) {
					b[d.cache] && a.push(c)
				}), a.pop()
			},
			transition: function(a, b) {
				var c = k(a),
					e = c._space(),
					f = l[e],
					g = 0 === this.alpha() ? k("transparent") : this,
					h = g[f.cache] || f.to(g._rgba),
					i = h.slice();
				return c = c[f.cache], p(f.props, function(a, e) {
					var f = e.idx,
						g = h[f],
						j = c[f],
						k = m[e.type] || {};
					null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = d((j - g) * b + g, e)))
				}), this[e](i)
			},
			blend: function(a) {
				if (1 === this._rgba[3]) return this;
				var c = this._rgba.slice(),
					d = c.pop(),
					e = k(a)._rgba;
				return k(b.map(c, function(a, b) {
					return (1 - d) * e[b] + d * a
				}))
			},
			toRgbaString: function() {
				var a = "rgba(",
					c = b.map(this._rgba, function(a, b) {
						return null == a ? b > 2 ? 1 : 0 : a
					});
				return 1 === c[3] && (c.pop(), a = "rgb("), a + c.join() + ")"
			},
			toHslaString: function() {
				var a = "hsla(",
					c = b.map(this.hsla(), function(a, b) {
						return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
					});
				return 1 === c[3] && (c.pop(), a = "hsl("), a + c.join() + ")"
			},
			toHexString: function(a) {
				var c = this._rgba.slice(),
					d = c.pop();
				return a && c.push(~~(255 * d)), "#" + b.map(c, function(a) {
					return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
				}).join("")
			},
			toString: function() {
				return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
			}
		}), k.fn.parse.prototype = k.fn, l.hsla.to = function(a) {
			if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
			var b, c, d = a[0] / 255,
				e = a[1] / 255,
				f = a[2] / 255,
				g = a[3],
				h = Math.max(d, e, f),
				i = Math.min(d, e, f),
				j = h - i,
				k = h + i,
				l = .5 * k;
			return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === l || 1 === l ? l : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
		}, l.hsla.from = function(a) {
			if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
			var b = a[0] / 360,
				c = a[1],
				d = a[2],
				e = a[3],
				g = .5 >= d ? d * (1 + c) : d + c - d * c,
				h = 2 * d - g;
			return [Math.round(255 * f(h, g, b + 1 / 3)), Math.round(255 * f(h, g, b)), Math.round(255 * f(h, g, b - 1 / 3)), e]
		}, p(l, function(a, e) {
			var f = e.props,
				g = e.cache,
				h = e.to,
				j = e.from;
			k.fn[a] = function(a) {
				if (h && !this[g] && (this[g] = h(this._rgba)), a === c) return this[g].slice();
				var e, i = b.type(a),
					l = "array" === i || "object" === i ? a : arguments,
					m = this[g].slice();
				return p(f, function(a, b) {
					var c = l["object" === i ? a : b.idx];
					null == c && (c = m[b.idx]), m[b.idx] = d(c, b)
				}), j ? (e = k(j(m)), e[g] = m, e) : k(m)
			}, p(f, function(c, d) {
				k.fn[c] || (k.fn[c] = function(e) {
					var f, g = b.type(e),
						h = "alpha" === c ? this._hsla ? "hsla" : "rgba" : a,
						j = this[h](),
						k = j[d.idx];
					return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = b.type(e)), null == e && d.empty ? this : ("string" === g && (f = i.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[d.idx] = e, this[h](j)))
				})
			})
		}), p(h, function(a, c) {
			b.cssHooks[c] = {
				set: function(a, d) {
					var f, g, h = "";
					if ("string" !== b.type(d) || (f = e(d))) {
						if (d = k(f || d), !n.rgba && 1 !== d._rgba[3]) {
							for (g = "backgroundColor" === c ? a.parentNode : a;
								("" === h || "transparent" === h) && g && g.style;) try {
								h = b.css(g, "backgroundColor"), g = g.parentNode
							} catch (i) {}
							d = d.blend(h && "transparent" !== h ? h : "_default")
						}
						d = d.toRgbaString()
					}
					try {
						a.style[c] = d
					} catch (j) {}
				}
			}, b.fx.step[c] = function(a) {
				a.colorInit || (a.start = k(a.elem, c), a.end = k(a.end), a.colorInit = !0), b.cssHooks[c].set(a.elem, a.start.transition(a.end, a.pos))
			}
		}), b.cssHooks.borderColor = {
			expand: function(a) {
				var b = {};
				return p(["Top", "Right", "Bottom", "Left"], function(c, d) {
					b["border" + d + "Color"] = a
				}), b
			}
		}, g = b.Color.names = {
			aqua: "#00ffff",
			black: "#000000",
			blue: "#0000ff",
			fuchsia: "#ff00ff",
			gray: "#808080",
			green: "#008000",
			lime: "#00ff00",
			maroon: "#800000",
			navy: "#000080",
			olive: "#808000",
			purple: "#800080",
			red: "#ff0000",
			silver: "#c0c0c0",
			teal: "#008080",
			white: "#ffffff",
			yellow: "#ffff00",
			transparent: [null, null, null, 0],
			_default: "#ffffff"
		}
	}(jQuery),
	function() {
		function c() {
			var b, c, d = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
				e = {};
			if (d && d.length && d[0] && d[d[0]])
				for (c = d.length; c--;) b = d[c], "string" == typeof d[b] && (e[a.camelCase(b)] = d[b]);
			else
				for (b in d) "string" == typeof d[b] && (e[b] = d[b]);
			return e
		}

		function d(b, c) {
			var d, e, g = {};
			for (d in c) e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
			return g
		}
		var e = ["add", "remove", "toggle"],
			f = {
				border: 1,
				borderBottom: 1,
				borderColor: 1,
				borderLeft: 1,
				borderRight: 1,
				borderTop: 1,
				borderWidth: 1,
				margin: 1,
				padding: 1
			};
		a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
			a.fx.step[c] = function(a) {
				("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (jQuery.style(a.elem, c, a.end), a.setAttr = !0)
			}
		}), a.effects.animateClass = function(b, f, g, h) {
			var i = a.speed(f, g, h);
			return this.queue(function() {
				var f, g = a(this),
					h = g.attr("class") || "",
					j = i.children ? g.find("*").andSelf() : g;
				j = j.map(function() {
					var b = a(this);
					return {
						el: b,
						start: c.call(this)
					}
				}), f = function() {
					a.each(e, function(a, c) {
						b[c] && g[c + "Class"](b[c])
					})
				}, f(), j = j.map(function() {
					return this.end = c.call(this.el[0]), this.diff = d(this.start, this.end), this
				}), g.attr("class", h), j = j.map(function() {
					var b = this,
						c = a.Deferred(),
						d = jQuery.extend({}, i, {
							queue: !1,
							complete: function() {
								c.resolve(b)
							}
						});
					return this.el.animate(this.diff, d), c.promise()
				}), a.when.apply(a, j.get()).done(function() {
					f(), a.each(arguments, function() {
						var b = this.el;
						a.each(this.diff, function(a) {
							b.css(a, "")
						})
					}), i.complete.call(g[0])
				})
			})
		}, a.fn.extend({
			_addClass: a.fn.addClass,
			addClass: function(b, c, d, e) {
				return c ? a.effects.animateClass.call(this, {
					add: b
				}, c, d, e) : this._addClass(b)
			},
			_removeClass: a.fn.removeClass,
			removeClass: function(b, c, d, e) {
				return c ? a.effects.animateClass.call(this, {
					remove: b
				}, c, d, e) : this._removeClass(b)
			},
			_toggleClass: a.fn.toggleClass,
			toggleClass: function(c, d, e, f, g) {
				return "boolean" == typeof d || d === b ? e ? a.effects.animateClass.call(this, d ? {
					add: c
				} : {
					remove: c
				}, e, f, g) : this._toggleClass(c, d) : a.effects.animateClass.call(this, {
					toggle: c
				}, d, e, f)
			},
			switchClass: function(b, c, d, e, f) {
				return a.effects.animateClass.call(this, {
					add: c,
					remove: b
				}, d, e, f)
			}
		})
	}(),
	function() {
		function e(b, c, d, e) {
			return a.isPlainObject(b) && (c = b, b = b.effect), b = {
				effect: b
			}, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
		}

		function f(b) {
			return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? !1 : c && a.effects[b] ? !1 : !0
		}
		a.extend(a.effects, {
			version: "1.9.2",
			save: function(a, b) {
				for (var c = 0; b.length > c; c++) null !== b[c] && a.data(d + b[c], a[0].style[b[c]])
			},
			restore: function(a, c) {
				var e, f;
				for (f = 0; c.length > f; f++) null !== c[f] && (e = a.data(d + c[f]), e === b && (e = ""), a.css(c[f], e))
			},
			setMode: function(a, b) {
				return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
			},
			getBaseline: function(a, b) {
				var c, d;
				switch (a[0]) {
					case "top":
						c = 0;
						break;
					case "middle":
						c = .5;
						break;
					case "bottom":
						c = 1;
						break;
					default:
						c = a[0] / b.height
				}
				switch (a[1]) {
					case "left":
						d = 0;
						break;
					case "center":
						d = .5;
						break;
					case "right":
						d = 1;
						break;
					default:
						d = a[1] / b.width
				}
				return {
					x: d,
					y: c
				}
			},
			createWrapper: function(b) {
				if (b.parent().is(".ui-effects-wrapper")) return b.parent();
				var c = {
					width: b.outerWidth(!0),
					height: b.outerHeight(!0),
					"float": b.css("float")
				}, d = a("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					}),
					e = {
						width: b.width(),
						height: b.height()
					}, f = document.activeElement;
				try {
					f.id
				} catch (g) {
					f = document.body
				}
				return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
					position: "relative"
				}), b.css({
					position: "relative"
				})) : (a.extend(c, {
					position: b.css("position"),
					zIndex: b.css("z-index")
				}), a.each(["top", "left", "bottom", "right"], function(a, d) {
					c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
				}), b.css({
					position: "relative",
					top: 0,
					left: 0,
					right: "auto",
					bottom: "auto"
				})), b.css(e), d.css(c).show()
			},
			removeWrapper: function(b) {
				var c = document.activeElement;
				return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
			},
			setTransition: function(b, c, d, e) {
				return e = e || {}, a.each(c, function(a, c) {
					var f = b.cssUnit(c);
					f[0] > 0 && (e[c] = f[0] * d + f[1])
				}), e
			}
		}), a.fn.extend({
			effect: function() {
				function b(b) {
					function c() {
						a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
					}
					var e = a(this),
						f = d.complete,
						g = d.mode;
					(e.is(":hidden") ? "hide" === g : "show" === g) ? c() : h.call(e[0], d, c)
				}
				var d = e.apply(this, arguments),
					f = d.mode,
					g = d.queue,
					h = a.effects.effect[d.effect],
					i = !h && c && a.effects[d.effect];
				return a.fx.off || !h && !i ? f ? this[f](d.duration, d.complete) : this.each(function() {
					d.complete && d.complete.call(this)
				}) : h ? g === !1 ? this.each(b) : this.queue(g || "fx", b) : i.call(this, {
					options: d,
					duration: d.duration,
					callback: d.complete,
					mode: d.mode
				})
			},
			_show: a.fn.show,
			show: function(a) {
				if (f(a)) return this._show.apply(this, arguments);
				var b = e.apply(this, arguments);
				return b.mode = "show", this.effect.call(this, b)
			},
			_hide: a.fn.hide,
			hide: function(a) {
				if (f(a)) return this._hide.apply(this, arguments);
				var b = e.apply(this, arguments);
				return b.mode = "hide", this.effect.call(this, b)
			},
			__toggle: a.fn.toggle,
			toggle: function(b) {
				if (f(b) || "boolean" == typeof b || a.isFunction(b)) return this.__toggle.apply(this, arguments);
				var c = e.apply(this, arguments);
				return c.mode = "toggle", this.effect.call(this, c)
			},
			cssUnit: function(b) {
				var c = this.css(b),
					d = [];
				return a.each(["em", "px", "%", "pt"], function(a, b) {
					c.indexOf(b) > 0 && (d = [parseFloat(c), b])
				}), d
			}
		})
	}(),
	function() {
		var b = {};
		a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
			b[c] = function(b) {
				return Math.pow(b, a + 2)
			}
		}), a.extend(b, {
			Sine: function(a) {
				return 1 - Math.cos(a * Math.PI / 2)
			},
			Circ: function(a) {
				return 1 - Math.sqrt(1 - a * a)
			},
			Elastic: function(a) {
				return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
			},
			Back: function(a) {
				return a * a * (3 * a - 2)
			},
			Bounce: function(a) {
				for (var b, c = 4;
					((b = Math.pow(2, --c)) - 1) / 11 > a;);
				return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
			}
		}), a.each(b, function(b, c) {
			a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
				return 1 - c(1 - a)
			}, a.easing["easeInOut" + b] = function(a) {
				return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
			}
		})
	}()
}(jQuery),
function(a) {
	jQuery.fn.extend({
		slimScroll: function(b) {
			var c = a.extend({
				width: "auto",
				height: "250px",
				size: "7px",
				color: "#000",
				position: "right",
				distance: "1px",
				start: "top",
				opacity: .4,
				alwaysVisible: !1,
				disableFadeOut: !1,
				railVisible: !1,
				railColor: "#333",
				railOpacity: .2,
				railDraggable: !0,
				railClass: "slimScrollRail",
				barClass: "slimScrollBar",
				wrapperClass: "slimScrollDiv",
				allowPageScroll: !1,
				wheelStep: 20,
				touchScrollStep: 200,
				borderRadius: "7px",
				railBorderRadius: "7px"
			}, b);
			return this.each(function() {
				function d(b) {
					if (j) {
						b = b || window.event;
						var d = 0;
						b.wheelDelta && (d = -b.wheelDelta / 120), b.detail && (d = b.detail / 3), a(b.target || b.srcTarget || b.srcElement).closest("." + c.wrapperClass).is(u.parent()) && e(d, !0), b.preventDefault && !s && b.preventDefault(), s || (b.returnValue = !1)
					}
				}

				function e(a, b, d) {
					s = !1;
					var e = a,
						f = u.outerHeight() - w.outerHeight();
					b && (e = parseInt(w.css("top")) + a * parseInt(c.wheelStep) / 100 * w.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), w.css({
						top: e + "px"
					})), p = parseInt(w.css("top")) / (u.outerHeight() - w.outerHeight()), e = p * (u[0].scrollHeight - u.outerHeight()), d && (e = a, a = e / u[0].scrollHeight * u.outerHeight(), a = Math.min(Math.max(a, 0), f), w.css({
						top: a + "px"
					})), u.scrollTop(e), u.trigger("slimscrolling", ~~e), h(), i()
				}

				function f() {
					window.addEventListener ? (this.addEventListener("DOMMouseScroll", d, !1), this.addEventListener("mousewheel", d, !1)) : document.attachEvent("onmousewheel", d)
				}

				function g() {
					o = Math.max(u.outerHeight() / u[0].scrollHeight * u.outerHeight(), r), w.css({
						height: o + "px"
					});
					var a = o == u.outerHeight() ? "none" : "block";
					w.css({
						display: a
					})
				}

				function h() {
					g(), clearTimeout(m), p == ~~p ? (s = c.allowPageScroll, q != p && u.trigger("slimscroll", 0 == ~~p ? "top" : "bottom")) : s = !1, q = p, o >= u.outerHeight() ? s = !0 : (w.stop(!0, !0).fadeIn("fast"), c.railVisible && x.stop(!0, !0).fadeIn("fast"))
				}

				function i() {
					c.alwaysVisible || (m = setTimeout(function() {
						c.disableFadeOut && j || k || l || (w.fadeOut("slow"), x.fadeOut("slow"))
					}, 1e3))
				}
				var j, k, l, m, n, o, p, q, r = 30,
					s = !1,
					u = a(this);
				if (u.parent().hasClass(c.wrapperClass)) {
					var v = u.scrollTop(),
						w = u.parent().find("." + c.barClass),
						x = u.parent().find("." + c.railClass);
					if (g(), a.isPlainObject(b)) {
						if ("height" in b && "auto" == b.height) {
							u.parent().css("height", "auto"), u.css("height", "auto");
							var y = u.parent().parent().height();
							u.parent().css("height", y), u.css("height", y)
						}
						if ("scrollTo" in b) v = parseInt(c.scrollTo);
						else if ("scrollBy" in b) v += parseInt(c.scrollBy);
						else if ("destroy" in b) return w.remove(), x.remove(), void u.unwrap();
						e(v, !1, !0)
					}
				} else {
					c.height = "auto" == b.height ? u.parent().height() : b.height, v = a("<div></div>").addClass(c.wrapperClass).css({
						position: "relative",
						overflow: "hidden",
						width: c.width,
						height: c.height
					}), u.css({
						overflow: "hidden",
						width: c.width,
						height: c.height
					});
					var x = a("<div></div>").addClass(c.railClass).css({
						width: c.size,
						height: "100%",
						position: "absolute",
						top: 0,
						display: c.alwaysVisible && c.railVisible ? "block" : "none",
						"border-radius": c.railBorderRadius,
						background: c.railColor,
						opacity: c.railOpacity,
						zIndex: 90
					}),
						w = a("<div></div>").addClass(c.barClass).css({
							background: c.color,
							width: c.size,
							position: "absolute",
							top: 0,
							opacity: c.opacity,
							display: c.alwaysVisible ? "block" : "none",
							"border-radius": c.borderRadius,
							BorderRadius: c.borderRadius,
							MozBorderRadius: c.borderRadius,
							WebkitBorderRadius: c.borderRadius,
							zIndex: 99
						}),
						y = "right" == c.position ? {
							right: c.distance
						} : {
							left: c.distance
						};
					x.css(y), w.css(y), u.wrap(v), u.parent().append(w), u.parent().append(x), c.railDraggable && w.bind("mousedown", function(b) {
						var c = a(document);
						return l = !0, t = parseFloat(w.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function(a) {
							currTop = t + a.pageY - pageY, w.css("top", currTop), e(0, w.position().top, !1)
						}), c.bind("mouseup.slimscroll", function() {
							l = !1, i(), c.unbind(".slimscroll")
						}), !1
					}).bind("selectstart.slimscroll", function(a) {
						return a.stopPropagation(), a.preventDefault(), !1
					}), x.hover(function() {
						h()
					}, function() {
						i()
					}), w.hover(function() {
						k = !0
					}, function() {
						k = !1
					}), u.hover(function() {
						j = !0, h(), i()
					}, function() {
						j = !1, i()
					}), u.bind("touchstart", function(a) {
						a.originalEvent.touches.length && (n = a.originalEvent.touches[0].pageY)
					}), u.bind("touchmove", function(a) {
						s || a.originalEvent.preventDefault(), a.originalEvent.touches.length && (e((n - a.originalEvent.touches[0].pageY) / c.touchScrollStep, !0), n = a.originalEvent.touches[0].pageY)
					}), g(), "bottom" === c.start ? (w.css({
						top: u.outerHeight() - w.outerHeight()
					}), e(0, !0)) : "top" !== c.start && (e(a(c.start).position().top, null, !0), c.alwaysVisible || w.hide()), f()
				}
			}), this
		}
	}), jQuery.fn.extend({
		slimscroll: jQuery.fn.slimScroll
	})
}(jQuery);
var ModalEffects = function() {
	function a() {
		var a = document.querySelector(".md-overlay");
		[].slice.call(document.querySelectorAll(".md-trigger")).forEach(function(b) {
			function c(a) {
				classie.remove(e, "md-show"), a && classie.remove(document.documentElement, "md-perspective")
			}

			function d() {
				c(classie.has(b, "md-setperspective"))
			}
			var e = document.querySelector("#" + b.getAttribute("data-modal")),
				f = e.querySelector(".md-close");
			b.addEventListener("click", function() {
				classie.add(e, "md-show"), a.removeEventListener("click", d), a.addEventListener("click", d), classie.has(b, "md-setperspective") && setTimeout(function() {
					classie.add(document.documentElement, "md-perspective")
				}, 25)
			}), f.addEventListener("click", function(a) {
				a.stopPropagation(), d()
			})
		})
	}
	a()
}();
! function(a) {
	function b(a) {
		this.parent = a, this.container, this.loadbar, this.percentageContainer
	}

	function c(a) {
		this.toPreload = [], this.parent = a, this.container
	}

	function d(a) {
		this.element, this.parent = a
	}

	function e(d, e) {
		this.element = d, this.$element = a(d), this.options = e, this.foundUrls = [], this.destroyed = !1, this.imageCounter = 0, this.imageDone = 0, this.alreadyLoaded = !1, this.preloadContainer = new c(this), this.overlayLoader = new b(this), this.defaultOptions = {
			onComplete: function() {},
			backgroundColor: "#000",
			barColor: "#fff",
			overlayId: "qLoverlay",
			barHeight: 1,
			percentage: !1,
			deepSearch: !0,
			completeAnimation: "fade",
			minimumTime: 500
		}, this.init()
	}
	b.prototype.createOverlay = function() {
		var b = "absolute";
		if ("body" == this.parent.element.tagName.toLowerCase()) b = "fixed";
		else {
			var c = this.parent.$element.css("position");
			("fixed" != c || "absolute" != c) && this.parent.$element.css("position", "relative")
		}
		this.container = a("<div id='" + this.parent.options.overlayId + "'></div>").css({
			width: "100%",
			height: "100%",
			backgroundColor: this.parent.options.backgroundColor,
			backgroundPosition: "fixed",
			position: b,
			zIndex: 666999,
			top: 0,
			left: 0
		}).appendTo(this.parent.$element), this.loadbar = a("<div id='qLbar'></div>").css({
			height: this.parent.options.barHeight + "px",
			marginTop: "-" + this.parent.options.barHeight / 2 + "px",
			backgroundColor: this.parent.options.barColor,
			width: "0%",
			position: "absolute",
			top: "50%"
		}).appendTo(this.container), 1 == this.parent.options.percentage && (this.percentageContainer = a("<div id='qLpercentage'></div>").text("0%").css({
			height: "40px",
			width: "100px",
			position: "absolute",
			fontSize: "3em",
			top: "50%",
			left: "50%",
			marginTop: "-" + (59 + this.parent.options.barHeight) + "px",
			textAlign: "center",
			marginLeft: "-50px",
			color: this.parent.options.barColor
		}).appendTo(this.container)), this.parent.preloadContainer.toPreload.length && 1 != this.parent.alreadyLoaded || this.parent.destroyContainers()
	}, b.prototype.updatePercentage = function(a) {
		this.loadbar.stop().animate({
			width: a + "%",
			minWidth: a + "%"
		}, 200), 1 == this.parent.options.percentage && this.percentageContainer.text(Math.ceil(a) + "%")
	}, c.prototype.create = function() {
		this.container = a("<div></div>").appendTo("body").css({
			display: "none",
			width: 0,
			height: 0,
			overflow: "hidden"
		}), this.processQueue()
	}, c.prototype.processQueue = function() {
		for (var a = 0; this.toPreload.length > a; a++) this.parent.destroyed || this.preloadImage(this.toPreload[a])
	}, c.prototype.addImage = function(a) {
		this.toPreload.push(a)
	}, c.prototype.preloadImage = function(a) {
		var b = new d;
		b.addToPreloader(this, a), b.bindLoadEvent()
	}, d.prototype.addToPreloader = function(b, c) {
		this.element = a("<img />").attr("src", c), this.element.appendTo(b.container), this.parent = b.parent
	}, d.prototype.bindLoadEvent = function() {
		this.parent.imageCounter++;
		var a = this.element.attr("src");
		this.element.removeAttr("src");
		var b = this;
		setTimeout(function() {
			b.element.on("load error", b, function(a) {
				a.data.completeLoading()
			}), b.element.attr("src", a)
		}, 1)
	}, d.prototype.completeLoading = function() {
		this.parent.imageDone++;
		var a = this.parent.imageDone / this.parent.imageCounter * 100;
		this.parent.overlayLoader.updatePercentage(a), this.parent.imageDone == this.parent.imageCounter && this.parent.endLoader()
	}, e.prototype.init = function() {
		this.options = a.extend({}, this.defaultOptions, this.options);
		this.findImageInElement(this.element);
		if (1 == this.options.deepSearch)
			for (var b = this.$element.find("*:not(script)"), c = 0; c < b.length; c++) this.findImageInElement(b[c]);
		this.preloadContainer.create(), this.overlayLoader.createOverlay()
	}, e.prototype.findImageInElement = function(b) {
		var c = "",
			e = a(b),
			f = "normal";
		if ("none" != e.css("background-image") ? (c = e.css("background-image"), f = "background") : "undefined" != typeof e.attr("src") && "img" == b.nodeName.toLowerCase() && (c = e.attr("src")), !this.hasGradient(c)) {
			c = this.stripUrl(c);
			for (var g = c.split(", "), h = 0; h < g.length; h++)
				if (this.validUrl(g[h]) && this.urlIsNew(g[h])) {
					var i = "";
					if (this.isIE() || this.isOpera()) i = "?rand=" + Math.random(), this.preloadContainer.addImage(g[h] + i);
					else if ("background" == f) this.preloadContainer.addImage(g[h] + i);
					else {
						var j = new d(this);
						j.element = e, j.bindLoadEvent()
					}
					this.foundUrls.push(g[h])
				}
		}
	}, e.prototype.hasGradient = function(a) {
		return -1 == a.indexOf("gradient") ? !1 : !0
	}, e.prototype.stripUrl = function(a) {
		return a = a.replace(/url\(\"/g, ""), a = a.replace(/url\(/g, ""), a = a.replace(/\"\)/g, ""), a = a.replace(/\)/g, "")
	}, e.prototype.isIE = function() {
		return navigator.userAgent.match(/msie/i)
	}, e.prototype.isOpera = function() {
		return navigator.userAgent.match(/Opera/i)
	}, e.prototype.validUrl = function(a) {
		return a.length > 0 && !a.match(/^(data:)/i) ? !0 : !1
	}, e.prototype.urlIsNew = function(a) {
		return -1 == this.foundUrls.indexOf(a) ? !0 : !1
	}, e.prototype.destroyContainers = function() {
		this.destroyed = !0, this.preloadContainer.container.remove(), this.overlayLoader.container.remove()
	}, e.prototype.endLoader = function() {
		this.destroyed = !0, this.onLoadComplete()
	}, e.prototype.onLoadComplete = function() {
		if ("grow" == this.options.completeAnimation) {
			var b = 500;
			this.overlayLoader.loadbar[0].parent = this, this.overlayLoader.loadbar.stop().animate({
				width: "100%"
			}, b, function() {
				a(this).animate({
					top: "0%",
					width: "100%",
					height: "100%"
				}, 500, function() {
					this.parent.overlayLoader.container[0].parent = this.parent, this.parent.overlayLoader.container.fadeOut(500, function() {
						this.parent.destroyContainers(), this.parent.options.onComplete()
					})
				})
			})
		} else this.overlayLoader.container[0].parent = this, this.overlayLoader.container.fadeOut(500, function() {
			this.parent.destroyContainers(), this.parent.options.onComplete()
		})
	}, Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
		var b = this.length >>> 0,
			c = Number(arguments[1]) || 0;
		for (c = 0 > c ? Math.ceil(c) : Math.floor(c), 0 > c && (c += b); b > c; c++)
			if (c in this && this[c] === a) return c;
		return -1
	}), a.fn.queryLoader2 = function(a) {
		return this.each(function() {
			new e(this, a)
		})
	}
}(jQuery);
var Swiper = function(a, b) {
	function c(a) {
		return document.querySelectorAll ? document.querySelectorAll(a) : jQuery(a)
	}

	function d() {
		var a = z - C;
		return b.freeMode && (a = z - C), b.slidesPerView > w.slides.length && (a = 0), 0 > a && (a = 0), a
	}

	function e() {
		function a(a) {
			var c = new Image;
			c.onload = function() {
				w.imagesLoaded++, w.imagesLoaded == w.imagesToLoad.length && (w.reInit(), b.onImagesReady) && b.onImagesReady(w)
			}, c.src = a
		}
		if (w.browser.ie10 ? (w.h.addEventListener(w.wrapper, w.touchEvents.touchStart, o, !1), w.h.addEventListener(document, w.touchEvents.touchMove, p, !1), w.h.addEventListener(document, w.touchEvents.touchEnd, q, !1)) : (w.support.touch && (w.h.addEventListener(w.wrapper, "touchstart", o, !1), w.h.addEventListener(w.wrapper, "touchmove", p, !1), w.h.addEventListener(w.wrapper, "touchend", q, !1)), b.simulateTouch && (w.h.addEventListener(w.wrapper, "mousedown", o, !1), w.h.addEventListener(document, "mousemove", p, !1), w.h.addEventListener(document, "mouseup", q, !1))), b.autoResize && w.h.addEventListener(window, "resize", w.resizeFix, !1), f(), w._wheelEvent = !1, b.mousewheelControl) {
			void 0 !== document.onmousewheel && (w._wheelEvent = "mousewheel");
			try {
				WheelEvent("wheel"), w._wheelEvent = "wheel"
			} catch (d) {}
			w._wheelEvent || (w._wheelEvent = "DOMMouseScroll"), w._wheelEvent && w.h.addEventListener(w.container, w._wheelEvent, i, !1)
		}
		if (b.keyboardControl && w.h.addEventListener(document, "keydown", h, !1), b.updateOnImagesReady) {
			document.querySelectorAll ? w.imagesToLoad = w.container.querySelectorAll("img") : window.jQuery && (w.imagesToLoad = c(w.container).find("img"));
			for (var e = 0; e < w.imagesToLoad.length; e++) a(w.imagesToLoad[e].getAttribute("src"))
		}
	}

	function f() {
		if (b.preventLinks) {
			var a = [];
			document.querySelectorAll ? a = w.container.querySelectorAll("a") : window.jQuery && (a = c(w.container).find("a"));
			for (var d = 0; d < a.length; d++) w.h.addEventListener(a[d], "click", m, !1)
		}
		if (b.releaseFormElements)
			for (a = document.querySelectorAll ? w.container.querySelectorAll("input, textarea, select") : c(w.container).find("input, textarea, select"), d = 0; d < a.length; d++) w.h.addEventListener(a[d], w.touchEvents.touchStart, n, !0);
		if (b.onSlideClick)
			for (d = 0; d < w.slides.length; d++) w.h.addEventListener(w.slides[d], "click", k, !1);
		if (b.onSlideTouch)
			for (d = 0; d < w.slides.length; d++) w.h.addEventListener(w.slides[d], w.touchEvents.touchStart, l, !1)
	}

	function g() {
		if (b.onSlideClick)
			for (var a = 0; a < w.slides.length; a++) w.h.removeEventListener(w.slides[a], "click", k, !1);
		if (b.onSlideTouch)
			for (a = 0; a < w.slides.length; a++) w.h.removeEventListener(w.slides[a], w.touchEvents.touchStart, l, !1);
		if (b.releaseFormElements)
			for (var d = document.querySelectorAll ? w.container.querySelectorAll("input, textarea, select") : c(w.container).find("input, textarea, select"), a = 0; a < d.length; a++) w.h.removeEventListener(d[a], w.touchEvents.touchStart, n, !0);
		if (b.preventLinks)
			for (d = [], document.querySelectorAll ? d = w.container.querySelectorAll("a") : window.jQuery && (d = c(w.container).find("a")), a = 0; a < d.length; a++) w.h.removeEventListener(d[a], "click", m, !1)
	}

	function h(a) {
		var b = a.keyCode || a.charCode;
		if (37 == b || 39 == b || 38 == b || 40 == b) {
			for (var c = !1, d = w.h.getOffset(w.container), e = w.h.windowScroll().left, f = w.h.windowScroll().top, g = w.h.windowWidth(), h = w.h.windowHeight(), d = [
					[d.left, d.top],
					[d.left + w.width, d.top],
					[d.left, d.top + w.height],
					[d.left + w.width, d.top + w.height]
				], i = 0; i < d.length; i++) {
				var j = d[i];
				j[0] >= e && j[0] <= e + g && j[1] >= f && j[1] <= f + h && (c = !0)
			}
			if (!c) return
		}
		F ? ((37 == b || 39 == b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 == b && w.swipeNext(), 37 == b && w.swipePrev()) : ((38 == b || 40 == b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 == b && w.swipeNext(), 38 == b && w.swipePrev())
	}

	function i(a) {
		var c, e = w._wheelEvent;
		return a.detail ? c = -a.detail : "mousewheel" == e ? c = a.wheelDelta : "DOMMouseScroll" == e ? c = -a.detail : "wheel" == e && (c = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY), b.freeMode ? (w.getWrapperTranslate(F ? "x" : "y"), F ? (e = w.getWrapperTranslate("x") + c, c = w.getWrapperTranslate("y"), e > 0 && (e = 0), e < -d() && (e = -d())) : (e = w.getWrapperTranslate("x"), c = w.getWrapperTranslate("y") + c, c > 0 && (c = 0), c < -d() && (c = -d())), w.setWrapperTransition(0), w.setWrapperTranslate(e, c, 0), w.updateActiveSlide(F ? e : c)) : 0 > c ? w.swipeNext() : w.swipePrev(), b.autoplay && w.stopAutoplay(), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
	}

	function j(a) {
		for (var c = !1; !c;) - 1 < a.className.indexOf(b.slideClass) && (c = a), a = a.parentElement;
		return c
	}

	function k(a) {
		w.allowSlideClick && (a.target ? (w.clickedSlide = this, w.clickedSlideIndex = w.slides.indexOf(this)) : (w.clickedSlide = j(a.srcElement), w.clickedSlideIndex = w.slides.indexOf(w.clickedSlide)), b.onSlideClick(w))
	}

	function l(a) {
		w.clickedSlide = a.target ? this : j(a.srcElement), w.clickedSlideIndex = w.slides.indexOf(w.clickedSlide), b.onSlideTouch(w)
	}

	function m(a) {
		return w.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1)
	}

	function n(a) {
		return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1
	}

	function o(a) {
		if (b.preventLinks && (w.allowLinks = !0), w.isTouched || b.onlyExternal) return !1;
		var c;
		if ((c = b.noSwiping) && (c = a.target || a.srcElement)) {
			c = a.target || a.srcElement;
			var d = !1;
			do -
			1 < c.className.indexOf(b.noSwipingClass) && (d = !0), c = c.parentElement;
			while (!d && c.parentElement && -1 == c.className.indexOf(b.wrapperClass));
			!d && -1 < c.className.indexOf(b.wrapperClass) && -1 < c.className.indexOf(b.noSwipingClass) && (d = !0), c = d
		}
		return c ? !1 : (M = !1, w.isTouched = !0, L = "touchstart" == a.type, void(L && 1 != a.targetTouches.length || (b.loop && w.fixLoop(), w.callPlugins("onTouchStartBegin"), L || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), c = L ? a.targetTouches[0].pageX : a.pageX || a.clientX, a = L ? a.targetTouches[0].pageY : a.pageY || a.clientY, w.touches.startX = w.touches.currentX = c, w.touches.startY = w.touches.currentY = a, w.touches.start = w.touches.current = F ? c : a, w.setWrapperTransition(0), w.positions.start = w.positions.current = w.getWrapperTranslate(F ? "x" : "y"), F ? w.setWrapperTranslate(w.positions.start, 0, 0) : w.setWrapperTranslate(0, w.positions.start, 0), w.times.start = (new Date).getTime(), B = void 0, 0 < b.moveStartThreshold && (I = !1), b.onTouchStart && b.onTouchStart(w), w.callPlugins("onTouchStartEnd"))))
	}

	function p(a) {
		if (w.isTouched && !b.onlyExternal && (!L || "mousemove" != a.type)) {
			var c = L ? a.targetTouches[0].pageX : a.pageX || a.clientX,
				e = L ? a.targetTouches[0].pageY : a.pageY || a.clientY;
			if ("undefined" == typeof B && F && (B = !! (B || Math.abs(e - w.touches.startY) > Math.abs(c - w.touches.startX))), "undefined" != typeof B || F || (B = !! (B || Math.abs(e - w.touches.startY) < Math.abs(c - w.touches.startX))), B) w.isTouched = !1;
			else if (a.assignedToSwiper) w.isTouched = !1;
			else if (a.assignedToSwiper = !0, w.isMoved = !0, b.preventLinks && (w.allowLinks = !1), b.onSlideClick && (w.allowSlideClick = !1), b.autoplay && w.stopAutoplay(), (!L || 1 == a.touches.length) && (w.callPlugins("onTouchMoveStart"), a.preventDefault ? a.preventDefault() : a.returnValue = !1, w.touches.current = F ? c : e, w.positions.current = (w.touches.current - w.touches.start) * b.touchRatio + w.positions.start, 0 < w.positions.current && b.onResistanceBefore && b.onResistanceBefore(w, w.positions.current), w.positions.current < -d() && b.onResistanceAfter && b.onResistanceAfter(w, Math.abs(w.positions.current + d())), b.resistance && "100%" != b.resistance && (0 < w.positions.current && (a = 1 - w.positions.current / C / 2, w.positions.current = .5 > a ? C / 2 : w.positions.current * a), w.positions.current < -d() && (c = (w.touches.current - w.touches.start) * b.touchRatio + (d() + w.positions.start), a = (C + c) / C, c = w.positions.current - c * (1 - a) / 2, e = -d() - C / 2, w.positions.current = e > c || 0 >= a ? e : c)), b.resistance && "100%" == b.resistance && (0 < w.positions.current && (!b.freeMode || b.freeModeFluid) && (w.positions.current = 0), w.positions.current < -d() && (!b.freeMode || b.freeModeFluid) && (w.positions.current = -d())), b.followFinger)) return b.moveStartThreshold ? Math.abs(w.touches.current - w.touches.start) > b.moveStartThreshold || I ? (I = !0, F ? w.setWrapperTranslate(w.positions.current, 0, 0) : w.setWrapperTranslate(0, w.positions.current, 0)) : w.positions.current = w.positions.start : F ? w.setWrapperTranslate(w.positions.current, 0, 0) : w.setWrapperTranslate(0, w.positions.current, 0), (b.freeMode || b.watchActiveIndex) && w.updateActiveSlide(w.positions.current), b.grabCursor && (w.container.style.cursor = "move", w.container.style.cursor = "grabbing", w.container.style.cursor = "-moz-grabbin", w.container.style.cursor = "-webkit-grabbing"), J || (J = w.touches.current), K || (K = (new Date).getTime()), w.velocity = (w.touches.current - J) / ((new Date).getTime() - K) / 2, 2 > Math.abs(w.touches.current - J) && (w.velocity = 0), J = w.touches.current, K = (new Date).getTime(), w.callPlugins("onTouchMoveEnd"), b.onTouchMove && b.onTouchMove(w), !1
		}
	}

	function q(a) {
		if (B && w.swipeReset(), !b.onlyExternal && w.isTouched) {
			w.isTouched = !1, b.grabCursor && (w.container.style.cursor = "move", w.container.style.cursor = "grab", w.container.style.cursor = "-moz-grab", w.container.style.cursor = "-webkit-grab"), w.positions.current || 0 === w.positions.current || (w.positions.current = w.positions.start), b.followFinger && (F ? w.setWrapperTranslate(w.positions.current, 0, 0) : w.setWrapperTranslate(0, w.positions.current, 0)), w.times.end = (new Date).getTime(), w.touches.diff = w.touches.current - w.touches.start, w.touches.abs = Math.abs(w.touches.diff), w.positions.diff = w.positions.current - w.positions.start, w.positions.abs = Math.abs(w.positions.diff);
			var c = w.positions.diff,
				e = w.positions.abs;
			if (a = w.times.end - w.times.start, 5 > e && 300 > a && 0 == w.allowLinks && (b.freeMode || 0 == e || w.swipeReset(), b.preventLinks && (w.allowLinks = !0), b.onSlideClick && (w.allowSlideClick = !0)), setTimeout(function() {
				b.preventLinks && (w.allowLinks = !0), b.onSlideClick && (w.allowSlideClick = !0)
			}, 100), w.isMoved) {
				w.isMoved = !1;
				var f = d();
				if (0 < w.positions.current) w.swipeReset();
				else if (w.positions.current < -f) w.swipeReset();
				else if (b.freeMode) {
					if (b.freeModeFluid) {
						var g, e = 1e3 * b.momentumRatio,
							c = w.positions.current + w.velocity * e,
							h = !1,
							i = 20 * Math.abs(w.velocity) * b.momentumBounceRatio; - f > c && (b.momentumBounce && w.support.transitions ? (-i > c + f && (c = -f - i), g = -f, M = h = !0) : c = -f), c > 0 && (b.momentumBounce && w.support.transitions ? (c > i && (c = i), g = 0, M = h = !0) : c = 0), 0 != w.velocity && (e = Math.abs((c - w.positions.current) / w.velocity)), F ? w.setWrapperTranslate(c, 0, 0) : w.setWrapperTranslate(0, c, 0), w.setWrapperTransition(e), b.momentumBounce && h && w.wrapperTransitionEnd(function() {
								M && (b.onMomentumBounce && b.onMomentumBounce(w), F ? w.setWrapperTranslate(g, 0, 0) : w.setWrapperTranslate(0, g, 0), w.setWrapperTransition(300))
							}), w.updateActiveSlide(c)
					}(!b.freeModeFluid || a >= 300) && w.updateActiveSlide(w.positions.current)
				} else {
					if (A = 0 > c ? "toNext" : "toPrev", "toNext" == A && 300 >= a && (30 > e || !b.shortSwipes ? w.swipeReset() : w.swipeNext(!0)), "toPrev" == A && 300 >= a && (30 > e || !b.shortSwipes ? w.swipeReset() : w.swipePrev(!0)), f = 0, "auto" == b.slidesPerView) {
						for (var c = Math.abs(w.getWrapperTranslate(F ? "x" : "y")), j = h = 0; j < w.slides.length; j++)
							if (i = F ? w.slides[j].getWidth(!0) : w.slides[j].getHeight(!0), h += i, h > c) {
								f = i;
								break
							}
						f > C && (f = C)
					} else f = y * b.slidesPerView;
					"toNext" == A && a > 300 && (e >= .5 * f ? w.swipeNext(!0) : w.swipeReset()), "toPrev" == A && a > 300 && (e >= .5 * f ? w.swipePrev(!0) : w.swipeReset())
				}
				b.onTouchEnd && b.onTouchEnd(w), w.callPlugins("onTouchEnd")
			} else w.isMoved = !1, b.onTouchEnd && b.onTouchEnd(w), w.callPlugins("onTouchEnd"), w.swipeReset()
		}
	}

	function r(a, c, d) {
		function e() {
			g += h, (j = "toNext" == i ? g > a : a > g) ? (F ? w.setWrapperTranslate(Math.round(g), 0) : w.setWrapperTranslate(0, Math.round(g)), w._DOMAnimating = !0, window.setTimeout(function() {
				e()
			}, 1e3 / 60)) : (b.onSlideChangeEnd && b.onSlideChangeEnd(w), F ? w.setWrapperTranslate(a, 0) : w.setWrapperTranslate(0, a), w._DOMAnimating = !1)
		}
		if (w.support.transitions || !b.DOMAnimation) {
			F ? w.setWrapperTranslate(a, 0, 0) : w.setWrapperTranslate(0, a, 0);
			var f = "to" == c && 0 <= d.speed ? d.speed : b.speed;
			w.setWrapperTransition(f)
		} else {
			var g = w.getWrapperTranslate(F ? "x" : "y"),
				f = "to" == c && 0 <= d.speed ? d.speed : b.speed,
				h = Math.ceil((a - g) / f * (1e3 / 60)),
				i = g > a ? "toNext" : "toPrev",
				j = "toNext" == i ? g > a : a > g;
			if (w._DOMAnimating) return;
			e()
		}
		w.updateActiveSlide(a), b.onSlideNext && "next" == c && b.onSlideNext(w, a), b.onSlidePrev && "prev" == c && b.onSlidePrev(w, a), b.onSlideReset && "reset" == c && b.onSlideReset(w, a), ("next" == c || "prev" == c || "to" == c && 1 == d.runCallbacks) && s()
	}

	function s() {
		if (w.callPlugins("onSlideChangeStart"), b.onSlideChangeStart)
			if (b.queueStartCallbacks && w.support.transitions) {
				if (w._queueStartCallbacks) return;
				w._queueStartCallbacks = !0, b.onSlideChangeStart(w), w.wrapperTransitionEnd(function() {
					w._queueStartCallbacks = !1
				})
			} else b.onSlideChangeStart(w);
		b.onSlideChangeEnd && (w.support.transitions ? b.queueEndCallbacks ? w._queueEndCallbacks || (w._queueEndCallbacks = !0, w.wrapperTransitionEnd(b.onSlideChangeEnd)) : w.wrapperTransitionEnd(b.onSlideChangeEnd) : b.DOMAnimation || setTimeout(function() {
			b.onSlideChangeEnd(w)
		}, 10))
	}

	function t() {
		for (var a = w.paginationButtons, b = 0; b < a.length; b++) w.h.removeEventListener(a[b], "click", u, !1)
	}

	function u(a) {
		var b;
		a = a.target || a.srcElement;
		for (var c = w.paginationButtons, d = 0; d < c.length; d++) a === c[d] && (b = d);
		w.swipeTo(b)
	}
	if (document.body.__defineGetter__ && HTMLElement) {
		var v = HTMLElement.prototype;
		v.__defineGetter__ && v.__defineGetter__("outerHTML", function() {
			return (new XMLSerializer).serializeToString(this)
		})
	}
	if (window.getComputedStyle || (window.getComputedStyle = function(a) {
		return this.el = a, this.getPropertyValue = function(b) {
			var c = /(\-([a-z]){1})/g;
			return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function(a, b, c) {
				return c.toUpperCase()
			})), a.currentStyle[b] ? a.currentStyle[b] : null
		}, this
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
		for (var c = b || 0, d = this.length; d > c; c++)
			if (this[c] === a) return c;
		return -1
	}), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
		var w = this;
		w.touches = {
			start: 0,
			startX: 0,
			startY: 0,
			current: 0,
			currentX: 0,
			currentY: 0,
			diff: 0,
			abs: 0
		}, w.positions = {
			start: 0,
			abs: 0,
			diff: 0,
			current: 0
		}, w.times = {
			start: 0,
			end: 0
		}, w.id = (new Date).getTime(), w.container = a.nodeType ? a : c(a)[0], w.isTouched = !1, w.isMoved = !1, w.activeIndex = 0, w.activeLoaderIndex = 0, w.activeLoopIndex = 0, w.previousIndex = null, w.velocity = 0, w.snapGrid = [], w.slidesGrid = [], w.imagesToLoad = [], w.imagesLoaded = 0, w.wrapperLeft = 0, w.wrapperRight = 0, w.wrapperTop = 0, w.wrapperBottom = 0;
		var x, y, z, A, B, C, v = {
				mode: "horizontal",
				touchRatio: 1,
				speed: 300,
				freeMode: !1,
				freeModeFluid: !1,
				momentumRatio: 1,
				momentumBounce: !0,
				momentumBounceRatio: 1,
				slidesPerView: 1,
				slidesPerGroup: 1,
				simulateTouch: !0,
				followFinger: !0,
				shortSwipes: !0,
				moveStartThreshold: !1,
				autoplay: !1,
				onlyExternal: !1,
				createPagination: !0,
				pagination: !1,
				paginationElement: "span",
				paginationClickable: !1,
				paginationAsRange: !0,
				resistance: !0,
				scrollContainer: !1,
				preventLinks: !0,
				noSwiping: !1,
				noSwipingClass: "swiper-no-swiping",
				initialSlide: 0,
				keyboardControl: !1,
				mousewheelControl: !1,
				mousewheelDebounce: 600,
				useCSS3Transforms: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				calculateHeight: !1,
				updateOnImagesReady: !0,
				releaseFormElements: !0,
				watchActiveIndex: !1,
				visibilityFullFit: !1,
				offsetPxBefore: 0,
				offsetPxAfter: 0,
				offsetSlidesBefore: 0,
				offsetSlidesAfter: 0,
				centeredSlides: !1,
				queueStartCallbacks: !1,
				queueEndCallbacks: !1,
				autoResize: !0,
				resizeReInit: !1,
				DOMAnimation: !0,
				loader: {
					slides: [],
					slidesHTMLType: "inner",
					surroundGroups: 1,
					logic: "reload",
					loadAllSlides: !1
				},
				slideElement: "div",
				slideClass: "swiper-slide",
				slideActiveClass: "swiper-slide-active",
				slideVisibleClass: "swiper-slide-visible",
				wrapperClass: "swiper-wrapper",
				paginationElementClass: "swiper-pagination-switch",
				paginationActiveClass: "swiper-active-switch",
				paginationVisibleClass: "swiper-visible-switch"
			};
		b = b || {};
		for (var D in v)
			if (D in b && "object" == typeof b[D])
				for (var E in v[D]) E in b[D] || (b[D][E] = v[D][E]);
			else D in b || (b[D] = v[D]);
		w.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");
		var F = "horizontal" === b.mode;
		for (w.touchEvents = {
			touchStart: w.support.touch || !b.simulateTouch ? "touchstart" : w.browser.ie10 ? "MSPointerDown" : "mousedown",
			touchMove: w.support.touch || !b.simulateTouch ? "touchmove" : w.browser.ie10 ? "MSPointerMove" : "mousemove",
			touchEnd: w.support.touch || !b.simulateTouch ? "touchend" : w.browser.ie10 ? "MSPointerUp" : "mouseup"
		}, D = w.container.childNodes.length - 1; D >= 0; D--)
			if (w.container.childNodes[D].className)
				for (E = w.container.childNodes[D].className.split(" "), v = 0; v < E.length; v++) E[v] === b.wrapperClass && (x = w.container.childNodes[D]);
		w.wrapper = x, w._extendSwiperSlide = function(a) {
			return a.append = function() {
				return b.loop ? (a.insertAfter(w.slides.length - w.loopedSlides), w.removeLoopedSlides(), w.calcSlides(), w.createLoop()) : w.wrapper.appendChild(a), w.reInit(), a
			}, a.prepend = function() {
				return b.loop ? (w.wrapper.insertBefore(a, w.slides[w.loopedSlides]), w.removeLoopedSlides(), w.calcSlides(), w.createLoop()) : w.wrapper.insertBefore(a, w.wrapper.firstChild), w.reInit(), a
			}, a.insertAfter = function(c) {
				return "undefined" == typeof c ? !1 : (b.loop ? (c = w.slides[c + 1 + w.loopedSlides], w.wrapper.insertBefore(a, c), w.removeLoopedSlides(), w.calcSlides(), w.createLoop()) : (c = w.slides[c + 1], w.wrapper.insertBefore(a, c)), w.reInit(), a)
			}, a.clone = function() {
				return w._extendSwiperSlide(a.cloneNode(!0))
			}, a.remove = function() {
				w.wrapper.removeChild(a), w.reInit()
			}, a.html = function(b) {
				return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a)
			}, a.index = function() {
				for (var b, c = w.slides.length - 1; c >= 0; c--) a === w.slides[c] && (b = c);
				return b
			}, a.isActive = function() {
				return a.index() === w.activeIndex ? !0 : !1
			}, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function(b) {
				return a.swiperSlideDataStorage[b]
			}, a.setData = function(b, c) {
				return a.swiperSlideDataStorage[b] = c, a
			}, a.data = function(b, c) {
				return c ? (a.setAttribute("data-" + b, c), a) : a.getAttribute("data-" + b)
			}, a.getWidth = function(b) {
				return w.h.getWidth(a, b)
			}, a.getHeight = function(b) {
				return w.h.getHeight(a, b)
			}, a.getOffset = function() {
				return w.h.getOffset(a)
			}, a
		}, w.calcSlides = function(a) {
			var c = w.slides ? w.slides.length : !1;
			w.slides = [], w.displaySlides = [];
			for (var d = 0; d < w.wrapper.childNodes.length; d++)
				if (w.wrapper.childNodes[d].className)
					for (var e = w.wrapper.childNodes[d].className.split(" "), h = 0; h < e.length; h++) e[h] === b.slideClass && w.slides.push(w.wrapper.childNodes[d]);
			for (d = w.slides.length - 1; d >= 0; d--) w._extendSwiperSlide(w.slides[d]);
			c && (c !== w.slides.length || a) && (g(), f(), w.updateActiveSlide(), b.createPagination && w.params.pagination && w.createPagination(), w.callPlugins("numberOfSlidesChanged"))
		}, w.createSlide = function(a, c, d) {
			return c = c || w.params.slideClass, d = d || b.slideElement, d = document.createElement(d), d.innerHTML = a || "", d.className = c, w._extendSwiperSlide(d)
		}, w.appendSlide = function(a, b, c) {
			return a ? a.nodeType ? w._extendSwiperSlide(a).append() : w.createSlide(a, b, c).append() : void 0
		}, w.prependSlide = function(a, b, c) {
			return a ? a.nodeType ? w._extendSwiperSlide(a).prepend() : w.createSlide(a, b, c).prepend() : void 0
		}, w.insertSlideAfter = function(a, b, c, d) {
			return "undefined" == typeof a ? !1 : b.nodeType ? w._extendSwiperSlide(b).insertAfter(a) : w.createSlide(b, c, d).insertAfter(a)
		}, w.removeSlide = function(a) {
			if (w.slides[a]) {
				if (b.loop) {
					if (!w.slides[a + w.loopedSlides]) return !1;
					w.slides[a + w.loopedSlides].remove(), w.removeLoopedSlides(), w.calcSlides(), w.createLoop()
				} else w.slides[a].remove();
				return !0
			}
			return !1
		}, w.removeLastSlide = function() {
			return 0 < w.slides.length ? (b.loop ? (w.slides[w.slides.length - 1 - w.loopedSlides].remove(), w.removeLoopedSlides(), w.calcSlides(), w.createLoop()) : w.slides[w.slides.length - 1].remove(), !0) : !1
		}, w.removeAllSlides = function() {
			for (var a = w.slides.length - 1; a >= 0; a--) w.slides[a].remove()
		}, w.getSlide = function(a) {
			return w.slides[a]
		}, w.getLastSlide = function() {
			return w.slides[w.slides.length - 1]
		}, w.getFirstSlide = function() {
			return w.slides[0]
		}, w.activeSlide = function() {
			return w.slides[w.activeIndex]
		};
		var G, H = [];
		for (G in w.plugins) b[G] && (D = w.plugins[G](w, b[G])) && H.push(D);
		w.callPlugins = function(a, b) {
			b || (b = {});
			for (var c = 0; c < H.length; c++) a in H[c] && H[c][a](b)
		}, w.browser.ie10 && !b.onlyExternal && w.wrapper.classList.add(F ? "swiper-wp8-horizontal" : "swiper-wp8-vertical"), b.freeMode && (w.container.className += " swiper-free-mode"), w.initialized = !1, w.init = function(a, c) {
			var d = w.h.getWidth(w.container),
				e = w.h.getHeight(w.container);
			if (d !== w.width || e !== w.height || a) {
				if (w.width = d, w.height = e, C = F ? d : e, d = w.wrapper, a && w.calcSlides(c), "auto" === b.slidesPerView) {
					var f = 0,
						g = 0;
					0 < b.slidesOffset && (d.style.paddingLeft = "", d.style.paddingRight = "", d.style.paddingTop = "", d.style.paddingBottom = ""), d.style.width = "", d.style.height = "", 0 < b.offsetPxBefore && (F ? w.wrapperLeft = b.offsetPxBefore : w.wrapperTop = b.offsetPxBefore), 0 < b.offsetPxAfter && (F ? w.wrapperRight = b.offsetPxAfter : w.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (F ? (w.wrapperLeft = (C - this.slides[0].getWidth(!0)) / 2, w.wrapperRight = (C - w.slides[w.slides.length - 1].getWidth(!0)) / 2) : (w.wrapperTop = (C - w.slides[0].getHeight(!0)) / 2, w.wrapperBottom = (C - w.slides[w.slides.length - 1].getHeight(!0)) / 2)), F ? (0 <= w.wrapperLeft && (d.style.paddingLeft = w.wrapperLeft + "px"), 0 <= w.wrapperRight && (d.style.paddingRight = w.wrapperRight + "px")) : (0 <= w.wrapperTop && (d.style.paddingTop = w.wrapperTop + "px"), 0 <= w.wrapperBottom && (d.style.paddingBottom = w.wrapperBottom + "px"));
					var h = 0,
						i = 0;
					w.snapGrid = [], w.slidesGrid = [];
					for (var j = 0, k = 0; k < w.slides.length; k++) {
						var e = w.slides[k].getWidth(!0),
							l = w.slides[k].getHeight(!0);
						b.calculateHeight && (j = Math.max(j, l));
						var m = F ? e : l;
						if (b.centeredSlides) {
							var n = k === w.slides.length - 1 ? 0 : w.slides[k + 1].getWidth(!0),
								o = k === w.slides.length - 1 ? 0 : w.slides[k + 1].getHeight(!0),
								n = F ? n : o;
							if (m > C) {
								for (o = 0; o <= Math.floor(m / (C + w.wrapperLeft)); o++) w.snapGrid.push(0 === o ? h + w.wrapperLeft : h + w.wrapperLeft + C * o);
								w.slidesGrid.push(h + w.wrapperLeft)
							} else w.snapGrid.push(i), w.slidesGrid.push(i);
							i += m / 2 + n / 2
						} else {
							if (m > C)
								for (o = 0; o <= Math.floor(m / C); o++) w.snapGrid.push(h + C * o);
							else w.snapGrid.push(h);
							w.slidesGrid.push(h)
						}
						h += m, f += e, g += l
					}
					b.calculateHeight && (w.height = j), F ? (z = f + w.wrapperRight + w.wrapperLeft, d.style.width = f + "px", d.style.height = w.height + "px") : (z = g + w.wrapperTop + w.wrapperBottom, d.style.width = w.width + "px", d.style.height = g + "px")
				} else if (b.scrollContainer) d.style.width = "", d.style.height = "", j = w.slides[0].getWidth(!0), f = w.slides[0].getHeight(!0), z = F ? j : f, d.style.width = j + "px", d.style.height = f + "px", y = F ? j : f;
				else {
					if (b.calculateHeight) {
						for (f = j = 0, F || (w.container.style.height = ""), d.style.height = "", k = 0; k < w.slides.length; k++) w.slides[k].style.height = "", j = Math.max(w.slides[k].getHeight(!0), j), F || (f += w.slides[k].getHeight(!0));
						l = j, w.height = l, F ? f = l : (C = l, w.container.style.height = C + "px")
					} else l = F ? w.height : w.height / b.slidesPerView, f = F ? w.height : w.slides.length * l;
					for (e = F ? w.width / b.slidesPerView : w.width, j = F ? w.slides.length * e : w.width, y = F ? e : l, 0 < b.offsetSlidesBefore && (F ? w.wrapperLeft = y * b.offsetSlidesBefore : w.wrapperTop = y * b.offsetSlidesBefore), 0 < b.offsetSlidesAfter && (F ? w.wrapperRight = y * b.offsetSlidesAfter : w.wrapperBottom = y * b.offsetSlidesAfter), 0 < b.offsetPxBefore && (F ? w.wrapperLeft = b.offsetPxBefore : w.wrapperTop = b.offsetPxBefore), 0 < b.offsetPxAfter && (F ? w.wrapperRight = b.offsetPxAfter : w.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (F ? (w.wrapperLeft = (C - y) / 2, w.wrapperRight = (C - y) / 2) : (w.wrapperTop = (C - y) / 2, w.wrapperBottom = (C - y) / 2)), F ? (0 < w.wrapperLeft && (d.style.paddingLeft = w.wrapperLeft + "px"), 0 < w.wrapperRight && (d.style.paddingRight = w.wrapperRight + "px")) : (0 < w.wrapperTop && (d.style.paddingTop = w.wrapperTop + "px"), 0 < w.wrapperBottom && (d.style.paddingBottom = w.wrapperBottom + "px")), z = F ? j + w.wrapperRight + w.wrapperLeft : f + w.wrapperTop + w.wrapperBottom, d.style.width = j + "px", d.style.height = f + "px", h = 0, w.snapGrid = [], w.slidesGrid = [], k = 0; k < w.slides.length; k++) w.snapGrid.push(h), w.slidesGrid.push(h), h += y, w.slides[k].style.width = e + "px", w.slides[k].style.height = l + "px"
				}
				w.initialized ? (w.callPlugins("onInit"), b.onFirstInit && b.onInit(w)) : (w.callPlugins("onFirstInit"), b.onFirstInit && b.onFirstInit(w)), w.initialized = !0
			}
		}, w.reInit = function(a) {
			w.init(!0, a)
		}, w.resizeFix = function(a) {
			if (w.callPlugins("beforeResizeFix"), w.init(b.resizeReInit || a), b.freeMode) {
				if (w.getWrapperTranslate(F ? "x" : "y") < -d()) {
					a = F ? -d() : 0;
					var c = F ? 0 : -d();
					w.setWrapperTransition(0), w.setWrapperTranslate(a, c, 0)
				}
			} else b.loop ? w.swipeTo(w.activeLoopIndex, 0, !1) : w.swipeTo(w.activeIndex, 0, !1);
			w.callPlugins("afterResizeFix")
		}, w.destroy = function() {
			w.browser.ie10 ? (w.h.removeEventListener(w.wrapper, w.touchEvents.touchStart, o, !1), w.h.removeEventListener(document, w.touchEvents.touchMove, p, !1), w.h.removeEventListener(document, w.touchEvents.touchEnd, q, !1)) : (w.support.touch && (w.h.removeEventListener(w.wrapper, "touchstart", o, !1), w.h.removeEventListener(w.wrapper, "touchmove", p, !1), w.h.removeEventListener(w.wrapper, "touchend", q, !1)), b.simulateTouch && (w.h.removeEventListener(w.wrapper, "mousedown", o, !1), w.h.removeEventListener(document, "mousemove", p, !1), w.h.removeEventListener(document, "mouseup", q, !1))), b.autoResize && w.h.removeEventListener(window, "resize", w.resizeFix, !1), g(), b.paginationClickable && t(), b.mousewheelControl && w._wheelEvent && w.h.removeEventListener(w.container, w._wheelEvent, i, !1), b.keyboardControl && w.h.removeEventListener(document, "keydown", h, !1), b.autoplay && w.stopAutoplay(), w.callPlugins("onDestroy"), w = null
		}, b.grabCursor && (w.container.style.cursor = "move", w.container.style.cursor = "grab", w.container.style.cursor = "-moz-grab", w.container.style.cursor = "-webkit-grab"), w.allowSlideClick = !0, w.allowLinks = !0;
		var I, J, K, L = !1,
			M = !0;
		w.swipeNext = function(a) {
			!a && b.loop && w.fixLoop(), w.callPlugins("onSwipeNext");
			var c = a = w.getWrapperTranslate(F ? "x" : "y");
			if ("auto" == b.slidesPerView) {
				for (var e = 0; e < w.snapGrid.length; e++)
					if (-a >= w.snapGrid[e] && -a < w.snapGrid[e + 1]) {
						c = -w.snapGrid[e + 1];
						break
					}
			} else c = y * b.slidesPerGroup, c = -(Math.floor(Math.abs(a) / Math.floor(c)) * c + c);
			return c < -d() && (c = -d()), c == a ? !1 : (r(c, "next"), !0)
		}, w.swipePrev = function(a) {
			!a && b.loop && w.fixLoop(), !a && b.autoplay && w.stopAutoplay(), w.callPlugins("onSwipePrev"), a = Math.ceil(w.getWrapperTranslate(F ? "x" : "y"));
			var c;
			if ("auto" == b.slidesPerView) {
				c = 0;
				for (var d = 1; d < w.snapGrid.length; d++) {
					if (-a == w.snapGrid[d]) {
						c = -w.snapGrid[d - 1];
						break
					}
					if (-a > w.snapGrid[d] && -a < w.snapGrid[d + 1]) {
						c = -w.snapGrid[d];
						break
					}
				}
			} else c = y * b.slidesPerGroup, c *= -(Math.ceil(-a / c) - 1);
			return c > 0 && (c = 0), c == a ? !1 : (r(c, "prev"), !0)
		}, w.swipeReset = function() {
			w.callPlugins("onSwipeReset");
			var a = w.getWrapperTranslate(F ? "x" : "y"),
				c = y * b.slidesPerGroup;
			if (d(), "auto" == b.slidesPerView) {
				for (var e = c = 0; e < w.snapGrid.length; e++) {
					if (-a === w.snapGrid[e]) return;
					if (-a >= w.snapGrid[e] && -a < w.snapGrid[e + 1]) {
						c = 0 < w.positions.diff ? -w.snapGrid[e + 1] : -w.snapGrid[e];
						break
					}
				} - a >= w.snapGrid[w.snapGrid.length - 1] && (c = -w.snapGrid[w.snapGrid.length - 1]), a <= -d() && (c = -d())
			} else c = 0 > a ? Math.round(a / c) * c : 0;
			return b.scrollContainer && (c = 0 > a ? a : 0), c < -d() && (c = -d()), b.scrollContainer && C > y && (c = 0), c == a ? !1 : (r(c, "reset"), !0)
		}, w.swipeTo = function(a, c, e) {
			a = parseInt(a, 10), w.callPlugins("onSwipeTo", {
				index: a,
				speed: c
			}), b.loop && (a += w.loopedSlides);
			var f = w.getWrapperTranslate(F ? "x" : "y");
			if (!(a > w.slides.length - 1 || 0 > a)) {
				var g;
				return g = "auto" == b.slidesPerView ? -w.slidesGrid[a] : -a * y, g < -d() && (g = -d()), g == f ? !1 : (r(g, "to", {
					index: a,
					speed: c,
					runCallbacks: !1 === e ? !1 : !0
				}), !0)
			}
		}, w._queueStartCallbacks = !1, w._queueEndCallbacks = !1, w.updateActiveSlide = function(a) {
			if (w.initialized && 0 != w.slides.length) {
				if (w.previousIndex = w.activeIndex, a > 0 && (a = 0), "undefined" == typeof a && (a = w.getWrapperTranslate(F ? "x" : "y")), "auto" == b.slidesPerView) {
					if (w.activeIndex = w.slidesGrid.indexOf(-a), 0 > w.activeIndex) {
						for (var c = 0; c < w.slidesGrid.length - 1 && !(-a > w.slidesGrid[c] && -a < w.slidesGrid[c + 1]); c++);
						var d = Math.abs(w.slidesGrid[c] + a),
							e = Math.abs(w.slidesGrid[c + 1] + a);
						w.activeIndex = e >= d ? c : c + 1
					}
				} else w.activeIndex = b.visibilityFullFit ? Math.ceil(-a / y) : Math.round(-a / y); if (w.activeIndex == w.slides.length && (w.activeIndex = w.slides.length - 1), 0 > w.activeIndex && (w.activeIndex = 0), w.slides[w.activeIndex]) {
					for (w.calcVisibleSlides(a), d = RegExp("\\s*" + b.slideActiveClass), e = RegExp("\\s*" + b.slideVisibleClass), c = 0; c < w.slides.length; c++) w.slides[c].className = w.slides[c].className.replace(d, "").replace(e, ""), 0 <= w.visibleSlides.indexOf(w.slides[c]) && (w.slides[c].className += " " + b.slideVisibleClass);
					w.slides[w.activeIndex].className += " " + b.slideActiveClass, b.loop ? (c = w.loopedSlides, w.activeLoopIndex = w.activeIndex - c, w.activeLoopIndex >= w.slides.length - 2 * c && (w.activeLoopIndex = w.slides.length - 2 * c - w.activeLoopIndex), 0 > w.activeLoopIndex && (w.activeLoopIndex = w.slides.length - 2 * c + w.activeLoopIndex)) : w.activeLoopIndex = w.activeIndex, b.pagination && w.updatePagination(a)
				}
			}
		}, w.createPagination = function(a) {
			b.paginationClickable && w.paginationButtons && t();
			var d = "",
				e = w.slides.length;
			b.loop && (e -= 2 * w.loopedSlides);
			for (var f = 0; e > f; f++) d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
			if (w.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], w.paginationContainer.innerHTML = d, w.paginationButtons = [], document.querySelectorAll ? w.paginationButtons = w.paginationContainer.querySelectorAll("." + b.paginationElementClass) : window.jQuery && (w.paginationButtons = c(w.paginationContainer).find("." + b.paginationElementClass)), a || w.updatePagination(), w.callPlugins("onCreatePagination"), b.paginationClickable)
				for (a = w.paginationButtons, d = 0; d < a.length; d++) w.h.addEventListener(a[d], "click", u, !1)
		}, w.updatePagination = function(a) {
			if (b.pagination && !(1 > w.slides.length)) {
				if (document.querySelectorAll) var d = w.paginationContainer.querySelectorAll("." + b.paginationActiveClass);
				else window.jQuery && (d = c(w.paginationContainer).find("." + b.paginationActiveClass)); if (d && (d = w.paginationButtons, 0 != d.length)) {
					for (var e = 0; e < d.length; e++) d[e].className = b.paginationElementClass;
					var f = b.loop ? w.loopedSlides : 0;
					if (b.paginationAsRange) {
						for (w.visibleSlides || w.calcVisibleSlides(a), a = [], e = 0; e < w.visibleSlides.length; e++) {
							var g = w.slides.indexOf(w.visibleSlides[e]) - f;
							b.loop && 0 > g && (g = w.slides.length - 2 * w.loopedSlides + g), b.loop && g >= w.slides.length - 2 * w.loopedSlides && (g = w.slides.length - 2 * w.loopedSlides - g, g = Math.abs(g)), a.push(g)
						}
						for (e = 0; e < a.length; e++) d[a[e]] && (d[a[e]].className += " " + b.paginationVisibleClass);
						b.loop ? d[w.activeLoopIndex].className += " " + b.paginationActiveClass : d[w.activeIndex].className += " " + b.paginationActiveClass
					} else b.loop ? d[w.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass : d[w.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass
				}
			}
		}, w.calcVisibleSlides = function(a) {
			var c = [],
				d = 0,
				e = 0,
				f = 0;
			F && 0 < w.wrapperLeft && (a += w.wrapperLeft), !F && 0 < w.wrapperTop && (a += w.wrapperTop);
			for (var g = 0; g < w.slides.length; g++) {
				var d = d + e,
					e = "auto" == b.slidesPerView ? F ? w.h.getWidth(w.slides[g], !0) : w.h.getHeight(w.slides[g], !0) : y,
					f = d + e,
					h = !1;
				b.visibilityFullFit ? (d >= -a && -a + C >= f && (h = !0), -a >= d && f >= -a + C && (h = !0)) : (f > -a && -a + C >= f && (h = !0), d >= -a && -a + C > d && (h = !0), -a > d && f > -a + C && (h = !0)), h && c.push(w.slides[g])
			}
			0 == c.length && (c = [w.slides[w.activeIndex]]), w.visibleSlides = c
		}, w.autoPlayIntervalId = void 0, w.startAutoplay = function() {
			return "undefined" != typeof w.autoPlayIntervalId ? !1 : (b.autoplay && !b.loop && (w.autoPlayIntervalId = setInterval(function() {
				w.swipeNext(!0) || w.swipeTo(0)
			}, b.autoplay)), b.autoplay && b.loop && (w.autoPlayIntervalId = setInterval(function() {
				w.swipeNext()
			}, b.autoplay)), void w.callPlugins("onAutoplayStart"))
		}, w.stopAutoplay = function() {
			w.autoPlayIntervalId && clearInterval(w.autoPlayIntervalId), w.autoPlayIntervalId = void 0, w.callPlugins("onAutoplayStop")
		}, w.loopCreated = !1, w.removeLoopedSlides = function() {
			if (w.loopCreated)
				for (var a = 0; a < w.slides.length; a++)!0 === w.slides[a].getData("looped") && w.wrapper.removeChild(w.slides[a])
		}, w.createLoop = function() {
			if (0 != w.slides.length) {
				w.loopedSlides = b.slidesPerView + b.loopAdditionalSlides;
				for (var a = "", c = "", d = 0; d < w.loopedSlides; d++) a += w.slides[d].outerHTML;
				for (d = w.slides.length - w.loopedSlides; d < w.slides.length; d++) c += w.slides[d].outerHTML;
				for (x.innerHTML = c + x.innerHTML + a, w.loopCreated = !0, w.calcSlides(), d = 0; d < w.slides.length; d++)(d < w.loopedSlides || d >= w.slides.length - w.loopedSlides) && w.slides[d].setData("looped", !0);
				w.callPlugins("onCreateLoop")
			}
		}, w.fixLoop = function() {
			if (w.activeIndex < w.loopedSlides) {
				var a = w.slides.length - 3 * w.loopedSlides + w.activeIndex;
				w.swipeTo(a, 0, !1)
			} else w.activeIndex > w.slides.length - 2 * b.slidesPerView && (a = -w.slides.length + w.activeIndex + w.loopedSlides, w.swipeTo(a, 0, !1))
		}, w.loadSlides = function() {
			var a = "";
			w.activeLoaderIndex = 0;
			for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) a = "outer" == b.loader.slidesHTMLType ? a + c[e] : a + ("<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">");
			w.wrapper.innerHTML = a, w.calcSlides(!0), b.loader.loadAllSlides || w.wrapperTransitionEnd(w.reloadSlides, !0)
		}, w.reloadSlides = function() {
			var a = b.loader.slides,
				c = parseInt(w.activeSlide().data("swiperindex"), 10);
			if (!(0 > c || c > a.length - 1)) {
				w.activeLoaderIndex = c;
				var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
					e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
				if (c > 0 && (c = -y * (c - d), F ? w.setWrapperTranslate(c, 0, 0) : w.setWrapperTranslate(0, c, 0), w.setWrapperTransition(0)), "reload" === b.loader.logic) {
					for (var f = w.wrapper.innerHTML = "", c = d; e >= c; c++) f += "outer" == b.loader.slidesHTMLType ? a[c] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + c + '">' + a[c] + "</" + b.slideElement + ">";
					w.wrapper.innerHTML = f
				} else {
					for (var f = 1e3, g = 0, c = 0; c < w.slides.length; c++) {
						var h = w.slides[c].data("swiperindex");
						d > h || h > e ? w.wrapper.removeChild(w.slides[c]) : (f = Math.min(h, f), g = Math.max(h, g))
					}
					for (c = d; e >= c; c++) f > c && (d = document.createElement(b.slideElement), d.className = b.slideClass, d.setAttribute("data-swiperindex", c), d.innerHTML = a[c], w.wrapper.insertBefore(d, w.wrapper.firstChild)), c > g && (d = document.createElement(b.slideElement), d.className = b.slideClass, d.setAttribute("data-swiperindex", c), d.innerHTML = a[c], w.wrapper.appendChild(d))
				}
				w.reInit(!0)
			}
		}, w.calcSlides(), 0 < b.loader.slides.length && 0 == w.slides.length && w.loadSlides(), b.loop && w.createLoop(), w.init(), e(), b.pagination && b.createPagination && w.createPagination(!0), b.loop || 0 < b.initialSlide ? w.swipeTo(b.initialSlide, 0, !1) : w.updateActiveSlide(0), b.autoplay && w.startAutoplay()
	}
};
Swiper.prototype = {
	plugins: {},
	wrapperTransitionEnd: function(a, b) {
		function c() {
			if (a(d), d.params.queueEndCallbacks && (d._queueEndCallbacks = !1), !b)
				for (var g = 0; g < f.length; g++) d.h.removeEventListener(e, f[g], c, !1)
		}
		var d = this,
			e = d.wrapper,
			f = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
		if (a)
			for (var g = 0; g < f.length; g++) d.h.addEventListener(e, f[g], c, !1)
	},
	getWrapperTranslate: function(a) {
		var b, c, d = this.wrapper,
			e = window.WebKitCSSMatrix ? new WebKitCSSMatrix(window.getComputedStyle(d, null).webkitTransform) : window.getComputedStyle(d, null).MozTransform || window.getComputedStyle(d, null).OTransform || window.getComputedStyle(d, null).MsTransform || window.getComputedStyle(d, null).msTransform || window.getComputedStyle(d, null).transform || window.getComputedStyle(d, null).getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
		return b = e.toString().split(","), this.params.useCSS3Transforms ? ("x" == a && (c = 16 == b.length ? parseFloat(b[12]) : window.WebKitCSSMatrix ? e.m41 : parseFloat(b[4])), "y" == a && (c = 16 == b.length ? parseFloat(b[13]) : window.WebKitCSSMatrix ? e.m42 : parseFloat(b[5]))) : ("x" == a && (c = parseFloat(d.style.left, 10) || 0), "y" == a && (c = parseFloat(d.style.top, 10) || 0)), c || 0
	},
	setWrapperTranslate: function(a, b, c) {
		var d = this.wrapper.style;
		a = a || 0, b = b || 0, c = c || 0, this.params.useCSS3Transforms ? this.support.transforms3d ? d.webkitTransform = d.MsTransform = d.msTransform = d.MozTransform = d.OTransform = d.transform = "translate3d(" + a + "px, " + b + "px, " + c + "px)" : (d.webkitTransform = d.MsTransform = d.msTransform = d.MozTransform = d.OTransform = d.transform = "translate(" + a + "px, " + b + "px)", this.support.transforms || (d.left = a + "px", d.top = b + "px")) : (d.left = a + "px", d.top = b + "px"), this.callPlugins("onSetWrapperTransform", {
			x: a,
			y: b,
			z: c
		})
	},
	setWrapperTransition: function(a) {
		var b = this.wrapper.style;
		b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
			duration: a
		})
	},
	h: {
		getWidth: function(a, b) {
			var c = window.getComputedStyle(a, null).getPropertyValue("width"),
				d = parseFloat(c);
			return (isNaN(d) || 0 < c.indexOf("%")) && (d = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (d += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), d
		},
		getHeight: function(a, b) {
			if (b) return a.offsetHeight;
			var c = window.getComputedStyle(a, null).getPropertyValue("height"),
				d = parseFloat(c);
			return (isNaN(d) || 0 < c.indexOf("%")) && (d = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (d += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), d
		},
		getOffset: function(a) {
			var b = a.getBoundingClientRect(),
				c = document.body,
				d = a.clientTop || c.clientTop || 0,
				c = a.clientLeft || c.clientLeft || 0,
				e = window.pageYOffset || a.scrollTop;
			return a = window.pageXOffset || a.scrollLeft, document.documentElement && !window.pageYOffset && (e = document.documentElement.scrollTop, a = document.documentElement.scrollLeft), {
				top: b.top + e - d,
				left: b.left + a - c
			}
		},
		windowWidth: function() {
			return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0
		},
		windowHeight: function() {
			return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0
		},
		windowScroll: function() {
			return "undefined" != typeof pageYOffset ? {
				left: window.pageXOffset,
				top: window.pageYOffset
			} : document.documentElement ? {
				left: document.documentElement.scrollLeft,
				top: document.documentElement.scrollTop
			} : void 0
		},
		addEventListener: function(a, b, c, d) {
			a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		removeEventListener: function(a, b, c, d) {
			a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
		}
	},
	setTransform: function(a, b) {
		var c = a.style;
		c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b
	},
	setTranslate: function(a, b) {
		var c = a.style,
			d = b.x || 0,
			e = b.y || 0,
			f = b.z || 0;
		c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = this.support.transforms3d ? "translate3d(" + d + "px," + e + "px," + f + "px)" : "translate(" + d + "px," + e + "px)", this.support.transforms || (c.left = d + "px", c.top = e + "px")
	},
	setTransition: function(a, b) {
		var c = a.style;
		c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms"
	},
	support: {
		touch: window.Modernizr && !0 === Modernizr.touch || function() {
			return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
		}(),
		transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
			var a = document.createElement("div");
			return "webkitPerspective" in a.style || "MozPerspective" in a.style || "OPerspective" in a.style || "MsPerspective" in a.style || "perspective" in a.style
		}(),
		transforms: window.Modernizr && !0 === Modernizr.csstransforms || function() {
			var a = document.createElement("div").style;
			return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a
		}(),
		transitions: window.Modernizr && !0 === Modernizr.csstransitions || function() {
			var a = document.createElement("div").style;
			return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a
		}()
	},
	browser: {
		ie8: function() {
			var a = -1;
			return "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1)), -1 != a && 9 > a
		}(),
		ie10: window.navigator.msPointerEnabled
	}
}, (window.jQuery || window.Zepto) && function(a) {
	a.fn.swiper = function(b) {
		return b = new Swiper(a(this)[0], b), a(this).data("swiper", b), b
	}
}(window.jQuery || window.Zepto), "undefined" != typeof module && (module.exports = Swiper), $(document).ready(function() {
	$("html").queryLoader2({
		barColor: "#fee6ce",
		backgroundColor: "#513A2A",
		percentage: !1,
		barHeight: 3,
		completeAnimation: "grow"
	}), $.fn.fullpage({
		resize: !1,
		autoScrolling: !0,
		navigation: !0,
		navigationPosition: "right",
		keyboardScrolling: !0,
		scrollingSpeed: 600,
		afterLoad: function(a, b) {
			2 == b && $(".second .content, .second .country-group").addClass("active"), 3 == b && $(".third .content").addClass("active"), 4 == b && $(".fourth .content").addClass("active"), 5 == b && $(".fifth .content").addClass("active"), 6 == b && $(".footer .content h2, .footer .ny, .footer .la, .footer .social, .footer .credits").addClass("active")
		}
	}), $("body").addClass("js");
	var a = $("body"),
		b = $(".wrapper"),
		c = $(".toggle-nav");
	c.click(function(d) {
		d.preventDefault(), a.toggleClass("active"), c.toggleClass("active"), b.toggleClass("active")
	});
	var d = new Swiper(".swiper-container", {
		loop: !0,
		paginationClickable: !0,
		slidesPerView: 4,
		slidesPerGroup: 1,
		autoplay: 4e3
	});
	$(".arrow-left").on("click", function(a) {
		a.preventDefault(), d.swipePrev()
	}), $(".arrow-right").on("click", function(a) {
		a.preventDefault(), d.swipeNext()
	})
});
