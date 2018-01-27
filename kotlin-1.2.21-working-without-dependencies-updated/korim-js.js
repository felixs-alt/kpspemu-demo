(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korma-js', 'korio-js', 'kds-js', 'kmem-js', 'klock-js', 'klogger-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korma-js'), require('korio-js'), require('kds-js'), require('kmem-js'), require('klock-js'), require('klogger-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korim-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['klock-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'klock-js' was not found. Please, check whether 'klock-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['klogger-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'klogger-js' was not found. Please, check whether 'klogger-js' is loaded prior to 'korim-js'.");
    }
    root['korim-js'] = factory(typeof this['korim-js'] === 'undefined' ? {} : this['korim-js'], kotlin, this['korma-js'], this['korio-js'], this['kds-js'], this['kmem-js'], this['klock-js'], this['klogger-js']);
  }
}(this, function (_, Kotlin, $module$korma_js, $module$korio_js, $module$kds_js, $module$kmem_js, $module$klock_js, $module$klogger_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var clamp = $module$korio_js.com.soywiz.korio.util.clamp_e4yvb3$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var Extra = $module$kds_js.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_js.com.soywiz.kds.Extra.Mixin;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Sizeable = $module$korma_js.com.soywiz.korma.geom.Sizeable;
  var throwCCE = Kotlin.throwCCE;
  var toShort = Kotlin.toShort;
  var arraycopy = $module$kmem_js.com.soywiz.kmem.arraycopy_lvhpry$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toByte = Kotlin.toByte;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var error = $module$korio_js.com.soywiz.korio.error;
  var RectangleInt_init = $module$korma_js.com.soywiz.korma.geom.RectangleInt_init_tjonv8$;
  var insert = $module$kmem_js.com.soywiz.kmem.insert_4684dr$;
  var arraycopy_0 = $module$kmem_js.com.soywiz.kmem.arraycopy_nlwz52$;
  var numberToInt = Kotlin.numberToInt;
  var toBoxedChar = Kotlin.toBoxedChar;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var UByteArray = $module$kmem_js.com.soywiz.kmem.UByteArray;
  var crypto = $module$korio_js.com.soywiz.korio.crypto;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var sum = Kotlin.kotlin.collections.sum_l63kqw$;
  var extractScaledFF = $module$kmem_js.com.soywiz.kmem.extractScaledFF_e4yvb3$;
  var extractScaledFFDefault = $module$kmem_js.com.soywiz.kmem.extractScaledFFDefault_4684dr$;
  var insertScaledFF = $module$kmem_js.com.soywiz.kmem.insertScaledFF_4684dr$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var readU16_le = $module$kmem_js.com.soywiz.kmem.readU16_le_mrm5p$;
  var getCallableRef = Kotlin.getCallableRef;
  var readU16_be = $module$kmem_js.com.soywiz.kmem.readU16_be_mrm5p$;
  var readU24_le = $module$kmem_js.com.soywiz.kmem.readU24_le_mrm5p$;
  var readU24_be = $module$kmem_js.com.soywiz.kmem.readU24_be_mrm5p$;
  var readS32_le = $module$kmem_js.com.soywiz.kmem.readS32_le_mrm5p$;
  var readS32_be = $module$kmem_js.com.soywiz.kmem.readS32_be_mrm5p$;
  var write16_le = $module$kmem_js.com.soywiz.kmem.write16_le_ietg8x$;
  var write16_be = $module$kmem_js.com.soywiz.kmem.write16_be_ietg8x$;
  var write24_le = $module$kmem_js.com.soywiz.kmem.write24_le_ietg8x$;
  var write24_be = $module$kmem_js.com.soywiz.kmem.write24_be_ietg8x$;
  var write32_le = $module$kmem_js.com.soywiz.kmem.write32_le_ietg8x$;
  var write32_be = $module$kmem_js.com.soywiz.kmem.write32_be_ietg8x$;
  var interpolate = $module$korma_js.com.soywiz.korma.interpolation.interpolate_nig4hr$;
  var interpolate_0 = $module$korma_js.com.soywiz.korma.interpolation.interpolate_i767ff$;
  var get_niceStr = $module$korma_js.com.soywiz.korma.numeric.get_niceStr_yrwdxr$;
  var MutableInterpolable = $module$korma_js.com.soywiz.korma.interpolation.MutableInterpolable;
  var Interpolable = $module$korma_js.com.soywiz.korma.interpolation.Interpolable;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var substr = $module$korio_js.com.soywiz.korio.util.substr_6ic1pp$;
  var substr_0 = $module$korio_js.com.soywiz.korio.util.substr_qgyqat$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var toString = Kotlin.toString;
  var format = $module$korio_js.com.soywiz.korio.lang.format_e33kwl$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var extract8 = $module$kmem_js.com.soywiz.kmem.extract8_dqglrj$;
  var get_niceStr_0 = $module$korio_js.com.soywiz.korio.util.get_niceStr_81szk$;
  var insert8 = $module$kmem_js.com.soywiz.kmem.insert8_e4yvb3$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var toChar = Kotlin.toChar;
  var sum_0 = Kotlin.kotlin.collections.sum_plj8ka$;
  var withIndex = Kotlin.kotlin.collections.withIndex_tmsbgo$;
  var String_fromIntArray = $module$korio_js.com.soywiz.korio.lang.String_fromIntArray_nd5v6f$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var throwUPAE = Kotlin.throwUPAE;
  var readS16_le = $module$korio_js.com.soywiz.korio.stream.readS16_le_p2awyq$;
  var slice = $module$korio_js.com.soywiz.korio.stream.slice_ucmi9i$;
  var readU16_be_0 = $module$korio_js.com.soywiz.korio.stream.readU16_be_p2awyq$;
  var readStringz = $module$korio_js.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var readS32_be_0 = $module$korio_js.com.soywiz.korio.stream.readS32_be_p2awyq$;
  var sliceWithSize = $module$korio_js.com.soywiz.korio.stream.sliceWithSize_acdave$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var sliceWithSize_0 = $module$korio_js.com.soywiz.korio.stream.sliceWithSize_1r8368$;
  var readAll = $module$korio_js.com.soywiz.korio.stream.readAll_ucmi9i$;
  var toString_0 = $module$korio_js.com.soywiz.korio.lang.toString_5kit73$;
  var readBytesExact = $module$korio_js.com.soywiz.korio.stream.readBytesExact_xpzb7k$;
  var FastByteArrayInputStream = $module$korio_js.com.soywiz.korio.stream.FastByteArrayInputStream;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_tmsbgo$;
  var toList = Kotlin.kotlin.collections.toList_tmsbgo$;
  var get_hex = $module$korio_js.com.soywiz.korio.util.get_hex_s8ev3n$;
  var readS64_be = $module$korio_js.com.soywiz.korio.stream.readS64_be_p2awyq$;
  var readS16_be = $module$korio_js.com.soywiz.korio.stream.readS16_be_p2awyq$;
  var DateTime = $module$klock_js.com.soywiz.klock.DateTime;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var sliceWithStart = $module$korio_js.com.soywiz.korio.stream.sliceWithStart_gezhyr$;
  var readCharArray_be = $module$korio_js.com.soywiz.korio.stream.readCharArray_be_xpzb7k$;
  var readShortArray_be = $module$korio_js.com.soywiz.korio.stream.readShortArray_be_xpzb7k$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_c03ot6$;
  var toUnsigned = $module$kmem_js.com.soywiz.kmem.toUnsigned_s8ev3n$;
  var equals = Kotlin.equals;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var readS8 = $module$korio_js.com.soywiz.korio.stream.readS8_p2awyq$;
  var readU8 = $module$korio_js.com.soywiz.korio.stream.readU8_p2awyq$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_tmsbgo$;
  var IntArrayList = $module$kds_js.com.soywiz.kds.IntArrayList;
  var copyOf = Kotlin.kotlin.collections.copyOf_c03ot6$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var readS32_le_0 = $module$korio_js.com.soywiz.korio.stream.readS32_le_p2awyq$;
  var readBytes = $module$korio_js.com.soywiz.korio.stream.readBytes_xpzb7k$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var readIntArray_le = $module$korio_js.com.soywiz.korio.stream.readIntArray_le_xpzb7k$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var readString = $module$korio_js.com.soywiz.korio.stream.readString_6ey4ts$;
  var readStream = $module$korio_js.com.soywiz.korio.stream.readStream_hsu5ns$;
  var openSync = $module$korio_js.com.soywiz.korio.stream.openSync_m1iwyb$;
  var Extra$Property = $module$kds_js.com.soywiz.kds.Extra.Property;
  var readU32_le = $module$kmem_js.com.soywiz.kmem.readU32_le_mrm5p$;
  var PathInfo = $module$korio_js.com.soywiz.korio.vfs.PathInfo;
  var readU8_0 = $module$kmem_js.com.soywiz.kmem.readU8_mrm5p$;
  var readU16_le_0 = $module$korio_js.com.soywiz.korio.stream.readU16_le_p2awyq$;
  var readU32_be = $module$korio_js.com.soywiz.korio.stream.readU32_be_p2awyq$;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var executeInWorker = $module$korio_js.com.soywiz.korio.async.executeInWorker_lnyleu$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var get_hexString = $module$korio_js.com.soywiz.korio.util.get_hexString_964n91$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var writeBytes = $module$korio_js.com.soywiz.korio.stream.writeBytes_o1e1if$;
  var toString_1 = $module$korio_js.com.soywiz.korio.util.toString_dqglrj$;
  var List = Kotlin.kotlin.collections.List;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var UByteArray_init = $module$kmem_js.com.soywiz.kmem.UByteArray_init_za3lpa$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var max = Kotlin.kotlin.collections.max_tmsbgo$;
  var ByteArrayBuilderSmall_init = $module$korio_js.com.soywiz.korio.stream.ByteArrayBuilderSmall_init_za3lpa$;
  var readAll_0 = $module$korio_js.com.soywiz.korio.stream.readAll_yjldv$;
  var getKClass = Kotlin.getKClass;
  var write32_be_0 = $module$korio_js.com.soywiz.korio.stream.write32_be_n5df9z$;
  var toByteArray = $module$korio_js.com.soywiz.korio.lang.toByteArray_7jlb4b$;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var convertRangeClamped = $module$korio_js.com.soywiz.korio.util.convertRangeClamped_legt9$;
  var write8 = $module$kmem_js.com.soywiz.kmem.write8_ietg8x$;
  var KorioNative = $module$korio_js.com.soywiz.korio.KorioNative;
  var write8_0 = $module$korio_js.com.soywiz.korio.stream.write8_n5df9z$;
  var ByteArrayBuilder = $module$korio_js.com.soywiz.korio.stream.ByteArrayBuilder;
  var readStream_0 = $module$korio_js.com.soywiz.korio.stream.readStream_gezhyr$;
  var get_eof = $module$korio_js.com.soywiz.korio.stream.get_eof_ucmi9i$;
  var readExact = $module$korio_js.com.soywiz.korio.stream.readExact_hz4ta6$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var readAvailable = $module$korio_js.com.soywiz.korio.stream.readAvailable_ucmi9i$;
  var openFastStream = $module$korio_js.com.soywiz.korio.stream.openFastStream_mrm5p$;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var toUnsigned_0 = $module$kmem_js.com.soywiz.kmem.toUnsigned_mz3mee$;
  var write16_le_0 = $module$korio_js.com.soywiz.korio.stream.write16_le_n5df9z$;
  var bounds = $module$korma_js.com.soywiz.korma.geom.bounds_kobt9m$;
  var withIndex_0 = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var Matrix2d = $module$korma_js.com.soywiz.korma.Matrix2d;
  var math = Kotlin.kotlin.math;
  var Rectangle = $module$korma_js.com.soywiz.korma.geom.Rectangle;
  var DoubleArrayList_init = $module$kds_js.com.soywiz.kds.DoubleArrayList_init_avch8c$;
  var IntArrayList_init = $module$kds_js.com.soywiz.kds.IntArrayList_init_38vc8i$;
  var DoubleArrayList = $module$kds_js.com.soywiz.kds.DoubleArrayList;
  var LinkedList_init = $module$kds_js.com.soywiz.kds.LinkedList_init_287e2$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var numberToDouble = Kotlin.numberToDouble;
  var VectorPath$Winding = $module$korma_js.com.soywiz.korma.geom.VectorPath.Winding;
  var VectorPath = $module$korma_js.com.soywiz.korma.geom.VectorPath;
  var Xml = $module$korio_js.com.soywiz.korio.serialization.xml.Xml;
  var get_niceStr_1 = $module$korio_js.com.soywiz.korio.util.get_niceStr_yrwdxr$;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var Matrix2d$Type = $module$korma_js.com.soywiz.korma.Matrix2d.Type;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var BoundsBuilder = $module$korma_js.com.soywiz.korma.geom.BoundsBuilder;
  var plus_0 = Kotlin.kotlin.collections.plus_iwxh38$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_7epoxm$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Pair = Kotlin.kotlin.Pair;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var get_allChildren = $module$korio_js.com.soywiz.korio.serialization.xml.get_allChildren_ibjdnu$;
  var get_isComment = $module$korio_js.com.soywiz.korio.serialization.xml.get_isComment_byavcz$;
  var StrReader = $module$korio_js.com.soywiz.korio.util.StrReader;
  var get_isNumeric = $module$korio_js.com.soywiz.korio.util.get_isNumeric_myv2d0$;
  var mapWhile = $module$kds_js.com.soywiz.kds.mapWhile_sj71nh$;
  var ListReader = $module$kds_js.com.soywiz.kds.ListReader;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var isDigit = $module$korio_js.com.soywiz.korio.util.isDigit_myv2d0$;
  var isLetterOrUnderscore = $module$korio_js.com.soywiz.korio.util.isLetterOrUnderscore_myv2d0$;
  var Logger = $module$klogger_js.com.soywiz.klogger.Logger;
  var Xml_0 = $module$korio_js.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  var Vector2 = $module$korma_js.com.soywiz.korma.Vector2;
  var util = $module$korio_js.com.soywiz.korio.util;
  var LocalVfs = $module$korio_js.com.soywiz.korio.vfs.LocalVfs;
  var UrlVfs = $module$korio_js.com.soywiz.korio.vfs.UrlVfs;
  var VfsSpecialReader = $module$korio_js.com.soywiz.korio.vfs.VfsSpecialReader;
  BitmapIndexed.prototype = Object.create(Bitmap.prototype);
  BitmapIndexed.prototype.constructor = BitmapIndexed;
  Bitmap1.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap1.prototype.constructor = Bitmap1;
  Bitmap16.prototype = Object.create(Bitmap.prototype);
  Bitmap16.prototype.constructor = Bitmap16;
  Bitmap2.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap2.prototype.constructor = Bitmap2;
  Bitmap32.prototype = Object.create(Bitmap.prototype);
  Bitmap32.prototype.constructor = Bitmap32;
  Bitmap4.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap4.prototype.constructor = Bitmap4;
  Bitmap8.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap8.prototype.constructor = Bitmap8;
  BitmapChannel.prototype = Object.create(Enum.prototype);
  BitmapChannel.prototype.constructor = BitmapChannel;
  NativeImage.prototype = Object.create(Bitmap.prototype);
  NativeImage.prototype.constructor = NativeImage;
  ColorFormat32.prototype = Object.create(ColorFormat.prototype);
  ColorFormat32.prototype.constructor = ColorFormat32;
  ARGB.prototype = Object.create(ColorFormat32.prototype);
  ARGB.prototype.constructor = ARGB;
  BGRA.prototype = Object.create(ColorFormat32.prototype);
  BGRA.prototype.constructor = BGRA;
  ColorFormat16.prototype = Object.create(ColorFormat.prototype);
  ColorFormat16.prototype.constructor = ColorFormat16;
  ColorFormat24.prototype = Object.create(ColorFormat.prototype);
  ColorFormat24.prototype.constructor = ColorFormat24;
  PaletteColorFormat.prototype = Object.create(ColorFormat.prototype);
  PaletteColorFormat.prototype.constructor = PaletteColorFormat;
  RGB.prototype = Object.create(ColorFormat24.prototype);
  RGB.prototype.constructor = RGB;
  BGR.prototype = Object.create(ColorFormat24.prototype);
  BGR.prototype.constructor = BGR;
  RGBA.prototype = Object.create(ColorFormat32.prototype);
  RGBA.prototype.constructor = RGBA;
  RGBA_4444.prototype = Object.create(ColorFormat16.prototype);
  RGBA_4444.prototype.constructor = RGBA_4444;
  RGBA_5551.prototype = Object.create(ColorFormat16.prototype);
  RGBA_5551.prototype.constructor = RGBA_5551;
  RGB_555.prototype = Object.create(ColorFormat16.prototype);
  RGB_555.prototype.constructor = RGB_555;
  RGB_565.prototype = Object.create(ColorFormat16.prototype);
  RGB_565.prototype.constructor = RGB_565;
  BGRA_4444.prototype = Object.create(ColorFormat16.prototype);
  BGRA_4444.prototype.constructor = BGRA_4444;
  BGR_555.prototype = Object.create(ColorFormat16.prototype);
  BGR_555.prototype.constructor = BGR_555;
  BGR_565.prototype = Object.create(ColorFormat16.prototype);
  BGR_565.prototype.constructor = BGR_565;
  BGRA_5551.prototype = Object.create(ColorFormat16.prototype);
  BGRA_5551.prototype.constructor = BGRA_5551;
  YCbCr.prototype = Object.create(ColorFormat32.prototype);
  YCbCr.prototype.constructor = YCbCr;
  YUVA.prototype = Object.create(ColorFormat32.prototype);
  YUVA.prototype.constructor = YUVA;
  TtfFont$NameIds.prototype = Object.create(Enum.prototype);
  TtfFont$NameIds.prototype.constructor = TtfFont$NameIds;
  TtfFont$Origin.prototype = Object.create(Enum.prototype);
  TtfFont$Origin.prototype.constructor = TtfFont$Origin;
  BMP.prototype = Object.create(ImageFormat.prototype);
  BMP.prototype.constructor = BMP;
  DDS.prototype = Object.create(ImageFormat.prototype);
  DDS.prototype.constructor = DDS;
  DXT.prototype = Object.create(ImageFormat.prototype);
  DXT.prototype.constructor = DXT;
  DXT1Base.prototype = Object.create(DXT.prototype);
  DXT1Base.prototype.constructor = DXT1Base;
  DXT1.prototype = Object.create(DXT1Base.prototype);
  DXT1.prototype.constructor = DXT1;
  DXT2_3.prototype = Object.create(DXT.prototype);
  DXT2_3.prototype.constructor = DXT2_3;
  DXT2.prototype = Object.create(DXT2_3.prototype);
  DXT2.prototype.constructor = DXT2;
  DXT3.prototype = Object.create(DXT2_3.prototype);
  DXT3.prototype.constructor = DXT3;
  DXT4_5.prototype = Object.create(DXT.prototype);
  DXT4_5.prototype.constructor = DXT4_5;
  DXT4.prototype = Object.create(DXT4_5.prototype);
  DXT4.prototype.constructor = DXT4;
  DXT5.prototype = Object.create(DXT4_5.prototype);
  DXT5.prototype.constructor = DXT5;
  ICO.prototype = Object.create(ImageFormat.prototype);
  ICO.prototype.constructor = ICO;
  ImageFormats.prototype = Object.create(ImageFormat.prototype);
  ImageFormats.prototype.constructor = ImageFormats;
  JPEG.prototype = Object.create(ImageFormat.prototype);
  JPEG.prototype.constructor = JPEG;
  PNG$Colorspace.prototype = Object.create(Enum.prototype);
  PNG$Colorspace.prototype.constructor = PNG$Colorspace;
  PNG.prototype = Object.create(ImageFormat.prototype);
  PNG.prototype.constructor = PNG;
  PSD$PsdImageInfo.prototype = Object.create(ImageInfo.prototype);
  PSD$PsdImageInfo.prototype.constructor = PSD$PsdImageInfo;
  PSD.prototype = Object.create(ImageFormat.prototype);
  PSD.prototype.constructor = PSD;
  SVG.prototype = Object.create(ImageFormat.prototype);
  SVG.prototype.constructor = SVG;
  TGA.prototype = Object.create(ImageFormat.prototype);
  TGA.prototype.constructor = TGA;
  Bitmap32Context2d.prototype = Object.create(Context2d$Renderer.prototype);
  Bitmap32Context2d.prototype.constructor = Bitmap32Context2d;
  Context2d$LineCap.prototype = Object.create(Enum.prototype);
  Context2d$LineCap.prototype.constructor = Context2d$LineCap;
  Context2d$LineJoin.prototype = Object.create(Enum.prototype);
  Context2d$LineJoin.prototype.constructor = Context2d$LineJoin;
  Context2d$CycleMethod.prototype = Object.create(Enum.prototype);
  Context2d$CycleMethod.prototype.constructor = Context2d$CycleMethod;
  Context2d$ShapeRasterizerMethod.prototype = Object.create(Enum.prototype);
  Context2d$ShapeRasterizerMethod.prototype.constructor = Context2d$ShapeRasterizerMethod;
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype = Object.create(Context2d$Renderer.prototype);
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype.constructor = Context2d$Renderer$Companion$DUMMY$ObjectLiteral;
  Context2d$VerticalAlign.prototype = Object.create(Enum.prototype);
  Context2d$VerticalAlign.prototype.constructor = Context2d$VerticalAlign;
  Context2d$HorizontalAlign.prototype = Object.create(Enum.prototype);
  Context2d$HorizontalAlign.prototype.constructor = Context2d$HorizontalAlign;
  Context2d$ScaleMode.prototype = Object.create(Enum.prototype);
  Context2d$ScaleMode.prototype.constructor = Context2d$ScaleMode;
  Context2d$Gradient$Kind.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$Kind.prototype.constructor = Context2d$Gradient$Kind;
  Context2d$Gradient$Units.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$Units.prototype.constructor = Context2d$Gradient$Units;
  Context2d$Gradient$InterpolationMethod.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$InterpolationMethod.prototype.constructor = Context2d$Gradient$InterpolationMethod;
  GraphicsPath.prototype = Object.create(VectorPath.prototype);
  GraphicsPath.prototype.constructor = GraphicsPath;
  SVG$GradientUnits.prototype = Object.create(Enum.prototype);
  SVG$GradientUnits.prototype.constructor = SVG$GradientUnits;
  HtmlImageSpecialReader.prototype = Object.create(VfsSpecialReader.prototype);
  HtmlImageSpecialReader.prototype.constructor = HtmlImageSpecialReader;
  CanvasNativeImage.prototype = Object.create(NativeImage.prototype);
  CanvasNativeImage.prototype.constructor = CanvasNativeImage;
  CanvasContext2dRenderer.prototype = Object.create(Context2d$Renderer.prototype);
  CanvasContext2dRenderer.prototype.constructor = CanvasContext2dRenderer;
  function Korim() {
    Korim_instance = this;
    this.VERSION = KORIM_VERSION;
  }
  Korim.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korim',
    interfaces: []
  };
  var Korim_instance = null;
  function Korim_getInstance() {
    if (Korim_instance === null) {
      new Korim();
    }
    return Korim_instance;
  }
  var KORIM_VERSION;
  function Bitmap(width, height, bpp, premult) {
    this.width = width;
    this.height = height;
    this.bpp = bpp;
    this.premult = premult;
    this.$delegate_uler2c$_0 = new Extra$Mixin();
  }
  Object.defineProperty(Bitmap.prototype, 'stride', {
    get: function () {
      return Kotlin.imul(this.width, this.bpp) / 8 | 0;
    }
  });
  Object.defineProperty(Bitmap.prototype, 'area', {
    get: function () {
      return Kotlin.imul(this.width, this.height);
    }
  });
  Bitmap.prototype.index_vux9f0$ = function (x, y) {
    return Kotlin.imul(y, this.width) + x | 0;
  };
  var Size_init = $module$korma_js.com.soywiz.korma.geom.Size;
  Object.defineProperty(Bitmap.prototype, 'size', {
    get: function () {
      var width = this.width;
      var height = this.height;
      return new Size_init(numberToDouble(width), numberToDouble(height));
    }
  });
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  Bitmap.prototype.set32_qt1dr2$ = function (x, y, v) {
    throw new NotImplementedError_init();
  };
  Bitmap.prototype.get32_vux9f0$ = function (x, y) {
    return 0;
  };
  Bitmap.prototype.set_qt1dr2$ = function (x, y, color) {
  };
  Bitmap.prototype.get_vux9f0$ = function (x, y) {
    return 0;
  };
  Bitmap.prototype.inBoundsX_za3lpa$ = function (x) {
    return x >= 0 && x < this.width;
  };
  Bitmap.prototype.inBoundsY_za3lpa$ = function (y) {
    return y >= 0 && y < this.height;
  };
  Bitmap.prototype.inBounds_vux9f0$ = function (x, y) {
    return this.inBoundsX_za3lpa$(x) && this.inBoundsY_za3lpa$(y);
  };
  Bitmap.prototype.clampX_za3lpa$ = function (x) {
    return clamp(x, 0, this.width - 1 | 0);
  };
  Bitmap.prototype.clampY_za3lpa$ = function (y) {
    return clamp(y, 0, this.height - 1 | 0);
  };
  Bitmap.prototype.flipY = function () {
    var tmp$;
    tmp$ = this.height / 2 | 0;
    for (var y = 0; y < tmp$; y++)
      this.swapRows_vux9f0$(y, this.height - y - 1 | 0);
    return this;
  };
  Bitmap.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var tmp$;
    tmp$ = this.width;
    for (var x = 0; x < tmp$; x++) {
      var c0 = this.get_vux9f0$(x, y0);
      var c1 = this.get_vux9f0$(x, y1);
      this.set_qt1dr2$(x, y0, c1);
      this.set_qt1dr2$(x, y1, c0);
    }
  };
  Bitmap.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    throw new UnsupportedOperationException('Not implemented context2d on Bitmap, please use NativeImage instead');
  };
  Bitmap.prototype.getContext2d_6taknv$ = function (antialiasing, callback$default) {
    if (antialiasing === void 0)
      antialiasing = true;
    return callback$default ? callback$default(antialiasing) : this.getContext2d_6taknv$$default(antialiasing);
  };
  Bitmap.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return invalidOp('Unsupported createWithThisFormat');
  };
  Bitmap.prototype.toBMP32 = function () {
    var tmp$, tmp$_0;
    if (Kotlin.isType(this, Bitmap32))
      return this;
    else if (Kotlin.isType(this, NativeImage))
      return this.toBmp32();
    else {
      var out = Bitmap32_init(this.width, this.height, 0, this.premult);
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++)
          out.set_qt1dr2$(x, y, this.get32_vux9f0$(x, y));
      }
      return out;
    }
  };
  Object.defineProperty(Bitmap.prototype, 'extra', {
    get: function () {
      return this.$delegate_uler2c$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_uler2c$_0.extra = tmp$;
    }
  });
  Bitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap',
    interfaces: [Extra, Sizeable]
  };
  function createWithThisFormatTyped($receiver, width, height) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.createWithThisFormat_vux9f0$(width, height), Bitmap) ? tmp$ : throwCCE();
  }
  function Bitmap1(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 8 | 0);
    if (palette === void 0)
      palette = new Int32Array(2);
    BitmapIndexed.call(this, 1, width, height, data, palette);
  }
  Bitmap1.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap1(width, height);
  };
  Bitmap1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap1',
    interfaces: [BitmapIndexed]
  };
  function Bitmap16(width, height, data, format, premult) {
    if (data === void 0)
      data = new Int16Array(Kotlin.imul(width, height));
    if (format === void 0)
      format = RGBA_4444_getInstance();
    if (premult === void 0)
      premult = false;
    Bitmap.call(this, width, height, 16, premult);
    this.data = data;
    this.format = format;
  }
  Bitmap16.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap16(width, height, void 0, this.format, this.premult);
  };
  Bitmap16.prototype.set_qt1dr2$ = function (x, y, color) {
    this.data[this.index_vux9f0$(x, y)] = toShort(color);
  };
  Bitmap16.prototype.get_vux9f0$ = function (x, y) {
    return this.data[this.index_vux9f0$(x, y)] & 65535;
  };
  Bitmap16.prototype.get32_vux9f0$ = function (x, y) {
    return this.format.unpackToRGBA_za3lpa$(this.data[this.index_vux9f0$(x, y)]);
  };
  Bitmap16.prototype.set32_qt1dr2$ = function (x, y, v) {
    this.data[this.index_vux9f0$(x, y)] = toShort(this.format.packRGBA_za3lpa$(v));
  };
  Bitmap16.prototype.toString = function () {
    return 'Bitmap16(' + this.width + ', ' + this.height + ', format=' + this.format + ')';
  };
  Bitmap16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap16',
    interfaces: [Bitmap]
  };
  function Bitmap2(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 4 | 0);
    if (palette === void 0)
      palette = new Int32Array(4);
    BitmapIndexed.call(this, 2, width, height, data, palette);
  }
  Bitmap2.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap2(width, height);
  };
  Bitmap2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap2',
    interfaces: [BitmapIndexed]
  };
  var Math_0 = Math;
  function Bitmap32(width, height, data, premult) {
    Bitmap32$Companion_getInstance();
    if (data === void 0)
      data = new Int32Array(Kotlin.imul(width, height));
    if (premult === void 0)
      premult = false;
    Bitmap.call(this, width, height, 32, premult);
    this.data = data;
    if (this.data.length < Kotlin.imul(width, height))
      throw new RuntimeException('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.length + '), area=' + Kotlin.imul(width, height));
    this.temp_0 = new Int32Array(Math_0.max(width, height));
  }
  Bitmap32.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap32(width, height, void 0, this.premult);
  };
  Bitmap32.prototype.set_qt1dr2$ = function (x, y, color) {
    this.data[this.index_vux9f0$(x, y)] = color;
  };
  Bitmap32.prototype.get_vux9f0$ = function (x, y) {
    return this.data[this.index_vux9f0$(x, y)];
  };
  Bitmap32.prototype.get32_vux9f0$ = function (x, y) {
    return this.get_vux9f0$(x, y);
  };
  Bitmap32.prototype.set32_qt1dr2$ = function (x, y, v) {
    this.set_qt1dr2$(x, y, v);
  };
  Bitmap32.prototype.setRow_aio0fn$ = function (y, row) {
    arraycopy(row, 0, this.data, this.index_vux9f0$(0, y), this.width);
  };
  Bitmap32.prototype._draw_dd24ng$ = function (src, dx, dy, sleft, stop, sright, sbottom, mix) {
    var dst = this;
    var width = sright - sleft | 0;
    var height = sbottom - stop | 0;
    var dstData = dst.data;
    var srcData = src.data;
    for (var y = 0; y < height; y++) {
      var dstOffset = dst.index_vux9f0$(dx, dy + y | 0);
      var srcOffset = src.index_vux9f0$(sleft, stop + y | 0);
      if (mix) {
        for (var x = 0; x < width; x++)
          dstData[dstOffset + x | 0] = RGBA_getInstance().mix_vux9f0$(dstData[dstOffset + x | 0], srcData[srcOffset + x | 0]);
      }
       else {
        arraycopy(srcData, srcOffset, dstData, dstOffset, width);
      }
    }
  };
  Bitmap32.prototype.drawPixelMixed_qt1dr2$ = function (x, y, c) {
    this.set_qt1dr2$(x, y, RGBA_getInstance().mix_vux9f0$(this.get_vux9f0$(x, y), c));
  };
  Bitmap32.prototype._drawPut_11mu8c$ = function (mix, other, _dx, _dy) {
    if (_dx === void 0)
      _dx = 0;
    if (_dy === void 0)
      _dy = 0;
    var dx = _dx;
    var dy = _dy;
    var sleft = 0;
    var stop = 0;
    var sright = other.width;
    var sbottom = other.height;
    if (dx < 0) {
      sleft = -dx;
      dx = 0;
    }
    if (dy < 0) {
      stop = -dy;
      dy = 0;
    }
    this._draw_dd24ng$(other, dx, dy, sleft, stop, sright, sbottom, mix);
  };
  Bitmap32.prototype.fill_4qozqa$ = function (color, x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = this.width;
    if (height === void 0)
      height = this.height;
    var x1 = this.clampX_za3lpa$(x);
    var x2 = this.clampX_za3lpa$(x + width - 1 | 0);
    var y1 = this.clampY_za3lpa$(y);
    var y2 = this.clampY_za3lpa$(y + height - 1 | 0);
    for (var cy = y1; cy <= y2; cy++) {
      var $receiver = this.data;
      var start = this.index_vux9f0$(x1, cy);
      var end = this.index_vux9f0$(x2, cy) + 1 | 0;
      $receiver.fill(color, start, end);
    }
  };
  Bitmap32.prototype._draw_uui62f$ = function (src, dx, dy, mix) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    var b = src.bounds;
    var availableWidth = this.width - dx | 0;
    var availableHeight = this.height - dy | 0;
    var b_0 = b.width;
    var awidth = Math_0.min(availableWidth, b_0);
    var b_1 = b.height;
    var aheight = Math_0.min(availableHeight, b_1);
    this._draw_dd24ng$(src.bmp, dx, dy, b.x, b.y, b.x + awidth | 0, b.y + aheight | 0, mix);
  };
  Bitmap32.prototype.put_dryc6d$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._drawPut_11mu8c$(false, src, dx, dy);
  };
  Bitmap32.prototype.draw_dryc6d$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._drawPut_11mu8c$(true, src, dx, dy);
  };
  Bitmap32.prototype.put_a26vum$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._draw_uui62f$(src, dx, dy, false);
  };
  Bitmap32.prototype.draw_a26vum$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._draw_uui62f$(src, dx, dy, true);
  };
  Bitmap32.prototype.copySliceWithBounds_tjonv8$ = function (left, top, right, bottom) {
    return this.copySliceWithSize_tjonv8$(left, top, right - left | 0, bottom - top | 0);
  };
  Bitmap32.prototype.copySliceWithSize_tjonv8$ = function (x, y, width, height) {
    var out = new Bitmap32(width, height);
    for (var yy = 0; yy < height; yy++) {
      arraycopy(this.data, this.index_vux9f0$(x, y + yy | 0), out.data, out.index_vux9f0$(0, yy), width);
    }
    return out;
  };
  Bitmap32.prototype.all_8xwv17$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.all_8xwv17$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var Collection = Kotlin.kotlin.collections.Collection;
    return function (callback) {
      var $receiver = until(0, this.area);
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
          if (callback(this.data[element])) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }));
  Bitmap32.prototype.forEach_uijzbn$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.forEach_uijzbn$', function (callback) {
    var tmp$, tmp$_0, tmp$_1;
    var n = 0;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        callback((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), x, y);
      }
    }
  });
  Bitmap32.prototype.setEach_7n50yu$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.setEach_7n50yu$', wrapFunction(function () {
    return function (callback) {
      var tmp$, tmp$_0, tmp$_1;
      var n = 0;
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++) {
          this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1] = callback(x, y);
        }
      }
    };
  }));
  Bitmap32.prototype.transformColor_ddsh32$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.transformColor_ddsh32$', wrapFunction(function () {
    return function (callback) {
      var tmp$, tmp$_0, tmp$_1;
      var n = 0;
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++) {
          var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
          this.data[n_0] = callback(this.data[n_0]);
        }
      }
    };
  }));
  Bitmap32.prototype.writeChannel_ccmnuj$ = function (destination, input, source) {
    var tmp$;
    var sourceShift = source.shift;
    var destShift = destination.shift;
    var destClear = destination.clearMask;
    var thisData = this.data;
    var inputData = input.data;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      var c = inputData[n] >>> sourceShift & 255;
      thisData[n] = thisData[n] & destClear | c << destShift;
    }
  };
  Bitmap32.prototype.writeChannel_z3s5mf$ = function (destination, input) {
    var tmp$;
    var destShift = destination.index * 8 | 0;
    var destClear = ~(255 << destShift);
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      var c = input.data[n] & 255;
      this.data[n] = this.data[n] & destClear | c << destShift;
    }
  };
  Bitmap32.prototype.writeChannel_ehzdij$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.writeChannel_ehzdij$', function (destination, gen) {
    var tmp$, tmp$_0;
    var destShift = destination.index * 8 | 0;
    var destClear = ~(255 << destShift);
    var n = 0;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        var c = gen(x, y) & 255;
        this.data[n] = this.data[n] & destClear | c << destShift;
        n = n + 1 | 0;
      }
    }
  });
  Bitmap32.prototype.writeChannelN_qv1f5z$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.writeChannelN_qv1f5z$', function (destination, gen) {
    var tmp$;
    var destShift = destination.index * 8 | 0;
    var destClear = ~(255 << destShift);
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      var c = gen(n) & 255;
      this.data[n] = this.data[n] & destClear | c << destShift;
    }
  });
  Bitmap32.prototype.extractChannel_25cr2x$ = function (channel) {
    var tmp$;
    var out = new Bitmap8(this.width, this.height);
    var shift = channel.shift;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      out.data[n] = toByte(this.data[n] >>> shift & 255);
    }
    return out;
  };
  function Bitmap32$Companion() {
    Bitmap32$Companion_instance = this;
  }
  Bitmap32$Companion.prototype.copyRect_dpalmc$ = function (src, srcX, srcY, dst, dstX, dstY, width, height) {
    for (var y = 0; y < height; y++) {
      var srcIndex = src.index_vux9f0$(srcX, srcY + y | 0);
      var dstIndex = dst.index_vux9f0$(dstX, dstY + y | 0);
      arraycopy(src.data, srcIndex, dst.data, dstIndex, width);
    }
  };
  Bitmap32$Companion.prototype.createWithAlpha_h1jruv$ = function (color, alpha, alphaChannel) {
    if (alphaChannel === void 0)
      alphaChannel = BitmapChannel$RED_getInstance();
    var out = new Bitmap32(color.width, color.height);
    out.put_dryc6d$(color);
    out.writeChannel_ccmnuj$(BitmapChannel$ALPHA_getInstance(), alpha, BitmapChannel$RED_getInstance());
    return out;
  };
  Bitmap32$Companion.prototype.matchesSSMI_irislw$ = function (a, b, continuation) {
    throw new NotImplementedError_init();
  };
  Bitmap32$Companion.prototype.matches_9ho1nm$ = function (a, b, threshold, continuation) {
    if (threshold === void 0)
      threshold = 32;
    var diff = this.diff_irislw$(a, b);
    var $receiver = diff.data;
    var all$result;
    all$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (!(RGBA_getInstance().getR_za3lpa$(element) < threshold && RGBA_getInstance().getG_za3lpa$(element) < threshold && RGBA_getInstance().getB_za3lpa$(element) < threshold && RGBA_getInstance().getA_za3lpa$(element) < threshold)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  Bitmap32$Companion.prototype.diff_irislw$ = function (a, b) {
    var tmp$;
    if (a.width !== b.width || a.height !== b.height)
      throw new IllegalArgumentException(a.toString() + ' not matches ' + b + ' size');
    var a32 = a.toBMP32();
    var b32 = b.toBMP32();
    var out = new Bitmap32(a.width, a.height, void 0, true);
    tmp$ = out.area;
    for (var n = 0; n < tmp$; n++) {
      var c1 = RGBA_getInstance().premultiplyFast_za3lpa$(a32.data[n]);
      var c2 = RGBA_getInstance().premultiplyFast_za3lpa$(b32.data[n]);
      var dr = abs(RGBA_getInstance().getR_za3lpa$(c1) - RGBA_getInstance().getR_za3lpa$(c2) | 0);
      var dg = abs(RGBA_getInstance().getG_za3lpa$(c1) - RGBA_getInstance().getG_za3lpa$(c2) | 0);
      var db = abs(RGBA_getInstance().getB_za3lpa$(c1) - RGBA_getInstance().getB_za3lpa$(c2) | 0);
      var da = abs(RGBA_getInstance().getA_za3lpa$(c1) - RGBA_getInstance().getA_za3lpa$(c2) | 0);
      out.data[n] = RGBA_getInstance().pack_tjonv8$(dr, dg, db, da);
    }
    return out;
  };
  Bitmap32$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bitmap32$Companion_instance = null;
  function Bitmap32$Companion_getInstance() {
    if (Bitmap32$Companion_instance === null) {
      new Bitmap32$Companion();
    }
    return Bitmap32$Companion_instance;
  }
  Bitmap32.prototype.invert = function () {
    this.xor_za3lpa$(16777215);
  };
  Bitmap32.prototype.xor_za3lpa$ = function (value) {
    var tmp$;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++)
      this.data[n] = this.data[n] ^ value;
  };
  Bitmap32.prototype.toString = function () {
    return 'Bitmap32(' + this.width + ', ' + this.height + ')';
  };
  Bitmap32.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_vux9f0$(0, y0);
    var s1 = this.index_vux9f0$(0, y1);
    arraycopy(this.data, s0, this.temp_0, 0, this.width);
    arraycopy(this.data, s1, this.data, s0, this.width);
    arraycopy(this.temp_0, 0, this.data, s1, this.width);
  };
  Bitmap32.prototype.writeDecoded_77vltg$ = function (color, data, offset, littleEndian) {
    if (offset === void 0)
      offset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    color.decode_c0jzf6$(data, offset, this.data, 0, this.area, littleEndian);
    return this;
  };
  Bitmap32.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new Bitmap32Context2d(this));
  };
  Bitmap32.prototype.clone = function () {
    return new Bitmap32(this.width, this.height, this.data.slice(), this.premult);
  };
  Bitmap32.prototype.premultipliedIfRequired = function () {
    return this.premult ? this : this.premultiplied();
  };
  Bitmap32.prototype.depremultipliedIfRequired = function () {
    return !this.premult ? this : this.depremultiplied();
  };
  Bitmap32.prototype.premultiplied = function () {
    var $receiver = this.clone();
    $receiver.premultiplyInplace();
    return $receiver;
  };
  Bitmap32.prototype.depremultiplied = function () {
    var $receiver = this.clone();
    $receiver.depremultiplyInplace();
    return $receiver;
  };
  Bitmap32.prototype.premultiplyInplace = function () {
    var tmp$;
    if (this.premult)
      return;
    this.premult = true;
    tmp$ = this.data.length;
    for (var n = 0; n < tmp$; n++)
      this.data[n] = RGBA_getInstance().premultiplyFast_za3lpa$(this.data[n]);
  };
  Bitmap32.prototype.depremultiplyInplace = function () {
    var tmp$;
    if (!this.premult)
      return;
    this.premult = false;
    tmp$ = this.data.length;
    for (var n = 0; n < tmp$; n++)
      this.data[n] = RGBA_getInstance().depremultiplyFast_za3lpa$(this.data[n]);
  };
  Bitmap32.prototype.mipmap_za3lpa$ = function (levels) {
    var tmp$, tmp$_0;
    var temp = this.clone();
    temp.premultiplyInplace();
    var dst = temp.data;
    var twidth = this.width;
    var theight = this.height;
    for (var level = 0; level < levels; level++) {
      twidth = twidth / 2 | 0;
      theight = theight / 2 | 0;
      tmp$ = theight;
      for (var y = 0; y < tmp$; y++) {
        var n = temp.index_vux9f0$(0, y);
        var m = temp.index_vux9f0$(0, y * 2 | 0);
        tmp$_0 = twidth;
        for (var x = 0; x < tmp$_0; x++) {
          var c1 = dst[m];
          var c2 = dst[m + 1 | 0];
          var c3 = dst[m + this.width | 0];
          var c4 = dst[m + this.width + 1 | 0];
          dst[n] = RGBA_getInstance().blendRGBAFastAlreadyPremultiplied_05_tjonv8$(c1, c2, c3, c4);
          m = m + 2 | 0;
          n = n + 1 | 0;
        }
      }
    }
    var out = new Bitmap32(twidth, theight, void 0, true);
    Bitmap32$Companion_getInstance().copyRect_dpalmc$(temp, 0, 0, out, 0, 0, twidth, theight);
    return out;
  };
  Bitmap32.prototype.iterator = function () {
    return Kotlin.intArrayIterator(this.data);
  };
  Bitmap32.prototype.setRowChunk_ydkzvt$ = function (x, y, data, width, increment) {
    if (increment === 1) {
      arraycopy(data, 0, this.data, this.index_vux9f0$(x, y), width);
    }
     else {
      var m = this.index_vux9f0$(x, y);
      for (var n = 0; n < width; n++) {
        this.data[m] = data[n];
        m = m + increment | 0;
      }
    }
  };
  Bitmap32.prototype.extractBytes = function () {
    return RGBA_getInstance().encode_mbw8y8$(this.data);
  };
  Bitmap32.prototype.scaleNearest_vux9f0$ = function (sx, sy) {
    var tmp$, tmp$_0;
    var out = new Bitmap32(Kotlin.imul(this.width, sx), Kotlin.imul(this.height, sy));
    tmp$ = out.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = out.width;
      for (var x = 0; x < tmp$_0; x++) {
        out.set_qt1dr2$(x, y, this.get_vux9f0$(x / sx | 0, y / sy | 0));
      }
    }
    return out;
  };
  Bitmap32.prototype.writeComponent_ccmnuj$ = function (dstCmp, from, srcCmp) {
    var tmp$;
    var fdata = from.data;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      this.data[n] = dstCmp.insert_vux9f0$(this.data[n], srcCmp.extract_za3lpa$(fdata[n]));
    }
  };
  Bitmap32.prototype.rgbaToYCbCr = function () {
    var $receiver = new Bitmap32(this.width, this.height);
    var tmp$;
    tmp$ = $receiver.area;
    for (var n = 0; n < tmp$; n++)
      $receiver.data[n] = YCbCr_getInstance().rgbaToYCbCr_za3lpa$(this.data[n]);
    return $receiver;
  };
  Bitmap32.prototype.yCbCrToRgba = function () {
    var $receiver = new Bitmap32(this.width, this.height);
    var tmp$;
    tmp$ = $receiver.area;
    for (var n = 0; n < tmp$; n++)
      $receiver.data[n] = YCbCr_getInstance().yCbCrToRgba_za3lpa$(this.data[n]);
    return $receiver;
  };
  Bitmap32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap32',
    interfaces: [Iterable, Bitmap]
  };
  function Bitmap32_init(width, height, value, premult, $this) {
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premult);
    var $receiver = $this.data;
    var end;
    end = $receiver.length;
    $receiver.fill(value, 0, end);
    return $this;
  }
  function Bitmap32_init_0(width, height, value, $this) {
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, false);
    var $receiver = $this.data;
    var end;
    end = $receiver.length;
    $receiver.fill(value, 0, end);
    return $this;
  }
  function Bitmap32_init_1(width, height, premult, generator, $this) {
    if (premult === void 0)
      premult = false;
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premult);
    var tmp$, tmp$_0, tmp$_1;
    var n = 0;
    tmp$ = $this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = $this.width;
      for (var x = 0; x < tmp$_0; x++) {
        $this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1] = generator(x, y);
      }
    }
    return $this;
  }
  function Bitmap4(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 2 | 0);
    if (palette === void 0)
      palette = new Int32Array(16);
    BitmapIndexed.call(this, 4, width, height, data, palette);
  }
  Bitmap4.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap4(width, height);
  };
  Bitmap4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap4',
    interfaces: [BitmapIndexed]
  };
  function Bitmap8(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height));
    if (palette === void 0)
      palette = new Int32Array(255);
    BitmapIndexed.call(this, 8, width, height, data, palette);
  }
  Bitmap8.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap8(width, height);
  };
  Bitmap8.prototype.set_qt1dr2$ = function (x, y, color) {
    var $this = this.datau;
    var n = this.index_vux9f0$(x, y);
    $this.data[n] = toByte(color);
  };
  Bitmap8.prototype.get_vux9f0$ = function (x, y) {
    var $this = this.datau;
    var n = this.index_vux9f0$(x, y);
    return $this.data[n] & 255;
  };
  Bitmap8.prototype.get32_vux9f0$ = function (x, y) {
    return this.palette[this.get_vux9f0$(x, y)];
  };
  Bitmap8.prototype.toString = function () {
    return 'Bitmap8(' + this.width + ', ' + this.height + ', palette=' + this.palette.length + ')';
  };
  Bitmap8.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap8',
    interfaces: [BitmapIndexed]
  };
  function BitmapChannel(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.shift = this.index * 8 | 0;
    this.setMask = 255 << this.shift;
    this.clearMask = ~this.setMask;
  }
  function BitmapChannel_initFields() {
    BitmapChannel_initFields = function () {
    };
    BitmapChannel$RED_instance = new BitmapChannel('RED', 0, 0);
    BitmapChannel$GREEN_instance = new BitmapChannel('GREEN', 1, 1);
    BitmapChannel$BLUE_instance = new BitmapChannel('BLUE', 2, 2);
    BitmapChannel$ALPHA_instance = new BitmapChannel('ALPHA', 3, 3);
    BitmapChannel$Companion_getInstance();
  }
  var BitmapChannel$RED_instance;
  function BitmapChannel$RED_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$RED_instance;
  }
  var BitmapChannel$GREEN_instance;
  function BitmapChannel$GREEN_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$GREEN_instance;
  }
  var BitmapChannel$BLUE_instance;
  function BitmapChannel$BLUE_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$BLUE_instance;
  }
  var BitmapChannel$ALPHA_instance;
  function BitmapChannel$ALPHA_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$ALPHA_instance;
  }
  BitmapChannel.prototype.extract_za3lpa$ = function (rgba) {
    return rgba >>> this.shift & 255;
  };
  BitmapChannel.prototype.insert_vux9f0$ = function (rgba, value) {
    return rgba & this.clearMask | (value & 255) << this.shift;
  };
  function BitmapChannel$Companion() {
    BitmapChannel$Companion_instance = this;
    this.ALL = BitmapChannel$values();
  }
  BitmapChannel$Companion.prototype.get_za3lpa$ = function (index) {
    return this.ALL[index];
  };
  BitmapChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapChannel$Companion_instance = null;
  function BitmapChannel$Companion_getInstance() {
    BitmapChannel_initFields();
    if (BitmapChannel$Companion_instance === null) {
      new BitmapChannel$Companion();
    }
    return BitmapChannel$Companion_instance;
  }
  BitmapChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapChannel',
    interfaces: [Enum]
  };
  function BitmapChannel$values() {
    return [BitmapChannel$RED_getInstance(), BitmapChannel$GREEN_getInstance(), BitmapChannel$BLUE_getInstance(), BitmapChannel$ALPHA_getInstance()];
  }
  BitmapChannel.values = BitmapChannel$values;
  function BitmapChannel$valueOf(name) {
    switch (name) {
      case 'RED':
        return BitmapChannel$RED_getInstance();
      case 'GREEN':
        return BitmapChannel$GREEN_getInstance();
      case 'BLUE':
        return BitmapChannel$BLUE_getInstance();
      case 'ALPHA':
        return BitmapChannel$ALPHA_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.bitmap.BitmapChannel.' + name);
    }
  }
  BitmapChannel.valueOf_61zpoe$ = BitmapChannel$valueOf;
  function get_Y($receiver) {
    return BitmapChannel$RED_getInstance();
  }
  function get_Cb($receiver) {
    return BitmapChannel$GREEN_getInstance();
  }
  function get_Cr($receiver) {
    return BitmapChannel$BLUE_getInstance();
  }
  function get_A($receiver) {
    return BitmapChannel$ALPHA_getInstance();
  }
  function toStringYCbCr($receiver) {
    var tmp$;
    tmp$ = $receiver.index;
    if (tmp$ === 0)
      return 'Y';
    else if (tmp$ === 1)
      return 'Cb';
    else if (tmp$ === 2)
      return 'Cr';
    else if (tmp$ === 3)
      return 'A';
    else
      return error.invalidOp;
  }
  function sliceWithBounds($receiver, left, top, right, bottom) {
    return new BitmapSlice($receiver, RectangleInt_init(left, top, right - left | 0, bottom - top | 0));
  }
  function sliceWithSize_1($receiver, x, y, width, height) {
    return new BitmapSlice($receiver, RectangleInt_init(x, y, width, height));
  }
  function slice_0($receiver, bounds) {
    return new BitmapSlice($receiver, bounds);
  }
  function matchContents($receiver, that) {
    if ($receiver.width !== that.width || $receiver.height !== that.height)
      return false;
    var l = $receiver.toBMP32().depremultipliedIfRequired();
    var r = that.toBMP32().depremultipliedIfRequired();
    var width = l.width;
    var height = l.height;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        if (l.get32_vux9f0$(x, y) !== r.get32_vux9f0$(x, y))
          return false;
      }
    }
    return true;
  }
  function setAlpha($receiver, value) {
    var tmp$;
    tmp$ = $receiver.data.length;
    for (var n = 0; n < tmp$; n++)
      $receiver.data[n] = $receiver.data[n] & 16777215 | value << 24;
  }
  function BitmapIndexed(bpp, width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / (8 / bpp | 0) | 0);
    if (palette === void 0)
      palette = new Int32Array(1 << bpp);
    Bitmap.call(this, width, height, bpp, false);
    this.data = data;
    this.palette = palette;
    if (this.data.length < (Kotlin.imul(width, height) / (8 / bpp | 0) | 0))
      throw new RuntimeException('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.length + '), area=' + Kotlin.imul(width, height));
    this.temp = new Int8Array(Math_0.max(width, height));
    this.datau = new UByteArray(this.data);
    this.n8_dbpp = 8 / bpp | 0;
    this.mask = (1 << bpp) - 1 | 0;
  }
  BitmapIndexed.prototype.toString = function () {
    return 'BitmapIndexed(bpp=' + this.bpp + ', width=' + this.width + ', height=' + this.height + ', clut=' + this.palette.length + ')';
  };
  BitmapIndexed.prototype.get_vux9f0$ = function (x, y) {
    var $this = this.datau;
    var n = this.index_d_vux9f0$(x, y);
    return ($this.data[n] & 255) >>> Kotlin.imul(this.bpp, this.index_m_vux9f0$(x, y)) & this.mask;
  };
  BitmapIndexed.prototype.set_qt1dr2$ = function (x, y, color) {
    var i = this.index_d_vux9f0$(x, y);
    var tmp$ = this.datau;
    var v = insert(this.datau.data[i] & 255, color, Kotlin.imul(this.bpp, this.index_m_vux9f0$(x, y)), this.bpp);
    tmp$.data[i] = toByte(v);
  };
  BitmapIndexed.prototype.get32_vux9f0$ = function (x, y) {
    return this.palette[this.get_vux9f0$(x, y)];
  };
  BitmapIndexed.prototype.index_d_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) / this.n8_dbpp | 0;
  };
  BitmapIndexed.prototype.index_m_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) % this.n8_dbpp;
  };
  BitmapIndexed.prototype.setRow_5pgyc$ = function (y, row) {
    arraycopy_0(row.data, 0, this.data, this.index_vux9f0$(0, y), this.stride);
  };
  BitmapIndexed.prototype.setRow_3fbn1q$ = function (y, row) {
    arraycopy_0(row, 0, this.data, this.index_vux9f0$(0, y), this.stride);
  };
  BitmapIndexed.prototype.setWhitescalePalette = function () {
    var tmp$;
    tmp$ = this.palette.length;
    for (var n = 0; n < tmp$; n++) {
      var col = numberToInt(n / this.palette.length * 255);
      this.palette[n] = RGBA_getInstance().invoke_tjonv8$(col, col, col, 255);
    }
    return this;
  };
  BitmapIndexed.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_d_vux9f0$(0, y0);
    var s1 = this.index_d_vux9f0$(0, y1);
    arraycopy_0(this.data, s0, this.temp, 0, this.stride);
    arraycopy_0(this.data, s1, this.data, s0, this.stride);
    arraycopy_0(this.temp, 0, this.data, s1, this.stride);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  BitmapIndexed.prototype.toLines_61zpoe$ = function (palette) {
    var $receiver = until(0, this.height);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, this.height);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(toBoxedChar(palette.charCodeAt(this.get_vux9f0$(item_0, item))));
      }
      tmp$_0.call(destination, joinToString(destination_0, ''));
    }
    return destination;
  };
  BitmapIndexed.prototype.setRowChunk_y8lvms$ = function (x, y, data, width, increment) {
    var tmp$;
    if (increment === 1) {
      arraycopy_0(data, 0, this.data, this.index_vux9f0$(x, y), width / this.n8_dbpp | 0);
    }
     else {
      var m = this.index_vux9f0$(x, y);
      tmp$ = width / this.n8_dbpp | 0;
      for (var n = 0; n < tmp$; n++) {
        this.data[m] = data[n];
        m = m + increment | 0;
      }
    }
  };
  BitmapIndexed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapIndexed',
    interfaces: [Bitmap]
  };
  function BitmapSlice(bmp, bounds) {
    this.bmp = bmp;
    this.bounds = bounds;
  }
  BitmapSlice.prototype.extract = function () {
    var sx = this.bounds.x;
    var sy = this.bounds.y;
    var swidth = this.bounds.width;
    var sheight = this.bounds.height;
    var out = createWithThisFormatTyped(this.bmp, swidth, sheight);
    for (var y = 0; y < sheight; y++) {
      for (var x = 0; x < swidth; x++) {
        out.set_qt1dr2$(x, y, this.bmp.get_vux9f0$(sx + x | 0, sy + y | 0));
      }
    }
    return out;
  };
  BitmapSlice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapSlice',
    interfaces: []
  };
  function NativeImage(width, height, data, premultiplied) {
    Bitmap.call(this, width, height, 32, premultiplied);
    this.data = data;
    this.name_vm0j7s$_0 = 'NativeImage';
  }
  Object.defineProperty(NativeImage.prototype, 'name', {
    get: function () {
      return this.name_vm0j7s$_0;
    }
  });
  NativeImage.prototype.swapRows_vux9f0$ = function (y0, y1) {
    throw new UnsupportedOperationException();
  };
  NativeImage.prototype.toBmp32 = function () {
    return this.toNonNativeBmp().toBMP32();
  };
  NativeImage.prototype.toUri = function () {
    return 'data:image/png;base64,' + crypto.Base64.encode_fqrh44$(PNG_getInstance().encode_hnx2ev$(this, new ImageEncodingProps('out.png')));
  };
  NativeImage.prototype.toString = function () {
    return this.name + '(' + this.width + ', ' + this.height + ')';
  };
  NativeImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeImage',
    interfaces: [Bitmap]
  };
  function mipmap($receiver, levels) {
    return nativeImageFormatProvider.mipmap_uwsoz2$($receiver, levels);
  }
  function toUri($receiver) {
    if (Kotlin.isType($receiver, NativeImage))
      return $receiver.toUri();
    return 'data:image/png;base64,' + crypto.Base64.encode_fqrh44$(PNG_getInstance().encode_hnx2ev$($receiver, new ImageEncodingProps('out.png')));
  }
  function NativeImage_0(width, height) {
    return nativeImageFormatProvider.create_vux9f0$(width, height);
  }
  function NativeImage_1(width, height, d, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    var bmp = NativeImage_0(width, height);
    try {
      var ctx = bmp.getContext2d_6taknv$();
      ctx.save();
      try {
        ctx.scale_lu1900$(scaleX, scaleY);
        ctx.draw_ywv3s4$(d);
      }
      finally {
        ctx.restore();
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        printStackTrace(e);
      }
       else
        throw e;
    }
    return bmp;
  }
  function NativeImage_2(d, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    return NativeImage_1(numberToInt(d.width * scaleX), numberToInt(d.height * scaleY), d, scaleX, scaleY);
  }
  function ensureNative($receiver) {
    if (Kotlin.isType($receiver, NativeImage))
      return $receiver;
    else
      return nativeImageFormatProvider.copy_uler2c$($receiver);
  }
  function raster($receiver, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    return NativeImage_2($receiver, scaleX, scaleY);
  }
  function PSNR() {
    PSNR_instance = this;
  }
  PSNR.prototype.MSE_h1jruv$ = function (a, b, c) {
    var tmp$;
    if (!((tmp$ = a.size) != null ? tmp$.equals(b.size) : null))
      invalidOp(a.size.toString() + ' != ' + b.size);
    var area = a.area;
    var sum = 0.0;
    for (var n = 0; n < area; n++) {
      var v = c.extract_za3lpa$(a.data[n]) - c.extract_za3lpa$(b.data[n]) | 0;
      sum += Kotlin.imul(v, v);
    }
    return sum / area;
  };
  PSNR.prototype.MSE_6bycng$ = function (a, b) {
    var $receiver = BitmapChannel$Companion_getInstance().ALL;
    var destination = ArrayList_init_0($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(this.MSE_h1jruv$(a, b, item));
    }
    return sum(destination) / 4.0;
  };
  PSNR.prototype.PSNR_0 = function (a, b, mse) {
    var x = 255 / Math_0.sqrt(mse);
    return 20.0 * Math_0.log10(x);
  };
  PSNR.prototype.invoke_6bycng$ = function (a, b) {
    return this.PSNR_0(a, b, this.MSE_6bycng$(a, b));
  };
  PSNR.prototype.invoke_h1jruv$ = function (a, b, c) {
    return this.PSNR_0(a, b, this.MSE_h1jruv$(a, b, c));
  };
  PSNR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PSNR',
    interfaces: []
  };
  var PSNR_instance = null;
  function PSNR_getInstance() {
    if (PSNR_instance === null) {
      new PSNR();
    }
    return PSNR_instance;
  }
  function psnrDiffTo($receiver, that) {
    return computePsnr(Bitmap32$Companion_getInstance(), $receiver, that);
  }
  function computePsnr($receiver, a, b) {
    return PSNR_getInstance().invoke_6bycng$(a, b);
  }
  function ARGB() {
    ARGB_instance = this;
    ColorFormat32.call(this);
    this.$delegate_mcsiax$_0 = new ColorFormatBase$Mixin(8, 8, 16, 8, 24, 8, 0, 8);
  }
  ARGB.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getA_za3lpa$(v);
  };
  ARGB.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getB_za3lpa$(v);
  };
  ARGB.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getG_za3lpa$(v);
  };
  ARGB.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getR_za3lpa$(v);
  };
  ARGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_mcsiax$_0.pack_tjonv8$(r, g, b, a);
  };
  ARGB.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ARGB',
    interfaces: [ColorFormat32, ColorFormatBase]
  };
  var ARGB_instance = null;
  function ARGB_getInstance() {
    if (ARGB_instance === null) {
      new ARGB();
    }
    return ARGB_instance;
  }
  function BGRA() {
    BGRA_instance = this;
    ColorFormat32.call(this);
    this.$delegate_mcsxe9$_0 = new ColorFormatBase$Mixin(16, 8, 8, 8, 0, 8, 24, 8);
  }
  BGRA.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getA_za3lpa$(v);
  };
  BGRA.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getB_za3lpa$(v);
  };
  BGRA.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getG_za3lpa$(v);
  };
  BGRA.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getR_za3lpa$(v);
  };
  BGRA.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_mcsxe9$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA',
    interfaces: [ColorFormat32, ColorFormatBase]
  };
  var BGRA_instance = null;
  function BGRA_getInstance() {
    if (BGRA_instance === null) {
      new BGRA();
    }
    return BGRA_instance;
  }
  function ColorFormatBase() {
  }
  function ColorFormatBase$Mixin(rOffset, rSize, gOffset, gSize, bOffset, bSize, aOffset, aSize) {
    this.rOffset = rOffset;
    this.rSize = rSize;
    this.gOffset = gOffset;
    this.gSize = gSize;
    this.bOffset = bOffset;
    this.bSize = bSize;
    this.aOffset = aOffset;
    this.aSize = aSize;
  }
  ColorFormatBase$Mixin.prototype.getR_za3lpa$ = function (v) {
    return extractScaledFF(v, this.rOffset, this.rSize);
  };
  ColorFormatBase$Mixin.prototype.getG_za3lpa$ = function (v) {
    return extractScaledFF(v, this.gOffset, this.gSize);
  };
  ColorFormatBase$Mixin.prototype.getB_za3lpa$ = function (v) {
    return extractScaledFF(v, this.bOffset, this.bSize);
  };
  ColorFormatBase$Mixin.prototype.getA_za3lpa$ = function (v) {
    return extractScaledFFDefault(v, this.aOffset, this.aSize, 255);
  };
  ColorFormatBase$Mixin.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insertScaledFF(insertScaledFF(insertScaledFF(insertScaledFF(0, r, this.rOffset, this.rSize), g, this.gOffset, this.gSize), b, this.bOffset, this.bSize), a, this.aOffset, this.aSize);
  };
  ColorFormatBase$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [ColorFormatBase]
  };
  ColorFormatBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ColorFormatBase',
    interfaces: []
  };
  function ColorFormat(bpp) {
    ColorFormat$Companion_getInstance();
    this.bpp = bpp;
    this.bytesPerPixel = this.bpp / 8 | 0;
  }
  ColorFormat.prototype.getRf_za3lpa$ = function (v) {
    return this.getR_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getGf_za3lpa$ = function (v) {
    return this.getG_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getBf_za3lpa$ = function (v) {
    return this.getB_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getAf_za3lpa$ = function (v) {
    return this.getA_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getRd_za3lpa$ = function (v) {
    return this.getR_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getGd_za3lpa$ = function (v) {
    return this.getG_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getBd_za3lpa$ = function (v) {
    return this.getB_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getAd_za3lpa$ = function (v) {
    return this.getA_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.toRGBA_za3lpa$ = function (v) {
    return RGBA_getInstance().packFast_tjonv8$(this.getR_za3lpa$(v), this.getG_za3lpa$(v), this.getB_za3lpa$(v), this.getA_za3lpa$(v));
  };
  ColorFormat.prototype.packRGBA_za3lpa$ = function (rgba) {
    return this.pack_tjonv8$(RGBA_getInstance().getR_za3lpa$(rgba), RGBA_getInstance().getG_za3lpa$(rgba), RGBA_getInstance().getB_za3lpa$(rgba), RGBA_getInstance().getA_za3lpa$(rgba));
  };
  ColorFormat.prototype.unpackToRGBA_za3lpa$ = function (packed) {
    return RGBA_getInstance().packFast_tjonv8$(this.getR_za3lpa$(packed), this.getG_za3lpa$(packed), this.getB_za3lpa$(packed), this.getA_za3lpa$(packed));
  };
  ColorFormat.prototype.convertTo_slk207$ = function (color, target) {
    return target.pack_tjonv8$(this.getR_za3lpa$(color), this.getG_za3lpa$(color), this.getB_za3lpa$(color), this.getA_za3lpa$(color));
  };
  function ColorFormat$Companion() {
    ColorFormat$Companion_instance = this;
  }
  ColorFormat$Companion.prototype.clamp0_FF_za3lpa$ = function (v) {
    return v < 0 ? 0 : v > 255 ? 255 : v;
  };
  ColorFormat$Companion.prototype.clampf01_mx4ult$ = function (v) {
    return v < 0.0 ? 0.0 : v > 1.0 ? 1.0 : v;
  };
  ColorFormat$Companion.prototype.clampFF_za3lpa$ = function (a) {
    return Math_0.min(a, 255);
  };
  ColorFormat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorFormat$Companion_instance = null;
  function ColorFormat$Companion_getInstance() {
    if (ColorFormat$Companion_instance === null) {
      new ColorFormat$Companion();
    }
    return ColorFormat$Companion_instance;
  }
  ColorFormat.prototype.decodeInternal_pvkvsx$ = defineInlineFunction('korim-js.com.soywiz.korim.color.ColorFormat.decodeInternal_pvkvsx$', wrapFunction(function () {
    var color = _.com.soywiz.korim.color;
    return function (data, dataOffset, out, outOffset, size, read) {
      var tmp$;
      var io = dataOffset;
      var oo = outOffset;
      var bytesPerPixel = this.bytesPerPixel;
      for (var n = 0; n < size; n++) {
        var c = read(data, io);
        io = io + bytesPerPixel | 0;
        out[tmp$ = oo, oo = tmp$ + 1 | 0, tmp$] = color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c), this.getG_za3lpa$(c), this.getB_za3lpa$(c), this.getA_za3lpa$(c));
      }
    };
  }));
  ColorFormat.prototype.decode_c0jzf6$$default = function (data, dataOffset, out, outOffset, size, littleEndian) {
    var tmp$;
    tmp$ = this.bpp;
    if (tmp$ === 16)
      if (littleEndian) {
        var tmp$_0;
        var io = dataOffset;
        var oo = outOffset;
        var bytesPerPixel = this.bytesPerPixel;
        for (var n = 0; n < size; n++) {
          var c = readU16_le(data, io);
          io = io + bytesPerPixel | 0;
          out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c), this.getG_za3lpa$(c), this.getB_za3lpa$(c), this.getA_za3lpa$(c));
        }
      }
       else {
        var tmp$_1;
        var io_0 = dataOffset;
        var oo_0 = outOffset;
        var bytesPerPixel_0 = this.bytesPerPixel;
        for (var n_0 = 0; n_0 < size; n_0++) {
          var c_0 = readU16_be(data, io_0);
          io_0 = io_0 + bytesPerPixel_0 | 0;
          out[tmp$_1 = oo_0, oo_0 = tmp$_1 + 1 | 0, tmp$_1] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_0), this.getG_za3lpa$(c_0), this.getB_za3lpa$(c_0), this.getA_za3lpa$(c_0));
        }
      }
     else if (tmp$ === 24)
      if (littleEndian) {
        var tmp$_2;
        var io_1 = dataOffset;
        var oo_1 = outOffset;
        var bytesPerPixel_1 = this.bytesPerPixel;
        for (var n_1 = 0; n_1 < size; n_1++) {
          var c_1 = readU24_le(data, io_1);
          io_1 = io_1 + bytesPerPixel_1 | 0;
          out[tmp$_2 = oo_1, oo_1 = tmp$_2 + 1 | 0, tmp$_2] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_1), this.getG_za3lpa$(c_1), this.getB_za3lpa$(c_1), this.getA_za3lpa$(c_1));
        }
      }
       else {
        var tmp$_3;
        var io_2 = dataOffset;
        var oo_2 = outOffset;
        var bytesPerPixel_2 = this.bytesPerPixel;
        for (var n_2 = 0; n_2 < size; n_2++) {
          var c_2 = readU24_be(data, io_2);
          io_2 = io_2 + bytesPerPixel_2 | 0;
          out[tmp$_3 = oo_2, oo_2 = tmp$_3 + 1 | 0, tmp$_3] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_2), this.getG_za3lpa$(c_2), this.getB_za3lpa$(c_2), this.getA_za3lpa$(c_2));
        }
      }
     else if (tmp$ === 32)
      if (littleEndian) {
        var tmp$_4;
        var io_3 = dataOffset;
        var oo_3 = outOffset;
        var bytesPerPixel_3 = this.bytesPerPixel;
        for (var n_3 = 0; n_3 < size; n_3++) {
          var c_3 = readS32_le(data, io_3);
          io_3 = io_3 + bytesPerPixel_3 | 0;
          out[tmp$_4 = oo_3, oo_3 = tmp$_4 + 1 | 0, tmp$_4] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_3), this.getG_za3lpa$(c_3), this.getB_za3lpa$(c_3), this.getA_za3lpa$(c_3));
        }
      }
       else {
        var tmp$_5;
        var io_4 = dataOffset;
        var oo_4 = outOffset;
        var bytesPerPixel_4 = this.bytesPerPixel;
        for (var n_4 = 0; n_4 < size; n_4++) {
          var c_4 = readS32_be(data, io_4);
          io_4 = io_4 + bytesPerPixel_4 | 0;
          out[tmp$_5 = oo_4, oo_4 = tmp$_5 + 1 | 0, tmp$_5] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_4), this.getG_za3lpa$(c_4), this.getB_za3lpa$(c_4), this.getA_za3lpa$(c_4));
        }
      }
     else
      throw new IllegalArgumentException('Unsupported bpp ' + this.bpp);
  };
  ColorFormat.prototype.decode_c0jzf6$ = function (data, dataOffset, out, outOffset, size, littleEndian, callback$default) {
    if (littleEndian === void 0)
      littleEndian = true;
    callback$default ? callback$default(data, dataOffset, out, outOffset, size, littleEndian) : this.decode_c0jzf6$$default(data, dataOffset, out, outOffset, size, littleEndian);
  };
  ColorFormat.prototype.decode_exhmhv$$default = function (data, dataOffset, size, littleEndian) {
    var out = new Int32Array(size);
    this.decode_c0jzf6$(data, dataOffset, out, 0, size, littleEndian);
    return out;
  };
  ColorFormat.prototype.decode_exhmhv$ = function (data, dataOffset, size, littleEndian, callback$default) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (size === void 0)
      size = data.length / this.bytesPerPixel | 0;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(data, dataOffset, size, littleEndian) : this.decode_exhmhv$$default(data, dataOffset, size, littleEndian);
  };
  ColorFormat.prototype.decodeToBitmap32_qq690d$$default = function (width, height, data, dataOffset, littleEndian) {
    return new Bitmap32(width, height, this.decode_exhmhv$(data, dataOffset, Kotlin.imul(width, height), littleEndian));
  };
  ColorFormat.prototype.decodeToBitmap32_qq690d$ = function (width, height, data, dataOffset, littleEndian, callback$default) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(width, height, data, dataOffset, littleEndian) : this.decodeToBitmap32_qq690d$$default(width, height, data, dataOffset, littleEndian);
  };
  ColorFormat.prototype.decodeToBitmap32_131o2$$default = function (bmp, data, dataOffset, littleEndian) {
    this.decode_c0jzf6$(data, dataOffset, bmp.data, 0, bmp.area);
    return bmp;
  };
  ColorFormat.prototype.decodeToBitmap32_131o2$ = function (bmp, data, dataOffset, littleEndian, callback$default) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(bmp, data, dataOffset, littleEndian) : this.decodeToBitmap32_131o2$$default(bmp, data, dataOffset, littleEndian);
  };
  ColorFormat.prototype.encode_upcuk2$$default = function (colors, colorsOffset, out, outOffset, size, littleEndian) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      var ec = this.pack_tjonv8$(RGBA_getInstance().getR_za3lpa$(c), RGBA_getInstance().getG_za3lpa$(c), RGBA_getInstance().getB_za3lpa$(c), RGBA_getInstance().getA_za3lpa$(c));
      tmp$_0 = this.bpp;
      if (tmp$_0 === 16)
        if (littleEndian)
          write16_le(out, oo, ec);
        else
          write16_be(out, oo, ec);
      else if (tmp$_0 === 24)
        if (littleEndian)
          write24_le(out, oo, ec);
        else
          write24_be(out, oo, ec);
      else if (tmp$_0 === 32)
        if (littleEndian)
          write32_le(out, oo, ec);
        else
          write32_be(out, oo, ec);
      else
        throw new IllegalArgumentException('Unsupported bpp ' + this.bpp);
      oo = oo + this.bytesPerPixel | 0;
    }
  };
  ColorFormat.prototype.encode_upcuk2$ = function (colors, colorsOffset, out, outOffset, size, littleEndian, callback$default) {
    if (littleEndian === void 0)
      littleEndian = true;
    callback$default ? callback$default(colors, colorsOffset, out, outOffset, size, littleEndian) : this.encode_upcuk2$$default(colors, colorsOffset, out, outOffset, size, littleEndian);
  };
  ColorFormat.prototype.encode_mbw8y8$$default = function (colors, colorsOffset, size, littleEndian) {
    var out = new Int8Array(Kotlin.imul(size, this.bytesPerPixel));
    this.encode_upcuk2$(colors, colorsOffset, out, 0, size, littleEndian);
    return out;
  };
  ColorFormat.prototype.encode_mbw8y8$ = function (colors, colorsOffset, size, littleEndian, callback$default) {
    if (colorsOffset === void 0)
      colorsOffset = 0;
    if (size === void 0)
      size = colors.length;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(colors, colorsOffset, size, littleEndian) : this.encode_mbw8y8$$default(colors, colorsOffset, size, littleEndian);
  };
  ColorFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat',
    interfaces: [ColorFormatBase]
  };
  function ColorFormat16() {
    ColorFormat.call(this, 16);
  }
  ColorFormat16.prototype.encode_1zbdyj$ = function (colors, colorsOffset, out, outOffset, size) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = toShort(this.pack_tjonv8$(RGBA_getInstance().getR_za3lpa$(c), RGBA_getInstance().getG_za3lpa$(c), RGBA_getInstance().getB_za3lpa$(c), RGBA_getInstance().getA_za3lpa$(c)));
    }
  };
  ColorFormat16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat16',
    interfaces: [ColorFormat]
  };
  function ColorFormat24() {
    ColorFormat.call(this, 24);
  }
  ColorFormat24.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat24',
    interfaces: [ColorFormat]
  };
  function ColorFormat32() {
    ColorFormat.call(this, 32);
  }
  ColorFormat32.prototype.encode_lvhpry$ = function (colors, colorsOffset, out, outOffset, size) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = this.pack_tjonv8$(RGBA_getInstance().getR_za3lpa$(c), RGBA_getInstance().getG_za3lpa$(c), RGBA_getInstance().getB_za3lpa$(c), RGBA_getInstance().getA_za3lpa$(c));
    }
  };
  ColorFormat32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat32',
    interfaces: [ColorFormat]
  };
  function ColorTransform(_mR, _mG, _mB, _mA, _aR, _aG, _aB, _aA) {
    ColorTransform$Companion_getInstance();
    if (_mR === void 0)
      _mR = 1.0;
    if (_mG === void 0)
      _mG = 1.0;
    if (_mB === void 0)
      _mB = 1.0;
    if (_mA === void 0)
      _mA = 1.0;
    if (_aR === void 0)
      _aR = 0;
    if (_aG === void 0)
      _aG = 0;
    if (_aB === void 0)
      _aB = 0;
    if (_aA === void 0)
      _aA = 0;
    this._mR_0 = _mR;
    this._mG_0 = _mG;
    this._mB_0 = _mB;
    this._mA_0 = _mA;
    this._aR_0 = _aR;
    this._aG_0 = _aG;
    this._aB_0 = _aB;
    this._aA_0 = _aA;
    this.dirty_0 = true;
    this._colorMul_0 = 0;
    this._colorAdd_0 = 0;
  }
  function ColorTransform$Companion() {
    ColorTransform$Companion_instance = this;
    this.identity = new ColorTransform();
  }
  ColorTransform$Companion.prototype.Multiply_6y0v78$ = function (r, g, b, a) {
    return new ColorTransform(r, g, b, a, 0, 0, 0, 0);
  };
  ColorTransform$Companion.prototype.Add_tjonv8$ = function (r, g, b, a) {
    return new ColorTransform(numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToInt(r), numberToInt(g), numberToInt(b), numberToInt(a));
  };
  ColorTransform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorTransform$Companion_instance = null;
  function ColorTransform$Companion_getInstance() {
    if (ColorTransform$Companion_instance === null) {
      new ColorTransform$Companion();
    }
    return ColorTransform$Companion_instance;
  }
  ColorTransform.prototype.setToInterpolated_v05y7o$ = function (l, r, ratio) {
    return this.setTo_s3cjg4$(interpolate(ratio, l.mR, r.mR), interpolate(ratio, l.mG, r.mG), interpolate(ratio, l.mB, r.mB), interpolate(ratio, l.mA, r.mA), interpolate_0(ratio, l.aR, r.aR), interpolate_0(ratio, l.aG, r.aG), interpolate_0(ratio, l.aB, r.aB), interpolate_0(ratio, l.aA, r.aA));
  };
  ColorTransform.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    return (new ColorTransform()).setToInterpolated_v05y7o$(this, other, ratio);
  };
  ColorTransform.prototype.computeColors_0 = function () {
    if (this.dirty_0) {
      this.dirty_0 = false;
      this._colorMul_0 = RGBA_getInstance().packf_7b5o5w$(this._mR_0, this._mG_0, this._mB_0, this._mA_0);
      this._colorAdd_0 = this.packAdd_0(this._aR_0, this._aG_0, this._aB_0, this._aA_0);
    }
    return this;
  };
  ColorTransform.prototype.packAdd_0 = function (r, g, b, a) {
    return this.packAddComponent_0(r) << 0 | this.packAddComponent_0(g) << 8 | this.packAddComponent_0(b) << 16 | this.packAddComponent_0(a) << 24;
  };
  ColorTransform.prototype.packAddComponent_0 = function (v) {
    return clamp(127 + (v >> 1) | 0, 0, 255);
  };
  ColorTransform.prototype.unpackAddComponent_0 = function (v) {
    return (v - 127 | 0) * 2 | 0;
  };
  Object.defineProperty(ColorTransform.prototype, 'colorMul', {
    get: function () {
      return this.computeColors_0()._colorMul_0;
    },
    set: function (v) {
      this._mR_0 = RGBA_getInstance().getFastRf_za3lpa$(v);
      this._mG_0 = RGBA_getInstance().getFastGf_za3lpa$(v);
      this._mB_0 = RGBA_getInstance().getFastBf_za3lpa$(v);
      this._mA_0 = RGBA_getInstance().getFastAf_za3lpa$(v);
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'colorAdd', {
    get: function () {
      return this.computeColors_0()._colorAdd_0;
    },
    set: function (v) {
      this._aR_0 = this.unpackAddComponent_0(RGBA_getInstance().getFastR_za3lpa$(v));
      this._aG_0 = this.unpackAddComponent_0(RGBA_getInstance().getFastG_za3lpa$(v));
      this._aB_0 = this.unpackAddComponent_0(RGBA_getInstance().getFastB_za3lpa$(v));
      this._aA_0 = this.unpackAddComponent_0(RGBA_getInstance().getFastA_za3lpa$(v));
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mR', {
    get: function () {
      return this._mR_0;
    },
    set: function (v) {
      this._mR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mG', {
    get: function () {
      return this._mG_0;
    },
    set: function (v) {
      this._mG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mB', {
    get: function () {
      return this._mB_0;
    },
    set: function (v) {
      this._mB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mA', {
    get: function () {
      return this._mA_0;
    },
    set: function (v) {
      this._mA_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mRf', {
    get: function () {
      return this._mR_0;
    },
    set: function (v) {
      this._mR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mGf', {
    get: function () {
      return this._mG_0;
    },
    set: function (v) {
      this._mG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mBf', {
    get: function () {
      return this._mB_0;
    },
    set: function (v) {
      this._mB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mAf', {
    get: function () {
      return this._mA_0;
    },
    set: function (v) {
      this._mA_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aR', {
    get: function () {
      return this._aR_0;
    },
    set: function (v) {
      this._aR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aG', {
    get: function () {
      return this._aG_0;
    },
    set: function (v) {
      this._aG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aB', {
    get: function () {
      return this._aB_0;
    },
    set: function (v) {
      this._aB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aA', {
    get: function () {
      return this._aA_0;
    },
    set: function (v) {
      this._aA_0 = v;
      this.dirty_0 = true;
    }
  });
  ColorTransform.prototype.setMultiplyTo_6y0v78$ = function (mR, mG, mB, mA) {
    if (mR === void 0)
      mR = 1.0;
    if (mG === void 0)
      mG = 1.0;
    if (mB === void 0)
      mB = 1.0;
    if (mA === void 0)
      mA = 1.0;
    this._mR_0 = mR;
    this._mG_0 = mG;
    this._mB_0 = mB;
    this._mA_0 = mA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.setAddTo_tjonv8$ = function (aR, aG, aB, aA) {
    if (aR === void 0)
      aR = 0;
    if (aG === void 0)
      aG = 0;
    if (aB === void 0)
      aB = 0;
    if (aA === void 0)
      aA = 0;
    this._aR_0 = aR;
    this._aG_0 = aG;
    this._aB_0 = aB;
    this._aA_0 = aA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.setTo_s3cjg4$ = function (mR, mG, mB, mA, aR, aG, aB, aA) {
    if (mR === void 0)
      mR = 1.0;
    if (mG === void 0)
      mG = 1.0;
    if (mB === void 0)
      mB = 1.0;
    if (mA === void 0)
      mA = 1.0;
    if (aR === void 0)
      aR = 0;
    if (aG === void 0)
      aG = 0;
    if (aB === void 0)
      aB = 0;
    if (aA === void 0)
      aA = 0;
    this._mR_0 = mR;
    this._mG_0 = mG;
    this._mB_0 = mB;
    this._mA_0 = mA;
    this._aR_0 = aR;
    this._aG_0 = aG;
    this._aB_0 = aB;
    this._aA_0 = aA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.copyFrom_54kf7e$ = function (t) {
    this._mR_0 = t._mR_0;
    this._mG_0 = t._mG_0;
    this._mB_0 = t._mB_0;
    this._mA_0 = t._mA_0;
    this._aR_0 = t._aR_0;
    this._aG_0 = t._aG_0;
    this._aB_0 = t._aB_0;
    this._aA_0 = t._aA_0;
    this.dirty_0 = t.dirty_0;
    this._colorAdd_0 = t._colorAdd_0;
    this._colorMul_0 = t._colorMul_0;
    return this;
  };
  ColorTransform.prototype.setToConcat_k8ycrk$ = function (l, r) {
    return this.setTo_s3cjg4$(l.mR * r.mR, l.mG * r.mG, l.mB * r.mB, l.mA * r.mA, l.aR + r.aR | 0, l.aG + r.aG | 0, l.aB + r.aB | 0, l.aA + r.aA | 0);
  };
  ColorTransform.prototype.toString = function () {
    return 'ColorTransform(*[' + get_niceStr(this.mR) + ', ' + get_niceStr(this.mG) + ', ' + get_niceStr(this.mB) + ', ' + get_niceStr(this.mA) + ']+[' + this.aR + ', ' + this.aG + ', ' + this.aB + ', ' + this.aA + '])';
  };
  ColorTransform.prototype.isIdentity = function () {
    return this.mR === 1.0 && this.mG === 1.0 && this.mB === 1.0 && this.mA === 1.0 && this.aR === 0 && this.aG === 0 && this.aB === 0 && this.aA === 0;
  };
  ColorTransform.prototype.hasJustAlpha = function () {
    return this.mR === 1.0 && this.mG === 1.0 && this.mB === 1.0 && this.aR === 0 && this.aG === 0 && this.aB === 0 && this.aA === 0;
  };
  ColorTransform.prototype.setToIdentity = function () {
    return this.setTo_s3cjg4$(1.0, 1.0, 1.0, 1.0, 0, 0, 0, 0);
  };
  ColorTransform.prototype.applyToColor_za3lpa$ = function (color) {
    var r = numberToInt(RGBA_getInstance().getFastR_za3lpa$(color) * this.mR + this.aR);
    var g = numberToInt(RGBA_getInstance().getFastG_za3lpa$(color) * this.mG + this.aG);
    var b = numberToInt(RGBA_getInstance().getFastB_za3lpa$(color) * this.mB + this.aB);
    var a = numberToInt(RGBA_getInstance().getFastA_za3lpa$(color) * this.mA + this.aA);
    return RGBA_getInstance().pack_tjonv8$(r, g, b, a);
  };
  ColorTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorTransform',
    interfaces: [Interpolable, MutableInterpolable]
  };
  ColorTransform.prototype.component1_0 = function () {
    return this._mR_0;
  };
  ColorTransform.prototype.component2_0 = function () {
    return this._mG_0;
  };
  ColorTransform.prototype.component3_0 = function () {
    return this._mB_0;
  };
  ColorTransform.prototype.component4_0 = function () {
    return this._mA_0;
  };
  ColorTransform.prototype.component5_0 = function () {
    return this._aR_0;
  };
  ColorTransform.prototype.component6_0 = function () {
    return this._aG_0;
  };
  ColorTransform.prototype.component7_0 = function () {
    return this._aB_0;
  };
  ColorTransform.prototype.component8_0 = function () {
    return this._aA_0;
  };
  ColorTransform.prototype.copy_s3cjg4$ = function (_mR, _mG, _mB, _mA, _aR, _aG, _aB, _aA) {
    return new ColorTransform(_mR === void 0 ? this._mR_0 : _mR, _mG === void 0 ? this._mG_0 : _mG, _mB === void 0 ? this._mB_0 : _mB, _mA === void 0 ? this._mA_0 : _mA, _aR === void 0 ? this._aR_0 : _aR, _aG === void 0 ? this._aG_0 : _aG, _aB === void 0 ? this._aB_0 : _aB, _aA === void 0 ? this._aA_0 : _aA);
  };
  ColorTransform.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._mR_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mG_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mB_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mA_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aR_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aG_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aB_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aA_0) | 0;
    return result;
  };
  ColorTransform.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._mR_0, other._mR_0) && Kotlin.equals(this._mG_0, other._mG_0) && Kotlin.equals(this._mB_0, other._mB_0) && Kotlin.equals(this._mA_0, other._mA_0) && Kotlin.equals(this._aR_0, other._aR_0) && Kotlin.equals(this._aG_0, other._aG_0) && Kotlin.equals(this._aB_0, other._aB_0) && Kotlin.equals(this._aA_0, other._aA_0)))));
  };
  var ColorTransform_0 = defineInlineFunction('korim-js.com.soywiz.korim.color.ColorTransform_6tck58$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    var ColorTransform_init = _.com.soywiz.korim.color.ColorTransform;
    return function (mR, mG, mB, mA, aR, aG, aB, aA) {
      return new ColorTransform_init(numberToDouble(mR), numberToDouble(mG), numberToDouble(mB), numberToDouble(mA), numberToInt(aR), numberToInt(aG), numberToInt(aB), numberToInt(aA));
    };
  }));
  function Colors() {
    Colors_instance = this;
    this.WHITE = RGBA_getInstance().packFast_tjonv8$(255, 255, 255, 255);
    this.BLACK = RGBA_getInstance().packFast_tjonv8$(0, 0, 0, 255);
    this.RED = RGBA_getInstance().packFast_tjonv8$(255, 0, 0, 255);
    this.GREEN = RGBA_getInstance().packFast_tjonv8$(0, 255, 0, 255);
    this.BLUE = RGBA_getInstance().packFast_tjonv8$(0, 0, 255, 255);
    this.TRANSPARENT_BLACK = RGBA_getInstance().packFast_tjonv8$(0, 0, 0, 0);
    this.TRANSPARENT_WHITE = RGBA_getInstance().packFast_tjonv8$(0, 0, 0, 0);
  }
  Colors.prototype.get_61zpoe$ = function (s) {
    if (startsWith(s, '#')) {
      var ss = substr(s, 1);
      var N = ss.length >= 6 ? 2 : 1;
      var comps = ss.length / N | 0;
      var scale = N === 1 ? 1.0 / 15.0 : 1.0 / 255.0;
      var rf = toInt(substr_0(ss, N * 0 | 0, N), 16) * scale;
      var gf = toInt(substr_0(ss, N * 1 | 0, N), 16) * scale;
      var bf = toInt(substr_0(ss, N * 2 | 0, N), 16) * scale;
      var af = comps >= 4 ? toInt(substr_0(ss, N * 3 | 0, N), 16) * scale : 1.0;
      return RGBA_getInstance().packf_6y0v78$(rf, gf, bf, af);
    }
     else {
      invalidOp('Unsupported color ' + s);
    }
  };
  Colors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Colors',
    interfaces: []
  };
  var Colors_instance = null;
  function Colors_getInstance() {
    if (Colors_instance === null) {
      new Colors();
    }
    return Colors_instance;
  }
  function NamedColors() {
    NamedColors_instance = this;
    this.colorsByName = mapOf([to('black', RGBA_getInstance().invoke_tjonv8$(0, 0, 0, 255)), to('white', RGBA_getInstance().invoke_tjonv8$(255, 255, 255, 255)), to('red', RGBA_getInstance().invoke_tjonv8$(255, 0, 0, 255)), to('green', RGBA_getInstance().invoke_tjonv8$(0, 128, 0, 255)), to('blue', RGBA_getInstance().invoke_tjonv8$(0, 0, 255, 255)), to('lime', RGBA_getInstance().invoke_tjonv8$(0, 255, 0, 255)), to('orange', RGBA_getInstance().invoke_tjonv8$(255, 165, 0, 255)), to('pink', RGBA_getInstance().invoke_tjonv8$(255, 192, 203, 255))]);
  }
  NamedColors.prototype.get_bm4lxs$ = function (str, default_0) {
    if (default_0 === void 0)
      default_0 = Colors_getInstance().RED;
    var tmp$, tmp$_0;
    if (startsWith(str, '#')) {
      var hex = substr(str, 1);
      var r;
      var g;
      var b;
      var a;
      tmp$ = hex.length;
      if (tmp$ === 3) {
        r = (toInt(substr_0(hex, 0, 1), 16) * 255 | 0) / 15 | 0;
        g = (toInt(substr_0(hex, 1, 1), 16) * 255 | 0) / 15 | 0;
        b = (toInt(substr_0(hex, 2, 1), 16) * 255 | 0) / 15 | 0;
        a = 255;
      }
       else if (tmp$ === 6) {
        r = toInt(substr_0(hex, 0, 2), 16);
        g = toInt(substr_0(hex, 2, 2), 16);
        b = toInt(substr_0(hex, 4, 2), 16);
        a = 255;
      }
       else {
        r = 0;
        g = 0;
        b = 0;
        a = 255;
      }
      return RGBA_getInstance().pack_tjonv8$(r, g, b, a);
    }
     else {
      return (tmp$_0 = this.colorsByName.get_11rb$(str.toLowerCase())) != null ? tmp$_0 : default_0;
    }
  };
  NamedColors.prototype.toHtmlString_za3lpa$ = function (color) {
    return 'RGBA(' + toString(RGBA_getInstance().getR_za3lpa$(color)) + ',' + toString(RGBA_getInstance().getG_za3lpa$(color)) + ',' + toString(RGBA_getInstance().getB_za3lpa$(color)) + ',' + toString(RGBA_getInstance().getAf_za3lpa$(color)) + ')';
  };
  NamedColors.prototype.toHtmlStringSimple_za3lpa$ = function (color) {
    return format('#%02x%02x%02x', [RGBA_getInstance().getR_za3lpa$(color), RGBA_getInstance().getG_za3lpa$(color), RGBA_getInstance().getB_za3lpa$(color)]);
  };
  NamedColors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NamedColors',
    interfaces: []
  };
  var NamedColors_instance = null;
  function NamedColors_getInstance() {
    if (NamedColors_instance === null) {
      new NamedColors();
    }
    return NamedColors_instance;
  }
  function PaletteColorFormat(palette) {
    ColorFormat.call(this, 8);
    this.palette = palette;
  }
  PaletteColorFormat.prototype.getR_za3lpa$ = function (v) {
    return RGBA_getInstance().getFastR_za3lpa$(this.palette[v]);
  };
  PaletteColorFormat.prototype.getG_za3lpa$ = function (v) {
    return RGBA_getInstance().getFastG_za3lpa$(this.palette[v]);
  };
  PaletteColorFormat.prototype.getB_za3lpa$ = function (v) {
    return RGBA_getInstance().getFastB_za3lpa$(this.palette[v]);
  };
  PaletteColorFormat.prototype.getA_za3lpa$ = function (v) {
    return RGBA_getInstance().getFastA_za3lpa$(this.palette[v]);
  };
  PaletteColorFormat.prototype.pack_tjonv8$ = function (r, g, b, a) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented. Must locate best color in palette');
  };
  PaletteColorFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaletteColorFormat',
    interfaces: [ColorFormat]
  };
  function RGB() {
    RGB_instance = this;
    ColorFormat24.call(this);
  }
  RGB.prototype.getR_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  RGB.prototype.getG_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  RGB.prototype.getB_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  RGB.prototype.getA_za3lpa$ = function (v) {
    return 255;
  };
  RGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insert(insert(insert(0, r, 0, 8), g, 8, 8), b, 16, 8);
  };
  RGB.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGB',
    interfaces: [ColorFormat24]
  };
  var RGB_instance = null;
  function RGB_getInstance() {
    if (RGB_instance === null) {
      new RGB();
    }
    return RGB_instance;
  }
  function BGR() {
    BGR_instance = this;
    ColorFormat24.call(this);
  }
  BGR.prototype.getR_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  BGR.prototype.getG_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  BGR.prototype.getB_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  BGR.prototype.getA_za3lpa$ = function (v) {
    return 255;
  };
  BGR.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insert(insert(insert(0, r, 16, 8), g, 8, 8), b, 0, 8);
  };
  BGR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR',
    interfaces: [ColorFormat24]
  };
  var BGR_instance = null;
  function BGR_getInstance() {
    if (BGR_instance === null) {
      new BGR();
    }
    return BGR_instance;
  }
  function RGBA() {
    RGBA_instance = this;
    ColorFormat32.call(this);
  }
  RGBA.prototype.getR_za3lpa$ = function (v) {
    return this.getFastR_za3lpa$(v);
  };
  RGBA.prototype.getG_za3lpa$ = function (v) {
    return this.getFastG_za3lpa$(v);
  };
  RGBA.prototype.getB_za3lpa$ = function (v) {
    return this.getFastB_za3lpa$(v);
  };
  RGBA.prototype.getA_za3lpa$ = function (v) {
    return this.getFastA_za3lpa$(v);
  };
  RGBA.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(r) << 0 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(g) << 8 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(b) << 16 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(a) << 24;
  };
  RGBA.prototype.getFastR_za3lpa$ = function (v) {
    return v >>> 0 & 255;
  };
  RGBA.prototype.getFastG_za3lpa$ = function (v) {
    return v >>> 8 & 255;
  };
  RGBA.prototype.getFastB_za3lpa$ = function (v) {
    return v >>> 16 & 255;
  };
  RGBA.prototype.getFastA_za3lpa$ = function (v) {
    return v >>> 24 & 255;
  };
  RGBA.prototype.getFastRf_za3lpa$ = function (v) {
    return (v >>> 0 & 255) / 255;
  };
  RGBA.prototype.getFastGf_za3lpa$ = function (v) {
    return (v >>> 8 & 255) / 255;
  };
  RGBA.prototype.getFastBf_za3lpa$ = function (v) {
    return (v >>> 16 & 255) / 255;
  };
  RGBA.prototype.getFastAf_za3lpa$ = function (v) {
    return (v >>> 24 & 255) / 255;
  };
  RGBA.prototype.getFastRd_za3lpa$ = function (v) {
    return (v >>> 0 & 255) / 255;
  };
  RGBA.prototype.getFastGd_za3lpa$ = function (v) {
    return (v >>> 8 & 255) / 255;
  };
  RGBA.prototype.getFastBd_za3lpa$ = function (v) {
    return (v >>> 16 & 255) / 255;
  };
  RGBA.prototype.getFastAd_za3lpa$ = function (v) {
    return (v >>> 24 & 255) / 255;
  };
  RGBA.prototype.getRGB_za3lpa$ = function (v) {
    return v & 16777215;
  };
  RGBA.prototype.multipliedByAlpha_za3lpa$ = function (v) {
    return this.premultiplyFast_za3lpa$(v);
  };
  RGBA.prototype.toHexString_za3lpa$ = function (v) {
    return format('#%02x%02x%02x%02x', [this.getFastR_za3lpa$(v), this.getFastG_za3lpa$(v), this.getFastB_za3lpa$(v), this.getFastA_za3lpa$(v)]);
  };
  RGBA.prototype.toHtmlColor_za3lpa$ = function (v) {
    return 'rgba(' + this.getFastR_za3lpa$(v) + ', ' + this.getFastG_za3lpa$(v) + ', ' + this.getFastB_za3lpa$(v) + ', ' + this.getFastAf_za3lpa$(v) + ')';
  };
  RGBA.prototype.premultiply_za3lpa$ = function (v) {
    return this.premultiplyFast_za3lpa$(v);
  };
  RGBA.prototype.premultiplyAccurate_za3lpa$ = function (v) {
    var a1 = this.getFastA_za3lpa$(v);
    var af = a1 / 255.0;
    return this.packFast_tjonv8$(numberToInt(this.getFastR_za3lpa$(v) * af), numberToInt(this.getFastG_za3lpa$(v) * af), numberToInt(this.getFastB_za3lpa$(v) * af), a1);
  };
  RGBA.prototype.premultiplyFast_za3lpa$ = function (v) {
    var A = (v >>> 24) + 1 | 0;
    var RB = Kotlin.imul(v & 16711935, A) >>> 8 & 16711935;
    var G = Kotlin.imul(v & 65280, A) >>> 8 & 65280;
    return v & ~16777215 | RB | G;
  };
  RGBA.prototype.mutliplyByAlpha_5wr77w$ = function (v, alpha) {
    return RGBA_getInstance().pack_tjonv8$(this.getFastR_za3lpa$(v), this.getFastG_za3lpa$(v), this.getFastB_za3lpa$(v), numberToInt(this.getFastA_za3lpa$(v) * alpha));
  };
  RGBA.prototype.depremultiply_za3lpa$ = function (v) {
    return this.depremultiplyFast_za3lpa$(v);
  };
  RGBA.prototype.depremultiplyAccurate_za3lpa$ = function (v) {
    var alpha = this.getAd_za3lpa$(v);
    if (alpha === 0.0) {
      return Colors_getInstance().TRANSPARENT_WHITE;
    }
     else {
      var ialpha = 1.0 / alpha;
      return this.pack_tjonv8$(numberToInt(this.getFastR_za3lpa$(v) * ialpha), numberToInt(this.getFastG_za3lpa$(v) * ialpha), numberToInt(this.getFastB_za3lpa$(v) * ialpha), this.getFastA_za3lpa$(v));
    }
  };
  RGBA.prototype.clampf1_yrwdxr$ = function ($receiver) {
    return $receiver > 1.0 ? 1.0 : $receiver;
  };
  RGBA.prototype.clamp255_s8ev3n$ = function ($receiver) {
    return $receiver > 255 ? 255 : $receiver;
  };
  RGBA.prototype.depremultiplyFast_za3lpa$ = function (v) {
    var A = v >>> 24;
    var alpha = A / 255.0;
    if (alpha === 0.0)
      return 0;
    var ialpha = 1.0 / alpha;
    var R = this.clamp255_s8ev3n$(numberToInt(this.getFastR_za3lpa$(v) * ialpha));
    var G = this.clamp255_s8ev3n$(numberToInt(this.getFastG_za3lpa$(v) * ialpha));
    var B = this.clamp255_s8ev3n$(numberToInt(this.getFastB_za3lpa$(v) * ialpha));
    return this.packFast_tjonv8$(R, G, B, A);
  };
  RGBA.prototype.depremultiplyFastOld_za3lpa$ = function (v) {
    var A = v >>> 24;
    if (A === 0)
      return 0;
    var R = clamp(((v >>> 0 & 255) * 255 | 0) / A | 0, 0, 255);
    var G = clamp(((v >>> 8 & 255) * 255 | 0) / A | 0, 0, 255);
    var B = clamp(((v >>> 16 & 255) * 255 | 0) / A | 0, 0, 255);
    return this.packFast_tjonv8$(R, G, B, A);
  };
  RGBA.prototype.depremultiplyFaster_za3lpa$ = function (v) {
    var A = v >>> 24;
    var A1 = A + 1 | 0;
    var R = (((v >>> 0 & 255) << 8) / A1 | 0) & 255;
    var G = (((v >>> 8 & 255) << 8) / A1 | 0) & 255;
    var B = (((v >>> 16 & 255) << 8) / A1 | 0) & 255;
    return this.packFast_tjonv8$(R, G, B, A);
  };
  RGBA.prototype.depremultiplyFastest_za3lpa$ = function (v) {
    var A = (v >>> 24) + 1 | 0;
    var R = (((v & 255) << 8) / A | 0) & 240;
    var G = (((v & 65280) << 8) / A | 0) & 65280;
    var B = (((v & 16711680) << 8) / A | 0) & 16711680;
    return v & ~16777215 | B | G | R;
  };
  RGBA.prototype.packFast_tjonv8$ = function (r, g, b, a) {
    return r << 0 | g << 8 | b << 16 | a << 24;
  };
  RGBA.prototype.packfFast_7b5o5w$ = function (r, g, b, a) {
    return numberToInt(r * 255) << 0 | numberToInt(g * 255) << 8 | numberToInt(b * 255) << 16 | numberToInt(a * 255) << 24;
  };
  RGBA.prototype.packRGB_A_vux9f0$ = function (rgb, a) {
    return rgb & 16777215 | a << 24;
  };
  RGBA.prototype.blendComponent_224j3y$ = function (c1, c2, factor) {
    return numberToInt(c1 * (1.0 - factor) + c2 * factor) & 255;
  };
  RGBA.prototype.blendRGB_qt1dr2$ = function (c1, c2, factor256) {
    var f1 = 256 - factor256 | 0;
    return (Kotlin.imul(c1 & 16711935, f1) + Kotlin.imul(c2 & 16711935, factor256) & (new Kotlin.Long(-16711936, 0)).toInt() | Kotlin.imul(c1 & 65280, f1) + Kotlin.imul(c2 & 65280, factor256) & 16711680) >>> 8;
  };
  RGBA.prototype.blend_qt1dr2$ = function (c1, c2, factor) {
    return this.blendRGB_qt1dr2$(c1, c2, factor);
  };
  RGBA.prototype.blend_224j3y$ = function (c1, c2, factor) {
    return this.blendRGB_224j3y$(c1, c2, factor);
  };
  RGBA.prototype.blendRGB_224j3y$ = function (c1, c2, factor) {
    return this.blendRGB_qt1dr2$(c1, c2, numberToInt(factor * 256));
  };
  RGBA.prototype.blendRGBA_224j3y$ = function (c1, c2, factor) {
    var RGB = this.blendRGB_qt1dr2$(c1 & 16777215, c2 & 16777215, numberToInt(factor * 256));
    var A = this.blendComponent_224j3y$(this.getFastA_za3lpa$(c1), this.getFastA_za3lpa$(c2), factor);
    return this.packRGB_A_vux9f0$(RGB, A);
  };
  RGBA.prototype.invoke_tjonv8$ = function (r, g, b, a) {
    return this.pack_tjonv8$(r, g, b, a);
  };
  RGBA.prototype.rgbaToBgra_za3lpa$ = function (v) {
    return v << 16 & 16711680 | v >> 16 & 255 | v & (new Kotlin.Long(-16711936, 0)).toInt();
  };
  RGBA.prototype.d2i_0 = function (v) {
    return numberToInt(ColorFormat$Companion_getInstance().clampf01_mx4ult$(v) * 255);
  };
  RGBA.prototype.f2i_0 = function (v) {
    return numberToInt(ColorFormat$Companion_getInstance().clampf01_mx4ult$(v) * 255);
  };
  RGBA.prototype.packf_6y0v78$ = function (r, g, b, a) {
    return this.packFast_tjonv8$(this.d2i_0(r), this.d2i_0(g), this.d2i_0(b), this.d2i_0(a));
  };
  RGBA.prototype.packf_7b5o5w$ = function (r, g, b, a) {
    return this.packFast_tjonv8$(this.f2i_0(r), this.f2i_0(g), this.f2i_0(b), this.f2i_0(a));
  };
  RGBA.prototype.packf_24o109$ = function (rgb, a) {
    return this.packRGB_A_vux9f0$(rgb, this.f2i_0(a));
  };
  RGBA.prototype.mix_vux9f0$ = function (dst, src) {
    var tmp$;
    var srcA = RGBA_getInstance().getFastA_za3lpa$(src);
    if (srcA === 0)
      tmp$ = dst;
    else if (srcA === 255)
      tmp$ = src;
    else {
      tmp$ = RGBA_getInstance().packRGB_A_vux9f0$(this.blendRGB_qt1dr2$(dst, src, srcA + 1 | 0), ColorFormat$Companion_getInstance().clampFF_za3lpa$(RGBA_getInstance().getFastA_za3lpa$(dst) + srcA | 0));
    }
    return tmp$;
  };
  RGBA.prototype.multiply_vux9f0$ = function (c1, c2) {
    return RGBA_getInstance().pack_tjonv8$(Kotlin.imul(RGBA_getInstance().getFastR_za3lpa$(c1), RGBA_getInstance().getFastR_za3lpa$(c2)) / 255 | 0, Kotlin.imul(RGBA_getInstance().getFastG_za3lpa$(c1), RGBA_getInstance().getFastG_za3lpa$(c2)) / 255 | 0, Kotlin.imul(RGBA_getInstance().getFastB_za3lpa$(c1), RGBA_getInstance().getFastB_za3lpa$(c2)) / 255 | 0, Kotlin.imul(RGBA_getInstance().getFastA_za3lpa$(c1), RGBA_getInstance().getFastA_za3lpa$(c2)) / 255 | 0);
  };
  RGBA.prototype.blendRGBAFastAlreadyPremultiplied_05_vux9f0$ = function (c1, c2) {
    var RB = (c1 & 16711935) + (c2 & 16711935) >>> 1 & 16711935;
    var G = (c1 & 65280) + (c2 & 65280) >>> 1 & 65280;
    var A = (c1 >>> 24) + (c2 >>> 24) >>> 1 & 255;
    return A << 24 | RB | G;
  };
  RGBA.prototype.blendRGBAFastAlreadyPremultiplied_05_tjonv8$ = function (c1, c2, c3, c4) {
    var RB = (c1 & 16711935) + (c2 & 16711935) + (c3 & 16711935) + (c4 & 16711935) >>> 2 & 16711935;
    var G = (c1 & 65280) + (c2 & 65280) + (c3 & 65280) + (c4 & 65280) >>> 2 & 65280;
    var A = (c1 >>> 24) + (c2 >>> 24) + (c3 >>> 24) + (c4 >>> 24) >>> 2 & 255;
    return A << 24 | RB | G;
  };
  RGBA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGBA',
    interfaces: [ColorFormat32]
  };
  var RGBA_instance = null;
  function RGBA_getInstance() {
    if (RGBA_instance === null) {
      new RGBA();
    }
    return RGBA_instance;
  }
  function RGBA_4444() {
    RGBA_4444_instance = this;
    ColorFormat16.call(this);
    this.$delegate_kmfwcy$_0 = new ColorFormatBase$Mixin(0, 4, 4, 4, 8, 4, 12, 4);
  }
  RGBA_4444.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getA_za3lpa$(v);
  };
  RGBA_4444.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getB_za3lpa$(v);
  };
  RGBA_4444.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getG_za3lpa$(v);
  };
  RGBA_4444.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getR_za3lpa$(v);
  };
  RGBA_4444.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_kmfwcy$_0.pack_tjonv8$(r, g, b, a);
  };
  RGBA_4444.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGBA_4444',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var RGBA_4444_instance = null;
  function RGBA_4444_getInstance() {
    if (RGBA_4444_instance === null) {
      new RGBA_4444();
    }
    return RGBA_4444_instance;
  }
  function RGBA_5551() {
    RGBA_5551_instance = this;
    ColorFormat16.call(this);
    this.$delegate_kmf8ly$_0 = new ColorFormatBase$Mixin(0, 5, 5, 5, 10, 5, 15, 1);
  }
  RGBA_5551.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getA_za3lpa$(v);
  };
  RGBA_5551.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getB_za3lpa$(v);
  };
  RGBA_5551.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getG_za3lpa$(v);
  };
  RGBA_5551.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getR_za3lpa$(v);
  };
  RGBA_5551.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_kmf8ly$_0.pack_tjonv8$(r, g, b, a);
  };
  RGBA_5551.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGBA_5551',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var RGBA_5551_instance = null;
  function RGBA_5551_getInstance() {
    if (RGBA_5551_instance === null) {
      new RGBA_5551();
    }
    return RGBA_5551_instance;
  }
  function RGB_555() {
    RGB_555_instance = this;
    ColorFormat16.call(this);
    this.$delegate_x15h52$_0 = new ColorFormatBase$Mixin(0, 5, 5, 5, 10, 5, 15, 0);
  }
  RGB_555.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getA_za3lpa$(v);
  };
  RGB_555.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getB_za3lpa$(v);
  };
  RGB_555.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getG_za3lpa$(v);
  };
  RGB_555.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getR_za3lpa$(v);
  };
  RGB_555.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_x15h52$_0.pack_tjonv8$(r, g, b, a);
  };
  RGB_555.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGB_555',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var RGB_555_instance = null;
  function RGB_555_getInstance() {
    if (RGB_555_instance === null) {
      new RGB_555();
    }
    return RGB_555_instance;
  }
  function RGB_565() {
    RGB_565_instance = this;
    ColorFormat16.call(this);
    this.$delegate_x15h5x$_0 = new ColorFormatBase$Mixin(0, 5, 5, 6, 11, 5, 15, 0);
  }
  RGB_565.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getA_za3lpa$(v);
  };
  RGB_565.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getB_za3lpa$(v);
  };
  RGB_565.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getG_za3lpa$(v);
  };
  RGB_565.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getR_za3lpa$(v);
  };
  RGB_565.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_x15h5x$_0.pack_tjonv8$(r, g, b, a);
  };
  RGB_565.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RGB_565',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var RGB_565_instance = null;
  function RGB_565_getInstance() {
    if (RGB_565_instance === null) {
      new RGB_565();
    }
    return RGB_565_instance;
  }
  function BGRA_4444() {
    BGRA_4444_instance = this;
    ColorFormat16.call(this);
    this.$delegate_htfjwy$_0 = new ColorFormatBase$Mixin(8, 4, 4, 4, 0, 4, 12, 4);
  }
  BGRA_4444.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getA_za3lpa$(v);
  };
  BGRA_4444.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getB_za3lpa$(v);
  };
  BGRA_4444.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getG_za3lpa$(v);
  };
  BGRA_4444.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getR_za3lpa$(v);
  };
  BGRA_4444.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_htfjwy$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA_4444.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA_4444',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var BGRA_4444_instance = null;
  function BGRA_4444_getInstance() {
    if (BGRA_4444_instance === null) {
      new BGRA_4444();
    }
    return BGRA_4444_instance;
  }
  function BGR_555() {
    BGR_555_instance = this;
    ColorFormat16.call(this);
    this.$delegate_bixszq$_0 = new ColorFormatBase$Mixin(10, 5, 5, 5, 0, 5, 15, 0);
  }
  BGR_555.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getA_za3lpa$(v);
  };
  BGR_555.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getB_za3lpa$(v);
  };
  BGR_555.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getG_za3lpa$(v);
  };
  BGR_555.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getR_za3lpa$(v);
  };
  BGR_555.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_bixszq$_0.pack_tjonv8$(r, g, b, a);
  };
  BGR_555.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR_555',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var BGR_555_instance = null;
  function BGR_555_getInstance() {
    if (BGR_555_instance === null) {
      new BGR_555();
    }
    return BGR_555_instance;
  }
  function BGR_565() {
    BGR_565_instance = this;
    ColorFormat16.call(this);
    this.$delegate_bixt0l$_0 = new ColorFormatBase$Mixin(11, 5, 5, 6, 0, 5, 15, 0);
  }
  BGR_565.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getA_za3lpa$(v);
  };
  BGR_565.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getB_za3lpa$(v);
  };
  BGR_565.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getG_za3lpa$(v);
  };
  BGR_565.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getR_za3lpa$(v);
  };
  BGR_565.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_bixt0l$_0.pack_tjonv8$(r, g, b, a);
  };
  BGR_565.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR_565',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var BGR_565_instance = null;
  function BGR_565_getInstance() {
    if (BGR_565_instance === null) {
      new BGR_565();
    }
    return BGR_565_instance;
  }
  function BGRA_5551() {
    BGRA_5551_instance = this;
    ColorFormat16.call(this);
    this.$delegate_htew5y$_0 = new ColorFormatBase$Mixin(10, 5, 5, 5, 0, 5, 15, 1);
  }
  BGRA_5551.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getA_za3lpa$(v);
  };
  BGRA_5551.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getB_za3lpa$(v);
  };
  BGRA_5551.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getG_za3lpa$(v);
  };
  BGRA_5551.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getR_za3lpa$(v);
  };
  BGRA_5551.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_htew5y$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA_5551.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGRA_5551',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var BGRA_5551_instance = null;
  function BGRA_5551_getInstance() {
    if (BGRA_5551_instance === null) {
      new BGRA_5551();
    }
    return BGRA_5551_instance;
  }
  function RGBAd(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  RGBAd.prototype.set_6y0v78$ = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  };
  RGBAd.prototype.add_6y0v78$ = function (r, g, b, a) {
    this.r = this.r + r;
    this.g = this.g + g;
    this.b = this.b + b;
    this.a = this.a + a;
  };
  RGBAd.prototype.set_h1ferx$ = function (c) {
    this.set_6y0v78$(c.r, c.g, c.b, c.a);
  };
  RGBAd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAd',
    interfaces: []
  };
  function RGBAd_init(c, $this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, c.r, c.g, c.b, c.a);
    return $this;
  }
  function RGBAd_init_0(c, $this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, RGBA_getInstance().getRd_za3lpa$(c), RGBA_getInstance().getGd_za3lpa$(c), RGBA_getInstance().getBd_za3lpa$(c), RGBA_getInstance().getAd_za3lpa$(c));
    return $this;
  }
  function RGBAd_init_1($this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, 0.0, 0.0, 0.0, 0.0);
    return $this;
  }
  function RGBAf(_r, _g, _b, _a) {
    if (_r === void 0)
      _r = 1.0;
    if (_g === void 0)
      _g = 1.0;
    if (_b === void 0)
      _b = 1.0;
    if (_a === void 0)
      _a = 1.0;
    this._r_0 = _r;
    this._g_0 = _g;
    this._b_0 = _b;
    this._a_0 = _a;
    this.dirty_0 = true;
    this._rgba_0 = -1;
  }
  Object.defineProperty(RGBAf.prototype, 'r', {
    get: function () {
      return this._r_0;
    },
    set: function (v) {
      this._r_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'g', {
    get: function () {
      return this._g_0;
    },
    set: function (v) {
      this._g_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'b', {
    get: function () {
      return this._b_0;
    },
    set: function (v) {
      this._b_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'a', {
    get: function () {
      return this._a_0;
    },
    set: function (v) {
      this._a_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'rd', {
    get: function () {
      return this._r_0;
    },
    set: function (v) {
      this._r_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'gd', {
    get: function () {
      return this._g_0;
    },
    set: function (v) {
      this._g_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'bd', {
    get: function () {
      return this._b_0;
    },
    set: function (v) {
      this._b_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'ad', {
    get: function () {
      return this._a_0;
    },
    set: function (v) {
      this._a_0 = v;
      this.makeDirty_0();
    }
  });
  RGBAf.prototype.makeDirty_0 = function () {
    this.dirty_0 = true;
  };
  Object.defineProperty(RGBAf.prototype, 'rgba', {
    get: function () {
      if (this.dirty_0) {
        this.dirty_0 = false;
        this._rgba_0 = RGBA_getInstance().packfFast_7b5o5w$(this._r_0, this._g_0, this._b_0, this._a_0);
      }
      return this._rgba_0;
    }
  });
  RGBAf.prototype.setTo_7b5o5w$ = function (r, g, b, a) {
    this._r_0 = r;
    this._g_0 = g;
    this._b_0 = b;
    this._a_0 = a;
    this.makeDirty_0();
  };
  RGBAf.prototype.copyFrom_h1ferv$ = function (that) {
    this.setTo_7b5o5w$(that.r, that.g, that.b, that.a);
  };
  RGBAf.prototype.setToMultiply_h1ferv$ = function (that) {
    this.setToMultiply_7b5o5w$(that.r, that.g, that.b, that.a);
  };
  RGBAf.prototype.setToMultiply_7b5o5w$ = function (r, g, b, a) {
    this.setTo_7b5o5w$(this.r * r, this.g * g, this.b * b, this.a * a);
  };
  RGBAf.prototype.toRGBA = function () {
    return RGBA_getInstance().packFast_tjonv8$(numberToInt(this.r * 255) & 255, numberToInt(this.g * 255) & 255, numberToInt(this.b * 255) & 255, numberToInt(this.a * 255) & 255);
  };
  RGBAf.prototype.setToIdentity = function () {
    this.setTo_7b5o5w$(1.0, 1.0, 1.0, 1.0);
  };
  RGBAf.prototype.toString = function () {
    return 'RGBAf(' + get_niceStr_0(this.r) + ', ' + get_niceStr_0(this.g) + ', ' + get_niceStr_0(this.b) + ', ' + get_niceStr_0(this.a) + ')';
  };
  RGBAf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAf',
    interfaces: []
  };
  var RGBAf_0 = defineInlineFunction('korim-js.com.soywiz.korim.color.RGBAf_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var RGBAf_init = _.com.soywiz.korim.color.RGBAf;
    return function (r, g, b, a) {
      return new RGBAf_init(numberToDouble(r), numberToDouble(g), numberToDouble(b), numberToDouble(a));
    };
  }));
  function YCbCr() {
    YCbCr_instance = this;
    ColorFormat32.call(this);
  }
  YCbCr.prototype.getY_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  YCbCr.prototype.getCb_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  YCbCr.prototype.getCr_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  YCbCr.prototype.getR_za3lpa$ = function (v) {
    return this.getY_za3lpa$(v);
  };
  YCbCr.prototype.getG_za3lpa$ = function (v) {
    return this.getCb_za3lpa$(v);
  };
  YCbCr.prototype.getB_za3lpa$ = function (v) {
    return this.getCr_za3lpa$(v);
  };
  YCbCr.prototype.getA_za3lpa$ = function (v) {
    return extract8(v, 24);
  };
  YCbCr.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA_getInstance().pack_tjonv8$(r, g, b, a);
  };
  YCbCr.prototype.getY_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(0 + 0.299 * r + 0.587 * g + 0.114 * b));
  };
  YCbCr.prototype.getCb_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(128 - 0.168736 * r - 0.331264 * g + 0.5 * b));
  };
  YCbCr.prototype.getCr_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(128 + 0.5 * r - 0.418688 * g - 0.081312 * b));
  };
  YCbCr.prototype.getR_qt1dr2$ = function (y, cb, cr) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y + 1.402 * (cr - 128 | 0)));
  };
  YCbCr.prototype.getG_qt1dr2$ = function (y, cb, cr) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y - 0.34414 * (cb - 128 | 0) - 0.71414 * (cr - 128 | 0)));
  };
  YCbCr.prototype.getB_qt1dr2$ = function (y, cb, cr) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y + 1.772 * (cb - 128 | 0)));
  };
  YCbCr.prototype.rgbaToYCbCr_za3lpa$ = function (c) {
    var R = RGBA_getInstance().getR_za3lpa$(c);
    var G = RGBA_getInstance().getG_za3lpa$(c);
    var B = RGBA_getInstance().getB_za3lpa$(c);
    var A = RGBA_getInstance().getA_za3lpa$(c);
    var Y = this.getY_qt1dr2$(R, G, B);
    var Cb = this.getCb_qt1dr2$(R, G, B);
    var Cr = this.getCr_qt1dr2$(R, G, B);
    return RGBA_getInstance().pack_tjonv8$(Y, Cb, Cr, A);
  };
  YCbCr.prototype.yCbCrToRgba_za3lpa$ = function (c) {
    var Y = RGBA_getInstance().getR_za3lpa$(c);
    var Cb = RGBA_getInstance().getG_za3lpa$(c);
    var Cr = RGBA_getInstance().getB_za3lpa$(c);
    var A = RGBA_getInstance().getA_za3lpa$(c);
    var R = this.getR_qt1dr2$(Y, Cb, Cr);
    var G = this.getG_qt1dr2$(Y, Cb, Cr);
    var B = this.getB_qt1dr2$(Y, Cb, Cr);
    return RGBA_getInstance().pack_tjonv8$(R, G, B, A);
  };
  YCbCr.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YCbCr',
    interfaces: [ColorFormat32]
  };
  var YCbCr_instance = null;
  function YCbCr_getInstance() {
    if (YCbCr_instance === null) {
      new YCbCr();
    }
    return YCbCr_instance;
  }
  function YUVA() {
    YUVA_instance = this;
    ColorFormat32.call(this);
  }
  YUVA.prototype.getY_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  YUVA.prototype.getU_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  YUVA.prototype.getV_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  YUVA.prototype.getA_za3lpa$ = function (v) {
    return extract8(v, 24);
  };
  YUVA.prototype.getR_za3lpa$ = function (v) {
    return this.getR_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA.prototype.getG_za3lpa$ = function (v) {
    return this.getG_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA.prototype.getB_za3lpa$ = function (v) {
    return this.getB_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.packYUVA_tjonv8$(this.getY_qt1dr2$(r, g, b), this.getU_qt1dr2$(r, g, b), this.getV_qt1dr2$(r, g, b), a);
  };
  YUVA.prototype.packYUVA_tjonv8$ = function (y, u, v, a) {
    return insert8(insert8(insert8(insert8(0, y, 0), u, 8), v, 16), a, 24);
  };
  YUVA.prototype.getY_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(0.299 * r + 0.587 * g + 0.114 * b));
  };
  YUVA.prototype.getU_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(0.492 * Kotlin.imul(b, this.getY_qt1dr2$(r, g, b))));
  };
  YUVA.prototype.getV_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(0.877 * Kotlin.imul(r, this.getY_qt1dr2$(r, g, b))));
  };
  YUVA.prototype.getR_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y + 1.14 * v));
  };
  YUVA.prototype.getG_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y - 0.395 * u - 0.581 * v));
  };
  YUVA.prototype.getB_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y + 2.033 * u));
  };
  YUVA.prototype.YUVtoRGB_yus68p$ = function (out, outPos, inY, inU, inV, inPos, count) {
    var tmp$;
    var opos = outPos;
    var ipos = inPos;
    for (var n = 0; n < count; n++) {
      var y = inY[ipos] & 255;
      var u = (inU[ipos] & 255) - 128 | 0;
      var v = (inV[ipos] & 255) - 128 | 0;
      var r = ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y + (32768 + (v * 91881 | 0) >> 16) | 0);
      var g = ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y + (32768 - (v * 46802 | 0) - (u * 22554 | 0) >> 16) | 0);
      var b = ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y + (32768 + (u * 116130 | 0) >> 16) | 0);
      out[tmp$ = opos, opos = tmp$ + 1 | 0, tmp$] = RGBA_getInstance().packFast_tjonv8$(r, g, b, 255);
      ipos = ipos + 1 | 0;
    }
  };
  YUVA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YUVA',
    interfaces: [ColorFormat32]
  };
  var YUVA_instance = null;
  function YUVA_getInstance() {
    if (YUVA_instance === null) {
      new YUVA();
    }
    return YUVA_instance;
  }
  function drawText($receiver, font, str, x, y, color) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    font.drawText_r20ym9$($receiver, str, x, y, color);
  }
  function BitmapFont(atlas, size, lineHeight, glyphInfos) {
    this.atlas = atlas;
    this.size = size;
    this.lineHeight = lineHeight;
    this.glyphInfos = glyphInfos;
    var $receiver = this.glyphInfos;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.id, new BitmapFont$Glyph(slice_0(this.atlas, item.bounds), item)));
    }
    this.glyphsById = toMap(destination);
  }
  BitmapFont.prototype.measureWidth_61zpoe$ = function (text) {
    var tmp$;
    var x = 0;
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var glyph = this.glyphsById.get_11rb$(c | 0);
      if (glyph != null)
        x = x + glyph.advance | 0;
    }
    return x;
  };
  BitmapFont.prototype.drawText_r20ym9$ = function (bmp, str, x, y, color) {
    if (x === void 0)
      x = 0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    var tmp$;
    var py = y;
    var px = x;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var g = this.glyphsById.get_11rb$(c | 0);
      if (g != null) {
        bmp.draw_a26vum$(g.bmp, px, py);
        px = px + g.advance | 0;
      }
      if (c === 10) {
        py = py + this.lineHeight | 0;
        px = x;
      }
    }
  };
  function BitmapFont$Glyph(bmp, info) {
    this.bmp = bmp;
    this.info = info;
    this.advance = this.info.advance;
  }
  BitmapFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: []
  };
  BitmapFont$Glyph.prototype.component1 = function () {
    return this.bmp;
  };
  BitmapFont$Glyph.prototype.component2 = function () {
    return this.info;
  };
  BitmapFont$Glyph.prototype.copy_dbhi79$ = function (bmp, info) {
    return new BitmapFont$Glyph(bmp === void 0 ? this.bmp : bmp, info === void 0 ? this.info : info);
  };
  BitmapFont$Glyph.prototype.toString = function () {
    return 'Glyph(bmp=' + Kotlin.toString(this.bmp) + (', info=' + Kotlin.toString(this.info)) + ')';
  };
  BitmapFont$Glyph.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bmp) | 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    return result;
  };
  BitmapFont$Glyph.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bmp, other.bmp) && Kotlin.equals(this.info, other.info)))));
  };
  function BitmapFont$GlyphInfo(id, bounds, advance) {
    this.id = id;
    this.bounds = bounds;
    this.advance = advance;
  }
  BitmapFont$GlyphInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlyphInfo',
    interfaces: []
  };
  BitmapFont$GlyphInfo.prototype.component1 = function () {
    return this.id;
  };
  BitmapFont$GlyphInfo.prototype.component2 = function () {
    return this.bounds;
  };
  BitmapFont$GlyphInfo.prototype.component3 = function () {
    return this.advance;
  };
  BitmapFont$GlyphInfo.prototype.copy_73oo50$ = function (id, bounds, advance) {
    return new BitmapFont$GlyphInfo(id === void 0 ? this.id : id, bounds === void 0 ? this.bounds : bounds, advance === void 0 ? this.advance : advance);
  };
  BitmapFont$GlyphInfo.prototype.toString = function () {
    return 'GlyphInfo(id=' + Kotlin.toString(this.id) + (', bounds=' + Kotlin.toString(this.bounds)) + (', advance=' + Kotlin.toString(this.advance)) + ')';
  };
  BitmapFont$GlyphInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    result = result * 31 + Kotlin.hashCode(this.advance) | 0;
    return result;
  };
  BitmapFont$GlyphInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.bounds, other.bounds) && Kotlin.equals(this.advance, other.advance)))));
  };
  BitmapFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFont',
    interfaces: []
  };
  function BitmapFontGenerator() {
    BitmapFontGenerator_instance = this;
    this.SPACE = ' ';
    this.UPPERCASE = joinToString(new CharRange(65, 90), '');
    this.LOWERCASE = joinToString(new CharRange(97, 122), '');
    this.NUMBERS = joinToString(new CharRange(48, 57), '');
    this.PUNCTUATION = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}';
    this.LATIN_BASIC = '\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5P\xC9\xE1\xED\xF3\xFA\xF1\xD1\xAA\xB0\xBF\xAC\xBD\xBC\xA1\xAB\xBB\xDF\xB5\xF8\xB1\xF7\xB0\xB7.\xB2';
    this.LATIN_ALL = this.SPACE + this.UPPERCASE + this.LOWERCASE + this.NUMBERS + this.PUNCTUATION + this.LATIN_BASIC;
    this.bni = NativeImage_0(1, 1);
  }
  BitmapFontGenerator.prototype.generate_h6sd2a$ = function (fontName, fontSize, chars) {
    var tmp$ = this.generate_i84517$;
    var $receiver = get_indices(chars);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(chars.charCodeAt(item) | 0);
    }
    return tmp$.call(this, fontName, fontSize, toIntArray(destination));
  };
  BitmapFontGenerator.prototype.generate_i84517$ = function (fontName, fontSize, chars) {
    var tmp$;
    var bnictx = this.bni.getContext2d_6taknv$();
    bnictx.font = new Context2d$Font(fontName, fontSize);
    var bitmapHeight = numberToInt(bnictx.getTextBounds_jznmvy$('a').bounds.height);
    var destination = ArrayList_init_0(chars.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== chars.length; ++tmp$_0) {
      var item = chars[tmp$_0];
      destination.add_11rb$(numberToInt(bnictx.getTextBounds_jznmvy$(String.fromCharCode(toChar(item))).bounds.width));
    }
    var widths = destination;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(widths, 10));
    var tmp$_1;
    tmp$_1 = widths.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(item_0 + 2 | 0);
    }
    var widthsSum = sum_0(destination_0);
    var ni = NativeImage_0(widthsSum, bitmapHeight);
    var g = ni.getContext2d_6taknv$();
    g.fillStyle = g.createColor_za3lpa$(Colors_getInstance().WHITE);
    g.font = new Context2d$Font(fontName, fontSize);
    g.horizontalAlign = Context2d$HorizontalAlign$LEFT_getInstance();
    g.verticalAlign = Context2d$VerticalAlign$TOP_getInstance();
    var glyphs = ArrayList_init_0();
    var x = 0;
    var itemp = new Int32Array(1);
    tmp$ = withIndex(chars).iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var index = tmp$_2.component1()
      , char = tmp$_2.component2();
      var width = widths.get_za3lpa$(index);
      itemp[0] = char;
      g.fillText_ai6r6m$(String_fromIntArray(itemp, 0, 1), x, 0.0);
      var element = new BitmapFont$GlyphInfo(char, RectangleInt_init(x, 0, width, ni.height), width);
      glyphs.add_11rb$(element);
      x = x + (width + 2) | 0;
    }
    println('BitmapFontGenerator.generate(' + fontName + ', ' + fontSize + ', ' + chars + ', premult=' + ni.premult + ')');
    return new BitmapFont(ni.toBMP32(), fontSize, fontSize, glyphs);
  };
  BitmapFontGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BitmapFontGenerator',
    interfaces: []
  };
  var BitmapFontGenerator_instance = null;
  function BitmapFontGenerator_getInstance() {
    if (BitmapFontGenerator_instance === null) {
      new BitmapFontGenerator();
    }
    return BitmapFontGenerator_instance;
  }
  function TtfFont(s) {
    TtfFont$Companion_getInstance();
    this.s = s;
    this.tablesByName = LinkedHashMap_init();
    this.numGlyphs = 0;
    this.maxPoints = 0;
    this.maxContours = 0;
    this.maxCompositePoints = 0;
    this.maxCompositeContours = 0;
    this.maxZones = 0;
    this.maxTwilightPoints = 0;
    this.maxStorage = 0;
    this.maxFunctionDefs = 0;
    this.maxInstructionDefs = 0;
    this.maxStackElements = 0;
    this.maxSizeOfInstructions = 0;
    this.maxComponentElements = 0;
    this.maxComponentDepth = 0;
    this.hheaVersion = new TtfFont$Fixed(0, 0);
    this.ascender = 0;
    this.descender = 0;
    this.lineGap = 0;
    this.advanceWidthMax = 0;
    this.minLeftSideBearing = 0;
    this.minRightSideBearing = 0;
    this.xMaxExtent = 0;
    this.caretSlopeRise = 0;
    this.caretSlopeRun = 0;
    this.caretOffset = 0;
    this.metricDataFormat = 0;
    this.numberOfHMetrics = 0;
    this.locs = new Int32Array(0);
    this.fontRev = new TtfFont$Fixed(0, 0);
    this.unitsPerEm = 128;
    this.xMin = 0;
    this.yMin = 0;
    this.xMax = 0;
    this.yMax = 0;
    this.macStyle = 0;
    this.lowestRecPPEM = 0;
    this.fontDirectionHint = 0;
    this.indexToLocFormat = 0;
    this.glyphDataFormat = 0;
    this.horMetrics = emptyList();
    this.characterMaps = LinkedHashMap_init();
    this.readHeaderTables();
    this.readHead();
    this.readMaxp();
    this.readHhea();
    this.readNames();
    this.readLoca();
    this.readCmap();
    this.readHmtx();
  }
  function TtfFont$Table(id, checksum, offset, length) {
    this.id = id;
    this.checksum = checksum;
    this.offset = offset;
    this.length = length;
    this.s_7sn1gr$_0 = this.s_7sn1gr$_0;
  }
  Object.defineProperty(TtfFont$Table.prototype, 's', {
    get: function () {
      if (this.s_7sn1gr$_0 == null)
        return throwUPAE('s');
      return this.s_7sn1gr$_0;
    },
    set: function (s) {
      this.s_7sn1gr$_0 = s;
    }
  });
  TtfFont$Table.prototype.open = function () {
    return this.s.clone();
  };
  TtfFont$Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: []
  };
  TtfFont$Table.prototype.component1 = function () {
    return this.id;
  };
  TtfFont$Table.prototype.component2 = function () {
    return this.checksum;
  };
  TtfFont$Table.prototype.component3 = function () {
    return this.offset;
  };
  TtfFont$Table.prototype.component4 = function () {
    return this.length;
  };
  TtfFont$Table.prototype.copy_wfrsr4$ = function (id, checksum, offset, length) {
    return new TtfFont$Table(id === void 0 ? this.id : id, checksum === void 0 ? this.checksum : checksum, offset === void 0 ? this.offset : offset, length === void 0 ? this.length : length);
  };
  TtfFont$Table.prototype.toString = function () {
    return 'Table(id=' + Kotlin.toString(this.id) + (', checksum=' + Kotlin.toString(this.checksum)) + (', offset=' + Kotlin.toString(this.offset)) + (', length=' + Kotlin.toString(this.length)) + ')';
  };
  TtfFont$Table.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.checksum) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.length) | 0;
    return result;
  };
  TtfFont$Table.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.checksum, other.checksum) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.length, other.length)))));
  };
  function TtfFont$NameIds(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TtfFont$NameIds_initFields() {
    TtfFont$NameIds_initFields = function () {
    };
    TtfFont$NameIds$COPYRIGHT_instance = new TtfFont$NameIds('COPYRIGHT', 0, 0);
    TtfFont$NameIds$FONT_FAMILY_NAME_instance = new TtfFont$NameIds('FONT_FAMILY_NAME', 1, 1);
    TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance = new TtfFont$NameIds('FONT_SUBFAMILY_NAME', 2, 2);
    TtfFont$NameIds$UNIQUE_FONT_ID_instance = new TtfFont$NameIds('UNIQUE_FONT_ID', 3, 3);
    TtfFont$NameIds$FULL_FONT_NAME_instance = new TtfFont$NameIds('FULL_FONT_NAME', 4, 4);
    TtfFont$NameIds$VERSION_STRING_instance = new TtfFont$NameIds('VERSION_STRING', 5, 5);
    TtfFont$NameIds$POSTSCRIPT_NAME_instance = new TtfFont$NameIds('POSTSCRIPT_NAME', 6, 6);
    TtfFont$NameIds$TRADEMARK_instance = new TtfFont$NameIds('TRADEMARK', 7, 7);
    TtfFont$NameIds$MANUFACTURER_instance = new TtfFont$NameIds('MANUFACTURER', 8, 8);
    TtfFont$NameIds$DESIGNER_instance = new TtfFont$NameIds('DESIGNER', 9, 9);
    TtfFont$NameIds$DESCRIPTION_instance = new TtfFont$NameIds('DESCRIPTION', 10, 10);
    TtfFont$NameIds$URL_VENDOR_instance = new TtfFont$NameIds('URL_VENDOR', 11, 11);
    TtfFont$NameIds$URL_DESIGNER_instance = new TtfFont$NameIds('URL_DESIGNER', 12, 12);
    TtfFont$NameIds$LICENSE_DESCRIPTION_instance = new TtfFont$NameIds('LICENSE_DESCRIPTION', 13, 13);
    TtfFont$NameIds$LICENSE_URL_instance = new TtfFont$NameIds('LICENSE_URL', 14, 14);
    TtfFont$NameIds$RESERVED_15_instance = new TtfFont$NameIds('RESERVED_15', 15, 15);
    TtfFont$NameIds$TYPO_FAMILY_NAME_instance = new TtfFont$NameIds('TYPO_FAMILY_NAME', 16, 16);
    TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance = new TtfFont$NameIds('TYPO_SUBFAMILY_NAME', 17, 17);
    TtfFont$NameIds$COMPATIBLE_FULL_instance = new TtfFont$NameIds('COMPATIBLE_FULL', 18, 18);
    TtfFont$NameIds$SAMPLE_TEXT_instance = new TtfFont$NameIds('SAMPLE_TEXT', 19, 19);
    TtfFont$NameIds$POSTSCRIPT_CID_instance = new TtfFont$NameIds('POSTSCRIPT_CID', 20, 20);
    TtfFont$NameIds$WWS_FAMILY_NAME_instance = new TtfFont$NameIds('WWS_FAMILY_NAME', 21, 21);
    TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance = new TtfFont$NameIds('WWS_SUBFAMILY_NAME', 22, 22);
    TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance = new TtfFont$NameIds('LIGHT_BACKGROUND_PALETTE', 23, 23);
    TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance = new TtfFont$NameIds('DARK_BACKGROUND_PALETTE', 24, 24);
    TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance = new TtfFont$NameIds('VARIATIONS_POSTSCRIPT_NAME_PREFIX', 25, 25);
    TtfFont$NameIds$Companion_getInstance();
  }
  var TtfFont$NameIds$COPYRIGHT_instance;
  function TtfFont$NameIds$COPYRIGHT_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$COPYRIGHT_instance;
  }
  var TtfFont$NameIds$FONT_FAMILY_NAME_instance;
  function TtfFont$NameIds$FONT_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FONT_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$UNIQUE_FONT_ID_instance;
  function TtfFont$NameIds$UNIQUE_FONT_ID_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$UNIQUE_FONT_ID_instance;
  }
  var TtfFont$NameIds$FULL_FONT_NAME_instance;
  function TtfFont$NameIds$FULL_FONT_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FULL_FONT_NAME_instance;
  }
  var TtfFont$NameIds$VERSION_STRING_instance;
  function TtfFont$NameIds$VERSION_STRING_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$VERSION_STRING_instance;
  }
  var TtfFont$NameIds$POSTSCRIPT_NAME_instance;
  function TtfFont$NameIds$POSTSCRIPT_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$POSTSCRIPT_NAME_instance;
  }
  var TtfFont$NameIds$TRADEMARK_instance;
  function TtfFont$NameIds$TRADEMARK_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TRADEMARK_instance;
  }
  var TtfFont$NameIds$MANUFACTURER_instance;
  function TtfFont$NameIds$MANUFACTURER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$MANUFACTURER_instance;
  }
  var TtfFont$NameIds$DESIGNER_instance;
  function TtfFont$NameIds$DESIGNER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DESIGNER_instance;
  }
  var TtfFont$NameIds$DESCRIPTION_instance;
  function TtfFont$NameIds$DESCRIPTION_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DESCRIPTION_instance;
  }
  var TtfFont$NameIds$URL_VENDOR_instance;
  function TtfFont$NameIds$URL_VENDOR_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$URL_VENDOR_instance;
  }
  var TtfFont$NameIds$URL_DESIGNER_instance;
  function TtfFont$NameIds$URL_DESIGNER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$URL_DESIGNER_instance;
  }
  var TtfFont$NameIds$LICENSE_DESCRIPTION_instance;
  function TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LICENSE_DESCRIPTION_instance;
  }
  var TtfFont$NameIds$LICENSE_URL_instance;
  function TtfFont$NameIds$LICENSE_URL_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LICENSE_URL_instance;
  }
  var TtfFont$NameIds$RESERVED_15_instance;
  function TtfFont$NameIds$RESERVED_15_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$RESERVED_15_instance;
  }
  var TtfFont$NameIds$TYPO_FAMILY_NAME_instance;
  function TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TYPO_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$COMPATIBLE_FULL_instance;
  function TtfFont$NameIds$COMPATIBLE_FULL_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$COMPATIBLE_FULL_instance;
  }
  var TtfFont$NameIds$SAMPLE_TEXT_instance;
  function TtfFont$NameIds$SAMPLE_TEXT_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$SAMPLE_TEXT_instance;
  }
  var TtfFont$NameIds$POSTSCRIPT_CID_instance;
  function TtfFont$NameIds$POSTSCRIPT_CID_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$POSTSCRIPT_CID_instance;
  }
  var TtfFont$NameIds$WWS_FAMILY_NAME_instance;
  function TtfFont$NameIds$WWS_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$WWS_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance;
  function TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance;
  }
  var TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance;
  function TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance;
  }
  var TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance;
  function TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance;
  }
  function TtfFont$NameIds$Companion() {
    TtfFont$NameIds$Companion_instance = this;
    this.names = TtfFont$NameIds$values();
  }
  TtfFont$NameIds$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TtfFont$NameIds$Companion_instance = null;
  function TtfFont$NameIds$Companion_getInstance() {
    TtfFont$NameIds_initFields();
    if (TtfFont$NameIds$Companion_instance === null) {
      new TtfFont$NameIds$Companion();
    }
    return TtfFont$NameIds$Companion_instance;
  }
  TtfFont$NameIds.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NameIds',
    interfaces: [Enum]
  };
  function TtfFont$NameIds$values() {
    return [TtfFont$NameIds$COPYRIGHT_getInstance(), TtfFont$NameIds$FONT_FAMILY_NAME_getInstance(), TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$UNIQUE_FONT_ID_getInstance(), TtfFont$NameIds$FULL_FONT_NAME_getInstance(), TtfFont$NameIds$VERSION_STRING_getInstance(), TtfFont$NameIds$POSTSCRIPT_NAME_getInstance(), TtfFont$NameIds$TRADEMARK_getInstance(), TtfFont$NameIds$MANUFACTURER_getInstance(), TtfFont$NameIds$DESIGNER_getInstance(), TtfFont$NameIds$DESCRIPTION_getInstance(), TtfFont$NameIds$URL_VENDOR_getInstance(), TtfFont$NameIds$URL_DESIGNER_getInstance(), TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance(), TtfFont$NameIds$LICENSE_URL_getInstance(), TtfFont$NameIds$RESERVED_15_getInstance(), TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance(), TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$COMPATIBLE_FULL_getInstance(), TtfFont$NameIds$SAMPLE_TEXT_getInstance(), TtfFont$NameIds$POSTSCRIPT_CID_getInstance(), TtfFont$NameIds$WWS_FAMILY_NAME_getInstance(), TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance(), TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance(), TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance()];
  }
  TtfFont$NameIds.values = TtfFont$NameIds$values;
  function TtfFont$NameIds$valueOf(name) {
    switch (name) {
      case 'COPYRIGHT':
        return TtfFont$NameIds$COPYRIGHT_getInstance();
      case 'FONT_FAMILY_NAME':
        return TtfFont$NameIds$FONT_FAMILY_NAME_getInstance();
      case 'FONT_SUBFAMILY_NAME':
        return TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance();
      case 'UNIQUE_FONT_ID':
        return TtfFont$NameIds$UNIQUE_FONT_ID_getInstance();
      case 'FULL_FONT_NAME':
        return TtfFont$NameIds$FULL_FONT_NAME_getInstance();
      case 'VERSION_STRING':
        return TtfFont$NameIds$VERSION_STRING_getInstance();
      case 'POSTSCRIPT_NAME':
        return TtfFont$NameIds$POSTSCRIPT_NAME_getInstance();
      case 'TRADEMARK':
        return TtfFont$NameIds$TRADEMARK_getInstance();
      case 'MANUFACTURER':
        return TtfFont$NameIds$MANUFACTURER_getInstance();
      case 'DESIGNER':
        return TtfFont$NameIds$DESIGNER_getInstance();
      case 'DESCRIPTION':
        return TtfFont$NameIds$DESCRIPTION_getInstance();
      case 'URL_VENDOR':
        return TtfFont$NameIds$URL_VENDOR_getInstance();
      case 'URL_DESIGNER':
        return TtfFont$NameIds$URL_DESIGNER_getInstance();
      case 'LICENSE_DESCRIPTION':
        return TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance();
      case 'LICENSE_URL':
        return TtfFont$NameIds$LICENSE_URL_getInstance();
      case 'RESERVED_15':
        return TtfFont$NameIds$RESERVED_15_getInstance();
      case 'TYPO_FAMILY_NAME':
        return TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance();
      case 'TYPO_SUBFAMILY_NAME':
        return TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance();
      case 'COMPATIBLE_FULL':
        return TtfFont$NameIds$COMPATIBLE_FULL_getInstance();
      case 'SAMPLE_TEXT':
        return TtfFont$NameIds$SAMPLE_TEXT_getInstance();
      case 'POSTSCRIPT_CID':
        return TtfFont$NameIds$POSTSCRIPT_CID_getInstance();
      case 'WWS_FAMILY_NAME':
        return TtfFont$NameIds$WWS_FAMILY_NAME_getInstance();
      case 'WWS_SUBFAMILY_NAME':
        return TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance();
      case 'LIGHT_BACKGROUND_PALETTE':
        return TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance();
      case 'DARK_BACKGROUND_PALETTE':
        return TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance();
      case 'VARIATIONS_POSTSCRIPT_NAME_PREFIX':
        return TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.font.ttf.TtfFont.NameIds.' + name);
    }
  }
  TtfFont$NameIds.valueOf_61zpoe$ = TtfFont$NameIds$valueOf;
  function TtfFont$Fixed(num, den) {
    this.num = num;
    this.den = den;
  }
  TtfFont$Fixed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fixed',
    interfaces: []
  };
  TtfFont$Fixed.prototype.component1 = function () {
    return this.num;
  };
  TtfFont$Fixed.prototype.component2 = function () {
    return this.den;
  };
  TtfFont$Fixed.prototype.copy_vux9f0$ = function (num, den) {
    return new TtfFont$Fixed(num === void 0 ? this.num : num, den === void 0 ? this.den : den);
  };
  TtfFont$Fixed.prototype.toString = function () {
    return 'Fixed(num=' + Kotlin.toString(this.num) + (', den=' + Kotlin.toString(this.den)) + ')';
  };
  TtfFont$Fixed.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.num) | 0;
    result = result * 31 + Kotlin.hashCode(this.den) | 0;
    return result;
  };
  TtfFont$Fixed.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.num, other.num) && Kotlin.equals(this.den, other.den)))));
  };
  TtfFont.prototype.readFixed_ucmi9i$ = function ($receiver) {
    return new TtfFont$Fixed(readS16_le($receiver), readS16_le($receiver));
  };
  function TtfFont$HorMetric(advanceWidth, lsb) {
    this.advanceWidth = advanceWidth;
    this.lsb = lsb;
  }
  TtfFont$HorMetric.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorMetric',
    interfaces: []
  };
  TtfFont$HorMetric.prototype.component1 = function () {
    return this.advanceWidth;
  };
  TtfFont$HorMetric.prototype.component2 = function () {
    return this.lsb;
  };
  TtfFont$HorMetric.prototype.copy_vux9f0$ = function (advanceWidth, lsb) {
    return new TtfFont$HorMetric(advanceWidth === void 0 ? this.advanceWidth : advanceWidth, lsb === void 0 ? this.lsb : lsb);
  };
  TtfFont$HorMetric.prototype.toString = function () {
    return 'HorMetric(advanceWidth=' + Kotlin.toString(this.advanceWidth) + (', lsb=' + Kotlin.toString(this.lsb)) + ')';
  };
  TtfFont$HorMetric.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.advanceWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.lsb) | 0;
    return result;
  };
  TtfFont$HorMetric.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.advanceWidth, other.advanceWidth) && Kotlin.equals(this.lsb, other.lsb)))));
  };
  TtfFont.prototype.openTable_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.tablesByName.get_11rb$(name)) != null ? tmp$.open() : null;
  };
  function TtfFont$Companion() {
    TtfFont$Companion_instance = this;
  }
  TtfFont$Companion.prototype.invoke_39qel5$ = function (s) {
    return new TtfFont(s);
  };
  TtfFont$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TtfFont$Companion_instance = null;
  function TtfFont$Companion_getInstance() {
    if (TtfFont$Companion_instance === null) {
      new TtfFont$Companion();
    }
    return TtfFont$Companion_instance;
  }
  TtfFont.prototype.readHeaderTables = function () {
    var $receiver = slice(this.s);
    var tmp$;
    var $receiver_0 = readU16_be_0($receiver);
    if ($receiver_0 !== 1)
      invalidOp('Not a TTF file');
    var majorVersion = $receiver_0;
    var $receiver_1 = readU16_be_0($receiver);
    if ($receiver_1 !== 0)
      invalidOp('Not a TTF file');
    var minorVersion = $receiver_1;
    var numTables = readU16_be_0($receiver);
    var searchRange = readU16_be_0($receiver);
    var entrySelector = readU16_be_0($receiver);
    var rangeShift = readU16_be_0($receiver);
    var $receiver_2 = until(0, numTables);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_0;
    tmp$_0 = $receiver_2.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new TtfFont$Table(readStringz($receiver, 4), readS32_be_0($receiver), readS32_be_0($receiver), readS32_be_0($receiver)));
    }
    var tables = destination;
    tmp$ = tables.iterator();
    while (tmp$.hasNext()) {
      var table = tmp$.next();
      table.s = sliceWithSize($receiver, table.offset, table.length);
      var $receiver_3 = this.tablesByName;
      var key = table.id;
      $receiver_3.put_xwzc9p$(key, table);
    }
    return $receiver;
  };
  TtfFont.prototype.readNames = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('name')) != null) {
      var tmp$_1;
      var format = readU16_be_0(tmp$);
      var count = readU16_be_0(tmp$);
      var stringOffset = readU16_be_0(tmp$);
      for (var n = 0; n < count; n++) {
        var platformId = readU16_be_0(tmp$);
        var encodingId = readU16_be_0(tmp$);
        var languageId = readU16_be_0(tmp$);
        var nameId = readU16_be_0(tmp$);
        var length = readU16_be_0(tmp$);
        var offset = readU16_be_0(tmp$);
        if (encodingId === 0)
          tmp$_1 = lang.UTF8;
        else if (encodingId === 1)
          tmp$_1 = lang.UTF16_BE;
        else
          tmp$_1 = lang.UTF16_BE;
        var charset = tmp$_1;
        var string = toString_0(readAll(sliceWithSize_0(tmp$.clone(), Kotlin.Long.fromInt(stringOffset).add(Kotlin.Long.fromInt(offset)), Kotlin.Long.fromInt(length))), charset);
      }
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  TtfFont.prototype.readLoca = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('loca')) != null) {
      var tmp$_1, tmp$_2;
      tmp$_1 = this.indexToLocFormat;
      if (tmp$_1 === 0)
        tmp$_2 = 2;
      else if (tmp$_1 === 1)
        tmp$_2 = 4;
      else
        tmp$_2 = error.invalidOp;
      var bytesPerEntry = tmp$_2;
      var data = readBytesExact(tmp$, Kotlin.imul(bytesPerEntry, this.numGlyphs + 1 | 0));
      this.locs = new Int32Array(this.numGlyphs + 1 | 0);
      var $receiver = new FastByteArrayInputStream(data);
      var tmp$_3;
      tmp$_3 = this.indexToLocFormat;
      if (tmp$_3 === 0) {
        var tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        tmp$_4 = get_indices_0(this.locs);
        tmp$_5 = tmp$_4.first;
        tmp$_6 = tmp$_4.last;
        tmp$_7 = tmp$_4.step;
        for (var n = tmp$_5; n <= tmp$_6; n += tmp$_7)
          this.locs[n] = $receiver.readU16_be() * 2 | 0;
      }
       else if (tmp$_3 === 1) {
        var tmp$_8, tmp$_9, tmp$_10, tmp$_11;
        tmp$_8 = get_indices_0(this.locs);
        tmp$_9 = tmp$_8.first;
        tmp$_10 = tmp$_8.last;
        tmp$_11 = tmp$_8.step;
        for (var n_0 = tmp$_9; n_0 <= tmp$_10; n_0 += tmp$_11)
          this.locs[n_0] = $receiver.readS32_be() * 2 | 0;
      }
       else
        error.invalidOp;
      println('locs: ' + toList(this.locs));
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  var TimeDistance_init = $module$klock_js.com.soywiz.klock.TimeDistance;
  TtfFont.prototype.readHead = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('head')) != null) {
      if (readU16_be_0(tmp$) !== 1)
        invalidOp('Invalid TTF');
      if (readU16_be_0(tmp$) !== 0)
        invalidOp('Invalid TTF');
      this.fontRev = this.readFixed_ucmi9i$(tmp$);
      var checkSumAdjustment = readS32_be_0(tmp$);
      var $receiver = readS32_be_0(tmp$);
      if ($receiver !== 1594834165)
        invalidOp('Invalid magic ' + get_hex($receiver));
      var flags = readU16_be_0(tmp$);
      this.unitsPerEm = readU16_be_0(tmp$);
      var created = readS64_be(tmp$).multiply(Kotlin.Long.fromInt(1000));
      var modified = readS64_be(tmp$).multiply(Kotlin.Long.fromInt(1000));
      this.xMin = readS16_be(tmp$);
      this.yMin = readS16_be(tmp$);
      this.xMax = readS16_be(tmp$);
      this.yMax = readS16_be(tmp$);
      this.macStyle = readU16_be_0(tmp$);
      this.lowestRecPPEM = readU16_be_0(tmp$);
      this.fontDirectionHint = readS16_be(tmp$);
      this.indexToLocFormat = readS16_be(tmp$);
      this.glyphDataFormat = readS16_be(tmp$);
      println('unitsPerEm: ' + this.unitsPerEm);
      println('created: ' + DateTime.Companion.invoke_s8cxhz$(created).minus_5t6mhc$(new TimeDistance_init(76)));
      println('modified: ' + DateTime.Companion.invoke_s8cxhz$(modified).minus_5t6mhc$(new TimeDistance_init(76)));
      println('bounds: (' + this.xMin + ', ' + this.yMin + ')-(' + this.xMax + ', ' + this.yMax + ')');
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  TtfFont.prototype.readMaxp = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('maxp')) != null) {
      var version = this.readFixed_ucmi9i$(tmp$);
      this.numGlyphs = readU16_be_0(tmp$);
      this.maxPoints = readU16_be_0(tmp$);
      this.maxContours = readU16_be_0(tmp$);
      this.maxCompositePoints = readU16_be_0(tmp$);
      this.maxCompositeContours = readU16_be_0(tmp$);
      this.maxZones = readU16_be_0(tmp$);
      this.maxTwilightPoints = readU16_be_0(tmp$);
      this.maxStorage = readU16_be_0(tmp$);
      this.maxFunctionDefs = readU16_be_0(tmp$);
      this.maxInstructionDefs = readU16_be_0(tmp$);
      this.maxStackElements = readU16_be_0(tmp$);
      this.maxSizeOfInstructions = readU16_be_0(tmp$);
      this.maxComponentElements = readU16_be_0(tmp$);
      this.maxComponentDepth = readU16_be_0(tmp$);
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  TtfFont.prototype.readHhea = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('hhea')) != null) {
      this.hheaVersion = this.readFixed_ucmi9i$(tmp$);
      this.ascender = readS16_be(tmp$);
      this.descender = readS16_be(tmp$);
      this.lineGap = readS16_be(tmp$);
      this.advanceWidthMax = readU16_be_0(tmp$);
      this.minLeftSideBearing = readS16_be(tmp$);
      this.minRightSideBearing = readS16_be(tmp$);
      this.xMaxExtent = readS16_be(tmp$);
      this.caretSlopeRise = readS16_be(tmp$);
      this.caretSlopeRun = readS16_be(tmp$);
      this.caretOffset = readS16_be(tmp$);
      readS16_be(tmp$);
      readS16_be(tmp$);
      readS16_be(tmp$);
      readS16_be(tmp$);
      this.metricDataFormat = readS16_be(tmp$);
      this.numberOfHMetrics = readU16_be_0(tmp$);
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  TtfFont.prototype.readHmtx = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('hmtx')) != null) {
      var $receiver = until(0, this.numberOfHMetrics);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(new TtfFont$HorMetric(readU16_be_0(tmp$), readS16_be(tmp$)));
      }
      var firstMetrics = destination;
      var lastAdvanceWidth = last(firstMetrics).advanceWidth;
      var $receiver_0 = until(0, this.numGlyphs - this.numberOfHMetrics | 0);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        destination_0.add_11rb$(new TtfFont$HorMetric(lastAdvanceWidth, readS16_be(tmp$)));
      }
      var compressedMetrics = destination_0;
      this.horMetrics = plus(firstMetrics, compressedMetrics);
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  function TtfFont$readCmap$lambda$EncodingRecord(platformId, encodingId, offset) {
    this.platformId = platformId;
    this.encodingId = encodingId;
    this.offset = offset;
  }
  TtfFont$readCmap$lambda$EncodingRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EncodingRecord',
    interfaces: []
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component1 = function () {
    return this.platformId;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component2 = function () {
    return this.encodingId;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component3 = function () {
    return this.offset;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.copy_qt1dr2$ = function (platformId, encodingId, offset) {
    return new TtfFont$readCmap$lambda$EncodingRecord(platformId === void 0 ? this.platformId : platformId, encodingId === void 0 ? this.encodingId : encodingId, offset === void 0 ? this.offset : offset);
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.toString = function () {
    return 'EncodingRecord(platformId=' + Kotlin.toString(this.platformId) + (', encodingId=' + Kotlin.toString(this.encodingId)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.platformId) | 0;
    result = result * 31 + Kotlin.hashCode(this.encodingId) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.platformId, other.platformId) && Kotlin.equals(this.encodingId, other.encodingId) && Kotlin.equals(this.offset, other.offset)))));
  };
  TtfFont.prototype.readCmap = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('cmap')) != null) {
      var tmp$_1;
      var version = readU16_be_0(tmp$);
      var numTables = readU16_be_0(tmp$);
      var $receiver = until(0, numTables);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(new TtfFont$readCmap$lambda$EncodingRecord(readU16_be_0(tmp$), readU16_be_0(tmp$), readS32_be_0(tmp$)));
      }
      var tables = destination;
      tmp$_1 = tables.iterator();
      while (tmp$_1.hasNext()) {
        var table = tmp$_1.next();
        var $receiver_0 = sliceWithStart(tmp$, Kotlin.Long.fromInt(table.offset));
        var tmp$_3;
        var format = readU16_be_0($receiver_0);
        if (format === 4) {
          var length = readU16_be_0($receiver_0);
          var language = readU16_be_0($receiver_0);
          var segCount = readU16_be_0($receiver_0) / 2 | 0;
          var searchRangeS = readU16_be_0($receiver_0);
          var entrySelector = readU16_be_0($receiver_0);
          var rangeShift = readU16_be_0($receiver_0);
          var endCount = readCharArray_be($receiver_0, segCount);
          readU16_be_0($receiver_0);
          var startCount = readCharArray_be($receiver_0, segCount);
          var idDelta = readShortArray_be($receiver_0, segCount);
          var rangeOffsetPos = $receiver_0.position.toInt();
          var idRangeOffset = readCharArray_be($receiver_0, segCount);
          for (var n = 0; n < segCount; n++) {
            var ec = endCount[n] | 0;
            var sc = startCount[n] | 0;
            var delta = idDelta[n];
            var iro = idRangeOffset[n] | 0;
            for (var c = sc; c <= ec; c++) {
              var index = 0;
              if (iro !== 0) {
                var glyphIndexOffset = rangeOffsetPos + (n * 2 | 0) | 0;
                glyphIndexOffset = glyphIndexOffset + iro | 0;
                glyphIndexOffset = glyphIndexOffset + ((c - sc | 0) * 2 | 0) | 0;
                index = readU16_be_0(sliceWithStart($receiver_0, Kotlin.Long.fromInt(glyphIndexOffset)));
                if (index !== 0) {
                  index = index + delta | 0;
                }
              }
               else {
                index = c + delta | 0;
              }
              var $receiver_1 = this.characterMaps;
              var value = index & 65535;
              $receiver_1.put_xwzc9p$(c, value);
            }
          }
        }
         else if (format === 12) {
          readU16_be_0($receiver_0);
          var length_0 = readS32_be_0($receiver_0);
          var language_0 = readS32_be_0($receiver_0);
          var numGroups = readS32_be_0($receiver_0);
          for (var n_0 = 0; n_0 < numGroups; n_0++) {
            var startCharCode = readS32_be_0($receiver_0);
            var endCharCode = readS32_be_0($receiver_0);
            var startGlyphId = readS32_be_0($receiver_0);
            var glyphId = startGlyphId;
            for (var c_0 = startCharCode; c_0 <= endCharCode; c_0++) {
              var $receiver_2 = this.characterMaps;
              var value_0 = (tmp$_3 = glyphId, glyphId = tmp$_3 + 1 | 0, tmp$_3);
              $receiver_2.put_xwzc9p$(c_0, value_0);
            }
          }
        }
        println('cmap.table.format: ' + format);
      }
      println(tables);
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  TtfFont.prototype.getCharIndexFromCodePoint_za3lpa$ = function (codePoint) {
    return this.characterMaps.get_11rb$(codePoint);
  };
  TtfFont.prototype.getCharIndexFromChar_s8itvh$ = function (char) {
    return this.characterMaps.get_11rb$(char | 0);
  };
  TtfFont.prototype.getGlyphByCodePoint_za3lpa$ = function (codePoint) {
    var tmp$;
    return (tmp$ = this.characterMaps.get_11rb$(codePoint)) != null ? this.getGlyphByIndex_za3lpa$(tmp$) : null;
  };
  TtfFont.prototype.getGlyphByChar_s8itvh$ = function (char) {
    return this.getGlyphByCodePoint_za3lpa$(char | 0);
  };
  TtfFont.prototype.getGlyphByIndex_za3lpa$ = function (index) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('glyf')) != null) {
      var block$result;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var start = (tmp$_2 = (tmp$_1 = getOrNull(this.locs, index)) != null ? toUnsigned(tmp$_1) : null) != null ? tmp$_2 : Kotlin.Long.ZERO;
      var end = (tmp$_4 = (tmp$_3 = getOrNull(this.locs, index + 1 | 0)) != null ? toUnsigned(tmp$_3) : null) != null ? tmp$_4 : start;
      var size = end.subtract(start);
      if (!equals(size, Kotlin.Long.ZERO)) {
        block$result = this.readGlyph_hsu5ns$(sliceWithStart(tmp$, start), index);
      }
       else {
        block$result = new TtfFont$Glyph(this, 0, 0, 0, 0, new Int32Array([]), new Int32Array([]), new Int32Array([]), new Int32Array([]), this.horMetrics.get_za3lpa$(index).advanceWidth);
      }
      tmp$_0 = block$result;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  TtfFont.prototype.getAllGlyphs = function () {
    var $receiver = until(0, this.numGlyphs);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.getGlyphByIndex_za3lpa$(item));
    }
    return filterNotNull(destination);
  };
  function TtfFont$IGlyph() {
  }
  TtfFont$IGlyph.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGlyph',
    interfaces: []
  };
  function TtfFont$Contour(x, y, onCurve) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (onCurve === void 0)
      onCurve = false;
    this.x = x;
    this.y = y;
    this.onCurve = onCurve;
  }
  TtfFont$Contour.prototype.copyFrom_bj6kc4$ = function (that) {
    this.x = that.x;
    this.y = that.y;
    this.onCurve = that.onCurve;
  };
  TtfFont$Contour.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contour',
    interfaces: []
  };
  TtfFont$Contour.prototype.component1 = function () {
    return this.x;
  };
  TtfFont$Contour.prototype.component2 = function () {
    return this.y;
  };
  TtfFont$Contour.prototype.component3 = function () {
    return this.onCurve;
  };
  TtfFont$Contour.prototype.copy_ydzd23$ = function (x, y, onCurve) {
    return new TtfFont$Contour(x === void 0 ? this.x : x, y === void 0 ? this.y : y, onCurve === void 0 ? this.onCurve : onCurve);
  };
  TtfFont$Contour.prototype.toString = function () {
    return 'Contour(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', onCurve=' + Kotlin.toString(this.onCurve)) + ')';
  };
  TtfFont$Contour.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.onCurve) | 0;
    return result;
  };
  TtfFont$Contour.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.onCurve, other.onCurve)))));
  };
  function TtfFont$Origin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TtfFont$Origin_initFields() {
    TtfFont$Origin_initFields = function () {
    };
    TtfFont$Origin$TOP_instance = new TtfFont$Origin('TOP', 0);
    TtfFont$Origin$BASELINE_instance = new TtfFont$Origin('BASELINE', 1);
  }
  var TtfFont$Origin$TOP_instance;
  function TtfFont$Origin$TOP_getInstance() {
    TtfFont$Origin_initFields();
    return TtfFont$Origin$TOP_instance;
  }
  var TtfFont$Origin$BASELINE_instance;
  function TtfFont$Origin$BASELINE_getInstance() {
    TtfFont$Origin_initFields();
    return TtfFont$Origin$BASELINE_instance;
  }
  TtfFont$Origin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Origin',
    interfaces: [Enum]
  };
  function TtfFont$Origin$values() {
    return [TtfFont$Origin$TOP_getInstance(), TtfFont$Origin$BASELINE_getInstance()];
  }
  TtfFont$Origin.values = TtfFont$Origin$values;
  function TtfFont$Origin$valueOf(name) {
    switch (name) {
      case 'TOP':
        return TtfFont$Origin$TOP_getInstance();
      case 'BASELINE':
        return TtfFont$Origin$BASELINE_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.font.ttf.TtfFont.Origin.' + name);
    }
  }
  TtfFont$Origin.valueOf_61zpoe$ = TtfFont$Origin$valueOf;
  TtfFont.prototype.fillText_psrqci$ = function (c, text, size, x, y, color, origin) {
    if (size === void 0)
      size = 16.0;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    if (origin === void 0)
      origin = TtfFont$Origin$BASELINE_getInstance();
    var tmp$;
    var font = this;
    var scale = size / this.unitsPerEm;
    c.translate_lu1900$(x, y);
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var char = unboxChar(tmp$.next());
      var g = this.getGlyphByChar_s8itvh$(char);
      if (g != null) {
        g.fill_c7hce0$(c, 32.0, TtfFont$Origin$TOP_getInstance(), Colors_getInstance().BLUE);
        c.translate_lu1900$(scale * g.advanceWidth, 0.0);
      }
    }
  };
  function TtfFont$GlyphReference(glyph, x, y, scaleX, scale01, scale10, scaleY) {
    this.glyph = glyph;
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scale01 = scale01;
    this.scale10 = scale10;
    this.scaleY = scaleY;
  }
  TtfFont$GlyphReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlyphReference',
    interfaces: []
  };
  TtfFont$GlyphReference.prototype.component1 = function () {
    return this.glyph;
  };
  TtfFont$GlyphReference.prototype.component2 = function () {
    return this.x;
  };
  TtfFont$GlyphReference.prototype.component3 = function () {
    return this.y;
  };
  TtfFont$GlyphReference.prototype.component4 = function () {
    return this.scaleX;
  };
  TtfFont$GlyphReference.prototype.component5 = function () {
    return this.scale01;
  };
  TtfFont$GlyphReference.prototype.component6 = function () {
    return this.scale10;
  };
  TtfFont$GlyphReference.prototype.component7 = function () {
    return this.scaleY;
  };
  TtfFont$GlyphReference.prototype.copy_t3pr0x$ = function (glyph, x, y, scaleX, scale01, scale10, scaleY) {
    return new TtfFont$GlyphReference(glyph === void 0 ? this.glyph : glyph, x === void 0 ? this.x : x, y === void 0 ? this.y : y, scaleX === void 0 ? this.scaleX : scaleX, scale01 === void 0 ? this.scale01 : scale01, scale10 === void 0 ? this.scale10 : scale10, scaleY === void 0 ? this.scaleY : scaleY);
  };
  TtfFont$GlyphReference.prototype.toString = function () {
    return 'GlyphReference(glyph=' + Kotlin.toString(this.glyph) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', scaleX=' + Kotlin.toString(this.scaleX)) + (', scale01=' + Kotlin.toString(this.scale01)) + (', scale10=' + Kotlin.toString(this.scale10)) + (', scaleY=' + Kotlin.toString(this.scaleY)) + ')';
  };
  TtfFont$GlyphReference.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.glyph) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleX) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale01) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale10) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleY) | 0;
    return result;
  };
  TtfFont$GlyphReference.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.glyph, other.glyph) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scaleX, other.scaleX) && Kotlin.equals(this.scale01, other.scale01) && Kotlin.equals(this.scale10, other.scale10) && Kotlin.equals(this.scaleY, other.scaleY)))));
  };
  function TtfFont$CompositeGlyph($outer, xMin, yMin, xMax, yMax, refs, advanceWidth) {
    this.$outer = $outer;
    this.xMin_g1rraz$_0 = xMin;
    this.yMin_g17ypm$_0 = yMin;
    this.xMax_g1rwzx$_0 = xMax;
    this.yMax_g184ek$_0 = yMax;
    this.refs = refs;
    this.advanceWidth_f2ft5x$_0 = advanceWidth;
  }
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'xMin', {
    get: function () {
      return this.xMin_g1rraz$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'yMin', {
    get: function () {
      return this.yMin_g17ypm$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'xMax', {
    get: function () {
      return this.xMax_g1rwzx$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'yMax', {
    get: function () {
      return this.yMax_g184ek$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'advanceWidth', {
    get: function () {
      return this.advanceWidth_f2ft5x$_0;
    }
  });
  TtfFont$CompositeGlyph.prototype.fill_c7hce0$ = function (c, size, origin, color) {
    var scale = size / this.$outer.unitsPerEm;
    c.save();
    try {
      var tmp$;
      tmp$ = this.refs.iterator();
      while (tmp$.hasNext()) {
        var ref = tmp$.next();
        c.save();
        try {
          c.translate_lu1900$((ref.x - this.xMin | 0) * scale, (-ref.y - this.yMin | 0) * scale);
          c.scale_lu1900$(ref.scaleX, ref.scaleY);
          ref.glyph.fill_c7hce0$(c, size, origin, color);
        }
        finally {
          c.restore();
        }
      }
    }
    finally {
      c.restore();
    }
  };
  TtfFont$CompositeGlyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeGlyph',
    interfaces: [TtfFont$IGlyph]
  };
  function TtfFont$Glyph($outer, xMin, yMin, xMax, yMax, contoursIndices, flags, xPos, yPos, advanceWidth) {
    this.$outer = $outer;
    this.xMin_1subio$_0 = xMin;
    this.yMin_1saixb$_0 = yMin;
    this.xMax_1suh7m$_0 = xMax;
    this.yMax_1saom9$_0 = yMax;
    this.contoursIndices = contoursIndices;
    this.flags = flags;
    this.xPos = xPos;
    this.yPos = yPos;
    this.advanceWidth_vy3ewq$_0 = advanceWidth;
  }
  Object.defineProperty(TtfFont$Glyph.prototype, 'xMin', {
    get: function () {
      return this.xMin_1subio$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'yMin', {
    get: function () {
      return this.yMin_1saixb$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'xMax', {
    get: function () {
      return this.xMax_1suh7m$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'yMax', {
    get: function () {
      return this.yMax_1saom9$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'advanceWidth', {
    get: function () {
      return this.advanceWidth_vy3ewq$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'npoints', {
    get: function () {
      return this.xPos.length;
    }
  });
  TtfFont$Glyph.prototype.onCurve_za3lpa$ = function (n) {
    return (this.flags[n] & 1) !== 0;
  };
  TtfFont$Glyph.prototype.contour_7faev6$ = function (n, out) {
    if (out === void 0)
      out = new TtfFont$Contour();
    out.x = this.xPos[n];
    out.y = this.yPos[n];
    out.onCurve = this.onCurve_za3lpa$(n);
    return out;
  };
  TtfFont$Glyph.prototype.fill_c7hce0$ = function (c, size, origin, color) {
    var font = this.$outer;
    var scale = size / font.unitsPerEm;
    c.save();
    try {
      var tmp$;
      if (equals(origin, TtfFont$Origin$TOP_getInstance()))
        tmp$ = font.yMax - font.yMin + this.yMin | 0;
      else if (equals(origin, TtfFont$Origin$BASELINE_getInstance()))
        tmp$ = 0.0;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      var ydist = tmp$;
      c.translate_lu1900$(0.0 * scale, (ydist - this.yMin) * scale);
      c.scale_lu1900$(scale, -scale);
      c.beginPath();
      c.draw_ywv3s4$(this.createGraphicsPath());
      c.fill_i8h3xk$(new Context2d$Color(color));
    }
    finally {
      c.restore();
    }
  };
  TtfFont$Glyph.prototype.createGraphicsPath = function () {
    var tmp$;
    var p = new GraphicsPath();
    tmp$ = this.contoursIndices.length - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      var cstart = this.contoursIndices[n] + 1 | 0;
      var cend = this.contoursIndices[n + 1 | 0];
      var csize = cend - cstart + 1 | 0;
      var curr = this.contour_7faev6$(cend);
      var next = this.contour_7faev6$(cstart);
      if (curr.onCurve) {
        p.moveTo_vux9f0$(curr.x, curr.y);
      }
       else {
        if (next.onCurve) {
          p.moveTo_vux9f0$(next.x, next.y);
        }
         else {
          p.moveTo_vux9f0$(Kotlin.imul(curr.x + next.x | 0, numberToInt(0.5)), numberToInt((curr.y + next.y | 0) * 0.5));
        }
      }
      for (var cpos = 0; cpos < csize; cpos++) {
        var prev = curr;
        curr = next;
        next = this.contour_7faev6$(cstart + (cpos + 1 | 0) % csize | 0);
        if (curr.onCurve) {
          p.lineTo_vux9f0$(curr.x, curr.y);
        }
         else {
          var prev2X = prev.x;
          var prev2Y = prev.y;
          var next2X = next.x;
          var next2Y = next.y;
          if (!prev.onCurve) {
            prev2X = numberToInt((curr.x + prev.x | 0) * 0.5);
            prev2Y = numberToInt((curr.y + prev.y | 0) * 0.5);
            p.lineTo_vux9f0$(prev2X, prev2Y);
          }
          if (!next.onCurve) {
            next2X = numberToInt((curr.x + next.x | 0) * 0.5);
            next2Y = numberToInt((curr.y + next.y | 0) * 0.5);
          }
          p.lineTo_vux9f0$(prev2X, prev2Y);
          p.quadTo_tjonv8$(curr.x, curr.y, next2X, next2Y);
        }
      }
      p.close();
    }
    return p;
  };
  TtfFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: [TtfFont$IGlyph]
  };
  TtfFont.prototype.readF2DOT14_ucmi9i$ = function ($receiver) {
    var v = readS16_be($receiver);
    var i = v >> 14;
    var f = v & 16383;
    return i + f / 16384.0;
  };
  TtfFont.prototype.readMix_BE_daiwru$ = function ($receiver, signed, word) {
    var tmp$;
    if (!word && signed)
      tmp$ = readS8($receiver);
    else if (!word && !signed)
      tmp$ = readU8($receiver);
    else if (word && signed)
      tmp$ = readS16_be($receiver);
    else if (word && !signed)
      tmp$ = readU16_be_0($receiver);
    else
      tmp$ = error.invalidOp;
    return tmp$;
  };
  TtfFont.prototype.readGlyph_hsu5ns$ = function ($receiver, index) {
    var tmp$, tmp$_0, tmp$_1;
    var ncontours = readS16_be($receiver);
    var xMin = readS16_be($receiver);
    var yMin = readS16_be($receiver);
    var xMax = readS16_be($receiver);
    var yMax = readS16_be($receiver);
    if (ncontours < 0) {
      var ARG_1_AND_2_ARE_WORDS = 1;
      var ARGS_ARE_XY_VALUES = 2;
      var ROUND_XY_TO_GRID = 4;
      var WE_HAVE_A_SCALE = 8;
      var MORE_COMPONENTS = 32;
      var WE_HAVE_AN_X_AND_Y_SCALE = 64;
      var WE_HAVE_A_TWO_BY_TWO = 128;
      var WE_HAVE_INSTRUCTIONS = 256;
      var USE_MY_METRICS = 512;
      var OVERLAP_COMPOUND = 1024;
      var SCALED_COMPONENT_OFFSET = 2048;
      var UNSCALED_COMPONENT_OFFSET = 4096;
      var references = ArrayList_init_0();
      do {
        var flags = readU16_be_0($receiver);
        var glyphIndex = readU16_be_0($receiver);
        var signed = (flags & ARGS_ARE_XY_VALUES) !== 0;
        var words = (flags & ARG_1_AND_2_ARE_WORDS) !== 0;
        var x = this.readMix_BE_daiwru$($receiver, signed, words);
        var y = this.readMix_BE_daiwru$($receiver, signed, words);
        var scaleX = 1.0;
        var scaleY = 1.0;
        var scale01 = 0.0;
        var scale10 = 0.0;
        if ((flags & WE_HAVE_A_SCALE) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = scaleX;
        }
         else if ((flags & WE_HAVE_AN_X_AND_Y_SCALE) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = this.readF2DOT14_ucmi9i$($receiver);
        }
         else if ((flags & WE_HAVE_A_TWO_BY_TWO) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scale01 = this.readF2DOT14_ucmi9i$($receiver);
          scale10 = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = this.readF2DOT14_ucmi9i$($receiver);
        }
        var ref = new TtfFont$GlyphReference(ensureNotNull(this.getGlyphByIndex_za3lpa$(glyphIndex)), x, y, scaleX, scale01, scale10, scaleY);
        references.add_11rb$(ref);
      }
       while ((flags & MORE_COMPONENTS) !== 0);
      return new TtfFont$CompositeGlyph(this, xMin, yMin, xMax, yMax, references, this.horMetrics.get_za3lpa$(index).advanceWidth);
    }
     else {
      var contoursIndices = new Int32Array(ncontours + 1 | 0);
      contoursIndices[0] = -1;
      for (var n = 1; n <= ncontours; n++)
        contoursIndices[n] = readU16_be_0($receiver);
      var instructionLength = readU16_be_0($receiver);
      var instructions = readBytesExact($receiver, instructionLength);
      var numPoints = (tmp$_1 = (tmp$_0 = (tmp$ = lastOrNull(contoursIndices)) != null ? tmp$ : null) != null ? tmp$_0 + 1 | 0 : null) != null ? tmp$_1 : 0;
      var flags_0 = new IntArrayList();
      var npos = 0;
      while (npos < numPoints) {
        var cf = readU8($receiver);
        flags_0.add_za3lpa$(cf);
        if ((cf & 8) !== 0) {
          var count = readU8($receiver);
          for (var n_0 = 0; n_0 < count; n_0++)
            flags_0.add_za3lpa$(cf);
          npos = npos + (count + 1) | 0;
        }
         else {
          npos = npos + 1 | 0;
        }
      }
      var xPos = new Int32Array(numPoints);
      var yPos = new Int32Array(numPoints);
      for (var xy = 0; xy <= 1; xy++) {
        var pos = xy === 0 ? xPos : yPos;
        var p = 0;
        for (var n_1 = 0; n_1 < numPoints; n_1++) {
          var flag = flags_0.get_za3lpa$(n_1);
          var b1 = (flag >>> 1 + xy & 1) !== 0;
          var b2 = (flag >>> 4 + xy & 1) !== 0;
          if (b1) {
            var magnitude = readU8($receiver);
            if (b2)
              p = p + magnitude | 0;
            else
              p = p - magnitude | 0;
          }
           else if (!b2) {
            p = p + readS16_be($receiver) | 0;
          }
          pos[n_1] = p;
        }
      }
      return new TtfFont$Glyph(this, xMin, yMin, xMax, yMax, contoursIndices, copyOf(flags_0.data, flags_0.size), xPos, yPos, this.horMetrics.get_za3lpa$(index).advanceWidth);
    }
  };
  TtfFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TtfFont',
    interfaces: []
  };
  function fillText($receiver, font, text, size, x, y, color, origin) {
    if (size === void 0)
      size = 16.0;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    if (origin === void 0)
      origin = TtfFont$Origin$BASELINE_getInstance();
    font.fillText_psrqci$($receiver, text, size, x, y, color, origin);
  }
  function BMP() {
    BMP_instance = this;
    ImageFormat.call(this, ['bmp']);
  }
  BMP.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readStringz(s, 2), 'BM'))
      return null;
    var size = readS32_le_0(s);
    var reserved1 = readS16_le(s);
    var reserved2 = readS16_le(s);
    var offBits = readS32_le_0(s);
    var bsize = readS32_le_0(s);
    var width = readS32_le_0(s);
    var height = readS32_le_0(s);
    var planes = readS16_le(s);
    var bitcount = readS16_le(s);
    var $receiver = new ImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = bitcount;
    return $receiver;
  };
  BMP.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.decodeHeader_1ooaqm$(s, props);
    if (tmp$ == null) {
      throw new IllegalArgumentException('Not a BMP file');
    }
    var h = tmp$;
    var compression = readS32_le_0(s);
    var sizeImage = readS32_le_0(s);
    var pixelsPerMeterX = readS32_le_0(s);
    var pixelsPerMeterY = readS32_le_0(s);
    var clrUsed = readS32_le_0(s);
    var clrImportant = readS32_le_0(s);
    if (h.bitsPerPixel === 8) {
      var out = new Bitmap8(h.width, h.height);
      for (var n = 0; n < 256; n++)
        out.palette[n] = readS32_le_0(s) | (new Kotlin.Long(-16777216, 0)).toInt();
      tmp$_0 = h.height;
      for (var n_0 = 0; n_0 < tmp$_0; n_0++)
        out.setRow_3fbn1q$(h.height - n_0 - 1 | 0, readBytes(s, h.width));
      return new ImageData(listOf(new ImageFrame(out)));
    }
     else {
      var out_0 = new Bitmap32(h.width, h.height);
      tmp$_1 = h.height;
      for (var n_1 = 0; n_1 < tmp$_1; n_1++)
        out_0.setRow_aio0fn$(h.height - n_1 - 1 | 0, readIntArray_le(s, h.width));
      return new ImageData(listOf(new ImageFrame(out_0)));
    }
  };
  BMP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BMP',
    interfaces: [ImageFormat]
  };
  var BMP_instance = null;
  function BMP_getInstance() {
    if (BMP_instance === null) {
      new BMP();
    }
    return BMP_instance;
  }
  function DDS() {
    DDS_instance = this;
    ImageFormat.call(this, ['dds']);
    this.fourcc_qovqgb$_8rhdqq$_0 = new Extra$Property(void 0, DDS$fourcc$lambda);
  }
  var Any = Object;
  var lmapOf = $module$kds_js.com.soywiz.kds.lmapOf_qfcya0$;
  DDS.prototype.get_fourcc_qovqgb$ = function ($receiver) {
    var $this = this.fourcc_qovqgb$_8rhdqq$_0;
    var property = new PropertyMetadata('fourcc');
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
  DDS.prototype.set_fourcc_nqhl9v$ = function ($receiver, fourcc) {
    var $this = this.fourcc_qovqgb$_8rhdqq$_0;
    var property = new PropertyMetadata('fourcc');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = fourcc) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  };
  DDS.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readString(s, 4), 'DDS '))
      return null;
    var size = readS32_le_0(s);
    var sh = readStream(s, size - 4 | 0);
    var flags = readS32_le_0(sh);
    var height = readS32_le_0(sh);
    var width = readS32_le_0(sh);
    var pitchOrLinearSize = readS32_le_0(sh);
    var depth = readS32_le_0(sh);
    var mipmapCount = readS32_le_0(sh);
    var reserved = readIntArray_le(sh, 11);
    var pf_size = readS32_le_0(sh);
    var pf_s = readStream(sh, pf_size - 4 | 0);
    var pf_flags = readS32_le_0(pf_s);
    var pf_fourcc = readString(pf_s, 4);
    var pf_bitcount = readS32_le_0(pf_s);
    var pf_rbitmask = readS32_le_0(pf_s);
    var pf_gbitmask = readS32_le_0(pf_s);
    var pf_bbitmask = readS32_le_0(pf_s);
    var pf_abitmask = readS32_le_0(pf_s);
    var caps = readS32_le_0(sh);
    var caps2 = readS32_le_0(sh);
    var caps3 = readS32_le_0(sh);
    var caps4 = readS32_le_0(sh);
    var reserved2 = readS32_le_0(sh);
    var $receiver = new ImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = 32;
    this.set_fourcc_nqhl9v$($receiver, pf_fourcc);
    return $receiver;
  };
  DDS.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var h = (tmp$ = this.decodeHeader_1ooaqm$(s, props)) != null ? tmp$ : invalidOp('Not a DDS file');
    var fourcc = this.get_fourcc_qovqgb$(h).toUpperCase();
    if (equals(fourcc, 'DXT1'))
      tmp$_0 = DXT1_getInstance();
    else if (equals(fourcc, 'DXT3'))
      tmp$_0 = DXT3_getInstance();
    else if (equals(fourcc, 'DXT4'))
      tmp$_0 = DXT4_getInstance();
    else if (equals(fourcc, 'DXT5'))
      tmp$_0 = DXT5_getInstance();
    else
      tmp$_0 = invalidOp("Unsupported DDS FourCC '" + fourcc + "'");
    var subimageFormat = tmp$_0;
    var bytes = readAll(s);
    return subimageFormat.readImage_1ooaqm$(openSync(bytes), new ImageDecodingProps('image.' + fourcc, h.width, h.height));
  };
  function DDS$fourcc$lambda() {
    return '    ';
  }
  DDS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DDS',
    interfaces: [ImageFormat]
  };
  var DDS_instance = null;
  function DDS_getInstance() {
    if (DDS_instance === null) {
      new DDS();
    }
    return DDS_instance;
  }
  function DXT1() {
    DXT1_instance = this;
    DXT1Base.call(this, 'dxt1', true);
  }
  DXT1.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT1',
    interfaces: [DXT1Base]
  };
  var DXT1_instance = null;
  function DXT1_getInstance() {
    if (DXT1_instance === null) {
      new DXT1();
    }
    return DXT1_instance;
  }
  function DXT2() {
    DXT2_instance = this;
    DXT2_3.call(this, 'dxt2', true);
  }
  DXT2.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT2',
    interfaces: [DXT2_3]
  };
  var DXT2_instance = null;
  function DXT2_getInstance() {
    if (DXT2_instance === null) {
      new DXT2();
    }
    return DXT2_instance;
  }
  function DXT3() {
    DXT3_instance = this;
    DXT2_3.call(this, 'dxt3', false);
  }
  DXT3.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT3',
    interfaces: [DXT2_3]
  };
  var DXT3_instance = null;
  function DXT3_getInstance() {
    if (DXT3_instance === null) {
      new DXT3();
    }
    return DXT3_instance;
  }
  function DXT4() {
    DXT4_instance = this;
    DXT4_5.call(this, 'dxt4', true);
  }
  DXT4.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT4',
    interfaces: [DXT4_5]
  };
  var DXT4_instance = null;
  function DXT4_getInstance() {
    if (DXT4_instance === null) {
      new DXT4();
    }
    return DXT4_instance;
  }
  function DXT5() {
    DXT5_instance = this;
    DXT4_5.call(this, 'dxt5', false);
  }
  DXT5.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DXT5',
    interfaces: [DXT4_5]
  };
  var DXT5_instance = null;
  function DXT5_getInstance() {
    if (DXT5_instance === null) {
      new DXT5();
    }
    return DXT5_instance;
  }
  function DXT1Base(format, premult) {
    DXT.call(this, format, true, 8);
  }
  DXT1Base.prototype.decodeRow_kz0417$ = function (data, dataOffset, bmp, bmpOffset, bmpStride) {
    DXT$Companion_getInstance().decodeDxt1ColorCond_syel7v$(data, dataOffset + 0 | 0, this.cc);
    var cdata = readS32_le(data, dataOffset + 4 | 0);
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        bmp[pos + x | 0] = RGBA_getInstance().packRGB_A_vux9f0$(this.cc[c], 255);
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT1Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT1Base',
    interfaces: [DXT]
  };
  function DXT2_3(format, premult) {
    DXT.call(this, format, premult, 16);
  }
  DXT2_3.prototype.decodeRow_kz0417$ = function (data, dataOffset, bmp, bmpOffset, bmpStride) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, this.aa);
    DXT$Companion_getInstance().decodeDxt1Color_syel7v$(data, dataOffset + 8 | 0, this.cc);
    var cdata = readS32_le(data, dataOffset + 8 + 4 | 0);
    var adata = readU32_le(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16_le(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(Kotlin.Long.fromInt(7)).toInt();
        bmp[pos + x | 0] = RGBA_getInstance().packRGB_A_vux9f0$(this.cc[c], this.aa[a]);
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT2_3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT2_3',
    interfaces: [DXT]
  };
  function DXT4_5(format, premult) {
    DXT.call(this, format, premult, 16);
  }
  DXT4_5.prototype.decodeRow_kz0417$ = function (data, dataOffset, bmp, bmpOffset, bmpStride) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, this.aa);
    DXT$Companion_getInstance().decodeDxt1ColorCond_syel7v$(data, dataOffset + 8 | 0, this.cc);
    var cdata = readS32_le(data, dataOffset + 8 + 4 | 0);
    var adata = readU32_le(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16_le(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(Kotlin.Long.fromInt(7)).toInt();
        bmp[pos + x | 0] = RGBA_getInstance().packRGB_A_vux9f0$(this.cc[c], this.aa[a]);
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT4_5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT4_5',
    interfaces: [DXT]
  };
  function DXT(format, premult, blockSize) {
    DXT$Companion_getInstance();
    ImageFormat.call(this, [format]);
    this.format = format;
    this.premult = premult;
    this.blockSize = blockSize;
    this.aa = new Int32Array(8);
    this.cc = new Int32Array(4);
  }
  DXT.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!startsWith((new PathInfo(props.filename)).extensionLC, this.format))
      return null;
    var $receiver = new ImageInfo();
    var tmp$, tmp$_0;
    $receiver.width = (tmp$ = props.width) != null ? tmp$ : 1;
    $receiver.height = (tmp$_0 = props.height) != null ? tmp$_0 : 1;
    return $receiver;
  };
  DXT.prototype.decodeBitmap_mj6st8$ = function (bytes, width, height) {
    var out = new Bitmap32(width, height, void 0, this.premult);
    var blockWidth = out.width / 4 | 0;
    var blockHeight = out.height / 4 | 0;
    var offset = 0;
    for (var y = 0; y < blockHeight; y++) {
      for (var x = 0; x < blockWidth; x++) {
        this.decodeRow_kz0417$(bytes, offset, out.data, out.index_vux9f0$(x * 4 | 0, y * 4 | 0), out.width);
        offset = offset + this.blockSize | 0;
      }
    }
    return out;
  };
  DXT.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var bytes = readAll(s);
    var totalPixels = ((bytes.length / this.blockSize | 0) * 4 | 0) * 4 | 0;
    var potentialSide = numberToInt(Math_0.sqrt(totalPixels));
    var width = (tmp$ = props.width) != null ? tmp$ : potentialSide;
    var height = (tmp$_0 = props.height) != null ? tmp$_0 : potentialSide;
    return new ImageData(listOf(new ImageFrame(this.decodeBitmap_mj6st8$(bytes, width, height))));
  };
  function DXT$Companion() {
    DXT$Companion_instance = this;
    this.FACT_2_3 = numberToInt(2.0 / 3.0 * 256);
    this.FACT_1_3 = numberToInt(1.0 / 3.0 * 256);
    this.FACT_1_2 = numberToInt(1.0 / 2.0 * 256);
  }
  DXT$Companion.prototype.decodeRGB656_za3lpa$ = function (v) {
    return BGR_565_getInstance().toRGBA_za3lpa$(v);
  };
  DXT$Companion.prototype.decodeDxt1ColorCond_syel7v$ = function (data, dataOffset, cc) {
    var c0 = readU16_le(data, dataOffset + 0 | 0);
    var c1 = readU16_le(data, dataOffset + 2 | 0);
    cc[0] = this.decodeRGB656_za3lpa$(c0);
    cc[1] = this.decodeRGB656_za3lpa$(c1);
    if (c0 > c1) {
      cc[2] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_2_3);
      cc[3] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_1_3);
    }
     else {
      cc[2] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_1_2);
      cc[3] = Colors_getInstance().TRANSPARENT_BLACK;
    }
  };
  DXT$Companion.prototype.decodeDxt1Color_syel7v$ = function (data, dataOffset, cc) {
    cc[0] = this.decodeRGB656_za3lpa$(readU16_le(data, dataOffset + 0 | 0));
    cc[1] = this.decodeRGB656_za3lpa$(readU16_le(data, dataOffset + 2 | 0));
    cc[2] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_2_3);
    cc[3] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_1_3);
  };
  DXT$Companion.prototype.decodeDxt5Alpha_syel7v$ = function (data, dataOffset, aa) {
    var a0 = readU8_0(data, dataOffset + 0 | 0);
    var a1 = readU8_0(data, dataOffset + 1 | 0);
    aa[0] = a0;
    aa[1] = a1;
    if (a0 > a1) {
      aa[2] = ((6 * a0 | 0) + (1 * a1 | 0) | 0) / 7 | 0;
      aa[3] = ((5 * a0 | 0) + (2 * a1 | 0) | 0) / 7 | 0;
      aa[4] = ((4 * a0 | 0) + (3 * a1 | 0) | 0) / 7 | 0;
      aa[5] = ((3 * a0 | 0) + (4 * a1 | 0) | 0) / 7 | 0;
      aa[6] = ((2 * a0 | 0) + (5 * a1 | 0) | 0) / 7 | 0;
      aa[7] = ((1 * a0 | 0) + (6 * a1 | 0) | 0) / 7 | 0;
    }
     else {
      aa[2] = ((4 * a0 | 0) + (1 * a1 | 0) | 0) / 5 | 0;
      aa[3] = ((3 * a0 | 0) + (2 * a1 | 0) | 0) / 5 | 0;
      aa[4] = ((2 * a0 | 0) + (3 * a1 | 0) | 0) / 5 | 0;
      aa[5] = ((1 * a0 | 0) + (4 * a1 | 0) | 0) / 5 | 0;
      aa[6] = 0;
      aa[7] = 255;
    }
  };
  DXT$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DXT$Companion_instance = null;
  function DXT$Companion_getInstance() {
    if (DXT$Companion_instance === null) {
      new DXT$Companion();
    }
    return DXT$Companion_instance;
  }
  DXT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT',
    interfaces: [ImageFormat]
  };
  function ICO() {
    ICO_instance = this;
    ImageFormat.call(this, ['ico']);
  }
  ICO.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (readU16_le_0(s) !== 0)
      return null;
    if (readU16_le_0(s) !== 1)
      return null;
    var count = readU16_le_0(s);
    if (count >= 1000)
      return null;
    return new ImageInfo();
  };
  function ICO$readImage$DirEntry(width, height, colorCount, reserved, planes, bitCount, size, offset) {
    this.width = width;
    this.height = height;
    this.colorCount = colorCount;
    this.reserved = reserved;
    this.planes = planes;
    this.bitCount = bitCount;
    this.size = size;
    this.offset = offset;
  }
  ICO$readImage$DirEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DirEntry',
    interfaces: []
  };
  ICO$readImage$DirEntry.prototype.component1 = function () {
    return this.width;
  };
  ICO$readImage$DirEntry.prototype.component2 = function () {
    return this.height;
  };
  ICO$readImage$DirEntry.prototype.component3 = function () {
    return this.colorCount;
  };
  ICO$readImage$DirEntry.prototype.component4 = function () {
    return this.reserved;
  };
  ICO$readImage$DirEntry.prototype.component5 = function () {
    return this.planes;
  };
  ICO$readImage$DirEntry.prototype.component6 = function () {
    return this.bitCount;
  };
  ICO$readImage$DirEntry.prototype.component7 = function () {
    return this.size;
  };
  ICO$readImage$DirEntry.prototype.component8 = function () {
    return this.offset;
  };
  ICO$readImage$DirEntry.prototype.copy_wrdw30$ = function (width, height, colorCount, reserved, planes, bitCount, size, offset) {
    return new ICO$readImage$DirEntry(width === void 0 ? this.width : width, height === void 0 ? this.height : height, colorCount === void 0 ? this.colorCount : colorCount, reserved === void 0 ? this.reserved : reserved, planes === void 0 ? this.planes : planes, bitCount === void 0 ? this.bitCount : bitCount, size === void 0 ? this.size : size, offset === void 0 ? this.offset : offset);
  };
  ICO$readImage$DirEntry.prototype.toString = function () {
    return 'DirEntry(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + (', colorCount=' + Kotlin.toString(this.colorCount)) + (', reserved=' + Kotlin.toString(this.reserved)) + (', planes=' + Kotlin.toString(this.planes)) + (', bitCount=' + Kotlin.toString(this.bitCount)) + (', size=' + Kotlin.toString(this.size)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  ICO$readImage$DirEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.reserved) | 0;
    result = result * 31 + Kotlin.hashCode(this.planes) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  ICO$readImage$DirEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.colorCount, other.colorCount) && Kotlin.equals(this.reserved, other.reserved) && Kotlin.equals(this.planes, other.planes) && Kotlin.equals(this.bitCount, other.bitCount) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.offset, other.offset)))));
  };
  function ICO$readImage$readDirEntry(closure$s) {
    return function () {
      return new ICO$readImage$DirEntry(readU8(closure$s), readU8(closure$s), readU8(closure$s), readU8(closure$s), readU16_le_0(closure$s), readU16_le_0(closure$s), readS32_le_0(closure$s), readS32_le_0(closure$s));
    };
  }
  function ICO$readImage$readBitmap(closure$props) {
    return function (e, s) {
      var tmp$;
      var tryPNGHead = readU32_be(slice(s));
      if (equals(tryPNGHead, new Kotlin.Long(-1991225785, 0)))
        return PNG_getInstance().decode_1ooaqm$(slice(s), closure$props.copy_qp3p0u$(closure$props.filename + '.png'));
      var headerSize = readS32_le_0(s);
      var width = readS32_le_0(s);
      var height = readS32_le_0(s);
      var planes = readS16_le(s);
      var bitCount = readS16_le(s);
      var compression = readS32_le_0(s);
      var imageSize = readS32_le_0(s);
      var pixelsXPerMeter = readS32_le_0(s);
      var pixelsYPerMeter = readS32_le_0(s);
      var clrUsed = readS32_le_0(s);
      var clrImportant = readS32_le_0(s);
      var palette = new Int32Array(0);
      if (compression !== 0)
        throw new UnsupportedOperationException('Not supported compressed .ico');
      if (bitCount <= 8) {
        var colors = clrUsed === 0 ? 1 << bitCount : clrUsed;
        var $receiver = until(0, colors);
        var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination.add_11rb$;
          var b = readU8(s);
          var g = readU8(s);
          var r = readU8(s);
          var reserved = readU8(s);
          tmp$_1.call(destination, RGBA_getInstance().invoke_tjonv8$(r, g, b, 255));
        }
        palette = toIntArray(destination);
      }
      var stride = Kotlin.imul(e.width, bitCount) / 8 | 0;
      var data = readBytes(s, Kotlin.imul(stride, e.height));
      if (bitCount === 4)
        tmp$ = new Bitmap4(e.width, e.height, data, palette);
      else if (bitCount === 8)
        tmp$ = new Bitmap8(e.width, e.height, data, palette);
      else if (bitCount === 32)
        tmp$ = (new Bitmap32(e.width, e.height)).writeDecoded_77vltg$(BGRA_getInstance(), data);
      else
        throw new UnsupportedOperationException('Unsupported bitCount: ' + bitCount);
      return tmp$;
    };
  }
  ICO.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var readDirEntry = ICO$readImage$readDirEntry(s);
    var readBitmap = ICO$readImage$readBitmap(props);
    var reserved = readU16_le_0(s);
    var type = readU16_le_0(s);
    var count = readU16_le_0(s);
    var $receiver = until(0, count);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(readDirEntry());
    }
    var entries = destination;
    var bitmaps = ArrayList_init_0();
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var bmp = readBitmap(e, sliceWithSize_0(s, Kotlin.Long.fromInt(e.offset), Kotlin.Long.fromInt(e.size)));
      bmp.flipY();
      bitmaps.add_11rb$(bmp);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(bitmaps, 10));
    var tmp$_1;
    tmp$_1 = bitmaps.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(new ImageFrame(item_0, void 0, void 0, void 0, false));
    }
    return new ImageData(destination_0);
  };
  ICO.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ICO',
    interfaces: [ImageFormat]
  };
  var ICO_instance = null;
  function ICO_getInstance() {
    if (ICO_instance === null) {
      new ICO();
    }
    return ICO_instance;
  }
  function ImageData(frames) {
    this.frames = frames;
    this.$delegate_eltpmo$_0 = new Extra$Mixin();
  }
  Object.defineProperty(ImageData.prototype, 'area', {
    get: function () {
      return get_area(this.frames);
    }
  });
  function ImageData$get_ImageData$mainBitmap$lambda(it) {
    if (it.main) {
      return kotlin_js_internal_IntCompanionObject.MAX_VALUE;
    }
     else {
      return Kotlin.imul(Kotlin.imul(it.bitmap.width, it.bitmap.height), Kotlin.imul(it.bitmap.bpp, it.bitmap.bpp));
    }
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
  Object.defineProperty(ImageData.prototype, 'mainBitmap', {
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = firstOrNull(sortedWith(this.frames, new Comparator$ObjectLiteral(compareByDescending$lambda(ImageData$get_ImageData$mainBitmap$lambda))))) != null ? tmp$.bitmap : null;
      if (tmp$_0 == null) {
        throw new IllegalArgumentException('No bitmap found');
      }
      return tmp$_0;
    }
  });
  ImageData.prototype.toString = function () {
    return 'ImageData(' + this.frames + ')';
  };
  Object.defineProperty(ImageData.prototype, 'extra', {
    get: function () {
      return this.$delegate_eltpmo$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_eltpmo$_0.extra = tmp$;
    }
  });
  ImageData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageData',
    interfaces: [Extra]
  };
  function ImageDecodingProps(filename, width, height, extra) {
    if (filename === void 0)
      filename = 'unknown';
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (extra === void 0)
      extra = null;
    this.filename = filename;
    this.width = width;
    this.height = height;
    this.extra_5zgpe1$_0 = extra;
  }
  Object.defineProperty(ImageDecodingProps.prototype, 'extra', {
    get: function () {
      return this.extra_5zgpe1$_0;
    },
    set: function (extra) {
      this.extra_5zgpe1$_0 = extra;
    }
  });
  ImageDecodingProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageDecodingProps',
    interfaces: [Extra]
  };
  ImageDecodingProps.prototype.component1 = function () {
    return this.filename;
  };
  ImageDecodingProps.prototype.component2 = function () {
    return this.width;
  };
  ImageDecodingProps.prototype.component3 = function () {
    return this.height;
  };
  ImageDecodingProps.prototype.component4 = function () {
    return this.extra;
  };
  ImageDecodingProps.prototype.copy_qp3p0u$ = function (filename, width, height, extra) {
    return new ImageDecodingProps(filename === void 0 ? this.filename : filename, width === void 0 ? this.width : width, height === void 0 ? this.height : height, extra === void 0 ? this.extra : extra);
  };
  ImageDecodingProps.prototype.toString = function () {
    return 'ImageDecodingProps(filename=' + Kotlin.toString(this.filename) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  ImageDecodingProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  ImageDecodingProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.extra, other.extra)))));
  };
  function ImageEncodingProps(filename, quality, extra) {
    if (filename === void 0)
      filename = '';
    if (quality === void 0)
      quality = 0.81;
    if (extra === void 0)
      extra = null;
    this.filename = filename;
    this.quality = quality;
    this.extra_flamk1$_0 = extra;
  }
  Object.defineProperty(ImageEncodingProps.prototype, 'extra', {
    get: function () {
      return this.extra_flamk1$_0;
    },
    set: function (extra) {
      this.extra_flamk1$_0 = extra;
    }
  });
  ImageEncodingProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageEncodingProps',
    interfaces: [Extra]
  };
  ImageEncodingProps.prototype.component1 = function () {
    return this.filename;
  };
  ImageEncodingProps.prototype.component2 = function () {
    return this.quality;
  };
  ImageEncodingProps.prototype.component3 = function () {
    return this.extra;
  };
  ImageEncodingProps.prototype.copy_x69rha$ = function (filename, quality, extra) {
    return new ImageEncodingProps(filename === void 0 ? this.filename : filename, quality === void 0 ? this.quality : quality, extra === void 0 ? this.extra : extra);
  };
  ImageEncodingProps.prototype.toString = function () {
    return 'ImageEncodingProps(filename=' + Kotlin.toString(this.filename) + (', quality=' + Kotlin.toString(this.quality)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  ImageEncodingProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.quality) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  ImageEncodingProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.quality, other.quality) && Kotlin.equals(this.extra, other.extra)))));
  };
  function ImageFormat(exts) {
    var destination = ArrayList_init_0(exts.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== exts.length; ++tmp$) {
      var item = exts[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      var $receiver = item.toLowerCase();
      var tmp$_1;
      tmp$_0.call(destination, trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString());
    }
    this.extensions = toSet(destination);
  }
  ImageFormat.prototype.readImage_1ooaqm$$default = function (s, props) {
    throw new NotImplementedError_init();
  };
  ImageFormat.prototype.readImage_1ooaqm$ = function (s, props, callback$default) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return callback$default ? callback$default(s, props) : this.readImage_1ooaqm$$default(s, props);
  };
  ImageFormat.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    throw new UnsupportedOperationException();
  };
  ImageFormat.prototype.writeImage_2psbf2$ = function (image, s, props, callback$default) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    callback$default ? callback$default(image, s, props) : this.writeImage_2psbf2$$default(image, s, props);
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var ignoreErrors$result;
    ignoreErrors$break: do {
      try {
        var bmp = this.read_1ooaqm$(s, props);
        var $receiver = new ImageInfo();
        $receiver.width = bmp.width;
        $receiver.height = bmp.height;
        $receiver.bitsPerPixel = bmp.bpp;
        ignoreErrors$result = $receiver;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (true)
            printStackTrace(e);
          ignoreErrors$result = null;
          break ignoreErrors$break;
        }
         else
          throw e;
      }
    }
     while (false);
    return ignoreErrors$result;
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$ = function (s, props, callback$default) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return callback$default ? callback$default(s, props) : this.decodeHeader_1ooaqm$$default(s, props);
  };
  function ImageFormat$readImageInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$readImageInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$readImageInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$closure$filename = closure$filename_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$readImageInWorker$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$readImageInWorker$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$readImageInWorker$lambda.prototype.constructor = Coroutine$ImageFormat$readImageInWorker$lambda;
  Coroutine$ImageFormat$readImageInWorker$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.readImage_1ooaqm$(this.local$closure$s, (new ImageDecodingProps()).copy_qp3p0u$(this.local$closure$filename));
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
  ImageFormat.prototype.readImageInWorker_zdd1ed$ = function (s, filename, continuation) {
    if (filename === void 0)
      filename = 'unknown';
    return executeInWorker(ImageFormat$readImageInWorker$lambda(s, filename, this), continuation);
  };
  ImageFormat.prototype.read_zdd1ed$ = function (s, filename) {
    if (filename === void 0)
      filename = 'unknown';
    return this.readImage_1ooaqm$(s, (new ImageDecodingProps()).copy_qp3p0u$(filename)).mainBitmap;
  };
  ImageFormat.prototype.read_phxig4$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$read_phxig4$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_phxig4$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$read_phxig4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_phxig4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_phxig4$.prototype.constructor = Coroutine$read_phxig4$;
  Coroutine$read_phxig4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, this.local$file.basename);
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
  ImageFormat.prototype.read_nwlife$ = function (s, filename) {
    if (filename === void 0)
      filename = 'unknown';
    return this.read_zdd1ed$(openSync(s), filename);
  };
  ImageFormat.prototype.read_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.readImage_1ooaqm$(s, props).mainBitmap;
  };
  ImageFormat.prototype.read_pdgdrr$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(openSync(s), props);
  };
  ImageFormat.prototype.check_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    var tmp$;
    var ignoreErrors$result;
    ignoreErrors$break: do {
      try {
        ignoreErrors$result = this.decodeHeader_1ooaqm$(s, props) != null;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (true)
            printStackTrace(e);
          ignoreErrors$result = null;
          break ignoreErrors$break;
        }
         else
          throw e;
      }
    }
     while (false);
    return (tmp$ = ignoreErrors$result) != null ? tmp$ : false;
  };
  ImageFormat.prototype.decode_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(s, props);
  };
  ImageFormat.prototype.decode_pdgdrr$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(openSync(s), props);
  };
  ImageFormat.prototype.decode_phxig4$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_phxig4$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_phxig4$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$decode_phxig4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_phxig4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_phxig4$.prototype.constructor = Coroutine$decode_phxig4$;
  Coroutine$decode_phxig4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, this.local$file.basename);
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
  function ImageFormat$decodeInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$decodeInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$decodeInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$closure$filename = closure$filename_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$decodeInWorker$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$decodeInWorker$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$decodeInWorker$lambda.prototype.constructor = Coroutine$ImageFormat$decodeInWorker$lambda;
  Coroutine$ImageFormat$decodeInWorker$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.read_zdd1ed$(openSync(this.local$closure$s), this.local$closure$filename);
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
  ImageFormat.prototype.decodeInWorker_nwlife$ = function (s, filename, continuation) {
    if (filename === void 0)
      filename = 'unknown';
    return executeInWorker(ImageFormat$decodeInWorker$lambda(s, filename, this), continuation);
  };
  var ByteArrayBuffer_init = $module$korio_js.$$importsForInline$$['kmem-js'].com.soywiz.kmem.ByteArrayBuffer_init_za3lpa$;
  var MemorySyncStream = $module$korio_js.com.soywiz.korio.stream.MemorySyncStream_yyklod$;
  ImageFormat.prototype.encode_dqmhj5$ = function (frames, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var buffer = ByteArrayBuffer_init(get_area(frames) * 4 | 0);
    var s = MemorySyncStream(buffer);
    this.writeImage_2psbf2$(new ImageData(frames), s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_ruzdkj$ = function (image, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var buffer = ByteArrayBuffer_init(image.area * 4 | 0);
    var s = MemorySyncStream(buffer);
    this.writeImage_2psbf2$(image, s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_hnx2ev$ = function (bitmap, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    return this.encode_dqmhj5$(listOf(new ImageFrame(bitmap)), props);
  };
  ImageFormat.prototype.read_ldwfpl$ = function (file_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$read_ldwfpl$(this, file_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_ldwfpl$($this, file_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$props = props_0;
  }
  Coroutine$read_ldwfpl$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_ldwfpl$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_ldwfpl$.prototype.constructor = Coroutine$read_ldwfpl$;
  Coroutine$read_ldwfpl$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$file.readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.readImageInWorker_1ooaqm$(openSync(this.result_0), this.local$props.copy_qp3p0u$(this.local$file.basename), this);
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
  function ImageFormat$readImageInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$readImageInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$readImageInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$closure$props = closure$props_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$readImageInWorker$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$readImageInWorker$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$readImageInWorker$lambda_0.prototype.constructor = Coroutine$ImageFormat$readImageInWorker$lambda_0;
  Coroutine$ImageFormat$readImageInWorker$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.readImage_1ooaqm$(this.local$closure$s, this.local$closure$props);
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
  ImageFormat.prototype.readImageInWorker_1ooaqm$ = function (s, props, continuation) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return executeInWorker(ImageFormat$readImageInWorker$lambda_0(s, props, this), continuation);
  };
  function ImageFormat$decodeInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$decodeInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$decodeInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$closure$props = closure$props_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$decodeInWorker$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$decodeInWorker$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$decodeInWorker$lambda_0.prototype.constructor = Coroutine$ImageFormat$decodeInWorker$lambda_0;
  Coroutine$ImageFormat$decodeInWorker$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.read_1ooaqm$(openSync(this.local$closure$s), this.local$closure$props);
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
  ImageFormat.prototype.decodeInWorker_pdgdrr$ = function (s, props, continuation) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return executeInWorker(ImageFormat$decodeInWorker$lambda_0(s, props, this), continuation);
  };
  function ImageFormat$encodeInWorker$lambda(closure$bitmap_0, closure$props_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$encodeInWorker$lambda(closure$bitmap_0, closure$props_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$encodeInWorker$lambda(closure$bitmap_0, closure$props_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$bitmap = closure$bitmap_0;
    this.local$closure$props = closure$props_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$encodeInWorker$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$encodeInWorker$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$encodeInWorker$lambda.prototype.constructor = Coroutine$ImageFormat$encodeInWorker$lambda;
  Coroutine$ImageFormat$encodeInWorker$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.encode_hnx2ev$(this.local$closure$bitmap, this.local$closure$props);
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
  ImageFormat.prototype.encodeInWorker_hnx2ev$ = function (bitmap, props, continuation) {
    if (props === void 0)
      props = new ImageEncodingProps();
    return executeInWorker(ImageFormat$encodeInWorker$lambda(bitmap, props, this), continuation);
  };
  ImageFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFormat',
    interfaces: []
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function ImageFormats() {
    ImageFormat.call(this, ['']);
    this.formats_0 = LinkedHashSet_init();
  }
  ImageFormats.prototype.clear = function () {
    this.formats_0.clear();
    return this;
  };
  ImageFormats.prototype.backup = function () {
    return toList_0(this.formats_0);
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  ImageFormats.prototype.restore_3ih83g$ = function (formats) {
    this.formats_0.clear();
    addAll(this.formats_0, formats);
  };
  ImageFormats.prototype.saveRestore_klfg04$ = defineInlineFunction('korim-js.com.soywiz.korim.format.ImageFormats.saveRestore_klfg04$', function (callback) {
    var formats = this.backup();
    try {
      return callback();
    }
    finally {
      this.restore_3ih83g$(formats);
    }
  });
  ImageFormats.prototype.temporalFormats_zg1cg$ = defineInlineFunction('korim-js.com.soywiz.korim.format.ImageFormats.temporalFormats_zg1cg$', wrapFunction(function () {
    return function (formats, callback) {
      var saveRestore_klfg04$result;
      var formats_0 = this.backup();
      try {
        this.clear().register_ld8ot4$(formats);
        saveRestore_klfg04$result = callback();
      }
      finally {
        this.restore_3ih83g$(formats_0);
      }
      return saveRestore_klfg04$result;
    };
  }));
  var addAll_0 = Kotlin.kotlin.collections.addAll_ye1y7v$;
  ImageFormats.prototype.register_56bozu$ = function (format) {
    addAll_0(this.formats_0, format);
    return this;
  };
  ImageFormats.prototype.register_qcealv$ = function (format) {
    this.formats_0.add_11rb$(format);
    return this;
  };
  ImageFormats.prototype.register_ld8ot4$ = function (format) {
    addAll(this.formats_0, format);
    return this;
  };
  ImageFormats.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    tmp$ = this.formats_0.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      try {
        tmp$_0 = format.decodeHeader_1ooaqm$(slice(s), props);
        if (tmp$_0 == null) {
          continue;
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          continue;
        }
         else
          throw e;
      }
      return tmp$_0;
    }
    return null;
  };
  ImageFormats.prototype.readImage_1ooaqm$$default = function (s, props) {
    var $receiver = this.formats_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.check_1ooaqm$(slice(s), props)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var format = firstOrNull$result;
    if (format != null)
      return format.readImage_1ooaqm$(slice(s), props);
    throw new UnsupportedOperationException('Not suitable image format : MAGIC:' + readString(slice(s), 4, lang.ASCII) + '(' + get_hexString(readBytes(slice(s), 4)) + ') (' + toString_0(readBytes(slice(s), 4), lang.ASCII) + ')');
  };
  ImageFormats.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    var ext = (new PathInfo(props.filename)).extensionLC;
    var $receiver = this.formats_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.extensions.contains_11rb$(ext)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      var tmp$_1 = "Don't know how to generate file for extension '" + ext + "' (supported extensions ";
      var $receiver_0 = this.formats_0;
      var destination = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var list = element_0.extensions;
        addAll(destination, list);
      }
      throw new UnsupportedOperationException(tmp$_1 + destination + ') (props ' + props + ')');
    }
    var format = tmp$;
    format.writeImage_2psbf2$(image, s, props);
  };
  ImageFormats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFormats',
    interfaces: [ImageFormat]
  };
  function writeTo($receiver, file, props, formats, continuation) {
    if (props === void 0)
      props = new ImageEncodingProps();
    if (formats === void 0)
      formats = get_defaultImageFormats();
    return file.writeBytes_gssovf$(formats.encode_hnx2ev$($receiver, props.copy_x69rha$(file.basename)), [], continuation);
  }
  function defaultImageFormats$lambda() {
    return registerStandard(new ImageFormats());
  }
  var defaultImageFormats;
  function get_defaultImageFormats() {
    new PropertyMetadata('defaultImageFormats');
    return defaultImageFormats.value;
  }
  function ImageFrame(bitmap, time, targetX, targetY, main) {
    if (time === void 0)
      time = Kotlin.Long.ZERO;
    if (targetX === void 0)
      targetX = 0;
    if (targetY === void 0)
      targetY = 0;
    if (main === void 0)
      main = true;
    this.bitmap = bitmap;
    this.time = time;
    this.targetX = targetX;
    this.targetY = targetY;
    this.main = main;
    this.$delegate_qnaswn$_0 = new Extra$Mixin();
  }
  Object.defineProperty(ImageFrame.prototype, 'area', {
    get: function () {
      return this.bitmap.area;
    }
  });
  ImageFrame.prototype.toString = function () {
    return 'ImageFrame(' + this.bitmap + ', time=' + this.time + ', targetX=' + this.targetX + ', targetY=' + this.targetY + ', main=' + this.main + ')';
  };
  Object.defineProperty(ImageFrame.prototype, 'extra', {
    get: function () {
      return this.$delegate_qnaswn$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_qnaswn$_0.extra = tmp$;
    }
  });
  ImageFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFrame',
    interfaces: [Extra]
  };
  function get_area($receiver) {
    var tmp$;
    var sum = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.area | 0;
    }
    return sum;
  }
  function ImageInfo() {
    this.$delegate_elx5vo$_0 = new Extra$Mixin();
    this.width = 0;
    this.height = 0;
    this.bitsPerPixel = 0;
  }
  Object.defineProperty(ImageInfo.prototype, 'size', {
    get: function () {
      var width = this.width;
      var height = this.height;
      return new Size_init(numberToDouble(width), numberToDouble(height));
    }
  });
  ImageInfo.prototype.toString = function () {
    return 'ImageInfo(width=' + this.width + ', height=' + this.height + ', bpp=' + this.bitsPerPixel + ', extra=' + toString(this.extra) + ')';
  };
  Object.defineProperty(ImageInfo.prototype, 'extra', {
    get: function () {
      return this.$delegate_elx5vo$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_elx5vo$_0.extra = tmp$;
    }
  });
  ImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageInfo',
    interfaces: [Extra]
  };
  function JPEG() {
    JPEG_instance = this;
    ImageFormat.call(this, ['jpg', 'jpeg']);
  }
  JPEG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    try {
      var info = JPEGDecoder$Companion_getInstance().decodeInfo_fqrh44$(readAll(s));
      var $receiver = new ImageInfo();
      $receiver.width = info.width;
      $receiver.height = info.height;
      $receiver.bitsPerPixel = 24;
      return $receiver;
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return null;
      }
       else
        throw e;
    }
  };
  JPEG.prototype.readImage_1ooaqm$$default = function (s, props) {
    return new ImageData(listOf(new ImageFrame(JPEGDecoder$Companion_getInstance().decode_fqrh44$(readAll(s)))));
  };
  JPEG.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    writeBytes(s, JPEGEncoder$Companion_getInstance().encode_gqk24z$(image.mainBitmap.toBMP32(), numberToInt(props.quality * 100)));
  };
  JPEG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JPEG',
    interfaces: [ImageFormat]
  };
  var JPEG_instance = null;
  function JPEG_getInstance() {
    if (JPEG_instance === null) {
      new JPEG();
    }
    return JPEG_instance;
  }
  function JPEGDecoder() {
    JPEGDecoder$Companion_getInstance();
    this.dctZigZag_0 = new Int32Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
    this.dctCos1_0 = 4017;
    this.dctSin1_0 = 799;
    this.dctCos3_0 = 3406;
    this.dctSin3_0 = 2276;
    this.dctCos6_0 = 1567;
    this.dctSin6_0 = 3784;
    this.dctSqrt2_0 = 5793;
    this.dctSqrt1d2_0 = 2896;
    this.width_0 = 0;
    this.height_0 = 0;
    this.jfif_0 = null;
    this.adobe_0 = null;
    this.components_0 = ArrayList_init_0();
    this.colorTransform_0 = null;
  }
  function JPEGDecoder$Jfif(versionMajor, versionMinor, densityUnits, xDensity, yDensity, thumbWidth, thumbHeight, thumbData) {
  }
  JPEGDecoder$Jfif.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Jfif',
    interfaces: []
  };
  function JPEGDecoder$Adobe(version, flags0, flags1, transformCode) {
    this.version = version;
    this.flags0 = flags0;
    this.flags1 = flags1;
    this.transformCode = transformCode;
  }
  JPEGDecoder$Adobe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Adobe',
    interfaces: []
  };
  JPEGDecoder.prototype.mceil_0 = function (v) {
    return numberToInt(Math_0.ceil(v));
  };
  function JPEGDecoder$HuffmanNode(children, index) {
    if (children === void 0) {
      children = ArrayList_init_0();
    }
    if (index === void 0)
      index = 0;
    this.children = children;
    this.index = index;
  }
  JPEGDecoder$HuffmanNode.prototype.setChildAt_vux3hl$ = function (index, value) {
    while (this.children.size <= index)
      this.children.add_11rb$(Unit);
    this.children.set_wxm5ur$(index, value);
  };
  JPEGDecoder$HuffmanNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HuffmanNode',
    interfaces: []
  };
  JPEGDecoder$HuffmanNode.prototype.component1 = function () {
    return this.children;
  };
  JPEGDecoder$HuffmanNode.prototype.component2 = function () {
    return this.index;
  };
  JPEGDecoder$HuffmanNode.prototype.copy_e2afru$ = function (children, index) {
    return new JPEGDecoder$HuffmanNode(children === void 0 ? this.children : children, index === void 0 ? this.index : index);
  };
  JPEGDecoder$HuffmanNode.prototype.toString = function () {
    return 'HuffmanNode(children=' + Kotlin.toString(this.children) + (', index=' + Kotlin.toString(this.index)) + ')';
  };
  JPEGDecoder$HuffmanNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.children) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  JPEGDecoder$HuffmanNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.children, other.children) && Kotlin.equals(this.index, other.index)))));
  };
  JPEGDecoder.prototype.buildHuffmanTable_0 = function (codeLengths, values) {
    var tmp$, tmp$_0;
    var k = 0;
    var code = ArrayList_init_0();
    var length = 16;
    while (true) {
      var tmp$_1 = length > 0;
      if (tmp$_1) {
        var n = length - 1 | 0;
        tmp$_1 = 0 === (codeLengths.data[n] & 255);
      }
      if (!tmp$_1)
        break;
      length = length - 1 | 0;
    }
    code.add_11rb$(new JPEGDecoder$HuffmanNode());
    var p = code.get_za3lpa$(0);
    var q;
    tmp$ = length;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = codeLengths.data[i] & 255;
      for (var j = 0; j < tmp$_0; j++) {
        p = code.removeAt_za3lpa$(code.size - 1 | 0);
        var tmp$_2 = p;
        var tmp$_3 = p.index;
        var n_0 = k;
        tmp$_2.setChildAt_vux3hl$(tmp$_3, values.data[n_0] & 255);
        while (p.index > 0) {
          p = code.removeAt_za3lpa$(code.size - 1 | 0);
        }
        p.index = p.index + 1 | 0;
        code.add_11rb$(p);
        while (code.size <= i) {
          q = new JPEGDecoder$HuffmanNode();
          code.add_11rb$(q);
          p.setChildAt_vux3hl$(p.index, q.children);
          p = q;
        }
        k = k + 1 | 0;
      }
      if ((i + 1 | 0) < length) {
        q = new JPEGDecoder$HuffmanNode();
        code.add_11rb$(q);
        p.setChildAt_vux3hl$(p.index, q.children);
        p = q;
      }
    }
    return code.get_za3lpa$(0).children;
  };
  function JPEGDecoder$decodeScan$readBit(closure$bitsCount, closure$bitsData, closure$data, closure$offset) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (closure$bitsCount.v > 0) {
        tmp$ = closure$bitsCount.v;
        closure$bitsCount.v = tmp$ - 1 | 0;
        return closure$bitsData.v >> closure$bitsCount.v & 1;
      }
      tmp$_1 = (tmp$_0 = closure$offset.v, closure$offset.v = tmp$_0 + 1 | 0, tmp$_0);
      closure$bitsData.v = closure$data.data[tmp$_1] & 255;
      if (closure$bitsData.v === 255) {
        tmp$_3 = (tmp$_2 = closure$offset.v, closure$offset.v = tmp$_2 + 1 | 0, tmp$_2);
        var nextByte = closure$data.data[tmp$_3] & 255;
        if (nextByte !== 0) {
          invalidOp('unexpected marker: ' + toString_1(closure$bitsData.v << 8 | nextByte, 16));
        }
      }
      closure$bitsCount.v = 7;
      return closure$bitsData.v >>> 7;
    };
  }
  function JPEGDecoder$decodeScan$decodeHuffman(closure$readBit) {
    return function (tree) {
      var tmp$;
      var node = tree;
      while (true) {
        var bit = closure$readBit();
        var res = node.get_za3lpa$(bit);
        if (typeof res === 'number')
          return res;
        else if (Kotlin.isType(res, List))
          node = Kotlin.isType(tmp$ = res, List) ? tmp$ : throwCCE();
        else
          invalidOp('invalid huffman sequence');
      }
    };
  }
  function JPEGDecoder$decodeScan$receive(closure$readBit) {
    return function (length) {
      var len = length;
      var n = 0;
      while (len > 0) {
        var bit = closure$readBit();
        n = n << 1 | bit;
        len = len - 1 | 0;
      }
      return n;
    };
  }
  function JPEGDecoder$decodeScan$receiveAndExtend(closure$receive) {
    return function (length) {
      var n = closure$receive(length);
      if (n >= 1 << length - 1)
        return n;
      return n + (-1 << length) + 1 | 0;
    };
  }
  function JPEGDecoder$decodeScan$decodeBaseline(closure$decodeHuffman, closure$receiveAndExtend, this$JPEGDecoder) {
    return function (component, zz) {
      var t = closure$decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : closure$receiveAndExtend(t);
      component.pred = component.pred + diff | 0;
      zz[0] = component.pred;
      var k = 1;
      while (k < 64) {
        var rs = closure$decodeHuffman(component.huffmanTableAC);
        var s = rs & 15;
        var r = rs >> 4;
        if (s === 0) {
          if (r < 15)
            break;
          k = k + 16 | 0;
          continue;
        }
        k = k + r | 0;
        var z = this$JPEGDecoder.dctZigZag_0[k];
        zz[z] = closure$receiveAndExtend(s);
        k = k + 1 | 0;
      }
    };
  }
  function JPEGDecoder$decodeScan$decodeDCFirst(closure$decodeHuffman, closure$receiveAndExtend, closure$successive) {
    return function (component, zz) {
      var t = closure$decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : closure$receiveAndExtend(t) << closure$successive;
      component.pred = component.pred + diff | 0;
      zz[0] = component.pred;
    };
  }
  function JPEGDecoder$decodeScan$decodeDCSuccessive(closure$readBit, closure$successive) {
    return function (component, zz) {
      zz[0] = zz[0] | closure$readBit() << closure$successive;
    };
  }
  function JPEGDecoder$decodeScan$decodeACFirst(closure$eobrun, closure$spectralStart, closure$spectralEnd, closure$decodeHuffman, closure$receive, this$JPEGDecoder, closure$receiveAndExtend, closure$successive) {
    return function (component, zz) {
      var tmp$;
      if (closure$eobrun.v > 0) {
        tmp$ = closure$eobrun.v;
        closure$eobrun.v = tmp$ - 1 | 0;
        return;
      }
      var k = closure$spectralStart;
      var e = closure$spectralEnd;
      while (k <= e) {
        var rs = closure$decodeHuffman(component.huffmanTableAC);
        var s = rs & 15;
        var r = rs >> 4;
        if (s === 0) {
          if (r < 15) {
            closure$eobrun.v = closure$receive(r) + (1 << r) - 1 | 0;
            break;
          }
          k = k + 16 | 0;
          continue;
        }
        k = k + r | 0;
        var z = this$JPEGDecoder.dctZigZag_0[k];
        zz[z] = Kotlin.imul(closure$receiveAndExtend(s), 1 << closure$successive);
        k = k + 1 | 0;
      }
    };
  }
  function JPEGDecoder$decodeScan$decodeACSuccessive(closure$spectralStart, closure$spectralEnd, this$JPEGDecoder, closure$successiveACState, closure$decodeHuffman, closure$receive, closure$eobrun, closure$receiveAndExtend, closure$successiveACNextValue, closure$readBit, closure$successive) {
    return function (component, zz) {
      var tmp$, tmp$_0;
      var k = closure$spectralStart;
      var e = closure$spectralEnd;
      var r = 0;
      loop: while (k <= e) {
        var z = this$JPEGDecoder.dctZigZag_0[k];
        var direction = zz[z] < 0 ? -1 : 1;
        tmp$ = closure$successiveACState.v;
        if (tmp$ === 0) {
          var rs = closure$decodeHuffman(component.huffmanTableAC);
          var s = rs & 15;
          r = rs >> 4;
          if (s === 0) {
            if (r < 15) {
              closure$eobrun.v = closure$receive(r) + (1 << r) | 0;
              closure$successiveACState.v = 4;
            }
             else {
              r = 16;
              closure$successiveACState.v = 1;
            }
          }
           else {
            if (s !== 1)
              invalidOp('invalid ACn encoding');
            closure$successiveACNextValue.v = closure$receiveAndExtend(s);
            closure$successiveACState.v = r !== 0 ? 2 : 3;
          }
          continue loop;
        }
         else if (tmp$ === 1 || tmp$ === 2)
          if (zz[z] !== 0)
            zz[z] = zz[z] + Kotlin.imul(closure$readBit() << closure$successive, direction) | 0;
          else {
            r = r - 1 | 0;
            if (r === 0)
              closure$successiveACState.v = closure$successiveACState.v === 2 ? 3 : 0;
          }
         else if (tmp$ === 3)
          if (zz[z] !== 0)
            zz[z] = zz[z] + Kotlin.imul(closure$readBit() << closure$successive, direction) | 0;
          else {
            zz[z] = closure$successiveACNextValue.v << closure$successive;
            closure$successiveACState.v = 0;
          }
         else if (tmp$ === 4)
          if (zz[z] !== 0)
            zz[z] = zz[z] + Kotlin.imul(closure$readBit() << closure$successive, direction) | 0;
        k = k + 1 | 0;
      }
      if (closure$successiveACState.v === 4) {
        tmp$_0 = closure$eobrun.v;
        closure$eobrun.v = tmp$_0 - 1 | 0;
        if (closure$eobrun.v === 0)
          closure$successiveACState.v = 0;
      }
    };
  }
  function JPEGDecoder$decodeScan$decodeMcu(closure$mcusPerLine) {
    return function (component, decode, mcu, row, col) {
      var mcuRow = mcu / closure$mcusPerLine | 0 | 0;
      var mcuCol = mcu % closure$mcusPerLine;
      var blockRow = Kotlin.imul(mcuRow, component.v) + row | 0;
      var blockCol = Kotlin.imul(mcuCol, component.h) + col | 0;
      decode(component, component.blocks.get_za3lpa$(blockRow).get_za3lpa$(blockCol));
    };
  }
  function JPEGDecoder$decodeScan$decodeBlock(component, decode, mcu) {
    var blockRow = mcu / component.blocksPerLine | 0 | 0;
    var blockCol = mcu % component.blocksPerLine;
    decode(component, component.blocks.get_za3lpa$(blockRow).get_za3lpa$(blockCol));
  }
  JPEGDecoder.prototype.decodeScan_0 = function (data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var resetInterval_0 = resetInterval;
    var offset_0 = {v: offset};
    var mcusPerLine = frame.mcusPerLine;
    var progressive = frame.progressive;
    var startOffset = offset_0.v;
    var bitsData = {v: 0};
    var bitsCount = {v: 0};
    var readBit = JPEGDecoder$decodeScan$readBit(bitsCount, bitsData, data, offset_0);
    var decodeHuffman = JPEGDecoder$decodeScan$decodeHuffman(readBit);
    var receive = JPEGDecoder$decodeScan$receive(readBit);
    var receiveAndExtend = JPEGDecoder$decodeScan$receiveAndExtend(receive);
    var decodeBaseline = JPEGDecoder$decodeScan$decodeBaseline(decodeHuffman, receiveAndExtend, this);
    var decodeDCFirst = JPEGDecoder$decodeScan$decodeDCFirst(decodeHuffman, receiveAndExtend, successive);
    var decodeDCSuccessive = JPEGDecoder$decodeScan$decodeDCSuccessive(readBit, successive);
    var eobrun = {v: 0};
    var decodeACFirst = JPEGDecoder$decodeScan$decodeACFirst(eobrun, spectralStart, spectralEnd, decodeHuffman, receive, this, receiveAndExtend, successive);
    var successiveACState = {v: 0};
    var successiveACNextValue = {v: 0};
    var decodeACSuccessive = JPEGDecoder$decodeScan$decodeACSuccessive(spectralStart, spectralEnd, this, successiveACState, decodeHuffman, receive, eobrun, receiveAndExtend, successiveACNextValue, readBit, successive);
    var decodeMcu = JPEGDecoder$decodeScan$decodeMcu(mcusPerLine);
    var decodeBlock = JPEGDecoder$decodeScan$decodeBlock;
    var componentsLength = components.size;
    var component;
    if (progressive) {
      tmp$ = spectralStart === 0 ? successivePrev === 0 ? getCallableRef('decodeDCFirst', function (component, zz) {
        return decodeDCFirst(component, zz), Unit;
      }) : getCallableRef('decodeDCSuccessive', function (component, zz) {
        return decodeDCSuccessive(component, zz), Unit;
      }) : successivePrev === 0 ? getCallableRef('decodeACFirst', function (component, zz) {
        return decodeACFirst(component, zz), Unit;
      }) : getCallableRef('decodeACSuccessive', function (component, zz) {
        return decodeACSuccessive(component, zz), Unit;
      });
    }
     else {
      tmp$ = getCallableRef('decodeBaseline', function (component, zz) {
        return decodeBaseline(component, zz), Unit;
      });
    }
    var decodeFn = tmp$;
    var mcu = 0;
    if (componentsLength === 1) {
      tmp$_0 = Kotlin.imul(components.get_za3lpa$(0).blocksPerLine, components.get_za3lpa$(0).blocksPerColumn);
    }
     else {
      tmp$_0 = Kotlin.imul(mcusPerLine, frame.mcusPerColumn);
    }
    var mcuExpected = tmp$_0;
    if (resetInterval_0 === 0) {
      resetInterval_0 = mcuExpected;
    }
    var h;
    var v;
    while (mcu < mcuExpected) {
      for (var i = 0; i < componentsLength; i++)
        components.get_za3lpa$(i).pred = 0;
      eobrun.v = 0;
      if (componentsLength === 1) {
        component = components.get_za3lpa$(0);
        tmp$_1 = resetInterval_0;
        for (var n = 0; n < tmp$_1; n++) {
          decodeBlock(component, decodeFn, mcu);
          mcu = mcu + 1 | 0;
        }
      }
       else {
        tmp$_2 = resetInterval_0;
        for (var n_0 = 0; n_0 < tmp$_2; n_0++) {
          for (var i_0 = 0; i_0 < componentsLength; i_0++) {
            component = components.get_za3lpa$(i_0);
            h = component.h;
            v = component.v;
            for (var j = 0; j < v; j++) {
              for (var k = 0; k < h; k++) {
                decodeMcu(component, decodeFn, mcu, j, k);
              }
            }
          }
          mcu = mcu + 1 | 0;
          if (mcu === mcuExpected)
            break;
        }
      }
      bitsCount.v = 0;
      var n_1 = offset_0.v;
      var tmp$_3 = (data.data[n_1] & 255) << 8;
      var n_2 = offset_0.v + 1 | 0;
      var marker = tmp$_3 | data.data[n_2] & 255;
      if (marker < 65280) {
        invalidOp('marker was not found');
      }
      if ((new IntRange(65488, 65495)).contains_mef7kx$(marker)) {
        offset_0.v = offset_0.v + 2 | 0;
      }
       else {
        break;
      }
    }
    return offset_0.v - startOffset | 0;
  };
  function JPEGDecoder$buildComponentData$quantizeAndInverse(closure$component, this$JPEGDecoder) {
    return function (zz, dataOut, dataIn) {
      var qt = closure$component.quantizationTable;
      var v0;
      var v1;
      var v2;
      var v3;
      var v4;
      var v5;
      var v6;
      var v7;
      var t;
      var p = dataIn;
      for (var i = 0; i < 64; i++)
        p[i] = Kotlin.imul(zz[i], qt[i]);
      for (var i_0 = 0; i_0 < 8; i_0++) {
        var row = 8 * i_0 | 0;
        if (p[1 + row | 0] === 0 && p[2 + row | 0] === 0 && p[3 + row | 0] === 0 && p[4 + row | 0] === 0 && p[5 + row | 0] === 0 && p[6 + row | 0] === 0 && p[7 + row | 0] === 0) {
          t = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[0 + row | 0]) + 512 >> 10;
          p[0 + row | 0] = t;
          p[1 + row | 0] = t;
          p[2 + row | 0] = t;
          p[3 + row | 0] = t;
          p[4 + row | 0] = t;
          p[5 + row | 0] = t;
          p[6 + row | 0] = t;
          p[7 + row | 0] = t;
          continue;
        }
        v0 = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[0 + row | 0]) + 128 >> 8;
        v1 = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[4 + row | 0]) + 128 >> 8;
        v2 = p[2 + row | 0];
        v3 = p[6 + row | 0];
        v4 = Kotlin.imul(this$JPEGDecoder.dctSqrt1d2_0, p[1 + row | 0] - p[7 + row | 0] | 0) + 128 >> 8;
        v7 = Kotlin.imul(this$JPEGDecoder.dctSqrt1d2_0, p[1 + row | 0] + p[7 + row | 0] | 0) + 128 >> 8;
        v5 = p[3 + row | 0] << 4;
        v6 = p[5 + row | 0] << 4;
        t = v0 - v1 + 1 >> 1;
        v0 = v0 + v1 + 1 >> 1;
        v1 = t;
        t = Kotlin.imul(v2, this$JPEGDecoder.dctSin6_0) + Kotlin.imul(v3, this$JPEGDecoder.dctCos6_0) + 128 >> 8;
        v2 = Kotlin.imul(v2, this$JPEGDecoder.dctCos6_0) - Kotlin.imul(v3, this$JPEGDecoder.dctSin6_0) + 128 >> 8;
        v3 = t;
        t = v4 - v6 + 1 >> 1;
        v4 = v4 + v6 + 1 >> 1;
        v6 = t;
        t = v7 + v5 + 1 >> 1;
        v5 = v7 - v5 + 1 >> 1;
        v7 = t;
        t = v0 - v3 + 1 >> 1;
        v0 = v0 + v3 + 1 >> 1;
        v3 = t;
        t = v1 - v2 + 1 >> 1;
        v1 = v1 + v2 + 1 >> 1;
        v2 = t;
        t = Kotlin.imul(v4, this$JPEGDecoder.dctSin3_0) + Kotlin.imul(v7, this$JPEGDecoder.dctCos3_0) + 2048 >> 12;
        v4 = Kotlin.imul(v4, this$JPEGDecoder.dctCos3_0) - Kotlin.imul(v7, this$JPEGDecoder.dctSin3_0) + 2048 >> 12;
        v7 = t;
        t = Kotlin.imul(v5, this$JPEGDecoder.dctSin1_0) + Kotlin.imul(v6, this$JPEGDecoder.dctCos1_0) + 2048 >> 12;
        v5 = Kotlin.imul(v5, this$JPEGDecoder.dctCos1_0) - Kotlin.imul(v6, this$JPEGDecoder.dctSin1_0) + 2048 >> 12;
        v6 = t;
        p[0 + row | 0] = v0 + v7 | 0;
        p[7 + row | 0] = v0 - v7 | 0;
        p[1 + row | 0] = v1 + v6 | 0;
        p[6 + row | 0] = v1 - v6 | 0;
        p[2 + row | 0] = v2 + v5 | 0;
        p[5 + row | 0] = v2 - v5 | 0;
        p[3 + row | 0] = v3 + v4 | 0;
        p[4 + row | 0] = v3 - v4 | 0;
      }
      for (var col = 0; col < 8; col++) {
        if (p[(1 * 8 | 0) + col | 0] === 0 && p[(2 * 8 | 0) + col | 0] === 0 && p[(3 * 8 | 0) + col | 0] === 0 && p[(4 * 8 | 0) + col | 0] === 0 && p[(5 * 8 | 0) + col | 0] === 0 && p[(6 * 8 | 0) + col | 0] === 0 && p[(7 * 8 | 0) + col | 0] === 0) {
          t = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, dataIn[col + 0 | 0]) + 8192 >> 14;
          p[(0 * 8 | 0) + col | 0] = t;
          p[(1 * 8 | 0) + col | 0] = t;
          p[(2 * 8 | 0) + col | 0] = t;
          p[(3 * 8 | 0) + col | 0] = t;
          p[(4 * 8 | 0) + col | 0] = t;
          p[(5 * 8 | 0) + col | 0] = t;
          p[(6 * 8 | 0) + col | 0] = t;
          p[(7 * 8 | 0) + col | 0] = t;
          continue;
        }
        v0 = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[(0 * 8 | 0) + col | 0]) + 2048 >> 12;
        v1 = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[(4 * 8 | 0) + col | 0]) + 2048 >> 12;
        v2 = p[(2 * 8 | 0) + col | 0];
        v3 = p[(6 * 8 | 0) + col | 0];
        v4 = Kotlin.imul(this$JPEGDecoder.dctSqrt1d2_0, p[(1 * 8 | 0) + col | 0] - p[(7 * 8 | 0) + col | 0] | 0) + 2048 >> 12;
        v7 = Kotlin.imul(this$JPEGDecoder.dctSqrt1d2_0, p[(1 * 8 | 0) + col | 0] + p[(7 * 8 | 0) + col | 0] | 0) + 2048 >> 12;
        v5 = p[(3 * 8 | 0) + col | 0];
        v6 = p[(5 * 8 | 0) + col | 0];
        t = v0 - v1 + 1 >> 1;
        v0 = v0 + v1 + 1 >> 1;
        v1 = t;
        t = Kotlin.imul(v2, this$JPEGDecoder.dctSin6_0) + Kotlin.imul(v3, this$JPEGDecoder.dctCos6_0) + 2048 >> 12;
        v2 = Kotlin.imul(v2, this$JPEGDecoder.dctCos6_0) - Kotlin.imul(v3, this$JPEGDecoder.dctSin6_0) + 2048 >> 12;
        v3 = t;
        t = v4 - v6 + 1 >> 1;
        v4 = v4 + v6 + 1 >> 1;
        v6 = t;
        t = v7 + v5 + 1 >> 1;
        v5 = v7 - v5 + 1 >> 1;
        v7 = t;
        t = v0 - v3 + 1 >> 1;
        v0 = v0 + v3 + 1 >> 1;
        v3 = t;
        t = v1 - v2 + 1 >> 1;
        v1 = v1 + v2 + 1 >> 1;
        v2 = t;
        t = Kotlin.imul(v4, this$JPEGDecoder.dctSin3_0) + Kotlin.imul(v7, this$JPEGDecoder.dctCos3_0) + 2048 >> 12;
        v4 = Kotlin.imul(v4, this$JPEGDecoder.dctCos3_0) - Kotlin.imul(v7, this$JPEGDecoder.dctSin3_0) + 2048 >> 12;
        v7 = t;
        t = Kotlin.imul(v5, this$JPEGDecoder.dctSin1_0) + Kotlin.imul(v6, this$JPEGDecoder.dctCos1_0) + 2048 >> 12;
        v5 = Kotlin.imul(v5, this$JPEGDecoder.dctCos1_0) - Kotlin.imul(v6, this$JPEGDecoder.dctSin1_0) + 2048 >> 12;
        v6 = t;
        p[(0 * 8 | 0) + col | 0] = v0 + v7 | 0;
        p[(7 * 8 | 0) + col | 0] = v0 - v7 | 0;
        p[(1 * 8 | 0) + col | 0] = v1 + v6 | 0;
        p[(6 * 8 | 0) + col | 0] = v1 - v6 | 0;
        p[(2 * 8 | 0) + col | 0] = v2 + v5 | 0;
        p[(5 * 8 | 0) + col | 0] = v2 - v5 | 0;
        p[(3 * 8 | 0) + col | 0] = v3 + v4 | 0;
        p[(4 * 8 | 0) + col | 0] = v3 - v4 | 0;
      }
      for (var i_1 = 0; i_1 < 64; i_1++) {
        var sample = 128 + (p[i_1] + 8 >> 4) | 0;
        var v = sample < 0 ? 0 : sample > 255 ? 255 : sample;
        dataOut.data[i_1] = toByte(v);
      }
    };
  }
  JPEGDecoder.prototype.buildComponentData_0 = function (frame, component) {
    var tmp$, tmp$_0;
    var lines = ArrayList_init_0();
    var blocksPerLine = component.blocksPerLine;
    var blocksPerColumn = component.blocksPerColumn;
    var samplesPerLine = blocksPerLine << 3;
    var rr = new Int32Array(64);
    var r = UByteArray_init(64);
    var quantizeAndInverse = JPEGDecoder$buildComponentData$quantizeAndInverse(component, this);
    for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
      var scanLine = blockRow << 3;
      for (var i = 0; i < 8; i++)
        lines.add_11rb$(UByteArray_init(samplesPerLine));
      for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
        quantizeAndInverse(component.blocks.get_za3lpa$(blockRow).get_za3lpa$(blockCol), r, rr);
        var offset = 0;
        var sample = blockCol << 3;
        for (var j = 0; j < 8; j++) {
          var line = lines.get_za3lpa$(scanLine + j | 0);
          for (var i_0 = 0; i_0 < 8; i_0++) {
            tmp$_0 = (tmp$ = offset, offset = tmp$ + 1 | 0, tmp$);
            var tmp$_1 = sample + i_0 | 0;
            var v = r.data[tmp$_0] & 255;
            line.data[tmp$_1] = toByte(v);
          }
        }
      }
    }
    return lines;
  };
  JPEGDecoder.prototype.clampTo8bit_0 = function (a) {
    return a < 0 ? 0 : a > 255 ? 255 : a;
  };
  JPEGDecoder.prototype.subarray_0 = function ($receiver, from, to) {
    return new UByteArray($receiver.data.slice(from, to));
  };
  function JPEGDecoder$FrameComponent(h, v, quantizationIdx) {
    this.h = h;
    this.v = v;
    this.quantizationIdx = quantizationIdx;
    this.huffmanTableDC = emptyList();
    this.huffmanTableAC = emptyList();
    this.quantizationTable = new Int32Array(0);
    this.pred = 0;
    this.blocksPerLine = 0;
    this.blocksPerColumn = 0;
    this.blocks = emptyList();
  }
  JPEGDecoder$FrameComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameComponent',
    interfaces: []
  };
  function JPEGDecoder$Frame(extended, progressive, precision, scanLines, samplesPerLine, components, componentsOrder, maxH, maxV) {
    if (maxH === void 0)
      maxH = 0;
    if (maxV === void 0)
      maxV = 0;
    this.extended = extended;
    this.progressive = progressive;
    this.precision = precision;
    this.scanLines = scanLines;
    this.samplesPerLine = samplesPerLine;
    this.components = components;
    this.componentsOrder = componentsOrder;
    this.maxH = maxH;
    this.maxV = maxV;
    this.mcusPerLine = 0;
    this.mcusPerColumn = 0;
  }
  JPEGDecoder$Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  function JPEGDecoder$parse$readUint16(closure$data, closure$offset) {
    return function () {
      var $this = closure$data;
      var n = closure$offset.v;
      var tmp$ = ($this.data[n] & 255) << 8;
      var $this_0 = closure$data;
      var n_0 = closure$offset.v + 1 | 0;
      var value = tmp$ | $this_0.data[n_0] & 255;
      closure$offset.v = closure$offset.v + 2 | 0;
      return value;
    };
  }
  function JPEGDecoder$parse$readDataBlock(closure$readUint16, closure$data, closure$offset) {
    return function () {
      var len = closure$readUint16();
      var $receiver = closure$data.data;
      var fromIndex = closure$offset.v;
      var toIndex = closure$offset.v + len - 2 | 0;
      var array = new UByteArray($receiver.slice(fromIndex, toIndex));
      closure$offset.v = closure$offset.v + array.size | 0;
      return array;
    };
  }
  function JPEGDecoder$parse$prepareComponents(this$JPEGDecoder) {
    return function (frame) {
      var tmp$, tmp$_0;
      var maxH = 0;
      var maxV = 0;
      tmp$ = frame.components.iterator();
      while (tmp$.hasNext()) {
        var component = tmp$.next();
        if (maxH < component.h)
          maxH = component.h;
        if (maxV < component.v)
          maxV = component.v;
      }
      var mcusPerLine = this$JPEGDecoder.mceil_0(frame.samplesPerLine / 8.0 / maxH);
      var mcusPerColumn = this$JPEGDecoder.mceil_0(frame.scanLines / 8.0 / maxV);
      tmp$_0 = frame.components.iterator();
      while (tmp$_0.hasNext()) {
        var component_0 = tmp$_0.next();
        var blocksPerLine = this$JPEGDecoder.mceil_0(this$JPEGDecoder.mceil_0(frame.samplesPerLine / 8.0) * component_0.h / maxH);
        var blocksPerColumn = this$JPEGDecoder.mceil_0(this$JPEGDecoder.mceil_0(frame.scanLines / 8.0) * component_0.v / maxV);
        var blocksPerLineForMcu = Kotlin.imul(mcusPerLine, component_0.h);
        var blocksPerColumnForMcu = Kotlin.imul(mcusPerColumn, component_0.v);
        var blocks = ArrayList_init_0();
        for (var i = 0; i < blocksPerColumnForMcu; i++) {
          var row = ArrayList_init_0();
          for (var j = 0; j < blocksPerLineForMcu; j++)
            row.add_11rb$(new Int32Array(64));
          blocks.add_11rb$(row);
        }
        component_0.blocksPerLine = blocksPerLine;
        component_0.blocksPerColumn = blocksPerColumn;
        component_0.blocks = blocks;
      }
      frame.maxH = maxH;
      frame.maxV = maxV;
      frame.mcusPerLine = mcusPerLine;
      frame.mcusPerColumn = mcusPerColumn;
    };
  }
  JPEGDecoder.prototype.parse_dctkei$ = function (data) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17;
    var offset = {v: 0};
    var readUint16 = JPEGDecoder$parse$readUint16(data, offset);
    var readDataBlock = JPEGDecoder$parse$readDataBlock(readUint16, data, offset);
    var prepareComponents = JPEGDecoder$parse$prepareComponents(this);
    var jfif = null;
    var adobe = null;
    var frame;
    var resetInterval = 0;
    var $receiver = until(0, 16);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_18;
    tmp$_18 = $receiver.iterator();
    while (tmp$_18.hasNext()) {
      var item = tmp$_18.next();
      destination.add_11rb$(new Int32Array(0));
    }
    var quantizationTables = ArrayList_init(destination);
    var frames = ArrayList_init_0();
    var $receiver_0 = until(0, 16);
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_19;
    tmp$_19 = $receiver_0.iterator();
    while (tmp$_19.hasNext()) {
      var item_0 = tmp$_19.next();
      destination_0.add_11rb$(emptyList());
    }
    var huffmanTablesAC = ArrayList_init(destination_0);
    var $receiver_1 = until(0, 16);
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_20;
    tmp$_20 = $receiver_1.iterator();
    while (tmp$_20.hasNext()) {
      var item_1 = tmp$_20.next();
      destination_1.add_11rb$(emptyList());
    }
    var huffmanTablesDC = ArrayList_init(destination_1);
    var fileMarker = readUint16();
    if (fileMarker !== 65496) {
      invalidOp('SOI not found');
    }
    fileMarker = readUint16();
    while (fileMarker !== 65497) {
      tmp$ = fileMarker;
      if (tmp$ !== 65280)
        if (tmp$ === 65504 || tmp$ === 65505 || tmp$ === 65506 || tmp$ === 65507 || tmp$ === 65508 || tmp$ === 65509 || tmp$ === 65510 || tmp$ === 65511 || tmp$ === 65512 || tmp$ === 65513 || tmp$ === 65514 || tmp$ === 65515 || tmp$ === 65516 || tmp$ === 65517 || tmp$ === 65518 || tmp$ === 65519 || tmp$ === 65534) {
          var appData = readDataBlock();
          if (fileMarker === 65504) {
            var tmp$_21 = (appData.data[0] & 255) === 74;
            if (tmp$_21) {
              tmp$_21 = (appData.data[1] & 255) === 70;
            }
            var tmp$_22 = tmp$_21;
            if (tmp$_22) {
              tmp$_22 = (appData.data[2] & 255) === 73;
            }
            var tmp$_23 = tmp$_22;
            if (tmp$_23) {
              tmp$_23 = (appData.data[3] & 255) === 70;
            }
            var tmp$_24 = tmp$_23;
            if (tmp$_24) {
              tmp$_24 = (appData.data[4] & 255) === 0;
            }
            if (tmp$_24) {
              jfif = new JPEGDecoder$Jfif(appData.data[5] & 255, appData.data[6] & 255, appData.data[7] & 255, (appData.data[8] & 255) << 8 | appData.data[9] & 255, (appData.data[10] & 255) << 8 | appData.data[11] & 255, appData.data[12] & 255, appData.data[13] & 255, this.subarray_0.call(this, appData, 14, 14 + Kotlin.imul(3 * (appData.data[12] & 255) | 0, appData.data[13] & 255) | 0));
            }
          }
          if (fileMarker === 65518) {
            var tmp$_25 = (appData.data[0] & 255) === 65;
            if (tmp$_25) {
              tmp$_25 = (appData.data[1] & 255) === 100;
            }
            var tmp$_26 = tmp$_25;
            if (tmp$_26) {
              tmp$_26 = (appData.data[2] & 255) === 111;
            }
            var tmp$_27 = tmp$_26;
            if (tmp$_27) {
              tmp$_27 = (appData.data[3] & 255) === 98;
            }
            var tmp$_28 = tmp$_27;
            if (tmp$_28) {
              tmp$_28 = (appData.data[4] & 255) === 101;
            }
            var tmp$_29 = tmp$_28;
            if (tmp$_29) {
              tmp$_29 = (appData.data[5] & 255) === 0;
            }
            if (tmp$_29) {
              adobe = new JPEGDecoder$Adobe(appData.data[6] & 255, (appData.data[7] & 255) << 8 | appData.data[8] & 255, (appData.data[9] & 255) << 8 | appData.data[10] & 255, (appData.data[11] & 255) !== 0);
            }
          }
        }
         else if (tmp$ === 65499) {
          var quantizationTablesLength = readUint16();
          var quantizationTablesEnd = quantizationTablesLength + offset.v - 2 | 0;
          while (offset.v < quantizationTablesEnd) {
            var n = (tmp$_0 = offset.v, offset.v = tmp$_0 + 1 | 0, tmp$_0);
            var quantizationTableSpec = data.data[n] & 255;
            var tableData = new Int32Array(64);
            tmp$_1 = quantizationTableSpec >> 4;
            if (tmp$_1 === 0) {
              for (var j = 0; j < 64; j++) {
                tmp$_3 = this.dctZigZag_0[j];
                var n_0 = (tmp$_2 = offset.v, offset.v = tmp$_2 + 1 | 0, tmp$_2);
                tableData[tmp$_3] = data.data[n_0] & 255;
              }
            }
             else if (tmp$_1 === 1) {
              for (var j_0 = 0; j_0 < 64; j_0++)
                tableData[this.dctZigZag_0[j_0]] = readUint16();
            }
             else
              invalidOp('DQT: invalid table spec');
            quantizationTables.set_wxm5ur$(quantizationTableSpec & 15, tableData);
          }
        }
         else if (tmp$ === 65472 || tmp$ === 65473 || tmp$ === 65474) {
          readUint16();
          var n_1 = (tmp$_4 = offset.v, offset.v = tmp$_4 + 1 | 0, tmp$_4);
          frame = new JPEGDecoder$Frame(fileMarker === 65473, fileMarker === 65474, data.data[n_1] & 255, readUint16(), readUint16(), ArrayList_init_0(), ArrayList_init_0());
          var n_2 = (tmp$_5 = offset.v, offset.v = tmp$_5 + 1 | 0, tmp$_5);
          var componentsCount = data.data[n_2] & 255;
          var componentId;
          for (var i = 0; i < componentsCount; i++) {
            var n_3 = offset.v;
            componentId = data.data[n_3] & 255;
            var n_4 = offset.v + 1 | 0;
            var h = (data.data[n_4] & 255) >> 4;
            var n_5 = offset.v + 1 | 0;
            var v = data.data[n_5] & 255 & 15;
            var n_6 = offset.v + 2 | 0;
            var qId = data.data[n_6] & 255;
            (frame == null ? throwUPAE('frame') : frame).componentsOrder.add_11rb$(componentId);
            while ((frame == null ? throwUPAE('frame') : frame).components.size <= componentId)
              (frame == null ? throwUPAE('frame') : frame).components.add_11rb$(new JPEGDecoder$FrameComponent(0, 0, 0));
            (frame == null ? throwUPAE('frame') : frame).components.set_wxm5ur$(componentId, new JPEGDecoder$FrameComponent(h, v, qId));
            offset.v = offset.v + 3 | 0;
          }
          prepareComponents(frame == null ? throwUPAE('frame') : frame);
          frames.add_11rb$(frame == null ? throwUPAE('frame') : frame);
        }
         else if (tmp$ === 65476) {
          var huffmanLength = readUint16();
          var i_0 = 2;
          while (i_0 < huffmanLength) {
            var n_7 = (tmp$_6 = offset.v, offset.v = tmp$_6 + 1 | 0, tmp$_6);
            var huffmanTableSpec = data.data[n_7] & 255;
            var codeLengths = UByteArray_init(16);
            var codeLengthSum = 0;
            for (var j_1 = 0; j_1 < 16; j_1++) {
              var n_8 = offset.v;
              var v_0 = data.data[n_8] & 255;
              codeLengths.data[j_1] = toByte(v_0);
              codeLengthSum = codeLengthSum + (codeLengths.data[j_1] & 255) | 0;
              offset.v = offset.v + 1 | 0;
            }
            var huffmanValues = UByteArray_init(codeLengthSum);
            tmp$_7 = codeLengthSum;
            for (var j_2 = 0; j_2 < tmp$_7; j_2++) {
              var n_9 = offset.v;
              var v_1 = data.data[n_9] & 255;
              huffmanValues.data[j_2] = toByte(v_1);
              offset.v = offset.v + 1 | 0;
            }
            i_0 = i_0 + (17 + codeLengthSum) | 0;
            var table = huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC;
            table.set_wxm5ur$(huffmanTableSpec & 15, this.buildHuffmanTable_0(codeLengths, huffmanValues));
          }
        }
         else if (tmp$ === 65501) {
          readUint16();
          resetInterval = readUint16();
        }
         else if (tmp$ === 65498) {
          var scanLength = readUint16();
          var n_10 = (tmp$_8 = offset.v, offset.v = tmp$_8 + 1 | 0, tmp$_8);
          var selectorsCount = data.data[n_10] & 255;
          var components = ArrayList_init_0();
          var component;
          for (var i_1 = 0; i_1 < selectorsCount; i_1++) {
            tmp$_10 = (frame == null ? throwUPAE('frame') : frame).components;
            var n_11 = (tmp$_9 = offset.v, offset.v = tmp$_9 + 1 | 0, tmp$_9);
            component = tmp$_10.get_za3lpa$(data.data[n_11] & 255);
            var n_12 = (tmp$_11 = offset.v, offset.v = tmp$_11 + 1 | 0, tmp$_11);
            var tableSpec = data.data[n_12] & 255;
            component.huffmanTableDC = huffmanTablesDC.get_za3lpa$(tableSpec >> 4);
            component.huffmanTableAC = huffmanTablesAC.get_za3lpa$(tableSpec & 15);
            components.add_11rb$(component);
          }
          var n_13 = (tmp$_12 = offset.v, offset.v = tmp$_12 + 1 | 0, tmp$_12);
          var spectralStart = data.data[n_13] & 255;
          var n_14 = (tmp$_13 = offset.v, offset.v = tmp$_13 + 1 | 0, tmp$_13);
          var spectralEnd = data.data[n_14] & 255;
          var n_15 = (tmp$_14 = offset.v, offset.v = tmp$_14 + 1 | 0, tmp$_14);
          var successiveApproximation = data.data[n_15] & 255;
          var processed = this.decodeScan_0(data, offset.v, frame == null ? throwUPAE('frame') : frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15);
          offset.v = offset.v + processed | 0;
        }
         else {
          var n_16 = offset.v - 3 | 0;
          var tmp$_30 = (data.data[n_16] & 255) === 255;
          if (tmp$_30) {
            var n_17 = offset.v - 2 | 0;
            tmp$_30 = (data.data[n_17] & 255) >= 192;
          }
          var tmp$_31 = tmp$_30;
          if (tmp$_31) {
            var n_18 = offset.v - 2 | 0;
            tmp$_31 = (data.data[n_18] & 255) <= 254;
          }
          if (tmp$_31) {
            offset.v = offset.v - 3 | 0;
          }
           else {
            invalidOp('unknown JPEG marker ' + toString_1(fileMarker, 16));
          }
        }
      fileMarker = readUint16();
    }
    if (frames.size !== 1)
      invalidOp('only single frame JPEGs supported');
    tmp$_15 = frames.size;
    for (var i_2 = 0; i_2 < tmp$_15; i_2++) {
      var cp = frames.get_za3lpa$(i_2).components;
      tmp$_16 = cp.iterator();
      while (tmp$_16.hasNext()) {
        var c = tmp$_16.next();
        c.quantizationTable = quantizationTables.get_za3lpa$(c.quantizationIdx);
        c.quantizationIdx = -1;
      }
    }
    this.width_0 = (frame == null ? throwUPAE('frame') : frame).samplesPerLine;
    this.height_0 = (frame == null ? throwUPAE('frame') : frame).scanLines;
    this.jfif_0 = jfif;
    this.adobe_0 = adobe;
    this.components_0 = ArrayList_init_0();
    tmp$_17 = (frame == null ? throwUPAE('frame') : frame).componentsOrder.size;
    for (var i_3 = 0; i_3 < tmp$_17; i_3++) {
      var component_0 = (frame == null ? throwUPAE('frame') : frame).components.get_za3lpa$((frame == null ? throwUPAE('frame') : frame).componentsOrder.get_za3lpa$(i_3));
      this.components_0.add_11rb$(new JPEGDecoder$Component(this.buildComponentData_0(frame == null ? throwUPAE('frame') : frame, component_0), component_0.h / (frame == null ? throwUPAE('frame') : frame).maxH, component_0.v / (frame == null ? throwUPAE('frame') : frame).maxV));
    }
  };
  function JPEGDecoder$Component(lines, scaleX, scaleY) {
    this.lines = lines;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
  JPEGDecoder$Component.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Component',
    interfaces: []
  };
  JPEGDecoder.prototype.getData_0 = function (width, height) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27;
    var scaleX = this.width_0 / width | 0;
    var scaleY = this.height_0 / height | 0;
    var offset = 0;
    var dataLength = Kotlin.imul(Kotlin.imul(width, height), this.components_0.size);
    var data = UByteArray_init(dataLength);
    tmp$ = this.components_0.size;
    if (tmp$ === 1) {
      var component1 = this.components_0.get_za3lpa$(0);
      for (var y = 0; y < height; y++) {
        var component1Line = component1.lines.get_za3lpa$(numberToInt(y * component1.scaleY * scaleY));
        for (var x = 0; x < width; x++) {
          tmp$_1 = (tmp$_0 = offset, offset = tmp$_0 + 1 | 0, tmp$_0);
          var n = numberToInt(x * component1.scaleX * scaleX);
          var v = component1Line.data[n] & 255;
          data.data[tmp$_1] = toByte(v);
        }
      }
    }
     else if (tmp$ === 2) {
      var component1_0 = this.components_0.get_za3lpa$(0);
      var component2 = this.components_0.get_za3lpa$(1);
      for (var y_0 = 0; y_0 < height; y_0++) {
        var component1Line_0 = component1_0.lines.get_za3lpa$(numberToInt(y_0 * component1_0.scaleY * scaleY));
        var component2Line = component2.lines.get_za3lpa$(numberToInt(y_0 * component2.scaleY * scaleY));
        for (var x_0 = 0; x_0 < width; x_0++) {
          tmp$_3 = (tmp$_2 = offset, offset = tmp$_2 + 1 | 0, tmp$_2);
          var n_0 = numberToInt(x_0 * component1_0.scaleX * scaleX);
          var v_0 = component1Line_0.data[n_0] & 255;
          data.data[tmp$_3] = toByte(v_0);
          tmp$_5 = (tmp$_4 = offset, offset = tmp$_4 + 1 | 0, tmp$_4);
          var n_1 = numberToInt(x_0 * component2.scaleX * scaleX);
          var v_1 = component2Line.data[n_1] & 255;
          data.data[tmp$_5] = toByte(v_1);
        }
      }
    }
     else if (tmp$ === 3) {
      if (((tmp$_6 = this.adobe_0) != null ? tmp$_6.transformCode : null) === true)
        tmp$_8 = true;
      else
        tmp$_8 = (tmp$_7 = this.colorTransform_0) != null ? tmp$_7 : true;
      var colorTransform = tmp$_8;
      var component1_1 = this.components_0.get_za3lpa$(0);
      var component2_0 = this.components_0.get_za3lpa$(1);
      var component3 = this.components_0.get_za3lpa$(2);
      for (var y_1 = 0; y_1 < height; y_1++) {
        var component1Line_1 = component1_1.lines.get_za3lpa$(numberToInt(y_1 * component1_1.scaleY * scaleY));
        var component2Line_0 = component2_0.lines.get_za3lpa$(numberToInt(y_1 * component2_0.scaleY * scaleY));
        var component3Line = component3.lines.get_za3lpa$(numberToInt(y_1 * component3.scaleY * scaleY));
        if (!colorTransform) {
          for (var x_1 = 0; x_1 < width; x_1++) {
            tmp$_10 = (tmp$_9 = offset, offset = tmp$_9 + 1 | 0, tmp$_9);
            var n_2 = numberToInt(x_1 * component1_1.scaleX * scaleX);
            var v_2 = component1Line_1.data[n_2] & 255;
            data.data[tmp$_10] = toByte(v_2);
            tmp$_12 = (tmp$_11 = offset, offset = tmp$_11 + 1 | 0, tmp$_11);
            var n_3 = numberToInt(x_1 * component2_0.scaleX * scaleX);
            var v_3 = component2Line_0.data[n_3] & 255;
            data.data[tmp$_12] = toByte(v_3);
            tmp$_14 = (tmp$_13 = offset, offset = tmp$_13 + 1 | 0, tmp$_13);
            var n_4 = numberToInt(x_1 * component3.scaleX * scaleX);
            var v_4 = component3Line.data[n_4] & 255;
            data.data[tmp$_14] = toByte(v_4);
          }
        }
         else {
          for (var x_2 = 0; x_2 < width; x_2++) {
            var n_5 = numberToInt(x_2 * component1_1.scaleX * scaleX);
            var yy = component1Line_1.data[n_5] & 255;
            var n_6 = numberToInt(x_2 * component2_0.scaleX * scaleX);
            var cb = component2Line_0.data[n_6] & 255;
            var n_7 = numberToInt(x_2 * component3.scaleX * scaleX);
            var cr = component3Line.data[n_7] & 255;
            tmp$_16 = (tmp$_15 = offset, offset = tmp$_15 + 1 | 0, tmp$_15);
            var v_5 = this.clampTo8bit_0(numberToInt(yy + 1.402 * (cr - 128.0)));
            data.data[tmp$_16] = toByte(v_5);
            tmp$_18 = (tmp$_17 = offset, offset = tmp$_17 + 1 | 0, tmp$_17);
            var v_6 = this.clampTo8bit_0(numberToInt(yy - 0.3441363 * (cb - 128.0) - 0.71413636 * (cr - 128.0)));
            data.data[tmp$_18] = toByte(v_6);
            tmp$_20 = (tmp$_19 = offset, offset = tmp$_19 + 1 | 0, tmp$_19);
            var v_7 = this.clampTo8bit_0(numberToInt(yy + 1.772 * (cb - 128.0)));
            data.data[tmp$_20] = toByte(v_7);
          }
        }
      }
    }
     else if (tmp$ === 4) {
      if (this.adobe_0 == null)
        invalidOp('Unsupported color mode (4 components)');
      if (((tmp$_21 = this.adobe_0) != null ? tmp$_21.transformCode : null) === true)
        tmp$_23 = true;
      else
        tmp$_23 = (tmp$_22 = this.colorTransform_0) != null ? tmp$_22 : false;
      var colorTransform_0 = tmp$_23;
      var component1_2 = this.components_0.get_za3lpa$(0);
      var component2_1 = this.components_0.get_za3lpa$(1);
      var component3_0 = this.components_0.get_za3lpa$(2);
      var component4 = this.components_0.get_za3lpa$(3);
      for (var y_2 = 0; y_2 < height; y_2++) {
        var component1Line_2 = component1_2.lines.get_za3lpa$(numberToInt(y_2 * component1_2.scaleY * scaleY));
        var component2Line_1 = component2_1.lines.get_za3lpa$(numberToInt(y_2 * component2_1.scaleY * scaleY));
        var component3Line_0 = component3_0.lines.get_za3lpa$(numberToInt(y_2 * component3_0.scaleY * scaleY));
        var component4Line = component4.lines.get_za3lpa$(numberToInt(y_2 * component4.scaleY * scaleY));
        for (var x_3 = 0; x_3 < width; x_3++) {
          var c;
          var m;
          var ye;
          var k;
          if (!colorTransform_0) {
            var n_8 = numberToInt(x_3 * component1_2.scaleX * scaleX);
            c = component1Line_2.data[n_8] & 255;
            var n_9 = numberToInt(x_3 * component2_1.scaleX * scaleX);
            m = component2Line_1.data[n_9] & 255;
            var n_10 = numberToInt(x_3 * component3_0.scaleX * scaleX);
            ye = component3Line_0.data[n_10] & 255;
            var n_11 = numberToInt(x_3 * component4.scaleX * scaleX);
            k = component4Line.data[n_11] & 255;
          }
           else {
            var n_12 = numberToInt(x_3 * component1_2.scaleX * scaleX);
            var yy_0 = component1Line_2.data[n_12] & 255;
            var n_13 = numberToInt(x_3 * component2_1.scaleX * scaleX);
            var cb_0 = component2Line_1.data[n_13] & 255;
            var n_14 = numberToInt(x_3 * component3_0.scaleX * scaleX);
            var cr_0 = component3Line_0.data[n_14] & 255;
            var n_15 = numberToInt(x_3 * component4.scaleX * scaleX);
            k = component4Line.data[n_15] & 255;
            c = 255 - this.clampTo8bit_0(numberToInt(yy_0 + 1.402 * (cr_0 - 128 | 0))) | 0;
            m = 255 - this.clampTo8bit_0(numberToInt(yy_0 - 0.3441363 * (cb_0 - 128 | 0) - 0.71413636 * (cr_0 - 128 | 0))) | 0;
            ye = 255 - this.clampTo8bit_0(numberToInt(yy_0 + 1.772 * (cb_0 - 128 | 0))) | 0;
          }
          var n_16 = (tmp$_24 = offset, offset = tmp$_24 + 1 | 0, tmp$_24);
          var v_8 = 255 - c | 0;
          data.data[n_16] = toByte(v_8);
          var n_17 = (tmp$_25 = offset, offset = tmp$_25 + 1 | 0, tmp$_25);
          var v_9 = 255 - m | 0;
          data.data[n_17] = toByte(v_9);
          var n_18 = (tmp$_26 = offset, offset = tmp$_26 + 1 | 0, tmp$_26);
          var v_10 = 255 - ye | 0;
          data.data[n_18] = toByte(v_10);
          var n_19 = (tmp$_27 = offset, offset = tmp$_27 + 1 | 0, tmp$_27);
          var v_11 = 255 - k | 0;
          data.data[n_19] = toByte(v_11);
        }
      }
    }
     else
      invalidOp('Unsupported color mode');
    return data;
  };
  JPEGDecoder.prototype.copyToImageData_q4uxu6$ = function (imageData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28;
    var width = imageData.width;
    var height = imageData.height;
    var imageDataArray = imageData.data;
    var data = this.getData_0(width, height);
    var i = 0;
    var j = 0;
    tmp$ = this.components_0.size;
    if (tmp$ === 1) {
      tmp$_0 = Kotlin.imul(width, height);
      for (var n = 0; n < tmp$_0; n++) {
        var n_0 = (tmp$_1 = i, i = tmp$_1 + 1 | 0, tmp$_1);
        var yy = data.data[n_0] & 255;
        var n_1 = (tmp$_2 = j, j = tmp$_2 + 1 | 0, tmp$_2);
        imageDataArray.data[n_1] = toByte(yy);
        var n_2 = (tmp$_3 = j, j = tmp$_3 + 1 | 0, tmp$_3);
        imageDataArray.data[n_2] = toByte(yy);
        var n_3 = (tmp$_4 = j, j = tmp$_4 + 1 | 0, tmp$_4);
        imageDataArray.data[n_3] = toByte(yy);
        var n_4 = (tmp$_5 = j, j = tmp$_5 + 1 | 0, tmp$_5);
        imageDataArray.data[n_4] = toByte(255);
      }
    }
     else if (tmp$ === 3) {
      tmp$_6 = Kotlin.imul(width, height);
      for (var n_5 = 0; n_5 < tmp$_6; n_5++) {
        tmp$_9 = (tmp$_8 = j, j = tmp$_8 + 1 | 0, tmp$_8);
        var n_6 = (tmp$_7 = i, i = tmp$_7 + 1 | 0, tmp$_7);
        var v = data.data[n_6] & 255;
        imageDataArray.data[tmp$_9] = toByte(v);
        tmp$_12 = (tmp$_11 = j, j = tmp$_11 + 1 | 0, tmp$_11);
        var n_7 = (tmp$_10 = i, i = tmp$_10 + 1 | 0, tmp$_10);
        var v_0 = data.data[n_7] & 255;
        imageDataArray.data[tmp$_12] = toByte(v_0);
        tmp$_15 = (tmp$_14 = j, j = tmp$_14 + 1 | 0, tmp$_14);
        var n_8 = (tmp$_13 = i, i = tmp$_13 + 1 | 0, tmp$_13);
        var v_1 = data.data[n_8] & 255;
        imageDataArray.data[tmp$_15] = toByte(v_1);
        var n_9 = (tmp$_16 = j, j = tmp$_16 + 1 | 0, tmp$_16);
        imageDataArray.data[n_9] = toByte(255);
      }
    }
     else if (tmp$ === 4) {
      tmp$_17 = Kotlin.imul(width, height);
      for (var n_10 = 0; n_10 < tmp$_17; n_10++) {
        var n_11 = (tmp$_18 = i, i = tmp$_18 + 1 | 0, tmp$_18);
        var c = data.data[n_11] & 255;
        var n_12 = (tmp$_19 = i, i = tmp$_19 + 1 | 0, tmp$_19);
        var m = data.data[n_12] & 255;
        var n_13 = (tmp$_20 = i, i = tmp$_20 + 1 | 0, tmp$_20);
        var y = data.data[n_13] & 255;
        var n_14 = (tmp$_21 = i, i = tmp$_21 + 1 | 0, tmp$_21);
        var k = data.data[n_14] & 255;
        tmp$_23 = (tmp$_22 = j, j = tmp$_22 + 1 | 0, tmp$_22);
        var v_2 = 255 - this.clampTo8bit_0(Kotlin.imul(c, 1 - (k / 255 | 0) | 0) + k | 0) | 0;
        imageDataArray.data[tmp$_23] = toByte(v_2);
        tmp$_25 = (tmp$_24 = j, j = tmp$_24 + 1 | 0, tmp$_24);
        var v_3 = 255 - this.clampTo8bit_0(Kotlin.imul(m, 1 - (k / 255 | 0) | 0) + k | 0) | 0;
        imageDataArray.data[tmp$_25] = toByte(v_3);
        tmp$_27 = (tmp$_26 = j, j = tmp$_26 + 1 | 0, tmp$_26);
        var v_4 = 255 - this.clampTo8bit_0(Kotlin.imul(y, 1 - (k / 255 | 0) | 0) + k | 0) | 0;
        imageDataArray.data[tmp$_27] = toByte(v_4);
        var n_15 = (tmp$_28 = j, j = tmp$_28 + 1 | 0, tmp$_28);
        imageDataArray.data[n_15] = toByte(255);
      }
    }
     else
      invalidOp('Unsupported color mode');
  };
  function JPEGDecoder$ImageInfo(width, height) {
    this.width = width;
    this.height = height;
  }
  JPEGDecoder$ImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageInfo',
    interfaces: []
  };
  JPEGDecoder$ImageInfo.prototype.component1 = function () {
    return this.width;
  };
  JPEGDecoder$ImageInfo.prototype.component2 = function () {
    return this.height;
  };
  JPEGDecoder$ImageInfo.prototype.copy_vux9f0$ = function (width, height) {
    return new JPEGDecoder$ImageInfo(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  JPEGDecoder$ImageInfo.prototype.toString = function () {
    return 'ImageInfo(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  JPEGDecoder$ImageInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  JPEGDecoder$ImageInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function JPEGDecoder$ImageData(width, height, data) {
    this.width = width;
    this.height = height;
    this.data = data;
  }
  JPEGDecoder$ImageData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageData',
    interfaces: []
  };
  function JPEGDecoder$Companion() {
    JPEGDecoder$Companion_instance = this;
  }
  JPEGDecoder$Companion.prototype.decodeInfo_fqrh44$ = function (jpegData) {
    var arr = new UByteArray(jpegData);
    var decoder = new JPEGDecoder();
    decoder.parse_dctkei$(arr);
    return new JPEGDecoder$ImageInfo(decoder.width_0, decoder.height_0);
  };
  JPEGDecoder$Companion.prototype.decode_fqrh44$ = function (jpegData) {
    var data = this.decodeToData_0(jpegData);
    return RGBA_getInstance().decodeToBitmap32_qq690d$(data.width, data.height, data.data.data);
  };
  JPEGDecoder$Companion.prototype.decodeToData_0 = function (jpegData) {
    var arr = new UByteArray(jpegData);
    var decoder = new JPEGDecoder();
    decoder.parse_dctkei$(arr);
    var image = new JPEGDecoder$ImageData(decoder.width_0, decoder.height_0, UByteArray_init(Kotlin.imul(decoder.width_0, decoder.height_0) * 4 | 0));
    decoder.copyToImageData_q4uxu6$(image);
    return image;
  };
  JPEGDecoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JPEGDecoder$Companion_instance = null;
  function JPEGDecoder$Companion_getInstance() {
    if (JPEGDecoder$Companion_instance === null) {
      new JPEGDecoder$Companion();
    }
    return JPEGDecoder$Companion_instance;
  }
  JPEGDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JPEGDecoder',
    interfaces: []
  };
  var Array_0 = Array;
  function JPEGEncoder(quality) {
    JPEGEncoder$Companion_getInstance();
    if (quality === void 0)
      quality = 50;
    this.yTable_0 = new Int32Array(64);
    this.uvTable_0 = new Int32Array(64);
    this.fdtblY_0 = new Float32Array(64);
    this.fdtblUV_0 = new Float32Array(64);
    this.ydcHt_0 = [];
    this.uvdcHt_0 = [];
    this.yavHt_0 = [];
    this.uvacHt_0 = [];
    var array = Array_0(65535);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int32Array(2);
    }
    this.bitcode_0 = array;
    this.category_0 = new Int32Array(65535);
    this.outputfDCTQuant_0 = new Int32Array(64);
    this.du_0 = new Int32Array(64);
    this.byteOut_0 = ByteArrayBuilderSmall_init();
    this.byteNew_0 = 0;
    this.bytePos_0 = 7;
    this.ydu_0 = new Float32Array(64);
    this.udu_0 = new Float32Array(64);
    this.vdu_0 = new Float32Array(64);
    this.rgbYuvTable_0 = new Int32Array(2048);
    this.currentQuality_0 = 0;
    this.initHuffmanTbl_0();
    this.initCategoryNumber_0();
    this.initRGBYUVTable_0();
    this.setQuality_0(quality);
  }
  JPEGEncoder.prototype.initQuantTables_0 = function (sf) {
    for (var i = 0; i < 64; i++) {
      var x = (Kotlin.imul(JPEGEncoder$Companion_getInstance().YQT_TABLE_0[i], sf) + 50 | 0) / 100.0;
      var t = numberToInt(Math_0.floor(x));
      if (t < 1) {
        t = 1;
      }
       else if (t > 255) {
        t = 255;
      }
      this.yTable_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[i]] = t;
    }
    for (var j = 0; j < 64; j++) {
      var x_0 = (Kotlin.imul(JPEGEncoder$Companion_getInstance().UVQT_TABLE_0[j], sf) + 50.0) / 100.0;
      var u = numberToInt(Math_0.floor(x_0));
      if (u < 1) {
        u = 1;
      }
       else if (u > 255) {
        u = 255;
      }
      this.uvTable_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[j]] = u;
    }
    var k = 0;
    for (var row = 0; row < 8; row++) {
      for (var col = 0; col < 8; col++) {
        this.fdtblY_0[k] = 1.0 / (this.yTable_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[k]] * JPEGEncoder$Companion_getInstance().AASF_TABLE_0[row] * JPEGEncoder$Companion_getInstance().AASF_TABLE_0[col] * 8.0);
        this.fdtblUV_0[k] = 1.0 / (this.uvTable_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[k]] * JPEGEncoder$Companion_getInstance().AASF_TABLE_0[row] * JPEGEncoder$Companion_getInstance().AASF_TABLE_0[col] * 8.0);
        k = k + 1 | 0;
      }
    }
  };
  JPEGEncoder.prototype.computeHuffmanTbl_0 = function (nrCodes, std_table) {
    var tmp$, tmp$_0;
    var codeValue = 0;
    var posInTable = 0;
    var array = Array_0(((tmp$ = max(std_table)) != null ? tmp$ : 0) + 1 | 0);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = new Int32Array(2);
    }
    var ht = array;
    for (var k = 1; k <= 16; k++) {
      tmp$_0 = nrCodes[k];
      for (var j = 1; j <= tmp$_0; j++) {
        ht[std_table[posInTable]] = new Int32Array(2);
        ht[std_table[posInTable]][0] = codeValue;
        ht[std_table[posInTable]][1] = k;
        posInTable = posInTable + 1 | 0;
        codeValue = codeValue + 1 | 0;
      }
      codeValue = codeValue * 2 | 0;
    }
    return ht;
  };
  JPEGEncoder.prototype.initHuffmanTbl_0 = function () {
    this.ydcHt_0 = this.computeHuffmanTbl_0(JPEGEncoder$Companion_getInstance().STD_DC_LUMINANCE_NRCODES_0, JPEGEncoder$Companion_getInstance().STD_DC_LUMINANCE_VALUES_0);
    this.uvdcHt_0 = this.computeHuffmanTbl_0(JPEGEncoder$Companion_getInstance().STD_DC_CHROMIANCE_NRCODES_0, JPEGEncoder$Companion_getInstance().STD_DC_CHROMIANCE_VALUES_0);
    this.yavHt_0 = this.computeHuffmanTbl_0(JPEGEncoder$Companion_getInstance().STD_AC_LUMINANCE_NRCODES_0, JPEGEncoder$Companion_getInstance().STD_AC_LUMINANCE_VALUES_0);
    this.uvacHt_0 = this.computeHuffmanTbl_0(JPEGEncoder$Companion_getInstance().STD_AC_CHROMIANCE_NRCODES_0, JPEGEncoder$Companion_getInstance().STD_AC_CHROMIANCE_VALUES_0);
  };
  JPEGEncoder.prototype.initCategoryNumber_0 = function () {
    var tmp$, tmp$_0;
    var nrlower = 1;
    var nrupper = 2;
    for (var cat = 1; cat <= 15; cat++) {
      tmp$ = nrupper;
      for (var nr = nrlower; nr < tmp$; nr++) {
        this.category_0[32767 + nr | 0] = cat;
        this.bitcode_0[32767 + nr | 0] = new Int32Array(2);
        this.bitcode_0[32767 + nr | 0][1] = cat;
        this.bitcode_0[32767 + nr | 0][0] = nr;
      }
      tmp$_0 = -nrlower;
      for (var nrneg = -(nrupper - 1 | 0); nrneg <= tmp$_0; nrneg++) {
        this.category_0[32767 + nrneg | 0] = cat;
        this.bitcode_0[32767 + nrneg | 0] = new Int32Array(2);
        this.bitcode_0[32767 + nrneg | 0][1] = cat;
        this.bitcode_0[32767 + nrneg | 0][0] = nrupper - 1 + nrneg | 0;
      }
      nrlower = nrlower << 1;
      nrupper = nrupper << 1;
    }
  };
  JPEGEncoder.prototype.initRGBYUVTable_0 = function () {
    for (var i = 0; i < 256; i++) {
      this.rgbYuvTable_0[i + 0 | 0] = 19595 * i | 0;
      this.rgbYuvTable_0[i + 256 | 0] = 38470 * i | 0;
      this.rgbYuvTable_0[i + 512 | 0] = (7471 * i | 0) + 32768 | 0;
      this.rgbYuvTable_0[i + 768 | 0] = -11059 * i | 0;
      this.rgbYuvTable_0[i + 1024 | 0] = -21709 * i | 0;
      this.rgbYuvTable_0[i + 1280 | 0] = (32768 * i | 0) + 8421375 | 0;
      this.rgbYuvTable_0[i + 1536 | 0] = -27439 * i | 0;
      this.rgbYuvTable_0[i + 1792 | 0] = -5329 * i | 0;
    }
  };
  JPEGEncoder.prototype.writeBits_0 = function (bs) {
    var value = bs[0];
    var posval = bs[1] - 1 | 0;
    while (posval >= 0) {
      if ((value & 1 << posval) !== 0) {
        this.byteNew_0 = this.byteNew_0 | 1 << this.bytePos_0;
      }
      posval = posval - 1 | 0;
      this.bytePos_0 = this.bytePos_0 - 1 | 0;
      if (this.bytePos_0 < 0) {
        if (this.byteNew_0 === 255) {
          this.writeByte_0(255);
          this.writeByte_0(0);
        }
         else {
          this.writeByte_0(this.byteNew_0);
        }
        this.bytePos_0 = 7;
        this.byteNew_0 = 0;
      }
    }
  };
  JPEGEncoder.prototype.writeByte_0 = function (value) {
    this.byteOut_0.append_s8j3t7$(toByte(value));
  };
  JPEGEncoder.prototype.writeWord_0 = function (value) {
    this.writeByte_0(value >>> 8 & 255);
    this.writeByte_0(value & 255);
  };
  JPEGEncoder.prototype.fDCTQuant_0 = function (data, fdtbl) {
    var d0;
    var d1;
    var d2;
    var d3;
    var d4;
    var d5;
    var d6;
    var d7;
    var dataOff = 0;
    var i8 = 8;
    var i64 = 64;
    for (var i = 0; i < i8; i++) {
      d0 = data[dataOff + 0 | 0];
      d1 = data[dataOff + 1 | 0];
      d2 = data[dataOff + 2 | 0];
      d3 = data[dataOff + 3 | 0];
      d4 = data[dataOff + 4 | 0];
      d5 = data[dataOff + 5 | 0];
      d6 = data[dataOff + 6 | 0];
      d7 = data[dataOff + 7 | 0];
      var tmp0 = d0 + d7;
      var tmp7 = d0 - d7;
      var tmp1 = d1 + d6;
      var tmp6 = d1 - d6;
      var tmp2 = d2 + d5;
      var tmp5 = d2 - d5;
      var tmp3 = d3 + d4;
      var tmp4 = d3 - d4;
      var tmp10 = tmp0 + tmp3;
      var tmp13 = tmp0 - tmp3;
      var tmp11 = tmp1 + tmp2;
      var tmp12 = tmp1 - tmp2;
      data[dataOff] = tmp10 + tmp11;
      data[dataOff + 4 | 0] = tmp10 - tmp11;
      var z1 = (tmp12 + tmp13) * 0.70710677;
      data[dataOff + 2 | 0] = tmp13 + z1;
      data[dataOff + 6 | 0] = tmp13 - z1;
      tmp10 = tmp4 + tmp5;
      tmp11 = tmp5 + tmp6;
      tmp12 = tmp6 + tmp7;
      var z5 = (tmp10 - tmp12) * 0.38268343;
      var z2 = 0.5411961 * tmp10 + z5;
      var z4 = 1.306563 * tmp12 + z5;
      var z3 = tmp11 * 0.70710677;
      var z11 = tmp7 + z3;
      var z13 = tmp7 - z3;
      data[dataOff + 5 | 0] = z13 + z2;
      data[dataOff + 3 | 0] = z13 - z2;
      data[dataOff + 1 | 0] = z11 + z4;
      data[dataOff + 7 | 0] = z11 - z4;
      dataOff = dataOff + 8 | 0;
    }
    dataOff = 0;
    for (var i_0 = 0; i_0 < i8; i_0++) {
      d0 = data[dataOff];
      d1 = data[dataOff + 8 | 0];
      d2 = data[dataOff + 16 | 0];
      d3 = data[dataOff + 24 | 0];
      d4 = data[dataOff + 32 | 0];
      d5 = data[dataOff + 40 | 0];
      d6 = data[dataOff + 48 | 0];
      d7 = data[dataOff + 56 | 0];
      var tmp0p2 = d0 + d7;
      var tmp7p2 = d0 - d7;
      var tmp1p2 = d1 + d6;
      var tmp6p2 = d1 - d6;
      var tmp2p2 = d2 + d5;
      var tmp5p2 = d2 - d5;
      var tmp3p2 = d3 + d4;
      var tmp4p2 = d3 - d4;
      var tmp10p2 = tmp0p2 + tmp3p2;
      var tmp13p2 = tmp0p2 - tmp3p2;
      var tmp11p2 = tmp1p2 + tmp2p2;
      var tmp12p2 = tmp1p2 - tmp2p2;
      data[dataOff] = tmp10p2 + tmp11p2;
      data[dataOff + 32 | 0] = tmp10p2 - tmp11p2;
      var z1p2 = (tmp12p2 + tmp13p2) * 0.70710677;
      data[dataOff + 16 | 0] = tmp13p2 + z1p2;
      data[dataOff + 48 | 0] = tmp13p2 - z1p2;
      tmp10p2 = tmp4p2 + tmp5p2;
      tmp11p2 = tmp5p2 + tmp6p2;
      tmp12p2 = tmp6p2 + tmp7p2;
      var z5p2 = (tmp10p2 - tmp12p2) * 0.38268343;
      var z2p2 = 0.5411961 * tmp10p2 + z5p2;
      var z4p2 = 1.306563 * tmp12p2 + z5p2;
      var z3p2 = tmp11p2 * 0.70710677;
      var z11p2 = tmp7p2 + z3p2;
      var z13p2 = tmp7p2 - z3p2;
      data[dataOff + 40 | 0] = z13p2 + z2p2;
      data[dataOff + 24 | 0] = z13p2 - z2p2;
      data[dataOff + 8 | 0] = z11p2 + z4p2;
      data[dataOff + 56 | 0] = z11p2 - z4p2;
      dataOff = dataOff + 1 | 0;
    }
    var fDCTQuant;
    for (var i_1 = 0; i_1 < i64; i_1++) {
      fDCTQuant = data[i_1] * fdtbl[i_1];
      this.outputfDCTQuant_0[i_1] = fDCTQuant > 0.0 ? numberToInt(fDCTQuant + 0.5) : numberToInt(fDCTQuant - 0.5);
    }
    return this.outputfDCTQuant_0;
  };
  JPEGEncoder.prototype.writeAPP0_0 = function () {
    this.writeWord_0(65504);
    this.writeWord_0(16);
    this.writeByte_0(74);
    this.writeByte_0(70);
    this.writeByte_0(73);
    this.writeByte_0(70);
    this.writeByte_0(0);
    this.writeByte_0(1);
    this.writeByte_0(1);
    this.writeByte_0(0);
    this.writeWord_0(1);
    this.writeWord_0(1);
    this.writeByte_0(0);
    this.writeByte_0(0);
  };
  JPEGEncoder.prototype.writeSOF0_0 = function (width, height) {
    this.writeWord_0(65472);
    this.writeWord_0(17);
    this.writeByte_0(8);
    this.writeWord_0(height);
    this.writeWord_0(width);
    this.writeByte_0(3);
    this.writeByte_0(1);
    this.writeByte_0(17);
    this.writeByte_0(0);
    this.writeByte_0(2);
    this.writeByte_0(17);
    this.writeByte_0(1);
    this.writeByte_0(3);
    this.writeByte_0(17);
    this.writeByte_0(1);
  };
  JPEGEncoder.prototype.writeDQT_0 = function () {
    this.writeWord_0(65499);
    this.writeWord_0(132);
    this.writeByte_0(0);
    for (var i = 0; i < 64; i++) {
      this.writeByte_0(this.yTable_0[i]);
    }
    this.writeByte_0(1);
    for (var j = 0; j < 64; j++) {
      this.writeByte_0(this.uvTable_0[j]);
    }
  };
  JPEGEncoder.prototype.writeDHT_0 = function () {
    this.writeWord_0(65476);
    this.writeWord_0(418);
    this.writeByte_0(0);
    for (var i = 0; i < 16; i++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_DC_LUMINANCE_NRCODES_0[i + 1 | 0]);
    }
    for (var j = 0; j <= 11; j++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_DC_LUMINANCE_VALUES_0[j]);
    }
    this.writeByte_0(16);
    for (var k = 0; k < 16; k++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_AC_LUMINANCE_NRCODES_0[k + 1 | 0]);
    }
    for (var l = 0; l <= 161; l++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_AC_LUMINANCE_VALUES_0[l]);
    }
    this.writeByte_0(1);
    for (var m = 0; m < 16; m++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_DC_CHROMIANCE_NRCODES_0[m + 1 | 0]);
    }
    for (var n = 0; n <= 11; n++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_DC_CHROMIANCE_VALUES_0[n]);
    }
    this.writeByte_0(17);
    for (var o = 0; o < 16; o++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_AC_CHROMIANCE_NRCODES_0[o + 1 | 0]);
    }
    for (var p = 0; p <= 161; p++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_AC_CHROMIANCE_VALUES_0[p]);
    }
  };
  JPEGEncoder.prototype.writeSOS_0 = function () {
    this.writeWord_0(65498);
    this.writeWord_0(12);
    this.writeByte_0(3);
    this.writeByte_0(1);
    this.writeByte_0(0);
    this.writeByte_0(2);
    this.writeByte_0(17);
    this.writeByte_0(3);
    this.writeByte_0(17);
    this.writeByte_0(0);
    this.writeByte_0(63);
    this.writeByte_0(0);
  };
  JPEGEncoder.prototype.processDU_0 = function (CDU, fdtbl, DC, HTDC, HTAC) {
    var dc = DC;
    var eob = HTAC[0];
    var m16zeroes = HTAC[240];
    var pos;
    var i16 = 16;
    var i63 = 63;
    var i64 = 64;
    var duDct = this.fDCTQuant_0(CDU, fdtbl);
    for (var j = 0; j < i64; j++) {
      this.du_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[j]] = duDct[j];
    }
    var diff = this.du_0[0] - dc | 0;
    dc = this.du_0[0];
    if (diff === 0) {
      this.writeBits_0(HTDC[0]);
    }
     else {
      pos = 32767 + diff | 0;
      this.writeBits_0(HTDC[this.category_0[pos]]);
      this.writeBits_0(this.bitcode_0[pos]);
    }
    var end0pos = 63;
    while (end0pos > 0 && this.du_0[end0pos] === 0) {
      end0pos = end0pos - 1 | 0;
    }
    if (end0pos === 0) {
      this.writeBits_0(eob);
      return dc;
    }
    var i = 1;
    var lng;
    while (i <= end0pos) {
      var startpos = i;
      while (this.du_0[i] === 0 && i <= end0pos) {
        i = i + 1 | 0;
      }
      var nrzeroes = i - startpos | 0;
      if (nrzeroes >= i16) {
        lng = nrzeroes >> 4;
        for (var nrmarker = 1; nrmarker <= lng; nrmarker++)
          this.writeBits_0(m16zeroes);
        nrzeroes = nrzeroes & 15;
      }
      pos = 32767 + this.du_0[i] | 0;
      this.writeBits_0(HTAC[(nrzeroes << 4) + this.category_0[pos] | 0]);
      this.writeBits_0(this.bitcode_0[pos]);
      i = i + 1 | 0;
    }
    if (end0pos !== i63) {
      this.writeBits_0(eob);
    }
    return dc;
  };
  JPEGEncoder.prototype.encode_lnhgi4$ = function (bmp, quality) {
    if (quality === void 0)
      quality = null;
    return this.encode_0(new JPEGEncoder$ImageData(bmp.extractBytes(), bmp.width, bmp.height), quality);
  };
  JPEGEncoder.prototype.encode_0 = function (image, quality) {
    if (quality === void 0)
      quality = null;
    var tmp$, tmp$_0, tmp$_1;
    if (quality != null)
      this.setQuality_0(quality);
    this.byteOut_0 = ByteArrayBuilderSmall_init();
    this.byteNew_0 = 0;
    this.bytePos_0 = 7;
    this.writeWord_0(65496);
    this.writeAPP0_0();
    this.writeDQT_0();
    this.writeSOF0_0(image.width, image.height);
    this.writeDHT_0();
    this.writeSOS_0();
    var dcy = 0;
    var dcu = 0;
    var dcv = 0;
    this.byteNew_0 = 0;
    this.bytePos_0 = 7;
    var imageData = image.data;
    var width = image.width;
    var height = image.height;
    var quadWidth = width * 4 | 0;
    var x;
    var y = 0;
    var r;
    var g;
    var b;
    var start;
    while (y < height) {
      x = 0;
      while (x < quadWidth) {
        start = Kotlin.imul(quadWidth, y) + x | 0;
        for (var pos = 0; pos < 64; pos++) {
          var row = pos >> 3;
          var col = (pos & 7) * 4 | 0;
          var p = start + Kotlin.imul(row, quadWidth) + col | 0;
          if ((y + row | 0) >= height) {
            p = p - Kotlin.imul(quadWidth, y + 1 + row - height | 0) | 0;
          }
          if ((x + col | 0) >= quadWidth) {
            p = p - (x + col - quadWidth + 4) | 0;
          }
          r = imageData[tmp$ = p, p = tmp$ + 1 | 0, tmp$] & 255;
          g = imageData[tmp$_0 = p, p = tmp$_0 + 1 | 0, tmp$_0] & 255;
          b = imageData[tmp$_1 = p, p = tmp$_1 + 1 | 0, tmp$_1] & 255;
          this.ydu_0[pos] = (this.rgbYuvTable_0[r + 0 | 0] + this.rgbYuvTable_0[g + 256 | 0] + this.rgbYuvTable_0[b + 512 | 0] >> 16) - 128 | 0;
          this.udu_0[pos] = (this.rgbYuvTable_0[r + 768 | 0] + this.rgbYuvTable_0[g + 1024 | 0] + this.rgbYuvTable_0[b + 1280 | 0] >> 16) - 128 | 0;
          this.vdu_0[pos] = (this.rgbYuvTable_0[r + 1280 | 0] + this.rgbYuvTable_0[g + 1536 | 0] + this.rgbYuvTable_0[b + 1792 | 0] >> 16) - 128 | 0;
        }
        dcy = this.processDU_0(this.ydu_0, this.fdtblY_0, dcy, this.ydcHt_0, this.yavHt_0);
        dcu = this.processDU_0(this.udu_0, this.fdtblUV_0, dcu, this.uvdcHt_0, this.uvacHt_0);
        dcv = this.processDU_0(this.vdu_0, this.fdtblUV_0, dcv, this.uvdcHt_0, this.uvacHt_0);
        x = x + 32 | 0;
      }
      y = y + 8 | 0;
    }
    if (this.bytePos_0 >= 0) {
      var fillbits = new Int32Array(2);
      fillbits[1] = this.bytePos_0 + 1 | 0;
      fillbits[0] = (1 << this.bytePos_0 + 1) - 1 | 0;
      this.writeBits_0(fillbits);
    }
    this.writeWord_0(65497);
    return this.byteOut_0.toByteArray();
  };
  JPEGEncoder.prototype.setQuality_0 = function (quality) {
    var quality_0 = quality;
    if (quality_0 <= 0) {
      quality_0 = 1;
    }
    if (quality_0 > 100) {
      quality_0 = 100;
    }
    if (this.currentQuality_0 === quality_0)
      return;
    this.initQuantTables_0(quality_0 < 50 ? 5000 / quality_0 | 0 : 200 - (quality_0 * 2 | 0) | 0);
    this.currentQuality_0 = quality_0;
  };
  function JPEGEncoder$ImageData(data, width, height) {
    this.data = data;
    this.width = width;
    this.height = height;
  }
  JPEGEncoder$ImageData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageData',
    interfaces: []
  };
  function JPEGEncoder$Companion() {
    JPEGEncoder$Companion_instance = this;
    this.ZIG_ZAG_0 = new Int32Array([0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63]);
    this.STD_DC_LUMINANCE_NRCODES_0 = new Int32Array([0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
    this.STD_DC_LUMINANCE_VALUES_0 = new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    this.STD_AC_LUMINANCE_NRCODES_0 = new Int32Array([0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125]);
    this.STD_AC_LUMINANCE_VALUES_0 = new Int32Array([1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250]);
    this.STD_DC_CHROMIANCE_NRCODES_0 = new Int32Array([0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
    this.STD_DC_CHROMIANCE_VALUES_0 = new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    this.STD_AC_CHROMIANCE_NRCODES_0 = new Int32Array([0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119]);
    this.STD_AC_CHROMIANCE_VALUES_0 = new Int32Array([0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250]);
    this.YQT_TABLE_0 = new Int32Array([16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99]);
    this.UVQT_TABLE_0 = new Int32Array([17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]);
    this.AASF_TABLE_0 = new Float32Array([1.0, 1.3870399, 1.306563, 1.1758755, 1.0, 0.78569496, 0.5411961, 0.27589938]);
  }
  JPEGEncoder$Companion.prototype.encode_gqk24z$ = function (bmp, quality) {
    if (quality === void 0)
      quality = 50;
    return (new JPEGEncoder(quality)).encode_lnhgi4$(bmp);
  };
  JPEGEncoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JPEGEncoder$Companion_instance = null;
  function JPEGEncoder$Companion_getInstance() {
    if (JPEGEncoder$Companion_instance === null) {
      new JPEGEncoder$Companion();
    }
    return JPEGEncoder$Companion_instance;
  }
  JPEGEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JPEGEncoder',
    interfaces: []
  };
  function decode($receiver_0, s_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode($receiver_0, s_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode($receiver_0, s_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$props = props_0;
  }
  Coroutine$decode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode.prototype.constructor = Coroutine$decode;
  Coroutine$decode.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$s.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(this.local$s.basename));
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
  function decode_0($receiver_0, s_0, filename_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_0($receiver_0, s_0, filename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode_0($receiver_0, s_0, filename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$filename = filename_0;
  }
  Coroutine$decode_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_0.prototype.constructor = Coroutine$decode_0;
  Coroutine$decode_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, new ImageDecodingProps(this.local$filename));
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
  function decode_1($receiver_0, s_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_1($receiver_0, s_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode_1($receiver_0, s_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$props = props_0;
  }
  Coroutine$decode_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_1.prototype.constructor = Coroutine$decode_1;
  Coroutine$decode_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, this.local$props);
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
  function nativeImageFormatProviders$lambda() {
    return listOf(NativeImageFormatProvider_getInstance());
  }
  var nativeImageFormatProviders;
  function get_nativeImageFormatProviders() {
    new PropertyMetadata('nativeImageFormatProviders');
    return nativeImageFormatProviders.value;
  }
  var nativeImageFormatProvider;
  function displayImage(bmp, continuation) {
    return nativeImageFormatProvider.display_uler2c$(bmp, continuation);
  }
  function decodeImageBytes(bytes_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeImageBytes(bytes_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decodeImageBytes(bytes_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$tmp$ = void 0;
    this.local$bytes = bytes_0;
  }
  Coroutine$decodeImageBytes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeImageBytes.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeImageBytes.prototype.constructor = Coroutine$decodeImageBytes;
  Coroutine$decodeImageBytes.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = get_nativeImageFormatProviders().iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            var nip = this.local$tmp$.next();
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = nip.decode_fqrh44$(this.local$bytes, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (!Kotlin.isType(t, Throwable))
              throw t;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            throw new UnsupportedOperationException('No format supported');
        }
      }
       catch (e) {
        if (this.state_0 === 5)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readNativeImage($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readNativeImage($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readNativeImage($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readNativeImage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNativeImage.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNativeImage.prototype.constructor = Coroutine$readNativeImage;
  Coroutine$readNativeImage.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = decodeImageBytes(this.result_0, this);
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
  function readImageData($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData.prototype.constructor = Coroutine$readImageData;
  Coroutine$readImageData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(this.local$$receiver.basename));
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
  function readBitmapListNoNative($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readBitmapListNoNative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative.prototype.constructor = Coroutine$readBitmapListNoNative;
  Coroutine$readBitmapListNoNative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readImageData_1(this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
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
  function readNativeImage_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readNativeImage_0($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readNativeImage_0($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readNativeImage_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNativeImage_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNativeImage_0.prototype.constructor = Coroutine$readNativeImage_0;
  Coroutine$readNativeImage_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = decodeImageBytes(this.result_0, this);
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
  function readImageData_0($receiver_0, basename_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_0($receiver_0, basename_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_0($receiver_0, basename_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$basename = basename_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageData_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData_0.prototype.constructor = Coroutine$readImageData_0;
  Coroutine$readImageData_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$basename === void 0)
              this.local$basename = 'file.bin';
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(openSync(this.result_0), new ImageDecodingProps(this.local$basename), this);
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
  function readImageDataProps($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageDataProps($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageDataProps($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageDataProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageDataProps.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageDataProps.prototype.constructor = Coroutine$readImageDataProps;
  Coroutine$readImageDataProps.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps('file.bin');
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(openSync(this.result_0), this.local$props, this);
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
  function readBitmapListNoNative_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative_0($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative_0($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readBitmapListNoNative_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative_0.prototype.constructor = Coroutine$readBitmapListNoNative_0;
  Coroutine$readBitmapListNoNative_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readImageData_0(this.local$$receiver, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
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
  function readBitmapInfo($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapInfo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapInfo.prototype.constructor = Coroutine$readBitmapInfo;
  Coroutine$readBitmapInfo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0, this.local$props);
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
  function readImageData_1($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_1($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_1($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageData_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData_1.prototype.constructor = Coroutine$readImageData_1;
  Coroutine$readImageData_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, new ImageDecodingProps(this.local$$receiver.basename));
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
  function readBitmapListNoNative_1($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative_1($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative_1($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapListNoNative_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative_1.prototype.constructor = Coroutine$readBitmapListNoNative_1;
  Coroutine$readBitmapListNoNative_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = readImageData_1(this.local$$receiver, this.local$formats, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
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
  function readBitmap($receiver, basename, formats, continuation) {
    if (formats === void 0)
      formats = get_defaultImageFormats();
    return readBitmap_0($receiver, new ImageDecodingProps(basename), formats, continuation);
  }
  function readBitmap_0($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmap($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$tmp$ = void 0;
    this.local$bytes = void 0;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmap.prototype.constructor = Coroutine$readBitmap;
  Coroutine$readBitmap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps('file.bin');
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 1;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.local$bytes = this.result_0;
            this.exceptionState_0 = 5;
            if (nativeImageLoadingEnabled) {
              this.state_0 = 3;
              this.result_0 = decodeImageBytes(this.local$bytes, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }

          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.exceptionState_0 = 9;
            this.state_0 = 8;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.state_0 = 6;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              throw t;
            }

          case 6:
            this.local$tmp$ = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return this.local$tmp$;
          case 9:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 9)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapInfo_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapInfo_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapInfo_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapInfo_0.prototype.constructor = Coroutine$readBitmapInfo_0;
  Coroutine$readBitmapInfo_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0);
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
  function readBitmapOptimized($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapOptimized($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapOptimized($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readBitmapOptimized.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapOptimized.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapOptimized.prototype.constructor = Coroutine$readBitmapOptimized;
  Coroutine$readBitmapOptimized.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.readSpecial_lmshww$(getKClass(NativeImage), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 6;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              printStackTrace(t);
              this.state_0 = 3;
              this.result_0 = readBitmap_1(this.local$$receiver, void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              throw t;
            }

          case 3:
            return this.result_0;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
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
  function readBitmap_1($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap_0($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmap_0($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$tmp$ = void 0;
    this.local$file = void 0;
    this.local$bytes = void 0;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmap_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmap_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmap_0.prototype.constructor = Coroutine$readBitmap_0;
  Coroutine$readBitmap_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.local$file = this.local$$receiver;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.local$bytes = this.result_0;
            this.exceptionState_0 = 5;
            if (nativeImageLoadingEnabled) {
              this.state_0 = 3;
              this.result_0 = decodeImageBytes(this.local$bytes, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props.copy_qp3p0u$(this.local$file.basename), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }

          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.exceptionState_0 = 9;
            this.state_0 = 8;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.state_0 = 6;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props.copy_qp3p0u$(this.local$file.basename), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              throw t;
            }

          case 6:
            this.local$tmp$ = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return this.local$tmp$;
          case 9:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 9)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var nativeImageLoadingEnabled;
  function disableNativeImageLoading(callback_0, continuation) {
    var oldNativeImageLoadingEnabled_0 = format.nativeImageLoadingEnabled;
    try {
      format.nativeImageLoadingEnabled = false;
      callback_0();
    }
    finally {
      format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled_0;
    }
  }
  defineInlineFunction('korim-js.com.soywiz.korim.format.disableNativeImageLoading_o14v8n$', wrapFunction(function () {
    var format = _.com.soywiz.korim.format;
    return function (callback_0, continuation) {
      var oldNativeImageLoadingEnabled_0 = format.nativeImageLoadingEnabled;
      try {
        format.nativeImageLoadingEnabled = false;
        callback_0();
      }
      finally {
        format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled_0;
      }
    };
  }));
  function readBitmapNoNative($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapNoNative($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapNoNative($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapNoNative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapNoNative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapNoNative.prototype.constructor = Coroutine$readBitmapNoNative;
  Coroutine$readBitmapNoNative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(this.result_0, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0.mainBitmap;
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
  function readBitmapNoNative_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapNoNative_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapNoNative_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapNoNative_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapNoNative_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapNoNative_0.prototype.constructor = Coroutine$readBitmapNoNative_0;
  Coroutine$readBitmapNoNative_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.decodeInWorker_nwlife$(this.result_0, this.local$$receiver.basename, this);
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
  function writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$bitmap = bitmap_0;
    this.local$format = format_0;
    this.local$props = props_0;
  }
  Coroutine$writeBitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeBitmap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeBitmap.prototype.constructor = Coroutine$writeBitmap;
  Coroutine$writeBitmap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$format === void 0)
              this.local$format = get_defaultImageFormats();
            if (this.local$props === void 0)
              this.local$props = new ImageEncodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$format.encodeInWorker_hnx2ev$(this.local$bitmap, this.local$props.copy_x69rha$(this.local$$receiver.basename), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.write_gssovf$(this.result_0, [], this);
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
  function showImageAndWaitExt($receiver, continuation) {
    return showImageAndWait($receiver, continuation);
  }
  function showImagesAndWaitExt($receiver, continuation) {
    return showImagesAndWait($receiver, continuation);
  }
  function showImageAndWait(image_0, continuation_0, suspended) {
    var instance = new Coroutine$showImageAndWait(image_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$showImageAndWait(image_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$image = image_0;
  }
  Coroutine$showImageAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showImageAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showImageAndWait.prototype.constructor = Coroutine$showImageAndWait;
  Coroutine$showImageAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println('Showing... ' + this.local$image);
            this.state_0 = 2;
            this.result_0 = nativeImageFormatProvider.display_uler2c$(this.local$image, this);
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
  function showImageAndWait_0(image_0, continuation_0, suspended) {
    var instance = new Coroutine$showImageAndWait_0(image_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$showImageAndWait_0(image_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$image = image_0;
  }
  Coroutine$showImageAndWait_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showImageAndWait_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showImageAndWait_0.prototype.constructor = Coroutine$showImageAndWait_0;
  Coroutine$showImageAndWait_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = showImageAndWait(render_0(this.local$image).toBmp32(), this);
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
  function showImagesAndWait(image_0, continuation_0, suspended) {
    var instance = new Coroutine$showImagesAndWait(image_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$showImagesAndWait(image_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$image = image_0;
  }
  Coroutine$showImagesAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showImagesAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showImagesAndWait.prototype.constructor = Coroutine$showImagesAndWait;
  Coroutine$showImagesAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$image.frames.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var frame = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = showImageAndWait(frame.bitmap, this);
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
  function PNG() {
    PNG_instance = this;
    ImageFormat.call(this, ['png']);
    this.MAGIC1 = (new Kotlin.Long(-1991225785, 0)).toInt();
    this.MAGIC2 = 218765834;
    this.InterlacedPasses = listOf_0([new PNG$InterlacedPass(0, 0, 8, 8, 8, 8), new PNG$InterlacedPass(0, 4, 8, 8, 8, 4), new PNG$InterlacedPass(4, 0, 8, 4, 4, 4), new PNG$InterlacedPass(0, 2, 4, 4, 4, 2), new PNG$InterlacedPass(2, 0, 4, 2, 2, 2), new PNG$InterlacedPass(0, 1, 2, 2, 2, 1), new PNG$InterlacedPass(1, 0, 2, 1, 1, 1)]);
    this.NormalPasses = listOf(new PNG$InterlacedPass(0, 0, 1, 1, 1, 1));
  }
  function PNG$InterlacedPass(startingRow, startingCol, rowIncrement, colIncrement, blockHeight, blockWidth) {
    this.startingRow = startingRow;
    this.startingCol = startingCol;
    this.rowIncrement = rowIncrement;
    this.colIncrement = colIncrement;
    this.blockHeight = blockHeight;
    this.blockWidth = blockWidth;
    var x = this.colIncrement;
    this.colIncrementShift = numberToInt(Math_0.log2(x));
  }
  PNG$InterlacedPass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterlacedPass',
    interfaces: []
  };
  PNG$InterlacedPass.prototype.component1 = function () {
    return this.startingRow;
  };
  PNG$InterlacedPass.prototype.component2 = function () {
    return this.startingCol;
  };
  PNG$InterlacedPass.prototype.component3 = function () {
    return this.rowIncrement;
  };
  PNG$InterlacedPass.prototype.component4 = function () {
    return this.colIncrement;
  };
  PNG$InterlacedPass.prototype.component5 = function () {
    return this.blockHeight;
  };
  PNG$InterlacedPass.prototype.component6 = function () {
    return this.blockWidth;
  };
  PNG$InterlacedPass.prototype.copy_mbbjvw$ = function (startingRow, startingCol, rowIncrement, colIncrement, blockHeight, blockWidth) {
    return new PNG$InterlacedPass(startingRow === void 0 ? this.startingRow : startingRow, startingCol === void 0 ? this.startingCol : startingCol, rowIncrement === void 0 ? this.rowIncrement : rowIncrement, colIncrement === void 0 ? this.colIncrement : colIncrement, blockHeight === void 0 ? this.blockHeight : blockHeight, blockWidth === void 0 ? this.blockWidth : blockWidth);
  };
  PNG$InterlacedPass.prototype.toString = function () {
    return 'InterlacedPass(startingRow=' + Kotlin.toString(this.startingRow) + (', startingCol=' + Kotlin.toString(this.startingCol)) + (', rowIncrement=' + Kotlin.toString(this.rowIncrement)) + (', colIncrement=' + Kotlin.toString(this.colIncrement)) + (', blockHeight=' + Kotlin.toString(this.blockHeight)) + (', blockWidth=' + Kotlin.toString(this.blockWidth)) + ')';
  };
  PNG$InterlacedPass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startingRow) | 0;
    result = result * 31 + Kotlin.hashCode(this.startingCol) | 0;
    result = result * 31 + Kotlin.hashCode(this.rowIncrement) | 0;
    result = result * 31 + Kotlin.hashCode(this.colIncrement) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockHeight) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockWidth) | 0;
    return result;
  };
  PNG$InterlacedPass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startingRow, other.startingRow) && Kotlin.equals(this.startingCol, other.startingCol) && Kotlin.equals(this.rowIncrement, other.rowIncrement) && Kotlin.equals(this.colIncrement, other.colIncrement) && Kotlin.equals(this.blockHeight, other.blockHeight) && Kotlin.equals(this.blockWidth, other.blockWidth)))));
  };
  function PNG$Colorspace(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PNG$Colorspace_initFields() {
    PNG$Colorspace_initFields = function () {
    };
    PNG$Colorspace$GRAYSCALE_instance = new PNG$Colorspace('GRAYSCALE', 0, 0);
    PNG$Colorspace$RGB_instance = new PNG$Colorspace('RGB', 1, 2);
    PNG$Colorspace$INDEXED_instance = new PNG$Colorspace('INDEXED', 2, 3);
    PNG$Colorspace$GRAYSCALE_ALPHA_instance = new PNG$Colorspace('GRAYSCALE_ALPHA', 3, 4);
    PNG$Colorspace$RGBA_instance = new PNG$Colorspace('RGBA', 4, 6);
    PNG$Colorspace$Companion_getInstance();
  }
  var PNG$Colorspace$GRAYSCALE_instance;
  function PNG$Colorspace$GRAYSCALE_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$GRAYSCALE_instance;
  }
  var PNG$Colorspace$RGB_instance;
  function PNG$Colorspace$RGB_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$RGB_instance;
  }
  var PNG$Colorspace$INDEXED_instance;
  function PNG$Colorspace$INDEXED_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$INDEXED_instance;
  }
  var PNG$Colorspace$GRAYSCALE_ALPHA_instance;
  function PNG$Colorspace$GRAYSCALE_ALPHA_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$GRAYSCALE_ALPHA_instance;
  }
  var PNG$Colorspace$RGBA_instance;
  function PNG$Colorspace$RGBA_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$RGBA_instance;
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  function PNG$Colorspace$Companion() {
    PNG$Colorspace$Companion_instance = this;
    var $receiver = PNG$Colorspace$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
  }
  PNG$Colorspace$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PNG$Colorspace$Companion_instance = null;
  function PNG$Colorspace$Companion_getInstance() {
    PNG$Colorspace_initFields();
    if (PNG$Colorspace$Companion_instance === null) {
      new PNG$Colorspace$Companion();
    }
    return PNG$Colorspace$Companion_instance;
  }
  PNG$Colorspace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Colorspace',
    interfaces: [Enum]
  };
  function PNG$Colorspace$values() {
    return [PNG$Colorspace$GRAYSCALE_getInstance(), PNG$Colorspace$RGB_getInstance(), PNG$Colorspace$INDEXED_getInstance(), PNG$Colorspace$GRAYSCALE_ALPHA_getInstance(), PNG$Colorspace$RGBA_getInstance()];
  }
  PNG$Colorspace.values = PNG$Colorspace$values;
  function PNG$Colorspace$valueOf(name) {
    switch (name) {
      case 'GRAYSCALE':
        return PNG$Colorspace$GRAYSCALE_getInstance();
      case 'RGB':
        return PNG$Colorspace$RGB_getInstance();
      case 'INDEXED':
        return PNG$Colorspace$INDEXED_getInstance();
      case 'GRAYSCALE_ALPHA':
        return PNG$Colorspace$GRAYSCALE_ALPHA_getInstance();
      case 'RGBA':
        return PNG$Colorspace$RGBA_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.format.PNG.Colorspace.' + name);
    }
  }
  PNG$Colorspace.valueOf_61zpoe$ = PNG$Colorspace$valueOf;
  function PNG$Header(width, height, bitsPerChannel, colorspace, compressionmethod, filtermethod, interlacemethod) {
    this.width = width;
    this.height = height;
    this.bitsPerChannel = bitsPerChannel;
    this.colorspace = colorspace;
    this.compressionmethod = compressionmethod;
    this.filtermethod = filtermethod;
    this.interlacemethod = interlacemethod;
    var tmp$, tmp$_0;
    tmp$ = this.colorspace;
    if (equals(tmp$, PNG$Colorspace$GRAYSCALE_getInstance()))
      tmp$_0 = 1;
    else if (equals(tmp$, PNG$Colorspace$INDEXED_getInstance()))
      tmp$_0 = 1;
    else if (equals(tmp$, PNG$Colorspace$GRAYSCALE_ALPHA_getInstance()))
      tmp$_0 = 2;
    else if (equals(tmp$, PNG$Colorspace$RGB_getInstance()))
      tmp$_0 = 3;
    else if (equals(tmp$, PNG$Colorspace$RGBA_getInstance()))
      tmp$_0 = 4;
    else
      tmp$_0 = 1;
    this.bytes = tmp$_0;
    this.stride = Kotlin.imul(this.width, this.bytes);
  }
  PNG$Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: []
  };
  PNG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var header = Kotlin.isType(tmp$ = this.readCommon_0(s, true), PNG$Header) ? tmp$ : throwCCE();
      var $receiver = new ImageInfo();
      $receiver.width = header.width;
      $receiver.height = header.height;
      $receiver.bitsPerPixel = header.bitsPerChannel;
      return $receiver;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  function PNG$writeImage$writeChunk(closure$s) {
    return function (name, data) {
      var nameBytes = copyOf_0(toByteArray(name), 4);
      var crc = new CRC32();
      crc.update_mj6st8$(nameBytes);
      crc.update_mj6st8$(data);
      write32_be_0(closure$s, data.length);
      writeBytes(closure$s, nameBytes);
      writeBytes(closure$s, data);
      write32_be_0(closure$s, crc.value);
    };
  }
  function PNG$writeImage$compress(closure$level) {
    return function (data) {
      if (closure$level === 0) {
        var adler32 = new Adler32();
        var x = data.length / 65535;
        var blocks = numberToInt(Math_0.ceil(x));
        var lastBlockSize = data.length % 65535;
        var out = new Int8Array(2 + 4 + data.length + (blocks * 5 | 0) | 0);
        var upos = 0;
        var pos = 2;
        write8(out, 0, 120);
        write8(out, 1, 1);
        for (var n = 0; n < blocks; n++) {
          var last = n === (blocks - 1 | 0);
          var size = last ? lastBlockSize : 65535;
          write8(out, pos, last ? 1 : 0);
          write16_le(out, pos + 1 | 0, size);
          write16_le(out, pos + 3 | 0, ~size);
          arraycopy_0(data, upos, out, pos + 5 | 0, size);
          pos = pos + (5 + size) | 0;
          upos = upos + size | 0;
        }
        adler32.update_mj6st8$(data, 0, data.length);
        write32_be(out, pos + 0 | 0, adler32.value);
        return out;
      }
       else {
        return KorioNative.SyncCompression.deflate_ir89t6$(data, closure$level);
      }
    };
  }
  function PNG$writeImage$writeChunk_0(closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var buffer = ByteArrayBuffer_init(initialCapacity);
      var s = MemorySyncStream(buffer);
      callback(s);
      return tmp$(name, buffer.toByteArray());
    };
  }
  function PNG$writeImage$writeChunkCompressed(closure$compress, closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var tmp$_0 = closure$compress;
      var buffer = ByteArrayBuffer_init(initialCapacity);
      var s = MemorySyncStream(buffer);
      callback(s);
      return tmp$(name, tmp$_0(buffer.toByteArray()));
    };
  }
  function PNG$writeImage$writeHeader$lambda(closure$width, closure$height, closure$colorspace) {
    return function ($receiver) {
      write32_be_0($receiver, closure$width);
      write32_be_0($receiver, closure$height);
      write8_0($receiver, 8);
      write8_0($receiver, closure$colorspace.id);
      write8_0($receiver, 0);
      write8_0($receiver, 0);
      write8_0($receiver, 0);
      return Unit;
    };
  }
  function PNG$writeImage$writeHeader(closure$width, closure$height, closure$writeChunk) {
    return function (colorspace) {
      closure$writeChunk('IHDR', 13, PNG$writeImage$writeHeader$lambda(closure$width, closure$height, colorspace));
    };
  }
  function PNG$writeImage$lambda(closure$bitmap) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$bitmap.palette;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        write8_0($receiver, RGBA_getInstance().getR_za3lpa$(c));
        write8_0($receiver, RGBA_getInstance().getG_za3lpa$(c));
        write8_0($receiver, RGBA_getInstance().getB_za3lpa$(c));
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_0(closure$bitmap) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$bitmap.palette;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        write8_0($receiver, RGBA_getInstance().getA_za3lpa$(c));
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_1($receiver) {
    return Unit;
  }
  PNG.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0;
    var bitmap = image.mainBitmap;
    var width = bitmap.width;
    var height = bitmap.height;
    write32_be_0(s, this.MAGIC1);
    write32_be_0(s, this.MAGIC2);
    var writeChunk = PNG$writeImage$writeChunk(s);
    var level = numberToInt(convertRangeClamped(props.quality, 0.0, 1.0, 0.0, 9.0));
    var compress = PNG$writeImage$compress(level);
    var writeChunk_0 = PNG$writeImage$writeChunk_0(writeChunk);
    var writeChunkCompressed = PNG$writeImage$writeChunkCompressed(compress, writeChunk);
    var writeHeader = PNG$writeImage$writeHeader(width, height, writeChunk_0);
    if (Kotlin.isType(bitmap, Bitmap8)) {
      writeHeader(PNG$Colorspace$INDEXED_getInstance());
      writeChunk_0('PLTE', bitmap.palette.length * 3 | 0, PNG$writeImage$lambda(bitmap));
      writeChunk_0('tRNS', bitmap.palette.length * 1 | 0, PNG$writeImage$lambda_0(bitmap));
      var out = new Int8Array(height + Kotlin.imul(width, height) | 0);
      var pos = 0;
      for (var y = 0; y < height; y++) {
        write8(out, (tmp$ = pos, pos = tmp$ + 1 | 0, tmp$), 0);
        var index = bitmap.index_vux9f0$(0, y);
        arraycopy_0(bitmap.data, index, out, pos, width);
        pos = pos + width | 0;
      }
      writeChunk('IDAT', compress(out));
    }
     else if (Kotlin.isType(bitmap, Bitmap32)) {
      writeHeader(PNG$Colorspace$RGBA_getInstance());
      var out_0 = new Int8Array(height + (Kotlin.imul(width, height) * 4 | 0) | 0);
      var pos_0 = 0;
      for (var y_0 = 0; y_0 < height; y_0++) {
        write8(out_0, (tmp$_0 = pos_0, pos_0 = tmp$_0 + 1 | 0, tmp$_0), 0);
        var index_0 = bitmap.index_vux9f0$(0, y_0);
        if (bitmap.premult) {
          for (var x = 0; x < width; x++) {
            write32_le(out_0, pos_0, RGBA_getInstance().depremultiplyFast_za3lpa$(bitmap.data[index_0 + x | 0]));
            pos_0 = pos_0 + 4 | 0;
          }
        }
         else {
          for (var x_0 = 0; x_0 < width; x_0++) {
            write32_le(out_0, pos_0, bitmap.data[index_0 + x_0 | 0]);
            pos_0 = pos_0 + 4 | 0;
          }
        }
      }
      writeChunk('IDAT', compress(out_0));
    }
    writeChunk_0('IEND', 0, PNG$writeImage$lambda_1);
  };
  function PNG$readCommon$readChunk(closure$pheader, closure$paletteCount, closure$rgbPalette, closure$aPalette, closure$pngdata) {
    return function ($receiver) {
      var length = readS32_be_0($receiver);
      var type = readStringz($receiver, 4);
      var data = readStream_0($receiver, Kotlin.Long.fromInt(length));
      var crc = readS32_be_0($receiver);
      if (equals(type, 'IHDR')) {
        var tmp$;
        closure$pheader.v = new PNG$Header(readS32_be_0(data), readS32_be_0(data), readU8(data), (tmp$ = PNG$Colorspace$Companion_getInstance().BY_ID.get_11rb$(readU8(data))) != null ? tmp$ : PNG$Colorspace$RGBA_getInstance(), readU8(data), readU8(data), readU8(data));
        var header = ensureNotNull(closure$pheader.v);
      }
       else if (equals(type, 'PLTE')) {
        var tmp$_0 = closure$paletteCount;
        var a = closure$paletteCount.v;
        var b = data.length.toInt() / 3 | 0;
        tmp$_0.v = Math_0.max(a, b);
        data.read_mj6st8$(closure$rgbPalette.data, 0, data.length.toInt());
      }
       else if (equals(type, 'tRNS')) {
        var tmp$_1 = closure$paletteCount;
        var a_0 = closure$paletteCount.v;
        var b_0 = data.length.toInt();
        tmp$_1.v = Math_0.max(a_0, b_0);
        data.read_mj6st8$(closure$aPalette.data, 0, data.length.toInt());
      }
       else if (equals(type, 'IDAT'))
        closure$pngdata.append_fqrh44$(readAll(data));
      else
        equals(type, 'IEND');
    };
  }
  PNG.prototype.readCommon_0 = function (s, readHeader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (readS32_be_0(s) !== this.MAGIC1)
      throw new IllegalArgumentException('Invalid PNG file');
    readS32_be_0(s);
    var pheader = {v: null};
    var pngdata = new ByteArrayBuilder();
    var rgbPalette = UByteArray_init(3 * 256 | 0);
    var array = new Int8Array(256);
    var tmp$_7;
    tmp$_7 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_7; i++) {
      array[i] = -1;
    }
    var aPalette = new UByteArray(array);
    var paletteCount = {v: 0};
    var readChunk = PNG$readCommon$readChunk(pheader, paletteCount, rgbPalette, aPalette, pngdata);
    while (!get_eof(s)) {
      readChunk(s);
      if (readHeader && pheader.v != null)
        return pheader.v;
    }
    tmp$ = pheader.v;
    if (tmp$ == null) {
      throw new IllegalArgumentException('PNG without header!');
    }
    var header = tmp$;
    var width = header.width;
    var height = header.height;
    var datab = new Int8Array(Kotlin.imul(Kotlin.imul(1 + width | 0, height), header.bytes));
    KorioNative.SyncCompression.inflateTo_r9qwmk$(pngdata.toByteArray(), datab);
    var data = openSync(datab);
    var context = new PNG$DecodingContext(header);
    var bpp = context.header.bytes;
    var row32 = context.row32;
    if (header.bytes === 1) {
      var tmp$_8 = void 0;
      var $receiver = until(0, paletteCount.v);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_9;
      tmp$_9 = $receiver.iterator();
      while (tmp$_9.hasNext()) {
        var item = tmp$_9.next();
        var tmp$_10 = destination.add_11rb$;
        var tmp$_11 = RGBA_getInstance();
        var n = (item * 3 | 0) + 0 | 0;
        var tmp$_12 = rgbPalette.data[n] & 255;
        var n_0 = (item * 3 | 0) + 1 | 0;
        var tmp$_13 = rgbPalette.data[n_0] & 255;
        var n_1 = (item * 3 | 0) + 2 | 0;
        tmp$_10.call(destination, tmp$_11.invoke_tjonv8$(tmp$_12, tmp$_13, rgbPalette.data[n_1] & 255, aPalette.data[item] & 255));
      }
      tmp$_0 = new Bitmap8(width, height, tmp$_8, toIntArray(destination));
    }
     else
      tmp$_0 = new Bitmap32(width, height);
    var bmp = tmp$_0;
    var bmp8 = (tmp$_1 = bmp) == null || Kotlin.isType(tmp$_1, Bitmap8) ? tmp$_1 : null;
    var bmp32 = (tmp$_2 = bmp) == null || Kotlin.isType(tmp$_2, Bitmap32) ? tmp$_2 : null;
    if (header.interlacemethod === 1)
      tmp$_3 = this.InterlacedPasses;
    else
      tmp$_3 = this.NormalPasses;
    var passes = tmp$_3;
    tmp$_4 = passes.iterator();
    while (tmp$_4.hasNext()) {
      var pass = tmp$_4.next();
      tmp$_5 = pass.startingRow;
      tmp$_6 = pass.rowIncrement;
      for (var row = tmp$_5; row < height; row += tmp$_6) {
        var col = pass.startingCol;
        var colIncrement = pass.colIncrement;
        var pixelsInThisRow = width >>> pass.colIncrementShift;
        var bytesInThisRow = Kotlin.imul(pixelsInThisRow, header.bytes);
        var filter = readU8(data);
        var currentRow = context.currentRow;
        var lastRow = context.lastRow;
        readExact(data, currentRow.data, 0, bytesInThisRow);
        if (bmp8 != null) {
          this.applyFilter_tzwyxu$(filter, lastRow, currentRow, header.bytes);
          bmp8.setRowChunk_y8lvms$(col, row, currentRow.data, width, colIncrement);
        }
         else if (bmp32 != null) {
          this.applyFilter_tzwyxu$(filter, lastRow, currentRow, bpp, bytesInThisRow);
          if (bpp === 3)
            RGB_getInstance().decode_c0jzf6$(currentRow.data, 0, row32, 0, pixelsInThisRow);
          else if (bpp === 4)
            RGBA_getInstance().decode_c0jzf6$(currentRow.data, 0, row32, 0, pixelsInThisRow);
          else {
            throw new NotImplementedError_init('An operation is not implemented: ' + ('Bytes: ' + bpp));
          }
          bmp32.setRowChunk_ydkzvt$(col, row, row32, width, colIncrement);
        }
        context.swapRows();
      }
    }
    return bmp;
  };
  function PNG$DecodingContext(header) {
    this.header = header;
    this.lastRow = UByteArray_init(this.header.stride);
    this.currentRow = UByteArray_init(this.header.stride);
    this.row32 = new Int32Array(this.header.width);
  }
  PNG$DecodingContext.prototype.swapRows = function () {
    var temp = this.currentRow;
    this.currentRow = this.lastRow;
    this.lastRow = temp;
  };
  PNG$DecodingContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecodingContext',
    interfaces: []
  };
  PNG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    return new ImageData(listOf(new ImageFrame(Kotlin.isType(tmp$ = this.readCommon_0(s, false), Bitmap) ? tmp$ : throwCCE())));
  };
  PNG.prototype.paethPredictor_qt1dr2$ = function (a, b, c) {
    var p = a + b - c | 0;
    var pa = abs(p - a | 0);
    var pb = abs(p - b | 0);
    var pc = abs(p - c | 0);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  PNG.prototype.applyFilter_tzwyxu$ = function (filter, p, c, bpp, size) {
    if (size === void 0)
      size = c.size;
    if (filter !== 0)
      if (filter === 1) {
        for (var n = bpp; n < size; n++) {
          var tmp$ = c.data[n] & 255;
          var n_0 = n - bpp | 0;
          var v = tmp$ + (c.data[n_0] & 255) | 0;
          c.data[n] = toByte(v);
        }
      }
       else if (filter === 2) {
        for (var n_1 = 0; n_1 < size; n_1++) {
          var v_0 = (c.data[n_1] & 255) + (p.data[n_1] & 255) | 0;
          c.data[n_1] = toByte(v_0);
        }
      }
       else if (filter === 3) {
        for (var n_2 = 0; n_2 < bpp; n_2++) {
          var v_1 = (c.data[n_2] & 255) + ((p.data[n_2] & 255) / 2 | 0) | 0;
          c.data[n_2] = toByte(v_1);
        }
        for (var n_3 = bpp; n_3 < size; n_3++) {
          var tmp$_0 = c.data[n_3] & 255;
          var n_4 = n_3 - bpp | 0;
          var v_2 = tmp$_0 + (((c.data[n_4] & 255) + (p.data[n_3] & 255) | 0) / 2 | 0) | 0;
          c.data[n_3] = toByte(v_2);
        }
      }
       else if (filter === 4) {
        for (var n_5 = 0; n_5 < bpp; n_5++) {
          var v_3 = (c.data[n_5] & 255) + (p.data[n_5] & 255) | 0;
          c.data[n_5] = toByte(v_3);
        }
        for (var n_6 = bpp; n_6 < size; n_6++) {
          var tmp$_1 = c.data[n_6] & 255;
          var tmp$_2 = this.paethPredictor_qt1dr2$;
          var n_7 = n_6 - bpp | 0;
          var tmp$_3 = c.data[n_7] & 255;
          var tmp$_4 = p.data[n_6] & 255;
          var n_8 = n_6 - bpp | 0;
          var v_4 = tmp$_1 + tmp$_2.call(this, tmp$_3, tmp$_4, p.data[n_8] & 255) | 0;
          c.data[n_6] = toByte(v_4);
        }
      }
       else {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Filter: ' + filter));
      }
  };
  PNG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PNG',
    interfaces: [ImageFormat]
  };
  var PNG_instance = null;
  function PNG_getInstance() {
    if (PNG_instance === null) {
      new PNG();
    }
    return PNG_instance;
  }
  function Adler32() {
    Adler32$Companion_getInstance();
    this.s1_0 = 1;
    this.s2_0 = 0;
  }
  Object.defineProperty(Adler32.prototype, 'value', {
    get: function () {
      return this.s2_0 << 16 | this.s1_0;
    }
  });
  Adler32.prototype.reset_za3lpa$ = function (init) {
    this.s1_0 = init >> 0 & 65535;
    this.s2_0 = init >> 16 & 65535;
  };
  Adler32.prototype.reset = function () {
    this.s1_0 = 1;
    this.s2_0 = 0;
  };
  Adler32.prototype.update_mj6st8$ = function (buf, index, len) {
    var tmp$, tmp$_0, tmp$_1;
    var index_0 = index;
    var len_0 = len;
    if (len_0 === 1) {
      var tmp$_2;
      this.s1_0 = this.s1_0 + (buf[tmp$_2 = index_0, index_0 = tmp$_2 + 1 | 0, tmp$_2] & 255) | 0;
      this.s2_0 = this.s2_0 + this.s1_0 | 0;
      this.s1_0 = this.s1_0 % Adler32$Companion_getInstance().BASE_0;
      this.s2_0 = this.s2_0 % Adler32$Companion_getInstance().BASE_0;
      return;
    }
    var len1 = len_0 / Adler32$Companion_getInstance().NMAX_0 | 0;
    var len2 = len_0 % Adler32$Companion_getInstance().NMAX_0;
    while ((tmp$ = len1, len1 = tmp$ - 1 | 0, tmp$) > 0) {
      var k = Adler32$Companion_getInstance().NMAX_0;
      len_0 = len_0 - k | 0;
      while ((tmp$_0 = k, k = tmp$_0 - 1 | 0, tmp$_0) > 0) {
        var tmp$_3;
        this.s1_0 = this.s1_0 + (buf[tmp$_3 = index_0, index_0 = tmp$_3 + 1 | 0, tmp$_3] & 255) | 0;
        this.s2_0 = this.s2_0 + this.s1_0 | 0;
      }
      this.s1_0 = this.s1_0 % Adler32$Companion_getInstance().BASE_0;
      this.s2_0 = this.s2_0 % Adler32$Companion_getInstance().BASE_0;
    }
    var k_0 = len2;
    len_0 = len_0 - k_0 | 0;
    while ((tmp$_1 = k_0, k_0 = tmp$_1 - 1 | 0, tmp$_1) > 0) {
      var tmp$_4;
      this.s1_0 = this.s1_0 + (buf[tmp$_4 = index_0, index_0 = tmp$_4 + 1 | 0, tmp$_4] & 255) | 0;
      this.s2_0 = this.s2_0 + this.s1_0 | 0;
    }
    this.s1_0 = this.s1_0 % Adler32$Companion_getInstance().BASE_0;
    this.s2_0 = this.s2_0 % Adler32$Companion_getInstance().BASE_0;
  };
  Adler32.prototype.copy = function () {
    var foo = new Adler32();
    foo.s1_0 = this.s1_0;
    foo.s2_0 = this.s2_0;
    return foo;
  };
  function Adler32$Companion() {
    Adler32$Companion_instance = this;
    this.BASE_0 = 65521;
    this.NMAX_0 = 5552;
  }
  Adler32$Companion.prototype.combine_e84ct6$ = function (adler1, adler2, len2) {
    var BASEL = Kotlin.Long.fromInt(65521);
    var rem = len2.modulo(Kotlin.Long.fromInt(65521));
    var sum1 = adler1.and(Kotlin.Long.fromInt(65535));
    var sum2 = rem.multiply(sum1);
    sum2 = sum2.modulo(Kotlin.Long.fromInt(65521));
    sum1 = sum1.add(adler2.and(Kotlin.Long.fromInt(65535)).add(Kotlin.Long.fromInt(65521)).subtract(Kotlin.Long.fromInt(1)));
    sum2 = sum2.add(adler1.shiftRight(16).and(Kotlin.Long.fromInt(65535)).add(adler2.shiftRight(16).and(Kotlin.Long.fromInt(65535))).add(Kotlin.Long.fromInt(65521)).subtract(rem));
    if (sum1.compareTo_11rb$(Kotlin.Long.fromInt(65521)) >= 0)
      sum1 = sum1.subtract(Kotlin.Long.fromInt(65521));
    if (sum1.compareTo_11rb$(Kotlin.Long.fromInt(65521)) >= 0)
      sum1 = sum1.subtract(Kotlin.Long.fromInt(65521));
    if (sum2.compareTo_11rb$(Kotlin.Long.fromInt(131042)) >= 0)
      sum2 = sum2.subtract(Kotlin.Long.fromInt(131042));
    if (sum2.compareTo_11rb$(Kotlin.Long.fromInt(65521)) >= 0)
      sum2 = sum2.subtract(Kotlin.Long.fromInt(65521));
    return sum1.or(sum2.shiftLeft(16));
  };
  Adler32$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Adler32$Companion_instance = null;
  function Adler32$Companion_getInstance() {
    if (Adler32$Companion_instance === null) {
      new Adler32$Companion();
    }
    return Adler32$Companion_instance;
  }
  Adler32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Adler32',
    interfaces: []
  };
  function CRC32() {
    CRC32$Companion_getInstance();
    this.v_0 = 0;
  }
  Object.defineProperty(CRC32.prototype, 'value', {
    get: function () {
      return this.v_0;
    }
  });
  CRC32.prototype.update_mj6st8$ = function (buf, index, len) {
    if (index === void 0)
      index = 0;
    if (len === void 0)
      len = buf.length - index | 0;
    var tmp$;
    var index_0 = index;
    var len_0 = len;
    var c = ~this.v_0;
    while ((len_0 = len_0 - 1 | 0, len_0) >= 0) {
      c = ensureNotNull(CRC32$Companion_getInstance().crc_table_0)[(c ^ buf[tmp$ = index_0, index_0 = tmp$ + 1 | 0, tmp$]) & 255] ^ c >>> 8;
    }
    this.v_0 = ~c;
  };
  CRC32.prototype.reset = function () {
    this.v_0 = 0;
  };
  CRC32.prototype.reset_za3lpa$ = function (vv) {
    this.v_0 = vv;
  };
  CRC32.prototype.copy = function () {
    var foo = new CRC32();
    foo.v_0 = this.v_0;
    return foo;
  };
  function CRC32$Companion() {
    CRC32$Companion_instance = this;
    this.crc_table_0 = new Int32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      var k = 8;
      while ((k = k - 1 | 0, k) >= 0) {
        if ((c & 1) !== 0) {
          c = -306674912 ^ c >>> 1;
        }
         else {
          c = c >>> 1;
        }
      }
      this.crc_table_0[n] = c;
    }
    this.GF2_DIM_0 = 32;
  }
  CRC32$Companion.prototype.combine_e84ct6$ = function (crc1, crc2, len2) {
    var tmp$;
    var crc1_0 = crc1;
    var len2_0 = len2;
    var row;
    var even = Kotlin.longArray(this.GF2_DIM_0);
    var odd = Kotlin.longArray(this.GF2_DIM_0);
    if (len2_0.compareTo_11rb$(Kotlin.Long.fromInt(0)) <= 0)
      return crc1_0;
    odd[0] = new Kotlin.Long(-306674912, 0);
    row = Kotlin.Long.ONE;
    tmp$ = this.GF2_DIM_0;
    for (var n = 1; n < tmp$; n++) {
      odd[n] = row;
      row = row.shiftLeft(1);
    }
    this.gf2_matrix_square_fua24x$(even, odd);
    this.gf2_matrix_square_fua24x$(odd, even);
    do {
      this.gf2_matrix_square_fua24x$(even, odd);
      if (!equals(len2_0.and(Kotlin.Long.ONE), Kotlin.Long.ZERO))
        crc1_0 = this.gf2_matrix_times_0(even, crc1_0);
      len2_0 = len2_0.shiftRight(1);
      if (equals(len2_0, Kotlin.Long.ZERO))
        break;
      this.gf2_matrix_square_fua24x$(odd, even);
      if (!equals(len2_0.and(Kotlin.Long.ONE), Kotlin.Long.ZERO))
        crc1_0 = this.gf2_matrix_times_0(odd, crc1_0);
      len2_0 = len2_0.shiftRight(1);
    }
     while (!equals(len2_0, Kotlin.Long.ZERO));
    crc1_0 = crc1_0.xor(crc2);
    return crc1_0;
  };
  CRC32$Companion.prototype.gf2_matrix_times_0 = function (mat, vec) {
    var vec_0 = vec;
    var sum = Kotlin.Long.ZERO;
    var index = 0;
    while (!equals(vec_0, Kotlin.Long.ZERO)) {
      if (!equals(vec_0.and(Kotlin.Long.ONE), Kotlin.Long.ZERO))
        sum = sum.xor(mat[index]);
      vec_0 = vec_0.shiftRight(1);
      index = index + 1 | 0;
    }
    return sum;
  };
  CRC32$Companion.prototype.gf2_matrix_square_fua24x$ = function (square, mat) {
    var tmp$;
    tmp$ = this.GF2_DIM_0;
    for (var n = 0; n < tmp$; n++)
      square[n] = this.gf2_matrix_times_0(mat, mat[n]);
  };
  Object.defineProperty(CRC32$Companion.prototype, 'crC32Table', {
    get: function () {
      var tmp = new Int32Array(this.crc_table_0.length);
      arraycopy(this.crc_table_0, 0, tmp, 0, tmp.length);
      return tmp;
    }
  });
  CRC32$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CRC32$Companion_instance = null;
  function CRC32$Companion_getInstance() {
    if (CRC32$Companion_instance === null) {
      new CRC32$Companion();
    }
    return CRC32$Companion_instance;
  }
  CRC32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CRC32',
    interfaces: []
  };
  function PSD() {
    PSD_instance = this;
    ImageFormat.call(this, ['psd']);
  }
  PSD.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var header = (tmp$ = this.decodeHeader_1ooaqm$(s, props)) != null ? tmp$ : invalidOp('Not a PSD file');
    var colorMode = readStream(s, readS32_be_0(s));
    var imageResources = readStream(s, readS32_be_0(s));
    var layerAndMask = readStream(s, readS32_be_0(s));
    var imageData = this.readImageData_0(openFastStream(readAvailable(s)), header);
    return new ImageData(listOf(new ImageFrame(imageData)));
  };
  PSD.prototype.packChannels_0 = function (width, height, channels) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var pos = 0;
    var out = new Bitmap32(width, height);
    var array = new Int8Array(Kotlin.imul(width, height));
    var tmp$_3;
    tmp$_3 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_3; i++) {
      array[i] = -1;
    }
    var dummyChannel = array;
    var rchannel = (tmp$ = getOrNull_0(channels, 0)) != null ? tmp$ : dummyChannel;
    var gchannel = (tmp$_0 = getOrNull_0(channels, 1)) != null ? tmp$_0 : dummyChannel;
    var bchannel = (tmp$_1 = getOrNull_0(channels, 2)) != null ? tmp$_1 : dummyChannel;
    var achannel = (tmp$_2 = getOrNull_0(channels, 3)) != null ? tmp$_2 : dummyChannel;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var r = toUnsigned_0(rchannel[pos]);
        var g = toUnsigned_0(gchannel[pos]);
        var b = toUnsigned_0(bchannel[pos]);
        var a = toUnsigned_0(achannel[pos]);
        out.data[pos] = RGBA_getInstance().pack_tjonv8$(r, g, b, a);
        pos = pos + 1 | 0;
      }
    }
    return out;
  };
  PSD.prototype.readImageData_0 = function ($receiver, header) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var compressionMethod = $receiver.readU16_be();
    var width = header.width;
    var height = header.height;
    var cchannels = header.channels;
    var array = Array_0(cchannels);
    var tmp$_4;
    tmp$_4 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_4; i++) {
      array[i] = new Int8Array(Kotlin.imul(width, height));
    }
    var channels = array;
    if (compressionMethod === 0) {
      for (var n = 0; n < cchannels; n++) {
        channels[n] = $receiver.readBytes_za3lpa$(Kotlin.imul(width, height));
      }
    }
     else if (compressionMethod === 1) {
      var $receiver_0 = until(0, cchannels);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_5;
      tmp$_5 = $receiver_0.iterator();
      while (tmp$_5.hasNext()) {
        var item = tmp$_5.next();
        destination.add_11rb$($receiver.readShortArray_be_za3lpa$(height));
      }
      var sizes = destination;
      for (var cindex = 0; cindex < cchannels; cindex++) {
        var carray = channels[cindex];
        var cpos = 0;
        tmp$ = sizes.get_za3lpa$(cindex);
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var size = tmp$[tmp$_0];
          var end = $receiver.offset + size;
          while ($receiver.offset < end) {
            var len = $receiver.readU8();
            if (len >= 128) {
              var byte = $receiver.readU8();
              tmp$_1 = 256 - len | 0;
              for (var j = 0; j <= tmp$_1; j++) {
                carray[tmp$_2 = cpos, cpos = tmp$_2 + 1 | 0, tmp$_2] = toByte(byte);
              }
            }
             else {
              for (var j_0 = 0; j_0 <= len; j_0++) {
                carray[tmp$_3 = cpos, cpos = tmp$_3 + 1 | 0, tmp$_3] = toByte($receiver.readU8());
              }
            }
          }
        }
      }
    }
     else
      invalidOp('Unsupported compression method ' + compressionMethod);
    return this.packChannels_0(width, height, channels);
  };
  function PSD$PsdImageInfo() {
    ImageInfo.call(this);
    this.channels = 0;
    this.bitsPerChannel = 0;
    this.colorMode = 0;
  }
  PSD$PsdImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PsdImageInfo',
    interfaces: [ImageInfo]
  };
  PSD.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readStringz(s, 4), '8BPS'))
      return null;
    var version = readU16_be_0(s);
    if (version !== 1)
      if (version === 2)
        return null;
      else
        return null;
    var reserved = readBytes(s, 6);
    var channels = readU16_be_0(s);
    var height = readS32_be_0(s);
    var width = readS32_be_0(s);
    var bitsPerChannel = readU16_be_0(s);
    var colorMode = readU16_be_0(s);
    var $receiver = new PSD$PsdImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = Kotlin.imul(bitsPerChannel, channels);
    $receiver.channels = channels;
    $receiver.bitsPerChannel = bitsPerChannel;
    $receiver.colorMode = colorMode;
    return $receiver;
  };
  PSD.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PSD',
    interfaces: [ImageFormat]
  };
  var PSD_instance = null;
  function PSD_getInstance() {
    if (PSD_instance === null) {
      new PSD();
    }
    return PSD_instance;
  }
  function SVG() {
    SVG_instance = this;
    ImageFormat.call(this, ['svg']);
  }
  var trim_0 = Kotlin.kotlin.text.trim_gw00vp$;
  SVG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$ = slice(s);
    var b = s.length.toInt();
    var $receiver = readString(tmp$, Math_0.min(100, b));
    var tmp$_0;
    var start = trim_0(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString().toLowerCase();
    try {
      if (startsWith(start, '<svg') || startsWith(start, '<?xml')) {
        var $receiver_0 = toString_0(readAll(slice(s)), lang.Charsets.UTF_8);
        var tmp$_1;
        var content = trim_0(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString();
        var svg = SVG_init(content);
        var $receiver_1 = new ImageInfo();
        $receiver_1.width = svg.width;
        $receiver_1.height = svg.height;
        return $receiver_1;
      }
       else {
        return null;
      }
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  SVG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var $receiver = toString_0(readAll(slice(s)), lang.Charsets.UTF_8);
    var tmp$;
    var content = trim_0(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    var svg = SVG_init(content);
    return new ImageData(listOf(new ImageFrame(render_0(svg).toBmp32())));
  };
  SVG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SVG',
    interfaces: [ImageFormat]
  };
  var SVG_instance = null;
  function SVG_getInstance() {
    if (SVG_instance === null) {
      new SVG();
    }
    return SVG_instance;
  }
  var StandardImageFormats;
  function registerStandard($receiver) {
    $receiver.register_ld8ot4$(StandardImageFormats);
    return $receiver;
  }
  function TGA() {
    TGA_instance = this;
    ImageFormat.call(this, ['tga']);
  }
  TGA.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    try {
      var h = this.readHeader_39qel5$(s);
      var $receiver = new ImageInfo();
      $receiver.width = h.width;
      $receiver.height = h.height;
      $receiver.bitsPerPixel = h.bitsPerPixel;
      return $receiver;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  function TGA$Info(width, height, flipY, bitsPerPixel) {
    this.width = width;
    this.height = height;
    this.flipY = flipY;
    this.bitsPerPixel = bitsPerPixel;
    this.area = Kotlin.imul(this.width, this.height);
    this.bytes = this.bitsPerPixel / 8 | 0;
  }
  TGA$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  TGA.prototype.readHeader_39qel5$ = function (s) {
    var idLength = readU8(s);
    var colorMapType = readU8(s);
    var imageType = readU8(s);
    if (imageType === 1) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported indexed');
    }
     else if (imageType !== 2)
      if (imageType === 9 || imageType === 10) {
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported RLE');
      }
       else {
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unknown TGA');
      }
    var firstIndexEntry = readU16_le_0(s);
    var colorMapLength = readU16_le_0(s);
    var colorMapEntrySize = readU8(s);
    s.position = s.position.add(Kotlin.Long.fromInt(Kotlin.imul(colorMapLength, colorMapEntrySize)));
    var xorig = readS16_le(s);
    var yorig = readS16_le(s);
    var width = readS16_le(s);
    var height = readS16_le(s);
    var pixelDepth = readU8(s);
    if (pixelDepth !== 24 && pixelDepth !== 32) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var imageDescriptor = readU8(s);
    var flipY = (imageDescriptor >>> 5 & 1) === 0;
    var storage = imageDescriptor >>> 6 & 3;
    readBytes(s, idLength);
    return new TGA$Info(width, height, flipY, pixelDepth);
  };
  TGA.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var info = this.readHeader_39qel5$(s);
    tmp$ = info.bitsPerPixel;
    if (tmp$ === 24)
      tmp$_0 = RGB_getInstance();
    else if (tmp$ === 32)
      tmp$_0 = RGBA_getInstance();
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var format = tmp$_0;
    var out = (new Bitmap32(info.width, info.height)).writeDecoded_77vltg$(format, readBytes(s, Kotlin.imul(info.area, info.bytes)));
    if (info.flipY)
      out.flipY();
    return new ImageData(listOf(new ImageFrame(out)));
  };
  TGA.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var bitmap = image.mainBitmap;
    if (Kotlin.isType(bitmap, Bitmap8)) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented encoding TGA Bitmap8');
    }
     else if (Kotlin.isType(bitmap, Bitmap32)) {
      var data = new Int8Array(bitmap.area * 4 | 0);
      var m = 0;
      tmp$ = bitmap.data;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        data[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = toByte(RGBA_getInstance().getB_za3lpa$(c));
        data[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = toByte(RGBA_getInstance().getG_za3lpa$(c));
        data[tmp$_3 = m, m = tmp$_3 + 1 | 0, tmp$_3] = toByte(RGBA_getInstance().getR_za3lpa$(c));
        data[tmp$_4 = m, m = tmp$_4 + 1 | 0, tmp$_4] = toByte(RGBA_getInstance().getA_za3lpa$(c));
      }
      write8_0(s, 0);
      write8_0(s, 0);
      write8_0(s, 2);
      write16_le_0(s, 0);
      write16_le_0(s, 0);
      write8_0(s, 0);
      write16_le_0(s, 0);
      write16_le_0(s, 0);
      write16_le_0(s, bitmap.width);
      write16_le_0(s, bitmap.height);
      write8_0(s, 32);
      write8_0(s, 1 << 5);
      writeBytes(s, data);
    }
  };
  TGA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TGA',
    interfaces: [ImageFormat]
  };
  var TGA_instance = null;
  function TGA_getInstance() {
    if (TGA_instance === null) {
      new TGA();
    }
    return TGA_instance;
  }
  function render($receiver) {
    var tmp$;
    var colors = listOf_0([Colors_getInstance().RED, Colors_getInstance().GREEN, Colors_getInstance().BLUE, Colors_getInstance().BLACK]);
    var bounds_0 = bounds($receiver);
    var out = new Bitmap32(numberToInt(bounds_0.width), numberToInt(bounds_0.height));
    tmp$ = withIndex_0($receiver).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var index = tmp$_0.component1()
      , r = tmp$_0.component2();
      var color = colors.get_za3lpa$(index % colors.size);
      out.fill_4qozqa$(color, numberToInt(r.x), numberToInt(r.y), numberToInt(r.width), numberToInt(r.height));
    }
    return out;
  }
  function Bitmap32Context2d(bmp) {
    Context2d$Renderer.call(this);
    this.bmp = bmp;
  }
  Object.defineProperty(Bitmap32Context2d.prototype, 'width', {
    get: function () {
      return this.bmp.width;
    }
  });
  Object.defineProperty(Bitmap32Context2d.prototype, 'height', {
    get: function () {
      return this.bmp.height;
    }
  });
  Bitmap32Context2d.prototype.render_w64o9o$ = function (state, fill) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented context2d on Bitmap32, please use NativeImage instead');
  };
  Bitmap32Context2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap32Context2d',
    interfaces: [Context2d$Renderer]
  };
  var RedirectMutableFieldGen_init = $module$korio_js.com.soywiz.korio.util.RedirectMutableFieldGen;
  function Context2d(renderer) {
    this.renderer = renderer;
    this.state = new Context2d$State();
    this.stack_0 = LinkedList_init();
    this.lineScaleMode_uvt0g7$_0 = new RedirectMutableFieldGen_init(Context2d$lineScaleMode$lambda(this));
    this.lineWidth_eizzma$_0 = new RedirectMutableFieldGen_init(Context2d$lineWidth$lambda(this));
    this.lineCap_3v9p9a$_0 = new RedirectMutableFieldGen_init(Context2d$lineCap$lambda(this));
    this.strokeStyle_b8jfmh$_0 = new RedirectMutableFieldGen_init(Context2d$strokeStyle$lambda(this));
    this.fillStyle_mocpqm$_0 = new RedirectMutableFieldGen_init(Context2d$fillStyle$lambda(this));
    this.font_hw4l97$_0 = new RedirectMutableFieldGen_init(Context2d$font$lambda(this));
    this.verticalAlign_9mcoep$_0 = new RedirectMutableFieldGen_init(Context2d$verticalAlign$lambda(this));
    this.horizontalAlign_o0d4qn$_0 = new RedirectMutableFieldGen_init(Context2d$horizontalAlign$lambda(this));
    this.globalAlpha_l2yrp7$_0 = new RedirectMutableFieldGen_init(Context2d$globalAlpha$lambda(this));
    this.none = Context2d$None_getInstance();
  }
  Object.defineProperty(Context2d.prototype, 'width', {
    get: function () {
      return this.renderer.width;
    }
  });
  Object.defineProperty(Context2d.prototype, 'height', {
    get: function () {
      return this.renderer.height;
    }
  });
  function Context2d$LineCap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$LineCap_initFields() {
    Context2d$LineCap_initFields = function () {
    };
    Context2d$LineCap$BUTT_instance = new Context2d$LineCap('BUTT', 0);
    Context2d$LineCap$ROUND_instance = new Context2d$LineCap('ROUND', 1);
    Context2d$LineCap$SQUARE_instance = new Context2d$LineCap('SQUARE', 2);
  }
  var Context2d$LineCap$BUTT_instance;
  function Context2d$LineCap$BUTT_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$BUTT_instance;
  }
  var Context2d$LineCap$ROUND_instance;
  function Context2d$LineCap$ROUND_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$ROUND_instance;
  }
  var Context2d$LineCap$SQUARE_instance;
  function Context2d$LineCap$SQUARE_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$SQUARE_instance;
  }
  Context2d$LineCap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineCap',
    interfaces: [Enum]
  };
  function Context2d$LineCap$values() {
    return [Context2d$LineCap$BUTT_getInstance(), Context2d$LineCap$ROUND_getInstance(), Context2d$LineCap$SQUARE_getInstance()];
  }
  Context2d$LineCap.values = Context2d$LineCap$values;
  function Context2d$LineCap$valueOf(name) {
    switch (name) {
      case 'BUTT':
        return Context2d$LineCap$BUTT_getInstance();
      case 'ROUND':
        return Context2d$LineCap$ROUND_getInstance();
      case 'SQUARE':
        return Context2d$LineCap$SQUARE_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.LineCap.' + name);
    }
  }
  Context2d$LineCap.valueOf_61zpoe$ = Context2d$LineCap$valueOf;
  function Context2d$LineJoin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$LineJoin_initFields() {
    Context2d$LineJoin_initFields = function () {
    };
    Context2d$LineJoin$BEVEL_instance = new Context2d$LineJoin('BEVEL', 0);
    Context2d$LineJoin$MITER_instance = new Context2d$LineJoin('MITER', 1);
    Context2d$LineJoin$ROUND_instance = new Context2d$LineJoin('ROUND', 2);
  }
  var Context2d$LineJoin$BEVEL_instance;
  function Context2d$LineJoin$BEVEL_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$BEVEL_instance;
  }
  var Context2d$LineJoin$MITER_instance;
  function Context2d$LineJoin$MITER_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$MITER_instance;
  }
  var Context2d$LineJoin$ROUND_instance;
  function Context2d$LineJoin$ROUND_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$ROUND_instance;
  }
  Context2d$LineJoin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineJoin',
    interfaces: [Enum]
  };
  function Context2d$LineJoin$values() {
    return [Context2d$LineJoin$BEVEL_getInstance(), Context2d$LineJoin$MITER_getInstance(), Context2d$LineJoin$ROUND_getInstance()];
  }
  Context2d$LineJoin.values = Context2d$LineJoin$values;
  function Context2d$LineJoin$valueOf(name) {
    switch (name) {
      case 'BEVEL':
        return Context2d$LineJoin$BEVEL_getInstance();
      case 'MITER':
        return Context2d$LineJoin$MITER_getInstance();
      case 'ROUND':
        return Context2d$LineJoin$ROUND_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.LineJoin.' + name);
    }
  }
  Context2d$LineJoin.valueOf_61zpoe$ = Context2d$LineJoin$valueOf;
  function Context2d$CycleMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$CycleMethod_initFields() {
    Context2d$CycleMethod_initFields = function () {
    };
    Context2d$CycleMethod$NO_CYCLE_instance = new Context2d$CycleMethod('NO_CYCLE', 0);
    Context2d$CycleMethod$REFLECT_instance = new Context2d$CycleMethod('REFLECT', 1);
    Context2d$CycleMethod$REPEAT_instance = new Context2d$CycleMethod('REPEAT', 2);
  }
  var Context2d$CycleMethod$NO_CYCLE_instance;
  function Context2d$CycleMethod$NO_CYCLE_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$NO_CYCLE_instance;
  }
  var Context2d$CycleMethod$REFLECT_instance;
  function Context2d$CycleMethod$REFLECT_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$REFLECT_instance;
  }
  var Context2d$CycleMethod$REPEAT_instance;
  function Context2d$CycleMethod$REPEAT_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$REPEAT_instance;
  }
  Context2d$CycleMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CycleMethod',
    interfaces: [Enum]
  };
  function Context2d$CycleMethod$values() {
    return [Context2d$CycleMethod$NO_CYCLE_getInstance(), Context2d$CycleMethod$REFLECT_getInstance(), Context2d$CycleMethod$REPEAT_getInstance()];
  }
  Context2d$CycleMethod.values = Context2d$CycleMethod$values;
  function Context2d$CycleMethod$valueOf(name) {
    switch (name) {
      case 'NO_CYCLE':
        return Context2d$CycleMethod$NO_CYCLE_getInstance();
      case 'REFLECT':
        return Context2d$CycleMethod$REFLECT_getInstance();
      case 'REPEAT':
        return Context2d$CycleMethod$REPEAT_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.CycleMethod.' + name);
    }
  }
  Context2d$CycleMethod.valueOf_61zpoe$ = Context2d$CycleMethod$valueOf;
  function Context2d$ShapeRasterizerMethod(name, ordinal, scale) {
    Enum.call(this);
    this.scale = scale;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$ShapeRasterizerMethod_initFields() {
    Context2d$ShapeRasterizerMethod_initFields = function () {
    };
    Context2d$ShapeRasterizerMethod$NONE_instance = new Context2d$ShapeRasterizerMethod('NONE', 0, 0.0);
    Context2d$ShapeRasterizerMethod$X1_instance = new Context2d$ShapeRasterizerMethod('X1', 1, 1.0);
    Context2d$ShapeRasterizerMethod$X2_instance = new Context2d$ShapeRasterizerMethod('X2', 2, 2.0);
    Context2d$ShapeRasterizerMethod$X4_instance = new Context2d$ShapeRasterizerMethod('X4', 3, 4.0);
  }
  var Context2d$ShapeRasterizerMethod$NONE_instance;
  function Context2d$ShapeRasterizerMethod$NONE_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$NONE_instance;
  }
  var Context2d$ShapeRasterizerMethod$X1_instance;
  function Context2d$ShapeRasterizerMethod$X1_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X1_instance;
  }
  var Context2d$ShapeRasterizerMethod$X2_instance;
  function Context2d$ShapeRasterizerMethod$X2_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X2_instance;
  }
  var Context2d$ShapeRasterizerMethod$X4_instance;
  function Context2d$ShapeRasterizerMethod$X4_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X4_instance;
  }
  Context2d$ShapeRasterizerMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeRasterizerMethod',
    interfaces: [Enum]
  };
  function Context2d$ShapeRasterizerMethod$values() {
    return [Context2d$ShapeRasterizerMethod$NONE_getInstance(), Context2d$ShapeRasterizerMethod$X1_getInstance(), Context2d$ShapeRasterizerMethod$X2_getInstance(), Context2d$ShapeRasterizerMethod$X4_getInstance()];
  }
  Context2d$ShapeRasterizerMethod.values = Context2d$ShapeRasterizerMethod$values;
  function Context2d$ShapeRasterizerMethod$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Context2d$ShapeRasterizerMethod$NONE_getInstance();
      case 'X1':
        return Context2d$ShapeRasterizerMethod$X1_getInstance();
      case 'X2':
        return Context2d$ShapeRasterizerMethod$X2_getInstance();
      case 'X4':
        return Context2d$ShapeRasterizerMethod$X4_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.ShapeRasterizerMethod.' + name);
    }
  }
  Context2d$ShapeRasterizerMethod.valueOf_61zpoe$ = Context2d$ShapeRasterizerMethod$valueOf;
  function Context2d$Renderer() {
    Context2d$Renderer$Companion_getInstance();
  }
  function Context2d$Renderer$Companion() {
    Context2d$Renderer$Companion_instance = this;
    this.DUMMY = new Context2d$Renderer$Companion$DUMMY$ObjectLiteral();
  }
  function Context2d$Renderer$Companion$DUMMY$ObjectLiteral() {
    Context2d$Renderer.call(this);
    this.width_uh5bgs$_0 = 128;
    this.height_cguacb$_0 = 128;
  }
  Object.defineProperty(Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_uh5bgs$_0;
    }
  });
  Object.defineProperty(Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_cguacb$_0;
    }
  });
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$Renderer]
  };
  Context2d$Renderer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Context2d$Renderer$Companion_instance = null;
  function Context2d$Renderer$Companion_getInstance() {
    if (Context2d$Renderer$Companion_instance === null) {
      new Context2d$Renderer$Companion();
    }
    return Context2d$Renderer$Companion_instance;
  }
  Context2d$Renderer.prototype.render_w64o9o$ = function (state, fill) {
  };
  Context2d$Renderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
  };
  Context2d$Renderer.prototype.getBounds_qlucl1$ = function (font, text, out) {
    out.bounds.setTo_6y0v78$(0.0, 0.0, 0.0, 0.0);
  };
  Context2d$Renderer.prototype.drawImage_4amb17$$default = function (image, x, y, width, height, transform) {
  };
  Context2d$Renderer.prototype.drawImage_4amb17$ = function (image, x, y, width, height, transform, callback$default) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    if (transform === void 0)
      transform = new Matrix2d();
    callback$default ? callback$default(image, x, y, width, height, transform) : this.drawImage_4amb17$$default(image, x, y, width, height, transform);
  };
  Context2d$Renderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Renderer',
    interfaces: []
  };
  function Context2d$VerticalAlign(name, ordinal, ratio) {
    Enum.call(this);
    this.ratio = ratio;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$VerticalAlign_initFields() {
    Context2d$VerticalAlign_initFields = function () {
    };
    Context2d$VerticalAlign$TOP_instance = new Context2d$VerticalAlign('TOP', 0, 0.0);
    Context2d$VerticalAlign$MIDLE_instance = new Context2d$VerticalAlign('MIDLE', 1, 0.5);
    Context2d$VerticalAlign$BASELINE_instance = new Context2d$VerticalAlign('BASELINE', 2, 1.0);
    Context2d$VerticalAlign$BOTTOM_instance = new Context2d$VerticalAlign('BOTTOM', 3, 1.0);
  }
  var Context2d$VerticalAlign$TOP_instance;
  function Context2d$VerticalAlign$TOP_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$TOP_instance;
  }
  var Context2d$VerticalAlign$MIDLE_instance;
  function Context2d$VerticalAlign$MIDLE_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$MIDLE_instance;
  }
  var Context2d$VerticalAlign$BASELINE_instance;
  function Context2d$VerticalAlign$BASELINE_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$BASELINE_instance;
  }
  var Context2d$VerticalAlign$BOTTOM_instance;
  function Context2d$VerticalAlign$BOTTOM_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$BOTTOM_instance;
  }
  Context2d$VerticalAlign.prototype.getOffsetY_lu1900$ = function (height, baseline) {
    if (equals(this, Context2d$VerticalAlign$BASELINE_getInstance()))
      return baseline;
    else
      return height * this.ratio;
  };
  Context2d$VerticalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalAlign',
    interfaces: [Enum]
  };
  function Context2d$VerticalAlign$values() {
    return [Context2d$VerticalAlign$TOP_getInstance(), Context2d$VerticalAlign$MIDLE_getInstance(), Context2d$VerticalAlign$BASELINE_getInstance(), Context2d$VerticalAlign$BOTTOM_getInstance()];
  }
  Context2d$VerticalAlign.values = Context2d$VerticalAlign$values;
  function Context2d$VerticalAlign$valueOf(name) {
    switch (name) {
      case 'TOP':
        return Context2d$VerticalAlign$TOP_getInstance();
      case 'MIDLE':
        return Context2d$VerticalAlign$MIDLE_getInstance();
      case 'BASELINE':
        return Context2d$VerticalAlign$BASELINE_getInstance();
      case 'BOTTOM':
        return Context2d$VerticalAlign$BOTTOM_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.VerticalAlign.' + name);
    }
  }
  Context2d$VerticalAlign.valueOf_61zpoe$ = Context2d$VerticalAlign$valueOf;
  function Context2d$HorizontalAlign(name, ordinal, ratio) {
    Enum.call(this);
    this.ratio = ratio;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$HorizontalAlign_initFields() {
    Context2d$HorizontalAlign_initFields = function () {
    };
    Context2d$HorizontalAlign$LEFT_instance = new Context2d$HorizontalAlign('LEFT', 0, 0.0);
    Context2d$HorizontalAlign$CENTER_instance = new Context2d$HorizontalAlign('CENTER', 1, 0.5);
    Context2d$HorizontalAlign$RIGHT_instance = new Context2d$HorizontalAlign('RIGHT', 2, 1.0);
  }
  var Context2d$HorizontalAlign$LEFT_instance;
  function Context2d$HorizontalAlign$LEFT_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$LEFT_instance;
  }
  var Context2d$HorizontalAlign$CENTER_instance;
  function Context2d$HorizontalAlign$CENTER_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$CENTER_instance;
  }
  var Context2d$HorizontalAlign$RIGHT_instance;
  function Context2d$HorizontalAlign$RIGHT_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$RIGHT_instance;
  }
  Context2d$HorizontalAlign.prototype.getOffsetX_14dthe$ = function (width) {
    return width * this.ratio;
  };
  Context2d$HorizontalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorizontalAlign',
    interfaces: [Enum]
  };
  function Context2d$HorizontalAlign$values() {
    return [Context2d$HorizontalAlign$LEFT_getInstance(), Context2d$HorizontalAlign$CENTER_getInstance(), Context2d$HorizontalAlign$RIGHT_getInstance()];
  }
  Context2d$HorizontalAlign.values = Context2d$HorizontalAlign$values;
  function Context2d$HorizontalAlign$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return Context2d$HorizontalAlign$LEFT_getInstance();
      case 'CENTER':
        return Context2d$HorizontalAlign$CENTER_getInstance();
      case 'RIGHT':
        return Context2d$HorizontalAlign$RIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.HorizontalAlign.' + name);
    }
  }
  Context2d$HorizontalAlign.valueOf_61zpoe$ = Context2d$HorizontalAlign$valueOf;
  function Context2d$ScaleMode(name, ordinal, hScale, vScale) {
    Enum.call(this);
    this.hScale = hScale;
    this.vScale = vScale;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$ScaleMode_initFields() {
    Context2d$ScaleMode_initFields = function () {
    };
    Context2d$ScaleMode$NONE_instance = new Context2d$ScaleMode('NONE', 0, false, false);
    Context2d$ScaleMode$HORIZONTAL_instance = new Context2d$ScaleMode('HORIZONTAL', 1, true, false);
    Context2d$ScaleMode$VERTICAL_instance = new Context2d$ScaleMode('VERTICAL', 2, false, true);
    Context2d$ScaleMode$NORMAL_instance = new Context2d$ScaleMode('NORMAL', 3, true, true);
  }
  var Context2d$ScaleMode$NONE_instance;
  function Context2d$ScaleMode$NONE_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$NONE_instance;
  }
  var Context2d$ScaleMode$HORIZONTAL_instance;
  function Context2d$ScaleMode$HORIZONTAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$HORIZONTAL_instance;
  }
  var Context2d$ScaleMode$VERTICAL_instance;
  function Context2d$ScaleMode$VERTICAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$VERTICAL_instance;
  }
  var Context2d$ScaleMode$NORMAL_instance;
  function Context2d$ScaleMode$NORMAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$NORMAL_instance;
  }
  Context2d$ScaleMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaleMode',
    interfaces: [Enum]
  };
  function Context2d$ScaleMode$values() {
    return [Context2d$ScaleMode$NONE_getInstance(), Context2d$ScaleMode$HORIZONTAL_getInstance(), Context2d$ScaleMode$VERTICAL_getInstance(), Context2d$ScaleMode$NORMAL_getInstance()];
  }
  Context2d$ScaleMode.values = Context2d$ScaleMode$values;
  function Context2d$ScaleMode$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Context2d$ScaleMode$NONE_getInstance();
      case 'HORIZONTAL':
        return Context2d$ScaleMode$HORIZONTAL_getInstance();
      case 'VERTICAL':
        return Context2d$ScaleMode$VERTICAL_getInstance();
      case 'NORMAL':
        return Context2d$ScaleMode$NORMAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.ScaleMode.' + name);
    }
  }
  Context2d$ScaleMode.valueOf_61zpoe$ = Context2d$ScaleMode$valueOf;
  function Context2d$State(transform, clip, path, lineScaleMode, lineWidth, lineCap, lineJoin, miterLimit, strokeStyle, fillStyle, font, verticalAlign, horizontalAlign, globalAlpha) {
    if (transform === void 0)
      transform = new Matrix2d();
    if (clip === void 0)
      clip = null;
    if (path === void 0)
      path = new GraphicsPath();
    if (lineScaleMode === void 0)
      lineScaleMode = Context2d$ScaleMode$NORMAL_getInstance();
    if (lineWidth === void 0)
      lineWidth = 1.0;
    if (lineCap === void 0)
      lineCap = Context2d$LineCap$BUTT_getInstance();
    if (lineJoin === void 0)
      lineJoin = Context2d$LineJoin$MITER_getInstance();
    if (miterLimit === void 0)
      miterLimit = 10.0;
    if (strokeStyle === void 0)
      strokeStyle = new Context2d$Color(Colors_getInstance().BLACK);
    if (fillStyle === void 0)
      fillStyle = new Context2d$Color(Colors_getInstance().BLACK);
    if (font === void 0)
      font = new Context2d$Font('sans-serif', 10.0);
    if (verticalAlign === void 0)
      verticalAlign = Context2d$VerticalAlign$BASELINE_getInstance();
    if (horizontalAlign === void 0)
      horizontalAlign = Context2d$HorizontalAlign$LEFT_getInstance();
    if (globalAlpha === void 0)
      globalAlpha = 1.0;
    this.transform = transform;
    this.clip = clip;
    this.path = path;
    this.lineScaleMode = lineScaleMode;
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.font = font;
    this.verticalAlign = verticalAlign;
    this.horizontalAlign = horizontalAlign;
    this.globalAlpha = globalAlpha;
  }
  Context2d$State.prototype.clone = function () {
    var tmp$;
    return this.copy_ihvang$(this.transform.clone(), (tmp$ = this.clip) != null ? tmp$.clone() : null, this.path.clone());
  };
  Context2d$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  Context2d$State.prototype.component1 = function () {
    return this.transform;
  };
  Context2d$State.prototype.component2 = function () {
    return this.clip;
  };
  Context2d$State.prototype.component3 = function () {
    return this.path;
  };
  Context2d$State.prototype.component4 = function () {
    return this.lineScaleMode;
  };
  Context2d$State.prototype.component5 = function () {
    return this.lineWidth;
  };
  Context2d$State.prototype.component6 = function () {
    return this.lineCap;
  };
  Context2d$State.prototype.component7 = function () {
    return this.lineJoin;
  };
  Context2d$State.prototype.component8 = function () {
    return this.miterLimit;
  };
  Context2d$State.prototype.component9 = function () {
    return this.strokeStyle;
  };
  Context2d$State.prototype.component10 = function () {
    return this.fillStyle;
  };
  Context2d$State.prototype.component11 = function () {
    return this.font;
  };
  Context2d$State.prototype.component12 = function () {
    return this.verticalAlign;
  };
  Context2d$State.prototype.component13 = function () {
    return this.horizontalAlign;
  };
  Context2d$State.prototype.component14 = function () {
    return this.globalAlpha;
  };
  Context2d$State.prototype.copy_ihvang$ = function (transform, clip, path, lineScaleMode, lineWidth, lineCap, lineJoin, miterLimit, strokeStyle, fillStyle, font, verticalAlign, horizontalAlign, globalAlpha) {
    return new Context2d$State(transform === void 0 ? this.transform : transform, clip === void 0 ? this.clip : clip, path === void 0 ? this.path : path, lineScaleMode === void 0 ? this.lineScaleMode : lineScaleMode, lineWidth === void 0 ? this.lineWidth : lineWidth, lineCap === void 0 ? this.lineCap : lineCap, lineJoin === void 0 ? this.lineJoin : lineJoin, miterLimit === void 0 ? this.miterLimit : miterLimit, strokeStyle === void 0 ? this.strokeStyle : strokeStyle, fillStyle === void 0 ? this.fillStyle : fillStyle, font === void 0 ? this.font : font, verticalAlign === void 0 ? this.verticalAlign : verticalAlign, horizontalAlign === void 0 ? this.horizontalAlign : horizontalAlign, globalAlpha === void 0 ? this.globalAlpha : globalAlpha);
  };
  Context2d$State.prototype.toString = function () {
    return 'State(transform=' + Kotlin.toString(this.transform) + (', clip=' + Kotlin.toString(this.clip)) + (', path=' + Kotlin.toString(this.path)) + (', lineScaleMode=' + Kotlin.toString(this.lineScaleMode)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + (', lineCap=' + Kotlin.toString(this.lineCap)) + (', lineJoin=' + Kotlin.toString(this.lineJoin)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + (', strokeStyle=' + Kotlin.toString(this.strokeStyle)) + (', fillStyle=' + Kotlin.toString(this.fillStyle)) + (', font=' + Kotlin.toString(this.font)) + (', verticalAlign=' + Kotlin.toString(this.verticalAlign)) + (', horizontalAlign=' + Kotlin.toString(this.horizontalAlign)) + (', globalAlpha=' + Kotlin.toString(this.globalAlpha)) + ')';
  };
  Context2d$State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineScaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineJoin) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    result = result * 31 + Kotlin.hashCode(this.strokeStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.verticalAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.horizontalAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.globalAlpha) | 0;
    return result;
  };
  Context2d$State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.path, other.path) && Kotlin.equals(this.lineScaleMode, other.lineScaleMode) && Kotlin.equals(this.lineWidth, other.lineWidth) && Kotlin.equals(this.lineCap, other.lineCap) && Kotlin.equals(this.lineJoin, other.lineJoin) && Kotlin.equals(this.miterLimit, other.miterLimit) && Kotlin.equals(this.strokeStyle, other.strokeStyle) && Kotlin.equals(this.fillStyle, other.fillStyle) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.verticalAlign, other.verticalAlign) && Kotlin.equals(this.horizontalAlign, other.horizontalAlign) && Kotlin.equals(this.globalAlpha, other.globalAlpha)))));
  };
  Object.defineProperty(Context2d.prototype, 'lineScaleMode', {
    get: function () {
      var $this = this.lineScaleMode_uvt0g7$_0;
      new PropertyMetadata('lineScaleMode');
      return $this.redirect().get();
    },
    set: function (lineScaleMode) {
      var $this = this.lineScaleMode_uvt0g7$_0;
      new PropertyMetadata('lineScaleMode');
      $this.redirect().set(lineScaleMode);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineWidth', {
    get: function () {
      var $this = this.lineWidth_eizzma$_0;
      new PropertyMetadata('lineWidth');
      return $this.redirect().get();
    },
    set: function (lineWidth) {
      var $this = this.lineWidth_eizzma$_0;
      new PropertyMetadata('lineWidth');
      $this.redirect().set(lineWidth);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineCap', {
    get: function () {
      var $this = this.lineCap_3v9p9a$_0;
      new PropertyMetadata('lineCap');
      return $this.redirect().get();
    },
    set: function (lineCap) {
      var $this = this.lineCap_3v9p9a$_0;
      new PropertyMetadata('lineCap');
      $this.redirect().set(lineCap);
    }
  });
  Object.defineProperty(Context2d.prototype, 'strokeStyle', {
    get: function () {
      var $this = this.strokeStyle_b8jfmh$_0;
      new PropertyMetadata('strokeStyle');
      return $this.redirect().get();
    },
    set: function (strokeStyle) {
      var $this = this.strokeStyle_b8jfmh$_0;
      new PropertyMetadata('strokeStyle');
      $this.redirect().set(strokeStyle);
    }
  });
  Object.defineProperty(Context2d.prototype, 'fillStyle', {
    get: function () {
      var $this = this.fillStyle_mocpqm$_0;
      new PropertyMetadata('fillStyle');
      return $this.redirect().get();
    },
    set: function (fillStyle) {
      var $this = this.fillStyle_mocpqm$_0;
      new PropertyMetadata('fillStyle');
      $this.redirect().set(fillStyle);
    }
  });
  Object.defineProperty(Context2d.prototype, 'font', {
    get: function () {
      var $this = this.font_hw4l97$_0;
      new PropertyMetadata('font');
      return $this.redirect().get();
    },
    set: function (font) {
      var $this = this.font_hw4l97$_0;
      new PropertyMetadata('font');
      $this.redirect().set(font);
    }
  });
  Object.defineProperty(Context2d.prototype, 'verticalAlign', {
    get: function () {
      var $this = this.verticalAlign_9mcoep$_0;
      new PropertyMetadata('verticalAlign');
      return $this.redirect().get();
    },
    set: function (verticalAlign) {
      var $this = this.verticalAlign_9mcoep$_0;
      new PropertyMetadata('verticalAlign');
      $this.redirect().set(verticalAlign);
    }
  });
  Object.defineProperty(Context2d.prototype, 'horizontalAlign', {
    get: function () {
      var $this = this.horizontalAlign_o0d4qn$_0;
      new PropertyMetadata('horizontalAlign');
      return $this.redirect().get();
    },
    set: function (horizontalAlign) {
      var $this = this.horizontalAlign_o0d4qn$_0;
      new PropertyMetadata('horizontalAlign');
      $this.redirect().set(horizontalAlign);
    }
  });
  Object.defineProperty(Context2d.prototype, 'globalAlpha', {
    get: function () {
      var $this = this.globalAlpha_l2yrp7$_0;
      new PropertyMetadata('globalAlpha');
      return $this.redirect().get();
    },
    set: function (globalAlpha) {
      var $this = this.globalAlpha_l2yrp7$_0;
      new PropertyMetadata('globalAlpha');
      $this.redirect().set(globalAlpha);
    }
  });
  Context2d.prototype.keepApply_hqcxwp$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.keepApply_hqcxwp$', wrapFunction(function () {
    return function (callback) {
      this.save();
      try {
        callback(this);
      }
      finally {
        this.restore();
      }
      return this;
    };
  }));
  Context2d.prototype.keep_o14v8n$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.keep_o14v8n$', function (callback) {
    this.save();
    try {
      callback();
    }
    finally {
      this.restore();
    }
  });
  Context2d.prototype.keepTransform_o14v8n$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.keepTransform_o14v8n$', function (callback) {
    var t = this.state.transform;
    var a = t.a;
    var b = t.b;
    var c = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      callback();
    }
    finally {
      t.setTo_15yvbs$(a, b, c, d, tx, ty);
    }
  });
  Context2d.prototype.save = function () {
    return this.stack_0.addLast_11rb$(this.state.clone());
  };
  Context2d.prototype.restore = function () {
    this.state = this.stack_0.removeLast();
  };
  Context2d.prototype.scale_z8e4lc$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.scale_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (sx, sy) {
      if (sy === void 0)
        sy = sx;
      return this.scale_lu1900$(numberToDouble(sx), numberToDouble(sy));
    };
  }));
  Context2d.prototype.translate_z8e4lc$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.translate_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (tx, ty) {
      return this.translate_lu1900$(numberToDouble(tx), numberToDouble(ty));
    };
  }));
  Context2d.prototype.rotate_3p81yu$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.rotate_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle) {
      return this.rotate_14dthe$(numberToDouble(angle));
    };
  }));
  Context2d.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.state.transform.prescale_lu1900$(sx, sy);
  };
  Context2d.prototype.rotate_14dthe$ = function (angle) {
    return this.state.transform.prerotate_14dthe$(angle);
  };
  Context2d.prototype.translate_lu1900$ = function (tx, ty) {
    return this.state.transform.pretranslate_lu1900$(tx, ty);
  };
  Context2d.prototype.transform_yx07kl$ = function (m) {
    return this.state.transform.premultiply_7f5bc6$(m);
  };
  Context2d.prototype.transform_15yvbs$ = function (a, b, c, d, tx, ty) {
    return this.state.transform.premultiply_15yvbs$(a, b, c, d, tx, ty);
  };
  Context2d.prototype.setTransform_yx07kl$ = function (m) {
    this.state.transform.copyFrom_7f5bc6$(m);
  };
  Context2d.prototype.setTransform_15yvbs$ = function (a, b, c, d, tx, ty) {
    return this.state.transform.setTo_15yvbs$(a, b, c, d, tx, ty);
  };
  Context2d.prototype.shear_lu1900$ = function (sx, sy) {
    return this.transform_15yvbs$(1.0, sy, sx, 1.0, 0.0, 0.0);
  };
  Context2d.prototype.moveTo_vux9f0$ = function (x, y) {
    this.moveTo_lu1900$(x, y);
  };
  Context2d.prototype.lineTo_vux9f0$ = function (x, y) {
    this.lineTo_lu1900$(x, y);
  };
  Context2d.prototype.quadraticCurveTo_tjonv8$ = function (cx, cy, ax, ay) {
    this.quadraticCurveTo_6y0v78$(cx, cy, ax, ay);
  };
  Context2d.prototype.bezierCurveTo_mbbjvw$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.bezierCurveTo_15yvbs$(cx1, cy1, cx2, cy2, ax, ay);
  };
  Context2d.prototype.arcTo_4qozqa$ = function (x1, y1, x2, y2, radius) {
    this.arcTo_1lq62i$(x1, y1, x2, y2, radius);
  };
  Context2d.prototype.moveTo_r62tv1$ = function (p) {
    this.moveTo_lu1900$(p.x, p.y);
  };
  Context2d.prototype.lineTo_r62tv1$ = function (p) {
    this.lineTo_lu1900$(p.x, p.y);
  };
  Context2d.prototype.quadraticCurveTo_g6xq6k$ = function (c, a) {
    this.quadraticCurveTo_6y0v78$(c.x, c.y, a.x, a.y);
  };
  Context2d.prototype.bezierCurveTo_immp3h$ = function (c1, c2, a) {
    this.bezierCurveTo_15yvbs$(c1.x, c1.y, c2.x, c2.y, a.x, a.y);
  };
  Context2d.prototype.arcTo_cnijz2$ = function (p1, p2, radius) {
    this.arcTo_1lq62i$(p1.x, p1.y, p2.x, p2.y, radius);
  };
  Context2d.prototype.rect_tjonv8$ = function (x, y, width, height) {
    this.rect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.strokeRect_tjonv8$ = function (x, y, width, height) {
    this.strokeRect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.fillRect_tjonv8$ = function (x, y, width, height) {
    this.fillRect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.arc_1lq62i$ = function (x, y, r, start, end) {
    this.state.path.arc_1lq62i$(x, y, r, start, end);
  };
  Context2d.prototype.strokeDot_lu1900$ = function (x, y) {
    this.beginPath();
    this.moveTo_lu1900$(x, y);
    this.lineTo_lu1900$(x, y);
    this.stroke();
  };
  Context2d.prototype.arcTo_1lq62i$ = function (x1, y1, x2, y2, r) {
    this.state.path.arcTo_1lq62i$(x1, y1, x2, y2, r);
  };
  Context2d.prototype.circle_yvo9jy$ = function (x, y, radius) {
    this.arc_1lq62i$(x, y, radius, 0.0, math.PI * 2.0);
  };
  Context2d.prototype.rMoveTo_lu1900$ = function (x, y) {
    this.state.path.rMoveTo_lu1900$(x, y);
  };
  Context2d.prototype.moveTo_lu1900$ = function (x, y) {
    this.state.path.moveTo_lu1900$(x, y);
  };
  Context2d.prototype.moveToH_14dthe$ = function (x) {
    this.state.path.moveToH_14dthe$(x);
  };
  Context2d.prototype.moveToV_14dthe$ = function (y) {
    this.state.path.moveToV_14dthe$(y);
  };
  Context2d.prototype.rMoveToH_14dthe$ = function (x) {
    this.state.path.rMoveToH_14dthe$(x);
  };
  Context2d.prototype.rMoveToV_14dthe$ = function (y) {
    this.state.path.rMoveToV_14dthe$(y);
  };
  Context2d.prototype.lineToH_14dthe$ = function (x) {
    this.state.path.lineToH_14dthe$(x);
  };
  Context2d.prototype.lineToV_14dthe$ = function (y) {
    this.state.path.lineToV_14dthe$(y);
  };
  Context2d.prototype.rLineToH_14dthe$ = function (x) {
    this.state.path.rLineToH_14dthe$(x);
  };
  Context2d.prototype.rLineToV_14dthe$ = function (y) {
    this.state.path.rLineToV_14dthe$(y);
  };
  Context2d.prototype.lineTo_lu1900$ = function (x, y) {
    this.state.path.lineTo_lu1900$(x, y);
  };
  Context2d.prototype.rLineTo_lu1900$ = function (x, y) {
    this.state.path.rLineTo_lu1900$(x, y);
  };
  Context2d.prototype.quadraticCurveTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.state.path.quadTo_6y0v78$(cx, cy, ax, ay);
  };
  Context2d.prototype.rQuadraticCurveTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.state.path.rQuadTo_6y0v78$(cx, cy, ax, ay);
  };
  Context2d.prototype.bezierCurveTo_15yvbs$ = function (cx1, cy1, cx2, cy2, x, y) {
    this.state.path.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, x, y);
  };
  Context2d.prototype.rBezierCurveTo_15yvbs$ = function (cx1, cy1, cx2, cy2, x, y) {
    this.state.path.rCubicTo_15yvbs$(cx1, cy1, cx2, cy2, x, y);
  };
  Context2d.prototype.rect_6y0v78$ = function (x, y, width, height) {
    this.state.path.rect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.roundRect_15yvbs$ = function (x, y, w, h, rx, ry) {
    if (ry === void 0)
      ry = rx;
    this.beginPath();
    this.state.path.roundRect_15yvbs$(x, y, w, h, rx, ry);
    this.closePath();
  };
  Context2d.prototype.path_lcui0n$ = function (path) {
    this.state.path.write_3wv7u0$(path);
  };
  Context2d.prototype.draw_ywv3s4$ = function (d) {
    d.draw_vuz2tk$(this);
  };
  Context2d.prototype.strokeRect_6y0v78$ = function (x, y, width, height) {
    this.beginPath();
    this.rect_6y0v78$(x, y, width, height);
    this.stroke();
  };
  Context2d.prototype.fillRect_6y0v78$ = function (x, y, width, height) {
    this.beginPath();
    this.rect_6y0v78$(x, y, width, height);
    this.fill();
  };
  Context2d.prototype.beginPath = function () {
    this.state.path = new GraphicsPath();
  };
  Context2d.prototype.getBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = new Rectangle();
    return this.state.path.getBounds_iqjpvb$(out);
  };
  Context2d.prototype.closePath = function () {
    this.state.path.close();
  };
  Context2d.prototype.stroke = function () {
    if (!equals(this.state.strokeStyle, Context2d$None_getInstance()))
      this.renderer.render_w64o9o$(this.state, false);
  };
  Context2d.prototype.fill = function () {
    if (!equals(this.state.fillStyle, Context2d$None_getInstance()))
      this.renderer.render_w64o9o$(this.state, true);
  };
  Context2d.prototype.fill_i8h3xk$ = function (paint) {
    this.fillStyle = paint;
    this.fill();
  };
  Context2d.prototype.stroke_i8h3xk$ = function (paint) {
    this.strokeStyle = paint;
    this.stroke();
  };
  Context2d.prototype.fillStroke = function () {
    this.fill();
    this.stroke();
  };
  Context2d.prototype.clip = function () {
    this.state.clip = this.state.path;
  };
  Context2d.prototype.drawShape_gwrl1p$ = function (shape, rasterizerMethod) {
    if (rasterizerMethod === void 0)
      rasterizerMethod = Context2d$ShapeRasterizerMethod$X4_getInstance();
    var tmp$;
    if (equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$NONE_getInstance()))
      shape.draw_vuz2tk$(this);
    else if (equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X1_getInstance()) || equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X2_getInstance()) || equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X4_getInstance())) {
      var scale = rasterizerMethod.scale;
      var x = this.renderer.width * scale;
      var tmp$_0 = numberToInt(Math_0.ceil(x));
      var x_0 = this.renderer.height * scale;
      var newBi = NativeImage_0(tmp$_0, numberToInt(Math_0.ceil(x_0)));
      var bi = newBi.getContext2d_6taknv$(false);
      bi.scale_lu1900$(scale, scale);
      bi.transform_yx07kl$(this.state.transform);
      bi.draw_ywv3s4$(shape);
      if (equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X1_getInstance()))
        tmp$ = newBi;
      else if (equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X2_getInstance()))
        tmp$ = mipmap(newBi, 1);
      else if (equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X4_getInstance()))
        tmp$ = mipmap(newBi, 2);
      else
        tmp$ = newBi;
      var renderBi = tmp$;
      var t = this.state.transform;
      var a = t.a;
      var b = t.b;
      var c = t.c;
      var d = t.d;
      var tx = t.tx;
      var ty = t.ty;
      try {
        this.setTransform_yx07kl$(new Matrix2d());
        this.renderer.drawImage_4amb17$(renderBi, 0, 0);
      }
      finally {
        t.setTo_15yvbs$(a, b, c, d, tx, ty);
      }
    }
  };
  Context2d.prototype.createLinearGradient_6y0v78$ = function (x0, y0, x1, y1) {
    return new Context2d$Gradient(Context2d$Gradient$Kind$LINEAR_getInstance(), x0, y0, 0.0, x1, y1, 0.0);
  };
  Context2d.prototype.createRadialGradient_15yvbs$ = function (x0, y0, r0, x1, y1, r1) {
    return new Context2d$Gradient(Context2d$Gradient$Kind$RADIAL_getInstance(), x0, y0, r0, x1, y1, r1);
  };
  Context2d.prototype.createColor_za3lpa$ = function (color) {
    return new Context2d$Color(color);
  };
  Context2d.prototype.createPattern_q12jej$ = function (bitmap, repeat, smooth, transform) {
    if (repeat === void 0)
      repeat = false;
    if (smooth === void 0)
      smooth = true;
    if (transform === void 0)
      transform = new Matrix2d();
    return new Context2d$BitmapPaint(bitmap, transform, repeat, smooth);
  };
  function Context2d$Font(name, size) {
    this.name = name;
    this.size = size;
  }
  Context2d$Font.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Font',
    interfaces: []
  };
  Context2d$Font.prototype.component1 = function () {
    return this.name;
  };
  Context2d$Font.prototype.component2 = function () {
    return this.size;
  };
  Context2d$Font.prototype.copy_io5o9c$ = function (name, size) {
    return new Context2d$Font(name === void 0 ? this.name : name, size === void 0 ? this.size : size);
  };
  Context2d$Font.prototype.toString = function () {
    return 'Font(name=' + Kotlin.toString(this.name) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  Context2d$Font.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  Context2d$Font.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.size, other.size)))));
  };
  function Context2d$TextMetrics(bounds) {
    if (bounds === void 0)
      bounds = new Rectangle();
    this.bounds = bounds;
  }
  Context2d$TextMetrics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextMetrics',
    interfaces: []
  };
  Context2d$TextMetrics.prototype.component1 = function () {
    return this.bounds;
  };
  Context2d$TextMetrics.prototype.copy_2da8yn$ = function (bounds) {
    return new Context2d$TextMetrics(bounds === void 0 ? this.bounds : bounds);
  };
  Context2d$TextMetrics.prototype.toString = function () {
    return 'TextMetrics(bounds=' + Kotlin.toString(this.bounds) + ')';
  };
  Context2d$TextMetrics.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    return result;
  };
  Context2d$TextMetrics.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bounds, other.bounds))));
  };
  Context2d.prototype.getTextBounds_jznmvy$ = function (text, out) {
    if (out === void 0)
      out = new Context2d$TextMetrics();
    this.renderer.getBounds_qlucl1$(this.font, text, out);
    return out;
  };
  Context2d.prototype.fillText_ai6r6m$ = function (text, x, y) {
    this.renderText_a7koit$(text, x, y, true);
  };
  Context2d.prototype.strokeText_ai6r6m$ = function (text, x, y) {
    this.renderText_a7koit$(text, x, y, false);
  };
  Context2d.prototype.renderText_a7koit$ = function (text, x, y, fill) {
    this.renderer.renderText_2jdvt1$(this.state, this.font, text, x, y, fill);
  };
  Context2d.prototype.drawImage_dpo8os$ = function (image, x, y, width, height) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    if (true) {
      this.beginPath();
      this.moveTo_vux9f0$(x, y);
      this.lineTo_vux9f0$(x + width | 0, y);
      this.lineTo_vux9f0$(x + width | 0, y + height | 0);
      this.lineTo_vux9f0$(x, y + height | 0);
      this.closePath();
      this.fillStyle = this.createPattern_q12jej$(image, void 0, void 0, (new Matrix2d()).scale_lu1900$(width / image.width, height / image.height));
      this.fill();
    }
     else {
      this.renderer.drawImage_4amb17$(image, x, y, width, height, this.state.transform);
    }
  };
  function Context2d$Paint() {
  }
  Context2d$Paint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Paint',
    interfaces: []
  };
  function Context2d$None() {
    Context2d$None_instance = this;
  }
  Context2d$None.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'None',
    interfaces: [Context2d$Paint]
  };
  var Context2d$None_instance = null;
  function Context2d$None_getInstance() {
    if (Context2d$None_instance === null) {
      new Context2d$None();
    }
    return Context2d$None_instance;
  }
  function Context2d$Color(color) {
    this.color = color;
  }
  Context2d$Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: [Context2d$Paint]
  };
  Context2d$Color.prototype.component1 = function () {
    return this.color;
  };
  Context2d$Color.prototype.copy_za3lpa$ = function (color) {
    return new Context2d$Color(color === void 0 ? this.color : color);
  };
  Context2d$Color.prototype.toString = function () {
    return 'Color(color=' + Kotlin.toString(this.color) + ')';
  };
  Context2d$Color.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  Context2d$Color.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.color, other.color))));
  };
  function Context2d$TransformedPaint() {
  }
  Context2d$TransformedPaint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TransformedPaint',
    interfaces: [Context2d$Paint]
  };
  function Context2d$Gradient(kind, x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod, units) {
    if (stops === void 0)
      stops = new DoubleArrayList();
    if (colors === void 0)
      colors = new IntArrayList();
    if (cycle === void 0)
      cycle = Context2d$CycleMethod$NO_CYCLE_getInstance();
    if (transform === void 0)
      transform = new Matrix2d();
    if (interpolationMethod === void 0)
      interpolationMethod = Context2d$Gradient$InterpolationMethod$NORMAL_getInstance();
    if (units === void 0)
      units = Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance();
    this.kind = kind;
    this.x0 = x0;
    this.y0 = y0;
    this.r0 = r0;
    this.x1 = x1;
    this.y1 = y1;
    this.r1 = r1;
    this.stops = stops;
    this.colors = colors;
    this.cycle = cycle;
    this.transform_llmwna$_0 = transform;
    this.interpolationMethod = interpolationMethod;
    this.units = units;
    this.numberOfStops = this.stops.size;
  }
  Object.defineProperty(Context2d$Gradient.prototype, 'transform', {
    get: function () {
      return this.transform_llmwna$_0;
    }
  });
  function Context2d$Gradient$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$Kind_initFields() {
    Context2d$Gradient$Kind_initFields = function () {
    };
    Context2d$Gradient$Kind$LINEAR_instance = new Context2d$Gradient$Kind('LINEAR', 0);
    Context2d$Gradient$Kind$RADIAL_instance = new Context2d$Gradient$Kind('RADIAL', 1);
  }
  var Context2d$Gradient$Kind$LINEAR_instance;
  function Context2d$Gradient$Kind$LINEAR_getInstance() {
    Context2d$Gradient$Kind_initFields();
    return Context2d$Gradient$Kind$LINEAR_instance;
  }
  var Context2d$Gradient$Kind$RADIAL_instance;
  function Context2d$Gradient$Kind$RADIAL_getInstance() {
    Context2d$Gradient$Kind_initFields();
    return Context2d$Gradient$Kind$RADIAL_instance;
  }
  Context2d$Gradient$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function Context2d$Gradient$Kind$values() {
    return [Context2d$Gradient$Kind$LINEAR_getInstance(), Context2d$Gradient$Kind$RADIAL_getInstance()];
  }
  Context2d$Gradient$Kind.values = Context2d$Gradient$Kind$values;
  function Context2d$Gradient$Kind$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return Context2d$Gradient$Kind$LINEAR_getInstance();
      case 'RADIAL':
        return Context2d$Gradient$Kind$RADIAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.Kind.' + name);
    }
  }
  Context2d$Gradient$Kind.valueOf_61zpoe$ = Context2d$Gradient$Kind$valueOf;
  function Context2d$Gradient$Units(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$Units_initFields() {
    Context2d$Gradient$Units_initFields = function () {
    };
    Context2d$Gradient$Units$USER_SPACE_ON_USE_instance = new Context2d$Gradient$Units('USER_SPACE_ON_USE', 0);
    Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance = new Context2d$Gradient$Units('OBJECT_BOUNDING_BOX', 1);
  }
  var Context2d$Gradient$Units$USER_SPACE_ON_USE_instance;
  function Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance() {
    Context2d$Gradient$Units_initFields();
    return Context2d$Gradient$Units$USER_SPACE_ON_USE_instance;
  }
  var Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance;
  function Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance() {
    Context2d$Gradient$Units_initFields();
    return Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance;
  }
  Context2d$Gradient$Units.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Units',
    interfaces: [Enum]
  };
  function Context2d$Gradient$Units$values() {
    return [Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance(), Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance()];
  }
  Context2d$Gradient$Units.values = Context2d$Gradient$Units$values;
  function Context2d$Gradient$Units$valueOf(name) {
    switch (name) {
      case 'USER_SPACE_ON_USE':
        return Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance();
      case 'OBJECT_BOUNDING_BOX':
        return Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.Units.' + name);
    }
  }
  Context2d$Gradient$Units.valueOf_61zpoe$ = Context2d$Gradient$Units$valueOf;
  function Context2d$Gradient$InterpolationMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$InterpolationMethod_initFields() {
    Context2d$Gradient$InterpolationMethod_initFields = function () {
    };
    Context2d$Gradient$InterpolationMethod$LINEAR_instance = new Context2d$Gradient$InterpolationMethod('LINEAR', 0);
    Context2d$Gradient$InterpolationMethod$NORMAL_instance = new Context2d$Gradient$InterpolationMethod('NORMAL', 1);
  }
  var Context2d$Gradient$InterpolationMethod$LINEAR_instance;
  function Context2d$Gradient$InterpolationMethod$LINEAR_getInstance() {
    Context2d$Gradient$InterpolationMethod_initFields();
    return Context2d$Gradient$InterpolationMethod$LINEAR_instance;
  }
  var Context2d$Gradient$InterpolationMethod$NORMAL_instance;
  function Context2d$Gradient$InterpolationMethod$NORMAL_getInstance() {
    Context2d$Gradient$InterpolationMethod_initFields();
    return Context2d$Gradient$InterpolationMethod$NORMAL_instance;
  }
  Context2d$Gradient$InterpolationMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterpolationMethod',
    interfaces: [Enum]
  };
  function Context2d$Gradient$InterpolationMethod$values() {
    return [Context2d$Gradient$InterpolationMethod$LINEAR_getInstance(), Context2d$Gradient$InterpolationMethod$NORMAL_getInstance()];
  }
  Context2d$Gradient$InterpolationMethod.values = Context2d$Gradient$InterpolationMethod$values;
  function Context2d$Gradient$InterpolationMethod$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return Context2d$Gradient$InterpolationMethod$LINEAR_getInstance();
      case 'NORMAL':
        return Context2d$Gradient$InterpolationMethod$NORMAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.InterpolationMethod.' + name);
    }
  }
  Context2d$Gradient$InterpolationMethod.valueOf_61zpoe$ = Context2d$Gradient$InterpolationMethod$valueOf;
  Context2d$Gradient.prototype.addColorStop_12fank$ = function (stop, color) {
    this.stops.plusAssign_14dthe$(stop);
    this.colors.plusAssign_za3lpa$(color);
    return this;
  };
  Context2d$Gradient.prototype.applyMatrix_yx07kl$ = function (m) {
    return new Context2d$Gradient(this.kind, m.transformX_lu1900$(this.x0, this.y0), m.transformY_lu1900$(this.x0, this.y0), this.r0, m.transformX_lu1900$(this.x1, this.y1), m.transformY_lu1900$(this.x1, this.y1), this.r1, DoubleArrayList_init(this.stops), IntArrayList_init(this.colors), this.cycle, new Matrix2d(), this.interpolationMethod, this.units);
  };
  Context2d$Gradient.prototype.toString = function () {
    var tmp$;
    tmp$ = this.kind;
    if (equals(tmp$, Context2d$Gradient$Kind$LINEAR_getInstance()))
      return 'LinearGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.stops + ', ' + this.colors + ')';
    else if (equals(tmp$, Context2d$Gradient$Kind$RADIAL_getInstance()))
      return 'RadialGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.r0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.r1 + ', ' + this.stops + ', ' + this.colors + ')';
    else
      return Kotlin.noWhenBranchMatched();
  };
  Context2d$Gradient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gradient',
    interfaces: [Context2d$TransformedPaint]
  };
  Context2d$Gradient.prototype.component1 = function () {
    return this.kind;
  };
  Context2d$Gradient.prototype.component2 = function () {
    return this.x0;
  };
  Context2d$Gradient.prototype.component3 = function () {
    return this.y0;
  };
  Context2d$Gradient.prototype.component4 = function () {
    return this.r0;
  };
  Context2d$Gradient.prototype.component5 = function () {
    return this.x1;
  };
  Context2d$Gradient.prototype.component6 = function () {
    return this.y1;
  };
  Context2d$Gradient.prototype.component7 = function () {
    return this.r1;
  };
  Context2d$Gradient.prototype.component8 = function () {
    return this.stops;
  };
  Context2d$Gradient.prototype.component9 = function () {
    return this.colors;
  };
  Context2d$Gradient.prototype.component10 = function () {
    return this.cycle;
  };
  Context2d$Gradient.prototype.component11 = function () {
    return this.transform;
  };
  Context2d$Gradient.prototype.component12 = function () {
    return this.interpolationMethod;
  };
  Context2d$Gradient.prototype.component13 = function () {
    return this.units;
  };
  Context2d$Gradient.prototype.copy_9l7zku$ = function (kind, x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod, units) {
    return new Context2d$Gradient(kind === void 0 ? this.kind : kind, x0 === void 0 ? this.x0 : x0, y0 === void 0 ? this.y0 : y0, r0 === void 0 ? this.r0 : r0, x1 === void 0 ? this.x1 : x1, y1 === void 0 ? this.y1 : y1, r1 === void 0 ? this.r1 : r1, stops === void 0 ? this.stops : stops, colors === void 0 ? this.colors : colors, cycle === void 0 ? this.cycle : cycle, transform === void 0 ? this.transform : transform, interpolationMethod === void 0 ? this.interpolationMethod : interpolationMethod, units === void 0 ? this.units : units);
  };
  Context2d$Gradient.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.x0) | 0;
    result = result * 31 + Kotlin.hashCode(this.y0) | 0;
    result = result * 31 + Kotlin.hashCode(this.r0) | 0;
    result = result * 31 + Kotlin.hashCode(this.x1) | 0;
    result = result * 31 + Kotlin.hashCode(this.y1) | 0;
    result = result * 31 + Kotlin.hashCode(this.r1) | 0;
    result = result * 31 + Kotlin.hashCode(this.stops) | 0;
    result = result * 31 + Kotlin.hashCode(this.colors) | 0;
    result = result * 31 + Kotlin.hashCode(this.cycle) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.interpolationMethod) | 0;
    result = result * 31 + Kotlin.hashCode(this.units) | 0;
    return result;
  };
  Context2d$Gradient.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.x0, other.x0) && Kotlin.equals(this.y0, other.y0) && Kotlin.equals(this.r0, other.r0) && Kotlin.equals(this.x1, other.x1) && Kotlin.equals(this.y1, other.y1) && Kotlin.equals(this.r1, other.r1) && Kotlin.equals(this.stops, other.stops) && Kotlin.equals(this.colors, other.colors) && Kotlin.equals(this.cycle, other.cycle) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.interpolationMethod, other.interpolationMethod) && Kotlin.equals(this.units, other.units)))));
  };
  function Context2d$BitmapPaint(bitmap, transform, repeat, smooth) {
    if (repeat === void 0)
      repeat = false;
    if (smooth === void 0)
      smooth = true;
    this.bitmap = bitmap;
    this.transform_jssmr$_0 = transform;
    this.repeat = repeat;
    this.smooth = smooth;
  }
  Object.defineProperty(Context2d$BitmapPaint.prototype, 'transform', {
    get: function () {
      return this.transform_jssmr$_0;
    }
  });
  Context2d$BitmapPaint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapPaint',
    interfaces: [Context2d$TransformedPaint]
  };
  function Context2d$Drawable() {
  }
  Context2d$Drawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Drawable',
    interfaces: []
  };
  function Context2d$BoundsDrawable() {
  }
  Context2d$BoundsDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoundsDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$SizedDrawable() {
  }
  Context2d$SizedDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SizedDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$FuncDrawable(action) {
    this.action = action;
  }
  Context2d$FuncDrawable.prototype.draw_vuz2tk$ = function (c) {
    c.save();
    try {
      this.action(c);
    }
    finally {
      c.restore();
    }
  };
  Context2d$FuncDrawable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FuncDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$lineScaleMode$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineScaleMode', 0, function ($receiver) {
        return $receiver.lineScaleMode;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineScaleMode = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineWidth$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineWidth', 0, function ($receiver) {
        return $receiver.lineWidth;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineWidth = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineCap$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineCap', 0, function ($receiver) {
        return $receiver.lineCap;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineCap = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$strokeStyle$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('strokeStyle', 0, function ($receiver) {
        return $receiver.strokeStyle;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.strokeStyle = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$fillStyle$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('fillStyle', 0, function ($receiver) {
        return $receiver.fillStyle;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.fillStyle = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$font$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('font', 0, function ($receiver) {
        return $receiver.font;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.font = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$verticalAlign$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('verticalAlign', 0, function ($receiver) {
        return $receiver.verticalAlign;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.verticalAlign = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$horizontalAlign$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('horizontalAlign', 0, function ($receiver) {
        return $receiver.horizontalAlign;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.horizontalAlign = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$globalAlpha$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('globalAlpha', 0, function ($receiver) {
        return $receiver.globalAlpha;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.globalAlpha = value;
      }.bind(null, this$Context2d.state));
    };
  }
  Context2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Context2d',
    interfaces: []
  };
  function filled$ObjectLiteral(closure$paint, this$filled) {
    this.closure$paint = closure$paint;
    this.this$filled = this$filled;
    this.$delegate_ytihto$_0 = this$filled;
  }
  filled$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.fillStyle = this.closure$paint;
    this.this$filled.draw_vuz2tk$(c);
    c.fill();
  };
  Object.defineProperty(filled$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.$delegate_ytihto$_0.height;
    }
  });
  Object.defineProperty(filled$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.$delegate_ytihto$_0.width;
    }
  });
  filled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function filled($receiver, paint) {
    return new filled$ObjectLiteral(paint, $receiver);
  }
  function scaled$ObjectLiteral(closure$sx, closure$sy, this$scaled) {
    this.closure$sx = closure$sx;
    this.closure$sy = closure$sy;
    this.this$scaled = this$scaled;
    this.$delegate_7pgslg$_0 = this$scaled;
    var x = this$scaled.width * numberToDouble(closure$sx);
    this.width_mkevfi$_0 = numberToInt(Math_0.abs(x));
    var x_0 = this$scaled.height * numberToDouble(closure$sy);
    this.height_jmlctz$_0 = numberToInt(Math_0.abs(x_0));
  }
  Object.defineProperty(scaled$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_mkevfi$_0;
    }
  });
  Object.defineProperty(scaled$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_jmlctz$_0;
    }
  });
  scaled$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.scale_lu1900$(numberToDouble(this.closure$sx), numberToDouble(this.closure$sy));
    this.this$scaled.draw_vuz2tk$(c);
  };
  scaled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function scaled($receiver, sx, sy) {
    if (sx === void 0)
      sx = 1.0;
    if (sy === void 0)
      sy = sx;
    return new scaled$ObjectLiteral(sx, sy, $receiver);
  }
  function translated$ObjectLiteral(closure$tx, closure$ty, this$translated) {
    this.closure$tx = closure$tx;
    this.closure$ty = closure$ty;
    this.this$translated = this$translated;
    this.$delegate_rdveew$_0 = this$translated;
  }
  translated$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.translate_lu1900$(numberToDouble(this.closure$tx), numberToDouble(this.closure$ty));
    this.this$translated.draw_vuz2tk$(c);
  };
  Object.defineProperty(translated$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.$delegate_rdveew$_0.height;
    }
  });
  Object.defineProperty(translated$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.$delegate_rdveew$_0.width;
    }
  });
  translated$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function translated($receiver, tx, ty) {
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = tx;
    return new translated$ObjectLiteral(tx, ty, $receiver);
  }
  function render_0($receiver) {
    var image = NativeImage_0($receiver.width, $receiver.height);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function GraphicsPath(commands, data, winding) {
    if (commands === void 0)
      commands = new IntArrayList();
    if (data === void 0)
      data = new DoubleArrayList();
    if (winding === void 0)
      winding = VectorPath$Winding.EVEN_ODD;
    VectorPath.call(this, commands, data, winding);
  }
  Object.defineProperty(GraphicsPath.prototype, 'width', {
    get: function () {
      return numberToInt(this.getBounds_iqjpvb$().width);
    }
  });
  Object.defineProperty(GraphicsPath.prototype, 'height', {
    get: function () {
      return numberToInt(this.getBounds_iqjpvb$().height);
    }
  });
  GraphicsPath.prototype.draw_vuz2tk$ = function (c) {
    c.state.path.write_3wv7u0$(this);
  };
  GraphicsPath.prototype.clone = function () {
    return new GraphicsPath(IntArrayList_init(this.commands), DoubleArrayList_init(this.data), this.winding);
  };
  GraphicsPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphicsPath',
    interfaces: [Context2d$SizedDrawable, VectorPath]
  };
  function SvgBuilder(bounds, scale) {
    this.bounds = bounds;
    this.scale = scale;
    this.defs = ArrayList_init_0();
    this.nodes = ArrayList_init_0();
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  SvgBuilder.prototype.toXml = function () {
    return Xml.Companion.Tag_imnfz6$('svg', linkedMapOf([to('width', get_niceStr_1(this.bounds.width * this.scale) + 'px'), to('height', get_niceStr_1(this.bounds.height * this.scale) + 'px'), to('viewBox', '0 0 ' + get_niceStr_1(this.bounds.width * this.scale) + ' ' + get_niceStr_1(this.bounds.height * this.scale)), to('xmlns', 'http://www.w3.org/2000/svg'), to('xmlns:xlink', 'http://www.w3.org/1999/xlink')]), listOf_0([Xml.Companion.Tag_imnfz6$('defs', emptyMap(), this.defs), Xml.Companion.Tag_imnfz6$('g', mapOf_0(to('transform', toSvg((new Matrix2d()).translate_lu1900$(-this.bounds.x, -this.bounds.y).scale_lu1900$(this.scale, this.scale)))), this.nodes)]));
  };
  SvgBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgBuilder',
    interfaces: []
  };
  function toSvg($receiver) {
    var block$result;
    var tmp$;
    tmp$ = $receiver.getType();
    if (equals(tmp$, Matrix2d$Type.IDENTITY)) {
      block$result = 'translate()';
    }
     else if (equals(tmp$, Matrix2d$Type.TRANSLATE)) {
      block$result = 'translate(' + get_niceStr_1($receiver.tx) + ', ' + get_niceStr_1($receiver.ty) + ')';
    }
     else if (equals(tmp$, Matrix2d$Type.SCALE)) {
      block$result = 'scale(' + get_niceStr_1($receiver.a) + ', ' + get_niceStr_1($receiver.d) + ')';
    }
     else if (equals(tmp$, Matrix2d$Type.SCALE_TRANSLATE)) {
      block$result = 'translate(' + get_niceStr_1($receiver.tx) + ', ' + get_niceStr_1($receiver.ty) + ') scale(' + get_niceStr_1($receiver.a) + ', ' + get_niceStr_1($receiver.d) + ')';
    }
     else {
      block$result = 'matrix(' + get_niceStr_1($receiver.a) + ', ' + get_niceStr_1($receiver.b) + ', ' + get_niceStr_1($receiver.c) + ', ' + get_niceStr_1($receiver.d) + ', ' + get_niceStr_1($receiver.tx) + ', ' + get_niceStr_1($receiver.ty) + ')';
    }
    return block$result;
  }
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  function toString_2($receiver, dplaces, skipTrailingZeros) {
    if (skipTrailingZeros === void 0)
      skipTrailingZeros = false;
    var res = $receiver.toString();
    var parts = split(res, Kotlin.charArrayOf(46), void 0, 2);
    var integral = 0 >= 0 && 0 <= get_lastIndex(parts) ? parts.get_za3lpa$(0) : '0';
    var decimal = 1 >= 0 && 1 <= get_lastIndex(parts) ? parts.get_za3lpa$(1) : '1';
    if (dplaces === 0)
      return integral;
    var out = integral + '.' + substr_0(decimal + repeat('0', dplaces), 0, dplaces);
    if (skipTrailingZeros) {
      while (endsWith(out, 48)) {
        var $receiver_0 = out;
        var endIndex = out.length - 1 | 0;
        out = $receiver_0.substring(0, endIndex);
      }
      if (endsWith(out, 46)) {
        var $receiver_1 = out;
        var endIndex_0 = out.length - 1 | 0;
        out = $receiver_1.substring(0, endIndex_0);
      }
    }
    return out;
  }
  function toSvgPathString$fixX(closure$decimalPlaces) {
    return function ($receiver) {
      return toString_2($receiver, closure$decimalPlaces, true);
    };
  }
  function toSvgPathString$fixY(closure$decimalPlaces) {
    return function ($receiver) {
      return toString_2($receiver, closure$decimalPlaces, true);
    };
  }
  function toSvgPathString($receiver, separator, decimalPlaces) {
    if (separator === void 0)
      separator = ' ';
    if (decimalPlaces === void 0)
      decimalPlaces = 1;
    var parts = ArrayList_init_0();
    var fixX = toSvgPathString$fixX(decimalPlaces);
    var fixY = toSvgPathString$fixY(decimalPlaces);
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = $receiver.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      if (cmd === VectorPath.Command.MOVE_TO) {
        var x = $receiver.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        var y = $receiver.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
        var element = 'M' + fixX(x) + ' ' + fixY(y);
        parts.add_11rb$(element);
      }
       else if (cmd === VectorPath.Command.LINE_TO) {
        var x_0 = $receiver.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
        var y_0 = $receiver.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
        var element_0 = 'L' + fixX(x_0) + ' ' + fixY(y_0);
        parts.add_11rb$(element_0);
      }
       else if (cmd === VectorPath.Command.QUAD_TO) {
        var x1 = $receiver.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
        var y1 = $receiver.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
        var x2 = $receiver.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
        var y2 = $receiver.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
        var element_1 = 'Q' + fixX(x1) + ' ' + fixY(y1) + ', ' + fixX(x2) + ' ' + fixY(y2);
        parts.add_11rb$(element_1);
      }
       else if (cmd === VectorPath.Command.BEZIER_TO) {
        var x1_0 = $receiver.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
        var y1_0 = $receiver.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
        var x2_0 = $receiver.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
        var y2_0 = $receiver.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
        var x3 = $receiver.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
        var y3 = $receiver.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
        var element_2 = 'C' + fixX(x1_0) + ' ' + fixY(y1_0) + ', ' + fixX(x2_0) + ' ' + fixY(y2_0) + ', ' + fixX(x3) + ' ' + fixY(y3);
        parts.add_11rb$(element_2);
      }
       else if (cmd === VectorPath.Command.CLOSE) {
        parts.add_11rb$('Z');
      }
    }
    return joinToString(parts, '');
  }
  function Shape() {
  }
  Shape.prototype.buildSvg_b7xfbk$ = function (svg) {
  };
  Shape.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Shape',
    interfaces: [Context2d$Drawable]
  };
  function getBounds($receiver, out) {
    if (out === void 0)
      out = new Rectangle();
    var bb = new BoundsBuilder();
    $receiver.addBounds_w97n1m$(bb);
    bb.getBounds_2da8yn$(out);
    return out;
  }
  function toSvg_0($receiver, scale) {
    if (scale === void 0)
      scale = 1.0;
    var $receiver_0 = new SvgBuilder(getBounds($receiver), scale);
    $receiver.buildSvg_b7xfbk$($receiver_0);
    return $receiver_0.toXml();
  }
  function StyledShape() {
  }
  StyledShape.prototype.addBounds_w97n1m$ = function (bb) {
    this.path.addBounds_w97n1m$(bb);
  };
  StyledShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$ = svg.nodes;
    var element = Xml.Companion.Tag_imnfz6$('path', plus_0(mapOf_0(to('d', toSvgPathString(this.path))), this.getSvgXmlAttributes_b7xfbk$(svg)), emptyList());
    tmp$.add_11rb$(element);
  };
  StyledShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return emptyMap();
  };
  StyledShape.prototype.draw_vuz2tk$ = function (c) {
    var t = c.state.transform;
    var a = t.a;
    var b = t.b;
    var c_0 = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      c.transform_yx07kl$(this.transform);
      c.beginPath();
      this.path.draw_vuz2tk$(c);
      if (this.clip != null) {
        ensureNotNull(this.clip).draw_vuz2tk$(c);
        c.clip();
      }
      this.drawInternal_vuz2tk$(c);
    }
    finally {
      t.setTo_15yvbs$(a, b, c_0, d, tx, ty);
    }
  };
  StyledShape.prototype.drawInternal_vuz2tk$ = function (c) {
  };
  StyledShape.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledShape',
    interfaces: [Shape]
  };
  function colorToSvg(color) {
    var r = RGBA_getInstance().getR_za3lpa$(color);
    var g = RGBA_getInstance().getG_za3lpa$(color);
    var b = RGBA_getInstance().getB_za3lpa$(color);
    var af = RGBA_getInstance().getAf_za3lpa$(color);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + af + ')';
  }
  function toSvg_1($receiver, svg) {
    var tmp$;
    var id = svg.defs.size;
    if (Kotlin.isType($receiver, Context2d$Gradient)) {
      var $receiver_0 = until(0, $receiver.numberOfStops);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1 = destination.add_11rb$;
        var ratio = $receiver.stops.get_za3lpa$(item);
        var color = $receiver.colors.get_za3lpa$(item);
        tmp$_1.call(destination, Xml.Companion.Tag_imnfz6$('stop', mapOf([to('offset', (ratio * 100).toString() + '%'), to('stop-color', colorToSvg(color))]), emptyList()));
      }
      var stops = destination;
      if (Kotlin.isType($receiver, Context2d$Gradient)) {
        tmp$ = $receiver.kind;
        if (equals(tmp$, Context2d$Gradient$Kind$LINEAR_getInstance())) {
          var $receiver_1 = svg.defs;
          var element = Xml.Companion.Tag_imnfz6$('linearGradient', mapOf([to('id', 'def' + id), to('x1', $receiver.x0.toString()), to('y1', $receiver.y0.toString()), to('x2', $receiver.x1.toString()), to('y2', $receiver.y1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
          $receiver_1.add_11rb$(element);
        }
         else if (equals(tmp$, Context2d$Gradient$Kind$RADIAL_getInstance())) {
          var $receiver_2 = svg.defs;
          var element_0 = Xml.Companion.Tag_imnfz6$('radialGradient', mapOf([to('id', 'def' + id), to('cx', $receiver.x0.toString()), to('cy', $receiver.y0.toString()), to('fx', $receiver.x1.toString()), to('fy', $receiver.y1.toString()), to('r', $receiver.r1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
          $receiver_2.add_11rb$(element_0);
        }
      }
      return 'url(#def' + id + ')';
    }
     else if (Kotlin.isType($receiver, Context2d$BitmapPaint)) {
      var tmp$_2 = svg.defs;
      var element_1 = Xml.Companion.Tag_imnfz6$('pattern', mapOf([to('id', 'def' + id), to('patternUnits', 'userSpaceOnUse'), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString()), to('patternTransform', toSvg($receiver.transform))]), listOf(Xml.Companion.Tag_imnfz6$('image', mapOf([to('xlink:href', toUri($receiver.bitmap)), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString())]), emptyList())));
      tmp$_2.add_11rb$(element_1);
      return 'url(#def' + id + ')';
    }
     else if (Kotlin.isType($receiver, Context2d$Color))
      return colorToSvg($receiver.color);
    else
      return 'red';
  }
  function FillShape(path, clip, paint, transform) {
    this.path_2357gs$_0 = path;
    this.clip_1w6on5$_0 = clip;
    this.paint_6bthi3$_0 = paint;
    this.transform_dukfqh$_0 = transform;
  }
  Object.defineProperty(FillShape.prototype, 'path', {
    get: function () {
      return this.path_2357gs$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'clip', {
    get: function () {
      return this.clip_1w6on5$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'paint', {
    get: function () {
      return this.paint_6bthi3$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'transform', {
    get: function () {
      return this.transform_dukfqh$_0;
    }
  });
  FillShape.prototype.drawInternal_vuz2tk$ = function (c) {
    c.fill_i8h3xk$(this.paint);
  };
  FillShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus_0(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf_0(to('fill', toSvg_1(this.paint, svg))));
  };
  FillShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FillShape',
    interfaces: [StyledShape]
  };
  FillShape.prototype.component1 = function () {
    return this.path;
  };
  FillShape.prototype.component2 = function () {
    return this.clip;
  };
  FillShape.prototype.component3 = function () {
    return this.paint;
  };
  FillShape.prototype.component4 = function () {
    return this.transform;
  };
  FillShape.prototype.copy_g3wweg$ = function (path, clip, paint, transform) {
    return new FillShape(path === void 0 ? this.path : path, clip === void 0 ? this.clip : clip, paint === void 0 ? this.paint : paint, transform === void 0 ? this.transform : transform);
  };
  FillShape.prototype.toString = function () {
    return 'FillShape(path=' + Kotlin.toString(this.path) + (', clip=' + Kotlin.toString(this.clip)) + (', paint=' + Kotlin.toString(this.paint)) + (', transform=' + Kotlin.toString(this.transform)) + ')';
  };
  FillShape.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.paint) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    return result;
  };
  FillShape.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.paint, other.paint) && Kotlin.equals(this.transform, other.transform)))));
  };
  function PolylineShape(path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    this.path_szk01b$_0 = path;
    this.clip_sslh7o$_0 = clip;
    this.paint_osfjj2$_0 = paint;
    this.transform_eb3l64$_0 = transform;
    this.thickness = thickness;
    this.pixelHinting = pixelHinting;
    this.scaleMode = scaleMode;
    this.startCaps = startCaps;
    this.endCaps = endCaps;
    this.joints = joints;
    this.miterLimit = miterLimit;
  }
  Object.defineProperty(PolylineShape.prototype, 'path', {
    get: function () {
      return this.path_szk01b$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'clip', {
    get: function () {
      return this.clip_sslh7o$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'paint', {
    get: function () {
      return this.paint_osfjj2$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'transform', {
    get: function () {
      return this.transform_eb3l64$_0;
    }
  });
  PolylineShape.prototype.drawInternal_vuz2tk$ = function (c) {
    c.lineScaleMode = this.scaleMode;
    c.lineWidth = this.thickness;
    c.lineCap = this.endCaps;
    c.stroke_i8h3xk$(this.paint);
  };
  PolylineShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus_0(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf([to('stroke-width', this.thickness.toString()), to('stroke', toSvg_1(this.paint, svg))]));
  };
  PolylineShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolylineShape',
    interfaces: [StyledShape]
  };
  PolylineShape.prototype.component1 = function () {
    return this.path;
  };
  PolylineShape.prototype.component2 = function () {
    return this.clip;
  };
  PolylineShape.prototype.component3 = function () {
    return this.paint;
  };
  PolylineShape.prototype.component4 = function () {
    return this.transform;
  };
  PolylineShape.prototype.component5 = function () {
    return this.thickness;
  };
  PolylineShape.prototype.component6 = function () {
    return this.pixelHinting;
  };
  PolylineShape.prototype.component7 = function () {
    return this.scaleMode;
  };
  PolylineShape.prototype.component8 = function () {
    return this.startCaps;
  };
  PolylineShape.prototype.component9 = function () {
    return this.endCaps;
  };
  PolylineShape.prototype.component10 = function () {
    return this.joints;
  };
  PolylineShape.prototype.component11 = function () {
    return this.miterLimit;
  };
  PolylineShape.prototype.copy_c5uspr$ = function (path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    return new PolylineShape(path === void 0 ? this.path : path, clip === void 0 ? this.clip : clip, paint === void 0 ? this.paint : paint, transform === void 0 ? this.transform : transform, thickness === void 0 ? this.thickness : thickness, pixelHinting === void 0 ? this.pixelHinting : pixelHinting, scaleMode === void 0 ? this.scaleMode : scaleMode, startCaps === void 0 ? this.startCaps : startCaps, endCaps === void 0 ? this.endCaps : endCaps, joints === void 0 ? this.joints : joints, miterLimit === void 0 ? this.miterLimit : miterLimit);
  };
  PolylineShape.prototype.toString = function () {
    return 'PolylineShape(path=' + Kotlin.toString(this.path) + (', clip=' + Kotlin.toString(this.clip)) + (', paint=' + Kotlin.toString(this.paint)) + (', transform=' + Kotlin.toString(this.transform)) + (', thickness=' + Kotlin.toString(this.thickness)) + (', pixelHinting=' + Kotlin.toString(this.pixelHinting)) + (', scaleMode=' + Kotlin.toString(this.scaleMode)) + (', startCaps=' + Kotlin.toString(this.startCaps)) + (', endCaps=' + Kotlin.toString(this.endCaps)) + (', joints=' + Kotlin.toString(this.joints)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + ')';
  };
  PolylineShape.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.paint) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.thickness) | 0;
    result = result * 31 + Kotlin.hashCode(this.pixelHinting) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.startCaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.endCaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.joints) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    return result;
  };
  PolylineShape.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.paint, other.paint) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.thickness, other.thickness) && Kotlin.equals(this.pixelHinting, other.pixelHinting) && Kotlin.equals(this.scaleMode, other.scaleMode) && Kotlin.equals(this.startCaps, other.startCaps) && Kotlin.equals(this.endCaps, other.endCaps) && Kotlin.equals(this.joints, other.joints) && Kotlin.equals(this.miterLimit, other.miterLimit)))));
  };
  function CompoundShape(components) {
    this.components = components;
  }
  CompoundShape.prototype.addBounds_w97n1m$ = function (bb) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var component = tmp$.next();
      component.addBounds_w97n1m$(bb);
    }
  };
  CompoundShape.prototype.draw_vuz2tk$ = function (c) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var component = tmp$.next();
      component.draw_vuz2tk$(c);
    }
  };
  CompoundShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var component = tmp$.next();
      component.buildSvg_b7xfbk$(svg);
    }
  };
  CompoundShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompoundShape',
    interfaces: [Shape]
  };
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function SVG_0(root) {
    SVG$Companion_getInstance();
    this.root = root;
    this.logger = Logger.Companion.invoke_61zpoe$('SVG');
    this.x = this.root.int_bm4lxs$('x', 0);
    this.y = this.root.int_bm4lxs$('y', 0);
    this.dwidth = this.root.double_io5o9c$('width', 128.0);
    this.dheight = this.root.double_io5o9c$('height', 128.0);
    var tmp$;
    this.viewBox = (tmp$ = this.root.getString_61zpoe$('viewBox')) != null ? tmp$ : '0 0 ' + this.dwidth + ' ' + this.dheight;
    var $receiver = split(this.viewBox, Kotlin.charArrayOf(32));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      var tmp$_2;
      var tmp$_3;
      tmp$_1.call(destination, (tmp$_2 = toDoubleOrNull(trim(Kotlin.isCharSequence(tmp$_3 = item) ? tmp$_3 : throwCCE()).toString())) != null ? tmp$_2 : 0.0);
    }
    this.viewBoxNumbers = destination;
    var $receiver_0 = this.viewBoxNumbers;
    var $receiver_1 = this.viewBoxNumbers;
    var $receiver_2 = this.viewBoxNumbers;
    var $receiver_3 = this.viewBoxNumbers;
    this.viewBoxRectangle = new Rectangle(0 >= 0 && 0 <= get_lastIndex($receiver_0) ? $receiver_0.get_za3lpa$(0) : 0.0, 1 >= 0 && 1 <= get_lastIndex($receiver_1) ? $receiver_1.get_za3lpa$(1) : 0.0, 2 >= 0 && 2 <= get_lastIndex($receiver_2) ? $receiver_2.get_za3lpa$(2) : this.dwidth, 3 >= 0 && 3 <= get_lastIndex($receiver_3) ? $receiver_3.get_za3lpa$(3) : this.dheight);
    this.defs = HashMap_init();
    this.parseDefs();
  }
  Object.defineProperty(SVG_0.prototype, 'width', {
    get: function () {
      return numberToInt(this.viewBoxRectangle.width);
    }
  });
  Object.defineProperty(SVG_0.prototype, 'height', {
    get: function () {
      return numberToInt(this.viewBoxRectangle.height);
    }
  });
  function SVG$Style() {
    this.props = HashMap_init();
  }
  SVG$Style.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Style',
    interfaces: []
  };
  function SVG$GradientUnits(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SVG$GradientUnits_initFields() {
    SVG$GradientUnits_initFields = function () {
    };
    SVG$GradientUnits$USER_SPACE_ON_USER_instance = new SVG$GradientUnits('USER_SPACE_ON_USER', 0);
    SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance = new SVG$GradientUnits('OBJECT_BOUNDING_BOX', 1);
  }
  var SVG$GradientUnits$USER_SPACE_ON_USER_instance;
  function SVG$GradientUnits$USER_SPACE_ON_USER_getInstance() {
    SVG$GradientUnits_initFields();
    return SVG$GradientUnits$USER_SPACE_ON_USER_instance;
  }
  var SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance;
  function SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance() {
    SVG$GradientUnits_initFields();
    return SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance;
  }
  SVG$GradientUnits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientUnits',
    interfaces: [Enum]
  };
  function SVG$GradientUnits$values() {
    return [SVG$GradientUnits$USER_SPACE_ON_USER_getInstance(), SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance()];
  }
  SVG$GradientUnits.values = SVG$GradientUnits$values;
  function SVG$GradientUnits$valueOf(name) {
    switch (name) {
      case 'USER_SPACE_ON_USER':
        return SVG$GradientUnits$USER_SPACE_ON_USER_getInstance();
      case 'OBJECT_BOUNDING_BOX':
        return SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.format.SVG.GradientUnits.' + name);
    }
  }
  SVG$GradientUnits.valueOf_61zpoe$ = SVG$GradientUnits$valueOf;
  SVG_0.prototype.parsePercent_61zpoe$ = function (str) {
    var tmp$;
    if (endsWith_0(str, '%')) {
      tmp$ = toDouble(substr_0(str, 0, -1)) / 100.0;
    }
     else {
      tmp$ = toDouble(str);
    }
    return tmp$;
  };
  SVG_0.prototype.parseStops_473e7m$ = function (xml) {
    var tmp$;
    var out = ArrayList_init_0();
    tmp$ = xml.children_61zpoe$('stop').iterator();
    while (tmp$.hasNext()) {
      var stop = tmp$.next();
      var offset = this.parsePercent_61zpoe$(stop.str_puj7f4$('offset'));
      var colorStop = NamedColors_getInstance().get_bm4lxs$(stop.str_puj7f4$('stop-color'));
      var alphaStop = stop.double_io5o9c$('stop-opacity', 1.0);
      var element = new Pair(offset, RGBA_getInstance().packRGB_A_vux9f0$(colorStop, numberToInt(alphaStop * 255)));
      out.add_11rb$(element);
    }
    return out;
  };
  SVG_0.prototype.parseDef_473e7m$ = function (def) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var type = def.nameLC;
    if (equals(type, 'lineargradient') || equals(type, 'radialgradient')) {
      var id = def.str_puj7f4$('id').toLowerCase();
      var x0 = def.double_io5o9c$('x1', 0.0);
      var y0 = def.double_io5o9c$('y1', 0.0);
      var x1 = def.double_io5o9c$('x2', 1.0);
      var y1 = def.double_io5o9c$('y2', 1.0);
      var stops = this.parseStops_473e7m$(def);
      var href = def.strNull_61zpoe$('xlink:href');
      if (equals(type, 'lineargradient')) {
        tmp$ = new Context2d$Gradient(Context2d$Gradient$Kind$LINEAR_getInstance(), x0, y0, 0.0, x1, y1, 0.0);
      }
       else {
        var r0 = def.double_io5o9c$('r0', 0.0);
        var r1 = def.double_io5o9c$('r1', 0.0);
        tmp$ = new Context2d$Gradient(Context2d$Gradient$Kind$RADIAL_getInstance(), x0, y0, r0, x1, y1, r1);
      }
      var g = tmp$;
      if ((tmp$_0 = def.strNull_61zpoe$('xlink:href')) != null) {
        var tmp$_3;
        var id_0 = trim(tmp$_0, Kotlin.charArrayOf(35));
        var original = (tmp$_3 = this.defs.get_11rb$(id_0)) == null || Kotlin.isType(tmp$_3, Context2d$Gradient) ? tmp$_3 : null;
        if (original != null) {
          g.stops.add_avch8c$(original.stops);
          g.colors.add_38vc8i$(original.colors);
        }
      }
      tmp$_1 = stops.iterator();
      while (tmp$_1.hasNext()) {
        var tmp$_4 = tmp$_1.next();
        var offset = tmp$_4.component1()
        , color = tmp$_4.component2();
        g.addColorStop_12fank$(offset, color);
      }
      if ((tmp$_2 = def.getString_61zpoe$('gradientTransform')) != null) {
        g.transform.premultiply_7f5bc6$(this.parseTransform_61zpoe$(tmp$_2));
      }
      this.defs.put_xwzc9p$(id, g);
    }
     else if (!equals(type, 'style'))
      if (!equals(type, '_text_')) {
        println("Unhandled def: '" + type + "'");
      }
  };
  SVG_0.prototype.parseDefs = function () {
    var tmp$;
    var $receiver = get_allChildren(this.root.get_61zpoe$('defs'));
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!get_isComment(element))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var def = tmp$.next();
      this.parseDef_473e7m$(def);
    }
  };
  SVG_0.prototype.draw_vuz2tk$ = function (c) {
    c.save();
    try {
      c.strokeStyle = Context2d$None_getInstance();
      c.fillStyle = Context2d$None_getInstance();
      this.drawElement_97uusy$(this.root, c);
    }
    finally {
      c.restore();
    }
  };
  SVG_0.prototype.drawChildren_97uusy$ = function (xml, c) {
    var tmp$;
    tmp$ = xml.allChildren.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      this.drawElement_97uusy$(child, c);
    }
  };
  SVG_0.prototype.parseFillStroke_vgfctv$ = function (c, str2, bounds) {
    var tmp$;
    var str = str2.toLowerCase();
    if (startsWith(str, 'url(')) {
      var urlPattern = substr_0(str, 4, -1);
      if (startsWith(urlPattern, '#')) {
        var idName = substr(urlPattern, 1).toLowerCase();
        var def = this.defs.get_11rb$(idName);
        if (def == null) {
          println(this.defs);
          println("Can't find svg definition '" + idName + "'");
        }
        tmp$ = def != null ? def : c.none;
      }
       else {
        println('Unsupported ' + str);
        tmp$ = c.none;
      }
    }
     else {
      if (equals(str, 'none'))
        tmp$ = c.none;
      else
        tmp$ = c.createColor_za3lpa$(NamedColors_getInstance().get_bm4lxs$(str));
    }
    var res = tmp$;
    if (Kotlin.isType(res, Context2d$Gradient)) {
      var m = new Matrix2d();
      m.scale_lu1900$(bounds.width, bounds.height);
      var out = res.applyMatrix_yx07kl$(m);
      return out;
    }
     else {
      return res;
    }
  };
  function SVG$drawElement$lambda$lambda(closure$ss) {
    return function () {
      return closure$ss.hasMore;
    };
  }
  var StrReader$readWhile$lambda = wrapFunction(function () {
    return function (closure$filter, this$StrReader) {
      return function () {
        var $this = this$StrReader;
        var filter = closure$filter;
        while ($this.hasMore && filter($this.peekChar()))
          $this.readChar();
        return Unit;
      };
    };
  });
  function SVG$drawElement$lambda$lambda_0(closure$ss) {
    return function (it) {
      var $this = closure$ss;
      while (true) {
        var tmp$ = $this.hasMore;
        if (tmp$) {
          tmp$ = !get_isNumeric(unboxChar($this.peekChar()));
        }
        if (!tmp$)
          break;
        $this.readChar();
      }
      var $this_0 = closure$ss;
      var tmp$_0;
      var start = $this_0.pos;
      while (true) {
        var tmp$_1 = $this_0.hasMore;
        if (tmp$_1) {
          tmp$_1 = get_isNumeric(unboxChar($this_0.peekChar()));
        }
        if (!tmp$_1)
          break;
        $this_0.readChar();
      }
      var end = $this_0.pos;
      var out = toDouble((tmp$_0 = end > start ? $this_0.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '');
      var $this_1 = closure$ss;
      while (true) {
        var tmp$_2 = $this_1.hasMore;
        if (tmp$_2) {
          tmp$_2 = !get_isNumeric(unboxChar($this_1.peekChar()));
        }
        if (!tmp$_2)
          break;
        $this_1.readChar();
      }
      return out;
    };
  }
  var LogLevel = $module$klogger_js.com.soywiz.klogger.LogLevel;
  function SVG$drawElement$lambda$dumpTokens(closure$tokens, this$SVG, this$) {
    return function () {
      var closure$tokens_0 = closure$tokens;
      var this$SVG_0 = this$SVG;
      var tmp$;
      tmp$ = withIndex_0(closure$tokens_0).iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var n = tmp$_0.component1()
        , token = tmp$_0.component2();
        var $this = this$SVG_0.logger;
        var level = LogLevel.WARN;
        if ($this.isEnabled_ci8eq1$(level)) {
          $this.actualLog_t189ph$(level, '- ' + n + ': ' + token);
        }
      }
    };
  }
  function SVG$drawElement$lambda$isNextNumber(closure$tl) {
    return function () {
      return closure$tl.hasMore ? Kotlin.isType(closure$tl.peek(), SVG$PathTokenNumber) : false;
    };
  }
  function SVG$drawElement$lambda$readNumber(closure$tl, this$SVG, closure$dumpTokens) {
    return function () {
      while (closure$tl.hasMore) {
        var token = closure$tl.read();
        if (Kotlin.isType(token, SVG$PathTokenNumber))
          return token.value;
        var $this = this$SVG.logger;
        var level = LogLevel.WARN;
        if ($this.isEnabled_ci8eq1$(level)) {
          $this.actualLog_t189ph$(level, 'Invalid path (expected number but found ' + token + ') at ' + (closure$tl.position - 1 | 0));
        }
        closure$dumpTokens();
      }
      return 0.0;
    };
  }
  function SVG$drawElement$lambda$readNextTokenCmd(closure$tl, this$SVG, closure$dumpTokens) {
    return function () {
      while (closure$tl.hasMore) {
        var token = closure$tl.read();
        if (Kotlin.isType(token, SVG$PathTokenCmd))
          return unboxChar(token.id);
        var $this = this$SVG.logger;
        var level = LogLevel.WARN;
        if ($this.isEnabled_ci8eq1$(level)) {
          $this.actualLog_t189ph$(level, 'Invalid path (expected command but found ' + token + ') at ' + (closure$tl.position - 1 | 0));
        }
        closure$dumpTokens();
      }
      return null;
    };
  }
  var Context2d$keepApply$lambda$lambda = wrapFunction(function () {
    return function (closure$callback, this$) {
      return function () {
        closure$callback(this$);
        return Unit;
      };
    };
  });
  var Context2d$keepApply$lambda = wrapFunction(function () {
    return function (closure$callback) {
      return function ($receiver) {
        $receiver.save();
        try {
          closure$callback($receiver);
        }
        finally {
          $receiver.restore();
        }
        return Unit;
      };
    };
  });
  SVG_0.prototype.drawElement_97uusy$ = function (xml, c) {
    c.save();
    try {
      var tmp$, tmp$_0, tmp$_1;
      var bounds = new Rectangle();
      var nodeName = xml.nameLC;
      if (!equals(nodeName, '_text_'))
        if (equals(nodeName, 'svg'))
          this.drawChildren_97uusy$(xml, c);
        else if (equals(nodeName, 'lineargradient') || equals(nodeName, 'radialgradient'))
          this.parseDef_473e7m$(xml);
        else if (equals(nodeName, 'rect')) {
          var x = xml.double_io5o9c$('x');
          var y = xml.double_io5o9c$('y');
          var width = xml.double_io5o9c$('width');
          var height = xml.double_io5o9c$('height');
          var rx = xml.double_io5o9c$('rx');
          var ry = xml.double_io5o9c$('ry');
          bounds.setTo_6y0v78$(x, y, width, height);
          c.roundRect_15yvbs$(x, y, width, height, rx, ry);
        }
         else if (equals(nodeName, 'circle')) {
          var cx = xml.double_io5o9c$('cx');
          var cy = xml.double_io5o9c$('cy');
          var radius = xml.double_io5o9c$('r');
          c.circle_yvo9jy$(cx, cy, radius);
          bounds.setBounds_6y0v78$(cx - radius, cy - radius, cx + radius, cy + radius);
        }
         else if (equals(nodeName, 'polyline') || equals(nodeName, 'polygon')) {
          c.beginPath();
          var ss = new StrReader(xml.str_puj7f4$('points'));
          var pps = new ListReader(mapWhile(SVG$drawElement$lambda$lambda(ss), SVG$drawElement$lambda$lambda_0(ss)));
          var path = new GraphicsPath();
          var edges = 0;
          path.moveTo_lu1900$(pps.read(), pps.read());
          while (pps.hasMore) {
            var x_0 = pps.read();
            var y_0 = pps.read();
            path.lineTo_lu1900$(x_0, y_0);
            edges = edges + 1 | 0;
          }
          if (equals(nodeName, 'polygon'))
            path.close();
          path.getBounds_iqjpvb$(bounds);
          c.path_lcui0n$(path);
        }
         else if (equals(nodeName, 'line')) {
          c.beginPath();
          var x1 = xml.double_io5o9c$('x1');
          var y1 = xml.double_io5o9c$('y1');
          var x2 = xml.double_io5o9c$('x2');
          var y2 = xml.double_io5o9c$('y2');
          c.moveTo_lu1900$(x1, y1);
          c.lineTo_lu1900$(x2, y2);
          bounds.setBounds_6y0v78$(x1, y1, x2, y2);
        }
         else if (!equals(nodeName, 'g'))
          if (equals(nodeName, 'text'))
            c.fillText_ai6r6m$(xml.text, xml.double_io5o9c$('x') + xml.double_io5o9c$('dx'), xml.double_io5o9c$('y') + xml.double_io5o9c$('dy'));
          else if (equals(nodeName, 'path')) {
            var d = xml.str_puj7f4$('d');
            var tokens = SVG$Companion_getInstance().tokenizePath_61zpoe$(d);
            var tl = new ListReader(tokens);
            var dumpTokens = SVG$drawElement$lambda$dumpTokens(tokens, this, c);
            var isNextNumber = SVG$drawElement$lambda$isNextNumber(tl);
            var readNumber = SVG$drawElement$lambda$readNumber(tl, this, dumpTokens);
            var readNextTokenCmd = SVG$drawElement$lambda$readNextTokenCmd(tl, this, dumpTokens);
            c.beginPath();
            while (tl.hasMore) {
              tmp$ = readNextTokenCmd();
              if (tmp$ == null) {
                break;
              }
              var cmd = tmp$;
              if (cmd === 77) {
                c.moveTo_lu1900$(readNumber(), readNumber());
                while (isNextNumber())
                  c.lineTo_lu1900$(readNumber(), readNumber());
              }
               else if (cmd === 109) {
                c.rMoveTo_lu1900$(readNumber(), readNumber());
                while (isNextNumber())
                  c.rLineTo_lu1900$(readNumber(), readNumber());
              }
               else if (cmd === 76)
                while (isNextNumber())
                  c.lineTo_lu1900$(readNumber(), readNumber());
              else if (cmd === 108)
                while (isNextNumber())
                  c.rLineTo_lu1900$(readNumber(), readNumber());
              else if (cmd === 72)
                while (isNextNumber())
                  c.lineToH_14dthe$(readNumber());
              else if (cmd === 104)
                while (isNextNumber())
                  c.rLineToH_14dthe$(readNumber());
              else if (cmd === 86)
                while (isNextNumber())
                  c.lineToV_14dthe$(readNumber());
              else if (cmd === 118)
                while (isNextNumber())
                  c.rLineToV_14dthe$(readNumber());
              else if (cmd === 81)
                while (isNextNumber())
                  c.quadraticCurveTo_6y0v78$(readNumber(), readNumber(), readNumber(), readNumber());
              else if (cmd === 113)
                while (isNextNumber())
                  c.rQuadraticCurveTo_6y0v78$(readNumber(), readNumber(), readNumber(), readNumber());
              else if (cmd === 67)
                while (isNextNumber())
                  c.bezierCurveTo_15yvbs$(readNumber(), readNumber(), readNumber(), readNumber(), readNumber(), readNumber());
              else if (cmd === 99)
                while (isNextNumber())
                  c.rBezierCurveTo_15yvbs$(readNumber(), readNumber(), readNumber(), readNumber(), readNumber(), readNumber());
              else if (cmd === 90)
                c.closePath();
              else if (cmd === 122)
                c.closePath();
              else {
                throw new NotImplementedError_init('An operation is not implemented: ' + ("Unsupported command '" + String.fromCharCode(cmd) + "' : Parsed: '" + toSvgPathString(c.state.path) + "', Original: '" + d + "'"));
              }
            }
            var $this = this.logger;
            var level = LogLevel.TRACE;
            if ($this.isEnabled_ci8eq1$(level)) {
              $this.actualLog_t189ph$(level, "Parsed SVG Path: '" + toSvgPathString(c.state.path) + "'");
            }
            var $this_0 = this.logger;
            var level_0 = LogLevel.TRACE;
            if ($this_0.isEnabled_ci8eq1$(level_0)) {
              $this_0.actualLog_t189ph$(level_0, "Original SVG Path: '" + d + "'");
            }
            var $this_1 = this.logger;
            var level_1 = LogLevel.TRACE;
            if ($this_1.isEnabled_ci8eq1$(level_1)) {
              $this_1.actualLog_t189ph$(level_1, 'Points: ' + c.state.path.getPoints());
            }
            c.getBounds_2da8yn$(bounds);
          }
      if (xml.hasAttribute_61zpoe$('stroke-width')) {
        c.lineWidth = xml.double_io5o9c$('stroke-width', 1.0);
      }
      if (xml.hasAttribute_61zpoe$('stroke')) {
        c.strokeStyle = this.parseFillStroke_vgfctv$(c, xml.str_puj7f4$('stroke'), bounds);
      }
      if (xml.hasAttribute_61zpoe$('fill'))
        this.applyFill_vgfctv$(c, xml.str_puj7f4$('fill'), bounds);
      if (xml.hasAttribute_61zpoe$('font-size')) {
        c.font = c.font.copy_io5o9c$(void 0, xml.double_io5o9c$('font-size'));
      }
      if (xml.hasAttribute_61zpoe$('font-family')) {
        c.font = c.font.copy_io5o9c$(xml.str_puj7f4$('font-family'));
      }
      if (xml.hasAttribute_61zpoe$('style')) {
        this.applyStyle_0(c, SVG$SvgStyle$Companion_getInstance().parse_61zpoe$(xml.str_puj7f4$('style')), bounds);
      }
      if (xml.hasAttribute_61zpoe$('transform')) {
        this.applyTransform_0(c.state, this.parseTransform_61zpoe$(xml.str_puj7f4$('transform')));
      }
      if (xml.hasAttribute_61zpoe$('text-anchor')) {
        tmp$_0 = xml.str_puj7f4$('text-anchor').toLowerCase();
        if (equals(tmp$_0, 'left'))
          tmp$_1 = Context2d$HorizontalAlign$LEFT_getInstance();
        else if (equals(tmp$_0, 'center') || equals(tmp$_0, 'middle'))
          tmp$_1 = Context2d$HorizontalAlign$CENTER_getInstance();
        else if (equals(tmp$_0, 'right'))
          tmp$_1 = Context2d$HorizontalAlign$RIGHT_getInstance();
        else
          tmp$_1 = c.horizontalAlign;
        c.horizontalAlign = tmp$_1;
      }
      if (xml.hasAttribute_61zpoe$('fill-opacity')) {
        c.globalAlpha = xml.double_io5o9c$('fill-opacity', 1.0);
      }
      if (equals(nodeName, 'g'))
        this.drawChildren_97uusy$(xml, c);
      c.fillStroke();
    }
    finally {
      c.restore();
    }
    return c;
  };
  SVG_0.prototype.applyFill_vgfctv$ = function (c, str, bounds) {
    c.fillStyle = this.parseFillStroke_vgfctv$(c, str, bounds);
  };
  SVG_0.prototype.applyTransform_0 = function (state, transform) {
    state.transform.premultiply_7f5bc6$(transform);
  };
  SVG_0.prototype.applyStyle_0 = function (c, style, bounds) {
    var tmp$;
    tmp$ = style.styles.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      if (equals(k, 'fill'))
        this.applyFill_vgfctv$(c, v, bounds);
      else {
        var $this = this.logger;
        var level = LogLevel.WARN;
        if ($this.isEnabled_ci8eq1$(level)) {
          $this.actualLog_t189ph$(level, 'Unsupported style ' + k + ' in css');
        }
      }
    }
  };
  function SVG$parseTransform$double(closure$doubleArgs) {
    return function (index) {
      var $receiver = closure$doubleArgs;
      return index >= 0 && index <= get_lastIndex($receiver) ? $receiver.get_za3lpa$(index) : 0.0;
    };
  }
  SVG_0.prototype.parseTransform_61zpoe$ = function (str) {
    var tokens = SVG$SvgStyle$Companion_getInstance().tokenize_61zpoe$(str);
    var tr = new ListReader(tokens);
    var out = new Matrix2d();
    while (tr.hasMore) {
      var id = tr.read().toLowerCase();
      var args = ArrayList_init_0();
      if (equals(tr.peek(), '(')) {
        tr.read();
        while (true) {
          if (equals(tr.peek(), ')')) {
            tr.read();
            break;
          }
          if (equals(tr.peek(), ',')) {
            tr.read();
            continue;
          }
          var element = tr.read();
          args.add_11rb$(element);
        }
      }
      var destination = ArrayList_init_0(collectionSizeOrDefault(args, 10));
      var tmp$;
      tmp$ = args.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$((tmp$_0 = toDoubleOrNull(item)) != null ? tmp$_0 : 0.0);
      }
      var doubleArgs = destination;
      var double = SVG$parseTransform$double(doubleArgs);
      if (equals(id, 'translate'))
        out.pretranslate_lu1900$(double(0), double(1));
      else if (equals(id, 'scale'))
        out.prescale_lu1900$(double(0), double(1));
      else if (equals(id, 'matrix'))
        out.premultiply_15yvbs$(double(0), double(1), double(2), double(3), double(4), double(5));
      else
        invalidOp('Unsupported transform ' + id + ' : ' + args + ' : ' + doubleArgs + ' (' + str + ')');
    }
    return out;
  };
  function SVG$Companion() {
    SVG$Companion_instance = this;
  }
  function SVG$Companion$tokenizePath$skipSeparators($receiver) {
    while (true) {
      var tmp$ = $receiver.hasMore;
      if (tmp$) {
        var it = $receiver.peekChar();
        tmp$ = unboxChar(it) === 44 || unboxChar(it) === 32 || unboxChar(it) === 9 || unboxChar(it) === 10 || unboxChar(it) === 13;
      }
      if (!tmp$)
        break;
      $receiver.readChar();
    }
  }
  function SVG$Companion$tokenizePath$readNumber(closure$skipSeparators) {
    return function ($receiver) {
      var tmp$;
      closure$skipSeparators($receiver);
      var first = {v: true};
      var tmp$_0;
      var start = $receiver.pos;
      while (true) {
        var tmp$_1 = $receiver.hasMore;
        if (tmp$_1) {
          var it = $receiver.peekChar();
          var filter$result;
          if (first.v) {
            first.v = false;
            filter$result = isDigit(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 43;
          }
           else {
            filter$result = isDigit(unboxChar(it)) || unboxChar(it) === 46;
          }
          tmp$_1 = filter$result;
        }
        if (!tmp$_1)
          break;
        $receiver.readChar();
      }
      var end = $receiver.pos;
      var str = (tmp$_0 = end > start ? $receiver.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '';
      if (str.length === 0)
        tmp$ = 0.0;
      else
        try {
          tmp$ = toDouble(str);
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            printStackTrace(e);
            tmp$ = 0.0;
          }
           else
            throw e;
        }
      return tmp$;
    };
  }
  SVG$Companion.prototype.tokenizePath_61zpoe$ = function (str) {
    var sr = new StrReader(str);
    var skipSeparators = SVG$Companion$tokenizePath$skipSeparators;
    var readNumber = SVG$Companion$tokenizePath$readNumber(skipSeparators);
    var out = ArrayList_init_0();
    while (sr.hasMore) {
      skipSeparators(sr);
      var c = unboxChar(sr.peekChar());
      if ((new CharRange(48, 57)).contains_mef7kx$(c) || c === 45 || c === 43) {
        var element = new SVG$PathTokenNumber(readNumber(sr));
        out.add_11rb$(element);
      }
       else {
        var element_0 = new SVG$PathTokenCmd(unboxChar(sr.readChar()));
        out.add_11rb$(element_0);
      }
    }
    return out;
  };
  SVG$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SVG$Companion_instance = null;
  function SVG$Companion_getInstance() {
    if (SVG$Companion_instance === null) {
      new SVG$Companion();
    }
    return SVG$Companion_instance;
  }
  function SVG$PathToken() {
  }
  SVG$PathToken.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PathToken',
    interfaces: []
  };
  function SVG$PathTokenNumber(value) {
    this.value = value;
  }
  SVG$PathTokenNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathTokenNumber',
    interfaces: [SVG$PathToken]
  };
  SVG$PathTokenNumber.prototype.component1 = function () {
    return this.value;
  };
  SVG$PathTokenNumber.prototype.copy_14dthe$ = function (value) {
    return new SVG$PathTokenNumber(value === void 0 ? this.value : value);
  };
  SVG$PathTokenNumber.prototype.toString = function () {
    return 'PathTokenNumber(value=' + Kotlin.toString(this.value) + ')';
  };
  SVG$PathTokenNumber.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SVG$PathTokenNumber.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function SVG$PathTokenCmd(id) {
    this.id = id;
  }
  SVG$PathTokenCmd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathTokenCmd',
    interfaces: [SVG$PathToken]
  };
  SVG$PathTokenCmd.prototype.component1 = function () {
    return this.id;
  };
  SVG$PathTokenCmd.prototype.copy_s8itvh$ = function (id) {
    return new SVG$PathTokenCmd(id === void 0 ? this.id : id);
  };
  SVG$PathTokenCmd.prototype.toString = function () {
    return 'PathTokenCmd(id=' + Kotlin.toString(this.id) + ')';
  };
  SVG$PathTokenCmd.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  SVG$PathTokenCmd.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function SVG$SvgStyle(styles) {
    SVG$SvgStyle$Companion_getInstance();
    if (styles === void 0) {
      styles = HashMap_init();
    }
    this.styles = styles;
  }
  function SVG$SvgStyle$Companion() {
    SVG$SvgStyle$Companion_instance = this;
    this.logger = Logger.Companion.invoke_61zpoe$('SVG');
  }
  SVG$SvgStyle$Companion.prototype.tokenize_61zpoe$ = function (str) {
    var sr = new StrReader(str);
    var out = ArrayList_init_0();
    while (sr.hasMore) {
      while (true) {
        sr.skipSpaces();
        var tmp$;
        var start = sr.pos;
        while (true) {
          var tmp$_0 = sr.hasMore;
          if (tmp$_0) {
            var it = sr.peekChar();
            tmp$_0 = isLetterOrUnderscore(unboxChar(it)) || get_isNumeric(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 35;
          }
          if (!tmp$_0)
            break;
          sr.readChar();
        }
        var end = sr.pos;
        var id = (tmp$ = end > start ? sr.slice_vux9f0$(start, end) : null) != null ? tmp$ : '';
        if (id.length > 0) {
          out.add_11rb$(id);
        }
         else {
          break;
        }
      }
      if (sr.eof)
        break;
      sr.skipSpaces();
      var symbol = unboxChar(sr.read());
      var element = String.fromCharCode(symbol);
      out.add_11rb$(element);
    }
    return out;
  };
  SVG$SvgStyle$Companion.prototype.readId_mr88w2$ = function ($receiver) {
    return $receiver.read();
  };
  SVG$SvgStyle$Companion.prototype.readColon_mr88w2$ = function ($receiver) {
    return expect($receiver, ':');
  };
  SVG$SvgStyle$Companion.prototype.readExpression_mr88w2$ = function ($receiver) {
    return $receiver.read();
  };
  SVG$SvgStyle$Companion.prototype.parse_61zpoe$ = function (str) {
    var tokens = this.tokenize_61zpoe$(str);
    var tr = new ListReader(tokens);
    var style = new SVG$SvgStyle();
    while (tr.hasMore) {
      var id = this.readId_mr88w2$(tr);
      if (tr.eof) {
        var $this = this.logger;
        var level = LogLevel.ERROR;
        if ($this.isEnabled_ci8eq1$(level)) {
          $this.actualLog_t189ph$(level, "EOF. Parsing (ID='" + id + "'): '" + str + "', " + tokens);
        }
        break;
      }
      this.readColon_mr88w2$(tr);
      var rexpr = ArrayList_init_0();
      while (tr.hasMore && !equals(tr.peek(), ';')) {
        var element = this.readExpression_mr88w2$(tr);
        rexpr.add_11rb$(element);
      }
      var tmp$ = style.styles;
      var key = id.toLowerCase();
      var value = joinToString(rexpr, '');
      tmp$.put_xwzc9p$(key, value);
      if (tr.hasMore)
        expect(tr, ';');
    }
    return style;
  };
  SVG$SvgStyle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SVG$SvgStyle$Companion_instance = null;
  function SVG$SvgStyle$Companion_getInstance() {
    if (SVG$SvgStyle$Companion_instance === null) {
      new SVG$SvgStyle$Companion();
    }
    return SVG$SvgStyle$Companion_instance;
  }
  SVG$SvgStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgStyle',
    interfaces: []
  };
  SVG$SvgStyle.prototype.component1 = function () {
    return this.styles;
  };
  SVG$SvgStyle.prototype.copy_gtra9a$ = function (styles) {
    return new SVG$SvgStyle(styles === void 0 ? this.styles : styles);
  };
  SVG$SvgStyle.prototype.toString = function () {
    return 'SvgStyle(styles=' + Kotlin.toString(this.styles) + ')';
  };
  SVG$SvgStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.styles) | 0;
    return result;
  };
  SVG$SvgStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.styles, other.styles))));
  };
  SVG_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SVG',
    interfaces: [Context2d$SizedDrawable]
  };
  function SVG_init(str, $this) {
    $this = $this || Object.create(SVG_0.prototype);
    SVG_0.call($this, Xml_0(str));
    return $this;
  }
  function expect($receiver, value) {
    var v = $receiver.read();
    if (!equals(v, value))
      invalidOp("Expecting '" + value + "' but found '" + v + "'");
    return v;
  }
  function getPoints($receiver) {
    var points = ArrayList_init_0();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = $receiver.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      if (cmd === VectorPath.Command.MOVE_TO) {
        var x = $receiver.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        var y = $receiver.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
        var element = new Vector2(x, y);
        points.add_11rb$(element);
      }
       else if (cmd === VectorPath.Command.LINE_TO) {
        var x_0 = $receiver.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
        var y_0 = $receiver.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
        var element_0 = new Vector2(x_0, y_0);
        points.add_11rb$(element_0);
      }
       else if (cmd === VectorPath.Command.QUAD_TO) {
        var x1 = $receiver.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
        var y1 = $receiver.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
        var x2 = $receiver.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
        var y2 = $receiver.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
        var element_1 = new Vector2(x2, y2);
        points.add_11rb$(element_1);
      }
       else if (cmd === VectorPath.Command.BEZIER_TO) {
        var x1_0 = $receiver.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
        var y1_0 = $receiver.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
        var x2_0 = $receiver.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
        var y2_0 = $receiver.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
        var x3 = $receiver.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
        var y3 = $receiver.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
        var element_2 = new Vector2(x3, y3);
        points.add_11rb$(element_2);
      }
       else
        VectorPath.Command.CLOSE;
    }
    return points;
  }
  function NativeImageSpecialReader() {
    NativeImageSpecialReader_instance = this;
    this.instance_os49up$_0 = lazy(NativeImageSpecialReader$instance$lambda);
  }
  Object.defineProperty(NativeImageSpecialReader.prototype, 'instance', {
    get: function () {
      var $receiver = this.instance_os49up$_0;
      new PropertyMetadata('instance');
      return $receiver.value;
    }
  });
  function NativeImageSpecialReader$instance$lambda() {
    return new HtmlImageSpecialReader();
  }
  NativeImageSpecialReader.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NativeImageSpecialReader',
    interfaces: []
  };
  var NativeImageSpecialReader_instance = null;
  function NativeImageSpecialReader_getInstance() {
    if (NativeImageSpecialReader_instance === null) {
      new NativeImageSpecialReader();
    }
    return NativeImageSpecialReader_instance;
  }
  function HtmlCanvas() {
    HtmlCanvas_instance = this;
  }
  HtmlCanvas.prototype.createCanvas_vux9f0$ = function (width, height) {
    if (util.OS.isNodejs) {
      return new (require('canvas'))(width, height);
    }
     else {
      var out = document.createElement('canvas');
      out.width = width;
      out.height = height;
      return out;
    }
  };
  HtmlCanvas.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlCanvas',
    interfaces: []
  };
  var HtmlCanvas_instance = null;
  function HtmlCanvas_getInstance() {
    if (HtmlCanvas_instance === null) {
      new HtmlCanvas();
    }
    return HtmlCanvas_instance;
  }
  function HtmlImage() {
    HtmlImage_instance = this;
  }
  HtmlImage.prototype.createHtmlCanvas_vux9f0$ = function (width, height) {
    var canvas = HtmlCanvas_getInstance().createCanvas_vux9f0$(width, height);
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };
  HtmlImage.prototype.renderToHtmlCanvas_to9ovb$ = function (bmpData, bmpWidth, bmpHeight, canvas) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var bmpDataData = bmpData;
    var pixelCount = bmpData.length;
    var ctx = canvas.getContext('2d');
    var idata = ctx.createImageData(bmpWidth, bmpHeight);
    var idataData = idata.data;
    var m = 0;
    for (var n = 0; n < pixelCount; n++) {
      var c = bmpDataData[n];
      idataData[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = toByte(c >>> 0 & 255);
      idataData[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = toByte(c >>> 8 & 255);
      idataData[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = toByte(c >>> 16 & 255);
      idataData[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = toByte(c >>> 24 & 255);
    }
    ctx.putImageData(idata, 0.0, 0.0);
    return canvas;
  };
  HtmlImage.prototype.renderToHtmlCanvas_4jes5x$ = function (bmp, canvas) {
    return this.renderToHtmlCanvas_to9ovb$(bmp.data, bmp.width, bmp.height, canvas);
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_y7limx$ = function (canvas, out) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var width = canvas.width;
    var height = canvas.height;
    var len = Kotlin.imul(width, height);
    var ctx = canvas.getContext('2d');
    var data = ctx.getImageData(0.0, 0.0, width, height);
    var ddata = data.data;
    var m = 0;
    for (var n = 0; n < len; n++) {
      var r = ddata[tmp$ = m, m = tmp$ + 1 | 0, tmp$];
      var g = ddata[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0];
      var b = ddata[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1];
      var a = ddata[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2];
      out[n] = r << 0 | g << 8 | b << 16 | a << 24;
    }
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_co8odx$ = function (canvas, bmp) {
    this.renderHtmlCanvasIntoBitmap_y7limx$(canvas, bmp.data);
  };
  HtmlImage.prototype.bitmapToHtmlCanvas_59u9qz$ = function (bmp) {
    return this.renderToHtmlCanvas_4jes5x$(bmp, this.createHtmlCanvas_vux9f0$(bmp.width, bmp.height));
  };
  HtmlImage.prototype.htmlCanvasToDataUrl_ap7jt0$ = function (canvas) {
    return canvas.toDataURL();
  };
  HtmlImage.prototype.htmlCanvasClear_ap7jt0$ = function (canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
  };
  HtmlImage.prototype.htmlCanvasSetSize_v0aytg$ = function (canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };
  HtmlImage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlImage',
    interfaces: []
  };
  var HtmlImage_instance = null;
  function HtmlImage_getInstance() {
    if (HtmlImage_instance === null) {
      new HtmlImage();
    }
    return HtmlImage_instance;
  }
  function toHtmlNative($receiver) {
    if (Kotlin.isType($receiver, CanvasNativeImage))
      return $receiver;
    else
      return new CanvasNativeImage(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$($receiver.toBMP32()));
  }
  function HtmlImageSpecialReader() {
    VfsSpecialReader.call(this, getKClass(NativeImage));
  }
  HtmlImageSpecialReader.prototype.readSpecial_9oq4me$ = function (vfs_0, path_0, continuation_0, suspended) {
    var instance = new Coroutine$readSpecial_9oq4me$(this, vfs_0, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$readSpecial_9oq4me$($this, vfs_0, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$readSpecial_9oq4me$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSpecial_9oq4me$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSpecial_9oq4me$.prototype.constructor = Coroutine$readSpecial_9oq4me$;
  Coroutine$readSpecial_9oq4me$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$vfs, LocalVfs)) {
              this.state_0 = 6;
              this.result_0 = NativeImageFormatProvider$BrowserImage_getInstance().loadImage_61zpoe$(this.local$path, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              if (Kotlin.isType(this.local$vfs, UrlVfs)) {
                var jsUrl = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
                this.state_0 = 4;
                this.result_0 = NativeImageFormatProvider$BrowserImage_getInstance().loadImage_61zpoe$(jsUrl, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                break;
              }
               else {
                this.local$tmp$ = NativeImageFormatProvider$BrowserImage_getInstance();
                this.state_0 = 2;
                this.result_0 = this.local$vfs.get_61zpoe$(this.local$path).readAll(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                break;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.decodeToCanvas_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 7;
            continue;
          case 6:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            var canvas = this.local$tmp$_0;
            return new CanvasNativeImage(canvas);
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
  HtmlImageSpecialReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlImageSpecialReader',
    interfaces: [VfsSpecialReader]
  };
  function CanvasNativeImage(canvas) {
    NativeImage.call(this, canvas.width, canvas.height, canvas, false);
    this.canvas = canvas;
    this.name_yldoag$_0 = 'CanvasNativeImage';
  }
  Object.defineProperty(CanvasNativeImage.prototype, 'name', {
    get: function () {
      return this.name_yldoag$_0;
    }
  });
  CanvasNativeImage.prototype.toNonNativeBmp = function () {
    var data = new Int32Array(Kotlin.imul(this.width, this.height));
    NativeImageFormatProvider$BrowserImage_getInstance().imgData_y7limx$(this.canvas, data);
    return new Bitmap32(this.width, this.height, data);
  };
  CanvasNativeImage.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new CanvasContext2dRenderer(this.canvas));
  };
  CanvasNativeImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasNativeImage',
    interfaces: [NativeImage]
  };
  function NativeImageFormatProvider() {
    NativeImageFormatProvider_instance = this;
  }
  NativeImageFormatProvider.prototype.decode_fqrh44$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_fqrh44$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_fqrh44$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$decode_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_fqrh44$.prototype.constructor = Coroutine$decode_fqrh44$;
  Coroutine$decode_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = NativeImageFormatProvider$BrowserImage_getInstance().decodeToCanvas_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return new CanvasNativeImage(this.result_0);
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
  NativeImageFormatProvider.prototype.create_vux9f0$ = function (width, height) {
    return new CanvasNativeImage(HtmlCanvas_getInstance().createCanvas_vux9f0$(width, height));
  };
  NativeImageFormatProvider.prototype.copy_uler2c$ = function (bmp) {
    return new CanvasNativeImage(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$(bmp.toBMP32()));
  };
  NativeImageFormatProvider.prototype.display_uler2c$ = function (bitmap, continuation) {
    var tmp$;
    var img = toHtmlNative(bitmap);
    (tmp$ = document.body) != null ? tmp$.appendChild(img.canvas) : null;
  };
  NativeImageFormatProvider.prototype.mipmap_uwsoz2$ = function (bmp, levels) {
    var out = ensureNative(bmp);
    for (var n = 0; n < levels; n++)
      out = this.mipmap_uler2c$(out);
    return out;
  };
  NativeImageFormatProvider.prototype.mipmap_uler2c$ = function (bmp) {
    var x = bmp.width * 0.5;
    var tmp$ = numberToInt(Math_0.ceil(x));
    var x_0 = bmp.height * 0.5;
    var out = NativeImage_0(tmp$, numberToInt(Math_0.ceil(x_0)));
    out.getContext2d_6taknv$(true).renderer.drawImage_4amb17$(bmp, 0, 0, out.width, out.height);
    return out;
  };
  function NativeImageFormatProvider$BrowserImage() {
    NativeImageFormatProvider$BrowserImage_instance = this;
  }
  NativeImageFormatProvider$BrowserImage.prototype.decodeToCanvas_fqrh44$ = function (bytes_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeToCanvas_fqrh44$(this, bytes_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeToCanvas_fqrh44$($this, bytes_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$blobURL = void 0;
    this.local$bytes = bytes_0;
  }
  Coroutine$decodeToCanvas_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeToCanvas_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeToCanvas_fqrh44$.prototype.constructor = Coroutine$decodeToCanvas_fqrh44$;
  Coroutine$decodeToCanvas_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = [this.local$bytes];
            var type = 'image/png';
            var o = {};
            o['type'] = type;
            var blob = new Blob(tmp$, o);
            this.local$blobURL = URL.createObjectURL(blob);
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.$this.loadImage_61zpoe$(this.local$blobURL, this);
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
            URL.revokeObjectURL(this.local$blobURL);
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
  function NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda(closure$c) {
    return function (v) {
      closure$c.resume_11rb$(v);
      return Unit;
    };
  }
  function NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda_0(closure$c) {
    return function (v) {
      closure$c.resumeWithException_tcv7n7$(v);
      return Unit;
    };
  }
  function NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda_1(closure$img, closure$c) {
    return function (it) {
      var canvas = HtmlCanvas_getInstance().createCanvas_vux9f0$(closure$img.width, closure$img.height);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(closure$img, 0.0, 0.0);
      closure$c.resume_11rb$(canvas);
      return Unit;
    };
  }
  function NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda_2(closure$c) {
    return function (f, f_0, f_1, f_2, f_3) {
      closure$c.resumeWithException_tcv7n7$(new RuntimeException('error loading image'));
      return Unit;
    };
  }
  function NativeImageFormatProvider$BrowserImage$loadImage$lambda(closure$jsUrl) {
    return function (c) {
      if (util.OS.isNodejs) {
        require('canvas').loadImage(closure$jsUrl).then(NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda(c), NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda_0(c));
      }
       else {
        var img = document.createElement('image');
        img.onload = NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda_1(img, c);
        img.onerror = NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda_2(c);
        img.src = closure$jsUrl;
      }
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
  NativeImageFormatProvider$BrowserImage.prototype.loadImage_61zpoe$ = function (jsUrl, continuation) {
    return suspendCoroutine$lambda(_korioSuspendCoroutine$lambda(korioSuspendCoroutine$lambda(NativeImageFormatProvider$BrowserImage$loadImage$lambda(jsUrl))))(continuation.facade);
  };
  NativeImageFormatProvider$BrowserImage.prototype.imgData_y7limx$ = function (canvas, out) {
    HtmlImage_getInstance().renderHtmlCanvasIntoBitmap_y7limx$(canvas, out);
  };
  NativeImageFormatProvider$BrowserImage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BrowserImage',
    interfaces: []
  };
  var NativeImageFormatProvider$BrowserImage_instance = null;
  function NativeImageFormatProvider$BrowserImage_getInstance() {
    if (NativeImageFormatProvider$BrowserImage_instance === null) {
      new NativeImageFormatProvider$BrowserImage();
    }
    return NativeImageFormatProvider$BrowserImage_instance;
  }
  NativeImageFormatProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NativeImageFormatProvider',
    interfaces: []
  };
  var NativeImageFormatProvider_instance = null;
  function NativeImageFormatProvider_getInstance() {
    if (NativeImageFormatProvider_instance === null) {
      new NativeImageFormatProvider();
    }
    return NativeImageFormatProvider_instance;
  }
  function CanvasContext2dRenderer(canvas) {
    Context2d$Renderer.call(this);
    this.canvas_0 = canvas;
    this.ctx = this.canvas_0.getContext('2d');
  }
  Object.defineProperty(CanvasContext2dRenderer.prototype, 'width', {
    get: function () {
      return this.canvas_0.width;
    }
  });
  Object.defineProperty(CanvasContext2dRenderer.prototype, 'height', {
    get: function () {
      return this.canvas_0.height;
    }
  });
  CanvasContext2dRenderer.prototype.toJsStr_2y61xz$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType($receiver, Context2d$None))
      tmp$_2 = 'none';
    else if (Kotlin.isType($receiver, Context2d$Color))
      tmp$_2 = NamedColors_getInstance().toHtmlStringSimple_za3lpa$($receiver.color);
    else if (Kotlin.isType($receiver, Context2d$Gradient)) {
      tmp$ = $receiver.kind;
      if (equals(tmp$, Context2d$Gradient$Kind$LINEAR_getInstance())) {
        var grad = this.ctx.createLinearGradient($receiver.x0, $receiver.y0, $receiver.x1, $receiver.y1);
        tmp$_0 = $receiver.stops.size;
        for (var n = 0; n < tmp$_0; n++) {
          var stop = $receiver.stops.get_za3lpa$(n);
          var color = $receiver.colors.get_za3lpa$(n);
          grad.addColorStop(stop, NamedColors_getInstance().toHtmlStringSimple_za3lpa$(color));
        }
        tmp$_2 = grad;
      }
       else if (equals(tmp$, Context2d$Gradient$Kind$RADIAL_getInstance())) {
        var grad_0 = this.ctx.createRadialGradient($receiver.x0, $receiver.y0, $receiver.r0, $receiver.x1, $receiver.y1, $receiver.r1);
        tmp$_1 = $receiver.stops.size;
        for (var n_0 = 0; n_0 < tmp$_1; n_0++) {
          var stop_0 = $receiver.stops.get_za3lpa$(n_0);
          var color_0 = $receiver.colors.get_za3lpa$(n_0);
          grad_0.addColorStop(stop_0, NamedColors_getInstance().toHtmlStringSimple_za3lpa$(color_0));
        }
        tmp$_2 = grad_0;
      }
       else
        tmp$_2 = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType($receiver, Context2d$BitmapPaint))
      tmp$_2 = this.ctx.createPattern(toHtmlNative($receiver.bitmap).canvas, $receiver.repeat ? 'repeat' : 'no-repeat');
    else
      tmp$_2 = 'black';
    return tmp$_2;
  };
  CanvasContext2dRenderer.prototype.keep_0 = function (callback) {
    this.ctx.save();
    try {
      return callback();
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.setFont_0 = function (font) {
    this.ctx.font = font.size.toString() + "px '" + font.name + "'";
  };
  CanvasContext2dRenderer.prototype.setState_0 = function (state, fill) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.ctx.globalAlpha = state.globalAlpha;
    this.setFont_0(state.font);
    var t = state.transform;
    this.ctx.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty);
    if (fill) {
      this.ctx.fillStyle = this.toJsStr_2y61xz$(state.fillStyle);
    }
     else {
      this.ctx.lineWidth = state.lineWidth;
      tmp$_1 = this.ctx;
      tmp$ = state.lineJoin;
      if (equals(tmp$, Context2d$LineJoin$BEVEL_getInstance())) {
        tmp$_0 = 'bevel';
      }
       else if (equals(tmp$, Context2d$LineJoin$MITER_getInstance())) {
        tmp$_0 = 'miter';
      }
       else if (equals(tmp$, Context2d$LineJoin$ROUND_getInstance())) {
        tmp$_0 = 'round';
      }
       else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      tmp$_1.lineJoin = tmp$_0;
      tmp$_4 = this.ctx;
      tmp$_2 = state.lineCap;
      if (equals(tmp$_2, Context2d$LineCap$BUTT_getInstance())) {
        tmp$_3 = 'butt';
      }
       else if (equals(tmp$_2, Context2d$LineCap$ROUND_getInstance())) {
        tmp$_3 = 'round';
      }
       else if (equals(tmp$_2, Context2d$LineCap$SQUARE_getInstance())) {
        tmp$_3 = 'square';
      }
       else
        tmp$_3 = Kotlin.noWhenBranchMatched();
      tmp$_4.lineCap = tmp$_3;
      this.ctx.strokeStyle = this.toJsStr_2y61xz$(state.strokeStyle);
    }
  };
  CanvasContext2dRenderer.prototype.transformPaint_0 = function (paint) {
    if (Kotlin.isType(paint, Context2d$TransformedPaint)) {
      var m = paint.transform;
      this.ctx.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
    }
  };
  CanvasContext2dRenderer.prototype.drawImage_4amb17$$default = function (image, x, y, width, height, transform) {
    var tmp$;
    this.ctx.save();
    try {
      this.ctx.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
      this.ctx.drawImage((Kotlin.isType(tmp$ = ensureNative(image), CanvasNativeImage) ? tmp$ : throwCCE()).canvas, x, y, width, height);
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.render_w64o9o$ = function (state, fill) {
    if (state.path.isEmpty())
      return;
    this.ctx.save();
    try {
      this.setState_0(state, fill);
      this.ctx.beginPath();
      var $this = state.path;
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      var n = 0;
      tmp$ = $this.commands.iterator();
      while (tmp$.hasNext()) {
        var cmd = tmp$.next();
        if (cmd === VectorPath.Command.MOVE_TO) {
          var x = $this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = $this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          this.ctx.moveTo(x, y);
        }
         else if (cmd === VectorPath.Command.LINE_TO) {
          var x_0 = $this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          this.ctx.lineTo(x_0, y_0);
        }
         else if (cmd === VectorPath.Command.QUAD_TO) {
          var x1 = $this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          this.ctx.quadraticCurveTo(x1, y1, x2, y2);
        }
         else if (cmd === VectorPath.Command.BEZIER_TO) {
          var x1_0 = $this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          this.ctx.bezierCurveTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
        }
         else if (cmd === VectorPath.Command.CLOSE) {
          this.ctx.closePath();
        }
      }
      this.ctx.save();
      if (fill) {
        this.transformPaint_0(state.fillStyle);
        this.ctx.fill();
      }
       else {
        this.transformPaint_0(state.strokeStyle);
        this.ctx.stroke();
      }
      this.ctx.restore();
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
    this.ctx.save();
    try {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      this.setState_0(state, fill);
      tmp$_1 = this.ctx;
      tmp$ = state.verticalAlign;
      if (equals(tmp$, Context2d$VerticalAlign$TOP_getInstance())) {
        tmp$_0 = 'top';
      }
       else if (equals(tmp$, Context2d$VerticalAlign$MIDLE_getInstance())) {
        tmp$_0 = 'middle';
      }
       else if (equals(tmp$, Context2d$VerticalAlign$BASELINE_getInstance())) {
        tmp$_0 = 'alphabetic';
      }
       else if (equals(tmp$, Context2d$VerticalAlign$BOTTOM_getInstance())) {
        tmp$_0 = 'bottom';
      }
       else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      tmp$_1.textBaseline = tmp$_0;
      tmp$_4 = this.ctx;
      tmp$_2 = state.horizontalAlign;
      if (equals(tmp$_2, Context2d$HorizontalAlign$LEFT_getInstance())) {
        tmp$_3 = 'left';
      }
       else if (equals(tmp$_2, Context2d$HorizontalAlign$CENTER_getInstance())) {
        tmp$_3 = 'center';
      }
       else if (equals(tmp$_2, Context2d$HorizontalAlign$RIGHT_getInstance())) {
        tmp$_3 = 'right';
      }
       else
        tmp$_3 = Kotlin.noWhenBranchMatched();
      tmp$_4.textAlign = tmp$_3;
      if (fill) {
        this.ctx.fillText(text, x, y);
      }
       else {
        this.ctx.strokeText(text, x, y);
      }
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.getBounds_qlucl1$ = function (font, text, out) {
    this.ctx.save();
    try {
      this.setFont_0(font);
      var metrics = this.ctx.measureText(text);
      var width = numberToInt(metrics.width);
      out.bounds.setTo_6y0v78$(0, 0, width + 2, font.size);
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasContext2dRenderer',
    interfaces: [Context2d$Renderer]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korim = package$soywiz.korim || (package$soywiz.korim = {});
  Object.defineProperty(package$korim, 'Korim', {
    get: Korim_getInstance
  });
  Object.defineProperty(package$korim, 'KORIM_VERSION_8be2vx$', {
    get: function () {
      return KORIM_VERSION;
    }
  });
  $$importsForInline$$['korma-js'] = $module$korma_js;
  var package$bitmap = package$korim.bitmap || (package$korim.bitmap = {});
  package$bitmap.Bitmap = Bitmap;
  package$bitmap.createWithThisFormatTyped_cq1euf$ = createWithThisFormatTyped;
  package$bitmap.Bitmap1 = Bitmap1;
  package$bitmap.Bitmap16 = Bitmap16;
  package$bitmap.Bitmap2 = Bitmap2;
  $$importsForInline$$['kmem-js'] = $module$kmem_js;
  $$importsForInline$$['korim-js'] = _;
  Object.defineProperty(Bitmap32, 'Companion', {
    get: Bitmap32$Companion_getInstance
  });
  package$bitmap.Bitmap32_init_x84gdh$ = Bitmap32_init;
  package$bitmap.Bitmap32_init_qt1dr2$ = Bitmap32_init_0;
  package$bitmap.Bitmap32_init_guskdz$ = Bitmap32_init_1;
  package$bitmap.Bitmap32 = Bitmap32;
  package$bitmap.Bitmap4 = Bitmap4;
  package$bitmap.Bitmap8 = Bitmap8;
  Object.defineProperty(BitmapChannel, 'RED', {
    get: BitmapChannel$RED_getInstance
  });
  Object.defineProperty(BitmapChannel, 'GREEN', {
    get: BitmapChannel$GREEN_getInstance
  });
  Object.defineProperty(BitmapChannel, 'BLUE', {
    get: BitmapChannel$BLUE_getInstance
  });
  Object.defineProperty(BitmapChannel, 'ALPHA', {
    get: BitmapChannel$ALPHA_getInstance
  });
  Object.defineProperty(BitmapChannel, 'Companion', {
    get: BitmapChannel$Companion_getInstance
  });
  package$bitmap.BitmapChannel = BitmapChannel;
  package$bitmap.get_Y_tqizvu$ = get_Y;
  package$bitmap.get_Cb_tqizvu$ = get_Cb;
  package$bitmap.get_Cr_tqizvu$ = get_Cr;
  package$bitmap.get_A_tqizvu$ = get_A;
  package$bitmap.toStringYCbCr_4f4qi0$ = toStringYCbCr;
  package$bitmap.sliceWithBounds_or9s9z$ = sliceWithBounds;
  package$bitmap.sliceWithSize_or9s9z$ = sliceWithSize_1;
  package$bitmap.slice_ko78oz$ = slice_0;
  package$bitmap.matchContents_1cy7pt$ = matchContents;
  package$bitmap.setAlpha_1dwlii$ = setAlpha;
  package$bitmap.BitmapIndexed = BitmapIndexed;
  package$bitmap.BitmapSlice = BitmapSlice;
  package$bitmap.NativeImage = NativeImage;
  package$bitmap.mipmap_lzupcl$ = mipmap;
  package$bitmap.toUri_p18lal$ = toUri;
  package$bitmap.NativeImage_vux9f0$ = NativeImage_0;
  package$bitmap.NativeImage_oiyklk$ = NativeImage_1;
  package$bitmap.NativeImage_7vwhb5$ = NativeImage_2;
  package$bitmap.ensureNative_p18lal$ = ensureNative;
  package$bitmap.raster_kiw58k$ = raster;
  Object.defineProperty(package$bitmap, 'PSNR', {
    get: PSNR_getInstance
  });
  package$bitmap.psnrDiffTo_uz8x2p$ = psnrDiffTo;
  package$bitmap.computePsnr_so1h92$ = computePsnr;
  var package$color = package$korim.color || (package$korim.color = {});
  Object.defineProperty(package$color, 'ARGB', {
    get: ARGB_getInstance
  });
  Object.defineProperty(package$color, 'BGRA', {
    get: BGRA_getInstance
  });
  ColorFormatBase.Mixin = ColorFormatBase$Mixin;
  package$color.ColorFormatBase = ColorFormatBase;
  Object.defineProperty(ColorFormat, 'Companion', {
    get: ColorFormat$Companion_getInstance
  });
  package$color.ColorFormat = ColorFormat;
  package$color.ColorFormat16 = ColorFormat16;
  package$color.ColorFormat24 = ColorFormat24;
  package$color.ColorFormat32 = ColorFormat32;
  Object.defineProperty(ColorTransform, 'Companion', {
    get: ColorTransform$Companion_getInstance
  });
  package$color.ColorTransform = ColorTransform;
  package$color.ColorTransform_6tck58$ = ColorTransform_0;
  Object.defineProperty(package$color, 'Colors', {
    get: Colors_getInstance
  });
  Object.defineProperty(package$color, 'NamedColors', {
    get: NamedColors_getInstance
  });
  package$color.PaletteColorFormat = PaletteColorFormat;
  Object.defineProperty(package$color, 'RGB', {
    get: RGB_getInstance
  });
  Object.defineProperty(package$color, 'BGR', {
    get: BGR_getInstance
  });
  Object.defineProperty(package$color, 'RGBA', {
    get: RGBA_getInstance
  });
  Object.defineProperty(package$color, 'RGBA_4444', {
    get: RGBA_4444_getInstance
  });
  Object.defineProperty(package$color, 'RGBA_5551', {
    get: RGBA_5551_getInstance
  });
  Object.defineProperty(package$color, 'RGB_555', {
    get: RGB_555_getInstance
  });
  Object.defineProperty(package$color, 'RGB_565', {
    get: RGB_565_getInstance
  });
  Object.defineProperty(package$color, 'BGRA_4444', {
    get: BGRA_4444_getInstance
  });
  Object.defineProperty(package$color, 'BGR_555', {
    get: BGR_555_getInstance
  });
  Object.defineProperty(package$color, 'BGR_565', {
    get: BGR_565_getInstance
  });
  Object.defineProperty(package$color, 'BGRA_5551', {
    get: BGRA_5551_getInstance
  });
  package$color.RGBAd_init_h1ferx$ = RGBAd_init;
  package$color.RGBAd_init_za3lpa$ = RGBAd_init_0;
  package$color.RGBAd_init = RGBAd_init_1;
  package$color.RGBAd = RGBAd;
  package$color.RGBAf = RGBAf;
  package$color.RGBAf_1ugm5o$ = RGBAf_0;
  Object.defineProperty(package$color, 'YCbCr', {
    get: YCbCr_getInstance
  });
  Object.defineProperty(package$color, 'YUVA', {
    get: YUVA_getInstance
  });
  var package$font = package$korim.font || (package$korim.font = {});
  package$font.drawText_3onmvx$ = drawText;
  BitmapFont.Glyph = BitmapFont$Glyph;
  BitmapFont.GlyphInfo = BitmapFont$GlyphInfo;
  package$font.BitmapFont = BitmapFont;
  Object.defineProperty(package$font, 'BitmapFontGenerator', {
    get: BitmapFontGenerator_getInstance
  });
  TtfFont.Table = TtfFont$Table;
  Object.defineProperty(TtfFont$NameIds, 'COPYRIGHT', {
    get: TtfFont$NameIds$COPYRIGHT_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FONT_FAMILY_NAME', {
    get: TtfFont$NameIds$FONT_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FONT_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'UNIQUE_FONT_ID', {
    get: TtfFont$NameIds$UNIQUE_FONT_ID_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FULL_FONT_NAME', {
    get: TtfFont$NameIds$FULL_FONT_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'VERSION_STRING', {
    get: TtfFont$NameIds$VERSION_STRING_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'POSTSCRIPT_NAME', {
    get: TtfFont$NameIds$POSTSCRIPT_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TRADEMARK', {
    get: TtfFont$NameIds$TRADEMARK_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'MANUFACTURER', {
    get: TtfFont$NameIds$MANUFACTURER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DESIGNER', {
    get: TtfFont$NameIds$DESIGNER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DESCRIPTION', {
    get: TtfFont$NameIds$DESCRIPTION_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'URL_VENDOR', {
    get: TtfFont$NameIds$URL_VENDOR_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'URL_DESIGNER', {
    get: TtfFont$NameIds$URL_DESIGNER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LICENSE_DESCRIPTION', {
    get: TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LICENSE_URL', {
    get: TtfFont$NameIds$LICENSE_URL_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'RESERVED_15', {
    get: TtfFont$NameIds$RESERVED_15_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TYPO_FAMILY_NAME', {
    get: TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TYPO_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'COMPATIBLE_FULL', {
    get: TtfFont$NameIds$COMPATIBLE_FULL_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'SAMPLE_TEXT', {
    get: TtfFont$NameIds$SAMPLE_TEXT_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'POSTSCRIPT_CID', {
    get: TtfFont$NameIds$POSTSCRIPT_CID_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'WWS_FAMILY_NAME', {
    get: TtfFont$NameIds$WWS_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'WWS_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LIGHT_BACKGROUND_PALETTE', {
    get: TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DARK_BACKGROUND_PALETTE', {
    get: TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'VARIATIONS_POSTSCRIPT_NAME_PREFIX', {
    get: TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'Companion', {
    get: TtfFont$NameIds$Companion_getInstance
  });
  TtfFont.NameIds = TtfFont$NameIds;
  TtfFont.Fixed = TtfFont$Fixed;
  TtfFont.HorMetric = TtfFont$HorMetric;
  Object.defineProperty(TtfFont, 'Companion', {
    get: TtfFont$Companion_getInstance
  });
  $$importsForInline$$['klock-js'] = $module$klock_js;
  TtfFont.IGlyph = TtfFont$IGlyph;
  TtfFont.Contour = TtfFont$Contour;
  Object.defineProperty(TtfFont$Origin, 'TOP', {
    get: TtfFont$Origin$TOP_getInstance
  });
  Object.defineProperty(TtfFont$Origin, 'BASELINE', {
    get: TtfFont$Origin$BASELINE_getInstance
  });
  TtfFont.Origin = TtfFont$Origin;
  TtfFont.GlyphReference = TtfFont$GlyphReference;
  TtfFont.CompositeGlyph = TtfFont$CompositeGlyph;
  TtfFont.Glyph = TtfFont$Glyph;
  var package$ttf = package$font.ttf || (package$font.ttf = {});
  package$ttf.TtfFont = TtfFont;
  package$ttf.fillText_x792xf$ = fillText;
  var package$format = package$korim.format || (package$korim.format = {});
  Object.defineProperty(package$format, 'BMP', {
    get: BMP_getInstance
  });
  $$importsForInline$$['kds-js'] = $module$kds_js;
  Object.defineProperty(package$format, 'DDS', {
    get: DDS_getInstance
  });
  Object.defineProperty(package$format, 'DXT1', {
    get: DXT1_getInstance
  });
  Object.defineProperty(package$format, 'DXT2', {
    get: DXT2_getInstance
  });
  Object.defineProperty(package$format, 'DXT3', {
    get: DXT3_getInstance
  });
  Object.defineProperty(package$format, 'DXT4', {
    get: DXT4_getInstance
  });
  Object.defineProperty(package$format, 'DXT5', {
    get: DXT5_getInstance
  });
  package$format.DXT1Base = DXT1Base;
  package$format.DXT2_3 = DXT2_3;
  package$format.DXT4_5 = DXT4_5;
  Object.defineProperty(DXT, 'Companion', {
    get: DXT$Companion_getInstance
  });
  package$format.DXT = DXT;
  Object.defineProperty(package$format, 'ICO', {
    get: ICO_getInstance
  });
  package$format.ImageData = ImageData;
  package$format.ImageDecodingProps = ImageDecodingProps;
  package$format.ImageEncodingProps = ImageEncodingProps;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$format.ImageFormat = ImageFormat;
  package$format.ImageFormats = ImageFormats;
  package$format.writeTo_6yv659$ = writeTo;
  Object.defineProperty(package$format, 'defaultImageFormats', {
    get: get_defaultImageFormats
  });
  package$format.ImageFrame = ImageFrame;
  package$format.get_area_mj13kf$ = get_area;
  package$format.ImageInfo = ImageInfo;
  Object.defineProperty(package$format, 'JPEG', {
    get: JPEG_getInstance
  });
  JPEGDecoder.Jfif = JPEGDecoder$Jfif;
  JPEGDecoder.Adobe = JPEGDecoder$Adobe;
  JPEGDecoder.HuffmanNode = JPEGDecoder$HuffmanNode;
  JPEGDecoder.FrameComponent = JPEGDecoder$FrameComponent;
  JPEGDecoder.Frame = JPEGDecoder$Frame;
  JPEGDecoder.Component = JPEGDecoder$Component;
  JPEGDecoder.ImageInfo = JPEGDecoder$ImageInfo;
  JPEGDecoder.ImageData = JPEGDecoder$ImageData;
  Object.defineProperty(JPEGDecoder, 'Companion', {
    get: JPEGDecoder$Companion_getInstance
  });
  package$format.JPEGDecoder = JPEGDecoder;
  Object.defineProperty(JPEGEncoder, 'Companion', {
    get: JPEGEncoder$Companion_getInstance
  });
  package$format.JPEGEncoder = JPEGEncoder;
  package$format.decode_k1939n$ = decode;
  package$format.decode_cv04aa$ = decode_0;
  package$format.decode_rk4kpr$ = decode_1;
  Object.defineProperty(package$format, 'nativeImageFormatProviders', {
    get: get_nativeImageFormatProviders
  });
  Object.defineProperty(package$format, 'nativeImageFormatProvider', {
    get: function () {
      return nativeImageFormatProvider;
    }
  });
  package$format.displayImage_uler2c$ = displayImage;
  package$format.decodeImageBytes_fqrh44$ = decodeImageBytes;
  package$format.readNativeImage_93ma6j$ = readNativeImage;
  package$format.readImageData_ub4gzs$ = readImageData;
  package$format.readBitmapListNoNative_93ma6j$ = readBitmapListNoNative;
  package$format.readNativeImage_yjldv$ = readNativeImage_0;
  package$format.readImageData_qnhdbr$ = readImageData_0;
  package$format.readImageDataProps_4wi2o0$ = readImageDataProps;
  package$format.readBitmapListNoNative_yjldv$ = readBitmapListNoNative_0;
  package$format.readBitmapInfo_ub4gzs$ = readBitmapInfo;
  package$format.readImageData_vzk2sv$ = readImageData_1;
  package$format.readBitmapListNoNative_vzk2sv$ = readBitmapListNoNative_1;
  package$format.readBitmap_qnhdbr$ = readBitmap;
  package$format.readBitmap_4wi2o0$ = readBitmap_0;
  package$format.readBitmapInfo_vzk2sv$ = readBitmapInfo_0;
  package$format.readBitmapOptimized_93ma6j$ = readBitmapOptimized;
  package$format.readBitmap_ub4gzs$ = readBitmap_1;
  Object.defineProperty(package$format, 'nativeImageLoadingEnabled', {
    get: function () {
      return nativeImageLoadingEnabled;
    },
    set: function (value) {
      nativeImageLoadingEnabled = value;
    }
  });
  package$format.readBitmapNoNative_ub4gzs$ = readBitmapNoNative;
  package$format.readBitmapNoNative_vzk2sv$ = readBitmapNoNative_0;
  package$format.writeBitmap_uk5x8r$ = writeBitmap;
  package$format.showImageAndWaitExt_p18lal$ = showImageAndWaitExt;
  package$format.showImagesAndWaitExt_qlwqpb$ = showImagesAndWaitExt;
  package$format.showImageAndWait_uler2c$ = showImageAndWait;
  package$format.showImageAndWait_7fmkw5$ = showImageAndWait_0;
  package$format.showImagesAndWait_eltpmo$ = showImagesAndWait;
  PNG.prototype.InterlacedPass = PNG$InterlacedPass;
  Object.defineProperty(PNG$Colorspace, 'GRAYSCALE', {
    get: PNG$Colorspace$GRAYSCALE_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'RGB', {
    get: PNG$Colorspace$RGB_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'INDEXED', {
    get: PNG$Colorspace$INDEXED_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'GRAYSCALE_ALPHA', {
    get: PNG$Colorspace$GRAYSCALE_ALPHA_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'RGBA', {
    get: PNG$Colorspace$RGBA_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'Companion', {
    get: PNG$Colorspace$Companion_getInstance
  });
  PNG.prototype.Colorspace = PNG$Colorspace;
  PNG.prototype.Header = PNG$Header;
  PNG.prototype.DecodingContext = PNG$DecodingContext;
  Object.defineProperty(package$format, 'PNG', {
    get: PNG_getInstance
  });
  Object.defineProperty(Adler32, 'Companion', {
    get: Adler32$Companion_getInstance
  });
  package$format.Adler32 = Adler32;
  Object.defineProperty(CRC32, 'Companion', {
    get: CRC32$Companion_getInstance
  });
  package$format.CRC32 = CRC32;
  PSD.prototype.PsdImageInfo = PSD$PsdImageInfo;
  Object.defineProperty(package$format, 'PSD', {
    get: PSD_getInstance
  });
  Object.defineProperty(package$format, 'SVG', {
    get: SVG_getInstance
  });
  Object.defineProperty(package$format, 'StandardImageFormats', {
    get: function () {
      return StandardImageFormats;
    }
  });
  package$format.registerStandard_txhjkn$ = registerStandard;
  TGA.prototype.Info = TGA$Info;
  Object.defineProperty(package$format, 'TGA', {
    get: TGA_getInstance
  });
  var package$geom = package$korim.geom || (package$korim.geom = {});
  package$geom.render_m8xwlz$ = render;
  var package$vector = package$korim.vector || (package$korim.vector = {});
  package$vector.Bitmap32Context2d = Bitmap32Context2d;
  Object.defineProperty(Context2d$LineCap, 'BUTT', {
    get: Context2d$LineCap$BUTT_getInstance
  });
  Object.defineProperty(Context2d$LineCap, 'ROUND', {
    get: Context2d$LineCap$ROUND_getInstance
  });
  Object.defineProperty(Context2d$LineCap, 'SQUARE', {
    get: Context2d$LineCap$SQUARE_getInstance
  });
  Context2d.LineCap = Context2d$LineCap;
  Object.defineProperty(Context2d$LineJoin, 'BEVEL', {
    get: Context2d$LineJoin$BEVEL_getInstance
  });
  Object.defineProperty(Context2d$LineJoin, 'MITER', {
    get: Context2d$LineJoin$MITER_getInstance
  });
  Object.defineProperty(Context2d$LineJoin, 'ROUND', {
    get: Context2d$LineJoin$ROUND_getInstance
  });
  Context2d.LineJoin = Context2d$LineJoin;
  Object.defineProperty(Context2d$CycleMethod, 'NO_CYCLE', {
    get: Context2d$CycleMethod$NO_CYCLE_getInstance
  });
  Object.defineProperty(Context2d$CycleMethod, 'REFLECT', {
    get: Context2d$CycleMethod$REFLECT_getInstance
  });
  Object.defineProperty(Context2d$CycleMethod, 'REPEAT', {
    get: Context2d$CycleMethod$REPEAT_getInstance
  });
  Context2d.CycleMethod = Context2d$CycleMethod;
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'NONE', {
    get: Context2d$ShapeRasterizerMethod$NONE_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X1', {
    get: Context2d$ShapeRasterizerMethod$X1_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X2', {
    get: Context2d$ShapeRasterizerMethod$X2_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X4', {
    get: Context2d$ShapeRasterizerMethod$X4_getInstance
  });
  Context2d.ShapeRasterizerMethod = Context2d$ShapeRasterizerMethod;
  Object.defineProperty(Context2d$Renderer, 'Companion', {
    get: Context2d$Renderer$Companion_getInstance
  });
  Context2d.Renderer = Context2d$Renderer;
  Object.defineProperty(Context2d$VerticalAlign, 'TOP', {
    get: Context2d$VerticalAlign$TOP_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'MIDLE', {
    get: Context2d$VerticalAlign$MIDLE_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'BASELINE', {
    get: Context2d$VerticalAlign$BASELINE_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'BOTTOM', {
    get: Context2d$VerticalAlign$BOTTOM_getInstance
  });
  Context2d.VerticalAlign = Context2d$VerticalAlign;
  Object.defineProperty(Context2d$HorizontalAlign, 'LEFT', {
    get: Context2d$HorizontalAlign$LEFT_getInstance
  });
  Object.defineProperty(Context2d$HorizontalAlign, 'CENTER', {
    get: Context2d$HorizontalAlign$CENTER_getInstance
  });
  Object.defineProperty(Context2d$HorizontalAlign, 'RIGHT', {
    get: Context2d$HorizontalAlign$RIGHT_getInstance
  });
  Context2d.HorizontalAlign = Context2d$HorizontalAlign;
  Object.defineProperty(Context2d$ScaleMode, 'NONE', {
    get: Context2d$ScaleMode$NONE_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'HORIZONTAL', {
    get: Context2d$ScaleMode$HORIZONTAL_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'VERTICAL', {
    get: Context2d$ScaleMode$VERTICAL_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'NORMAL', {
    get: Context2d$ScaleMode$NORMAL_getInstance
  });
  Context2d.ScaleMode = Context2d$ScaleMode;
  Context2d.State = Context2d$State;
  Context2d.Font = Context2d$Font;
  Context2d.TextMetrics = Context2d$TextMetrics;
  Context2d.Paint = Context2d$Paint;
  Object.defineProperty(Context2d, 'None', {
    get: Context2d$None_getInstance
  });
  Context2d.Color = Context2d$Color;
  Context2d.TransformedPaint = Context2d$TransformedPaint;
  Object.defineProperty(Context2d$Gradient$Kind, 'LINEAR', {
    get: Context2d$Gradient$Kind$LINEAR_getInstance
  });
  Object.defineProperty(Context2d$Gradient$Kind, 'RADIAL', {
    get: Context2d$Gradient$Kind$RADIAL_getInstance
  });
  Context2d$Gradient.Kind = Context2d$Gradient$Kind;
  Object.defineProperty(Context2d$Gradient$Units, 'USER_SPACE_ON_USE', {
    get: Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance
  });
  Object.defineProperty(Context2d$Gradient$Units, 'OBJECT_BOUNDING_BOX', {
    get: Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance
  });
  Context2d$Gradient.Units = Context2d$Gradient$Units;
  Object.defineProperty(Context2d$Gradient$InterpolationMethod, 'LINEAR', {
    get: Context2d$Gradient$InterpolationMethod$LINEAR_getInstance
  });
  Object.defineProperty(Context2d$Gradient$InterpolationMethod, 'NORMAL', {
    get: Context2d$Gradient$InterpolationMethod$NORMAL_getInstance
  });
  Context2d$Gradient.InterpolationMethod = Context2d$Gradient$InterpolationMethod;
  Context2d.Gradient = Context2d$Gradient;
  Context2d.BitmapPaint = Context2d$BitmapPaint;
  Context2d.Drawable = Context2d$Drawable;
  Context2d.BoundsDrawable = Context2d$BoundsDrawable;
  Context2d.SizedDrawable = Context2d$SizedDrawable;
  Context2d.FuncDrawable = Context2d$FuncDrawable;
  package$vector.Context2d = Context2d;
  package$vector.filled_8a6l4s$ = filled;
  package$vector.scaled_74j9n8$ = scaled;
  package$vector.translated_74j9n8$ = translated;
  package$vector.render_hd3tpo$ = render_0;
  package$vector.GraphicsPath = GraphicsPath;
  package$vector.SvgBuilder = SvgBuilder;
  package$vector.toString_9rbwic$ = toString_2;
  package$vector.toSvgPathString_2918ih$ = toSvgPathString;
  package$vector.Shape = Shape;
  package$vector.getBounds_infsew$ = getBounds;
  package$vector.toSvg_wxx4ll$ = toSvg_0;
  package$vector.StyledShape = StyledShape;
  package$vector.toSvg_mjfkvb$ = toSvg_1;
  package$vector.FillShape = FillShape;
  package$vector.PolylineShape = PolylineShape;
  package$vector.CompoundShape = CompoundShape;
  SVG_0.Style = SVG$Style;
  Object.defineProperty(SVG$GradientUnits, 'USER_SPACE_ON_USER', {
    get: SVG$GradientUnits$USER_SPACE_ON_USER_getInstance
  });
  Object.defineProperty(SVG$GradientUnits, 'OBJECT_BOUNDING_BOX', {
    get: SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance
  });
  SVG_0.GradientUnits = SVG$GradientUnits;
  $$importsForInline$$['klogger-js'] = $module$klogger_js;
  Object.defineProperty(SVG_0, 'Companion', {
    get: SVG$Companion_getInstance
  });
  SVG_0.PathToken = SVG$PathToken;
  SVG_0.PathTokenNumber = SVG$PathTokenNumber;
  SVG_0.PathTokenCmd = SVG$PathTokenCmd;
  Object.defineProperty(SVG$SvgStyle, 'Companion', {
    get: SVG$SvgStyle$Companion_getInstance
  });
  SVG_0.SvgStyle = SVG$SvgStyle;
  var package$format_0 = package$vector.format || (package$vector.format = {});
  package$format_0.SVG_init_61zpoe$ = SVG_init;
  package$format_0.SVG = SVG_0;
  package$format_0.expect_2mact2$ = expect;
  package$format_0.getPoints_krcd5j$ = getPoints;
  Object.defineProperty(package$korim, 'NativeImageSpecialReader', {
    get: NativeImageSpecialReader_getInstance
  });
  Object.defineProperty(package$format, 'HtmlCanvas', {
    get: HtmlCanvas_getInstance
  });
  Object.defineProperty(package$format, 'HtmlImage', {
    get: HtmlImage_getInstance
  });
  package$format.toHtmlNative_p18lal$ = toHtmlNative;
  package$format.HtmlImageSpecialReader = HtmlImageSpecialReader;
  package$format.CanvasNativeImage = CanvasNativeImage;
  Object.defineProperty(NativeImageFormatProvider.prototype, 'BrowserImage', {
    get: NativeImageFormatProvider$BrowserImage_getInstance
  });
  Object.defineProperty(package$format, 'NativeImageFormatProvider', {
    get: NativeImageFormatProvider_getInstance
  });
  package$format.CanvasContext2dRenderer = CanvasContext2dRenderer;
  FillShape.prototype.addBounds_w97n1m$ = StyledShape.prototype.addBounds_w97n1m$;
  FillShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  FillShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  PolylineShape.prototype.addBounds_w97n1m$ = StyledShape.prototype.addBounds_w97n1m$;
  PolylineShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  PolylineShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  KORIM_VERSION = '0.19.1';
  defaultImageFormats = lazy(defaultImageFormats$lambda);
  nativeImageFormatProviders = lazy(nativeImageFormatProviders$lambda);
  nativeImageFormatProvider = NativeImageFormatProvider_getInstance();
  nativeImageLoadingEnabled = true;
  StandardImageFormats = listOf_0([JPEG_getInstance(), PNG_getInstance(), TGA_getInstance(), PSD_getInstance()]);
  Kotlin.defineModule('korim-js', _);
  return _;
}));

//# sourceMappingURL=korim-js.js.map
