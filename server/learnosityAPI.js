/*************************************************************
 *  Learnosity Items API version v1.114.1
 *
 *  Documentation available at: https://reference.learnosity.com
 *
 *  Copyright 2011 - 2022 Learnosity - https://www.learnosity.com
 */
var console = window.console || { log: function () {}, error: function () {} },
  LearnosityItems =
    window.LearnosityItems ||
    (function () {
      var o = {},
        r = ["primeOffline", "needsPushing", "push", "offline"];
      function e(r) {
        return "1" === (r = r.slice(0)) || "true" === r;
      }
      (o.version = "v1.114.1"),
        (o.versions = {
          requested: "latest",
          mapped: "latest",
          concrete: "v1.114.1",
          server: "latest",
          assets: "v1.114.1",
        }),
        (o.errors = []),
        (o._internal = {}),
        (o._internal.instanceCachedMethodCalls = []),
        (o._internal.instanceMethodsToCache = ["on", "off", "once", "reset"]),
        (o._internal.getDirectionProperty = function () {
          var r = document.querySelector("script[data-lrn-dir]"),
            r = r ? r.dataset.lrnDir : null;
          return r && -1 !== ["ltr", "rtl", "ltr-rtl", "rtl-ltr"].indexOf(r)
            ? r
            : null;
        }),
        (o._internal.config = {
          apiHost: "https://items.learnosity.com/" + o.versions.server,
          assetsHost: "https://items.learnosity.com/" + o.versions.assets,
          assessApiPath: "https://assess.learnosity.com/",
          questionsApiPath: "https://api-va.learnosity.com/",
          questionsApiV2Path: "https://questions.learnosity.com/",
          eventsApiPath: "https://events.learnosity.com",
          eventsPublicTopicName: "items_public",
          annotationsApiPath: "https://annotations.learnosity.com/",
          devEnvironment: e("false"),
          itemsRequestedVersion: o.versions.requested,
          assessApiVersion: 0 !== "latest".indexOf("{:") ? "latest" : null,
          questionsApiVersion: 0 !== "latest".indexOf("{:") ? "latest" : null,
          eventsApiVersion: 0 !== "latest".indexOf("{:") ? "latest" : null,
          annotationsApiVersion: 0 !== "latest".indexOf("{:") ? "latest" : null,
          sharedLibUrl: "https://shared.learnosity.com",
          appContext: "Items API",
          gtmContainerID: "GTM-5ZVXFJ",
          gtmDataLayer: "lrnDataLayer",
          disableGTM: e("1"),
          textDirection: o._internal.getDirectionProperty(),
          rollbarEnabled: e("1"),
          rollbarJsUrl: "https://shared.learnosity.com/vendor/rollbar.min.js",
        }),
        (o._internal.addScriptToDom = function (r) {
          var e = document.createElement("script"),
            n = document.getElementsByTagName("head")[0];
          o._internal.config.devEnvironment &&
            -1 === r.indexOf("?") &&
            (r += "?bust=" + new Date().getTime()),
            (e.src = r),
            (e.onerror = function () {
              (o._internal.apiLoadingFailed = {
                code: 50014,
                msg: "Failed loading Items API, can't load required modules",
                detail: "Couldn't load " + r,
              }),
                o._internal._cachedInitCalls && o._internal.onScriptLoadError();
            }),
            n.appendChild(e);
        }),
        (o._internal.onScriptLoadError = function () {
          var r,
            e,
            n =
              o._internal._cachedInitCalls &&
              o._internal._cachedInitCalls[0] &&
              o._internal._cachedInitCalls[0].args;
          if (n)
            for (var t = n.length - 1; 0 <= t && !r; t--)
              "[object Function]" ===
                Object.prototype.toString.call(n[t].errorListener) &&
                (r = n[t].errorListener);
          (e = o._internal.apiLoadingFailed),
            (o.errors = [e]),
            console.error(
              e.code +
                ": " +
                e.msg +
                ". View this error on LearnosityItems.errors[0]"
            ),
            r
              ? r(e)
              : window.alert(
                  e.msg +
                    "\n\nPlease contact your administrator if you require further assistance."
                );
        }),
        (o.init = function () {
          this._internal._cachedInitCalls ||
            (this._internal._cachedInitCalls = []);
          var r = {},
            e = Array.prototype.slice.call(arguments);
          return (
            e.push({ appStub: r }),
            this._internal._cachedInitCalls.push({ args: e }),
            (function (e) {
              for (
                var r = o._internal.instanceMethodsToCache, n = 0;
                n < r.length;
                n++
              )
                e[r[n]] = (function (r) {
                  return function () {
                    o._internal.instanceCachedMethodCalls.push({
                      method: r,
                      appStub: e,
                      args: Array.prototype.slice.call(arguments),
                    });
                  };
                })(r[n]);
            })(r),
            o._internal.apiLoadingFailed && o._internal.onScriptLoadError(),
            r
          );
        });
      for (var n = 0; n < r.length; n++)
        !(function (r) {
          o[r] = function () {
            o._internal._cachedMethodCalls ||
              (o._internal._cachedMethodCalls = []),
              o._internal._cachedMethodCalls.push({
                method: r,
                args: Array.prototype.slice.call(arguments),
              });
          };
        })(r[n]);
      function t(t, r, e) {
        var a, n, o;
        function i(r) {
          if (o[r]) return o[r].exports;
          var e = (o[r] = { exports: {}, id: r, loaded: !1 });
          return (
            n[r].call(e.exports, e, e.exports, i), (e.loaded = !0), e.exports
          );
        }
        return (
          window.rollbar ||
            ((a = { enabled: !1, rollbarJsUrl: t.rollbarJsUrl }),
            (o = {}),
            (i.m = n =
              [
                function (r, e, n) {
                  "use strict";
                  var t = n(1),
                    o = n(4);
                  ((a = a || {}).rollbarJsUrl =
                    a.rollbarJsUrl ||
                    "https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.4.6/rollbar.min.js"),
                    (a.async = void 0 === a.async || a.async);
                  (n = t.setupShim(window, a)), (o = o(a));
                  (window.rollbar = t.Rollbar),
                    n.loadFull(window, document, !a.async, a, o);
                },
                function (r, e, n) {
                  "use strict";
                  function s(r) {
                    return function () {
                      try {
                        return r.apply(this, arguments);
                      } catch (r) {
                        try {
                          console.error("[Rollbar]: Internal error", r);
                        } catch (r) {}
                      }
                    };
                  }
                  function t(r, e) {
                    (this.options = r), (this._rollbarOldOnError = null);
                    var n = o++;
                    (this.shimId = function () {
                      return n;
                    }),
                      "undefined" != typeof window &&
                        window._rollbarShims &&
                        (window._rollbarShims[n] = {
                          handler: e,
                          messages: [],
                        });
                  }
                  var a = n(2),
                    o = 0,
                    i = n(3),
                    l = function (r, e) {
                      return new t(r, e);
                    },
                    c = function (r) {
                      return new i(l, r);
                    };
                  (t.prototype.loadFull = function (i, r, e, n, l) {
                    var t = !1,
                      o = r.createElement("script"),
                      r = r.getElementsByTagName("script")[0],
                      a = r.parentNode;
                    (o.crossOrigin = ""),
                      (o.src = n.rollbarJsUrl),
                      e || (o.async = !0),
                      (o.onload = o.onreadystatechange =
                        s(function () {
                          if (
                            !(
                              t ||
                              (this.readyState &&
                                "loaded" !== this.readyState &&
                                "complete" !== this.readyState)
                            )
                          ) {
                            o.onload = o.onreadystatechange = null;
                            try {
                              a.removeChild(o);
                            } catch (r) {}
                            (t = !0),
                              (function () {
                                if (void 0 === i._rollbarDidLoad)
                                  for (
                                    var r,
                                      e,
                                      n,
                                      t,
                                      o = new Error("rollbar.js did not load"),
                                      a = 0;
                                    (r = i._rollbarShims[a++]);

                                  )
                                    for (
                                      r = r.messages || [];
                                      (e = r.shift());

                                    )
                                      for (
                                        n = e.args || [], a = 0;
                                        a < n.length;
                                        ++a
                                      )
                                        if ("function" == typeof (t = n[a])) {
                                          t(o);
                                          break;
                                        }
                                "function" == typeof l && l(o);
                              })();
                          }
                        })),
                      a.insertBefore(o, r);
                  }),
                    (t.prototype.wrap = function (n, r, t) {
                      try {
                        var o =
                          "function" == typeof r
                            ? r
                            : function () {
                                return r || {};
                              };
                        if ("function" != typeof n) return n;
                        if (n._isWrap) return n;
                        if (
                          !n._rollbar_wrapped &&
                          ((n._rollbar_wrapped = function () {
                            t &&
                              "function" == typeof t &&
                              t.apply(this, arguments);
                            try {
                              return n.apply(this, arguments);
                            } catch (r) {
                              var e = r;
                              throw (
                                (e &&
                                  (((e =
                                    "string" == typeof e
                                      ? new String(e)
                                      : e)._rollbarContext = o() || {}),
                                  (e._rollbarContext._wrappedSource =
                                    n.toString()),
                                  (window._rollbarWrappedError = e)),
                                e)
                              );
                            }
                          }),
                          (n._rollbar_wrapped._isWrap = !0),
                          n.hasOwnProperty)
                        )
                          for (var e in n)
                            n.hasOwnProperty(e) &&
                              (n._rollbar_wrapped[e] = n[e]);
                        return n._rollbar_wrapped;
                      } catch (r) {
                        return n;
                      }
                    });
                  for (
                    var d =
                        "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,captureEvent,captureDomContentLoaded,captureLoad".split(
                          ","
                        ),
                      p = 0;
                    p < d.length;
                    ++p
                  )
                    t.prototype[d[p]] = (function (e) {
                      return s(function () {
                        var r = Array.prototype.slice.call(arguments, 0),
                          r = {
                            shim: this,
                            method: e,
                            args: r,
                            ts: new Date(),
                          };
                        window._rollbarShims[this.shimId()].messages.push(r);
                      });
                    })(d[p]);
                  r.exports = {
                    setupShim: function (e, n) {
                      if (e) {
                        var t = n.globalAlias || "Rollbar";
                        if ("object" == typeof e[t]) return e[t];
                        (e._rollbarShims = {}), (e._rollbarWrappedError = null);
                        var o = new c(n);
                        return s(function () {
                          n.captureUncaught &&
                            ((o._rollbarOldOnError = e.onerror),
                            a.captureUncaughtExceptions(e, o, !0),
                            a.wrapGlobals(e, o, !0)),
                            n.captureUnhandledRejections &&
                              a.captureUnhandledRejections(e, o, !0);
                          var r = n.autoInstrument;
                          return (
                            !1 !== n.enabled &&
                              (void 0 === r ||
                                !0 === r ||
                                ("object" == typeof r && r.network)) &&
                              e.addEventListener &&
                              (e.addEventListener(
                                "load",
                                o.captureLoad.bind(o)
                              ),
                              e.addEventListener(
                                "DOMContentLoaded",
                                o.captureDomContentLoaded.bind(o)
                              )),
                            (e[t] = o)
                          );
                        })();
                      }
                    },
                    Rollbar: c,
                  };
                },
                function (r, e) {
                  "use strict";
                  r.exports = {
                    captureUncaughtExceptions: function (o, a, r) {
                      if (o) {
                        var i;
                        if ("function" == typeof a._rollbarOldOnError)
                          i = a._rollbarOldOnError;
                        else if (o.onerror) {
                          for (i = o.onerror; i._rollbarOldOnError; )
                            i = i._rollbarOldOnError;
                          a._rollbarOldOnError = i;
                        }
                        var e = function () {
                          var r,
                            e,
                            n,
                            t = Array.prototype.slice.call(arguments, 0);
                          (r = a),
                            (e = i),
                            (n = t),
                            (t = o)._rollbarWrappedError &&
                              (n[4] || (n[4] = t._rollbarWrappedError),
                              n[5] ||
                                (n[5] = t._rollbarWrappedError._rollbarContext),
                              (t._rollbarWrappedError = null)),
                            r.handleUncaughtException.apply(r, n),
                            e && e.apply(t, n);
                        };
                        r && (e._rollbarOldOnError = i), (o.onerror = e);
                      }
                    },
                    captureUnhandledRejections: function (r, o, e) {
                      var n;
                      r &&
                        ("function" == typeof r._rollbarURH &&
                          r._rollbarURH.belongsToShim &&
                          r.removeEventListener(
                            "unhandledrejection",
                            r._rollbarURH
                          ),
                        ((n = function (r) {
                          var e, n, t;
                          try {
                            e = r.reason;
                          } catch (r) {
                            e = void 0;
                          }
                          try {
                            n = r.promise;
                          } catch (r) {
                            n =
                              "[unhandledrejection] error getting `promise` from event";
                          }
                          try {
                            (t = r.detail),
                              !e && t && ((e = t.reason), (n = t.promise));
                          } catch (r) {
                            t =
                              "[unhandledrejection] error getting `detail` from event";
                          }
                          (e =
                            e ||
                            "[unhandledrejection] error getting `reason` from event"),
                            o &&
                              o.handleUnhandledRejection &&
                              o.handleUnhandledRejection(e, n);
                        }).belongsToShim = e),
                        (r._rollbarURH = n),
                        r.addEventListener("unhandledrejection", n));
                    },
                    wrapGlobals: function (r, e, n) {
                      if (r)
                        for (
                          var t,
                            o =
                              "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
                                ","
                              ),
                            a = 0;
                          a < o.length;
                          ++a
                        )
                          r[(t = o[a])] &&
                            r[t].prototype &&
                            (function (t, r, e) {
                              if (
                                r.hasOwnProperty &&
                                r.hasOwnProperty("addEventListener")
                              ) {
                                for (
                                  var o = r.addEventListener;
                                  o._rollbarOldAdd && o.belongsToShim;

                                )
                                  o = o._rollbarOldAdd;
                                var n = function (r, e, n) {
                                  o.call(this, r, t.wrap(e), n);
                                };
                                (n._rollbarOldAdd = o),
                                  (n.belongsToShim = e),
                                  (r.addEventListener = n);
                                for (
                                  var a = r.removeEventListener;
                                  a._rollbarOldRemove && a.belongsToShim;

                                )
                                  a = a._rollbarOldRemove;
                                n = function (r, e, n) {
                                  a.call(
                                    this,
                                    r,
                                    (e && e._rollbar_wrapped) || e,
                                    n
                                  );
                                };
                                (n._rollbarOldRemove = a),
                                  (n.belongsToShim = e),
                                  (r.removeEventListener = n);
                              }
                            })(e, r[t].prototype, n);
                    },
                  };
                },
                function (r, e) {
                  "use strict";
                  function n(r, e) {
                    (this.impl = r(e, this)),
                      (this.options = e),
                      (function (r) {
                        for (
                          var e =
                              "log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureEvent,captureDomContentLoaded,captureLoad".split(
                                ","
                              ),
                            n = 0;
                          n < e.length;
                          n++
                        )
                          r[e[n]] = (function (e) {
                            return function () {
                              var r = Array.prototype.slice.call(arguments, 0);
                              if (this.impl[e])
                                return this.impl[e].apply(this.impl, r);
                            };
                          })(e[n]);
                      })(n.prototype);
                  }
                  (n.prototype._swapAndProcessMessages = function (r, e) {
                    this.impl = r(this.options);
                    for (var n, t, o; (n = e.shift()); )
                      (t = n.method),
                        (o = n.args),
                        this[t] &&
                          "function" == typeof this[t] &&
                          ("captureDomContentLoaded" === t ||
                          "captureLoad" === t
                            ? this[t].apply(this, [o[0], n.ts])
                            : this[t].apply(this, o));
                    return this;
                  }),
                    (r.exports = n);
                },
                function (r, e) {
                  "use strict";
                  r.exports = function (i) {
                    return function (r) {
                      if (!r && !window._rollbarInitialized) {
                        for (
                          var e,
                            n,
                            r = (i = i || {}).globalAlias || "Rollbar",
                            t = window.rollbar,
                            o = function (r) {
                              return new t(r);
                            },
                            a = 0;
                          (e = window._rollbarShims[a++]);

                        )
                          (n = n || e.handler),
                            e.handler._swapAndProcessMessages(o, e.messages);
                        (window[r] = n), (window._rollbarInitialized = !0);
                      }
                    };
                  };
                },
              ]),
            (i.c = o),
            (i.p = ""),
            i(0)),
          new window.rollbar({
            accessToken: e,
            autoInstrument: !1,
            captureIp: !1,
            captureUncaught: !0,
            captureUnhandledRejections: !0,
            checkIgnore: function (r, e, n) {
              var n = n && (n.body || n.data),
                n = n && n.trace,
                n = n && n.frames,
                n = n && 0 < n.length && n[n.length - 1];
              return !(
                "string" == typeof (n = n && n.filename) &&
                0 <= n.indexOf(t.apiHost)
              );
            },
            enabled: !0,
            payload: {
              client: { code_version: r, source_map_enabled: !0 },
              environment:
                t.devEnvironment ||
                0 <= t.apiHost.indexOf(".vg.learnosity.com/")
                  ? "development"
                  : 0 <= t.apiHost.indexOf(".staging.learnosity.com/")
                  ? "staging"
                  : "production",
            },
            reportLevel: "error",
            scrubTelemetryInputs: !0,
            transform: function (r) {
              var r = r && (r.body || r.data),
                r = r && r.trace,
                e = r && r.frames;
              if (e)
                for (
                  var n = { filename: "<anonymous>", lineno: 0 }, t = 0;
                  t < e.length;
                  t++
                ) {
                  var o = e[t];
                  !o ||
                    ("string" == typeof (o = o.filename) &&
                      0 <= o.indexOf(".learnosity.com/")) ||
                    e.splice(t, 1, n);
                }
            },
          })
        );
      }
      var a = o._internal.config;
      return (
        a.rollbarEnabled &&
          (o._internal.rollbarInstance = t(
            a,
            o.version,
            "ffdf30e083164f7584ba5ca58c8cc3b8"
          )),
        o._internal.addScriptToDom(a.assetsHost + "/dist/api.js"),
        o
      );
    })();

console.log(
  "Learnosity Items API - WARNING: No valid version requested. Learnosity developer version in use. SLA coverage is not applicable."
);
