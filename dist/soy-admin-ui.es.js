import re from "react";
var p = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function te() {
  if (I) return _;
  I = 1;
  var c = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function i(f, a, s) {
    var b = null;
    if (s !== void 0 && (b = "" + s), a.key !== void 0 && (b = "" + a.key), "key" in a) {
      s = {};
      for (var E in a)
        E !== "key" && (s[E] = a[E]);
    } else s = a;
    return a = s.ref, {
      $$typeof: c,
      type: f,
      key: b,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return _.Fragment = m, _.jsx = i, _.jsxs = i, _;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ne() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case y:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function i(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), m(e);
      }
    }
    function f(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === y)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        h || (h = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = c(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, l, u, A, S) {
      return t = u.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: u,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, r, t, n, l, u, A, S) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (K(o)) {
            for (n = 0; n < o.length; n++)
              x(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(o);
      if (j.call(r, "key")) {
        o = c(e);
        var d = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          d,
          o
        ), $[o + n] = !0);
      }
      if (o = null, t !== void 0 && (i(t), o = "" + t), b(r) && (i(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var g in r)
          g !== "key" && (t[g] = r[g]);
      } else t = r;
      return o && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        o,
        u,
        l,
        a(),
        t,
        A,
        S
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var v = re, P = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), k = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, K = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var h, N = {}, C = v["react-stack-bottom-frame"].bind(
      v,
      s
    )(), Y = O(f(s)), $ = {};
    R.Fragment = T, R.jsx = function(e, r, t, n, l) {
      var u = 1e4 > k.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !1,
        n,
        l,
        u ? Error("react-stack-top-frame") : C,
        u ? O(f(e)) : Y
      );
    }, R.jsxs = function(e, r, t, n, l) {
      var u = 1e4 > k.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !0,
        n,
        l,
        u ? Error("react-stack-top-frame") : C,
        u ? O(f(e)) : Y
      );
    };
  }()), R;
}
var D;
function oe() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? p.exports = te() : p.exports = ne()), p.exports;
}
var ae = oe();
const se = "_button_w9a7i_4", ue = "_custom_w9a7i_9", L = {
  button: se,
  custom: ue
}, le = ({ variant: c = "primary", className: m, ...i }) => {
  const f = "px-4 py-2 rounded font-semibold", a = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    custom: L.custom
  };
  return /* @__PURE__ */ ae.jsx(
    "button",
    {
      ...i,
      className: `${f} ${a[c]} ${L.button} ${m || ""}`
    }
  );
};
export {
  le as SampleButton
};
