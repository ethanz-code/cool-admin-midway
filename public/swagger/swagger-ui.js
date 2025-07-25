!(function webpackUniversalModuleDefinition(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.SwaggerUICore = t())
    : (e.SwaggerUICore = t());
})(this, () =>
  (() => {
    'use strict';
    var e = {
        871: e => {
          e.exports = require('buffer');
        },
      },
      t = {};
    function __webpack_require__(r) {
      var n = t[r];
      if (void 0 !== n) return n.exports;
      var a = (t[r] = { exports: {} });
      return e[r](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return __webpack_require__.d(t, { a: t }), t;
    }),
      (__webpack_require__.d = (e, t) => {
        for (var r in t)
          __webpack_require__.o(t, r) &&
            !__webpack_require__.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (__webpack_require__.o = (e, t) =>
        Object.prototype.hasOwnProperty.call(e, t)),
      (__webpack_require__.r = e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var r = {};
    return (
      (() => {
        __webpack_require__.d(r, { default: () => Lo });
        var e = {};
        __webpack_require__.r(e),
          __webpack_require__.d(e, {
            CLEAR: () => D,
            CLEAR_BY: () => L,
            NEW_AUTH_ERR: () => K,
            NEW_SPEC_ERR: () => $,
            NEW_SPEC_ERR_BATCH: () => V,
            NEW_THROWN_ERR: () => T,
            NEW_THROWN_ERR_BATCH: () => J,
            clear: () => clear,
            clearBy: () => clearBy,
            newAuthErr: () => newAuthErr,
            newSpecErr: () => newSpecErr,
            newSpecErrBatch: () => newSpecErrBatch,
            newThrownErr: () => newThrownErr,
            newThrownErrBatch: () => newThrownErrBatch,
          });
        var t = {};
        __webpack_require__.r(t),
          __webpack_require__.d(t, {
            AUTHORIZE: () => ge,
            AUTHORIZE_OAUTH2: () => Se,
            CONFIGURE_AUTH: () => ve,
            LOGOUT: () => ye,
            PRE_AUTHORIZE_OAUTH2: () => fe,
            RESTORE_AUTHORIZATION: () => _e,
            SHOW_AUTH_POPUP: () => he,
            VALIDATE: () => Ee,
            authPopup: () => authPopup,
            authorize: () => authorize,
            authorizeAccessCodeWithBasicAuthentication: () =>
              authorizeAccessCodeWithBasicAuthentication,
            authorizeAccessCodeWithFormParams: () =>
              authorizeAccessCodeWithFormParams,
            authorizeApplication: () => authorizeApplication,
            authorizeOauth2: () => authorizeOauth2,
            authorizeOauth2WithPersistOption: () =>
              authorizeOauth2WithPersistOption,
            authorizePassword: () => authorizePassword,
            authorizeRequest: () => authorizeRequest,
            authorizeWithPersistOption: () => authorizeWithPersistOption,
            configureAuth: () => configureAuth,
            logout: () => logout,
            logoutWithPersistOption: () => logoutWithPersistOption,
            persistAuthorizationIfNeeded: () => persistAuthorizationIfNeeded,
            preAuthorizeImplicit: () => preAuthorizeImplicit,
            restoreAuthorization: () => restoreAuthorization,
            showDefinitions: () => showDefinitions,
          });
        var n = {};
        __webpack_require__.r(n),
          __webpack_require__.d(n, {
            authorized: () => Oe,
            definitionsForRequirements: () => definitionsForRequirements,
            definitionsToAuthorize: () => xe,
            getConfigs: () => Ne,
            getDefinitionsByNames: () => getDefinitionsByNames,
            isAuthorized: () => isAuthorized,
            shownDefinitions: () => Ce,
          });
        var a = {};
        __webpack_require__.r(a),
          __webpack_require__.d(a, {
            TOGGLE_CONFIGS: () => Je,
            UPDATE_CONFIGS: () => Te,
            loaded: () => actions_loaded,
            toggle: () => toggle,
            update: () => update,
          });
        var s = {};
        __webpack_require__.r(s),
          __webpack_require__.d(s, {
            downloadConfig: () => downloadConfig,
            getConfigByUrl: () => getConfigByUrl,
          });
        var o = {};
        __webpack_require__.r(o), __webpack_require__.d(o, { get: () => get });
        var l = {};
        __webpack_require__.r(l),
          __webpack_require__.d(l, { transform: () => transform });
        var c = {};
        __webpack_require__.r(c),
          __webpack_require__.d(c, {
            transform: () => parameter_oneof_transform,
          });
        var i = {};
        __webpack_require__.r(i),
          __webpack_require__.d(i, {
            allErrors: () => Ze,
            lastError: () => et,
          });
        var p = {};
        __webpack_require__.r(p),
          __webpack_require__.d(p, {
            SHOW: () => dt,
            UPDATE_FILTER: () => mt,
            UPDATE_LAYOUT: () => pt,
            UPDATE_MODE: () => ut,
            changeMode: () => changeMode,
            show: () => actions_show,
            updateFilter: () => updateFilter,
            updateLayout: () => updateLayout,
          });
        var m = {};
        __webpack_require__.r(m),
          __webpack_require__.d(m, {
            current: () => current,
            currentFilter: () => currentFilter,
            isShown: () => isShown,
            showSummary: () => gt,
            whatMode: () => whatMode,
          });
        var u = {};
        __webpack_require__.r(u),
          __webpack_require__.d(u, {
            taggedOperations: () => taggedOperations,
          });
        var d = {};
        __webpack_require__.r(d),
          __webpack_require__.d(d, {
            requestSnippetGenerator_curl_bash: () =>
              requestSnippetGenerator_curl_bash,
            requestSnippetGenerator_curl_cmd: () =>
              requestSnippetGenerator_curl_cmd,
            requestSnippetGenerator_curl_powershell: () =>
              requestSnippetGenerator_curl_powershell,
          });
        var h = {};
        __webpack_require__.r(h),
          __webpack_require__.d(h, {
            getActiveLanguage: () => St,
            getDefaultExpanded: () => Et,
            getGenerators: () => ft,
            getSnippetGenerators: () => getSnippetGenerators,
          });
        var g = {};
        __webpack_require__.r(g),
          __webpack_require__.d(g, {
            allowTryItOutFor: () => allowTryItOutFor,
            basePath: () => $r,
            canExecuteScheme: () => canExecuteScheme,
            consumes: () => Pr,
            consumesOptionsFor: () => consumesOptionsFor,
            contentTypeValues: () => contentTypeValues,
            currentProducesFor: () => currentProducesFor,
            definitions: () => Jr,
            externalDocs: () => Nr,
            findDefinition: () => findDefinition,
            getOAS3RequiredRequestBodyContentType: () =>
              getOAS3RequiredRequestBodyContentType,
            getParameter: () => getParameter,
            hasHost: () => Wr,
            host: () => Vr,
            info: () => Or,
            isMediaTypeSchemaPropertiesEqual: () =>
              isMediaTypeSchemaPropertiesEqual,
            isOAS3: () => xr,
            lastError: () => fr,
            mutatedRequestFor: () => mutatedRequestFor,
            mutatedRequests: () => Fr,
            operationScheme: () => operationScheme,
            operationWithMeta: () => operationWithMeta,
            operations: () => jr,
            operationsWithRootInherited: () => Dr,
            operationsWithTags: () => Ur,
            parameterInclusionSettingFor: () => parameterInclusionSettingFor,
            parameterValues: () => parameterValues,
            parameterWithMeta: () => parameterWithMeta,
            parameterWithMetaByIdentity: () => parameterWithMetaByIdentity,
            parametersIncludeIn: () => parametersIncludeIn,
            parametersIncludeType: () => parametersIncludeType,
            paths: () => Ir,
            produces: () => Mr,
            producesOptionsFor: () => producesOptionsFor,
            requestFor: () => requestFor,
            requests: () => Br,
            responseFor: () => responseFor,
            responses: () => zr,
            schemes: () => Kr,
            security: () => Rr,
            securityDefinitions: () => Tr,
            semver: () => Ar,
            spec: () => spec,
            specJS: () => wr,
            specJson: () => _r,
            specJsonWithResolvedSubtrees: () => Cr,
            specResolved: () => br,
            specResolvedSubtree: () => specResolvedSubtree,
            specSource: () => vr,
            specStr: () => Er,
            tagDetails: () => tagDetails,
            taggedOperations: () => selectors_taggedOperations,
            tags: () => Lr,
            url: () => Sr,
            validOperationMethods: () => qr,
            validateBeforeExecute: () => validateBeforeExecute,
            validationErrors: () => validationErrors,
            version: () => kr,
          });
        var y = {};
        __webpack_require__.r(y),
          __webpack_require__.d(y, {
            CLEAR_REQUEST: () => yn,
            CLEAR_RESPONSE: () => gn,
            CLEAR_VALIDATE_PARAMS: () => fn,
            LOG_REQUEST: () => hn,
            SET_MUTATED_REQUEST: () => dn,
            SET_REQUEST: () => un,
            SET_RESPONSE: () => mn,
            SET_SCHEME: () => _n,
            UPDATE_EMPTY_PARAM_INCLUSION: () => cn,
            UPDATE_JSON: () => on,
            UPDATE_OPERATION_META_VALUE: () => Sn,
            UPDATE_PARAM: () => ln,
            UPDATE_RESOLVED: () => En,
            UPDATE_RESOLVED_SUBTREE: () => vn,
            UPDATE_SPEC: () => an,
            UPDATE_URL: () => sn,
            VALIDATE_PARAMS: () => pn,
            changeConsumesValue: () => changeConsumesValue,
            changeParam: () => changeParam,
            changeParamByIdentity: () => changeParamByIdentity,
            changeProducesValue: () => changeProducesValue,
            clearRequest: () => clearRequest,
            clearResponse: () => clearResponse,
            clearValidateParams: () => clearValidateParams,
            execute: () => actions_execute,
            executeRequest: () => executeRequest,
            invalidateResolvedSubtreeCache: () =>
              invalidateResolvedSubtreeCache,
            logRequest: () => logRequest,
            parseToJson: () => parseToJson,
            requestResolvedSubtree: () => requestResolvedSubtree,
            resolveSpec: () => resolveSpec,
            setMutatedRequest: () => setMutatedRequest,
            setRequest: () => setRequest,
            setResponse: () => setResponse,
            setScheme: () => setScheme,
            updateEmptyParamInclusion: () => updateEmptyParamInclusion,
            updateJsonSpec: () => updateJsonSpec,
            updateResolved: () => updateResolved,
            updateResolvedSubtree: () => updateResolvedSubtree,
            updateSpec: () => updateSpec,
            updateUrl: () => updateUrl,
            validateParams: () => validateParams,
          });
        var f = {};
        __webpack_require__.r(f),
          __webpack_require__.d(f, {
            executeRequest: () => wrap_actions_executeRequest,
            updateJsonSpec: () => wrap_actions_updateJsonSpec,
            updateSpec: () => wrap_actions_updateSpec,
            validateParams: () => wrap_actions_validateParams,
          });
        var S = {};
        __webpack_require__.r(S),
          __webpack_require__.d(S, {
            Button: () => Button,
            Col: () => Col,
            Collapse: () => Collapse,
            Container: () => Container,
            Input: () => Input,
            Link: () => Link,
            Row: () => Row,
            Select: () => Select,
            TextArea: () => TextArea,
          });
        var E = {};
        __webpack_require__.r(E),
          __webpack_require__.d(E, {
            JsonSchemaArrayItemFile: () => JsonSchemaArrayItemFile,
            JsonSchemaArrayItemText: () => JsonSchemaArrayItemText,
            JsonSchemaForm: () => JsonSchemaForm,
            JsonSchema_array: () => JsonSchema_array,
            JsonSchema_boolean: () => JsonSchema_boolean,
            JsonSchema_object: () => JsonSchema_object,
            JsonSchema_string: () => JsonSchema_string,
          });
        var v = {};
        __webpack_require__.r(v),
          __webpack_require__.d(v, {
            basePath: () => Ia,
            consumes: () => qa,
            definitions: () => Oa,
            hasHost: () => Na,
            host: () => Aa,
            produces: () => ja,
            schemes: () => Pa,
            securityDefinitions: () => ka,
            validOperationMethods: () => wrap_selectors_validOperationMethods,
          });
        var _ = {};
        __webpack_require__.r(_),
          __webpack_require__.d(_, { definitionsToAuthorize: () => Ma });
        var w = {};
        __webpack_require__.r(w),
          __webpack_require__.d(w, {
            callbacksOperations: () => Ja,
            isOAS3: () => selectors_isOAS3,
            isOAS30: () => selectors_isOAS30,
            isSwagger2: () => selectors_isSwagger2,
            servers: () => Ta,
          });
        var b = {};
        __webpack_require__.r(b),
          __webpack_require__.d(b, {
            CLEAR_REQUEST_BODY_VALIDATE_ERROR: () => ns,
            CLEAR_REQUEST_BODY_VALUE: () => as,
            SET_REQUEST_BODY_VALIDATE_ERROR: () => rs,
            UPDATE_ACTIVE_EXAMPLES_MEMBER: () => Qa,
            UPDATE_REQUEST_BODY_INCLUSION: () => Ya,
            UPDATE_REQUEST_BODY_VALUE: () => Xa,
            UPDATE_REQUEST_BODY_VALUE_RETAIN_FLAG: () => Ga,
            UPDATE_REQUEST_CONTENT_TYPE: () => Za,
            UPDATE_RESPONSE_CONTENT_TYPE: () => es,
            UPDATE_SELECTED_SERVER: () => Ha,
            UPDATE_SERVER_VARIABLE_VALUE: () => ts,
            clearRequestBodyValidateError: () => clearRequestBodyValidateError,
            clearRequestBodyValue: () => clearRequestBodyValue,
            initRequestBodyValidateError: () => initRequestBodyValidateError,
            setActiveExamplesMember: () => setActiveExamplesMember,
            setRequestBodyInclusion: () => setRequestBodyInclusion,
            setRequestBodyValidateError: () => setRequestBodyValidateError,
            setRequestBodyValue: () => setRequestBodyValue,
            setRequestContentType: () => setRequestContentType,
            setResponseContentType: () => setResponseContentType,
            setRetainRequestBodyValueFlag: () => setRetainRequestBodyValueFlag,
            setSelectedServer: () => setSelectedServer,
            setServerVariableValue: () => setServerVariableValue,
          });
        var C = {};
        __webpack_require__.r(C),
          __webpack_require__.d(C, {
            activeExamplesMember: () => ms,
            hasUserEditedBody: () => cs,
            requestBodyErrors: () => ps,
            requestBodyInclusionSetting: () => is,
            requestBodyValue: () => os,
            requestContentType: () => us,
            responseContentType: () => ds,
            selectDefaultRequestBodyValue: () => selectDefaultRequestBodyValue,
            selectedServer: () => ss,
            serverEffectiveValue: () => ys,
            serverVariableValue: () => hs,
            serverVariables: () => gs,
            shouldRetainRequestBodyValue: () => ls,
            validOperationMethods: () => Ss,
            validateBeforeExecute: () => fs,
            validateShallowRequired: () => validateShallowRequired,
          });
        const x = require('deep-extend');
        var O = __webpack_require__.n(x);
        const N = require('react');
        var k = __webpack_require__.n(N);
        const A = require('redux'),
          I = require('immutable');
        var q = __webpack_require__.n(I);
        const j = require('redux-immutable'),
          P = require('serialize-error'),
          M = require('lodash/merge');
        var R = __webpack_require__.n(M);
        const T = 'err_new_thrown_err',
          J = 'err_new_thrown_err_batch',
          $ = 'err_new_spec_err',
          V = 'err_new_spec_err_batch',
          K = 'err_new_auth_err',
          D = 'err_clear',
          L = 'err_clear_by';
        function newThrownErr(e) {
          return { type: T, payload: (0, P.serializeError)(e) };
        }
        function newThrownErrBatch(e) {
          return { type: J, payload: e };
        }
        function newSpecErr(e) {
          return { type: $, payload: e };
        }
        function newSpecErrBatch(e) {
          return { type: V, payload: e };
        }
        function newAuthErr(e) {
          return { type: K, payload: e };
        }
        function clear() {
          return {
            type: D,
            payload:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
          };
        }
        function clearBy() {
          return {
            type: L,
            payload:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : () => !0,
          };
        }
        const U = (function makeWindow() {
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
          z = require('@braintree/sanitize-url'),
          B =
            (require('lodash/camelCase'),
            require('lodash/upperFirst'),
            require('lodash/memoize'));
        var F = __webpack_require__.n(B);
        const W = require('lodash/find');
        var H = __webpack_require__.n(W);
        const X = require('lodash/some');
        var G = __webpack_require__.n(X);
        const Y = require('lodash/eq');
        var Q = __webpack_require__.n(Y);
        const Z = require('lodash/isFunction');
        var ee = __webpack_require__.n(Z);
        const te = require('css.escape');
        var re = __webpack_require__.n(te);
        const ne = require('randombytes');
        var ae = __webpack_require__.n(ne);
        const se = require('sha.js');
        var oe = __webpack_require__.n(se);
        const le = q().Set.of(
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
          if (!q().Map.isMap(e))
            return { schema: q().Map(), parameterContentMediaType: null };
          if (!t)
            return 'body' === e.get('in')
              ? {
                  schema: e.get('schema', q().Map()),
                  parameterContentMediaType: null,
                }
              : {
                  schema: e.filter((e, t) => le.includes(t)),
                  parameterContentMediaType: null,
                };
          if (e.get('content')) {
            const t = e.get('content', q().Map({})).keySeq().first();
            return {
              schema: e.getIn(['content', t, 'schema'], q().Map()),
              parameterContentMediaType: t,
            };
          }
          return {
            schema: e.get('schema') ? e.get('schema', q().Map()) : q().Map(),
            parameterContentMediaType: null,
          };
        }
        var ce = __webpack_require__(871).Buffer;
        const ie = 'default',
          isImmutable = e => q().Iterable.isIterable(e);
        function objectify(e) {
          return isObject(e) ? (isImmutable(e) ? e.toJS() : e) : {};
        }
        function fromJSOrdered(e) {
          if (isImmutable(e)) return e;
          if (e instanceof U.File) return e;
          if (!isObject(e)) return e;
          if (Array.isArray(e)) return q().Seq(e).map(fromJSOrdered).toList();
          if (ee()(e.entries)) {
            const t = (function createObjWithHashedKeys(e) {
              if (!ee()(e.entries)) return e;
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
                  (n[a[0]].length += 1),
                    (t[`${a[0]}${r}${n[a[0]].length}`] = a[1]);
                } else t[a[0]] = a[1];
              return t;
            })(e);
            return q().OrderedMap(t).map(fromJSOrdered);
          }
          return q().OrderedMap(e).map(fromJSOrdered);
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
        const pe = F();
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
          let s = [],
            o = t.get('nullable'),
            l = t.get('required'),
            c = t.get('maximum'),
            i = t.get('minimum'),
            p = t.get('type'),
            m = t.get('format'),
            u = t.get('maxLength'),
            d = t.get('minLength'),
            h = t.get('uniqueItems'),
            g = t.get('maxItems'),
            y = t.get('minItems'),
            f = t.get('pattern');
          const S = r || !0 === l,
            E = null != e;
          if (
            (o && null === e) ||
            !p ||
            !(S || (E && 'array' === p) || !(!S && !E))
          )
            return [];
          let v = 'string' === p && e,
            _ = 'array' === p && Array.isArray(e) && e.length,
            w = 'array' === p && q().List.isList(e) && e.count();
          const b = [
            v,
            _,
            w,
            'array' === p && 'string' == typeof e && e,
            'file' === p && e instanceof U.File,
            'boolean' === p && (e || !1 === e),
            'number' === p && (e || 0 === e),
            'integer' === p && (e || 0 === e),
            'object' === p && 'object' == typeof e && null !== e,
            'object' === p && 'string' == typeof e && e,
          ].some(e => !!e);
          if (S && !b && !n) return s.push('Required field is not provided'), s;
          if ('object' === p && (null === a || 'application/json' === a)) {
            let r = e;
            if ('string' == typeof e)
              try {
                r = JSON.parse(e);
              } catch (e) {
                return s.push('Parameter string value must be valid JSON'), s;
              }
            t &&
              t.has('required') &&
              isFunc(l.isList) &&
              l.isList() &&
              l.forEach(e => {
                void 0 === r[e] &&
                  s.push({ propKey: e, error: 'Required property not found' });
              }),
              t &&
                t.has('properties') &&
                t.get('properties').forEach((e, t) => {
                  const o = validateValueBySchema(r[t], e, !1, n, a);
                  s.push(...o.map(e => ({ propKey: t, error: e })));
                });
          }
          if (f) {
            let t = ((e, t) => {
              if (!new RegExp(t).test(e))
                return 'Value must follow pattern ' + t;
            })(e, f);
            t && s.push(t);
          }
          if (y && 'array' === p) {
            let t = ((e, t) => {
              if ((!e && t >= 1) || (e && e.length < t))
                return `Array must contain at least ${t} item${
                  1 === t ? '' : 's'
                }`;
            })(e, y);
            t && s.push(t);
          }
          if (g && 'array' === p) {
            let t = ((e, t) => {
              if (e && e.length > t)
                return `Array must not contain more then ${t} item${
                  1 === t ? '' : 's'
                }`;
            })(e, g);
            t && s.push({ needRemove: !0, error: t });
          }
          if (h && 'array' === p) {
            let t = ((e, t) => {
              if (e && ('true' === t || !0 === t)) {
                const t = (0, I.fromJS)(e),
                  r = t.toSet();
                if (e.length > r.size) {
                  let e = (0, I.Set)();
                  if (
                    (t.forEach((r, n) => {
                      t.filter(e => (isFunc(e.equals) ? e.equals(r) : e === r))
                        .size > 1 && (e = e.add(n));
                    }),
                    0 !== e.size)
                  )
                    return e
                      .map(e => ({ index: e, error: 'No duplicates allowed.' }))
                      .toArray();
                }
              }
            })(e, h);
            t && s.push(...t);
          }
          if (u || 0 === u) {
            let t = ((e, t) => {
              if (e.length > t)
                return `Value must be no longer than ${t} character${
                  1 !== t ? 's' : ''
                }`;
            })(e, u);
            t && s.push(t);
          }
          if (d) {
            let t = ((e, t) => {
              if (e.length < t)
                return `Value must be at least ${t} character${
                  1 !== t ? 's' : ''
                }`;
            })(e, d);
            t && s.push(t);
          }
          if (c || 0 === c) {
            let t = ((e, t) => {
              if (e > t) return `Value must be less than ${t}`;
            })(e, c);
            t && s.push(t);
          }
          if (i || 0 === i) {
            let t = ((e, t) => {
              if (e < t) return `Value must be greater than ${t}`;
            })(e, i);
            t && s.push(t);
          }
          if ('string' === p) {
            let t;
            if (
              ((t =
                'date-time' === m
                  ? (e => {
                      if (isNaN(Date.parse(e)))
                        return 'Value must be a DateTime';
                    })(e)
                  : 'uuid' === m
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
                      if (e && 'string' != typeof e)
                        return 'Value must be a string';
                    })(e)),
              !t)
            )
              return s;
            s.push(t);
          } else if ('boolean' === p) {
            let t = (e => {
              if ('true' !== e && 'false' !== e && !0 !== e && !1 !== e)
                return 'Value must be a boolean';
            })(e);
            if (!t) return s;
            s.push(t);
          } else if ('number' === p) {
            let t = (e => {
              if (!/^-?\d+(\.?\d+)?$/.test(e)) return 'Value must be a number';
            })(e);
            if (!t) return s;
            s.push(t);
          } else if ('integer' === p) {
            let t = (e => {
              if (!/^-?\d+$/.test(e)) return 'Value must be an integer';
            })(e);
            if (!t) return s;
            s.push(t);
          } else if ('array' === p) {
            if (!_ && !w) return s;
            e &&
              e.forEach((e, r) => {
                const o = validateValueBySchema(e, t.get('items'), !1, n, a);
                s.push(...o.map(e => ({ index: r, error: e })));
              });
          } else if ('file' === p) {
            let t = (e => {
              if (e && !(e instanceof U.File)) return 'Value must be a file';
            })(e);
            if (!t) return s;
            s.push(t);
          }
          return s;
        }
        const btoa = e => {
            let t;
            return (
              (t = e instanceof ce ? e : ce.from(e.toString(), 'utf-8')),
              t.toString('base64')
            );
          },
          me = {
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
                t.push(
                  [r, '=', encodeURIComponent(n).replace(/%20/g, '+')].join('')
                );
            }
            return t.join('&');
          },
          shallowEqualKeys = (e, t, r) => !!H()(r, r => Q()(e[r], t[r]));
        function sanitizeUrl(e) {
          return 'string' != typeof e || '' === e ? '' : (0, z.sanitizeUrl)(e);
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
            re()(createDeepLinkPath(e).replace(/%20/g, '_')),
          getExtensions = e => e.filter((e, t) => t.startsWith('x-')),
          getCommonExtensions = e =>
            e.filter((e, t) =>
              /^pattern|maxLength|minLength|maximum|minimum/.test(t)
            );
        function deeplyStripKey(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : () => !0;
          if ('object' != typeof e || Array.isArray(e) || null === e || !t)
            return e;
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
          if (
            (e && e.toJS && (e = e.toJS()), 'object' == typeof e && null !== e)
          )
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
          if (!q().Map.isMap(e))
            throw new Error(
              'paramToIdentifier: received a non-Im.Map parameter as input'
            );
          const n = e.get('name'),
            a = e.get('in');
          let s = [];
          return (
            e &&
              e.hashCode &&
              a &&
              n &&
              r &&
              s.push(`${a}.${n}.hash-${e.hashCode()}`),
            a && n && s.push(`${a}.${n}`),
            s.push(n),
            t ? s : s[0] || ''
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
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            O()(
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
                  const a = U.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || A.compose;
                  return (0, A.createStore)(
                    e,
                    t,
                    a((0, A.applyMiddleware)(...n))
                  );
                })(e, t, r);
              })(idFn, (0, I.fromJS)(this.state), this.getSystem)),
              this.buildSystem(!1),
              this.register(this.plugins);
          }
          getStore() {
            return this.store;
          }
          register(e) {
            let t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            var r = combinePlugins(e, this.getSystem(), this.pluginsOptions);
            systemExtend(this.system, r), t && this.buildSystem();
            callAfterLoad.call(this.system, e, this.getSystem()) &&
              this.buildSystem();
          }
          buildSystem() {
            let e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0],
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
                Im: q(),
                React: k(),
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
                                : new I.Map(),
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
                  return (0, j.combineReducers)(t);
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
                s = this.system.statePlugins[a].wrapSelectors;
              return s
                ? objMap(t, (t, n) => {
                    let o = s[n];
                    return o
                      ? (Array.isArray(o) || (o = [o]),
                        o.reduce((t, n) => {
                          let wrappedSelector = function () {
                            for (
                              var s = arguments.length, o = new Array(s), l = 0;
                              l < s;
                              l++
                            )
                              o[l] = arguments[l];
                            return n(t, r.getSystem())(e().getIn(a), ...o);
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
                      var n = arguments.length, s = new Array(n), o = 0;
                      o < n;
                      o++
                    )
                      s[o] = arguments[o];
                    let l = wrapWithTryCatch(r).apply(null, [
                      e().getIn(a),
                      ...s,
                    ]);
                    return (
                      'function' == typeof l && (l = wrapWithTryCatch(l)(t())),
                      l
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
                          type: T,
                          error: !0,
                          payload: (0, P.serializeError)(e),
                        };
                      } finally {
                        return t;
                      }
                    };
            return objMap(t, t => (0, A.bindActionCreators)(process(t), e));
          }
          getMapStateToProps() {
            return () => Object.assign({}, this.getSystem());
          }
          getMapDispatchToProps(e) {
            return t =>
              O()({}, this.getWrappedAndBoundActions(t), this.getFn(), e);
          }
        }
        function combinePlugins(e, t, r) {
          if (isObject(e) && !isArray(e)) return R()({}, e);
          if (isFunc(e)) return combinePlugins(e(t), t, r);
          if (isArray(e)) {
            const n = 'chain' === r.pluginLoadType ? t.getComponents() : {};
            return e.map(e => combinePlugins(e, t, r)).reduce(systemExtend, n);
          }
          return {};
        }
        function callAfterLoad(e, t) {
          let { hasLoaded: r } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
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
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (!isObject(e)) return {};
          if (!isObject(t)) return e;
          t.wrapComponents &&
            (objMap(t.wrapComponents, (r, n) => {
              const a = e.components && e.components[n];
              a && Array.isArray(a)
                ? ((e.components[n] = a.concat([r])),
                  delete t.wrapComponents[n])
                : a && ((e.components[n] = [a, r]), delete t.wrapComponents[n]);
            }),
            Object.keys(t.wrapComponents).length || delete t.wrapComponents);
          const { statePlugins: r } = e;
          if (isObject(r))
            for (let e in r) {
              const n = r[e];
              if (!isObject(n)) continue;
              const { wrapActions: a, wrapSelectors: s } = n;
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
              if (isObject(s))
                for (let r in s) {
                  let n = s[r];
                  Array.isArray(n) || ((n = [n]), (s[r] = n)),
                    t &&
                      t.statePlugins &&
                      t.statePlugins[e] &&
                      t.statePlugins[e].wrapSelectors &&
                      t.statePlugins[e].wrapSelectors[r] &&
                      (t.statePlugins[e].wrapSelectors[r] = s[r].concat(
                        t.statePlugins[e].wrapSelectors[r]
                      ));
                }
            }
          return O()(e, t);
        }
        function wrapWithTryCatch(e) {
          let { logErrors: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return 'function' != typeof e
            ? e
            : function () {
                try {
                  for (
                    var r = arguments.length, n = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    n[a] = arguments[a];
                  return e.call(this, ...n);
                } catch (e) {
                  return t && console.error(e), null;
                }
              };
        }
        const ue = require('url-parse');
        var de = __webpack_require__.n(ue);
        const he = 'show_popup',
          ge = 'authorize',
          ye = 'logout',
          fe = 'pre_authorize_oauth2',
          Se = 'authorize_oauth2',
          Ee = 'validate',
          ve = 'configure_auth',
          _e = 'restore_authorization';
        function showDefinitions(e) {
          return { type: he, payload: e };
        }
        function authorize(e) {
          return { type: ge, payload: e };
        }
        const authorizeWithPersistOption = e => t => {
          let { authActions: r } = t;
          r.authorize(e), r.persistAuthorizationIfNeeded();
        };
        function logout(e) {
          return { type: ye, payload: e };
        }
        const logoutWithPersistOption = e => t => {
            let { authActions: r } = t;
            r.logout(e), r.persistAuthorizationIfNeeded();
          },
          preAuthorizeImplicit = e => t => {
            let { authActions: r, errActions: n } = t,
              { auth: a, token: s, isValid: o } = e,
              { schema: l, name: c } = a,
              i = l.get('flow');
            delete U.swaggerUIRedirectOauth2,
              'accessCode' === i ||
                o ||
                n.newAuthErr({
                  authId: c,
                  source: 'auth',
                  level: 'warning',
                  message:
                    "Authorization may be unsafe, passed state was changed in server Passed state wasn't returned from auth server",
                }),
              s.error
                ? n.newAuthErr({
                    authId: c,
                    source: 'auth',
                    level: 'error',
                    message: JSON.stringify(s),
                  })
                : r.authorizeOauth2WithPersistOption({ auth: a, token: s });
          };
        function authorizeOauth2(e) {
          return { type: Se, payload: e };
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
                username: s,
                password: o,
                passwordType: l,
                clientId: c,
                clientSecret: i,
              } = e,
              p = {
                grant_type: 'password',
                scope: e.scopes.join(' '),
                username: s,
                password: o,
              },
              m = {};
            switch (l) {
              case 'request-body':
                !(function setClientIdAndSecret(e, t, r) {
                  t && Object.assign(e, { client_id: t });
                  r && Object.assign(e, { client_secret: r });
                })(p, c, i);
                break;
              case 'basic':
                m.Authorization = 'Basic ' + btoa(c + ':' + i);
                break;
              default:
                console.warn(
                  `Warning: invalid passwordType ${l} was passed, not including client id and secret`
                );
            }
            return r.authorizeRequest({
              body: buildFormData(p),
              url: n.get('tokenUrl'),
              name: a,
              headers: m,
              query: {},
              auth: e,
            });
          };
        const authorizeApplication = e => t => {
            let { authActions: r } = t,
              {
                schema: n,
                scopes: a,
                name: s,
                clientId: o,
                clientSecret: l,
              } = e,
              c = { Authorization: 'Basic ' + btoa(o + ':' + l) },
              i = { grant_type: 'client_credentials', scope: a.join(' ') };
            return r.authorizeRequest({
              body: buildFormData(i),
              name: s,
              url: n.get('tokenUrl'),
              auth: e,
              headers: c,
            });
          },
          authorizeAccessCodeWithFormParams = e => {
            let { auth: t, redirectUrl: r } = e;
            return e => {
              let { authActions: n } = e,
                {
                  schema: a,
                  name: s,
                  clientId: o,
                  clientSecret: l,
                  codeVerifier: c,
                } = t,
                i = {
                  grant_type: 'authorization_code',
                  code: t.code,
                  client_id: o,
                  client_secret: l,
                  redirect_uri: r,
                  code_verifier: c,
                };
              return n.authorizeRequest({
                body: buildFormData(i),
                name: s,
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
                  name: s,
                  clientId: o,
                  clientSecret: l,
                  codeVerifier: c,
                } = t,
                i = { Authorization: 'Basic ' + btoa(o + ':' + l) },
                p = {
                  grant_type: 'authorization_code',
                  code: t.code,
                  client_id: o,
                  redirect_uri: r,
                  code_verifier: c,
                };
              return n.authorizeRequest({
                body: buildFormData(p),
                name: s,
                url: a.get('tokenUrl'),
                auth: t,
                headers: i,
              });
            };
          },
          authorizeRequest = e => t => {
            let r,
              {
                fn: n,
                getConfigs: a,
                authActions: s,
                errActions: o,
                oas3Selectors: l,
                specSelectors: c,
                authSelectors: i,
              } = t,
              {
                body: p,
                query: m = {},
                headers: u = {},
                name: d,
                url: h,
                auth: g,
              } = e,
              { additionalQueryStringParams: y } = i.getConfigs() || {};
            if (c.isOAS3()) {
              let e = l.serverEffectiveValue(l.selectedServer());
              r = de()(h, e, !0);
            } else r = de()(h, c.url(), !0);
            'object' == typeof y && (r.query = Object.assign({}, r.query, y));
            const f = r.toString();
            let S = Object.assign(
              {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
              },
              u
            );
            n.fetch({
              url: f,
              method: 'post',
              headers: S,
              query: m,
              body: p,
              requestInterceptor: a().requestInterceptor,
              responseInterceptor: a().responseInterceptor,
            })
              .then(function (e) {
                let t = JSON.parse(e.data),
                  r = t && (t.error || ''),
                  n = t && (t.parseError || '');
                e.ok
                  ? r || n
                    ? o.newAuthErr({
                        authId: d,
                        level: 'error',
                        source: 'auth',
                        message: JSON.stringify(t),
                      })
                    : s.authorizeOauth2WithPersistOption({ auth: g, token: t })
                  : o.newAuthErr({
                      authId: d,
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
                o.newAuthErr({
                  authId: d,
                  level: 'error',
                  source: 'auth',
                  message: t,
                });
              });
          };
        function configureAuth(e) {
          return { type: ve, payload: e };
        }
        function restoreAuthorization(e) {
          return { type: _e, payload: e };
        }
        const persistAuthorizationIfNeeded = () => e => {
            let { authSelectors: t, getConfigs: r } = e;
            if (!r().persistAuthorization) return;
            const n = t.authorized().toJS();
            localStorage.setItem('authorized', JSON.stringify(n));
          },
          authPopup = (e, t) => () => {
            (U.swaggerUIRedirectOauth2 = t), U.open(e);
          },
          we = {
            [he]: (e, t) => {
              let { payload: r } = t;
              return e.set('showDefinitions', r);
            },
            [ge]: (e, t) => {
              let { payload: r } = t,
                n = (0, I.fromJS)(r),
                a = e.get('authorized') || (0, I.Map)();
              return (
                n.entrySeq().forEach(t => {
                  let [r, n] = t;
                  if (!isFunc(n.getIn)) return e.set('authorized', a);
                  let s = n.getIn(['schema', 'type']);
                  if ('apiKey' === s || 'http' === s) a = a.set(r, n);
                  else if ('basic' === s) {
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
            [Se]: (e, t) => {
              let r,
                { payload: n } = t,
                { auth: a, token: s } = n;
              (a.token = Object.assign({}, s)), (r = (0, I.fromJS)(a));
              let o = e.get('authorized') || (0, I.Map)();
              return (o = o.set(r.get('name'), r)), e.set('authorized', o);
            },
            [ye]: (e, t) => {
              let { payload: r } = t,
                n = e.get('authorized').withMutations(e => {
                  r.forEach(t => {
                    e.delete(t);
                  });
                });
              return e.set('authorized', n);
            },
            [ve]: (e, t) => {
              let { payload: r } = t;
              return e.set('configs', r);
            },
            [_e]: (e, t) => {
              let { payload: r } = t;
              return e.set('authorized', (0, I.fromJS)(r.authorized));
            },
          },
          be = require('reselect'),
          state = e => e,
          Ce = (0, be.createSelector)(state, e => e.get('showDefinitions')),
          xe = (0, be.createSelector)(state, () => e => {
            let { specSelectors: t } = e,
              r = t.securityDefinitions() || (0, I.Map)({}),
              n = (0, I.List)();
            return (
              r.entrySeq().forEach(e => {
                let [t, r] = e,
                  a = (0, I.Map)();
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
              a = (0, I.List)();
            return (
              t.valueSeq().forEach(e => {
                let t = (0, I.Map)();
                e.entrySeq().forEach(e => {
                  let r,
                    [a, s] = e,
                    o = n.get(a);
                  'oauth2' === o.get('type') &&
                    s.size &&
                    ((r = o.get('scopes')),
                    r.keySeq().forEach(e => {
                      s.contains(e) || (r = r.delete(e));
                    }),
                    (o = o.set('allowedScopes', r))),
                    (t = t.set(a, o));
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
                : (0, I.List)();
            return e => {
              let { authSelectors: r } = e;
              const n = r.definitionsToAuthorize() || (0, I.List)();
              let a = (0, I.List)();
              return (
                n.forEach(e => {
                  let r = t.find(t => t.get(e.keySeq().first()));
                  r &&
                    (e.forEach((t, n) => {
                      if ('oauth2' === t.get('type')) {
                        const a = r.get(n);
                        let s = t.get('scopes');
                        I.List.isList(a) &&
                          I.Map.isMap(s) &&
                          (s.keySeq().forEach(e => {
                            a.contains(e) || (s = s.delete(e));
                          }),
                          (e = e.set(n, t.set('scopes', s))));
                      }
                    }),
                    (a = a.push(e)));
                }),
                a
              );
            };
          },
          Oe = (0, be.createSelector)(
            state,
            e => e.get('authorized') || (0, I.Map)()
          ),
          isAuthorized = (e, t) => e => {
            let { authSelectors: r } = e,
              n = r.authorized();
            return I.List.isList(t)
              ? !!t.toJS().filter(
                  e =>
                    -1 ===
                    Object.keys(e)
                      .map(e => !!n.get(e))
                      .indexOf(!1)
                ).length
              : null;
          },
          Ne = (0, be.createSelector)(state, e => e.get('configs')),
          execute = (e, t) => {
            let { authSelectors: r, specSelectors: n } = t;
            return t => {
              let { path: a, method: s, operation: o, extras: l } = t,
                c = {
                  authorized: r.authorized() && r.authorized().toJS(),
                  definitions:
                    n.securityDefinitions() && n.securityDefinitions().toJS(),
                  specSecurity: n.security() && n.security().toJS(),
                };
              return e({
                path: a,
                method: s,
                operation: o,
                securities: c,
                ...l,
              });
            };
          },
          loaded = (e, t) => r => {
            const { getConfigs: n, authActions: a } = t,
              s = n();
            if ((e(r), s.persistAuthorization)) {
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
                  (document.cookie = `${e.get(
                    'name'
                  )}=${t}; SameSite=None; Secure`);
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
          },
          ke = require('prop-types');
        var Ae = __webpack_require__.n(ke);
        const Ie = require('lodash/omit');
        var qe = __webpack_require__.n(Ie);
        class LockAuthIcon extends k().Component {
          mapStateToProps(e, t) {
            return { state: e, ownProps: qe()(t, Object.keys(t.getSystem())) };
          }
          render() {
            const { getComponent: e, ownProps: t } = this.props,
              r = e('LockIcon');
            return k().createElement(r, t);
          }
        }
        const je = LockAuthIcon;
        class UnlockAuthIcon extends k().Component {
          mapStateToProps(e, t) {
            return { state: e, ownProps: qe()(t, Object.keys(t.getSystem())) };
          }
          render() {
            const { getComponent: e, ownProps: t } = this.props,
              r = e('UnlockIcon');
            return k().createElement(r, t);
          }
        }
        const Pe = UnlockAuthIcon;
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
              LockAuthIcon: je,
              UnlockAuthIcon: Pe,
              LockAuthOperationIcon: je,
              UnlockAuthOperationIcon: Pe,
            },
            statePlugins: {
              auth: {
                reducers: we,
                actions: t,
                selectors: n,
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
              specSelectors: { specJson: s, isOAS3: o },
            } = e,
            l = o()
              ? ['components', 'securitySchemes']
              : ['securityDefinitions'],
            c = s().getIn([...l, t]);
          return c
            ? a({
                [t]: { value: { username: r, password: n }, schema: c.toJS() },
              })
            : null;
        }
        function preauthorizeApiKey(e, t, r) {
          const {
              authActions: { authorize: n },
              specSelectors: { specJson: a, isOAS3: s },
            } = e,
            o = s()
              ? ['components', 'securitySchemes']
              : ['securityDefinitions'],
            l = a().getIn([...o, t]);
          return l ? n({ [t]: { value: r, schema: l.toJS() } }) : null;
        }
        const Me = require('js-yaml');
        var Re = __webpack_require__.n(Me);
        const parseYamlConfig = (e, t) => {
            try {
              return Re().load(e);
            } catch (e) {
              return t && t.errActions.newThrownErr(new Error(e)), {};
            }
          },
          Te = 'configs_update',
          Je = 'configs_toggle';
        function update(e, t) {
          return { type: Te, payload: { [e]: t } };
        }
        function toggle(e) {
          return { type: Je, payload: e };
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
          get = (e, t) => e.getIn(Array.isArray(t) ? t : [t]),
          $e = {
            [Te]: (e, t) => e.merge((0, I.fromJS)(t.payload)),
            [Je]: (e, t) => {
              const r = t.payload,
                n = e.get(r);
              return e.set(r, !n);
            },
          },
          Ve = {
            getLocalConfig: () =>
              parseYamlConfig(
                '---\nurl: "/swagger/json"\ndom_id: "#swagger-ui"\nvalidatorUrl: "https://validator.swagger.io/validator"\n'
              ),
          };
        function configsPlugin() {
          return {
            statePlugins: {
              spec: { actions: s, selectors: Ve },
              configs: { reducers: $e, actions: a, selectors: o },
            },
          };
        }
        const setHash = e =>
            e
              ? history.pushState(null, null, `#${e}`)
              : (window.location.hash = ''),
          Ke = require('zenscroll');
        var De = __webpack_require__.n(Ke);
        const Le = 'layout_scroll_to',
          Ue = 'layout_clear_scroll';
        const ze = {
            fn: {
              getScrollParent: function getScrollParent(e, t) {
                const r = document.documentElement;
                let n = getComputedStyle(e);
                const a = 'absolute' === n.position,
                  s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
                if ('fixed' === n.position) return r;
                for (let t = e; (t = t.parentElement); )
                  if (
                    ((n = getComputedStyle(t)),
                    (!a || 'static' !== n.position) &&
                      s.test(n.overflow + n.overflowY + n.overflowX))
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
                        De().createScroller(t).to(e);
                    } catch (e) {
                      console.error(e);
                    }
                  },
                  scrollTo: e => ({
                    type: Le,
                    payload: Array.isArray(e) ? e : [e],
                  }),
                  clearScrollTo: () => ({ type: Ue }),
                  readyToScroll: (e, t) => r => {
                    const n = r.layoutSelectors.getScrollToKey();
                    q().is(n, (0, I.fromJS)(e)) &&
                      (r.layoutActions.scrollToElement(t),
                      r.layoutActions.clearScrollTo());
                  },
                  parseDeepLinkHash: e => t => {
                    let {
                      layoutActions: r,
                      layoutSelectors: n,
                      getConfigs: a,
                    } = t;
                    if (a().deepLinking && e) {
                      let t = e.slice(1);
                      '!' === t[0] && (t = t.slice(1)),
                        '/' === t[0] && (t = t.slice(1));
                      const a = t.split('/').map(e => e || ''),
                        s = n.isShownKeyFromUrlHashArray(a),
                        [o, l = '', c = ''] = s;
                      if ('operations' === o) {
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
                      (l.indexOf('_') > -1 || c.indexOf('_') > -1) &&
                        (console.warn(
                          'Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead.'
                        ),
                        r.show(
                          s.map(e => e.replace(/_/g, ' ')),
                          !0
                        )),
                        r.show(s, !0),
                        r.scrollTo(s);
                    }
                  },
                },
                selectors: {
                  getScrollToKey: e => e.get('scrollToKey'),
                  isShownKeyFromUrlHashArray(e, t) {
                    const [r, n] = t;
                    return n
                      ? ['operations', r, n]
                      : r
                      ? ['operations-tag', r]
                      : [];
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
                  [Le]: (e, t) => e.set('scrollToKey', q().fromJS(t.payload)),
                  [Ue]: e => e.delete('scrollToKey'),
                },
                wrapActions: {
                  show: (e, t) => {
                    let { getConfigs: r, layoutSelectors: n } = t;
                    return function () {
                      for (
                        var t = arguments.length, a = new Array(t), s = 0;
                        s < t;
                        s++
                      )
                        a[s] = arguments[s];
                      if ((e(...a), r().deepLinking))
                        try {
                          let [e, t] = a;
                          e = Array.isArray(e) ? e : [e];
                          const r = n.urlHashArrayFromIsShownKey(e);
                          if (!r.length) return;
                          const [s, o] = r;
                          if (!t) return setHash('/');
                          2 === r.length
                            ? setHash(
                                createDeepLinkPath(
                                  `/${encodeURIComponent(
                                    s
                                  )}/${encodeURIComponent(o)}`
                                )
                              )
                            : 1 === r.length &&
                              setHash(
                                createDeepLinkPath(`/${encodeURIComponent(s)}`)
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
          Be = require('react-immutable-proptypes');
        var Fe = __webpack_require__.n(Be);
        const operation_wrapper = (e, t) =>
            class OperationWrapper extends k().Component {
              onLoad = e => {
                const { operation: r } = this.props,
                  { tag: n, operationId: a } = r.toObject();
                let { isShownKey: s } = r.toObject();
                (s = s || ['operations', n, a]),
                  t.layoutActions.readyToScroll(s, e);
              };
              render() {
                return k().createElement(
                  'span',
                  { ref: this.onLoad },
                  k().createElement(e, this.props)
                );
              }
            },
          operation_tag_wrapper = (e, t) =>
            class OperationTagWrapper extends k().Component {
              onLoad = e => {
                const { tag: r } = this.props,
                  n = ['operations-tag', r];
                t.layoutActions.readyToScroll(n, e);
              };
              render() {
                return k().createElement(
                  'span',
                  { ref: this.onLoad },
                  k().createElement(e, this.props)
                );
              }
            };
        function deep_linking() {
          return [
            ze,
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
        const We = require('lodash/reduce');
        var He = __webpack_require__.n(We);
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
        const Xe = require('lodash/get');
        var Ge = __webpack_require__.n(Xe);
        function parameter_oneof_transform(e, t) {
          let { jsSpec: r } = t;
          return e;
        }
        const Ye = [l, c];
        function transformErrors(e) {
          let t = { jsSpec: {} },
            r = He()(
              Ye,
              (e, r) => {
                try {
                  return r.transform(e, t).filter(e => !!e);
                } catch (t) {
                  return console.error('Transformer error:', t), e;
                }
              },
              e
            );
          return r
            .filter(e => !!e)
            .map(e => (!e.get('line') && e.get('path'), e));
        }
        let Qe = { line: 0, level: 'error', message: 'Unknown error' };
        const Ze = (0, be.createSelector)(
            e => e,
            e => e.get('errors', (0, I.List)())
          ),
          et = (0, be.createSelector)(Ze, e => e.last());
        function err(t) {
          return {
            statePlugins: {
              err: {
                reducers: {
                  [T]: (e, t) => {
                    let { payload: r } = t,
                      n = Object.assign(Qe, r, { type: 'thrown' });
                    return e
                      .update('errors', e =>
                        (e || (0, I.List)()).push((0, I.fromJS)(n))
                      )
                      .update('errors', e => transformErrors(e));
                  },
                  [J]: (e, t) => {
                    let { payload: r } = t;
                    return (
                      (r = r.map(e =>
                        (0, I.fromJS)(Object.assign(Qe, e, { type: 'thrown' }))
                      )),
                      e
                        .update('errors', e =>
                          (e || (0, I.List)()).concat((0, I.fromJS)(r))
                        )
                        .update('errors', e => transformErrors(e))
                    );
                  },
                  [$]: (e, t) => {
                    let { payload: r } = t,
                      n = (0, I.fromJS)(r);
                    return (
                      (n = n.set('type', 'spec')),
                      e
                        .update('errors', e =>
                          (e || (0, I.List)())
                            .push((0, I.fromJS)(n))
                            .sortBy(e => e.get('line'))
                        )
                        .update('errors', e => transformErrors(e))
                    );
                  },
                  [V]: (e, t) => {
                    let { payload: r } = t;
                    return (
                      (r = r.map(e =>
                        (0, I.fromJS)(Object.assign(Qe, e, { type: 'spec' }))
                      )),
                      e
                        .update('errors', e =>
                          (e || (0, I.List)()).concat((0, I.fromJS)(r))
                        )
                        .update('errors', e => transformErrors(e))
                    );
                  },
                  [K]: (e, t) => {
                    let { payload: r } = t,
                      n = (0, I.fromJS)(Object.assign({}, r));
                    return (
                      (n = n.set('type', 'auth')),
                      e
                        .update('errors', e =>
                          (e || (0, I.List)()).push((0, I.fromJS)(n))
                        )
                        .update('errors', e => transformErrors(e))
                    );
                  },
                  [D]: (e, t) => {
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
                  [L]: (e, t) => {
                    let { payload: r } = t;
                    if (!r || 'function' != typeof r) return e;
                    let n = e.get('errors').filter(e => r(e));
                    return e.merge({ errors: n });
                  },
                },
                actions: e,
                selectors: i,
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
        const tt = require('@babel/runtime-corejs3/helpers/extends');
        var rt = __webpack_require__.n(tt);
        const ArrowUp = e => {
          let { className: t, width: r, height: n, ...a } = e;
          return k().createElement(
            'svg',
            rt()(
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
            k().createElement('path', {
              d: 'M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z',
            })
          );
        };
        ArrowUp.defaultProps = { className: null, width: 20, height: 20 };
        const nt = ArrowUp,
          ArrowDown = e => {
            let { className: t, width: r, height: n, ...a } = e;
            return k().createElement(
              'svg',
              rt()(
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
              k().createElement('path', {
                d: 'M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z',
              })
            );
          };
        ArrowDown.defaultProps = { className: null, width: 20, height: 20 };
        const at = ArrowDown,
          Arrow = e => {
            let { className: t, width: r, height: n, ...a } = e;
            return k().createElement(
              'svg',
              rt()(
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
              k().createElement('path', {
                d: 'M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z',
              })
            );
          };
        Arrow.defaultProps = { className: null, width: 20, height: 20 };
        const st = Arrow,
          Close = e => {
            let { className: t, width: r, height: n, ...a } = e;
            return k().createElement(
              'svg',
              rt()(
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
              k().createElement('path', {
                d: 'M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z',
              })
            );
          };
        Close.defaultProps = { className: null, width: 20, height: 20 };
        const ot = Close,
          Copy = e => {
            let { className: t, width: r, height: n, ...a } = e;
            return k().createElement(
              'svg',
              rt()(
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
              k().createElement(
                'g',
                { transform: 'translate(2, -1)' },
                k().createElement('path', {
                  fill: '#ffffff',
                  fillRule: 'evenodd',
                  d: 'M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z',
                })
              )
            );
          };
        Copy.defaultProps = { className: null, width: 15, height: 16 };
        const lt = Copy,
          Lock = e => {
            let { className: t, width: r, height: n, ...a } = e;
            return k().createElement(
              'svg',
              rt()(
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
              k().createElement('path', {
                d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z',
              })
            );
          };
        Lock.defaultProps = { className: null, width: 20, height: 20 };
        const ct = Lock,
          Unlock = e => {
            let { className: t, width: r, height: n, ...a } = e;
            return k().createElement(
              'svg',
              rt()(
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
              k().createElement('path', {
                d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z',
              })
            );
          };
        Unlock.defaultProps = { className: null, width: 20, height: 20 };
        const it = Unlock,
          icons = () => ({
            components: {
              ArrowUpIcon: nt,
              ArrowDownIcon: at,
              ArrowIcon: st,
              CloseIcon: ot,
              CopyIcon: lt,
              LockIcon: ct,
              UnlockIcon: it,
            },
          }),
          pt = 'layout_update_layout',
          mt = 'layout_update_filter',
          ut = 'layout_update_mode',
          dt = 'layout_show';
        function updateLayout(e) {
          return { type: pt, payload: e };
        }
        function updateFilter(e) {
          return { type: mt, payload: e };
        }
        function actions_show(e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return (
            (e = normalizeArray(e)),
            { type: dt, payload: { thing: e, shown: t } }
          );
        }
        function changeMode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          return (
            (e = normalizeArray(e)),
            { type: ut, payload: { thing: e, mode: t } }
          );
        }
        const ht = {
            [pt]: (e, t) => e.set('layout', t.payload),
            [mt]: (e, t) => e.set('filter', t.payload),
            [dt]: (e, t) => {
              const r = t.payload.shown,
                n = (0, I.fromJS)(t.payload.thing);
              return e.update('shown', (0, I.fromJS)({}), e => e.set(n, r));
            },
            [ut]: (e, t) => {
              let r = t.payload.thing,
                n = t.payload.mode;
              return e.setIn(['modes'].concat(r), (n || '') + '');
            },
          },
          current = e => e.get('layout'),
          currentFilter = e => e.get('filter'),
          isShown = (e, t, r) => (
            (t = normalizeArray(t)),
            e.get('shown', (0, I.fromJS)({})).get((0, I.fromJS)(t), r)
          ),
          whatMode = function (e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '';
            return (t = normalizeArray(t)), e.getIn(['modes', ...t], r);
          },
          gt = (0, be.createSelector)(
            e => e,
            e => !isShown(e, 'editor')
          ),
          taggedOperations = (e, t) =>
            function (r) {
              for (
                var n = arguments.length,
                  a = new Array(n > 1 ? n - 1 : 0),
                  s = 1;
                s < n;
                s++
              )
                a[s - 1] = arguments[s];
              let o = e(r, ...a);
              const {
                  fn: l,
                  layoutSelectors: c,
                  getConfigs: i,
                } = t.getSystem(),
                p = i(),
                { maxDisplayedTags: m } = p;
              let u = c.currentFilter();
              return (
                u &&
                  !0 !== u &&
                  'true' !== u &&
                  'false' !== u &&
                  (o = l.opsFilter(o, u)),
                m && !isNaN(m) && m >= 0 && (o = o.slice(0, m)),
                o
              );
            };
        function plugins_layout() {
          return {
            statePlugins: {
              layout: { reducers: ht, actions: p, selectors: m },
              spec: { wrapSelectors: u },
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
        let yt = !1;
        function on_complete() {
          return {
            statePlugins: {
              spec: {
                wrapActions: {
                  updateSpec: e =>
                    function () {
                      return (yt = !0), e(...arguments);
                    },
                  updateJsonSpec: (e, t) =>
                    function () {
                      const r = t.getConfigs().onComplete;
                      return (
                        yt &&
                          'function' == typeof r &&
                          (setTimeout(r, 0), (yt = !1)),
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
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : '',
              a = !1,
              s = '';
            const addWords = function () {
                for (
                  var e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                return (s += ' ' + r.map(t).join(' '));
              },
              addWordsWithoutLeadingSpace = function () {
                for (
                  var e = arguments.length, r = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  r[n] = arguments[n];
                return (s += r.map(t).join(' '));
              },
              addNewLine = () => (s += ` ${r}`),
              addIndent = function () {
                return (s += '  '.repeat(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1
                ));
              };
            let o = e.get('headers');
            if (
              ((s += 'curl' + n),
              e.has('curlOptions') && addWords(...e.get('curlOptions')),
              addWords('-X', e.get('method')),
              addNewLine(),
              addIndent(),
              addWordsWithoutLeadingSpace(`${e.get('url')}`),
              o && o.size)
            )
              for (let t of e.get('headers').entries()) {
                addNewLine(), addIndent();
                let [e, r] = t;
                addWordsWithoutLeadingSpace('-H', `${e}: ${r}`),
                  (a =
                    a ||
                    (/^content-type$/i.test(e) &&
                      /^multipart\/form-data$/i.test(r)));
              }
            const l = e.get('body');
            if (l)
              if (a && ['POST', 'PUT', 'PATCH'].includes(e.get('method')))
                for (let [e, t] of l.entrySeq()) {
                  let r = extractKey(e);
                  addNewLine(),
                    addIndent(),
                    addWordsWithoutLeadingSpace('-F'),
                    t instanceof U.File && 'string' == typeof t.valueOf()
                      ? addWords(
                          `${r}=${t.data}${t.type ? `;type=${t.type}` : ''}`
                        )
                      : t instanceof U.File
                      ? addWords(
                          `${r}=@${t.name}${t.type ? `;type=${t.type}` : ''}`
                        )
                      : addWords(`${r}=${t}`);
                }
              else if (l instanceof U.File)
                addNewLine(),
                  addIndent(),
                  addWordsWithoutLeadingSpace(`--data-binary '@${l.name}'`);
              else {
                addNewLine(), addIndent(), addWordsWithoutLeadingSpace('-d ');
                let t = l;
                I.Map.isMap(t)
                  ? addWordsWithoutLeadingSpace(
                      (function getStringBodyOfMap(e) {
                        let t = [];
                        for (let [r, n] of e.get('body').entrySeq()) {
                          let e = extractKey(r);
                          n instanceof U.File
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
                (addNewLine(),
                addIndent(),
                addWordsWithoutLeadingSpace("-d ''"));
            return s;
          },
          requestSnippetGenerator_curl_powershell = e =>
            curlify(e, escapePowershell, '`\n', '.exe'),
          requestSnippetGenerator_curl_bash = e =>
            curlify(e, escapeShell, '\\\n'),
          requestSnippetGenerator_curl_cmd = e => curlify(e, escapeCMD, '^\n'),
          request_snippets_selectors_state = e => e || (0, I.Map)(),
          ft = (0, be.createSelector)(request_snippets_selectors_state, e => {
            const t = e.get('languages'),
              r = e.get('generators', (0, I.Map)());
            return !t || t.isEmpty() ? r : r.filter((e, r) => t.includes(r));
          }),
          getSnippetGenerators = e => t => {
            let { fn: r } = t;
            return ft(e)
              .map((e, t) => {
                const n = (e => r[`requestSnippetGenerator_${e}`])(t);
                return 'function' != typeof n ? null : e.set('fn', n);
              })
              .filter(e => e);
          },
          St = (0, be.createSelector)(request_snippets_selectors_state, e =>
            e.get('activeLanguage')
          ),
          Et = (0, be.createSelector)(request_snippets_selectors_state, e =>
            e.get('defaultExpanded')
          ),
          vt = require('react-copy-to-clipboard'),
          _t = require('react-syntax-highlighter/dist/esm/light');
        var wt = __webpack_require__.n(_t);
        const bt = require('react-syntax-highlighter/dist/esm/languages/hljs/javascript');
        var Ct = __webpack_require__.n(bt);
        const xt = require('react-syntax-highlighter/dist/esm/languages/hljs/json');
        var Ot = __webpack_require__.n(xt);
        const Nt = require('react-syntax-highlighter/dist/esm/languages/hljs/xml');
        var kt = __webpack_require__.n(Nt);
        const At = require('react-syntax-highlighter/dist/esm/languages/hljs/bash');
        var It = __webpack_require__.n(At);
        const qt = require('react-syntax-highlighter/dist/esm/languages/hljs/yaml');
        var jt = __webpack_require__.n(qt);
        const Pt = require('react-syntax-highlighter/dist/esm/languages/hljs/http');
        var Mt = __webpack_require__.n(Pt);
        const Rt = require('react-syntax-highlighter/dist/esm/languages/hljs/powershell');
        var Tt = __webpack_require__.n(Rt);
        const Jt = require('react-syntax-highlighter/dist/esm/styles/hljs/agate');
        var $t = __webpack_require__.n(Jt);
        const Vt = require('react-syntax-highlighter/dist/esm/styles/hljs/arta');
        var Kt = __webpack_require__.n(Vt);
        const Dt = require('react-syntax-highlighter/dist/esm/styles/hljs/monokai');
        var Lt = __webpack_require__.n(Dt);
        const Ut = require('react-syntax-highlighter/dist/esm/styles/hljs/nord');
        var zt = __webpack_require__.n(Ut);
        const Bt = require('react-syntax-highlighter/dist/esm/styles/hljs/obsidian');
        var Ft = __webpack_require__.n(Bt);
        const Wt = require('react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night');
        var Ht = __webpack_require__.n(Wt);
        const Xt = require('react-syntax-highlighter/dist/esm/styles/hljs/idea');
        var Gt = __webpack_require__.n(Xt);
        wt().registerLanguage('json', Ot()),
          wt().registerLanguage('js', Ct()),
          wt().registerLanguage('xml', kt()),
          wt().registerLanguage('yaml', jt()),
          wt().registerLanguage('http', Mt()),
          wt().registerLanguage('bash', It()),
          wt().registerLanguage('powershell', Tt()),
          wt().registerLanguage('javascript', Ct());
        const Yt = {
            agate: $t(),
            arta: Kt(),
            monokai: Lt(),
            nord: zt(),
            obsidian: Ft(),
            'tomorrow-night': Ht(),
            idea: Gt(),
          },
          Qt = Object.keys(Yt),
          getStyle = e =>
            Qt.includes(e)
              ? Yt[e]
              : (console.warn(
                  `Request style '${e}' is not available, returning default instead`
                ),
                $t()),
          Zt = {
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
          er = {
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
          },
          request_snippets = e => {
            let {
              request: t,
              requestSnippetsSelectors: r,
              getConfigs: n,
              getComponent: a,
            } = e;
            const s = ee()(n) ? n() : null,
              o =
                !1 !== Ge()(s, 'syntaxHighlight') &&
                Ge()(s, 'syntaxHighlight.activated', !0),
              l = (0, N.useRef)(null),
              c = a('ArrowUpIcon'),
              i = a('ArrowDownIcon'),
              [p, m] = (0, N.useState)(
                r.getSnippetGenerators()?.keySeq().first()
              ),
              [u, d] = (0, N.useState)(r?.getDefaultExpanded());
            (0, N.useEffect)(() => {}, []),
              (0, N.useEffect)(() => {
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
            const h = r.getSnippetGenerators(),
              g = h.get(p),
              y = g.get('fn')(t),
              handleSetIsExpanded = () => {
                d(!u);
              },
              handleGetBtnStyle = e => (e === p ? er : Zt),
              handlePreventYScrollingBeyondElement = e => {
                const { target: t, deltaY: r } = e,
                  { scrollHeight: n, offsetHeight: a, scrollTop: s } = t;
                n > a &&
                  ((0 === s && r < 0) || (a + s >= n && r > 0)) &&
                  e.preventDefault();
              },
              f = o
                ? k().createElement(
                    wt(),
                    {
                      language: g.get('syntax'),
                      className: 'curl microlight',
                      style: getStyle(Ge()(s, 'syntaxHighlight.theme')),
                    },
                    y
                  )
                : k().createElement('textarea', {
                    readOnly: !0,
                    className: 'curl',
                    value: y,
                  });
            return k().createElement(
              'div',
              { className: 'request-snippets', ref: l },
              k().createElement(
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
                k().createElement(
                  'h4',
                  {
                    onClick: () => handleSetIsExpanded(),
                    style: { cursor: 'pointer' },
                  },
                  'Snippets'
                ),
                k().createElement(
                  'button',
                  {
                    onClick: () => handleSetIsExpanded(),
                    style: { border: 'none', background: 'none' },
                    title: u ? 'Collapse operation' : 'Expand operation',
                  },
                  u
                    ? k().createElement(i, {
                        className: 'arrow',
                        width: '10',
                        height: '10',
                      })
                    : k().createElement(c, {
                        className: 'arrow',
                        width: '10',
                        height: '10',
                      })
                )
              ),
              u &&
                k().createElement(
                  'div',
                  { className: 'curl-command' },
                  k().createElement(
                    'div',
                    {
                      style: {
                        paddingLeft: '15px',
                        paddingRight: '10px',
                        width: '100%',
                        display: 'flex',
                      },
                    },
                    h.entrySeq().map(e => {
                      let [t, r] = e;
                      return k().createElement(
                        'div',
                        {
                          style: handleGetBtnStyle(t),
                          className: 'btn',
                          key: t,
                          onClick: () =>
                            (e => {
                              p !== e && m(e);
                            })(t),
                        },
                        k().createElement(
                          'h4',
                          { style: t === p ? { color: 'white' } : {} },
                          r.get('title')
                        )
                      );
                    })
                  ),
                  k().createElement(
                    'div',
                    { className: 'copy-to-clipboard' },
                    k().createElement(
                      vt.CopyToClipboard,
                      { text: y },
                      k().createElement('button', null)
                    )
                  ),
                  k().createElement('div', null, f)
                )
            );
          },
          plugins_request_snippets = () => ({
            components: { RequestSnippets: request_snippets },
            fn: d,
            statePlugins: { requestSnippets: { selectors: h } },
          }),
          tr = require('xml');
        var rr = __webpack_require__.n(tr);
        const nr = require('randexp');
        var ar = __webpack_require__.n(nr);
        const sr = require('lodash/isEmpty');
        var or = __webpack_require__.n(sr);
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
            return (
              -1 !== Array.from(this.keys()).findIndex(shallowArrayEquals(e))
            );
          }
        }
        const utils_memoizeN = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : list;
            const { Cache: r } = F();
            F().Cache = Cache;
            const n = F()(e, t);
            return (F().Cache = r), n;
          },
          lr = {
            string: e =>
              e.pattern
                ? (e => {
                    try {
                      return new (ar())(e).gen();
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
              n = lr[`${t}_${r}`] || lr[t];
            return isFunc(n) ? n(e) : 'Unknown Type: ' + e.type;
          },
          sanitizeRef = e =>
            deeplyStripKey(
              e,
              '$$ref',
              e => 'string' == typeof e && e.indexOf('#') > -1
            ),
          cr = ['maxProperties', 'minProperties'],
          ir = ['minItems', 'maxItems'],
          pr = ['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum'],
          mr = ['minLength', 'maxLength'],
          liftSampleHelper = function (e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (
              ([
                'example',
                'default',
                'enum',
                'xml',
                'type',
                ...cr,
                ...ir,
                ...pr,
                ...mr,
              ].forEach(r =>
                (r => {
                  void 0 === t[r] && void 0 !== e[r] && (t[r] = e[r]);
                })(r)
              ),
              void 0 !== e.required &&
                Array.isArray(e.required) &&
                ((void 0 !== t.required && t.required.length) ||
                  (t.required = []),
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
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : void 0,
              n =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            e && isFunc(e.toJS) && (e = e.toJS());
            let a =
              void 0 !== r ||
              (e && void 0 !== e.example) ||
              (e && void 0 !== e.default);
            const s = !a && e && e.oneOf && e.oneOf.length > 0,
              o = !a && e && e.anyOf && e.anyOf.length > 0;
            if (!a && (s || o)) {
              const r = objectify(s ? e.oneOf[0] : e.anyOf[0]);
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
                        (e.required
                          ? e.required.push(a)
                          : (e.required = [a]))));
              }
            }
            const l = {};
            let {
                xml: c,
                type: i,
                example: p,
                properties: m,
                additionalProperties: u,
                items: d,
              } = e || {},
              { includeReadOnly: h, includeWriteOnly: g } = t;
            c = c || {};
            let y,
              { name: f, prefix: S, namespace: E } = c,
              v = {};
            if (
              n &&
              ((f = f || 'notagname'), (y = (S ? S + ':' : '') + f), E)
            ) {
              l[S ? 'xmlns:' + S : 'xmlns'] = E;
            }
            n && (v[y] = []);
            const schemaHasAny = t =>
              t.some(t => Object.prototype.hasOwnProperty.call(e, t));
            e &&
              !i &&
              (m || u || schemaHasAny(cr)
                ? (i = 'object')
                : d || schemaHasAny(ir)
                ? (i = 'array')
                : schemaHasAny(pr)
                ? ((i = 'number'), (e.type = 'number'))
                : a || e.enum || ((i = 'string'), (e.type = 'string')));
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
              _ = objectify(m);
            let w,
              b = 0;
            const hasExceededMaxProperties = () =>
                e &&
                null !== e.maxProperties &&
                void 0 !== e.maxProperties &&
                b >= e.maxProperties,
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
                      b -
                      (() => {
                        if (!e || !e.required) return 0;
                        let t = 0;
                        return (
                          n
                            ? e.required.forEach(
                                e => (t += void 0 === v[e] ? 0 : 1)
                              )
                            : e.required.forEach(
                                e =>
                                  (t +=
                                    void 0 === v[y]?.find(t => void 0 !== t[e])
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
                    if (e && _[r]) {
                      if (((_[r].xml = _[r].xml || {}), _[r].xml.attribute)) {
                        const e = Array.isArray(_[r].enum)
                            ? _[r].enum[0]
                            : void 0,
                          t = _[r].example,
                          n = _[r].default;
                        return void (l[_[r].xml.name || r] =
                          void 0 !== t
                            ? t
                            : void 0 !== n
                            ? n
                            : void 0 !== e
                            ? e
                            : primitive(_[r]));
                      }
                      _[r].xml.name = _[r].xml.name || r;
                    } else _[r] || !1 === u || (_[r] = { xml: { name: r } });
                    let s = sampleFromSchemaGeneric(
                      (e && _[r]) || void 0,
                      t,
                      a,
                      n
                    );
                    canAddProperty(r) &&
                      (b++,
                      Array.isArray(s)
                        ? (v[y] = v[y].concat(s))
                        : v[y].push(s));
                  }
                : (r, a) => {
                    if (canAddProperty(r)) {
                      if (
                        Object.prototype.hasOwnProperty.call(
                          e,
                          'discriminator'
                        ) &&
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
                          if (
                            -1 !== e.$$ref.search(e.discriminator.mapping[t])
                          ) {
                            v[r] = t;
                            break;
                          }
                      } else v[r] = sampleFromSchemaGeneric(_[r], t, a, n);
                      b++;
                    }
                  }),
              a)
            ) {
              let a;
              if (
                ((a = sanitizeRef(
                  void 0 !== r ? r : void 0 !== p ? p : e.default
                )),
                !n)
              ) {
                if ('number' == typeof a && 'string' === i) return `${a}`;
                if ('string' != typeof a || 'string' === i) return a;
                try {
                  return JSON.parse(a);
                } catch (e) {
                  return a;
                }
              }
              if (
                (e || (i = Array.isArray(a) ? 'array' : typeof a),
                'array' === i)
              ) {
                if (!Array.isArray(a)) {
                  if ('string' == typeof a) return a;
                  a = [a];
                }
                const r = e ? e.items : void 0;
                r &&
                  ((r.xml = r.xml || c || {}),
                  (r.xml.name = r.xml.name || c.name));
                let s = a.map(e => sampleFromSchemaGeneric(r, t, e, n));
                return (
                  (s = handleMinMaxItems(s)),
                  c.wrapped
                    ? ((v[y] = s), or()(l) || v[y].push({ _attr: l }))
                    : (v = s),
                  v
                );
              }
              if ('object' === i) {
                if ('string' == typeof a) return a;
                for (let t in a)
                  Object.prototype.hasOwnProperty.call(a, t) &&
                    ((e && _[t] && _[t].readOnly && !h) ||
                      (e && _[t] && _[t].writeOnly && !g) ||
                      (e && _[t] && _[t].xml && _[t].xml.attribute
                        ? (l[_[t].xml.name || t] = a[t])
                        : w(t, a[t])));
                return or()(l) || v[y].push({ _attr: l }), v;
              }
              return (v[y] = or()(l) ? a : [{ _attr: l }, a]), v;
            }
            if ('object' === i) {
              for (let e in _)
                Object.prototype.hasOwnProperty.call(_, e) &&
                  ((_[e] && _[e].deprecated) ||
                    (_[e] && _[e].readOnly && !h) ||
                    (_[e] && _[e].writeOnly && !g) ||
                    w(e));
              if (
                (n && l && v[y].push({ _attr: l }), hasExceededMaxProperties())
              )
                return v;
              if (!0 === u)
                n
                  ? v[y].push({ additionalProp: 'Anything can be here' })
                  : (v.additionalProp1 = {}),
                  b++;
              else if (u) {
                const r = objectify(u),
                  a = sampleFromSchemaGeneric(r, t, void 0, n);
                if (n && r.xml && r.xml.name && 'notagname' !== r.xml.name)
                  v[y].push(a);
                else {
                  const t =
                    null !== e.minProperties &&
                    void 0 !== e.minProperties &&
                    b < e.minProperties
                      ? e.minProperties - b
                      : 3;
                  for (let e = 1; e <= t; e++) {
                    if (hasExceededMaxProperties()) return v;
                    if (n) {
                      const t = {};
                      (t['additionalProp' + e] = a.notagname), v[y].push(t);
                    } else v['additionalProp' + e] = a;
                    b++;
                  }
                }
              }
              return v;
            }
            if ('array' === i) {
              if (!d) return;
              let r;
              if (
                (n &&
                  ((d.xml = d.xml || e?.xml || {}),
                  (d.xml.name = d.xml.name || c.name)),
                Array.isArray(d.anyOf))
              )
                r = d.anyOf.map(e =>
                  sampleFromSchemaGeneric(
                    liftSampleHelper(d, e, t),
                    t,
                    void 0,
                    n
                  )
                );
              else if (Array.isArray(d.oneOf))
                r = d.oneOf.map(e =>
                  sampleFromSchemaGeneric(
                    liftSampleHelper(d, e, t),
                    t,
                    void 0,
                    n
                  )
                );
              else {
                if (!(!n || (n && c.wrapped)))
                  return sampleFromSchemaGeneric(d, t, void 0, n);
                r = [sampleFromSchemaGeneric(d, t, void 0, n)];
              }
              return (
                (r = handleMinMaxItems(r)),
                n && c.wrapped
                  ? ((v[y] = r), or()(l) || v[y].push({ _attr: l }), v)
                  : r
              );
            }
            let C;
            if (e && Array.isArray(e.enum)) C = normalizeArray(e.enum)[0];
            else {
              if (!e) return;
              if (((C = primitive(e)), 'number' == typeof C)) {
                let t = e.minimum;
                null != t && (e.exclusiveMinimum && t++, (C = t));
                let r = e.maximum;
                null != r && (e.exclusiveMaximum && r--, (C = r));
              }
              if (
                'string' == typeof C &&
                (null !== e.maxLength &&
                  void 0 !== e.maxLength &&
                  (C = C.slice(0, e.maxLength)),
                null !== e.minLength && void 0 !== e.minLength)
              ) {
                let t = 0;
                for (; C.length < e.minLength; ) C += C[t++ % C.length];
              }
            }
            if ('file' !== i)
              return n ? ((v[y] = or()(l) ? C : [{ _attr: l }, C]), v) : C;
          },
          inferSchema = e => (
            e.schema && (e = e.schema), e.properties && (e.type = 'object'), e
          ),
          createXMLExample = (e, t, r) => {
            const n = sampleFromSchemaGeneric(e, t, r, !0);
            if (n)
              return 'string' == typeof n
                ? n
                : rr()(n, { declaration: !0, indent: '\t' });
          },
          sampleFromSchema = (e, t, r) => sampleFromSchemaGeneric(e, t, r, !1),
          resolver = (e, t, r) => [e, JSON.stringify(t), JSON.stringify(r)],
          ur = utils_memoizeN(createXMLExample, resolver),
          dr = utils_memoizeN(sampleFromSchema, resolver),
          hr = [{ when: /json/, shouldStringifyTypes: ['string'] }],
          gr = ['object'],
          get_json_sample_schema = e => (t, r, n, a) => {
            const { fn: s } = e(),
              o = s.memoizedSampleFromSchema(t, r, a),
              l = typeof o,
              c = hr.reduce(
                (e, t) =>
                  t.when.test(n) ? [...e, ...t.shouldStringifyTypes] : e,
                gr
              );
            return G()(c, e => e === l) ? JSON.stringify(o, null, 2) : o;
          },
          get_yaml_sample_schema = e => (t, r, n, a) => {
            const { fn: s } = e(),
              o = s.getJsonSampleSchema(t, r, n, a);
            let l;
            try {
              (l = Re().dump(
                Re().load(o),
                { lineWidth: -1 },
                { schema: Me.JSON_SCHEMA }
              )),
                '\n' === l[l.length - 1] && (l = l.slice(0, l.length - 1));
            } catch (e) {
              return console.error(e), 'error: could not generate yaml example';
            }
            return l.replace(/\t/g, '  ');
          },
          get_xml_sample_schema = e => (t, r, n) => {
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
          },
          get_sample_schema = e =>
            function (t) {
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : '',
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : void 0;
              const { fn: s } = e();
              return (
                'function' == typeof t?.toJS && (t = t.toJS()),
                'function' == typeof a?.toJS && (a = a.toJS()),
                /xml/.test(r)
                  ? s.getXmlSampleSchema(t, n, a)
                  : /(yaml|yml)/.test(r)
                  ? s.getYamlSampleSchema(t, n, r, a)
                  : s.getJsonSampleSchema(t, n, r, a)
              );
            },
          json_schema_5_samples = e => {
            let { getSystem: t } = e;
            const r = get_json_sample_schema(t),
              n = get_yaml_sample_schema(t),
              a = get_xml_sample_schema(t),
              s = get_sample_schema(t);
            return {
              fn: {
                jsonSchema5: {
                  inferSchema,
                  sampleFromSchema,
                  sampleFromSchemaGeneric,
                  createXMLExample,
                  memoizedSampleFromSchema: dr,
                  memoizedCreateXMLExample: ur,
                  getJsonSampleSchema: r,
                  getYamlSampleSchema: n,
                  getXmlSampleSchema: a,
                  getSampleSchema: s,
                },
                inferSchema,
                sampleFromSchema,
                sampleFromSchemaGeneric,
                createXMLExample,
                memoizedSampleFromSchema: dr,
                memoizedCreateXMLExample: ur,
                getJsonSampleSchema: r,
                getYamlSampleSchema: n,
                getXmlSampleSchema: a,
                getSampleSchema: s,
              },
            };
          },
          yr = [
            'get',
            'put',
            'post',
            'delete',
            'options',
            'head',
            'patch',
            'trace',
          ],
          spec_selectors_state = e => e || (0, I.Map)(),
          fr = (0, be.createSelector)(spec_selectors_state, e =>
            e.get('lastError')
          ),
          Sr = (0, be.createSelector)(spec_selectors_state, e => e.get('url')),
          Er = (0, be.createSelector)(
            spec_selectors_state,
            e => e.get('spec') || ''
          ),
          vr = (0, be.createSelector)(
            spec_selectors_state,
            e => e.get('specSource') || 'not-editor'
          ),
          _r = (0, be.createSelector)(spec_selectors_state, e =>
            e.get('json', (0, I.Map)())
          ),
          wr = (0, be.createSelector)(_r, e => e.toJS()),
          br = (0, be.createSelector)(spec_selectors_state, e =>
            e.get('resolved', (0, I.Map)())
          ),
          specResolvedSubtree = (e, t) =>
            e.getIn(['resolvedSubtrees', ...t], void 0),
          mergerFn = (e, t) =>
            I.Map.isMap(e) && I.Map.isMap(t)
              ? t.get('$$ref')
                ? t
                : (0, I.OrderedMap)().mergeWith(mergerFn, e, t)
              : t,
          Cr = (0, be.createSelector)(spec_selectors_state, e =>
            (0, I.OrderedMap)().mergeWith(
              mergerFn,
              e.get('json'),
              e.get('resolvedSubtrees')
            )
          ),
          spec = e => _r(e),
          xr = (0, be.createSelector)(spec, () => !1),
          Or = (0, be.createSelector)(spec, e =>
            returnSelfOrNewMap(e && e.get('info'))
          ),
          Nr = (0, be.createSelector)(spec, e =>
            returnSelfOrNewMap(e && e.get('externalDocs'))
          ),
          kr = (0, be.createSelector)(Or, e => e && e.get('version')),
          Ar = (0, be.createSelector)(kr, e =>
            /v?([0-9]*)\.([0-9]*)\.([0-9]*)/i.exec(e).slice(1)
          ),
          Ir = (0, be.createSelector)(Cr, e => e.get('paths')),
          qr = (0, be.createSelector)(() => [
            'get',
            'put',
            'post',
            'delete',
            'options',
            'head',
            'patch',
          ]),
          jr = (0, be.createSelector)(Ir, e => {
            if (!e || e.size < 1) return (0, I.List)();
            let t = (0, I.List)();
            return e && e.forEach
              ? (e.forEach((e, r) => {
                  if (!e || !e.forEach) return {};
                  e.forEach((e, n) => {
                    yr.indexOf(n) < 0 ||
                      (t = t.push(
                        (0, I.fromJS)({
                          path: r,
                          method: n,
                          operation: e,
                          id: `${n}-${r}`,
                        })
                      ));
                  });
                }),
                t)
              : (0, I.List)();
          }),
          Pr = (0, be.createSelector)(spec, e => (0, I.Set)(e.get('consumes'))),
          Mr = (0, be.createSelector)(spec, e => (0, I.Set)(e.get('produces'))),
          Rr = (0, be.createSelector)(spec, e =>
            e.get('security', (0, I.List)())
          ),
          Tr = (0, be.createSelector)(spec, e => e.get('securityDefinitions')),
          findDefinition = (e, t) => {
            const r = e.getIn(['resolvedSubtrees', 'definitions', t], null),
              n = e.getIn(['json', 'definitions', t], null);
            return r || n || null;
          },
          Jr = (0, be.createSelector)(spec, e => {
            const t = e.get('definitions');
            return I.Map.isMap(t) ? t : (0, I.Map)();
          }),
          $r = (0, be.createSelector)(spec, e => e.get('basePath')),
          Vr = (0, be.createSelector)(spec, e => e.get('host')),
          Kr = (0, be.createSelector)(spec, e =>
            e.get('schemes', (0, I.Map)())
          ),
          Dr = (0, be.createSelector)(jr, Pr, Mr, (e, t, r) =>
            e.map(e =>
              e.update('operation', e => {
                if (e) {
                  if (!I.Map.isMap(e)) return;
                  return e.withMutations(
                    e => (
                      e.get('consumes') ||
                        e.update('consumes', e => (0, I.Set)(e).merge(t)),
                      e.get('produces') ||
                        e.update('produces', e => (0, I.Set)(e).merge(r)),
                      e
                    )
                  );
                }
                return (0, I.Map)();
              })
            )
          ),
          Lr = (0, be.createSelector)(spec, e => {
            const t = e.get('tags', (0, I.List)());
            return I.List.isList(t)
              ? t.filter(e => I.Map.isMap(e))
              : (0, I.List)();
          }),
          tagDetails = (e, t) =>
            (Lr(e) || (0, I.List)())
              .filter(I.Map.isMap)
              .find(e => e.get('name') === t, (0, I.Map)()),
          Ur = (0, be.createSelector)(Dr, Lr, (e, t) =>
            e.reduce(
              (e, t) => {
                let r = (0, I.Set)(t.getIn(['operation', 'tags']));
                return r.count() < 1
                  ? e.update('default', (0, I.List)(), e => e.push(t))
                  : r.reduce(
                      (e, r) => e.update(r, (0, I.List)(), e => e.push(t)),
                      e
                    );
              },
              t.reduce(
                (e, t) => e.set(t.get('name'), (0, I.List)()),
                (0, I.OrderedMap)()
              )
            )
          ),
          selectors_taggedOperations = e => t => {
            let { getConfigs: r } = t,
              { tagsSorter: n, operationsSorter: a } = r();
            return Ur(e)
              .sortBy(
                (e, t) => t,
                (e, t) => {
                  let r = 'function' == typeof n ? n : me.tagsSorter[n];
                  return r ? r(e, t) : null;
                }
              )
              .map((t, r) => {
                let n = 'function' == typeof a ? a : me.operationsSorter[a],
                  s = n ? t.sort(n) : t;
                return (0, I.Map)({
                  tagDetails: tagDetails(e, r),
                  operations: s,
                });
              });
          },
          zr = (0, be.createSelector)(spec_selectors_state, e =>
            e.get('responses', (0, I.Map)())
          ),
          Br = (0, be.createSelector)(spec_selectors_state, e =>
            e.get('requests', (0, I.Map)())
          ),
          Fr = (0, be.createSelector)(spec_selectors_state, e =>
            e.get('mutatedRequests', (0, I.Map)())
          ),
          responseFor = (e, t, r) => zr(e).getIn([t, r], null),
          requestFor = (e, t, r) => Br(e).getIn([t, r], null),
          mutatedRequestFor = (e, t, r) => Fr(e).getIn([t, r], null),
          allowTryItOutFor = () => !0,
          parameterWithMetaByIdentity = (e, t, r) => {
            const n = Cr(e).getIn(
                ['paths', ...t, 'parameters'],
                (0, I.OrderedMap)()
              ),
              a = e.getIn(
                ['meta', 'paths', ...t, 'parameters'],
                (0, I.OrderedMap)()
              );
            return n
              .map(e => {
                const t = a.get(`${r.get('in')}.${r.get('name')}`),
                  n = a.get(
                    `${r.get('in')}.${r.get('name')}.hash-${r.hashCode()}`
                  );
                return (0, I.OrderedMap)().merge(e, t, n);
              })
              .find(
                e =>
                  e.get('in') === r.get('in') &&
                  e.get('name') === r.get('name'),
                (0, I.OrderedMap)()
              );
          },
          parameterInclusionSettingFor = (e, t, r, n) => {
            const a = `${n}.${r}`;
            return e.getIn(
              ['meta', 'paths', ...t, 'parameter_inclusions', a],
              !1
            );
          },
          parameterWithMeta = (e, t, r, n) => {
            const a = Cr(e)
              .getIn(['paths', ...t, 'parameters'], (0, I.OrderedMap)())
              .find(
                e => e.get('in') === n && e.get('name') === r,
                (0, I.OrderedMap)()
              );
            return parameterWithMetaByIdentity(e, t, a);
          },
          operationWithMeta = (e, t, r) => {
            const n = Cr(e).getIn(['paths', t, r], (0, I.OrderedMap)()),
              a = e.getIn(['meta', 'paths', t, r], (0, I.OrderedMap)()),
              s = n
                .get('parameters', (0, I.List)())
                .map(n => parameterWithMetaByIdentity(e, [t, r], n));
            return (0, I.OrderedMap)().merge(n, a).set('parameters', s);
          };
        function getParameter(e, t, r, n) {
          return (
            (t = t || []),
            e
              .getIn(['meta', 'paths', ...t, 'parameters'], (0, I.fromJS)([]))
              .find(
                e => I.Map.isMap(e) && e.get('name') === r && e.get('in') === n
              ) || (0, I.Map)()
          );
        }
        const Wr = (0, be.createSelector)(spec, e => {
          const t = e.get('host');
          return 'string' == typeof t && t.length > 0 && '/' !== t[0];
        });
        function parameterValues(e, t, r) {
          return (
            (t = t || []),
            operationWithMeta(e, ...t)
              .get('parameters', (0, I.List)())
              .reduce((e, t) => {
                let n =
                  r && 'body' === t.get('in')
                    ? t.get('value_xml')
                    : t.get('value');
                return e.set(paramToIdentifier(t, { allowHashes: !1 }), n);
              }, (0, I.fromJS)({}))
          );
        }
        function parametersIncludeIn(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          if (I.List.isList(e))
            return e.some(e => I.Map.isMap(e) && e.get('in') === t);
        }
        function parametersIncludeType(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          if (I.List.isList(e))
            return e.some(e => I.Map.isMap(e) && e.get('type') === t);
        }
        function contentTypeValues(e, t) {
          t = t || [];
          let r = Cr(e).getIn(['paths', ...t], (0, I.fromJS)({})),
            n = e.getIn(['meta', 'paths', ...t], (0, I.fromJS)({})),
            a = currentProducesFor(e, t);
          const s = r.get('parameters') || new I.List(),
            o = n.get('consumes_value')
              ? n.get('consumes_value')
              : parametersIncludeType(s, 'file')
              ? 'multipart/form-data'
              : parametersIncludeType(s, 'formData')
              ? 'application/x-www-form-urlencoded'
              : void 0;
          return (0, I.fromJS)({
            requestContentType: o,
            responseContentType: a,
          });
        }
        function currentProducesFor(e, t) {
          t = t || [];
          const r = Cr(e).getIn(['paths', ...t], null);
          if (null === r) return;
          const n = e.getIn(['meta', 'paths', ...t, 'produces_value'], null),
            a = r.getIn(['produces', 0], null);
          return n || a || 'application/json';
        }
        function producesOptionsFor(e, t) {
          t = t || [];
          const r = Cr(e),
            n = r.getIn(['paths', ...t], null);
          if (null === n) return;
          const [a] = t,
            s = n.get('produces', null),
            o = r.getIn(['paths', a, 'produces'], null),
            l = r.getIn(['produces'], null);
          return s || o || l;
        }
        function consumesOptionsFor(e, t) {
          t = t || [];
          const r = Cr(e),
            n = r.getIn(['paths', ...t], null);
          if (null === n) return;
          const [a] = t,
            s = n.get('consumes', null),
            o = r.getIn(['paths', a, 'consumes'], null),
            l = r.getIn(['consumes'], null);
          return s || o || l;
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
              (0, I.fromJS)([])
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
                (0, I.fromJS)([])
              );
            return (
              n.size < 1 ||
                (n.getIn(['required']) &&
                  (r.requestBody = n.getIn(['required'])),
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
              (0, I.fromJS)([])
            );
            if (a.size < 2 || !r || !n) return !1;
            let s = a.getIn([r, 'schema', 'properties'], (0, I.fromJS)([])),
              o = a.getIn([n, 'schema', 'properties'], (0, I.fromJS)([]));
            return !!s.equals(o);
          };
        function returnSelfOrNewMap(e) {
          return I.Map.isMap(e) ? e : new I.Map();
        }
        const Hr = require('lodash/isString');
        var Xr = __webpack_require__.n(Hr);
        const Gr = require('lodash/debounce');
        var Yr = __webpack_require__.n(Gr);
        const Qr = require('lodash/set');
        var Zr = __webpack_require__.n(Qr);
        const en = require('lodash/fp/assocPath');
        var tn = __webpack_require__.n(en);
        const rn = require('lodash/constant');
        var nn = __webpack_require__.n(rn);
        const an = 'spec_update_spec',
          sn = 'spec_update_url',
          on = 'spec_update_json',
          ln = 'spec_update_param',
          cn = 'spec_update_empty_param_inclusion',
          pn = 'spec_validate_param',
          mn = 'spec_set_response',
          un = 'spec_set_request',
          dn = 'spec_set_mutated_request',
          hn = 'spec_log_request',
          gn = 'spec_clear_response',
          yn = 'spec_clear_request',
          fn = 'spec_clear_validate_param',
          Sn = 'spec_update_operation_meta_value',
          En = 'spec_update_resolved',
          vn = 'spec_update_resolved_subtree',
          _n = 'set_scheme',
          toStr = e => (Xr()(e) ? e : '');
        function updateSpec(e) {
          const t = toStr(e).replace(/\t/g, '  ');
          if ('string' == typeof e) return { type: an, payload: t };
        }
        function updateResolved(e) {
          return { type: En, payload: e };
        }
        function updateUrl(e) {
          return { type: sn, payload: e };
        }
        function updateJsonSpec(e) {
          return { type: on, payload: e };
        }
        const parseToJson = e => t => {
          let { specActions: r, specSelectors: n, errActions: a } = t,
            { specStr: s } = n,
            o = null;
          try {
            (e = e || s()),
              a.clear({ source: 'parser' }),
              (o = Re().load(e, { schema: Me.JSON_SCHEMA }));
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
          return o && 'object' == typeof o ? r.updateJsonSpec(o) : {};
        };
        let wn = !1;
        const resolveSpec = (e, t) => r => {
          let {
            specActions: n,
            specSelectors: a,
            errActions: s,
            fn: { fetch: o, resolve: l, AST: c = {} },
            getConfigs: i,
          } = r;
          wn ||
            (console.warn(
              'specActions.resolveSpec is deprecated since v3.10.0 and will be removed in v4.0.0; use requestResolvedSubtree instead!'
            ),
            (wn = !0));
          const {
            modelPropertyMacro: p,
            parameterMacro: m,
            requestInterceptor: u,
            responseInterceptor: d,
          } = i();
          void 0 === e && (e = a.specJson()), void 0 === t && (t = a.url());
          let h = c.getLineNumberForPath ? c.getLineNumberForPath : () => {},
            g = a.specStr();
          return l({
            fetch: o,
            spec: e,
            baseDoc: String(new URL(t, document.baseURI)),
            modelPropertyMacro: p,
            parameterMacro: m,
            requestInterceptor: u,
            responseInterceptor: d,
          }).then(e => {
            let { spec: t, errors: r } = e;
            if (
              (s.clear({ type: 'thrown' }), Array.isArray(r) && r.length > 0)
            ) {
              let e = r.map(
                e => (
                  console.error(e),
                  (e.line = e.fullPath ? h(g, e.fullPath) : null),
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
              s.newThrownErrBatch(e);
            }
            return n.updateResolved(t);
          });
        };
        let bn = [];
        const Cn = Yr()(() => {
            const e = bn.reduce((e, t) => {
              let { path: r, system: n } = t;
              return e.has(n) || e.set(n, []), e.get(n).push(r), e;
            }, new Map());
            (bn = []),
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
                    fn: { resolveSubtree: a, fetch: s, AST: o = {} },
                    specSelectors: l,
                    specActions: c,
                  } = t,
                  i = o.getLineNumberForPath ?? nn()(void 0),
                  p = l.specStr(),
                  {
                    modelPropertyMacro: m,
                    parameterMacro: u,
                    requestInterceptor: d,
                    responseInterceptor: h,
                  } = t.getConfigs();
                try {
                  const t = await e.reduce(async (e, t) => {
                    let { resultMap: o, specWithCurrentSubtrees: c } = await e;
                    const { errors: g, spec: y } = await a(c, t, {
                      baseDoc: String(new URL(l.url(), document.baseURI)),
                      modelPropertyMacro: m,
                      parameterMacro: u,
                      requestInterceptor: d,
                      responseInterceptor: h,
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
                      Array.isArray(g) && g.length > 0)
                    ) {
                      let e = g.map(
                        e => (
                          (e.line = e.fullPath ? i(p, e.fullPath) : null),
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
                      y &&
                        l.isOAS3() &&
                        'components' === t[0] &&
                        'securitySchemes' === t[1] &&
                        (await Promise.all(
                          Object.values(y)
                            .filter(e => 'openIdConnect' === e.type)
                            .map(async e => {
                              const t = {
                                url: e.openIdConnectUrl,
                                requestInterceptor: d,
                                responseInterceptor: h,
                              };
                              try {
                                const r = await s(t);
                                r instanceof Error || r.status >= 400
                                  ? console.error(r.statusText + ' ' + t.url)
                                  : (e.openIdConnectData = JSON.parse(r.text));
                              } catch (e) {
                                console.error(e);
                              }
                            })
                        )),
                      Zr()(o, t, y),
                      (c = tn()(t, y, c)),
                      { resultMap: o, specWithCurrentSubtrees: c }
                    );
                  }, Promise.resolve({ resultMap: (l.specResolvedSubtree([]) || (0, I.Map)()).toJS(), specWithCurrentSubtrees: l.specJS() }));
                  c.updateResolvedSubtree([], t.resultMap);
                } catch (e) {
                  console.error(e);
                }
              });
          }, 35),
          requestResolvedSubtree = e => t => {
            bn.find(r => {
              let { path: n, system: a } = r;
              return a === t && n.toString() === e.toString();
            }) || (bn.push({ path: e, system: t }), Cn());
          };
        function changeParam(e, t, r, n, a) {
          return {
            type: ln,
            payload: { path: e, value: n, paramName: t, paramIn: r, isXml: a },
          };
        }
        function changeParamByIdentity(e, t, r, n) {
          return {
            type: ln,
            payload: { path: e, param: t, value: r, isXml: n },
          };
        }
        const updateResolvedSubtree = (e, t) => ({
            type: vn,
            payload: { path: e, value: t },
          }),
          invalidateResolvedSubtreeCache = () => ({
            type: vn,
            payload: { path: [], value: (0, I.Map)() },
          }),
          validateParams = (e, t) => ({
            type: pn,
            payload: { pathMethod: e, isOAS3: t },
          }),
          updateEmptyParamInclusion = (e, t, r, n) => ({
            type: cn,
            payload: {
              pathMethod: e,
              paramName: t,
              paramIn: r,
              includeEmptyValue: n,
            },
          });
        function clearValidateParams(e) {
          return { type: fn, payload: { pathMethod: e } };
        }
        function changeConsumesValue(e, t) {
          return {
            type: Sn,
            payload: { path: e, value: t, key: 'consumes_value' },
          };
        }
        function changeProducesValue(e, t) {
          return {
            type: Sn,
            payload: { path: e, value: t, key: 'produces_value' },
          };
        }
        const setResponse = (e, t, r) => ({
            payload: { path: e, method: t, res: r },
            type: mn,
          }),
          setRequest = (e, t, r) => ({
            payload: { path: e, method: t, req: r },
            type: un,
          }),
          setMutatedRequest = (e, t, r) => ({
            payload: { path: e, method: t, req: r },
            type: dn,
          }),
          logRequest = e => ({ payload: e, type: hn }),
          executeRequest = e => t => {
            let {
                fn: r,
                specActions: n,
                specSelectors: a,
                getConfigs: s,
                oas3Selectors: o,
              } = t,
              { pathName: l, method: c, operation: i } = e,
              { requestInterceptor: p, responseInterceptor: m } = s(),
              u = i.toJS();
            if (
              (i &&
                i.get('parameters') &&
                i
                  .get('parameters')
                  .filter(e => e && !0 === e.get('allowEmptyValue'))
                  .forEach(t => {
                    if (
                      a.parameterInclusionSettingFor(
                        [l, c],
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
              (e.contextUrl = de()(a.url()).toString()),
              u && u.operationId
                ? (e.operationId = u.operationId)
                : u && l && c && (e.operationId = r.opId(u, l, c)),
              a.isOAS3())
            ) {
              const t = `${l}:${c}`;
              e.server = o.selectedServer(t) || o.selectedServer();
              const r = o
                  .serverVariables({ server: e.server, namespace: t })
                  .toJS(),
                n = o.serverVariables({ server: e.server }).toJS();
              (e.serverVariables = Object.keys(r).length ? r : n),
                (e.requestContentType = o.requestContentType(l, c)),
                (e.responseContentType = o.responseContentType(l, c) || '*/*');
              const a = o.requestBodyValue(l, c),
                s = o.requestBodyInclusionSetting(l, c);
              a && a.toJS
                ? (e.requestBody = a
                    .map(e => (I.Map.isMap(e) ? e.get('value') : e))
                    .filter(
                      (e, t) =>
                        (Array.isArray(e)
                          ? 0 !== e.length
                          : !isEmptyValue(e)) || s.get(t)
                    )
                    .toJS())
                : (e.requestBody = a);
            }
            let d = Object.assign({}, e);
            (d = r.buildRequest(d)), n.setRequest(e.pathName, e.method, d);
            (e.requestInterceptor = async t => {
              let r = await p.apply(void 0, [t]),
                a = Object.assign({}, r);
              return n.setMutatedRequest(e.pathName, e.method, a), r;
            }),
              (e.responseInterceptor = m);
            const h = Date.now();
            return r
              .execute(e)
              .then(t => {
                (t.duration = Date.now() - h),
                  n.setResponse(e.pathName, e.method, t);
              })
              .catch(t => {
                'Failed to fetch' === t.message &&
                  ((t.name = ''),
                  (t.message =
                    '**Failed to fetch.**  \n**Possible Reasons:** \n  - CORS \n  - Network Failure \n  - URL scheme must be "http" or "https" for CORS request.')),
                  n.setResponse(e.pathName, e.method, {
                    error: !0,
                    err: (0, P.serializeError)(t),
                  });
              });
          },
          actions_execute = function () {
            let {
              path: e,
              method: t,
              ...r
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            return n => {
              let {
                  fn: { fetch: a },
                  specSelectors: s,
                  specActions: o,
                } = n,
                l = s.specJsonWithResolvedSubtrees().toJS(),
                c = s.operationScheme(e, t),
                { requestContentType: i, responseContentType: p } = s
                  .contentTypeValues([e, t])
                  .toJS(),
                m = /xml/i.test(i),
                u = s.parameterValues([e, t], m).toJS();
              return o.executeRequest({
                ...r,
                fetch: a,
                spec: l,
                pathName: e,
                method: t,
                parameters: u,
                requestContentType: i,
                scheme: c,
                responseContentType: p,
              });
            };
          };
        function clearResponse(e, t) {
          return { type: gn, payload: { path: e, method: t } };
        }
        function clearRequest(e, t) {
          return { type: yn, payload: { path: e, method: t } };
        }
        function setScheme(e, t, r) {
          return { type: _n, payload: { scheme: e, path: t, method: r } };
        }
        const xn = {
            [an]: (e, t) =>
              'string' == typeof t.payload ? e.set('spec', t.payload) : e,
            [sn]: (e, t) => e.set('url', t.payload + ''),
            [on]: (e, t) => e.set('json', fromJSOrdered(t.payload)),
            [En]: (e, t) => e.setIn(['resolved'], fromJSOrdered(t.payload)),
            [vn]: (e, t) => {
              const { value: r, path: n } = t.payload;
              return e.setIn(['resolvedSubtrees', ...n], fromJSOrdered(r));
            },
            [ln]: (e, t) => {
              let { payload: r } = t,
                {
                  path: n,
                  paramName: a,
                  paramIn: s,
                  param: o,
                  value: l,
                  isXml: c,
                } = r,
                i = o ? paramToIdentifier(o) : `${s}.${a}`;
              const p = c ? 'value_xml' : 'value';
              return e.setIn(['meta', 'paths', ...n, 'parameters', i, p], l);
            },
            [cn]: (e, t) => {
              let { payload: r } = t,
                {
                  pathMethod: n,
                  paramName: a,
                  paramIn: s,
                  includeEmptyValue: o,
                } = r;
              if (!a || !s)
                return (
                  console.warn(
                    'Warning: UPDATE_EMPTY_PARAM_INCLUSION could not generate a paramKey.'
                  ),
                  e
                );
              const l = `${s}.${a}`;
              return e.setIn(
                ['meta', 'paths', ...n, 'parameter_inclusions', l],
                o
              );
            },
            [pn]: (e, t) => {
              let {
                payload: { pathMethod: r, isOAS3: n },
              } = t;
              const a = Cr(e).getIn(['paths', ...r]),
                s = parameterValues(e, r).toJS();
              return e.updateIn(
                ['meta', 'paths', ...r, 'parameters'],
                (0, I.fromJS)({}),
                t =>
                  a.get('parameters', (0, I.List)()).reduce((t, a) => {
                    const o = paramToValue(a, s),
                      l = parameterInclusionSettingFor(
                        e,
                        r,
                        a.get('name'),
                        a.get('in')
                      ),
                      c = (function (e, t) {
                        let { isOAS3: r = !1, bypassRequiredCheck: n = !1 } =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          a = e.get('required'),
                          { schema: s, parameterContentMediaType: o } =
                            getParameterSchema(e, { isOAS3: r });
                        return validateValueBySchema(t, s, a, n, o);
                      })(a, o, { bypassRequiredCheck: l, isOAS3: n });
                    return t.setIn(
                      [paramToIdentifier(a), 'errors'],
                      (0, I.fromJS)(c)
                    );
                  }, t)
              );
            },
            [fn]: (e, t) => {
              let {
                payload: { pathMethod: r },
              } = t;
              return e.updateIn(
                ['meta', 'paths', ...r, 'parameters'],
                (0, I.fromJS)([]),
                e => e.map(e => e.set('errors', (0, I.fromJS)([])))
              );
            },
            [mn]: (e, t) => {
              let r,
                {
                  payload: { res: n, path: a, method: s },
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
              let o = e.setIn(['responses', a, s], fromJSOrdered(r));
              return (
                U.Blob &&
                  n.data instanceof U.Blob &&
                  (o = o.setIn(['responses', a, s, 'text'], n.data)),
                o
              );
            },
            [un]: (e, t) => {
              let {
                payload: { req: r, path: n, method: a },
              } = t;
              return e.setIn(['requests', n, a], fromJSOrdered(r));
            },
            [dn]: (e, t) => {
              let {
                payload: { req: r, path: n, method: a },
              } = t;
              return e.setIn(['mutatedRequests', n, a], fromJSOrdered(r));
            },
            [Sn]: (e, t) => {
              let {
                  payload: { path: r, value: n, key: a },
                } = t,
                s = ['paths', ...r],
                o = ['meta', 'paths', ...r];
              return e.getIn(['json', ...s]) ||
                e.getIn(['resolved', ...s]) ||
                e.getIn(['resolvedSubtrees', ...s])
                ? e.setIn([...o, a], (0, I.fromJS)(n))
                : e;
            },
            [gn]: (e, t) => {
              let {
                payload: { path: r, method: n },
              } = t;
              return e.deleteIn(['responses', r, n]);
            },
            [yn]: (e, t) => {
              let {
                payload: { path: r, method: n },
              } = t;
              return e.deleteIn(['requests', r, n]);
            },
            [_n]: (e, t) => {
              let {
                payload: { scheme: r, path: n, method: a },
              } = t;
              return n && a
                ? e.setIn(['scheme', n, a], r)
                : n || a
                ? void 0
                : e.setIn(['scheme', '_defaultScheme'], r);
            },
          },
          wrap_actions_updateSpec = (e, t) => {
            let { specActions: r } = t;
            return function () {
              e(...arguments), r.parseToJson(...arguments);
            };
          },
          wrap_actions_updateJsonSpec = (e, t) => {
            let { specActions: r } = t;
            return function () {
              for (
                var t = arguments.length, n = new Array(t), a = 0;
                a < t;
                a++
              )
                n[a] = arguments[a];
              e(...n), r.invalidateResolvedSubtreeCache();
              const [s] = n,
                o = Ge()(s, ['paths']) || {};
              Object.keys(o).forEach(e => {
                Ge()(o, [e]).$ref && r.requestResolvedSubtree(['paths', e]);
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
          },
          plugins_spec = () => ({
            statePlugins: {
              spec: {
                wrapActions: { ...f },
                reducers: { ...xn },
                actions: { ...y },
                selectors: { ...g },
              },
            },
          }),
          On = require('swagger-client/es/resolver/strategies/generic');
        var Nn = __webpack_require__.n(On);
        const kn = require('swagger-client/es/resolver/strategies/openapi-2');
        var An = __webpack_require__.n(kn);
        const In = require('swagger-client/es/resolver/strategies/openapi-3-0');
        var qn = __webpack_require__.n(In);
        const jn = require('swagger-client/es/resolver/strategies/openapi-3-1-apidom');
        var Pn = __webpack_require__.n(jn);
        const Mn = require('swagger-client/es/resolver'),
          Rn = require('swagger-client/es/execute'),
          Tn = require('swagger-client/es/http');
        var Jn = __webpack_require__.n(Tn);
        const $n = require('swagger-client/es/subtree-resolver'),
          Vn = require('swagger-client/es/helpers'),
          configs_wrap_actions_loaded = (e, t) =>
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
              fetch: (0, Tn.makeHttp)(Jn(), t.preFetch, t.postFetch),
              buildRequest: Rn.buildRequest,
              execute: Rn.execute,
              resolve: (0, Mn.makeResolve)({
                strategies: [Pn(), qn(), An(), Nn()],
              }),
              resolveSubtree: async function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                const a = r(),
                  s = {
                    modelPropertyMacro: a.modelPropertyMacro,
                    parameterMacro: a.parameterMacro,
                    requestInterceptor: a.requestInterceptor,
                    responseInterceptor: a.responseInterceptor,
                    strategies: [Pn(), qn(), An(), Nn()],
                  };
                return (0, $n.makeResolveSubtree)(s)(e, t, n);
              },
              serializeRes: Tn.serializeRes,
              opId: Vn.opId,
            },
            statePlugins: {
              configs: { wrapActions: { loaded: configs_wrap_actions_loaded } },
            },
          };
        }
        function util() {
          return { fn: { shallowEqualKeys } };
        }
        const Kn = require('react-dom');
        var Dn = __webpack_require__.n(Kn);
        const Ln = require('react-redux'),
          Un = require('lodash/identity');
        var zn = __webpack_require__.n(Un);
        const withSystem = e => t => {
            const { fn: r } = e();
            class WithSystem extends N.Component {
              render() {
                return k().createElement(
                  t,
                  rt()({}, e(), this.props, this.context)
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
            class WithRoot extends N.Component {
              render() {
                return k().createElement(
                  Ln.Provider,
                  { store: t },
                  k().createElement(r, rt()({}, this.props, this.context))
                );
              }
            }
            return (
              (WithRoot.displayName = `WithRoot(${n.getDisplayName(r)})`),
              WithRoot
            );
          },
          withConnect = (e, t, r) =>
            (0, A.compose)(
              r ? withRoot(e, r) : zn(),
              (0, Ln.connect)((r, n) => {
                const a = { ...n, ...e() },
                  s = t.prototype?.mapStateToProps || (e => ({ state: e }));
                return s(r, a);
              }),
              withSystem(e)
            )(t),
          handleProps = (e, t, r, n) => {
            for (const a in t) {
              const s = t[a];
              'function' == typeof s && s(r[a], n[a], e());
            }
          },
          withMappedContainer = (e, t, r) => (t, n) => {
            const { fn: a } = e(),
              s = r(t, 'root');
            class WithMappedContainer extends N.Component {
              constructor(t, r) {
                super(t, r), handleProps(e, n, t, {});
              }
              UNSAFE_componentWillReceiveProps(t) {
                handleProps(e, n, t, this.props);
              }
              render() {
                const e = qe()(this.props, n ? Object.keys(n) : []);
                return k().createElement(s, e);
              }
            }
            return (
              (WithMappedContainer.displayName = `WithMappedContainer(${a.getDisplayName(
                s
              )})`),
              WithMappedContainer
            );
          },
          render = (e, t, r, n) => a => {
            const s = r(e, t, n)('App', 'root');
            Dn().render(k().createElement(s, null), a);
          },
          getComponent = (e, t, r) =>
            function (n, a) {
              let s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if ('string' != typeof n)
                throw new TypeError(
                  'Need a string, to fetch a component. Was given a ' + typeof n
                );
              const o = r(n);
              return o
                ? a
                  ? 'root' === a
                    ? withConnect(e, o, t())
                    : withConnect(e, o)
                  : o
                : (s.failSilently ||
                    e().log.warn('Could not find component:', n),
                  null);
            },
          getDisplayName = e => e.displayName || e.name || 'Component',
          view = e => {
            let { getComponents: t, getStore: r, getSystem: n } = e;
            const a =
              ((s = getComponent(n, r, t)),
              pe(s, function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                return JSON.stringify(t);
              }));
            var s;
            const o = (e =>
              utils_memoizeN(e, function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                return t;
              }))(withMappedContainer(n, 0, a));
            return {
              rootInjects: {
                getComponent: a,
                makeMappedContainer: o,
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
                  specActions: s,
                  getConfigs: o,
                } = r,
                { fetch: l } = t;
              const c = o();
              function next(t) {
                if (t instanceof Error || t.status >= 400)
                  return (
                    s.updateLoadingStatus('failed'),
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
                            ('URL' in U
                              ? (t = new URL(e))
                              : ((t = document.createElement('a')),
                                (t.href = e)),
                            'https:' !== t.protocol &&
                              'https:' === U.location.protocol)
                          ) {
                            const e = Object.assign(
                              new Error(
                                `Possible mixed-content issue? The page was loaded over https:// but a ${t.protocol}// URL was specified. Check that you are not attempting to load mixed content.`
                              ),
                              { source: 'fetch' }
                            );
                            return void n.newThrownErr(e);
                          }
                          if (t.origin !== U.location.origin) {
                            const e = Object.assign(
                              new Error(
                                `Possible cross-origin (CORS) issue? The URL origin (${t.origin}) does not match the page (${U.location.origin}). Check the server returns the correct 'Access-Control-Allow-*' headers.`
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
                s.updateLoadingStatus('success'),
                  s.updateSpec(t.text),
                  a.url() !== e && s.updateUrl(e);
              }
              (e = e || a.url()),
                s.updateLoadingStatus('loading'),
                n.clear({ source: 'fetch' }),
                l({
                  url: e,
                  loadSpec: !0,
                  requestInterceptor: c.requestInterceptor || (e => e),
                  responseInterceptor: c.responseInterceptor || (e => e),
                  credentials: 'same-origin',
                  headers: { Accept: 'application/json,*/*' },
                }).then(next, next);
            },
            updateLoadingStatus: e => {
              let t = [null, 'loading', 'failed', 'success', 'failedConfig'];
              return (
                -1 === t.indexOf(e) &&
                  console.error(
                    `Error: ${e} is not one of ${JSON.stringify(t)}`
                  ),
                { type: 'spec_update_loading_status', payload: e }
              );
            },
          };
          let n = {
            loadingStatus: (0, be.createSelector)(
              e => e || (0, I.Map)(),
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
        const Bn = require('lodash/zipObject');
        var Fn = __webpack_require__.n(Bn);
        const Wn = console.error,
          withErrorBoundary = e => t => {
            const { getComponent: r, fn: n } = e(),
              a = r('ErrorBoundary'),
              s = n.getDisplayName(t);
            class WithErrorBoundary extends N.Component {
              render() {
                return k().createElement(
                  a,
                  { targetName: s, getComponent: r, fn: n },
                  k().createElement(t, rt()({}, this.props, this.context))
                );
              }
            }
            var o;
            return (
              (WithErrorBoundary.displayName = `WithErrorBoundary(${s})`),
              (o = t).prototype &&
                o.prototype.isReactComponent &&
                (WithErrorBoundary.prototype.mapStateToProps =
                  t.prototype.mapStateToProps),
              WithErrorBoundary
            );
          },
          fallback = e => {
            let { name: t } = e;
            return k().createElement(
              'div',
              { className: 'fallback' },
              '😱 ',
              k().createElement(
                'i',
                null,
                'Could not render ',
                't' === t ? 'this component' : t,
                ', see the console.'
              )
            );
          };
        class ErrorBoundary extends N.Component {
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
              return k().createElement(r, { name: t });
            }
            return r;
          }
        }
        ErrorBoundary.defaultProps = {
          targetName: 'this component',
          getComponent: () => fallback,
          fn: { componentDidCatch: Wn },
          children: null,
        };
        const Hn = ErrorBoundary,
          safe_render = function () {
            let { componentList: e = [], fullOverride: t = !1 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
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
                s = Fn()(
                  a,
                  Array(a.length).fill((e, t) => {
                    let { fn: r } = t;
                    return r.withErrorBoundary(e);
                  })
                );
              return {
                fn: {
                  componentDidCatch: Wn,
                  withErrorBoundary: withErrorBoundary(n),
                },
                components: { ErrorBoundary: Hn, Fallback: fallback },
                wrapComponents: s,
              };
            };
          };
        class App extends k().Component {
          getLayout() {
            let { getComponent: e, layoutSelectors: t } = this.props;
            const r = t.current(),
              n = e(r, !0);
            return (
              n ||
              (() =>
                k().createElement(
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
            return k().createElement(e, null);
          }
        }
        App.defaultProps = {};
        class AuthorizationPopup extends k().Component {
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
                fn: { AST: s = {} },
              } = this.props,
              o = e.shownDefinitions();
            const l = r('auths'),
              c = r('CloseIcon');
            return k().createElement(
              'div',
              { className: 'dialog-ux' },
              k().createElement('div', { className: 'backdrop-ux' }),
              k().createElement(
                'div',
                { className: 'modal-ux' },
                k().createElement(
                  'div',
                  { className: 'modal-dialog-ux' },
                  k().createElement(
                    'div',
                    { className: 'modal-ux-inner' },
                    k().createElement(
                      'div',
                      { className: 'modal-ux-header' },
                      k().createElement('h3', null, 'Available authorizations'),
                      k().createElement(
                        'button',
                        {
                          type: 'button',
                          className: 'close-modal',
                          onClick: this.close,
                        },
                        k().createElement(c, null)
                      )
                    ),
                    k().createElement(
                      'div',
                      { className: 'modal-ux-content' },
                      o.valueSeq().map((o, c) =>
                        k().createElement(l, {
                          key: c,
                          AST: s,
                          definitions: o,
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
        class AuthorizeBtn extends k().Component {
          render() {
            let {
              isAuthorized: e,
              showPopup: t,
              onClick: r,
              getComponent: n,
            } = this.props;
            const a = n('authorizationPopup', !0),
              s = n('LockAuthIcon', !0),
              o = n('UnlockAuthIcon', !0);
            return k().createElement(
              'div',
              { className: 'auth-wrapper' },
              k().createElement(
                'button',
                {
                  className: e
                    ? 'btn authorize locked'
                    : 'btn authorize unlocked',
                  onClick: r,
                },
                k().createElement('span', null, 'Authorize'),
                e ? k().createElement(s, null) : k().createElement(o, null)
              ),
              t && k().createElement(a, null)
            );
          }
        }
        class AuthorizeBtnContainer extends k().Component {
          render() {
            const {
                authActions: e,
                authSelectors: t,
                specSelectors: r,
                getComponent: n,
              } = this.props,
              a = r.securityDefinitions(),
              s = t.definitionsToAuthorize(),
              o = n('authorizeBtn');
            return a
              ? k().createElement(o, {
                  onClick: () => e.showDefinitions(s),
                  isAuthorized: !!t.authorized().size,
                  showPopup: !!t.shownDefinitions(),
                  getComponent: n,
                })
              : null;
          }
        }
        class AuthorizeOperationBtn extends k().Component {
          onClick = e => {
            e.stopPropagation();
            let { onClick: t } = this.props;
            t && t();
          };
          render() {
            let { isAuthorized: e, getComponent: t } = this.props;
            const r = t('LockAuthOperationIcon', !0),
              n = t('UnlockAuthOperationIcon', !0);
            return k().createElement(
              'button',
              {
                className: 'authorization__btn',
                'aria-label': e
                  ? 'authorization button locked'
                  : 'authorization button unlocked',
                onClick: this.onClick,
              },
              e
                ? k().createElement(r, { className: 'locked' })
                : k().createElement(n, { className: 'unlocked' })
            );
          }
        }
        class Auths extends k().Component {
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
              s = t('oauth2', !0),
              o = t('Button');
            let l = r.authorized(),
              c = e.filter((e, t) => !!l.get(t)),
              i = e.filter(e => 'oauth2' !== e.get('type')),
              p = e.filter(e => 'oauth2' === e.get('type'));
            return k().createElement(
              'div',
              { className: 'auth-container' },
              !!i.size &&
                k().createElement(
                  'form',
                  { onSubmit: this.submitAuth },
                  i
                    .map((e, r) =>
                      k().createElement(a, {
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
                  k().createElement(
                    'div',
                    { className: 'auth-btn-wrapper' },
                    i.size === c.size
                      ? k().createElement(
                          o,
                          {
                            className: 'btn modal-btn auth',
                            onClick: this.logoutClick,
                            'aria-label': 'Remove authorization',
                          },
                          'Logout'
                        )
                      : k().createElement(
                          o,
                          {
                            type: 'submit',
                            className: 'btn modal-btn auth authorize',
                            'aria-label': 'Apply credentials',
                          },
                          'Authorize'
                        ),
                    k().createElement(
                      o,
                      {
                        className: 'btn modal-btn auth btn-done',
                        onClick: this.close,
                      },
                      'Close'
                    )
                  )
                ),
              p && p.size
                ? k().createElement(
                    'div',
                    null,
                    k().createElement(
                      'div',
                      { className: 'scope-def' },
                      k().createElement(
                        'p',
                        null,
                        'Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.'
                      ),
                      k().createElement(
                        'p',
                        null,
                        'API requires the following scopes. Select which ones you want to grant to Swagger UI.'
                      )
                    ),
                    e
                      .filter(e => 'oauth2' === e.get('type'))
                      .map((e, t) =>
                        k().createElement(
                          'div',
                          { key: t },
                          k().createElement(s, {
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
        class auth_item_Auths extends k().Component {
          render() {
            let {
              schema: e,
              name: t,
              getComponent: r,
              onAuthChange: n,
              authorized: a,
              errSelectors: s,
            } = this.props;
            const o = r('apiKeyAuth'),
              l = r('basicAuth');
            let c;
            const i = e.get('type');
            switch (i) {
              case 'apiKey':
                c = k().createElement(o, {
                  key: t,
                  schema: e,
                  name: t,
                  errSelectors: s,
                  authorized: a,
                  getComponent: r,
                  onChange: n,
                });
                break;
              case 'basic':
                c = k().createElement(l, {
                  key: t,
                  schema: e,
                  name: t,
                  errSelectors: s,
                  authorized: a,
                  getComponent: r,
                  onChange: n,
                });
                break;
              default:
                c = k().createElement(
                  'div',
                  { key: t },
                  'Unknown security definition type ',
                  i
                );
            }
            return k().createElement('div', { key: `${t}-jump` }, c);
          }
        }
        class AuthError extends k().Component {
          render() {
            let { error: e } = this.props,
              t = e.get('level'),
              r = e.get('message'),
              n = e.get('source');
            return k().createElement(
              'div',
              { className: 'errors' },
              k().createElement('b', null, n, ' ', t),
              k().createElement('span', null, r)
            );
          }
        }
        class ApiKeyAuth extends k().Component {
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
            let {
              schema: e,
              getComponent: t,
              errSelectors: r,
              name: n,
            } = this.props;
            const a = t('Input'),
              s = t('Row'),
              o = t('Col'),
              l = t('authError'),
              c = t('Markdown', !0),
              i = t('JumpToPath', !0);
            let p = this.getValue(),
              m = r.allErrors().filter(e => e.get('authId') === n);
            return k().createElement(
              'div',
              null,
              k().createElement(
                'h4',
                null,
                k().createElement('code', null, n || e.get('name')),
                ' (apiKey)',
                k().createElement(i, { path: ['securityDefinitions', n] })
              ),
              p && k().createElement('h6', null, 'Authorized'),
              k().createElement(
                s,
                null,
                k().createElement(c, { source: e.get('description') })
              ),
              k().createElement(
                s,
                null,
                k().createElement(
                  'p',
                  null,
                  'Name: ',
                  k().createElement('code', null, e.get('name'))
                )
              ),
              k().createElement(
                s,
                null,
                k().createElement(
                  'p',
                  null,
                  'In: ',
                  k().createElement('code', null, e.get('in'))
                )
              ),
              k().createElement(
                s,
                null,
                k().createElement('label', null, 'Value:'),
                p
                  ? k().createElement('code', null, ' ****** ')
                  : k().createElement(
                      o,
                      null,
                      k().createElement(a, {
                        type: 'text',
                        onChange: this.onChange,
                        autoFocus: !0,
                      })
                    )
              ),
              m
                .valueSeq()
                .map((e, t) => k().createElement(l, { error: e, key: t }))
            );
          }
        }
        class BasicAuth extends k().Component {
          constructor(e, t) {
            super(e, t);
            let { schema: r, name: n } = this.props,
              a = this.getValue().username;
            this.state = {
              name: n,
              schema: r,
              value: a ? { username: a } : {},
            };
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
            let {
              schema: e,
              getComponent: t,
              name: r,
              errSelectors: n,
            } = this.props;
            const a = t('Input'),
              s = t('Row'),
              o = t('Col'),
              l = t('authError'),
              c = t('JumpToPath', !0),
              i = t('Markdown', !0);
            let p = this.getValue().username,
              m = n.allErrors().filter(e => e.get('authId') === r);
            return k().createElement(
              'div',
              null,
              k().createElement(
                'h4',
                null,
                'Basic authorization',
                k().createElement(c, { path: ['securityDefinitions', r] })
              ),
              p && k().createElement('h6', null, 'Authorized'),
              k().createElement(
                s,
                null,
                k().createElement(i, { source: e.get('description') })
              ),
              k().createElement(
                s,
                null,
                k().createElement('label', null, 'Username:'),
                p
                  ? k().createElement('code', null, ' ', p, ' ')
                  : k().createElement(
                      o,
                      null,
                      k().createElement(a, {
                        type: 'text',
                        required: 'required',
                        name: 'username',
                        onChange: this.onChange,
                        autoFocus: !0,
                      })
                    )
              ),
              k().createElement(
                s,
                null,
                k().createElement('label', null, 'Password:'),
                p
                  ? k().createElement('code', null, ' ****** ')
                  : k().createElement(
                      o,
                      null,
                      k().createElement(a, {
                        autoComplete: 'new-password',
                        name: 'password',
                        type: 'password',
                        onChange: this.onChange,
                      })
                    )
              ),
              m
                .valueSeq()
                .map((e, t) => k().createElement(l, { error: e, key: t }))
            );
          }
        }
        function Example(e) {
          const {
              example: t,
              showValue: r,
              getComponent: n,
              getConfigs: a,
            } = e,
            s = n('Markdown', !0),
            o = n('highlightCode');
          return t
            ? k().createElement(
                'div',
                { className: 'example' },
                t.get('description')
                  ? k().createElement(
                      'section',
                      { className: 'example__section' },
                      k().createElement(
                        'div',
                        { className: 'example__section-header' },
                        'Example Description'
                      ),
                      k().createElement(
                        'p',
                        null,
                        k().createElement(s, { source: t.get('description') })
                      )
                    )
                  : null,
                r && t.has('value')
                  ? k().createElement(
                      'section',
                      { className: 'example__section' },
                      k().createElement(
                        'div',
                        { className: 'example__section-header' },
                        'Example Value'
                      ),
                      k().createElement(o, {
                        getConfigs: a,
                        value: stringify(t.get('value')),
                      })
                    )
                  : null
              )
            : null;
        }
        class ExamplesSelect extends k().PureComponent {
          static defaultProps = {
            examples: q().Map({}),
            onSelect: function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
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
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
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
            return k().createElement(
              'div',
              { className: 'examples-select' },
              a
                ? k().createElement(
                    'span',
                    { className: 'examples-select__section-label' },
                    'Examples: '
                  )
                : null,
              k().createElement(
                'select',
                {
                  className: 'examples-select-element',
                  onChange: this._onDomSelect,
                  value: n && r ? '__MODIFIED__VALUE__' : t || '',
                },
                n
                  ? k().createElement(
                      'option',
                      { value: '__MODIFIED__VALUE__' },
                      '[Modified value]'
                    )
                  : null,
                e
                  .map((e, t) =>
                    k().createElement(
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
        const stringifyUnlessList = e => (I.List.isList(e) ? e : stringify(e));
        class ExamplesSelectValueRetainer extends k().PureComponent {
          static defaultProps = {
            userHasEditedBody: !1,
            examples: (0, I.Map)({}),
            currentNamespace: '__DEFAULT__NAMESPACE__',
            setRetainRequestBodyValueFlag: () => {},
            onSelect: function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return console.log(
                'ExamplesSelectValueRetainer: no `onSelect` function was provided',
                ...t
              );
            },
            updateValue: function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
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
              [e.currentNamespace]: (0, I.Map)({
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
            return (this.state[e] || (0, I.Map)()).toObject();
          };
          _setStateForCurrentNamespace = e => {
            const { currentNamespace: t } = this.props;
            return this._setStateForNamespace(t, e);
          };
          _setStateForNamespace = (e, t) => {
            const r = (this.state[e] || (0, I.Map)()).mergeDeep(t);
            return this.setState({ [e]: r });
          };
          _isCurrentUserInputSameAsExampleValue = () => {
            const { currentUserInputValue: e } = this.props;
            return this._getCurrentExampleValue() === e;
          };
          _getValueForExample = (e, t) => {
            const { examples: r } = t || this.props;
            return stringifyUnlessList(
              (r || (0, I.Map)({})).getIn([e, 'value'])
            );
          };
          _getCurrentExampleValue = e => {
            const { currentKey: t } = e || this.props;
            return this._getValueForExample(t, e || this.props);
          };
          _onExamplesSelect = (() => {
            var e = this;
            return function (t) {
              let { isSyntheticChange: r } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const {
                  onSelect: n,
                  updateValue: a,
                  currentUserInputValue: s,
                  userHasEditedBody: o,
                } = e.props,
                { lastUserEditedValue: l } = e._getStateForCurrentNamespace(),
                c = e._getValueForExample(t);
              if ('__MODIFIED__VALUE__' === t)
                return (
                  a(stringifyUnlessList(l)),
                  e._setStateForCurrentNamespace({
                    isModifiedValueSelected: !0,
                  })
                );
              if ('function' == typeof n) {
                for (
                  var i = arguments.length,
                    p = new Array(i > 2 ? i - 2 : 0),
                    m = 2;
                  m < i;
                  m++
                )
                  p[m - 2] = arguments[m];
                n(t, { isSyntheticChange: r }, ...p);
              }
              e._setStateForCurrentNamespace({
                lastDownstreamValue: c,
                isModifiedValueSelected: (r && o) || (!!s && s !== c),
              }),
                r || ('function' == typeof a && a(stringifyUnlessList(c)));
            };
          })();
          UNSAFE_componentWillReceiveProps(e) {
            const {
                currentUserInputValue: t,
                examples: r,
                onSelect: n,
                userHasEditedBody: a,
              } = e,
              { lastUserEditedValue: s, lastDownstreamValue: o } =
                this._getStateForCurrentNamespace(),
              l = this._getValueForExample(e.currentKey, e),
              c = r.filter(
                e => e.get('value') === t || stringify(e.get('value')) === t
              );
            if (c.size) {
              let t;
              (t = c.has(e.currentKey) ? e.currentKey : c.keySeq().first()),
                n(t, { isSyntheticChange: !0 });
            } else
              t !== this.props.currentUserInputValue &&
                t !== s &&
                t !== o &&
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
                lastDownstreamValue: s,
                lastUserEditedValue: o,
                isModifiedValueSelected: l,
              } = this._getStateForCurrentNamespace(),
              c = n('ExamplesSelect');
            return k().createElement(c, {
              examples: t,
              currentExampleKey: r,
              onSelect: this._onExamplesSelect,
              isModifiedValueAvailable: !!o && o !== s,
              isValueModified:
                (void 0 !== e && l && e !== this._getCurrentExampleValue()) ||
                a,
            });
          }
        }
        function oauth2_authorize_authorize(e) {
          let {
              auth: t,
              authActions: r,
              errActions: n,
              configs: a,
              authConfigs: s = {},
              currentServer: o,
            } = e,
            { schema: l, scopes: c, name: i, clientId: p } = t,
            m = l.get('flow'),
            u = [];
          switch (m) {
            case 'password':
              return void r.authorizePassword(t);
            case 'application':
            case 'clientCredentials':
            case 'client_credentials':
              return void r.authorizeApplication(t);
            case 'accessCode':
            case 'authorizationCode':
            case 'authorization_code':
              u.push('response_type=code');
              break;
            case 'implicit':
              u.push('response_type=token');
          }
          'string' == typeof p && u.push('client_id=' + encodeURIComponent(p));
          let d = a.oauth2RedirectUrl;
          if (void 0 === d)
            return void n.newAuthErr({
              authId: i,
              source: 'validation',
              level: 'error',
              message:
                'oauth2RedirectUrl configuration is not passed. Oauth2 authorization cannot be performed.',
            });
          u.push('redirect_uri=' + encodeURIComponent(d));
          let h = [];
          if (
            (Array.isArray(c)
              ? (h = c)
              : q().List.isList(c) && (h = c.toArray()),
            h.length > 0)
          ) {
            let e = s.scopeSeparator || ' ';
            u.push('scope=' + encodeURIComponent(h.join(e)));
          }
          let g = btoa(new Date());
          if (
            (u.push('state=' + encodeURIComponent(g)),
            void 0 !== s.realm &&
              u.push('realm=' + encodeURIComponent(s.realm)),
            ('authorizationCode' === m ||
              'authorization_code' === m ||
              'accessCode' === m) &&
              s.usePkceWithAuthorizationCodeGrant)
          ) {
            const e = (function generateCodeVerifier() {
                return b64toB64UrlEncoded(ae()(32).toString('base64'));
              })(),
              r = (function createCodeChallenge(e) {
                return b64toB64UrlEncoded(
                  oe()('sha256').update(e).digest('base64')
                );
              })(e);
            u.push('code_challenge=' + r),
              u.push('code_challenge_method=S256'),
              (t.codeVerifier = e);
          }
          let { additionalQueryStringParams: y } = s;
          for (let e in y)
            void 0 !== y[e] &&
              u.push([e, y[e]].map(encodeURIComponent).join('='));
          const f = l.get('authorizationUrl');
          let S;
          S = o ? de()(sanitizeUrl(f), o, !0).toString() : sanitizeUrl(f);
          let E,
            v = [S, u.join('&')].join(-1 === f.indexOf('?') ? '?' : '&');
          (E =
            'implicit' === m
              ? r.preAuthorizeImplicit
              : s.useBasicAuthenticationWithAccessCodeGrant
              ? r.authorizeAccessCodeWithBasicAuthentication
              : r.authorizeAccessCodeWithFormParams),
            r.authPopup(v, {
              auth: t,
              state: g,
              redirectUrl: d,
              callback: E,
              errCb: n.newAuthErr,
            });
        }
        class Oauth2 extends k().Component {
          constructor(e, t) {
            super(e, t);
            let {
                name: r,
                schema: n,
                authorized: a,
                authSelectors: s,
              } = this.props,
              o = a && a.get(r),
              l = s.getConfigs() || {},
              c = (o && o.get('username')) || '',
              i = (o && o.get('clientId')) || l.clientId || '',
              p = (o && o.get('clientSecret')) || l.clientSecret || '',
              m = (o && o.get('passwordType')) || 'basic',
              u = (o && o.get('scopes')) || l.scopes || [];
            'string' == typeof u && (u = u.split(l.scopeSeparator || ' ')),
              (this.state = {
                appName: l.appName,
                name: r,
                schema: n,
                scopes: u,
                clientId: i,
                clientSecret: p,
                username: c,
                password: '',
                passwordType: m,
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
              s = r(),
              o = n.getConfigs();
            t.clear({ authId: name, type: 'auth', source: 'auth' }),
              oauth2_authorize_authorize({
                auth: this.state,
                currentServer: a.serverEffectiveValue(a.selectedServer()),
                authActions: e,
                errActions: t,
                configs: s,
                authConfigs: o,
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
                this.setState({
                  scopes: this.state.scopes.filter(e => e !== n),
                });
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
              specSelectors: s,
            } = this.props;
            const o = t('Input'),
              l = t('Row'),
              c = t('Col'),
              i = t('Button'),
              p = t('authError'),
              m = t('JumpToPath', !0),
              u = t('Markdown', !0),
              d = t('InitializedInput'),
              { isOAS3: h } = s;
            let g = h() ? e.get('openIdConnectUrl') : null;
            const y = 'implicit',
              f = 'password',
              S = h()
                ? g
                  ? 'authorization_code'
                  : 'authorizationCode'
                : 'accessCode',
              E = h()
                ? g
                  ? 'client_credentials'
                  : 'clientCredentials'
                : 'application';
            let v = !!(r.getConfigs() || {}).usePkceWithAuthorizationCodeGrant,
              _ = e.get('flow'),
              w = _ === S && v ? _ + ' with PKCE' : _,
              b = e.get('allowedScopes') || e.get('scopes'),
              C = !!r.authorized().get(a),
              x = n.allErrors().filter(e => e.get('authId') === a),
              O = !x.filter(e => 'validation' === e.get('source')).size,
              N = e.get('description');
            return k().createElement(
              'div',
              null,
              k().createElement(
                'h4',
                null,
                a,
                ' (OAuth2, ',
                w,
                ') ',
                k().createElement(m, { path: ['securityDefinitions', a] })
              ),
              this.state.appName
                ? k().createElement(
                    'h5',
                    null,
                    'Application: ',
                    this.state.appName,
                    ' '
                  )
                : null,
              N && k().createElement(u, { source: e.get('description') }),
              C && k().createElement('h6', null, 'Authorized'),
              g &&
                k().createElement(
                  'p',
                  null,
                  'OpenID Connect URL: ',
                  k().createElement('code', null, g)
                ),
              (_ === y || _ === S) &&
                k().createElement(
                  'p',
                  null,
                  'Authorization URL: ',
                  k().createElement('code', null, e.get('authorizationUrl'))
                ),
              (_ === f || _ === S || _ === E) &&
                k().createElement(
                  'p',
                  null,
                  'Token URL:',
                  k().createElement('code', null, ' ', e.get('tokenUrl'))
                ),
              k().createElement(
                'p',
                { className: 'flow' },
                'Flow: ',
                k().createElement('code', null, w)
              ),
              _ !== f
                ? null
                : k().createElement(
                    l,
                    null,
                    k().createElement(
                      l,
                      null,
                      k().createElement(
                        'label',
                        { htmlFor: 'oauth_username' },
                        'username:'
                      ),
                      C
                        ? k().createElement(
                            'code',
                            null,
                            ' ',
                            this.state.username,
                            ' '
                          )
                        : k().createElement(
                            c,
                            { tablet: 10, desktop: 10 },
                            k().createElement('input', {
                              id: 'oauth_username',
                              type: 'text',
                              'data-name': 'username',
                              onChange: this.onInputChange,
                              autoFocus: !0,
                            })
                          )
                    ),
                    k().createElement(
                      l,
                      null,
                      k().createElement(
                        'label',
                        { htmlFor: 'oauth_password' },
                        'password:'
                      ),
                      C
                        ? k().createElement('code', null, ' ****** ')
                        : k().createElement(
                            c,
                            { tablet: 10, desktop: 10 },
                            k().createElement('input', {
                              id: 'oauth_password',
                              type: 'password',
                              'data-name': 'password',
                              onChange: this.onInputChange,
                            })
                          )
                    ),
                    k().createElement(
                      l,
                      null,
                      k().createElement(
                        'label',
                        { htmlFor: 'password_type' },
                        'Client credentials location:'
                      ),
                      C
                        ? k().createElement(
                            'code',
                            null,
                            ' ',
                            this.state.passwordType,
                            ' '
                          )
                        : k().createElement(
                            c,
                            { tablet: 10, desktop: 10 },
                            k().createElement(
                              'select',
                              {
                                id: 'password_type',
                                'data-name': 'passwordType',
                                onChange: this.onInputChange,
                              },
                              k().createElement(
                                'option',
                                { value: 'basic' },
                                'Authorization header'
                              ),
                              k().createElement(
                                'option',
                                { value: 'request-body' },
                                'Request body'
                              )
                            )
                          )
                    )
                  ),
              (_ === E || _ === y || _ === S || _ === f) &&
                (!C || (C && this.state.clientId)) &&
                k().createElement(
                  l,
                  null,
                  k().createElement(
                    'label',
                    { htmlFor: 'client_id' },
                    'client_id:'
                  ),
                  C
                    ? k().createElement('code', null, ' ****** ')
                    : k().createElement(
                        c,
                        { tablet: 10, desktop: 10 },
                        k().createElement(d, {
                          id: 'client_id',
                          type: 'text',
                          required: _ === f,
                          initialValue: this.state.clientId,
                          'data-name': 'clientId',
                          onChange: this.onInputChange,
                        })
                      )
                ),
              (_ === E || _ === S || _ === f) &&
                k().createElement(
                  l,
                  null,
                  k().createElement(
                    'label',
                    { htmlFor: 'client_secret' },
                    'client_secret:'
                  ),
                  C
                    ? k().createElement('code', null, ' ****** ')
                    : k().createElement(
                        c,
                        { tablet: 10, desktop: 10 },
                        k().createElement(d, {
                          id: 'client_secret',
                          initialValue: this.state.clientSecret,
                          type: 'password',
                          'data-name': 'clientSecret',
                          onChange: this.onInputChange,
                        })
                      )
                ),
              !C && b && b.size
                ? k().createElement(
                    'div',
                    { className: 'scopes' },
                    k().createElement(
                      'h2',
                      null,
                      'Scopes:',
                      k().createElement(
                        'a',
                        { onClick: this.selectScopes, 'data-all': !0 },
                        'select all'
                      ),
                      k().createElement(
                        'a',
                        { onClick: this.selectScopes },
                        'select none'
                      )
                    ),
                    b
                      .map((e, t) =>
                        k().createElement(
                          l,
                          { key: t },
                          k().createElement(
                            'div',
                            { className: 'checkbox' },
                            k().createElement(o, {
                              'data-value': t,
                              id: `${t}-${_}-checkbox-${this.state.name}`,
                              disabled: C,
                              checked: this.state.scopes.includes(t),
                              type: 'checkbox',
                              onChange: this.onScopeChange,
                            }),
                            k().createElement(
                              'label',
                              {
                                htmlFor: `${t}-${_}-checkbox-${this.state.name}`,
                              },
                              k().createElement('span', { className: 'item' }),
                              k().createElement(
                                'div',
                                { className: 'text' },
                                k().createElement(
                                  'p',
                                  { className: 'name' },
                                  t
                                ),
                                k().createElement(
                                  'p',
                                  { className: 'description' },
                                  e
                                )
                              )
                            )
                          )
                        )
                      )
                      .toArray()
                  )
                : null,
              x
                .valueSeq()
                .map((e, t) => k().createElement(p, { error: e, key: t })),
              k().createElement(
                'div',
                { className: 'auth-btn-wrapper' },
                O &&
                  (C
                    ? k().createElement(
                        i,
                        {
                          className: 'btn modal-btn auth authorize',
                          onClick: this.logout,
                          'aria-label': 'Remove authorization',
                        },
                        'Logout'
                      )
                    : k().createElement(
                        i,
                        {
                          className: 'btn modal-btn auth authorize',
                          onClick: this.authorize,
                          'aria-label': 'Apply given OAuth2 credentials',
                        },
                        'Authorize'
                      )),
                k().createElement(
                  i,
                  {
                    className: 'btn modal-btn auth btn-done',
                    onClick: this.close,
                  },
                  'Close'
                )
              )
            );
          }
        }
        class Clear extends N.Component {
          onClick = () => {
            let { specActions: e, path: t, method: r } = this.props;
            e.clearResponse(t, r), e.clearRequest(t, r);
          };
          render() {
            return k().createElement(
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
            return k().createElement(
              'div',
              null,
              k().createElement('h5', null, 'Response headers'),
              k().createElement('pre', { className: 'microlight' }, t)
            );
          },
          Duration = e => {
            let { duration: t } = e;
            return k().createElement(
              'div',
              null,
              k().createElement('h5', null, 'Request duration'),
              k().createElement('pre', { className: 'microlight' }, t, ' ms')
            );
          };
        class LiveResponse extends k().Component {
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
                path: s,
                method: o,
              } = this.props,
              { showMutatedRequest: l, requestSnippetsEnabled: c } = r(),
              i = l ? a.mutatedRequestFor(s, o) : a.requestFor(s, o),
              p = e.get('status'),
              m = i.get('url'),
              u = e.get('headers').toJS(),
              d = e.get('notDocumented'),
              h = e.get('error'),
              g = e.get('text'),
              y = e.get('duration'),
              f = Object.keys(u),
              S = u['content-type'] || u['Content-Type'],
              E = t('responseBody'),
              v = f.map(e => {
                var t = Array.isArray(u[e]) ? u[e].join() : u[e];
                return k().createElement(
                  'span',
                  { className: 'headerline', key: e },
                  ' ',
                  e,
                  ': ',
                  t,
                  ' '
                );
              }),
              _ = 0 !== v.length,
              w = t('Markdown', !0),
              b = t('RequestSnippets', !0),
              C = t('curl');
            return k().createElement(
              'div',
              null,
              i &&
                (!0 === c || 'true' === c
                  ? k().createElement(b, { request: i })
                  : k().createElement(C, { request: i, getConfigs: r })),
              m &&
                k().createElement(
                  'div',
                  null,
                  k().createElement(
                    'div',
                    { className: 'request-url' },
                    k().createElement('h4', null, 'Request URL'),
                    k().createElement('pre', { className: 'microlight' }, m)
                  )
                ),
              k().createElement('h4', null, 'Server response'),
              k().createElement(
                'table',
                { className: 'responses-table live-responses-table' },
                k().createElement(
                  'thead',
                  null,
                  k().createElement(
                    'tr',
                    { className: 'responses-header' },
                    k().createElement(
                      'td',
                      { className: 'col_header response-col_status' },
                      'Code'
                    ),
                    k().createElement(
                      'td',
                      { className: 'col_header response-col_description' },
                      'Details'
                    )
                  )
                ),
                k().createElement(
                  'tbody',
                  null,
                  k().createElement(
                    'tr',
                    { className: 'response' },
                    k().createElement(
                      'td',
                      { className: 'response-col_status' },
                      p,
                      d
                        ? k().createElement(
                            'div',
                            { className: 'response-undocumented' },
                            k().createElement('i', null, ' Undocumented ')
                          )
                        : null
                    ),
                    k().createElement(
                      'td',
                      { className: 'response-col_description' },
                      h
                        ? k().createElement(w, {
                            source: `${
                              '' !== e.get('name') ? `${e.get('name')}: ` : ''
                            }${e.get('message')}`,
                          })
                        : null,
                      g
                        ? k().createElement(E, {
                            content: g,
                            contentType: S,
                            url: m,
                            headers: u,
                            getConfigs: r,
                            getComponent: t,
                          })
                        : null,
                      _ ? k().createElement(Headers, { headers: v }) : null,
                      n && y
                        ? k().createElement(Duration, { duration: y })
                        : null
                    )
                  )
                )
              )
            );
          }
        }
        class OnlineValidatorBadge extends k().Component {
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
            return new (de())(e.url(), U.location).toString();
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
              ? k().createElement(
                  'span',
                  { className: 'float-right' },
                  k().createElement(
                    'a',
                    {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      href: `${r}/debug?url=${encodeURIComponent(
                        this.state.url
                      )}`,
                    },
                    k().createElement(ValidatorImage, {
                      src: `${r}?url=${encodeURIComponent(this.state.url)}`,
                      alt: 'Online validator badge',
                    })
                  )
                )
              : null;
          }
        }
        class ValidatorImage extends k().Component {
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
              ? k().createElement('img', { alt: 'Error' })
              : this.state.loaded
              ? k().createElement('img', {
                  src: this.props.src,
                  alt: this.props.alt,
                })
              : null;
          }
        }
        class Operations extends k().Component {
          render() {
            let { specSelectors: e } = this.props;
            const t = e.taggedOperations();
            return 0 === t.size
              ? k().createElement('h3', null, ' No operations defined in spec!')
              : k().createElement(
                  'div',
                  null,
                  t.map(this.renderOperationTag).toArray(),
                  t.size < 1
                    ? k().createElement(
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
                layoutSelectors: s,
                layoutActions: o,
                getConfigs: l,
              } = this.props,
              c = r.validOperationMethods(),
              i = n('OperationContainer', !0),
              p = n('OperationTag'),
              m = e.get('operations');
            return k().createElement(
              p,
              {
                key: 'operation-' + t,
                tagObj: e,
                tag: t,
                oas3Selectors: a,
                layoutSelectors: s,
                layoutActions: o,
                getConfigs: l,
                getComponent: n,
                specUrl: r.url(),
              },
              k().createElement(
                'div',
                { className: 'operation-tag-content' },
                m
                  .map(e => {
                    const r = e.get('path'),
                      n = e.get('method'),
                      a = q().List(['paths', r, n]);
                    return -1 === c.indexOf(n)
                      ? null
                      : k().createElement(i, {
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
                  return e.match(/^\/\//i)
                    ? `${window.location.protocol}${e}`
                    : e;
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
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
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
        class OperationTag extends k().Component {
          static defaultProps = { tagObj: q().fromJS({}), tag: '' };
          render() {
            const {
              tagObj: e,
              tag: t,
              children: r,
              oas3Selectors: n,
              layoutSelectors: a,
              layoutActions: s,
              getConfigs: o,
              getComponent: l,
              specUrl: c,
            } = this.props;
            let { docExpansion: i, deepLinking: p } = o();
            const m = p && 'false' !== p,
              u = l('Collapse'),
              d = l('Markdown', !0),
              h = l('DeepLink'),
              g = l('Link'),
              y = l('ArrowUpIcon'),
              f = l('ArrowDownIcon');
            let S,
              E = e.getIn(['tagDetails', 'description'], null),
              v = e.getIn(['tagDetails', 'externalDocs', 'description']),
              _ = e.getIn(['tagDetails', 'externalDocs', 'url']);
            S =
              isFunc(n) && isFunc(n.selectedServer)
                ? safeBuildUrl(_, c, { selectedServer: n.selectedServer() })
                : _;
            let w = ['operations-tag', t],
              b = a.isShown(w, 'full' === i || 'list' === i);
            return k().createElement(
              'div',
              {
                className: b
                  ? 'opblock-tag-section is-open'
                  : 'opblock-tag-section',
              },
              k().createElement(
                'h3',
                {
                  onClick: () => s.show(w, !b),
                  className: E ? 'opblock-tag' : 'opblock-tag no-desc',
                  id: w.map(e => escapeDeepLinkPath(e)).join('-'),
                  'data-tag': t,
                  'data-is-open': b,
                },
                k().createElement(h, {
                  enabled: m,
                  isShown: b,
                  path: createDeepLinkPath(t),
                  text: t,
                }),
                E
                  ? k().createElement(
                      'small',
                      null,
                      k().createElement(d, { source: E })
                    )
                  : k().createElement('small', null),
                S
                  ? k().createElement(
                      'div',
                      { className: 'info__externaldocs' },
                      k().createElement(
                        'small',
                        null,
                        k().createElement(
                          g,
                          {
                            href: sanitizeUrl(S),
                            onClick: e => e.stopPropagation(),
                            target: '_blank',
                          },
                          v || S
                        )
                      )
                    )
                  : null,
                k().createElement(
                  'button',
                  {
                    'aria-expanded': b,
                    className: 'expand-operation',
                    title: b ? 'Collapse operation' : 'Expand operation',
                    onClick: () => s.show(w, !b),
                  },
                  b
                    ? k().createElement(y, { className: 'arrow' })
                    : k().createElement(f, { className: 'arrow' })
                )
              ),
              k().createElement(u, { isOpened: b }, r)
            );
          }
        }
        var Xn;
        function _extends() {
          return (
            (_extends = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n]);
                  }
                  return e;
                }),
            _extends.apply(this, arguments)
          );
        }
        const rolling_load = e =>
          N.createElement(
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
            Xn ||
              (Xn = N.createElement(
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
                N.createElement('animateTransform', {
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
        class Operation extends N.PureComponent {
          static defaultProps = {
            operation: null,
            response: null,
            request: null,
            specPath: (0, I.List)(),
            summary: '',
          };
          render() {
            let {
                specPath: e,
                response: t,
                request: r,
                toggleShown: n,
                onTryoutClick: a,
                onResetClick: s,
                onCancelClick: o,
                onExecute: l,
                fn: c,
                getComponent: i,
                getConfigs: p,
                specActions: m,
                specSelectors: u,
                authActions: d,
                authSelectors: h,
                oas3Actions: g,
                oas3Selectors: y,
              } = this.props,
              f = this.props.operation,
              {
                deprecated: S,
                isShown: E,
                path: v,
                method: _,
                op: w,
                tag: b,
                operationId: C,
                allowTryItOut: x,
                displayRequestDuration: O,
                tryItOutEnabled: N,
                executeInProgress: A,
              } = f.toJS(),
              { description: I, externalDocs: j, schemes: P } = w;
            const M = j
              ? safeBuildUrl(j.url, u.url(), {
                  selectedServer: y.selectedServer(),
                })
              : '';
            let R = f.getIn(['op']),
              T = R.get('responses'),
              J = (function getList(e, t) {
                if (!q().Iterable.isIterable(e)) return q().List();
                let r = e.getIn(Array.isArray(t) ? t : [t]);
                return q().List.isList(r) ? r : q().List();
              })(R, ['parameters']),
              $ = u.operationScheme(v, _),
              V = ['operations', b, C],
              K = getExtensions(R);
            const D = i('responses'),
              L = i('parameters'),
              U = i('execute'),
              z = i('clear'),
              B = i('Collapse'),
              F = i('Markdown', !0),
              W = i('schemes'),
              H = i('OperationServers'),
              X = i('OperationExt'),
              G = i('OperationSummary'),
              Y = i('Link'),
              { showExtensions: Q } = p();
            if (T && t && t.size > 0) {
              let e = !T.get(String(t.get('status'))) && !T.get('default');
              t = t.set('notDocumented', e);
            }
            let Z = [v, _];
            const ee = u.validationErrors([v, _]);
            return k().createElement(
              'div',
              {
                className: S
                  ? 'opblock opblock-deprecated'
                  : E
                  ? `opblock opblock-${_} is-open`
                  : `opblock opblock-${_}`,
                id: escapeDeepLinkPath(V.join('-')),
              },
              k().createElement(G, {
                operationProps: f,
                isShown: E,
                toggleShown: n,
                getComponent: i,
                authActions: d,
                authSelectors: h,
                specPath: e,
              }),
              k().createElement(
                B,
                { isOpened: E },
                k().createElement(
                  'div',
                  { className: 'opblock-body' },
                  (R && R.size) || null === R
                    ? null
                    : k().createElement(rolling_load, {
                        height: '32px',
                        width: '32px',
                        className: 'opblock-loading-animation',
                      }),
                  S &&
                    k().createElement(
                      'h4',
                      { className: 'opblock-title_normal' },
                      ' Warning: Deprecated'
                    ),
                  I &&
                    k().createElement(
                      'div',
                      { className: 'opblock-description-wrapper' },
                      k().createElement(
                        'div',
                        { className: 'opblock-description' },
                        k().createElement(F, { source: I })
                      )
                    ),
                  M
                    ? k().createElement(
                        'div',
                        { className: 'opblock-external-docs-wrapper' },
                        k().createElement(
                          'h4',
                          { className: 'opblock-title_normal' },
                          'Find more details'
                        ),
                        k().createElement(
                          'div',
                          { className: 'opblock-external-docs' },
                          j.description &&
                            k().createElement(
                              'span',
                              {
                                className: 'opblock-external-docs__description',
                              },
                              k().createElement(F, { source: j.description })
                            ),
                          k().createElement(
                            Y,
                            {
                              target: '_blank',
                              className: 'opblock-external-docs__link',
                              href: sanitizeUrl(M),
                            },
                            M
                          )
                        )
                      )
                    : null,
                  R && R.size
                    ? k().createElement(L, {
                        parameters: J,
                        specPath: e.push('parameters'),
                        operation: R,
                        onChangeKey: Z,
                        onTryoutClick: a,
                        onResetClick: s,
                        onCancelClick: o,
                        tryItOutEnabled: N,
                        allowTryItOut: x,
                        fn: c,
                        getComponent: i,
                        specActions: m,
                        specSelectors: u,
                        pathMethod: [v, _],
                        getConfigs: p,
                        oas3Actions: g,
                        oas3Selectors: y,
                      })
                    : null,
                  N
                    ? k().createElement(H, {
                        getComponent: i,
                        path: v,
                        method: _,
                        operationServers: R.get('servers'),
                        pathServers: u.paths().getIn([v, 'servers']),
                        getSelectedServer: y.selectedServer,
                        setSelectedServer: g.setSelectedServer,
                        setServerVariableValue: g.setServerVariableValue,
                        getServerVariable: y.serverVariableValue,
                        getEffectiveServerValue: y.serverEffectiveValue,
                      })
                    : null,
                  N && x && P && P.size
                    ? k().createElement(
                        'div',
                        { className: 'opblock-schemes' },
                        k().createElement(W, {
                          schemes: P,
                          path: v,
                          method: _,
                          specActions: m,
                          currentScheme: $,
                        })
                      )
                    : null,
                  !N || !x || ee.length <= 0
                    ? null
                    : k().createElement(
                        'div',
                        { className: 'validation-errors errors-wrapper' },
                        'Please correct the following validation errors and try again.',
                        k().createElement(
                          'ul',
                          null,
                          ee.map((e, t) =>
                            k().createElement('li', { key: t }, ' ', e, ' ')
                          )
                        )
                      ),
                  k().createElement(
                    'div',
                    {
                      className: N && t && x ? 'btn-group' : 'execute-wrapper',
                    },
                    N && x
                      ? k().createElement(U, {
                          operation: R,
                          specActions: m,
                          specSelectors: u,
                          oas3Selectors: y,
                          oas3Actions: g,
                          path: v,
                          method: _,
                          onExecute: l,
                          disabled: A,
                        })
                      : null,
                    N && t && x
                      ? k().createElement(z, {
                          specActions: m,
                          path: v,
                          method: _,
                        })
                      : null
                  ),
                  A
                    ? k().createElement(
                        'div',
                        { className: 'loading-container' },
                        k().createElement('div', { className: 'loading' })
                      )
                    : null,
                  T
                    ? k().createElement(D, {
                        responses: T,
                        request: r,
                        tryItOutResponse: t,
                        getComponent: i,
                        getConfigs: p,
                        specSelectors: u,
                        oas3Actions: g,
                        oas3Selectors: y,
                        specActions: m,
                        produces: u.producesOptionsFor([v, _]),
                        producesValue: u.currentProducesFor([v, _]),
                        specPath: e.push('responses'),
                        path: v,
                        method: _,
                        displayRequestDuration: O,
                        fn: c,
                      })
                    : null,
                  Q && K.size
                    ? k().createElement(X, { extensions: K, getComponent: i })
                    : null
                )
              )
            );
          }
        }
        class OperationContainer extends N.PureComponent {
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
                docExpansion: s,
                deepLinking: o,
                displayOperationId: l,
                displayRequestDuration: c,
                supportedSubmitMethods: i,
              } = a(),
              p = n.showSummary(),
              m =
                r.getIn(['operation', '__originalOperationId']) ||
                r.getIn(['operation', 'operationId']) ||
                (0, Vn.opId)(r.get('operation'), t.path, t.method) ||
                r.get('id'),
              u = ['operations', t.tag, m],
              d = o && 'false' !== o,
              h =
                i.indexOf(t.method) >= 0 &&
                (void 0 === t.allowTryItOut
                  ? t.specSelectors.allowTryItOutFor(t.path, t.method)
                  : t.allowTryItOut),
              g =
                r.getIn(['operation', 'security']) ||
                t.specSelectors.security();
            return {
              operationId: m,
              isDeepLinkingEnabled: d,
              showSummary: p,
              displayOperationId: l,
              displayRequestDuration: c,
              allowTryItOut: h,
              security: g,
              isAuthorized: t.authSelectors.isAuthorized(g),
              isShown: n.isShown(u, 'full' === s),
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
            t !== this.props.response &&
              this.setState({ executeInProgress: !1 }),
              r && void 0 === n && this.requestResolvedSubtree();
          }
          toggleShown = () => {
            let {
              layoutActions: e,
              tag: t,
              operationId: r,
              isShown: n,
            } = this.props;
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
            const t = this.props.oas3Selectors.selectDefaultRequestBodyValue(
              ...e
            );
            this.props.oas3Actions.setRequestBodyValue({
              value: t,
              pathMethod: e,
            });
          };
          onExecute = () => {
            this.setState({ executeInProgress: !0 });
          };
          getResolvedSubtree = () => {
            const {
              specSelectors: e,
              path: t,
              method: r,
              specPath: n,
            } = this.props;
            return n
              ? e.specResolvedSubtree(n.toJS())
              : e.specResolvedSubtree(['paths', t, r]);
          };
          requestResolvedSubtree = () => {
            const {
              specActions: e,
              path: t,
              method: r,
              specPath: n,
            } = this.props;
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
              isAuthorized: s,
              operationId: o,
              showSummary: l,
              isShown: c,
              jumpToKey: i,
              allowTryItOut: p,
              response: m,
              request: u,
              displayOperationId: d,
              displayRequestDuration: h,
              isDeepLinkingEnabled: g,
              specPath: y,
              specSelectors: f,
              specActions: S,
              getComponent: E,
              getConfigs: v,
              layoutSelectors: _,
              layoutActions: w,
              authActions: b,
              authSelectors: C,
              oas3Actions: x,
              oas3Selectors: O,
              fn: N,
            } = this.props;
            const A = E('operation'),
              q = this.getResolvedSubtree() || (0, I.Map)(),
              j = (0, I.fromJS)({
                op: q,
                tag: t,
                path: r,
                summary: e.getIn(['operation', 'summary']) || '',
                deprecated:
                  q.get('deprecated') ||
                  e.getIn(['operation', 'deprecated']) ||
                  !1,
                method: n,
                security: a,
                isAuthorized: s,
                operationId: o,
                originalOperationId: q.getIn([
                  'operation',
                  '__originalOperationId',
                ]),
                showSummary: l,
                isShown: c,
                jumpToKey: i,
                allowTryItOut: p,
                request: u,
                displayOperationId: d,
                displayRequestDuration: h,
                isDeepLinkingEnabled: g,
                executeInProgress: this.state.executeInProgress,
                tryItOutEnabled: this.state.tryItOutEnabled,
              });
            return k().createElement(A, {
              operation: j,
              response: m,
              request: u,
              isShown: c,
              toggleShown: this.toggleShown,
              onTryoutClick: this.onTryoutClick,
              onResetClick: this.onResetClick,
              onCancelClick: this.onCancelClick,
              onExecute: this.onExecute,
              specPath: y,
              specActions: S,
              specSelectors: f,
              oas3Actions: x,
              oas3Selectors: O,
              layoutActions: w,
              layoutSelectors: _,
              authActions: b,
              authSelectors: C,
              getComponent: E,
              getConfigs: v,
              fn: N,
            });
          }
        }
        const Gn = require('lodash/toString');
        var Yn = __webpack_require__.n(Gn);
        class OperationSummary extends N.PureComponent {
          static defaultProps = {
            operationProps: null,
            specPath: (0, I.List)(),
            summary: '',
          };
          render() {
            let {
                isShown: e,
                toggleShown: t,
                getComponent: r,
                authActions: n,
                authSelectors: a,
                operationProps: s,
                specPath: o,
              } = this.props,
              {
                summary: l,
                isAuthorized: c,
                method: i,
                op: p,
                showSummary: m,
                path: u,
                operationId: d,
                originalOperationId: h,
                displayOperationId: g,
              } = s.toJS(),
              { summary: y } = p,
              f = s.get('security');
            const S = r('authorizeOperationBtn', !0),
              E = r('OperationSummaryMethod'),
              v = r('OperationSummaryPath'),
              _ = r('JumpToPath', !0),
              w = r('CopyToClipboardBtn', !0),
              b = r('ArrowUpIcon'),
              C = r('ArrowDownIcon'),
              x = f && !!f.count(),
              O = x && 1 === f.size && f.first().isEmpty(),
              N = !x || O;
            return k().createElement(
              'div',
              { className: `opblock-summary opblock-summary-${i}` },
              k().createElement(
                'button',
                {
                  'aria-expanded': e,
                  className: 'opblock-summary-control',
                  onClick: t,
                },
                k().createElement(E, { method: i }),
                k().createElement(
                  'div',
                  { className: 'opblock-summary-path-description-wrapper' },
                  k().createElement(v, {
                    getComponent: r,
                    operationProps: s,
                    specPath: o,
                  }),
                  m
                    ? k().createElement(
                        'div',
                        { className: 'opblock-summary-description' },
                        Yn()(y || l)
                      )
                    : null
                ),
                g && (h || d)
                  ? k().createElement(
                      'span',
                      { className: 'opblock-summary-operation-id' },
                      h || d
                    )
                  : null
              ),
              k().createElement(w, { textToCopy: `${o.get(1)}` }),
              N
                ? null
                : k().createElement(S, {
                    isAuthorized: c,
                    onClick: () => {
                      const e = a.definitionsForRequirements(f);
                      n.showDefinitions(e);
                    },
                  }),
              k().createElement(_, { path: o }),
              k().createElement(
                'button',
                {
                  'aria-label': `${i} ${u.replace(/\//g, '​/')}`,
                  className: 'opblock-control-arrow',
                  'aria-expanded': e,
                  tabIndex: '-1',
                  onClick: t,
                },
                e
                  ? k().createElement(b, { className: 'arrow' })
                  : k().createElement(C, { className: 'arrow' })
              )
            );
          }
        }
        class OperationSummaryMethod extends N.PureComponent {
          static defaultProps = { operationProps: null };
          render() {
            let { method: e } = this.props;
            return k().createElement(
              'span',
              { className: 'opblock-summary-method' },
              e.toUpperCase()
            );
          }
        }
        class OperationSummaryPath extends N.PureComponent {
          render() {
            let { getComponent: e, operationProps: t } = this.props,
              {
                deprecated: r,
                isShown: n,
                path: a,
                tag: s,
                operationId: o,
                isDeepLinkingEnabled: l,
              } = t.toJS();
            const c = a.split(/(?=\/)/g);
            for (let e = 1; e < c.length; e += 2)
              c.splice(e, 0, k().createElement('wbr', { key: e }));
            const i = e('DeepLink');
            return k().createElement(
              'span',
              {
                className: r
                  ? 'opblock-summary-path__deprecated'
                  : 'opblock-summary-path',
                'data-path': a,
              },
              k().createElement(i, {
                enabled: l,
                isShown: n,
                path: createDeepLinkPath(`${s}/${o}`),
                text: c,
              })
            );
          }
        }
        const operation_extensions = e => {
            let { extensions: t, getComponent: r } = e,
              n = r('OperationExtRow');
            return k().createElement(
              'div',
              { className: 'opblock-section' },
              k().createElement(
                'div',
                { className: 'opblock-section-header' },
                k().createElement('h4', null, 'Extensions')
              ),
              k().createElement(
                'div',
                { className: 'table-container' },
                k().createElement(
                  'table',
                  null,
                  k().createElement(
                    'thead',
                    null,
                    k().createElement(
                      'tr',
                      null,
                      k().createElement(
                        'td',
                        { className: 'col_header' },
                        'Field'
                      ),
                      k().createElement(
                        'td',
                        { className: 'col_header' },
                        'Value'
                      )
                    )
                  ),
                  k().createElement(
                    'tbody',
                    null,
                    t.entrySeq().map(e => {
                      let [t, r] = e;
                      return k().createElement(n, {
                        key: `${t}-${r}`,
                        xKey: t,
                        xVal: r,
                      });
                    })
                  )
                )
              )
            );
          },
          operation_extension_row = e => {
            let { xKey: t, xVal: r } = e;
            const n = r ? (r.toJS ? r.toJS() : r) : null;
            return k().createElement(
              'tr',
              null,
              k().createElement('td', null, t),
              k().createElement('td', null, JSON.stringify(n))
            );
          },
          Qn = require('classnames');
        var Zn = __webpack_require__.n(Qn);
        const ea = require('js-file-download');
        var ta = __webpack_require__.n(ea);
        const HighlightCode = e => {
          let {
            value: t,
            fileName: r,
            className: n,
            downloadable: a,
            getConfigs: s,
            canCopy: o,
            language: l,
          } = e;
          const c = ee()(s) ? s() : null,
            i =
              !1 !== Ge()(c, 'syntaxHighlight') &&
              Ge()(c, 'syntaxHighlight.activated', !0),
            p = (0, N.useRef)(null);
          (0, N.useEffect)(() => {
            const e = Array.from(p.current.childNodes).filter(
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
              { scrollHeight: n, offsetHeight: a, scrollTop: s } = t;
            n > a &&
              ((0 === s && r < 0) || (a + s >= n && r > 0)) &&
              e.preventDefault();
          };
          return k().createElement(
            'div',
            { className: 'highlight-code', ref: p },
            o &&
              k().createElement(
                'div',
                { className: 'copy-to-clipboard' },
                k().createElement(
                  vt.CopyToClipboard,
                  { text: t },
                  k().createElement('button', null)
                )
              ),
            a
              ? k().createElement(
                  'button',
                  {
                    className: 'download-contents',
                    onClick: () => {
                      ta()(t, r);
                    },
                  },
                  'Download'
                )
              : null,
            i
              ? k().createElement(
                  wt(),
                  {
                    language: l,
                    className: Zn()(n, 'microlight'),
                    style: getStyle(Ge()(c, 'syntaxHighlight.theme', 'agate')),
                  },
                  t
                )
              : k().createElement(
                  'pre',
                  { className: Zn()(n, 'microlight') },
                  t
                )
          );
        };
        HighlightCode.defaultProps = { fileName: 'response.txt' };
        const ra = HighlightCode;
        class Responses extends k().Component {
          static defaultProps = {
            tryItOutResponse: null,
            produces: (0, I.fromJS)(['application/json']),
            displayRequestDuration: !1,
          };
          onChangeProducesWrapper = e =>
            this.props.specActions.changeProducesValue(
              [this.props.path, this.props.method],
              e
            );
          onResponseContentTypeChange = e => {
            let { controlsAcceptHeader: t, value: r } = e;
            const { oas3Actions: n, path: a, method: s } = this.props;
            t && n.setResponseContentType({ value: r, path: a, method: s });
          };
          render() {
            let {
                responses: e,
                tryItOutResponse: t,
                getComponent: r,
                getConfigs: n,
                specSelectors: a,
                fn: s,
                producesValue: o,
                displayRequestDuration: l,
                specPath: c,
                path: i,
                method: p,
                oas3Selectors: m,
                oas3Actions: u,
              } = this.props,
              d = (function defaultStatusCode(e) {
                let t = e.keySeq();
                return t.contains(ie)
                  ? ie
                  : t
                      .filter(e => '2' === (e + '')[0])
                      .sort()
                      .first();
              })(e);
            const h = r('contentType'),
              g = r('liveResponse'),
              y = r('response');
            let f =
              this.props.produces && this.props.produces.size
                ? this.props.produces
                : Responses.defaultProps.produces;
            const S = a.isOAS3()
                ? (function getAcceptControllingResponse(e) {
                    if (!q().OrderedMap.isOrderedMap(e)) return null;
                    if (!e.size) return null;
                    const t = e.find(
                        (e, t) =>
                          t.startsWith('2') &&
                          Object.keys(e.get('content') || {}).length > 0
                      ),
                      r = e.get('default') || q().OrderedMap(),
                      n = (r.get('content') || q().OrderedMap()).keySeq().toJS()
                        .length
                        ? r
                        : null;
                    return t || n;
                  })(e)
                : null,
              E = (function createHtmlReadyId(e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : '_';
                return e.replace(/[^\w-]/g, t);
              })(`${p}${i}_responses`),
              v = `${E}_select`;
            return k().createElement(
              'div',
              { className: 'responses-wrapper' },
              k().createElement(
                'div',
                { className: 'opblock-section-header' },
                k().createElement('h4', null, 'Responses'),
                a.isOAS3()
                  ? null
                  : k().createElement(
                      'label',
                      { htmlFor: v },
                      k().createElement('span', null, 'Response content type'),
                      k().createElement(h, {
                        value: o,
                        ariaControls: E,
                        ariaLabel: 'Response content type',
                        className: 'execute-content-type',
                        contentTypes: f,
                        controlId: v,
                        onChange: this.onChangeProducesWrapper,
                      })
                    )
              ),
              k().createElement(
                'div',
                { className: 'responses-inner' },
                t
                  ? k().createElement(
                      'div',
                      null,
                      k().createElement(g, {
                        response: t,
                        getComponent: r,
                        getConfigs: n,
                        specSelectors: a,
                        path: this.props.path,
                        method: this.props.method,
                        displayRequestDuration: l,
                      }),
                      k().createElement('h4', null, 'Responses')
                    )
                  : null,
                k().createElement(
                  'table',
                  {
                    'aria-live': 'polite',
                    className: 'responses-table',
                    id: E,
                    role: 'region',
                  },
                  k().createElement(
                    'thead',
                    null,
                    k().createElement(
                      'tr',
                      { className: 'responses-header' },
                      k().createElement(
                        'td',
                        { className: 'col_header response-col_status' },
                        'Code'
                      ),
                      k().createElement(
                        'td',
                        { className: 'col_header response-col_description' },
                        'Description'
                      ),
                      a.isOAS3()
                        ? k().createElement(
                            'td',
                            { className: 'col col_header response-col_links' },
                            'Links'
                          )
                        : null
                    )
                  ),
                  k().createElement(
                    'tbody',
                    null,
                    e
                      .entrySeq()
                      .map(e => {
                        let [l, h] = e,
                          g =
                            t && t.get('status') == l ? 'response_current' : '';
                        return k().createElement(y, {
                          key: l,
                          path: i,
                          method: p,
                          specPath: c.push(l),
                          isDefault: d === l,
                          fn: s,
                          className: g,
                          code: l,
                          response: h,
                          specSelectors: a,
                          controlsAcceptHeader: h === S,
                          onContentTypeChange: this.onResponseContentTypeChange,
                          contentType: o,
                          getConfigs: n,
                          activeExamplesKey: m.activeExamplesMember(
                            i,
                            p,
                            'responses',
                            l
                          ),
                          oas3Actions: u,
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
        class Response extends k().Component {
          constructor(e, t) {
            super(e, t), (this.state = { responseContentType: '' });
          }
          static defaultProps = {
            response: (0, I.fromJS)({}),
            onContentTypeChange: () => {},
          };
          _onContentTypeChange = e => {
            const { onContentTypeChange: t, controlsAcceptHeader: r } =
              this.props;
            this.setState({ responseContentType: e }),
              t({ value: e, controlsAcceptHeader: r });
          };
          getTargetExamplesKey = () => {
            const {
                response: e,
                contentType: t,
                activeExamplesKey: r,
              } = this.props,
              n = this.state.responseContentType || t,
              a = e
                .getIn(['content', n], (0, I.Map)({}))
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
                specPath: s,
                fn: o,
                getComponent: l,
                getConfigs: c,
                specSelectors: i,
                contentType: p,
                controlsAcceptHeader: m,
                oas3Actions: u,
              } = this.props,
              { inferSchema: d, getSampleSchema: h } = o,
              g = i.isOAS3();
            const { showExtensions: y } = c();
            let f = y ? getExtensions(n) : null,
              S = n.get('headers'),
              E = n.get('links');
            const v = l('ResponseExtension'),
              _ = l('headers'),
              w = l('highlightCode'),
              b = l('modelExample'),
              C = l('Markdown', !0),
              x = l('operationLink'),
              O = l('contentType'),
              N = l('ExamplesSelect'),
              A = l('Example');
            var q, j;
            const P = this.state.responseContentType || p,
              M = n.getIn(['content', P], (0, I.Map)({})),
              R = M.get('examples', null);
            if (g) {
              const e = M.get('schema');
              (q = e ? d(e.toJS()) : null),
                (j = e
                  ? (0, I.List)([
                      'content',
                      this.state.responseContentType,
                      'schema',
                    ])
                  : s);
            } else
              (q = n.get('schema')),
                (j = n.has('schema') ? s.push('schema') : s);
            let T,
              J,
              $ = !1,
              V = { includeReadOnly: !0 };
            if (g)
              if (((J = M.get('schema')?.toJS()), R)) {
                const e = this.getTargetExamplesKey(),
                  getMediaTypeExample = e => e.get('value');
                (T = getMediaTypeExample(R.get(e, (0, I.Map)({})))),
                  void 0 === T &&
                    (T = getMediaTypeExample(R.values().next().value)),
                  ($ = !0);
              } else
                void 0 !== M.get('example') &&
                  ((T = M.get('example')), ($ = !0));
            else {
              (J = q), (V = { ...V, includeWriteOnly: !0 });
              const e = n.getIn(['examples', P]);
              e && ((T = e), ($ = !0));
            }
            let K = ((e, t, r) => {
              if (null != e) {
                let n = null;
                return (
                  getKnownSyntaxHighlighterLanguage(e) && (n = 'json'),
                  k().createElement(
                    'div',
                    null,
                    k().createElement(t, {
                      className: 'example',
                      getConfigs: r,
                      language: n,
                      value: stringify(e),
                    })
                  )
                );
              }
              return null;
            })(h(J, P, V, $ ? T : void 0), w, c);
            return k().createElement(
              'tr',
              { className: 'response ' + (a || ''), 'data-code': r },
              k().createElement('td', { className: 'response-col_status' }, r),
              k().createElement(
                'td',
                { className: 'response-col_description' },
                k().createElement(
                  'div',
                  { className: 'response-col_description__inner' },
                  k().createElement(C, { source: n.get('description') })
                ),
                y && f.size
                  ? f.entrySeq().map(e => {
                      let [t, r] = e;
                      return k().createElement(v, {
                        key: `${t}-${r}`,
                        xKey: t,
                        xVal: r,
                      });
                    })
                  : null,
                g && n.get('content')
                  ? k().createElement(
                      'section',
                      { className: 'response-controls' },
                      k().createElement(
                        'div',
                        {
                          className: Zn()('response-control-media-type', {
                            'response-control-media-type--accept-controller': m,
                          }),
                        },
                        k().createElement(
                          'small',
                          { className: 'response-control-media-type__title' },
                          'Media type'
                        ),
                        k().createElement(O, {
                          value: this.state.responseContentType,
                          contentTypes: n.get('content')
                            ? n.get('content').keySeq()
                            : (0, I.Seq)(),
                          onChange: this._onContentTypeChange,
                          ariaLabel: 'Media Type',
                        }),
                        m
                          ? k().createElement(
                              'small',
                              {
                                className:
                                  'response-control-media-type__accept-message',
                              },
                              'Controls ',
                              k().createElement('code', null, 'Accept'),
                              ' header.'
                            )
                          : null
                      ),
                      R
                        ? k().createElement(
                            'div',
                            { className: 'response-control-examples' },
                            k().createElement(
                              'small',
                              { className: 'response-control-examples__title' },
                              'Examples'
                            ),
                            k().createElement(N, {
                              examples: R,
                              currentExampleKey: this.getTargetExamplesKey(),
                              onSelect: n =>
                                u.setActiveExamplesMember({
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
                K || q
                  ? k().createElement(b, {
                      specPath: j,
                      getComponent: l,
                      getConfigs: c,
                      specSelectors: i,
                      schema: fromJSOrdered(q),
                      example: K,
                      includeReadOnly: !0,
                    })
                  : null,
                g && R
                  ? k().createElement(A, {
                      example: R.get(
                        this.getTargetExamplesKey(),
                        (0, I.Map)({})
                      ),
                      getComponent: l,
                      getConfigs: c,
                      omitValue: !0,
                    })
                  : null,
                S ? k().createElement(_, { headers: S, getComponent: l }) : null
              ),
              g
                ? k().createElement(
                    'td',
                    { className: 'response-col_links' },
                    E
                      ? E.toSeq()
                          .entrySeq()
                          .map(e => {
                            let [t, r] = e;
                            return k().createElement(x, {
                              key: t,
                              name: t,
                              link: r,
                              getComponent: l,
                            });
                          })
                      : k().createElement('i', null, 'No links')
                  )
                : null
            );
          }
        }
        const response_extension = e => {
            let { xKey: t, xVal: r } = e;
            return k().createElement(
              'div',
              { className: 'response__extension' },
              t,
              ': ',
              String(r)
            );
          },
          na = require('xml-but-prettier');
        var aa = __webpack_require__.n(na);
        const sa = require('lodash/toLower');
        var oa = __webpack_require__.n(sa);
        class ResponseBody extends k().PureComponent {
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
              getComponent: s,
            } = this.props;
            const { parsedContent: o } = this.state,
              l = s('highlightCode'),
              c = 'response_' + new Date().getTime();
            let i, p;
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
                  s = e instanceof Blob ? e : new Blob([e], { type: a }),
                  o = window.URL.createObjectURL(s),
                  l = [a, r.substr(r.lastIndexOf('/') + 1), o].join(':'),
                  c = n['content-disposition'] || n['Content-Disposition'];
                if (void 0 !== c) {
                  let e = (function extractFileNameFromContentDispositionHeader(
                    e
                  ) {
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
                  })(c);
                  null !== e && (l = e);
                }
                p =
                  U.navigator && U.navigator.msSaveOrOpenBlob
                    ? k().createElement(
                        'div',
                        null,
                        k().createElement(
                          'a',
                          {
                            href: o,
                            onClick: () => U.navigator.msSaveOrOpenBlob(s, l),
                          },
                          'Download file'
                        )
                      )
                    : k().createElement(
                        'div',
                        null,
                        k().createElement(
                          'a',
                          { href: o, download: l },
                          'Download file'
                        )
                      );
              } else
                p = k().createElement(
                  'pre',
                  { className: 'microlight' },
                  'Download headers detected but your browser does not support downloading binary via XHR (Blob).'
                );
            else if (/json/i.test(t)) {
              let t = null;
              getKnownSyntaxHighlighterLanguage(e) && (t = 'json');
              try {
                i = JSON.stringify(JSON.parse(e), null, '  ');
              } catch (t) {
                i = "can't parse JSON.  Raw result:\n\n" + e;
              }
              p = k().createElement(l, {
                language: t,
                downloadable: !0,
                fileName: `${c}.json`,
                value: i,
                getConfigs: a,
                canCopy: !0,
              });
            } else
              /xml/i.test(t)
                ? ((i = aa()(e, { textNodesOnSameLine: !0, indentor: '  ' })),
                  (p = k().createElement(l, {
                    downloadable: !0,
                    fileName: `${c}.xml`,
                    value: i,
                    getConfigs: a,
                    canCopy: !0,
                  })))
                : (p =
                    'text/html' === oa()(t) || /text\/plain/.test(t)
                      ? k().createElement(l, {
                          downloadable: !0,
                          fileName: `${c}.html`,
                          value: e,
                          getConfigs: a,
                          canCopy: !0,
                        })
                      : 'text/csv' === oa()(t) || /text\/csv/.test(t)
                      ? k().createElement(l, {
                          downloadable: !0,
                          fileName: `${c}.csv`,
                          value: e,
                          getConfigs: a,
                          canCopy: !0,
                        })
                      : /^image\//i.test(t)
                      ? t.includes('svg')
                        ? k().createElement('div', null, ' ', e, ' ')
                        : k().createElement('img', {
                            src: window.URL.createObjectURL(e),
                          })
                      : /^audio\//i.test(t)
                      ? k().createElement(
                          'pre',
                          { className: 'microlight' },
                          k().createElement(
                            'audio',
                            { controls: !0, key: r },
                            k().createElement('source', { src: r, type: t })
                          )
                        )
                      : 'string' == typeof e
                      ? k().createElement(l, {
                          downloadable: !0,
                          fileName: `${c}.txt`,
                          value: e,
                          getConfigs: a,
                          canCopy: !0,
                        })
                      : e.size > 0
                      ? o
                        ? k().createElement(
                            'div',
                            null,
                            k().createElement(
                              'p',
                              { className: 'i' },
                              'Unrecognized response type; displaying content as text.'
                            ),
                            k().createElement(l, {
                              downloadable: !0,
                              fileName: `${c}.txt`,
                              value: o,
                              getConfigs: a,
                              canCopy: !0,
                            })
                          )
                        : k().createElement(
                            'p',
                            { className: 'i' },
                            'Unrecognized response type; unable to display.'
                          )
                      : null);
            return p
              ? k().createElement(
                  'div',
                  null,
                  k().createElement('h5', null, 'Response body'),
                  p
                )
              : null;
          }
        }
        class Parameters extends N.Component {
          constructor(e) {
            super(e),
              (this.state = { callbackVisible: !1, parametersVisible: !0 });
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
              { specActions: n, oas3Selectors: a, oas3Actions: s } = this.props;
            const o = a.hasUserEditedBody(...r),
              l = a.shouldRetainRequestBodyValue(...r);
            s.setRequestContentType({ value: t, pathMethod: r }),
              s.initRequestBodyValidateError({ pathMethod: r }),
              o ||
                (l || s.setRequestBodyValue({ value: void 0, pathMethod: r }),
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
              specPath: s,
              fn: o,
              getComponent: l,
              getConfigs: c,
              specSelectors: i,
              specActions: p,
              pathMethod: m,
              oas3Actions: u,
              oas3Selectors: d,
              operation: h,
            } = this.props;
            const g = l('parameterRow'),
              y = l('TryItOutButton'),
              f = l('contentType'),
              S = l('Callbacks', !0),
              E = l('RequestBody', !0),
              v = a && n,
              _ = i.isOAS3(),
              w = h.get('requestBody'),
              b = Object.values(
                r.reduce((e, t) => {
                  const r = t.get('in');
                  return (e[r] ??= []), e[r].push(t), e;
                }, {})
              ).reduce((e, t) => e.concat(t), []);
            return k().createElement(
              'div',
              { className: 'opblock-section' },
              k().createElement(
                'div',
                { className: 'opblock-section-header' },
                _
                  ? k().createElement(
                      'div',
                      { className: 'tab-header' },
                      k().createElement(
                        'div',
                        {
                          onClick: () => this.toggleTab('parameters'),
                          className: `tab-item ${
                            this.state.parametersVisible && 'active'
                          }`,
                        },
                        k().createElement(
                          'h4',
                          { className: 'opblock-title' },
                          k().createElement('span', null, 'Parameters')
                        )
                      ),
                      h.get('callbacks')
                        ? k().createElement(
                            'div',
                            {
                              onClick: () => this.toggleTab('callbacks'),
                              className: `tab-item ${
                                this.state.callbackVisible && 'active'
                              }`,
                            },
                            k().createElement(
                              'h4',
                              { className: 'opblock-title' },
                              k().createElement('span', null, 'Callbacks')
                            )
                          )
                        : null
                    )
                  : k().createElement(
                      'div',
                      { className: 'tab-header' },
                      k().createElement(
                        'h4',
                        { className: 'opblock-title' },
                        'Parameters'
                      )
                    ),
                n
                  ? k().createElement(y, {
                      isOAS3: i.isOAS3(),
                      hasUserEditedBody: d.hasUserEditedBody(...m),
                      enabled: a,
                      onCancelClick: this.props.onCancelClick,
                      onTryoutClick: e,
                      onResetClick: () => t(m),
                    })
                  : null
              ),
              this.state.parametersVisible
                ? k().createElement(
                    'div',
                    { className: 'parameters-container' },
                    b.length
                      ? k().createElement(
                          'div',
                          { className: 'table-container' },
                          k().createElement(
                            'table',
                            { className: 'parameters' },
                            k().createElement(
                              'thead',
                              null,
                              k().createElement(
                                'tr',
                                null,
                                k().createElement(
                                  'th',
                                  {
                                    className: 'col_header parameters-col_name',
                                  },
                                  'Name'
                                ),
                                k().createElement(
                                  'th',
                                  {
                                    className:
                                      'col_header parameters-col_description',
                                  },
                                  'Description'
                                )
                              )
                            ),
                            k().createElement(
                              'tbody',
                              null,
                              b.map((e, t) =>
                                k().createElement(g, {
                                  fn: o,
                                  specPath: s.push(t.toString()),
                                  getComponent: l,
                                  getConfigs: c,
                                  rawParam: e,
                                  param: i.parameterWithMetaByIdentity(m, e),
                                  key: `${e.get('in')}.${e.get('name')}`,
                                  onChange: this.onChange,
                                  onChangeConsumes:
                                    this.onChangeConsumesWrapper,
                                  specSelectors: i,
                                  specActions: p,
                                  oas3Actions: u,
                                  oas3Selectors: d,
                                  pathMethod: m,
                                  isExecute: v,
                                })
                              )
                            )
                          )
                        )
                      : k().createElement(
                          'div',
                          { className: 'opblock-description-wrapper' },
                          k().createElement('p', null, 'No parameters')
                        )
                  )
                : null,
              this.state.callbackVisible
                ? k().createElement(
                    'div',
                    {
                      className:
                        'callbacks-container opblock-description-wrapper',
                    },
                    k().createElement(S, {
                      callbacks: (0, I.Map)(h.get('callbacks')),
                      specPath: s.slice(0, -1).push('callbacks'),
                    })
                  )
                : null,
              _ &&
                w &&
                this.state.parametersVisible &&
                k().createElement(
                  'div',
                  { className: 'opblock-section opblock-section-request-body' },
                  k().createElement(
                    'div',
                    { className: 'opblock-section-header' },
                    k().createElement(
                      'h4',
                      {
                        className: `opblock-title parameter__name ${
                          w.get('required') && 'required'
                        }`,
                      },
                      'Request body'
                    ),
                    k().createElement(
                      'label',
                      null,
                      k().createElement(f, {
                        value: d.requestContentType(...m),
                        contentTypes: w.get('content', (0, I.List)()).keySeq(),
                        onChange: e => {
                          this.onChangeMediaType({ value: e, pathMethod: m });
                        },
                        className: 'body-param-content-type',
                        ariaLabel: 'Request content type',
                      })
                    )
                  ),
                  k().createElement(
                    'div',
                    { className: 'opblock-description-wrapper' },
                    k().createElement(E, {
                      setRetainRequestBodyValueFlag: e =>
                        u.setRetainRequestBodyValueFlag({
                          value: e,
                          pathMethod: m,
                        }),
                      userHasEditedBody: d.hasUserEditedBody(...m),
                      specPath: s.slice(0, -1).push('requestBody'),
                      requestBody: w,
                      requestBodyValue: d.requestBodyValue(...m),
                      requestBodyInclusionSetting:
                        d.requestBodyInclusionSetting(...m),
                      requestBodyErrors: d.requestBodyErrors(...m),
                      isExecute: v,
                      getConfigs: c,
                      activeExamplesKey: d.activeExamplesMember(
                        ...m,
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
                          const r = d.requestBodyValue(...m),
                            n = I.Map.isMap(r) ? r : (0, I.Map)();
                          return u.setRequestBodyValue({
                            pathMethod: m,
                            value: n.setIn(t, e),
                          });
                        }
                        u.setRequestBodyValue({ value: e, pathMethod: m });
                      },
                      onChangeIncludeEmpty: (e, t) => {
                        u.setRequestBodyInclusion({
                          pathMethod: m,
                          value: t,
                          name: e,
                        });
                      },
                      contentType: d.requestContentType(...m),
                    })
                  )
                )
            );
          }
        }
        const parameter_extension = e => {
            let { xKey: t, xVal: r } = e;
            return k().createElement(
              'div',
              { className: 'parameter__extension' },
              t,
              ': ',
              String(r)
            );
          },
          la = { onChange: () => {}, isIncludedOptions: {} };
        class ParameterIncludeEmpty extends N.Component {
          static defaultProps = la;
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
            return k().createElement(
              'div',
              null,
              k().createElement(
                'label',
                {
                  className: Zn()('parameter__empty_value_toggle', {
                    disabled: t,
                  }),
                },
                k().createElement('input', {
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
        class ParameterRow extends N.Component {
          constructor(e, t) {
            super(e, t), this.setDefaultValue();
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t,
              { specSelectors: r, pathMethod: n, rawParam: a } = e,
              s = r.isOAS3(),
              o = r.parameterWithMetaByIdentity(n, a) || new I.Map();
            if (((o = o.isEmpty() ? a : o), s)) {
              let { schema: e } = getParameterSchema(o, { isOAS3: s });
              t = e ? e.get('enum') : void 0;
            } else t = o ? o.get('enum') : void 0;
            let l,
              c = o ? o.get('value') : void 0;
            void 0 !== c
              ? (l = c)
              : a.get('required') && t && t.size && (l = t.first()),
              void 0 !== l &&
                l !== c &&
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
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                { onChange: a, rawParam: s } = e.props;
              return (
                (r = '' === t || (t && 0 === t.size) ? null : t), a(s, r, n)
              );
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
              s = r.get('in');
            return t.updateEmptyParamInclusion(n, a, s, e);
          };
          setDefaultValue = () => {
            let {
              specSelectors: e,
              pathMethod: t,
              rawParam: r,
              oas3Selectors: n,
              fn: a,
            } = this.props;
            const s = e.parameterWithMetaByIdentity(t, r) || (0, I.Map)(),
              { schema: o } = getParameterSchema(s, { isOAS3: e.isOAS3() }),
              l = s
                .get('content', (0, I.Map)())
                .keySeq()
                .first(),
              c = o
                ? a.getSampleSchema(o.toJS(), l, { includeWriteOnly: !0 })
                : null;
            if (s && void 0 === s.get('value') && 'body' !== s.get('in')) {
              let r;
              if (e.isSwagger2())
                r =
                  void 0 !== s.get('x-example')
                    ? s.get('x-example')
                    : void 0 !== s.getIn(['schema', 'example'])
                    ? s.getIn(['schema', 'example'])
                    : o && o.getIn(['default']);
              else if (e.isOAS3()) {
                const e = n.activeExamplesMember(
                  ...t,
                  'parameters',
                  this.getParamKey()
                );
                r =
                  void 0 !== s.getIn(['examples', e, 'value'])
                    ? s.getIn(['examples', e, 'value'])
                    : void 0 !== s.getIn(['content', l, 'example'])
                    ? s.getIn(['content', l, 'example'])
                    : void 0 !== s.get('example')
                    ? s.get('example')
                    : void 0 !== (o && o.get('example'))
                    ? o && o.get('example')
                    : void 0 !== (o && o.get('default'))
                    ? o && o.get('default')
                    : s.get('default');
              }
              void 0 === r || I.List.isList(r) || (r = stringify(r)),
                void 0 !== r
                  ? this.onChangeWrapper(r)
                  : o &&
                    'object' === o.get('type') &&
                    c &&
                    !s.get('examples') &&
                    this.onChangeWrapper(I.List.isList(c) ? c : stringify(c));
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
                fn: s,
                onChangeConsumes: o,
                specSelectors: l,
                pathMethod: c,
                specPath: i,
                oas3Selectors: p,
              } = this.props,
              m = l.isOAS3();
            const { showExtensions: u, showCommonExtensions: d } = n();
            if ((e || (e = t), !t)) return null;
            const h = r('JsonSchemaForm'),
              g = r('ParamBody');
            let y = e.get('in'),
              f =
                'body' !== y
                  ? null
                  : k().createElement(g, {
                      getComponent: r,
                      getConfigs: n,
                      fn: s,
                      param: e,
                      consumes: l.consumesOptionsFor(c),
                      consumesValue: l
                        .contentTypeValues(c)
                        .get('requestContentType'),
                      onChange: this.onChangeWrapper,
                      onChangeConsumes: o,
                      isExecute: a,
                      specSelectors: l,
                      pathMethod: c,
                    });
            const S = r('modelExample'),
              E = r('Markdown', !0),
              v = r('ParameterExt'),
              _ = r('ParameterIncludeEmpty'),
              w = r('ExamplesSelectValueRetainer'),
              b = r('Example');
            let C,
              x,
              O,
              N,
              { schema: A } = getParameterSchema(e, { isOAS3: m }),
              q = l.parameterWithMetaByIdentity(c, t) || (0, I.Map)(),
              j = A ? A.get('format') : null,
              P = A ? A.get('type') : null,
              M = A ? A.getIn(['items', 'type']) : null,
              R = 'formData' === y,
              T = 'FormData' in U,
              J = e.get('required'),
              $ = q ? q.get('value') : '',
              V = d ? getCommonExtensions(A) : null,
              K = u ? getExtensions(e) : null,
              D = !1;
            return (
              void 0 !== e && A && (C = A.get('items')),
              void 0 !== C
                ? ((x = C.get('enum')), (O = C.get('default')))
                : A && (x = A.get('enum')),
              x && x.size && x.size > 0 && (D = !0),
              void 0 !== e &&
                (A && (O = A.get('default')),
                void 0 === O && (O = e.get('default')),
                (N = e.get('example')),
                void 0 === N && (N = e.get('x-example'))),
              k().createElement(
                'tr',
                {
                  'data-param-name': e.get('name'),
                  'data-param-in': e.get('in'),
                },
                k().createElement(
                  'td',
                  { className: 'parameters-col_name' },
                  k().createElement(
                    'div',
                    {
                      className: J
                        ? 'parameter__name required'
                        : 'parameter__name',
                    },
                    e.get('name'),
                    J ? k().createElement('span', null, ' *') : null
                  ),
                  k().createElement(
                    'div',
                    { className: 'parameter__type' },
                    P,
                    M && `[${M}]`,
                    j &&
                      k().createElement(
                        'span',
                        { className: 'prop-format' },
                        '($',
                        j,
                        ')'
                      )
                  ),
                  k().createElement(
                    'div',
                    { className: 'parameter__deprecated' },
                    m && e.get('deprecated') ? 'deprecated' : null
                  ),
                  k().createElement(
                    'div',
                    { className: 'parameter__in' },
                    '(',
                    e.get('in'),
                    ')'
                  ),
                  d && V.size
                    ? V.entrySeq().map(e => {
                        let [t, r] = e;
                        return k().createElement(v, {
                          key: `${t}-${r}`,
                          xKey: t,
                          xVal: r,
                        });
                      })
                    : null,
                  u && K.size
                    ? K.entrySeq().map(e => {
                        let [t, r] = e;
                        return k().createElement(v, {
                          key: `${t}-${r}`,
                          xKey: t,
                          xVal: r,
                        });
                      })
                    : null
                ),
                k().createElement(
                  'td',
                  { className: 'parameters-col_description' },
                  e.get('description')
                    ? k().createElement(E, { source: e.get('description') })
                    : null,
                  (!f && a) || !D
                    ? null
                    : k().createElement(E, {
                        className: 'parameter__enum',
                        source:
                          '<i>Available values</i> : ' +
                          x
                            .map(function (e) {
                              return e;
                            })
                            .toArray()
                            .join(', '),
                      }),
                  (!f && a) || void 0 === O
                    ? null
                    : k().createElement(E, {
                        className: 'parameter__default',
                        source: '<i>Default value</i> : ' + O,
                      }),
                  (!f && a) || void 0 === N
                    ? null
                    : k().createElement(E, { source: '<i>Example</i> : ' + N }),
                  R &&
                    !T &&
                    k().createElement(
                      'div',
                      null,
                      'Error: your browser does not support FormData'
                    ),
                  m && e.get('examples')
                    ? k().createElement(
                        'section',
                        { className: 'parameter-controls' },
                        k().createElement(w, {
                          examples: e.get('examples'),
                          onSelect: this._onExampleSelect,
                          updateValue: this.onChangeWrapper,
                          getComponent: r,
                          defaultToFirstExample: !0,
                          currentKey: p.activeExamplesMember(
                            ...c,
                            'parameters',
                            this.getParamKey()
                          ),
                          currentUserInputValue: $,
                        })
                      )
                    : null,
                  f
                    ? null
                    : k().createElement(h, {
                        fn: s,
                        getComponent: r,
                        value: $,
                        required: J,
                        disabled: !a,
                        description: e.get('name'),
                        onChange: this.onChangeWrapper,
                        errors: q.get('errors'),
                        schema: A,
                      }),
                  f && A
                    ? k().createElement(S, {
                        getComponent: r,
                        specPath: i.push('schema'),
                        getConfigs: n,
                        isExecute: a,
                        specSelectors: l,
                        schema: A,
                        example: f,
                        includeWriteOnly: !0,
                      })
                    : null,
                  !f && a && e.get('allowEmptyValue')
                    ? k().createElement(_, {
                        onChange: this.onChangeIncludeEmpty,
                        isIncluded: l.parameterInclusionSettingFor(
                          c,
                          e.get('name'),
                          e.get('in')
                        ),
                        isDisabled: !isEmptyValue($),
                      })
                    : null,
                  m && e.get('examples')
                    ? k().createElement(b, {
                        example: e.getIn([
                          'examples',
                          p.activeExamplesMember(
                            ...c,
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
        class Execute extends N.Component {
          handleValidateParameters = () => {
            let {
              specSelectors: e,
              specActions: t,
              path: r,
              method: n,
            } = this.props;
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
              s = { missingBodyValue: !1, missingRequiredKeys: [] };
            a.clearRequestBodyValidateError({ path: e, method: t });
            let o = r.getOAS3RequiredRequestBodyContentType([e, t]),
              l = n.requestBodyValue(e, t),
              c = n.validateBeforeExecute([e, t]),
              i = n.requestContentType(e, t);
            if (!c)
              return (
                (s.missingBodyValue = !0),
                a.setRequestBodyValidateError({
                  path: e,
                  method: t,
                  validationErrors: s,
                }),
                !1
              );
            if (!o) return !0;
            let p = n.validateShallowRequired({
              oas3RequiredRequestBodyContentType: o,
              oas3RequestContentType: i,
              oas3RequestBodyValue: l,
            });
            return (
              !p ||
              p.length < 1 ||
              (p.forEach(e => {
                s.missingRequiredKeys.push(e);
              }),
              a.setRequestBodyValidateError({
                path: e,
                method: t,
                validationErrors: s,
              }),
              !1)
            );
          };
          handleValidationResultPass = () => {
            let {
              specActions: e,
              operation: t,
              path: r,
              method: n,
            } = this.props;
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
            e
              ? this.handleValidationResultPass()
              : this.handleValidationResultFail();
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
            return k().createElement(
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
        class headers_Headers extends k().Component {
          render() {
            let { headers: e, getComponent: t } = this.props;
            const r = t('Property'),
              n = t('Markdown', !0);
            return e && e.size
              ? k().createElement(
                  'div',
                  { className: 'headers-wrapper' },
                  k().createElement(
                    'h4',
                    { className: 'headers__title' },
                    'Headers:'
                  ),
                  k().createElement(
                    'table',
                    { className: 'headers' },
                    k().createElement(
                      'thead',
                      null,
                      k().createElement(
                        'tr',
                        { className: 'header-row' },
                        k().createElement(
                          'th',
                          { className: 'header-col' },
                          'Name'
                        ),
                        k().createElement(
                          'th',
                          { className: 'header-col' },
                          'Description'
                        ),
                        k().createElement(
                          'th',
                          { className: 'header-col' },
                          'Type'
                        )
                      )
                    ),
                    k().createElement(
                      'tbody',
                      null,
                      e
                        .entrySeq()
                        .map(e => {
                          let [t, a] = e;
                          if (!q().Map.isMap(a)) return null;
                          const s = a.get('description'),
                            o = a.getIn(['schema'])
                              ? a.getIn(['schema', 'type'])
                              : a.getIn(['type']),
                            l = a.getIn(['schema', 'example']);
                          return k().createElement(
                            'tr',
                            { key: t },
                            k().createElement(
                              'td',
                              { className: 'header-col' },
                              t
                            ),
                            k().createElement(
                              'td',
                              { className: 'header-col' },
                              s ? k().createElement(n, { source: s }) : null
                            ),
                            k().createElement(
                              'td',
                              { className: 'header-col' },
                              o,
                              ' ',
                              l
                                ? k().createElement(r, {
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
        class Errors extends k().Component {
          render() {
            let {
              editorActions: e,
              errSelectors: t,
              layoutSelectors: r,
              layoutActions: n,
              getComponent: a,
            } = this.props;
            const s = a('Collapse');
            if (e && e.jumpToLine) var o = e.jumpToLine;
            let l = t
              .allErrors()
              .filter(
                e => 'thrown' === e.get('type') || 'error' === e.get('level')
              );
            if (!l || l.count() < 1) return null;
            let c = r.isShown(['errorPane'], !0),
              i = l.sortBy(e => e.get('line'));
            return k().createElement(
              'pre',
              { className: 'errors-wrapper' },
              k().createElement(
                'hgroup',
                { className: 'error' },
                k().createElement(
                  'h4',
                  { className: 'errors__title' },
                  'Errors'
                ),
                k().createElement(
                  'button',
                  {
                    className: 'btn errors__clear-btn',
                    onClick: () => n.show(['errorPane'], !c),
                  },
                  c ? 'Hide' : 'Show'
                )
              ),
              k().createElement(
                s,
                { isOpened: c, animated: !0 },
                k().createElement(
                  'div',
                  { className: 'errors' },
                  i.map((e, t) => {
                    let r = e.get('type');
                    return 'thrown' === r || 'auth' === r
                      ? k().createElement(ThrownErrorItem, {
                          key: t,
                          error: e.get('error') || e,
                          jumpToLine: o,
                        })
                      : 'spec' === r
                      ? k().createElement(SpecErrorItem, {
                          key: t,
                          error: e,
                          jumpToLine: o,
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
            return k().createElement(
              'div',
              { className: 'error-wrapper' },
              t
                ? k().createElement(
                    'div',
                    null,
                    k().createElement(
                      'h4',
                      null,
                      t.get('source') && t.get('level')
                        ? toTitleCase(t.get('source')) + ' ' + t.get('level')
                        : '',
                      t.get('path')
                        ? k().createElement(
                            'small',
                            null,
                            ' at ',
                            t.get('path')
                          )
                        : null
                    ),
                    k().createElement(
                      'span',
                      { className: 'message thrown' },
                      t.get('message')
                    ),
                    k().createElement(
                      'div',
                      { className: 'error-line' },
                      n && r
                        ? k().createElement(
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
                ? (n = I.List.isList(t.get('path'))
                    ? k().createElement(
                        'small',
                        null,
                        'at ',
                        t.get('path').join('.')
                      )
                    : k().createElement('small', null, 'at ', t.get('path')))
                : t.get('line') &&
                  !r &&
                  (n = k().createElement(
                    'small',
                    null,
                    'on line ',
                    t.get('line')
                  )),
              k().createElement(
                'div',
                { className: 'error-wrapper' },
                t
                  ? k().createElement(
                      'div',
                      null,
                      k().createElement(
                        'h4',
                        null,
                        toTitleCase(t.get('source')) + ' ' + t.get('level'),
                        ' ',
                        n
                      ),
                      k().createElement(
                        'span',
                        { className: 'message' },
                        t.get('message')
                      ),
                      k().createElement(
                        'div',
                        { className: 'error-line' },
                        r
                          ? k().createElement(
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
        class ContentType extends k().Component {
          static defaultProps = {
            onChange: content_type_noop,
            value: null,
            contentTypes: (0, I.fromJS)(['application/json']),
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
              value: s,
            } = this.props;
            return n && n.size
              ? k().createElement(
                  'div',
                  { className: 'content-type-wrapper ' + (r || '') },
                  k().createElement(
                    'select',
                    {
                      'aria-controls': e,
                      'aria-label': t,
                      className: 'content-type',
                      id: a,
                      onChange: this.onChangeWrapper,
                      value: s || '',
                    },
                    n
                      .map(e =>
                        k().createElement('option', { key: e, value: e }, e)
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
        class Container extends k().Component {
          render() {
            let { fullscreen: e, full: t, ...r } = this.props;
            if (e) return k().createElement('section', r);
            let n = 'swagger-container' + (t ? '-full' : '');
            return k().createElement(
              'section',
              rt()({}, r, { className: xclass(r.className, n) })
            );
          }
        }
        const ca = {
          mobile: '',
          tablet: '-tablet',
          desktop: '-desktop',
          large: '-hd',
        };
        class Col extends k().Component {
          render() {
            const {
              hide: e,
              keepContents: t,
              mobile: r,
              tablet: n,
              desktop: a,
              large: s,
              ...o
            } = this.props;
            if (e && !t) return k().createElement('span', null);
            let l = [];
            for (let e in ca) {
              if (!Object.prototype.hasOwnProperty.call(ca, e)) continue;
              let t = ca[e];
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
            let c = xclass(o.className, ...l);
            return k().createElement('section', rt()({}, o, { className: c }));
          }
        }
        class Row extends k().Component {
          render() {
            return k().createElement(
              'div',
              rt()({}, this.props, {
                className: xclass(this.props.className, 'wrapper'),
              })
            );
          }
        }
        class Button extends k().Component {
          static defaultProps = { className: '' };
          render() {
            return k().createElement(
              'button',
              rt()({}, this.props, {
                className: xclass(this.props.className, 'button'),
              })
            );
          }
        }
        const TextArea = e => k().createElement('textarea', e),
          Input = e => k().createElement('input', e);
        class Select extends k().Component {
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
            return k().createElement(
              'select',
              {
                className: this.props.className,
                multiple: t,
                value: a,
                onChange: this.onChange,
                disabled: n,
              },
              r ? k().createElement('option', { value: '' }, '--') : null,
              e.map(function (e, t) {
                return k().createElement(
                  'option',
                  { key: t, value: String(e) },
                  String(e)
                );
              })
            );
          }
        }
        class Link extends k().Component {
          render() {
            return k().createElement(
              'a',
              rt()({}, this.props, {
                rel: 'noopener noreferrer',
                className: xclass(this.props.className, 'link'),
              })
            );
          }
        }
        const NoMargin = e => {
          let { children: t } = e;
          return k().createElement(
            'div',
            { className: 'no-margin' },
            ' ',
            t,
            ' '
          );
        };
        class Collapse extends k().Component {
          static defaultProps = { isOpened: !1, animated: !1 };
          renderNotAnimated() {
            return this.props.isOpened
              ? k().createElement(NoMargin, null, this.props.children)
              : k().createElement('noscript', null);
          }
          render() {
            let { animated: e, isOpened: t, children: r } = this.props;
            return e
              ? ((r = t ? r : null), k().createElement(NoMargin, null, r))
              : this.renderNotAnimated();
          }
        }
        class Overview extends k().Component {
          constructor() {
            super(...arguments),
              (this.setTagShown = this._setTagShown.bind(this));
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
            const s = n('Collapse');
            return k().createElement(
              'div',
              null,
              k().createElement(
                'h4',
                { className: 'overview-title' },
                'Overview'
              ),
              a
                .map((e, n) => {
                  let a = e.get('operations'),
                    o = ['overview-tags', n],
                    l = t.isShown(o, !0);
                  return k().createElement(
                    'div',
                    { key: 'overview-' + n },
                    k().createElement(
                      'h4',
                      {
                        onClick: () => r.show(o, !l),
                        className: 'link overview-tag',
                      },
                      ' ',
                      l ? '-' : '+',
                      n
                    ),
                    k().createElement(
                      s,
                      { isOpened: l, animated: !0 },
                      a
                        .map(e => {
                          let { path: n, method: a, id: s } = e.toObject(),
                            o = 'operations',
                            l = s,
                            c = t.isShown([o, l]);
                          return k().createElement(OperationLink, {
                            key: s,
                            path: n,
                            method: a,
                            id: n + '-' + a,
                            shown: c,
                            showOpId: l,
                            showOpIdPrefix: o,
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
                k().createElement(
                  'h3',
                  null,
                  ' No operations defined in spec! '
                )
            );
          }
        }
        class OperationLink extends k().Component {
          constructor(e) {
            super(e), (this.onClick = this._onClick.bind(this));
          }
          _onClick() {
            let {
              showOpId: e,
              showOpIdPrefix: t,
              onClick: r,
              shown: n,
            } = this.props;
            r([t, e], !n);
          }
          render() {
            let { id: e, method: t, shown: r, href: n } = this.props;
            return k().createElement(
              Link,
              {
                href: n,
                onClick: this.onClick,
                className: 'block opblock-link ' + (r ? 'shown' : ''),
              },
              k().createElement(
                'div',
                null,
                k().createElement(
                  'small',
                  { className: `bold-label-${t}` },
                  t.toUpperCase()
                ),
                k().createElement('span', { className: 'bold-label' }, e)
              )
            );
          }
        }
        class InitializedInput extends k().Component {
          componentDidMount() {
            this.props.initialValue &&
              (this.inputRef.value = this.props.initialValue);
          }
          render() {
            const {
              value: e,
              defaultValue: t,
              initialValue: r,
              ...n
            } = this.props;
            return k().createElement(
              'input',
              rt()({}, n, { ref: e => (this.inputRef = e) })
            );
          }
        }
        class InfoBasePath extends k().Component {
          render() {
            const { host: e, basePath: t } = this.props;
            return k().createElement(
              'pre',
              { className: 'base-url' },
              '[ Base URL: ',
              e,
              t,
              ' ]'
            );
          }
        }
        class InfoUrl extends k().PureComponent {
          render() {
            const { url: e, getComponent: t } = this.props,
              r = t('Link');
            return k().createElement(
              r,
              { target: '_blank', href: sanitizeUrl(e) },
              k().createElement('span', { className: 'url' }, ' ', e)
            );
          }
        }
        class Info extends k().Component {
          render() {
            const {
                info: e,
                url: t,
                host: r,
                basePath: n,
                getComponent: a,
                externalDocs: s,
                selectedServer: o,
                url: l,
              } = this.props,
              c = e.get('version'),
              i = e.get('description'),
              p = e.get('title'),
              m = safeBuildUrl(e.get('termsOfService'), l, {
                selectedServer: o,
              }),
              u = e.get('contact'),
              d = e.get('license'),
              h = safeBuildUrl(s && s.get('url'), l, { selectedServer: o }),
              g = s && s.get('description'),
              y = a('Markdown', !0),
              f = a('Link'),
              S = a('VersionStamp'),
              E = a('OpenAPIVersion'),
              v = a('InfoUrl'),
              _ = a('InfoBasePath'),
              w = a('License'),
              b = a('Contact');
            return k().createElement(
              'div',
              { className: 'info' },
              k().createElement(
                'hgroup',
                { className: 'main' },
                k().createElement(
                  'h2',
                  { className: 'title' },
                  p,
                  k().createElement(
                    'span',
                    null,
                    c && k().createElement(S, { version: c }),
                    k().createElement(E, { oasVersion: '2.0' })
                  )
                ),
                r || n ? k().createElement(_, { host: r, basePath: n }) : null,
                t && k().createElement(v, { getComponent: a, url: t })
              ),
              k().createElement(
                'div',
                { className: 'description' },
                k().createElement(y, { source: i })
              ),
              m &&
                k().createElement(
                  'div',
                  { className: 'info__tos' },
                  k().createElement(
                    f,
                    { target: '_blank', href: sanitizeUrl(m) },
                    'Terms of service'
                  )
                ),
              u?.size > 0 &&
                k().createElement(b, {
                  getComponent: a,
                  data: u,
                  selectedServer: o,
                  url: t,
                }),
              d?.size > 0 &&
                k().createElement(w, {
                  getComponent: a,
                  license: d,
                  selectedServer: o,
                  url: t,
                }),
              h
                ? k().createElement(
                    f,
                    {
                      className: 'info__extdocs',
                      target: '_blank',
                      href: sanitizeUrl(h),
                    },
                    g || h
                  )
                : null
            );
          }
        }
        const ia = Info;
        class InfoContainer extends k().Component {
          render() {
            const {
                specSelectors: e,
                getComponent: t,
                oas3Selectors: r,
              } = this.props,
              n = e.info(),
              a = e.url(),
              s = e.basePath(),
              o = e.host(),
              l = e.externalDocs(),
              c = r.selectedServer(),
              i = t('info');
            return k().createElement(
              'div',
              null,
              n && n.count()
                ? k().createElement(i, {
                    info: n,
                    url: a,
                    host: o,
                    basePath: s,
                    externalDocs: l,
                    getComponent: t,
                    selectedServer: c,
                  })
                : null
            );
          }
        }
        class Contact extends k().Component {
          render() {
            const {
                data: e,
                getComponent: t,
                selectedServer: r,
                url: n,
              } = this.props,
              a = e.get('name', 'the developer'),
              s = safeBuildUrl(e.get('url'), n, { selectedServer: r }),
              o = e.get('email'),
              l = t('Link');
            return k().createElement(
              'div',
              { className: 'info__contact' },
              s &&
                k().createElement(
                  'div',
                  null,
                  k().createElement(
                    l,
                    { href: sanitizeUrl(s), target: '_blank' },
                    a,
                    ' - Website'
                  )
                ),
              o &&
                k().createElement(
                  l,
                  { href: sanitizeUrl(`mailto:${o}`) },
                  s ? `Send email to ${a}` : `Contact ${a}`
                )
            );
          }
        }
        const pa = Contact;
        class License extends k().Component {
          render() {
            const {
                license: e,
                getComponent: t,
                selectedServer: r,
                url: n,
              } = this.props,
              a = e.get('name', 'License'),
              s = safeBuildUrl(e.get('url'), n, { selectedServer: r }),
              o = t('Link');
            return k().createElement(
              'div',
              { className: 'info__license' },
              s
                ? k().createElement(
                    'div',
                    { className: 'info__license__url' },
                    k().createElement(
                      o,
                      { target: '_blank', href: sanitizeUrl(s) },
                      a
                    )
                  )
                : k().createElement('span', null, a)
            );
          }
        }
        const ma = License;
        class JumpToPath extends k().Component {
          render() {
            return null;
          }
        }
        class CopyToClipboardBtn extends k().Component {
          render() {
            let { getComponent: e } = this.props;
            const t = e('CopyIcon');
            return k().createElement(
              'div',
              {
                className: 'view-line-link copy-to-clipboard',
                title: 'Copy to clipboard',
              },
              k().createElement(
                vt.CopyToClipboard,
                { text: this.props.textToCopy },
                k().createElement(t, null)
              )
            );
          }
        }
        class Footer extends k().Component {
          render() {
            return k().createElement('div', { className: 'footer' });
          }
        }
        class FilterContainer extends k().Component {
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
              s = 'failed' === e.loadingStatus(),
              o = t.currentFilter(),
              l = ['operation-filter-input'];
            return (
              s && l.push('failed'),
              a && l.push('loading'),
              k().createElement(
                'div',
                null,
                null === o || !1 === o || 'false' === o
                  ? null
                  : k().createElement(
                      'div',
                      { className: 'filter-container' },
                      k().createElement(
                        n,
                        { className: 'filter wrapper', mobile: 12 },
                        k().createElement('input', {
                          className: l.join(' '),
                          placeholder: 'Filter by tag',
                          type: 'text',
                          onChange: this.onFilterChange,
                          value: !0 === o || 'true' === o ? '' : o,
                          disabled: a,
                        })
                      )
                    )
              )
            );
          }
        }
        const ua = Function.prototype;
        class ParamBody extends N.PureComponent {
          static defaultProp = {
            consumes: (0, I.fromJS)(['application/json']),
            param: (0, I.fromJS)({}),
            onChange: ua,
            onChangeConsumes: ua,
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
              s = /json/i.test(n),
              o = a ? t.get('value_xml') : t.get('value');
            if (void 0 !== o) {
              let e = !o && s ? '{}' : o;
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
            (this.props.onChange || ua)(e, t);
          };
          handleOnChange = e => {
            const { consumesValue: t } = this.props,
              r = /xml/i.test(t),
              n = e.target.value;
            this.onChange(n, { isXml: r, isEditBox: this.state.isEditBox });
          };
          toggleIsEditBox = () =>
            this.setState(e => ({ isEditBox: !e.isEditBox }));
          render() {
            let {
              onChangeConsumes: e,
              param: t,
              isExecute: r,
              specSelectors: n,
              pathMethod: a,
              getConfigs: s,
              getComponent: o,
            } = this.props;
            const l = o('Button'),
              c = o('TextArea'),
              i = o('highlightCode'),
              p = o('contentType');
            let m = (n ? n.parameterWithMetaByIdentity(a, t) : t).get(
                'errors',
                (0, I.List)()
              ),
              u = n.contentTypeValues(a).get('requestContentType'),
              d =
                this.props.consumes && this.props.consumes.size
                  ? this.props.consumes
                  : ParamBody.defaultProp.consumes,
              { value: h, isEditBox: g } = this.state,
              y = null;
            return (
              getKnownSyntaxHighlighterLanguage(h) && (y = 'json'),
              k().createElement(
                'div',
                {
                  className: 'body-param',
                  'data-param-name': t.get('name'),
                  'data-param-in': t.get('in'),
                },
                g && r
                  ? k().createElement(c, {
                      className:
                        'body-param__text' + (m.count() ? ' invalid' : ''),
                      value: h,
                      onChange: this.handleOnChange,
                    })
                  : h &&
                      k().createElement(i, {
                        className: 'body-param__example',
                        language: y,
                        getConfigs: s,
                        value: h,
                      }),
                k().createElement(
                  'div',
                  { className: 'body-param-options' },
                  r
                    ? k().createElement(
                        'div',
                        { className: 'body-param-edit' },
                        k().createElement(
                          l,
                          {
                            className: g
                              ? 'btn cancel body-param__example-edit'
                              : 'btn edit body-param__example-edit',
                            onClick: this.toggleIsEditBox,
                          },
                          g ? 'Cancel' : 'Edit'
                        )
                      )
                    : null,
                  k().createElement(
                    'label',
                    { htmlFor: '' },
                    k().createElement('span', null, 'Parameter content type'),
                    k().createElement(p, {
                      value: u,
                      contentTypes: d,
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
        class Curl extends k().Component {
          render() {
            let { request: e, getConfigs: t } = this.props,
              r = requestSnippetGenerator_curl_bash(e);
            const n = t(),
              a = Ge()(n, 'syntaxHighlight.activated')
                ? k().createElement(
                    wt(),
                    {
                      language: 'bash',
                      className: 'curl microlight',
                      style: getStyle(Ge()(n, 'syntaxHighlight.theme')),
                    },
                    r
                  )
                : k().createElement('textarea', {
                    readOnly: !0,
                    className: 'curl',
                    value: r,
                  });
            return k().createElement(
              'div',
              { className: 'curl-command' },
              k().createElement('h4', null, 'Curl'),
              k().createElement(
                'div',
                { className: 'copy-to-clipboard' },
                k().createElement(
                  vt.CopyToClipboard,
                  { text: r },
                  k().createElement('button', null)
                )
              ),
              k().createElement('div', null, a)
            );
          }
        }
        class Schemes extends k().Component {
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
            return k().createElement(
              'label',
              { htmlFor: 'schemes' },
              k().createElement(
                'span',
                { className: 'schemes-title' },
                'Schemes'
              ),
              k().createElement(
                'select',
                { onChange: this.onChange, value: t },
                e
                  .valueSeq()
                  .map(e =>
                    k().createElement('option', { value: e, key: e }, e)
                  )
                  .toArray()
              )
            );
          }
        }
        class SchemesContainer extends k().Component {
          render() {
            const {
                specActions: e,
                specSelectors: t,
                getComponent: r,
              } = this.props,
              n = t.operationScheme(),
              a = t.schemes(),
              s = r('schemes');
            return a && a.size
              ? k().createElement(s, {
                  currentScheme: n,
                  schemes: a,
                  specActions: e,
                })
              : null;
          }
        }
        class ModelCollapse extends N.Component {
          static defaultProps = {
            collapsedContent: '{...}',
            expanded: !1,
            title: null,
            onToggle: () => {},
            hideSelfOnExpand: !1,
            specPath: q().List([]),
          };
          constructor(e, t) {
            super(e, t);
            let { expanded: r, collapsedContent: n } = this.props;
            this.state = {
              expanded: r,
              collapsedContent:
                n || ModelCollapse.defaultProps.collapsedContent,
            };
          }
          componentDidMount() {
            const {
              hideSelfOnExpand: e,
              expanded: t,
              modelName: r,
            } = this.props;
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
              q().is(t, this.props.specPath) && this.toggleCollapsed(),
                this.props.layoutActions.readyToScroll(
                  this.props.specPath,
                  e.parentElement
                );
            }
          };
          render() {
            const { title: e, classes: t } = this.props;
            return this.state.expanded && this.props.hideSelfOnExpand
              ? k().createElement(
                  'span',
                  { className: t || '' },
                  this.props.children
                )
              : k().createElement(
                  'span',
                  { className: t || '', ref: this.onLoad },
                  k().createElement(
                    'button',
                    {
                      'aria-expanded': this.state.expanded,
                      className: 'model-box-control',
                      onClick: this.toggleCollapsed,
                    },
                    e && k().createElement('span', { className: 'pointer' }, e),
                    k().createElement('span', {
                      className:
                        'model-toggle' +
                        (this.state.expanded ? '' : ' collapsed'),
                    }),
                    !this.state.expanded &&
                      k().createElement(
                        'span',
                        null,
                        this.state.collapsedContent
                      )
                  ),
                  this.state.expanded && this.props.children
                );
          }
        }
        class ModelExample extends k().Component {
          constructor(e, t) {
            super(e, t);
            let { getConfigs: r, isExecute: n } = this.props,
              { defaultModelRendering: a } = r(),
              s = a;
            'example' !== a && 'model' !== a && (s = 'example'),
              n && (s = 'example'),
              (this.state = { activeTab: s });
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
                getConfigs: s,
                specPath: o,
                includeReadOnly: l,
                includeWriteOnly: c,
              } = this.props,
              { defaultModelExpandDepth: i } = s();
            const p = e('ModelWrapper'),
              m = e('highlightCode'),
              u = ae()(5).toString('base64'),
              d = ae()(5).toString('base64'),
              h = ae()(5).toString('base64'),
              g = ae()(5).toString('base64');
            let y = t.isOAS3();
            return k().createElement(
              'div',
              { className: 'model-example' },
              k().createElement(
                'ul',
                { className: 'tab', role: 'tablist' },
                k().createElement(
                  'li',
                  {
                    className: Zn()('tabitem', {
                      active: 'example' === this.state.activeTab,
                    }),
                    role: 'presentation',
                  },
                  k().createElement(
                    'button',
                    {
                      'aria-controls': d,
                      'aria-selected': 'example' === this.state.activeTab,
                      className: 'tablinks',
                      'data-name': 'example',
                      id: u,
                      onClick: this.activeTab,
                      role: 'tab',
                    },
                    a ? 'Edit Value' : 'Example Value'
                  )
                ),
                r &&
                  k().createElement(
                    'li',
                    {
                      className: Zn()('tabitem', {
                        active: 'model' === this.state.activeTab,
                      }),
                      role: 'presentation',
                    },
                    k().createElement(
                      'button',
                      {
                        'aria-controls': g,
                        'aria-selected': 'model' === this.state.activeTab,
                        className: Zn()('tablinks', { inactive: a }),
                        'data-name': 'model',
                        id: h,
                        onClick: this.activeTab,
                        role: 'tab',
                      },
                      y ? 'Schema' : 'Model'
                    )
                  )
              ),
              'example' === this.state.activeTab &&
                k().createElement(
                  'div',
                  {
                    'aria-hidden': 'example' !== this.state.activeTab,
                    'aria-labelledby': u,
                    'data-name': 'examplePanel',
                    id: d,
                    role: 'tabpanel',
                    tabIndex: '0',
                  },
                  n ||
                    k().createElement(m, {
                      value: '(no example available)',
                      getConfigs: s,
                    })
                ),
              'model' === this.state.activeTab &&
                k().createElement(
                  'div',
                  {
                    'aria-hidden': 'example' === this.state.activeTab,
                    'aria-labelledby': h,
                    'data-name': 'modelPanel',
                    id: g,
                    role: 'tabpanel',
                    tabIndex: '0',
                  },
                  k().createElement(p, {
                    schema: r,
                    getComponent: e,
                    getConfigs: s,
                    specSelectors: t,
                    expandDepth: i,
                    specPath: o,
                    includeReadOnly: l,
                    includeWriteOnly: c,
                  })
                )
            );
          }
        }
        class ModelWrapper extends N.Component {
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
              k().createElement(
                'div',
                { className: 'model-box' },
                k().createElement(
                  r,
                  rt()({}, this.props, {
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
        const da = require('react-immutable-pure-component');
        var ha = __webpack_require__.n(da);
        const decodeRefName = e => {
          const t = e.replace(/~1/g, '/').replace(/~0/g, '~');
          try {
            return decodeURIComponent(t);
          } catch {
            return t;
          }
        };
        class Model extends ha() {
          static propTypes = {
            schema: Fe().map.isRequired,
            getComponent: Ae().func.isRequired,
            getConfigs: Ae().func.isRequired,
            specSelectors: Ae().object.isRequired,
            name: Ae().string,
            displayName: Ae().string,
            isRef: Ae().bool,
            required: Ae().bool,
            expandDepth: Ae().number,
            depth: Ae().number,
            specPath: Fe().list.isRequired,
            includeReadOnly: Ae().bool,
            includeWriteOnly: Ae().bool,
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
              name: s,
              isRef: o,
              specPath: l,
              displayName: c,
              includeReadOnly: i,
              includeWriteOnly: p,
            } = this.props;
            const m = e('ObjectModel'),
              u = e('ArrayModel'),
              d = e('PrimitiveModel');
            let h = 'object',
              g = n && n.get('$$ref');
            if (
              (!s && g && (s = this.getModelName(g)),
              !n && g && (n = this.getRefSchema(s)),
              !n)
            )
              return k().createElement(
                'span',
                { className: 'model model-title' },
                k().createElement(
                  'span',
                  { className: 'model-title__text' },
                  c || s
                ),
                k().createElement(rolling_load, {
                  height: '20px',
                  width: '20px',
                })
              );
            const y = r.isOAS3() && n.get('deprecated');
            switch (
              ((o = void 0 !== o ? o : !!g), (h = (n && n.get('type')) || h), h)
            ) {
              case 'object':
                return k().createElement(
                  m,
                  rt()({ className: 'object' }, this.props, {
                    specPath: l,
                    getConfigs: t,
                    schema: n,
                    name: s,
                    deprecated: y,
                    isRef: o,
                    includeReadOnly: i,
                    includeWriteOnly: p,
                  })
                );
              case 'array':
                return k().createElement(
                  u,
                  rt()({ className: 'array' }, this.props, {
                    getConfigs: t,
                    schema: n,
                    name: s,
                    deprecated: y,
                    required: a,
                    includeReadOnly: i,
                    includeWriteOnly: p,
                  })
                );
              default:
                return k().createElement(
                  d,
                  rt()({}, this.props, {
                    getComponent: e,
                    getConfigs: t,
                    schema: n,
                    name: s,
                    deprecated: y,
                    required: a,
                  })
                );
            }
          }
        }
        class Models extends N.Component {
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
            e &&
              this.props.layoutActions.readyToScroll(
                this.getSchemaBasePath(),
                e
              );
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
              s = e.definitions(),
              { docExpansion: o, defaultModelsExpandDepth: l } = a();
            if (!s.size || l < 0) return null;
            const c = this.getSchemaBasePath();
            let i = r.isShown(c, l > 0 && 'none' !== o);
            const p = e.isOAS3(),
              m = t('ModelWrapper'),
              u = t('Collapse'),
              d = t('ModelCollapse'),
              h = t('JumpToPath', !0),
              g = t('ArrowUpIcon'),
              y = t('ArrowDownIcon');
            return k().createElement(
              'section',
              {
                className: i ? 'models is-open' : 'models',
                ref: this.onLoadModels,
              },
              k().createElement(
                'h4',
                null,
                k().createElement(
                  'button',
                  {
                    'aria-expanded': i,
                    className: 'models-control',
                    onClick: () => n.show(c, !i),
                  },
                  k().createElement('span', null, p ? 'Schemas' : 'Models'),
                  i ? k().createElement(g, null) : k().createElement(y, null)
                )
              ),
              k().createElement(
                u,
                { isOpened: i },
                s
                  .entrySeq()
                  .map(s => {
                    let [o] = s;
                    const i = [...c, o],
                      p = q().List(i),
                      u = e.specResolvedSubtree(i),
                      g = e.specJson().getIn(i),
                      y = I.Map.isMap(u) ? u : q().Map(),
                      f = I.Map.isMap(g) ? g : q().Map(),
                      S = y.get('title') || f.get('title') || o,
                      E = r.isShown(i, !1);
                    E &&
                      0 === y.size &&
                      f.size > 0 &&
                      this.props.specActions.requestResolvedSubtree(i);
                    const v = k().createElement(m, {
                        name: o,
                        expandDepth: l,
                        schema: y || q().Map(),
                        displayName: S,
                        fullPath: i,
                        specPath: p,
                        getComponent: t,
                        specSelectors: e,
                        getConfigs: a,
                        layoutSelectors: r,
                        layoutActions: n,
                        includeReadOnly: !0,
                        includeWriteOnly: !0,
                      }),
                      _ = k().createElement(
                        'span',
                        { className: 'model-box' },
                        k().createElement(
                          'span',
                          { className: 'model model-title' },
                          S
                        )
                      );
                    return k().createElement(
                      'div',
                      {
                        id: `model-${o}`,
                        className: 'model-container',
                        key: `models-section-${o}`,
                        'data-name': o,
                        ref: this.onLoadModel,
                      },
                      k().createElement(
                        'span',
                        { className: 'models-jump-to-path' },
                        k().createElement(h, { specPath: p })
                      ),
                      k().createElement(
                        d,
                        {
                          classes: 'model-box',
                          collapsedContent: this.getCollapsedContent(o),
                          onToggle: this.handleToggle,
                          title: _,
                          displayName: S,
                          modelName: o,
                          specPath: p,
                          layoutSelectors: r,
                          layoutActions: n,
                          hideSelfOnExpand: !0,
                          expanded: l > 0 && E,
                        },
                        v
                      )
                    );
                  })
                  .toArray()
              )
            );
          }
        }
        const enum_model = e => {
          let { value: t, getComponent: r } = e,
            n = r('ModelCollapse'),
            a = k().createElement('span', null, 'Array [ ', t.count(), ' ]');
          return k().createElement(
            'span',
            { className: 'prop-enum' },
            'Enum:',
            k().createElement('br', null),
            k().createElement(
              n,
              { collapsedContent: a },
              '[ ',
              t.join(', '),
              ' ]'
            )
          );
        };
        class ObjectModel extends N.Component {
          render() {
            let {
                schema: e,
                name: t,
                displayName: r,
                isRef: n,
                getComponent: a,
                getConfigs: s,
                depth: o,
                onToggle: l,
                expanded: c,
                specPath: i,
                ...p
              } = this.props,
              {
                specSelectors: m,
                expandDepth: u,
                includeReadOnly: d,
                includeWriteOnly: h,
              } = p;
            const { isOAS3: g } = m;
            if (!e) return null;
            const { showExtensions: y } = s();
            let f = e.get('description'),
              S = e.get('properties'),
              E = e.get('additionalProperties'),
              v = e.get('title') || r || t,
              _ = e.get('required'),
              w = e.filter(
                (e, t) =>
                  -1 !==
                  [
                    'maxProperties',
                    'minProperties',
                    'nullable',
                    'example',
                  ].indexOf(t)
              ),
              b = e.get('deprecated'),
              C = e.getIn(['externalDocs', 'url']),
              x = e.getIn(['externalDocs', 'description']);
            const O = a('JumpToPath', !0),
              N = a('Markdown', !0),
              A = a('Model'),
              q = a('ModelCollapse'),
              j = a('Property'),
              P = a('Link'),
              JumpToPathSection = () =>
                k().createElement(
                  'span',
                  { className: 'model-jump-to-path' },
                  k().createElement(O, { specPath: i })
                ),
              M = k().createElement(
                'span',
                null,
                k().createElement('span', null, '{'),
                '...',
                k().createElement('span', null, '}'),
                n ? k().createElement(JumpToPathSection, null) : ''
              ),
              R = m.isOAS3() ? e.get('anyOf') : null,
              T = m.isOAS3() ? e.get('oneOf') : null,
              J = m.isOAS3() ? e.get('not') : null,
              $ =
                v &&
                k().createElement(
                  'span',
                  { className: 'model-title' },
                  n &&
                    e.get('$$ref') &&
                    k().createElement(
                      'span',
                      { className: 'model-hint' },
                      e.get('$$ref')
                    ),
                  k().createElement(
                    'span',
                    { className: 'model-title__text' },
                    v
                  )
                );
            return k().createElement(
              'span',
              { className: 'model' },
              k().createElement(
                q,
                {
                  modelName: t,
                  title: $,
                  onToggle: l,
                  expanded: !!c || o <= u,
                  collapsedContent: M,
                },
                k().createElement(
                  'span',
                  { className: 'brace-open object' },
                  '{'
                ),
                n ? k().createElement(JumpToPathSection, null) : null,
                k().createElement(
                  'span',
                  { className: 'inner-object' },
                  k().createElement(
                    'table',
                    { className: 'model' },
                    k().createElement(
                      'tbody',
                      null,
                      f
                        ? k().createElement(
                            'tr',
                            { className: 'description' },
                            k().createElement('td', null, 'description:'),
                            k().createElement(
                              'td',
                              null,
                              k().createElement(N, { source: f })
                            )
                          )
                        : null,
                      C &&
                        k().createElement(
                          'tr',
                          { className: 'external-docs' },
                          k().createElement('td', null, 'externalDocs:'),
                          k().createElement(
                            'td',
                            null,
                            k().createElement(
                              P,
                              { target: '_blank', href: sanitizeUrl(C) },
                              x || C
                            )
                          )
                        ),
                      b
                        ? k().createElement(
                            'tr',
                            { className: 'property' },
                            k().createElement('td', null, 'deprecated:'),
                            k().createElement('td', null, 'true')
                          )
                        : null,
                      S && S.size
                        ? S.entrySeq()
                            .filter(e => {
                              let [, t] = e;
                              return (
                                (!t.get('readOnly') || d) &&
                                (!t.get('writeOnly') || h)
                              );
                            })
                            .map(e => {
                              let [r, n] = e,
                                l = g() && n.get('deprecated'),
                                c = I.List.isList(_) && _.contains(r),
                                m = ['property-row'];
                              return (
                                l && m.push('deprecated'),
                                c && m.push('required'),
                                k().createElement(
                                  'tr',
                                  { key: r, className: m.join(' ') },
                                  k().createElement(
                                    'td',
                                    null,
                                    r,
                                    c &&
                                      k().createElement(
                                        'span',
                                        { className: 'star' },
                                        '*'
                                      )
                                  ),
                                  k().createElement(
                                    'td',
                                    null,
                                    k().createElement(
                                      A,
                                      rt()(
                                        { key: `object-${t}-${r}_${n}` },
                                        p,
                                        {
                                          required: c,
                                          getComponent: a,
                                          specPath: i.push('properties', r),
                                          getConfigs: s,
                                          schema: n,
                                          depth: o + 1,
                                        }
                                      )
                                    )
                                  )
                                )
                              );
                            })
                            .toArray()
                        : null,
                      y
                        ? k().createElement(
                            'tr',
                            null,
                            k().createElement('td', null, ' ')
                          )
                        : null,
                      y
                        ? e
                            .entrySeq()
                            .map(e => {
                              let [t, r] = e;
                              if ('x-' !== t.slice(0, 2)) return;
                              const n = r ? (r.toJS ? r.toJS() : r) : null;
                              return k().createElement(
                                'tr',
                                { key: t, className: 'extension' },
                                k().createElement('td', null, t),
                                k().createElement('td', null, JSON.stringify(n))
                              );
                            })
                            .toArray()
                        : null,
                      E && E.size
                        ? k().createElement(
                            'tr',
                            null,
                            k().createElement('td', null, '< * >:'),
                            k().createElement(
                              'td',
                              null,
                              k().createElement(
                                A,
                                rt()({}, p, {
                                  required: !1,
                                  getComponent: a,
                                  specPath: i.push('additionalProperties'),
                                  getConfigs: s,
                                  schema: E,
                                  depth: o + 1,
                                })
                              )
                            )
                          )
                        : null,
                      R
                        ? k().createElement(
                            'tr',
                            null,
                            k().createElement('td', null, 'anyOf ->'),
                            k().createElement(
                              'td',
                              null,
                              R.map((e, t) =>
                                k().createElement(
                                  'div',
                                  { key: t },
                                  k().createElement(
                                    A,
                                    rt()({}, p, {
                                      required: !1,
                                      getComponent: a,
                                      specPath: i.push('anyOf', t),
                                      getConfigs: s,
                                      schema: e,
                                      depth: o + 1,
                                    })
                                  )
                                )
                              )
                            )
                          )
                        : null,
                      T
                        ? k().createElement(
                            'tr',
                            null,
                            k().createElement('td', null, 'oneOf ->'),
                            k().createElement(
                              'td',
                              null,
                              T.map((e, t) =>
                                k().createElement(
                                  'div',
                                  { key: t },
                                  k().createElement(
                                    A,
                                    rt()({}, p, {
                                      required: !1,
                                      getComponent: a,
                                      specPath: i.push('oneOf', t),
                                      getConfigs: s,
                                      schema: e,
                                      depth: o + 1,
                                    })
                                  )
                                )
                              )
                            )
                          )
                        : null,
                      J
                        ? k().createElement(
                            'tr',
                            null,
                            k().createElement('td', null, 'not ->'),
                            k().createElement(
                              'td',
                              null,
                              k().createElement(
                                'div',
                                null,
                                k().createElement(
                                  A,
                                  rt()({}, p, {
                                    required: !1,
                                    getComponent: a,
                                    specPath: i.push('not'),
                                    getConfigs: s,
                                    schema: J,
                                    depth: o + 1,
                                  })
                                )
                              )
                            )
                          )
                        : null
                    )
                  )
                ),
                k().createElement('span', { className: 'brace-close' }, '}')
              ),
              w.size
                ? w.entrySeq().map(e => {
                    let [t, r] = e;
                    return k().createElement(j, {
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
        class ArrayModel extends N.Component {
          render() {
            let {
                getComponent: e,
                getConfigs: t,
                schema: r,
                depth: n,
                expandDepth: a,
                name: s,
                displayName: o,
                specPath: l,
              } = this.props,
              c = r.get('description'),
              i = r.get('items'),
              p = r.get('title') || o || s,
              m = r.filter(
                (e, t) =>
                  -1 ===
                  [
                    'type',
                    'items',
                    'description',
                    '$$ref',
                    'externalDocs',
                  ].indexOf(t)
              ),
              u = r.getIn(['externalDocs', 'url']),
              d = r.getIn(['externalDocs', 'description']);
            const h = e('Markdown', !0),
              g = e('ModelCollapse'),
              y = e('Model'),
              f = e('Property'),
              S = e('Link'),
              E =
                p &&
                k().createElement(
                  'span',
                  { className: 'model-title' },
                  k().createElement(
                    'span',
                    { className: 'model-title__text' },
                    p
                  )
                );
            return k().createElement(
              'span',
              { className: 'model' },
              k().createElement(
                g,
                { title: E, expanded: n <= a, collapsedContent: '[...]' },
                '[',
                m.size
                  ? m.entrySeq().map(e => {
                      let [t, r] = e;
                      return k().createElement(f, {
                        key: `${t}-${r}`,
                        propKey: t,
                        propVal: r,
                        propClass: 'property',
                      });
                    })
                  : null,
                c
                  ? k().createElement(h, { source: c })
                  : m.size
                  ? k().createElement('div', { className: 'markdown' })
                  : null,
                u &&
                  k().createElement(
                    'div',
                    { className: 'external-docs' },
                    k().createElement(
                      S,
                      { target: '_blank', href: sanitizeUrl(u) },
                      d || u
                    )
                  ),
                k().createElement(
                  'span',
                  null,
                  k().createElement(
                    y,
                    rt()({}, this.props, {
                      getConfigs: t,
                      specPath: l.push('items'),
                      name: null,
                      schema: i,
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
        const ga = 'property primitive';
        class Primitive extends N.Component {
          render() {
            let {
              schema: e,
              getComponent: t,
              getConfigs: r,
              name: n,
              displayName: a,
              depth: s,
              expandDepth: o,
            } = this.props;
            const { showExtensions: l } = r();
            if (!e || !e.get) return k().createElement('div', null);
            let c = e.get('type'),
              i = e.get('format'),
              p = e.get('xml'),
              m = e.get('enum'),
              u = e.get('title') || a || n,
              d = e.get('description'),
              h = getExtensions(e),
              g = e
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
                .filterNot((e, t) => h.has(t)),
              y = e.getIn(['externalDocs', 'url']),
              f = e.getIn(['externalDocs', 'description']);
            const S = t('Markdown', !0),
              E = t('EnumModel'),
              v = t('Property'),
              _ = t('ModelCollapse'),
              w = t('Link'),
              b =
                u &&
                k().createElement(
                  'span',
                  { className: 'model-title' },
                  k().createElement(
                    'span',
                    { className: 'model-title__text' },
                    u
                  )
                );
            return k().createElement(
              'span',
              { className: 'model' },
              k().createElement(
                _,
                {
                  title: b,
                  expanded: s <= o,
                  collapsedContent: '[...]',
                  hideSelfOnExpand: o !== s,
                },
                k().createElement(
                  'span',
                  { className: 'prop' },
                  n &&
                    s > 1 &&
                    k().createElement('span', { className: 'prop-name' }, u),
                  k().createElement('span', { className: 'prop-type' }, c),
                  i &&
                    k().createElement(
                      'span',
                      { className: 'prop-format' },
                      '($',
                      i,
                      ')'
                    ),
                  g.size
                    ? g.entrySeq().map(e => {
                        let [t, r] = e;
                        return k().createElement(v, {
                          key: `${t}-${r}`,
                          propKey: t,
                          propVal: r,
                          propClass: ga,
                        });
                      })
                    : null,
                  l && h.size
                    ? h.entrySeq().map(e => {
                        let [t, r] = e;
                        return k().createElement(v, {
                          key: `${t}-${r}`,
                          propKey: t,
                          propVal: r,
                          propClass: ga,
                        });
                      })
                    : null,
                  d ? k().createElement(S, { source: d }) : null,
                  y &&
                    k().createElement(
                      'div',
                      { className: 'external-docs' },
                      k().createElement(
                        w,
                        { target: '_blank', href: sanitizeUrl(y) },
                        f || y
                      )
                    ),
                  p && p.size
                    ? k().createElement(
                        'span',
                        null,
                        k().createElement('br', null),
                        k().createElement('span', { className: ga }, 'xml:'),
                        p
                          .entrySeq()
                          .map(e => {
                            let [t, r] = e;
                            return k().createElement(
                              'span',
                              { key: `${t}-${r}`, className: ga },
                              k().createElement('br', null),
                              '   ',
                              t,
                              ': ',
                              String(r)
                            );
                          })
                          .toArray()
                      )
                    : null,
                  m && k().createElement(E, { value: m, getComponent: t })
                )
              )
            );
          }
        }
        const property = e => {
          let { propKey: t, propVal: r, propClass: n } = e;
          return k().createElement(
            'span',
            { className: n },
            k().createElement('br', null),
            t,
            ': ',
            String(r)
          );
        };
        class TryItOutButton extends k().Component {
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
                isOAS3: s,
              } = this.props,
              o = s && a;
            return k().createElement(
              'div',
              { className: o ? 'try-out btn-group' : 'try-out' },
              n
                ? k().createElement(
                    'button',
                    { className: 'btn try-out__btn cancel', onClick: t },
                    'Cancel'
                  )
                : k().createElement(
                    'button',
                    { className: 'btn try-out__btn', onClick: e },
                    'Try it out '
                  ),
              o &&
                k().createElement(
                  'button',
                  { className: 'btn try-out__btn reset', onClick: r },
                  'Reset'
                )
            );
          }
        }
        class VersionPragmaFilter extends k().PureComponent {
          static defaultProps = { alsoShow: null, children: null, bypass: !1 };
          render() {
            const {
              bypass: e,
              isSwagger2: t,
              isOAS3: r,
              alsoShow: n,
            } = this.props;
            return e
              ? k().createElement('div', null, this.props.children)
              : t && r
              ? k().createElement(
                  'div',
                  { className: 'version-pragma' },
                  n,
                  k().createElement(
                    'div',
                    {
                      className:
                        'version-pragma__message version-pragma__message--ambiguous',
                    },
                    k().createElement(
                      'div',
                      null,
                      k().createElement(
                        'h3',
                        null,
                        'Unable to render this definition'
                      ),
                      k().createElement(
                        'p',
                        null,
                        k().createElement('code', null, 'swagger'),
                        ' and ',
                        k().createElement('code', null, 'openapi'),
                        ' fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.'
                      ),
                      k().createElement(
                        'p',
                        null,
                        'Supported version fields are ',
                        k().createElement('code', null, 'swagger: ', '"2.0"'),
                        ' and those that match ',
                        k().createElement('code', null, 'openapi: 3.0.n'),
                        ' (for example, ',
                        k().createElement('code', null, 'openapi: 3.0.0'),
                        ').'
                      )
                    )
                  )
                )
              : t || r
              ? k().createElement('div', null, this.props.children)
              : k().createElement(
                  'div',
                  { className: 'version-pragma' },
                  n,
                  k().createElement(
                    'div',
                    {
                      className:
                        'version-pragma__message version-pragma__message--missing',
                    },
                    k().createElement(
                      'div',
                      null,
                      k().createElement(
                        'h3',
                        null,
                        'Unable to render this definition'
                      ),
                      k().createElement(
                        'p',
                        null,
                        'The provided definition does not specify a valid version field.'
                      ),
                      k().createElement(
                        'p',
                        null,
                        'Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ',
                        k().createElement('code', null, 'swagger: ', '"2.0"'),
                        ' and those that match ',
                        k().createElement('code', null, 'openapi: 3.0.n'),
                        ' (for example, ',
                        k().createElement('code', null, 'openapi: 3.0.0'),
                        ').'
                      )
                    )
                  )
                );
          }
        }
        const version_stamp = e => {
            let { version: t } = e;
            return k().createElement(
              'small',
              null,
              k().createElement('pre', { className: 'version' }, ' ', t, ' ')
            );
          },
          openapi_version = e => {
            let { oasVersion: t } = e;
            return k().createElement(
              'small',
              { className: 'version-stamp' },
              k().createElement('pre', { className: 'version' }, 'OAS ', t)
            );
          },
          deep_link = e => {
            let { enabled: t, path: r, text: n } = e;
            return k().createElement(
              'a',
              {
                className: 'nostyle',
                onClick: t ? e => e.preventDefault() : null,
                href: t ? `#/${r}` : null,
              },
              k().createElement('span', null, n)
            );
          },
          svg_assets = () =>
            k().createElement(
              'div',
              null,
              k().createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  xmlnsXlink: 'http://www.w3.org/1999/xlink',
                  className: 'svg-assets',
                },
                k().createElement(
                  'defs',
                  null,
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 20 20', id: 'unlocked' },
                    k().createElement('path', {
                      d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z',
                    })
                  ),
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 20 20', id: 'locked' },
                    k().createElement('path', {
                      d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z',
                    })
                  ),
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 20 20', id: 'close' },
                    k().createElement('path', {
                      d: 'M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z',
                    })
                  ),
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 20 20', id: 'large-arrow' },
                    k().createElement('path', {
                      d: 'M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z',
                    })
                  ),
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 20 20', id: 'large-arrow-down' },
                    k().createElement('path', {
                      d: 'M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z',
                    })
                  ),
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 20 20', id: 'large-arrow-up' },
                    k().createElement('path', {
                      d: 'M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z',
                    })
                  ),
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 24 24', id: 'jump-to' },
                    k().createElement('path', {
                      d: 'M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z',
                    })
                  ),
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 24 24', id: 'expand' },
                    k().createElement('path', {
                      d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
                    })
                  ),
                  k().createElement(
                    'symbol',
                    { viewBox: '0 0 15 16', id: 'copy' },
                    k().createElement(
                      'g',
                      { transform: 'translate(2, -1)' },
                      k().createElement('path', {
                        fill: '#ffffff',
                        fillRule: 'evenodd',
                        d: 'M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z',
                      })
                    )
                  )
                )
              )
            ),
          ya = require('remarkable'),
          fa = require('remarkable/linkify'),
          Sa = require('dompurify');
        var Ea = __webpack_require__.n(Sa);
        function Markdown(e) {
          let { source: t, className: r = '', getConfigs: n } = e;
          if ('string' != typeof t) return null;
          const a = new ya.Remarkable({
            html: !0,
            typographer: !0,
            breaks: !0,
            linkTarget: '_blank',
          }).use(fa.linkify);
          a.core.ruler.disable(['replacements', 'smartquotes']);
          const { useUnsafeMarkdown: s } = n(),
            o = a.render(t),
            l = sanitizer(o, { useUnsafeMarkdown: s });
          return t && o && l
            ? k().createElement('div', {
                className: Zn()(r, 'markdown'),
                dangerouslySetInnerHTML: { __html: l },
              })
            : null;
        }
        Ea().addHook &&
          Ea().addHook('beforeSanitizeElements', function (e) {
            return e.href && e.setAttribute('rel', 'noopener noreferrer'), e;
          }),
          (Markdown.defaultProps = {
            getConfigs: () => ({ useUnsafeMarkdown: !1 }),
          });
        const va = Markdown;
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
            Ea().sanitize(e, {
              ADD_ATTR: ['target'],
              FORBID_TAGS: ['style', 'form'],
              ALLOW_DATA_ATTR: r,
              FORBID_ATTR: n,
            })
          );
        }
        sanitizer.hasWarnedAboutDeprecation = !1;
        class BaseLayout extends k().Component {
          render() {
            const {
                errSelectors: e,
                specSelectors: t,
                getComponent: r,
              } = this.props,
              n = r('SvgAssets'),
              a = r('InfoContainer', !0),
              s = r('VersionPragmaFilter'),
              o = r('operations', !0),
              l = r('Models', !0),
              c = r('Webhooks', !0),
              i = r('Row'),
              p = r('Col'),
              m = r('errors', !0),
              u = r('ServersContainer', !0),
              d = r('SchemesContainer', !0),
              h = r('AuthorizeBtnContainer', !0),
              g = r('FilterContainer', !0),
              y = t.isSwagger2(),
              f = t.isOAS3(),
              S = t.isOAS31(),
              E = !t.specStr(),
              v = t.loadingStatus();
            let _ = null;
            if (
              ('loading' === v &&
                (_ = k().createElement(
                  'div',
                  { className: 'info' },
                  k().createElement(
                    'div',
                    { className: 'loading-container' },
                    k().createElement('div', { className: 'loading' })
                  )
                )),
              'failed' === v &&
                (_ = k().createElement(
                  'div',
                  { className: 'info' },
                  k().createElement(
                    'div',
                    { className: 'loading-container' },
                    k().createElement(
                      'h4',
                      { className: 'title' },
                      'Failed to load API definition.'
                    ),
                    k().createElement(m, null)
                  )
                )),
              'failedConfig' === v)
            ) {
              const t = e.lastError(),
                r = t ? t.get('message') : '';
              _ = k().createElement(
                'div',
                { className: 'info failed-config' },
                k().createElement(
                  'div',
                  { className: 'loading-container' },
                  k().createElement(
                    'h4',
                    { className: 'title' },
                    'Failed to load remote configuration.'
                  ),
                  k().createElement('p', null, r)
                )
              );
            }
            if (
              (!_ &&
                E &&
                (_ = k().createElement(
                  'h4',
                  null,
                  'No API definition provided.'
                )),
              _)
            )
              return k().createElement(
                'div',
                { className: 'swagger-ui' },
                k().createElement('div', { className: 'loading-container' }, _)
              );
            const w = t.servers(),
              b = t.schemes(),
              C = w && w.size,
              x = b && b.size,
              O = !!t.securityDefinitions();
            return k().createElement(
              'div',
              { className: 'swagger-ui' },
              k().createElement(n, null),
              k().createElement(
                s,
                {
                  isSwagger2: y,
                  isOAS3: f,
                  alsoShow: k().createElement(m, null),
                },
                k().createElement(m, null),
                k().createElement(
                  i,
                  { className: 'information-container' },
                  k().createElement(
                    p,
                    { mobile: 12 },
                    k().createElement(a, null)
                  )
                ),
                C || x || O
                  ? k().createElement(
                      'div',
                      { className: 'scheme-container' },
                      k().createElement(
                        p,
                        { className: 'schemes wrapper', mobile: 12 },
                        C ? k().createElement(u, null) : null,
                        x ? k().createElement(d, null) : null,
                        O ? k().createElement(h, null) : null
                      )
                    )
                  : null,
                k().createElement(g, null),
                k().createElement(
                  i,
                  null,
                  k().createElement(
                    p,
                    { mobile: 12, desktop: 12 },
                    k().createElement(o, null)
                  )
                ),
                S &&
                  k().createElement(
                    i,
                    { className: 'webhooks-container' },
                    k().createElement(
                      p,
                      { mobile: 12, desktop: 12 },
                      k().createElement(c, null)
                    )
                  ),
                k().createElement(
                  i,
                  null,
                  k().createElement(
                    p,
                    { mobile: 12, desktop: 12 },
                    k().createElement(l, null)
                  )
                )
              )
            );
          }
        }
        const core_components = () => ({
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
              info: ia,
              InfoContainer,
              InfoUrl,
              InfoBasePath,
              Contact: pa,
              License: ma,
              JumpToPath,
              CopyToClipboardBtn,
              onlineValidatorBadge: OnlineValidatorBadge,
              operations: Operations,
              operation: Operation,
              OperationSummary,
              OperationSummaryMethod,
              OperationSummaryPath,
              highlightCode: ra,
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
              Markdown: va,
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
          }),
          form_components = () => ({ components: { ...S } }),
          _a = require('react-debounce-input');
        var wa = __webpack_require__.n(_a);
        const ba = {
          value: '',
          onChange: () => {},
          schema: {},
          keyName: '',
          required: !1,
          errors: (0, I.List)(),
        };
        class JsonSchemaForm extends N.Component {
          static defaultProps = ba;
          componentDidMount() {
            const {
              dispatchInitialValue: e,
              value: t,
              onChange: r,
            } = this.props;
            e ? r(t) : !1 === e && r('');
          }
          render() {
            let {
              schema: e,
              errors: t,
              value: r,
              onChange: n,
              getComponent: a,
              fn: s,
              disabled: o,
            } = this.props;
            const l = e && e.get ? e.get('format') : null,
              c = e && e.get ? e.get('type') : null;
            let getComponentSilently = e => a(e, !1, { failSilently: !0 }),
              i = c
                ? getComponentSilently(
                    l ? `JsonSchema_${c}_${l}` : `JsonSchema_${c}`
                  )
                : a('JsonSchema_string');
            return (
              i || (i = a('JsonSchema_string')),
              k().createElement(
                i,
                rt()({}, this.props, {
                  errors: t,
                  fn: s,
                  getComponent: a,
                  value: r,
                  onChange: n,
                  schema: e,
                  disabled: o,
                })
              )
            );
          }
        }
        class JsonSchema_string extends N.Component {
          static defaultProps = ba;
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
              description: s,
              disabled: o,
            } = this.props;
            const l = r && r.get ? r.get('enum') : null,
              c = r && r.get ? r.get('format') : null,
              i = r && r.get ? r.get('type') : null,
              p = r && r.get ? r.get('in') : null;
            if ((t || (t = ''), (n = n.toJS ? n.toJS() : []), l)) {
              const r = e('Select');
              return k().createElement(r, {
                className: n.length ? 'invalid' : '',
                title: n.length ? n : '',
                allowedValues: [...l],
                value: t,
                allowEmptyValue: !a,
                disabled: o,
                onChange: this.onEnumChange,
              });
            }
            const m = o || (p && 'formData' === p && !('FormData' in window)),
              u = e('Input');
            return i && 'file' === i
              ? k().createElement(u, {
                  type: 'file',
                  className: n.length ? 'invalid' : '',
                  title: n.length ? n : '',
                  onChange: this.onChange,
                  disabled: m,
                })
              : k().createElement(wa(), {
                  type: c && 'password' === c ? 'password' : 'text',
                  className: n.length ? 'invalid' : '',
                  title: n.length ? n : '',
                  value: t,
                  minLength: 0,
                  debounceTimeout: 350,
                  placeholder: s,
                  onChange: this.onChange,
                  disabled: m,
                });
          }
        }
        class JsonSchema_array extends N.PureComponent {
          static defaultProps = ba;
          constructor(e, t) {
            super(e, t),
              (this.state = {
                value: valueOrEmptyList(e.value),
                schema: e.schema,
              });
          }
          UNSAFE_componentWillReceiveProps(e) {
            const t = valueOrEmptyList(e.value);
            t !== this.state.value && this.setState({ value: t }),
              e.schema !== this.state.schema &&
                this.setState({ schema: e.schema });
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
              disabled: s,
            } = this.props;
            n = n.toJS ? n.toJS() : Array.isArray(n) ? n : [];
            const o = n.filter(e => 'string' == typeof e),
              l = n.filter(e => void 0 !== e.needRemove).map(e => e.error),
              c = this.state.value,
              i = !!(c && c.count && c.count() > 0),
              p = r.getIn(['items', 'enum']),
              m = r.getIn(['items', 'type']),
              u = r.getIn(['items', 'format']),
              d = r.get('items');
            let h,
              g = !1,
              y = 'file' === m || ('string' === m && 'binary' === u);
            if (
              (m && u
                ? (h = e(`JsonSchema_${m}_${u}`))
                : ('boolean' !== m && 'array' !== m && 'object' !== m) ||
                  (h = e(`JsonSchema_${m}`)),
              h || y || (g = !0),
              p)
            ) {
              const r = e('Select');
              return k().createElement(r, {
                className: n.length ? 'invalid' : '',
                title: n.length ? n : '',
                multiple: !0,
                value: c,
                disabled: s,
                allowedValues: p,
                allowEmptyValue: !t,
                onChange: this.onEnumChange,
              });
            }
            const f = e('Button');
            return k().createElement(
              'div',
              { className: 'json-schema-array' },
              i
                ? c.map((t, r) => {
                    const o = (0, I.fromJS)(
                      n.filter(e => e.index === r).map(e => e.error)
                    );
                    return k().createElement(
                      'div',
                      { key: r, className: 'json-schema-form-item' },
                      y
                        ? k().createElement(JsonSchemaArrayItemFile, {
                            value: t,
                            onChange: e => this.onItemChange(e, r),
                            disabled: s,
                            errors: o,
                            getComponent: e,
                          })
                        : g
                        ? k().createElement(JsonSchemaArrayItemText, {
                            value: t,
                            onChange: e => this.onItemChange(e, r),
                            disabled: s,
                            errors: o,
                          })
                        : k().createElement(
                            h,
                            rt()({}, this.props, {
                              value: t,
                              onChange: e => this.onItemChange(e, r),
                              disabled: s,
                              errors: o,
                              schema: d,
                              getComponent: e,
                              fn: a,
                            })
                          ),
                      s
                        ? null
                        : k().createElement(
                            f,
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
              s
                ? null
                : k().createElement(
                    f,
                    {
                      className: `btn btn-sm json-schema-form-item-add ${
                        o.length ? 'invalid' : null
                      }`,
                      title: o.length ? o : '',
                      onClick: this.addItem,
                    },
                    'Add ',
                    m ? `${m} ` : '',
                    'item'
                  )
            );
          }
        }
        class JsonSchemaArrayItemText extends N.Component {
          static defaultProps = ba;
          onChange = e => {
            const t = e.target.value;
            this.props.onChange(t, this.props.keyName);
          };
          render() {
            let {
              value: e,
              errors: t,
              description: r,
              disabled: n,
            } = this.props;
            return (
              e || (e = ''),
              (t = t.toJS ? t.toJS() : []),
              k().createElement(wa(), {
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
        class JsonSchemaArrayItemFile extends N.Component {
          static defaultProps = ba;
          onFileChange = e => {
            const t = e.target.files[0];
            this.props.onChange(t, this.props.keyName);
          };
          render() {
            let { getComponent: e, errors: t, disabled: r } = this.props;
            const n = e('Input'),
              a = r || !('FormData' in window);
            return k().createElement(n, {
              type: 'file',
              className: t.length ? 'invalid' : '',
              title: t.length ? t : '',
              onChange: this.onFileChange,
              disabled: a,
            });
          }
        }
        class JsonSchema_boolean extends N.Component {
          static defaultProps = ba;
          onEnumChange = e => this.props.onChange(e);
          render() {
            let {
              getComponent: e,
              value: t,
              errors: r,
              schema: n,
              required: a,
              disabled: s,
            } = this.props;
            r = r.toJS ? r.toJS() : [];
            let o = n && n.get ? n.get('enum') : null,
              l = !o || !a,
              c = !o && ['true', 'false'];
            const i = e('Select');
            return k().createElement(i, {
              className: r.length ? 'invalid' : '',
              title: r.length ? r : '',
              value: String(t),
              disabled: s,
              allowedValues: o ? [...o] : c,
              allowEmptyValue: l,
              onChange: this.onEnumChange,
            });
          }
        }
        const stringifyObjectErrors = e =>
          e.map(e => {
            const t = void 0 !== e.propKey ? e.propKey : e.index;
            let r =
              'string' == typeof e
                ? e
                : 'string' == typeof e.error
                ? e.error
                : null;
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
        class JsonSchema_object extends N.PureComponent {
          constructor() {
            super();
          }
          static defaultProps = ba;
          onChange = e => {
            this.props.onChange(e);
          };
          handleOnChange = e => {
            const t = e.target.value;
            this.onChange(t);
          };
          render() {
            let {
              getComponent: e,
              value: t,
              errors: r,
              disabled: n,
            } = this.props;
            const a = e('TextArea');
            return (
              (r = r.toJS ? r.toJS() : Array.isArray(r) ? r : []),
              k().createElement(
                'div',
                null,
                k().createElement(a, {
                  className: Zn()({ invalid: r.length }),
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
          return I.List.isList(e)
            ? e
            : Array.isArray(e)
            ? (0, I.fromJS)(e)
            : (0, I.List)();
        }
        const json_schema_components = () => ({ components: { ...E } }),
          base = () => [
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
          ],
          Ca = (0, I.Map)();
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
        const xa = onlyOAS3((0, be.createSelector)(() => null)),
          Oa = onlyOAS3(() => e => {
            const t = e
              .getSystem()
              .specSelectors.specJson()
              .getIn(['components', 'schemas']);
            return I.Map.isMap(t) ? t : Ca;
          }),
          Na = onlyOAS3(
            () => e =>
              e.getSystem().specSelectors.specJson().hasIn(['servers', 0])
          ),
          ka = onlyOAS3(
            (0, be.createSelector)(
              Cr,
              e => e.getIn(['components', 'securitySchemes']) || null
            )
          ),
          wrap_selectors_validOperationMethods = (e, t) =>
            function (r) {
              if (t.specSelectors.isOAS3())
                return t.oas3Selectors.validOperationMethods();
              for (
                var n = arguments.length,
                  a = new Array(n > 1 ? n - 1 : 0),
                  s = 1;
                s < n;
                s++
              )
                a[s - 1] = arguments[s];
              return e(...a);
            },
          Aa = xa,
          Ia = xa,
          qa = xa,
          ja = xa,
          Pa = xa;
        const Ma = (function wrap_selectors_onlyOAS3(e) {
          return (t, r) =>
            function () {
              for (
                var n = arguments.length, a = new Array(n), s = 0;
                s < n;
                s++
              )
                a[s] = arguments[s];
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
          (0, be.createSelector)(
            e => e,
            e => {
              let { specSelectors: t } = e;
              return t.securityDefinitions();
            },
            (e, t) => {
              let r = (0, I.List)();
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
                            let [a, s] = e,
                              o = (0, I.fromJS)({
                                flow: a,
                                authorizationUrl: s.get('authorizationUrl'),
                                tokenUrl: s.get('tokenUrl'),
                                scopes: s.get('scopes'),
                                type: n.get('type'),
                                description: n.get('description'),
                              });
                            r = r.push(
                              new I.Map({ [t]: o.filter(e => void 0 !== e) })
                            );
                          }),
                      ('http' !== a && 'apiKey' !== a) ||
                        (r = r.push(new I.Map({ [t]: n }))),
                      'openIdConnect' === a && n.get('openIdConnectData'))
                    ) {
                      let e = n.get('openIdConnectData');
                      (
                        e.get('grant_types_supported') || [
                          'authorization_code',
                          'implicit',
                        ]
                      ).forEach(a => {
                        let s =
                            e.get('scopes_supported') &&
                            e
                              .get('scopes_supported')
                              .reduce((e, t) => e.set(t, ''), new I.Map()),
                          o = (0, I.fromJS)({
                            flow: a,
                            authorizationUrl: e.get('authorization_endpoint'),
                            tokenUrl: e.get('token_endpoint'),
                            scopes: s,
                            type: 'oauth2',
                            openIdConnectUrl: n.get('openIdConnectUrl'),
                          });
                        r = r.push(
                          new I.Map({ [t]: o.filter(e => void 0 !== e) })
                        );
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
                ? k().createElement(e, rt()({}, n, r, { Ori: t }))
                : k().createElement(t, n)
              : (console.warn("OAS3 wrapper: couldn't get spec"), null);
        }
        const Ra = (0, I.Map)(),
          selectors_isSwagger2 = () => e =>
            (function isSwagger2(e) {
              const t = e.get('swagger');
              return 'string' == typeof t && '2.0' === t;
            })(e.getSystem().specSelectors.specJson()),
          selectors_isOAS30 = () => e =>
            (function isOAS30(e) {
              const t = e.get('openapi');
              return (
                'string' == typeof t && /^3\.0\.([0123])(?:-rc[012])?$/.test(t)
              );
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
        const Ta = selectors_onlyOAS3(
            () => e => e.specSelectors.specJson().get('servers', Ra)
          ),
          Ja = selectors_onlyOAS3((e, t) => {
            let { callbacks: r, specPath: n } = t;
            return e => {
              const t = e.specSelectors.validOperationMethods();
              return I.Map.isMap(r)
                ? r
                    .reduce((e, r, a) => {
                      if (!I.Map.isMap(r)) return e;
                      const s = r.reduce((e, r, s) => {
                        if (!I.Map.isMap(r)) return e;
                        const o = r
                          .entrySeq()
                          .filter(e => {
                            let [r] = e;
                            return t.includes(r);
                          })
                          .map(e => {
                            let [t, r] = e;
                            return {
                              operation: (0, I.Map)({ operation: r }),
                              method: t,
                              path: s,
                              callbackName: a,
                              specPath: n.concat([a, s, t]),
                            };
                          });
                        return e.concat(o);
                      }, (0, I.List)());
                      return e.concat(s);
                    }, (0, I.List)())
                    .groupBy(e => e.callbackName)
                    .map(e => e.toArray())
                    .toObject()
                : {};
            };
          }),
          callbacks = e => {
            let {
              callbacks: t,
              specPath: r,
              specSelectors: n,
              getComponent: a,
            } = e;
            const s = n.callbacksOperations({ callbacks: t, specPath: r }),
              o = Object.keys(s),
              l = a('OperationContainer', !0);
            return 0 === o.length
              ? k().createElement('span', null, 'No callbacks')
              : k().createElement(
                  'div',
                  null,
                  o.map(e =>
                    k().createElement(
                      'div',
                      { key: `${e}` },
                      k().createElement('h2', null, e),
                      s[e].map(t =>
                        k().createElement(l, {
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
          },
          getDefaultRequestBodyValue = (e, t, r, n) => {
            const a = e.getIn(['content', t]) ?? (0, I.OrderedMap)(),
              s = a.get('schema', (0, I.OrderedMap)()).toJS(),
              o = void 0 !== a.get('examples'),
              l = a.get('example'),
              c = o ? a.getIn(['examples', r, 'value']) : l;
            return stringify(
              n.getSampleSchema(s, t, { includeWriteOnly: !0 }, c)
            );
          },
          request_body = e => {
            let {
              userHasEditedBody: t,
              requestBody: r,
              requestBodyValue: n,
              requestBodyInclusionSetting: a,
              requestBodyErrors: s,
              getComponent: o,
              getConfigs: l,
              specSelectors: c,
              fn: i,
              contentType: p,
              isExecute: m,
              specPath: u,
              onChange: d,
              onChangeIncludeEmpty: h,
              activeExamplesKey: g,
              updateActiveExamplesKey: y,
              setRetainRequestBodyValueFlag: f,
            } = e;
            const handleFile = e => {
                d(e.target.files[0]);
              },
              setIsIncludedOptions = e => {
                let t = { key: e, shouldDispatchInit: !1, defaultValue: !0 };
                return (
                  'no value' === a.get(e, 'no value') &&
                    (t.shouldDispatchInit = !0),
                  t
                );
              },
              S = o('Markdown', !0),
              E = o('modelExample'),
              v = o('RequestBodyEditor'),
              _ = o('highlightCode'),
              w = o('ExamplesSelectValueRetainer'),
              b = o('Example'),
              C = o('ParameterIncludeEmpty'),
              { showCommonExtensions: x } = l(),
              O = r?.get('description') ?? null,
              N = r?.get('content') ?? new I.OrderedMap();
            p = p || N.keySeq().first() || '';
            const A = N.get(p) ?? (0, I.OrderedMap)(),
              q = A.get('schema', (0, I.OrderedMap)()),
              j = A.get('examples', null),
              P = j?.map((e, t) => {
                const n = e?.get('value', null);
                return (
                  n &&
                    (e = e.set(
                      'value',
                      getDefaultRequestBodyValue(r, p, t, i),
                      n
                    )),
                  e
                );
              });
            if (((s = I.List.isList(s) ? s : (0, I.List)()), !A.size))
              return null;
            const M = 'object' === A.getIn(['schema', 'type']),
              R = 'binary' === A.getIn(['schema', 'format']),
              T = 'base64' === A.getIn(['schema', 'format']);
            if (
              'application/octet-stream' === p ||
              0 === p.indexOf('image/') ||
              0 === p.indexOf('audio/') ||
              0 === p.indexOf('video/') ||
              R ||
              T
            ) {
              const e = o('Input');
              return m
                ? k().createElement(e, { type: 'file', onChange: handleFile })
                : k().createElement(
                    'i',
                    null,
                    'Example values are not available for ',
                    k().createElement('code', null, p),
                    ' media types.'
                  );
            }
            if (
              M &&
              ('application/x-www-form-urlencoded' === p ||
                0 === p.indexOf('multipart/')) &&
              q.get('properties', (0, I.OrderedMap)()).size > 0
            ) {
              const e = o('JsonSchemaForm'),
                t = o('ParameterExt'),
                r = q.get('properties', (0, I.OrderedMap)());
              return (
                (n = I.Map.isMap(n) ? n : (0, I.OrderedMap)()),
                k().createElement(
                  'div',
                  { className: 'table-container' },
                  O && k().createElement(S, { source: O }),
                  k().createElement(
                    'table',
                    null,
                    k().createElement(
                      'tbody',
                      null,
                      I.Map.isMap(r) &&
                        r.entrySeq().map(r => {
                          let [l, c] = r;
                          if (c.get('readOnly')) return;
                          let p = x ? getCommonExtensions(c) : null;
                          const u = q
                              .get('required', (0, I.List)())
                              .includes(l),
                            g = c.get('type'),
                            y = c.get('format'),
                            f = c.get('description'),
                            E = n.getIn([l, 'value']),
                            v = n.getIn([l, 'errors']) || s,
                            _ = a.get(l) || !1,
                            w =
                              c.has('default') ||
                              c.has('example') ||
                              c.hasIn(['items', 'example']) ||
                              c.hasIn(['items', 'default']),
                            b =
                              c.has('enum') && (1 === c.get('enum').size || u),
                            O = w || b;
                          let N = '';
                          'array' !== g || O || (N = []),
                            ('object' === g || O) &&
                              (N = i.getSampleSchema(c, !1, {
                                includeWriteOnly: !0,
                              })),
                            'string' != typeof N &&
                              'object' === g &&
                              (N = stringify(N)),
                            'string' == typeof N &&
                              'array' === g &&
                              (N = JSON.parse(N));
                          const A =
                            'string' === g &&
                            ('binary' === y || 'base64' === y);
                          return k().createElement(
                            'tr',
                            {
                              key: l,
                              className: 'parameters',
                              'data-property-name': l,
                            },
                            k().createElement(
                              'td',
                              { className: 'parameters-col_name' },
                              k().createElement(
                                'div',
                                {
                                  className: u
                                    ? 'parameter__name required'
                                    : 'parameter__name',
                                },
                                l,
                                u ? k().createElement('span', null, ' *') : null
                              ),
                              k().createElement(
                                'div',
                                { className: 'parameter__type' },
                                g,
                                y &&
                                  k().createElement(
                                    'span',
                                    { className: 'prop-format' },
                                    '($',
                                    y,
                                    ')'
                                  ),
                                x && p.size
                                  ? p.entrySeq().map(e => {
                                      let [r, n] = e;
                                      return k().createElement(t, {
                                        key: `${r}-${n}`,
                                        xKey: r,
                                        xVal: n,
                                      });
                                    })
                                  : null
                              ),
                              k().createElement(
                                'div',
                                { className: 'parameter__deprecated' },
                                c.get('deprecated') ? 'deprecated' : null
                              )
                            ),
                            k().createElement(
                              'td',
                              { className: 'parameters-col_description' },
                              k().createElement(S, { source: f }),
                              m
                                ? k().createElement(
                                    'div',
                                    null,
                                    k().createElement(e, {
                                      fn: i,
                                      dispatchInitialValue: !A,
                                      schema: c,
                                      description: l,
                                      getComponent: o,
                                      value: void 0 === E ? N : E,
                                      required: u,
                                      errors: v,
                                      onChange: e => {
                                        d(e, [l]);
                                      },
                                    }),
                                    u
                                      ? null
                                      : k().createElement(C, {
                                          onChange: e => h(l, e),
                                          isIncluded: _,
                                          isIncludedOptions:
                                            setIsIncludedOptions(l),
                                          isDisabled: Array.isArray(E)
                                            ? 0 !== E.length
                                            : !isEmptyValue(E),
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
            const J = getDefaultRequestBodyValue(r, p, g, i);
            let $ = null;
            return (
              getKnownSyntaxHighlighterLanguage(J) && ($ = 'json'),
              k().createElement(
                'div',
                null,
                O && k().createElement(S, { source: O }),
                P
                  ? k().createElement(w, {
                      userHasEditedBody: t,
                      examples: P,
                      currentKey: g,
                      currentUserInputValue: n,
                      onSelect: e => {
                        y(e);
                      },
                      updateValue: d,
                      defaultToFirstExample: !0,
                      getComponent: o,
                      setRetainRequestBodyValueFlag: f,
                    })
                  : null,
                m
                  ? k().createElement(
                      'div',
                      null,
                      k().createElement(v, {
                        value: n,
                        errors: s,
                        defaultValue: J,
                        onChange: d,
                        getComponent: o,
                      })
                    )
                  : k().createElement(E, {
                      getComponent: o,
                      getConfigs: l,
                      specSelectors: c,
                      expandDepth: 1,
                      isExecute: m,
                      schema: A.get('schema'),
                      specPath: u.push('content', p),
                      example: k().createElement(_, {
                        className: 'body-param__example',
                        getConfigs: l,
                        language: $,
                        value: stringify(n) || J,
                      }),
                      includeWriteOnly: !0,
                    }),
                P
                  ? k().createElement(b, {
                      example: P.get(g),
                      getComponent: o,
                      getConfigs: l,
                    })
                  : null
              )
            );
          };
        class operation_link_OperationLink extends N.Component {
          render() {
            const { link: e, name: t, getComponent: r } = this.props,
              n = r('Markdown', !0);
            let a = e.get('operationId') || e.get('operationRef'),
              s = e.get('parameters') && e.get('parameters').toJS(),
              o = e.get('description');
            return k().createElement(
              'div',
              { className: 'operation-link' },
              k().createElement(
                'div',
                { className: 'description' },
                k().createElement(
                  'b',
                  null,
                  k().createElement('code', null, t)
                ),
                o ? k().createElement(n, { source: o }) : null
              ),
              k().createElement(
                'pre',
                null,
                'Operation `',
                a,
                '`',
                k().createElement('br', null),
                k().createElement('br', null),
                'Parameters ',
                (function padString(e, t) {
                  if ('string' != typeof t) return '';
                  return t
                    .split('\n')
                    .map((t, r) => (r > 0 ? Array(e + 1).join(' ') + t : t))
                    .join('\n');
                })(0, JSON.stringify(s, null, 2)) || '{}',
                k().createElement('br', null)
              )
            );
          }
        }
        const $a = operation_link_OperationLink;
        class Servers extends k().Component {
          componentDidMount() {
            let { servers: e, currentServer: t } = this.props;
            t || this.setServer(e.first()?.get('url'));
          }
          UNSAFE_componentWillReceiveProps(e) {
            let {
              servers: t,
              setServerVariableValue: r,
              getServerVariable: n,
            } = e;
            if (
              this.props.currentServer !== e.currentServer ||
              this.props.servers !== e.servers
            ) {
              let a = t.find(t => t.get('url') === e.currentServer),
                s =
                  this.props.servers.find(
                    e => e.get('url') === this.props.currentServer
                  ) || (0, I.OrderedMap)();
              if (!a) return this.setServer(t.first().get('url'));
              let o = (
                  (s.get('variables') || (0, I.OrderedMap)()).find(e =>
                    e.get('default')
                  ) || (0, I.OrderedMap)()
                ).get('default'),
                l = a.get('variables') || (0, I.OrderedMap)(),
                c = (l.find(e => e.get('default')) || (0, I.OrderedMap)()).get(
                  'default'
                );
              l.map((t, a) => {
                (n(e.currentServer, a) && o === c) ||
                  r({
                    server: e.currentServer,
                    key: a,
                    val: t.get('default') || '',
                  });
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
                (e.find(e => e.get('url') === t) || (0, I.OrderedMap)()).get(
                  'variables'
                ) || (0, I.OrderedMap)(),
              s = 0 !== a.size;
            return k().createElement(
              'div',
              { className: 'servers' },
              k().createElement(
                'label',
                { htmlFor: 'servers' },
                k().createElement(
                  'select',
                  { onChange: this.onServerChange, value: t },
                  e
                    .valueSeq()
                    .map(e =>
                      k().createElement(
                        'option',
                        { value: e.get('url'), key: e.get('url') },
                        e.get('url'),
                        e.get('description') && ` - ${e.get('description')}`
                      )
                    )
                    .toArray()
                )
              ),
              s
                ? k().createElement(
                    'div',
                    null,
                    k().createElement(
                      'div',
                      { className: 'computed-url' },
                      'Computed URL:',
                      k().createElement('code', null, n(t))
                    ),
                    k().createElement('h4', null, 'Server variables'),
                    k().createElement(
                      'table',
                      null,
                      k().createElement(
                        'tbody',
                        null,
                        a.entrySeq().map(e => {
                          let [n, a] = e;
                          return k().createElement(
                            'tr',
                            { key: n },
                            k().createElement('td', null, n),
                            k().createElement(
                              'td',
                              null,
                              a.get('enum')
                                ? k().createElement(
                                    'select',
                                    {
                                      'data-variable': n,
                                      onChange:
                                        this.onServerVariableValueChange,
                                    },
                                    a.get('enum').map(e =>
                                      k().createElement(
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
                                : k().createElement('input', {
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
        class ServersContainer extends k().Component {
          render() {
            const {
                specSelectors: e,
                oas3Selectors: t,
                oas3Actions: r,
                getComponent: n,
              } = this.props,
              a = e.servers(),
              s = n('Servers');
            return a && a.size
              ? k().createElement(
                  'div',
                  null,
                  k().createElement(
                    'span',
                    { className: 'servers-title' },
                    'Servers'
                  ),
                  k().createElement(s, {
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
        const Va = Function.prototype;
        class RequestBodyEditor extends N.PureComponent {
          static defaultProps = { onChange: Va, userHasEditedBody: !1 };
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
            return k().createElement(
              'div',
              { className: 'body-param' },
              k().createElement(a, {
                className: Zn()('body-param__text', { invalid: n }),
                title: t.size ? t.join(', ') : '',
                value: r,
                onChange: this.onDomChange,
              })
            );
          }
        }
        class HttpAuth extends k().Component {
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
            let {
              schema: e,
              getComponent: t,
              errSelectors: r,
              name: n,
            } = this.props;
            const a = t('Input'),
              s = t('Row'),
              o = t('Col'),
              l = t('authError'),
              c = t('Markdown', !0),
              i = t('JumpToPath', !0),
              p = (e.get('scheme') || '').toLowerCase();
            let m = this.getValue(),
              u = r.allErrors().filter(e => e.get('authId') === n);
            if ('basic' === p) {
              let t = m ? m.get('username') : null;
              return k().createElement(
                'div',
                null,
                k().createElement(
                  'h4',
                  null,
                  k().createElement('code', null, n || e.get('name')),
                  '  (http, Basic)',
                  k().createElement(i, { path: ['securityDefinitions', n] })
                ),
                t && k().createElement('h6', null, 'Authorized'),
                k().createElement(
                  s,
                  null,
                  k().createElement(c, { source: e.get('description') })
                ),
                k().createElement(
                  s,
                  null,
                  k().createElement('label', null, 'Username:'),
                  t
                    ? k().createElement('code', null, ' ', t, ' ')
                    : k().createElement(
                        o,
                        null,
                        k().createElement(a, {
                          type: 'text',
                          required: 'required',
                          name: 'username',
                          'aria-label': 'auth-basic-username',
                          onChange: this.onChange,
                          autoFocus: !0,
                        })
                      )
                ),
                k().createElement(
                  s,
                  null,
                  k().createElement('label', null, 'Password:'),
                  t
                    ? k().createElement('code', null, ' ****** ')
                    : k().createElement(
                        o,
                        null,
                        k().createElement(a, {
                          autoComplete: 'new-password',
                          name: 'password',
                          type: 'password',
                          'aria-label': 'auth-basic-password',
                          onChange: this.onChange,
                        })
                      )
                ),
                u
                  .valueSeq()
                  .map((e, t) => k().createElement(l, { error: e, key: t }))
              );
            }
            return 'bearer' === p
              ? k().createElement(
                  'div',
                  null,
                  k().createElement(
                    'h4',
                    null,
                    k().createElement('code', null, n || e.get('name')),
                    '  (http, Bearer)',
                    k().createElement(i, { path: ['securityDefinitions', n] })
                  ),
                  m && k().createElement('h6', null, 'Authorized'),
                  k().createElement(
                    s,
                    null,
                    k().createElement(c, { source: e.get('description') })
                  ),
                  k().createElement(
                    s,
                    null,
                    k().createElement('label', null, 'Value:'),
                    m
                      ? k().createElement('code', null, ' ****** ')
                      : k().createElement(
                          o,
                          null,
                          k().createElement(a, {
                            type: 'text',
                            'aria-label': 'auth-bearer-value',
                            onChange: this.onChange,
                            autoFocus: !0,
                          })
                        )
                  ),
                  u
                    .valueSeq()
                    .map((e, t) => k().createElement(l, { error: e, key: t }))
                )
              : k().createElement(
                  'div',
                  null,
                  k().createElement(
                    'em',
                    null,
                    k().createElement('b', null, n),
                    ' HTTP authentication: unsupported scheme ',
                    `'${p}'`
                  )
                );
          }
        }
        class OperationServers extends k().Component {
          setSelectedServer = e => {
            const { path: t, method: r } = this.props;
            return (
              this.forceUpdate(), this.props.setSelectedServer(e, `${t}:${r}`)
            );
          };
          setServerVariableValue = e => {
            const { path: t, method: r } = this.props;
            return (
              this.forceUpdate(),
              this.props.setServerVariableValue({
                ...e,
                namespace: `${t}:${r}`,
              })
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
              s = e ? 'operation' : 'path';
            return k().createElement(
              'div',
              { className: 'opblock-section operation-servers' },
              k().createElement(
                'div',
                { className: 'opblock-section-header' },
                k().createElement(
                  'div',
                  { className: 'tab-header' },
                  k().createElement(
                    'h4',
                    { className: 'opblock-title' },
                    'Servers'
                  )
                )
              ),
              k().createElement(
                'div',
                { className: 'opblock-description-wrapper' },
                k().createElement(
                  'h4',
                  { className: 'message' },
                  'These ',
                  s,
                  '-level options override the global server options.'
                ),
                k().createElement(n, {
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
        const Ka = {
            Callbacks: callbacks,
            HttpAuth,
            RequestBody: request_body,
            Servers,
            ServersContainer,
            RequestBodyEditor,
            OperationServers,
            operationLink: $a,
          },
          Da = new ya.Remarkable('commonmark');
        Da.block.ruler.enable(['table']), Da.set({ linkTarget: '_blank' });
        const markdown_Markdown = e => {
          let { source: t, className: r = '', getConfigs: n } = e;
          if ('string' != typeof t) return null;
          if (t) {
            const { useUnsafeMarkdown: e } = n(),
              a = sanitizer(Da.render(t), { useUnsafeMarkdown: e });
            let s;
            return (
              'string' == typeof a && (s = a.trim()),
              k().createElement('div', {
                dangerouslySetInnerHTML: { __html: s },
                className: Zn()(r, 'renderedMarkdown'),
              })
            );
          }
          return null;
        };
        markdown_Markdown.defaultProps = {
          getConfigs: () => ({ useUnsafeMarkdown: !1 }),
        };
        const La = OAS3ComponentWrapFactory(markdown_Markdown),
          Ua = OAS3ComponentWrapFactory(e => {
            let { Ori: t, ...r } = e;
            const {
                schema: n,
                getComponent: a,
                errSelectors: s,
                authorized: o,
                onAuthChange: l,
                name: c,
              } = r,
              i = a('HttpAuth');
            return 'http' === n.get('type')
              ? k().createElement(i, {
                  key: c,
                  schema: n,
                  name: c,
                  errSelectors: s,
                  authorized: o,
                  getComponent: a,
                  onChange: l,
                })
              : k().createElement(t, r);
          }),
          za = OAS3ComponentWrapFactory(OnlineValidatorBadge);
        class ModelComponent extends N.Component {
          render() {
            let { getConfigs: e, schema: t } = this.props,
              r = ['model-box'],
              n = null;
            return (
              !0 === t.get('deprecated') &&
                (r.push('deprecated'),
                (n = k().createElement(
                  'span',
                  { className: 'model-deprecated-warning' },
                  'Deprecated:'
                ))),
              k().createElement(
                'div',
                { className: r.join(' ') },
                n,
                k().createElement(
                  Model,
                  rt()({}, this.props, {
                    getConfigs: e,
                    depth: 1,
                    expandDepth: this.props.expandDepth || 0,
                  })
                )
              )
            );
          }
        }
        const Ba = OAS3ComponentWrapFactory(ModelComponent),
          Fa = OAS3ComponentWrapFactory(e => {
            let { Ori: t, ...r } = e;
            const { schema: n, getComponent: a, errors: s, onChange: o } = r,
              l = n && n.get ? n.get('format') : null,
              c = n && n.get ? n.get('type') : null,
              i = a('Input');
            return c &&
              'string' === c &&
              l &&
              ('binary' === l || 'base64' === l)
              ? k().createElement(i, {
                  type: 'file',
                  className: s.length ? 'invalid' : '',
                  title: s.length ? s : '',
                  onChange: e => {
                    o(e.target.files[0]);
                  },
                  disabled: t.isDisabled,
                })
              : k().createElement(t, r);
          }),
          Wa = {
            Markdown: La,
            AuthItem: Ua,
            OpenAPIVersion: (function OAS30ComponentWrapFactory(e) {
              return (t, r) => n =>
                'function' == typeof r.specSelectors?.isOAS30
                  ? r.specSelectors.isOAS30()
                    ? k().createElement(e, rt()({}, n, r, { Ori: t }))
                    : k().createElement(t, n)
                  : (console.warn("OAS30 wrapper: couldn't get spec"), null);
            })(e => {
              const { Ori: t } = e;
              return k().createElement(t, { oasVersion: '3.0' });
            }),
            JsonSchema_string: Fa,
            model: Ba,
            onlineValidatorBadge: za,
          },
          Ha = 'oas3_set_servers',
          Xa = 'oas3_set_request_body_value',
          Ga = 'oas3_set_request_body_retain_flag',
          Ya = 'oas3_set_request_body_inclusion',
          Qa = 'oas3_set_active_examples_member',
          Za = 'oas3_set_request_content_type',
          es = 'oas3_set_response_content_type',
          ts = 'oas3_set_server_variable_value',
          rs = 'oas3_set_request_body_validate_error',
          ns = 'oas3_clear_request_body_validate_error',
          as = 'oas3_clear_request_body_value';
        function setSelectedServer(e, t) {
          return { type: Ha, payload: { selectedServerUrl: e, namespace: t } };
        }
        function setRequestBodyValue(e) {
          let { value: t, pathMethod: r } = e;
          return { type: Xa, payload: { value: t, pathMethod: r } };
        }
        const setRetainRequestBodyValueFlag = e => {
          let { value: t, pathMethod: r } = e;
          return { type: Ga, payload: { value: t, pathMethod: r } };
        };
        function setRequestBodyInclusion(e) {
          let { value: t, pathMethod: r, name: n } = e;
          return { type: Ya, payload: { value: t, pathMethod: r, name: n } };
        }
        function setActiveExamplesMember(e) {
          let { name: t, pathMethod: r, contextType: n, contextName: a } = e;
          return {
            type: Qa,
            payload: { name: t, pathMethod: r, contextType: n, contextName: a },
          };
        }
        function setRequestContentType(e) {
          let { value: t, pathMethod: r } = e;
          return { type: Za, payload: { value: t, pathMethod: r } };
        }
        function setResponseContentType(e) {
          let { value: t, path: r, method: n } = e;
          return { type: es, payload: { value: t, path: r, method: n } };
        }
        function setServerVariableValue(e) {
          let { server: t, namespace: r, key: n, val: a } = e;
          return {
            type: ts,
            payload: { server: t, namespace: r, key: n, val: a },
          };
        }
        const setRequestBodyValidateError = e => {
            let { path: t, method: r, validationErrors: n } = e;
            return {
              type: rs,
              payload: { path: t, method: r, validationErrors: n },
            };
          },
          clearRequestBodyValidateError = e => {
            let { path: t, method: r } = e;
            return { type: ns, payload: { path: t, method: r } };
          },
          initRequestBodyValidateError = e => {
            let { pathMethod: t } = e;
            return { type: ns, payload: { path: t[0], method: t[1] } };
          },
          clearRequestBodyValue = e => {
            let { pathMethod: t } = e;
            return { type: as, payload: { pathMethod: t } };
          },
          oas3_selectors_onlyOAS3 = e =>
            function (t) {
              for (
                var r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
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
        const ss = oas3_selectors_onlyOAS3((e, t) => {
            const r = t ? [t, 'selectedServer'] : ['selectedServer'];
            return e.getIn(r) || '';
          }),
          os = oas3_selectors_onlyOAS3(
            (e, t, r) => e.getIn(['requestData', t, r, 'bodyValue']) || null
          ),
          ls = oas3_selectors_onlyOAS3(
            (e, t, r) => e.getIn(['requestData', t, r, 'retainBodyValue']) || !1
          ),
          selectDefaultRequestBodyValue = (e, t, r) => e => {
            const { oas3Selectors: n, specSelectors: a, fn: s } = e.getSystem();
            if (a.isOAS3()) {
              const e = n.requestContentType(t, r);
              if (e)
                return getDefaultRequestBodyValue(
                  a.specResolvedSubtree(['paths', t, r, 'requestBody']),
                  e,
                  n.activeExamplesMember(t, r, 'requestBody', 'requestBody'),
                  s
                );
            }
            return null;
          },
          cs = oas3_selectors_onlyOAS3((e, t, r) => e => {
            const { oas3Selectors: n, specSelectors: a, fn: s } = e;
            let o = !1;
            const l = n.requestContentType(t, r);
            let c = n.requestBodyValue(t, r);
            const i = a.specResolvedSubtree(['paths', t, r, 'requestBody']);
            if (!i) return !1;
            if (
              (I.Map.isMap(c) &&
                (c = stringify(
                  c
                    .mapEntries(e =>
                      I.Map.isMap(e[1]) ? [e[0], e[1].get('value')] : e
                    )
                    .toJS()
                )),
              I.List.isList(c) && (c = stringify(c)),
              l)
            ) {
              const e = getDefaultRequestBodyValue(
                i,
                l,
                n.activeExamplesMember(t, r, 'requestBody', 'requestBody'),
                s
              );
              o = !!c && c !== e;
            }
            return o;
          }),
          is = oas3_selectors_onlyOAS3(
            (e, t, r) =>
              e.getIn(['requestData', t, r, 'bodyInclusion']) || (0, I.Map)()
          ),
          ps = oas3_selectors_onlyOAS3(
            (e, t, r) => e.getIn(['requestData', t, r, 'errors']) || null
          ),
          ms = oas3_selectors_onlyOAS3(
            (e, t, r, n, a) =>
              e.getIn(['examples', t, r, n, a, 'activeExample']) || null
          ),
          us = oas3_selectors_onlyOAS3(
            (e, t, r) =>
              e.getIn(['requestData', t, r, 'requestContentType']) || null
          ),
          ds = oas3_selectors_onlyOAS3(
            (e, t, r) =>
              e.getIn(['requestData', t, r, 'responseContentType']) || null
          ),
          hs = oas3_selectors_onlyOAS3((e, t, r) => {
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
          gs = oas3_selectors_onlyOAS3((e, t) => {
            let r;
            if ('string' != typeof t) {
              const { server: e, namespace: n } = t;
              r = n
                ? [n, 'serverVariableValues', e]
                : ['serverVariableValues', e];
            } else {
              r = ['serverVariableValues', t];
            }
            return e.getIn(r) || (0, I.OrderedMap)();
          }),
          ys = oas3_selectors_onlyOAS3((e, t) => {
            var r, n;
            if ('string' != typeof t) {
              const { server: a, namespace: s } = t;
              (n = a),
                (r = s
                  ? e.getIn([s, 'serverVariableValues', n])
                  : e.getIn(['serverVariableValues', n]));
            } else (n = t), (r = e.getIn(['serverVariableValues', n]));
            r = r || (0, I.OrderedMap)();
            let a = n;
            return (
              r.map((e, t) => {
                a = a.replace(new RegExp(`{${t}}`, 'g'), e);
              }),
              a
            );
          }),
          fs = (function validateRequestBodyIsRequired(e) {
            return function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return t => {
                const n = t.getSystem().specSelectors.specJson();
                let a = [...r][1] || [];
                return (
                  !n.getIn(['paths', ...a, 'requestBody', 'required']) ||
                  e(...r)
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
              s = [];
            if (!I.Map.isMap(a)) return s;
            let o = [];
            return (
              Object.keys(r.requestContentType).forEach(e => {
                if (e === n) {
                  r.requestContentType[e].forEach(e => {
                    o.indexOf(e) < 0 && o.push(e);
                  });
                }
              }),
              o.forEach(e => {
                a.getIn([e, 'value']) || s.push(e);
              }),
              s
            );
          },
          Ss = (0, be.createSelector)(() => [
            'get',
            'put',
            'post',
            'delete',
            'options',
            'head',
            'patch',
            'trace',
          ]),
          Es = {
            [Ha]: (e, t) => {
              let {
                payload: { selectedServerUrl: r, namespace: n },
              } = t;
              const a = n ? [n, 'selectedServer'] : ['selectedServer'];
              return e.setIn(a, r);
            },
            [Xa]: (e, t) => {
              let {
                  payload: { value: r, pathMethod: n },
                } = t,
                [a, s] = n;
              if (!I.Map.isMap(r))
                return e.setIn(['requestData', a, s, 'bodyValue'], r);
              let o,
                l = e.getIn(['requestData', a, s, 'bodyValue']) || (0, I.Map)();
              I.Map.isMap(l) || (l = (0, I.Map)());
              const [...c] = r.keys();
              return (
                c.forEach(e => {
                  let t = r.getIn([e]);
                  (l.has(e) && I.Map.isMap(t)) ||
                    (o = l.setIn([e, 'value'], t));
                }),
                e.setIn(['requestData', a, s, 'bodyValue'], o)
              );
            },
            [Ga]: (e, t) => {
              let {
                  payload: { value: r, pathMethod: n },
                } = t,
                [a, s] = n;
              return e.setIn(['requestData', a, s, 'retainBodyValue'], r);
            },
            [Ya]: (e, t) => {
              let {
                  payload: { value: r, pathMethod: n, name: a },
                } = t,
                [s, o] = n;
              return e.setIn(['requestData', s, o, 'bodyInclusion', a], r);
            },
            [Qa]: (e, t) => {
              let {
                  payload: {
                    name: r,
                    pathMethod: n,
                    contextType: a,
                    contextName: s,
                  },
                } = t,
                [o, l] = n;
              return e.setIn(['examples', o, l, a, s, 'activeExample'], r);
            },
            [Za]: (e, t) => {
              let {
                  payload: { value: r, pathMethod: n },
                } = t,
                [a, s] = n;
              return e.setIn(['requestData', a, s, 'requestContentType'], r);
            },
            [es]: (e, t) => {
              let {
                payload: { value: r, path: n, method: a },
              } = t;
              return e.setIn(['requestData', n, a, 'responseContentType'], r);
            },
            [ts]: (e, t) => {
              let {
                payload: { server: r, namespace: n, key: a, val: s },
              } = t;
              const o = n
                ? [n, 'serverVariableValues', r, a]
                : ['serverVariableValues', r, a];
              return e.setIn(o, s);
            },
            [rs]: (e, t) => {
              let {
                  payload: { path: r, method: n, validationErrors: a },
                } = t,
                s = [];
              if (
                (s.push('Required field is not provided'), a.missingBodyValue)
              )
                return e.setIn(
                  ['requestData', r, n, 'errors'],
                  (0, I.fromJS)(s)
                );
              if (a.missingRequiredKeys && a.missingRequiredKeys.length > 0) {
                const { missingRequiredKeys: t } = a;
                return e.updateIn(
                  ['requestData', r, n, 'bodyValue'],
                  (0, I.fromJS)({}),
                  e =>
                    t.reduce(
                      (e, t) => e.setIn([t, 'errors'], (0, I.fromJS)(s)),
                      e
                    )
                );
              }
              return (
                console.warn(
                  'unexpected result: SET_REQUEST_BODY_VALIDATE_ERROR'
                ),
                e
              );
            },
            [ns]: (e, t) => {
              let {
                payload: { path: r, method: n },
              } = t;
              const a = e.getIn(['requestData', r, n, 'bodyValue']);
              if (!I.Map.isMap(a))
                return e.setIn(
                  ['requestData', r, n, 'errors'],
                  (0, I.fromJS)([])
                );
              const [...s] = a.keys();
              return s
                ? e.updateIn(
                    ['requestData', r, n, 'bodyValue'],
                    (0, I.fromJS)({}),
                    e =>
                      s.reduce(
                        (e, t) => e.setIn([t, 'errors'], (0, I.fromJS)([])),
                        e
                      )
                  )
                : e;
            },
            [as]: (e, t) => {
              let {
                  payload: { pathMethod: r },
                } = t,
                [n, a] = r;
              const s = e.getIn(['requestData', n, a, 'bodyValue']);
              return s
                ? I.Map.isMap(s)
                  ? e.setIn(['requestData', n, a, 'bodyValue'], (0, I.Map)())
                  : e.setIn(['requestData', n, a, 'bodyValue'], '')
                : e;
            },
          };
        function oas3() {
          return {
            components: Ka,
            wrapComponents: Wa,
            statePlugins: {
              spec: { wrapSelectors: v, selectors: w },
              auth: { wrapSelectors: _ },
              oas3: { actions: { ...b }, reducers: Es, selectors: { ...C } },
            },
          };
        }
        const webhooks = e => {
            let { specSelectors: t, getComponent: r } = e;
            const n = t.selectWebhooksOperations(),
              a = Object.keys(n),
              s = r('OperationContainer', !0);
            return 0 === a.length
              ? null
              : k().createElement(
                  'div',
                  { className: 'webhooks' },
                  k().createElement('h2', null, 'Webhooks'),
                  a.map(e =>
                    k().createElement(
                      'div',
                      { key: `${e}-webhook` },
                      n[e].map(t =>
                        k().createElement(s, {
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
          },
          components_license = e => {
            let { getComponent: t, specSelectors: r } = e;
            const n = r.selectLicenseNameField(),
              a = r.selectLicenseUrl(),
              s = t('Link');
            return k().createElement(
              'div',
              { className: 'info__license' },
              a
                ? k().createElement(
                    'div',
                    { className: 'info__license__url' },
                    k().createElement(
                      s,
                      { target: '_blank', href: sanitizeUrl(a) },
                      n
                    )
                  )
                : k().createElement('span', null, n)
            );
          },
          components_contact = e => {
            let { getComponent: t, specSelectors: r } = e;
            const n = r.selectContactNameField(),
              a = r.selectContactUrl(),
              s = r.selectContactEmailField(),
              o = t('Link');
            return k().createElement(
              'div',
              { className: 'info__contact' },
              a &&
                k().createElement(
                  'div',
                  null,
                  k().createElement(
                    o,
                    { href: sanitizeUrl(a), target: '_blank' },
                    n,
                    ' - Website'
                  )
                ),
              s &&
                k().createElement(
                  o,
                  { href: sanitizeUrl(`mailto:${s}`) },
                  a ? `Send email to ${n}` : `Contact ${n}`
                )
            );
          },
          oas31_components_info = e => {
            let { getComponent: t, specSelectors: r } = e;
            const n = r.version(),
              a = r.url(),
              s = r.basePath(),
              o = r.host(),
              l = r.selectInfoSummaryField(),
              c = r.selectInfoDescriptionField(),
              i = r.selectInfoTitleField(),
              p = r.selectInfoTermsOfServiceUrl(),
              m = r.selectExternalDocsUrl(),
              u = r.selectExternalDocsDescriptionField(),
              d = r.contact(),
              h = r.license(),
              g = t('Markdown', !0),
              y = t('Link'),
              f = t('VersionStamp'),
              S = t('OpenAPIVersion'),
              E = t('InfoUrl'),
              v = t('InfoBasePath'),
              _ = t('License', !0),
              w = t('Contact', !0),
              b = t('JsonSchemaDialect', !0);
            return k().createElement(
              'div',
              { className: 'info' },
              k().createElement(
                'hgroup',
                { className: 'main' },
                k().createElement(
                  'h2',
                  { className: 'title' },
                  i,
                  k().createElement(
                    'span',
                    null,
                    n && k().createElement(f, { version: n }),
                    k().createElement(S, { oasVersion: '3.1' })
                  )
                ),
                (o || s) && k().createElement(v, { host: o, basePath: s }),
                a && k().createElement(E, { getComponent: t, url: a })
              ),
              l && k().createElement('p', { className: 'info__summary' }, l),
              k().createElement(
                'div',
                { className: 'info__description description' },
                k().createElement(g, { source: c })
              ),
              p &&
                k().createElement(
                  'div',
                  { className: 'info__tos' },
                  k().createElement(
                    y,
                    { target: '_blank', href: sanitizeUrl(p) },
                    'Terms of service'
                  )
                ),
              d.size > 0 && k().createElement(w, null),
              h.size > 0 && k().createElement(_, null),
              m &&
                k().createElement(
                  y,
                  {
                    className: 'info__extdocs',
                    target: '_blank',
                    href: sanitizeUrl(m),
                  },
                  u || m
                ),
              k().createElement(b, null)
            );
          },
          json_schema_dialect = e => {
            let { getComponent: t, specSelectors: r } = e;
            const n = r.selectJsonSchemaDialectField(),
              a = r.selectJsonSchemaDialectDefault(),
              s = t('Link');
            return k().createElement(
              k().Fragment,
              null,
              n &&
                n === a &&
                k().createElement(
                  'p',
                  { className: 'info__jsonschemadialect' },
                  'JSON Schema dialect:',
                  ' ',
                  k().createElement(
                    s,
                    { target: '_blank', href: sanitizeUrl(n) },
                    n
                  )
                ),
              n &&
                n !== a &&
                k().createElement(
                  'div',
                  { className: 'error-wrapper' },
                  k().createElement(
                    'div',
                    { className: 'no-margin' },
                    k().createElement(
                      'div',
                      { className: 'errors' },
                      k().createElement(
                        'div',
                        { className: 'errors-wrapper' },
                        k().createElement(
                          'h4',
                          { className: 'center' },
                          'Warning'
                        ),
                        k().createElement(
                          'p',
                          { className: 'message' },
                          k().createElement(
                            'strong',
                            null,
                            'OpenAPI.jsonSchemaDialect'
                          ),
                          ' field contains a value different from the default value of',
                          ' ',
                          k().createElement(
                            s,
                            { target: '_blank', href: a },
                            a
                          ),
                          '. Values different from the default one are currently not supported. Please either omit the field or provide it with the default value.'
                        )
                      )
                    )
                  )
                )
            );
          },
          version_pragma_filter = e => {
            let {
              bypass: t,
              isSwagger2: r,
              isOAS3: n,
              isOAS31: a,
              alsoShow: s,
              children: o,
            } = e;
            return t
              ? k().createElement('div', null, o)
              : r && (n || a)
              ? k().createElement(
                  'div',
                  { className: 'version-pragma' },
                  s,
                  k().createElement(
                    'div',
                    {
                      className:
                        'version-pragma__message version-pragma__message--ambiguous',
                    },
                    k().createElement(
                      'div',
                      null,
                      k().createElement(
                        'h3',
                        null,
                        'Unable to render this definition'
                      ),
                      k().createElement(
                        'p',
                        null,
                        k().createElement('code', null, 'swagger'),
                        ' and ',
                        k().createElement('code', null, 'openapi'),
                        ' fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.'
                      ),
                      k().createElement(
                        'p',
                        null,
                        'Supported version fields are ',
                        k().createElement('code', null, 'swagger: "2.0"'),
                        ' and those that match ',
                        k().createElement('code', null, 'openapi: 3.x.y'),
                        ' (for example,',
                        ' ',
                        k().createElement('code', null, 'openapi: 3.1.0'),
                        ').'
                      )
                    )
                  )
                )
              : r || n || a
              ? k().createElement('div', null, o)
              : k().createElement(
                  'div',
                  { className: 'version-pragma' },
                  s,
                  k().createElement(
                    'div',
                    {
                      className:
                        'version-pragma__message version-pragma__message--missing',
                    },
                    k().createElement(
                      'div',
                      null,
                      k().createElement(
                        'h3',
                        null,
                        'Unable to render this definition'
                      ),
                      k().createElement(
                        'p',
                        null,
                        'The provided definition does not specify a valid version field.'
                      ),
                      k().createElement(
                        'p',
                        null,
                        'Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ',
                        k().createElement('code', null, 'swagger: "2.0"'),
                        ' and those that match ',
                        k().createElement('code', null, 'openapi: 3.x.y'),
                        ' (for example,',
                        ' ',
                        k().createElement('code', null, 'openapi: 3.1.0'),
                        ').'
                      )
                    )
                  )
                );
          },
          getModelName = e =>
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
          vs = (0, N.forwardRef)((e, t) => {
            let { schema: r, getComponent: n, onToggle: a } = e;
            const s = n('JSONSchema202012'),
              o = getModelName(r.get('$$ref')),
              l = (0, N.useCallback)(
                (e, t) => {
                  a(o, t);
                },
                [o, a]
              );
            return k().createElement(s, {
              name: o,
              schema: r.toJS(),
              ref: t,
              onExpand: l,
            });
          });
        vs.defaultProps = {
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
        const _s = vs,
          models = e => {
            let {
              specActions: t,
              specSelectors: r,
              layoutSelectors: n,
              layoutActions: a,
              getComponent: s,
              getConfigs: o,
            } = e;
            const l = r.selectSchemas(),
              c = Object.keys(l).length > 0,
              i = ['components', 'schemas'],
              { docExpansion: p, defaultModelsExpandDepth: m } = o(),
              u = m > 0 && 'none' !== p,
              d = n.isShown(i, u),
              h = s('Collapse'),
              g = s('JSONSchema202012'),
              y = s('ArrowUpIcon'),
              f = s('ArrowDownIcon');
            (0, N.useEffect)(() => {
              const e = d && m > 1,
                n = null != r.specResolvedSubtree(i);
              e && !n && t.requestResolvedSubtree(i);
            }, [d, m]);
            const S = (0, N.useCallback)(() => {
                a.show(i, !d);
              }, [d]),
              E = (0, N.useCallback)(e => {
                null !== e && a.readyToScroll(i, e);
              }, []),
              handleJSONSchema202012Ref = e => t => {
                null !== t && a.readyToScroll([...i, e], t);
              },
              handleJSONSchema202012Expand = e => (n, a) => {
                if (a) {
                  const n = [...i, e];
                  null != r.specResolvedSubtree(n) ||
                    t.requestResolvedSubtree([...i, e]);
                }
              };
            return !c || m < 0
              ? null
              : k().createElement(
                  'section',
                  { className: Zn()('models', { 'is-open': d }), ref: E },
                  k().createElement(
                    'h4',
                    null,
                    k().createElement(
                      'button',
                      {
                        'aria-expanded': d,
                        className: 'models-control',
                        onClick: S,
                      },
                      k().createElement('span', null, 'Schemas'),
                      d
                        ? k().createElement(y, null)
                        : k().createElement(f, null)
                    )
                  ),
                  k().createElement(
                    h,
                    { isOpened: d },
                    Object.entries(l).map(e => {
                      let [t, r] = e;
                      return k().createElement(g, {
                        key: t,
                        ref: handleJSONSchema202012Ref(t),
                        schema: r,
                        name: t,
                        onExpand: handleJSONSchema202012Expand(t),
                      });
                    })
                  )
                );
          },
          mutual_tls_auth = e => {
            let { schema: t, getComponent: r } = e;
            const n = r('JumpToPath', !0);
            return k().createElement(
              'div',
              null,
              k().createElement(
                'h4',
                null,
                t.get('name'),
                ' (mutualTLS)',
                ' ',
                k().createElement(n, {
                  path: ['securityDefinitions', t.get('name')],
                })
              ),
              k().createElement(
                'p',
                null,
                'Mutual TLS is required by this API/Operation. Certificates are managed via your Operating System and/or your browser.'
              ),
              k().createElement('p', null, t.get('description'))
            );
          };
        class auths_Auths extends k().Component {
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
              s = t('oauth2', !0),
              o = t('Button'),
              l = r.authorized(),
              c = e.filter((e, t) => !!l.get(t)),
              i = e.filter(
                e => 'oauth2' !== e.get('type') && 'mutualTLS' !== e.get('type')
              ),
              p = e.filter(e => 'oauth2' === e.get('type')),
              m = e.filter(e => 'mutualTLS' === e.get('type'));
            return k().createElement(
              'div',
              { className: 'auth-container' },
              i.size > 0 &&
                k().createElement(
                  'form',
                  { onSubmit: this.submitAuth },
                  i
                    .map((e, r) =>
                      k().createElement(a, {
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
                  k().createElement(
                    'div',
                    { className: 'auth-btn-wrapper' },
                    i.size === c.size
                      ? k().createElement(
                          o,
                          {
                            className: 'btn modal-btn auth',
                            onClick: this.logoutClick,
                            'aria-label': 'Remove authorization',
                          },
                          'Logout'
                        )
                      : k().createElement(
                          o,
                          {
                            type: 'submit',
                            className: 'btn modal-btn auth authorize',
                            'aria-label': 'Apply credentials',
                          },
                          'Authorize'
                        ),
                    k().createElement(
                      o,
                      {
                        className: 'btn modal-btn auth btn-done',
                        onClick: this.close,
                      },
                      'Close'
                    )
                  )
                ),
              p.size > 0
                ? k().createElement(
                    'div',
                    null,
                    k().createElement(
                      'div',
                      { className: 'scope-def' },
                      k().createElement(
                        'p',
                        null,
                        'Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.'
                      ),
                      k().createElement(
                        'p',
                        null,
                        'API requires the following scopes. Select which ones you want to grant to Swagger UI.'
                      )
                    ),
                    e
                      .filter(e => 'oauth2' === e.get('type'))
                      .map((e, t) =>
                        k().createElement(
                          'div',
                          { key: t },
                          k().createElement(s, {
                            authorized: l,
                            schema: e,
                            name: t,
                          })
                        )
                      )
                      .toArray()
                  )
                : null,
              m.size > 0 &&
                k().createElement(
                  'div',
                  null,
                  m
                    .map((e, r) =>
                      k().createElement(a, {
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
        const ws = auths_Auths,
          isOAS31 = e => {
            const t = e.get('openapi');
            return 'string' == typeof t && /^3\.1\.(?:[1-9]\d*|0)$/.test(t);
          },
          fn_createOnlyOAS31Selector = e =>
            function (t) {
              for (
                var r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
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
                var a = arguments.length,
                  s = new Array(a > 1 ? a - 1 : 0),
                  o = 1;
                o < a;
                o++
              )
                s[o - 1] = arguments[o];
              if (r.getSystem().specSelectors.isOAS31()) {
                const a = e(n, ...s);
                return 'function' == typeof a ? a(t, r) : a;
              }
              return t(...s);
            },
          fn_createSystemSelector = e =>
            function (t) {
              for (
                var r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
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
              ? k().createElement(
                  e,
                  rt()({}, n, { originalComponent: t, getSystem: r.getSystem })
                )
              : k().createElement(t, n),
          bs = createOnlyOAS31ComponentWrapper(e => {
            let { getSystem: t } = e;
            const r = t().getComponent('OAS31License', !0);
            return k().createElement(r, null);
          }),
          Cs = createOnlyOAS31ComponentWrapper(e => {
            let { getSystem: t } = e;
            const r = t().getComponent('OAS31Contact', !0);
            return k().createElement(r, null);
          }),
          xs = createOnlyOAS31ComponentWrapper(e => {
            let { getSystem: t } = e;
            const r = t().getComponent('OAS31Info', !0);
            return k().createElement(r, null);
          }),
          Os = createOnlyOAS31ComponentWrapper(e => {
            let { getSystem: t, ...r } = e;
            const n = t(),
              { getComponent: a, fn: s, getConfigs: o } = n,
              l = o(),
              c = a('OAS31Model'),
              i = a('JSONSchema202012'),
              p = a('JSONSchema202012Keyword$schema'),
              m = a('JSONSchema202012Keyword$vocabulary'),
              u = a('JSONSchema202012Keyword$id'),
              d = a('JSONSchema202012Keyword$anchor'),
              h = a('JSONSchema202012Keyword$dynamicAnchor'),
              g = a('JSONSchema202012Keyword$ref'),
              y = a('JSONSchema202012Keyword$dynamicRef'),
              f = a('JSONSchema202012Keyword$defs'),
              S = a('JSONSchema202012Keyword$comment'),
              E = a('JSONSchema202012KeywordAllOf'),
              v = a('JSONSchema202012KeywordAnyOf'),
              _ = a('JSONSchema202012KeywordOneOf'),
              w = a('JSONSchema202012KeywordNot'),
              b = a('JSONSchema202012KeywordIf'),
              C = a('JSONSchema202012KeywordThen'),
              x = a('JSONSchema202012KeywordElse'),
              O = a('JSONSchema202012KeywordDependentSchemas'),
              N = a('JSONSchema202012KeywordPrefixItems'),
              A = a('JSONSchema202012KeywordItems'),
              I = a('JSONSchema202012KeywordContains'),
              q = a('JSONSchema202012KeywordProperties'),
              j = a('JSONSchema202012KeywordPatternProperties'),
              P = a('JSONSchema202012KeywordAdditionalProperties'),
              M = a('JSONSchema202012KeywordPropertyNames'),
              R = a('JSONSchema202012KeywordUnevaluatedItems'),
              T = a('JSONSchema202012KeywordUnevaluatedProperties'),
              J = a('JSONSchema202012KeywordType'),
              $ = a('JSONSchema202012KeywordEnum'),
              V = a('JSONSchema202012KeywordConst'),
              K = a('JSONSchema202012KeywordConstraint'),
              D = a('JSONSchema202012KeywordDependentRequired'),
              L = a('JSONSchema202012KeywordContentSchema'),
              U = a('JSONSchema202012KeywordTitle'),
              z = a('JSONSchema202012KeywordDescription'),
              B = a('JSONSchema202012KeywordDefault'),
              F = a('JSONSchema202012KeywordDeprecated'),
              W = a('JSONSchema202012KeywordReadOnly'),
              H = a('JSONSchema202012KeywordWriteOnly'),
              X = a('JSONSchema202012Accordion'),
              G = a('JSONSchema202012ExpandDeepButton'),
              Y = a('JSONSchema202012ChevronRightIcon'),
              Q = a('withJSONSchema202012Context')(c, {
                config: {
                  default$schema:
                    'https://spec.openapis.org/oas/3.1/dialect/base',
                  defaultExpandedLevels: l.defaultModelExpandDepth,
                  includeReadOnly: Boolean(r.includeReadOnly),
                  includeWriteOnly: Boolean(r.includeWriteOnly),
                },
                components: {
                  JSONSchema: i,
                  Keyword$schema: p,
                  Keyword$vocabulary: m,
                  Keyword$id: u,
                  Keyword$anchor: d,
                  Keyword$dynamicAnchor: h,
                  Keyword$ref: g,
                  Keyword$dynamicRef: y,
                  Keyword$defs: f,
                  Keyword$comment: S,
                  KeywordAllOf: E,
                  KeywordAnyOf: v,
                  KeywordOneOf: _,
                  KeywordNot: w,
                  KeywordIf: b,
                  KeywordThen: C,
                  KeywordElse: x,
                  KeywordDependentSchemas: O,
                  KeywordPrefixItems: N,
                  KeywordItems: A,
                  KeywordContains: I,
                  KeywordProperties: q,
                  KeywordPatternProperties: j,
                  KeywordAdditionalProperties: P,
                  KeywordPropertyNames: M,
                  KeywordUnevaluatedItems: R,
                  KeywordUnevaluatedProperties: T,
                  KeywordType: J,
                  KeywordEnum: $,
                  KeywordConst: V,
                  KeywordConstraint: K,
                  KeywordDependentRequired: D,
                  KeywordContentSchema: L,
                  KeywordTitle: U,
                  KeywordDescription: z,
                  KeywordDefault: B,
                  KeywordDeprecated: F,
                  KeywordReadOnly: W,
                  KeywordWriteOnly: H,
                  Accordion: X,
                  ExpandDeepButton: G,
                  ChevronRightIcon: Y,
                },
                fn: {
                  upperFirst: s.upperFirst,
                  isExpandable: s.jsonSchema202012.isExpandable,
                  getProperties: s.jsonSchema202012.getProperties,
                },
              });
            return k().createElement(Q, r);
          }),
          Ns = Os,
          ks = createOnlyOAS31ComponentWrapper(e => {
            let { getSystem: t } = e;
            const { getComponent: r, fn: n, getConfigs: a } = t(),
              s = a();
            if (ks.ModelsWithJSONSchemaContext)
              return k().createElement(ks.ModelsWithJSONSchemaContext, null);
            const o = r('OAS31Models', !0),
              l = r('JSONSchema202012'),
              c = r('JSONSchema202012Keyword$schema'),
              i = r('JSONSchema202012Keyword$vocabulary'),
              p = r('JSONSchema202012Keyword$id'),
              m = r('JSONSchema202012Keyword$anchor'),
              u = r('JSONSchema202012Keyword$dynamicAnchor'),
              d = r('JSONSchema202012Keyword$ref'),
              h = r('JSONSchema202012Keyword$dynamicRef'),
              g = r('JSONSchema202012Keyword$defs'),
              y = r('JSONSchema202012Keyword$comment'),
              f = r('JSONSchema202012KeywordAllOf'),
              S = r('JSONSchema202012KeywordAnyOf'),
              E = r('JSONSchema202012KeywordOneOf'),
              v = r('JSONSchema202012KeywordNot'),
              _ = r('JSONSchema202012KeywordIf'),
              w = r('JSONSchema202012KeywordThen'),
              b = r('JSONSchema202012KeywordElse'),
              C = r('JSONSchema202012KeywordDependentSchemas'),
              x = r('JSONSchema202012KeywordPrefixItems'),
              O = r('JSONSchema202012KeywordItems'),
              N = r('JSONSchema202012KeywordContains'),
              A = r('JSONSchema202012KeywordProperties'),
              I = r('JSONSchema202012KeywordPatternProperties'),
              q = r('JSONSchema202012KeywordAdditionalProperties'),
              j = r('JSONSchema202012KeywordPropertyNames'),
              P = r('JSONSchema202012KeywordUnevaluatedItems'),
              M = r('JSONSchema202012KeywordUnevaluatedProperties'),
              R = r('JSONSchema202012KeywordType'),
              T = r('JSONSchema202012KeywordEnum'),
              J = r('JSONSchema202012KeywordConst'),
              $ = r('JSONSchema202012KeywordConstraint'),
              V = r('JSONSchema202012KeywordDependentRequired'),
              K = r('JSONSchema202012KeywordContentSchema'),
              D = r('JSONSchema202012KeywordTitle'),
              L = r('JSONSchema202012KeywordDescription'),
              U = r('JSONSchema202012KeywordDefault'),
              z = r('JSONSchema202012KeywordDeprecated'),
              B = r('JSONSchema202012KeywordReadOnly'),
              F = r('JSONSchema202012KeywordWriteOnly'),
              W = r('JSONSchema202012Accordion'),
              H = r('JSONSchema202012ExpandDeepButton'),
              X = r('JSONSchema202012ChevronRightIcon'),
              G = r('withJSONSchema202012Context');
            return (
              (ks.ModelsWithJSONSchemaContext = G(o, {
                config: {
                  default$schema:
                    'https://spec.openapis.org/oas/3.1/dialect/base',
                  defaultExpandedLevels: s.defaultModelsExpandDepth - 1,
                  includeReadOnly: !0,
                  includeWriteOnly: !0,
                },
                components: {
                  JSONSchema: l,
                  Keyword$schema: c,
                  Keyword$vocabulary: i,
                  Keyword$id: p,
                  Keyword$anchor: m,
                  Keyword$dynamicAnchor: u,
                  Keyword$ref: d,
                  Keyword$dynamicRef: h,
                  Keyword$defs: g,
                  Keyword$comment: y,
                  KeywordAllOf: f,
                  KeywordAnyOf: S,
                  KeywordOneOf: E,
                  KeywordNot: v,
                  KeywordIf: _,
                  KeywordThen: w,
                  KeywordElse: b,
                  KeywordDependentSchemas: C,
                  KeywordPrefixItems: x,
                  KeywordItems: O,
                  KeywordContains: N,
                  KeywordProperties: A,
                  KeywordPatternProperties: I,
                  KeywordAdditionalProperties: q,
                  KeywordPropertyNames: j,
                  KeywordUnevaluatedItems: P,
                  KeywordUnevaluatedProperties: M,
                  KeywordType: R,
                  KeywordEnum: T,
                  KeywordConst: J,
                  KeywordConstraint: $,
                  KeywordDependentRequired: V,
                  KeywordContentSchema: K,
                  KeywordTitle: D,
                  KeywordDescription: L,
                  KeywordDefault: U,
                  KeywordDeprecated: z,
                  KeywordReadOnly: B,
                  KeywordWriteOnly: F,
                  Accordion: W,
                  ExpandDeepButton: H,
                  ChevronRightIcon: X,
                },
                fn: {
                  upperFirst: n.upperFirst,
                  isExpandable: n.jsonSchema202012.isExpandable,
                  getProperties: n.jsonSchema202012.getProperties,
                },
              })),
              k().createElement(ks.ModelsWithJSONSchemaContext, null)
            );
          });
        ks.ModelsWithJSONSchemaContext = null;
        const As = ks,
          wrap_components_version_pragma_filter = (e, t) => e => {
            const r = t.specSelectors.isOAS31(),
              n = t.getComponent('OAS31VersionPragmaFilter');
            return k().createElement(n, rt()({ isOAS31: r }, e));
          },
          Is = createOnlyOAS31ComponentWrapper(e => {
            let { originalComponent: t, ...r } = e;
            const { getComponent: n, schema: a } = r,
              s = n('MutualTLSAuth', !0);
            return 'mutualTLS' === a.get('type')
              ? k().createElement(s, { schema: a })
              : k().createElement(t, r);
          }),
          qs = Is,
          js = createOnlyOAS31ComponentWrapper(e => {
            let { getSystem: t, ...r } = e;
            const n = t().getComponent('OAS31Auths', !0);
            return k().createElement(n, r);
          }),
          Ps = (0, I.Map)(),
          Ms = (0, be.createSelector)(
            (e, t) => t.specSelectors.specJson(),
            isOAS31
          ),
          selectors_webhooks = () => e =>
            e.specSelectors.specJson().get('webhooks', Ps),
          Rs = (0, be.createSelector)(
            (e, t) => t.specSelectors.webhooks(),
            (e, t) => t.specSelectors.validOperationMethods(),
            (e, t) => t.specSelectors.specResolvedSubtree(['webhooks']),
            (e, t) =>
              I.Map.isMap(e)
                ? e
                    .reduce((e, r, n) => {
                      if (!I.Map.isMap(r)) return e;
                      const a = r
                        .entrySeq()
                        .filter(e => {
                          let [r] = e;
                          return t.includes(r);
                        })
                        .map(e => {
                          let [t, r] = e;
                          return {
                            operation: (0, I.Map)({ operation: r }),
                            method: t,
                            path: n,
                            specPath: (0, I.List)(['webhooks', n, t]),
                          };
                        });
                      return e.concat(a);
                    }, (0, I.List)())
                    .groupBy(e => e.path)
                    .map(e => e.toArray())
                    .toObject()
                : {}
          ),
          selectors_license = () => e =>
            e.specSelectors.info().get('license', Ps),
          selectLicenseNameField = () => e =>
            e.specSelectors.license().get('name', 'License'),
          selectLicenseUrlField = () => e =>
            e.specSelectors.license().get('url'),
          Ts = (0, be.createSelector)(
            (e, t) => t.specSelectors.url(),
            (e, t) => t.oas3Selectors.selectedServer(),
            (e, t) => t.specSelectors.selectLicenseUrlField(),
            (e, t, r) => {
              if (r) return safeBuildUrl(r, e, { selectedServer: t });
            }
          ),
          selectLicenseIdentifierField = () => e =>
            e.specSelectors.license().get('identifier'),
          selectors_contact = () => e =>
            e.specSelectors.info().get('contact', Ps),
          selectContactNameField = () => e =>
            e.specSelectors.contact().get('name', 'the developer'),
          selectContactEmailField = () => e =>
            e.specSelectors.contact().get('email'),
          selectContactUrlField = () => e =>
            e.specSelectors.contact().get('url'),
          Js = (0, be.createSelector)(
            (e, t) => t.specSelectors.url(),
            (e, t) => t.oas3Selectors.selectedServer(),
            (e, t) => t.specSelectors.selectContactUrlField(),
            (e, t, r) => {
              if (r) return safeBuildUrl(r, e, { selectedServer: t });
            }
          ),
          selectInfoTitleField = () => e => e.specSelectors.info().get('title'),
          selectInfoSummaryField = () => e =>
            e.specSelectors.info().get('summary'),
          selectInfoDescriptionField = () => e =>
            e.specSelectors.info().get('description'),
          selectInfoTermsOfServiceField = () => e =>
            e.specSelectors.info().get('termsOfService'),
          $s = (0, be.createSelector)(
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
          Vs = (0, be.createSelector)(
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
          Ks = (0, be.createSelector)(
            (e, t) => t.specSelectors.definitions(),
            (e, t) =>
              t.specSelectors.specResolvedSubtree(['components', 'schemas']),
            (e, t) =>
              I.Map.isMap(e)
                ? I.Map.isMap(t)
                  ? Object.entries(e.toJS()).reduce((e, r) => {
                      let [n, a] = r;
                      const s = t.get(n);
                      return (e[n] = s?.toJS() || a), e;
                    }, {})
                  : e.toJS()
                : {}
          ),
          wrap_selectors_isOAS3 = (e, t) =>
            function (r) {
              const n = t.specSelectors.isOAS31();
              for (
                var a = arguments.length,
                  s = new Array(a > 1 ? a - 1 : 0),
                  o = 1;
                o < a;
                o++
              )
                s[o - 1] = arguments[o];
              return n || e(...s);
            },
          Ds = createOnlyOAS31SelectorWrapper(
            () => (e, t) => t.oas31Selectors.selectLicenseUrl()
          ),
          Ls = createOnlyOAS31SelectorWrapper(() => (e, t) => {
            const r = t.specSelectors.securityDefinitions();
            let n = e();
            return r
              ? (r.entrySeq().forEach(e => {
                  let [t, r] = e;
                  'mutualTLS' === r.get('type') &&
                    (n = n.push(new I.Map({ [t]: r })));
                }),
                n)
              : n;
          }),
          Us = (0, be.createSelector)(
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
          ),
          keywords_Example = e => {
            let { schema: t, getSystem: r } = e;
            const { fn: n } = r(),
              { hasKeyword: a, stringify: s } = n.jsonSchema202012.useFn();
            return a(t, 'example')
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--example',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    'Example'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
                    },
                    s(t.example)
                  )
                )
              : null;
          },
          keywords_Xml = e => {
            let { schema: t, getSystem: r } = e;
            const n = t?.xml || {},
              { fn: a, getComponent: s } = r(),
              { useIsExpandedDeeply: o, useComponent: l } = a.jsonSchema202012,
              c = o(),
              i = !!(n.name || n.namespace || n.prefix),
              [p, m] = (0, N.useState)(c),
              [u, d] = (0, N.useState)(!1),
              h = l('Accordion'),
              g = l('ExpandDeepButton'),
              y = s('JSONSchema202012DeepExpansionContext')(),
              f = (0, N.useCallback)(() => {
                m(e => !e);
              }, []),
              S = (0, N.useCallback)((e, t) => {
                m(t), d(t);
              }, []);
            return 0 === Object.keys(n).length
              ? null
              : k().createElement(
                  y.Provider,
                  { value: u },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--xml',
                    },
                    i
                      ? k().createElement(
                          k().Fragment,
                          null,
                          k().createElement(
                            h,
                            { expanded: p, onChange: f },
                            k().createElement(
                              'span',
                              {
                                className:
                                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                              },
                              'XML'
                            )
                          ),
                          k().createElement(g, { expanded: p, onClick: S })
                        )
                      : k().createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                          },
                          'XML'
                        ),
                    !0 === n.attribute &&
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
                        },
                        'attribute'
                      ),
                    !0 === n.wrapped &&
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
                        },
                        'wrapped'
                      ),
                    k().createElement(
                      'strong',
                      {
                        className:
                          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
                      },
                      'object'
                    ),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !p,
                          }
                        ),
                      },
                      p &&
                        k().createElement(
                          k().Fragment,
                          null,
                          n.name &&
                            k().createElement(
                              'li',
                              { className: 'json-schema-2020-12-property' },
                              k().createElement(
                                'div',
                                {
                                  className:
                                    'json-schema-2020-12-keyword json-schema-2020-12-keyword',
                                },
                                k().createElement(
                                  'span',
                                  {
                                    className:
                                      'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                                  },
                                  'name'
                                ),
                                k().createElement(
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
                            k().createElement(
                              'li',
                              { className: 'json-schema-2020-12-property' },
                              k().createElement(
                                'div',
                                { className: 'json-schema-2020-12-keyword' },
                                k().createElement(
                                  'span',
                                  {
                                    className:
                                      'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                                  },
                                  'namespace'
                                ),
                                k().createElement(
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
                            k().createElement(
                              'li',
                              { className: 'json-schema-2020-12-property' },
                              k().createElement(
                                'div',
                                { className: 'json-schema-2020-12-keyword' },
                                k().createElement(
                                  'span',
                                  {
                                    className:
                                      'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                                  },
                                  'prefix'
                                ),
                                k().createElement(
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
          },
          DiscriminatorMapping = e => {
            let { discriminator: t } = e;
            const r = t?.mapping || {};
            return 0 === Object.keys(r).length
              ? null
              : Object.entries(r).map(e => {
                  let [t, r] = e;
                  return k().createElement(
                    'div',
                    {
                      key: `${t}-${r}`,
                      className: 'json-schema-2020-12-keyword',
                    },
                    k().createElement(
                      'span',
                      {
                        className:
                          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                      },
                      t
                    ),
                    k().createElement(
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
        const zs = DiscriminatorMapping,
          Discriminator_Discriminator = e => {
            let { schema: t, getSystem: r } = e;
            const n = t?.discriminator || {},
              { fn: a, getComponent: s } = r(),
              { useIsExpandedDeeply: o, useComponent: l } = a.jsonSchema202012,
              c = o(),
              i = !!n.mapping,
              [p, m] = (0, N.useState)(c),
              [u, d] = (0, N.useState)(!1),
              h = l('Accordion'),
              g = l('ExpandDeepButton'),
              y = s('JSONSchema202012DeepExpansionContext')(),
              f = (0, N.useCallback)(() => {
                m(e => !e);
              }, []),
              S = (0, N.useCallback)((e, t) => {
                m(t), d(t);
              }, []);
            return 0 === Object.keys(n).length
              ? null
              : k().createElement(
                  y.Provider,
                  { value: u },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--discriminator',
                    },
                    i
                      ? k().createElement(
                          k().Fragment,
                          null,
                          k().createElement(
                            h,
                            { expanded: p, onChange: f },
                            k().createElement(
                              'span',
                              {
                                className:
                                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                              },
                              'Discriminator'
                            )
                          ),
                          k().createElement(g, { expanded: p, onClick: S })
                        )
                      : k().createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                          },
                          'Discriminator'
                        ),
                    n.propertyName &&
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
                        },
                        n.propertyName
                      ),
                    k().createElement(
                      'strong',
                      {
                        className:
                          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
                      },
                      'object'
                    ),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !p,
                          }
                        ),
                      },
                      p &&
                        k().createElement(
                          'li',
                          { className: 'json-schema-2020-12-property' },
                          k().createElement(zs, { discriminator: n })
                        )
                    )
                  )
                );
          },
          keywords_ExternalDocs = e => {
            let { schema: t, getSystem: r } = e;
            const n = t?.externalDocs || {},
              { fn: a, getComponent: s } = r(),
              { useIsExpandedDeeply: o, useComponent: l } = a.jsonSchema202012,
              c = o(),
              i = !(!n.description && !n.url),
              [p, m] = (0, N.useState)(c),
              [u, d] = (0, N.useState)(!1),
              h = l('Accordion'),
              g = l('ExpandDeepButton'),
              y = s('JSONSchema202012KeywordDescription'),
              f = s('Link'),
              S = s('JSONSchema202012DeepExpansionContext')(),
              E = (0, N.useCallback)(() => {
                m(e => !e);
              }, []),
              v = (0, N.useCallback)((e, t) => {
                m(t), d(t);
              }, []);
            return 0 === Object.keys(n).length
              ? null
              : k().createElement(
                  S.Provider,
                  { value: u },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--externalDocs',
                    },
                    i
                      ? k().createElement(
                          k().Fragment,
                          null,
                          k().createElement(
                            h,
                            { expanded: p, onChange: E },
                            k().createElement(
                              'span',
                              {
                                className:
                                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                              },
                              'External documentation'
                            )
                          ),
                          k().createElement(g, { expanded: p, onClick: v })
                        )
                      : k().createElement(
                          'span',
                          {
                            className:
                              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                          },
                          'External documentation'
                        ),
                    k().createElement(
                      'strong',
                      {
                        className:
                          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
                      },
                      'object'
                    ),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !p,
                          }
                        ),
                      },
                      p &&
                        k().createElement(
                          k().Fragment,
                          null,
                          n.description &&
                            k().createElement(
                              'li',
                              { className: 'json-schema-2020-12-property' },
                              k().createElement(y, { schema: n, getSystem: r })
                            ),
                          n.url &&
                            k().createElement(
                              'li',
                              { className: 'json-schema-2020-12-property' },
                              k().createElement(
                                'div',
                                {
                                  className:
                                    'json-schema-2020-12-keyword json-schema-2020-12-keyword',
                                },
                                k().createElement(
                                  'span',
                                  {
                                    className:
                                      'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                                  },
                                  'url'
                                ),
                                k().createElement(
                                  'span',
                                  {
                                    className:
                                      'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                                  },
                                  k().createElement(
                                    f,
                                    {
                                      target: '_blank',
                                      href: sanitizeUrl(n.url),
                                    },
                                    n.url
                                  )
                                )
                              )
                            )
                        )
                    )
                  )
                );
          },
          keywords_Description = e => {
            let { schema: t, getSystem: r } = e;
            if (!t?.description) return null;
            const { getComponent: n } = r(),
              a = n('Markdown');
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--description',
              },
              k().createElement(
                'div',
                {
                  className:
                    'json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary',
                },
                k().createElement(a, { source: t.description })
              )
            );
          },
          Bs = createOnlyOAS31ComponentWrapper(keywords_Description),
          Fs = createOnlyOAS31ComponentWrapper(e => {
            let { schema: t, getSystem: r, originalComponent: n } = e;
            const { getComponent: a } = r(),
              s = a('JSONSchema202012KeywordDiscriminator'),
              o = a('JSONSchema202012KeywordXml'),
              l = a('JSONSchema202012KeywordExample'),
              c = a('JSONSchema202012KeywordExternalDocs');
            return k().createElement(
              k().Fragment,
              null,
              k().createElement(n, { schema: t }),
              k().createElement(s, { schema: t, getSystem: r }),
              k().createElement(o, { schema: t, getSystem: r }),
              k().createElement(c, { schema: t, getSystem: r }),
              k().createElement(l, { schema: t, getSystem: r })
            );
          }),
          Ws = Fs,
          keywords_Properties = e => {
            let { schema: t, getSystem: r } = e;
            const { fn: n } = r(),
              { useComponent: a } = n.jsonSchema202012,
              { getDependentRequired: s, getProperties: o } =
                n.jsonSchema202012.useFn(),
              l = n.jsonSchema202012.useConfig(),
              c = Array.isArray(t?.required) ? t.required : [],
              i = a('JSONSchema'),
              p = o(t, l);
            return 0 === Object.keys(p).length
              ? null
              : k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--properties',
                  },
                  k().createElement(
                    'ul',
                    null,
                    Object.entries(p).map(e => {
                      let [r, n] = e;
                      const a = c.includes(r),
                        o = s(r, t);
                      return k().createElement(
                        'li',
                        {
                          key: r,
                          className: Zn()('json-schema-2020-12-property', {
                            'json-schema-2020-12-property--required': a,
                          }),
                        },
                        k().createElement(i, {
                          name: r,
                          schema: n,
                          dependentRequired: o,
                        })
                      );
                    })
                  )
                );
          },
          Hs = createOnlyOAS31ComponentWrapper(keywords_Properties),
          getProperties = (e, t) => {
            let { includeReadOnly: r, includeWriteOnly: n } = t;
            if (!e?.properties) return {};
            const a = Object.entries(e.properties).filter(e => {
              let [, t] = e;
              return (
                (!(!0 === t?.readOnly) || r) && (!(!0 === t?.writeOnly) || n)
              );
            });
            return Object.fromEntries(a);
          };
        const Xs = function afterLoad(e) {
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
                    const s = r[t];
                    return [
                      t,
                      function () {
                        return n.isOAS31()
                          ? a(...arguments)
                          : 'function' == typeof s
                          ? s(...arguments)
                          : void 0;
                      },
                    ];
                  })
                );
              })(
                {
                  sampleFromSchema: t.jsonSchema202012.sampleFromSchema,
                  sampleFromSchemaGeneric:
                    t.jsonSchema202012.sampleFromSchemaGeneric,
                  createXMLExample: t.jsonSchema202012.createXMLExample,
                  memoizedSampleFromSchema:
                    t.jsonSchema202012.memoizedSampleFromSchema,
                  memoizedCreateXMLExample:
                    t.jsonSchema202012.memoizedCreateXMLExample,
                },
                r()
              );
              Object.assign(this.fn, e);
            }
          },
          oas31 = e => {
            let { fn: t } = e;
            const r = t.createSystemSelector || fn_createSystemSelector,
              n = t.createOnlyOAS31Selector || fn_createOnlyOAS31Selector;
            return {
              afterLoad: Xs,
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
                OAS31Model: _s,
                OAS31Models: models,
                OAS31Auths: ws,
                JSONSchema202012KeywordExample: keywords_Example,
                JSONSchema202012KeywordXml: keywords_Xml,
                JSONSchema202012KeywordDiscriminator:
                  Discriminator_Discriminator,
                JSONSchema202012KeywordExternalDocs: keywords_ExternalDocs,
              },
              wrapComponents: {
                InfoContainer: xs,
                License: bs,
                Contact: Cs,
                VersionPragmaFilter: wrap_components_version_pragma_filter,
                Model: Ns,
                Models: As,
                AuthItem: qs,
                auths: js,
                JSONSchema202012KeywordDescription: Bs,
                JSONSchema202012KeywordDefault: Ws,
                JSONSchema202012KeywordProperties: Hs,
              },
              statePlugins: {
                auth: { wrapSelectors: { definitionsToAuthorize: Ls } },
                spec: {
                  selectors: {
                    isOAS31: r(Ms),
                    license: selectors_license,
                    selectLicenseNameField,
                    selectLicenseUrlField,
                    selectLicenseIdentifierField: n(
                      selectLicenseIdentifierField
                    ),
                    selectLicenseUrl: r(Ts),
                    contact: selectors_contact,
                    selectContactNameField,
                    selectContactEmailField,
                    selectContactUrlField,
                    selectContactUrl: r(Js),
                    selectInfoTitleField,
                    selectInfoSummaryField: n(selectInfoSummaryField),
                    selectInfoDescriptionField,
                    selectInfoTermsOfServiceField,
                    selectInfoTermsOfServiceUrl: r($s),
                    selectExternalDocsDescriptionField,
                    selectExternalDocsUrlField,
                    selectExternalDocsUrl: r(Vs),
                    webhooks: n(selectors_webhooks),
                    selectWebhooksOperations: n(r(Rs)),
                    selectJsonSchemaDialectField,
                    selectJsonSchemaDialectDefault,
                    selectSchemas: r(Ks),
                  },
                  wrapSelectors: {
                    isOAS3: wrap_selectors_isOAS3,
                    selectLicenseUrl: Ds,
                  },
                },
                oas31: { selectors: { selectLicenseUrl: n(r(Us)) } },
              },
            };
          },
          Gs = Ae().object,
          Ys = Ae().bool,
          Qs = (Ae().oneOfType([Gs, Ys]), (0, N.createContext)(null));
        Qs.displayName = 'JSONSchemaContext';
        const Zs = (0, N.createContext)(0);
        Zs.displayName = 'JSONSchemaLevelContext';
        const eo = (0, N.createContext)(!1);
        eo.displayName = 'JSONSchemaDeepExpansionContext';
        const to = (0, N.createContext)(new Set()),
          useConfig = () => {
            const { config: e } = (0, N.useContext)(Qs);
            return e;
          },
          useComponent = e => {
            const { components: t } = (0, N.useContext)(Qs);
            return t[e] || null;
          },
          useFn = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : void 0;
            const { fn: t } = (0, N.useContext)(Qs);
            return void 0 !== e ? t[e] : t;
          },
          useLevel = () => {
            const e = (0, N.useContext)(Zs);
            return [e, e + 1];
          },
          useIsExpandedDeeply = () => (0, N.useContext)(eo),
          useRenderedSchemas = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : void 0;
            if (void 0 === e) return (0, N.useContext)(to);
            const t = (0, N.useContext)(to);
            return new Set([...t, e]);
          },
          ro = (0, N.forwardRef)((e, t) => {
            let { schema: r, name: n, dependentRequired: a, onExpand: s } = e;
            const o = useFn(),
              l = (() => {
                const [e] = useLevel(),
                  { defaultExpandedLevels: t } = useConfig();
                return t - e > 0;
              })(),
              c = useIsExpandedDeeply(),
              [i, p] = (0, N.useState)(l || c),
              [m, u] = (0, N.useState)(c),
              [d, h] = useLevel(),
              g = (() => {
                const [e] = useLevel();
                return e > 0;
              })(),
              y = o.isExpandable(r) || a.length > 0,
              f = (e => useRenderedSchemas().has(e))(r),
              S = useRenderedSchemas(r),
              E = o.stringifyConstraints(r),
              v = useComponent('Accordion'),
              _ = useComponent('Keyword$schema'),
              w = useComponent('Keyword$vocabulary'),
              b = useComponent('Keyword$id'),
              C = useComponent('Keyword$anchor'),
              x = useComponent('Keyword$dynamicAnchor'),
              O = useComponent('Keyword$ref'),
              A = useComponent('Keyword$dynamicRef'),
              I = useComponent('Keyword$defs'),
              q = useComponent('Keyword$comment'),
              j = useComponent('KeywordAllOf'),
              P = useComponent('KeywordAnyOf'),
              M = useComponent('KeywordOneOf'),
              R = useComponent('KeywordNot'),
              T = useComponent('KeywordIf'),
              J = useComponent('KeywordThen'),
              $ = useComponent('KeywordElse'),
              V = useComponent('KeywordDependentSchemas'),
              K = useComponent('KeywordPrefixItems'),
              D = useComponent('KeywordItems'),
              L = useComponent('KeywordContains'),
              U = useComponent('KeywordProperties'),
              z = useComponent('KeywordPatternProperties'),
              B = useComponent('KeywordAdditionalProperties'),
              F = useComponent('KeywordPropertyNames'),
              W = useComponent('KeywordUnevaluatedItems'),
              H = useComponent('KeywordUnevaluatedProperties'),
              X = useComponent('KeywordType'),
              G = useComponent('KeywordEnum'),
              Y = useComponent('KeywordConst'),
              Q = useComponent('KeywordConstraint'),
              Z = useComponent('KeywordDependentRequired'),
              ee = useComponent('KeywordContentSchema'),
              te = useComponent('KeywordTitle'),
              re = useComponent('KeywordDescription'),
              ne = useComponent('KeywordDefault'),
              ae = useComponent('KeywordDeprecated'),
              se = useComponent('KeywordReadOnly'),
              oe = useComponent('KeywordWriteOnly'),
              le = useComponent('ExpandDeepButton');
            (0, N.useEffect)(() => {
              u(c);
            }, [c]),
              (0, N.useEffect)(() => {
                u(m);
              }, [m]);
            const ce = (0, N.useCallback)(
                (e, t) => {
                  p(t), !t && u(!1), s(e, t, !1);
                },
                [s]
              ),
              ie = (0, N.useCallback)(
                (e, t) => {
                  p(t), u(t), s(e, t, !0);
                },
                [s]
              );
            return k().createElement(
              Zs.Provider,
              { value: h },
              k().createElement(
                eo.Provider,
                { value: m },
                k().createElement(
                  to.Provider,
                  { value: S },
                  k().createElement(
                    'article',
                    {
                      ref: t,
                      'data-json-schema-level': d,
                      className: Zn()('json-schema-2020-12', {
                        'json-schema-2020-12--embedded': g,
                        'json-schema-2020-12--circular': f,
                      }),
                    },
                    k().createElement(
                      'div',
                      { className: 'json-schema-2020-12-head' },
                      y && !f
                        ? k().createElement(
                            k().Fragment,
                            null,
                            k().createElement(
                              v,
                              { expanded: i, onChange: ce },
                              k().createElement(te, { title: n, schema: r })
                            ),
                            k().createElement(le, { expanded: i, onClick: ie })
                          )
                        : k().createElement(te, { title: n, schema: r }),
                      k().createElement(ae, { schema: r }),
                      k().createElement(se, { schema: r }),
                      k().createElement(oe, { schema: r }),
                      k().createElement(X, { schema: r, isCircular: f }),
                      E.length > 0 &&
                        E.map(e =>
                          k().createElement(Q, {
                            key: `${e.scope}-${e.value}`,
                            constraint: e,
                          })
                        )
                    ),
                    k().createElement(
                      'div',
                      {
                        className: Zn()('json-schema-2020-12-body', {
                          'json-schema-2020-12-body--collapsed': !i,
                        }),
                      },
                      i &&
                        k().createElement(
                          k().Fragment,
                          null,
                          k().createElement(re, { schema: r }),
                          !f &&
                            y &&
                            k().createElement(
                              k().Fragment,
                              null,
                              k().createElement(U, { schema: r }),
                              k().createElement(z, { schema: r }),
                              k().createElement(B, { schema: r }),
                              k().createElement(H, { schema: r }),
                              k().createElement(F, { schema: r }),
                              k().createElement(j, { schema: r }),
                              k().createElement(P, { schema: r }),
                              k().createElement(M, { schema: r }),
                              k().createElement(R, { schema: r }),
                              k().createElement(T, { schema: r }),
                              k().createElement(J, { schema: r }),
                              k().createElement($, { schema: r }),
                              k().createElement(V, { schema: r }),
                              k().createElement(K, { schema: r }),
                              k().createElement(D, { schema: r }),
                              k().createElement(W, { schema: r }),
                              k().createElement(L, { schema: r }),
                              k().createElement(ee, { schema: r })
                            ),
                          k().createElement(G, { schema: r }),
                          k().createElement(Y, { schema: r }),
                          k().createElement(Z, {
                            schema: r,
                            dependentRequired: a,
                          }),
                          k().createElement(ne, { schema: r }),
                          k().createElement(_, { schema: r }),
                          k().createElement(w, { schema: r }),
                          k().createElement(b, { schema: r }),
                          k().createElement(C, { schema: r }),
                          k().createElement(x, { schema: r }),
                          k().createElement(O, { schema: r }),
                          !f && y && k().createElement(I, { schema: r }),
                          k().createElement(A, { schema: r }),
                          k().createElement(q, { schema: r })
                        )
                    )
                  )
                )
              )
            );
          });
        ro.defaultProps = {
          name: '',
          dependentRequired: [],
          onExpand: () => {},
        };
        const no = ro,
          keywords_$schema = e => {
            let { schema: t } = e;
            return t?.$schema
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--$schema',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    '$schema'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                    },
                    t.$schema
                  )
                )
              : null;
          },
          $vocabulary_$vocabulary = e => {
            let { schema: t } = e;
            const r = useIsExpandedDeeply(),
              [n, a] = (0, N.useState)(r),
              s = useComponent('Accordion'),
              o = (0, N.useCallback)(() => {
                a(e => !e);
              }, []);
            return t?.$vocabulary
              ? 'object' != typeof t.$vocabulary
                ? null
                : k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--$vocabulary',
                    },
                    k().createElement(
                      s,
                      { expanded: n, onChange: o },
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                        },
                        '$vocabulary'
                      )
                    ),
                    k().createElement(
                      'strong',
                      {
                        className:
                          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
                      },
                      'object'
                    ),
                    k().createElement(
                      'ul',
                      null,
                      n &&
                        Object.entries(t.$vocabulary).map(e => {
                          let [t, r] = e;
                          return k().createElement(
                            'li',
                            {
                              key: t,
                              className: Zn()(
                                'json-schema-2020-12-$vocabulary-uri',
                                {
                                  'json-schema-2020-12-$vocabulary-uri--disabled':
                                    !r,
                                }
                              ),
                            },
                            k().createElement(
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
          },
          keywords_$id = e => {
            let { schema: t } = e;
            return t?.$id
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--$id',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    '$id'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                    },
                    t.$id
                  )
                )
              : null;
          },
          keywords_$anchor = e => {
            let { schema: t } = e;
            return t?.$anchor
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--$anchor',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    '$anchor'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                    },
                    t.$anchor
                  )
                )
              : null;
          },
          keywords_$dynamicAnchor = e => {
            let { schema: t } = e;
            return t?.$dynamicAnchor
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicAnchor',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    '$dynamicAnchor'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                    },
                    t.$dynamicAnchor
                  )
                )
              : null;
          },
          keywords_$ref = e => {
            let { schema: t } = e;
            return t?.$ref
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--$ref',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    '$ref'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                    },
                    t.$ref
                  )
                )
              : null;
          },
          keywords_$dynamicRef = e => {
            let { schema: t } = e;
            return t?.$dynamicRef
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicRef',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    '$dynamicRef'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                    },
                    t.$dynamicRef
                  )
                )
              : null;
          },
          keywords_$defs = e => {
            let { schema: t } = e;
            const r = t?.$defs || {},
              n = useIsExpandedDeeply(),
              [a, s] = (0, N.useState)(n),
              [o, l] = (0, N.useState)(!1),
              c = useComponent('Accordion'),
              i = useComponent('ExpandDeepButton'),
              p = useComponent('JSONSchema'),
              m = (0, N.useCallback)(() => {
                s(e => !e);
              }, []),
              u = (0, N.useCallback)((e, t) => {
                s(t), l(t);
              }, []);
            return 0 === Object.keys(r).length
              ? null
              : k().createElement(
                  eo.Provider,
                  { value: o },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--$defs',
                    },
                    k().createElement(
                      c,
                      { expanded: a, onChange: m },
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                        },
                        '$defs'
                      )
                    ),
                    k().createElement(i, { expanded: a, onClick: u }),
                    k().createElement(
                      'strong',
                      {
                        className:
                          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
                      },
                      'object'
                    ),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !a,
                          }
                        ),
                      },
                      a &&
                        k().createElement(
                          k().Fragment,
                          null,
                          Object.entries(r).map(e => {
                            let [t, r] = e;
                            return k().createElement(
                              'li',
                              {
                                key: t,
                                className: 'json-schema-2020-12-property',
                              },
                              k().createElement(p, { name: t, schema: r })
                            );
                          })
                        )
                    )
                  )
                );
          },
          keywords_$comment = e => {
            let { schema: t } = e;
            return t?.$comment
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--$comment',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    '$comment'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                    },
                    t.$comment
                  )
                )
              : null;
          },
          keywords_AllOf = e => {
            let { schema: t } = e;
            const r = t?.allOf || [],
              n = useFn(),
              a = useIsExpandedDeeply(),
              [s, o] = (0, N.useState)(a),
              [l, c] = (0, N.useState)(!1),
              i = useComponent('Accordion'),
              p = useComponent('ExpandDeepButton'),
              m = useComponent('JSONSchema'),
              u = useComponent('KeywordType'),
              d = (0, N.useCallback)(() => {
                o(e => !e);
              }, []),
              h = (0, N.useCallback)((e, t) => {
                o(t), c(t);
              }, []);
            return Array.isArray(r) && 0 !== r.length
              ? k().createElement(
                  eo.Provider,
                  { value: l },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--allOf',
                    },
                    k().createElement(
                      i,
                      { expanded: s, onChange: d },
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                        },
                        'All of'
                      )
                    ),
                    k().createElement(p, { expanded: s, onClick: h }),
                    k().createElement(u, { schema: { allOf: r } }),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !s,
                          }
                        ),
                      },
                      s &&
                        k().createElement(
                          k().Fragment,
                          null,
                          r.map((e, t) =>
                            k().createElement(
                              'li',
                              {
                                key: `#${t}`,
                                className: 'json-schema-2020-12-property',
                              },
                              k().createElement(m, {
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
          },
          keywords_AnyOf = e => {
            let { schema: t } = e;
            const r = t?.anyOf || [],
              n = useFn(),
              a = useIsExpandedDeeply(),
              [s, o] = (0, N.useState)(a),
              [l, c] = (0, N.useState)(!1),
              i = useComponent('Accordion'),
              p = useComponent('ExpandDeepButton'),
              m = useComponent('JSONSchema'),
              u = useComponent('KeywordType'),
              d = (0, N.useCallback)(() => {
                o(e => !e);
              }, []),
              h = (0, N.useCallback)((e, t) => {
                o(t), c(t);
              }, []);
            return Array.isArray(r) && 0 !== r.length
              ? k().createElement(
                  eo.Provider,
                  { value: l },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--anyOf',
                    },
                    k().createElement(
                      i,
                      { expanded: s, onChange: d },
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                        },
                        'Any of'
                      )
                    ),
                    k().createElement(p, { expanded: s, onClick: h }),
                    k().createElement(u, { schema: { anyOf: r } }),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !s,
                          }
                        ),
                      },
                      s &&
                        k().createElement(
                          k().Fragment,
                          null,
                          r.map((e, t) =>
                            k().createElement(
                              'li',
                              {
                                key: `#${t}`,
                                className: 'json-schema-2020-12-property',
                              },
                              k().createElement(m, {
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
          },
          keywords_OneOf = e => {
            let { schema: t } = e;
            const r = t?.oneOf || [],
              n = useFn(),
              a = useIsExpandedDeeply(),
              [s, o] = (0, N.useState)(a),
              [l, c] = (0, N.useState)(!1),
              i = useComponent('Accordion'),
              p = useComponent('ExpandDeepButton'),
              m = useComponent('JSONSchema'),
              u = useComponent('KeywordType'),
              d = (0, N.useCallback)(() => {
                o(e => !e);
              }, []),
              h = (0, N.useCallback)((e, t) => {
                o(t), c(t);
              }, []);
            return Array.isArray(r) && 0 !== r.length
              ? k().createElement(
                  eo.Provider,
                  { value: l },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--oneOf',
                    },
                    k().createElement(
                      i,
                      { expanded: s, onChange: d },
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                        },
                        'One of'
                      )
                    ),
                    k().createElement(p, { expanded: s, onClick: h }),
                    k().createElement(u, { schema: { oneOf: r } }),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !s,
                          }
                        ),
                      },
                      s &&
                        k().createElement(
                          k().Fragment,
                          null,
                          r.map((e, t) =>
                            k().createElement(
                              'li',
                              {
                                key: `#${t}`,
                                className: 'json-schema-2020-12-property',
                              },
                              k().createElement(m, {
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
          },
          keywords_Not = e => {
            let { schema: t } = e;
            const r = useFn(),
              n = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'not')) return null;
            const a = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Not'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--not',
              },
              k().createElement(n, { name: a, schema: t.not })
            );
          },
          keywords_If = e => {
            let { schema: t } = e;
            const r = useFn(),
              n = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'if')) return null;
            const a = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'If'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--if',
              },
              k().createElement(n, { name: a, schema: t.if })
            );
          },
          keywords_Then = e => {
            let { schema: t } = e;
            const r = useFn(),
              n = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'then')) return null;
            const a = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Then'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--then',
              },
              k().createElement(n, { name: a, schema: t.then })
            );
          },
          keywords_Else = e => {
            let { schema: t } = e;
            const r = useFn(),
              n = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'else')) return null;
            const a = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Else'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--if',
              },
              k().createElement(n, { name: a, schema: t.else })
            );
          },
          keywords_DependentSchemas = e => {
            let { schema: t } = e;
            const r = t?.dependentSchemas || [],
              n = useIsExpandedDeeply(),
              [a, s] = (0, N.useState)(n),
              [o, l] = (0, N.useState)(!1),
              c = useComponent('Accordion'),
              i = useComponent('ExpandDeepButton'),
              p = useComponent('JSONSchema'),
              m = (0, N.useCallback)(() => {
                s(e => !e);
              }, []),
              u = (0, N.useCallback)((e, t) => {
                s(t), l(t);
              }, []);
            return 'object' != typeof r || 0 === Object.keys(r).length
              ? null
              : k().createElement(
                  eo.Provider,
                  { value: o },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentSchemas',
                    },
                    k().createElement(
                      c,
                      { expanded: a, onChange: m },
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                        },
                        'Dependent schemas'
                      )
                    ),
                    k().createElement(i, { expanded: a, onClick: u }),
                    k().createElement(
                      'strong',
                      {
                        className:
                          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
                      },
                      'object'
                    ),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !a,
                          }
                        ),
                      },
                      a &&
                        k().createElement(
                          k().Fragment,
                          null,
                          Object.entries(r).map(e => {
                            let [t, r] = e;
                            return k().createElement(
                              'li',
                              {
                                key: t,
                                className: 'json-schema-2020-12-property',
                              },
                              k().createElement(p, { name: t, schema: r })
                            );
                          })
                        )
                    )
                  )
                );
          },
          keywords_PrefixItems = e => {
            let { schema: t } = e;
            const r = t?.prefixItems || [],
              n = useFn(),
              a = useIsExpandedDeeply(),
              [s, o] = (0, N.useState)(a),
              [l, c] = (0, N.useState)(!1),
              i = useComponent('Accordion'),
              p = useComponent('ExpandDeepButton'),
              m = useComponent('JSONSchema'),
              u = useComponent('KeywordType'),
              d = (0, N.useCallback)(() => {
                o(e => !e);
              }, []),
              h = (0, N.useCallback)((e, t) => {
                o(t), c(t);
              }, []);
            return Array.isArray(r) && 0 !== r.length
              ? k().createElement(
                  eo.Provider,
                  { value: l },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-keyword json-schema-2020-12-keyword--prefixItems',
                    },
                    k().createElement(
                      i,
                      { expanded: s, onChange: d },
                      k().createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                        },
                        'Prefix items'
                      )
                    ),
                    k().createElement(p, { expanded: s, onClick: h }),
                    k().createElement(u, { schema: { prefixItems: r } }),
                    k().createElement(
                      'ul',
                      {
                        className: Zn()(
                          'json-schema-2020-12-keyword__children',
                          {
                            'json-schema-2020-12-keyword__children--collapsed':
                              !s,
                          }
                        ),
                      },
                      s &&
                        k().createElement(
                          k().Fragment,
                          null,
                          r.map((e, t) =>
                            k().createElement(
                              'li',
                              {
                                key: `#${t}`,
                                className: 'json-schema-2020-12-property',
                              },
                              k().createElement(m, {
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
          },
          keywords_Items = e => {
            let { schema: t } = e;
            const r = useFn(),
              n = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'items')) return null;
            const a = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Items'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--items',
              },
              k().createElement(n, { name: a, schema: t.items })
            );
          },
          keywords_Contains = e => {
            let { schema: t } = e;
            const r = useFn(),
              n = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'contains')) return null;
            const a = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Contains'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--contains',
              },
              k().createElement(n, { name: a, schema: t.contains })
            );
          },
          keywords_Properties_Properties = e => {
            let { schema: t } = e;
            const r = useFn(),
              n = t?.properties || {},
              a = Array.isArray(t?.required) ? t.required : [],
              s = useComponent('JSONSchema');
            return 0 === Object.keys(n).length
              ? null
              : k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--properties',
                  },
                  k().createElement(
                    'ul',
                    null,
                    Object.entries(n).map(e => {
                      let [n, o] = e;
                      const l = a.includes(n),
                        c = r.getDependentRequired(n, t);
                      return k().createElement(
                        'li',
                        {
                          key: n,
                          className: Zn()('json-schema-2020-12-property', {
                            'json-schema-2020-12-property--required': l,
                          }),
                        },
                        k().createElement(s, {
                          name: n,
                          schema: o,
                          dependentRequired: c,
                        })
                      );
                    })
                  )
                );
          },
          PatternProperties_PatternProperties = e => {
            let { schema: t } = e;
            const r = t?.patternProperties || {},
              n = useComponent('JSONSchema');
            return 0 === Object.keys(r).length
              ? null
              : k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--patternProperties',
                  },
                  k().createElement(
                    'ul',
                    null,
                    Object.entries(r).map(e => {
                      let [t, r] = e;
                      return k().createElement(
                        'li',
                        { key: t, className: 'json-schema-2020-12-property' },
                        k().createElement(n, { name: t, schema: r })
                      );
                    })
                  )
                );
          },
          keywords_AdditionalProperties = e => {
            let { schema: t } = e;
            const r = useFn(),
              { additionalProperties: n } = t,
              a = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'additionalProperties')) return null;
            const s = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Additional properties'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--additionalProperties',
              },
              !0 === n
                ? k().createElement(
                    k().Fragment,
                    null,
                    s,
                    k().createElement(
                      'span',
                      {
                        className:
                          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
                      },
                      'allowed'
                    )
                  )
                : !1 === n
                ? k().createElement(
                    k().Fragment,
                    null,
                    s,
                    k().createElement(
                      'span',
                      {
                        className:
                          'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
                      },
                      'forbidden'
                    )
                  )
                : k().createElement(a, { name: s, schema: n })
            );
          },
          keywords_PropertyNames = e => {
            let { schema: t } = e;
            const r = useFn(),
              { propertyNames: n } = t,
              a = useComponent('JSONSchema'),
              s = k().createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                },
                'Property names'
              );
            return r.hasKeyword(t, 'propertyNames')
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--propertyNames',
                  },
                  k().createElement(a, { name: s, schema: n })
                )
              : null;
          },
          keywords_UnevaluatedItems = e => {
            let { schema: t } = e;
            const r = useFn(),
              { unevaluatedItems: n } = t,
              a = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'unevaluatedItems')) return null;
            const s = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Unevaluated items'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedItems',
              },
              k().createElement(a, { name: s, schema: n })
            );
          },
          keywords_UnevaluatedProperties = e => {
            let { schema: t } = e;
            const r = useFn(),
              { unevaluatedProperties: n } = t,
              a = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'unevaluatedProperties')) return null;
            const s = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Unevaluated properties'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedProperties',
              },
              k().createElement(a, { name: s, schema: n })
            );
          },
          Type = e => {
            let { schema: t, isCircular: r } = e;
            const n = useFn().getType(t),
              a = r ? ' [circular]' : '';
            return k().createElement(
              'strong',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
              },
              `${n}${a}`
            );
          };
        Type.defaultProps = { isCircular: !1 };
        const ao = Type,
          Enum_Enum = e => {
            let { schema: t } = e;
            const r = useFn();
            return Array.isArray(t?.enum)
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--enum',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                    },
                    'Allowed values'
                  ),
                  k().createElement(
                    'ul',
                    null,
                    t.enum.map(e => {
                      const t = r.stringify(e);
                      return k().createElement(
                        'li',
                        { key: t },
                        k().createElement(
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
          },
          keywords_Const = e => {
            let { schema: t } = e;
            const r = useFn();
            return r.hasKeyword(t, 'const')
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--const',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                    },
                    'Const'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
                    },
                    r.stringify(t.const)
                  )
                )
              : null;
          },
          Constraint = e => {
            let { constraint: t } = e;
            return k().createElement(
              'span',
              {
                className: `json-schema-2020-12__constraint json-schema-2020-12__constraint--${t.scope}`,
              },
              t.value
            );
          },
          so = k().memo(Constraint),
          DependentRequired_DependentRequired = e => {
            let { dependentRequired: t } = e;
            return 0 === t.length
              ? null
              : k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentRequired',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                    },
                    'Required when defined'
                  ),
                  k().createElement(
                    'ul',
                    null,
                    t.map(e =>
                      k().createElement(
                        'li',
                        { key: e },
                        k().createElement(
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
          },
          keywords_ContentSchema = e => {
            let { schema: t } = e;
            const r = useFn(),
              n = useComponent('JSONSchema');
            if (!r.hasKeyword(t, 'contentSchema')) return null;
            const a = k().createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Content schema'
            );
            return k().createElement(
              'div',
              {
                className:
                  'json-schema-2020-12-keyword json-schema-2020-12-keyword--contentSchema',
              },
              k().createElement(n, { name: a, schema: t.contentSchema })
            );
          },
          Title = e => {
            let { title: t, schema: r } = e;
            const n = useFn();
            return t || n.getTitle(r)
              ? k().createElement(
                  'div',
                  { className: 'json-schema-2020-12__title' },
                  t || n.getTitle(r)
                )
              : null;
          };
        Title.defaultProps = { title: '' };
        const oo = Title,
          keywords_Description_Description = e => {
            let { schema: t } = e;
            return t?.description
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--description',
                  },
                  k().createElement(
                    'div',
                    {
                      className:
                        'json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary',
                    },
                    t.description
                  )
                )
              : null;
          },
          keywords_Default = e => {
            let { schema: t } = e;
            const r = useFn();
            return r.hasKeyword(t, 'default')
              ? k().createElement(
                  'div',
                  {
                    className:
                      'json-schema-2020-12-keyword json-schema-2020-12-keyword--default',
                  },
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
                    },
                    'Default'
                  ),
                  k().createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
                    },
                    r.stringify(t.default)
                  )
                )
              : null;
          },
          keywords_Deprecated = e => {
            let { schema: t } = e;
            return !0 !== t?.deprecated
              ? null
              : k().createElement(
                  'span',
                  {
                    className:
                      'json-schema-2020-12__attribute json-schema-2020-12__attribute--warning',
                  },
                  'deprecated'
                );
          },
          keywords_ReadOnly = e => {
            let { schema: t } = e;
            return !0 !== t?.readOnly
              ? null
              : k().createElement(
                  'span',
                  {
                    className:
                      'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
                  },
                  'read-only'
                );
          },
          keywords_WriteOnly = e => {
            let { schema: t } = e;
            return !0 !== t?.writeOnly
              ? null
              : k().createElement(
                  'span',
                  {
                    className:
                      'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
                  },
                  'write-only'
                );
          },
          Accordion = e => {
            let { expanded: t, children: r, onChange: n } = e;
            const a = useComponent('ChevronRightIcon'),
              s = (0, N.useCallback)(
                e => {
                  n(e, !t);
                },
                [t, n]
              );
            return k().createElement(
              'button',
              {
                type: 'button',
                className: 'json-schema-2020-12-accordion',
                onClick: s,
              },
              k().createElement(
                'div',
                { className: 'json-schema-2020-12-accordion__children' },
                r
              ),
              k().createElement(
                'span',
                {
                  className: Zn()('json-schema-2020-12-accordion__icon', {
                    'json-schema-2020-12-accordion__icon--expanded': t,
                    'json-schema-2020-12-accordion__icon--collapsed': !t,
                  }),
                },
                k().createElement(a, null)
              )
            );
          };
        Accordion.defaultProps = { expanded: !1 };
        const lo = Accordion,
          ExpandDeepButton_ExpandDeepButton = e => {
            let { expanded: t, onClick: r } = e;
            const n = (0, N.useCallback)(
              e => {
                r(e, !t);
              },
              [t, r]
            );
            return k().createElement(
              'button',
              {
                type: 'button',
                className: 'json-schema-2020-12-expand-deep-button',
                onClick: n,
              },
              t ? 'Collapse all' : 'Expand all'
            );
          },
          icons_ChevronRight = () =>
            k().createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
              },
              k().createElement('path', {
                d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
              })
            ),
          fn_upperFirst = e =>
            'string' == typeof e
              ? `${e.charAt(0).toUpperCase()}${e.slice(1)}`
              : e,
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
            const { type: n, prefixItems: a, items: s } = e,
              getArrayType = () => {
                if (Array.isArray(a)) {
                  const e = a.map(e => getType(e, t)),
                    r = s ? getType(s, t) : 'any';
                  return `array<[${e.join(', ')}], ${r}>`;
                }
                if (s) {
                  return `array<${getType(s, t)}>`;
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
              o = [
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
                      if (['int32', 'int64'].includes(e.format))
                        return 'integer';
                      if (['float', 'double'].includes(e.format))
                        return 'number';
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
                          return Number.isInteger(e.const)
                            ? 'integer'
                            : 'number';
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
            return t.delete(e), o || 'any';
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
                s = 'number' == typeof t,
                o = 'number' == typeof r,
                l = 'number' == typeof n,
                c = 'number' == typeof a,
                i = l && (!s || t < n),
                p = c && (!o || r > a);
              if ((s || l) && (o || c))
                return `${i ? '(' : '['}${i ? n : t}, ${p ? a : r}${
                  p ? ')' : ']'
                }`;
              if (s || l) return `${i ? '>' : '≥'} ${i ? n : t}`;
              if (o || c) return `${p ? '<' : '≤'} ${p ? a : r}`;
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
                t.push({
                  scope: 'string',
                  value: `encoding: ${e.contentEncoding}`,
                });
            const s = stringifyConstraintRange(
              e?.hasUniqueItems ? 'unique items' : 'items',
              e?.minItems,
              e?.maxItems
            );
            null !== s && t.push({ scope: 'array', value: s });
            const o = stringifyConstraintRange(
              'contained items',
              e?.minContains,
              e?.maxContains
            );
            null !== o && t.push({ scope: 'array', value: o });
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
                    return Array.isArray(a) && a.includes(e)
                      ? (t.add(n), t)
                      : t;
                  }, new Set())
                )
              : [],
          withJSONSchemaContext = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const r = {
                components: {
                  JSONSchema: no,
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
                  KeywordType: ao,
                  KeywordEnum: Enum_Enum,
                  KeywordConst: keywords_Const,
                  KeywordConstraint: so,
                  KeywordDependentRequired: DependentRequired_DependentRequired,
                  KeywordContentSchema: keywords_ContentSchema,
                  KeywordTitle: oo,
                  KeywordDescription: keywords_Description_Description,
                  KeywordDefault: keywords_Default,
                  KeywordDeprecated: keywords_Deprecated,
                  KeywordReadOnly: keywords_ReadOnly,
                  KeywordWriteOnly: keywords_WriteOnly,
                  Accordion: lo,
                  ExpandDeepButton: ExpandDeepButton_ExpandDeepButton,
                  ChevronRightIcon: icons_ChevronRight,
                  ...t.components,
                },
                config: {
                  default$schema:
                    'https://json-schema.org/draft/2020-12/schema',
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
                k().createElement(
                  Qs.Provider,
                  { value: r },
                  k().createElement(e, t)
                );
            return (
              (HOC.contexts = { JSONSchemaContext: Qs }),
              (HOC.displayName = e.displayName),
              HOC
            );
          },
          json_schema_2020_12 = () => ({
            components: {
              JSONSchema202012: no,
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
              JSONSchema202012KeywordDependentSchemas:
                keywords_DependentSchemas,
              JSONSchema202012KeywordPrefixItems: keywords_PrefixItems,
              JSONSchema202012KeywordItems: keywords_Items,
              JSONSchema202012KeywordContains: keywords_Contains,
              JSONSchema202012KeywordProperties: keywords_Properties_Properties,
              JSONSchema202012KeywordPatternProperties:
                PatternProperties_PatternProperties,
              JSONSchema202012KeywordAdditionalProperties:
                keywords_AdditionalProperties,
              JSONSchema202012KeywordPropertyNames: keywords_PropertyNames,
              JSONSchema202012KeywordUnevaluatedItems:
                keywords_UnevaluatedItems,
              JSONSchema202012KeywordUnevaluatedProperties:
                keywords_UnevaluatedProperties,
              JSONSchema202012KeywordType: ao,
              JSONSchema202012KeywordEnum: Enum_Enum,
              JSONSchema202012KeywordConst: keywords_Const,
              JSONSchema202012KeywordConstraint: so,
              JSONSchema202012KeywordDependentRequired:
                DependentRequired_DependentRequired,
              JSONSchema202012KeywordContentSchema: keywords_ContentSchema,
              JSONSchema202012KeywordTitle: oo,
              JSONSchema202012KeywordDescription:
                keywords_Description_Description,
              JSONSchema202012KeywordDefault: keywords_Default,
              JSONSchema202012KeywordDeprecated: keywords_Deprecated,
              JSONSchema202012KeywordReadOnly: keywords_ReadOnly,
              JSONSchema202012KeywordWriteOnly: keywords_WriteOnly,
              JSONSchema202012Accordion: lo,
              JSONSchema202012ExpandDeepButton:
                ExpandDeepButton_ExpandDeepButton,
              JSONSchema202012ChevronRightIcon: icons_ChevronRight,
              withJSONSchema202012Context: withJSONSchemaContext,
              JSONSchema202012DeepExpansionContext: () => eo,
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
          co = require('lodash/isPlainObject');
        var io = __webpack_require__.n(co);
        const array = (e, t) => {
            let { sample: r } = t;
            return (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const { minItems: r, maxItems: n, uniqueItems: a } = t,
                { contains: s, minContains: o, maxContains: l } = t;
              let c = [...e];
              if (null != s && 'object' == typeof s) {
                if (Number.isInteger(o) && o > 1) {
                  const e = c.at(0);
                  for (let t = 1; t < o; t += 1) c.unshift(e);
                }
                Number.isInteger(l);
              }
              if (
                (Number.isInteger(n) && n > 0 && (c = e.slice(0, n)),
                Number.isInteger(r) && r > 0)
              )
                for (let e = 0; c.length < r; e += 1) c.push(c[e % c.length]);
              return !0 === a && (c = Array.from(new Set(c))), c;
            })(r, e);
          },
          object = () => {
            throw new Error('Not implemented');
          },
          bytes = e => ae()(e),
          pick = e => e.at(0),
          predicates_isBooleanJSONSchema = e => 'boolean' == typeof e,
          isJSONSchemaObject = e => io()(e),
          isJSONSchema = e =>
            predicates_isBooleanJSONSchema(e) || isJSONSchemaObject(e),
          email = () => 'user@example.com',
          idn_email = () => '실례@example.com',
          hostname = () => 'example.com',
          idn_hostname = () => '실례.com',
          ipv4 = () => '198.51.100.42',
          ipv6 = () => '2001:0db8:5b96:0000:0000:426f:8e17:642a',
          uri = () => 'https://example.com/',
          uri_reference = () => 'path/index.html',
          iri = () => 'https://실례.com/',
          iri_reference = () => 'path/실례.html',
          uuid = () => '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          uri_template = () => 'https://example.com/dictionary/{term:1}/{term}',
          json_pointer = () => '/a/b/c',
          relative_json_pointer = () => '1/0',
          date_time = () => new Date().toISOString(),
          date = () => new Date().toISOString().substring(0, 10),
          time = () => new Date().toISOString().substring(11),
          duration = () => 'P3D',
          generators_password = () => '********',
          regex = () => '^[a-z]+$';
        const po = class Registry {
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
          },
          mo = new po(),
          api_formatAPI = (e, t) =>
            'function' == typeof t
              ? mo.register(e, t)
              : null === t
              ? mo.unregister(e)
              : mo.get(e);
        var uo = __webpack_require__(871).Buffer;
        const _7bit = e => uo.from(e).toString('ascii');
        var ho = __webpack_require__(871).Buffer;
        const _8bit = e => ho.from(e).toString('utf8');
        var go = __webpack_require__(871).Buffer;
        const binary = e => go.from(e).toString('binary'),
          quoted_printable = e => {
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
                    ('0' + n.charCodeAt(e).toString(16))
                      .slice(-2)
                      .toUpperCase();
              } else t += '=' + ('0' + n.toString(16)).slice(-2).toUpperCase();
            }
            return t;
          };
        var yo = __webpack_require__(871).Buffer;
        const base16 = e => yo.from(e).toString('hex');
        var fo = __webpack_require__(871).Buffer;
        const base32 = e => {
          const t = fo.from(e).toString('utf8'),
            r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
          let n = 0,
            a = '',
            s = 0,
            o = 0;
          for (let e = 0; e < t.length; e++)
            for (s = (s << 8) | t.charCodeAt(e), o += 8; o >= 5; )
              (a += r.charAt((s >>> (o - 5)) & 31)), (o -= 5);
          o > 0 &&
            ((a += r.charAt((s << (5 - o)) & 31)),
            (n = (8 - ((8 * t.length) % 5)) % 5));
          for (let e = 0; e < n; e++) a += '=';
          return a;
        };
        var So = __webpack_require__(871).Buffer;
        const base64 = e => So.from(e).toString('base64');
        var Eo = __webpack_require__(871).Buffer;
        const base64url = e => Eo.from(e).toString('base64url');
        const vo = new (class EncoderRegistry extends po {
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
              ? vo.register(e, t)
              : null === t
              ? vo.unregister(e)
              : vo.get(e);
        encoderAPI.getDefaults = () => vo.defaults;
        const _o = encoderAPI,
          wo = {
            'text/plain': () => 'string',
            'text/css': () => '.selector { border: 1px solid red }',
            'text/csv': () => 'value1,value2,value3',
            'text/html': () => '<p>content</p>',
            'text/calendar': () => 'BEGIN:VCALENDAR',
            'text/javascript': () => "console.dir('Hello world!');",
            'text/xml': () => '<person age="30">John Doe</person>',
            'text/*': () => 'string',
          },
          bo = { 'image/*': () => bytes(25).toString('binary') },
          Co = { 'audio/*': () => bytes(25).toString('binary') },
          xo = { 'video/*': () => bytes(25).toString('binary') },
          Oo = {
            'application/json': () => '{"key":"value"}',
            'application/ld+json': () => '{"name": "John Doe"}',
            'application/x-httpd-php': () =>
              "<?php echo '<p>Hello World!</p>'; ?>",
            'application/rtf': () =>
              String.raw`{\rtf1\adeflang1025\ansi\ansicpg1252\uc1`,
            'application/x-sh': () => 'echo "Hello World!"',
            'application/xhtml+xml': () => '<p>content</p>',
            'application/*': () => bytes(25).toString('binary'),
          };
        const No = new (class MediaTypeRegistry extends po {
            #e = { ...wo, ...bo, ...Co, ...xo, ...Oo };
            data = { ...this.#e };
            get defaults() {
              return { ...this.#e };
            }
          })(),
          mediaTypeAPI = (e, t) => {
            if ('function' == typeof t) return No.register(e, t);
            if (null === t) return No.unregister(e);
            const r = e.split(';').at(0),
              n = `${r.split('/').at(0)}/*`;
            return No.get(e) || No.get(r) || No.get(n);
          };
        mediaTypeAPI.getDefaults = () => No.defaults;
        const ko = mediaTypeAPI,
          types_string = function (e) {
            let { sample: t } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const {
                contentEncoding: r,
                contentMediaType: n,
                contentSchema: a,
              } = e,
              { pattern: s, format: o } = e,
              l = _o(r) || zn();
            let c;
            if ('string' == typeof s)
              c = (e => {
                try {
                  return new (ar())(e).gen();
                } catch {
                  return 'string';
                }
              })(s);
            else if ('string' == typeof o)
              c = (e => {
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
              c =
                Array.isArray(t) || 'object' == typeof t
                  ? JSON.stringify(t)
                  : String(t);
            else if ('string' == typeof n) {
              const t = ko(n);
              'function' == typeof t && (c = t(e));
            } else c = 'string';
            return l(
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
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
              })(c, e)
            );
          },
          generators_float = () => 0.1,
          generators_double = () => 0.1,
          types_number = e => {
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
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                const {
                    minimum: r,
                    maximum: n,
                    exclusiveMinimum: a,
                    exclusiveMaximum: s,
                  } = t,
                  { multipleOf: o } = t,
                  l = Number.isInteger(e) ? 1 : Number.EPSILON;
                let c = 'number' == typeof r ? r : null,
                  i = 'number' == typeof n ? n : null,
                  p = e;
                if (
                  ('number' == typeof a &&
                    (c = null !== c ? Math.max(c, a + l) : a + l),
                  'number' == typeof s &&
                    (i = null !== i ? Math.min(i, s - l) : s - l),
                  (p = (c > i && e) || c || i || p),
                  'number' == typeof o && o > 0)
                ) {
                  const e = p % o;
                  p = 0 === e ? p : p + o - e;
                }
                return p;
              })(r, e)
            );
          },
          int32 = () => (2 ** 30) >>> 0,
          int64 = () => 2 ** 53 - 1,
          types_integer = e => {
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
          },
          types_boolean = e => 'boolean' != typeof e.default || e.default,
          Ao = new Proxy(
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
          ),
          Io = [
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
              !!(Array.isArray(t) && t.length >= 1) ||
              void 0 !== n ||
              void 0 !== r
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
          qo = {
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
        qo.number = qo.integer;
        const jo = 'string',
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
                if (Io.includes(t)) return t;
              }
            }
            return Io.includes(e) ? e : null;
          },
          inferType = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new WeakSet();
            if (!isJSONSchemaObject(e)) return jo;
            if (t.has(e)) return jo;
            t.add(e);
            let { type: r, const: n } = e;
            if (((r = foldType(r)), 'string' != typeof r)) {
              const t = Object.keys(qo);
              e: for (let n = 0; n < t.length; n += 1) {
                const a = t[n],
                  s = qo[a];
                for (let t = 0; t < s.length; t += 1) {
                  const n = s[t];
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
                s = combineTypes('oneOf'),
                o = e.not ? inferType(e.not, t) : null;
              (n || a || s || o) &&
                (r = foldType([n, a, s, o].filter(Boolean)));
            }
            if ('string' != typeof r && hasExample(e)) {
              const t = extractExample(e),
                n = inferTypeFromValue(t);
              r = 'string' == typeof n ? n : r;
            }
            return t.delete(e), r || jo;
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
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
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
              for (const s of a) {
                const a = t.properties[s] || {},
                  o = e.properties[s] || {};
                (a.readOnly && !r.includeReadOnly) ||
                (a.writeOnly && !r.includeWriteOnly)
                  ? (n.required = (n.required || []).filter(e => e !== s))
                  : (n.properties[s] = merge(o, a, r));
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
          },
          Po = merge,
          main_sampleFromSchemaGeneric = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : void 0,
              n =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            'function' == typeof e?.toJS && (e = e.toJS()), (e = typeCast(e));
            let a = void 0 !== r || hasExample(e);
            const s = !a && Array.isArray(e.oneOf) && e.oneOf.length > 0,
              o = !a && Array.isArray(e.anyOf) && e.anyOf.length > 0;
            if (!a && (s || o)) {
              const r = typeCast(pick(s ? e.oneOf : e.anyOf));
              !(e = Po(e, r, t)).xml && r.xml && (e.xml = r.xml),
                hasExample(e) && hasExample(r) && (a = !0);
            }
            const l = {};
            let {
                xml: c,
                properties: i,
                additionalProperties: p,
                items: m,
                contains: u,
              } = e || {},
              d = type_getType(e),
              { includeReadOnly: h, includeWriteOnly: g } = t;
            c = c || {};
            let y,
              { name: f, prefix: S, namespace: E } = c,
              v = {};
            if (
              (Object.hasOwn(e, 'type') || (e.type = d),
              n && ((f = f || 'notagname'), (y = (S ? `${S}:` : '') + f), E))
            ) {
              l[S ? `xmlns:${S}` : 'xmlns'] = E;
            }
            n && (v[y] = []);
            const _ = objectify(i);
            let w,
              b = 0;
            const hasExceededMaxProperties = () =>
                Number.isInteger(e.maxProperties) &&
                e.maxProperties > 0 &&
                b >= e.maxProperties,
              canAddProperty = t =>
                !(Number.isInteger(e.maxProperties) && e.maxProperties > 0) ||
                (!hasExceededMaxProperties() &&
                  (!(t =>
                    !Array.isArray(e.required) ||
                    0 === e.required.length ||
                    !e.required.includes(t))(t) ||
                    e.maxProperties -
                      b -
                      (() => {
                        if (
                          !Array.isArray(e.required) ||
                          0 === e.required.length
                        )
                          return 0;
                        let t = 0;
                        return (
                          n
                            ? e.required.forEach(
                                e => (t += void 0 === v[e] ? 0 : 1)
                              )
                            : e.required.forEach(e => {
                                t +=
                                  void 0 === v[y]?.find(t => void 0 !== t[e])
                                    ? 0
                                    : 1;
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
                    if (e && _[r]) {
                      if (((_[r].xml = _[r].xml || {}), _[r].xml.attribute)) {
                        const e = Array.isArray(_[r].enum)
                          ? pick(_[r].enum)
                          : void 0;
                        if (hasExample(_[r]))
                          l[_[r].xml.name || r] = extractExample(_[r]);
                        else if (void 0 !== e) l[_[r].xml.name || r] = e;
                        else {
                          const e = typeCast(_[r]),
                            t = type_getType(e),
                            n = _[r].xml.name || r;
                          l[n] = Ao[t](e);
                        }
                        return;
                      }
                      _[r].xml.name = _[r].xml.name || r;
                    } else _[r] || !1 === p || (_[r] = { xml: { name: r } });
                    let s = main_sampleFromSchemaGeneric(_[r], t, a, n);
                    canAddProperty(r) &&
                      (b++,
                      Array.isArray(s)
                        ? (v[y] = v[y].concat(s))
                        : v[y].push(s));
                  }
                : (r, a) => {
                    if (canAddProperty(r)) {
                      if (
                        io()(e.discriminator?.mapping) &&
                        e.discriminator.propertyName === r &&
                        'string' == typeof e.$$ref
                      ) {
                        for (const t in e.discriminator.mapping)
                          if (
                            -1 !== e.$$ref.search(e.discriminator.mapping[t])
                          ) {
                            v[r] = t;
                            break;
                          }
                      } else v[r] = main_sampleFromSchemaGeneric(_[r], t, a, n);
                      b++;
                    }
                  }),
              a)
            ) {
              let a;
              if (((a = void 0 !== r ? r : extractExample(e)), !n)) {
                if ('number' == typeof a && 'string' === d) return `${a}`;
                if ('string' != typeof a || 'string' === d) return a;
                try {
                  return JSON.parse(a);
                } catch {
                  return a;
                }
              }
              if ('array' === d) {
                if (!Array.isArray(a)) {
                  if ('string' == typeof a) return a;
                  a = [a];
                }
                let r = [];
                return (
                  isJSONSchemaObject(m) &&
                    ((m.xml = m.xml || c || {}),
                    (m.xml.name = m.xml.name || c.name),
                    (r = a.map(e => main_sampleFromSchemaGeneric(m, t, e, n)))),
                  isJSONSchemaObject(u) &&
                    ((u.xml = u.xml || c || {}),
                    (u.xml.name = u.xml.name || c.name),
                    (r = [
                      main_sampleFromSchemaGeneric(u, t, void 0, n),
                      ...r,
                    ])),
                  (r = Ao.array(e, { sample: r })),
                  c.wrapped
                    ? ((v[y] = r), or()(l) || v[y].push({ _attr: l }))
                    : (v = r),
                  v
                );
              }
              if ('object' === d) {
                if ('string' == typeof a) return a;
                for (const e in a)
                  Object.hasOwn(a, e) &&
                    ((_[e]?.readOnly && !h) ||
                      (_[e]?.writeOnly && !g) ||
                      (_[e]?.xml?.attribute
                        ? (l[_[e].xml.name || e] = a[e])
                        : w(e, a[e])));
                return or()(l) || v[y].push({ _attr: l }), v;
              }
              return (v[y] = or()(l) ? a : [{ _attr: l }, a]), v;
            }
            if ('array' === d) {
              let r = [];
              if (isJSONSchemaObject(u))
                if (
                  (n &&
                    ((u.xml = u.xml || e.xml || {}),
                    (u.xml.name = u.xml.name || c.name)),
                  Array.isArray(u.anyOf))
                )
                  r.push(
                    ...u.anyOf.map(e =>
                      main_sampleFromSchemaGeneric(Po(e, u, t), t, void 0, n)
                    )
                  );
                else if (Array.isArray(u.oneOf))
                  r.push(
                    ...u.oneOf.map(e =>
                      main_sampleFromSchemaGeneric(Po(e, u, t), t, void 0, n)
                    )
                  );
                else {
                  if (!(!n || (n && c.wrapped)))
                    return main_sampleFromSchemaGeneric(u, t, void 0, n);
                  r.push(main_sampleFromSchemaGeneric(u, t, void 0, n));
                }
              if (isJSONSchemaObject(m))
                if (
                  (n &&
                    ((m.xml = m.xml || e.xml || {}),
                    (m.xml.name = m.xml.name || c.name)),
                  Array.isArray(m.anyOf))
                )
                  r.push(
                    ...m.anyOf.map(e =>
                      main_sampleFromSchemaGeneric(Po(e, m, t), t, void 0, n)
                    )
                  );
                else if (Array.isArray(m.oneOf))
                  r.push(
                    ...m.oneOf.map(e =>
                      main_sampleFromSchemaGeneric(Po(e, m, t), t, void 0, n)
                    )
                  );
                else {
                  if (!(!n || (n && c.wrapped)))
                    return main_sampleFromSchemaGeneric(m, t, void 0, n);
                  r.push(main_sampleFromSchemaGeneric(m, t, void 0, n));
                }
              return (
                (r = Ao.array(e, { sample: r })),
                n && c.wrapped
                  ? ((v[y] = r), or()(l) || v[y].push({ _attr: l }), v)
                  : r
              );
            }
            if ('object' === d) {
              for (let e in _)
                Object.hasOwn(_, e) &&
                  (_[e]?.deprecated ||
                    (_[e]?.readOnly && !h) ||
                    (_[e]?.writeOnly && !g) ||
                    w(e));
              if (
                (n && l && v[y].push({ _attr: l }), hasExceededMaxProperties())
              )
                return v;
              if (predicates_isBooleanJSONSchema(p) && p)
                n
                  ? v[y].push({ additionalProp: 'Anything can be here' })
                  : (v.additionalProp1 = {}),
                  b++;
              else if (isJSONSchemaObject(p)) {
                const r = p,
                  a = main_sampleFromSchemaGeneric(r, t, void 0, n);
                if (
                  n &&
                  'string' == typeof r?.xml?.name &&
                  'notagname' !== r?.xml?.name
                )
                  v[y].push(a);
                else {
                  const t =
                    Number.isInteger(e.minProperties) &&
                    e.minProperties > 0 &&
                    b < e.minProperties
                      ? e.minProperties - b
                      : 3;
                  for (let e = 1; e <= t; e++) {
                    if (hasExceededMaxProperties()) return v;
                    if (n) {
                      const t = {};
                      (t['additionalProp' + e] = a.notagname), v[y].push(t);
                    } else v['additionalProp' + e] = a;
                    b++;
                  }
                }
              }
              return v;
            }
            let C;
            if (void 0 !== e.const) C = e.const;
            else if (e && Array.isArray(e.enum))
              C = pick(normalizeArray(e.enum));
            else {
              const r = isJSONSchemaObject(e.contentSchema)
                ? main_sampleFromSchemaGeneric(e.contentSchema, t, void 0, n)
                : void 0;
              C = Ao[d](e, { sample: r });
            }
            return n ? ((v[y] = or()(l) ? C : [{ _attr: l }, C]), v) : C;
          },
          main_createXMLExample = (e, t, r) => {
            const n = main_sampleFromSchemaGeneric(e, t, r, !0);
            if (n)
              return 'string' == typeof n
                ? n
                : rr()(n, { declaration: !0, indent: '\t' });
          },
          main_sampleFromSchema = (e, t, r) =>
            main_sampleFromSchemaGeneric(e, t, r, !1),
          main_resolver = (e, t, r) => [
            e,
            JSON.stringify(t),
            JSON.stringify(r),
          ],
          Mo = utils_memoizeN(main_createXMLExample, main_resolver),
          Ro = utils_memoizeN(main_sampleFromSchema, main_resolver),
          To = [{ when: /json/, shouldStringifyTypes: ['string'] }],
          Jo = ['object'],
          fn_get_json_sample_schema = e => (t, r, n, a) => {
            const { fn: s } = e(),
              o = s.jsonSchema202012.memoizedSampleFromSchema(t, r, a),
              l = typeof o,
              c = To.reduce(
                (e, t) =>
                  t.when.test(n) ? [...e, ...t.shouldStringifyTypes] : e,
                Jo
              );
            return G()(c, e => e === l) ? JSON.stringify(o, null, 2) : o;
          },
          fn_get_yaml_sample_schema = e => (t, r, n, a) => {
            const { fn: s } = e(),
              o = s.jsonSchema202012.getJsonSampleSchema(t, r, n, a);
            let l;
            try {
              (l = Re().dump(
                Re().load(o),
                { lineWidth: -1 },
                { schema: Me.JSON_SCHEMA }
              )),
                '\n' === l[l.length - 1] && (l = l.slice(0, l.length - 1));
            } catch (e) {
              return console.error(e), 'error: could not generate yaml example';
            }
            return l.replace(/\t/g, '  ');
          },
          fn_get_xml_sample_schema = e => (t, r, n) => {
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
          },
          fn_get_sample_schema = e =>
            function (t) {
              let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : '',
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : void 0;
              const { fn: s } = e();
              return (
                'function' == typeof t?.toJS && (t = t.toJS()),
                'function' == typeof a?.toJS && (a = a.toJS()),
                /xml/.test(r)
                  ? s.jsonSchema202012.getXmlSampleSchema(t, n, a)
                  : /(yaml|yml)/.test(r)
                  ? s.jsonSchema202012.getYamlSampleSchema(t, n, r, a)
                  : s.jsonSchema202012.getJsonSampleSchema(t, n, r, a)
              );
            },
          json_schema_2020_12_samples = e => {
            let { getSystem: t } = e;
            const r = fn_get_json_sample_schema(t),
              n = fn_get_yaml_sample_schema(t),
              a = fn_get_xml_sample_schema(t),
              s = fn_get_sample_schema(t);
            return {
              fn: {
                jsonSchema202012: {
                  sampleFromSchema: main_sampleFromSchema,
                  sampleFromSchemaGeneric: main_sampleFromSchemaGeneric,
                  sampleEncoderAPI: _o,
                  sampleFormatAPI: api_formatAPI,
                  sampleMediaTypeAPI: ko,
                  createXMLExample: main_createXMLExample,
                  memoizedSampleFromSchema: Ro,
                  memoizedCreateXMLExample: Mo,
                  getJsonSampleSchema: r,
                  getYamlSampleSchema: n,
                  getXmlSampleSchema: a,
                  getSampleSchema: s,
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
          GIT_DIRTY: $o,
          GIT_COMMIT: Vo,
          PACKAGE_VERSION: Ko,
          BUILD_TIME: Do,
        } = {
          PACKAGE_VERSION: '5.10.0',
          GIT_COMMIT: 'g15e91ee5',
          GIT_DIRTY: !0,
          BUILD_TIME: 'Wed, 15 Nov 2023 13:40:52 GMT',
        };
        function SwaggerUI(e) {
          (U.versions = U.versions || {}),
            (U.versions.swaggerUi = {
              version: Ko,
              gitRevision: Vo,
              gitDirty: $o,
              buildTimestamp: Do,
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
                curl_powershell: {
                  title: 'cURL (PowerShell)',
                  syntax: 'powershell',
                },
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
                  t = U.location.search;
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
          const a = O()({}, t, e, r),
            s = {
              system: { configs: a.configs },
              plugins: a.presets,
              pluginsOptions: a.pluginsOptions,
              state: O()(
                {
                  layout: { layout: a.layout, filter: a.filter },
                  spec: { spec: '', url: a.url },
                  requestSnippets: a.requestSnippets,
                },
                a.initialState
              ),
            };
          if (a.initialState)
            for (var o in a.initialState)
              Object.prototype.hasOwnProperty.call(a.initialState, o) &&
                void 0 === a.initialState[o] &&
                delete s.state[o];
          var l = new Store(s);
          l.register([
            a.plugins,
            () => ({ fn: a.fn, components: a.components, state: a.state }),
          ]);
          var c = l.getSystem();
          const downloadSpec = e => {
              let t = c.specSelectors.getLocalConfig
                  ? c.specSelectors.getLocalConfig()
                  : {},
                s = O()({}, t, a, e || {}, r);
              if (
                (n && (s.domNode = n),
                l.setConfigs(s),
                c.configsActions.loaded(),
                null !== e &&
                  (!r.url &&
                  'object' == typeof s.spec &&
                  Object.keys(s.spec).length
                    ? (c.specActions.updateUrl(''),
                      c.specActions.updateLoadingStatus('success'),
                      c.specActions.updateSpec(JSON.stringify(s.spec)))
                    : c.specActions.download &&
                      s.url &&
                      !s.urls &&
                      (c.specActions.updateUrl(s.url),
                      c.specActions.download(s.url))),
                s.domNode)
              )
                c.render(s.domNode, 'App');
              else if (s.dom_id) {
                let e = document.querySelector(s.dom_id);
                c.render(e, 'App');
              } else
                null === s.dom_id ||
                  null === s.domNode ||
                  console.error(
                    'Skipped rendering: no `dom_id` or `domNode` was specified'
                  );
              return c;
            },
            i = r.config || a.configUrl;
          return i && c.specActions && c.specActions.getConfigByUrl
            ? (c.specActions.getConfigByUrl(
                {
                  url: i,
                  loadRemoteConfig: !0,
                  requestInterceptor: a.requestInterceptor,
                  responseInterceptor: a.responseInterceptor,
                },
                downloadSpec
              ),
              c)
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
        const Lo = SwaggerUI;
      })(),
      (r = r.default)
    );
  })()
);
//# sourceMappingURL=swagger-ui.js.map
