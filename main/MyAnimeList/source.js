(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeColor = void 0;
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["BLUE"] = "default";
    BadgeColor["GREEN"] = "success";
    BadgeColor["GREY"] = "info";
    BadgeColor["YELLOW"] = "warning";
    BadgeColor["RED"] = "danger";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],5:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
/**
* @deprecated Use {@link PaperbackExtensionBase}
*/
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = exports.SourceIntents = void 0;
var SourceIntents;
(function (SourceIntents) {
    SourceIntents[SourceIntents["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
    SourceIntents[SourceIntents["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
    SourceIntents[SourceIntents["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
    SourceIntents[SourceIntents["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
    SourceIntents[SourceIntents["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
    SourceIntents[SourceIntents["SETTINGS_UI"] = 32] = "SETTINGS_UI";
})(SourceIntents = exports.SourceIntents || (exports.SourceIntents = {}));
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],7:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./ByteArray"), exports);
__exportStar(require("./Badge"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./HomeSectionType"), exports);
__exportStar(require("./PaperbackExtensionBase"), exports);

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./PaperbackExtensionBase":4,"./Source":5,"./SourceInfo":6,"./interfaces":13}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],13:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ChapterProviding"), exports);
__exportStar(require("./Searchable"), exports);
__exportStar(require("./Requestable"), exports);
__exportStar(require("./MangaProviding"), exports);
__exportStar(require("./MangaProgressProviding"), exports);

},{"./ChapterProviding":8,"./MangaProgressProviding":9,"./MangaProviding":10,"./Requestable":11,"./Searchable":12}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],58:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./DynamicUI/Exports/DUIBinding"), exports);
__exportStar(require("./DynamicUI/Exports/DUIForm"), exports);
__exportStar(require("./DynamicUI/Exports/DUIFormRow"), exports);
__exportStar(require("./DynamicUI/Exports/DUISection"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIHeader"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILink"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIMultilineLabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUINavigationButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIOAuthButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISecureInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISelect"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIStepper"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISwitch"), exports);
__exportStar(require("./Exports/ChapterDetails"), exports);
__exportStar(require("./Exports/Chapter"), exports);
__exportStar(require("./Exports/Cookie"), exports);
__exportStar(require("./Exports/HomeSection"), exports);
__exportStar(require("./Exports/IconText"), exports);
__exportStar(require("./Exports/MangaInfo"), exports);
__exportStar(require("./Exports/MangaProgress"), exports);
__exportStar(require("./Exports/PartialSourceManga"), exports);
__exportStar(require("./Exports/MangaUpdates"), exports);
__exportStar(require("./Exports/PBCanvas"), exports);
__exportStar(require("./Exports/PBImage"), exports);
__exportStar(require("./Exports/PagedResults"), exports);
__exportStar(require("./Exports/RawData"), exports);
__exportStar(require("./Exports/Request"), exports);
__exportStar(require("./Exports/SourceInterceptor"), exports);
__exportStar(require("./Exports/RequestManager"), exports);
__exportStar(require("./Exports/Response"), exports);
__exportStar(require("./Exports/SearchField"), exports);
__exportStar(require("./Exports/SearchRequest"), exports);
__exportStar(require("./Exports/SourceCookieStore"), exports);
__exportStar(require("./Exports/SourceManga"), exports);
__exportStar(require("./Exports/SecureStateManager"), exports);
__exportStar(require("./Exports/SourceStateManager"), exports);
__exportStar(require("./Exports/Tag"), exports);
__exportStar(require("./Exports/TagSection"), exports);
__exportStar(require("./Exports/TrackedMangaChapterReadAction"), exports);
__exportStar(require("./Exports/TrackerActionQueue"), exports);

},{"./DynamicUI/Exports/DUIBinding":15,"./DynamicUI/Exports/DUIForm":16,"./DynamicUI/Exports/DUIFormRow":17,"./DynamicUI/Exports/DUISection":18,"./DynamicUI/Rows/Exports/DUIButton":19,"./DynamicUI/Rows/Exports/DUIHeader":20,"./DynamicUI/Rows/Exports/DUIInputField":21,"./DynamicUI/Rows/Exports/DUILabel":22,"./DynamicUI/Rows/Exports/DUILink":23,"./DynamicUI/Rows/Exports/DUIMultilineLabel":24,"./DynamicUI/Rows/Exports/DUINavigationButton":25,"./DynamicUI/Rows/Exports/DUIOAuthButton":26,"./DynamicUI/Rows/Exports/DUISecureInputField":27,"./DynamicUI/Rows/Exports/DUISelect":28,"./DynamicUI/Rows/Exports/DUIStepper":29,"./DynamicUI/Rows/Exports/DUISwitch":30,"./Exports/Chapter":31,"./Exports/ChapterDetails":32,"./Exports/Cookie":33,"./Exports/HomeSection":34,"./Exports/IconText":35,"./Exports/MangaInfo":36,"./Exports/MangaProgress":37,"./Exports/MangaUpdates":38,"./Exports/PBCanvas":39,"./Exports/PBImage":40,"./Exports/PagedResults":41,"./Exports/PartialSourceManga":42,"./Exports/RawData":43,"./Exports/Request":44,"./Exports/RequestManager":45,"./Exports/Response":46,"./Exports/SearchField":47,"./Exports/SearchRequest":48,"./Exports/SecureStateManager":49,"./Exports/SourceCookieStore":50,"./Exports/SourceInterceptor":51,"./Exports/SourceManga":52,"./Exports/SourceStateManager":53,"./Exports/Tag":54,"./Exports/TagSection":55,"./Exports/TrackedMangaChapterReadAction":56,"./Exports/TrackerActionQueue":57}],59:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./generated/_exports"), exports);
__exportStar(require("./base/index"), exports);
__exportStar(require("./compat/DyamicUI"), exports);

},{"./base/index":7,"./compat/DyamicUI":14,"./generated/_exports":58}],60:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],61:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],62:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":60,"./encode":61}],63:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackerSettings = exports.getDefaultStatus = void 0;
const getDefaultStatus = (stateManager) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    return (_a = (yield stateManager.retrieve('defaultStatus'))) !== null && _a !== void 0 ? _a : ['NONE'];
});
exports.getDefaultStatus = getDefaultStatus;
const trackerSettings = (stateManager) => {
    return App.createDUINavigationButton({
        id: 'tracker_settings',
        label: 'Tracker Settings',
        form: App.createDUIForm({
            sections: () => {
                return Promise.resolve([
                    App.createDUISection({
                        id: 'settings',
                        isHidden: false,
                        header: 'Status Settings',
                        rows: () => __awaiter(void 0, void 0, void 0, function* () {
                            return [
                                App.createDUISelect({
                                    id: 'defaultStatus',
                                    label: 'Default Status',
                                    allowsMultiselect: false,
                                    value: App.createDUIBinding({
                                        get: () => (0, exports.getDefaultStatus)(stateManager),
                                        set: (newValue) => __awaiter(void 0, void 0, void 0, function* () { return yield stateManager.store('defaultStatus', newValue); })
                                    }),
                                    labelResolver: (value) => __awaiter(void 0, void 0, void 0, function* () {
                                        switch (value) {
                                            case 'reading': return 'Reading';
                                            case 'plan_to_read': return 'Planned';
                                            case 'completed': return 'Completed';
                                            case 'dropped': return 'Dropped';
                                            case 'on_hold': return 'On-Hold';
                                            default: return 'None';
                                        }
                                    }),
                                    options: [
                                        'NONE',
                                        'reading',
                                        'plan_to_read',
                                        'completed',
                                        'dropped',
                                        'on_hold'
                                    ]
                                })
                            ];
                        })
                    })
                ]);
            }
        })
    });
};
exports.trackerSettings = trackerSettings;

},{}],64:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAnimeList = exports.MyAnimeListInfo = void 0;
const types_1 = require("@paperback/types");
//import * as MalToken from './models/mal-token'
const mal_result_1 = require("./models/mal-result");
const querystring_1 = require("querystring");
const MALSettings_1 = require("./MALSettings");
const MYANIMELIST_API = 'https://api.myanimelist.net/v2';
exports.MyAnimeListInfo = {
    name: 'MyAnimeList',
    author: 'Netsky',
    contentRating: types_1.ContentRating.EVERYONE,
    icon: 'icon.png',
    version: '1.0.0',
    description: 'MyAnimeList Tracker',
    websiteBaseURL: 'https://myanimelist.net',
    intents: types_1.SourceIntents.MANGA_TRACKING | types_1.SourceIntents.SETTINGS_UI
};
class MyAnimeList {
    constructor() {
        this.stateManager = App.createSourceStateManager();
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 2.5,
            requestTimeout: 20000,
            interceptor: {
                // Authorization injector
                interceptRequest: (request) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    const accessToken = yield this.accessToken.get();
                    request.headers = Object.assign(Object.assign(Object.assign({}, ((_a = request.headers) !== null && _a !== void 0 ? _a : {})), ({
                        'accept': 'application/json'
                    })), (accessToken != null ? {
                        'authorization': `Bearer ${accessToken}`
                    } : {}));
                    return request;
                }),
                interceptResponse: (response) => __awaiter(this, void 0, void 0, function* () {
                    return response;
                })
            }
        });
        this.accessToken = {
            get: () => __awaiter(this, void 0, void 0, function* () {
                return this.stateManager.keychain.retrieve('access_token');
            }),
            set: (token) => __awaiter(this, void 0, void 0, function* () {
                yield this.stateManager.keychain.store('access_token', token);
                yield this.userInfo.refresh();
            }),
            isValid: () => __awaiter(this, void 0, void 0, function* () {
                return (yield this.accessToken.get()) != null;
            }),
            refresh: () => __awaiter(this, void 0, void 0, function* () {
                //await this.getRefreshToken() Not required for now!
            })
        };
        this.refreshToken = {
            get: () => __awaiter(this, void 0, void 0, function* () {
                return this.stateManager.keychain.retrieve('refresh_token');
            }),
            set: (token) => __awaiter(this, void 0, void 0, function* () {
                yield this.stateManager.keychain.store('refresh_token', token);
            }),
            isValid: () => __awaiter(this, void 0, void 0, function* () {
                return (yield this.refreshToken.get()) != null;
            })
        };
        this.userInfo = {
            get: () => __awaiter(this, void 0, void 0, function* () {
                return this.stateManager.retrieve('userInfo');
            }),
            isLoggedIn: () => __awaiter(this, void 0, void 0, function* () {
                return (yield this.userInfo.get()) != null;
            }),
            refresh: () => __awaiter(this, void 0, void 0, function* () {
                const accessToken = yield this.accessToken.get();
                if (accessToken == null) {
                    return this.stateManager.store('userInfo', undefined);
                }
                const response = yield this.requestManager.schedule(App.createRequest({
                    url: `${MYANIMELIST_API}/users/@me`,
                    method: 'GET'
                }), 0);
                const userInfo = (0, mal_result_1.MalResult)(response);
                yield this.stateManager.store('userInfo', userInfo);
            })
        };
        /*
        async getRefreshToken(): Promise<void> {
            try {
                const refreshToken = await this.refreshToken.get()
                //console.log(JSON.stringify(refreshToken, null, 2)) // Log request data
    
                const response = await this.requestManager.schedule(App.createRequest({
                    url: 'https://myanimelist.net/v1/oauth2/token',
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    data: stringify({
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken,
                        client_id: '004e72f9c4d8f5e6e8737d320246c0e3'
                    })
                }), 1)
    
                const tokenData = MalResult<MalToken.Data>(response)
                if (tokenData.access_token == null) {
                    throw new Error('Unable to request new "access token", try logging out and back in!')
                }
                if (tokenData.refresh_token == null) {
                    throw new Error('Unable to request new "refresh token", try logging out and back in!')
                }
    
                await this.accessToken.set(tokenData.access_token)
                await this.refreshToken.set(tokenData.refresh_token)
            } catch (error) {
                throw new Error(error as string)
            }
        }
        */
    }
    getSearchResults(query, metadata) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const pageURL = metadata;
            const response = yield this.requestManager.schedule(App.createRequest({
                url: pageURL !== null && pageURL !== void 0 ? pageURL : `${MYANIMELIST_API}/manga?q=${encodeURI((_a = query.title) !== null && _a !== void 0 ? _a : '')}`,
                method: 'GET'
            }), 1);
            const malPage = (0, mal_result_1.MalResult)(response);
            //console.log(JSON.stringify(malPage, null, 2)) // Log request data
            if (!malPage || malPage.data.length == 0) {
                return App.createPagedResults({ results: [], metadata: undefined });
            }
            return App.createPagedResults({
                results: (_c = (_b = malPage.data) === null || _b === void 0 ? void 0 : _b.map(manga => {
                    var _a, _b;
                    return App.createPartialSourceManga({
                        image: (_b = (_a = manga.node.main_picture) === null || _a === void 0 ? void 0 : _a.large) !== null && _b !== void 0 ? _b : '',
                        title: manga.node.title,
                        mangaId: manga.node.id.toString(),
                        subtitle: undefined
                    });
                })) !== null && _c !== void 0 ? _c : [],
                metadata: (_d = malPage.paging) === null || _d === void 0 ? void 0 : _d.next
            });
        });
    }
    getMangaDetails(mangaId) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.requestManager.schedule(App.createRequest({
                url: encodeURI(`${MYANIMELIST_API}/manga/${parseInt(mangaId)}?fields=id,title,main_picture,alternative_titles,synopsis,mean,rank,popularity,nsfw,media_type,status,my_list_status,num_volumes,num_chapters,authors{first_name,last_name}`),
                method: 'GET'
            }), 1);
            const malManga = (0, mal_result_1.MalResult)(response);
            //console.log(JSON.stringify(malManga, null, 2)) // Log request data
            if (malManga == null) {
                return Promise.reject();
            }
            return App.createSourceManga({
                id: mangaId,
                mangaInfo: App.createMangaInfo({
                    image: (_b = (_a = malManga.main_picture) === null || _a === void 0 ? void 0 : _a.large) !== null && _b !== void 0 ? _b : '',
                    titles: [
                        malManga.title,
                        (_c = malManga.alternative_titles) === null || _c === void 0 ? void 0 : _c.en,
                        (_d = malManga.alternative_titles) === null || _d === void 0 ? void 0 : _d.ja
                    ].filter(x => x != null),
                    artist: this.formatStaffName((_f = (_e = malManga.authors) === null || _e === void 0 ? void 0 : _e.find(x => { var _a; return (_a = x === null || x === void 0 ? void 0 : x.role) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('art'); })) === null || _f === void 0 ? void 0 : _f.node),
                    author: this.formatStaffName((_h = (_g = malManga.authors) === null || _g === void 0 ? void 0 : _g.find(x => { var _a; return (_a = x === null || x === void 0 ? void 0 : x.role) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('story'); })) === null || _h === void 0 ? void 0 : _h.node),
                    desc: (malManga === null || malManga === void 0 ? void 0 : malManga.synopsis) || '',
                    hentai: this.formatNSFW((_j = malManga === null || malManga === void 0 ? void 0 : malManga.nsfw) !== null && _j !== void 0 ? _j : ''),
                    rating: malManga.mean,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    status: this.formatStatus(malManga.status)
                })
            });
        });
    }
    getMangaProgress(mangaId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.requestManager.schedule(App.createRequest({
                url: encodeURI(`${MYANIMELIST_API}/manga/${parseInt(mangaId)}?fields=my_list_status`),
                method: 'GET'
            }), 1);
            const malManga = (0, mal_result_1.MalResult)(response);
            //console.log(JSON.stringify(malManga, null, 2)) // Log request data
            if (!(malManga === null || malManga === void 0 ? void 0 : malManga.my_list_status)) {
                return undefined;
            }
            return App.createMangaProgress({
                mangaId: mangaId,
                lastReadChapterNumber: (_a = malManga === null || malManga === void 0 ? void 0 : malManga.my_list_status.num_chapters_read) !== null && _a !== void 0 ? _a : 0,
                lastReadVolumeNumber: malManga === null || malManga === void 0 ? void 0 : malManga.my_list_status.num_volumes_read,
                trackedListName: (_b = malManga === null || malManga === void 0 ? void 0 : malManga.my_list_status.status) !== null && _b !== void 0 ? _b : undefined,
                userRating: malManga === null || malManga === void 0 ? void 0 : malManga.my_list_status.score
            });
        });
    }
    getMangaProgressManagementForm(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return App.createDUIForm({
                sections: () => __awaiter(this, void 0, void 0, function* () {
                    const [response] = yield Promise.all([
                        this.requestManager.schedule(App.createRequest({
                            url: encodeURI(`${MYANIMELIST_API}/manga/${parseInt(mangaId)}?fields=id,title,main_picture,alternative_titles,synopsis,mean,rank,popularity,nsfw,media_type,status,my_list_status,num_volumes,num_chapters,authors{first_name,last_name}`),
                            method: 'GET'
                        }), 1),
                        this.userInfo.refresh()
                    ]);
                    const malManga = (0, mal_result_1.MalResult)(response);
                    //console.log(JSON.stringify(malManga, null, 2)) // Log request data
                    const user = yield this.userInfo.get();
                    if (user == null) {
                        return [
                            App.createDUISection({
                                id: 'notLoggedInSection',
                                isHidden: false,
                                rows: () => __awaiter(this, void 0, void 0, function* () {
                                    return [
                                        App.createDUILabel({
                                            id: 'notLoggedIn',
                                            label: 'Not Logged In'
                                        })
                                    ];
                                })
                            })
                        ];
                    }
                    if (malManga == null) {
                        throw new Error(`Unable to find Manga on MyAnimeList with id ${mangaId}`);
                    }
                    return [
                        App.createDUISection({
                            id: 'userInfo',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _a;
                                return [
                                    App.createDUIHeader({
                                        id: 'header',
                                        imageUrl: user.picture || '',
                                        title: (_a = user.name) !== null && _a !== void 0 ? _a : 'NOT LOGGED IN',
                                        subtitle: ''
                                    })
                                ];
                            })
                        }),
                        // Static items
                        App.createDUISection({
                            id: 'information',
                            header: 'Information',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _b, _c, _d, _e, _f, _g, _h, _j, _k;
                                return [
                                    App.createDUILabel({
                                        id: 'mediaId',
                                        label: 'Manga ID',
                                        value: (_b = malManga.id) === null || _b === void 0 ? void 0 : _b.toString()
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaTitle',
                                        label: 'Title',
                                        value: (_c = malManga.title) !== null && _c !== void 0 ? _c : 'N/A'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaRank',
                                        value: (_e = (_d = malManga.rank) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : 'N/A',
                                        label: 'Rank'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaPopularity',
                                        value: (_g = (_f = malManga.popularity) === null || _f === void 0 ? void 0 : _f.toString()) !== null && _g !== void 0 ? _g : 'N/A',
                                        label: 'Popularity'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaRating',
                                        value: (_j = (_h = malManga.mean) === null || _h === void 0 ? void 0 : _h.toString()) !== null && _j !== void 0 ? _j : 'N/A',
                                        label: 'Rating'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaStatus',
                                        value: this.formatStatus(malManga.status),
                                        label: 'Status'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaIsAdult',
                                        value: this.formatNSFW((_k = malManga.nsfw) !== null && _k !== void 0 ? _k : '') ? 'Yes' : 'No',
                                        label: 'Is Adult'
                                    })
                                ];
                            })
                        }),
                        // User interactive items
                        // Status
                        App.createDUISection({
                            id: 'trackStatus',
                            header: 'Manga Status',
                            footer: 'Warning: Setting this to NONE will delete the listing from MyAnimeList!',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _l;
                                return [
                                    App.createDUISelect({
                                        id: 'status',
                                        //@ts-ignore
                                        value: ((_l = malManga.my_list_status) === null || _l === void 0 ? void 0 : _l.status) ? [malManga.my_list_status.status] : yield (0, MALSettings_1.getDefaultStatus)(this.stateManager),
                                        allowsMultiselect: false,
                                        label: 'Status',
                                        labelResolver: (value) => __awaiter(this, void 0, void 0, function* () {
                                            return this.formatStatus(value);
                                        }),
                                        options: [
                                            'NONE',
                                            'reading',
                                            'plan_to_read',
                                            'completed',
                                            'dropped',
                                            'on_hold'
                                        ]
                                    })
                                ];
                            })
                        }),
                        // Progress
                        App.createDUISection({
                            id: 'manage',
                            header: 'Progress',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _m, _o, _p, _q;
                                return [
                                    App.createDUIStepper({
                                        id: 'num_chapters_read',
                                        label: 'Chapter',
                                        //@ts-ignore
                                        value: (_o = (_m = malManga.my_list_status) === null || _m === void 0 ? void 0 : _m.num_chapters_read) !== null && _o !== void 0 ? _o : 0,
                                        min: 0,
                                        step: 1
                                    }),
                                    App.createDUIStepper({
                                        id: 'num_volumes_read',
                                        label: 'Volume',
                                        //@ts-ignore
                                        value: (_q = (_p = malManga.my_list_status) === null || _p === void 0 ? void 0 : _p.num_volumes_read) !== null && _q !== void 0 ? _q : 0,
                                        min: 0,
                                        step: 1
                                    })
                                ];
                            })
                        }),
                        // Rating
                        App.createDUISection({
                            id: 'rateSection',
                            header: 'Rating',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _r, _s;
                                return [
                                    App.createDUIStepper({
                                        id: 'score',
                                        label: 'Score',
                                        //@ts-ignore
                                        value: (_s = (_r = malManga.my_list_status) === null || _r === void 0 ? void 0 : _r.score) !== null && _s !== void 0 ? _s : 0,
                                        min: 0,
                                        max: 10,
                                        step: 1
                                    })
                                ];
                            })
                        }),
                        // Re-read
                        App.createDUISection({
                            id: 'mangaReread',
                            header: 'Times Re-read',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _t, _u;
                                return [
                                    App.createDUIStepper({
                                        id: 'num_times_reread',
                                        label: 'Re-read Amount',
                                        //@ts-ignore
                                        value: (_u = (_t = malManga.my_list_status) === null || _t === void 0 ? void 0 : _t.reread_value) !== null && _u !== void 0 ? _u : 0,
                                        min: 0,
                                        max: 100,
                                        step: 1
                                    })
                                ];
                            })
                        }),
                        // Notes
                        App.createDUISection({
                            id: 'mangaNotes',
                            header: 'Notes',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _v, _w;
                                return [
                                    App.createDUIInputField({
                                        id: 'notes',
                                        label: 'Notes',
                                        //@ts-ignore
                                        value: (_w = (_v = malManga.my_list_status) === null || _v === void 0 ? void 0 : _v.comments) !== null && _w !== void 0 ? _w : ''
                                    })
                                ];
                            })
                        })
                    ];
                }),
                onSubmit: (values) => __awaiter(this, void 0, void 0, function* () {
                    var _x, _y;
                    const status = (_y = (_x = values['status']) === null || _x === void 0 ? void 0 : _x[0]) !== null && _y !== void 0 ? _y : '';
                    if (status == 'NONE' && mangaId != null) {
                        yield this.requestManager.schedule(App.createRequest({
                            url: `${MYANIMELIST_API}/manga/${parseInt(mangaId)}/my_list_status`,
                            method: 'DELETE'
                        }), 1);
                    }
                    else {
                        yield this.requestManager.schedule(App.createRequest({
                            url: `${MYANIMELIST_API}/manga/${parseInt(mangaId)}/my_list_status`,
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded'
                            },
                            data: (0, querystring_1.stringify)({
                                status: status,
                                num_chapters_read: Number(values['num_chapters_read']),
                                num_volumes_read: Number(values['num_volumes_read']),
                                score: Number(values['score']),
                                num_times_reread: Number(values['num_times_reread']),
                                comments: values['notes']
                            })
                        }), 1);
                    }
                })
            });
        });
    }
    processChapterReadActionQueue(actionQueue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userInfo.refresh();
            const chapterReadActions = yield actionQueue.queuedChapterReadActions();
            for (const readAction of chapterReadActions) {
                const mangaId = readAction.mangaId;
                try {
                    let params = {};
                    if (Math.floor(readAction.chapterNumber) == 1 && !readAction.volumeNumber) {
                        params = {
                            status: 'reading',
                            num_chapters_read: 1,
                            num_volumes_read: 1
                        };
                    }
                    else {
                        params = {
                            status: 'reading',
                            num_chapters_read: Math.floor(readAction.chapterNumber),
                            num_volumes_read: readAction.volumeNumber ? Math.floor(readAction.volumeNumber) : undefined
                        };
                    }
                    const response = yield this.requestManager.schedule(App.createRequest({
                        url: `${MYANIMELIST_API}/manga/${parseInt(mangaId)}/my_list_status`,
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        data: (0, querystring_1.stringify)(params)
                    }), 0);
                    if (response.status < 400) {
                        yield actionQueue.discardChapterReadAction(readAction);
                    }
                    else {
                        console.log(`Action failed: ${response.data}`);
                        yield actionQueue.retryChapterReadAction(readAction);
                    }
                }
                catch (error) {
                    console.log(error);
                    yield actionQueue.retryChapterReadAction(readAction);
                }
            }
        });
    }
    getSourceMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            return App.createDUISection({
                id: 'sourceMenu',
                header: 'Source Menu',
                isHidden: false,
                rows: () => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b;
                    const isLoggedIn = yield this.userInfo.isLoggedIn();
                    if (isLoggedIn) {
                        return [
                            (0, MALSettings_1.trackerSettings)(this.stateManager),
                            App.createDUILabel({
                                id: 'userInfo',
                                label: 'Logged-in as',
                                value: (_b = (_a = (yield this.userInfo.get())) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'ERROR'
                            }),
                            App.createDUIButton({
                                id: 'logout',
                                label: 'Logout',
                                onTap: () => __awaiter(this, void 0, void 0, function* () {
                                    yield this.accessToken.set(undefined);
                                })
                            })
                        ];
                    }
                    else {
                        return [
                            App.createDUIOAuthButton({
                                id: 'malLogin',
                                authorizeEndpoint: 'https://myanimelist.net/v1/oauth2/authorize',
                                clientId: '004e72f9c4d8f5e6e8737d320246c0e3',
                                label: 'Login with MyAnimeList',
                                redirectUri: 'paperback://malAuth',
                                responseType: {
                                    type: 'pkce',
                                    pkceCodeLength: 64,
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    pkceCodeMethod: 'plain',
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    formEncodeGrant: true,
                                    tokenEndpoint: 'https://myanimelist.net/v1/oauth2/token',
                                },
                                successHandler: (accessToken, refreshToken) => __awaiter(this, void 0, void 0, function* () {
                                    yield this.accessToken.set(accessToken);
                                    yield this.refreshToken.set(refreshToken);
                                })
                            })
                        ];
                    }
                })
            });
        });
    }
    // Utility
    formatNSFW(label) {
        switch (label) {
            case 'white':
                return false;
            case 'gray':
                return false;
            case 'black':
                return true;
            default:
                return false;
        }
    }
    formatStaffName(authorNode) {
        if (!authorNode) {
            return 'Unknown';
        }
        return `${authorNode.first_name} ${authorNode.last_name}`;
    }
    formatStatus(value) {
        switch (value) {
            case 'reading': return 'Reading';
            case 'plan_to_read': return 'Planned';
            case 'completed': return 'Completed';
            case 'dropped': return 'Dropped';
            case 'on_hold': return 'On-Hold';
            case 'finished': return 'Finished';
            case 'currently_publishing': return 'Releasing';
            case 'not_yet_published': return 'Not Yet Released';
            case 'NONE': return 'None';
            default: return 'N/A';
        }
    }
}
exports.MyAnimeList = MyAnimeList;

},{"./MALSettings":63,"./models/mal-result":65,"@paperback/types":59,"querystring":62}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MalResult = void 0;
function MalResult(response) {
    if (response.status !== 200) {
        console.log(`[MAL-ERROR(${response.status})] ${JSON.stringify(response, null, 2)}`);
        throw new Error('Error while fetching data from MyAnimeList, check logs for more info');
    }
    const result = typeof response.data == 'string' ? JSON.parse(response.data) : response.data;
    return result;
}
exports.MalResult = MalResult;

},{}]},{},[64])(64)
});
