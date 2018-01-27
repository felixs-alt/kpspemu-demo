(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-js', 'korinject-js', 'korag-js', 'korui-js', 'korim-js', 'korma-js', 'klock-js', 'klogger-js', 'kds-js', 'kmem-js', 'korau-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-js'), require('korinject-js'), require('korag-js'), require('korui-js'), require('korim-js'), require('korma-js'), require('klock-js'), require('klogger-js'), require('kds-js'), require('kmem-js'), require('korau-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korinject-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korinject-js' was not found. Please, check whether 'korinject-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korag-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korag-js' was not found. Please, check whether 'korag-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korui-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korui-js' was not found. Please, check whether 'korui-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['klock-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'klock-js' was not found. Please, check whether 'klock-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['klogger-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'klogger-js' was not found. Please, check whether 'klogger-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korau-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korau-js' was not found. Please, check whether 'korau-js' is loaded prior to 'korge-js'.");
    }
    root['korge-js'] = factory(typeof this['korge-js'] === 'undefined' ? {} : this['korge-js'], kotlin, this['korio-js'], this['korinject-js'], this['korag-js'], this['korui-js'], this['korim-js'], this['korma-js'], this['klock-js'], this['klogger-js'], this['kds-js'], this['kmem-js'], this['korau-js']);
  }
}(this, function (_, Kotlin, $module$korio_js, $module$korinject_js, $module$korag_js, $module$korui_js, $module$korim_js, $module$korma_js, $module$klock_js, $module$klogger_js, $module$kds_js, $module$kmem_js, $module$korau_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var getKClass = Kotlin.getKClass;
  var EventLoop = $module$korio_js.com.soywiz.korio.async.EventLoop;
  var AG = $module$korag_js.com.soywiz.korag.AG;
  var AsyncInjector = $module$korinject_js.com.soywiz.korinject.AsyncInjector;
  var AGContainer = $module$korag_js.com.soywiz.korag.AGContainer;
  var Frame = $module$korui_js.com.soywiz.korui.ui.Frame;
  var korim = $module$korim_js.com.soywiz.korim;
  var register = $module$korio_js.com.soywiz.korio.vfs.register_rxeamr$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var TimeProvider = $module$korio_js.com.soywiz.korio.time.TimeProvider;
  var Vector2 = $module$korma_js.com.soywiz.korma.Vector2;
  var klock = $module$klock_js.com.soywiz.klock;
  var Unit = Kotlin.kotlin.Unit;
  var korui = $module$korui_js.com.soywiz.korui;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Promise$Deferred = $module$korio_js.com.soywiz.korio.async.Promise.Deferred;
  var render = $module$korim_js.com.soywiz.korim.vector.render_hd3tpo$;
  var vfs = $module$korio_js.com.soywiz.korio.vfs;
  var readBitmap = $module$korim_js.com.soywiz.korim.format.readBitmap_ub4gzs$;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var go = $module$korio_js.com.soywiz.korio.async.go_3hy5wj$;
  var CanvasApplicationEx = $module$korui_js.com.soywiz.korui.CanvasApplicationEx_ig5l1g$;
  var Logger = $module$klogger_js.com.soywiz.klogger.Logger;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var numberToInt = Kotlin.numberToInt;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Extra = $module$kds_js.com.soywiz.kds.Extra;
  var Extra$Property = $module$kds_js.com.soywiz.kds.Extra.Property;
  var go_0 = $module$korio_js.com.soywiz.korio.async.go_o1g0bv$;
  var Signal = $module$korio_js.com.soywiz.korio.async.Signal;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var Anchor = $module$korma_js.com.soywiz.korma.geom.Anchor;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var AG$StencilState = $module$korag_js.com.soywiz.korag.AG.StencilState;
  var AG$ColorMaskState = $module$korag_js.com.soywiz.korag.AG.ColorMaskState;
  var AG$CompareMode = $module$korag_js.com.soywiz.korag.AG.CompareMode;
  var AG$StencilOp = $module$korag_js.com.soywiz.korag.AG.StencilOp;
  var fill = $module$kmem_js.com.soywiz.kmem.fill_py0txo$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_l1lu5t$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var Once = $module$korio_js.com.soywiz.korio.util.Once;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var Matrix2d = $module$korma_js.com.soywiz.korma.Matrix2d;
  var Extra$Mixin = $module$kds_js.com.soywiz.kds.Extra.Mixin;
  var sound = $module$korau_js.com.soywiz.korau.sound;
  var AudioData = $module$korau_js.com.soywiz.korau.format.AudioData;
  var AsyncCacheItem = $module$korio_js.com.soywiz.korio.util.AsyncCacheItem;
  var interpolate = $module$korma_js.com.soywiz.korma.interpolation.interpolate_yvo9jy$;
  var ColorTransform = $module$korim_js.com.soywiz.korim.color.ColorTransform;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var equals = Kotlin.equals;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var firstOrNull_0 = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var FastByteArrayInputStream = $module$korio_js.com.soywiz.korio.stream.FastByteArrayInputStream;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var AsyncFactory = $module$korinject_js.com.soywiz.korinject.AsyncFactory;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var binarySearch = $module$kds_js.com.soywiz.kds.binarySearch_s1glwf$;
  var clamp = $module$korio_js.com.soywiz.korio.util.clamp_e4yvb3$;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IntArrayList = $module$kds_js.com.soywiz.kds.IntArrayList;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var readBitmapOptimized = $module$korim_js.com.soywiz.korim.format.readBitmapOptimized_93ma6j$;
  var readNativeSoundOptimized = $module$korau_js.com.soywiz.korau.sound.readNativeSoundOptimized_93ma6j$;
  var readAll = $module$korio_js.com.soywiz.korio.stream.readAll_ucmi9i$;
  var extract = $module$kmem_js.com.soywiz.kmem.extract_dqglrj$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var plus = Kotlin.kotlin.collections.plus_b32j0n$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var IntArrayList_init = $module$kds_js.com.soywiz.kds.IntArrayList_init_q5rwfd$;
  var DoubleArrayList_init = $module$kds_js.com.soywiz.kds.DoubleArrayList_init_gf7tl1$;
  var VectorPath = $module$korma_js.com.soywiz.korma.geom.VectorPath;
  var slice = $module$korim_js.com.soywiz.korim.bitmap.slice_ko78oz$;
  var Rectangle = $module$korma_js.com.soywiz.korma.geom.Rectangle;
  var Bitmap32 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap32;
  var json = $module$korio_js.com.soywiz.korio.serialization.json;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var RectangleInt_init = $module$korma_js.com.soywiz.korma.geom.RectangleInt_init_tjonv8$;
  var format = $module$korim_js.com.soywiz.korim.format;
  var ImageEncodingProps = $module$korim_js.com.soywiz.korim.format.ImageEncodingProps;
  var writeBitmap = $module$korim_js.com.soywiz.korim.format.writeBitmap_uk5x8r$;
  var writeS_VL = $module$korio_js.com.soywiz.korio.stream.writeS_VL_n5df9z$;
  var writeStringz = $module$korio_js.com.soywiz.korio.stream.writeStringz_5iah4l$;
  var writeU_VL = $module$korio_js.com.soywiz.korio.stream.writeU_VL_n5df9z$;
  var insert = $module$kmem_js.com.soywiz.kmem.insert_kvkj6u$;
  var drop = Kotlin.kotlin.collections.drop_8ujjk8$;
  var writeStringVL = $module$korio_js.com.soywiz.korio.stream.writeStringVL_61lhbb$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var writeF32_le = $module$korio_js.com.soywiz.korio.stream.writeF32_le_dpexvo$;
  var write8 = $module$korio_js.com.soywiz.korio.stream.write8_n5df9z$;
  var write16_le = $module$korio_js.com.soywiz.korio.stream.write16_le_n5df9z$;
  var clamp_0 = $module$korio_js.com.soywiz.korio.util.clamp_nig4hr$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var serialization = $module$korio_js.com.soywiz.korio.serialization;
  var String_0 = String;
  var Double = Number;
  var Boolean_0 = Boolean;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Rectangle_init = $module$korma_js.com.soywiz.korma.geom.Rectangle_init_tjonv8$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var registerNativeSoundSpecialReader = $module$korau_js.com.soywiz.korau.sound.registerNativeSoundSpecialReader;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var AsyncDependency = $module$korinject_js.com.soywiz.korinject.AsyncDependency;
  var go_1 = $module$korio_js.com.soywiz.korio.async.go_g3zeo5$;
  var Extra$PropertyThis = $module$kds_js.com.soywiz.kds.Extra.PropertyThis;
  var color = $module$korim_js.com.soywiz.korim.color;
  var get_indices_1 = Kotlin.kotlin.text.get_indices_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var font = $module$korim_js.com.soywiz.korim.font;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var readXml = $module$korio_js.com.soywiz.korio.serialization.xml.readXml_93ma6j$;
  var get_0 = $module$korio_js.com.soywiz.korio.serialization.xml.get_h00kq4$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var IntMap_init = $module$kds_js.com.soywiz.kds.IntMap_init_42wstk$;
  var Annotation = Kotlin.kotlin.Annotation;
  var Closeable = $module$korio_js.com.soywiz.korio.lang.Closeable;
  var InjectedHandler = $module$korinject_js.com.soywiz.korinject.InjectedHandler;
  var SuspendFunction1 = Function;
  var Closeable_0 = $module$korio_js.com.soywiz.korio.lang.Closeable_o14v8n$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var CoroutineContextHolder = $module$korio_js.com.soywiz.korio.async.CoroutineContextHolder;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var Cancellable = $module$korio_js.com.soywiz.korio.util.Cancellable;
  var coroutineReceiver = Kotlin.coroutineReceiver;
  var suspendCall = Kotlin.suspendCall;
  var coroutineResult = Kotlin.coroutineResult;
  var Exception = Kotlin.kotlin.Exception;
  var Computed = $module$kds_js.com.soywiz.kds.Computed;
  var Computed$WithParent = $module$kds_js.com.soywiz.kds.Computed.WithParent;
  var bounds = $module$korma_js.com.soywiz.korma.geom.bounds_kobt9m$;
  var Xml = $module$korio_js.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  var get_isText = $module$korio_js.com.soywiz.korio.serialization.xml.get_isText_byavcz$;
  var get_isComment = $module$korio_js.com.soywiz.korio.serialization.xml.get_isComment_byavcz$;
  var get_isNode = $module$korio_js.com.soywiz.korio.serialization.xml.get_isNode_byavcz$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var arraycopy = $module$kmem_js.com.soywiz.kmem.arraycopy_3poh7i$;
  var AsyncSignal = $module$korio_js.com.soywiz.korio.async.AsyncSignal;
  var go_2 = $module$korio_js.com.soywiz.korio.async.go_n2b8nk$;
  var toShort = Kotlin.toShort;
  var korag = $module$korag_js.com.soywiz.korag;
  var FragmentShader = $module$korag_js.com.soywiz.korag.shader.FragmentShader_8zzl3$;
  var VarType = $module$korag_js.com.soywiz.korag.shader.VarType;
  var Attribute_init = $module$korag_js.com.soywiz.korag.shader.Attribute_init_do1xv$;
  var Varying = $module$korag_js.com.soywiz.korag.shader.Varying;
  var VertexLayout_init = $module$korag_js.com.soywiz.korag.shader.VertexLayout_init_f1u95s$;
  var VertexShader = $module$korag_js.com.soywiz.korag.shader.VertexShader_8zzl3$;
  var Program = $module$korag_js.com.soywiz.korag.shader.Program;
  var AG$DrawType = $module$korag_js.com.soywiz.korag.AG.DrawType;
  var FastMemory = $module$kmem_js.com.soywiz.kmem.FastMemory;
  var Matrix4 = $module$korma_js.com.soywiz.korma.Matrix4;
  var AG$TextureUnit = $module$korag_js.com.soywiz.korag.AG.TextureUnit;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var get_isPowerOfTwo = $module$korma_js.com.soywiz.korma.numeric.get_isPowerOfTwo_s8ev3n$;
  var get_nextPowerOfTwo = $module$korma_js.com.soywiz.korma.numeric.get_nextPowerOfTwo_s8ev3n$;
  var use = $module$korio_js.com.soywiz.korio.lang.use_jgrjek$;
  var Pool_init = $module$kds_js.com.soywiz.kds.Pool_init_rz0iom$;
  var AG$Blending = $module$korag_js.com.soywiz.korag.AG.Blending;
  var throwUPAE = Kotlin.throwUPAE;
  var MountableVfs = $module$korio_js.com.soywiz.korio.vfs.MountableVfs_8iqkw1$;
  var PathInfo = $module$korio_js.com.soywiz.korio.vfs.PathInfo;
  var util = $module$korio_js.com.soywiz.korio.util;
  var SizeInt = $module$korma_js.com.soywiz.korma.geom.SizeInt;
  var InjectorAsyncDependency = $module$korinject_js.com.soywiz.korinject.InjectorAsyncDependency;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var light = $module$korui_js.com.soywiz.korui.light;
  var KeyNotFoundException = $module$korio_js.com.soywiz.korio.error.KeyNotFoundException;
  var sync = $module$korio_js.com.soywiz.korio.async.sync_7ntyfz$;
  var Any = Object;
  var AGInput = $module$korag_js.com.soywiz.korag.AGInput;
  var EventLoopTest = $module$korio_js.com.soywiz.korio.async.EventLoopTest;
  var interpolate_0 = $module$korma_js.com.soywiz.korma.interpolation.interpolate_i767ff$;
  var Comparable = Kotlin.kotlin.Comparable;
  var Interpolable = $module$korma_js.com.soywiz.korma.interpolation.Interpolable;
  var math = Kotlin.kotlin.math;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var interpolateAny = $module$korma_js.com.soywiz.korma.interpolation.interpolateAny_bb7w4c$;
  var getCallableRef = Kotlin.getCallableRef;
  var cancellable = $module$korio_js.com.soywiz.korio.util.cancellable_6257sj$;
  var cancel = $module$korio_js.com.soywiz.korio.util.cancel_p7p92l$;
  var AG$BlendFactor = $module$korag_js.com.soywiz.korag.AG.BlendFactor;
  var AG$AG$Blending_init = $module$korag_js.com.soywiz.korag.AG.Blending_init_6oerul$;
  var AG$BlendEquation = $module$korag_js.com.soywiz.korag.AG.BlendEquation;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var BoundsBuilder = $module$korma_js.com.soywiz.korma.geom.BoundsBuilder;
  var get_niceStr = $module$korma_js.com.soywiz.korma.numeric.get_niceStr_yrwdxr$;
  var Vector2_init = $module$korma_js.com.soywiz.korma.Vector2_init_vux9f0$;
  var Matrix2d$Transform = $module$korma_js.com.soywiz.korma.Matrix2d.Transform;
  var toDegrees = $module$korio_js.com.soywiz.korio.math.toDegrees_14dthe$;
  var toRadians = $module$korio_js.com.soywiz.korio.math.toRadians_14dthe$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var MustOverrideException = $module$korio_js.com.soywiz.korio.error.MustOverrideException;
  var go_3 = $module$korio_js.com.soywiz.korio.async.go_nkciq8$;
  var ScaleMode = $module$korma_js.com.soywiz.korma.geom.ScaleMode;
  var LogAG = $module$korag_js.com.soywiz.korag.log.LogAG;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  AnBaseShape.prototype = Object.create(View.prototype);
  AnBaseShape.prototype.constructor = AnBaseShape;
  AnShape.prototype = Object.create(AnBaseShape.prototype);
  AnShape.prototype.constructor = AnShape;
  AnMorphShape.prototype = Object.create(AnBaseShape.prototype);
  AnMorphShape.prototype.constructor = AnMorphShape;
  AnEmptyView.prototype = Object.create(View.prototype);
  AnEmptyView.prototype.constructor = AnEmptyView;
  Container.prototype = Object.create(View.prototype);
  Container.prototype.constructor = Container;
  AnTextField.prototype = Object.create(Container.prototype);
  AnTextField.prototype.constructor = AnTextField;
  AnSimpleAnimation.prototype = Object.create(Container.prototype);
  AnSimpleAnimation.prototype.constructor = AnSimpleAnimation;
  AnMovieClip.prototype = Object.create(Container.prototype);
  AnMovieClip.prototype.constructor = AnMovieClip;
  AnSymbolEmpty.prototype = Object.create(AnSymbol.prototype);
  AnSymbolEmpty.prototype.constructor = AnSymbolEmpty;
  AnSymbolSound.prototype = Object.create(AnSymbol.prototype);
  AnSymbolSound.prototype.constructor = AnSymbolSound;
  AnTextFieldSymbol.prototype = Object.create(AnSymbol.prototype);
  AnTextFieldSymbol.prototype.constructor = AnTextFieldSymbol;
  AnSymbolBaseShape.prototype = Object.create(AnSymbol.prototype);
  AnSymbolBaseShape.prototype.constructor = AnSymbolBaseShape;
  AnSymbolShape.prototype = Object.create(AnSymbolBaseShape.prototype);
  AnSymbolShape.prototype.constructor = AnSymbolShape;
  AnSymbolMorphShape.prototype = Object.create(AnSymbolBaseShape.prototype);
  AnSymbolMorphShape.prototype.constructor = AnSymbolMorphShape;
  AnSymbolBitmap.prototype = Object.create(AnSymbol.prototype);
  AnSymbolBitmap.prototype.constructor = AnSymbolBitmap;
  AnDepthTimeline.prototype = Object.create(Timed.prototype);
  AnDepthTimeline.prototype.constructor = AnDepthTimeline;
  AnSymbolMovieClip.prototype = Object.create(AnSymbol.prototype);
  AnSymbolMovieClip.prototype.constructor = AnSymbolMovieClip;
  AnLibraryPlugin.prototype = Object.create(KorgePlugin.prototype);
  AnLibraryPlugin.prototype.constructor = AnLibraryPlugin;
  AtlasPlugin.prototype = Object.create(KorgePlugin.prototype);
  AtlasPlugin.prototype.constructor = AtlasPlugin;
  SoundPlugin.prototype = Object.create(KorgePlugin.prototype);
  SoundPlugin.prototype.constructor = SoundPlugin;
  BitmapFontPlugin.prototype = Object.create(KorgePlugin.prototype);
  BitmapFontPlugin.prototype.constructor = BitmapFontPlugin;
  DockingComponent.prototype = Object.create(Component.prototype);
  DockingComponent.prototype.constructor = DockingComponent;
  SortedChildrenByComponent.prototype = Object.create(Component.prototype);
  SortedChildrenByComponent.prototype.constructor = SortedChildrenByComponent;
  PreventDefaultException.prototype = Object.create(Exception.prototype);
  PreventDefaultException.prototype.constructor = PreventDefaultException;
  Language.prototype = Object.create(Enum.prototype);
  Language.prototype.constructor = Language;
  Gestures.prototype = Object.create(Component.prototype);
  Gestures.prototype.constructor = Gestures;
  KeysComponent.prototype = Object.create(Component.prototype);
  KeysComponent.prototype.constructor = KeysComponent;
  MouseComponent.prototype = Object.create(Component.prototype);
  MouseComponent.prototype.constructor = MouseComponent;
  ScaledScene.prototype = Object.create(Scene.prototype);
  ScaledScene.prototype.constructor = ScaledScene;
  EmptyScene.prototype = Object.create(Scene.prototype);
  EmptyScene.prototype.constructor = EmptyScene;
  LogScene.prototype = Object.create(Scene.prototype);
  LogScene.prototype.constructor = LogScene;
  SceneContainer.prototype = Object.create(Container.prototype);
  SceneContainer.prototype.constructor = SceneContainer;
  TransitionView.prototype = Object.create(Container.prototype);
  TransitionView.prototype.constructor = TransitionView;
  InmemoryStorage.prototype = Object.create(StorageBase.prototype);
  InmemoryStorage.prototype.constructor = InmemoryStorage;
  KorgeTest$DummyAG.prototype = Object.create(AG.prototype);
  KorgeTest$DummyAG.prototype.constructor = KorgeTest$DummyAG;
  TimerComponents.prototype = Object.create(Component.prototype);
  TimerComponents.prototype.constructor = TimerComponents;
  TweenComponent.prototype = Object.create(Component.prototype);
  TweenComponent.prototype.constructor = TweenComponent;
  BlendMode.prototype = Object.create(Enum.prototype);
  BlendMode.prototype.constructor = BlendMode;
  Camera.prototype = Object.create(Container.prototype);
  Camera.prototype.constructor = Camera;
  FixedSizeContainer.prototype = Object.create(Container.prototype);
  FixedSizeContainer.prototype.constructor = FixedSizeContainer;
  Image.prototype = Object.create(View.prototype);
  Image.prototype.constructor = Image;
  NinePatch.prototype = Object.create(View.prototype);
  NinePatch.prototype.constructor = NinePatch;
  ScaleView.prototype = Object.create(FixedSizeContainer.prototype);
  ScaleView.prototype.constructor = ScaleView;
  SolidRect.prototype = Object.create(View.prototype);
  SolidRect.prototype.constructor = SolidRect;
  Text.prototype = Object.create(View.prototype);
  Text.prototype.constructor = Text;
  CustomView.prototype = Object.create(View.prototype);
  CustomView.prototype.constructor = CustomView;
  View$addUpdatable$ObjectLiteral.prototype = Object.create(Component.prototype);
  View$addUpdatable$ObjectLiteral.prototype.constructor = View$addUpdatable$ObjectLiteral;
  View$HitTestType.prototype = Object.create(Enum.prototype);
  View$HitTestType.prototype.constructor = View$HitTestType;
  DummyView.prototype = Object.create(View.prototype);
  DummyView.prototype.constructor = DummyView;
  Stage.prototype = Object.create(Container.prototype);
  Stage.prototype.constructor = Stage;
  TileMap.prototype = Object.create(View.prototype);
  TileMap.prototype.constructor = TileMap;
  function Korge() {
    Korge_instance = this;
    this.VERSION = KORGE_VERSION;
    this.logger = Logger.Companion.invoke_61zpoe$('Korge');
  }
  function Korge$setupCanvas$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Korge$setupCanvas$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda.prototype.constructor = Coroutine$Korge$setupCanvas$lambda;
  Coroutine$Korge$setupCanvas$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(EventLoop), void 0, this);
            tmp$ = this.result_0;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(AG), void 0, this);
            tmp$_0 = this.result_0;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(AsyncInjector), void 0, this);
            tmp$_1 = this.result_0;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(Input), void 0, this);
            tmp$_2 = this.result_0;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(KorgePlugins), void 0, this);
            return new Views(tmp$, tmp$_0, tmp$_1, tmp$_2, this.result_0);
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korge$setupCanvas$lambda_0($receiver, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda_0($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda_0($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Korge$setupCanvas$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda_0.prototype.constructor = Coroutine$Korge$setupCanvas$lambda_0;
  Coroutine$Korge$setupCanvas$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Input();
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korge$setupCanvas$lambda_1($receiver, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda_1($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda_1($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Korge$setupCanvas$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda_1.prototype.constructor = Coroutine$Korge$setupCanvas$lambda_1;
  Coroutine$Korge$setupCanvas$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new EmptyScene();
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korge$setupCanvas$lambda_2($receiver, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda_2($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda_2($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Korge$setupCanvas$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda_2.prototype.constructor = Coroutine$Korge$setupCanvas$lambda_2;
  Coroutine$Korge$setupCanvas$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new ResourcesRoot();
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korge$setupCanvas$mouseDown(closure$views, closure$ag, closure$downPos, closure$mouseDownEvent, closure$downTime) {
    return function (name, x, y) {
      closure$views.input.mouseButtons = 1;
      closure$views.input.mouse.setTo_lu1900$(x * closure$ag.pixelDensity, y * closure$ag.pixelDensity);
      closure$views.mouseUpdated();
      closure$downPos.copyFrom_yyv1mw$(closure$views.input.mouse);
      closure$views.dispatch_gdt21f$(closure$mouseDownEvent);
      closure$downTime.v = klock.Klock.currentTimeMillisDouble();
    };
  }
  function Korge$setupCanvas$mouseMove(closure$views, closure$ag, closure$mouseMovedEvent, closure$moveTime) {
    return function (name, x, y) {
      closure$views.input.mouse.setTo_lu1900$(x * closure$ag.pixelDensity, y * closure$ag.pixelDensity);
      closure$views.mouseUpdated();
      closure$views.dispatch_gdt21f$(closure$mouseMovedEvent);
      closure$moveTime.v = klock.Klock.currentTimeMillisDouble();
    };
  }
  function Korge$setupCanvas$mouseUp(closure$views, closure$ag, closure$upPos, closure$mouseUpEvent, closure$upTime, closure$downTime, closure$mouseClickEvent) {
    return function (name, x, y) {
      closure$views.input.mouseButtons = 0;
      closure$views.input.mouse.setTo_lu1900$(x * closure$ag.pixelDensity, y * closure$ag.pixelDensity);
      closure$views.mouseUpdated();
      closure$upPos.copyFrom_yyv1mw$(closure$views.input.mouse);
      closure$views.dispatch_gdt21f$(closure$mouseUpEvent);
      closure$upTime.v = klock.Klock.currentTimeMillisDouble();
      if (closure$downTime.v - closure$upTime.v <= 40.0) {
        closure$views.dispatch_gdt21f$(closure$mouseClickEvent);
      }
    };
  }
  function Korge$setupCanvas$copyTo($receiver, e) {
    e.keyCode = $receiver.keyCode;
  }
  function Korge$setupCanvas$lambda_3(closure$mouseDown) {
    return function (e) {
      closure$mouseDown('onMouseDown', e.x, e.y);
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_4(closure$mouseUp) {
    return function (e) {
      closure$mouseUp('onMouseUp', e.x, e.y);
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_5(closure$mouseMove) {
    return function (e) {
      closure$mouseMove('onMouseOver', e.x, e.y);
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_6(closure$mouseDown) {
    return function (e) {
      closure$mouseDown('onTouchStart', e.x, e.y);
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_7(closure$mouseUp, closure$moveMouseOutsideInNextFrame) {
    return function (e) {
      closure$mouseUp('onTouchEnd', e.x, e.y);
      closure$moveMouseOutsideInNextFrame.v = true;
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_8(closure$mouseMove) {
    return function (e) {
      closure$mouseMove('onTouchMove', e.x, e.y);
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_9(closure$views, closure$keyDownEvent, closure$copyTo) {
    return function (it) {
      closure$views.input.setKey_fzusl$(it.keyCode, true);
      closure$copyTo(it, closure$keyDownEvent);
      closure$views.dispatch_gdt21f$(closure$keyDownEvent);
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_10(closure$views, closure$keyUpEvent, closure$copyTo) {
    return function (it) {
      closure$views.input.setKey_fzusl$(it.keyCode, false);
      closure$copyTo(it, closure$keyUpEvent);
      closure$views.dispatch_gdt21f$(closure$keyUpEvent);
      if (it.keyCode === Keys_getInstance().F12) {
        closure$views.debugViews = !closure$views.debugViews;
      }
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_11(closure$keyTypedEvent, closure$copyTo, closure$views) {
    return function (it) {
      closure$copyTo(it, closure$keyTypedEvent);
      closure$views.dispatch_gdt21f$(closure$keyTypedEvent);
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_12(closure$views, closure$ag) {
    return function (it) {
      closure$views.resized_vux9f0$(closure$ag.backWidth, closure$ag.backHeight);
      return Unit;
    };
  }
  var Math_0 = Math;
  var numberToDouble = Kotlin.numberToDouble;
  function Korge$setupCanvas$lambda_13(closure$config, closure$lastTime, closure$views, closure$moveMouseOutsideInNextFrame, closure$mouseMovedEvent) {
    return function (it) {
      var tmp$;
      if (closure$config.trace)
        println('ag.onRender');
      var currentTime = closure$config.timeProvider.currentTimeMillis();
      var delta = currentTime.subtract(closure$lastTime.v).toInt();
      var b = closure$views.clampElapsedTimeTo;
      var adelta = Math_0.min(delta, b);
      closure$lastTime.v = currentTime;
      closure$views.update_za3lpa$(adelta);
      tmp$ = (closure$config.module.clearEachFrame && closure$views.clearEachFrame);
      closure$views.render_fzusl$(closure$config.module.bgcolor, tmp$);
      if (closure$moveMouseOutsideInNextFrame.v) {
        closure$moveMouseOutsideInNextFrame.v = false;
        closure$views.input.mouse.setTo_lu1900$(numberToDouble(-1000), numberToDouble(-1000));
        closure$views.dispatch_gdt21f$(closure$mouseMovedEvent);
        closure$views.mouseUpdated();
      }
      return Unit;
    };
  }
  function Korge$setupCanvas$lambda_14(closure$config) {
    return function () {
      if (closure$config.trace)
        println('views.animationFrameLoop');
      closure$config.container.repaint();
      return Unit;
    };
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Korge.prototype.setupCanvas_dnucxw$ = function (config_0, continuation_0, suspended) {
    var instance = new Coroutine$setupCanvas_dnucxw$(this, config_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setupCanvas_dnucxw$($this, config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$injector = void 0;
    this.local$agInput = void 0;
    this.local$ag = void 0;
    this.local$size = void 0;
    this.local$views = void 0;
    this.local$moduleArgs = void 0;
    this.local$sc = void 0;
    this.local$config = config_0;
  }
  Coroutine$setupCanvas_dnucxw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setupCanvas_dnucxw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setupCanvas_dnucxw$.prototype.constructor = Coroutine$setupCanvas_dnucxw$;
  Coroutine$setupCanvas_dnucxw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.local$config.trace)
              println('Korge.setupCanvas[1]');
            this.local$injector = this.local$config.injector;
            var container = ensureNotNull(this.local$config.container);
            this.local$agInput = container.agInput;
            this.local$ag = container.ag;
            this.local$size = this.local$config.module.size;
            this.local$injector.mapSingleton_siz2e9$(getKClass(Views), Korge$setupCanvas$lambda).mapSingleton_siz2e9$(getKClass(Input), Korge$setupCanvas$lambda_0).mapInstance_b1ce0a$(getKClass(KorgePlugins), defaultKorgePlugins).mapInstance_b1ce0a$(getKClass(Korge$Config), this.local$config).mapInstance_b1ce0a$(getKClass(AGContainer), container).mapInstance_b1ce0a$(getKClass(AG), this.local$ag).mapPrototype_siz2e9$(getKClass(EmptyScene), Korge$setupCanvas$lambda_1).mapSingleton_siz2e9$(getKClass(ResourcesRoot), Korge$setupCanvas$lambda_2);
            if (this.local$config.frame != null) {
              this.local$injector.mapInstance_b1ce0a$(getKClass(Frame), this.local$config.frame);
            }

            tmp$ = this.local$config.module.plugins.iterator();
            while (tmp$.hasNext()) {
              var plugin = tmp$.next();
              defaultKorgePlugins.register_8nuyex$([plugin]);
            }

            register(korim.NativeImageSpecialReader.instance);
            this.local$injector.mapInstance_b1ce0a$(getKClass(AG), this.local$ag);
            if (this.local$config.trace)
              println('Korge.setupCanvas[1b]. EventLoop: ' + this.local$config.eventLoop);
            if (this.local$config.trace)
              println('Korge.setupCanvas[1c]. ag: ' + this.local$ag);
            if (this.local$config.trace)
              println('Korge.setupCanvas[1d]. debug: ' + this.local$config.debug);
            if (this.local$config.trace)
              println('Korge.setupCanvas[1e]. args: ' + toList(this.local$config.args));
            if (this.local$config.trace)
              println('Korge.setupCanvas[1f]. size: ' + this.local$size);
            this.local$injector.mapInstance_b1ce0a$(getKClass(EventLoop), this.local$config.eventLoop);
            this.state_0 = 2;
            this.result_0 = this.local$injector.get_wx4qjr$(getKClass(Views), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$views = this.result_0;
            this.local$views.debugViews = this.local$config.debug;
            this.local$config.constructedViews(this.local$views);
            this.local$moduleArgs = new Korge$ModuleArgs(this.local$config.args);
            if (this.local$config.trace)
              println('Korge.setupCanvas[2]');
            this.local$views.virtualWidth = this.local$size.width;
            this.local$views.virtualHeight = this.local$size.height;
            this.local$tmp$_0 = defaultKorgePlugins.plugins.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 5;
              continue;
            }

            var plugin_0 = this.local$tmp$_0.next();
            this.state_0 = 4;
            this.result_0 = plugin_0.register_gohfjx$(this.local$views, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.state_0 = 3;
            continue;
          case 5:
            if (this.local$config.trace)
              println('Korge.setupCanvas[3]');
            this.state_0 = 6;
            this.result_0 = this.local$ag.onReady.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            if (this.local$config.trace)
              println('Korge.setupCanvas[4]');
            this.local$injector.mapInstance_b1ce0a$(getKClass(Korge$ModuleArgs), this.local$moduleArgs);
            this.local$injector.mapInstance_b1ce0a$(getKClass(TimeProvider), this.local$config.timeProvider);
            this.local$injector.mapInstance_b1ce0a$(getKClass(Module), this.local$config.module);
            this.state_0 = 7;
            this.result_0 = this.local$config.module.init_y6n311$(this.local$injector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 7:
            if (this.local$config.trace)
              println('Korge.setupCanvas[5]');
            var downPos = new Vector2();
            var upPos = new Vector2();
            var mouseMovedEvent = new MouseMovedEvent();
            var mouseUpEvent = new MouseUpEvent();
            var mouseClickEvent = new MouseClickEvent();
            var mouseDownEvent = new MouseDownEvent();
            var keyDownEvent = new KeyDownEvent();
            var keyUpEvent = new KeyUpEvent();
            var keyTypedEvent = new KeyTypedEvent();
            var downTime = {v: 0.0};
            var moveTime = {v: 0.0};
            var upTime = {v: 0.0};
            var mouseDown = Korge$setupCanvas$mouseDown(this.local$views, this.local$ag, downPos, mouseDownEvent, downTime);
            var mouseMove = Korge$setupCanvas$mouseMove(this.local$views, this.local$ag, mouseMovedEvent, moveTime);
            var mouseUp = Korge$setupCanvas$mouseUp(this.local$views, this.local$ag, upPos, mouseUpEvent, upTime, downTime, mouseClickEvent);
            var copyTo = Korge$setupCanvas$copyTo;
            this.local$agInput.onMouseDown.invoke_qlkmfe$(Korge$setupCanvas$lambda_3(mouseDown));
            this.local$agInput.onMouseUp.invoke_qlkmfe$(Korge$setupCanvas$lambda_4(mouseUp));
            this.local$agInput.onMouseOver.invoke_qlkmfe$(Korge$setupCanvas$lambda_5(mouseMove));
            var moveMouseOutsideInNextFrame = {v: false};
            this.local$agInput.onTouchStart.invoke_qlkmfe$(Korge$setupCanvas$lambda_6(mouseDown));
            this.local$agInput.onTouchEnd.invoke_qlkmfe$(Korge$setupCanvas$lambda_7(mouseUp, moveMouseOutsideInNextFrame));
            this.local$agInput.onTouchMove.invoke_qlkmfe$(Korge$setupCanvas$lambda_8(mouseMove));
            this.local$agInput.onKeyDown.invoke_qlkmfe$(Korge$setupCanvas$lambda_9(this.local$views, keyDownEvent, copyTo));
            this.local$agInput.onKeyUp.invoke_qlkmfe$(Korge$setupCanvas$lambda_10(this.local$views, keyUpEvent, copyTo));
            this.local$agInput.onKeyTyped.invoke_qlkmfe$(Korge$setupCanvas$lambda_11(keyTypedEvent, copyTo, this.local$views));
            this.local$ag.onResized.invoke_qlkmfe$(Korge$setupCanvas$lambda_12(this.local$views, this.local$ag));
            this.local$ag.resized();
            var lastTime = {v: this.local$config.timeProvider.currentTimeMillis()};
            this.local$ag.onRender.invoke_qlkmfe$(Korge$setupCanvas$lambda_13(this.local$config, lastTime, this.local$views, moveMouseOutsideInNextFrame, mouseMovedEvent));
            if (this.local$config.trace)
              println('Korge.setupCanvas[7]');
            this.local$views.animationFrameLoop_o14v8n$(Korge$setupCanvas$lambda_14(this.local$config));
            this.local$sc = sceneContainer(this.local$views);
            this.local$views.stage.plusAssign_l5rad2$(this.local$sc);
            this.state_0 = 8;
            this.result_0 = this.local$sc.changeTo_ekc72s$(this.local$config.sceneClass, copyToArray(this.local$config.sceneInjects).slice(), TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0)), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 8:
            if (this.local$config.trace)
              println('Korge.setupCanvas[8]');
            return this.local$sc;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korge$invoke$lambda(it) {
    return Unit;
  }
  function Korge$invoke$lambda_0(closure$module_0, closure$args_0, closure$container_0, closure$sceneClass_0, closure$sceneInjects_0, closure$injector_0, closure$timeProvider_0, closure$debug_0, closure$trace_0, closure$constructedViews_0, this$Korge_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Korge$invoke$lambda(closure$module_0, closure$args_0, closure$container_0, closure$sceneClass_0, closure$sceneInjects_0, closure$injector_0, closure$timeProvider_0, closure$debug_0, closure$trace_0, closure$constructedViews_0, this$Korge_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korge$invoke$lambda(closure$module_0, closure$args_0, closure$container_0, closure$sceneClass_0, closure$sceneInjects_0, closure$injector_0, closure$timeProvider_0, closure$debug_0, closure$trace_0, closure$constructedViews_0, this$Korge_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$module = closure$module_0;
    this.local$closure$args = closure$args_0;
    this.local$closure$container = closure$container_0;
    this.local$closure$sceneClass = closure$sceneClass_0;
    this.local$closure$sceneInjects = closure$sceneInjects_0;
    this.local$closure$injector = closure$injector_0;
    this.local$closure$timeProvider = closure$timeProvider_0;
    this.local$closure$debug = closure$debug_0;
    this.local$closure$trace = closure$trace_0;
    this.local$closure$constructedViews = closure$constructedViews_0;
    this.local$this$Korge = this$Korge_0;
  }
  Coroutine$Korge$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$invoke$lambda.prototype.constructor = Coroutine$Korge$invoke$lambda;
  Coroutine$Korge$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Korge.test_dnucxw$(new Korge$Config(this.local$closure$module, this.local$closure$args, this.local$closure$container, void 0, this.local$closure$sceneClass, this.local$closure$sceneInjects, this.local$closure$timeProvider, this.local$closure$injector, this.local$closure$debug, this.local$closure$trace, this.local$closure$constructedViews), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  Korge.prototype.invoke_s7k2f4$ = function (module_0, args, container, sceneClass, sceneInjects, timeProvider, injector, debug, trace, constructedViews, eventLoop) {
    if (args === void 0)
      args = [];
    if (container === void 0)
      container = null;
    if (sceneClass === void 0)
      sceneClass = module_0.mainScene;
    if (sceneInjects === void 0) {
      sceneInjects = emptyList();
    }
    if (timeProvider === void 0)
      timeProvider = new TimeProvider();
    if (injector === void 0)
      injector = new AsyncInjector();
    if (debug === void 0)
      debug = false;
    if (trace === void 0)
      trace = false;
    if (constructedViews === void 0)
      constructedViews = Korge$invoke$lambda;
    if (eventLoop === void 0)
      eventLoop = korui.KoruiEventLoop.instance;
    EventLoop.Companion.main_3513f7$(eventLoop, Korge$invoke$lambda_0(module_0, args, container, sceneClass, sceneInjects, injector, timeProvider, debug, trace, constructedViews, this));
  };
  function Korge$Config(module_0, args, container, frame, sceneClass, sceneInjects, timeProvider, injector, debug, trace, constructedViews, eventLoop) {
    if (args === void 0)
      args = [];
    if (container === void 0)
      container = null;
    if (frame === void 0)
      frame = null;
    if (sceneClass === void 0)
      sceneClass = module_0.mainScene;
    if (sceneInjects === void 0) {
      sceneInjects = emptyList();
    }
    if (timeProvider === void 0)
      timeProvider = new TimeProvider();
    if (injector === void 0)
      injector = new AsyncInjector();
    if (debug === void 0)
      debug = false;
    if (trace === void 0)
      trace = false;
    if (constructedViews === void 0)
      constructedViews = Korge$Korge$Config_init$lambda;
    if (eventLoop === void 0)
      eventLoop = korui.KoruiEventLoop.instance;
    this.module = module_0;
    this.args = args;
    this.container = container;
    this.frame = frame;
    this.sceneClass = sceneClass;
    this.sceneInjects = sceneInjects;
    this.timeProvider = timeProvider;
    this.injector = injector;
    this.debug = debug;
    this.trace = trace;
    this.constructedViews = constructedViews;
    this.eventLoop = eventLoop;
  }
  function Korge$Korge$Config_init$lambda(it) {
    return Unit;
  }
  Korge$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  Korge$Config.prototype.component1 = function () {
    return this.module;
  };
  Korge$Config.prototype.component2 = function () {
    return this.args;
  };
  Korge$Config.prototype.component3 = function () {
    return this.container;
  };
  Korge$Config.prototype.component4 = function () {
    return this.frame;
  };
  Korge$Config.prototype.component5 = function () {
    return this.sceneClass;
  };
  Korge$Config.prototype.component6 = function () {
    return this.sceneInjects;
  };
  Korge$Config.prototype.component7 = function () {
    return this.timeProvider;
  };
  Korge$Config.prototype.component8 = function () {
    return this.injector;
  };
  Korge$Config.prototype.component9 = function () {
    return this.debug;
  };
  Korge$Config.prototype.component10 = function () {
    return this.trace;
  };
  Korge$Config.prototype.component11 = function () {
    return this.constructedViews;
  };
  Korge$Config.prototype.component12 = function () {
    return this.eventLoop;
  };
  Korge$Config.prototype.copy_avc3n6$ = function (module_0, args, container, frame, sceneClass, sceneInjects, timeProvider, injector, debug, trace, constructedViews, eventLoop) {
    return new Korge$Config(module_0 === void 0 ? this.module : module_0, args === void 0 ? this.args : args, container === void 0 ? this.container : container, frame === void 0 ? this.frame : frame, sceneClass === void 0 ? this.sceneClass : sceneClass, sceneInjects === void 0 ? this.sceneInjects : sceneInjects, timeProvider === void 0 ? this.timeProvider : timeProvider, injector === void 0 ? this.injector : injector, debug === void 0 ? this.debug : debug, trace === void 0 ? this.trace : trace, constructedViews === void 0 ? this.constructedViews : constructedViews, eventLoop === void 0 ? this.eventLoop : eventLoop);
  };
  Korge$Config.prototype.toString = function () {
    return 'Config(module=' + Kotlin.toString(this.module) + (', args=' + Kotlin.toString(this.args)) + (', container=' + Kotlin.toString(this.container)) + (', frame=' + Kotlin.toString(this.frame)) + (', sceneClass=' + Kotlin.toString(this.sceneClass)) + (', sceneInjects=' + Kotlin.toString(this.sceneInjects)) + (', timeProvider=' + Kotlin.toString(this.timeProvider)) + (', injector=' + Kotlin.toString(this.injector)) + (', debug=' + Kotlin.toString(this.debug)) + (', trace=' + Kotlin.toString(this.trace)) + (', constructedViews=' + Kotlin.toString(this.constructedViews)) + (', eventLoop=' + Kotlin.toString(this.eventLoop)) + ')';
  };
  Korge$Config.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.module) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.container) | 0;
    result = result * 31 + Kotlin.hashCode(this.frame) | 0;
    result = result * 31 + Kotlin.hashCode(this.sceneClass) | 0;
    result = result * 31 + Kotlin.hashCode(this.sceneInjects) | 0;
    result = result * 31 + Kotlin.hashCode(this.timeProvider) | 0;
    result = result * 31 + Kotlin.hashCode(this.injector) | 0;
    result = result * 31 + Kotlin.hashCode(this.debug) | 0;
    result = result * 31 + Kotlin.hashCode(this.trace) | 0;
    result = result * 31 + Kotlin.hashCode(this.constructedViews) | 0;
    result = result * 31 + Kotlin.hashCode(this.eventLoop) | 0;
    return result;
  };
  Korge$Config.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.module, other.module) && Kotlin.equals(this.args, other.args) && Kotlin.equals(this.container, other.container) && Kotlin.equals(this.frame, other.frame) && Kotlin.equals(this.sceneClass, other.sceneClass) && Kotlin.equals(this.sceneInjects, other.sceneInjects) && Kotlin.equals(this.timeProvider, other.timeProvider) && Kotlin.equals(this.injector, other.injector) && Kotlin.equals(this.debug, other.debug) && Kotlin.equals(this.trace, other.trace) && Kotlin.equals(this.constructedViews, other.constructedViews) && Kotlin.equals(this.eventLoop, other.eventLoop)))));
  };
  function Korge$test$lambda$lambda(closure$done_0, closure$config_0, closure$container_0, closure$frame_0, this$Korge_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Korge$test$lambda$lambda(closure$done_0, closure$config_0, closure$container_0, closure$frame_0, this$Korge_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korge$test$lambda$lambda(closure$done_0, closure$config_0, closure$container_0, closure$frame_0, this$Korge_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$done = closure$done_0;
    this.local$closure$config = closure$config_0;
    this.local$closure$container = closure$container_0;
    this.local$closure$frame = closure$frame_0;
    this.local$this$Korge = this$Korge_0;
  }
  Coroutine$Korge$test$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$test$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$test$lambda$lambda.prototype.constructor = Coroutine$Korge$test$lambda$lambda;
  Coroutine$Korge$test$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Korge.setupCanvas_dnucxw$(this.local$closure$config.copy_avc3n6$(void 0, void 0, this.local$closure$container, this.local$closure$frame), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$done.resolve_11rb$(this.result_0), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korge$test$lambda(closure$done_0, closure$config_0, this$Korge_0) {
    return function (container_0, frame_0, continuation_0, suspended) {
      var instance = new Coroutine$Korge$test$lambda(closure$done_0, closure$config_0, this$Korge_0, container_0, frame_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korge$test$lambda(closure$done_0, closure$config_0, this$Korge_0, container_0, frame_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$done = closure$done_0;
    this.local$closure$config = closure$config_0;
    this.local$this$Korge = this$Korge_0;
    this.local$container = container_0;
    this.local$frame = frame_0;
  }
  Coroutine$Korge$test$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$test$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$test$lambda.prototype.constructor = Coroutine$Korge$test$lambda;
  Coroutine$Korge$test$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = go(Korge$test$lambda$lambda(this.local$closure$done, this.local$closure$config, this.local$container, this.local$frame, this.local$this$Korge), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var LogLevel = $module$klogger_js.com.soywiz.klogger.LogLevel;
  Korge.prototype.test_dnucxw$ = function (config_0, continuation_0, suspended) {
    var instance = new Coroutine$test_dnucxw$(this, config_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$test_dnucxw$($this, config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$done = void 0;
    this.local$config = config_0;
  }
  Coroutine$test_dnucxw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$test_dnucxw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$test_dnucxw$.prototype.constructor = Coroutine$test_dnucxw$;
  Coroutine$test_dnucxw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$done = new Promise$Deferred();
            if (this.local$config.container != null) {
              this.state_0 = 8;
              this.result_0 = this.$this.setupCanvas_dnucxw$(this.local$config, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              var module_0 = this.local$config.module;
              this.exceptionState_0 = 4;
              if (module_0.iconImage != null) {
                this.local$tmp$ = render(ensureNotNull(module_0.iconImage));
                this.state_0 = 3;
                continue;
              }
               else {
                if (module_0.icon != null) {
                  this.state_0 = 1;
                  this.result_0 = readBitmap(vfs.ResourcesVfs.get_61zpoe$(ensureNotNull(module_0.icon)), void 0, void 0, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  break;
                }
                 else {
                  this.local$tmp$ = null;
                  this.state_0 = 2;
                  continue;
                }
              }
            }

          case 1:
            this.local$tmp$ = this.result_0;
            this.state_0 = 2;
            continue;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              var $this = this.$this.logger;
              var level = LogLevel.ERROR;
              if ($this.isEnabled_ci8eq1$(level)) {
                $this.actualLog_t189ph$(level, "Couldn't get the application icon");
              }
              printStackTrace(e);
              this.local$tmp$ = null;
            }
             else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            var icon = this.local$tmp$;
            this.state_0 = 6;
            this.result_0 = CanvasApplicationEx(this.local$config.module.title, this.local$config.module.windowSize.width, this.local$config.module.windowSize.height, icon, void 0, Korge$test$lambda(this.local$done, this.local$config, this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.state_0 = 9;
            continue;
          case 7:
            throw this.exception_0;
          case 8:
            this.local$done.resolve_11rb$(this.result_0);
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = this.local$done.promise.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 10:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 7)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korge$ModuleArgs(args) {
    this.args = args;
  }
  Korge$ModuleArgs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModuleArgs',
    interfaces: []
  };
  Korge$ModuleArgs.prototype.component1 = function () {
    return this.args;
  };
  Korge$ModuleArgs.prototype.copy_kand9s$ = function (args) {
    return new Korge$ModuleArgs(args === void 0 ? this.args : args);
  };
  Korge$ModuleArgs.prototype.toString = function () {
    return 'ModuleArgs(args=' + Kotlin.toString(this.args) + ')';
  };
  Korge$ModuleArgs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    return result;
  };
  Korge$ModuleArgs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.args, other.args))));
  };
  Korge.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korge',
    interfaces: []
  };
  var Korge_instance = null;
  function Korge_getInstance() {
    if (Korge_instance === null) {
      new Korge();
    }
    return Korge_instance;
  }
  var KORGE_VERSION;
  function AnElement() {
  }
  AnElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnElement',
    interfaces: []
  };
  function createDuplicated($receiver) {
    return $receiver.symbol.create_k19av$($receiver.library);
  }
  function createDuplicatedView($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.symbol.create_k19av$($receiver.library), View) ? tmp$ : throwCCE();
  }
  function AnBaseShape(library, symbol) {
    View.call(this, library.views);
    this.library_fl1jbj$_0 = library;
    this.symbol_jmf2xa$_0 = symbol;
    this.ninePatch = null;
    this.posCuts = [new Vector2(0.0, 0.0), new Vector2(0.25, 0.25), new Vector2(0.75, 0.75), new Vector2(1.0, 1.0)];
    this.texCuts = [new Vector2(0.0, 0.0), new Vector2(0.25, 0.25), new Vector2(0.75, 0.75), new Vector2(1.0, 1.0)];
  }
  Object.defineProperty(AnBaseShape.prototype, 'library', {
    get: function () {
      return this.library_fl1jbj$_0;
    }
  });
  Object.defineProperty(AnBaseShape.prototype, 'symbol', {
    get: function () {
      return this.symbol_jmf2xa$_0;
    }
  });
  AnBaseShape.prototype.render_edjgwy$ = function (ctx, m) {
    if (!this.visible)
      return;
    if (this.ninePatch != null) {
      var np = ensureNotNull(this.ninePatch);
      var lm = ensureNotNull(this.parent).localMatrix;
      var npLeft = np.left - this.dx;
      var npTop = np.top - this.dy;
      var npRight = np.right - this.dx;
      var npBottom = np.bottom - this.dy;
      var ascaleX = lm.a;
      var ascaleY = lm.d;
      this.posCuts[1].setTo_lu1900$(npLeft / this.texWidth / ascaleX, npTop / this.texHeight / ascaleY);
      this.posCuts[2].setTo_lu1900$(1.0 - (this.texWidth - npRight) / this.texWidth / ascaleX, 1.0 - (this.texHeight - npBottom) / this.texHeight / ascaleY);
      this.texCuts[1].setTo_lu1900$(npLeft / this.texWidth, npTop / this.texHeight);
      this.texCuts[2].setTo_lu1900$(npRight / this.texWidth, npBottom / this.texWidth);
      ctx.batch.drawNinePatch_sk7p02$(this.tex, this.dx, this.dy, this.texWidth, this.texHeight, this.posCuts, this.texCuts, m, this.smoothing, this.globalColorMul, this.globalColorAdd, this.computedBlendMode.factors);
    }
     else {
      ctx.batch.drawQuad_4rxj9x$(this.tex, this.dx, this.dy, this.texWidth, this.texHeight, m, this.smoothing, this.globalColorMul, this.globalColorAdd, this.computedBlendMode.factors);
    }
  };
  AnBaseShape.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    var sLeft = this.dx;
    var sTop = this.dy;
    var sRight = sLeft + this.texWidth;
    var sBottom = sTop + this.texHeight;
    return this.checkGlobalBounds_15yvbs$(x, y, sLeft, sTop, sRight, sBottom) && ((tmp$_0 = (tmp$ = this.symbol.path) != null ? tmp$.containsPoint_lu1900$(this.globalToLocalX_lu1900$(x, y), this.globalToLocalY_lu1900$(x, y)) : null) != null ? tmp$_0 : true) ? this : null;
  };
  AnBaseShape.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var x = this.dx;
    var y = this.dy;
    var width = this.texWidth;
    var height = this.texHeight;
    out.setTo_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
  };
  AnBaseShape.prototype.updateInternal_za3lpa$ = function (dtMs) {
  };
  AnBaseShape.prototype.toString = function () {
    return View.prototype.toString.call(this) + ':symbol=' + toString(this.symbol);
  };
  AnBaseShape.prototype.createInstance = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.symbol.create_k19av$(this.library), View) ? tmp$ : throwCCE();
  };
  AnBaseShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnBaseShape',
    interfaces: [AnElement, View]
  };
  function AnShape(library, shapeSymbol) {
    AnBaseShape.call(this, library, shapeSymbol);
    this.shapeSymbol = shapeSymbol;
    this.dx_759g6x$_0 = this.shapeSymbol.bounds.x;
    this.dy_759g62$_0 = this.shapeSymbol.bounds.y;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.tex_8fiwsu$_0 = (tmp$_0 = (tmp$ = this.shapeSymbol.textureWithBitmap) != null ? tmp$.texture : null) != null ? tmp$_0 : this.views.transparentTexture;
    this.texScale_lpomjc$_0 = (tmp$_2 = (tmp$_1 = this.shapeSymbol.textureWithBitmap) != null ? tmp$_1.scale : null) != null ? tmp$_2 : 1.0;
    this.texWidth_np7yn0$_0 = this.tex.width / this.texScale;
    this.texHeight_figemj$_0 = this.tex.height / this.texScale;
    this.smoothing_spgvph$_0 = true;
  }
  Object.defineProperty(AnShape.prototype, 'dx', {
    get: function () {
      return this.dx_759g6x$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'dy', {
    get: function () {
      return this.dy_759g62$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'tex', {
    get: function () {
      return this.tex_8fiwsu$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'texScale', {
    get: function () {
      return this.texScale_lpomjc$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'texWidth', {
    get: function () {
      return this.texWidth_np7yn0$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'texHeight', {
    get: function () {
      return this.texHeight_figemj$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'smoothing', {
    get: function () {
      return this.smoothing_spgvph$_0;
    }
  });
  AnShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnShape',
    interfaces: [AnBaseShape, AnElement]
  };
  function AnMorphShape(library, morphSymbol) {
    AnBaseShape.call(this, library, morphSymbol);
    this.morphSymbol = morphSymbol;
    this.timedResult_0 = new Timed$Result();
    this.texWBS = null;
    this.dx_fp5e2l$_0 = 0.0;
    this.dy_fp5e1q$_0 = 0.0;
    this.tex_akf4ty$_0 = this.views.transparentTexture;
    this.texScale_2bj60c$_0 = 1.0;
    this.texWidth_bztwo$_0 = 0.0;
    this.texHeight_j84mk1$_0 = 0.0;
    this.smoothing_6145h3$_0 = true;
    this.ratio_3bfsoe$_0 = 0.0;
    this.updatedRatio_0();
  }
  Object.defineProperty(AnMorphShape.prototype, 'dx', {
    get: function () {
      return this.dx_fp5e2l$_0;
    },
    set: function (dx) {
      this.dx_fp5e2l$_0 = dx;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'dy', {
    get: function () {
      return this.dy_fp5e1q$_0;
    },
    set: function (dy) {
      this.dy_fp5e1q$_0 = dy;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'tex', {
    get: function () {
      return this.tex_akf4ty$_0;
    },
    set: function (tex) {
      this.tex_akf4ty$_0 = tex;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'texScale', {
    get: function () {
      return this.texScale_2bj60c$_0;
    },
    set: function (texScale) {
      this.texScale_2bj60c$_0 = texScale;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'texWidth', {
    get: function () {
      return this.texWidth_bztwo$_0;
    },
    set: function (texWidth) {
      this.texWidth_bztwo$_0 = texWidth;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'texHeight', {
    get: function () {
      return this.texHeight_j84mk1$_0;
    },
    set: function (texHeight) {
      this.texHeight_j84mk1$_0 = texHeight;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'smoothing', {
    get: function () {
      return this.smoothing_6145h3$_0;
    },
    set: function (smoothing) {
      this.smoothing_6145h3$_0 = smoothing;
    }
  });
  AnMorphShape.prototype.updatedRatio_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var result = this.morphSymbol.texturesWithBitmap.find_xgt0ho$(numberToInt(this.ratio * 1000), this.timedResult_0);
    this.texWBS = (tmp$ = result.left) != null ? tmp$ : result.right;
    this.dx = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = this.texWBS) != null ? tmp$_0.bounds : null) != null ? tmp$_1.x : null) != null ? tmp$_2 : null) != null ? tmp$_3 : 0.0;
    this.dy = (tmp$_7 = (tmp$_6 = (tmp$_5 = (tmp$_4 = this.texWBS) != null ? tmp$_4.bounds : null) != null ? tmp$_5.y : null) != null ? tmp$_6 : null) != null ? tmp$_7 : 0.0;
    this.tex = (tmp$_9 = (tmp$_8 = this.texWBS) != null ? tmp$_8.texture : null) != null ? tmp$_9 : this.views.transparentTexture;
    this.texScale = (tmp$_11 = (tmp$_10 = this.texWBS) != null ? tmp$_10.scale : null) != null ? tmp$_11 : 1.0;
    this.texWidth = this.tex.width / this.texScale;
    this.texHeight = this.tex.height / this.texScale;
    this.smoothing = true;
  };
  Object.defineProperty(AnMorphShape.prototype, 'ratio', {
    get: function () {
      return this.ratio_3bfsoe$_0;
    },
    set: function (value) {
      this.ratio_3bfsoe$_0 = value;
      this.updatedRatio_0();
    }
  });
  AnMorphShape.prototype.createInstance = function () {
    return new AnMorphShape(this.library, this.morphSymbol);
  };
  AnMorphShape.prototype.copyPropsFrom_l5rad2$ = function (source) {
    var tmp$;
    var src = Kotlin.isType(tmp$ = source, AnMorphShape) ? tmp$ : throwCCE();
    this.dx = src.dx;
    this.dy = src.dy;
    this.tex = src.tex;
    this.texScale = src.texScale;
    this.texWidth = src.texWidth;
    this.texHeight = src.texHeight;
    this.smoothing = src.smoothing;
  };
  AnMorphShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnMorphShape',
    interfaces: [AnBaseShape, AnElement]
  };
  function AnEmptyView(library, symbol) {
    if (symbol === void 0)
      symbol = AnSymbolEmpty_getInstance();
    View.call(this, library.views);
    this.library_l7aqcz$_0 = library;
    this.symbol_9cp9vw$_0 = symbol;
  }
  Object.defineProperty(AnEmptyView.prototype, 'library', {
    get: function () {
      return this.library_l7aqcz$_0;
    }
  });
  Object.defineProperty(AnEmptyView.prototype, 'symbol', {
    get: function () {
      return this.symbol_9cp9vw$_0;
    }
  });
  AnEmptyView.prototype.createInstance = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.symbol.create_k19av$(this.library), View) ? tmp$ : throwCCE();
  };
  AnEmptyView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnEmptyView',
    interfaces: [AnElement, View]
  };
  var RedirectMutableField_init = $module$korio_js.com.soywiz.korio.util.RedirectMutableField;
  function AnTextField(library, symbol) {
    Container.call(this, library.views);
    this.library_jepa2a$_0 = library;
    this.symbol_h7ho29$_0 = symbol;
    var $receiver = text(this.views, '', 16.0);
    $receiver.textBounds.copyFrom_2da8yn$(this.symbol.bounds);
    $receiver.html = this.symbol.initialHtml;
    $receiver.relayout();
    this.textField_0 = $receiver;
    this.plusAssign_l5rad2$(this.textField_0);
    this.format_f6ank$_0 = new RedirectMutableField_init(getPropertyCallableRef('format', 0, function ($receiver) {
      return $receiver.format;
    }.bind(null, this.textField_0), function ($receiver, value) {
      $receiver.format = value;
    }.bind(null, this.textField_0)));
    this.text_ry9arq$_0 = new RedirectMutableField_init(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this.textField_0), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this.textField_0)));
    this.html_s4lhfo$_0 = new RedirectMutableField_init(getPropertyCallableRef('html', 0, function ($receiver) {
      return $receiver.html;
    }.bind(null, this.textField_0), function ($receiver, value) {
      $receiver.html = value;
    }.bind(null, this.textField_0)));
  }
  Object.defineProperty(AnTextField.prototype, 'library', {
    get: function () {
      return this.library_jepa2a$_0;
    }
  });
  Object.defineProperty(AnTextField.prototype, 'symbol', {
    get: function () {
      return this.symbol_h7ho29$_0;
    }
  });
  Object.defineProperty(AnTextField.prototype, 'format', {
    get: function () {
      var $this = this.format_f6ank$_0;
      new PropertyMetadata('format');
      return $this.redirect.get();
    },
    set: function (format) {
      var $this = this.format_f6ank$_0;
      new PropertyMetadata('format');
      $this.redirect.set(format);
    }
  });
  Object.defineProperty(AnTextField.prototype, 'text', {
    get: function () {
      var $this = this.text_ry9arq$_0;
      new PropertyMetadata('text');
      return $this.redirect.get();
    },
    set: function (text) {
      var $this = this.text_ry9arq$_0;
      new PropertyMetadata('text');
      $this.redirect.set(text);
    }
  });
  Object.defineProperty(AnTextField.prototype, 'html', {
    get: function () {
      var $this = this.html_s4lhfo$_0;
      new PropertyMetadata('html');
      return $this.redirect.get();
    },
    set: function (html) {
      var $this = this.html_s4lhfo$_0;
      new PropertyMetadata('html');
      $this.redirect.set(html);
    }
  });
  AnTextField.prototype.createInstance = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.symbol.create_k19av$(this.library), View) ? tmp$ : throwCCE();
  };
  AnTextField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnTextField',
    interfaces: [IHtml, IText, AnElement, Container]
  };
  function stencilIndex$lambda() {
    return 0;
  }
  var stencilIndex;
  var lmapOf = $module$kds_js.com.soywiz.kds.lmapOf_qfcya0$;
  function get_stencilIndex($receiver) {
    var property = new PropertyMetadata('stencilIndex');
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = stencilIndex.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = stencilIndex.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = stencilIndex.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_stencilIndex($receiver, stencilIndex_0) {
    var property = new PropertyMetadata('stencilIndex');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = stencilIndex.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = stencilIndex_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function TimelineRunner(view, symbol) {
    this.view = view;
    this.symbol = symbol;
    this.library = this.view.library;
    this.views = this.library.views;
    this.currentTime = 0;
    this.currentStateName = null;
    this.currentSubtimeline = null;
    this.onStop = new Signal();
    this.onChangeState = new Signal();
    this.onEvent = new Signal();
    this.running_c9mhrn$_0 = true;
    this.gotoAndPlay_bm4lxs$('default');
    this.tempRangeResult_0 = new Timed$RangeResult();
  }
  Object.defineProperty(TimelineRunner.prototype, 'currentStateTotalTime', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.currentSubtimeline) != null ? tmp$.totalTime : null) != null ? tmp$_0 : 0;
    }
  });
  Object.defineProperty(TimelineRunner.prototype, 'running', {
    get: function () {
      return this.running_c9mhrn$_0;
    },
    set: function (value) {
      this.running_c9mhrn$_0 = value;
      if (!value) {
        this.onStop.invoke_11rb$(Unit);
      }
    }
  });
  TimelineRunner.prototype.getStateTime_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = this.symbol.states.get_11rb$(name);
    if (tmp$ == null) {
      return 0;
    }
    var substate = tmp$;
    return substate.subTimeline.totalTime - substate.startTime | 0;
  };
  TimelineRunner.prototype.gotoAndRunning_xvbo1r$ = function (running, name, time) {
    if (time === void 0)
      time = 0;
    var substate = this.symbol.states.get_11rb$(name);
    if (substate != null) {
      this.currentStateName = substate.name;
      this.currentSubtimeline = substate.subTimeline;
      this.currentTime = substate.startTime + time | 0;
      this.running = running;
      this.update_za3lpa$(0);
      this.onChangeState.invoke_11rb$(name);
    }
  };
  TimelineRunner.prototype.gotoAndPlay_bm4lxs$ = function (name, time) {
    if (time === void 0)
      time = 0;
    this.gotoAndRunning_xvbo1r$(true, name, time);
  };
  TimelineRunner.prototype.gotoAndStop_bm4lxs$ = function (name, time) {
    if (time === void 0)
      time = 0;
    this.gotoAndRunning_xvbo1r$(false, name, time);
  };
  TimelineRunner.prototype.update_za3lpa$ = function (time) {
    if (!this.running)
      return;
    if (this.currentSubtimeline == null)
      return;
    var cs = ensureNotNull(this.currentSubtimeline);
    var tmp$ = this.eval_0;
    var tmp$_0 = this.currentTime;
    var a = this.currentStateTotalTime;
    var b = this.currentTime + time | 0;
    tmp$.call(this, tmp$_0, Math_0.min(a, b));
    this.currentTime = this.currentTime + time | 0;
    if (this.currentTime >= this.currentStateTotalTime) {
      var accumulatedTime = this.currentTime - this.currentStateTotalTime | 0;
      var nextState = cs.nextState;
      if (nextState == null) {
        this.running = false;
      }
       else {
        this.gotoAndRunning_xvbo1r$(cs.nextStatePlay, nextState, 0);
        this.currentTime = this.currentTime + accumulatedTime | 0;
        this.eval_0(this.currentTime - accumulatedTime | 0, this.currentTime);
      }
    }
  };
  function TimelineRunner$eval$lambda(this$TimelineRunner_0, closure$action_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$TimelineRunner$eval$lambda(this$TimelineRunner_0, closure$action_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TimelineRunner$eval$lambda(this$TimelineRunner_0, closure$action_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$TimelineRunner = this$TimelineRunner_0;
    this.local$closure$action = closure$action_0;
  }
  Coroutine$TimelineRunner$eval$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TimelineRunner$eval$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TimelineRunner$eval$lambda.prototype.constructor = Coroutine$TimelineRunner$eval$lambda;
  Coroutine$TimelineRunner$eval$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = (tmp$_0 = (tmp$ = this.local$this$TimelineRunner.library.symbolsById.get_za3lpa$(this.local$closure$action.soundId)) == null || Kotlin.isType(tmp$, AnSymbolSound) ? tmp$ : throwCCE()) != null ? tmp$_0.getNativeSound(this) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var data = this.result_0;
            if (data != null) {
              return get_soundSystem(this.local$this$TimelineRunner.views).play_eej0pj$(data), Unit;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  TimelineRunner.prototype.eval_0 = function (prev, current) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (prev >= current)
      return;
    tmp$_0 = (tmp$ = this.currentSubtimeline) != null ? tmp$.actions : null;
    if (tmp$_0 == null) {
      return;
    }
    var actionsTimeline = tmp$_0;
    var result = actionsTimeline.getRangeIndices_b4nn5q$(prev, current - 1 | 0, this.tempRangeResult_0);
    tmp$_1 = result.startIndex;
    tmp$_2 = result.endIndex;
    execution: for (var n = tmp$_1; n <= tmp$_2; n++) {
      var action = actionsTimeline.objects.get_za3lpa$(n);
      if (Kotlin.isType(action, AnPlaySoundAction))
        go_0(this.library.views.coroutineContext, TimelineRunner$eval$lambda(this, action));
      else if (Kotlin.isType(action, AnEventAction))
        this.onEvent.invoke_11rb$(action.event);
    }
  };
  TimelineRunner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimelineRunner',
    interfaces: []
  };
  function AnPlayable() {
  }
  AnPlayable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnPlayable',
    interfaces: []
  };
  function AnSimpleAnimation(views, frameTime, animations, anchor) {
    if (anchor === void 0)
      anchor = Anchor.Companion.TOP_LEFT;
    Container.call(this, views);
    this.frameTime = frameTime;
    this.animations = animations;
    this.anchor = anchor;
    this.image = image(views, views.transparentTexture);
    var tmp$;
    this.defaultAnimation = (tmp$ = firstOrNull(this.animations.values)) != null ? tmp$ : emptyList();
    this.animation = this.defaultAnimation;
    this.elapsedTime_0 = 0;
    this.image.anchorX = this.anchor.sx;
    this.image.anchorY = this.anchor.sy;
    this.myupdate_0();
    this.plusAssign_l5rad2$(this.image);
  }
  AnSimpleAnimation.prototype.createInstance = function () {
    return new AnSimpleAnimation(this.views, this.frameTime, this.animations, this.anchor);
  };
  Object.defineProperty(AnSimpleAnimation.prototype, 'numberOfFrames', {
    get: function () {
      return this.animation.size;
    }
  });
  AnSimpleAnimation.prototype.play_61zpoe$ = function (name) {
    var tmp$;
    this.animation = (tmp$ = this.animations.get_11rb$(name)) != null ? tmp$ : this.defaultAnimation;
  };
  AnSimpleAnimation.prototype.updateInternal_za3lpa$ = function (dtMs) {
    Container.prototype.updateInternal_za3lpa$.call(this, dtMs);
    this.elapsedTime_0 = (this.elapsedTime_0 + dtMs | 0) % Kotlin.imul(this.numberOfFrames, this.frameTime);
    this.myupdate_0();
  };
  AnSimpleAnimation.prototype.myupdate_0 = function () {
    var tmp$;
    var frameNum = this.elapsedTime_0 / this.frameTime | 0;
    var texture = (tmp$ = getOrNull(this.animation, frameNum % this.numberOfFrames)) != null ? tmp$ : this.views.transparentTexture;
    this.image.tex = texture;
  };
  AnSimpleAnimation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSimpleAnimation',
    interfaces: [AnPlayable, Container]
  };
  var Array_0 = Array;
  var booleanArray = Kotlin.booleanArray;
  function AnMovieClip(library, symbol) {
    AnMovieClip$Companion_getInstance();
    Container.call(this, library.views);
    this.library_kjq3lr$_0 = library;
    this.symbol_aapdmm$_0 = symbol;
    this.tempTimedResult_0 = new Timed$Result();
    this.totalDepths = this.symbol.limits.totalDepths;
    this.totalUids = this.symbol.limits.totalUids;
    var array = Array_0(this.totalDepths);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new DummyView(this.views);
    }
    this.dummyDepths = array;
    var array_0 = new Int32Array(this.totalDepths + 10 | 0);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = -1;
    }
    this.maskPushDepths = array_0;
    var array_1 = booleanArray(this.totalDepths + 10 | 0, false);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = false;
    }
    this.maskPopDepths = array_1;
    var array_2 = Array_0(this.totalUids);
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      var tmp$_3;
      var info = this.symbol.uidInfo[i_2];
      var view = Kotlin.isType(tmp$_3 = this.library.create_za3lpa$(info.characterId), View) ? tmp$_3 : throwCCE();
      view.addProps_y0zsll$(info.extraProps);
      array_2[i_2] = view;
    }
    this.viewUids = array_2;
    this.firstUpdate = true;
    this.smoothing = this.library.defaultSmoothing;
    this.singleFrame = this.symbol.limits.totalFrames <= 1;
    this.unsortedChildren = ArrayList_init(toList(this.dummyDepths));
    this.timelineRunner = new TimelineRunner(this, this.symbol);
    var tmp$_4, tmp$_5;
    tmp$_4 = this.dummyDepths;
    for (tmp$_5 = 0; tmp$_5 !== tmp$_4.length; ++tmp$_5) {
      var d = tmp$_4[tmp$_5];
      this.plusAssign_l5rad2$(d);
    }
    this.updateInternal_za3lpa$(0);
    this.tempMatrix_0 = new Matrix2d();
  }
  Object.defineProperty(AnMovieClip.prototype, 'library', {
    get: function () {
      return this.library_kjq3lr$_0;
    }
  });
  Object.defineProperty(AnMovieClip.prototype, 'symbol', {
    get: function () {
      return this.symbol_aapdmm$_0;
    }
  });
  AnMovieClip.prototype.clone = function () {
    var $receiver = this.createInstance();
    $receiver.copyPropsFrom_l5rad2$($receiver);
    return $receiver;
  };
  AnMovieClip.prototype.createInstance = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.symbol.create_k19av$(this.library), View) ? tmp$ : throwCCE();
  };
  Object.defineProperty(AnMovieClip.prototype, 'onStop', {
    get: function () {
      return this.timelineRunner.onStop;
    }
  });
  Object.defineProperty(AnMovieClip.prototype, 'onEvent', {
    get: function () {
      return this.timelineRunner.onEvent;
    }
  });
  Object.defineProperty(AnMovieClip.prototype, 'onChangeState', {
    get: function () {
      return this.timelineRunner.onChangeState;
    }
  });
  Object.defineProperty(AnMovieClip.prototype, 'currentState', {
    get: function () {
      return this.timelineRunner.currentStateName;
    }
  });
  AnMovieClip.prototype.replaceDepth_0 = function (depth, view) {
    var result = replaceWith(this.unsortedChildren.get_za3lpa$(depth), view);
    this.unsortedChildren.set_wxm5ur$(depth, view);
    return result;
  };
  AnMovieClip.prototype.reset = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    Container.prototype.reset.call(this);
    tmp$ = this.viewUids;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var view = tmp$[tmp$_0];
      view.reset();
    }
    tmp$_1 = get_indices(this.unsortedChildren);
    tmp$_2 = tmp$_1.first;
    tmp$_3 = tmp$_1.last;
    tmp$_4 = tmp$_1.step;
    for (var n = tmp$_2; n <= tmp$_3; n += tmp$_4) {
      this.replaceDepth_0(n, this.dummyDepths[n]);
    }
  };
  function AnMovieClip$Companion() {
    AnMovieClip$Companion_instance = this;
    this.STATE_NONE = new AnMovieClip$Companion$RenderState(new AG$StencilState(false), new AG$ColorMaskState(true, true, true, true));
    this.STATE_SHAPE = new AnMovieClip$Companion$RenderState(new AG$StencilState(true, void 0, AG$CompareMode.ALWAYS, AG$StencilOp.SET, AG$StencilOp.SET, AG$StencilOp.SET, 0, 0, 255), new AG$ColorMaskState(false, false, false, false));
    this.STATE_CONTENT = new AnMovieClip$Companion$RenderState(new AG$StencilState(true, void 0, AG$CompareMode.EQUAL, AG$StencilOp.KEEP, AG$StencilOp.KEEP, AG$StencilOp.KEEP, 0, 255, 0), new AG$ColorMaskState(true, true, true, true));
  }
  function AnMovieClip$Companion$RenderState(stencil, colorMask) {
    this.stencil = stencil;
    this.colorMask = colorMask;
  }
  AnMovieClip$Companion$RenderState.prototype.set_b4eeiz$ = function (ctx, referenceValue) {
    ctx.flush();
    if (ctx.masksEnabled) {
      this.stencil.referenceValue = referenceValue;
      ctx.batch.stencil = this.stencil;
      ctx.batch.colorMask = this.colorMask;
    }
     else {
      this.stencil.referenceValue = 0;
      ctx.batch.stencil = AnMovieClip$Companion_getInstance().STATE_NONE.stencil;
      ctx.batch.colorMask = AnMovieClip$Companion_getInstance().STATE_NONE.colorMask;
    }
  };
  AnMovieClip$Companion$RenderState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderState',
    interfaces: []
  };
  AnMovieClip$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AnMovieClip$Companion_instance = null;
  function AnMovieClip$Companion_getInstance() {
    if (AnMovieClip$Companion_instance === null) {
      new AnMovieClip$Companion();
    }
    return AnMovieClip$Companion_instance;
  }
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_tmsbgo$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_l1lu5t$;
  AnMovieClip.prototype.render_edjgwy$ = function (ctx, m) {
    var tmp$, tmp$_0;
    if (!this.visible)
      return;
    fill(this.maskPopDepths, false);
    var isGlobal = m === this.globalMatrix;
    var usedStencil = false;
    var state = 0;
    tmp$ = withIndex(toList_0(this.children)).iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var depth = tmp$_1.component1()
      , child = tmp$_1.component2();
      var $receiver = this.maskPushDepths;
      var maskDepth = depth >= 0 && depth <= get_lastIndex($receiver) ? $receiver[depth] : -1;
      if (maskDepth >= 0) {
        if (get_indices_0(this.maskPopDepths).contains_mef7kx$(maskDepth)) {
          this.maskPopDepths[maskDepth] = true;
          set_stencilIndex(ctx, get_stencilIndex(ctx) + 1 | 0);
          usedStencil = true;
          AnMovieClip$Companion_getInstance().STATE_SHAPE.set_b4eeiz$(ctx, get_stencilIndex(ctx));
          state = 1;
        }
      }
      if (ctx.masksEnabled)
        tmp$_0 = true;
      else {
        tmp$_0 = true;
      }
      var showChild = tmp$_0;
      if (showChild) {
        if (isGlobal) {
          child.render_edjgwy$(ctx, child.globalMatrix);
        }
         else {
          this.tempMatrix_0.multiply_mgxgbw$(child.localMatrix, m);
          child.render_edjgwy$(ctx, this.tempMatrix_0);
        }
      }
      if (maskDepth >= 0) {
        AnMovieClip$Companion_getInstance().STATE_CONTENT.set_b4eeiz$(ctx, get_stencilIndex(ctx));
        state = 2;
      }
      var $receiver_0 = this.maskPopDepths;
      if (depth >= 0 && depth <= get_lastIndex_0($receiver_0) ? $receiver_0[depth] : false) {
        AnMovieClip$Companion_getInstance().STATE_NONE.set_b4eeiz$(ctx, 0);
        set_stencilIndex(ctx, get_stencilIndex(ctx) - 1 | 0);
        state = 0;
      }
    }
    if (usedStencil && get_stencilIndex(ctx) <= 0) {
      set_stencilIndex(ctx, 0);
      ctx.ag.clear_2lepo2$(void 0, void 0, get_stencilIndex(ctx), false, false, true);
    }
  };
  AnMovieClip.prototype.update_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.totalDepths;
    for (var depth = 0; depth < tmp$; depth++) {
      tmp$_1 = (tmp$_0 = this.timelineRunner.currentSubtimeline) != null ? tmp$_0.timelines : null;
      if (tmp$_1 == null) {
        continue;
      }
      var timelines = tmp$_1;
      var timeline = timelines[depth];
      if (timeline.size <= 0)
        continue;
      var hasMultipleFrames = timeline.size > 1;
      if (this.smoothing) {
        var tmp$_2 = timeline.find_xgt0ho$(this.timelineRunner.currentTime, this.tempTimedResult_0);
        var index = tmp$_2.component1()
        , left = tmp$_2.component2()
        , right = tmp$_2.component3()
        , ratio = tmp$_2.component4();
        if (left != null)
          this.maskPushDepths[left.depth] = left.clipDepth;
        var view = left != null && left.uid >= 0 ? this.viewUids[left.uid] : this.dummyDepths[depth];
        var placed = this.replaceDepth_0(depth, view);
        if (placed || hasMultipleFrames) {
          if (left != null && right != null && left.uid === right.uid) {
            AnSymbolTimelineFrame$Companion_getInstance().setToViewInterpolated_odkdvs$(view, left, right, ratio);
          }
           else {
            left != null ? (left.setToView_l5rad2$(view), Unit) : null;
          }
          if (this.symbol.ninePatch != null && Kotlin.isType(view, AnBaseShape))
            view.ninePatch = this.symbol.ninePatch;
        }
      }
       else {
        var tmp$_3 = timeline.findWithoutInterpolation_xgt0ho$(this.timelineRunner.currentTime, this.tempTimedResult_0);
        var index_0 = tmp$_3.component1()
        , left_0 = tmp$_3.component2();
        if (left_0 != null)
          this.maskPushDepths[left_0.depth] = left_0.clipDepth;
        var view_0 = left_0 != null && left_0.uid >= 0 ? this.viewUids[left_0.uid] : this.dummyDepths[depth];
        var placed_0 = this.replaceDepth_0(depth, view_0);
        if (placed_0 || hasMultipleFrames) {
          left_0 != null ? (left_0.setToView_l5rad2$(view_0), Unit) : null;
          if (this.symbol.ninePatch != null && Kotlin.isType(view_0, AnBaseShape))
            view_0.ninePatch = this.symbol.ninePatch;
        }
      }
    }
  };
  Object.defineProperty(AnMovieClip.prototype, 'stateNames', {
    get: function () {
      var $receiver = this.symbol.states;
      var destination = ArrayList_init_0($receiver.size);
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.value.name);
      }
      return destination;
    }
  });
  AnMovieClip.prototype.play_61zpoe$ = function (name) {
    this.timelineRunner.gotoAndPlay_bm4lxs$(name);
    this.update_0();
  };
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  AnMovieClip.prototype.playAndWaitStop_61zpoe$ = function (name_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWaitStop_61zpoe$(this, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$playAndWaitStop_61zpoe$($this, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
  }
  Coroutine$playAndWaitStop_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWaitStop_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWaitStop_61zpoe$.prototype.constructor = Coroutine$playAndWaitStop_61zpoe$;
  Coroutine$playAndWaitStop_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.playAndWaitEvent_qwyf15$(this.local$name, emptySet(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnMovieClip.prototype.playAndWaitEvent_60y5e1$ = function (name, events, continuation) {
    return this.playAndWaitEvent_qwyf15$(name, toSet(events), continuation);
  };
  function AnMovieClip$playAndWaitEvent$lambda(closure$name, this$AnMovieClip) {
    return function () {
      this$AnMovieClip.play_61zpoe$(closure$name);
      return Unit;
    };
  }
  AnMovieClip.prototype.playAndWaitEvent_qwyf15$ = function (name, eventsSet, continuation) {
    return this._waitEvent_0(eventsSet, AnMovieClip$playAndWaitEvent$lambda(name, this), continuation);
  };
  AnMovieClip.prototype.waitStop = function (continuation) {
    return this._waitEvent_0.call(this, emptySet(), void 0, continuation);
  };
  AnMovieClip.prototype.waitEvent_vqirvp$ = function (events, continuation) {
    return this._waitEvent_0(toSet(events), void 0, continuation);
  };
  AnMovieClip.prototype.waitEvent_ywdfdh$ = function (eventsSet, continuation) {
    return this._waitEvent_0(eventsSet, void 0, continuation);
  };
  function AnMovieClip$_waitEvent$lambda() {
    return Unit;
  }
  function AnMovieClip$_waitEvent$lambda_0(closure$once, closure$deferred) {
    return function (it) {
      var $this = closure$once;
      if (!$this.completed) {
        $this.completed = true;
        closure$deferred.resolve_11rb$(null);
      }
      return Unit;
    };
  }
  function AnMovieClip$_waitEvent$lambda_1(closure$eventsSet, closure$once, closure$deferred) {
    return function (it) {
      if (closure$eventsSet.contains_11rb$(it)) {
        var $this = closure$once;
        if (!$this.completed) {
          $this.completed = true;
          closure$deferred.resolve_11rb$(it);
        }
      }
      return Unit;
    };
  }
  function AnMovieClip$_waitEvent$lambda_2(closure$eventsSet, closure$once, closure$deferred) {
    return function (it) {
      if (closure$eventsSet.contains_11rb$(it)) {
        var $this = closure$once;
        if (!$this.completed) {
          $this.completed = true;
          closure$deferred.resolve_11rb$(it);
        }
      }
      return Unit;
    };
  }
  AnMovieClip.prototype._waitEvent_0 = function (eventsSet_0, afterSignals_0, continuation_0, suspended) {
    var instance = new Coroutine$_waitEvent_0(this, eventsSet_0, afterSignals_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$_waitEvent_0($this, eventsSet_0, afterSignals_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$closeables = void 0;
    this.local$eventsSet = eventsSet_0;
    this.local$afterSignals = afterSignals_0;
  }
  Coroutine$_waitEvent_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_waitEvent_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_waitEvent_0.prototype.constructor = Coroutine$_waitEvent_0;
  Coroutine$_waitEvent_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$afterSignals === void 0)
              this.local$afterSignals = AnMovieClip$_waitEvent$lambda;
            var tmp$;
            var once = new Once();
            var deferred = new Promise$Deferred();
            this.local$closeables = ArrayList_init_0();
            var element = this.$this.onStop.invoke_qlkmfe$(AnMovieClip$_waitEvent$lambda_0(once, deferred));
            this.local$closeables.add_11rb$(element);
            if (!this.local$eventsSet.isEmpty()) {
              var element_0 = this.$this.onChangeState.invoke_qlkmfe$(AnMovieClip$_waitEvent$lambda_1(this.local$eventsSet, once, deferred));
              this.local$closeables.add_11rb$(element_0);
              var element_1 = this.$this.onEvent.invoke_qlkmfe$(AnMovieClip$_waitEvent$lambda_2(this.local$eventsSet, once, deferred));
              this.local$closeables.add_11rb$(element_1);
            }

            this.exceptionState_0 = 4;
            this.local$afterSignals();
            this.state_0 = 1;
            this.result_0 = deferred.promise.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            tmp$ = this.local$closeables.iterator();
            while (tmp$.hasNext()) {
              var c = tmp$.next();
              c.close();
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 6)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnMovieClip.prototype.seekStill_io5o9c$ = function (name, ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var totalTime = this.timelineRunner.getStateTime_61zpoe$(name);
    this.timelineRunner.gotoAndStop_bm4lxs$(name, numberToInt(totalTime * ratio));
    this.update_0();
  };
  AnMovieClip.prototype.updateInternal_za3lpa$ = function (dtMs) {
    if (this.timelineRunner.running && (this.firstUpdate || !this.singleFrame)) {
      this.firstUpdate = false;
      this.timelineRunner.update_za3lpa$(dtMs * 1000 | 0);
      this.update_0();
    }
    Container.prototype.updateInternal_za3lpa$.call(this, dtMs);
  };
  AnMovieClip.prototype.toString = function () {
    return Container.prototype.toString.call(this) + ':symbol=' + toString(this.symbol);
  };
  AnMovieClip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnMovieClip',
    interfaces: [AnPlayable, AnElement, Container]
  };
  function play($receiver, name) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver) == null || Kotlin.isType(tmp$, AnPlayable) ? tmp$ : null) != null ? (tmp$_0.play_61zpoe$(name), Unit) : null;
  }
  function playAndWaitStop($receiver_0, name_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWaitStop($receiver_0, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$playAndWaitStop($receiver_0, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$continuation = void 0;
    this.local$$receiver = $receiver_0;
    this.local$name = name_0;
  }
  Coroutine$playAndWaitStop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWaitStop.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWaitStop.prototype.constructor = Coroutine$playAndWaitStop;
  Coroutine$playAndWaitStop.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$continuation = this;
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = (tmp$_0 = (tmp$ = this.local$$receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null ? (tmp$_0.playAndWaitStop_61zpoe$(this.local$name, this.local$closure$continuation), Unit) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$continuation.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function playAndWaitEvent($receiver_0, name_0, events_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWaitEvent($receiver_0, name_0, events_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$playAndWaitEvent($receiver_0, name_0, events_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$continuation = void 0;
    this.local$$receiver = $receiver_0;
    this.local$name = name_0;
    this.local$events = events_0;
  }
  Coroutine$playAndWaitEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWaitEvent.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWaitEvent.prototype.constructor = Coroutine$playAndWaitEvent;
  Coroutine$playAndWaitEvent.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$continuation = this;
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = (tmp$_0 = (tmp$ = this.local$$receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null ? tmp$_0.playAndWaitEvent_60y5e1$(this.local$name, this.local$events.slice(), this.local$closure$continuation) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$continuation.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function waitStop($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$waitStop($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$waitStop($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$continuation = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$waitStop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitStop.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitStop.prototype.constructor = Coroutine$waitStop;
  Coroutine$waitStop.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$continuation = this;
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = (tmp$_0 = (tmp$ = this.local$$receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null ? tmp$_0.waitStop(this.local$closure$continuation) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$continuation.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function waitEvent($receiver_0, events_0, continuation_0, suspended) {
    var instance = new Coroutine$waitEvent($receiver_0, events_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$waitEvent($receiver_0, events_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$continuation = void 0;
    this.local$$receiver = $receiver_0;
    this.local$events = events_0;
  }
  Coroutine$waitEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitEvent.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitEvent.prototype.constructor = Coroutine$waitEvent;
  Coroutine$waitEvent.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$continuation = this;
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = (tmp$_0 = (tmp$ = this.local$$receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null ? tmp$_0.waitEvent_vqirvp$(this.local$events.slice(), this.local$closure$continuation) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$continuation.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function get_playingName($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = $receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null ? tmp$_0.timelineRunner : null) != null ? tmp$_1.currentStateName : null;
  }
  function seekStill($receiver, name, ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null ? (tmp$_0.seekStill_io5o9c$(name, ratio), Unit) : null;
  }
  function AnSymbol(id, name) {
    if (id === void 0)
      id = -1;
    if (name === void 0)
      name = null;
    this.id = id;
    this.name = name;
    this.$delegate_lvjwfe$_0 = new Extra$Mixin();
  }
  AnSymbol.prototype.create_k19av$ = function (library) {
    return new AnEmptyView(library);
  };
  AnSymbol.prototype.toString = function () {
    return 'Symbol(id=' + this.id + ', name=' + toString(this.name) + ')';
  };
  Object.defineProperty(AnSymbol.prototype, 'extra', {
    get: function () {
      return this.$delegate_lvjwfe$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_lvjwfe$_0.extra = tmp$;
    }
  });
  AnSymbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbol',
    interfaces: [Extra]
  };
  function AnSymbolEmpty() {
    AnSymbolEmpty_instance = this;
    AnSymbol.call(this, -1, '');
  }
  AnSymbolEmpty.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AnSymbolEmpty',
    interfaces: [AnSymbol]
  };
  var AnSymbolEmpty_instance = null;
  function AnSymbolEmpty_getInstance() {
    if (AnSymbolEmpty_instance === null) {
      new AnSymbolEmpty();
    }
    return AnSymbolEmpty_instance;
  }
  function AnSymbolSound(id, name, inputSound, dataBytes) {
    AnSymbol.call(this, id, name);
    this.inputSound_0 = inputSound;
    this.dataBytes = dataBytes;
    this.nativeSoundCache_0 = new AsyncCacheItem();
  }
  function AnSymbolSound$getNativeSound$lambda(this$AnSymbolSound_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$AnSymbolSound$getNativeSound$lambda(this$AnSymbolSound_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$AnSymbolSound$getNativeSound$lambda(this$AnSymbolSound_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$this$AnSymbolSound = this$AnSymbolSound_0;
  }
  Coroutine$AnSymbolSound$getNativeSound$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AnSymbolSound$getNativeSound$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AnSymbolSound$getNativeSound$lambda.prototype.constructor = Coroutine$AnSymbolSound$getNativeSound$lambda;
  Coroutine$AnSymbolSound$getNativeSound$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            if (this.local$this$AnSymbolSound.inputSound_0 == null) {
              this.exceptionState_0 = 2;
              this.state_0 = 1;
              this.result_0 = sound.nativeSoundProvider.createSound_fqrh44$((tmp$ = this.local$this$AnSymbolSound.dataBytes) != null ? tmp$ : new Int8Array([]), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 1:
            tmp$_0 = this.result_0;
            this.local$this$AnSymbolSound.inputSound_0 = tmp$_0;
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 2:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              this.state_0 = 3;
              this.result_0 = sound.nativeSoundProvider.createSound_35xt9g$(new AudioData(44100, 2, new Int16Array([])), void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              throw e;
            }

          case 3:
            tmp$_1 = this.result_0;
            this.local$this$AnSymbolSound.inputSound_0 = tmp$_1;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            return ensureNotNull(this.local$this$AnSymbolSound.inputSound_0);
          case 7:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 7)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnSymbolSound.prototype.getNativeSound = function (continuation_0, suspended) {
    var instance = new Coroutine$getNativeSound(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getNativeSound($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$getNativeSound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getNativeSound.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getNativeSound.prototype.constructor = Coroutine$getNativeSound;
  Coroutine$getNativeSound.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.nativeSoundCache_0.invoke_cbny1b$(AnSymbolSound$getNativeSound$lambda(this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnSymbolSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolSound',
    interfaces: [AnSymbol]
  };
  function AnTextFieldSymbol(id, name, initialHtml, bounds) {
    AnSymbol.call(this, id, name);
    this.initialHtml = initialHtml;
    this.bounds = bounds;
  }
  AnTextFieldSymbol.prototype.create_k19av$ = function (library) {
    return new AnTextField(library, this);
  };
  AnTextFieldSymbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnTextFieldSymbol',
    interfaces: [AnSymbol]
  };
  function AnSymbolBaseShape(id, name, bounds, path) {
    if (path === void 0)
      path = null;
    AnSymbol.call(this, id, name);
    this.bounds = bounds;
    this.path = path;
  }
  AnSymbolBaseShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolBaseShape',
    interfaces: [AnSymbol]
  };
  function AnSymbolShape(id, name, bounds, textureWithBitmap, path) {
    if (path === void 0)
      path = null;
    AnSymbolBaseShape.call(this, id, name, bounds, path);
    this.textureWithBitmap = textureWithBitmap;
  }
  AnSymbolShape.prototype.create_k19av$ = function (library) {
    return new AnShape(library, this);
  };
  AnSymbolShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolShape',
    interfaces: [AnSymbolBaseShape]
  };
  function AnSymbolMorphShape(id, name, bounds, texturesWithBitmap, path) {
    if (texturesWithBitmap === void 0)
      texturesWithBitmap = new Timed();
    if (path === void 0)
      path = null;
    AnSymbolBaseShape.call(this, id, name, bounds, path);
    this.texturesWithBitmap = texturesWithBitmap;
  }
  AnSymbolMorphShape.prototype.create_k19av$ = function (library) {
    return new AnMorphShape(library, this);
  };
  AnSymbolMorphShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolMorphShape',
    interfaces: [AnSymbolBaseShape]
  };
  function AnSymbolBitmap(id, name, bmp) {
    AnSymbol.call(this, id, name);
    this.bmp = bmp;
  }
  AnSymbolBitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolBitmap',
    interfaces: [AnSymbol]
  };
  function AnConstantPool(stringPool) {
    this.stringPool = stringPool;
  }
  AnConstantPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnConstantPool',
    interfaces: []
  };
  function AnSymbolTimelineFrame(depth, uid, clipDepth, ratio, transform, name, colorTransform, blendMode) {
    AnSymbolTimelineFrame$Companion_getInstance();
    if (depth === void 0)
      depth = -1;
    if (uid === void 0)
      uid = -1;
    if (clipDepth === void 0)
      clipDepth = -1;
    if (ratio === void 0)
      ratio = 0.0;
    if (transform === void 0)
      transform = new Matrix2d();
    if (name === void 0)
      name = null;
    if (colorTransform === void 0)
      colorTransform = new ColorTransform();
    if (blendMode === void 0)
      blendMode = BlendMode$INHERIT_getInstance();
    this.depth = depth;
    this.uid = uid;
    this.clipDepth = clipDepth;
    this.ratio = ratio;
    this.transform = transform;
    this.name = name;
    this.colorTransform = colorTransform;
    this.blendMode = blendMode;
  }
  AnSymbolTimelineFrame.prototype.setToInterpolated_5zcn26$ = function (l, r, ratio) {
    this.transform.setToInterpolated_ehu1mq$(ratio, l.transform, r.transform);
    this.colorTransform.setToInterpolated_v05y7o$(l.colorTransform, r.colorTransform, ratio);
    this.ratio = interpolate(l.ratio, r.ratio, ratio);
    this.name = l.name;
    this.blendMode = l.blendMode;
  };
  function AnSymbolTimelineFrame$Companion() {
    AnSymbolTimelineFrame$Companion_instance = this;
  }
  AnSymbolTimelineFrame$Companion.prototype.setToViewInterpolated_odkdvs$ = function (view, l, r, ratio) {
    view.setMatrixInterpolated_whgrqo$(ratio, l.transform, r.transform);
    view.colorTransform = view.colorTransform.setToInterpolated_v05y7o$(l.colorTransform, r.colorTransform, ratio);
    view.ratio = interpolate(l.ratio, r.ratio, ratio);
    view.name = l.name;
    view.blendMode = l.blendMode;
  };
  AnSymbolTimelineFrame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AnSymbolTimelineFrame$Companion_instance = null;
  function AnSymbolTimelineFrame$Companion_getInstance() {
    if (AnSymbolTimelineFrame$Companion_instance === null) {
      new AnSymbolTimelineFrame$Companion();
    }
    return AnSymbolTimelineFrame$Companion_instance;
  }
  AnSymbolTimelineFrame.prototype.setToView_l5rad2$ = function (view) {
    view.ratio = this.ratio;
    view.setMatrix_yx07kl$(this.transform);
    view.name = this.name;
    view.colorTransform = this.colorTransform;
    view.blendMode = this.blendMode;
  };
  AnSymbolTimelineFrame.prototype.copyFrom_68sf8e$ = function (other) {
    this.depth = other.depth;
    this.uid = other.uid;
    this.clipDepth = other.clipDepth;
    this.ratio = other.ratio;
    this.transform.copyFrom_7f5bc6$(other.transform);
    this.name = other.name;
    this.colorTransform.copyFrom_54kf7e$(other.colorTransform);
    this.blendMode = other.blendMode;
  };
  AnSymbolTimelineFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolTimelineFrame',
    interfaces: []
  };
  AnSymbolTimelineFrame.prototype.component1 = function () {
    return this.depth;
  };
  AnSymbolTimelineFrame.prototype.component2 = function () {
    return this.uid;
  };
  AnSymbolTimelineFrame.prototype.component3 = function () {
    return this.clipDepth;
  };
  AnSymbolTimelineFrame.prototype.component4 = function () {
    return this.ratio;
  };
  AnSymbolTimelineFrame.prototype.component5 = function () {
    return this.transform;
  };
  AnSymbolTimelineFrame.prototype.component6 = function () {
    return this.name;
  };
  AnSymbolTimelineFrame.prototype.component7 = function () {
    return this.colorTransform;
  };
  AnSymbolTimelineFrame.prototype.component8 = function () {
    return this.blendMode;
  };
  AnSymbolTimelineFrame.prototype.copy_5eqbr5$ = function (depth, uid, clipDepth, ratio, transform, name, colorTransform, blendMode) {
    return new AnSymbolTimelineFrame(depth === void 0 ? this.depth : depth, uid === void 0 ? this.uid : uid, clipDepth === void 0 ? this.clipDepth : clipDepth, ratio === void 0 ? this.ratio : ratio, transform === void 0 ? this.transform : transform, name === void 0 ? this.name : name, colorTransform === void 0 ? this.colorTransform : colorTransform, blendMode === void 0 ? this.blendMode : blendMode);
  };
  AnSymbolTimelineFrame.prototype.toString = function () {
    return 'AnSymbolTimelineFrame(depth=' + Kotlin.toString(this.depth) + (', uid=' + Kotlin.toString(this.uid)) + (', clipDepth=' + Kotlin.toString(this.clipDepth)) + (', ratio=' + Kotlin.toString(this.ratio)) + (', transform=' + Kotlin.toString(this.transform)) + (', name=' + Kotlin.toString(this.name)) + (', colorTransform=' + Kotlin.toString(this.colorTransform)) + (', blendMode=' + Kotlin.toString(this.blendMode)) + ')';
  };
  AnSymbolTimelineFrame.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depth) | 0;
    result = result * 31 + Kotlin.hashCode(this.uid) | 0;
    result = result * 31 + Kotlin.hashCode(this.clipDepth) | 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorTransform) | 0;
    result = result * 31 + Kotlin.hashCode(this.blendMode) | 0;
    return result;
  };
  AnSymbolTimelineFrame.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depth, other.depth) && Kotlin.equals(this.uid, other.uid) && Kotlin.equals(this.clipDepth, other.clipDepth) && Kotlin.equals(this.ratio, other.ratio) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.colorTransform, other.colorTransform) && Kotlin.equals(this.blendMode, other.blendMode)))));
  };
  function AnAction() {
  }
  AnAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnAction',
    interfaces: []
  };
  function AnPlaySoundAction(soundId) {
    this.soundId = soundId;
  }
  AnPlaySoundAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnPlaySoundAction',
    interfaces: [AnAction]
  };
  AnPlaySoundAction.prototype.component1 = function () {
    return this.soundId;
  };
  AnPlaySoundAction.prototype.copy_za3lpa$ = function (soundId) {
    return new AnPlaySoundAction(soundId === void 0 ? this.soundId : soundId);
  };
  AnPlaySoundAction.prototype.toString = function () {
    return 'AnPlaySoundAction(soundId=' + Kotlin.toString(this.soundId) + ')';
  };
  AnPlaySoundAction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.soundId) | 0;
    return result;
  };
  AnPlaySoundAction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.soundId, other.soundId))));
  };
  function AnEventAction(event) {
    this.event = event;
  }
  AnEventAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnEventAction',
    interfaces: [AnAction]
  };
  AnEventAction.prototype.component1 = function () {
    return this.event;
  };
  AnEventAction.prototype.copy_61zpoe$ = function (event) {
    return new AnEventAction(event === void 0 ? this.event : event);
  };
  AnEventAction.prototype.toString = function () {
    return 'AnEventAction(event=' + Kotlin.toString(this.event) + ')';
  };
  AnEventAction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.event) | 0;
    return result;
  };
  AnEventAction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.event, other.event))));
  };
  function AnDepthTimeline(depth) {
    Timed.call(this);
    this.depth = depth;
  }
  AnDepthTimeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnDepthTimeline',
    interfaces: [Timed]
  };
  function AnSymbolLimits(totalDepths, totalFrames, totalUids, totalTime) {
    this.totalDepths = totalDepths;
    this.totalFrames = totalFrames;
    this.totalUids = totalUids;
    this.totalTime = totalTime;
  }
  AnSymbolLimits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolLimits',
    interfaces: []
  };
  function AnSymbolUidDef(characterId, extraProps) {
    if (extraProps === void 0)
      extraProps = LinkedHashMap_init();
    this.characterId = characterId;
    this.extraProps = extraProps;
  }
  AnSymbolUidDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolUidDef',
    interfaces: []
  };
  function AnSymbolMovieClipSubTimeline(totalDepths) {
    this.totalTime = 0;
    var array = Array_0(totalDepths);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new AnDepthTimeline(i);
    }
    this.timelines = array;
    this.actions = new Timed();
    this.nextState = null;
    this.nextStatePlay = false;
  }
  AnSymbolMovieClipSubTimeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolMovieClipSubTimeline',
    interfaces: []
  };
  function AnSymbolMovieClipState(name, subTimeline, startTime) {
    this.name = name;
    this.subTimeline = subTimeline;
    this.startTime = startTime;
  }
  AnSymbolMovieClipState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolMovieClipState',
    interfaces: []
  };
  function AnSymbolMovieClip(id, name, limits) {
    AnSymbol.call(this, id, name);
    this.limits = limits;
    this.ninePatch = null;
    this.states = HashMap_init();
    var array = Array_0(this.limits.totalUids);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new AnSymbolUidDef(-1, HashMap_init());
    }
    this.uidInfo = array;
  }
  AnSymbolMovieClip.prototype.create_k19av$ = function (library) {
    return new AnMovieClip(library, this);
  };
  AnSymbolMovieClip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolMovieClip',
    interfaces: [AnSymbol]
  };
  function animateLibraryLoaders$lambda$lambda$lambda($receiver_0, content_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$animateLibraryLoaders$lambda$lambda$lambda($receiver_0, content_0, views_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$animateLibraryLoaders$lambda$lambda$lambda($receiver_0, content_0, views_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
    this.local$views = views_0;
  }
  Coroutine$animateLibraryLoaders$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$animateLibraryLoaders$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$animateLibraryLoaders$lambda$lambda$lambda.prototype.constructor = Coroutine$animateLibraryLoaders$lambda$lambda$lambda;
  Coroutine$animateLibraryLoaders$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAni(this.local$$receiver, this.local$views, this.local$content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function animateLibraryLoaders$lambda$lambda(s_0, injector, continuation_0, suspended) {
    var instance = new Coroutine$animateLibraryLoaders$lambda$lambda(s_0, injector, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$animateLibraryLoaders$lambda$lambda(s_0, injector, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$s = s_0;
  }
  Coroutine$animateLibraryLoaders$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$animateLibraryLoaders$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$animateLibraryLoaders$lambda$lambda.prototype.constructor = Coroutine$animateLibraryLoaders$lambda$lambda;
  Coroutine$animateLibraryLoaders$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (equals(this.local$s.readString_uyw3ma$(8), AniFile_getInstance().MAGIC))
              return new KorgeFileLoader('ani', animateLibraryLoaders$lambda$lambda$lambda);
            else
              return null;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function animateLibraryLoaders$lambda() {
    return arrayListOf([new KorgeFileLoaderTester('core/ani', animateLibraryLoaders$lambda$lambda)]);
  }
  var animateLibraryLoaders;
  function get_animateLibraryLoaders($receiver) {
    var property = new PropertyMetadata('animateLibraryLoaders');
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = animateLibraryLoaders.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = animateLibraryLoaders.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = animateLibraryLoaders.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function AnLibraryPlugin() {
    AnLibraryPlugin_instance = this;
    KorgePlugin.call(this);
  }
  function AnLibraryPlugin$register$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$AnLibraryPlugin$register$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$AnLibraryPlugin$register$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$AnLibraryPlugin$register$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AnLibraryPlugin$register$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AnLibraryPlugin$register$lambda.prototype.constructor = Coroutine$AnLibraryPlugin$register$lambda;
  Coroutine$AnLibraryPlugin$register$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(Path), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(VPath), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(Views), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(AsyncInjector), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.local$tmp$_2 = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(ResourcesRoot), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            return new AnLibrary$Factory(this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.local$tmp$_2, this.result_0);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnLibraryPlugin.prototype.register_gohfjx$ = function (views_0, continuation_0, suspended) {
    var instance = new Coroutine$register_gohfjx$(this, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$register_gohfjx$($this, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$views = views_0;
  }
  Coroutine$register_gohfjx$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$register_gohfjx$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$register_gohfjx$.prototype.constructor = Coroutine$register_gohfjx$;
  Coroutine$register_gohfjx$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$views.injector.mapFactory_mvlsy$(getKClass(AnLibrary), AnLibraryPlugin$register$lambda);
            return;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnLibraryPlugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AnLibraryPlugin',
    interfaces: [KorgePlugin]
  };
  var AnLibraryPlugin_instance = null;
  function AnLibraryPlugin_getInstance() {
    if (AnLibraryPlugin_instance === null) {
      new AnLibraryPlugin();
    }
    return AnLibraryPlugin_instance;
  }
  function AnLibrary(views, width, height, fps) {
    this.views = views;
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.$delegate_k19av$_0 = new Extra$Mixin();
    this.msPerFrameDouble = 1000 / this.fps;
    this.msPerFrame = numberToInt(this.msPerFrameDouble);
    this.bgcolor = (new Kotlin.Long(-1, 0)).toInt();
    this.symbolsById = ArrayList_init_0();
    this.symbolsByName = HashMap_init();
    this.defaultSmoothing = true;
  }
  AnLibrary.prototype.addSymbol_lvjwfe$ = function (symbol) {
    while (this.symbolsById.size <= symbol.id) {
      var $receiver = this.symbolsById;
      var element = AnSymbolEmpty_getInstance();
      $receiver.add_11rb$(element);
    }
    if (symbol.id >= 0)
      this.symbolsById.set_wxm5ur$(symbol.id, symbol);
  };
  AnLibrary.prototype.processSymbolNames = function () {
    var tmp$;
    tmp$ = this.symbolsById.iterator();
    while (tmp$.hasNext()) {
      var symbol = tmp$.next();
      if (symbol.name != null) {
        var $receiver = this.symbolsByName;
        var key = ensureNotNull(symbol.name);
        $receiver.put_xwzc9p$(key, symbol);
      }
    }
  };
  AnLibrary.prototype.findFirstTexture_w4zmgr$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType($receiver, AnSymbolEmpty))
      return null;
    else if (Kotlin.isType($receiver, AnSymbolSound))
      return null;
    else if (Kotlin.isType($receiver, AnTextFieldSymbol))
      return null;
    else if (Kotlin.isType($receiver, AnSymbolShape))
      return (tmp$ = $receiver.textureWithBitmap) != null ? tmp$.texture : null;
    else if (Kotlin.isType($receiver, AnSymbolMorphShape))
      return (tmp$_0 = firstOrNull_0($receiver.texturesWithBitmap.objects)) != null ? tmp$_0.texture : null;
    else if (Kotlin.isType($receiver, AnSymbolBitmap))
      return null;
    else if (Kotlin.isType($receiver, AnSymbolMovieClip)) {
      tmp$_1 = $receiver.uidInfo;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var uid = tmp$_1[tmp$_2];
        var res = this.findFirstTexture_vkl01n$(this.create_za3lpa$(uid.characterId));
        if (res != null)
          return res;
      }
      return null;
    }
     else
      throw new RuntimeException("Don't know how to handle " + Kotlin.getKClassFromExpression($receiver));
  };
  AnLibrary.prototype.findFirstTexture_vkl01n$ = function ($receiver) {
    return this.findFirstTexture_w4zmgr$($receiver.symbol);
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var get_lastIndex_1 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  AnLibrary.prototype.create_za3lpa$ = function (id) {
    var tmp$;
    if (id < 0) {
      throw new NotImplementedError_init();
    }
     else {
      var $receiver = this.symbolsById;
      tmp$ = (id >= 0 && id <= get_lastIndex_1($receiver) ? $receiver.get_za3lpa$(id) : AnSymbolEmpty_getInstance()).create_k19av$(this);
    }
    return tmp$;
  };
  AnLibrary.prototype.createShape_za3lpa$ = function (id) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.create_za3lpa$(id), AnShape) ? tmp$ : throwCCE();
  };
  AnLibrary.prototype.createMovieClip_za3lpa$ = function (id) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.create_za3lpa$(id), AnMovieClip) ? tmp$ : throwCCE();
  };
  AnLibrary.prototype.getTexture_za3lpa$ = function (id) {
    return this.findFirstTexture_vkl01n$(this.create_za3lpa$(id));
  };
  AnLibrary.prototype.create_61zpoe$ = function (name) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.symbolsByName.get_11rb$(name)) != null ? tmp$.create_k19av$(this) : null) != null ? tmp$_0 : invalidOp("Can't find symbol with name '" + name + "'");
  };
  AnLibrary.prototype.createShape_61zpoe$ = function (name) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.create_61zpoe$(name), AnShape) ? tmp$ : throwCCE();
  };
  AnLibrary.prototype.createMovieClip_61zpoe$ = function (name) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.create_61zpoe$(name), AnMovieClip) ? tmp$ : throwCCE();
  };
  AnLibrary.prototype.getTexture_61zpoe$ = function (name) {
    return this.findFirstTexture_vkl01n$(this.create_61zpoe$(name));
  };
  AnLibrary.prototype.getBitmap_za3lpa$ = function (id) {
    var tmp$;
    return (Kotlin.isType(tmp$ = this.symbolsById.get_za3lpa$(id), AnSymbolBitmap) ? tmp$ : throwCCE()).bmp;
  };
  AnLibrary.prototype.getBitmap_61zpoe$ = function (name) {
    var tmp$;
    return (Kotlin.isType(tmp$ = this.symbolsByName.get_11rb$(name), AnSymbolBitmap) ? tmp$ : throwCCE()).bmp;
  };
  AnLibrary.prototype.createMainTimeLine = function () {
    return this.createMovieClip_za3lpa$(0);
  };
  function AnLibrary$Factory(path, vpath, views, injector, resourcesRoot) {
    this.path = path;
    this.vpath = vpath;
    this.views = views;
    this.injector = injector;
    this.resourcesRoot = resourcesRoot;
  }
  AnLibrary$Factory.prototype.create = function (continuation_0, suspended) {
    var instance = new Coroutine$create(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$create($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$file = void 0;
    this.local$content = void 0;
  }
  Coroutine$create.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$create.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$create.prototype.constructor = Coroutine$create;
  Coroutine$create.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            this.local$file = this.$this.resourcesRoot.get_61zpoe$((tmp$_2 = (tmp$_1 = (tmp$ = this.$this.path) != null ? tmp$.path : null) != null ? tmp$_1 : (tmp$_0 = this.$this.vpath) != null ? tmp$_0.path : null) != null ? tmp$_2 : invalidOp('Invalid path'));
            this.state_0 = 2;
            this.result_0 = this.local$file.readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$content = this.result_0;
            this.local$tmp$_3 = get_animateLibraryLoaders(this.$this.views).iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_3.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var loader = this.local$tmp$_3.next();
            this.state_0 = 4;
            this.result_0 = loader.invoke_1wg0ys$(new FastByteArrayInputStream(this.local$content), this.$this.injector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$tmp$_4 = this.result_0;
            if (this.local$tmp$_4 == null) {
              this.state_0 = 3;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            var aloader = this.local$tmp$_4;
            this.state_0 = 6;
            this.result_0 = aloader.loader(this.local$file, new FastByteArrayInputStream(this.local$content), this.$this.views, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            return this.result_0;
          case 7:
            throw new IllegalArgumentException("Don't know how to load an AnLibrary for file " + this.local$file + ' using loaders: ' + get_animateLibraryLoaders(this.$this.views));
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnLibrary$Factory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [AsyncFactory]
  };
  Object.defineProperty(AnLibrary.prototype, 'extra', {
    get: function () {
      return this.$delegate_k19av$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_k19av$_0.extra = tmp$;
    }
  });
  AnLibrary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnLibrary',
    interfaces: [Extra]
  };
  function Timed(initialCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 7;
    this.times = new IntArrayList(initialCapacity);
    this.objects = ArrayList_init_0(initialCapacity);
  }
  Object.defineProperty(Timed.prototype, 'size', {
    get: function () {
      return this.times.size;
    }
  });
  Object.defineProperty(Timed.prototype, 'entries', {
    get: function () {
      return zip(this.times, this.objects);
    }
  });
  Timed.prototype.add_wxm5ur$ = function (time, obj) {
    this.times.add_za3lpa$(time);
    this.objects.add_11rb$(obj);
    var m = this.times.size - 2 | 0;
    while (m >= 0 && time < this.times.get_za3lpa$(m)) {
      this.swap_t3p0pr$_0(m, m + 1 | 0);
      m = m - 1 | 0;
    }
  };
  Timed.prototype.swap_t3p0pr$_0 = function (a, b) {
    var tempTime = this.times.get_za3lpa$(b);
    var tempObject = this.objects.get_za3lpa$(b);
    this.times.set_vux9f0$(b, this.times.get_za3lpa$(a));
    this.objects.set_wxm5ur$(b, this.objects.get_za3lpa$(a));
    this.times.set_vux9f0$(a, tempTime);
    this.objects.set_wxm5ur$(a, tempObject);
  };
  Timed.prototype.findNearIndex_za3lpa$ = function (time) {
    var res = binarySearch(this.times, time);
    return res < 0 ? clamp(-res - 1 | 0, 0, this.times.size - 1 | 0) : res;
  };
  function Timed$RangeResult(startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = 0;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }
  Timed$RangeResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RangeResult',
    interfaces: []
  };
  Timed$RangeResult.prototype.component1 = function () {
    return this.startIndex;
  };
  Timed$RangeResult.prototype.component2 = function () {
    return this.endIndex;
  };
  Timed$RangeResult.prototype.copy_vux9f0$ = function (startIndex, endIndex) {
    return new Timed$RangeResult(startIndex === void 0 ? this.startIndex : startIndex, endIndex === void 0 ? this.endIndex : endIndex);
  };
  Timed$RangeResult.prototype.toString = function () {
    return 'RangeResult(startIndex=' + Kotlin.toString(this.startIndex) + (', endIndex=' + Kotlin.toString(this.endIndex)) + ')';
  };
  Timed$RangeResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.endIndex) | 0;
    return result;
  };
  Timed$RangeResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startIndex, other.startIndex) && Kotlin.equals(this.endIndex, other.endIndex)))));
  };
  Timed.prototype.getRangeValues_ex6w2q$ = function (startTime, endTime, out) {
    if (out === void 0) {
      out = ArrayList_init_0();
    }
    var tmp$, tmp$_0;
    var range = this.getRangeIndices_b4nn5q$(startTime, endTime);
    tmp$ = range.startIndex;
    tmp$_0 = range.endIndex;
    for (var n = tmp$; n <= tmp$_0; n++) {
      var element = this.objects.get_za3lpa$(n);
      out.add_11rb$(element);
    }
    return out;
  };
  Timed.prototype.getRangeIndices_b4nn5q$ = function (startTime, endTime, out) {
    if (out === void 0)
      out = new Timed$RangeResult();
    var startIndex = clamp(this.findNearIndex_za3lpa$(startTime) - 1 | 0, 0, this.size - 1 | 0);
    var endIndex = clamp(this.findNearIndex_za3lpa$(endTime) + 1 | 0, 0, this.size - 1 | 0);
    var min = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    var max = kotlin_js_internal_IntCompanionObject.MIN_VALUE;
    for (var n = startIndex; n <= endIndex; n++) {
      var time = this.times.get_za3lpa$(n);
      if ((new IntRange(startTime, endTime)).contains_mef7kx$(time)) {
        var a = min;
        min = Math_0.min(a, n);
        var a_0 = max;
        max = Math_0.max(a_0, n);
      }
    }
    out.startIndex = min;
    out.endIndex = max;
    return out;
  };
  Timed.prototype.forEachInRange_x63f18$ = defineInlineFunction('korge-js.com.soywiz.korge.animate.Timed.forEachInRange_x63f18$', wrapFunction(function () {
    var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
    var clamp = _.$$importsForInline$$['korio-js'].com.soywiz.korio.util.clamp_e4yvb3$;
    var IntRange = Kotlin.kotlin.ranges.IntRange;
    return function (startTime, endTime, maxCalls, callback) {
      if (maxCalls === void 0)
        maxCalls = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
      var startIndex = clamp(this.findNearIndex_za3lpa$(startTime) - 1 | 0, 0, this.size - 1 | 0);
      var endIndex = clamp(this.findNearIndex_za3lpa$(endTime) + 1 | 0, 0, this.size - 1 | 0);
      var totalCalls = 0;
      for (var n = startIndex; n <= endIndex; n++) {
        var time = this.times.get_za3lpa$(n);
        var obj = this.objects.get_za3lpa$(n);
        if ((new IntRange(startTime + 1 | 0, endTime)).contains_mef7kx$(time)) {
          callback(n, time, obj);
          totalCalls = totalCalls + 1 | 0;
          if (totalCalls >= maxCalls)
            break;
        }
      }
    };
  }));
  function Timed$Result(index, left, right, ratio) {
    if (index === void 0)
      index = 0;
    if (left === void 0)
      left = null;
    if (right === void 0)
      right = null;
    if (ratio === void 0)
      ratio = 0.0;
    this.index = index;
    this.left = left;
    this.right = right;
    this.ratio = ratio;
  }
  Timed$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  Timed$Result.prototype.component1 = function () {
    return this.index;
  };
  Timed$Result.prototype.component2 = function () {
    return this.left;
  };
  Timed$Result.prototype.component3 = function () {
    return this.right;
  };
  Timed$Result.prototype.component4 = function () {
    return this.ratio;
  };
  Timed$Result.prototype.copy_rnsoye$ = function (index, left, right, ratio) {
    return new Timed$Result(index === void 0 ? this.index : index, left === void 0 ? this.left : left, right === void 0 ? this.right : right, ratio === void 0 ? this.ratio : ratio);
  };
  Timed$Result.prototype.toString = function () {
    return 'Result(index=' + Kotlin.toString(this.index) + (', left=' + Kotlin.toString(this.left)) + (', right=' + Kotlin.toString(this.right)) + (', ratio=' + Kotlin.toString(this.ratio)) + ')';
  };
  Timed$Result.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    return result;
  };
  Timed$Result.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.left, other.left) && Kotlin.equals(this.right, other.right) && Kotlin.equals(this.ratio, other.ratio)))));
  };
  Timed.prototype.find_xgt0ho$ = function (time, out) {
    if (out === void 0)
      out = new Timed$Result();
    var findAndHandle_rankz6$result;
    findAndHandle_rankz6$break: do {
      if (this.objects.isEmpty()) {
        out.index = 0;
        out.left = null;
        out.right = null;
        out.ratio = 0.0;
        findAndHandle_rankz6$result = out;
        break findAndHandle_rankz6$break;
      }
      var index = this.findNearIndex_za3lpa$(time);
      var timeAtIndex = this.times.get_za3lpa$(index);
      if (time < timeAtIndex && index <= 0) {
        var right = this.objects.get_za3lpa$(0);
        out.index = 0;
        out.left = null;
        out.right = right;
        out.ratio = 0.0;
        findAndHandle_rankz6$result = out;
      }
       else {
        var idx = time < timeAtIndex ? index - 1 | 0 : index;
        var curTimeAtIndex = this.times.get_za3lpa$(idx + 0 | 0);
        if (curTimeAtIndex === time) {
          var left = this.objects.get_za3lpa$(idx);
          out.index = idx;
          out.left = left;
          out.right = null;
          out.ratio = 0.0;
          findAndHandle_rankz6$result = out;
        }
         else {
          if (idx >= (this.times.size - 1 | 0)) {
            var index_0 = this.objects.size;
            var left_0 = this.objects.get_za3lpa$(this.objects.size - 1 | 0);
            out.index = index_0;
            out.left = left_0;
            out.right = null;
            out.ratio = 1.0;
            findAndHandle_rankz6$result = out;
          }
           else {
            var nextTimeAtIndex = this.times.get_za3lpa$(idx + 1 | 0);
            var elapsedTime = time - curTimeAtIndex | 0;
            var totalTime = nextTimeAtIndex - curTimeAtIndex | 0;
            var left_1 = this.objects.get_za3lpa$(idx);
            var right_0 = this.objects.get_za3lpa$(idx + 1 | 0);
            var ratio = elapsedTime / totalTime;
            out.index = idx;
            out.left = left_1;
            out.right = right_0;
            out.ratio = ratio;
            findAndHandle_rankz6$result = out;
          }
        }
      }
    }
     while (false);
    return findAndHandle_rankz6$result;
  };
  Timed.prototype.findAndHandle_rankz6$ = defineInlineFunction('korge-js.com.soywiz.korge.animate.Timed.findAndHandle_rankz6$', function (time, callback) {
    if (this.objects.isEmpty())
      return callback(0, null, null, 0.0);
    var index = this.findNearIndex_za3lpa$(time);
    var timeAtIndex = this.times.get_za3lpa$(index);
    if (time < timeAtIndex && index <= 0) {
      return callback(0, null, this.objects.get_za3lpa$(0), 0.0);
    }
     else {
      var idx = time < timeAtIndex ? index - 1 | 0 : index;
      var curTimeAtIndex = this.times.get_za3lpa$(idx + 0 | 0);
      if (curTimeAtIndex === time) {
        return callback(idx, this.objects.get_za3lpa$(idx), null, 0.0);
      }
       else {
        if (idx >= (this.times.size - 1 | 0)) {
          return callback(this.objects.size, this.objects.get_za3lpa$(this.objects.size - 1 | 0), null, 1.0);
        }
         else {
          var nextTimeAtIndex = this.times.get_za3lpa$(idx + 1 | 0);
          var elapsedTime = time - curTimeAtIndex | 0;
          var totalTime = nextTimeAtIndex - curTimeAtIndex | 0;
          return callback(idx, this.objects.get_za3lpa$(idx), this.objects.get_za3lpa$(idx + 1 | 0), elapsedTime / totalTime);
        }
      }
    }
  });
  Timed.prototype.findWithoutInterpolation_xgt0ho$ = function (time, out) {
    if (out === void 0)
      out = new Timed$Result();
    var findAndHandleWithoutInterpolation_gqpst9$result;
    findAndHandleWithoutInterpolation_gqpst9$break: do {
      if (this.objects.isEmpty()) {
        out.index = 0;
        out.left = null;
        out.right = null;
        out.ratio = 0.0;
        findAndHandleWithoutInterpolation_gqpst9$result = out;
        break findAndHandleWithoutInterpolation_gqpst9$break;
      }
      var index = this.findNearIndex_za3lpa$(time);
      var timeAtIndex = this.times.get_za3lpa$(index);
      if (time < timeAtIndex && index <= 0) {
        out.index = 0;
        out.left = null;
        out.right = null;
        out.ratio = 0.0;
        findAndHandleWithoutInterpolation_gqpst9$result = out;
      }
       else {
        var idx = time < timeAtIndex ? index - 1 | 0 : index;
        var curTimeAtIndex = this.times.get_za3lpa$(idx + 0 | 0);
        if (curTimeAtIndex === time) {
          var left = this.objects.get_za3lpa$(idx);
          out.index = idx;
          out.left = left;
          out.right = null;
          out.ratio = 0.0;
          findAndHandleWithoutInterpolation_gqpst9$result = out;
        }
         else {
          if (idx >= (this.times.size - 1 | 0)) {
            var index_0 = this.objects.size;
            var left_0 = this.objects.get_za3lpa$(this.objects.size - 1 | 0);
            out.index = index_0;
            out.left = left_0;
            out.right = null;
            out.ratio = 0.0;
            findAndHandleWithoutInterpolation_gqpst9$result = out;
          }
           else {
            var left_1 = this.objects.get_za3lpa$(idx);
            out.index = idx;
            out.left = left_1;
            out.right = null;
            out.ratio = 0.0;
            findAndHandleWithoutInterpolation_gqpst9$result = out;
          }
        }
      }
    }
     while (false);
    return findAndHandleWithoutInterpolation_gqpst9$result;
  };
  Timed.prototype.findAndHandleWithoutInterpolation_gqpst9$ = defineInlineFunction('korge-js.com.soywiz.korge.animate.Timed.findAndHandleWithoutInterpolation_gqpst9$', function (time, callback) {
    if (this.objects.isEmpty())
      return callback(0, null);
    var index = this.findNearIndex_za3lpa$(time);
    var timeAtIndex = this.times.get_za3lpa$(index);
    if (time < timeAtIndex && index <= 0) {
      return callback(0, null);
    }
     else {
      var idx = time < timeAtIndex ? index - 1 | 0 : index;
      var curTimeAtIndex = this.times.get_za3lpa$(idx + 0 | 0);
      if (curTimeAtIndex === time) {
        return callback(idx, this.objects.get_za3lpa$(idx));
      }
       else {
        if (idx >= (this.times.size - 1 | 0)) {
          return callback(this.objects.size, this.objects.get_za3lpa$(this.objects.size - 1 | 0));
        }
         else {
          return callback(idx, this.objects.get_za3lpa$(idx));
        }
      }
    }
  });
  Timed.prototype.toString = function () {
    return 'Timed(' + this.entries + ')';
  };
  Timed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timed',
    interfaces: []
  };
  function readAni$lambda(closure$file_0) {
    return function (index_0, continuation_0, suspended) {
      var instance = new Coroutine$readAni$lambda(closure$file_0, index_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$readAni$lambda(closure$file_0, index_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$index = index_0;
  }
  Coroutine$readAni$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAni$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAni$lambda.prototype.constructor = Coroutine$readAni$lambda;
  Coroutine$readAni$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmapOptimized(this.local$closure$file.withExtension_61zpoe$('ani.' + this.local$index + '.png'), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readAni$lambda_0(closure$file_0) {
    return function (index_0, continuation_0, suspended) {
      var instance = new Coroutine$readAni$lambda_0(closure$file_0, index_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$readAni$lambda_0(closure$file_0, index_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$index = index_0;
  }
  Coroutine$readAni$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAni$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAni$lambda_0.prototype.constructor = Coroutine$readAni$lambda_0;
  Coroutine$readAni$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readNativeSoundOptimized(this.local$closure$file.withExtension_61zpoe$('ani.' + this.local$index + '.mp3'), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readAni($receiver_0, views_0, content_0, continuation_0, suspended) {
    var instance = new Coroutine$readAni($receiver_0, views_0, content_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAni($receiver_0, views_0, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$file = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$content = content_0;
  }
  Coroutine$readAni.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAni.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAni.prototype.constructor = Coroutine$readAni;
  Coroutine$readAni.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$content === void 0)
              this.local$content = null;
            this.local$file = this.local$$receiver;
            this.local$tmp$ = AnLibraryDeserializer_getInstance();
            if (this.local$content == null) {
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.readBytes(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$content = new FastByteArrayInputStream(this.result_0);
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.read_splst$(this.local$content, this.local$views, new AnLibraryDeserializer$ExternalReaders(readAni$lambda(this.local$file), readAni$lambda_0(this.local$file)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function AnLibraryDeserializer() {
    AnLibraryDeserializer_instance = this;
  }
  function AnLibraryDeserializer$ExternalReaders(atlasReader, readSound) {
    this.atlasReader = atlasReader;
    this.readSound = readSound;
  }
  AnLibraryDeserializer$ExternalReaders.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExternalReaders',
    interfaces: []
  };
  AnLibraryDeserializer.prototype.read_yyxl0s$ = function (s, views, externalReaders, continuation) {
    return this.readLibrary_0(new FastByteArrayInputStream(s), views, externalReaders, continuation);
  };
  AnLibraryDeserializer.prototype.read_61jkx5$ = function (s, views, externalReaders, continuation) {
    return this.readLibrary_0(new FastByteArrayInputStream(readAll(s)), views, externalReaders, continuation);
  };
  AnLibraryDeserializer.prototype.read_splst$ = function (s, views, externalReaders, continuation) {
    return this.readLibrary_0(s, views, externalReaders, continuation);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  AnLibraryDeserializer.prototype.readLibrary_0 = function ($receiver_0, views_0, externalReaders_0, continuation_0, suspended) {
    var instance = new Coroutine$readLibrary_0(this, $receiver_0, views_0, externalReaders_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$readLibrary_0($this, $receiver_0, views_0, externalReaders_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$mipmaps = void 0;
    this.local$library = void 0;
    this.local$strings = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$closure$continuation = void 0;
    this.local$atlases = void 0;
    this.local$destination_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$closure$continuation_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$externalReaders = externalReaders_0;
  }
  Coroutine$readLibrary_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readLibrary_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readLibrary_0.prototype.constructor = Coroutine$readLibrary_0;
  Coroutine$readLibrary_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var magic = this.local$$receiver.readStringz_uyw3ma$(8);
            if (!equals(magic, AniFile_getInstance().MAGIC))
              invalidOp('Not a KORGEANI file');
            if (this.local$$receiver.readU_VL() !== AniFile_getInstance().VERSION)
              invalidOp('Just supported KORGEANI version 16');
            var msPerFrame = this.local$$receiver.readU_VL();
            var width = this.local$$receiver.readU_VL();
            var height = this.local$$receiver.readU_VL();
            var fileFlags = this.local$$receiver.readU_VL();
            this.local$mipmaps = extract(fileFlags, 0);
            var smoothInterpolation = !extract(fileFlags, 1);
            var $receiver = new AnLibrary(this.local$views, width, height, 1000.0 / msPerFrame);
            $receiver.defaultSmoothing = smoothInterpolation;
            this.local$library = $receiver;
            var tmp$_0 = [null];
            var $receiver_0 = until(1, this.local$$receiver.readU_VL());
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
              var item = tmp$_1.next();
              destination.add_11rb$(this.local$$receiver.readStringVL_qa9gbo$());
            }

            this.local$strings = plus(tmp$_0, destination);
            var $receiver_1 = until(0, this.local$$receiver.readU_VL());
            this.local$destination = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
            this.local$tmp$ = $receiver_1.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var item_0 = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.local$closure$continuation = this;
            this.state_0 = 3;
            this.result_0 = this.local$externalReaders.atlasReader(item_0, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            var bmp = this.local$closure$continuation.result_0;
            this.local$tmp$_0.call(this.local$destination, to(bmp, texture(this.local$views, bmp, this.local$mipmaps)));
            this.state_0 = 2;
            continue;
          case 4:
            this.local$atlases = this.local$destination;
            var $receiver_2 = until(0, this.local$$receiver.readU_VL());
            this.local$destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
            this.local$tmp$_1 = $receiver_2.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var item_1 = this.local$tmp$_1.next();
            this.local$tmp$_2 = this.local$destination_0.add_11rb$;
            this.local$closure$continuation_0 = this;
            this.state_0 = 6;
            this.result_0 = this.local$externalReaders.readSound(item_1, this.local$closure$continuation_0);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.local$tmp$_2.call(this.local$destination_0, this.local$closure$continuation_0.result_0);
            this.state_0 = 5;
            continue;
          case 7:
            var sounds = this.local$destination_0;
            var $receiver_3 = until(0, this.local$$receiver.readU_VL());
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
            var tmp$_2;
            tmp$_2 = $receiver_3.iterator();
            while (tmp$_2.hasNext()) {
              var item_2 = tmp$_2.next();
              destination_0.add_11rb$(this.$this.readSymbol_0(this.local$$receiver, this.local$strings, this.local$atlases, sounds));
            }

            var symbols = destination_0;
            tmp$ = symbols.iterator();
            while (tmp$.hasNext()) {
              var symbol = tmp$.next();
              this.local$library.addSymbol_lvjwfe$(symbol);
            }

            this.local$library.processSymbolNames();
            return this.local$library;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnLibraryDeserializer.prototype.readSymbol_0 = function ($receiver, strings, atlases, sounds) {
    var tmp$, tmp$_0, tmp$_1;
    var symbolId = $receiver.readU_VL();
    var symbolName = strings[$receiver.readU_VL()];
    var type = $receiver.readU_VL();
    if (type === AniFile_getInstance().SYMBOL_TYPE_EMPTY)
      tmp$_1 = AnSymbolEmpty_getInstance();
    else if (type === AniFile_getInstance().SYMBOL_TYPE_SOUND) {
      var soundId = $receiver.readU_VL();
      tmp$_1 = new AnSymbolSound(symbolId, symbolName, sounds.get_za3lpa$(soundId), null);
    }
     else if (type === AniFile_getInstance().SYMBOL_TYPE_TEXT) {
      var initialText = strings[$receiver.readU_VL()];
      var bounds = this.readRect_l4re4c$($receiver);
      tmp$_1 = new AnTextFieldSymbol(symbolId, symbolName, initialText != null ? initialText : '', bounds);
    }
     else if (type === AniFile_getInstance().SYMBOL_TYPE_SHAPE) {
      var scale = $receiver.readF32_le();
      var bitmapId = $receiver.readU_VL();
      var atlas = atlases.get_za3lpa$(bitmapId);
      var textureBounds = this.readIRect_l4re4c$($receiver);
      var bounds_0 = this.readRect_l4re4c$($receiver);
      var bitmap = atlas.first;
      var texture = atlas.second;
      tmp$ = $receiver.readU_VL();
      if (tmp$ === 0)
        tmp$_0 = null;
      else if (tmp$ === 1) {
        var cmds = new Int32Array($receiver.readU_VL());
        for (var n = 0; n < cmds.length; n++)
          cmds[n] = $receiver.readU8();
        var data = new Float64Array($receiver.readU_VL());
        for (var n_0 = 0; n_0 < data.length; n_0++)
          data[n_0] = $receiver.readF32_le();
        tmp$_0 = new VectorPath(IntArrayList_init(cmds), DoubleArrayList_init(data));
      }
       else
        tmp$_0 = null;
      var path = tmp$_0;
      tmp$_1 = new AnSymbolShape(symbolId, symbolName, bounds_0, new TextureWithBitmapSlice(texture.slice_2da8yn$(textureBounds.toDouble()), slice(bitmap, textureBounds), scale, bounds_0), path);
    }
     else if (type === AniFile_getInstance().SYMBOL_TYPE_MORPH_SHAPE) {
      var nframes = $receiver.readU_VL();
      var texturesWithBitmap = new Timed(nframes);
      for (var n_1 = 0; n_1 < nframes; n_1++) {
        var ratio1000 = $receiver.readU_VL();
        var scale_0 = $receiver.readF32_le();
        var bitmapId_0 = $receiver.readU_VL();
        var bounds_1 = this.readRect_l4re4c$($receiver);
        var textureBounds_0 = this.readIRect_l4re4c$($receiver);
        var atlas_0 = atlases.get_za3lpa$(bitmapId_0);
        var bitmap_0 = atlas_0.first;
        var texture_0 = atlas_0.second;
        texturesWithBitmap.add_wxm5ur$(ratio1000, new TextureWithBitmapSlice(texture_0.slice_2da8yn$(textureBounds_0.toDouble()), slice(bitmap_0, textureBounds_0), scale_0, bounds_1));
      }
      tmp$_1 = new AnSymbolMorphShape(symbolId, symbolName, new Rectangle(), texturesWithBitmap, null);
    }
     else if (type === AniFile_getInstance().SYMBOL_TYPE_BITMAP)
      tmp$_1 = new AnSymbolBitmap(symbolId, symbolName, new Bitmap32(1, 1));
    else if (type === AniFile_getInstance().SYMBOL_TYPE_MOVIE_CLIP)
      tmp$_1 = this.readMovieClip_0($receiver, symbolId, symbolName, strings);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Type: ' + type));
    }
    var symbol = tmp$_1;
    return symbol;
  };
  AnLibraryDeserializer.prototype.readMovieClip_0 = function ($receiver, symbolId, symbolName, strings) {
    var mcFlags = $receiver.readU8();
    var totalDepths = $receiver.readU_VL();
    var totalFrames = $receiver.readU_VL();
    var totalTime = $receiver.readU_VL();
    var totalUids = $receiver.readU_VL();
    var $receiver_0 = until(0, totalUids);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var charId = $receiver.readU_VL();
      var extraPropsString = $receiver.readStringVL_qa9gbo$();
      var extraProps = extraPropsString.length === 0 ? LinkedHashMap_init() : Kotlin.isType(tmp$_1 = json.Json.decode_61zpoe$(extraPropsString), MutableMap) ? tmp$_1 : throwCCE();
      tmp$_0.call(destination, new AnSymbolUidDef(charId, extraProps));
    }
    var uidsToCharacterIds = copyToArray(destination);
    var mc = new AnSymbolMovieClip(symbolId, symbolName, new AnSymbolLimits(totalDepths, totalFrames, totalUids, totalTime));
    if (extract(mcFlags, 0)) {
      mc.ninePatch = this.readRect_l4re4c$($receiver);
    }
    var $receiver_1 = until(0, $receiver.readU_VL());
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_2;
    tmp$_2 = $receiver_1.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      var tmp$_3 = destination_0.add_11rb$;
      var tmp$_4, tmp$_5, tmp$_6;
      var ss = new AnSymbolMovieClipSubTimeline(totalDepths);
      ss.totalTime = $receiver.readU_VL();
      var stateFlags = $receiver.readU8();
      ss.nextStatePlay = extract(stateFlags, 0);
      ss.nextState = strings[$receiver.readU_VL()];
      var numberOfActionFrames = $receiver.readU_VL();
      var lastFrameTimeInMs = 0;
      for (var n = 0; n < numberOfActionFrames; n++) {
        var deltaTime = $receiver.readU_VL();
        var timeInMs = lastFrameTimeInMs + deltaTime | 0;
        lastFrameTimeInMs = timeInMs;
        var $receiver_2 = until(0, $receiver.readU_VL());
        var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
        var tmp$_7;
        tmp$_7 = $receiver_2.iterator();
        while (tmp$_7.hasNext()) {
          var item_1 = tmp$_7.next();
          var tmp$_8 = destination_1.add_11rb$;
          var transform$result;
          var tmp$_9;
          var action = $receiver.readU8();
          if (action === 0) {
            transform$result = new AnPlaySoundAction($receiver.readU_VL());
          }
           else if (action === 1) {
            transform$result = new AnEventAction((tmp$_9 = strings[$receiver.readU_VL()]) != null ? tmp$_9 : '');
          }
           else {
            throw new NotImplementedError_init();
          }
          tmp$_8.call(destination_1, transform$result);
        }
        var actions = destination_1;
        tmp$_4 = actions.iterator();
        while (tmp$_4.hasNext()) {
          var action_0 = tmp$_4.next();
          ss.actions.add_wxm5ur$(timeInMs * 1000 | 0, action_0);
        }
      }
      for (var depth = 0; depth < totalDepths; depth++) {
        var timeline = ss.timelines[depth];
        var lastUid = -1;
        var lastName = null;
        var lastColorTransform = new ColorTransform();
        var lastMatrix = new Matrix2d();
        var lastClipDepth = -1;
        var lastRatio = 0.0;
        var lastFrameTime = 0;
        var lastBlendMode = BlendMode$INHERIT_getInstance();
        tmp$_5 = $receiver.readU_VL();
        for (var frameIndex = 0; frameIndex < tmp$_5; frameIndex++) {
          var deltaFrameTime = $receiver.readU_VL();
          var frameTime = lastFrameTime + deltaFrameTime | 0;
          lastFrameTime = frameTime;
          var flags = $receiver.readU_VL();
          var hasUid = extract(flags, 0);
          var hasName = extract(flags, 1);
          var hasColorTransform = extract(flags, 2);
          var hasMatrix = extract(flags, 3);
          var hasClipDepth = extract(flags, 4);
          var hasRatio = extract(flags, 5);
          var hasAlpha = extract(flags, 6);
          var hasBlendMode = extract(flags, 7);
          if (hasUid)
            lastUid = $receiver.readU_VL();
          if (hasClipDepth)
            lastClipDepth = $receiver.readS16_le();
          if (hasName)
            lastName = strings[$receiver.readU_VL()];
          if (hasAlpha) {
            var ct = lastColorTransform.copy_s3cjg4$();
            ct.mA = $receiver.readU8() / 255.0;
            lastColorTransform = ct;
          }
           else if (hasColorTransform) {
            var ct_0 = lastColorTransform.copy_s3cjg4$();
            var ctFlags = $receiver.readU8();
            if (extract(ctFlags, 0))
              ct_0.mR = $receiver.readU8() / 255.0;
            if (extract(ctFlags, 1))
              ct_0.mG = $receiver.readU8() / 255.0;
            if (extract(ctFlags, 2))
              ct_0.mB = $receiver.readU8() / 255.0;
            if (extract(ctFlags, 3))
              ct_0.mA = $receiver.readU8() / 255.0;
            if (extract(ctFlags, 4))
              ct_0.aR = $receiver.readS8() * 2;
            if (extract(ctFlags, 5))
              ct_0.aG = $receiver.readS8() * 2;
            if (extract(ctFlags, 6))
              ct_0.aB = $receiver.readS8() * 2;
            if (extract(ctFlags, 7))
              ct_0.aR = $receiver.readS8() * 2;
            lastColorTransform = ct_0;
          }
          if (hasMatrix) {
            var lm = lastMatrix.copy_15yvbs$();
            var matrixFlags = $receiver.readU8();
            if (extract(matrixFlags, 0))
              lm.a = $receiver.readS_VL() / 16384.0;
            if (extract(matrixFlags, 1))
              lm.b = $receiver.readS_VL() / 16384.0;
            if (extract(matrixFlags, 2))
              lm.c = $receiver.readS_VL() / 16384.0;
            if (extract(matrixFlags, 3))
              lm.d = $receiver.readS_VL() / 16384.0;
            if (extract(matrixFlags, 4))
              lm.tx = $receiver.readS_VL() / 20.0;
            if (extract(matrixFlags, 5))
              lm.ty = $receiver.readS_VL() / 20.0;
            lastMatrix = lm;
          }
          if (hasRatio)
            lastRatio = $receiver.readU8() / 255.0;
          if (hasBlendMode) {
            lastBlendMode = (tmp$_6 = BlendMode$Companion_getInstance().BY_ORDINAL.get_11rb$($receiver.readU8())) != null ? tmp$_6 : BlendMode$INHERIT_getInstance();
          }
          timeline.add_wxm5ur$(frameTime * 1000 | 0, new AnSymbolTimelineFrame(depth, lastUid, lastClipDepth, lastRatio, lastMatrix, lastName, lastColorTransform, lastBlendMode));
        }
      }
      tmp$_3.call(destination_0, ss);
    }
    var symbolStates = destination_0;
    for (var n_0 = 0; n_0 < uidsToCharacterIds.length; n_0++)
      mc.uidInfo[n_0] = uidsToCharacterIds[n_0];
    var tmp$_10 = mc.states;
    var $receiver_3 = until(0, $receiver.readU_VL());
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_11;
    tmp$_11 = $receiver_3.iterator();
    while (tmp$_11.hasNext()) {
      var item_2 = tmp$_11.next();
      var tmp$_12 = destination_2.add_11rb$;
      var tmp$_13;
      var name = (tmp$_13 = strings[$receiver.readU_VL()]) != null ? tmp$_13 : '';
      var startTime = $receiver.readU_VL();
      var stateIndex = $receiver.readU_VL();
      symbolStates.get_za3lpa$(stateIndex).actions.add_wxm5ur$(startTime, new AnEventAction(name));
      tmp$_12.call(destination_2, to(name, new AnSymbolMovieClipState(name, symbolStates.get_za3lpa$(stateIndex), startTime)));
    }
    var map = toMap(destination_2);
    tmp$_10.putAll_a2k3zr$(map);
    return mc;
  };
  AnLibraryDeserializer.prototype.readRect_l4re4c$ = function ($receiver) {
    return new Rectangle($receiver.readS_VL() / 20.0, $receiver.readS_VL() / 20.0, $receiver.readS_VL() / 20.0, $receiver.readS_VL() / 20.0);
  };
  AnLibraryDeserializer.prototype.readIRect_l4re4c$ = function ($receiver) {
    return RectangleInt_init($receiver.readS_VL(), $receiver.readS_VL(), $receiver.readS_VL(), $receiver.readS_VL());
  };
  AnLibraryDeserializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AnLibraryDeserializer',
    interfaces: []
  };
  var AnLibraryDeserializer_instance = null;
  function AnLibraryDeserializer_getInstance() {
    if (AnLibraryDeserializer_instance === null) {
      new AnLibraryDeserializer();
    }
    return AnLibraryDeserializer_instance;
  }
  function writeTo$lambda(closure$file_0, closure$format_0, closure$props_0) {
    return function (index_0, atlas_0, continuation_0, suspended) {
      var instance = new Coroutine$writeTo$lambda(closure$file_0, closure$format_0, closure$props_0, index_0, atlas_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$writeTo$lambda(closure$file_0, closure$format_0, closure$props_0, index_0, atlas_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$closure$format = closure$format_0;
    this.local$closure$props = closure$props_0;
    this.local$index = index_0;
    this.local$atlas = atlas_0;
  }
  Coroutine$writeTo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo$lambda.prototype.constructor = Coroutine$writeTo$lambda;
  Coroutine$writeTo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = writeBitmap(this.local$closure$file.withExtension_61zpoe$('ani.' + this.local$index + '.png'), this.local$atlas, this.local$closure$format, this.local$closure$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function writeTo$lambda_0(closure$file_0) {
    return function (index_0, soundData_0, continuation_0, suspended) {
      var instance = new Coroutine$writeTo$lambda_0(closure$file_0, index_0, soundData_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$writeTo$lambda_0(closure$file_0, index_0, soundData_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$index = index_0;
    this.local$soundData = soundData_0;
  }
  Coroutine$writeTo$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeTo$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo$lambda_0.prototype.constructor = Coroutine$writeTo$lambda_0;
  Coroutine$writeTo$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$file.withExtension_61zpoe$('ani.' + this.local$index + '.mp3').write_gssovf$(this.local$soundData, [], this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function writeTo($receiver_0, file_0, config_0, continuation_0, suspended) {
    var instance = new Coroutine$writeTo($receiver_0, file_0, config_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeTo($receiver_0, file_0, config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$file = file_0;
    this.local$config = config_0;
  }
  Coroutine$writeTo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeTo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo.prototype.constructor = Coroutine$writeTo;
  Coroutine$writeTo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$config === void 0)
              this.local$config = new AnLibrarySerializer$Config();
            var format_0 = format.PNG;
            var props = new ImageEncodingProps(void 0, this.local$config.compression);
            this.state_0 = 2;
            this.result_0 = AnLibrarySerializer_getInstance().gen_y7lps0$(this.local$$receiver, this.local$config, new AnLibrarySerializer$ExternalWriters(writeTo$lambda(this.local$file, format_0, props), writeTo$lambda_0(this.local$file)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$file.write_gssovf$(this.result_0, [], this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function AnLibrarySerializer() {
    AnLibrarySerializer_instance = this;
  }
  function AnLibrarySerializer$ExternalWriters(writeAtlas, writeSound) {
    this.writeAtlas = writeAtlas;
    this.writeSound = writeSound;
  }
  AnLibrarySerializer$ExternalWriters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExternalWriters',
    interfaces: []
  };
  function AnLibrarySerializer$Config(compression, keepPaths, mipmaps, smoothInterpolation) {
    if (compression === void 0)
      compression = 1.0;
    if (keepPaths === void 0)
      keepPaths = false;
    if (mipmaps === void 0)
      mipmaps = true;
    if (smoothInterpolation === void 0)
      smoothInterpolation = true;
    this.compression = compression;
    this.keepPaths = keepPaths;
    this.mipmaps = mipmaps;
    this.smoothInterpolation = smoothInterpolation;
  }
  AnLibrarySerializer$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  var ByteArrayBuffer_init = $module$korio_js.$$importsForInline$$['kmem-js'].com.soywiz.kmem.ByteArrayBuffer_init_za3lpa$;
  var MemorySyncStream = $module$korio_js.com.soywiz.korio.stream.MemorySyncStream_yyklod$;
  AnLibrarySerializer.prototype.gen_y7lps0$ = function (library_0, config_0, externalWriters_0, continuation_0, suspended) {
    var instance = new Coroutine$gen_y7lps0$(this, library_0, config_0, externalWriters_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$gen_y7lps0$($this, library_0, config_0, externalWriters_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$buffer = void 0;
    this.local$library = library_0;
    this.local$config = config_0;
    this.local$externalWriters = externalWriters_0;
  }
  Coroutine$gen_y7lps0$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$gen_y7lps0$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$gen_y7lps0$.prototype.constructor = Coroutine$gen_y7lps0$;
  Coroutine$gen_y7lps0$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$config === void 0)
              this.local$config = new AnLibrarySerializer$Config();
            this.local$buffer = ByteArrayBuffer_init(4096);
            var s = MemorySyncStream(this.local$buffer);
            this.state_0 = 2;
            this.result_0 = this.$this.write_t81cod$(s, this.local$library, this.local$config, this.local$externalWriters, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$buffer.toByteArray();
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnLibrarySerializer.prototype.write_t81cod$ = function (s, library, config, externalWriters, continuation) {
    if (config === void 0)
      config = new AnLibrarySerializer$Config();
    return this.writeLibrary_0(s, library, config, externalWriters, continuation);
  };
  AnLibrarySerializer.prototype.writeRect_0 = function ($receiver, r) {
    writeS_VL($receiver, numberToInt(r.x * 20));
    writeS_VL($receiver, numberToInt(r.y * 20));
    writeS_VL($receiver, numberToInt(r.width * 20));
    writeS_VL($receiver, numberToInt(r.height * 20));
  };
  AnLibrarySerializer.prototype.writeIRect_0 = function ($receiver, r) {
    writeS_VL($receiver, r.x);
    writeS_VL($receiver, r.y);
    writeS_VL($receiver, r.width);
    writeS_VL($receiver, r.height);
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  AnLibrarySerializer.prototype.writeLibrary_0 = function ($receiver_0, lib_0, config_0, externalWriters_0, continuation_0, suspended) {
    var instance = new Coroutine$writeLibrary_0(this, $receiver_0, lib_0, config_0, externalWriters_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$writeLibrary_0($this, $receiver_0, lib_0, config_0, externalWriters_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$strings = void 0;
    this.local$atlasBitmapsToId = void 0;
    this.local$soundsToId = void 0;
    this.local$$receiver = $receiver_0;
    this.local$lib = lib_0;
    this.local$config = config_0;
    this.local$externalWriters = externalWriters_0;
  }
  Coroutine$writeLibrary_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeLibrary_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeLibrary_0.prototype.constructor = Coroutine$writeLibrary_0;
  Coroutine$writeLibrary_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
            var tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20;
            writeStringz(this.local$$receiver, AniFile_getInstance().MAGIC, 8);
            writeU_VL(this.local$$receiver, AniFile_getInstance().VERSION);
            writeU_VL(this.local$$receiver, this.local$lib.msPerFrame);
            writeU_VL(this.local$$receiver, this.local$lib.width);
            writeU_VL(this.local$$receiver, this.local$lib.height);
            writeU_VL(this.local$$receiver, insert(insert(0, this.local$config.mipmaps, 0), !this.local$config.smoothInterpolation, 1));
            this.local$strings = new OptimizedStringAllocator();
            tmp$ = this.local$lib.symbolsById.iterator();
            while (tmp$.hasNext()) {
              var symbol = tmp$.next();
              this.local$strings.add_pdl1vj$(symbol.name);
              if (Kotlin.isType(symbol, AnSymbolMovieClip)) {
                tmp$_0 = symbol.states.entries.iterator();
                while (tmp$_0.hasNext()) {
                  var ss = tmp$_0.next();
                  this.local$strings.add_pdl1vj$(ss.key);
                  this.local$strings.add_pdl1vj$(ss.value.subTimeline.nextState);
                  tmp$_1 = ss.value.subTimeline.timelines;
                  for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
                    var timeline = tmp$_1[tmp$_2];
                    tmp$_3 = timeline.entries.iterator();
                    while (tmp$_3.hasNext()) {
                      var entry = tmp$_3.next();
                      this.local$strings.add_pdl1vj$(entry.second.name);
                    }
                  }
                  tmp$_4 = ss.value.subTimeline.actions.objects.iterator();
                  while (tmp$_4.hasNext()) {
                    var action = tmp$_4.next();
                    if (Kotlin.isType(action, AnEventAction))
                      this.local$strings.add_pdl1vj$(action.event);
                  }
                }
              }
               else if (Kotlin.isType(symbol, AnTextFieldSymbol))
                this.local$strings.add_pdl1vj$(symbol.initialHtml);
            }

            this.local$strings.finalize();
            writeU_VL(this.local$$receiver, this.local$strings.strings.length);
            tmp$_5 = drop(this.local$strings.strings, 1).iterator();
            while (tmp$_5.hasNext()) {
              var str = tmp$_5.next();
              writeStringVL(this.local$$receiver, ensureNotNull(str));
            }

            var $receiver = this.local$lib.symbolsById;
            var destination = ArrayList_init_0();
            var tmp$_21;
            tmp$_21 = $receiver.iterator();
            while (tmp$_21.hasNext()) {
              var element = tmp$_21.next();
              if (Kotlin.isType(element, AnSymbolShape))
                destination.add_11rb$(element);
            }

            var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
            var tmp$_22;
            tmp$_22 = destination.iterator();
            while (tmp$_22.hasNext()) {
              var item = tmp$_22.next();
              var tmp$_23, tmp$_24;
              destination_0.add_11rb$((tmp$_24 = (tmp$_23 = item.textureWithBitmap) != null ? tmp$_23.bitmapSlice : null) != null ? tmp$_24.bmp : null);
            }

            var $receiver_0 = this.local$lib.symbolsById;
            var destination_1 = ArrayList_init_0();
            var tmp$_25;
            tmp$_25 = $receiver_0.iterator();
            while (tmp$_25.hasNext()) {
              var element_0 = tmp$_25.next();
              if (Kotlin.isType(element_0, AnSymbolMorphShape))
                destination_1.add_11rb$(element_0);
            }

            var destination_2 = ArrayList_init_0();
            var tmp$_26;
            tmp$_26 = destination_1.iterator();
            while (tmp$_26.hasNext()) {
              var element_1 = tmp$_26.next();
              var $receiver_1 = element_1.texturesWithBitmap.entries;
              var destination_3 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
              var tmp$_27;
              tmp$_27 = $receiver_1.iterator();
              while (tmp$_27.hasNext()) {
                var item_0 = tmp$_27.next();
                destination_3.add_11rb$(item_0.second.bitmapSlice.bmp);
              }
              var list = destination_3;
              addAll(destination_2, list);
            }

            var $receiver_2 = listOf([destination_0, destination_2]);
            var destination_4 = ArrayList_init_0();
            var tmp$_28;
            tmp$_28 = $receiver_2.iterator();
            while (tmp$_28.hasNext()) {
              var element_2 = tmp$_28.next();
              var list_0 = element_2;
              addAll(destination_4, list_0);
            }

            var atlasBitmaps = distinct(filterNotNull(destination_4));
            var $receiver_3 = withIndex(atlasBitmaps);
            var destination_5 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
            var tmp$_29;
            tmp$_29 = $receiver_3.iterator();
            while (tmp$_29.hasNext()) {
              var item_1 = tmp$_29.next();
              destination_5.add_11rb$(to(item_1.value, item_1.index));
            }

            this.local$atlasBitmapsToId = toMap(destination_5);
            writeU_VL(this.local$$receiver, atlasBitmaps.size);
            this.local$tmp$_6 = this.local$atlasBitmapsToId.entries.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$_6.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var tmp$_30 = this.local$tmp$_6.next();
            var atlas = tmp$_30.key;
            var index = tmp$_30.value;
            this.state_0 = 3;
            this.result_0 = this.local$externalWriters.writeAtlas(index, atlas, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            var $receiver_4 = this.local$lib.symbolsById;
            var destination_6 = ArrayList_init_0();
            var tmp$_31;
            tmp$_31 = $receiver_4.iterator();
            while (tmp$_31.hasNext()) {
              var element_3 = tmp$_31.next();
              if (Kotlin.isType(element_3, AnSymbolSound))
                destination_6.add_11rb$(element_3);
            }

            var $receiver_5 = withIndex(destination_6);
            var destination_7 = ArrayList_init_0(collectionSizeOrDefault($receiver_5, 10));
            var tmp$_32;
            tmp$_32 = $receiver_5.iterator();
            while (tmp$_32.hasNext()) {
              var item_2 = tmp$_32.next();
              destination_7.add_11rb$(to(item_2.value, item_2.index));
            }

            this.local$soundsToId = toMap(destination_7);
            writeU_VL(this.local$$receiver, this.local$soundsToId.size);
            this.local$tmp$_7 = this.local$soundsToId.entries.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$_7.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var tmp$_33 = this.local$tmp$_7.next();
            var sound = tmp$_33.key;
            var index_0 = tmp$_33.value;
            this.state_0 = 6;
            this.result_0 = this.local$externalWriters.writeSound(index_0, (tmp$_6 = sound.dataBytes) != null ? tmp$_6 : new Int8Array([]), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.state_0 = 5;
            continue;
          case 7:
            var morphShapeCount = 0;
            var shapeCount = 0;
            var movieClipCount = 0;
            var totalFrameCount = 0;
            var totalTimelines = 0;
            writeU_VL(this.local$$receiver, this.local$lib.symbolsById.size);
            tmp$_7 = this.local$lib.symbolsById.iterator();
            while (tmp$_7.hasNext()) {
              var symbol_0 = tmp$_7.next();
              writeU_VL(this.local$$receiver, symbol_0.id);
              writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(symbol_0.name));
              if (Kotlin.isType(symbol_0, AnSymbolEmpty))
                writeU_VL(this.local$$receiver, AniFile_getInstance().SYMBOL_TYPE_EMPTY);
              else if (Kotlin.isType(symbol_0, AnSymbolSound)) {
                writeU_VL(this.local$$receiver, AniFile_getInstance().SYMBOL_TYPE_SOUND);
                writeU_VL(this.local$$receiver, ensureNotNull(this.local$soundsToId.get_11rb$(symbol_0)));
              }
               else if (Kotlin.isType(symbol_0, AnTextFieldSymbol)) {
                writeU_VL(this.local$$receiver, AniFile_getInstance().SYMBOL_TYPE_TEXT);
                writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(symbol_0.initialHtml));
                this.$this.writeRect_0(this.local$$receiver, symbol_0.bounds);
              }
               else if (Kotlin.isType(symbol_0, AnSymbolShape)) {
                shapeCount = shapeCount + 1 | 0;
                writeU_VL(this.local$$receiver, AniFile_getInstance().SYMBOL_TYPE_SHAPE);
                writeF32_le(this.local$$receiver, ensureNotNull(symbol_0.textureWithBitmap).scale);
                writeU_VL(this.local$$receiver, ensureNotNull(this.local$atlasBitmapsToId.get_11rb$(ensureNotNull(symbol_0.textureWithBitmap).bitmapSlice.bmp)));
                this.$this.writeIRect_0(this.local$$receiver, ensureNotNull(symbol_0.textureWithBitmap).bitmapSlice.bounds);
                this.$this.writeRect_0(this.local$$receiver, symbol_0.bounds);
                var path = symbol_0.path;
                if (this.local$config.keepPaths && path != null) {
                  writeU_VL(this.local$$receiver, 1);
                  writeU_VL(this.local$$receiver, path.commands.size);
                  tmp$_8 = path.commands.iterator();
                  while (tmp$_8.hasNext()) {
                    var cmd = tmp$_8.next();
                    write8(this.local$$receiver, cmd);
                  }
                  writeU_VL(this.local$$receiver, path.data.size);
                  tmp$_9 = path.data.iterator();
                  while (tmp$_9.hasNext()) {
                    var v = tmp$_9.next();
                    writeF32_le(this.local$$receiver, v);
                  }
                }
                 else {
                  writeU_VL(this.local$$receiver, 0);
                }
              }
               else if (Kotlin.isType(symbol_0, AnSymbolMorphShape)) {
                morphShapeCount = morphShapeCount + 1 | 0;
                writeU_VL(this.local$$receiver, AniFile_getInstance().SYMBOL_TYPE_MORPH_SHAPE);
                var entries = symbol_0.texturesWithBitmap.entries;
                writeU_VL(this.local$$receiver, entries.size);
                tmp$_10 = entries.iterator();
                while (tmp$_10.hasNext()) {
                  var tmp$_34 = tmp$_10.next();
                  var ratio1000 = tmp$_34.component1()
                  , textureWithBitmap = tmp$_34.component2();
                  writeU_VL(this.local$$receiver, ratio1000);
                  writeF32_le(this.local$$receiver, textureWithBitmap.scale);
                  writeU_VL(this.local$$receiver, ensureNotNull(this.local$atlasBitmapsToId.get_11rb$(textureWithBitmap.bitmapSlice.bmp)));
                  this.$this.writeRect_0(this.local$$receiver, textureWithBitmap.bounds);
                  this.$this.writeIRect_0(this.local$$receiver, textureWithBitmap.bitmapSlice.bounds);
                }
              }
               else if (Kotlin.isType(symbol_0, AnSymbolBitmap))
                writeU_VL(this.local$$receiver, AniFile_getInstance().SYMBOL_TYPE_BITMAP);
              else if (Kotlin.isType(symbol_0, AnSymbolMovieClip)) {
                movieClipCount = movieClipCount + 1 | 0;
                writeU_VL(this.local$$receiver, AniFile_getInstance().SYMBOL_TYPE_MOVIE_CLIP);
                var hasNinePatchRect = symbol_0.ninePatch != null;
                write8(this.local$$receiver, insert(0, hasNinePatchRect, 0));
                var limits = symbol_0.limits;
                writeU_VL(this.local$$receiver, limits.totalDepths);
                writeU_VL(this.local$$receiver, limits.totalFrames);
                writeU_VL(this.local$$receiver, limits.totalTime);
                writeU_VL(this.local$$receiver, limits.totalUids);
                tmp$_11 = symbol_0.uidInfo;
                for (tmp$_12 = 0; tmp$_12 !== tmp$_11.length; ++tmp$_12) {
                  var uidInfo = tmp$_11[tmp$_12];
                  writeU_VL(this.local$$receiver, uidInfo.characterId);
                  var tmp$_35;
                  if (!uidInfo.extraProps.isEmpty()) {
                    var $this = json.Json;
                    var obj = uidInfo.extraProps;
                    var mapper;
                    mapper = serialization.Mapper;
                    var tmp$_36;
                    if (false) {
                      tmp$_36 = $this.encodePrettyUntyped_hvn9da$(mapper.toUntyped_b1ce0a$(getKClass(MutableMap), obj));
                    }
                     else {
                      tmp$_36 = $this.encodeUntyped_s8jyv4$(mapper.toUntyped_b1ce0a$(getKClass(MutableMap), obj));
                    }
                    tmp$_35 = tmp$_36;
                  }
                   else
                    tmp$_35 = '';
                  writeStringVL(this.local$$receiver, tmp$_35);
                }
                var $receiver_6 = symbol_0.states;
                var destination_8 = ArrayList_init_0($receiver_6.size);
                var tmp$_37;
                tmp$_37 = $receiver_6.entries.iterator();
                while (tmp$_37.hasNext()) {
                  var item_3 = tmp$_37.next();
                  destination_8.add_11rb$(item_3.value.subTimeline);
                }
                var symbolStates = distinct(toList_0(destination_8));
                var $receiver_7 = withIndex(symbolStates);
                var destination_9 = ArrayList_init_0(collectionSizeOrDefault($receiver_7, 10));
                var tmp$_38;
                tmp$_38 = $receiver_7.iterator();
                while (tmp$_38.hasNext()) {
                  var item_4 = tmp$_38.next();
                  destination_9.add_11rb$(to(item_4.value, item_4.index));
                }
                var symbolStateToIndex = toMap(destination_9);
                if (hasNinePatchRect) {
                  this.$this.writeRect_0(this.local$$receiver, ensureNotNull(symbol_0.ninePatch));
                }
                writeU_VL(this.local$$receiver, symbolStates.size);
                tmp$_13 = symbolStates.iterator();
                while (tmp$_13.hasNext()) {
                  var ss_0 = tmp$_13.next();
                  writeU_VL(this.local$$receiver, ss_0.totalTime);
                  write8(this.local$$receiver, insert(0, ss_0.nextStatePlay, 0));
                  writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(ss_0.nextState));
                  var lastFrameTimeMs = 0;
                  var $receiver_8 = ss_0.actions.entries;
                  var destination_10 = LinkedHashMap_init();
                  var tmp$_39;
                  tmp$_39 = $receiver_8.iterator();
                  while (tmp$_39.hasNext()) {
                    var element_4 = tmp$_39.next();
                    var key = element_4.first;
                    var tmp$_0_0;
                    var value = destination_10.get_11rb$(key);
                    if (value == null) {
                      var answer = ArrayList_init_0();
                      destination_10.put_xwzc9p$(key, answer);
                      tmp$_0_0 = answer;
                    }
                     else {
                      tmp$_0_0 = value;
                    }
                    var list_1 = tmp$_0_0;
                    list_1.add_11rb$(element_4);
                  }
                  var actionsPerTime = destination_10;
                  writeU_VL(this.local$$receiver, actionsPerTime.size);
                  tmp$_14 = actionsPerTime.entries.iterator();
                  while (tmp$_14.hasNext()) {
                    var tmp$_40 = tmp$_14.next();
                    var timeInMicro = tmp$_40.key;
                    var actions = tmp$_40.value;
                    var timeInMs = timeInMicro / 1000 | 0;
                    writeU_VL(this.local$$receiver, timeInMs - lastFrameTimeMs | 0);
                    lastFrameTimeMs = timeInMs;
                    writeU_VL(this.local$$receiver, actions.size);
                    tmp$_15 = actions.iterator();
                    while (tmp$_15.hasNext()) {
                      var actionInfo = tmp$_15.next();
                      var action_0 = actionInfo.second;
                      if (Kotlin.isType(action_0, AnPlaySoundAction)) {
                        write8(this.local$$receiver, 0);
                        writeU_VL(this.local$$receiver, action_0.soundId);
                      }
                       else if (Kotlin.isType(action_0, AnEventAction)) {
                        write8(this.local$$receiver, 1);
                        writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(action_0.event));
                      }
                       else {
                        throw new NotImplementedError_init();
                      }
                    }
                  }
                  tmp$_16 = ss_0.timelines;
                  for (tmp$_17 = 0; tmp$_17 !== tmp$_16.length; ++tmp$_17) {
                    var timeline_0 = tmp$_16[tmp$_17];
                    totalTimelines = totalTimelines + 1 | 0;
                    var frames = timeline_0.entries;
                    var lastUid = -1;
                    var lastName = null;
                    var lastColorTransform = new ColorTransform();
                    var lastMatrix = new Matrix2d();
                    var lastClipDepth = -1;
                    var lastRatio = 0.0;
                    var lastBlendMode = BlendMode$INHERIT_getInstance();
                    writeU_VL(this.local$$receiver, frames.size);
                    var lastFrameTime = 0;
                    tmp$_18 = frames.iterator();
                    while (tmp$_18.hasNext()) {
                      var tmp$_41 = tmp$_18.next();
                      var frameTime = tmp$_41.component1()
                      , frame = tmp$_41.component2();
                      var storeFrameTime = frameTime / 1000 | 0;
                      totalFrameCount = totalFrameCount + 1 | 0;
                      writeU_VL(this.local$$receiver, storeFrameTime - lastFrameTime | 0);
                      lastFrameTime = storeFrameTime;
                      var ct = frame.colorTransform;
                      var m = frame.transform;
                      var hasUid = frame.uid !== lastUid;
                      var hasName = !equals(frame.name, lastName);
                      var hasColorTransform = !(ct != null ? ct.equals(lastColorTransform) : null);
                      var hasBlendMode = frame.blendMode !== lastBlendMode;
                      var hasAlpha = ct.mR === lastColorTransform.mR && ct.mG === lastColorTransform.mG && ct.mB === lastColorTransform.mB && ct.mA !== lastColorTransform.mA && ct.aR === lastColorTransform.aR && ct.aG === lastColorTransform.aG && ct.aB === lastColorTransform.aB && ct.aA === lastColorTransform.aA;
                      var hasClipDepth = frame.clipDepth !== lastClipDepth;
                      var hasRatio = frame.ratio !== lastRatio;
                      var hasMatrix = !(m != null ? m.equals(lastMatrix) : null);
                      write8(this.local$$receiver, insert(insert(insert(insert(insert(insert(insert(insert(0, hasUid, 0), hasName, 1), hasColorTransform, 2), hasMatrix, 3), hasClipDepth, 4), hasRatio, 5), hasAlpha, 6), hasBlendMode, 7));
                      if (hasUid)
                        writeU_VL(this.local$$receiver, frame.uid);
                      if (hasClipDepth)
                        write16_le(this.local$$receiver, frame.clipDepth);
                      if (hasName)
                        writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(frame.name));
                      if (hasAlpha) {
                        write8(this.local$$receiver, clamp(numberToInt(ct.mA * 255.0), 0, 255));
                      }
                       else if (hasColorTransform) {
                        var hasMR = ct.mR !== lastColorTransform.mR;
                        var hasMG = ct.mG !== lastColorTransform.mG;
                        var hasMB = ct.mB !== lastColorTransform.mB;
                        var hasMA = ct.mA !== lastColorTransform.mA;
                        var hasAR = ct.aR !== lastColorTransform.aR;
                        var hasAG = ct.aG !== lastColorTransform.aG;
                        var hasAB = ct.aB !== lastColorTransform.aB;
                        var hasAA = ct.aA !== lastColorTransform.aA;
                        write8(this.local$$receiver, insert(insert(insert(insert(insert(insert(insert(insert(0, hasMR, 0), hasMG, 1), hasMB, 2), hasMA, 3), hasAR, 4), hasAG, 5), hasAB, 6), hasAA, 7));
                        if (hasMR)
                          write8(this.local$$receiver, numberToInt(clamp_0(ct.mR, 0.0, 1.0) * 255.0));
                        if (hasMG)
                          write8(this.local$$receiver, numberToInt(clamp_0(ct.mG, 0.0, 1.0) * 255.0));
                        if (hasMB)
                          write8(this.local$$receiver, numberToInt(clamp_0(ct.mB, 0.0, 1.0) * 255.0));
                        if (hasMA)
                          write8(this.local$$receiver, numberToInt(clamp_0(ct.mA, 0.0, 1.0) * 255.0));
                        if (hasAR)
                          write8(this.local$$receiver, clamp(ct.aR, -255, 255) / 2 | 0);
                        if (hasAG)
                          write8(this.local$$receiver, clamp(ct.aG, -255, 255) / 2 | 0);
                        if (hasAB)
                          write8(this.local$$receiver, clamp(ct.aB, -255, 255) / 2 | 0);
                        if (hasAA)
                          write8(this.local$$receiver, clamp(ct.aA, -255, 255) / 2 | 0);
                      }
                      if (hasMatrix) {
                        var hasMatrixA = m.a !== lastMatrix.a;
                        var hasMatrixB = m.b !== lastMatrix.b;
                        var hasMatrixC = m.c !== lastMatrix.c;
                        var hasMatrixD = m.d !== lastMatrix.d;
                        var hasMatrixTX = m.tx !== lastMatrix.tx;
                        var hasMatrixTY = m.ty !== lastMatrix.ty;
                        write8(this.local$$receiver, insert(insert(insert(insert(insert(insert(0, hasMatrixA, 0), hasMatrixB, 1), hasMatrixC, 2), hasMatrixD, 3), hasMatrixTX, 4), hasMatrixTY, 5));
                        if (hasMatrixA)
                          writeS_VL(this.local$$receiver, numberToInt(m.a * 16384));
                        if (hasMatrixB)
                          writeS_VL(this.local$$receiver, numberToInt(m.b * 16384));
                        if (hasMatrixC)
                          writeS_VL(this.local$$receiver, numberToInt(m.c * 16384));
                        if (hasMatrixD)
                          writeS_VL(this.local$$receiver, numberToInt(m.d * 16384));
                        if (hasMatrixTX)
                          writeS_VL(this.local$$receiver, numberToInt(m.tx * 20));
                        if (hasMatrixTY)
                          writeS_VL(this.local$$receiver, numberToInt(m.ty * 20));
                      }
                      if (hasRatio)
                        write8(this.local$$receiver, clamp(numberToInt(frame.ratio * 255), 0, 255));
                      if (hasBlendMode) {
                        write8(this.local$$receiver, frame.blendMode.ordinal);
                      }
                      lastUid = frame.uid;
                      lastName = frame.name;
                      lastColorTransform = frame.colorTransform;
                      lastMatrix = m;
                      lastClipDepth = frame.clipDepth;
                      lastRatio = frame.ratio;
                      lastBlendMode = frame.blendMode;
                    }
                  }
                }
                writeU_VL(this.local$$receiver, symbol_0.states.size);
                tmp$_19 = symbol_0.states.entries.iterator();
                while (tmp$_19.hasNext()) {
                  var tmp$_42 = tmp$_19.next();
                  var name = tmp$_42.key;
                  var ssi = tmp$_42.value;
                  var stateIndex = (tmp$_20 = symbolStateToIndex.get_11rb$(ssi.subTimeline)) != null ? tmp$_20 : 0;
                  writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(name));
                  writeU_VL(this.local$$receiver, ssi.startTime);
                  writeU_VL(this.local$$receiver, stateIndex);
                }
              }
            }

            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AnLibrarySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AnLibrarySerializer',
    interfaces: []
  };
  var AnLibrarySerializer_instance = null;
  function AnLibrarySerializer_getInstance() {
    if (AnLibrarySerializer_instance === null) {
      new AnLibrarySerializer();
    }
    return AnLibrarySerializer_instance;
  }
  function AniFile() {
    AniFile_instance = this;
    this.MAGIC = 'KORGEANI';
    this.VERSION = 16;
    this.SYMBOL_TYPE_EMPTY = 0;
    this.SYMBOL_TYPE_SOUND = 1;
    this.SYMBOL_TYPE_TEXT = 2;
    this.SYMBOL_TYPE_SHAPE = 3;
    this.SYMBOL_TYPE_BITMAP = 4;
    this.SYMBOL_TYPE_MOVIE_CLIP = 5;
    this.SYMBOL_TYPE_MORPH_SHAPE = 6;
  }
  AniFile.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AniFile',
    interfaces: []
  };
  var AniFile_instance = null;
  function AniFile_getInstance() {
    if (AniFile_instance === null) {
      new AniFile();
    }
    return AniFile_instance;
  }
  function OptimizedStringAllocator() {
    this.finalized_0 = false;
    this.stringsCount_0 = HashMap_init();
    this.strings_pn0ab4$_0 = [];
    this.stringsToIndex_0 = HashMap_init();
  }
  Object.defineProperty(OptimizedStringAllocator.prototype, 'strings', {
    get: function () {
      return this.strings_pn0ab4$_0;
    },
    set: function (strings) {
      this.strings_pn0ab4$_0 = strings;
    }
  });
  var Map = Kotlin.kotlin.collections.Map;
  OptimizedStringAllocator.prototype.add_pdl1vj$ = function (str) {
    if (this.finalized_0)
      throw new IllegalStateException();
    if (str != null) {
      var $receiver = this.stringsCount_0;
      var tmp$;
      if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(str)) {
        this.stringsCount_0.put_xwzc9p$(str, 0);
      }
      var $receiver_0 = this.stringsCount_0;
      var value = ensureNotNull(this.stringsCount_0.get_11rb$(str)) + 1 | 0;
      $receiver_0.put_xwzc9p$(str, value);
    }
  };
  OptimizedStringAllocator.prototype.get_pdl1vj$ = function (str) {
    return this.getIndex_pdl1vj$(str);
  };
  OptimizedStringAllocator.prototype.getIndex_pdl1vj$ = function (str) {
    if (!this.finalized_0)
      throw new IllegalStateException();
    if (str == null) {
      return 0;
    }
     else {
      return ensureNotNull(this.stringsToIndex_0.get_11rb$(str));
    }
  };
  function OptimizedStringAllocator$finalize$lambda(it) {
    return it.value;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  OptimizedStringAllocator.prototype.finalize = function () {
    var tmp$;
    var tmp$_0 = [null];
    var $receiver = sortedWith(this.stringsCount_0.entries, new Comparator$ObjectLiteral(compareByDescending$lambda(OptimizedStringAllocator$finalize$lambda)));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(item.key);
    }
    var elements = copyToArray(destination);
    this.strings = tmp$_0.concat(elements);
    tmp$ = this.strings.length;
    for (var n = 1; n < tmp$; n++) {
      var $receiver_0 = this.stringsToIndex_0;
      var key = ensureNotNull(this.strings[n]);
      $receiver_0.put_xwzc9p$(key, n);
    }
    this.finalized_0 = true;
  };
  OptimizedStringAllocator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptimizedStringAllocator',
    interfaces: []
  };
  function AtlasPlugin() {
    AtlasPlugin_instance = this;
    KorgePlugin.call(this);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Meta), AtlasPlugin_init$lambda);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Rect), AtlasPlugin_init$lambda_0);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Size), AtlasPlugin_init$lambda_1);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Entry), AtlasPlugin_init$lambda_2);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo), AtlasPlugin_init$lambda_3);
  }
  function AtlasPlugin$register$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$AtlasPlugin$register$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$AtlasPlugin$register$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$AtlasPlugin$register$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AtlasPlugin$register$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AtlasPlugin$register$lambda.prototype.constructor = Coroutine$AtlasPlugin$register$lambda;
  Coroutine$AtlasPlugin$register$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(Path), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(VPath), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(Views), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(ResourcesRoot), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            return new Atlas$Factory(this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.result_0);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AtlasPlugin.prototype.register_gohfjx$ = function (views_0, continuation_0, suspended) {
    var instance = new Coroutine$register_gohfjx$_0(this, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$register_gohfjx$_0($this, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$views = views_0;
  }
  Coroutine$register_gohfjx$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$register_gohfjx$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$register_gohfjx$_0.prototype.constructor = Coroutine$register_gohfjx$_0;
  Coroutine$register_gohfjx$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$views.injector.mapFactory_mvlsy$(getKClass(Atlas), AtlasPlugin$register$lambda);
            return;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function AtlasPlugin_init$lambda($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'app');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'format');
    var tmp$_0 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'image');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_2);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'scale');
    var tmp$_2 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_3);
    var $receiver_4 = $receiver.get_uozw8h$(it, 'size');
    var tmp$_3 = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Size), $receiver_4);
    var $receiver_5 = $receiver.get_uozw8h$(it, 'version');
    return new AtlasInfo$Meta(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_5));
  }
  function AtlasPlugin_init$lambda_0($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'x');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'y');
    var tmp$_0 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'w');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_2);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'h');
    return new AtlasInfo$Rect(tmp$, tmp$_0, tmp$_1, $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_3));
  }
  function AtlasPlugin_init$lambda_1($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'w');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'h');
    return new AtlasInfo$Size(tmp$, $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_1));
  }
  function AtlasPlugin_init$lambda_2($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'frame');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Rect), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'rotated');
    var tmp$_0 = $receiver.map.toTyped_bju3lo$(getKClass(Boolean_0), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'source');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Size), $receiver_2);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'spriteSourceSize');
    var tmp$_2 = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Rect), $receiver_3);
    var $receiver_4 = $receiver.get_uozw8h$(it, 'trimmed');
    return new AtlasInfo$Entry(tmp$, tmp$_0, tmp$_1, tmp$_2, $receiver.map.toTyped_bju3lo$(getKClass(Boolean_0), $receiver_4));
  }
  var toLinkedMap = $module$korio_js.$$importsForInline$$['kds-js'].com.soywiz.kds.toLinkedMap_6hr0sd$;
  var ObjectMapper$TypeContext$genMap$lambda = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (typeClosure$K, isK, this$TypeContext, typeClosure$V, isV) {
      return function (it) {
        var $this = this$TypeContext;
        var T_0 = typeClosure$K;
        var $receiver = it.key;
        var tmp$ = $this.map.toTyped_bju3lo$(getKClass(T_0), $receiver);
        var $this_0 = this$TypeContext;
        var T_0_0 = typeClosure$V;
        var $receiver_0 = it.value;
        return to(tmp$, $this_0.map.toTyped_bju3lo$(getKClass(T_0_0), $receiver_0));
      };
    };
  });
  function AtlasPlugin_init$lambda_3($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'frames');
    var $receiver_0_0 = $receiver.toDynamicMap_mzud1t$($receiver_0);
    var destination = ArrayList_init_0($receiver_0_0.size);
    var tmp$;
    tmp$ = $receiver_0_0.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_1 = item.key;
      var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_1);
      var $receiver_2 = item.value;
      tmp$_0.call(destination, to(tmp$_1, $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Entry), $receiver_2)));
    }
    var tmp$_2 = toLinkedMap(destination);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'meta');
    return new AtlasInfo(tmp$_2, $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Meta), $receiver_3));
  }
  AtlasPlugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AtlasPlugin',
    interfaces: [KorgePlugin]
  };
  var AtlasPlugin_instance = null;
  function AtlasPlugin_getInstance() {
    if (AtlasPlugin_instance === null) {
      new AtlasPlugin();
    }
    return AtlasPlugin_instance;
  }
  function Atlas(info) {
    this.info = info;
    this.textures = HashMap_init();
  }
  Atlas.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.textures.get_11rb$(name)) != null ? tmp$ : invalidOp("Can't find texture '" + name + "' in atlas");
  };
  Atlas.prototype.load_kwkuts$ = function (views_0, folder_0, continuation_0, suspended) {
    var instance = new Coroutine$load_kwkuts$(this, views_0, folder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$load_kwkuts$($this, views_0, folder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$closure$continuation = void 0;
    this.local$views = views_0;
    this.local$folder = folder_0;
  }
  Coroutine$load_kwkuts$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load_kwkuts$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load_kwkuts$.prototype.constructor = Coroutine$load_kwkuts$;
  Coroutine$load_kwkuts$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$continuation = this;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = readTexture(this.local$folder.get_61zpoe$(this.$this.info.image), this.local$views, void 0, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var atlasTex = this.local$closure$continuation.result_0;
            tmp$ = this.$this.info.frames.entries.iterator();
            while (tmp$.hasNext()) {
              var tmp$_0 = tmp$.next();
              var frameName = tmp$_0.key;
              var frame = tmp$_0.value;
              var $receiver = this.$this.textures;
              var value = new TransformedTexture(atlasTex.slice_2da8yn$(frame.frame.rect), frame.spriteSourceSize.x, frame.spriteSourceSize.y, frame.rotated);
              $receiver.put_xwzc9p$(frameName, value);
            }

            return this.$this;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Atlas$Factory(path, vpath, views, resourcesRoot) {
    this.path = path;
    this.vpath = vpath;
    this.views = views;
    this.resourcesRoot = resourcesRoot;
  }
  Atlas$Factory.prototype.create = function (continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var rpath = (tmp$_2 = (tmp$_1 = (tmp$ = this.path) != null ? tmp$.path : null) != null ? tmp$_1 : (tmp$_0 = this.vpath) != null ? tmp$_0.path : null) != null ? tmp$_2 : '';
    if (endsWith(rpath, '.atlas')) {
      return readAtlas(this.resourcesRoot.get_61zpoe$(rpath).appendExtension_61zpoe$('json'), this.views, continuation);
    }
     else {
      return readAtlas(this.resourcesRoot.get_61zpoe$(rpath), this.views, continuation);
    }
  };
  Atlas$Factory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [AsyncFactory]
  };
  Atlas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Atlas',
    interfaces: []
  };
  function readAtlas($receiver_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$readAtlas($receiver_0, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAtlas($receiver_0, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
  }
  Coroutine$readAtlas.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAtlas.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAtlas.prototype.constructor = Coroutine$readAtlas;
  Coroutine$readAtlas.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = AtlasInfo$Companion_getInstance();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = (new Atlas(this.local$tmp$.loadJsonSpriter_61zpoe$(this.result_0))).load_kwkuts$(this.local$views, this.local$$receiver.parent, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function AtlasInfo(frames, meta) {
    AtlasInfo$Companion_getInstance();
    this.frames = frames;
    this.meta = meta;
  }
  function AtlasInfo$Rect(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  Object.defineProperty(AtlasInfo$Rect.prototype, 'rect', {
    get: function () {
      return Rectangle_init(this.x, this.y, this.w, this.h);
    }
  });
  AtlasInfo$Rect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rect',
    interfaces: []
  };
  AtlasInfo$Rect.prototype.component1 = function () {
    return this.x;
  };
  AtlasInfo$Rect.prototype.component2 = function () {
    return this.y;
  };
  AtlasInfo$Rect.prototype.component3 = function () {
    return this.w;
  };
  AtlasInfo$Rect.prototype.component4 = function () {
    return this.h;
  };
  AtlasInfo$Rect.prototype.copy_tjonv8$ = function (x, y, w, h) {
    return new AtlasInfo$Rect(x === void 0 ? this.x : x, y === void 0 ? this.y : y, w === void 0 ? this.w : w, h === void 0 ? this.h : h);
  };
  AtlasInfo$Rect.prototype.toString = function () {
    return 'Rect(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', w=' + Kotlin.toString(this.w)) + (', h=' + Kotlin.toString(this.h)) + ')';
  };
  AtlasInfo$Rect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    return result;
  };
  AtlasInfo$Rect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h)))));
  };
  function AtlasInfo$Size(w, h) {
    this.w = w;
    this.h = h;
  }
  var Size_init = $module$korma_js.com.soywiz.korma.geom.Size;
  Object.defineProperty(AtlasInfo$Size.prototype, 'size', {
    get: function () {
      var width = this.w;
      var height = this.h;
      return new Size_init(numberToDouble(width), numberToDouble(height));
    }
  });
  AtlasInfo$Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: []
  };
  AtlasInfo$Size.prototype.component1 = function () {
    return this.w;
  };
  AtlasInfo$Size.prototype.component2 = function () {
    return this.h;
  };
  AtlasInfo$Size.prototype.copy_vux9f0$ = function (w, h) {
    return new AtlasInfo$Size(w === void 0 ? this.w : w, h === void 0 ? this.h : h);
  };
  AtlasInfo$Size.prototype.toString = function () {
    return 'Size(w=' + Kotlin.toString(this.w) + (', h=' + Kotlin.toString(this.h)) + ')';
  };
  AtlasInfo$Size.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    return result;
  };
  AtlasInfo$Size.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h)))));
  };
  function AtlasInfo$Meta(app, format, image, scale, size, version) {
    this.app = app;
    this.format = format;
    this.image = image;
    this.scale = scale;
    this.size = size;
    this.version = version;
  }
  AtlasInfo$Meta.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Meta',
    interfaces: []
  };
  AtlasInfo$Meta.prototype.component1 = function () {
    return this.app;
  };
  AtlasInfo$Meta.prototype.component2 = function () {
    return this.format;
  };
  AtlasInfo$Meta.prototype.component3 = function () {
    return this.image;
  };
  AtlasInfo$Meta.prototype.component4 = function () {
    return this.scale;
  };
  AtlasInfo$Meta.prototype.component5 = function () {
    return this.size;
  };
  AtlasInfo$Meta.prototype.component6 = function () {
    return this.version;
  };
  AtlasInfo$Meta.prototype.copy_qfz0c5$ = function (app, format, image, scale, size, version) {
    return new AtlasInfo$Meta(app === void 0 ? this.app : app, format === void 0 ? this.format : format, image === void 0 ? this.image : image, scale === void 0 ? this.scale : scale, size === void 0 ? this.size : size, version === void 0 ? this.version : version);
  };
  AtlasInfo$Meta.prototype.toString = function () {
    return 'Meta(app=' + Kotlin.toString(this.app) + (', format=' + Kotlin.toString(this.format)) + (', image=' + Kotlin.toString(this.image)) + (', scale=' + Kotlin.toString(this.scale)) + (', size=' + Kotlin.toString(this.size)) + (', version=' + Kotlin.toString(this.version)) + ')';
  };
  AtlasInfo$Meta.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.app) | 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    return result;
  };
  AtlasInfo$Meta.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.app, other.app) && Kotlin.equals(this.format, other.format) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.version, other.version)))));
  };
  function AtlasInfo$Entry(frame, rotated, sourceSize, spriteSourceSize, trimmed) {
    this.frame = frame;
    this.rotated = rotated;
    this.sourceSize = sourceSize;
    this.spriteSourceSize = spriteSourceSize;
    this.trimmed = trimmed;
  }
  AtlasInfo$Entry.prototype.applyRotation = function () {
    if (this.rotated) {
      return this.copy_sdu7fd$(this.frame.copy_tjonv8$(void 0, void 0, this.frame.h, this.frame.w), void 0, void 0, this.spriteSourceSize.copy_tjonv8$(this.spriteSourceSize.y, this.spriteSourceSize.x, this.spriteSourceSize.h, this.spriteSourceSize.w));
    }
     else {
      return this;
    }
  };
  AtlasInfo$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  AtlasInfo$Entry.prototype.component1 = function () {
    return this.frame;
  };
  AtlasInfo$Entry.prototype.component2 = function () {
    return this.rotated;
  };
  AtlasInfo$Entry.prototype.component3 = function () {
    return this.sourceSize;
  };
  AtlasInfo$Entry.prototype.component4 = function () {
    return this.spriteSourceSize;
  };
  AtlasInfo$Entry.prototype.component5 = function () {
    return this.trimmed;
  };
  AtlasInfo$Entry.prototype.copy_sdu7fd$ = function (frame, rotated, sourceSize, spriteSourceSize, trimmed) {
    return new AtlasInfo$Entry(frame === void 0 ? this.frame : frame, rotated === void 0 ? this.rotated : rotated, sourceSize === void 0 ? this.sourceSize : sourceSize, spriteSourceSize === void 0 ? this.spriteSourceSize : spriteSourceSize, trimmed === void 0 ? this.trimmed : trimmed);
  };
  AtlasInfo$Entry.prototype.toString = function () {
    return 'Entry(frame=' + Kotlin.toString(this.frame) + (', rotated=' + Kotlin.toString(this.rotated)) + (', sourceSize=' + Kotlin.toString(this.sourceSize)) + (', spriteSourceSize=' + Kotlin.toString(this.spriteSourceSize)) + (', trimmed=' + Kotlin.toString(this.trimmed)) + ')';
  };
  AtlasInfo$Entry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.frame) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotated) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.spriteSourceSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.trimmed) | 0;
    return result;
  };
  AtlasInfo$Entry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.frame, other.frame) && Kotlin.equals(this.rotated, other.rotated) && Kotlin.equals(this.sourceSize, other.sourceSize) && Kotlin.equals(this.spriteSourceSize, other.spriteSourceSize) && Kotlin.equals(this.trimmed, other.trimmed)))));
  };
  Object.defineProperty(AtlasInfo.prototype, 'app', {
    get: function () {
      return this.meta.app;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'format', {
    get: function () {
      return this.meta.format;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'image', {
    get: function () {
      return this.meta.image;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'scale', {
    get: function () {
      return this.meta.scale;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'size', {
    get: function () {
      return this.meta.size;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'version', {
    get: function () {
      return this.meta.version;
    }
  });
  function AtlasInfo$Companion() {
    AtlasInfo$Companion_instance = this;
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Rect), AtlasInfo$AtlasInfo$Companion_init$lambda);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Size), AtlasInfo$AtlasInfo$Companion_init$lambda_0);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Entry), AtlasInfo$AtlasInfo$Companion_init$lambda_1);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Meta), AtlasInfo$AtlasInfo$Companion_init$lambda_2);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo), AtlasInfo$AtlasInfo$Companion_init$lambda_3);
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  AtlasInfo$Companion.prototype.loadJsonSpriter_61zpoe$ = function (json_0) {
    var info = json.Json.decodeToType_ye3lh8$(getKClass(AtlasInfo), json_0);
    var $receiver = info.frames;
    var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.key, element.value.applyRotation());
    }
    return info.copy_vxh60e$(destination);
  };
  function AtlasInfo$AtlasInfo$Companion_init$lambda($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'x');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'y');
    var tmp$_0 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'w');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_2);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'h');
    return new AtlasInfo$Rect(tmp$, tmp$_0, tmp$_1, $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_3));
  }
  function AtlasInfo$AtlasInfo$Companion_init$lambda_0($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'w');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'h');
    return new AtlasInfo$Size(tmp$, $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_1));
  }
  function AtlasInfo$AtlasInfo$Companion_init$lambda_1($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'frame');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Rect), $receiver_0);
    var tmp$_0 = toBool2(lang.Dynamic, $receiver.get_uozw8h$(it, 'rotated'));
    var $receiver_1 = $receiver.get_uozw8h$(it, 'sourceSize');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Size), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'spriteSourceSize');
    return new AtlasInfo$Entry(tmp$, tmp$_0, tmp$_1, $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Rect), $receiver_2), toBool2(lang.Dynamic, $receiver.get_uozw8h$(it, 'trimmed')));
  }
  function AtlasInfo$AtlasInfo$Companion_init$lambda_2($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'app');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'format');
    var tmp$_0 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'image');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_2);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'scale');
    var tmp$_2 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_3);
    var $receiver_4 = $receiver.get_uozw8h$(it, 'size');
    var tmp$_3 = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Size), $receiver_4);
    var $receiver_5 = $receiver.get_uozw8h$(it, 'version');
    return new AtlasInfo$Meta(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_5));
  }
  var ObjectMapper$TypeContext$genMap$lambda_0 = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (typeClosure$K, isK, this$TypeContext, typeClosure$V, isV) {
      return function (it) {
        var $this = this$TypeContext;
        var T_0 = typeClosure$K;
        var $receiver = it.key;
        var tmp$ = $this.map.toTyped_bju3lo$(getKClass(T_0), $receiver);
        var $this_0 = this$TypeContext;
        var T_0_0 = typeClosure$V;
        var $receiver_0 = it.value;
        return to(tmp$, $this_0.map.toTyped_bju3lo$(getKClass(T_0_0), $receiver_0));
      };
    };
  });
  function AtlasInfo$AtlasInfo$Companion_init$lambda_3($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'frames');
    var $receiver_0_0 = $receiver.toDynamicMap_mzud1t$($receiver_0);
    var destination = ArrayList_init_0($receiver_0_0.size);
    var tmp$;
    tmp$ = $receiver_0_0.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_1 = item.key;
      var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_1);
      var $receiver_2 = item.value;
      tmp$_0.call(destination, to(tmp$_1, $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Entry), $receiver_2)));
    }
    var tmp$_2 = toLinkedMap(destination);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'meta');
    return new AtlasInfo(tmp$_2, $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Meta), $receiver_3));
  }
  AtlasInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AtlasInfo$Companion_instance = null;
  function AtlasInfo$Companion_getInstance() {
    if (AtlasInfo$Companion_instance === null) {
      new AtlasInfo$Companion();
    }
    return AtlasInfo$Companion_instance;
  }
  function AtlasInfo$Factory(path, views, resourcesRoot) {
    this.path = path;
    this.views = views;
    this.resourcesRoot = resourcesRoot;
  }
  AtlasInfo$Factory.prototype.create = function (continuation_0, suspended) {
    var instance = new Coroutine$create_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$create_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$create_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$create_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$create_0.prototype.constructor = Coroutine$create_0;
  Coroutine$create_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = AtlasInfo$Companion_getInstance();
            this.state_0 = 2;
            this.result_0 = this.$this.resourcesRoot.get_xre72y$(this.$this.path).readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$tmp$.loadJsonSpriter_61zpoe$(this.result_0);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AtlasInfo$Factory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [AsyncFactory]
  };
  AtlasInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtlasInfo',
    interfaces: []
  };
  AtlasInfo.prototype.component1 = function () {
    return this.frames;
  };
  AtlasInfo.prototype.component2 = function () {
    return this.meta;
  };
  AtlasInfo.prototype.copy_vxh60e$ = function (frames, meta) {
    return new AtlasInfo(frames === void 0 ? this.frames : frames, meta === void 0 ? this.meta : meta);
  };
  AtlasInfo.prototype.toString = function () {
    return 'AtlasInfo(frames=' + Kotlin.toString(this.frames) + (', meta=' + Kotlin.toString(this.meta)) + ')';
  };
  AtlasInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.frames) | 0;
    result = result * 31 + Kotlin.hashCode(this.meta) | 0;
    return result;
  };
  AtlasInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.frames, other.frames) && Kotlin.equals(this.meta, other.meta)))));
  };
  function SoundPlugin() {
    SoundPlugin_instance = this;
    KorgePlugin.call(this);
    registerNativeSoundSpecialReader();
  }
  function SoundPlugin$register$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SoundPlugin$register$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SoundPlugin$register$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SoundPlugin$register$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SoundPlugin$register$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SoundPlugin$register$lambda.prototype.constructor = Coroutine$SoundPlugin$register$lambda;
  Coroutine$SoundPlugin$register$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(Path), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(VPath), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(ResourcesRoot), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(SoundSystem), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            return new SoundFile$Factory(this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.result_0);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SoundPlugin.prototype.register_gohfjx$ = function (views_0, continuation_0, suspended) {
    var instance = new Coroutine$register_gohfjx$_1(this, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$register_gohfjx$_1($this, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$views = views_0;
  }
  Coroutine$register_gohfjx$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$register_gohfjx$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$register_gohfjx$_1.prototype.constructor = Coroutine$register_gohfjx$_1;
  Coroutine$register_gohfjx$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$views.injector.mapFactory_mvlsy$(getKClass(SoundFile), SoundPlugin$register$lambda);
            return;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SoundPlugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundPlugin',
    interfaces: [KorgePlugin]
  };
  var SoundPlugin_instance = null;
  function SoundPlugin_getInstance() {
    if (SoundPlugin_instance === null) {
      new SoundPlugin();
    }
    return SoundPlugin_instance;
  }
  function SoundSystem(views) {
    this.views = views;
    this.promises_8be2vx$ = LinkedHashSet_init();
  }
  SoundSystem.prototype.init = function (continuation_0, suspended) {
    var instance = new Coroutine$init(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$init.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init.prototype.constructor = Coroutine$init;
  Coroutine$init.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = sound.nativeSoundProvider.init(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SoundSystem.prototype.play_ycqh51$ = function (file) {
    return this.createChannel().play_eej0pj$(file.nativeSound);
  };
  SoundSystem.prototype.play_eej0pj$ = function (nativeSound) {
    return this.createChannel().play_eej0pj$(nativeSound);
  };
  SoundSystem.prototype.createChannel = function () {
    return new SoundChannel(this);
  };
  SoundSystem.prototype.close = function () {
    var tmp$;
    tmp$ = this.promises_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var promise = tmp$.next();
      promise.cancel_tcv7n7$();
    }
    this.promises_8be2vx$.clear();
  };
  SoundSystem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundSystem',
    interfaces: [AsyncDependency]
  };
  function SoundChannel(soundSystem) {
    this.soundSystem = soundSystem;
    this.enabled = true;
    this.playing_kk5vyu$_0 = false;
    this.length_pwc0i2$_0 = 0;
    this.startedTime_0 = Kotlin.Long.ZERO;
    this.promise_0 = null;
  }
  Object.defineProperty(SoundChannel.prototype, 'playing', {
    get: function () {
      return this.playing_kk5vyu$_0;
    },
    set: function (playing) {
      this.playing_kk5vyu$_0 = playing;
    }
  });
  Object.defineProperty(SoundChannel.prototype, 'position', {
    get: function () {
      var tmp$;
      if (this.playing) {
        tmp$ = TimeProvider.Companion.now().subtract(this.startedTime_0).toInt();
      }
       else {
        tmp$ = 0;
      }
      return tmp$;
    }
  });
  Object.defineProperty(SoundChannel.prototype, 'length', {
    get: function () {
      return this.length_pwc0i2$_0;
    },
    set: function (length) {
      this.length_pwc0i2$_0 = length;
    }
  });
  Object.defineProperty(SoundChannel.prototype, 'remaining', {
    get: function () {
      return clamp(this.length - this.position | 0, 0, kotlin_js_internal_IntCompanionObject.MAX_VALUE);
    }
  });
  function SoundChannel$play$lambda(closure$sound_0, this$SoundChannel_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SoundChannel$play$lambda(closure$sound_0, this$SoundChannel_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SoundChannel$play$lambda(closure$sound_0, this$SoundChannel_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$sound = closure$sound_0;
    this.local$this$SoundChannel = this$SoundChannel_0;
  }
  Coroutine$SoundChannel$play$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SoundChannel$play$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SoundChannel$play$lambda.prototype.constructor = Coroutine$SoundChannel$play$lambda;
  Coroutine$SoundChannel$play$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$sound.play(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$SoundChannel._end_0(), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SoundChannel.prototype.play_eej0pj$ = function (sound) {
    if (this.enabled) {
      this.stop();
      this.startedTime_0 = TimeProvider.Companion.now();
      this.length = sound.lengthInMs.toInt();
      this.playing = true;
      this.promise_0 = go_1(this.soundSystem.views.coroutineContext, SoundChannel$play$lambda(sound, this));
      var $receiver = this.soundSystem.promises_8be2vx$;
      var element = ensureNotNull(this.promise_0);
      $receiver.add_11rb$(element);
    }
    return this;
  };
  SoundChannel.prototype.stop = function () {
    var tmp$;
    this._end_0();
    (tmp$ = this.promise_0) != null ? (tmp$.cancel_tcv7n7$(), Unit) : null;
  };
  SoundChannel.prototype._end_0 = function () {
    if (this.promise_0 != null) {
      var $receiver = this.soundSystem.promises_8be2vx$;
      var element = ensureNotNull(this.promise_0);
      $receiver.remove_11rb$(element);
    }
    this.length = 0;
    this.playing = false;
  };
  SoundChannel.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = (tmp$ = this.$this.promise_0) != null ? tmp$.await(this) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundChannel',
    interfaces: []
  };
  function SoundFile(nativeSound, soundSystem) {
    this.nativeSound = nativeSound;
    this.soundSystem = soundSystem;
  }
  SoundFile.prototype.play = function () {
    return this.soundSystem.play_eej0pj$(this.nativeSound);
  };
  function SoundFile$Factory(path, vpath, resourcesRoot, soundSystem) {
    this.path = path;
    this.vpath = vpath;
    this.resourcesRoot = resourcesRoot;
    this.soundSystem = soundSystem;
  }
  SoundFile$Factory.prototype.create = function (continuation_0, suspended) {
    var instance = new Coroutine$create_1(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$create_1($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$create_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$create_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$create_1.prototype.constructor = Coroutine$create_1;
  Coroutine$create_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            var rpath = (tmp$_2 = (tmp$_1 = (tmp$ = this.$this.path) != null ? tmp$.path : null) != null ? tmp$_1 : (tmp$_0 = this.$this.vpath) != null ? tmp$_0.path : null) != null ? tmp$_2 : '';
            this.state_0 = 2;
            this.result_0 = readNativeSoundOptimized(this.$this.resourcesRoot.get_61zpoe$(rpath), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return new SoundFile(this.result_0, this.$this.soundSystem);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SoundFile$Factory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [AsyncFactory]
  };
  SoundFile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundFile',
    interfaces: []
  };
  function soundSystem$lambda($receiver) {
    var $receiver_0 = new SoundSystem($receiver);
    $receiver.injector.mapInstance_b1ce0a$(getKClass(SoundSystem), $receiver_0);
    return $receiver_0;
  }
  var soundSystem;
  function get_soundSystem($receiver) {
    var property = new PropertyMetadata('soundSystem');
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = soundSystem.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = soundSystem.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = soundSystem.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  function readSoundFile($receiver_0, soundSystem_0, continuation_0, suspended) {
    var instance = new Coroutine$readSoundFile($receiver_0, soundSystem_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readSoundFile($receiver_0, soundSystem_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$soundSystem = soundSystem_0;
  }
  Coroutine$readSoundFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSoundFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSoundFile.prototype.constructor = Coroutine$readSoundFile;
  Coroutine$readSoundFile.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readNativeSoundOptimized(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return new SoundFile(this.result_0, this.local$soundSystem);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BitmapFontPlugin() {
    BitmapFontPlugin_instance = this;
    KorgePlugin.call(this);
  }
  function BitmapFontPlugin$register$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$BitmapFontPlugin$register$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$BitmapFontPlugin$register$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$BitmapFontPlugin$register$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BitmapFontPlugin$register$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BitmapFontPlugin$register$lambda.prototype.constructor = Coroutine$BitmapFontPlugin$register$lambda;
  Coroutine$BitmapFontPlugin$register$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(Path), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(VPath), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.getOrNull_wx4qjr$(getKClass(FontDescriptor), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(ResourcesRoot), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.local$tmp$_2 = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(AG), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            return new BitmapFontAsyncFactory(this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.local$tmp$_2, this.result_0);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BitmapFontPlugin.prototype.register_gohfjx$ = function (views_0, continuation_0, suspended) {
    var instance = new Coroutine$register_gohfjx$_2(this, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$register_gohfjx$_2($this, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$views = views_0;
  }
  Coroutine$register_gohfjx$_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$register_gohfjx$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$register_gohfjx$_2.prototype.constructor = Coroutine$register_gohfjx$_2;
  Coroutine$register_gohfjx$_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$views.injector.mapFactory_mvlsy$(getKClass(BitmapFont), BitmapFontPlugin$register$lambda);
            return;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BitmapFontPlugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BitmapFontPlugin',
    interfaces: [KorgePlugin]
  };
  var BitmapFontPlugin_instance = null;
  function BitmapFontPlugin_getInstance() {
    if (BitmapFontPlugin_instance === null) {
      new BitmapFontPlugin();
    }
    return BitmapFontPlugin_instance;
  }
  function BitmapFont(ag, fontSize, glyphs, kernings) {
    BitmapFont$Companion_getInstance();
    this.ag = ag;
    this.fontSize = fontSize;
    this.glyphs = glyphs;
    this.kernings = kernings;
    this.dummyGlyph_gur89u$_0 = lazy(BitmapFont$dummyGlyph$lambda(this));
  }
  function BitmapFont$Kerning(first, second, amount) {
    BitmapFont$Kerning$Companion_getInstance();
    this.first = first;
    this.second = second;
    this.amount = amount;
  }
  function BitmapFont$Kerning$Companion() {
    BitmapFont$Kerning$Companion_instance = this;
  }
  BitmapFont$Kerning$Companion.prototype.buildKey_vux9f0$ = function (f, s) {
    return f | s << 16;
  };
  BitmapFont$Kerning$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFont$Kerning$Companion_instance = null;
  function BitmapFont$Kerning$Companion_getInstance() {
    if (BitmapFont$Kerning$Companion_instance === null) {
      new BitmapFont$Kerning$Companion();
    }
    return BitmapFont$Kerning$Companion_instance;
  }
  BitmapFont$Kerning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kerning',
    interfaces: []
  };
  function BitmapFont$Glyph(id, texture, xoffset, yoffset, xadvance) {
    this.id = id;
    this.texture = texture;
    this.xoffset = xoffset;
    this.yoffset = yoffset;
    this.xadvance = xadvance;
  }
  BitmapFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: []
  };
  Object.defineProperty(BitmapFont.prototype, 'dummyGlyph', {
    get: function () {
      var $receiver = this.dummyGlyph_gur89u$_0;
      new PropertyMetadata('dummyGlyph');
      return $receiver.value;
    }
  });
  BitmapFont.prototype.get_za3lpa$ = function (charCode) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.glyphs.get_za3lpa$(charCode)) != null ? tmp$ : this.glyphs.get_za3lpa$(32)) != null ? tmp$_0 : this.dummyGlyph;
  };
  BitmapFont.prototype.get_s8itvh$ = function (char) {
    return this.get_za3lpa$(char | 0);
  };
  var get_lastIndex_2 = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  BitmapFont.prototype.drawText_v86ar4$ = function (batch, textSize, str, x, y, m, colMul, colAdd, blendMode, filtering) {
    if (m === void 0)
      m = new Matrix2d();
    if (colMul === void 0)
      colMul = color.Colors.WHITE;
    if (colAdd === void 0)
      colAdd = 2139062143;
    if (blendMode === void 0)
      blendMode = BlendMode$INHERIT_getInstance();
    if (filtering === void 0)
      filtering = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var m2 = m.clone();
    var scale = textSize / this.fontSize;
    m2.pretranslate_lu1900$(x, y);
    m2.prescale_lu1900$(scale, scale);
    var dx = 0;
    var dy = 0;
    tmp$ = get_indices_1(str);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var n = tmp$_0; n <= tmp$_1; n += tmp$_2) {
      var c1 = str.charCodeAt(n) | 0;
      if (c1 === (10 | 0)) {
        dx = 0;
        dy = dy + this.fontSize | 0;
        continue;
      }
      var index = n + 1 | 0;
      var c2 = (index >= 0 && index <= get_lastIndex_2(str) ? str.charCodeAt(index) : unboxChar(toBoxedChar(32))) | 0;
      var glyph = this.get_za3lpa$(c1);
      var tex = glyph.texture;
      batch.drawQuad_4rxj9x$(tex, dx + glyph.xoffset | 0, dy + glyph.yoffset | 0, void 0, void 0, m2, filtering, colMul, colAdd, blendMode.factors);
      var kerningOffset = (tmp$_4 = (tmp$_3 = this.kernings.get_za3lpa$(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(c1, c2))) != null ? tmp$_3.amount : null) != null ? tmp$_4 : 0;
      dx = dx + (glyph.xadvance + kerningOffset) | 0;
    }
  };
  function BitmapFont$Companion() {
    BitmapFont$Companion_instance = this;
  }
  BitmapFont$Companion.prototype.invoke_vefnbj$ = function (ag, fontName, fontSize, chars, mipmaps) {
    if (chars === void 0)
      chars = font.BitmapFontGenerator.LATIN_ALL;
    if (mipmaps === void 0)
      mipmaps = true;
    return convert(font.BitmapFontGenerator.generate_h6sd2a$(fontName, fontSize, chars), ag, mipmaps);
  };
  BitmapFont$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFont$Companion_instance = null;
  function BitmapFont$Companion_getInstance() {
    if (BitmapFont$Companion_instance === null) {
      new BitmapFont$Companion();
    }
    return BitmapFont$Companion_instance;
  }
  function BitmapFont$dummyGlyph$lambda(this$BitmapFont) {
    return function () {
      return new BitmapFont$Glyph(-1, Texture$Companion_getInstance().invoke_l6jlr1$(this$BitmapFont.ag.dummyTexture, 1, 1), 0, 0, 0);
    };
  }
  BitmapFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFont',
    interfaces: []
  };
  function BitmapFont_init(ag, fontSize, glyphs, kernings, $this) {
    $this = $this || Object.create(BitmapFont.prototype);
    BitmapFont.call($this, ag, fontSize, toIntMap(glyphs), toIntMap(kernings));
    return $this;
  }
  function drawText($receiver, font, textSize, str, x, y, m, colMul, colAdd, blendMode) {
    if (m === void 0)
      m = new Matrix2d();
    if (colMul === void 0)
      colMul = color.Colors.WHITE;
    if (colAdd === void 0)
      colAdd = 2139062143;
    if (blendMode === void 0)
      blendMode = BlendMode$INHERIT_getInstance();
    font.drawText_v86ar4$($receiver, textSize, str, x, y, m, colMul, colAdd, blendMode);
  }
  function readBitmapFont($receiver_0, ag_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapFont($receiver_0, ag_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapFont($receiver_0, ag_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_1 = void 0;
    this.local$fntFile = void 0;
    this.local$xml = void 0;
    this.local$textures = void 0;
    this.local$fontSize = void 0;
    this.local$id = void 0;
    this.local$$receiver = $receiver_0;
    this.local$ag = ag_0;
  }
  Coroutine$readBitmapFont.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapFont.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapFont.prototype.constructor = Coroutine$readBitmapFont;
  Coroutine$readBitmapFont.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$fntFile = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = readXml(this.local$fntFile, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$xml = this.result_0;
            this.local$textures = HashMap_init();
            this.local$fontSize = (tmp$_0 = (tmp$ = firstOrNull(this.local$xml.get_61zpoe$('info'))) != null ? tmp$.int_bm4lxs$('size', 16) : null) != null ? tmp$_0 : 16;
            this.local$tmp$_1 = get_0(this.local$xml.get_61zpoe$('pages'), 'page').iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 5;
              continue;
            }

            var page = this.local$tmp$_1.next();
            this.local$id = page.int_bm4lxs$('id');
            var file = page.str_puj7f4$('file');
            var texFile = this.local$fntFile.parent.get_61zpoe$(file);
            this.state_0 = 4;
            this.result_0 = readTexture_0(texFile, this.local$ag, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            var tex = this.result_0;
            this.local$textures.put_xwzc9p$(this.local$id, tex);
            this.state_0 = 3;
            continue;
          case 5:
            var texture = first(this.local$textures.values);
            var $receiver = get_0(this.local$xml.get_61zpoe$('chars'), 'char');
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            var tmp$_1;
            tmp$_1 = $receiver.iterator();
            while (tmp$_1.hasNext()) {
              var item = tmp$_1.next();
              destination.add_11rb$(new BitmapFont$Glyph(item.int_bm4lxs$('id'), texture.slice_tjonv8$(item.int_bm4lxs$('x'), item.int_bm4lxs$('y'), item.int_bm4lxs$('width'), item.int_bm4lxs$('height')), item.int_bm4lxs$('xoffset'), item.int_bm4lxs$('yoffset'), item.int_bm4lxs$('xadvance')));
            }

            var glyphs = destination;
            var $receiver_0 = get_0(this.local$xml.get_61zpoe$('kernings'), 'kerning');
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_2;
            tmp$_2 = $receiver_0.iterator();
            while (tmp$_2.hasNext()) {
              var item_0 = tmp$_2.next();
              destination_0.add_11rb$(new BitmapFont$Kerning(item_0.int_bm4lxs$('first'), item_0.int_bm4lxs$('second'), item_0.int_bm4lxs$('amount')));
            }

            var kernings = destination_0;
            var destination_1 = ArrayList_init_0(collectionSizeOrDefault(glyphs, 10));
            var tmp$_3;
            tmp$_3 = glyphs.iterator();
            while (tmp$_3.hasNext()) {
              var item_1 = tmp$_3.next();
              destination_1.add_11rb$(to(item_1.id, item_1));
            }

            var tmp$_4 = toIntMap(toMap(destination_1));
            var destination_2 = ArrayList_init_0(collectionSizeOrDefault(kernings, 10));
            var tmp$_5;
            tmp$_5 = kernings.iterator();
            while (tmp$_5.hasNext()) {
              var item_2 = tmp$_5.next();
              destination_2.add_11rb$(to(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(item_2.first, item_2.second), item_2));
            }

            return new BitmapFont(this.local$ag, this.local$fontSize, tmp$_4, toIntMap(toMap(destination_2)));
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toIntMap($receiver) {
    var tmp$;
    var out = IntMap_init();
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      out.set_wxm5ur$(k, v);
    }
    return out;
  }
  function FontDescriptor(face, size, chars) {
    if (chars === void 0)
      chars = '0123456789';
    this.face = face;
    this.size = size;
    this.chars = chars;
  }
  FontDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontDescriptor',
    interfaces: [Annotation]
  };
  function BitmapFontAsyncFactory(path, vpath, descriptor, resourcesRoot, ag) {
    this.path_0 = path;
    this.vpath_0 = vpath;
    this.descriptor_0 = descriptor;
    this.resourcesRoot_0 = resourcesRoot;
    this.ag_0 = ag;
  }
  BitmapFontAsyncFactory.prototype.create = function (continuation) {
    if (this.path_0 != null) {
      return readBitmapFont(this.resourcesRoot_0.get_xre72y$(this.path_0), this.ag_0, continuation);
    }
     else if (this.vpath_0 != null) {
      return readBitmapFont(this.resourcesRoot_0.get_61zpoe$(this.vpath_0.path), this.ag_0, continuation);
    }
     else if (this.descriptor_0 != null) {
      return convert(font.BitmapFontGenerator.generate_h6sd2a$(this.descriptor_0.face, this.descriptor_0.size, this.descriptor_0.chars), this.ag_0);
    }
     else {
      return invalidOp('BitmapFont injection requires @Path or @FontDescriptor annotations');
    }
  };
  BitmapFontAsyncFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFontAsyncFactory',
    interfaces: [AsyncFactory]
  };
  function toKorge($receiver, views, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = true;
    return convert($receiver, views.ag, mipmaps);
  }
  function convert($receiver, ag, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = true;
    var tmp$;
    var font = $receiver;
    var atlasBitmap = mipmaps ? ensurePowerOfTwo(font.atlas) : font.atlas;
    var tex = Texture$Companion_getInstance().invoke_l6jlr1$(ag.createTexture().upload_nn58bg$(atlasBitmap, mipmaps), atlasBitmap.width, atlasBitmap.height);
    var glyphs = ArrayList_init_0();
    tmp$ = font.glyphInfos.iterator();
    while (tmp$.hasNext()) {
      var info = tmp$.next();
      var bounds = info.bounds;
      var texSlice = tex.slice_tjonv8$(bounds.x, bounds.y, bounds.width, bounds.height);
      var element = new BitmapFont$Glyph(info.id, texSlice, 0, 0, info.advance);
      glyphs.add_11rb$(element);
    }
    var tmp$_0 = font.size;
    var destination = ArrayList_init_0(collectionSizeOrDefault(glyphs, 10));
    var tmp$_1;
    tmp$_1 = glyphs.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(to(item.id, item));
    }
    return new BitmapFont(ag, tmp$_0, toIntMap(toMap(destination)), IntMap_init());
  }
  function Bus(globalBus) {
    this.globalBus_0 = globalBus;
    this.closeables_0 = ArrayList_init_0();
  }
  Bus.prototype.send_za3rmp$ = function (message_0, continuation_0, suspended) {
    var instance = new Coroutine$send_za3rmp$(this, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$send_za3rmp$($this, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$message = message_0;
  }
  Coroutine$send_za3rmp$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$send_za3rmp$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_za3rmp$.prototype.constructor = Coroutine$send_za3rmp$;
  Coroutine$send_za3rmp$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.globalBus_0.send_za3rmp$(this.local$message, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Bus.prototype.register_nh4f0o$ = function (clazz, handler) {
    var closeable = this.globalBus_0.register_nh4f0o$(clazz, handler);
    this.closeables_0.add_11rb$(closeable);
    return closeable;
  };
  Bus.prototype.registerInstance_za3rmp$ = function (instance) {
    throw new NotImplementedError_init();
  };
  Bus.prototype.injectedInto_za3rmp$ = function (instance, continuation) {
    this.registerInstance_za3rmp$(instance);
  };
  Bus.prototype.close = function () {
    var tmp$;
    tmp$ = this.closeables_0.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      c.close();
    }
  };
  Bus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bus',
    interfaces: [InjectedHandler, Closeable]
  };
  function GlobalBus() {
    this.perClassHandlers = HashMap_init();
  }
  GlobalBus.prototype.send_za3rmp$ = function (message_0, continuation_0, suspended) {
    var instance = new Coroutine$send_za3rmp$_0(this, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$send_za3rmp$_0($this, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$message = message_0;
  }
  Coroutine$send_za3rmp$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$send_za3rmp$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_za3rmp$_0.prototype.constructor = Coroutine$send_za3rmp$_0;
  Coroutine$send_za3rmp$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var clazz = Kotlin.getKClassFromExpression(this.local$message);
            var handlers = this.$this.perClassHandlers.get_11rb$(clazz);
            if (handlers != null) {
              this.local$tmp$ = handlers.iterator();
              this.state_0 = 2;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var handler = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = handler(this.local$message, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  GlobalBus.prototype.forClass_0 = function (clazz) {
    var $receiver = this.perClassHandlers;
    var tmp$;
    var value = $receiver.get_11rb$(clazz);
    if (value == null) {
      var answer = ArrayList_init_0();
      $receiver.put_xwzc9p$(clazz, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  function GlobalBus$register$lambda(closure$clazz, this$GlobalBus, closure$chandler) {
    return function () {
      this$GlobalBus.forClass_0(closure$clazz).remove_11rb$(closure$chandler);
      return Unit;
    };
  }
  GlobalBus.prototype.register_nh4f0o$ = function (clazz, handler) {
    var tmp$;
    var chandler = Kotlin.isType(tmp$ = handler, SuspendFunction1) ? tmp$ : throwCCE();
    this.forClass_0(clazz).add_11rb$(chandler);
    return Closeable_0(GlobalBus$register$lambda(clazz, this, chandler));
  };
  GlobalBus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlobalBus',
    interfaces: []
  };
  function BusHandler() {
  }
  BusHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BusHandler',
    interfaces: [Annotation]
  };
  function Component(view) {
    this.view = view;
    this.detatchCancellables = ArrayList_init_0();
  }
  Object.defineProperty(Component.prototype, 'coroutineContext', {
    get: function () {
      return this.view.views.coroutineContext;
    }
  });
  Object.defineProperty(Component.prototype, 'views', {
    get: function () {
      return this.view.views;
    }
  });
  Component.prototype.attach = function () {
    this.view.addComponent_q5itx0$(this);
  };
  Component.prototype.dettach = function () {
    this.view.removeComponent_q5itx0$(this);
  };
  Component.prototype.afterDetatch = function () {
    var tmp$;
    tmp$ = this.detatchCancellables.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      e.cancel_tcv7n7$();
    }
    this.detatchCancellables.clear();
  };
  Component.prototype.update_za3lpa$ = function (dtMs) {
  };
  Component.prototype.addEventListener_dajwzo$ = defineInlineFunction('korge-js.com.soywiz.korge.component.Component.addEventListener_dajwzo$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, handler) {
      var tmp$ = this.detatchCancellables;
      var element = this.view.addEventListener_8bdrlz$(getKClass(T_0), handler);
      tmp$.add_11rb$(element);
    };
  }));
  Component.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Component',
    interfaces: [CoroutineContextHolder]
  };
  function DockingComponent(view, anchor) {
    Component.call(this, view);
    this.anchor = anchor;
    var tmp$ = this.detatchCancellables;
    var element = this.view.addEventListener_8bdrlz$(getKClass(StageResizedEvent), DockingComponent_init$lambda(this, view));
    tmp$.add_11rb$(element);
  }
  function DockingComponent_init$lambda(this$DockingComponent, closure$view) {
    return function (e) {
      var tmp$;
      closure$view.x = this$DockingComponent.views.actualVirtualLeft + this$DockingComponent.views.actualVirtualWidth * this$DockingComponent.anchor.sx;
      closure$view.y = this$DockingComponent.views.actualVirtualTop + this$DockingComponent.views.actualVirtualHeight * this$DockingComponent.anchor.sy;
      closure$view.invalidate();
      (tmp$ = closure$view.parent) != null ? (tmp$.invalidate(), Unit) : null;
      return Unit;
    };
  }
  DockingComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DockingComponent',
    interfaces: [Component]
  };
  function dockedTo($receiver, anchor) {
    (new DockingComponent($receiver, anchor)).attach();
    return $receiver;
  }
  var addSuspend = $module$korio_js.com.soywiz.korio.async.addSuspend_vumi11$;
  function JellyButton(view, targetScale) {
    if (targetScale === void 0)
      targetScale = 1.5;
    this.view = view;
    this.targetScale = targetScale;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    this.hitTest = (tmp$ = get_6(this.view, 'hitTest')) != null ? tmp$ : this.view;
    this.content = (tmp$_0 = get_6(this.view, 'content')) != null ? tmp$_0 : this.view;
    this.initialScale = (tmp$_2 = (tmp$_1 = this.content) != null ? tmp$_1.scale : null) != null ? tmp$_2 : 1.0;
    this.down = false;
    this.over = false;
    if (!equals(this.hitTest, this.content)) {
      (tmp$_3 = this.hitTest) != null ? (tmp$_3.alpha = 0.0) : null;
    }
    if ((tmp$_4 = this.hitTest) != null) {
      var tmp$_8, tmp$_9;
      (tmp$_9 = (tmp$_8 = tmp$_4 != null ? get_mouse(tmp$_4) : null) != null ? tmp$_8.onOver : null) != null ? addSuspend(tmp$_9, tmp$_4.views.coroutineContext, JellyButton_init$lambda(this)) : null;
    }
    if ((tmp$_5 = this.hitTest) != null) {
      var tmp$_10, tmp$_11;
      (tmp$_11 = (tmp$_10 = tmp$_5 != null ? get_mouse(tmp$_5) : null) != null ? tmp$_10.onOut : null) != null ? addSuspend(tmp$_11, tmp$_5.views.coroutineContext, JellyButton_init$lambda_0(this)) : null;
    }
    if ((tmp$_6 = this.hitTest) != null) {
      var tmp$_12, tmp$_13;
      (tmp$_13 = (tmp$_12 = tmp$_6 != null ? get_mouse(tmp$_6) : null) != null ? tmp$_12.onDown : null) != null ? addSuspend(tmp$_13, tmp$_6.views.coroutineContext, JellyButton_init$lambda_1(this)) : null;
    }
    if ((tmp$_7 = this.hitTest) != null) {
      var tmp$_14, tmp$_15;
      (tmp$_15 = (tmp$_14 = tmp$_7 != null ? get_mouse(tmp$_7) : null) != null ? tmp$_14.onUpAnywhere : null) != null ? addSuspend(tmp$_15, tmp$_7.views.coroutineContext, JellyButton_init$lambda_2(this)) : null;
    }
  }
  JellyButton.prototype.updateState_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$updateState_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updateState_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$updateState_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateState_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateState_0.prototype.constructor = Coroutine$updateState_0;
  Coroutine$updateState_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.$this.content == null) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.down)
              tmp$ = 1.0 / this.$this.targetScale;
            else if (this.$this.over)
              tmp$ = this.$this.targetScale;
            else
              tmp$ = 1.0;
            var scale = tmp$;
            var tmp$_0 = this.$this.content;
            var $receiver = getPropertyCallableRef('scale', 0, function ($receiver) {
              return $receiver.scale;
            }.bind(null, this.$this.content), function ($receiver, value) {
              $receiver.scale = value;
            }.bind(null, this.$this.content));
            var end = this.$this.initialScale * scale;
            this.state_0 = 3;
            this.result_0 = tween(tmp$_0, [new V2($receiver, $receiver.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            }))], TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(200)), Easings_getInstance().EASE_OUT_ELASTIC, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JellyButton$onClick$lambda(closure$callback_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton$onClick$lambda(closure$callback_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton$onClick$lambda(closure$callback_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$JellyButton$onClick$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton$onClick$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton$onClick$lambda.prototype.constructor = Coroutine$JellyButton$onClick$lambda;
  Coroutine$JellyButton$onClick$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JellyButton.prototype.onClick_g2bo5h$ = function (callback) {
    var tmp$;
    if ((tmp$ = this.hitTest) != null) {
      var tmp$_0, tmp$_1;
      (tmp$_1 = (tmp$_0 = tmp$ != null ? get_mouse(tmp$) : null) != null ? tmp$_0.onClick : null) != null ? addSuspend(tmp$_1, tmp$.views.coroutineContext, JellyButton$onClick$lambda(callback)) : null;
    }
  };
  function JellyButton_init$lambda(this$JellyButton_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton_init$lambda(this$JellyButton_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton_init$lambda(this$JellyButton_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JellyButton = this$JellyButton_0;
  }
  Coroutine$JellyButton_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton_init$lambda.prototype.constructor = Coroutine$JellyButton_init$lambda;
  Coroutine$JellyButton_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JellyButton.over = true;
            this.state_0 = 2;
            this.result_0 = this.local$this$JellyButton.updateState_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JellyButton_init$lambda_0(this$JellyButton_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton_init$lambda_0(this$JellyButton_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton_init$lambda_0(this$JellyButton_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JellyButton = this$JellyButton_0;
  }
  Coroutine$JellyButton_init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton_init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton_init$lambda_0.prototype.constructor = Coroutine$JellyButton_init$lambda_0;
  Coroutine$JellyButton_init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JellyButton.over = false;
            this.state_0 = 2;
            this.result_0 = this.local$this$JellyButton.updateState_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JellyButton_init$lambda_1(this$JellyButton_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton_init$lambda_1(this$JellyButton_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton_init$lambda_1(this$JellyButton_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JellyButton = this$JellyButton_0;
  }
  Coroutine$JellyButton_init$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton_init$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton_init$lambda_1.prototype.constructor = Coroutine$JellyButton_init$lambda_1;
  Coroutine$JellyButton_init$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JellyButton.down = true;
            this.state_0 = 2;
            this.result_0 = this.local$this$JellyButton.updateState_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JellyButton_init$lambda_2(this$JellyButton_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton_init$lambda_2(this$JellyButton_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton_init$lambda_2(this$JellyButton_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JellyButton = this$JellyButton_0;
  }
  Coroutine$JellyButton_init$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton_init$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton_init$lambda_2.prototype.constructor = Coroutine$JellyButton_init$lambda_2;
  Coroutine$JellyButton_init$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JellyButton.down = false;
            this.state_0 = 2;
            this.result_0 = this.local$this$JellyButton.updateState_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JellyButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JellyButton',
    interfaces: []
  };
  function jellyButton($receiver, targetScale) {
    if (targetScale === void 0)
      targetScale = 1.5;
    return new JellyButton($receiver, targetScale);
  }
  function SortedChildrenByComponent(container, comparator) {
    Component.call(this, container);
    this.container = container;
    this.comparator = comparator;
  }
  SortedChildrenByComponent.prototype.update_za3lpa$ = function (dtMs) {
    Component.prototype.update_za3lpa$.call(this, dtMs);
    sortWith(this.container.children, this.comparator);
  };
  SortedChildrenByComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SortedChildrenByComponent',
    interfaces: [Component]
  };
  function keepChildrenSortedBy($receiver, comparator) {
    (new SortedChildrenByComponent($receiver, comparator)).attach();
    return $receiver;
  }
  function keepChildrenSortedBy$lambda(closure$selector) {
    return function (a, b) {
      return Kotlin.compareTo(closure$selector(a), closure$selector(b));
    };
  }
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function keepChildrenSortedBy_0($receiver, selector) {
    return keepChildrenSortedBy($receiver, new Comparator$ObjectLiteral_0(keepChildrenSortedBy$lambda(selector)));
  }
  function keepChildrenSortedByY($receiver) {
    return keepChildrenSortedBy_0($receiver, getPropertyCallableRef('y', 1, function ($receiver) {
      return $receiver.y;
    }, function ($receiver, value) {
      $receiver.y = value;
    }));
  }
  function GridViewList(row0, row1, cellSelector, initialRows, initialColumns, container) {
    if (container === void 0)
      container = ensureNotNull(row0.parent);
    this.row0 = row0;
    this.row1 = row1;
    this.cellSelector = cellSelector;
    this.initialRows = initialRows;
    this.initialColumns = initialColumns;
    this.container = container;
    this.rowsData_0 = ArrayList_init_0();
    this.columns_tj6afv$_0 = this.initialColumns;
    this.rows_jykov7$_0 = this.initialRows;
    this.container.removeChildren();
    this.update();
  }
  Object.defineProperty(GridViewList.prototype, 'columns', {
    get: function () {
      return this.columns_tj6afv$_0;
    },
    set: function (value) {
      this.columns_tj6afv$_0 = value;
      this.update();
    }
  });
  Object.defineProperty(GridViewList.prototype, 'rows', {
    get: function () {
      return this.rows_jykov7$_0;
    },
    set: function (value) {
      this.rows_jykov7$_0 = value;
      this.update();
    }
  });
  GridViewList.prototype.addItem_0 = function () {
    var n = this.container.children.size;
    var item = this.row0.clone();
    this.container.plusAssign_l5rad2$(item);
    item.setMatrixInterpolated_whgrqo$(n, this.row0.localMatrix, this.row1.localMatrix);
    var select = this.cellSelector(item);
    var $receiver = this.rowsData_0;
    var element = new ViewList(select.first, select.second, this.columns);
    $receiver.add_11rb$(element);
  };
  GridViewList.prototype.removeLastItem_0 = function () {
    var tmp$;
    (tmp$ = lastOrNull(this.container.children)) != null ? (tmp$.removeFromParent(), Unit) : null;
    this.rowsData_0.removeAt_za3lpa$(this.rowsData_0.size - 1 | 0);
  };
  GridViewList.prototype.update = function () {
    var tmp$;
    while (this.rowsData_0.size < this.rows)
      this.addItem_0();
    while (this.rowsData_0.size > this.rows)
      this.removeLastItem_0();
    tmp$ = this.rowsData_0.iterator();
    while (tmp$.hasNext()) {
      var rowData = tmp$.next();
      rowData.length = this.columns;
    }
  };
  Object.defineProperty(GridViewList.prototype, 'length', {
    get: function () {
      return Kotlin.imul(this.columns, this.rows);
    }
  });
  GridViewList.prototype.get_za3lpa$ = function (row) {
    return this.rowsData_0.get_za3lpa$(row);
  };
  GridViewList.prototype.get_vux9f0$ = function (row, column) {
    return this.get_za3lpa$(row).get_za3lpa$(column);
  };
  GridViewList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridViewList',
    interfaces: []
  };
  function ViewList(view0, view1, initialCount, container) {
    if (container === void 0)
      container = ensureNotNull(view0.parent);
    this.view0 = view0;
    this.view1 = view1;
    this.initialCount = initialCount;
    this.container = container;
    this.onRemovedView = new Signal();
    this.onAddedView = new Signal();
    var tmp$;
    this.container.removeChildren();
    tmp$ = this.initialCount;
    for (var n = 0; n < tmp$; n++)
      this.addItem_0();
  }
  function ViewList$ChangeEvent(view, index) {
    this.view = view;
    this.index = index;
  }
  ViewList$ChangeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeEvent',
    interfaces: []
  };
  ViewList$ChangeEvent.prototype.component1 = function () {
    return this.view;
  };
  ViewList$ChangeEvent.prototype.component2 = function () {
    return this.index;
  };
  ViewList$ChangeEvent.prototype.copy_pwlnko$ = function (view, index) {
    return new ViewList$ChangeEvent(view === void 0 ? this.view : view, index === void 0 ? this.index : index);
  };
  ViewList$ChangeEvent.prototype.toString = function () {
    return 'ChangeEvent(view=' + Kotlin.toString(this.view) + (', index=' + Kotlin.toString(this.index)) + ')';
  };
  ViewList$ChangeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.view) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  ViewList$ChangeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.view, other.view) && Kotlin.equals(this.index, other.index)))));
  };
  Object.defineProperty(ViewList.prototype, 'children', {
    get: function () {
      return this.container.children;
    }
  });
  ViewList.prototype.addItem_0 = function () {
    var n = this.container.children.size;
    var item = this.view0.clone();
    this.container.plusAssign_l5rad2$(item);
    item.setMatrixInterpolated_whgrqo$(n, this.view0.localMatrix, this.view1.localMatrix);
    this.onAddedView.invoke_11rb$(new ViewList$ChangeEvent(item, n));
  };
  ViewList.prototype.removeLastItem_0 = function () {
    var lastIndex = this.container.children.size - 1 | 0;
    var item = this.children.get_za3lpa$(lastIndex);
    item.removeFromParent();
    this.onRemovedView.invoke_11rb$(new ViewList$ChangeEvent(item, lastIndex));
  };
  Object.defineProperty(ViewList.prototype, 'length', {
    get: function () {
      return this.container.children.size;
    },
    set: function (value) {
      while (value > this.length)
        this.addItem_0();
      while (value < this.length)
        this.removeLastItem_0();
    }
  });
  ViewList.prototype.get_za3lpa$ = function (index) {
    return getOrNull(this.container.children, index);
  };
  ViewList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewList',
    interfaces: []
  };
  function EventDispatcher() {
  }
  function EventDispatcher$Mixin() {
    this.events = HashMap_init();
  }
  function EventDispatcher$Mixin$addEventListener$lambda(closure$handlers, closure$chandler) {
    return function (it) {
      var $receiver = closure$handlers;
      var element = closure$chandler;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  EventDispatcher$Mixin.prototype.addEventListener_8bdrlz$ = function (clazz, handler) {
    var tmp$;
    var $receiver = this.events;
    var tmp$_0;
    var value = $receiver.get_11rb$(clazz);
    if (value == null) {
      var answer = ArrayList_init_0();
      $receiver.put_xwzc9p$(clazz, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    var handlers = tmp$_0;
    var chandler = typeof (tmp$ = handler) === 'function' ? tmp$ : throwCCE();
    handlers.add_11rb$(chandler);
    return Cancellable.Companion.invoke_4m4org$(EventDispatcher$Mixin$addEventListener$lambda(handlers, chandler));
  };
  EventDispatcher$Mixin.prototype.dispatch_gdt21f$$default = function (event, clazz) {
    var tmp$;
    var handlers = this.events.get_11rb$(clazz);
    if (handlers != null) {
      tmp$ = toList_0(handlers).iterator();
      while (tmp$.hasNext()) {
        var handler = tmp$.next();
        handler(event);
      }
    }
  };
  EventDispatcher$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [EventDispatcher]
  };
  EventDispatcher.prototype.dispatch_gdt21f$ = function (event, clazz, callback$default) {
    if (clazz === void 0)
      clazz = Kotlin.getKClassFromExpression(event);
    callback$default ? callback$default(event, clazz) : this.dispatch_gdt21f$$default(event, clazz);
  };
  EventDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EventDispatcher',
    interfaces: []
  };
  function Event() {
  }
  Event.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Event',
    interfaces: []
  };
  var addEventListener = defineInlineFunction('korge-js.com.soywiz.korge.event.addEventListener_a9nyxq$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, handler) {
      return $receiver.addEventListener_8bdrlz$(getKClass(T_0), handler);
    };
  }));
  function addEventListenerSuspend(T_0, isT, $receiver, handler, continuation, suspended) {
    var instance = new Coroutine$addEventListenerSuspend(T_0, isT, $receiver, handler, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$addEventListenerSuspend(T_0, isT, $receiver, handler, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0;
    this.local$$receiver = $receiver;
    this.local$handler = handler;
  }
  Coroutine$addEventListenerSuspend.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addEventListenerSuspend.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addEventListenerSuspend.prototype.constructor = Coroutine$addEventListenerSuspend;
  Coroutine$addEventListenerSuspend.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = getCoroutineContext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var context_0 = this.result_0;
            return this.local$$receiver.addEventListener_8bdrlz$(getKClass(this.local$T_0), addEventListenerSuspend$lambda(context_0, this.local$handler));
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  defineInlineFunction('korge-js.com.soywiz.korge.event.addEventListenerSuspend_r5o1jc$', wrapFunction(function () {
    var getCoroutineContext = _.$$importsForInline$$['korio-js'].com.soywiz.korio.coroutine.getCoroutineContext;
    var getKClass = Kotlin.getKClass;
    var Unit = Kotlin.kotlin.Unit;
    var go = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.go_o1g0bv$;
    function addEventListenerSuspend$lambda$lambda(closure$handler_0, closure$event_0) {
      return function ($receiver, continuation_0, suspended) {
        var instance = new Coroutine$addEventListenerSuspend$lambda$lambda(closure$handler_0, closure$event_0, $receiver, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    function Coroutine$addEventListenerSuspend$lambda$lambda(closure$handler_0, closure$event_0, $receiver, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$handler = closure$handler_0;
      this.local$closure$event = closure$event_0;
    }
    Coroutine$addEventListenerSuspend$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$addEventListenerSuspend$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$addEventListenerSuspend$lambda$lambda.prototype.constructor = Coroutine$addEventListenerSuspend$lambda$lambda;
    Coroutine$addEventListenerSuspend$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$handler(this.local$closure$event, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
          }
        }
         catch (e) {
          if (this.state_0 === 1)
            throw e;
          else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    function addEventListenerSuspend$lambda(closure$context, closure$handler) {
      return function (event) {
        go(closure$context, addEventListenerSuspend$lambda$lambda(closure$handler, event));
        return Unit;
      };
    }
    return function (T_0, isT, $receiver, handler, continuation) {
      suspendCall(getCoroutineContext(coroutineReceiver()));
      var context_0 = coroutineResult(coroutineReceiver());
      return $receiver.addEventListener_8bdrlz$(getKClass(T_0), addEventListenerSuspend$lambda(context_0, handler));
    };
  }));
  function preventDefault(reason) {
    if (reason === void 0)
      reason = null;
    throw new PreventDefaultException(reason);
  }
  function PreventDefaultException(reason) {
    if (reason === void 0)
      reason = null;
    Exception.call(this);
    this.reason = reason;
    this.name = 'PreventDefaultException';
  }
  PreventDefaultException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreventDefaultException',
    interfaces: [Exception]
  };
  function Html() {
    Html_instance = this;
  }
  function Html$Alignment(anchor) {
    Html$Alignment$Companion_getInstance();
    this.anchor = anchor;
  }
  function Html$Alignment$Companion() {
    Html$Alignment$Companion_instance = this;
    this.LEFT = new Html$Alignment(Anchor.Companion.TOP_LEFT);
    this.CENTER = new Html$Alignment(Anchor.Companion.TOP_CENTER);
    this.RIGHT = new Html$Alignment(Anchor.Companion.TOP_RIGHT);
    this.JUSTIFIED = new Html$Alignment(Anchor.Companion.TOP_LEFT);
    this.MIDDLE_LEFT = new Html$Alignment(Anchor.Companion.MIDDLE_LEFT);
    this.MIDDLE_CENTER = new Html$Alignment(Anchor.Companion.MIDDLE_CENTER);
    this.MIDDLE_RIGHT = new Html$Alignment(Anchor.Companion.MIDDLE_RIGHT);
    this.BOTTOM_LEFT = new Html$Alignment(Anchor.Companion.BOTTOM_LEFT);
    this.BOTTOM_CENTER = new Html$Alignment(Anchor.Companion.BOTTOM_CENTER);
    this.BOTTOM_RIGHT = new Html$Alignment(Anchor.Companion.BOTTOM_RIGHT);
  }
  Html$Alignment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Html$Alignment$Companion_instance = null;
  function Html$Alignment$Companion_getInstance() {
    if (Html$Alignment$Companion_instance === null) {
      new Html$Alignment$Companion();
    }
    return Html$Alignment$Companion_instance;
  }
  Html$Alignment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alignment',
    interfaces: []
  };
  Html$Alignment.prototype.component1 = function () {
    return this.anchor;
  };
  Html$Alignment.prototype.copy_72irp7$ = function (anchor) {
    return new Html$Alignment(anchor === void 0 ? this.anchor : anchor);
  };
  Html$Alignment.prototype.toString = function () {
    return 'Alignment(anchor=' + Kotlin.toString(this.anchor) + ')';
  };
  Html$Alignment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.anchor) | 0;
    return result;
  };
  Html$Alignment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.anchor, other.anchor))));
  };
  function Html$FontFace() {
  }
  function Html$FontFace$Named(name) {
    this.name = name;
  }
  Html$FontFace$Named.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Named',
    interfaces: [Html$FontFace]
  };
  Html$FontFace$Named.prototype.component1 = function () {
    return this.name;
  };
  Html$FontFace$Named.prototype.copy_61zpoe$ = function (name) {
    return new Html$FontFace$Named(name === void 0 ? this.name : name);
  };
  Html$FontFace$Named.prototype.toString = function () {
    return 'Named(name=' + Kotlin.toString(this.name) + ')';
  };
  Html$FontFace$Named.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Html$FontFace$Named.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Html$FontFace$Bitmap(font) {
    this.font = font;
  }
  Html$FontFace$Bitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap',
    interfaces: [Html$FontFace]
  };
  Html$FontFace$Bitmap.prototype.component1 = function () {
    return this.font;
  };
  Html$FontFace$Bitmap.prototype.copy_unrrau$ = function (font) {
    return new Html$FontFace$Bitmap(font === void 0 ? this.font : font);
  };
  Html$FontFace$Bitmap.prototype.toString = function () {
    return 'Bitmap(font=' + Kotlin.toString(this.font) + ')';
  };
  Html$FontFace$Bitmap.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    return result;
  };
  Html$FontFace$Bitmap.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.font, other.font))));
  };
  Html$FontFace.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FontFace',
    interfaces: []
  };
  function Html$Format(parent, color, face, size, letterSpacing, kerning, align) {
    if (parent === void 0)
      parent = null;
    if (color === void 0)
      color = null;
    if (face === void 0)
      face = null;
    if (size === void 0)
      size = null;
    if (letterSpacing === void 0)
      letterSpacing = null;
    if (kerning === void 0)
      kerning = null;
    if (align === void 0)
      align = null;
    this.parent_ihqhan$_0 = parent;
    this.color = color;
    this.face = face;
    this.size = size;
    this.letterSpacing = letterSpacing;
    this.kerning = kerning;
    this.align = align;
    this.computedColor_lhqqal$_0 = new Computed(getPropertyCallableRef('color', 1, function ($receiver) {
      return $receiver.color;
    }, function ($receiver, value) {
      $receiver.color = value;
    }), Html$Format$computedColor$lambda);
    this.computedFace_asvglt$_0 = new Computed(getPropertyCallableRef('face', 1, function ($receiver) {
      return $receiver.face;
    }, function ($receiver, value) {
      $receiver.face = value;
    }), Html$Format$computedFace$lambda);
    this.computedSize_b06d9p$_0 = new Computed(getPropertyCallableRef('size', 1, function ($receiver) {
      return $receiver.size;
    }, function ($receiver, value) {
      $receiver.size = value;
    }), Html$Format$computedSize$lambda);
    this.computedLetterSpacing_9ivxe1$_0 = new Computed(getPropertyCallableRef('letterSpacing', 1, function ($receiver) {
      return $receiver.letterSpacing;
    }, function ($receiver, value) {
      $receiver.letterSpacing = value;
    }), Html$Format$computedLetterSpacing$lambda);
    this.computedKerning_uyqaje$_0 = new Computed(getPropertyCallableRef('kerning', 1, function ($receiver) {
      return $receiver.kerning;
    }, function ($receiver, value) {
      $receiver.kerning = value;
    }), Html$Format$computedKerning$lambda);
    this.computedAlign_mhjfun$_0 = new Computed(getPropertyCallableRef('align', 1, function ($receiver) {
      return $receiver.align;
    }, function ($receiver, value) {
      $receiver.align = value;
    }), Html$Format$computedAlign$lambda);
  }
  Object.defineProperty(Html$Format.prototype, 'parent', {
    get: function () {
      return this.parent_ihqhan$_0;
    },
    set: function (parent) {
      this.parent_ihqhan$_0 = parent;
    }
  });
  Object.defineProperty(Html$Format.prototype, 'computedColor', {
    get: function () {
      return this.computedColor_lhqqal$_0.getValue_608w9m$(this, new PropertyMetadata('computedColor'));
    }
  });
  Object.defineProperty(Html$Format.prototype, 'computedFace', {
    get: function () {
      return this.computedFace_asvglt$_0.getValue_608w9m$(this, new PropertyMetadata('computedFace'));
    }
  });
  Object.defineProperty(Html$Format.prototype, 'computedSize', {
    get: function () {
      return this.computedSize_b06d9p$_0.getValue_608w9m$(this, new PropertyMetadata('computedSize'));
    }
  });
  Object.defineProperty(Html$Format.prototype, 'computedLetterSpacing', {
    get: function () {
      return this.computedLetterSpacing_9ivxe1$_0.getValue_608w9m$(this, new PropertyMetadata('computedLetterSpacing'));
    }
  });
  Object.defineProperty(Html$Format.prototype, 'computedKerning', {
    get: function () {
      return this.computedKerning_uyqaje$_0.getValue_608w9m$(this, new PropertyMetadata('computedKerning'));
    }
  });
  Object.defineProperty(Html$Format.prototype, 'computedAlign', {
    get: function () {
      return this.computedAlign_mhjfun$_0.getValue_608w9m$(this, new PropertyMetadata('computedAlign'));
    }
  });
  Html$Format.prototype.consolidate = function () {
    return new Html$Format(null, this.computedColor, this.computedFace, this.computedSize, this.computedLetterSpacing, this.computedKerning, this.computedAlign);
  };
  function Html$Format$computedColor$lambda() {
    return color.Colors.WHITE;
  }
  function Html$Format$computedFace$lambda() {
    return new Html$FontFace$Named('Arial');
  }
  function Html$Format$computedSize$lambda() {
    return 16;
  }
  function Html$Format$computedLetterSpacing$lambda() {
    return 0.0;
  }
  function Html$Format$computedKerning$lambda() {
    return 0;
  }
  function Html$Format$computedAlign$lambda() {
    return Html$Alignment$Companion_getInstance().LEFT;
  }
  Html$Format.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Format',
    interfaces: [Computed$WithParent]
  };
  Html$Format.prototype.component1 = function () {
    return this.parent;
  };
  Html$Format.prototype.component2 = function () {
    return this.color;
  };
  Html$Format.prototype.component3 = function () {
    return this.face;
  };
  Html$Format.prototype.component4 = function () {
    return this.size;
  };
  Html$Format.prototype.component5 = function () {
    return this.letterSpacing;
  };
  Html$Format.prototype.component6 = function () {
    return this.kerning;
  };
  Html$Format.prototype.component7 = function () {
    return this.align;
  };
  Html$Format.prototype.copy_6ol81d$ = function (parent, color, face, size, letterSpacing, kerning, align) {
    return new Html$Format(parent === void 0 ? this.parent : parent, color === void 0 ? this.color : color, face === void 0 ? this.face : face, size === void 0 ? this.size : size, letterSpacing === void 0 ? this.letterSpacing : letterSpacing, kerning === void 0 ? this.kerning : kerning, align === void 0 ? this.align : align);
  };
  Html$Format.prototype.toString = function () {
    return 'Format(parent=' + Kotlin.toString(this.parent) + (', color=' + Kotlin.toString(this.color)) + (', face=' + Kotlin.toString(this.face)) + (', size=' + Kotlin.toString(this.size)) + (', letterSpacing=' + Kotlin.toString(this.letterSpacing)) + (', kerning=' + Kotlin.toString(this.kerning)) + (', align=' + Kotlin.toString(this.align)) + ')';
  };
  Html$Format.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    result = result * 31 + Kotlin.hashCode(this.face) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.letterSpacing) | 0;
    result = result * 31 + Kotlin.hashCode(this.kerning) | 0;
    result = result * 31 + Kotlin.hashCode(this.align) | 0;
    return result;
  };
  Html$Format.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.parent, other.parent) && Kotlin.equals(this.color, other.color) && Kotlin.equals(this.face, other.face) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.letterSpacing, other.letterSpacing) && Kotlin.equals(this.kerning, other.kerning) && Kotlin.equals(this.align, other.align)))));
  };
  function Html$MetricsProvider() {
  }
  function Html$MetricsProvider$Identity() {
    Html$MetricsProvider$Identity_instance = this;
  }
  Html$MetricsProvider$Identity.prototype.getBounds_1y5lg$ = function (text, format, out) {
    var width = text.length;
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(1));
  };
  Html$MetricsProvider$Identity.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Identity',
    interfaces: [Html$MetricsProvider]
  };
  var Html$MetricsProvider$Identity_instance = null;
  function Html$MetricsProvider$Identity_getInstance() {
    if (Html$MetricsProvider$Identity_instance === null) {
      new Html$MetricsProvider$Identity();
    }
    return Html$MetricsProvider$Identity_instance;
  }
  Html$MetricsProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MetricsProvider',
    interfaces: []
  };
  function Html$PositionContext(provider, bounds, x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.provider = provider;
    this.bounds = bounds;
    this.x = x;
    this.y = y;
  }
  Html$PositionContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PositionContext',
    interfaces: []
  };
  Html$PositionContext.prototype.component1 = function () {
    return this.provider;
  };
  Html$PositionContext.prototype.component2 = function () {
    return this.bounds;
  };
  Html$PositionContext.prototype.component3 = function () {
    return this.x;
  };
  Html$PositionContext.prototype.component4 = function () {
    return this.y;
  };
  Html$PositionContext.prototype.copy_lvkdjn$ = function (provider, bounds, x, y) {
    return new Html$PositionContext(provider === void 0 ? this.provider : provider, bounds === void 0 ? this.bounds : bounds, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Html$PositionContext.prototype.toString = function () {
    return 'PositionContext(provider=' + Kotlin.toString(this.provider) + (', bounds=' + Kotlin.toString(this.bounds)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Html$PositionContext.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.provider) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Html$PositionContext.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.provider, other.provider) && Kotlin.equals(this.bounds, other.bounds) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Html$Span(format, text) {
    this.format = format;
    this.text = text;
    this.$delegate_csjjaa$_0 = new Extra$Mixin();
    this.bounds = new Rectangle();
  }
  Html$Span.prototype.doPositioning_tz5d0u$ = function (ctx) {
    ctx.provider.getBounds_1y5lg$(this.text, this.format, this.bounds);
    this.bounds.x = this.bounds.x + ctx.x;
    ctx.x = ctx.x + this.bounds.width;
  };
  Object.defineProperty(Html$Span.prototype, 'extra', {
    get: function () {
      return this.$delegate_csjjaa$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_csjjaa$_0.extra = tmp$;
    }
  });
  Html$Span.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Span',
    interfaces: [Extra]
  };
  Html$Span.prototype.component1 = function () {
    return this.format;
  };
  Html$Span.prototype.component2 = function () {
    return this.text;
  };
  Html$Span.prototype.copy_h7bzz5$ = function (format, text) {
    return new Html$Span(format === void 0 ? this.format : format, text === void 0 ? this.text : text);
  };
  Html$Span.prototype.toString = function () {
    return 'Span(format=' + Kotlin.toString(this.format) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  Html$Span.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Html$Span.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.format, other.format) && Kotlin.equals(this.text, other.text)))));
  };
  function Html$Line(spans) {
    if (spans === void 0) {
      spans = ArrayList_init_0();
    }
    this.spans = spans;
    this.$delegate_csexho$_0 = new Extra$Mixin();
    this.format = new Html$Format();
    this.bounds = new Rectangle();
  }
  Object.defineProperty(Html$Line.prototype, 'firstNonEmptySpan', {
    get: function () {
      var $receiver = this.spans;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.text.length > 0) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    }
  });
  Html$Line.prototype.doPositioning_tz5d0u$ = function (ctx) {
    var tmp$, tmp$_0;
    ctx.x = ctx.bounds.x;
    tmp$ = this.spans.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      v.doPositioning_tz5d0u$(ctx);
    }
    var $receiver = this.spans;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(item.bounds);
    }
    bounds(destination, this.bounds);
    var restoreY = this.bounds.y;
    this.bounds.setToAnchoredRectangle_7qw0rf$(this.bounds, this.format.computedAlign.anchor, ctx.bounds);
    this.bounds.y = restoreY;
    var sx = this.bounds.x;
    tmp$_0 = this.spans.iterator();
    while (tmp$_0.hasNext()) {
      var v_0 = tmp$_0.next();
      v_0.bounds.x = sx;
      sx += v_0.bounds.width;
    }
    ctx.x = ctx.bounds.x;
    ctx.y = ctx.y + this.bounds.height;
  };
  Object.defineProperty(Html$Line.prototype, 'extra', {
    get: function () {
      return this.$delegate_csexho$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_csexho$_0.extra = tmp$;
    }
  });
  Html$Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: [Extra]
  };
  Html$Line.prototype.component1 = function () {
    return this.spans;
  };
  Html$Line.prototype.copy_drxq9z$ = function (spans) {
    return new Html$Line(spans === void 0 ? this.spans : spans);
  };
  Html$Line.prototype.toString = function () {
    return 'Line(spans=' + Kotlin.toString(this.spans) + ')';
  };
  Html$Line.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.spans) | 0;
    return result;
  };
  Html$Line.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.spans, other.spans))));
  };
  function Html$Paragraph(lines) {
    if (lines === void 0) {
      lines = ArrayList_init_0();
    }
    this.lines = lines;
    this.$delegate_uin3h2$_0 = new Extra$Mixin();
    this.bounds = new Rectangle();
  }
  Object.defineProperty(Html$Paragraph.prototype, 'firstNonEmptyLine', {
    get: function () {
      var $receiver = this.lines;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.firstNonEmptySpan != null) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    }
  });
  Html$Paragraph.prototype.doPositioning_tz5d0u$ = function (ctx) {
    var tmp$;
    tmp$ = this.lines.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      v.doPositioning_tz5d0u$(ctx);
    }
    var $receiver = this.lines;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.bounds);
    }
    bounds(destination, this.bounds);
    ctx.x = this.bounds.left;
    ctx.y = this.bounds.bottom;
  };
  Object.defineProperty(Html$Paragraph.prototype, 'extra', {
    get: function () {
      return this.$delegate_uin3h2$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_uin3h2$_0.extra = tmp$;
    }
  });
  Html$Paragraph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paragraph',
    interfaces: [Extra]
  };
  Html$Paragraph.prototype.component1 = function () {
    return this.lines;
  };
  Html$Paragraph.prototype.copy_dnyyn1$ = function (lines) {
    return new Html$Paragraph(lines === void 0 ? this.lines : lines);
  };
  Html$Paragraph.prototype.toString = function () {
    return 'Paragraph(lines=' + Kotlin.toString(this.lines) + ')';
  };
  Html$Paragraph.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lines) | 0;
    return result;
  };
  Html$Paragraph.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.lines, other.lines))));
  };
  function Html$Document(paragraphs) {
    if (paragraphs === void 0) {
      paragraphs = ArrayList_init_0();
    }
    this.paragraphs = paragraphs;
    this.$delegate_is0v8z$_0 = new Extra$Mixin();
    this.defaultFormat = new Html$Format();
    this.xml = Xml('');
    this.bounds = new Rectangle();
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  Object.defineProperty(Html$Document.prototype, 'text', {
    get: function () {
      var $receiver = this.xml.text;
      var tmp$;
      return trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    }
  });
  Object.defineProperty(Html$Document.prototype, 'firstNonEmptyParagraph', {
    get: function () {
      var $receiver = this.paragraphs;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.firstNonEmptyLine != null) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    }
  });
  Object.defineProperty(Html$Document.prototype, 'firstNonEmptySpan', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.firstNonEmptyParagraph) != null ? tmp$.firstNonEmptyLine : null) != null ? tmp$_0.firstNonEmptySpan : null;
    }
  });
  Object.defineProperty(Html$Document.prototype, 'firstFormat', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.firstNonEmptySpan) != null ? tmp$.format : null) != null ? tmp$_0 : new Html$Format();
    }
  });
  Object.defineProperty(Html$Document.prototype, 'allSpans', {
    get: function () {
      var $receiver = this.paragraphs;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var list = element.lines;
        addAll(destination, list);
      }
      var destination_0 = ArrayList_init_0();
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var list_0 = element_0.spans;
        addAll(destination_0, list_0);
      }
      return destination_0;
    }
  });
  Html$Document.prototype.doPositioning_90chdb$ = function (gp, bounds_0) {
    var tmp$;
    var ctx = new Html$PositionContext(gp, bounds_0);
    tmp$ = this.paragraphs.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      v.doPositioning_tz5d0u$(ctx);
    }
    var $receiver = this.paragraphs;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.bounds);
    }
    bounds(destination, this.bounds);
  };
  Object.defineProperty(Html$Document.prototype, 'extra', {
    get: function () {
      return this.$delegate_is0v8z$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_is0v8z$_0.extra = tmp$;
    }
  });
  Html$Document.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Document',
    interfaces: [Extra]
  };
  Html$Document.prototype.component1 = function () {
    return this.paragraphs;
  };
  Html$Document.prototype.copy_ifs9y5$ = function (paragraphs) {
    return new Html$Document(paragraphs === void 0 ? this.paragraphs : paragraphs);
  };
  Html$Document.prototype.toString = function () {
    return 'Document(paragraphs=' + Kotlin.toString(this.paragraphs) + ')';
  };
  Html$Document.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.paragraphs) | 0;
    return result;
  };
  Html$Document.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.paragraphs, other.paragraphs))));
  };
  function Html$HtmlParser() {
    this.document = new Html$Document();
    this.currentLine = new Html$Line();
    this.currentParagraph = new Html$Paragraph();
  }
  Html$HtmlParser.prototype.get_isDisplayBlock_byavcz$ = function ($receiver) {
    return equals($receiver.name, 'p') || equals($receiver.name, 'div');
  };
  Html$HtmlParser.prototype.emitText_h7bzz5$ = function (format, text) {
    if (this.currentLine.spans.isEmpty()) {
      this.currentLine.format = new Html$Format(format);
    }
    var $receiver = this.currentLine.spans;
    var element = new Html$Span(new Html$Format(format), text);
    $receiver.add_11rb$(element);
  };
  Html$HtmlParser.prototype.emitEndOfLine_ktnn5$ = function (format) {
    if (!this.currentLine.spans.isEmpty()) {
      var $receiver = this.currentParagraph.lines;
      var element = this.currentLine;
      $receiver.add_11rb$(element);
      var $receiver_0 = this.document.paragraphs;
      var element_0 = this.currentParagraph;
      $receiver_0.add_11rb$(element_0);
      this.currentParagraph = new Html$Paragraph();
      this.currentLine = new Html$Line();
    }
  };
  Html$HtmlParser.prototype.parse_tdggph$ = function (xml, format) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (get_isText(xml))
      this.emitText_h7bzz5$(format, xml.text);
    else if (!get_isComment(xml))
      if (get_isNode(xml)) {
        var block = this.get_isDisplayBlock_byavcz$(xml);
        tmp$ = xml.str_puj7f4$('align').toLowerCase();
        if (equals(tmp$, 'center'))
          tmp$_0 = Html$Alignment$Companion_getInstance().CENTER;
        else if (equals(tmp$, 'left'))
          tmp$_0 = Html$Alignment$Companion_getInstance().LEFT;
        else if (equals(tmp$, 'right'))
          tmp$_0 = Html$Alignment$Companion_getInstance().RIGHT;
        else if (equals(tmp$, 'jusitifed'))
          tmp$_0 = Html$Alignment$Companion_getInstance().JUSTIFIED;
        else
          tmp$_0 = format.align;
        format.align = tmp$_0;
        var face = xml.strNull_61zpoe$('face');
        format.face = face != null ? new Html$FontFace$Named(face) : format.face;
        format.size = (tmp$_1 = xml.intNull_61zpoe$('size')) != null ? tmp$_1 : format.size;
        format.letterSpacing = (tmp$_2 = xml.doubleNull_61zpoe$('letterSpacing')) != null ? tmp$_2 : format.letterSpacing;
        format.kerning = (tmp$_3 = xml.intNull_61zpoe$('kerning')) != null ? tmp$_3 : format.kerning;
        format.color = color.NamedColors.get_bm4lxs$((tmp$_4 = xml.strNull_61zpoe$('color')) != null ? tmp$_4 : 'white');
        tmp$_5 = xml.allChildrenNoComments.iterator();
        while (tmp$_5.hasNext()) {
          var child = tmp$_5.next();
          this.parse_tdggph$(child, new Html$Format(format));
        }
        if (block) {
          this.emitEndOfLine_ktnn5$(format);
        }
      }
    return format;
  };
  Html$HtmlParser.prototype.parse_61zpoe$ = function (html) {
    var xml = Xml(html);
    this.document.xml = xml;
    var format = this.parse_tdggph$(xml, this.document.defaultFormat);
    this.emitEndOfLine_ktnn5$(format);
  };
  Html$HtmlParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlParser',
    interfaces: []
  };
  Html.prototype.parse_61zpoe$ = function (html) {
    var $receiver = new Html$HtmlParser();
    $receiver.parse_61zpoe$(html);
    return $receiver.document;
  };
  Html.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Html',
    interfaces: []
  };
  var Html_instance = null;
  function Html_getInstance() {
    if (Html_instance === null) {
      new Html();
    }
    return Html_instance;
  }
  function ConstantTextSource(text) {
    this.text = text;
  }
  ConstantTextSource.prototype.getText_trwjcg$ = function (language) {
    return this.text;
  };
  ConstantTextSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantTextSource',
    interfaces: [TextSource]
  };
  function Language(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Language_initFields() {
    Language_initFields = function () {
    };
    Language$SPANISH_instance = new Language('SPANISH', 0);
    Language$ENGLISH_instance = new Language('ENGLISH', 1);
    Language$Companion_getInstance();
  }
  var Language$SPANISH_instance;
  function Language$SPANISH_getInstance() {
    Language_initFields();
    return Language$SPANISH_instance;
  }
  var Language$ENGLISH_instance;
  function Language$ENGLISH_getInstance() {
    Language_initFields();
    return Language$ENGLISH_instance;
  }
  function Language$Companion() {
    Language$Companion_instance = this;
    this.CURRENT = Language$ENGLISH_getInstance();
    this.SYSTEM = Language$ENGLISH_getInstance();
    this.DEFAULT = Language$ENGLISH_getInstance();
  }
  Language$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Language$Companion_instance = null;
  function Language$Companion_getInstance() {
    Language_initFields();
    if (Language$Companion_instance === null) {
      new Language$Companion();
    }
    return Language$Companion_instance;
  }
  Language.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Language',
    interfaces: [Enum]
  };
  function Language$values() {
    return [Language$SPANISH_getInstance(), Language$ENGLISH_getInstance()];
  }
  Language.values = Language$values;
  function Language$valueOf(name) {
    switch (name) {
      case 'SPANISH':
        return Language$SPANISH_getInstance();
      case 'ENGLISH':
        return Language$ENGLISH_getInstance();
      default:throwISE('No enum constant com.soywiz.korge.i18n.Language.' + name);
    }
  }
  Language.valueOf_61zpoe$ = Language$valueOf;
  function TextContainer() {
  }
  TextContainer.prototype.updateText_trwjcg$ = function (language) {
  };
  TextContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TextContainer',
    interfaces: []
  };
  function TextSource() {
  }
  TextSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TextSource',
    interfaces: []
  };
  function toTextSource($receiver) {
    return new ConstantTextSource($receiver);
  }
  function extraLanguage$lambda() {
    return Language$Companion_getInstance().CURRENT;
  }
  var extraLanguage;
  function get_extraLanguage($receiver) {
    var property = new PropertyMetadata('extraLanguage');
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = extraLanguage.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = extraLanguage.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = extraLanguage.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_extraLanguage($receiver, extraLanguage_0) {
    var property = new PropertyMetadata('extraLanguage');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = extraLanguage.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = extraLanguage_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function set_language$lambda(closure$value) {
    return function (it) {
      if (Kotlin.isType(it, TextContainer))
        it.updateText_trwjcg$(closure$value);
      return Unit;
    };
  }
  function get_language($receiver) {
    return get_extraLanguage($receiver);
  }
  function set_language($receiver, value) {
    set_extraLanguage($receiver, value);
    foreachDescendant($receiver.stage, set_language$lambda(value));
  }
  function Gestures(view) {
    Component.call(this, view);
    this.onSwipe = new Signal();
  }
  function Gestures$Direction(point) {
    Gestures$Direction$Companion_getInstance();
    this.point = point;
  }
  Object.defineProperty(Gestures$Direction.prototype, 'x', {
    get: function () {
      return this.point.x;
    }
  });
  Object.defineProperty(Gestures$Direction.prototype, 'y', {
    get: function () {
      return this.point.y;
    }
  });
  function Gestures$Direction$Companion() {
    Gestures$Direction$Companion_instance = this;
    this.Up = Gestures$Gestures$Direction_init(0, -1);
    this.Down = Gestures$Gestures$Direction_init(0, 1);
    this.Left = Gestures$Gestures$Direction_init(-1, 0);
    this.Right = Gestures$Gestures$Direction_init(1, 0);
  }
  Gestures$Direction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Gestures$Direction$Companion_instance = null;
  function Gestures$Direction$Companion_getInstance() {
    if (Gestures$Direction$Companion_instance === null) {
      new Gestures$Direction$Companion();
    }
    return Gestures$Direction$Companion_instance;
  }
  Gestures$Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: []
  };
  var PointInt$PointInt$Immutable_init = $module$korma_js.com.soywiz.korma.geom.PointInt.Immutable;
  function Gestures$Gestures$Direction_init(x, y, $this) {
    $this = $this || Object.create(Gestures$Direction.prototype);
    var x_0 = x;
    var y_0 = y;
    Gestures$Direction.call($this, new PointInt$PointInt$Immutable_init(numberToInt(x_0), numberToInt(y_0)));
    return $this;
  }
  Gestures.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gestures',
    interfaces: [Component]
  };
  function get_gestures$lambda(this$gestures) {
    return function (it) {
      return new Gestures(this$gestures);
    };
  }
  function get_gestures($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(Gestures), get_gestures$lambda($receiver));
  }
  function Input() {
    Input$Companion_getInstance();
    this.$delegate_h2v5n2$_0 = new Extra$Mixin();
    this.mouse = new Vector2(-1000.0, -1000.0);
    this.mouseButtons = 0;
    this.clicked = false;
    this.keysRaw = Kotlin.booleanArray(Input$Companion_getInstance().KEYCODES);
    this.keysRawPrev = Kotlin.booleanArray(Input$Companion_getInstance().KEYCODES);
    this.keysPressingTime = new Int32Array(Input$Companion_getInstance().KEYCODES);
    this.keysLastTimeTriggered = new Int32Array(Input$Companion_getInstance().KEYCODES);
    this.keys = Kotlin.booleanArray(Input$Companion_getInstance().KEYCODES);
    this.keysJustPressed = Kotlin.booleanArray(Input$Companion_getInstance().KEYCODES);
    this.keysJustReleased = Kotlin.booleanArray(Input$Companion_getInstance().KEYCODES);
  }
  function Input$Companion() {
    Input$Companion_instance = this;
    this.KEYCODES = 256;
  }
  Input$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Input$Companion_instance = null;
  function Input$Companion_getInstance() {
    if (Input$Companion_instance === null) {
      new Input$Companion();
    }
    return Input$Companion_instance;
  }
  Input.prototype.setKey_fzusl$ = function (keyCode, b) {
    var pKeyCode = keyCode & 255;
    if (get_indices_0(this.keysRaw).contains_mef7kx$(pKeyCode))
      this.keysRaw[pKeyCode] = b;
  };
  Input.prototype.startFrame_za3lpa$ = function (dtMs) {
    var tmp$;
    (tmp$ = this.extra) != null ? (tmp$.clear(), Unit) : null;
  };
  Input.prototype.endFrame_za3lpa$ = function (dtMs) {
    var tmp$, tmp$_0, tmp$_1;
    this.clicked = false;
    tmp$ = Input$Companion_getInstance().KEYCODES;
    for (var n = 0; n < tmp$; n++) {
      var prev = this.keysRawPrev[n];
      var curr = this.keysRaw[n];
      this.keysJustReleased[n] = (prev && !curr);
      this.keysJustPressed[n] = (!prev && curr);
      if (curr) {
        tmp$_0 = this.keysPressingTime;
        tmp$_0[n] = tmp$_0[n] + dtMs | 0;
      }
       else {
        this.keysPressingTime[n] = 0;
        this.keysLastTimeTriggered[n] = 0;
      }
      var triggerPress = false;
      var pressingTime = this.keysPressingTime[n];
      if (this.keysPressingTime[n] > 0) {
        if (until(0, 1).contains_mef7kx$(pressingTime))
          tmp$_1 = 0;
        else if (until(1, 300).contains_mef7kx$(pressingTime))
          tmp$_1 = 100;
        else if (until(300, 1000).contains_mef7kx$(pressingTime))
          tmp$_1 = 50;
        else
          tmp$_1 = 20;
        var timeBarrier = tmp$_1;
        var elapsedTime = pressingTime - this.keysLastTimeTriggered[n] | 0;
        if (elapsedTime >= timeBarrier) {
          triggerPress = true;
        }
      }
      if (triggerPress) {
        this.keysLastTimeTriggered[n] = this.keysPressingTime[n];
      }
      this.keys[n] = triggerPress;
    }
    arraycopy(this.keysRaw, 0, this.keysRawPrev, 0, Input$Companion_getInstance().KEYCODES);
  };
  Object.defineProperty(Input.prototype, 'extra', {
    get: function () {
      return this.$delegate_h2v5n2$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_h2v5n2$_0.extra = tmp$;
    }
  });
  Input.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Input',
    interfaces: [Extra]
  };
  function Keys() {
    Keys_instance = this;
    this.LEFT = 37;
    this.UP = 38;
    this.RIGHT = 39;
    this.DOWN = 40;
    this.ESC = 27;
    this.F1 = 112;
    this.F2 = 113;
    this.F3 = 114;
    this.F4 = 115;
    this.F5 = 116;
    this.F6 = 117;
    this.F7 = 118;
    this.F8 = 119;
    this.F9 = 120;
    this.F10 = 121;
    this.F11 = 122;
    this.F12 = 123;
    this.F13 = 124;
    this.F14 = 125;
    this.F15 = 126;
    this.F16 = 127;
    this.F17 = 128;
    this.F18 = 129;
    this.F19 = 130;
    this.F20 = 131;
    this.F21 = 132;
    this.F22 = 133;
    this.F23 = 134;
    this.F24 = 135;
  }
  Keys.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Keys',
    interfaces: []
  };
  var Keys_instance = null;
  function Keys_getInstance() {
    if (Keys_instance === null) {
      new Keys();
    }
    return Keys_instance;
  }
  function KeysComponent(view) {
    Component.call(this, view);
    this.onKeyDown = new AsyncSignal();
    this.onKeyUp = new AsyncSignal();
    this.onKeyTyped = new AsyncSignal();
    var tmp$ = this.detatchCancellables;
    var element = view.addEventListener_8bdrlz$(getKClass(KeyDownEvent), KeysComponent_init$lambda(this));
    tmp$.add_11rb$(element);
    var tmp$_0 = this.detatchCancellables;
    var element_0 = view.addEventListener_8bdrlz$(getKClass(KeyUpEvent), KeysComponent_init$lambda_0(this));
    tmp$_0.add_11rb$(element_0);
    var tmp$_1 = this.detatchCancellables;
    var element_1 = view.addEventListener_8bdrlz$(getKClass(KeyTypedEvent), KeysComponent_init$lambda_1(this));
    tmp$_1.add_11rb$(element_1);
  }
  function KeysComponent_init$lambda$lambda(this$KeysComponent_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$KeysComponent_init$lambda$lambda(this$KeysComponent_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysComponent_init$lambda$lambda(this$KeysComponent_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$KeysComponent = this$KeysComponent_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$KeysComponent_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysComponent_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysComponent_init$lambda$lambda.prototype.constructor = Coroutine$KeysComponent_init$lambda$lambda;
  Coroutine$KeysComponent_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$KeysComponent.onKeyDown.invoke_11rb$(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function KeysComponent_init$lambda(this$KeysComponent) {
    return function (it) {
      go_2(this$KeysComponent, KeysComponent_init$lambda$lambda(this$KeysComponent, it));
      return Unit;
    };
  }
  function KeysComponent_init$lambda$lambda_0(this$KeysComponent_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$KeysComponent_init$lambda$lambda_0(this$KeysComponent_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysComponent_init$lambda$lambda_0(this$KeysComponent_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$KeysComponent = this$KeysComponent_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$KeysComponent_init$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysComponent_init$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysComponent_init$lambda$lambda_0.prototype.constructor = Coroutine$KeysComponent_init$lambda$lambda_0;
  Coroutine$KeysComponent_init$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$KeysComponent.onKeyUp.invoke_11rb$(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function KeysComponent_init$lambda_0(this$KeysComponent) {
    return function (it) {
      go_2(this$KeysComponent, KeysComponent_init$lambda$lambda_0(this$KeysComponent, it));
      return Unit;
    };
  }
  function KeysComponent_init$lambda$lambda_1(this$KeysComponent_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$KeysComponent_init$lambda$lambda_1(this$KeysComponent_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysComponent_init$lambda$lambda_1(this$KeysComponent_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$KeysComponent = this$KeysComponent_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$KeysComponent_init$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysComponent_init$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysComponent_init$lambda$lambda_1.prototype.constructor = Coroutine$KeysComponent_init$lambda$lambda_1;
  Coroutine$KeysComponent_init$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$KeysComponent.onKeyTyped.invoke_11rb$(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function KeysComponent_init$lambda_1(this$KeysComponent) {
    return function (it) {
      go_2(this$KeysComponent, KeysComponent_init$lambda$lambda_1(this$KeysComponent, it));
      return Unit;
    };
  }
  KeysComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeysComponent',
    interfaces: [Component]
  };
  function keys$lambda$lambda(this$) {
    return function (it) {
      return new KeysComponent(this$);
    };
  }
  function keys$lambda($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(KeysComponent), keys$lambda$lambda($receiver));
  }
  var keys;
  function get_keys($receiver) {
    var property = new PropertyMetadata('keys');
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = keys.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = keys.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = keys.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  var onKeyDown = defineInlineFunction('korge-js.com.soywiz.korge.input.onKeyDown_uvtbp5$', wrapFunction(function () {
    var get_keys = _.com.soywiz.korge.input.get_keys_gohfi1$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_keys($receiver) : null) != null ? tmp$.onKeyDown : null) != null ? tmp$_0.add_25kf2w$(handler) : null;
      return $receiver;
    };
  }));
  var onKeyUp = defineInlineFunction('korge-js.com.soywiz.korge.input.onKeyUp_9q8s1e$', wrapFunction(function () {
    var get_keys = _.com.soywiz.korge.input.get_keys_gohfi1$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_keys($receiver) : null) != null ? tmp$.onKeyUp : null) != null ? tmp$_0.add_25kf2w$(handler) : null;
      return $receiver;
    };
  }));
  var onKeyTyped = defineInlineFunction('korge-js.com.soywiz.korge.input.onKeyTyped_qqqumh$', wrapFunction(function () {
    var get_keys = _.com.soywiz.korge.input.get_keys_gohfi1$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_keys($receiver) : null) != null ? tmp$.onKeyTyped : null) != null ? tmp$_0.add_25kf2w$(handler) : null;
      return $receiver;
    };
  }));
  function MouseComponent(view) {
    Component.call(this, view);
    this.input = this.views.input;
    this.onClick = new Signal();
    this.onOver = new Signal();
    this.onOut = new Signal();
    this.onDown = new Signal();
    this.onUp = new Signal();
    this.onUpOutside = new Signal();
    this.onUpAnywhere = new Signal();
    this.onMove = new Signal();
    this.hitTestType = View$HitTestType$BOUNDING_getInstance();
    this.startedPos = new Vector2();
    this.lastPos = new Vector2();
    this.currentPos = new Vector2();
    this.hitTest_64ij1r$_0 = null;
    this.lastOver_0 = false;
    this.lastPressing_0 = false;
    this.CLICK_THRESHOLD = 16;
    this.mouseHitSearch_w91h29$_128k9o$_0 = new Extra$Property(void 0, MouseComponent$mouseHitSearch$lambda);
    this.mouseHitResult_w91h29$_6nrttb$_0 = new Extra$Property(void 0, MouseComponent$mouseHitResult$lambda);
    this.mouseHitResultUsed_w91h29$_jfmwha$_0 = new Extra$Property(void 0, MouseComponent$mouseHitResultUsed$lambda);
    this.mouseDebugHandlerOnce_jv80cy$_opsuhu$_0 = new Extra$Property(void 0, MouseComponent$mouseDebugHandlerOnce$lambda);
    this.downPos = new Vector2();
    this.upPos = new Vector2();
    this.clickedCount = 0;
    var tmp$ = this.detatchCancellables;
    var element = this.view.addEventListener_8bdrlz$(getKClass(MouseClickEvent), MouseComponent_init$lambda(this, view));
    tmp$.add_11rb$(element);
    var tmp$_0 = this.detatchCancellables;
    var element_0 = this.view.addEventListener_8bdrlz$(getKClass(MouseUpEvent), MouseComponent_init$lambda_0(this));
    tmp$_0.add_11rb$(element_0);
    var tmp$_1 = this.detatchCancellables;
    var element_1 = this.view.addEventListener_8bdrlz$(getKClass(MouseDownEvent), MouseComponent_init$lambda_1(this));
    tmp$_1.add_11rb$(element_1);
    var tmp$_2 = this.detatchCancellables;
    var element_2 = this.view.addEventListener_8bdrlz$(getKClass(MouseMovedEvent), MouseComponent_init$lambda_2);
    tmp$_2.add_11rb$(element_2);
  }
  Object.defineProperty(MouseComponent.prototype, 'hitTest', {
    get: function () {
      return this.hitTest_64ij1r$_0;
    },
    set: function (hitTest) {
      this.hitTest_64ij1r$_0 = hitTest;
    }
  });
  MouseComponent.prototype.get_mouseHitSearch_w91h29$ = function ($receiver) {
    var $this = this.mouseHitSearch_w91h29$_128k9o$_0;
    var property = new PropertyMetadata('mouseHitSearch');
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  MouseComponent.prototype.set_mouseHitSearch_rookxo$ = function ($receiver, mouseHitSearch) {
    var $this = this.mouseHitSearch_w91h29$_128k9o$_0;
    var property = new PropertyMetadata('mouseHitSearch');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = mouseHitSearch) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  };
  MouseComponent.prototype.get_mouseHitResult_w91h29$ = function ($receiver) {
    var $this = this.mouseHitResult_w91h29$_6nrttb$_0;
    var property = new PropertyMetadata('mouseHitResult');
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  MouseComponent.prototype.set_mouseHitResult_irk9rs$ = function ($receiver, mouseHitResult) {
    var $this = this.mouseHitResult_w91h29$_6nrttb$_0;
    var property = new PropertyMetadata('mouseHitResult');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = mouseHitResult) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  };
  MouseComponent.prototype.get_mouseHitResultUsed_w91h29$ = function ($receiver) {
    var $this = this.mouseHitResultUsed_w91h29$_jfmwha$_0;
    var property = new PropertyMetadata('mouseHitResultUsed');
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  MouseComponent.prototype.set_mouseHitResultUsed_irk9rs$ = function ($receiver, mouseHitResultUsed) {
    var $this = this.mouseHitResultUsed_w91h29$_jfmwha$_0;
    var property = new PropertyMetadata('mouseHitResultUsed');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = mouseHitResultUsed) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  };
  MouseComponent.prototype.get_mouseDebugHandlerOnce_jv80cy$ = function ($receiver) {
    var $this = this.mouseDebugHandlerOnce_jv80cy$_opsuhu$_0;
    var property = new PropertyMetadata('mouseDebugHandlerOnce');
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  MouseComponent.prototype.set_mouseDebugHandlerOnce_eb019r$ = function ($receiver, mouseDebugHandlerOnce) {
    var $this = this.mouseDebugHandlerOnce_jv80cy$_opsuhu$_0;
    var property = new PropertyMetadata('mouseDebugHandlerOnce');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = mouseDebugHandlerOnce) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  };
  MouseComponent.prototype.getMouseHitResult = function () {
    return this.get_mouseHitResult_w91h29$(this.input);
  };
  MouseComponent.prototype.hitTest_0 = function () {
    if (!this.get_mouseHitSearch_w91h29$(this.input)) {
      this.set_mouseHitSearch_rookxo$(this.input, true);
      this.set_mouseHitResult_irk9rs$(this.input, this.views.stage.hitTest_fjnra5$(this.views.nativeMouseX, this.views.nativeMouseY, this.hitTestType));
    }
    return this.get_mouseHitResult_w91h29$(this.input);
  };
  Object.defineProperty(MouseComponent.prototype, 'isOver', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.hitTest) != null ? hasAncestor(tmp$, this.view) : null) != null ? tmp$_0 : false;
    }
  });
  function MouseComponent$update$lambda$lambda(this$MouseComponent) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var mouseHit = this$MouseComponent.hitTest_0();
      if (mouseHit != null) {
        var bounds = mouseHit.getLocalBounds_2da8yn$();
        tmp$_5 = $receiver.renderContext.batch;
        tmp$ = $receiver.views.whiteTexture;
        tmp$_0 = bounds.x;
        tmp$_1 = bounds.y;
        tmp$_2 = bounds.width;
        tmp$_3 = bounds.height;
        tmp$_4 = color.RGBA.invoke_tjonv8$(255, 0, 0, 63);
        tmp$_5.drawQuad_4rxj9x$(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, mouseHit.globalMatrix, void 0, tmp$_4);
        drawText($receiver.renderContext.batch, $receiver.defaultFont, 16.0, mouseHit.toString() + ' : ' + toString($receiver.views.nativeMouseX) + ',' + toString($receiver.views.nativeMouseY), 0, 0);
      }
      var mouseHitResultUsed = this$MouseComponent.get_mouseHitResultUsed_w91h29$($receiver.input);
      if (mouseHitResultUsed != null) {
        var bounds_0 = mouseHitResultUsed.getLocalBounds_2da8yn$();
        tmp$_12 = $receiver.renderContext.batch;
        tmp$_6 = $receiver.views.whiteTexture;
        tmp$_7 = bounds_0.x;
        tmp$_8 = bounds_0.y;
        tmp$_9 = bounds_0.width;
        tmp$_10 = bounds_0.height;
        tmp$_11 = color.RGBA.invoke_tjonv8$(0, 0, 255, 63);
        tmp$_12.drawQuad_4rxj9x$(tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, mouseHitResultUsed.globalMatrix, void 0, tmp$_11);
        drawText($receiver.renderContext.batch, $receiver.defaultFont, 16.0, mouseHitResultUsed.toString(), 0, 16);
      }
      return Unit;
    };
  }
  function MouseComponent$update$lambda(this$MouseComponent) {
    return function () {
      var $receiver = this$MouseComponent.views.debugHandlers;
      var element = MouseComponent$update$lambda$lambda(this$MouseComponent);
      $receiver.add_11rb$(element);
      return Unit;
    };
  }
  MouseComponent.prototype.update_za3lpa$ = function (dtMs) {
    var tmp$;
    this.get_mouseDebugHandlerOnce_jv80cy$(this.views).invoke_o14v8n$(MouseComponent$update$lambda(this));
    this.hitTest = this.hitTest_0();
    var over = this.isOver;
    if (over)
      this.set_mouseHitResultUsed_irk9rs$(this.input, this.view);
    var pressing = this.input.mouseButtons !== 0;
    var overChanged = this.lastOver_0 !== over;
    var pressingChanged = pressing !== this.lastPressing_0;
    this.view.globalToLocal_g6xq6k$(this.input.mouse, this.currentPos);
    if (!overChanged && over && !((tmp$ = this.currentPos) != null ? tmp$.equals(this.lastPos) : null))
      this.onMove.invoke_11rb$(this);
    if (overChanged && over)
      this.onOver.invoke_11rb$(this);
    if (overChanged && !over)
      this.onOut.invoke_11rb$(this);
    if (over && pressingChanged && pressing) {
      this.startedPos.copyFrom_yyv1mw$(this.currentPos);
      this.onDown.invoke_11rb$(this);
    }
    if (pressingChanged && !pressing) {
      if (over)
        this.onUp.invoke_11rb$(this);
      else
        this.onUpOutside.invoke_11rb$(this);
      this.onUpAnywhere.invoke_11rb$(this);
    }
    this.lastOver_0 = over;
    this.lastPressing_0 = pressing;
    this.lastPos.copyFrom_yyv1mw$(this.currentPos);
    this.clickedCount = 0;
  };
  function MouseComponent$mouseHitSearch$lambda() {
    return false;
  }
  function MouseComponent$mouseHitResult$lambda() {
    return null;
  }
  function MouseComponent$mouseHitResultUsed$lambda() {
    return null;
  }
  function MouseComponent$mouseDebugHandlerOnce$lambda() {
    return new Once();
  }
  function MouseComponent_init$lambda(this$MouseComponent, closure$view) {
    return function (e) {
      if (this$MouseComponent.isOver) {
        this$MouseComponent.onClick.invoke_11rb$(this$MouseComponent);
        if (this$MouseComponent.onClick.listenerCount > 0) {
          preventDefault(closure$view);
        }
      }
      return Unit;
    };
  }
  function MouseComponent_init$lambda_0(this$MouseComponent) {
    return function (e) {
      var tmp$;
      this$MouseComponent.upPos.copyFrom_yyv1mw$(this$MouseComponent.input.mouse);
      if (this$MouseComponent.upPos.distanceTo_yyv1mw$(this$MouseComponent.downPos) < this$MouseComponent.CLICK_THRESHOLD) {
        tmp$ = this$MouseComponent.clickedCount;
        this$MouseComponent.clickedCount = tmp$ + 1 | 0;
      }
      return Unit;
    };
  }
  function MouseComponent_init$lambda_1(this$MouseComponent) {
    return function (e) {
      this$MouseComponent.downPos.copyFrom_yyv1mw$(this$MouseComponent.input.mouse);
      return Unit;
    };
  }
  function MouseComponent_init$lambda_2(e) {
    return Unit;
  }
  MouseComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseComponent',
    interfaces: [Component]
  };
  function mouse$lambda$lambda(this$) {
    return function (it) {
      return new MouseComponent(this$);
    };
  }
  function mouse$lambda($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(MouseComponent), mouse$lambda$lambda($receiver));
  }
  var mouse;
  function get_mouse($receiver) {
    var property = new PropertyMetadata('mouse');
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = mouse.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = mouse.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = mouse.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  var onClick = defineInlineFunction('korge-js.com.soywiz.korge.input.onClick_uqlhil$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onClick : null) != null ? addSuspend(tmp$_0, $receiver.views.coroutineContext, handler) : null;
      return $receiver;
    };
  }));
  var onOver = defineInlineFunction('korge-js.com.soywiz.korge.input.onOver_uqlhil$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onOver : null) != null ? addSuspend(tmp$_0, $receiver.views.coroutineContext, handler) : null;
      return $receiver;
    };
  }));
  var onOut = defineInlineFunction('korge-js.com.soywiz.korge.input.onOut_uqlhil$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onOut : null) != null ? addSuspend(tmp$_0, $receiver.views.coroutineContext, handler) : null;
      return $receiver;
    };
  }));
  var onDown = defineInlineFunction('korge-js.com.soywiz.korge.input.onDown_uqlhil$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onDown : null) != null ? addSuspend(tmp$_0, $receiver.views.coroutineContext, handler) : null;
      return $receiver;
    };
  }));
  var onUp = defineInlineFunction('korge-js.com.soywiz.korge.input.onUp_uqlhil$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onUp : null) != null ? addSuspend(tmp$_0, $receiver.views.coroutineContext, handler) : null;
      return $receiver;
    };
  }));
  var onUpOutside = defineInlineFunction('korge-js.com.soywiz.korge.input.onUpOutside_uqlhil$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onUpOutside : null) != null ? addSuspend(tmp$_0, $receiver.views.coroutineContext, handler) : null;
      return $receiver;
    };
  }));
  var onUpAnywhere = defineInlineFunction('korge-js.com.soywiz.korge.input.onUpAnywhere_uqlhil$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onUpAnywhere : null) != null ? addSuspend(tmp$_0, $receiver.views.coroutineContext, handler) : null;
      return $receiver;
    };
  }));
  var onMove = defineInlineFunction('korge-js.com.soywiz.korge.input.onMove_uqlhil$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onMove : null) != null ? addSuspend(tmp$_0, $receiver.views.coroutineContext, handler) : null;
      return $receiver;
    };
  }));
  function get_portableSimpleName($receiver) {
    return KorgeNative_getInstance().getClassSimpleName_xo1ogr$($receiver);
  }
  function KorgePlugin() {
  }
  KorgePlugin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgePlugin',
    interfaces: []
  };
  var defaultKorgePlugins;
  function KorgePlugins() {
    this.plugins = LinkedHashSet_init();
  }
  var addAll_0 = Kotlin.kotlin.collections.addAll_ye1y7v$;
  KorgePlugins.prototype.register_8nuyex$ = function (plugins) {
    addAll_0(this.plugins, plugins);
    return this;
  };
  KorgePlugins.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgePlugins',
    interfaces: []
  };
  function BatchBuilder2D(ag, maxQuads) {
    BatchBuilder2D$Companion_getInstance();
    if (maxQuads === void 0)
      maxQuads = 1000;
    this.ag = ag;
    this.maxQuads = maxQuads;
    this.flipRenderTexture = true;
    this.maxQuadsMargin = this.maxQuads + 9 | 0;
    this.maxVertices = this.maxQuads * 4 | 0;
    this.maxIndices = this.maxQuads * 6 | 0;
    this.vertices_0 = FastMemory.Companion.alloc_za3lpa$(Kotlin.imul(6 * 4 | 0, this.maxVertices));
    this.indices_0 = FastMemory.Companion.alloc_za3lpa$(2 * this.maxIndices | 0);
    this.vertexCount_0 = 0;
    this.vertexPos_0 = 0;
    this.indexPos_0 = 0;
    this.currentTex_0 = null;
    this.currentSmoothing_0 = false;
    this.currentBlendFactors_0 = BlendMode$NORMAL_getInstance().factors;
    this.vertexBuffer_0 = this.ag.createVertexBuffer();
    this.indexBuffer_0 = this.ag.createIndexBuffer();
    this.stencil = new AG$StencilState();
    this.colorMask = new AG$ColorMaskState();
    this.identity_0 = new Matrix2d();
    this.ptt1_0 = new Vector2();
    this.ptt2_0 = new Vector2();
    this.pt1_0 = new Vector2();
    this.pt2_0 = new Vector2();
    this.pt3_0 = new Vector2();
    this.pt4_0 = new Vector2();
    this.pt5_0 = new Vector2();
    this.pt6_0 = new Vector2();
    this.pt7_0 = new Vector2();
    this.pt8_0 = new Vector2();
    this.projMat_0 = new Matrix4();
    this.textureUnit_0 = new AG$TextureUnit(null, false);
    this.uniforms_0 = mapOf([to(korag.DefaultShaders.u_ProjMat, this.projMat_0), to(korag.DefaultShaders.u_Tex, this.textureUnit_0)]);
  }
  BatchBuilder2D.prototype.addVertex_0 = function (x, y, u, v, colorMul, colorAdd) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.vertices_0.setAlignedFloat32_24o109$((tmp$ = this.vertexPos_0, this.vertexPos_0 = tmp$ + 1 | 0, tmp$), x);
    this.vertices_0.setAlignedFloat32_24o109$((tmp$_0 = this.vertexPos_0, this.vertexPos_0 = tmp$_0 + 1 | 0, tmp$_0), y);
    this.vertices_0.setAlignedFloat32_24o109$((tmp$_1 = this.vertexPos_0, this.vertexPos_0 = tmp$_1 + 1 | 0, tmp$_1), u);
    this.vertices_0.setAlignedFloat32_24o109$((tmp$_2 = this.vertexPos_0, this.vertexPos_0 = tmp$_2 + 1 | 0, tmp$_2), v);
    this.vertices_0.setAlignedInt32_vux9f0$((tmp$_3 = this.vertexPos_0, this.vertexPos_0 = tmp$_3 + 1 | 0, tmp$_3), colorMul);
    this.vertices_0.setAlignedInt32_vux9f0$((tmp$_4 = this.vertexPos_0, this.vertexPos_0 = tmp$_4 + 1 | 0, tmp$_4), colorAdd);
    this.vertexCount_0 = this.vertexCount_0 + 1 | 0;
  };
  BatchBuilder2D.prototype.addIndex_0 = function (idx) {
    var tmp$;
    this.indices_0.setAlignedInt16_2bqt6h$((tmp$ = this.indexPos_0, this.indexPos_0 = tmp$ + 1 | 0, tmp$), toShort(idx));
  };
  BatchBuilder2D.prototype.drawQuadFast_o2d3sk$ = function (x0, y0, x1, y1, x2, y2, x3, y3, tex, colorMul, colorAdd, rotated) {
    if (rotated === void 0)
      rotated = false;
    this.ensure_0(6, 4);
    this.addIndex_0(this.vertexCount_0 + 0 | 0);
    this.addIndex_0(this.vertexCount_0 + 1 | 0);
    this.addIndex_0(this.vertexCount_0 + 2 | 0);
    this.addIndex_0(this.vertexCount_0 + 3 | 0);
    this.addIndex_0(this.vertexCount_0 + 0 | 0);
    this.addIndex_0(this.vertexCount_0 + 2 | 0);
    if (rotated) {
      this.addVertex_0(x0, y0, tex.x0, tex.y0, colorMul, colorAdd);
      this.addVertex_0(x1, y1, tex.x1, tex.y0, colorMul, colorAdd);
      this.addVertex_0(x2, y2, tex.x1, tex.y1, colorMul, colorAdd);
      this.addVertex_0(x3, y3, tex.x0, tex.y1, colorMul, colorAdd);
    }
     else {
      this.addVertex_0(x0, y0, tex.x0, tex.y0, colorMul, colorAdd);
      this.addVertex_0(x1, y1, tex.x1, tex.y0, colorMul, colorAdd);
      this.addVertex_0(x2, y2, tex.x1, tex.y1, colorMul, colorAdd);
      this.addVertex_0(x3, y3, tex.x0, tex.y1, colorMul, colorAdd);
    }
  };
  BatchBuilder2D.prototype.ensure_0 = function (indices, vertices) {
    if ((this.indexPos_0 + indices | 0) >= this.maxIndices || (this.vertexPos_0 + vertices | 0) >= this.maxQuads) {
      this.flush();
    }
  };
  BatchBuilder2D.prototype.setStateFast_2cvl8y$ = function (tex, smoothing, blendFactors) {
    this.setStateFast_j79byp$(tex.base, smoothing, blendFactors);
  };
  BatchBuilder2D.prototype.setStateFast_j79byp$ = function (tex, smoothing, blendFactors) {
    var tmp$;
    if (!equals(tex, this.currentTex_0) || this.currentSmoothing_0 !== smoothing || !((tmp$ = this.currentBlendFactors_0) != null ? tmp$.equals(blendFactors) : null)) {
      this.flush();
      this.currentTex_0 = tex;
      this.currentSmoothing_0 = smoothing;
      this.currentBlendFactors_0 = blendFactors;
    }
  };
  BatchBuilder2D.prototype.drawNinePatch_sk7p02$ = function (tex, x, y, width, height, posCuts, texCuts, m, filtering, colorMul, colorAdd, blendFactors) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = tex.width;
    if (height === void 0)
      height = tex.height;
    if (m === void 0)
      m = this.identity_0;
    if (filtering === void 0)
      filtering = true;
    if (colorMul === void 0)
      colorMul = -1;
    if (colorAdd === void 0)
      colorAdd = 2139062143;
    if (blendFactors === void 0)
      blendFactors = BlendMode$NORMAL_getInstance().factors;
    this.setStateFast_2cvl8y$(tex.base, filtering, blendFactors);
    this.ensure_0(6 * 9 | 0, 4 * 4 | 0);
    var p_o = this.pt1_0.setToTransform_5b77wq$(m, this.ptt1_0.setTo_lu1900$(numberToDouble(x), numberToDouble(y)));
    var tmp$ = this.pt2_0;
    var tmp$_0 = this.ptt1_0;
    var $this = this.ptt1_0;
    var x_0 = x + width;
    var p_dU = tmp$.setToSub_tidpjw$(tmp$_0.setToTransform_5b77wq$(m, $this.setTo_lu1900$(numberToDouble(x_0), numberToDouble(y))), p_o);
    var tmp$_1 = this.pt3_0;
    var tmp$_2 = this.ptt1_0;
    var $this_0 = this.ptt1_0;
    var y_0 = y + height;
    var p_dV = tmp$_1.setToSub_tidpjw$(tmp$_2.setToTransform_5b77wq$(m, $this_0.setTo_lu1900$(numberToDouble(x), numberToDouble(y_0))), p_o);
    var $this_1 = this.pt4_0;
    var x_1 = tex.x0;
    var y_1 = tex.y0;
    var t_o = $this_1.setTo_lu1900$(numberToDouble(x_1), numberToDouble(y_1));
    var tmp$_3 = this.pt5_0;
    var $this_2 = this.ptt1_0;
    var x_2 = tex.x1;
    var y_2 = tex.y0;
    var t_dU = tmp$_3.setToSub_tidpjw$($this_2.setTo_lu1900$(numberToDouble(x_2), numberToDouble(y_2)), t_o);
    var tmp$_4 = this.pt6_0;
    var $this_3 = this.ptt1_0;
    var x_3 = tex.x0;
    var y_3 = tex.y1;
    var t_dV = tmp$_4.setToSub_tidpjw$($this_3.setTo_lu1900$(numberToDouble(x_3), numberToDouble(y_3)), t_o);
    var start = this.vertexCount_0;
    for (var cy = 0; cy < 4; cy++) {
      var posCutY = posCuts[cy].y;
      var texCutY = texCuts[cy].y;
      for (var cx = 0; cx < 4; cx++) {
        var posCutX = posCuts[cx].x;
        var texCutX = texCuts[cx].x;
        var p = this.pt7_0.setToAdd_tidpjw$(p_o, this.ptt1_0.setToAdd_tidpjw$(this.ptt1_0.setToMul_eq20iu$(p_dU, posCutX), this.ptt2_0.setToMul_eq20iu$(p_dV, posCutY)));
        var t = this.pt8_0.setToAdd_tidpjw$(t_o, this.ptt1_0.setToAdd_tidpjw$(this.ptt1_0.setToMul_eq20iu$(t_dU, texCutX), this.ptt2_0.setToMul_eq20iu$(t_dV, texCutY)));
        this.addVertex_0(p.x, p.y, t.x, t.y, colorMul, colorAdd);
      }
    }
    for (var cy_0 = 0; cy_0 < 3; cy_0++) {
      for (var cx_0 = 0; cx_0 < 3; cx_0++) {
        var v0 = start + (cy_0 * 4 | 0) + cx_0 | 0;
        var v1 = v0 + 1 | 0;
        var v2 = v0 + 4 | 0;
        var v3 = v0 + 5 | 0;
        this.addIndex_0(v0);
        this.addIndex_0(v1);
        this.addIndex_0(v2);
        this.addIndex_0(v2);
        this.addIndex_0(v1);
        this.addIndex_0(v3);
      }
    }
  };
  BatchBuilder2D.prototype.drawQuad_4rxj9x$ = function (tex, x, y, width, height, m, filtering, colorMul, colorAdd, blendFactors, rotated) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = tex.width;
    if (height === void 0)
      height = tex.height;
    if (m === void 0)
      m = this.identity_0;
    if (filtering === void 0)
      filtering = true;
    if (colorMul === void 0)
      colorMul = -1;
    if (colorAdd === void 0)
      colorAdd = 2139062143;
    if (blendFactors === void 0)
      blendFactors = BlendMode$NORMAL_getInstance().factors;
    if (rotated === void 0)
      rotated = false;
    var x0 = x;
    var x1 = x + width;
    var y0 = y;
    var y1 = y + height;
    this.setStateFast_2cvl8y$(tex.base, filtering, blendFactors);
    this.drawQuadFast_o2d3sk$(m.transformXf_lu1900$(x0, y0), m.transformYf_lu1900$(x0, y0), m.transformXf_lu1900$(x1, y0), m.transformYf_lu1900$(x1, y0), m.transformXf_lu1900$(x1, y1), m.transformYf_lu1900$(x1, y1), m.transformXf_lu1900$(x0, y1), m.transformYf_lu1900$(x0, y1), tex, colorMul, colorAdd, rotated);
  };
  function BatchBuilder2D$Companion() {
    BatchBuilder2D$Companion_instance = this;
    this.a_ColMul = korag.DefaultShaders.a_Col;
    this.a_ColAdd = Attribute_init('a_Col2', VarType.Byte4, true);
    this.v_ColMul = korag.DefaultShaders.v_Col;
    this.v_ColAdd = new Varying('v_Col2', VarType.Byte4);
    this.LAYOUT = VertexLayout_init([korag.DefaultShaders.a_Pos, korag.DefaultShaders.a_Tex, this.a_ColMul, this.a_ColAdd]);
    this.VERTEX = VertexShader(BatchBuilder2D$Companion$VERTEX$lambda(this));
    this.PROGRAM_PRE = new Program(this.VERTEX, this.buildFragment_0(true), 'BatchBuilder2D.Premultiplied.Tinted');
    this.PROGRAM_NOPRE = new Program(this.VERTEX, this.buildFragment_0(false), 'BatchBuilder2D.NoPremultiplied.Tinted');
  }
  var Program$Program$Builder_init = $module$korag_js.com.soywiz.korag.shader.Program.Builder;
  var Program$Stm$Program$Stm$Stms_init = $module$korag_js.com.soywiz.korag.shader.Program.Stm.Stms;
  var Program$Stm$Program$Stm$If_init = $module$korag_js.com.soywiz.korag.shader.Program.Stm.If;
  function BatchBuilder2D$Companion$buildFragment$lambda(closure$premultiplied, this$BatchBuilder2D$) {
    return function ($receiver) {
      var $receiver_0 = korag.DefaultShaders;
      var closure$premultiplied_0 = closure$premultiplied;
      var this$BatchBuilder2D$_0 = this$BatchBuilder2D$;
      $receiver.SET_q0hzsk$($receiver_0.t_Temp1, $receiver.texture2D_q0hzsk$($receiver_0.u_Tex, $receiver.get_hhgt4v$($receiver_0.v_Tex, 'xy')));
      if (closure$premultiplied_0) {
        $receiver.SET_q0hzsk$($receiver.get_hhgt4v$($receiver_0.t_Temp1, 'rgb'), $receiver.div_2oogdr$($receiver.get_hhgt4v$($receiver_0.t_Temp1, 'rgb'), $receiver.get_hhgt4v$($receiver_0.t_Temp1, 'a')));
      }
      $receiver.SET_q0hzsk$($receiver.out, $receiver.plus_2oogdr$($receiver.times_2oogdr$($receiver.get_hhgt4v$($receiver_0.t_Temp1, 'rgba'), $receiver.get_hhgt4v$(this$BatchBuilder2D$_0.v_ColMul, 'rgba')), $receiver.times_2oogdr$($receiver.minus_2oogdr$($receiver.get_hhgt4v$(this$BatchBuilder2D$_0.v_ColAdd, 'rgba'), $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(0.5), $receiver.get_lit_81szk$(0.5), $receiver.get_lit_81szk$(0.5), $receiver.get_lit_81szk$(0.5)])), $receiver.get_lit_81szk$(2.0))));
      if (closure$premultiplied_0) {
        var cond = $receiver.le_2oogdr$($receiver.get_hhgt4v$($receiver.out, 'a'), $receiver.get_lit_81szk$(0.0));
        var body = new Program$Program$Builder_init($receiver.type);
        body.DISCARD();
        var stmIf = new Program$Stm$Program$Stm$If_init(cond, new Program$Stm$Program$Stm$Stms_init(body.outputStms));
        $receiver.outputStms.add_11rb$(stmIf);
      }
      return Unit;
    };
  }
  BatchBuilder2D$Companion.prototype.buildFragment_0 = function (premultiplied) {
    return FragmentShader(BatchBuilder2D$Companion$buildFragment$lambda(premultiplied, this));
  };
  function BatchBuilder2D$Companion$VERTEX$lambda(this$BatchBuilder2D$) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$(korag.DefaultShaders.v_Tex, korag.DefaultShaders.a_Tex);
      $receiver.SET_q0hzsk$(this$BatchBuilder2D$.v_ColMul, this$BatchBuilder2D$.a_ColMul);
      $receiver.SET_q0hzsk$(this$BatchBuilder2D$.v_ColAdd, this$BatchBuilder2D$.a_ColAdd);
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$(korag.DefaultShaders.u_ProjMat, $receiver.vec4_hywno3$([korag.DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)])));
      return Unit;
    };
  }
  BatchBuilder2D$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BatchBuilder2D$Companion_instance = null;
  function BatchBuilder2D$Companion_getInstance() {
    if (BatchBuilder2D$Companion_instance === null) {
      new BatchBuilder2D$Companion();
    }
    return BatchBuilder2D$Companion_instance;
  }
  BatchBuilder2D.prototype.flush = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.vertexCount_0 > 0) {
      if (this.flipRenderTexture && this.ag.renderingToTexture) {
        this.projMat_0.setToOrtho_w8lrqs$(0.0, this.ag.backHeight, this.ag.backWidth, 0.0, -1.0, 1.0);
      }
       else {
        this.projMat_0.setToOrtho_w8lrqs$(0.0, 0.0, this.ag.backWidth, this.ag.backHeight, -1.0, 1.0);
      }
      var factors = this.currentBlendFactors_0;
      this.vertexBuffer_0.upload_1bktx$(this.vertices_0, 0, this.vertexPos_0 * 4 | 0);
      this.indexBuffer_0.upload_1bktx$(this.indices_0, 0, this.indexPos_0 * 2 | 0);
      this.textureUnit_0.texture = this.currentTex_0;
      this.textureUnit_0.linear = this.currentSmoothing_0;
      tmp$_2 = this.ag;
      tmp$ = this.vertexBuffer_0;
      tmp$_0 = this.indexBuffer_0;
      tmp$_2.draw_3hoar0$(tmp$, ((tmp$_1 = this.currentTex_0) != null ? tmp$_1.premultiplied : null) === true ? BatchBuilder2D$Companion_getInstance().PROGRAM_PRE : BatchBuilder2D$Companion_getInstance().PROGRAM_NOPRE, AG$DrawType.TRIANGLES, BatchBuilder2D$Companion_getInstance().LAYOUT, this.indexPos_0, tmp$_0, void 0, factors, this.uniforms_0, this.stencil, this.colorMask);
    }
    this.vertexCount_0 = 0;
    this.vertexPos_0 = 0;
    this.indexPos_0 = 0;
    this.currentTex_0 = null;
  };
  BatchBuilder2D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BatchBuilder2D',
    interfaces: []
  };
  function ensurePowerOfTwo($receiver) {
    if (get_isPowerOfTwo($receiver.width) && get_isPowerOfTwo($receiver.height)) {
      return $receiver;
    }
     else {
      var out = new Bitmap32(get_nextPowerOfTwo($receiver.width), get_nextPowerOfTwo($receiver.height));
      out.put_dryc6d$($receiver);
      return out;
    }
  }
  function RenderContext(ag) {
    this.ag = ag;
    this.$delegate_8isv09$_0 = new Extra$Mixin();
    this.frame = 0;
    this.batch = new BatchBuilder2D(this.ag);
    this.ctx2d = new RenderContext2D(this.batch);
    this.masksEnabled = true;
  }
  RenderContext.prototype.flush = function () {
    this.batch.flush();
  };
  function RenderContext$renderToTexture$lambda(closure$use) {
    return function (rt) {
      closure$use(Texture$Companion_getInstance().invoke_69xoz1$(rt));
      return Unit;
    };
  }
  var AG$AG$RenderTexture_init = $module$korag_js.com.soywiz.korag.AG.RenderTexture;
  function AG$renderToTextureInternal$lambda(this$AG, closure$rb) {
    return function () {
      var $receiver = this$AG.frameRenderBuffers;
      var element = closure$rb;
      $receiver.remove_11rb$(element);
      this$AG.renderBuffers.free_11rb$(closure$rb);
      return Unit;
    };
  }
  RenderContext.prototype.renderToTexture_fnloth$ = function (width, height, renderToTexture, use_0) {
    this.flush();
    var $this = this.ag;
    var renderToTexture_sxjeop$result;
    var oldRendering = $this.renderingToTexture;
    var oldWidth = $this.backWidth;
    var oldHeight = $this.backHeight;
    $this.renderingToTexture = true;
    try {
      var rb = $this.renderBuffers.alloc();
      $this.frameRenderBuffers.add_11rb$(rb);
      var oldRendering_0 = $this.renderingToTexture;
      $this.renderingToTexture = true;
      rb.start_vux9f0$(width, height);
      try {
        $this.clear_2lepo2$(0);
        renderToTexture();
        this.flush();
      }
      finally {
        rb.end();
        $this.renderingToTexture = oldRendering_0;
      }
      renderToTexture_sxjeop$result = new AG$AG$RenderTexture_init(rb.tex, width, height, AG$renderToTextureInternal$lambda($this, rb));
    }
    finally {
      $this.renderingToTexture = oldRendering;
    }
    use(renderToTexture_sxjeop$result, RenderContext$renderToTexture$lambda(use_0));
  };
  RenderContext.prototype.renderToBitmap_1xki6w$ = function (bmp, callback) {
    this.flush();
    var $this = this.ag;
    var rb = $this.renderBuffers.alloc();
    var oldRendering = $this.renderingToTexture;
    $this.renderingToTexture = true;
    rb.start_vux9f0$(bmp.width, bmp.height);
    try {
      $this.clear_2lepo2$(0);
      callback();
      this.flush();
    }
    finally {
      rb.readBitmap_59u9qz$(bmp);
      rb.end();
      $this.renderingToTexture = oldRendering;
      $this.renderBuffers.free_11rb$(rb);
    }
    return bmp;
  };
  RenderContext.prototype.finish = function () {
    this.ag.flip();
  };
  Object.defineProperty(RenderContext.prototype, 'extra', {
    get: function () {
      return this.$delegate_8isv09$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_8isv09$_0.extra = tmp$;
    }
  });
  RenderContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderContext',
    interfaces: [Extra]
  };
  function RenderContext2D(batch) {
    this.batch = batch;
    this.$delegate_lchfrf$_0 = new Extra$Mixin();
    this.mpool = Pool_init(void 0, RenderContext2D$mpool$lambda);
    this.m = new Matrix2d();
    this.blendFactors = AG$Blending.Companion.NORMAL;
    this.multiplyColor = color.Colors.WHITE;
  }
  RenderContext2D.prototype.keepMatrix_klfg04$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.keepMatrix_klfg04$', wrapFunction(function () {
    return function (callback) {
      var $this = this.mpool;
      var temp = $this.alloc();
      try {
        var callback$result;
        temp.copyFrom_7f5bc6$(this.m);
        try {
          callback$result = callback();
        }
        finally {
          this.m.copyFrom_7f5bc6$(temp);
        }
      }
      finally {
        $this.free_11rb$(temp);
      }
      return callback$result;
    };
  }));
  RenderContext2D.prototype.keepBlendFactors_klfg04$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.keepBlendFactors_klfg04$', function (callback) {
    var oldBlendFactors = this.blendFactors;
    try {
      return callback();
    }
    finally {
      this.blendFactors = oldBlendFactors;
    }
  });
  RenderContext2D.prototype.keep_klfg04$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.keep_klfg04$', wrapFunction(function () {
    function RenderContext2D$keep$lambda$lambda$lambda(closure$callback) {
      return function () {
        return closure$callback();
      };
    }
    function RenderContext2D$keep$lambda$lambda(closure$callback, this$RenderContext2D) {
      return function () {
        var $this = this$RenderContext2D;
        var callback = RenderContext2D$keep$lambda$lambda$lambda(closure$callback);
        var keepColor_klfg04$result;
        var multiplyColor = $this.multiplyColor;
        try {
          keepColor_klfg04$result = callback();
        }
        finally {
          $this.multiplyColor = multiplyColor;
        }
        return keepColor_klfg04$result;
      };
    }
    function RenderContext2D$keep$lambda(closure$callback, this$RenderContext2D) {
      return function () {
        var $this = this$RenderContext2D;
        var callback = RenderContext2D$keep$lambda$lambda(closure$callback, this$RenderContext2D);
        var keepBlendFactors_klfg04$result;
        var oldBlendFactors = $this.blendFactors;
        try {
          keepBlendFactors_klfg04$result = callback();
        }
        finally {
          $this.blendFactors = oldBlendFactors;
        }
        return keepBlendFactors_klfg04$result;
      };
    }
    return function (callback) {
      var $this = this.mpool;
      var temp = $this.alloc();
      try {
        var callback$result;
        temp.copyFrom_7f5bc6$(this.m);
        try {
          callback$result = RenderContext2D$keep$lambda(callback, this)();
        }
        finally {
          this.m.copyFrom_7f5bc6$(temp);
        }
      }
      finally {
        $this.free_11rb$(temp);
      }
      return callback$result;
    };
  }));
  RenderContext2D.prototype.keepColor_klfg04$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.keepColor_klfg04$', function (callback) {
    var multiplyColor = this.multiplyColor;
    try {
      return callback();
    }
    finally {
      this.multiplyColor = multiplyColor;
    }
  });
  RenderContext2D.prototype.setMatrix_yx07kl$ = function (matrix) {
    this.m.copyFrom_7f5bc6$(matrix);
  };
  RenderContext2D.prototype.translate_lu1900$ = function (dx, dy) {
    this.m.pretranslate_lu1900$(dx, dy);
  };
  RenderContext2D.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    this.m.prescale_lu1900$(sx, sy);
  };
  RenderContext2D.prototype.scale_14dthe$ = function (scale) {
    this.m.prescale_lu1900$(scale, scale);
  };
  RenderContext2D.prototype.rotate_14dthe$ = function (angle) {
    this.m.prerotate_14dthe$(angle);
  };
  RenderContext2D.prototype.imageScale_srws8f$ = function (texture, x, y, scale) {
    this.batch.drawQuad_4rxj9x$(texture, x, y, texture.width * scale, texture.height * scale, this.m, void 0, this.multiplyColor, void 0, this.blendFactors);
  };
  Object.defineProperty(RenderContext2D.prototype, 'extra', {
    get: function () {
      return this.$delegate_lchfrf$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_lchfrf$_0.extra = tmp$;
    }
  });
  function RenderContext2D$mpool$lambda(it) {
    return new Matrix2d();
  }
  RenderContext2D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderContext2D',
    interfaces: [Extra]
  };
  function Texture(base, left, top, right, bottom) {
    Texture$Companion_getInstance();
    if (left === void 0)
      left = 0;
    if (top === void 0)
      top = 0;
    if (right === void 0)
      right = base.width;
    if (bottom === void 0)
      bottom = base.height;
    this.base = base;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.x = this.left;
    this.y = this.top;
    this.width = this.right - this.left | 0;
    this.height = this.bottom - this.top | 0;
    this.x0 = this.left / this.base.width;
    this.x1 = this.right / this.base.width;
    this.y0 = this.top / this.base.height;
    this.y1 = this.bottom / this.base.height;
  }
  Texture.prototype.toString = function () {
    return 'Texture(' + this.base + ', (x=' + this.x + ', y=' + this.y + ', width=' + this.width + ', height=' + this.height + '))';
  };
  Texture.prototype.slice_tjonv8$ = function (x, y, width, height) {
    return this.sliceBounds_tjonv8$(x, y, x + width | 0, y + height | 0);
  };
  Texture.prototype.slice_2da8yn$ = function (rect) {
    return this.slice_tjonv8$(numberToInt(rect.x), numberToInt(rect.y), numberToInt(rect.width), numberToInt(rect.height));
  };
  Texture.prototype.sliceBounds_tjonv8$ = function (left, top, right, bottom) {
    var tleft = clamp(this.x + left | 0, this.left, this.right);
    var tright = clamp(this.x + right | 0, this.left, this.right);
    var ttop = clamp(this.y + top | 0, this.top, this.bottom);
    var tbottom = clamp(this.y + bottom | 0, this.top, this.bottom);
    return new Texture(this.base, tleft, ttop, tright, tbottom);
  };
  function Texture$Companion() {
    Texture$Companion_instance = this;
  }
  Texture$Companion.prototype.invoke_l6jlr1$ = function (agBase, width, height) {
    return new Texture(new Texture$Base(agBase, width, height), 0, 0, width, height);
  };
  Texture$Companion.prototype.invoke_69xoz1$ = function (rtex) {
    return new Texture(new Texture$Base(rtex.tex, rtex.width, rtex.height), 0, 0, rtex.width, rtex.height);
  };
  Texture$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Texture$Companion_instance = null;
  function Texture$Companion_getInstance() {
    if (Texture$Companion_instance === null) {
      new Texture$Companion();
    }
    return Texture$Companion_instance;
  }
  function Texture$Base(base, width, height) {
    this.base = base;
    this.width = width;
    this.height = height;
  }
  Texture$Base.prototype.close = function () {
    this.base.close();
  };
  Texture$Base.prototype.update_hi0ws4$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    this.base.upload_nn58bg$(bmp, mipmaps);
  };
  Texture$Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base',
    interfaces: [Closeable]
  };
  Texture.prototype.update_hi0ws4$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    this.base.update_hi0ws4$(bmp, mipmaps);
  };
  Texture.prototype.close = function () {
    this.base.close();
  };
  Texture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Texture',
    interfaces: [Closeable]
  };
  function readTexture($receiver, views, mipmaps, continuation) {
    if (mipmaps === void 0)
      mipmaps = true;
    return readTexture_0($receiver, views.ag, mipmaps, continuation);
  }
  function readTexture_0($receiver_0, ag_0, mipmaps_0, continuation_0, suspended) {
    var instance = new Coroutine$readTexture($receiver_0, ag_0, mipmaps_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readTexture($receiver_0, ag_0, mipmaps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tex = void 0;
    this.local$$receiver = $receiver_0;
    this.local$ag = ag_0;
    this.local$mipmaps = mipmaps_0;
  }
  Coroutine$readTexture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readTexture.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readTexture.prototype.constructor = Coroutine$readTexture;
  Coroutine$readTexture.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mipmaps === void 0)
              this.local$mipmaps = true;
            this.local$tex = this.local$ag.createTexture();
            this.state_0 = 2;
            this.result_0 = readBitmapOptimized(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var bmp = this.result_0;
            var canHasMipmaps = get_isPowerOfTwo(bmp.width) && get_isPowerOfTwo(bmp.height);
            this.local$tex.upload_nn58bg$(bmp, canHasMipmaps && this.local$mipmaps);
            return Texture$Companion_getInstance().invoke_l6jlr1$(this.local$tex, bmp.width, bmp.height);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function TextureAsyncFactory(ag, resourcesRoot, path) {
    this.ag_0 = ag;
    this.resourcesRoot_0 = resourcesRoot;
    this.path_0 = path;
  }
  TextureAsyncFactory.prototype.create = function (continuation) {
    return readTexture_0(this.resourcesRoot_0.get_xre72y$(this.path_0), this.ag_0, void 0, continuation);
  };
  TextureAsyncFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureAsyncFactory',
    interfaces: [AsyncFactory]
  };
  function TextureWithBitmapSlice(texture, bitmapSlice, scale, bounds) {
    this.texture = texture;
    this.bitmapSlice = bitmapSlice;
    this.scale = scale;
    this.bounds = bounds;
  }
  TextureWithBitmapSlice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureWithBitmapSlice',
    interfaces: []
  };
  TextureWithBitmapSlice.prototype.component1 = function () {
    return this.texture;
  };
  TextureWithBitmapSlice.prototype.component2 = function () {
    return this.bitmapSlice;
  };
  TextureWithBitmapSlice.prototype.component3 = function () {
    return this.scale;
  };
  TextureWithBitmapSlice.prototype.component4 = function () {
    return this.bounds;
  };
  TextureWithBitmapSlice.prototype.copy_kwxb7x$ = function (texture, bitmapSlice, scale, bounds) {
    return new TextureWithBitmapSlice(texture === void 0 ? this.texture : texture, bitmapSlice === void 0 ? this.bitmapSlice : bitmapSlice, scale === void 0 ? this.scale : scale, bounds === void 0 ? this.bounds : bounds);
  };
  TextureWithBitmapSlice.prototype.toString = function () {
    return 'TextureWithBitmapSlice(texture=' + Kotlin.toString(this.texture) + (', bitmapSlice=' + Kotlin.toString(this.bitmapSlice)) + (', scale=' + Kotlin.toString(this.scale)) + (', bounds=' + Kotlin.toString(this.bounds)) + ')';
  };
  TextureWithBitmapSlice.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.texture) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitmapSlice) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    return result;
  };
  TextureWithBitmapSlice.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.texture, other.texture) && Kotlin.equals(this.bitmapSlice, other.bitmapSlice) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.bounds, other.bounds)))));
  };
  function TransformedTexture(texture, trimLeft, trimTop, rotated) {
    if (trimLeft === void 0)
      trimLeft = 0.0;
    if (trimTop === void 0)
      trimTop = 0.0;
    if (rotated === void 0)
      rotated = false;
    this.texture = texture;
    this.trimLeft = trimLeft;
    this.trimTop = trimTop;
    this.rotated = rotated;
  }
  TransformedTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransformedTexture',
    interfaces: []
  };
  function Cached(cached) {
    if (cached === void 0)
      cached = true;
    this.cached = cached;
  }
  Cached.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cached',
    interfaces: [Annotation]
  };
  function Path(path) {
    this.path = path;
  }
  Path.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Path',
    interfaces: [Annotation]
  };
  function VPath(path) {
    this.path = path;
  }
  VPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VPath',
    interfaces: []
  };
  VPath.prototype.component1 = function () {
    return this.path;
  };
  VPath.prototype.copy_61zpoe$ = function (path) {
    return new VPath(path === void 0 ? this.path : path);
  };
  VPath.prototype.toString = function () {
    return 'VPath(path=' + Kotlin.toString(this.path) + ')';
  };
  VPath.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    return result;
  };
  VPath.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.path, other.path))));
  };
  function getPath($receiver, clazz, path, continuation) {
    return $receiver.getWith_pn9tk4$(clazz, [new VPath(path)], continuation);
  }
  function getPath_0(T_0, isT, $receiver_0, path_0, continuation_0) {
    return getPath($receiver_0, getKClass(T_0), path_0, continuation_0);
  }
  defineInlineFunction('korge-js.com.soywiz.korge.resources.getPath_kakg9t$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var getPath = _.com.soywiz.korge.resources.getPath_ufosyu$;
    return function (T_0, isT, $receiver_0, path_0, continuation_0) {
      return getPath($receiver_0, getKClass(T_0), path_0, continuation_0);
    };
  }));
  function ResourcesRoot() {
    this.root_xh3mz4$_0 = this.root_xh3mz4$_0;
    this.mountable_jwvw3z$_0 = this.mountable_jwvw3z$_0;
  }
  Object.defineProperty(ResourcesRoot.prototype, 'root_0', {
    get: function () {
      if (this.root_xh3mz4$_0 == null)
        return throwUPAE('root');
      return this.root_xh3mz4$_0;
    },
    set: function (root) {
      this.root_xh3mz4$_0 = root;
    }
  });
  Object.defineProperty(ResourcesRoot.prototype, 'mountable_0', {
    get: function () {
      if (this.mountable_jwvw3z$_0 == null)
        return throwUPAE('mountable');
      return this.mountable_jwvw3z$_0;
    },
    set: function (mountable) {
      this.mountable_jwvw3z$_0 = mountable;
    }
  });
  ResourcesRoot.prototype.mount_hem4eq$ = function (path, file) {
    this.mountable_0.mount_hem4eq$(path, file);
  };
  ResourcesRoot.prototype.get_61zpoe$ = function (path) {
    return this.root_0.get_61zpoe$(path);
  };
  ResourcesRoot.prototype.get_xre72y$ = function (path) {
    return this.root_0.get_61zpoe$(path.path);
  };
  ResourcesRoot.prototype.get_iyg95m$ = function (path) {
    return this.root_0.get_61zpoe$(path.path);
  };
  function ResourcesRoot$init$lambda(this$ResourcesRoot_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ResourcesRoot$init$lambda(this$ResourcesRoot_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ResourcesRoot$init$lambda(this$ResourcesRoot_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ResourcesRoot = this$ResourcesRoot_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ResourcesRoot$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ResourcesRoot$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ResourcesRoot$init$lambda.prototype.constructor = Coroutine$ResourcesRoot$init$lambda;
  Coroutine$ResourcesRoot$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ResourcesRoot.mountable_0 = this.local$$receiver, Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ResourcesRoot.prototype.init = function (continuation_0, suspended) {
    var instance = new Coroutine$init_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$init_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_0.prototype.constructor = Coroutine$init_0;
  Coroutine$init_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = MountableVfs(ResourcesRoot$init$lambda(this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.root_0 = this.result_0;
            this.$this.mount_hem4eq$('/', vfs.ResourcesVfs);
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ResourcesRoot$redirected$lambda(closure$redirector_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$ResourcesRoot$redirected$lambda(closure$redirector_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ResourcesRoot$redirected$lambda(closure$redirector_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$redirector = closure$redirector_0;
    this.local$$receiver = $receiver_0;
    this.local$it = it_0;
  }
  Coroutine$ResourcesRoot$redirected$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ResourcesRoot$redirected$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ResourcesRoot$redirected$lambda.prototype.constructor = Coroutine$ResourcesRoot$redirected$lambda;
  Coroutine$ResourcesRoot$redirected$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$redirector(this.local$$receiver, this.local$it);
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ResourcesRoot.prototype.redirected_haqenu$ = function (redirector_0, continuation_0, suspended) {
    var instance = new Coroutine$redirected_haqenu$(this, redirector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$redirected_haqenu$($this, redirector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$redirector = redirector_0;
  }
  Coroutine$redirected_haqenu$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$redirected_haqenu$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$redirected_haqenu$.prototype.constructor = Coroutine$redirected_haqenu$;
  Coroutine$redirected_haqenu$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.root_0.redirected_6arw84$(ResourcesRoot$redirected$lambda(this.local$redirector), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.root_0 = this.result_0;
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ResourcesRoot$mapExtensions$lambda(closure$mapsLC) {
    return function ($receiver, it) {
      var pi = new PathInfo(it);
      var map = closure$mapsLC.get_11rb$(pi.extensionLC);
      if (map != null) {
        return pi.pathWithExtension_61zpoe$(map);
      }
       else {
        return pi.fullpath;
      }
    };
  }
  ResourcesRoot.prototype.mapExtensions_9ih0sy$ = function (maps_0, continuation_0, suspended) {
    var instance = new Coroutine$mapExtensions_9ih0sy$(this, maps_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$mapExtensions_9ih0sy$($this, maps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$maps = maps_0;
  }
  Coroutine$mapExtensions_9ih0sy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapExtensions_9ih0sy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapExtensions_9ih0sy$.prototype.constructor = Coroutine$mapExtensions_9ih0sy$;
  Coroutine$mapExtensions_9ih0sy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var destination = ArrayList_init_0(this.local$maps.length);
            var tmp$;
            for (tmp$ = 0; tmp$ !== this.local$maps.length; ++tmp$) {
              var item = this.local$maps[tmp$];
              destination.add_11rb$(to(item.first.toLowerCase(), item.second));
            }

            var mapsLC = toMap(destination);
            this.state_0 = 2;
            this.result_0 = this.$this.redirected_haqenu$(ResourcesRoot$mapExtensions$lambda(mapsLC), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ResourcesRoot.prototype.mapExtensionsJustInJS_9ih0sy$ = function (maps_0, continuation_0, suspended) {
    var instance = new Coroutine$mapExtensionsJustInJS_9ih0sy$(this, maps_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$mapExtensionsJustInJS_9ih0sy$($this, maps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$maps = maps_0;
  }
  Coroutine$mapExtensionsJustInJS_9ih0sy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapExtensionsJustInJS_9ih0sy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapExtensionsJustInJS_9ih0sy$.prototype.constructor = Coroutine$mapExtensionsJustInJS_9ih0sy$;
  Coroutine$mapExtensionsJustInJS_9ih0sy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (util.OS.isJs) {
              this.state_0 = 2;
              this.result_0 = this.$this.mapExtensions_9ih0sy$(this.local$maps.slice(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
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
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ResourcesRoot.prototype.toString = function () {
    return 'ResourcesRoot[' + this.root_0 + ']';
  };
  ResourcesRoot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResourcesRoot',
    interfaces: [AsyncDependency]
  };
  function Intent(description) {
    if (description === void 0)
      description = '';
    this.description = description;
  }
  Intent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Intent',
    interfaces: [Annotation]
  };
  function Module() {
    this.bgcolor_pdzsck$_0 = color.Colors.BLACK;
    this.title_vbpu3a$_0 = 'Game';
    this.icon_sodvon$_0 = null;
    this.iconImage_k6m3z4$_0 = null;
    this.size_sirvvz$_0 = new SizeInt(640, 480);
    this.windowSize_350i0v$_0 = this.size;
    this.plugins_dhad5u$_0 = emptyList();
    this.mainScene_ucriup$_0 = getKClass(EmptyScene);
    this.clearEachFrame_6y6z5f$_0 = true;
  }
  Object.defineProperty(Module.prototype, 'bgcolor', {
    get: function () {
      return this.bgcolor_pdzsck$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'title', {
    get: function () {
      return this.title_vbpu3a$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'icon', {
    get: function () {
      return this.icon_sodvon$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'iconImage', {
    get: function () {
      return this.iconImage_k6m3z4$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'size', {
    get: function () {
      return this.size_sirvvz$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'windowSize', {
    get: function () {
      return this.windowSize_350i0v$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'plugins', {
    get: function () {
      return this.plugins_dhad5u$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_ucriup$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'clearEachFrame', {
    get: function () {
      return this.clearEachFrame_6y6z5f$_0;
    }
  });
  Module.prototype.init_y6n311$ = function (injector, continuation) {
  };
  Module.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Module',
    interfaces: []
  };
  function Scene() {
    this.injector_kcjok6$_0 = this.injector_kcjok6$_0;
    this.views_20f2oo$_0 = this.views_20f2oo$_0;
    this.sceneContainer_uiphpl$_0 = this.sceneContainer_uiphpl$_0;
    this.resourcesRoot_9jjxxr$_0 = this.resourcesRoot_9jjxxr$_0;
    this._sceneViewContainer_8be2vx$_r1ibp$_0 = this._sceneViewContainer_8be2vx$_r1ibp$_0;
    this.sceneView_94s8x1$_0 = this.sceneView_94s8x1$_0;
    this.cancellables = new CancellableGroup();
  }
  Object.defineProperty(Scene.prototype, 'injector', {
    get: function () {
      if (this.injector_kcjok6$_0 == null)
        return throwUPAE('injector');
      return this.injector_kcjok6$_0;
    },
    set: function (injector) {
      this.injector_kcjok6$_0 = injector;
    }
  });
  Object.defineProperty(Scene.prototype, 'views', {
    get: function () {
      if (this.views_20f2oo$_0 == null)
        return throwUPAE('views');
      return this.views_20f2oo$_0;
    },
    set: function (views) {
      this.views_20f2oo$_0 = views;
    }
  });
  Object.defineProperty(Scene.prototype, 'sceneContainer', {
    get: function () {
      if (this.sceneContainer_uiphpl$_0 == null)
        return throwUPAE('sceneContainer');
      return this.sceneContainer_uiphpl$_0;
    },
    set: function (sceneContainer) {
      this.sceneContainer_uiphpl$_0 = sceneContainer;
    }
  });
  Object.defineProperty(Scene.prototype, 'resourcesRoot', {
    get: function () {
      if (this.resourcesRoot_9jjxxr$_0 == null)
        return throwUPAE('resourcesRoot');
      return this.resourcesRoot_9jjxxr$_0;
    },
    set: function (resourcesRoot) {
      this.resourcesRoot_9jjxxr$_0 = resourcesRoot;
    }
  });
  Object.defineProperty(Scene.prototype, '_sceneViewContainer_8be2vx$', {
    get: function () {
      if (this._sceneViewContainer_8be2vx$_r1ibp$_0 == null)
        return throwUPAE('_sceneViewContainer');
      return this._sceneViewContainer_8be2vx$_r1ibp$_0;
    },
    set: function (_sceneViewContainer) {
      this._sceneViewContainer_8be2vx$_r1ibp$_0 = _sceneViewContainer;
    }
  });
  Object.defineProperty(Scene.prototype, 'sceneView', {
    get: function () {
      if (this.sceneView_94s8x1$_0 == null)
        return throwUPAE('sceneView');
      return this.sceneView_94s8x1$_0;
    },
    set: function (sceneView) {
      this.sceneView_94s8x1$_0 = sceneView;
    }
  });
  Object.defineProperty(Scene.prototype, 'root', {
    get: function () {
      return this._sceneViewContainer_8be2vx$;
    }
  });
  Object.defineProperty(Scene.prototype, 'coroutineContext', {
    get: function () {
      return this.views.coroutineContext;
    }
  });
  Scene.prototype.createSceneView = function () {
    return this.views.container();
  };
  Scene.prototype.init_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$init_y6n311$(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init_y6n311$($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$init_y6n311$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_y6n311$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_y6n311$.prototype.constructor = Coroutine$init_y6n311$;
  Coroutine$init_y6n311$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.injector = this.local$injector;
            this.state_0 = 2;
            this.result_0 = this.local$injector.get_wx4qjr$(getKClass(Views), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.views = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$injector.get_wx4qjr$(getKClass(SceneContainer), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.$this.sceneContainer = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$injector.get_wx4qjr$(getKClass(ResourcesRoot), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.$this.resourcesRoot = this.result_0;
            this.$this._sceneViewContainer_8be2vx$ = this.$this.views.container();
            this.$this.sceneView = this.$this.createSceneView();
            this.$this._sceneViewContainer_8be2vx$.plusAssign_l5rad2$(this.$this.sceneView);
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Scene.prototype.sceneAfterInit = function (continuation) {
  };
  Scene.prototype.sceneBeforeLeaving = function (continuation) {
  };
  Scene.prototype.sceneDestroy = function (continuation) {
    this.cancellables.cancel_tcv7n7$();
  };
  Scene.prototype.sceneAfterDestroy = function (continuation) {
  };
  Scene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scene',
    interfaces: [CoroutineContextHolder, ViewsContainer, InjectorAsyncDependency]
  };
  var Size$Size$Immutable_init = $module$korma_js.com.soywiz.korma.geom.Size.Immutable;
  function ScaledScene() {
    Scene.call(this);
    this.sceneSize_kgz5x9$_0 = new Size$Size$Immutable_init(numberToDouble(320), numberToDouble(240));
    this.sceneScale_4jzu6e$_0 = 2.0;
    this.sceneFiltering_vld8x2$_0 = false;
  }
  Object.defineProperty(ScaledScene.prototype, 'sceneSize', {
    get: function () {
      return this.sceneSize_kgz5x9$_0;
    }
  });
  Object.defineProperty(ScaledScene.prototype, 'sceneScale', {
    get: function () {
      return this.sceneScale_4jzu6e$_0;
    }
  });
  Object.defineProperty(ScaledScene.prototype, 'sceneFiltering', {
    get: function () {
      return this.sceneFiltering_vld8x2$_0;
    }
  });
  ScaledScene.prototype.createSceneView = function () {
    return scaleView(this.views, numberToInt(this.sceneSize.width), numberToInt(this.sceneSize.height), this.sceneScale, this.sceneFiltering);
  };
  ScaledScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaledScene',
    interfaces: [Scene]
  };
  function EmptyScene() {
    Scene.call(this);
  }
  EmptyScene.prototype.sceneInit_f3yb8w$ = function (sceneView, continuation) {
  };
  EmptyScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyScene',
    interfaces: [Scene]
  };
  function LogScene() {
    Scene.call(this);
    this.name_oxd2nx$_0 = 'LogScene';
    this.log_c9euda$_0 = ArrayList_init_0();
  }
  Object.defineProperty(LogScene.prototype, 'name', {
    get: function () {
      return this.name_oxd2nx$_0;
    }
  });
  Object.defineProperty(LogScene.prototype, 'log', {
    get: function () {
      return this.log_c9euda$_0;
    }
  });
  LogScene.prototype.log_61zpoe$ = function (msg) {
    this.log.add_11rb$(msg);
  };
  LogScene.prototype.init_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$init_y6n311$_0(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init_y6n311$_0($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$init_y6n311$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_y6n311$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_y6n311$_0.prototype.constructor = Coroutine$init_y6n311$_0;
  Coroutine$init_y6n311$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Scene.prototype.init_y6n311$.call(this.$this, this.local$injector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  LogScene.prototype.sceneInit_f3yb8w$ = function (sceneView, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_f3yb8w$(this, sceneView, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneInit_f3yb8w$($this, sceneView, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneInit_f3yb8w$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_f3yb8w$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_f3yb8w$.prototype.constructor = Coroutine$sceneInit_f3yb8w$;
  Coroutine$sceneInit_f3yb8w$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.log_61zpoe$(this.$this.name + '.sceneInit');
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneAfterInit.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  LogScene.prototype.sceneAfterInit = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneAfterInit(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneAfterInit($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneAfterInit.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneAfterInit.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneAfterInit.prototype.constructor = Coroutine$sceneAfterInit;
  Coroutine$sceneAfterInit.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.log_61zpoe$(this.$this.name + '.sceneAfterInit');
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneAfterInit.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  LogScene.prototype.sceneDestroy = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneDestroy(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneDestroy($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneDestroy.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneDestroy.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneDestroy.prototype.constructor = Coroutine$sceneDestroy;
  Coroutine$sceneDestroy.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.log_61zpoe$(this.$this.name + '.sceneDestroy');
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneDestroy.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  LogScene.prototype.sceneAfterDestroy = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneAfterDestroy(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneAfterDestroy($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneAfterDestroy.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneAfterDestroy.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneAfterDestroy.prototype.constructor = Coroutine$sceneAfterDestroy;
  Coroutine$sceneAfterDestroy.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.log_61zpoe$(this.$this.name + '.sceneAfterDestroy');
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneAfterDestroy.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  LogScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogScene',
    interfaces: [Scene]
  };
  function sleep($receiver, time, continuation) {
    return sleep_1($receiver.sceneView, time, continuation);
  }
  function SceneContainer(views) {
    SceneContainer$Companion_getInstance();
    Container.call(this, views);
    this.transitionView = new TransitionView(views);
    this.currentScene = null;
    this.plusAssign_l5rad2$(this.transitionView);
    this.visitStack_0 = arrayListOf([SceneContainer$Companion_getInstance().EMPTY_VISIT_ENTRY_0]);
    this.visitPos_0 = 0;
  }
  SceneContainer.prototype.changeTo_td8rip$ = function (T_0, isT, injects_0, time_0, transition_0, continuation_0) {
    if (time_0 === void 0) {
      time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition_0 === void 0)
      transition_0 = scene.AlphaTransition;
    return this.changeTo_ekc72s$(getKClass(T_0), injects_0.slice(), time_0, transition_0, continuation_0);
  };
  defineInlineFunction('korge-js.com.soywiz.korge.scene.SceneContainer.changeTo_td8rip$', wrapFunction(function () {
    var scene = _.com.soywiz.korge.scene;
    var getKClass = Kotlin.getKClass;
    var TimeSpan = _.com.soywiz.korge.time.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function (T_0, isT, injects_0, time_0, transition_0, continuation_0) {
      if (time_0 === void 0) {
        time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
      }
      if (transition_0 === void 0)
        transition_0 = scene.AlphaTransition;
      return this.changeTo_ekc72s$(getKClass(T_0), injects_0.slice(), time_0, transition_0, continuation_0);
    };
  }));
  SceneContainer.prototype.pushTo_td8rip$ = function (T_0, isT, injects_0, time_0, transition_0, continuation_0) {
    if (time_0 === void 0) {
      time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition_0 === void 0)
      transition_0 = scene.AlphaTransition;
    return this.pushTo_ekc72s$(getKClass(T_0), injects_0.slice(), time_0, transition_0, continuation_0);
  };
  defineInlineFunction('korge-js.com.soywiz.korge.scene.SceneContainer.pushTo_td8rip$', wrapFunction(function () {
    var scene = _.com.soywiz.korge.scene;
    var getKClass = Kotlin.getKClass;
    var TimeSpan = _.com.soywiz.korge.time.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function (T_0, isT, injects_0, time_0, transition_0, continuation_0) {
      if (time_0 === void 0) {
        time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
      }
      if (transition_0 === void 0)
        transition_0 = scene.AlphaTransition;
      return this.pushTo_ekc72s$(getKClass(T_0), injects_0.slice(), time_0, transition_0, continuation_0);
    };
  }));
  function SceneContainer$VisitEntry(clazz, injects) {
    this.clazz = clazz;
    this.injects = injects;
  }
  SceneContainer$VisitEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VisitEntry',
    interfaces: []
  };
  SceneContainer$VisitEntry.prototype.component1 = function () {
    return this.clazz;
  };
  SceneContainer$VisitEntry.prototype.component2 = function () {
    return this.injects;
  };
  SceneContainer$VisitEntry.prototype.copy_9au196$ = function (clazz, injects) {
    return new SceneContainer$VisitEntry(clazz === void 0 ? this.clazz : clazz, injects === void 0 ? this.injects : injects);
  };
  SceneContainer$VisitEntry.prototype.toString = function () {
    return 'VisitEntry(clazz=' + Kotlin.toString(this.clazz) + (', injects=' + Kotlin.toString(this.injects)) + ')';
  };
  SceneContainer$VisitEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.injects) | 0;
    return result;
  };
  SceneContainer$VisitEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.injects, other.injects)))));
  };
  function SceneContainer$Companion() {
    SceneContainer$Companion_instance = this;
    this.EMPTY_VISIT_ENTRY_0 = new SceneContainer$VisitEntry(getKClass(EmptyScene), emptyList());
  }
  SceneContainer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SceneContainer$Companion_instance = null;
  function SceneContainer$Companion_getInstance() {
    if (SceneContainer$Companion_instance === null) {
      new SceneContainer$Companion();
    }
    return SceneContainer$Companion_instance;
  }
  SceneContainer.prototype.back_wmb3r1$ = function (time, transition, continuation) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition === void 0)
      transition = AlphaTransition;
    var tmp$;
    this.visitPos_0 = this.visitPos_0 - 1 | 0;
    return this._changeTo_0((tmp$ = getOrNull(this.visitStack_0, this.visitPos_0)) != null ? tmp$ : SceneContainer$Companion_getInstance().EMPTY_VISIT_ENTRY_0, time, transition, continuation);
  };
  SceneContainer.prototype.forward_wmb3r1$ = function (time, transition, continuation) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition === void 0)
      transition = AlphaTransition;
    var tmp$;
    this.visitPos_0 = this.visitPos_0 + 1 | 0;
    return this._changeTo_0((tmp$ = getOrNull(this.visitStack_0, this.visitPos_0)) != null ? tmp$ : SceneContainer$Companion_getInstance().EMPTY_VISIT_ENTRY_0, time, transition, continuation);
  };
  SceneContainer.prototype.setCurrent_0 = function (entry) {
    while (this.visitStack_0.size <= this.visitPos_0)
      this.visitStack_0.add_11rb$(SceneContainer$Companion_getInstance().EMPTY_VISIT_ENTRY_0);
    this.visitStack_0.set_wxm5ur$(this.visitPos_0, entry);
  };
  SceneContainer.prototype.pushTo_ekc72s$ = function (clazz, injects, time, transition, continuation) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition === void 0)
      transition = AlphaTransition;
    this.visitPos_0 = this.visitPos_0 + 1 | 0;
    this.setCurrent_0(new SceneContainer$VisitEntry(clazz, toList(injects)));
    return this._changeTo_1(clazz, injects.slice(), time, transition, continuation);
  };
  SceneContainer.prototype.changeTo_ekc72s$ = function (clazz, injects, time, transition, continuation) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition === void 0)
      transition = AlphaTransition;
    this.setCurrent_0(new SceneContainer$VisitEntry(clazz, toList(injects)));
    return this._changeTo_1(clazz, injects.slice(), time, transition, continuation);
  };
  SceneContainer.prototype._changeTo_0 = function (entry_0, time_0, transition_0, continuation_0, suspended) {
    var instance = new Coroutine$_changeTo_0(this, entry_0, time_0, transition_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$_changeTo_0($this, entry_0, time_0, transition_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$entry = entry_0;
    this.local$time = time_0;
    this.local$transition = transition_0;
  }
  Coroutine$_changeTo_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_changeTo_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_changeTo_0.prototype.constructor = Coroutine$_changeTo_0;
  Coroutine$_changeTo_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$time === void 0) {
              this.local$time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (this.local$transition === void 0)
              this.local$transition = AlphaTransition;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this._changeTo_1.call(this.$this, this.local$entry.clazz, copyToArray(this.local$entry.injects).slice(), this.local$time, this.local$transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return Kotlin.isType(tmp$ = this.result_0, Scene) ? tmp$ : throwCCE();
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SceneContainer$_changeTo$lambda(closure$instance_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SceneContainer$_changeTo$lambda(closure$instance_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SceneContainer$_changeTo$lambda(closure$instance_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$instance = closure$instance_0;
  }
  Coroutine$SceneContainer$_changeTo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SceneContainer$_changeTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SceneContainer$_changeTo$lambda.prototype.constructor = Coroutine$SceneContainer$_changeTo$lambda;
  Coroutine$SceneContainer$_changeTo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$instance.sceneAfterDestroy(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SceneContainer$_changeTo$lambda_0(closure$instance_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SceneContainer$_changeTo$lambda_0(closure$instance_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SceneContainer$_changeTo$lambda_0(closure$instance_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$instance = closure$instance_0;
  }
  Coroutine$SceneContainer$_changeTo$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SceneContainer$_changeTo$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SceneContainer$_changeTo$lambda_0.prototype.constructor = Coroutine$SceneContainer$_changeTo$lambda_0;
  Coroutine$SceneContainer$_changeTo$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$instance.sceneAfterInit(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SceneContainer.prototype._changeTo_1 = function (clazz_0, injects_0, time_0, transition_0, continuation_0, suspended) {
    var instance = new Coroutine$_changeTo_1(this, clazz_0, injects_0, time_0, transition_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$_changeTo_1($this, clazz_0, injects_0, time_0, transition_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$oldScene = void 0;
    this.local$instance = void 0;
    this.local$clazz = clazz_0;
    this.local$injects = injects_0;
    this.local$time = time_0;
    this.local$transition = transition_0;
  }
  Coroutine$_changeTo_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_changeTo_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_changeTo_1.prototype.constructor = Coroutine$_changeTo_1;
  Coroutine$_changeTo_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$time === void 0) {
              this.local$time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (this.local$transition === void 0)
              this.local$transition = AlphaTransition;
            var tmp$, tmp$_0;
            this.local$oldScene = this.$this.currentScene;
            var sceneInjector = this.$this.views.injector.child().mapInstance_b1ce0a$(getKClass(SceneContainer), this.$this);
            for (tmp$ = 0; tmp$ !== this.local$injects.length; ++tmp$) {
              var inject = this.local$injects[tmp$];
              sceneInjector.mapInstance_b1ce0a$(Kotlin.isType(tmp$_0 = Kotlin.getKClassFromExpression(inject), KClass) ? tmp$_0 : throwCCE(), inject);
            }

            this.state_0 = 2;
            this.result_0 = sceneInjector.get_wx4qjr$(this.local$clazz, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$instance = this.result_0;
            this.$this.currentScene = ensureNotNull(this.local$instance);
            this.$this.transitionView.transition = this.local$transition;
            this.$this.transitionView.startNewTransition_l5rad2$(this.local$instance._sceneViewContainer_8be2vx$);
            this.state_0 = 3;
            this.result_0 = this.local$instance.sceneInit_f3yb8w$(this.local$instance.sceneView, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$oldScene != null ? (this.local$oldScene.sceneBeforeLeaving(this), Unit) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            if (this.local$time.compareTo_11rb$(TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0))) > 0) {
              this.state_0 = 5;
              this.result_0 = tween(this.$this.transitionView, [new V2(getPropertyCallableRef('ratio', 0, function ($receiver) {
                return $receiver.ratio;
              }.bind(null, this.$this.transitionView), function ($receiver, value) {
                $receiver.ratio = value;
              }.bind(null, this.$this.transitionView)), numberToDouble(0.0), numberToDouble(1.0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
                return interpolate(v0_0, v1_0, step_0);
              }))], this.local$time, void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.$this.transitionView.ratio = 1.0;
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = this.local$oldScene != null ? (this.local$oldScene.sceneDestroy(this), Unit) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 7:
            go_2(this.$this, SceneContainer$_changeTo$lambda(this.local$instance));
            go_2(this.$this, SceneContainer$_changeTo$lambda_0(this.local$instance));
            return this.local$instance;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SceneContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SceneContainer',
    interfaces: [Container]
  };
  function sceneContainer($receiver) {
    return new SceneContainer($receiver);
  }
  function TransitionView(views) {
    Container.call(this, views);
    this.transition = AlphaTransition;
    this.dummy1 = views.container();
    this.dummy2 = views.container();
    this.addChild_l5rad2$(this.dummy1);
    this.addChild_l5rad2$(this.dummy2);
  }
  Object.defineProperty(TransitionView.prototype, 'prev', {
    get: function () {
      return this.children.get_za3lpa$(0);
    }
  });
  Object.defineProperty(TransitionView.prototype, 'next', {
    get: function () {
      return this.children.get_za3lpa$(1);
    }
  });
  TransitionView.prototype.startNewTransition_l5rad2$ = function (next) {
    this.ratio = 0.0;
    this.setViews_1kpf2s$(this.next, next);
  };
  TransitionView.prototype.setViews_1kpf2s$ = function (prev, next) {
    this.removeChildren();
    this.addChild_l5rad2$(prev);
    this.addChild_l5rad2$(next);
  };
  TransitionView.prototype.render_edjgwy$ = function (ctx, m) {
    if (!this.visible)
      return;
    if (this.ratio <= 0.0)
      this.prev.render_edjgwy$(ctx, m);
    else if (this.ratio >= 1.0)
      this.next.render_edjgwy$(ctx, m);
    else
      this.transition.render(ctx, m, this.prev, this.next, this.ratio);
  };
  TransitionView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionView',
    interfaces: [Container]
  };
  function Transition(render) {
    this.render = render;
  }
  Transition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transition',
    interfaces: []
  };
  function withEasing$lambda(this$withEasing, closure$easing) {
    return function (ctx, m, prev, next, ratio) {
      this$withEasing.render(ctx, m, prev, next, closure$easing.invoke_14dthe$(ratio));
      return Unit;
    };
  }
  function withEasing($receiver, easing) {
    return new Transition(withEasing$lambda($receiver, easing));
  }
  function AlphaTransition$lambda(ctx, m, prev, next, ratio) {
    var prevAlpha = prev.alpha;
    var nextAlpha = next.alpha;
    try {
      prev.alpha = 1.0 - ratio;
      next.alpha = ratio;
      prev.render_edjgwy$(ctx, m);
      next.render_edjgwy$(ctx, m);
    }
    finally {
      prev.alpha = prevAlpha;
      next.alpha = nextAlpha;
    }
    return Unit;
  }
  var AlphaTransition;
  function Achievements() {
  }
  Achievements.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Achievements',
    interfaces: []
  };
  function Ads() {
  }
  Ads.prototype.preload = function (continuation) {
  };
  Ads.prototype.showInterstial = function (continuation) {
  };
  Ads.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ads',
    interfaces: []
  };
  function Analytics() {
  }
  Analytics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Analytics',
    interfaces: []
  };
  function Browser(injector) {
    this.injector = injector;
  }
  Browser.prototype.browse_61zpoe$ = function (url, continuation) {
    light.defaultLight.openURL_61zpoe$(url.toString());
  };
  Browser.prototype.frame = function (continuation_0, suspended) {
    var instance = new Coroutine$frame(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$frame($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$frame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$frame.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$frame.prototype.constructor = Coroutine$frame;
  Coroutine$frame.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.injector.getOrNull_wx4qjr$(getKClass(Frame), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            return tmp$ != null ? tmp$ : invalidOp('Frame not available at korge');
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Browser.prototype.openFile_61zpoe$$default = function (filter_0, continuation_0, suspended) {
    var instance = new Coroutine$openFile_61zpoe$$default(this, filter_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$openFile_61zpoe$$default($this, filter_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$filter = filter_0;
  }
  Coroutine$openFile_61zpoe$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$openFile_61zpoe$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$openFile_61zpoe$$default.prototype.constructor = Coroutine$openFile_61zpoe$$default;
  Coroutine$openFile_61zpoe$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.frame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.dialogOpenFile_61zpoe$(this.local$filter, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Browser.prototype.openFile_61zpoe$ = function (filter, continuation, callback$default) {
    if (filter === void 0)
      filter = '';
    return callback$default ? callback$default(filter, continuation) : this.openFile_61zpoe$$default(filter, continuation);
  };
  Browser.prototype.prompt_puj7f4$ = function (title_0, initialValue_0, continuation_0, suspended) {
    var instance = new Coroutine$prompt_puj7f4$(this, title_0, initialValue_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$prompt_puj7f4$($this, title_0, initialValue_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$title = title_0;
    this.local$initialValue = initialValue_0;
  }
  Coroutine$prompt_puj7f4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$prompt_puj7f4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$prompt_puj7f4$.prototype.constructor = Coroutine$prompt_puj7f4$;
  Coroutine$prompt_puj7f4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.frame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.prompt_puj7f4$(this.local$title, this.local$initialValue, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Browser.prototype.alert_61zpoe$ = function (message_0, continuation_0, suspended) {
    var instance = new Coroutine$alert_61zpoe$(this, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$alert_61zpoe$($this, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$message = message_0;
  }
  Coroutine$alert_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$alert_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$alert_61zpoe$.prototype.constructor = Coroutine$alert_61zpoe$;
  Coroutine$alert_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.frame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.alert_61zpoe$(this.local$message, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Browser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Browser',
    interfaces: []
  };
  function CloudSave() {
  }
  CloudSave.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloudSave',
    interfaces: []
  };
  function InAppPayments() {
  }
  InAppPayments.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InAppPayments',
    interfaces: []
  };
  function RateApp() {
  }
  RateApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RateApp',
    interfaces: []
  };
  function Share() {
  }
  Share.prototype.shareMessage_puj7f4$ = function (title, message, continuation) {
  };
  Share.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Share',
    interfaces: []
  };
  function Store() {
  }
  Store.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Store',
    interfaces: []
  };
  function IStorage() {
  }
  IStorage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IStorage',
    interfaces: []
  };
  function contains($receiver, key) {
    return $receiver.getOrNull_61zpoe$(key) != null;
  }
  function get_1($receiver, key) {
    var tmp$;
    tmp$ = $receiver.getOrNull_61zpoe$(key);
    if (tmp$ == null) {
      throw new KeyNotFoundException(key);
    }
    return tmp$;
  }
  function InmemoryStorage() {
    StorageBase.call(this);
  }
  InmemoryStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InmemoryStorage',
    interfaces: [StorageBase]
  };
  function Storage() {
    this.$delegate_fyb14n$_0 = NativeStorage_getInstance();
  }
  Storage.prototype.getOrNull_61zpoe$ = function (key) {
    return this.$delegate_fyb14n$_0.getOrNull_61zpoe$(key);
  };
  Storage.prototype.remove_61zpoe$ = function (key) {
    return this.$delegate_fyb14n$_0.remove_61zpoe$(key);
  };
  Storage.prototype.removeAll = function () {
    return this.$delegate_fyb14n$_0.removeAll();
  };
  Storage.prototype.set_puj7f4$ = function (key, value) {
    return this.$delegate_fyb14n$_0.set_puj7f4$(key, value);
  };
  Storage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Storage',
    interfaces: [IStorage]
  };
  function StorageBase() {
    this.data = HashMap_init();
  }
  StorageBase.prototype.set_puj7f4$ = function (key, value) {
    this.data.put_xwzc9p$(key, value);
  };
  StorageBase.prototype.getOrNull_61zpoe$ = function (key) {
    return this.data.get_11rb$(key);
  };
  StorageBase.prototype.remove_61zpoe$ = function (key) {
    this.data.remove_11rb$(key);
  };
  StorageBase.prototype.removeAll = function () {
    this.data.clear();
  };
  StorageBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StorageBase',
    interfaces: [IStorage]
  };
  function StorageItem(storage, clazz, key, gen) {
    this.storage = storage;
    this.clazz = clazz;
    this.key = key;
    this.gen = gen;
  }
  Object.defineProperty(StorageItem.prototype, 'value', {
    get: function () {
      if (!contains(this.storage, this.key))
        this.storage.set_puj7f4$(this.key, json.Json.encodeUntyped_s8jyv4$(serialization.Mapper.toUntyped_b1ce0a$(this.clazz, this.gen())));
      return json.Json.decodeToType_27ii8w$(get_1(this.storage, this.key), this.clazz);
    },
    set: function (value) {
      this.storage.set_puj7f4$(this.key, json.Json.encodeUntyped_s8jyv4$(serialization.Mapper.toUntyped_b1ce0a$(this.clazz, value)));
    }
  });
  StorageItem.prototype.remove = function () {
    this.storage.remove_61zpoe$(this.key);
  };
  StorageItem.prototype.getValue_t0xcdd$ = defineInlineFunction('korge-js.com.soywiz.korge.service.storage.StorageItem.getValue_t0xcdd$', function (thisRef, property) {
    return this.value;
  });
  StorageItem.prototype.setValue_809r6s$ = defineInlineFunction('korge-js.com.soywiz.korge.service.storage.StorageItem.setValue_809r6s$', wrapFunction(function () {
    return function (thisRef, property, value) {
      this.value = value;
    };
  }));
  StorageItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StorageItem',
    interfaces: []
  };
  var item = defineInlineFunction('korge-js.com.soywiz.korge.service.storage.item_v3w8yo$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var StorageItem_init = _.com.soywiz.korge.service.storage.StorageItem;
    return function (T_0, isT, $receiver, key, gen) {
      return new StorageItem_init($receiver, getKClass(T_0), key, gen);
    };
  }));
  function KorgeTest() {
    this.plugins = new KorgePlugins();
    this.eventLoop = new EventLoopTest();
    this.injector = new AsyncInjector();
    this.ag = new KorgeTest$DummyAG();
    this.input = new Input();
    var $receiver = new Views(this.eventLoop, this.ag, this.injector, this.input, this.plugins);
    this.syncTest_vajvcb$(KorgeTest$views$lambda$lambda($receiver));
    this.views = $receiver;
    this.testTime = Kotlin.Long.ZERO;
    this.canvas = new KorgeTest$DummyAGContainer(this.ag);
  }
  KorgeTest.prototype.syncTest_vajvcb$ = function (block) {
    sync(this.eventLoop, 10, block);
  };
  function KorgeTest$testScene$lambda$lambda(this$KorgeTest) {
    return function () {
      return this$KorgeTest.testTime;
    };
  }
  function KorgeTest$testScene$lambda(closure$module_0, closure$sceneClass_0, closure$injects_0, this$KorgeTest_0, closure$callback_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$KorgeTest$testScene$lambda(closure$module_0, closure$sceneClass_0, closure$injects_0, this$KorgeTest_0, closure$callback_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KorgeTest$testScene$lambda(closure$module_0, closure$sceneClass_0, closure$injects_0, this$KorgeTest_0, closure$callback_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$module = closure$module_0;
    this.local$closure$sceneClass = closure$sceneClass_0;
    this.local$closure$injects = closure$injects_0;
    this.local$this$KorgeTest = this$KorgeTest_0;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$KorgeTest$testScene$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KorgeTest$testScene$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KorgeTest$testScene$lambda.prototype.constructor = Coroutine$KorgeTest$testScene$lambda;
  Coroutine$KorgeTest$testScene$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            var tmp$_2, tmp$_3;
            tmp$_2 = Korge_getInstance();
            Korge_getInstance();
            tmp$ = toList(this.local$closure$injects);
            tmp$_0 = this.local$this$KorgeTest.canvas;
            tmp$_1 = TimeProvider.Companion.invoke_nw7ga7$(KorgeTest$testScene$lambda$lambda(this.local$this$KorgeTest));
            this.state_0 = 2;
            this.result_0 = tmp$_2.test_dnucxw$(new Korge$Config(this.local$closure$module, void 0, tmp$_0, void 0, this.local$closure$sceneClass, tmp$, tmp$_1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var sc = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$closure$callback(Kotlin.isType(tmp$_3 = sc.currentScene, Scene) ? tmp$_3 : throwCCE(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KorgeTest.prototype.testScene_3nta4m$ = function (module_0, sceneClass, injects, callback) {
    this.syncTest_vajvcb$(KorgeTest$testScene$lambda(module_0, sceneClass, injects, this, callback));
  };
  KorgeTest.prototype.updateTime_j3nem9$ = function ($receiver_0, dtMs_0, continuation_0, suspended) {
    var instance = new Coroutine$updateTime_j3nem9$(this, $receiver_0, dtMs_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updateTime_j3nem9$($this, $receiver_0, dtMs_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
    this.local$dtMs = dtMs_0;
  }
  Coroutine$updateTime_j3nem9$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateTime_j3nem9$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateTime_j3nem9$.prototype.constructor = Coroutine$updateTime_j3nem9$;
  Coroutine$updateTime_j3nem9$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$dtMs === void 0)
              this.local$dtMs = 20;
            this.$this.testTime = this.$this.testTime.add(Kotlin.Long.fromInt(this.local$dtMs));
            this.local$$receiver.views.clampElapsedTimeTo = kotlin_js_internal_IntCompanionObject.MAX_VALUE;
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = this.$this.eventLoop.sleepNextFrame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KorgeTest.prototype.updateTimeSteps_yudtrj$ = function ($receiver_0, time_0, step_0, continuation_0, suspended) {
    var instance = new Coroutine$updateTimeSteps_yudtrj$(this, $receiver_0, time_0, step_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updateTimeSteps_yudtrj$($this, $receiver_0, time_0, step_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$remainingTime = void 0;
    this.local$elapsed = void 0;
    this.local$$receiver = $receiver_0;
    this.local$time = time_0;
    this.local$step = step_0;
  }
  Coroutine$updateTimeSteps_yudtrj$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateTimeSteps_yudtrj$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateTimeSteps_yudtrj$.prototype.constructor = Coroutine$updateTimeSteps_yudtrj$;
  Coroutine$updateTimeSteps_yudtrj$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$step === void 0)
              this.local$step = 20;
            this.local$remainingTime = this.local$time;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$remainingTime <= 0) {
              this.state_0 = 4;
              continue;
            }

            var b = this.local$remainingTime;
            this.local$elapsed = Math_0.min(this.local$step, b);
            this.state_0 = 3;
            this.result_0 = this.$this.updateTime_j3nem9$(this.local$$receiver, this.local$elapsed, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$remainingTime = this.local$remainingTime - this.local$elapsed | 0;
            this.state_0 = 2;
            continue;
          case 4:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KorgeTest.prototype.updateMousePosition_yudtrj$ = function ($receiver_0, x_0, y_0, continuation_0, suspended) {
    var instance = new Coroutine$updateMousePosition_yudtrj$(this, $receiver_0, x_0, y_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updateMousePosition_yudtrj$($this, $receiver_0, x_0, y_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
    this.local$x = x_0;
    this.local$y = y_0;
  }
  Coroutine$updateMousePosition_yudtrj$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateMousePosition_yudtrj$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateMousePosition_yudtrj$.prototype.constructor = Coroutine$updateMousePosition_yudtrj$;
  Coroutine$updateMousePosition_yudtrj$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.canvas.agInput.mouseEvent.x = this.local$x;
            this.$this.canvas.agInput.mouseEvent.y = this.local$y;
            this.$this.canvas.agInput.onMouseOver.invoke_11rb$(this.$this.canvas.agInput.mouseEvent);
            this.state_0 = 2;
            this.result_0 = this.$this.updateTime_j3nem9$(this.local$$receiver, 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KorgeTest.prototype.simulateClick_gohfi1$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$simulateClick_gohfi1$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$simulateClick_gohfi1$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$simulateClick_gohfi1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$simulateClick_gohfi1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$simulateClick_gohfi1$.prototype.constructor = Coroutine$simulateClick_gohfi1$;
  Coroutine$simulateClick_gohfi1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            get_mouse(this.local$$receiver).onClick.invoke_11rb$(get_mouse(this.local$$receiver));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = this.$this.eventLoop.sleepNextFrame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KorgeTest.prototype.simulateOver_gohfi1$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$simulateOver_gohfi1$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$simulateOver_gohfi1$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$simulateOver_gohfi1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$simulateOver_gohfi1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$simulateOver_gohfi1$.prototype.constructor = Coroutine$simulateOver_gohfi1$;
  Coroutine$simulateOver_gohfi1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            get_mouse(this.local$$receiver).onOver.invoke_11rb$(get_mouse(this.local$$receiver));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = this.$this.eventLoop.sleepNextFrame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KorgeTest.prototype.simulateOut_gohfi1$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$simulateOut_gohfi1$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$simulateOut_gohfi1$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$simulateOut_gohfi1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$simulateOut_gohfi1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$simulateOut_gohfi1$.prototype.constructor = Coroutine$simulateOut_gohfi1$;
  Coroutine$simulateOut_gohfi1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            get_mouse(this.local$$receiver).onOut.invoke_11rb$(get_mouse(this.local$$receiver));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = this.$this.eventLoop.sleepNextFrame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KorgeTest.prototype.isVisibleToUser_gohfi1$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$isVisibleToUser_gohfi1$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$isVisibleToUser_gohfi1$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$isVisibleToUser_gohfi1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$isVisibleToUser_gohfi1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$isVisibleToUser_gohfi1$.prototype.constructor = Coroutine$isVisibleToUser_gohfi1$;
  Coroutine$isVisibleToUser_gohfi1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!this.local$$receiver.visible)
              return false;
            if (this.local$$receiver.alpha <= 0.0)
              return false;
            var bounds = this.local$$receiver.getGlobalBounds_2da8yn$();
            if (bounds.area <= 0.0)
              return false;
            this.result_0 = this.$this.injector.get_wx4qjr$(getKClass(Module), void 0, this);
            var module_0 = this.result_0;
            var visibleBounds = Rectangle_init(0, 0, module_0.windowSize.width, module_0.windowSize.height);
            if (!bounds.intersects_2da8yn$(visibleBounds))
              return false;
            return true;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function KorgeTest$DummyAG() {
    AG.call(this);
    this.ready();
  }
  Object.defineProperty(KorgeTest$DummyAG.prototype, 'nativeComponent', {
    get: function () {
      return new Any();
    }
  });
  KorgeTest$DummyAG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyAG',
    interfaces: [AG]
  };
  function KorgeTest$DummyAGContainer(ag) {
    this.ag_92b4sy$_0 = ag;
    this.agInput_r7jn1g$_0 = new AGInput();
  }
  Object.defineProperty(KorgeTest$DummyAGContainer.prototype, 'ag', {
    get: function () {
      return this.ag_92b4sy$_0;
    }
  });
  Object.defineProperty(KorgeTest$DummyAGContainer.prototype, 'agInput', {
    get: function () {
      return this.agInput_r7jn1g$_0;
    }
  });
  KorgeTest$DummyAGContainer.prototype.repaint = function () {
    this.ag.onRender.invoke_11rb$(this.ag);
  };
  KorgeTest$DummyAGContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyAGContainer',
    interfaces: [AGContainer]
  };
  function KorgeTest$views$lambda$lambda(this$_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$KorgeTest$views$lambda$lambda(this$_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KorgeTest$views$lambda$lambda(this$_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$KorgeTest$views$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KorgeTest$views$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KorgeTest$views$lambda$lambda.prototype.constructor = Coroutine$KorgeTest$views$lambda$lambda;
  Coroutine$KorgeTest$views$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.init(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KorgeTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeTest',
    interfaces: []
  };
  function ViewsForTesting() {
    this.elt = new EventLoopTest();
    var $receiver = new ViewsLog(this.elt);
    this.syncTest_vajvcb$(ViewsForTesting$viewsLog$lambda$lambda($receiver));
    this.viewsLog = $receiver;
    this.injector = this.viewsLog.injector;
    this.ag = this.viewsLog.ag;
    this.input = this.viewsLog.input;
    this.views = this.viewsLog.views;
  }
  ViewsForTesting.prototype.syncTest_vajvcb$ = function (block) {
    sync(this.elt, 10, block);
  };
  function ViewsForTesting$viewsTest$lambda$lambda(closure$callback_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewsForTesting$viewsTest$lambda$lambda(closure$callback_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewsForTesting$viewsTest$lambda$lambda(closure$callback_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
    this.local$this$ = this$_0;
  }
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda.prototype.constructor = Coroutine$ViewsForTesting$viewsTest$lambda$lambda;
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this.local$this$, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ViewsForTesting$viewsTest$lambda(this$ViewsForTesting_0, closure$step_0, closure$callback_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ViewsForTesting$viewsTest$lambda(this$ViewsForTesting_0, closure$step_0, closure$callback_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewsForTesting$viewsTest$lambda(this$ViewsForTesting_0, closure$step_0, closure$callback_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ViewsForTesting = this$ViewsForTesting_0;
    this.local$closure$step = closure$step_0;
    this.local$closure$callback = closure$callback_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ViewsForTesting$viewsTest$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewsForTesting$viewsTest$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewsForTesting$viewsTest$lambda.prototype.constructor = Coroutine$ViewsForTesting$viewsTest$lambda;
  Coroutine$ViewsForTesting$viewsTest$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = updateLoop(this.local$this$ViewsForTesting.views, this.local$$receiver, this.local$closure$step.milliseconds, ViewsForTesting$viewsTest$lambda$lambda(this.local$closure$callback, this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ViewsForTesting.prototype.viewsTest_mhofw7$ = function (step, callback) {
    if (step === void 0) {
      step = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(10));
    }
    this.syncTest_vajvcb$(ViewsForTesting$viewsTest$lambda(this, step, callback));
  };
  function ViewsForTesting$viewsLog$lambda$lambda(this$_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ViewsForTesting$viewsLog$lambda$lambda(this$_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewsForTesting$viewsLog$lambda$lambda(this$_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$ViewsForTesting$viewsLog$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewsForTesting$viewsLog$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewsForTesting$viewsLog$lambda$lambda.prototype.constructor = Coroutine$ViewsForTesting$viewsLog$lambda$lambda;
  Coroutine$ViewsForTesting$viewsLog$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.init(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ViewsForTesting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewsForTesting',
    interfaces: []
  };
  function TimeSpan(ms) {
    TimeSpan$Companion_getInstance();
    this.ms = ms;
  }
  Object.defineProperty(TimeSpan.prototype, 'milliseconds', {
    get: function () {
      return this.ms;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'seconds', {
    get: function () {
      return this.ms / 1000.0;
    }
  });
  function TimeSpan$Companion() {
    TimeSpan$Companion_instance = this;
    this.ZERO = new TimeSpan(0);
  }
  TimeSpan$Companion.prototype.fromMilliseconds_za3lpa$ = function (ms) {
    if (ms === 0)
      return this.ZERO;
    else
      return new TimeSpan(ms);
  };
  TimeSpan$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeSpan$Companion_instance = null;
  function TimeSpan$Companion_getInstance() {
    if (TimeSpan$Companion_instance === null) {
      new TimeSpan$Companion();
    }
    return TimeSpan$Companion_instance;
  }
  TimeSpan.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.ms, other.ms);
  };
  TimeSpan.prototype.plus_pfyu74$ = function (other) {
    return new TimeSpan(this.ms + other.ms | 0);
  };
  TimeSpan.prototype.minus_pfyu74$ = function (other) {
    return new TimeSpan(this.ms - other.ms | 0);
  };
  TimeSpan.prototype.times_za3lpa$ = function (scale) {
    return new TimeSpan(Kotlin.imul(this.ms, scale));
  };
  TimeSpan.prototype.times_14dthe$ = function (scale) {
    return new TimeSpan(numberToInt(this.ms * scale));
  };
  TimeSpan.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    return new TimeSpan(interpolate_0(ratio, this.ms, other.ms));
  };
  TimeSpan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeSpan',
    interfaces: [Interpolable, Comparable]
  };
  TimeSpan.prototype.component1 = function () {
    return this.ms;
  };
  TimeSpan.prototype.copy_za3lpa$ = function (ms) {
    return new TimeSpan(ms === void 0 ? this.ms : ms);
  };
  TimeSpan.prototype.toString = function () {
    return 'TimeSpan(ms=' + Kotlin.toString(this.ms) + ')';
  };
  TimeSpan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ms) | 0;
    return result;
  };
  TimeSpan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ms, other.ms))));
  };
  var get_milliseconds = defineInlineFunction('korge-js.com.soywiz.korge.time.get_milliseconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.korge.time.TimeSpan;
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt($receiver));
    };
  }));
  var get_seconds = defineInlineFunction('korge-js.com.soywiz.korge.time.get_seconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.korge.time.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble($receiver) * 1000.0));
    };
  }));
  function TimerComponents(view) {
    Component.call(this, view);
    this.timers_0 = ArrayList_init_0();
    this.timersIt_0 = ArrayList_init_0();
  }
  TimerComponents.prototype.update_za3lpa$ = function (dtMs) {
    var tmp$;
    this.timersIt_0.clear();
    this.timersIt_0.addAll_brywnq$(this.timers_0);
    tmp$ = this.timersIt_0.iterator();
    while (tmp$.hasNext()) {
      var timer = tmp$.next();
      timer(dtMs);
    }
  };
  TimerComponents.prototype.wait_pfyu74$ = function (time, continuation) {
    return this.waitMilliseconds_za3lpa$(time.ms, continuation);
  };
  TimerComponents.prototype.waitFrame = function (continuation) {
    return this.waitMilliseconds_za3lpa$(0, continuation);
  };
  function TimerComponents$waitMilliseconds$lambda$lambda(closure$elapsedTime, closure$time, this$TimerComponents, closure$timer, closure$c) {
    return function (it) {
      closure$elapsedTime.v = closure$elapsedTime.v + it | 0;
      if (closure$elapsedTime.v >= closure$time) {
        var $receiver = this$TimerComponents.timers_0;
        var element = ensureNotNull(closure$timer.v);
        $receiver.remove_11rb$(element);
        closure$c.resume_11rb$(Unit);
      }
      return Unit;
    };
  }
  function TimerComponents$waitMilliseconds$lambda(closure$time, this$TimerComponents) {
    return function (c) {
      var timer = {v: null};
      var elapsedTime = {v: 0};
      timer.v = TimerComponents$waitMilliseconds$lambda$lambda(elapsedTime, closure$time, this$TimerComponents, timer, c);
      var $receiver = this$TimerComponents.timers_0;
      var element = timer.v;
      $receiver.add_11rb$(element);
      return Unit;
    };
  }
  var toEventLoop = $module$korio_js.com.soywiz.korio.async.toEventLoop_5cx0c9$;
  function korioSuspendCoroutine$lambda(closure$block) {
    return function (c) {
      closure$block(toEventLoop(c));
      return Unit;
    };
  }
  function _korioSuspendCoroutine$lambda(closure$block) {
    return function (c) {
      closure$block(c);
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  TimerComponents.prototype.waitMilliseconds_za3lpa$ = function (time, continuation) {
    return suspendCoroutine$lambda(_korioSuspendCoroutine$lambda(korioSuspendCoroutine$lambda(TimerComponents$waitMilliseconds$lambda(time, this))))(continuation.facade);
  };
  TimerComponents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimerComponents',
    interfaces: [Component]
  };
  function get_timers$lambda(this$timers) {
    return function (it) {
      return new TimerComponents(this$timers);
    };
  }
  function get_timers($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(TimerComponents), get_timers$lambda($receiver));
  }
  function wait($receiver, time, continuation) {
    return get_timers($receiver).waitMilliseconds_za3lpa$(time, continuation);
  }
  function wait_0($receiver, time, continuation) {
    return get_timers($receiver).wait_pfyu74$(time, continuation);
  }
  function waitFrame($receiver, continuation) {
    return get_timers($receiver).waitFrame(continuation);
  }
  function sleep_0($receiver, time, continuation) {
    return get_timers($receiver).waitMilliseconds_za3lpa$(time, continuation);
  }
  function sleep_1($receiver, time, continuation) {
    return get_timers($receiver).wait_pfyu74$(time, continuation);
  }
  function sleepFrame($receiver, continuation) {
    return get_timers($receiver).waitFrame(continuation);
  }
  function Easing() {
    Easing$Companion_getInstance();
  }
  function Easing$Companion() {
    Easing$Companion_instance = this;
  }
  function Easing$Companion$cubic$lambda(closure$f) {
    return function (it) {
      return closure$f(it, 0.0, 1.0, 1.0);
    };
  }
  Easing$Companion.prototype.cubic_ibw4ua$ = function (f) {
    return Easing$Companion_getInstance().invoke_7fnk9s$(Easing$Companion$cubic$lambda(f));
  };
  function Easing$Companion$combine$lambda(closure$start, closure$end) {
    return function (it) {
      return it < 0.5 ? 0.5 * closure$start.invoke_14dthe$(it * 2.0) : 0.5 * closure$end.invoke_14dthe$((it - 0.5) * 2.0) + 0.5;
    };
  }
  Easing$Companion.prototype.combine_xmgja8$ = function (start, end) {
    return Easing$Companion_getInstance().invoke_7fnk9s$(Easing$Companion$combine$lambda(start, end));
  };
  function Easing$Companion$invoke$ObjectLiteral(closure$f) {
    this.closure$f = closure$f;
  }
  Easing$Companion$invoke$ObjectLiteral.prototype.invoke_14dthe$ = function (it) {
    return this.closure$f(it);
  };
  Easing$Companion$invoke$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Easing]
  };
  Easing$Companion.prototype.invoke_7fnk9s$ = function (f) {
    return new Easing$Companion$invoke$ObjectLiteral(f);
  };
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_ELASTIC', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_ELASTIC', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_ELASTIC;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_ELASTIC', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_ELASTIC', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_ELASTIC;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_BOUNCE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_BOUNCE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_BOUNCE;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'LINEAR', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_LINEAR', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.LINEAR;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_IN', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_IN;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_BACK', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_BACK', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_BACK;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_BACK', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_BACK', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_BACK;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_BACK', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT_BACK', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT_BACK;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_BACK', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_IN_BACK', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_IN_BACK;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_ELASTIC', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT_ELASTIC', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT_ELASTIC;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_ELASTIC', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_IN_ELASTIC', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_IN_ELASTIC;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_BOUNCE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_BOUNCE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_BOUNCE;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_BOUNCE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT_BOUNCE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT_BOUNCE;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_BOUNCE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_IN_BOUNCE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_IN_BOUNCE;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_QUAD', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_QUAD', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_QUAD;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_QUAD', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_QUAD', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_QUAD;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_QUAD', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT_QUAD', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT_QUAD;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_SINE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_SINE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_SINE;
      };
    }))
  });
  Easing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Easing$Companion_instance = null;
  function Easing$Companion_getInstance() {
    if (Easing$Companion_instance === null) {
      new Easing$Companion();
    }
    return Easing$Companion_instance;
  }
  Easing.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Easing',
    interfaces: []
  };
  function Easings() {
    Easings_instance = this;
    this.BOUNCE_10_0 = 1.70158;
    this.EASE_IN_ELASTIC = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_ELASTIC$lambda);
    this.EASE_OUT_ELASTIC = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_ELASTIC$lambda);
    this.EASE_OUT_BOUNCE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_BOUNCE$lambda);
    this.LINEAR = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$LINEAR$lambda);
    this.EASE_IN = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN$lambda);
    this.EASE_OUT = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT$lambda);
    this.EASE_IN_OUT = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_IN, this.EASE_OUT);
    this.EASE_OUT_IN = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_OUT, this.EASE_IN);
    this.EASE_IN_BACK = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_BACK$lambda(this));
    this.EASE_OUT_BACK = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_BACK$lambda(this));
    this.EASE_IN_OUT_BACK = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_IN_BACK, this.EASE_OUT_BACK);
    this.EASE_OUT_IN_BACK = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_OUT_BACK, this.EASE_IN_BACK);
    this.EASE_IN_OUT_ELASTIC = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_IN_ELASTIC, this.EASE_OUT_ELASTIC);
    this.EASE_OUT_IN_ELASTIC = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_OUT_ELASTIC, this.EASE_IN_ELASTIC);
    this.EASE_IN_BOUNCE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_BOUNCE$lambda(this));
    this.EASE_IN_OUT_BOUNCE = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_IN_BOUNCE, this.EASE_OUT_BOUNCE);
    this.EASE_OUT_IN_BOUNCE = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_OUT_BOUNCE, this.EASE_IN_BOUNCE);
    this.EASE_IN_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_QUAD$lambda);
    this.EASE_OUT_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_QUAD$lambda);
    this.EASE_IN_OUT_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_OUT_QUAD$lambda);
    this.EASE_SINE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_SINE$lambda);
  }
  function Easings$EASE_IN_ELASTIC$lambda(it) {
    if (it === 0.0 || it === 1.0)
      return it;
    else {
      var p = 0.3;
      var s = p / 4.0;
      var inv = it - 1;
      var tmp$ = -1.0;
      var x = 10.0 * inv;
      var tmp$_0 = tmp$ * Math_0.pow(2.0, x);
      var x_0 = (inv - s) * (2.0 * math.PI) / p;
      return tmp$_0 * Math_0.sin(x_0);
    }
  }
  function Easings$EASE_OUT_ELASTIC$lambda(it) {
    if (it === 0.0 || it === 1.0)
      return it;
    else {
      var p = 0.3;
      var s = p / 4.0;
      var x = -10.0 * it;
      var tmp$ = Math_0.pow(2.0, x);
      var x_0 = (it - s) * (2.0 * math.PI) / p;
      return tmp$ * Math_0.sin(x_0) + 1;
    }
  }
  function Easings$EASE_OUT_BOUNCE$lambda(it) {
    var s = 7.5625;
    var p = 2.75;
    if (it < 1.0 / p) {
      return s * Math_0.pow(it, 2.0);
    }
     else if (it < 2.0 / p) {
      var $receiver = it - 1.5 / p;
      return s * Math_0.pow($receiver, 2.0) + 0.75;
    }
     else if (it < 2.5 / p) {
      var $receiver_0 = it - 2.25 / p;
      return s * Math_0.pow($receiver_0, 2.0) + 0.9375;
    }
     else {
      var $receiver_1 = it - 2.625 / p;
      return s * Math_0.pow($receiver_1, 2.0) + 0.984375;
    }
  }
  function Easings$LINEAR$lambda(it) {
    return it;
  }
  function Easings$EASE_IN$lambda(it) {
    return it * it * it;
  }
  function Easings$EASE_OUT$lambda(it) {
    var inv = it - 1.0;
    return inv * inv * inv + 1;
  }
  function Easings$EASE_IN_BACK$lambda(this$Easings) {
    return function (it) {
      return Math_0.pow(it, 2.0) * ((this$Easings.BOUNCE_10_0 + 1.0) * it - this$Easings.BOUNCE_10_0);
    };
  }
  function Easings$EASE_OUT_BACK$lambda(this$Easings) {
    return function (it) {
      var inv = it - 1.0;
      return Math_0.pow(inv, 2.0) * ((this$Easings.BOUNCE_10_0 + 1.0) * inv + this$Easings.BOUNCE_10_0) + 1.0;
    };
  }
  function Easings$EASE_IN_BOUNCE$lambda(this$Easings) {
    return function (it) {
      return 1.0 - this$Easings.EASE_OUT_BOUNCE.invoke_14dthe$(1.0 - it);
    };
  }
  function Easings$EASE_IN_QUAD$lambda(it) {
    return 1.0 * it * it;
  }
  function Easings$EASE_OUT_QUAD$lambda(it) {
    return -1.0 * it * (it - 2);
  }
  function Easings$EASE_IN_OUT_QUAD$lambda(it) {
    var t = it * 2.0;
    return t < 1 ? 1.0 / 2 * t * t : -1.0 / 2 * ((t - 1) * (t - 1 - 2) - 1);
  }
  function Easings$EASE_SINE$lambda(it) {
    return Math_0.sin(it);
  }
  Easings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Easings',
    interfaces: []
  };
  var Easings_instance = null;
  function Easings_getInstance() {
    if (Easings_instance === null) {
      new Easings();
    }
    return Easings_instance;
  }
  function TweenComponent(vs, view, time, easing, callback, c) {
    if (time === void 0)
      time = null;
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    Component.call(this, view);
    this.vs_0 = vs;
    this.time = time;
    this.easing = easing;
    this.callback = callback;
    this.c = c;
    this.elapsed = 0;
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.time) != null)
      tmp$_1 = tmp$;
    else {
      var $receiver = this.vs_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(item.endTime);
      }
      tmp$_1 = max(destination);
    }
    this.ctime = (tmp$_0 = tmp$_1) != null ? tmp$_0 : 1000;
    this.cancelled = false;
    this.c.onCancel_4m4org$(TweenComponent_init$lambda(this));
  }
  TweenComponent.prototype.update_za3lpa$ = function (dtMs) {
    var tmp$, tmp$_0;
    if (this.cancelled) {
      this.dettach();
      this.c.resume_11rb$(Unit);
      return;
    }
    this.elapsed = this.elapsed + dtMs | 0;
    var ratio = clamp_0(this.elapsed / this.ctime, 0.0, 1.0);
    tmp$ = this.vs_0.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      var durationInTween = (tmp$_0 = v.duration_8be2vx$) != null ? tmp$_0 : this.ctime - v.startTime_8be2vx$ | 0;
      var elapsedInTween = clamp(this.elapsed - v.startTime_8be2vx$ | 0, 0, durationInTween);
      var ratioInTween = durationInTween <= 0.0 ? 1.0 : elapsedInTween / durationInTween;
      v.set_14dthe$(this.easing.invoke_14dthe$(ratioInTween));
    }
    this.callback(this.easing.invoke_14dthe$(ratio));
    if (ratio >= 1.0) {
      this.dettach();
      this.c.resume_11rb$(Unit);
    }
  };
  function TweenComponent_init$lambda(this$TweenComponent) {
    return function (it) {
      this$TweenComponent.cancelled = true;
      return Unit;
    };
  }
  TweenComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TweenComponent',
    interfaces: [Component]
  };
  function tween$lambda(it) {
    return Unit;
  }
  function tween$lambda_0(this$tween, closure$vs, closure$time, closure$easing, closure$callback) {
    return function (c) {
      var view = this$tween;
      view != null ? (view.addComponent_q5itx0$(new TweenComponent(toList(closure$vs), view, closure$time.milliseconds, closure$easing, closure$callback, c)), Unit) : null;
      return Unit;
    };
  }
  var CancellableContinuation_init = $module$korio_js.com.soywiz.korio.async.CancellableContinuation;
  function suspendCancellableCoroutine$lambda(closure$block) {
    return function (c) {
      closure$block(new CancellableContinuation_init(c));
      return Unit;
    };
  }
  function suspendCoroutineEL$lambda(closure$block) {
    return function (c) {
      closure$block(toEventLoop(c));
      return Unit;
    };
  }
  function _korioSuspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      closure$block(c);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function tween($receiver, vs, time, easing, callback, continuation) {
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    if (callback === void 0)
      callback = tween$lambda;
    return suspendCoroutine$lambda_0(_korioSuspendCoroutine$lambda_0(suspendCoroutineEL$lambda(suspendCancellableCoroutine$lambda(tween$lambda_0($receiver, vs, time, easing, callback)))))(continuation.facade);
  }
  function V2(key, initial, end, interpolator, startTime, duration) {
    if (startTime === void 0)
      startTime = 0;
    if (duration === void 0)
      duration = null;
    this.key_8be2vx$ = key;
    this.initial_8be2vx$ = initial;
    this.end_8be2vx$ = end;
    this.interpolator_8be2vx$ = interpolator;
    this.startTime_8be2vx$ = startTime;
    this.duration_8be2vx$ = duration;
    var tmp$;
    this.endTime = this.startTime_8be2vx$ + ((tmp$ = this.duration_8be2vx$) != null ? tmp$ : 0) | 0;
  }
  V2.prototype.set_14dthe$ = function (ratio) {
    this.key_8be2vx$.set(this.interpolator_8be2vx$(this.initial_8be2vx$, this.end_8be2vx$, ratio));
  };
  V2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'V2',
    interfaces: []
  };
  function V2_init(key, initial, end, $this) {
    $this = $this || Object.create(V2.prototype);
    V2.call($this, key, initial, end, getCallableRef('interpolateAny', function (min, max, ratio) {
      return interpolateAny(min, max, ratio);
    }));
    return $this;
  }
  V2.prototype.component1_8be2vx$ = function () {
    return this.key_8be2vx$;
  };
  V2.prototype.component2_8be2vx$ = function () {
    return this.initial_8be2vx$;
  };
  V2.prototype.component3_8be2vx$ = function () {
    return this.end_8be2vx$;
  };
  V2.prototype.component4_8be2vx$ = function () {
    return this.interpolator_8be2vx$;
  };
  V2.prototype.component5_8be2vx$ = function () {
    return this.startTime_8be2vx$;
  };
  V2.prototype.component6_8be2vx$ = function () {
    return this.duration_8be2vx$;
  };
  V2.prototype.copy_1f32s1$ = function (key, initial, end, interpolator, startTime, duration) {
    return new V2(key === void 0 ? this.key_8be2vx$ : key, initial === void 0 ? this.initial_8be2vx$ : initial, end === void 0 ? this.end_8be2vx$ : end, interpolator === void 0 ? this.interpolator_8be2vx$ : interpolator, startTime === void 0 ? this.startTime_8be2vx$ : startTime, duration === void 0 ? this.duration_8be2vx$ : duration);
  };
  V2.prototype.toString = function () {
    return 'V2(key=' + Kotlin.toString(this.key_8be2vx$) + (', initial=' + Kotlin.toString(this.initial_8be2vx$)) + (', end=' + Kotlin.toString(this.end_8be2vx$)) + (', interpolator=' + Kotlin.toString(this.interpolator_8be2vx$)) + (', startTime=' + Kotlin.toString(this.startTime_8be2vx$)) + (', duration=' + Kotlin.toString(this.duration_8be2vx$)) + ')';
  };
  V2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.initial_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.end_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.interpolator_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.duration_8be2vx$) | 0;
    return result;
  };
  V2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key_8be2vx$, other.key_8be2vx$) && Kotlin.equals(this.initial_8be2vx$, other.initial_8be2vx$) && Kotlin.equals(this.end_8be2vx$, other.end_8be2vx$) && Kotlin.equals(this.interpolator_8be2vx$, other.interpolator_8be2vx$) && Kotlin.equals(this.startTime_8be2vx$, other.startTime_8be2vx$) && Kotlin.equals(this.duration_8be2vx$, other.duration_8be2vx$)))));
  };
  function get_2($receiver, end) {
    return new V2($receiver, $receiver.get(), end, getCallableRef('interpolateAny', function (min, max, ratio) {
      return interpolateAny(min, max, ratio);
    }));
  }
  function get_3($receiver, initial, end) {
    return new V2($receiver, initial, end, getCallableRef('interpolateAny', function (min, max, ratio) {
      return interpolateAny(min, max, ratio);
    }));
  }
  var get_4 = defineInlineFunction('korge-js.com.soywiz.korge.tween.get_1ml8v3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver, end) {
      return new V2_init($receiver, $receiver.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }));
    };
  }));
  var get_5 = defineInlineFunction('korge-js.com.soywiz.korge.tween.get_8jpm3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver, initial, end) {
      return new V2_init($receiver, numberToDouble(initial), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }));
    };
  }));
  function rangeTo($receiver, that) {
    return $receiver.copy_1f32s1$(void 0, $receiver.end_8be2vx$, that);
  }
  function rangeTo_0($receiver, that) {
    return get_2($receiver, $receiver.get());
  }
  function rangeTo_1($receiver, that) {
    return get_3($receiver, that.start, that.endInclusive);
  }
  function rangeTo_2($receiver, that) {
    return get_3($receiver, that.first, that.second);
  }
  function withEasing$lambda_0(this$withEasing, closure$easing) {
    return function (a, b, ratio) {
      return this$withEasing.interpolator_8be2vx$(a, b, closure$easing.invoke_14dthe$(ratio));
    };
  }
  function withEasing_0($receiver, easing) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, withEasing$lambda_0($receiver, easing));
  }
  function color_0($receiver) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, getCallableRef('blendRGBA', function ($receiver, c1, c2, factor) {
      return $receiver.blendRGBA_224j3y$(c1, c2, factor);
    }.bind(null, color.RGBA)));
  }
  function easing$lambda(this$easing, closure$easing) {
    return function (a, b, ratio) {
      return this$easing.interpolator_8be2vx$(a, b, closure$easing.invoke_14dthe$(ratio));
    };
  }
  function easing($receiver, easing) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, easing$lambda($receiver, easing));
  }
  var delay = defineInlineFunction('korge-js.com.soywiz.korge.tween.delay_mh6r8c$', function ($receiver, startTime) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, void 0, startTime.milliseconds);
  });
  var duration = defineInlineFunction('korge-js.com.soywiz.korge.tween.duration_mh6r8c$', function ($receiver, duration) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, void 0, void 0, duration.milliseconds);
  });
  var linear = defineInlineFunction('korge-js.com.soywiz.korge.tween.linear_2stsxw$', function ($receiver) {
    return $receiver;
  });
  var easeIn = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeIn_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN);
    };
  }));
  var easeOut = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOut_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT);
    };
  }));
  var easeInOut = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOut_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT);
    };
  }));
  var easeOutIn = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutIn_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_IN);
    };
  }));
  var easeInBack = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInBack_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_BACK);
    };
  }));
  var easeOutBack = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutBack_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_BACK);
    };
  }));
  var easeInOutBack = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOutBack_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT_BACK);
    };
  }));
  var easeOutInBack = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutInBack_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_IN_BACK);
    };
  }));
  var easeInElastic = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInElastic_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_ELASTIC);
    };
  }));
  var easeOutElastic = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutElastic_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_ELASTIC);
    };
  }));
  var easeInOutElastic = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOutElastic_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT_ELASTIC);
    };
  }));
  var easeOutInElastic = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutInElastic_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_IN_ELASTIC);
    };
  }));
  var easeInBounce = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInBounce_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_BOUNCE);
    };
  }));
  var easeOutBounce = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutBounce_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_BOUNCE);
    };
  }));
  var easeInOutBounce = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOutBounce_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT_BOUNCE);
    };
  }));
  var easeOutInBounce = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutInBounce_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_IN_BOUNCE);
    };
  }));
  var easeInQuad = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInQuad_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_QUAD);
    };
  }));
  var easeOutQuad = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutQuad_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_QUAD);
    };
  }));
  var easeInOutQuad = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOutQuad_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT_QUAD);
    };
  }));
  var easeSine = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeSine_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_SINE);
    };
  }));
  function CancellableGroup() {
    this.cancellables_0 = ArrayList_init_0();
  }
  CancellableGroup.prototype.plusAssign_kou100$ = function (c) {
    this.cancellables_0.add_11rb$(c);
  };
  CancellableGroup.prototype.plusAssign_72hza6$ = function (c) {
    var $receiver = this.cancellables_0;
    var element = cancellable(c);
    $receiver.add_11rb$(element);
  };
  CancellableGroup.prototype.addCancellable_kou100$ = function (c) {
    this.cancellables_0.add_11rb$(c);
  };
  CancellableGroup.prototype.addCloseable_72hza6$ = function (c) {
    var $receiver = this.cancellables_0;
    var element = cancellable(c);
    $receiver.add_11rb$(element);
  };
  CancellableGroup.prototype.cancel_tcv7n7$$default = function (e) {
    cancel(this.cancellables_0, e);
  };
  CancellableGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CancellableGroup',
    interfaces: [Cancellable]
  };
  function AutoClose(callback_0, continuation_0, suspended) {
    var instance = new Coroutine$AutoClose(callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$AutoClose(callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$group = void 0;
    this.local$callback = callback_0;
  }
  Coroutine$AutoClose.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AutoClose.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AutoClose.prototype.constructor = Coroutine$AutoClose;
  Coroutine$AutoClose.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$group = new CancellableGroup();
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.local$callback(this.local$group, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.local$group.cancel_tcv7n7$();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 6)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function toBool2($receiver, obj) {
    var tmp$;
    if (typeof obj === 'boolean')
      return obj;
    else if (typeof obj === 'string') {
      tmp$ = obj.toLowerCase();
      if (equals(tmp$, '') || equals(tmp$, '0') || equals(tmp$, 'false') || equals(tmp$, 'ko') || equals(tmp$, 'no'))
        return false;
      else
        return true;
    }
     else
      return lang.Dynamic.toInt_s8jyv4$(obj) !== 0;
  }
  function BlendMode(name, ordinal, factors) {
    Enum.call(this);
    this.factors = factors;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BlendMode_initFields() {
    BlendMode_initFields = function () {
    };
    BlendMode$INHERIT_instance = new BlendMode('INHERIT', 0, AG$Blending.Companion.NORMAL);
    BlendMode$NONE_instance = new BlendMode('NONE', 1, AG$AG$Blending_init(AG$BlendFactor.ONE, AG$BlendFactor.ZERO));
    BlendMode$NORMAL_instance = new BlendMode('NORMAL', 2, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA));
    BlendMode$ADD_instance = new BlendMode('ADD', 3, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$MULTIPLY_instance = new BlendMode('MULTIPLY', 4, AG$AG$Blending_init(AG$BlendFactor.DESTINATION_COLOR, AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA));
    BlendMode$SCREEN_instance = new BlendMode('SCREEN', 5, AG$AG$Blending_init(AG$BlendFactor.ONE, AG$BlendFactor.ONE_MINUS_SOURCE_COLOR));
    BlendMode$ERASE_instance = new BlendMode('ERASE', 6, AG$AG$Blending_init(AG$BlendFactor.ZERO, AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA));
    BlendMode$MASK_instance = new BlendMode('MASK', 7, AG$AG$Blending_init(AG$BlendFactor.ZERO, AG$BlendFactor.SOURCE_ALPHA));
    BlendMode$BELOW_instance = new BlendMode('BELOW', 8, AG$AG$Blending_init(AG$BlendFactor.ONE_MINUS_DESTINATION_ALPHA, AG$BlendFactor.DESTINATION_ALPHA));
    BlendMode$SUBTRACT_instance = new BlendMode('SUBTRACT', 9, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE, AG$BlendEquation.REVERSE_SUBTRACT));
    BlendMode$LIGHTEN_instance = new BlendMode('LIGHTEN', 10, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$DARKEN_instance = new BlendMode('DARKEN', 11, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$DIFFERENCE_instance = new BlendMode('DIFFERENCE', 12, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$INVERT_instance = new BlendMode('INVERT', 13, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$ALPHA_instance = new BlendMode('ALPHA', 14, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$HARDLIGHT_instance = new BlendMode('HARDLIGHT', 15, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$Companion_getInstance();
  }
  var BlendMode$INHERIT_instance;
  function BlendMode$INHERIT_getInstance() {
    BlendMode_initFields();
    return BlendMode$INHERIT_instance;
  }
  var BlendMode$NONE_instance;
  function BlendMode$NONE_getInstance() {
    BlendMode_initFields();
    return BlendMode$NONE_instance;
  }
  var BlendMode$NORMAL_instance;
  function BlendMode$NORMAL_getInstance() {
    BlendMode_initFields();
    return BlendMode$NORMAL_instance;
  }
  var BlendMode$ADD_instance;
  function BlendMode$ADD_getInstance() {
    BlendMode_initFields();
    return BlendMode$ADD_instance;
  }
  var BlendMode$MULTIPLY_instance;
  function BlendMode$MULTIPLY_getInstance() {
    BlendMode_initFields();
    return BlendMode$MULTIPLY_instance;
  }
  var BlendMode$SCREEN_instance;
  function BlendMode$SCREEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$SCREEN_instance;
  }
  var BlendMode$ERASE_instance;
  function BlendMode$ERASE_getInstance() {
    BlendMode_initFields();
    return BlendMode$ERASE_instance;
  }
  var BlendMode$MASK_instance;
  function BlendMode$MASK_getInstance() {
    BlendMode_initFields();
    return BlendMode$MASK_instance;
  }
  var BlendMode$BELOW_instance;
  function BlendMode$BELOW_getInstance() {
    BlendMode_initFields();
    return BlendMode$BELOW_instance;
  }
  var BlendMode$SUBTRACT_instance;
  function BlendMode$SUBTRACT_getInstance() {
    BlendMode_initFields();
    return BlendMode$SUBTRACT_instance;
  }
  var BlendMode$LIGHTEN_instance;
  function BlendMode$LIGHTEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$LIGHTEN_instance;
  }
  var BlendMode$DARKEN_instance;
  function BlendMode$DARKEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$DARKEN_instance;
  }
  var BlendMode$DIFFERENCE_instance;
  function BlendMode$DIFFERENCE_getInstance() {
    BlendMode_initFields();
    return BlendMode$DIFFERENCE_instance;
  }
  var BlendMode$INVERT_instance;
  function BlendMode$INVERT_getInstance() {
    BlendMode_initFields();
    return BlendMode$INVERT_instance;
  }
  var BlendMode$ALPHA_instance;
  function BlendMode$ALPHA_getInstance() {
    BlendMode_initFields();
    return BlendMode$ALPHA_instance;
  }
  var BlendMode$HARDLIGHT_instance;
  function BlendMode$HARDLIGHT_getInstance() {
    BlendMode_initFields();
    return BlendMode$HARDLIGHT_instance;
  }
  function BlendMode$Companion() {
    BlendMode$Companion_instance = this;
    var $receiver = BlendMode$values();
    var destination = ArrayList_init_0($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.ordinal, item));
    }
    this.BY_ORDINAL = toMap(destination);
  }
  BlendMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BlendMode$Companion_instance = null;
  function BlendMode$Companion_getInstance() {
    BlendMode_initFields();
    if (BlendMode$Companion_instance === null) {
      new BlendMode$Companion();
    }
    return BlendMode$Companion_instance;
  }
  BlendMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendMode',
    interfaces: [Enum]
  };
  function BlendMode$values() {
    return [BlendMode$INHERIT_getInstance(), BlendMode$NONE_getInstance(), BlendMode$NORMAL_getInstance(), BlendMode$ADD_getInstance(), BlendMode$MULTIPLY_getInstance(), BlendMode$SCREEN_getInstance(), BlendMode$ERASE_getInstance(), BlendMode$MASK_getInstance(), BlendMode$BELOW_getInstance(), BlendMode$SUBTRACT_getInstance(), BlendMode$LIGHTEN_getInstance(), BlendMode$DARKEN_getInstance(), BlendMode$DIFFERENCE_getInstance(), BlendMode$INVERT_getInstance(), BlendMode$ALPHA_getInstance(), BlendMode$HARDLIGHT_getInstance()];
  }
  BlendMode.values = BlendMode$values;
  function BlendMode$valueOf(name) {
    switch (name) {
      case 'INHERIT':
        return BlendMode$INHERIT_getInstance();
      case 'NONE':
        return BlendMode$NONE_getInstance();
      case 'NORMAL':
        return BlendMode$NORMAL_getInstance();
      case 'ADD':
        return BlendMode$ADD_getInstance();
      case 'MULTIPLY':
        return BlendMode$MULTIPLY_getInstance();
      case 'SCREEN':
        return BlendMode$SCREEN_getInstance();
      case 'ERASE':
        return BlendMode$ERASE_getInstance();
      case 'MASK':
        return BlendMode$MASK_getInstance();
      case 'BELOW':
        return BlendMode$BELOW_getInstance();
      case 'SUBTRACT':
        return BlendMode$SUBTRACT_getInstance();
      case 'LIGHTEN':
        return BlendMode$LIGHTEN_getInstance();
      case 'DARKEN':
        return BlendMode$DARKEN_getInstance();
      case 'DIFFERENCE':
        return BlendMode$DIFFERENCE_getInstance();
      case 'INVERT':
        return BlendMode$INVERT_getInstance();
      case 'ALPHA':
        return BlendMode$ALPHA_getInstance();
      case 'HARDLIGHT':
        return BlendMode$HARDLIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korge.view.BlendMode.' + name);
    }
  }
  BlendMode.valueOf_61zpoe$ = BlendMode$valueOf;
  function Camera(views) {
    Container.call(this, views);
    this.width_lep6zw$_0 = views.virtualWidth;
    this.height_fhenp7$_0 = views.virtualHeight;
  }
  Object.defineProperty(Camera.prototype, 'width', {
    get: function () {
      return this.width_lep6zw$_0;
    },
    set: function (width) {
      this.width_lep6zw$_0 = width;
    }
  });
  Object.defineProperty(Camera.prototype, 'height', {
    get: function () {
      return this.height_fhenp7$_0;
    },
    set: function (height) {
      this.height_fhenp7$_0 = height;
    }
  });
  Camera.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var width = this.width;
    var height = this.height;
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
  };
  Camera.prototype.getLocalMatrixFittingGlobalRect_2da8yn$ = function (rect) {
    var tmp$, tmp$_0, tmp$_1;
    var destinationBounds = rect;
    var mat = (tmp$_1 = (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.globalMatrix : null) != null ? tmp$_0.clone() : null) != null ? tmp$_1 : new Matrix2d();
    mat.translate_lu1900$(-destinationBounds.x, -destinationBounds.y);
    mat.scale_lu1900$(this.width / destinationBounds.width, this.height / destinationBounds.height);
    return mat;
  };
  Camera.prototype.getLocalMatrixFittingView_gohfih$ = function (view) {
    return this.getLocalMatrixFittingGlobalRect_2da8yn$((view != null ? view : this.views.stage).globalBounds);
  };
  Camera.prototype.setTo_gohfih$ = function (view) {
    this.localMatrix = this.getLocalMatrixFittingView_gohfih$(view);
  };
  Camera.prototype.setTo_2da8yn$ = function (rect) {
    this.localMatrix = this.getLocalMatrixFittingGlobalRect_2da8yn$(rect);
  };
  Camera.prototype.tweenTo_psi39f$ = function (view, vs, time, easing, continuation) {
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    return tween(this, [get_3(getPropertyCallableRef('localMatrix', 0, function ($receiver) {
      return $receiver.localMatrix;
    }.bind(null, this), function ($receiver, value) {
      $receiver.localMatrix = value;
    }.bind(null, this)), this.localMatrix.clone(), this.getLocalMatrixFittingView_gohfih$(view))].concat(vs), time, easing, void 0, continuation);
  };
  Camera.prototype.tweenTo_1okiah$ = function (rect, vs, time, easing, continuation) {
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    return tween(this, [get_3(getPropertyCallableRef('localMatrix', 0, function ($receiver) {
      return $receiver.localMatrix;
    }.bind(null, this), function ($receiver, value) {
      $receiver.localMatrix = value;
    }.bind(null, this)), this.localMatrix.clone(), this.getLocalMatrixFittingGlobalRect_2da8yn$(rect))].concat(vs), time, easing, void 0, continuation);
  };
  Camera.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Camera',
    interfaces: [Container]
  };
  function camera($receiver) {
    return new Camera($receiver);
  }
  function Container(views) {
    View.call(this, views);
    this.children = ArrayList_init_0();
    this.tempMatrix_6lfzyf$_0 = new Matrix2d();
    this.bb_8tnmvw$_0 = new BoundsBuilder();
    this.tempRect_nf3rlo$_0 = new Rectangle();
  }
  Container.prototype.removeChildren = function () {
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      child.parent = null;
      child.index = -1;
    }
    this.children.clear();
  };
  Container.prototype.addChild_l5rad2$ = function (view) {
    this.plusAssign_l5rad2$(view);
  };
  Container.prototype.invalidate = function () {
    var tmp$;
    this.validGlobal_8be2vx$ = false;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      if (!child.validGlobal_8be2vx$)
        continue;
      child.validGlobal_8be2vx$ = false;
      child.invalidate();
    }
  };
  Container.prototype.plusAssign_l5rad2$ = function (view) {
    view.removeFromParent();
    view.index = this.children.size;
    this.children.add_11rb$(view);
    view.parent = this;
    view.invalidate();
  };
  Container.prototype.minusAssign_l5rad2$ = function (view) {
    if (equals(view.parent, this))
      view.removeFromParent();
  };
  function Container$render$lambda(closure$isGlobal, closure$ctx, this$Container, closure$m) {
    return function (child) {
      if (closure$isGlobal) {
        child.render_edjgwy$(closure$ctx, child.globalMatrix);
      }
       else {
        this$Container.tempMatrix_6lfzyf$_0.multiply_mgxgbw$(child.localMatrix, closure$m);
        child.render_edjgwy$(closure$ctx, this$Container.tempMatrix_6lfzyf$_0);
      }
      return Unit;
    };
  }
  Container.prototype.render_edjgwy$ = function (ctx, m) {
    if (!this.visible)
      return;
    var isGlobal = m === this.globalMatrix;
    var n = 0;
    while (n < this.children.size) {
      Container$render$lambda(isGlobal, ctx, this, m)(this.children.get_za3lpa$(n));
      n = n + 1 | 0;
    }
  };
  Container.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    var $receiver = reversed(this.children);
    var predicate = getPropertyCallableRef('visible', 1, function ($receiver) {
      return $receiver.visible;
    }, function ($receiver, value) {
      $receiver.visible = value;
    });
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (predicate(element))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      tmp$_0 = child.hitTest_lu1900$(x, y);
      if (tmp$_0 == null) {
        continue;
      }
      return tmp$_0;
    }
    return null;
  };
  Container.prototype.hitTestBoundingInternal_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    var $receiver = reversed(this.children);
    var predicate = getPropertyCallableRef('visible', 1, function ($receiver) {
      return $receiver.visible;
    }, function ($receiver, value) {
      $receiver.visible = value;
    });
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (predicate(element))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      tmp$_0 = child.hitTestBounding_lu1900$(x, y);
      if (tmp$_0 == null) {
        continue;
      }
      return tmp$_0;
    }
    return null;
  };
  function Container$getLocalBoundsInternal$lambda(this$Container) {
    return function (child) {
      child.getBounds_tvgmbo$(child, this$Container.tempRect_nf3rlo$_0);
      this$Container.bb_8tnmvw$_0.add_2da8yn$(this$Container.tempRect_nf3rlo$_0);
      return Unit;
    };
  }
  Container.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    this.bb_8tnmvw$_0.reset();
    var n = 0;
    while (n < this.children.size) {
      Container$getLocalBoundsInternal$lambda(this)(this.children.get_za3lpa$(n));
      n = n + 1 | 0;
    }
    this.bb_8tnmvw$_0.getBounds_2da8yn$(out);
  };
  function Container$updateInternal$lambda(closure$dtMs) {
    return function (child) {
      child.update_za3lpa$(closure$dtMs);
      return Unit;
    };
  }
  Container.prototype.updateInternal_za3lpa$ = function (dtMs) {
    View.prototype.updateInternal_za3lpa$.call(this, dtMs);
    var n = 0;
    while (n < this.children.size) {
      Container$updateInternal$lambda(dtMs)(this.children.get_za3lpa$(n));
      n = n + 1 | 0;
    }
  };
  function Container$dispatch$lambda(closure$event, closure$clazz) {
    return function (child) {
      child.dispatch_gdt21f$(closure$event, closure$clazz);
      return Unit;
    };
  }
  Container.prototype.dispatch_gdt21f$$default = function (event, clazz) {
    var n = 0;
    while (n < this.children.size) {
      Container$dispatch$lambda(event, clazz)(this.children.get_za3lpa$(this.children.size - n - 1 | 0));
      n = n + 1 | 0;
    }
    this.dispatch_gdt21f$(event, clazz, View.prototype.dispatch_gdt21f$$default.bind(this));
  };
  Container.prototype.safeForEachChildren_5ve17j$ = defineInlineFunction('korge-js.com.soywiz.korge.view.Container.safeForEachChildren_5ve17j$', function (callback) {
    var n = 0;
    while (n < this.children.size) {
      callback(this.children.get_za3lpa$(n));
      n = n + 1 | 0;
    }
  });
  Container.prototype.safeForEachChildrenReversed_5ve17j$ = defineInlineFunction('korge-js.com.soywiz.korge.view.Container.safeForEachChildrenReversed_5ve17j$', function (callback) {
    var n = 0;
    while (n < this.children.size) {
      callback(this.children.get_za3lpa$(this.children.size - n - 1 | 0));
      n = n + 1 | 0;
    }
  });
  Container.prototype.createInstance = function () {
    return new Container(this.views);
  };
  Container.prototype.clone = function () {
    var tmp$;
    var out = View.prototype.clone.call(this);
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      plusAssign(out, child.clone());
    }
    return out;
  };
  Container.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Container',
    interfaces: [View]
  };
  function FixedSizeContainer(views, width, height) {
    if (width === void 0)
      width = 100.0;
    if (height === void 0)
      height = 100.0;
    Container.call(this, views);
    this.width_qh61hh$_0 = width;
    this.height_ujosw2$_0 = height;
  }
  Object.defineProperty(FixedSizeContainer.prototype, 'width', {
    get: function () {
      return this.width_qh61hh$_0;
    },
    set: function (width) {
      this.width_qh61hh$_0 = width;
    }
  });
  Object.defineProperty(FixedSizeContainer.prototype, 'height', {
    get: function () {
      return this.height_ujosw2$_0;
    },
    set: function (height) {
      this.height_ujosw2$_0 = height;
    }
  });
  FixedSizeContainer.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var width = this.width;
    var height = this.height;
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
  };
  FixedSizeContainer.prototype.toString = function () {
    var out = Container.prototype.toString.call(this);
    out += ':size=(' + get_niceStr(this.width) + 'x' + get_niceStr(this.height) + ')';
    return out;
  };
  FixedSizeContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixedSizeContainer',
    interfaces: [Container]
  };
  function plusAssign($receiver, view) {
    var tmp$;
    var container = (tmp$ = $receiver) == null || Kotlin.isType(tmp$, Container) ? tmp$ : null;
    if (view != null)
      container != null ? (container.addChild_l5rad2$(view), Unit) : null;
  }
  function FontRepository(views) {
    this.views = views;
    this.fonts = HashMap_init();
  }
  FontRepository.prototype.registerFont_lfzjqc$ = function (name, bmp) {
    var tmp$ = this.fonts;
    var key = name.toLowerCase();
    tmp$.put_xwzc9p$(key, bmp);
  };
  FontRepository.prototype.getBitmapFont_bm4lxs$ = function (name, size) {
    var tmp$;
    var nameLC = name.toLowerCase();
    var $receiver = this.fonts;
    var tmp$_0;
    if (!(Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(nameLC)) {
      this.registerFont_lfzjqc$.call(this, name, convert(font.BitmapFontGenerator.generate_h6sd2a$(name, Math_0.min(size, 32), font.BitmapFontGenerator.LATIN_ALL), this.views.ag));
    }
    return (tmp$ = this.fonts.get_11rb$(nameLC)) != null ? tmp$ : this.views.defaultFont;
  };
  FontRepository.prototype.getBitmapFont_a1ixm2$ = function (face, size) {
    if (Kotlin.isType(face, Html$FontFace$Named))
      return this.getBitmapFont_bm4lxs$(face.name, size);
    else if (Kotlin.isType(face, Html$FontFace$Bitmap))
      return face.font;
    else
      return invalidOp('Unsupported font face: ' + face);
  };
  FontRepository.prototype.getBitmapFont_ktnn5$ = function (format) {
    return this.getBitmapFont_a1ixm2$(format.computedFace, format.computedSize);
  };
  FontRepository.prototype.getBounds_1y5lg$ = function (text, format, out) {
    var tmp$, tmp$_0, tmp$_1;
    var font = this.getBitmapFont_a1ixm2$(format.computedFace, format.computedSize);
    var scale = format.computedSize / font.fontSize;
    var width = 0.0;
    var height = 0.0;
    var dy = 0.0;
    var dx = 0.0;
    tmp$ = text.length;
    for (var n = 0; n < tmp$; n++) {
      var c1 = text.charCodeAt(n) | 0;
      if (c1 === (10 | 0)) {
        dx = 0.0;
        dy += font.fontSize;
        var a = height;
        height = Math_0.max(a, dy);
        continue;
      }
      var index = n + 1 | 0;
      var c2 = (index >= 0 && index <= get_lastIndex_2(text) ? text.charCodeAt(index) : unboxChar(toBoxedChar(32))) | 0;
      var kerningOffset = (tmp$_1 = (tmp$_0 = font.kernings.get_za3lpa$(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(c1, c2))) != null ? tmp$_0.amount : null) != null ? tmp$_1 : 0;
      var glyph = font.get_za3lpa$(c1);
      dx += glyph.xadvance + kerningOffset | 0;
      var a_0 = width;
      var b = dx;
      width = Math_0.max(a_0, b);
    }
    height += font.fontSize;
    out.setTo_6y0v78$(0.0, 0.0, width * scale, height * scale);
  };
  FontRepository.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontRepository',
    interfaces: [Html$MetricsProvider]
  };
  function Image(tex, anchorX, anchorY, views, hitShape, smoothing) {
    if (anchorX === void 0)
      anchorX = 0.0;
    if (anchorY === void 0)
      anchorY = anchorX;
    if (hitShape === void 0)
      hitShape = null;
    if (smoothing === void 0)
      smoothing = true;
    View.call(this, views);
    this.tex = tex;
    this.anchorX = anchorX;
    this.anchorY = anchorY;
    this.hitShape = hitShape;
    this.smoothing = smoothing;
  }
  Object.defineProperty(Image.prototype, 'sLeft_0', {
    get: function () {
      return -this.tex.width * this.anchorX;
    }
  });
  Object.defineProperty(Image.prototype, 'sTop_0', {
    get: function () {
      return -this.tex.height * this.anchorY;
    }
  });
  Image.prototype.render_edjgwy$ = function (ctx, m) {
    if (!this.visible)
      return;
    ctx.batch.drawQuad_4rxj9x$(this.tex, -(this.tex.width * this.anchorX), -(this.tex.height * this.anchorY), void 0, void 0, m, this.smoothing, this.globalColorMul, this.globalColorAdd, this.computedBlendMode.factors);
  };
  Image.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var x = this.sLeft_0;
    var y = this.sTop_0;
    var width = this.tex.width;
    var height = this.tex.height;
    out.setTo_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
  };
  Image.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    var sRight = this.sLeft_0 + this.tex.width;
    var sBottom = this.sTop_0 + this.tex.height;
    return this.checkGlobalBounds_15yvbs$(x, y, this.sLeft_0, this.sTop_0, sRight, sBottom) && ((tmp$_0 = (tmp$ = this.hitShape) != null ? tmp$.containsPoint_lu1900$(this.globalToLocalX_lu1900$(x, y), this.globalToLocalY_lu1900$(x, y)) : null) != null ? tmp$_0 : true) ? this : null;
  };
  Image.prototype.createInstance = function () {
    return new Image(this.tex, this.anchorX, this.anchorY, this.views, this.hitShape, this.smoothing);
  };
  Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: [View]
  };
  function image($receiver, tex, anchorX, anchorY) {
    if (anchorX === void 0)
      anchorX = 0.0;
    if (anchorY === void 0)
      anchorY = anchorX;
    return new Image(tex, anchorX, anchorY, $receiver);
  }
  function image_0($receiver, texture, anchorX, anchorY) {
    if (anchorX === void 0)
      anchorX = 0.0;
    if (anchorY === void 0)
      anchorY = 0.0;
    var child = image($receiver.views, texture, anchorX, anchorY);
    $receiver.plusAssign_l5rad2$(child);
    return child;
  }
  var image_1 = defineInlineFunction('korge-js.com.soywiz.korge.view.image_jg5zjn$', wrapFunction(function () {
    var image = _.com.soywiz.korge.view.image_knk7mb$;
    return function ($receiver, texture, anchorX, anchorY, callback) {
      if (anchorX === void 0)
        anchorX = 0.0;
      if (anchorY === void 0)
        anchorY = 0.0;
      var child = image($receiver.views, texture, anchorX, anchorY);
      $receiver.plusAssign_l5rad2$(child);
      callback(child);
      return child;
    };
  }));
  function NinePatch(views, tex, width, height, left, top, right, bottom) {
    View.call(this, views);
    this.tex = tex;
    this.width_8rytfn$_0 = width;
    this.height_35700a$_0 = height;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.smoothing = true;
    this.sLeft_0 = 0.0;
    this.sTop_0 = 0.0;
    this.posCuts = [Vector2_init(0, 0), new Vector2(this.left, this.top), new Vector2(1.0 - this.right, 1.0 - this.bottom), new Vector2(1.0, 1.0)];
    this.texCuts = [Vector2_init(0, 0), new Vector2(this.left, this.top), new Vector2(1.0 - this.right, 1.0 - this.bottom), new Vector2(1.0, 1.0)];
  }
  Object.defineProperty(NinePatch.prototype, 'width', {
    get: function () {
      return this.width_8rytfn$_0;
    },
    set: function (width) {
      this.width_8rytfn$_0 = width;
    }
  });
  Object.defineProperty(NinePatch.prototype, 'height', {
    get: function () {
      return this.height_35700a$_0;
    },
    set: function (height) {
      this.height_35700a$_0 = height;
    }
  });
  NinePatch.prototype.render_edjgwy$ = function (ctx, m) {
    if (!this.visible)
      return;
    var texLeftWidth = this.tex.width * this.left;
    var texTopHeight = this.tex.height * this.top;
    var texRighttWidth = this.tex.width * this.right;
    var texBottomHeight = this.tex.height * this.bottom;
    var ratioX = this.width < this.tex.width ? this.width / this.tex.width : 1.0;
    var ratioY = this.height < this.tex.height ? this.height / this.tex.height : 1.0;
    var actualRatioX = Math_0.min(ratioX, ratioY);
    var actualRatioY = Math_0.min(ratioX, ratioY);
    this.posCuts[1].setTo_lu1900$(texLeftWidth * actualRatioX / this.width, texTopHeight * actualRatioY / this.height);
    this.posCuts[2].setTo_lu1900$(1.0 - texRighttWidth * actualRatioX / this.width, 1.0 - texBottomHeight * actualRatioY / this.height);
    ctx.batch.drawNinePatch_sk7p02$(this.tex, this.sLeft_0, this.sTop_0, this.width, this.height, this.posCuts, this.texCuts, m, this.smoothing, this.colorMul, this.colorAdd, this.blendMode.factors);
  };
  NinePatch.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    out.setTo_6y0v78$(this.sLeft_0, this.sTop_0, this.width, this.height);
  };
  NinePatch.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var sRight = this.sLeft_0 + this.width;
    var sBottom = this.sTop_0 + this.height;
    return this.checkGlobalBounds_15yvbs$(x, y, this.sLeft_0, this.sTop_0, sRight, sBottom) ? this : null;
  };
  NinePatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatch',
    interfaces: [View]
  };
  function ninePatch($receiver, tex, width, height, left, top, right, bottom) {
    return new NinePatch($receiver, tex, width, height, left, top, right, bottom);
  }
  function Renderable() {
  }
  Renderable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Renderable',
    interfaces: []
  };
  function ScaleView(views, width, height, scale, filtering) {
    if (scale === void 0)
      scale = 2.0;
    if (filtering === void 0)
      filtering = false;
    FixedSizeContainer.call(this, views);
    this.filtering = filtering;
    this.width = width;
    this.height = height;
    this.scale = scale;
  }
  ScaleView.prototype.super_render_0 = function (ctx, m) {
    FixedSizeContainer.prototype.render_edjgwy$.call(this, ctx, m);
  };
  function ScaleView$render$lambda(closure$ctx, this$ScaleView) {
    return function () {
      this$ScaleView.super_render_0(closure$ctx, new Matrix2d());
      return Unit;
    };
  }
  function ScaleView$render$lambda_0(closure$ctx, closure$iwidth, closure$iheight, closure$m, this$ScaleView) {
    return function (renderTexture) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_2 = closure$ctx.batch;
      tmp$ = this$ScaleView.colorMul;
      tmp$_0 = this$ScaleView.colorAdd;
      tmp$_1 = this$ScaleView.filtering;
      tmp$_2.drawQuad_4rxj9x$(renderTexture, 0.0, 0.0, closure$iwidth, closure$iheight, closure$m, tmp$_1, tmp$, tmp$_0);
      closure$ctx.flush();
      return Unit;
    };
  }
  ScaleView.prototype.render_edjgwy$ = function (ctx, m) {
    var iwidth = numberToInt(this.width);
    var iheight = numberToInt(this.height);
    ctx.renderToTexture_fnloth$(iwidth, iheight, ScaleView$render$lambda(ctx, this), ScaleView$render$lambda_0(ctx, iwidth, iheight, m, this));
  };
  ScaleView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaleView',
    interfaces: [FixedSizeContainer]
  };
  function scaleView($receiver, width, height, scale, filtering) {
    if (scale === void 0)
      scale = 2.0;
    if (filtering === void 0)
      filtering = false;
    return new ScaleView($receiver, width, height, scale, filtering);
  }
  function SolidRect(views, width, height, color) {
    View.call(this, views);
    this.width_ffc1ss$_0 = width;
    this.height_a44ymb$_0 = height;
    this.colorMul = color;
    this.sLeft_0 = 0.0;
    this.sTop_0 = 0.0;
  }
  Object.defineProperty(SolidRect.prototype, 'width', {
    get: function () {
      return this.width_ffc1ss$_0;
    },
    set: function (width) {
      this.width_ffc1ss$_0 = width;
    }
  });
  Object.defineProperty(SolidRect.prototype, 'height', {
    get: function () {
      return this.height_a44ymb$_0;
    },
    set: function (height) {
      this.height_a44ymb$_0 = height;
    }
  });
  SolidRect.prototype.render_edjgwy$ = function (ctx, m) {
    if (!this.visible)
      return;
    ctx.batch.drawQuad_4rxj9x$(this.views.whiteTexture, 0.0, 0.0, this.width, this.height, m, false, color.RGBA.multiply_vux9f0$(this.colorMul, this.globalColorMul), this.globalColorAdd, this.computedBlendMode.factors);
  };
  SolidRect.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    out.setTo_6y0v78$(this.sLeft_0, this.sTop_0, this.width, this.height);
  };
  SolidRect.prototype.hitTestInternal_lu1900$ = function (x, y) {
    return this.checkGlobalBounds_15yvbs$(x, y, 0.0, 0.0, this.width, this.height) ? this : null;
  };
  SolidRect.prototype.createInstance = function () {
    return new SolidRect(this.views, this.width, this.height, this.colorMul);
  };
  SolidRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolidRect',
    interfaces: [View]
  };
  function IText() {
  }
  IText.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IText',
    interfaces: []
  };
  function IHtml() {
  }
  IHtml.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IHtml',
    interfaces: []
  };
  function Text(views) {
    View.call(this, views);
    this.textBounds = Rectangle_init(0, 0, 1024, 1024);
    this.tempRect_0 = new Rectangle();
    this._text = '';
    this._html = '';
    this.document = null;
    this._format_0 = new Html$Format();
    this.filtering = true;
    this.autoSize_wspygq$_0 = false;
    this.bgcolor = color.Colors.TRANSPARENT_BLACK;
  }
  Object.defineProperty(Text.prototype, 'autoSize', {
    get: function () {
      return this.autoSize_wspygq$_0;
    },
    set: function (value) {
      this.autoSize_wspygq$_0 = value;
      this.recalculateBoundsWhenRequired_0();
    }
  });
  Object.defineProperty(Text.prototype, 'format', {
    get: function () {
      return this._format_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      this._format_0 = value;
      if (!equals(value, (tmp$ = this.document) != null ? tmp$.defaultFormat : null)) {
        (tmp$_1 = (tmp$_0 = this.document) != null ? tmp$_0.defaultFormat : null) != null ? (tmp$_1.parent = value) : null;
      }
      this.recalculateBoundsWhenRequired_0();
    }
  });
  Text.prototype.recalculateBounds_0 = function () {
    this.views.fontRepository.getBounds_1y5lg$(this.text, this.format, this.textBounds);
  };
  Text.prototype.recalculateBoundsWhenRequired_0 = function () {
    if (this.autoSize)
      this.recalculateBounds_0();
  };
  Object.defineProperty(Text.prototype, 'text', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return this.document != null ? (tmp$_1 = (tmp$_0 = (tmp$ = this.document) != null ? tmp$.xml : null) != null ? tmp$_0.text : null) != null ? tmp$_1 : '' : this._text;
    },
    set: function (value) {
      this._text = value;
      this._html = '';
      this.document = null;
      this.recalculateBoundsWhenRequired_0();
    }
  });
  Object.defineProperty(Text.prototype, 'html', {
    get: function () {
      return this.document != null ? this._html : this._text;
    },
    set: function (value) {
      this.document = Html_getInstance().parse_61zpoe$(value);
      this.relayout();
      ensureNotNull(this.document).defaultFormat.parent = this.format;
      this._text = '';
      this._html = value;
      this._format_0 = ensureNotNull(this.document).firstFormat.consolidate();
    }
  });
  Text.prototype.relayout = function () {
    var tmp$;
    (tmp$ = this.document) != null ? (tmp$.doPositioning_90chdb$(this.views.fontRepository, this.textBounds), Unit) : null;
  };
  Text.prototype.render_edjgwy$ = function (ctx, m) {
    var tmp$;
    if (!this.visible)
      return;
    var colorMul = this.globalColorMul;
    var colorAdd = this.globalColorAdd;
    if (this.document != null) {
      tmp$ = ensureNotNull(this.document).allSpans.iterator();
      while (tmp$.hasNext()) {
        var span = tmp$.next();
        var font = this.views.fontRepository.getBitmapFont_ktnn5$(span.format);
        var format = span.format;
        font.drawText_v86ar4$(ctx.batch, format.computedSize, this.text, numberToInt(span.bounds.x), numberToInt(span.bounds.y), m, color.RGBA.multiply_vux9f0$(colorMul, format.computedColor), colorAdd, this.computedBlendMode, this.filtering);
      }
    }
     else {
      var font_0 = this.views.fontRepository.getBitmapFont_ktnn5$(this.format);
      var anchor = this.format.computedAlign.anchor;
      this.views.fontRepository.getBounds_1y5lg$(this.text, this.format, this.tempRect_0);
      var x = this.textBounds.x + (this.textBounds.width - this.tempRect_0.width) * anchor.sx;
      var y = this.textBounds.y + (this.textBounds.height - this.tempRect_0.height) * anchor.sy;
      if (color.RGBA.getA_za3lpa$(this.bgcolor) !== 0) {
        ctx.batch.drawQuad_4rxj9x$(this.views.whiteTexture, this.textBounds.x, this.textBounds.y, this.textBounds.width, this.textBounds.height, m, false, color.RGBA.multiply_vux9f0$(this.bgcolor, this.globalColorMul), colorAdd, this.computedBlendMode.factors);
      }
      font_0.drawText_v86ar4$(ctx.batch, this.format.computedSize, this.text, numberToInt(x), numberToInt(y), m, color.RGBA.multiply_vux9f0$(colorMul, this.format.computedColor), colorAdd, this.computedBlendMode, this.filtering);
    }
  };
  Text.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    if (this.document != null) {
      out.copyFrom_2da8yn$(ensureNotNull(this.document).bounds);
    }
     else {
      this.views.fontRepository.getBounds_1y5lg$(this.text, this.format, out);
      out.setToAnchoredRectangle_7qw0rf$(out, this.format.computedAlign.anchor, this.textBounds);
    }
  };
  Text.prototype.createInstance = function () {
    return new Text(this.views);
  };
  Text.prototype.copyPropsFrom_l5rad2$ = function (source) {
    var tmp$;
    View.prototype.copyPropsFrom_l5rad2$.call(this, source);
    Kotlin.isType(tmp$ = source, Text) ? tmp$ : throwCCE();
    this.textBounds.copyFrom_2da8yn$(source.textBounds);
    if (source._html.length > 0) {
      this.html = source.html;
    }
     else {
      this.text = source.text;
    }
  };
  Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [IHtml, IText, View]
  };
  function text($receiver, text, textSize, color_0, font) {
    if (textSize === void 0)
      textSize = 16.0;
    if (color_0 === void 0)
      color_0 = color.Colors.WHITE;
    if (font === void 0)
      font = $receiver.defaultFont;
    var $receiver_0 = new Text($receiver);
    $receiver_0.format = new Html$Format(void 0, color_0, new Html$FontFace$Bitmap(font), numberToInt(textSize));
    if (!equals(text, ''))
      $receiver_0.text = text;
    return $receiver_0;
  }
  function text_0($receiver, text_0, textSize, font) {
    if (textSize === void 0)
      textSize = 16.0;
    if (font === void 0)
      font = $receiver.views.defaultFont;
    var child = text($receiver.views, text_0, textSize, void 0, font);
    $receiver.plusAssign_l5rad2$(child);
    return child;
  }
  var text_1 = defineInlineFunction('korge-js.com.soywiz.korge.view.text_tq6xby$', wrapFunction(function () {
    var text = _.com.soywiz.korge.view.text_ae47yq$;
    return function ($receiver, text_0, textSize, font, callback) {
      if (textSize === void 0)
        textSize = 16.0;
      if (font === void 0)
        font = $receiver.views.defaultFont;
      var child = text($receiver.views, text_0, textSize, void 0, font);
      $receiver.plusAssign_l5rad2$(child);
      callback(child);
      return child;
    };
  }));
  function setText$lambda(closure$text) {
    return function (it) {
      if (Kotlin.isType(it, IText))
        it.text = closure$text;
      return Unit;
    };
  }
  function setText($receiver, text) {
    foreachDescendant($receiver, setText$lambda(text));
  }
  function setHtml$lambda(closure$html) {
    return function (it) {
      if (Kotlin.isType(it, IHtml))
        it.html = closure$html;
      return Unit;
    };
  }
  function setHtml($receiver, html) {
    foreachDescendant($receiver, setHtml$lambda(html));
  }
  function Updatable() {
  }
  Updatable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Updatable',
    interfaces: []
  };
  function CustomView(views, autoFlush) {
    if (autoFlush === void 0)
      autoFlush = true;
    View.call(this, views);
    this.autoFlush_ghd5vw$_0 = autoFlush;
  }
  Object.defineProperty(CustomView.prototype, 'autoFlush', {
    get: function () {
      return this.autoFlush_ghd5vw$_0;
    }
  });
  CustomView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CustomView',
    interfaces: [View]
  };
  function View(views) {
    View$Companion_getInstance();
    this.views = views;
    this.$delegate_l5rad2$_0 = new Extra$Mixin();
    this.$delegate_l5rad2$_1 = new EventDispatcher$Mixin();
    this.ratio_u2g8cn$_0 = 0.0;
    this.autoFlush_aurtoj$_0 = false;
    this.index_pzwnz4$_0 = 0;
    this.speed = 1.0;
    this.parent_kog7oo$_0 = null;
    this.name = null;
    var tmp$;
    var tmp$_0;
    tmp$_0 = this.views;
    tmp$ = tmp$_0.lastId;
    tmp$_0.lastId = tmp$ + 1 | 0;
    this.id = tmp$;
    this.blendMode_yq02qm$_0 = BlendMode$INHERIT_getInstance();
    this._computedBlendMode = BlendMode$INHERIT_getInstance();
    this._scaleX_lmzz6j$_0 = 1.0;
    this._scaleY_lmzz5o$_0 = 1.0;
    this._skewX_mc7zdf$_0 = 0.0;
    this._skewY_mc7zea$_0 = 0.0;
    this._rotation_rhtmt1$_0 = 0.0;
    this.pos = new Vector2();
    this._colorTransform_xtf156$_0 = new ColorTransform();
    this._globalColorTransform_haylp5$_0 = new ColorTransform();
    this._props_l13xo1$_0 = LinkedHashMap_init();
    this.mouseEnabled = true;
    this.enabled = true;
    this.visible = true;
    this._localMatrix_be57f9$_0 = new Matrix2d();
    this._globalMatrix = new Matrix2d();
    this._globalVersion_gauj5g$_0 = 0;
    this._globalMatrixInvVersion_66zpqg$_0 = 0;
    this._globalMatrixInv_b24upg$_0 = new Matrix2d();
    this.validLocalProps_8be2vx$ = true;
    this.validLocalMatrix_8be2vx$ = true;
    this.validGlobal_8be2vx$ = false;
    this.components_x3l1w4$_0 = null;
    this._componentsIt_q4o34e$_0 = null;
  }
  function View$Companion() {
    View$Companion_instance = this;
    this.tempTransform_0 = new Matrix2d$Transform();
  }
  View$Companion.prototype.commonAncestor_75c0h2$ = function (left, right) {
    var l = left;
    var r = right;
    var lCount = get_ancestorCount(l);
    var rCount = get_ancestorCount(r);
    while (lCount !== rCount) {
      if (lCount > rCount) {
        lCount = lCount - 1 | 0;
        l = l != null ? l.parent : null;
      }
       else {
        rCount = rCount - 1 | 0;
        r = r != null ? r.parent : null;
      }
      if (lCount < 0 && rCount < 0)
        break;
    }
    return equals(l, r) ? l : null;
  };
  View$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var View$Companion_instance = null;
  function View$Companion_getInstance() {
    if (View$Companion_instance === null) {
      new View$Companion();
    }
    return View$Companion_instance;
  }
  Object.defineProperty(View.prototype, 'coroutineContext', {
    get: function () {
      return this.views.coroutineContext;
    }
  });
  Object.defineProperty(View.prototype, 'ratio', {
    get: function () {
      return this.ratio_u2g8cn$_0;
    },
    set: function (ratio) {
      this.ratio_u2g8cn$_0 = ratio;
    }
  });
  Object.defineProperty(View.prototype, 'autoFlush', {
    get: function () {
      return this.autoFlush_aurtoj$_0;
    }
  });
  Object.defineProperty(View.prototype, 'index', {
    get: function () {
      return this.index_pzwnz4$_0;
    },
    set: function (index) {
      this.index_pzwnz4$_0 = index;
    }
  });
  Object.defineProperty(View.prototype, 'parent', {
    get: function () {
      return this.parent_kog7oo$_0;
    },
    set: function (parent) {
      this.parent_kog7oo$_0 = parent;
    }
  });
  Object.defineProperty(View.prototype, 'blendMode', {
    get: function () {
      return this.blendMode_yq02qm$_0;
    },
    set: function (value) {
      if (this.blendMode_yq02qm$_0 !== value) {
        this.blendMode_yq02qm$_0 = value;
        this.invalidate();
      }
    }
  });
  Object.defineProperty(View.prototype, 'computedBlendMode', {
    get: function () {
      this._ensureGlobal_sjfzhq$_0();
      return this._computedBlendMode;
    }
  });
  Object.defineProperty(View.prototype, 'x', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0().pos.x;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this.pos.x !== v) {
        this.pos.x = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'y', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0().pos.y;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this.pos.y !== v) {
        this.pos.y = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'scaleX', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._scaleX_lmzz6j$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._scaleX_lmzz6j$_0 !== v) {
        this._scaleX_lmzz6j$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'scaleY', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._scaleY_lmzz5o$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._scaleY_lmzz5o$_0 !== v) {
        this._scaleY_lmzz5o$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'skewX', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._skewX_mc7zdf$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._skewX_mc7zdf$_0 !== v) {
        this._skewX_mc7zdf$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'skewY', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._skewY_mc7zea$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._skewY_mc7zea$_0 !== v) {
        this._skewY_mc7zea$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'rotation', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._rotation_rhtmt1$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._rotation_rhtmt1$_0 !== v) {
        this._rotation_rhtmt1$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'rotationDegrees', {
    get: function () {
      return toDegrees(this.rotation);
    },
    set: function (v) {
      this.rotation = toRadians(v);
    }
  });
  Object.defineProperty(View.prototype, 'scale', {
    get: function () {
      return (this.scaleX + this.scaleY) / 2.0;
    },
    set: function (v) {
      this.scaleX = v;
      this.scaleY = v;
    }
  });
  Object.defineProperty(View.prototype, 'globalX', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.localToGlobalX_lu1900$(this.x, this.y) : null) != null ? tmp$_0 : this.x;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      this.x = (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.globalToLocalX_lu1900$(value, this.globalY) : null) != null ? tmp$_0 : value;
    }
  });
  Object.defineProperty(View.prototype, 'globalY', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.localToGlobalY_lu1900$(this.x, this.y) : null) != null ? tmp$_0 : this.y;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      this.y = (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.globalToLocalY_lu1900$(this.globalX, value) : null) != null ? tmp$_0 : value;
    }
  });
  View.prototype.setSize_lu1900$ = function (width, height) {
    this._setSize_ja0vym$_0(width, true, height, true);
  };
  View.prototype._setSize_ja0vym$_0 = function (width, swidth, height, sheight) {
    var bounds = this.getLocalBounds_2da8yn$();
    if (swidth)
      this.scaleX = width / bounds.width;
    if (sheight)
      this.scaleY = height / bounds.height;
  };
  Object.defineProperty(View.prototype, 'width', {
    get: function () {
      return this.getLocalBounds_2da8yn$().width * this.scaleX;
    },
    set: function (value) {
      this._setSize_ja0vym$_0(value, true, 0.0, false);
    }
  });
  Object.defineProperty(View.prototype, 'height', {
    get: function () {
      return this.getLocalBounds_2da8yn$().height * this.scaleY;
    },
    set: function (value) {
      this._setSize_ja0vym$_0(0.0, false, value, true);
    }
  });
  Object.defineProperty(View.prototype, 'colorMul', {
    get: function () {
      return this._colorTransform_xtf156$_0.colorMul;
    },
    set: function (v) {
      this._colorTransform_xtf156$_0.colorMul = v;
      this.invalidateColorTransform_9p0ntq$_0();
    }
  });
  Object.defineProperty(View.prototype, 'colorAdd', {
    get: function () {
      return this._colorTransform_xtf156$_0.colorAdd;
    },
    set: function (v) {
      this._colorTransform_xtf156$_0.colorAdd = v;
      this.invalidateColorTransform_9p0ntq$_0();
    }
  });
  Object.defineProperty(View.prototype, 'alpha', {
    get: function () {
      return this._colorTransform_xtf156$_0.mA;
    },
    set: function (v) {
      this._colorTransform_xtf156$_0.mA = v;
      this.invalidateColorTransform_9p0ntq$_0();
    }
  });
  Object.defineProperty(View.prototype, 'colorTransform', {
    get: function () {
      return this._colorTransform_xtf156$_0;
    },
    set: function (v) {
      this._colorTransform_xtf156$_0.copyFrom_54kf7e$(v);
      this.invalidateColorTransform_9p0ntq$_0();
    }
  });
  View.prototype.invalidateColorTransform_9p0ntq$_0 = function () {
    this.invalidate();
  };
  Object.defineProperty(View.prototype, 'props', {
    get: function () {
      return this._props_l13xo1$_0;
    }
  });
  View.prototype.hasProp_61zpoe$ = function (key) {
    var $receiver = this._props_l13xo1$_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key);
  };
  View.prototype.getPropString_puj7f4$ = function (key, default_0) {
    if (default_0 === void 0)
      default_0 = '';
    var tmp$;
    return (tmp$ = this._props_l13xo1$_0.get_11rb$(key)) != null ? tmp$ : default_0;
  };
  View.prototype.getPropInt_bm4lxs$ = function (key, default_0) {
    if (default_0 === void 0)
      default_0 = 0;
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this._props_l13xo1$_0.get_11rb$(key)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : default_0;
  };
  View.prototype.getPropDouble_io5o9c$ = function (key, default_0) {
    if (default_0 === void 0)
      default_0 = 0.0;
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this._props_l13xo1$_0.get_11rb$(key)) != null ? toDoubleOrNull(tmp$) : null) != null ? tmp$_0 : default_0;
  };
  View.prototype.addProp_puj7f4$ = function (key, value) {
    this._props_l13xo1$_0.put_xwzc9p$(key, value);
    var componentGen = this.views.propsTriggers.get_11rb$(key);
    if (componentGen != null) {
      componentGen(this, key, value);
    }
  };
  View.prototype.addProps_y0zsll$ = function (values) {
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var pair = tmp$.next();
      this.addProp_puj7f4$(pair.key, pair.value);
    }
  };
  View.prototype.ensureTransform_4sgqg4$_0 = function () {
    if (!this.validLocalProps_8be2vx$) {
      this.validLocalProps_8be2vx$ = true;
      var t = View$Companion_getInstance().tempTransform_0.setMatrix_7f5bc6$(this._localMatrix_be57f9$_0);
      this.pos.x = t.x;
      this.pos.y = t.y;
      this._scaleX_lmzz6j$_0 = t.scaleX;
      this._scaleY_lmzz5o$_0 = t.scaleY;
      this._skewX_mc7zdf$_0 = t.skewX;
      this._skewY_mc7zea$_0 = t.skewY;
      this._rotation_rhtmt1$_0 = t.rotation;
    }
    return this;
  };
  View.prototype.setXY_z8e4lc$ = defineInlineFunction('korge-js.com.soywiz.korge.view.View.setXY_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y) {
      this.x = numberToDouble(x);
      this.y = numberToDouble(y);
    };
  }));
  Object.defineProperty(View.prototype, 'root', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.root : null) != null ? tmp$_0 : this;
    }
  });
  View.prototype.setMatrix_yx07kl$ = function (matrix) {
    this._localMatrix_be57f9$_0.copyFrom_7f5bc6$(matrix);
    this.validLocalProps_8be2vx$ = false;
  };
  View.prototype.setMatrixInterpolated_whgrqo$ = function (ratio, l, r) {
    this._localMatrix_be57f9$_0.setToInterpolated_ehu1mq$(ratio, l, r);
    this.validLocalProps_8be2vx$ = false;
  };
  View.prototype.setComputedTransform_1w2bfe$ = function (transform) {
    var m = transform.matrix;
    var t = transform.transform;
    this._localMatrix_be57f9$_0.copyFrom_7f5bc6$(m);
    this.pos.x = t.x;
    this.pos.y = t.y;
    this._scaleX_lmzz6j$_0 = t.scaleX;
    this._scaleY_lmzz5o$_0 = t.scaleY;
    this._skewX_mc7zdf$_0 = t.skewY;
    this._skewY_mc7zea$_0 = t.skewY;
    this._rotation_rhtmt1$_0 = t.rotation;
    this.validLocalProps_8be2vx$ = true;
    this.validLocalMatrix_8be2vx$ = true;
    this.invalidate();
  };
  Object.defineProperty(View.prototype, 'componentsIt_d5hgox$_0', {
    get: function () {
      if (this.components_x3l1w4$_0 != null) {
        if (this._componentsIt_q4o34e$_0 == null)
          this._componentsIt_q4o34e$_0 = ArrayList_init_0();
        ensureNotNull(this._componentsIt_q4o34e$_0).clear();
        ensureNotNull(this._componentsIt_q4o34e$_0).addAll_brywnq$(ensureNotNull(this.components_x3l1w4$_0));
      }
      return this._componentsIt_q4o34e$_0;
    }
  });
  View.prototype.getOrCreateComponent_sc4rae$ = defineInlineFunction('korge-js.com.soywiz.korge.view.View.getOrCreateComponent_sc4rae$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, gen) {
      return this.getOrCreateComponent_twnkl3$(getKClass(T_0), gen);
    };
  }));
  View.prototype.removeComponent_q5itx0$ = function (c) {
    var tmp$;
    (tmp$ = this.components_x3l1w4$_0) != null ? tmp$.remove_11rb$(c) : null;
  };
  function View$removeComponents$lambda$lambda(closure$c) {
    return function (it) {
      var tmp$;
      return (tmp$ = Kotlin.getKClassFromExpression(it)) != null ? tmp$.equals(closure$c) : null;
    };
  }
  View.prototype.removeComponents_796cw$ = function (c) {
    var tmp$;
    return (tmp$ = this.components_x3l1w4$_0) != null ? removeAll(tmp$, View$removeComponents$lambda$lambda(c)) : null;
  };
  View.prototype.removeAllComponents = function () {
    var tmp$;
    return (tmp$ = this.components_x3l1w4$_0) != null ? (tmp$.clear(), Unit) : null;
  };
  View.prototype.addComponent_q5itx0$ = function (c) {
    if (this.components_x3l1w4$_0 == null) {
      this.components_x3l1w4$_0 = ArrayList_init_0();
    }
    ensureNotNull(this.components_x3l1w4$_0).add_11rb$(c);
    c.update_za3lpa$(0);
  };
  function View$addUpdatable$ObjectLiteral(closure$updatable, this$View, view) {
    this.closure$updatable = closure$updatable;
    this.this$View = this$View;
    Component.call(this, view);
  }
  View$addUpdatable$ObjectLiteral.prototype.update_za3lpa$ = function (dtMs) {
    this.closure$updatable;
    this.closure$updatable(dtMs);
  };
  View$addUpdatable$ObjectLiteral.prototype.cancel_tcv7n7$$default = function (e) {
    this.this$View.removeComponent_q5itx0$(this);
  };
  View$addUpdatable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Cancellable, Component]
  };
  View.prototype.addUpdatable_b4k9x1$ = function (updatable) {
    var c = new View$addUpdatable$ObjectLiteral(updatable, this, this);
    this.addComponent_q5itx0$(c);
    return c;
  };
  View.prototype.getOrCreateComponent_twnkl3$ = function (clazz, gen) {
    var tmp$;
    if (this.components_x3l1w4$_0 == null) {
      this.components_x3l1w4$_0 = ArrayList_init_0();
    }
    var $receiver = ensureNotNull(this.components_x3l1w4$_0);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1;
        if ((tmp$_1 = Kotlin.getKClassFromExpression(element)) != null ? tmp$_1.equals(clazz) : null) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var component = firstOrNull$result;
    if (component == null) {
      component = gen(this);
      var $receiver_0 = ensureNotNull(this.components_x3l1w4$_0);
      var element_0 = component;
      $receiver_0.add_11rb$(element_0);
    }
    return Kotlin.isType(tmp$ = ensureNotNull(component), Component) ? tmp$ : throwCCE();
  };
  Object.defineProperty(View.prototype, 'localMatrix', {
    get: function () {
      if (this.validLocalMatrix_8be2vx$)
        return this._localMatrix_be57f9$_0;
      this.validLocalMatrix_8be2vx$ = true;
      this._localMatrix_be57f9$_0.setTransform_8f3r3e$(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY);
      return this._localMatrix_be57f9$_0;
    },
    set: function (value) {
      this.setMatrix_yx07kl$(value);
      this.invalidate();
    }
  });
  View.prototype._ensureGlobal_sjfzhq$_0 = function () {
    block$break: do {
      if (this.validGlobal_8be2vx$)
        break block$break;
      this.validGlobal_8be2vx$ = true;
      if (this.parent != null) {
        this._globalMatrix.multiply_mgxgbw$(this.localMatrix, ensureNotNull(this.parent).globalMatrix);
        this._globalColorTransform_haylp5$_0.setToConcat_k8ycrk$(this._colorTransform_xtf156$_0, ensureNotNull(this.parent).globalColorTransform);
        this._computedBlendMode = this.blendMode === BlendMode$INHERIT_getInstance() ? ensureNotNull(this.parent).computedBlendMode : this.blendMode;
      }
       else {
        this._globalMatrix.copyFrom_7f5bc6$(this.localMatrix);
        this._globalColorTransform_haylp5$_0.copyFrom_54kf7e$(this._colorTransform_xtf156$_0);
        this._computedBlendMode = this.blendMode === BlendMode$INHERIT_getInstance() ? BlendMode$NORMAL_getInstance() : this.blendMode;
      }
      this._globalVersion_gauj5g$_0 = this._globalVersion_gauj5g$_0 + 1 | 0;
    }
     while (false);
    return this;
  };
  Object.defineProperty(View.prototype, 'globalMatrix', {
    get: function () {
      return this._ensureGlobal_sjfzhq$_0()._globalMatrix;
    },
    set: function (value) {
      if (this.parent != null) {
        this.localMatrix.multiply_mgxgbw$(value, ensureNotNull(this.parent).globalMatrixInv);
      }
       else {
        this.localMatrix.copyFrom_7f5bc6$(value);
      }
    }
  });
  Object.defineProperty(View.prototype, 'globalColorTransform', {
    get: function () {
      this._ensureGlobal_sjfzhq$_0();
      return this._globalColorTransform_haylp5$_0;
    }
  });
  Object.defineProperty(View.prototype, 'globalColorMul', {
    get: function () {
      return this.globalColorTransform.colorMul;
    }
  });
  Object.defineProperty(View.prototype, 'globalColorAdd', {
    get: function () {
      return this.globalColorTransform.colorAdd;
    }
  });
  Object.defineProperty(View.prototype, 'globalAlpha', {
    get: function () {
      return this.globalColorTransform.mA;
    }
  });
  Object.defineProperty(View.prototype, 'localMouseX', {
    get: function () {
      var p = this.views.input.mouse;
      return this.globalMatrixInv.transformX_lu1900$(p.x, p.y);
    }
  });
  Object.defineProperty(View.prototype, 'localMouseY', {
    get: function () {
      var p = this.views.input.mouse;
      return this.globalMatrixInv.transformY_lu1900$(p.x, p.y);
    }
  });
  Object.defineProperty(View.prototype, 'globalMatrixInv', {
    get: function () {
      this._ensureGlobal_sjfzhq$_0();
      if (this._globalMatrixInvVersion_66zpqg$_0 !== this._globalVersion_gauj5g$_0) {
        this._globalMatrixInvVersion_66zpqg$_0 = this._globalVersion_gauj5g$_0;
        this._globalMatrixInv_b24upg$_0.setToInverse_7f5bc6$(this._globalMatrix);
      }
      return this._globalMatrixInv_b24upg$_0;
    }
  });
  View.prototype.invalidateMatrix = function () {
    this.validLocalMatrix_8be2vx$ = false;
    this.invalidate();
  };
  View.prototype.invalidate = function () {
    this.validGlobal_8be2vx$ = false;
  };
  View.prototype.render_8isv09$ = function (ctx) {
    if (this.autoFlush)
      ctx.flush();
    this.render_edjgwy$(ctx, this.globalMatrix);
  };
  View.prototype.render_edjgwy$ = function (ctx, m) {
  };
  View.prototype.toString = function () {
    var out = get_portableSimpleName(Kotlin.getKClassFromExpression(this)) + '(' + this.id + ')';
    if (this.x !== 0.0 || this.y !== 0.0)
      out += ':pos=(' + this.x + ',' + this.y + ')';
    if (this.scaleX !== 1.0 || this.scaleY !== 1.0)
      out += ':scale=(' + this.scaleX + ',' + this.scaleY + ')';
    if (this.skewX !== 0.0 || this.skewY !== 0.0)
      out += ':skew=(' + this.skewX + ',' + this.skewY + ')';
    if (this.rotation !== 0.0)
      out += ':rotation=(' + this.rotationDegrees + '\xBA)';
    if (this.name != null)
      out += ':name=(' + toString(this.name) + ')';
    if (this.blendMode !== BlendMode$INHERIT_getInstance())
      out += ':blendMode=(' + this.blendMode + ')';
    return out;
  };
  View.prototype.globalToLocalX_lu1900$ = function (x, y) {
    return this.globalMatrixInv.transformX_lu1900$(x, y);
  };
  View.prototype.globalToLocalY_lu1900$ = function (x, y) {
    return this.globalMatrixInv.transformY_lu1900$(x, y);
  };
  View.prototype.localToGlobalX_lu1900$ = function (x, y) {
    return this.globalMatrix.transformX_lu1900$(x, y);
  };
  View.prototype.localToGlobalY_lu1900$ = function (x, y) {
    return this.globalMatrix.transformY_lu1900$(x, y);
  };
  View.prototype.globalToLocal_g6xq6k$ = function (p, out) {
    if (out === void 0)
      out = new Vector2();
    return this.globalMatrixInv.transform_yk7jef$(p.x, p.y, out);
  };
  View.prototype.localToGlobal_g6xq6k$ = function (p, out) {
    if (out === void 0)
      out = new Vector2();
    return this.globalMatrix.transform_yk7jef$(p.x, p.y, out);
  };
  function View$HitTestType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function View$HitTestType_initFields() {
    View$HitTestType_initFields = function () {
    };
    View$HitTestType$BOUNDING_instance = new View$HitTestType('BOUNDING', 0);
    View$HitTestType$SHAPE_instance = new View$HitTestType('SHAPE', 1);
  }
  var View$HitTestType$BOUNDING_instance;
  function View$HitTestType$BOUNDING_getInstance() {
    View$HitTestType_initFields();
    return View$HitTestType$BOUNDING_instance;
  }
  var View$HitTestType$SHAPE_instance;
  function View$HitTestType$SHAPE_getInstance() {
    View$HitTestType_initFields();
    return View$HitTestType$SHAPE_instance;
  }
  View$HitTestType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HitTestType',
    interfaces: [Enum]
  };
  function View$HitTestType$values() {
    return [View$HitTestType$BOUNDING_getInstance(), View$HitTestType$SHAPE_getInstance()];
  }
  View$HitTestType.values = View$HitTestType$values;
  function View$HitTestType$valueOf(name) {
    switch (name) {
      case 'BOUNDING':
        return View$HitTestType$BOUNDING_getInstance();
      case 'SHAPE':
        return View$HitTestType$SHAPE_getInstance();
      default:throwISE('No enum constant com.soywiz.korge.view.View.HitTestType.' + name);
    }
  }
  View$HitTestType.valueOf_61zpoe$ = View$HitTestType$valueOf;
  View.prototype.hitTest_fjnra5$ = function (x, y, type) {
    if (equals(type, View$HitTestType$SHAPE_getInstance()))
      return this.hitTest_lu1900$(x, y);
    else if (equals(type, View$HitTestType$BOUNDING_getInstance()))
      return this.hitTestBounding_lu1900$(x, y);
    else
      return Kotlin.noWhenBranchMatched();
  };
  View.prototype.hitTest_r62tv1$ = function (pos) {
    return this.hitTest_lu1900$(pos.x, pos.y);
  };
  View.prototype.hitTest_lu1900$ = function (x, y) {
    if (!this.mouseEnabled)
      return null;
    return this.hitTestInternal_lu1900$(x, y);
  };
  View.prototype.hitTestBounding_lu1900$ = function (x, y) {
    if (!this.mouseEnabled)
      return null;
    return this.hitTestBoundingInternal_lu1900$(x, y);
  };
  View.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var bounds = this.getLocalBounds_2da8yn$();
    var sLeft = bounds.left;
    var sTop = bounds.top;
    var sRight = bounds.right;
    var sBottom = bounds.bottom;
    return this.checkGlobalBounds_15yvbs$(x, y, sLeft, sTop, sRight, sBottom) ? this : null;
  };
  View.prototype.hitTestBoundingInternal_lu1900$ = function (x, y) {
    var bounds = this.getGlobalBounds_2da8yn$();
    return bounds.contains_lu1900$(x, y) ? this : null;
  };
  View.prototype.checkGlobalBounds_15yvbs$ = function (x, y, sLeft, sTop, sRight, sBottom) {
    var lx = this.globalToLocalX_lu1900$(x, y);
    var ly = this.globalToLocalY_lu1900$(x, y);
    return lx >= sLeft && ly >= sTop && lx < sRight && ly < sBottom;
  };
  View.prototype.reset = function () {
    this._localMatrix_be57f9$_0.setToIdentity();
    this.pos.setTo_lu1900$(0.0, 0.0);
    this._scaleX_lmzz6j$_0 = 1.0;
    this._scaleY_lmzz5o$_0 = 1.0;
    this._skewX_mc7zdf$_0 = 0.0;
    this._skewY_mc7zea$_0 = 0.0;
    this._rotation_rhtmt1$_0 = 0.0;
    this.validLocalMatrix_8be2vx$ = false;
    this.validGlobal_8be2vx$ = false;
    this.invalidate();
  };
  View.prototype.update_za3lpa$ = function (dtMs) {
    var tmp$;
    var actualDtMs = numberToInt(dtMs * this.speed);
    if (this.componentsIt_d5hgox$_0 != null) {
      tmp$ = ensureNotNull(this.componentsIt_d5hgox$_0).iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        c.update_za3lpa$(actualDtMs);
      }
    }
    this.updateInternal_za3lpa$(actualDtMs);
  };
  View.prototype.updateInternal_za3lpa$ = function (dtMs) {
  };
  View.prototype.removeFromParent = function () {
    var tmp$, tmp$_0;
    if (this.parent == null)
      return;
    var p = ensureNotNull(this.parent);
    tmp$ = this.index + 1 | 0;
    tmp$_0 = p.children.size;
    for (var i = tmp$; i < tmp$_0; i++) {
      var tmp$_1;
      tmp$_1 = p.children.get_za3lpa$(i);
      tmp$_1.index = tmp$_1.index - 1 | 0;
    }
    p.children.removeAt_za3lpa$(this.index);
    this.parent = null;
    this.index = -1;
  };
  View.prototype.getConcatMatrix_y6lqhr$ = function (target, out) {
    if (out === void 0)
      out = new Matrix2d();
    var current = this;
    out.setToIdentity();
    while (current != null) {
      out.multiply_mgxgbw$(out, current.localMatrix);
      if (equals(current, target))
        break;
      current = current.parent;
    }
    return out;
  };
  Object.defineProperty(View.prototype, 'globalBounds', {
    get: function () {
      return this.getGlobalBounds_2da8yn$();
    }
  });
  View.prototype.getGlobalBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = new Rectangle();
    return this.getBounds_tvgmbo$(this.root, out);
  };
  View.prototype.getBounds_tvgmbo$ = function (target, out) {
    if (target === void 0)
      target = this;
    if (out === void 0)
      out = new Rectangle();
    var concat = this.getConcatMatrix_y6lqhr$(target != null ? target : this);
    var bb = new BoundsBuilder();
    this.getLocalBoundsInternal_2da8yn$(out);
    var p1 = new Vector2(out.left, out.top);
    var p2 = new Vector2(out.right, out.top);
    var p3 = new Vector2(out.right, out.bottom);
    var p4 = new Vector2(out.left, out.bottom);
    bb.add_lu1900$(concat.transformX_lu1900$(p1.x, p1.y), concat.transformY_lu1900$(p1.x, p1.y));
    bb.add_lu1900$(concat.transformX_lu1900$(p2.x, p2.y), concat.transformY_lu1900$(p2.x, p2.y));
    bb.add_lu1900$(concat.transformX_lu1900$(p3.x, p3.y), concat.transformY_lu1900$(p3.x, p3.y));
    bb.add_lu1900$(concat.transformX_lu1900$(p4.x, p4.y), concat.transformY_lu1900$(p4.x, p4.y));
    bb.getBounds_2da8yn$(out);
    return out;
  };
  View.prototype.getLocalBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = new Rectangle();
    this.getLocalBoundsInternal_2da8yn$(out);
    return out;
  };
  View.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0));
  };
  View.prototype.getLocalBoundsInternal_2da8yn$ = function (out, callback$default) {
    if (out === void 0)
      out = new Rectangle();
    callback$default ? callback$default(out) : this.getLocalBoundsInternal_2da8yn$$default(out);
  };
  View.prototype.createInstance = function () {
    throw new MustOverrideException('Must Override ' + Kotlin.getKClassFromExpression(this) + '.createInstance()');
  };
  View.prototype.copyPropsFrom_l5rad2$ = function (source) {
    this.name = source.name;
    this.colorAdd = source.colorAdd;
    this.colorMul = source.colorMul;
    this.setMatrix_yx07kl$(source.localMatrix);
    this.visible = source.visible;
    this.ratio = source.ratio;
    this.speed = source.speed;
    this.blendMode = source.blendMode;
  };
  View.prototype.clone = function () {
    var $receiver = this.createInstance();
    $receiver.copyPropsFrom_l5rad2$(this);
    return $receiver;
  };
  Object.defineProperty(View.prototype, 'extra', {
    get: function () {
      return this.$delegate_l5rad2$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_l5rad2$_0.extra = tmp$;
    }
  });
  View.prototype.addEventListener_8bdrlz$ = function (clazz, handler) {
    return this.$delegate_l5rad2$_1.addEventListener_8bdrlz$(clazz, handler);
  };
  View.prototype.dispatch_gdt21f$$default = function (event, clazz) {
    return this.$delegate_l5rad2$_1.dispatch_gdt21f$$default(event, clazz);
  };
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: [CoroutineContextHolder, EventDispatcher, Extra, Updatable, Renderable]
  };
  function DummyView(views) {
    View.call(this, views);
  }
  DummyView.prototype.createInstance = function () {
    return new DummyView(this.views);
  };
  DummyView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyView',
    interfaces: [View]
  };
  function hasAncestor($receiver, ancestor) {
    var tmp$, tmp$_0;
    return equals($receiver, ancestor) ? true : (tmp$_0 = (tmp$ = $receiver.parent) != null ? hasAncestor(tmp$, ancestor) : null) != null ? tmp$_0 : false;
  }
  function replaceWith($receiver, view) {
    var tmp$, tmp$_0;
    if (equals($receiver, view))
      return false;
    if ($receiver.parent == null)
      return false;
    (tmp$_0 = (tmp$ = view.parent) != null ? tmp$.children : null) != null ? tmp$_0.remove_11rb$(view) : null;
    ensureNotNull($receiver.parent).children.set_wxm5ur$($receiver.index, view);
    view.index = $receiver.index;
    view.parent = $receiver.parent;
    $receiver.parent = null;
    view.invalidate();
    $receiver.index = -1;
    return true;
  }
  function get_ancestorCount($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = $receiver != null ? $receiver.parent : null) != null ? get_ancestorCount(tmp$) : null) != null ? tmp$_0 + 1 | 0 : null) != null ? tmp$_1 : 0;
  }
  function updateLoop$lambda(closure$done_0, closure$view_0, closure$step_0, closure$eventLoop_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$updateLoop$lambda(closure$done_0, closure$view_0, closure$step_0, closure$eventLoop_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$updateLoop$lambda(closure$done_0, closure$view_0, closure$step_0, closure$eventLoop_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$done = closure$done_0;
    this.local$closure$view = closure$view_0;
    this.local$closure$step = closure$step_0;
    this.local$closure$eventLoop = closure$eventLoop_0;
  }
  Coroutine$updateLoop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateLoop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateLoop$lambda.prototype.constructor = Coroutine$updateLoop$lambda;
  Coroutine$updateLoop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$closure$done.v) {
              this.state_0 = 4;
              continue;
            }

            this.local$closure$view.update_za3lpa$(this.local$closure$step);
            this.local$closure$eventLoop.step_za3lpa$(this.local$closure$step);
            this.state_0 = 3;
            this.result_0 = this.local$closure$eventLoop.sleep_za3lpa$(1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function updateLoop$lambda_0(closure$callback_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$updateLoop$lambda_0(closure$callback_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$updateLoop$lambda_0(closure$callback_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$updateLoop$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateLoop$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateLoop$lambda_0.prototype.constructor = Coroutine$updateLoop$lambda_0;
  Coroutine$updateLoop$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function updateLoop($receiver_0, eventLoop_0, step_0, callback_0, continuation_0, suspended) {
    var instance = new Coroutine$updateLoop($receiver_0, eventLoop_0, step_0, callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$updateLoop($receiver_0, eventLoop_0, step_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$done = void 0;
    this.local$$receiver = $receiver_0;
    this.local$eventLoop = eventLoop_0;
    this.local$step = step_0;
    this.local$callback = callback_0;
  }
  Coroutine$updateLoop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateLoop.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateLoop.prototype.constructor = Coroutine$updateLoop;
  Coroutine$updateLoop.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$step === void 0)
              this.local$step = 10;
            var view = this.local$$receiver;
            this.local$done = {v: false};
            this.state_0 = 1;
            this.result_0 = go(updateLoop$lambda(this.local$done, view, this.local$step, this.local$eventLoop), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.state_0 = 2;
            this.result_0 = go(updateLoop$lambda_0(this.local$callback), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 2:
            var p = this.result_0;
            this.exceptionState_0 = 5;
            this.state_0 = 3;
            this.result_0 = p.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.exceptionState_0 = 7;
            this.finallyPath_0 = [4];
            this.state_0 = 6;
            continue;
          case 4:
            return;
          case 5:
            this.finallyPath_0 = [7];
            this.state_0 = 6;
            continue;
          case 6:
            this.local$done.v = true;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 7:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 7)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ancestorsUpTo($receiver, target) {
    var current = $receiver;
    var out = ArrayList_init_0();
    while (current != null && !equals(current, target)) {
      var element = current;
      out.add_11rb$(element);
      current = current.parent;
    }
    return out;
  }
  function get_ancestors($receiver) {
    return ancestorsUpTo($receiver, null);
  }
  function Views(eventLoop, ag, injector, input, plugins) {
    this.eventLoop = eventLoop;
    this.ag = ag;
    this.injector = injector;
    this.input = input;
    this.plugins = plugins;
    this.$delegate_gohfjx$_0 = new Extra$Mixin();
    this.$delegate_gohfjx$_1 = new EventDispatcher$Mixin();
    this.coroutineContext_xgztce$_0 = this.eventLoop.coroutineContext;
    this.lastId = 0;
    this.renderContext = new RenderContext(this.ag);
    this.clearEachFrame = true;
    this.views = this;
    this.injector.mapInstance_b1ce0a$(getKClass(EventLoop), this.eventLoop);
    this.injector.mapInstance_b1ce0a$(getKClass(AG), this.ag);
    this.injector.mapInstance_b1ce0a$(getKClass(Views), this);
    this.injector.mapInstance_b1ce0a$(getKClass(SoundSystem), get_soundSystem(this));
    this.propsTriggers = HashMap_init();
    this.clampElapsedTimeTo = 100;
    this.virtualWidth_pbqlm6$_0 = 640;
    this.virtualHeight_54lv2f$_0 = 480;
    this.actualVirtualLeft_bfyrcp$_0 = 0;
    this.actualVirtualTop_dds7ip$_0 = 0;
    this.actualVirtualWidth_5oahts$_0 = 640;
    this.actualVirtualHeight_oyjd9j$_0 = 480;
    this.scaleMode = ScaleMode.Companion.SHOW_ALL;
    this.scaleAnchor = Anchor.Companion.MIDDLE_CENTER;
    this.resizedEvent_0 = new StageResizedEvent(0, 0);
    this.dummyView_pg6d4u$_0 = lazy(Views$dummyView$lambda(this));
    this.transparentTexture_kotlz4$_0 = lazy(Views$transparentTexture$lambda(this));
    this.whiteTexture_ib7gk7$_0 = lazy(Views$whiteTexture$lambda(this));
    this.transformedDummyTexture_87ztpv$_0 = lazy(Views$transformedDummyTexture$lambda(this));
    this.dummyFont_p7ho5w$_0 = lazy(Views$dummyFont$lambda(this));
    this.defaultFont_q140nv$_0 = lazy(Views$defaultFont$lambda(this));
    this.fontRepository = new FontRepository(this);
    this.stage = new Stage(this);
    this.debugViews = false;
    this.debugHandlers = ArrayList_init_0();
    this.virtualSize_0 = new SizeInt();
    this.actualSize_0 = new SizeInt();
    this.targetSize_0 = new SizeInt();
  }
  Object.defineProperty(Views.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_xgztce$_0;
    }
  });
  Views.prototype.registerPropertyTrigger_4kjtw1$ = function (propName, gen) {
    this.propsTriggers.put_xwzc9p$(propName, gen);
  };
  function Views$registerPropertyTriggerSuspend$lambda$lambda(closure$gen_0, closure$view_0, closure$key_0, closure$value_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda(closure$gen_0, closure$view_0, closure$key_0, closure$value_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda(closure$gen_0, closure$view_0, closure$key_0, closure$value_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$gen = closure$gen_0;
    this.local$closure$view = closure$view_0;
    this.local$closure$key = closure$key_0;
    this.local$closure$value = closure$value_0;
  }
  Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda.prototype.constructor = Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda;
  Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$gen(this.local$closure$view, this.local$closure$key, this.local$closure$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Views$registerPropertyTriggerSuspend$lambda(this$Views, closure$gen) {
    return function (view, key, value) {
      go_3(this$Views.eventLoop, Views$registerPropertyTriggerSuspend$lambda$lambda(closure$gen, view, key, value));
      return Unit;
    };
  }
  Views.prototype.registerPropertyTriggerSuspend_hkh80f$ = function (propName, gen) {
    this.propsTriggers.put_xwzc9p$(propName, Views$registerPropertyTriggerSuspend$lambda(this, gen));
  };
  Object.defineProperty(Views.prototype, 'nativeWidth', {
    get: function () {
      return this.ag.backWidth;
    }
  });
  Object.defineProperty(Views.prototype, 'nativeHeight', {
    get: function () {
      return this.ag.backHeight;
    }
  });
  Object.defineProperty(Views.prototype, 'virtualWidth', {
    get: function () {
      return this.virtualWidth_pbqlm6$_0;
    },
    set: function (virtualWidth) {
      this.virtualWidth_pbqlm6$_0 = virtualWidth;
    }
  });
  Object.defineProperty(Views.prototype, 'virtualHeight', {
    get: function () {
      return this.virtualHeight_54lv2f$_0;
    },
    set: function (virtualHeight) {
      this.virtualHeight_54lv2f$_0 = virtualHeight;
    }
  });
  Views.prototype.setVirtualSize_vux9f0$ = function (width, height) {
    this.virtualWidth = width;
    this.virtualHeight = height;
    this.resized();
  };
  Object.defineProperty(Views.prototype, 'actualVirtualLeft', {
    get: function () {
      return this.actualVirtualLeft_bfyrcp$_0;
    },
    set: function (actualVirtualLeft) {
      this.actualVirtualLeft_bfyrcp$_0 = actualVirtualLeft;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualTop', {
    get: function () {
      return this.actualVirtualTop_dds7ip$_0;
    },
    set: function (actualVirtualTop) {
      this.actualVirtualTop_dds7ip$_0 = actualVirtualTop;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualWidth', {
    get: function () {
      return this.actualVirtualWidth_5oahts$_0;
    },
    set: function (actualVirtualWidth) {
      this.actualVirtualWidth_5oahts$_0 = actualVirtualWidth;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualHeight', {
    get: function () {
      return this.actualVirtualHeight_oyjd9j$_0;
    },
    set: function (actualVirtualHeight) {
      this.actualVirtualHeight_oyjd9j$_0 = actualVirtualHeight;
    }
  });
  Object.defineProperty(Views.prototype, 'nativeMouseX', {
    get: function () {
      return this.input.mouse.x;
    }
  });
  Object.defineProperty(Views.prototype, 'nativeMouseY', {
    get: function () {
      return this.input.mouse.y;
    }
  });
  Views.prototype.init = function (continuation_0, suspended) {
    var instance = new Coroutine$init_1(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init_1($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
  }
  Coroutine$init_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_1.prototype.constructor = Coroutine$init_1;
  Coroutine$init_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.plugins.plugins.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var plugin = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = plugin.register_gohfjx$(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Views.prototype.dispatch_gdt21f$$default = function (event, clazz) {
    try {
      this.stage.dispatch_gdt21f$(event, clazz);
    }
     catch (e) {
      if (!Kotlin.isType(e, PreventDefaultException))
        throw e;
    }
  };
  Views.prototype.container = function () {
    return new Container(this);
  };
  Views.prototype.fixedSizeContainer_lu1900$ = function (width, height) {
    if (width === void 0)
      width = 100.0;
    if (height === void 0)
      height = 100.0;
    return new FixedSizeContainer(this, width, height);
  };
  Views.prototype.solidRect_1stjjm$ = defineInlineFunction('korge-js.com.soywiz.korge.view.Views.solidRect_1stjjm$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var SolidRect_init = _.com.soywiz.korge.view.SolidRect;
    return function (width, height, color) {
      return new SolidRect_init(this, numberToDouble(width), numberToDouble(height), color);
    };
  }));
  Object.defineProperty(Views.prototype, 'dummyView', {
    get: function () {
      var $receiver = this.dummyView_pg6d4u$_0;
      new PropertyMetadata('dummyView');
      return $receiver.value;
    }
  });
  Object.defineProperty(Views.prototype, 'transparentTexture', {
    get: function () {
      var $receiver = this.transparentTexture_kotlz4$_0;
      new PropertyMetadata('transparentTexture');
      return $receiver.value;
    }
  });
  Object.defineProperty(Views.prototype, 'whiteTexture', {
    get: function () {
      var $receiver = this.whiteTexture_ib7gk7$_0;
      new PropertyMetadata('whiteTexture');
      return $receiver.value;
    }
  });
  Object.defineProperty(Views.prototype, 'transformedDummyTexture', {
    get: function () {
      var $receiver = this.transformedDummyTexture_87ztpv$_0;
      new PropertyMetadata('transformedDummyTexture');
      return $receiver.value;
    }
  });
  Object.defineProperty(Views.prototype, 'dummyFont', {
    get: function () {
      var $receiver = this.dummyFont_p7ho5w$_0;
      new PropertyMetadata('dummyFont');
      return $receiver.value;
    }
  });
  Object.defineProperty(Views.prototype, 'defaultFont', {
    get: function () {
      var $receiver = this.defaultFont_q140nv$_0;
      new PropertyMetadata('defaultFont');
      return $receiver.value;
    }
  });
  Views.prototype.render_fzusl$ = function (clearColor, clear) {
    if (clearColor === void 0)
      clearColor = color.Colors.BLACK;
    if (clear === void 0)
      clear = true;
    var tmp$;
    if (clear)
      this.ag.clear_2lepo2$(clearColor, void 0, 0, true, void 0, true);
    this.stage.render_8isv09$(this.renderContext);
    if (this.debugViews) {
      tmp$ = this.debugHandlers.iterator();
      while (tmp$.hasNext()) {
        var debugHandler = tmp$.next();
        debugHandler(this);
      }
    }
    this.renderContext.flush();
    this.renderContext.finish();
  };
  Views.prototype.dump_ep0k5p$ = function (emit) {
    if (emit === void 0)
      emit = getCallableRef('println', function (message) {
        return println(message), Unit;
      });
    this.dumpView_62y3o7$(this.stage, emit);
  };
  Views.prototype.dumpView_62y3o7$ = function (view, emit, indent) {
    if (emit === void 0)
      emit = getCallableRef('println', function (message) {
        return println(message), Unit;
      });
    if (indent === void 0)
      indent = '';
    var tmp$;
    emit(indent + view);
    if (Kotlin.isType(view, Container)) {
      tmp$ = view.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        this.dumpView_62y3o7$(child, emit, indent + ' ');
      }
    }
  };
  Views.prototype.update_za3lpa$ = function (dtMs) {
    this.input.startFrame_za3lpa$(dtMs);
    this.stage.update_za3lpa$(dtMs);
    this.input.endFrame_za3lpa$(dtMs);
  };
  Views.prototype.mouseUpdated = function () {
  };
  Views.prototype.resized_vux9f0$ = function (width, height) {
    var actualWidth = width;
    var actualHeight = height;
    this.actualSize_0.setTo_vux9f0$(actualWidth, actualHeight);
    this.resized();
  };
  Views.prototype.resized = function () {
    var virtualWidth = this.virtualWidth;
    var virtualHeight = this.virtualHeight;
    var anchor = this.scaleAnchor;
    this.virtualSize_0.setTo_vux9f0$(virtualWidth, virtualHeight);
    this.scaleMode.invoke_n3lmo2$(this.virtualSize_0, this.actualSize_0, this.targetSize_0);
    var ratioX = this.targetSize_0.width / virtualWidth;
    var ratioY = this.targetSize_0.height / virtualHeight;
    this.actualVirtualWidth = numberToInt(this.actualSize_0.width / ratioX);
    this.actualVirtualHeight = numberToInt(this.actualSize_0.height / ratioY);
    this.stage.scaleX = ratioX;
    this.stage.scaleY = ratioY;
    this.stage.x = numberToInt((this.actualVirtualWidth - virtualWidth | 0) * anchor.sx * ratioX);
    this.stage.y = numberToInt((this.actualVirtualHeight - virtualHeight | 0) * anchor.sy * ratioY);
    this.actualVirtualLeft = -numberToInt(this.stage.x / ratioX);
    this.actualVirtualTop = -numberToInt(this.stage.y / ratioY);
    this.stage.dispatch_gdt21f$(this.resizedEvent_0.setSize_vux9f0$(this.actualSize_0.width, this.actualSize_0.height));
  };
  Views.prototype.animationFrameLoop_o14v8n$ = function (callback) {
    println('Views.animationFrameLoop.eventLoop: ' + this.eventLoop);
    return this.eventLoop.animationFrameLoop_o14v8n$(callback);
  };
  Views.prototype.dispose = function () {
    this.eventLoop.close();
    get_soundSystem(this).close();
  };
  Object.defineProperty(Views.prototype, 'extra', {
    get: function () {
      return this.$delegate_gohfjx$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_gohfjx$_0.extra = tmp$;
    }
  });
  Views.prototype.addEventListener_8bdrlz$ = function (clazz, handler) {
    return this.$delegate_gohfjx$_1.addEventListener_8bdrlz$(clazz, handler);
  };
  function Views$dummyView$lambda(this$Views) {
    return function () {
      return new View(this$Views);
    };
  }
  function Views$transparentTexture$lambda(this$Views) {
    return function () {
      return texture(this$Views, new Bitmap32(0, 0));
    };
  }
  function Views$whiteTexture$lambda(this$Views) {
    return function () {
      return texture(this$Views, new Bitmap32(1, 1, new Int32Array([color.Colors.WHITE])));
    };
  }
  function Views$transformedDummyTexture$lambda(this$Views) {
    return function () {
      return new TransformedTexture(this$Views.transparentTexture);
    };
  }
  function Views$dummyFont$lambda(this$Views) {
    return function () {
      return new BitmapFont(this$Views.ag, 16, IntMap_init(), IntMap_init());
    };
  }
  function Views$defaultFont$lambda(this$Views) {
    return function () {
      return convert(font.BitmapFontGenerator.generate_h6sd2a$('Arial', 16, font.BitmapFontGenerator.LATIN_ALL), this$Views.ag, true);
    };
  }
  Views.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Views',
    interfaces: [CoroutineContextHolder, EventDispatcher, Extra, Updatable, AsyncDependency]
  };
  function Stage(views) {
    Container.call(this, views);
  }
  Stage.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var x = this.views.actualVirtualLeft;
    var y = this.views.actualVirtualTop;
    var width = this.views.actualVirtualWidth;
    var height = this.views.actualVirtualHeight;
    out.setTo_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
  };
  Stage.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var tmp$;
    return (tmp$ = Container.prototype.hitTestInternal_lu1900$.call(this, x, y)) != null ? tmp$ : this;
  };
  Stage.prototype.hitTestBoundingInternal_lu1900$ = function (x, y) {
    var tmp$;
    return (tmp$ = Container.prototype.hitTestBoundingInternal_lu1900$.call(this, x, y)) != null ? tmp$ : this;
  };
  Stage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stage',
    interfaces: [Container]
  };
  function ViewsLog(eventLoop, injector, ag, input, plugins) {
    if (injector === void 0)
      injector = new AsyncInjector();
    if (ag === void 0)
      ag = new LogAG();
    if (input === void 0)
      input = new Input();
    if (plugins === void 0)
      plugins = defaultKorgePlugins;
    this.eventLoop = eventLoop;
    this.injector = injector;
    this.ag = ag;
    this.input = input;
    this.plugins = plugins;
    this.views = new Views(this.eventLoop, this.ag, this.injector, this.input, this.plugins);
  }
  ViewsLog.prototype.init = function (continuation_0, suspended) {
    var instance = new Coroutine$init_2(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init_2($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$init_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_2.prototype.constructor = Coroutine$init_2;
  Coroutine$init_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.views.init(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ViewsLog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewsLog',
    interfaces: [AsyncDependency]
  };
  var container = defineInlineFunction('korge-js.com.soywiz.korge.view.container_st8p7j$', wrapFunction(function () {
    return function ($receiver) {
      var child = $receiver.views.container();
      $receiver.plusAssign_l5rad2$(child);
      return child;
    };
  }));
  var container_0 = defineInlineFunction('korge-js.com.soywiz.korge.view.container_exzb34$', function ($receiver, callback) {
    var child = $receiver.views.container();
    $receiver.plusAssign_l5rad2$(child);
    callback(child);
    return child;
  });
  function texture($receiver, bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return new Texture(new Texture$Base($receiver.ag.createTexture_lg0pjf$(bmp, mipmaps), bmp.width, bmp.height));
  }
  function ViewsContainer() {
  }
  ViewsContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewsContainer',
    interfaces: []
  };
  function KorgeFileLoaderTester(name, tester) {
    this.name = name;
    this.tester = tester;
  }
  KorgeFileLoaderTester.prototype.invoke_1wg0ys$ = function (s, injector, continuation) {
    return this.tester(s, injector, continuation);
  };
  KorgeFileLoaderTester.prototype.toString = function () {
    return 'KorgeFileTester(' + '"' + this.name + '"' + ')';
  };
  KorgeFileLoaderTester.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeFileLoaderTester',
    interfaces: []
  };
  KorgeFileLoaderTester.prototype.component1 = function () {
    return this.name;
  };
  KorgeFileLoaderTester.prototype.component2 = function () {
    return this.tester;
  };
  KorgeFileLoaderTester.prototype.copy_n2pgj8$ = function (name, tester) {
    return new KorgeFileLoaderTester(name === void 0 ? this.name : name, tester === void 0 ? this.tester : tester);
  };
  KorgeFileLoaderTester.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.tester) | 0;
    return result;
  };
  KorgeFileLoaderTester.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.tester, other.tester)))));
  };
  function KorgeFileLoader(name, loader) {
    this.name = name;
    this.loader = loader;
  }
  KorgeFileLoader.prototype.toString = function () {
    return 'KorgeFileLoader(' + '"' + this.name + '"' + ')';
  };
  KorgeFileLoader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeFileLoader',
    interfaces: []
  };
  KorgeFileLoader.prototype.component1 = function () {
    return this.name;
  };
  KorgeFileLoader.prototype.component2 = function () {
    return this.loader;
  };
  KorgeFileLoader.prototype.copy_f3hydn$ = function (name, loader) {
    return new KorgeFileLoader(name === void 0 ? this.name : name, loader === void 0 ? this.loader : loader);
  };
  KorgeFileLoader.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.loader) | 0;
    return result;
  };
  KorgeFileLoader.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.loader, other.loader)))));
  };
  function StageResizedEvent(width, height) {
    this.width = width;
    this.height = height;
  }
  StageResizedEvent.prototype.setSize_vux9f0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  StageResizedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StageResizedEvent',
    interfaces: [Event]
  };
  StageResizedEvent.prototype.component1 = function () {
    return this.width;
  };
  StageResizedEvent.prototype.component2 = function () {
    return this.height;
  };
  StageResizedEvent.prototype.copy_vux9f0$ = function (width, height) {
    return new StageResizedEvent(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  StageResizedEvent.prototype.toString = function () {
    return 'StageResizedEvent(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  StageResizedEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  StageResizedEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function MouseEvent() {
  }
  MouseEvent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MouseEvent',
    interfaces: [Event]
  };
  function MouseClickEvent() {
  }
  MouseClickEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseClickEvent',
    interfaces: [MouseEvent]
  };
  function MouseUpEvent() {
  }
  MouseUpEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseUpEvent',
    interfaces: [MouseEvent]
  };
  function MouseDownEvent() {
  }
  MouseDownEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseDownEvent',
    interfaces: [MouseEvent]
  };
  function MouseMovedEvent() {
  }
  MouseMovedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseMovedEvent',
    interfaces: [MouseEvent]
  };
  function KeyEvent() {
  }
  KeyEvent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KeyEvent',
    interfaces: [Event]
  };
  function KeyDownEvent(keyCode) {
    if (keyCode === void 0)
      keyCode = 0;
    this.keyCode_jaa0ni$_0 = keyCode;
  }
  Object.defineProperty(KeyDownEvent.prototype, 'keyCode', {
    get: function () {
      return this.keyCode_jaa0ni$_0;
    },
    set: function (keyCode) {
      this.keyCode_jaa0ni$_0 = keyCode;
    }
  });
  KeyDownEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyDownEvent',
    interfaces: [KeyEvent]
  };
  function KeyUpEvent(keyCode) {
    if (keyCode === void 0)
      keyCode = 0;
    this.keyCode_ktm9d7$_0 = keyCode;
  }
  Object.defineProperty(KeyUpEvent.prototype, 'keyCode', {
    get: function () {
      return this.keyCode_ktm9d7$_0;
    },
    set: function (keyCode) {
      this.keyCode_ktm9d7$_0 = keyCode;
    }
  });
  KeyUpEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyUpEvent',
    interfaces: [KeyEvent]
  };
  function KeyTypedEvent(keyCode) {
    if (keyCode === void 0)
      keyCode = 0;
    this.keyCode_c8fwma$_0 = keyCode;
  }
  Object.defineProperty(KeyTypedEvent.prototype, 'keyCode', {
    get: function () {
      return this.keyCode_c8fwma$_0;
    },
    set: function (keyCode) {
      this.keyCode_c8fwma$_0 = keyCode;
    }
  });
  KeyTypedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyTypedEvent',
    interfaces: [KeyEvent]
  };
  function dump($receiver, emit) {
    if (emit === void 0)
      emit = getCallableRef('println', function (message) {
        return println(message), Unit;
      });
    if ($receiver != null)
      $receiver.views.dumpView_62y3o7$($receiver, emit);
  }
  function dumpToString$lambda(closure$out) {
    return function (it) {
      closure$out.add_11rb$(it);
      return Unit;
    };
  }
  function dumpToString($receiver) {
    if ($receiver == null)
      return '';
    var out = ArrayList_init_0();
    dump($receiver, dumpToString$lambda(out));
    return joinToString(out, '\n');
  }
  function foreachDescendant($receiver, handler) {
    var tmp$;
    if ($receiver != null) {
      handler($receiver);
      if (Kotlin.isType($receiver, Container)) {
        tmp$ = $receiver.children.iterator();
        while (tmp$.hasNext()) {
          var child = tmp$.next();
          foreachDescendant(child, handler);
        }
      }
    }
  }
  function descendantsWithProp$lambda(closure$value, closure$prop) {
    return function (it) {
      if (closure$value != null) {
        return equals(it.props.get_11rb$(closure$prop), closure$value);
      }
       else {
        var $receiver = it.props;
        var key = closure$prop;
        var tmp$;
        return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key);
      }
    };
  }
  function descendantsWithProp($receiver, prop, value) {
    if (value === void 0)
      value = null;
    if ($receiver == null) {
      return emptyList();
    }
    return descendantsWith($receiver, void 0, descendantsWithProp$lambda(value, prop));
  }
  function descendantsWithPropString($receiver, prop, value) {
    if (value === void 0)
      value = null;
    var $receiver_0 = descendantsWithProp($receiver, prop, value);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, item.getPropString_puj7f4$(prop)));
    }
    return destination;
  }
  function descendantsWithPropInt($receiver, prop, value) {
    if (value === void 0)
      value = null;
    var $receiver_0 = descendantsWithProp($receiver, prop, value != null ? toString(value) : null);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, item.getPropInt_bm4lxs$(prop)));
    }
    return destination;
  }
  function descendantsWithPropDouble($receiver, prop, value) {
    if (value === void 0)
      value = null;
    var $receiver_0 = descendantsWithProp($receiver, prop, value != null ? toString(value) : null);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, item.getPropInt_bm4lxs$(prop)));
    }
    return destination;
  }
  function get$lambda(closure$name) {
    return function (it) {
      return equals(it.name, closure$name);
    };
  }
  function get_6($receiver, name) {
    return firstDescendantWith($receiver, get$lambda(name));
  }
  function firstDescendantWithName($receiver, name) {
    return get_6($receiver, name);
  }
  function get_allDescendantNames$lambda(closure$out) {
    return function (it) {
      if (it.name != null) {
        var $receiver = closure$out;
        var element = ensureNotNull(it.name);
        $receiver.add_11rb$(element);
      }
      return Unit;
    };
  }
  function get_allDescendantNames($receiver) {
    var out = ArrayList_init_0();
    foreachDescendant($receiver, get_allDescendantNames$lambda(out));
    return out;
  }
  function firstDescendantWith($receiver, check) {
    var tmp$;
    if ($receiver == null)
      return null;
    if (check($receiver))
      return $receiver;
    if (Kotlin.isType($receiver, Container)) {
      tmp$ = $receiver.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        var res = firstDescendantWith(child, check);
        if (res != null)
          return res;
      }
    }
    return null;
  }
  function descendantsWith($receiver, out, check) {
    if (out === void 0) {
      out = ArrayList_init_0();
    }
    var tmp$;
    if ($receiver != null) {
      if (check($receiver)) {
        out.add_11rb$($receiver);
      }
      if (Kotlin.isType($receiver, Container)) {
        tmp$ = $receiver.children.iterator();
        while (tmp$.hasNext()) {
          var child = tmp$.next();
          descendantsWith(child, out, check);
        }
      }
    }
    return out;
  }
  function TileMap(map, tileset, views) {
    View.call(this, views);
    this.map = map;
    this.tileset = tileset;
    this.tileWidth = this.tileset.width;
    this.tileHeight = this.tileset.height;
    this.smoothing = true;
  }
  TileMap.prototype.render_edjgwy$ = function (ctx, m) {
    if (!this.visible)
      return;
    var batch = ctx.batch;
    var pos = m.transform_yk7jef$(0.0, 0.0);
    var dU = m.transform_yk7jef$(this.tileWidth, 0.0).minus_yyv1mw$(pos);
    var dV = m.transform_yk7jef$(0.0, this.tileHeight).minus_yyv1mw$(pos);
    var colorMul = this.globalColorMul;
    var colorAdd = this.globalColorAdd;
    batch.setStateFast_2cvl8y$(this.tileset.base, this.smoothing, this.computedBlendMode.factors);
    var $this = this.map;
    var tmp$, tmp$_0, tmp$_1;
    var n = 0;
    tmp$ = $this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = $this.width;
      for (var x = 0; x < tmp$_0; x++) {
        n = n + 1 | 0;
        callback$break: do {
          var tmp$_2;
          tmp$_2 = this.tileset.get_za3lpa$(this.map.get_vux9f0$(x, y));
          if (tmp$_2 == null) {
            break callback$break;
          }
          var tex = tmp$_2;
          var p0 = pos.plus_yyv1mw$(dU.times_14dthe$(x)).plus_yyv1mw$(dV.times_14dthe$(y));
          var p1 = p0.plus_yyv1mw$(dU);
          var p2 = p0.plus_yyv1mw$(dU).plus_yyv1mw$(dV);
          var p3 = p0.plus_yyv1mw$(dV);
          batch.drawQuadFast_o2d3sk$(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, tex, colorMul, colorAdd);
        }
         while (false);
      }
    }
    ctx.flush();
  };
  TileMap.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var width = this.tileWidth * this.map.width;
    var height = this.tileHeight * this.map.height;
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
  };
  TileMap.prototype.hitTestInternal_lu1900$ = function (x, y) {
    return this.checkGlobalBounds_15yvbs$(x, y, 0.0, 0.0, this.tileWidth * this.map.width, this.tileHeight * this.map.height) ? this : null;
  };
  TileMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileMap',
    interfaces: [View]
  };
  function tileMap($receiver, map, tileset) {
    return new TileMap(map, tileset, $receiver);
  }
  function tileMap_0($receiver, map, tileset) {
    var child = tileMap($receiver.views, map, tileset);
    $receiver.plusAssign_l5rad2$(child);
    return child;
  }
  var tileMap_1 = defineInlineFunction('korge-js.com.soywiz.korge.view.tiles.tileMap_7fsqxt$', wrapFunction(function () {
    var tileMap = _.com.soywiz.korge.view.tiles.tileMap_kzk7sr$;
    return function ($receiver, map, tileset, callback) {
      var child = tileMap($receiver.views, map, tileset);
      $receiver.plusAssign_l5rad2$(child);
      callback(child);
      return child;
    };
  }));
  var Collection = Kotlin.kotlin.collections.Collection;
  function TileSet(views, textures, width, height, base) {
    TileSet$Companion_getInstance();
    if (base === void 0)
      base = first_0(filterNotNull(textures)).base;
    this.views = views;
    this.textures = textures;
    this.width = width;
    this.height = height;
    this.base = base;
    var $receiver = this.textures;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element != null ? !equals(element.base, this.base) : false) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result) {
      throw new RuntimeException('All tiles in the set must have the same base texture');
    }
  }
  TileSet.prototype.get_za3lpa$ = function (index) {
    return getOrNull(this.textures, index);
  };
  function TileSet$Companion() {
    TileSet$Companion_instance = this;
  }
  TileSet$Companion.prototype.invoke_glnpzo$ = function (views, base, tileWidth, tileHeight, columns, totalTiles) {
    if (columns === void 0)
      columns = -1;
    if (totalTiles === void 0)
      totalTiles = -1;
    var out = ArrayList_init_0();
    var rows = base.height / tileHeight | 0;
    var actualColumns = columns < 0 ? base.width / tileWidth | 0 : columns;
    var actualTotalTiles = totalTiles < 0 ? Kotlin.imul(rows, actualColumns) : totalTiles;
    complete: for (var y = 0; y < rows; y++) {
      for (var x = 0; x < actualColumns; x++) {
        var element = base.slice_tjonv8$(Kotlin.imul(x, tileWidth), Kotlin.imul(y, tileHeight), tileWidth, tileHeight);
        out.add_11rb$(element);
        if (out.size >= actualTotalTiles)
          break complete;
      }
    }
    return new TileSet(views, out, tileWidth, tileHeight);
  };
  TileSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TileSet$Companion_instance = null;
  function TileSet$Companion_getInstance() {
    if (TileSet$Companion_instance === null) {
      new TileSet$Companion();
    }
    return TileSet$Companion_instance;
  }
  TileSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileSet',
    interfaces: []
  };
  function tileSet($receiver, textures, width, height, base) {
    if (base === void 0)
      base = first_0(filterNotNull(textures)).base;
    return new TileSet($receiver, textures, width, height, base);
  }
  function tileSet_0($receiver, textureMap) {
    var tmp$, tmp$_0;
    var views = $receiver;
    var maxKey = (tmp$ = max(textureMap.keys)) != null ? tmp$ : 0;
    var $receiver_0 = new IntRange(0, maxKey);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(textureMap.get_11rb$(item));
    }
    var textures = destination;
    var firstTexture = (tmp$_0 = first_0(textures)) != null ? tmp$_0 : views.transparentTexture;
    return new TileSet($receiver, textures, firstTexture.width, firstTexture.height, firstTexture.base);
  }
  function KorgeNative() {
    KorgeNative_instance = this;
  }
  KorgeNative.prototype.getClassSimpleName_xo1ogr$ = function (clazz) {
    var tmp$;
    return (tmp$ = clazz.simpleName) != null ? tmp$ : 'unknown';
  };
  KorgeNative.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KorgeNative',
    interfaces: []
  };
  var KorgeNative_instance = null;
  function KorgeNative_getInstance() {
    if (KorgeNative_instance === null) {
      new KorgeNative();
    }
    return KorgeNative_instance;
  }
  function NativeStorage() {
    NativeStorage_instance = this;
  }
  NativeStorage.prototype.set_puj7f4$ = function (key, value) {
    localStorage.setItem(key, value);
  };
  NativeStorage.prototype.getOrNull_61zpoe$ = function (key) {
    return localStorage.getItem(key);
  };
  NativeStorage.prototype.remove_61zpoe$ = function (key) {
    localStorage.removeItem(key);
  };
  NativeStorage.prototype.removeAll = function () {
    localStorage.clear();
  };
  NativeStorage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NativeStorage',
    interfaces: [IStorage]
  };
  var NativeStorage_instance = null;
  function NativeStorage_getInstance() {
    if (NativeStorage_instance === null) {
      new NativeStorage();
    }
    return NativeStorage_instance;
  }
  $$importsForInline$$['korinject-js'] = $module$korinject_js;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  $$importsForInline$$['korge-js'] = _;
  Korge.prototype.Config = Korge$Config;
  $$importsForInline$$['klogger-js'] = $module$klogger_js;
  Korge.prototype.ModuleArgs = Korge$ModuleArgs;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korge = package$soywiz.korge || (package$soywiz.korge = {});
  Object.defineProperty(package$korge, 'Korge', {
    get: Korge_getInstance
  });
  Object.defineProperty(package$korge, 'KORGE_VERSION_8be2vx$', {
    get: function () {
      return KORGE_VERSION;
    }
  });
  var package$animate = package$korge.animate || (package$korge.animate = {});
  package$animate.AnElement = AnElement;
  package$animate.createDuplicated_vkl01n$ = createDuplicated;
  package$animate.createDuplicatedView_vkl01n$ = createDuplicatedView;
  package$animate.AnBaseShape = AnBaseShape;
  package$animate.AnShape = AnShape;
  package$animate.AnMorphShape = AnMorphShape;
  package$animate.AnEmptyView = AnEmptyView;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$animate.AnTextField = AnTextField;
  $$importsForInline$$['kds-js'] = $module$kds_js;
  package$animate.get_stencilIndex_jxline$ = get_stencilIndex;
  package$animate.set_stencilIndex_t8v26g$ = set_stencilIndex;
  package$animate.TimelineRunner = TimelineRunner;
  package$animate.AnPlayable = AnPlayable;
  package$animate.AnSimpleAnimation = AnSimpleAnimation;
  AnMovieClip$Companion.prototype.RenderState = AnMovieClip$Companion$RenderState;
  Object.defineProperty(AnMovieClip, 'Companion', {
    get: AnMovieClip$Companion_getInstance
  });
  package$animate.AnMovieClip = AnMovieClip;
  package$animate.play_4h3qbs$ = play;
  package$animate.playAndWaitStop_4h3qbs$ = playAndWaitStop;
  package$animate.playAndWaitEvent_3rvitr$ = playAndWaitEvent;
  package$animate.waitStop_jv7z46$ = waitStop;
  package$animate.waitEvent_z2n0m7$ = waitEvent;
  package$animate.get_playingName_jv7z46$ = get_playingName;
  package$animate.seekStill_3hzepi$ = seekStill;
  package$animate.AnSymbol = AnSymbol;
  Object.defineProperty(package$animate, 'AnSymbolEmpty', {
    get: AnSymbolEmpty_getInstance
  });
  package$animate.AnSymbolSound = AnSymbolSound;
  package$animate.AnTextFieldSymbol = AnTextFieldSymbol;
  package$animate.AnSymbolBaseShape = AnSymbolBaseShape;
  package$animate.AnSymbolShape = AnSymbolShape;
  package$animate.AnSymbolMorphShape = AnSymbolMorphShape;
  package$animate.AnSymbolBitmap = AnSymbolBitmap;
  package$animate.AnConstantPool = AnConstantPool;
  Object.defineProperty(AnSymbolTimelineFrame, 'Companion', {
    get: AnSymbolTimelineFrame$Companion_getInstance
  });
  package$animate.AnSymbolTimelineFrame = AnSymbolTimelineFrame;
  package$animate.AnAction = AnAction;
  package$animate.AnPlaySoundAction = AnPlaySoundAction;
  package$animate.AnEventAction = AnEventAction;
  package$animate.AnDepthTimeline = AnDepthTimeline;
  package$animate.AnSymbolLimits = AnSymbolLimits;
  package$animate.AnSymbolUidDef = AnSymbolUidDef;
  package$animate.AnSymbolMovieClipSubTimeline = AnSymbolMovieClipSubTimeline;
  package$animate.AnSymbolMovieClipState = AnSymbolMovieClipState;
  package$animate.AnSymbolMovieClip = AnSymbolMovieClip;
  package$animate.get_animateLibraryLoaders_jv80cy$ = get_animateLibraryLoaders;
  Object.defineProperty(package$animate, 'AnLibraryPlugin', {
    get: AnLibraryPlugin_getInstance
  });
  AnLibrary.Factory = AnLibrary$Factory;
  package$animate.AnLibrary = AnLibrary;
  Timed.RangeResult = Timed$RangeResult;
  Timed.Result = Timed$Result;
  package$animate.Timed = Timed;
  var package$serialization = package$animate.serialization || (package$animate.serialization = {});
  package$serialization.readAni_e3qfci$ = readAni;
  AnLibraryDeserializer.prototype.ExternalReaders = AnLibraryDeserializer$ExternalReaders;
  Object.defineProperty(package$serialization, 'AnLibraryDeserializer', {
    get: AnLibraryDeserializer_getInstance
  });
  package$serialization.writeTo_7jfeq7$ = writeTo;
  AnLibrarySerializer.prototype.ExternalWriters = AnLibrarySerializer$ExternalWriters;
  AnLibrarySerializer.prototype.Config = AnLibrarySerializer$Config;
  Object.defineProperty(package$serialization, 'AnLibrarySerializer', {
    get: AnLibrarySerializer_getInstance
  });
  Object.defineProperty(package$serialization, 'AniFile', {
    get: AniFile_getInstance
  });
  package$serialization.OptimizedStringAllocator = OptimizedStringAllocator;
  var package$atlas = package$korge.atlas || (package$korge.atlas = {});
  Object.defineProperty(package$atlas, 'AtlasPlugin', {
    get: AtlasPlugin_getInstance
  });
  Atlas.Factory = Atlas$Factory;
  package$atlas.Atlas = Atlas;
  package$atlas.readAtlas_7xp0ya$ = readAtlas;
  AtlasInfo.Rect = AtlasInfo$Rect;
  AtlasInfo.Size = AtlasInfo$Size;
  AtlasInfo.Meta = AtlasInfo$Meta;
  AtlasInfo.Entry = AtlasInfo$Entry;
  Object.defineProperty(AtlasInfo, 'Companion', {
    get: AtlasInfo$Companion_getInstance
  });
  AtlasInfo.Factory = AtlasInfo$Factory;
  package$atlas.AtlasInfo = AtlasInfo;
  var package$audio = package$korge.audio || (package$korge.audio = {});
  Object.defineProperty(package$audio, 'SoundPlugin', {
    get: SoundPlugin_getInstance
  });
  package$audio.SoundSystem = SoundSystem;
  package$audio.SoundChannel = SoundChannel;
  SoundFile.Factory = SoundFile$Factory;
  package$audio.SoundFile = SoundFile;
  package$audio.get_soundSystem_jv80cy$ = get_soundSystem;
  package$audio.readSoundFile_tknaih$ = readSoundFile;
  var package$bitmapfont = package$korge.bitmapfont || (package$korge.bitmapfont = {});
  Object.defineProperty(package$bitmapfont, 'BitmapFontPlugin', {
    get: BitmapFontPlugin_getInstance
  });
  Object.defineProperty(BitmapFont$Kerning, 'Companion', {
    get: BitmapFont$Kerning$Companion_getInstance
  });
  BitmapFont.Kerning = BitmapFont$Kerning;
  BitmapFont.Glyph = BitmapFont$Glyph;
  Object.defineProperty(BitmapFont, 'Companion', {
    get: BitmapFont$Companion_getInstance
  });
  package$bitmapfont.BitmapFont_init_fsmwxk$ = BitmapFont_init;
  package$bitmapfont.BitmapFont = BitmapFont;
  package$bitmapfont.drawText_7cja8a$ = drawText;
  package$bitmapfont.readBitmapFont_qusout$ = readBitmapFont;
  package$bitmapfont.toIntMap_hx7udi$ = toIntMap;
  package$bitmapfont.FontDescriptor = FontDescriptor;
  package$bitmapfont.BitmapFontAsyncFactory = BitmapFontAsyncFactory;
  package$bitmapfont.toKorge_bk9p7y$ = toKorge;
  package$bitmapfont.convert_gcgmrv$ = convert;
  var package$bus = package$korge.bus || (package$korge.bus = {});
  package$bus.Bus = Bus;
  package$bus.GlobalBus = GlobalBus;
  package$bus.BusHandler = BusHandler;
  var package$component = package$korge.component || (package$korge.component = {});
  package$component.Component = Component;
  var package$docking = package$component.docking || (package$component.docking = {});
  package$docking.DockingComponent = DockingComponent;
  package$docking.dockedTo_aze1gs$ = dockedTo;
  package$docking.JellyButton = JellyButton;
  package$docking.jellyButton_bnh9hk$ = jellyButton;
  package$docking.SortedChildrenByComponent = SortedChildrenByComponent;
  package$docking.keepChildrenSortedBy_q1v4n6$ = keepChildrenSortedBy;
  package$docking.keepChildrenSortedBy_wgyu3k$ = keepChildrenSortedBy_0;
  package$docking.keepChildrenSortedByY_8rk341$ = keepChildrenSortedByY;
  var package$list = package$component.list || (package$component.list = {});
  package$list.GridViewList = GridViewList;
  ViewList.ChangeEvent = ViewList$ChangeEvent;
  package$list.ViewList = ViewList;
  EventDispatcher.Mixin = EventDispatcher$Mixin;
  var package$event = package$korge.event || (package$korge.event = {});
  package$event.EventDispatcher = EventDispatcher;
  package$event.Event = Event;
  package$event.preventDefault_s8jyv4$ = preventDefault;
  package$event.PreventDefaultException = PreventDefaultException;
  Object.defineProperty(Html$Alignment, 'Companion', {
    get: Html$Alignment$Companion_getInstance
  });
  Html.prototype.Alignment = Html$Alignment;
  Html$FontFace.Named = Html$FontFace$Named;
  Html$FontFace.Bitmap = Html$FontFace$Bitmap;
  Html.prototype.FontFace = Html$FontFace;
  Html.prototype.Format = Html$Format;
  Object.defineProperty(Html$MetricsProvider, 'Identity', {
    get: Html$MetricsProvider$Identity_getInstance
  });
  Html.prototype.MetricsProvider = Html$MetricsProvider;
  Html.prototype.PositionContext = Html$PositionContext;
  Html.prototype.Span = Html$Span;
  Html.prototype.Line = Html$Line;
  Html.prototype.Paragraph = Html$Paragraph;
  Html.prototype.Document = Html$Document;
  Html.prototype.HtmlParser = Html$HtmlParser;
  var package$html = package$korge.html || (package$korge.html = {});
  Object.defineProperty(package$html, 'Html', {
    get: Html_getInstance
  });
  var package$i18n = package$korge.i18n || (package$korge.i18n = {});
  package$i18n.ConstantTextSource = ConstantTextSource;
  Object.defineProperty(Language, 'SPANISH', {
    get: Language$SPANISH_getInstance
  });
  Object.defineProperty(Language, 'ENGLISH', {
    get: Language$ENGLISH_getInstance
  });
  Object.defineProperty(Language, 'Companion', {
    get: Language$Companion_getInstance
  });
  package$i18n.Language = Language;
  package$i18n.TextContainer = TextContainer;
  package$i18n.TextSource = TextSource;
  package$i18n.toTextSource_pdl1vz$ = toTextSource;
  package$i18n.get_language_jv80cy$ = get_language;
  package$i18n.set_language_ladtpa$ = set_language;
  Object.defineProperty(Gestures$Direction, 'Companion', {
    get: Gestures$Direction$Companion_getInstance
  });
  Gestures.Direction_init_vux9f0$ = Gestures$Gestures$Direction_init;
  Gestures.Direction = Gestures$Direction;
  var package$input = package$korge.input || (package$korge.input = {});
  package$input.Gestures = Gestures;
  package$input.get_gestures_gohfi1$ = get_gestures;
  Object.defineProperty(Input, 'Companion', {
    get: Input$Companion_getInstance
  });
  package$input.Input = Input;
  Object.defineProperty(package$input, 'Keys', {
    get: Keys_getInstance
  });
  package$input.KeysComponent = KeysComponent;
  package$input.get_keys_gohfi1$ = get_keys;
  package$input.onKeyDown_uvtbp5$ = onKeyDown;
  package$input.onKeyUp_9q8s1e$ = onKeyUp;
  package$input.onKeyTyped_qqqumh$ = onKeyTyped;
  package$input.MouseComponent = MouseComponent;
  package$input.get_mouse_gohfi1$ = get_mouse;
  package$input.onClick_uqlhil$ = onClick;
  package$input.onOver_uqlhil$ = onOver;
  package$input.onOut_uqlhil$ = onOut;
  package$input.onDown_uqlhil$ = onDown;
  package$input.onUp_uqlhil$ = onUp;
  package$input.onUpOutside_uqlhil$ = onUpOutside;
  package$input.onUpAnywhere_uqlhil$ = onUpAnywhere;
  package$input.onMove_uqlhil$ = onMove;
  var package$lang = package$korge.lang || (package$korge.lang = {});
  package$lang.get_portableSimpleName_1yb8b7$ = get_portableSimpleName;
  var package$plugin = package$korge.plugin || (package$korge.plugin = {});
  package$plugin.KorgePlugin = KorgePlugin;
  Object.defineProperty(package$plugin, 'defaultKorgePlugins', {
    get: function () {
      return defaultKorgePlugins;
    }
  });
  package$plugin.KorgePlugins = KorgePlugins;
  $$importsForInline$$['korag-js'] = $module$korag_js;
  Object.defineProperty(BatchBuilder2D, 'Companion', {
    get: BatchBuilder2D$Companion_getInstance
  });
  var package$render = package$korge.render || (package$korge.render = {});
  package$render.BatchBuilder2D = BatchBuilder2D;
  package$render.ensurePowerOfTwo_leuab8$ = ensurePowerOfTwo;
  package$render.RenderContext = RenderContext;
  package$render.RenderContext2D = RenderContext2D;
  Object.defineProperty(Texture, 'Companion', {
    get: Texture$Companion_getInstance
  });
  Texture.Base = Texture$Base;
  package$render.Texture = Texture;
  package$render.readTexture_gvdxpx$ = readTexture;
  package$render.readTexture_a0cq0s$ = readTexture_0;
  package$render.TextureAsyncFactory = TextureAsyncFactory;
  package$render.TextureWithBitmapSlice = TextureWithBitmapSlice;
  package$render.TransformedTexture = TransformedTexture;
  var package$resources = package$korge.resources || (package$korge.resources = {});
  package$resources.Cached = Cached;
  package$resources.Path = Path;
  package$resources.VPath = VPath;
  package$resources.getPath_ufosyu$ = getPath;
  package$resources.ResourcesRoot = ResourcesRoot;
  var package$scene = package$korge.scene || (package$korge.scene = {});
  package$scene.Intent = Intent;
  package$scene.Module = Module;
  package$scene.Scene = Scene;
  package$scene.ScaledScene = ScaledScene;
  package$scene.EmptyScene = EmptyScene;
  package$scene.LogScene = LogScene;
  package$scene.sleep_hnjj7n$ = sleep;
  var package$time = package$korge.time || (package$korge.time = {});
  package$time.get_seconds_rcaex3$ = get_seconds;
  Object.defineProperty(SceneContainer, 'Companion', {
    get: SceneContainer$Companion_getInstance
  });
  package$scene.SceneContainer = SceneContainer;
  package$scene.sceneContainer_jv80cy$ = sceneContainer;
  package$scene.TransitionView = TransitionView;
  package$scene.Transition = Transition;
  package$scene.withEasing_g3uvmu$ = withEasing;
  Object.defineProperty(package$scene, 'AlphaTransition', {
    get: function () {
      return AlphaTransition;
    }
  });
  var package$service = package$korge.service || (package$korge.service = {});
  package$service.Achievements = Achievements;
  package$service.Ads = Ads;
  package$service.Analytics = Analytics;
  package$service.Browser = Browser;
  package$service.CloudSave = CloudSave;
  package$service.InAppPayments = InAppPayments;
  package$service.RateApp = RateApp;
  package$service.Share = Share;
  package$service.Store = Store;
  var package$storage = package$service.storage || (package$service.storage = {});
  package$storage.IStorage = IStorage;
  package$storage.contains_3mep8b$ = contains;
  package$storage.get_3mep8b$ = get_1;
  package$storage.InmemoryStorage = InmemoryStorage;
  package$storage.Storage = Storage;
  package$storage.StorageBase = StorageBase;
  package$storage.StorageItem = StorageItem;
  KorgeTest.DummyAG = KorgeTest$DummyAG;
  KorgeTest.DummyAGContainer = KorgeTest$DummyAGContainer;
  var package$tests = package$korge.tests || (package$korge.tests = {});
  package$tests.KorgeTest = KorgeTest;
  package$tests.ViewsForTesting = ViewsForTesting;
  Object.defineProperty(TimeSpan, 'Companion', {
    get: TimeSpan$Companion_getInstance
  });
  package$time.TimeSpan = TimeSpan;
  package$time.get_milliseconds_rcaex3$ = get_milliseconds;
  package$time.TimerComponents = TimerComponents;
  package$time.get_timers_gohfi1$ = get_timers;
  package$time.wait_7s4zx7$ = wait;
  package$time.wait_ic06u1$ = wait_0;
  package$time.waitFrame_gohfi1$ = waitFrame;
  package$time.sleep_7s4zx7$ = sleep_0;
  package$time.sleep_ic06u1$ = sleep_1;
  package$time.sleepFrame_gohfi1$ = sleepFrame;
  var package$tween = package$korge.tween || (package$korge.tween = {});
  Object.defineProperty(Easing, 'Companion', {
    get: Easing$Companion_getInstance
  });
  package$tween.Easing = Easing;
  Object.defineProperty(package$tween, 'Easings', {
    get: Easings_getInstance
  });
  package$tween.TweenComponent = TweenComponent;
  package$tween.tween_wrai67$ = tween;
  package$tween.V2_init_qypps$ = V2_init;
  package$tween.V2 = V2;
  package$tween.get_k1tobx$ = get_2;
  package$tween.get_75isb1$ = get_3;
  package$tween.get_1ml8v3$ = get_4;
  package$tween.get_8jpm3$ = get_5;
  package$tween.rangeTo_lzd8aq$ = rangeTo;
  package$tween.rangeTo_k1tobx$ = rangeTo_0;
  package$tween.rangeTo_vv5xzx$ = rangeTo_1;
  package$tween.rangeTo_2lgwlq$ = rangeTo_2;
  package$tween.withEasing_3705oi$ = withEasing_0;
  package$tween.color_6iy7so$ = color_0;
  package$tween.easing_3705oi$ = easing;
  package$tween.delay_mh6r8c$ = delay;
  package$tween.duration_mh6r8c$ = duration;
  package$tween.linear_2stsxw$ = linear;
  package$tween.easeIn_2stsxw$ = easeIn;
  package$tween.easeOut_2stsxw$ = easeOut;
  package$tween.easeInOut_2stsxw$ = easeInOut;
  package$tween.easeOutIn_2stsxw$ = easeOutIn;
  package$tween.easeInBack_2stsxw$ = easeInBack;
  package$tween.easeOutBack_2stsxw$ = easeOutBack;
  package$tween.easeInOutBack_2stsxw$ = easeInOutBack;
  package$tween.easeOutInBack_2stsxw$ = easeOutInBack;
  package$tween.easeInElastic_2stsxw$ = easeInElastic;
  package$tween.easeOutElastic_2stsxw$ = easeOutElastic;
  package$tween.easeInOutElastic_2stsxw$ = easeInOutElastic;
  package$tween.easeOutInElastic_2stsxw$ = easeOutInElastic;
  package$tween.easeInBounce_2stsxw$ = easeInBounce;
  package$tween.easeOutBounce_2stsxw$ = easeOutBounce;
  package$tween.easeInOutBounce_2stsxw$ = easeInOutBounce;
  package$tween.easeOutInBounce_2stsxw$ = easeOutInBounce;
  package$tween.easeInQuad_2stsxw$ = easeInQuad;
  package$tween.easeOutQuad_2stsxw$ = easeOutQuad;
  package$tween.easeInOutQuad_2stsxw$ = easeInOutQuad;
  package$tween.easeSine_2stsxw$ = easeSine;
  var package$util = package$korge.util || (package$korge.util = {});
  package$util.CancellableGroup = CancellableGroup;
  package$util.AutoClose_bzevgd$ = AutoClose;
  package$util.toBool2_5clz4$ = toBool2;
  Object.defineProperty(BlendMode, 'INHERIT', {
    get: BlendMode$INHERIT_getInstance
  });
  Object.defineProperty(BlendMode, 'NONE', {
    get: BlendMode$NONE_getInstance
  });
  Object.defineProperty(BlendMode, 'NORMAL', {
    get: BlendMode$NORMAL_getInstance
  });
  Object.defineProperty(BlendMode, 'ADD', {
    get: BlendMode$ADD_getInstance
  });
  Object.defineProperty(BlendMode, 'MULTIPLY', {
    get: BlendMode$MULTIPLY_getInstance
  });
  Object.defineProperty(BlendMode, 'SCREEN', {
    get: BlendMode$SCREEN_getInstance
  });
  Object.defineProperty(BlendMode, 'ERASE', {
    get: BlendMode$ERASE_getInstance
  });
  Object.defineProperty(BlendMode, 'MASK', {
    get: BlendMode$MASK_getInstance
  });
  Object.defineProperty(BlendMode, 'BELOW', {
    get: BlendMode$BELOW_getInstance
  });
  Object.defineProperty(BlendMode, 'SUBTRACT', {
    get: BlendMode$SUBTRACT_getInstance
  });
  Object.defineProperty(BlendMode, 'LIGHTEN', {
    get: BlendMode$LIGHTEN_getInstance
  });
  Object.defineProperty(BlendMode, 'DARKEN', {
    get: BlendMode$DARKEN_getInstance
  });
  Object.defineProperty(BlendMode, 'DIFFERENCE', {
    get: BlendMode$DIFFERENCE_getInstance
  });
  Object.defineProperty(BlendMode, 'INVERT', {
    get: BlendMode$INVERT_getInstance
  });
  Object.defineProperty(BlendMode, 'ALPHA', {
    get: BlendMode$ALPHA_getInstance
  });
  Object.defineProperty(BlendMode, 'HARDLIGHT', {
    get: BlendMode$HARDLIGHT_getInstance
  });
  Object.defineProperty(BlendMode, 'Companion', {
    get: BlendMode$Companion_getInstance
  });
  var package$view = package$korge.view || (package$korge.view = {});
  package$view.BlendMode = BlendMode;
  package$view.Camera = Camera;
  package$view.camera_jv80cy$ = camera;
  package$view.Container = Container;
  package$view.FixedSizeContainer = FixedSizeContainer;
  package$view.plusAssign_5hnngd$ = plusAssign;
  package$view.FontRepository = FontRepository;
  package$view.Image = Image;
  package$view.image_knk7mb$ = image;
  package$view.image_az5abk$ = image_0;
  package$view.image_jg5zjn$ = image_1;
  package$view.NinePatch = NinePatch;
  package$view.ninePatch_duwdyt$ = ninePatch;
  package$view.Renderable = Renderable;
  package$view.ScaleView = ScaleView;
  package$view.scaleView_dclp0l$ = scaleView;
  package$view.SolidRect = SolidRect;
  package$view.IText = IText;
  package$view.IHtml = IHtml;
  package$view.Text = Text;
  package$view.text_ae47yq$ = text;
  package$view.text_tlcohd$ = text_0;
  package$view.text_tq6xby$ = text_1;
  package$view.setText_4h3qbs$ = setText;
  package$view.setHtml_4h3qbs$ = setHtml;
  package$view.Updatable = Updatable;
  package$view.CustomView = CustomView;
  Object.defineProperty(View, 'Companion', {
    get: View$Companion_getInstance
  });
  Object.defineProperty(View$HitTestType, 'BOUNDING', {
    get: View$HitTestType$BOUNDING_getInstance
  });
  Object.defineProperty(View$HitTestType, 'SHAPE', {
    get: View$HitTestType$SHAPE_getInstance
  });
  View.HitTestType = View$HitTestType;
  package$view.View = View;
  package$view.DummyView = DummyView;
  package$view.hasAncestor_ow9aoh$ = hasAncestor;
  package$view.replaceWith_ow9aoh$ = replaceWith;
  package$view.get_ancestorCount_jv7z46$ = get_ancestorCount;
  package$view.updateLoop_6s762p$ = updateLoop;
  package$view.ancestorsUpTo_5hnngd$ = ancestorsUpTo;
  package$view.get_ancestors_jv7z46$ = get_ancestors;
  package$view.Views = Views;
  package$view.Stage = Stage;
  package$view.ViewsLog = ViewsLog;
  package$view.container_exzb34$ = container_0;
  package$view.container_st8p7j$ = container;
  package$view.texture_q2u7nr$ = texture;
  package$view.ViewsContainer = ViewsContainer;
  package$view.KorgeFileLoaderTester = KorgeFileLoaderTester;
  package$view.KorgeFileLoader = KorgeFileLoader;
  package$view.StageResizedEvent = StageResizedEvent;
  package$view.MouseEvent = MouseEvent;
  package$view.MouseClickEvent = MouseClickEvent;
  package$view.MouseUpEvent = MouseUpEvent;
  package$view.MouseDownEvent = MouseDownEvent;
  package$view.MouseMovedEvent = MouseMovedEvent;
  package$view.KeyEvent = KeyEvent;
  package$view.KeyDownEvent = KeyDownEvent;
  package$view.KeyUpEvent = KeyUpEvent;
  package$view.KeyTypedEvent = KeyTypedEvent;
  package$view.dump_n2ctrt$ = dump;
  package$view.dumpToString_jv7z46$ = dumpToString;
  package$view.foreachDescendant_1m112d$ = foreachDescendant;
  package$view.descendantsWithProp_s229vv$ = descendantsWithProp;
  package$view.descendantsWithPropString_s229vv$ = descendantsWithPropString;
  package$view.descendantsWithPropInt_obdzzd$ = descendantsWithPropInt;
  package$view.descendantsWithPropDouble_xkqg1h$ = descendantsWithPropDouble;
  package$view.get_4h3qbs$ = get_6;
  package$view.firstDescendantWithName_4h3qbs$ = firstDescendantWithName;
  package$view.get_allDescendantNames_jv7z46$ = get_allDescendantNames;
  package$view.firstDescendantWith_tm69th$ = firstDescendantWith;
  package$view.descendantsWith_yd6hk$ = descendantsWith;
  $$importsForInline$$['korim-js'] = $module$korim_js;
  var package$tiles = package$view.tiles || (package$view.tiles = {});
  package$tiles.TileMap = TileMap;
  package$tiles.tileMap_kzk7sr$ = tileMap;
  package$tiles.tileMap_wpcuns$ = tileMap_0;
  package$tiles.tileMap_7fsqxt$ = tileMap_1;
  Object.defineProperty(TileSet, 'Companion', {
    get: TileSet$Companion_getInstance
  });
  package$tiles.TileSet = TileSet;
  package$tiles.tileSet_51o1dj$ = tileSet;
  package$tiles.tileSet_k69sfv$ = tileSet_0;
  var package$native = package$korge.native || (package$korge.native = {});
  Object.defineProperty(package$native, 'KorgeNative', {
    get: KorgeNative_getInstance
  });
  Object.defineProperty(package$storage, 'NativeStorage', {
    get: NativeStorage_getInstance
  });
  View.prototype.dispatch_gdt21f$ = EventDispatcher.prototype.dispatch_gdt21f$;
  EventDispatcher$Mixin.prototype.dispatch_gdt21f$ = EventDispatcher.prototype.dispatch_gdt21f$;
  CancellableGroup.prototype.cancel_tcv7n7$ = Cancellable.prototype.cancel_tcv7n7$;
  View$addUpdatable$ObjectLiteral.prototype.cancel_tcv7n7$ = Cancellable.prototype.cancel_tcv7n7$;
  Views.prototype.dispatch_gdt21f$ = EventDispatcher.prototype.dispatch_gdt21f$;
  KORGE_VERSION = '0.19.2';
  stencilIndex = new Extra$Property(void 0, stencilIndex$lambda);
  animateLibraryLoaders = new Extra$Property(void 0, animateLibraryLoaders$lambda);
  soundSystem = new Extra$PropertyThis(void 0, soundSystem$lambda);
  extraLanguage = new Extra$Property(void 0, extraLanguage$lambda);
  keys = new Extra$PropertyThis(void 0, keys$lambda);
  mouse = new Extra$PropertyThis(void 0, mouse$lambda);
  var $receiver = new KorgePlugins();
  $receiver.register_8nuyex$([AtlasPlugin_getInstance(), BitmapFontPlugin_getInstance(), SoundPlugin_getInstance()]);
  defaultKorgePlugins = $receiver;
  AlphaTransition = new Transition(AlphaTransition$lambda);
  Kotlin.defineModule('korge-js', _);
  return _;
}));

//# sourceMappingURL=korge-js.js.map
