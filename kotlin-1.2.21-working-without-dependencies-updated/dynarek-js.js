(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dynarek-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dynarek-js'.");
    }
    root['dynarek-js'] = factory(typeof this['dynarek-js'] === 'undefined' ? {} : this['dynarek-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var kotlin = Kotlin.kotlin;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var getKClass = Kotlin.getKClass;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var toString = Kotlin.toString;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Annotation = Kotlin.kotlin.Annotation;
  IBinop.prototype = Object.create(Enum.prototype);
  IBinop.prototype.constructor = IBinop;
  FBinop.prototype = Object.create(Enum.prototype);
  FBinop.prototype.constructor = FBinop;
  Compop.prototype = Object.create(Enum.prototype);
  Compop.prototype.constructor = Compop;
  getLocals$ObjectLiteral.prototype = Object.create(DNodeVisitor.prototype);
  getLocals$ObjectLiteral.prototype.constructor = getLocals$ObjectLiteral;
  function DFunction() {
  }
  DFunction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DFunction',
    interfaces: []
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function DFunction0(ret, body) {
    this.ret_5ch4wx$_0 = ret;
    this.body_nx5qby$_0 = body;
    this.args_nxnjvt$_0 = emptyList();
  }
  Object.defineProperty(DFunction0.prototype, 'ret', {
    get: function () {
      return this.ret_5ch4wx$_0;
    }
  });
  Object.defineProperty(DFunction0.prototype, 'body', {
    get: function () {
      return this.body_nx5qby$_0;
    }
  });
  Object.defineProperty(DFunction0.prototype, 'args', {
    get: function () {
      return this.args_nxnjvt$_0;
    }
  });
  DFunction0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFunction0',
    interfaces: [DFunction]
  };
  DFunction0.prototype.component1 = function () {
    return this.ret;
  };
  DFunction0.prototype.component2 = function () {
    return this.body;
  };
  DFunction0.prototype.copy_sxha1t$ = function (ret, body) {
    return new DFunction0(ret === void 0 ? this.ret : ret, body === void 0 ? this.body : body);
  };
  DFunction0.prototype.toString = function () {
    return 'DFunction0(ret=' + Kotlin.toString(this.ret) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  DFunction0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ret) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  DFunction0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ret, other.ret) && Kotlin.equals(this.body, other.body)))));
  };
  function DFunction1(ret, p0, body) {
    this.ret_4vfiiq$_0 = ret;
    this.p0 = p0;
    this.body_98rg3x$_0 = body;
    this.args_9999ns$_0 = listOf(this.p0);
  }
  Object.defineProperty(DFunction1.prototype, 'ret', {
    get: function () {
      return this.ret_4vfiiq$_0;
    }
  });
  Object.defineProperty(DFunction1.prototype, 'body', {
    get: function () {
      return this.body_98rg3x$_0;
    }
  });
  Object.defineProperty(DFunction1.prototype, 'args', {
    get: function () {
      return this.args_9999ns$_0;
    }
  });
  DFunction1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFunction1',
    interfaces: [DFunction]
  };
  DFunction1.prototype.component1 = function () {
    return this.ret;
  };
  DFunction1.prototype.component2 = function () {
    return this.p0;
  };
  DFunction1.prototype.component3 = function () {
    return this.body;
  };
  DFunction1.prototype.copy_g1geqe$ = function (ret, p0, body) {
    return new DFunction1(ret === void 0 ? this.ret : ret, p0 === void 0 ? this.p0 : p0, body === void 0 ? this.body : body);
  };
  DFunction1.prototype.toString = function () {
    return 'DFunction1(ret=' + Kotlin.toString(this.ret) + (', p0=' + Kotlin.toString(this.p0)) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  DFunction1.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ret) | 0;
    result = result * 31 + Kotlin.hashCode(this.p0) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  DFunction1.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ret, other.ret) && Kotlin.equals(this.p0, other.p0) && Kotlin.equals(this.body, other.body)))));
  };
  function DFunction2(ret, p0, p1, body) {
    this.ret_4edw4j$_0 = ret;
    this.p0 = p0;
    this.p1 = p1;
    this.body_5fmu44$_0 = body;
    this.args_5f50k9$_0 = listOf_0([this.p0, this.p1]);
  }
  Object.defineProperty(DFunction2.prototype, 'ret', {
    get: function () {
      return this.ret_4edw4j$_0;
    }
  });
  Object.defineProperty(DFunction2.prototype, 'body', {
    get: function () {
      return this.body_5fmu44$_0;
    }
  });
  Object.defineProperty(DFunction2.prototype, 'args', {
    get: function () {
      return this.args_5f50k9$_0;
    }
  });
  DFunction2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFunction2',
    interfaces: [DFunction]
  };
  DFunction2.prototype.component1 = function () {
    return this.ret;
  };
  DFunction2.prototype.component2 = function () {
    return this.p0;
  };
  DFunction2.prototype.component3 = function () {
    return this.p1;
  };
  DFunction2.prototype.component4 = function () {
    return this.body;
  };
  DFunction2.prototype.copy_dh9y6t$ = function (ret, p0, p1, body) {
    return new DFunction2(ret === void 0 ? this.ret : ret, p0 === void 0 ? this.p0 : p0, p1 === void 0 ? this.p1 : p1, body === void 0 ? this.body : body);
  };
  DFunction2.prototype.toString = function () {
    return 'DFunction2(ret=' + Kotlin.toString(this.ret) + (', p0=' + Kotlin.toString(this.p0)) + (', p1=' + Kotlin.toString(this.p1)) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  DFunction2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ret) | 0;
    result = result * 31 + Kotlin.hashCode(this.p0) | 0;
    result = result * 31 + Kotlin.hashCode(this.p1) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  DFunction2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ret, other.ret) && Kotlin.equals(this.p0, other.p0) && Kotlin.equals(this.p1, other.p1) && Kotlin.equals(this.body, other.body)))));
  };
  var function_0 = defineInlineFunction('dynarek-js.com.soywiz.dynarek.function_mes3ll$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var kotlin = Kotlin.kotlin;
    var StmBuilder_init = _.com.soywiz.dynarek.StmBuilder;
    var DFunction0_init = _.com.soywiz.dynarek.DFunction0;
    return function (TRet_0, isTRet, ret, block) {
      var builder = new StmBuilder_init(getKClass(TRet_0), getKClass(Object.getPrototypeOf(kotlin.Unit).constructor), getKClass(Object.getPrototypeOf(kotlin.Unit).constructor));
      block(builder);
      return new DFunction0_init(ret, builder.build());
    };
  }));
  var function_1 = defineInlineFunction('dynarek-js.com.soywiz.dynarek.function_8t7rum$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var kotlin = Kotlin.kotlin;
    var StmBuilder_init = _.com.soywiz.dynarek.StmBuilder;
    var DFunction1_init = _.com.soywiz.dynarek.DFunction1;
    return function (TRet_0, isTRet, T0_0, isT0, arg0, ret, block) {
      var builder = new StmBuilder_init(getKClass(TRet_0), getKClass(T0_0), getKClass(Object.getPrototypeOf(kotlin.Unit).constructor));
      block(builder);
      return new DFunction1_init(ret, arg0, builder.build());
    };
  }));
  var function_2 = defineInlineFunction('dynarek-js.com.soywiz.dynarek.function_okyg2k$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var StmBuilder_init = _.com.soywiz.dynarek.StmBuilder;
    var DFunction2_init = _.com.soywiz.dynarek.DFunction2;
    return function (TRet_0, isTRet, T0_0, isT0, T1_0, isT1, arg0, arg1, ret, block) {
      var builder = new StmBuilder_init(getKClass(TRet_0), getKClass(T0_0), getKClass(T1_0));
      block(builder);
      return new DFunction2_init(ret, arg0, arg1, builder.build());
    };
  }));
  function DNode() {
  }
  DNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DNode',
    interfaces: []
  };
  function DType() {
  }
  DType.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DType',
    interfaces: [DNode]
  };
  function DClass(clazz) {
    this.clazz_ejie08$_0 = clazz;
  }
  Object.defineProperty(DClass.prototype, 'clazz', {
    get: function () {
      return this.clazz_ejie08$_0;
    }
  });
  DClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DClass',
    interfaces: [DType]
  };
  DClass.prototype.component1 = function () {
    return this.clazz;
  };
  DClass.prototype.copy_v860fk$ = function (clazz) {
    return new DClass(clazz === void 0 ? this.clazz : clazz);
  };
  DClass.prototype.toString = function () {
    return 'DClass(clazz=' + Kotlin.toString(this.clazz) + ')';
  };
  DClass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    return result;
  };
  DClass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.clazz, other.clazz))));
  };
  function DPrimType(clazz, id) {
    this.clazz_lqhz9c$_0 = clazz;
    this.id = id;
  }
  Object.defineProperty(DPrimType.prototype, 'clazz', {
    get: function () {
      return this.clazz_lqhz9c$_0;
    }
  });
  DPrimType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DPrimType',
    interfaces: [DType]
  };
  DPrimType.prototype.component1 = function () {
    return this.clazz;
  };
  DPrimType.prototype.component2 = function () {
    return this.id;
  };
  DPrimType.prototype.copy_tlz6wi$ = function (clazz, id) {
    return new DPrimType(clazz === void 0 ? this.clazz : clazz, id === void 0 ? this.id : id);
  };
  DPrimType.prototype.toString = function () {
    return 'DPrimType(clazz=' + Kotlin.toString(this.clazz) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  DPrimType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  DPrimType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.id, other.id)))));
  };
  var DVOID;
  var DINT;
  var DFLOAT;
  var DBOOL;
  function IBinop(name, ordinal, op) {
    Enum.call(this);
    this.op = op;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IBinop_initFields() {
    IBinop_initFields = function () {
    };
    IBinop$ADD_instance = new IBinop('ADD', 0, '+');
    IBinop$SUB_instance = new IBinop('SUB', 1, '-');
    IBinop$MUL_instance = new IBinop('MUL', 2, '*');
    IBinop$DIV_instance = new IBinop('DIV', 3, '/');
    IBinop$REM_instance = new IBinop('REM', 4, '%');
    IBinop$AND_instance = new IBinop('AND', 5, '&');
    IBinop$OR_instance = new IBinop('OR', 6, '|');
    IBinop$XOR_instance = new IBinop('XOR', 7, '^');
    IBinop$SHL_instance = new IBinop('SHL', 8, '<<');
    IBinop$SHR_instance = new IBinop('SHR', 9, '>>');
    IBinop$USHR_instance = new IBinop('USHR', 10, '>>>');
  }
  var IBinop$ADD_instance;
  function IBinop$ADD_getInstance() {
    IBinop_initFields();
    return IBinop$ADD_instance;
  }
  var IBinop$SUB_instance;
  function IBinop$SUB_getInstance() {
    IBinop_initFields();
    return IBinop$SUB_instance;
  }
  var IBinop$MUL_instance;
  function IBinop$MUL_getInstance() {
    IBinop_initFields();
    return IBinop$MUL_instance;
  }
  var IBinop$DIV_instance;
  function IBinop$DIV_getInstance() {
    IBinop_initFields();
    return IBinop$DIV_instance;
  }
  var IBinop$REM_instance;
  function IBinop$REM_getInstance() {
    IBinop_initFields();
    return IBinop$REM_instance;
  }
  var IBinop$AND_instance;
  function IBinop$AND_getInstance() {
    IBinop_initFields();
    return IBinop$AND_instance;
  }
  var IBinop$OR_instance;
  function IBinop$OR_getInstance() {
    IBinop_initFields();
    return IBinop$OR_instance;
  }
  var IBinop$XOR_instance;
  function IBinop$XOR_getInstance() {
    IBinop_initFields();
    return IBinop$XOR_instance;
  }
  var IBinop$SHL_instance;
  function IBinop$SHL_getInstance() {
    IBinop_initFields();
    return IBinop$SHL_instance;
  }
  var IBinop$SHR_instance;
  function IBinop$SHR_getInstance() {
    IBinop_initFields();
    return IBinop$SHR_instance;
  }
  var IBinop$USHR_instance;
  function IBinop$USHR_getInstance() {
    IBinop_initFields();
    return IBinop$USHR_instance;
  }
  IBinop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IBinop',
    interfaces: [Enum]
  };
  function IBinop$values() {
    return [IBinop$ADD_getInstance(), IBinop$SUB_getInstance(), IBinop$MUL_getInstance(), IBinop$DIV_getInstance(), IBinop$REM_getInstance(), IBinop$AND_getInstance(), IBinop$OR_getInstance(), IBinop$XOR_getInstance(), IBinop$SHL_getInstance(), IBinop$SHR_getInstance(), IBinop$USHR_getInstance()];
  }
  IBinop.values = IBinop$values;
  function IBinop$valueOf(name) {
    switch (name) {
      case 'ADD':
        return IBinop$ADD_getInstance();
      case 'SUB':
        return IBinop$SUB_getInstance();
      case 'MUL':
        return IBinop$MUL_getInstance();
      case 'DIV':
        return IBinop$DIV_getInstance();
      case 'REM':
        return IBinop$REM_getInstance();
      case 'AND':
        return IBinop$AND_getInstance();
      case 'OR':
        return IBinop$OR_getInstance();
      case 'XOR':
        return IBinop$XOR_getInstance();
      case 'SHL':
        return IBinop$SHL_getInstance();
      case 'SHR':
        return IBinop$SHR_getInstance();
      case 'USHR':
        return IBinop$USHR_getInstance();
      default:throwISE('No enum constant com.soywiz.dynarek.IBinop.' + name);
    }
  }
  IBinop.valueOf_61zpoe$ = IBinop$valueOf;
  function FBinop(name, ordinal, op) {
    Enum.call(this);
    this.op = op;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FBinop_initFields() {
    FBinop_initFields = function () {
    };
    FBinop$ADD_instance = new FBinop('ADD', 0, '+');
    FBinop$SUB_instance = new FBinop('SUB', 1, '-');
    FBinop$MUL_instance = new FBinop('MUL', 2, '*');
    FBinop$DIV_instance = new FBinop('DIV', 3, '/');
    FBinop$REM_instance = new FBinop('REM', 4, '%');
  }
  var FBinop$ADD_instance;
  function FBinop$ADD_getInstance() {
    FBinop_initFields();
    return FBinop$ADD_instance;
  }
  var FBinop$SUB_instance;
  function FBinop$SUB_getInstance() {
    FBinop_initFields();
    return FBinop$SUB_instance;
  }
  var FBinop$MUL_instance;
  function FBinop$MUL_getInstance() {
    FBinop_initFields();
    return FBinop$MUL_instance;
  }
  var FBinop$DIV_instance;
  function FBinop$DIV_getInstance() {
    FBinop_initFields();
    return FBinop$DIV_instance;
  }
  var FBinop$REM_instance;
  function FBinop$REM_getInstance() {
    FBinop_initFields();
    return FBinop$REM_instance;
  }
  FBinop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FBinop',
    interfaces: [Enum]
  };
  function FBinop$values() {
    return [FBinop$ADD_getInstance(), FBinop$SUB_getInstance(), FBinop$MUL_getInstance(), FBinop$DIV_getInstance(), FBinop$REM_getInstance()];
  }
  FBinop.values = FBinop$values;
  function FBinop$valueOf(name) {
    switch (name) {
      case 'ADD':
        return FBinop$ADD_getInstance();
      case 'SUB':
        return FBinop$SUB_getInstance();
      case 'MUL':
        return FBinop$MUL_getInstance();
      case 'DIV':
        return FBinop$DIV_getInstance();
      case 'REM':
        return FBinop$REM_getInstance();
      default:throwISE('No enum constant com.soywiz.dynarek.FBinop.' + name);
    }
  }
  FBinop.valueOf_61zpoe$ = FBinop$valueOf;
  function Compop(name, ordinal, op) {
    Enum.call(this);
    this.op = op;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Compop_initFields() {
    Compop_initFields = function () {
    };
    Compop$EQ_instance = new Compop('EQ', 0, '==');
    Compop$NE_instance = new Compop('NE', 1, '!=');
    Compop$LT_instance = new Compop('LT', 2, '<');
    Compop$GT_instance = new Compop('GT', 3, '>');
    Compop$LE_instance = new Compop('LE', 4, '<=');
    Compop$GE_instance = new Compop('GE', 5, '>=');
  }
  var Compop$EQ_instance;
  function Compop$EQ_getInstance() {
    Compop_initFields();
    return Compop$EQ_instance;
  }
  var Compop$NE_instance;
  function Compop$NE_getInstance() {
    Compop_initFields();
    return Compop$NE_instance;
  }
  var Compop$LT_instance;
  function Compop$LT_getInstance() {
    Compop_initFields();
    return Compop$LT_instance;
  }
  var Compop$GT_instance;
  function Compop$GT_getInstance() {
    Compop_initFields();
    return Compop$GT_instance;
  }
  var Compop$LE_instance;
  function Compop$LE_getInstance() {
    Compop_initFields();
    return Compop$LE_instance;
  }
  var Compop$GE_instance;
  function Compop$GE_getInstance() {
    Compop_initFields();
    return Compop$GE_instance;
  }
  Compop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Compop',
    interfaces: [Enum]
  };
  function Compop$values() {
    return [Compop$EQ_getInstance(), Compop$NE_getInstance(), Compop$LT_getInstance(), Compop$GT_getInstance(), Compop$LE_getInstance(), Compop$GE_getInstance()];
  }
  Compop.values = Compop$values;
  function Compop$valueOf(name) {
    switch (name) {
      case 'EQ':
        return Compop$EQ_getInstance();
      case 'NE':
        return Compop$NE_getInstance();
      case 'LT':
        return Compop$LT_getInstance();
      case 'GT':
        return Compop$GT_getInstance();
      case 'LE':
        return Compop$LE_getInstance();
      case 'GE':
        return Compop$GE_getInstance();
      default:throwISE('No enum constant com.soywiz.dynarek.Compop.' + name);
    }
  }
  Compop.valueOf_61zpoe$ = Compop$valueOf;
  function DExpr() {
  }
  DExpr.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DExpr',
    interfaces: [DNode]
  };
  function DLiteral(value) {
    this.value = value;
  }
  DLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DLiteral',
    interfaces: [DExpr]
  };
  DLiteral.prototype.component1 = function () {
    return this.value;
  };
  DLiteral.prototype.copy_11rb$ = function (value) {
    return new DLiteral(value === void 0 ? this.value : value);
  };
  DLiteral.prototype.toString = function () {
    return 'DLiteral(value=' + Kotlin.toString(this.value) + ')';
  };
  DLiteral.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  DLiteral.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function DArg(clazz, index) {
    this.clazz = clazz;
    this.index = index;
  }
  DArg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DArg',
    interfaces: [DExpr]
  };
  DArg.prototype.component1 = function () {
    return this.clazz;
  };
  DArg.prototype.component2 = function () {
    return this.index;
  };
  DArg.prototype.copy_tlz6wi$ = function (clazz, index) {
    return new DArg(clazz === void 0 ? this.clazz : clazz, index === void 0 ? this.index : index);
  };
  DArg.prototype.toString = function () {
    return 'DArg(clazz=' + Kotlin.toString(this.clazz) + (', index=' + Kotlin.toString(this.index)) + ')';
  };
  DArg.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  DArg.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.index, other.index)))));
  };
  function DBinopInt(left, op, right) {
    this.left = left;
    this.op = op;
    this.right = right;
  }
  DBinopInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DBinopInt',
    interfaces: [DExpr]
  };
  DBinopInt.prototype.component1 = function () {
    return this.left;
  };
  DBinopInt.prototype.component2 = function () {
    return this.op;
  };
  DBinopInt.prototype.component3 = function () {
    return this.right;
  };
  DBinopInt.prototype.copy_xzo9jv$ = function (left, op, right) {
    return new DBinopInt(left === void 0 ? this.left : left, op === void 0 ? this.op : op, right === void 0 ? this.right : right);
  };
  DBinopInt.prototype.toString = function () {
    return 'DBinopInt(left=' + Kotlin.toString(this.left) + (', op=' + Kotlin.toString(this.op)) + (', right=' + Kotlin.toString(this.right)) + ')';
  };
  DBinopInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    return result;
  };
  DBinopInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.op, other.op) && Kotlin.equals(this.right, other.right)))));
  };
  function DBinopFloat(left, op, right) {
    this.left = left;
    this.op = op;
    this.right = right;
  }
  DBinopFloat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DBinopFloat',
    interfaces: [DExpr]
  };
  DBinopFloat.prototype.component1 = function () {
    return this.left;
  };
  DBinopFloat.prototype.component2 = function () {
    return this.op;
  };
  DBinopFloat.prototype.component3 = function () {
    return this.right;
  };
  DBinopFloat.prototype.copy_4g42ny$ = function (left, op, right) {
    return new DBinopFloat(left === void 0 ? this.left : left, op === void 0 ? this.op : op, right === void 0 ? this.right : right);
  };
  DBinopFloat.prototype.toString = function () {
    return 'DBinopFloat(left=' + Kotlin.toString(this.left) + (', op=' + Kotlin.toString(this.op)) + (', right=' + Kotlin.toString(this.right)) + ')';
  };
  DBinopFloat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    return result;
  };
  DBinopFloat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.op, other.op) && Kotlin.equals(this.right, other.right)))));
  };
  function DBinopIntBool(left, op, right) {
    this.left = left;
    this.op = op;
    this.right = right;
  }
  DBinopIntBool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DBinopIntBool',
    interfaces: [DExpr]
  };
  DBinopIntBool.prototype.component1 = function () {
    return this.left;
  };
  DBinopIntBool.prototype.component2 = function () {
    return this.op;
  };
  DBinopIntBool.prototype.component3 = function () {
    return this.right;
  };
  DBinopIntBool.prototype.copy_n5xp3o$ = function (left, op, right) {
    return new DBinopIntBool(left === void 0 ? this.left : left, op === void 0 ? this.op : op, right === void 0 ? this.right : right);
  };
  DBinopIntBool.prototype.toString = function () {
    return 'DBinopIntBool(left=' + Kotlin.toString(this.left) + (', op=' + Kotlin.toString(this.op)) + (', right=' + Kotlin.toString(this.right)) + ')';
  };
  DBinopIntBool.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    return result;
  };
  DBinopIntBool.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.op, other.op) && Kotlin.equals(this.right, other.right)))));
  };
  function DLocal(clazz, initialValue) {
    this.clazz = clazz;
    this.initialValue = initialValue;
  }
  DLocal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DLocal',
    interfaces: [DRef, DExpr]
  };
  function DExprInvoke() {
  }
  DExprInvoke.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DExprInvoke',
    interfaces: [DExpr]
  };
  function DExprInvoke1(clazz, func, p0) {
    this.clazz_c7k2hw$_0 = clazz;
    this.func = func;
    this.p0 = p0;
    this.name_n570dn$_0 = this.func.callableName;
    this.args_nc1lfh$_0 = listOf(this.p0);
  }
  Object.defineProperty(DExprInvoke1.prototype, 'clazz', {
    get: function () {
      return this.clazz_c7k2hw$_0;
    }
  });
  Object.defineProperty(DExprInvoke1.prototype, 'name', {
    get: function () {
      return this.name_n570dn$_0;
    }
  });
  Object.defineProperty(DExprInvoke1.prototype, 'args', {
    get: function () {
      return this.args_nc1lfh$_0;
    }
  });
  DExprInvoke1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DExprInvoke1',
    interfaces: [DExprInvoke]
  };
  DExprInvoke1.prototype.component1 = function () {
    return this.clazz;
  };
  DExprInvoke1.prototype.component2 = function () {
    return this.func;
  };
  DExprInvoke1.prototype.component3 = function () {
    return this.p0;
  };
  DExprInvoke1.prototype.copy_xhpyje$ = function (clazz, func, p0) {
    return new DExprInvoke1(clazz === void 0 ? this.clazz : clazz, func === void 0 ? this.func : func, p0 === void 0 ? this.p0 : p0);
  };
  DExprInvoke1.prototype.toString = function () {
    return 'DExprInvoke1(clazz=' + Kotlin.toString(this.clazz) + (', func=' + Kotlin.toString(this.func)) + (', p0=' + Kotlin.toString(this.p0)) + ')';
  };
  DExprInvoke1.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.func) | 0;
    result = result * 31 + Kotlin.hashCode(this.p0) | 0;
    return result;
  };
  DExprInvoke1.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.func, other.func) && Kotlin.equals(this.p0, other.p0)))));
  };
  function DExprInvoke2(clazz, func, p0, p1) {
    this.clazz_gm2ekb$_0 = clazz;
    this.func = func;
    this.p0 = p0;
    this.p1 = p1;
    this.name_8gsq5m$_0 = this.func.callableName;
    this.args_8nnb7g$_0 = listOf_0([this.p0, this.p1]);
  }
  Object.defineProperty(DExprInvoke2.prototype, 'clazz', {
    get: function () {
      return this.clazz_gm2ekb$_0;
    }
  });
  Object.defineProperty(DExprInvoke2.prototype, 'name', {
    get: function () {
      return this.name_8gsq5m$_0;
    }
  });
  Object.defineProperty(DExprInvoke2.prototype, 'args', {
    get: function () {
      return this.args_8nnb7g$_0;
    }
  });
  DExprInvoke2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DExprInvoke2',
    interfaces: [DExprInvoke]
  };
  DExprInvoke2.prototype.component1 = function () {
    return this.clazz;
  };
  DExprInvoke2.prototype.component2 = function () {
    return this.func;
  };
  DExprInvoke2.prototype.component3 = function () {
    return this.p0;
  };
  DExprInvoke2.prototype.component4 = function () {
    return this.p1;
  };
  DExprInvoke2.prototype.copy_o5l024$ = function (clazz, func, p0, p1) {
    return new DExprInvoke2(clazz === void 0 ? this.clazz : clazz, func === void 0 ? this.func : func, p0 === void 0 ? this.p0 : p0, p1 === void 0 ? this.p1 : p1);
  };
  DExprInvoke2.prototype.toString = function () {
    return 'DExprInvoke2(clazz=' + Kotlin.toString(this.clazz) + (', func=' + Kotlin.toString(this.func)) + (', p0=' + Kotlin.toString(this.p0)) + (', p1=' + Kotlin.toString(this.p1)) + ')';
  };
  DExprInvoke2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.func) | 0;
    result = result * 31 + Kotlin.hashCode(this.p0) | 0;
    result = result * 31 + Kotlin.hashCode(this.p1) | 0;
    return result;
  };
  DExprInvoke2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.func, other.func) && Kotlin.equals(this.p0, other.p0) && Kotlin.equals(this.p1, other.p1)))));
  };
  function DExprInvoke3(clazz, func, p0, p1, p2) {
    this.clazz_plf6cm$_0 = clazz;
    this.func = func;
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.name_67lk2f$_0 = this.func.callableName;
    this.args_60qz0l$_0 = listOf_0([this.p0, this.p1, this.p2]);
  }
  Object.defineProperty(DExprInvoke3.prototype, 'clazz', {
    get: function () {
      return this.clazz_plf6cm$_0;
    }
  });
  Object.defineProperty(DExprInvoke3.prototype, 'name', {
    get: function () {
      return this.name_67lk2f$_0;
    }
  });
  Object.defineProperty(DExprInvoke3.prototype, 'args', {
    get: function () {
      return this.args_60qz0l$_0;
    }
  });
  DExprInvoke3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DExprInvoke3',
    interfaces: [DExprInvoke]
  };
  DExprInvoke3.prototype.component1 = function () {
    return this.clazz;
  };
  DExprInvoke3.prototype.component2 = function () {
    return this.func;
  };
  DExprInvoke3.prototype.component3 = function () {
    return this.p0;
  };
  DExprInvoke3.prototype.component4 = function () {
    return this.p1;
  };
  DExprInvoke3.prototype.component5 = function () {
    return this.p2;
  };
  DExprInvoke3.prototype.copy_hs08d5$ = function (clazz, func, p0, p1, p2) {
    return new DExprInvoke3(clazz === void 0 ? this.clazz : clazz, func === void 0 ? this.func : func, p0 === void 0 ? this.p0 : p0, p1 === void 0 ? this.p1 : p1, p2 === void 0 ? this.p2 : p2);
  };
  DExprInvoke3.prototype.toString = function () {
    return 'DExprInvoke3(clazz=' + Kotlin.toString(this.clazz) + (', func=' + Kotlin.toString(this.func)) + (', p0=' + Kotlin.toString(this.p0)) + (', p1=' + Kotlin.toString(this.p1)) + (', p2=' + Kotlin.toString(this.p2)) + ')';
  };
  DExprInvoke3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.func) | 0;
    result = result * 31 + Kotlin.hashCode(this.p0) | 0;
    result = result * 31 + Kotlin.hashCode(this.p1) | 0;
    result = result * 31 + Kotlin.hashCode(this.p2) | 0;
    return result;
  };
  DExprInvoke3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.func, other.func) && Kotlin.equals(this.p0, other.p0) && Kotlin.equals(this.p1, other.p1) && Kotlin.equals(this.p2, other.p2)))));
  };
  function DRef() {
  }
  DRef.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DRef',
    interfaces: [DExpr]
  };
  function DFieldAccess(clazz, obj, prop) {
    this.clazz = clazz;
    this.obj = obj;
    this.prop = prop;
  }
  DFieldAccess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFieldAccess',
    interfaces: [DRef]
  };
  DFieldAccess.prototype.component1 = function () {
    return this.clazz;
  };
  DFieldAccess.prototype.component2 = function () {
    return this.obj;
  };
  DFieldAccess.prototype.component3 = function () {
    return this.prop;
  };
  DFieldAccess.prototype.copy_r3ko86$ = function (clazz, obj, prop) {
    return new DFieldAccess(clazz === void 0 ? this.clazz : clazz, obj === void 0 ? this.obj : obj, prop === void 0 ? this.prop : prop);
  };
  DFieldAccess.prototype.toString = function () {
    return 'DFieldAccess(clazz=' + Kotlin.toString(this.clazz) + (', obj=' + Kotlin.toString(this.obj)) + (', prop=' + Kotlin.toString(this.prop)) + ')';
  };
  DFieldAccess.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.obj) | 0;
    result = result * 31 + Kotlin.hashCode(this.prop) | 0;
    return result;
  };
  DFieldAccess.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.obj, other.obj) && Kotlin.equals(this.prop, other.prop)))));
  };
  function DStm() {
  }
  DStm.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DStm',
    interfaces: [DNode]
  };
  function DStms(stms) {
    this.stms = stms;
  }
  DStms.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DStms',
    interfaces: [DStm]
  };
  DStms.prototype.component1 = function () {
    return this.stms;
  };
  DStms.prototype.copy_6bd9ez$ = function (stms) {
    return new DStms(stms === void 0 ? this.stms : stms);
  };
  DStms.prototype.toString = function () {
    return 'DStms(stms=' + Kotlin.toString(this.stms) + ')';
  };
  DStms.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stms) | 0;
    return result;
  };
  DStms.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.stms, other.stms))));
  };
  function DReturnExpr(expr) {
    this.expr = expr;
  }
  DReturnExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DReturnExpr',
    interfaces: [DStm]
  };
  DReturnExpr.prototype.component1 = function () {
    return this.expr;
  };
  DReturnExpr.prototype.copy_85n4du$ = function (expr) {
    return new DReturnExpr(expr === void 0 ? this.expr : expr);
  };
  DReturnExpr.prototype.toString = function () {
    return 'DReturnExpr(expr=' + Kotlin.toString(this.expr) + ')';
  };
  DReturnExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  DReturnExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function DReturnVoid(dummy) {
    this.dummy = dummy;
  }
  DReturnVoid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DReturnVoid',
    interfaces: [DStm]
  };
  DReturnVoid.prototype.component1 = function () {
    return this.dummy;
  };
  DReturnVoid.prototype.copy_6taknv$ = function (dummy) {
    return new DReturnVoid(dummy === void 0 ? this.dummy : dummy);
  };
  DReturnVoid.prototype.toString = function () {
    return 'DReturnVoid(dummy=' + Kotlin.toString(this.dummy) + ')';
  };
  DReturnVoid.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  DReturnVoid.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  function DAssign(left, value) {
    this.left = left;
    this.value = value;
  }
  DAssign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DAssign',
    interfaces: [DStm]
  };
  DAssign.prototype.component1 = function () {
    return this.left;
  };
  DAssign.prototype.component2 = function () {
    return this.value;
  };
  DAssign.prototype.copy_7nfyku$ = function (left, value) {
    return new DAssign(left === void 0 ? this.left : left, value === void 0 ? this.value : value);
  };
  DAssign.prototype.toString = function () {
    return 'DAssign(left=' + Kotlin.toString(this.left) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  DAssign.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  DAssign.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.value, other.value)))));
  };
  function DStmExpr(expr) {
    this.expr = expr;
  }
  DStmExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DStmExpr',
    interfaces: [DStm]
  };
  DStmExpr.prototype.component1 = function () {
    return this.expr;
  };
  DStmExpr.prototype.copy_3uo6ol$ = function (expr) {
    return new DStmExpr(expr === void 0 ? this.expr : expr);
  };
  DStmExpr.prototype.toString = function () {
    return 'DStmExpr(expr=' + Kotlin.toString(this.expr) + ')';
  };
  DStmExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  DStmExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function DIfElse(cond, strue, sfalse) {
    if (sfalse === void 0)
      sfalse = null;
    this.cond = cond;
    this.strue = strue;
    this.sfalse = sfalse;
  }
  DIfElse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DIfElse',
    interfaces: [DStm]
  };
  DIfElse.prototype.component1 = function () {
    return this.cond;
  };
  DIfElse.prototype.component2 = function () {
    return this.strue;
  };
  DIfElse.prototype.component3 = function () {
    return this.sfalse;
  };
  DIfElse.prototype.copy_ygrwib$ = function (cond, strue, sfalse) {
    return new DIfElse(cond === void 0 ? this.cond : cond, strue === void 0 ? this.strue : strue, sfalse === void 0 ? this.sfalse : sfalse);
  };
  DIfElse.prototype.toString = function () {
    return 'DIfElse(cond=' + Kotlin.toString(this.cond) + (', strue=' + Kotlin.toString(this.strue)) + (', sfalse=' + Kotlin.toString(this.sfalse)) + ')';
  };
  DIfElse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.strue) | 0;
    result = result * 31 + Kotlin.hashCode(this.sfalse) | 0;
    return result;
  };
  DIfElse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.strue, other.strue) && Kotlin.equals(this.sfalse, other.sfalse)))));
  };
  function DWhile(cond, block) {
    this.cond = cond;
    this.block = block;
  }
  DWhile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DWhile',
    interfaces: [DStm]
  };
  DWhile.prototype.component1 = function () {
    return this.cond;
  };
  DWhile.prototype.component2 = function () {
    return this.block;
  };
  DWhile.prototype.copy_8ie8u4$ = function (cond, block) {
    return new DWhile(cond === void 0 ? this.cond : cond, block === void 0 ? this.block : block);
  };
  DWhile.prototype.toString = function () {
    return 'DWhile(cond=' + Kotlin.toString(this.cond) + (', block=' + Kotlin.toString(this.block)) + ')';
  };
  DWhile.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.block) | 0;
    return result;
  };
  DWhile.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.block, other.block)))));
  };
  function DNodeVisitor() {
  }
  DNodeVisitor.prototype.visit_6aiwq0$ = function (func) {
    var tmp$;
    this.visit_3or8au$(func.ret);
    tmp$ = func.args.iterator();
    while (tmp$.hasNext()) {
      var arg = tmp$.next();
      this.visit_3or8au$(arg);
    }
    this.visit_o38a1o$(func.body);
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  DNodeVisitor.prototype.visit_yk792m$ = function (node) {
    if (Kotlin.isType(node, DStm))
      this.visit_o38a1o$(node);
    else if (Kotlin.isType(node, DExpr))
      this.visit_3uo6ol$(node);
    else if (Kotlin.isType(node, DType))
      this.visit_3or8au$(node);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported ' + node));
    }
  };
  DNodeVisitor.prototype.visit_uxti0d$ = function (node) {
    if (Kotlin.isType(node, DFieldAccess))
      this.visit_6idc2s$(node);
    else if (Kotlin.isType(node, DLocal))
      this.visit_ew0hat$(node);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported ' + node));
    }
  };
  DNodeVisitor.prototype.visit_3uo6ol$ = function (node) {
    if (Kotlin.isType(node, DLiteral))
      this.visit_ihe8mn$(node);
    else if (Kotlin.isType(node, DLocal))
      this.visit_ew0hat$(node);
    else if (Kotlin.isType(node, DArg))
      this.visit_n37w0a$(node);
    else if (Kotlin.isType(node, DBinopInt))
      this.visit_truvd$(node);
    else if (Kotlin.isType(node, DBinopIntBool))
      this.visit_36x18f$(node);
    else if (Kotlin.isType(node, DBinopFloat))
      this.visit_di36ho$(node);
    else if (Kotlin.isType(node, DExprInvoke))
      this.visit_3661jp$(node);
    else if (Kotlin.isType(node, DFieldAccess))
      this.visit_6idc2s$(node);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported ' + node));
    }
  };
  DNodeVisitor.prototype.visit_6idc2s$ = function (node) {
    this.visit_xo1ogr$(node.clazz);
    this.visit_mqkxyn$(node.prop);
    this.visit_3uo6ol$(node.obj);
  };
  DNodeVisitor.prototype.visit_3661jp$ = function (node) {
    var tmp$;
    this.visit_xo1ogr$(node.clazz);
    tmp$ = node.args.iterator();
    while (tmp$.hasNext()) {
      var arg = tmp$.next();
      this.visit_3uo6ol$(arg);
    }
  };
  DNodeVisitor.prototype.visit_truvd$ = function (node) {
    this.visit_3uo6ol$(node.left);
    this.visit_3uo6ol$(node.right);
  };
  DNodeVisitor.prototype.visit_di36ho$ = function (node) {
    this.visit_3uo6ol$(node.left);
    this.visit_3uo6ol$(node.right);
  };
  DNodeVisitor.prototype.visit_36x18f$ = function (node) {
    this.visit_3uo6ol$(node.left);
    this.visit_3uo6ol$(node.right);
  };
  DNodeVisitor.prototype.visit_ihe8mn$ = function (node) {
  };
  DNodeVisitor.prototype.visit_n37w0a$ = function (node) {
    this.visit_xo1ogr$(node.clazz);
  };
  DNodeVisitor.prototype.visit_o38a1o$ = function (node) {
    if (Kotlin.isType(node, DStms))
      this.visit_yk3y7d$(node);
    else if (Kotlin.isType(node, DIfElse))
      this.visit_qoenuu$(node);
    else if (Kotlin.isType(node, DWhile))
      this.visit_5sq78f$(node);
    else if (Kotlin.isType(node, DAssign))
      this.visit_7r6zn5$(node);
    else if (Kotlin.isType(node, DStmExpr))
      this.visit_df1p1r$(node);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported ' + node));
    }
  };
  DNodeVisitor.prototype.visit_df1p1r$ = function (node) {
    this.visit_3uo6ol$(node.expr);
  };
  DNodeVisitor.prototype.visit_7r6zn5$ = function (node) {
    this.visit_uxti0d$(node.left);
    this.visit_3uo6ol$(node.value);
  };
  DNodeVisitor.prototype.visit_yk3y7d$ = function (node) {
    var tmp$;
    tmp$ = node.stms.iterator();
    while (tmp$.hasNext()) {
      var stm = tmp$.next();
      this.visit_o38a1o$(stm);
    }
  };
  DNodeVisitor.prototype.visit_qoenuu$ = function (node) {
    var tmp$;
    this.visit_3uo6ol$(node.cond);
    this.visit_o38a1o$(node.strue);
    if ((tmp$ = node.sfalse) != null) {
      this.visit_o38a1o$(tmp$);
    }
  };
  DNodeVisitor.prototype.visit_5sq78f$ = function (node) {
    this.visit_3uo6ol$(node.cond);
    this.visit_o38a1o$(node.block);
  };
  DNodeVisitor.prototype.visit_3or8au$ = function (node) {
    if (Kotlin.isType(node, DClass))
      this.visit_53ew7s$(node);
    else if (Kotlin.isType(node, DPrimType))
      this.visit_mcg5a8$(node);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported ' + node));
    }
  };
  DNodeVisitor.prototype.visit_53ew7s$ = function (node) {
    this.visit_xo1ogr$(node.clazz);
  };
  DNodeVisitor.prototype.visit_mcg5a8$ = function (node) {
    this.visit_xo1ogr$(node.clazz);
  };
  DNodeVisitor.prototype.visit_ew0hat$ = function (node) {
    this.visit_3uo6ol$(node.initialValue);
  };
  DNodeVisitor.prototype.visit_xo1ogr$ = function (node) {
  };
  DNodeVisitor.prototype.visit_mqkxyn$ = function (node) {
  };
  DNodeVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DNodeVisitor',
    interfaces: []
  };
  function getLocals$ObjectLiteral(closure$locals) {
    this.closure$locals = closure$locals;
    DNodeVisitor.call(this);
  }
  getLocals$ObjectLiteral.prototype.visit_ew0hat$ = function (node) {
    DNodeVisitor.prototype.visit_ew0hat$.call(this, node);
    this.closure$locals.add_11rb$(node);
  };
  getLocals$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DNodeVisitor]
  };
  function getLocals($receiver) {
    var locals = LinkedHashSet_init();
    (new getLocals$ObjectLiteral(locals)).visit_6aiwq0$($receiver);
    return locals;
  }
  function DSlowInterpreter(args, retval) {
    if (retval === void 0)
      retval = null;
    this.args = args;
    this.retval = retval;
  }
  DSlowInterpreter.prototype.interpret_tpas9l$ = function (node) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (Kotlin.isType(node, DLiteral))
      return (tmp$ = node.value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    else if (Kotlin.isType(node, DArg))
      return (tmp$_0 = this.args.get_za3lpa$(node.index)) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    else if (Kotlin.isType(node, DBinopInt)) {
      var l = this.interpret_tpas9l$(node.left);
      var r = this.interpret_tpas9l$(node.right);
      tmp$_1 = node.op;
      if (equals(tmp$_1, IBinop$ADD_getInstance()))
        return (tmp$_2 = l + r | 0) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      else if (equals(tmp$_1, IBinop$MUL_getInstance()))
        return (tmp$_3 = Kotlin.imul(l, r)) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
      else {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Unknown op ' + node.op));
      }
    }
     else if (Kotlin.isType(node, DFieldAccess)) {
      var obj = this.interpret_tpas9l$(node.obj);
      return (tmp$_5 = (Kotlin.isType(tmp$_4 = node, DFieldAccess) ? tmp$_4 : throwCCE()).prop.get(obj)) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
    }
     else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Not implemented ' + node));
    }
  };
  DSlowInterpreter.prototype.interpret_o38a1o$ = function (node) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(node, DStms)) {
      tmp$ = node.stms.iterator();
      while (tmp$.hasNext()) {
        var stm = tmp$.next();
        this.interpret_o38a1o$(stm);
      }
    }
     else if (Kotlin.isType(node, DAssign)) {
      var left = node.left;
      var value = this.interpret_tpas9l$(node.value);
      if (Kotlin.isType(left, DFieldAccess)) {
        var obj = this.interpret_tpas9l$(left.obj);
        (Kotlin.isType(tmp$_0 = left, DFieldAccess) ? tmp$_0 : throwCCE()).prop.set(obj, value);
      }
       else {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Not implemented left assign ' + node.left));
      }
    }
     else if (Kotlin.isType(node, DIfElse)) {
      var cond = this.interpret_tpas9l$(node.cond);
      var strue = node.strue;
      var sfalse = node.sfalse;
      if (cond) {
        this.interpret_o38a1o$(strue);
      }
       else if (sfalse != null) {
        this.interpret_o38a1o$(sfalse);
      }
    }
     else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Not implemented ' + node));
    }
  };
  DSlowInterpreter.prototype.interpret_6aiwq0$ = function (func) {
    this.interpret_o38a1o$(func.body);
  };
  DSlowInterpreter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DSlowInterpreter',
    interfaces: []
  };
  function Dynarek() {
    Dynarek_instance = this;
    this.VERSION = DYNAREK_VERSION;
  }
  Dynarek.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Dynarek',
    interfaces: []
  };
  var Dynarek_instance = null;
  function Dynarek_getInstance() {
    if (Dynarek_instance === null) {
      new Dynarek();
    }
    return Dynarek_instance;
  }
  var DYNAREK_VERSION;
  function generateInterpreted$lambda(closure$func) {
    return function () {
      var tmp$;
      var interpreter = new DSlowInterpreter(emptyList());
      interpreter.interpret_6aiwq0$(closure$func);
      return Kotlin.isType(tmp$ = interpreter.retval, Any) ? tmp$ : throwCCE();
    };
  }
  function generateInterpreted($receiver) {
    var func = $receiver;
    return generateInterpreted$lambda(func);
  }
  function generateInterpreted$lambda_0(closure$func) {
    return function (p0) {
      var tmp$;
      var interpreter = new DSlowInterpreter(listOf(p0));
      interpreter.interpret_6aiwq0$(closure$func);
      return Kotlin.isType(tmp$ = interpreter.retval, Any) ? tmp$ : throwCCE();
    };
  }
  function generateInterpreted_0($receiver) {
    var func = $receiver;
    return generateInterpreted$lambda_0(func);
  }
  function generateInterpreted$lambda_1(closure$func) {
    return function (p0, p1) {
      var tmp$;
      var interpreter = new DSlowInterpreter(listOf_0([p0, p1]));
      interpreter.interpret_6aiwq0$(closure$func);
      return Kotlin.isType(tmp$ = interpreter.retval, Any) ? tmp$ : throwCCE();
    };
  }
  function generateInterpreted_1($receiver) {
    var func = $receiver;
    return generateInterpreted$lambda_1(func);
  }
  function StmBuilder(ret, t0, t1) {
    this.ret = ret;
    this.t0 = t0;
    this.t1 = t1;
    this.stms = ArrayList_init();
  }
  function StmBuilder$ElseBuilder($outer, ifElse) {
    this.$outer = $outer;
    this.ifElse = ifElse;
  }
  StmBuilder$ElseBuilder.prototype.ELSE_wjtryd$ = function (block) {
    var b = this.$outer.createBuilder();
    block(b);
    this.ifElse.sfalse = b.build();
  };
  StmBuilder$ElseBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElseBuilder',
    interfaces: []
  };
  StmBuilder.prototype.createBuilder = function () {
    return new StmBuilder(this.ret, this.t0, this.t1);
  };
  StmBuilder.prototype.get_lit_vvk9$ = function ($receiver) {
    return new DLiteral($receiver);
  };
  Object.defineProperty(StmBuilder.prototype, 'p0', {
    get: function () {
      return new DArg(this.t0, 0);
    }
  });
  Object.defineProperty(StmBuilder.prototype, 'p1', {
    get: function () {
      return new DArg(this.t1, 1);
    }
  });
  StmBuilder.prototype.plus_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$ADD_getInstance(), that);
  };
  StmBuilder.prototype.minus_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$SUB_getInstance(), that);
  };
  StmBuilder.prototype.times_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$MUL_getInstance(), that);
  };
  StmBuilder.prototype.div_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$DIV_getInstance(), that);
  };
  StmBuilder.prototype.rem_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$REM_getInstance(), that);
  };
  StmBuilder.prototype.unaryMinus_219wt2$ = function ($receiver) {
    return new DBinopInt(new DLiteral(0), IBinop$SUB_getInstance(), $receiver);
  };
  StmBuilder.prototype.unaryPlus_219wt2$ = function ($receiver) {
    return $receiver;
  };
  StmBuilder.prototype.and_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$AND_getInstance(), that);
  };
  StmBuilder.prototype.or_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$OR_getInstance(), that);
  };
  StmBuilder.prototype.xor_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$XOR_getInstance(), that);
  };
  StmBuilder.prototype.shl_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$SHL_getInstance(), that);
  };
  StmBuilder.prototype.shr_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$SHR_getInstance(), that);
  };
  StmBuilder.prototype.ushr_hturld$ = function ($receiver, that) {
    return new DBinopInt($receiver, IBinop$USHR_getInstance(), that);
  };
  StmBuilder.prototype.inv_219wt2$ = function ($receiver) {
    return new DBinopInt($receiver, IBinop$XOR_getInstance(), this.get_lit_vvk9$(-1));
  };
  StmBuilder.prototype.eq_hturld$ = function ($receiver, that) {
    return new DBinopIntBool($receiver, Compop$EQ_getInstance(), that);
  };
  StmBuilder.prototype.ne_hturld$ = function ($receiver, that) {
    return new DBinopIntBool($receiver, Compop$NE_getInstance(), that);
  };
  StmBuilder.prototype.ge_hturld$ = function ($receiver, that) {
    return new DBinopIntBool($receiver, Compop$GE_getInstance(), that);
  };
  StmBuilder.prototype.le_hturld$ = function ($receiver, that) {
    return new DBinopIntBool($receiver, Compop$LE_getInstance(), that);
  };
  StmBuilder.prototype.gt_hturld$ = function ($receiver, that) {
    return new DBinopIntBool($receiver, Compop$GT_getInstance(), that);
  };
  StmBuilder.prototype.lt_hturld$ = function ($receiver, that) {
    return new DBinopIntBool($receiver, Compop$LT_getInstance(), that);
  };
  StmBuilder.prototype.get_wxrmm0$ = defineInlineFunction('dynarek-js.com.soywiz.dynarek.StmBuilder.get_wxrmm0$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var DFieldAccess_init = _.com.soywiz.dynarek.DFieldAccess;
    return function (T_0, isT, $receiver, prop) {
      return new DFieldAccess_init(getKClass(T_0), $receiver, prop);
    };
  }));
  StmBuilder.prototype.RET_1iuxhy$ = function (expr) {
    return this.stms.add_11rb$(new DReturnExpr(expr));
  };
  StmBuilder.prototype.RET = function () {
    return this.stms.add_11rb$(new DReturnVoid(true));
  };
  StmBuilder.prototype.SET_jvnile$ = function (ref, value) {
    return this.stms.add_11rb$(new DAssign(ref, value));
  };
  StmBuilder.prototype.STM_tpas9l$ = function (expr) {
    return this.stms.add_11rb$(new DStmExpr(expr));
  };
  StmBuilder.prototype.invoke_8xit7m$ = defineInlineFunction('dynarek-js.com.soywiz.dynarek.StmBuilder.invoke_8xit7m$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var DExprInvoke1_init = _.com.soywiz.dynarek.DExprInvoke1;
    return function (TThis_0, isTThis, $receiver, p0) {
      return new DExprInvoke1_init(getKClass(TThis_0), $receiver, p0);
    };
  }));
  StmBuilder.prototype.invoke_wrzicz$ = defineInlineFunction('dynarek-js.com.soywiz.dynarek.StmBuilder.invoke_wrzicz$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var DExprInvoke2_init = _.com.soywiz.dynarek.DExprInvoke2;
    return function (TThis_0, isTThis, $receiver, p0, p1) {
      return new DExprInvoke2_init(getKClass(TThis_0), $receiver, p0, p1);
    };
  }));
  StmBuilder.prototype.invoke_p6tvw1$ = defineInlineFunction('dynarek-js.com.soywiz.dynarek.StmBuilder.invoke_p6tvw1$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var DExprInvoke3_init = _.com.soywiz.dynarek.DExprInvoke3;
    return function (TThis_0, isTThis, $receiver, p0, p1, p2) {
      return new DExprInvoke3_init(getKClass(TThis_0), $receiver, p0, p1, p2);
    };
  }));
  StmBuilder.prototype.build_l37u2y$ = function ($receiver) {
    var builder = this.createBuilder();
    $receiver(builder);
    return builder.build();
  };
  StmBuilder.prototype.IF_rcyt3g$ = function (cond, block) {
    return this.IF_ie11rv$(this.get_lit_vvk9$(cond), block);
  };
  StmBuilder.prototype.IF_ie11rv$ = function (cond, block) {
    var trueBuilder = this.createBuilder();
    block(trueBuilder);
    var ifElse = new DIfElse(cond, trueBuilder.build());
    this.stms.add_11rb$(ifElse);
    return new StmBuilder$ElseBuilder(this, ifElse);
  };
  StmBuilder.prototype.WHILE_ie11rv$ = function (cond, block) {
    this.stms.add_11rb$(new DWhile(cond, this.build_l37u2y$(block)));
  };
  function StmBuilder$FOR$lambda(closure$block, closure$local) {
    return function ($receiver) {
      closure$block($receiver);
      $receiver.SET_jvnile$(closure$local, $receiver.plus_hturld$(closure$local, $receiver.get_lit_vvk9$(1)));
      return Unit;
    };
  }
  StmBuilder.prototype.FOR_97g8k$ = function (local, start, end, block) {
    this.SET_jvnile$(local, start);
    this.WHILE_ie11rv$(this.lt_hturld$(local, end), StmBuilder$FOR$lambda(block, local));
  };
  StmBuilder.prototype.build = function () {
    return new DStms(toList(this.stms));
  };
  StmBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StmBuilder',
    interfaces: []
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function JsGenerator(func, log) {
    if (log === void 0)
      log = false;
    this.func = func;
    this.log = log;
    this.locals = getLocals(this.func);
    var $receiver = withIndex(this.locals);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.value, 'T' + item.index));
    }
    this.localsToName = toMap(destination);
  }
  JsGenerator.prototype.get_name_zdqkhm$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.localsToName.get_11rb$($receiver)) != null ? tmp$ : '_UNKNOWN_';
  };
  function JsGenerator$get_JsGenerator$str$lambda(this$JsGenerator) {
    return function (it) {
      return this$JsGenerator.get_str_v8znfk$(it);
    };
  }
  JsGenerator.prototype.get_str_v8znfk$ = function ($receiver) {
    if (Kotlin.isType($receiver, DLiteral))
      return toString($receiver.value);
    else if (Kotlin.isType($receiver, DArg))
      return 'p' + $receiver.index;
    else if (Kotlin.isType($receiver, DBinopInt)) {
      if (equals($receiver.op, IBinop$MUL_getInstance()))
        return 'Math.imul(' + this.get_str_v8znfk$($receiver.left) + ', ' + this.get_str_v8znfk$($receiver.right) + ')';
      else
        return '((' + this.get_str_v8znfk$($receiver.left) + ' ' + $receiver.op.op + ' ' + this.get_str_v8znfk$($receiver.right) + ')|0)';
    }
     else if (Kotlin.isType($receiver, DBinopFloat))
      return 'Math.fround(' + this.get_str_v8znfk$($receiver.left) + ' ' + $receiver.op.op + ' ' + this.get_str_v8znfk$($receiver.right) + ')';
    else if (Kotlin.isType($receiver, DBinopIntBool))
      return '((' + this.get_str_v8znfk$($receiver.left) + ' ' + $receiver.op.op + ' ' + this.get_str_v8znfk$($receiver.right) + '))';
    else if (Kotlin.isType($receiver, DFieldAccess))
      return this.get_str_v8znfk$($receiver.obj) + '.' + $receiver.prop.callableName;
    else if (Kotlin.isType($receiver, DExprInvoke)) {
      var obj = first($receiver.args);
      var args = drop($receiver.args, 1);
      var argsSr = joinToString(args, ', ', void 0, void 0, void 0, void 0, JsGenerator$get_JsGenerator$str$lambda(this));
      return this.get_str_v8znfk$(obj) + '.' + $receiver.name + '(' + argsSr + ')';
    }
     else if (Kotlin.isType($receiver, DLocal))
      return this.get_name_zdqkhm$($receiver);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unhandled.DExpr.genJs: ' + $receiver));
    }
  };
  JsGenerator.prototype.genJs_ij481v$ = function ($receiver, w) {
    var tmp$, tmp$_0;
    if (Kotlin.isType($receiver, DReturnVoid)) {
      w.append_gw00v9$('return;');
    }
     else if (Kotlin.isType($receiver, DReturnExpr)) {
      w.append_gw00v9$('return ' + this.get_str_v8znfk$($receiver.expr) + ';');
    }
     else if (Kotlin.isType($receiver, DStmExpr)) {
      w.append_gw00v9$(this.get_str_v8znfk$($receiver.expr) + ';');
    }
     else if (Kotlin.isType($receiver, DAssign)) {
      var l = $receiver.left;
      var r = this.get_str_v8znfk$($receiver.value);
      if (Kotlin.isType(l, DFieldAccess)) {
        var objs = this.get_str_v8znfk$(l.obj);
        var propName = l.prop.callableName;
        w.append_gw00v9$(objs + '.' + propName + ' = ' + r + ';');
      }
       else if (Kotlin.isType(l, DLocal))
        w.append_gw00v9$(this.get_name_zdqkhm$(l) + ' = ' + r + ';');
      else {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Unhandled.DStm.DAssign.genJs: ' + $receiver));
      }
    }
     else if (Kotlin.isType($receiver, DStms)) {
      tmp$ = $receiver.stms.iterator();
      while (tmp$.hasNext()) {
        var stm = tmp$.next();
        this.genJs_ij481v$(stm, w);
      }
    }
     else if (Kotlin.isType($receiver, DIfElse)) {
      w.append_gw00v9$('if (' + this.get_str_v8znfk$($receiver.cond) + ') {');
      this.genJs_ij481v$($receiver.strue, w);
      w.append_gw00v9$('}');
      if ($receiver.sfalse != null) {
        w.append_gw00v9$('else {');
        (tmp$_0 = $receiver.sfalse) != null ? (this.genJs_ij481v$(tmp$_0, w), Unit) : null;
        w.append_gw00v9$('}');
      }
    }
     else if (Kotlin.isType($receiver, DWhile)) {
      w.append_gw00v9$('while (' + this.get_str_v8znfk$($receiver.cond) + ') {');
      this.genJs_ij481v$($receiver.block, w);
      w.append_gw00v9$('}');
    }
     else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unhandled.DStm.genJs: ' + $receiver));
    }
  };
  JsGenerator.prototype.generate_6taknv$ = function (strict) {
    var tmp$;
    var sb = new StringBuilder();
    if (strict)
      sb.append_gw00v9$('"use strict";');
    tmp$ = this.locals.iterator();
    while (tmp$.hasNext()) {
      var local = tmp$.next();
      sb.append_gw00v9$('var ' + this.get_name_zdqkhm$(local) + ' = ' + this.get_str_v8znfk$(local.initialValue) + ';');
    }
    this.genJs_ij481v$(this.func.body, sb);
    return sb.toString();
  };
  JsGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsGenerator',
    interfaces: []
  };
  function generateJsBody($receiver, strict) {
    if (strict === void 0)
      strict = true;
    return (new JsGenerator($receiver)).generate_6taknv$(strict);
  }
  function JvmField() {
  }
  JvmField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JvmField',
    interfaces: [Annotation]
  };
  function generateDynarek($receiver) {
    return _generateDynarek(0, $receiver);
  }
  function generateDynarek_0($receiver) {
    return _generateDynarek(1, $receiver);
  }
  function generateDynarek_1($receiver) {
    return _generateDynarek(2, $receiver);
  }
  function _generateDynarek(nargs, func) {
    var tmp$;
    var body = generateJsBody(func, true);
    if (nargs === 0)
      tmp$ = new Function(body);
    else if (nargs === 1)
      tmp$ = new Function('p0', body);
    else if (nargs === 2)
      tmp$ = new Function('p0', 'p1', body);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported args ' + nargs));
    }
    return tmp$;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$dynarek = package$soywiz.dynarek || (package$soywiz.dynarek = {});
  package$dynarek.DFunction = DFunction;
  package$dynarek.DFunction0 = DFunction0;
  package$dynarek.DFunction1 = DFunction1;
  package$dynarek.DFunction2 = DFunction2;
  $$importsForInline$$['dynarek-js'] = _;
  package$dynarek.DNode = DNode;
  package$dynarek.DType = DType;
  package$dynarek.DClass = DClass;
  package$dynarek.DPrimType = DPrimType;
  Object.defineProperty(package$dynarek, 'DVOID', {
    get: function () {
      return DVOID;
    }
  });
  Object.defineProperty(package$dynarek, 'DINT', {
    get: function () {
      return DINT;
    }
  });
  Object.defineProperty(package$dynarek, 'DFLOAT', {
    get: function () {
      return DFLOAT;
    }
  });
  Object.defineProperty(package$dynarek, 'DBOOL', {
    get: function () {
      return DBOOL;
    }
  });
  Object.defineProperty(IBinop, 'ADD', {
    get: IBinop$ADD_getInstance
  });
  Object.defineProperty(IBinop, 'SUB', {
    get: IBinop$SUB_getInstance
  });
  Object.defineProperty(IBinop, 'MUL', {
    get: IBinop$MUL_getInstance
  });
  Object.defineProperty(IBinop, 'DIV', {
    get: IBinop$DIV_getInstance
  });
  Object.defineProperty(IBinop, 'REM', {
    get: IBinop$REM_getInstance
  });
  Object.defineProperty(IBinop, 'AND', {
    get: IBinop$AND_getInstance
  });
  Object.defineProperty(IBinop, 'OR', {
    get: IBinop$OR_getInstance
  });
  Object.defineProperty(IBinop, 'XOR', {
    get: IBinop$XOR_getInstance
  });
  Object.defineProperty(IBinop, 'SHL', {
    get: IBinop$SHL_getInstance
  });
  Object.defineProperty(IBinop, 'SHR', {
    get: IBinop$SHR_getInstance
  });
  Object.defineProperty(IBinop, 'USHR', {
    get: IBinop$USHR_getInstance
  });
  package$dynarek.IBinop = IBinop;
  Object.defineProperty(FBinop, 'ADD', {
    get: FBinop$ADD_getInstance
  });
  Object.defineProperty(FBinop, 'SUB', {
    get: FBinop$SUB_getInstance
  });
  Object.defineProperty(FBinop, 'MUL', {
    get: FBinop$MUL_getInstance
  });
  Object.defineProperty(FBinop, 'DIV', {
    get: FBinop$DIV_getInstance
  });
  Object.defineProperty(FBinop, 'REM', {
    get: FBinop$REM_getInstance
  });
  package$dynarek.FBinop = FBinop;
  Object.defineProperty(Compop, 'EQ', {
    get: Compop$EQ_getInstance
  });
  Object.defineProperty(Compop, 'NE', {
    get: Compop$NE_getInstance
  });
  Object.defineProperty(Compop, 'LT', {
    get: Compop$LT_getInstance
  });
  Object.defineProperty(Compop, 'GT', {
    get: Compop$GT_getInstance
  });
  Object.defineProperty(Compop, 'LE', {
    get: Compop$LE_getInstance
  });
  Object.defineProperty(Compop, 'GE', {
    get: Compop$GE_getInstance
  });
  package$dynarek.Compop = Compop;
  package$dynarek.DExpr = DExpr;
  package$dynarek.DLiteral = DLiteral;
  package$dynarek.DArg = DArg;
  package$dynarek.DBinopInt = DBinopInt;
  package$dynarek.DBinopFloat = DBinopFloat;
  package$dynarek.DBinopIntBool = DBinopIntBool;
  package$dynarek.DLocal = DLocal;
  package$dynarek.DExprInvoke = DExprInvoke;
  package$dynarek.DExprInvoke1 = DExprInvoke1;
  package$dynarek.DExprInvoke2 = DExprInvoke2;
  package$dynarek.DExprInvoke3 = DExprInvoke3;
  package$dynarek.DRef = DRef;
  package$dynarek.DFieldAccess = DFieldAccess;
  package$dynarek.DStm = DStm;
  package$dynarek.DStms = DStms;
  package$dynarek.DReturnExpr = DReturnExpr;
  package$dynarek.DReturnVoid = DReturnVoid;
  package$dynarek.DAssign = DAssign;
  package$dynarek.DStmExpr = DStmExpr;
  package$dynarek.DIfElse = DIfElse;
  package$dynarek.DWhile = DWhile;
  package$dynarek.DNodeVisitor = DNodeVisitor;
  package$dynarek.getLocals_i11zi1$ = getLocals;
  package$dynarek.DSlowInterpreter = DSlowInterpreter;
  Object.defineProperty(package$dynarek, 'Dynarek', {
    get: Dynarek_getInstance
  });
  Object.defineProperty(package$dynarek, 'DYNAREK_VERSION', {
    get: function () {
      return DYNAREK_VERSION;
    }
  });
  package$dynarek.generateInterpreted_mielre$ = generateInterpreted;
  package$dynarek.generateInterpreted_hal14u$ = generateInterpreted_0;
  package$dynarek.generateInterpreted_jw8owk$ = generateInterpreted_1;
  StmBuilder.ElseBuilder = StmBuilder$ElseBuilder;
  package$dynarek.StmBuilder = StmBuilder;
  var package$js = package$dynarek.js || (package$dynarek.js = {});
  package$js.JsGenerator = JsGenerator;
  package$js.generateJsBody_w60r32$ = generateJsBody;
  package$dynarek.JvmField = JvmField;
  package$dynarek.generateDynarek_mielre$ = generateDynarek;
  package$dynarek.generateDynarek_hal14u$ = generateDynarek_0;
  package$dynarek.generateDynarek_jw8owk$ = generateDynarek_1;
  package$dynarek._generateDynarek_x3re8e$ = _generateDynarek;
  DVOID = new DPrimType(getKClass(Object.getPrototypeOf(kotlin.Unit).constructor), 0);
  DINT = new DPrimType(PrimitiveClasses$intClass, 1);
  DFLOAT = new DPrimType(PrimitiveClasses$floatClass, 2);
  DBOOL = new DPrimType(PrimitiveClasses$booleanClass, 3);
  DYNAREK_VERSION = '0.3.0';
  Kotlin.defineModule('dynarek-js', _);
  return _;
}));

//# sourceMappingURL=dynarek-js.js.map
