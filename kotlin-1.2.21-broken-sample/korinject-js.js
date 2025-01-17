(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korinject-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korinject-js'.");
    }
    root['korinject-js'] = factory(typeof this['korinject-js'] === 'undefined' ? {} : this['korinject-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toString = Kotlin.toString;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var Any = Object;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var getKClass = Kotlin.getKClass;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  AsyncInjector$NotMappedException.prototype = Object.create(RuntimeException.prototype);
  AsyncInjector$NotMappedException.prototype.constructor = AsyncInjector$NotMappedException;
  function Prototype() {
  }
  Prototype.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Prototype',
    interfaces: [Annotation]
  };
  function Singleton() {
  }
  Singleton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Singleton',
    interfaces: [Annotation]
  };
  function Inject() {
  }
  Inject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inject',
    interfaces: [Annotation]
  };
  function Optional() {
  }
  Optional.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Optional',
    interfaces: [Annotation]
  };
  function AsyncObjectProvider() {
  }
  AsyncObjectProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncObjectProvider',
    interfaces: []
  };
  function PrototypeAsyncObjectProvider(generator) {
    this.generator = generator;
  }
  PrototypeAsyncObjectProvider.prototype.get_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$get_y6n311$(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_y6n311$($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$get_y6n311$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_y6n311$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_y6n311$.prototype.constructor = Coroutine$get_y6n311$;
  Coroutine$get_y6n311$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.generator(this.local$injector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$injector.created_41v7ql$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  PrototypeAsyncObjectProvider.prototype.toString = function () {
    return 'PrototypeAsyncObjectProvider()';
  };
  PrototypeAsyncObjectProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrototypeAsyncObjectProvider',
    interfaces: [AsyncObjectProvider]
  };
  function FactoryAsyncObjectProvider(generator) {
    this.generator = generator;
  }
  FactoryAsyncObjectProvider.prototype.get_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$get_y6n311$_0(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_y6n311$_0($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$get_y6n311$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_y6n311$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_y6n311$_0.prototype.constructor = Coroutine$get_y6n311$_0;
  Coroutine$get_y6n311$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.generator(this.local$injector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.create(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$injector.created_41v7ql$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FactoryAsyncObjectProvider.prototype.toString = function () {
    return 'FactoryAsyncObjectProvider()';
  };
  FactoryAsyncObjectProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FactoryAsyncObjectProvider',
    interfaces: [AsyncObjectProvider]
  };
  function SingletonAsyncObjectProvider(generator) {
    this.generator = generator;
    this.value = null;
  }
  SingletonAsyncObjectProvider.prototype.get_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$get_y6n311$_1(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_y6n311$_1($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$get_y6n311$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_y6n311$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_y6n311$_1.prototype.constructor = Coroutine$get_y6n311$_1;
  Coroutine$get_y6n311$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.value == null) {
              this.state_0 = 2;
              this.result_0 = this.$this.generator(this.local$injector, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$injector.created_41v7ql$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.value = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            return ensureNotNull(this.$this.value);
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SingletonAsyncObjectProvider.prototype.toString = function () {
    return 'SingletonAsyncObjectProvider(' + toString(this.value) + ')';
  };
  SingletonAsyncObjectProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingletonAsyncObjectProvider',
    interfaces: [AsyncObjectProvider]
  };
  function InstanceAsyncObjectProvider(instance) {
    this.instance = instance;
  }
  InstanceAsyncObjectProvider.prototype.get_y6n311$ = function (injector, continuation) {
    return this.instance;
  };
  InstanceAsyncObjectProvider.prototype.toString = function () {
    return 'InstanceAsyncObjectProvider(' + this.instance + ')';
  };
  InstanceAsyncObjectProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceAsyncObjectProvider',
    interfaces: [AsyncObjectProvider]
  };
  function AsyncInjector(parent, level) {
    if (parent === void 0)
      parent = null;
    if (level === void 0)
      level = 0;
    this.parent = parent;
    this.level = level;
    this.fallbackProvider = null;
    this.providersByClass = LinkedHashMap_init();
    var tmp$, tmp$_0;
    this.root = (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.root : null) != null ? tmp$_0 : this;
    this.mapInstance_b1ce0a$(getKClass(AsyncInjector), this);
  }
  AsyncInjector.prototype.getWith_84k75t$ = function (T_0, isT, instances_0, continuation) {
    return this.getWith_pn9tk4$(getKClass(T_0), instances_0.slice(), continuation);
  };
  defineInlineFunction('korinject-js.com.soywiz.korinject.AsyncInjector.getWith_84k75t$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, instances_0, continuation) {
      Kotlin.suspendCall(this.getWith_pn9tk4$(getKClass(T_0), instances_0.slice(), Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  AsyncInjector.prototype.get_30y1fr$ = function (T_0, isT, continuation) {
    return this.get_wx4qjr$(getKClass(T_0), void 0, continuation);
  };
  defineInlineFunction('korinject-js.com.soywiz.korinject.AsyncInjector.get_30y1fr$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, continuation) {
      Kotlin.suspendCall(this.get_wx4qjr$(getKClass(T_0), void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  AsyncInjector.prototype.getOrNull_30y1fr$ = function (T_0, isT, continuation) {
    return this.getOrNull_wx4qjr$(getKClass(T_0), void 0, continuation);
  };
  defineInlineFunction('korinject-js.com.soywiz.korinject.AsyncInjector.getOrNull_30y1fr$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, continuation) {
      Kotlin.suspendCall(this.getOrNull_wx4qjr$(getKClass(T_0), void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  AsyncInjector.prototype.mapInstance_issdgt$ = defineInlineFunction('korinject-js.com.soywiz.korinject.AsyncInjector.mapInstance_issdgt$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, instance) {
      return this.mapInstance_b1ce0a$(getKClass(T_0), instance);
    };
  }));
  AsyncInjector.prototype.mapFactory_p9ghmn$ = defineInlineFunction('korinject-js.com.soywiz.korinject.AsyncInjector.mapFactory_p9ghmn$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, gen) {
      return this.mapFactory_mvlsy$(getKClass(T_0), gen);
    };
  }));
  AsyncInjector.prototype.mapSingleton_j3d0d8$ = defineInlineFunction('korinject-js.com.soywiz.korinject.AsyncInjector.mapSingleton_j3d0d8$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, gen) {
      return this.mapSingleton_siz2e9$(getKClass(T_0), gen);
    };
  }));
  AsyncInjector.prototype.mapPrototype_j3d0d8$ = defineInlineFunction('korinject-js.com.soywiz.korinject.AsyncInjector.mapPrototype_j3d0d8$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, gen) {
      return this.mapPrototype_siz2e9$(getKClass(T_0), gen);
    };
  }));
  Object.defineProperty(AsyncInjector.prototype, 'nearestFallbackProvider', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = this.fallbackProvider) != null ? tmp$_0 : (tmp$ = this.parent) != null ? tmp$.fallbackProvider : null;
    }
  });
  AsyncInjector.prototype.child = function () {
    return new AsyncInjector(this, this.level + 1 | 0);
  };
  AsyncInjector.prototype.getWith_pn9tk4$ = function (clazz, instances, continuation) {
    var tmp$, tmp$_0;
    var c = this.child();
    for (tmp$ = 0; tmp$ !== instances.length; ++tmp$) {
      var i = instances[tmp$];
      c.mapInstance_b1ce0a$(Kotlin.isType(tmp$_0 = Kotlin.getKClassFromExpression(i), KClass) ? tmp$_0 : throwCCE(), i);
    }
    return c.get_wx4qjr$(clazz, void 0, continuation);
  };
  AsyncInjector.prototype.dump = function () {
    var tmp$, tmp$_0;
    println(this.toString());
    tmp$ = this.providersByClass.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.key;
      var v = tmp$_1.value;
      println('- ' + k + ': ' + v);
    }
    (tmp$_0 = this.parent) != null ? (tmp$_0.dump(), Unit) : null;
  };
  AsyncInjector.prototype.mapInstance_b1ce0a$ = function (clazz, instance) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = instance, Any) ? tmp$ : throwCCE();
    var $receiver = this.providersByClass;
    var value = new InstanceAsyncObjectProvider(tmp$_0);
    $receiver.put_xwzc9p$(clazz, value);
    return this;
  };
  AsyncInjector.prototype.mapFactory_mvlsy$ = function (clazz, gen) {
    var $receiver = this.providersByClass;
    var value = new FactoryAsyncObjectProvider(gen);
    $receiver.put_xwzc9p$(clazz, value);
    return this;
  };
  AsyncInjector.prototype.mapSingleton_siz2e9$ = function (clazz, gen) {
    var $receiver = this.providersByClass;
    var value = new SingletonAsyncObjectProvider(gen);
    $receiver.put_xwzc9p$(clazz, value);
    return this;
  };
  AsyncInjector.prototype.mapPrototype_siz2e9$ = function (clazz, gen) {
    var $receiver = this.providersByClass;
    var value = new PrototypeAsyncObjectProvider(gen);
    $receiver.put_xwzc9p$(clazz, value);
    return this;
  };
  function AsyncInjector$RequestContext(initialClazz) {
    this.initialClazz = initialClazz;
  }
  AsyncInjector$RequestContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestContext',
    interfaces: []
  };
  AsyncInjector$RequestContext.prototype.component1 = function () {
    return this.initialClazz;
  };
  AsyncInjector$RequestContext.prototype.copy_xo1ogr$ = function (initialClazz) {
    return new AsyncInjector$RequestContext(initialClazz === void 0 ? this.initialClazz : initialClazz);
  };
  AsyncInjector$RequestContext.prototype.toString = function () {
    return 'RequestContext(initialClazz=' + Kotlin.toString(this.initialClazz) + ')';
  };
  AsyncInjector$RequestContext.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.initialClazz) | 0;
    return result;
  };
  AsyncInjector$RequestContext.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.initialClazz, other.initialClazz))));
  };
  AsyncInjector.prototype.getProviderOrNull_wx4qjr$ = function (clazz_0, ctx_0, continuation_0, suspended) {
    var instance = new Coroutine$getProviderOrNull_wx4qjr$(this, clazz_0, ctx_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getProviderOrNull_wx4qjr$($this, clazz_0, ctx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$clazz = clazz_0;
    this.local$ctx = ctx_0;
  }
  Coroutine$getProviderOrNull_wx4qjr$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getProviderOrNull_wx4qjr$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getProviderOrNull_wx4qjr$.prototype.constructor = Coroutine$getProviderOrNull_wx4qjr$;
  Coroutine$getProviderOrNull_wx4qjr$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$ctx === void 0)
              this.local$ctx = new AsyncInjector$RequestContext(this.local$clazz);
            var tmp$;
            var tmp$_0, tmp$_1;
            this.local$tmp$_0 = this.$this.providersByClass.get_11rb$(this.local$clazz);
            if (this.local$tmp$_0 == null) {
              if ((tmp$ = this.$this.parent) != null) {
                this.state_0 = 2;
                this.result_0 = tmp$.getProviderOrNull_wx4qjr$(this.local$clazz, this.local$ctx, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.result_0 = null;
                this.state_0 = 3;
                continue;
              }
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            if (this.local$tmp$_0 == null) {
              if ((tmp$_0 = this.$this.nearestFallbackProvider) != null) {
                this.state_0 = 5;
                this.result_0 = tmp$_0(this.local$clazz, this.local$ctx, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.result_0 = null;
                this.state_0 = 6;
                continue;
              }
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            return (tmp$_1 = this.local$tmp$_0) == null || Kotlin.isType(tmp$_1, AsyncObjectProvider) ? tmp$_1 : null;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AsyncInjector.prototype.getProvider_wx4qjr$ = function (clazz_0, ctx_0, continuation_0, suspended) {
    var instance = new Coroutine$getProvider_wx4qjr$(this, clazz_0, ctx_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getProvider_wx4qjr$($this, clazz_0, ctx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$clazz = clazz_0;
    this.local$ctx = ctx_0;
  }
  Coroutine$getProvider_wx4qjr$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getProvider_wx4qjr$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getProvider_wx4qjr$.prototype.constructor = Coroutine$getProvider_wx4qjr$;
  Coroutine$getProvider_wx4qjr$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$ctx === void 0)
              this.local$ctx = new AsyncInjector$RequestContext(this.local$clazz);
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.getProviderOrNull_wx4qjr$(this.local$clazz, this.local$ctx, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            if (tmp$ == null) {
              throw new AsyncInjector$NotMappedException(this.local$clazz, this.local$ctx.initialClazz, this.local$ctx, "Class '" + this.local$clazz + "' doesn't have constructors " + this.local$ctx);
            }

            return tmp$;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AsyncInjector.prototype.getOrNull_wx4qjr$ = function (clazz_0, ctx_0, continuation_0, suspended) {
    var instance = new Coroutine$getOrNull_wx4qjr$(this, clazz_0, ctx_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getOrNull_wx4qjr$($this, clazz_0, ctx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$clazz = clazz_0;
    this.local$ctx = ctx_0;
  }
  Coroutine$getOrNull_wx4qjr$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getOrNull_wx4qjr$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getOrNull_wx4qjr$.prototype.constructor = Coroutine$getOrNull_wx4qjr$;
  Coroutine$getOrNull_wx4qjr$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$ctx === void 0)
              this.local$ctx = new AsyncInjector$RequestContext(this.local$clazz);
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.getProviderOrNull_wx4qjr$(this.local$clazz, this.local$ctx, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 3;
              this.result_0 = tmp$.get_y6n311$(this.$this, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AsyncInjector.prototype.get_wx4qjr$ = function (clazz_0, ctx_0, continuation_0, suspended) {
    var instance = new Coroutine$get_wx4qjr$(this, clazz_0, ctx_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_wx4qjr$($this, clazz_0, ctx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$clazz = clazz_0;
    this.local$ctx = ctx_0;
  }
  Coroutine$get_wx4qjr$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_wx4qjr$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_wx4qjr$.prototype.constructor = Coroutine$get_wx4qjr$;
  Coroutine$get_wx4qjr$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$ctx === void 0)
              this.local$ctx = new AsyncInjector$RequestContext(this.local$clazz);
            this.state_0 = 2;
            this.result_0 = this.$this.getProvider_wx4qjr$(this.local$clazz, this.local$ctx, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.get_y6n311$(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AsyncInjector.prototype.has_lmshww$ = function (clazz_0, continuation_0, suspended) {
    var instance = new Coroutine$has_lmshww$(this, clazz_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$has_lmshww$($this, clazz_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$clazz = clazz_0;
  }
  Coroutine$has_lmshww$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$has_lmshww$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$has_lmshww$.prototype.constructor = Coroutine$has_lmshww$;
  Coroutine$has_lmshww$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.getProviderOrNull_wx4qjr$(this.local$clazz, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0 != null;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function AsyncInjector$NotMappedException(clazz, requestedByClass, ctx, msg) {
    if (msg === void 0)
      msg = 'Not mapped ' + clazz + ' requested by ' + requestedByClass + ' in ' + ctx;
    RuntimeException_init(msg, this);
    this.clazz = clazz;
    this.requestedByClass = requestedByClass;
    this.ctx = ctx;
    this.msg = msg;
    this.name = 'AsyncInjector$NotMappedException';
  }
  AsyncInjector$NotMappedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotMappedException',
    interfaces: [RuntimeException]
  };
  AsyncInjector.prototype.toString = function () {
    return 'AsyncInjector(level=' + this.level + ')';
  };
  AsyncInjector.prototype.created_41v7ql$ = function (instance_0, continuation_0, suspended) {
    var instance_0 = new Coroutine$created_41v7ql$(this, instance_0, continuation_0);
    if (suspended)
      return instance_0;
    else
      return instance_0.doResume(null);
  };
  function Coroutine$created_41v7ql$($this, instance_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$instance = instance_0;
  }
  Coroutine$created_41v7ql$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$created_41v7ql$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$created_41v7ql$.prototype.constructor = Coroutine$created_41v7ql$;
  Coroutine$created_41v7ql$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$instance, AsyncDependency)) {
              this.state_0 = 2;
              this.result_0 = this.local$instance.init(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            if (Kotlin.isType(this.local$instance, InjectorAsyncDependency)) {
              this.state_0 = 4;
              this.result_0 = this.local$instance.init_y6n311$(this.$this, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$instance;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AsyncInjector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncInjector',
    interfaces: []
  };
  function AsyncFactory() {
  }
  AsyncFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncFactory',
    interfaces: []
  };
  function InjectedHandler() {
  }
  InjectedHandler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InjectedHandler',
    interfaces: []
  };
  function AsyncFactoryClass(clazz) {
    this.clazz = clazz;
  }
  AsyncFactoryClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncFactoryClass',
    interfaces: [Annotation]
  };
  function AsyncDependency() {
  }
  AsyncDependency.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncDependency',
    interfaces: []
  };
  function InjectorAsyncDependency() {
  }
  InjectorAsyncDependency.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InjectorAsyncDependency',
    interfaces: []
  };
  function Korinject() {
    Korinject_instance = this;
    this.VERSION = KORINJECT_VERSION;
  }
  Korinject.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korinject',
    interfaces: []
  };
  var Korinject_instance = null;
  function Korinject_getInstance() {
    if (Korinject_instance === null) {
      new Korinject();
    }
    return Korinject_instance;
  }
  var KORINJECT_VERSION;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korinject = package$soywiz.korinject || (package$soywiz.korinject = {});
  package$korinject.Prototype = Prototype;
  package$korinject.Singleton = Singleton;
  package$korinject.Inject = Inject;
  package$korinject.Optional = Optional;
  package$korinject.AsyncObjectProvider = AsyncObjectProvider;
  package$korinject.PrototypeAsyncObjectProvider = PrototypeAsyncObjectProvider;
  package$korinject.FactoryAsyncObjectProvider = FactoryAsyncObjectProvider;
  package$korinject.SingletonAsyncObjectProvider = SingletonAsyncObjectProvider;
  package$korinject.InstanceAsyncObjectProvider = InstanceAsyncObjectProvider;
  AsyncInjector.RequestContext = AsyncInjector$RequestContext;
  AsyncInjector.NotMappedException = AsyncInjector$NotMappedException;
  package$korinject.AsyncInjector = AsyncInjector;
  package$korinject.AsyncFactory = AsyncFactory;
  package$korinject.InjectedHandler = InjectedHandler;
  package$korinject.AsyncFactoryClass = AsyncFactoryClass;
  package$korinject.AsyncDependency = AsyncDependency;
  package$korinject.InjectorAsyncDependency = InjectorAsyncDependency;
  Object.defineProperty(package$korinject, 'Korinject', {
    get: Korinject_getInstance
  });
  Object.defineProperty(package$korinject, 'KORINJECT_VERSION_8be2vx$', {
    get: function () {
      return KORINJECT_VERSION;
    }
  });
  KORINJECT_VERSION = '0.5.0';
  Kotlin.defineModule('korinject-js', _);
  return _;
}));

//# sourceMappingURL=korinject-js.js.map
