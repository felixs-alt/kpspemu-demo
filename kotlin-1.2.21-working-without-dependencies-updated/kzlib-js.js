(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kzlib-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kzlib-js'.");
    }
    root['kzlib-js'] = factory(typeof this['kzlib-js'] === 'undefined' ? {} : this['kzlib-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toByte = Kotlin.toByte;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwUPAE = Kotlin.throwUPAE;
  var toShort = Kotlin.toShort;
  var throwCCE = Kotlin.throwCCE;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var toString = Kotlin.toString;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var Exception = Kotlin.kotlin.Exception;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var until = Kotlin.kotlin.ranges.until_ebnic$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var toChar = Kotlin.toChar;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  ByteArrayInputStream.prototype = Object.create(InputStream.prototype);
  ByteArrayInputStream.prototype.constructor = ByteArrayInputStream;
  ByteArrayOutputStream.prototype = Object.create(OutputStream.prototype);
  ByteArrayOutputStream.prototype.constructor = ByteArrayOutputStream;
  Deflater.prototype = Object.create(ZStream.prototype);
  Deflater.prototype.constructor = Deflater;
  FilterOutputStream.prototype = Object.create(OutputStream.prototype);
  FilterOutputStream.prototype.constructor = FilterOutputStream;
  DeflaterOutputStream.prototype = Object.create(FilterOutputStream.prototype);
  DeflaterOutputStream.prototype.constructor = DeflaterOutputStream;
  FilterInputStream.prototype = Object.create(InputStream.prototype);
  FilterInputStream.prototype.constructor = FilterInputStream;
  GZIPException.prototype = Object.create(RuntimeException.prototype);
  GZIPException.prototype.constructor = GZIPException;
  InflaterInputStream.prototype = Object.create(FilterInputStream.prototype);
  InflaterInputStream.prototype.constructor = InflaterInputStream;
  GZIPInputStream.prototype = Object.create(InflaterInputStream.prototype);
  GZIPInputStream.prototype.constructor = GZIPInputStream;
  GZIPOutputStream.prototype = Object.create(DeflaterOutputStream.prototype);
  GZIPOutputStream.prototype.constructor = GZIPOutputStream;
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  EOFException.prototype = Object.create(IOException.prototype);
  EOFException.prototype.constructor = EOFException;
  Inflate$Return.prototype = Object.create(Exception.prototype);
  Inflate$Return.prototype.constructor = Inflate$Return;
  Inflater.prototype = Object.create(ZStream.prototype);
  Inflater.prototype.constructor = Inflater;
  JZlib$WrapperType.prototype = Object.create(Enum.prototype);
  JZlib$WrapperType.prototype.constructor = JZlib$WrapperType;
  ZInputStream.prototype = Object.create(FilterInputStream.prototype);
  ZInputStream.prototype.constructor = ZInputStream;
  ZOutputStream.prototype = Object.create(FilterOutputStream.prototype);
  ZOutputStream.prototype.constructor = ZOutputStream;
  ZStreamException.prototype = Object.create(Exception.prototype);
  ZStreamException.prototype.constructor = ZStreamException;
  function Adler32() {
    Adler32$Companion_getInstance();
    this.s1_0 = 1;
    this.s2_0 = 0;
  }
  Adler32.prototype.reset_za3lpa$ = function (init) {
    this.s1_0 = init >> 0 & 65535;
    this.s2_0 = init >> 16 & 65535;
  };
  Adler32.prototype.reset = function () {
    this.s1_0 = 1;
    this.s2_0 = 0;
  };
  Object.defineProperty(Adler32.prototype, 'value', {
    get: function () {
      return this.s2_0 << 16 | this.s1_0;
    }
  });
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
    var sum1;
    var sum2;
    var rem;
    rem = len2.modulo(Kotlin.Long.fromInt(65521));
    sum1 = adler1.and(Kotlin.Long.fromInt(65535));
    sum2 = rem.multiply(sum1);
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
    interfaces: [Checksum]
  };
  function ByteArrayInputStream() {
    this.buf = null;
    this.pos = 0;
    this.mark = 0;
    this.count = 0;
  }
  ByteArrayInputStream.prototype.available = function () {
    return this.count - this.pos | 0;
  };
  ByteArrayInputStream.prototype.close = function () {
  };
  ByteArrayInputStream.prototype.mark_za3lpa$ = function (readlimit) {
    this.mark = this.pos;
  };
  ByteArrayInputStream.prototype.markSupported = function () {
    return true;
  };
  ByteArrayInputStream.prototype.read = function () {
    var tmp$;
    if (this.pos < this.count) {
      return this.buf[tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$] & 255;
    }
     else
      return -1;
  };
  ByteArrayInputStream.prototype.read_mj6st8$ = function (buffer, byteOffset, byteCount) {
    if (this.pos >= this.count)
      return -1;
    if (byteCount === 0)
      return 0;
    var copylen = (this.count - this.pos | 0) < byteCount ? this.count - this.pos | 0 : byteCount;
    var srcPos = this.pos;
    buffer.set(this.buf.subarray(srcPos, srcPos + copylen | 0), byteOffset);
    this.pos = this.pos + copylen | 0;
    return copylen;
  };
  ByteArrayInputStream.prototype.reset = function () {
    this.pos = this.mark;
  };
  ByteArrayInputStream.prototype.skip_s8cxhz$ = function (byteCount) {
    if (byteCount.compareTo_11rb$(Kotlin.Long.fromInt(0)) <= 0)
      return Kotlin.Long.ZERO;
    var temp = this.pos;
    this.pos = Kotlin.Long.fromInt(this.count - this.pos | 0).compareTo_11rb$(byteCount) < 0 ? this.count : Kotlin.Long.fromInt(this.pos).add(byteCount).toInt();
    return Kotlin.Long.fromInt(this.pos - temp | 0);
  };
  ByteArrayInputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayInputStream',
    interfaces: [InputStream]
  };
  function ByteArrayInputStream_init(buf, $this) {
    $this = $this || Object.create(ByteArrayInputStream.prototype);
    InputStream.call($this);
    ByteArrayInputStream.call($this);
    $this.mark = 0;
    $this.buf = buf;
    $this.count = buf.length;
    return $this;
  }
  function ByteArrayInputStream_init_0(buf, offset, length, $this) {
    $this = $this || Object.create(ByteArrayInputStream.prototype);
    InputStream.call($this);
    ByteArrayInputStream.call($this);
    $this.buf = buf;
    $this.pos = offset;
    $this.mark = offset;
    $this.count = (offset + length | 0) > buf.length ? buf.length : offset + length | 0;
    return $this;
  }
  function ByteArrayOutputStream(size) {
    if (size === void 0)
      size = 32;
    OutputStream.call(this);
    this.buf = new Int8Array(size);
    this.count = 0;
  }
  ByteArrayOutputStream.prototype.expand_4e7hq0$_0 = function (i) {
    if ((this.count + i | 0) <= this.buf.length)
      return;
    var newbuf = new Int8Array((this.count + i | 0) * 2 | 0);
    newbuf.set(this.buf.subarray(0, 0 + this.count | 0), 0);
    this.buf = newbuf;
  };
  ByteArrayOutputStream.prototype.reset = function () {
    this.count = 0;
  };
  ByteArrayOutputStream.prototype.size = function () {
    return this.count;
  };
  ByteArrayOutputStream.prototype.toByteArray = function () {
    var newArray = new Int8Array(this.count);
    newArray.set(this.buf.subarray(0, 0 + this.count | 0), 0);
    return newArray;
  };
  ByteArrayOutputStream.prototype.toString = function () {
    return toSimpleString(this.buf);
  };
  ByteArrayOutputStream.prototype.write_mj6st8$ = function (buffer, offset, len) {
    if (len === 0)
      return;
    this.expand_4e7hq0$_0(len);
    var dst = this.buf;
    var dstPos = this.count;
    dst.set(buffer.subarray(offset, offset + len | 0), dstPos);
    this.count = this.count + len | 0;
  };
  ByteArrayOutputStream.prototype.write_za3lpa$ = function (oneByte) {
    var tmp$;
    if (this.count === this.buf.length)
      this.expand_4e7hq0$_0(1);
    this.buf[tmp$ = this.count, this.count = tmp$ + 1 | 0, tmp$] = toByte(oneByte);
  };
  ByteArrayOutputStream.prototype.writeTo_bip3kh$ = function (out) {
    out.write_mj6st8$(this.buf, 0, this.count);
  };
  ByteArrayOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayOutputStream',
    interfaces: [OutputStream]
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
    this.crc_table_0 = null;
    this.crc_table_0 = new Int32Array(256);
    for (var n = 0; n <= 255; n++) {
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
      ensureNotNull(this.crc_table_0)[n] = c;
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
      return ensureNotNull(this.crc_table_0).slice();
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
    interfaces: [Checksum]
  };
  function Checksum() {
  }
  Checksum.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Checksum',
    interfaces: []
  };
  function Deflate(strm) {
    Deflate$Companion_getInstance();
    this.strm_8be2vx$ = strm;
    this.status_8be2vx$ = 0;
    this.pending_buf_8be2vx$_8qpk44$_0 = this.pending_buf_8be2vx$_8qpk44$_0;
    this.pending_buf_size_8be2vx$ = 0;
    this.pending_out_8be2vx$ = 0;
    this.pending_8be2vx$ = 0;
    this.wrap_8be2vx$ = 1;
    this.data_type_8be2vx$ = 0;
    this.method_8be2vx$ = 0;
    this.last_flush_8be2vx$ = 0;
    this.w_size_8be2vx$ = 0;
    this.w_bits_8be2vx$ = 0;
    this.w_mask_8be2vx$ = 0;
    this.window_8be2vx$ = new Int8Array([]);
    this.window_size_8be2vx$ = 0;
    this.prev_8be2vx$ = null;
    this.head_8be2vx$ = null;
    this.ins_h_8be2vx$ = 0;
    this.hash_size_8be2vx$ = 0;
    this.hash_bits_8be2vx$ = 0;
    this.hash_mask_8be2vx$ = 0;
    this.hash_shift_8be2vx$ = 0;
    this.block_start_8be2vx$ = 0;
    this.match_length_8be2vx$ = 0;
    this.prev_match_8be2vx$ = 0;
    this.match_available_8be2vx$ = 0;
    this.strstart_8be2vx$ = 0;
    this.match_start_8be2vx$ = 0;
    this.lookahead_8be2vx$ = 0;
    this.prev_length_8be2vx$ = 0;
    this.max_chain_length_8be2vx$ = 0;
    this.max_lazy_match_8be2vx$ = 0;
    this.level_8be2vx$ = 0;
    this.strategy_8be2vx$ = 0;
    this.good_match_8be2vx$ = 0;
    this.nice_match_8be2vx$ = 0;
    this.dyn_ltree_8be2vx$ = null;
    this.dyn_dtree_8be2vx$ = null;
    this.bl_tree_8be2vx$ = null;
    this.l_desc_8be2vx$ = new Tree();
    this.d_desc_8be2vx$ = new Tree();
    this.bl_desc_8be2vx$ = new Tree();
    this.bl_count_8be2vx$ = new Int16Array(Deflate$Companion_getInstance().MAX_BITS_0 + 1 | 0);
    this.next_code_8be2vx$ = new Int16Array(Deflate$Companion_getInstance().MAX_BITS_0 + 1 | 0);
    this.heap_8be2vx$ = new Int32Array((2 * Deflate$Companion_getInstance().L_CODES_0 | 0) + 1 | 0);
    this.heap_len_8be2vx$ = 0;
    this.heap_max_8be2vx$ = 0;
    this.depth_8be2vx$ = new Int8Array((2 * Deflate$Companion_getInstance().L_CODES_0 | 0) + 1 | 0);
    this.l_buf_8be2vx$_z6ghr5$_0 = this.l_buf_8be2vx$_z6ghr5$_0;
    this.lit_bufsize_8be2vx$ = 0;
    this.last_lit_8be2vx$ = 0;
    this.d_buf_8be2vx$ = 0;
    this.opt_len_8be2vx$ = 0;
    this.static_len_8be2vx$ = 0;
    this.matches_8be2vx$ = 0;
    this.last_eob_len_8be2vx$ = 0;
    this.bi_buf_8be2vx$ = 0;
    this.bi_valid_8be2vx$ = 0;
    this.gheader_8be2vx$ = null;
    this.dyn_ltree_8be2vx$ = new Int16Array(Deflate$Companion_getInstance().HEAP_SIZE_0 * 2 | 0);
    this.dyn_dtree_8be2vx$ = new Int16Array(((2 * Deflate$Companion_getInstance().D_CODES_0 | 0) + 1 | 0) * 2 | 0);
    this.bl_tree_8be2vx$ = new Int16Array(((2 * Deflate$Companion_getInstance().BL_CODES_0 | 0) + 1 | 0) * 2 | 0);
  }
  Object.defineProperty(Deflate.prototype, 'pending_buf_8be2vx$', {
    get: function () {
      if (this.pending_buf_8be2vx$_8qpk44$_0 == null)
        return throwUPAE('pending_buf');
      return this.pending_buf_8be2vx$_8qpk44$_0;
    },
    set: function (pending_buf) {
      this.pending_buf_8be2vx$_8qpk44$_0 = pending_buf;
    }
  });
  Object.defineProperty(Deflate.prototype, 'l_buf_8be2vx$', {
    get: function () {
      if (this.l_buf_8be2vx$_z6ghr5$_0 == null)
        return throwUPAE('l_buf');
      return this.l_buf_8be2vx$_z6ghr5$_0;
    },
    set: function (l_buf) {
      this.l_buf_8be2vx$_z6ghr5$_0 = l_buf;
    }
  });
  Object.defineProperty(Deflate.prototype, 'gzipHeader_8be2vx$', {
    get: function () {
      if (this.gheader_8be2vx$ == null) {
        this.gheader_8be2vx$ = new GZIPHeader();
      }
      return ensureNotNull(this.gheader_8be2vx$);
    }
  });
  function Deflate$Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
  }
  Deflate$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  Deflate.prototype.lm_init_8be2vx$ = function () {
    var tmp$;
    this.window_size_8be2vx$ = 2 * this.w_size_8be2vx$ | 0;
    ensureNotNull(this.head_8be2vx$)[this.hash_size_8be2vx$ - 1 | 0] = 0;
    tmp$ = this.hash_size_8be2vx$ - 1 | 0;
    for (var i = 0; i < tmp$; i++) {
      ensureNotNull(this.head_8be2vx$)[i] = 0;
    }
    this.max_lazy_match_8be2vx$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].max_lazy;
    this.good_match_8be2vx$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].good_length;
    this.nice_match_8be2vx$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].nice_length;
    this.max_chain_length_8be2vx$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].max_chain;
    this.strstart_8be2vx$ = 0;
    this.block_start_8be2vx$ = 0;
    this.lookahead_8be2vx$ = 0;
    this.prev_length_8be2vx$ = Deflate$Companion_getInstance().MIN_MATCH_0 - 1 | 0;
    this.match_length_8be2vx$ = this.prev_length_8be2vx$;
    this.match_available_8be2vx$ = 0;
    this.ins_h_8be2vx$ = 0;
  };
  Deflate.prototype.tr_init_8be2vx$ = function () {
    this.l_desc_8be2vx$.dyn_tree = this.dyn_ltree_8be2vx$;
    this.l_desc_8be2vx$.stat_desc = StaticTree$Companion_getInstance().static_l_desc;
    this.d_desc_8be2vx$.dyn_tree = this.dyn_dtree_8be2vx$;
    this.d_desc_8be2vx$.stat_desc = StaticTree$Companion_getInstance().static_d_desc;
    this.bl_desc_8be2vx$.dyn_tree = this.bl_tree_8be2vx$;
    this.bl_desc_8be2vx$.stat_desc = StaticTree$Companion_getInstance().static_bl_desc;
    this.bi_buf_8be2vx$ = 0;
    this.bi_valid_8be2vx$ = 0;
    this.last_eob_len_8be2vx$ = 8;
    this.init_block_8be2vx$();
  };
  Deflate.prototype.init_block_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = Deflate$Companion_getInstance().L_CODES_0;
    for (var i = 0; i < tmp$; i++)
      this.dyn_ltree_8be2vx$[i * 2 | 0] = 0;
    tmp$_0 = Deflate$Companion_getInstance().D_CODES_0;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++)
      this.dyn_dtree_8be2vx$[i_0 * 2 | 0] = 0;
    tmp$_1 = Deflate$Companion_getInstance().BL_CODES_0;
    for (var i_1 = 0; i_1 < tmp$_1; i_1++)
      this.bl_tree_8be2vx$[i_1 * 2 | 0] = 0;
    this.dyn_ltree_8be2vx$[Deflate$Companion_getInstance().END_BLOCK_0 * 2 | 0] = 1;
    this.static_len_8be2vx$ = 0;
    this.opt_len_8be2vx$ = this.static_len_8be2vx$;
    this.matches_8be2vx$ = 0;
    this.last_lit_8be2vx$ = this.matches_8be2vx$;
  };
  Deflate.prototype.pqdownheap_eap75r$ = function (tree, k) {
    var k_0 = k;
    var v = this.heap_8be2vx$[k_0];
    var j = k_0 << 1;
    while (j <= this.heap_len_8be2vx$) {
      if (j < this.heap_len_8be2vx$ && Deflate$Companion_getInstance().smaller_9zeuv7$(tree, this.heap_8be2vx$[j + 1 | 0], this.heap_8be2vx$[j], this.depth_8be2vx$)) {
        j = j + 1 | 0;
      }
      if (Deflate$Companion_getInstance().smaller_9zeuv7$(tree, v, this.heap_8be2vx$[j], this.depth_8be2vx$))
        break;
      this.heap_8be2vx$[k_0] = this.heap_8be2vx$[j];
      k_0 = j;
      j = j << 1;
    }
    this.heap_8be2vx$[k_0] = v;
  };
  Deflate.prototype.scan_tree_eap75r$ = function (tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[(0 * 2 | 0) + 1 | 0];
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[((max_code + 1 | 0) * 2 | 0) + 1 | 0] = toShort(65535);
    n = 0;
    while (n <= max_code) {
      curlen = nextlen;
      nextlen = tree[((n + 1 | 0) * 2 | 0) + 1 | 0];
      if ((count = count + 1 | 0, count) < max_count && curlen === nextlen) {
        n = n + 1 | 0;
        continue;
      }
       else if (count < min_count) {
        this.bl_tree_8be2vx$[curlen * 2 | 0] = toShort(this.bl_tree_8be2vx$[curlen * 2 | 0] + count);
      }
       else if (curlen !== 0) {
        if (curlen !== prevlen) {
          var tmp$;
          tmp$ = this.bl_tree_8be2vx$;
          tmp$[curlen * 2 | 0] = toShort(tmp$[curlen * 2 | 0] + 1);
        }
        var tmp$_0, tmp$_1;
        tmp$_0 = this.bl_tree_8be2vx$;
        tmp$_1 = Deflate$Companion_getInstance().REP_3_6_0 * 2 | 0;
        tmp$_0[tmp$_1] = toShort(tmp$_0[tmp$_1] + 1);
      }
       else if (count <= 10) {
        var tmp$_2, tmp$_3;
        tmp$_2 = this.bl_tree_8be2vx$;
        tmp$_3 = Deflate$Companion_getInstance().REPZ_3_10_0 * 2 | 0;
        tmp$_2[tmp$_3] = toShort(tmp$_2[tmp$_3] + 1);
      }
       else {
        var tmp$_4, tmp$_5;
        tmp$_4 = this.bl_tree_8be2vx$;
        tmp$_5 = Deflate$Companion_getInstance().REPZ_11_138_0 * 2 | 0;
        tmp$_4[tmp$_5] = toShort(tmp$_4[tmp$_5] + 1);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
       else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      }
       else {
        max_count = 7;
        min_count = 4;
      }
      n = n + 1 | 0;
    }
  };
  Deflate.prototype.build_bl_tree_8be2vx$ = function () {
    var max_blindex;
    this.scan_tree_eap75r$(this.dyn_ltree_8be2vx$, this.l_desc_8be2vx$.max_code);
    this.scan_tree_eap75r$(this.dyn_dtree_8be2vx$, this.d_desc_8be2vx$.max_code);
    this.bl_desc_8be2vx$.build_tree_ixymjh$(this);
    max_blindex = Deflate$Companion_getInstance().BL_CODES_0 - 1 | 0;
    while (max_blindex >= 3 && this.bl_tree_8be2vx$[Tree$Companion_getInstance().bl_order[max_blindex] * 2 + 1 | 0] === 0) {
      max_blindex = max_blindex - 1 | 0;
    }
    this.opt_len_8be2vx$ = this.opt_len_8be2vx$ + ((3 * (max_blindex + 1 | 0) | 0) + 5 + 5 + 4) | 0;
    return max_blindex;
  };
  Deflate.prototype.send_all_trees_cub51b$ = function (lcodes, dcodes, blcodes) {
    var rank;
    this.send_bits_6xvm5r$(lcodes - 257 | 0, 5);
    this.send_bits_6xvm5r$(dcodes - 1 | 0, 5);
    this.send_bits_6xvm5r$(blcodes - 4 | 0, 4);
    rank = 0;
    while (rank < blcodes) {
      this.send_bits_6xvm5r$(this.bl_tree_8be2vx$[Tree$Companion_getInstance().bl_order[rank] * 2 + 1 | 0], 3);
      rank = rank + 1 | 0;
    }
    this.send_tree_eap75r$(this.dyn_ltree_8be2vx$, lcodes - 1 | 0);
    this.send_tree_eap75r$(this.dyn_dtree_8be2vx$, dcodes - 1 | 0);
  };
  Deflate.prototype.send_tree_eap75r$ = function (tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[(0 * 2 | 0) + 1 | 0];
    var count = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    n = 0;
    while (n <= max_code) {
      curlen = nextlen;
      nextlen = tree[((n + 1 | 0) * 2 | 0) + 1 | 0];
      if ((count = count + 1 | 0, count) < max_count && curlen === nextlen) {
        n = n + 1 | 0;
        continue;
      }
       else if (count < min_count) {
        do {
          this.send_code_kfa56r$(curlen, this.bl_tree_8be2vx$);
        }
         while ((count = count - 1 | 0, count) !== 0);
      }
       else if (curlen !== 0) {
        if (curlen !== prevlen) {
          this.send_code_kfa56r$(curlen, this.bl_tree_8be2vx$);
          count = count - 1 | 0;
        }
        this.send_code_kfa56r$(Deflate$Companion_getInstance().REP_3_6_0, this.bl_tree_8be2vx$);
        this.send_bits_6xvm5r$(count - 3 | 0, 2);
      }
       else if (count <= 10) {
        this.send_code_kfa56r$(Deflate$Companion_getInstance().REPZ_3_10_0, this.bl_tree_8be2vx$);
        this.send_bits_6xvm5r$(count - 3 | 0, 3);
      }
       else {
        this.send_code_kfa56r$(Deflate$Companion_getInstance().REPZ_11_138_0, this.bl_tree_8be2vx$);
        this.send_bits_6xvm5r$(count - 11 | 0, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
       else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      }
       else {
        max_count = 7;
        min_count = 4;
      }
      n = n + 1 | 0;
    }
  };
  Deflate.prototype.put_byte_idiqg2$ = function (p, start, len) {
    var src = ensureNotNull(p);
    var dst = this.pending_buf_8be2vx$;
    var dstPos = this.pending_8be2vx$;
    dst.set(src.subarray(start, start + len | 0), dstPos);
    this.pending_8be2vx$ = this.pending_8be2vx$ + len | 0;
  };
  Deflate.prototype.put_byte_8e99oo$ = function (c) {
    var tmp$;
    this.pending_buf_8be2vx$[tmp$ = this.pending_8be2vx$, this.pending_8be2vx$ = tmp$ + 1 | 0, tmp$] = c;
  };
  Deflate.prototype.put_short_kcn2v3$ = function (w) {
    this.put_byte_8e99oo$(toByte(w));
    this.put_byte_8e99oo$(toByte(w >>> 8));
  };
  Deflate.prototype.putShortMSB_kcn2v3$ = function (b) {
    this.put_byte_8e99oo$(toByte(b >> 8));
    this.put_byte_8e99oo$(toByte(b));
  };
  Deflate.prototype.send_code_kfa56r$ = function (c, tree) {
    var c2 = c * 2 | 0;
    this.send_bits_6xvm5r$(tree[c2] & 65535, tree[c2 + 1 | 0] & 65535);
  };
  Deflate.prototype.send_bits_6xvm5r$ = function (value, length) {
    if (this.bi_valid_8be2vx$ > (Deflate$Companion_getInstance().Buf_size_0 - length | 0)) {
      this.bi_buf_8be2vx$ = this.bi_buf_8be2vx$ | value << this.bi_valid_8be2vx$ & 65535;
      this.put_short_kcn2v3$(this.bi_buf_8be2vx$);
      this.bi_buf_8be2vx$ = value >>> Deflate$Companion_getInstance().Buf_size_0 - this.bi_valid_8be2vx$;
      this.bi_valid_8be2vx$ = this.bi_valid_8be2vx$ + (length - Deflate$Companion_getInstance().Buf_size_0) | 0;
    }
     else {
      this.bi_buf_8be2vx$ = this.bi_buf_8be2vx$ | value << this.bi_valid_8be2vx$ & 65535;
      this.bi_valid_8be2vx$ = this.bi_valid_8be2vx$ + length | 0;
    }
  };
  Deflate.prototype._tr_align_8be2vx$ = function () {
    this.send_bits_6xvm5r$(Deflate$Companion_getInstance().STATIC_TREES_0 << 1, 3);
    this.send_code_kfa56r$(Deflate$Companion_getInstance().END_BLOCK_0, StaticTree$Companion_getInstance().static_ltree);
    this.bi_flush_8be2vx$();
    if ((1 + this.last_eob_len_8be2vx$ + 10 - this.bi_valid_8be2vx$ | 0) < 9) {
      this.send_bits_6xvm5r$(Deflate$Companion_getInstance().STATIC_TREES_0 << 1, 3);
      this.send_code_kfa56r$(Deflate$Companion_getInstance().END_BLOCK_0, StaticTree$Companion_getInstance().static_ltree);
      this.bi_flush_8be2vx$();
    }
    this.last_eob_len_8be2vx$ = 7;
  };
  Deflate.prototype._tr_tally_6xvm5r$ = function (dist, lc) {
    var dist_0 = dist;
    this.pending_buf_8be2vx$[this.d_buf_8be2vx$ + (this.last_lit_8be2vx$ * 2 | 0) | 0] = toByte(dist_0 >>> 8);
    this.pending_buf_8be2vx$[this.d_buf_8be2vx$ + (this.last_lit_8be2vx$ * 2 | 0) + 1 | 0] = toByte(dist_0);
    this.l_buf_8be2vx$[this.last_lit_8be2vx$] = toByte(lc);
    this.last_lit_8be2vx$ = this.last_lit_8be2vx$ + 1 | 0;
    if (dist_0 === 0) {
      var tmp$;
      tmp$ = this.dyn_ltree_8be2vx$;
      tmp$[lc * 2 | 0] = toShort(tmp$[lc * 2 | 0] + 1);
    }
     else {
      this.matches_8be2vx$ = this.matches_8be2vx$ + 1 | 0;
      dist_0 = dist_0 - 1 | 0;
      var tmp$_0, tmp$_1;
      tmp$_0 = this.dyn_ltree_8be2vx$;
      tmp$_1 = (Tree$Companion_getInstance()._length_code[lc] + Deflate$Companion_getInstance().LITERALS_0 + 1 | 0) * 2 | 0;
      tmp$_0[tmp$_1] = toShort(tmp$_0[tmp$_1] + 1);
      var tmp$_2, tmp$_3;
      tmp$_2 = this.dyn_dtree_8be2vx$;
      tmp$_3 = Tree$Companion_getInstance().d_code_za3lpa$(dist_0) * 2 | 0;
      tmp$_2[tmp$_3] = toShort(tmp$_2[tmp$_3] + 1);
    }
    if ((this.last_lit_8be2vx$ & 8191) === 0 && this.level_8be2vx$ > 2) {
      var out_length = this.last_lit_8be2vx$ * 8 | 0;
      var in_length = this.strstart_8be2vx$ - this.block_start_8be2vx$ | 0;
      var dcode;
      dcode = 0;
      while (dcode < Deflate$Companion_getInstance().D_CODES_0) {
        out_length = out_length + Kotlin.Long.fromInt(this.dyn_dtree_8be2vx$[dcode * 2 | 0]).multiply(Kotlin.Long.fromInt(5).add(Kotlin.Long.fromInt(Tree$Companion_getInstance().extra_dbits[dcode]))).toInt() | 0;
        dcode = dcode + 1 | 0;
      }
      out_length = out_length >>> 3;
      if (this.matches_8be2vx$ < (this.last_lit_8be2vx$ / 2 | 0) && out_length < (in_length / 2 | 0))
        return true;
    }
    return this.last_lit_8be2vx$ === (this.lit_bufsize_8be2vx$ - 1 | 0);
  };
  Deflate.prototype.compress_block_fitcid$ = function (ltree, dtree) {
    var dist;
    var lc;
    var lx = 0;
    var code;
    var extra;
    if (this.last_lit_8be2vx$ !== 0) {
      do {
        dist = this.pending_buf_8be2vx$[this.d_buf_8be2vx$ + (lx * 2 | 0) | 0] << 8 & 65280 | this.pending_buf_8be2vx$[this.d_buf_8be2vx$ + (lx * 2 | 0) + 1 | 0] & 255;
        lc = this.l_buf_8be2vx$[lx] & 255;
        lx = lx + 1 | 0;
        if (dist === 0) {
          this.send_code_kfa56r$(lc, ltree);
        }
         else {
          code = Tree$Companion_getInstance()._length_code[lc];
          this.send_code_kfa56r$(code + Deflate$Companion_getInstance().LITERALS_0 + 1 | 0, ltree);
          extra = Tree$Companion_getInstance().extra_lbits[code];
          if (extra !== 0) {
            lc = lc - Tree$Companion_getInstance().base_length[code] | 0;
            this.send_bits_6xvm5r$(lc, extra);
          }
          dist = dist - 1 | 0;
          code = Tree$Companion_getInstance().d_code_za3lpa$(dist);
          this.send_code_kfa56r$(code, dtree);
          extra = Tree$Companion_getInstance().extra_dbits[code];
          if (extra !== 0) {
            dist = dist - Tree$Companion_getInstance().base_dist[code] | 0;
            this.send_bits_6xvm5r$(dist, extra);
          }
        }
      }
       while (lx < this.last_lit_8be2vx$);
    }
    this.send_code_kfa56r$(Deflate$Companion_getInstance().END_BLOCK_0, ltree);
    this.last_eob_len_8be2vx$ = ltree[(Deflate$Companion_getInstance().END_BLOCK_0 * 2 | 0) + 1 | 0];
  };
  Deflate.prototype.set_data_type_8be2vx$ = function () {
    var n = 0;
    var ascii_freq = 0;
    var bin_freq = 0;
    while (n < 7) {
      bin_freq = bin_freq + this.dyn_ltree_8be2vx$[n * 2 | 0] | 0;
      n = n + 1 | 0;
    }
    while (n < 128) {
      ascii_freq = ascii_freq + this.dyn_ltree_8be2vx$[n * 2 | 0] | 0;
      n = n + 1 | 0;
    }
    while (n < Deflate$Companion_getInstance().LITERALS_0) {
      bin_freq = bin_freq + this.dyn_ltree_8be2vx$[n * 2 | 0] | 0;
      n = n + 1 | 0;
    }
    this.data_type_8be2vx$ = toByte(bin_freq > ascii_freq >>> 2 ? Deflate$Companion_getInstance().Z_BINARY_0 : Deflate$Companion_getInstance().Z_ASCII_0);
  };
  Deflate.prototype.bi_flush_8be2vx$ = function () {
    if (this.bi_valid_8be2vx$ === 16) {
      this.put_short_kcn2v3$(this.bi_buf_8be2vx$);
      this.bi_buf_8be2vx$ = 0;
      this.bi_valid_8be2vx$ = 0;
    }
     else if (this.bi_valid_8be2vx$ >= 8) {
      this.put_byte_8e99oo$(toByte(this.bi_buf_8be2vx$));
      this.bi_buf_8be2vx$ = this.bi_buf_8be2vx$ >>> 8;
      this.bi_valid_8be2vx$ = this.bi_valid_8be2vx$ - 8 | 0;
    }
  };
  Deflate.prototype.bi_windup_8be2vx$ = function () {
    if (this.bi_valid_8be2vx$ > 8) {
      this.put_short_kcn2v3$(this.bi_buf_8be2vx$);
    }
     else if (this.bi_valid_8be2vx$ > 0) {
      this.put_byte_8e99oo$(toByte(this.bi_buf_8be2vx$));
    }
    this.bi_buf_8be2vx$ = 0;
    this.bi_valid_8be2vx$ = 0;
  };
  Deflate.prototype.copy_block_dg4l88$ = function (buf, len, header) {
    var index = 0;
    this.bi_windup_8be2vx$();
    this.last_eob_len_8be2vx$ = 8;
    if (header) {
      this.put_short_kcn2v3$(toShort(len));
      this.put_short_kcn2v3$(toShort(~len));
    }
    this.put_byte_idiqg2$(this.window_8be2vx$, buf, len);
  };
  Deflate.prototype.flush_block_only_vft4zs$ = function (eof) {
    this._tr_flush_block_dg4l88$(this.block_start_8be2vx$ >= 0 ? this.block_start_8be2vx$ : -1, this.strstart_8be2vx$ - this.block_start_8be2vx$ | 0, eof);
    this.block_start_8be2vx$ = this.strstart_8be2vx$;
    this.strm_8be2vx$.flush_pending_8be2vx$();
  };
  Deflate.prototype.deflate_stored_kcn2v3$ = function (flush) {
    var max_block_size = 65535;
    var max_start;
    if (max_block_size > (this.pending_buf_size_8be2vx$ - 5 | 0)) {
      max_block_size = this.pending_buf_size_8be2vx$ - 5 | 0;
    }
    while (true) {
      if (this.lookahead_8be2vx$ <= 1) {
        this.fill_window_8be2vx$();
        if (this.lookahead_8be2vx$ === 0 && flush === Deflate$Companion_getInstance().Z_NO_FLUSH_0)
          return Deflate$Companion_getInstance().NeedMore_0;
        if (this.lookahead_8be2vx$ === 0)
          break;
      }
      this.strstart_8be2vx$ = this.strstart_8be2vx$ + this.lookahead_8be2vx$ | 0;
      this.lookahead_8be2vx$ = 0;
      max_start = this.block_start_8be2vx$ + max_block_size | 0;
      if (this.strstart_8be2vx$ === 0 || this.strstart_8be2vx$ >= max_start) {
        this.lookahead_8be2vx$ = this.strstart_8be2vx$ - max_start | 0;
        this.strstart_8be2vx$ = max_start;
        this.flush_block_only_vft4zs$(false);
        if (this.strm_8be2vx$.avail_out === 0)
          return Deflate$Companion_getInstance().NeedMore_0;
      }
      if ((this.strstart_8be2vx$ - this.block_start_8be2vx$ | 0) >= (this.w_size_8be2vx$ - Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 | 0)) {
        this.flush_block_only_vft4zs$(false);
        if (this.strm_8be2vx$.avail_out === 0)
          return Deflate$Companion_getInstance().NeedMore_0;
      }
    }
    this.flush_block_only_vft4zs$(flush === Deflate$Companion_getInstance().Z_FINISH_0);
    if (this.strm_8be2vx$.avail_out === 0)
      return flush === Deflate$Companion_getInstance().Z_FINISH_0 ? Deflate$Companion_getInstance().FinishStarted_0 : Deflate$Companion_getInstance().NeedMore_0;
    return flush === Deflate$Companion_getInstance().Z_FINISH_0 ? Deflate$Companion_getInstance().FinishDone_0 : Deflate$Companion_getInstance().BlockDone_0;
  };
  Deflate.prototype._tr_stored_block_dg4l88$ = function (buf, stored_len, eof) {
    this.send_bits_6xvm5r$((Deflate$Companion_getInstance().STORED_BLOCK_0 << 1) + (eof ? 1 : 0) | 0, 3);
    this.copy_block_dg4l88$(buf, stored_len, true);
  };
  Deflate.prototype._tr_flush_block_dg4l88$ = function (buf, stored_len, eof) {
    var opt_lenb;
    var static_lenb;
    var max_blindex = 0;
    if (this.level_8be2vx$ > 0) {
      if (this.data_type_8be2vx$ === Deflate$Companion_getInstance().Z_UNKNOWN_0)
        this.set_data_type_8be2vx$();
      this.l_desc_8be2vx$.build_tree_ixymjh$(this);
      this.d_desc_8be2vx$.build_tree_ixymjh$(this);
      max_blindex = this.build_bl_tree_8be2vx$();
      opt_lenb = this.opt_len_8be2vx$ + 3 + 7 >>> 3;
      static_lenb = this.static_len_8be2vx$ + 3 + 7 >>> 3;
      if (static_lenb <= opt_lenb)
        opt_lenb = static_lenb;
    }
     else {
      static_lenb = stored_len + 5 | 0;
      opt_lenb = static_lenb;
    }
    if ((stored_len + 4 | 0) <= opt_lenb && buf !== -1) {
      this._tr_stored_block_dg4l88$(buf, stored_len, eof);
    }
     else if (static_lenb === opt_lenb) {
      this.send_bits_6xvm5r$((Deflate$Companion_getInstance().STATIC_TREES_0 << 1) + (eof ? 1 : 0) | 0, 3);
      this.compress_block_fitcid$(StaticTree$Companion_getInstance().static_ltree, StaticTree$Companion_getInstance().static_dtree);
    }
     else {
      this.send_bits_6xvm5r$((Deflate$Companion_getInstance().DYN_TREES_0 << 1) + (eof ? 1 : 0) | 0, 3);
      this.send_all_trees_cub51b$(this.l_desc_8be2vx$.max_code + 1 | 0, this.d_desc_8be2vx$.max_code + 1 | 0, max_blindex + 1 | 0);
      this.compress_block_fitcid$(this.dyn_ltree_8be2vx$, this.dyn_dtree_8be2vx$);
    }
    this.init_block_8be2vx$();
    if (eof) {
      this.bi_windup_8be2vx$();
    }
  };
  Deflate.prototype.fill_window_8be2vx$ = function () {
    var n;
    var m;
    var p;
    var more;
    do {
      more = this.window_size_8be2vx$ - this.lookahead_8be2vx$ - this.strstart_8be2vx$ | 0;
      if (more === 0 && this.strstart_8be2vx$ === 0 && this.lookahead_8be2vx$ === 0) {
        more = this.w_size_8be2vx$;
      }
       else if (more === -1) {
        more = more - 1 | 0;
      }
       else if (this.strstart_8be2vx$ >= (this.w_size_8be2vx$ + this.w_size_8be2vx$ - Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 | 0)) {
        var srcPos = this.w_size_8be2vx$;
        this.window_8be2vx$.set(this.window_8be2vx$.subarray(srcPos, srcPos + this.w_size_8be2vx$ | 0), 0);
        this.match_start_8be2vx$ = this.match_start_8be2vx$ - this.w_size_8be2vx$ | 0;
        this.strstart_8be2vx$ = this.strstart_8be2vx$ - this.w_size_8be2vx$ | 0;
        this.block_start_8be2vx$ = this.block_start_8be2vx$ - this.w_size_8be2vx$ | 0;
        n = this.hash_size_8be2vx$;
        p = n;
        do {
          m = ensureNotNull(this.head_8be2vx$)[p = p - 1 | 0, p] & 65535;
          ensureNotNull(this.head_8be2vx$)[p] = m >= this.w_size_8be2vx$ ? toShort(m - this.w_size_8be2vx$ | 0) : 0;
        }
         while ((n = n - 1 | 0, n) !== 0);
        n = this.w_size_8be2vx$;
        p = n;
        do {
          m = ensureNotNull(this.prev_8be2vx$)[p = p - 1 | 0, p] & 65535;
          ensureNotNull(this.prev_8be2vx$)[p] = m >= this.w_size_8be2vx$ ? toShort(m - this.w_size_8be2vx$ | 0) : 0;
        }
         while ((n = n - 1 | 0, n) !== 0);
        more = more + this.w_size_8be2vx$ | 0;
      }
      if (this.strm_8be2vx$.avail_in === 0)
        return;
      n = this.strm_8be2vx$.read_buf_qibw1t$(this.window_8be2vx$, this.strstart_8be2vx$ + this.lookahead_8be2vx$ | 0, more);
      this.lookahead_8be2vx$ = this.lookahead_8be2vx$ + n | 0;
      if (this.lookahead_8be2vx$ >= Deflate$Companion_getInstance().MIN_MATCH_0) {
        this.ins_h_8be2vx$ = this.window_8be2vx$[this.strstart_8be2vx$] & 255;
        this.ins_h_8be2vx$ = (this.ins_h_8be2vx$ << this.hash_shift_8be2vx$ ^ this.window_8be2vx$[this.strstart_8be2vx$ + 1 | 0] & 255) & this.hash_mask_8be2vx$;
      }
    }
     while (this.lookahead_8be2vx$ < Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 && this.strm_8be2vx$.avail_in !== 0);
  };
  Deflate.prototype.deflate_fast_kcn2v3$ = function (flush) {
    var hash_head = 0;
    var bflush;
    while (true) {
      if (this.lookahead_8be2vx$ < Deflate$Companion_getInstance().MIN_LOOKAHEAD_0) {
        this.fill_window_8be2vx$();
        if (this.lookahead_8be2vx$ < Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 && flush === Deflate$Companion_getInstance().Z_NO_FLUSH_0) {
          return Deflate$Companion_getInstance().NeedMore_0;
        }
        if (this.lookahead_8be2vx$ === 0)
          break;
      }
      if (this.lookahead_8be2vx$ >= Deflate$Companion_getInstance().MIN_MATCH_0) {
        this.ins_h_8be2vx$ = (this.ins_h_8be2vx$ << this.hash_shift_8be2vx$ ^ this.window_8be2vx$[this.strstart_8be2vx$ + (Deflate$Companion_getInstance().MIN_MATCH_0 - 1) | 0] & 255) & this.hash_mask_8be2vx$;
        hash_head = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] & 65535;
        ensureNotNull(this.prev_8be2vx$)[this.strstart_8be2vx$ & this.w_mask_8be2vx$] = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$];
        ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] = toShort(this.strstart_8be2vx$);
      }
      if (!equals(Kotlin.Long.fromInt(hash_head), Kotlin.Long.ZERO) && (this.strstart_8be2vx$ - hash_head & 65535) <= (this.w_size_8be2vx$ - Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 | 0)) {
        if (this.strategy_8be2vx$ !== Deflate$Companion_getInstance().Z_HUFFMAN_ONLY_0) {
          this.match_length_8be2vx$ = this.longest_match_kcn2v3$(hash_head);
        }
      }
      if (this.match_length_8be2vx$ >= Deflate$Companion_getInstance().MIN_MATCH_0) {
        bflush = this._tr_tally_6xvm5r$(this.strstart_8be2vx$ - this.match_start_8be2vx$ | 0, this.match_length_8be2vx$ - Deflate$Companion_getInstance().MIN_MATCH_0 | 0);
        this.lookahead_8be2vx$ = this.lookahead_8be2vx$ - this.match_length_8be2vx$ | 0;
        if (this.match_length_8be2vx$ <= this.max_lazy_match_8be2vx$ && this.lookahead_8be2vx$ >= Deflate$Companion_getInstance().MIN_MATCH_0) {
          this.match_length_8be2vx$ = this.match_length_8be2vx$ - 1 | 0;
          do {
            this.strstart_8be2vx$ = this.strstart_8be2vx$ + 1 | 0;
            this.ins_h_8be2vx$ = (this.ins_h_8be2vx$ << this.hash_shift_8be2vx$ ^ this.window_8be2vx$[this.strstart_8be2vx$ + (Deflate$Companion_getInstance().MIN_MATCH_0 - 1) | 0] & 255) & this.hash_mask_8be2vx$;
            hash_head = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] & 65535;
            ensureNotNull(this.prev_8be2vx$)[this.strstart_8be2vx$ & this.w_mask_8be2vx$] = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$];
            ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] = toShort(this.strstart_8be2vx$);
          }
           while ((this.match_length_8be2vx$ = this.match_length_8be2vx$ - 1 | 0, this.match_length_8be2vx$) !== 0);
          this.strstart_8be2vx$ = this.strstart_8be2vx$ + 1 | 0;
        }
         else {
          this.strstart_8be2vx$ = this.strstart_8be2vx$ + this.match_length_8be2vx$ | 0;
          this.match_length_8be2vx$ = 0;
          this.ins_h_8be2vx$ = this.window_8be2vx$[this.strstart_8be2vx$] & 255;
          this.ins_h_8be2vx$ = (this.ins_h_8be2vx$ << this.hash_shift_8be2vx$ ^ this.window_8be2vx$[this.strstart_8be2vx$ + 1 | 0] & 255) & this.hash_mask_8be2vx$;
        }
      }
       else {
        bflush = this._tr_tally_6xvm5r$(0, this.window_8be2vx$[this.strstart_8be2vx$] & 255);
        this.lookahead_8be2vx$ = this.lookahead_8be2vx$ - 1 | 0;
        this.strstart_8be2vx$ = this.strstart_8be2vx$ + 1 | 0;
      }
      if (bflush) {
        this.flush_block_only_vft4zs$(false);
        if (this.strm_8be2vx$.avail_out === 0)
          return Deflate$Companion_getInstance().NeedMore_0;
      }
    }
    this.flush_block_only_vft4zs$(flush === Deflate$Companion_getInstance().Z_FINISH_0);
    if (this.strm_8be2vx$.avail_out === 0) {
      return flush === Deflate$Companion_getInstance().Z_FINISH_0 ? Deflate$Companion_getInstance().FinishStarted_0 : Deflate$Companion_getInstance().NeedMore_0;
    }
    return flush === Deflate$Companion_getInstance().Z_FINISH_0 ? Deflate$Companion_getInstance().FinishDone_0 : Deflate$Companion_getInstance().BlockDone_0;
  };
  Deflate.prototype.deflate_slow_kcn2v3$ = function (flush) {
    var hash_head = 0;
    var bflush;
    while (true) {
      if (this.lookahead_8be2vx$ < Deflate$Companion_getInstance().MIN_LOOKAHEAD_0) {
        this.fill_window_8be2vx$();
        if (this.lookahead_8be2vx$ < Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 && flush === Deflate$Companion_getInstance().Z_NO_FLUSH_0) {
          return Deflate$Companion_getInstance().NeedMore_0;
        }
        if (this.lookahead_8be2vx$ === 0)
          break;
      }
      if (this.lookahead_8be2vx$ >= Deflate$Companion_getInstance().MIN_MATCH_0) {
        this.ins_h_8be2vx$ = (this.ins_h_8be2vx$ << this.hash_shift_8be2vx$ ^ this.window_8be2vx$[this.strstart_8be2vx$ + (Deflate$Companion_getInstance().MIN_MATCH_0 - 1) | 0] & 255) & this.hash_mask_8be2vx$;
        hash_head = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] & 65535;
        ensureNotNull(this.prev_8be2vx$)[this.strstart_8be2vx$ & this.w_mask_8be2vx$] = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$];
        ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] = toShort(this.strstart_8be2vx$);
      }
      this.prev_length_8be2vx$ = this.match_length_8be2vx$;
      this.prev_match_8be2vx$ = this.match_start_8be2vx$;
      this.match_length_8be2vx$ = Deflate$Companion_getInstance().MIN_MATCH_0 - 1 | 0;
      if (hash_head !== 0 && this.prev_length_8be2vx$ < this.max_lazy_match_8be2vx$ && (this.strstart_8be2vx$ - hash_head & 65535) <= (this.w_size_8be2vx$ - Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 | 0)) {
        if (this.strategy_8be2vx$ !== Deflate$Companion_getInstance().Z_HUFFMAN_ONLY_0) {
          this.match_length_8be2vx$ = this.longest_match_kcn2v3$(hash_head);
        }
        if (this.match_length_8be2vx$ <= 5 && (this.strategy_8be2vx$ === Deflate$Companion_getInstance().Z_FILTERED_0 || (this.match_length_8be2vx$ === Deflate$Companion_getInstance().MIN_MATCH_0 && (this.strstart_8be2vx$ - this.match_start_8be2vx$ | 0) > 4096))) {
          this.match_length_8be2vx$ = Deflate$Companion_getInstance().MIN_MATCH_0 - 1 | 0;
        }
      }
      if (this.prev_length_8be2vx$ >= Deflate$Companion_getInstance().MIN_MATCH_0 && this.match_length_8be2vx$ <= this.prev_length_8be2vx$) {
        var max_insert = this.strstart_8be2vx$ + this.lookahead_8be2vx$ - Deflate$Companion_getInstance().MIN_MATCH_0 | 0;
        bflush = this._tr_tally_6xvm5r$(this.strstart_8be2vx$ - 1 - this.prev_match_8be2vx$ | 0, this.prev_length_8be2vx$ - Deflate$Companion_getInstance().MIN_MATCH_0 | 0);
        this.lookahead_8be2vx$ = this.lookahead_8be2vx$ - (this.prev_length_8be2vx$ - 1) | 0;
        this.prev_length_8be2vx$ = this.prev_length_8be2vx$ - 2 | 0;
        do {
          if ((this.strstart_8be2vx$ = this.strstart_8be2vx$ + 1 | 0, this.strstart_8be2vx$) <= max_insert) {
            this.ins_h_8be2vx$ = (this.ins_h_8be2vx$ << this.hash_shift_8be2vx$ ^ this.window_8be2vx$[this.strstart_8be2vx$ + (Deflate$Companion_getInstance().MIN_MATCH_0 - 1) | 0] & 255) & this.hash_mask_8be2vx$;
            hash_head = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] & 65535;
            ensureNotNull(this.prev_8be2vx$)[this.strstart_8be2vx$ & this.w_mask_8be2vx$] = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$];
            ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] = toShort(this.strstart_8be2vx$);
          }
        }
         while ((this.prev_length_8be2vx$ = this.prev_length_8be2vx$ - 1 | 0, this.prev_length_8be2vx$) !== 0);
        this.match_available_8be2vx$ = 0;
        this.match_length_8be2vx$ = Deflate$Companion_getInstance().MIN_MATCH_0 - 1 | 0;
        this.strstart_8be2vx$ = this.strstart_8be2vx$ + 1 | 0;
        if (bflush) {
          this.flush_block_only_vft4zs$(false);
          if (this.strm_8be2vx$.avail_out === 0)
            return Deflate$Companion_getInstance().NeedMore_0;
        }
      }
       else if (this.match_available_8be2vx$ !== 0) {
        bflush = this._tr_tally_6xvm5r$(0, this.window_8be2vx$[this.strstart_8be2vx$ - 1 | 0] & 255);
        if (bflush) {
          this.flush_block_only_vft4zs$(false);
        }
        this.strstart_8be2vx$ = this.strstart_8be2vx$ + 1 | 0;
        this.lookahead_8be2vx$ = this.lookahead_8be2vx$ - 1 | 0;
        if (this.strm_8be2vx$.avail_out === 0)
          return Deflate$Companion_getInstance().NeedMore_0;
      }
       else {
        this.match_available_8be2vx$ = 1;
        this.strstart_8be2vx$ = this.strstart_8be2vx$ + 1 | 0;
        this.lookahead_8be2vx$ = this.lookahead_8be2vx$ - 1 | 0;
      }
    }
    if (this.match_available_8be2vx$ !== 0) {
      bflush = this._tr_tally_6xvm5r$(0, this.window_8be2vx$[this.strstart_8be2vx$ - 1 | 0] & 255);
      this.match_available_8be2vx$ = 0;
    }
    this.flush_block_only_vft4zs$(flush === Deflate$Companion_getInstance().Z_FINISH_0);
    if (this.strm_8be2vx$.avail_out === 0) {
      return flush === Deflate$Companion_getInstance().Z_FINISH_0 ? Deflate$Companion_getInstance().FinishStarted_0 : Deflate$Companion_getInstance().NeedMore_0;
    }
    return flush === Deflate$Companion_getInstance().Z_FINISH_0 ? Deflate$Companion_getInstance().FinishDone_0 : Deflate$Companion_getInstance().BlockDone_0;
  };
  Deflate.prototype.longest_match_kcn2v3$ = function (cur_match) {
    var cur_match_0 = cur_match;
    var chain_length = this.max_chain_length_8be2vx$;
    var scan = this.strstart_8be2vx$;
    var match;
    var len;
    var best_len = this.prev_length_8be2vx$;
    var limit = this.strstart_8be2vx$ > (this.w_size_8be2vx$ - Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 | 0) ? this.strstart_8be2vx$ - (this.w_size_8be2vx$ - Deflate$Companion_getInstance().MIN_LOOKAHEAD_0) | 0 : 0;
    var nice_match = this.nice_match_8be2vx$;
    var wmask = this.w_mask_8be2vx$;
    var strend = this.strstart_8be2vx$ + Deflate$Companion_getInstance().MAX_MATCH_0 | 0;
    var window_0 = this.window_8be2vx$;
    var scan_end1 = window_0[scan + best_len - 1 | 0];
    var scan_end = window_0[scan + best_len | 0];
    if (this.prev_length_8be2vx$ >= this.good_match_8be2vx$) {
      chain_length = chain_length >> 2;
    }
    if (nice_match > this.lookahead_8be2vx$)
      nice_match = this.lookahead_8be2vx$;
    do {
      match = cur_match_0;
      if (window_0[match + best_len | 0] !== scan_end || window_0[match + best_len - 1 | 0] !== scan_end1 || window_0[match] !== window_0[scan] || window_0[match = match + 1 | 0, match] !== window_0[scan + 1 | 0])
        continue;
      scan = scan + 2 | 0;
      match = match + 1 | 0;
      do {
      }
       while (window_0[scan = scan + 1 | 0, scan] === window_0[match = match + 1 | 0, match] && window_0[scan = scan + 1 | 0, scan] === window_0[match = match + 1 | 0, match] && window_0[scan = scan + 1 | 0, scan] === window_0[match = match + 1 | 0, match] && window_0[scan = scan + 1 | 0, scan] === window_0[match = match + 1 | 0, match] && window_0[scan = scan + 1 | 0, scan] === window_0[match = match + 1 | 0, match] && window_0[scan = scan + 1 | 0, scan] === window_0[match = match + 1 | 0, match] && window_0[scan = scan + 1 | 0, scan] === window_0[match = match + 1 | 0, match] && window_0[scan = scan + 1 | 0, scan] === window_0[match = match + 1 | 0, match] && scan < strend);
      len = Deflate$Companion_getInstance().MAX_MATCH_0 - (strend - scan) | 0;
      scan = strend - Deflate$Companion_getInstance().MAX_MATCH_0 | 0;
      if (len > best_len) {
        this.match_start_8be2vx$ = cur_match_0;
        best_len = len;
        if (len >= nice_match)
          break;
        scan_end1 = window_0[scan + best_len - 1 | 0];
        scan_end = window_0[scan + best_len | 0];
      }
      cur_match_0 = ensureNotNull(this.prev_8be2vx$)[cur_match_0 & wmask] & 65535;
    }
     while (cur_match_0 > limit && (chain_length = chain_length - 1 | 0, chain_length) !== 0);
    return best_len <= this.lookahead_8be2vx$ ? best_len : this.lookahead_8be2vx$;
  };
  Deflate.prototype.deflateInit_cub51b$ = function (level, bits, memlevel) {
    return this.deflateInit_0(level, Deflate$Companion_getInstance().Z_DEFLATED_0, bits, memlevel, Deflate$Companion_getInstance().Z_DEFAULT_STRATEGY_0);
  };
  Deflate.prototype.deflateInit_6xvm5r$ = function (level, bits) {
    if (bits === void 0)
      bits = Deflate$Companion_getInstance().MAX_WBITS_0;
    return this.deflateInit_0(level, Deflate$Companion_getInstance().Z_DEFLATED_0, bits, Deflate$Companion_getInstance().DEF_MEM_LEVEL_0, Deflate$Companion_getInstance().Z_DEFAULT_STRATEGY_0);
  };
  Deflate.prototype.deflateInit_0 = function (level, method, windowBits, memLevel, strategy) {
    var level_0 = level;
    var windowBits_0 = windowBits;
    var wrap = 1;
    this.strm_8be2vx$.msg = null;
    if (level_0 === Deflate$Companion_getInstance().Z_DEFAULT_COMPRESSION_0)
      level_0 = 6;
    if (windowBits_0 < 0) {
      wrap = 0;
      windowBits_0 = -windowBits_0;
    }
     else if (windowBits_0 > 15) {
      wrap = 2;
      windowBits_0 = windowBits_0 - 16 | 0;
      this.strm_8be2vx$.adler = new CRC32();
    }
    if (memLevel < 1 || memLevel > Deflate$Companion_getInstance().MAX_MEM_LEVEL_0 || method !== Deflate$Companion_getInstance().Z_DEFLATED_0 || windowBits_0 < 9 || windowBits_0 > 15 || level_0 < 0 || level_0 > 9 || strategy < 0 || strategy > Deflate$Companion_getInstance().Z_HUFFMAN_ONLY_0) {
      return Deflate$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    this.strm_8be2vx$.dstate_8be2vx$ = this;
    this.wrap_8be2vx$ = wrap;
    this.w_bits_8be2vx$ = windowBits_0;
    this.w_size_8be2vx$ = 1 << this.w_bits_8be2vx$;
    this.w_mask_8be2vx$ = this.w_size_8be2vx$ - 1 | 0;
    this.hash_bits_8be2vx$ = memLevel + 7 | 0;
    this.hash_size_8be2vx$ = 1 << this.hash_bits_8be2vx$;
    this.hash_mask_8be2vx$ = this.hash_size_8be2vx$ - 1 | 0;
    this.hash_shift_8be2vx$ = (this.hash_bits_8be2vx$ + Deflate$Companion_getInstance().MIN_MATCH_0 - 1 | 0) / Deflate$Companion_getInstance().MIN_MATCH_0 | 0;
    this.window_8be2vx$ = new Int8Array(this.w_size_8be2vx$ * 2 | 0);
    this.prev_8be2vx$ = new Int16Array(this.w_size_8be2vx$);
    this.head_8be2vx$ = new Int16Array(this.hash_size_8be2vx$);
    this.lit_bufsize_8be2vx$ = 1 << memLevel + 6;
    this.pending_buf_8be2vx$ = new Int8Array(this.lit_bufsize_8be2vx$ * 3 | 0);
    this.pending_buf_size_8be2vx$ = this.lit_bufsize_8be2vx$ * 3 | 0;
    this.d_buf_8be2vx$ = this.lit_bufsize_8be2vx$;
    this.l_buf_8be2vx$ = new Int8Array(this.lit_bufsize_8be2vx$);
    this.level_8be2vx$ = level_0;
    this.strategy_8be2vx$ = strategy;
    this.method_8be2vx$ = toByte(method);
    return this.deflateReset_8be2vx$();
  };
  Deflate.prototype.deflateReset_8be2vx$ = function () {
    this.strm_8be2vx$.total_out = Kotlin.Long.ZERO;
    this.strm_8be2vx$.total_in = this.strm_8be2vx$.total_out;
    this.strm_8be2vx$.msg = null;
    this.strm_8be2vx$.data_type_8be2vx$ = Deflate$Companion_getInstance().Z_UNKNOWN_0;
    this.pending_8be2vx$ = 0;
    this.pending_out_8be2vx$ = 0;
    if (this.wrap_8be2vx$ < 0) {
      this.wrap_8be2vx$ = -this.wrap_8be2vx$;
    }
    this.status_8be2vx$ = this.wrap_8be2vx$ === 0 ? Deflate$Companion_getInstance().BUSY_STATE_0 : Deflate$Companion_getInstance().INIT_STATE_0;
    this.strm_8be2vx$.adler.reset();
    this.last_flush_8be2vx$ = Deflate$Companion_getInstance().Z_NO_FLUSH_0;
    this.tr_init_8be2vx$();
    this.lm_init_8be2vx$();
    return Deflate$Companion_getInstance().Z_OK_0;
  };
  Deflate.prototype.deflateEnd_8be2vx$ = function () {
    if (this.status_8be2vx$ !== Deflate$Companion_getInstance().INIT_STATE_0 && this.status_8be2vx$ !== Deflate$Companion_getInstance().BUSY_STATE_0 && this.status_8be2vx$ !== Deflate$Companion_getInstance().FINISH_STATE_0) {
      return Deflate$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    this.pending_buf_8be2vx$ = new Int8Array([]);
    this.l_buf_8be2vx$ = new Int8Array([]);
    this.head_8be2vx$ = null;
    this.prev_8be2vx$ = null;
    this.window_8be2vx$ = new Int8Array([]);
    return this.status_8be2vx$ === Deflate$Companion_getInstance().BUSY_STATE_0 ? Deflate$Companion_getInstance().Z_DATA_ERROR_0 : Deflate$Companion_getInstance().Z_OK_0;
  };
  Deflate.prototype.deflateParams_6xvm5r$ = function (_level, _strategy) {
    var _level_0 = _level;
    var err = Deflate$Companion_getInstance().Z_OK_0;
    if (_level_0 === Deflate$Companion_getInstance().Z_DEFAULT_COMPRESSION_0) {
      _level_0 = 6;
    }
    if (_level_0 < 0 || _level_0 > 9 || _strategy < 0 || _strategy > Deflate$Companion_getInstance().Z_HUFFMAN_ONLY_0) {
      return Deflate$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    if (Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].func !== Deflate$Companion_getInstance().config_table_0[_level_0].func && !equals(this.strm_8be2vx$.total_in, Kotlin.Long.ZERO)) {
      err = this.strm_8be2vx$.deflate_za3lpa$(Deflate$Companion_getInstance().Z_PARTIAL_FLUSH_0);
    }
    if (this.level_8be2vx$ !== _level_0) {
      this.level_8be2vx$ = _level_0;
      this.max_lazy_match_8be2vx$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].max_lazy;
      this.good_match_8be2vx$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].good_length;
      this.nice_match_8be2vx$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].nice_length;
      this.max_chain_length_8be2vx$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].max_chain;
    }
    this.strategy_8be2vx$ = _strategy;
    return err;
  };
  Deflate.prototype.deflateSetDictionary_idiqg2$ = function (dictionary, dictIndex, dictLength) {
    var tmp$;
    var dictIndex_0 = dictIndex;
    var length = dictLength;
    if (dictionary == null || this.status_8be2vx$ !== Deflate$Companion_getInstance().INIT_STATE_0)
      return Deflate$Companion_getInstance().Z_STREAM_ERROR_0;
    this.strm_8be2vx$.adler.update_mj6st8$(dictionary, dictIndex_0, dictLength);
    if (length < Deflate$Companion_getInstance().MIN_MATCH_0)
      return Deflate$Companion_getInstance().Z_OK_0;
    if (length > (this.w_size_8be2vx$ - Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 | 0)) {
      length = this.w_size_8be2vx$ - Deflate$Companion_getInstance().MIN_LOOKAHEAD_0 | 0;
      dictIndex_0 = dictLength - length | 0;
    }
    var srcPos = dictIndex_0;
    this.window_8be2vx$.set(dictionary.subarray(srcPos, srcPos + length | 0), 0);
    this.strstart_8be2vx$ = length;
    this.block_start_8be2vx$ = length;
    this.ins_h_8be2vx$ = this.window_8be2vx$[0] & 255;
    this.ins_h_8be2vx$ = (this.ins_h_8be2vx$ << this.hash_shift_8be2vx$ ^ this.window_8be2vx$[1] & 255) & this.hash_mask_8be2vx$;
    tmp$ = length - Deflate$Companion_getInstance().MIN_MATCH_0 | 0;
    for (var n = 0; n <= tmp$; n++) {
      this.ins_h_8be2vx$ = (this.ins_h_8be2vx$ << this.hash_shift_8be2vx$ ^ this.window_8be2vx$[n + (Deflate$Companion_getInstance().MIN_MATCH_0 - 1) | 0] & 255) & this.hash_mask_8be2vx$;
      ensureNotNull(this.prev_8be2vx$)[n & this.w_mask_8be2vx$] = ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$];
      ensureNotNull(this.head_8be2vx$)[this.ins_h_8be2vx$] = toShort(n);
    }
    return Deflate$Companion_getInstance().Z_OK_0;
  };
  Deflate.prototype.deflate_kcn2v3$ = function (flush) {
    var tmp$, tmp$_0;
    var old_flush;
    if (flush > Deflate$Companion_getInstance().Z_FINISH_0 || flush < 0) {
      return Deflate$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    if (this.strm_8be2vx$.next_out == null || (this.strm_8be2vx$.next_in == null && this.strm_8be2vx$.avail_in !== 0) || (this.status_8be2vx$ === Deflate$Companion_getInstance().FINISH_STATE_0 && flush !== Deflate$Companion_getInstance().Z_FINISH_0)) {
      this.strm_8be2vx$.msg = Deflate$Companion_getInstance().z_errmsg_0[Deflate$Companion_getInstance().Z_NEED_DICT_0 - Deflate$Companion_getInstance().Z_STREAM_ERROR_0 | 0];
      return Deflate$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    if (this.strm_8be2vx$.avail_out === 0) {
      this.strm_8be2vx$.msg = Deflate$Companion_getInstance().z_errmsg_0[Deflate$Companion_getInstance().Z_NEED_DICT_0 - Deflate$Companion_getInstance().Z_BUF_ERROR_0 | 0];
      return Deflate$Companion_getInstance().Z_BUF_ERROR_0;
    }
    old_flush = this.last_flush_8be2vx$;
    this.last_flush_8be2vx$ = flush;
    if (this.status_8be2vx$ === Deflate$Companion_getInstance().INIT_STATE_0) {
      if (this.wrap_8be2vx$ === 2) {
        this.gzipHeader_8be2vx$.put_wozauy$(this);
        this.status_8be2vx$ = Deflate$Companion_getInstance().BUSY_STATE_0;
        this.strm_8be2vx$.adler.reset();
      }
       else {
        var header = Deflate$Companion_getInstance().Z_DEFLATED_0 + (this.w_bits_8be2vx$ - 8 << 4) << 8;
        var level_flags = (this.level_8be2vx$ - 1 & 255) >> 1;
        if (level_flags > 3)
          level_flags = 3;
        header = header | level_flags << 6;
        if (this.strstart_8be2vx$ !== 0)
          header = header | Deflate$Companion_getInstance().PRESET_DICT_0;
        header = header + (31 - header % 31) | 0;
        this.status_8be2vx$ = Deflate$Companion_getInstance().BUSY_STATE_0;
        this.putShortMSB_kcn2v3$(header);
        if (this.strstart_8be2vx$ !== 0) {
          var adler = this.strm_8be2vx$.adler.value;
          this.putShortMSB_kcn2v3$(adler >>> 16);
          this.putShortMSB_kcn2v3$(adler & 65535);
        }
        this.strm_8be2vx$.adler.reset();
      }
    }
    if (this.pending_8be2vx$ !== 0) {
      this.strm_8be2vx$.flush_pending_8be2vx$();
      if (this.strm_8be2vx$.avail_out === 0) {
        this.last_flush_8be2vx$ = -1;
        return Deflate$Companion_getInstance().Z_OK_0;
      }
    }
     else if (this.strm_8be2vx$.avail_in === 0 && flush <= old_flush && flush !== Deflate$Companion_getInstance().Z_FINISH_0) {
      this.strm_8be2vx$.msg = Deflate$Companion_getInstance().z_errmsg_0[Deflate$Companion_getInstance().Z_NEED_DICT_0 - Deflate$Companion_getInstance().Z_BUF_ERROR_0 | 0];
      return Deflate$Companion_getInstance().Z_BUF_ERROR_0;
    }
    if (this.status_8be2vx$ === Deflate$Companion_getInstance().FINISH_STATE_0 && this.strm_8be2vx$.avail_in !== 0) {
      this.strm_8be2vx$.msg = Deflate$Companion_getInstance().z_errmsg_0[Deflate$Companion_getInstance().Z_NEED_DICT_0 - Deflate$Companion_getInstance().Z_BUF_ERROR_0 | 0];
      return Deflate$Companion_getInstance().Z_BUF_ERROR_0;
    }
    if (this.strm_8be2vx$.avail_in !== 0 || this.lookahead_8be2vx$ !== 0 || (flush !== Deflate$Companion_getInstance().Z_NO_FLUSH_0 && this.status_8be2vx$ !== Deflate$Companion_getInstance().FINISH_STATE_0)) {
      var bstate = -1;
      tmp$ = Deflate$Companion_getInstance().config_table_0[this.level_8be2vx$].func;
      if (tmp$ === Deflate$Companion_getInstance().STORED_0)
        bstate = this.deflate_stored_kcn2v3$(flush);
      else if (tmp$ === Deflate$Companion_getInstance().FAST_0)
        bstate = this.deflate_fast_kcn2v3$(flush);
      else if (tmp$ === Deflate$Companion_getInstance().SLOW_0)
        bstate = this.deflate_slow_kcn2v3$(flush);
      if (bstate === Deflate$Companion_getInstance().FinishStarted_0 || bstate === Deflate$Companion_getInstance().FinishDone_0) {
        this.status_8be2vx$ = Deflate$Companion_getInstance().FINISH_STATE_0;
      }
      if (bstate === Deflate$Companion_getInstance().NeedMore_0 || bstate === Deflate$Companion_getInstance().FinishStarted_0) {
        if (this.strm_8be2vx$.avail_out === 0) {
          this.last_flush_8be2vx$ = -1;
        }
        return Deflate$Companion_getInstance().Z_OK_0;
      }
      if (bstate === Deflate$Companion_getInstance().BlockDone_0) {
        if (flush === Deflate$Companion_getInstance().Z_PARTIAL_FLUSH_0) {
          this._tr_align_8be2vx$();
        }
         else {
          this._tr_stored_block_dg4l88$(0, 0, false);
          if (flush === Deflate$Companion_getInstance().Z_FULL_FLUSH_0) {
            tmp$_0 = this.hash_size_8be2vx$;
            for (var i = 0; i < tmp$_0; i++)
              ensureNotNull(this.head_8be2vx$)[i] = 0;
          }
        }
        this.strm_8be2vx$.flush_pending_8be2vx$();
        if (this.strm_8be2vx$.avail_out === 0) {
          this.last_flush_8be2vx$ = -1;
          return Deflate$Companion_getInstance().Z_OK_0;
        }
      }
    }
    if (flush !== Deflate$Companion_getInstance().Z_FINISH_0)
      return Deflate$Companion_getInstance().Z_OK_0;
    if (this.wrap_8be2vx$ <= 0)
      return Deflate$Companion_getInstance().Z_STREAM_END_0;
    if (this.wrap_8be2vx$ === 2) {
      var adler_0 = this.strm_8be2vx$.adler.value;
      this.put_byte_8e99oo$(toByte(adler_0 & 255));
      this.put_byte_8e99oo$(toByte(adler_0 >> 8 & 255));
      this.put_byte_8e99oo$(toByte(adler_0 >> 16 & 255));
      this.put_byte_8e99oo$(toByte(adler_0 >> 24 & 255));
      this.put_byte_8e99oo$(toByte(this.strm_8be2vx$.total_in.and(Kotlin.Long.fromInt(255)).toInt()));
      this.put_byte_8e99oo$(toByte(this.strm_8be2vx$.total_in.shiftRight(8).and(Kotlin.Long.fromInt(255)).toInt()));
      this.put_byte_8e99oo$(toByte(this.strm_8be2vx$.total_in.shiftRight(16).and(Kotlin.Long.fromInt(255)).toInt()));
      this.put_byte_8e99oo$(toByte(this.strm_8be2vx$.total_in.shiftRight(24).and(Kotlin.Long.fromInt(255)).toInt()));
      this.gzipHeader_8be2vx$.crc = Kotlin.Long.fromInt(adler_0);
    }
     else {
      var adler_1 = this.strm_8be2vx$.adler.value;
      this.putShortMSB_kcn2v3$(adler_1 >>> 16);
      this.putShortMSB_kcn2v3$(adler_1 & 65535);
    }
    this.strm_8be2vx$.flush_pending_8be2vx$();
    if (this.wrap_8be2vx$ > 0)
      this.wrap_8be2vx$ = -this.wrap_8be2vx$;
    return this.pending_8be2vx$ !== 0 ? Deflate$Companion_getInstance().Z_OK_0 : Deflate$Companion_getInstance().Z_STREAM_END_0;
  };
  Deflate.prototype.clone = function () {
    var tmp$;
    var dest = new Deflate(this.strm_8be2vx$);
    dest.pending_buf_8be2vx$ = this.dup_0(dest.pending_buf_8be2vx$);
    dest.d_buf_8be2vx$ = dest.d_buf_8be2vx$;
    dest.l_buf_8be2vx$ = this.dup_0(dest.l_buf_8be2vx$);
    dest.window_8be2vx$ = this.dup_0(dest.window_8be2vx$);
    dest.prev_8be2vx$ = this.dup_1(dest.prev_8be2vx$);
    dest.head_8be2vx$ = this.dup_1(dest.head_8be2vx$);
    dest.dyn_ltree_8be2vx$ = this.dup_1(dest.dyn_ltree_8be2vx$);
    dest.dyn_dtree_8be2vx$ = this.dup_1(dest.dyn_dtree_8be2vx$);
    dest.bl_tree_8be2vx$ = this.dup_1(dest.bl_tree_8be2vx$);
    dest.bl_count_8be2vx$ = this.dup_1(dest.bl_count_8be2vx$);
    dest.next_code_8be2vx$ = this.dup_1(dest.next_code_8be2vx$);
    dest.heap_8be2vx$ = this.dup_2(dest.heap_8be2vx$);
    dest.depth_8be2vx$ = this.dup_0(dest.depth_8be2vx$);
    dest.l_desc_8be2vx$.dyn_tree = dest.dyn_ltree_8be2vx$;
    dest.d_desc_8be2vx$.dyn_tree = dest.dyn_dtree_8be2vx$;
    dest.bl_desc_8be2vx$.dyn_tree = dest.bl_tree_8be2vx$;
    if (dest.gheader_8be2vx$ != null) {
      dest.gheader_8be2vx$ = Kotlin.isType(tmp$ = ensureNotNull(dest.gheader_8be2vx$).clone(), GZIPHeader) ? tmp$ : throwCCE();
    }
    return dest;
  };
  Deflate.prototype.dup_0 = function (buf) {
    return ensureNotNull(buf).slice();
  };
  Deflate.prototype.dup_1 = function (buf) {
    return ensureNotNull(buf).slice();
  };
  Deflate.prototype.dup_2 = function (buf) {
    return buf.slice();
  };
  function Deflate$Companion() {
    Deflate$Companion_instance = this;
    this.MAX_MEM_LEVEL_0 = 9;
    this.Z_DEFAULT_COMPRESSION_0 = -1;
    this.MAX_WBITS_0 = 15;
    this.DEF_MEM_LEVEL_0 = 8;
    this.STORED_0 = 0;
    this.FAST_0 = 1;
    this.SLOW_0 = 2;
    this.config_table_0 = null;
    this.config_table_0 = [new Deflate$Config(0, 0, 0, 0, this.STORED_0), new Deflate$Config(4, 4, 8, 4, this.FAST_0), new Deflate$Config(4, 5, 16, 8, this.FAST_0), new Deflate$Config(4, 6, 32, 32, this.FAST_0), new Deflate$Config(4, 4, 16, 16, this.SLOW_0), new Deflate$Config(8, 16, 32, 32, this.SLOW_0), new Deflate$Config(8, 16, 128, 128, this.SLOW_0), new Deflate$Config(8, 32, 128, 256, this.SLOW_0), new Deflate$Config(32, 128, 258, 1024, this.SLOW_0), new Deflate$Config(32, 258, 258, 4096, this.SLOW_0)];
    this.z_errmsg_0 = ['need dictionary', 'stream end', '', 'file error', 'stream error', 'data error', 'insufficient memory', 'buffer error', 'incompatible version', ''];
    this.NeedMore_0 = 0;
    this.BlockDone_0 = 1;
    this.FinishStarted_0 = 2;
    this.FinishDone_0 = 3;
    this.PRESET_DICT_0 = 32;
    this.Z_FILTERED_0 = 1;
    this.Z_HUFFMAN_ONLY_0 = 2;
    this.Z_DEFAULT_STRATEGY_0 = 0;
    this.Z_NO_FLUSH_0 = 0;
    this.Z_PARTIAL_FLUSH_0 = 1;
    this.Z_SYNC_FLUSH_0 = 2;
    this.Z_FULL_FLUSH_0 = 3;
    this.Z_FINISH_0 = 4;
    this.Z_OK_0 = 0;
    this.Z_STREAM_END_0 = 1;
    this.Z_NEED_DICT_0 = 2;
    this.Z_ERRNO_0 = -1;
    this.Z_STREAM_ERROR_0 = -2;
    this.Z_DATA_ERROR_0 = -3;
    this.Z_MEM_ERROR_0 = -4;
    this.Z_BUF_ERROR_0 = -5;
    this.Z_VERSION_ERROR_0 = -6;
    this.INIT_STATE_0 = 42;
    this.BUSY_STATE_0 = 113;
    this.FINISH_STATE_0 = 666;
    this.Z_DEFLATED_0 = 8;
    this.STORED_BLOCK_0 = 0;
    this.STATIC_TREES_0 = 1;
    this.DYN_TREES_0 = 2;
    this.Z_BINARY_0 = 0;
    this.Z_ASCII_0 = 1;
    this.Z_UNKNOWN_0 = 2;
    this.Buf_size_0 = 8 * 2 | 0;
    this.REP_3_6_0 = 16;
    this.REPZ_3_10_0 = 17;
    this.REPZ_11_138_0 = 18;
    this.MIN_MATCH_0 = 3;
    this.MAX_MATCH_0 = 258;
    this.MIN_LOOKAHEAD_0 = this.MAX_MATCH_0 + this.MIN_MATCH_0 + 1 | 0;
    this.MAX_BITS_0 = 15;
    this.D_CODES_0 = 30;
    this.BL_CODES_0 = 19;
    this.LENGTH_CODES_0 = 29;
    this.LITERALS_0 = 256;
    this.L_CODES_0 = this.LITERALS_0 + 1 + this.LENGTH_CODES_0 | 0;
    this.HEAP_SIZE_0 = (2 * this.L_CODES_0 | 0) + 1 | 0;
    this.END_BLOCK_0 = 256;
  }
  Deflate$Companion.prototype.smaller_9zeuv7$ = function (tree, n, m, depth) {
    var tn2 = tree[n * 2 | 0];
    var tm2 = tree[m * 2 | 0];
    return tn2 < tm2 || (tn2 === tm2 && depth[n] <= depth[m]);
  };
  Deflate$Companion.prototype.deflateCopy_r4vutt$ = function (dest, src) {
    if (src.dstate_8be2vx$ == null) {
      return this.Z_STREAM_ERROR_0;
    }
    if (src.next_in != null) {
      dest.next_in = new Int8Array(ensureNotNull(src.next_in).length);
      var src_0 = ensureNotNull(src.next_in);
      ensureNotNull(dest.next_in).set(src_0.subarray(0, 0 + ensureNotNull(src.next_in).length | 0), 0);
    }
    dest.next_in_index = src.next_in_index;
    dest.avail_in = src.avail_in;
    dest.total_in = src.total_in;
    if (src.next_out != null) {
      dest.next_out = new Int8Array(ensureNotNull(src.next_out).length);
      var src_1 = ensureNotNull(src.next_out);
      ensureNotNull(dest.next_out).set(src_1.subarray(0, 0 + ensureNotNull(src.next_out).length | 0), 0);
    }
    dest.next_out_index = src.next_out_index;
    dest.avail_out = src.avail_out;
    dest.total_out = src.total_out;
    dest.msg = src.msg;
    dest.data_type_8be2vx$ = src.data_type_8be2vx$;
    dest.adler = src.adler.copy();
    dest.dstate_8be2vx$ = ensureNotNull(src.dstate_8be2vx$).clone();
    ensureNotNull(dest.dstate_8be2vx$).strm_8be2vx$ = dest;
    return this.Z_OK_0;
  };
  Deflate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Deflate$Companion_instance = null;
  function Deflate$Companion_getInstance() {
    if (Deflate$Companion_instance === null) {
      new Deflate$Companion();
    }
    return Deflate$Companion_instance;
  }
  Deflate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Deflate',
    interfaces: []
  };
  function Deflater() {
    Deflater$Companion_getInstance();
    this.finished_0 = false;
  }
  Deflater.prototype.init_fzusl$ = function (level, nowrap) {
    return this.init_ydzd23$(level, Deflater$Companion_getInstance().MAX_WBITS_0, nowrap);
  };
  Deflater.prototype.init_v9wb1s$ = function (level, bits, memlevel, wrapperType) {
    var bits_0 = bits;
    if (bits_0 < 9 || bits_0 > 15)
      return Deflater$Companion_getInstance().Z_STREAM_ERROR_0;
    if (equals(wrapperType, JZlib_getInstance().W_NONE))
      bits_0 = bits_0 * -1 | 0;
    else if (equals(wrapperType, JZlib_getInstance().W_GZIP))
      bits_0 = bits_0 + 16 | 0;
    else if (equals(wrapperType, JZlib_getInstance().W_ANY))
      return Deflater$Companion_getInstance().Z_STREAM_ERROR_0;
    else
      equals(wrapperType, JZlib_getInstance().W_ZLIB);
    return this.init_qt1dr2$(level, bits_0, memlevel);
  };
  Deflater.prototype.init_qt1dr2$ = function (level, bits, memlevel) {
    this.finished_0 = false;
    this.dstate_8be2vx$ = new Deflate(this);
    return ensureNotNull(this.dstate_8be2vx$).deflateInit_cub51b$(level, bits, memlevel);
  };
  Deflater.prototype.init_ydzd23$ = function (level, bits, nowrap) {
    if (bits === void 0)
      bits = Deflater$Companion_getInstance().MAX_WBITS_0;
    if (nowrap === void 0)
      nowrap = false;
    this.finished_0 = false;
    this.dstate_8be2vx$ = new Deflate(this);
    return ensureNotNull(this.dstate_8be2vx$).deflateInit_6xvm5r$(level, nowrap ? -bits : bits);
  };
  Deflater.prototype.deflate_za3lpa$ = function (flush) {
    if (this.dstate_8be2vx$ == null)
      return Deflater$Companion_getInstance().Z_STREAM_ERROR_0;
    var ret = ensureNotNull(this.dstate_8be2vx$).deflate_kcn2v3$(flush);
    if (ret === Deflater$Companion_getInstance().Z_STREAM_END_0)
      this.finished_0 = true;
    return ret;
  };
  Deflater.prototype.end = function () {
    this.finished_0 = true;
    if (this.dstate_8be2vx$ == null)
      return Deflater$Companion_getInstance().Z_STREAM_ERROR_0;
    var ret = ensureNotNull(this.dstate_8be2vx$).deflateEnd_8be2vx$();
    this.dstate_8be2vx$ = null;
    this.free();
    return ret;
  };
  Deflater.prototype.params_vux9f0$ = function (level, strategy) {
    return this.dstate_8be2vx$ == null ? Deflater$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.dstate_8be2vx$).deflateParams_6xvm5r$(level, strategy);
  };
  Deflater.prototype.setDictionary_mj6st8$ = function (dictionary, dictIndex, dictLength) {
    return this.dstate_8be2vx$ == null ? Deflater$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.dstate_8be2vx$).deflateSetDictionary_idiqg2$(dictionary, dictIndex, dictLength);
  };
  Deflater.prototype.finished = function () {
    return this.finished_0;
  };
  Deflater.prototype.copy_izwz1x$ = function (src) {
    this.finished_0 = src.finished_0;
    return Deflate$Companion_getInstance().deflateCopy_r4vutt$(this, src);
  };
  function Deflater$Companion() {
    Deflater$Companion_instance = this;
    this.MAX_WBITS_0 = 15;
    this.DEF_WBITS_0 = this.MAX_WBITS_0;
    this.Z_NO_FLUSH_0 = 0;
    this.Z_PARTIAL_FLUSH_0 = 1;
    this.Z_SYNC_FLUSH_0 = 2;
    this.Z_FULL_FLUSH_0 = 3;
    this.Z_FINISH_0 = 4;
    this.MAX_MEM_LEVEL_0 = 9;
    this.Z_OK_0 = 0;
    this.Z_STREAM_END_0 = 1;
    this.Z_NEED_DICT_0 = 2;
    this.Z_ERRNO_0 = -1;
    this.Z_STREAM_ERROR_0 = -2;
    this.Z_DATA_ERROR_0 = -3;
    this.Z_MEM_ERROR_0 = -4;
    this.Z_BUF_ERROR_0 = -5;
    this.Z_VERSION_ERROR_0 = -6;
  }
  Deflater$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Deflater$Companion_instance = null;
  function Deflater$Companion_getInstance() {
    if (Deflater$Companion_instance === null) {
      new Deflater$Companion();
    }
    return Deflater$Companion_instance;
  }
  Deflater.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Deflater',
    interfaces: [ZStream]
  };
  function Deflater_init($this) {
    $this = $this || Object.create(Deflater.prototype);
    ZStream.call($this);
    Deflater.call($this);
    return $this;
  }
  function Deflater_init_0(level, nowrap, $this) {
    $this = $this || Object.create(Deflater.prototype);
    Deflater_init_1(level, Deflater$Companion_getInstance().MAX_WBITS_0, nowrap, $this);
    return $this;
  }
  function Deflater_init_1(level, bits, nowrap, $this) {
    if (bits === void 0)
      bits = Deflater$Companion_getInstance().MAX_WBITS_0;
    if (nowrap === void 0)
      nowrap = false;
    $this = $this || Object.create(Deflater.prototype);
    ZStream.call($this);
    Deflater.call($this);
    var ret = $this.init_ydzd23$(level, bits, nowrap);
    if (ret !== Deflater$Companion_getInstance().Z_OK_0)
      throw new GZIPException(ret.toString() + ': ' + $this.msg);
    return $this;
  }
  function Deflater_init_2(level, bits, memlevel, wrapperType, $this) {
    $this = $this || Object.create(Deflater.prototype);
    ZStream.call($this);
    Deflater.call($this);
    var ret = $this.init_v9wb1s$(level, bits, memlevel, wrapperType);
    if (ret !== Deflater$Companion_getInstance().Z_OK_0)
      throw new GZIPException(ret.toString() + ': ' + $this.msg);
    return $this;
  }
  function Deflater_init_3(level, bits, memlevel, $this) {
    $this = $this || Object.create(Deflater.prototype);
    ZStream.call($this);
    Deflater.call($this);
    var ret = $this.init_qt1dr2$(level, bits, memlevel);
    if (ret !== Deflater$Companion_getInstance().Z_OK_0)
      throw new GZIPException(ret.toString() + ': ' + $this.msg);
    return $this;
  }
  function DeflaterOutputStream(out, deflater, size, close_out) {
    DeflaterOutputStream$Companion_getInstance();
    if (size === void 0)
      size = DeflaterOutputStream$Companion_getInstance().DEFAULT_BUFSIZE;
    if (close_out === void 0)
      close_out = true;
    FilterOutputStream.call(this, out);
    this.deflater = deflater;
    this.close_out_lvpbbf$_0 = close_out;
    this.buffer = new Int8Array(size);
    this.closed_c9qeza$_0 = false;
    this.syncFlush = false;
    this.buf1_vpgh0c$_0 = new Int8Array(1);
    this.mydeflater = false;
  }
  Object.defineProperty(DeflaterOutputStream.prototype, 'total_in', {
    get: function () {
      return this.deflater.total_in;
    }
  });
  Object.defineProperty(DeflaterOutputStream.prototype, 'total_out', {
    get: function () {
      return this.deflater.total_out;
    }
  });
  DeflaterOutputStream.prototype.write_za3lpa$ = function (value) {
    this.buf1_vpgh0c$_0[0] = toByte(value);
    this.write_mj6st8$(this.buf1_vpgh0c$_0, 0, 1);
  };
  DeflaterOutputStream.prototype.write_mj6st8$ = function (value, offset, length) {
    if (this.deflater.finished()) {
      throw new IOException('finished');
    }
     else if (offset < 0 || length < 0 || (offset + length | 0) > value.length) {
      throw new IndexOutOfBoundsException();
    }
     else if (length === 0) {
      return;
    }
     else {
      var flush = this.syncFlush ? JZlib_getInstance().Z_SYNC_FLUSH : JZlib_getInstance().Z_NO_FLUSH;
      this.deflater.setInput_exhmhv$(value, offset, length, true);
      while (this.deflater.avail_in > 0) {
        var err = this.deflate_za3lpa$(flush);
        if (err === JZlib_getInstance().Z_STREAM_END)
          break;
      }
    }
  };
  DeflaterOutputStream.prototype.finish = function () {
    while (!this.deflater.finished()) {
      this.deflate_za3lpa$(JZlib_getInstance().Z_FINISH);
    }
  };
  DeflaterOutputStream.prototype.close = function () {
    if (!this.closed_c9qeza$_0) {
      this.finish();
      if (this.mydeflater) {
        this.deflater.end();
      }
      if (this.close_out_lvpbbf$_0)
        this.out.close();
      this.closed_c9qeza$_0 = true;
    }
  };
  DeflaterOutputStream.prototype.deflate_za3lpa$ = function (flush) {
    this.deflater.setOutput_mj6st8$(this.buffer, 0, this.buffer.length);
    var err = this.deflater.deflate_za3lpa$(flush);
    if (err !== JZlib_getInstance().Z_OK && err !== JZlib_getInstance().Z_STREAM_END)
      if (err === JZlib_getInstance().Z_BUF_ERROR) {
        if (this.deflater.avail_in > 0 || flush === JZlib_getInstance().Z_FINISH) {
          throw new IOException('failed to deflate');
        }
      }
       else
        throw new IOException('failed to deflate');
    var len = this.deflater.next_out_index;
    if (len > 0) {
      this.out.write_mj6st8$(this.buffer, 0, len);
    }
    return err;
  };
  DeflaterOutputStream.prototype.flush = function () {
    if (this.syncFlush && !this.deflater.finished()) {
      while (true) {
        var err = this.deflate_za3lpa$(JZlib_getInstance().Z_SYNC_FLUSH);
        if (this.deflater.next_out_index < this.buffer.length)
          break;
        if (err === JZlib_getInstance().Z_STREAM_END)
          break;
      }
    }
    this.out.flush();
  };
  function DeflaterOutputStream$Companion() {
    DeflaterOutputStream$Companion_instance = this;
    this.DEFAULT_BUFSIZE = 512;
  }
  DeflaterOutputStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DeflaterOutputStream$Companion_instance = null;
  function DeflaterOutputStream$Companion_getInstance() {
    if (DeflaterOutputStream$Companion_instance === null) {
      new DeflaterOutputStream$Companion();
    }
    return DeflaterOutputStream$Companion_instance;
  }
  DeflaterOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeflaterOutputStream',
    interfaces: [FilterOutputStream]
  };
  function DeflaterOutputStream_init(out, $this) {
    $this = $this || Object.create(DeflaterOutputStream.prototype);
    DeflaterOutputStream.call($this, out, Deflater_init_1(JZlib_getInstance().Z_DEFAULT_COMPRESSION), DeflaterOutputStream$Companion_getInstance().DEFAULT_BUFSIZE, true);
    $this.mydeflater = true;
    return $this;
  }
  function FilterInputStream(i) {
    InputStream.call(this);
    this.i = i;
  }
  FilterInputStream.prototype.read = function () {
    return this.i.read();
  };
  FilterInputStream.prototype.read_fqrh44$ = function (b) {
    return this.read_mj6st8$(b, 0, b.length);
  };
  FilterInputStream.prototype.read_mj6st8$ = function (b, off, len) {
    return this.i.read_mj6st8$(b, off, len);
  };
  FilterInputStream.prototype.skip_s8cxhz$ = function (n) {
    return this.i.skip_s8cxhz$(n);
  };
  FilterInputStream.prototype.available = function () {
    return this.i.available();
  };
  FilterInputStream.prototype.close = function () {
    this.i.close();
  };
  FilterInputStream.prototype.mark_za3lpa$ = function (readlimit) {
    this.i.mark_za3lpa$(readlimit);
  };
  FilterInputStream.prototype.reset = function () {
    this.i.reset();
  };
  FilterInputStream.prototype.markSupported = function () {
    return this.i.markSupported();
  };
  FilterInputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterInputStream',
    interfaces: [InputStream]
  };
  function GZIPException(s) {
    RuntimeException.call(this, s);
    this.name = 'GZIPException';
  }
  GZIPException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GZIPException',
    interfaces: [RuntimeException]
  };
  function GZIPHeader() {
    GZIPHeader$Companion_getInstance();
    this.text_8be2vx$ = false;
    this.fhcrc_0 = false;
    this.time_8be2vx$ = Kotlin.Long.ZERO;
    this.xflags_8be2vx$ = 0;
    this.os_8be2vx$ = 255;
    this.extra_8be2vx$ = null;
    this.name_8be2vx$ = null;
    this.comment_8be2vx$ = null;
    this.hcrc_8be2vx$ = 0;
    this.crc = Kotlin.Long.ZERO;
    this.done_8be2vx$ = false;
    this.modifiedTime = Kotlin.Long.ZERO;
  }
  GZIPHeader.prototype.setOS_za3lpa$ = function (os) {
    if (0 <= os && os <= 13 || os === 255)
      this.os_8be2vx$ = os;
    else
      throw new IllegalArgumentException('os: ' + toString(os));
  };
  GZIPHeader.prototype.getOS = function () {
    return this.os_8be2vx$;
  };
  GZIPHeader.prototype.setName_61zpoe$ = function (name) {
    this.name_8be2vx$ = toSimpleByteArray(name);
  };
  GZIPHeader.prototype.getName = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.name_8be2vx$) != null ? toSimpleString(tmp$) : null) != null ? tmp$_0 : '';
  };
  GZIPHeader.prototype.setComment_61zpoe$ = function (comment) {
    this.comment_8be2vx$ = toSimpleByteArray(comment);
  };
  GZIPHeader.prototype.getComment = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.comment_8be2vx$) != null ? toSimpleString(tmp$) : null) != null ? tmp$_0 : '';
  };
  GZIPHeader.prototype.put_wozauy$ = function (d) {
    var flag = 0;
    if (this.text_8be2vx$)
      flag = flag | 1;
    if (this.fhcrc_0)
      flag = flag | 2;
    if (this.extra_8be2vx$ != null)
      flag = flag | 4;
    if (this.name_8be2vx$ != null)
      flag = flag | 8;
    if (this.comment_8be2vx$ != null)
      flag = flag | 16;
    var xfl = 0;
    if (d.level_8be2vx$ === JZlib_getInstance().Z_BEST_SPEED) {
      xfl = xfl | 4;
    }
     else if (d.level_8be2vx$ === JZlib_getInstance().Z_BEST_COMPRESSION) {
      xfl = xfl | 2;
    }
    d.put_short_kcn2v3$(toShort(35615));
    d.put_byte_8e99oo$(toByte(8));
    d.put_byte_8e99oo$(toByte(flag));
    d.put_byte_8e99oo$(toByte(this.modifiedTime.toInt()));
    d.put_byte_8e99oo$(toByte(this.modifiedTime.shiftRight(8).toInt()));
    d.put_byte_8e99oo$(toByte(this.modifiedTime.shiftRight(16).toInt()));
    d.put_byte_8e99oo$(toByte(this.modifiedTime.shiftRight(24).toInt()));
    d.put_byte_8e99oo$(toByte(xfl));
    d.put_byte_8e99oo$(toByte(this.os_8be2vx$));
    if (this.extra_8be2vx$ != null) {
      d.put_byte_8e99oo$(toByte(ensureNotNull(this.extra_8be2vx$).length));
      d.put_byte_8e99oo$(toByte(ensureNotNull(this.extra_8be2vx$).length >> 8));
      d.put_byte_idiqg2$(this.extra_8be2vx$, 0, ensureNotNull(this.extra_8be2vx$).length);
    }
    if (this.name_8be2vx$ != null) {
      d.put_byte_idiqg2$(this.name_8be2vx$, 0, ensureNotNull(this.name_8be2vx$).length);
      d.put_byte_8e99oo$(toByte(0));
    }
    if (this.comment_8be2vx$ != null) {
      d.put_byte_idiqg2$(this.comment_8be2vx$, 0, ensureNotNull(this.comment_8be2vx$).length);
      d.put_byte_8e99oo$(toByte(0));
    }
  };
  GZIPHeader.prototype.clone = function () {
    var gheader = new GZIPHeader();
    var tmp;
    if (gheader.extra_8be2vx$ != null) {
      tmp = new Int8Array(ensureNotNull(gheader.extra_8be2vx$).length);
      tmp.set(ensureNotNull(gheader.extra_8be2vx$).subarray(0, 0 + tmp.length | 0), 0);
      gheader.extra_8be2vx$ = tmp;
    }
    if (gheader.name_8be2vx$ != null) {
      tmp = new Int8Array(ensureNotNull(gheader.name_8be2vx$).length);
      tmp.set(ensureNotNull(gheader.name_8be2vx$).subarray(0, 0 + tmp.length | 0), 0);
      gheader.name_8be2vx$ = tmp;
    }
    if (gheader.comment_8be2vx$ != null) {
      tmp = new Int8Array(ensureNotNull(gheader.comment_8be2vx$).length);
      tmp.set(ensureNotNull(gheader.comment_8be2vx$).subarray(0, 0 + tmp.length | 0), 0);
      gheader.comment_8be2vx$ = tmp;
    }
    return gheader;
  };
  function GZIPHeader$Companion() {
    GZIPHeader$Companion_instance = this;
    this.OS_MSDOS = toByte(0);
    this.OS_AMIGA = toByte(1);
    this.OS_VMS = toByte(2);
    this.OS_UNIX = toByte(3);
    this.OS_ATARI = toByte(5);
    this.OS_OS2 = toByte(6);
    this.OS_MACOS = toByte(7);
    this.OS_TOPS20 = toByte(10);
    this.OS_WIN32 = toByte(11);
    this.OS_VMCMS = toByte(4);
    this.OS_ZSYSTEM = toByte(8);
    this.OS_CPM = toByte(9);
    this.OS_QDOS = toByte(12);
    this.OS_RISCOS = toByte(13);
    this.OS_UNKNOWN = toByte(255);
  }
  GZIPHeader$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GZIPHeader$Companion_instance = null;
  function GZIPHeader$Companion_getInstance() {
    if (GZIPHeader$Companion_instance === null) {
      new GZIPHeader$Companion();
    }
    return GZIPHeader$Companion_instance;
  }
  GZIPHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GZIPHeader',
    interfaces: []
  };
  function GZIPInputStream(i, inflater, size, close_in) {
    InflaterInputStream.call(this, i, inflater, size, close_in);
  }
  Object.defineProperty(GZIPInputStream.prototype, 'modifiedtime', {
    get: function () {
      return ensureNotNull(ensureNotNull(this.inflater.istate_8be2vx$).gzipHeader).modifiedTime;
    }
  });
  Object.defineProperty(GZIPInputStream.prototype, 'os', {
    get: function () {
      return ensureNotNull(ensureNotNull(this.inflater.istate_8be2vx$).gzipHeader).getOS();
    }
  });
  Object.defineProperty(GZIPInputStream.prototype, 'name', {
    get: function () {
      return ensureNotNull(ensureNotNull(this.inflater.istate_8be2vx$).gzipHeader).getName();
    }
  });
  Object.defineProperty(GZIPInputStream.prototype, 'comment', {
    get: function () {
      return ensureNotNull(ensureNotNull(this.inflater.istate_8be2vx$).gzipHeader).getComment();
    }
  });
  Object.defineProperty(GZIPInputStream.prototype, 'crc', {
    get: function () {
      if (ensureNotNull(this.inflater.istate_8be2vx$).mode !== 12)
        throw new GZIPException('checksum is not calculated yet.');
      return ensureNotNull(ensureNotNull(this.inflater.istate_8be2vx$).gzipHeader).crc;
    }
  });
  GZIPInputStream.prototype.readHeader = function () {
    var tmp$, tmp$_0;
    var empty = new Int8Array([]);
    this.inflater.setOutput_mj6st8$(empty, 0, 0);
    this.inflater.setInput_exhmhv$(empty, 0, 0, false);
    var b = new Int8Array(10);
    var n = this.fill_0(b);
    if (n !== 10) {
      if (n > 0) {
        this.inflater.setInput_exhmhv$(b, 0, n, false);
        this.inflater.next_in_index = 0;
        this.inflater.avail_in = n;
      }
      throw new IOException('no input');
    }
    this.inflater.setInput_exhmhv$(b, 0, n, false);
    var b1 = new Int8Array(1);
    do {
      if (this.inflater.avail_in <= 0) {
        var i = this.i.read_fqrh44$(b1);
        if (i <= 0)
          throw new IOException('no input');
        this.inflater.setInput_exhmhv$(b1, 0, 1, true);
      }
      var err = this.inflater.inflate_za3lpa$(JZlib_getInstance().Z_NO_FLUSH);
      if (err !== 0) {
        var len = 2048 - ensureNotNull(this.inflater.next_in).length | 0;
        if (len > 0) {
          var tmp = new Int8Array(len);
          n = this.fill_0(tmp);
          if (n > 0) {
            tmp$ = this.inflater;
            tmp$.avail_in = tmp$.avail_in + this.inflater.next_in_index | 0;
            this.inflater.next_in_index = 0;
            this.inflater.setInput_exhmhv$(tmp, 0, n, true);
          }
        }
        tmp$_0 = this.inflater;
        tmp$_0.avail_in = tmp$_0.avail_in + this.inflater.next_in_index | 0;
        this.inflater.next_in_index = 0;
        throw new IOException(ensureNotNull(this.inflater.msg));
      }
    }
     while (ensureNotNull(this.inflater.istate_8be2vx$).inParsingHeader());
  };
  GZIPInputStream.prototype.fill_0 = function (buf) {
    var len = buf.length;
    var n = 0;
    do {
      var i = -1;
      try {
        i = this.i.read_mj6st8$(buf, n, buf.length - n | 0);
      }
       catch (e) {
        if (!Kotlin.isType(e, IOException))
          throw e;
      }
      if (i === -1) {
        break;
      }
      n = n + i | 0;
    }
     while (n < len);
    return n;
  };
  GZIPInputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GZIPInputStream',
    interfaces: [InflaterInputStream]
  };
  function GZIPInputStream_init(i, size, close_in, $this) {
    if (size === void 0)
      size = InflaterInputStream$Companion_getInstance().DEFAULT_BUFSIZE;
    if (close_in === void 0)
      close_in = true;
    $this = $this || Object.create(GZIPInputStream.prototype);
    GZIPInputStream.call($this, i, Inflater_init_3(15 + 16 | 0), size, close_in);
    $this.myinflater = true;
    return $this;
  }
  function GZIPOutputStream(out, deflater, size, close_out) {
    DeflaterOutputStream.call(this, out, deflater, size, close_out);
  }
  Object.defineProperty(GZIPOutputStream.prototype, 'crc', {
    get: function () {
      if (ensureNotNull(this.deflater.dstate_8be2vx$).status_8be2vx$ !== 666)
        throw new GZIPException('checksum is not calculated yet.');
      return ensureNotNull(this.deflater.dstate_8be2vx$).gzipHeader_8be2vx$.crc;
    }
  });
  GZIPOutputStream.prototype.check_0 = function () {
    if (ensureNotNull(this.deflater.dstate_8be2vx$).status_8be2vx$ !== 42)
      throw new GZIPException('header is already written.');
  };
  GZIPOutputStream.prototype.setModifiedTime_s8cxhz$ = function (mtime) {
    this.check_0();
    ensureNotNull(this.deflater.dstate_8be2vx$).gzipHeader_8be2vx$.modifiedTime = mtime;
  };
  GZIPOutputStream.prototype.setOS_za3lpa$ = function (os) {
    this.check_0();
    ensureNotNull(this.deflater.dstate_8be2vx$).gzipHeader_8be2vx$.setOS_za3lpa$(os);
  };
  GZIPOutputStream.prototype.setName_61zpoe$ = function (name) {
    this.check_0();
    ensureNotNull(this.deflater.dstate_8be2vx$).gzipHeader_8be2vx$.setName_61zpoe$(name);
  };
  GZIPOutputStream.prototype.setComment_61zpoe$ = function (comment) {
    this.check_0();
    ensureNotNull(this.deflater.dstate_8be2vx$).gzipHeader_8be2vx$.setComment_61zpoe$(comment);
  };
  GZIPOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GZIPOutputStream',
    interfaces: [DeflaterOutputStream]
  };
  function GZIPOutputStream_init(out, size, close_out, $this) {
    if (size === void 0)
      size = DeflaterOutputStream$Companion_getInstance().DEFAULT_BUFSIZE;
    if (close_out === void 0)
      close_out = true;
    $this = $this || Object.create(GZIPOutputStream.prototype);
    GZIPOutputStream.call($this, out, Deflater_init_1(JZlib_getInstance().Z_DEFAULT_COMPRESSION, 15 + 16 | 0), size, close_out);
    $this.mydeflater = true;
    return $this;
  }
  function IOException(msg) {
    Exception.call(this, msg);
    this.name = 'IOException';
  }
  IOException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IOException',
    interfaces: [Exception]
  };
  function EOFException(msg) {
    IOException.call(this, msg);
    this.name = 'EOFException';
  }
  EOFException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EOFException',
    interfaces: [IOException]
  };
  function InfBlocks(z, end) {
    InfBlocks$Companion_getInstance();
    this.z_0 = z;
    this.end = end;
    this.mode = InfBlocks$Companion_getInstance().TYPE_0;
    this.left = 0;
    this.table = 0;
    this.index = 0;
    this.blens = null;
    this.bb = new Int32Array(1);
    this.tb = new Int32Array(1);
    this.bl = new Int32Array(1);
    this.bd = new Int32Array(1);
    this.tl = [new Int32Array(0)];
    this.td = [new Int32Array(0)];
    this.tli = new Int32Array(1);
    this.tdi = new Int32Array(1);
    this.codes_0 = new InfCodes(this.z_0, this);
    this.last = 0;
    this.bitk = 0;
    this.bitb = 0;
    this.hufts = new Int32Array(InfBlocks$Companion_getInstance().MANY_0 * 3 | 0);
    this.window = new Int8Array(this.end);
    this.read = 0;
    this.write = 0;
    this.check_0 = ensureNotNull(this.z_0.istate_8be2vx$).wrap !== 0;
    this.inftree_0 = new InfTree();
    this.reset();
  }
  InfBlocks.prototype.reset = function () {
    this.mode === InfBlocks$Companion_getInstance().BTREE_0 || this.mode === InfBlocks$Companion_getInstance().DTREE_0;
    if (this.mode === InfBlocks$Companion_getInstance().CODES_0) {
      this.codes_0.free_llvks4$(this.z_0);
    }
    this.mode = InfBlocks$Companion_getInstance().TYPE_0;
    this.bitk = 0;
    this.bitb = 0;
    this.write = 0;
    this.read = this.write;
    if (this.check_0) {
      this.z_0.adler.reset();
    }
  };
  InfBlocks.prototype.proc_za3lpa$ = function (r) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42, tmp$_43, tmp$_44, tmp$_45, tmp$_46, tmp$_47, tmp$_48, tmp$_49, tmp$_50, tmp$_51, tmp$_52, tmp$_53, tmp$_54, tmp$_55, tmp$_56, tmp$_57, tmp$_58, tmp$_59, tmp$_60;
    var r_0 = {v: r};
    var t = {v: 0};
    var b = {v: 0};
    var k = {v: 0};
    var p = {v: 0};
    var n = {v: 0};
    var q = {v: 0};
    var m = {v: 0};
    p.v = this.z_0.next_in_index;
    n.v = this.z_0.avail_in;
    b.v = this.bitb;
    k.v = this.bitk;
    q.v = this.write;
    m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
    while (true) {
      lwhen: do {
        tmp$ = this.mode;
        if (tmp$ === InfBlocks$Companion_getInstance().TYPE_0) {
          while (k.v < 3) {
            if (n.v !== 0) {
              r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
            }
             else {
              this.bitb = b.v;
              this.bitk = k.v;
              this.z_0.avail_in = n.v;
              tmp$_0 = this.z_0;
              tmp$_0.total_in = tmp$_0.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p.v;
              this.write = q.v;
              return this.inflate_flush_za3lpa$(r_0.v);
            }
            n.v = n.v - 1 | 0;
            b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_1 = p.v, p.v = tmp$_1 + 1 | 0, tmp$_1] & 255) << k.v;
            k.v = k.v + 8 | 0;
          }
          t.v = b.v & 7;
          this.last = t.v & 1;
          tmp$_2 = t.v >>> 1;
          if (tmp$_2 === 0) {
            b.v = b.v >>> 3;
            k.v = k.v - 3 | 0;
            t.v = k.v & 7;
            b.v = b.v >>> t.v;
            k.v = k.v - t.v | 0;
            this.mode = InfBlocks$Companion_getInstance().LENS_0;
          }
           else if (tmp$_2 === 1) {
            InfTree$Companion_getInstance().inflate_trees_fixed_op7js0$(this.bl, this.bd, this.tl, this.td, this.z_0);
            this.codes_0.init_qm3le4$(this.bl[0], this.bd[0], this.tl[0], 0, this.td[0], 0);
            b.v = b.v >>> 3;
            k.v = k.v - 3 | 0;
            this.mode = InfBlocks$Companion_getInstance().CODES_0;
          }
           else if (tmp$_2 === 2) {
            b.v = b.v >>> 3;
            k.v = k.v - 3 | 0;
            this.mode = InfBlocks$Companion_getInstance().TABLE_0;
          }
           else if (tmp$_2 === 3) {
            b.v = b.v >>> 3;
            k.v = k.v - 3 | 0;
            this.mode = InfBlocks$Companion_getInstance().BAD_0;
            this.z_0.msg = 'invalid block type';
            r_0.v = InfBlocks$Companion_getInstance().Z_DATA_ERROR_0;
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_3 = this.z_0;
            tmp$_3.total_in = tmp$_3.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().LENS_0) {
          while (k.v < 32) {
            if (n.v !== 0) {
              r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
            }
             else {
              this.bitb = b.v;
              this.bitk = k.v;
              this.z_0.avail_in = n.v;
              tmp$_4 = this.z_0;
              tmp$_4.total_in = tmp$_4.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p.v;
              this.write = q.v;
              return this.inflate_flush_za3lpa$(r_0.v);
            }
            n.v = n.v - 1 | 0;
            b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_5 = p.v, p.v = tmp$_5 + 1 | 0, tmp$_5] & 255) << k.v;
            k.v = k.v + 8 | 0;
          }
          if ((~b.v >>> 16 & 65535) !== (b.v & 65535)) {
            this.mode = InfBlocks$Companion_getInstance().BAD_0;
            this.z_0.msg = 'invalid stored block lengths';
            r_0.v = InfBlocks$Companion_getInstance().Z_DATA_ERROR_0;
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_6 = this.z_0;
            tmp$_6.total_in = tmp$_6.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.left = b.v & 65535;
          k.v = 0;
          b.v = k.v;
          this.mode = this.left !== 0 ? InfBlocks$Companion_getInstance().STORED_0 : this.last !== 0 ? InfBlocks$Companion_getInstance().DRY_0 : InfBlocks$Companion_getInstance().TYPE_0;
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().STORED_0) {
          if (n.v === 0) {
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_7 = this.z_0;
            tmp$_7.total_in = tmp$_7.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          if (m.v === 0) {
            if (q.v === this.end && this.read !== 0) {
              q.v = 0;
              m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
            }
            if (m.v === 0) {
              this.write = q.v;
              r_0.v = this.inflate_flush_za3lpa$(r_0.v);
              q.v = this.write;
              m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
              if (q.v === this.end && this.read !== 0) {
                q.v = 0;
                m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
              }
              if (m.v === 0) {
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_8 = this.z_0;
                tmp$_8.total_in = tmp$_8.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
            }
          }
          r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
          t.v = this.left;
          if (t.v > n.v)
            t.v = n.v;
          if (t.v > m.v)
            t.v = m.v;
          var src = ensureNotNull(this.z_0.next_in);
          var srcPos = p.v;
          var dst = this.window;
          var dstPos = q.v;
          dst.set(src.subarray(srcPos, srcPos + t.v | 0), dstPos);
          p.v = p.v + t.v | 0;
          n.v = n.v - t.v | 0;
          q.v = q.v + t.v | 0;
          m.v = m.v - t.v | 0;
          this.left = this.left - t.v | 0;
          if (this.left !== 0)
            break lwhen;
          this.mode = this.last !== 0 ? InfBlocks$Companion_getInstance().DRY_0 : InfBlocks$Companion_getInstance().TYPE_0;
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().TABLE_0) {
          while (k.v < 14) {
            if (n.v !== 0) {
              r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
            }
             else {
              this.bitb = b.v;
              this.bitk = k.v;
              this.z_0.avail_in = n.v;
              tmp$_9 = this.z_0;
              tmp$_9.total_in = tmp$_9.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p.v;
              this.write = q.v;
              return this.inflate_flush_za3lpa$(r_0.v);
            }
            n.v = n.v - 1 | 0;
            b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_10 = p.v, p.v = tmp$_10 + 1 | 0, tmp$_10] & 255) << k.v;
            k.v = k.v + 8 | 0;
          }
          t.v = b.v & 16383;
          this.table = t.v;
          if ((t.v & 31) > 29 || (t.v >> 5 & 31) > 29) {
            this.mode = InfBlocks$Companion_getInstance().BAD_0;
            this.z_0.msg = 'too many length or distance symbols';
            r_0.v = InfBlocks$Companion_getInstance().Z_DATA_ERROR_0;
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_11 = this.z_0;
            tmp$_11.total_in = tmp$_11.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          t.v = 258 + (t.v & 31) + (t.v >> 5 & 31) | 0;
          if (this.blens == null || ensureNotNull(this.blens).length < t.v) {
            this.blens = new Int32Array(t.v);
          }
           else {
            tmp$_12 = t.v;
            for (var i = 0; i < tmp$_12; i++) {
              ensureNotNull(this.blens)[i] = 0;
            }
          }
          b.v = b.v >>> 14;
          k.v = k.v - 14 | 0;
          this.index = 0;
          this.mode = InfBlocks$Companion_getInstance().BTREE_0;
          while (this.index < (4 + (this.table >>> 10) | 0)) {
            while (k.v < 3) {
              if (n.v !== 0) {
                r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
              }
               else {
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_13 = this.z_0;
                tmp$_13.total_in = tmp$_13.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
              n.v = n.v - 1 | 0;
              b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_14 = p.v, p.v = tmp$_14 + 1 | 0, tmp$_14] & 255) << k.v;
              k.v = k.v + 8 | 0;
            }
            ensureNotNull(this.blens)[InfBlocks$Companion_getInstance().border[tmp$_15 = this.index, this.index = tmp$_15 + 1 | 0, tmp$_15]] = b.v & 7;
            b.v = b.v >>> 3;
            k.v = k.v - 3 | 0;
          }
          while (this.index < 19) {
            ensureNotNull(this.blens)[InfBlocks$Companion_getInstance().border[tmp$_16 = this.index, this.index = tmp$_16 + 1 | 0, tmp$_16]] = 0;
          }
          this.bb[0] = 7;
          t.v = this.inftree_0.inflate_trees_bits_k5dz4w$(ensureNotNull(this.blens), this.bb, this.tb, this.hufts, this.z_0);
          if (t.v !== InfBlocks$Companion_getInstance().Z_OK_0) {
            r_0.v = t.v;
            if (r_0.v === InfBlocks$Companion_getInstance().Z_DATA_ERROR_0) {
              this.blens = null;
              this.mode = InfBlocks$Companion_getInstance().BAD_0;
            }
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_17 = this.z_0;
            tmp$_17.total_in = tmp$_17.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.index = 0;
          this.mode = InfBlocks$Companion_getInstance().DTREE_0;
          while (true) {
            t.v = this.table;
            if (this.index >= (258 + (t.v & 31) + (t.v >> 5 & 31) | 0)) {
              break;
            }
            var h;
            var i_0;
            var j;
            var c;
            t.v = this.bb[0];
            while (k.v < t.v) {
              if (n.v !== 0) {
                r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
              }
               else {
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_18 = this.z_0;
                tmp$_18.total_in = tmp$_18.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
              n.v = n.v - 1 | 0;
              b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_19 = p.v, p.v = tmp$_19 + 1 | 0, tmp$_19] & 255) << k.v;
              k.v = k.v + 8 | 0;
            }
            this.tb[0];
            t.v = this.hufts[((this.tb[0] + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[t.v]) | 0) * 3 | 0) + 1 | 0];
            c = this.hufts[((this.tb[0] + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[t.v]) | 0) * 3 | 0) + 2 | 0];
            if (c < 16) {
              b.v = b.v >>> t.v;
              k.v = k.v - t.v | 0;
              ensureNotNull(this.blens)[tmp$_20 = this.index, this.index = tmp$_20 + 1 | 0, tmp$_20] = c;
            }
             else {
              i_0 = c === 18 ? 7 : c - 14 | 0;
              j = c === 18 ? 11 : 3;
              while (k.v < (t.v + i_0 | 0)) {
                if (n.v !== 0) {
                  r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
                }
                 else {
                  this.bitb = b.v;
                  this.bitk = k.v;
                  this.z_0.avail_in = n.v;
                  tmp$_21 = this.z_0;
                  tmp$_21.total_in = tmp$_21.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                  this.z_0.next_in_index = p.v;
                  this.write = q.v;
                  return this.inflate_flush_za3lpa$(r_0.v);
                }
                n.v = n.v - 1 | 0;
                b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_22 = p.v, p.v = tmp$_22 + 1 | 0, tmp$_22] & 255) << k.v;
                k.v = k.v + 8 | 0;
              }
              b.v = b.v >>> t.v;
              k.v = k.v - t.v | 0;
              j = j + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[i_0]) | 0;
              b.v = b.v >>> i_0;
              k.v = k.v - i_0 | 0;
              i_0 = this.index;
              t.v = this.table;
              if ((i_0 + j | 0) > (258 + (t.v & 31) + (t.v >> 5 & 31) | 0) || (c === 16 && i_0 < 1)) {
                this.blens = null;
                this.mode = InfBlocks$Companion_getInstance().BAD_0;
                this.z_0.msg = 'invalid bit length repeat';
                r_0.v = InfBlocks$Companion_getInstance().Z_DATA_ERROR_0;
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_23 = this.z_0;
                tmp$_23.total_in = tmp$_23.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
              c = c === 16 ? ensureNotNull(this.blens)[i_0 - 1 | 0] : 0;
              do {
                ensureNotNull(this.blens)[tmp$_24 = i_0, i_0 = tmp$_24 + 1 | 0, tmp$_24] = c;
              }
               while ((j = j - 1 | 0, j) !== 0);
              this.index = i_0;
            }
          }
          this.tb[0] = -1;
          var tmp$_61;
          this.bl[0] = 9;
          this.bd[0] = 6;
          t.v = this.table;
          t.v = this.inftree_0.inflate_trees_dynamic_1d1xfa$(257 + (t.v & 31) | 0, 1 + (t.v >> 5 & 31) | 0, ensureNotNull(this.blens), this.bl, this.bd, this.tli, this.tdi, this.hufts, this.z_0);
          if (t.v !== InfBlocks$Companion_getInstance().Z_OK_0) {
            if (t.v === InfBlocks$Companion_getInstance().Z_DATA_ERROR_0) {
              this.blens = null;
              this.mode = InfBlocks$Companion_getInstance().BAD_0;
            }
            r_0.v = t.v;
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_61 = this.z_0;
            tmp$_61.total_in = tmp$_61.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.codes_0.init_qm3le4$(this.bl[0], this.bd[0], this.hufts, this.tli[0], this.hufts, this.tdi[0]);
          this.mode = InfBlocks$Companion_getInstance().CODES_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_25 = this.z_0;
          tmp$_25.total_in = tmp$_25.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          r_0.v = this.codes_0.proc_za3lpa$(r_0.v);
          if (r_0.v !== InfBlocks$Companion_getInstance().Z_STREAM_END_0) {
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
          this.codes_0.free_llvks4$(this.z_0);
          p.v = this.z_0.next_in_index;
          n.v = this.z_0.avail_in;
          b.v = this.bitb;
          k.v = this.bitk;
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.last === 0) {
            this.mode = InfBlocks$Companion_getInstance().TYPE_0;
            break lwhen;
          }
          this.mode = InfBlocks$Companion_getInstance().DRY_0;
          this.write = q.v;
          r_0.v = this.inflate_flush_za3lpa$(r_0.v);
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.read !== this.write) {
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_26 = this.z_0;
            tmp$_26.total_in = tmp$_26.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.mode = InfBlocks$Companion_getInstance().DONE_0;
          r_0.v = InfBlocks$Companion_getInstance().Z_STREAM_END_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_27 = this.z_0;
          tmp$_27.total_in = tmp$_27.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          return this.inflate_flush_za3lpa$(r_0.v);
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().BTREE_0) {
          while (this.index < (4 + (this.table >>> 10) | 0)) {
            while (k.v < 3) {
              if (n.v !== 0) {
                r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
              }
               else {
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_28 = this.z_0;
                tmp$_28.total_in = tmp$_28.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
              n.v = n.v - 1 | 0;
              b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_29 = p.v, p.v = tmp$_29 + 1 | 0, tmp$_29] & 255) << k.v;
              k.v = k.v + 8 | 0;
            }
            ensureNotNull(this.blens)[InfBlocks$Companion_getInstance().border[tmp$_30 = this.index, this.index = tmp$_30 + 1 | 0, tmp$_30]] = b.v & 7;
            b.v = b.v >>> 3;
            k.v = k.v - 3 | 0;
          }
          while (this.index < 19) {
            ensureNotNull(this.blens)[InfBlocks$Companion_getInstance().border[tmp$_31 = this.index, this.index = tmp$_31 + 1 | 0, tmp$_31]] = 0;
          }
          this.bb[0] = 7;
          t.v = this.inftree_0.inflate_trees_bits_k5dz4w$(ensureNotNull(this.blens), this.bb, this.tb, this.hufts, this.z_0);
          if (t.v !== InfBlocks$Companion_getInstance().Z_OK_0) {
            r_0.v = t.v;
            if (r_0.v === InfBlocks$Companion_getInstance().Z_DATA_ERROR_0) {
              this.blens = null;
              this.mode = InfBlocks$Companion_getInstance().BAD_0;
            }
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_32 = this.z_0;
            tmp$_32.total_in = tmp$_32.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.index = 0;
          this.mode = InfBlocks$Companion_getInstance().DTREE_0;
          while (true) {
            t.v = this.table;
            if (this.index >= (258 + (t.v & 31) + (t.v >> 5 & 31) | 0)) {
              break;
            }
            var h_0;
            var i_1;
            var j_0;
            var c_0;
            t.v = this.bb[0];
            while (k.v < t.v) {
              if (n.v !== 0) {
                r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
              }
               else {
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_33 = this.z_0;
                tmp$_33.total_in = tmp$_33.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
              n.v = n.v - 1 | 0;
              b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_34 = p.v, p.v = tmp$_34 + 1 | 0, tmp$_34] & 255) << k.v;
              k.v = k.v + 8 | 0;
            }
            this.tb[0];
            t.v = this.hufts[((this.tb[0] + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[t.v]) | 0) * 3 | 0) + 1 | 0];
            c_0 = this.hufts[((this.tb[0] + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[t.v]) | 0) * 3 | 0) + 2 | 0];
            if (c_0 < 16) {
              b.v = b.v >>> t.v;
              k.v = k.v - t.v | 0;
              ensureNotNull(this.blens)[tmp$_35 = this.index, this.index = tmp$_35 + 1 | 0, tmp$_35] = c_0;
            }
             else {
              i_1 = c_0 === 18 ? 7 : c_0 - 14 | 0;
              j_0 = c_0 === 18 ? 11 : 3;
              while (k.v < (t.v + i_1 | 0)) {
                if (n.v !== 0) {
                  r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
                }
                 else {
                  this.bitb = b.v;
                  this.bitk = k.v;
                  this.z_0.avail_in = n.v;
                  tmp$_36 = this.z_0;
                  tmp$_36.total_in = tmp$_36.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                  this.z_0.next_in_index = p.v;
                  this.write = q.v;
                  return this.inflate_flush_za3lpa$(r_0.v);
                }
                n.v = n.v - 1 | 0;
                b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_37 = p.v, p.v = tmp$_37 + 1 | 0, tmp$_37] & 255) << k.v;
                k.v = k.v + 8 | 0;
              }
              b.v = b.v >>> t.v;
              k.v = k.v - t.v | 0;
              j_0 = j_0 + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[i_1]) | 0;
              b.v = b.v >>> i_1;
              k.v = k.v - i_1 | 0;
              i_1 = this.index;
              t.v = this.table;
              if ((i_1 + j_0 | 0) > (258 + (t.v & 31) + (t.v >> 5 & 31) | 0) || (c_0 === 16 && i_1 < 1)) {
                this.blens = null;
                this.mode = InfBlocks$Companion_getInstance().BAD_0;
                this.z_0.msg = 'invalid bit length repeat';
                r_0.v = InfBlocks$Companion_getInstance().Z_DATA_ERROR_0;
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_38 = this.z_0;
                tmp$_38.total_in = tmp$_38.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
              c_0 = c_0 === 16 ? ensureNotNull(this.blens)[i_1 - 1 | 0] : 0;
              do {
                ensureNotNull(this.blens)[tmp$_39 = i_1, i_1 = tmp$_39 + 1 | 0, tmp$_39] = c_0;
              }
               while ((j_0 = j_0 - 1 | 0, j_0) !== 0);
              this.index = i_1;
            }
          }
          this.tb[0] = -1;
          var tmp$_62;
          this.bl[0] = 9;
          this.bd[0] = 6;
          t.v = this.table;
          t.v = this.inftree_0.inflate_trees_dynamic_1d1xfa$(257 + (t.v & 31) | 0, 1 + (t.v >> 5 & 31) | 0, ensureNotNull(this.blens), this.bl, this.bd, this.tli, this.tdi, this.hufts, this.z_0);
          if (t.v !== InfBlocks$Companion_getInstance().Z_OK_0) {
            if (t.v === InfBlocks$Companion_getInstance().Z_DATA_ERROR_0) {
              this.blens = null;
              this.mode = InfBlocks$Companion_getInstance().BAD_0;
            }
            r_0.v = t.v;
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_62 = this.z_0;
            tmp$_62.total_in = tmp$_62.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.codes_0.init_qm3le4$(this.bl[0], this.bd[0], this.hufts, this.tli[0], this.hufts, this.tdi[0]);
          this.mode = InfBlocks$Companion_getInstance().CODES_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_40 = this.z_0;
          tmp$_40.total_in = tmp$_40.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          r_0.v = this.codes_0.proc_za3lpa$(r_0.v);
          if (r_0.v !== InfBlocks$Companion_getInstance().Z_STREAM_END_0) {
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
          this.codes_0.free_llvks4$(this.z_0);
          p.v = this.z_0.next_in_index;
          n.v = this.z_0.avail_in;
          b.v = this.bitb;
          k.v = this.bitk;
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.last === 0) {
            this.mode = InfBlocks$Companion_getInstance().TYPE_0;
            break lwhen;
          }
          this.mode = InfBlocks$Companion_getInstance().DRY_0;
          this.write = q.v;
          r_0.v = this.inflate_flush_za3lpa$(r_0.v);
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.read !== this.write) {
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_41 = this.z_0;
            tmp$_41.total_in = tmp$_41.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.mode = InfBlocks$Companion_getInstance().DONE_0;
          r_0.v = InfBlocks$Companion_getInstance().Z_STREAM_END_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_42 = this.z_0;
          tmp$_42.total_in = tmp$_42.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          return this.inflate_flush_za3lpa$(r_0.v);
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().DTREE_0) {
          while (true) {
            t.v = this.table;
            if (this.index >= (258 + (t.v & 31) + (t.v >> 5 & 31) | 0)) {
              break;
            }
            var h_1;
            var i_2;
            var j_1;
            var c_1;
            t.v = this.bb[0];
            while (k.v < t.v) {
              if (n.v !== 0) {
                r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
              }
               else {
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_43 = this.z_0;
                tmp$_43.total_in = tmp$_43.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
              n.v = n.v - 1 | 0;
              b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_44 = p.v, p.v = tmp$_44 + 1 | 0, tmp$_44] & 255) << k.v;
              k.v = k.v + 8 | 0;
            }
            this.tb[0];
            t.v = this.hufts[((this.tb[0] + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[t.v]) | 0) * 3 | 0) + 1 | 0];
            c_1 = this.hufts[((this.tb[0] + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[t.v]) | 0) * 3 | 0) + 2 | 0];
            if (c_1 < 16) {
              b.v = b.v >>> t.v;
              k.v = k.v - t.v | 0;
              ensureNotNull(this.blens)[tmp$_45 = this.index, this.index = tmp$_45 + 1 | 0, tmp$_45] = c_1;
            }
             else {
              i_2 = c_1 === 18 ? 7 : c_1 - 14 | 0;
              j_1 = c_1 === 18 ? 11 : 3;
              while (k.v < (t.v + i_2 | 0)) {
                if (n.v !== 0) {
                  r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
                }
                 else {
                  this.bitb = b.v;
                  this.bitk = k.v;
                  this.z_0.avail_in = n.v;
                  tmp$_46 = this.z_0;
                  tmp$_46.total_in = tmp$_46.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                  this.z_0.next_in_index = p.v;
                  this.write = q.v;
                  return this.inflate_flush_za3lpa$(r_0.v);
                }
                n.v = n.v - 1 | 0;
                b.v = b.v | (ensureNotNull(this.z_0.next_in)[tmp$_47 = p.v, p.v = tmp$_47 + 1 | 0, tmp$_47] & 255) << k.v;
                k.v = k.v + 8 | 0;
              }
              b.v = b.v >>> t.v;
              k.v = k.v - t.v | 0;
              j_1 = j_1 + (b.v & InfBlocks$Companion_getInstance().inflate_mask_0[i_2]) | 0;
              b.v = b.v >>> i_2;
              k.v = k.v - i_2 | 0;
              i_2 = this.index;
              t.v = this.table;
              if ((i_2 + j_1 | 0) > (258 + (t.v & 31) + (t.v >> 5 & 31) | 0) || (c_1 === 16 && i_2 < 1)) {
                this.blens = null;
                this.mode = InfBlocks$Companion_getInstance().BAD_0;
                this.z_0.msg = 'invalid bit length repeat';
                r_0.v = InfBlocks$Companion_getInstance().Z_DATA_ERROR_0;
                this.bitb = b.v;
                this.bitk = k.v;
                this.z_0.avail_in = n.v;
                tmp$_48 = this.z_0;
                tmp$_48.total_in = tmp$_48.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p.v;
                this.write = q.v;
                return this.inflate_flush_za3lpa$(r_0.v);
              }
              c_1 = c_1 === 16 ? ensureNotNull(this.blens)[i_2 - 1 | 0] : 0;
              do {
                ensureNotNull(this.blens)[tmp$_49 = i_2, i_2 = tmp$_49 + 1 | 0, tmp$_49] = c_1;
              }
               while ((j_1 = j_1 - 1 | 0, j_1) !== 0);
              this.index = i_2;
            }
          }
          this.tb[0] = -1;
          var tmp$_63;
          this.bl[0] = 9;
          this.bd[0] = 6;
          t.v = this.table;
          t.v = this.inftree_0.inflate_trees_dynamic_1d1xfa$(257 + (t.v & 31) | 0, 1 + (t.v >> 5 & 31) | 0, ensureNotNull(this.blens), this.bl, this.bd, this.tli, this.tdi, this.hufts, this.z_0);
          if (t.v !== InfBlocks$Companion_getInstance().Z_OK_0) {
            if (t.v === InfBlocks$Companion_getInstance().Z_DATA_ERROR_0) {
              this.blens = null;
              this.mode = InfBlocks$Companion_getInstance().BAD_0;
            }
            r_0.v = t.v;
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_63 = this.z_0;
            tmp$_63.total_in = tmp$_63.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.codes_0.init_qm3le4$(this.bl[0], this.bd[0], this.hufts, this.tli[0], this.hufts, this.tdi[0]);
          this.mode = InfBlocks$Companion_getInstance().CODES_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_50 = this.z_0;
          tmp$_50.total_in = tmp$_50.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          r_0.v = this.codes_0.proc_za3lpa$(r_0.v);
          if (r_0.v !== InfBlocks$Companion_getInstance().Z_STREAM_END_0) {
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
          this.codes_0.free_llvks4$(this.z_0);
          p.v = this.z_0.next_in_index;
          n.v = this.z_0.avail_in;
          b.v = this.bitb;
          k.v = this.bitk;
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.last === 0) {
            this.mode = InfBlocks$Companion_getInstance().TYPE_0;
            break lwhen;
          }
          this.mode = InfBlocks$Companion_getInstance().DRY_0;
          this.write = q.v;
          r_0.v = this.inflate_flush_za3lpa$(r_0.v);
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.read !== this.write) {
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_51 = this.z_0;
            tmp$_51.total_in = tmp$_51.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.mode = InfBlocks$Companion_getInstance().DONE_0;
          r_0.v = InfBlocks$Companion_getInstance().Z_STREAM_END_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_52 = this.z_0;
          tmp$_52.total_in = tmp$_52.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          return this.inflate_flush_za3lpa$(r_0.v);
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().CODES_0) {
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_53 = this.z_0;
          tmp$_53.total_in = tmp$_53.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          r_0.v = this.codes_0.proc_za3lpa$(r_0.v);
          if (r_0.v !== InfBlocks$Companion_getInstance().Z_STREAM_END_0) {
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          r_0.v = InfBlocks$Companion_getInstance().Z_OK_0;
          this.codes_0.free_llvks4$(this.z_0);
          p.v = this.z_0.next_in_index;
          n.v = this.z_0.avail_in;
          b.v = this.bitb;
          k.v = this.bitk;
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.last === 0) {
            this.mode = InfBlocks$Companion_getInstance().TYPE_0;
            break lwhen;
          }
          this.mode = InfBlocks$Companion_getInstance().DRY_0;
          this.write = q.v;
          r_0.v = this.inflate_flush_za3lpa$(r_0.v);
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.read !== this.write) {
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_54 = this.z_0;
            tmp$_54.total_in = tmp$_54.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.mode = InfBlocks$Companion_getInstance().DONE_0;
          r_0.v = InfBlocks$Companion_getInstance().Z_STREAM_END_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_55 = this.z_0;
          tmp$_55.total_in = tmp$_55.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          return this.inflate_flush_za3lpa$(r_0.v);
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().DRY_0) {
          this.write = q.v;
          r_0.v = this.inflate_flush_za3lpa$(r_0.v);
          q.v = this.write;
          m.v = q.v < this.read ? this.read - q.v - 1 | 0 : this.end - q.v | 0;
          if (this.read !== this.write) {
            this.bitb = b.v;
            this.bitk = k.v;
            this.z_0.avail_in = n.v;
            tmp$_56 = this.z_0;
            tmp$_56.total_in = tmp$_56.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p.v;
            this.write = q.v;
            return this.inflate_flush_za3lpa$(r_0.v);
          }
          this.mode = InfBlocks$Companion_getInstance().DONE_0;
          r_0.v = InfBlocks$Companion_getInstance().Z_STREAM_END_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_57 = this.z_0;
          tmp$_57.total_in = tmp$_57.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          return this.inflate_flush_za3lpa$(r_0.v);
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().DONE_0) {
          r_0.v = InfBlocks$Companion_getInstance().Z_STREAM_END_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_58 = this.z_0;
          tmp$_58.total_in = tmp$_58.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          return this.inflate_flush_za3lpa$(r_0.v);
        }
         else if (tmp$ === InfBlocks$Companion_getInstance().BAD_0) {
          r_0.v = InfBlocks$Companion_getInstance().Z_DATA_ERROR_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_59 = this.z_0;
          tmp$_59.total_in = tmp$_59.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          return this.inflate_flush_za3lpa$(r_0.v);
        }
         else {
          r_0.v = InfBlocks$Companion_getInstance().Z_STREAM_ERROR_0;
          this.bitb = b.v;
          this.bitk = k.v;
          this.z_0.avail_in = n.v;
          tmp$_60 = this.z_0;
          tmp$_60.total_in = tmp$_60.total_in.add(Kotlin.Long.fromInt(p.v - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p.v;
          this.write = q.v;
          return this.inflate_flush_za3lpa$(r_0.v);
        }
      }
       while (false);
    }
  };
  InfBlocks.prototype.free = function () {
    this.reset();
    this.window = new Int8Array([]);
    this.hufts = new Int32Array([]);
  };
  InfBlocks.prototype.set_dictionary_mj6st8$ = function (d, start, n) {
    this.window.set(d.subarray(start, start + n | 0), 0);
    this.write = n;
    this.read = this.write;
  };
  InfBlocks.prototype.sync_point = function () {
    return this.mode === InfBlocks$Companion_getInstance().LENS_0 ? 1 : 0;
  };
  InfBlocks.prototype.inflate_flush_za3lpa$ = function (r) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var r_0 = r;
    var n;
    var p;
    var q;
    p = this.z_0.next_out_index;
    q = this.read;
    n = (q <= this.write ? this.write : this.end) - q | 0;
    if (n > this.z_0.avail_out)
      n = this.z_0.avail_out;
    if (n !== 0 && r_0 === InfBlocks$Companion_getInstance().Z_BUF_ERROR_0)
      r_0 = InfBlocks$Companion_getInstance().Z_OK_0;
    tmp$ = this.z_0;
    tmp$.avail_out = tmp$.avail_out - n | 0;
    tmp$_0 = this.z_0;
    tmp$_0.total_out = tmp$_0.total_out.add(Kotlin.Long.fromInt(n));
    if (this.check_0 && n > 0) {
      this.z_0.adler.update_mj6st8$(this.window, q, n);
    }
    var src = this.window;
    var srcPos = q;
    var dst = ensureNotNull(this.z_0.next_out);
    var dstPos = p;
    dst.set(src.subarray(srcPos, srcPos + n | 0), dstPos);
    p = p + n | 0;
    q = q + n | 0;
    if (q === this.end) {
      q = 0;
      if (this.write === this.end)
        this.write = 0;
      n = this.write - q | 0;
      if (n > this.z_0.avail_out)
        n = this.z_0.avail_out;
      if (n !== 0 && r_0 === InfBlocks$Companion_getInstance().Z_BUF_ERROR_0)
        r_0 = InfBlocks$Companion_getInstance().Z_OK_0;
      tmp$_1 = this.z_0;
      tmp$_1.avail_out = tmp$_1.avail_out - n | 0;
      tmp$_2 = this.z_0;
      tmp$_2.total_out = tmp$_2.total_out.add(Kotlin.Long.fromInt(n));
      if (this.check_0 && n > 0) {
        this.z_0.adler.update_mj6st8$(this.window, q, n);
      }
      var src_0 = this.window;
      var srcPos_0 = q;
      var dst_0 = ensureNotNull(this.z_0.next_out);
      var dstPos_0 = p;
      dst_0.set(src_0.subarray(srcPos_0, srcPos_0 + n | 0), dstPos_0);
      p = p + n | 0;
      q = q + n | 0;
    }
    this.z_0.next_out_index = p;
    this.read = q;
    return r_0;
  };
  function InfBlocks$Companion() {
    InfBlocks$Companion_instance = this;
    this.MANY_0 = 1440;
    this.inflate_mask_0 = new Int32Array([0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
    this.border = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    this.Z_OK_0 = 0;
    this.Z_STREAM_END_0 = 1;
    this.Z_NEED_DICT_0 = 2;
    this.Z_ERRNO_0 = -1;
    this.Z_STREAM_ERROR_0 = -2;
    this.Z_DATA_ERROR_0 = -3;
    this.Z_MEM_ERROR_0 = -4;
    this.Z_BUF_ERROR_0 = -5;
    this.Z_VERSION_ERROR_0 = -6;
    this.TYPE_0 = 0;
    this.LENS_0 = 1;
    this.STORED_0 = 2;
    this.TABLE_0 = 3;
    this.BTREE_0 = 4;
    this.DTREE_0 = 5;
    this.CODES_0 = 6;
    this.DRY_0 = 7;
    this.DONE_0 = 8;
    this.BAD_0 = 9;
  }
  InfBlocks$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InfBlocks$Companion_instance = null;
  function InfBlocks$Companion_getInstance() {
    if (InfBlocks$Companion_instance === null) {
      new InfBlocks$Companion();
    }
    return InfBlocks$Companion_instance;
  }
  InfBlocks.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InfBlocks',
    interfaces: []
  };
  function InfCodes(z, s) {
    InfCodes$Companion_getInstance();
    this.z_0 = z;
    this.s_0 = s;
    this.mode = 0;
    this.len = 0;
    this.tree = null;
    this.tree_index = 0;
    this.need = 0;
    this.lit = 0;
    this.get = 0;
    this.dist = 0;
    this.lbits = 0;
    this.dbits = 0;
    this.ltree_i9k7xn$_0 = this.ltree_i9k7xn$_0;
    this.ltree_index = 0;
    this.dtree_eh78s3$_0 = this.dtree_eh78s3$_0;
    this.dtree_index = 0;
  }
  Object.defineProperty(InfCodes.prototype, 'ltree', {
    get: function () {
      if (this.ltree_i9k7xn$_0 == null)
        return throwUPAE('ltree');
      return this.ltree_i9k7xn$_0;
    },
    set: function (ltree) {
      this.ltree_i9k7xn$_0 = ltree;
    }
  });
  Object.defineProperty(InfCodes.prototype, 'dtree', {
    get: function () {
      if (this.dtree_eh78s3$_0 == null)
        return throwUPAE('dtree');
      return this.dtree_eh78s3$_0;
    },
    set: function (dtree) {
      this.dtree_eh78s3$_0 = dtree;
    }
  });
  InfCodes.prototype.init_qm3le4$ = function (bl, bd, tl, tl_index, td, td_index) {
    this.mode = InfCodes$Companion_getInstance().START_0;
    this.lbits = toByte(bl);
    this.dbits = toByte(bd);
    this.ltree = tl;
    this.ltree_index = tl_index;
    this.dtree = td;
    this.dtree_index = td_index;
    this.tree = null;
  };
  InfCodes.prototype.proc_za3lpa$ = function (r) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29;
    var r_0 = r;
    var j;
    var t;
    var tindex = 0;
    var e = 0;
    var b = 0;
    var k = 0;
    var p = 0;
    var n;
    var q;
    var m;
    var f;
    p = this.z_0.next_in_index;
    n = this.z_0.avail_in;
    b = this.s_0.bitb;
    k = this.s_0.bitk;
    q = this.s_0.write;
    m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
    while (true) {
      lwhen: do {
        tmp$ = this.mode;
        if (tmp$ === InfCodes$Companion_getInstance().START_0) {
          if (m >= 258 && n >= 10) {
            this.s_0.bitb = b;
            this.s_0.bitk = k;
            this.z_0.avail_in = n;
            tmp$_0 = this.z_0;
            tmp$_0.total_in = tmp$_0.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p;
            this.s_0.write = q;
            r_0 = this.inflate_fast_5wfojj$(this.lbits, this.dbits, this.ltree, this.ltree_index, this.dtree, this.dtree_index, this.s_0, this.z_0);
            p = this.z_0.next_in_index;
            n = this.z_0.avail_in;
            b = this.s_0.bitb;
            k = this.s_0.bitk;
            q = this.s_0.write;
            m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
            if (r_0 !== InfCodes$Companion_getInstance().Z_OK_0) {
              this.mode = r_0 === InfCodes$Companion_getInstance().Z_STREAM_END_0 ? InfCodes$Companion_getInstance().WASH_0 : InfCodes$Companion_getInstance().BADCODE_0;
              break lwhen;
            }
          }
          this.need = this.lbits;
          this.tree = this.ltree;
          this.tree_index = this.ltree_index;
          this.mode = InfCodes$Companion_getInstance().LEN_0;
          j = this.need;
          while (k < j) {
            if (n !== 0)
              r_0 = InfCodes$Companion_getInstance().Z_OK_0;
            else {
              this.s_0.bitb = b;
              this.s_0.bitk = k;
              this.z_0.avail_in = n;
              tmp$_1 = this.z_0;
              tmp$_1.total_in = tmp$_1.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p;
              this.s_0.write = q;
              return this.s_0.inflate_flush_za3lpa$(r_0);
            }
            n = n - 1 | 0;
            b = b | (ensureNotNull(this.z_0.next_in)[tmp$_2 = p, p = tmp$_2 + 1 | 0, tmp$_2] & 255) << k;
            k = k + 8 | 0;
          }
          tindex = (this.tree_index + (b & InfCodes$Companion_getInstance().inflate_mask_0[j]) | 0) * 3 | 0;
          b = b >>> ensureNotNull(this.tree)[tindex + 1 | 0];
          k = k - ensureNotNull(this.tree)[tindex + 1 | 0] | 0;
          e = ensureNotNull(this.tree)[tindex];
          if (e === 0) {
            this.lit = ensureNotNull(this.tree)[tindex + 2 | 0];
            this.mode = InfCodes$Companion_getInstance().LIT_0;
            break lwhen;
          }
          if ((e & 16) !== 0) {
            this.get = e & 15;
            this.len = ensureNotNull(this.tree)[tindex + 2 | 0];
            this.mode = InfCodes$Companion_getInstance().LENEXT_0;
            break lwhen;
          }
          if ((e & 64) === 0) {
            this.need = e;
            this.tree_index = (tindex / 3 | 0) + ensureNotNull(this.tree)[tindex + 2 | 0] | 0;
            break lwhen;
          }
          if ((e & 32) !== 0) {
            this.mode = InfCodes$Companion_getInstance().WASH_0;
            break lwhen;
          }
          this.mode = InfCodes$Companion_getInstance().BADCODE_0;
          this.z_0.msg = 'invalid literal/length code';
          r_0 = InfCodes$Companion_getInstance().Z_DATA_ERROR_0;
          this.s_0.bitb = b;
          this.s_0.bitk = k;
          this.z_0.avail_in = n;
          tmp$_3 = this.z_0;
          tmp$_3.total_in = tmp$_3.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p;
          this.s_0.write = q;
          return this.s_0.inflate_flush_za3lpa$(r_0);
        }
         else if (tmp$ === InfCodes$Companion_getInstance().LEN_0) {
          j = this.need;
          while (k < j) {
            if (n !== 0)
              r_0 = InfCodes$Companion_getInstance().Z_OK_0;
            else {
              this.s_0.bitb = b;
              this.s_0.bitk = k;
              this.z_0.avail_in = n;
              tmp$_4 = this.z_0;
              tmp$_4.total_in = tmp$_4.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p;
              this.s_0.write = q;
              return this.s_0.inflate_flush_za3lpa$(r_0);
            }
            n = n - 1 | 0;
            b = b | (ensureNotNull(this.z_0.next_in)[tmp$_5 = p, p = tmp$_5 + 1 | 0, tmp$_5] & 255) << k;
            k = k + 8 | 0;
          }
          tindex = (this.tree_index + (b & InfCodes$Companion_getInstance().inflate_mask_0[j]) | 0) * 3 | 0;
          b = b >>> ensureNotNull(this.tree)[tindex + 1 | 0];
          k = k - ensureNotNull(this.tree)[tindex + 1 | 0] | 0;
          e = ensureNotNull(this.tree)[tindex];
          if (e === 0) {
            this.lit = ensureNotNull(this.tree)[tindex + 2 | 0];
            this.mode = InfCodes$Companion_getInstance().LIT_0;
            break lwhen;
          }
          if ((e & 16) !== 0) {
            this.get = e & 15;
            this.len = ensureNotNull(this.tree)[tindex + 2 | 0];
            this.mode = InfCodes$Companion_getInstance().LENEXT_0;
            break lwhen;
          }
          if ((e & 64) === 0) {
            this.need = e;
            this.tree_index = (tindex / 3 | 0) + ensureNotNull(this.tree)[tindex + 2 | 0] | 0;
            break lwhen;
          }
          if ((e & 32) !== 0) {
            this.mode = InfCodes$Companion_getInstance().WASH_0;
            break lwhen;
          }
          this.mode = InfCodes$Companion_getInstance().BADCODE_0;
          this.z_0.msg = 'invalid literal/length code';
          r_0 = InfCodes$Companion_getInstance().Z_DATA_ERROR_0;
          this.s_0.bitb = b;
          this.s_0.bitk = k;
          this.z_0.avail_in = n;
          tmp$_6 = this.z_0;
          tmp$_6.total_in = tmp$_6.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p;
          this.s_0.write = q;
          return this.s_0.inflate_flush_za3lpa$(r_0);
        }
         else if (tmp$ === InfCodes$Companion_getInstance().LENEXT_0) {
          j = this.get;
          while (k < j) {
            if (n !== 0)
              r_0 = InfCodes$Companion_getInstance().Z_OK_0;
            else {
              this.s_0.bitb = b;
              this.s_0.bitk = k;
              this.z_0.avail_in = n;
              tmp$_7 = this.z_0;
              tmp$_7.total_in = tmp$_7.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p;
              this.s_0.write = q;
              return this.s_0.inflate_flush_za3lpa$(r_0);
            }
            n = n - 1 | 0;
            b = b | (ensureNotNull(this.z_0.next_in)[tmp$_8 = p, p = tmp$_8 + 1 | 0, tmp$_8] & 255) << k;
            k = k + 8 | 0;
          }
          this.len = this.len + (b & InfCodes$Companion_getInstance().inflate_mask_0[j]) | 0;
          b = b >> j;
          k = k - j | 0;
          this.need = this.dbits;
          this.tree = this.dtree;
          this.tree_index = this.dtree_index;
          this.mode = InfCodes$Companion_getInstance().DIST_0;
          j = this.need;
          while (k < j) {
            if (n !== 0)
              r_0 = InfCodes$Companion_getInstance().Z_OK_0;
            else {
              this.s_0.bitb = b;
              this.s_0.bitk = k;
              this.z_0.avail_in = n;
              tmp$_9 = this.z_0;
              tmp$_9.total_in = tmp$_9.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p;
              this.s_0.write = q;
              return this.s_0.inflate_flush_za3lpa$(r_0);
            }
            n = n - 1 | 0;
            b = b | (ensureNotNull(this.z_0.next_in)[tmp$_10 = p, p = tmp$_10 + 1 | 0, tmp$_10] & 255) << k;
            k = k + 8 | 0;
          }
          tindex = (this.tree_index + (b & InfCodes$Companion_getInstance().inflate_mask_0[j]) | 0) * 3 | 0;
          b = b >> ensureNotNull(this.tree)[tindex + 1 | 0];
          k = k - ensureNotNull(this.tree)[tindex + 1 | 0] | 0;
          e = ensureNotNull(this.tree)[tindex];
          if ((e & 16) !== 0) {
            this.get = e & 15;
            this.dist = ensureNotNull(this.tree)[tindex + 2 | 0];
            this.mode = InfCodes$Companion_getInstance().DISTEXT_0;
            break lwhen;
          }
          if ((e & 64) === 0) {
            this.need = e;
            this.tree_index = (tindex / 3 | 0) + ensureNotNull(this.tree)[tindex + 2 | 0] | 0;
            break lwhen;
          }
          this.mode = InfCodes$Companion_getInstance().BADCODE_0;
          this.z_0.msg = 'invalid distance code';
          r_0 = InfCodes$Companion_getInstance().Z_DATA_ERROR_0;
          this.s_0.bitb = b;
          this.s_0.bitk = k;
          this.z_0.avail_in = n;
          tmp$_11 = this.z_0;
          tmp$_11.total_in = tmp$_11.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p;
          this.s_0.write = q;
          return this.s_0.inflate_flush_za3lpa$(r_0);
        }
         else if (tmp$ === InfCodes$Companion_getInstance().DIST_0) {
          j = this.need;
          while (k < j) {
            if (n !== 0)
              r_0 = InfCodes$Companion_getInstance().Z_OK_0;
            else {
              this.s_0.bitb = b;
              this.s_0.bitk = k;
              this.z_0.avail_in = n;
              tmp$_12 = this.z_0;
              tmp$_12.total_in = tmp$_12.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p;
              this.s_0.write = q;
              return this.s_0.inflate_flush_za3lpa$(r_0);
            }
            n = n - 1 | 0;
            b = b | (ensureNotNull(this.z_0.next_in)[tmp$_13 = p, p = tmp$_13 + 1 | 0, tmp$_13] & 255) << k;
            k = k + 8 | 0;
          }
          tindex = (this.tree_index + (b & InfCodes$Companion_getInstance().inflate_mask_0[j]) | 0) * 3 | 0;
          b = b >> ensureNotNull(this.tree)[tindex + 1 | 0];
          k = k - ensureNotNull(this.tree)[tindex + 1 | 0] | 0;
          e = ensureNotNull(this.tree)[tindex];
          if ((e & 16) !== 0) {
            this.get = e & 15;
            this.dist = ensureNotNull(this.tree)[tindex + 2 | 0];
            this.mode = InfCodes$Companion_getInstance().DISTEXT_0;
            break lwhen;
          }
          if ((e & 64) === 0) {
            this.need = e;
            this.tree_index = (tindex / 3 | 0) + ensureNotNull(this.tree)[tindex + 2 | 0] | 0;
            break lwhen;
          }
          this.mode = InfCodes$Companion_getInstance().BADCODE_0;
          this.z_0.msg = 'invalid distance code';
          r_0 = InfCodes$Companion_getInstance().Z_DATA_ERROR_0;
          this.s_0.bitb = b;
          this.s_0.bitk = k;
          this.z_0.avail_in = n;
          tmp$_14 = this.z_0;
          tmp$_14.total_in = tmp$_14.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p;
          this.s_0.write = q;
          return this.s_0.inflate_flush_za3lpa$(r_0);
        }
         else if (tmp$ === InfCodes$Companion_getInstance().DISTEXT_0) {
          j = this.get;
          while (k < j) {
            if (n !== 0)
              r_0 = InfCodes$Companion_getInstance().Z_OK_0;
            else {
              this.s_0.bitb = b;
              this.s_0.bitk = k;
              this.z_0.avail_in = n;
              tmp$_15 = this.z_0;
              tmp$_15.total_in = tmp$_15.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
              this.z_0.next_in_index = p;
              this.s_0.write = q;
              return this.s_0.inflate_flush_za3lpa$(r_0);
            }
            n = n - 1 | 0;
            b = b | (ensureNotNull(this.z_0.next_in)[tmp$_16 = p, p = tmp$_16 + 1 | 0, tmp$_16] & 255) << k;
            k = k + 8 | 0;
          }
          this.dist = this.dist + (b & InfCodes$Companion_getInstance().inflate_mask_0[j]) | 0;
          b = b >> j;
          k = k - j | 0;
          this.mode = InfCodes$Companion_getInstance().COPY_0;
          f = q - this.dist | 0;
          while (f < 0) {
            f = f + this.s_0.end | 0;
          }
          while (this.len !== 0) {
            if (m === 0) {
              if (q === this.s_0.end && this.s_0.read !== 0) {
                q = 0;
                m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
              }
              if (m === 0) {
                this.s_0.write = q;
                r_0 = this.s_0.inflate_flush_za3lpa$(r_0);
                q = this.s_0.write;
                m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
                if (q === this.s_0.end && this.s_0.read !== 0) {
                  q = 0;
                  m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
                }
                if (m === 0) {
                  this.s_0.bitb = b;
                  this.s_0.bitk = k;
                  this.z_0.avail_in = n;
                  tmp$_17 = this.z_0;
                  tmp$_17.total_in = tmp$_17.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
                  this.z_0.next_in_index = p;
                  this.s_0.write = q;
                  return this.s_0.inflate_flush_za3lpa$(r_0);
                }
              }
            }
            this.s_0.window[tmp$_19 = q, q = tmp$_19 + 1 | 0, tmp$_19] = this.s_0.window[tmp$_18 = f, f = tmp$_18 + 1 | 0, tmp$_18];
            m = m - 1 | 0;
            if (f === this.s_0.end)
              f = 0;
            this.len = this.len - 1 | 0;
          }
          this.mode = InfCodes$Companion_getInstance().START_0;
        }
         else if (tmp$ === InfCodes$Companion_getInstance().COPY_0) {
          f = q - this.dist | 0;
          while (f < 0) {
            f = f + this.s_0.end | 0;
          }
          while (this.len !== 0) {
            if (m === 0) {
              if (q === this.s_0.end && this.s_0.read !== 0) {
                q = 0;
                m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
              }
              if (m === 0) {
                this.s_0.write = q;
                r_0 = this.s_0.inflate_flush_za3lpa$(r_0);
                q = this.s_0.write;
                m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
                if (q === this.s_0.end && this.s_0.read !== 0) {
                  q = 0;
                  m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
                }
                if (m === 0) {
                  this.s_0.bitb = b;
                  this.s_0.bitk = k;
                  this.z_0.avail_in = n;
                  tmp$_20 = this.z_0;
                  tmp$_20.total_in = tmp$_20.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
                  this.z_0.next_in_index = p;
                  this.s_0.write = q;
                  return this.s_0.inflate_flush_za3lpa$(r_0);
                }
              }
            }
            this.s_0.window[tmp$_22 = q, q = tmp$_22 + 1 | 0, tmp$_22] = this.s_0.window[tmp$_21 = f, f = tmp$_21 + 1 | 0, tmp$_21];
            m = m - 1 | 0;
            if (f === this.s_0.end)
              f = 0;
            this.len = this.len - 1 | 0;
          }
          this.mode = InfCodes$Companion_getInstance().START_0;
        }
         else if (tmp$ === InfCodes$Companion_getInstance().LIT_0) {
          if (m === 0) {
            if (q === this.s_0.end && this.s_0.read !== 0) {
              q = 0;
              m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
            }
            if (m === 0) {
              this.s_0.write = q;
              r_0 = this.s_0.inflate_flush_za3lpa$(r_0);
              q = this.s_0.write;
              m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
              if (q === this.s_0.end && this.s_0.read !== 0) {
                q = 0;
                m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
              }
              if (m === 0) {
                this.s_0.bitb = b;
                this.s_0.bitk = k;
                this.z_0.avail_in = n;
                tmp$_23 = this.z_0;
                tmp$_23.total_in = tmp$_23.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
                this.z_0.next_in_index = p;
                this.s_0.write = q;
                return this.s_0.inflate_flush_za3lpa$(r_0);
              }
            }
          }
          r_0 = InfCodes$Companion_getInstance().Z_OK_0;
          this.s_0.window[tmp$_24 = q, q = tmp$_24 + 1 | 0, tmp$_24] = toByte(this.lit);
          m = m - 1 | 0;
          this.mode = InfCodes$Companion_getInstance().START_0;
        }
         else if (tmp$ === InfCodes$Companion_getInstance().WASH_0) {
          if (k > 7) {
            k = k - 8 | 0;
            n = n + 1 | 0;
            p = p - 1 | 0;
          }
          this.s_0.write = q;
          r_0 = this.s_0.inflate_flush_za3lpa$(r_0);
          q = this.s_0.write;
          m = q < this.s_0.read ? this.s_0.read - q - 1 | 0 : this.s_0.end - q | 0;
          if (this.s_0.read !== this.s_0.write) {
            this.s_0.bitb = b;
            this.s_0.bitk = k;
            this.z_0.avail_in = n;
            tmp$_25 = this.z_0;
            tmp$_25.total_in = tmp$_25.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
            this.z_0.next_in_index = p;
            this.s_0.write = q;
            return this.s_0.inflate_flush_za3lpa$(r_0);
          }
          this.mode = InfCodes$Companion_getInstance().END_0;
          r_0 = InfCodes$Companion_getInstance().Z_STREAM_END_0;
          this.s_0.bitb = b;
          this.s_0.bitk = k;
          this.z_0.avail_in = n;
          tmp$_26 = this.z_0;
          tmp$_26.total_in = tmp$_26.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p;
          this.s_0.write = q;
          return this.s_0.inflate_flush_za3lpa$(r_0);
        }
         else if (tmp$ === InfCodes$Companion_getInstance().END_0) {
          r_0 = InfCodes$Companion_getInstance().Z_STREAM_END_0;
          this.s_0.bitb = b;
          this.s_0.bitk = k;
          this.z_0.avail_in = n;
          tmp$_27 = this.z_0;
          tmp$_27.total_in = tmp$_27.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p;
          this.s_0.write = q;
          return this.s_0.inflate_flush_za3lpa$(r_0);
        }
         else if (tmp$ === InfCodes$Companion_getInstance().BADCODE_0) {
          r_0 = InfCodes$Companion_getInstance().Z_DATA_ERROR_0;
          this.s_0.bitb = b;
          this.s_0.bitk = k;
          this.z_0.avail_in = n;
          tmp$_28 = this.z_0;
          tmp$_28.total_in = tmp$_28.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p;
          this.s_0.write = q;
          return this.s_0.inflate_flush_za3lpa$(r_0);
        }
         else {
          r_0 = InfCodes$Companion_getInstance().Z_STREAM_ERROR_0;
          this.s_0.bitb = b;
          this.s_0.bitk = k;
          this.z_0.avail_in = n;
          tmp$_29 = this.z_0;
          tmp$_29.total_in = tmp$_29.total_in.add(Kotlin.Long.fromInt(p - this.z_0.next_in_index | 0));
          this.z_0.next_in_index = p;
          this.s_0.write = q;
          return this.s_0.inflate_flush_za3lpa$(r_0);
        }
      }
       while (false);
    }
  };
  InfCodes.prototype.free_llvks4$ = function (z) {
  };
  InfCodes.prototype.inflate_fast_5wfojj$ = function (bl, bd, tl, tl_index, td, td_index, s, z) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var t;
    var tp;
    var tp_index;
    var e;
    var b;
    var k;
    var p;
    var n;
    var q;
    var m;
    var ml;
    var md;
    var c;
    var d;
    var r;
    var tp_index_t_3;
    p = z.next_in_index;
    n = z.avail_in;
    b = s.bitb;
    k = s.bitk;
    q = s.write;
    m = q < s.read ? s.read - q - 1 | 0 : s.end - q | 0;
    ml = InfCodes$Companion_getInstance().inflate_mask_0[bl];
    md = InfCodes$Companion_getInstance().inflate_mask_0[bd];
    do {
      while (k < 20) {
        n = n - 1 | 0;
        b = b | (ensureNotNull(z.next_in)[tmp$ = p, p = tmp$ + 1 | 0, tmp$] & 255) << k;
        k = k + 8 | 0;
      }
      t = b & ml;
      tp = tl;
      tp_index = tl_index;
      tp_index_t_3 = (tp_index + t | 0) * 3 | 0;
      e = tp[tp_index_t_3];
      if (e === 0) {
        b = b >> tp[tp_index_t_3 + 1 | 0];
        k = k - tp[tp_index_t_3 + 1 | 0] | 0;
        s.window[tmp$_0 = q, q = tmp$_0 + 1 | 0, tmp$_0] = toByte(tp[tp_index_t_3 + 2 | 0]);
        m = m - 1 | 0;
        continue;
      }
      do {
        b = b >> tp[tp_index_t_3 + 1 | 0];
        k = k - tp[tp_index_t_3 + 1 | 0] | 0;
        if ((e & 16) !== 0) {
          e = e & 15;
          c = tp[tp_index_t_3 + 2 | 0] + (b & InfCodes$Companion_getInstance().inflate_mask_0[e]) | 0;
          b = b >> e;
          k = k - e | 0;
          while (k < 15) {
            n = n - 1 | 0;
            b = b | (ensureNotNull(z.next_in)[tmp$_1 = p, p = tmp$_1 + 1 | 0, tmp$_1] & 255) << k;
            k = k + 8 | 0;
          }
          t = b & md;
          tp = td;
          tp_index = td_index;
          tp_index_t_3 = (tp_index + t | 0) * 3 | 0;
          e = tp[tp_index_t_3];
          do {
            b = b >> tp[tp_index_t_3 + 1 | 0];
            k = k - tp[tp_index_t_3 + 1 | 0] | 0;
            if ((e & 16) !== 0) {
              e = e & 15;
              while (k < e) {
                n = n - 1 | 0;
                b = b | (ensureNotNull(z.next_in)[tmp$_2 = p, p = tmp$_2 + 1 | 0, tmp$_2] & 255) << k;
                k = k + 8 | 0;
              }
              d = tp[tp_index_t_3 + 2 | 0] + (b & InfCodes$Companion_getInstance().inflate_mask_0[e]) | 0;
              b = b >> e;
              k = k - e | 0;
              m = m - c | 0;
              if (q >= d) {
                r = q - d | 0;
                if ((q - r | 0) > 0 && 2 > (q - r | 0)) {
                  s.window[tmp$_4 = q, q = tmp$_4 + 1 | 0, tmp$_4] = s.window[tmp$_3 = r, r = tmp$_3 + 1 | 0, tmp$_3];
                  s.window[tmp$_6 = q, q = tmp$_6 + 1 | 0, tmp$_6] = s.window[tmp$_5 = r, r = tmp$_5 + 1 | 0, tmp$_5];
                  c = c - 2 | 0;
                }
                 else {
                  var src = s.window;
                  var srcPos = r;
                  var dst = s.window;
                  var dstPos = q;
                  dst.set(src.subarray(srcPos, srcPos + 2 | 0), dstPos);
                  q = q + 2 | 0;
                  r = r + 2 | 0;
                  c = c - 2 | 0;
                }
              }
               else {
                r = q - d | 0;
                do {
                  r = r + s.end | 0;
                }
                 while (r < 0);
                e = s.end - r | 0;
                if (c > e) {
                  c = c - e | 0;
                  if ((q - r | 0) > 0 && e > (q - r | 0)) {
                    do {
                      s.window[tmp$_8 = q, q = tmp$_8 + 1 | 0, tmp$_8] = s.window[tmp$_7 = r, r = tmp$_7 + 1 | 0, tmp$_7];
                    }
                     while ((e = e - 1 | 0, e) !== 0);
                  }
                   else {
                    var src_0 = s.window;
                    var srcPos_0 = r;
                    var dst_0 = s.window;
                    var dstPos_0 = q;
                    dst_0.set(src_0.subarray(srcPos_0, srcPos_0 + e | 0), dstPos_0);
                    q = q + e | 0;
                    r = r + e | 0;
                    e = 0;
                  }
                  r = 0;
                }
              }
              if ((q - r | 0) > 0 && c > (q - r | 0)) {
                do {
                  s.window[tmp$_10 = q, q = tmp$_10 + 1 | 0, tmp$_10] = s.window[tmp$_9 = r, r = tmp$_9 + 1 | 0, tmp$_9];
                }
                 while ((c = c - 1 | 0, c) !== 0);
              }
               else {
                var src_1 = s.window;
                var srcPos_1 = r;
                var dst_1 = s.window;
                var dstPos_1 = q;
                dst_1.set(src_1.subarray(srcPos_1, srcPos_1 + c | 0), dstPos_1);
                q = q + c | 0;
                r = r + c | 0;
                c = 0;
              }
              break;
            }
             else if ((e & 64) === 0) {
              t = t + tp[tp_index_t_3 + 2 | 0] | 0;
              t = t + (b & InfCodes$Companion_getInstance().inflate_mask_0[e]) | 0;
              tp_index_t_3 = (tp_index + t | 0) * 3 | 0;
              e = tp[tp_index_t_3];
            }
             else {
              z.msg = 'invalid distance code';
              c = z.avail_in - n | 0;
              c = k >> 3 < c ? k >> 3 : c;
              n = n + c | 0;
              p = p - c | 0;
              k = k - (c << 3) | 0;
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in = z.total_in.add(Kotlin.Long.fromInt(p - z.next_in_index | 0));
              z.next_in_index = p;
              s.write = q;
              return InfCodes$Companion_getInstance().Z_DATA_ERROR_0;
            }
          }
           while (true);
          break;
        }
        if ((e & 64) === 0) {
          t = t + tp[tp_index_t_3 + 2 | 0] | 0;
          t = t + (b & InfCodes$Companion_getInstance().inflate_mask_0[e]) | 0;
          tp_index_t_3 = (tp_index + t | 0) * 3 | 0;
          e = tp[tp_index_t_3];
          if (e === 0) {
            b = b >> tp[tp_index_t_3 + 1 | 0];
            k = k - tp[tp_index_t_3 + 1 | 0] | 0;
            s.window[tmp$_11 = q, q = tmp$_11 + 1 | 0, tmp$_11] = toByte(tp[tp_index_t_3 + 2 | 0]);
            m = m - 1 | 0;
            break;
          }
        }
         else if ((e & 32) !== 0) {
          c = z.avail_in - n | 0;
          c = k >> 3 < c ? k >> 3 : c;
          n = n + c | 0;
          p = p - c | 0;
          k = k - (c << 3) | 0;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in = z.total_in.add(Kotlin.Long.fromInt(p - z.next_in_index | 0));
          z.next_in_index = p;
          s.write = q;
          return InfCodes$Companion_getInstance().Z_STREAM_END_0;
        }
         else {
          z.msg = 'invalid literal/length code';
          c = z.avail_in - n | 0;
          c = k >> 3 < c ? k >> 3 : c;
          n = n + c | 0;
          p = p - c | 0;
          k = k - (c << 3) | 0;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in = z.total_in.add(Kotlin.Long.fromInt(p - z.next_in_index | 0));
          z.next_in_index = p;
          s.write = q;
          return InfCodes$Companion_getInstance().Z_DATA_ERROR_0;
        }
      }
       while (true);
    }
     while (m >= 258 && n >= 10);
    c = z.avail_in - n | 0;
    c = k >> 3 < c ? k >> 3 : c;
    n = n + c | 0;
    p = p - c | 0;
    k = k - (c << 3) | 0;
    s.bitb = b;
    s.bitk = k;
    z.avail_in = n;
    z.total_in = z.total_in.add(Kotlin.Long.fromInt(p - z.next_in_index | 0));
    z.next_in_index = p;
    s.write = q;
    return InfCodes$Companion_getInstance().Z_OK_0;
  };
  function InfCodes$Companion() {
    InfCodes$Companion_instance = this;
    this.inflate_mask_0 = new Int32Array([0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
    this.Z_OK_0 = 0;
    this.Z_STREAM_END_0 = 1;
    this.Z_NEED_DICT_0 = 2;
    this.Z_ERRNO_0 = -1;
    this.Z_STREAM_ERROR_0 = -2;
    this.Z_DATA_ERROR_0 = -3;
    this.Z_MEM_ERROR_0 = -4;
    this.Z_BUF_ERROR_0 = -5;
    this.Z_VERSION_ERROR_0 = -6;
    this.START_0 = 0;
    this.LEN_0 = 1;
    this.LENEXT_0 = 2;
    this.DIST_0 = 3;
    this.DISTEXT_0 = 4;
    this.COPY_0 = 5;
    this.LIT_0 = 6;
    this.WASH_0 = 7;
    this.END_0 = 8;
    this.BADCODE_0 = 9;
  }
  InfCodes$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InfCodes$Companion_instance = null;
  function InfCodes$Companion_getInstance() {
    if (InfCodes$Companion_instance === null) {
      new InfCodes$Companion();
    }
    return InfCodes$Companion_instance;
  }
  InfCodes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InfCodes',
    interfaces: []
  };
  function InfTree() {
    InfTree$Companion_getInstance();
    this.hn = null;
    this.v = null;
    this.c = null;
    this.r = null;
    this.u = null;
    this.x = null;
  }
  InfTree.prototype.huft_build_0 = function (b, bindex, n, s, d, e, t, m, hp, hn, v) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var n_0 = n;
    var a;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var mask;
    var p;
    var q;
    var w;
    var xp;
    var y;
    var z;
    p = 0;
    i = n_0;
    do {
      var tmp$_8, tmp$_9;
      tmp$_8 = ensureNotNull(this.c);
      tmp$_9 = b[bindex + p | 0];
      tmp$_8[tmp$_9] = tmp$_8[tmp$_9] + 1 | 0;
      p = p + 1 | 0;
      i = i - 1 | 0;
    }
     while (i !== 0);
    if (ensureNotNull(this.c)[0] === n_0) {
      t[0] = -1;
      m[0] = 0;
      return InfTree$Companion_getInstance().Z_OK_0;
    }
    l = m[0];
    j = 1;
    while (j <= InfTree$Companion_getInstance().BMAX && ensureNotNull(this.c)[j] === 0) {
      j = j + 1 | 0;
    }
    k = j;
    if (l < j) {
      l = j;
    }
    i = InfTree$Companion_getInstance().BMAX;
    while (i !== 0 && ensureNotNull(this.c)[i] === 0) {
      i = i - 1 | 0;
    }
    g = i;
    if (l > i) {
      l = i;
    }
    m[0] = l;
    y = 1 << j;
    while (j < i) {
      y = y - ensureNotNull(this.c)[j] | 0;
      if (y < 0) {
        return InfTree$Companion_getInstance().Z_DATA_ERROR_0;
      }
      j = j + 1 | 0;
      y = y << 1;
    }
    y = y - ensureNotNull(this.c)[i] | 0;
    if (y < 0) {
      return InfTree$Companion_getInstance().Z_DATA_ERROR_0;
    }
    tmp$ = ensureNotNull(this.c);
    tmp$[i] = tmp$[i] + y | 0;
    j = 0;
    ensureNotNull(this.x)[1] = j;
    p = 1;
    xp = 2;
    while ((i = i - 1 | 0, i) !== 0) {
      j = j + ensureNotNull(this.c)[p] | 0;
      ensureNotNull(this.x)[xp] = j;
      xp = xp + 1 | 0;
      p = p + 1 | 0;
    }
    i = 0;
    p = 0;
    do {
      j = b[bindex + p | 0];
      if (j !== 0) {
        tmp$_1 = ensureNotNull(v);
        var tmp$_10;
        tmp$_10 = ensureNotNull(this.x);
        tmp$_0 = tmp$_10[j];
        tmp$_10[j] = tmp$_0 + 1 | 0;
        tmp$_1[tmp$_0] = i;
      }
      p = p + 1 | 0;
    }
     while ((i = i + 1 | 0, i) < n_0);
    n_0 = ensureNotNull(this.x)[g];
    i = 0;
    ensureNotNull(this.x)[0] = i;
    p = 0;
    h = -1;
    w = -l;
    ensureNotNull(this.u)[0] = 0;
    q = 0;
    z = 0;
    while (k <= g) {
      a = ensureNotNull(this.c)[k];
      while ((tmp$_2 = a, a = tmp$_2 - 1 | 0, tmp$_2) !== 0) {
        while (k > (w + l | 0)) {
          h = h + 1 | 0;
          w = w + l | 0;
          z = g - w | 0;
          z = z > l ? l : z;
          j = k - w | 0;
          f = 1 << j;
          if (f > (a + 1 | 0)) {
            f = f - (a + 1) | 0;
            xp = k;
            if (j < z) {
              while ((j = j + 1 | 0, j) < z) {
                f = f << 1;
                if (f <= ensureNotNull(this.c)[xp = xp + 1 | 0, xp])
                  break;
                f = f - ensureNotNull(this.c)[xp] | 0;
              }
            }
          }
          z = 1 << j;
          if ((hn[0] + z | 0) > InfTree$Companion_getInstance().MANY_0) {
            return InfTree$Companion_getInstance().Z_DATA_ERROR_0;
          }
          q = hn[0];
          ensureNotNull(this.u)[h] = q;
          hn[0] = hn[0] + z | 0;
          if (h !== 0) {
            ensureNotNull(this.x)[h] = i;
            ensureNotNull(this.r)[0] = toByte(j);
            ensureNotNull(this.r)[1] = toByte(l);
            j = i >>> w - l;
            ensureNotNull(this.r)[2] = q - ensureNotNull(this.u)[h - 1 | 0] - j | 0;
            var src = ensureNotNull(this.r);
            var dstPos = (ensureNotNull(this.u)[h - 1 | 0] + j | 0) * 3 | 0;
            hp.set(src.subarray(0, 0 + 3 | 0), dstPos);
          }
           else {
            t[0] = q;
          }
        }
        ensureNotNull(this.r)[1] = toByte(k - w | 0);
        if (p >= n_0) {
          ensureNotNull(this.r)[0] = 128 + 64 | 0;
        }
         else if (ensureNotNull(v)[p] < s) {
          ensureNotNull(this.r)[0] = toByte(v[p] < 256 ? 0 : 32 + 64 | 0);
          tmp$_4 = (tmp$_3 = p, p = tmp$_3 + 1 | 0, tmp$_3);
          ensureNotNull(this.r)[2] = v[tmp$_4];
        }
         else {
          ensureNotNull(this.r)[0] = toByte(ensureNotNull(e)[v[p] - s | 0] + 16 + 64 | 0);
          tmp$_7 = ensureNotNull(d);
          tmp$_6 = v[tmp$_5 = p, p = tmp$_5 + 1 | 0, tmp$_5] - s | 0;
          ensureNotNull(this.r)[2] = tmp$_7[tmp$_6];
        }
        f = 1 << k - w;
        j = i >>> w;
        while (j < z) {
          var src_0 = ensureNotNull(this.r);
          var dstPos_0 = (q + j | 0) * 3 | 0;
          hp.set(src_0.subarray(0, 0 + 3 | 0), dstPos_0);
          j = j + f | 0;
        }
        j = 1 << k - 1;
        while ((i & j) !== 0) {
          i = i ^ j;
          j = j >>> 1;
        }
        i = i ^ j;
        mask = (1 << w) - 1 | 0;
        while ((i & mask) !== ensureNotNull(this.x)[h]) {
          h = h - 1 | 0;
          w = w - l | 0;
          mask = (1 << w) - 1 | 0;
        }
      }
      k = k + 1 | 0;
    }
    return y !== 0 && g !== 1 ? InfTree$Companion_getInstance().Z_BUF_ERROR_0 : InfTree$Companion_getInstance().Z_OK_0;
  };
  InfTree.prototype.inflate_trees_bits_k5dz4w$ = function (c, bb, tb, hp, z) {
    var result;
    this.initWorkArea_0(19);
    ensureNotNull(this.hn)[0] = 0;
    result = this.huft_build_0(c, 0, 19, 19, null, null, tb, bb, hp, ensureNotNull(this.hn), this.v);
    if (result === InfTree$Companion_getInstance().Z_DATA_ERROR_0) {
      z.msg = 'oversubscribed dynamic bit lengths tree';
    }
     else if (result === InfTree$Companion_getInstance().Z_BUF_ERROR_0 || bb[0] === 0) {
      z.msg = 'incomplete dynamic bit lengths tree';
      result = InfTree$Companion_getInstance().Z_DATA_ERROR_0;
    }
    return result;
  };
  InfTree.prototype.inflate_trees_dynamic_1d1xfa$ = function (nl, nd, c, bl, bd, tl, td, hp, z) {
    var result;
    this.initWorkArea_0(288);
    ensureNotNull(this.hn)[0] = 0;
    result = this.huft_build_0(c, 0, nl, 257, InfTree$Companion_getInstance().cplens, InfTree$Companion_getInstance().cplext, tl, bl, hp, ensureNotNull(this.hn), this.v);
    if (result !== InfTree$Companion_getInstance().Z_OK_0 || bl[0] === 0) {
      if (result === InfTree$Companion_getInstance().Z_DATA_ERROR_0) {
        z.msg = 'oversubscribed literal/length tree';
      }
       else if (result !== InfTree$Companion_getInstance().Z_MEM_ERROR_0) {
        z.msg = 'incomplete literal/length tree';
        result = InfTree$Companion_getInstance().Z_DATA_ERROR_0;
      }
      return result;
    }
    this.initWorkArea_0(288);
    result = this.huft_build_0(c, nl, nd, 0, InfTree$Companion_getInstance().cpdist, InfTree$Companion_getInstance().cpdext, td, bd, hp, ensureNotNull(this.hn), this.v);
    if (result !== InfTree$Companion_getInstance().Z_OK_0 || (bd[0] === 0 && nl > 257)) {
      if (result === InfTree$Companion_getInstance().Z_DATA_ERROR_0) {
        z.msg = 'oversubscribed distance tree';
      }
       else if (result === InfTree$Companion_getInstance().Z_BUF_ERROR_0) {
        z.msg = 'incomplete distance tree';
        result = InfTree$Companion_getInstance().Z_DATA_ERROR_0;
      }
       else if (result !== InfTree$Companion_getInstance().Z_MEM_ERROR_0) {
        z.msg = 'empty distance tree with lengths';
        result = InfTree$Companion_getInstance().Z_DATA_ERROR_0;
      }
      return result;
    }
    return InfTree$Companion_getInstance().Z_OK_0;
  };
  InfTree.prototype.initWorkArea_0 = function (vsize) {
    var tmp$;
    if (this.hn == null) {
      this.hn = new Int32Array(1);
      this.v = new Int32Array(vsize);
      this.c = new Int32Array(InfTree$Companion_getInstance().BMAX + 1 | 0);
      this.r = new Int32Array(3);
      this.u = new Int32Array(InfTree$Companion_getInstance().BMAX);
      this.x = new Int32Array(InfTree$Companion_getInstance().BMAX + 1 | 0);
    }
    if (ensureNotNull(this.v).length < vsize) {
      this.v = new Int32Array(vsize);
    }
    for (var i = 0; i < vsize; i++) {
      ensureNotNull(this.v)[i] = 0;
    }
    tmp$ = InfTree$Companion_getInstance().BMAX + 1 | 0;
    for (var i_0 = 0; i_0 < tmp$; i_0++) {
      ensureNotNull(this.c)[i_0] = 0;
    }
    for (var i_1 = 0; i_1 <= 2; i_1++) {
      ensureNotNull(this.r)[i_1] = 0;
    }
    var src = ensureNotNull(this.c);
    ensureNotNull(this.u).set(src.subarray(0, 0 + InfTree$Companion_getInstance().BMAX | 0), 0);
    var src_0 = ensureNotNull(this.c);
    ensureNotNull(this.x).set(src_0.subarray(0, 0 + (InfTree$Companion_getInstance().BMAX + 1 | 0) | 0), 0);
  };
  function InfTree$Companion() {
    InfTree$Companion_instance = this;
    this.MANY_0 = 1440;
    this.Z_OK_0 = 0;
    this.Z_STREAM_END_0 = 1;
    this.Z_NEED_DICT_0 = 2;
    this.Z_ERRNO_0 = -1;
    this.Z_STREAM_ERROR_0 = -2;
    this.Z_DATA_ERROR_0 = -3;
    this.Z_MEM_ERROR_0 = -4;
    this.Z_BUF_ERROR_0 = -5;
    this.Z_VERSION_ERROR_0 = -6;
    this.fixed_bl = 9;
    this.fixed_bd = 5;
    this.fixed_tl = new Int32Array([96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255]);
    this.fixed_td = new Int32Array([80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577]);
    this.cplens = new Int32Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    this.cplext = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112]);
    this.cpdist = new Int32Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]);
    this.cpdext = new Int32Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    this.BMAX = 15;
  }
  InfTree$Companion.prototype.inflate_trees_fixed_op7js0$ = function (bl, bd, tl, td, z) {
    bl[0] = this.fixed_bl;
    bd[0] = this.fixed_bd;
    tl[0] = this.fixed_tl;
    td[0] = this.fixed_td;
    return this.Z_OK_0;
  };
  InfTree$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InfTree$Companion_instance = null;
  function InfTree$Companion_getInstance() {
    if (InfTree$Companion_instance === null) {
      new InfTree$Companion();
    }
    return InfTree$Companion_instance;
  }
  InfTree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InfTree',
    interfaces: []
  };
  function Inflate(z) {
    Inflate$Companion_getInstance();
    this.z_0 = z;
    this.mode = 0;
    this.method = 0;
    this.was = -1;
    this.need = 0;
    this.marker = 0;
    this.wrap = 0;
    this.wbits = 0;
    this.blocks = null;
    this.flags_0 = 0;
    this.need_bytes_0 = -1;
    this.crcbuf_0 = new Int8Array(4);
    this.gzipHeader = null;
    this.tmp_string_0 = null;
  }
  Inflate.prototype.inflateReset = function () {
    if (this.z_0 == null)
      return Inflate$Companion_getInstance().Z_STREAM_ERROR_0;
    this.z_0.total_out = Kotlin.Long.ZERO;
    this.z_0.total_in = this.z_0.total_out;
    this.z_0.msg = null;
    this.mode = Inflate$Companion_getInstance().HEAD_0;
    this.need_bytes_0 = -1;
    ensureNotNull(this.blocks).reset();
    return Inflate$Companion_getInstance().Z_OK_0;
  };
  Inflate.prototype.inflateEnd = function () {
    if (this.blocks != null) {
      ensureNotNull(this.blocks).free();
    }
    return Inflate$Companion_getInstance().Z_OK_0;
  };
  Inflate.prototype.inflateInit_za3lpa$ = function (w) {
    var w_0 = w;
    this.z_0.msg = null;
    this.blocks = null;
    this.wrap = 0;
    if (w_0 < 0) {
      w_0 = -w_0;
    }
     else if ((w_0 & Inflate$Companion_getInstance().INFLATE_ANY) !== 0) {
      this.wrap = 4;
      w_0 = w_0 & ~Inflate$Companion_getInstance().INFLATE_ANY;
      if (w_0 < 48)
        w_0 = w_0 & 15;
    }
     else if ((w_0 & ~31) !== 0) {
      this.wrap = 4;
      w_0 = w_0 & 15;
    }
     else {
      this.wrap = (w_0 >> 4) + 1 | 0;
      if (w_0 < 48)
        w_0 = w_0 & 15;
    }
    if (w_0 < 8 || w_0 > 15) {
      this.inflateEnd();
      return Inflate$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    if (this.blocks != null && this.wbits !== w_0) {
      ensureNotNull(this.blocks).free();
      this.blocks = null;
    }
    this.wbits = w_0;
    this.blocks = new InfBlocks(this.z_0, 1 << w_0);
    this.inflateReset();
    return Inflate$Companion_getInstance().Z_OK_0;
  };
  Inflate.prototype.inflate_za3lpa$ = function (f) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var f_0 = f;
    var hold = 0;
    var r;
    var b = 0;
    if (this.z_0 == null || this.z_0.next_in == null) {
      return f_0 === Inflate$Companion_getInstance().Z_FINISH && this.mode === Inflate$Companion_getInstance().HEAD_0 ? Inflate$Companion_getInstance().Z_OK_0 : Inflate$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    f_0 = f_0 === Inflate$Companion_getInstance().Z_FINISH ? Inflate$Companion_getInstance().Z_BUF_ERROR_0 : Inflate$Companion_getInstance().Z_OK_0;
    r = Inflate$Companion_getInstance().Z_BUF_ERROR_0;
    while (true) {
      lwhen: do {
        tmp$ = this.mode;
        if (tmp$ === Inflate$Companion_getInstance().HEAD_0) {
          if (this.wrap === 0) {
            this.mode = Inflate$Companion_getInstance().BLOCKS_0;
            break lwhen;
          }
          try {
            r = this.readBytes_0(2, r, f_0);
          }
           catch (e) {
            if (Kotlin.isType(e, Inflate$Return)) {
              return e.r;
            }
             else
              throw e;
          }
          if ((this.wrap === 4 || (this.wrap & 2) !== 0) && this.need === 35615) {
            if (this.wrap === 4) {
              this.wrap = 2;
            }
            this.z_0.adler = new CRC32();
            this.checksum_0(2, this.need);
            if (this.gzipHeader == null)
              this.gzipHeader = new GZIPHeader();
            this.mode = Inflate$Companion_getInstance().FLAGS_0;
            break lwhen;
          }
          if ((this.wrap & 2) !== 0) {
            this.mode = Inflate$Companion_getInstance().BAD_0;
            this.z_0.msg = 'incorrect header check';
            break lwhen;
          }
          this.flags_0 = 0;
          this.method = this.need & 255;
          b = this.need >> 8 & 255;
          if (((this.wrap & 1) === 0 || ((this.method << 8) + b | 0) % 31 !== 0) && (this.method & 15) !== Inflate$Companion_getInstance().Z_DEFLATED_0) {
            if (this.wrap === 4) {
              tmp$_0 = this.z_0;
              tmp$_0.next_in_index = tmp$_0.next_in_index - 2 | 0;
              tmp$_1 = this.z_0;
              tmp$_1.avail_in = tmp$_1.avail_in + 2 | 0;
              tmp$_2 = this.z_0;
              tmp$_2.total_in = tmp$_2.total_in.subtract(Kotlin.Long.fromInt(2));
              this.wrap = 0;
              this.mode = Inflate$Companion_getInstance().BLOCKS_0;
              break lwhen;
            }
            this.mode = Inflate$Companion_getInstance().BAD_0;
            this.z_0.msg = 'incorrect header check';
            break lwhen;
          }
          if ((this.method & 15) !== Inflate$Companion_getInstance().Z_DEFLATED_0) {
            this.mode = Inflate$Companion_getInstance().BAD_0;
            this.z_0.msg = 'unknown compression method';
            break lwhen;
          }
          if (this.wrap === 4) {
            this.wrap = 1;
          }
          if (((this.method >> 4) + 8 | 0) > this.wbits) {
            this.mode = Inflate$Companion_getInstance().BAD_0;
            this.z_0.msg = 'invalid window size';
            break lwhen;
          }
          this.z_0.adler = new Adler32();
          if ((b & Inflate$Companion_getInstance().PRESET_DICT_0) === 0) {
            this.mode = Inflate$Companion_getInstance().BLOCKS_0;
            break lwhen;
          }
          this.mode = Inflate$Companion_getInstance().DICT4_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_11;
          tmp$_11 = this.z_0;
          tmp$_11.avail_in = tmp$_11.avail_in - 1 | 0;
          var tmp$_12;
          tmp$_12 = this.z_0;
          tmp$_12.total_in = tmp$_12.total_in.inc();
          tmp$_4 = ensureNotNull(this.z_0.next_in);
          var tmp$_13;
          tmp$_13 = this.z_0;
          tmp$_3 = tmp$_13.next_in_index;
          tmp$_13.next_in_index = tmp$_3 + 1 | 0;
          this.need = (tmp$_4[tmp$_3] & 255) << 24;
          this.mode = Inflate$Companion_getInstance().DICT3_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_14;
          tmp$_14 = this.z_0;
          tmp$_14.avail_in = tmp$_14.avail_in - 1 | 0;
          var tmp$_15;
          tmp$_15 = this.z_0;
          tmp$_15.total_in = tmp$_15.total_in.inc();
          var tmp$_16;
          tmp$_16 = this.need;
          var tmp$_17, tmp$_18;
          tmp$_18 = ensureNotNull(this.z_0.next_in);
          var tmp$_19;
          tmp$_19 = this.z_0;
          tmp$_17 = tmp$_19.next_in_index;
          tmp$_19.next_in_index = tmp$_17 + 1 | 0;
          this.need = tmp$_16 + ((tmp$_18[tmp$_17] & 255) << 16 & Kotlin.Long.fromInt(16711680).toInt()) | 0;
          this.mode = Inflate$Companion_getInstance().DICT2_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_20;
          tmp$_20 = this.z_0;
          tmp$_20.avail_in = tmp$_20.avail_in - 1 | 0;
          var tmp$_21;
          tmp$_21 = this.z_0;
          tmp$_21.total_in = tmp$_21.total_in.inc();
          var tmp$_22;
          tmp$_22 = this.need;
          var tmp$_23, tmp$_24;
          tmp$_24 = ensureNotNull(this.z_0.next_in);
          var tmp$_25;
          tmp$_25 = this.z_0;
          tmp$_23 = tmp$_25.next_in_index;
          tmp$_25.next_in_index = tmp$_23 + 1 | 0;
          this.need = tmp$_22 + ((tmp$_24[tmp$_23] & 255) << 8 & Kotlin.Long.fromInt(65280).toInt()) | 0;
          this.mode = Inflate$Companion_getInstance().DICT1_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_26;
          tmp$_26 = this.z_0;
          tmp$_26.avail_in = tmp$_26.avail_in - 1 | 0;
          var tmp$_27;
          tmp$_27 = this.z_0;
          tmp$_27.total_in = tmp$_27.total_in.inc();
          var tmp$_28;
          tmp$_28 = this.need;
          var tmp$_29, tmp$_30;
          tmp$_30 = ensureNotNull(this.z_0.next_in);
          var tmp$_31;
          tmp$_31 = this.z_0;
          tmp$_29 = tmp$_31.next_in_index;
          tmp$_31.next_in_index = tmp$_29 + 1 | 0;
          this.need = tmp$_28 + (tmp$_30[tmp$_29] & Kotlin.Long.fromInt(255).toInt()) | 0;
          this.z_0.adler.reset_za3lpa$(this.need);
          this.mode = Inflate$Companion_getInstance().DICT0_0;
          return Inflate$Companion_getInstance().Z_NEED_DICT_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().DICT4_0) {
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_32;
          tmp$_32 = this.z_0;
          tmp$_32.avail_in = tmp$_32.avail_in - 1 | 0;
          var tmp$_33;
          tmp$_33 = this.z_0;
          tmp$_33.total_in = tmp$_33.total_in.inc();
          tmp$_6 = ensureNotNull(this.z_0.next_in);
          var tmp$_34;
          tmp$_34 = this.z_0;
          tmp$_5 = tmp$_34.next_in_index;
          tmp$_34.next_in_index = tmp$_5 + 1 | 0;
          this.need = (tmp$_6[tmp$_5] & 255) << 24;
          this.mode = Inflate$Companion_getInstance().DICT3_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_35;
          tmp$_35 = this.z_0;
          tmp$_35.avail_in = tmp$_35.avail_in - 1 | 0;
          var tmp$_36;
          tmp$_36 = this.z_0;
          tmp$_36.total_in = tmp$_36.total_in.inc();
          var tmp$_37;
          tmp$_37 = this.need;
          var tmp$_38, tmp$_39;
          tmp$_39 = ensureNotNull(this.z_0.next_in);
          var tmp$_40;
          tmp$_40 = this.z_0;
          tmp$_38 = tmp$_40.next_in_index;
          tmp$_40.next_in_index = tmp$_38 + 1 | 0;
          this.need = tmp$_37 + ((tmp$_39[tmp$_38] & 255) << 16 & 16711680) | 0;
          this.mode = Inflate$Companion_getInstance().DICT2_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_41;
          tmp$_41 = this.z_0;
          tmp$_41.avail_in = tmp$_41.avail_in - 1 | 0;
          var tmp$_42;
          tmp$_42 = this.z_0;
          tmp$_42.total_in = tmp$_42.total_in.inc();
          var tmp$_43;
          tmp$_43 = this.need;
          var tmp$_44, tmp$_45;
          tmp$_45 = ensureNotNull(this.z_0.next_in);
          var tmp$_46;
          tmp$_46 = this.z_0;
          tmp$_44 = tmp$_46.next_in_index;
          tmp$_46.next_in_index = tmp$_44 + 1 | 0;
          this.need = tmp$_43 + ((tmp$_45[tmp$_44] & 255) << 8 & 65280) | 0;
          this.mode = Inflate$Companion_getInstance().DICT1_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_47;
          tmp$_47 = this.z_0;
          tmp$_47.avail_in = tmp$_47.avail_in - 1 | 0;
          var tmp$_48;
          tmp$_48 = this.z_0;
          tmp$_48.total_in = tmp$_48.total_in.inc();
          var tmp$_49;
          tmp$_49 = this.need;
          var tmp$_50, tmp$_51;
          tmp$_51 = ensureNotNull(this.z_0.next_in);
          var tmp$_52;
          tmp$_52 = this.z_0;
          tmp$_50 = tmp$_52.next_in_index;
          tmp$_52.next_in_index = tmp$_50 + 1 | 0;
          this.need = tmp$_49 + (tmp$_51[tmp$_50] & 255) | 0;
          this.z_0.adler.reset_za3lpa$(this.need);
          this.mode = Inflate$Companion_getInstance().DICT0_0;
          return Inflate$Companion_getInstance().Z_NEED_DICT_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().DICT3_0) {
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_53;
          tmp$_53 = this.z_0;
          tmp$_53.avail_in = tmp$_53.avail_in - 1 | 0;
          var tmp$_54;
          tmp$_54 = this.z_0;
          tmp$_54.total_in = tmp$_54.total_in.inc();
          var tmp$_55;
          tmp$_55 = this.need;
          var tmp$_56, tmp$_57;
          tmp$_57 = ensureNotNull(this.z_0.next_in);
          var tmp$_58;
          tmp$_58 = this.z_0;
          tmp$_56 = tmp$_58.next_in_index;
          tmp$_58.next_in_index = tmp$_56 + 1 | 0;
          this.need = tmp$_55 + ((tmp$_57[tmp$_56] & 255) << 16 & 16711680) | 0;
          this.mode = Inflate$Companion_getInstance().DICT2_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_59;
          tmp$_59 = this.z_0;
          tmp$_59.avail_in = tmp$_59.avail_in - 1 | 0;
          var tmp$_60;
          tmp$_60 = this.z_0;
          tmp$_60.total_in = tmp$_60.total_in.inc();
          var tmp$_61;
          tmp$_61 = this.need;
          var tmp$_62, tmp$_63;
          tmp$_63 = ensureNotNull(this.z_0.next_in);
          var tmp$_64;
          tmp$_64 = this.z_0;
          tmp$_62 = tmp$_64.next_in_index;
          tmp$_64.next_in_index = tmp$_62 + 1 | 0;
          this.need = tmp$_61 + ((tmp$_63[tmp$_62] & 255) << 8 & 65280) | 0;
          this.mode = Inflate$Companion_getInstance().DICT1_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_65;
          tmp$_65 = this.z_0;
          tmp$_65.avail_in = tmp$_65.avail_in - 1 | 0;
          var tmp$_66;
          tmp$_66 = this.z_0;
          tmp$_66.total_in = tmp$_66.total_in.inc();
          var tmp$_67;
          tmp$_67 = this.need;
          var tmp$_68, tmp$_69;
          tmp$_69 = ensureNotNull(this.z_0.next_in);
          var tmp$_70;
          tmp$_70 = this.z_0;
          tmp$_68 = tmp$_70.next_in_index;
          tmp$_70.next_in_index = tmp$_68 + 1 | 0;
          this.need = tmp$_67 + (tmp$_69[tmp$_68] & 255) | 0;
          this.z_0.adler.reset_za3lpa$(this.need);
          this.mode = Inflate$Companion_getInstance().DICT0_0;
          return Inflate$Companion_getInstance().Z_NEED_DICT_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().DICT2_0) {
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_71;
          tmp$_71 = this.z_0;
          tmp$_71.avail_in = tmp$_71.avail_in - 1 | 0;
          var tmp$_72;
          tmp$_72 = this.z_0;
          tmp$_72.total_in = tmp$_72.total_in.inc();
          var tmp$_73;
          tmp$_73 = this.need;
          var tmp$_74, tmp$_75;
          tmp$_75 = ensureNotNull(this.z_0.next_in);
          var tmp$_76;
          tmp$_76 = this.z_0;
          tmp$_74 = tmp$_76.next_in_index;
          tmp$_76.next_in_index = tmp$_74 + 1 | 0;
          this.need = tmp$_73 + ((tmp$_75[tmp$_74] & 255) << 8 & 65280) | 0;
          this.mode = Inflate$Companion_getInstance().DICT1_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_77;
          tmp$_77 = this.z_0;
          tmp$_77.avail_in = tmp$_77.avail_in - 1 | 0;
          var tmp$_78;
          tmp$_78 = this.z_0;
          tmp$_78.total_in = tmp$_78.total_in.inc();
          var tmp$_79;
          tmp$_79 = this.need;
          var tmp$_80, tmp$_81;
          tmp$_81 = ensureNotNull(this.z_0.next_in);
          var tmp$_82;
          tmp$_82 = this.z_0;
          tmp$_80 = tmp$_82.next_in_index;
          tmp$_82.next_in_index = tmp$_80 + 1 | 0;
          this.need = tmp$_79 + (tmp$_81[tmp$_80] & 255) | 0;
          this.z_0.adler.reset_za3lpa$(this.need);
          this.mode = Inflate$Companion_getInstance().DICT0_0;
          return Inflate$Companion_getInstance().Z_NEED_DICT_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().DICT1_0) {
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_83;
          tmp$_83 = this.z_0;
          tmp$_83.avail_in = tmp$_83.avail_in - 1 | 0;
          var tmp$_84;
          tmp$_84 = this.z_0;
          tmp$_84.total_in = tmp$_84.total_in.inc();
          var tmp$_85;
          tmp$_85 = this.need;
          var tmp$_86, tmp$_87;
          tmp$_87 = ensureNotNull(this.z_0.next_in);
          var tmp$_88;
          tmp$_88 = this.z_0;
          tmp$_86 = tmp$_88.next_in_index;
          tmp$_88.next_in_index = tmp$_86 + 1 | 0;
          this.need = tmp$_85 + (tmp$_87[tmp$_86] & 255) | 0;
          this.z_0.adler.reset_za3lpa$(this.need);
          this.mode = Inflate$Companion_getInstance().DICT0_0;
          return Inflate$Companion_getInstance().Z_NEED_DICT_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().DICT0_0) {
          this.mode = Inflate$Companion_getInstance().BAD_0;
          this.z_0.msg = 'need dictionary';
          this.marker = 0;
          return Inflate$Companion_getInstance().Z_STREAM_ERROR_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().BLOCKS_0) {
          r = ensureNotNull(this.blocks).proc_za3lpa$(r);
          if (r === Inflate$Companion_getInstance().Z_DATA_ERROR_0) {
            this.mode = Inflate$Companion_getInstance().BAD_0;
            this.marker = 0;
            break lwhen;
          }
          if (r === Inflate$Companion_getInstance().Z_OK_0) {
            r = f_0;
          }
          if (r !== Inflate$Companion_getInstance().Z_STREAM_END_0) {
            return r;
          }
          r = f_0;
          this.was = this.z_0.adler.value;
          ensureNotNull(this.blocks).reset();
          if (this.wrap === 0) {
            this.mode = Inflate$Companion_getInstance().DONE_0;
            break lwhen;
          }
          this.mode = Inflate$Companion_getInstance().CHECK4_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_89;
          tmp$_89 = this.z_0;
          tmp$_89.avail_in = tmp$_89.avail_in - 1 | 0;
          var tmp$_90;
          tmp$_90 = this.z_0;
          tmp$_90.total_in = tmp$_90.total_in.inc();
          tmp$_8 = ensureNotNull(this.z_0.next_in);
          var tmp$_91;
          tmp$_91 = this.z_0;
          tmp$_7 = tmp$_91.next_in_index;
          tmp$_91.next_in_index = tmp$_7 + 1 | 0;
          this.need = (tmp$_8[tmp$_7] & 255) << 24;
          this.mode = Inflate$Companion_getInstance().CHECK3_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_92;
          tmp$_92 = this.z_0;
          tmp$_92.avail_in = tmp$_92.avail_in - 1 | 0;
          var tmp$_93;
          tmp$_93 = this.z_0;
          tmp$_93.total_in = tmp$_93.total_in.inc();
          var tmp$_94;
          tmp$_94 = this.need;
          var tmp$_95, tmp$_96;
          tmp$_96 = ensureNotNull(this.z_0.next_in);
          var tmp$_97;
          tmp$_97 = this.z_0;
          tmp$_95 = tmp$_97.next_in_index;
          tmp$_97.next_in_index = tmp$_95 + 1 | 0;
          this.need = tmp$_94 + ((tmp$_96[tmp$_95] & 255) << 16) | 0;
          this.mode = Inflate$Companion_getInstance().CHECK2_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_98;
          tmp$_98 = this.z_0;
          tmp$_98.avail_in = tmp$_98.avail_in - 1 | 0;
          var tmp$_99;
          tmp$_99 = this.z_0;
          tmp$_99.total_in = tmp$_99.total_in.inc();
          var tmp$_100;
          tmp$_100 = this.need;
          var tmp$_101, tmp$_102;
          tmp$_102 = ensureNotNull(this.z_0.next_in);
          var tmp$_103;
          tmp$_103 = this.z_0;
          tmp$_101 = tmp$_103.next_in_index;
          tmp$_103.next_in_index = tmp$_101 + 1 | 0;
          this.need = tmp$_100 + ((tmp$_102[tmp$_101] & 255) << 8) | 0;
          this.mode = Inflate$Companion_getInstance().CHECK1_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_104;
          tmp$_104 = this.z_0;
          tmp$_104.avail_in = tmp$_104.avail_in - 1 | 0;
          var tmp$_105;
          tmp$_105 = this.z_0;
          tmp$_105.total_in = tmp$_105.total_in.inc();
          var tmp$_106;
          tmp$_106 = this.need;
          var tmp$_107, tmp$_108;
          tmp$_108 = ensureNotNull(this.z_0.next_in);
          var tmp$_109;
          tmp$_109 = this.z_0;
          tmp$_107 = tmp$_109.next_in_index;
          tmp$_109.next_in_index = tmp$_107 + 1 | 0;
          this.need = tmp$_106 + (tmp$_108[tmp$_107] & 255) | 0;
          if (this.flags_0 !== 0) {
            this.need = (this.need & -16777216) >> 24 | (this.need & 16711680) >> 8 | (this.need & 65280) << 8 | (this.need & 65535) << 24;
          }
          if (this.was !== this.need) {
            this.z_0.msg = 'incorrect data check';
          }
           else if (this.flags_0 !== 0 && this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).crc = Kotlin.Long.fromInt(this.need);
          }
          this.mode = Inflate$Companion_getInstance().LENGTH_0;
          if (this.wrap !== 0 && this.flags_0 !== 0) {
            try {
              r = this.readBytes_0(4, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
            if (this.need !== this.z_0.total_out.toInt()) {
              this.z_0.msg = 'incorrect length check';
              this.mode = Inflate$Companion_getInstance().BAD_0;
              break lwhen;
            }
            this.z_0.msg = null;
          }
           else {
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
          }
          this.mode = Inflate$Companion_getInstance().DONE_0;
          return Inflate$Companion_getInstance().Z_STREAM_END_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().CHECK4_0) {
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_110;
          tmp$_110 = this.z_0;
          tmp$_110.avail_in = tmp$_110.avail_in - 1 | 0;
          var tmp$_111;
          tmp$_111 = this.z_0;
          tmp$_111.total_in = tmp$_111.total_in.inc();
          tmp$_10 = ensureNotNull(this.z_0.next_in);
          var tmp$_112;
          tmp$_112 = this.z_0;
          tmp$_9 = tmp$_112.next_in_index;
          tmp$_112.next_in_index = tmp$_9 + 1 | 0;
          this.need = (tmp$_10[tmp$_9] & 255) << 24;
          this.mode = Inflate$Companion_getInstance().CHECK3_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_113;
          tmp$_113 = this.z_0;
          tmp$_113.avail_in = tmp$_113.avail_in - 1 | 0;
          var tmp$_114;
          tmp$_114 = this.z_0;
          tmp$_114.total_in = tmp$_114.total_in.inc();
          var tmp$_115;
          tmp$_115 = this.need;
          var tmp$_116, tmp$_117;
          tmp$_117 = ensureNotNull(this.z_0.next_in);
          var tmp$_118;
          tmp$_118 = this.z_0;
          tmp$_116 = tmp$_118.next_in_index;
          tmp$_118.next_in_index = tmp$_116 + 1 | 0;
          this.need = tmp$_115 + ((tmp$_117[tmp$_116] & 255) << 16) | 0;
          this.mode = Inflate$Companion_getInstance().CHECK2_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_119;
          tmp$_119 = this.z_0;
          tmp$_119.avail_in = tmp$_119.avail_in - 1 | 0;
          var tmp$_120;
          tmp$_120 = this.z_0;
          tmp$_120.total_in = tmp$_120.total_in.inc();
          var tmp$_121;
          tmp$_121 = this.need;
          var tmp$_122, tmp$_123;
          tmp$_123 = ensureNotNull(this.z_0.next_in);
          var tmp$_124;
          tmp$_124 = this.z_0;
          tmp$_122 = tmp$_124.next_in_index;
          tmp$_124.next_in_index = tmp$_122 + 1 | 0;
          this.need = tmp$_121 + ((tmp$_123[tmp$_122] & 255) << 8) | 0;
          this.mode = Inflate$Companion_getInstance().CHECK1_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_125;
          tmp$_125 = this.z_0;
          tmp$_125.avail_in = tmp$_125.avail_in - 1 | 0;
          var tmp$_126;
          tmp$_126 = this.z_0;
          tmp$_126.total_in = tmp$_126.total_in.inc();
          var tmp$_127;
          tmp$_127 = this.need;
          var tmp$_128, tmp$_129;
          tmp$_129 = ensureNotNull(this.z_0.next_in);
          var tmp$_130;
          tmp$_130 = this.z_0;
          tmp$_128 = tmp$_130.next_in_index;
          tmp$_130.next_in_index = tmp$_128 + 1 | 0;
          this.need = tmp$_127 + (tmp$_129[tmp$_128] & 255) | 0;
          if (this.flags_0 !== 0) {
            this.need = (this.need & -16777216) >> 24 | (this.need & 16711680) >> 8 | (this.need & 65280) << 8 | (this.need & 65535) << 24;
          }
          if (this.was !== this.need) {
            this.z_0.msg = 'incorrect data check';
          }
           else if (this.flags_0 !== 0 && this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).crc = Kotlin.Long.fromInt(this.need);
          }
          this.mode = Inflate$Companion_getInstance().LENGTH_0;
          if (this.wrap !== 0 && this.flags_0 !== 0) {
            try {
              r = this.readBytes_0(4, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
            if (this.need !== this.z_0.total_out.and(new Kotlin.Long(-1, 0)).toInt()) {
              this.z_0.msg = 'incorrect length check';
              this.mode = Inflate$Companion_getInstance().BAD_0;
              break lwhen;
            }
            this.z_0.msg = null;
          }
           else {
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
          }
          this.mode = Inflate$Companion_getInstance().DONE_0;
          return Inflate$Companion_getInstance().Z_STREAM_END_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().CHECK3_0) {
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_131;
          tmp$_131 = this.z_0;
          tmp$_131.avail_in = tmp$_131.avail_in - 1 | 0;
          var tmp$_132;
          tmp$_132 = this.z_0;
          tmp$_132.total_in = tmp$_132.total_in.inc();
          var tmp$_133;
          tmp$_133 = this.need;
          var tmp$_134, tmp$_135;
          tmp$_135 = ensureNotNull(this.z_0.next_in);
          var tmp$_136;
          tmp$_136 = this.z_0;
          tmp$_134 = tmp$_136.next_in_index;
          tmp$_136.next_in_index = tmp$_134 + 1 | 0;
          this.need = tmp$_133 + ((tmp$_135[tmp$_134] & 255) << 16) | 0;
          this.mode = Inflate$Companion_getInstance().CHECK2_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_137;
          tmp$_137 = this.z_0;
          tmp$_137.avail_in = tmp$_137.avail_in - 1 | 0;
          var tmp$_138;
          tmp$_138 = this.z_0;
          tmp$_138.total_in = tmp$_138.total_in.inc();
          var tmp$_139;
          tmp$_139 = this.need;
          var tmp$_140, tmp$_141;
          tmp$_141 = ensureNotNull(this.z_0.next_in);
          var tmp$_142;
          tmp$_142 = this.z_0;
          tmp$_140 = tmp$_142.next_in_index;
          tmp$_142.next_in_index = tmp$_140 + 1 | 0;
          this.need = tmp$_139 + ((tmp$_141[tmp$_140] & 255) << 8) | 0;
          this.mode = Inflate$Companion_getInstance().CHECK1_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_143;
          tmp$_143 = this.z_0;
          tmp$_143.avail_in = tmp$_143.avail_in - 1 | 0;
          var tmp$_144;
          tmp$_144 = this.z_0;
          tmp$_144.total_in = tmp$_144.total_in.inc();
          var tmp$_145;
          tmp$_145 = this.need;
          var tmp$_146, tmp$_147;
          tmp$_147 = ensureNotNull(this.z_0.next_in);
          var tmp$_148;
          tmp$_148 = this.z_0;
          tmp$_146 = tmp$_148.next_in_index;
          tmp$_148.next_in_index = tmp$_146 + 1 | 0;
          this.need = tmp$_145 + (tmp$_147[tmp$_146] & 255) | 0;
          if (this.flags_0 !== 0) {
            this.need = (this.need & -16777216) >> 24 | (this.need & 16711680) >> 8 | (this.need & 65280) << 8 | (this.need & 65535) << 24;
          }
          if (this.was !== this.need) {
            this.z_0.msg = 'incorrect data check';
          }
           else if (this.flags_0 !== 0 && this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).crc = Kotlin.Long.fromInt(this.need);
          }
          this.mode = Inflate$Companion_getInstance().LENGTH_0;
          if (this.wrap !== 0 && this.flags_0 !== 0) {
            try {
              r = this.readBytes_0(4, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
            if (this.need !== this.z_0.total_out.and(new Kotlin.Long(-1, 0)).toInt()) {
              this.z_0.msg = 'incorrect length check';
              this.mode = Inflate$Companion_getInstance().BAD_0;
              break lwhen;
            }
            this.z_0.msg = null;
          }
           else {
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
          }
          this.mode = Inflate$Companion_getInstance().DONE_0;
          return Inflate$Companion_getInstance().Z_STREAM_END_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().CHECK2_0) {
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_149;
          tmp$_149 = this.z_0;
          tmp$_149.avail_in = tmp$_149.avail_in - 1 | 0;
          var tmp$_150;
          tmp$_150 = this.z_0;
          tmp$_150.total_in = tmp$_150.total_in.inc();
          var tmp$_151;
          tmp$_151 = this.need;
          var tmp$_152, tmp$_153;
          tmp$_153 = ensureNotNull(this.z_0.next_in);
          var tmp$_154;
          tmp$_154 = this.z_0;
          tmp$_152 = tmp$_154.next_in_index;
          tmp$_154.next_in_index = tmp$_152 + 1 | 0;
          this.need = tmp$_151 + ((tmp$_153[tmp$_152] & 255) << 8) | 0;
          this.mode = Inflate$Companion_getInstance().CHECK1_0;
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_155;
          tmp$_155 = this.z_0;
          tmp$_155.avail_in = tmp$_155.avail_in - 1 | 0;
          var tmp$_156;
          tmp$_156 = this.z_0;
          tmp$_156.total_in = tmp$_156.total_in.inc();
          var tmp$_157;
          tmp$_157 = this.need;
          var tmp$_158, tmp$_159;
          tmp$_159 = ensureNotNull(this.z_0.next_in);
          var tmp$_160;
          tmp$_160 = this.z_0;
          tmp$_158 = tmp$_160.next_in_index;
          tmp$_160.next_in_index = tmp$_158 + 1 | 0;
          this.need = tmp$_157 + (tmp$_159[tmp$_158] & 255) | 0;
          if (this.flags_0 !== 0) {
            this.need = (this.need & -16777216) >> 24 | (this.need & 16711680) >> 8 | (this.need & 65280) << 8 | (this.need & 65535) << 24;
          }
          if (this.was !== this.need) {
            this.z_0.msg = 'incorrect data check';
          }
           else if (this.flags_0 !== 0 && this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).crc = Kotlin.Long.fromInt(this.need);
          }
          this.mode = Inflate$Companion_getInstance().LENGTH_0;
          if (this.wrap !== 0 && this.flags_0 !== 0) {
            try {
              r = this.readBytes_0(4, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
            if (this.need !== this.z_0.total_out.toInt()) {
              this.z_0.msg = 'incorrect length check';
              this.mode = Inflate$Companion_getInstance().BAD_0;
              break lwhen;
            }
            this.z_0.msg = null;
          }
           else {
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
          }
          this.mode = Inflate$Companion_getInstance().DONE_0;
          return Inflate$Companion_getInstance().Z_STREAM_END_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().CHECK1_0) {
          if (this.z_0.avail_in === 0)
            return r;
          r = f_0;
          var tmp$_161;
          tmp$_161 = this.z_0;
          tmp$_161.avail_in = tmp$_161.avail_in - 1 | 0;
          var tmp$_162;
          tmp$_162 = this.z_0;
          tmp$_162.total_in = tmp$_162.total_in.inc();
          var tmp$_163;
          tmp$_163 = this.need;
          var tmp$_164, tmp$_165;
          tmp$_165 = ensureNotNull(this.z_0.next_in);
          var tmp$_166;
          tmp$_166 = this.z_0;
          tmp$_164 = tmp$_166.next_in_index;
          tmp$_166.next_in_index = tmp$_164 + 1 | 0;
          this.need = tmp$_163 + (tmp$_165[tmp$_164] & 255) | 0;
          if (this.flags_0 !== 0) {
            this.need = (this.need & -16777216) >> 24 | (this.need & 16711680) >> 8 | (this.need & 65280) << 8 | (this.need & 65535) << 24;
          }
          if (this.was !== this.need) {
            this.z_0.msg = 'incorrect data check';
          }
           else if (this.flags_0 !== 0 && this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).crc = Kotlin.Long.fromInt(this.need);
          }
          this.mode = Inflate$Companion_getInstance().LENGTH_0;
          if (this.wrap !== 0 && this.flags_0 !== 0) {
            try {
              r = this.readBytes_0(4, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
            if (this.need !== this.z_0.total_out.toInt()) {
              this.z_0.msg = 'incorrect length check';
              this.mode = Inflate$Companion_getInstance().BAD_0;
              break lwhen;
            }
            this.z_0.msg = null;
          }
           else {
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
          }
          this.mode = Inflate$Companion_getInstance().DONE_0;
          return Inflate$Companion_getInstance().Z_STREAM_END_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().LENGTH_0) {
          if (this.wrap !== 0 && this.flags_0 !== 0) {
            try {
              r = this.readBytes_0(4, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
            if (this.need !== this.z_0.total_out.toInt()) {
              this.z_0.msg = 'incorrect length check';
              this.mode = Inflate$Companion_getInstance().BAD_0;
              break lwhen;
            }
            this.z_0.msg = null;
          }
           else {
            if (this.z_0.msg != null && equals_0(this.z_0.msg, 'incorrect data check')) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.marker = 5;
              break lwhen;
            }
          }
          this.mode = Inflate$Companion_getInstance().DONE_0;
          return Inflate$Companion_getInstance().Z_STREAM_END_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().DONE_0)
          return Inflate$Companion_getInstance().Z_STREAM_END_0;
        else if (tmp$ === Inflate$Companion_getInstance().BAD_0)
          return Inflate$Companion_getInstance().Z_DATA_ERROR_0;
        else if (tmp$ === Inflate$Companion_getInstance().FLAGS_0) {
          try {
            r = this.readBytes_0(2, r, f_0);
          }
           catch (e) {
            if (Kotlin.isType(e, Inflate$Return)) {
              return e.r;
            }
             else
              throw e;
          }
          this.flags_0 = this.need & 65535;
          if ((this.flags_0 & 255) !== Inflate$Companion_getInstance().Z_DEFLATED_0) {
            this.z_0.msg = 'unknown compression method';
            this.mode = Inflate$Companion_getInstance().BAD_0;
            break lwhen;
          }
          if ((this.flags_0 & 57344) !== 0) {
            this.z_0.msg = 'unknown header flags set';
            this.mode = Inflate$Companion_getInstance().BAD_0;
            break lwhen;
          }
          if ((this.flags_0 & 512) !== 0) {
            this.checksum_0(2, this.need);
          }
          this.mode = Inflate$Companion_getInstance().TIME_0;
          try {
            r = this.readBytes_0(4, r, f_0);
          }
           catch (e) {
            if (Kotlin.isType(e, Inflate$Return)) {
              return e.r;
            }
             else
              throw e;
          }
          if (this.gzipHeader != null)
            ensureNotNull(this.gzipHeader).time_8be2vx$ = Kotlin.Long.fromInt(this.need);
          if ((this.flags_0 & 512) !== 0) {
            this.checksum_0(4, this.need);
          }
          this.mode = Inflate$Companion_getInstance().OS_0;
          try {
            r = this.readBytes_0(2, r, f_0);
          }
           catch (e) {
            if (Kotlin.isType(e, Inflate$Return)) {
              return e.r;
            }
             else
              throw e;
          }
          if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).xflags_8be2vx$ = this.need & 255;
            ensureNotNull(this.gzipHeader).os_8be2vx$ = this.need >> 8 & 255;
          }
          if ((this.flags_0 & 512) !== 0) {
            this.checksum_0(2, this.need);
          }
          this.mode = Inflate$Companion_getInstance().EXLEN_0;
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).extra_8be2vx$ = new Int8Array(this.need & 65535);
            }
            if ((this.flags_0 & 512) !== 0) {
              this.checksum_0(2, this.need);
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().EXTRA_0;
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_1(r, f_0);
              if (this.gzipHeader != null) {
                var foo = ensureNotNull(this.tmp_string_0).toByteArray();
                this.tmp_string_0 = null;
                if (foo.length === ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).length) {
                  ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).set(foo.subarray(0, 0 + foo.length | 0), 0);
                }
                 else {
                  this.z_0.msg = 'bad extra field length';
                  this.mode = Inflate$Companion_getInstance().BAD_0;
                  break lwhen;
                }
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().NAME_0;
          if ((this.flags_0 & 2048) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).name_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).name_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().COMMENT_0;
          if ((this.flags_0 & 4096) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).comment_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).comment_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().HCRC_0;
          if ((this.flags_0 & 512) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).hcrc_8be2vx$ = this.need & 65535;
            }
            if (!equals(Kotlin.Long.fromInt(this.need), Kotlin.Long.fromInt(this.z_0.adler.value).and(Kotlin.Long.fromInt(65535)))) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.z_0.msg = 'header crc mismatch';
              this.marker = 5;
              break lwhen;
            }
          }
          this.z_0.adler = new CRC32();
          this.mode = Inflate$Companion_getInstance().BLOCKS_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().TIME_0) {
          try {
            r = this.readBytes_0(4, r, f_0);
          }
           catch (e) {
            if (Kotlin.isType(e, Inflate$Return)) {
              return e.r;
            }
             else
              throw e;
          }
          if (this.gzipHeader != null)
            ensureNotNull(this.gzipHeader).time_8be2vx$ = Kotlin.Long.fromInt(this.need);
          if ((this.flags_0 & 512) !== 0) {
            this.checksum_0(4, this.need);
          }
          this.mode = Inflate$Companion_getInstance().OS_0;
          try {
            r = this.readBytes_0(2, r, f_0);
          }
           catch (e) {
            if (Kotlin.isType(e, Inflate$Return)) {
              return e.r;
            }
             else
              throw e;
          }
          if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).xflags_8be2vx$ = this.need & 255;
            ensureNotNull(this.gzipHeader).os_8be2vx$ = this.need >> 8 & 255;
          }
          if ((this.flags_0 & 512) !== 0) {
            this.checksum_0(2, this.need);
          }
          this.mode = Inflate$Companion_getInstance().EXLEN_0;
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).extra_8be2vx$ = new Int8Array(this.need & 65535);
            }
            if ((this.flags_0 & 512) !== 0) {
              this.checksum_0(2, this.need);
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().EXTRA_0;
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_1(r, f_0);
              if (this.gzipHeader != null) {
                var foo_0 = ensureNotNull(this.tmp_string_0).toByteArray();
                this.tmp_string_0 = null;
                if (foo_0.length === ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).length) {
                  ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).set(foo_0.subarray(0, 0 + foo_0.length | 0), 0);
                }
                 else {
                  this.z_0.msg = 'bad extra field length';
                  this.mode = Inflate$Companion_getInstance().BAD_0;
                  break lwhen;
                }
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().NAME_0;
          if ((this.flags_0 & 2048) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).name_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).name_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().COMMENT_0;
          if ((this.flags_0 & 4096) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).comment_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).comment_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().HCRC_0;
          if ((this.flags_0 & 512) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).hcrc_8be2vx$ = this.need & 65535;
            }
            if (this.need !== (this.z_0.adler.value & 65535)) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.z_0.msg = 'header crc mismatch';
              this.marker = 5;
              break lwhen;
            }
          }
          this.z_0.adler = new CRC32();
          this.mode = Inflate$Companion_getInstance().BLOCKS_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().OS_0) {
          try {
            r = this.readBytes_0(2, r, f_0);
          }
           catch (e) {
            if (Kotlin.isType(e, Inflate$Return)) {
              return e.r;
            }
             else
              throw e;
          }
          if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).xflags_8be2vx$ = this.need & 255;
            ensureNotNull(this.gzipHeader).os_8be2vx$ = this.need >> 8 & 255;
          }
          if ((this.flags_0 & 512) !== 0) {
            this.checksum_0(2, this.need);
          }
          this.mode = Inflate$Companion_getInstance().EXLEN_0;
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).extra_8be2vx$ = new Int8Array(this.need & 65535);
            }
            if ((this.flags_0 & 512) !== 0) {
              this.checksum_0(2, this.need);
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().EXTRA_0;
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_1(r, f_0);
              if (this.gzipHeader != null) {
                var foo_1 = ensureNotNull(this.tmp_string_0).toByteArray();
                this.tmp_string_0 = null;
                if (foo_1.length === ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).length) {
                  ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).set(foo_1.subarray(0, 0 + foo_1.length | 0), 0);
                }
                 else {
                  this.z_0.msg = 'bad extra field length';
                  this.mode = Inflate$Companion_getInstance().BAD_0;
                  break lwhen;
                }
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().NAME_0;
          if ((this.flags_0 & 2048) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).name_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).name_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().COMMENT_0;
          if ((this.flags_0 & 4096) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).comment_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).comment_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().HCRC_0;
          if ((this.flags_0 & 512) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).hcrc_8be2vx$ = this.need & 65535;
            }
            if (this.need !== (this.z_0.adler.value & 65535)) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.z_0.msg = 'header crc mismatch';
              this.marker = 5;
              break lwhen;
            }
          }
          this.z_0.adler = new CRC32();
          this.mode = Inflate$Companion_getInstance().BLOCKS_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().EXLEN_0) {
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).extra_8be2vx$ = new Int8Array(this.need & 65535);
            }
            if ((this.flags_0 & 512) !== 0) {
              this.checksum_0(2, this.need);
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().EXTRA_0;
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_1(r, f_0);
              if (this.gzipHeader != null) {
                var foo_2 = ensureNotNull(this.tmp_string_0).toByteArray();
                this.tmp_string_0 = null;
                if (foo_2.length === ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).length) {
                  ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).set(foo_2.subarray(0, 0 + foo_2.length | 0), 0);
                }
                 else {
                  this.z_0.msg = 'bad extra field length';
                  this.mode = Inflate$Companion_getInstance().BAD_0;
                  break lwhen;
                }
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().NAME_0;
          if ((this.flags_0 & 2048) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).name_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).name_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().COMMENT_0;
          if ((this.flags_0 & 4096) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).comment_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).comment_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().HCRC_0;
          if ((this.flags_0 & 512) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).hcrc_8be2vx$ = this.need & 65535;
            }
            if (this.need !== (this.z_0.adler.value & 65535)) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.z_0.msg = 'header crc mismatch';
              this.marker = 5;
              break lwhen;
            }
          }
          this.z_0.adler = new CRC32();
          this.mode = Inflate$Companion_getInstance().BLOCKS_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().EXTRA_0) {
          if ((this.flags_0 & 1024) !== 0) {
            try {
              r = this.readBytes_1(r, f_0);
              if (this.gzipHeader != null) {
                var foo_3 = ensureNotNull(this.tmp_string_0).toByteArray();
                this.tmp_string_0 = null;
                if (foo_3.length === ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).length) {
                  ensureNotNull(ensureNotNull(this.gzipHeader).extra_8be2vx$).set(foo_3.subarray(0, 0 + foo_3.length | 0), 0);
                }
                 else {
                  this.z_0.msg = 'bad extra field length';
                  this.mode = Inflate$Companion_getInstance().BAD_0;
                  break lwhen;
                }
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).extra_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().NAME_0;
          if ((this.flags_0 & 2048) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).name_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).name_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().COMMENT_0;
          if ((this.flags_0 & 4096) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).comment_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).comment_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().HCRC_0;
          if ((this.flags_0 & 512) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).hcrc_8be2vx$ = this.need & 65535;
            }
            if (this.need !== (this.z_0.adler.value & 65535)) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.z_0.msg = 'header crc mismatch';
              this.marker = 5;
              break lwhen;
            }
          }
          this.z_0.adler = new CRC32();
          this.mode = Inflate$Companion_getInstance().BLOCKS_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().NAME_0) {
          if ((this.flags_0 & 2048) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).name_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).name_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().COMMENT_0;
          if ((this.flags_0 & 4096) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).comment_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).comment_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().HCRC_0;
          if ((this.flags_0 & 512) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).hcrc_8be2vx$ = this.need & 65535;
            }
            if (this.need !== (this.z_0.adler.value & 65535)) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.z_0.msg = 'header crc mismatch';
              this.marker = 5;
              break lwhen;
            }
          }
          this.z_0.adler = new CRC32();
          this.mode = Inflate$Companion_getInstance().BLOCKS_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().COMMENT_0) {
          if ((this.flags_0 & 4096) !== 0) {
            try {
              r = this.readString_0(r, f_0);
              if (this.gzipHeader != null) {
                ensureNotNull(this.gzipHeader).comment_8be2vx$ = ensureNotNull(this.tmp_string_0).toByteArray();
              }
              this.tmp_string_0 = null;
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
          }
           else if (this.gzipHeader != null) {
            ensureNotNull(this.gzipHeader).comment_8be2vx$ = null;
          }
          this.mode = Inflate$Companion_getInstance().HCRC_0;
          if ((this.flags_0 & 512) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).hcrc_8be2vx$ = this.need & 65535;
            }
            if (this.need !== (this.z_0.adler.value & 65535)) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.z_0.msg = 'header crc mismatch';
              this.marker = 5;
              break lwhen;
            }
          }
          this.z_0.adler = new CRC32();
          this.mode = Inflate$Companion_getInstance().BLOCKS_0;
        }
         else if (tmp$ === Inflate$Companion_getInstance().HCRC_0) {
          if ((this.flags_0 & 512) !== 0) {
            try {
              r = this.readBytes_0(2, r, f_0);
            }
             catch (e) {
              if (Kotlin.isType(e, Inflate$Return)) {
                return e.r;
              }
               else
                throw e;
            }
            if (this.gzipHeader != null) {
              ensureNotNull(this.gzipHeader).hcrc_8be2vx$ = this.need & 65535;
            }
            if (this.need !== (this.z_0.adler.value & 65535)) {
              this.mode = Inflate$Companion_getInstance().BAD_0;
              this.z_0.msg = 'header crc mismatch';
              this.marker = 5;
              break lwhen;
            }
          }
          this.z_0.adler = new CRC32();
          this.mode = Inflate$Companion_getInstance().BLOCKS_0;
        }
         else
          return Inflate$Companion_getInstance().Z_STREAM_ERROR_0;
      }
       while (false);
    }
  };
  Inflate.prototype.inflateSetDictionary_mj6st8$ = function (dictionary, index, dictLength) {
    var index_0 = index;
    if (this.z_0 == null || (this.mode !== Inflate$Companion_getInstance().DICT0_0 && this.wrap !== 0)) {
      return Inflate$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    var length = dictLength;
    if (this.mode === Inflate$Companion_getInstance().DICT0_0) {
      var adler_need = this.z_0.adler.value;
      this.z_0.adler.reset();
      this.z_0.adler.update_mj6st8$(dictionary, 0, dictLength);
      if (this.z_0.adler.value !== adler_need) {
        return Inflate$Companion_getInstance().Z_DATA_ERROR_0;
      }
    }
    this.z_0.adler.reset();
    if (length >= 1 << this.wbits) {
      length = (1 << this.wbits) - 1 | 0;
      index_0 = dictLength - length | 0;
    }
    ensureNotNull(this.blocks).set_dictionary_mj6st8$(dictionary, index_0, length);
    this.mode = Inflate$Companion_getInstance().BLOCKS_0;
    return Inflate$Companion_getInstance().Z_OK_0;
  };
  Inflate.prototype.inflateSync = function () {
    var n;
    var p;
    var m;
    var r;
    var w;
    if (this.z_0 == null)
      return Inflate$Companion_getInstance().Z_STREAM_ERROR_0;
    if (this.mode !== Inflate$Companion_getInstance().BAD_0) {
      this.mode = Inflate$Companion_getInstance().BAD_0;
      this.marker = 0;
    }
    n = this.z_0.avail_in;
    if (n === 0)
      return Inflate$Companion_getInstance().Z_BUF_ERROR_0;
    p = this.z_0.next_in_index;
    m = this.marker;
    while (n !== 0 && m < 4) {
      if (ensureNotNull(this.z_0.next_in)[p] === Inflate$Companion_getInstance().mark_0[m]) {
        m = m + 1 | 0;
      }
       else if (ensureNotNull(this.z_0.next_in)[p] !== toByte(0)) {
        m = 0;
      }
       else {
        m = 4 - m | 0;
      }
      p = p + 1 | 0;
      n = n - 1 | 0;
    }
    this.z_0.total_in = this.z_0.total_in.add(Kotlin.Long.fromInt(p)).subtract(Kotlin.Long.fromInt(this.z_0.next_in_index));
    this.z_0.next_in_index = p;
    this.z_0.avail_in = n;
    this.marker = m;
    if (m !== 4) {
      return Inflate$Companion_getInstance().Z_DATA_ERROR_0;
    }
    r = this.z_0.total_in;
    w = this.z_0.total_out;
    this.inflateReset();
    this.z_0.total_in = r;
    this.z_0.total_out = w;
    this.mode = Inflate$Companion_getInstance().BLOCKS_0;
    return Inflate$Companion_getInstance().Z_OK_0;
  };
  Inflate.prototype.inflateSyncPoint = function () {
    return this.z_0 == null || this.blocks == null ? Inflate$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.blocks).sync_point();
  };
  Inflate.prototype.readBytes_0 = function (n, r, f) {
    var tmp$, tmp$_0, tmp$_1;
    var r_0 = r;
    if (this.need_bytes_0 === -1) {
      this.need_bytes_0 = n;
      this.need = 0;
    }
    while (this.need_bytes_0 > 0) {
      if (this.z_0.avail_in === 0) {
        throw new Inflate$Return(this, r_0);
      }
      r_0 = f;
      var tmp$_2;
      tmp$_2 = this.z_0;
      tmp$_2.avail_in = tmp$_2.avail_in - 1 | 0;
      var tmp$_3;
      tmp$_3 = this.z_0;
      tmp$_3.total_in = tmp$_3.total_in.inc();
      tmp$_1 = this.need;
      tmp$_0 = ensureNotNull(this.z_0.next_in);
      var tmp$_4;
      tmp$_4 = this.z_0;
      tmp$ = tmp$_4.next_in_index;
      tmp$_4.next_in_index = tmp$ + 1 | 0;
      this.need = tmp$_1 | (tmp$_0[tmp$] & 255) << ((n - this.need_bytes_0 | 0) * 8 | 0);
      this.need_bytes_0 = this.need_bytes_0 - 1 | 0;
    }
    if (n === 2) {
      this.need = this.need & 65535;
    }
     else if (n === 4) {
      this.need = this.need;
    }
    this.need_bytes_0 = -1;
    return r_0;
  };
  function Inflate$Return($outer, r) {
    this.$outer = $outer;
    Exception.call(this);
    this.r = r;
    this.name = 'Inflate$Return';
  }
  Inflate$Return.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Return',
    interfaces: [Exception]
  };
  Inflate.prototype.readString_0 = function (r, f) {
    var r_0 = r;
    if (this.tmp_string_0 == null) {
      this.tmp_string_0 = new ByteArrayOutputStream();
    }
    var b = 0;
    do {
      if (this.z_0.avail_in === 0) {
        throw new Inflate$Return(this, r_0);
      }
      r_0 = f;
      this.z_0.avail_in = this.z_0.avail_in - 1 | 0;
      this.z_0.total_in = this.z_0.total_in.add(Kotlin.Long.fromInt(1));
      b = ensureNotNull(this.z_0.next_in)[this.z_0.next_in_index];
      if (b !== 0)
        ensureNotNull(this.tmp_string_0).write_mj6st8$(ensureNotNull(this.z_0.next_in), this.z_0.next_in_index, 1);
      this.z_0.adler.update_mj6st8$(ensureNotNull(this.z_0.next_in), this.z_0.next_in_index, 1);
      this.z_0.next_in_index = this.z_0.next_in_index + 1 | 0;
    }
     while (b !== 0);
    return r_0;
  };
  Inflate.prototype.readBytes_1 = function (r, f) {
    var r_0 = r;
    if (this.tmp_string_0 == null) {
      this.tmp_string_0 = new ByteArrayOutputStream();
    }
    var b = 0;
    while (this.need > 0) {
      if (this.z_0.avail_in === 0) {
        throw new Inflate$Return(this, r_0);
      }
      r_0 = f;
      this.z_0.avail_in = this.z_0.avail_in - 1 | 0;
      this.z_0.total_in = this.z_0.total_in.add(Kotlin.Long.fromInt(1));
      b = ensureNotNull(this.z_0.next_in)[this.z_0.next_in_index];
      ensureNotNull(this.tmp_string_0).write_mj6st8$(ensureNotNull(this.z_0.next_in), this.z_0.next_in_index, 1);
      this.z_0.adler.update_mj6st8$(ensureNotNull(this.z_0.next_in), this.z_0.next_in_index, 1);
      this.z_0.next_in_index = this.z_0.next_in_index + 1 | 0;
      this.need = this.need - 1 | 0;
    }
    return r_0;
  };
  Inflate.prototype.checksum_0 = function (n, v) {
    var v_0 = v;
    for (var i = 0; i < n; i++) {
      this.crcbuf_0[i] = toByte(v_0 & 255);
      v_0 = v_0 >>> 8;
    }
    this.z_0.adler.update_mj6st8$(this.crcbuf_0, 0, n);
  };
  Inflate.prototype.inParsingHeader = function () {
    var tmp$;
    tmp$ = this.mode;
    if (tmp$ === Inflate$Companion_getInstance().HEAD_0 || tmp$ === Inflate$Companion_getInstance().DICT4_0 || tmp$ === Inflate$Companion_getInstance().DICT3_0 || tmp$ === Inflate$Companion_getInstance().DICT2_0 || tmp$ === Inflate$Companion_getInstance().DICT1_0 || tmp$ === Inflate$Companion_getInstance().FLAGS_0 || tmp$ === Inflate$Companion_getInstance().TIME_0 || tmp$ === Inflate$Companion_getInstance().OS_0 || tmp$ === Inflate$Companion_getInstance().EXLEN_0 || tmp$ === Inflate$Companion_getInstance().EXTRA_0 || tmp$ === Inflate$Companion_getInstance().NAME_0 || tmp$ === Inflate$Companion_getInstance().COMMENT_0 || tmp$ === Inflate$Companion_getInstance().HCRC_0)
      return true;
    else
      return false;
  };
  function Inflate$Companion() {
    Inflate$Companion_instance = this;
    this.MAX_WBITS_0 = 15;
    this.PRESET_DICT_0 = 32;
    this.Z_NO_FLUSH = 0;
    this.Z_PARTIAL_FLUSH = 1;
    this.Z_SYNC_FLUSH = 2;
    this.Z_FULL_FLUSH = 3;
    this.Z_FINISH = 4;
    this.Z_DEFLATED_0 = 8;
    this.Z_OK_0 = 0;
    this.Z_STREAM_END_0 = 1;
    this.Z_NEED_DICT_0 = 2;
    this.Z_ERRNO_0 = -1;
    this.Z_STREAM_ERROR_0 = -2;
    this.Z_DATA_ERROR_0 = -3;
    this.Z_MEM_ERROR_0 = -4;
    this.Z_BUF_ERROR_0 = -5;
    this.Z_VERSION_ERROR_0 = -6;
    this.METHOD_0 = 0;
    this.FLAG_0 = 1;
    this.DICT4_0 = 2;
    this.DICT3_0 = 3;
    this.DICT2_0 = 4;
    this.DICT1_0 = 5;
    this.DICT0_0 = 6;
    this.BLOCKS_0 = 7;
    this.CHECK4_0 = 8;
    this.CHECK3_0 = 9;
    this.CHECK2_0 = 10;
    this.CHECK1_0 = 11;
    this.DONE_0 = 12;
    this.BAD_0 = 13;
    this.HEAD_0 = 14;
    this.LENGTH_0 = 15;
    this.TIME_0 = 16;
    this.OS_0 = 17;
    this.EXLEN_0 = 18;
    this.EXTRA_0 = 19;
    this.NAME_0 = 20;
    this.COMMENT_0 = 21;
    this.HCRC_0 = 22;
    this.FLAGS_0 = 23;
    this.INFLATE_ANY = 1073741824;
    this.mark_0 = new Int8Array([toByte(0), toByte(0), toByte(255), toByte(255)]);
  }
  Inflate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Inflate$Companion_instance = null;
  function Inflate$Companion_getInstance() {
    if (Inflate$Companion_instance === null) {
      new Inflate$Companion();
    }
    return Inflate$Companion_instance;
  }
  Inflate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inflate',
    interfaces: []
  };
  function Inflater() {
    Inflater$Companion_getInstance();
    this.finished_0 = false;
  }
  Inflater.prototype.init_9kl6u2$ = function (wrapperType) {
    return this.init_eqw6z4$(Inflater$Companion_getInstance().DEF_WBITS_0, wrapperType);
  };
  Inflater.prototype.init_eqw6z4$ = function (w, wrapperType) {
    var w_0 = w;
    var nowrap = false;
    if (equals(wrapperType, JZlib_getInstance().W_NONE))
      nowrap = true;
    else if (equals(wrapperType, JZlib_getInstance().W_GZIP))
      w_0 = w_0 + 16 | 0;
    else if (equals(wrapperType, JZlib_getInstance().W_ANY))
      w_0 = w_0 | Inflate$Companion_getInstance().INFLATE_ANY;
    else
      equals(wrapperType, JZlib_getInstance().W_ZLIB);
    return this.init_fzusl$(w_0, nowrap);
  };
  Inflater.prototype.init_6taknv$ = function (nowrap) {
    return this.init_fzusl$(Inflater$Companion_getInstance().DEF_WBITS_0, nowrap);
  };
  Inflater.prototype.init_fzusl$ = function (w, nowrap) {
    if (w === void 0)
      w = Inflater$Companion_getInstance().DEF_WBITS_0;
    if (nowrap === void 0)
      nowrap = false;
    this.finished_0 = false;
    this.istate_8be2vx$ = new Inflate(this);
    return ensureNotNull(this.istate_8be2vx$).inflateInit_za3lpa$(nowrap ? -w : w);
  };
  Inflater.prototype.inflate_za3lpa$ = function (f) {
    if (this.istate_8be2vx$ == null)
      return Inflater$Companion_getInstance().Z_STREAM_ERROR_0;
    var ret = ensureNotNull(this.istate_8be2vx$).inflate_za3lpa$(f);
    if (ret === Inflater$Companion_getInstance().Z_STREAM_END_0)
      this.finished_0 = true;
    return ret;
  };
  Inflater.prototype.end = function () {
    this.finished_0 = true;
    return this.istate_8be2vx$ == null ? Inflater$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflateEnd();
  };
  Inflater.prototype.sync = function () {
    return this.istate_8be2vx$ == null ? Inflater$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflateSync();
  };
  Inflater.prototype.syncPoint = function () {
    return this.istate_8be2vx$ == null ? Inflater$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflateSyncPoint();
  };
  Inflater.prototype.setDictionary_mj6st8$ = function (dictionary, index, dictLength) {
    return this.istate_8be2vx$ == null ? Inflater$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflateSetDictionary_mj6st8$(dictionary, index, dictLength);
  };
  Inflater.prototype.finished = function () {
    return ensureNotNull(this.istate_8be2vx$).mode === 12;
  };
  function Inflater$Companion() {
    Inflater$Companion_instance = this;
    this.MAX_WBITS_0 = 15;
    this.DEF_WBITS_0 = this.MAX_WBITS_0;
    this.Z_NO_FLUSH_0 = 0;
    this.Z_PARTIAL_FLUSH_0 = 1;
    this.Z_SYNC_FLUSH_0 = 2;
    this.Z_FULL_FLUSH_0 = 3;
    this.Z_FINISH_0 = 4;
    this.MAX_MEM_LEVEL_0 = 9;
    this.Z_OK_0 = 0;
    this.Z_STREAM_END_0 = 1;
    this.Z_NEED_DICT_0 = 2;
    this.Z_ERRNO_0 = -1;
    this.Z_STREAM_ERROR_0 = -2;
    this.Z_DATA_ERROR_0 = -3;
    this.Z_MEM_ERROR_0 = -4;
    this.Z_BUF_ERROR_0 = -5;
    this.Z_VERSION_ERROR_0 = -6;
  }
  Inflater$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Inflater$Companion_instance = null;
  function Inflater$Companion_getInstance() {
    if (Inflater$Companion_instance === null) {
      new Inflater$Companion();
    }
    return Inflater$Companion_instance;
  }
  Inflater.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inflater',
    interfaces: [ZStream]
  };
  function Inflater_init($this) {
    $this = $this || Object.create(Inflater.prototype);
    ZStream.call($this);
    Inflater.call($this);
    $this.init_fzusl$();
    return $this;
  }
  function Inflater_init_0(wrapperType, $this) {
    $this = $this || Object.create(Inflater.prototype);
    Inflater_init_1(Inflater$Companion_getInstance().DEF_WBITS_0, wrapperType, $this);
    return $this;
  }
  function Inflater_init_1(w, wrapperType, $this) {
    $this = $this || Object.create(Inflater.prototype);
    ZStream.call($this);
    Inflater.call($this);
    var ret = $this.init_eqw6z4$(w, wrapperType);
    if (ret !== Inflater$Companion_getInstance().Z_OK_0)
      throw new GZIPException(ret.toString() + ': ' + $this.msg);
    return $this;
  }
  function Inflater_init_2(nowrap, $this) {
    $this = $this || Object.create(Inflater.prototype);
    Inflater_init_3(Inflater$Companion_getInstance().DEF_WBITS_0, nowrap, $this);
    return $this;
  }
  function Inflater_init_3(w, nowrap, $this) {
    if (nowrap === void 0)
      nowrap = false;
    $this = $this || Object.create(Inflater.prototype);
    ZStream.call($this);
    Inflater.call($this);
    var ret = $this.init_fzusl$(w, nowrap);
    if (ret !== Inflater$Companion_getInstance().Z_OK_0)
      throw new GZIPException(ret.toString() + ': ' + $this.msg);
    return $this;
  }
  function InflaterInputStream(i, inflater, size, close_in) {
    InflaterInputStream$Companion_getInstance();
    if (size === void 0)
      size = InflaterInputStream$Companion_getInstance().DEFAULT_BUFSIZE;
    if (close_in === void 0)
      close_in = true;
    FilterInputStream.call(this, i);
    this.inflater = inflater;
    this.close_in_n9p29b$_0 = close_in;
    this.buf = new Int8Array(size);
    this.closed_wmbmhb$_0 = false;
    this.eof_r05ym3$_0 = false;
    this.myinflater = false;
    this.byte1_nvnw6m$_0 = new Int8Array(1);
    this.b_28u68l$_0 = new Int8Array(512);
  }
  Object.defineProperty(InflaterInputStream.prototype, 'total_in', {
    get: function () {
      return this.inflater.total_in;
    }
  });
  Object.defineProperty(InflaterInputStream.prototype, 'total_out', {
    get: function () {
      return this.inflater.total_out;
    }
  });
  Object.defineProperty(InflaterInputStream.prototype, 'availIn', {
    get: function () {
      if (this.inflater.avail_in <= 0)
        return null;
      var tmp = new Int8Array(this.inflater.avail_in);
      var src = ensureNotNull(this.inflater.next_in);
      var srcPos = this.inflater.next_in_index;
      tmp.set(src.subarray(srcPos, srcPos + this.inflater.avail_in | 0), 0);
      return tmp;
    }
  });
  InflaterInputStream.prototype.read = function () {
    if (this.closed_wmbmhb$_0) {
      throw new IOException('Stream closed');
    }
    return this.read_mj6st8$(this.byte1_nvnw6m$_0, 0, 1) === -1 ? -1 : this.byte1_nvnw6m$_0[0] & 255;
  };
  InflaterInputStream.prototype.read_mj6st8$ = function (b, off, len) {
    var tmp$;
    var off_0 = off;
    if (this.closed_wmbmhb$_0)
      throw new IOException('Stream closed');
    if (off_0 < 0 || len < 0 || len > (b.length - off_0 | 0))
      throw new IndexOutOfBoundsException();
    if (len === 0)
      return 0;
    if (this.eof_r05ym3$_0)
      return -1;
    var n = 0;
    this.inflater.setOutput_mj6st8$(b, off_0, len);
    while (!this.eof_r05ym3$_0) {
      if (this.inflater.avail_in === 0)
        this.fill();
      var err = this.inflater.inflate_za3lpa$(JZlib_getInstance().Z_NO_FLUSH);
      n = n + (this.inflater.next_out_index - off_0) | 0;
      off_0 = this.inflater.next_out_index;
      if (err === JZlib_getInstance().Z_DATA_ERROR) {
        throw new IOException((tmp$ = this.inflater.msg) != null ? tmp$ : '');
      }
       else if (err === JZlib_getInstance().Z_STREAM_END || err === JZlib_getInstance().Z_NEED_DICT) {
        this.eof_r05ym3$_0 = true;
        if (err === JZlib_getInstance().Z_NEED_DICT)
          return -1;
      }
      if (this.inflater.avail_out === 0)
        break;
    }
    return n;
  };
  InflaterInputStream.prototype.available = function () {
    var tmp$;
    if (this.closed_wmbmhb$_0) {
      throw new IOException('Stream closed');
    }
    if (this.eof_r05ym3$_0) {
      tmp$ = 0;
    }
     else {
      tmp$ = 1;
    }
    return tmp$;
  };
  var Math_0 = Math;
  var min = Kotlin.kotlin.js.min_bug313$;
  InflaterInputStream.prototype.skip_s8cxhz$ = function (n) {
    if (n.compareTo_11rb$(Kotlin.Long.fromInt(0)) < 0) {
      throw new IllegalArgumentException('negative skip length');
    }
    if (this.closed_wmbmhb$_0) {
      throw new IOException('Stream closed');
    }
    var max = min(Math_0, n, Kotlin.Long.fromInt(2147483647)).toInt();
    var total = 0;
    while (total < max) {
      var len = max - total | 0;
      if (len > this.b_28u68l$_0.length) {
        len = this.b_28u68l$_0.length;
      }
      len = this.read_mj6st8$(this.b_28u68l$_0, 0, len);
      if (len === -1) {
        this.eof_r05ym3$_0 = true;
        break;
      }
      total = total + len | 0;
    }
    return Kotlin.Long.fromInt(total);
  };
  InflaterInputStream.prototype.close = function () {
    if (!this.closed_wmbmhb$_0) {
      if (this.myinflater)
        this.inflater.end();
      if (this.close_in_n9p29b$_0)
        this.i.close();
      this.closed_wmbmhb$_0 = true;
    }
  };
  InflaterInputStream.prototype.fill = function () {
    if (this.closed_wmbmhb$_0) {
      throw new IOException('Stream closed');
    }
    var len = this.i.read_mj6st8$(this.buf, 0, this.buf.length);
    if (len === -1) {
      if (ensureNotNull(this.inflater.istate_8be2vx$).wrap === 0 && !this.inflater.finished()) {
        this.buf[0] = 0;
        len = 1;
      }
       else if (ensureNotNull(this.inflater.istate_8be2vx$).was !== -1) {
        throw new IOException('footer is not found');
      }
       else {
        throw new EOFException('Unexpected end of ZLIB input stream');
      }
    }
    this.inflater.setInput_exhmhv$(this.buf, 0, len, true);
  };
  InflaterInputStream.prototype.markSupported = function () {
    return false;
  };
  InflaterInputStream.prototype.mark_za3lpa$ = function (readlimit) {
  };
  InflaterInputStream.prototype.reset = function () {
    throw new IOException('mark/reset not supported');
  };
  InflaterInputStream.prototype.readHeader = function () {
    var tmp$;
    var empty = new Int8Array([]);
    this.inflater.setInput_exhmhv$(empty, 0, 0, false);
    this.inflater.setOutput_mj6st8$(empty, 0, 0);
    var err = this.inflater.inflate_za3lpa$(JZlib_getInstance().Z_NO_FLUSH);
    if (!ensureNotNull(this.inflater.istate_8be2vx$).inParsingHeader()) {
      return;
    }
    var b1 = new Int8Array(1);
    do {
      var i = this.i.read_fqrh44$(b1);
      if (i <= 0)
        throw new IOException('no input');
      this.inflater.setInput_exhmhv$(b1);
      err = this.inflater.inflate_za3lpa$(JZlib_getInstance().Z_NO_FLUSH);
      if (err !== 0) {
        throw new IOException((tmp$ = this.inflater.msg) != null ? tmp$ : '');
      }
    }
     while (ensureNotNull(this.inflater.istate_8be2vx$).inParsingHeader());
  };
  function InflaterInputStream$Companion() {
    InflaterInputStream$Companion_instance = this;
    this.DEFAULT_BUFSIZE = 512;
  }
  InflaterInputStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InflaterInputStream$Companion_instance = null;
  function InflaterInputStream$Companion_getInstance() {
    if (InflaterInputStream$Companion_instance === null) {
      new InflaterInputStream$Companion();
    }
    return InflaterInputStream$Companion_instance;
  }
  InflaterInputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InflaterInputStream',
    interfaces: [FilterInputStream]
  };
  function InflaterInputStream_init(i, nowrap, $this) {
    if (nowrap === void 0)
      nowrap = false;
    $this = $this || Object.create(InflaterInputStream.prototype);
    InflaterInputStream.call($this, i, Inflater_init_2(nowrap));
    $this.myinflater = true;
    return $this;
  }
  function InputStream() {
  }
  InputStream.prototype.available = function () {
    return 0;
  };
  InputStream.prototype.close = function () {
  };
  InputStream.prototype.mark_za3lpa$ = function (readlimit) {
  };
  InputStream.prototype.markSupported = function () {
    return false;
  };
  InputStream.prototype.read_fqrh44$ = function (buffer) {
    return this.read_mj6st8$(buffer, 0, buffer.length);
  };
  InputStream.prototype.read_mj6st8$ = function (buffer, byteOffset, byteCount) {
    var i = 0;
    try {
      while (i < byteCount) {
        var c = this.read();
        if (c === -1) {
          return i === 0 ? -1 : i;
        }
        buffer[byteOffset + i | 0] = toByte(c);
        i = i + 1 | 0;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, IOException)) {
        if (i !== 0)
          return i;
        throw e;
      }
       else
        throw e;
    }
    return byteCount;
  };
  InputStream.prototype.reset = function () {
    throw new IOException('reset');
  };
  InputStream.prototype.skip_s8cxhz$ = function (n) {
    var tmp$;
    var count = Kotlin.Long.ZERO;
    tmp$ = until(0, n).iterator();
    while (tmp$.hasNext()) {
      var m = tmp$.next();
      if (Kotlin.Long.fromInt(this.read()).compareTo_11rb$(Kotlin.Long.ZERO) < 0)
        return count;
      count = count.inc();
    }
    return count;
  };
  InputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputStream',
    interfaces: []
  };
  function toSimpleByteArray($receiver) {
    var tmp$;
    var out = new Int8Array($receiver.length);
    tmp$ = $receiver.length;
    for (var n = 0; n < tmp$; n++)
      out[n] = toByte($receiver.charCodeAt(n) | 0);
    return out;
  }
  function toSimpleString($receiver) {
    var out = new StringBuilder();
    for (var n = 0; n < $receiver.length; n++)
      out.append_s8itvh$(toChar($receiver[n]));
    return out.toString();
  }
  function JZlib() {
    JZlib_instance = this;
    this.version_0 = '1.1.0';
    this.MAX_WBITS = 15;
    this.DEF_WBITS = this.MAX_WBITS;
    this.W_NONE = JZlib$WrapperType$NONE_getInstance();
    this.W_ZLIB = JZlib$WrapperType$ZLIB_getInstance();
    this.W_GZIP = JZlib$WrapperType$GZIP_getInstance();
    this.W_ANY = JZlib$WrapperType$ANY_getInstance();
    this.Z_NO_COMPRESSION = 0;
    this.Z_BEST_SPEED = 1;
    this.Z_BEST_COMPRESSION = 9;
    this.Z_DEFAULT_COMPRESSION = -1;
    this.Z_FILTERED = 1;
    this.Z_HUFFMAN_ONLY = 2;
    this.Z_DEFAULT_STRATEGY = 0;
    this.Z_NO_FLUSH = 0;
    this.Z_PARTIAL_FLUSH = 1;
    this.Z_SYNC_FLUSH = 2;
    this.Z_FULL_FLUSH = 3;
    this.Z_FINISH = 4;
    this.Z_OK = 0;
    this.Z_STREAM_END = 1;
    this.Z_NEED_DICT = 2;
    this.Z_ERRNO = -1;
    this.Z_STREAM_ERROR = -2;
    this.Z_DATA_ERROR = -3;
    this.Z_MEM_ERROR = -4;
    this.Z_BUF_ERROR = -5;
    this.Z_VERSION_ERROR = -6;
    this.Z_BINARY = 0;
    this.Z_ASCII = 1;
    this.Z_UNKNOWN = 2;
  }
  JZlib.prototype.version = function () {
    return this.version_0;
  };
  function JZlib$WrapperType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function JZlib$WrapperType_initFields() {
    JZlib$WrapperType_initFields = function () {
    };
    JZlib$WrapperType$NONE_instance = new JZlib$WrapperType('NONE', 0);
    JZlib$WrapperType$ZLIB_instance = new JZlib$WrapperType('ZLIB', 1);
    JZlib$WrapperType$GZIP_instance = new JZlib$WrapperType('GZIP', 2);
    JZlib$WrapperType$ANY_instance = new JZlib$WrapperType('ANY', 3);
  }
  var JZlib$WrapperType$NONE_instance;
  function JZlib$WrapperType$NONE_getInstance() {
    JZlib$WrapperType_initFields();
    return JZlib$WrapperType$NONE_instance;
  }
  var JZlib$WrapperType$ZLIB_instance;
  function JZlib$WrapperType$ZLIB_getInstance() {
    JZlib$WrapperType_initFields();
    return JZlib$WrapperType$ZLIB_instance;
  }
  var JZlib$WrapperType$GZIP_instance;
  function JZlib$WrapperType$GZIP_getInstance() {
    JZlib$WrapperType_initFields();
    return JZlib$WrapperType$GZIP_instance;
  }
  var JZlib$WrapperType$ANY_instance;
  function JZlib$WrapperType$ANY_getInstance() {
    JZlib$WrapperType_initFields();
    return JZlib$WrapperType$ANY_instance;
  }
  JZlib$WrapperType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WrapperType',
    interfaces: [Enum]
  };
  function JZlib$WrapperType$values() {
    return [JZlib$WrapperType$NONE_getInstance(), JZlib$WrapperType$ZLIB_getInstance(), JZlib$WrapperType$GZIP_getInstance(), JZlib$WrapperType$ANY_getInstance()];
  }
  JZlib$WrapperType.values = JZlib$WrapperType$values;
  function JZlib$WrapperType$valueOf(name) {
    switch (name) {
      case 'NONE':
        return JZlib$WrapperType$NONE_getInstance();
      case 'ZLIB':
        return JZlib$WrapperType$ZLIB_getInstance();
      case 'GZIP':
        return JZlib$WrapperType$GZIP_getInstance();
      case 'ANY':
        return JZlib$WrapperType$ANY_getInstance();
      default:throwISE('No enum constant com.soywiz.kzlib.JZlib.WrapperType.' + name);
    }
  }
  JZlib$WrapperType.valueOf_61zpoe$ = JZlib$WrapperType$valueOf;
  JZlib.prototype.adler32_combine_b9bd0d$ = function (adler1, adler2, len2) {
    return Adler32$Companion_getInstance().combine_e84ct6$(adler1, adler2, len2);
  };
  JZlib.prototype.crc32_combine_b9bd0d$ = function (crc1, crc2, len2) {
    return CRC32$Companion_getInstance().combine_e84ct6$(crc1, crc2, len2);
  };
  JZlib.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JZlib',
    interfaces: []
  };
  var JZlib_instance = null;
  function JZlib_getInstance() {
    if (JZlib_instance === null) {
      new JZlib();
    }
    return JZlib_instance;
  }
  function KZlib() {
    KZlib_instance = this;
    this.VERSION = KZLIB_VERSION;
  }
  KZlib.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KZlib',
    interfaces: []
  };
  var KZlib_instance = null;
  function KZlib_getInstance() {
    if (KZlib_instance === null) {
      new KZlib();
    }
    return KZlib_instance;
  }
  function inflate($receiver, nowrap) {
    if (nowrap === void 0)
      nowrap = false;
    var bos = new ByteArrayOutputStream();
    copyTo(InflaterInputStream_init(ByteArrayInputStream_init($receiver), nowrap), bos);
    return bos.toByteArray();
  }
  function deflate($receiver, level, nowrap) {
    if (level === void 0)
      level = 7;
    if (nowrap === void 0)
      nowrap = false;
    var bos = new ByteArrayOutputStream();
    var deflater = Deflater_init_0(level, nowrap);
    var def = new DeflaterOutputStream(bos, deflater);
    def.write_fqrh44$($receiver);
    def.flush();
    def.finish();
    deflater.end();
    return bos.toByteArray();
  }
  var KZLIB_VERSION;
  function OutputStream() {
  }
  OutputStream.prototype.close = function () {
  };
  OutputStream.prototype.flush = function () {
  };
  OutputStream.prototype.checkError = function () {
    return false;
  };
  OutputStream.prototype.write_fqrh44$ = function (buffer) {
    this.write_mj6st8$(buffer, 0, buffer.length);
  };
  OutputStream.prototype.write_mj6st8$ = function (buffer, offset, count) {
    var tmp$;
    tmp$ = offset + count | 0;
    for (var i = offset; i < tmp$; i++)
      this.write_za3lpa$(buffer[i]);
  };
  OutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OutputStream',
    interfaces: []
  };
  function FilterOutputStream(out) {
    OutputStream.call(this);
    this.out = out;
  }
  FilterOutputStream.prototype.write_za3lpa$ = function (value) {
    this.out.write_za3lpa$(value);
  };
  FilterOutputStream.prototype.write_fqrh44$ = function (value) {
    this.write_mj6st8$(value, 0, value.length);
  };
  FilterOutputStream.prototype.write_mj6st8$ = function (value, offset, length) {
    for (var n = 0; n < length; n++)
      this.write_za3lpa$(value[offset + n | 0]);
  };
  FilterOutputStream.prototype.flush = function () {
    this.out.flush();
  };
  FilterOutputStream.prototype.close = function () {
    var ostream = this.out;
    try {
      this.flush();
    }
    finally {
      ostream.close();
    }
  };
  FilterOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterOutputStream',
    interfaces: [OutputStream]
  };
  function StaticTree(static_tree, extra_bits, extra_base, elems, max_length) {
    StaticTree$Companion_getInstance();
    this.static_tree = static_tree;
    this.extra_bits = extra_bits;
    this.extra_base = extra_base;
    this.elems = elems;
    this.max_length = max_length;
  }
  function StaticTree$Companion() {
    StaticTree$Companion_instance = this;
    this.MAX_BITS_0 = 15;
    this.BL_CODES_0 = 19;
    this.D_CODES_0 = 30;
    this.LITERALS_0 = 256;
    this.LENGTH_CODES_0 = 29;
    this.L_CODES_0 = this.LITERALS_0 + 1 + this.LENGTH_CODES_0 | 0;
    this.MAX_BL_BITS = 7;
    this.static_ltree = new Int16Array([12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8]);
    this.static_dtree = new Int16Array([0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5]);
    this.static_l_desc = new StaticTree(this.static_ltree, Tree$Companion_getInstance().extra_lbits, this.LITERALS_0 + 1 | 0, this.L_CODES_0, this.MAX_BITS_0);
    this.static_d_desc = new StaticTree(this.static_dtree, Tree$Companion_getInstance().extra_dbits, 0, this.D_CODES_0, this.MAX_BITS_0);
    this.static_bl_desc = new StaticTree(null, Tree$Companion_getInstance().extra_blbits, 0, this.BL_CODES_0, this.MAX_BL_BITS);
  }
  StaticTree$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StaticTree$Companion_instance = null;
  function StaticTree$Companion_getInstance() {
    if (StaticTree$Companion_instance === null) {
      new StaticTree$Companion();
    }
    return StaticTree$Companion_instance;
  }
  StaticTree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StaticTree',
    interfaces: []
  };
  function copyTo($receiver, out) {
    var temp = new Int8Array(1024);
    while (true) {
      var read = $receiver.read_fqrh44$(temp);
      if (read <= 0)
        break;
      out.write_mj6st8$(temp, 0, read);
    }
  }
  function Tree() {
    Tree$Companion_getInstance();
    this.dyn_tree_323z70$_0 = this.dyn_tree_323z70$_0;
    this.max_code = 0;
    this.stat_desc = null;
  }
  Object.defineProperty(Tree.prototype, 'dyn_tree', {
    get: function () {
      if (this.dyn_tree_323z70$_0 == null)
        return throwUPAE('dyn_tree');
      return this.dyn_tree_323z70$_0;
    },
    set: function (dyn_tree) {
      this.dyn_tree_323z70$_0 = dyn_tree;
    }
  });
  Tree.prototype.gen_bitlen_ixymjh$ = function (s) {
    var tree = this.dyn_tree;
    var stree = ensureNotNull(this.stat_desc).static_tree;
    var extra = ensureNotNull(this.stat_desc).extra_bits;
    var base = ensureNotNull(this.stat_desc).extra_base;
    var max_length = ensureNotNull(this.stat_desc).max_length;
    var h;
    var n;
    var m;
    var bits;
    var xbits;
    var f;
    var overflow = 0;
    bits = 0;
    while (bits <= Tree$Companion_getInstance().MAX_BITS_0) {
      s.bl_count_8be2vx$[bits] = 0;
      bits = bits + 1 | 0;
    }
    tree[(s.heap_8be2vx$[s.heap_max_8be2vx$] * 2 | 0) + 1 | 0] = 0;
    h = s.heap_max_8be2vx$ + 1 | 0;
    while (h < Tree$Companion_getInstance().HEAP_SIZE_0) {
      n = s.heap_8be2vx$[h];
      bits = tree[tree[(n * 2 | 0) + 1 | 0] * 2 + 1 | 0] + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow = overflow + 1 | 0;
      }
      tree[(n * 2 | 0) + 1 | 0] = toShort(bits);
      if (n > this.max_code) {
        h = h + 1 | 0;
        continue;
      }
      var tmp$;
      tmp$ = s.bl_count_8be2vx$;
      tmp$[bits] = toShort(tmp$[bits] + 1);
      xbits = 0;
      if (n >= base)
        xbits = ensureNotNull(extra)[n - base | 0];
      f = tree[n * 2 | 0];
      s.opt_len_8be2vx$ = s.opt_len_8be2vx$ + f * (bits + xbits | 0) | 0;
      if (stree != null)
        s.static_len_8be2vx$ = s.static_len_8be2vx$ + f * (stree[(n * 2 | 0) + 1 | 0] + xbits) | 0;
      h = h + 1 | 0;
    }
    if (overflow === 0)
      return;
    do {
      bits = max_length - 1 | 0;
      while (s.bl_count_8be2vx$[bits] === 0) {
        bits = bits - 1 | 0;
      }
      var tmp$_0;
      tmp$_0 = s.bl_count_8be2vx$;
      tmp$_0[bits] = toShort(tmp$_0[bits] - 1);
      s.bl_count_8be2vx$[bits + 1 | 0] = toShort(s.bl_count_8be2vx$[bits + 1 | 0] + 2);
      var tmp$_1;
      tmp$_1 = s.bl_count_8be2vx$;
      tmp$_1[max_length] = toShort(tmp$_1[max_length] - 1);
      overflow = overflow - 2 | 0;
    }
     while (overflow > 0);
    bits = max_length;
    while (bits !== 0) {
      n = s.bl_count_8be2vx$[bits];
      while (n !== 0) {
        m = s.heap_8be2vx$[h = h - 1 | 0, h];
        if (m > this.max_code)
          continue;
        if (tree[(m * 2 | 0) + 1 | 0] !== bits) {
          s.opt_len_8be2vx$ = s.opt_len_8be2vx$ + Kotlin.Long.fromInt(bits).subtract(Kotlin.Long.fromInt(tree[(m * 2 | 0) + 1 | 0])).multiply(Kotlin.Long.fromInt(tree[m * 2 | 0])).toInt() | 0;
          tree[(m * 2 | 0) + 1 | 0] = toShort(bits);
        }
        n = n - 1 | 0;
      }
      bits = bits - 1 | 0;
    }
  };
  Tree.prototype.build_tree_ixymjh$ = function (s) {
    var tmp$, tmp$_0;
    var tree = this.dyn_tree;
    var stree = ensureNotNull(this.stat_desc).static_tree;
    var elems = ensureNotNull(this.stat_desc).elems;
    var n;
    var m;
    var max_code = -1;
    var node;
    s.heap_len_8be2vx$ = 0;
    s.heap_max_8be2vx$ = Tree$Companion_getInstance().HEAP_SIZE_0;
    n = 0;
    while (n < elems) {
      if (tree[n * 2 | 0] !== 0) {
        max_code = n;
        s.heap_8be2vx$[s.heap_len_8be2vx$ = s.heap_len_8be2vx$ + 1 | 0, s.heap_len_8be2vx$] = max_code;
        s.depth_8be2vx$[n] = 0;
      }
       else {
        tree[(n * 2 | 0) + 1 | 0] = 0;
      }
      n = n + 1 | 0;
    }
    while (s.heap_len_8be2vx$ < 2) {
      s.heap_8be2vx$[s.heap_len_8be2vx$ = s.heap_len_8be2vx$ + 1 | 0, s.heap_len_8be2vx$] = max_code < 2 ? (max_code = max_code + 1 | 0, max_code) : 0;
      node = s.heap_8be2vx$[s.heap_len_8be2vx$];
      tree[node * 2 | 0] = 1;
      s.depth_8be2vx$[node] = 0;
      s.opt_len_8be2vx$ = s.opt_len_8be2vx$ - 1 | 0;
      if (stree != null)
        s.static_len_8be2vx$ = s.static_len_8be2vx$ - stree[(node * 2 | 0) + 1 | 0] | 0;
    }
    this.max_code = max_code;
    n = s.heap_len_8be2vx$ / 2 | 0;
    while (n >= 1) {
      s.pqdownheap_eap75r$(tree, n);
      n = n - 1 | 0;
    }
    node = elems;
    do {
      n = s.heap_8be2vx$[1];
      s.heap_8be2vx$[1] = s.heap_8be2vx$[tmp$ = s.heap_len_8be2vx$, s.heap_len_8be2vx$ = tmp$ - 1 | 0, tmp$];
      s.pqdownheap_eap75r$(tree, 1);
      m = s.heap_8be2vx$[1];
      s.heap_8be2vx$[s.heap_max_8be2vx$ = s.heap_max_8be2vx$ - 1 | 0, s.heap_max_8be2vx$] = n;
      s.heap_8be2vx$[s.heap_max_8be2vx$ = s.heap_max_8be2vx$ - 1 | 0, s.heap_max_8be2vx$] = m;
      tree[node * 2 | 0] = toShort(tree[n * 2 | 0] + tree[m * 2 | 0]);
      var tmp$_1 = s.depth_8be2vx$;
      var a = s.depth_8be2vx$[n];
      var b = s.depth_8be2vx$[m];
      tmp$_1[node] = toByte(Math_0.max(a, b) + 1 | 0);
      tree[(m * 2 | 0) + 1 | 0] = toShort(node);
      tree[(n * 2 | 0) + 1 | 0] = tree[(m * 2 | 0) + 1 | 0];
      s.heap_8be2vx$[1] = (tmp$_0 = node, node = tmp$_0 + 1 | 0, tmp$_0);
      s.pqdownheap_eap75r$(tree, 1);
    }
     while (s.heap_len_8be2vx$ >= 2);
    s.heap_8be2vx$[s.heap_max_8be2vx$ = s.heap_max_8be2vx$ - 1 | 0, s.heap_max_8be2vx$] = s.heap_8be2vx$[1];
    this.gen_bitlen_ixymjh$(s);
    Tree$Companion_getInstance().gen_codes_0(tree, max_code, s.bl_count_8be2vx$, s.next_code_8be2vx$);
  };
  function Tree$Companion() {
    Tree$Companion_instance = this;
    this.MAX_BITS_0 = 15;
    this.BL_CODES_0 = 19;
    this.D_CODES_0 = 30;
    this.LITERALS_0 = 256;
    this.LENGTH_CODES_0 = 29;
    this.L_CODES_0 = this.LITERALS_0 + 1 + this.LENGTH_CODES_0 | 0;
    this.HEAP_SIZE_0 = (2 * this.L_CODES_0 | 0) + 1 | 0;
    this.MAX_BL_BITS = 7;
    this.END_BLOCK = 256;
    this.REP_3_6 = 16;
    this.REPZ_3_10 = 17;
    this.REPZ_11_138 = 18;
    this.extra_lbits = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    this.extra_dbits = new Int32Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    this.extra_blbits = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    this.bl_order = new Int8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    this.Buf_size = 8 * 2 | 0;
    this.DIST_CODE_LEN = 512;
    this._dist_code = new Int8Array([0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29]);
    this._length_code = new Int8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28]);
    this.base_length = new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0]);
    this.base_dist = new Int32Array([0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576]);
  }
  Tree$Companion.prototype.d_code_za3lpa$ = function (dist) {
    return dist < 256 ? this._dist_code[dist] : this._dist_code[256 + (dist >>> 7) | 0];
  };
  Tree$Companion.prototype.gen_codes_0 = function (tree, max_code, bl_count, next_code) {
    var tmp$;
    var code = 0;
    var bits;
    var n;
    next_code[0] = 0;
    bits = 1;
    while (bits <= this.MAX_BITS_0) {
      code = toShort(code + bl_count[bits - 1 | 0] << 1);
      next_code[bits] = code;
      bits = bits + 1 | 0;
    }
    n = 0;
    while (n <= max_code) {
      var len = tree[(n * 2 | 0) + 1 | 0];
      if (len === 0) {
        n = n + 1 | 0;
        continue;
      }
      tree[n * 2 | 0] = toShort(this.bi_reverse_0((tmp$ = next_code[len], next_code[len] = toShort(tmp$ + 1), tmp$), len));
      n = n + 1 | 0;
    }
  };
  Tree$Companion.prototype.bi_reverse_0 = function (code, len) {
    var code_0 = code;
    var len_0 = len;
    var res = 0;
    do {
      res = res | code_0 & 1;
      code_0 = code_0 >>> 1;
      res = res << 1;
    }
     while ((len_0 = len_0 - 1 | 0, len_0) > 0);
    return res >>> 1;
  };
  Tree$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tree$Companion_instance = null;
  function Tree$Companion_getInstance() {
    if (Tree$Companion_instance === null) {
      new Tree$Companion();
    }
    return Tree$Companion_instance;
  }
  Tree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tree',
    interfaces: []
  };
  function ZInputStream() {
    this.flushMode = JZlib_getInstance().Z_NO_FLUSH;
    this.compress_0 = false;
    this.deflater_0 = null;
    this.iis_0 = null;
    this.buf1_0 = new Int8Array(1);
    this.buf_0 = new Int8Array(512);
  }
  Object.defineProperty(ZInputStream.prototype, 'totalIn', {
    get: function () {
      return this.compress_0 ? ensureNotNull(this.deflater_0).total_in : ensureNotNull(this.iis_0).total_in;
    }
  });
  Object.defineProperty(ZInputStream.prototype, 'totalOut', {
    get: function () {
      return this.compress_0 ? ensureNotNull(this.deflater_0).total_out : ensureNotNull(this.iis_0).total_out;
    }
  });
  ZInputStream.prototype.read = function () {
    return this.read_mj6st8$(this.buf1_0, 0, 1) === -1 ? -1 : this.buf1_0[0] & 255;
  };
  ZInputStream.prototype.read_mj6st8$ = function (b, off, len) {
    if (this.compress_0) {
      ensureNotNull(this.deflater_0).setOutput_mj6st8$(b, off, len);
      while (true) {
        var datalen = this.i.read_mj6st8$(this.buf_0, 0, this.buf_0.length);
        if (datalen === -1)
          return -1;
        ensureNotNull(this.deflater_0).setInput_exhmhv$(this.buf_0, 0, datalen, true);
        var err = ensureNotNull(this.deflater_0).deflate_za3lpa$(this.flushMode);
        if (ensureNotNull(this.deflater_0).next_out_index > 0)
          return ensureNotNull(this.deflater_0).next_out_index;
        if (err === JZlib_getInstance().Z_STREAM_END)
          return 0;
        if (err === JZlib_getInstance().Z_STREAM_ERROR || err === JZlib_getInstance().Z_DATA_ERROR) {
          throw new ZStreamException('deflating: ' + ensureNotNull(this.deflater_0).msg);
        }
      }
    }
     else {
      return ensureNotNull(this.iis_0).read_mj6st8$(b, off, len);
    }
  };
  ZInputStream.prototype.skip_s8cxhz$ = function (n) {
    var len = 512;
    if (n.compareTo_11rb$(Kotlin.Long.fromInt(len)) < 0)
      len = n.toInt();
    var tmp = new Int8Array(len);
    return Kotlin.Long.fromInt(this.read_fqrh44$(tmp));
  };
  ZInputStream.prototype.close = function () {
    if (this.compress_0)
      ensureNotNull(this.deflater_0).end();
    else
      ensureNotNull(this.iis_0).close();
  };
  ZInputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZInputStream',
    interfaces: [FilterInputStream]
  };
  function ZInputStream_init(i, nowrap, $this) {
    if (nowrap === void 0)
      nowrap = false;
    $this = $this || Object.create(ZInputStream.prototype);
    FilterInputStream.call($this, i);
    ZInputStream.call($this);
    $this.iis_0 = InflaterInputStream_init(i, nowrap);
    $this.compress_0 = false;
    return $this;
  }
  function ZInputStream_init_0(i, level, $this) {
    $this = $this || Object.create(ZInputStream.prototype);
    FilterInputStream.call($this, i);
    ZInputStream.call($this);
    $this.i = i;
    $this.deflater_0 = Deflater_init();
    ensureNotNull($this.deflater_0).init_ydzd23$(level);
    $this.compress_0 = true;
    return $this;
  }
  function ZOutputStream() {
    this.bufsize_0 = 512;
    this.flushMode = JZlib_getInstance().Z_NO_FLUSH;
    this.buf_0 = new Int8Array(this.bufsize_0);
    this.compress_0 = false;
    this.end_0 = false;
    this.dos_0 = null;
    this.inflater_0 = null;
    this.buf1_0 = new Int8Array(1);
  }
  Object.defineProperty(ZOutputStream.prototype, 'totalIn', {
    get: function () {
      return this.compress_0 ? ensureNotNull(this.dos_0).total_in : ensureNotNull(this.inflater_0).total_in;
    }
  });
  Object.defineProperty(ZOutputStream.prototype, 'totalOut', {
    get: function () {
      return this.compress_0 ? ensureNotNull(this.dos_0).total_out : ensureNotNull(this.inflater_0).total_out;
    }
  });
  ZOutputStream.prototype.write_za3lpa$ = function (b) {
    this.buf1_0[0] = toByte(b);
    this.write_mj6st8$(this.buf1_0, 0, 1);
  };
  ZOutputStream.prototype.write_mj6st8$ = function (b, off, len) {
    if (len === 0)
      return;
    if (this.compress_0) {
      ensureNotNull(this.dos_0).write_mj6st8$(b, off, len);
    }
     else {
      ensureNotNull(this.inflater_0).setInput_exhmhv$(b, off, len, true);
      var err = JZlib_getInstance().Z_OK;
      while (ensureNotNull(this.inflater_0).avail_in > 0) {
        ensureNotNull(this.inflater_0).setOutput_mj6st8$(this.buf_0, 0, this.buf_0.length);
        err = ensureNotNull(this.inflater_0).inflate_za3lpa$(this.flushMode);
        if (ensureNotNull(this.inflater_0).next_out_index > 0)
          this.out.write_mj6st8$(this.buf_0, 0, ensureNotNull(this.inflater_0).next_out_index);
        if (err !== JZlib_getInstance().Z_OK)
          break;
      }
      if (err !== JZlib_getInstance().Z_OK)
        throw new ZStreamException('inflating: ' + ensureNotNull(this.inflater_0).msg);
      return;
    }
  };
  ZOutputStream.prototype.finish = function () {
    var err;
    if (this.compress_0) {
      var tmp = this.flushMode;
      var flush = JZlib_getInstance().Z_FINISH;
      try {
        this.write_mj6st8$(new Int8Array([]), 0, 0);
      }
      finally {
        flush = tmp;
      }
    }
     else {
      ensureNotNull(this.dos_0).finish();
    }
    this.flush();
  };
  ZOutputStream.prototype.end = function () {
    if (this.end_0)
      return;
    if (this.compress_0) {
      try {
        ensureNotNull(this.dos_0).finish();
      }
       catch (e) {
        if (!Kotlin.isType(e, Exception))
          throw e;
      }
    }
     else {
      ensureNotNull(this.inflater_0).end();
    }
    this.end_0 = true;
  };
  ZOutputStream.prototype.close = function () {
    try {
      try {
        this.finish();
      }
       catch (ignored) {
        if (!Kotlin.isType(ignored, Exception))
          throw ignored;
      }
    }
    finally {
      this.end();
      this.out.close();
    }
  };
  ZOutputStream.prototype.flush = function () {
    this.out.flush();
  };
  ZOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZOutputStream',
    interfaces: [FilterOutputStream]
  };
  function ZOutputStream_init(out, $this) {
    $this = $this || Object.create(ZOutputStream.prototype);
    FilterOutputStream.call($this, out);
    ZOutputStream.call($this);
    $this.out = out;
    $this.inflater_0 = Inflater_init();
    ensureNotNull($this.inflater_0).init_fzusl$();
    $this.compress_0 = false;
    return $this;
  }
  function ZOutputStream_init_0(out, level, nowrap, $this) {
    if (nowrap === void 0)
      nowrap = false;
    $this = $this || Object.create(ZOutputStream.prototype);
    FilterOutputStream.call($this, out);
    ZOutputStream.call($this);
    $this.out = out;
    var deflater = Deflater_init_0(level, nowrap);
    $this.dos_0 = new DeflaterOutputStream(out, deflater);
    $this.compress_0 = true;
    return $this;
  }
  function ZStream(adler) {
    ZStream$Companion_getInstance();
    if (adler === void 0)
      adler = new Adler32();
    this.adler = adler;
    this.next_in = null;
    this.next_in_index = 0;
    this.avail_in = 0;
    this.total_in = Kotlin.Long.ZERO;
    this.next_out = null;
    this.next_out_index = 0;
    this.avail_out = 0;
    this.total_out = Kotlin.Long.ZERO;
    this.msg = null;
    this.dstate_8be2vx$ = null;
    this.istate_8be2vx$ = null;
    this.data_type_8be2vx$ = 0;
  }
  ZStream.prototype.inflateInit_6taknv$ = function (nowrap) {
    return this.inflateInit_fzusl$(ZStream$Companion_getInstance().DEF_WBITS_0, nowrap);
  };
  ZStream.prototype.inflateInit_9kl6u2$ = function (wrapperType) {
    return this.inflateInit_eqw6z4$(ZStream$Companion_getInstance().DEF_WBITS_0, wrapperType);
  };
  ZStream.prototype.inflateInit_eqw6z4$ = function (w, wrapperType) {
    var w_0 = w;
    var nowrap = false;
    if (equals(wrapperType, JZlib_getInstance().W_NONE))
      nowrap = true;
    else if (equals(wrapperType, JZlib_getInstance().W_GZIP))
      w_0 = w_0 + 16 | 0;
    else if (equals(wrapperType, JZlib_getInstance().W_ANY))
      w_0 = w_0 | Inflate$Companion_getInstance().INFLATE_ANY;
    else
      equals(wrapperType, JZlib_getInstance().W_ZLIB);
    return this.inflateInit_fzusl$(w_0, nowrap);
  };
  ZStream.prototype.inflateInit_fzusl$ = function (w, nowrap) {
    if (w === void 0)
      w = ZStream$Companion_getInstance().DEF_WBITS_0;
    if (nowrap === void 0)
      nowrap = false;
    this.istate_8be2vx$ = new Inflate(this);
    return ensureNotNull(this.istate_8be2vx$).inflateInit_za3lpa$(nowrap ? -w : w);
  };
  ZStream.prototype.inflate_za3lpa$ = function (f) {
    return this.istate_8be2vx$ == null ? ZStream$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflate_za3lpa$(f);
  };
  ZStream.prototype.inflateEnd = function () {
    return this.istate_8be2vx$ == null ? ZStream$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflateEnd();
  };
  ZStream.prototype.inflateSync = function () {
    return this.istate_8be2vx$ == null ? ZStream$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflateSync();
  };
  ZStream.prototype.inflateSyncPoint = function () {
    return this.istate_8be2vx$ == null ? ZStream$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflateSyncPoint();
  };
  ZStream.prototype.inflateSetDictionary_ir89t6$ = function (dictionary, dictLength) {
    return this.istate_8be2vx$ == null ? ZStream$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.istate_8be2vx$).inflateSetDictionary_mj6st8$(dictionary, 0, dictLength);
  };
  ZStream.prototype.inflateFinished = function () {
    return ensureNotNull(this.istate_8be2vx$).mode === 12;
  };
  ZStream.prototype.deflateInit_fzusl$ = function (level, nowrap) {
    return this.deflateInit_ydzd23$(level, ZStream$Companion_getInstance().MAX_WBITS_0, nowrap);
  };
  ZStream.prototype.deflateInit_v9wb1s$ = function (level, bits, memlevel, wrapperType) {
    var bits_0 = bits;
    if (bits_0 < 9 || bits_0 > 15) {
      return ZStream$Companion_getInstance().Z_STREAM_ERROR_0;
    }
    if (equals(wrapperType, JZlib_getInstance().W_NONE))
      bits_0 = bits_0 * -1 | 0;
    else if (equals(wrapperType, JZlib_getInstance().W_GZIP))
      bits_0 = bits_0 + 16 | 0;
    else if (equals(wrapperType, JZlib_getInstance().W_ANY))
      return ZStream$Companion_getInstance().Z_STREAM_ERROR_0;
    else
      equals(wrapperType, JZlib_getInstance().W_ZLIB);
    return this.deflateInit_qt1dr2$(level, bits_0, memlevel);
  };
  ZStream.prototype.deflateInit_qt1dr2$ = function (level, bits, memlevel) {
    this.dstate_8be2vx$ = new Deflate(this);
    return ensureNotNull(this.dstate_8be2vx$).deflateInit_cub51b$(level, bits, memlevel);
  };
  ZStream.prototype.deflateInit_ydzd23$ = function (level, bits, nowrap) {
    if (bits === void 0)
      bits = ZStream$Companion_getInstance().MAX_WBITS_0;
    if (nowrap === void 0)
      nowrap = false;
    this.dstate_8be2vx$ = new Deflate(this);
    return ensureNotNull(this.dstate_8be2vx$).deflateInit_6xvm5r$(level, nowrap ? -bits : bits);
  };
  ZStream.prototype.deflate_za3lpa$ = function (flush) {
    var tmp$;
    if (this.dstate_8be2vx$ == null) {
      tmp$ = ZStream$Companion_getInstance().Z_STREAM_ERROR_0;
    }
     else
      tmp$ = ensureNotNull(this.dstate_8be2vx$).deflate_kcn2v3$(flush);
    return tmp$;
  };
  ZStream.prototype.deflateEnd = function () {
    if (this.dstate_8be2vx$ == null)
      return ZStream$Companion_getInstance().Z_STREAM_ERROR_0;
    var ret = ensureNotNull(this.dstate_8be2vx$).deflateEnd_8be2vx$();
    this.dstate_8be2vx$ = null;
    return ret;
  };
  ZStream.prototype.deflateParams_vux9f0$ = function (level, strategy) {
    return this.dstate_8be2vx$ == null ? ZStream$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.dstate_8be2vx$).deflateParams_6xvm5r$(level, strategy);
  };
  ZStream.prototype.deflateSetDictionary_mj6st8$ = function (dictionary, dictIndex, dictLength) {
    return this.dstate_8be2vx$ == null ? ZStream$Companion_getInstance().Z_STREAM_ERROR_0 : ensureNotNull(this.dstate_8be2vx$).deflateSetDictionary_idiqg2$(dictionary, dictIndex, dictLength);
  };
  ZStream.prototype.flush_pending_8be2vx$ = function () {
    var tmp$, tmp$_0;
    var len = ensureNotNull(this.dstate_8be2vx$).pending_8be2vx$;
    if (len > this.avail_out)
      len = this.avail_out;
    if (len === 0)
      return;
    ensureNotNull(this.dstate_8be2vx$).pending_buf_8be2vx$.length <= ensureNotNull(this.dstate_8be2vx$).pending_out_8be2vx$ || ensureNotNull(this.next_out).length <= this.next_out_index || ensureNotNull(this.dstate_8be2vx$).pending_buf_8be2vx$.length < (ensureNotNull(this.dstate_8be2vx$).pending_out_8be2vx$ + len | 0) || ensureNotNull(this.next_out).length < (this.next_out_index + len | 0);
    var src = ensureNotNull(this.dstate_8be2vx$).pending_buf_8be2vx$;
    var srcPos = ensureNotNull(this.dstate_8be2vx$).pending_out_8be2vx$;
    var dst = ensureNotNull(this.next_out);
    var dstPos = this.next_out_index;
    dst.set(src.subarray(srcPos, srcPos + len | 0), dstPos);
    this.next_out_index = this.next_out_index + len | 0;
    tmp$ = ensureNotNull(this.dstate_8be2vx$);
    tmp$.pending_out_8be2vx$ = tmp$.pending_out_8be2vx$ + len | 0;
    this.total_out = this.total_out.add(Kotlin.Long.fromInt(len));
    this.avail_out = this.avail_out - len | 0;
    tmp$_0 = ensureNotNull(this.dstate_8be2vx$);
    tmp$_0.pending_8be2vx$ = tmp$_0.pending_8be2vx$ - len | 0;
    if (ensureNotNull(this.dstate_8be2vx$).pending_8be2vx$ === 0) {
      ensureNotNull(this.dstate_8be2vx$).pending_out_8be2vx$ = 0;
    }
  };
  ZStream.prototype.read_buf_qibw1t$ = function (buf, start, size) {
    var len = this.avail_in;
    if (len > size)
      len = size;
    if (len === 0)
      return 0;
    this.avail_in = this.avail_in - len | 0;
    if (ensureNotNull(this.dstate_8be2vx$).wrap_8be2vx$ !== 0) {
      this.adler.update_mj6st8$(ensureNotNull(this.next_in), this.next_in_index, len);
    }
    var srcPos = this.next_in_index;
    buf.set(ensureNotNull(this.next_in).subarray(srcPos, srcPos + len | 0), start);
    this.next_in_index = this.next_in_index + len | 0;
    this.total_in = this.total_in.add(Kotlin.Long.fromInt(len));
    return len;
  };
  ZStream.prototype.getAdler = function () {
    return this.adler.value;
  };
  ZStream.prototype.free = function () {
    this.next_in = null;
    this.next_out = null;
    this.msg = null;
  };
  ZStream.prototype.setOutput_mj6st8$ = function (buf, off, len) {
    if (off === void 0)
      off = 0;
    if (len === void 0)
      len = buf.length;
    this.next_out = buf;
    this.next_out_index = off;
    this.avail_out = len;
  };
  ZStream.prototype.setInput_1fhb37$ = function (buf, append) {
    this.setInput_exhmhv$(buf, 0, buf.length, append);
  };
  ZStream.prototype.setInput_exhmhv$ = function (buf, off, len, append) {
    if (off === void 0)
      off = 0;
    if (len === void 0)
      len = buf.length;
    if (append === void 0)
      append = false;
    if (len <= 0 && append && this.next_in != null)
      return;
    if (this.avail_in > 0 && append) {
      var tmp = new Int8Array(this.avail_in + len | 0);
      var srcPos = this.next_in_index;
      tmp.set(ensureNotNull(this.next_in).subarray(srcPos, srcPos + this.avail_in | 0), 0);
      var dstPos = this.avail_in;
      tmp.set(buf.subarray(off, off + len | 0), dstPos);
      this.next_in = tmp;
      this.next_in_index = 0;
      this.avail_in = this.avail_in + len | 0;
    }
     else {
      this.next_in = buf;
      this.next_in_index = off;
      this.avail_in = len;
    }
  };
  ZStream.prototype.end = function () {
    return ZStream$Companion_getInstance().Z_OK_0;
  };
  ZStream.prototype.finished = function () {
    return false;
  };
  function ZStream$Companion() {
    ZStream$Companion_instance = this;
    this.MAX_WBITS_0 = 15;
    this.DEF_WBITS_0 = this.MAX_WBITS_0;
    this.Z_NO_FLUSH_0 = 0;
    this.Z_PARTIAL_FLUSH_0 = 1;
    this.Z_SYNC_FLUSH_0 = 2;
    this.Z_FULL_FLUSH_0 = 3;
    this.Z_FINISH_0 = 4;
    this.MAX_MEM_LEVEL_0 = 9;
    this.Z_OK_0 = 0;
    this.Z_STREAM_END_0 = 1;
    this.Z_NEED_DICT_0 = 2;
    this.Z_ERRNO_0 = -1;
    this.Z_STREAM_ERROR_0 = -2;
    this.Z_DATA_ERROR_0 = -3;
    this.Z_MEM_ERROR_0 = -4;
    this.Z_BUF_ERROR_0 = -5;
    this.Z_VERSION_ERROR_0 = -6;
  }
  ZStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ZStream$Companion_instance = null;
  function ZStream$Companion_getInstance() {
    if (ZStream$Companion_instance === null) {
      new ZStream$Companion();
    }
    return ZStream$Companion_instance;
  }
  ZStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZStream',
    interfaces: []
  };
  function ZStreamException(s) {
    Exception.call(this, s);
    this.name = 'ZStreamException';
  }
  ZStreamException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZStreamException',
    interfaces: [Exception]
  };
  var arraycopy = defineInlineFunction('kzlib-js.com.soywiz.kzlib.arraycopy_lwkm2r$', function (src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  });
  var arraycopy_0 = defineInlineFunction('kzlib-js.com.soywiz.kzlib.arraycopy_3jsevz$', function (src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  });
  Object.defineProperty(Adler32, 'Companion', {
    get: Adler32$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kzlib = package$soywiz.kzlib || (package$soywiz.kzlib = {});
  package$kzlib.Adler32 = Adler32;
  $$importsForInline$$['kzlib-js'] = _;
  package$kzlib.ByteArrayInputStream_init_fqrh44$ = ByteArrayInputStream_init;
  package$kzlib.ByteArrayInputStream_init_mj6st8$ = ByteArrayInputStream_init_0;
  package$kzlib.ByteArrayInputStream = ByteArrayInputStream;
  package$kzlib.ByteArrayOutputStream = ByteArrayOutputStream;
  Object.defineProperty(CRC32, 'Companion', {
    get: CRC32$Companion_getInstance
  });
  package$kzlib.CRC32 = CRC32;
  package$kzlib.Checksum = Checksum;
  Deflate.Config = Deflate$Config;
  Object.defineProperty(Deflate, 'Companion', {
    get: Deflate$Companion_getInstance
  });
  package$kzlib.Deflate = Deflate;
  Object.defineProperty(Deflater, 'Companion', {
    get: Deflater$Companion_getInstance
  });
  package$kzlib.Deflater_init = Deflater_init;
  package$kzlib.Deflater_init_fzusl$ = Deflater_init_0;
  package$kzlib.Deflater_init_ydzd23$ = Deflater_init_1;
  package$kzlib.Deflater_init_v9wb1s$ = Deflater_init_2;
  package$kzlib.Deflater_init_qt1dr2$ = Deflater_init_3;
  package$kzlib.Deflater = Deflater;
  Object.defineProperty(DeflaterOutputStream, 'Companion', {
    get: DeflaterOutputStream$Companion_getInstance
  });
  package$kzlib.DeflaterOutputStream_init_bip3kh$ = DeflaterOutputStream_init;
  package$kzlib.DeflaterOutputStream = DeflaterOutputStream;
  package$kzlib.FilterInputStream = FilterInputStream;
  package$kzlib.GZIPException = GZIPException;
  Object.defineProperty(GZIPHeader, 'Companion', {
    get: GZIPHeader$Companion_getInstance
  });
  package$kzlib.GZIPHeader = GZIPHeader;
  package$kzlib.GZIPInputStream_init_rsi46j$ = GZIPInputStream_init;
  package$kzlib.GZIPInputStream = GZIPInputStream;
  package$kzlib.GZIPOutputStream_init_pkc7q0$ = GZIPOutputStream_init;
  package$kzlib.GZIPOutputStream = GZIPOutputStream;
  package$kzlib.IOException = IOException;
  package$kzlib.EOFException = EOFException;
  Object.defineProperty(InfBlocks, 'Companion', {
    get: InfBlocks$Companion_getInstance
  });
  package$kzlib.InfBlocks = InfBlocks;
  Object.defineProperty(InfCodes, 'Companion', {
    get: InfCodes$Companion_getInstance
  });
  package$kzlib.InfCodes = InfCodes;
  Object.defineProperty(InfTree, 'Companion', {
    get: InfTree$Companion_getInstance
  });
  package$kzlib.InfTree = InfTree;
  Inflate.Return = Inflate$Return;
  Object.defineProperty(Inflate, 'Companion', {
    get: Inflate$Companion_getInstance
  });
  package$kzlib.Inflate = Inflate;
  Object.defineProperty(Inflater, 'Companion', {
    get: Inflater$Companion_getInstance
  });
  package$kzlib.Inflater_init = Inflater_init;
  package$kzlib.Inflater_init_9kl6u2$ = Inflater_init_0;
  package$kzlib.Inflater_init_eqw6z4$ = Inflater_init_1;
  package$kzlib.Inflater_init_6taknv$ = Inflater_init_2;
  package$kzlib.Inflater_init_fzusl$ = Inflater_init_3;
  package$kzlib.Inflater = Inflater;
  Object.defineProperty(InflaterInputStream, 'Companion', {
    get: InflaterInputStream$Companion_getInstance
  });
  package$kzlib.InflaterInputStream_init_yilqc5$ = InflaterInputStream_init;
  package$kzlib.InflaterInputStream = InflaterInputStream;
  package$kzlib.InputStream = InputStream;
  package$kzlib.toSimpleByteArray_pdl1vz$ = toSimpleByteArray;
  package$kzlib.toSimpleString_964n91$ = toSimpleString;
  Object.defineProperty(JZlib$WrapperType, 'NONE', {
    get: JZlib$WrapperType$NONE_getInstance
  });
  Object.defineProperty(JZlib$WrapperType, 'ZLIB', {
    get: JZlib$WrapperType$ZLIB_getInstance
  });
  Object.defineProperty(JZlib$WrapperType, 'GZIP', {
    get: JZlib$WrapperType$GZIP_getInstance
  });
  Object.defineProperty(JZlib$WrapperType, 'ANY', {
    get: JZlib$WrapperType$ANY_getInstance
  });
  JZlib.prototype.WrapperType = JZlib$WrapperType;
  Object.defineProperty(package$kzlib, 'JZlib', {
    get: JZlib_getInstance
  });
  Object.defineProperty(package$kzlib, 'KZlib', {
    get: KZlib_getInstance
  });
  package$kzlib.inflate_571gdi$ = inflate;
  package$kzlib.deflate_v6bsu2$ = deflate;
  Object.defineProperty(package$kzlib, 'KZLIB_VERSION_8be2vx$', {
    get: function () {
      return KZLIB_VERSION;
    }
  });
  package$kzlib.OutputStream = OutputStream;
  package$kzlib.FilterOutputStream = FilterOutputStream;
  Object.defineProperty(StaticTree, 'Companion', {
    get: StaticTree$Companion_getInstance
  });
  package$kzlib.StaticTree = StaticTree;
  package$kzlib.copyTo_l2iwjg$ = copyTo;
  Object.defineProperty(Tree, 'Companion', {
    get: Tree$Companion_getInstance
  });
  package$kzlib.Tree = Tree;
  package$kzlib.ZInputStream_init_yilqc5$ = ZInputStream_init;
  package$kzlib.ZInputStream_init_csr92q$ = ZInputStream_init_0;
  package$kzlib.ZInputStream = ZInputStream;
  package$kzlib.ZOutputStream_init_bip3kh$ = ZOutputStream_init;
  package$kzlib.ZOutputStream_init_pkc7q0$ = ZOutputStream_init_0;
  package$kzlib.ZOutputStream = ZOutputStream;
  Object.defineProperty(ZStream, 'Companion', {
    get: ZStream$Companion_getInstance
  });
  package$kzlib.ZStream = ZStream;
  package$kzlib.ZStreamException = ZStreamException;
  package$kzlib.arraycopy_lwkm2r$ = arraycopy;
  package$kzlib.arraycopy_3jsevz$ = arraycopy_0;
  KZLIB_VERSION = '0.3.1';
  Kotlin.defineModule('kzlib-js', _);
  return _;
}));

//# sourceMappingURL=kzlib-js.js.map
