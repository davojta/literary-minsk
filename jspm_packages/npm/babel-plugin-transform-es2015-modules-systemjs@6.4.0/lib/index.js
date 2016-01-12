/* */ 
"format cjs";
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _babelHelperHoistVariables = require("babel-helper-hoist-variables");

var _babelHelperHoistVariables2 = _interopRequireDefault(_babelHelperHoistVariables);

var _babelTemplate = require("babel-template");

var _babelTemplate2 = _interopRequireDefault(_babelTemplate);

var buildTemplate = _babelTemplate2["default"]("\n  System.register(MODULE_NAME, [SOURCES], function (EXPORT_IDENTIFIER, CONTEXT_IDENTIFIER) {\n    BEFORE_BODY;\n    return {\n      setters: [SETTERS],\n      execute: function () {\n        BODY;\n      }\n    };\n  });\n");

var buildExportAll = _babelTemplate2["default"]("\n  for (var KEY in TARGET) {\n    if (KEY !== \"default\") EXPORT_OBJ[KEY] = TARGET[KEY];\n  }\n");

exports["default"] = function (_ref7) {
  var t = _ref7.types;

  var IGNORE_REASSIGNMENT_SYMBOL = _Symbol();

  var reassignmentVisitor = {
    "AssignmentExpression|UpdateExpression": function AssignmentExpressionUpdateExpression(path) {
      if (path.node[IGNORE_REASSIGNMENT_SYMBOL]) return;
      path.node[IGNORE_REASSIGNMENT_SYMBOL] = true;

      var arg = path.get(path.isAssignmentExpression() ? "left" : "argument");
      if (!arg.isIdentifier()) return;

      var name = arg.node.name;

      // redeclared in this scope
      if (this.scope.getBinding(name) !== path.scope.getBinding(name)) return;

      var exportedNames = this.exports[name];
      if (!exportedNames) return;

      var node = path.node;

      for (var _iterator = exportedNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var exportedName = _ref;

        node = this.buildCall(exportedName, node).expression;
      }

      path.replaceWith(node);
    }
  };

  return {
    inherits: require("babel-plugin-transform-strict-mode"),

    visitor: {
      ReferencedIdentifier: function ReferencedIdentifier(path, state) {
        if (path.node.name == "__moduleName" && !path.scope.hasBinding("__moduleName")) {
          path.replaceWith(t.memberExpression(state.contextIdent, t.identifier("id")));
        }
      },

      Program: {
        enter: function enter(path, state) {
          state.contextIdent = path.scope.generateUidIdentifier("context");
        },
        exit: function exit(path, state) {
          var exportIdent = path.scope.generateUidIdentifier("export");
          var contextIdent = state.contextIdent;

          var exportNames = _Object$create(null);
          var modules = _Object$create(null);

          var beforeBody = [];
          var setters = [];
          var sources = [];
          var variableIds = [];

          function addExportName(key, val) {
            exportNames[key] = exportNames[key] || [];
            exportNames[key].push(val);
          }

          function pushModule(source, key, specifiers) {
            var _modules = modules[source] = modules[source] || { imports: [], exports: [] };
            _modules[key] = _modules[key].concat(specifiers);
          }

          function buildExportCall(name, val) {
            return t.expressionStatement(t.callExpression(exportIdent, [t.stringLiteral(name), val]));
          }

          var body /*: Array<Object>*/ = path.get("body");

          var canHoist = true;
          for (var _iterator2 = body, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var _path = _ref2;

            if (_path.isExportDeclaration()) _path = _path.get("declaration");
            if (_path.isVariableDeclaration() && _path.node.kind !== "var") {
              canHoist = false;
              break;
            }
          }

          for (var _iterator3 = body, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _getIterator(_iterator3);;) {
            var _ref3;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref3 = _i3.value;
            }

            var _path2 = _ref3;

            if (canHoist && _path2.isFunctionDeclaration()) {
              beforeBody.push(_path2.node);
              _path2.remove();
            } else if (_path2.isImportDeclaration()) {
              var source = _path2.node.source.value;
              pushModule(source, "imports", _path2.node.specifiers);
              for (var _name in _path2.getBindingIdentifiers()) {
                _path2.scope.removeBinding(_name);
                variableIds.push(t.identifier(_name));
              }
              _path2.remove();
            } else if (_path2.isExportAllDeclaration()) {
              pushModule(_path2.node.source.value, "exports", _path2.node);
              _path2.remove();
            } else if (_path2.isExportDefaultDeclaration()) {
              var declar = _path2.get("declaration");
              if (declar.isClassDeclaration() || declar.isFunctionDeclaration()) {
                var id = declar.node.id;
                var nodes = [];

                if (id) {
                  nodes.push(declar.node);
                  nodes.push(buildExportCall("default", id));
                  addExportName(id.name, "default");
                } else {
                  nodes.push(buildExportCall("default", t.toExpression(declar.node)));
                }

                if (!canHoist || declar.isClassDeclaration()) {
                  _path2.replaceWithMultiple(nodes);
                } else {
                  beforeBody = beforeBody.concat(nodes);
                  _path2.remove();
                }
              } else {
                _path2.replaceWith(buildExportCall("default", declar.node));
              }
            } else if (_path2.isExportNamedDeclaration()) {
              var declar = _path2.get("declaration");

              if (declar.node) {
                _path2.replaceWith(declar);

                var nodes = [];
                var bindingIdentifiers = undefined;
                if (_path2.isFunction()) {
                  // istanbul ignore next

                  var _bindingIdentifiers;

                  bindingIdentifiers = (_bindingIdentifiers = {}, _bindingIdentifiers[declar.node.id.name] = declar.node.id, _bindingIdentifiers);
                } else {
                  bindingIdentifiers = declar.getBindingIdentifiers();
                }
                for (var _name2 in bindingIdentifiers) {
                  addExportName(_name2, _name2);
                  nodes.push(buildExportCall(_name2, t.identifier(_name2)));
                }
                _path2.insertAfter(nodes);
              }

              var specifiers = _path2.node.specifiers;
              if (specifiers && specifiers.length) {
                if (_path2.node.source) {
                  pushModule(_path2.node.source.value, "exports", specifiers);
                  _path2.remove();
                } else {
                  var nodes = [];

                  for (var _iterator4 = specifiers, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _getIterator(_iterator4);;) {
                    var _ref4;

                    if (_isArray4) {
                      if (_i4 >= _iterator4.length) break;
                      _ref4 = _iterator4[_i4++];
                    } else {
                      _i4 = _iterator4.next();
                      if (_i4.done) break;
                      _ref4 = _i4.value;
                    }

                    var specifier = _ref4;

                    nodes.push(buildExportCall(specifier.exported.name, specifier.local));
                    addExportName(specifier.local.name, specifier.exported.name);
                  }

                  _path2.replaceWithMultiple(nodes);
                }
              }
            }
          }

          for (var source in modules) {
            var specifiers = modules[source];

            var setterBody = [];
            var target = path.scope.generateUidIdentifier(source);

            for (var _iterator5 = specifiers.imports, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _getIterator(_iterator5);;) {
              var _ref5;

              if (_isArray5) {
                if (_i5 >= _iterator5.length) break;
                _ref5 = _iterator5[_i5++];
              } else {
                _i5 = _iterator5.next();
                if (_i5.done) break;
                _ref5 = _i5.value;
              }

              var specifier = _ref5;

              if (t.isImportNamespaceSpecifier(specifier)) {
                setterBody.push(t.expressionStatement(t.assignmentExpression("=", specifier.local, target)));
              } else if (t.isImportDefaultSpecifier(specifier)) {
                specifier = t.importSpecifier(specifier.local, t.identifier("default"));
              }

              if (t.isImportSpecifier(specifier)) {
                setterBody.push(t.expressionStatement(t.assignmentExpression("=", specifier.local, t.memberExpression(target, specifier.imported))));
              }
            }

            if (specifiers.exports.length) {
              var exportObjRef = path.scope.generateUidIdentifier("exportObj");

              setterBody.push(t.variableDeclaration("var", [t.variableDeclarator(exportObjRef, t.objectExpression([]))]));

              for (var _iterator6 = specifiers.exports, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _getIterator(_iterator6);;) {
                var _ref6;

                if (_isArray6) {
                  if (_i6 >= _iterator6.length) break;
                  _ref6 = _iterator6[_i6++];
                } else {
                  _i6 = _iterator6.next();
                  if (_i6.done) break;
                  _ref6 = _i6.value;
                }

                var node = _ref6;

                if (t.isExportAllDeclaration(node)) {
                  setterBody.push(buildExportAll({
                    KEY: path.scope.generateUidIdentifier("key"),
                    EXPORT_OBJ: exportObjRef,
                    TARGET: target
                  }));
                } else if (t.isExportSpecifier(node)) {
                  setterBody.push(t.expressionStatement(t.assignmentExpression("=", t.memberExpression(exportObjRef, node.exported), t.memberExpression(target, node.local))));
                } else {
                  // todo
                }
              }

              setterBody.push(t.expressionStatement(t.callExpression(exportIdent, [exportObjRef])));
            }

            sources.push(t.stringLiteral(source));
            setters.push(t.functionExpression(null, [target], t.blockStatement(setterBody)));
          }

          var moduleName = this.getModuleName();
          if (moduleName) moduleName = t.stringLiteral(moduleName);

          if (canHoist) {
            _babelHelperHoistVariables2["default"](path, function (id) {
              return variableIds.push(id);
            });
          }

          if (variableIds.length) {
            beforeBody.unshift(t.variableDeclaration("var", variableIds.map(function (id) {
              return t.variableDeclarator(id);
            })));
          }

          path.traverse(reassignmentVisitor, {
            exports: exportNames,
            buildCall: buildExportCall,
            scope: path.scope
          });

          path.node.body = [buildTemplate({
            BEFORE_BODY: beforeBody,
            MODULE_NAME: moduleName,
            SETTERS: setters,
            SOURCES: sources,
            BODY: path.node.body,
            EXPORT_IDENTIFIER: exportIdent,
            CONTEXT_IDENTIFIER: contextIdent
          })];
        }
      }
    }
  };
};

module.exports = exports["default"];