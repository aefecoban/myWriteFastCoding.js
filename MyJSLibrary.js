var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MyJSLibrary = /** @class */ (function () {
    function MyJSLibrary(select) {
        var _this = this;
        this.select = [];
        if (typeof (select) == typeof ("")) {
            try {
                var buff = document.querySelectorAll(select);
                buff.forEach(function (el) {
                    _this.select.push(el);
                });
            }
            catch (error) {
            }
        }
    }
    MyJSLibrary.prototype.Ready = function (f) {
        if (document.readyState != 'loading') {
            f();
        }
        else {
            document.addEventListener('DOMContentLoaded', function (event) {
                f(event);
            });
        }
        return this;
    };
    MyJSLibrary.prototype.Fetch = function (url, methods, functionInLoadingPhase, functionThenLoading, functionErrorLoading) {
        if (methods === void 0) { methods = {}; }
        if (functionInLoadingPhase === void 0) { functionInLoadingPhase = null; }
        if (functionThenLoading === void 0) { functionThenLoading = null; }
        if (functionErrorLoading === void 0) { functionErrorLoading = null; }
        if (functionInLoadingPhase) {
            functionInLoadingPhase();
        }
        fetch(url, methods).then(function (data) {
            if (functionThenLoading) {
                functionThenLoading(data);
            }
        })["catch"](function (data) {
            if (functionErrorLoading) {
                functionErrorLoading(data);
            }
        });
        return this;
    };
    MyJSLibrary.prototype.Html = function (data) {
        if (data == null) {
            return this.select.length == 0 ? undefined :
                (this.select.length == 1) ? this.select[0].innerHTML : __spreadArray([], this.select.map(function (element) {
                    return element.innerHTML;
                }), true);
        }
        else {
            if (this.select.length == 1) {
                this.select[0].innerHTML = data;
            }
            else if (this.select.length > 1) {
                this.select.map(function (element) {
                    element.innerHTML = data;
                });
            }
        }
        return this;
    };
    MyJSLibrary.prototype.Loop = function (callback, ar) {
        if (ar == null) {
            this.select.map(function (element) {
                callback(element);
            });
        }
        else {
            ar.map(function (element) {
                callback(element);
            });
        }
    };
    MyJSLibrary.prototype.Click = function (callback) {
        if (this.select.length > 0) {
            this.select.map(function (element) {
                element.addEventListener("click", function (event) {
                    callback(event, element);
                });
            });
        }
    };
    MyJSLibrary.prototype.Info = function () {
        return (this.select.length == 0) ? undefined : __spreadArray([], (this.select.map(function (element) {
            var s = element.getBoundingClientRect();
            return s;
        })), true);
    };
    MyJSLibrary.prototype.Attr = function (whichAttr, newValue) {
        if (newValue === void 0) { newValue = null; }
        if (newValue == null) {
            return (this.select.length == 0) ? undefined : __spreadArray([], (this.select.map(function (element) {
                var _a;
                var s = (_a = element.getAttribute(whichAttr.toString())) !== null && _a !== void 0 ? _a : "NULL";
                return s;
            })), true);
        }
    };
    MyJSLibrary.prototype.Remove = function () {
        this.select.map(function (element) {
            try {
                element.remove();
            }
            catch (error) { }
        });
        return this;
    };
    return MyJSLibrary;
}());
function MJSL(select) {
    return new MyJSLibrary((typeof (select) == typeof ("")) ? select : null);
}
