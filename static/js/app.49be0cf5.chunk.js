(this.webpackJsonp = this.webpackJsonp || []).push([
    [0], {
        345: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return xe
            }));
            var r = n(22),
                a = n.n(r),
                o = n(300),
                i = n.n(o),
                l = n(12),
                c = n.n(l),
                s = n(336),
                u = n(102),
                f = n(297),
                d = n(299),
                m = n(282),
                h = n(335),
                g = n(346),
                p = n(301),
                b = n(0),
                v = n.n(b),
                w = n(4),
                y = n(132),
                x = n(11),
                E = n.n(x),
                j = n(13),
                C = n.n(j),
                k = n(606),
                S = n(607),
                O = n(605),
                P = n(321),
                I = n(166),
                _ = n(184),
                A = n(347),
                W = n(5),
                z = n(89),
                D = n.n(z),
                B = n(65),
                M = n(62),
                R = n(305),
                F = n.n(R),
                H = n(306),
                U = n.n(H);

            function V(e) {
                return new Promise((function(t, n) {
                    var r = new Image;
                    r.crossOrigin = "anonymous", r.onload = function() {
                        return t(r)
                    }, r.onerror = function() {
                        return n(r)
                    }, r.src = e
                }))
            }

            function L(e, t) {
                var n = t.canvas,
                    r = n.width / e.width,
                    a = n.height / e.height,
                    o = Math.max(r, a),
                    i = (n.width - e.width * o) / 2,
                    l = (n.height - e.height * o) / 2;
                t.clearRect(0, 0, n.width, n.height), t.drawImage(e, 0, 0, e.width, e.height, i, l, e.width * o, e.height * o)
            }

            function T(e) {
                var t, n, r, a, o, i, l, c, s, u, f;
                return C.a.async((function(d) {
                    for (;;) switch (d.prev = d.next) {
                        case 0:
                            if (t = e.color, n = e.imageUrl, r = e.emojiId, a = e.size, o = e.emojiPadding, (i = document.createElement("canvas")).width = a, i.height = a, (l = i.getContext("2d")).fillStyle = t, l.fillRect(0, 0, i.width, i.height), !n) {
                                d.next = 14;
                                break
                            }
                            return d.next = 10, C.a.awrap(V(n));
                        case 10:
                            L(d.sent, l), d.next = 22;
                            break;
                        case 14:
                            if (!r) {
                                d.next = 22;
                                break
                            }
                            return c = J(r), u = (a - (s = a - 2 * o)) / 2, d.next = 20, C.a.awrap(V(c));
                        case 20:
                            f = d.sent, l.drawImage(f, u, u, s, s);
                        case 22:
                            return d.abrupt("return", i.toDataURL());
                        case 23:
                        case "end":
                            return d.stop()
                    }
                }), null, null, null, Promise)
            }

            function J(e) {
                return "https://twemoji.maxcdn.com/v/latest/svg/" + e + ".svg"
            }

            function G(e) {
                return e.substring(e.indexOf("base64,") + "base64,".length)
            }

            function K(e) {
                var t, n, r, a, o, i, l, c, s, u, f;
                return C.a.async((function(d) {
                    for (;;) switch (d.prev = d.next) {
                        case 0:
                            return t = e.emojiId, n = e.image, r = e.color, d.next = 3, C.a.awrap(T({
                                color: r,
                                emojiId: t,
                                imageUrl: n,
                                size: 2048,
                                emojiPadding: 832
                            }));
                        case 3:
                            return a = d.sent, d.next = 6, C.a.awrap(T({
                                color: r,
                                emojiId: t,
                                imageUrl: n,
                                size: 1024,
                                emojiPadding: 128
                            }));
                        case 6:
                            return o = d.sent, d.next = 9, C.a.awrap(T({
                                color: "transparent",
                                emojiId: t,
                                imageUrl: n,
                                size: 48,
                                emojiPadding: 0
                            }));
                        case 9:
                            return i = d.sent, l = G(o), c = G(a), s = G(i), d.next = 15, C.a.awrap(N({
                                icon: l,
                                splash: c,
                                favicon: s
                            }));
                        case 15:
                            u = d.sent, f = n ? "app-icons-" + n.slice(0, 10) + ".zip" : "app-icons-" + t + "-" + r + ".zip", F.a.saveAs(u, f);
                        case 18:
                        case "end":
                            return d.stop()
                    }
                }), null, null, null, Promise)
            }

            function N(e) {
                var t, n, r, a, o;
                return C.a.async((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return t = e.icon, n = e.splash, r = e.favicon, (a = new U.a).file("icon.png", t, {
                                base64: !0
                            }), a.file("splash.png", n, {
                                base64: !0
                            }), a.file("favicon.png", r, {
                                base64: !0
                            }), i.next = 7, C.a.awrap(a.generateAsync({
                                type: "blob"
                            }));
                        case 7:
                            return o = i.sent, i.abrupt("return", o);
                        case 9:
                        case "end":
                            return i.stop()
                    }
                }), null, null, null, Promise)
            }

            function $(e) {
                var t, n = e.color,
                    r = e.size,
                    a = e.image,
                    o = e.emojiId,
                    i = e.onPress,
                    l = .75 * r;
                return t = a ? v.a.createElement(B.a, {
                    source: {
                        uri: a
                    },
                    style: {
                        resizeMode: "cover",
                        width: r,
                        height: r,
                        flex: 1
                    }
                }) : v.a.createElement(B.a, {
                    source: {
                        uri: J(o)
                    },
                    style: {
                        width: l,
                        height: l,
                        resizeMode: "contain"
                    }
                }), v.a.createElement(M.a, {
                    activeOpacity: .6,
                    onPress: i
                }, v.a.createElement(w.a, {
                    style: {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                        shadowOpacity: .22,
                        shadowRadius: 2.22,
                        elevation: 3,
                        width: r,
                        height: r,
                        borderRadius: .3 * r,
                        backgroundColor: n,
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden"
                    }
                }, t))
            }
            W.a.create({
                container: {
                    flex: 1,
                    backgroundColor: "#fff"
                }
            });
            var q = n(18),
                Q = n.n(q),
                X = n(58),
                Y = n(48),
                Z = n(66);

            function ee(e) {
                var t = e.isDark,
                    n = e.size,
                    r = e.color,
                    a = e.style;
                return v.a.createElement(w.a, {
                    style: [{
                        width: n,
                        height: n,
                        borderRadius: n / 2,
                        borderColor: t ? "#555453" : "white",
                        borderWidth: 2,
                        backgroundColor: r
                    }, a]
                })
            }

            function te(e) {
                var t = e.isMobile,
                    n = e.onValueChanged,
                    r = Q()(e, ["isMobile", "onValueChanged"]),
                    o = Object(I.a)().dark,
                    i = v.a.useState("FFFFFF"),
                    l = a()(i, 2),
                    c = l[0],
                    s = l[1],
                    u = v.a.useMemo((function() {
                        return re.reverse()
                    }), []);
                return v.a.createElement(X.a, E()({}, r, {
                    style: [t ? {
                        minHeight: 48,
                        maxHeight: 48
                    } : {
                        flexShrink: 1,
                        flexGrow: 0,
                        maxWidth: 300
                    }, r.style],
                    contentContainerStyle: [{
                        paddingVertical: 12
                    }, !t && {
                        width: "100%",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }, r.contentContainerStyle],
                    horizontal: t,
                    pagingEnabled: !0
                }), u.map((function(e) {
                    return v.a.createElement(M.a, {
                        onPress: function() {
                            return n(e)
                        }
                    }, v.a.createElement(ee, {
                        size: 24,
                        color: e,
                        isDark: o,
                        style: {
                            margin: t ? 12 : 6
                        }
                    }))
                })), v.a.createElement(ne, {
                    size: 24,
                    isDark: o,
                    value: c,
                    onValueChanged: s,
                    onSubmit: function(e) {
                        n(e)
                    }
                }))
            }

            function ne(e) {
                var t = e.isDark,
                    n = e.size,
                    r = e.value,
                    a = e.onValueChanged,
                    o = e.onSubmit;
                return v.a.createElement(w.a, {
                    style: [{
                        height: n,
                        flex: 1,
                        minWidth: 275,
                        margin: 6,
                        borderRadius: n / 2,
                        borderWidth: 2,
                        flexDirection: "row",
                        overflow: "hidden"
                    }, t ? {
                        borderColor: "#555453",
                        backgroundColor: "#2f2f2f"
                    } : {
                        borderColor: "white",
                        backgroundColor: "#ffffff"
                    }]
                }, v.a.createElement(w.a, {
                    style: {
                        width: n,
                        height: n - 4,
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, v.a.createElement(Y.a, {
                    style: {
                        alignSelf: "center",
                        color: t ? "#fff" : "#98A1A4"
                    }
                }, "#")), v.a.createElement(Z.a, {
                    autoCapitalize: "none",
                    autoCorrect: !1,
                    value: r.replace("#", ""),
                    onChangeText: function(e) {
                        a(e),
                            function(e) {
                                if ("transparent" === e) return !0;
                                var t = "#" === String(e).charAt(0) ? 1 : 0;
                                return e.length !== 4 + t && e.length < 7 + t && D()(e).isValid()
                            }(e) && o("#" + D()(e).toHex())
                    },
                    style: {
                        flex: 1,
                        paddingHorizontal: 4,
                        color: t ? "#fff" : "rgb(102, 102, 102)",
                        outlineColor: "transparent"
                    }
                }))
            }
            var re = ["#f44336", "#e91e63", "#EB144C", "#9900EF", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#7BDCB5", "#00D084", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#607d8b", "#999", "#ABB8C3", "black", "white"],
                ae = (n(401), [{
                    id: "bacon",
                    unified: "1f953"
                }, {
                    id: "avocado",
                    unified: "1f951"
                }, {
                    id: "beers",
                    unified: "1f37b"
                }, {
                    id: "microbe",
                    unified: "1f9a0"
                }, {
                    id: "i_love_you_hand_sign",
                    unified: "1f91f"
                }, {
                    id: "mechanical_arm",
                    unified: "1f9be"
                }, {
                    id: "revolving_hearts",
                    unified: "1f49e"
                }, {
                    id: "thought_balloon",
                    unified: "1f4ad"
                }, {
                    id: "dog",
                    unified: "1f436"
                }, {
                    id: "thermometer",
                    unified: "1f321-fe0f"
                }, {
                    id: "fire",
                    unified: "1f525"
                }, {
                    id: "compass",
                    unified: "1f9ed"
                }, {
                    id: "rolled_up_newspaper",
                    unified: "1f5de-fe0f"
                }]),
                oe = function() {
                    return ae[Math.floor(Math.random() * ae.length)]
                },
                ie = {
                    copyright: "a9",
                    registered: "ae",
                    trademark: "2122",
                    waving_white_flag: "1f3f3"
                };

            function le(e) {
                var t = e.onSelect,
                    n = e.isMobile,
                    r = Object(I.a)().dark;
                return v.a.createElement(_.a, {
                    style: n ? {
                        flex: 1,
                        borderRadius: 0
                    } : {},
                    theme: r ? "dark" : "light",
                    set: "twitter",
                    notFoundEmoji: "mag",
                    color: r ? "white" : "#4630eb",
                    title: "",
                    showPreview: !1,
                    emoji: "bacon",
                    onSelect: t,
                    showSkinTones: !1
                })
            }
            var ce = n(45);
            var se = oe();

            function ue(e) {
                return e.startsWith("#") ? D()(e).toHex() : e
            }
            var fe = v.a.forwardRef((function(e, t) {
                var n, r, o, i, l, c, s, u = e.navigation,
                    f = e.route,
                    d = Object(I.a)(),
                    m = v.a.useState((null == (n = f.params) ? void 0 : n.color) ? "#" + D()(f.params.color).toHex() : "#fff"),
                    h = a()(m, 2),
                    g = h[0],
                    p = h[1],
                    y = v.a.useState(null != (r = function(e) {
                        if (!e) return null;
                        var t = _.b.search(e);
                        return t ? t[0] : null
                    }(null == (o = f.params) ? void 0 : o.emoji)) ? r : se),
                    x = a()(y, 2),
                    E = x[0],
                    j = void 0 === E ? {} : E,
                    W = x[1],
                    z = v.a.useState((null == (i = f.params) ? void 0 : i.image) ? decodeURIComponent(null == (l = f.params) ? void 0 : l.image) : null),
                    B = a()(z, 2),
                    M = B[0],
                    R = B[1],
                    F = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (e && t) return t in ie ? ie[t] : e.includes("-") ? !["man_in_business_suit_levitating"].includes(t) && (t.startsWith("flag-") || t.startsWith("man-") || t.startsWith("woman-") || t.startsWith("man_") || t.startsWith("woman_") || t.startsWith("male_") || t.startsWith("female_") || t.startsWith("male-") || t.startsWith("female-") || t.endsWith("_man") || t.endsWith("_woman") || t.endsWith("-flag") || t.endsWith("_flag") || ["merman", "mermaid", "es", "cn", "de", "gb", "us", "ru", "kr", "jp", "it", "fr", "people_holding_hands"].includes(t)) ? e : e.split("-")[0] || "" : e
                    }(null != (c = null == j ? void 0 : j.unified) ? c : null, null != (s = null == j ? void 0 : j.id) ? s : null),
                    H = function() {
                        var e = Object(b.useState)((function() {
                                return ce.a.get("window")
                            })),
                            t = a()(e, 2),
                            n = t[0],
                            r = t[1];
                        return Object(b.useEffect)((function() {
                            function e(e) {
                                var t = e.window;
                                r(t)
                            }
                            return ce.a.addEventListener("change", e), r(ce.a.get("window")),
                                function() {
                                    ce.a.removeEventListener("change", e)
                                }
                        }), []), n
                    }().width < 640;

                function U() {
                    var e;
                    return C.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, C.a.awrap(A.a());
                            case 2:
                                (e = t.sent).cancelled || (R(e.uri), W(null), u.setParams({
                                    emoji: void 0
                                }));
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                }

                function V(e) {
                    console.log("Selected Color", e), p(e), u.setParams({
                        color: ue(e)
                    })
                }

                function L(e) {
                    console.log("Selected Emoji", e), u.setParams({
                        emoji: e.id
                    }), W(e), R(null)
                }
                v.a.useImperativeHandle(t, (function() {
                    return {
                        saveAsync: function() {
                            return C.a.async((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, C.a.awrap(K({
                                            emojiId: F,
                                            image: M,
                                            color: g
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), null, null, null, Promise)
                        },
                        uploadAsync: function() {
                            return C.a.async((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, C.a.awrap(U());
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), null, null, null, Promise)
                        }
                    }
                }), [F, M, g]);
                return v.a.createElement(w.a, {
                    style: {
                        flex: 1
                    }
                }, v.a.createElement(k.b, {
                    style: {
                        flex: 1,
                        backgroundColor: d.colors.background,
                        paddingVertical: H ? 18 : 0,
                        flexDirection: H ? "column" : "row"
                    }
                }, v.a.createElement(k.c, {
                    style: [de.rowItem, {
                        paddingVertical: H ? 18 : 0
                    }]
                }, v.a.createElement(v.a.Fragment, null, v.a.createElement($, {
                    size: 128,
                    onPress: U,
                    color: g,
                    emojiId: F,
                    image: M
                }), v.a.createElement(w.a, {
                    style: {
                        marginTop: 8,
                        opacity: .8
                    }
                }, v.a.createElement(P.a.Button, {
                    name: "refresh",
                    backgroundColor: "transparent",
                    underlayColor: d.colors.header,
                    color: d.colors.text,
                    onPress: function() {
                        V(re[Math.floor(Math.random() * re.length)]), L(oe())
                    }
                }, "Random")), !1), v.a.createElement(te, {
                    onValueChanged: function(e) {
                        V(e)
                    }
                })), v.a.createElement(k.c, {
                    style: de.rowItem
                }, v.a.createElement(le, {
                    isMobile: H,
                    onSelect: L
                }))), v.a.createElement(k.a, {
                    style: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, v.a.createElement(S.a, {
                    style: {
                        fontSize: 14,
                        paddingBottom: H ? 18 : 0,
                        color: d.dark ? "#ABB8C3" : "#607d8b"
                    }
                }, "Made with", " ", v.a.createElement(O.a, {
                    style: {
                        color: d.dark ? "white" : "black"
                    },
                    target: "_blank",
                    href: "http://expo.io/"
                }, "Expo"))))
            }));
            var de = W.a.create({
                container: {
                    flex: 1,
                    backgroundColor: "#fff"
                },
                rowItem: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }
            });

            function me(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e["function" === typeof Symbol ? Symbol.iterator : "@@iterator"]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return he(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return he(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0;
                        return function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (n = e["function" === typeof Symbol ? Symbol.iterator : "@@iterator"]()).next.bind(n)
            }

            function he(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ge(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ge(Object(n), !0).forEach((function(t) {
                        c()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var be = Object(m.a)(),
                ve = {
                    prefixes: [p.makeUrl("/")],
                    config: {
                        screens: {
                            Home: {
                                path: ""
                            }
                        }
                    }
                },
                we = pe(pe({}, u.a), {}, {
                    colors: pe(pe({}, u.a.colors), {}, {
                        accent: "rgb(255, 45, 85)",
                        header: "white",
                        headerBorder: "rgb(224,224,224)"
                    })
                }),
                ye = pe(pe({}, f.a), {}, {
                    colors: pe(pe({}, f.a.colors), {}, {
                        accent: "rgb(255, 55, 95)",
                        header: "#000",
                        headerBorder: "rgba(224,224,224, 0.3)"
                    })
                });

            function xe(e) {
                i()(e);
                var t = v.a.useState(we),
                    n = a()(t, 2),
                    r = n[0],
                    o = n[1],
                    l = v.a.useRef(null);
                return v.a.useEffect((function() {
                    navigator.serviceWorker.getRegistrations().then((function(e) {
                        for (var t, n = me(e); !(t = n()).done;) {
                            t.value.unregister()
                        }
                    }))
                }), []), v.a.createElement(d.a, {
                    theme: r,
                    linking: ve
                }, v.a.createElement(be.Navigator, {
                    screenOptions: {
                        headerStyleInterpolator: h.a.forUIKit
                    }
                }, v.a.createElement(be.Screen, {
                    name: "Home",
                    options: {
                        headerTintColor: r.colors.text,
                        headerStyle: {
                            backgroundColor: r.colors.background,
                            borderBottomColor: r.colors.headerBorder
                        },
                        title: "",
                        headerLeft: function() {
                            return v.a.createElement(y.Button, {
                                style: {
                                    marginLeft: 8
                                },
                                color: r.colors.text,
                                onPress: function() {
                                    return l.current.saveAsync()
                                },
                                uppercase: !0,
                                labelStyle: {
                                    userSelect: "none"
                                },
                                icon: function() {
                                    return v.a.createElement(s.a, {
                                        style: {
                                            userSelect: "none"
                                        },
                                        name: "file-download",
                                        color: r.colors.text,
                                        size: 24
                                    })
                                }
                            }, "Download Icon")
                        },
                        headerRight: function() {
                            return v.a.createElement(w.a, {
                                style: {
                                    flexDirection: "row",
                                    alignItems: "center"
                                }
                            }, v.a.createElement(g.a, {
                                value: r.dark,
                                onChange: function() {
                                    o((function(e) {
                                        return e.dark ? we : ye
                                    }))
                                }
                            }), v.a.createElement(y.Appbar.Action, {
                                color: r.colors.text,
                                icon: "upload",
                                onPress: function() {
                                    var e;
                                    return null == (e = l.current) || null == e.uploadAsync ? void 0 : e.uploadAsync()
                                }
                            }))
                        }
                    }
                }, (function(e) {
                    var t = e.route,
                        n = e.navigation;
                    return v.a.createElement(fe, {
                        ref: l,
                        route: t,
                        navigation: n
                    })
                }))))
            }
        },
        364: function(e, t, n) {
            e.exports = n(594)
        }
    },
    [
        [364, 1, 2]
    ]
]);
//# sourceMappingURL=app.49be0cf5.chunk.js.map