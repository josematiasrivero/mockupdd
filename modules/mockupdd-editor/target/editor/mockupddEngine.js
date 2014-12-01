(function() {
  var b = !1, e = /xyz/.test(function() {
    xyz
  }) ? /\b_super\b/ : /.*/;
  this.Class = function() {
  };
  Class.extend = function(m) {
    function q() {
      !b && this.init && this.init.apply(this, arguments)
    }
    var B = this.prototype;
    b = !0;
    var I = new this;
    b = !1;
    for(var w in m) {
      I[w] = "function" == typeof m[w] && "function" == typeof B[w] && e.test(m[w]) ? function(b, e) {
        return function() {
          var m = this._super;
          this._super = B[b];
          var q = e.apply(this, arguments);
          this._super = m;
          return q
        }
      }(w, m[w]) : m[w]
    }
    q.prototype = I;
    q.prototype.constructor = q;
    q.extend = arguments.callee;
    return q
  }
})();
(function(b, e) {
  function m(a) {
    var c = a.length, k = d.type(a);
    return d.isWindow(a) ? !1 : 1 === a.nodeType && c ? !0 : "array" === k || "function" !== k && (0 === c || "number" == typeof c && 0 < c && c - 1 in a)
  }
  function q(a) {
    var c = lb[a] = {};
    return d.each(a.match(U) || [], function(a, d) {
      c[d] = !0
    }), c
  }
  function B(a, c, k, r) {
    if(d.acceptData(a)) {
      var p, b, g = d.expando, x = "string" == typeof c, f = a.nodeType, l = f ? d.cache : a, h = f ? a[g] : a[g] && g;
      if(h && l[h] && (r || l[h].data) || !x || k !== e) {
        return h || (f ? a[g] = h = ea.pop() || d.guid++ : h = g), l[h] || (l[h] = {}, f || (l[h].toJSON = d.noop)), ("object" == typeof c || "function" == typeof c) && (r ? l[h] = d.extend(l[h], c) : l[h].data = d.extend(l[h].data, c)), p = l[h], r || (p.data || (p.data = {}), p = p.data), k !== e && (p[d.camelCase(c)] = k), x ? (b = p[c], null == b && (b = p[d.camelCase(c)])) : b = p, b
      }
    }
  }
  function I(a, c, k) {
    if(d.acceptData(a)) {
      var r, p, b, g = a.nodeType, e = g ? d.cache : a, f = g ? a[d.expando] : d.expando;
      if(e[f]) {
        if(c && (r = k ? e[f] : e[f].data)) {
          d.isArray(c) ? c = c.concat(d.map(c, d.camelCase)) : c in r ? c = [c] : (c = d.camelCase(c), c = c in r ? [c] : c.split(" "));
          p = 0;
          for(b = c.length;b > p;p++) {
            delete r[c[p]]
          }
          if(!(k ? H : d.isEmptyObject)(r)) {
            return
          }
        }
        (k || (delete e[f].data, H(e[f]))) && (g ? d.cleanData([a], !0) : d.support.deleteExpando || e != e.window ? delete e[f] : e[f] = null)
      }
    }
  }
  function w(a, c, k) {
    if(k === e && 1 === a.nodeType) {
      var r = "data-" + c.replace(Lb, "-$1").toLowerCase();
      if(k = a.getAttribute(r), "string" == typeof k) {
        try {
          k = "true" === k ? !0 : "false" === k ? !1 : "null" === k ? null : +k + "" === k ? +k : Mb.test(k) ? d.parseJSON(k) : k
        }catch(p) {
        }
        d.data(a, c, k)
      }else {
        k = e
      }
    }
    return k
  }
  function H(a) {
    for(var c in a) {
      if(("data" !== c || !d.isEmptyObject(a[c])) && "toJSON" !== c) {
        return!1
      }
    }
    return!0
  }
  function T() {
    return!0
  }
  function L() {
    return!1
  }
  function qa(a, c) {
    do {
      a = a[c]
    }while(a && 1 !== a.nodeType);
    return a
  }
  function ra(a, c, k) {
    if(c = c || 0, d.isFunction(c)) {
      return d.grep(a, function(a, d) {
        return!!c.call(a, d, a) === k
      })
    }
    if(c.nodeType) {
      return d.grep(a, function(a) {
        return a === c === k
      })
    }
    if("string" == typeof c) {
      var r = d.grep(a, function(a) {
        return 1 === a.nodeType
      });
      if(Nb.test(c)) {
        return d.filter(c, r, !k)
      }
      c = d.filter(c, r)
    }
    return d.grep(a, function(a) {
      return 0 <= d.inArray(a, c) === k
    })
  }
  function sa(a) {
    var c = mb.split("|");
    a = a.createDocumentFragment();
    if(a.createElement) {
      for(;c.length;) {
        a.createElement(c.pop())
      }
    }
    return a
  }
  function ua(a) {
    var c = a.getAttributeNode("type");
    return a.type = (c && c.specified) + "/" + a.type, a
  }
  function ya(a) {
    var c = Ob.exec(a.type);
    return c ? a.type = c[1] : a.removeAttribute("type"), a
  }
  function ka(a, c) {
    for(var k, r = 0;null != (k = a[r]);r++) {
      d._data(k, "globalEval", !c || d._data(c[r], "globalEval"))
    }
  }
  function za(a, c) {
    if(1 === c.nodeType && d.hasData(a)) {
      var k, r, p;
      r = d._data(a);
      var b = d._data(c, r), g = r.events;
      if(g) {
        for(k in delete b.handle, b.events = {}, g) {
          for(r = 0, p = g[k].length;p > r;r++) {
            d.event.add(c, k, g[k][r])
          }
        }
      }
      b.data && (b.data = d.extend({}, b.data))
    }
  }
  function z(a, c) {
    var k, r, p = 0, b = a.getElementsByTagName !== e ? a.getElementsByTagName(c || "*") : a.querySelectorAll !== e ? a.querySelectorAll(c || "*") : e;
    if(!b) {
      for(b = [], k = a.childNodes || a;null != (r = k[p]);p++) {
        !c || d.nodeName(r, c) ? b.push(r) : d.merge(b, z(r, c))
      }
    }
    return c === e || c && d.nodeName(a, c) ? d.merge([a], b) : b
  }
  function Ha(a) {
    Ua.test(a.type) && (a.defaultChecked = a.checked)
  }
  function Ia(a, c) {
    if(c in a) {
      return c
    }
    for(var d = c.charAt(0).toUpperCase() + c.slice(1), r = c, p = nb.length;p--;) {
      if(c = nb[p] + d, c in a) {
        return c
      }
    }
    return r
  }
  function V(a, c) {
    return a = c || a, "none" === d.css(a, "display") || !d.contains(a.ownerDocument, a)
  }
  function h(a, c) {
    for(var k, r = [], p = 0, b = a.length;b > p;p++) {
      k = a[p], k.style && (r[p] = d._data(k, "olddisplay"), c ? (r[p] || "none" !== k.style.display || (k.style.display = ""), "" === k.style.display && V(k) && (r[p] = d._data(k, "olddisplay", Aa(k.nodeName)))) : r[p] || V(k) || d._data(k, "olddisplay", d.css(k, "display")))
    }
    for(p = 0;b > p;p++) {
      k = a[p], k.style && (c && "none" !== k.style.display && "" !== k.style.display || (k.style.display = c ? r[p] || "" : "none"))
    }
    return a
  }
  function C(a, c, d) {
    return(a = Pb.exec(c)) ? Math.max(0, a[1] - (d || 0)) + (a[2] || "px") : c
  }
  function Ba(a, c, k, r, p) {
    c = k === (r ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
    for(var b = 0;4 > c;c += 2) {
      "margin" === k && (b += d.css(a, k + R[c], !0, p)), r ? ("content" === k && (b -= d.css(a, "padding" + R[c], !0, p)), "margin" !== k && (b -= d.css(a, "border" + R[c] + "Width", !0, p))) : (b += d.css(a, "padding" + R[c], !0, p), "padding" !== k && (b += d.css(a, "border" + R[c] + "Width", !0, p)))
    }
    return b
  }
  function W(a, c, k) {
    var r = !0, p = "width" === c ? a.offsetWidth : a.offsetHeight, b = X(a), g = d.support.boxSizing && "border-box" === d.css(a, "boxSizing", !1, b);
    if(0 >= p || null == p) {
      if(p = aa(a, c, b), (0 > p || null == p) && (p = a.style[c]), Ja.test(p)) {
        return p
      }
      r = g && (d.support.boxSizingReliable || p === a.style[c]);
      p = parseFloat(p) || 0
    }
    return p + Ba(a, c, k || (g ? "border" : "content"), r, b) + "px"
  }
  function Aa(a) {
    var c = v, k = ob[a];
    return k || (k = Ca(a, c), "none" !== k && k || (Da = (Da || d("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(c.documentElement), c = (Da[0].contentWindow || Da[0].contentDocument).document, c.write("<!doctype html><html><body>"), c.close(), k = Ca(a, c), Da.detach()), ob[a] = k), k
  }
  function Ca(a, c) {
    var k = d(c.createElement(a)).appendTo(c.body), r = d.css(k[0], "display");
    return k.remove(), r
  }
  function Y(a, c, k, r) {
    var p;
    if(d.isArray(c)) {
      d.each(c, function(c, d) {
        k || Qb.test(a) ? r(a, d) : Y(a + "[" + ("object" == typeof d ? c : "") + "]", d, k, r)
      })
    }else {
      if(k || "object" !== d.type(c)) {
        r(a, c)
      }else {
        for(p in c) {
          Y(a + "[" + p + "]", c[p], k, r)
        }
      }
    }
  }
  function ba(a) {
    return function(c, k) {
      "string" != typeof c && (k = c, c = "*");
      var r, p = 0, b = c.toLowerCase().match(U) || [];
      if(d.isFunction(k)) {
        for(;r = b[p++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (a[r] = a[r] || []).unshift(k)) : (a[r] = a[r] || []).push(k)
        }
      }
    }
  }
  function Ka(a, c, k, r) {
    function p(x) {
      var f;
      return b[x] = !0, d.each(a[x] || [], function(a, d) {
        var x = d(c, k, r);
        return"string" != typeof x || g || b[x] ? g ? !(f = x) : e : (c.dataTypes.unshift(x), p(x), !1)
      }), f
    }
    var b = {}, g = a === Va;
    return p(c.dataTypes[0]) || !b["*"] && p("*")
  }
  function Ea(a, c) {
    var k, r, p = d.ajaxSettings.flatOptions || {};
    for(k in c) {
      c[k] !== e && ((p[k] ? a : r || (r = {}))[k] = c[k])
    }
    return r && d.extend(!0, a, r), a
  }
  function ca() {
    try {
      return new b.XMLHttpRequest
    }catch(a) {
    }
  }
  function La() {
    return setTimeout(function() {
      la = e
    }), la = d.now()
  }
  function Wa(a, c) {
    d.each(c, function(c, d) {
      for(var p = (Fa[c] || []).concat(Fa["*"]), b = 0, g = p.length;g > b && !p[b].call(a, c, d);b++) {
      }
    })
  }
  function g(a, c, k) {
    var r, b = 0, g = Ma.length, e = d.Deferred().always(function() {
      delete x.elem
    }), x = function() {
      if(r) {
        return!1
      }
      for(var c = la || La(), c = Math.max(0, l.startTime + l.duration - c), d = 1 - (c / l.duration || 0), k = 0, b = l.tweens.length;b > k;k++) {
        l.tweens[k].run(d)
      }
      return e.notifyWith(a, [l, d, c]), 1 > d && b ? c : (e.resolveWith(a, [l]), !1)
    }, l = e.promise({elem:a, props:d.extend({}, c), opts:d.extend(!0, {specialEasing:{}}, k), originalProperties:c, originalOptions:k, startTime:la || La(), duration:k.duration, tweens:[], createTween:function(c, k) {
      var r = d.Tween(a, l.opts, c, k, l.opts.specialEasing[c] || l.opts.easing);
      return l.tweens.push(r), r
    }, stop:function(c) {
      var d = 0, k = c ? l.tweens.length : 0;
      if(r) {
        return this
      }
      for(r = !0;k > d;d++) {
        l.tweens[d].run(1)
      }
      return c ? e.resolveWith(a, [l, c]) : e.rejectWith(a, [l, c]), this
    }});
    k = l.props;
    for(f(k, l.opts.specialEasing);g > b;b++) {
      if(c = Ma[b].call(l, a, k, l.opts)) {
        return c
      }
    }
    return Wa(l, k), d.isFunction(l.opts.start) && l.opts.start.call(a, l), d.fx.timer(d.extend(x, {elem:a, anim:l, queue:l.opts.queue})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }
  function f(a, c) {
    var k, r, b, g, e;
    for(k in a) {
      if(r = d.camelCase(k), b = c[r], g = a[k], d.isArray(g) && (b = g[1], g = a[k] = g[0]), k !== r && (a[r] = g, delete a[k]), e = d.cssHooks[r], e && "expand" in e) {
        for(k in g = e.expand(g), delete a[r], g) {
          k in a || (a[k] = g[k], c[k] = b)
        }
      }else {
        c[r] = b
      }
    }
  }
  function l(a, c, d, r, b) {
    return new l.prototype.init(a, c, d, r, b)
  }
  function n(a, c) {
    var d, r = {height:a}, b = 0;
    for(c = c ? 1 : 0;4 > b;b += 2 - c) {
      d = R[b], r["margin" + d] = r["padding" + d] = a
    }
    return c && (r.opacity = r.width = a), r
  }
  function t(a) {
    return d.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  var y, u, v = b.document, O = b.location, M = b.jQuery, Rb = b.$, fa = {}, ea = [], pb = ea.concat, Xa = ea.push, ga = ea.slice, qb = ea.indexOf, Sb = fa.toString, Ya = fa.hasOwnProperty, Za = "1.9.0".trim, d = function(a, c) {
    return new d.fn.init(a, c, y)
  }, Na = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = /\S+/g, Tb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Ub = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, rb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Vb = /^[\],:{}\s]*$/, Wb = /(?:^|:|,)(?:\s*\[)+/g, Xb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, Yb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, Zb = /^-ms-/, $b = /-([\da-z])/gi, ac = function(a, c) {
    return c.toUpperCase()
  }, Oa = function() {
    v.addEventListener ? (v.removeEventListener("DOMContentLoaded", Oa, !1), d.ready()) : "complete" === v.readyState && (v.detachEvent("onreadystatechange", Oa), d.ready())
  };
  d.fn = d.prototype = {jquery:"1.9.0", constructor:d, init:function(a, c, k) {
    var r, b;
    if(!a) {
      return this
    }
    if("string" == typeof a) {
      if(r = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Ub.exec(a), !r || !r[1] && c) {
        return!c || c.jquery ? (c || k).find(a) : this.constructor(c).find(a)
      }
      if(r[1]) {
        if(c = c instanceof d ? c[0] : c, d.merge(this, d.parseHTML(r[1], c && c.nodeType ? c.ownerDocument || c : v, !0)), rb.test(r[1]) && d.isPlainObject(c)) {
          for(r in c) {
            d.isFunction(this[r]) ? this[r](c[r]) : this.attr(r, c[r])
          }
        }
        return this
      }
      if(b = v.getElementById(r[2]), b && b.parentNode) {
        if(b.id !== r[2]) {
          return k.find(a)
        }
        this.length = 1;
        this[0] = b
      }
      return this.context = v, this.selector = a, this
    }
    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : d.isFunction(a) ? k.ready(a) : (a.selector !== e && (this.selector = a.selector, this.context = a.context), d.makeArray(a, this))
  }, selector:"", length:0, size:function() {
    return this.length
  }, toArray:function() {
    return ga.call(this)
  }, get:function(a) {
    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
  }, pushStack:function(a) {
    a = d.merge(this.constructor(), a);
    return a.prevObject = this, a.context = this.context, a
  }, each:function(a, c) {
    return d.each(this, a, c)
  }, ready:function(a) {
    return d.ready.promise().done(a), this
  }, slice:function() {
    return this.pushStack(ga.apply(this, arguments))
  }, first:function() {
    return this.eq(0)
  }, last:function() {
    return this.eq(-1)
  }, eq:function(a) {
    var c = this.length;
    a = +a + (0 > a ? c : 0);
    return this.pushStack(0 <= a && c > a ? [this[a]] : [])
  }, map:function(a) {
    return this.pushStack(d.map(this, function(c, d) {
      return a.call(c, d, c)
    }))
  }, end:function() {
    return this.prevObject || this.constructor(null)
  }, push:Xa, sort:[].sort, splice:[].splice};
  d.fn.init.prototype = d.fn;
  d.extend = d.fn.extend = function() {
    var a, c, k, r, b, g, D = arguments[0] || {}, x = 1, f = arguments.length, l = !1;
    "boolean" == typeof D && (l = D, D = arguments[1] || {}, x = 2);
    "object" == typeof D || d.isFunction(D) || (D = {});
    for(f === x && (D = this, --x);f > x;x++) {
      if(null != (a = arguments[x])) {
        for(c in a) {
          k = D[c], r = a[c], D !== r && (l && r && (d.isPlainObject(r) || (b = d.isArray(r))) ? (b ? (b = !1, g = k && d.isArray(k) ? k : []) : g = k && d.isPlainObject(k) ? k : {}, D[c] = d.extend(l, g, r)) : r !== e && (D[c] = r))
        }
      }
    }
    return D
  };
  d.extend({noConflict:function(a) {
    return b.$ === d && (b.$ = Rb), a && b.jQuery === d && (b.jQuery = M), d
  }, isReady:!1, readyWait:1, holdReady:function(a) {
    a ? d.readyWait++ : d.ready(!0)
  }, ready:function(a) {
    if(!0 === a ? !--d.readyWait : !d.isReady) {
      if(!v.body) {
        return setTimeout(d.ready)
      }
      d.isReady = !0;
      !0 !== a && 0 < --d.readyWait || (u.resolveWith(v, [d]), d.fn.trigger && d(v).trigger("ready").off("ready"))
    }
  }, isFunction:function(a) {
    return"function" === d.type(a)
  }, isArray:Array.isArray || function(a) {
    return"array" === d.type(a)
  }, isWindow:function(a) {
    return null != a && a == a.window
  }, isNumeric:function(a) {
    return!isNaN(parseFloat(a)) && isFinite(a)
  }, type:function(a) {
    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? fa[Sb.call(a)] || "object" : typeof a
  }, isPlainObject:function(a) {
    if(!a || "object" !== d.type(a) || a.nodeType || d.isWindow(a)) {
      return!1
    }
    try {
      if(a.constructor && !Ya.call(a, "constructor") && !Ya.call(a.constructor.prototype, "isPrototypeOf")) {
        return!1
      }
    }catch(c) {
      return!1
    }
    for(var k in a) {
    }
    return k === e || Ya.call(a, k)
  }, isEmptyObject:function(a) {
    for(var c in a) {
      return!1
    }
    return!0
  }, error:function(a) {
    throw Error(a);
  }, parseHTML:function(a, c, k) {
    if(!a || "string" != typeof a) {
      return null
    }
    "boolean" == typeof c && (k = c, c = !1);
    c = c || v;
    var r = rb.exec(a);
    k = !k && [];
    return r ? [c.createElement(r[1])] : (r = d.buildFragment([a], c, k), k && d(k).remove(), d.merge([], r.childNodes))
  }, parseJSON:function(a) {
    return b.JSON && b.JSON.parse ? b.JSON.parse(a) : null === a ? a : "string" == typeof a && (a = d.trim(a), a && Vb.test(a.replace(Xb, "@").replace(Yb, "]").replace(Wb, ""))) ? Function("return " + a)() : (d.error("Invalid JSON: " + a), e)
  }, parseXML:function(a) {
    var c, k;
    if(!a || "string" != typeof a) {
      return null
    }
    try {
      b.DOMParser ? (k = new DOMParser, c = k.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
    }catch(r) {
      c = e
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + a), c
  }, noop:function() {
  }, globalEval:function(a) {
    a && d.trim(a) && (b.execScript || function(a) {
      b.eval.call(b, a)
    })(a)
  }, camelCase:function(a) {
    return a.replace(Zb, "ms-").replace($b, ac)
  }, nodeName:function(a, c) {
    return a.nodeName && a.nodeName.toLowerCase() === c.toLowerCase()
  }, each:function(a, c, d) {
    var r, b = 0, g = a.length, e = m(a);
    if(d) {
      if(e) {
        for(;g > b && (r = c.apply(a[b], d), !1 !== r);b++) {
        }
      }else {
        for(b in a) {
          if(r = c.apply(a[b], d), !1 === r) {
            break
          }
        }
      }
    }else {
      if(e) {
        for(;g > b && (r = c.call(a[b], b, a[b]), !1 !== r);b++) {
        }
      }else {
        for(b in a) {
          if(r = c.call(a[b], b, a[b]), !1 === r) {
            break
          }
        }
      }
    }
    return a
  }, trim:Za && !Za.call("\ufeff\u00a0") ? function(a) {
    return null == a ? "" : Za.call(a)
  } : function(a) {
    return null == a ? "" : (a + "").replace(Tb, "")
  }, makeArray:function(a, c) {
    var k = c || [];
    return null != a && (m(Object(a)) ? d.merge(k, "string" == typeof a ? [a] : a) : Xa.call(k, a)), k
  }, inArray:function(a, c, d) {
    var b;
    if(c) {
      if(qb) {
        return qb.call(c, a, d)
      }
      b = c.length;
      for(d = d ? 0 > d ? Math.max(0, b + d) : d : 0;b > d;d++) {
        if(d in c && c[d] === a) {
          return d
        }
      }
    }
    return-1
  }, merge:function(a, c) {
    var d = c.length, b = a.length, p = 0;
    if("number" == typeof d) {
      for(;d > p;p++) {
        a[b++] = c[p]
      }
    }else {
      for(;c[p] !== e;) {
        a[b++] = c[p++]
      }
    }
    return a.length = b, a
  }, grep:function(a, c, d) {
    var b, p = [], g = 0, e = a.length;
    for(d = !!d;e > g;g++) {
      b = !!c(a[g], g), d !== b && p.push(a[g])
    }
    return p
  }, map:function(a, c, d) {
    var b, p = 0, g = a.length, e = [];
    if(m(a)) {
      for(;g > p;p++) {
        b = c(a[p], p, d), null != b && (e[e.length] = b)
      }
    }else {
      for(p in a) {
        b = c(a[p], p, d), null != b && (e[e.length] = b)
      }
    }
    return pb.apply([], e)
  }, guid:1, proxy:function(a, c) {
    var k, b, p;
    return"string" == typeof c && (k = a[c], c = a, a = k), d.isFunction(a) ? (b = ga.call(arguments, 2), p = function() {
      return a.apply(c || this, b.concat(ga.call(arguments)))
    }, p.guid = a.guid = a.guid || d.guid++, p) : e
  }, access:function(a, c, k, b, p, g, D) {
    var x = 0, f = a.length, l = null == k;
    if("object" === d.type(k)) {
      for(x in p = !0, k) {
        d.access(a, c, x, k[x], !0, g, D)
      }
    }else {
      if(b !== e && (p = !0, d.isFunction(b) || (D = !0), l && (D ? (c.call(a, b), c = null) : (l = c, c = function(a, c, k) {
        return l.call(d(a), k)
      })), c)) {
        for(;f > x;x++) {
          c(a[x], k, D ? b : b.call(a[x], x, c(a[x], k)))
        }
      }
    }
    return p ? a : l ? c.call(a) : f ? c(a[0], k) : g
  }, now:function() {
    return(new Date).getTime()
  }});
  d.ready.promise = function(a) {
    if(!u) {
      if(u = d.Deferred(), "complete" === v.readyState) {
        setTimeout(d.ready)
      }else {
        if(v.addEventListener) {
          v.addEventListener("DOMContentLoaded", Oa, !1), b.addEventListener("load", d.ready, !1)
        }else {
          v.attachEvent("onreadystatechange", Oa);
          b.attachEvent("onload", d.ready);
          var c = !1;
          try {
            c = null == b.frameElement && v.documentElement
          }catch(k) {
          }
          c && c.doScroll && function p() {
            if(!d.isReady) {
              try {
                c.doScroll("left")
              }catch(a) {
                return setTimeout(p, 50)
              }
              d.ready()
            }
          }()
        }
      }
    }
    return u.promise(a)
  };
  d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, c) {
    fa["[object " + c + "]"] = c.toLowerCase()
  });
  y = d(v);
  var lb = {};
  d.Callbacks = function(a) {
    a = "string" == typeof a ? lb[a] || q(a) : d.extend({}, a);
    var c, k, b, p, g, D, x = [], l = !a.once && [], f = function(d) {
      c = a.memory && d;
      k = !0;
      D = p || 0;
      p = 0;
      g = x.length;
      for(b = !0;x && g > D;D++) {
        if(!1 === x[D].apply(d[0], d[1]) && a.stopOnFalse) {
          c = !1;
          break
        }
      }
      b = !1;
      x && (l ? l.length && f(l.shift()) : c ? x = [] : h.disable())
    }, h = {add:function() {
      if(x) {
        var k = x.length;
        (function bc(c) {
          d.each(c, function(c, k) {
            var b = d.type(k);
            "function" === b ? a.unique && h.has(k) || x.push(k) : k && k.length && "string" !== b && bc(k)
          })
        })(arguments);
        b ? g = x.length : c && (p = k, f(c))
      }
      return this
    }, remove:function() {
      return x && d.each(arguments, function(a, c) {
        for(var k;-1 < (k = d.inArray(c, x, k));) {
          x.splice(k, 1), b && (g >= k && g--, D >= k && D--)
        }
      }), this
    }, has:function(a) {
      return-1 < d.inArray(a, x)
    }, empty:function() {
      return x = [], this
    }, disable:function() {
      return x = l = c = e, this
    }, disabled:function() {
      return!x
    }, lock:function() {
      return l = e, c || h.disable(), this
    }, locked:function() {
      return!l
    }, fireWith:function(a, c) {
      return c = c || [], c = [a, c.slice ? c.slice() : c], !x || k && !l || (b ? l.push(c) : f(c)), this
    }, fire:function() {
      return h.fireWith(this, arguments), this
    }, fired:function() {
      return!!k
    }};
    return h
  };
  d.extend({Deferred:function(a) {
    var c = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]], k = "pending", b = {state:function() {
      return k
    }, always:function() {
      return p.done(arguments).fail(arguments), this
    }, then:function() {
      var a = arguments;
      return d.Deferred(function(k) {
        d.each(c, function(c, g) {
          var e = g[0], l = d.isFunction(a[c]) && a[c];
          p[g[1]](function() {
            var a = l && l.apply(this, arguments);
            a && d.isFunction(a.promise) ? a.promise().done(k.resolve).fail(k.reject).progress(k.notify) : k[e + "With"](this === b ? k.promise() : this, l ? [a] : arguments)
          })
        });
        a = null
      }).promise()
    }, promise:function(a) {
      return null != a ? d.extend(a, b) : b
    }}, p = {};
    return b.pipe = b.then, d.each(c, function(a, d) {
      var g = d[2], e = d[3];
      b[d[1]] = g.add;
      e && g.add(function() {
        k = e
      }, c[1 ^ a][2].disable, c[2][2].lock);
      p[d[0]] = function() {
        return p[d[0] + "With"](this === p ? b : this, arguments), this
      };
      p[d[0] + "With"] = g.fireWith
    }), b.promise(p), a && a.call(p, p), p
  }, when:function(a) {
    var c, k, b, p = 0, g = ga.call(arguments), e = g.length, l = 1 !== e || a && d.isFunction(a.promise) ? e : 0, f = 1 === l ? a : d.Deferred(), h = function(a, d, k) {
      return function(b) {
        d[a] = this;
        k[a] = 1 < arguments.length ? ga.call(arguments) : b;
        k === c ? f.notifyWith(d, k) : --l || f.resolveWith(d, k)
      }
    };
    if(1 < e) {
      for(c = Array(e), k = Array(e), b = Array(e);e > p;p++) {
        g[p] && d.isFunction(g[p].promise) ? g[p].promise().done(h(p, b, g)).fail(f.reject).progress(h(p, k, c)) : --l
      }
    }
    return l || f.resolveWith(b, g), f.promise()
  }});
  d.support = function() {
    var a, c, k, r, p, g, l, f = v.createElement("div");
    if(f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = f.getElementsByTagName("*"), k = f.getElementsByTagName("a")[0], !c || !k || !c.length) {
      return{}
    }
    r = v.createElement("select");
    p = r.appendChild(v.createElement("option"));
    c = f.getElementsByTagName("input")[0];
    k.style.cssText = "top:1px;float:left;opacity:.5";
    a = {getSetAttribute:"t" !== f.className, leadingWhitespace:3 === f.firstChild.nodeType, tbody:!f.getElementsByTagName("tbody").length, htmlSerialize:!!f.getElementsByTagName("link").length, style:/top/.test(k.getAttribute("style")), hrefNormalized:"/a" === k.getAttribute("href"), opacity:/^0.5/.test(k.style.opacity), cssFloat:!!k.style.cssFloat, checkOn:!!c.value, optSelected:p.selected, enctype:!!v.createElement("form").enctype, html5Clone:"<:nav></:nav>" !== v.createElement("nav").cloneNode(!0).outerHTML, 
    boxModel:"CSS1Compat" === v.compatMode, deleteExpando:!0, noCloneEvent:!0, inlineBlockNeedsLayout:!1, shrinkWrapBlocks:!1, reliableMarginRight:!0, boxSizingReliable:!0, pixelPosition:!1};
    c.checked = !0;
    a.noCloneChecked = c.cloneNode(!0).checked;
    r.disabled = !0;
    a.optDisabled = !p.disabled;
    try {
      delete f.test
    }catch(h) {
      a.deleteExpando = !1
    }
    c = v.createElement("input");
    c.setAttribute("value", "");
    a.input = "" === c.getAttribute("value");
    c.value = "t";
    c.setAttribute("type", "radio");
    a.radioValue = "t" === c.value;
    c.setAttribute("checked", "t");
    c.setAttribute("name", "t");
    k = v.createDocumentFragment();
    k.appendChild(c);
    a.appendChecked = c.checked;
    a.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked;
    f.attachEvent && (f.attachEvent("onclick", function() {
      a.noCloneEvent = !1
    }), f.cloneNode(!0).click());
    for(l in{submit:!0, change:!0, focusin:!0}) {
      f.setAttribute(k = "on" + l, "t"), a[l + "Bubbles"] = k in b || !1 === f.attributes[k].expando
    }
    return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", a.clearCloneStyle = "content-box" === f.style.backgroundClip, d(function() {
      var c, d, k, r = v.getElementsByTagName("body")[0];
      r && (c = v.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(c).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = f.getElementsByTagName("td"), k[0].style.cssText = "padding:0;margin:0;border:0;display:none", g = 0 === k[0].offsetHeight, k[0].style.display = "", k[1].style.display = "none", a.reliableHiddenOffsets = g && 0 === k[0].offsetHeight, f.innerHTML = "", f.style.cssText = 
      "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", a.boxSizing = 4 === f.offsetWidth, a.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, b.getComputedStyle && (a.pixelPosition = "1%" !== (b.getComputedStyle(f, null) || {}).top, a.boxSizingReliable = "4px" === (b.getComputedStyle(f, null) || {width:"4px"}).width, d = f.appendChild(v.createElement("div")), d.style.cssText = 
      f.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", d.style.marginRight = d.style.width = "0", f.style.width = "1px", a.reliableMarginRight = !parseFloat((b.getComputedStyle(d, null) || {}).marginRight)), f.style.zoom !== e && (f.innerHTML = "", f.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1", 
      a.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", a.shrinkWrapBlocks = 3 !== f.offsetWidth, r.style.zoom = 1), r.removeChild(c), f = null)
    }), c = r = k = p = k = c = null, a
  }();
  var Mb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Lb = /([A-Z])/g;
  d.extend({cache:{}, expando:"jQuery" + ("1.9.0" + Math.random()).replace(/\D/g, ""), noData:{embed:!0, object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet:!0}, hasData:function(a) {
    return a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando], !!a && !H(a)
  }, data:function(a, c, d) {
    return B(a, c, d, !1)
  }, removeData:function(a, c) {
    return I(a, c, !1)
  }, _data:function(a, c, d) {
    return B(a, c, d, !0)
  }, _removeData:function(a, c) {
    return I(a, c, !0)
  }, acceptData:function(a) {
    var c = a.nodeName && d.noData[a.nodeName.toLowerCase()];
    return!c || !0 !== c && a.getAttribute("classid") === c
  }});
  d.fn.extend({data:function(a, c) {
    var k, b, p = this[0], g = 0, f = null;
    if(a === e) {
      if(this.length && (f = d.data(p), 1 === p.nodeType && !d._data(p, "parsedAttrs"))) {
        for(k = p.attributes;k.length > g;g++) {
          b = k[g].name, b.indexOf("data-") || (b = d.camelCase(b.substring(5)), w(p, b, f[b]))
        }
        d._data(p, "parsedAttrs", !0)
      }
      return f
    }
    return"object" == typeof a ? this.each(function() {
      d.data(this, a)
    }) : d.access(this, function(c) {
      return c === e ? p ? w(p, a, d.data(p, a)) : null : (this.each(function() {
        d.data(this, a, c)
      }), e)
    }, null, c, 1 < arguments.length, null, !0)
  }, removeData:function(a) {
    return this.each(function() {
      d.removeData(this, a)
    })
  }});
  d.extend({queue:function(a, c, k) {
    var b;
    return a ? (c = (c || "fx") + "queue", b = d._data(a, c), k && (!b || d.isArray(k) ? b = d._data(a, c, d.makeArray(k)) : b.push(k)), b || []) : e
  }, dequeue:function(a, c) {
    c = c || "fx";
    var k = d.queue(a, c), b = k.length, p = k.shift(), g = d._queueHooks(a, c), e = function() {
      d.dequeue(a, c)
    };
    "inprogress" === p && (p = k.shift(), b--);
    (g.cur = p) && ("fx" === c && k.unshift("inprogress"), delete g.stop, p.call(a, e, g));
    !b && g && g.empty.fire()
  }, _queueHooks:function(a, c) {
    var k = c + "queueHooks";
    return d._data(a, k) || d._data(a, k, {empty:d.Callbacks("once memory").add(function() {
      d._removeData(a, c + "queue");
      d._removeData(a, k)
    })})
  }});
  d.fn.extend({queue:function(a, c) {
    var k = 2;
    return"string" != typeof a && (c = a, a = "fx", k--), k > arguments.length ? d.queue(this[0], a) : c === e ? this : this.each(function() {
      var k = d.queue(this, a, c);
      d._queueHooks(this, a);
      "fx" === a && "inprogress" !== k[0] && d.dequeue(this, a)
    })
  }, dequeue:function(a) {
    return this.each(function() {
      d.dequeue(this, a)
    })
  }, delay:function(a, c) {
    return a = d.fx ? d.fx.speeds[a] || a : a, c = c || "fx", this.queue(c, function(c, d) {
      var b = setTimeout(c, a);
      d.stop = function() {
        clearTimeout(b)
      }
    })
  }, clearQueue:function(a) {
    return this.queue(a || "fx", [])
  }, promise:function(a, c) {
    var k, b = 1, p = d.Deferred(), g = this, f = this.length, l = function() {
      --b || p.resolveWith(g, [g])
    };
    "string" != typeof a && (c = a, a = e);
    for(a = a || "fx";f--;) {
      (k = d._data(g[f], a + "queueHooks")) && k.empty && (b++, k.empty.add(l))
    }
    return l(), p.promise(c)
  }});
  var ma, sb, $a = /[\t\r\n]/g, cc = /\r/g, dc = /^(?:input|select|textarea|button|object)$/i, ec = /^(?:a|area)$/i, tb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, ab = /^(?:checked|selected)$/i, ha = d.support.getSetAttribute, bb = d.support.input;
  d.fn.extend({attr:function(a, c) {
    return d.access(this, d.attr, a, c, 1 < arguments.length)
  }, removeAttr:function(a) {
    return this.each(function() {
      d.removeAttr(this, a)
    })
  }, prop:function(a, c) {
    return d.access(this, d.prop, a, c, 1 < arguments.length)
  }, removeProp:function(a) {
    return a = d.propFix[a] || a, this.each(function() {
      try {
        this[a] = e, delete this[a]
      }catch(c) {
      }
    })
  }, addClass:function(a) {
    var c, k, b, g, e, f = 0, l = this.length;
    c = "string" == typeof a && a;
    if(d.isFunction(a)) {
      return this.each(function(c) {
        d(this).addClass(a.call(this, c, this.className))
      })
    }
    if(c) {
      for(c = (a || "").match(U) || [];l > f;f++) {
        if(k = this[f], b = 1 === k.nodeType && (k.className ? (" " + k.className + " ").replace($a, " ") : " ")) {
          for(e = 0;g = c[e++];) {
            0 > b.indexOf(" " + g + " ") && (b += g + " ")
          }
          k.className = d.trim(b)
        }
      }
    }
    return this
  }, removeClass:function(a) {
    var c, k, b, g, e, f = 0, l = this.length;
    c = 0 === arguments.length || "string" == typeof a && a;
    if(d.isFunction(a)) {
      return this.each(function(c) {
        d(this).removeClass(a.call(this, c, this.className))
      })
    }
    if(c) {
      for(c = (a || "").match(U) || [];l > f;f++) {
        if(k = this[f], b = 1 === k.nodeType && (k.className ? (" " + k.className + " ").replace($a, " ") : "")) {
          for(e = 0;g = c[e++];) {
            for(;0 <= b.indexOf(" " + g + " ");) {
              b = b.replace(" " + g + " ", " ")
            }
          }
          k.className = a ? d.trim(b) : ""
        }
      }
    }
    return this
  }, toggleClass:function(a, c) {
    var k = typeof a, b = "boolean" == typeof c;
    return d.isFunction(a) ? this.each(function(k) {
      d(this).toggleClass(a.call(this, k, this.className, c), c)
    }) : this.each(function() {
      if("string" === k) {
        for(var g, e = 0, f = d(this), l = c, h = a.match(U) || [];g = h[e++];) {
          l = b ? l : !f.hasClass(g), f[l ? "addClass" : "removeClass"](g)
        }
      }else {
        ("undefined" === k || "boolean" === k) && (this.className && d._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : d._data(this, "__className__") || "")
      }
    })
  }, hasClass:function(a) {
    a = " " + a + " ";
    for(var c = 0, d = this.length;d > c;c++) {
      if(1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace($a, " ").indexOf(a)) {
        return!0
      }
    }
    return!1
  }, val:function(a) {
    var c, k, b, g = this[0];
    if(arguments.length) {
      return b = d.isFunction(a), this.each(function(k) {
        var g, p = d(this);
        1 === this.nodeType && (g = b ? a.call(this, k, p.val()) : a, null == g ? g = "" : "number" == typeof g ? g += "" : d.isArray(g) && (g = d.map(g, function(a) {
          return null == a ? "" : a + ""
        })), c = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, g, "value") !== e || (this.value = g))
      })
    }
    if(g) {
      return c = d.valHooks[g.type] || d.valHooks[g.nodeName.toLowerCase()], c && "get" in c && (k = c.get(g, "value")) !== e ? k : (k = g.value, "string" == typeof k ? k.replace(cc, "") : null == k ? "" : k)
    }
  }});
  d.extend({valHooks:{option:{get:function(a) {
    var c = a.attributes.value;
    return!c || c.specified ? a.value : a.text
  }}, select:{get:function(a) {
    for(var c, k = a.options, b = a.selectedIndex, g = "select-one" === a.type || 0 > b, e = g ? null : [], f = g ? b + 1 : k.length, l = 0 > b ? f : g ? b : 0;f > l;l++) {
      if(c = k[l], !(!c.selected && l !== b || (d.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && d.nodeName(c.parentNode, "optgroup"))) {
        if(a = d(c).val(), g) {
          return a
        }
        e.push(a)
      }
    }
    return e
  }, set:function(a, c) {
    var k = d.makeArray(c);
    return d(a).find("option").each(function() {
      this.selected = 0 <= d.inArray(d(this).val(), k)
    }), k.length || (a.selectedIndex = -1), k
  }}}, attr:function(a, c, k) {
    var b, g, f, l = a.nodeType;
    if(a && 3 !== l && 8 !== l && 2 !== l) {
      return a.getAttribute === e ? d.prop(a, c, k) : (f = 1 !== l || !d.isXMLDoc(a), f && (c = c.toLowerCase(), g = d.attrHooks[c] || (tb.test(c) ? sb : ma)), k === e ? g && f && "get" in g && null !== (b = g.get(a, c)) ? b : (a.getAttribute !== e && (b = a.getAttribute(c)), null == b ? e : b) : null !== k ? g && f && "set" in g && (b = g.set(a, k, c)) !== e ? b : (a.setAttribute(c, k + ""), k) : (d.removeAttr(a, c), e))
    }
  }, removeAttr:function(a, c) {
    var k, b, g = 0, e = c && c.match(U);
    if(e && 1 === a.nodeType) {
      for(;k = e[g++];) {
        b = d.propFix[k] || k, tb.test(k) ? !ha && ab.test(k) ? a[d.camelCase("default-" + k)] = a[b] = !1 : a[b] = !1 : d.attr(a, k, ""), a.removeAttribute(ha ? k : b)
      }
    }
  }, attrHooks:{type:{set:function(a, c) {
    if(!d.support.radioValue && "radio" === c && d.nodeName(a, "input")) {
      var k = a.value;
      return a.setAttribute("type", c), k && (a.value = k), c
    }
  }}}, propFix:{tabindex:"tabIndex", readonly:"readOnly", "for":"htmlFor", "class":"className", maxlength:"maxLength", cellspacing:"cellSpacing", cellpadding:"cellPadding", rowspan:"rowSpan", colspan:"colSpan", usemap:"useMap", frameborder:"frameBorder", contenteditable:"contentEditable"}, prop:function(a, c, k) {
    var b, g, f, l = a.nodeType;
    if(a && 3 !== l && 8 !== l && 2 !== l) {
      return f = 1 !== l || !d.isXMLDoc(a), f && (c = d.propFix[c] || c, g = d.propHooks[c]), k !== e ? g && "set" in g && (b = g.set(a, k, c)) !== e ? b : a[c] = k : g && "get" in g && null !== (b = g.get(a, c)) ? b : a[c]
    }
  }, propHooks:{tabIndex:{get:function(a) {
    var c = a.getAttributeNode("tabindex");
    return c && c.specified ? parseInt(c.value, 10) : dc.test(a.nodeName) || ec.test(a.nodeName) && a.href ? 0 : e
  }}}});
  sb = {get:function(a, c) {
    var k = d.prop(a, c), b = "boolean" == typeof k && a.getAttribute(c);
    return(k = "boolean" == typeof k ? bb && ha ? null != b : ab.test(c) ? a[d.camelCase("default-" + c)] : !!b : a.getAttributeNode(c)) && !1 !== k.value ? c.toLowerCase() : e
  }, set:function(a, c, k) {
    return!1 === c ? d.removeAttr(a, k) : bb && ha || !ab.test(k) ? a.setAttribute(!ha && d.propFix[k] || k, k) : a[d.camelCase("default-" + k)] = a[k] = !0, k
  }};
  bb && ha || (d.attrHooks.value = {get:function(a, c) {
    var k = a.getAttributeNode(c);
    return d.nodeName(a, "input") ? a.defaultValue : k && k.specified ? k.value : e
  }, set:function(a, c, k) {
    return d.nodeName(a, "input") ? (a.defaultValue = c, e) : ma && ma.set(a, c, k)
  }});
  ha || (ma = d.valHooks.button = {get:function(a, c) {
    var d = a.getAttributeNode(c);
    return d && ("id" === c || "name" === c || "coords" === c ? "" !== d.value : d.specified) ? d.value : e
  }, set:function(a, c, d) {
    var b = a.getAttributeNode(d);
    return b || a.setAttributeNode(b = a.ownerDocument.createAttribute(d)), b.value = c += "", "value" === d || c === a.getAttribute(d) ? c : e
  }}, d.attrHooks.contenteditable = {get:ma.get, set:function(a, c, d) {
    ma.set(a, "" === c ? !1 : c, d)
  }}, d.each(["width", "height"], function(a, c) {
    d.attrHooks[c] = d.extend(d.attrHooks[c], {set:function(a, d) {
      return"" === d ? (a.setAttribute(c, "auto"), d) : e
    }})
  }));
  d.support.hrefNormalized || (d.each(["href", "src", "width", "height"], function(a, c) {
    d.attrHooks[c] = d.extend(d.attrHooks[c], {get:function(a) {
      a = a.getAttribute(c, 2);
      return null == a ? e : a
    }})
  }), d.each(["href", "src"], function(a, c) {
    d.propHooks[c] = {get:function(a) {
      return a.getAttribute(c, 4)
    }}
  }));
  d.support.style || (d.attrHooks.style = {get:function(a) {
    return a.style.cssText || e
  }, set:function(a, c) {
    return a.style.cssText = c + ""
  }});
  d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {get:function(a) {
    a = a.parentNode;
    return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
  }}));
  d.support.enctype || (d.propFix.enctype = "encoding");
  d.support.checkOn || d.each(["radio", "checkbox"], function() {
    d.valHooks[this] = {get:function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    }}
  });
  d.each(["radio", "checkbox"], function() {
    d.valHooks[this] = d.extend(d.valHooks[this], {set:function(a, c) {
      return d.isArray(c) ? a.checked = 0 <= d.inArray(d(a).val(), c) : e
    }})
  });
  var cb = /^(?:input|select|textarea)$/i, fc = /^key/, gc = /^(?:mouse|contextmenu)|click/, ub = /^(?:focusinfocus|focusoutblur)$/, vb = /^([^.]*)(?:\.(.+)|)$/;
  d.event = {global:{}, add:function(a, c, k, b, g) {
    var f, l, h, n, m, t, s, q, y;
    if(m = 3 !== a.nodeType && 8 !== a.nodeType && d._data(a)) {
      k.handler && (f = k, k = f.handler, g = f.selector);
      k.guid || (k.guid = d.guid++);
      (n = m.events) || (n = m.events = {});
      (l = m.handle) || (l = m.handle = function(a) {
        return d === e || a && d.event.triggered === a.type ? e : d.event.dispatch.apply(l.elem, arguments)
      }, l.elem = a);
      c = (c || "").match(U) || [""];
      for(m = c.length;m--;) {
        h = vb.exec(c[m]) || [], q = t = h[1], y = (h[2] || "").split(".").sort(), h = d.event.special[q] || {}, q = (g ? h.delegateType : h.bindType) || q, h = d.event.special[q] || {}, t = d.extend({type:q, origType:t, data:b, handler:k, guid:k.guid, selector:g, needsContext:g && d.expr.match.needsContext.test(g), namespace:y.join(".")}, f), (s = n[q]) || (s = n[q] = [], s.delegateCount = 0, h.setup && !1 !== h.setup.call(a, b, y, l) || (a.addEventListener ? a.addEventListener(q, l, !1) : a.attachEvent && 
        a.attachEvent("on" + q, l))), h.add && (h.add.call(a, t), t.handler.guid || (t.handler.guid = k.guid)), g ? s.splice(s.delegateCount++, 0, t) : s.push(t), d.event.global[q] = !0
      }
      a = null
    }
  }, remove:function(a, c, k, b, g) {
    var e, f, l, h, m, n, s, t, q, y, v, u = d.hasData(a) && d._data(a);
    if(u && (h = u.events)) {
      c = (c || "").match(U) || [""];
      for(m = c.length;m--;) {
        if(l = vb.exec(c[m]) || [], q = v = l[1], y = (l[2] || "").split(".").sort(), q) {
          s = d.event.special[q] || {};
          q = (b ? s.delegateType : s.bindType) || q;
          t = h[q] || [];
          l = l[2] && RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for(f = e = t.length;e--;) {
            n = t[e], !g && v !== n.origType || k && k.guid !== n.guid || l && !l.test(n.namespace) || b && b !== n.selector && ("**" !== b || !n.selector) || (t.splice(e, 1), n.selector && t.delegateCount--, s.remove && s.remove.call(a, n))
          }
          f && !t.length && (s.teardown && !1 !== s.teardown.call(a, y, u.handle) || d.removeEvent(a, q, u.handle), delete h[q])
        }else {
          for(q in h) {
            d.event.remove(a, q + c[m], k, b, !0)
          }
        }
      }
      d.isEmptyObject(h) && (delete u.handle, d._removeData(a, "events"))
    }
  }, trigger:function(a, c, k, g) {
    var p, f, l, h, n, m, t = [k || v], s = a.type || a;
    n = a.namespace ? a.namespace.split(".") : [];
    if(f = p = k = k || v, 3 !== k.nodeType && 8 !== k.nodeType && !ub.test(s + d.event.triggered) && (0 <= s.indexOf(".") && (n = s.split("."), s = n.shift(), n.sort()), h = 0 > s.indexOf(":") && "on" + s, a = a[d.expando] ? a : new d.Event(s, "object" == typeof a && a), a.isTrigger = !0, a.namespace = n.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = e, a.target || (a.target = k), c = null == c ? [a] : d.makeArray(c, [a]), m = 
    d.event.special[s] || {}, g || !m.trigger || !1 !== m.trigger.apply(k, c))) {
      if(!g && !m.noBubble && !d.isWindow(k)) {
        l = m.delegateType || s;
        for(ub.test(l + s) || (f = f.parentNode);f;f = f.parentNode) {
          t.push(f), p = f
        }
        p === (k.ownerDocument || v) && t.push(p.defaultView || p.parentWindow || b)
      }
      for(p = 0;(f = t[p++]) && !a.isPropagationStopped();) {
        a.type = 1 < p ? l : m.bindType || s, (n = (d._data(f, "events") || {})[a.type] && d._data(f, "handle")) && n.apply(f, c), (n = h && f[h]) && d.acceptData(f) && n.apply && !1 === n.apply(f, c) && a.preventDefault()
      }
      if(a.type = s, !(g || a.isDefaultPrevented() || m._default && !1 !== m._default.apply(k.ownerDocument, c) || "click" === s && d.nodeName(k, "a") || !d.acceptData(k) || !h || !k[s] || d.isWindow(k))) {
        (p = k[h]) && (k[h] = null);
        d.event.triggered = s;
        try {
          k[s]()
        }catch(q) {
        }
        d.event.triggered = e;
        p && (k[h] = p)
      }
      return a.result
    }
  }, dispatch:function(a) {
    a = d.event.fix(a);
    var c, k, b, g, f, l = [], h = ga.call(arguments);
    c = (d._data(this, "events") || {})[a.type] || [];
    var n = d.event.special[a.type] || {};
    if(h[0] = a, a.delegateTarget = this, !n.preDispatch || !1 !== n.preDispatch.call(this, a)) {
      l = d.event.handlers.call(this, a, c);
      for(c = 0;(g = l[c++]) && !a.isPropagationStopped();) {
        for(a.currentTarget = g.elem, k = 0;(f = g.handlers[k++]) && !a.isImmediatePropagationStopped();) {
          a.namespace_re && !a.namespace_re.test(f.namespace) || (a.handleObj = f, a.data = f.data, b = ((d.event.special[f.origType] || {}).handle || f.handler).apply(g.elem, h), b === e || !1 !== (a.result = b) || (a.preventDefault(), a.stopPropagation()))
        }
      }
      return n.postDispatch && n.postDispatch.call(this, a), a.result
    }
  }, handlers:function(a, c) {
    var k, b, g, f, l = [], h = c.delegateCount, n = a.target;
    if(h && n.nodeType && (!a.button || "click" !== a.type)) {
      for(;n != this;n = n.parentNode || this) {
        if(!0 !== n.disabled || "click" !== a.type) {
          b = [];
          for(k = 0;h > k;k++) {
            f = c[k], g = f.selector + " ", b[g] === e && (b[g] = f.needsContext ? 0 <= d(g, this).index(n) : d.find(g, this, null, [n]).length), b[g] && b.push(f)
          }
          b.length && l.push({elem:n, handlers:b})
        }
      }
    }
    return c.length > h && l.push({elem:this, handlers:c.slice(h)}), l
  }, fix:function(a) {
    if(a[d.expando]) {
      return a
    }
    var c, k, b = a, g = d.event.fixHooks[a.type] || {}, e = g.props ? this.props.concat(g.props) : this.props;
    a = new d.Event(b);
    for(c = e.length;c--;) {
      k = e[c], a[k] = b[k]
    }
    return a.target || (a.target = b.srcElement || v), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, b) : a
  }, props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks:{}, keyHooks:{props:["char", "charCode", "key", "keyCode"], filter:function(a, c) {
    return null == a.which && (a.which = null != c.charCode ? c.charCode : c.keyCode), a
  }}, mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function(a, c) {
    var d, b, g, f = c.button, l = c.fromElement;
    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || v, b = d.documentElement, g = d.body, a.pageX = c.clientX + (b && b.scrollLeft || g && g.scrollLeft || 0) - (b && b.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (b && b.scrollTop || g && g.scrollTop || 0) - (b && b.clientTop || g && g.clientTop || 0)), !a.relatedTarget && l && (a.relatedTarget = l === a.target ? c.toElement : l), a.which || f === e || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), 
    a
  }}, special:{load:{noBubble:!0}, click:{trigger:function() {
    return d.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
  }}, focus:{trigger:function() {
    if(this !== v.activeElement && this.focus) {
      try {
        return this.focus(), !1
      }catch(a) {
      }
    }
  }, delegateType:"focusin"}, blur:{trigger:function() {
    return this === v.activeElement && this.blur ? (this.blur(), !1) : e
  }, delegateType:"focusout"}, beforeunload:{postDispatch:function(a) {
    a.result !== e && (a.originalEvent.returnValue = a.result)
  }}}, simulate:function(a, c, b, g) {
    a = d.extend(new d.Event, b, {type:a, isSimulated:!0, originalEvent:{}});
    g ? d.event.trigger(a, null, c) : d.event.dispatch.call(c, a);
    a.isDefaultPrevented() && b.preventDefault()
  }};
  d.removeEvent = v.removeEventListener ? function(a, c, d) {
    a.removeEventListener && a.removeEventListener(c, d, !1)
  } : function(a, c, d) {
    c = "on" + c;
    a.detachEvent && (a[c] === e && (a[c] = null), a.detachEvent(c, d))
  };
  d.Event = function(a, c) {
    return this instanceof d.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? T : L) : this.type = a, c && d.extend(this, c), this.timeStamp = a && a.timeStamp || d.now(), this[d.expando] = !0, e) : new d.Event(a, c)
  };
  d.Event.prototype = {isDefaultPrevented:L, isPropagationStopped:L, isImmediatePropagationStopped:L, preventDefault:function() {
    var a = this.originalEvent;
    this.isDefaultPrevented = T;
    a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
  }, stopPropagation:function() {
    var a = this.originalEvent;
    this.isPropagationStopped = T;
    a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
  }, stopImmediatePropagation:function() {
    this.isImmediatePropagationStopped = T;
    this.stopPropagation()
  }};
  d.each({mouseenter:"mouseover", mouseleave:"mouseout"}, function(a, c) {
    d.event.special[a] = {delegateType:c, bindType:c, handle:function(a) {
      var b, g = a.relatedTarget, e = a.handleObj;
      return(!g || g !== this && !d.contains(this, g)) && (a.type = e.origType, b = e.handler.apply(this, arguments), a.type = c), b
    }}
  });
  d.support.submitBubbles || (d.event.special.submit = {setup:function() {
    return d.nodeName(this, "form") ? !1 : (d.event.add(this, "click._submit keypress._submit", function(a) {
      a = a.target;
      (a = d.nodeName(a, "input") || d.nodeName(a, "button") ? a.form : e) && !d._data(a, "submitBubbles") && (d.event.add(a, "submit._submit", function(a) {
        a._submit_bubble = !0
      }), d._data(a, "submitBubbles", !0))
    }), e)
  }, postDispatch:function(a) {
    a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && d.event.simulate("submit", this.parentNode, a, !0))
  }, teardown:function() {
    return d.nodeName(this, "form") ? !1 : (d.event.remove(this, "._submit"), e)
  }});
  d.support.changeBubbles || (d.event.special.change = {setup:function() {
    return cb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (d.event.add(this, "propertychange._change", function(a) {
      "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
    }), d.event.add(this, "click._change", function(a) {
      this._just_changed && !a.isTrigger && (this._just_changed = !1);
      d.event.simulate("change", this, a, !0)
    })), !1) : (d.event.add(this, "beforeactivate._change", function(a) {
      a = a.target;
      cb.test(a.nodeName) && !d._data(a, "changeBubbles") && (d.event.add(a, "change._change", function(a) {
        !this.parentNode || a.isSimulated || a.isTrigger || d.event.simulate("change", this.parentNode, a, !0)
      }), d._data(a, "changeBubbles", !0))
    }), e)
  }, handle:function(a) {
    var c = a.target;
    return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : e
  }, teardown:function() {
    return d.event.remove(this, "._change"), !cb.test(this.nodeName)
  }});
  d.support.focusinBubbles || d.each({focus:"focusin", blur:"focusout"}, function(a, c) {
    var b = 0, g = function(a) {
      d.event.simulate(c, a.target, d.event.fix(a), !0)
    };
    d.event.special[c] = {setup:function() {
      0 === b++ && v.addEventListener(a, g, !0)
    }, teardown:function() {
      0 === --b && v.removeEventListener(a, g, !0)
    }}
  });
  d.fn.extend({on:function(a, c, b, g, f) {
    var l, h;
    if("object" == typeof a) {
      "string" != typeof c && (b = b || c, c = e);
      for(h in a) {
        this.on(h, c, b, a[h], f)
      }
      return this
    }
    if(null == b && null == g ? (g = c, b = c = e) : null == g && ("string" == typeof c ? (g = b, b = e) : (g = b, b = c, c = e)), !1 === g) {
      g = L
    }else {
      if(!g) {
        return this
      }
    }
    return 1 === f && (l = g, g = function(a) {
      return d().off(a), l.apply(this, arguments)
    }, g.guid = l.guid || (l.guid = d.guid++)), this.each(function() {
      d.event.add(this, a, g, b, c)
    })
  }, one:function(a, c, d, b) {
    return this.on(a, c, d, b, 1)
  }, off:function(a, c, b) {
    var g, f;
    if(a && a.preventDefault && a.handleObj) {
      return g = a.handleObj, d(a.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this
    }
    if("object" == typeof a) {
      for(f in a) {
        this.off(f, c, a[f])
      }
      return this
    }
    return(!1 === c || "function" == typeof c) && (b = c, c = e), !1 === b && (b = L), this.each(function() {
      d.event.remove(this, a, b, c)
    })
  }, bind:function(a, c, d) {
    return this.on(a, null, c, d)
  }, unbind:function(a, c) {
    return this.off(a, null, c)
  }, delegate:function(a, c, d, b) {
    return this.on(c, a, d, b)
  }, undelegate:function(a, c, d) {
    return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", d)
  }, trigger:function(a, c) {
    return this.each(function() {
      d.event.trigger(a, c, this)
    })
  }, triggerHandler:function(a, c) {
    var b = this[0];
    return b ? d.event.trigger(a, c, b, !0) : e
  }, hover:function(a, c) {
    return this.mouseenter(a).mouseleave(c || a)
  }});
  d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, c) {
    d.fn[c] = function(a, d) {
      return 0 < arguments.length ? this.on(c, null, a, d) : this.trigger(c)
    };
    fc.test(c) && (d.event.fixHooks[c] = d.event.keyHooks);
    gc.test(c) && (d.event.fixHooks[c] = d.event.mouseHooks)
  });
  (function(a, c) {
    function b(a) {
      return la.test(a + "")
    }
    function g() {
      var a, c = [];
      return a = function(d, b) {
        return c.push(d += " ") > A.cacheLength && delete a[c.shift()], a[d] = b
      }
    }
    function e(a) {
      return a[G] = !0, a
    }
    function f(a) {
      var c = Q.createElement("div");
      try {
        return a(c)
      }catch(d) {
        return!1
      }finally {
      }
    }
    function l(a, c, d, b) {
      var k, g, e, f, p;
      if((c ? c.ownerDocument || c : ta) !== Q && va(c), c = c || Q, d = d || [], !a || "string" != typeof a) {
        return d
      }
      if(1 !== (f = c.nodeType) && 9 !== f) {
        return[]
      }
      if(!Z && !b) {
        if(k = ma.exec(a)) {
          if(e = k[1]) {
            if(9 === f) {
              if(g = c.getElementById(e), !g || !g.parentNode) {
                return d
              }
              if(g.id === e) {
                return d.push(g), d
              }
            }else {
              if(c.ownerDocument && (g = c.ownerDocument.getElementById(e)) && wa(c, g) && g.id === e) {
                return d.push(g), d
              }
            }
          }else {
            if(k[2]) {
              return P.apply(d, R.call(c.getElementsByTagName(a), 0)), d
            }
            if((e = k[3]) && J.getByClassName && c.getElementsByClassName) {
              return P.apply(d, R.call(c.getElementsByClassName(e), 0)), d
            }
          }
        }
        if(J.qsa && !da.test(a)) {
          if(k = !0, g = G, e = c, p = 9 === f && a, 1 === f && "object" !== c.nodeName.toLowerCase()) {
            f = s(a);
            (k = c.getAttribute("id")) ? g = k.replace(ra, "\\$&") : c.setAttribute("id", g);
            g = "[id='" + g + "'] ";
            for(e = f.length;e--;) {
              f[e] = g + q(f[e])
            }
            e = ca.test(a) && c.parentNode || c;
            p = f.join(",")
          }
          if(p) {
            try {
              return P.apply(d, R.call(e.querySelectorAll(p), 0)), d
            }catch(r) {
            }finally {
              k || c.removeAttribute("id")
            }
          }
        }
      }
      var h;
      a: {
        a = a.replace(fa, "$1");
        var n, N, m;
        k = s(a);
        if(!b && 1 === k.length) {
          if(h = k[0] = k[0].slice(0), 2 < h.length && "ID" === (n = h[0]).type && 9 === c.nodeType && !Z && A.relative[h[1].type]) {
            if(c = A.find.ID(n.matches[0].replace(na, oa), c)[0], !c) {
              h = d;
              break a
            }
            a = a.slice(h.shift().value.length)
          }
          for(f = W.needsContext.test(a) ? -1 : h.length - 1;0 <= f && (n = h[f], !A.relative[N = n.type]);f--) {
            if((m = A.find[N]) && (b = m(n.matches[0].replace(na, oa), ca.test(h[0].type) && c.parentNode || c))) {
              if(h.splice(f, 1), a = b.length && q(h), !a) {
                h = (P.apply(d, R.call(b, 0)), d);
                break a
              }
              break
            }
          }
        }
        h = (db(a, k)(b, c, Z, d, ca.test(a)), d)
      }
      return h
    }
    function h(a, c) {
      for(var d = a && c && a.nextSibling;d;d = d.nextSibling) {
        if(d === c) {
          return-1
        }
      }
      return a ? 1 : -1
    }
    function n(a) {
      return function(c) {
        return"input" === c.nodeName.toLowerCase() && c.type === a
      }
    }
    function m(a) {
      return function(c) {
        var d = c.nodeName.toLowerCase();
        return("input" === d || "button" === d) && c.type === a
      }
    }
    function t(a) {
      return e(function(c) {
        return c = +c, e(function(d, b) {
          for(var k, g = a([], d.length, c), e = g.length;e--;) {
            d[k = g[e]] && (d[k] = !(b[k] = d[k]))
          }
        })
      })
    }
    function s(a, c) {
      var d, b, k, g, e, f, p;
      if(e = ea[a + " "]) {
        return c ? 0 : e.slice(0)
      }
      e = a;
      f = [];
      for(p = A.preFilter;e;) {
        d && !(b = ga.exec(e)) || (b && (e = e.slice(b[0].length) || e), f.push(k = []));
        d = !1;
        (b = ha.exec(e)) && (d = b.shift(), k.push({value:d, type:b[0].replace(fa, " ")}), e = e.slice(d.length));
        for(g in A.filter) {
          !(b = W[g].exec(e)) || p[g] && !(b = p[g](b)) || (d = b.shift(), k.push({value:d, type:g, matches:b}), e = e.slice(d.length))
        }
        if(!d) {
          break
        }
      }
      return c ? e.length : e ? l.error(a) : ea(a, f).slice(0)
    }
    function q(a) {
      for(var c = 0, d = a.length, b = "";d > c;c++) {
        b += a[c].value
      }
      return b
    }
    function y(a, c, d) {
      var b = c.dir, k = d && "parentNode" === c.dir, g = T++;
      return c.first ? function(c, d, g) {
        for(;c = c[b];) {
          if(1 === c.nodeType || k) {
            return a(c, d, g)
          }
        }
      } : function(c, d, e) {
        var f, l, p, r = F + " " + g;
        if(e) {
          for(;c = c[b];) {
            if((1 === c.nodeType || k) && a(c, d, e)) {
              return!0
            }
          }
        }else {
          for(;c = c[b];) {
            if(1 === c.nodeType || k) {
              if(p = c[G] || (c[G] = {}), (l = p[b]) && l[0] === r) {
                if(!0 === (f = l[1]) || f === E) {
                  return!0 === f
                }
              }else {
                if(l = p[b] = [r], l[1] = a(c, d, e) || E, !0 === l[1]) {
                  return!0
                }
              }
            }
          }
        }
      }
    }
    function u(a) {
      return 1 < a.length ? function(c, d, b) {
        for(var k = a.length;k--;) {
          if(!a[k](c, d, b)) {
            return!1
          }
        }
        return!0
      } : a[0]
    }
    function v(a, c, d, b, k) {
      for(var g, e = [], f = 0, l = a.length, p = null != c;l > f;f++) {
        (g = a[f]) && (!d || d(g, b, k)) && (e.push(g), p && c.push(f))
      }
      return e
    }
    function w(a, c, d, b, k, g) {
      return b && !b[G] && (b = w(b)), k && !k[G] && (k = w(k, g)), e(function(g, e, f, p) {
        var r, h, n = [], N = [], m = e.length, x;
        if(!(x = g)) {
          x = c || "*";
          for(var t = f.nodeType ? [f] : f, s = [], q = 0, y = t.length;y > q;q++) {
            l(x, t[q], s)
          }
          x = s
        }
        x = !a || !g && c ? x : v(x, n, a, f, p);
        t = d ? k || (g ? a : m || b) ? [] : e : x;
        if(d && d(x, t, f, p), b) {
          for(r = v(t, N), b(r, [], f, p), f = r.length;f--;) {
            (h = r[f]) && (t[N[f]] = !(x[N[f]] = h))
          }
        }
        if(g) {
          if(k || a) {
            if(k) {
              r = [];
              for(f = t.length;f--;) {
                (h = t[f]) && r.push(x[f] = h)
              }
              k(null, t = [], r, p)
            }
            for(f = t.length;f--;) {
              (h = t[f]) && -1 < (r = k ? X.call(g, h) : n[f]) && (g[r] = !(e[r] = h))
            }
          }
        }else {
          t = v(t === e ? t.splice(m, t.length) : t), k ? k(null, e, t, p) : P.apply(e, t)
        }
      })
    }
    function B(a) {
      var c, d, b, k = a.length, g = A.relative[a[0].type];
      d = g || A.relative[" "];
      for(var e = g ? 1 : 0, f = y(function(a) {
        return a === c
      }, d, !0), l = y(function(a) {
        return-1 < X.call(c, a)
      }, d, !0), p = [function(a, d, b) {
        return!g && (b || d !== Pa) || ((c = d).nodeType ? f(a, d, b) : l(a, d, b))
      }];k > e;e++) {
        if(d = A.relative[a[e].type]) {
          p = [y(u(p), d)]
        }else {
          if(d = A.filter[a[e].type].apply(null, a[e].matches), d[G]) {
            for(b = ++e;k > b && !A.relative[a[b].type];b++) {
            }
            return w(1 < e && u(p), 1 < e && q(a.slice(0, e - 1)).replace(fa, "$1"), d, b > e && B(a.slice(e, b)), k > b && B(a = a.slice(b)), k > b && q(a))
          }
          p.push(d)
        }
      }
      return u(p)
    }
    function H(a, c) {
      var d = 0, b = 0 < c.length, k = 0 < a.length, g = function(g, e, f, p, r) {
        var h, n, N = [], x = 0, m = "0", t = g && [], s = null != r, q = Pa, y = g || k && A.find.TAG("*", r && e.parentNode || e), u = F += null == q ? 1 : Math.E;
        for(s && (Pa = e !== Q && e, E = d);null != (r = y[m]);m++) {
          if(k && r) {
            for(h = 0;n = a[h];h++) {
              if(n(r, e, f)) {
                p.push(r);
                break
              }
            }
            s && (F = u, E = ++d)
          }
          b && ((r = !n && r) && x--, g && t.push(r))
        }
        if(x += m, b && m !== x) {
          for(h = 0;n = c[h];h++) {
            n(t, N, e, f)
          }
          if(g) {
            if(0 < x) {
              for(;m--;) {
                t[m] || N[m] || (N[m] = ba.call(p))
              }
            }
            N = v(N)
          }
          P.apply(p, N);
          s && !g && 0 < N.length && 1 < x + c.length && l.uniqueSort(p)
        }
        return s && (F = u, Pa = q), t
      };
      return b ? e(g) : g
    }
    function I() {
    }
    var C, E, A, Qa, O, db, z, Pa, va, Q, S, Z, da, xa, Ra, wa, K, G = "sizzle" + -new Date, ta = a.document, J = {}, F = 0, T = 0, U = g(), ea = g(), V = g(), M = typeof c, L = [], ba = L.pop, P = L.push, R = L.slice, X = L.indexOf || function(a) {
      for(var c = 0, d = this.length;d > c;c++) {
        if(this[c] === a) {
          return c
        }
      }
      return-1
    }, L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), aa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + L + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", Y = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + aa.replace(3, 8) + ")*)|.*)\\)|)", fa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), ga = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, 
    ha = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/, ia = RegExp(Y), ka = RegExp("^" + L + "$"), W = {ID:/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS:/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, NAME:/^\[name=['"]?((?:\\.|[\w-]|[^\x00-\xa0])+)['"]?\]/, TAG:RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR:RegExp("^" + aa), PSEUDO:RegExp("^" + Y), CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", 
    "i"), needsContext:RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")}, ca = /[\x20\t\r\n\f]*[+~]/, la = /\{\s*\[native code\]\s*\}/, ma = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /'|\\/g, sa = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, na = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, oa = function(a, c) {
      var d = "0x" + c - 65536;
      return d !== d ? c : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
    };
    try {
      R.call(S.childNodes, 0)[0].nodeType
    }catch(ua) {
      R = function(a) {
        for(var c, d = [];c = this[a];a++) {
          d.push(c)
        }
        return d
      }
    }
    O = l.isXML = function(a) {
      return(a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
    };
    va = l.setDocument = function(a) {
      var d = a ? a.ownerDocument || a : ta;
      return d !== Q && 9 === d.nodeType && d.documentElement ? (Q = d, S = d.documentElement, Z = O(d), J.tagNameNoComments = f(function(a) {
        return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
      }), J.attributes = f(function(a) {
        a.innerHTML = "<select></select>";
        a = typeof a.lastChild.getAttribute("multiple");
        return"boolean" !== a && "string" !== a
      }), J.getByClassName = f(function(a) {
        return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
      }), J.getByName = f(function(a) {
        a.id = G + 0;
        a.innerHTML = "<a name='" + G + "'></a><div name='" + G + "'></div>";
        S.insertBefore(a, S.firstChild);
        var c = d.getElementsByName && d.getElementsByName(G).length === 2 + d.getElementsByName(G + 0).length;
        return J.getIdNotName = !d.getElementById(G), S.removeChild(a), c
      }), A.attrHandle = f(function(a) {
        return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== M && "#" === a.firstChild.getAttribute("href")
      }) ? {} : {href:function(a) {
        return a.getAttribute("href", 2)
      }, type:function(a) {
        return a.getAttribute("type")
      }}, J.getIdNotName ? (A.find.ID = function(a, c) {
        if(typeof c.getElementById !== M && !Z) {
          var d = c.getElementById(a);
          return d && d.parentNode ? [d] : []
        }
      }, A.filter.ID = function(a) {
        var c = a.replace(na, oa);
        return function(a) {
          return a.getAttribute("id") === c
        }
      }) : (A.find.ID = function(a, d) {
        if(typeof d.getElementById !== M && !Z) {
          var b = d.getElementById(a);
          return b ? b.id === a || typeof b.getAttributeNode !== M && b.getAttributeNode("id").value === a ? [b] : c : []
        }
      }, A.filter.ID = function(a) {
        var c = a.replace(na, oa);
        return function(a) {
          return(a = typeof a.getAttributeNode !== M && a.getAttributeNode("id")) && a.value === c
        }
      }), A.find.TAG = J.tagNameNoComments ? function(a, d) {
        return typeof d.getElementsByTagName !== M ? d.getElementsByTagName(a) : c
      } : function(a, c) {
        var d, b = [], k = 0, g = c.getElementsByTagName(a);
        if("*" === a) {
          for(;d = g[k];k++) {
            1 === d.nodeType && b.push(d)
          }
          return b
        }
        return g
      }, A.find.NAME = J.getByName && function(a, d) {
        return typeof d.getElementsByName !== M ? d.getElementsByName(name) : c
      }, A.find.CLASS = J.getByClassName && function(a, d) {
        return typeof d.getElementsByClassName === M || Z ? c : d.getElementsByClassName(a)
      }, xa = [], da = [":focus"], (J.qsa = b(d.querySelectorAll)) && (f(function(a) {
        a.innerHTML = "<select><option selected=''></option></select>";
        a.querySelectorAll("[selected]").length || da.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
        a.querySelectorAll(":checked").length || da.push(":checked")
      }), f(function(a) {
        a.innerHTML = "<input type='hidden' i=''/>";
        a.querySelectorAll("[i^='']").length && da.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
        a.querySelectorAll(":enabled").length || da.push(":enabled", ":disabled");
        a.querySelectorAll("*,:x");
        da.push(",.*:")
      })), (J.matchesSelector = b(Ra = S.matchesSelector || S.mozMatchesSelector || S.webkitMatchesSelector || S.oMatchesSelector || S.msMatchesSelector)) && f(function(a) {
        J.disconnectedMatch = Ra.call(a, "div");
        Ra.call(a, "[s!='']:x");
        xa.push("!=", Y)
      }), da = RegExp(da.join("|")), xa = RegExp(xa.join("|")), wa = b(S.contains) || S.compareDocumentPosition ? function(a, c) {
        var d = 9 === a.nodeType ? a.documentElement : a, b = c && c.parentNode;
        return a === b || !(!b || 1 !== b.nodeType || !(d.contains ? d.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
      } : function(a, c) {
        if(c) {
          for(;c = c.parentNode;) {
            if(c === a) {
              return!0
            }
          }
        }
        return!1
      }, K = S.compareDocumentPosition ? function(a, c) {
        var b;
        return a === c ? (z = !0, 0) : (b = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c)) ? 1 & b || a.parentNode && 11 === a.parentNode.nodeType ? a === d || wa(ta, a) ? -1 : c === d || wa(ta, c) ? 1 : 0 : 4 & b ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
      } : function(a, c) {
        var b, k = 0;
        b = a.parentNode;
        var g = c.parentNode, e = [a], f = [c];
        if(a === c) {
          return z = !0, 0
        }
        if(a.sourceIndex && c.sourceIndex) {
          return(~c.sourceIndex || -2147483648) - (wa(ta, a) && ~a.sourceIndex || -2147483648)
        }
        if(!b || !g) {
          return a === d ? -1 : c === d ? 1 : b ? -1 : g ? 1 : 0
        }
        if(b === g) {
          return h(a, c)
        }
        for(b = a;b = b.parentNode;) {
          e.unshift(b)
        }
        for(b = c;b = b.parentNode;) {
          f.unshift(b)
        }
        for(;e[k] === f[k];) {
          k++
        }
        return k ? h(e[k], f[k]) : e[k] === ta ? -1 : f[k] === ta ? 1 : 0
      }, z = !1, [0, 0].sort(K), J.detectDuplicates = z, Q) : Q
    };
    l.matches = function(a, c) {
      return l(a, null, null, c)
    };
    l.matchesSelector = function(a, c) {
      if((a.ownerDocument || a) !== Q && va(a), c = c.replace(sa, "='$1']"), J.matchesSelector && !(Z || xa && xa.test(c) || da.test(c))) {
        try {
          var d = Ra.call(a, c);
          if(d || J.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
            return d
          }
        }catch(b) {
        }
      }
      return 0 < l(c, Q, null, [a]).length
    };
    l.contains = function(a, c) {
      return(a.ownerDocument || a) !== Q && va(a), wa(a, c)
    };
    l.attr = function(a, c) {
      var d;
      return(a.ownerDocument || a) !== Q && va(a), Z || (c = c.toLowerCase()), (d = A.attrHandle[c]) ? d(a) : Z || J.attributes ? a.getAttribute(c) : ((d = a.getAttributeNode(c)) || a.getAttribute(c)) && !0 === a[c] ? c : d && d.specified ? d.value : null
    };
    l.error = function(a) {
      throw Error("Syntax error, unrecognized expression: " + a);
    };
    l.uniqueSort = function(a) {
      var c, d = [], b = 1, k = 0;
      if(z = !J.detectDuplicates, a.sort(K), z) {
        for(;c = a[b];b++) {
          c === a[b - 1] && (k = d.push(b))
        }
        for(;k--;) {
          a.splice(d[k], 1)
        }
      }
      return a
    };
    Qa = l.getText = function(a) {
      var c, d = "", b = 0;
      if(c = a.nodeType) {
        if(1 === c || 9 === c || 11 === c) {
          if("string" == typeof a.textContent) {
            return a.textContent
          }
          for(a = a.firstChild;a;a = a.nextSibling) {
            d += Qa(a)
          }
        }else {
          if(3 === c || 4 === c) {
            return a.nodeValue
          }
        }
      }else {
        for(;c = a[b];b++) {
          d += Qa(c)
        }
      }
      return d
    };
    A = l.selectors = {cacheLength:50, createPseudo:e, match:W, find:{}, relative:{">":{dir:"parentNode", first:!0}, " ":{dir:"parentNode"}, "+":{dir:"previousSibling", first:!0}, "~":{dir:"previousSibling"}}, preFilter:{ATTR:function(a) {
      return a[1] = a[1].replace(na, oa), a[3] = (a[4] || a[5] || "").replace(na, oa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
    }, CHILD:function(a) {
      return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || l.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && l.error(a[0]), a
    }, PSEUDO:function(a) {
      var c, d = !a[5] && a[2];
      return W.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : d && ia.test(d) && (c = s(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
    }}, filter:{TAG:function(a) {
      return"*" === a ? function() {
        return!0
      } : (a = a.replace(na, oa).toLowerCase(), function(c) {
        return c.nodeName && c.nodeName.toLowerCase() === a
      })
    }, CLASS:function(a) {
      var c = U[a + " "];
      return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && U(a, function(a) {
        return c.test(a.className || typeof a.getAttribute !== M && a.getAttribute("class") || "")
      })
    }, ATTR:function(a, c, d) {
      return function(b) {
        b = l.attr(b, a);
        return null == b ? "!=" === c : c ? (b += "", "=" === c ? b === d : "!=" === c ? b !== d : "^=" === c ? d && 0 === b.indexOf(d) : "*=" === c ? d && -1 < b.indexOf(d) : "$=" === c ? d && b.substr(b.length - d.length) === d : "~=" === c ? -1 < (" " + b + " ").indexOf(d) : "|=" === c ? b === d || b.substr(0, d.length + 1) === d + "-" : !1) : !0
      }
    }, CHILD:function(a, c, d, b, k) {
      var g = "nth" !== a.slice(0, 3), e = "last" !== a.slice(-4), f = "of-type" === c;
      return 1 === b && 0 === k ? function(a) {
        return!!a.parentNode
      } : function(c, d, l) {
        var p, r, h, n, N;
        d = g !== e ? "nextSibling" : "previousSibling";
        var m = c.parentNode, x = f && c.nodeName.toLowerCase();
        l = !l && !f;
        if(m) {
          if(g) {
            for(;d;) {
              for(r = c;r = r[d];) {
                if(f ? r.nodeName.toLowerCase() === x : 1 === r.nodeType) {
                  return!1
                }
              }
              N = d = "only" === a && !N && "nextSibling"
            }
            return!0
          }
          if(N = [e ? m.firstChild : m.lastChild], e && l) {
            for(l = m[G] || (m[G] = {}), p = l[a] || [], n = p[0] === F && p[1], h = p[0] === F && p[2], r = n && m.childNodes[n];r = ++n && r && r[d] || (h = n = 0) || N.pop();) {
              if(1 === r.nodeType && ++h && r === c) {
                l[a] = [F, n, h];
                break
              }
            }
          }else {
            if(l && (p = (c[G] || (c[G] = {}))[a]) && p[0] === F) {
              h = p[1]
            }else {
              for(;(r = ++n && r && r[d] || (h = n = 0) || N.pop()) && ((f ? r.nodeName.toLowerCase() !== x : 1 !== r.nodeType) || !++h || (l && ((r[G] || (r[G] = {}))[a] = [F, h]), r !== c));) {
              }
            }
          }
          return h -= k, h === b || 0 === h % b && 0 <= h / b
        }
      }
    }, PSEUDO:function(a, c) {
      var d, b = A.pseudos[a] || A.setFilters[a.toLowerCase()] || l.error("unsupported pseudo: " + a);
      return b[G] ? b(c) : 1 < b.length ? (d = [a, a, "", c], A.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, d) {
        for(var k, g = b(a, c), e = g.length;e--;) {
          k = X.call(a, g[e]), a[k] = !(d[k] = g[e])
        }
      }) : function(a) {
        return b(a, 0, d)
      }) : b
    }}, pseudos:{not:e(function(a) {
      var c = [], d = [], b = db(a.replace(fa, "$1"));
      return b[G] ? e(function(a, c, d, k) {
        var g;
        d = b(a, null, k, []);
        for(k = a.length;k--;) {
          (g = d[k]) && (a[k] = !(c[k] = g))
        }
      }) : function(a, k, g) {
        return c[0] = a, b(c, null, g, d), !d.pop()
      }
    }), has:e(function(a) {
      return function(c) {
        return 0 < l(a, c).length
      }
    }), contains:e(function(a) {
      return function(c) {
        return-1 < (c.textContent || c.innerText || Qa(c)).indexOf(a)
      }
    }), lang:e(function(a) {
      return ka.test(a || "") || l.error("unsupported lang: " + a), a = a.replace(na, oa).toLowerCase(), function(c) {
        var d;
        do {
          if(d = Z ? c.getAttribute("xml:lang") || c.getAttribute("lang") : c.lang) {
            return d = d.toLowerCase(), d === a || 0 === d.indexOf(a + "-")
          }
        }while((c = c.parentNode) && 1 === c.nodeType);
        return!1
      }
    }), target:function(c) {
      var d = a.location && a.location.hash;
      return d && d.slice(1) === c.id
    }, root:function(a) {
      return a === S
    }, focus:function(a) {
      return a === Q.activeElement && (!Q.hasFocus || Q.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
    }, enabled:function(a) {
      return!1 === a.disabled
    }, disabled:function(a) {
      return!0 === a.disabled
    }, checked:function(a) {
      var c = a.nodeName.toLowerCase();
      return"input" === c && !!a.checked || "option" === c && !!a.selected
    }, selected:function(a) {
      return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
    }, empty:function(a) {
      for(a = a.firstChild;a;a = a.nextSibling) {
        if("@" < a.nodeName || 3 === a.nodeType || 4 === a.nodeType) {
          return!1
        }
      }
      return!0
    }, parent:function(a) {
      return!A.pseudos.empty(a)
    }, header:function(a) {
      return qa.test(a.nodeName)
    }, input:function(a) {
      return pa.test(a.nodeName)
    }, button:function(a) {
      var c = a.nodeName.toLowerCase();
      return"input" === c && "button" === a.type || "button" === c
    }, text:function(a) {
      var c;
      return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (c = a.getAttribute("type")) || c.toLowerCase() === a.type)
    }, first:t(function() {
      return[0]
    }), last:t(function(a, c) {
      return[c - 1]
    }), eq:t(function(a, c, d) {
      return[0 > d ? d + c : d]
    }), even:t(function(a, c) {
      for(var d = 0;c > d;d += 2) {
        a.push(d)
      }
      return a
    }), odd:t(function(a, c) {
      for(var d = 1;c > d;d += 2) {
        a.push(d)
      }
      return a
    }), lt:t(function(a, c, d) {
      for(c = 0 > d ? d + c : d;0 <= --c;) {
        a.push(c)
      }
      return a
    }), gt:t(function(a, c, d) {
      for(d = 0 > d ? d + c : d;c > ++d;) {
        a.push(d)
      }
      return a
    })}};
    for(C in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0}) {
      A.pseudos[C] = n(C)
    }
    for(C in{submit:!0, reset:!0}) {
      A.pseudos[C] = m(C)
    }
    db = l.compile = function(a, c) {
      var d, b = [], k = [], g = V[a + " "];
      if(!g) {
        c || (c = s(a));
        for(d = c.length;d--;) {
          g = B(c[d]), g[G] ? b.push(g) : k.push(g)
        }
        g = V(a, H(k, b))
      }
      return g
    };
    A.pseudos.nth = A.pseudos.eq;
    A.filters = I.prototype = A.pseudos;
    A.setFilters = new I;
    va();
    l.attr = d.attr;
    d.find = l;
    d.expr = l.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.unique = l.uniqueSort;
    d.text = l.getText;
    d.isXMLDoc = l.isXML;
    d.contains = l.contains
  })(b);
  var hc = /Until$/, ic = /^(?:parents|prev(?:Until|All))/, Nb = /^.[^:#\[\.,]*$/, wb = d.expr.match.needsContext, jc = {children:!0, contents:!0, next:!0, prev:!0};
  d.fn.extend({find:function(a) {
    var c, b, g;
    if("string" != typeof a) {
      return g = this, this.pushStack(d(a).filter(function() {
        for(c = 0;g.length > c;c++) {
          if(d.contains(g[c], this)) {
            return!0
          }
        }
      }))
    }
    b = [];
    for(c = 0;this.length > c;c++) {
      d.find(a, this[c], b)
    }
    return b = this.pushStack(d.unique(b)), b.selector = (this.selector ? this.selector + " " : "") + a, b
  }, has:function(a) {
    var c, b = d(a, this), g = b.length;
    return this.filter(function() {
      for(c = 0;g > c;c++) {
        if(d.contains(this, b[c])) {
          return!0
        }
      }
    })
  }, not:function(a) {
    return this.pushStack(ra(this, a, !1))
  }, filter:function(a) {
    return this.pushStack(ra(this, a, !0))
  }, is:function(a) {
    return!!a && ("string" == typeof a ? wb.test(a) ? 0 <= d(a, this.context).index(this[0]) : 0 < d.filter(a, this).length : 0 < this.filter(a).length)
  }, closest:function(a, c) {
    for(var b, g = 0, e = this.length, f = [], l = wb.test(a) || "string" != typeof a ? d(a, c || this.context) : 0;e > g;g++) {
      for(b = this[g];b && b.ownerDocument && b !== c && 11 !== b.nodeType;) {
        if(l ? -1 < l.index(b) : d.find.matchesSelector(b, a)) {
          f.push(b);
          break
        }
        b = b.parentNode
      }
    }
    return this.pushStack(1 < f.length ? d.unique(f) : f)
  }, index:function(a) {
    return a ? "string" == typeof a ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
  }, add:function(a, c) {
    var b = "string" == typeof a ? d(a, c) : d.makeArray(a && a.nodeType ? [a] : a), b = d.merge(this.get(), b);
    return this.pushStack(d.unique(b))
  }, addBack:function(a) {
    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
  }});
  d.fn.andSelf = d.fn.addBack;
  d.each({parent:function(a) {
    return(a = a.parentNode) && 11 !== a.nodeType ? a : null
  }, parents:function(a) {
    return d.dir(a, "parentNode")
  }, parentsUntil:function(a, c, b) {
    return d.dir(a, "parentNode", b)
  }, next:function(a) {
    return qa(a, "nextSibling")
  }, prev:function(a) {
    return qa(a, "previousSibling")
  }, nextAll:function(a) {
    return d.dir(a, "nextSibling")
  }, prevAll:function(a) {
    return d.dir(a, "previousSibling")
  }, nextUntil:function(a, c, b) {
    return d.dir(a, "nextSibling", b)
  }, prevUntil:function(a, c, b) {
    return d.dir(a, "previousSibling", b)
  }, siblings:function(a) {
    return d.sibling((a.parentNode || {}).firstChild, a)
  }, children:function(a) {
    return d.sibling(a.firstChild)
  }, contents:function(a) {
    return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.merge([], a.childNodes)
  }}, function(a, c) {
    d.fn[a] = function(b, g) {
      var e = d.map(this, c, b);
      return hc.test(a) || (g = b), g && "string" == typeof g && (e = d.filter(g, e)), e = 1 < this.length && !jc[a] ? d.unique(e) : e, 1 < this.length && ic.test(a) && (e = e.reverse()), this.pushStack(e)
    }
  });
  d.extend({filter:function(a, c, b) {
    return b && (a = ":not(" + a + ")"), 1 === c.length ? d.find.matchesSelector(c[0], a) ? [c[0]] : [] : d.find.matches(a, c)
  }, dir:function(a, c, b) {
    var g = [];
    for(a = a[c];a && 9 !== a.nodeType && (b === e || 1 !== a.nodeType || !d(a).is(b));) {
      1 === a.nodeType && g.push(a), a = a[c]
    }
    return g
  }, sibling:function(a, c) {
    for(var d = [];a;a = a.nextSibling) {
      1 === a.nodeType && a !== c && d.push(a)
    }
    return d
  }});
  var mb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", kc = / jQuery\d+="(?:null|\d+)"/g, xb = RegExp("<(?:" + mb + ")[\\s/>]", "i"), eb = /^\s+/, yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, zb = /<([\w:]+)/, Ab = /<tbody/i, lc = /<|&#?\w+;/, mc = /<(?:script|style|link)/i, Ua = /^(?:checkbox|radio)$/i, nc = /checked\s*(?:[^=]|=\s*.checked.)/i, Bb = 
  /^$|\/(?:java|ecma)script/i, Ob = /^true\/(.*)/, oc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, K = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], area:[1, "<map>", "</map>"], param:[1, "<object>", "</object>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:d.support.htmlSerialize ? 
  [0, "", ""] : [1, "X<div>", "</div>"]}, fb = sa(v).appendChild(v.createElement("div"));
  K.optgroup = K.option;
  K.tbody = K.tfoot = K.colgroup = K.caption = K.thead;
  K.th = K.td;
  d.fn.extend({text:function(a) {
    return d.access(this, function(a) {
      return a === e ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || v).createTextNode(a))
    }, null, a, arguments.length)
  }, wrapAll:function(a) {
    if(d.isFunction(a)) {
      return this.each(function(c) {
        d(this).wrapAll(a.call(this, c))
      })
    }
    if(this[0]) {
      var c = d(a, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && c.insertBefore(this[0]);
      c.map(function() {
        for(var a = this;a.firstChild && 1 === a.firstChild.nodeType;) {
          a = a.firstChild
        }
        return a
      }).append(this)
    }
    return this
  }, wrapInner:function(a) {
    return d.isFunction(a) ? this.each(function(c) {
      d(this).wrapInner(a.call(this, c))
    }) : this.each(function() {
      var c = d(this), b = c.contents();
      b.length ? b.wrapAll(a) : c.append(a)
    })
  }, wrap:function(a) {
    var c = d.isFunction(a);
    return this.each(function(b) {
      d(this).wrapAll(c ? a.call(this, b) : a)
    })
  }, unwrap:function() {
    return this.parent().each(function() {
      d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
    }).end()
  }, append:function() {
    return this.domManip(arguments, !0, function(a) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(a)
    })
  }, prepend:function() {
    return this.domManip(arguments, !0, function(a) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(a, this.firstChild)
    })
  }, before:function() {
    return this.domManip(arguments, !1, function(a) {
      this.parentNode && this.parentNode.insertBefore(a, this)
    })
  }, after:function() {
    return this.domManip(arguments, !1, function(a) {
      this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
    })
  }, remove:function(a, c) {
    for(var b, g = 0;null != (b = this[g]);g++) {
      (!a || 0 < d.filter(a, [b]).length) && (c || 1 !== b.nodeType || d.cleanData(z(b)), b.parentNode && (c && d.contains(b.ownerDocument, b) && ka(z(b, "script")), b.parentNode.removeChild(b)))
    }
    return this
  }, empty:function() {
    for(var a, c = 0;null != (a = this[c]);c++) {
      for(1 === a.nodeType && d.cleanData(z(a, !1));a.firstChild;) {
        a.removeChild(a.firstChild)
      }
      a.options && d.nodeName(a, "select") && (a.options.length = 0)
    }
    return this
  }, clone:function(a, c) {
    return a = null == a ? !1 : a, c = null == c ? a : c, this.map(function() {
      return d.clone(this, a, c)
    })
  }, html:function(a) {
    return d.access(this, function(a) {
      var b = this[0] || {}, g = 0, f = this.length;
      if(a === e) {
        return 1 === b.nodeType ? b.innerHTML.replace(kc, "") : e
      }
      if(!("string" != typeof a || mc.test(a) || !d.support.htmlSerialize && xb.test(a) || !d.support.leadingWhitespace && eb.test(a) || K[(zb.exec(a) || ["", ""])[1].toLowerCase()])) {
        a = a.replace(yb, "<$1></$2>");
        try {
          for(;f > g;g++) {
            b = this[g] || {}, 1 === b.nodeType && (d.cleanData(z(b, !1)), b.innerHTML = a)
          }
          b = 0
        }catch(l) {
        }
      }
      b && this.empty().append(a)
    }, null, a, arguments.length)
  }, replaceWith:function(a) {
    return d.isFunction(a) || "string" == typeof a || (a = d(a).not(this).detach()), this.domManip([a], !0, function(a) {
      var b = this.nextSibling, g = this.parentNode;
      (g && 1 === this.nodeType || 11 === this.nodeType) && (d(this).remove(), b ? b.parentNode.insertBefore(a, b) : g.appendChild(a))
    })
  }, detach:function(a) {
    return this.remove(a, !0)
  }, domManip:function(a, c, b) {
    a = pb.apply([], a);
    var g, f, l, h, n = 0, m = this.length, t = this, q = m - 1, s = a[0], y = d.isFunction(s);
    if(y || !(1 >= m || "string" != typeof s || d.support.checkClone) && nc.test(s)) {
      return this.each(function(d) {
        var g = t.eq(d);
        y && (a[0] = s.call(this, d, c ? g.html() : e));
        g.domManip(a, c, b)
      })
    }
    if(m && (g = d.buildFragment(a, this[0].ownerDocument, !1, this), f = g.firstChild, 1 === g.childNodes.length && (g = f), f)) {
      c = c && d.nodeName(f, "tr");
      f = d.map(z(g, "script"), ua);
      for(l = f.length;m > n;n++) {
        h = g, n !== q && (h = d.clone(h, !0, !0), l && d.merge(f, z(h, "script"))), b.call(c && d.nodeName(this[n], "table") ? this[n].getElementsByTagName("tbody")[0] || this[n].appendChild(this[n].ownerDocument.createElement("tbody")) : this[n], h, n)
      }
      if(l) {
        for(g = f[f.length - 1].ownerDocument, d.map(f, ya), n = 0;l > n;n++) {
          h = f[n], Bb.test(h.type || "") && !d._data(h, "globalEval") && d.contains(g, h) && (h.src ? d.ajax({url:h.src, type:"GET", dataType:"script", async:!1, global:!1, "throws":!0}) : d.globalEval((h.text || h.textContent || h.innerHTML || "").replace(oc, "")))
        }
      }
      g = f = null
    }
    return this
  }});
  d.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(a, c) {
    d.fn[a] = function(a) {
      for(var b = 0, g = [], e = d(a), f = e.length - 1;f >= b;b++) {
        a = b === f ? this : this.clone(!0), d(e[b])[c](a), Xa.apply(g, a.get())
      }
      return this.pushStack(g)
    }
  });
  d.extend({clone:function(a, c, b) {
    var g, e, f, l, h, n = d.contains(a.ownerDocument, a);
    if(d.support.html5Clone || d.isXMLDoc(a) || !xb.test("<" + a.nodeName + ">") ? h = a.cloneNode(!0) : (fb.innerHTML = a.outerHTML, fb.removeChild(h = fb.firstChild)), !(d.support.noCloneEvent && d.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a))) {
      for(g = z(h), e = z(a), l = 0;null != (f = e[l]);++l) {
        if(g[l]) {
          var m = g[l], t = void 0, s = void 0, q = void 0;
          if(1 === m.nodeType) {
            if(t = m.nodeName.toLowerCase(), !d.support.noCloneEvent && m[d.expando]) {
              s = d._data(m);
              for(q in s.events) {
                d.removeEvent(m, q, s.handle)
              }
              m.removeAttribute(d.expando)
            }
            "script" === t && m.text !== f.text ? (ua(m).text = f.text, ya(m)) : "object" === t ? (m.parentNode && (m.outerHTML = f.outerHTML), d.support.html5Clone && f.innerHTML && !d.trim(m.innerHTML) && (m.innerHTML = f.innerHTML)) : "input" === t && Ua.test(f.type) ? (m.defaultChecked = m.checked = f.checked, m.value !== f.value && (m.value = f.value)) : "option" === t ? m.defaultSelected = m.selected = f.defaultSelected : ("input" === t || "textarea" === t) && (m.defaultValue = f.defaultValue)
          }
        }
      }
    }
    if(c) {
      if(b) {
        for(e = e || z(a), g = g || z(h), l = 0;null != (f = e[l]);l++) {
          za(f, g[l])
        }
      }else {
        za(a, h)
      }
    }
    return g = z(h, "script"), 0 < g.length && ka(g, !n && z(a, "script")), h
  }, buildFragment:function(a, c, b, g) {
    for(var e, f, l, h, n, m, t, s = a.length, q = sa(c), y = [], u = 0;s > u;u++) {
      if(f = a[u], f || 0 === f) {
        if("object" === d.type(f)) {
          d.merge(y, f.nodeType ? [f] : f)
        }else {
          if(lc.test(f)) {
            h = h || q.appendChild(c.createElement("div"));
            l = (zb.exec(f) || ["", ""])[1].toLowerCase();
            n = K[l] || K._default;
            h.innerHTML = n[1] + f.replace(yb, "<$1></$2>") + n[2];
            for(t = n[0];t--;) {
              h = h.lastChild
            }
            if(!d.support.leadingWhitespace && eb.test(f) && y.push(c.createTextNode(eb.exec(f)[0])), !d.support.tbody) {
              for(t = (f = "table" !== l || Ab.test(f) ? "<table>" !== n[1] || Ab.test(f) ? 0 : h : h.firstChild) && f.childNodes.length;t--;) {
                d.nodeName(m = f.childNodes[t], "tbody") && !m.childNodes.length && f.removeChild(m)
              }
            }
            d.merge(y, h.childNodes);
            for(h.textContent = "";h.firstChild;) {
              h.removeChild(h.firstChild)
            }
            h = q.lastChild
          }else {
            y.push(c.createTextNode(f))
          }
        }
      }
    }
    h && q.removeChild(h);
    d.support.appendChecked || d.grep(z(y, "input"), Ha);
    for(u = 0;f = y[u++];) {
      if((!g || -1 === d.inArray(f, g)) && (e = d.contains(f.ownerDocument, f), h = z(q.appendChild(f), "script"), e && ka(h), b)) {
        for(t = 0;f = h[t++];) {
          Bb.test(f.type || "") && b.push(f)
        }
      }
    }
    return q
  }, cleanData:function(a, c) {
    for(var b, g, f, l, h = 0, n = d.expando, m = d.cache, t = d.support.deleteExpando, q = d.event.special;null != (f = a[h]);h++) {
      if((c || d.acceptData(f)) && (g = f[n], b = g && m[g])) {
        if(b.events) {
          for(l in b.events) {
            q[l] ? d.event.remove(f, l) : d.removeEvent(f, l, b.handle)
          }
        }
        m[g] && (delete m[g], t ? delete f[n] : f.removeAttribute !== e ? f.removeAttribute(n) : f[n] = null, ea.push(g))
      }
    }
  }});
  var aa, X, Da, gb = /alpha\([^)]*\)/i, pc = /opacity\s*=\s*([^)]*)/, qc = /^(top|right|bottom|left)$/, rc = /^(none|table(?!-c[ea]).+)/, Cb = /^margin/, Pb = RegExp("^(" + Na + ")(.*)$", "i"), Ja = RegExp("^(" + Na + ")(?!px)[a-z%]+$", "i"), sc = RegExp("^([+-])=(" + Na + ")", "i"), ob = {BODY:"block"}, tc = {position:"absolute", visibility:"hidden", display:"block"}, Db = {letterSpacing:0, fontWeight:400}, R = ["Top", "Right", "Bottom", "Left"], nb = ["Webkit", "O", "Moz", "ms"];
  d.fn.extend({css:function(a, c) {
    return d.access(this, function(a, c, b) {
      var g, f = {}, l = 0;
      if(d.isArray(c)) {
        b = X(a);
        for(g = c.length;g > l;l++) {
          f[c[l]] = d.css(a, c[l], !1, b)
        }
        return f
      }
      return b !== e ? d.style(a, c, b) : d.css(a, c)
    }, a, c, 1 < arguments.length)
  }, show:function() {
    return h(this, !0)
  }, hide:function() {
    return h(this)
  }, toggle:function(a) {
    var c = "boolean" == typeof a;
    return this.each(function() {
      (c ? a : V(this)) ? d(this).show() : d(this).hide()
    })
  }});
  d.extend({cssHooks:{opacity:{get:function(a, c) {
    if(c) {
      var d = aa(a, "opacity");
      return"" === d ? "1" : d
    }
  }}}, cssNumber:{columnCount:!0, fillOpacity:!0, fontWeight:!0, lineHeight:!0, opacity:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{"float":d.support.cssFloat ? "cssFloat" : "styleFloat"}, style:function(a, c, b, g) {
    if(a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
      var f, l, h, n = d.camelCase(c), m = a.style;
      if(c = d.cssProps[n] || (d.cssProps[n] = Ia(m, n)), h = d.cssHooks[c] || d.cssHooks[n], b === e) {
        return h && "get" in h && (f = h.get(a, !1, g)) !== e ? f : m[c]
      }
      if(l = typeof b, "string" === l && (f = sc.exec(b)) && (b = (f[1] + 1) * f[2] + parseFloat(d.css(a, c)), l = "number"), !(null == b || "number" === l && isNaN(b) || ("number" !== l || d.cssNumber[n] || (b += "px"), d.support.clearCloneStyle || "" !== b || 0 !== c.indexOf("background") || (m[c] = "inherit"), h && "set" in h && (b = h.set(a, b, g)) === e))) {
        try {
          m[c] = b
        }catch(t) {
        }
      }
    }
  }, css:function(a, c, b, g) {
    var f, l, h, n = d.camelCase(c);
    return c = d.cssProps[n] || (d.cssProps[n] = Ia(a.style, n)), h = d.cssHooks[c] || d.cssHooks[n], h && "get" in h && (f = h.get(a, !0, b)), f === e && (f = aa(a, c, g)), "normal" === f && c in Db && (f = Db[c]), b ? (l = parseFloat(f), !0 === b || d.isNumeric(l) ? l || 0 : f) : f
  }, swap:function(a, c, d, b) {
    var g, f = {};
    for(g in c) {
      f[g] = a.style[g], a.style[g] = c[g]
    }
    d = d.apply(a, b || []);
    for(g in c) {
      a.style[g] = f[g]
    }
    return d
  }});
  b.getComputedStyle ? (X = function(a) {
    return b.getComputedStyle(a, null)
  }, aa = function(a, c, b) {
    var g, f, l, h = (b = b || X(a)) ? b.getPropertyValue(c) || b[c] : e, n = a.style;
    return b && ("" !== h || d.contains(a.ownerDocument, a) || (h = d.style(a, c)), Ja.test(h) && Cb.test(c) && (g = n.width, f = n.minWidth, l = n.maxWidth, n.minWidth = n.maxWidth = n.width = h, h = b.width, n.width = g, n.minWidth = f, n.maxWidth = l)), h
  }) : v.documentElement.currentStyle && (X = function(a) {
    return a.currentStyle
  }, aa = function(a, c, d) {
    var b, g, f;
    d = (d = d || X(a)) ? d[c] : e;
    var l = a.style;
    return null == d && l && l[c] && (d = l[c]), Ja.test(d) && !qc.test(c) && (b = l.left, g = a.runtimeStyle, f = g && g.left, f && (g.left = a.currentStyle.left), l.left = "fontSize" === c ? "1em" : d, d = l.pixelLeft + "px", l.left = b, f && (g.left = f)), "" === d ? "auto" : d
  });
  d.each(["height", "width"], function(a, c) {
    d.cssHooks[c] = {get:function(a, b, g) {
      return b ? 0 === a.offsetWidth && rc.test(d.css(a, "display")) ? d.swap(a, tc, function() {
        return W(a, c, g)
      }) : W(a, c, g) : e
    }, set:function(a, b, g) {
      var f = g && X(a);
      return C(a, b, g ? Ba(a, c, g, d.support.boxSizing && "border-box" === d.css(a, "boxSizing", !1, f), f) : 0)
    }}
  });
  d.support.opacity || (d.cssHooks.opacity = {get:function(a, c) {
    return pc.test((c && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
  }, set:function(a, c) {
    var b = a.style, g = a.currentStyle, f = d.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "", e = g && g.filter || b.filter || "";
    b.zoom = 1;
    (1 <= c || "" === c) && "" === d.trim(e.replace(gb, "")) && b.removeAttribute && (b.removeAttribute("filter"), "" === c || g && !g.filter) || (b.filter = gb.test(e) ? e.replace(gb, f) : e + " " + f)
  }});
  d(function() {
    d.support.reliableMarginRight || (d.cssHooks.marginRight = {get:function(a, c) {
      return c ? d.swap(a, {display:"inline-block"}, aa, [a, "marginRight"]) : e
    }});
    !d.support.pixelPosition && d.fn.position && d.each(["top", "left"], function(a, c) {
      d.cssHooks[c] = {get:function(a, b) {
        return b ? (b = aa(a, c), Ja.test(b) ? d(a).position()[c] + "px" : b) : e
      }}
    })
  });
  d.expr && d.expr.filters && (d.expr.filters.hidden = function(a) {
    return 0 === a.offsetWidth && 0 === a.offsetHeight || !d.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || d.css(a, "display"))
  }, d.expr.filters.visible = function(a) {
    return!d.expr.filters.hidden(a)
  });
  d.each({margin:"", padding:"", border:"Width"}, function(a, c) {
    d.cssHooks[a + c] = {expand:function(d) {
      var b = 0, g = {};
      for(d = "string" == typeof d ? d.split(" ") : [d];4 > b;b++) {
        g[a + R[b] + c] = d[b] || d[b - 2] || d[0]
      }
      return g
    }};
    Cb.test(a) || (d.cssHooks[a + c].set = C)
  });
  var uc = /%20/g, Qb = /\[\]$/, Eb = /\r?\n/g, vc = /^(?:submit|button|image|reset)$/i, wc = /^(?:input|select|textarea|keygen)/i;
  d.fn.extend({serialize:function() {
    return d.param(this.serializeArray())
  }, serializeArray:function() {
    return this.map(function() {
      var a = d.prop(this, "elements");
      return a ? d.makeArray(a) : this
    }).filter(function() {
      var a = this.type;
      return this.name && !d(this).is(":disabled") && wc.test(this.nodeName) && !vc.test(a) && (this.checked || !Ua.test(a))
    }).map(function(a, c) {
      var b = d(this).val();
      return null == b ? null : d.isArray(b) ? d.map(b, function(a) {
        return{name:c.name, value:a.replace(Eb, "\r\n")}
      }) : {name:c.name, value:b.replace(Eb, "\r\n")}
    }).get()
  }});
  d.param = function(a, c) {
    var b, g = [], f = function(a, c) {
      c = d.isFunction(c) ? c() : null == c ? "" : c;
      g[g.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
    };
    if(c === e && (c = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(a) || a.jquery && !d.isPlainObject(a)) {
      d.each(a, function() {
        f(this.name, this.value)
      })
    }else {
      for(b in a) {
        Y(b, a[b], c, f)
      }
    }
    return g.join("&").replace(uc, "+")
  };
  var ia, P, hb = d.now(), ib = /\?/, xc = /#.*$/, Fb = /([?&])_=[^&]*/, yc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, zc = /^(?:GET|HEAD)$/, Ac = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Hb = d.fn.load, Ib = {}, Va = {}, Jb = "*/".concat("*");
  try {
    P = O.href
  }catch(Fc) {
    P = v.createElement("a"), P.href = "", P = P.href
  }
  ia = Gb.exec(P.toLowerCase()) || [];
  d.fn.load = function(a, c, b) {
    if("string" != typeof a && Hb) {
      return Hb.apply(this, arguments)
    }
    var g, f, l, h = this, n = a.indexOf(" ");
    return 0 <= n && (g = a.slice(n, a.length), a = a.slice(0, n)), d.isFunction(c) ? (b = c, c = e) : c && "object" == typeof c && (f = "POST"), 0 < h.length && d.ajax({url:a, type:f, dataType:"html", data:c}).done(function(a) {
      l = arguments;
      h.html(g ? d("<div>").append(d.parseHTML(a)).find(g) : a)
    }).complete(b && function(a, c) {
      h.each(b, l || [a.responseText, c, a])
    }), this
  };
  d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, c) {
    d.fn[c] = function(a) {
      return this.on(c, a)
    }
  });
  d.each(["get", "post"], function(a, c) {
    d[c] = function(a, b, g, f) {
      return d.isFunction(b) && (f = f || g, g = b, b = e), d.ajax({url:a, type:c, dataType:f, data:b, success:g})
    }
  });
  d.extend({active:0, lastModified:{}, etag:{}, ajaxSettings:{url:P, type:"GET", isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ia[1]), global:!0, processData:!0, async:!0, contentType:"application/x-www-form-urlencoded; charset=UTF-8", accepts:{"*":Jb, text:"text/plain", html:"text/html", xml:"application/xml, text/xml", json:"application/json, text/javascript"}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText"}, converters:{"* text":b.String, 
  "text html":!0, "text json":d.parseJSON, "text xml":d.parseXML}, flatOptions:{url:!0, context:!0}}, ajaxSetup:function(a, c) {
    return c ? Ea(Ea(a, d.ajaxSettings), c) : Ea(d.ajaxSettings, a)
  }, ajaxPrefilter:ba(Ib), ajaxTransport:ba(Va), ajax:function(a, c) {
    function b(a, c, k, h) {
      var m, q, D, A, C, z = c;
      if(2 !== I) {
        I = 2;
        n && clearTimeout(n);
        g = e;
        l = h || "";
        E.readyState = 0 < a ? 4 : 0;
        if(k) {
          A = s;
          h = E;
          var H, O, ja, Ta, G = A.contents, M = A.dataTypes, J = A.responseFields;
          for(O in J) {
            O in k && (h[J[O]] = k[O])
          }
          for(;"*" === M[0];) {
            M.shift(), H === e && (H = A.mimeType || h.getResponseHeader("Content-Type"))
          }
          if(H) {
            for(O in G) {
              if(G[O] && G[O].test(H)) {
                M.unshift(O);
                break
              }
            }
          }
          if(M[0] in k) {
            ja = M[0]
          }else {
            for(O in k) {
              if(!M[0] || A.converters[O + " " + M[0]]) {
                ja = O;
                break
              }
              Ta || (Ta = O)
            }
            ja = ja || Ta
          }
          A = ja ? (ja !== M[0] && M.unshift(ja), k[ja]) : e
        }
        if(200 <= a && 300 > a || 304 === a) {
          if(s.ifModified && (C = E.getResponseHeader("Last-Modified"), C && (d.lastModified[f] = C), C = E.getResponseHeader("etag"), C && (d.etag[f] = C)), 304 === a) {
            m = !0, z = "notmodified"
          }else {
            var F;
            a: {
              k = s;
              m = A;
              var L, K;
              D = {};
              C = 0;
              z = k.dataTypes.slice();
              H = z[0];
              if(k.dataFilter && (m = k.dataFilter(m, k.dataType)), z[1]) {
                for(F in k.converters) {
                  D[F.toLowerCase()] = k.converters[F]
                }
              }
              for(;q = z[++C];) {
                if("*" !== q) {
                  if("*" !== H && H !== q) {
                    if(F = D[H + " " + q] || D["* " + q], !F) {
                      for(L in D) {
                        if(K = L.split(" "), K[1] === q && (F = D[H + " " + K[0]] || D["* " + K[0]])) {
                          !0 === F ? F = D[L] : !0 !== D[L] && (q = K[0], z.splice(C--, 0, q));
                          break
                        }
                      }
                    }
                    if(!0 !== F) {
                      if(F && k["throws"]) {
                        m = F(m)
                      }else {
                        try {
                          m = F(m)
                        }catch(P) {
                          F = {state:"parsererror", error:F ? P : "No conversion from " + H + " to " + q};
                          break a
                        }
                      }
                    }
                  }
                  H = q
                }
              }
              F = {state:"success", data:m}
            }
            m = F;
            z = m.state;
            q = m.data;
            D = m.error;
            m = !D
          }
        }else {
          D = z, (a || !z) && (z = "error", 0 > a && (a = 0))
        }
        E.status = a;
        E.statusText = (c || z) + "";
        m ? v.resolveWith(y, [q, z, E]) : v.rejectWith(y, [E, z, D]);
        E.statusCode(B);
        B = e;
        t && u.trigger(m ? "ajaxSuccess" : "ajaxError", [E, s, m ? q : D]);
        w.fireWith(y, [E, z]);
        t && (u.trigger("ajaxComplete", [E, s]), --d.active || d.event.trigger("ajaxStop"))
      }
    }
    "object" == typeof a && (c = a, a = e);
    c = c || {};
    var g, f, l, h, n, m, t, q, s = d.ajaxSetup({}, c), y = s.context || s, u = s.context && (y.nodeType || y.jquery) ? d(y) : d.event, v = d.Deferred(), w = d.Callbacks("once memory"), B = s.statusCode || {}, C = {}, z = {}, I = 0, H = "canceled", E = {readyState:0, getResponseHeader:function(a) {
      var c;
      if(2 === I) {
        if(!h) {
          for(h = {};c = yc.exec(l);) {
            h[c[1].toLowerCase()] = c[2]
          }
        }
        c = h[a.toLowerCase()]
      }
      return null == c ? null : c
    }, getAllResponseHeaders:function() {
      return 2 === I ? l : null
    }, setRequestHeader:function(a, c) {
      var d = a.toLowerCase();
      return I || (a = z[d] = z[d] || a, C[a] = c), this
    }, overrideMimeType:function(a) {
      return I || (s.mimeType = a), this
    }, statusCode:function(a) {
      var c;
      if(a) {
        if(2 > I) {
          for(c in a) {
            B[c] = [B[c], a[c]]
          }
        }else {
          E.always(a[E.status])
        }
      }
      return this
    }, abort:function(a) {
      a = a || H;
      return g && g.abort(a), b(0, a), this
    }};
    if(v.promise(E).complete = w.add, E.success = E.done, E.error = E.fail, s.url = ((a || s.url || P) + "").replace(xc, "").replace(Ac, ia[1] + "//"), s.type = c.method || c.type || s.method || s.type, s.dataTypes = d.trim(s.dataType || "*").toLowerCase().match(U) || [""], null == s.crossDomain && (m = Gb.exec(s.url.toLowerCase()), s.crossDomain = !(!m || m[1] === ia[1] && m[2] === ia[2] && (m[3] || ("http:" === m[1] ? 80 : 443)) == (ia[3] || ("http:" === ia[1] ? 80 : 443)))), s.data && s.processData && 
    "string" != typeof s.data && (s.data = d.param(s.data, s.traditional)), Ka(Ib, s, c, E), 2 === I) {
      return E
    }
    (t = s.global) && 0 === d.active++ && d.event.trigger("ajaxStart");
    s.type = s.type.toUpperCase();
    s.hasContent = !zc.test(s.type);
    f = s.url;
    s.hasContent || (s.data && (f = s.url += (ib.test(f) ? "&" : "?") + s.data, delete s.data), !1 === s.cache && (s.url = Fb.test(f) ? f.replace(Fb, "$1_=" + hb++) : f + (ib.test(f) ? "&" : "?") + "_=" + hb++));
    s.ifModified && (d.lastModified[f] && E.setRequestHeader("If-Modified-Since", d.lastModified[f]), d.etag[f] && E.setRequestHeader("If-None-Match", d.etag[f]));
    (s.data && s.hasContent && !1 !== s.contentType || c.contentType) && E.setRequestHeader("Content-Type", s.contentType);
    E.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : s.accepts["*"]);
    for(q in s.headers) {
      E.setRequestHeader(q, s.headers[q])
    }
    if(s.beforeSend && (!1 === s.beforeSend.call(y, E, s) || 2 === I)) {
      return E.abort()
    }
    H = "abort";
    for(q in{success:1, error:1, complete:1}) {
      E[q](s[q])
    }
    if(g = Ka(Va, s, c, E)) {
      E.readyState = 1;
      t && u.trigger("ajaxSend", [E, s]);
      s.async && 0 < s.timeout && (n = setTimeout(function() {
        E.abort("timeout")
      }, s.timeout));
      try {
        I = 1, g.send(C, b)
      }catch(A) {
        if(!(2 > I)) {
          throw A;
        }
        b(-1, A)
      }
    }else {
      b(-1, "No Transport")
    }
    return E
  }, getScript:function(a, c) {
    return d.get(a, e, c, "script")
  }, getJSON:function(a, c, b) {
    return d.get(a, c, b, "json")
  }});
  d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/(?:java|ecma)script/}, converters:{"text script":function(a) {
    return d.globalEval(a), a
  }}});
  d.ajaxPrefilter("script", function(a) {
    a.cache === e && (a.cache = !1);
    a.crossDomain && (a.type = "GET", a.global = !1)
  });
  d.ajaxTransport("script", function(a) {
    if(a.crossDomain) {
      var c, b = v.head || d("head")[0] || v.documentElement;
      return{send:function(d, g) {
        c = v.createElement("script");
        c.async = !0;
        a.scriptCharset && (c.charset = a.scriptCharset);
        c.src = a.url;
        c.onload = c.onreadystatechange = function(a, d) {
          (d || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, d || g(200, "success"))
        };
        b.insertBefore(c, b.firstChild)
      }, abort:function() {
        c && c.onload(e, !0)
      }}
    }
  });
  var Kb = [], jb = /(=)\?(?=&|$)|\?\?/;
  d.ajaxSetup({jsonp:"callback", jsonpCallback:function() {
    var a = Kb.pop() || d.expando + "_" + hb++;
    return this[a] = !0, a
  }});
  d.ajaxPrefilter("json jsonp", function(a, c, g) {
    var f, l, h, n = !1 !== a.jsonp && (jb.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && jb.test(a.data) && "data");
    return n || "jsonp" === a.dataTypes[0] ? (f = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, n ? a[n] = a[n].replace(jb, "$1" + f) : !1 !== a.jsonp && (a.url += (ib.test(a.url) ? "&" : "?") + a.jsonp + "=" + f), a.converters["script json"] = function() {
      return h || d.error(f + " was not called"), h[0]
    }, a.dataTypes[0] = "json", l = b[f], b[f] = function() {
      h = arguments
    }, g.always(function() {
      b[f] = l;
      a[f] && (a.jsonpCallback = c.jsonpCallback, Kb.push(f));
      h && d.isFunction(l) && l(h[0]);
      h = l = e
    }), "script") : e
  });
  var pa, Ga, Bc = 0, kb = b.ActiveXObject && function() {
    for(var a in pa) {
      pa[a](e, !0)
    }
  };
  d.ajaxSettings.xhr = b.ActiveXObject ? function() {
    var a;
    if(!(a = !this.isLocal && ca())) {
      a: {
        try {
          a = new b.ActiveXObject("Microsoft.XMLHTTP");
          break a
        }catch(c) {
        }
        a = void 0
      }
    }
    return a
  } : ca;
  Ga = d.ajaxSettings.xhr();
  d.support.cors = !!Ga && "withCredentials" in Ga;
  (Ga = d.support.ajax = !!Ga) && d.ajaxTransport(function(a) {
    if(!a.crossDomain || d.support.cors) {
      var c;
      return{send:function(g, f) {
        var l, h, n = a.xhr();
        if(a.username ? n.open(a.type, a.url, a.async, a.username, a.password) : n.open(a.type, a.url, a.async), a.xhrFields) {
          for(h in a.xhrFields) {
            n[h] = a.xhrFields[h]
          }
        }
        a.mimeType && n.overrideMimeType && n.overrideMimeType(a.mimeType);
        a.crossDomain || g["X-Requested-With"] || (g["X-Requested-With"] = "XMLHttpRequest");
        try {
          for(h in g) {
            n.setRequestHeader(h, g[h])
          }
        }catch(m) {
        }
        n.send(a.hasContent && a.data || null);
        c = function(b, g) {
          var k, h, m, t, q;
          try {
            if(c && (g || 4 === n.readyState)) {
              if(c = e, l && (n.onreadystatechange = d.noop, kb && delete pa[l]), g) {
                4 !== n.readyState && n.abort()
              }else {
                t = {};
                k = n.status;
                q = n.responseXML;
                m = n.getAllResponseHeaders();
                q && q.documentElement && (t.xml = q);
                "string" == typeof n.responseText && (t.text = n.responseText);
                try {
                  h = n.statusText
                }catch(x) {
                  h = ""
                }
                k || !a.isLocal || a.crossDomain ? 1223 === k && (k = 204) : k = t.text ? 200 : 404
              }
            }
          }catch(y) {
            g || f(-1, y)
          }
          t && f(k, h, t, m)
        };
        a.async ? 4 === n.readyState ? setTimeout(c) : (l = ++Bc, kb && (pa || (pa = {}, d(b).unload(kb)), pa[l] = c), n.onreadystatechange = c) : c()
      }, abort:function() {
        c && c(e, !0)
      }}
    }
  });
  var la, Sa, Cc = /^(?:toggle|show|hide)$/, Dc = RegExp("^(?:([+-])=|)(" + Na + ")([a-z%]*)$", "i"), Ec = /queueHooks$/, Ma = [function(a, c, b) {
    var g, f, e, l, h, n, m = this, t = a.style, q = {}, y = [], u = a.nodeType && V(a);
    b.queue || (h = d._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, n = h.empty.fire, h.empty.fire = function() {
      h.unqueued || n()
    }), h.unqueued++, m.always(function() {
      m.always(function() {
        h.unqueued--;
        d.queue(a, "fx").length || h.empty.fire()
      })
    }));
    1 === a.nodeType && ("height" in c || "width" in c) && (b.overflow = [t.overflow, t.overflowX, t.overflowY], "inline" === d.css(a, "display") && "none" === d.css(a, "float") && (d.support.inlineBlockNeedsLayout && "inline" !== Aa(a.nodeName) ? t.zoom = 1 : t.display = "inline-block"));
    b.overflow && (t.overflow = "hidden", d.support.shrinkWrapBlocks || m.done(function() {
      t.overflow = b.overflow[0];
      t.overflowX = b.overflow[1];
      t.overflowY = b.overflow[2]
    }));
    for(g in c) {
      (e = c[g], Cc.exec(e)) && (delete c[g], f = f || "toggle" === e, e !== (u ? "hide" : "show")) && y.push(g)
    }
    if(c = y.length) {
      for(e = d._data(a, "fxshow") || d._data(a, "fxshow", {}), ("hidden" in e) && (u = e.hidden), f && (e.hidden = !u), u ? d(a).show() : m.done(function() {
        d(a).hide()
      }), m.done(function() {
        var c;
        d._removeData(a, "fxshow");
        for(c in q) {
          d.style(a, c, q[c])
        }
      }), g = 0;c > g;g++) {
        f = y[g], l = m.createTween(f, u ? e[f] : 0), q[f] = e[f] || d.style(a, f), f in e || (e[f] = l.start, u && (l.end = l.start, l.start = "width" === f || "height" === f ? 1 : 0))
      }
    }
  }], Fa = {"*":[function(a, c) {
    var b, g, f = this.createTween(a, c), e = Dc.exec(c), l = f.cur(), h = +l || 0, n = 1, m = 20;
    if(e) {
      if(b = +e[2], g = e[3] || (d.cssNumber[a] ? "" : "px"), "px" !== g && h) {
        h = d.css(f.elem, a, !0) || b || 1;
        do {
          n = n || ".5", h /= n, d.style(f.elem, a, h + g)
        }while(n !== (n = f.cur() / l) && 1 !== n && --m)
      }
      f.unit = g;
      f.start = h;
      f.end = e[1] ? h + (e[1] + 1) * b : b
    }
    return f
  }]};
  d.Animation = d.extend(g, {tweener:function(a, c) {
    d.isFunction(a) ? (c = a, a = ["*"]) : a = a.split(" ");
    for(var b, g = 0, f = a.length;f > g;g++) {
      b = a[g], Fa[b] = Fa[b] || [], Fa[b].unshift(c)
    }
  }, prefilter:function(a, c) {
    c ? Ma.unshift(a) : Ma.push(a)
  }});
  d.Tween = l;
  l.prototype = {constructor:l, init:function(a, c, b, g, f, e) {
    this.elem = a;
    this.prop = b;
    this.easing = f || "swing";
    this.options = c;
    this.start = this.now = this.cur();
    this.end = g;
    this.unit = e || (d.cssNumber[b] ? "" : "px")
  }, cur:function() {
    var a = l.propHooks[this.prop];
    return a && a.get ? a.get(this) : l.propHooks._default.get(this)
  }, run:function(a) {
    var c, b = l.propHooks[this.prop];
    return this.pos = c = this.options.duration ? d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), b && b.set ? b.set(this) : l.propHooks._default.set(this), this
  }};
  l.prototype.init.prototype = l.prototype;
  l.propHooks = {_default:{get:function(a) {
    var c;
    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (c = d.css(a.elem, a.prop, "auto"), c && "auto" !== c ? c : 0) : a.elem[a.prop]
  }, set:function(a) {
    d.fx.step[a.prop] ? d.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[d.cssProps[a.prop]] || d.cssHooks[a.prop]) ? d.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
  }}};
  l.propHooks.scrollTop = l.propHooks.scrollLeft = {set:function(a) {
    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
  }};
  d.each(["toggle", "show", "hide"], function(a, c) {
    var b = d.fn[c];
    d.fn[c] = function(a, d, g) {
      return null == a || "boolean" == typeof a ? b.apply(this, arguments) : this.animate(n(c, !0), a, d, g)
    }
  });
  d.fn.extend({fadeTo:function(a, c, d, b) {
    return this.filter(V).css("opacity", 0).show().end().animate({opacity:c}, a, d, b)
  }, animate:function(a, c, b, f) {
    var e = d.isEmptyObject(a), l = d.speed(c, b, f), h = function() {
      var c = g(this, d.extend({}, a), l);
      h.finish = function() {
        c.stop(!0)
      };
      (e || d._data(this, "finish")) && c.stop(!0)
    };
    return h.finish = h, e || !1 === l.queue ? this.each(h) : this.queue(l.queue, h)
  }, stop:function(a, c, b) {
    var g = function(a) {
      var c = a.stop;
      delete a.stop;
      c(b)
    };
    return"string" != typeof a && (b = c, c = a, a = e), c && !1 !== a && this.queue(a || "fx", []), this.each(function() {
      var c = !0, f = null != a && a + "queueHooks", e = d.timers, l = d._data(this);
      if(f) {
        l[f] && l[f].stop && g(l[f])
      }else {
        for(f in l) {
          l[f] && l[f].stop && Ec.test(f) && g(l[f])
        }
      }
      for(f = e.length;f--;) {
        e[f].elem !== this || null != a && e[f].queue !== a || (e[f].anim.stop(b), c = !1, e.splice(f, 1))
      }
      !c && b || d.dequeue(this, a)
    })
  }, finish:function(a) {
    return!1 !== a && (a = a || "fx"), this.each(function() {
      var c, b = d._data(this), g = b[a + "queue"];
      c = b[a + "queueHooks"];
      var f = d.timers, e = g ? g.length : 0;
      b.finish = !0;
      d.queue(this, a, []);
      c && c.cur && c.cur.finish && c.cur.finish.call(this);
      for(c = f.length;c--;) {
        f[c].elem === this && f[c].queue === a && (f[c].anim.stop(!0), f.splice(c, 1))
      }
      for(c = 0;e > c;c++) {
        g[c] && g[c].finish && g[c].finish.call(this)
      }
      delete b.finish
    })
  }});
  d.each({slideDown:n("show"), slideUp:n("hide"), slideToggle:n("toggle"), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(a, c) {
    d.fn[a] = function(a, d, b) {
      return this.animate(c, a, d, b)
    }
  });
  d.speed = function(a, c, b) {
    var g = a && "object" == typeof a ? d.extend({}, a) : {complete:b || !b && c || d.isFunction(a) && a, duration:a, easing:b && c || c && !d.isFunction(c) && c};
    return g.duration = d.fx.off ? 0 : "number" == typeof g.duration ? g.duration : g.duration in d.fx.speeds ? d.fx.speeds[g.duration] : d.fx.speeds._default, (null == g.queue || !0 === g.queue) && (g.queue = "fx"), g.old = g.complete, g.complete = function() {
      d.isFunction(g.old) && g.old.call(this);
      g.queue && d.dequeue(this, g.queue)
    }, g
  };
  d.easing = {linear:function(a) {
    return a
  }, swing:function(a) {
    return 0.5 - Math.cos(a * Math.PI) / 2
  }};
  d.timers = [];
  d.fx = l.prototype.init;
  d.fx.tick = function() {
    var a, c = d.timers, b = 0;
    for(la = d.now();c.length > b;b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1)
    }
    c.length || d.fx.stop();
    la = e
  };
  d.fx.timer = function(a) {
    a() && d.timers.push(a) && d.fx.start()
  };
  d.fx.interval = 13;
  d.fx.start = function() {
    Sa || (Sa = setInterval(d.fx.tick, d.fx.interval))
  };
  d.fx.stop = function() {
    clearInterval(Sa);
    Sa = null
  };
  d.fx.speeds = {slow:600, fast:200, _default:400};
  d.fx.step = {};
  d.expr && d.expr.filters && (d.expr.filters.animated = function(a) {
    return d.grep(d.timers, function(c) {
      return a === c.elem
    }).length
  });
  d.fn.offset = function(a) {
    if(arguments.length) {
      return a === e ? this : this.each(function(c) {
        d.offset.setOffset(this, a, c)
      })
    }
    var c, b, g = {top:0, left:0}, f = this[0], l = f && f.ownerDocument;
    if(l) {
      return c = l.documentElement, d.contains(c, f) ? (f.getBoundingClientRect !== e && (g = f.getBoundingClientRect()), b = t(l), {top:g.top + (b.pageYOffset || c.scrollTop) - (c.clientTop || 0), left:g.left + (b.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)}) : g
    }
  };
  d.offset = {setOffset:function(a, c, b) {
    var g = d.css(a, "position");
    "static" === g && (a.style.position = "relative");
    var f, e, l = d(a), h = l.offset(), n = d.css(a, "top"), m = d.css(a, "left"), t = {}, q = {};
    ("absolute" === g || "fixed" === g) && -1 < d.inArray("auto", [n, m]) ? (q = l.position(), f = q.top, e = q.left) : (f = parseFloat(n) || 0, e = parseFloat(m) || 0);
    d.isFunction(c) && (c = c.call(a, b, h));
    null != c.top && (t.top = c.top - h.top + f);
    null != c.left && (t.left = c.left - h.left + e);
    "using" in c ? c.using.call(a, t) : l.css(t)
  }};
  d.fn.extend({position:function() {
    if(this[0]) {
      var a, c, b = {top:0, left:0}, g = this[0];
      return"fixed" === d.css(g, "position") ? c = g.getBoundingClientRect() : (a = this.offsetParent(), c = this.offset(), d.nodeName(a[0], "html") || (b = a.offset()), b.top += d.css(a[0], "borderTopWidth", !0), b.left += d.css(a[0], "borderLeftWidth", !0)), {top:c.top - b.top - d.css(g, "marginTop", !0), left:c.left - b.left - d.css(g, "marginLeft", !0)}
    }
  }, offsetParent:function() {
    return this.map(function() {
      for(var a = this.offsetParent || v.documentElement;a && !d.nodeName(a, "html") && "static" === d.css(a, "position");) {
        a = a.offsetParent
      }
      return a || v.documentElement
    })
  }});
  d.each({scrollLeft:"pageXOffset", scrollTop:"pageYOffset"}, function(a, c) {
    var b = /Y/.test(c);
    d.fn[a] = function(g) {
      return d.access(this, function(a, g, f) {
        var l = t(a);
        return f === e ? l ? c in l ? l[c] : l.document.documentElement[g] : a[g] : (l ? l.scrollTo(b ? d(l).scrollLeft() : f, b ? f : d(l).scrollTop()) : a[g] = f, e)
      }, a, g, arguments.length, null)
    }
  });
  d.each({Height:"height", Width:"width"}, function(a, c) {
    d.each({padding:"inner" + a, content:c, "":"outer" + a}, function(b, g) {
      d.fn[g] = function(g, f) {
        var l = arguments.length && (b || "boolean" != typeof g), h = b || (!0 === g || !0 === f ? "margin" : "border");
        return d.access(this, function(c, b, g) {
          var f;
          return d.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : g === e ? d.css(c, b, h) : d.style(c, b, g, h)
        }, c, l ? g : e, l, null)
      }
    })
  });
  b.jQuery = b.$ = d;
  "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return d
  })
})(window);
(function() {
  var b = this, e = b._, m = {}, q = Array.prototype, B = Object.prototype, I = q.push, w = q.slice, H = q.concat, T = B.toString, L = B.hasOwnProperty, qa = q.forEach, ra = q.map, sa = q.reduce, ua = q.reduceRight, ya = q.filter, ka = q.every, za = q.some, z = q.indexOf, Ha = q.lastIndexOf, B = Array.isArray, Ia = Object.keys, V = Function.prototype.bind, h = function(b) {
    return b instanceof h ? b : this instanceof h ? (this._wrapped = b, void 0) : new h(b)
  };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : b._ = h;
  h.VERSION = "1.4.4";
  var C = h.each = h.forEach = function(b, f, e) {
    if(null != b) {
      if(qa && b.forEach === qa) {
        b.forEach(f, e)
      }else {
        if(b.length === +b.length) {
          for(var n = 0, t = b.length;t > n && f.call(e, b[n], n, b) !== m;n++) {
          }
        }else {
          for(n in b) {
            if(h.has(b, n) && f.call(e, b[n], n, b) === m) {
              break
            }
          }
        }
      }
    }
  };
  h.map = h.collect = function(b, f, e) {
    var h = [];
    return null == b ? h : ra && b.map === ra ? b.map(f, e) : (C(b, function(b, g, m) {
      h[h.length] = f.call(e, b, g, m)
    }), h)
  };
  h.reduce = h.foldl = h.inject = function(b, f, e, n) {
    var m = 2 < arguments.length;
    if(null == b && (b = []), sa && b.reduce === sa) {
      return n && (f = h.bind(f, n)), m ? b.reduce(f, e) : b.reduce(f)
    }
    if(C(b, function(b, g, h) {
      m ? e = f.call(n, e, b, g, h) : (e = b, m = !0)
    }), !m) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    return e
  };
  h.reduceRight = h.foldr = function(b, f, e, n) {
    var m = 2 < arguments.length;
    if(null == b && (b = []), ua && b.reduceRight === ua) {
      return n && (f = h.bind(f, n)), m ? b.reduceRight(f, e) : b.reduceRight(f)
    }
    var q = b.length;
    if(q !== +q) {
      var u = h.keys(b), q = u.length
    }
    if(C(b, function(h, w, z) {
      w = u ? u[--q] : --q;
      m ? e = f.call(n, e, b[w], w, z) : (e = b[w], m = !0)
    }), !m) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    return e
  };
  h.find = h.detect = function(b, f, e) {
    var h;
    return Ba(b, function(b, g, m) {
      return f.call(e, b, g, m) ? (h = b, !0) : void 0
    }), h
  };
  h.filter = h.select = function(b, f, e) {
    var h = [];
    return null == b ? h : ya && b.filter === ya ? b.filter(f, e) : (C(b, function(b, g, m) {
      f.call(e, b, g, m) && (h[h.length] = b)
    }), h)
  };
  h.reject = function(b, f, e) {
    return h.filter(b, function(b, g, h) {
      return!f.call(e, b, g, h)
    }, e)
  };
  h.every = h.all = function(b, f, e) {
    f || (f = h.identity);
    var n = !0;
    return null == b ? n : ka && b.every === ka ? b.every(f, e) : (C(b, function(b, g, h) {
      return(n = n && f.call(e, b, g, h)) ? void 0 : m
    }), !!n)
  };
  var Ba = h.some = h.any = function(b, f, e) {
    f || (f = h.identity);
    var n = !1;
    return null == b ? n : za && b.some === za ? b.some(f, e) : (C(b, function(b, g, h) {
      return n || (n = f.call(e, b, g, h)) ? m : void 0
    }), !!n)
  };
  h.contains = h.include = function(b, f) {
    return null == b ? !1 : z && b.indexOf === z ? -1 != b.indexOf(f) : Ba(b, function(b) {
      return b === f
    })
  };
  h.invoke = function(b, f) {
    var e = w.call(arguments, 2), n = h.isFunction(f);
    return h.map(b, function(b) {
      return(n ? f : b[f]).apply(b, e)
    })
  };
  h.pluck = function(b, f) {
    return h.map(b, function(b) {
      return b[f]
    })
  };
  h.where = function(b, f, e) {
    return h.isEmpty(f) ? e ? null : [] : h[e ? "find" : "filter"](b, function(b) {
      for(var g in f) {
        if(f[g] !== b[g]) {
          return!1
        }
      }
      return!0
    })
  };
  h.findWhere = function(b, f) {
    return h.where(b, f, !0)
  };
  h.max = function(b, f, e) {
    if(!f && h.isArray(b) && b[0] === +b[0] && 65535 > b.length) {
      return Math.max.apply(Math, b)
    }
    if(!f && h.isEmpty(b)) {
      return-1 / 0
    }
    var n = {computed:-1 / 0, value:-1 / 0};
    return C(b, function(b, g, h) {
      g = f ? f.call(e, b, g, h) : b;
      g >= n.computed && (n = {value:b, computed:g})
    }), n.value
  };
  h.min = function(b, f, e) {
    if(!f && h.isArray(b) && b[0] === +b[0] && 65535 > b.length) {
      return Math.min.apply(Math, b)
    }
    if(!f && h.isEmpty(b)) {
      return 1 / 0
    }
    var n = {computed:1 / 0, value:1 / 0};
    return C(b, function(b, g, h) {
      g = f ? f.call(e, b, g, h) : b;
      n.computed > g && (n = {value:b, computed:g})
    }), n.value
  };
  h.shuffle = function(b) {
    var f, e = 0, n = [];
    return C(b, function(b) {
      f = h.random(e++);
      n[e - 1] = n[f];
      n[f] = b
    }), n
  };
  var W = function(b) {
    return h.isFunction(b) ? b : function(f) {
      return f[b]
    }
  };
  h.sortBy = function(b, f, e) {
    var n = W(f);
    return h.pluck(h.map(b, function(b, g, f) {
      return{value:b, index:g, criteria:n.call(e, b, g, f)}
    }).sort(function(b, g) {
      var f = b.criteria, e = g.criteria;
      if(f !== e) {
        if(f > e || void 0 === f) {
          return 1
        }
        if(e > f || void 0 === e) {
          return-1
        }
      }
      return b.index < g.index ? -1 : 1
    }), "value")
  };
  var Aa = function(b, f, e, n) {
    var m = {}, q = W(f || h.identity);
    return C(b, function(f, h) {
      var w = q.call(e, f, h, b);
      n(m, w, f)
    }), m
  };
  h.groupBy = function(b, f, e) {
    return Aa(b, f, e, function(b, g, f) {
      (h.has(b, g) ? b[g] : b[g] = []).push(f)
    })
  };
  h.countBy = function(b, f, e) {
    return Aa(b, f, e, function(b, g) {
      h.has(b, g) || (b[g] = 0);
      b[g]++
    })
  };
  h.sortedIndex = function(b, f, e, m) {
    e = null == e ? h.identity : W(e);
    f = e.call(m, f);
    for(var q = 0, y = b.length;y > q;) {
      var u = q + y >>> 1;
      f > e.call(m, b[u]) ? q = u + 1 : y = u
    }
    return q
  };
  h.toArray = function(b) {
    return b ? h.isArray(b) ? w.call(b) : b.length === +b.length ? h.map(b, h.identity) : h.values(b) : []
  };
  h.size = function(b) {
    return null == b ? 0 : b.length === +b.length ? b.length : h.keys(b).length
  };
  h.first = h.head = h.take = function(b, f, e) {
    return null == b ? void 0 : null == f || e ? b[0] : w.call(b, 0, f)
  };
  h.initial = function(b, f, e) {
    return w.call(b, 0, b.length - (null == f || e ? 1 : f))
  };
  h.last = function(b, f, e) {
    return null == b ? void 0 : null == f || e ? b[b.length - 1] : w.call(b, Math.max(b.length - f, 0))
  };
  h.rest = h.tail = h.drop = function(b, f, e) {
    return w.call(b, null == f || e ? 1 : f)
  };
  h.compact = function(b) {
    return h.filter(b, h.identity)
  };
  var Ca = function(b, f, e) {
    return C(b, function(b) {
      h.isArray(b) ? f ? I.apply(e, b) : Ca(b, f, e) : e.push(b)
    }), e
  };
  h.flatten = function(b, f) {
    return Ca(b, f, [])
  };
  h.without = function(b) {
    return h.difference(b, w.call(arguments, 1))
  };
  h.uniq = h.unique = function(b, f, e, m) {
    h.isFunction(f) && (m = e, e = f, f = !1);
    e = e ? h.map(b, e, m) : b;
    var q = [], y = [];
    return C(e, function(e, l) {
      (f ? l && y[y.length - 1] === e : h.contains(y, e)) || (y.push(e), q.push(b[l]))
    }), q
  };
  h.union = function() {
    return h.uniq(H.apply(q, arguments))
  };
  h.intersection = function(b) {
    var f = w.call(arguments, 1);
    return h.filter(h.uniq(b), function(b) {
      return h.every(f, function(g) {
        return 0 <= h.indexOf(g, b)
      })
    })
  };
  h.difference = function(b) {
    var f = H.apply(q, w.call(arguments, 1));
    return h.filter(b, function(b) {
      return!h.contains(f, b)
    })
  };
  h.zip = function() {
    for(var b = w.call(arguments), f = h.max(h.pluck(b, "length")), e = Array(f), m = 0;f > m;m++) {
      e[m] = h.pluck(b, "" + m)
    }
    return e
  };
  h.object = function(b, f) {
    if(null == b) {
      return{}
    }
    for(var e = {}, h = 0, m = b.length;m > h;h++) {
      f ? e[b[h]] = f[h] : e[b[h][0]] = b[h][1]
    }
    return e
  };
  h.indexOf = function(b, f, e) {
    if(null == b) {
      return-1
    }
    var m = 0, q = b.length;
    if(e) {
      if("number" != typeof e) {
        return m = h.sortedIndex(b, f), b[m] === f ? m : -1
      }
      m = 0 > e ? Math.max(0, q + e) : e
    }
    if(z && b.indexOf === z) {
      return b.indexOf(f, e)
    }
    for(;q > m;m++) {
      if(b[m] === f) {
        return m
      }
    }
    return-1
  };
  h.lastIndexOf = function(b, f, e) {
    if(null == b) {
      return-1
    }
    var h = null != e;
    if(Ha && b.lastIndexOf === Ha) {
      return h ? b.lastIndexOf(f, e) : b.lastIndexOf(f)
    }
    for(e = h ? e : b.length;e--;) {
      if(b[e] === f) {
        return e
      }
    }
    return-1
  };
  h.range = function(b, f, e) {
    1 >= arguments.length && (f = b || 0, b = 0);
    e = arguments[2] || 1;
    for(var h = Math.max(Math.ceil((f - b) / e), 0), m = 0, q = Array(h);h > m;) {
      q[m++] = b, b += e
    }
    return q
  };
  h.bind = function(b, f) {
    if(b.bind === V && V) {
      return V.apply(b, w.call(arguments, 1))
    }
    var e = w.call(arguments, 2);
    return function() {
      return b.apply(f, e.concat(w.call(arguments)))
    }
  };
  h.partial = function(b) {
    var f = w.call(arguments, 1);
    return function() {
      return b.apply(this, f.concat(w.call(arguments)))
    }
  };
  h.bindAll = function(b) {
    var f = w.call(arguments, 1);
    return 0 === f.length && (f = h.functions(b)), C(f, function(f) {
      b[f] = h.bind(b[f], b)
    }), b
  };
  h.memoize = function(b, f) {
    var e = {};
    return f || (f = h.identity), function() {
      var m = f.apply(this, arguments);
      return h.has(e, m) ? e[m] : e[m] = b.apply(this, arguments)
    }
  };
  h.delay = function(b, f) {
    var e = w.call(arguments, 2);
    return setTimeout(function() {
      return b.apply(null, e)
    }, f)
  };
  h.defer = function(b) {
    return h.delay.apply(h, [b, 1].concat(w.call(arguments, 1)))
  };
  h.throttle = function(b, f) {
    var e, h, m, q, u = 0, v = function() {
      u = new Date;
      m = null;
      q = b.apply(e, h)
    };
    return function() {
      var w = new Date, z = f - (w - u);
      return e = this, h = arguments, 0 >= z ? (clearTimeout(m), m = null, u = w, q = b.apply(e, h)) : m || (m = setTimeout(v, z)), q
    }
  };
  h.debounce = function(b, f, e) {
    var h, m;
    return function() {
      var q = this, u = arguments, v = e && !h;
      return clearTimeout(h), h = setTimeout(function() {
        h = null;
        e || (m = b.apply(q, u))
      }, f), v && (m = b.apply(q, u)), m
    }
  };
  h.once = function(b) {
    var f, e = !1;
    return function() {
      return e ? f : (e = !0, f = b.apply(this, arguments), b = null, f)
    }
  };
  h.wrap = function(b, f) {
    return function() {
      var e = [b];
      return I.apply(e, arguments), f.apply(this, e)
    }
  };
  h.compose = function() {
    var b = arguments;
    return function() {
      for(var e = arguments, h = b.length - 1;0 <= h;h--) {
        e = [b[h].apply(this, e)]
      }
      return e[0]
    }
  };
  h.after = function(b, e) {
    return 0 >= b ? e() : function() {
      return 1 > --b ? e.apply(this, arguments) : void 0
    }
  };
  h.keys = Ia || function(b) {
    if(b !== Object(b)) {
      throw new TypeError("Invalid object");
    }
    var e = [], l;
    for(l in b) {
      h.has(b, l) && (e[e.length] = l)
    }
    return e
  };
  h.values = function(b) {
    var e = [], l;
    for(l in b) {
      h.has(b, l) && e.push(b[l])
    }
    return e
  };
  h.pairs = function(b) {
    var e = [], l;
    for(l in b) {
      h.has(b, l) && e.push([l, b[l]])
    }
    return e
  };
  h.invert = function(b) {
    var e = {}, l;
    for(l in b) {
      h.has(b, l) && (e[b[l]] = l)
    }
    return e
  };
  h.functions = h.methods = function(b) {
    var e = [], l;
    for(l in b) {
      h.isFunction(b[l]) && e.push(l)
    }
    return e.sort()
  };
  h.extend = function(b) {
    return C(w.call(arguments, 1), function(e) {
      if(e) {
        for(var h in e) {
          b[h] = e[h]
        }
      }
    }), b
  };
  h.pick = function(b) {
    var e = {}, h = H.apply(q, w.call(arguments, 1));
    return C(h, function(h) {
      h in b && (e[h] = b[h])
    }), e
  };
  h.omit = function(b) {
    var e = {}, l = H.apply(q, w.call(arguments, 1)), m;
    for(m in b) {
      h.contains(l, m) || (e[m] = b[m])
    }
    return e
  };
  h.defaults = function(b) {
    return C(w.call(arguments, 1), function(e) {
      if(e) {
        for(var h in e) {
          null == b[h] && (b[h] = e[h])
        }
      }
    }), b
  };
  h.clone = function(b) {
    return h.isObject(b) ? h.isArray(b) ? b.slice() : h.extend({}, b) : b
  };
  h.tap = function(b, e) {
    return e(b), b
  };
  var Y = function(b, e, l, m) {
    if(b === e) {
      return 0 !== b || 1 / b == 1 / e
    }
    if(null == b || null == e) {
      return b === e
    }
    b instanceof h && (b = b._wrapped);
    e instanceof h && (e = e._wrapped);
    var q = T.call(b);
    if(q != T.call(e)) {
      return!1
    }
    switch(q) {
      case "[object String]":
        return b == e + "";
      case "[object Number]":
        return b != +b ? e != +e : 0 == b ? 1 / b == 1 / e : b == +e;
      case "[object Date]":
      ;
      case "[object Boolean]":
        return+b == +e;
      case "[object RegExp]":
        return b.source == e.source && b.global == e.global && b.multiline == e.multiline && b.ignoreCase == e.ignoreCase
    }
    if("object" != typeof b || "object" != typeof e) {
      return!1
    }
    for(var y = l.length;y--;) {
      if(l[y] == b) {
        return m[y] == e
      }
    }
    l.push(b);
    m.push(e);
    var y = 0, u = !0;
    if("[object Array]" == q) {
      if(y = b.length, u = y == e.length) {
        for(;y-- && (u = Y(b[y], e[y], l, m));) {
        }
      }
    }else {
      var q = b.constructor, v = e.constructor;
      if(q !== v && !(h.isFunction(q) && q instanceof q && h.isFunction(v) && v instanceof v)) {
        return!1
      }
      for(var w in b) {
        if(h.has(b, w) && (y++, !(u = h.has(e, w) && Y(b[w], e[w], l, m)))) {
          break
        }
      }
      if(u) {
        for(w in e) {
          if(h.has(e, w) && !y--) {
            break
          }
        }
        u = !y
      }
    }
    return l.pop(), m.pop(), u
  };
  h.isEqual = function(b, e) {
    return Y(b, e, [], [])
  };
  h.isEmpty = function(b) {
    if(null == b) {
      return!0
    }
    if(h.isArray(b) || h.isString(b)) {
      return 0 === b.length
    }
    for(var e in b) {
      if(h.has(b, e)) {
        return!1
      }
    }
    return!0
  };
  h.isElement = function(b) {
    return!(!b || 1 !== b.nodeType)
  };
  h.isArray = B || function(b) {
    return"[object Array]" == T.call(b)
  };
  h.isObject = function(b) {
    return b === Object(b)
  };
  C("Arguments Function String Number Date RegExp".split(" "), function(b) {
    h["is" + b] = function(e) {
      return T.call(e) == "[object " + b + "]"
    }
  });
  h.isArguments(arguments) || (h.isArguments = function(b) {
    return!(!b || !h.has(b, "callee"))
  });
  "function" != typeof/./ && (h.isFunction = function(b) {
    return"function" == typeof b
  });
  h.isFinite = function(b) {
    return isFinite(b) && !isNaN(parseFloat(b))
  };
  h.isNaN = function(b) {
    return h.isNumber(b) && b != +b
  };
  h.isBoolean = function(b) {
    return!0 === b || !1 === b || "[object Boolean]" == T.call(b)
  };
  h.isNull = function(b) {
    return null === b
  };
  h.isUndefined = function(b) {
    return void 0 === b
  };
  h.has = function(b, e) {
    return L.call(b, e)
  };
  h.noConflict = function() {
    return b._ = e, this
  };
  h.identity = function(b) {
    return b
  };
  h.times = function(b, e, h) {
    for(var m = Array(b), q = 0;b > q;q++) {
      m[q] = e.call(h, q)
    }
    return m
  };
  h.random = function(b, e) {
    return null == e && (e = b, b = 0), b + Math.floor(Math.random() * (e - b + 1))
  };
  var ba = {escape:{"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#x27;", "/":"&#x2F;"}};
  ba.unescape = h.invert(ba.escape);
  var Ka = {escape:RegExp("[" + h.keys(ba.escape).join("") + "]", "g"), unescape:RegExp("(" + h.keys(ba.unescape).join("|") + ")", "g")};
  h.each(["escape", "unescape"], function(b) {
    h[b] = function(e) {
      return null == e ? "" : ("" + e).replace(Ka[b], function(e) {
        return ba[b][e]
      })
    }
  });
  h.result = function(b, e) {
    if(null == b) {
      return null
    }
    var l = b[e];
    return h.isFunction(l) ? l.call(b) : l
  };
  h.mixin = function(b) {
    C(h.functions(b), function(e) {
      var l = h[e] = b[e];
      h.prototype[e] = function() {
        var b = [this._wrapped];
        I.apply(b, arguments);
        b = l.apply(h, b);
        return this._chain ? h(b).chain() : b
      }
    })
  };
  var Ea = 0;
  h.uniqueId = function(b) {
    var e = ++Ea + "";
    return b ? b + e : e
  };
  h.templateSettings = {evaluate:/<%([\s\S]+?)%>/g, interpolate:/<%=([\s\S]+?)%>/g, escape:/<%-([\s\S]+?)%>/g};
  var ca = /(.)^/, La = {"'":"'", "\\":"\\", "\r":"r", "\n":"n", "\t":"t", "\u2028":"u2028", "\u2029":"u2029"}, Wa = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  h.template = function(b, e, l) {
    var m;
    l = h.defaults({}, l, h.templateSettings);
    var q = RegExp([(l.escape || ca).source, (l.interpolate || ca).source, (l.evaluate || ca).source].join("|") + "|$", "g"), w = 0, u = "__p+='";
    b.replace(q, function(e, f, h, l, m) {
      return u += b.slice(w, m).replace(Wa, function(b) {
        return"\\" + La[b]
      }), f && (u += "'+\n((__t=(" + f + "))==null?'':_.escape(__t))+\n'"), h && (u += "'+\n((__t=(" + h + "))==null?'':__t)+\n'"), l && (u += "';\n" + l + "\n__p+='"), w = m + e.length, e
    });
    u += "';\n";
    l.variable || (u = "with(obj||{}){\n" + u + "}\n");
    u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
    try {
      m = Function(l.variable || "obj", "_", u)
    }catch(v) {
      throw v.source = u, v;
    }
    if(e) {
      return m(e, h)
    }
    e = function(b) {
      return m.call(this, b, h)
    };
    return e.source = "function(" + (l.variable || "obj") + "){\n" + u + "}", e
  };
  h.chain = function(b) {
    return h(b).chain()
  };
  h.mixin(h);
  C("pop push reverse shift sort splice unshift".split(" "), function(b) {
    var e = q[b];
    h.prototype[b] = function() {
      var l = this._wrapped;
      return e.apply(l, arguments), "shift" != b && "splice" != b || 0 !== l.length || delete l[0], this._chain ? h(l).chain() : l
    }
  });
  C(["concat", "join", "slice"], function(b) {
    var e = q[b];
    h.prototype[b] = function() {
      var b = e.apply(this._wrapped, arguments);
      return this._chain ? h(b).chain() : b
    }
  });
  h.extend(h.prototype, {chain:function() {
    return this._chain = !0, this
  }, value:function() {
    return this._wrapped
  }})
}).call(this);
var ModelObject = Class.extend({init:function() {
  this.eventListeners = {}
}, registerEvent:function(b) {
  this.eventListeners[b] = []
}, on:function(b, e) {
  if(!this.eventListeners[b]) {
    throw"Event " + b + " does not exist";
  }
  this.eventListeners[b].push(e)
}, off:function(b, e) {
  if(!this.eventListeners[b]) {
    throw"Event " + b + " does not exist";
  }
  var m = this.eventListeners.indexOf(e);
  -1 != m && this.eventListeners.splice(m, 1)
}, notify:function(b, e) {
  for(i in this.eventListeners[b]) {
    this.eventListeners[b][i](e)
  }
}});
var MockupDDEnvironment = {_tagsByType:{}, registerTag:function(b, e) {
  b.getTagType = function() {
    return e
  };
  MockupDDEnvironment._tagsByType[e] = b
}, getTagByType:function(b) {
  return MockupDDEnvironment._tagsByType[b]
}};
var MockupDDModelSerializer = Class.extend({serialize:function(b) {
  var e = [];
  _.each(b.getTags(), function(b) {
    e.push({type:b.getTagType(), selector:b.getSelector(), parameters:b.getParameters()})
  });
  return JSON.stringify({tags:e})
}, deserialize:function(b, e) {
  var m = [], q = new MockupDDModel;
  _.each(JSON.parse(e).tags, function(e) {
    var q = MockupDDEnvironment.getTagByType(e.type);
    m.push(new q(b, e.selector, e.parameters))
  });
  _.each(m, function(b) {
    q.addTag(b)
  });
  return q
}});
var Tag = Class.extend({init:function(b, e, m, q) {
  this.setEngine(b);
  this.selector = e;
  this.element = $(e)[0];
  this.subtags = [];
  this.tagClassId = b.createTagClassId();
  this.registerTag(this.element);
  this.checkParameters(m);
  this.joinPoints = {};
  this.tagRan = !1;
  this.mockupddModel = null
}, checkParameters:function(b) {
  var e = this.getRequiredParameters();
  for(i in e) {
    if(!b[e[i]]) {
      throw"Parameter not supplied: " + e[i];
    }
  }
  this.parameters = b
}, findParentTag:function() {
  for(var b = $(this.element).parent();0 < b.length && !b.data("_mockupdd_tag");) {
    console.log(b), b = b.parent()
  }
  b.data("_mockupdd_tag") && (b.data("_mockupdd_tag").tag.addSubtag(this), this.setParentTag(b.data("_mockupdd_tag").tag))
}, addSubtag:function(b) {
  this.subtags.push(b)
}, getSubtags:function() {
  return this.subtags.concat()
}, getSubtagsOfType:function(b) {
  return _.filter(this.getSubtags(), function(e) {
    return e.getTagType() == b
  })
}, setParentTag:function(b) {
  this.parentTag = b
}, getParentTag:function() {
  return this.parentTag
}, setMockupDDModel:function(b) {
  this.mockupddModel = b
}, getMockupDDModel:function() {
  return this.mockupddModel
}, removeFromMockupDDModel:function() {
  null != this.getMockupDDModel() && this.getMockupDDModel().removeTag(this)
}, getParameters:function() {
  return this.parameters
}, getSelector:function() {
  return this.selector
}, getElement:function() {
  return this.element
}, getTagClassId:function() {
  return this.tagClassId
}, registerTag:function() {
  $(this.element).data("_mockupdd_tag", {tag:this, type:this.getTagType()});
  $(this.element).addClass(this.getTagClassId())
}, prepareToRun:function() {
  this.findParentTag()
}, runTag:function(b) {
  this.tagRan || (this.run(b), this.tagRan = !0)
}, cloneTag:function(b) {
  b = this.clone(b);
  b.tagRan = !1;
  return b
}, getRequiredParameters:function() {
  throw"mustBeImplemented";
}, run:function(b) {
  throw"mustBeImplemented";
}, canRunStandalone:function() {
  return!this.getParentTag()
}, getEngine:function() {
  return this.engine
}, setEngine:function(b) {
  this.engine = b;
  b.addTag(this)
}, getTagType:function() {
  throw"mustBeImplemented";
}, clone:function(b) {
  throw"mustBeImplemented";
}, registerJoinPoint:function(b, e) {
  this.joinPoints[b] = e
}, on:function(b, e) {
  if(!this.joinPoints[b]) {
    throw"JoinPoint " + b + " does not exist";
  }
  this.joinPoints[b] = e
}, runJoinPoint:function(b, e) {
  return this.joinPoints[b].apply(this, e)
}, addJoinPoints:function(b) {
  for(joinPointName in b) {
    this.on(joinPointName, b[joinPointName])
  }
}, getJoinPoints:function() {
  joinPointsCopy = {};
  for(joinPointName in this.joinPoints) {
    joinPointsCopy[joinPointName] = this.joinPoints[joinPointName]
  }
  return joinPointsCopy
}, copyJoinPointsTo:function(b) {
  b.addJoinPoints(this.getJoinPoints());
  return b
}});
var DataTag = Tag.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.registerJoinPoint("get", function(b) {
    return b
  });
  this.registerJoinPoint("set", function(b) {
    return b
  })
}, getRequiredParameters:function() {
  return["class"]
}, run:function(b) {
  var e = this;
  this.getParameters().isList && $(this.getElement()).hide();
  "createsOrUpdates" != this.getParameters().mode && this.getParameters().mode || (this.dataBind(b), b = this.getParameters(), !b.property && b.isList && this.getEngine().getDataManager().addObjectListener(b["class"], function() {
    e.bindAllObjects()
  }))
}, canRunStandalone:function() {
  return!this.getParameters().property
}, dataBind:function(b) {
  var e = this.getParameters(), m = this;
  e.property ? this.bindProperty(b) : e.sourceTag || e.property || e.isList ? e.sourceTag || (e.property || !e.isList) || (this.bindAllObjects(), this.getEngine().getDataManager().addObjectListener(e["class"], function() {
    m.bindAllObjects()
  })) : (this.bindSingleObject(), this.getEngine().getDataManager().addObjectListener(e["class"], function() {
    m.bindSingleObject()
  }))
}, bindProperty:function(b) {
  if("creates" == this.getParameters().mode) {
    throw'Data tag: cannot bind property with a parent tag in "creates" mode';
  }
  $(this.getElement()).is("input") ? $(this.getElement()).val(this.runJoinPoint("get", [b.object[this.getParameters().property]])) : $(this.getElement()).html(this.runJoinPoint("get", [b.object[this.getParameters().property]]))
}, getObjects:function(b) {
  var e = this.getParameters();
  if(e.dataPath) {
    e = (e.sourceTag ? e.sourceTag : this.getParentTag()).getData()[e.dataPath];
    if(!e) {
      return[]
    }
    b(e instanceof Array ? e : [e])
  }else {
    this.getEngine().getDataManager().getAll(this.getParameters()["class"], function(e) {
      b(e)
    })
  }
}, bindSingleObject:function() {
  var b = this;
  this.getEngine().getPageContextManager().getPageContextForCurrentPage(function(e) {
    e ? (e = e.objects[b.getParameters()["class"]]) ? b.bindObject(e) : b.bindFirstObject() : b.bindFirstObject()
  })
}, bindFirstObject:function() {
  var b = this;
  this.getObjects(function(e) {
    var m = null;
    for(id in e) {
      m = e[id];
      break
    }
    b.bindObject(m)
  })
}, bindObject:function(b) {
  this._setData(b);
  $.each(this.getSubtags(), function(e, m) {
    m.runTag({object:b})
  })
}, bindAllObjects:function() {
  var b = this;
  $(this.getElement()).parent().find("." + this.getTagClassId() + "_element").remove();
  this.getObjects(function(e) {
    b._setData(e);
    e = _.sortBy(_.toArray(e), function(b) {
      return b._id
    }).reverse();
    _.each(e, function(e) {
      var q = $(b.element).clone();
      q.addClass(b.getTagClassId() + "_element");
      $(b.getElement()).after(q);
      _.each(b.getSubtags(), function(B) {
        B = B.cloneTag(q.find("." + B.getTagClassId()));
        B.setParentTag(b);
        B.runTag({object:e})
      });
      q.show(500)
    })
  })
}, createObject:function() {
  var b = {};
  $.each(this.getSubtagsOfType(this.getTagType()), function(e, m) {
    m.setValueToObject(b)
  });
  return b
}, cleanFields:function() {
  _.each(this.getSubtagsOfType(this.getTagType()), function(b) {
    b.cleanField()
  })
}, cleanField:function() {
  $(this.getElement()).is("input") && $(this.getElement()).val("")
}, setValueToObject:function(b) {
  b[this.getParameters().property] = this.runJoinPoint("set", [$(this.element).val()])
}, getTagType:function() {
  return"Data::Data"
}, rebind:function() {
  this.runTag()
}, _setData:function(b) {
  this.data = b
}, getData:function() {
  return this.data
}, clone:function(b) {
  return this.copyJoinPointsTo(new DataTag(this.getEngine(), b, this.getParameters()))
}});
MockupDDEnvironment.registerTag(DataTag, "Data::Data");
var DeleteTag = Tag.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.registerJoinPoint("before", function(b) {
    return!0
  })
}, getRequiredParameters:function() {
  return[]
}, run:function(b) {
  var e = this;
  this.object = b.object;
  $(this.getElement()).click(function() {
    if(e.runJoinPoint("before", [b.object])) {
      e.getEngine().getDataManager()["delete"](e.getParentTag().getParameters()["class"], b.object)
    }
  })
}, getTagType:function() {
  return"Action::Delete"
}, clone:function(b) {
  return this.copyJoinPointsTo(new DeleteTag(this.getEngine(), b, this.getParameters()))
}});
MockupDDEnvironment.registerTag(DeleteTag, "Action::Delete");
var SaveTag = Tag.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.registerJoinPoint("before", function(b) {
    return!0
  })
}, getRequiredParameters:function() {
  return[]
}, run:function() {
  var b = this;
  $(this.getElement()).click(function(e) {
    e.preventDefault();
    e = b.getSourceTag().createObject();
    b.runJoinPoint("before", [e]) && (b.getSourceTag().getParameters().dataPath ? (b.getSourceTag().getParentTag().getData()[b.getSourceTag().getParameters().dataPath].push(e), b.getEngine().getDataManager().save(b.getSourceTag().getParentTag().getParameters()["class"], b.getSourceTag().getParentTag().getData(), function() {
      b.getSourceTag().cleanFields()
    })) : b.getEngine().getDataManager().save(b.getSourceTag().getParameters()["class"], e, function() {
      b.getSourceTag().cleanFields()
    }))
  })
}, getSourceTag:function() {
  return this.getParentTag()
}, canRunStandalone:function() {
  return!0
}, getTagType:function() {
  return"Action::Save"
}, clone:function(b) {
  return this.copyJoinPointsTo(new DeleteTag(this.getEngine(), b, this.getParameters()))
}});
MockupDDEnvironment.registerTag(SaveTag, "Action::Save");
var LinkTag = Tag.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.registerJoinPoint("before", function(b) {
    return!0
  })
}, getRequiredParameters:function() {
  return["page"]
}, run:function(b) {
  var e = this;
  
  this.object = b.object;
  $(this.getElement()).click(function(b) {
    b.preventDefault();
    e.runJoinPoint("before", [e.object]) && (null != e.getParentTag() && "Data::Data" == e.getParentTag().getTagType()) && (b = {objects:{}}, b.objects[e.getParentTag().getParameters()["class"]] = e.object, e.getEngine().getPageContextManager().createPageContext(b, function(b) {
      window.location = e.getParameters().page + ".htm?mockupdd-run=1&mockupdd-page-context=" + b.id
    }))
  })
}, getTagType:function() {
  return"Action::Link"
}, clone:function(b) {
  return this.copyJoinPointsTo(new LinkTag(this.getEngine(), b, this.getParameters()))
}});
MockupDDEnvironment.registerTag(LinkTag, "Action::Link");
var MockupDDModel = ModelObject.extend({init:function() {
  this._super();
  this.tags = [];
  this.registerEvent("addTag")
}, addTag:function(b) {
  -1 == this.tags.indexOf(b) && (this.tags.push(b), b.setMockupDDModel(this), this.notify("addTag", b))
}, removeTag:function(b) {
  var e = this.tags.indexOf(b);
  -1 != e && (this.tags.splice(e, 1), b.setMockupDDModel(null))
}, getTags:function() {
  return this.tags.concat()
}});
var DataManager = Class.extend({init:function() {
  this.objectListeners = {}
}, save:function(b, e, m) {
  var q = this;
  this._saveObject(b, e, function() {
    q._notifyListeners(b);
    m && m()
  })
}, "delete":function(b, e, m) {
  var q = this;
  this._deleteObject(b, e, function() {
    q._notifyListeners(b);
    m && m()
  })
}, addObjectListener:function(b, e) {
  this.objectListeners[b] || (this.objectListeners[b] = []);
  this.objectListeners[b].push(e)
}, _notifyListeners:function(b) {
  if(this.objectListeners[b]) {
    for(i in this.objectListeners[b]) {
      this.objectListeners[b][i]()
    }
  }
}, getAll:function(b, e) {
  throw"mustBeImplemented";
}, _saveObject:function(b, e, m) {
  throw"mustBeImplemented";
}, _deleteObject:function(b, e, m) {
  throw"mustBeImplemented";
}});
Storage.prototype.setObject = function(b, e) {
  this.setItem(b, JSON.stringify(e))
};
Storage.prototype.getObject = function(b) {
  return(b = this.getItem(b)) && JSON.parse(b)
};
var LocalStorageDataManager = DataManager.extend({init:function() {
  this._super()
}, getNextId:function(b) {
  b += "-id";
  if(localStorage[b]) {
    var e = parseInt(localStorage[b], 10) + 1;
    return localStorage[b] = e
  }
  return localStorage[b] = 0
}, _saveObject:function(b, e, m) {
  console.log(b, e);
  var q = localStorage.getObject(b);
  q || (q = {});
  e._id || (e._id = this.getNextId(b));
  q[e._id] = e;
  localStorage.setObject(b, q);
  m && m()
}, getAll:function(b, e) {
  var m = localStorage.getObject(b);
  if(!m) {
    return{}
  }
  e(m)
}, _deleteObject:function(b, e, m) {
  console.log(b, e);
  localStorage[b] || (localStorage[b] = []);
  var q = localStorage.getObject(b);
  delete q[e._id];
  localStorage.setObject(b, q);
  m && m()
}, deleteAll:function(b) {
  localStorage.setObject(b, {})
}});
Storage.prototype.setObject = function(b, e) {
  this.setItem(b, JSON.stringify(e))
};
Storage.prototype.getObject = function(b) {
  return(b = this.getItem(b)) && JSON.parse(b)
};
var LocalStoragePageContextManager = Class.extend({init:function() {
}, createPageContext:function(b, e) {
  var m = (new Date).getTime(), q = this._getContexts();
  q[m] = b;
  b.id = m;
  this._saveContexts(q);
  e(b)
}, _getContextById:function(b) {
  return this._getContexts()[b]
}, _getContexts:function() {
  var b = localStorage.getObject("_mockupdd_LocalStoragePageContextManager_contexts");
  b || (b = {}, this._saveContexts(b));
  return b
}, _saveContexts:function(b) {
  return localStorage.setObject("_mockupdd_LocalStoragePageContextManager_contexts", b)
}, getPageContextForCurrentPage:function(b) {
  var e = window.location.search.match(/mockupdd\-page\-context=[0-9]+/);
  e ? (e = e[0].split("=")[1], b(this._getContextById(e))) : b(null)
}});
Storage.prototype.setObject = function(b, e) {
  this.setItem(b, JSON.stringify(e))
};
Storage.prototype.getObject = function(b) {
  return(b = this.getItem(b)) && JSON.parse(b)
};
var MockupDDModelStore = Class.extend({saveModel:function(b, e) {
  
  localStorage[b] = e
}, getModel:function(b) {
  return localStorage[b]
}});
var MockupDDEngine = Class.extend({init:function(b, e) {
  this.dataManager = b;
  this.tags = [];
  this.nextTagClassId = 0;
  this.pageContextManager = e
}, getDataManager:function() {
  return this.dataManager
}, getPageContextManager:function() {
  return this.pageContextManager
}, createTagClassId:function() {
  return"_mockupdd_tag_class_" + this.nextTagClassId++
}, addTag:function(b) {
  this.tags.push(b)
}, run:function() {
  this.tags = _.sortBy(this.tags, function(b) {
    return $(b.getElement()).parents().length
  });
  _.each(this.tags, function(b) {
    b.prepareToRun()
  });
  _.each(this.tags, function(b) {
    b.canRunStandalone() && b.runTag({})
  })
}});
var MockupDDEditor = Class.extend({init:function(b) {
  this.model = b;
  this.tagEditors = [];
  this.editorFunctions = this.createEditorFunctionsByTagType()
}, createEditorFunctionsByTagType:function() {
  return{"Data::Data":function(b, e, m) {
    return b.getParameters().isList ? new DataListTagEditor(b, e, m) : b.getParameters().property ? new DataPropertyTagEditor(b, e, m) : new DataItemTagEditor(b, e, m)
  }, "Action::Save":function(b, e, m) {
    return new SaveTagEditor(b, e, m)
  }, "Action::Delete":function(b, e, m) {
    return new DeleteTagEditor(b, e, m)
  }, "Action::Link":function(b, e, m) {
    return new LinkTagEditor(b, e, m)
  }}
}, addTag:function(b, e, m) {
  this.model.addTag(b);
  b = this.editorFunctions[b.getTagType()](b, e, m);
  this.addTagEditor(b);
  return b
}, addTagEditor:function(b) {
  this.tagEditors.push(b)
}, getTagEditors:function() {
  return this.tagEditors.concat()
}, switchToDeveloperMode:function() {
  _.each(this.getTagEditors(), function(b) {
    b.switchToDeveloperMode()
  })
}});
var MockupDDToolbox = Class.extend({init:function(b, e) {
  this.rootElement = e;
  this.toolboxItems = [];
  var m = this;
  this.model = b;
  this.prevElement = null;
  $(e).find("div,tr,td,span,input,button,form").mouseenter(function(b) {
    $(this).addClass("mockupdd-tagger-highlighted-element");
    $(m.prevElement).removeClass("mockupdd-tagger-highlighted-element");
    m.prevElement = this;
    b.stopPropagation()
  });
  $(e).find("div,tr,td,span,input,button,form").click(function(b) {
    m.showMenuOver(this);
    b.stopPropagation();
    b.preventDefault()
  });
  this.renderOn(e)
}, renderOn:function(b) {
  var e = this;
  this.menuEntries = $('<ul class="mockupdd-tagger-menu">');
  this.overlay = $('<div class="mockupdd-tagger-selected-overlay">');
  $(this.rootElement).append(this.overlay);
  $(this.rootElement).append(this.menuEntries);
  _.each(this.getToolboxItems(), function(b) {
    e.renderToolboxItem(b)
  });
  this.menuEntries.hide()
}, showMenuOver:function(b) {
  var e = this;
  this.currentElement = b;
  this.menuEntries.fadeOut(100, function() {
    var m = $(b).position();
    e.menuEntries.css({left:m.left, top:m.top + $(b).height()});
    e.overlay.show();
    e.overlay.css({left:m.left, top:m.top, width:$(b).width(), height:$(b).height()});
    e.menuEntries.fadeIn(100)
  });
  _.each(this.toolboxItems, function(m) {
    m.setContext(e.model, b, e.pathFromElement(b))
  })
}, cancelSelection:function() {
  this.overlay.hide();
  this.menuEntries.fadeOut(100)
}, selectParentElement:function() {
  $(this.currentElement).parent() && this.showMenuOver($(this.currentElement).parent())
}, renderToolboxItem:function(b) {
  var e = $('<li class="mockupdd-tagger-menu-item">');
  this.menuEntries.append(e);
  b.renderOn(e)
}, addToolboxItem:function(b) {
  var e = this;
  this.toolboxItems.push(b);
  this.renderToolboxItem(b);
  b.addClickListenerRecursively(function() {
    e.cancelSelection()
  })
}, getToolboxItems:function() {
  return this.toolboxItems.concat()
}, pathFromElement:function(b) {
  b = $(b);
  for(var e = "";0 < b.parent().length;) {
    if(b.attr("id")) {
      e = "#" + b.attr("id") + " " + e;
      break
    }
    var m = b.parent().children().filter(b[0].nodeName).toArray().indexOf(b[0]), e = " > " + b[0].nodeName.toLowerCase() + ":eq(" + m + ") " + e;
    b = b.parent()
  }
  return e
}});
MockupDDToolbox.utils = {};
MockupDDToolbox.utils.addDataClass = function(b) {
  $(b).parent().addClass("mockupdd-data-tag")
};
MockupDDToolbox.utils.addActionClass = function(b) {
  $(b).parent().addClass("mockupdd-action-tag")
};
MockupDDToolbox.createDefault = function(b, e, m, q) {
  var B = new MockupDDToolbox(e, m);
  B.addToolboxItem(new MockupDDToolboxItem("[cancel]", function(b, e, m) {
    B.cancelSelection()
  }));
  B.addToolboxItem(new MockupDDToolboxItem("[up]", function(b, e, m) {
    B.selectParentElement()
  }));
  B.addToolboxItem(new MockupDDToolboxItem("What is this element?", function(b, e, m) {
  }, [new MockupDDToolboxItem("a list of (object) ...", function(e, w, B) {
    q.addTag(new DataTag(b, B, {"class":"Class", isList:!0}), w, m)
  }, [], MockupDDToolbox.utils.addDataClass), new MockupDDToolboxItem("a/an (object) ...", function(e, w, B) {
    q.addTag(new DataTag(b, B, {"class":"Class"}), w, m)
  }, [], MockupDDToolbox.utils.addDataClass), new MockupDDToolboxItem("an (attribute/property) of an (object)", function(e, w, B) {
    q.addTag(new DataTag(b, B, {"class":"Class", property:"property"}), w, m)
  }, [], MockupDDToolbox.utils.addDataClass)], MockupDDToolbox.utils.addDataClass));
  B.addToolboxItem(new MockupDDToolboxItem("What does this element do?", function(b, e, m) {
  }, [new MockupDDToolboxItem("saves the (object) ...", function(e, w, B) {
    q.addTag(new SaveTag(b, B, {"class":"Class", mode:"creates"}), w, m)
  }, [], MockupDDToolbox.utils.addActionClass), new MockupDDToolboxItem("deletes the (object) ...", function(e, w, B) {
    q.addTag(new DeleteTag(b, B, {"class":"Class"}), w, m)
  }, [], function(b) {
    $(b).addClass("mockupdd-action-tag")
  }), new MockupDDToolboxItem("navigates to (page) ...", function(e, w, B) {
    q.addTag(new LinkTag(b, B, {page:"pageName"}), w, m)
  }, [], MockupDDToolbox.utils.addActionClass)], MockupDDToolbox.utils.addActionClass))
};
var MockupDDToolboxItem = Class.extend({init:function(b, e, m, q) {
  this.creationFunction = e;
  this.description = b;
  this.elementSelector = this.element = this.model = null;
  this.clickListeners = [];
  this.childItems = m ? m : [];
  this.afterRenderCallback = q
}, renderOn:function(b) {
  var e = this, m = $('<div class="mockupdd-tagger-menu-item">' + this.description + "</div>");
  m.click(function() {
    e.creationFunction(e.model, e.element, e.elementSelector);
    e.notifyClickListeners()
  });
  $(b).append(m);
  0 < this.childItems.length && this.renderChildItems(this.childItems, b);
  this.afterRenderCallback && this.afterRenderCallback(m)
}, renderChildItems:function(b, e) {
  var m = $('<ul class="mockupdd-tagger-menu">');
  _.each(b, function(b) {
    var e = $('<li class="mockupdd-tagger-menu-item-container">');
    m.append(e);
    b.renderOn(e)
  });
  $(e).mouseenter(function() {
    m.show()
  });
  $(e).mouseleave(function() {
    m.hide()
  });
  m.hide();
  $(e).append(m)
}, setContext:function(b, e, m) {
  this.model = b;
  this.element = e;
  this.elementSelector = m;
  _.each(this.childItems, function(q) {
    q.setContext(b, e, m)
  })
}, addClickListener:function(b) {
  this.clickListeners.push(b)
}, addClickListenerRecursively:function(b) {
  this.addClickListener(b);
  _.each(this.childItems, function(e) {
    e.addClickListenerRecursively(b)
  })
}, notifyClickListeners:function() {
  _.each(this.clickListeners, function(b) {
    b()
  })
}, getChildItems:function() {
  return this.childItems
}});
var MockupDDToolboxMenu = MockupDDToolboxItem.extend({init:function(b, e, m) {
  this._super(b, e);
  this.items = m
}, renderOn:function(b) {
  var e = this, m = $('<ul class="mockupdd-tagger-menu">' + this.description + "</ul>");
  _.each(this.items, function(b) {
    var e = $('<li class="mockupdd-tagger-menu-item-container>');
    b.renderOn(e);
    m.append(e)
  });
  menuItem.click(function() {
    e.creationFunction(e.model, e.element);
    e.notifyClickListeners()
  });
  $(b).append(m)
}});
var TagEditor = Class.extend({init:function(b, e, m) {
  var q = this;
  this.model = b;
  this.element = e;
  this.editContent = this.buildEditContent(e);
  this.readContent = this.buildReadContent(e);
  this.developerContent = this.buildDeveloperContent(e);
  this.mode = TagEditor.END_USER_MODE;
  this.readContent.click(function() {
    q.setEditMode()
  });
  this.editContentToolbar = this.buildEditContentToolbar();
  this.container = $('<div class="mockupdd-tag-widget">');
  this.container.append(this.readContent);
  this.container.append(this.editContent);
  this.container.css({left:$(e).position().left, top:$(e).position().top});
  this.container.append(this.editContentToolbar);
  this.container.append(this.developerContent);
  $(m).append(this.container);
  this.setEditMode()
}, getModel:function() {
  return this.model
}, getElement:function() {
  return this.element
}, hideAll:function() {
  this.readContent.hide();
  this.editContent.hide();
  this.editContentToolbar.hide();
  this.developerContent.hide()
}, setEditMode:function() {
  this.hideAll();
  this.bindEditData();
  this.editContent.fadeIn(100);
  this.editContentToolbar.show();
  this.container.addClass("mockupdd-tag-widget-editing-mode");
  this.editContent.find("input:first").select()
}, setReadMode:function() {
  this.hideAll();
  this.bindReadData();
  this.readContent.fadeIn(100);
  this.container.removeClass("mockupdd-tag-widget-editing-mode")
}, switchToDeveloperMode:function() {
  this.hideAll();
  this.developerContent.show(100);
  var b = "";
  for(parameter in this.model.getParameters()) {
    0 < b.length && (b += ", "), b = b + parameter + ':"' + this.model.getParameters()[parameter] + '"'
  }
  b = this.model.getTagType() + " {" + b + "}";
  this.developerContent.html(b)
}, getContainer:function() {
  return this.container
}, getEditContent:function() {
  return this.editContent
}, getReadContent:function() {
  return this.readContent
}, buildEditContentToolbar:function() {
  var b = this, e = $('<div><button class="mockupdd-tag-ok-button btn">Ok</button><button class="mockupdd-tag-cancel-button btn">Cancel</button><button class="mockupdd-tag-delete-button btn">Delete</button></div>');
  e.hide();
  e.find(".mockupdd-tag-ok-button").click(function(e) {
    b.saveDataToModel() && b.setReadMode();
    e.preventDefault()
  });
  e.find(".mockupdd-tag-cancel-button").click(function(e) {
    b.setReadMode();
    e.preventDefault()
  });
  e.find(".mockupdd-tag-delete-button").click(function(e) {
    b.container.remove();
    b.model.removeFromMockupDDModel()
  });
  return e
}, buildDeveloperContent:function() {
  return $('<div class="mockupdd-developer-content"></div>')
}, buildEditContent:function(b) {
  throw"mustBeImplemented";
}, buildReadContent:function(b) {
  throw"mustBeImplemented";
}, saveDataToModel:function(b) {
  throw"mustBeImplemented";
}, bindReadData:function(b) {
  throw"mustBeImplemented";
}, bindEditData:function(b) {
  throw"mustBeImplemented";
}});
TagEditor.END_USER_MODE = 0;
TagEditor.DEVELOPER_MODE = 1;
var DataListTagEditor = TagEditor.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.getContainer().addClass("mockupdd-data-tag")
}, buildEditContent:function(b) {
  return $('<div>list of <input type="text"></input></div>')
}, buildReadContent:function(b) {
  return $("<div>list of <span></span></div>")
}, saveDataToModel:function(b) {
  this.getModel().getParameters()["class"] = this.getEditContent().find("input").val();
  return!0
}, bindReadData:function(b) {
  this.getReadContent().find("span").html(this.getModel().getParameters()["class"])
}, bindEditData:function(b) {
  this.getEditContent().find("input").val(this.getModel().getParameters()["class"])
}});
var DataPropertyTagEditor = TagEditor.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.getContainer().addClass("mockupdd-data-tag")
}, buildEditContent:function(b) {
  return $('<div><input class="mockupdd-tag-class-input" type="text"></input>\'s <input type="text" class="mockupdd-tag-property-input"></div>')
}, buildReadContent:function(b) {
  return $('<div><span class="mockupdd-tag-class"></span>\'s <span class="mockupdd-tag-property"></span></div>')
}, saveDataToModel:function(b) {
  this.getModel().getParameters()["class"] = this.getEditContent().find(".mockupdd-tag-class-input").val();
  this.getModel().getParameters().property = this.getEditContent().find(".mockupdd-tag-property-input").val();
  return!0
}, bindReadData:function(b) {
  this.getReadContent().find(".mockupdd-tag-class").html(this.getModel().getParameters()["class"]);
  this.getReadContent().find(".mockupdd-tag-property").html(this.getModel().getParameters().property)
}, bindEditData:function(b) {
  this.getEditContent().find(".mockupdd-tag-class-input").val(this.getModel().getParameters()["class"]);
  this.getEditContent().find(".mockupdd-tag-property-input").val(this.getModel().getParameters().property)
}});
var DataItemTagEditor = TagEditor.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.getContainer().addClass("mockupdd-data-tag")
}, buildEditContent:function(b) {
  return $('<div>a/an <input class="mockupdd-tag-class-input"</div>')
}, buildReadContent:function(b) {
  return $('<div>a/an <span class="mockupdd-tag-class"></span></div>')
}, saveDataToModel:function(b) {
  this.getModel().getParameters()["class"] = this.getEditContent().find(".mockupdd-tag-class-input").val();
  return!0
}, bindReadData:function(b) {
  this.getReadContent().find(".mockupdd-tag-class").html(this.getModel().getParameters()["class"])
}, bindEditData:function(b) {
  this.getEditContent().find(".mockupdd-tag-class-input").val(this.getModel().getParameters()["class"])
}});
var SaveTagEditor = TagEditor.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.getContainer().addClass("mockupdd-action-tag")
}, buildEditContent:function(b) {
  return $('<div>saves the <input class="mockupdd-tag-class-input"</div>')
}, buildReadContent:function(b) {
  return $('<div>saves the <span class="mockupdd-tag-class"></span></div>')
}, saveDataToModel:function(b) {
  this.getModel().getParameters()["class"] = this.getEditContent().find(".mockupdd-tag-class-input").val();
  return!0
}, bindReadData:function(b) {
  this.getReadContent().find(".mockupdd-tag-class").html(this.getModel().getParameters()["class"])
}, bindEditData:function(b) {
  this.getEditContent().find(".mockupdd-tag-class-input").val(this.getModel().getParameters()["class"])
}});
var DeleteTagEditor = TagEditor.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.getContainer().addClass("mockupdd-action-tag")
}, buildEditContent:function(b) {
  return $('<div>deletes the <input class="mockupdd-tag-class-input"</div>')
}, buildReadContent:function(b) {
  return $('<div>deletes the <span class="mockupdd-tag-class"></span></div>')
}, saveDataToModel:function(b) {
  this.getModel().getParameters()["class"] = this.getEditContent().find(".mockupdd-tag-class-input").val();
  return!0
}, bindReadData:function(b) {
  this.getReadContent().find(".mockupdd-tag-class").html(this.getModel().getParameters()["class"])
}, bindEditData:function(b) {
  this.getEditContent().find(".mockupdd-tag-class-input").val(this.getModel().getParameters()["class"])
}});
var LinkTagEditor = TagEditor.extend({init:function(b, e, m) {
  this._super(b, e, m);
  this.getContainer().addClass("mockupdd-action-tag")
}, buildEditContent:function(b) {
  return $('<div>navigate to <input type="text"></input> page </div>')
}, buildReadContent:function(b) {
  return $("<div>navigate to <span></span> page</div>")
}, saveDataToModel:function(b) {
  this.getModel().getParameters().page = this.getEditContent().find("input").val();
  return!0
}, bindReadData:function(b) {
  this.getReadContent().find("span").html(this.getModel().getParameters().page)
}, bindEditData:function(b) {
  this.getReadContent().find("input").html(this.getModel().getParameters().page)
}});
MockupDDTool = Class.extend({init:function() {
  this.serializer = new MockupDDModelSerializer;
  this.engine = new MockupDDEngine(new LocalStorageDataManager, new LocalStoragePageContextManager);
  this.store = new MockupDDModelStore;
  this.toolbox = this.editor = this.model = null
}, run:function() {
  var b = this;
  $(document).ready(function() {
    b.runNow()
  })
}, runNow:function() {
  var b = this, e = b.computeUrl(), e = b.store.getModel(e);
  b.model = e ? b.serializer.deserialize(b.engine, e) : new MockupDDModel;
  if(window.location.search.match("mockupdd-run=1")) {
    b.engine.run()
  }else {
    var m = $("body")[0];
    
    b.editor = new MockupDDEditor(b.model);
    b.toolbox = MockupDDToolbox.createDefault(b.engine, b.model, m, b.editor);
    _.each(b.model.tags, function(e) {
      b.editor.addTag(e, $(e.getSelector())[0], m).setReadMode()
    })
  }
}, computeUrl:function() {
  return window.location.href.substr(0, window.location.href.length - window.location.search.length)
}, saveModel:function() {
  this.store.saveModel(this.computeUrl(), this.serializer.serialize(this.model))
}, clearModel:function() {
  this.model = new MockupDDModel;
  this.saveModel()
}});

