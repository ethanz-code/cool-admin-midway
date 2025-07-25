/*! For license information please see swagger-ui-es-bundle-core.js.LICENSE.txt */
import * as e from 'base64-js';
import * as t from 'ieee754';
import * as r from 'react';
import * as n from 'redux';
import * as a from 'immutable';
import * as o from 'redux-immutable';
import * as s from 'serialize-error';
import * as l from 'lodash/merge';
import * as i from '@braintree/sanitize-url';
import * as c from 'lodash/camelCase';
import * as u from 'lodash/upperFirst';
import * as d from 'lodash/memoize';
import * as p from 'lodash/find';
import * as m from 'lodash/some';
import * as f from 'lodash/eq';
import * as h from 'lodash/isFunction';
import * as g from 'css.escape';
import * as y from 'url-parse';
import * as S from 'reselect';
import * as v from 'prop-types';
import * as _ from 'lodash/omit';
import * as b from 'js-yaml';
import * as w from 'zenscroll';
import * as C from 'react-immutable-proptypes';
import * as x from 'lodash/reduce';
import * as O from 'lodash/get';
import * as k from '@babel/runtime-corejs3/helpers/extends';
import * as N from 'react-copy-to-clipboard';
import * as A from 'react-syntax-highlighter/dist/esm/light';
import * as I from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import * as R from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import * as T from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import * as B from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import * as j from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';
import * as P from 'react-syntax-highlighter/dist/esm/languages/hljs/http';
import * as M from 'react-syntax-highlighter/dist/esm/languages/hljs/powershell';
import * as q from 'react-syntax-highlighter/dist/esm/styles/hljs/agate';
import * as L from 'react-syntax-highlighter/dist/esm/styles/hljs/arta';
import * as D from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai';
import * as U from 'react-syntax-highlighter/dist/esm/styles/hljs/nord';
import * as $ from 'react-syntax-highlighter/dist/esm/styles/hljs/obsidian';
import * as J from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night';
import * as V from 'react-syntax-highlighter/dist/esm/styles/hljs/idea';
import * as K from 'randexp';
import * as z from 'lodash/isEmpty';
import * as F from 'lodash/isString';
import * as W from 'lodash/debounce';
import * as H from 'lodash/set';
import * as G from 'lodash/fp/assocPath';
import * as X from 'lodash/constant';
import * as Y from 'swagger-client/es/resolver/strategies/generic';
import * as Q from 'swagger-client/es/resolver/strategies/openapi-2';
import * as Z from 'swagger-client/es/resolver/strategies/openapi-3-0';
import * as ee from 'swagger-client/es/resolver/strategies/openapi-3-1-apidom';
import * as te from 'swagger-client/es/resolver';
import * as re from 'swagger-client/es/execute';
import * as ne from 'swagger-client/es/http';
import * as ae from 'swagger-client/es/subtree-resolver';
import * as oe from 'swagger-client/es/helpers';
import * as se from 'react-dom';
import * as le from 'react-redux';
import * as ie from 'lodash/identity';
import * as ce from 'lodash/zipObject';
import * as ue from 'lodash/toString';
import * as de from 'classnames';
import * as pe from 'js-file-download';
import * as me from 'xml-but-prettier';
import * as fe from 'lodash/toLower';
import * as he from 'react-immutable-pure-component';
import * as ge from 'remarkable';
import * as ye from 'remarkable/linkify';
import * as Ee from 'dompurify';
import * as Se from 'react-debounce-input';
import * as ve from 'lodash/isPlainObject';
var _e = {
    764: function (e, t, r) {
      const n = r(780),
        a = r(294),
        o =
          'function' == typeof Symbol && 'function' == typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null;
      (t.Buffer = Buffer),
        (t.SlowBuffer = function SlowBuffer(e) {
          +e != e && (e = 0);
          return Buffer.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50);
      const s = 2147483647;
      function createBuffer(e) {
        if (e > s)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        const t = new Uint8Array(e);
        return Object.setPrototypeOf(t, Buffer.prototype), t;
      }
      function Buffer(e, t, r) {
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return allocUnsafe(e);
        }
        return from(e, t, r);
      }
      function from(e, t, r) {
        if ('string' == typeof e)
          return (function fromString(e, t) {
            ('string' == typeof t && '' !== t) || (t = 'utf8');
            if (!Buffer.isEncoding(t))
              throw new TypeError('Unknown encoding: ' + t);
            const r = 0 | byteLength(e, t);
            let n = createBuffer(r);
            const a = n.write(e, t);
            a !== r && (n = n.slice(0, a));
            return n;
          })(e, t);
        if (ArrayBuffer.isView(e))
          return (function fromArrayView(e) {
            if (isInstance(e, Uint8Array)) {
              const t = new Uint8Array(e);
              return fromArrayBuffer(t.buffer, t.byteOffset, t.byteLength);
            }
            return fromArrayLike(e);
          })(e);
        if (null == e)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof e
          );
        if (
          isInstance(e, ArrayBuffer) ||
          (e && isInstance(e.buffer, ArrayBuffer))
        )
          return fromArrayBuffer(e, t, r);
        if (
          'undefined' != typeof SharedArrayBuffer &&
          (isInstance(e, SharedArrayBuffer) ||
            (e && isInstance(e.buffer, SharedArrayBuffer)))
        )
          return fromArrayBuffer(e, t, r);
        if ('number' == typeof e)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        const n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return Buffer.from(n, t, r);
        const a = (function fromObject(e) {
          if (Buffer.isBuffer(e)) {
            const t = 0 | checked(e.length),
              r = createBuffer(t);
            return 0 === r.length || e.copy(r, 0, 0, t), r;
          }
          if (void 0 !== e.length)
            return 'number' != typeof e.length || numberIsNaN(e.length)
              ? createBuffer(0)
              : fromArrayLike(e);
          if ('Buffer' === e.type && Array.isArray(e.data))
            return fromArrayLike(e.data);
        })(e);
        if (a) return a;
        if (
          'undefined' != typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' == typeof e[Symbol.toPrimitive]
        )
          return Buffer.from(e[Symbol.toPrimitive]('string'), t, r);
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof e
        );
      }
      function assertSize(e) {
        if ('number' != typeof e)
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
      }
      function allocUnsafe(e) {
        return assertSize(e), createBuffer(e < 0 ? 0 : 0 | checked(e));
      }
      function fromArrayLike(e) {
        const t = e.length < 0 ? 0 : 0 | checked(e.length),
          r = createBuffer(t);
        for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
        return r;
      }
      function fromArrayBuffer(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return (
          (n =
            void 0 === t && void 0 === r
              ? new Uint8Array(e)
              : void 0 === r
              ? new Uint8Array(e, t)
              : new Uint8Array(e, t, r)),
          Object.setPrototypeOf(n, Buffer.prototype),
          n
        );
      }
      function checked(e) {
        if (e >= s)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              s.toString(16) +
              ' bytes'
          );
        return 0 | e;
      }
      function byteLength(e, t) {
        if (Buffer.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer))
          return e.byteLength;
        if ('string' != typeof e)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        const r = e.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let a = !1;
        for (;;)
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r;
            case 'utf8':
            case 'utf-8':
              return utf8ToBytes(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return base64ToBytes(e).length;
            default:
              if (a) return n ? -1 : utf8ToBytes(e).length;
              (t = ('' + t).toLowerCase()), (a = !0);
          }
      }
      function slowToString(e, t, r) {
        let n = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return '';
        if ((r >>>= 0) <= (t >>>= 0)) return '';
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return hexSlice(this, t, r);
            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, t, r);
            case 'ascii':
              return asciiSlice(this, t, r);
            case 'latin1':
            case 'binary':
              return latin1Slice(this, t, r);
            case 'base64':
              return base64Slice(this, t, r);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, t, r);
            default:
              if (n) throw new TypeError('Unknown encoding: ' + e);
              (e = (e + '').toLowerCase()), (n = !0);
          }
      }
      function swap(e, t, r) {
        const n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function bidirectionalIndexOf(e, t, r, n, a) {
        if (0 === e.length) return -1;
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          numberIsNaN((r = +r)) && (r = a ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (a) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!a) return -1;
          r = 0;
        }
        if (
          ('string' == typeof t && (t = Buffer.from(t, n)), Buffer.isBuffer(t))
        )
          return 0 === t.length ? -1 : arrayIndexOf(e, t, r, n, a);
        if ('number' == typeof t)
          return (
            (t &= 255),
            'function' == typeof Uint8Array.prototype.indexOf
              ? a
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : arrayIndexOf(e, [t], r, n, a)
          );
        throw new TypeError('val must be string, number or Buffer');
      }
      function arrayIndexOf(e, t, r, n, a) {
        let o,
          s = 1,
          l = e.length,
          i = t.length;
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (l /= 2), (i /= 2), (r /= 2);
        }
        function read(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (a) {
          let n = -1;
          for (o = r; o < l; o++)
            if (read(e, o) === read(t, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === i)) return n * s;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + i > l && (r = l - i), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < i; n++)
              if (read(e, o + n) !== read(t, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function hexWrite(e, t, r, n) {
        r = Number(r) || 0;
        const a = e.length - r;
        n ? (n = Number(n)) > a && (n = a) : (n = a);
        const o = t.length;
        let s;
        for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
          const n = parseInt(t.substr(2 * s, 2), 16);
          if (numberIsNaN(n)) return s;
          e[r + s] = n;
        }
        return s;
      }
      function utf8Write(e, t, r, n) {
        return blitBuffer(utf8ToBytes(t, e.length - r), e, r, n);
      }
      function asciiWrite(e, t, r, n) {
        return blitBuffer(
          (function asciiToBytes(e) {
            const t = [];
            for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          n
        );
      }
      function base64Write(e, t, r, n) {
        return blitBuffer(base64ToBytes(t), e, r, n);
      }
      function ucs2Write(e, t, r, n) {
        return blitBuffer(
          (function utf16leToBytes(e, t) {
            let r, n, a;
            const o = [];
            for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
              (r = e.charCodeAt(s)),
                (n = r >> 8),
                (a = r % 256),
                o.push(a),
                o.push(n);
            return o;
          })(t, e.length - r),
          e,
          r,
          n
        );
      }
      function base64Slice(e, t, r) {
        return 0 === t && r === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, r));
      }
      function utf8Slice(e, t, r) {
        r = Math.min(e.length, r);
        const n = [];
        let a = t;
        for (; a < r; ) {
          const t = e[a];
          let o = null,
            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
          if (a + s <= r) {
            let r, n, l, i;
            switch (s) {
              case 1:
                t < 128 && (o = t);
                break;
              case 2:
                (r = e[a + 1]),
                  128 == (192 & r) &&
                    ((i = ((31 & t) << 6) | (63 & r)), i > 127 && (o = i));
                break;
              case 3:
                (r = e[a + 1]),
                  (n = e[a + 2]),
                  128 == (192 & r) &&
                    128 == (192 & n) &&
                    ((i = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                    i > 2047 && (i < 55296 || i > 57343) && (o = i));
                break;
              case 4:
                (r = e[a + 1]),
                  (n = e[a + 2]),
                  (l = e[a + 3]),
                  128 == (192 & r) &&
                    128 == (192 & n) &&
                    128 == (192 & l) &&
                    ((i =
                      ((15 & t) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & l)),
                    i > 65535 && i < 1114112 && (o = i));
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (a += s);
        }
        return (function decodeCodePointsArray(e) {
          const t = e.length;
          if (t <= l) return String.fromCharCode.apply(String, e);
          let r = '',
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += l)));
          return r;
        })(n);
      }
      (t.kMaxLength = s),
        (Buffer.TYPED_ARRAY_SUPPORT = (function typedArraySupport() {
          try {
            const e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        Buffer.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(Buffer.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (Buffer.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(Buffer.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (Buffer.isBuffer(this)) return this.byteOffset;
          },
        }),
        (Buffer.poolSize = 8192),
        (Buffer.from = function (e, t, r) {
          return from(e, t, r);
        }),
        Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(Buffer, Uint8Array),
        (Buffer.alloc = function (e, t, r) {
          return (function alloc(e, t, r) {
            return (
              assertSize(e),
              e <= 0
                ? createBuffer(e)
                : void 0 !== t
                ? 'string' == typeof r
                  ? createBuffer(e).fill(t, r)
                  : createBuffer(e).fill(t)
                : createBuffer(e)
            );
          })(e, t, r);
        }),
        (Buffer.allocUnsafe = function (e) {
          return allocUnsafe(e);
        }),
        (Buffer.allocUnsafeSlow = function (e) {
          return allocUnsafe(e);
        }),
        (Buffer.isBuffer = function isBuffer(e) {
          return null != e && !0 === e._isBuffer && e !== Buffer.prototype;
        }),
        (Buffer.compare = function compare(e, t) {
          if (
            (isInstance(e, Uint8Array) &&
              (e = Buffer.from(e, e.offset, e.byteLength)),
            isInstance(t, Uint8Array) &&
              (t = Buffer.from(t, t.offset, t.byteLength)),
            !Buffer.isBuffer(e) || !Buffer.isBuffer(t))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === t) return 0;
          let r = e.length,
            n = t.length;
          for (let a = 0, o = Math.min(r, n); a < o; ++a)
            if (e[a] !== t[a]) {
              (r = e[a]), (n = t[a]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (Buffer.isEncoding = function isEncoding(e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (Buffer.concat = function concat(e, t) {
          if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return Buffer.alloc(0);
          let r;
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          const n = Buffer.allocUnsafe(t);
          let a = 0;
          for (r = 0; r < e.length; ++r) {
            let t = e[r];
            if (isInstance(t, Uint8Array))
              a + t.length > n.length
                ? (Buffer.isBuffer(t) || (t = Buffer.from(t)), t.copy(n, a))
                : Uint8Array.prototype.set.call(n, t, a);
            else {
              if (!Buffer.isBuffer(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              t.copy(n, a);
            }
            a += t.length;
          }
          return n;
        }),
        (Buffer.byteLength = byteLength),
        (Buffer.prototype._isBuffer = !0),
        (Buffer.prototype.swap16 = function swap16() {
          const e = this.length;
          if (e % 2 != 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (let t = 0; t < e; t += 2) swap(this, t, t + 1);
          return this;
        }),
        (Buffer.prototype.swap32 = function swap32() {
          const e = this.length;
          if (e % 4 != 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (let t = 0; t < e; t += 4)
            swap(this, t, t + 3), swap(this, t + 1, t + 2);
          return this;
        }),
        (Buffer.prototype.swap64 = function swap64() {
          const e = this.length;
          if (e % 8 != 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (let t = 0; t < e; t += 8)
            swap(this, t, t + 7),
              swap(this, t + 1, t + 6),
              swap(this, t + 2, t + 5),
              swap(this, t + 3, t + 4);
          return this;
        }),
        (Buffer.prototype.toString = function toString() {
          const e = this.length;
          return 0 === e
            ? ''
            : 0 === arguments.length
            ? utf8Slice(this, 0, e)
            : slowToString.apply(this, arguments);
        }),
        (Buffer.prototype.toLocaleString = Buffer.prototype.toString),
        (Buffer.prototype.equals = function equals(e) {
          if (!Buffer.isBuffer(e))
            throw new TypeError('Argument must be a Buffer');
          return this === e || 0 === Buffer.compare(this, e);
        }),
        (Buffer.prototype.inspect = function inspect() {
          let e = '';
          const r = t.INSPECT_MAX_BYTES;
          return (
            (e = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (e += ' ... '),
            '<Buffer ' + e + '>'
          );
        }),
        o && (Buffer.prototype[o] = Buffer.prototype.inspect),
        (Buffer.prototype.compare = function compare(e, t, r, n, a) {
          if (
            (isInstance(e, Uint8Array) &&
              (e = Buffer.from(e, e.offset, e.byteLength)),
            !Buffer.isBuffer(e))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === a && (a = this.length),
            t < 0 || r > e.length || n < 0 || a > this.length)
          )
            throw new RangeError('out of range index');
          if (n >= a && t >= r) return 0;
          if (n >= a) return -1;
          if (t >= r) return 1;
          if (this === e) return 0;
          let o = (a >>>= 0) - (n >>>= 0),
            s = (r >>>= 0) - (t >>>= 0);
          const l = Math.min(o, s),
            i = this.slice(n, a),
            c = e.slice(t, r);
          for (let e = 0; e < l; ++e)
            if (i[e] !== c[e]) {
              (o = i[e]), (s = c[e]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (Buffer.prototype.includes = function includes(e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (Buffer.prototype.indexOf = function indexOf(e, t, r) {
          return bidirectionalIndexOf(this, e, t, r, !0);
        }),
        (Buffer.prototype.lastIndexOf = function lastIndexOf(e, t, r) {
          return bidirectionalIndexOf(this, e, t, r, !1);
        }),
        (Buffer.prototype.write = function write(e, t, r, n) {
          if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0);
          else if (void 0 === r && 'string' == typeof t)
            (n = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              );
            (t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0));
          }
          const a = this.length - t;
          if (
            ((void 0 === r || r > a) && (r = a),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds');
          n || (n = 'utf8');
          let o = !1;
          for (;;)
            switch (n) {
              case 'hex':
                return hexWrite(this, e, t, r);
              case 'utf8':
              case 'utf-8':
                return utf8Write(this, e, t, r);
              case 'ascii':
              case 'latin1':
              case 'binary':
                return asciiWrite(this, e, t, r);
              case 'base64':
                return base64Write(this, e, t, r);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return ucs2Write(this, e, t, r);
              default:
                if (o) throw new TypeError('Unknown encoding: ' + n);
                (n = ('' + n).toLowerCase()), (o = !0);
            }
        }),
        (Buffer.prototype.toJSON = function toJSON() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const l = 4096;
      function asciiSlice(e, t, r) {
        let n = '';
        r = Math.min(e.length, r);
        for (let a = t; a < r; ++a) n += String.fromCharCode(127 & e[a]);
        return n;
      }
      function latin1Slice(e, t, r) {
        let n = '';
        r = Math.min(e.length, r);
        for (let a = t; a < r; ++a) n += String.fromCharCode(e[a]);
        return n;
      }
      function hexSlice(e, t, r) {
        const n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let a = '';
        for (let n = t; n < r; ++n) a += u[e[n]];
        return a;
      }
      function utf16leSlice(e, t, r) {
        const n = e.slice(t, r);
        let a = '';
        for (let e = 0; e < n.length - 1; e += 2)
          a += String.fromCharCode(n[e] + 256 * n[e + 1]);
        return a;
      }
      function checkOffset(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
        if (e + t > r)
          throw new RangeError('Trying to access beyond buffer length');
      }
      function checkInt(e, t, r, n, a, o) {
        if (!Buffer.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > a || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError('Index out of range');
      }
      function wrtBigUInt64LE(e, t, r, n, a) {
        checkIntBI(t, n, a, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        (e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o);
        let s = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          r
        );
      }
      function wrtBigUInt64BE(e, t, r, n, a) {
        checkIntBI(t, n, a, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        (e[r + 7] = o),
          (o >>= 8),
          (e[r + 6] = o),
          (o >>= 8),
          (e[r + 5] = o),
          (o >>= 8),
          (e[r + 4] = o);
        let s = Number((t >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[r + 3] = s),
          (s >>= 8),
          (e[r + 2] = s),
          (s >>= 8),
          (e[r + 1] = s),
          (s >>= 8),
          (e[r] = s),
          r + 8
        );
      }
      function checkIEEE754(e, t, r, n, a, o) {
        if (r + n > e.length) throw new RangeError('Index out of range');
        if (r < 0) throw new RangeError('Index out of range');
      }
      function writeFloat(e, t, r, n, o) {
        return (
          (t = +t),
          (r >>>= 0),
          o || checkIEEE754(e, 0, r, 4),
          a.write(e, t, r, n, 23, 4),
          r + 4
        );
      }
      function writeDouble(e, t, r, n, o) {
        return (
          (t = +t),
          (r >>>= 0),
          o || checkIEEE754(e, 0, r, 8),
          a.write(e, t, r, n, 52, 8),
          r + 8
        );
      }
      (Buffer.prototype.slice = function slice(e, t) {
        const r = this.length;
        (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e);
        const n = this.subarray(e, t);
        return Object.setPrototypeOf(n, Buffer.prototype), n;
      }),
        (Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE =
          function readUIntLE(e, t, r) {
            (e >>>= 0), (t >>>= 0), r || checkOffset(e, t, this.length);
            let n = this[e],
              a = 1,
              o = 0;
            for (; ++o < t && (a *= 256); ) n += this[e + o] * a;
            return n;
          }),
        (Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE =
          function readUIntBE(e, t, r) {
            (e >>>= 0), (t >>>= 0), r || checkOffset(e, t, this.length);
            let n = this[e + --t],
              a = 1;
            for (; t > 0 && (a *= 256); ) n += this[e + --t] * a;
            return n;
          }),
        (Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 =
          function readUInt8(e, t) {
            return (e >>>= 0), t || checkOffset(e, 1, this.length), this[e];
          }),
        (Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE =
          function readUInt16LE(e, t) {
            return (
              (e >>>= 0),
              t || checkOffset(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE =
          function readUInt16BE(e, t) {
            return (
              (e >>>= 0),
              t || checkOffset(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE =
          function readUInt32LE(e, t) {
            return (
              (e >>>= 0),
              t || checkOffset(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE =
          function readUInt32BE(e, t) {
            return (
              (e >>>= 0),
              t || checkOffset(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (Buffer.prototype.readBigUInt64LE = defineBigIntMethod(
          function readBigUInt64LE(e) {
            validateNumber((e >>>= 0), 'offset');
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || boundsError(e, this.length - 8);
            const n =
                t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              a = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
            return BigInt(n) + (BigInt(a) << BigInt(32));
          }
        )),
        (Buffer.prototype.readBigUInt64BE = defineBigIntMethod(
          function readBigUInt64BE(e) {
            validateNumber((e >>>= 0), 'offset');
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || boundsError(e, this.length - 8);
            const n =
                t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
              a = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
            return (BigInt(n) << BigInt(32)) + BigInt(a);
          }
        )),
        (Buffer.prototype.readIntLE = function readIntLE(e, t, r) {
          (e >>>= 0), (t >>>= 0), r || checkOffset(e, t, this.length);
          let n = this[e],
            a = 1,
            o = 0;
          for (; ++o < t && (a *= 256); ) n += this[e + o] * a;
          return (a *= 128), n >= a && (n -= Math.pow(2, 8 * t)), n;
        }),
        (Buffer.prototype.readIntBE = function readIntBE(e, t, r) {
          (e >>>= 0), (t >>>= 0), r || checkOffset(e, t, this.length);
          let n = t,
            a = 1,
            o = this[e + --n];
          for (; n > 0 && (a *= 256); ) o += this[e + --n] * a;
          return (a *= 128), o >= a && (o -= Math.pow(2, 8 * t)), o;
        }),
        (Buffer.prototype.readInt8 = function readInt8(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (Buffer.prototype.readInt16LE = function readInt16LE(e, t) {
          (e >>>= 0), t || checkOffset(e, 2, this.length);
          const r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (Buffer.prototype.readInt16BE = function readInt16BE(e, t) {
          (e >>>= 0), t || checkOffset(e, 2, this.length);
          const r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (Buffer.prototype.readInt32LE = function readInt32LE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (Buffer.prototype.readInt32BE = function readInt32BE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (Buffer.prototype.readBigInt64LE = defineBigIntMethod(
          function readBigInt64LE(e) {
            validateNumber((e >>>= 0), 'offset');
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || boundsError(e, this.length - 8);
            const n =
              this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24
              )
            );
          }
        )),
        (Buffer.prototype.readBigInt64BE = defineBigIntMethod(
          function readBigInt64BE(e) {
            validateNumber((e >>>= 0), 'offset');
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || boundsError(e, this.length - 8);
            const n =
              (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r
              )
            );
          }
        )),
        (Buffer.prototype.readFloatLE = function readFloatLE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 4, this.length),
            a.read(this, e, !0, 23, 4)
          );
        }),
        (Buffer.prototype.readFloatBE = function readFloatBE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 4, this.length),
            a.read(this, e, !1, 23, 4)
          );
        }),
        (Buffer.prototype.readDoubleLE = function readDoubleLE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 8, this.length),
            a.read(this, e, !0, 52, 8)
          );
        }),
        (Buffer.prototype.readDoubleBE = function readDoubleBE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 8, this.length),
            a.read(this, e, !1, 52, 8)
          );
        }),
        (Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE =
          function writeUIntLE(e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let a = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < r && (a *= 256); )
              this[t + o] = (e / a) & 255;
            return t + r;
          }),
        (Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE =
          function writeUIntBE(e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let a = r - 1,
              o = 1;
            for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
              this[t + a] = (e / o) & 255;
            return t + r;
          }),
        (Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 =
          function writeUInt8(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            );
          }),
        (Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE =
          function writeUInt16LE(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
        (Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE =
          function writeUInt16BE(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
        (Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE =
          function writeUInt32LE(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            );
          }),
        (Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE =
          function writeUInt32BE(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
        (Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(
          function writeBigUInt64LE(e, t = 0) {
            return wrtBigUInt64LE(
              this,
              e,
              t,
              BigInt(0),
              BigInt('0xffffffffffffffff')
            );
          }
        )),
        (Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(
          function writeBigUInt64BE(e, t = 0) {
            return wrtBigUInt64BE(
              this,
              e,
              t,
              BigInt(0),
              BigInt('0xffffffffffffffff')
            );
          }
        )),
        (Buffer.prototype.writeIntLE = function writeIntLE(e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            checkInt(this, e, t, r, n - 1, -n);
          }
          let a = 0,
            o = 1,
            s = 0;
          for (this[t] = 255 & e; ++a < r && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1),
              (this[t + a] = (((e / o) >> 0) - s) & 255);
          return t + r;
        }),
        (Buffer.prototype.writeIntBE = function writeIntBE(e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            checkInt(this, e, t, r, n - 1, -n);
          }
          let a = r - 1,
            o = 1,
            s = 0;
          for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1),
              (this[t + a] = (((e / o) >> 0) - s) & 255);
          return t + r;
        }),
        (Buffer.prototype.writeInt8 = function writeInt8(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (Buffer.prototype.writeInt16LE = function writeInt16LE(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
        (Buffer.prototype.writeInt16BE = function writeInt16BE(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
        (Buffer.prototype.writeInt32LE = function writeInt32LE(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          );
        }),
        (Buffer.prototype.writeInt32BE = function writeInt32BE(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
        (Buffer.prototype.writeBigInt64LE = defineBigIntMethod(
          function writeBigInt64LE(e, t = 0) {
            return wrtBigUInt64LE(
              this,
              e,
              t,
              -BigInt('0x8000000000000000'),
              BigInt('0x7fffffffffffffff')
            );
          }
        )),
        (Buffer.prototype.writeBigInt64BE = defineBigIntMethod(
          function writeBigInt64BE(e, t = 0) {
            return wrtBigUInt64BE(
              this,
              e,
              t,
              -BigInt('0x8000000000000000'),
              BigInt('0x7fffffffffffffff')
            );
          }
        )),
        (Buffer.prototype.writeFloatLE = function writeFloatLE(e, t, r) {
          return writeFloat(this, e, t, !0, r);
        }),
        (Buffer.prototype.writeFloatBE = function writeFloatBE(e, t, r) {
          return writeFloat(this, e, t, !1, r);
        }),
        (Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, t, r) {
          return writeDouble(this, e, t, !0, r);
        }),
        (Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, t, r) {
          return writeDouble(this, e, t, !1, r);
        }),
        (Buffer.prototype.copy = function copy(e, t, r, n) {
          if (!Buffer.isBuffer(e))
            throw new TypeError('argument should be a Buffer');
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError('targetStart out of bounds');
          if (r < 0 || r >= this.length)
            throw new RangeError('Index out of range');
          if (n < 0) throw new RangeError('sourceEnd out of bounds');
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          const a = n - r;
          return (
            this === e && 'function' == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            a
          );
        }),
        (Buffer.prototype.fill = function fill(e, t, r, n) {
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' != typeof n)
            )
              throw new TypeError('encoding must be a string');
            if ('string' == typeof n && !Buffer.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n);
            if (1 === e.length) {
              const t = e.charCodeAt(0);
              (('utf8' === n && t < 128) || 'latin1' === n) && (e = t);
            }
          } else
            'number' == typeof e
              ? (e &= 255)
              : 'boolean' == typeof e && (e = Number(e));
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError('Out of range index');
          if (r <= t) return this;
          let a;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            'number' == typeof e)
          )
            for (a = t; a < r; ++a) this[a] = e;
          else {
            const o = Buffer.isBuffer(e) ? e : Buffer.from(e, n),
              s = o.length;
            if (0 === s)
              throw new TypeError(
                'The value "' + e + '" is invalid for argument "value"'
              );
            for (a = 0; a < r - t; ++a) this[a + t] = o[a % s];
          }
          return this;
        });
      const i = {};
      function E(e, t, r) {
        i[e] = class NodeError extends r {
          constructor() {
            super(),
              Object.defineProperty(this, 'message', {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, 'code', {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function addNumericalSeparator(e) {
        let t = '',
          r = e.length;
        const n = '-' === e[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function checkIntBI(e, t, r, n, a, o) {
        if (e > r || e < t) {
          const n = 'bigint' == typeof t ? 'n' : '';
          let a;
          throw (
            ((a =
              o > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                  : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${
                      8 * (o + 1) - 1
                    }${n}`
                : `>= ${t}${n} and <= ${r}${n}`),
            new i.ERR_OUT_OF_RANGE('value', a, e))
          );
        }
        !(function checkBounds(e, t, r) {
          validateNumber(t, 'offset'),
            (void 0 !== e[t] && void 0 !== e[t + r]) ||
              boundsError(t, e.length - (r + 1));
        })(n, a, o);
      }
      function validateNumber(e, t) {
        if ('number' != typeof e)
          throw new i.ERR_INVALID_ARG_TYPE(t, 'number', e);
      }
      function boundsError(e, t, r) {
        if (Math.floor(e) !== e)
          throw (
            (validateNumber(e, r),
            new i.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
          );
        if (t < 0) throw new i.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new i.ERR_OUT_OF_RANGE(
          r || 'offset',
          `>= ${r ? 1 : 0} and <= ${t}`,
          e
        );
      }
      E(
        'ERR_BUFFER_OUT_OF_BOUNDS',
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : 'Attempt to access memory outside buffer bounds';
        },
        RangeError
      ),
        E(
          'ERR_INVALID_ARG_TYPE',
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          },
          TypeError
        ),
        E(
          'ERR_OUT_OF_RANGE',
          function (e, t, r) {
            let n = `The value of "${e}" is out of range.`,
              a = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 2 ** 32
                ? (a = addNumericalSeparator(String(r)))
                : 'bigint' == typeof r &&
                  ((a = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (a = addNumericalSeparator(a)),
                  (a += 'n')),
              (n += ` It must be ${t}. Received ${a}`),
              n
            );
          },
          RangeError
        );
      const c = /[^+/0-9A-Za-z-_]/g;
      function utf8ToBytes(e, t) {
        let r;
        t = t || 1 / 0;
        const n = e.length;
        let a = null;
        const o = [];
        for (let s = 0; s < n; ++s) {
          if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
            if (!a) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              a = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (a = r);
              continue;
            }
            r = 65536 + (((a - 55296) << 10) | (r - 56320));
          } else a && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((a = null), r < 128)) {
            if ((t -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point');
            if ((t -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return o;
      }
      function base64ToBytes(e) {
        return n.toByteArray(
          (function base64clean(e) {
            if ((e = (e = e.split('=')[0]).trim().replace(c, '')).length < 2)
              return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          })(e)
        );
      }
      function blitBuffer(e, t, r, n) {
        let a;
        for (a = 0; a < n && !(a + r >= t.length || a >= e.length); ++a)
          t[a + r] = e[a];
        return a;
      }
      function isInstance(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        );
      }
      function numberIsNaN(e) {
        return e != e;
      }
      const u = (function () {
        const e = '0123456789abcdef',
          t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          const n = 16 * r;
          for (let a = 0; a < 16; ++a) t[n + a] = e[r] + e[a];
        }
        return t;
      })();
      function defineBigIntMethod(e) {
        return 'undefined' == typeof BigInt ? BufferBigIntNotDefined : e;
      }
      function BufferBigIntNotDefined() {
        throw new Error('BigInt not supported');
      }
    },
    698: function (e, t, r) {
      var n = r(764).Buffer;
      function isSpecificValue(e) {
        return e instanceof n || e instanceof Date || e instanceof RegExp;
      }
      function cloneSpecificValue(e) {
        if (e instanceof n) {
          var t = n.alloc ? n.alloc(e.length) : new n(e.length);
          return e.copy(t), t;
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) return new RegExp(e);
        throw new Error('Unexpected situation');
      }
      function deepCloneArray(e) {
        var t = [];
        return (
          e.forEach(function (e, r) {
            'object' == typeof e && null !== e
              ? Array.isArray(e)
                ? (t[r] = deepCloneArray(e))
                : isSpecificValue(e)
                ? (t[r] = cloneSpecificValue(e))
                : (t[r] = a({}, e))
              : (t[r] = e);
          }),
          t
        );
      }
      function safeGetProperty(e, t) {
        return '__proto__' === t ? void 0 : e[t];
      }
      var a = (e.exports = function () {
        if (arguments.length < 1 || 'object' != typeof arguments[0]) return !1;
        if (arguments.length < 2) return arguments[0];
        var e,
          t,
          r = arguments[0];
        return (
          Array.prototype.slice.call(arguments, 1).forEach(function (n) {
            'object' != typeof n ||
              null === n ||
              Array.isArray(n) ||
              Object.keys(n).forEach(function (o) {
                return (
                  (t = safeGetProperty(r, o)),
                  (e = safeGetProperty(n, o)) === r
                    ? void 0
                    : 'object' != typeof e || null === e
                    ? void (r[o] = e)
                    : Array.isArray(e)
                    ? void (r[o] = deepCloneArray(e))
                    : isSpecificValue(e)
                    ? void (r[o] = cloneSpecificValue(e))
                    : 'object' != typeof t || null === t || Array.isArray(t)
                    ? void (r[o] = a({}, e))
                    : void (r[o] = a(t, e))
                );
              });
          }),
          r
        );
      });
    },
    187: function (e) {
      var t,
        r = 'object' == typeof Reflect ? Reflect : null,
        n =
          r && 'function' == typeof r.apply
            ? r.apply
            : function ReflectApply(e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && 'function' == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function ReflectOwnKeys(e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function ReflectOwnKeys(e) {
              return Object.getOwnPropertyNames(e);
            };
      var a =
        Number.isNaN ||
        function NumberIsNaN(e) {
          return e != e;
        };
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      (e.exports = EventEmitter),
        (e.exports.once = function once(e, t) {
          return new Promise(function (r, n) {
            function errorListener(r) {
              e.removeListener(t, resolver), n(r);
            }
            function resolver() {
              'function' == typeof e.removeListener &&
                e.removeListener('error', errorListener),
                r([].slice.call(arguments));
            }
            eventTargetAgnosticAddListener(e, t, resolver, { once: !0 }),
              'error' !== t &&
                (function addErrorHandlerIfEventEmitter(e, t, r) {
                  'function' == typeof e.on &&
                    eventTargetAgnosticAddListener(e, 'error', t, r);
                })(e, errorListener, { once: !0 });
          });
        }),
        (EventEmitter.EventEmitter = EventEmitter),
        (EventEmitter.prototype._events = void 0),
        (EventEmitter.prototype._eventsCount = 0),
        (EventEmitter.prototype._maxListeners = void 0);
      var o = 10;
      function checkListener(e) {
        if ('function' != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function _getMaxListeners(e) {
        return void 0 === e._maxListeners
          ? EventEmitter.defaultMaxListeners
          : e._maxListeners;
      }
      function _addListener(e, t, r, n) {
        var a, o, s;
        if (
          (checkListener(r),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit('newListener', t, r.listener ? r.listener : r),
                (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = r), ++e._eventsCount;
        else if (
          ('function' == typeof s
            ? (s = o[t] = n ? [r, s] : [s, r])
            : n
            ? s.unshift(r)
            : s.push(r),
          (a = _getMaxListeners(e)) > 0 && s.length > a && !s.warned)
        ) {
          s.warned = !0;
          var l = new Error(
            'Possible EventEmitter memory leak detected. ' +
              s.length +
              ' ' +
              String(t) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit'
          );
          (l.name = 'MaxListenersExceededWarning'),
            (l.emitter = e),
            (l.type = t),
            (l.count = s.length),
            (function ProcessEmitWarning(e) {
              console && console.warn && console.warn(e);
            })(l);
        }
        return e;
      }
      function onceWrapper() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function _onceWrap(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          a = onceWrapper.bind(n);
        return (a.listener = r), (n.wrapFn = a), a;
      }
      function _listeners(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var a = n[t];
        return void 0 === a
          ? []
          : 'function' == typeof a
          ? r
            ? [a.listener || a]
            : [a]
          : r
          ? (function unwrapListeners(e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(a)
          : arrayClone(a, a.length);
      }
      function listenerCount(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ('function' == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function arrayClone(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
      }
      function eventTargetAgnosticAddListener(e, t, r, n) {
        if ('function' == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
        else {
          if ('function' != typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e
            );
          e.addEventListener(t, function wrapListener(a) {
            n.once && e.removeEventListener(t, wrapListener), r(a);
          });
        }
      }
      Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ('number' != typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          o = e;
        },
      }),
        (EventEmitter.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (EventEmitter.prototype.setMaxListeners = function setMaxListeners(e) {
          if ('number' != typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          return (this._maxListeners = e), this;
        }),
        (EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
          return _getMaxListeners(this);
        }),
        (EventEmitter.prototype.emit = function emit(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var a = 'error' === e,
            o = this._events;
          if (void 0 !== o) a = a && void 0 === o.error;
          else if (!a) return !1;
          if (a) {
            var s;
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var l = new Error(
              'Unhandled error.' + (s ? ' (' + s.message + ')' : '')
            );
            throw ((l.context = s), l);
          }
          var i = o[e];
          if (void 0 === i) return !1;
          if ('function' == typeof i) n(i, this, t);
          else {
            var c = i.length,
              u = arrayClone(i, c);
            for (r = 0; r < c; ++r) n(u[r], this, t);
          }
          return !0;
        }),
        (EventEmitter.prototype.addListener = function addListener(e, t) {
          return _addListener(this, e, t, !1);
        }),
        (EventEmitter.prototype.on = EventEmitter.prototype.addListener),
        (EventEmitter.prototype.prependListener = function prependListener(
          e,
          t
        ) {
          return _addListener(this, e, t, !0);
        }),
        (EventEmitter.prototype.once = function once(e, t) {
          return checkListener(t), this.on(e, _onceWrap(this, e, t)), this;
        }),
        (EventEmitter.prototype.prependOnceListener =
          function prependOnceListener(e, t) {
            return (
              checkListener(t),
              this.prependListener(e, _onceWrap(this, e, t)),
              this
            );
          }),
        (EventEmitter.prototype.removeListener = function removeListener(e, t) {
          var r, n, a, o, s;
          if ((checkListener(t), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[e])) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit('removeListener', e, r.listener || t));
          else if ('function' != typeof r) {
            for (a = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === t || r[o].listener === t) {
                (s = r[o].listener), (a = o);
                break;
              }
            if (a < 0) return this;
            0 === a
              ? r.shift()
              : (function spliceOne(e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, a),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit('removeListener', e, s || t);
          }
          return this;
        }),
        (EventEmitter.prototype.off = EventEmitter.prototype.removeListener),
        (EventEmitter.prototype.removeAllListeners =
          function removeAllListeners(e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== r[e] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete r[e]),
                this
              );
            if (0 === arguments.length) {
              var a,
                o = Object.keys(r);
              for (n = 0; n < o.length; ++n)
                'removeListener' !== (a = o[n]) && this.removeAllListeners(a);
              return (
                this.removeAllListeners('removeListener'),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ('function' == typeof (t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
              for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this;
          }),
        (EventEmitter.prototype.listeners = function listeners(e) {
          return _listeners(this, e, !0);
        }),
        (EventEmitter.prototype.rawListeners = function rawListeners(e) {
          return _listeners(this, e, !1);
        }),
        (EventEmitter.listenerCount = function (e, t) {
          return 'function' == typeof e.listenerCount
            ? e.listenerCount(t)
            : listenerCount.call(e, t);
        }),
        (EventEmitter.prototype.listenerCount = listenerCount),
        (EventEmitter.prototype.eventNames = function eventNames() {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    717: function (e) {
      'function' == typeof Object.create
        ? (e.exports = function inherits(e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function inherits(e, t) {
            if (t) {
              e.super_ = t;
              var TempCtor = function () {};
              (TempCtor.prototype = t.prototype),
                (e.prototype = new TempCtor()),
                (e.prototype.constructor = e);
            }
          });
    },
    155: function (e) {
      var t,
        r,
        n = (e.exports = {});
      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      function runTimeout(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === defaultSetTimout || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (r) {
          try {
            return t.call(null, e, 0);
          } catch (r) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = 'function' == typeof setTimeout ? setTimeout : defaultSetTimout;
        } catch (e) {
          t = defaultSetTimout;
        }
        try {
          r =
            'function' == typeof clearTimeout
              ? clearTimeout
              : defaultClearTimeout;
        } catch (e) {
          r = defaultClearTimeout;
        }
      })();
      var a,
        o = [],
        s = !1,
        l = -1;
      function cleanUpNextTick() {
        s &&
          a &&
          ((s = !1),
          a.length ? (o = a.concat(o)) : (l = -1),
          o.length && drainQueue());
      }
      function drainQueue() {
        if (!s) {
          var e = runTimeout(cleanUpNextTick);
          s = !0;
          for (var t = o.length; t; ) {
            for (a = o, o = []; ++l < t; ) a && a[l].run();
            (l = -1), (t = o.length);
          }
          (a = null),
            (s = !1),
            (function runClearTimeout(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === defaultClearTimeout || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                return r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function Item(e, t) {
        (this.fun = e), (this.array = t);
      }
      function noop() {}
      (n.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        o.push(new Item(e, t)), 1 !== o.length || s || runTimeout(drainQueue);
      }),
        (Item.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = 'browser'),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ''),
        (n.versions = {}),
        (n.on = noop),
        (n.addListener = noop),
        (n.once = noop),
        (n.off = noop),
        (n.removeListener = noop),
        (n.removeAllListeners = noop),
        (n.emit = noop),
        (n.prependListener = noop),
        (n.prependOnceListener = noop),
        (n.listeners = function (e) {
          return [];
        }),
        (n.binding = function (e) {
          throw new Error('process.binding is not supported');
        }),
        (n.cwd = function () {
          return '/';
        }),
        (n.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        }),
        (n.umask = function () {
          return 0;
        });
    },
    798: function (e, t, r) {
      var n = r(155),
        a = 65536,
        o = 4294967295;
      var s = r(509).Buffer,
        l = r.g.crypto || r.g.msCrypto;
      l && l.getRandomValues
        ? (e.exports = function randomBytes(e, t) {
            if (e > o) throw new RangeError('requested too many random bytes');
            var r = s.allocUnsafe(e);
            if (e > 0)
              if (e > a)
                for (var i = 0; i < e; i += a)
                  l.getRandomValues(r.slice(i, i + a));
              else l.getRandomValues(r);
            if ('function' == typeof t)
              return n.nextTick(function () {
                t(null, r);
              });
            return r;
          })
        : (e.exports = function oldBrowser() {
            throw new Error(
              'Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11'
            );
          });
    },
    281: function (e) {
      var t = {};
      function createErrorType(e, r, n) {
        n || (n = Error);
        var a = (function (e) {
          function NodeError(t, n, a) {
            return (
              e.call(
                this,
                (function getMessage(e, t, n) {
                  return 'string' == typeof r ? r : r(e, t, n);
                })(t, n, a)
              ) || this
            );
          }
          return (
            (function _inheritsLoose(e, t) {
              (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = t);
            })(NodeError, e),
            NodeError
          );
        })(n);
        (a.prototype.name = n.name), (a.prototype.code = e), (t[e] = a);
      }
      function oneOf(e, t) {
        if (Array.isArray(e)) {
          var r = e.length;
          return (
            (e = e.map(function (e) {
              return String(e);
            })),
            r > 2
              ? 'one of '
                  .concat(t, ' ')
                  .concat(e.slice(0, r - 1).join(', '), ', or ') + e[r - 1]
              : 2 === r
              ? 'one of '.concat(t, ' ').concat(e[0], ' or ').concat(e[1])
              : 'of '.concat(t, ' ').concat(e[0])
          );
        }
        return 'of '.concat(t, ' ').concat(String(e));
      }
      createErrorType(
        'ERR_INVALID_OPT_VALUE',
        function (e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"';
        },
        TypeError
      ),
        createErrorType(
          'ERR_INVALID_ARG_TYPE',
          function (e, t, r) {
            var n, a;
            if (
              ('string' == typeof t &&
              (function startsWith(e, t, r) {
                return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
              })(t, 'not ')
                ? ((n = 'must not be'), (t = t.replace(/^not /, '')))
                : (n = 'must be'),
              (function endsWith(e, t, r) {
                return (
                  (void 0 === r || r > e.length) && (r = e.length),
                  e.substring(r - t.length, r) === t
                );
              })(e, ' argument'))
            )
              a = 'The '.concat(e, ' ').concat(n, ' ').concat(oneOf(t, 'type'));
            else {
              var o = (function includes(e, t, r) {
                return (
                  'number' != typeof r && (r = 0),
                  !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                );
              })(e, '.')
                ? 'property'
                : 'argument';
              a = 'The "'
                .concat(e, '" ')
                .concat(o, ' ')
                .concat(n, ' ')
                .concat(oneOf(t, 'type'));
            }
            return (a += '. Received type '.concat(typeof r));
          },
          TypeError
        ),
        createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
        createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (e) {
          return 'The ' + e + ' method is not implemented';
        }),
        createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
        createErrorType('ERR_STREAM_DESTROYED', function (e) {
          return 'Cannot call ' + e + ' after a stream was destroyed';
        }),
        createErrorType(
          'ERR_MULTIPLE_CALLBACK',
          'Callback called multiple times'
        ),
        createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
        createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
        createErrorType(
          'ERR_STREAM_NULL_VALUES',
          'May not write null values to stream',
          TypeError
        ),
        createErrorType(
          'ERR_UNKNOWN_ENCODING',
          function (e) {
            return 'Unknown encoding: ' + e;
          },
          TypeError
        ),
        createErrorType(
          'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
          'stream.unshift() after end event'
        ),
        (e.exports.q = t);
    },
    753: function (e, t, r) {
      var n = r(155),
        a =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      e.exports = Duplex;
      var o = r(481),
        s = r(229);
      r(717)(Duplex, o);
      for (var l = a(s.prototype), i = 0; i < l.length; i++) {
        var c = l[i];
        Duplex.prototype[c] || (Duplex.prototype[c] = s.prototype[c]);
      }
      function Duplex(e) {
        if (!(this instanceof Duplex)) return new Duplex(e);
        o.call(this, e),
          s.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once('end', onend)));
      }
      function onend() {
        this._writableState.ended || n.nextTick(onEndNT, this);
      }
      function onEndNT(e) {
        e.end();
      }
      Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function get() {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(Duplex.prototype, 'writableBuffer', {
          enumerable: !1,
          get: function get() {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(Duplex.prototype, 'writableLength', {
          enumerable: !1,
          get: function get() {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(Duplex.prototype, 'destroyed', {
          enumerable: !1,
          get: function get() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function set(e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    },
    725: function (e, t, r) {
      e.exports = PassThrough;
      var n = r(605);
      function PassThrough(e) {
        if (!(this instanceof PassThrough)) return new PassThrough(e);
        n.call(this, e);
      }
      r(717)(PassThrough, n),
        (PassThrough.prototype._transform = function (e, t, r) {
          r(null, e);
        });
    },
    481: function (e, t, r) {
      var n,
        a = r(155);
      (e.exports = Readable), (Readable.ReadableState = ReadableState);
      r(187).EventEmitter;
      var o = function EElistenerCount(e, t) {
          return e.listeners(t).length;
        },
        s = r(503),
        l = r(764).Buffer,
        i =
          (void 0 !== r.g
            ? r.g
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof self
            ? self
            : {}
          ).Uint8Array || function () {};
      var c,
        u = r(616);
      c = u && u.debuglog ? u.debuglog('stream') : function debug() {};
      var d,
        p,
        m,
        f = r(327),
        h = r(195),
        g = r(457).getHighWaterMark,
        y = r(281).q,
        S = y.ERR_INVALID_ARG_TYPE,
        v = y.ERR_STREAM_PUSH_AFTER_EOF,
        _ = y.ERR_METHOD_NOT_IMPLEMENTED,
        b = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      r(717)(Readable, s);
      var w = h.errorOrDestroy,
        C = ['error', 'close', 'destroy', 'pause', 'resume'];
      function ReadableState(e, t, a) {
        (n = n || r(753)),
          (e = e || {}),
          'boolean' != typeof a && (a = t instanceof n),
          (this.objectMode = !!e.objectMode),
          a && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = g(this, e, 'readableHighWaterMark', a)),
          (this.buffer = new f()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (d || (d = r(553).s),
            (this.decoder = new d(e.encoding)),
            (this.encoding = e.encoding));
      }
      function Readable(e) {
        if (((n = n || r(753)), !(this instanceof Readable)))
          return new Readable(e);
        var t = this instanceof n;
        (this._readableState = new ReadableState(e, this, t)),
          (this.readable = !0),
          e &&
            ('function' == typeof e.read && (this._read = e.read),
            'function' == typeof e.destroy && (this._destroy = e.destroy)),
          s.call(this);
      }
      function readableAddChunk(e, t, r, n, a) {
        c('readableAddChunk', t);
        var o,
          s = e._readableState;
        if (null === t)
          (s.reading = !1),
            (function onEofChunk(e, t) {
              if ((c('onEofChunk'), t.ended)) return;
              if (t.decoder) {
                var r = t.decoder.end();
                r &&
                  r.length &&
                  (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length));
              }
              (t.ended = !0),
                t.sync
                  ? emitReadable(e)
                  : ((t.needReadable = !1),
                    t.emittedReadable ||
                      ((t.emittedReadable = !0), emitReadable_(e)));
            })(e, s);
        else if (
          (a ||
            (o = (function chunkInvalid(e, t) {
              var r;
              (function _isUint8Array(e) {
                return l.isBuffer(e) || e instanceof i;
              })(t) ||
                'string' == typeof t ||
                void 0 === t ||
                e.objectMode ||
                (r = new S('chunk', ['string', 'Buffer', 'Uint8Array'], t));
              return r;
            })(s, t)),
          o)
        )
          w(e, o);
        else if (s.objectMode || (t && t.length > 0))
          if (
            ('string' == typeof t ||
              s.objectMode ||
              Object.getPrototypeOf(t) === l.prototype ||
              (t = (function _uint8ArrayToBuffer(e) {
                return l.from(e);
              })(t)),
            n)
          )
            s.endEmitted ? w(e, new b()) : addChunk(e, s, t, !0);
          else if (s.ended) w(e, new v());
          else {
            if (s.destroyed) return !1;
            (s.reading = !1),
              s.decoder && !r
                ? ((t = s.decoder.write(t)),
                  s.objectMode || 0 !== t.length
                    ? addChunk(e, s, t, !1)
                    : maybeReadMore(e, s))
                : addChunk(e, s, t, !1);
          }
        else n || ((s.reading = !1), maybeReadMore(e, s));
        return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
      }
      function addChunk(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit('data', r))
          : ((t.length += t.objectMode ? 1 : r.length),
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && emitReadable(e)),
          maybeReadMore(e, t);
      }
      Object.defineProperty(Readable.prototype, 'destroyed', {
        enumerable: !1,
        get: function get() {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function set(e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (Readable.prototype.destroy = h.destroy),
        (Readable.prototype._undestroy = h.undestroy),
        (Readable.prototype._destroy = function (e, t) {
          t(e);
        }),
        (Readable.prototype.push = function (e, t) {
          var r,
            n = this._readableState;
          return (
            n.objectMode
              ? (r = !0)
              : 'string' == typeof e &&
                ((t = t || n.defaultEncoding) !== n.encoding &&
                  ((e = l.from(e, t)), (t = '')),
                (r = !0)),
            readableAddChunk(this, e, t, !1, r)
          );
        }),
        (Readable.prototype.unshift = function (e) {
          return readableAddChunk(this, e, null, !0, !1);
        }),
        (Readable.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (Readable.prototype.setEncoding = function (e) {
          d || (d = r(553).s);
          var t = new d(e);
          (this._readableState.decoder = t),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var n = this._readableState.buffer.head, a = ''; null !== n; )
            (a += t.write(n.data)), (n = n.next);
          return (
            this._readableState.buffer.clear(),
            '' !== a && this._readableState.buffer.push(a),
            (this._readableState.length = a.length),
            this
          );
        });
      var x = 1073741824;
      function howMuchToRead(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function computeNewHighWaterMark(e) {
                return (
                  e >= x
                    ? (e = x)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function emitReadable(e) {
        var t = e._readableState;
        c('emitReadable', t.needReadable, t.emittedReadable),
          (t.needReadable = !1),
          t.emittedReadable ||
            (c('emitReadable', t.flowing),
            (t.emittedReadable = !0),
            a.nextTick(emitReadable_, e));
      }
      function emitReadable_(e) {
        var t = e._readableState;
        c('emitReadable_', t.destroyed, t.length, t.ended),
          t.destroyed ||
            (!t.length && !t.ended) ||
            (e.emit('readable'), (t.emittedReadable = !1)),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          flow(e);
      }
      function maybeReadMore(e, t) {
        t.readingMore ||
          ((t.readingMore = !0), a.nextTick(maybeReadMore_, e, t));
      }
      function maybeReadMore_(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var r = t.length;
          if ((c('maybeReadMore read 0'), e.read(0), r === t.length)) break;
        }
        t.readingMore = !1;
      }
      function updateReadableListening(e) {
        var t = e._readableState;
        (t.readableListening = e.listenerCount('readable') > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount('data') > 0 && e.resume();
      }
      function nReadingNextTick(e) {
        c('readable nexttick read 0'), e.read(0);
      }
      function resume_(e, t) {
        c('resume', t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit('resume'),
          flow(e),
          t.flowing && !t.reading && e.read(0);
      }
      function flow(e) {
        var t = e._readableState;
        for (c('flow', t.flowing); t.flowing && null !== e.read(); );
      }
      function fromList(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join('')
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = t.buffer.consume(e, t.decoder)),
            r);
        var r;
      }
      function endReadable(e) {
        var t = e._readableState;
        c('endReadable', t.endEmitted),
          t.endEmitted || ((t.ended = !0), a.nextTick(endReadableNT, t, e));
      }
      function endReadableNT(e, t) {
        if (
          (c('endReadableNT', e.endEmitted, e.length),
          !e.endEmitted &&
            0 === e.length &&
            ((e.endEmitted = !0),
            (t.readable = !1),
            t.emit('end'),
            e.autoDestroy))
        ) {
          var r = t._writableState;
          (!r || (r.autoDestroy && r.finished)) && t.destroy();
        }
      }
      function indexOf(e, t) {
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      }
      (Readable.prototype.read = function (e) {
        c('read', e), (e = parseInt(e, 10));
        var t = this._readableState,
          r = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark
              ? t.length >= t.highWaterMark
              : t.length > 0) ||
              t.ended))
        )
          return (
            c('read: emitReadable', t.length, t.ended),
            0 === t.length && t.ended ? endReadable(this) : emitReadable(this),
            null
          );
        if (0 === (e = howMuchToRead(e, t)) && t.ended)
          return 0 === t.length && endReadable(this), null;
        var n,
          a = t.needReadable;
        return (
          c('need readable', a),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            c('length less than watermark', (a = !0)),
          t.ended || t.reading
            ? c('reading or ended', (a = !1))
            : a &&
              (c('do read'),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = howMuchToRead(r, t))),
          null === (n = e > 0 ? fromList(e, t) : null)
            ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length &&
            (t.ended || (t.needReadable = !0),
            r !== e && t.ended && endReadable(this)),
          null !== n && this.emit('data', n),
          n
        );
      }),
        (Readable.prototype._read = function (e) {
          w(this, new _('_read()'));
        }),
        (Readable.prototype.pipe = function (e, t) {
          var r = this,
            n = this._readableState;
          switch (n.pipesCount) {
            case 0:
              n.pipes = e;
              break;
            case 1:
              n.pipes = [n.pipes, e];
              break;
            default:
              n.pipes.push(e);
          }
          (n.pipesCount += 1), c('pipe count=%d opts=%j', n.pipesCount, t);
          var s =
            (!t || !1 !== t.end) && e !== a.stdout && e !== a.stderr
              ? onend
              : unpipe;
          function onunpipe(t, a) {
            c('onunpipe'),
              t === r &&
                a &&
                !1 === a.hasUnpiped &&
                ((a.hasUnpiped = !0),
                (function cleanup() {
                  c('cleanup'),
                    e.removeListener('close', onclose),
                    e.removeListener('finish', onfinish),
                    e.removeListener('drain', l),
                    e.removeListener('error', onerror),
                    e.removeListener('unpipe', onunpipe),
                    r.removeListener('end', onend),
                    r.removeListener('end', unpipe),
                    r.removeListener('data', ondata),
                    (i = !0),
                    !n.awaitDrain ||
                      (e._writableState && !e._writableState.needDrain) ||
                      l();
                })());
          }
          function onend() {
            c('onend'), e.end();
          }
          n.endEmitted ? a.nextTick(s) : r.once('end', s),
            e.on('unpipe', onunpipe);
          var l = (function pipeOnDrain(e) {
            return function pipeOnDrainFunctionResult() {
              var t = e._readableState;
              c('pipeOnDrain', t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain &&
                  o(e, 'data') &&
                  ((t.flowing = !0), flow(e));
            };
          })(r);
          e.on('drain', l);
          var i = !1;
          function ondata(t) {
            c('ondata');
            var a = e.write(t);
            c('dest.write', a),
              !1 === a &&
                (((1 === n.pipesCount && n.pipes === e) ||
                  (n.pipesCount > 1 && -1 !== indexOf(n.pipes, e))) &&
                  !i &&
                  (c('false write response, pause', n.awaitDrain),
                  n.awaitDrain++),
                r.pause());
          }
          function onerror(t) {
            c('onerror', t),
              unpipe(),
              e.removeListener('error', onerror),
              0 === o(e, 'error') && w(e, t);
          }
          function onclose() {
            e.removeListener('finish', onfinish), unpipe();
          }
          function onfinish() {
            c('onfinish'), e.removeListener('close', onclose), unpipe();
          }
          function unpipe() {
            c('unpipe'), r.unpipe(e);
          }
          return (
            r.on('data', ondata),
            (function prependListener(e, t, r) {
              if ('function' == typeof e.prependListener)
                return e.prependListener(t, r);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r);
            })(e, 'error', onerror),
            e.once('close', onclose),
            e.once('finish', onfinish),
            e.emit('pipe', r),
            n.flowing || (c('pipe resume'), r.resume()),
            e
          );
        }),
        (Readable.prototype.unpipe = function (e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit('unpipe', this, r)),
              this
            );
          if (!e) {
            var n = t.pipes,
              a = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < a; o++)
              n[o].emit('unpipe', this, { hasUnpiped: !1 });
            return this;
          }
          var s = indexOf(t.pipes, e);
          return (
            -1 === s ||
              (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit('unpipe', this, r)),
            this
          );
        }),
        (Readable.prototype.on = function (e, t) {
          var r = s.prototype.on.call(this, e, t),
            n = this._readableState;
          return (
            'data' === e
              ? ((n.readableListening = this.listenerCount('readable') > 0),
                !1 !== n.flowing && this.resume())
              : 'readable' === e &&
                (n.endEmitted ||
                  n.readableListening ||
                  ((n.readableListening = n.needReadable = !0),
                  (n.flowing = !1),
                  (n.emittedReadable = !1),
                  c('on readable', n.length, n.reading),
                  n.length
                    ? emitReadable(this)
                    : n.reading || a.nextTick(nReadingNextTick, this))),
            r
          );
        }),
        (Readable.prototype.addListener = Readable.prototype.on),
        (Readable.prototype.removeListener = function (e, t) {
          var r = s.prototype.removeListener.call(this, e, t);
          return (
            'readable' === e && a.nextTick(updateReadableListening, this), r
          );
        }),
        (Readable.prototype.removeAllListeners = function (e) {
          var t = s.prototype.removeAllListeners.apply(this, arguments);
          return (
            ('readable' !== e && void 0 !== e) ||
              a.nextTick(updateReadableListening, this),
            t
          );
        }),
        (Readable.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (c('resume'),
              (e.flowing = !e.readableListening),
              (function resume(e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), a.nextTick(resume_, e, t));
              })(this, e)),
            (e.paused = !1),
            this
          );
        }),
        (Readable.prototype.pause = function () {
          return (
            c('call pause flowing=%j', this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (c('pause'),
              (this._readableState.flowing = !1),
              this.emit('pause')),
            (this._readableState.paused = !0),
            this
          );
        }),
        (Readable.prototype.wrap = function (e) {
          var t = this,
            r = this._readableState,
            n = !1;
          for (var a in (e.on('end', function () {
            if ((c('wrapped end'), r.decoder && !r.ended)) {
              var e = r.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on('data', function (a) {
            (c('wrapped data'),
            r.decoder && (a = r.decoder.write(a)),
            r.objectMode && null == a) ||
              ((r.objectMode || (a && a.length)) &&
                (t.push(a) || ((n = !0), e.pause())));
          }),
          e))
            void 0 === this[a] &&
              'function' == typeof e[a] &&
              (this[a] = (function methodWrap(t) {
                return function methodWrapReturnFunction() {
                  return e[t].apply(e, arguments);
                };
              })(a));
          for (var o = 0; o < C.length; o++)
            e.on(C[o], this.emit.bind(this, C[o]));
          return (
            (this._read = function (t) {
              c('wrapped _read', t), n && ((n = !1), e.resume());
            }),
            this
          );
        }),
        'function' == typeof Symbol &&
          (Readable.prototype[Symbol.asyncIterator] = function () {
            return void 0 === p && (p = r(850)), p(this);
          }),
        Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
          enumerable: !1,
          get: function get() {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(Readable.prototype, 'readableBuffer', {
          enumerable: !1,
          get: function get() {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(Readable.prototype, 'readableFlowing', {
          enumerable: !1,
          get: function get() {
            return this._readableState.flowing;
          },
          set: function set(e) {
            this._readableState && (this._readableState.flowing = e);
          },
        }),
        (Readable._fromList = fromList),
        Object.defineProperty(Readable.prototype, 'readableLength', {
          enumerable: !1,
          get: function get() {
            return this._readableState.length;
          },
        }),
        'function' == typeof Symbol &&
          (Readable.from = function (e, t) {
            return void 0 === m && (m = r(167)), m(Readable, e, t);
          });
    },
    605: function (e, t, r) {
      e.exports = Transform;
      var n = r(281).q,
        a = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        l = n.ERR_TRANSFORM_WITH_LENGTH_0,
        i = r(753);
      function afterTransform(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit('error', new o());
        (r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e);
        var a = this._readableState;
        (a.reading = !1),
          (a.needReadable || a.length < a.highWaterMark) &&
            this._read(a.highWaterMark);
      }
      function Transform(e) {
        if (!(this instanceof Transform)) return new Transform(e);
        i.call(this, e),
          (this._transformState = {
            afterTransform: afterTransform.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' == typeof e.transform &&
              (this._transform = e.transform),
            'function' == typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', prefinish);
      }
      function prefinish() {
        var e = this;
        'function' != typeof this._flush || this._readableState.destroyed
          ? done(this, null, null)
          : this._flush(function (t, r) {
              done(e, t, r);
            });
      }
      function done(e, t, r) {
        if (t) return e.emit('error', t);
        if ((null != r && e.push(r), e._writableState.length)) throw new l();
        if (e._transformState.transforming) throw new s();
        return e.push(null);
      }
      r(717)(Transform, i),
        (Transform.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            i.prototype.push.call(this, e, t)
          );
        }),
        (Transform.prototype._transform = function (e, t, r) {
          r(new a('_transform()'));
        }),
        (Transform.prototype._write = function (e, t, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var a = this._readableState;
            (n.needTransform || a.needReadable || a.length < a.highWaterMark) &&
              this._read(a.highWaterMark);
          }
        }),
        (Transform.prototype._read = function (e) {
          var t = this._transformState;
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform));
        }),
        (Transform.prototype._destroy = function (e, t) {
          i.prototype._destroy.call(this, e, function (e) {
            t(e);
          });
        });
    },
    229: function (e, t, r) {
      var n,
        a = r(155);
      function CorkedRequest(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function onCorkedFinish(e, t, r) {
              var n = e.entry;
              e.entry = null;
              for (; n; ) {
                var a = n.callback;
                t.pendingcb--, a(r), (n = n.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      (e.exports = Writable), (Writable.WritableState = WritableState);
      var o = { deprecate: r(927) },
        s = r(503),
        l = r(764).Buffer,
        i =
          (void 0 !== r.g
            ? r.g
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof self
            ? self
            : {}
          ).Uint8Array || function () {};
      var c,
        u = r(195),
        d = r(457).getHighWaterMark,
        p = r(281).q,
        m = p.ERR_INVALID_ARG_TYPE,
        f = p.ERR_METHOD_NOT_IMPLEMENTED,
        h = p.ERR_MULTIPLE_CALLBACK,
        g = p.ERR_STREAM_CANNOT_PIPE,
        y = p.ERR_STREAM_DESTROYED,
        S = p.ERR_STREAM_NULL_VALUES,
        v = p.ERR_STREAM_WRITE_AFTER_END,
        _ = p.ERR_UNKNOWN_ENCODING,
        b = u.errorOrDestroy;
      function nop() {}
      function WritableState(e, t, o) {
        (n = n || r(753)),
          (e = e || {}),
          'boolean' != typeof o && (o = t instanceof n),
          (this.objectMode = !!e.objectMode),
          o && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = d(this, e, 'writableHighWaterMark', o)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === e.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function onwrite(e, t) {
              var r = e._writableState,
                n = r.sync,
                o = r.writecb;
              if ('function' != typeof o) throw new h();
              if (
                ((function onwriteStateUpdate(e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(r),
                t)
              )
                !(function onwriteError(e, t, r, n, o) {
                  --t.pendingcb,
                    r
                      ? (a.nextTick(o, n),
                        a.nextTick(finishMaybe, e, t),
                        (e._writableState.errorEmitted = !0),
                        b(e, n))
                      : (o(n),
                        (e._writableState.errorEmitted = !0),
                        b(e, n),
                        finishMaybe(e, t));
                })(e, r, n, t, o);
              else {
                var s = needFinish(r) || e.destroyed;
                s ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  clearBuffer(e, r),
                  n
                    ? a.nextTick(afterWrite, e, r, s, o)
                    : afterWrite(e, r, s, o);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new CorkedRequest(this));
      }
      function Writable(e) {
        var t = this instanceof (n = n || r(753));
        if (!t && !c.call(Writable, this)) return new Writable(e);
        (this._writableState = new WritableState(e, this, t)),
          (this.writable = !0),
          e &&
            ('function' == typeof e.write && (this._write = e.write),
            'function' == typeof e.writev && (this._writev = e.writev),
            'function' == typeof e.destroy && (this._destroy = e.destroy),
            'function' == typeof e.final && (this._final = e.final)),
          s.call(this);
      }
      function doWrite(e, t, r, n, a, o, s) {
        (t.writelen = n),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new y('write'))
            : r
            ? e._writev(a, t.onwrite)
            : e._write(a, o, t.onwrite),
          (t.sync = !1);
      }
      function afterWrite(e, t, r, n) {
        r ||
          (function onwriteDrain(e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit('drain'));
          })(e, t),
          t.pendingcb--,
          n(),
          finishMaybe(e, t);
      }
      function clearBuffer(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount,
            a = new Array(n),
            o = t.corkedRequestsFree;
          o.entry = r;
          for (var s = 0, l = !0; r; )
            (a[s] = r), r.isBuf || (l = !1), (r = r.next), (s += 1);
          (a.allBuffers = l),
            doWrite(e, t, !0, t.length, a, '', o.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            o.next
              ? ((t.corkedRequestsFree = o.next), (o.next = null))
              : (t.corkedRequestsFree = new CorkedRequest(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var i = r.chunk,
              c = r.encoding,
              u = r.callback;
            if (
              (doWrite(e, t, !1, t.objectMode ? 1 : i.length, i, c, u),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === r && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = r), (t.bufferProcessing = !1);
      }
      function needFinish(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function callFinal(e, t) {
        e._final(function (r) {
          t.pendingcb--,
            r && b(e, r),
            (t.prefinished = !0),
            e.emit('prefinish'),
            finishMaybe(e, t);
        });
      }
      function finishMaybe(e, t) {
        var r = needFinish(t);
        if (
          r &&
          ((function prefinish(e, t) {
            t.prefinished ||
              t.finalCalled ||
              ('function' != typeof e._final || t.destroyed
                ? ((t.prefinished = !0), e.emit('prefinish'))
                : (t.pendingcb++,
                  (t.finalCalled = !0),
                  a.nextTick(callFinal, e, t)));
          })(e, t),
          0 === t.pendingcb &&
            ((t.finished = !0), e.emit('finish'), t.autoDestroy))
        ) {
          var n = e._readableState;
          (!n || (n.autoDestroy && n.endEmitted)) && e.destroy();
        }
        return r;
      }
      r(717)(Writable, s),
        (WritableState.prototype.getBuffer = function getBuffer() {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(WritableState.prototype, 'buffer', {
              get: o.deprecate(
                function writableStateBufferGetter() {
                  return this.getBuffer();
                },
                '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                'DEP0003'
              ),
            });
          } catch (e) {}
        })(),
        'function' == typeof Symbol &&
        Symbol.hasInstance &&
        'function' == typeof Function.prototype[Symbol.hasInstance]
          ? ((c = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(Writable, Symbol.hasInstance, {
              value: function value(e) {
                return (
                  !!c.call(this, e) ||
                  (this === Writable &&
                    e &&
                    e._writableState instanceof WritableState)
                );
              },
            }))
          : (c = function realHasInstance(e) {
              return e instanceof this;
            }),
        (Writable.prototype.pipe = function () {
          b(this, new g());
        }),
        (Writable.prototype.write = function (e, t, r) {
          var n = this._writableState,
            o = !1,
            s =
              !n.objectMode &&
              (function _isUint8Array(e) {
                return l.isBuffer(e) || e instanceof i;
              })(e);
          return (
            s &&
              !l.isBuffer(e) &&
              (e = (function _uint8ArrayToBuffer(e) {
                return l.from(e);
              })(e)),
            'function' == typeof t && ((r = t), (t = null)),
            s ? (t = 'buffer') : t || (t = n.defaultEncoding),
            'function' != typeof r && (r = nop),
            n.ending
              ? (function writeAfterEnd(e, t) {
                  var r = new v();
                  b(e, r), a.nextTick(t, r);
                })(this, r)
              : (s ||
                  (function validChunk(e, t, r, n) {
                    var o;
                    return (
                      null === r
                        ? (o = new S())
                        : 'string' == typeof r ||
                          t.objectMode ||
                          (o = new m('chunk', ['string', 'Buffer'], r)),
                      !o || (b(e, o), a.nextTick(n, o), !1)
                    );
                  })(this, n, e, r)) &&
                (n.pendingcb++,
                (o = (function writeOrBuffer(e, t, r, n, a, o) {
                  if (!r) {
                    var s = (function decodeChunk(e, t, r) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        'string' != typeof t ||
                        (t = l.from(t, r));
                      return t;
                    })(t, n, a);
                    n !== s && ((r = !0), (a = 'buffer'), (n = s));
                  }
                  var i = t.objectMode ? 1 : n.length;
                  t.length += i;
                  var c = t.length < t.highWaterMark;
                  c || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: n,
                      encoding: a,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      u
                        ? (u.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else doWrite(e, t, !1, i, n, a, o);
                  return c;
                })(this, n, s, e, t, r))),
            o
          );
        }),
        (Writable.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (Writable.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              clearBuffer(this, e));
        }),
        (Writable.prototype.setDefaultEncoding = function setDefaultEncoding(
          e
        ) {
          if (
            ('string' == typeof e && (e = e.toLowerCase()),
            !(
              [
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw',
              ].indexOf((e + '').toLowerCase()) > -1
            ))
          )
            throw new _(e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(Writable.prototype, 'writableBuffer', {
          enumerable: !1,
          get: function get() {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function get() {
            return this._writableState.highWaterMark;
          },
        }),
        (Writable.prototype._write = function (e, t, r) {
          r(new f('_write()'));
        }),
        (Writable.prototype._writev = null),
        (Writable.prototype.end = function (e, t, r) {
          var n = this._writableState;
          return (
            'function' == typeof e
              ? ((r = e), (e = null), (t = null))
              : 'function' == typeof t && ((r = t), (t = null)),
            null != e && this.write(e, t),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              (function endWritable(e, t, r) {
                (t.ending = !0),
                  finishMaybe(e, t),
                  r && (t.finished ? a.nextTick(r) : e.once('finish', r));
                (t.ended = !0), (e.writable = !1);
              })(this, n, r),
            this
          );
        }),
        Object.defineProperty(Writable.prototype, 'writableLength', {
          enumerable: !1,
          get: function get() {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(Writable.prototype, 'destroyed', {
          enumerable: !1,
          get: function get() {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function set(e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (Writable.prototype.destroy = u.destroy),
        (Writable.prototype._undestroy = u.undestroy),
        (Writable.prototype._destroy = function (e, t) {
          t(e);
        });
    },
    850: function (e, t, r) {
      var n,
        a = r(155);
      function _defineProperty(e, t, r) {
        return (
          (t = (function _toPropertyKey(e) {
            var t = (function _toPrimitive(e, t) {
              if ('object' != typeof e || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || 'default');
                if ('object' != typeof n) return n;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return ('string' === t ? String : Number)(e);
            })(e, 'string');
            return 'symbol' == typeof t ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = r(610),
        s = Symbol('lastResolve'),
        l = Symbol('lastReject'),
        i = Symbol('error'),
        c = Symbol('ended'),
        u = Symbol('lastPromise'),
        d = Symbol('handlePromise'),
        p = Symbol('stream');
      function createIterResult(e, t) {
        return { value: e, done: t };
      }
      function readAndResolve(e) {
        var t = e[s];
        if (null !== t) {
          var r = e[p].read();
          null !== r &&
            ((e[u] = null),
            (e[s] = null),
            (e[l] = null),
            t(createIterResult(r, !1)));
        }
      }
      function onReadable(e) {
        a.nextTick(readAndResolve, e);
      }
      var m = Object.getPrototypeOf(function () {}),
        f = Object.setPrototypeOf(
          (_defineProperty(
            (n = {
              get stream() {
                return this[p];
              },
              next: function next() {
                var e = this,
                  t = this[i];
                if (null !== t) return Promise.reject(t);
                if (this[c])
                  return Promise.resolve(createIterResult(void 0, !0));
                if (this[p].destroyed)
                  return new Promise(function (t, r) {
                    a.nextTick(function () {
                      e[i] ? r(e[i]) : t(createIterResult(void 0, !0));
                    });
                  });
                var r,
                  n = this[u];
                if (n)
                  r = new Promise(
                    (function wrapForNext(e, t) {
                      return function (r, n) {
                        e.then(function () {
                          t[c] ? r(createIterResult(void 0, !0)) : t[d](r, n);
                        }, n);
                      };
                    })(n, this)
                  );
                else {
                  var o = this[p].read();
                  if (null !== o)
                    return Promise.resolve(createIterResult(o, !1));
                  r = new Promise(this[d]);
                }
                return (this[u] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          _defineProperty(n, 'return', function _return() {
            var e = this;
            return new Promise(function (t, r) {
              e[p].destroy(null, function (e) {
                e ? r(e) : t(createIterResult(void 0, !0));
              });
            });
          }),
          n),
          m
        );
      e.exports = function createReadableStreamAsyncIterator(e) {
        var t,
          r = Object.create(
            f,
            (_defineProperty((t = {}), p, { value: e, writable: !0 }),
            _defineProperty(t, s, { value: null, writable: !0 }),
            _defineProperty(t, l, { value: null, writable: !0 }),
            _defineProperty(t, i, { value: null, writable: !0 }),
            _defineProperty(t, c, {
              value: e._readableState.endEmitted,
              writable: !0,
            }),
            _defineProperty(t, d, {
              value: function value(e, t) {
                var n = r[p].read();
                n
                  ? ((r[u] = null),
                    (r[s] = null),
                    (r[l] = null),
                    e(createIterResult(n, !1)))
                  : ((r[s] = e), (r[l] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (r[u] = null),
          o(e, function (e) {
            if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
              var t = r[l];
              return (
                null !== t &&
                  ((r[u] = null), (r[s] = null), (r[l] = null), t(e)),
                void (r[i] = e)
              );
            }
            var n = r[s];
            null !== n &&
              ((r[u] = null),
              (r[s] = null),
              (r[l] = null),
              n(createIterResult(void 0, !0))),
              (r[c] = !0);
          }),
          e.on('readable', onReadable.bind(null, r)),
          r
        );
      };
    },
    327: function (e, t, r) {
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _defineProperty(e, t, r) {
        return (
          (t = _toPropertyKey(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, _toPropertyKey(n.key), n);
        }
      }
      function _toPropertyKey(e) {
        var t = (function _toPrimitive(e, t) {
          if ('object' != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || 'default');
            if ('object' != typeof n) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' == typeof t ? t : String(t);
      }
      var n = r(764).Buffer,
        a = r(361).inspect,
        o = (a && a.custom) || 'inspect';
      e.exports = (function () {
        function BufferList() {
          !(function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, BufferList),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              e
            );
          })(BufferList, [
            {
              key: 'push',
              value: function push(e) {
                var t = { data: e, next: null };
                this.length > 0 ? (this.tail.next = t) : (this.head = t),
                  (this.tail = t),
                  ++this.length;
              },
            },
            {
              key: 'unshift',
              value: function unshift(e) {
                var t = { data: e, next: this.head };
                0 === this.length && (this.tail = t),
                  (this.head = t),
                  ++this.length;
              },
            },
            {
              key: 'shift',
              value: function shift() {
                if (0 !== this.length) {
                  var e = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
                  );
                }
              },
            },
            {
              key: 'clear',
              value: function clear() {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: 'join',
              value: function join(e) {
                if (0 === this.length) return '';
                for (var t = this.head, r = '' + t.data; (t = t.next); )
                  r += e + t.data;
                return r;
              },
            },
            {
              key: 'concat',
              value: function concat(e) {
                if (0 === this.length) return n.alloc(0);
                for (
                  var t, r, a, o = n.allocUnsafe(e >>> 0), s = this.head, l = 0;
                  s;

                )
                  (t = s.data),
                    (r = o),
                    (a = l),
                    n.prototype.copy.call(t, r, a),
                    (l += s.data.length),
                    (s = s.next);
                return o;
              },
            },
            {
              key: 'consume',
              value: function consume(e, t) {
                var r;
                return (
                  e < this.head.data.length
                    ? ((r = this.head.data.slice(0, e)),
                      (this.head.data = this.head.data.slice(e)))
                    : (r =
                        e === this.head.data.length
                          ? this.shift()
                          : t
                          ? this._getString(e)
                          : this._getBuffer(e)),
                  r
                );
              },
            },
            {
              key: 'first',
              value: function first() {
                return this.head.data;
              },
            },
            {
              key: '_getString',
              value: function _getString(e) {
                var t = this.head,
                  r = 1,
                  n = t.data;
                for (e -= n.length; (t = t.next); ) {
                  var a = t.data,
                    o = e > a.length ? a.length : e;
                  if (
                    (o === a.length ? (n += a) : (n += a.slice(0, e)),
                    0 === (e -= o))
                  ) {
                    o === a.length
                      ? (++r,
                        t.next
                          ? (this.head = t.next)
                          : (this.head = this.tail = null))
                      : ((this.head = t), (t.data = a.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), n;
              },
            },
            {
              key: '_getBuffer',
              value: function _getBuffer(e) {
                var t = n.allocUnsafe(e),
                  r = this.head,
                  a = 1;
                for (r.data.copy(t), e -= r.data.length; (r = r.next); ) {
                  var o = r.data,
                    s = e > o.length ? o.length : e;
                  if ((o.copy(t, t.length - e, 0, s), 0 === (e -= s))) {
                    s === o.length
                      ? (++a,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = o.slice(s)));
                    break;
                  }
                  ++a;
                }
                return (this.length -= a), t;
              },
            },
            {
              key: o,
              value: function value(e, t) {
                return a(
                  this,
                  _objectSpread(
                    _objectSpread({}, t),
                    {},
                    { depth: 0, customInspect: !1 }
                  )
                );
              },
            },
          ]),
          BufferList
        );
      })();
    },
    195: function (e, t, r) {
      var n = r(155);
      function emitErrorAndCloseNT(e, t) {
        emitErrorNT(e, t), emitCloseNT(e);
      }
      function emitCloseNT(e) {
        (e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit('close');
      }
      function emitErrorNT(e, t) {
        e.emit('error', t);
      }
      e.exports = {
        destroy: function destroy(e, t) {
          var r = this,
            a = this._readableState && this._readableState.destroyed,
            o = this._writableState && this._writableState.destroyed;
          return a || o
            ? (t
                ? t(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      n.nextTick(emitErrorNT, this, e))
                    : n.nextTick(emitErrorNT, this, e)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !t && e
                  ? r._writableState
                    ? r._writableState.errorEmitted
                      ? n.nextTick(emitCloseNT, r)
                      : ((r._writableState.errorEmitted = !0),
                        n.nextTick(emitErrorAndCloseNT, r, e))
                    : n.nextTick(emitErrorAndCloseNT, r, e)
                  : t
                  ? (n.nextTick(emitCloseNT, r), t(e))
                  : n.nextTick(emitCloseNT, r);
              }),
              this);
        },
        undestroy: function undestroy() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function errorOrDestroy(e, t) {
          var r = e._readableState,
            n = e._writableState;
          (r && r.autoDestroy) || (n && n.autoDestroy)
            ? e.destroy(t)
            : e.emit('error', t);
        },
      };
    },
    610: function (e, t, r) {
      var n = r(281).q.ERR_STREAM_PREMATURE_CLOSE;
      function noop() {}
      e.exports = function eos(e, t, r) {
        if ('function' == typeof t) return eos(e, null, t);
        t || (t = {}),
          (r = (function once(e) {
            var t = !1;
            return function () {
              if (!t) {
                t = !0;
                for (
                  var r = arguments.length, n = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  n[a] = arguments[a];
                e.apply(this, n);
              }
            };
          })(r || noop));
        var a = t.readable || (!1 !== t.readable && e.readable),
          o = t.writable || (!1 !== t.writable && e.writable),
          s = function onlegacyfinish() {
            e.writable || i();
          },
          l = e._writableState && e._writableState.finished,
          i = function onfinish() {
            (o = !1), (l = !0), a || r.call(e);
          },
          c = e._readableState && e._readableState.endEmitted,
          u = function onend() {
            (a = !1), (c = !0), o || r.call(e);
          },
          d = function onerror(t) {
            r.call(e, t);
          },
          p = function onclose() {
            var t;
            return a && !c
              ? ((e._readableState && e._readableState.ended) || (t = new n()),
                r.call(e, t))
              : o && !l
              ? ((e._writableState && e._writableState.ended) || (t = new n()),
                r.call(e, t))
              : void 0;
          },
          m = function onrequest() {
            e.req.on('finish', i);
          };
        return (
          !(function isRequest(e) {
            return e.setHeader && 'function' == typeof e.abort;
          })(e)
            ? o && !e._writableState && (e.on('end', s), e.on('close', s))
            : (e.on('complete', i),
              e.on('abort', p),
              e.req ? m() : e.on('request', m)),
          e.on('end', u),
          e.on('finish', i),
          !1 !== t.error && e.on('error', d),
          e.on('close', p),
          function () {
            e.removeListener('complete', i),
              e.removeListener('abort', p),
              e.removeListener('request', m),
              e.req && e.req.removeListener('finish', i),
              e.removeListener('end', s),
              e.removeListener('close', s),
              e.removeListener('finish', i),
              e.removeListener('end', u),
              e.removeListener('error', d),
              e.removeListener('close', p);
          }
        );
      };
    },
    167: function (e) {
      e.exports = function () {
        throw new Error('Readable.from is not available in the browser');
      };
    },
    946: function (e, t, r) {
      var n;
      var a = r(281).q,
        o = a.ERR_MISSING_ARGS,
        s = a.ERR_STREAM_DESTROYED;
      function noop(e) {
        if (e) throw e;
      }
      function call(e) {
        e();
      }
      function pipe(e, t) {
        return e.pipe(t);
      }
      e.exports = function pipeline() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var l,
          i = (function popCallback(e) {
            return e.length
              ? 'function' != typeof e[e.length - 1]
                ? noop
                : e.pop()
              : noop;
          })(t);
        if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
          throw new o('streams');
        var c = t.map(function (e, a) {
          var o = a < t.length - 1;
          return (function destroyer(e, t, a, o) {
            o = (function once(e) {
              var t = !1;
              return function () {
                t || ((t = !0), e.apply(void 0, arguments));
              };
            })(o);
            var l = !1;
            e.on('close', function () {
              l = !0;
            }),
              void 0 === n && (n = r(610)),
              n(e, { readable: t, writable: a }, function (e) {
                if (e) return o(e);
                (l = !0), o();
              });
            var i = !1;
            return function (t) {
              if (!l && !i)
                return (
                  (i = !0),
                  (function isRequest(e) {
                    return e.setHeader && 'function' == typeof e.abort;
                  })(e)
                    ? e.abort()
                    : 'function' == typeof e.destroy
                    ? e.destroy()
                    : void o(t || new s('pipe'))
                );
            };
          })(e, o, a > 0, function (e) {
            l || (l = e), e && c.forEach(call), o || (c.forEach(call), i(l));
          });
        });
        return t.reduce(pipe);
      };
    },
    457: function (e, t, r) {
      var n = r(281).q.ERR_INVALID_OPT_VALUE;
      e.exports = {
        getHighWaterMark: function getHighWaterMark(e, t, r, a) {
          var o = (function highWaterMarkFrom(e, t, r) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null;
          })(t, a, r);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new n(a ? r : 'highWaterMark', o);
            return Math.floor(o);
          }
          return e.objectMode ? 16 : 16384;
        },
      };
    },
    503: function (e, t, r) {
      e.exports = r(187).EventEmitter;
    },
    509: function (e, t, r) {
      var n = r(764),
        a = n.Buffer;
      function copyProps(e, t) {
        for (var r in e) t[r] = e[r];
      }
      function SafeBuffer(e, t, r) {
        return a(e, t, r);
      }
      a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow
        ? (e.exports = n)
        : (copyProps(n, t), (t.Buffer = SafeBuffer)),
        (SafeBuffer.prototype = Object.create(a.prototype)),
        copyProps(a, SafeBuffer),
        (SafeBuffer.from = function (e, t, r) {
          if ('number' == typeof e)
            throw new TypeError('Argument must not be a number');
          return a(e, t, r);
        }),
        (SafeBuffer.alloc = function (e, t, r) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          var n = a(e);
          return (
            void 0 !== t
              ? 'string' == typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          );
        }),
        (SafeBuffer.allocUnsafe = function (e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          return a(e);
        }),
        (SafeBuffer.allocUnsafeSlow = function (e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number');
          return n.SlowBuffer(e);
        });
    },
    189: function (e, t, r) {
      var n = r(509).Buffer;
      function Hash(e, t) {
        (this._block = n.alloc(e)),
          (this._finalSize = t),
          (this._blockSize = e),
          (this._len = 0);
      }
      (Hash.prototype.update = function (e, t) {
        'string' == typeof e && ((t = t || 'utf8'), (e = n.from(e, t)));
        for (
          var r = this._block,
            a = this._blockSize,
            o = e.length,
            s = this._len,
            l = 0;
          l < o;

        ) {
          for (var i = s % a, c = Math.min(o - l, a - i), u = 0; u < c; u++)
            r[i + u] = e[l + u];
          (l += c), (s += c) % a == 0 && this._update(r);
        }
        return (this._len += o), this;
      }),
        (Hash.prototype.digest = function (e) {
          var t = this._len % this._blockSize;
          (this._block[t] = 128),
            this._block.fill(0, t + 1),
            t >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var n = (4294967295 & r) >>> 0,
              a = (r - n) / 4294967296;
            this._block.writeUInt32BE(a, this._blockSize - 8),
              this._block.writeUInt32BE(n, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return e ? o.toString(e) : o;
        }),
        (Hash.prototype._update = function () {
          throw new Error('_update must be implemented by subclass');
        }),
        (e.exports = Hash);
    },
    72: function (e, t, r) {
      var n = (e.exports = function SHA(e) {
        e = e.toLowerCase();
        var t = n[e];
        if (!t)
          throw new Error(e + ' is not supported (we accept pull requests)');
        return new t();
      });
      (n.sha = r(448)),
        (n.sha1 = r(336)),
        (n.sha224 = r(432)),
        (n.sha256 = r(499)),
        (n.sha384 = r(686)),
        (n.sha512 = r(816));
    },
    448: function (e, t, r) {
      var n = r(717),
        a = r(189),
        o = r(509).Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        l = new Array(80);
      function Sha() {
        this.init(), (this._w = l), a.call(this, 64, 56);
      }
      function rotl30(e) {
        return (e << 30) | (e >>> 2);
      }
      function ft(e, t, r, n) {
        return 0 === e
          ? (t & r) | (~t & n)
          : 2 === e
          ? (t & r) | (t & n) | (r & n)
          : t ^ r ^ n;
      }
      n(Sha, a),
        (Sha.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (Sha.prototype._update = function (e) {
          for (
            var t,
              r = this._w,
              n = 0 | this._a,
              a = 0 | this._b,
              o = 0 | this._c,
              l = 0 | this._d,
              i = 0 | this._e,
              c = 0;
            c < 16;
            ++c
          )
            r[c] = e.readInt32BE(4 * c);
          for (; c < 80; ++c)
            r[c] = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16];
          for (var u = 0; u < 80; ++u) {
            var d = ~~(u / 20),
              p =
                0 |
                ((((t = n) << 5) | (t >>> 27)) +
                  ft(d, a, o, l) +
                  i +
                  r[u] +
                  s[d]);
            (i = l), (l = o), (o = rotl30(a)), (a = n), (n = p);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (a + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (l + this._d) | 0),
            (this._e = (i + this._e) | 0);
        }),
        (Sha.prototype._hash = function () {
          var e = o.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = Sha);
    },
    336: function (e, t, r) {
      var n = r(717),
        a = r(189),
        o = r(509).Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        l = new Array(80);
      function Sha1() {
        this.init(), (this._w = l), a.call(this, 64, 56);
      }
      function rotl5(e) {
        return (e << 5) | (e >>> 27);
      }
      function rotl30(e) {
        return (e << 30) | (e >>> 2);
      }
      function ft(e, t, r, n) {
        return 0 === e
          ? (t & r) | (~t & n)
          : 2 === e
          ? (t & r) | (t & n) | (r & n)
          : t ^ r ^ n;
      }
      n(Sha1, a),
        (Sha1.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (Sha1.prototype._update = function (e) {
          for (
            var t,
              r = this._w,
              n = 0 | this._a,
              a = 0 | this._b,
              o = 0 | this._c,
              l = 0 | this._d,
              i = 0 | this._e,
              c = 0;
            c < 16;
            ++c
          )
            r[c] = e.readInt32BE(4 * c);
          for (; c < 80; ++c)
            r[c] =
              ((t = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16]) << 1) |
              (t >>> 31);
          for (var u = 0; u < 80; ++u) {
            var d = ~~(u / 20),
              p = (rotl5(n) + ft(d, a, o, l) + i + r[u] + s[d]) | 0;
            (i = l), (l = o), (o = rotl30(a)), (a = n), (n = p);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (a + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (l + this._d) | 0),
            (this._e = (i + this._e) | 0);
        }),
        (Sha1.prototype._hash = function () {
          var e = o.allocUnsafe(20);
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          );
        }),
        (e.exports = Sha1);
    },
    432: function (e, t, r) {
      var n = r(717),
        a = r(499),
        o = r(189),
        s = r(509).Buffer,
        l = new Array(64);
      function Sha224() {
        this.init(), (this._w = l), o.call(this, 64, 56);
      }
      n(Sha224, a),
        (Sha224.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (Sha224.prototype._hash = function () {
          var e = s.allocUnsafe(28);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e
          );
        }),
        (e.exports = Sha224);
    },
    499: function (e, t, r) {
      var n = r(717),
        a = r(189),
        o = r(509).Buffer,
        s = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        l = new Array(64);
      function Sha256() {
        this.init(), (this._w = l), a.call(this, 64, 56);
      }
      function ch(e, t, r) {
        return r ^ (e & (t ^ r));
      }
      function maj(e, t, r) {
        return (e & t) | (r & (e | t));
      }
      function sigma0(e) {
        return (
          ((e >>> 2) | (e << 30)) ^
          ((e >>> 13) | (e << 19)) ^
          ((e >>> 22) | (e << 10))
        );
      }
      function sigma1(e) {
        return (
          ((e >>> 6) | (e << 26)) ^
          ((e >>> 11) | (e << 21)) ^
          ((e >>> 25) | (e << 7))
        );
      }
      function gamma0(e) {
        return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
      }
      n(Sha256, a),
        (Sha256.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (Sha256.prototype._update = function (e) {
          for (
            var t,
              r = this._w,
              n = 0 | this._a,
              a = 0 | this._b,
              o = 0 | this._c,
              l = 0 | this._d,
              i = 0 | this._e,
              c = 0 | this._f,
              u = 0 | this._g,
              d = 0 | this._h,
              p = 0;
            p < 16;
            ++p
          )
            r[p] = e.readInt32BE(4 * p);
          for (; p < 64; ++p)
            r[p] =
              0 |
              (((((t = r[p - 2]) >>> 17) | (t << 15)) ^
                ((t >>> 19) | (t << 13)) ^
                (t >>> 10)) +
                r[p - 7] +
                gamma0(r[p - 15]) +
                r[p - 16]);
          for (var m = 0; m < 64; ++m) {
            var f = (d + sigma1(i) + ch(i, c, u) + s[m] + r[m]) | 0,
              h = (sigma0(n) + maj(n, a, o)) | 0;
            (d = u),
              (u = c),
              (c = i),
              (i = (l + f) | 0),
              (l = o),
              (o = a),
              (a = n),
              (n = (f + h) | 0);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (a + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (l + this._d) | 0),
            (this._e = (i + this._e) | 0),
            (this._f = (c + this._f) | 0),
            (this._g = (u + this._g) | 0),
            (this._h = (d + this._h) | 0);
        }),
        (Sha256.prototype._hash = function () {
          var e = o.allocUnsafe(32);
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e.writeInt32BE(this._h, 28),
            e
          );
        }),
        (e.exports = Sha256);
    },
    686: function (e, t, r) {
      var n = r(717),
        a = r(816),
        o = r(189),
        s = r(509).Buffer,
        l = new Array(160);
      function Sha384() {
        this.init(), (this._w = l), o.call(this, 128, 112);
      }
      n(Sha384, a),
        (Sha384.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (Sha384.prototype._hash = function () {
          var e = s.allocUnsafe(48);
          function writeInt64BE(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
          }
          return (
            writeInt64BE(this._ah, this._al, 0),
            writeInt64BE(this._bh, this._bl, 8),
            writeInt64BE(this._ch, this._cl, 16),
            writeInt64BE(this._dh, this._dl, 24),
            writeInt64BE(this._eh, this._el, 32),
            writeInt64BE(this._fh, this._fl, 40),
            e
          );
        }),
        (e.exports = Sha384);
    },
    816: function (e, t, r) {
      var n = r(717),
        a = r(189),
        o = r(509).Buffer,
        s = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        l = new Array(160);
      function Sha512() {
        this.init(), (this._w = l), a.call(this, 128, 112);
      }
      function Ch(e, t, r) {
        return r ^ (e & (t ^ r));
      }
      function maj(e, t, r) {
        return (e & t) | (r & (e | t));
      }
      function sigma0(e, t) {
        return (
          ((e >>> 28) | (t << 4)) ^
          ((t >>> 2) | (e << 30)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function sigma1(e, t) {
        return (
          ((e >>> 14) | (t << 18)) ^
          ((e >>> 18) | (t << 14)) ^
          ((t >>> 9) | (e << 23))
        );
      }
      function Gamma0(e, t) {
        return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
      }
      function Gamma0l(e, t) {
        return (
          ((e >>> 1) | (t << 31)) ^
          ((e >>> 8) | (t << 24)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function Gamma1(e, t) {
        return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
      }
      function Gamma1l(e, t) {
        return (
          ((e >>> 19) | (t << 13)) ^
          ((t >>> 29) | (e << 3)) ^
          ((e >>> 6) | (t << 26))
        );
      }
      function getCarry(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0;
      }
      n(Sha512, a),
        (Sha512.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (Sha512.prototype._update = function (e) {
          for (
            var t = this._w,
              r = 0 | this._ah,
              n = 0 | this._bh,
              a = 0 | this._ch,
              o = 0 | this._dh,
              l = 0 | this._eh,
              i = 0 | this._fh,
              c = 0 | this._gh,
              u = 0 | this._hh,
              d = 0 | this._al,
              p = 0 | this._bl,
              m = 0 | this._cl,
              f = 0 | this._dl,
              h = 0 | this._el,
              g = 0 | this._fl,
              y = 0 | this._gl,
              S = 0 | this._hl,
              v = 0;
            v < 32;
            v += 2
          )
            (t[v] = e.readInt32BE(4 * v)),
              (t[v + 1] = e.readInt32BE(4 * v + 4));
          for (; v < 160; v += 2) {
            var _ = t[v - 30],
              b = t[v - 30 + 1],
              w = Gamma0(_, b),
              C = Gamma0l(b, _),
              x = Gamma1((_ = t[v - 4]), (b = t[v - 4 + 1])),
              O = Gamma1l(b, _),
              k = t[v - 14],
              N = t[v - 14 + 1],
              A = t[v - 32],
              I = t[v - 32 + 1],
              R = (C + N) | 0,
              T = (w + k + getCarry(R, C)) | 0;
            (T =
              ((T = (T + x + getCarry((R = (R + O) | 0), O)) | 0) +
                A +
                getCarry((R = (R + I) | 0), I)) |
              0),
              (t[v] = T),
              (t[v + 1] = R);
          }
          for (var B = 0; B < 160; B += 2) {
            (T = t[B]), (R = t[B + 1]);
            var j = maj(r, n, a),
              P = maj(d, p, m),
              M = sigma0(r, d),
              q = sigma0(d, r),
              L = sigma1(l, h),
              D = sigma1(h, l),
              U = s[B],
              $ = s[B + 1],
              J = Ch(l, i, c),
              V = Ch(h, g, y),
              K = (S + D) | 0,
              z = (u + L + getCarry(K, S)) | 0;
            z =
              ((z =
                ((z = (z + J + getCarry((K = (K + V) | 0), V)) | 0) +
                  U +
                  getCarry((K = (K + $) | 0), $)) |
                0) +
                T +
                getCarry((K = (K + R) | 0), R)) |
              0;
            var F = (q + P) | 0,
              W = (M + j + getCarry(F, q)) | 0;
            (u = c),
              (S = y),
              (c = i),
              (y = g),
              (i = l),
              (g = h),
              (l = (o + z + getCarry((h = (f + K) | 0), f)) | 0),
              (o = a),
              (f = m),
              (a = n),
              (m = p),
              (n = r),
              (p = d),
              (r = (z + W + getCarry((d = (K + F) | 0), K)) | 0);
          }
          (this._al = (this._al + d) | 0),
            (this._bl = (this._bl + p) | 0),
            (this._cl = (this._cl + m) | 0),
            (this._dl = (this._dl + f) | 0),
            (this._el = (this._el + h) | 0),
            (this._fl = (this._fl + g) | 0),
            (this._gl = (this._gl + y) | 0),
            (this._hl = (this._hl + S) | 0),
            (this._ah = (this._ah + r + getCarry(this._al, d)) | 0),
            (this._bh = (this._bh + n + getCarry(this._bl, p)) | 0),
            (this._ch = (this._ch + a + getCarry(this._cl, m)) | 0),
            (this._dh = (this._dh + o + getCarry(this._dl, f)) | 0),
            (this._eh = (this._eh + l + getCarry(this._el, h)) | 0),
            (this._fh = (this._fh + i + getCarry(this._fl, g)) | 0),
            (this._gh = (this._gh + c + getCarry(this._gl, y)) | 0),
            (this._hh = (this._hh + u + getCarry(this._hl, S)) | 0);
        }),
        (Sha512.prototype._hash = function () {
          var e = o.allocUnsafe(64);
          function writeInt64BE(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
          }
          return (
            writeInt64BE(this._ah, this._al, 0),
            writeInt64BE(this._bh, this._bl, 8),
            writeInt64BE(this._ch, this._cl, 16),
            writeInt64BE(this._dh, this._dl, 24),
            writeInt64BE(this._eh, this._el, 32),
            writeInt64BE(this._fh, this._fl, 40),
            writeInt64BE(this._gh, this._gl, 48),
            writeInt64BE(this._hh, this._hl, 56),
            e
          );
        }),
        (e.exports = Sha512);
    },
    830: function (e, t, r) {
      e.exports = Stream;
      var n = r(187).EventEmitter;
      function Stream() {
        n.call(this);
      }
      r(717)(Stream, n),
        (Stream.Readable = r(481)),
        (Stream.Writable = r(229)),
        (Stream.Duplex = r(753)),
        (Stream.Transform = r(605)),
        (Stream.PassThrough = r(725)),
        (Stream.finished = r(610)),
        (Stream.pipeline = r(946)),
        (Stream.Stream = Stream),
        (Stream.prototype.pipe = function (e, t) {
          var r = this;
          function ondata(t) {
            e.writable && !1 === e.write(t) && r.pause && r.pause();
          }
          function ondrain() {
            r.readable && r.resume && r.resume();
          }
          r.on('data', ondata),
            e.on('drain', ondrain),
            e._isStdio ||
              (t && !1 === t.end) ||
              (r.on('end', onend), r.on('close', onclose));
          var a = !1;
          function onend() {
            a || ((a = !0), e.end());
          }
          function onclose() {
            a || ((a = !0), 'function' == typeof e.destroy && e.destroy());
          }
          function onerror(e) {
            if ((cleanup(), 0 === n.listenerCount(this, 'error'))) throw e;
          }
          function cleanup() {
            r.removeListener('data', ondata),
              e.removeListener('drain', ondrain),
              r.removeListener('end', onend),
              r.removeListener('close', onclose),
              r.removeListener('error', onerror),
              e.removeListener('error', onerror),
              r.removeListener('end', cleanup),
              r.removeListener('close', cleanup),
              e.removeListener('close', cleanup);
          }
          return (
            r.on('error', onerror),
            e.on('error', onerror),
            r.on('end', cleanup),
            r.on('close', cleanup),
            e.on('close', cleanup),
            e.emit('pipe', r),
            e
          );
        });
    },
    553: function (e, t, r) {
      var n = r(509).Buffer,
        a =
          n.isEncoding ||
          function (e) {
            switch ((e = '' + e) && e.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0;
              default:
                return !1;
            }
          };
      function StringDecoder(e) {
        var t;
        switch (
          ((this.encoding = (function normalizeEncoding(e) {
            var t = (function _normalizeEncoding(e) {
              if (!e) return 'utf8';
              for (var t; ; )
                switch (e) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8';
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le';
                  case 'latin1':
                  case 'binary':
                    return 'latin1';
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return e;
                  default:
                    if (t) return;
                    (e = ('' + e).toLowerCase()), (t = !0);
                }
            })(e);
            if ('string' != typeof t && (n.isEncoding === a || !a(e)))
              throw new Error('Unknown encoding: ' + e);
            return t || e;
          })(e)),
          this.encoding)
        ) {
          case 'utf16le':
            (this.text = utf16Text), (this.end = utf16End), (t = 4);
            break;
          case 'utf8':
            (this.fillLast = utf8FillLast), (t = 4);
            break;
          case 'base64':
            (this.text = base64Text), (this.end = base64End), (t = 3);
            break;
          default:
            return (this.write = simpleWrite), void (this.end = simpleEnd);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(t));
      }
      function utf8CheckByte(e) {
        return e <= 127
          ? 0
          : e >> 5 == 6
          ? 2
          : e >> 4 == 14
          ? 3
          : e >> 3 == 30
          ? 4
          : e >> 6 == 2
          ? -1
          : -2;
      }
      function utf8FillLast(e) {
        var t = this.lastTotal - this.lastNeed,
          r = (function utf8CheckExtraBytes(e, t, r) {
            if (128 != (192 & t[0])) return (e.lastNeed = 0), '�';
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 != (192 & t[1])) return (e.lastNeed = 1), '�';
              if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                return (e.lastNeed = 2), '�';
            }
          })(this, e);
        return void 0 !== r
          ? r
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length));
      }
      function utf16Text(e, t) {
        if ((e.length - t) % 2 == 0) {
          var r = e.toString('utf16le', t);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString('utf16le', t, e.length - 1)
        );
      }
      function utf16End(e) {
        var t = e && e.length ? this.write(e) : '';
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString('utf16le', 0, r);
        }
        return t;
      }
      function base64Text(e, t) {
        var r = (e.length - t) % 3;
        return 0 === r
          ? e.toString('base64', t)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString('base64', t, e.length - r));
      }
      function base64End(e) {
        var t = e && e.length ? this.write(e) : '';
        return this.lastNeed
          ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : t;
      }
      function simpleWrite(e) {
        return e.toString(this.encoding);
      }
      function simpleEnd(e) {
        return e && e.length ? this.write(e) : '';
      }
      (t.s = StringDecoder),
        (StringDecoder.prototype.write = function (e) {
          if (0 === e.length) return '';
          var t, r;
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return '';
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < e.length
            ? t
              ? t + this.text(e, r)
              : this.text(e, r)
            : t || '';
        }),
        (StringDecoder.prototype.end = function utf8End(e) {
          var t = e && e.length ? this.write(e) : '';
          return this.lastNeed ? t + '�' : t;
        }),
        (StringDecoder.prototype.text = function utf8Text(e, t) {
          var r = (function utf8CheckIncomplete(e, t, r) {
            var n = t.length - 1;
            if (n < r) return 0;
            var a = utf8CheckByte(t[n]);
            if (a >= 0) return a > 0 && (e.lastNeed = a - 1), a;
            if (--n < r || -2 === a) return 0;
            if (((a = utf8CheckByte(t[n])), a >= 0))
              return a > 0 && (e.lastNeed = a - 2), a;
            if (--n < r || -2 === a) return 0;
            if (((a = utf8CheckByte(t[n])), a >= 0))
              return a > 0 && (2 === a ? (a = 0) : (e.lastNeed = a - 3)), a;
            return 0;
          })(this, e, t);
          if (!this.lastNeed) return e.toString('utf8', t);
          this.lastTotal = r;
          var n = e.length - (r - this.lastNeed);
          return e.copy(this.lastChar, 0, n), e.toString('utf8', t, n);
        }),
        (StringDecoder.prototype.fillLast = function (e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length);
        });
    },
    927: function (e, t, r) {
      function config(e) {
        try {
          if (!r.g.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var t = r.g.localStorage[e];
        return null != t && 'true' === String(t).toLowerCase();
      }
      e.exports = function deprecate(e, t) {
        if (config('noDeprecation')) return e;
        var r = !1;
        return function deprecated() {
          if (!r) {
            if (config('throwDeprecation')) throw new Error(t);
            config('traceDeprecation') ? console.trace(t) : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        };
      };
    },
    255: function (e) {
      var t = {
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
        '<': '&lt;',
        '>': '&gt;',
      };
      e.exports = function escapeForXML(e) {
        return e && e.replace
          ? e.replace(/([&"<>'])/g, function (e, r) {
              return t[r];
            })
          : e;
      };
    },
    479: function (e, t, r) {
      var n = r(155),
        a = r(255),
        o = r(830).Stream;
      function resolve(e, t, r) {
        var n,
          o = (function create_indent(e, t) {
            return new Array(t || 0).join(e || '');
          })(t, (r = r || 0)),
          s = e;
        if ('object' == typeof e && (s = e[(n = Object.keys(e)[0])]) && s._elem)
          return (
            (s._elem.name = n),
            (s._elem.icount = r),
            (s._elem.indent = t),
            (s._elem.indents = o),
            (s._elem.interrupt = s),
            s._elem
          );
        var l,
          i = [],
          c = [];
        function get_attributes(e) {
          Object.keys(e).forEach(function (t) {
            i.push(
              (function attribute(e, t) {
                return e + '="' + a(t) + '"';
              })(t, e[t])
            );
          });
        }
        switch (typeof s) {
          case 'object':
            if (null === s) break;
            s._attr && get_attributes(s._attr),
              s._cdata &&
                c.push(
                  ('<![CDATA[' + s._cdata).replace(
                    /\]\]>/g,
                    ']]]]><![CDATA[>'
                  ) + ']]>'
                ),
              s.forEach &&
                ((l = !1),
                c.push(''),
                s.forEach(function (e) {
                  'object' == typeof e
                    ? '_attr' == Object.keys(e)[0]
                      ? get_attributes(e._attr)
                      : c.push(resolve(e, t, r + 1))
                    : (c.pop(), (l = !0), c.push(a(e)));
                }),
                l || c.push(''));
            break;
          default:
            c.push(a(s));
        }
        return {
          name: n,
          interrupt: !1,
          attributes: i,
          content: c,
          icount: r,
          indents: o,
          indent: t,
        };
      }
      function format(e, t, r) {
        if ('object' != typeof t) return e(!1, t);
        var n = t.interrupt ? 1 : t.content.length;
        function proceed() {
          for (; t.content.length; ) {
            var a = t.content.shift();
            if (void 0 !== a) {
              if (interrupt(a)) return;
              format(e, a);
            }
          }
          e(
            !1,
            (n > 1 ? t.indents : '') +
              (t.name ? '</' + t.name + '>' : '') +
              (t.indent && !r ? '\n' : '')
          ),
            r && r();
        }
        function interrupt(t) {
          return (
            !!t.interrupt &&
            ((t.interrupt.append = e),
            (t.interrupt.end = proceed),
            (t.interrupt = !1),
            e(!0),
            !0)
          );
        }
        if (
          (e(
            !1,
            t.indents +
              (t.name ? '<' + t.name : '') +
              (t.attributes.length ? ' ' + t.attributes.join(' ') : '') +
              (n ? (t.name ? '>' : '') : t.name ? '/>' : '') +
              (t.indent && n > 1 ? '\n' : '')
          ),
          !n)
        )
          return e(!1, t.indent ? '\n' : '');
        interrupt(t) || proceed();
      }
      (e.exports = function xml(e, t) {
        'object' != typeof t && (t = { indent: t });
        var r = t.stream ? new o() : null,
          a = '',
          s = !1,
          l = t.indent ? (!0 === t.indent ? '    ' : t.indent) : '',
          i = !0;
        function delay(e) {
          i ? n.nextTick(e) : e();
        }
        function append(e, t) {
          if (
            (void 0 !== t && (a += t),
            e && !s && ((r = r || new o()), (s = !0)),
            e && s)
          ) {
            var n = a;
            delay(function () {
              r.emit('data', n);
            }),
              (a = '');
          }
        }
        function add(e, t) {
          format(append, resolve(e, l, l ? 1 : 0), t);
        }
        function end() {
          if (r) {
            var e = a;
            delay(function () {
              r.emit('data', e),
                r.emit('end'),
                (r.readable = !1),
                r.emit('close');
            });
          }
        }
        return (
          delay(function () {
            i = !1;
          }),
          t.declaration &&
            (function addXmlDeclaration(e) {
              var t = { version: '1.0', encoding: e.encoding || 'UTF-8' };
              e.standalone && (t.standalone = e.standalone),
                add({ '?xml': { _attr: t } }),
                (a = a.replace('/>', '?>'));
            })(t.declaration),
          e && e.forEach
            ? e.forEach(function (t, r) {
                var n;
                r + 1 === e.length && (n = end), add(t, n);
              })
            : add(e, end),
          r ? ((r.readable = !0), r) : a
        );
      }),
        (e.exports.element = e.exports.Element =
          function element() {
            var e = {
              _elem: resolve(Array.prototype.slice.call(arguments)),
              push: function (e) {
                if (!this.append) throw new Error('not assigned to a parent!');
                var t = this,
                  r = this._elem.indent;
                format(
                  this.append,
                  resolve(e, r, this._elem.icount + (r ? 1 : 0)),
                  function () {
                    t.append(!0);
                  }
                );
              },
              close: function (e) {
                void 0 !== e && this.push(e), this.end && this.end();
              },
            };
            return e;
          });
    },
    780: function (t) {
      t.exports = e;
    },
    294: function (e) {
      e.exports = t;
    },
    361: function () {},
    616: function () {},
  },
  be = {};
function __webpack_require__(e) {
  var t = be[e];
  if (void 0 !== t) return t.exports;
  var r = (be[e] = { exports: {} });
  return _e[e](r, r.exports, __webpack_require__), r.exports;
}
(__webpack_require__.n = function (e) {
  var t =
    e && e.__esModule
      ? function () {
          return e.default;
        }
      : function () {
          return e;
        };
  return __webpack_require__.d(t, { a: t }), t;
}),
  (__webpack_require__.d = function (e, t) {
    for (var r in t)
      __webpack_require__.o(t, r) &&
        !__webpack_require__.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
  (__webpack_require__.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
  (__webpack_require__.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (__webpack_require__.r = function (e) {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  });
var we = {};
!(function () {
  __webpack_require__.d(we, {
    Z: function () {
      return nl;
    },
  });
  var e = {};
  __webpack_require__.r(e),
    __webpack_require__.d(e, {
      CLEAR: function () {
        return tt;
      },
      CLEAR_BY: function () {
        return rt;
      },
      NEW_AUTH_ERR: function () {
        return et;
      },
      NEW_SPEC_ERR: function () {
        return Qe;
      },
      NEW_SPEC_ERR_BATCH: function () {
        return Ze;
      },
      NEW_THROWN_ERR: function () {
        return Xe;
      },
      NEW_THROWN_ERR_BATCH: function () {
        return Ye;
      },
      clear: function () {
        return clear;
      },
      clearBy: function () {
        return clearBy;
      },
      newAuthErr: function () {
        return newAuthErr;
      },
      newSpecErr: function () {
        return newSpecErr;
      },
      newSpecErrBatch: function () {
        return newSpecErrBatch;
      },
      newThrownErr: function () {
        return newThrownErr;
      },
      newThrownErrBatch: function () {
        return newThrownErrBatch;
      },
    });
  var t = {};
  __webpack_require__.r(t),
    __webpack_require__.d(t, {
      AUTHORIZE: function () {
        return wt;
      },
      AUTHORIZE_OAUTH2: function () {
        return Ot;
      },
      CONFIGURE_AUTH: function () {
        return Nt;
      },
      LOGOUT: function () {
        return Ct;
      },
      PRE_AUTHORIZE_OAUTH2: function () {
        return xt;
      },
      RESTORE_AUTHORIZATION: function () {
        return At;
      },
      SHOW_AUTH_POPUP: function () {
        return bt;
      },
      VALIDATE: function () {
        return kt;
      },
      authPopup: function () {
        return authPopup;
      },
      authorize: function () {
        return authorize;
      },
      authorizeAccessCodeWithBasicAuthentication: function () {
        return authorizeAccessCodeWithBasicAuthentication;
      },
      authorizeAccessCodeWithFormParams: function () {
        return authorizeAccessCodeWithFormParams;
      },
      authorizeApplication: function () {
        return authorizeApplication;
      },
      authorizeOauth2: function () {
        return authorizeOauth2;
      },
      authorizeOauth2WithPersistOption: function () {
        return authorizeOauth2WithPersistOption;
      },
      authorizePassword: function () {
        return authorizePassword;
      },
      authorizeRequest: function () {
        return authorizeRequest;
      },
      authorizeWithPersistOption: function () {
        return authorizeWithPersistOption;
      },
      configureAuth: function () {
        return configureAuth;
      },
      logout: function () {
        return logout;
      },
      logoutWithPersistOption: function () {
        return logoutWithPersistOption;
      },
      persistAuthorizationIfNeeded: function () {
        return persistAuthorizationIfNeeded;
      },
      preAuthorizeImplicit: function () {
        return preAuthorizeImplicit;
      },
      restoreAuthorization: function () {
        return restoreAuthorization;
      },
      showDefinitions: function () {
        return showDefinitions;
      },
    });
  var c = {};
  __webpack_require__.r(c),
    __webpack_require__.d(c, {
      authorized: function () {
        return jt;
      },
      definitionsForRequirements: function () {
        return definitionsForRequirements;
      },
      definitionsToAuthorize: function () {
        return Bt;
      },
      getConfigs: function () {
        return Pt;
      },
      getDefinitionsByNames: function () {
        return getDefinitionsByNames;
      },
      isAuthorized: function () {
        return isAuthorized;
      },
      shownDefinitions: function () {
        return Tt;
      },
    });
  var u = {};
  __webpack_require__.r(u),
    __webpack_require__.d(u, {
      TOGGLE_CONFIGS: function () {
        return Jt;
      },
      UPDATE_CONFIGS: function () {
        return $t;
      },
      loaded: function () {
        return actions_loaded;
      },
      toggle: function () {
        return toggle;
      },
      update: function () {
        return update;
      },
    });
  var _e = {};
  __webpack_require__.r(_e),
    __webpack_require__.d(_e, {
      downloadConfig: function () {
        return downloadConfig;
      },
      getConfigByUrl: function () {
        return getConfigByUrl;
      },
    });
  var be = {};
  __webpack_require__.r(be),
    __webpack_require__.d(be, {
      get: function () {
        return get;
      },
    });
  var Ce = {};
  __webpack_require__.r(Ce),
    __webpack_require__.d(Ce, {
      transform: function () {
        return transform;
      },
    });
  var xe = {};
  __webpack_require__.r(xe),
    __webpack_require__.d(xe, {
      transform: function () {
        return parameter_oneof_transform;
      },
    });
  var Oe = {};
  __webpack_require__.r(Oe),
    __webpack_require__.d(Oe, {
      allErrors: function () {
        return er;
      },
      lastError: function () {
        return tr;
      },
    });
  var ke = {};
  __webpack_require__.r(ke),
    __webpack_require__.d(ke, {
      SHOW: function () {
        return mr;
      },
      UPDATE_FILTER: function () {
        return dr;
      },
      UPDATE_LAYOUT: function () {
        return ur;
      },
      UPDATE_MODE: function () {
        return pr;
      },
      changeMode: function () {
        return changeMode;
      },
      show: function () {
        return actions_show;
      },
      updateFilter: function () {
        return updateFilter;
      },
      updateLayout: function () {
        return updateLayout;
      },
    });
  var Ne = {};
  __webpack_require__.r(Ne),
    __webpack_require__.d(Ne, {
      current: function () {
        return current;
      },
      currentFilter: function () {
        return currentFilter;
      },
      isShown: function () {
        return isShown;
      },
      showSummary: function () {
        return hr;
      },
      whatMode: function () {
        return whatMode;
      },
    });
  var Ae = {};
  __webpack_require__.r(Ae),
    __webpack_require__.d(Ae, {
      taggedOperations: function () {
        return taggedOperations;
      },
    });
  var Ie = {};
  __webpack_require__.r(Ie),
    __webpack_require__.d(Ie, {
      requestSnippetGenerator_curl_bash: function () {
        return requestSnippetGenerator_curl_bash;
      },
      requestSnippetGenerator_curl_cmd: function () {
        return requestSnippetGenerator_curl_cmd;
      },
      requestSnippetGenerator_curl_powershell: function () {
        return requestSnippetGenerator_curl_powershell;
      },
    });
  var Re = {};
  __webpack_require__.r(Re),
    __webpack_require__.d(Re, {
      getActiveLanguage: function () {
        return Er;
      },
      getDefaultExpanded: function () {
        return Sr;
      },
      getGenerators: function () {
        return yr;
      },
      getSnippetGenerators: function () {
        return getSnippetGenerators;
      },
    });
  var Te = {};
  __webpack_require__.r(Te),
    __webpack_require__.d(Te, {
      allowTryItOutFor: function () {
        return allowTryItOutFor;
      },
      basePath: function () {
        return bn;
      },
      canExecuteScheme: function () {
        return canExecuteScheme;
      },
      consumes: function () {
        return yn;
      },
      consumesOptionsFor: function () {
        return consumesOptionsFor;
      },
      contentTypeValues: function () {
        return contentTypeValues;
      },
      currentProducesFor: function () {
        return currentProducesFor;
      },
      definitions: function () {
        return _n;
      },
      externalDocs: function () {
        return dn;
      },
      findDefinition: function () {
        return findDefinition;
      },
      getOAS3RequiredRequestBodyContentType: function () {
        return getOAS3RequiredRequestBodyContentType;
      },
      getParameter: function () {
        return getParameter;
      },
      hasHost: function () {
        return Rn;
      },
      host: function () {
        return wn;
      },
      info: function () {
        return un;
      },
      isMediaTypeSchemaPropertiesEqual: function () {
        return isMediaTypeSchemaPropertiesEqual;
      },
      isOAS3: function () {
        return cn;
      },
      lastError: function () {
        return en;
      },
      mutatedRequestFor: function () {
        return mutatedRequestFor;
      },
      mutatedRequests: function () {
        return In;
      },
      operationScheme: function () {
        return operationScheme;
      },
      operationWithMeta: function () {
        return operationWithMeta;
      },
      operations: function () {
        return gn;
      },
      operationsWithRootInherited: function () {
        return xn;
      },
      operationsWithTags: function () {
        return kn;
      },
      parameterInclusionSettingFor: function () {
        return parameterInclusionSettingFor;
      },
      parameterValues: function () {
        return parameterValues;
      },
      parameterWithMeta: function () {
        return parameterWithMeta;
      },
      parameterWithMetaByIdentity: function () {
        return parameterWithMetaByIdentity;
      },
      parametersIncludeIn: function () {
        return parametersIncludeIn;
      },
      parametersIncludeType: function () {
        return parametersIncludeType;
      },
      paths: function () {
        return fn;
      },
      produces: function () {
        return En;
      },
      producesOptionsFor: function () {
        return producesOptionsFor;
      },
      requestFor: function () {
        return requestFor;
      },
      requests: function () {
        return An;
      },
      responseFor: function () {
        return responseFor;
      },
      responses: function () {
        return Nn;
      },
      schemes: function () {
        return Cn;
      },
      security: function () {
        return Sn;
      },
      securityDefinitions: function () {
        return vn;
      },
      semver: function () {
        return mn;
      },
      spec: function () {
        return spec;
      },
      specJS: function () {
        return on;
      },
      specJson: function () {
        return an;
      },
      specJsonWithResolvedSubtrees: function () {
        return ln;
      },
      specResolved: function () {
        return sn;
      },
      specResolvedSubtree: function () {
        return specResolvedSubtree;
      },
      specSource: function () {
        return nn;
      },
      specStr: function () {
        return rn;
      },
      tagDetails: function () {
        return tagDetails;
      },
      taggedOperations: function () {
        return selectors_taggedOperations;
      },
      tags: function () {
        return On;
      },
      url: function () {
        return tn;
      },
      validOperationMethods: function () {
        return hn;
      },
      validateBeforeExecute: function () {
        return validateBeforeExecute;
      },
      validationErrors: function () {
        return validationErrors;
      },
      version: function () {
        return pn;
      },
    });
  var Be = {};
  __webpack_require__.r(Be),
    __webpack_require__.d(Be, {
      CLEAR_REQUEST: function () {
        return Hn;
      },
      CLEAR_RESPONSE: function () {
        return Wn;
      },
      CLEAR_VALIDATE_PARAMS: function () {
        return Gn;
      },
      LOG_REQUEST: function () {
        return Fn;
      },
      SET_MUTATED_REQUEST: function () {
        return zn;
      },
      SET_REQUEST: function () {
        return Kn;
      },
      SET_RESPONSE: function () {
        return Vn;
      },
      SET_SCHEME: function () {
        return Zn;
      },
      UPDATE_EMPTY_PARAM_INCLUSION: function () {
        return $n;
      },
      UPDATE_JSON: function () {
        return Dn;
      },
      UPDATE_OPERATION_META_VALUE: function () {
        return Xn;
      },
      UPDATE_PARAM: function () {
        return Un;
      },
      UPDATE_RESOLVED: function () {
        return Yn;
      },
      UPDATE_RESOLVED_SUBTREE: function () {
        return Qn;
      },
      UPDATE_SPEC: function () {
        return qn;
      },
      UPDATE_URL: function () {
        return Ln;
      },
      VALIDATE_PARAMS: function () {
        return Jn;
      },
      changeConsumesValue: function () {
        return changeConsumesValue;
      },
      changeParam: function () {
        return changeParam;
      },
      changeParamByIdentity: function () {
        return changeParamByIdentity;
      },
      changeProducesValue: function () {
        return changeProducesValue;
      },
      clearRequest: function () {
        return clearRequest;
      },
      clearResponse: function () {
        return clearResponse;
      },
      clearValidateParams: function () {
        return clearValidateParams;
      },
      execute: function () {
        return actions_execute;
      },
      executeRequest: function () {
        return executeRequest;
      },
      invalidateResolvedSubtreeCache: function () {
        return invalidateResolvedSubtreeCache;
      },
      logRequest: function () {
        return logRequest;
      },
      parseToJson: function () {
        return parseToJson;
      },
      requestResolvedSubtree: function () {
        return requestResolvedSubtree;
      },
      resolveSpec: function () {
        return resolveSpec;
      },
      setMutatedRequest: function () {
        return setMutatedRequest;
      },
      setRequest: function () {
        return setRequest;
      },
      setResponse: function () {
        return setResponse;
      },
      setScheme: function () {
        return setScheme;
      },
      updateEmptyParamInclusion: function () {
        return updateEmptyParamInclusion;
      },
      updateJsonSpec: function () {
        return updateJsonSpec;
      },
      updateResolved: function () {
        return updateResolved;
      },
      updateResolvedSubtree: function () {
        return updateResolvedSubtree;
      },
      updateSpec: function () {
        return updateSpec;
      },
      updateUrl: function () {
        return updateUrl;
      },
      validateParams: function () {
        return validateParams;
      },
    });
  var je = {};
  __webpack_require__.r(je),
    __webpack_require__.d(je, {
      executeRequest: function () {
        return wrap_actions_executeRequest;
      },
      updateJsonSpec: function () {
        return wrap_actions_updateJsonSpec;
      },
      updateSpec: function () {
        return wrap_actions_updateSpec;
      },
      validateParams: function () {
        return wrap_actions_validateParams;
      },
    });
  var Pe = {};
  __webpack_require__.r(Pe),
    __webpack_require__.d(Pe, {
      Button: function () {
        return Button;
      },
      Col: function () {
        return Col;
      },
      Collapse: function () {
        return Collapse;
      },
      Container: function () {
        return Container;
      },
      Input: function () {
        return Input;
      },
      Link: function () {
        return Link;
      },
      Row: function () {
        return Row;
      },
      Select: function () {
        return Select;
      },
      TextArea: function () {
        return TextArea;
      },
    });
  var Me = {};
  __webpack_require__.r(Me),
    __webpack_require__.d(Me, {
      JsonSchemaArrayItemFile: function () {
        return JsonSchemaArrayItemFile;
      },
      JsonSchemaArrayItemText: function () {
        return JsonSchemaArrayItemText;
      },
      JsonSchemaForm: function () {
        return JsonSchemaForm;
      },
      JsonSchema_array: function () {
        return JsonSchema_array;
      },
      JsonSchema_boolean: function () {
        return JsonSchema_boolean;
      },
      JsonSchema_object: function () {
        return JsonSchema_object;
      },
      JsonSchema_string: function () {
        return JsonSchema_string;
      },
    });
  var qe = {};
  __webpack_require__.r(qe),
    __webpack_require__.d(qe, {
      basePath: function () {
        return Fa;
      },
      consumes: function () {
        return Wa;
      },
      definitions: function () {
        return Ja;
      },
      hasHost: function () {
        return Va;
      },
      host: function () {
        return za;
      },
      produces: function () {
        return Ha;
      },
      schemes: function () {
        return Ga;
      },
      securityDefinitions: function () {
        return Ka;
      },
      validOperationMethods: function () {
        return wrap_selectors_validOperationMethods;
      },
    });
  var Le = {};
  __webpack_require__.r(Le),
    __webpack_require__.d(Le, {
      definitionsToAuthorize: function () {
        return Xa;
      },
    });
  var De = {};
  __webpack_require__.r(De),
    __webpack_require__.d(De, {
      callbacksOperations: function () {
        return Za;
      },
      isOAS3: function () {
        return selectors_isOAS3;
      },
      isOAS30: function () {
        return selectors_isOAS30;
      },
      isSwagger2: function () {
        return selectors_isSwagger2;
      },
      servers: function () {
        return Qa;
      },
    });
  var Ue = {};
  __webpack_require__.r(Ue),
    __webpack_require__.d(Ue, {
      CLEAR_REQUEST_BODY_VALIDATE_ERROR: function () {
        return vo;
      },
      CLEAR_REQUEST_BODY_VALUE: function () {
        return _o;
      },
      SET_REQUEST_BODY_VALIDATE_ERROR: function () {
        return So;
      },
      UPDATE_ACTIVE_EXAMPLES_MEMBER: function () {
        return ho;
      },
      UPDATE_REQUEST_BODY_INCLUSION: function () {
        return fo;
      },
      UPDATE_REQUEST_BODY_VALUE: function () {
        return po;
      },
      UPDATE_REQUEST_BODY_VALUE_RETAIN_FLAG: function () {
        return mo;
      },
      UPDATE_REQUEST_CONTENT_TYPE: function () {
        return go;
      },
      UPDATE_RESPONSE_CONTENT_TYPE: function () {
        return yo;
      },
      UPDATE_SELECTED_SERVER: function () {
        return uo;
      },
      UPDATE_SERVER_VARIABLE_VALUE: function () {
        return Eo;
      },
      clearRequestBodyValidateError: function () {
        return clearRequestBodyValidateError;
      },
      clearRequestBodyValue: function () {
        return clearRequestBodyValue;
      },
      initRequestBodyValidateError: function () {
        return initRequestBodyValidateError;
      },
      setActiveExamplesMember: function () {
        return setActiveExamplesMember;
      },
      setRequestBodyInclusion: function () {
        return setRequestBodyInclusion;
      },
      setRequestBodyValidateError: function () {
        return setRequestBodyValidateError;
      },
      setRequestBodyValue: function () {
        return setRequestBodyValue;
      },
      setRequestContentType: function () {
        return setRequestContentType;
      },
      setResponseContentType: function () {
        return setResponseContentType;
      },
      setRetainRequestBodyValueFlag: function () {
        return setRetainRequestBodyValueFlag;
      },
      setSelectedServer: function () {
        return setSelectedServer;
      },
      setServerVariableValue: function () {
        return setServerVariableValue;
      },
    });
  var $e = {};
  __webpack_require__.r($e),
    __webpack_require__.d($e, {
      activeExamplesMember: function () {
        return No;
      },
      hasUserEditedBody: function () {
        return xo;
      },
      requestBodyErrors: function () {
        return ko;
      },
      requestBodyInclusionSetting: function () {
        return Oo;
      },
      requestBodyValue: function () {
        return wo;
      },
      requestContentType: function () {
        return Ao;
      },
      responseContentType: function () {
        return Io;
      },
      selectDefaultRequestBodyValue: function () {
        return selectDefaultRequestBodyValue;
      },
      selectedServer: function () {
        return bo;
      },
      serverEffectiveValue: function () {
        return Bo;
      },
      serverVariableValue: function () {
        return Ro;
      },
      serverVariables: function () {
        return To;
      },
      shouldRetainRequestBodyValue: function () {
        return Co;
      },
      validOperationMethods: function () {
        return Po;
      },
      validateBeforeExecute: function () {
        return jo;
      },
      validateShallowRequired: function () {
        return validateShallowRequired;
      },
    });
  var Je = __webpack_require__(698),
    Ve = __webpack_require__.n(Je),
    Ke = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({
      Component: () => r.Component,
      PureComponent: () => r.PureComponent,
      createContext: () => r.createContext,
      createElement: () => r.createElement,
      default: () => r.default,
      forwardRef: () => r.forwardRef,
      useCallback: () => r.useCallback,
      useContext: () => r.useContext,
      useEffect: () => r.useEffect,
      useRef: () => r.useRef,
      useState: () => r.useState,
    }),
    ze = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({
      applyMiddleware: () => n.applyMiddleware,
      bindActionCreators: () => n.bindActionCreators,
      compose: () => n.compose,
      createStore: () => n.createStore,
    }),
    Fe = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({
      List: () => a.List,
      Map: () => a.Map,
      OrderedMap: () => a.OrderedMap,
      Seq: () => a.Seq,
      Set: () => a.Set,
      default: () => a.default,
      fromJS: () => a.fromJS,
    }),
    We = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ combineReducers: () => o.combineReducers }),
    He = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ serializeError: () => s.serializeError }),
    Ge = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => l.default });
  const Xe = 'err_new_thrown_err',
    Ye = 'err_new_thrown_err_batch',
    Qe = 'err_new_spec_err',
    Ze = 'err_new_spec_err_batch',
    et = 'err_new_auth_err',
    tt = 'err_clear',
    rt = 'err_clear_by';
  function newThrownErr(e) {
    return { type: Xe, payload: (0, He.serializeError)(e) };
  }
  function newThrownErrBatch(e) {
    return { type: Ye, payload: e };
  }
  function newSpecErr(e) {
    return { type: Qe, payload: e };
  }
  function newSpecErrBatch(e) {
    return { type: Ze, payload: e };
  }
  function newAuthErr(e) {
    return { type: et, payload: e };
  }
  function clear() {
    return {
      type: tt,
      payload:
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    };
  }
  function clearBy() {
    return {
      type: rt,
      payload:
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : () => !0,
    };
  }
  var nt = (function makeWindow() {
      var e = {
        location: {},
        history: {},
        open: () => {},
        close: () => {},
        File: function () {},
        FormData: function () {},
      };
      if ('undefined' == typeof window) return e;
      try {
        e = window;
        for (var t of ['File', 'Blob', 'FormData'])
          t in window && (e[t] = window[t]);
      } catch (e) {
        console.error(e);
      }
      return e;
    })(),
    at = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ sanitizeUrl: () => i.sanitizeUrl }),
    ot =
      ((e => {
        var t = {};
        __webpack_require__.d(t, e);
      })({}),
      (e => {
        var t = {};
        __webpack_require__.d(t, e);
      })({}),
      (e => {
        var t = {};
        return __webpack_require__.d(t, e), t;
      })({ default: () => d.default })),
    st = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => p.default }),
    lt = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => m.default }),
    it = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => f.default }),
    ct = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => h.default }),
    ut = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => g.default }),
    dt = __webpack_require__(798),
    pt = __webpack_require__.n(dt),
    mt = __webpack_require__(72),
    ht = __webpack_require__.n(mt);
  const gt = Fe.default.Set.of(
    'type',
    'format',
    'items',
    'default',
    'maximum',
    'exclusiveMaximum',
    'minimum',
    'exclusiveMinimum',
    'maxLength',
    'minLength',
    'pattern',
    'maxItems',
    'minItems',
    'uniqueItems',
    'enum',
    'multipleOf'
  );
  function getParameterSchema(e) {
    let { isOAS3: t } =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!Fe.default.Map.isMap(e))
      return { schema: Fe.default.Map(), parameterContentMediaType: null };
    if (!t)
      return 'body' === e.get('in')
        ? {
            schema: e.get('schema', Fe.default.Map()),
            parameterContentMediaType: null,
          }
        : {
            schema: e.filter((e, t) => gt.includes(t)),
            parameterContentMediaType: null,
          };
    if (e.get('content')) {
      const t = e.get('content', Fe.default.Map({})).keySeq().first();
      return {
        schema: e.getIn(['content', t, 'schema'], Fe.default.Map()),
        parameterContentMediaType: t,
      };
    }
    return {
      schema: e.get('schema')
        ? e.get('schema', Fe.default.Map())
        : Fe.default.Map(),
      parameterContentMediaType: null,
    };
  }
  var yt = __webpack_require__(764).Buffer;
  const Et = 'default',
    isImmutable = e => Fe.default.Iterable.isIterable(e);
  function objectify(e) {
    return isObject(e) ? (isImmutable(e) ? e.toJS() : e) : {};
  }
  function fromJSOrdered(e) {
    if (isImmutable(e)) return e;
    if (e instanceof nt.File) return e;
    if (!isObject(e)) return e;
    if (Array.isArray(e)) return Fe.default.Seq(e).map(fromJSOrdered).toList();
    if ((0, ct.default)(e.entries)) {
      const t = (function createObjWithHashedKeys(e) {
        if (!(0, ct.default)(e.entries)) return e;
        const t = {},
          r = '_**[]',
          n = {};
        for (let a of e.entries())
          if (t[a[0]] || (n[a[0]] && n[a[0]].containsMultiple)) {
            if (!n[a[0]]) {
              (n[a[0]] = { containsMultiple: !0, length: 1 }),
                (t[`${a[0]}${r}${n[a[0]].length}`] = t[a[0]]),
                delete t[a[0]];
            }
            (n[a[0]].length += 1), (t[`${a[0]}${r}${n[a[0]].length}`] = a[1]);
          } else t[a[0]] = a[1];
        return t;
      })(e);
      return Fe.default.OrderedMap(t).map(fromJSOrdered);
    }
    return Fe.default.OrderedMap(e).map(fromJSOrdered);
  }
  function normalizeArray(e) {
    return Array.isArray(e) ? e : [e];
  }
  function isFn(e) {
    return 'function' == typeof e;
  }
  function isObject(e) {
    return !!e && 'object' == typeof e;
  }
  function isFunc(e) {
    return 'function' == typeof e;
  }
  function isArray(e) {
    return Array.isArray(e);
  }
  const St = ot.default;
  function objMap(e, t) {
    return Object.keys(e).reduce((r, n) => ((r[n] = t(e[n], n)), r), {});
  }
  function objReduce(e, t) {
    return Object.keys(e).reduce((r, n) => {
      let a = t(e[n], n);
      return a && 'object' == typeof a && Object.assign(r, a), r;
    }, {});
  }
  function systemThunkMiddleware(e) {
    return t => {
      let { dispatch: r, getState: n } = t;
      return t => r => 'function' == typeof r ? r(e()) : t(r);
    };
  }
  function validateValueBySchema(e, t, r, n, a) {
    if (!t) return [];
    let o = [],
      s = t.get('nullable'),
      l = t.get('required'),
      i = t.get('maximum'),
      c = t.get('minimum'),
      u = t.get('type'),
      d = t.get('format'),
      p = t.get('maxLength'),
      m = t.get('minLength'),
      f = t.get('uniqueItems'),
      h = t.get('maxItems'),
      g = t.get('minItems'),
      y = t.get('pattern');
    const S = r || !0 === l,
      v = null != e;
    if ((s && null === e) || !u || !(S || (v && 'array' === u) || !(!S && !v)))
      return [];
    let _ = 'string' === u && e,
      b = 'array' === u && Array.isArray(e) && e.length,
      w = 'array' === u && Fe.default.List.isList(e) && e.count();
    const C = [
      _,
      b,
      w,
      'array' === u && 'string' == typeof e && e,
      'file' === u && e instanceof nt.File,
      'boolean' === u && (e || !1 === e),
      'number' === u && (e || 0 === e),
      'integer' === u && (e || 0 === e),
      'object' === u && 'object' == typeof e && null !== e,
      'object' === u && 'string' == typeof e && e,
    ].some(e => !!e);
    if (S && !C && !n) return o.push('Required field is not provided'), o;
    if ('object' === u && (null === a || 'application/json' === a)) {
      let r = e;
      if ('string' == typeof e)
        try {
          r = JSON.parse(e);
        } catch (e) {
          return o.push('Parameter string value must be valid JSON'), o;
        }
      t &&
        t.has('required') &&
        isFunc(l.isList) &&
        l.isList() &&
        l.forEach(e => {
          void 0 === r[e] &&
            o.push({ propKey: e, error: 'Required property not found' });
        }),
        t &&
          t.has('properties') &&
          t.get('properties').forEach((e, t) => {
            const s = validateValueBySchema(r[t], e, !1, n, a);
            o.push(...s.map(e => ({ propKey: t, error: e })));
          });
    }
    if (y) {
      let t = ((e, t) => {
        if (!new RegExp(t).test(e)) return 'Value must follow pattern ' + t;
      })(e, y);
      t && o.push(t);
    }
    if (g && 'array' === u) {
      let t = ((e, t) => {
        if ((!e && t >= 1) || (e && e.length < t))
          return `Array must contain at least ${t} item${1 === t ? '' : 's'}`;
      })(e, g);
      t && o.push(t);
    }
    if (h && 'array' === u) {
      let t = ((e, t) => {
        if (e && e.length > t)
          return `Array must not contain more then ${t} item${
            1 === t ? '' : 's'
          }`;
      })(e, h);
      t && o.push({ needRemove: !0, error: t });
    }
    if (f && 'array' === u) {
      let t = ((e, t) => {
        if (e && ('true' === t || !0 === t)) {
          const t = (0, Fe.fromJS)(e),
            r = t.toSet();
          if (e.length > r.size) {
            let e = (0, Fe.Set)();
            if (
              (t.forEach((r, n) => {
                t.filter(e => (isFunc(e.equals) ? e.equals(r) : e === r)).size >
                  1 && (e = e.add(n));
              }),
              0 !== e.size)
            )
              return e
                .map(e => ({ index: e, error: 'No duplicates allowed.' }))
                .toArray();
          }
        }
      })(e, f);
      t && o.push(...t);
    }
    if (p || 0 === p) {
      let t = ((e, t) => {
        if (e.length > t)
          return `Value must be no longer than ${t} character${
            1 !== t ? 's' : ''
          }`;
      })(e, p);
      t && o.push(t);
    }
    if (m) {
      let t = ((e, t) => {
        if (e.length < t)
          return `Value must be at least ${t} character${1 !== t ? 's' : ''}`;
      })(e, m);
      t && o.push(t);
    }
    if (i || 0 === i) {
      let t = ((e, t) => {
        if (e > t) return `Value must be less than ${t}`;
      })(e, i);
      t && o.push(t);
    }
    if (c || 0 === c) {
      let t = ((e, t) => {
        if (e < t) return `Value must be greater than ${t}`;
      })(e, c);
      t && o.push(t);
    }
    if ('string' === u) {
      let t;
      if (
        ((t =
          'date-time' === d
            ? (e => {
                if (isNaN(Date.parse(e))) return 'Value must be a DateTime';
              })(e)
            : 'uuid' === d
            ? (e => {
                if (
                  ((e = e.toString().toLowerCase()),
                  !/^[{(]?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}[)}]?$/.test(
                    e
                  ))
                )
                  return 'Value must be a Guid';
              })(e)
            : (e => {
                if (e && 'string' != typeof e) return 'Value must be a string';
              })(e)),
        !t)
      )
        return o;
      o.push(t);
    } else if ('boolean' === u) {
      let t = (e => {
        if ('true' !== e && 'false' !== e && !0 !== e && !1 !== e)
          return 'Value must be a boolean';
      })(e);
      if (!t) return o;
      o.push(t);
    } else if ('number' === u) {
      let t = (e => {
        if (!/^-?\d+(\.?\d+)?$/.test(e)) return 'Value must be a number';
      })(e);
      if (!t) return o;
      o.push(t);
    } else if ('integer' === u) {
      let t = (e => {
        if (!/^-?\d+$/.test(e)) return 'Value must be an integer';
      })(e);
      if (!t) return o;
      o.push(t);
    } else if ('array' === u) {
      if (!b && !w) return o;
      e &&
        e.forEach((e, r) => {
          const s = validateValueBySchema(e, t.get('items'), !1, n, a);
          o.push(...s.map(e => ({ index: r, error: e })));
        });
    } else if ('file' === u) {
      let t = (e => {
        if (e && !(e instanceof nt.File)) return 'Value must be a file';
      })(e);
      if (!t) return o;
      o.push(t);
    }
    return o;
  }
  const btoa = e => {
      let t;
      return (
        (t = e instanceof yt ? e : yt.from(e.toString(), 'utf-8')),
        t.toString('base64')
      );
    },
    vt = {
      operationsSorter: {
        alpha: (e, t) => e.get('path').localeCompare(t.get('path')),
        method: (e, t) => e.get('method').localeCompare(t.get('method')),
      },
      tagsSorter: { alpha: (e, t) => e.localeCompare(t) },
    },
    buildFormData = e => {
      let t = [];
      for (let r in e) {
        let n = e[r];
        void 0 !== n &&
          '' !== n &&
          t.push([r, '=', encodeURIComponent(n).replace(/%20/g, '+')].join(''));
      }
      return t.join('&');
    },
    shallowEqualKeys = (e, t, r) =>
      !!(0, st.default)(r, r => (0, it.default)(e[r], t[r]));
  function sanitizeUrl(e) {
    return 'string' != typeof e || '' === e ? '' : (0, at.sanitizeUrl)(e);
  }
  function requiresValidationURL(e) {
    return !(
      !e ||
      e.indexOf('localhost') >= 0 ||
      e.indexOf('127.0.0.1') >= 0 ||
      'none' === e
    );
  }
  const createDeepLinkPath = e =>
      'string' == typeof e || e instanceof String
        ? e.trim().replace(/\s/g, '%20')
        : '',
    escapeDeepLinkPath = e =>
      (0, ut.default)(createDeepLinkPath(e).replace(/%20/g, '_')),
    getExtensions = e => e.filter((e, t) => t.startsWith('x-')),
    getCommonExtensions = e =>
      e.filter((e, t) =>
        /^pattern|maxLength|minLength|maximum|minimum/.test(t)
      );
  function deeplyStripKey(e, t) {
    let r =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
    if ('object' != typeof e || Array.isArray(e) || null === e || !t) return e;
    const n = Object.assign({}, e);
    return (
      Object.keys(n).forEach(e => {
        e === t && r(n[e], e)
          ? delete n[e]
          : (n[e] = deeplyStripKey(n[e], t, r));
      }),
      n
    );
  }
  function stringify(e) {
    if ('string' == typeof e) return e;
    if ((e && e.toJS && (e = e.toJS()), 'object' == typeof e && null !== e))
      try {
        return JSON.stringify(e, null, 2);
      } catch (t) {
        return String(e);
      }
    return null == e ? '' : e.toString();
  }
  function paramToIdentifier(e) {
    let { returnAll: t = !1, allowHashes: r = !0 } =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!Fe.default.Map.isMap(e))
      throw new Error(
        'paramToIdentifier: received a non-Im.Map parameter as input'
      );
    const n = e.get('name'),
      a = e.get('in');
    let o = [];
    return (
      e &&
        e.hashCode &&
        a &&
        n &&
        r &&
        o.push(`${a}.${n}.hash-${e.hashCode()}`),
      a && n && o.push(`${a}.${n}`),
      o.push(n),
      t ? o : o[0] || ''
    );
  }
  function paramToValue(e, t) {
    return paramToIdentifier(e, { returnAll: !0 })
      .map(e => t[e])
      .filter(e => void 0 !== e)[0];
  }
  function b64toB64UrlEncoded(e) {
    return e.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }
  const isEmptyValue = e => !e || !(!isImmutable(e) || !e.isEmpty()),
    idFn = e => e;
  class Store {
    constructor() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      Ve()(
        this,
        {
          state: {},
          plugins: [],
          pluginsOptions: {},
          system: {
            configs: {},
            fn: {},
            components: {},
            rootInjects: {},
            statePlugins: {},
          },
          boundSystem: {},
          toolbox: {},
        },
        e
      ),
        (this.getSystem = this._getSystem.bind(this)),
        (this.store = (function configureStore(e, t, r) {
          return (function createStoreWithMiddleware(e, t, r) {
            let n = [systemThunkMiddleware(r)];
            const a = nt.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ze.compose;
            return (0, ze.createStore)(e, t, a((0, ze.applyMiddleware)(...n)));
          })(e, t, r);
        })(idFn, (0, Fe.fromJS)(this.state), this.getSystem)),
        this.buildSystem(!1),
        this.register(this.plugins);
    }
    getStore() {
      return this.store;
    }
    register(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      var r = combinePlugins(e, this.getSystem(), this.pluginsOptions);
      systemExtend(this.system, r), t && this.buildSystem();
      callAfterLoad.call(this.system, e, this.getSystem()) &&
        this.buildSystem();
    }
    buildSystem() {
      let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t = this.getStore().dispatch,
        r = this.getStore().getState;
      (this.boundSystem = Object.assign(
        {},
        this.getRootInjects(),
        this.getWrappedAndBoundActions(t),
        this.getWrappedAndBoundSelectors(r, this.getSystem),
        this.getStateThunks(r),
        this.getFn(),
        this.getConfigs()
      )),
        e && this.rebuildReducer();
    }
    _getSystem() {
      return this.boundSystem;
    }
    getRootInjects() {
      return Object.assign(
        {
          getSystem: this.getSystem,
          getStore: this.getStore.bind(this),
          getComponents: this.getComponents.bind(this),
          getState: this.getStore().getState,
          getConfigs: this._getConfigs.bind(this),
          Im: Fe.default,
          React: Ke.default,
        },
        this.system.rootInjects || {}
      );
    }
    _getConfigs() {
      return this.system.configs;
    }
    getConfigs() {
      return { configs: this.system.configs };
    }
    setConfigs(e) {
      this.system.configs = e;
    }
    rebuildReducer() {
      this.store.replaceReducer(
        (function buildReducer(e) {
          return (function allReducers(e) {
            let t = Object.keys(e).reduce(
              (t, r) => (
                (t[r] = (function makeReducer(e) {
                  return function () {
                    let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : new Fe.Map(),
                      r = arguments.length > 1 ? arguments[1] : void 0;
                    if (!e) return t;
                    let n = e[r.type];
                    if (n) {
                      const e = wrapWithTryCatch(n)(t, r);
                      return null === e ? t : e;
                    }
                    return t;
                  };
                })(e[r])),
                t
              ),
              {}
            );
            if (!Object.keys(t).length) return idFn;
            return (0, We.combineReducers)(t);
          })(objMap(e, e => e.reducers));
        })(this.system.statePlugins)
      );
    }
    getType(e) {
      let t = e[0].toUpperCase() + e.slice(1);
      return objReduce(this.system.statePlugins, (r, n) => {
        let a = r[e];
        if (a) return { [n + t]: a };
      });
    }
    getSelectors() {
      return this.getType('selectors');
    }
    getActions() {
      return objMap(this.getType('actions'), e =>
        objReduce(e, (e, t) => {
          if (isFn(e)) return { [t]: e };
        })
      );
    }
    getWrappedAndBoundActions(e) {
      var t = this;
      return objMap(this.getBoundActions(e), (e, r) => {
        let n = this.system.statePlugins[r.slice(0, -7)].wrapActions;
        return n
          ? objMap(e, (e, r) => {
              let a = n[r];
              return a
                ? (Array.isArray(a) || (a = [a]),
                  a.reduce((e, r) => {
                    let newAction = function () {
                      return r(e, t.getSystem())(...arguments);
                    };
                    if (!isFn(newAction))
                      throw new TypeError(
                        'wrapActions needs to return a function that returns a new function (ie the wrapped action)'
                      );
                    return wrapWithTryCatch(newAction);
                  }, e || Function.prototype))
                : e;
            })
          : e;
      });
    }
    getWrappedAndBoundSelectors(e, t) {
      var r = this;
      return objMap(this.getBoundSelectors(e, t), (t, n) => {
        let a = [n.slice(0, -9)],
          o = this.system.statePlugins[a].wrapSelectors;
        return o
          ? objMap(t, (t, n) => {
              let s = o[n];
              return s
                ? (Array.isArray(s) || (s = [s]),
                  s.reduce((t, n) => {
                    let wrappedSelector = function () {
                      for (
                        var o = arguments.length, s = new Array(o), l = 0;
                        l < o;
                        l++
                      )
                        s[l] = arguments[l];
                      return n(t, r.getSystem())(e().getIn(a), ...s);
                    };
                    if (!isFn(wrappedSelector))
                      throw new TypeError(
                        'wrapSelector needs to return a function that returns a new function (ie the wrapped action)'
                      );
                    return wrappedSelector;
                  }, t || Function.prototype))
                : t;
            })
          : t;
      });
    }
    getStates(e) {
      return Object.keys(this.system.statePlugins).reduce(
        (t, r) => ((t[r] = e.get(r)), t),
        {}
      );
    }
    getStateThunks(e) {
      return Object.keys(this.system.statePlugins).reduce(
        (t, r) => ((t[r] = () => e().get(r)), t),
        {}
      );
    }
    getFn() {
      return { fn: this.system.fn };
    }
    getComponents(e) {
      const t = this.system.components[e];
      return Array.isArray(t)
        ? t.reduce((e, t) => t(e, this.getSystem()))
        : void 0 !== e
        ? this.system.components[e]
        : this.system.components;
    }
    getBoundSelectors(e, t) {
      return objMap(this.getSelectors(), (r, n) => {
        let a = [n.slice(0, -9)];
        return objMap(
          r,
          r =>
            function () {
              for (
                var n = arguments.length, o = new Array(n), s = 0;
                s < n;
                s++
              )
                o[s] = arguments[s];
              let l = wrapWithTryCatch(r).apply(null, [e().getIn(a), ...o]);
              return (
                'function' == typeof l && (l = wrapWithTryCatch(l)(t())), l
              );
            }
        );
      });
    }
    getBoundActions(e) {
      e = e || this.getStore().dispatch;
      const t = this.getActions(),
        process = e =>
          'function' != typeof e
            ? objMap(e, e => process(e))
            : function () {
                var t = null;
                try {
                  t = e(...arguments);
                } catch (e) {
                  t = {
                    type: Xe,
                    error: !0,
                    payload: (0, He.serializeError)(e),
                  };
                } finally {
                  return t;
                }
              };
      return objMap(t, t => (0, ze.bindActionCreators)(process(t), e));
    }
    getMapStateToProps() {
      return () => Object.assign({}, this.getSystem());
    }
    getMapDispatchToProps(e) {
      return t => Ve()({}, this.getWrappedAndBoundActions(t), this.getFn(), e);
    }
  }
  function combinePlugins(e, t, r) {
    if (isObject(e) && !isArray(e)) return (0, Ge.default)({}, e);
    if (isFunc(e)) return combinePlugins(e(t), t, r);
    if (isArray(e)) {
      const n = 'chain' === r.pluginLoadType ? t.getComponents() : {};
      return e.map(e => combinePlugins(e, t, r)).reduce(systemExtend, n);
    }
    return {};
  }
  function callAfterLoad(e, t) {
    let { hasLoaded: r } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = r;
    return (
      isObject(e) &&
        !isArray(e) &&
        'function' == typeof e.afterLoad &&
        ((n = !0), wrapWithTryCatch(e.afterLoad).call(this, t)),
      isFunc(e)
        ? callAfterLoad.call(this, e(t), t, { hasLoaded: n })
        : isArray(e)
        ? e.map(e => callAfterLoad.call(this, e, t, { hasLoaded: n }))
        : n
    );
  }
  function systemExtend() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!isObject(e)) return {};
    if (!isObject(t)) return e;
    t.wrapComponents &&
      (objMap(t.wrapComponents, (r, n) => {
        const a = e.components && e.components[n];
        a && Array.isArray(a)
          ? ((e.components[n] = a.concat([r])), delete t.wrapComponents[n])
          : a && ((e.components[n] = [a, r]), delete t.wrapComponents[n]);
      }),
      Object.keys(t.wrapComponents).length || delete t.wrapComponents);
    const { statePlugins: r } = e;
    if (isObject(r))
      for (let e in r) {
        const n = r[e];
        if (!isObject(n)) continue;
        const { wrapActions: a, wrapSelectors: o } = n;
        if (isObject(a))
          for (let r in a) {
            let n = a[r];
            Array.isArray(n) || ((n = [n]), (a[r] = n)),
              t &&
                t.statePlugins &&
                t.statePlugins[e] &&
                t.statePlugins[e].wrapActions &&
                t.statePlugins[e].wrapActions[r] &&
                (t.statePlugins[e].wrapActions[r] = a[r].concat(
                  t.statePlugins[e].wrapActions[r]
                ));
          }
        if (isObject(o))
          for (let r in o) {
            let n = o[r];
            Array.isArray(n) || ((n = [n]), (o[r] = n)),
              t &&
                t.statePlugins &&
                t.statePlugins[e] &&
                t.statePlugins[e].wrapSelectors &&
                t.statePlugins[e].wrapSelectors[r] &&
                (t.statePlugins[e].wrapSelectors[r] = o[r].concat(
                  t.statePlugins[e].wrapSelectors[r]
                ));
          }
      }
    return Ve()(e, t);
  }
  function wrapWithTryCatch(e) {
    let { logErrors: t = !0 } =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return 'function' != typeof e
      ? e
      : function () {
          try {
            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
              n[a] = arguments[a];
            return e.call(this, ...n);
          } catch (e) {
            return t && console.error(e), null;
          }
        };
  }
  var _t = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ default: () => y.default });
  const bt = 'show_popup',
    wt = 'authorize',
    Ct = 'logout',
    xt = 'pre_authorize_oauth2',
    Ot = 'authorize_oauth2',
    kt = 'validate',
    Nt = 'configure_auth',
    At = 'restore_authorization';
  function showDefinitions(e) {
    return { type: bt, payload: e };
  }
  function authorize(e) {
    return { type: wt, payload: e };
  }
  const authorizeWithPersistOption = e => t => {
    let { authActions: r } = t;
    r.authorize(e), r.persistAuthorizationIfNeeded();
  };
  function logout(e) {
    return { type: Ct, payload: e };
  }
  const logoutWithPersistOption = e => t => {
      let { authActions: r } = t;
      r.logout(e), r.persistAuthorizationIfNeeded();
    },
    preAuthorizeImplicit = e => t => {
      let { authActions: r, errActions: n } = t,
        { auth: a, token: o, isValid: s } = e,
        { schema: l, name: i } = a,
        c = l.get('flow');
      delete nt.swaggerUIRedirectOauth2,
        'accessCode' === c ||
          s ||
          n.newAuthErr({
            authId: i,
            source: 'auth',
            level: 'warning',
            message:
              "Authorization may be unsafe, passed state was changed in server Passed state wasn't returned from auth server",
          }),
        o.error
          ? n.newAuthErr({
              authId: i,
              source: 'auth',
              level: 'error',
              message: JSON.stringify(o),
            })
          : r.authorizeOauth2WithPersistOption({ auth: a, token: o });
    };
  function authorizeOauth2(e) {
    return { type: Ot, payload: e };
  }
  const authorizeOauth2WithPersistOption = e => t => {
      let { authActions: r } = t;
      r.authorizeOauth2(e), r.persistAuthorizationIfNeeded();
    },
    authorizePassword = e => t => {
      let { authActions: r } = t,
        {
          schema: n,
          name: a,
          username: o,
          password: s,
          passwordType: l,
          clientId: i,
          clientSecret: c,
        } = e,
        u = {
          grant_type: 'password',
          scope: e.scopes.join(' '),
          username: o,
          password: s,
        },
        d = {};
      switch (l) {
        case 'request-body':
          !(function setClientIdAndSecret(e, t, r) {
            t && Object.assign(e, { client_id: t });
            r && Object.assign(e, { client_secret: r });
          })(u, i, c);
          break;
        case 'basic':
          d.Authorization = 'Basic ' + btoa(i + ':' + c);
          break;
        default:
          console.warn(
            `Warning: invalid passwordType ${l} was passed, not including client id and secret`
          );
      }
      return r.authorizeRequest({
        body: buildFormData(u),
        url: n.get('tokenUrl'),
        name: a,
        headers: d,
        query: {},
        auth: e,
      });
    };
  const authorizeApplication = e => t => {
      let { authActions: r } = t,
        { schema: n, scopes: a, name: o, clientId: s, clientSecret: l } = e,
        i = { Authorization: 'Basic ' + btoa(s + ':' + l) },
        c = { grant_type: 'client_credentials', scope: a.join(' ') };
      return r.authorizeRequest({
        body: buildFormData(c),
        name: o,
        url: n.get('tokenUrl'),
        auth: e,
        headers: i,
      });
    },
    authorizeAccessCodeWithFormParams = e => {
      let { auth: t, redirectUrl: r } = e;
      return e => {
        let { authActions: n } = e,
          {
            schema: a,
            name: o,
            clientId: s,
            clientSecret: l,
            codeVerifier: i,
          } = t,
          c = {
            grant_type: 'authorization_code',
            code: t.code,
            client_id: s,
            client_secret: l,
            redirect_uri: r,
            code_verifier: i,
          };
        return n.authorizeRequest({
          body: buildFormData(c),
          name: o,
          url: a.get('tokenUrl'),
          auth: t,
        });
      };
    },
    authorizeAccessCodeWithBasicAuthentication = e => {
      let { auth: t, redirectUrl: r } = e;
      return e => {
        let { authActions: n } = e,
          {
            schema: a,
            name: o,
            clientId: s,
            clientSecret: l,
            codeVerifier: i,
          } = t,
          c = { Authorization: 'Basic ' + btoa(s + ':' + l) },
          u = {
            grant_type: 'authorization_code',
            code: t.code,
            client_id: s,
            redirect_uri: r,
            code_verifier: i,
          };
        return n.authorizeRequest({
          body: buildFormData(u),
          name: o,
          url: a.get('tokenUrl'),
          auth: t,
          headers: c,
        });
      };
    },
    authorizeRequest = e => t => {
      let r,
        {
          fn: n,
          getConfigs: a,
          authActions: o,
          errActions: s,
          oas3Selectors: l,
          specSelectors: i,
          authSelectors: c,
        } = t,
        {
          body: u,
          query: d = {},
          headers: p = {},
          name: m,
          url: f,
          auth: h,
        } = e,
        { additionalQueryStringParams: g } = c.getConfigs() || {};
      if (i.isOAS3()) {
        let e = l.serverEffectiveValue(l.selectedServer());
        r = (0, _t.default)(f, e, !0);
      } else r = (0, _t.default)(f, i.url(), !0);
      'object' == typeof g && (r.query = Object.assign({}, r.query, g));
      const y = r.toString();
      let S = Object.assign(
        {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest',
        },
        p
      );
      n.fetch({
        url: y,
        method: 'post',
        headers: S,
        query: d,
        body: u,
        requestInterceptor: a().requestInterceptor,
        responseInterceptor: a().responseInterceptor,
      })
        .then(function (e) {
          let t = JSON.parse(e.data),
            r = t && (t.error || ''),
            n = t && (t.parseError || '');
          e.ok
            ? r || n
              ? s.newAuthErr({
                  authId: m,
                  level: 'error',
                  source: 'auth',
                  message: JSON.stringify(t),
                })
              : o.authorizeOauth2WithPersistOption({ auth: h, token: t })
            : s.newAuthErr({
                authId: m,
                level: 'error',
                source: 'auth',
                message: e.statusText,
              });
        })
        .catch(e => {
          let t = new Error(e).message;
          if (e.response && e.response.data) {
            const r = e.response.data;
            try {
              const e = 'string' == typeof r ? JSON.parse(r) : r;
              e.error && (t += `, error: ${e.error}`),
                e.error_description &&
                  (t += `, description: ${e.error_description}`);
            } catch (e) {}
          }
          s.newAuthErr({
            authId: m,
            level: 'error',
            source: 'auth',
            message: t,
          });
        });
    };
  function configureAuth(e) {
    return { type: Nt, payload: e };
  }
  function restoreAuthorization(e) {
    return { type: At, payload: e };
  }
  const persistAuthorizationIfNeeded = () => e => {
      let { authSelectors: t, getConfigs: r } = e;
      if (!r().persistAuthorization) return;
      const n = t.authorized().toJS();
      localStorage.setItem('authorized', JSON.stringify(n));
    },
    authPopup = (e, t) => () => {
      (nt.swaggerUIRedirectOauth2 = t), nt.open(e);
    };
  var It = {
      [bt]: (e, t) => {
        let { payload: r } = t;
        return e.set('showDefinitions', r);
      },
      [wt]: (e, t) => {
        let { payload: r } = t,
          n = (0, Fe.fromJS)(r),
          a = e.get('authorized') || (0, Fe.Map)();
        return (
          n.entrySeq().forEach(t => {
            let [r, n] = t;
            if (!isFunc(n.getIn)) return e.set('authorized', a);
            let o = n.getIn(['schema', 'type']);
            if ('apiKey' === o || 'http' === o) a = a.set(r, n);
            else if ('basic' === o) {
              let e = n.getIn(['value', 'username']),
                t = n.getIn(['value', 'password']);
              (a = a.setIn([r, 'value'], {
                username: e,
                header: 'Basic ' + btoa(e + ':' + t),
              })),
                (a = a.setIn([r, 'schema'], n.get('schema')));
            }
          }),
          e.set('authorized', a)
        );
      },
      [Ot]: (e, t) => {
        let r,
          { payload: n } = t,
          { auth: a, token: o } = n;
        (a.token = Object.assign({}, o)), (r = (0, Fe.fromJS)(a));
        let s = e.get('authorized') || (0, Fe.Map)();
        return (s = s.set(r.get('name'), r)), e.set('authorized', s);
      },
      [Ct]: (e, t) => {
        let { payload: r } = t,
          n = e.get('authorized').withMutations(e => {
            r.forEach(t => {
              e.delete(t);
            });
          });
        return e.set('authorized', n);
      },
      [Nt]: (e, t) => {
        let { payload: r } = t;
        return e.set('configs', r);
      },
      [At]: (e, t) => {
        let { payload: r } = t;
        return e.set('authorized', (0, Fe.fromJS)(r.authorized));
      },
    },
    Rt = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ createSelector: () => S.createSelector });
  const state = e => e,
    Tt = (0, Rt.createSelector)(state, e => e.get('showDefinitions')),
    Bt = (0, Rt.createSelector)(state, () => e => {
      let { specSelectors: t } = e,
        r = t.securityDefinitions() || (0, Fe.Map)({}),
        n = (0, Fe.List)();
      return (
        r.entrySeq().forEach(e => {
          let [t, r] = e,
            a = (0, Fe.Map)();
          (a = a.set(t, r)), (n = n.push(a));
        }),
        n
      );
    }),
    getDefinitionsByNames = (e, t) => e => {
      let { specSelectors: r } = e;
      console.warn(
        'WARNING: getDefinitionsByNames is deprecated and will be removed in the next major version.'
      );
      let n = r.securityDefinitions(),
        a = (0, Fe.List)();
      return (
        t.valueSeq().forEach(e => {
          let t = (0, Fe.Map)();
          e.entrySeq().forEach(e => {
            let r,
              [a, o] = e,
              s = n.get(a);
            'oauth2' === s.get('type') &&
              o.size &&
              ((r = s.get('scopes')),
              r.keySeq().forEach(e => {
                o.contains(e) || (r = r.delete(e));
              }),
              (s = s.set('allowedScopes', r))),
              (t = t.set(a, s));
          }),
            (a = a.push(t));
        }),
        a
      );
    },
    definitionsForRequirements = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : (0, Fe.List)();
      return e => {
        let { authSelectors: r } = e;
        const n = r.definitionsToAuthorize() || (0, Fe.List)();
        let a = (0, Fe.List)();
        return (
          n.forEach(e => {
            let r = t.find(t => t.get(e.keySeq().first()));
            r &&
              (e.forEach((t, n) => {
                if ('oauth2' === t.get('type')) {
                  const a = r.get(n);
                  let o = t.get('scopes');
                  Fe.List.isList(a) &&
                    Fe.Map.isMap(o) &&
                    (o.keySeq().forEach(e => {
                      a.contains(e) || (o = o.delete(e));
                    }),
                    (e = e.set(n, t.set('scopes', o))));
                }
              }),
              (a = a.push(e)));
          }),
          a
        );
      };
    },
    jt = (0, Rt.createSelector)(
      state,
      e => e.get('authorized') || (0, Fe.Map)()
    ),
    isAuthorized = (e, t) => e => {
      let { authSelectors: r } = e,
        n = r.authorized();
      return Fe.List.isList(t)
        ? !!t.toJS().filter(
            e =>
              -1 ===
              Object.keys(e)
                .map(e => !!n.get(e))
                .indexOf(!1)
          ).length
        : null;
    },
    Pt = (0, Rt.createSelector)(state, e => e.get('configs')),
    execute = (e, t) => {
      let { authSelectors: r, specSelectors: n } = t;
      return t => {
        let { path: a, method: o, operation: s, extras: l } = t,
          i = {
            authorized: r.authorized() && r.authorized().toJS(),
            definitions:
              n.securityDefinitions() && n.securityDefinitions().toJS(),
            specSecurity: n.security() && n.security().toJS(),
          };
        return e({ path: a, method: o, operation: s, securities: i, ...l });
      };
    },
    loaded = (e, t) => r => {
      const { getConfigs: n, authActions: a } = t,
        o = n();
      if ((e(r), o.persistAuthorization)) {
        const e = localStorage.getItem('authorized');
        e && a.restoreAuthorization({ authorized: JSON.parse(e) });
      }
    },
    wrap_actions_authorize = (e, t) => r => {
      e(r);
      if (t.getConfigs().persistAuthorization)
        try {
          const [{ schema: e, value: t }] = Object.values(r),
            n = 'apiKey' === e.get('type'),
            a = 'cookie' === e.get('in');
          n &&
            a &&
            (document.cookie = `${e.get('name')}=${t}; SameSite=None; Secure`);
        } catch (e) {
          console.error(
            'Error persisting cookie based apiKey in document.cookie.',
            e
          );
        }
    },
    wrap_actions_logout = (e, t) => r => {
      const n = t.getConfigs(),
        a = t.authSelectors.authorized();
      try {
        n.persistAuthorization &&
          Array.isArray(r) &&
          r.forEach(e => {
            const t = a.get(e, {}),
              r = 'apiKey' === t.getIn(['schema', 'type']),
              n = 'cookie' === t.getIn(['schema', 'in']);
            if (r && n) {
              const e = t.getIn(['schema', 'name']);
              document.cookie = `${e}=; Max-Age=-99999999`;
            }
          });
      } catch (e) {
        console.error(
          'Error deleting cookie based apiKey from document.cookie.',
          e
        );
      }
      e(r);
    };
  var Mt = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => v.default }),
    qt = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => _.default });
  class LockAuthIcon extends Ke.default.Component {
    mapStateToProps(e, t) {
      return {
        state: e,
        ownProps: (0, qt.default)(t, Object.keys(t.getSystem())),
      };
    }
    render() {
      const { getComponent: e, ownProps: t } = this.props,
        r = e('LockIcon');
      return Ke.default.createElement(r, t);
    }
  }
  var Lt = LockAuthIcon;
  class UnlockAuthIcon extends Ke.default.Component {
    mapStateToProps(e, t) {
      return {
        state: e,
        ownProps: (0, qt.default)(t, Object.keys(t.getSystem())),
      };
    }
    render() {
      const { getComponent: e, ownProps: t } = this.props,
        r = e('UnlockIcon');
      return Ke.default.createElement(r, t);
    }
  }
  var Dt = UnlockAuthIcon;
  function auth() {
    return {
      afterLoad(e) {
        (this.rootInjects = this.rootInjects || {}),
          (this.rootInjects.initOAuth = e.authActions.configureAuth),
          (this.rootInjects.preauthorizeApiKey = preauthorizeApiKey.bind(
            null,
            e
          )),
          (this.rootInjects.preauthorizeBasic = preauthorizeBasic.bind(
            null,
            e
          ));
      },
      components: {
        LockAuthIcon: Lt,
        UnlockAuthIcon: Dt,
        LockAuthOperationIcon: Lt,
        UnlockAuthOperationIcon: Dt,
      },
      statePlugins: {
        auth: {
          reducers: It,
          actions: t,
          selectors: c,
          wrapActions: {
            authorize: wrap_actions_authorize,
            logout: wrap_actions_logout,
          },
        },
        configs: { wrapActions: { loaded } },
        spec: { wrapActions: { execute } },
      },
    };
  }
  function preauthorizeBasic(e, t, r, n) {
    const {
        authActions: { authorize: a },
        specSelectors: { specJson: o, isOAS3: s },
      } = e,
      l = s() ? ['components', 'securitySchemes'] : ['securityDefinitions'],
      i = o().getIn([...l, t]);
    return i
      ? a({ [t]: { value: { username: r, password: n }, schema: i.toJS() } })
      : null;
  }
  function preauthorizeApiKey(e, t, r) {
    const {
        authActions: { authorize: n },
        specSelectors: { specJson: a, isOAS3: o },
      } = e,
      s = o() ? ['components', 'securitySchemes'] : ['securityDefinitions'],
      l = a().getIn([...s, t]);
    return l ? n({ [t]: { value: r, schema: l.toJS() } }) : null;
  }
  var Ut = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ JSON_SCHEMA: () => b.JSON_SCHEMA, default: () => b.default });
  const parseYamlConfig = (e, t) => {
      try {
        return Ut.default.load(e);
      } catch (e) {
        return t && t.errActions.newThrownErr(new Error(e)), {};
      }
    },
    $t = 'configs_update',
    Jt = 'configs_toggle';
  function update(e, t) {
    return { type: $t, payload: { [e]: t } };
  }
  function toggle(e) {
    return { type: Jt, payload: e };
  }
  const actions_loaded = () => () => {},
    downloadConfig = e => t => {
      const {
        fn: { fetch: r },
      } = t;
      return r(e);
    },
    getConfigByUrl = (e, t) => r => {
      let { specActions: n } = r;
      if (e) return n.downloadConfig(e).then(next, next);
      function next(r) {
        r instanceof Error || r.status >= 400
          ? (n.updateLoadingStatus('failedConfig'),
            n.updateLoadingStatus('failedConfig'),
            n.updateUrl(''),
            console.error(r.statusText + ' ' + e.url),
            t(null))
          : t(parseYamlConfig(r.text));
      }
    },
    get = (e, t) => e.getIn(Array.isArray(t) ? t : [t]);
  var Vt = {
    [$t]: (e, t) => e.merge((0, Fe.fromJS)(t.payload)),
    [Jt]: (e, t) => {
      const r = t.payload,
        n = e.get(r);
      return e.set(r, !n);
    },
  };
  const Kt = {
    getLocalConfig: () =>
      parseYamlConfig(
        '---\nurl: "/swagger/json"\ndom_id: "#swagger-ui"\nvalidatorUrl: "https://validator.swagger.io/validator"\n'
      ),
  };
  function configsPlugin() {
    return {
      statePlugins: {
        spec: { actions: _e, selectors: Kt },
        configs: { reducers: Vt, actions: u, selectors: be },
      },
    };
  }
  const setHash = e =>
    e ? history.pushState(null, null, `#${e}`) : (window.location.hash = '');
  var zt = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ default: () => w.default });
  const Ft = 'layout_scroll_to',
    Wt = 'layout_clear_scroll';
  var Ht = {
      fn: {
        getScrollParent: function getScrollParent(e, t) {
          const r = document.documentElement;
          let n = getComputedStyle(e);
          const a = 'absolute' === n.position,
            o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
          if ('fixed' === n.position) return r;
          for (let t = e; (t = t.parentElement); )
            if (
              ((n = getComputedStyle(t)),
              (!a || 'static' !== n.position) &&
                o.test(n.overflow + n.overflowY + n.overflowX))
            )
              return t;
          return r;
        },
      },
      statePlugins: {
        layout: {
          actions: {
            scrollToElement: (e, t) => r => {
              try {
                (t = t || r.fn.getScrollParent(e)),
                  zt.default.createScroller(t).to(e);
              } catch (e) {
                console.error(e);
              }
            },
            scrollTo: e => ({ type: Ft, payload: Array.isArray(e) ? e : [e] }),
            clearScrollTo: () => ({ type: Wt }),
            readyToScroll: (e, t) => r => {
              const n = r.layoutSelectors.getScrollToKey();
              Fe.default.is(n, (0, Fe.fromJS)(e)) &&
                (r.layoutActions.scrollToElement(t),
                r.layoutActions.clearScrollTo());
            },
            parseDeepLinkHash: e => t => {
              let { layoutActions: r, layoutSelectors: n, getConfigs: a } = t;
              if (a().deepLinking && e) {
                let t = e.slice(1);
                '!' === t[0] && (t = t.slice(1)),
                  '/' === t[0] && (t = t.slice(1));
                const a = t.split('/').map(e => e || ''),
                  o = n.isShownKeyFromUrlHashArray(a),
                  [s, l = '', i = ''] = o;
                if ('operations' === s) {
                  const e = n.isShownKeyFromUrlHashArray([l]);
                  l.indexOf('_') > -1 &&
                    (console.warn(
                      'Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead.'
                    ),
                    r.show(
                      e.map(e => e.replace(/_/g, ' ')),
                      !0
                    )),
                    r.show(e, !0);
                }
                (l.indexOf('_') > -1 || i.indexOf('_') > -1) &&
                  (console.warn(
                    'Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead.'
                  ),
                  r.show(
                    o.map(e => e.replace(/_/g, ' ')),
                    !0
                  )),
                  r.show(o, !0),
                  r.scrollTo(o);
              }
            },
          },
          selectors: {
            getScrollToKey: e => e.get('scrollToKey'),
            isShownKeyFromUrlHashArray(e, t) {
              const [r, n] = t;
              return n ? ['operations', r, n] : r ? ['operations-tag', r] : [];
            },
            urlHashArrayFromIsShownKey(e, t) {
              let [r, n, a] = t;
              return 'operations' == r
                ? [n, a]
                : 'operations-tag' == r
                ? [n]
                : [];
            },
          },
          reducers: {
            [Ft]: (e, t) => e.set('scrollToKey', Fe.default.fromJS(t.payload)),
            [Wt]: e => e.delete('scrollToKey'),
          },
          wrapActions: {
            show: (e, t) => {
              let { getConfigs: r, layoutSelectors: n } = t;
              return function () {
                for (
                  var t = arguments.length, a = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  a[o] = arguments[o];
                if ((e(...a), r().deepLinking))
                  try {
                    let [e, t] = a;
                    e = Array.isArray(e) ? e : [e];
                    const r = n.urlHashArrayFromIsShownKey(e);
                    if (!r.length) return;
                    const [o, s] = r;
                    if (!t) return setHash('/');
                    2 === r.length
                      ? setHash(
                          createDeepLinkPath(
                            `/${encodeURIComponent(o)}/${encodeURIComponent(s)}`
                          )
                        )
                      : 1 === r.length &&
                        setHash(
                          createDeepLinkPath(`/${encodeURIComponent(o)}`)
                        );
                  } catch (e) {
                    console.error(e);
                  }
              };
            },
          },
        },
      },
    },
    Gt = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => C.default });
  var operation_wrapper = (e, t) =>
    class OperationWrapper extends Ke.default.Component {
      onLoad = e => {
        const { operation: r } = this.props,
          { tag: n, operationId: a } = r.toObject();
        let { isShownKey: o } = r.toObject();
        (o = o || ['operations', n, a]), t.layoutActions.readyToScroll(o, e);
      };
      render() {
        return Ke.default.createElement(
          'span',
          { ref: this.onLoad },
          Ke.default.createElement(e, this.props)
        );
      }
    };
  var operation_tag_wrapper = (e, t) =>
    class OperationTagWrapper extends Ke.default.Component {
      onLoad = e => {
        const { tag: r } = this.props,
          n = ['operations-tag', r];
        t.layoutActions.readyToScroll(n, e);
      };
      render() {
        return Ke.default.createElement(
          'span',
          { ref: this.onLoad },
          Ke.default.createElement(e, this.props)
        );
      }
    };
  function deep_linking() {
    return [
      Ht,
      {
        statePlugins: {
          configs: {
            wrapActions: {
              loaded: (e, t) =>
                function () {
                  e(...arguments);
                  const r = decodeURIComponent(window.location.hash);
                  t.layoutActions.parseDeepLinkHash(r);
                },
            },
          },
        },
        wrapComponents: {
          operation: operation_wrapper,
          OperationTag: operation_tag_wrapper,
        },
      },
    ];
  }
  var Xt = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ default: () => x.default });
  function transform(e) {
    return e.map(e => {
      let t = 'is not of a type(s)',
        r = e.get('message').indexOf(t);
      if (r > -1) {
        let t = e
          .get('message')
          .slice(r + 19)
          .split(',');
        return e.set(
          'message',
          e.get('message').slice(0, r) +
            (function makeNewMessage(e) {
              return e.reduce(
                (e, t, r, n) =>
                  r === n.length - 1 && n.length > 1
                    ? e + 'or ' + t
                    : n[r + 1] && n.length > 2
                    ? e + t + ', '
                    : n[r + 1]
                    ? e + t + ' '
                    : e + t,
                'should be a'
              );
            })(t)
        );
      }
      return e;
    });
  }
  var Yt = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ default: () => O.default });
  function parameter_oneof_transform(e, t) {
    let { jsSpec: r } = t;
    return e;
  }
  const Qt = [Ce, xe];
  function transformErrors(e) {
    let t = { jsSpec: {} },
      r = (0, Xt.default)(
        Qt,
        (e, r) => {
          try {
            return r.transform(e, t).filter(e => !!e);
          } catch (t) {
            return console.error('Transformer error:', t), e;
          }
        },
        e
      );
    return r.filter(e => !!e).map(e => (!e.get('line') && e.get('path'), e));
  }
  let Zt = { line: 0, level: 'error', message: 'Unknown error' };
  const er = (0, Rt.createSelector)(
      e => e,
      e => e.get('errors', (0, Fe.List)())
    ),
    tr = (0, Rt.createSelector)(er, e => e.last());
  function err(t) {
    return {
      statePlugins: {
        err: {
          reducers: {
            [Xe]: (e, t) => {
              let { payload: r } = t,
                n = Object.assign(Zt, r, { type: 'thrown' });
              return e
                .update('errors', e =>
                  (e || (0, Fe.List)()).push((0, Fe.fromJS)(n))
                )
                .update('errors', e => transformErrors(e));
            },
            [Ye]: (e, t) => {
              let { payload: r } = t;
              return (
                (r = r.map(e =>
                  (0, Fe.fromJS)(Object.assign(Zt, e, { type: 'thrown' }))
                )),
                e
                  .update('errors', e =>
                    (e || (0, Fe.List)()).concat((0, Fe.fromJS)(r))
                  )
                  .update('errors', e => transformErrors(e))
              );
            },
            [Qe]: (e, t) => {
              let { payload: r } = t,
                n = (0, Fe.fromJS)(r);
              return (
                (n = n.set('type', 'spec')),
                e
                  .update('errors', e =>
                    (e || (0, Fe.List)())
                      .push((0, Fe.fromJS)(n))
                      .sortBy(e => e.get('line'))
                  )
                  .update('errors', e => transformErrors(e))
              );
            },
            [Ze]: (e, t) => {
              let { payload: r } = t;
              return (
                (r = r.map(e =>
                  (0, Fe.fromJS)(Object.assign(Zt, e, { type: 'spec' }))
                )),
                e
                  .update('errors', e =>
                    (e || (0, Fe.List)()).concat((0, Fe.fromJS)(r))
                  )
                  .update('errors', e => transformErrors(e))
              );
            },
            [et]: (e, t) => {
              let { payload: r } = t,
                n = (0, Fe.fromJS)(Object.assign({}, r));
              return (
                (n = n.set('type', 'auth')),
                e
                  .update('errors', e =>
                    (e || (0, Fe.List)()).push((0, Fe.fromJS)(n))
                  )
                  .update('errors', e => transformErrors(e))
              );
            },
            [tt]: (e, t) => {
              let { payload: r } = t;
              if (!r || !e.get('errors')) return e;
              let n = e.get('errors').filter(e =>
                e.keySeq().every(t => {
                  const n = e.get(t),
                    a = r[t];
                  return !a || n !== a;
                })
              );
              return e.merge({ errors: n });
            },
            [rt]: (e, t) => {
              let { payload: r } = t;
              if (!r || 'function' != typeof r) return e;
              let n = e.get('errors').filter(e => r(e));
              return e.merge({ errors: n });
            },
          },
          actions: e,
          selectors: Oe,
        },
      },
    };
  }
  function opsFilter(e, t) {
    return e.filter((e, r) => -1 !== r.indexOf(t));
  }
  function filter() {
    return { fn: { opsFilter } };
  }
  var rr = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ default: () => k.default });
  const ArrowUp = e => {
    let { className: t, width: r, height: n, ...a } = e;
    return Ke.default.createElement(
      'svg',
      (0, rr.default)(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          className: t,
          width: r,
          height: n,
          'aria-hidden': 'true',
          focusable: 'false',
        },
        a
      ),
      Ke.default.createElement('path', {
        d: 'M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z',
      })
    );
  };
  ArrowUp.defaultProps = { className: null, width: 20, height: 20 };
  var nr = ArrowUp;
  const ArrowDown = e => {
    let { className: t, width: r, height: n, ...a } = e;
    return Ke.default.createElement(
      'svg',
      (0, rr.default)(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          className: t,
          width: r,
          height: n,
          'aria-hidden': 'true',
          focusable: 'false',
        },
        a
      ),
      Ke.default.createElement('path', {
        d: 'M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z',
      })
    );
  };
  ArrowDown.defaultProps = { className: null, width: 20, height: 20 };
  var ar = ArrowDown;
  const Arrow = e => {
    let { className: t, width: r, height: n, ...a } = e;
    return Ke.default.createElement(
      'svg',
      (0, rr.default)(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          className: t,
          width: r,
          height: n,
          'aria-hidden': 'true',
          focusable: 'false',
        },
        a
      ),
      Ke.default.createElement('path', {
        d: 'M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z',
      })
    );
  };
  Arrow.defaultProps = { className: null, width: 20, height: 20 };
  var or = Arrow;
  const Close = e => {
    let { className: t, width: r, height: n, ...a } = e;
    return Ke.default.createElement(
      'svg',
      (0, rr.default)(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          className: t,
          width: r,
          height: n,
          'aria-hidden': 'true',
          focusable: 'false',
        },
        a
      ),
      Ke.default.createElement('path', {
        d: 'M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z',
      })
    );
  };
  Close.defaultProps = { className: null, width: 20, height: 20 };
  var sr = Close;
  const Copy = e => {
    let { className: t, width: r, height: n, ...a } = e;
    return Ke.default.createElement(
      'svg',
      (0, rr.default)(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 15 16',
          className: t,
          width: r,
          height: n,
          'aria-hidden': 'true',
          focusable: 'false',
        },
        a
      ),
      Ke.default.createElement(
        'g',
        { transform: 'translate(2, -1)' },
        Ke.default.createElement('path', {
          fill: '#ffffff',
          fillRule: 'evenodd',
          d: 'M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z',
        })
      )
    );
  };
  Copy.defaultProps = { className: null, width: 15, height: 16 };
  var lr = Copy;
  const Lock = e => {
    let { className: t, width: r, height: n, ...a } = e;
    return Ke.default.createElement(
      'svg',
      (0, rr.default)(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          className: t,
          width: r,
          height: n,
          'aria-hidden': 'true',
          focusable: 'false',
        },
        a
      ),
      Ke.default.createElement('path', {
        d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z',
      })
    );
  };
  Lock.defaultProps = { className: null, width: 20, height: 20 };
  var ir = Lock;
  const Unlock = e => {
    let { className: t, width: r, height: n, ...a } = e;
    return Ke.default.createElement(
      'svg',
      (0, rr.default)(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          className: t,
          width: r,
          height: n,
          'aria-hidden': 'true',
          focusable: 'false',
        },
        a
      ),
      Ke.default.createElement('path', {
        d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z',
      })
    );
  };
  Unlock.defaultProps = { className: null, width: 20, height: 20 };
  var cr = Unlock;
  var icons = () => ({
    components: {
      ArrowUpIcon: nr,
      ArrowDownIcon: ar,
      ArrowIcon: or,
      CloseIcon: sr,
      CopyIcon: lr,
      LockIcon: ir,
      UnlockIcon: cr,
    },
  });
  const ur = 'layout_update_layout',
    dr = 'layout_update_filter',
    pr = 'layout_update_mode',
    mr = 'layout_show';
  function updateLayout(e) {
    return { type: ur, payload: e };
  }
  function updateFilter(e) {
    return { type: dr, payload: e };
  }
  function actions_show(e) {
    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return (
      (e = normalizeArray(e)), { type: mr, payload: { thing: e, shown: t } }
    );
  }
  function changeMode(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return (
      (e = normalizeArray(e)), { type: pr, payload: { thing: e, mode: t } }
    );
  }
  var fr = {
    [ur]: (e, t) => e.set('layout', t.payload),
    [dr]: (e, t) => e.set('filter', t.payload),
    [mr]: (e, t) => {
      const r = t.payload.shown,
        n = (0, Fe.fromJS)(t.payload.thing);
      return e.update('shown', (0, Fe.fromJS)({}), e => e.set(n, r));
    },
    [pr]: (e, t) => {
      let r = t.payload.thing,
        n = t.payload.mode;
      return e.setIn(['modes'].concat(r), (n || '') + '');
    },
  };
  const current = e => e.get('layout'),
    currentFilter = e => e.get('filter'),
    isShown = (e, t, r) => (
      (t = normalizeArray(t)),
      e.get('shown', (0, Fe.fromJS)({})).get((0, Fe.fromJS)(t), r)
    ),
    whatMode = function (e, t) {
      let r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
      return (t = normalizeArray(t)), e.getIn(['modes', ...t], r);
    },
    hr = (0, Rt.createSelector)(
      e => e,
      e => !isShown(e, 'editor')
    ),
    taggedOperations = (e, t) =>
      function (r) {
        for (
          var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          a[o - 1] = arguments[o];
        let s = e(r, ...a);
        const { fn: l, layoutSelectors: i, getConfigs: c } = t.getSystem(),
          u = c(),
          { maxDisplayedTags: d } = u;
        let p = i.currentFilter();
        return (
          p &&
            !0 !== p &&
            'true' !== p &&
            'false' !== p &&
            (s = l.opsFilter(s, p)),
          d && !isNaN(d) && d >= 0 && (s = s.slice(0, d)),
          s
        );
      };
  function plugins_layout() {
    return {
      statePlugins: {
        layout: { reducers: fr, actions: ke, selectors: Ne },
        spec: { wrapSelectors: Ae },
      },
    };
  }
  function logs(e) {
    let { configs: t } = e;
    const r = { debug: 0, info: 1, log: 2, warn: 3, error: 4 },
      getLevel = e => r[e] || -1;
    let { logLevel: n } = t,
      a = getLevel(n);
    function log(e) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      getLevel(e) >= a && console[e](...r);
    }
    return (
      (log.warn = log.bind(null, 'warn')),
      (log.error = log.bind(null, 'error')),
      (log.info = log.bind(null, 'info')),
      (log.debug = log.bind(null, 'debug')),
      { rootInjects: { log } }
    );
  }
  let gr = !1;
  function on_complete() {
    return {
      statePlugins: {
        spec: {
          wrapActions: {
            updateSpec: e =>
              function () {
                return (gr = !0), e(...arguments);
              },
            updateJsonSpec: (e, t) =>
              function () {
                const r = t.getConfigs().onComplete;
                return (
                  gr && 'function' == typeof r && (setTimeout(r, 0), (gr = !1)),
                  e(...arguments)
                );
              },
          },
        },
      },
    };
  }
  const extractKey = e => {
      const t = '_**[]';
      return e.indexOf(t) < 0 ? e : e.split(t)[0].trim();
    },
    escapeShell = e =>
      '-d ' === e || /^[_/-]/g.test(e)
        ? e
        : "'" + e.replace(/'/g, "'\\''") + "'",
    escapeCMD = e =>
      '-d ' ===
      (e = e
        .replace(/\^/g, '^^')
        .replace(/\\"/g, '\\\\"')
        .replace(/"/g, '""')
        .replace(/\n/g, '^\n'))
        ? e.replace(/-d /g, '-d ^\n')
        : /^[_/-]/g.test(e)
        ? e
        : '"' + e + '"',
    escapePowershell = e =>
      '-d ' === e
        ? e
        : /\n/.test(e)
        ? '@"\n' +
          e.replace(/"/g, '\\"').replace(/`/g, '``').replace(/\$/, '`$') +
          '\n"@'
        : /^[_/-]/g.test(e)
        ? e
        : "'" + e.replace(/"/g, '""').replace(/'/g, "''") + "'";
  const curlify = function (e, t, r) {
      let n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
        a = !1,
        o = '';
      const addWords = function () {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (o += ' ' + r.map(t).join(' '));
        },
        addWordsWithoutLeadingSpace = function () {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (o += r.map(t).join(' '));
        },
        addNewLine = () => (o += ` ${r}`),
        addIndent = function () {
          return (o += '  '.repeat(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
          ));
        };
      let s = e.get('headers');
      if (
        ((o += 'curl' + n),
        e.has('curlOptions') && addWords(...e.get('curlOptions')),
        addWords('-X', e.get('method')),
        addNewLine(),
        addIndent(),
        addWordsWithoutLeadingSpace(`${e.get('url')}`),
        s && s.size)
      )
        for (let t of e.get('headers').entries()) {
          addNewLine(), addIndent();
          let [e, r] = t;
          addWordsWithoutLeadingSpace('-H', `${e}: ${r}`),
            (a =
              a ||
              (/^content-type$/i.test(e) && /^multipart\/form-data$/i.test(r)));
        }
      const l = e.get('body');
      if (l)
        if (a && ['POST', 'PUT', 'PATCH'].includes(e.get('method')))
          for (let [e, t] of l.entrySeq()) {
            let r = extractKey(e);
            addNewLine(),
              addIndent(),
              addWordsWithoutLeadingSpace('-F'),
              t instanceof nt.File && 'string' == typeof t.valueOf()
                ? addWords(`${r}=${t.data}${t.type ? `;type=${t.type}` : ''}`)
                : t instanceof nt.File
                ? addWords(`${r}=@${t.name}${t.type ? `;type=${t.type}` : ''}`)
                : addWords(`${r}=${t}`);
          }
        else if (l instanceof nt.File)
          addNewLine(),
            addIndent(),
            addWordsWithoutLeadingSpace(`--data-binary '@${l.name}'`);
        else {
          addNewLine(), addIndent(), addWordsWithoutLeadingSpace('-d ');
          let t = l;
          Fe.Map.isMap(t)
            ? addWordsWithoutLeadingSpace(
                (function getStringBodyOfMap(e) {
                  let t = [];
                  for (let [r, n] of e.get('body').entrySeq()) {
                    let e = extractKey(r);
                    n instanceof nt.File
                      ? t.push(
                          `  "${e}": {\n    "name": "${n.name}"${
                            n.type ? `,\n    "type": "${n.type}"` : ''
                          }\n  }`
                        )
                      : t.push(
                          `  "${e}": ${JSON.stringify(n, null, 2).replace(
                            /(\r\n|\r|\n)/g,
                            '\n  '
                          )}`
                        );
                  }
                  return `{\n${t.join(',\n')}\n}`;
                })(e)
              )
            : ('string' != typeof t && (t = JSON.stringify(t)),
              addWordsWithoutLeadingSpace(t));
        }
      else
        l ||
          'POST' !== e.get('method') ||
          (addNewLine(), addIndent(), addWordsWithoutLeadingSpace("-d ''"));
      return o;
    },
    requestSnippetGenerator_curl_powershell = e =>
      curlify(e, escapePowershell, '`\n', '.exe'),
    requestSnippetGenerator_curl_bash = e => curlify(e, escapeShell, '\\\n'),
    requestSnippetGenerator_curl_cmd = e => curlify(e, escapeCMD, '^\n'),
    request_snippets_selectors_state = e => e || (0, Fe.Map)(),
    yr = (0, Rt.createSelector)(request_snippets_selectors_state, e => {
      const t = e.get('languages'),
        r = e.get('generators', (0, Fe.Map)());
      return !t || t.isEmpty() ? r : r.filter((e, r) => t.includes(r));
    }),
    getSnippetGenerators = e => t => {
      let { fn: r } = t;
      return yr(e)
        .map((e, t) => {
          const n = (e => r[`requestSnippetGenerator_${e}`])(t);
          return 'function' != typeof n ? null : e.set('fn', n);
        })
        .filter(e => e);
    },
    Er = (0, Rt.createSelector)(request_snippets_selectors_state, e =>
      e.get('activeLanguage')
    ),
    Sr = (0, Rt.createSelector)(request_snippets_selectors_state, e =>
      e.get('defaultExpanded')
    );
  var vr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ CopyToClipboard: () => N.CopyToClipboard }),
    _r = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => A.default }),
    br = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => I.default }),
    wr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => R.default }),
    Cr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => T.default }),
    xr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => B.default }),
    Or = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => j.default }),
    kr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => P.default }),
    Nr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => M.default }),
    Ar = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => q.default }),
    Ir = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => L.default }),
    Rr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => D.default }),
    Tr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => U.default }),
    Br = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => $.default }),
    jr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => J.default }),
    Pr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => V.default });
  _r.default.registerLanguage('json', wr.default),
    _r.default.registerLanguage('js', br.default),
    _r.default.registerLanguage('xml', Cr.default),
    _r.default.registerLanguage('yaml', Or.default),
    _r.default.registerLanguage('http', kr.default),
    _r.default.registerLanguage('bash', xr.default),
    _r.default.registerLanguage('powershell', Nr.default),
    _r.default.registerLanguage('javascript', br.default);
  const Mr = {
      agate: Ar.default,
      arta: Ir.default,
      monokai: Rr.default,
      nord: Tr.default,
      obsidian: Br.default,
      'tomorrow-night': jr.default,
      idea: Pr.default,
    },
    qr = Object.keys(Mr),
    getStyle = e =>
      qr.includes(e)
        ? Mr[e]
        : (console.warn(
            `Request style '${e}' is not available, returning default instead`
          ),
          Ar.default),
    Lr = {
      cursor: 'pointer',
      lineHeight: 1,
      display: 'inline-flex',
      backgroundColor: 'rgb(250, 250, 250)',
      paddingBottom: '0',
      paddingTop: '0',
      border: '1px solid rgb(51, 51, 51)',
      borderRadius: '4px 4px 0 0',
      boxShadow: 'none',
      borderBottom: 'none',
    },
    Dr = {
      cursor: 'pointer',
      lineHeight: 1,
      display: 'inline-flex',
      backgroundColor: 'rgb(51, 51, 51)',
      boxShadow: 'none',
      border: '1px solid rgb(51, 51, 51)',
      paddingBottom: '0',
      paddingTop: '0',
      borderRadius: '4px 4px 0 0',
      marginTop: '-5px',
      marginRight: '-5px',
      marginLeft: '-5px',
      zIndex: '9999',
      borderBottom: 'none',
    };
  var request_snippets = e => {
      let {
        request: t,
        requestSnippetsSelectors: r,
        getConfigs: n,
        getComponent: a,
      } = e;
      const o = (0, ct.default)(n) ? n() : null,
        s =
          !1 !== (0, Yt.default)(o, 'syntaxHighlight') &&
          (0, Yt.default)(o, 'syntaxHighlight.activated', !0),
        l = (0, Ke.useRef)(null),
        i = a('ArrowUpIcon'),
        c = a('ArrowDownIcon'),
        [u, d] = (0, Ke.useState)(r.getSnippetGenerators()?.keySeq().first()),
        [p, m] = (0, Ke.useState)(r?.getDefaultExpanded());
      (0, Ke.useEffect)(() => {}, []),
        (0, Ke.useEffect)(() => {
          const e = Array.from(l.current.childNodes).filter(
            e => !!e.nodeType && e.classList?.contains('curl-command')
          );
          return (
            e.forEach(e =>
              e.addEventListener(
                'mousewheel',
                handlePreventYScrollingBeyondElement,
                { passive: !1 }
              )
            ),
            () => {
              e.forEach(e =>
                e.removeEventListener(
                  'mousewheel',
                  handlePreventYScrollingBeyondElement
                )
              );
            }
          );
        }, [t]);
      const f = r.getSnippetGenerators(),
        h = f.get(u),
        g = h.get('fn')(t),
        handleSetIsExpanded = () => {
          m(!p);
        },
        handleGetBtnStyle = e => (e === u ? Dr : Lr),
        handlePreventYScrollingBeyondElement = e => {
          const { target: t, deltaY: r } = e,
            { scrollHeight: n, offsetHeight: a, scrollTop: o } = t;
          n > a &&
            ((0 === o && r < 0) || (a + o >= n && r > 0)) &&
            e.preventDefault();
        },
        y = s
          ? Ke.default.createElement(
              _r.default,
              {
                language: h.get('syntax'),
                className: 'curl microlight',
                style: getStyle((0, Yt.default)(o, 'syntaxHighlight.theme')),
              },
              g
            )
          : Ke.default.createElement('textarea', {
              readOnly: !0,
              className: 'curl',
              value: g,
            });
      return Ke.default.createElement(
        'div',
        { className: 'request-snippets', ref: l },
        Ke.default.createElement(
          'div',
          {
            style: {
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '15px',
            },
          },
          Ke.default.createElement(
            'h4',
            {
              onClick: () => handleSetIsExpanded(),
              style: { cursor: 'pointer' },
            },
            'Snippets'
          ),
          Ke.default.createElement(
            'button',
            {
              onClick: () => handleSetIsExpanded(),
              style: { border: 'none', background: 'none' },
              title: p ? 'Collapse operation' : 'Expand operation',
            },
            p
              ? Ke.default.createElement(c, {
                  className: 'arrow',
                  width: '10',
                  height: '10',
                })
              : Ke.default.createElement(i, {
                  className: 'arrow',
                  width: '10',
                  height: '10',
                })
          )
        ),
        p &&
          Ke.default.createElement(
            'div',
            { className: 'curl-command' },
            Ke.default.createElement(
              'div',
              {
                style: {
                  paddingLeft: '15px',
                  paddingRight: '10px',
                  width: '100%',
                  display: 'flex',
                },
              },
              f.entrySeq().map(e => {
                let [t, r] = e;
                return Ke.default.createElement(
                  'div',
                  {
                    style: handleGetBtnStyle(t),
                    className: 'btn',
                    key: t,
                    onClick: () =>
                      (e => {
                        u !== e && d(e);
                      })(t),
                  },
                  Ke.default.createElement(
                    'h4',
                    { style: t === u ? { color: 'white' } : {} },
                    r.get('title')
                  )
                );
              })
            ),
            Ke.default.createElement(
              'div',
              { className: 'copy-to-clipboard' },
              Ke.default.createElement(
                vr.CopyToClipboard,
                { text: g },
                Ke.default.createElement('button', null)
              )
            ),
            Ke.default.createElement('div', null, y)
          )
      );
    },
    plugins_request_snippets = () => ({
      components: { RequestSnippets: request_snippets },
      fn: Ie,
      statePlugins: { requestSnippets: { selectors: Re } },
    }),
    Ur = __webpack_require__(479),
    $r = __webpack_require__.n(Ur),
    Jr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => K.default }),
    Vr = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => z.default });
  const shallowArrayEquals = e => t =>
      Array.isArray(e) &&
      Array.isArray(t) &&
      e.length === t.length &&
      e.every((e, r) => e === t[r]),
    list = function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return t;
    };
  class Cache extends Map {
    delete(e) {
      const t = Array.from(this.keys()).find(shallowArrayEquals(e));
      return super.delete(t);
    }
    get(e) {
      const t = Array.from(this.keys()).find(shallowArrayEquals(e));
      return super.get(t);
    }
    has(e) {
      return -1 !== Array.from(this.keys()).findIndex(shallowArrayEquals(e));
    }
  }
  var utils_memoizeN = function (e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : list;
    const { Cache: r } = ot.default;
    ot.default.Cache = Cache;
    const n = (0, ot.default)(e, t);
    return (ot.default.Cache = r), n;
  };
  const Kr = {
      string: e =>
        e.pattern
          ? (e => {
              try {
                return new Jr.default(e).gen();
              } catch (e) {
                return 'string';
              }
            })(e.pattern)
          : 'string',
      string_email: () => 'user@example.com',
      'string_date-time': () => new Date().toISOString(),
      string_date: () => new Date().toISOString().substring(0, 10),
      string_uuid: () => '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      string_hostname: () => 'example.com',
      string_ipv4: () => '198.51.100.42',
      string_ipv6: () => '2001:0db8:5b96:0000:0000:426f:8e17:642a',
      number: () => 0,
      number_float: () => 0,
      integer: () => 0,
      boolean: e => 'boolean' != typeof e.default || e.default,
    },
    primitive = e => {
      e = objectify(e);
      let { type: t, format: r } = e,
        n = Kr[`${t}_${r}`] || Kr[t];
      return isFunc(n) ? n(e) : 'Unknown Type: ' + e.type;
    },
    sanitizeRef = e =>
      deeplyStripKey(
        e,
        '$$ref',
        e => 'string' == typeof e && e.indexOf('#') > -1
      ),
    zr = ['maxProperties', 'minProperties'],
    Fr = ['minItems', 'maxItems'],
    Wr = ['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum'],
    Hr = ['minLength', 'maxLength'],
    liftSampleHelper = function (e, t) {
      let r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (
        ([
          'example',
          'default',
          'enum',
          'xml',
          'type',
          ...zr,
          ...Fr,
          ...Wr,
          ...Hr,
        ].forEach(r =>
          (r => {
            void 0 === t[r] && void 0 !== e[r] && (t[r] = e[r]);
          })(r)
        ),
        void 0 !== e.required &&
          Array.isArray(e.required) &&
          ((void 0 !== t.required && t.required.length) || (t.required = []),
          e.required.forEach(e => {
            t.required.includes(e) || t.required.push(e);
          })),
        e.properties)
      ) {
        t.properties || (t.properties = {});
        let n = objectify(e.properties);
        for (let a in n)
          Object.prototype.hasOwnProperty.call(n, a) &&
            ((n[a] && n[a].deprecated) ||
              (n[a] && n[a].readOnly && !r.includeReadOnly) ||
              (n[a] && n[a].writeOnly && !r.includeWriteOnly) ||
              t.properties[a] ||
              ((t.properties[a] = n[a]),
              !e.required &&
                Array.isArray(e.required) &&
                -1 !== e.required.indexOf(a) &&
                (t.required ? t.required.push(a) : (t.required = [a]))));
      }
      return (
        e.items &&
          (t.items || (t.items = {}),
          (t.items = liftSampleHelper(e.items, t.items, r))),
        t
      );
    },
    sampleFromSchemaGeneric = function (e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : void 0,
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      e && isFunc(e.toJS) && (e = e.toJS());
      let a =
        void 0 !== r ||
        (e && void 0 !== e.example) ||
        (e && void 0 !== e.default);
      const o = !a && e && e.oneOf && e.oneOf.length > 0,
        s = !a && e && e.anyOf && e.anyOf.length > 0;
      if (!a && (o || s)) {
        const r = objectify(o ? e.oneOf[0] : e.anyOf[0]);
        if (
          (liftSampleHelper(r, e, t),
          !e.xml && r.xml && (e.xml = r.xml),
          void 0 !== e.example && void 0 !== r.example)
        )
          a = !0;
        else if (r.properties) {
          e.properties || (e.properties = {});
          let n = objectify(r.properties);
          for (let a in n)
            Object.prototype.hasOwnProperty.call(n, a) &&
              ((n[a] && n[a].deprecated) ||
                (n[a] && n[a].readOnly && !t.includeReadOnly) ||
                (n[a] && n[a].writeOnly && !t.includeWriteOnly) ||
                e.properties[a] ||
                ((e.properties[a] = n[a]),
                !r.required &&
                  Array.isArray(r.required) &&
                  -1 !== r.required.indexOf(a) &&
                  (e.required ? e.required.push(a) : (e.required = [a]))));
        }
      }
      const l = {};
      let {
          xml: i,
          type: c,
          example: u,
          properties: d,
          additionalProperties: p,
          items: m,
        } = e || {},
        { includeReadOnly: f, includeWriteOnly: h } = t;
      i = i || {};
      let g,
        { name: y, prefix: S, namespace: v } = i,
        _ = {};
      if (n && ((y = y || 'notagname'), (g = (S ? S + ':' : '') + y), v)) {
        l[S ? 'xmlns:' + S : 'xmlns'] = v;
      }
      n && (_[g] = []);
      const schemaHasAny = t =>
        t.some(t => Object.prototype.hasOwnProperty.call(e, t));
      e &&
        !c &&
        (d || p || schemaHasAny(zr)
          ? (c = 'object')
          : m || schemaHasAny(Fr)
          ? (c = 'array')
          : schemaHasAny(Wr)
          ? ((c = 'number'), (e.type = 'number'))
          : a || e.enum || ((c = 'string'), (e.type = 'string')));
      const handleMinMaxItems = t => {
          if (
            (null != e?.maxItems && (t = t.slice(0, e?.maxItems)),
            null != e?.minItems)
          ) {
            let r = 0;
            for (; t.length < e?.minItems; ) t.push(t[r++ % t.length]);
          }
          return t;
        },
        b = objectify(d);
      let w,
        C = 0;
      const hasExceededMaxProperties = () =>
          e &&
          null !== e.maxProperties &&
          void 0 !== e.maxProperties &&
          C >= e.maxProperties,
        canAddProperty = t =>
          !e ||
          null === e.maxProperties ||
          void 0 === e.maxProperties ||
          (!hasExceededMaxProperties() &&
            (!(t =>
              !(
                e &&
                e.required &&
                e.required.length &&
                e.required.includes(t)
              ))(t) ||
              e.maxProperties -
                C -
                (() => {
                  if (!e || !e.required) return 0;
                  let t = 0;
                  return (
                    n
                      ? e.required.forEach(e => (t += void 0 === _[e] ? 0 : 1))
                      : e.required.forEach(
                          e =>
                            (t +=
                              void 0 === _[g]?.find(t => void 0 !== t[e])
                                ? 0
                                : 1)
                        ),
                    e.required.length - t
                  );
                })() >
                0));
      if (
        ((w = n
          ? function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : void 0;
              if (e && b[r]) {
                if (((b[r].xml = b[r].xml || {}), b[r].xml.attribute)) {
                  const e = Array.isArray(b[r].enum) ? b[r].enum[0] : void 0,
                    t = b[r].example,
                    n = b[r].default;
                  return void (l[b[r].xml.name || r] =
                    void 0 !== t
                      ? t
                      : void 0 !== n
                      ? n
                      : void 0 !== e
                      ? e
                      : primitive(b[r]));
                }
                b[r].xml.name = b[r].xml.name || r;
              } else b[r] || !1 === p || (b[r] = { xml: { name: r } });
              let o = sampleFromSchemaGeneric((e && b[r]) || void 0, t, a, n);
              canAddProperty(r) &&
                (C++,
                Array.isArray(o) ? (_[g] = _[g].concat(o)) : _[g].push(o));
            }
          : (r, a) => {
              if (canAddProperty(r)) {
                if (
                  Object.prototype.hasOwnProperty.call(e, 'discriminator') &&
                  e.discriminator &&
                  Object.prototype.hasOwnProperty.call(
                    e.discriminator,
                    'mapping'
                  ) &&
                  e.discriminator.mapping &&
                  Object.prototype.hasOwnProperty.call(e, '$$ref') &&
                  e.$$ref &&
                  e.discriminator.propertyName === r
                ) {
                  for (let t in e.discriminator.mapping)
                    if (-1 !== e.$$ref.search(e.discriminator.mapping[t])) {
                      _[r] = t;
                      break;
                    }
                } else _[r] = sampleFromSchemaGeneric(b[r], t, a, n);
                C++;
              }
            }),
        a)
      ) {
        let a;
        if (
          ((a = sanitizeRef(void 0 !== r ? r : void 0 !== u ? u : e.default)),
          !n)
        ) {
          if ('number' == typeof a && 'string' === c) return `${a}`;
          if ('string' != typeof a || 'string' === c) return a;
          try {
            return JSON.parse(a);
          } catch (e) {
            return a;
          }
        }
        if ((e || (c = Array.isArray(a) ? 'array' : typeof a), 'array' === c)) {
          if (!Array.isArray(a)) {
            if ('string' == typeof a) return a;
            a = [a];
          }
          const r = e ? e.items : void 0;
          r &&
            ((r.xml = r.xml || i || {}), (r.xml.name = r.xml.name || i.name));
          let o = a.map(e => sampleFromSchemaGeneric(r, t, e, n));
          return (
            (o = handleMinMaxItems(o)),
            i.wrapped
              ? ((_[g] = o), (0, Vr.default)(l) || _[g].push({ _attr: l }))
              : (_ = o),
            _
          );
        }
        if ('object' === c) {
          if ('string' == typeof a) return a;
          for (let t in a)
            Object.prototype.hasOwnProperty.call(a, t) &&
              ((e && b[t] && b[t].readOnly && !f) ||
                (e && b[t] && b[t].writeOnly && !h) ||
                (e && b[t] && b[t].xml && b[t].xml.attribute
                  ? (l[b[t].xml.name || t] = a[t])
                  : w(t, a[t])));
          return (0, Vr.default)(l) || _[g].push({ _attr: l }), _;
        }
        return (_[g] = (0, Vr.default)(l) ? a : [{ _attr: l }, a]), _;
      }
      if ('object' === c) {
        for (let e in b)
          Object.prototype.hasOwnProperty.call(b, e) &&
            ((b[e] && b[e].deprecated) ||
              (b[e] && b[e].readOnly && !f) ||
              (b[e] && b[e].writeOnly && !h) ||
              w(e));
        if ((n && l && _[g].push({ _attr: l }), hasExceededMaxProperties()))
          return _;
        if (!0 === p)
          n
            ? _[g].push({ additionalProp: 'Anything can be here' })
            : (_.additionalProp1 = {}),
            C++;
        else if (p) {
          const r = objectify(p),
            a = sampleFromSchemaGeneric(r, t, void 0, n);
          if (n && r.xml && r.xml.name && 'notagname' !== r.xml.name)
            _[g].push(a);
          else {
            const t =
              null !== e.minProperties &&
              void 0 !== e.minProperties &&
              C < e.minProperties
                ? e.minProperties - C
                : 3;
            for (let e = 1; e <= t; e++) {
              if (hasExceededMaxProperties()) return _;
              if (n) {
                const t = {};
                (t['additionalProp' + e] = a.notagname), _[g].push(t);
              } else _['additionalProp' + e] = a;
              C++;
            }
          }
        }
        return _;
      }
      if ('array' === c) {
        if (!m) return;
        let r;
        if (
          (n &&
            ((m.xml = m.xml || e?.xml || {}),
            (m.xml.name = m.xml.name || i.name)),
          Array.isArray(m.anyOf))
        )
          r = m.anyOf.map(e =>
            sampleFromSchemaGeneric(liftSampleHelper(m, e, t), t, void 0, n)
          );
        else if (Array.isArray(m.oneOf))
          r = m.oneOf.map(e =>
            sampleFromSchemaGeneric(liftSampleHelper(m, e, t), t, void 0, n)
          );
        else {
          if (!(!n || (n && i.wrapped)))
            return sampleFromSchemaGeneric(m, t, void 0, n);
          r = [sampleFromSchemaGeneric(m, t, void 0, n)];
        }
        return (
          (r = handleMinMaxItems(r)),
          n && i.wrapped
            ? ((_[g] = r), (0, Vr.default)(l) || _[g].push({ _attr: l }), _)
            : r
        );
      }
      let x;
      if (e && Array.isArray(e.enum)) x = normalizeArray(e.enum)[0];
      else {
        if (!e) return;
        if (((x = primitive(e)), 'number' == typeof x)) {
          let t = e.minimum;
          null != t && (e.exclusiveMinimum && t++, (x = t));
          let r = e.maximum;
          null != r && (e.exclusiveMaximum && r--, (x = r));
        }
        if (
          'string' == typeof x &&
          (null !== e.maxLength &&
            void 0 !== e.maxLength &&
            (x = x.slice(0, e.maxLength)),
          null !== e.minLength && void 0 !== e.minLength)
        ) {
          let t = 0;
          for (; x.length < e.minLength; ) x += x[t++ % x.length];
        }
      }
      if ('file' !== c)
        return n ? ((_[g] = (0, Vr.default)(l) ? x : [{ _attr: l }, x]), _) : x;
    },
    inferSchema = e => (
      e.schema && (e = e.schema), e.properties && (e.type = 'object'), e
    ),
    createXMLExample = (e, t, r) => {
      const n = sampleFromSchemaGeneric(e, t, r, !0);
      if (n)
        return 'string' == typeof n
          ? n
          : $r()(n, { declaration: !0, indent: '\t' });
    },
    sampleFromSchema = (e, t, r) => sampleFromSchemaGeneric(e, t, r, !1),
    resolver = (e, t, r) => [e, JSON.stringify(t), JSON.stringify(r)],
    Gr = utils_memoizeN(createXMLExample, resolver),
    Xr = utils_memoizeN(sampleFromSchema, resolver),
    Yr = [{ when: /json/, shouldStringifyTypes: ['string'] }],
    Qr = ['object'];
  var get_json_sample_schema = e => (t, r, n, a) => {
    const { fn: o } = e(),
      s = o.memoizedSampleFromSchema(t, r, a),
      l = typeof s,
      i = Yr.reduce(
        (e, t) => (t.when.test(n) ? [...e, ...t.shouldStringifyTypes] : e),
        Qr
      );
    return (0, lt.default)(i, e => e === l) ? JSON.stringify(s, null, 2) : s;
  };
  var get_yaml_sample_schema = e => (t, r, n, a) => {
    const { fn: o } = e(),
      s = o.getJsonSampleSchema(t, r, n, a);
    let l;
    try {
      (l = Ut.default.dump(
        Ut.default.load(s),
        { lineWidth: -1 },
        { schema: Ut.JSON_SCHEMA }
      )),
        '\n' === l[l.length - 1] && (l = l.slice(0, l.length - 1));
    } catch (e) {
      return console.error(e), 'error: could not generate yaml example';
    }
    return l.replace(/\t/g, '  ');
  };
  var get_xml_sample_schema = e => (t, r, n) => {
    const { fn: a } = e();
    if ((t && !t.xml && (t.xml = {}), t && !t.xml.name)) {
      if (
        !t.$$ref &&
        (t.type || t.items || t.properties || t.additionalProperties)
      )
        return '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- XML example cannot be generated; root element name is undefined --\x3e';
      if (t.$$ref) {
        let e = t.$$ref.match(/\S*\/(\S+)$/);
        t.xml.name = e[1];
      }
    }
    return a.memoizedCreateXMLExample(t, r, n);
  };
  var get_sample_schema = e =>
    function (t) {
      let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : void 0;
      const { fn: o } = e();
      return (
        'function' == typeof t?.toJS && (t = t.toJS()),
        'function' == typeof a?.toJS && (a = a.toJS()),
        /xml/.test(r)
          ? o.getXmlSampleSchema(t, n, a)
          : /(yaml|yml)/.test(r)
          ? o.getYamlSampleSchema(t, n, r, a)
          : o.getJsonSampleSchema(t, n, r, a)
      );
    };
  var json_schema_5_samples = e => {
    let { getSystem: t } = e;
    const r = get_json_sample_schema(t),
      n = get_yaml_sample_schema(t),
      a = get_xml_sample_schema(t),
      o = get_sample_schema(t);
    return {
      fn: {
        jsonSchema5: {
          inferSchema,
          sampleFromSchema,
          sampleFromSchemaGeneric,
          createXMLExample,
          memoizedSampleFromSchema: Xr,
          memoizedCreateXMLExample: Gr,
          getJsonSampleSchema: r,
          getYamlSampleSchema: n,
          getXmlSampleSchema: a,
          getSampleSchema: o,
        },
        inferSchema,
        sampleFromSchema,
        sampleFromSchemaGeneric,
        createXMLExample,
        memoizedSampleFromSchema: Xr,
        memoizedCreateXMLExample: Gr,
        getJsonSampleSchema: r,
        getYamlSampleSchema: n,
        getXmlSampleSchema: a,
        getSampleSchema: o,
      },
    };
  };
  const Zr = [
      'get',
      'put',
      'post',
      'delete',
      'options',
      'head',
      'patch',
      'trace',
    ],
    spec_selectors_state = e => e || (0, Fe.Map)(),
    en = (0, Rt.createSelector)(spec_selectors_state, e => e.get('lastError')),
    tn = (0, Rt.createSelector)(spec_selectors_state, e => e.get('url')),
    rn = (0, Rt.createSelector)(spec_selectors_state, e => e.get('spec') || ''),
    nn = (0, Rt.createSelector)(
      spec_selectors_state,
      e => e.get('specSource') || 'not-editor'
    ),
    an = (0, Rt.createSelector)(spec_selectors_state, e =>
      e.get('json', (0, Fe.Map)())
    ),
    on = (0, Rt.createSelector)(an, e => e.toJS()),
    sn = (0, Rt.createSelector)(spec_selectors_state, e =>
      e.get('resolved', (0, Fe.Map)())
    ),
    specResolvedSubtree = (e, t) => e.getIn(['resolvedSubtrees', ...t], void 0),
    mergerFn = (e, t) =>
      Fe.Map.isMap(e) && Fe.Map.isMap(t)
        ? t.get('$$ref')
          ? t
          : (0, Fe.OrderedMap)().mergeWith(mergerFn, e, t)
        : t,
    ln = (0, Rt.createSelector)(spec_selectors_state, e =>
      (0, Fe.OrderedMap)().mergeWith(
        mergerFn,
        e.get('json'),
        e.get('resolvedSubtrees')
      )
    ),
    spec = e => an(e),
    cn = (0, Rt.createSelector)(spec, () => !1),
    un = (0, Rt.createSelector)(spec, e =>
      returnSelfOrNewMap(e && e.get('info'))
    ),
    dn = (0, Rt.createSelector)(spec, e =>
      returnSelfOrNewMap(e && e.get('externalDocs'))
    ),
    pn = (0, Rt.createSelector)(un, e => e && e.get('version')),
    mn = (0, Rt.createSelector)(pn, e =>
      /v?([0-9]*)\.([0-9]*)\.([0-9]*)/i.exec(e).slice(1)
    ),
    fn = (0, Rt.createSelector)(ln, e => e.get('paths')),
    hn = (0, Rt.createSelector)(() => [
      'get',
      'put',
      'post',
      'delete',
      'options',
      'head',
      'patch',
    ]),
    gn = (0, Rt.createSelector)(fn, e => {
      if (!e || e.size < 1) return (0, Fe.List)();
      let t = (0, Fe.List)();
      return e && e.forEach
        ? (e.forEach((e, r) => {
            if (!e || !e.forEach) return {};
            e.forEach((e, n) => {
              Zr.indexOf(n) < 0 ||
                (t = t.push(
                  (0, Fe.fromJS)({
                    path: r,
                    method: n,
                    operation: e,
                    id: `${n}-${r}`,
                  })
                ));
            });
          }),
          t)
        : (0, Fe.List)();
    }),
    yn = (0, Rt.createSelector)(spec, e => (0, Fe.Set)(e.get('consumes'))),
    En = (0, Rt.createSelector)(spec, e => (0, Fe.Set)(e.get('produces'))),
    Sn = (0, Rt.createSelector)(spec, e => e.get('security', (0, Fe.List)())),
    vn = (0, Rt.createSelector)(spec, e => e.get('securityDefinitions')),
    findDefinition = (e, t) => {
      const r = e.getIn(['resolvedSubtrees', 'definitions', t], null),
        n = e.getIn(['json', 'definitions', t], null);
      return r || n || null;
    },
    _n = (0, Rt.createSelector)(spec, e => {
      const t = e.get('definitions');
      return Fe.Map.isMap(t) ? t : (0, Fe.Map)();
    }),
    bn = (0, Rt.createSelector)(spec, e => e.get('basePath')),
    wn = (0, Rt.createSelector)(spec, e => e.get('host')),
    Cn = (0, Rt.createSelector)(spec, e => e.get('schemes', (0, Fe.Map)())),
    xn = (0, Rt.createSelector)(gn, yn, En, (e, t, r) =>
      e.map(e =>
        e.update('operation', e => {
          if (e) {
            if (!Fe.Map.isMap(e)) return;
            return e.withMutations(
              e => (
                e.get('consumes') ||
                  e.update('consumes', e => (0, Fe.Set)(e).merge(t)),
                e.get('produces') ||
                  e.update('produces', e => (0, Fe.Set)(e).merge(r)),
                e
              )
            );
          }
          return (0, Fe.Map)();
        })
      )
    ),
    On = (0, Rt.createSelector)(spec, e => {
      const t = e.get('tags', (0, Fe.List)());
      return Fe.List.isList(t)
        ? t.filter(e => Fe.Map.isMap(e))
        : (0, Fe.List)();
    }),
    tagDetails = (e, t) =>
      (On(e) || (0, Fe.List)())
        .filter(Fe.Map.isMap)
        .find(e => e.get('name') === t, (0, Fe.Map)()),
    kn = (0, Rt.createSelector)(xn, On, (e, t) =>
      e.reduce(
        (e, t) => {
          let r = (0, Fe.Set)(t.getIn(['operation', 'tags']));
          return r.count() < 1
            ? e.update('default', (0, Fe.List)(), e => e.push(t))
            : r.reduce(
                (e, r) => e.update(r, (0, Fe.List)(), e => e.push(t)),
                e
              );
        },
        t.reduce(
          (e, t) => e.set(t.get('name'), (0, Fe.List)()),
          (0, Fe.OrderedMap)()
        )
      )
    ),
    selectors_taggedOperations = e => t => {
      let { getConfigs: r } = t,
        { tagsSorter: n, operationsSorter: a } = r();
      return kn(e)
        .sortBy(
          (e, t) => t,
          (e, t) => {
            let r = 'function' == typeof n ? n : vt.tagsSorter[n];
            return r ? r(e, t) : null;
          }
        )
        .map((t, r) => {
          let n = 'function' == typeof a ? a : vt.operationsSorter[a],
            o = n ? t.sort(n) : t;
          return (0, Fe.Map)({ tagDetails: tagDetails(e, r), operations: o });
        });
    },
    Nn = (0, Rt.createSelector)(spec_selectors_state, e =>
      e.get('responses', (0, Fe.Map)())
    ),
    An = (0, Rt.createSelector)(spec_selectors_state, e =>
      e.get('requests', (0, Fe.Map)())
    ),
    In = (0, Rt.createSelector)(spec_selectors_state, e =>
      e.get('mutatedRequests', (0, Fe.Map)())
    ),
    responseFor = (e, t, r) => Nn(e).getIn([t, r], null),
    requestFor = (e, t, r) => An(e).getIn([t, r], null),
    mutatedRequestFor = (e, t, r) => In(e).getIn([t, r], null),
    allowTryItOutFor = () => !0,
    parameterWithMetaByIdentity = (e, t, r) => {
      const n = ln(e).getIn(
          ['paths', ...t, 'parameters'],
          (0, Fe.OrderedMap)()
        ),
        a = e.getIn(
          ['meta', 'paths', ...t, 'parameters'],
          (0, Fe.OrderedMap)()
        );
      return n
        .map(e => {
          const t = a.get(`${r.get('in')}.${r.get('name')}`),
            n = a.get(`${r.get('in')}.${r.get('name')}.hash-${r.hashCode()}`);
          return (0, Fe.OrderedMap)().merge(e, t, n);
        })
        .find(
          e => e.get('in') === r.get('in') && e.get('name') === r.get('name'),
          (0, Fe.OrderedMap)()
        );
    },
    parameterInclusionSettingFor = (e, t, r, n) => {
      const a = `${n}.${r}`;
      return e.getIn(['meta', 'paths', ...t, 'parameter_inclusions', a], !1);
    },
    parameterWithMeta = (e, t, r, n) => {
      const a = ln(e)
        .getIn(['paths', ...t, 'parameters'], (0, Fe.OrderedMap)())
        .find(
          e => e.get('in') === n && e.get('name') === r,
          (0, Fe.OrderedMap)()
        );
      return parameterWithMetaByIdentity(e, t, a);
    },
    operationWithMeta = (e, t, r) => {
      const n = ln(e).getIn(['paths', t, r], (0, Fe.OrderedMap)()),
        a = e.getIn(['meta', 'paths', t, r], (0, Fe.OrderedMap)()),
        o = n
          .get('parameters', (0, Fe.List)())
          .map(n => parameterWithMetaByIdentity(e, [t, r], n));
      return (0, Fe.OrderedMap)().merge(n, a).set('parameters', o);
    };
  function getParameter(e, t, r, n) {
    return (
      (t = t || []),
      e
        .getIn(['meta', 'paths', ...t, 'parameters'], (0, Fe.fromJS)([]))
        .find(
          e => Fe.Map.isMap(e) && e.get('name') === r && e.get('in') === n
        ) || (0, Fe.Map)()
    );
  }
  const Rn = (0, Rt.createSelector)(spec, e => {
    const t = e.get('host');
    return 'string' == typeof t && t.length > 0 && '/' !== t[0];
  });
  function parameterValues(e, t, r) {
    return (
      (t = t || []),
      operationWithMeta(e, ...t)
        .get('parameters', (0, Fe.List)())
        .reduce((e, t) => {
          let n =
            r && 'body' === t.get('in') ? t.get('value_xml') : t.get('value');
          return e.set(paramToIdentifier(t, { allowHashes: !1 }), n);
        }, (0, Fe.fromJS)({}))
    );
  }
  function parametersIncludeIn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    if (Fe.List.isList(e))
      return e.some(e => Fe.Map.isMap(e) && e.get('in') === t);
  }
  function parametersIncludeType(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    if (Fe.List.isList(e))
      return e.some(e => Fe.Map.isMap(e) && e.get('type') === t);
  }
  function contentTypeValues(e, t) {
    t = t || [];
    let r = ln(e).getIn(['paths', ...t], (0, Fe.fromJS)({})),
      n = e.getIn(['meta', 'paths', ...t], (0, Fe.fromJS)({})),
      a = currentProducesFor(e, t);
    const o = r.get('parameters') || new Fe.List(),
      s = n.get('consumes_value')
        ? n.get('consumes_value')
        : parametersIncludeType(o, 'file')
        ? 'multipart/form-data'
        : parametersIncludeType(o, 'formData')
        ? 'application/x-www-form-urlencoded'
        : void 0;
    return (0, Fe.fromJS)({ requestContentType: s, responseContentType: a });
  }
  function currentProducesFor(e, t) {
    t = t || [];
    const r = ln(e).getIn(['paths', ...t], null);
    if (null === r) return;
    const n = e.getIn(['meta', 'paths', ...t, 'produces_value'], null),
      a = r.getIn(['produces', 0], null);
    return n || a || 'application/json';
  }
  function producesOptionsFor(e, t) {
    t = t || [];
    const r = ln(e),
      n = r.getIn(['paths', ...t], null);
    if (null === n) return;
    const [a] = t,
      o = n.get('produces', null),
      s = r.getIn(['paths', a, 'produces'], null),
      l = r.getIn(['produces'], null);
    return o || s || l;
  }
  function consumesOptionsFor(e, t) {
    t = t || [];
    const r = ln(e),
      n = r.getIn(['paths', ...t], null);
    if (null === n) return;
    const [a] = t,
      o = n.get('consumes', null),
      s = r.getIn(['paths', a, 'consumes'], null),
      l = r.getIn(['consumes'], null);
    return o || s || l;
  }
  const operationScheme = (e, t, r) => {
      let n = e.get('url').match(/^([a-z][a-z0-9+\-.]*):/),
        a = Array.isArray(n) ? n[1] : null;
      return (
        e.getIn(['scheme', t, r]) ||
        e.getIn(['scheme', '_defaultScheme']) ||
        a ||
        ''
      );
    },
    canExecuteScheme = (e, t, r) =>
      ['http', 'https'].indexOf(operationScheme(e, t, r)) > -1,
    validationErrors = (e, t) => {
      t = t || [];
      let r = e.getIn(
        ['meta', 'paths', ...t, 'parameters'],
        (0, Fe.fromJS)([])
      );
      const n = [];
      return (
        r.forEach(e => {
          let t = e.get('errors');
          t && t.count() && t.forEach(e => n.push(e));
        }),
        n
      );
    },
    validateBeforeExecute = (e, t) => 0 === validationErrors(e, t).length,
    getOAS3RequiredRequestBodyContentType = (e, t) => {
      let r = { requestBody: !1, requestContentType: {} },
        n = e.getIn(
          ['resolvedSubtrees', 'paths', ...t, 'requestBody'],
          (0, Fe.fromJS)([])
        );
      return (
        n.size < 1 ||
          (n.getIn(['required']) && (r.requestBody = n.getIn(['required'])),
          n
            .getIn(['content'])
            .entrySeq()
            .forEach(e => {
              const t = e[0];
              if (e[1].getIn(['schema', 'required'])) {
                const n = e[1].getIn(['schema', 'required']).toJS();
                r.requestContentType[t] = n;
              }
            })),
        r
      );
    },
    isMediaTypeSchemaPropertiesEqual = (e, t, r, n) => {
      if ((r || n) && r === n) return !0;
      let a = e.getIn(
        ['resolvedSubtrees', 'paths', ...t, 'requestBody', 'content'],
        (0, Fe.fromJS)([])
      );
      if (a.size < 2 || !r || !n) return !1;
      let o = a.getIn([r, 'schema', 'properties'], (0, Fe.fromJS)([])),
        s = a.getIn([n, 'schema', 'properties'], (0, Fe.fromJS)([]));
      return !!o.equals(s);
    };
  function returnSelfOrNewMap(e) {
    return Fe.Map.isMap(e) ? e : new Fe.Map();
  }
  var Tn = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => F.default }),
    Bn = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => W.default }),
    jn = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => H.default }),
    Pn = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => G.default }),
    Mn = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => X.default });
  const qn = 'spec_update_spec',
    Ln = 'spec_update_url',
    Dn = 'spec_update_json',
    Un = 'spec_update_param',
    $n = 'spec_update_empty_param_inclusion',
    Jn = 'spec_validate_param',
    Vn = 'spec_set_response',
    Kn = 'spec_set_request',
    zn = 'spec_set_mutated_request',
    Fn = 'spec_log_request',
    Wn = 'spec_clear_response',
    Hn = 'spec_clear_request',
    Gn = 'spec_clear_validate_param',
    Xn = 'spec_update_operation_meta_value',
    Yn = 'spec_update_resolved',
    Qn = 'spec_update_resolved_subtree',
    Zn = 'set_scheme',
    toStr = e => ((0, Tn.default)(e) ? e : '');
  function updateSpec(e) {
    const t = toStr(e).replace(/\t/g, '  ');
    if ('string' == typeof e) return { type: qn, payload: t };
  }
  function updateResolved(e) {
    return { type: Yn, payload: e };
  }
  function updateUrl(e) {
    return { type: Ln, payload: e };
  }
  function updateJsonSpec(e) {
    return { type: Dn, payload: e };
  }
  const parseToJson = e => t => {
    let { specActions: r, specSelectors: n, errActions: a } = t,
      { specStr: o } = n,
      s = null;
    try {
      (e = e || o()),
        a.clear({ source: 'parser' }),
        (s = Ut.default.load(e, { schema: Ut.JSON_SCHEMA }));
    } catch (e) {
      return (
        console.error(e),
        a.newSpecErr({
          source: 'parser',
          level: 'error',
          message: e.reason,
          line: e.mark && e.mark.line ? e.mark.line + 1 : void 0,
        })
      );
    }
    return s && 'object' == typeof s ? r.updateJsonSpec(s) : {};
  };
  let ea = !1;
  const resolveSpec = (e, t) => r => {
    let {
      specActions: n,
      specSelectors: a,
      errActions: o,
      fn: { fetch: s, resolve: l, AST: i = {} },
      getConfigs: c,
    } = r;
    ea ||
      (console.warn(
        'specActions.resolveSpec is deprecated since v3.10.0 and will be removed in v4.0.0; use requestResolvedSubtree instead!'
      ),
      (ea = !0));
    const {
      modelPropertyMacro: u,
      parameterMacro: d,
      requestInterceptor: p,
      responseInterceptor: m,
    } = c();
    void 0 === e && (e = a.specJson()), void 0 === t && (t = a.url());
    let f = i.getLineNumberForPath ? i.getLineNumberForPath : () => {},
      h = a.specStr();
    return l({
      fetch: s,
      spec: e,
      baseDoc: String(new URL(t, document.baseURI)),
      modelPropertyMacro: u,
      parameterMacro: d,
      requestInterceptor: p,
      responseInterceptor: m,
    }).then(e => {
      let { spec: t, errors: r } = e;
      if ((o.clear({ type: 'thrown' }), Array.isArray(r) && r.length > 0)) {
        let e = r.map(
          e => (
            console.error(e),
            (e.line = e.fullPath ? f(h, e.fullPath) : null),
            (e.path = e.fullPath ? e.fullPath.join('.') : null),
            (e.level = 'error'),
            (e.type = 'thrown'),
            (e.source = 'resolver'),
            Object.defineProperty(e, 'message', {
              enumerable: !0,
              value: e.message,
            }),
            e
          )
        );
        o.newThrownErrBatch(e);
      }
      return n.updateResolved(t);
    });
  };
  let ta = [];
  const ra = (0, Bn.default)(() => {
      const e = ta.reduce((e, t) => {
        let { path: r, system: n } = t;
        return e.has(n) || e.set(n, []), e.get(n).push(r), e;
      }, new Map());
      (ta = []),
        e.forEach(async (e, t) => {
          if (!t)
            return void console.error(
              "debResolveSubtrees: don't have a system to operate on, aborting."
            );
          if (!t.fn.resolveSubtree)
            return void console.error(
              'Error: Swagger-Client did not provide a `resolveSubtree` method, doing nothing.'
            );
          const {
              errActions: r,
              errSelectors: n,
              fn: { resolveSubtree: a, fetch: o, AST: s = {} },
              specSelectors: l,
              specActions: i,
            } = t,
            c = s.getLineNumberForPath ?? (0, Mn.default)(void 0),
            u = l.specStr(),
            {
              modelPropertyMacro: d,
              parameterMacro: p,
              requestInterceptor: m,
              responseInterceptor: f,
            } = t.getConfigs();
          try {
            const t = await e.reduce(async (e, t) => {
              let { resultMap: s, specWithCurrentSubtrees: i } = await e;
              const { errors: h, spec: g } = await a(i, t, {
                baseDoc: String(new URL(l.url(), document.baseURI)),
                modelPropertyMacro: d,
                parameterMacro: p,
                requestInterceptor: m,
                responseInterceptor: f,
              });
              if (
                (n.allErrors().size &&
                  r.clearBy(
                    e =>
                      'thrown' !== e.get('type') ||
                      'resolver' !== e.get('source') ||
                      !e
                        .get('fullPath')
                        .every((e, r) => e === t[r] || void 0 === t[r])
                  ),
                Array.isArray(h) && h.length > 0)
              ) {
                let e = h.map(
                  e => (
                    (e.line = e.fullPath ? c(u, e.fullPath) : null),
                    (e.path = e.fullPath ? e.fullPath.join('.') : null),
                    (e.level = 'error'),
                    (e.type = 'thrown'),
                    (e.source = 'resolver'),
                    Object.defineProperty(e, 'message', {
                      enumerable: !0,
                      value: e.message,
                    }),
                    e
                  )
                );
                r.newThrownErrBatch(e);
              }
              return (
                g &&
                  l.isOAS3() &&
                  'components' === t[0] &&
                  'securitySchemes' === t[1] &&
                  (await Promise.all(
                    Object.values(g)
                      .filter(e => 'openIdConnect' === e.type)
                      .map(async e => {
                        const t = {
                          url: e.openIdConnectUrl,
                          requestInterceptor: m,
                          responseInterceptor: f,
                        };
                        try {
                          const r = await o(t);
                          r instanceof Error || r.status >= 400
                            ? console.error(r.statusText + ' ' + t.url)
                            : (e.openIdConnectData = JSON.parse(r.text));
                        } catch (e) {
                          console.error(e);
                        }
                      })
                  )),
                (0, jn.default)(s, t, g),
                (i = (0, Pn.default)(t, g, i)),
                { resultMap: s, specWithCurrentSubtrees: i }
              );
            }, Promise.resolve({ resultMap: (l.specResolvedSubtree([]) || (0, Fe.Map)()).toJS(), specWithCurrentSubtrees: l.specJS() }));
            i.updateResolvedSubtree([], t.resultMap);
          } catch (e) {
            console.error(e);
          }
        });
    }, 35),
    requestResolvedSubtree = e => t => {
      ta.find(r => {
        let { path: n, system: a } = r;
        return a === t && n.toString() === e.toString();
      }) || (ta.push({ path: e, system: t }), ra());
    };
  function changeParam(e, t, r, n, a) {
    return {
      type: Un,
      payload: { path: e, value: n, paramName: t, paramIn: r, isXml: a },
    };
  }
  function changeParamByIdentity(e, t, r, n) {
    return { type: Un, payload: { path: e, param: t, value: r, isXml: n } };
  }
  const updateResolvedSubtree = (e, t) => ({
      type: Qn,
      payload: { path: e, value: t },
    }),
    invalidateResolvedSubtreeCache = () => ({
      type: Qn,
      payload: { path: [], value: (0, Fe.Map)() },
    }),
    validateParams = (e, t) => ({
      type: Jn,
      payload: { pathMethod: e, isOAS3: t },
    }),
    updateEmptyParamInclusion = (e, t, r, n) => ({
      type: $n,
      payload: {
        pathMethod: e,
        paramName: t,
        paramIn: r,
        includeEmptyValue: n,
      },
    });
  function clearValidateParams(e) {
    return { type: Gn, payload: { pathMethod: e } };
  }
  function changeConsumesValue(e, t) {
    return { type: Xn, payload: { path: e, value: t, key: 'consumes_value' } };
  }
  function changeProducesValue(e, t) {
    return { type: Xn, payload: { path: e, value: t, key: 'produces_value' } };
  }
  const setResponse = (e, t, r) => ({
      payload: { path: e, method: t, res: r },
      type: Vn,
    }),
    setRequest = (e, t, r) => ({
      payload: { path: e, method: t, req: r },
      type: Kn,
    }),
    setMutatedRequest = (e, t, r) => ({
      payload: { path: e, method: t, req: r },
      type: zn,
    }),
    logRequest = e => ({ payload: e, type: Fn }),
    executeRequest = e => t => {
      let {
          fn: r,
          specActions: n,
          specSelectors: a,
          getConfigs: o,
          oas3Selectors: s,
        } = t,
        { pathName: l, method: i, operation: c } = e,
        { requestInterceptor: u, responseInterceptor: d } = o(),
        p = c.toJS();
      if (
        (c &&
          c.get('parameters') &&
          c
            .get('parameters')
            .filter(e => e && !0 === e.get('allowEmptyValue'))
            .forEach(t => {
              if (
                a.parameterInclusionSettingFor(
                  [l, i],
                  t.get('name'),
                  t.get('in')
                )
              ) {
                e.parameters = e.parameters || {};
                const r = paramToValue(t, e.parameters);
                (!r || (r && 0 === r.size)) &&
                  (e.parameters[t.get('name')] = '');
              }
            }),
        (e.contextUrl = (0, _t.default)(a.url()).toString()),
        p && p.operationId
          ? (e.operationId = p.operationId)
          : p && l && i && (e.operationId = r.opId(p, l, i)),
        a.isOAS3())
      ) {
        const t = `${l}:${i}`;
        e.server = s.selectedServer(t) || s.selectedServer();
        const r = s.serverVariables({ server: e.server, namespace: t }).toJS(),
          n = s.serverVariables({ server: e.server }).toJS();
        (e.serverVariables = Object.keys(r).length ? r : n),
          (e.requestContentType = s.requestContentType(l, i)),
          (e.responseContentType = s.responseContentType(l, i) || '*/*');
        const a = s.requestBodyValue(l, i),
          o = s.requestBodyInclusionSetting(l, i);
        a && a.toJS
          ? (e.requestBody = a
              .map(e => (Fe.Map.isMap(e) ? e.get('value') : e))
              .filter(
                (e, t) =>
                  (Array.isArray(e) ? 0 !== e.length : !isEmptyValue(e)) ||
                  o.get(t)
              )
              .toJS())
          : (e.requestBody = a);
      }
      let m = Object.assign({}, e);
      (m = r.buildRequest(m)), n.setRequest(e.pathName, e.method, m);
      (e.requestInterceptor = async t => {
        let r = await u.apply(void 0, [t]),
          a = Object.assign({}, r);
        return n.setMutatedRequest(e.pathName, e.method, a), r;
      }),
        (e.responseInterceptor = d);
      const f = Date.now();
      return r
        .execute(e)
        .then(t => {
          (t.duration = Date.now() - f), n.setResponse(e.pathName, e.method, t);
        })
        .catch(t => {
          'Failed to fetch' === t.message &&
            ((t.name = ''),
            (t.message =
              '**Failed to fetch.**  \n**Possible Reasons:** \n  - CORS \n  - Network Failure \n  - URL scheme must be "http" or "https" for CORS request.')),
            n.setResponse(e.pathName, e.method, {
              error: !0,
              err: (0, He.serializeError)(t),
            });
        });
    },
    actions_execute = function () {
      let {
        path: e,
        method: t,
        ...r
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return n => {
        let {
            fn: { fetch: a },
            specSelectors: o,
            specActions: s,
          } = n,
          l = o.specJsonWithResolvedSubtrees().toJS(),
          i = o.operationScheme(e, t),
          { requestContentType: c, responseContentType: u } = o
            .contentTypeValues([e, t])
            .toJS(),
          d = /xml/i.test(c),
          p = o.parameterValues([e, t], d).toJS();
        return s.executeRequest({
          ...r,
          fetch: a,
          spec: l,
          pathName: e,
          method: t,
          parameters: p,
          requestContentType: c,
          scheme: i,
          responseContentType: u,
        });
      };
    };
  function clearResponse(e, t) {
    return { type: Wn, payload: { path: e, method: t } };
  }
  function clearRequest(e, t) {
    return { type: Hn, payload: { path: e, method: t } };
  }
  function setScheme(e, t, r) {
    return { type: Zn, payload: { scheme: e, path: t, method: r } };
  }
  var na = {
    [qn]: (e, t) =>
      'string' == typeof t.payload ? e.set('spec', t.payload) : e,
    [Ln]: (e, t) => e.set('url', t.payload + ''),
    [Dn]: (e, t) => e.set('json', fromJSOrdered(t.payload)),
    [Yn]: (e, t) => e.setIn(['resolved'], fromJSOrdered(t.payload)),
    [Qn]: (e, t) => {
      const { value: r, path: n } = t.payload;
      return e.setIn(['resolvedSubtrees', ...n], fromJSOrdered(r));
    },
    [Un]: (e, t) => {
      let { payload: r } = t,
        { path: n, paramName: a, paramIn: o, param: s, value: l, isXml: i } = r,
        c = s ? paramToIdentifier(s) : `${o}.${a}`;
      const u = i ? 'value_xml' : 'value';
      return e.setIn(['meta', 'paths', ...n, 'parameters', c, u], l);
    },
    [$n]: (e, t) => {
      let { payload: r } = t,
        { pathMethod: n, paramName: a, paramIn: o, includeEmptyValue: s } = r;
      if (!a || !o)
        return (
          console.warn(
            'Warning: UPDATE_EMPTY_PARAM_INCLUSION could not generate a paramKey.'
          ),
          e
        );
      const l = `${o}.${a}`;
      return e.setIn(['meta', 'paths', ...n, 'parameter_inclusions', l], s);
    },
    [Jn]: (e, t) => {
      let {
        payload: { pathMethod: r, isOAS3: n },
      } = t;
      const a = ln(e).getIn(['paths', ...r]),
        o = parameterValues(e, r).toJS();
      return e.updateIn(
        ['meta', 'paths', ...r, 'parameters'],
        (0, Fe.fromJS)({}),
        t =>
          a.get('parameters', (0, Fe.List)()).reduce((t, a) => {
            const s = paramToValue(a, o),
              l = parameterInclusionSettingFor(
                e,
                r,
                a.get('name'),
                a.get('in')
              ),
              i = (function (e, t) {
                let { isOAS3: r = !1, bypassRequiredCheck: n = !1 } =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  a = e.get('required'),
                  { schema: o, parameterContentMediaType: s } =
                    getParameterSchema(e, { isOAS3: r });
                return validateValueBySchema(t, o, a, n, s);
              })(a, s, { bypassRequiredCheck: l, isOAS3: n });
            return t.setIn([paramToIdentifier(a), 'errors'], (0, Fe.fromJS)(i));
          }, t)
      );
    },
    [Gn]: (e, t) => {
      let {
        payload: { pathMethod: r },
      } = t;
      return e.updateIn(
        ['meta', 'paths', ...r, 'parameters'],
        (0, Fe.fromJS)([]),
        e => e.map(e => e.set('errors', (0, Fe.fromJS)([])))
      );
    },
    [Vn]: (e, t) => {
      let r,
        {
          payload: { res: n, path: a, method: o },
        } = t;
      (r = n.error
        ? Object.assign(
            {
              error: !0,
              name: n.err.name,
              message: n.err.message,
              statusCode: n.err.statusCode,
            },
            n.err.response
          )
        : n),
        (r.headers = r.headers || {});
      let s = e.setIn(['responses', a, o], fromJSOrdered(r));
      return (
        nt.Blob &&
          n.data instanceof nt.Blob &&
          (s = s.setIn(['responses', a, o, 'text'], n.data)),
        s
      );
    },
    [Kn]: (e, t) => {
      let {
        payload: { req: r, path: n, method: a },
      } = t;
      return e.setIn(['requests', n, a], fromJSOrdered(r));
    },
    [zn]: (e, t) => {
      let {
        payload: { req: r, path: n, method: a },
      } = t;
      return e.setIn(['mutatedRequests', n, a], fromJSOrdered(r));
    },
    [Xn]: (e, t) => {
      let {
          payload: { path: r, value: n, key: a },
        } = t,
        o = ['paths', ...r],
        s = ['meta', 'paths', ...r];
      return e.getIn(['json', ...o]) ||
        e.getIn(['resolved', ...o]) ||
        e.getIn(['resolvedSubtrees', ...o])
        ? e.setIn([...s, a], (0, Fe.fromJS)(n))
        : e;
    },
    [Wn]: (e, t) => {
      let {
        payload: { path: r, method: n },
      } = t;
      return e.deleteIn(['responses', r, n]);
    },
    [Hn]: (e, t) => {
      let {
        payload: { path: r, method: n },
      } = t;
      return e.deleteIn(['requests', r, n]);
    },
    [Zn]: (e, t) => {
      let {
        payload: { scheme: r, path: n, method: a },
      } = t;
      return n && a
        ? e.setIn(['scheme', n, a], r)
        : n || a
        ? void 0
        : e.setIn(['scheme', '_defaultScheme'], r);
    },
  };
  const wrap_actions_updateSpec = (e, t) => {
      let { specActions: r } = t;
      return function () {
        e(...arguments), r.parseToJson(...arguments);
      };
    },
    wrap_actions_updateJsonSpec = (e, t) => {
      let { specActions: r } = t;
      return function () {
        for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
          n[a] = arguments[a];
        e(...n), r.invalidateResolvedSubtreeCache();
        const [o] = n,
          s = (0, Yt.default)(o, ['paths']) || {};
        Object.keys(s).forEach(e => {
          (0, Yt.default)(s, [e]).$ref &&
            r.requestResolvedSubtree(['paths', e]);
        }),
          r.requestResolvedSubtree(['components', 'securitySchemes']);
      };
    },
    wrap_actions_executeRequest = (e, t) => {
      let { specActions: r } = t;
      return t => (r.logRequest(t), e(t));
    },
    wrap_actions_validateParams = (e, t) => {
      let { specSelectors: r } = t;
      return t => e(t, r.isOAS3());
    };
  var plugins_spec = () => ({
      statePlugins: {
        spec: {
          wrapActions: { ...je },
          reducers: { ...na },
          actions: { ...Be },
          selectors: { ...Te },
        },
      },
    }),
    aa = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => Y.default }),
    oa = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => Q.default }),
    sa = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => Z.default }),
    la = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => ee.default }),
    ia = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ makeResolve: () => te.makeResolve }),
    ca = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ buildRequest: () => re.buildRequest, execute: () => re.execute }),
    ua = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({
      default: () => ne.default,
      makeHttp: () => ne.makeHttp,
      serializeRes: () => ne.serializeRes,
    }),
    da = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ makeResolveSubtree: () => ae.makeResolveSubtree }),
    pa = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ opId: () => oe.opId });
  const configs_wrap_actions_loaded = (e, t) =>
    function () {
      e(...arguments);
      const r = t.getConfigs().withCredentials;
      void 0 !== r &&
        (t.fn.fetch.withCredentials =
          'string' == typeof r ? 'true' === r : !!r);
    };
  function swagger_client(e) {
    let { configs: t, getConfigs: r } = e;
    return {
      fn: {
        fetch: (0, ua.makeHttp)(ua.default, t.preFetch, t.postFetch),
        buildRequest: ca.buildRequest,
        execute: ca.execute,
        resolve: (0, ia.makeResolve)({
          strategies: [la.default, sa.default, oa.default, aa.default],
        }),
        resolveSubtree: async function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const a = r(),
            o = {
              modelPropertyMacro: a.modelPropertyMacro,
              parameterMacro: a.parameterMacro,
              requestInterceptor: a.requestInterceptor,
              responseInterceptor: a.responseInterceptor,
              strategies: [la.default, sa.default, oa.default, aa.default],
            };
          return (0, da.makeResolveSubtree)(o)(e, t, n);
        },
        serializeRes: ua.serializeRes,
        opId: pa.opId,
      },
      statePlugins: {
        configs: { wrapActions: { loaded: configs_wrap_actions_loaded } },
      },
    };
  }
  function util() {
    return { fn: { shallowEqualKeys } };
  }
  var ma = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => se.default }),
    fa = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ Provider: () => le.Provider, connect: () => le.connect }),
    ha = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => ie.default });
  const withSystem = e => t => {
      const { fn: r } = e();
      class WithSystem extends Ke.Component {
        render() {
          return Ke.default.createElement(
            t,
            (0, rr.default)({}, e(), this.props, this.context)
          );
        }
      }
      return (
        (WithSystem.displayName = `WithSystem(${r.getDisplayName(t)})`),
        WithSystem
      );
    },
    withRoot = (e, t) => r => {
      const { fn: n } = e();
      class WithRoot extends Ke.Component {
        render() {
          return Ke.default.createElement(
            fa.Provider,
            { store: t },
            Ke.default.createElement(
              r,
              (0, rr.default)({}, this.props, this.context)
            )
          );
        }
      }
      return (
        (WithRoot.displayName = `WithRoot(${n.getDisplayName(r)})`), WithRoot
      );
    },
    withConnect = (e, t, r) =>
      (0, ze.compose)(
        r ? withRoot(e, r) : ha.default,
        (0, fa.connect)((r, n) => {
          const a = { ...n, ...e() },
            o = t.prototype?.mapStateToProps || (e => ({ state: e }));
          return o(r, a);
        }),
        withSystem(e)
      )(t),
    handleProps = (e, t, r, n) => {
      for (const a in t) {
        const o = t[a];
        'function' == typeof o && o(r[a], n[a], e());
      }
    },
    withMappedContainer = (e, t, r) => (t, n) => {
      const { fn: a } = e(),
        o = r(t, 'root');
      class WithMappedContainer extends Ke.Component {
        constructor(t, r) {
          super(t, r), handleProps(e, n, t, {});
        }
        UNSAFE_componentWillReceiveProps(t) {
          handleProps(e, n, t, this.props);
        }
        render() {
          const e = (0, qt.default)(this.props, n ? Object.keys(n) : []);
          return Ke.default.createElement(o, e);
        }
      }
      return (
        (WithMappedContainer.displayName = `WithMappedContainer(${a.getDisplayName(
          o
        )})`),
        WithMappedContainer
      );
    },
    render = (e, t, r, n) => a => {
      const o = r(e, t, n)('App', 'root');
      ma.default.render(Ke.default.createElement(o, null), a);
    },
    getComponent = (e, t, r) =>
      function (n, a) {
        let o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ('string' != typeof n)
          throw new TypeError(
            'Need a string, to fetch a component. Was given a ' + typeof n
          );
        const s = r(n);
        return s
          ? a
            ? 'root' === a
              ? withConnect(e, s, t())
              : withConnect(e, s)
            : s
          : (o.failSilently || e().log.warn('Could not find component:', n),
            null);
      },
    getDisplayName = e => e.displayName || e.name || 'Component';
  var view = e => {
    let { getComponents: t, getStore: r, getSystem: n } = e;
    const a =
      ((o = getComponent(n, r, t)),
      St(o, function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return JSON.stringify(t);
      }));
    var o;
    const s = (e =>
      utils_memoizeN(e, function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return t;
      }))(withMappedContainer(n, 0, a));
    return {
      rootInjects: {
        getComponent: a,
        makeMappedContainer: s,
        render: render(n, r, getComponent, t),
      },
      fn: { getDisplayName },
    };
  };
  function downloadUrlPlugin(e) {
    let { fn: t } = e;
    const r = {
      download: e => r => {
        let {
            errActions: n,
            specSelectors: a,
            specActions: o,
            getConfigs: s,
          } = r,
          { fetch: l } = t;
        const i = s();
        function next(t) {
          if (t instanceof Error || t.status >= 400)
            return (
              o.updateLoadingStatus('failed'),
              n.newThrownErr(
                Object.assign(
                  new Error((t.message || t.statusText) + ' ' + e),
                  { source: 'fetch' }
                )
              ),
              void (
                !t.status &&
                t instanceof Error &&
                (function checkPossibleFailReasons() {
                  try {
                    let t;
                    if (
                      ('URL' in nt
                        ? (t = new URL(e))
                        : ((t = document.createElement('a')), (t.href = e)),
                      'https:' !== t.protocol &&
                        'https:' === nt.location.protocol)
                    ) {
                      const e = Object.assign(
                        new Error(
                          `Possible mixed-content issue? The page was loaded over https:// but a ${t.protocol}// URL was specified. Check that you are not attempting to load mixed content.`
                        ),
                        { source: 'fetch' }
                      );
                      return void n.newThrownErr(e);
                    }
                    if (t.origin !== nt.location.origin) {
                      const e = Object.assign(
                        new Error(
                          `Possible cross-origin (CORS) issue? The URL origin (${t.origin}) does not match the page (${nt.location.origin}). Check the server returns the correct 'Access-Control-Allow-*' headers.`
                        ),
                        { source: 'fetch' }
                      );
                      n.newThrownErr(e);
                    }
                  } catch (e) {
                    return;
                  }
                })()
              )
            );
          o.updateLoadingStatus('success'),
            o.updateSpec(t.text),
            a.url() !== e && o.updateUrl(e);
        }
        (e = e || a.url()),
          o.updateLoadingStatus('loading'),
          n.clear({ source: 'fetch' }),
          l({
            url: e,
            loadSpec: !0,
            requestInterceptor: i.requestInterceptor || (e => e),
            responseInterceptor: i.responseInterceptor || (e => e),
            credentials: 'same-origin',
            headers: { Accept: 'application/json,*/*' },
          }).then(next, next);
      },
      updateLoadingStatus: e => {
        let t = [null, 'loading', 'failed', 'success', 'failedConfig'];
        return (
          -1 === t.indexOf(e) &&
            console.error(`Error: ${e} is not one of ${JSON.stringify(t)}`),
          { type: 'spec_update_loading_status', payload: e }
        );
      },
    };
    let n = {
      loadingStatus: (0, Rt.createSelector)(
        e => e || (0, Fe.Map)(),
        e => e.get('loadingStatus') || null
      ),
    };
    return {
      statePlugins: {
        spec: {
          actions: r,
          reducers: {
            spec_update_loading_status: (e, t) =>
              'string' == typeof t.payload
                ? e.set('loadingStatus', t.payload)
                : e,
          },
          selectors: n,
        },
      },
    };
  }
  var ga = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ default: () => ce.default });
  const ya = console.error,
    withErrorBoundary = e => t => {
      const { getComponent: r, fn: n } = e(),
        a = r('ErrorBoundary'),
        o = n.getDisplayName(t);
      class WithErrorBoundary extends Ke.Component {
        render() {
          return Ke.default.createElement(
            a,
            { targetName: o, getComponent: r, fn: n },
            Ke.default.createElement(
              t,
              (0, rr.default)({}, this.props, this.context)
            )
          );
        }
      }
      var s;
      return (
        (WithErrorBoundary.displayName = `WithErrorBoundary(${o})`),
        (s = t).prototype &&
          s.prototype.isReactComponent &&
          (WithErrorBoundary.prototype.mapStateToProps =
            t.prototype.mapStateToProps),
        WithErrorBoundary
      );
    };
  var fallback = e => {
    let { name: t } = e;
    return Ke.default.createElement(
      'div',
      { className: 'fallback' },
      '😱 ',
      Ke.default.createElement(
        'i',
        null,
        'Could not render ',
        't' === t ? 'this component' : t,
        ', see the console.'
      )
    );
  };
  class ErrorBoundary extends Ke.Component {
    static getDerivedStateFromError(e) {
      return { hasError: !0, error: e };
    }
    constructor() {
      super(...arguments), (this.state = { hasError: !1, error: null });
    }
    componentDidCatch(e, t) {
      this.props.fn.componentDidCatch(e, t);
    }
    render() {
      const { getComponent: e, targetName: t, children: r } = this.props;
      if (this.state.hasError) {
        const r = e('Fallback');
        return Ke.default.createElement(r, { name: t });
      }
      return r;
    }
  }
  ErrorBoundary.defaultProps = {
    targetName: 'this component',
    getComponent: () => fallback,
    fn: { componentDidCatch: ya },
    children: null,
  };
  var Ea = ErrorBoundary;
  var safe_render = function () {
    let { componentList: e = [], fullOverride: t = !1 } =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return r => {
      let { getSystem: n } = r;
      const a = t
          ? e
          : [
              'App',
              'BaseLayout',
              'VersionPragmaFilter',
              'InfoContainer',
              'ServersContainer',
              'SchemesContainer',
              'AuthorizeBtnContainer',
              'FilterContainer',
              'Operations',
              'OperationContainer',
              'parameters',
              'responses',
              'OperationServers',
              'Models',
              'ModelWrapper',
              ...e,
            ],
        o = (0, ga.default)(
          a,
          Array(a.length).fill((e, t) => {
            let { fn: r } = t;
            return r.withErrorBoundary(e);
          })
        );
      return {
        fn: { componentDidCatch: ya, withErrorBoundary: withErrorBoundary(n) },
        components: { ErrorBoundary: Ea, Fallback: fallback },
        wrapComponents: o,
      };
    };
  };
  class App extends Ke.default.Component {
    getLayout() {
      let { getComponent: e, layoutSelectors: t } = this.props;
      const r = t.current(),
        n = e(r, !0);
      return (
        n ||
        (() =>
          Ke.default.createElement(
            'h1',
            null,
            ' No layout defined for "',
            r,
            '" '
          ))
      );
    }
    render() {
      const e = this.getLayout();
      return Ke.default.createElement(e, null);
    }
  }
  App.defaultProps = {};
  class AuthorizationPopup extends Ke.default.Component {
    close = () => {
      let { authActions: e } = this.props;
      e.showDefinitions(!1);
    };
    render() {
      let {
          authSelectors: e,
          authActions: t,
          getComponent: r,
          errSelectors: n,
          specSelectors: a,
          fn: { AST: o = {} },
        } = this.props,
        s = e.shownDefinitions();
      const l = r('auths'),
        i = r('CloseIcon');
      return Ke.default.createElement(
        'div',
        { className: 'dialog-ux' },
        Ke.default.createElement('div', { className: 'backdrop-ux' }),
        Ke.default.createElement(
          'div',
          { className: 'modal-ux' },
          Ke.default.createElement(
            'div',
            { className: 'modal-dialog-ux' },
            Ke.default.createElement(
              'div',
              { className: 'modal-ux-inner' },
              Ke.default.createElement(
                'div',
                { className: 'modal-ux-header' },
                Ke.default.createElement(
                  'h3',
                  null,
                  'Available authorizations'
                ),
                Ke.default.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'close-modal',
                    onClick: this.close,
                  },
                  Ke.default.createElement(i, null)
                )
              ),
              Ke.default.createElement(
                'div',
                { className: 'modal-ux-content' },
                s.valueSeq().map((s, i) =>
                  Ke.default.createElement(l, {
                    key: i,
                    AST: o,
                    definitions: s,
                    getComponent: r,
                    errSelectors: n,
                    authSelectors: e,
                    authActions: t,
                    specSelectors: a,
                  })
                )
              )
            )
          )
        )
      );
    }
  }
  class AuthorizeBtn extends Ke.default.Component {
    render() {
      let {
        isAuthorized: e,
        showPopup: t,
        onClick: r,
        getComponent: n,
      } = this.props;
      const a = n('authorizationPopup', !0),
        o = n('LockAuthIcon', !0),
        s = n('UnlockAuthIcon', !0);
      return Ke.default.createElement(
        'div',
        { className: 'auth-wrapper' },
        Ke.default.createElement(
          'button',
          {
            className: e ? 'btn authorize locked' : 'btn authorize unlocked',
            onClick: r,
          },
          Ke.default.createElement('span', null, 'Authorize'),
          e
            ? Ke.default.createElement(o, null)
            : Ke.default.createElement(s, null)
        ),
        t && Ke.default.createElement(a, null)
      );
    }
  }
  class AuthorizeBtnContainer extends Ke.default.Component {
    render() {
      const {
          authActions: e,
          authSelectors: t,
          specSelectors: r,
          getComponent: n,
        } = this.props,
        a = r.securityDefinitions(),
        o = t.definitionsToAuthorize(),
        s = n('authorizeBtn');
      return a
        ? Ke.default.createElement(s, {
            onClick: () => e.showDefinitions(o),
            isAuthorized: !!t.authorized().size,
            showPopup: !!t.shownDefinitions(),
            getComponent: n,
          })
        : null;
    }
  }
  class AuthorizeOperationBtn extends Ke.default.Component {
    onClick = e => {
      e.stopPropagation();
      let { onClick: t } = this.props;
      t && t();
    };
    render() {
      let { isAuthorized: e, getComponent: t } = this.props;
      const r = t('LockAuthOperationIcon', !0),
        n = t('UnlockAuthOperationIcon', !0);
      return Ke.default.createElement(
        'button',
        {
          className: 'authorization__btn',
          'aria-label': e
            ? 'authorization button locked'
            : 'authorization button unlocked',
          onClick: this.onClick,
        },
        e
          ? Ke.default.createElement(r, { className: 'locked' })
          : Ke.default.createElement(n, { className: 'unlocked' })
      );
    }
  }
  class Auths extends Ke.default.Component {
    constructor(e, t) {
      super(e, t), (this.state = {});
    }
    onAuthChange = e => {
      let { name: t } = e;
      this.setState({ [t]: e });
    };
    submitAuth = e => {
      e.preventDefault();
      let { authActions: t } = this.props;
      t.authorizeWithPersistOption(this.state);
    };
    logoutClick = e => {
      e.preventDefault();
      let { authActions: t, definitions: r } = this.props,
        n = r.map((e, t) => t).toArray();
      this.setState(n.reduce((e, t) => ((e[t] = ''), e), {})),
        t.logoutWithPersistOption(n);
    };
    close = e => {
      e.preventDefault();
      let { authActions: t } = this.props;
      t.showDefinitions(!1);
    };
    render() {
      let {
        definitions: e,
        getComponent: t,
        authSelectors: r,
        errSelectors: n,
      } = this.props;
      const a = t('AuthItem'),
        o = t('oauth2', !0),
        s = t('Button');
      let l = r.authorized(),
        i = e.filter((e, t) => !!l.get(t)),
        c = e.filter(e => 'oauth2' !== e.get('type')),
        u = e.filter(e => 'oauth2' === e.get('type'));
      return Ke.default.createElement(
        'div',
        { className: 'auth-container' },
        !!c.size &&
          Ke.default.createElement(
            'form',
            { onSubmit: this.submitAuth },
            c
              .map((e, r) =>
                Ke.default.createElement(a, {
                  key: r,
                  schema: e,
                  name: r,
                  getComponent: t,
                  onAuthChange: this.onAuthChange,
                  authorized: l,
                  errSelectors: n,
                })
              )
              .toArray(),
            Ke.default.createElement(
              'div',
              { className: 'auth-btn-wrapper' },
              c.size === i.size
                ? Ke.default.createElement(
                    s,
                    {
                      className: 'btn modal-btn auth',
                      onClick: this.logoutClick,
                      'aria-label': 'Remove authorization',
                    },
                    'Logout'
                  )
                : Ke.default.createElement(
                    s,
                    {
                      type: 'submit',
                      className: 'btn modal-btn auth authorize',
                      'aria-label': 'Apply credentials',
                    },
                    'Authorize'
                  ),
              Ke.default.createElement(
                s,
                {
                  className: 'btn modal-btn auth btn-done',
                  onClick: this.close,
                },
                'Close'
              )
            )
          ),
        u && u.size
          ? Ke.default.createElement(
              'div',
              null,
              Ke.default.createElement(
                'div',
                { className: 'scope-def' },
                Ke.default.createElement(
                  'p',
                  null,
                  'Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.'
                ),
                Ke.default.createElement(
                  'p',
                  null,
                  'API requires the following scopes. Select which ones you want to grant to Swagger UI.'
                )
              ),
              e
                .filter(e => 'oauth2' === e.get('type'))
                .map((e, t) =>
                  Ke.default.createElement(
                    'div',
                    { key: t },
                    Ke.default.createElement(o, {
                      authorized: l,
                      schema: e,
                      name: t,
                    })
                  )
                )
                .toArray()
            )
          : null
      );
    }
  }
  class auth_item_Auths extends Ke.default.Component {
    render() {
      let {
        schema: e,
        name: t,
        getComponent: r,
        onAuthChange: n,
        authorized: a,
        errSelectors: o,
      } = this.props;
      const s = r('apiKeyAuth'),
        l = r('basicAuth');
      let i;
      const c = e.get('type');
      switch (c) {
        case 'apiKey':
          i = Ke.default.createElement(s, {
            key: t,
            schema: e,
            name: t,
            errSelectors: o,
            authorized: a,
            getComponent: r,
            onChange: n,
          });
          break;
        case 'basic':
          i = Ke.default.createElement(l, {
            key: t,
            schema: e,
            name: t,
            errSelectors: o,
            authorized: a,
            getComponent: r,
            onChange: n,
          });
          break;
        default:
          i = Ke.default.createElement(
            'div',
            { key: t },
            'Unknown security definition type ',
            c
          );
      }
      return Ke.default.createElement('div', { key: `${t}-jump` }, i);
    }
  }
  class AuthError extends Ke.default.Component {
    render() {
      let { error: e } = this.props,
        t = e.get('level'),
        r = e.get('message'),
        n = e.get('source');
      return Ke.default.createElement(
        'div',
        { className: 'errors' },
        Ke.default.createElement('b', null, n, ' ', t),
        Ke.default.createElement('span', null, r)
      );
    }
  }
  class ApiKeyAuth extends Ke.default.Component {
    constructor(e, t) {
      super(e, t);
      let { name: r, schema: n } = this.props,
        a = this.getValue();
      this.state = { name: r, schema: n, value: a };
    }
    getValue() {
      let { name: e, authorized: t } = this.props;
      return t && t.getIn([e, 'value']);
    }
    onChange = e => {
      let { onChange: t } = this.props,
        r = e.target.value,
        n = Object.assign({}, this.state, { value: r });
      this.setState(n), t(n);
    };
    render() {
      let { schema: e, getComponent: t, errSelectors: r, name: n } = this.props;
      const a = t('Input'),
        o = t('Row'),
        s = t('Col'),
        l = t('authError'),
        i = t('Markdown', !0),
        c = t('JumpToPath', !0);
      let u = this.getValue(),
        d = r.allErrors().filter(e => e.get('authId') === n);
      return Ke.default.createElement(
        'div',
        null,
        Ke.default.createElement(
          'h4',
          null,
          Ke.default.createElement('code', null, n || e.get('name')),
          ' (apiKey)',
          Ke.default.createElement(c, { path: ['securityDefinitions', n] })
        ),
        u && Ke.default.createElement('h6', null, 'Authorized'),
        Ke.default.createElement(
          o,
          null,
          Ke.default.createElement(i, { source: e.get('description') })
        ),
        Ke.default.createElement(
          o,
          null,
          Ke.default.createElement(
            'p',
            null,
            'Name: ',
            Ke.default.createElement('code', null, e.get('name'))
          )
        ),
        Ke.default.createElement(
          o,
          null,
          Ke.default.createElement(
            'p',
            null,
            'In: ',
            Ke.default.createElement('code', null, e.get('in'))
          )
        ),
        Ke.default.createElement(
          o,
          null,
          Ke.default.createElement('label', null, 'Value:'),
          u
            ? Ke.default.createElement('code', null, ' ****** ')
            : Ke.default.createElement(
                s,
                null,
                Ke.default.createElement(a, {
                  type: 'text',
                  onChange: this.onChange,
                  autoFocus: !0,
                })
              )
        ),
        d
          .valueSeq()
          .map((e, t) => Ke.default.createElement(l, { error: e, key: t }))
      );
    }
  }
  class BasicAuth extends Ke.default.Component {
    constructor(e, t) {
      super(e, t);
      let { schema: r, name: n } = this.props,
        a = this.getValue().username;
      this.state = { name: n, schema: r, value: a ? { username: a } : {} };
    }
    getValue() {
      let { authorized: e, name: t } = this.props;
      return (e && e.getIn([t, 'value'])) || {};
    }
    onChange = e => {
      let { onChange: t } = this.props,
        { value: r, name: n } = e.target,
        a = this.state.value;
      (a[n] = r), this.setState({ value: a }), t(this.state);
    };
    render() {
      let { schema: e, getComponent: t, name: r, errSelectors: n } = this.props;
      const a = t('Input'),
        o = t('Row'),
        s = t('Col'),
        l = t('authError'),
        i = t('JumpToPath', !0),
        c = t('Markdown', !0);
      let u = this.getValue().username,
        d = n.allErrors().filter(e => e.get('authId') === r);
      return Ke.default.createElement(
        'div',
        null,
        Ke.default.createElement(
          'h4',
          null,
          'Basic authorization',
          Ke.default.createElement(i, { path: ['securityDefinitions', r] })
        ),
        u && Ke.default.createElement('h6', null, 'Authorized'),
        Ke.default.createElement(
          o,
          null,
          Ke.default.createElement(c, { source: e.get('description') })
        ),
        Ke.default.createElement(
          o,
          null,
          Ke.default.createElement('label', null, 'Username:'),
          u
            ? Ke.default.createElement('code', null, ' ', u, ' ')
            : Ke.default.createElement(
                s,
                null,
                Ke.default.createElement(a, {
                  type: 'text',
                  required: 'required',
                  name: 'username',
                  onChange: this.onChange,
                  autoFocus: !0,
                })
              )
        ),
        Ke.default.createElement(
          o,
          null,
          Ke.default.createElement('label', null, 'Password:'),
          u
            ? Ke.default.createElement('code', null, ' ****** ')
            : Ke.default.createElement(
                s,
                null,
                Ke.default.createElement(a, {
                  autoComplete: 'new-password',
                  name: 'password',
                  type: 'password',
                  onChange: this.onChange,
                })
              )
        ),
        d
          .valueSeq()
          .map((e, t) => Ke.default.createElement(l, { error: e, key: t }))
      );
    }
  }
  function Example(e) {
    const { example: t, showValue: r, getComponent: n, getConfigs: a } = e,
      o = n('Markdown', !0),
      s = n('highlightCode');
    return t
      ? Ke.default.createElement(
          'div',
          { className: 'example' },
          t.get('description')
            ? Ke.default.createElement(
                'section',
                { className: 'example__section' },
                Ke.default.createElement(
                  'div',
                  { className: 'example__section-header' },
                  'Example Description'
                ),
                Ke.default.createElement(
                  'p',
                  null,
                  Ke.default.createElement(o, { source: t.get('description') })
                )
              )
            : null,
          r && t.has('value')
            ? Ke.default.createElement(
                'section',
                { className: 'example__section' },
                Ke.default.createElement(
                  'div',
                  { className: 'example__section-header' },
                  'Example Value'
                ),
                Ke.default.createElement(s, {
                  getConfigs: a,
                  value: stringify(t.get('value')),
                })
              )
            : null
        )
      : null;
  }
  class ExamplesSelect extends Ke.default.PureComponent {
    static defaultProps = {
      examples: Fe.default.Map({}),
      onSelect: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return console.log(
          'DEBUG: ExamplesSelect was not given an onSelect callback',
          ...t
        );
      },
      currentExampleKey: null,
      showLabels: !0,
    };
    _onSelect = (() => {
      var e = this;
      return function (t) {
        let { isSyntheticChange: r = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        'function' == typeof e.props.onSelect &&
          e.props.onSelect(t, { isSyntheticChange: r });
      };
    })();
    _onDomSelect = e => {
      if ('function' == typeof this.props.onSelect) {
        const t = e.target.selectedOptions[0].getAttribute('value');
        this._onSelect(t, { isSyntheticChange: !1 });
      }
    };
    getCurrentExample = () => {
      const { examples: e, currentExampleKey: t } = this.props,
        r = e.get(t),
        n = e.keySeq().first(),
        a = e.get(n);
      return r || a || Map({});
    };
    componentDidMount() {
      const { onSelect: e, examples: t } = this.props;
      if ('function' == typeof e) {
        const e = t.first(),
          r = t.keyOf(e);
        this._onSelect(r, { isSyntheticChange: !0 });
      }
    }
    UNSAFE_componentWillReceiveProps(e) {
      const { currentExampleKey: t, examples: r } = e;
      if (r !== this.props.examples && !r.has(t)) {
        const e = r.first(),
          t = r.keyOf(e);
        this._onSelect(t, { isSyntheticChange: !0 });
      }
    }
    render() {
      const {
        examples: e,
        currentExampleKey: t,
        isValueModified: r,
        isModifiedValueAvailable: n,
        showLabels: a,
      } = this.props;
      return Ke.default.createElement(
        'div',
        { className: 'examples-select' },
        a
          ? Ke.default.createElement(
              'span',
              { className: 'examples-select__section-label' },
              'Examples: '
            )
          : null,
        Ke.default.createElement(
          'select',
          {
            className: 'examples-select-element',
            onChange: this._onDomSelect,
            value: n && r ? '__MODIFIED__VALUE__' : t || '',
          },
          n
            ? Ke.default.createElement(
                'option',
                { value: '__MODIFIED__VALUE__' },
                '[Modified value]'
              )
            : null,
          e
            .map((e, t) =>
              Ke.default.createElement(
                'option',
                { key: t, value: t },
                e.get('summary') || t
              )
            )
            .valueSeq()
        )
      );
    }
  }
  const stringifyUnlessList = e => (Fe.List.isList(e) ? e : stringify(e));
  class ExamplesSelectValueRetainer extends Ke.default.PureComponent {
    static defaultProps = {
      userHasEditedBody: !1,
      examples: (0, Fe.Map)({}),
      currentNamespace: '__DEFAULT__NAMESPACE__',
      setRetainRequestBodyValueFlag: () => {},
      onSelect: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return console.log(
          'ExamplesSelectValueRetainer: no `onSelect` function was provided',
          ...t
        );
      },
      updateValue: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return console.log(
          'ExamplesSelectValueRetainer: no `updateValue` function was provided',
          ...t
        );
      },
    };
    constructor(e) {
      super(e);
      const t = this._getCurrentExampleValue();
      this.state = {
        [e.currentNamespace]: (0, Fe.Map)({
          lastUserEditedValue: this.props.currentUserInputValue,
          lastDownstreamValue: t,
          isModifiedValueSelected:
            this.props.userHasEditedBody ||
            this.props.currentUserInputValue !== t,
        }),
      };
    }
    componentWillUnmount() {
      this.props.setRetainRequestBodyValueFlag(!1);
    }
    _getStateForCurrentNamespace = () => {
      const { currentNamespace: e } = this.props;
      return (this.state[e] || (0, Fe.Map)()).toObject();
    };
    _setStateForCurrentNamespace = e => {
      const { currentNamespace: t } = this.props;
      return this._setStateForNamespace(t, e);
    };
    _setStateForNamespace = (e, t) => {
      const r = (this.state[e] || (0, Fe.Map)()).mergeDeep(t);
      return this.setState({ [e]: r });
    };
    _isCurrentUserInputSameAsExampleValue = () => {
      const { currentUserInputValue: e } = this.props;
      return this._getCurrentExampleValue() === e;
    };
    _getValueForExample = (e, t) => {
      const { examples: r } = t || this.props;
      return stringifyUnlessList((r || (0, Fe.Map)({})).getIn([e, 'value']));
    };
    _getCurrentExampleValue = e => {
      const { currentKey: t } = e || this.props;
      return this._getValueForExample(t, e || this.props);
    };
    _onExamplesSelect = (() => {
      var e = this;
      return function (t) {
        let { isSyntheticChange: r } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
            onSelect: n,
            updateValue: a,
            currentUserInputValue: o,
            userHasEditedBody: s,
          } = e.props,
          { lastUserEditedValue: l } = e._getStateForCurrentNamespace(),
          i = e._getValueForExample(t);
        if ('__MODIFIED__VALUE__' === t)
          return (
            a(stringifyUnlessList(l)),
            e._setStateForCurrentNamespace({ isModifiedValueSelected: !0 })
          );
        if ('function' == typeof n) {
          for (
            var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), d = 2;
            d < c;
            d++
          )
            u[d - 2] = arguments[d];
          n(t, { isSyntheticChange: r }, ...u);
        }
        e._setStateForCurrentNamespace({
          lastDownstreamValue: i,
          isModifiedValueSelected: (r && s) || (!!o && o !== i),
        }),
          r || ('function' == typeof a && a(stringifyUnlessList(i)));
      };
    })();
    UNSAFE_componentWillReceiveProps(e) {
      const {
          currentUserInputValue: t,
          examples: r,
          onSelect: n,
          userHasEditedBody: a,
        } = e,
        { lastUserEditedValue: o, lastDownstreamValue: s } =
          this._getStateForCurrentNamespace(),
        l = this._getValueForExample(e.currentKey, e),
        i = r.filter(
          e => e.get('value') === t || stringify(e.get('value')) === t
        );
      if (i.size) {
        let t;
        (t = i.has(e.currentKey) ? e.currentKey : i.keySeq().first()),
          n(t, { isSyntheticChange: !0 });
      } else
        t !== this.props.currentUserInputValue &&
          t !== o &&
          t !== s &&
          (this.props.setRetainRequestBodyValueFlag(!0),
          this._setStateForNamespace(e.currentNamespace, {
            lastUserEditedValue: e.currentUserInputValue,
            isModifiedValueSelected: a || t !== l,
          }));
    }
    render() {
      const {
          currentUserInputValue: e,
          examples: t,
          currentKey: r,
          getComponent: n,
          userHasEditedBody: a,
        } = this.props,
        {
          lastDownstreamValue: o,
          lastUserEditedValue: s,
          isModifiedValueSelected: l,
        } = this._getStateForCurrentNamespace(),
        i = n('ExamplesSelect');
      return Ke.default.createElement(i, {
        examples: t,
        currentExampleKey: r,
        onSelect: this._onExamplesSelect,
        isModifiedValueAvailable: !!s && s !== o,
        isValueModified:
          (void 0 !== e && l && e !== this._getCurrentExampleValue()) || a,
      });
    }
  }
  function oauth2_authorize_authorize(e) {
    let {
        auth: t,
        authActions: r,
        errActions: n,
        configs: a,
        authConfigs: o = {},
        currentServer: s,
      } = e,
      { schema: l, scopes: i, name: c, clientId: u } = t,
      d = l.get('flow'),
      p = [];
    switch (d) {
      case 'password':
        return void r.authorizePassword(t);
      case 'application':
      case 'clientCredentials':
      case 'client_credentials':
        return void r.authorizeApplication(t);
      case 'accessCode':
      case 'authorizationCode':
      case 'authorization_code':
        p.push('response_type=code');
        break;
      case 'implicit':
        p.push('response_type=token');
    }
    'string' == typeof u && p.push('client_id=' + encodeURIComponent(u));
    let m = a.oauth2RedirectUrl;
    if (void 0 === m)
      return void n.newAuthErr({
        authId: c,
        source: 'validation',
        level: 'error',
        message:
          'oauth2RedirectUrl configuration is not passed. Oauth2 authorization cannot be performed.',
      });
    p.push('redirect_uri=' + encodeURIComponent(m));
    let f = [];
    if (
      (Array.isArray(i)
        ? (f = i)
        : Fe.default.List.isList(i) && (f = i.toArray()),
      f.length > 0)
    ) {
      let e = o.scopeSeparator || ' ';
      p.push('scope=' + encodeURIComponent(f.join(e)));
    }
    let h = btoa(new Date());
    if (
      (p.push('state=' + encodeURIComponent(h)),
      void 0 !== o.realm && p.push('realm=' + encodeURIComponent(o.realm)),
      ('authorizationCode' === d ||
        'authorization_code' === d ||
        'accessCode' === d) &&
        o.usePkceWithAuthorizationCodeGrant)
    ) {
      const e = (function generateCodeVerifier() {
          return b64toB64UrlEncoded(pt()(32).toString('base64'));
        })(),
        r = (function createCodeChallenge(e) {
          return b64toB64UrlEncoded(ht()('sha256').update(e).digest('base64'));
        })(e);
      p.push('code_challenge=' + r),
        p.push('code_challenge_method=S256'),
        (t.codeVerifier = e);
    }
    let { additionalQueryStringParams: g } = o;
    for (let e in g)
      void 0 !== g[e] && p.push([e, g[e]].map(encodeURIComponent).join('='));
    const y = l.get('authorizationUrl');
    let S;
    S = s ? (0, _t.default)(sanitizeUrl(y), s, !0).toString() : sanitizeUrl(y);
    let v,
      _ = [S, p.join('&')].join(-1 === y.indexOf('?') ? '?' : '&');
    (v =
      'implicit' === d
        ? r.preAuthorizeImplicit
        : o.useBasicAuthenticationWithAccessCodeGrant
        ? r.authorizeAccessCodeWithBasicAuthentication
        : r.authorizeAccessCodeWithFormParams),
      r.authPopup(_, {
        auth: t,
        state: h,
        redirectUrl: m,
        callback: v,
        errCb: n.newAuthErr,
      });
  }
  class Oauth2 extends Ke.default.Component {
    constructor(e, t) {
      super(e, t);
      let { name: r, schema: n, authorized: a, authSelectors: o } = this.props,
        s = a && a.get(r),
        l = o.getConfigs() || {},
        i = (s && s.get('username')) || '',
        c = (s && s.get('clientId')) || l.clientId || '',
        u = (s && s.get('clientSecret')) || l.clientSecret || '',
        d = (s && s.get('passwordType')) || 'basic',
        p = (s && s.get('scopes')) || l.scopes || [];
      'string' == typeof p && (p = p.split(l.scopeSeparator || ' ')),
        (this.state = {
          appName: l.appName,
          name: r,
          schema: n,
          scopes: p,
          clientId: c,
          clientSecret: u,
          username: i,
          password: '',
          passwordType: d,
        });
    }
    close = e => {
      e.preventDefault();
      let { authActions: t } = this.props;
      t.showDefinitions(!1);
    };
    authorize = () => {
      let {
          authActions: e,
          errActions: t,
          getConfigs: r,
          authSelectors: n,
          oas3Selectors: a,
        } = this.props,
        o = r(),
        s = n.getConfigs();
      t.clear({ authId: name, type: 'auth', source: 'auth' }),
        oauth2_authorize_authorize({
          auth: this.state,
          currentServer: a.serverEffectiveValue(a.selectedServer()),
          authActions: e,
          errActions: t,
          configs: o,
          authConfigs: s,
        });
    };
    onScopeChange = e => {
      let { target: t } = e,
        { checked: r } = t,
        n = t.dataset.value;
      if (r && -1 === this.state.scopes.indexOf(n)) {
        let e = this.state.scopes.concat([n]);
        this.setState({ scopes: e });
      } else
        !r &&
          this.state.scopes.indexOf(n) > -1 &&
          this.setState({ scopes: this.state.scopes.filter(e => e !== n) });
    };
    onInputChange = e => {
      let {
          target: {
            dataset: { name: t },
            value: r,
          },
        } = e,
        n = { [t]: r };
      this.setState(n);
    };
    selectScopes = e => {
      e.target.dataset.all
        ? this.setState({
            scopes: Array.from(
              (
                this.props.schema.get('allowedScopes') ||
                this.props.schema.get('scopes')
              ).keys()
            ),
          })
        : this.setState({ scopes: [] });
    };
    logout = e => {
      e.preventDefault();
      let { authActions: t, errActions: r, name: n } = this.props;
      r.clear({ authId: n, type: 'auth', source: 'auth' }),
        t.logoutWithPersistOption([n]);
    };
    render() {
      let {
        schema: e,
        getComponent: t,
        authSelectors: r,
        errSelectors: n,
        name: a,
        specSelectors: o,
      } = this.props;
      const s = t('Input'),
        l = t('Row'),
        i = t('Col'),
        c = t('Button'),
        u = t('authError'),
        d = t('JumpToPath', !0),
        p = t('Markdown', !0),
        m = t('InitializedInput'),
        { isOAS3: f } = o;
      let h = f() ? e.get('openIdConnectUrl') : null;
      const g = 'implicit',
        y = 'password',
        S = f()
          ? h
            ? 'authorization_code'
            : 'authorizationCode'
          : 'accessCode',
        v = f()
          ? h
            ? 'client_credentials'
            : 'clientCredentials'
          : 'application';
      let _ = !!(r.getConfigs() || {}).usePkceWithAuthorizationCodeGrant,
        b = e.get('flow'),
        w = b === S && _ ? b + ' with PKCE' : b,
        C = e.get('allowedScopes') || e.get('scopes'),
        x = !!r.authorized().get(a),
        O = n.allErrors().filter(e => e.get('authId') === a),
        k = !O.filter(e => 'validation' === e.get('source')).size,
        N = e.get('description');
      return Ke.default.createElement(
        'div',
        null,
        Ke.default.createElement(
          'h4',
          null,
          a,
          ' (OAuth2, ',
          w,
          ') ',
          Ke.default.createElement(d, { path: ['securityDefinitions', a] })
        ),
        this.state.appName
          ? Ke.default.createElement(
              'h5',
              null,
              'Application: ',
              this.state.appName,
              ' '
            )
          : null,
        N && Ke.default.createElement(p, { source: e.get('description') }),
        x && Ke.default.createElement('h6', null, 'Authorized'),
        h &&
          Ke.default.createElement(
            'p',
            null,
            'OpenID Connect URL: ',
            Ke.default.createElement('code', null, h)
          ),
        (b === g || b === S) &&
          Ke.default.createElement(
            'p',
            null,
            'Authorization URL: ',
            Ke.default.createElement('code', null, e.get('authorizationUrl'))
          ),
        (b === y || b === S || b === v) &&
          Ke.default.createElement(
            'p',
            null,
            'Token URL:',
            Ke.default.createElement('code', null, ' ', e.get('tokenUrl'))
          ),
        Ke.default.createElement(
          'p',
          { className: 'flow' },
          'Flow: ',
          Ke.default.createElement('code', null, w)
        ),
        b !== y
          ? null
          : Ke.default.createElement(
              l,
              null,
              Ke.default.createElement(
                l,
                null,
                Ke.default.createElement(
                  'label',
                  { htmlFor: 'oauth_username' },
                  'username:'
                ),
                x
                  ? Ke.default.createElement(
                      'code',
                      null,
                      ' ',
                      this.state.username,
                      ' '
                    )
                  : Ke.default.createElement(
                      i,
                      { tablet: 10, desktop: 10 },
                      Ke.default.createElement('input', {
                        id: 'oauth_username',
                        type: 'text',
                        'data-name': 'username',
                        onChange: this.onInputChange,
                        autoFocus: !0,
                      })
                    )
              ),
              Ke.default.createElement(
                l,
                null,
                Ke.default.createElement(
                  'label',
                  { htmlFor: 'oauth_password' },
                  'password:'
                ),
                x
                  ? Ke.default.createElement('code', null, ' ****** ')
                  : Ke.default.createElement(
                      i,
                      { tablet: 10, desktop: 10 },
                      Ke.default.createElement('input', {
                        id: 'oauth_password',
                        type: 'password',
                        'data-name': 'password',
                        onChange: this.onInputChange,
                      })
                    )
              ),
              Ke.default.createElement(
                l,
                null,
                Ke.default.createElement(
                  'label',
                  { htmlFor: 'password_type' },
                  'Client credentials location:'
                ),
                x
                  ? Ke.default.createElement(
                      'code',
                      null,
                      ' ',
                      this.state.passwordType,
                      ' '
                    )
                  : Ke.default.createElement(
                      i,
                      { tablet: 10, desktop: 10 },
                      Ke.default.createElement(
                        'select',
                        {
                          id: 'password_type',
                          'data-name': 'passwordType',
                          onChange: this.onInputChange,
                        },
                        Ke.default.createElement(
                          'option',
                          { value: 'basic' },
                          'Authorization header'
                        ),
                        Ke.default.createElement(
                          'option',
                          { value: 'request-body' },
                          'Request body'
                        )
                      )
                    )
              )
            ),
        (b === v || b === g || b === S || b === y) &&
          (!x || (x && this.state.clientId)) &&
          Ke.default.createElement(
            l,
            null,
            Ke.default.createElement(
              'label',
              { htmlFor: 'client_id' },
              'client_id:'
            ),
            x
              ? Ke.default.createElement('code', null, ' ****** ')
              : Ke.default.createElement(
                  i,
                  { tablet: 10, desktop: 10 },
                  Ke.default.createElement(m, {
                    id: 'client_id',
                    type: 'text',
                    required: b === y,
                    initialValue: this.state.clientId,
                    'data-name': 'clientId',
                    onChange: this.onInputChange,
                  })
                )
          ),
        (b === v || b === S || b === y) &&
          Ke.default.createElement(
            l,
            null,
            Ke.default.createElement(
              'label',
              { htmlFor: 'client_secret' },
              'client_secret:'
            ),
            x
              ? Ke.default.createElement('code', null, ' ****** ')
              : Ke.default.createElement(
                  i,
                  { tablet: 10, desktop: 10 },
                  Ke.default.createElement(m, {
                    id: 'client_secret',
                    initialValue: this.state.clientSecret,
                    type: 'password',
                    'data-name': 'clientSecret',
                    onChange: this.onInputChange,
                  })
                )
          ),
        !x && C && C.size
          ? Ke.default.createElement(
              'div',
              { className: 'scopes' },
              Ke.default.createElement(
                'h2',
                null,
                'Scopes:',
                Ke.default.createElement(
                  'a',
                  { onClick: this.selectScopes, 'data-all': !0 },
                  'select all'
                ),
                Ke.default.createElement(
                  'a',
                  { onClick: this.selectScopes },
                  'select none'
                )
              ),
              C.map((e, t) =>
                Ke.default.createElement(
                  l,
                  { key: t },
                  Ke.default.createElement(
                    'div',
                    { className: 'checkbox' },
                    Ke.default.createElement(s, {
                      'data-value': t,
                      id: `${t}-${b}-checkbox-${this.state.name}`,
                      disabled: x,
                      checked: this.state.scopes.includes(t),
                      type: 'checkbox',
                      onChange: this.onScopeChange,
                    }),
                    Ke.default.createElement(
                      'label',
                      { htmlFor: `${t}-${b}-checkbox-${this.state.name}` },
                      Ke.default.createElement('span', { className: 'item' }),
                      Ke.default.createElement(
                        'div',
                        { className: 'text' },
                        Ke.default.createElement('p', { className: 'name' }, t),
                        Ke.default.createElement(
                          'p',
                          { className: 'description' },
                          e
                        )
                      )
                    )
                  )
                )
              ).toArray()
            )
          : null,
        O.valueSeq().map((e, t) =>
          Ke.default.createElement(u, { error: e, key: t })
        ),
        Ke.default.createElement(
          'div',
          { className: 'auth-btn-wrapper' },
          k &&
            (x
              ? Ke.default.createElement(
                  c,
                  {
                    className: 'btn modal-btn auth authorize',
                    onClick: this.logout,
                    'aria-label': 'Remove authorization',
                  },
                  'Logout'
                )
              : Ke.default.createElement(
                  c,
                  {
                    className: 'btn modal-btn auth authorize',
                    onClick: this.authorize,
                    'aria-label': 'Apply given OAuth2 credentials',
                  },
                  'Authorize'
                )),
          Ke.default.createElement(
            c,
            { className: 'btn modal-btn auth btn-done', onClick: this.close },
            'Close'
          )
        )
      );
    }
  }
  class Clear extends Ke.Component {
    onClick = () => {
      let { specActions: e, path: t, method: r } = this.props;
      e.clearResponse(t, r), e.clearRequest(t, r);
    };
    render() {
      return Ke.default.createElement(
        'button',
        {
          className: 'btn btn-clear opblock-control__btn',
          onClick: this.onClick,
        },
        'Clear'
      );
    }
  }
  const Headers = e => {
      let { headers: t } = e;
      return Ke.default.createElement(
        'div',
        null,
        Ke.default.createElement('h5', null, 'Response headers'),
        Ke.default.createElement('pre', { className: 'microlight' }, t)
      );
    },
    Duration = e => {
      let { duration: t } = e;
      return Ke.default.createElement(
        'div',
        null,
        Ke.default.createElement('h5', null, 'Request duration'),
        Ke.default.createElement('pre', { className: 'microlight' }, t, ' ms')
      );
    };
  class LiveResponse extends Ke.default.Component {
    shouldComponentUpdate(e) {
      return (
        this.props.response !== e.response ||
        this.props.path !== e.path ||
        this.props.method !== e.method ||
        this.props.displayRequestDuration !== e.displayRequestDuration
      );
    }
    render() {
      const {
          response: e,
          getComponent: t,
          getConfigs: r,
          displayRequestDuration: n,
          specSelectors: a,
          path: o,
          method: s,
        } = this.props,
        { showMutatedRequest: l, requestSnippetsEnabled: i } = r(),
        c = l ? a.mutatedRequestFor(o, s) : a.requestFor(o, s),
        u = e.get('status'),
        d = c.get('url'),
        p = e.get('headers').toJS(),
        m = e.get('notDocumented'),
        f = e.get('error'),
        h = e.get('text'),
        g = e.get('duration'),
        y = Object.keys(p),
        S = p['content-type'] || p['Content-Type'],
        v = t('responseBody'),
        _ = y.map(e => {
          var t = Array.isArray(p[e]) ? p[e].join() : p[e];
          return Ke.default.createElement(
            'span',
            { className: 'headerline', key: e },
            ' ',
            e,
            ': ',
            t,
            ' '
          );
        }),
        b = 0 !== _.length,
        w = t('Markdown', !0),
        C = t('RequestSnippets', !0),
        x = t('curl');
      return Ke.default.createElement(
        'div',
        null,
        c &&
          (!0 === i || 'true' === i
            ? Ke.default.createElement(C, { request: c })
            : Ke.default.createElement(x, { request: c, getConfigs: r })),
        d &&
          Ke.default.createElement(
            'div',
            null,
            Ke.default.createElement(
              'div',
              { className: 'request-url' },
              Ke.default.createElement('h4', null, 'Request URL'),
              Ke.default.createElement('pre', { className: 'microlight' }, d)
            )
          ),
        Ke.default.createElement('h4', null, 'Server response'),
        Ke.default.createElement(
          'table',
          { className: 'responses-table live-responses-table' },
          Ke.default.createElement(
            'thead',
            null,
            Ke.default.createElement(
              'tr',
              { className: 'responses-header' },
              Ke.default.createElement(
                'td',
                { className: 'col_header response-col_status' },
                'Code'
              ),
              Ke.default.createElement(
                'td',
                { className: 'col_header response-col_description' },
                'Details'
              )
            )
          ),
          Ke.default.createElement(
            'tbody',
            null,
            Ke.default.createElement(
              'tr',
              { className: 'response' },
              Ke.default.createElement(
                'td',
                { className: 'response-col_status' },
                u,
                m
                  ? Ke.default.createElement(
                      'div',
                      { className: 'response-undocumented' },
                      Ke.default.createElement('i', null, ' Undocumented ')
                    )
                  : null
              ),
              Ke.default.createElement(
                'td',
                { className: 'response-col_description' },
                f
                  ? Ke.default.createElement(w, {
                      source: `${
                        '' !== e.get('name') ? `${e.get('name')}: ` : ''
                      }${e.get('message')}`,
                    })
                  : null,
                h
                  ? Ke.default.createElement(v, {
                      content: h,
                      contentType: S,
                      url: d,
                      headers: p,
                      getConfigs: r,
                      getComponent: t,
                    })
                  : null,
                b ? Ke.default.createElement(Headers, { headers: _ }) : null,
                n && g
                  ? Ke.default.createElement(Duration, { duration: g })
                  : null
              )
            )
          )
        )
      );
    }
  }
  class OnlineValidatorBadge extends Ke.default.Component {
    constructor(e, t) {
      super(e, t);
      let { getConfigs: r } = e,
        { validatorUrl: n } = r();
      this.state = {
        url: this.getDefinitionUrl(),
        validatorUrl:
          void 0 === n ? 'https://validator.swagger.io/validator' : n,
      };
    }
    getDefinitionUrl = () => {
      let { specSelectors: e } = this.props;
      return new _t.default(e.url(), nt.location).toString();
    };
    UNSAFE_componentWillReceiveProps(e) {
      let { getConfigs: t } = e,
        { validatorUrl: r } = t();
      this.setState({
        url: this.getDefinitionUrl(),
        validatorUrl:
          void 0 === r ? 'https://validator.swagger.io/validator' : r,
      });
    }
    render() {
      let { getConfigs: e } = this.props,
        { spec: t } = e(),
        r = sanitizeUrl(this.state.validatorUrl);
      return 'object' == typeof t && Object.keys(t).length
        ? null
        : this.state.url &&
          requiresValidationURL(this.state.validatorUrl) &&
          requiresValidationURL(this.state.url)
        ? Ke.default.createElement(
            'span',
            { className: 'float-right' },
            Ke.default.createElement(
              'a',
              {
                target: '_blank',
                rel: 'noopener noreferrer',
                href: `${r}/debug?url=${encodeURIComponent(this.state.url)}`,
              },
              Ke.default.createElement(ValidatorImage, {
                src: `${r}?url=${encodeURIComponent(this.state.url)}`,
                alt: 'Online validator badge',
              })
            )
          )
        : null;
    }
  }
  class ValidatorImage extends Ke.default.Component {
    constructor(e) {
      super(e), (this.state = { loaded: !1, error: !1 });
    }
    componentDidMount() {
      const e = new Image();
      (e.onload = () => {
        this.setState({ loaded: !0 });
      }),
        (e.onerror = () => {
          this.setState({ error: !0 });
        }),
        (e.src = this.props.src);
    }
    UNSAFE_componentWillReceiveProps(e) {
      if (e.src !== this.props.src) {
        const t = new Image();
        (t.onload = () => {
          this.setState({ loaded: !0 });
        }),
          (t.onerror = () => {
            this.setState({ error: !0 });
          }),
          (t.src = e.src);
      }
    }
    render() {
      return this.state.error
        ? Ke.default.createElement('img', { alt: 'Error' })
        : this.state.loaded
        ? Ke.default.createElement('img', {
            src: this.props.src,
            alt: this.props.alt,
          })
        : null;
    }
  }
  class Operations extends Ke.default.Component {
    render() {
      let { specSelectors: e } = this.props;
      const t = e.taggedOperations();
      return 0 === t.size
        ? Ke.default.createElement(
            'h3',
            null,
            ' No operations defined in spec!'
          )
        : Ke.default.createElement(
            'div',
            null,
            t.map(this.renderOperationTag).toArray(),
            t.size < 1
              ? Ke.default.createElement(
                  'h3',
                  null,
                  ' No operations defined in spec! '
                )
              : null
          );
    }
    renderOperationTag = (e, t) => {
      const {
          specSelectors: r,
          getComponent: n,
          oas3Selectors: a,
          layoutSelectors: o,
          layoutActions: s,
          getConfigs: l,
        } = this.props,
        i = r.validOperationMethods(),
        c = n('OperationContainer', !0),
        u = n('OperationTag'),
        d = e.get('operations');
      return Ke.default.createElement(
        u,
        {
          key: 'operation-' + t,
          tagObj: e,
          tag: t,
          oas3Selectors: a,
          layoutSelectors: o,
          layoutActions: s,
          getConfigs: l,
          getComponent: n,
          specUrl: r.url(),
        },
        Ke.default.createElement(
          'div',
          { className: 'operation-tag-content' },
          d
            .map(e => {
              const r = e.get('path'),
                n = e.get('method'),
                a = Fe.default.List(['paths', r, n]);
              return -1 === i.indexOf(n)
                ? null
                : Ke.default.createElement(c, {
                    key: `${r}-${n}`,
                    specPath: a,
                    op: e,
                    path: r,
                    method: n,
                    tag: t,
                  });
            })
            .toArray()
        )
      );
    };
  }
  function isAbsoluteUrl(e) {
    return e.match(/^(?:[a-z]+:)?\/\//i);
  }
  function buildBaseUrl(e, t) {
    return e
      ? isAbsoluteUrl(e)
        ? (function addProtocol(e) {
            return e.match(/^\/\//i) ? `${window.location.protocol}${e}` : e;
          })(e)
        : new URL(e, t).href
      : t;
  }
  function safeBuildUrl(e, t) {
    let { selectedServer: r = '' } =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    try {
      return (function buildUrl(e, t) {
        let { selectedServer: r = '' } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!e) return;
        if (isAbsoluteUrl(e)) return e;
        const n = buildBaseUrl(r, t);
        return isAbsoluteUrl(n)
          ? new URL(e, n).href
          : new URL(e, window.location.href).href;
      })(e, t, { selectedServer: r });
    } catch {
      return;
    }
  }
  class OperationTag extends Ke.default.Component {
    static defaultProps = { tagObj: Fe.default.fromJS({}), tag: '' };
    render() {
      const {
        tagObj: e,
        tag: t,
        children: r,
        oas3Selectors: n,
        layoutSelectors: a,
        layoutActions: o,
        getConfigs: s,
        getComponent: l,
        specUrl: i,
      } = this.props;
      let { docExpansion: c, deepLinking: u } = s();
      const d = u && 'false' !== u,
        p = l('Collapse'),
        m = l('Markdown', !0),
        f = l('DeepLink'),
        h = l('Link'),
        g = l('ArrowUpIcon'),
        y = l('ArrowDownIcon');
      let S,
        v = e.getIn(['tagDetails', 'description'], null),
        _ = e.getIn(['tagDetails', 'externalDocs', 'description']),
        b = e.getIn(['tagDetails', 'externalDocs', 'url']);
      S =
        isFunc(n) && isFunc(n.selectedServer)
          ? safeBuildUrl(b, i, { selectedServer: n.selectedServer() })
          : b;
      let w = ['operations-tag', t],
        C = a.isShown(w, 'full' === c || 'list' === c);
      return Ke.default.createElement(
        'div',
        {
          className: C ? 'opblock-tag-section is-open' : 'opblock-tag-section',
        },
        Ke.default.createElement(
          'h3',
          {
            onClick: () => o.show(w, !C),
            className: v ? 'opblock-tag' : 'opblock-tag no-desc',
            id: w.map(e => escapeDeepLinkPath(e)).join('-'),
            'data-tag': t,
            'data-is-open': C,
          },
          Ke.default.createElement(f, {
            enabled: d,
            isShown: C,
            path: createDeepLinkPath(t),
            text: t,
          }),
          v
            ? Ke.default.createElement(
                'small',
                null,
                Ke.default.createElement(m, { source: v })
              )
            : Ke.default.createElement('small', null),
          S
            ? Ke.default.createElement(
                'div',
                { className: 'info__externaldocs' },
                Ke.default.createElement(
                  'small',
                  null,
                  Ke.default.createElement(
                    h,
                    {
                      href: sanitizeUrl(S),
                      onClick: e => e.stopPropagation(),
                      target: '_blank',
                    },
                    _ || S
                  )
                )
              )
            : null,
          Ke.default.createElement(
            'button',
            {
              'aria-expanded': C,
              className: 'expand-operation',
              title: C ? 'Collapse operation' : 'Expand operation',
              onClick: () => o.show(w, !C),
            },
            C
              ? Ke.default.createElement(g, { className: 'arrow' })
              : Ke.default.createElement(y, { className: 'arrow' })
          )
        ),
        Ke.default.createElement(p, { isOpened: C }, r)
      );
    }
  }
  var Sa;
  function _extends() {
    return (
      (_extends = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      _extends.apply(this, arguments)
    );
  }
  var rolling_load = e =>
    Ke.createElement(
      'svg',
      _extends(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: 200,
          height: 200,
          className: 'rolling-load_svg__lds-rolling',
          preserveAspectRatio: 'xMidYMid',
          style: {
            backgroundImage: 'none',
            backgroundPosition: 'initial initial',
            backgroundRepeat: 'initial initial',
          },
          viewBox: '0 0 100 100',
        },
        e
      ),
      Sa ||
        (Sa = Ke.createElement(
          'circle',
          {
            cx: 50,
            cy: 50,
            r: 35,
            fill: 'none',
            stroke: '#555',
            strokeDasharray: '164.93361431346415 56.97787143782138',
            strokeWidth: 10,
          },
          Ke.createElement('animateTransform', {
            attributeName: 'transform',
            begin: '0s',
            calcMode: 'linear',
            dur: '1s',
            keyTimes: '0;1',
            repeatCount: 'indefinite',
            type: 'rotate',
            values: '0 50 50;360 50 50',
          })
        ))
    );
  class Operation extends Ke.PureComponent {
    static defaultProps = {
      operation: null,
      response: null,
      request: null,
      specPath: (0, Fe.List)(),
      summary: '',
    };
    render() {
      let {
          specPath: e,
          response: t,
          request: r,
          toggleShown: n,
          onTryoutClick: a,
          onResetClick: o,
          onCancelClick: s,
          onExecute: l,
          fn: i,
          getComponent: c,
          getConfigs: u,
          specActions: d,
          specSelectors: p,
          authActions: m,
          authSelectors: f,
          oas3Actions: h,
          oas3Selectors: g,
        } = this.props,
        y = this.props.operation,
        {
          deprecated: S,
          isShown: v,
          path: _,
          method: b,
          op: w,
          tag: C,
          operationId: x,
          allowTryItOut: O,
          displayRequestDuration: k,
          tryItOutEnabled: N,
          executeInProgress: A,
        } = y.toJS(),
        { description: I, externalDocs: R, schemes: T } = w;
      const B = R
        ? safeBuildUrl(R.url, p.url(), { selectedServer: g.selectedServer() })
        : '';
      let j = y.getIn(['op']),
        P = j.get('responses'),
        M = (function getList(e, t) {
          if (!Fe.default.Iterable.isIterable(e)) return Fe.default.List();
          let r = e.getIn(Array.isArray(t) ? t : [t]);
          return Fe.default.List.isList(r) ? r : Fe.default.List();
        })(j, ['parameters']),
        q = p.operationScheme(_, b),
        L = ['operations', C, x],
        D = getExtensions(j);
      const U = c('responses'),
        $ = c('parameters'),
        J = c('execute'),
        V = c('clear'),
        K = c('Collapse'),
        z = c('Markdown', !0),
        F = c('schemes'),
        W = c('OperationServers'),
        H = c('OperationExt'),
        G = c('OperationSummary'),
        X = c('Link'),
        { showExtensions: Y } = u();
      if (P && t && t.size > 0) {
        let e = !P.get(String(t.get('status'))) && !P.get('default');
        t = t.set('notDocumented', e);
      }
      let Q = [_, b];
      const Z = p.validationErrors([_, b]);
      return Ke.default.createElement(
        'div',
        {
          className: S
            ? 'opblock opblock-deprecated'
            : v
            ? `opblock opblock-${b} is-open`
            : `opblock opblock-${b}`,
          id: escapeDeepLinkPath(L.join('-')),
        },
        Ke.default.createElement(G, {
          operationProps: y,
          isShown: v,
          toggleShown: n,
          getComponent: c,
          authActions: m,
          authSelectors: f,
          specPath: e,
        }),
        Ke.default.createElement(
          K,
          { isOpened: v },
          Ke.default.createElement(
            'div',
            { className: 'opblock-body' },
            (j && j.size) || null === j
              ? null
              : Ke.default.createElement(rolling_load, {
                  height: '32px',
                  width: '32px',
                  className: 'opblock-loading-animation',
                }),
            S &&
              Ke.default.createElement(
                'h4',
                { className: 'opblock-title_normal' },
                ' Warning: Deprecated'
              ),
            I &&
              Ke.default.createElement(
                'div',
                { className: 'opblock-description-wrapper' },
                Ke.default.createElement(
                  'div',
                  { className: 'opblock-description' },
                  Ke.default.createElement(z, { source: I })
                )
              ),
            B
              ? Ke.default.createElement(
                  'div',
                  { className: 'opblock-external-docs-wrapper' },
                  Ke.default.createElement(
                    'h4',
                    { className: 'opblock-title_normal' },
                    'Find more details'
                  ),
                  Ke.default.createElement(
                    'div',
                    { className: 'opblock-external-docs' },
                    R.description &&
                      Ke.default.createElement(
                        'span',
                        { className: 'opblock-external-docs__description' },
                        Ke.default.createElement(z, { source: R.description })
                      ),
                    Ke.default.createElement(
                      X,
                      {
                        target: '_blank',
                        className: 'opblock-external-docs__link',
                        href: sanitizeUrl(B),
                      },
                      B
                    )
                  )
                )
              : null,
            j && j.size
              ? Ke.default.createElement($, {
                  parameters: M,
                  specPath: e.push('parameters'),
                  operation: j,
                  onChangeKey: Q,
                  onTryoutClick: a,
                  onResetClick: o,
                  onCancelClick: s,
                  tryItOutEnabled: N,
                  allowTryItOut: O,
                  fn: i,
                  getComponent: c,
                  specActions: d,
                  specSelectors: p,
                  pathMethod: [_, b],
                  getConfigs: u,
                  oas3Actions: h,
                  oas3Selectors: g,
                })
              : null,
            N
              ? Ke.default.createElement(W, {
                  getComponent: c,
                  path: _,
                  method: b,
                  operationServers: j.get('servers'),
                  pathServers: p.paths().getIn([_, 'servers']),
                  getSelectedServer: g.selectedServer,
                  setSelectedServer: h.setSelectedServer,
                  setServerVariableValue: h.setServerVariableValue,
                  getServerVariable: g.serverVariableValue,
                  getEffectiveServerValue: g.serverEffectiveValue,
                })
              : null,
            N && O && T && T.size
              ? Ke.default.createElement(
                  'div',
                  { className: 'opblock-schemes' },
                  Ke.default.createElement(F, {
                    schemes: T,
                    path: _,
                    method: b,
                    specActions: d,
                    currentScheme: q,
                  })
                )
              : null,
            !N || !O || Z.length <= 0
              ? null
              : Ke.default.createElement(
                  'div',
                  { className: 'validation-errors errors-wrapper' },
                  'Please correct the following validation errors and try again.',
                  Ke.default.createElement(
                    'ul',
                    null,
                    Z.map((e, t) =>
                      Ke.default.createElement('li', { key: t }, ' ', e, ' ')
                    )
                  )
                ),
            Ke.default.createElement(
              'div',
              { className: N && t && O ? 'btn-group' : 'execute-wrapper' },
              N && O
                ? Ke.default.createElement(J, {
                    operation: j,
                    specActions: d,
                    specSelectors: p,
                    oas3Selectors: g,
                    oas3Actions: h,
                    path: _,
                    method: b,
                    onExecute: l,
                    disabled: A,
                  })
                : null,
              N && t && O
                ? Ke.default.createElement(V, {
                    specActions: d,
                    path: _,
                    method: b,
                  })
                : null
            ),
            A
              ? Ke.default.createElement(
                  'div',
                  { className: 'loading-container' },
                  Ke.default.createElement('div', { className: 'loading' })
                )
              : null,
            P
              ? Ke.default.createElement(U, {
                  responses: P,
                  request: r,
                  tryItOutResponse: t,
                  getComponent: c,
                  getConfigs: u,
                  specSelectors: p,
                  oas3Actions: h,
                  oas3Selectors: g,
                  specActions: d,
                  produces: p.producesOptionsFor([_, b]),
                  producesValue: p.currentProducesFor([_, b]),
                  specPath: e.push('responses'),
                  path: _,
                  method: b,
                  displayRequestDuration: k,
                  fn: i,
                })
              : null,
            Y && D.size
              ? Ke.default.createElement(H, { extensions: D, getComponent: c })
              : null
          )
        )
      );
    }
  }
  class OperationContainer extends Ke.PureComponent {
    constructor(e, t) {
      super(e, t);
      const { tryItOutEnabled: r } = e.getConfigs();
      this.state = {
        tryItOutEnabled: !0 === r || 'true' === r,
        executeInProgress: !1,
      };
    }
    static defaultProps = {
      showSummary: !0,
      response: null,
      allowTryItOut: !0,
      displayOperationId: !1,
      displayRequestDuration: !1,
    };
    mapStateToProps(e, t) {
      const { op: r, layoutSelectors: n, getConfigs: a } = t,
        {
          docExpansion: o,
          deepLinking: s,
          displayOperationId: l,
          displayRequestDuration: i,
          supportedSubmitMethods: c,
        } = a(),
        u = n.showSummary(),
        d =
          r.getIn(['operation', '__originalOperationId']) ||
          r.getIn(['operation', 'operationId']) ||
          (0, pa.opId)(r.get('operation'), t.path, t.method) ||
          r.get('id'),
        p = ['operations', t.tag, d],
        m = s && 'false' !== s,
        f =
          c.indexOf(t.method) >= 0 &&
          (void 0 === t.allowTryItOut
            ? t.specSelectors.allowTryItOutFor(t.path, t.method)
            : t.allowTryItOut),
        h = r.getIn(['operation', 'security']) || t.specSelectors.security();
      return {
        operationId: d,
        isDeepLinkingEnabled: m,
        showSummary: u,
        displayOperationId: l,
        displayRequestDuration: i,
        allowTryItOut: f,
        security: h,
        isAuthorized: t.authSelectors.isAuthorized(h),
        isShown: n.isShown(p, 'full' === o),
        jumpToKey: `paths.${t.path}.${t.method}`,
        response: t.specSelectors.responseFor(t.path, t.method),
        request: t.specSelectors.requestFor(t.path, t.method),
      };
    }
    componentDidMount() {
      const { isShown: e } = this.props,
        t = this.getResolvedSubtree();
      e && void 0 === t && this.requestResolvedSubtree();
    }
    UNSAFE_componentWillReceiveProps(e) {
      const { response: t, isShown: r } = e,
        n = this.getResolvedSubtree();
      t !== this.props.response && this.setState({ executeInProgress: !1 }),
        r && void 0 === n && this.requestResolvedSubtree();
    }
    toggleShown = () => {
      let { layoutActions: e, tag: t, operationId: r, isShown: n } = this.props;
      const a = this.getResolvedSubtree();
      n || void 0 !== a || this.requestResolvedSubtree(),
        e.show(['operations', t, r], !n);
    };
    onCancelClick = () => {
      this.setState({ tryItOutEnabled: !this.state.tryItOutEnabled });
    };
    onTryoutClick = () => {
      this.setState({ tryItOutEnabled: !this.state.tryItOutEnabled });
    };
    onResetClick = e => {
      const t = this.props.oas3Selectors.selectDefaultRequestBodyValue(...e);
      this.props.oas3Actions.setRequestBodyValue({ value: t, pathMethod: e });
    };
    onExecute = () => {
      this.setState({ executeInProgress: !0 });
    };
    getResolvedSubtree = () => {
      const { specSelectors: e, path: t, method: r, specPath: n } = this.props;
      return n
        ? e.specResolvedSubtree(n.toJS())
        : e.specResolvedSubtree(['paths', t, r]);
    };
    requestResolvedSubtree = () => {
      const { specActions: e, path: t, method: r, specPath: n } = this.props;
      return n
        ? e.requestResolvedSubtree(n.toJS())
        : e.requestResolvedSubtree(['paths', t, r]);
    };
    render() {
      let {
        op: e,
        tag: t,
        path: r,
        method: n,
        security: a,
        isAuthorized: o,
        operationId: s,
        showSummary: l,
        isShown: i,
        jumpToKey: c,
        allowTryItOut: u,
        response: d,
        request: p,
        displayOperationId: m,
        displayRequestDuration: f,
        isDeepLinkingEnabled: h,
        specPath: g,
        specSelectors: y,
        specActions: S,
        getComponent: v,
        getConfigs: _,
        layoutSelectors: b,
        layoutActions: w,
        authActions: C,
        authSelectors: x,
        oas3Actions: O,
        oas3Selectors: k,
        fn: N,
      } = this.props;
      const A = v('operation'),
        I = this.getResolvedSubtree() || (0, Fe.Map)(),
        R = (0, Fe.fromJS)({
          op: I,
          tag: t,
          path: r,
          summary: e.getIn(['operation', 'summary']) || '',
          deprecated:
            I.get('deprecated') || e.getIn(['operation', 'deprecated']) || !1,
          method: n,
          security: a,
          isAuthorized: o,
          operationId: s,
          originalOperationId: I.getIn(['operation', '__originalOperationId']),
          showSummary: l,
          isShown: i,
          jumpToKey: c,
          allowTryItOut: u,
          request: p,
          displayOperationId: m,
          displayRequestDuration: f,
          isDeepLinkingEnabled: h,
          executeInProgress: this.state.executeInProgress,
          tryItOutEnabled: this.state.tryItOutEnabled,
        });
      return Ke.default.createElement(A, {
        operation: R,
        response: d,
        request: p,
        isShown: i,
        toggleShown: this.toggleShown,
        onTryoutClick: this.onTryoutClick,
        onResetClick: this.onResetClick,
        onCancelClick: this.onCancelClick,
        onExecute: this.onExecute,
        specPath: g,
        specActions: S,
        specSelectors: y,
        oas3Actions: O,
        oas3Selectors: k,
        layoutActions: w,
        layoutSelectors: b,
        authActions: C,
        authSelectors: x,
        getComponent: v,
        getConfigs: _,
        fn: N,
      });
    }
  }
  var va = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ default: () => ue.default });
  class OperationSummary extends Ke.PureComponent {
    static defaultProps = {
      operationProps: null,
      specPath: (0, Fe.List)(),
      summary: '',
    };
    render() {
      let {
          isShown: e,
          toggleShown: t,
          getComponent: r,
          authActions: n,
          authSelectors: a,
          operationProps: o,
          specPath: s,
        } = this.props,
        {
          summary: l,
          isAuthorized: i,
          method: c,
          op: u,
          showSummary: d,
          path: p,
          operationId: m,
          originalOperationId: f,
          displayOperationId: h,
        } = o.toJS(),
        { summary: g } = u,
        y = o.get('security');
      const S = r('authorizeOperationBtn', !0),
        v = r('OperationSummaryMethod'),
        _ = r('OperationSummaryPath'),
        b = r('JumpToPath', !0),
        w = r('CopyToClipboardBtn', !0),
        C = r('ArrowUpIcon'),
        x = r('ArrowDownIcon'),
        O = y && !!y.count(),
        k = O && 1 === y.size && y.first().isEmpty(),
        N = !O || k;
      return Ke.default.createElement(
        'div',
        { className: `opblock-summary opblock-summary-${c}` },
        Ke.default.createElement(
          'button',
          {
            'aria-expanded': e,
            className: 'opblock-summary-control',
            onClick: t,
          },
          Ke.default.createElement(v, { method: c }),
          Ke.default.createElement(
            'div',
            { className: 'opblock-summary-path-description-wrapper' },
            Ke.default.createElement(_, {
              getComponent: r,
              operationProps: o,
              specPath: s,
            }),
            d
              ? Ke.default.createElement(
                  'div',
                  { className: 'opblock-summary-description' },
                  (0, va.default)(g || l)
                )
              : null
          ),
          h && (f || m)
            ? Ke.default.createElement(
                'span',
                { className: 'opblock-summary-operation-id' },
                f || m
              )
            : null
        ),
        Ke.default.createElement(w, { textToCopy: `${s.get(1)}` }),
        N
          ? null
          : Ke.default.createElement(S, {
              isAuthorized: i,
              onClick: () => {
                const e = a.definitionsForRequirements(y);
                n.showDefinitions(e);
              },
            }),
        Ke.default.createElement(b, { path: s }),
        Ke.default.createElement(
          'button',
          {
            'aria-label': `${c} ${p.replace(/\//g, '​/')}`,
            className: 'opblock-control-arrow',
            'aria-expanded': e,
            tabIndex: '-1',
            onClick: t,
          },
          e
            ? Ke.default.createElement(C, { className: 'arrow' })
            : Ke.default.createElement(x, { className: 'arrow' })
        )
      );
    }
  }
  class OperationSummaryMethod extends Ke.PureComponent {
    static defaultProps = { operationProps: null };
    render() {
      let { method: e } = this.props;
      return Ke.default.createElement(
        'span',
        { className: 'opblock-summary-method' },
        e.toUpperCase()
      );
    }
  }
  class OperationSummaryPath extends Ke.PureComponent {
    render() {
      let { getComponent: e, operationProps: t } = this.props,
        {
          deprecated: r,
          isShown: n,
          path: a,
          tag: o,
          operationId: s,
          isDeepLinkingEnabled: l,
        } = t.toJS();
      const i = a.split(/(?=\/)/g);
      for (let e = 1; e < i.length; e += 2)
        i.splice(e, 0, Ke.default.createElement('wbr', { key: e }));
      const c = e('DeepLink');
      return Ke.default.createElement(
        'span',
        {
          className: r
            ? 'opblock-summary-path__deprecated'
            : 'opblock-summary-path',
          'data-path': a,
        },
        Ke.default.createElement(c, {
          enabled: l,
          isShown: n,
          path: createDeepLinkPath(`${o}/${s}`),
          text: i,
        })
      );
    }
  }
  var operation_extensions = e => {
    let { extensions: t, getComponent: r } = e,
      n = r('OperationExtRow');
    return Ke.default.createElement(
      'div',
      { className: 'opblock-section' },
      Ke.default.createElement(
        'div',
        { className: 'opblock-section-header' },
        Ke.default.createElement('h4', null, 'Extensions')
      ),
      Ke.default.createElement(
        'div',
        { className: 'table-container' },
        Ke.default.createElement(
          'table',
          null,
          Ke.default.createElement(
            'thead',
            null,
            Ke.default.createElement(
              'tr',
              null,
              Ke.default.createElement(
                'td',
                { className: 'col_header' },
                'Field'
              ),
              Ke.default.createElement(
                'td',
                { className: 'col_header' },
                'Value'
              )
            )
          ),
          Ke.default.createElement(
            'tbody',
            null,
            t.entrySeq().map(e => {
              let [t, r] = e;
              return Ke.default.createElement(n, {
                key: `${t}-${r}`,
                xKey: t,
                xVal: r,
              });
            })
          )
        )
      )
    );
  };
  var operation_extension_row = e => {
      let { xKey: t, xVal: r } = e;
      const n = r ? (r.toJS ? r.toJS() : r) : null;
      return Ke.default.createElement(
        'tr',
        null,
        Ke.default.createElement('td', null, t),
        Ke.default.createElement('td', null, JSON.stringify(n))
      );
    },
    _a = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => de.default }),
    ba = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => pe.default });
  const HighlightCode = e => {
    let {
      value: t,
      fileName: r,
      className: n,
      downloadable: a,
      getConfigs: o,
      canCopy: s,
      language: l,
    } = e;
    const i = (0, ct.default)(o) ? o() : null,
      c =
        !1 !== (0, Yt.default)(i, 'syntaxHighlight') &&
        (0, Yt.default)(i, 'syntaxHighlight.activated', !0),
      u = (0, Ke.useRef)(null);
    (0, Ke.useEffect)(() => {
      const e = Array.from(u.current.childNodes).filter(
        e => !!e.nodeType && e.classList.contains('microlight')
      );
      return (
        e.forEach(e =>
          e.addEventListener(
            'mousewheel',
            handlePreventYScrollingBeyondElement,
            { passive: !1 }
          )
        ),
        () => {
          e.forEach(e =>
            e.removeEventListener(
              'mousewheel',
              handlePreventYScrollingBeyondElement
            )
          );
        }
      );
    }, [t, n, l]);
    const handlePreventYScrollingBeyondElement = e => {
      const { target: t, deltaY: r } = e,
        { scrollHeight: n, offsetHeight: a, scrollTop: o } = t;
      n > a &&
        ((0 === o && r < 0) || (a + o >= n && r > 0)) &&
        e.preventDefault();
    };
    return Ke.default.createElement(
      'div',
      { className: 'highlight-code', ref: u },
      s &&
        Ke.default.createElement(
          'div',
          { className: 'copy-to-clipboard' },
          Ke.default.createElement(
            vr.CopyToClipboard,
            { text: t },
            Ke.default.createElement('button', null)
          )
        ),
      a
        ? Ke.default.createElement(
            'button',
            {
              className: 'download-contents',
              onClick: () => {
                (0, ba.default)(t, r);
              },
            },
            'Download'
          )
        : null,
      c
        ? Ke.default.createElement(
            _r.default,
            {
              language: l,
              className: (0, _a.default)(n, 'microlight'),
              style: getStyle(
                (0, Yt.default)(i, 'syntaxHighlight.theme', 'agate')
              ),
            },
            t
          )
        : Ke.default.createElement(
            'pre',
            { className: (0, _a.default)(n, 'microlight') },
            t
          )
    );
  };
  HighlightCode.defaultProps = { fileName: 'response.txt' };
  var wa = HighlightCode;
  class Responses extends Ke.default.Component {
    static defaultProps = {
      tryItOutResponse: null,
      produces: (0, Fe.fromJS)(['application/json']),
      displayRequestDuration: !1,
    };
    onChangeProducesWrapper = e =>
      this.props.specActions.changeProducesValue(
        [this.props.path, this.props.method],
        e
      );
    onResponseContentTypeChange = e => {
      let { controlsAcceptHeader: t, value: r } = e;
      const { oas3Actions: n, path: a, method: o } = this.props;
      t && n.setResponseContentType({ value: r, path: a, method: o });
    };
    render() {
      let {
          responses: e,
          tryItOutResponse: t,
          getComponent: r,
          getConfigs: n,
          specSelectors: a,
          fn: o,
          producesValue: s,
          displayRequestDuration: l,
          specPath: i,
          path: c,
          method: u,
          oas3Selectors: d,
          oas3Actions: p,
        } = this.props,
        m = (function defaultStatusCode(e) {
          let t = e.keySeq();
          return t.contains(Et)
            ? Et
            : t
                .filter(e => '2' === (e + '')[0])
                .sort()
                .first();
        })(e);
      const f = r('contentType'),
        h = r('liveResponse'),
        g = r('response');
      let y =
        this.props.produces && this.props.produces.size
          ? this.props.produces
          : Responses.defaultProps.produces;
      const S = a.isOAS3()
          ? (function getAcceptControllingResponse(e) {
              if (!Fe.default.OrderedMap.isOrderedMap(e)) return null;
              if (!e.size) return null;
              const t = e.find(
                  (e, t) =>
                    t.startsWith('2') &&
                    Object.keys(e.get('content') || {}).length > 0
                ),
                r = e.get('default') || Fe.default.OrderedMap(),
                n = (r.get('content') || Fe.default.OrderedMap())
                  .keySeq()
                  .toJS().length
                  ? r
                  : null;
              return t || n;
            })(e)
          : null,
        v = (function createHtmlReadyId(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : '_';
          return e.replace(/[^\w-]/g, t);
        })(`${u}${c}_responses`),
        _ = `${v}_select`;
      return Ke.default.createElement(
        'div',
        { className: 'responses-wrapper' },
        Ke.default.createElement(
          'div',
          { className: 'opblock-section-header' },
          Ke.default.createElement('h4', null, 'Responses'),
          a.isOAS3()
            ? null
            : Ke.default.createElement(
                'label',
                { htmlFor: _ },
                Ke.default.createElement('span', null, 'Response content type'),
                Ke.default.createElement(f, {
                  value: s,
                  ariaControls: v,
                  ariaLabel: 'Response content type',
                  className: 'execute-content-type',
                  contentTypes: y,
                  controlId: _,
                  onChange: this.onChangeProducesWrapper,
                })
              )
        ),
        Ke.default.createElement(
          'div',
          { className: 'responses-inner' },
          t
            ? Ke.default.createElement(
                'div',
                null,
                Ke.default.createElement(h, {
                  response: t,
                  getComponent: r,
                  getConfigs: n,
                  specSelectors: a,
                  path: this.props.path,
                  method: this.props.method,
                  displayRequestDuration: l,
                }),
                Ke.default.createElement('h4', null, 'Responses')
              )
            : null,
          Ke.default.createElement(
            'table',
            {
              'aria-live': 'polite',
              className: 'responses-table',
              id: v,
              role: 'region',
            },
            Ke.default.createElement(
              'thead',
              null,
              Ke.default.createElement(
                'tr',
                { className: 'responses-header' },
                Ke.default.createElement(
                  'td',
                  { className: 'col_header response-col_status' },
                  'Code'
                ),
                Ke.default.createElement(
                  'td',
                  { className: 'col_header response-col_description' },
                  'Description'
                ),
                a.isOAS3()
                  ? Ke.default.createElement(
                      'td',
                      { className: 'col col_header response-col_links' },
                      'Links'
                    )
                  : null
              )
            ),
            Ke.default.createElement(
              'tbody',
              null,
              e
                .entrySeq()
                .map(e => {
                  let [l, f] = e,
                    h = t && t.get('status') == l ? 'response_current' : '';
                  return Ke.default.createElement(g, {
                    key: l,
                    path: c,
                    method: u,
                    specPath: i.push(l),
                    isDefault: m === l,
                    fn: o,
                    className: h,
                    code: l,
                    response: f,
                    specSelectors: a,
                    controlsAcceptHeader: f === S,
                    onContentTypeChange: this.onResponseContentTypeChange,
                    contentType: s,
                    getConfigs: n,
                    activeExamplesKey: d.activeExamplesMember(
                      c,
                      u,
                      'responses',
                      l
                    ),
                    oas3Actions: p,
                    getComponent: r,
                  });
                })
                .toArray()
            )
          )
        )
      );
    }
  }
  function getKnownSyntaxHighlighterLanguage(e) {
    return (function canJsonParse(e) {
      try {
        return !!JSON.parse(e);
      } catch (e) {
        return null;
      }
    })(e)
      ? 'json'
      : null;
  }
  class Response extends Ke.default.Component {
    constructor(e, t) {
      super(e, t), (this.state = { responseContentType: '' });
    }
    static defaultProps = {
      response: (0, Fe.fromJS)({}),
      onContentTypeChange: () => {},
    };
    _onContentTypeChange = e => {
      const { onContentTypeChange: t, controlsAcceptHeader: r } = this.props;
      this.setState({ responseContentType: e }),
        t({ value: e, controlsAcceptHeader: r });
    };
    getTargetExamplesKey = () => {
      const { response: e, contentType: t, activeExamplesKey: r } = this.props,
        n = this.state.responseContentType || t,
        a = e
          .getIn(['content', n], (0, Fe.Map)({}))
          .get('examples', null)
          .keySeq()
          .first();
      return r || a;
    };
    render() {
      let {
          path: e,
          method: t,
          code: r,
          response: n,
          className: a,
          specPath: o,
          fn: s,
          getComponent: l,
          getConfigs: i,
          specSelectors: c,
          contentType: u,
          controlsAcceptHeader: d,
          oas3Actions: p,
        } = this.props,
        { inferSchema: m, getSampleSchema: f } = s,
        h = c.isOAS3();
      const { showExtensions: g } = i();
      let y = g ? getExtensions(n) : null,
        S = n.get('headers'),
        v = n.get('links');
      const _ = l('ResponseExtension'),
        b = l('headers'),
        w = l('highlightCode'),
        C = l('modelExample'),
        x = l('Markdown', !0),
        O = l('operationLink'),
        k = l('contentType'),
        N = l('ExamplesSelect'),
        A = l('Example');
      var I, R;
      const T = this.state.responseContentType || u,
        B = n.getIn(['content', T], (0, Fe.Map)({})),
        j = B.get('examples', null);
      if (h) {
        const e = B.get('schema');
        (I = e ? m(e.toJS()) : null),
          (R = e
            ? (0, Fe.List)([
                'content',
                this.state.responseContentType,
                'schema',
              ])
            : o);
      } else
        (I = n.get('schema')), (R = n.has('schema') ? o.push('schema') : o);
      let P,
        M,
        q = !1,
        L = { includeReadOnly: !0 };
      if (h)
        if (((M = B.get('schema')?.toJS()), j)) {
          const e = this.getTargetExamplesKey(),
            getMediaTypeExample = e => e.get('value');
          (P = getMediaTypeExample(j.get(e, (0, Fe.Map)({})))),
            void 0 === P && (P = getMediaTypeExample(j.values().next().value)),
            (q = !0);
        } else
          void 0 !== B.get('example') && ((P = B.get('example')), (q = !0));
      else {
        (M = I), (L = { ...L, includeWriteOnly: !0 });
        const e = n.getIn(['examples', T]);
        e && ((P = e), (q = !0));
      }
      let D = ((e, t, r) => {
        if (null != e) {
          let n = null;
          return (
            getKnownSyntaxHighlighterLanguage(e) && (n = 'json'),
            Ke.default.createElement(
              'div',
              null,
              Ke.default.createElement(t, {
                className: 'example',
                getConfigs: r,
                language: n,
                value: stringify(e),
              })
            )
          );
        }
        return null;
      })(f(M, T, L, q ? P : void 0), w, i);
      return Ke.default.createElement(
        'tr',
        { className: 'response ' + (a || ''), 'data-code': r },
        Ke.default.createElement('td', { className: 'response-col_status' }, r),
        Ke.default.createElement(
          'td',
          { className: 'response-col_description' },
          Ke.default.createElement(
            'div',
            { className: 'response-col_description__inner' },
            Ke.default.createElement(x, { source: n.get('description') })
          ),
          g && y.size
            ? y.entrySeq().map(e => {
                let [t, r] = e;
                return Ke.default.createElement(_, {
                  key: `${t}-${r}`,
                  xKey: t,
                  xVal: r,
                });
              })
            : null,
          h && n.get('content')
            ? Ke.default.createElement(
                'section',
                { className: 'response-controls' },
                Ke.default.createElement(
                  'div',
                  {
                    className: (0, _a.default)('response-control-media-type', {
                      'response-control-media-type--accept-controller': d,
                    }),
                  },
                  Ke.default.createElement(
                    'small',
                    { className: 'response-control-media-type__title' },
                    'Media type'
                  ),
                  Ke.default.createElement(k, {
                    value: this.state.responseContentType,
                    contentTypes: n.get('content')
                      ? n.get('content').keySeq()
                      : (0, Fe.Seq)(),
                    onChange: this._onContentTypeChange,
                    ariaLabel: 'Media Type',
                  }),
                  d
                    ? Ke.default.createElement(
                        'small',
                        {
                          className:
                            'response-control-media-type__accept-message',
                        },
                        'Controls ',
                        Ke.default.createElement('code', null, 'Accept'),
                        ' header.'
                      )
                    : null
                ),
                j
                  ? Ke.default.createElement(
                      'div',
                      { className: 'response-control-examples' },
                      Ke.default.createElement(
                        'small',
                        { className: 'response-control-examples__title' },
                        'Examples'
                      ),
                      Ke.default.createElement(N, {
                        examples: j,
                        currentExampleKey: this.getTargetExamplesKey(),
                        onSelect: n =>
                          p.setActiveExamplesMember({
                            name: n,
                            pathMethod: [e, t],
                            contextType: 'responses',
                            contextName: r,
                          }),
                        showLabels: !1,
                      })
                    )
                  : null
              )
            : null,
          D || I
            ? Ke.default.createElement(C, {
                specPath: R,
                getComponent: l,
                getConfigs: i,
                specSelectors: c,
                schema: fromJSOrdered(I),
                example: D,
                includeReadOnly: !0,
              })
            : null,
          h && j
            ? Ke.default.createElement(A, {
                example: j.get(this.getTargetExamplesKey(), (0, Fe.Map)({})),
                getComponent: l,
                getConfigs: i,
                omitValue: !0,
              })
            : null,
          S
            ? Ke.default.createElement(b, { headers: S, getComponent: l })
            : null
        ),
        h
          ? Ke.default.createElement(
              'td',
              { className: 'response-col_links' },
              v
                ? v
                    .toSeq()
                    .entrySeq()
                    .map(e => {
                      let [t, r] = e;
                      return Ke.default.createElement(O, {
                        key: t,
                        name: t,
                        link: r,
                        getComponent: l,
                      });
                    })
                : Ke.default.createElement('i', null, 'No links')
            )
          : null
      );
    }
  }
  var response_extension = e => {
      let { xKey: t, xVal: r } = e;
      return Ke.default.createElement(
        'div',
        { className: 'response__extension' },
        t,
        ': ',
        String(r)
      );
    },
    Ca = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => me.default }),
    xa = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => fe.default });
  class ResponseBody extends Ke.default.PureComponent {
    state = { parsedContent: null };
    updateParsedContent = e => {
      const { content: t } = this.props;
      if (e !== t)
        if (t && t instanceof Blob) {
          var r = new FileReader();
          (r.onload = () => {
            this.setState({ parsedContent: r.result });
          }),
            r.readAsText(t);
        } else this.setState({ parsedContent: t.toString() });
    };
    componentDidMount() {
      this.updateParsedContent(null);
    }
    componentDidUpdate(e) {
      this.updateParsedContent(e.content);
    }
    render() {
      let {
        content: e,
        contentType: t,
        url: r,
        headers: n = {},
        getConfigs: a,
        getComponent: o,
      } = this.props;
      const { parsedContent: s } = this.state,
        l = o('highlightCode'),
        i = 'response_' + new Date().getTime();
      let c, u;
      if (
        ((r = r || ''),
        (/^application\/octet-stream/i.test(t) ||
          (n['Content-Disposition'] &&
            /attachment/i.test(n['Content-Disposition'])) ||
          (n['content-disposition'] &&
            /attachment/i.test(n['content-disposition'])) ||
          (n['Content-Description'] &&
            /File Transfer/i.test(n['Content-Description'])) ||
          (n['content-description'] &&
            /File Transfer/i.test(n['content-description']))) &&
          (e.size > 0 || e.length > 0))
      )
        if ('Blob' in window) {
          let a = t || 'text/html',
            o = e instanceof Blob ? e : new Blob([e], { type: a }),
            s = window.URL.createObjectURL(o),
            l = [a, r.substr(r.lastIndexOf('/') + 1), s].join(':'),
            i = n['content-disposition'] || n['Content-Disposition'];
          if (void 0 !== i) {
            let e = (function extractFileNameFromContentDispositionHeader(e) {
              let t;
              if (
                ([
                  /filename\*=[^']+'\w*'"([^"]+)";?/i,
                  /filename\*=[^']+'\w*'([^;]+);?/i,
                  /filename="([^;]*);?"/i,
                  /filename=([^;]*);?/i,
                ].some(r => ((t = r.exec(e)), null !== t)),
                null !== t && t.length > 1)
              )
                try {
                  return decodeURIComponent(t[1]);
                } catch (e) {
                  console.error(e);
                }
              return null;
            })(i);
            null !== e && (l = e);
          }
          u =
            nt.navigator && nt.navigator.msSaveOrOpenBlob
              ? Ke.default.createElement(
                  'div',
                  null,
                  Ke.default.createElement(
                    'a',
                    {
                      href: s,
                      onClick: () => nt.navigator.msSaveOrOpenBlob(o, l),
                    },
                    'Download file'
                  )
                )
              : Ke.default.createElement(
                  'div',
                  null,
                  Ke.default.createElement(
                    'a',
                    { href: s, download: l },
                    'Download file'
                  )
                );
        } else
          u = Ke.default.createElement(
            'pre',
            { className: 'microlight' },
            'Download headers detected but your browser does not support downloading binary via XHR (Blob).'
          );
      else if (/json/i.test(t)) {
        let t = null;
        getKnownSyntaxHighlighterLanguage(e) && (t = 'json');
        try {
          c = JSON.stringify(JSON.parse(e), null, '  ');
        } catch (t) {
          c = "can't parse JSON.  Raw result:\n\n" + e;
        }
        u = Ke.default.createElement(l, {
          language: t,
          downloadable: !0,
          fileName: `${i}.json`,
          value: c,
          getConfigs: a,
          canCopy: !0,
        });
      } else
        /xml/i.test(t)
          ? ((c = (0, Ca.default)(e, {
              textNodesOnSameLine: !0,
              indentor: '  ',
            })),
            (u = Ke.default.createElement(l, {
              downloadable: !0,
              fileName: `${i}.xml`,
              value: c,
              getConfigs: a,
              canCopy: !0,
            })))
          : (u =
              'text/html' === (0, xa.default)(t) || /text\/plain/.test(t)
                ? Ke.default.createElement(l, {
                    downloadable: !0,
                    fileName: `${i}.html`,
                    value: e,
                    getConfigs: a,
                    canCopy: !0,
                  })
                : 'text/csv' === (0, xa.default)(t) || /text\/csv/.test(t)
                ? Ke.default.createElement(l, {
                    downloadable: !0,
                    fileName: `${i}.csv`,
                    value: e,
                    getConfigs: a,
                    canCopy: !0,
                  })
                : /^image\//i.test(t)
                ? t.includes('svg')
                  ? Ke.default.createElement('div', null, ' ', e, ' ')
                  : Ke.default.createElement('img', {
                      src: window.URL.createObjectURL(e),
                    })
                : /^audio\//i.test(t)
                ? Ke.default.createElement(
                    'pre',
                    { className: 'microlight' },
                    Ke.default.createElement(
                      'audio',
                      { controls: !0, key: r },
                      Ke.default.createElement('source', { src: r, type: t })
                    )
                  )
                : 'string' == typeof e
                ? Ke.default.createElement(l, {
                    downloadable: !0,
                    fileName: `${i}.txt`,
                    value: e,
                    getConfigs: a,
                    canCopy: !0,
                  })
                : e.size > 0
                ? s
                  ? Ke.default.createElement(
                      'div',
                      null,
                      Ke.default.createElement(
                        'p',
                        { className: 'i' },
                        'Unrecognized response type; displaying content as text.'
                      ),
                      Ke.default.createElement(l, {
                        downloadable: !0,
                        fileName: `${i}.txt`,
                        value: s,
                        getConfigs: a,
                        canCopy: !0,
                      })
                    )
                  : Ke.default.createElement(
                      'p',
                      { className: 'i' },
                      'Unrecognized response type; unable to display.'
                    )
                : null);
      return u
        ? Ke.default.createElement(
            'div',
            null,
            Ke.default.createElement('h5', null, 'Response body'),
            u
          )
        : null;
    }
  }
  class Parameters extends Ke.Component {
    constructor(e) {
      super(e), (this.state = { callbackVisible: !1, parametersVisible: !0 });
    }
    static defaultProps = {
      onTryoutClick: Function.prototype,
      onCancelClick: Function.prototype,
      tryItOutEnabled: !1,
      allowTryItOut: !0,
      onChangeKey: [],
      specPath: [],
    };
    onChange = (e, t, r) => {
      let {
        specActions: { changeParamByIdentity: n },
        onChangeKey: a,
      } = this.props;
      n(a, e, t, r);
    };
    onChangeConsumesWrapper = e => {
      let {
        specActions: { changeConsumesValue: t },
        onChangeKey: r,
      } = this.props;
      t(r, e);
    };
    toggleTab = e =>
      'parameters' === e
        ? this.setState({ parametersVisible: !0, callbackVisible: !1 })
        : 'callbacks' === e
        ? this.setState({ callbackVisible: !0, parametersVisible: !1 })
        : void 0;
    onChangeMediaType = e => {
      let { value: t, pathMethod: r } = e,
        { specActions: n, oas3Selectors: a, oas3Actions: o } = this.props;
      const s = a.hasUserEditedBody(...r),
        l = a.shouldRetainRequestBodyValue(...r);
      o.setRequestContentType({ value: t, pathMethod: r }),
        o.initRequestBodyValidateError({ pathMethod: r }),
        s ||
          (l || o.setRequestBodyValue({ value: void 0, pathMethod: r }),
          n.clearResponse(...r),
          n.clearRequest(...r),
          n.clearValidateParams(r));
    };
    render() {
      let {
        onTryoutClick: e,
        onResetClick: t,
        parameters: r,
        allowTryItOut: n,
        tryItOutEnabled: a,
        specPath: o,
        fn: s,
        getComponent: l,
        getConfigs: i,
        specSelectors: c,
        specActions: u,
        pathMethod: d,
        oas3Actions: p,
        oas3Selectors: m,
        operation: f,
      } = this.props;
      const h = l('parameterRow'),
        g = l('TryItOutButton'),
        y = l('contentType'),
        S = l('Callbacks', !0),
        v = l('RequestBody', !0),
        _ = a && n,
        b = c.isOAS3(),
        w = f.get('requestBody'),
        C = Object.values(
          r.reduce((e, t) => {
            const r = t.get('in');
            return (e[r] ??= []), e[r].push(t), e;
          }, {})
        ).reduce((e, t) => e.concat(t), []);
      return Ke.default.createElement(
        'div',
        { className: 'opblock-section' },
        Ke.default.createElement(
          'div',
          { className: 'opblock-section-header' },
          b
            ? Ke.default.createElement(
                'div',
                { className: 'tab-header' },
                Ke.default.createElement(
                  'div',
                  {
                    onClick: () => this.toggleTab('parameters'),
                    className: `tab-item ${
                      this.state.parametersVisible && 'active'
                    }`,
                  },
                  Ke.default.createElement(
                    'h4',
                    { className: 'opblock-title' },
                    Ke.default.createElement('span', null, 'Parameters')
                  )
                ),
                f.get('callbacks')
                  ? Ke.default.createElement(
                      'div',
                      {
                        onClick: () => this.toggleTab('callbacks'),
                        className: `tab-item ${
                          this.state.callbackVisible && 'active'
                        }`,
                      },
                      Ke.default.createElement(
                        'h4',
                        { className: 'opblock-title' },
                        Ke.default.createElement('span', null, 'Callbacks')
                      )
                    )
                  : null
              )
            : Ke.default.createElement(
                'div',
                { className: 'tab-header' },
                Ke.default.createElement(
                  'h4',
                  { className: 'opblock-title' },
                  'Parameters'
                )
              ),
          n
            ? Ke.default.createElement(g, {
                isOAS3: c.isOAS3(),
                hasUserEditedBody: m.hasUserEditedBody(...d),
                enabled: a,
                onCancelClick: this.props.onCancelClick,
                onTryoutClick: e,
                onResetClick: () => t(d),
              })
            : null
        ),
        this.state.parametersVisible
          ? Ke.default.createElement(
              'div',
              { className: 'parameters-container' },
              C.length
                ? Ke.default.createElement(
                    'div',
                    { className: 'table-container' },
                    Ke.default.createElement(
                      'table',
                      { className: 'parameters' },
                      Ke.default.createElement(
                        'thead',
                        null,
                        Ke.default.createElement(
                          'tr',
                          null,
                          Ke.default.createElement(
                            'th',
                            { className: 'col_header parameters-col_name' },
                            'Name'
                          ),
                          Ke.default.createElement(
                            'th',
                            {
                              className:
                                'col_header parameters-col_description',
                            },
                            'Description'
                          )
                        )
                      ),
                      Ke.default.createElement(
                        'tbody',
                        null,
                        C.map((e, t) =>
                          Ke.default.createElement(h, {
                            fn: s,
                            specPath: o.push(t.toString()),
                            getComponent: l,
                            getConfigs: i,
                            rawParam: e,
                            param: c.parameterWithMetaByIdentity(d, e),
                            key: `${e.get('in')}.${e.get('name')}`,
                            onChange: this.onChange,
                            onChangeConsumes: this.onChangeConsumesWrapper,
                            specSelectors: c,
                            specActions: u,
                            oas3Actions: p,
                            oas3Selectors: m,
                            pathMethod: d,
                            isExecute: _,
                          })
                        )
                      )
                    )
                  )
                : Ke.default.createElement(
                    'div',
                    { className: 'opblock-description-wrapper' },
                    Ke.default.createElement('p', null, 'No parameters')
                  )
            )
          : null,
        this.state.callbackVisible
          ? Ke.default.createElement(
              'div',
              { className: 'callbacks-container opblock-description-wrapper' },
              Ke.default.createElement(S, {
                callbacks: (0, Fe.Map)(f.get('callbacks')),
                specPath: o.slice(0, -1).push('callbacks'),
              })
            )
          : null,
        b &&
          w &&
          this.state.parametersVisible &&
          Ke.default.createElement(
            'div',
            { className: 'opblock-section opblock-section-request-body' },
            Ke.default.createElement(
              'div',
              { className: 'opblock-section-header' },
              Ke.default.createElement(
                'h4',
                {
                  className: `opblock-title parameter__name ${
                    w.get('required') && 'required'
                  }`,
                },
                'Request body'
              ),
              Ke.default.createElement(
                'label',
                null,
                Ke.default.createElement(y, {
                  value: m.requestContentType(...d),
                  contentTypes: w.get('content', (0, Fe.List)()).keySeq(),
                  onChange: e => {
                    this.onChangeMediaType({ value: e, pathMethod: d });
                  },
                  className: 'body-param-content-type',
                  ariaLabel: 'Request content type',
                })
              )
            ),
            Ke.default.createElement(
              'div',
              { className: 'opblock-description-wrapper' },
              Ke.default.createElement(v, {
                setRetainRequestBodyValueFlag: e =>
                  p.setRetainRequestBodyValueFlag({ value: e, pathMethod: d }),
                userHasEditedBody: m.hasUserEditedBody(...d),
                specPath: o.slice(0, -1).push('requestBody'),
                requestBody: w,
                requestBodyValue: m.requestBodyValue(...d),
                requestBodyInclusionSetting: m.requestBodyInclusionSetting(
                  ...d
                ),
                requestBodyErrors: m.requestBodyErrors(...d),
                isExecute: _,
                getConfigs: i,
                activeExamplesKey: m.activeExamplesMember(
                  ...d,
                  'requestBody',
                  'requestBody'
                ),
                updateActiveExamplesKey: e => {
                  this.props.oas3Actions.setActiveExamplesMember({
                    name: e,
                    pathMethod: this.props.pathMethod,
                    contextType: 'requestBody',
                    contextName: 'requestBody',
                  });
                },
                onChange: (e, t) => {
                  if (t) {
                    const r = m.requestBodyValue(...d),
                      n = Fe.Map.isMap(r) ? r : (0, Fe.Map)();
                    return p.setRequestBodyValue({
                      pathMethod: d,
                      value: n.setIn(t, e),
                    });
                  }
                  p.setRequestBodyValue({ value: e, pathMethod: d });
                },
                onChangeIncludeEmpty: (e, t) => {
                  p.setRequestBodyInclusion({
                    pathMethod: d,
                    value: t,
                    name: e,
                  });
                },
                contentType: m.requestContentType(...d),
              })
            )
          )
      );
    }
  }
  var parameter_extension = e => {
    let { xKey: t, xVal: r } = e;
    return Ke.default.createElement(
      'div',
      { className: 'parameter__extension' },
      t,
      ': ',
      String(r)
    );
  };
  const Oa = { onChange: () => {}, isIncludedOptions: {} };
  class ParameterIncludeEmpty extends Ke.Component {
    static defaultProps = Oa;
    componentDidMount() {
      const { isIncludedOptions: e, onChange: t } = this.props,
        { shouldDispatchInit: r, defaultValue: n } = e;
      r && t(n);
    }
    onCheckboxChange = e => {
      const { onChange: t } = this.props;
      t(e.target.checked);
    };
    render() {
      let { isIncluded: e, isDisabled: t } = this.props;
      return Ke.default.createElement(
        'div',
        null,
        Ke.default.createElement(
          'label',
          {
            className: (0, _a.default)('parameter__empty_value_toggle', {
              disabled: t,
            }),
          },
          Ke.default.createElement('input', {
            type: 'checkbox',
            disabled: t,
            checked: !t && e,
            onChange: this.onCheckboxChange,
          }),
          'Send empty value'
        )
      );
    }
  }
  class ParameterRow extends Ke.Component {
    constructor(e, t) {
      super(e, t), this.setDefaultValue();
    }
    UNSAFE_componentWillReceiveProps(e) {
      let t,
        { specSelectors: r, pathMethod: n, rawParam: a } = e,
        o = r.isOAS3(),
        s = r.parameterWithMetaByIdentity(n, a) || new Fe.Map();
      if (((s = s.isEmpty() ? a : s), o)) {
        let { schema: e } = getParameterSchema(s, { isOAS3: o });
        t = e ? e.get('enum') : void 0;
      } else t = s ? s.get('enum') : void 0;
      let l,
        i = s ? s.get('value') : void 0;
      void 0 !== i
        ? (l = i)
        : a.get('required') && t && t.size && (l = t.first()),
        void 0 !== l &&
          l !== i &&
          this.onChangeWrapper(
            (function numberToString(e) {
              return 'number' == typeof e ? e.toString() : e;
            })(l)
          ),
        this.setDefaultValue();
    }
    onChangeWrapper = (() => {
      var e = this;
      return function (t) {
        let r,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          { onChange: a, rawParam: o } = e.props;
        return (r = '' === t || (t && 0 === t.size) ? null : t), a(o, r, n);
      };
    })();
    _onExampleSelect = e => {
      this.props.oas3Actions.setActiveExamplesMember({
        name: e,
        pathMethod: this.props.pathMethod,
        contextType: 'parameters',
        contextName: this.getParamKey(),
      });
    };
    onChangeIncludeEmpty = e => {
      let { specActions: t, param: r, pathMethod: n } = this.props;
      const a = r.get('name'),
        o = r.get('in');
      return t.updateEmptyParamInclusion(n, a, o, e);
    };
    setDefaultValue = () => {
      let {
        specSelectors: e,
        pathMethod: t,
        rawParam: r,
        oas3Selectors: n,
        fn: a,
      } = this.props;
      const o = e.parameterWithMetaByIdentity(t, r) || (0, Fe.Map)(),
        { schema: s } = getParameterSchema(o, { isOAS3: e.isOAS3() }),
        l = o
          .get('content', (0, Fe.Map)())
          .keySeq()
          .first(),
        i = s ? a.getSampleSchema(s.toJS(), l, { includeWriteOnly: !0 }) : null;
      if (o && void 0 === o.get('value') && 'body' !== o.get('in')) {
        let r;
        if (e.isSwagger2())
          r =
            void 0 !== o.get('x-example')
              ? o.get('x-example')
              : void 0 !== o.getIn(['schema', 'example'])
              ? o.getIn(['schema', 'example'])
              : s && s.getIn(['default']);
        else if (e.isOAS3()) {
          const e = n.activeExamplesMember(
            ...t,
            'parameters',
            this.getParamKey()
          );
          r =
            void 0 !== o.getIn(['examples', e, 'value'])
              ? o.getIn(['examples', e, 'value'])
              : void 0 !== o.getIn(['content', l, 'example'])
              ? o.getIn(['content', l, 'example'])
              : void 0 !== o.get('example')
              ? o.get('example')
              : void 0 !== (s && s.get('example'))
              ? s && s.get('example')
              : void 0 !== (s && s.get('default'))
              ? s && s.get('default')
              : o.get('default');
        }
        void 0 === r || Fe.List.isList(r) || (r = stringify(r)),
          void 0 !== r
            ? this.onChangeWrapper(r)
            : s &&
              'object' === s.get('type') &&
              i &&
              !o.get('examples') &&
              this.onChangeWrapper(Fe.List.isList(i) ? i : stringify(i));
      }
    };
    getParamKey() {
      const { param: e } = this.props;
      return e ? `${e.get('name')}-${e.get('in')}` : null;
    }
    render() {
      let {
          param: e,
          rawParam: t,
          getComponent: r,
          getConfigs: n,
          isExecute: a,
          fn: o,
          onChangeConsumes: s,
          specSelectors: l,
          pathMethod: i,
          specPath: c,
          oas3Selectors: u,
        } = this.props,
        d = l.isOAS3();
      const { showExtensions: p, showCommonExtensions: m } = n();
      if ((e || (e = t), !t)) return null;
      const f = r('JsonSchemaForm'),
        h = r('ParamBody');
      let g = e.get('in'),
        y =
          'body' !== g
            ? null
            : Ke.default.createElement(h, {
                getComponent: r,
                getConfigs: n,
                fn: o,
                param: e,
                consumes: l.consumesOptionsFor(i),
                consumesValue: l.contentTypeValues(i).get('requestContentType'),
                onChange: this.onChangeWrapper,
                onChangeConsumes: s,
                isExecute: a,
                specSelectors: l,
                pathMethod: i,
              });
      const S = r('modelExample'),
        v = r('Markdown', !0),
        _ = r('ParameterExt'),
        b = r('ParameterIncludeEmpty'),
        w = r('ExamplesSelectValueRetainer'),
        C = r('Example');
      let x,
        O,
        k,
        N,
        { schema: A } = getParameterSchema(e, { isOAS3: d }),
        I = l.parameterWithMetaByIdentity(i, t) || (0, Fe.Map)(),
        R = A ? A.get('format') : null,
        T = A ? A.get('type') : null,
        B = A ? A.getIn(['items', 'type']) : null,
        j = 'formData' === g,
        P = 'FormData' in nt,
        M = e.get('required'),
        q = I ? I.get('value') : '',
        L = m ? getCommonExtensions(A) : null,
        D = p ? getExtensions(e) : null,
        U = !1;
      return (
        void 0 !== e && A && (x = A.get('items')),
        void 0 !== x
          ? ((O = x.get('enum')), (k = x.get('default')))
          : A && (O = A.get('enum')),
        O && O.size && O.size > 0 && (U = !0),
        void 0 !== e &&
          (A && (k = A.get('default')),
          void 0 === k && (k = e.get('default')),
          (N = e.get('example')),
          void 0 === N && (N = e.get('x-example'))),
        Ke.default.createElement(
          'tr',
          { 'data-param-name': e.get('name'), 'data-param-in': e.get('in') },
          Ke.default.createElement(
            'td',
            { className: 'parameters-col_name' },
            Ke.default.createElement(
              'div',
              { className: M ? 'parameter__name required' : 'parameter__name' },
              e.get('name'),
              M ? Ke.default.createElement('span', null, ' *') : null
            ),
            Ke.default.createElement(
              'div',
              { className: 'parameter__type' },
              T,
              B && `[${B}]`,
              R &&
                Ke.default.createElement(
                  'span',
                  { className: 'prop-format' },
                  '($',
                  R,
                  ')'
                )
            ),
            Ke.default.createElement(
              'div',
              { className: 'parameter__deprecated' },
              d && e.get('deprecated') ? 'deprecated' : null
            ),
            Ke.default.createElement(
              'div',
              { className: 'parameter__in' },
              '(',
              e.get('in'),
              ')'
            ),
            m && L.size
              ? L.entrySeq().map(e => {
                  let [t, r] = e;
                  return Ke.default.createElement(_, {
                    key: `${t}-${r}`,
                    xKey: t,
                    xVal: r,
                  });
                })
              : null,
            p && D.size
              ? D.entrySeq().map(e => {
                  let [t, r] = e;
                  return Ke.default.createElement(_, {
                    key: `${t}-${r}`,
                    xKey: t,
                    xVal: r,
                  });
                })
              : null
          ),
          Ke.default.createElement(
            'td',
            { className: 'parameters-col_description' },
            e.get('description')
              ? Ke.default.createElement(v, { source: e.get('description') })
              : null,
            (!y && a) || !U
              ? null
              : Ke.default.createElement(v, {
                  className: 'parameter__enum',
                  source:
                    '<i>Available values</i> : ' +
                    O.map(function (e) {
                      return e;
                    })
                      .toArray()
                      .join(', '),
                }),
            (!y && a) || void 0 === k
              ? null
              : Ke.default.createElement(v, {
                  className: 'parameter__default',
                  source: '<i>Default value</i> : ' + k,
                }),
            (!y && a) || void 0 === N
              ? null
              : Ke.default.createElement(v, {
                  source: '<i>Example</i> : ' + N,
                }),
            j &&
              !P &&
              Ke.default.createElement(
                'div',
                null,
                'Error: your browser does not support FormData'
              ),
            d && e.get('examples')
              ? Ke.default.createElement(
                  'section',
                  { className: 'parameter-controls' },
                  Ke.default.createElement(w, {
                    examples: e.get('examples'),
                    onSelect: this._onExampleSelect,
                    updateValue: this.onChangeWrapper,
                    getComponent: r,
                    defaultToFirstExample: !0,
                    currentKey: u.activeExamplesMember(
                      ...i,
                      'parameters',
                      this.getParamKey()
                    ),
                    currentUserInputValue: q,
                  })
                )
              : null,
            y
              ? null
              : Ke.default.createElement(f, {
                  fn: o,
                  getComponent: r,
                  value: q,
                  required: M,
                  disabled: !a,
                  description: e.get('name'),
                  onChange: this.onChangeWrapper,
                  errors: I.get('errors'),
                  schema: A,
                }),
            y && A
              ? Ke.default.createElement(S, {
                  getComponent: r,
                  specPath: c.push('schema'),
                  getConfigs: n,
                  isExecute: a,
                  specSelectors: l,
                  schema: A,
                  example: y,
                  includeWriteOnly: !0,
                })
              : null,
            !y && a && e.get('allowEmptyValue')
              ? Ke.default.createElement(b, {
                  onChange: this.onChangeIncludeEmpty,
                  isIncluded: l.parameterInclusionSettingFor(
                    i,
                    e.get('name'),
                    e.get('in')
                  ),
                  isDisabled: !isEmptyValue(q),
                })
              : null,
            d && e.get('examples')
              ? Ke.default.createElement(C, {
                  example: e.getIn([
                    'examples',
                    u.activeExamplesMember(
                      ...i,
                      'parameters',
                      this.getParamKey()
                    ),
                  ]),
                  getComponent: r,
                  getConfigs: n,
                })
              : null
          )
        )
      );
    }
  }
  class Execute extends Ke.Component {
    handleValidateParameters = () => {
      let { specSelectors: e, specActions: t, path: r, method: n } = this.props;
      return t.validateParams([r, n]), e.validateBeforeExecute([r, n]);
    };
    handleValidateRequestBody = () => {
      let {
          path: e,
          method: t,
          specSelectors: r,
          oas3Selectors: n,
          oas3Actions: a,
        } = this.props,
        o = { missingBodyValue: !1, missingRequiredKeys: [] };
      a.clearRequestBodyValidateError({ path: e, method: t });
      let s = r.getOAS3RequiredRequestBodyContentType([e, t]),
        l = n.requestBodyValue(e, t),
        i = n.validateBeforeExecute([e, t]),
        c = n.requestContentType(e, t);
      if (!i)
        return (
          (o.missingBodyValue = !0),
          a.setRequestBodyValidateError({
            path: e,
            method: t,
            validationErrors: o,
          }),
          !1
        );
      if (!s) return !0;
      let u = n.validateShallowRequired({
        oas3RequiredRequestBodyContentType: s,
        oas3RequestContentType: c,
        oas3RequestBodyValue: l,
      });
      return (
        !u ||
        u.length < 1 ||
        (u.forEach(e => {
          o.missingRequiredKeys.push(e);
        }),
        a.setRequestBodyValidateError({
          path: e,
          method: t,
          validationErrors: o,
        }),
        !1)
      );
    };
    handleValidationResultPass = () => {
      let { specActions: e, operation: t, path: r, method: n } = this.props;
      this.props.onExecute && this.props.onExecute(),
        e.execute({ operation: t, path: r, method: n });
    };
    handleValidationResultFail = () => {
      let { specActions: e, path: t, method: r } = this.props;
      e.clearValidateParams([t, r]),
        setTimeout(() => {
          e.validateParams([t, r]);
        }, 40);
    };
    handleValidationResult = e => {
      e ? this.handleValidationResultPass() : this.handleValidationResultFail();
    };
    onClick = () => {
      let e = this.handleValidateParameters(),
        t = this.handleValidateRequestBody(),
        r = e && t;
      this.handleValidationResult(r);
    };
    onChangeProducesWrapper = e =>
      this.props.specActions.changeProducesValue(
        [this.props.path, this.props.method],
        e
      );
    render() {
      const { disabled: e } = this.props;
      return Ke.default.createElement(
        'button',
        {
          className: 'btn execute opblock-control__btn',
          onClick: this.onClick,
          disabled: e,
        },
        'Execute'
      );
    }
  }
  class headers_Headers extends Ke.default.Component {
    render() {
      let { headers: e, getComponent: t } = this.props;
      const r = t('Property'),
        n = t('Markdown', !0);
      return e && e.size
        ? Ke.default.createElement(
            'div',
            { className: 'headers-wrapper' },
            Ke.default.createElement(
              'h4',
              { className: 'headers__title' },
              'Headers:'
            ),
            Ke.default.createElement(
              'table',
              { className: 'headers' },
              Ke.default.createElement(
                'thead',
                null,
                Ke.default.createElement(
                  'tr',
                  { className: 'header-row' },
                  Ke.default.createElement(
                    'th',
                    { className: 'header-col' },
                    'Name'
                  ),
                  Ke.default.createElement(
                    'th',
                    { className: 'header-col' },
                    'Description'
                  ),
                  Ke.default.createElement(
                    'th',
                    { className: 'header-col' },
                    'Type'
                  )
                )
              ),
              Ke.default.createElement(
                'tbody',
                null,
                e
                  .entrySeq()
                  .map(e => {
                    let [t, a] = e;
                    if (!Fe.default.Map.isMap(a)) return null;
                    const o = a.get('description'),
                      s = a.getIn(['schema'])
                        ? a.getIn(['schema', 'type'])
                        : a.getIn(['type']),
                      l = a.getIn(['schema', 'example']);
                    return Ke.default.createElement(
                      'tr',
                      { key: t },
                      Ke.default.createElement(
                        'td',
                        { className: 'header-col' },
                        t
                      ),
                      Ke.default.createElement(
                        'td',
                        { className: 'header-col' },
                        o ? Ke.default.createElement(n, { source: o }) : null
                      ),
                      Ke.default.createElement(
                        'td',
                        { className: 'header-col' },
                        s,
                        ' ',
                        l
                          ? Ke.default.createElement(r, {
                              propKey: 'Example',
                              propVal: l,
                              propClass: 'header-example',
                            })
                          : null
                      )
                    );
                  })
                  .toArray()
              )
            )
          )
        : null;
    }
  }
  class Errors extends Ke.default.Component {
    render() {
      let {
        editorActions: e,
        errSelectors: t,
        layoutSelectors: r,
        layoutActions: n,
        getComponent: a,
      } = this.props;
      const o = a('Collapse');
      if (e && e.jumpToLine) var s = e.jumpToLine;
      let l = t
        .allErrors()
        .filter(e => 'thrown' === e.get('type') || 'error' === e.get('level'));
      if (!l || l.count() < 1) return null;
      let i = r.isShown(['errorPane'], !0),
        c = l.sortBy(e => e.get('line'));
      return Ke.default.createElement(
        'pre',
        { className: 'errors-wrapper' },
        Ke.default.createElement(
          'hgroup',
          { className: 'error' },
          Ke.default.createElement(
            'h4',
            { className: 'errors__title' },
            'Errors'
          ),
          Ke.default.createElement(
            'button',
            {
              className: 'btn errors__clear-btn',
              onClick: () => n.show(['errorPane'], !i),
            },
            i ? 'Hide' : 'Show'
          )
        ),
        Ke.default.createElement(
          o,
          { isOpened: i, animated: !0 },
          Ke.default.createElement(
            'div',
            { className: 'errors' },
            c.map((e, t) => {
              let r = e.get('type');
              return 'thrown' === r || 'auth' === r
                ? Ke.default.createElement(ThrownErrorItem, {
                    key: t,
                    error: e.get('error') || e,
                    jumpToLine: s,
                  })
                : 'spec' === r
                ? Ke.default.createElement(SpecErrorItem, {
                    key: t,
                    error: e,
                    jumpToLine: s,
                  })
                : void 0;
            })
          )
        )
      );
    }
  }
  const ThrownErrorItem = e => {
      let { error: t, jumpToLine: r } = e;
      if (!t) return null;
      let n = t.get('line');
      return Ke.default.createElement(
        'div',
        { className: 'error-wrapper' },
        t
          ? Ke.default.createElement(
              'div',
              null,
              Ke.default.createElement(
                'h4',
                null,
                t.get('source') && t.get('level')
                  ? toTitleCase(t.get('source')) + ' ' + t.get('level')
                  : '',
                t.get('path')
                  ? Ke.default.createElement(
                      'small',
                      null,
                      ' at ',
                      t.get('path')
                    )
                  : null
              ),
              Ke.default.createElement(
                'span',
                { className: 'message thrown' },
                t.get('message')
              ),
              Ke.default.createElement(
                'div',
                { className: 'error-line' },
                n && r
                  ? Ke.default.createElement(
                      'a',
                      { onClick: r.bind(null, n) },
                      'Jump to line ',
                      n
                    )
                  : null
              )
            )
          : null
      );
    },
    SpecErrorItem = e => {
      let { error: t, jumpToLine: r } = e,
        n = null;
      return (
        t.get('path')
          ? (n = Fe.List.isList(t.get('path'))
              ? Ke.default.createElement(
                  'small',
                  null,
                  'at ',
                  t.get('path').join('.')
                )
              : Ke.default.createElement('small', null, 'at ', t.get('path')))
          : t.get('line') &&
            !r &&
            (n = Ke.default.createElement(
              'small',
              null,
              'on line ',
              t.get('line')
            )),
        Ke.default.createElement(
          'div',
          { className: 'error-wrapper' },
          t
            ? Ke.default.createElement(
                'div',
                null,
                Ke.default.createElement(
                  'h4',
                  null,
                  toTitleCase(t.get('source')) + ' ' + t.get('level'),
                  ' ',
                  n
                ),
                Ke.default.createElement(
                  'span',
                  { className: 'message' },
                  t.get('message')
                ),
                Ke.default.createElement(
                  'div',
                  { className: 'error-line' },
                  r
                    ? Ke.default.createElement(
                        'a',
                        { onClick: r.bind(null, t.get('line')) },
                        'Jump to line ',
                        t.get('line')
                      )
                    : null
                )
              )
            : null
        )
      );
    };
  function toTitleCase(e) {
    return (e || '')
      .split(' ')
      .map(e => e[0].toUpperCase() + e.slice(1))
      .join(' ');
  }
  ThrownErrorItem.defaultProps = { jumpToLine: null };
  const content_type_noop = () => {};
  class ContentType extends Ke.default.Component {
    static defaultProps = {
      onChange: content_type_noop,
      value: null,
      contentTypes: (0, Fe.fromJS)(['application/json']),
    };
    componentDidMount() {
      this.props.contentTypes &&
        this.props.onChange(this.props.contentTypes.first());
    }
    UNSAFE_componentWillReceiveProps(e) {
      e.contentTypes &&
        e.contentTypes.size &&
        (e.contentTypes.includes(e.value) ||
          e.onChange(e.contentTypes.first()));
    }
    onChangeWrapper = e => this.props.onChange(e.target.value);
    render() {
      let {
        ariaControls: e,
        ariaLabel: t,
        className: r,
        contentTypes: n,
        controlId: a,
        value: o,
      } = this.props;
      return n && n.size
        ? Ke.default.createElement(
            'div',
            { className: 'content-type-wrapper ' + (r || '') },
            Ke.default.createElement(
              'select',
              {
                'aria-controls': e,
                'aria-label': t,
                className: 'content-type',
                id: a,
                onChange: this.onChangeWrapper,
                value: o || '',
              },
              n
                .map(e =>
                  Ke.default.createElement('option', { key: e, value: e }, e)
                )
                .toArray()
            )
          )
        : null;
    }
  }
  function xclass() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return t
      .filter(e => !!e)
      .join(' ')
      .trim();
  }
  class Container extends Ke.default.Component {
    render() {
      let { fullscreen: e, full: t, ...r } = this.props;
      if (e) return Ke.default.createElement('section', r);
      let n = 'swagger-container' + (t ? '-full' : '');
      return Ke.default.createElement(
        'section',
        (0, rr.default)({}, r, { className: xclass(r.className, n) })
      );
    }
  }
  const ka = {
    mobile: '',
    tablet: '-tablet',
    desktop: '-desktop',
    large: '-hd',
  };
  class Col extends Ke.default.Component {
    render() {
      const {
        hide: e,
        keepContents: t,
        mobile: r,
        tablet: n,
        desktop: a,
        large: o,
        ...s
      } = this.props;
      if (e && !t) return Ke.default.createElement('span', null);
      let l = [];
      for (let e in ka) {
        if (!Object.prototype.hasOwnProperty.call(ka, e)) continue;
        let t = ka[e];
        if (e in this.props) {
          let r = this.props[e];
          if (r < 1) {
            l.push('none' + t);
            continue;
          }
          l.push('block' + t), l.push('col-' + r + t);
        }
      }
      e && l.push('hidden');
      let i = xclass(s.className, ...l);
      return Ke.default.createElement(
        'section',
        (0, rr.default)({}, s, { className: i })
      );
    }
  }
  class Row extends Ke.default.Component {
    render() {
      return Ke.default.createElement(
        'div',
        (0, rr.default)({}, this.props, {
          className: xclass(this.props.className, 'wrapper'),
        })
      );
    }
  }
  class Button extends Ke.default.Component {
    static defaultProps = { className: '' };
    render() {
      return Ke.default.createElement(
        'button',
        (0, rr.default)({}, this.props, {
          className: xclass(this.props.className, 'button'),
        })
      );
    }
  }
  const TextArea = e => Ke.default.createElement('textarea', e),
    Input = e => Ke.default.createElement('input', e);
  class Select extends Ke.default.Component {
    static defaultProps = { multiple: !1, allowEmptyValue: !0 };
    constructor(e, t) {
      let r;
      super(e, t),
        (r = e.value ? e.value : e.multiple ? [''] : ''),
        (this.state = { value: r });
    }
    onChange = e => {
      let t,
        { onChange: r, multiple: n } = this.props,
        a = [].slice.call(e.target.options);
      (t = n
        ? a
            .filter(function (e) {
              return e.selected;
            })
            .map(function (e) {
              return e.value;
            })
        : e.target.value),
        this.setState({ value: t }),
        r && r(t);
    };
    UNSAFE_componentWillReceiveProps(e) {
      e.value !== this.props.value && this.setState({ value: e.value });
    }
    render() {
      let {
          allowedValues: e,
          multiple: t,
          allowEmptyValue: r,
          disabled: n,
        } = this.props,
        a = this.state.value?.toJS?.() || this.state.value;
      return Ke.default.createElement(
        'select',
        {
          className: this.props.className,
          multiple: t,
          value: a,
          onChange: this.onChange,
          disabled: n,
        },
        r ? Ke.default.createElement('option', { value: '' }, '--') : null,
        e.map(function (e, t) {
          return Ke.default.createElement(
            'option',
            { key: t, value: String(e) },
            String(e)
          );
        })
      );
    }
  }
  class Link extends Ke.default.Component {
    render() {
      return Ke.default.createElement(
        'a',
        (0, rr.default)({}, this.props, {
          rel: 'noopener noreferrer',
          className: xclass(this.props.className, 'link'),
        })
      );
    }
  }
  const NoMargin = e => {
    let { children: t } = e;
    return Ke.default.createElement(
      'div',
      { className: 'no-margin' },
      ' ',
      t,
      ' '
    );
  };
  class Collapse extends Ke.default.Component {
    static defaultProps = { isOpened: !1, animated: !1 };
    renderNotAnimated() {
      return this.props.isOpened
        ? Ke.default.createElement(NoMargin, null, this.props.children)
        : Ke.default.createElement('noscript', null);
    }
    render() {
      let { animated: e, isOpened: t, children: r } = this.props;
      return e
        ? ((r = t ? r : null), Ke.default.createElement(NoMargin, null, r))
        : this.renderNotAnimated();
    }
  }
  class Overview extends Ke.default.Component {
    constructor() {
      super(...arguments), (this.setTagShown = this._setTagShown.bind(this));
    }
    _setTagShown(e, t) {
      this.props.layoutActions.show(e, t);
    }
    showOp(e, t) {
      let { layoutActions: r } = this.props;
      r.show(e, t);
    }
    render() {
      let {
          specSelectors: e,
          layoutSelectors: t,
          layoutActions: r,
          getComponent: n,
        } = this.props,
        a = e.taggedOperations();
      const o = n('Collapse');
      return Ke.default.createElement(
        'div',
        null,
        Ke.default.createElement(
          'h4',
          { className: 'overview-title' },
          'Overview'
        ),
        a
          .map((e, n) => {
            let a = e.get('operations'),
              s = ['overview-tags', n],
              l = t.isShown(s, !0);
            return Ke.default.createElement(
              'div',
              { key: 'overview-' + n },
              Ke.default.createElement(
                'h4',
                {
                  onClick: () => r.show(s, !l),
                  className: 'link overview-tag',
                },
                ' ',
                l ? '-' : '+',
                n
              ),
              Ke.default.createElement(
                o,
                { isOpened: l, animated: !0 },
                a
                  .map(e => {
                    let { path: n, method: a, id: o } = e.toObject(),
                      s = 'operations',
                      l = o,
                      i = t.isShown([s, l]);
                    return Ke.default.createElement(OperationLink, {
                      key: o,
                      path: n,
                      method: a,
                      id: n + '-' + a,
                      shown: i,
                      showOpId: l,
                      showOpIdPrefix: s,
                      href: `#operation-${l}`,
                      onClick: r.show,
                    });
                  })
                  .toArray()
              )
            );
          })
          .toArray(),
        a.size < 1 &&
          Ke.default.createElement(
            'h3',
            null,
            ' No operations defined in spec! '
          )
      );
    }
  }
  class OperationLink extends Ke.default.Component {
    constructor(e) {
      super(e), (this.onClick = this._onClick.bind(this));
    }
    _onClick() {
      let { showOpId: e, showOpIdPrefix: t, onClick: r, shown: n } = this.props;
      r([t, e], !n);
    }
    render() {
      let { id: e, method: t, shown: r, href: n } = this.props;
      return Ke.default.createElement(
        Link,
        {
          href: n,
          onClick: this.onClick,
          className: 'block opblock-link ' + (r ? 'shown' : ''),
        },
        Ke.default.createElement(
          'div',
          null,
          Ke.default.createElement(
            'small',
            { className: `bold-label-${t}` },
            t.toUpperCase()
          ),
          Ke.default.createElement('span', { className: 'bold-label' }, e)
        )
      );
    }
  }
  class InitializedInput extends Ke.default.Component {
    componentDidMount() {
      this.props.initialValue &&
        (this.inputRef.value = this.props.initialValue);
    }
    render() {
      const { value: e, defaultValue: t, initialValue: r, ...n } = this.props;
      return Ke.default.createElement(
        'input',
        (0, rr.default)({}, n, { ref: e => (this.inputRef = e) })
      );
    }
  }
  class InfoBasePath extends Ke.default.Component {
    render() {
      const { host: e, basePath: t } = this.props;
      return Ke.default.createElement(
        'pre',
        { className: 'base-url' },
        '[ Base URL: ',
        e,
        t,
        ' ]'
      );
    }
  }
  class InfoUrl extends Ke.default.PureComponent {
    render() {
      const { url: e, getComponent: t } = this.props,
        r = t('Link');
      return Ke.default.createElement(
        r,
        { target: '_blank', href: sanitizeUrl(e) },
        Ke.default.createElement('span', { className: 'url' }, ' ', e)
      );
    }
  }
  class Info extends Ke.default.Component {
    render() {
      const {
          info: e,
          url: t,
          host: r,
          basePath: n,
          getComponent: a,
          externalDocs: o,
          selectedServer: s,
          url: l,
        } = this.props,
        i = e.get('version'),
        c = e.get('description'),
        u = e.get('title'),
        d = safeBuildUrl(e.get('termsOfService'), l, { selectedServer: s }),
        p = e.get('contact'),
        m = e.get('license'),
        f = safeBuildUrl(o && o.get('url'), l, { selectedServer: s }),
        h = o && o.get('description'),
        g = a('Markdown', !0),
        y = a('Link'),
        S = a('VersionStamp'),
        v = a('OpenAPIVersion'),
        _ = a('InfoUrl'),
        b = a('InfoBasePath'),
        w = a('License'),
        C = a('Contact');
      return Ke.default.createElement(
        'div',
        { className: 'info' },
        Ke.default.createElement(
          'hgroup',
          { className: 'main' },
          Ke.default.createElement(
            'h2',
            { className: 'title' },
            u,
            Ke.default.createElement(
              'span',
              null,
              i && Ke.default.createElement(S, { version: i }),
              Ke.default.createElement(v, { oasVersion: '2.0' })
            )
          ),
          r || n ? Ke.default.createElement(b, { host: r, basePath: n }) : null,
          t && Ke.default.createElement(_, { getComponent: a, url: t })
        ),
        Ke.default.createElement(
          'div',
          { className: 'description' },
          Ke.default.createElement(g, { source: c })
        ),
        d &&
          Ke.default.createElement(
            'div',
            { className: 'info__tos' },
            Ke.default.createElement(
              y,
              { target: '_blank', href: sanitizeUrl(d) },
              'Terms of service'
            )
          ),
        p?.size > 0 &&
          Ke.default.createElement(C, {
            getComponent: a,
            data: p,
            selectedServer: s,
            url: t,
          }),
        m?.size > 0 &&
          Ke.default.createElement(w, {
            getComponent: a,
            license: m,
            selectedServer: s,
            url: t,
          }),
        f
          ? Ke.default.createElement(
              y,
              {
                className: 'info__extdocs',
                target: '_blank',
                href: sanitizeUrl(f),
              },
              h || f
            )
          : null
      );
    }
  }
  var Na = Info;
  class InfoContainer extends Ke.default.Component {
    render() {
      const {
          specSelectors: e,
          getComponent: t,
          oas3Selectors: r,
        } = this.props,
        n = e.info(),
        a = e.url(),
        o = e.basePath(),
        s = e.host(),
        l = e.externalDocs(),
        i = r.selectedServer(),
        c = t('info');
      return Ke.default.createElement(
        'div',
        null,
        n && n.count()
          ? Ke.default.createElement(c, {
              info: n,
              url: a,
              host: s,
              basePath: o,
              externalDocs: l,
              getComponent: t,
              selectedServer: i,
            })
          : null
      );
    }
  }
  class Contact extends Ke.default.Component {
    render() {
      const {
          data: e,
          getComponent: t,
          selectedServer: r,
          url: n,
        } = this.props,
        a = e.get('name', 'the developer'),
        o = safeBuildUrl(e.get('url'), n, { selectedServer: r }),
        s = e.get('email'),
        l = t('Link');
      return Ke.default.createElement(
        'div',
        { className: 'info__contact' },
        o &&
          Ke.default.createElement(
            'div',
            null,
            Ke.default.createElement(
              l,
              { href: sanitizeUrl(o), target: '_blank' },
              a,
              ' - Website'
            )
          ),
        s &&
          Ke.default.createElement(
            l,
            { href: sanitizeUrl(`mailto:${s}`) },
            o ? `Send email to ${a}` : `Contact ${a}`
          )
      );
    }
  }
  var Aa = Contact;
  class License extends Ke.default.Component {
    render() {
      const {
          license: e,
          getComponent: t,
          selectedServer: r,
          url: n,
        } = this.props,
        a = e.get('name', 'License'),
        o = safeBuildUrl(e.get('url'), n, { selectedServer: r }),
        s = t('Link');
      return Ke.default.createElement(
        'div',
        { className: 'info__license' },
        o
          ? Ke.default.createElement(
              'div',
              { className: 'info__license__url' },
              Ke.default.createElement(
                s,
                { target: '_blank', href: sanitizeUrl(o) },
                a
              )
            )
          : Ke.default.createElement('span', null, a)
      );
    }
  }
  var Ia = License;
  class JumpToPath extends Ke.default.Component {
    render() {
      return null;
    }
  }
  class CopyToClipboardBtn extends Ke.default.Component {
    render() {
      let { getComponent: e } = this.props;
      const t = e('CopyIcon');
      return Ke.default.createElement(
        'div',
        {
          className: 'view-line-link copy-to-clipboard',
          title: 'Copy to clipboard',
        },
        Ke.default.createElement(
          vr.CopyToClipboard,
          { text: this.props.textToCopy },
          Ke.default.createElement(t, null)
        )
      );
    }
  }
  class Footer extends Ke.default.Component {
    render() {
      return Ke.default.createElement('div', { className: 'footer' });
    }
  }
  class FilterContainer extends Ke.default.Component {
    onFilterChange = e => {
      const {
        target: { value: t },
      } = e;
      this.props.layoutActions.updateFilter(t);
    };
    render() {
      const {
          specSelectors: e,
          layoutSelectors: t,
          getComponent: r,
        } = this.props,
        n = r('Col'),
        a = 'loading' === e.loadingStatus(),
        o = 'failed' === e.loadingStatus(),
        s = t.currentFilter(),
        l = ['operation-filter-input'];
      return (
        o && l.push('failed'),
        a && l.push('loading'),
        Ke.default.createElement(
          'div',
          null,
          null === s || !1 === s || 'false' === s
            ? null
            : Ke.default.createElement(
                'div',
                { className: 'filter-container' },
                Ke.default.createElement(
                  n,
                  { className: 'filter wrapper', mobile: 12 },
                  Ke.default.createElement('input', {
                    className: l.join(' '),
                    placeholder: 'Filter by tag',
                    type: 'text',
                    onChange: this.onFilterChange,
                    value: !0 === s || 'true' === s ? '' : s,
                    disabled: a,
                  })
                )
              )
        )
      );
    }
  }
  const Ra = Function.prototype;
  class ParamBody extends Ke.PureComponent {
    static defaultProp = {
      consumes: (0, Fe.fromJS)(['application/json']),
      param: (0, Fe.fromJS)({}),
      onChange: Ra,
      onChangeConsumes: Ra,
    };
    constructor(e, t) {
      super(e, t), (this.state = { isEditBox: !1, value: '' });
    }
    componentDidMount() {
      this.updateValues.call(this, this.props);
    }
    UNSAFE_componentWillReceiveProps(e) {
      this.updateValues.call(this, e);
    }
    updateValues = e => {
      let { param: t, isExecute: r, consumesValue: n = '' } = e,
        a = /xml/i.test(n),
        o = /json/i.test(n),
        s = a ? t.get('value_xml') : t.get('value');
      if (void 0 !== s) {
        let e = !s && o ? '{}' : s;
        this.setState({ value: e }),
          this.onChange(e, { isXml: a, isEditBox: r });
      } else
        a
          ? this.onChange(this.sample('xml'), { isXml: a, isEditBox: r })
          : this.onChange(this.sample(), { isEditBox: r });
    };
    sample = e => {
      let { param: t, fn: r } = this.props,
        n = r.inferSchema(t.toJS());
      return r.getSampleSchema(n, e, { includeWriteOnly: !0 });
    };
    onChange = (e, t) => {
      let { isEditBox: r, isXml: n } = t;
      this.setState({ value: e, isEditBox: r }), this._onChange(e, n);
    };
    _onChange = (e, t) => {
      (this.props.onChange || Ra)(e, t);
    };
    handleOnChange = e => {
      const { consumesValue: t } = this.props,
        r = /xml/i.test(t),
        n = e.target.value;
      this.onChange(n, { isXml: r, isEditBox: this.state.isEditBox });
    };
    toggleIsEditBox = () => this.setState(e => ({ isEditBox: !e.isEditBox }));
    render() {
      let {
        onChangeConsumes: e,
        param: t,
        isExecute: r,
        specSelectors: n,
        pathMethod: a,
        getConfigs: o,
        getComponent: s,
      } = this.props;
      const l = s('Button'),
        i = s('TextArea'),
        c = s('highlightCode'),
        u = s('contentType');
      let d = (n ? n.parameterWithMetaByIdentity(a, t) : t).get(
          'errors',
          (0, Fe.List)()
        ),
        p = n.contentTypeValues(a).get('requestContentType'),
        m =
          this.props.consumes && this.props.consumes.size
            ? this.props.consumes
            : ParamBody.defaultProp.consumes,
        { value: f, isEditBox: h } = this.state,
        g = null;
      return (
        getKnownSyntaxHighlighterLanguage(f) && (g = 'json'),
        Ke.default.createElement(
          'div',
          {
            className: 'body-param',
            'data-param-name': t.get('name'),
            'data-param-in': t.get('in'),
          },
          h && r
            ? Ke.default.createElement(i, {
                className: 'body-param__text' + (d.count() ? ' invalid' : ''),
                value: f,
                onChange: this.handleOnChange,
              })
            : f &&
                Ke.default.createElement(c, {
                  className: 'body-param__example',
                  language: g,
                  getConfigs: o,
                  value: f,
                }),
          Ke.default.createElement(
            'div',
            { className: 'body-param-options' },
            r
              ? Ke.default.createElement(
                  'div',
                  { className: 'body-param-edit' },
                  Ke.default.createElement(
                    l,
                    {
                      className: h
                        ? 'btn cancel body-param__example-edit'
                        : 'btn edit body-param__example-edit',
                      onClick: this.toggleIsEditBox,
                    },
                    h ? 'Cancel' : 'Edit'
                  )
                )
              : null,
            Ke.default.createElement(
              'label',
              { htmlFor: '' },
              Ke.default.createElement('span', null, 'Parameter content type'),
              Ke.default.createElement(u, {
                value: p,
                contentTypes: m,
                onChange: e,
                className: 'body-param-content-type',
                ariaLabel: 'Parameter content type',
              })
            )
          )
        )
      );
    }
  }
  class Curl extends Ke.default.Component {
    render() {
      let { request: e, getConfigs: t } = this.props,
        r = requestSnippetGenerator_curl_bash(e);
      const n = t(),
        a = (0, Yt.default)(n, 'syntaxHighlight.activated')
          ? Ke.default.createElement(
              _r.default,
              {
                language: 'bash',
                className: 'curl microlight',
                style: getStyle((0, Yt.default)(n, 'syntaxHighlight.theme')),
              },
              r
            )
          : Ke.default.createElement('textarea', {
              readOnly: !0,
              className: 'curl',
              value: r,
            });
      return Ke.default.createElement(
        'div',
        { className: 'curl-command' },
        Ke.default.createElement('h4', null, 'Curl'),
        Ke.default.createElement(
          'div',
          { className: 'copy-to-clipboard' },
          Ke.default.createElement(
            vr.CopyToClipboard,
            { text: r },
            Ke.default.createElement('button', null)
          )
        ),
        Ke.default.createElement('div', null, a)
      );
    }
  }
  class Schemes extends Ke.default.Component {
    UNSAFE_componentWillMount() {
      let { schemes: e } = this.props;
      this.setScheme(e.first());
    }
    UNSAFE_componentWillReceiveProps(e) {
      (this.props.currentScheme &&
        e.schemes.includes(this.props.currentScheme)) ||
        this.setScheme(e.schemes.first());
    }
    onChange = e => {
      this.setScheme(e.target.value);
    };
    setScheme = e => {
      let { path: t, method: r, specActions: n } = this.props;
      n.setScheme(e, t, r);
    };
    render() {
      let { schemes: e, currentScheme: t } = this.props;
      return Ke.default.createElement(
        'label',
        { htmlFor: 'schemes' },
        Ke.default.createElement(
          'span',
          { className: 'schemes-title' },
          'Schemes'
        ),
        Ke.default.createElement(
          'select',
          { onChange: this.onChange, value: t },
          e
            .valueSeq()
            .map(e =>
              Ke.default.createElement('option', { value: e, key: e }, e)
            )
            .toArray()
        )
      );
    }
  }
  class SchemesContainer extends Ke.default.Component {
    render() {
      const { specActions: e, specSelectors: t, getComponent: r } = this.props,
        n = t.operationScheme(),
        a = t.schemes(),
        o = r('schemes');
      return a && a.size
        ? Ke.default.createElement(o, {
            currentScheme: n,
            schemes: a,
            specActions: e,
          })
        : null;
    }
  }
  class ModelCollapse extends Ke.Component {
    static defaultProps = {
      collapsedContent: '{...}',
      expanded: !1,
      title: null,
      onToggle: () => {},
      hideSelfOnExpand: !1,
      specPath: Fe.default.List([]),
    };
    constructor(e, t) {
      super(e, t);
      let { expanded: r, collapsedContent: n } = this.props;
      this.state = {
        expanded: r,
        collapsedContent: n || ModelCollapse.defaultProps.collapsedContent,
      };
    }
    componentDidMount() {
      const { hideSelfOnExpand: e, expanded: t, modelName: r } = this.props;
      e && t && this.props.onToggle(r, t);
    }
    UNSAFE_componentWillReceiveProps(e) {
      this.props.expanded !== e.expanded &&
        this.setState({ expanded: e.expanded });
    }
    toggleCollapsed = () => {
      this.props.onToggle &&
        this.props.onToggle(this.props.modelName, !this.state.expanded),
        this.setState({ expanded: !this.state.expanded });
    };
    onLoad = e => {
      if (e && this.props.layoutSelectors) {
        const t = this.props.layoutSelectors.getScrollToKey();
        Fe.default.is(t, this.props.specPath) && this.toggleCollapsed(),
          this.props.layoutActions.readyToScroll(
            this.props.specPath,
            e.parentElement
          );
      }
    };
    render() {
      const { title: e, classes: t } = this.props;
      return this.state.expanded && this.props.hideSelfOnExpand
        ? Ke.default.createElement(
            'span',
            { className: t || '' },
            this.props.children
          )
        : Ke.default.createElement(
            'span',
            { className: t || '', ref: this.onLoad },
            Ke.default.createElement(
              'button',
              {
                'aria-expanded': this.state.expanded,
                className: 'model-box-control',
                onClick: this.toggleCollapsed,
              },
              e &&
                Ke.default.createElement('span', { className: 'pointer' }, e),
              Ke.default.createElement('span', {
                className:
                  'model-toggle' + (this.state.expanded ? '' : ' collapsed'),
              }),
              !this.state.expanded &&
                Ke.default.createElement(
                  'span',
                  null,
                  this.state.collapsedContent
                )
            ),
            this.state.expanded && this.props.children
          );
    }
  }
  class ModelExample extends Ke.default.Component {
    constructor(e, t) {
      super(e, t);
      let { getConfigs: r, isExecute: n } = this.props,
        { defaultModelRendering: a } = r(),
        o = a;
      'example' !== a && 'model' !== a && (o = 'example'),
        n && (o = 'example'),
        (this.state = { activeTab: o });
    }
    activeTab = e => {
      let {
        target: {
          dataset: { name: t },
        },
      } = e;
      this.setState({ activeTab: t });
    };
    UNSAFE_componentWillReceiveProps(e) {
      e.isExecute &&
        !this.props.isExecute &&
        this.props.example &&
        this.setState({ activeTab: 'example' });
    }
    render() {
      let {
          getComponent: e,
          specSelectors: t,
          schema: r,
          example: n,
          isExecute: a,
          getConfigs: o,
          specPath: s,
          includeReadOnly: l,
          includeWriteOnly: i,
        } = this.props,
        { defaultModelExpandDepth: c } = o();
      const u = e('ModelWrapper'),
        d = e('highlightCode'),
        p = pt()(5).toString('base64'),
        m = pt()(5).toString('base64'),
        f = pt()(5).toString('base64'),
        h = pt()(5).toString('base64');
      let g = t.isOAS3();
      return Ke.default.createElement(
        'div',
        { className: 'model-example' },
        Ke.default.createElement(
          'ul',
          { className: 'tab', role: 'tablist' },
          Ke.default.createElement(
            'li',
            {
              className: (0, _a.default)('tabitem', {
                active: 'example' === this.state.activeTab,
              }),
              role: 'presentation',
            },
            Ke.default.createElement(
              'button',
              {
                'aria-controls': m,
                'aria-selected': 'example' === this.state.activeTab,
                className: 'tablinks',
                'data-name': 'example',
                id: p,
                onClick: this.activeTab,
                role: 'tab',
              },
              a ? 'Edit Value' : 'Example Value'
            )
          ),
          r &&
            Ke.default.createElement(
              'li',
              {
                className: (0, _a.default)('tabitem', {
                  active: 'model' === this.state.activeTab,
                }),
                role: 'presentation',
              },
              Ke.default.createElement(
                'button',
                {
                  'aria-controls': h,
                  'aria-selected': 'model' === this.state.activeTab,
                  className: (0, _a.default)('tablinks', { inactive: a }),
                  'data-name': 'model',
                  id: f,
                  onClick: this.activeTab,
                  role: 'tab',
                },
                g ? 'Schema' : 'Model'
              )
            )
        ),
        'example' === this.state.activeTab &&
          Ke.default.createElement(
            'div',
            {
              'aria-hidden': 'example' !== this.state.activeTab,
              'aria-labelledby': p,
              'data-name': 'examplePanel',
              id: m,
              role: 'tabpanel',
              tabIndex: '0',
            },
            n ||
              Ke.default.createElement(d, {
                value: '(no example available)',
                getConfigs: o,
              })
          ),
        'model' === this.state.activeTab &&
          Ke.default.createElement(
            'div',
            {
              'aria-hidden': 'example' === this.state.activeTab,
              'aria-labelledby': f,
              'data-name': 'modelPanel',
              id: h,
              role: 'tabpanel',
              tabIndex: '0',
            },
            Ke.default.createElement(u, {
              schema: r,
              getComponent: e,
              getConfigs: o,
              specSelectors: t,
              expandDepth: c,
              specPath: s,
              includeReadOnly: l,
              includeWriteOnly: i,
            })
          )
      );
    }
  }
  class ModelWrapper extends Ke.Component {
    onToggle = (e, t) => {
      this.props.layoutActions &&
        this.props.layoutActions.show(this.props.fullPath, t);
    };
    render() {
      let { getComponent: e, getConfigs: t } = this.props;
      const r = e('Model');
      let n;
      return (
        this.props.layoutSelectors &&
          (n = this.props.layoutSelectors.isShown(this.props.fullPath)),
        Ke.default.createElement(
          'div',
          { className: 'model-box' },
          Ke.default.createElement(
            r,
            (0, rr.default)({}, this.props, {
              getConfigs: t,
              expanded: n,
              depth: 1,
              onToggle: this.onToggle,
              expandDepth: this.props.expandDepth || 0,
            })
          )
        )
      );
    }
  }
  var Ta = (e => {
    var t = {};
    return __webpack_require__.d(t, e), t;
  })({ default: () => he.default });
  const decodeRefName = e => {
    const t = e.replace(/~1/g, '/').replace(/~0/g, '~');
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  };
  class Model extends Ta.default {
    static propTypes = {
      schema: Gt.default.map.isRequired,
      getComponent: Mt.default.func.isRequired,
      getConfigs: Mt.default.func.isRequired,
      specSelectors: Mt.default.object.isRequired,
      name: Mt.default.string,
      displayName: Mt.default.string,
      isRef: Mt.default.bool,
      required: Mt.default.bool,
      expandDepth: Mt.default.number,
      depth: Mt.default.number,
      specPath: Gt.default.list.isRequired,
      includeReadOnly: Mt.default.bool,
      includeWriteOnly: Mt.default.bool,
    };
    getModelName = e =>
      -1 !== e.indexOf('#/definitions/')
        ? decodeRefName(e.replace(/^.*#\/definitions\//, ''))
        : -1 !== e.indexOf('#/components/schemas/')
        ? decodeRefName(e.replace(/^.*#\/components\/schemas\//, ''))
        : void 0;
    getRefSchema = e => {
      let { specSelectors: t } = this.props;
      return t.findDefinition(e);
    };
    render() {
      let {
        getComponent: e,
        getConfigs: t,
        specSelectors: r,
        schema: n,
        required: a,
        name: o,
        isRef: s,
        specPath: l,
        displayName: i,
        includeReadOnly: c,
        includeWriteOnly: u,
      } = this.props;
      const d = e('ObjectModel'),
        p = e('ArrayModel'),
        m = e('PrimitiveModel');
      let f = 'object',
        h = n && n.get('$$ref');
      if (
        (!o && h && (o = this.getModelName(h)),
        !n && h && (n = this.getRefSchema(o)),
        !n)
      )
        return Ke.default.createElement(
          'span',
          { className: 'model model-title' },
          Ke.default.createElement(
            'span',
            { className: 'model-title__text' },
            i || o
          ),
          Ke.default.createElement(rolling_load, {
            height: '20px',
            width: '20px',
          })
        );
      const g = r.isOAS3() && n.get('deprecated');
      switch (
        ((s = void 0 !== s ? s : !!h), (f = (n && n.get('type')) || f), f)
      ) {
        case 'object':
          return Ke.default.createElement(
            d,
            (0, rr.default)({ className: 'object' }, this.props, {
              specPath: l,
              getConfigs: t,
              schema: n,
              name: o,
              deprecated: g,
              isRef: s,
              includeReadOnly: c,
              includeWriteOnly: u,
            })
          );
        case 'array':
          return Ke.default.createElement(
            p,
            (0, rr.default)({ className: 'array' }, this.props, {
              getConfigs: t,
              schema: n,
              name: o,
              deprecated: g,
              required: a,
              includeReadOnly: c,
              includeWriteOnly: u,
            })
          );
        default:
          return Ke.default.createElement(
            m,
            (0, rr.default)({}, this.props, {
              getComponent: e,
              getConfigs: t,
              schema: n,
              name: o,
              deprecated: g,
              required: a,
            })
          );
      }
    }
  }
  class Models extends Ke.Component {
    getSchemaBasePath = () =>
      this.props.specSelectors.isOAS3()
        ? ['components', 'schemas']
        : ['definitions'];
    getCollapsedContent = () => ' ';
    handleToggle = (e, t) => {
      const { layoutActions: r } = this.props;
      r.show([...this.getSchemaBasePath(), e], t),
        t &&
          this.props.specActions.requestResolvedSubtree([
            ...this.getSchemaBasePath(),
            e,
          ]);
    };
    onLoadModels = e => {
      e && this.props.layoutActions.readyToScroll(this.getSchemaBasePath(), e);
    };
    onLoadModel = e => {
      if (e) {
        const t = e.getAttribute('data-name');
        this.props.layoutActions.readyToScroll(
          [...this.getSchemaBasePath(), t],
          e
        );
      }
    };
    render() {
      let {
          specSelectors: e,
          getComponent: t,
          layoutSelectors: r,
          layoutActions: n,
          getConfigs: a,
        } = this.props,
        o = e.definitions(),
        { docExpansion: s, defaultModelsExpandDepth: l } = a();
      if (!o.size || l < 0) return null;
      const i = this.getSchemaBasePath();
      let c = r.isShown(i, l > 0 && 'none' !== s);
      const u = e.isOAS3(),
        d = t('ModelWrapper'),
        p = t('Collapse'),
        m = t('ModelCollapse'),
        f = t('JumpToPath', !0),
        h = t('ArrowUpIcon'),
        g = t('ArrowDownIcon');
      return Ke.default.createElement(
        'section',
        { className: c ? 'models is-open' : 'models', ref: this.onLoadModels },
        Ke.default.createElement(
          'h4',
          null,
          Ke.default.createElement(
            'button',
            {
              'aria-expanded': c,
              className: 'models-control',
              onClick: () => n.show(i, !c),
            },
            Ke.default.createElement('span', null, u ? 'Schemas' : 'Models'),
            c
              ? Ke.default.createElement(h, null)
              : Ke.default.createElement(g, null)
          )
        ),
        Ke.default.createElement(
          p,
          { isOpened: c },
          o
            .entrySeq()
            .map(o => {
              let [s] = o;
              const c = [...i, s],
                u = Fe.default.List(c),
                p = e.specResolvedSubtree(c),
                h = e.specJson().getIn(c),
                g = Fe.Map.isMap(p) ? p : Fe.default.Map(),
                y = Fe.Map.isMap(h) ? h : Fe.default.Map(),
                S = g.get('title') || y.get('title') || s,
                v = r.isShown(c, !1);
              v &&
                0 === g.size &&
                y.size > 0 &&
                this.props.specActions.requestResolvedSubtree(c);
              const _ = Ke.default.createElement(d, {
                  name: s,
                  expandDepth: l,
                  schema: g || Fe.default.Map(),
                  displayName: S,
                  fullPath: c,
                  specPath: u,
                  getComponent: t,
                  specSelectors: e,
                  getConfigs: a,
                  layoutSelectors: r,
                  layoutActions: n,
                  includeReadOnly: !0,
                  includeWriteOnly: !0,
                }),
                b = Ke.default.createElement(
                  'span',
                  { className: 'model-box' },
                  Ke.default.createElement(
                    'span',
                    { className: 'model model-title' },
                    S
                  )
                );
              return Ke.default.createElement(
                'div',
                {
                  id: `model-${s}`,
                  className: 'model-container',
                  key: `models-section-${s}`,
                  'data-name': s,
                  ref: this.onLoadModel,
                },
                Ke.default.createElement(
                  'span',
                  { className: 'models-jump-to-path' },
                  Ke.default.createElement(f, { specPath: u })
                ),
                Ke.default.createElement(
                  m,
                  {
                    classes: 'model-box',
                    collapsedContent: this.getCollapsedContent(s),
                    onToggle: this.handleToggle,
                    title: b,
                    displayName: S,
                    modelName: s,
                    specPath: u,
                    layoutSelectors: r,
                    layoutActions: n,
                    hideSelfOnExpand: !0,
                    expanded: l > 0 && v,
                  },
                  _
                )
              );
            })
            .toArray()
        )
      );
    }
  }
  var enum_model = e => {
    let { value: t, getComponent: r } = e,
      n = r('ModelCollapse'),
      a = Ke.default.createElement('span', null, 'Array [ ', t.count(), ' ]');
    return Ke.default.createElement(
      'span',
      { className: 'prop-enum' },
      'Enum:',
      Ke.default.createElement('br', null),
      Ke.default.createElement(
        n,
        { collapsedContent: a },
        '[ ',
        t.join(', '),
        ' ]'
      )
    );
  };
  class ObjectModel extends Ke.Component {
    render() {
      let {
          schema: e,
          name: t,
          displayName: r,
          isRef: n,
          getComponent: a,
          getConfigs: o,
          depth: s,
          onToggle: l,
          expanded: i,
          specPath: c,
          ...u
        } = this.props,
        {
          specSelectors: d,
          expandDepth: p,
          includeReadOnly: m,
          includeWriteOnly: f,
        } = u;
      const { isOAS3: h } = d;
      if (!e) return null;
      const { showExtensions: g } = o();
      let y = e.get('description'),
        S = e.get('properties'),
        v = e.get('additionalProperties'),
        _ = e.get('title') || r || t,
        b = e.get('required'),
        w = e.filter(
          (e, t) =>
            -1 !==
            ['maxProperties', 'minProperties', 'nullable', 'example'].indexOf(t)
        ),
        C = e.get('deprecated'),
        x = e.getIn(['externalDocs', 'url']),
        O = e.getIn(['externalDocs', 'description']);
      const k = a('JumpToPath', !0),
        N = a('Markdown', !0),
        A = a('Model'),
        I = a('ModelCollapse'),
        R = a('Property'),
        T = a('Link'),
        JumpToPathSection = () =>
          Ke.default.createElement(
            'span',
            { className: 'model-jump-to-path' },
            Ke.default.createElement(k, { specPath: c })
          ),
        B = Ke.default.createElement(
          'span',
          null,
          Ke.default.createElement('span', null, '{'),
          '...',
          Ke.default.createElement('span', null, '}'),
          n ? Ke.default.createElement(JumpToPathSection, null) : ''
        ),
        j = d.isOAS3() ? e.get('anyOf') : null,
        P = d.isOAS3() ? e.get('oneOf') : null,
        M = d.isOAS3() ? e.get('not') : null,
        q =
          _ &&
          Ke.default.createElement(
            'span',
            { className: 'model-title' },
            n &&
              e.get('$$ref') &&
              Ke.default.createElement(
                'span',
                { className: 'model-hint' },
                e.get('$$ref')
              ),
            Ke.default.createElement(
              'span',
              { className: 'model-title__text' },
              _
            )
          );
      return Ke.default.createElement(
        'span',
        { className: 'model' },
        Ke.default.createElement(
          I,
          {
            modelName: t,
            title: q,
            onToggle: l,
            expanded: !!i || s <= p,
            collapsedContent: B,
          },
          Ke.default.createElement(
            'span',
            { className: 'brace-open object' },
            '{'
          ),
          n ? Ke.default.createElement(JumpToPathSection, null) : null,
          Ke.default.createElement(
            'span',
            { className: 'inner-object' },
            Ke.default.createElement(
              'table',
              { className: 'model' },
              Ke.default.createElement(
                'tbody',
                null,
                y
                  ? Ke.default.createElement(
                      'tr',
                      { className: 'description' },
                      Ke.default.createElement('td', null, 'description:'),
                      Ke.default.createElement(
                        'td',
                        null,
                        Ke.default.createElement(N, { source: y })
                      )
                    )
                  : null,
                x &&
                  Ke.default.createElement(
                    'tr',
                    { className: 'external-docs' },
                    Ke.default.createElement('td', null, 'externalDocs:'),
                    Ke.default.createElement(
                      'td',
                      null,
                      Ke.default.createElement(
                        T,
                        { target: '_blank', href: sanitizeUrl(x) },
                        O || x
                      )
                    )
                  ),
                C
                  ? Ke.default.createElement(
                      'tr',
                      { className: 'property' },
                      Ke.default.createElement('td', null, 'deprecated:'),
                      Ke.default.createElement('td', null, 'true')
                    )
                  : null,
                S && S.size
                  ? S.entrySeq()
                      .filter(e => {
                        let [, t] = e;
                        return (
                          (!t.get('readOnly') || m) &&
                          (!t.get('writeOnly') || f)
                        );
                      })
                      .map(e => {
                        let [r, n] = e,
                          l = h() && n.get('deprecated'),
                          i = Fe.List.isList(b) && b.contains(r),
                          d = ['property-row'];
                        return (
                          l && d.push('deprecated'),
                          i && d.push('required'),
                          Ke.default.createElement(
                            'tr',
                            { key: r, className: d.join(' ') },
                            Ke.default.createElement(
                              'td',
                              null,
                              r,
                              i &&
                                Ke.default.createElement(
                                  'span',
                                  { className: 'star' },
                                  '*'
                                )
                            ),
                            Ke.default.createElement(
                              'td',
                              null,
                              Ke.default.createElement(
                                A,
                                (0, rr.default)(
                                  { key: `object-${t}-${r}_${n}` },
                                  u,
                                  {
                                    required: i,
                                    getComponent: a,
                                    specPath: c.push('properties', r),
                                    getConfigs: o,
                                    schema: n,
                                    depth: s + 1,
                                  }
                                )
                              )
                            )
                          )
                        );
                      })
                      .toArray()
                  : null,
                g
                  ? Ke.default.createElement(
                      'tr',
                      null,
                      Ke.default.createElement('td', null, ' ')
                    )
                  : null,
                g
                  ? e
                      .entrySeq()
                      .map(e => {
                        let [t, r] = e;
                        if ('x-' !== t.slice(0, 2)) return;
                        const n = r ? (r.toJS ? r.toJS() : r) : null;
                        return Ke.default.createElement(
                          'tr',
                          { key: t, className: 'extension' },
                          Ke.default.createElement('td', null, t),
                          Ke.default.createElement(
                            'td',
                            null,
                            JSON.stringify(n)
                          )
                        );
                      })
                      .toArray()
                  : null,
                v && v.size
                  ? Ke.default.createElement(
                      'tr',
                      null,
                      Ke.default.createElement('td', null, '< * >:'),
                      Ke.default.createElement(
                        'td',
                        null,
                        Ke.default.createElement(
                          A,
                          (0, rr.default)({}, u, {
                            required: !1,
                            getComponent: a,
                            specPath: c.push('additionalProperties'),
                            getConfigs: o,
                            schema: v,
                            depth: s + 1,
                          })
                        )
                      )
                    )
                  : null,
                j
                  ? Ke.default.createElement(
                      'tr',
                      null,
                      Ke.default.createElement('td', null, 'anyOf ->'),
                      Ke.default.createElement(
                        'td',
                        null,
                        j.map((e, t) =>
                          Ke.default.createElement(
                            'div',
                            { key: t },
                            Ke.default.createElement(
                              A,
                              (0, rr.default)({}, u, {
                                required: !1,
                                getComponent: a,
                                specPath: c.push('anyOf', t),
                                getConfigs: o,
                                schema: e,
                                depth: s + 1,
                              })
                            )
                          )
                        )
                      )
                    )
                  : null,
                P
                  ? Ke.default.createElement(
                      'tr',
                      null,
                      Ke.default.createElement('td', null, 'oneOf ->'),
                      Ke.default.createElement(
                        'td',
                        null,
                        P.map((e, t) =>
                          Ke.default.createElement(
                            'div',
                            { key: t },
                            Ke.default.createElement(
                              A,
                              (0, rr.default)({}, u, {
                                required: !1,
                                getComponent: a,
                                specPath: c.push('oneOf', t),
                                getConfigs: o,
                                schema: e,
                                depth: s + 1,
                              })
                            )
                          )
                        )
                      )
                    )
                  : null,
                M
                  ? Ke.default.createElement(
                      'tr',
                      null,
                      Ke.default.createElement('td', null, 'not ->'),
                      Ke.default.createElement(
                        'td',
                        null,
                        Ke.default.createElement(
                          'div',
                          null,
                          Ke.default.createElement(
                            A,
                            (0, rr.default)({}, u, {
                              required: !1,
                              getComponent: a,
                              specPath: c.push('not'),
                              getConfigs: o,
                              schema: M,
                              depth: s + 1,
                            })
                          )
                        )
                      )
                    )
                  : null
              )
            )
          ),
          Ke.default.createElement('span', { className: 'brace-close' }, '}')
        ),
        w.size
          ? w.entrySeq().map(e => {
              let [t, r] = e;
              return Ke.default.createElement(R, {
                key: `${t}-${r}`,
                propKey: t,
                propVal: r,
                propClass: 'property',
              });
            })
          : null
      );
    }
  }
  class ArrayModel extends Ke.Component {
    render() {
      let {
          getComponent: e,
          getConfigs: t,
          schema: r,
          depth: n,
          expandDepth: a,
          name: o,
          displayName: s,
          specPath: l,
        } = this.props,
        i = r.get('description'),
        c = r.get('items'),
        u = r.get('title') || s || o,
        d = r.filter(
          (e, t) =>
            -1 ===
            ['type', 'items', 'description', '$$ref', 'externalDocs'].indexOf(t)
        ),
        p = r.getIn(['externalDocs', 'url']),
        m = r.getIn(['externalDocs', 'description']);
      const f = e('Markdown', !0),
        h = e('ModelCollapse'),
        g = e('Model'),
        y = e('Property'),
        S = e('Link'),
        v =
          u &&
          Ke.default.createElement(
            'span',
            { className: 'model-title' },
            Ke.default.createElement(
              'span',
              { className: 'model-title__text' },
              u
            )
          );
      return Ke.default.createElement(
        'span',
        { className: 'model' },
        Ke.default.createElement(
          h,
          { title: v, expanded: n <= a, collapsedContent: '[...]' },
          '[',
          d.size
            ? d.entrySeq().map(e => {
                let [t, r] = e;
                return Ke.default.createElement(y, {
                  key: `${t}-${r}`,
                  propKey: t,
                  propVal: r,
                  propClass: 'property',
                });
              })
            : null,
          i
            ? Ke.default.createElement(f, { source: i })
            : d.size
            ? Ke.default.createElement('div', { className: 'markdown' })
            : null,
          p &&
            Ke.default.createElement(
              'div',
              { className: 'external-docs' },
              Ke.default.createElement(
                S,
                { target: '_blank', href: sanitizeUrl(p) },
                m || p
              )
            ),
          Ke.default.createElement(
            'span',
            null,
            Ke.default.createElement(
              g,
              (0, rr.default)({}, this.props, {
                getConfigs: t,
                specPath: l.push('items'),
                name: null,
                schema: c,
                required: !1,
                depth: n + 1,
              })
            )
          ),
          ']'
        )
      );
    }
  }
  const Ba = 'property primitive';
  class Primitive extends Ke.Component {
    render() {
      let {
        schema: e,
        getComponent: t,
        getConfigs: r,
        name: n,
        displayName: a,
        depth: o,
        expandDepth: s,
      } = this.props;
      const { showExtensions: l } = r();
      if (!e || !e.get) return Ke.default.createElement('div', null);
      let i = e.get('type'),
        c = e.get('format'),
        u = e.get('xml'),
        d = e.get('enum'),
        p = e.get('title') || a || n,
        m = e.get('description'),
        f = getExtensions(e),
        h = e
          .filter(
            (e, t) =>
              -1 ===
              [
                'enum',
                'type',
                'format',
                'description',
                '$$ref',
                'externalDocs',
              ].indexOf(t)
          )
          .filterNot((e, t) => f.has(t)),
        g = e.getIn(['externalDocs', 'url']),
        y = e.getIn(['externalDocs', 'description']);
      const S = t('Markdown', !0),
        v = t('EnumModel'),
        _ = t('Property'),
        b = t('ModelCollapse'),
        w = t('Link'),
        C =
          p &&
          Ke.default.createElement(
            'span',
            { className: 'model-title' },
            Ke.default.createElement(
              'span',
              { className: 'model-title__text' },
              p
            )
          );
      return Ke.default.createElement(
        'span',
        { className: 'model' },
        Ke.default.createElement(
          b,
          {
            title: C,
            expanded: o <= s,
            collapsedContent: '[...]',
            hideSelfOnExpand: s !== o,
          },
          Ke.default.createElement(
            'span',
            { className: 'prop' },
            n &&
              o > 1 &&
              Ke.default.createElement('span', { className: 'prop-name' }, p),
            Ke.default.createElement('span', { className: 'prop-type' }, i),
            c &&
              Ke.default.createElement(
                'span',
                { className: 'prop-format' },
                '($',
                c,
                ')'
              ),
            h.size
              ? h.entrySeq().map(e => {
                  let [t, r] = e;
                  return Ke.default.createElement(_, {
                    key: `${t}-${r}`,
                    propKey: t,
                    propVal: r,
                    propClass: Ba,
                  });
                })
              : null,
            l && f.size
              ? f.entrySeq().map(e => {
                  let [t, r] = e;
                  return Ke.default.createElement(_, {
                    key: `${t}-${r}`,
                    propKey: t,
                    propVal: r,
                    propClass: Ba,
                  });
                })
              : null,
            m ? Ke.default.createElement(S, { source: m }) : null,
            g &&
              Ke.default.createElement(
                'div',
                { className: 'external-docs' },
                Ke.default.createElement(
                  w,
                  { target: '_blank', href: sanitizeUrl(g) },
                  y || g
                )
              ),
            u && u.size
              ? Ke.default.createElement(
                  'span',
                  null,
                  Ke.default.createElement('br', null),
                  Ke.default.createElement('span', { className: Ba }, 'xml:'),
                  u
                    .entrySeq()
                    .map(e => {
                      let [t, r] = e;
                      return Ke.default.createElement(
                        'span',
                        { key: `${t}-${r}`, className: Ba },
                        Ke.default.createElement('br', null),
                        '   ',
                        t,
                        ': ',
                        String(r)
                      );
                    })
                    .toArray()
                )
              : null,
            d && Ke.default.createElement(v, { value: d, getComponent: t })
          )
        )
      );
    }
  }
  var property = e => {
    let { propKey: t, propVal: r, propClass: n } = e;
    return Ke.default.createElement(
      'span',
      { className: n },
      Ke.default.createElement('br', null),
      t,
      ': ',
      String(r)
    );
  };
  class TryItOutButton extends Ke.default.Component {
    static defaultProps = {
      onTryoutClick: Function.prototype,
      onCancelClick: Function.prototype,
      onResetClick: Function.prototype,
      enabled: !1,
      hasUserEditedBody: !1,
      isOAS3: !1,
    };
    render() {
      const {
          onTryoutClick: e,
          onCancelClick: t,
          onResetClick: r,
          enabled: n,
          hasUserEditedBody: a,
          isOAS3: o,
        } = this.props,
        s = o && a;
      return Ke.default.createElement(
        'div',
        { className: s ? 'try-out btn-group' : 'try-out' },
        n
          ? Ke.default.createElement(
              'button',
              { className: 'btn try-out__btn cancel', onClick: t },
              'Cancel'
            )
          : Ke.default.createElement(
              'button',
              { className: 'btn try-out__btn', onClick: e },
              'Try it out '
            ),
        s &&
          Ke.default.createElement(
            'button',
            { className: 'btn try-out__btn reset', onClick: r },
            'Reset'
          )
      );
    }
  }
  class VersionPragmaFilter extends Ke.default.PureComponent {
    static defaultProps = { alsoShow: null, children: null, bypass: !1 };
    render() {
      const { bypass: e, isSwagger2: t, isOAS3: r, alsoShow: n } = this.props;
      return e
        ? Ke.default.createElement('div', null, this.props.children)
        : t && r
        ? Ke.default.createElement(
            'div',
            { className: 'version-pragma' },
            n,
            Ke.default.createElement(
              'div',
              {
                className:
                  'version-pragma__message version-pragma__message--ambiguous',
              },
              Ke.default.createElement(
                'div',
                null,
                Ke.default.createElement(
                  'h3',
                  null,
                  'Unable to render this definition'
                ),
                Ke.default.createElement(
                  'p',
                  null,
                  Ke.default.createElement('code', null, 'swagger'),
                  ' and ',
                  Ke.default.createElement('code', null, 'openapi'),
                  ' fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.'
                ),
                Ke.default.createElement(
                  'p',
                  null,
                  'Supported version fields are ',
                  Ke.default.createElement('code', null, 'swagger: ', '"2.0"'),
                  ' and those that match ',
                  Ke.default.createElement('code', null, 'openapi: 3.0.n'),
                  ' (for example, ',
                  Ke.default.createElement('code', null, 'openapi: 3.0.0'),
                  ').'
                )
              )
            )
          )
        : t || r
        ? Ke.default.createElement('div', null, this.props.children)
        : Ke.default.createElement(
            'div',
            { className: 'version-pragma' },
            n,
            Ke.default.createElement(
              'div',
              {
                className:
                  'version-pragma__message version-pragma__message--missing',
              },
              Ke.default.createElement(
                'div',
                null,
                Ke.default.createElement(
                  'h3',
                  null,
                  'Unable to render this definition'
                ),
                Ke.default.createElement(
                  'p',
                  null,
                  'The provided definition does not specify a valid version field.'
                ),
                Ke.default.createElement(
                  'p',
                  null,
                  'Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ',
                  Ke.default.createElement('code', null, 'swagger: ', '"2.0"'),
                  ' and those that match ',
                  Ke.default.createElement('code', null, 'openapi: 3.0.n'),
                  ' (for example, ',
                  Ke.default.createElement('code', null, 'openapi: 3.0.0'),
                  ').'
                )
              )
            )
          );
    }
  }
  var version_stamp = e => {
    let { version: t } = e;
    return Ke.default.createElement(
      'small',
      null,
      Ke.default.createElement('pre', { className: 'version' }, ' ', t, ' ')
    );
  };
  var openapi_version = e => {
    let { oasVersion: t } = e;
    return Ke.default.createElement(
      'small',
      { className: 'version-stamp' },
      Ke.default.createElement('pre', { className: 'version' }, 'OAS ', t)
    );
  };
  var deep_link = e => {
    let { enabled: t, path: r, text: n } = e;
    return Ke.default.createElement(
      'a',
      {
        className: 'nostyle',
        onClick: t ? e => e.preventDefault() : null,
        href: t ? `#/${r}` : null,
      },
      Ke.default.createElement('span', null, n)
    );
  };
  var svg_assets = () =>
      Ke.default.createElement(
        'div',
        null,
        Ke.default.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
            className: 'svg-assets',
          },
          Ke.default.createElement(
            'defs',
            null,
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 20 20', id: 'unlocked' },
              Ke.default.createElement('path', {
                d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z',
              })
            ),
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 20 20', id: 'locked' },
              Ke.default.createElement('path', {
                d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z',
              })
            ),
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 20 20', id: 'close' },
              Ke.default.createElement('path', {
                d: 'M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z',
              })
            ),
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 20 20', id: 'large-arrow' },
              Ke.default.createElement('path', {
                d: 'M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z',
              })
            ),
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 20 20', id: 'large-arrow-down' },
              Ke.default.createElement('path', {
                d: 'M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z',
              })
            ),
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 20 20', id: 'large-arrow-up' },
              Ke.default.createElement('path', {
                d: 'M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z',
              })
            ),
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 24 24', id: 'jump-to' },
              Ke.default.createElement('path', {
                d: 'M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z',
              })
            ),
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 24 24', id: 'expand' },
              Ke.default.createElement('path', {
                d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
              })
            ),
            Ke.default.createElement(
              'symbol',
              { viewBox: '0 0 15 16', id: 'copy' },
              Ke.default.createElement(
                'g',
                { transform: 'translate(2, -1)' },
                Ke.default.createElement('path', {
                  fill: '#ffffff',
                  fillRule: 'evenodd',
                  d: 'M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z',
                })
              )
            )
          )
        )
      ),
    ja = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ Remarkable: () => ge.Remarkable }),
    Pa = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ linkify: () => ye.linkify }),
    Ma = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => Ee.default });
  function Markdown(e) {
    let { source: t, className: r = '', getConfigs: n } = e;
    if ('string' != typeof t) return null;
    const a = new ja.Remarkable({
      html: !0,
      typographer: !0,
      breaks: !0,
      linkTarget: '_blank',
    }).use(Pa.linkify);
    a.core.ruler.disable(['replacements', 'smartquotes']);
    const { useUnsafeMarkdown: o } = n(),
      s = a.render(t),
      l = sanitizer(s, { useUnsafeMarkdown: o });
    return t && s && l
      ? Ke.default.createElement('div', {
          className: (0, _a.default)(r, 'markdown'),
          dangerouslySetInnerHTML: { __html: l },
        })
      : null;
  }
  Ma.default.addHook &&
    Ma.default.addHook('beforeSanitizeElements', function (e) {
      return e.href && e.setAttribute('rel', 'noopener noreferrer'), e;
    }),
    (Markdown.defaultProps = { getConfigs: () => ({ useUnsafeMarkdown: !1 }) });
  var qa = Markdown;
  function sanitizer(e) {
    let { useUnsafeMarkdown: t = !1 } =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const r = t,
      n = t ? [] : ['style', 'class'];
    return (
      t &&
        !sanitizer.hasWarnedAboutDeprecation &&
        (console.warn(
          'useUnsafeMarkdown display configuration parameter is deprecated since >3.26.0 and will be removed in v4.0.0.'
        ),
        (sanitizer.hasWarnedAboutDeprecation = !0)),
      Ma.default.sanitize(e, {
        ADD_ATTR: ['target'],
        FORBID_TAGS: ['style', 'form'],
        ALLOW_DATA_ATTR: r,
        FORBID_ATTR: n,
      })
    );
  }
  sanitizer.hasWarnedAboutDeprecation = !1;
  class BaseLayout extends Ke.default.Component {
    render() {
      const { errSelectors: e, specSelectors: t, getComponent: r } = this.props,
        n = r('SvgAssets'),
        a = r('InfoContainer', !0),
        o = r('VersionPragmaFilter'),
        s = r('operations', !0),
        l = r('Models', !0),
        i = r('Webhooks', !0),
        c = r('Row'),
        u = r('Col'),
        d = r('errors', !0),
        p = r('ServersContainer', !0),
        m = r('SchemesContainer', !0),
        f = r('AuthorizeBtnContainer', !0),
        h = r('FilterContainer', !0),
        g = t.isSwagger2(),
        y = t.isOAS3(),
        S = t.isOAS31(),
        v = !t.specStr(),
        _ = t.loadingStatus();
      let b = null;
      if (
        ('loading' === _ &&
          (b = Ke.default.createElement(
            'div',
            { className: 'info' },
            Ke.default.createElement(
              'div',
              { className: 'loading-container' },
              Ke.default.createElement('div', { className: 'loading' })
            )
          )),
        'failed' === _ &&
          (b = Ke.default.createElement(
            'div',
            { className: 'info' },
            Ke.default.createElement(
              'div',
              { className: 'loading-container' },
              Ke.default.createElement(
                'h4',
                { className: 'title' },
                'Failed to load API definition.'
              ),
              Ke.default.createElement(d, null)
            )
          )),
        'failedConfig' === _)
      ) {
        const t = e.lastError(),
          r = t ? t.get('message') : '';
        b = Ke.default.createElement(
          'div',
          { className: 'info failed-config' },
          Ke.default.createElement(
            'div',
            { className: 'loading-container' },
            Ke.default.createElement(
              'h4',
              { className: 'title' },
              'Failed to load remote configuration.'
            ),
            Ke.default.createElement('p', null, r)
          )
        );
      }
      if (
        (!b &&
          v &&
          (b = Ke.default.createElement(
            'h4',
            null,
            'No API definition provided.'
          )),
        b)
      )
        return Ke.default.createElement(
          'div',
          { className: 'swagger-ui' },
          Ke.default.createElement('div', { className: 'loading-container' }, b)
        );
      const w = t.servers(),
        C = t.schemes(),
        x = w && w.size,
        O = C && C.size,
        k = !!t.securityDefinitions();
      return Ke.default.createElement(
        'div',
        { className: 'swagger-ui' },
        Ke.default.createElement(n, null),
        Ke.default.createElement(
          o,
          {
            isSwagger2: g,
            isOAS3: y,
            alsoShow: Ke.default.createElement(d, null),
          },
          Ke.default.createElement(d, null),
          Ke.default.createElement(
            c,
            { className: 'information-container' },
            Ke.default.createElement(
              u,
              { mobile: 12 },
              Ke.default.createElement(a, null)
            )
          ),
          x || O || k
            ? Ke.default.createElement(
                'div',
                { className: 'scheme-container' },
                Ke.default.createElement(
                  u,
                  { className: 'schemes wrapper', mobile: 12 },
                  x ? Ke.default.createElement(p, null) : null,
                  O ? Ke.default.createElement(m, null) : null,
                  k ? Ke.default.createElement(f, null) : null
                )
              )
            : null,
          Ke.default.createElement(h, null),
          Ke.default.createElement(
            c,
            null,
            Ke.default.createElement(
              u,
              { mobile: 12, desktop: 12 },
              Ke.default.createElement(s, null)
            )
          ),
          S &&
            Ke.default.createElement(
              c,
              { className: 'webhooks-container' },
              Ke.default.createElement(
                u,
                { mobile: 12, desktop: 12 },
                Ke.default.createElement(i, null)
              )
            ),
          Ke.default.createElement(
            c,
            null,
            Ke.default.createElement(
              u,
              { mobile: 12, desktop: 12 },
              Ke.default.createElement(l, null)
            )
          )
        )
      );
    }
  }
  var core_components = () => ({
    components: {
      App,
      authorizationPopup: AuthorizationPopup,
      authorizeBtn: AuthorizeBtn,
      AuthorizeBtnContainer,
      authorizeOperationBtn: AuthorizeOperationBtn,
      auths: Auths,
      AuthItem: auth_item_Auths,
      authError: AuthError,
      oauth2: Oauth2,
      apiKeyAuth: ApiKeyAuth,
      basicAuth: BasicAuth,
      clear: Clear,
      liveResponse: LiveResponse,
      InitializedInput,
      info: Na,
      InfoContainer,
      InfoUrl,
      InfoBasePath,
      Contact: Aa,
      License: Ia,
      JumpToPath,
      CopyToClipboardBtn,
      onlineValidatorBadge: OnlineValidatorBadge,
      operations: Operations,
      operation: Operation,
      OperationSummary,
      OperationSummaryMethod,
      OperationSummaryPath,
      highlightCode: wa,
      responses: Responses,
      response: Response,
      ResponseExtension: response_extension,
      responseBody: ResponseBody,
      parameters: Parameters,
      parameterRow: ParameterRow,
      execute: Execute,
      headers: headers_Headers,
      errors: Errors,
      contentType: ContentType,
      overview: Overview,
      footer: Footer,
      FilterContainer,
      ParamBody,
      curl: Curl,
      schemes: Schemes,
      SchemesContainer,
      modelExample: ModelExample,
      ModelWrapper,
      ModelCollapse,
      Model,
      Models,
      EnumModel: enum_model,
      ObjectModel,
      ArrayModel,
      PrimitiveModel: Primitive,
      Property: property,
      TryItOutButton,
      Markdown: qa,
      BaseLayout,
      VersionPragmaFilter,
      VersionStamp: version_stamp,
      OperationExt: operation_extensions,
      OperationExtRow: operation_extension_row,
      ParameterExt: parameter_extension,
      ParameterIncludeEmpty,
      OperationTag,
      OperationContainer,
      OpenAPIVersion: openapi_version,
      DeepLink: deep_link,
      SvgAssets: svg_assets,
      Example,
      ExamplesSelect,
      ExamplesSelectValueRetainer,
    },
  });
  var form_components = () => ({ components: { ...Pe } }),
    La = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => Se.default });
  const Da = {
    value: '',
    onChange: () => {},
    schema: {},
    keyName: '',
    required: !1,
    errors: (0, Fe.List)(),
  };
  class JsonSchemaForm extends Ke.Component {
    static defaultProps = Da;
    componentDidMount() {
      const { dispatchInitialValue: e, value: t, onChange: r } = this.props;
      e ? r(t) : !1 === e && r('');
    }
    render() {
      let {
        schema: e,
        errors: t,
        value: r,
        onChange: n,
        getComponent: a,
        fn: o,
        disabled: s,
      } = this.props;
      const l = e && e.get ? e.get('format') : null,
        i = e && e.get ? e.get('type') : null;
      let getComponentSilently = e => a(e, !1, { failSilently: !0 }),
        c = i
          ? getComponentSilently(l ? `JsonSchema_${i}_${l}` : `JsonSchema_${i}`)
          : a('JsonSchema_string');
      return (
        c || (c = a('JsonSchema_string')),
        Ke.default.createElement(
          c,
          (0, rr.default)({}, this.props, {
            errors: t,
            fn: o,
            getComponent: a,
            value: r,
            onChange: n,
            schema: e,
            disabled: s,
          })
        )
      );
    }
  }
  class JsonSchema_string extends Ke.Component {
    static defaultProps = Da;
    onChange = e => {
      const t =
        this.props.schema && 'file' === this.props.schema.get('type')
          ? e.target.files[0]
          : e.target.value;
      this.props.onChange(t, this.props.keyName);
    };
    onEnumChange = e => this.props.onChange(e);
    render() {
      let {
        getComponent: e,
        value: t,
        schema: r,
        errors: n,
        required: a,
        description: o,
        disabled: s,
      } = this.props;
      const l = r && r.get ? r.get('enum') : null,
        i = r && r.get ? r.get('format') : null,
        c = r && r.get ? r.get('type') : null,
        u = r && r.get ? r.get('in') : null;
      if ((t || (t = ''), (n = n.toJS ? n.toJS() : []), l)) {
        const r = e('Select');
        return Ke.default.createElement(r, {
          className: n.length ? 'invalid' : '',
          title: n.length ? n : '',
          allowedValues: [...l],
          value: t,
          allowEmptyValue: !a,
          disabled: s,
          onChange: this.onEnumChange,
        });
      }
      const d = s || (u && 'formData' === u && !('FormData' in window)),
        p = e('Input');
      return c && 'file' === c
        ? Ke.default.createElement(p, {
            type: 'file',
            className: n.length ? 'invalid' : '',
            title: n.length ? n : '',
            onChange: this.onChange,
            disabled: d,
          })
        : Ke.default.createElement(La.default, {
            type: i && 'password' === i ? 'password' : 'text',
            className: n.length ? 'invalid' : '',
            title: n.length ? n : '',
            value: t,
            minLength: 0,
            debounceTimeout: 350,
            placeholder: o,
            onChange: this.onChange,
            disabled: d,
          });
    }
  }
  class JsonSchema_array extends Ke.PureComponent {
    static defaultProps = Da;
    constructor(e, t) {
      super(e, t),
        (this.state = { value: valueOrEmptyList(e.value), schema: e.schema });
    }
    UNSAFE_componentWillReceiveProps(e) {
      const t = valueOrEmptyList(e.value);
      t !== this.state.value && this.setState({ value: t }),
        e.schema !== this.state.schema && this.setState({ schema: e.schema });
    }
    onChange = () => {
      this.props.onChange(this.state.value);
    };
    onItemChange = (e, t) => {
      this.setState(r => {
        let { value: n } = r;
        return { value: n.set(t, e) };
      }, this.onChange);
    };
    removeItem = e => {
      this.setState(t => {
        let { value: r } = t;
        return { value: r.delete(e) };
      }, this.onChange);
    };
    addItem = () => {
      const { fn: e } = this.props;
      let t = valueOrEmptyList(this.state.value);
      this.setState(
        () => ({
          value: t.push(
            e.getSampleSchema(this.state.schema.get('items'), !1, {
              includeWriteOnly: !0,
            })
          ),
        }),
        this.onChange
      );
    };
    onEnumChange = e => {
      this.setState(() => ({ value: e }), this.onChange);
    };
    render() {
      let {
        getComponent: e,
        required: t,
        schema: r,
        errors: n,
        fn: a,
        disabled: o,
      } = this.props;
      n = n.toJS ? n.toJS() : Array.isArray(n) ? n : [];
      const s = n.filter(e => 'string' == typeof e),
        l = n.filter(e => void 0 !== e.needRemove).map(e => e.error),
        i = this.state.value,
        c = !!(i && i.count && i.count() > 0),
        u = r.getIn(['items', 'enum']),
        d = r.getIn(['items', 'type']),
        p = r.getIn(['items', 'format']),
        m = r.get('items');
      let f,
        h = !1,
        g = 'file' === d || ('string' === d && 'binary' === p);
      if (
        (d && p
          ? (f = e(`JsonSchema_${d}_${p}`))
          : ('boolean' !== d && 'array' !== d && 'object' !== d) ||
            (f = e(`JsonSchema_${d}`)),
        f || g || (h = !0),
        u)
      ) {
        const r = e('Select');
        return Ke.default.createElement(r, {
          className: n.length ? 'invalid' : '',
          title: n.length ? n : '',
          multiple: !0,
          value: i,
          disabled: o,
          allowedValues: u,
          allowEmptyValue: !t,
          onChange: this.onEnumChange,
        });
      }
      const y = e('Button');
      return Ke.default.createElement(
        'div',
        { className: 'json-schema-array' },
        c
          ? i.map((t, r) => {
              const s = (0, Fe.fromJS)(
                n.filter(e => e.index === r).map(e => e.error)
              );
              return Ke.default.createElement(
                'div',
                { key: r, className: 'json-schema-form-item' },
                g
                  ? Ke.default.createElement(JsonSchemaArrayItemFile, {
                      value: t,
                      onChange: e => this.onItemChange(e, r),
                      disabled: o,
                      errors: s,
                      getComponent: e,
                    })
                  : h
                  ? Ke.default.createElement(JsonSchemaArrayItemText, {
                      value: t,
                      onChange: e => this.onItemChange(e, r),
                      disabled: o,
                      errors: s,
                    })
                  : Ke.default.createElement(
                      f,
                      (0, rr.default)({}, this.props, {
                        value: t,
                        onChange: e => this.onItemChange(e, r),
                        disabled: o,
                        errors: s,
                        schema: m,
                        getComponent: e,
                        fn: a,
                      })
                    ),
                o
                  ? null
                  : Ke.default.createElement(
                      y,
                      {
                        className: `btn btn-sm json-schema-form-item-remove ${
                          l.length ? 'invalid' : null
                        }`,
                        title: l.length ? l : '',
                        onClick: () => this.removeItem(r),
                      },
                      ' - '
                    )
              );
            })
          : null,
        o
          ? null
          : Ke.default.createElement(
              y,
              {
                className: `btn btn-sm json-schema-form-item-add ${
                  s.length ? 'invalid' : null
                }`,
                title: s.length ? s : '',
                onClick: this.addItem,
              },
              'Add ',
              d ? `${d} ` : '',
              'item'
            )
      );
    }
  }
  class JsonSchemaArrayItemText extends Ke.Component {
    static defaultProps = Da;
    onChange = e => {
      const t = e.target.value;
      this.props.onChange(t, this.props.keyName);
    };
    render() {
      let { value: e, errors: t, description: r, disabled: n } = this.props;
      return (
        e || (e = ''),
        (t = t.toJS ? t.toJS() : []),
        Ke.default.createElement(La.default, {
          type: 'text',
          className: t.length ? 'invalid' : '',
          title: t.length ? t : '',
          value: e,
          minLength: 0,
          debounceTimeout: 350,
          placeholder: r,
          onChange: this.onChange,
          disabled: n,
        })
      );
    }
  }
  class JsonSchemaArrayItemFile extends Ke.Component {
    static defaultProps = Da;
    onFileChange = e => {
      const t = e.target.files[0];
      this.props.onChange(t, this.props.keyName);
    };
    render() {
      let { getComponent: e, errors: t, disabled: r } = this.props;
      const n = e('Input'),
        a = r || !('FormData' in window);
      return Ke.default.createElement(n, {
        type: 'file',
        className: t.length ? 'invalid' : '',
        title: t.length ? t : '',
        onChange: this.onFileChange,
        disabled: a,
      });
    }
  }
  class JsonSchema_boolean extends Ke.Component {
    static defaultProps = Da;
    onEnumChange = e => this.props.onChange(e);
    render() {
      let {
        getComponent: e,
        value: t,
        errors: r,
        schema: n,
        required: a,
        disabled: o,
      } = this.props;
      r = r.toJS ? r.toJS() : [];
      let s = n && n.get ? n.get('enum') : null,
        l = !s || !a,
        i = !s && ['true', 'false'];
      const c = e('Select');
      return Ke.default.createElement(c, {
        className: r.length ? 'invalid' : '',
        title: r.length ? r : '',
        value: String(t),
        disabled: o,
        allowedValues: s ? [...s] : i,
        allowEmptyValue: l,
        onChange: this.onEnumChange,
      });
    }
  }
  const stringifyObjectErrors = e =>
    e.map(e => {
      const t = void 0 !== e.propKey ? e.propKey : e.index;
      let r =
        'string' == typeof e ? e : 'string' == typeof e.error ? e.error : null;
      if (!t && r) return r;
      let n = e.error,
        a = `/${e.propKey}`;
      for (; 'object' == typeof n; ) {
        const e = void 0 !== n.propKey ? n.propKey : n.index;
        if (void 0 === e) break;
        if (((a += `/${e}`), !n.error)) break;
        n = n.error;
      }
      return `${a}: ${n}`;
    });
  class JsonSchema_object extends Ke.PureComponent {
    constructor() {
      super();
    }
    static defaultProps = Da;
    onChange = e => {
      this.props.onChange(e);
    };
    handleOnChange = e => {
      const t = e.target.value;
      this.onChange(t);
    };
    render() {
      let { getComponent: e, value: t, errors: r, disabled: n } = this.props;
      const a = e('TextArea');
      return (
        (r = r.toJS ? r.toJS() : Array.isArray(r) ? r : []),
        Ke.default.createElement(
          'div',
          null,
          Ke.default.createElement(a, {
            className: (0, _a.default)({ invalid: r.length }),
            title: r.length ? stringifyObjectErrors(r).join(', ') : '',
            value: stringify(t),
            disabled: n,
            onChange: this.handleOnChange,
          })
        )
      );
    }
  }
  function valueOrEmptyList(e) {
    return Fe.List.isList(e)
      ? e
      : Array.isArray(e)
      ? (0, Fe.fromJS)(e)
      : (0, Fe.List)();
  }
  var json_schema_components = () => ({ components: { ...Me } });
  var base = () => [
    configsPlugin,
    util,
    logs,
    view,
    plugins_spec,
    err,
    icons,
    plugins_layout,
    json_schema_5_samples,
    core_components,
    form_components,
    swagger_client,
    json_schema_components,
    auth,
    downloadUrlPlugin,
    deep_linking,
    filter,
    on_complete,
    plugins_request_snippets,
    safe_render(),
  ];
  const Ua = (0, Fe.Map)();
  function onlyOAS3(e) {
    return (t, r) =>
      function () {
        if (r.getSystem().specSelectors.isOAS3()) {
          const t = e(...arguments);
          return 'function' == typeof t ? t(r) : t;
        }
        return t(...arguments);
      };
  }
  const $a = onlyOAS3((0, Rt.createSelector)(() => null)),
    Ja = onlyOAS3(() => e => {
      const t = e
        .getSystem()
        .specSelectors.specJson()
        .getIn(['components', 'schemas']);
      return Fe.Map.isMap(t) ? t : Ua;
    }),
    Va = onlyOAS3(
      () => e => e.getSystem().specSelectors.specJson().hasIn(['servers', 0])
    ),
    Ka = onlyOAS3(
      (0, Rt.createSelector)(
        ln,
        e => e.getIn(['components', 'securitySchemes']) || null
      )
    ),
    wrap_selectors_validOperationMethods = (e, t) =>
      function (r) {
        if (t.specSelectors.isOAS3())
          return t.oas3Selectors.validOperationMethods();
        for (
          var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          a[o - 1] = arguments[o];
        return e(...a);
      },
    za = $a,
    Fa = $a,
    Wa = $a,
    Ha = $a,
    Ga = $a;
  const Xa = (function wrap_selectors_onlyOAS3(e) {
    return (t, r) =>
      function () {
        for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
          a[o] = arguments[o];
        if (r.getSystem().specSelectors.isOAS3()) {
          let t = r
            .getState()
            .getIn([
              'spec',
              'resolvedSubtrees',
              'components',
              'securitySchemes',
            ]);
          return e(r, t, ...a);
        }
        return t(...a);
      };
  })(
    (0, Rt.createSelector)(
      e => e,
      e => {
        let { specSelectors: t } = e;
        return t.securityDefinitions();
      },
      (e, t) => {
        let r = (0, Fe.List)();
        return t
          ? (t.entrySeq().forEach(e => {
              let [t, n] = e;
              const a = n.get('type');
              if (
                ('oauth2' === a &&
                  n
                    .get('flows')
                    .entrySeq()
                    .forEach(e => {
                      let [a, o] = e,
                        s = (0, Fe.fromJS)({
                          flow: a,
                          authorizationUrl: o.get('authorizationUrl'),
                          tokenUrl: o.get('tokenUrl'),
                          scopes: o.get('scopes'),
                          type: n.get('type'),
                          description: n.get('description'),
                        });
                      r = r.push(
                        new Fe.Map({ [t]: s.filter(e => void 0 !== e) })
                      );
                    }),
                ('http' !== a && 'apiKey' !== a) ||
                  (r = r.push(new Fe.Map({ [t]: n }))),
                'openIdConnect' === a && n.get('openIdConnectData'))
              ) {
                let e = n.get('openIdConnectData');
                (
                  e.get('grant_types_supported') || [
                    'authorization_code',
                    'implicit',
                  ]
                ).forEach(a => {
                  let o =
                      e.get('scopes_supported') &&
                      e
                        .get('scopes_supported')
                        .reduce((e, t) => e.set(t, ''), new Fe.Map()),
                    s = (0, Fe.fromJS)({
                      flow: a,
                      authorizationUrl: e.get('authorization_endpoint'),
                      tokenUrl: e.get('token_endpoint'),
                      scopes: o,
                      type: 'oauth2',
                      openIdConnectUrl: n.get('openIdConnectUrl'),
                    });
                  r = r.push(new Fe.Map({ [t]: s.filter(e => void 0 !== e) }));
                });
              }
            }),
            r)
          : r;
      }
    )
  );
  function OAS3ComponentWrapFactory(e) {
    return (t, r) => n =>
      'function' == typeof r.specSelectors?.isOAS3
        ? r.specSelectors.isOAS3()
          ? Ke.default.createElement(e, (0, rr.default)({}, n, r, { Ori: t }))
          : Ke.default.createElement(t, n)
        : (console.warn("OAS3 wrapper: couldn't get spec"), null);
  }
  const Ya = (0, Fe.Map)(),
    selectors_isSwagger2 = () => e =>
      (function isSwagger2(e) {
        const t = e.get('swagger');
        return 'string' == typeof t && '2.0' === t;
      })(e.getSystem().specSelectors.specJson()),
    selectors_isOAS30 = () => e =>
      (function isOAS30(e) {
        const t = e.get('openapi');
        return 'string' == typeof t && /^3\.0\.([0123])(?:-rc[012])?$/.test(t);
      })(e.getSystem().specSelectors.specJson()),
    selectors_isOAS3 = () => e => e.getSystem().specSelectors.isOAS30();
  function selectors_onlyOAS3(e) {
    return function (t) {
      for (
        var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
        a < r;
        a++
      )
        n[a - 1] = arguments[a];
      return r => {
        if (r.specSelectors.isOAS3()) {
          const a = e(t, ...n);
          return 'function' == typeof a ? a(r) : a;
        }
        return null;
      };
    };
  }
  const Qa = selectors_onlyOAS3(
      () => e => e.specSelectors.specJson().get('servers', Ya)
    ),
    Za = selectors_onlyOAS3((e, t) => {
      let { callbacks: r, specPath: n } = t;
      return e => {
        const t = e.specSelectors.validOperationMethods();
        return Fe.Map.isMap(r)
          ? r
              .reduce((e, r, a) => {
                if (!Fe.Map.isMap(r)) return e;
                const o = r.reduce((e, r, o) => {
                  if (!Fe.Map.isMap(r)) return e;
                  const s = r
                    .entrySeq()
                    .filter(e => {
                      let [r] = e;
                      return t.includes(r);
                    })
                    .map(e => {
                      let [t, r] = e;
                      return {
                        operation: (0, Fe.Map)({ operation: r }),
                        method: t,
                        path: o,
                        callbackName: a,
                        specPath: n.concat([a, o, t]),
                      };
                    });
                  return e.concat(s);
                }, (0, Fe.List)());
                return e.concat(o);
              }, (0, Fe.List)())
              .groupBy(e => e.callbackName)
              .map(e => e.toArray())
              .toObject()
          : {};
      };
    });
  var callbacks = e => {
    let { callbacks: t, specPath: r, specSelectors: n, getComponent: a } = e;
    const o = n.callbacksOperations({ callbacks: t, specPath: r }),
      s = Object.keys(o),
      l = a('OperationContainer', !0);
    return 0 === s.length
      ? Ke.default.createElement('span', null, 'No callbacks')
      : Ke.default.createElement(
          'div',
          null,
          s.map(e =>
            Ke.default.createElement(
              'div',
              { key: `${e}` },
              Ke.default.createElement('h2', null, e),
              o[e].map(t =>
                Ke.default.createElement(l, {
                  key: `${e}-${t.path}-${t.method}`,
                  op: t.operation,
                  tag: 'callbacks',
                  method: t.method,
                  path: t.path,
                  specPath: t.specPath,
                  allowTryItOut: !1,
                })
              )
            )
          )
        );
  };
  const getDefaultRequestBodyValue = (e, t, r, n) => {
    const a = e.getIn(['content', t]) ?? (0, Fe.OrderedMap)(),
      o = a.get('schema', (0, Fe.OrderedMap)()).toJS(),
      s = void 0 !== a.get('examples'),
      l = a.get('example'),
      i = s ? a.getIn(['examples', r, 'value']) : l;
    return stringify(n.getSampleSchema(o, t, { includeWriteOnly: !0 }, i));
  };
  var request_body = e => {
    let {
      userHasEditedBody: t,
      requestBody: r,
      requestBodyValue: n,
      requestBodyInclusionSetting: a,
      requestBodyErrors: o,
      getComponent: s,
      getConfigs: l,
      specSelectors: i,
      fn: c,
      contentType: u,
      isExecute: d,
      specPath: p,
      onChange: m,
      onChangeIncludeEmpty: f,
      activeExamplesKey: h,
      updateActiveExamplesKey: g,
      setRetainRequestBodyValueFlag: y,
    } = e;
    const handleFile = e => {
        m(e.target.files[0]);
      },
      setIsIncludedOptions = e => {
        let t = { key: e, shouldDispatchInit: !1, defaultValue: !0 };
        return (
          'no value' === a.get(e, 'no value') && (t.shouldDispatchInit = !0), t
        );
      },
      S = s('Markdown', !0),
      v = s('modelExample'),
      _ = s('RequestBodyEditor'),
      b = s('highlightCode'),
      w = s('ExamplesSelectValueRetainer'),
      C = s('Example'),
      x = s('ParameterIncludeEmpty'),
      { showCommonExtensions: O } = l(),
      k = r?.get('description') ?? null,
      N = r?.get('content') ?? new Fe.OrderedMap();
    u = u || N.keySeq().first() || '';
    const A = N.get(u) ?? (0, Fe.OrderedMap)(),
      I = A.get('schema', (0, Fe.OrderedMap)()),
      R = A.get('examples', null),
      T = R?.map((e, t) => {
        const n = e?.get('value', null);
        return (
          n && (e = e.set('value', getDefaultRequestBodyValue(r, u, t, c), n)),
          e
        );
      });
    if (((o = Fe.List.isList(o) ? o : (0, Fe.List)()), !A.size)) return null;
    const B = 'object' === A.getIn(['schema', 'type']),
      j = 'binary' === A.getIn(['schema', 'format']),
      P = 'base64' === A.getIn(['schema', 'format']);
    if (
      'application/octet-stream' === u ||
      0 === u.indexOf('image/') ||
      0 === u.indexOf('audio/') ||
      0 === u.indexOf('video/') ||
      j ||
      P
    ) {
      const e = s('Input');
      return d
        ? Ke.default.createElement(e, { type: 'file', onChange: handleFile })
        : Ke.default.createElement(
            'i',
            null,
            'Example values are not available for ',
            Ke.default.createElement('code', null, u),
            ' media types.'
          );
    }
    if (
      B &&
      ('application/x-www-form-urlencoded' === u ||
        0 === u.indexOf('multipart/')) &&
      I.get('properties', (0, Fe.OrderedMap)()).size > 0
    ) {
      const e = s('JsonSchemaForm'),
        t = s('ParameterExt'),
        r = I.get('properties', (0, Fe.OrderedMap)());
      return (
        (n = Fe.Map.isMap(n) ? n : (0, Fe.OrderedMap)()),
        Ke.default.createElement(
          'div',
          { className: 'table-container' },
          k && Ke.default.createElement(S, { source: k }),
          Ke.default.createElement(
            'table',
            null,
            Ke.default.createElement(
              'tbody',
              null,
              Fe.Map.isMap(r) &&
                r.entrySeq().map(r => {
                  let [l, i] = r;
                  if (i.get('readOnly')) return;
                  let u = O ? getCommonExtensions(i) : null;
                  const p = I.get('required', (0, Fe.List)()).includes(l),
                    h = i.get('type'),
                    g = i.get('format'),
                    y = i.get('description'),
                    v = n.getIn([l, 'value']),
                    _ = n.getIn([l, 'errors']) || o,
                    b = a.get(l) || !1,
                    w =
                      i.has('default') ||
                      i.has('example') ||
                      i.hasIn(['items', 'example']) ||
                      i.hasIn(['items', 'default']),
                    C = i.has('enum') && (1 === i.get('enum').size || p),
                    k = w || C;
                  let N = '';
                  'array' !== h || k || (N = []),
                    ('object' === h || k) &&
                      (N = c.getSampleSchema(i, !1, { includeWriteOnly: !0 })),
                    'string' != typeof N &&
                      'object' === h &&
                      (N = stringify(N)),
                    'string' == typeof N &&
                      'array' === h &&
                      (N = JSON.parse(N));
                  const A =
                    'string' === h && ('binary' === g || 'base64' === g);
                  return Ke.default.createElement(
                    'tr',
                    {
                      key: l,
                      className: 'parameters',
                      'data-property-name': l,
                    },
                    Ke.default.createElement(
                      'td',
                      { className: 'parameters-col_name' },
                      Ke.default.createElement(
                        'div',
                        {
                          className: p
                            ? 'parameter__name required'
                            : 'parameter__name',
                        },
                        l,
                        p ? Ke.default.createElement('span', null, ' *') : null
                      ),
                      Ke.default.createElement(
                        'div',
                        { className: 'parameter__type' },
                        h,
                        g &&
                          Ke.default.createElement(
                            'span',
                            { className: 'prop-format' },
                            '($',
                            g,
                            ')'
                          ),
                        O && u.size
                          ? u.entrySeq().map(e => {
                              let [r, n] = e;
                              return Ke.default.createElement(t, {
                                key: `${r}-${n}`,
                                xKey: r,
                                xVal: n,
                              });
                            })
                          : null
                      ),
                      Ke.default.createElement(
                        'div',
                        { className: 'parameter__deprecated' },
                        i.get('deprecated') ? 'deprecated' : null
                      )
                    ),
                    Ke.default.createElement(
                      'td',
                      { className: 'parameters-col_description' },
                      Ke.default.createElement(S, { source: y }),
                      d
                        ? Ke.default.createElement(
                            'div',
                            null,
                            Ke.default.createElement(e, {
                              fn: c,
                              dispatchInitialValue: !A,
                              schema: i,
                              description: l,
                              getComponent: s,
                              value: void 0 === v ? N : v,
                              required: p,
                              errors: _,
                              onChange: e => {
                                m(e, [l]);
                              },
                            }),
                            p
                              ? null
                              : Ke.default.createElement(x, {
                                  onChange: e => f(l, e),
                                  isIncluded: b,
                                  isIncludedOptions: setIsIncludedOptions(l),
                                  isDisabled: Array.isArray(v)
                                    ? 0 !== v.length
                                    : !isEmptyValue(v),
                                })
                          )
                        : null
                    )
                  );
                })
            )
          )
        )
      );
    }
    const M = getDefaultRequestBodyValue(r, u, h, c);
    let q = null;
    return (
      getKnownSyntaxHighlighterLanguage(M) && (q = 'json'),
      Ke.default.createElement(
        'div',
        null,
        k && Ke.default.createElement(S, { source: k }),
        T
          ? Ke.default.createElement(w, {
              userHasEditedBody: t,
              examples: T,
              currentKey: h,
              currentUserInputValue: n,
              onSelect: e => {
                g(e);
              },
              updateValue: m,
              defaultToFirstExample: !0,
              getComponent: s,
              setRetainRequestBodyValueFlag: y,
            })
          : null,
        d
          ? Ke.default.createElement(
              'div',
              null,
              Ke.default.createElement(_, {
                value: n,
                errors: o,
                defaultValue: M,
                onChange: m,
                getComponent: s,
              })
            )
          : Ke.default.createElement(v, {
              getComponent: s,
              getConfigs: l,
              specSelectors: i,
              expandDepth: 1,
              isExecute: d,
              schema: A.get('schema'),
              specPath: p.push('content', u),
              example: Ke.default.createElement(b, {
                className: 'body-param__example',
                getConfigs: l,
                language: q,
                value: stringify(n) || M,
              }),
              includeWriteOnly: !0,
            }),
        T
          ? Ke.default.createElement(C, {
              example: T.get(h),
              getComponent: s,
              getConfigs: l,
            })
          : null
      )
    );
  };
  class operation_link_OperationLink extends Ke.Component {
    render() {
      const { link: e, name: t, getComponent: r } = this.props,
        n = r('Markdown', !0);
      let a = e.get('operationId') || e.get('operationRef'),
        o = e.get('parameters') && e.get('parameters').toJS(),
        s = e.get('description');
      return Ke.default.createElement(
        'div',
        { className: 'operation-link' },
        Ke.default.createElement(
          'div',
          { className: 'description' },
          Ke.default.createElement(
            'b',
            null,
            Ke.default.createElement('code', null, t)
          ),
          s ? Ke.default.createElement(n, { source: s }) : null
        ),
        Ke.default.createElement(
          'pre',
          null,
          'Operation `',
          a,
          '`',
          Ke.default.createElement('br', null),
          Ke.default.createElement('br', null),
          'Parameters ',
          (function padString(e, t) {
            if ('string' != typeof t) return '';
            return t
              .split('\n')
              .map((t, r) => (r > 0 ? Array(e + 1).join(' ') + t : t))
              .join('\n');
          })(0, JSON.stringify(o, null, 2)) || '{}',
          Ke.default.createElement('br', null)
        )
      );
    }
  }
  var eo = operation_link_OperationLink;
  class Servers extends Ke.default.Component {
    componentDidMount() {
      let { servers: e, currentServer: t } = this.props;
      t || this.setServer(e.first()?.get('url'));
    }
    UNSAFE_componentWillReceiveProps(e) {
      let { servers: t, setServerVariableValue: r, getServerVariable: n } = e;
      if (
        this.props.currentServer !== e.currentServer ||
        this.props.servers !== e.servers
      ) {
        let a = t.find(t => t.get('url') === e.currentServer),
          o =
            this.props.servers.find(
              e => e.get('url') === this.props.currentServer
            ) || (0, Fe.OrderedMap)();
        if (!a) return this.setServer(t.first().get('url'));
        let s = (
            (o.get('variables') || (0, Fe.OrderedMap)()).find(e =>
              e.get('default')
            ) || (0, Fe.OrderedMap)()
          ).get('default'),
          l = a.get('variables') || (0, Fe.OrderedMap)(),
          i = (l.find(e => e.get('default')) || (0, Fe.OrderedMap)()).get(
            'default'
          );
        l.map((t, a) => {
          (n(e.currentServer, a) && s === i) ||
            r({ server: e.currentServer, key: a, val: t.get('default') || '' });
        });
      }
    }
    onServerChange = e => {
      this.setServer(e.target.value);
    };
    onServerVariableValueChange = e => {
      let { setServerVariableValue: t, currentServer: r } = this.props,
        n = e.target.getAttribute('data-variable'),
        a = e.target.value;
      'function' == typeof t && t({ server: r, key: n, val: a });
    };
    setServer = e => {
      let { setSelectedServer: t } = this.props;
      t(e);
    };
    render() {
      let {
          servers: e,
          currentServer: t,
          getServerVariable: r,
          getEffectiveServerValue: n,
        } = this.props,
        a =
          (e.find(e => e.get('url') === t) || (0, Fe.OrderedMap)()).get(
            'variables'
          ) || (0, Fe.OrderedMap)(),
        o = 0 !== a.size;
      return Ke.default.createElement(
        'div',
        { className: 'servers' },
        Ke.default.createElement(
          'label',
          { htmlFor: 'servers' },
          Ke.default.createElement(
            'select',
            { onChange: this.onServerChange, value: t },
            e
              .valueSeq()
              .map(e =>
                Ke.default.createElement(
                  'option',
                  { value: e.get('url'), key: e.get('url') },
                  e.get('url'),
                  e.get('description') && ` - ${e.get('description')}`
                )
              )
              .toArray()
          )
        ),
        o
          ? Ke.default.createElement(
              'div',
              null,
              Ke.default.createElement(
                'div',
                { className: 'computed-url' },
                'Computed URL:',
                Ke.default.createElement('code', null, n(t))
              ),
              Ke.default.createElement('h4', null, 'Server variables'),
              Ke.default.createElement(
                'table',
                null,
                Ke.default.createElement(
                  'tbody',
                  null,
                  a.entrySeq().map(e => {
                    let [n, a] = e;
                    return Ke.default.createElement(
                      'tr',
                      { key: n },
                      Ke.default.createElement('td', null, n),
                      Ke.default.createElement(
                        'td',
                        null,
                        a.get('enum')
                          ? Ke.default.createElement(
                              'select',
                              {
                                'data-variable': n,
                                onChange: this.onServerVariableValueChange,
                              },
                              a.get('enum').map(e =>
                                Ke.default.createElement(
                                  'option',
                                  {
                                    selected: e === r(t, n),
                                    key: e,
                                    value: e,
                                  },
                                  e
                                )
                              )
                            )
                          : Ke.default.createElement('input', {
                              type: 'text',
                              value: r(t, n) || '',
                              onChange: this.onServerVariableValueChange,
                              'data-variable': n,
                            })
                      )
                    );
                  })
                )
              )
            )
          : null
      );
    }
  }
  class ServersContainer extends Ke.default.Component {
    render() {
      const {
          specSelectors: e,
          oas3Selectors: t,
          oas3Actions: r,
          getComponent: n,
        } = this.props,
        a = e.servers(),
        o = n('Servers');
      return a && a.size
        ? Ke.default.createElement(
            'div',
            null,
            Ke.default.createElement(
              'span',
              { className: 'servers-title' },
              'Servers'
            ),
            Ke.default.createElement(o, {
              servers: a,
              currentServer: t.selectedServer(),
              setSelectedServer: r.setSelectedServer,
              setServerVariableValue: r.setServerVariableValue,
              getServerVariable: t.serverVariableValue,
              getEffectiveServerValue: t.serverEffectiveValue,
            })
          )
        : null;
    }
  }
  const to = Function.prototype;
  class RequestBodyEditor extends Ke.PureComponent {
    static defaultProps = { onChange: to, userHasEditedBody: !1 };
    constructor(e, t) {
      super(e, t),
        (this.state = { value: stringify(e.value) || e.defaultValue }),
        e.onChange(e.value);
    }
    applyDefaultValue = e => {
      const { onChange: t, defaultValue: r } = e || this.props;
      return this.setState({ value: r }), t(r);
    };
    onChange = e => {
      this.props.onChange(stringify(e));
    };
    onDomChange = e => {
      const t = e.target.value;
      this.setState({ value: t }, () => this.onChange(t));
    };
    UNSAFE_componentWillReceiveProps(e) {
      this.props.value !== e.value &&
        e.value !== this.state.value &&
        this.setState({ value: stringify(e.value) }),
        !e.value &&
          e.defaultValue &&
          this.state.value &&
          this.applyDefaultValue(e);
    }
    render() {
      let { getComponent: e, errors: t } = this.props,
        { value: r } = this.state,
        n = t.size > 0;
      const a = e('TextArea');
      return Ke.default.createElement(
        'div',
        { className: 'body-param' },
        Ke.default.createElement(a, {
          className: (0, _a.default)('body-param__text', { invalid: n }),
          title: t.size ? t.join(', ') : '',
          value: r,
          onChange: this.onDomChange,
        })
      );
    }
  }
  class HttpAuth extends Ke.default.Component {
    constructor(e, t) {
      super(e, t);
      let { name: r, schema: n } = this.props,
        a = this.getValue();
      this.state = { name: r, schema: n, value: a };
    }
    getValue() {
      let { name: e, authorized: t } = this.props;
      return t && t.getIn([e, 'value']);
    }
    onChange = e => {
      let { onChange: t } = this.props,
        { value: r, name: n } = e.target,
        a = Object.assign({}, this.state.value);
      n ? (a[n] = r) : (a = r),
        this.setState({ value: a }, () => t(this.state));
    };
    render() {
      let { schema: e, getComponent: t, errSelectors: r, name: n } = this.props;
      const a = t('Input'),
        o = t('Row'),
        s = t('Col'),
        l = t('authError'),
        i = t('Markdown', !0),
        c = t('JumpToPath', !0),
        u = (e.get('scheme') || '').toLowerCase();
      let d = this.getValue(),
        p = r.allErrors().filter(e => e.get('authId') === n);
      if ('basic' === u) {
        let t = d ? d.get('username') : null;
        return Ke.default.createElement(
          'div',
          null,
          Ke.default.createElement(
            'h4',
            null,
            Ke.default.createElement('code', null, n || e.get('name')),
            '  (http, Basic)',
            Ke.default.createElement(c, { path: ['securityDefinitions', n] })
          ),
          t && Ke.default.createElement('h6', null, 'Authorized'),
          Ke.default.createElement(
            o,
            null,
            Ke.default.createElement(i, { source: e.get('description') })
          ),
          Ke.default.createElement(
            o,
            null,
            Ke.default.createElement('label', null, 'Username:'),
            t
              ? Ke.default.createElement('code', null, ' ', t, ' ')
              : Ke.default.createElement(
                  s,
                  null,
                  Ke.default.createElement(a, {
                    type: 'text',
                    required: 'required',
                    name: 'username',
                    'aria-label': 'auth-basic-username',
                    onChange: this.onChange,
                    autoFocus: !0,
                  })
                )
          ),
          Ke.default.createElement(
            o,
            null,
            Ke.default.createElement('label', null, 'Password:'),
            t
              ? Ke.default.createElement('code', null, ' ****** ')
              : Ke.default.createElement(
                  s,
                  null,
                  Ke.default.createElement(a, {
                    autoComplete: 'new-password',
                    name: 'password',
                    type: 'password',
                    'aria-label': 'auth-basic-password',
                    onChange: this.onChange,
                  })
                )
          ),
          p
            .valueSeq()
            .map((e, t) => Ke.default.createElement(l, { error: e, key: t }))
        );
      }
      return 'bearer' === u
        ? Ke.default.createElement(
            'div',
            null,
            Ke.default.createElement(
              'h4',
              null,
              Ke.default.createElement('code', null, n || e.get('name')),
              '  (http, Bearer)',
              Ke.default.createElement(c, { path: ['securityDefinitions', n] })
            ),
            d && Ke.default.createElement('h6', null, 'Authorized'),
            Ke.default.createElement(
              o,
              null,
              Ke.default.createElement(i, { source: e.get('description') })
            ),
            Ke.default.createElement(
              o,
              null,
              Ke.default.createElement('label', null, 'Value:'),
              d
                ? Ke.default.createElement('code', null, ' ****** ')
                : Ke.default.createElement(
                    s,
                    null,
                    Ke.default.createElement(a, {
                      type: 'text',
                      'aria-label': 'auth-bearer-value',
                      onChange: this.onChange,
                      autoFocus: !0,
                    })
                  )
            ),
            p
              .valueSeq()
              .map((e, t) => Ke.default.createElement(l, { error: e, key: t }))
          )
        : Ke.default.createElement(
            'div',
            null,
            Ke.default.createElement(
              'em',
              null,
              Ke.default.createElement('b', null, n),
              ' HTTP authentication: unsupported scheme ',
              `'${u}'`
            )
          );
    }
  }
  class OperationServers extends Ke.default.Component {
    setSelectedServer = e => {
      const { path: t, method: r } = this.props;
      return this.forceUpdate(), this.props.setSelectedServer(e, `${t}:${r}`);
    };
    setServerVariableValue = e => {
      const { path: t, method: r } = this.props;
      return (
        this.forceUpdate(),
        this.props.setServerVariableValue({ ...e, namespace: `${t}:${r}` })
      );
    };
    getSelectedServer = () => {
      const { path: e, method: t } = this.props;
      return this.props.getSelectedServer(`${e}:${t}`);
    };
    getServerVariable = (e, t) => {
      const { path: r, method: n } = this.props;
      return this.props.getServerVariable(
        { namespace: `${r}:${n}`, server: e },
        t
      );
    };
    getEffectiveServerValue = e => {
      const { path: t, method: r } = this.props;
      return this.props.getEffectiveServerValue({
        server: e,
        namespace: `${t}:${r}`,
      });
    };
    render() {
      const {
        operationServers: e,
        pathServers: t,
        getComponent: r,
      } = this.props;
      if (!e && !t) return null;
      const n = r('Servers'),
        a = e || t,
        o = e ? 'operation' : 'path';
      return Ke.default.createElement(
        'div',
        { className: 'opblock-section operation-servers' },
        Ke.default.createElement(
          'div',
          { className: 'opblock-section-header' },
          Ke.default.createElement(
            'div',
            { className: 'tab-header' },
            Ke.default.createElement(
              'h4',
              { className: 'opblock-title' },
              'Servers'
            )
          )
        ),
        Ke.default.createElement(
          'div',
          { className: 'opblock-description-wrapper' },
          Ke.default.createElement(
            'h4',
            { className: 'message' },
            'These ',
            o,
            '-level options override the global server options.'
          ),
          Ke.default.createElement(n, {
            servers: a,
            currentServer: this.getSelectedServer(),
            setSelectedServer: this.setSelectedServer,
            setServerVariableValue: this.setServerVariableValue,
            getServerVariable: this.getServerVariable,
            getEffectiveServerValue: this.getEffectiveServerValue,
          })
        )
      );
    }
  }
  var ro = {
    Callbacks: callbacks,
    HttpAuth,
    RequestBody: request_body,
    Servers,
    ServersContainer,
    RequestBodyEditor,
    OperationServers,
    operationLink: eo,
  };
  const no = new ja.Remarkable('commonmark');
  no.block.ruler.enable(['table']), no.set({ linkTarget: '_blank' });
  const markdown_Markdown = e => {
    let { source: t, className: r = '', getConfigs: n } = e;
    if ('string' != typeof t) return null;
    if (t) {
      const { useUnsafeMarkdown: e } = n(),
        a = sanitizer(no.render(t), { useUnsafeMarkdown: e });
      let o;
      return (
        'string' == typeof a && (o = a.trim()),
        Ke.default.createElement('div', {
          dangerouslySetInnerHTML: { __html: o },
          className: (0, _a.default)(r, 'renderedMarkdown'),
        })
      );
    }
    return null;
  };
  markdown_Markdown.defaultProps = {
    getConfigs: () => ({ useUnsafeMarkdown: !1 }),
  };
  var ao = OAS3ComponentWrapFactory(markdown_Markdown),
    oo = OAS3ComponentWrapFactory(e => {
      let { Ori: t, ...r } = e;
      const {
          schema: n,
          getComponent: a,
          errSelectors: o,
          authorized: s,
          onAuthChange: l,
          name: i,
        } = r,
        c = a('HttpAuth');
      return 'http' === n.get('type')
        ? Ke.default.createElement(c, {
            key: i,
            schema: n,
            name: i,
            errSelectors: o,
            authorized: s,
            getComponent: a,
            onChange: l,
          })
        : Ke.default.createElement(t, r);
    }),
    so = OAS3ComponentWrapFactory(OnlineValidatorBadge);
  class ModelComponent extends Ke.Component {
    render() {
      let { getConfigs: e, schema: t } = this.props,
        r = ['model-box'],
        n = null;
      return (
        !0 === t.get('deprecated') &&
          (r.push('deprecated'),
          (n = Ke.default.createElement(
            'span',
            { className: 'model-deprecated-warning' },
            'Deprecated:'
          ))),
        Ke.default.createElement(
          'div',
          { className: r.join(' ') },
          n,
          Ke.default.createElement(
            Model,
            (0, rr.default)({}, this.props, {
              getConfigs: e,
              depth: 1,
              expandDepth: this.props.expandDepth || 0,
            })
          )
        )
      );
    }
  }
  var lo = OAS3ComponentWrapFactory(ModelComponent),
    io = OAS3ComponentWrapFactory(e => {
      let { Ori: t, ...r } = e;
      const { schema: n, getComponent: a, errors: o, onChange: s } = r,
        l = n && n.get ? n.get('format') : null,
        i = n && n.get ? n.get('type') : null,
        c = a('Input');
      return i && 'string' === i && l && ('binary' === l || 'base64' === l)
        ? Ke.default.createElement(c, {
            type: 'file',
            className: o.length ? 'invalid' : '',
            title: o.length ? o : '',
            onChange: e => {
              s(e.target.files[0]);
            },
            disabled: t.isDisabled,
          })
        : Ke.default.createElement(t, r);
    }),
    co = {
      Markdown: ao,
      AuthItem: oo,
      OpenAPIVersion: (function OAS30ComponentWrapFactory(e) {
        return (t, r) => n =>
          'function' == typeof r.specSelectors?.isOAS30
            ? r.specSelectors.isOAS30()
              ? Ke.default.createElement(
                  e,
                  (0, rr.default)({}, n, r, { Ori: t })
                )
              : Ke.default.createElement(t, n)
            : (console.warn("OAS30 wrapper: couldn't get spec"), null);
      })(e => {
        const { Ori: t } = e;
        return Ke.default.createElement(t, { oasVersion: '3.0' });
      }),
      JsonSchema_string: io,
      model: lo,
      onlineValidatorBadge: so,
    };
  const uo = 'oas3_set_servers',
    po = 'oas3_set_request_body_value',
    mo = 'oas3_set_request_body_retain_flag',
    fo = 'oas3_set_request_body_inclusion',
    ho = 'oas3_set_active_examples_member',
    go = 'oas3_set_request_content_type',
    yo = 'oas3_set_response_content_type',
    Eo = 'oas3_set_server_variable_value',
    So = 'oas3_set_request_body_validate_error',
    vo = 'oas3_clear_request_body_validate_error',
    _o = 'oas3_clear_request_body_value';
  function setSelectedServer(e, t) {
    return { type: uo, payload: { selectedServerUrl: e, namespace: t } };
  }
  function setRequestBodyValue(e) {
    let { value: t, pathMethod: r } = e;
    return { type: po, payload: { value: t, pathMethod: r } };
  }
  const setRetainRequestBodyValueFlag = e => {
    let { value: t, pathMethod: r } = e;
    return { type: mo, payload: { value: t, pathMethod: r } };
  };
  function setRequestBodyInclusion(e) {
    let { value: t, pathMethod: r, name: n } = e;
    return { type: fo, payload: { value: t, pathMethod: r, name: n } };
  }
  function setActiveExamplesMember(e) {
    let { name: t, pathMethod: r, contextType: n, contextName: a } = e;
    return {
      type: ho,
      payload: { name: t, pathMethod: r, contextType: n, contextName: a },
    };
  }
  function setRequestContentType(e) {
    let { value: t, pathMethod: r } = e;
    return { type: go, payload: { value: t, pathMethod: r } };
  }
  function setResponseContentType(e) {
    let { value: t, path: r, method: n } = e;
    return { type: yo, payload: { value: t, path: r, method: n } };
  }
  function setServerVariableValue(e) {
    let { server: t, namespace: r, key: n, val: a } = e;
    return { type: Eo, payload: { server: t, namespace: r, key: n, val: a } };
  }
  const setRequestBodyValidateError = e => {
      let { path: t, method: r, validationErrors: n } = e;
      return { type: So, payload: { path: t, method: r, validationErrors: n } };
    },
    clearRequestBodyValidateError = e => {
      let { path: t, method: r } = e;
      return { type: vo, payload: { path: t, method: r } };
    },
    initRequestBodyValidateError = e => {
      let { pathMethod: t } = e;
      return { type: vo, payload: { path: t[0], method: t[1] } };
    },
    clearRequestBodyValue = e => {
      let { pathMethod: t } = e;
      return { type: _o, payload: { pathMethod: t } };
    },
    oas3_selectors_onlyOAS3 = e =>
      function (t) {
        for (
          var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          n[a - 1] = arguments[a];
        return r => {
          if (r.getSystem().specSelectors.isOAS3()) {
            const a = e(t, ...n);
            return 'function' == typeof a ? a(r) : a;
          }
          return null;
        };
      };
  const bo = oas3_selectors_onlyOAS3((e, t) => {
      const r = t ? [t, 'selectedServer'] : ['selectedServer'];
      return e.getIn(r) || '';
    }),
    wo = oas3_selectors_onlyOAS3(
      (e, t, r) => e.getIn(['requestData', t, r, 'bodyValue']) || null
    ),
    Co = oas3_selectors_onlyOAS3(
      (e, t, r) => e.getIn(['requestData', t, r, 'retainBodyValue']) || !1
    ),
    selectDefaultRequestBodyValue = (e, t, r) => e => {
      const { oas3Selectors: n, specSelectors: a, fn: o } = e.getSystem();
      if (a.isOAS3()) {
        const e = n.requestContentType(t, r);
        if (e)
          return getDefaultRequestBodyValue(
            a.specResolvedSubtree(['paths', t, r, 'requestBody']),
            e,
            n.activeExamplesMember(t, r, 'requestBody', 'requestBody'),
            o
          );
      }
      return null;
    },
    xo = oas3_selectors_onlyOAS3((e, t, r) => e => {
      const { oas3Selectors: n, specSelectors: a, fn: o } = e;
      let s = !1;
      const l = n.requestContentType(t, r);
      let i = n.requestBodyValue(t, r);
      const c = a.specResolvedSubtree(['paths', t, r, 'requestBody']);
      if (!c) return !1;
      if (
        (Fe.Map.isMap(i) &&
          (i = stringify(
            i
              .mapEntries(e =>
                Fe.Map.isMap(e[1]) ? [e[0], e[1].get('value')] : e
              )
              .toJS()
          )),
        Fe.List.isList(i) && (i = stringify(i)),
        l)
      ) {
        const e = getDefaultRequestBodyValue(
          c,
          l,
          n.activeExamplesMember(t, r, 'requestBody', 'requestBody'),
          o
        );
        s = !!i && i !== e;
      }
      return s;
    }),
    Oo = oas3_selectors_onlyOAS3(
      (e, t, r) =>
        e.getIn(['requestData', t, r, 'bodyInclusion']) || (0, Fe.Map)()
    ),
    ko = oas3_selectors_onlyOAS3(
      (e, t, r) => e.getIn(['requestData', t, r, 'errors']) || null
    ),
    No = oas3_selectors_onlyOAS3(
      (e, t, r, n, a) =>
        e.getIn(['examples', t, r, n, a, 'activeExample']) || null
    ),
    Ao = oas3_selectors_onlyOAS3(
      (e, t, r) => e.getIn(['requestData', t, r, 'requestContentType']) || null
    ),
    Io = oas3_selectors_onlyOAS3(
      (e, t, r) => e.getIn(['requestData', t, r, 'responseContentType']) || null
    ),
    Ro = oas3_selectors_onlyOAS3((e, t, r) => {
      let n;
      if ('string' != typeof t) {
        const { server: e, namespace: a } = t;
        n = a
          ? [a, 'serverVariableValues', e, r]
          : ['serverVariableValues', e, r];
      } else {
        n = ['serverVariableValues', t, r];
      }
      return e.getIn(n) || null;
    }),
    To = oas3_selectors_onlyOAS3((e, t) => {
      let r;
      if ('string' != typeof t) {
        const { server: e, namespace: n } = t;
        r = n ? [n, 'serverVariableValues', e] : ['serverVariableValues', e];
      } else {
        r = ['serverVariableValues', t];
      }
      return e.getIn(r) || (0, Fe.OrderedMap)();
    }),
    Bo = oas3_selectors_onlyOAS3((e, t) => {
      var r, n;
      if ('string' != typeof t) {
        const { server: a, namespace: o } = t;
        (n = a),
          (r = o
            ? e.getIn([o, 'serverVariableValues', n])
            : e.getIn(['serverVariableValues', n]));
      } else (n = t), (r = e.getIn(['serverVariableValues', n]));
      r = r || (0, Fe.OrderedMap)();
      let a = n;
      return (
        r.map((e, t) => {
          a = a.replace(new RegExp(`{${t}}`, 'g'), e);
        }),
        a
      );
    }),
    jo = (function validateRequestBodyIsRequired(e) {
      return function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return t => {
          const n = t.getSystem().specSelectors.specJson();
          let a = [...r][1] || [];
          return (
            !n.getIn(['paths', ...a, 'requestBody', 'required']) || e(...r)
          );
        };
      };
    })((e, t) =>
      ((e, t) => (
        (t = t || []), !!e.getIn(['requestData', ...t, 'bodyValue'])
      ))(e, t)
    ),
    validateShallowRequired = (e, t) => {
      let {
          oas3RequiredRequestBodyContentType: r,
          oas3RequestContentType: n,
          oas3RequestBodyValue: a,
        } = t,
        o = [];
      if (!Fe.Map.isMap(a)) return o;
      let s = [];
      return (
        Object.keys(r.requestContentType).forEach(e => {
          if (e === n) {
            r.requestContentType[e].forEach(e => {
              s.indexOf(e) < 0 && s.push(e);
            });
          }
        }),
        s.forEach(e => {
          a.getIn([e, 'value']) || o.push(e);
        }),
        o
      );
    },
    Po = (0, Rt.createSelector)(() => [
      'get',
      'put',
      'post',
      'delete',
      'options',
      'head',
      'patch',
      'trace',
    ]);
  var Mo = {
    [uo]: (e, t) => {
      let {
        payload: { selectedServerUrl: r, namespace: n },
      } = t;
      const a = n ? [n, 'selectedServer'] : ['selectedServer'];
      return e.setIn(a, r);
    },
    [po]: (e, t) => {
      let {
          payload: { value: r, pathMethod: n },
        } = t,
        [a, o] = n;
      if (!Fe.Map.isMap(r))
        return e.setIn(['requestData', a, o, 'bodyValue'], r);
      let s,
        l = e.getIn(['requestData', a, o, 'bodyValue']) || (0, Fe.Map)();
      Fe.Map.isMap(l) || (l = (0, Fe.Map)());
      const [...i] = r.keys();
      return (
        i.forEach(e => {
          let t = r.getIn([e]);
          (l.has(e) && Fe.Map.isMap(t)) || (s = l.setIn([e, 'value'], t));
        }),
        e.setIn(['requestData', a, o, 'bodyValue'], s)
      );
    },
    [mo]: (e, t) => {
      let {
          payload: { value: r, pathMethod: n },
        } = t,
        [a, o] = n;
      return e.setIn(['requestData', a, o, 'retainBodyValue'], r);
    },
    [fo]: (e, t) => {
      let {
          payload: { value: r, pathMethod: n, name: a },
        } = t,
        [o, s] = n;
      return e.setIn(['requestData', o, s, 'bodyInclusion', a], r);
    },
    [ho]: (e, t) => {
      let {
          payload: { name: r, pathMethod: n, contextType: a, contextName: o },
        } = t,
        [s, l] = n;
      return e.setIn(['examples', s, l, a, o, 'activeExample'], r);
    },
    [go]: (e, t) => {
      let {
          payload: { value: r, pathMethod: n },
        } = t,
        [a, o] = n;
      return e.setIn(['requestData', a, o, 'requestContentType'], r);
    },
    [yo]: (e, t) => {
      let {
        payload: { value: r, path: n, method: a },
      } = t;
      return e.setIn(['requestData', n, a, 'responseContentType'], r);
    },
    [Eo]: (e, t) => {
      let {
        payload: { server: r, namespace: n, key: a, val: o },
      } = t;
      const s = n
        ? [n, 'serverVariableValues', r, a]
        : ['serverVariableValues', r, a];
      return e.setIn(s, o);
    },
    [So]: (e, t) => {
      let {
          payload: { path: r, method: n, validationErrors: a },
        } = t,
        o = [];
      if ((o.push('Required field is not provided'), a.missingBodyValue))
        return e.setIn(['requestData', r, n, 'errors'], (0, Fe.fromJS)(o));
      if (a.missingRequiredKeys && a.missingRequiredKeys.length > 0) {
        const { missingRequiredKeys: t } = a;
        return e.updateIn(
          ['requestData', r, n, 'bodyValue'],
          (0, Fe.fromJS)({}),
          e => t.reduce((e, t) => e.setIn([t, 'errors'], (0, Fe.fromJS)(o)), e)
        );
      }
      return (
        console.warn('unexpected result: SET_REQUEST_BODY_VALIDATE_ERROR'), e
      );
    },
    [vo]: (e, t) => {
      let {
        payload: { path: r, method: n },
      } = t;
      const a = e.getIn(['requestData', r, n, 'bodyValue']);
      if (!Fe.Map.isMap(a))
        return e.setIn(['requestData', r, n, 'errors'], (0, Fe.fromJS)([]));
      const [...o] = a.keys();
      return o
        ? e.updateIn(
            ['requestData', r, n, 'bodyValue'],
            (0, Fe.fromJS)({}),
            e =>
              o.reduce((e, t) => e.setIn([t, 'errors'], (0, Fe.fromJS)([])), e)
          )
        : e;
    },
    [_o]: (e, t) => {
      let {
          payload: { pathMethod: r },
        } = t,
        [n, a] = r;
      const o = e.getIn(['requestData', n, a, 'bodyValue']);
      return o
        ? Fe.Map.isMap(o)
          ? e.setIn(['requestData', n, a, 'bodyValue'], (0, Fe.Map)())
          : e.setIn(['requestData', n, a, 'bodyValue'], '')
        : e;
    },
  };
  function oas3() {
    return {
      components: ro,
      wrapComponents: co,
      statePlugins: {
        spec: { wrapSelectors: qe, selectors: De },
        auth: { wrapSelectors: Le },
        oas3: { actions: { ...Ue }, reducers: Mo, selectors: { ...$e } },
      },
    };
  }
  var webhooks = e => {
    let { specSelectors: t, getComponent: r } = e;
    const n = t.selectWebhooksOperations(),
      a = Object.keys(n),
      o = r('OperationContainer', !0);
    return 0 === a.length
      ? null
      : Ke.default.createElement(
          'div',
          { className: 'webhooks' },
          Ke.default.createElement('h2', null, 'Webhooks'),
          a.map(e =>
            Ke.default.createElement(
              'div',
              { key: `${e}-webhook` },
              n[e].map(t =>
                Ke.default.createElement(o, {
                  key: `${e}-${t.method}-webhook`,
                  op: t.operation,
                  tag: 'webhooks',
                  method: t.method,
                  path: e,
                  specPath: t.specPath,
                  allowTryItOut: !1,
                })
              )
            )
          )
        );
  };
  var components_license = e => {
    let { getComponent: t, specSelectors: r } = e;
    const n = r.selectLicenseNameField(),
      a = r.selectLicenseUrl(),
      o = t('Link');
    return Ke.default.createElement(
      'div',
      { className: 'info__license' },
      a
        ? Ke.default.createElement(
            'div',
            { className: 'info__license__url' },
            Ke.default.createElement(
              o,
              { target: '_blank', href: sanitizeUrl(a) },
              n
            )
          )
        : Ke.default.createElement('span', null, n)
    );
  };
  var components_contact = e => {
    let { getComponent: t, specSelectors: r } = e;
    const n = r.selectContactNameField(),
      a = r.selectContactUrl(),
      o = r.selectContactEmailField(),
      s = t('Link');
    return Ke.default.createElement(
      'div',
      { className: 'info__contact' },
      a &&
        Ke.default.createElement(
          'div',
          null,
          Ke.default.createElement(
            s,
            { href: sanitizeUrl(a), target: '_blank' },
            n,
            ' - Website'
          )
        ),
      o &&
        Ke.default.createElement(
          s,
          { href: sanitizeUrl(`mailto:${o}`) },
          a ? `Send email to ${n}` : `Contact ${n}`
        )
    );
  };
  var oas31_components_info = e => {
    let { getComponent: t, specSelectors: r } = e;
    const n = r.version(),
      a = r.url(),
      o = r.basePath(),
      s = r.host(),
      l = r.selectInfoSummaryField(),
      i = r.selectInfoDescriptionField(),
      c = r.selectInfoTitleField(),
      u = r.selectInfoTermsOfServiceUrl(),
      d = r.selectExternalDocsUrl(),
      p = r.selectExternalDocsDescriptionField(),
      m = r.contact(),
      f = r.license(),
      h = t('Markdown', !0),
      g = t('Link'),
      y = t('VersionStamp'),
      S = t('OpenAPIVersion'),
      v = t('InfoUrl'),
      _ = t('InfoBasePath'),
      b = t('License', !0),
      w = t('Contact', !0),
      C = t('JsonSchemaDialect', !0);
    return Ke.default.createElement(
      'div',
      { className: 'info' },
      Ke.default.createElement(
        'hgroup',
        { className: 'main' },
        Ke.default.createElement(
          'h2',
          { className: 'title' },
          c,
          Ke.default.createElement(
            'span',
            null,
            n && Ke.default.createElement(y, { version: n }),
            Ke.default.createElement(S, { oasVersion: '3.1' })
          )
        ),
        (s || o) && Ke.default.createElement(_, { host: s, basePath: o }),
        a && Ke.default.createElement(v, { getComponent: t, url: a })
      ),
      l && Ke.default.createElement('p', { className: 'info__summary' }, l),
      Ke.default.createElement(
        'div',
        { className: 'info__description description' },
        Ke.default.createElement(h, { source: i })
      ),
      u &&
        Ke.default.createElement(
          'div',
          { className: 'info__tos' },
          Ke.default.createElement(
            g,
            { target: '_blank', href: sanitizeUrl(u) },
            'Terms of service'
          )
        ),
      m.size > 0 && Ke.default.createElement(w, null),
      f.size > 0 && Ke.default.createElement(b, null),
      d &&
        Ke.default.createElement(
          g,
          {
            className: 'info__extdocs',
            target: '_blank',
            href: sanitizeUrl(d),
          },
          p || d
        ),
      Ke.default.createElement(C, null)
    );
  };
  var json_schema_dialect = e => {
    let { getComponent: t, specSelectors: r } = e;
    const n = r.selectJsonSchemaDialectField(),
      a = r.selectJsonSchemaDialectDefault(),
      o = t('Link');
    return Ke.default.createElement(
      Ke.default.Fragment,
      null,
      n &&
        n === a &&
        Ke.default.createElement(
          'p',
          { className: 'info__jsonschemadialect' },
          'JSON Schema dialect:',
          ' ',
          Ke.default.createElement(
            o,
            { target: '_blank', href: sanitizeUrl(n) },
            n
          )
        ),
      n &&
        n !== a &&
        Ke.default.createElement(
          'div',
          { className: 'error-wrapper' },
          Ke.default.createElement(
            'div',
            { className: 'no-margin' },
            Ke.default.createElement(
              'div',
              { className: 'errors' },
              Ke.default.createElement(
                'div',
                { className: 'errors-wrapper' },
                Ke.default.createElement(
                  'h4',
                  { className: 'center' },
                  'Warning'
                ),
                Ke.default.createElement(
                  'p',
                  { className: 'message' },
                  Ke.default.createElement(
                    'strong',
                    null,
                    'OpenAPI.jsonSchemaDialect'
                  ),
                  ' field contains a value different from the default value of',
                  ' ',
                  Ke.default.createElement(o, { target: '_blank', href: a }, a),
                  '. Values different from the default one are currently not supported. Please either omit the field or provide it with the default value.'
                )
              )
            )
          )
        )
    );
  };
  var version_pragma_filter = e => {
    let {
      bypass: t,
      isSwagger2: r,
      isOAS3: n,
      isOAS31: a,
      alsoShow: o,
      children: s,
    } = e;
    return t
      ? Ke.default.createElement('div', null, s)
      : r && (n || a)
      ? Ke.default.createElement(
          'div',
          { className: 'version-pragma' },
          o,
          Ke.default.createElement(
            'div',
            {
              className:
                'version-pragma__message version-pragma__message--ambiguous',
            },
            Ke.default.createElement(
              'div',
              null,
              Ke.default.createElement(
                'h3',
                null,
                'Unable to render this definition'
              ),
              Ke.default.createElement(
                'p',
                null,
                Ke.default.createElement('code', null, 'swagger'),
                ' and ',
                Ke.default.createElement('code', null, 'openapi'),
                ' fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.'
              ),
              Ke.default.createElement(
                'p',
                null,
                'Supported version fields are ',
                Ke.default.createElement('code', null, 'swagger: "2.0"'),
                ' and those that match ',
                Ke.default.createElement('code', null, 'openapi: 3.x.y'),
                ' (for example,',
                ' ',
                Ke.default.createElement('code', null, 'openapi: 3.1.0'),
                ').'
              )
            )
          )
        )
      : r || n || a
      ? Ke.default.createElement('div', null, s)
      : Ke.default.createElement(
          'div',
          { className: 'version-pragma' },
          o,
          Ke.default.createElement(
            'div',
            {
              className:
                'version-pragma__message version-pragma__message--missing',
            },
            Ke.default.createElement(
              'div',
              null,
              Ke.default.createElement(
                'h3',
                null,
                'Unable to render this definition'
              ),
              Ke.default.createElement(
                'p',
                null,
                'The provided definition does not specify a valid version field.'
              ),
              Ke.default.createElement(
                'p',
                null,
                'Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ',
                Ke.default.createElement('code', null, 'swagger: "2.0"'),
                ' and those that match ',
                Ke.default.createElement('code', null, 'openapi: 3.x.y'),
                ' (for example,',
                ' ',
                Ke.default.createElement('code', null, 'openapi: 3.1.0'),
                ').'
              )
            )
          )
        );
  };
  const getModelName = e =>
      'string' == typeof e && e.includes('#/components/schemas/')
        ? (e => {
            const t = e.replace(/~1/g, '/').replace(/~0/g, '~');
            try {
              return decodeURIComponent(t);
            } catch {
              return t;
            }
          })(e.replace(/^.*#\/components\/schemas\//, ''))
        : null,
    qo = (0, Ke.forwardRef)((e, t) => {
      let { schema: r, getComponent: n, onToggle: a } = e;
      const o = n('JSONSchema202012'),
        s = getModelName(r.get('$$ref')),
        l = (0, Ke.useCallback)(
          (e, t) => {
            a(s, t);
          },
          [s, a]
        );
      return Ke.default.createElement(o, {
        name: s,
        schema: r.toJS(),
        ref: t,
        onExpand: l,
      });
    });
  qo.defaultProps = {
    name: '',
    displayName: '',
    isRef: !1,
    required: !1,
    expandDepth: 0,
    depth: 1,
    includeReadOnly: !1,
    includeWriteOnly: !1,
    onToggle: () => {},
  };
  var Lo = qo;
  var models = e => {
    let {
      specActions: t,
      specSelectors: r,
      layoutSelectors: n,
      layoutActions: a,
      getComponent: o,
      getConfigs: s,
    } = e;
    const l = r.selectSchemas(),
      i = Object.keys(l).length > 0,
      c = ['components', 'schemas'],
      { docExpansion: u, defaultModelsExpandDepth: d } = s(),
      p = d > 0 && 'none' !== u,
      m = n.isShown(c, p),
      f = o('Collapse'),
      h = o('JSONSchema202012'),
      g = o('ArrowUpIcon'),
      y = o('ArrowDownIcon');
    (0, Ke.useEffect)(() => {
      const e = m && d > 1,
        n = null != r.specResolvedSubtree(c);
      e && !n && t.requestResolvedSubtree(c);
    }, [m, d]);
    const S = (0, Ke.useCallback)(() => {
        a.show(c, !m);
      }, [m]),
      v = (0, Ke.useCallback)(e => {
        null !== e && a.readyToScroll(c, e);
      }, []),
      handleJSONSchema202012Ref = e => t => {
        null !== t && a.readyToScroll([...c, e], t);
      },
      handleJSONSchema202012Expand = e => (n, a) => {
        if (a) {
          const n = [...c, e];
          null != r.specResolvedSubtree(n) ||
            t.requestResolvedSubtree([...c, e]);
        }
      };
    return !i || d < 0
      ? null
      : Ke.default.createElement(
          'section',
          { className: (0, _a.default)('models', { 'is-open': m }), ref: v },
          Ke.default.createElement(
            'h4',
            null,
            Ke.default.createElement(
              'button',
              { 'aria-expanded': m, className: 'models-control', onClick: S },
              Ke.default.createElement('span', null, 'Schemas'),
              m
                ? Ke.default.createElement(g, null)
                : Ke.default.createElement(y, null)
            )
          ),
          Ke.default.createElement(
            f,
            { isOpened: m },
            Object.entries(l).map(e => {
              let [t, r] = e;
              return Ke.default.createElement(h, {
                key: t,
                ref: handleJSONSchema202012Ref(t),
                schema: r,
                name: t,
                onExpand: handleJSONSchema202012Expand(t),
              });
            })
          )
        );
  };
  var mutual_tls_auth = e => {
    let { schema: t, getComponent: r } = e;
    const n = r('JumpToPath', !0);
    return Ke.default.createElement(
      'div',
      null,
      Ke.default.createElement(
        'h4',
        null,
        t.get('name'),
        ' (mutualTLS)',
        ' ',
        Ke.default.createElement(n, {
          path: ['securityDefinitions', t.get('name')],
        })
      ),
      Ke.default.createElement(
        'p',
        null,
        'Mutual TLS is required by this API/Operation. Certificates are managed via your Operating System and/or your browser.'
      ),
      Ke.default.createElement('p', null, t.get('description'))
    );
  };
  class auths_Auths extends Ke.default.Component {
    constructor(e, t) {
      super(e, t), (this.state = {});
    }
    onAuthChange = e => {
      let { name: t } = e;
      this.setState({ [t]: e });
    };
    submitAuth = e => {
      e.preventDefault();
      let { authActions: t } = this.props;
      t.authorizeWithPersistOption(this.state);
    };
    logoutClick = e => {
      e.preventDefault();
      let { authActions: t, definitions: r } = this.props,
        n = r.map((e, t) => t).toArray();
      this.setState(n.reduce((e, t) => ((e[t] = ''), e), {})),
        t.logoutWithPersistOption(n);
    };
    close = e => {
      e.preventDefault();
      let { authActions: t } = this.props;
      t.showDefinitions(!1);
    };
    render() {
      let {
        definitions: e,
        getComponent: t,
        authSelectors: r,
        errSelectors: n,
      } = this.props;
      const a = t('AuthItem'),
        o = t('oauth2', !0),
        s = t('Button'),
        l = r.authorized(),
        i = e.filter((e, t) => !!l.get(t)),
        c = e.filter(
          e => 'oauth2' !== e.get('type') && 'mutualTLS' !== e.get('type')
        ),
        u = e.filter(e => 'oauth2' === e.get('type')),
        d = e.filter(e => 'mutualTLS' === e.get('type'));
      return Ke.default.createElement(
        'div',
        { className: 'auth-container' },
        c.size > 0 &&
          Ke.default.createElement(
            'form',
            { onSubmit: this.submitAuth },
            c
              .map((e, r) =>
                Ke.default.createElement(a, {
                  key: r,
                  schema: e,
                  name: r,
                  getComponent: t,
                  onAuthChange: this.onAuthChange,
                  authorized: l,
                  errSelectors: n,
                })
              )
              .toArray(),
            Ke.default.createElement(
              'div',
              { className: 'auth-btn-wrapper' },
              c.size === i.size
                ? Ke.default.createElement(
                    s,
                    {
                      className: 'btn modal-btn auth',
                      onClick: this.logoutClick,
                      'aria-label': 'Remove authorization',
                    },
                    'Logout'
                  )
                : Ke.default.createElement(
                    s,
                    {
                      type: 'submit',
                      className: 'btn modal-btn auth authorize',
                      'aria-label': 'Apply credentials',
                    },
                    'Authorize'
                  ),
              Ke.default.createElement(
                s,
                {
                  className: 'btn modal-btn auth btn-done',
                  onClick: this.close,
                },
                'Close'
              )
            )
          ),
        u.size > 0
          ? Ke.default.createElement(
              'div',
              null,
              Ke.default.createElement(
                'div',
                { className: 'scope-def' },
                Ke.default.createElement(
                  'p',
                  null,
                  'Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.'
                ),
                Ke.default.createElement(
                  'p',
                  null,
                  'API requires the following scopes. Select which ones you want to grant to Swagger UI.'
                )
              ),
              e
                .filter(e => 'oauth2' === e.get('type'))
                .map((e, t) =>
                  Ke.default.createElement(
                    'div',
                    { key: t },
                    Ke.default.createElement(o, {
                      authorized: l,
                      schema: e,
                      name: t,
                    })
                  )
                )
                .toArray()
            )
          : null,
        d.size > 0 &&
          Ke.default.createElement(
            'div',
            null,
            d
              .map((e, r) =>
                Ke.default.createElement(a, {
                  key: r,
                  schema: e,
                  name: r,
                  getComponent: t,
                  onAuthChange: this.onAuthChange,
                  authorized: l,
                  errSelectors: n,
                })
              )
              .toArray()
          )
      );
    }
  }
  var Do = auths_Auths;
  const isOAS31 = e => {
      const t = e.get('openapi');
      return 'string' == typeof t && /^3\.1\.(?:[1-9]\d*|0)$/.test(t);
    },
    fn_createOnlyOAS31Selector = e =>
      function (t) {
        for (
          var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          n[a - 1] = arguments[a];
        return r => {
          if (r.getSystem().specSelectors.isOAS31()) {
            const a = e(t, ...n);
            return 'function' == typeof a ? a(r) : a;
          }
          return null;
        };
      },
    createOnlyOAS31SelectorWrapper = e => (t, r) =>
      function (n) {
        for (
          var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1;
          s < a;
          s++
        )
          o[s - 1] = arguments[s];
        if (r.getSystem().specSelectors.isOAS31()) {
          const a = e(n, ...o);
          return 'function' == typeof a ? a(t, r) : a;
        }
        return t(...o);
      },
    fn_createSystemSelector = e =>
      function (t) {
        for (
          var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          n[a - 1] = arguments[a];
        return r => {
          const a = e(t, r, ...n);
          return 'function' == typeof a ? a(r) : a;
        };
      },
    createOnlyOAS31ComponentWrapper = e => (t, r) => n =>
      r.specSelectors.isOAS31()
        ? Ke.default.createElement(
            e,
            (0, rr.default)({}, n, {
              originalComponent: t,
              getSystem: r.getSystem,
            })
          )
        : Ke.default.createElement(t, n);
  var Uo = createOnlyOAS31ComponentWrapper(e => {
    let { getSystem: t } = e;
    const r = t().getComponent('OAS31License', !0);
    return Ke.default.createElement(r, null);
  });
  var $o = createOnlyOAS31ComponentWrapper(e => {
    let { getSystem: t } = e;
    const r = t().getComponent('OAS31Contact', !0);
    return Ke.default.createElement(r, null);
  });
  var Jo = createOnlyOAS31ComponentWrapper(e => {
    let { getSystem: t } = e;
    const r = t().getComponent('OAS31Info', !0);
    return Ke.default.createElement(r, null);
  });
  const Vo = createOnlyOAS31ComponentWrapper(e => {
    let { getSystem: t, ...r } = e;
    const n = t(),
      { getComponent: a, fn: o, getConfigs: s } = n,
      l = s(),
      i = a('OAS31Model'),
      c = a('JSONSchema202012'),
      u = a('JSONSchema202012Keyword$schema'),
      d = a('JSONSchema202012Keyword$vocabulary'),
      p = a('JSONSchema202012Keyword$id'),
      m = a('JSONSchema202012Keyword$anchor'),
      f = a('JSONSchema202012Keyword$dynamicAnchor'),
      h = a('JSONSchema202012Keyword$ref'),
      g = a('JSONSchema202012Keyword$dynamicRef'),
      y = a('JSONSchema202012Keyword$defs'),
      S = a('JSONSchema202012Keyword$comment'),
      v = a('JSONSchema202012KeywordAllOf'),
      _ = a('JSONSchema202012KeywordAnyOf'),
      b = a('JSONSchema202012KeywordOneOf'),
      w = a('JSONSchema202012KeywordNot'),
      C = a('JSONSchema202012KeywordIf'),
      x = a('JSONSchema202012KeywordThen'),
      O = a('JSONSchema202012KeywordElse'),
      k = a('JSONSchema202012KeywordDependentSchemas'),
      N = a('JSONSchema202012KeywordPrefixItems'),
      A = a('JSONSchema202012KeywordItems'),
      I = a('JSONSchema202012KeywordContains'),
      R = a('JSONSchema202012KeywordProperties'),
      T = a('JSONSchema202012KeywordPatternProperties'),
      B = a('JSONSchema202012KeywordAdditionalProperties'),
      j = a('JSONSchema202012KeywordPropertyNames'),
      P = a('JSONSchema202012KeywordUnevaluatedItems'),
      M = a('JSONSchema202012KeywordUnevaluatedProperties'),
      q = a('JSONSchema202012KeywordType'),
      L = a('JSONSchema202012KeywordEnum'),
      D = a('JSONSchema202012KeywordConst'),
      U = a('JSONSchema202012KeywordConstraint'),
      $ = a('JSONSchema202012KeywordDependentRequired'),
      J = a('JSONSchema202012KeywordContentSchema'),
      V = a('JSONSchema202012KeywordTitle'),
      K = a('JSONSchema202012KeywordDescription'),
      z = a('JSONSchema202012KeywordDefault'),
      F = a('JSONSchema202012KeywordDeprecated'),
      W = a('JSONSchema202012KeywordReadOnly'),
      H = a('JSONSchema202012KeywordWriteOnly'),
      G = a('JSONSchema202012Accordion'),
      X = a('JSONSchema202012ExpandDeepButton'),
      Y = a('JSONSchema202012ChevronRightIcon'),
      Q = a('withJSONSchema202012Context')(i, {
        config: {
          default$schema: 'https://spec.openapis.org/oas/3.1/dialect/base',
          defaultExpandedLevels: l.defaultModelExpandDepth,
          includeReadOnly: Boolean(r.includeReadOnly),
          includeWriteOnly: Boolean(r.includeWriteOnly),
        },
        components: {
          JSONSchema: c,
          Keyword$schema: u,
          Keyword$vocabulary: d,
          Keyword$id: p,
          Keyword$anchor: m,
          Keyword$dynamicAnchor: f,
          Keyword$ref: h,
          Keyword$dynamicRef: g,
          Keyword$defs: y,
          Keyword$comment: S,
          KeywordAllOf: v,
          KeywordAnyOf: _,
          KeywordOneOf: b,
          KeywordNot: w,
          KeywordIf: C,
          KeywordThen: x,
          KeywordElse: O,
          KeywordDependentSchemas: k,
          KeywordPrefixItems: N,
          KeywordItems: A,
          KeywordContains: I,
          KeywordProperties: R,
          KeywordPatternProperties: T,
          KeywordAdditionalProperties: B,
          KeywordPropertyNames: j,
          KeywordUnevaluatedItems: P,
          KeywordUnevaluatedProperties: M,
          KeywordType: q,
          KeywordEnum: L,
          KeywordConst: D,
          KeywordConstraint: U,
          KeywordDependentRequired: $,
          KeywordContentSchema: J,
          KeywordTitle: V,
          KeywordDescription: K,
          KeywordDefault: z,
          KeywordDeprecated: F,
          KeywordReadOnly: W,
          KeywordWriteOnly: H,
          Accordion: G,
          ExpandDeepButton: X,
          ChevronRightIcon: Y,
        },
        fn: {
          upperFirst: o.upperFirst,
          isExpandable: o.jsonSchema202012.isExpandable,
          getProperties: o.jsonSchema202012.getProperties,
        },
      });
    return Ke.default.createElement(Q, r);
  });
  var Ko = Vo;
  const zo = createOnlyOAS31ComponentWrapper(e => {
    let { getSystem: t } = e;
    const { getComponent: r, fn: n, getConfigs: a } = t(),
      o = a();
    if (zo.ModelsWithJSONSchemaContext)
      return Ke.default.createElement(zo.ModelsWithJSONSchemaContext, null);
    const s = r('OAS31Models', !0),
      l = r('JSONSchema202012'),
      i = r('JSONSchema202012Keyword$schema'),
      c = r('JSONSchema202012Keyword$vocabulary'),
      u = r('JSONSchema202012Keyword$id'),
      d = r('JSONSchema202012Keyword$anchor'),
      p = r('JSONSchema202012Keyword$dynamicAnchor'),
      m = r('JSONSchema202012Keyword$ref'),
      f = r('JSONSchema202012Keyword$dynamicRef'),
      h = r('JSONSchema202012Keyword$defs'),
      g = r('JSONSchema202012Keyword$comment'),
      y = r('JSONSchema202012KeywordAllOf'),
      S = r('JSONSchema202012KeywordAnyOf'),
      v = r('JSONSchema202012KeywordOneOf'),
      _ = r('JSONSchema202012KeywordNot'),
      b = r('JSONSchema202012KeywordIf'),
      w = r('JSONSchema202012KeywordThen'),
      C = r('JSONSchema202012KeywordElse'),
      x = r('JSONSchema202012KeywordDependentSchemas'),
      O = r('JSONSchema202012KeywordPrefixItems'),
      k = r('JSONSchema202012KeywordItems'),
      N = r('JSONSchema202012KeywordContains'),
      A = r('JSONSchema202012KeywordProperties'),
      I = r('JSONSchema202012KeywordPatternProperties'),
      R = r('JSONSchema202012KeywordAdditionalProperties'),
      T = r('JSONSchema202012KeywordPropertyNames'),
      B = r('JSONSchema202012KeywordUnevaluatedItems'),
      j = r('JSONSchema202012KeywordUnevaluatedProperties'),
      P = r('JSONSchema202012KeywordType'),
      M = r('JSONSchema202012KeywordEnum'),
      q = r('JSONSchema202012KeywordConst'),
      L = r('JSONSchema202012KeywordConstraint'),
      D = r('JSONSchema202012KeywordDependentRequired'),
      U = r('JSONSchema202012KeywordContentSchema'),
      $ = r('JSONSchema202012KeywordTitle'),
      J = r('JSONSchema202012KeywordDescription'),
      V = r('JSONSchema202012KeywordDefault'),
      K = r('JSONSchema202012KeywordDeprecated'),
      z = r('JSONSchema202012KeywordReadOnly'),
      F = r('JSONSchema202012KeywordWriteOnly'),
      W = r('JSONSchema202012Accordion'),
      H = r('JSONSchema202012ExpandDeepButton'),
      G = r('JSONSchema202012ChevronRightIcon'),
      X = r('withJSONSchema202012Context');
    return (
      (zo.ModelsWithJSONSchemaContext = X(s, {
        config: {
          default$schema: 'https://spec.openapis.org/oas/3.1/dialect/base',
          defaultExpandedLevels: o.defaultModelsExpandDepth - 1,
          includeReadOnly: !0,
          includeWriteOnly: !0,
        },
        components: {
          JSONSchema: l,
          Keyword$schema: i,
          Keyword$vocabulary: c,
          Keyword$id: u,
          Keyword$anchor: d,
          Keyword$dynamicAnchor: p,
          Keyword$ref: m,
          Keyword$dynamicRef: f,
          Keyword$defs: h,
          Keyword$comment: g,
          KeywordAllOf: y,
          KeywordAnyOf: S,
          KeywordOneOf: v,
          KeywordNot: _,
          KeywordIf: b,
          KeywordThen: w,
          KeywordElse: C,
          KeywordDependentSchemas: x,
          KeywordPrefixItems: O,
          KeywordItems: k,
          KeywordContains: N,
          KeywordProperties: A,
          KeywordPatternProperties: I,
          KeywordAdditionalProperties: R,
          KeywordPropertyNames: T,
          KeywordUnevaluatedItems: B,
          KeywordUnevaluatedProperties: j,
          KeywordType: P,
          KeywordEnum: M,
          KeywordConst: q,
          KeywordConstraint: L,
          KeywordDependentRequired: D,
          KeywordContentSchema: U,
          KeywordTitle: $,
          KeywordDescription: J,
          KeywordDefault: V,
          KeywordDeprecated: K,
          KeywordReadOnly: z,
          KeywordWriteOnly: F,
          Accordion: W,
          ExpandDeepButton: H,
          ChevronRightIcon: G,
        },
        fn: {
          upperFirst: n.upperFirst,
          isExpandable: n.jsonSchema202012.isExpandable,
          getProperties: n.jsonSchema202012.getProperties,
        },
      })),
      Ke.default.createElement(zo.ModelsWithJSONSchemaContext, null)
    );
  });
  zo.ModelsWithJSONSchemaContext = null;
  var Fo = zo;
  var wrap_components_version_pragma_filter = (e, t) => e => {
    const r = t.specSelectors.isOAS31(),
      n = t.getComponent('OAS31VersionPragmaFilter');
    return Ke.default.createElement(n, (0, rr.default)({ isOAS31: r }, e));
  };
  const Wo = createOnlyOAS31ComponentWrapper(e => {
    let { originalComponent: t, ...r } = e;
    const { getComponent: n, schema: a } = r,
      o = n('MutualTLSAuth', !0);
    return 'mutualTLS' === a.get('type')
      ? Ke.default.createElement(o, { schema: a })
      : Ke.default.createElement(t, r);
  });
  var Ho = Wo;
  var Go = createOnlyOAS31ComponentWrapper(e => {
    let { getSystem: t, ...r } = e;
    const n = t().getComponent('OAS31Auths', !0);
    return Ke.default.createElement(n, r);
  });
  const Xo = (0, Fe.Map)(),
    Yo = (0, Rt.createSelector)((e, t) => t.specSelectors.specJson(), isOAS31),
    selectors_webhooks = () => e =>
      e.specSelectors.specJson().get('webhooks', Xo),
    Qo = (0, Rt.createSelector)(
      (e, t) => t.specSelectors.webhooks(),
      (e, t) => t.specSelectors.validOperationMethods(),
      (e, t) => t.specSelectors.specResolvedSubtree(['webhooks']),
      (e, t) =>
        Fe.Map.isMap(e)
          ? e
              .reduce((e, r, n) => {
                if (!Fe.Map.isMap(r)) return e;
                const a = r
                  .entrySeq()
                  .filter(e => {
                    let [r] = e;
                    return t.includes(r);
                  })
                  .map(e => {
                    let [t, r] = e;
                    return {
                      operation: (0, Fe.Map)({ operation: r }),
                      method: t,
                      path: n,
                      specPath: (0, Fe.List)(['webhooks', n, t]),
                    };
                  });
                return e.concat(a);
              }, (0, Fe.List)())
              .groupBy(e => e.path)
              .map(e => e.toArray())
              .toObject()
          : {}
    ),
    selectors_license = () => e => e.specSelectors.info().get('license', Xo),
    selectLicenseNameField = () => e =>
      e.specSelectors.license().get('name', 'License'),
    selectLicenseUrlField = () => e => e.specSelectors.license().get('url'),
    Zo = (0, Rt.createSelector)(
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectLicenseUrlField(),
      (e, t, r) => {
        if (r) return safeBuildUrl(r, e, { selectedServer: t });
      }
    ),
    selectLicenseIdentifierField = () => e =>
      e.specSelectors.license().get('identifier'),
    selectors_contact = () => e => e.specSelectors.info().get('contact', Xo),
    selectContactNameField = () => e =>
      e.specSelectors.contact().get('name', 'the developer'),
    selectContactEmailField = () => e => e.specSelectors.contact().get('email'),
    selectContactUrlField = () => e => e.specSelectors.contact().get('url'),
    es = (0, Rt.createSelector)(
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectContactUrlField(),
      (e, t, r) => {
        if (r) return safeBuildUrl(r, e, { selectedServer: t });
      }
    ),
    selectInfoTitleField = () => e => e.specSelectors.info().get('title'),
    selectInfoSummaryField = () => e => e.specSelectors.info().get('summary'),
    selectInfoDescriptionField = () => e =>
      e.specSelectors.info().get('description'),
    selectInfoTermsOfServiceField = () => e =>
      e.specSelectors.info().get('termsOfService'),
    ts = (0, Rt.createSelector)(
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectInfoTermsOfServiceField(),
      (e, t, r) => {
        if (r) return safeBuildUrl(r, e, { selectedServer: t });
      }
    ),
    selectExternalDocsDescriptionField = () => e =>
      e.specSelectors.externalDocs().get('description'),
    selectExternalDocsUrlField = () => e =>
      e.specSelectors.externalDocs().get('url'),
    rs = (0, Rt.createSelector)(
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectExternalDocsUrlField(),
      (e, t, r) => {
        if (r) return safeBuildUrl(r, e, { selectedServer: t });
      }
    ),
    selectJsonSchemaDialectField = () => e =>
      e.specSelectors.specJson().get('jsonSchemaDialect'),
    selectJsonSchemaDialectDefault = () =>
      'https://spec.openapis.org/oas/3.1/dialect/base',
    ns = (0, Rt.createSelector)(
      (e, t) => t.specSelectors.definitions(),
      (e, t) => t.specSelectors.specResolvedSubtree(['components', 'schemas']),
      (e, t) =>
        Fe.Map.isMap(e)
          ? Fe.Map.isMap(t)
            ? Object.entries(e.toJS()).reduce((e, r) => {
                let [n, a] = r;
                const o = t.get(n);
                return (e[n] = o?.toJS() || a), e;
              }, {})
            : e.toJS()
          : {}
    ),
    wrap_selectors_isOAS3 = (e, t) =>
      function (r) {
        const n = t.specSelectors.isOAS31();
        for (
          var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1;
          s < a;
          s++
        )
          o[s - 1] = arguments[s];
        return n || e(...o);
      },
    as = createOnlyOAS31SelectorWrapper(
      () => (e, t) => t.oas31Selectors.selectLicenseUrl()
    ),
    os = createOnlyOAS31SelectorWrapper(() => (e, t) => {
      const r = t.specSelectors.securityDefinitions();
      let n = e();
      return r
        ? (r.entrySeq().forEach(e => {
            let [t, r] = e;
            'mutualTLS' === r.get('type') &&
              (n = n.push(new Fe.Map({ [t]: r })));
          }),
          n)
        : n;
    }),
    ss = (0, Rt.createSelector)(
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectLicenseUrlField(),
      (e, t) => t.specSelectors.selectLicenseIdentifierField(),
      (e, t, r, n) =>
        r
          ? safeBuildUrl(r, e, { selectedServer: t })
          : n
          ? `https://spdx.org/licenses/${n}.html`
          : void 0
    );
  var keywords_Example = e => {
    let { schema: t, getSystem: r } = e;
    const { fn: n } = r(),
      { hasKeyword: a, stringify: o } = n.jsonSchema202012.useFn();
    return a(t, 'example')
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--example',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            'Example'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
            },
            o(t.example)
          )
        )
      : null;
  };
  var keywords_Xml = e => {
    let { schema: t, getSystem: r } = e;
    const n = t?.xml || {},
      { fn: a, getComponent: o } = r(),
      { useIsExpandedDeeply: s, useComponent: l } = a.jsonSchema202012,
      i = s(),
      c = !!(n.name || n.namespace || n.prefix),
      [u, d] = (0, Ke.useState)(i),
      [p, m] = (0, Ke.useState)(!1),
      f = l('Accordion'),
      h = l('ExpandDeepButton'),
      g = o('JSONSchema202012DeepExpansionContext')(),
      y = (0, Ke.useCallback)(() => {
        d(e => !e);
      }, []),
      S = (0, Ke.useCallback)((e, t) => {
        d(t), m(t);
      }, []);
    return 0 === Object.keys(n).length
      ? null
      : Ke.default.createElement(
          g.Provider,
          { value: p },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--xml',
            },
            c
              ? Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  Ke.default.createElement(
                    f,
                    { expanded: u, onChange: y },
                    Ke.default.createElement(
                      'span',
                      {
                        className:
                          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                      },
                      'XML'
                    )
                  ),
                  Ke.default.createElement(h, { expanded: u, onClick: S })
                )
              : Ke.default.createElement(
                  'span',
                  {
                    className:
                      'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                  },
                  'XML'
                ),
            !0 === n.attribute &&
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
                },
                'attribute'
              ),
            !0 === n.wrapped &&
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
                },
                'wrapped'
              ),
            Ke.default.createElement(
              'strong',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              'object'
            ),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !u }
                ),
              },
              u &&
                Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  n.name &&
                    Ke.default.createElement(
                      'li',
                      { className: 'json-schema-2020-12-property' },
                      Ke.default.createElement(
                        'div',
                        {
                          className:
                            'json-schema-2020-12-keyword json-schema-2020-12-keyword',
                        },
                        Ke.default.createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                          },
                          'name'
                        ),
                        Ke.default.createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                          },
                          n.name
                        )
                      )
                    ),
                  n.namespace &&
                    Ke.default.createElement(
                      'li',
                      { className: 'json-schema-2020-12-property' },
                      Ke.default.createElement(
                        'div',
                        { className: 'json-schema-2020-12-keyword' },
                        Ke.default.createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                          },
                          'namespace'
                        ),
                        Ke.default.createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                          },
                          n.namespace
                        )
                      )
                    ),
                  n.prefix &&
                    Ke.default.createElement(
                      'li',
                      { className: 'json-schema-2020-12-property' },
                      Ke.default.createElement(
                        'div',
                        { className: 'json-schema-2020-12-keyword' },
                        Ke.default.createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                          },
                          'prefix'
                        ),
                        Ke.default.createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                          },
                          n.prefix
                        )
                      )
                    )
                )
            )
          )
        );
  };
  const DiscriminatorMapping = e => {
    let { discriminator: t } = e;
    const r = t?.mapping || {};
    return 0 === Object.keys(r).length
      ? null
      : Object.entries(r).map(e => {
          let [t, r] = e;
          return Ke.default.createElement(
            'div',
            { key: `${t}-${r}`, className: 'json-schema-2020-12-keyword' },
            Ke.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
              },
              t
            ),
            Ke.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
              },
              r
            )
          );
        });
  };
  DiscriminatorMapping.defaultProps = { mapping: void 0 };
  var ls = DiscriminatorMapping;
  var Discriminator_Discriminator = e => {
    let { schema: t, getSystem: r } = e;
    const n = t?.discriminator || {},
      { fn: a, getComponent: o } = r(),
      { useIsExpandedDeeply: s, useComponent: l } = a.jsonSchema202012,
      i = s(),
      c = !!n.mapping,
      [u, d] = (0, Ke.useState)(i),
      [p, m] = (0, Ke.useState)(!1),
      f = l('Accordion'),
      h = l('ExpandDeepButton'),
      g = o('JSONSchema202012DeepExpansionContext')(),
      y = (0, Ke.useCallback)(() => {
        d(e => !e);
      }, []),
      S = (0, Ke.useCallback)((e, t) => {
        d(t), m(t);
      }, []);
    return 0 === Object.keys(n).length
      ? null
      : Ke.default.createElement(
          g.Provider,
          { value: p },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--discriminator',
            },
            c
              ? Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  Ke.default.createElement(
                    f,
                    { expanded: u, onChange: y },
                    Ke.default.createElement(
                      'span',
                      {
                        className:
                          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                      },
                      'Discriminator'
                    )
                  ),
                  Ke.default.createElement(h, { expanded: u, onClick: S })
                )
              : Ke.default.createElement(
                  'span',
                  {
                    className:
                      'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                  },
                  'Discriminator'
                ),
            n.propertyName &&
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
                },
                n.propertyName
              ),
            Ke.default.createElement(
              'strong',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              'object'
            ),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !u }
                ),
              },
              u &&
                Ke.default.createElement(
                  'li',
                  { className: 'json-schema-2020-12-property' },
                  Ke.default.createElement(ls, { discriminator: n })
                )
            )
          )
        );
  };
  var keywords_ExternalDocs = e => {
    let { schema: t, getSystem: r } = e;
    const n = t?.externalDocs || {},
      { fn: a, getComponent: o } = r(),
      { useIsExpandedDeeply: s, useComponent: l } = a.jsonSchema202012,
      i = s(),
      c = !(!n.description && !n.url),
      [u, d] = (0, Ke.useState)(i),
      [p, m] = (0, Ke.useState)(!1),
      f = l('Accordion'),
      h = l('ExpandDeepButton'),
      g = o('JSONSchema202012KeywordDescription'),
      y = o('Link'),
      S = o('JSONSchema202012DeepExpansionContext')(),
      v = (0, Ke.useCallback)(() => {
        d(e => !e);
      }, []),
      _ = (0, Ke.useCallback)((e, t) => {
        d(t), m(t);
      }, []);
    return 0 === Object.keys(n).length
      ? null
      : Ke.default.createElement(
          S.Provider,
          { value: p },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--externalDocs',
            },
            c
              ? Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  Ke.default.createElement(
                    f,
                    { expanded: u, onChange: v },
                    Ke.default.createElement(
                      'span',
                      {
                        className:
                          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                      },
                      'External documentation'
                    )
                  ),
                  Ke.default.createElement(h, { expanded: u, onClick: _ })
                )
              : Ke.default.createElement(
                  'span',
                  {
                    className:
                      'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                  },
                  'External documentation'
                ),
            Ke.default.createElement(
              'strong',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              'object'
            ),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !u }
                ),
              },
              u &&
                Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  n.description &&
                    Ke.default.createElement(
                      'li',
                      { className: 'json-schema-2020-12-property' },
                      Ke.default.createElement(g, { schema: n, getSystem: r })
                    ),
                  n.url &&
                    Ke.default.createElement(
                      'li',
                      { className: 'json-schema-2020-12-property' },
                      Ke.default.createElement(
                        'div',
                        {
                          className:
                            'json-schema-2020-12-keyword json-schema-2020-12-keyword',
                        },
                        Ke.default.createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                          },
                          'url'
                        ),
                        Ke.default.createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                          },
                          Ke.default.createElement(
                            y,
                            { target: '_blank', href: sanitizeUrl(n.url) },
                            n.url
                          )
                        )
                      )
                    )
                )
            )
          )
        );
  };
  var keywords_Description = e => {
    let { schema: t, getSystem: r } = e;
    if (!t?.description) return null;
    const { getComponent: n } = r(),
      a = n('Markdown');
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--description',
      },
      Ke.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary',
        },
        Ke.default.createElement(a, { source: t.description })
      )
    );
  };
  var is = createOnlyOAS31ComponentWrapper(keywords_Description);
  const cs = createOnlyOAS31ComponentWrapper(e => {
    let { schema: t, getSystem: r, originalComponent: n } = e;
    const { getComponent: a } = r(),
      o = a('JSONSchema202012KeywordDiscriminator'),
      s = a('JSONSchema202012KeywordXml'),
      l = a('JSONSchema202012KeywordExample'),
      i = a('JSONSchema202012KeywordExternalDocs');
    return Ke.default.createElement(
      Ke.default.Fragment,
      null,
      Ke.default.createElement(n, { schema: t }),
      Ke.default.createElement(o, { schema: t, getSystem: r }),
      Ke.default.createElement(s, { schema: t, getSystem: r }),
      Ke.default.createElement(i, { schema: t, getSystem: r }),
      Ke.default.createElement(l, { schema: t, getSystem: r })
    );
  });
  var us = cs;
  var keywords_Properties = e => {
    let { schema: t, getSystem: r } = e;
    const { fn: n } = r(),
      { useComponent: a } = n.jsonSchema202012,
      { getDependentRequired: o, getProperties: s } =
        n.jsonSchema202012.useFn(),
      l = n.jsonSchema202012.useConfig(),
      i = Array.isArray(t?.required) ? t.required : [],
      c = a('JSONSchema'),
      u = s(t, l);
    return 0 === Object.keys(u).length
      ? null
      : Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--properties',
          },
          Ke.default.createElement(
            'ul',
            null,
            Object.entries(u).map(e => {
              let [r, n] = e;
              const a = i.includes(r),
                s = o(r, t);
              return Ke.default.createElement(
                'li',
                {
                  key: r,
                  className: (0, _a.default)('json-schema-2020-12-property', {
                    'json-schema-2020-12-property--required': a,
                  }),
                },
                Ke.default.createElement(c, {
                  name: r,
                  schema: n,
                  dependentRequired: s,
                })
              );
            })
          )
        );
  };
  var ds = createOnlyOAS31ComponentWrapper(keywords_Properties);
  const getProperties = (e, t) => {
    let { includeReadOnly: r, includeWriteOnly: n } = t;
    if (!e?.properties) return {};
    const a = Object.entries(e.properties).filter(e => {
      let [, t] = e;
      return (!(!0 === t?.readOnly) || r) && (!(!0 === t?.writeOnly) || n);
    });
    return Object.fromEntries(a);
  };
  var ps = function afterLoad(e) {
    let { fn: t, getSystem: r } = e;
    if (t.jsonSchema202012) {
      const e = ((e, t) => {
        const { fn: r } = t();
        if ('function' != typeof e) return null;
        const { hasKeyword: n } = r.jsonSchema202012;
        return t =>
          e(t) ||
          n(t, 'example') ||
          t?.xml ||
          t?.discriminator ||
          t?.externalDocs;
      })(t.jsonSchema202012.isExpandable, r);
      Object.assign(this.fn.jsonSchema202012, {
        isExpandable: e,
        getProperties,
      });
    }
    if ('function' == typeof t.sampleFromSchema && t.jsonSchema202012) {
      const e = ((e, t) => {
        const { fn: r, specSelectors: n } = t;
        return Object.fromEntries(
          Object.entries(e).map(e => {
            let [t, a] = e;
            const o = r[t];
            return [
              t,
              function () {
                return n.isOAS31()
                  ? a(...arguments)
                  : 'function' == typeof o
                  ? o(...arguments)
                  : void 0;
              },
            ];
          })
        );
      })(
        {
          sampleFromSchema: t.jsonSchema202012.sampleFromSchema,
          sampleFromSchemaGeneric: t.jsonSchema202012.sampleFromSchemaGeneric,
          createXMLExample: t.jsonSchema202012.createXMLExample,
          memoizedSampleFromSchema: t.jsonSchema202012.memoizedSampleFromSchema,
          memoizedCreateXMLExample: t.jsonSchema202012.memoizedCreateXMLExample,
        },
        r()
      );
      Object.assign(this.fn, e);
    }
  };
  var oas31 = e => {
    let { fn: t } = e;
    const r = t.createSystemSelector || fn_createSystemSelector,
      n = t.createOnlyOAS31Selector || fn_createOnlyOAS31Selector;
    return {
      afterLoad: ps,
      fn: {
        isOAS31,
        createSystemSelector: fn_createSystemSelector,
        createOnlyOAS31Selector: fn_createOnlyOAS31Selector,
      },
      components: {
        Webhooks: webhooks,
        JsonSchemaDialect: json_schema_dialect,
        MutualTLSAuth: mutual_tls_auth,
        OAS31Info: oas31_components_info,
        OAS31License: components_license,
        OAS31Contact: components_contact,
        OAS31VersionPragmaFilter: version_pragma_filter,
        OAS31Model: Lo,
        OAS31Models: models,
        OAS31Auths: Do,
        JSONSchema202012KeywordExample: keywords_Example,
        JSONSchema202012KeywordXml: keywords_Xml,
        JSONSchema202012KeywordDiscriminator: Discriminator_Discriminator,
        JSONSchema202012KeywordExternalDocs: keywords_ExternalDocs,
      },
      wrapComponents: {
        InfoContainer: Jo,
        License: Uo,
        Contact: $o,
        VersionPragmaFilter: wrap_components_version_pragma_filter,
        Model: Ko,
        Models: Fo,
        AuthItem: Ho,
        auths: Go,
        JSONSchema202012KeywordDescription: is,
        JSONSchema202012KeywordDefault: us,
        JSONSchema202012KeywordProperties: ds,
      },
      statePlugins: {
        auth: { wrapSelectors: { definitionsToAuthorize: os } },
        spec: {
          selectors: {
            isOAS31: r(Yo),
            license: selectors_license,
            selectLicenseNameField,
            selectLicenseUrlField,
            selectLicenseIdentifierField: n(selectLicenseIdentifierField),
            selectLicenseUrl: r(Zo),
            contact: selectors_contact,
            selectContactNameField,
            selectContactEmailField,
            selectContactUrlField,
            selectContactUrl: r(es),
            selectInfoTitleField,
            selectInfoSummaryField: n(selectInfoSummaryField),
            selectInfoDescriptionField,
            selectInfoTermsOfServiceField,
            selectInfoTermsOfServiceUrl: r(ts),
            selectExternalDocsDescriptionField,
            selectExternalDocsUrlField,
            selectExternalDocsUrl: r(rs),
            webhooks: n(selectors_webhooks),
            selectWebhooksOperations: n(r(Qo)),
            selectJsonSchemaDialectField,
            selectJsonSchemaDialectDefault,
            selectSchemas: r(ns),
          },
          wrapSelectors: {
            isOAS3: wrap_selectors_isOAS3,
            selectLicenseUrl: as,
          },
        },
        oas31: { selectors: { selectLicenseUrl: n(r(ss)) } },
      },
    };
  };
  const ms = Mt.default.object,
    fs = Mt.default.bool,
    hs = (Mt.default.oneOfType([ms, fs]), (0, Ke.createContext)(null));
  hs.displayName = 'JSONSchemaContext';
  const gs = (0, Ke.createContext)(0);
  gs.displayName = 'JSONSchemaLevelContext';
  const ys = (0, Ke.createContext)(!1);
  ys.displayName = 'JSONSchemaDeepExpansionContext';
  const Es = (0, Ke.createContext)(new Set()),
    useConfig = () => {
      const { config: e } = (0, Ke.useContext)(hs);
      return e;
    },
    useComponent = e => {
      const { components: t } = (0, Ke.useContext)(hs);
      return t[e] || null;
    },
    useFn = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
      const { fn: t } = (0, Ke.useContext)(hs);
      return void 0 !== e ? t[e] : t;
    },
    useLevel = () => {
      const e = (0, Ke.useContext)(gs);
      return [e, e + 1];
    },
    useIsExpandedDeeply = () => (0, Ke.useContext)(ys),
    useRenderedSchemas = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
      if (void 0 === e) return (0, Ke.useContext)(Es);
      const t = (0, Ke.useContext)(Es);
      return new Set([...t, e]);
    },
    Ss = (0, Ke.forwardRef)((e, t) => {
      let { schema: r, name: n, dependentRequired: a, onExpand: o } = e;
      const s = useFn(),
        l = (() => {
          const [e] = useLevel(),
            { defaultExpandedLevels: t } = useConfig();
          return t - e > 0;
        })(),
        i = useIsExpandedDeeply(),
        [c, u] = (0, Ke.useState)(l || i),
        [d, p] = (0, Ke.useState)(i),
        [m, f] = useLevel(),
        h = (() => {
          const [e] = useLevel();
          return e > 0;
        })(),
        g = s.isExpandable(r) || a.length > 0,
        y = (e => useRenderedSchemas().has(e))(r),
        S = useRenderedSchemas(r),
        v = s.stringifyConstraints(r),
        _ = useComponent('Accordion'),
        b = useComponent('Keyword$schema'),
        w = useComponent('Keyword$vocabulary'),
        C = useComponent('Keyword$id'),
        x = useComponent('Keyword$anchor'),
        O = useComponent('Keyword$dynamicAnchor'),
        k = useComponent('Keyword$ref'),
        N = useComponent('Keyword$dynamicRef'),
        A = useComponent('Keyword$defs'),
        I = useComponent('Keyword$comment'),
        R = useComponent('KeywordAllOf'),
        T = useComponent('KeywordAnyOf'),
        B = useComponent('KeywordOneOf'),
        j = useComponent('KeywordNot'),
        P = useComponent('KeywordIf'),
        M = useComponent('KeywordThen'),
        q = useComponent('KeywordElse'),
        L = useComponent('KeywordDependentSchemas'),
        D = useComponent('KeywordPrefixItems'),
        U = useComponent('KeywordItems'),
        $ = useComponent('KeywordContains'),
        J = useComponent('KeywordProperties'),
        V = useComponent('KeywordPatternProperties'),
        K = useComponent('KeywordAdditionalProperties'),
        z = useComponent('KeywordPropertyNames'),
        F = useComponent('KeywordUnevaluatedItems'),
        W = useComponent('KeywordUnevaluatedProperties'),
        H = useComponent('KeywordType'),
        G = useComponent('KeywordEnum'),
        X = useComponent('KeywordConst'),
        Y = useComponent('KeywordConstraint'),
        Q = useComponent('KeywordDependentRequired'),
        Z = useComponent('KeywordContentSchema'),
        ee = useComponent('KeywordTitle'),
        te = useComponent('KeywordDescription'),
        re = useComponent('KeywordDefault'),
        ne = useComponent('KeywordDeprecated'),
        ae = useComponent('KeywordReadOnly'),
        oe = useComponent('KeywordWriteOnly'),
        se = useComponent('ExpandDeepButton');
      (0, Ke.useEffect)(() => {
        p(i);
      }, [i]),
        (0, Ke.useEffect)(() => {
          p(d);
        }, [d]);
      const le = (0, Ke.useCallback)(
          (e, t) => {
            u(t), !t && p(!1), o(e, t, !1);
          },
          [o]
        ),
        ie = (0, Ke.useCallback)(
          (e, t) => {
            u(t), p(t), o(e, t, !0);
          },
          [o]
        );
      return Ke.default.createElement(
        gs.Provider,
        { value: f },
        Ke.default.createElement(
          ys.Provider,
          { value: d },
          Ke.default.createElement(
            Es.Provider,
            { value: S },
            Ke.default.createElement(
              'article',
              {
                ref: t,
                'data-json-schema-level': m,
                className: (0, _a.default)('json-schema-2020-12', {
                  'json-schema-2020-12--embedded': h,
                  'json-schema-2020-12--circular': y,
                }),
              },
              Ke.default.createElement(
                'div',
                { className: 'json-schema-2020-12-head' },
                g && !y
                  ? Ke.default.createElement(
                      Ke.default.Fragment,
                      null,
                      Ke.default.createElement(
                        _,
                        { expanded: c, onChange: le },
                        Ke.default.createElement(ee, { title: n, schema: r })
                      ),
                      Ke.default.createElement(se, { expanded: c, onClick: ie })
                    )
                  : Ke.default.createElement(ee, { title: n, schema: r }),
                Ke.default.createElement(ne, { schema: r }),
                Ke.default.createElement(ae, { schema: r }),
                Ke.default.createElement(oe, { schema: r }),
                Ke.default.createElement(H, { schema: r, isCircular: y }),
                v.length > 0 &&
                  v.map(e =>
                    Ke.default.createElement(Y, {
                      key: `${e.scope}-${e.value}`,
                      constraint: e,
                    })
                  )
              ),
              Ke.default.createElement(
                'div',
                {
                  className: (0, _a.default)('json-schema-2020-12-body', {
                    'json-schema-2020-12-body--collapsed': !c,
                  }),
                },
                c &&
                  Ke.default.createElement(
                    Ke.default.Fragment,
                    null,
                    Ke.default.createElement(te, { schema: r }),
                    !y &&
                      g &&
                      Ke.default.createElement(
                        Ke.default.Fragment,
                        null,
                        Ke.default.createElement(J, { schema: r }),
                        Ke.default.createElement(V, { schema: r }),
                        Ke.default.createElement(K, { schema: r }),
                        Ke.default.createElement(W, { schema: r }),
                        Ke.default.createElement(z, { schema: r }),
                        Ke.default.createElement(R, { schema: r }),
                        Ke.default.createElement(T, { schema: r }),
                        Ke.default.createElement(B, { schema: r }),
                        Ke.default.createElement(j, { schema: r }),
                        Ke.default.createElement(P, { schema: r }),
                        Ke.default.createElement(M, { schema: r }),
                        Ke.default.createElement(q, { schema: r }),
                        Ke.default.createElement(L, { schema: r }),
                        Ke.default.createElement(D, { schema: r }),
                        Ke.default.createElement(U, { schema: r }),
                        Ke.default.createElement(F, { schema: r }),
                        Ke.default.createElement($, { schema: r }),
                        Ke.default.createElement(Z, { schema: r })
                      ),
                    Ke.default.createElement(G, { schema: r }),
                    Ke.default.createElement(X, { schema: r }),
                    Ke.default.createElement(Q, {
                      schema: r,
                      dependentRequired: a,
                    }),
                    Ke.default.createElement(re, { schema: r }),
                    Ke.default.createElement(b, { schema: r }),
                    Ke.default.createElement(w, { schema: r }),
                    Ke.default.createElement(C, { schema: r }),
                    Ke.default.createElement(x, { schema: r }),
                    Ke.default.createElement(O, { schema: r }),
                    Ke.default.createElement(k, { schema: r }),
                    !y && g && Ke.default.createElement(A, { schema: r }),
                    Ke.default.createElement(N, { schema: r }),
                    Ke.default.createElement(I, { schema: r })
                  )
              )
            )
          )
        )
      );
    });
  Ss.defaultProps = { name: '', dependentRequired: [], onExpand: () => {} };
  var vs = Ss;
  var keywords_$schema = e => {
    let { schema: t } = e;
    return t?.$schema
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$schema',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            '$schema'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
            },
            t.$schema
          )
        )
      : null;
  };
  var $vocabulary_$vocabulary = e => {
    let { schema: t } = e;
    const r = useIsExpandedDeeply(),
      [n, a] = (0, Ke.useState)(r),
      o = useComponent('Accordion'),
      s = (0, Ke.useCallback)(() => {
        a(e => !e);
      }, []);
    return t?.$vocabulary
      ? 'object' != typeof t.$vocabulary
        ? null
        : Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--$vocabulary',
            },
            Ke.default.createElement(
              o,
              { expanded: n, onChange: s },
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                },
                '$vocabulary'
              )
            ),
            Ke.default.createElement(
              'strong',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              'object'
            ),
            Ke.default.createElement(
              'ul',
              null,
              n &&
                Object.entries(t.$vocabulary).map(e => {
                  let [t, r] = e;
                  return Ke.default.createElement(
                    'li',
                    {
                      key: t,
                      className: (0, _a.default)(
                        'json-schema-2020-12-$vocabulary-uri',
                        { 'json-schema-2020-12-$vocabulary-uri--disabled': !r }
                      ),
                    },
                    Ke.default.createElement(
                      'span',
                      {
                        className:
                          'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                      },
                      t
                    )
                  );
                })
            )
          )
      : null;
  };
  var keywords_$id = e => {
    let { schema: t } = e;
    return t?.$id
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$id',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            '$id'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
            },
            t.$id
          )
        )
      : null;
  };
  var keywords_$anchor = e => {
    let { schema: t } = e;
    return t?.$anchor
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$anchor',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            '$anchor'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
            },
            t.$anchor
          )
        )
      : null;
  };
  var keywords_$dynamicAnchor = e => {
    let { schema: t } = e;
    return t?.$dynamicAnchor
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicAnchor',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            '$dynamicAnchor'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
            },
            t.$dynamicAnchor
          )
        )
      : null;
  };
  var keywords_$ref = e => {
    let { schema: t } = e;
    return t?.$ref
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$ref',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            '$ref'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
            },
            t.$ref
          )
        )
      : null;
  };
  var keywords_$dynamicRef = e => {
    let { schema: t } = e;
    return t?.$dynamicRef
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicRef',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            '$dynamicRef'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
            },
            t.$dynamicRef
          )
        )
      : null;
  };
  var keywords_$defs = e => {
    let { schema: t } = e;
    const r = t?.$defs || {},
      n = useIsExpandedDeeply(),
      [a, o] = (0, Ke.useState)(n),
      [s, l] = (0, Ke.useState)(!1),
      i = useComponent('Accordion'),
      c = useComponent('ExpandDeepButton'),
      u = useComponent('JSONSchema'),
      d = (0, Ke.useCallback)(() => {
        o(e => !e);
      }, []),
      p = (0, Ke.useCallback)((e, t) => {
        o(t), l(t);
      }, []);
    return 0 === Object.keys(r).length
      ? null
      : Ke.default.createElement(
          ys.Provider,
          { value: s },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--$defs',
            },
            Ke.default.createElement(
              i,
              { expanded: a, onChange: d },
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                },
                '$defs'
              )
            ),
            Ke.default.createElement(c, { expanded: a, onClick: p }),
            Ke.default.createElement(
              'strong',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              'object'
            ),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !a }
                ),
              },
              a &&
                Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  Object.entries(r).map(e => {
                    let [t, r] = e;
                    return Ke.default.createElement(
                      'li',
                      { key: t, className: 'json-schema-2020-12-property' },
                      Ke.default.createElement(u, { name: t, schema: r })
                    );
                  })
                )
            )
          )
        );
  };
  var keywords_$comment = e => {
    let { schema: t } = e;
    return t?.$comment
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$comment',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            '$comment'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
            },
            t.$comment
          )
        )
      : null;
  };
  var keywords_AllOf = e => {
    let { schema: t } = e;
    const r = t?.allOf || [],
      n = useFn(),
      a = useIsExpandedDeeply(),
      [o, s] = (0, Ke.useState)(a),
      [l, i] = (0, Ke.useState)(!1),
      c = useComponent('Accordion'),
      u = useComponent('ExpandDeepButton'),
      d = useComponent('JSONSchema'),
      p = useComponent('KeywordType'),
      m = (0, Ke.useCallback)(() => {
        s(e => !e);
      }, []),
      f = (0, Ke.useCallback)((e, t) => {
        s(t), i(t);
      }, []);
    return Array.isArray(r) && 0 !== r.length
      ? Ke.default.createElement(
          ys.Provider,
          { value: l },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--allOf',
            },
            Ke.default.createElement(
              c,
              { expanded: o, onChange: m },
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                },
                'All of'
              )
            ),
            Ke.default.createElement(u, { expanded: o, onClick: f }),
            Ke.default.createElement(p, { schema: { allOf: r } }),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !o }
                ),
              },
              o &&
                Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  r.map((e, t) =>
                    Ke.default.createElement(
                      'li',
                      {
                        key: `#${t}`,
                        className: 'json-schema-2020-12-property',
                      },
                      Ke.default.createElement(d, {
                        name: `#${t} ${n.getTitle(e)}`,
                        schema: e,
                      })
                    )
                  )
                )
            )
          )
        )
      : null;
  };
  var keywords_AnyOf = e => {
    let { schema: t } = e;
    const r = t?.anyOf || [],
      n = useFn(),
      a = useIsExpandedDeeply(),
      [o, s] = (0, Ke.useState)(a),
      [l, i] = (0, Ke.useState)(!1),
      c = useComponent('Accordion'),
      u = useComponent('ExpandDeepButton'),
      d = useComponent('JSONSchema'),
      p = useComponent('KeywordType'),
      m = (0, Ke.useCallback)(() => {
        s(e => !e);
      }, []),
      f = (0, Ke.useCallback)((e, t) => {
        s(t), i(t);
      }, []);
    return Array.isArray(r) && 0 !== r.length
      ? Ke.default.createElement(
          ys.Provider,
          { value: l },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--anyOf',
            },
            Ke.default.createElement(
              c,
              { expanded: o, onChange: m },
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                },
                'Any of'
              )
            ),
            Ke.default.createElement(u, { expanded: o, onClick: f }),
            Ke.default.createElement(p, { schema: { anyOf: r } }),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !o }
                ),
              },
              o &&
                Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  r.map((e, t) =>
                    Ke.default.createElement(
                      'li',
                      {
                        key: `#${t}`,
                        className: 'json-schema-2020-12-property',
                      },
                      Ke.default.createElement(d, {
                        name: `#${t} ${n.getTitle(e)}`,
                        schema: e,
                      })
                    )
                  )
                )
            )
          )
        )
      : null;
  };
  var keywords_OneOf = e => {
    let { schema: t } = e;
    const r = t?.oneOf || [],
      n = useFn(),
      a = useIsExpandedDeeply(),
      [o, s] = (0, Ke.useState)(a),
      [l, i] = (0, Ke.useState)(!1),
      c = useComponent('Accordion'),
      u = useComponent('ExpandDeepButton'),
      d = useComponent('JSONSchema'),
      p = useComponent('KeywordType'),
      m = (0, Ke.useCallback)(() => {
        s(e => !e);
      }, []),
      f = (0, Ke.useCallback)((e, t) => {
        s(t), i(t);
      }, []);
    return Array.isArray(r) && 0 !== r.length
      ? Ke.default.createElement(
          ys.Provider,
          { value: l },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--oneOf',
            },
            Ke.default.createElement(
              c,
              { expanded: o, onChange: m },
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                },
                'One of'
              )
            ),
            Ke.default.createElement(u, { expanded: o, onClick: f }),
            Ke.default.createElement(p, { schema: { oneOf: r } }),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !o }
                ),
              },
              o &&
                Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  r.map((e, t) =>
                    Ke.default.createElement(
                      'li',
                      {
                        key: `#${t}`,
                        className: 'json-schema-2020-12-property',
                      },
                      Ke.default.createElement(d, {
                        name: `#${t} ${n.getTitle(e)}`,
                        schema: e,
                      })
                    )
                  )
                )
            )
          )
        )
      : null;
  };
  var keywords_Not = e => {
    let { schema: t } = e;
    const r = useFn(),
      n = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'not')) return null;
    const a = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Not'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--not',
      },
      Ke.default.createElement(n, { name: a, schema: t.not })
    );
  };
  var keywords_If = e => {
    let { schema: t } = e;
    const r = useFn(),
      n = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'if')) return null;
    const a = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'If'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--if',
      },
      Ke.default.createElement(n, { name: a, schema: t.if })
    );
  };
  var keywords_Then = e => {
    let { schema: t } = e;
    const r = useFn(),
      n = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'then')) return null;
    const a = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Then'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--then',
      },
      Ke.default.createElement(n, { name: a, schema: t.then })
    );
  };
  var keywords_Else = e => {
    let { schema: t } = e;
    const r = useFn(),
      n = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'else')) return null;
    const a = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Else'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--if',
      },
      Ke.default.createElement(n, { name: a, schema: t.else })
    );
  };
  var keywords_DependentSchemas = e => {
    let { schema: t } = e;
    const r = t?.dependentSchemas || [],
      n = useIsExpandedDeeply(),
      [a, o] = (0, Ke.useState)(n),
      [s, l] = (0, Ke.useState)(!1),
      i = useComponent('Accordion'),
      c = useComponent('ExpandDeepButton'),
      u = useComponent('JSONSchema'),
      d = (0, Ke.useCallback)(() => {
        o(e => !e);
      }, []),
      p = (0, Ke.useCallback)((e, t) => {
        o(t), l(t);
      }, []);
    return 'object' != typeof r || 0 === Object.keys(r).length
      ? null
      : Ke.default.createElement(
          ys.Provider,
          { value: s },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentSchemas',
            },
            Ke.default.createElement(
              i,
              { expanded: a, onChange: d },
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                },
                'Dependent schemas'
              )
            ),
            Ke.default.createElement(c, { expanded: a, onClick: p }),
            Ke.default.createElement(
              'strong',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              'object'
            ),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !a }
                ),
              },
              a &&
                Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  Object.entries(r).map(e => {
                    let [t, r] = e;
                    return Ke.default.createElement(
                      'li',
                      { key: t, className: 'json-schema-2020-12-property' },
                      Ke.default.createElement(u, { name: t, schema: r })
                    );
                  })
                )
            )
          )
        );
  };
  var keywords_PrefixItems = e => {
    let { schema: t } = e;
    const r = t?.prefixItems || [],
      n = useFn(),
      a = useIsExpandedDeeply(),
      [o, s] = (0, Ke.useState)(a),
      [l, i] = (0, Ke.useState)(!1),
      c = useComponent('Accordion'),
      u = useComponent('ExpandDeepButton'),
      d = useComponent('JSONSchema'),
      p = useComponent('KeywordType'),
      m = (0, Ke.useCallback)(() => {
        s(e => !e);
      }, []),
      f = (0, Ke.useCallback)((e, t) => {
        s(t), i(t);
      }, []);
    return Array.isArray(r) && 0 !== r.length
      ? Ke.default.createElement(
          ys.Provider,
          { value: l },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-keyword json-schema-2020-12-keyword--prefixItems',
            },
            Ke.default.createElement(
              c,
              { expanded: o, onChange: m },
              Ke.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                },
                'Prefix items'
              )
            ),
            Ke.default.createElement(u, { expanded: o, onClick: f }),
            Ke.default.createElement(p, { schema: { prefixItems: r } }),
            Ke.default.createElement(
              'ul',
              {
                className: (0, _a.default)(
                  'json-schema-2020-12-keyword__children',
                  { 'json-schema-2020-12-keyword__children--collapsed': !o }
                ),
              },
              o &&
                Ke.default.createElement(
                  Ke.default.Fragment,
                  null,
                  r.map((e, t) =>
                    Ke.default.createElement(
                      'li',
                      {
                        key: `#${t}`,
                        className: 'json-schema-2020-12-property',
                      },
                      Ke.default.createElement(d, {
                        name: `#${t} ${n.getTitle(e)}`,
                        schema: e,
                      })
                    )
                  )
                )
            )
          )
        )
      : null;
  };
  var keywords_Items = e => {
    let { schema: t } = e;
    const r = useFn(),
      n = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'items')) return null;
    const a = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Items'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--items',
      },
      Ke.default.createElement(n, { name: a, schema: t.items })
    );
  };
  var keywords_Contains = e => {
    let { schema: t } = e;
    const r = useFn(),
      n = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'contains')) return null;
    const a = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Contains'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--contains',
      },
      Ke.default.createElement(n, { name: a, schema: t.contains })
    );
  };
  var keywords_Properties_Properties = e => {
    let { schema: t } = e;
    const r = useFn(),
      n = t?.properties || {},
      a = Array.isArray(t?.required) ? t.required : [],
      o = useComponent('JSONSchema');
    return 0 === Object.keys(n).length
      ? null
      : Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--properties',
          },
          Ke.default.createElement(
            'ul',
            null,
            Object.entries(n).map(e => {
              let [n, s] = e;
              const l = a.includes(n),
                i = r.getDependentRequired(n, t);
              return Ke.default.createElement(
                'li',
                {
                  key: n,
                  className: (0, _a.default)('json-schema-2020-12-property', {
                    'json-schema-2020-12-property--required': l,
                  }),
                },
                Ke.default.createElement(o, {
                  name: n,
                  schema: s,
                  dependentRequired: i,
                })
              );
            })
          )
        );
  };
  var PatternProperties_PatternProperties = e => {
    let { schema: t } = e;
    const r = t?.patternProperties || {},
      n = useComponent('JSONSchema');
    return 0 === Object.keys(r).length
      ? null
      : Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--patternProperties',
          },
          Ke.default.createElement(
            'ul',
            null,
            Object.entries(r).map(e => {
              let [t, r] = e;
              return Ke.default.createElement(
                'li',
                { key: t, className: 'json-schema-2020-12-property' },
                Ke.default.createElement(n, { name: t, schema: r })
              );
            })
          )
        );
  };
  var keywords_AdditionalProperties = e => {
    let { schema: t } = e;
    const r = useFn(),
      { additionalProperties: n } = t,
      a = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'additionalProperties')) return null;
    const o = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Additional properties'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--additionalProperties',
      },
      !0 === n
        ? Ke.default.createElement(
            Ke.default.Fragment,
            null,
            o,
            Ke.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              'allowed'
            )
          )
        : !1 === n
        ? Ke.default.createElement(
            Ke.default.Fragment,
            null,
            o,
            Ke.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              'forbidden'
            )
          )
        : Ke.default.createElement(a, { name: o, schema: n })
    );
  };
  var keywords_PropertyNames = e => {
    let { schema: t } = e;
    const r = useFn(),
      { propertyNames: n } = t,
      a = useComponent('JSONSchema'),
      o = Ke.default.createElement(
        'span',
        {
          className:
            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
        },
        'Property names'
      );
    return r.hasKeyword(t, 'propertyNames')
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--propertyNames',
          },
          Ke.default.createElement(a, { name: o, schema: n })
        )
      : null;
  };
  var keywords_UnevaluatedItems = e => {
    let { schema: t } = e;
    const r = useFn(),
      { unevaluatedItems: n } = t,
      a = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'unevaluatedItems')) return null;
    const o = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Unevaluated items'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedItems',
      },
      Ke.default.createElement(a, { name: o, schema: n })
    );
  };
  var keywords_UnevaluatedProperties = e => {
    let { schema: t } = e;
    const r = useFn(),
      { unevaluatedProperties: n } = t,
      a = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'unevaluatedProperties')) return null;
    const o = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Unevaluated properties'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedProperties',
      },
      Ke.default.createElement(a, { name: o, schema: n })
    );
  };
  const Type = e => {
    let { schema: t, isCircular: r } = e;
    const n = useFn().getType(t),
      a = r ? ' [circular]' : '';
    return Ke.default.createElement(
      'strong',
      {
        className:
          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
      },
      `${n}${a}`
    );
  };
  Type.defaultProps = { isCircular: !1 };
  var _s = Type;
  var Enum_Enum = e => {
    let { schema: t } = e;
    const r = useFn();
    return Array.isArray(t?.enum)
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--enum',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
            },
            'Allowed values'
          ),
          Ke.default.createElement(
            'ul',
            null,
            t.enum.map(e => {
              const t = r.stringify(e);
              return Ke.default.createElement(
                'li',
                { key: t },
                Ke.default.createElement(
                  'span',
                  {
                    className:
                      'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
                  },
                  t
                )
              );
            })
          )
        )
      : null;
  };
  var keywords_Const = e => {
    let { schema: t } = e;
    const r = useFn();
    return r.hasKeyword(t, 'const')
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--const',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
            },
            'Const'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
            },
            r.stringify(t.const)
          )
        )
      : null;
  };
  const Constraint = e => {
    let { constraint: t } = e;
    return Ke.default.createElement(
      'span',
      {
        className: `json-schema-2020-12__constraint json-schema-2020-12__constraint--${t.scope}`,
      },
      t.value
    );
  };
  var bs = Ke.default.memo(Constraint);
  var DependentRequired_DependentRequired = e => {
    let { dependentRequired: t } = e;
    return 0 === t.length
      ? null
      : Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentRequired',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
            },
            'Required when defined'
          ),
          Ke.default.createElement(
            'ul',
            null,
            t.map(e =>
              Ke.default.createElement(
                'li',
                { key: e },
                Ke.default.createElement(
                  'span',
                  {
                    className:
                      'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--warning',
                  },
                  e
                )
              )
            )
          )
        );
  };
  var keywords_ContentSchema = e => {
    let { schema: t } = e;
    const r = useFn(),
      n = useComponent('JSONSchema');
    if (!r.hasKeyword(t, 'contentSchema')) return null;
    const a = Ke.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Content schema'
    );
    return Ke.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-keyword json-schema-2020-12-keyword--contentSchema',
      },
      Ke.default.createElement(n, { name: a, schema: t.contentSchema })
    );
  };
  const Title = e => {
    let { title: t, schema: r } = e;
    const n = useFn();
    return t || n.getTitle(r)
      ? Ke.default.createElement(
          'div',
          { className: 'json-schema-2020-12__title' },
          t || n.getTitle(r)
        )
      : null;
  };
  Title.defaultProps = { title: '' };
  var ws = Title;
  var keywords_Description_Description = e => {
    let { schema: t } = e;
    return t?.description
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--description',
          },
          Ke.default.createElement(
            'div',
            {
              className:
                'json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary',
            },
            t.description
          )
        )
      : null;
  };
  var keywords_Default = e => {
    let { schema: t } = e;
    const r = useFn();
    return r.hasKeyword(t, 'default')
      ? Ke.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--default',
          },
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
            },
            'Default'
          ),
          Ke.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
            },
            r.stringify(t.default)
          )
        )
      : null;
  };
  var keywords_Deprecated = e => {
    let { schema: t } = e;
    return !0 !== t?.deprecated
      ? null
      : Ke.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12__attribute json-schema-2020-12__attribute--warning',
          },
          'deprecated'
        );
  };
  var keywords_ReadOnly = e => {
    let { schema: t } = e;
    return !0 !== t?.readOnly
      ? null
      : Ke.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
          },
          'read-only'
        );
  };
  var keywords_WriteOnly = e => {
    let { schema: t } = e;
    return !0 !== t?.writeOnly
      ? null
      : Ke.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
          },
          'write-only'
        );
  };
  const Accordion = e => {
    let { expanded: t, children: r, onChange: n } = e;
    const a = useComponent('ChevronRightIcon'),
      o = (0, Ke.useCallback)(
        e => {
          n(e, !t);
        },
        [t, n]
      );
    return Ke.default.createElement(
      'button',
      {
        type: 'button',
        className: 'json-schema-2020-12-accordion',
        onClick: o,
      },
      Ke.default.createElement(
        'div',
        { className: 'json-schema-2020-12-accordion__children' },
        r
      ),
      Ke.default.createElement(
        'span',
        {
          className: (0, _a.default)('json-schema-2020-12-accordion__icon', {
            'json-schema-2020-12-accordion__icon--expanded': t,
            'json-schema-2020-12-accordion__icon--collapsed': !t,
          }),
        },
        Ke.default.createElement(a, null)
      )
    );
  };
  Accordion.defaultProps = { expanded: !1 };
  var Cs = Accordion;
  var ExpandDeepButton_ExpandDeepButton = e => {
    let { expanded: t, onClick: r } = e;
    const n = (0, Ke.useCallback)(
      e => {
        r(e, !t);
      },
      [t, r]
    );
    return Ke.default.createElement(
      'button',
      {
        type: 'button',
        className: 'json-schema-2020-12-expand-deep-button',
        onClick: n,
      },
      t ? 'Collapse all' : 'Expand all'
    );
  };
  var icons_ChevronRight = () =>
    Ke.default.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
      },
      Ke.default.createElement('path', {
        d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
      })
    );
  const fn_upperFirst = e =>
      'string' == typeof e ? `${e.charAt(0).toUpperCase()}${e.slice(1)}` : e,
    getTitle = e => {
      const t = useFn();
      return e?.title
        ? t.upperFirst(e.title)
        : e?.$anchor
        ? t.upperFirst(e.$anchor)
        : e?.$id
        ? e.$id
        : '';
    },
    getType = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : new WeakSet();
      const r = useFn();
      if (null == e) return 'any';
      if (r.isBooleanJSONSchema(e)) return e ? 'any' : 'never';
      if ('object' != typeof e) return 'any';
      if (t.has(e)) return 'any';
      t.add(e);
      const { type: n, prefixItems: a, items: o } = e,
        getArrayType = () => {
          if (Array.isArray(a)) {
            const e = a.map(e => getType(e, t)),
              r = o ? getType(o, t) : 'any';
            return `array<[${e.join(', ')}], ${r}>`;
          }
          if (o) {
            return `array<${getType(o, t)}>`;
          }
          return 'array<any>';
        };
      if (e.not && 'any' === getType(e.not)) return 'never';
      const handleCombiningKeywords = (r, n) => {
          if (Array.isArray(e[r])) {
            return `(${e[r].map(e => getType(e, t)).join(n)})`;
          }
          return null;
        },
        s = [
          Array.isArray(n)
            ? n.map(e => ('array' === e ? getArrayType() : e)).join(' | ')
            : 'array' === n
            ? getArrayType()
            : [
                'null',
                'boolean',
                'object',
                'array',
                'number',
                'integer',
                'string',
              ].includes(n)
            ? n
            : (() => {
                if (
                  Object.hasOwn(e, 'prefixItems') ||
                  Object.hasOwn(e, 'items') ||
                  Object.hasOwn(e, 'contains')
                )
                  return getArrayType();
                if (
                  Object.hasOwn(e, 'properties') ||
                  Object.hasOwn(e, 'additionalProperties') ||
                  Object.hasOwn(e, 'patternProperties')
                )
                  return 'object';
                if (['int32', 'int64'].includes(e.format)) return 'integer';
                if (['float', 'double'].includes(e.format)) return 'number';
                if (
                  Object.hasOwn(e, 'minimum') ||
                  Object.hasOwn(e, 'maximum') ||
                  Object.hasOwn(e, 'exclusiveMinimum') ||
                  Object.hasOwn(e, 'exclusiveMaximum') ||
                  Object.hasOwn(e, 'multipleOf')
                )
                  return 'number | integer';
                if (
                  Object.hasOwn(e, 'pattern') ||
                  Object.hasOwn(e, 'format') ||
                  Object.hasOwn(e, 'minLength') ||
                  Object.hasOwn(e, 'maxLength')
                )
                  return 'string';
                if (void 0 !== e.const) {
                  if (null === e.const) return 'null';
                  if ('boolean' == typeof e.const) return 'boolean';
                  if ('number' == typeof e.const)
                    return Number.isInteger(e.const) ? 'integer' : 'number';
                  if ('string' == typeof e.const) return 'string';
                  if (Array.isArray(e.const)) return 'array<any>';
                  if ('object' == typeof e.const) return 'object';
                }
                return null;
              })(),
          handleCombiningKeywords('oneOf', ' | '),
          handleCombiningKeywords('anyOf', ' | '),
          handleCombiningKeywords('allOf', ' & '),
        ]
          .filter(Boolean)
          .join(' | ');
      return t.delete(e), s || 'any';
    },
    isBooleanJSONSchema = e => 'boolean' == typeof e,
    hasKeyword = (e, t) =>
      null !== e && 'object' == typeof e && Object.hasOwn(e, t),
    isExpandable = e => {
      const t = useFn();
      return (
        e?.$schema ||
        e?.$vocabulary ||
        e?.$id ||
        e?.$anchor ||
        e?.$dynamicAnchor ||
        e?.$ref ||
        e?.$dynamicRef ||
        e?.$defs ||
        e?.$comment ||
        e?.allOf ||
        e?.anyOf ||
        e?.oneOf ||
        t.hasKeyword(e, 'not') ||
        t.hasKeyword(e, 'if') ||
        t.hasKeyword(e, 'then') ||
        t.hasKeyword(e, 'else') ||
        e?.dependentSchemas ||
        e?.prefixItems ||
        t.hasKeyword(e, 'items') ||
        t.hasKeyword(e, 'contains') ||
        e?.properties ||
        e?.patternProperties ||
        t.hasKeyword(e, 'additionalProperties') ||
        t.hasKeyword(e, 'propertyNames') ||
        t.hasKeyword(e, 'unevaluatedItems') ||
        t.hasKeyword(e, 'unevaluatedProperties') ||
        e?.description ||
        e?.enum ||
        t.hasKeyword(e, 'const') ||
        t.hasKeyword(e, 'contentSchema') ||
        t.hasKeyword(e, 'default')
      );
    },
    fn_stringify = e =>
      null === e || ['number', 'bigint', 'boolean'].includes(typeof e)
        ? String(e)
        : Array.isArray(e)
        ? `[${e.map(fn_stringify).join(', ')}]`
        : JSON.stringify(e),
    stringifyConstraintRange = (e, t, r) => {
      const n = 'number' == typeof t,
        a = 'number' == typeof r;
      return n && a
        ? t === r
          ? `${t} ${e}`
          : `[${t}, ${r}] ${e}`
        : n
        ? `>= ${t} ${e}`
        : a
        ? `<= ${r} ${e}`
        : null;
    },
    stringifyConstraints = e => {
      const t = [],
        r = (e => {
          if ('number' != typeof e?.multipleOf) return null;
          if (e.multipleOf <= 0) return null;
          if (1 === e.multipleOf) return null;
          const { multipleOf: t } = e;
          if (Number.isInteger(t)) return `multiple of ${t}`;
          const r = 10 ** t.toString().split('.')[1].length;
          return `multiple of ${t * r}/${r}`;
        })(e);
      null !== r && t.push({ scope: 'number', value: r });
      const n = (e => {
        const t = e?.minimum,
          r = e?.maximum,
          n = e?.exclusiveMinimum,
          a = e?.exclusiveMaximum,
          o = 'number' == typeof t,
          s = 'number' == typeof r,
          l = 'number' == typeof n,
          i = 'number' == typeof a,
          c = l && (!o || t < n),
          u = i && (!s || r > a);
        if ((o || l) && (s || i))
          return `${c ? '(' : '['}${c ? n : t}, ${u ? a : r}${u ? ')' : ']'}`;
        if (o || l) return `${c ? '>' : '≥'} ${c ? n : t}`;
        if (s || i) return `${u ? '<' : '≤'} ${u ? a : r}`;
        return null;
      })(e);
      null !== n && t.push({ scope: 'number', value: n }),
        e?.format && t.push({ scope: 'string', value: e.format });
      const a = stringifyConstraintRange(
        'characters',
        e?.minLength,
        e?.maxLength
      );
      null !== a && t.push({ scope: 'string', value: a }),
        e?.pattern &&
          t.push({ scope: 'string', value: `matches ${e?.pattern}` }),
        e?.contentMediaType &&
          t.push({
            scope: 'string',
            value: `media type: ${e.contentMediaType}`,
          }),
        e?.contentEncoding &&
          t.push({ scope: 'string', value: `encoding: ${e.contentEncoding}` });
      const o = stringifyConstraintRange(
        e?.hasUniqueItems ? 'unique items' : 'items',
        e?.minItems,
        e?.maxItems
      );
      null !== o && t.push({ scope: 'array', value: o });
      const s = stringifyConstraintRange(
        'contained items',
        e?.minContains,
        e?.maxContains
      );
      null !== s && t.push({ scope: 'array', value: s });
      const l = stringifyConstraintRange(
        'properties',
        e?.minProperties,
        e?.maxProperties
      );
      return null !== l && t.push({ scope: 'object', value: l }), t;
    },
    getDependentRequired = (e, t) =>
      t?.dependentRequired
        ? Array.from(
            Object.entries(t.dependentRequired).reduce((t, r) => {
              let [n, a] = r;
              return Array.isArray(a) && a.includes(e) ? (t.add(n), t) : t;
            }, new Set())
          )
        : [],
    withJSONSchemaContext = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const r = {
          components: {
            JSONSchema: vs,
            Keyword$schema: keywords_$schema,
            Keyword$vocabulary: $vocabulary_$vocabulary,
            Keyword$id: keywords_$id,
            Keyword$anchor: keywords_$anchor,
            Keyword$dynamicAnchor: keywords_$dynamicAnchor,
            Keyword$ref: keywords_$ref,
            Keyword$dynamicRef: keywords_$dynamicRef,
            Keyword$defs: keywords_$defs,
            Keyword$comment: keywords_$comment,
            KeywordAllOf: keywords_AllOf,
            KeywordAnyOf: keywords_AnyOf,
            KeywordOneOf: keywords_OneOf,
            KeywordNot: keywords_Not,
            KeywordIf: keywords_If,
            KeywordThen: keywords_Then,
            KeywordElse: keywords_Else,
            KeywordDependentSchemas: keywords_DependentSchemas,
            KeywordPrefixItems: keywords_PrefixItems,
            KeywordItems: keywords_Items,
            KeywordContains: keywords_Contains,
            KeywordProperties: keywords_Properties_Properties,
            KeywordPatternProperties: PatternProperties_PatternProperties,
            KeywordAdditionalProperties: keywords_AdditionalProperties,
            KeywordPropertyNames: keywords_PropertyNames,
            KeywordUnevaluatedItems: keywords_UnevaluatedItems,
            KeywordUnevaluatedProperties: keywords_UnevaluatedProperties,
            KeywordType: _s,
            KeywordEnum: Enum_Enum,
            KeywordConst: keywords_Const,
            KeywordConstraint: bs,
            KeywordDependentRequired: DependentRequired_DependentRequired,
            KeywordContentSchema: keywords_ContentSchema,
            KeywordTitle: ws,
            KeywordDescription: keywords_Description_Description,
            KeywordDefault: keywords_Default,
            KeywordDeprecated: keywords_Deprecated,
            KeywordReadOnly: keywords_ReadOnly,
            KeywordWriteOnly: keywords_WriteOnly,
            Accordion: Cs,
            ExpandDeepButton: ExpandDeepButton_ExpandDeepButton,
            ChevronRightIcon: icons_ChevronRight,
            ...t.components,
          },
          config: {
            default$schema: 'https://json-schema.org/draft/2020-12/schema',
            defaultExpandedLevels: 0,
            ...t.config,
          },
          fn: {
            upperFirst: fn_upperFirst,
            getTitle,
            getType,
            isBooleanJSONSchema,
            hasKeyword,
            isExpandable,
            stringify: fn_stringify,
            stringifyConstraints,
            getDependentRequired,
            ...t.fn,
          },
        },
        HOC = t =>
          Ke.default.createElement(
            hs.Provider,
            { value: r },
            Ke.default.createElement(e, t)
          );
      return (
        (HOC.contexts = { JSONSchemaContext: hs }),
        (HOC.displayName = e.displayName),
        HOC
      );
    };
  var json_schema_2020_12 = () => ({
      components: {
        JSONSchema202012: vs,
        JSONSchema202012Keyword$schema: keywords_$schema,
        JSONSchema202012Keyword$vocabulary: $vocabulary_$vocabulary,
        JSONSchema202012Keyword$id: keywords_$id,
        JSONSchema202012Keyword$anchor: keywords_$anchor,
        JSONSchema202012Keyword$dynamicAnchor: keywords_$dynamicAnchor,
        JSONSchema202012Keyword$ref: keywords_$ref,
        JSONSchema202012Keyword$dynamicRef: keywords_$dynamicRef,
        JSONSchema202012Keyword$defs: keywords_$defs,
        JSONSchema202012Keyword$comment: keywords_$comment,
        JSONSchema202012KeywordAllOf: keywords_AllOf,
        JSONSchema202012KeywordAnyOf: keywords_AnyOf,
        JSONSchema202012KeywordOneOf: keywords_OneOf,
        JSONSchema202012KeywordNot: keywords_Not,
        JSONSchema202012KeywordIf: keywords_If,
        JSONSchema202012KeywordThen: keywords_Then,
        JSONSchema202012KeywordElse: keywords_Else,
        JSONSchema202012KeywordDependentSchemas: keywords_DependentSchemas,
        JSONSchema202012KeywordPrefixItems: keywords_PrefixItems,
        JSONSchema202012KeywordItems: keywords_Items,
        JSONSchema202012KeywordContains: keywords_Contains,
        JSONSchema202012KeywordProperties: keywords_Properties_Properties,
        JSONSchema202012KeywordPatternProperties:
          PatternProperties_PatternProperties,
        JSONSchema202012KeywordAdditionalProperties:
          keywords_AdditionalProperties,
        JSONSchema202012KeywordPropertyNames: keywords_PropertyNames,
        JSONSchema202012KeywordUnevaluatedItems: keywords_UnevaluatedItems,
        JSONSchema202012KeywordUnevaluatedProperties:
          keywords_UnevaluatedProperties,
        JSONSchema202012KeywordType: _s,
        JSONSchema202012KeywordEnum: Enum_Enum,
        JSONSchema202012KeywordConst: keywords_Const,
        JSONSchema202012KeywordConstraint: bs,
        JSONSchema202012KeywordDependentRequired:
          DependentRequired_DependentRequired,
        JSONSchema202012KeywordContentSchema: keywords_ContentSchema,
        JSONSchema202012KeywordTitle: ws,
        JSONSchema202012KeywordDescription: keywords_Description_Description,
        JSONSchema202012KeywordDefault: keywords_Default,
        JSONSchema202012KeywordDeprecated: keywords_Deprecated,
        JSONSchema202012KeywordReadOnly: keywords_ReadOnly,
        JSONSchema202012KeywordWriteOnly: keywords_WriteOnly,
        JSONSchema202012Accordion: Cs,
        JSONSchema202012ExpandDeepButton: ExpandDeepButton_ExpandDeepButton,
        JSONSchema202012ChevronRightIcon: icons_ChevronRight,
        withJSONSchema202012Context: withJSONSchemaContext,
        JSONSchema202012DeepExpansionContext: () => ys,
      },
      fn: {
        upperFirst: fn_upperFirst,
        jsonSchema202012: {
          isExpandable,
          hasKeyword,
          useFn,
          useConfig,
          useComponent,
          useIsExpandedDeeply,
        },
      },
    }),
    xs = (e => {
      var t = {};
      return __webpack_require__.d(t, e), t;
    })({ default: () => ve.default });
  var array = (e, t) => {
    let { sample: r } = t;
    return (function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const { minItems: r, maxItems: n, uniqueItems: a } = t,
        { contains: o, minContains: s, maxContains: l } = t;
      let i = [...e];
      if (null != o && 'object' == typeof o) {
        if (Number.isInteger(s) && s > 1) {
          const e = i.at(0);
          for (let t = 1; t < s; t += 1) i.unshift(e);
        }
        Number.isInteger(l);
      }
      if (
        (Number.isInteger(n) && n > 0 && (i = e.slice(0, n)),
        Number.isInteger(r) && r > 0)
      )
        for (let e = 0; i.length < r; e += 1) i.push(i[e % i.length]);
      return !0 === a && (i = Array.from(new Set(i))), i;
    })(r, e);
  };
  var object = () => {
    throw new Error('Not implemented');
  };
  const bytes = e => pt()(e),
    pick = e => e.at(0),
    predicates_isBooleanJSONSchema = e => 'boolean' == typeof e,
    isJSONSchemaObject = e => (0, xs.default)(e),
    isJSONSchema = e =>
      predicates_isBooleanJSONSchema(e) || isJSONSchemaObject(e);
  var email = () => 'user@example.com';
  var idn_email = () => '실례@example.com';
  var hostname = () => 'example.com';
  var idn_hostname = () => '실례.com';
  var ipv4 = () => '198.51.100.42';
  var ipv6 = () => '2001:0db8:5b96:0000:0000:426f:8e17:642a';
  var uri = () => 'https://example.com/';
  var uri_reference = () => 'path/index.html';
  var iri = () => 'https://실례.com/';
  var iri_reference = () => 'path/실례.html';
  var uuid = () => '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  var uri_template = () => 'https://example.com/dictionary/{term:1}/{term}';
  var json_pointer = () => '/a/b/c';
  var relative_json_pointer = () => '1/0';
  var date_time = () => new Date().toISOString();
  var date = () => new Date().toISOString().substring(0, 10);
  var time = () => new Date().toISOString().substring(11);
  var duration = () => 'P3D';
  var generators_password = () => '********';
  var regex = () => '^[a-z]+$';
  var Os = class Registry {
    data = {};
    register(e, t) {
      this.data[e] = t;
    }
    unregister(e) {
      void 0 === e ? (this.data = {}) : delete this.data[e];
    }
    get(e) {
      return this.data[e];
    }
  };
  const ks = new Os();
  var api_formatAPI = (e, t) =>
      'function' == typeof t
        ? ks.register(e, t)
        : null === t
        ? ks.unregister(e)
        : ks.get(e),
    Ns = __webpack_require__(764).Buffer;
  var _7bit = e => Ns.from(e).toString('ascii'),
    As = __webpack_require__(764).Buffer;
  var _8bit = e => As.from(e).toString('utf8'),
    Is = __webpack_require__(764).Buffer;
  var binary = e => Is.from(e).toString('binary');
  var quoted_printable = e => {
      let t = '';
      for (let r = 0; r < e.length; r++) {
        const n = e.charCodeAt(r);
        if (61 === n) t += '=3D';
        else if (
          (n >= 33 && n <= 60) ||
          (n >= 62 && n <= 126) ||
          9 === n ||
          32 === n
        )
          t += e.charAt(r);
        else if (13 === n || 10 === n) t += '\r\n';
        else if (n > 126) {
          const n = unescape(encodeURIComponent(e.charAt(r)));
          for (let e = 0; e < n.length; e++)
            t +=
              '=' +
              ('0' + n.charCodeAt(e).toString(16)).slice(-2).toUpperCase();
        } else t += '=' + ('0' + n.toString(16)).slice(-2).toUpperCase();
      }
      return t;
    },
    Rs = __webpack_require__(764).Buffer;
  var base16 = e => Rs.from(e).toString('hex'),
    Ts = __webpack_require__(764).Buffer;
  var base32 = e => {
      const t = Ts.from(e).toString('utf8'),
        r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
      let n = 0,
        a = '',
        o = 0,
        s = 0;
      for (let e = 0; e < t.length; e++)
        for (o = (o << 8) | t.charCodeAt(e), s += 8; s >= 5; )
          (a += r.charAt((o >>> (s - 5)) & 31)), (s -= 5);
      s > 0 &&
        ((a += r.charAt((o << (5 - s)) & 31)),
        (n = (8 - ((8 * t.length) % 5)) % 5));
      for (let e = 0; e < n; e++) a += '=';
      return a;
    },
    Bs = __webpack_require__(764).Buffer;
  var base64 = e => Bs.from(e).toString('base64'),
    js = __webpack_require__(764).Buffer;
  var base64url = e => js.from(e).toString('base64url');
  const Ps = new (class EncoderRegistry extends Os {
      #e = {
        '7bit': _7bit,
        '8bit': _8bit,
        binary,
        'quoted-printable': quoted_printable,
        base16,
        base32,
        base64,
        base64url,
      };
      data = { ...this.#e };
      get defaults() {
        return { ...this.#e };
      }
    })(),
    encoderAPI = (e, t) =>
      'function' == typeof t
        ? Ps.register(e, t)
        : null === t
        ? Ps.unregister(e)
        : Ps.get(e);
  encoderAPI.getDefaults = () => Ps.defaults;
  var Ms = encoderAPI;
  var qs = {
    'text/plain': () => 'string',
    'text/css': () => '.selector { border: 1px solid red }',
    'text/csv': () => 'value1,value2,value3',
    'text/html': () => '<p>content</p>',
    'text/calendar': () => 'BEGIN:VCALENDAR',
    'text/javascript': () => "console.dir('Hello world!');",
    'text/xml': () => '<person age="30">John Doe</person>',
    'text/*': () => 'string',
  };
  var Ls = { 'image/*': () => bytes(25).toString('binary') };
  var Ds = { 'audio/*': () => bytes(25).toString('binary') };
  var Us = { 'video/*': () => bytes(25).toString('binary') };
  var $s = {
    'application/json': () => '{"key":"value"}',
    'application/ld+json': () => '{"name": "John Doe"}',
    'application/x-httpd-php': () => "<?php echo '<p>Hello World!</p>'; ?>",
    'application/rtf': () =>
      String.raw`{\rtf1\adeflang1025\ansi\ansicpg1252\uc1`,
    'application/x-sh': () => 'echo "Hello World!"',
    'application/xhtml+xml': () => '<p>content</p>',
    'application/*': () => bytes(25).toString('binary'),
  };
  const Js = new (class MediaTypeRegistry extends Os {
      #e = { ...qs, ...Ls, ...Ds, ...Us, ...$s };
      data = { ...this.#e };
      get defaults() {
        return { ...this.#e };
      }
    })(),
    mediaTypeAPI = (e, t) => {
      if ('function' == typeof t) return Js.register(e, t);
      if (null === t) return Js.unregister(e);
      const r = e.split(';').at(0),
        n = `${r.split('/').at(0)}/*`;
      return Js.get(e) || Js.get(r) || Js.get(n);
    };
  mediaTypeAPI.getDefaults = () => Js.defaults;
  var Vs = mediaTypeAPI;
  var types_string = function (e) {
    let { sample: t } =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const { contentEncoding: r, contentMediaType: n, contentSchema: a } = e,
      { pattern: o, format: s } = e,
      l = Ms(r) || ha.default;
    let i;
    if ('string' == typeof o)
      i = (e => {
        try {
          return new Jr.default(e).gen();
        } catch {
          return 'string';
        }
      })(o);
    else if ('string' == typeof s)
      i = (e => {
        const { format: t } = e,
          r = api_formatAPI(t);
        if ('function' == typeof r) return r(e);
        switch (t) {
          case 'email':
            return email();
          case 'idn-email':
            return idn_email();
          case 'hostname':
            return hostname();
          case 'idn-hostname':
            return idn_hostname();
          case 'ipv4':
            return ipv4();
          case 'ipv6':
            return ipv6();
          case 'uri':
            return uri();
          case 'uri-reference':
            return uri_reference();
          case 'iri':
            return iri();
          case 'iri-reference':
            return iri_reference();
          case 'uuid':
            return uuid();
          case 'uri-template':
            return uri_template();
          case 'json-pointer':
            return json_pointer();
          case 'relative-json-pointer':
            return relative_json_pointer();
          case 'date-time':
            return date_time();
          case 'date':
            return date();
          case 'time':
            return time();
          case 'duration':
            return duration();
          case 'password':
            return generators_password();
          case 'regex':
            return regex();
        }
        return 'string';
      })(e);
    else if (isJSONSchema(a) && 'string' == typeof n && void 0 !== t)
      i =
        Array.isArray(t) || 'object' == typeof t
          ? JSON.stringify(t)
          : String(t);
    else if ('string' == typeof n) {
      const t = Vs(n);
      'function' == typeof t && (i = t(e));
    } else i = 'string';
    return l(
      (function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { maxLength: r, minLength: n } = t;
        let a = e;
        if (
          (Number.isInteger(r) && r > 0 && (a = a.slice(0, r)),
          Number.isInteger(n) && n > 0)
        ) {
          let e = 0;
          for (; a.length < n; ) a += a[e++ % a.length];
        }
        return a;
      })(i, e)
    );
  };
  var generators_float = () => 0.1;
  var generators_double = () => 0.1;
  var types_number = e => {
    const { format: t } = e;
    let r;
    return (
      (r =
        'string' == typeof t
          ? (e => {
              const { format: t } = e,
                r = api_formatAPI(t);
              if ('function' == typeof r) return r(e);
              switch (t) {
                case 'float':
                  return generators_float();
                case 'double':
                  return generators_double();
              }
              return 0;
            })(e)
          : 0),
      (function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
            minimum: r,
            maximum: n,
            exclusiveMinimum: a,
            exclusiveMaximum: o,
          } = t,
          { multipleOf: s } = t,
          l = Number.isInteger(e) ? 1 : Number.EPSILON;
        let i = 'number' == typeof r ? r : null,
          c = 'number' == typeof n ? n : null,
          u = e;
        if (
          ('number' == typeof a &&
            (i = null !== i ? Math.max(i, a + l) : a + l),
          'number' == typeof o && (c = null !== c ? Math.min(c, o - l) : o - l),
          (u = (i > c && e) || i || c || u),
          'number' == typeof s && s > 0)
        ) {
          const e = u % s;
          u = 0 === e ? u : u + s - e;
        }
        return u;
      })(r, e)
    );
  };
  var int32 = () => (2 ** 30) >>> 0;
  var int64 = () => 2 ** 53 - 1;
  var types_integer = e => {
    const { format: t } = e;
    return 'string' == typeof t
      ? (e => {
          const { format: t } = e,
            r = api_formatAPI(t);
          if ('function' == typeof r) return r(e);
          switch (t) {
            case 'int32':
              return int32();
            case 'int64':
              return int64();
          }
          return 0;
        })(e)
      : 0;
  };
  var types_boolean = e => 'boolean' != typeof e.default || e.default;
  var Ks = new Proxy(
    {
      array,
      object,
      string: types_string,
      number: types_number,
      integer: types_integer,
      boolean: types_boolean,
      null: () => null,
    },
    {
      get: (e, t) =>
        'string' == typeof t && Object.hasOwn(e, t)
          ? e[t]
          : () => `Unknown Type: ${t}`,
    }
  );
  const zs = [
      'array',
      'object',
      'number',
      'integer',
      'string',
      'boolean',
      'null',
    ],
    hasExample = e => {
      if (!isJSONSchemaObject(e)) return !1;
      const { examples: t, example: r, default: n } = e;
      return (
        !!(Array.isArray(t) && t.length >= 1) || void 0 !== n || void 0 !== r
      );
    },
    extractExample = e => {
      if (!isJSONSchemaObject(e)) return null;
      const { examples: t, example: r, default: n } = e;
      return Array.isArray(t) && t.length >= 1
        ? t.at(0)
        : void 0 !== n
        ? n
        : void 0 !== r
        ? r
        : void 0;
    },
    Fs = {
      array: [
        'items',
        'prefixItems',
        'contains',
        'maxContains',
        'minContains',
        'maxItems',
        'minItems',
        'uniqueItems',
        'unevaluatedItems',
      ],
      object: [
        'properties',
        'additionalProperties',
        'patternProperties',
        'propertyNames',
        'minProperties',
        'maxProperties',
        'required',
        'dependentSchemas',
        'dependentRequired',
        'unevaluatedProperties',
      ],
      string: [
        'pattern',
        'format',
        'minLength',
        'maxLength',
        'contentEncoding',
        'contentMediaType',
        'contentSchema',
      ],
      integer: [
        'minimum',
        'maximum',
        'exclusiveMinimum',
        'exclusiveMaximum',
        'multipleOf',
      ],
    };
  Fs.number = Fs.integer;
  const Ws = 'string',
    inferTypeFromValue = e =>
      void 0 === e
        ? null
        : null === e
        ? 'null'
        : Array.isArray(e)
        ? 'array'
        : Number.isInteger(e)
        ? 'integer'
        : typeof e,
    foldType = e => {
      if (Array.isArray(e) && e.length >= 1) {
        if (e.includes('array')) return 'array';
        if (e.includes('object')) return 'object';
        {
          const t = pick(e);
          if (zs.includes(t)) return t;
        }
      }
      return zs.includes(e) ? e : null;
    },
    inferType = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : new WeakSet();
      if (!isJSONSchemaObject(e)) return Ws;
      if (t.has(e)) return Ws;
      t.add(e);
      let { type: r, const: n } = e;
      if (((r = foldType(r)), 'string' != typeof r)) {
        const t = Object.keys(Fs);
        e: for (let n = 0; n < t.length; n += 1) {
          const a = t[n],
            o = Fs[a];
          for (let t = 0; t < o.length; t += 1) {
            const n = o[t];
            if (Object.hasOwn(e, n)) {
              r = a;
              break e;
            }
          }
        }
      }
      if ('string' != typeof r && void 0 !== n) {
        const e = inferTypeFromValue(n);
        r = 'string' == typeof e ? e : r;
      }
      if ('string' != typeof r) {
        const combineTypes = r => {
            if (Array.isArray(e[r])) {
              const n = e[r].map(e => inferType(e, t));
              return foldType(n);
            }
            return null;
          },
          n = combineTypes('allOf'),
          a = combineTypes('anyOf'),
          o = combineTypes('oneOf'),
          s = e.not ? inferType(e.not, t) : null;
        (n || a || o || s) && (r = foldType([n, a, o, s].filter(Boolean)));
      }
      if ('string' != typeof r && hasExample(e)) {
        const t = extractExample(e),
          n = inferTypeFromValue(t);
        r = 'string' == typeof n ? n : r;
      }
      return t.delete(e), r || Ws;
    },
    type_getType = e => inferType(e),
    typeCast = e =>
      predicates_isBooleanJSONSchema(e)
        ? (e => (!1 === e ? { not: {} } : {}))(e)
        : isJSONSchemaObject(e)
        ? e
        : {},
    merge = function (e, t) {
      let r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (predicates_isBooleanJSONSchema(e) && !0 === e) return !0;
      if (predicates_isBooleanJSONSchema(e) && !1 === e) return !1;
      if (predicates_isBooleanJSONSchema(t) && !0 === t) return !0;
      if (predicates_isBooleanJSONSchema(t) && !1 === t) return !1;
      if (!isJSONSchema(e)) return t;
      if (!isJSONSchema(t)) return e;
      const n = { ...t, ...e };
      if (
        t.type &&
        e.type &&
        Array.isArray(t.type) &&
        'string' == typeof t.type
      ) {
        const r = normalizeArray(t.type).concat(e.type);
        n.type = Array.from(new Set(r));
      }
      if (
        (Array.isArray(t.required) &&
          Array.isArray(e.required) &&
          (n.required = [...new Set([...e.required, ...t.required])]),
        t.properties && e.properties)
      ) {
        const a = new Set([
          ...Object.keys(t.properties),
          ...Object.keys(e.properties),
        ]);
        n.properties = {};
        for (const o of a) {
          const a = t.properties[o] || {},
            s = e.properties[o] || {};
          (a.readOnly && !r.includeReadOnly) ||
          (a.writeOnly && !r.includeWriteOnly)
            ? (n.required = (n.required || []).filter(e => e !== o))
            : (n.properties[o] = merge(s, a, r));
        }
      }
      return (
        isJSONSchema(t.items) &&
          isJSONSchema(e.items) &&
          (n.items = merge(e.items, t.items, r)),
        isJSONSchema(t.contains) &&
          isJSONSchema(e.contains) &&
          (n.contains = merge(e.contains, t.contains, r)),
        isJSONSchema(t.contentSchema) &&
          isJSONSchema(e.contentSchema) &&
          (n.contentSchema = merge(e.contentSchema, t.contentSchema, r)),
        n
      );
    };
  var Hs = merge;
  const main_sampleFromSchemaGeneric = function (e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : void 0,
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      'function' == typeof e?.toJS && (e = e.toJS()), (e = typeCast(e));
      let a = void 0 !== r || hasExample(e);
      const o = !a && Array.isArray(e.oneOf) && e.oneOf.length > 0,
        s = !a && Array.isArray(e.anyOf) && e.anyOf.length > 0;
      if (!a && (o || s)) {
        const r = typeCast(pick(o ? e.oneOf : e.anyOf));
        !(e = Hs(e, r, t)).xml && r.xml && (e.xml = r.xml),
          hasExample(e) && hasExample(r) && (a = !0);
      }
      const l = {};
      let {
          xml: i,
          properties: c,
          additionalProperties: u,
          items: d,
          contains: p,
        } = e || {},
        m = type_getType(e),
        { includeReadOnly: f, includeWriteOnly: h } = t;
      i = i || {};
      let g,
        { name: y, prefix: S, namespace: v } = i,
        _ = {};
      if (
        (Object.hasOwn(e, 'type') || (e.type = m),
        n && ((y = y || 'notagname'), (g = (S ? `${S}:` : '') + y), v))
      ) {
        l[S ? `xmlns:${S}` : 'xmlns'] = v;
      }
      n && (_[g] = []);
      const b = objectify(c);
      let w,
        C = 0;
      const hasExceededMaxProperties = () =>
          Number.isInteger(e.maxProperties) &&
          e.maxProperties > 0 &&
          C >= e.maxProperties,
        canAddProperty = t =>
          !(Number.isInteger(e.maxProperties) && e.maxProperties > 0) ||
          (!hasExceededMaxProperties() &&
            (!(t =>
              !Array.isArray(e.required) ||
              0 === e.required.length ||
              !e.required.includes(t))(t) ||
              e.maxProperties -
                C -
                (() => {
                  if (!Array.isArray(e.required) || 0 === e.required.length)
                    return 0;
                  let t = 0;
                  return (
                    n
                      ? e.required.forEach(e => (t += void 0 === _[e] ? 0 : 1))
                      : e.required.forEach(e => {
                          t +=
                            void 0 === _[g]?.find(t => void 0 !== t[e]) ? 0 : 1;
                        }),
                    e.required.length - t
                  );
                })() >
                0));
      if (
        ((w = n
          ? function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : void 0;
              if (e && b[r]) {
                if (((b[r].xml = b[r].xml || {}), b[r].xml.attribute)) {
                  const e = Array.isArray(b[r].enum) ? pick(b[r].enum) : void 0;
                  if (hasExample(b[r]))
                    l[b[r].xml.name || r] = extractExample(b[r]);
                  else if (void 0 !== e) l[b[r].xml.name || r] = e;
                  else {
                    const e = typeCast(b[r]),
                      t = type_getType(e),
                      n = b[r].xml.name || r;
                    l[n] = Ks[t](e);
                  }
                  return;
                }
                b[r].xml.name = b[r].xml.name || r;
              } else b[r] || !1 === u || (b[r] = { xml: { name: r } });
              let o = main_sampleFromSchemaGeneric(b[r], t, a, n);
              canAddProperty(r) &&
                (C++,
                Array.isArray(o) ? (_[g] = _[g].concat(o)) : _[g].push(o));
            }
          : (r, a) => {
              if (canAddProperty(r)) {
                if (
                  (0, xs.default)(e.discriminator?.mapping) &&
                  e.discriminator.propertyName === r &&
                  'string' == typeof e.$$ref
                ) {
                  for (const t in e.discriminator.mapping)
                    if (-1 !== e.$$ref.search(e.discriminator.mapping[t])) {
                      _[r] = t;
                      break;
                    }
                } else _[r] = main_sampleFromSchemaGeneric(b[r], t, a, n);
                C++;
              }
            }),
        a)
      ) {
        let a;
        if (((a = void 0 !== r ? r : extractExample(e)), !n)) {
          if ('number' == typeof a && 'string' === m) return `${a}`;
          if ('string' != typeof a || 'string' === m) return a;
          try {
            return JSON.parse(a);
          } catch {
            return a;
          }
        }
        if ('array' === m) {
          if (!Array.isArray(a)) {
            if ('string' == typeof a) return a;
            a = [a];
          }
          let r = [];
          return (
            isJSONSchemaObject(d) &&
              ((d.xml = d.xml || i || {}),
              (d.xml.name = d.xml.name || i.name),
              (r = a.map(e => main_sampleFromSchemaGeneric(d, t, e, n)))),
            isJSONSchemaObject(p) &&
              ((p.xml = p.xml || i || {}),
              (p.xml.name = p.xml.name || i.name),
              (r = [main_sampleFromSchemaGeneric(p, t, void 0, n), ...r])),
            (r = Ks.array(e, { sample: r })),
            i.wrapped
              ? ((_[g] = r), (0, Vr.default)(l) || _[g].push({ _attr: l }))
              : (_ = r),
            _
          );
        }
        if ('object' === m) {
          if ('string' == typeof a) return a;
          for (const e in a)
            Object.hasOwn(a, e) &&
              ((b[e]?.readOnly && !f) ||
                (b[e]?.writeOnly && !h) ||
                (b[e]?.xml?.attribute
                  ? (l[b[e].xml.name || e] = a[e])
                  : w(e, a[e])));
          return (0, Vr.default)(l) || _[g].push({ _attr: l }), _;
        }
        return (_[g] = (0, Vr.default)(l) ? a : [{ _attr: l }, a]), _;
      }
      if ('array' === m) {
        let r = [];
        if (isJSONSchemaObject(p))
          if (
            (n &&
              ((p.xml = p.xml || e.xml || {}),
              (p.xml.name = p.xml.name || i.name)),
            Array.isArray(p.anyOf))
          )
            r.push(
              ...p.anyOf.map(e =>
                main_sampleFromSchemaGeneric(Hs(e, p, t), t, void 0, n)
              )
            );
          else if (Array.isArray(p.oneOf))
            r.push(
              ...p.oneOf.map(e =>
                main_sampleFromSchemaGeneric(Hs(e, p, t), t, void 0, n)
              )
            );
          else {
            if (!(!n || (n && i.wrapped)))
              return main_sampleFromSchemaGeneric(p, t, void 0, n);
            r.push(main_sampleFromSchemaGeneric(p, t, void 0, n));
          }
        if (isJSONSchemaObject(d))
          if (
            (n &&
              ((d.xml = d.xml || e.xml || {}),
              (d.xml.name = d.xml.name || i.name)),
            Array.isArray(d.anyOf))
          )
            r.push(
              ...d.anyOf.map(e =>
                main_sampleFromSchemaGeneric(Hs(e, d, t), t, void 0, n)
              )
            );
          else if (Array.isArray(d.oneOf))
            r.push(
              ...d.oneOf.map(e =>
                main_sampleFromSchemaGeneric(Hs(e, d, t), t, void 0, n)
              )
            );
          else {
            if (!(!n || (n && i.wrapped)))
              return main_sampleFromSchemaGeneric(d, t, void 0, n);
            r.push(main_sampleFromSchemaGeneric(d, t, void 0, n));
          }
        return (
          (r = Ks.array(e, { sample: r })),
          n && i.wrapped
            ? ((_[g] = r), (0, Vr.default)(l) || _[g].push({ _attr: l }), _)
            : r
        );
      }
      if ('object' === m) {
        for (let e in b)
          Object.hasOwn(b, e) &&
            (b[e]?.deprecated ||
              (b[e]?.readOnly && !f) ||
              (b[e]?.writeOnly && !h) ||
              w(e));
        if ((n && l && _[g].push({ _attr: l }), hasExceededMaxProperties()))
          return _;
        if (predicates_isBooleanJSONSchema(u) && u)
          n
            ? _[g].push({ additionalProp: 'Anything can be here' })
            : (_.additionalProp1 = {}),
            C++;
        else if (isJSONSchemaObject(u)) {
          const r = u,
            a = main_sampleFromSchemaGeneric(r, t, void 0, n);
          if (
            n &&
            'string' == typeof r?.xml?.name &&
            'notagname' !== r?.xml?.name
          )
            _[g].push(a);
          else {
            const t =
              Number.isInteger(e.minProperties) &&
              e.minProperties > 0 &&
              C < e.minProperties
                ? e.minProperties - C
                : 3;
            for (let e = 1; e <= t; e++) {
              if (hasExceededMaxProperties()) return _;
              if (n) {
                const t = {};
                (t['additionalProp' + e] = a.notagname), _[g].push(t);
              } else _['additionalProp' + e] = a;
              C++;
            }
          }
        }
        return _;
      }
      let x;
      if (void 0 !== e.const) x = e.const;
      else if (e && Array.isArray(e.enum)) x = pick(normalizeArray(e.enum));
      else {
        const r = isJSONSchemaObject(e.contentSchema)
          ? main_sampleFromSchemaGeneric(e.contentSchema, t, void 0, n)
          : void 0;
        x = Ks[m](e, { sample: r });
      }
      return n ? ((_[g] = (0, Vr.default)(l) ? x : [{ _attr: l }, x]), _) : x;
    },
    main_createXMLExample = (e, t, r) => {
      const n = main_sampleFromSchemaGeneric(e, t, r, !0);
      if (n)
        return 'string' == typeof n
          ? n
          : $r()(n, { declaration: !0, indent: '\t' });
    },
    main_sampleFromSchema = (e, t, r) =>
      main_sampleFromSchemaGeneric(e, t, r, !1),
    main_resolver = (e, t, r) => [e, JSON.stringify(t), JSON.stringify(r)],
    Gs = utils_memoizeN(main_createXMLExample, main_resolver),
    Xs = utils_memoizeN(main_sampleFromSchema, main_resolver),
    Ys = [{ when: /json/, shouldStringifyTypes: ['string'] }],
    Qs = ['object'];
  var fn_get_json_sample_schema = e => (t, r, n, a) => {
    const { fn: o } = e(),
      s = o.jsonSchema202012.memoizedSampleFromSchema(t, r, a),
      l = typeof s,
      i = Ys.reduce(
        (e, t) => (t.when.test(n) ? [...e, ...t.shouldStringifyTypes] : e),
        Qs
      );
    return (0, lt.default)(i, e => e === l) ? JSON.stringify(s, null, 2) : s;
  };
  var fn_get_yaml_sample_schema = e => (t, r, n, a) => {
    const { fn: o } = e(),
      s = o.jsonSchema202012.getJsonSampleSchema(t, r, n, a);
    let l;
    try {
      (l = Ut.default.dump(
        Ut.default.load(s),
        { lineWidth: -1 },
        { schema: Ut.JSON_SCHEMA }
      )),
        '\n' === l[l.length - 1] && (l = l.slice(0, l.length - 1));
    } catch (e) {
      return console.error(e), 'error: could not generate yaml example';
    }
    return l.replace(/\t/g, '  ');
  };
  var fn_get_xml_sample_schema = e => (t, r, n) => {
    const { fn: a } = e();
    if ((t && !t.xml && (t.xml = {}), t && !t.xml.name)) {
      if (
        !t.$$ref &&
        (t.type || t.items || t.properties || t.additionalProperties)
      )
        return '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- XML example cannot be generated; root element name is undefined --\x3e';
      if (t.$$ref) {
        let e = t.$$ref.match(/\S*\/(\S+)$/);
        t.xml.name = e[1];
      }
    }
    return a.jsonSchema202012.memoizedCreateXMLExample(t, r, n);
  };
  var fn_get_sample_schema = e =>
    function (t) {
      let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : void 0;
      const { fn: o } = e();
      return (
        'function' == typeof t?.toJS && (t = t.toJS()),
        'function' == typeof a?.toJS && (a = a.toJS()),
        /xml/.test(r)
          ? o.jsonSchema202012.getXmlSampleSchema(t, n, a)
          : /(yaml|yml)/.test(r)
          ? o.jsonSchema202012.getYamlSampleSchema(t, n, r, a)
          : o.jsonSchema202012.getJsonSampleSchema(t, n, r, a)
      );
    };
  var json_schema_2020_12_samples = e => {
    let { getSystem: t } = e;
    const r = fn_get_json_sample_schema(t),
      n = fn_get_yaml_sample_schema(t),
      a = fn_get_xml_sample_schema(t),
      o = fn_get_sample_schema(t);
    return {
      fn: {
        jsonSchema202012: {
          sampleFromSchema: main_sampleFromSchema,
          sampleFromSchemaGeneric: main_sampleFromSchemaGeneric,
          sampleEncoderAPI: Ms,
          sampleFormatAPI: api_formatAPI,
          sampleMediaTypeAPI: Vs,
          createXMLExample: main_createXMLExample,
          memoizedSampleFromSchema: Xs,
          memoizedCreateXMLExample: Gs,
          getJsonSampleSchema: r,
          getYamlSampleSchema: n,
          getXmlSampleSchema: a,
          getSampleSchema: o,
        },
      },
    };
  };
  function PresetApis() {
    return [
      base,
      oas3,
      json_schema_2020_12,
      json_schema_2020_12_samples,
      oas31,
    ];
  }
  const {
    GIT_DIRTY: Zs,
    GIT_COMMIT: el,
    PACKAGE_VERSION: tl,
    BUILD_TIME: rl,
  } = {
    PACKAGE_VERSION: '5.10.0',
    GIT_COMMIT: 'g15e91ee5',
    GIT_DIRTY: !0,
    BUILD_TIME: 'Wed, 15 Nov 2023 13:40:52 GMT',
  };
  function SwaggerUI(e) {
    (nt.versions = nt.versions || {}),
      (nt.versions.swaggerUi = {
        version: tl,
        gitRevision: el,
        gitDirty: Zs,
        buildTimestamp: rl,
      });
    const t = {
      dom_id: null,
      domNode: null,
      spec: {},
      url: '',
      urls: null,
      layout: 'BaseLayout',
      docExpansion: 'list',
      maxDisplayedTags: null,
      filter: null,
      validatorUrl: 'https://validator.swagger.io/validator',
      oauth2RedirectUrl: `${window.location.protocol}//${
        window.location.host
      }${window.location.pathname.substring(
        0,
        window.location.pathname.lastIndexOf('/')
      )}/oauth2-redirect.html`,
      persistAuthorization: !1,
      configs: {},
      custom: {},
      displayOperationId: !1,
      displayRequestDuration: !1,
      deepLinking: !1,
      tryItOutEnabled: !1,
      requestInterceptor: e => e,
      responseInterceptor: e => e,
      showMutatedRequest: !0,
      defaultModelRendering: 'example',
      defaultModelExpandDepth: 1,
      defaultModelsExpandDepth: 1,
      showExtensions: !1,
      showCommonExtensions: !1,
      withCredentials: void 0,
      requestSnippetsEnabled: !1,
      requestSnippets: {
        generators: {
          curl_bash: { title: 'cURL (bash)', syntax: 'bash' },
          curl_powershell: { title: 'cURL (PowerShell)', syntax: 'powershell' },
          curl_cmd: { title: 'cURL (CMD)', syntax: 'bash' },
        },
        defaultExpanded: !0,
        languages: null,
      },
      supportedSubmitMethods: [
        'get',
        'put',
        'post',
        'delete',
        'options',
        'head',
        'patch',
        'trace',
      ],
      queryConfigEnabled: !1,
      presets: [PresetApis],
      plugins: [],
      pluginsOptions: { pluginLoadType: 'legacy' },
      initialState: {},
      fn: {},
      components: {},
      syntaxHighlight: { activated: !0, theme: 'agate' },
    };
    let r = e.queryConfigEnabled
      ? (() => {
          let e = {},
            t = nt.location.search;
          if (!t) return {};
          if ('' != t) {
            let r = t.substr(1).split('&');
            for (let t in r)
              Object.prototype.hasOwnProperty.call(r, t) &&
                ((t = r[t].split('=')),
                (e[decodeURIComponent(t[0])] =
                  (t[1] && decodeURIComponent(t[1])) || ''));
          }
          return e;
        })()
      : {};
    const n = e.domNode;
    delete e.domNode;
    const a = Ve()({}, t, e, r),
      o = {
        system: { configs: a.configs },
        plugins: a.presets,
        pluginsOptions: a.pluginsOptions,
        state: Ve()(
          {
            layout: { layout: a.layout, filter: a.filter },
            spec: { spec: '', url: a.url },
            requestSnippets: a.requestSnippets,
          },
          a.initialState
        ),
      };
    if (a.initialState)
      for (var s in a.initialState)
        Object.prototype.hasOwnProperty.call(a.initialState, s) &&
          void 0 === a.initialState[s] &&
          delete o.state[s];
    var l = new Store(o);
    l.register([
      a.plugins,
      () => ({ fn: a.fn, components: a.components, state: a.state }),
    ]);
    var i = l.getSystem();
    const downloadSpec = e => {
        let t = i.specSelectors.getLocalConfig
            ? i.specSelectors.getLocalConfig()
            : {},
          o = Ve()({}, t, a, e || {}, r);
        if (
          (n && (o.domNode = n),
          l.setConfigs(o),
          i.configsActions.loaded(),
          null !== e &&
            (!r.url && 'object' == typeof o.spec && Object.keys(o.spec).length
              ? (i.specActions.updateUrl(''),
                i.specActions.updateLoadingStatus('success'),
                i.specActions.updateSpec(JSON.stringify(o.spec)))
              : i.specActions.download &&
                o.url &&
                !o.urls &&
                (i.specActions.updateUrl(o.url),
                i.specActions.download(o.url))),
          o.domNode)
        )
          i.render(o.domNode, 'App');
        else if (o.dom_id) {
          let e = document.querySelector(o.dom_id);
          i.render(e, 'App');
        } else
          null === o.dom_id ||
            null === o.domNode ||
            console.error(
              'Skipped rendering: no `dom_id` or `domNode` was specified'
            );
        return i;
      },
      c = r.config || a.configUrl;
    return c && i.specActions && i.specActions.getConfigByUrl
      ? (i.specActions.getConfigByUrl(
          {
            url: c,
            loadRemoteConfig: !0,
            requestInterceptor: a.requestInterceptor,
            responseInterceptor: a.responseInterceptor,
          },
          downloadSpec
        ),
        i)
      : downloadSpec();
  }
  (SwaggerUI.System = Store),
    (SwaggerUI.presets = { base, apis: PresetApis }),
    (SwaggerUI.plugins = {
      Auth: auth,
      Configs: configsPlugin,
      DeepLining: deep_linking,
      Err: err,
      Filter: filter,
      Icons: icons,
      JSONSchema5Samples: json_schema_5_samples,
      JSONSchema202012: json_schema_2020_12,
      JSONSchema202012Samples: json_schema_2020_12_samples,
      Layout: plugins_layout,
      Logs: logs,
      OpenAPI30: oas3,
      OpenAPI31: oas3,
      OnComplete: on_complete,
      RequestSnippets: plugins_request_snippets,
      Spec: plugins_spec,
      SwaggerClient: swagger_client,
      Util: util,
      View: view,
      DownloadUrl: downloadUrlPlugin,
      SafeRender: safe_render,
    });
  var nl = SwaggerUI;
})();
var Ce = we.Z;
export { Ce as default };
//# sourceMappingURL=swagger-ui-es-bundle-core.js.map
