(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmem-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmem-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'krypto-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'krypto-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'krypto-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'krypto-js'.");
    }
    root['krypto-js'] = factory(typeof this['krypto-js'] === 'undefined' ? {} : this['krypto-js'], kotlin, this['kmem-js']);
  }
}(this, function (_, Kotlin, $module$kmem_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toByte = Kotlin.toByte;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var UByteArray = $module$kmem_js.com.soywiz.kmem.UByteArray;
  var numberToInt = Kotlin.numberToInt;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var write32_be = $module$kmem_js.com.soywiz.kmem.write32_be_ietg8x$;
  function AES(keyWords) {
    AES$Companion_getInstance();
    this.keyWords = keyWords;
    this.keySize = this.keyWords.length;
    this.numRounds = this.keySize + 6 | 0;
    this.ksRows = (this.numRounds + 1 | 0) * 4 | 0;
    this.keySchedule_0 = new Int32Array(this.ksRows);
    this.invKeySchedule_0 = new Int32Array(this.ksRows);
    var tmp$, tmp$_0;
    tmp$ = this.ksRows;
    for (var ksRow = 0; ksRow < tmp$; ksRow++) {
      if (ksRow < this.keySize) {
        this.keySchedule_0[ksRow] = this.keyWords[ksRow];
      }
       else {
        var t = this.keySchedule_0[ksRow - 1 | 0];
        if (0 === ksRow % this.keySize) {
          t = t << 8 | t >>> 24;
          t = AES$Companion_getInstance().SBOX_0[t >>> 24] << 24 | AES$Companion_getInstance().SBOX_0[t >>> 16 & 255] << 16 | AES$Companion_getInstance().SBOX_0[t >>> 8 & 255] << 8 | AES$Companion_getInstance().SBOX_0[t & 255];
          t = t ^ AES$Companion_getInstance().RCON_0[ksRow / this.keySize | 0 | 0] << 24;
        }
         else if (this.keySize > 6 && ksRow % this.keySize === 4) {
          t = AES$Companion_getInstance().SBOX_0[t >>> 24] << 24 | AES$Companion_getInstance().SBOX_0[t >>> 16 & 255] << 16 | AES$Companion_getInstance().SBOX_0[t >>> 8 & 255] << 8 | AES$Companion_getInstance().SBOX_0[t & 255];
        }
        this.keySchedule_0[ksRow] = this.keySchedule_0[ksRow - this.keySize | 0] ^ t;
      }
    }
    tmp$_0 = this.ksRows;
    for (var invKsRow = 0; invKsRow < tmp$_0; invKsRow++) {
      var ksRow_0 = this.ksRows - invKsRow | 0;
      var t_0 = invKsRow % 4 !== 0 ? this.keySchedule_0[ksRow_0] : this.keySchedule_0[ksRow_0 - 4 | 0];
      this.invKeySchedule_0[invKsRow] = invKsRow < 4 || ksRow_0 <= 4 ? t_0 : AES$Companion_getInstance().INV_SUB_MIX_0_0[AES$Companion_getInstance().SBOX_0[t_0 >>> 24]] ^ AES$Companion_getInstance().INV_SUB_MIX_1_0[AES$Companion_getInstance().SBOX_0[t_0 >>> 16 & 255]] ^ AES$Companion_getInstance().INV_SUB_MIX_2_0[AES$Companion_getInstance().SBOX_0[t_0 >>> 8 & 255]] ^ AES$Companion_getInstance().INV_SUB_MIX_3_0[AES$Companion_getInstance().SBOX_0[t_0 & 255]];
    }
  }
  AES.prototype.encryptBlock_u4kcgn$ = function (M, offset) {
    this.doCryptBlock_0(M, offset, this.keySchedule_0, AES$Companion_getInstance().SUB_MIX_0_0, AES$Companion_getInstance().SUB_MIX_1_0, AES$Companion_getInstance().SUB_MIX_2_0, AES$Companion_getInstance().SUB_MIX_3_0, AES$Companion_getInstance().SBOX_0);
  };
  AES.prototype.decryptBlock_u4kcgn$ = function (M, offset) {
    var t = M[offset + 1 | 0];
    M[offset + 1 | 0] = M[offset + 3 | 0];
    M[offset + 3 | 0] = t;
    this.doCryptBlock_0(M, offset, this.invKeySchedule_0, AES$Companion_getInstance().INV_SUB_MIX_0_0, AES$Companion_getInstance().INV_SUB_MIX_1_0, AES$Companion_getInstance().INV_SUB_MIX_2_0, AES$Companion_getInstance().INV_SUB_MIX_3_0, AES$Companion_getInstance().INV_SBOX_0);
    t = M[offset + 1 | 0];
    M[offset + 1 | 0] = M[offset + 3 | 0];
    M[offset + 3 | 0] = t;
  };
  AES.prototype.doCryptBlock_0 = function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var s0 = M[offset + 0 | 0] ^ keySchedule[0];
    var s1 = M[offset + 1 | 0] ^ keySchedule[1];
    var s2 = M[offset + 2 | 0] ^ keySchedule[2];
    var s3 = M[offset + 3 | 0] ^ keySchedule[3];
    var ksRow = 4;
    tmp$ = this.numRounds;
    for (var round = 1; round < tmp$; round++) {
      var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[s3 >>> 0 & 255] ^ keySchedule[tmp$_0 = ksRow, ksRow = tmp$_0 + 1 | 0, tmp$_0];
      var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[s0 >>> 0 & 255] ^ keySchedule[tmp$_1 = ksRow, ksRow = tmp$_1 + 1 | 0, tmp$_1];
      var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[s1 >>> 0 & 255] ^ keySchedule[tmp$_2 = ksRow, ksRow = tmp$_2 + 1 | 0, tmp$_2];
      var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[s2 >>> 0 & 255] ^ keySchedule[tmp$_3 = ksRow, ksRow = tmp$_3 + 1 | 0, tmp$_3];
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }
    var t0_0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[s3 >>> 0 & 255]) ^ keySchedule[tmp$_4 = ksRow, ksRow = tmp$_4 + 1 | 0, tmp$_4];
    var t1_0 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[s0 >>> 0 & 255]) ^ keySchedule[tmp$_5 = ksRow, ksRow = tmp$_5 + 1 | 0, tmp$_5];
    var t2_0 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[s1 >>> 0 & 255]) ^ keySchedule[tmp$_6 = ksRow, ksRow = tmp$_6 + 1 | 0, tmp$_6];
    var t3_0 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[s2 >>> 0 & 255]) ^ keySchedule[tmp$_7 = ksRow, ksRow = tmp$_7 + 1 | 0, tmp$_7];
    M[offset + 0 | 0] = t0_0;
    M[offset + 1 | 0] = t1_0;
    M[offset + 2 | 0] = t2_0;
    M[offset + 3 | 0] = t3_0;
  };
  function AES$Companion() {
    AES$Companion_instance = this;
    this.SBOX_0 = new Int32Array(256);
    this.INV_SBOX_0 = new Int32Array(256);
    this.SUB_MIX_0_0 = new Int32Array(256);
    this.SUB_MIX_1_0 = new Int32Array(256);
    this.SUB_MIX_2_0 = new Int32Array(256);
    this.SUB_MIX_3_0 = new Int32Array(256);
    this.INV_SUB_MIX_0_0 = new Int32Array(256);
    this.INV_SUB_MIX_1_0 = new Int32Array(256);
    this.INV_SUB_MIX_2_0 = new Int32Array(256);
    this.INV_SUB_MIX_3_0 = new Int32Array(256);
    this.RCON_0 = new Int32Array([0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]);
    var d = new Int32Array(256);
    for (var i = 0; i < 256; i++) {
      d[i] = i << 1;
      if (i >= 128)
        d[i] = d[i] ^ 283;
    }
    var x = 0;
    var xi = 0;
    for (var i_0 = 0; i_0 < 256; i_0++) {
      var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
      sx = sx >>> 8 ^ sx & 255 ^ 99;
      this.SBOX_0[x] = sx;
      this.INV_SBOX_0[sx] = x;
      var x2 = d[x];
      var x4 = d[x2];
      var x8 = d[x4];
      var t;
      t = (d[sx] * 257 | 0) ^ Kotlin.imul(sx, 16843008);
      this.SUB_MIX_0_0[x] = t << 24 | t >>> 8;
      this.SUB_MIX_1_0[x] = t << 16 | t >>> 16;
      this.SUB_MIX_2_0[x] = t << 8 | t >>> 24;
      this.SUB_MIX_3_0[x] = t << 0;
      t = Kotlin.imul(x8, 16843009) ^ (x4 * 65537 | 0) ^ (x2 * 257 | 0) ^ Kotlin.imul(x, 16843008);
      this.INV_SUB_MIX_0_0[sx] = t << 24 | t >>> 8;
      this.INV_SUB_MIX_1_0[sx] = t << 16 | t >>> 16;
      this.INV_SUB_MIX_2_0[sx] = t << 8 | t >>> 24;
      this.INV_SUB_MIX_3_0[sx] = t << 0;
      if (x === 0) {
        x = 1;
        xi = 1;
      }
       else {
        x = x2 ^ d[d[d[x8 ^ x2]]];
        xi = xi ^ d[d[xi]];
      }
    }
  }
  AES$Companion.prototype.toIntArray_0 = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var out = new Int32Array($receiver.length / 4 | 0);
    var m = 0;
    for (var n = 0; n < out.length; n++) {
      var v3 = $receiver[tmp$ = m, m = tmp$ + 1 | 0, tmp$] & 255;
      var v2 = $receiver[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] & 255;
      var v1 = $receiver[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] & 255;
      var v0 = $receiver[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] & 255;
      out[n] = v0 << 0 | v1 << 8 | v2 << 16 | v3 << 24;
    }
    return out;
  };
  AES$Companion.prototype.toByteArray_0 = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var out = new Int8Array($receiver.length * 4 | 0);
    var m = 0;
    for (var n = 0; n < $receiver.length; n++) {
      var v = $receiver[n];
      out[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = toByte(v >> 24 & 255);
      out[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = toByte(v >> 16 & 255);
      out[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = toByte(v >> 8 & 255);
      out[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = toByte(v >> 0 & 255);
    }
    return out;
  };
  AES$Companion.prototype.encryptEes128Cbc_r9qwmk$ = function (data, key) {
    var aes = AES_init(key);
    var words = this.toIntArray_0(data);
    var wordsLength = words.length;
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    for (var n = 0; n < wordsLength; n += 4) {
      var t0 = words[n + 0 | 0];
      var t1 = words[n + 1 | 0];
      var t2 = words[n + 2 | 0];
      var t3 = words[n + 3 | 0];
      aes.encryptBlock_u4kcgn$(words, n);
      words[n + 0 | 0] = words[n + 0 | 0] ^ s0;
      words[n + 1 | 0] = words[n + 1 | 0] ^ s1;
      words[n + 2 | 0] = words[n + 2 | 0] ^ s2;
      words[n + 3 | 0] = words[n + 3 | 0] ^ s3;
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }
    return this.toByteArray_0(words);
  };
  AES$Companion.prototype.decryptAes128Cbc_r9qwmk$ = function (data, key) {
    var aes = AES_init(key);
    var dataWords = this.toIntArray_0(data);
    var wordsLength = dataWords.length;
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var s3 = 0;
    for (var n = 0; n < wordsLength; n += 4) {
      var t0 = dataWords[n + 0 | 0];
      var t1 = dataWords[n + 1 | 0];
      var t2 = dataWords[n + 2 | 0];
      var t3 = dataWords[n + 3 | 0];
      aes.decryptBlock_u4kcgn$(dataWords, n);
      dataWords[n + 0 | 0] = dataWords[n + 0 | 0] ^ s0;
      dataWords[n + 1 | 0] = dataWords[n + 1 | 0] ^ s1;
      dataWords[n + 2 | 0] = dataWords[n + 2 | 0] ^ s2;
      dataWords[n + 3 | 0] = dataWords[n + 3 | 0] ^ s3;
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }
    return this.toByteArray_0(dataWords);
  };
  AES$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AES$Companion_instance = null;
  function AES$Companion_getInstance() {
    if (AES$Companion_instance === null) {
      new AES$Companion();
    }
    return AES$Companion_instance;
  }
  AES.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AES',
    interfaces: []
  };
  function AES_init(key, $this) {
    $this = $this || Object.create(AES.prototype);
    AES.call($this, AES$Companion_getInstance().toIntArray_0(key));
    return $this;
  }
  function Krypto() {
    Krypto_instance = this;
    this.VERSION = KRYPTO_VERSION;
  }
  Krypto.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Krypto',
    interfaces: []
  };
  var Krypto_instance = null;
  function Krypto_getInstance() {
    if (Krypto_instance === null) {
      new Krypto();
    }
    return Krypto_instance;
  }
  var KRYPTO_VERSION;
  function SHA1() {
    SHA1_instance = this;
    this.H0_0 = Kotlin.Long.fromInt(1732584193).toInt();
    this.H1_0 = (new Kotlin.Long(-271733879, 0)).toInt();
    this.H2_0 = (new Kotlin.Long(-1732584194, 0)).toInt();
    this.H3_0 = Kotlin.Long.fromInt(271733878).toInt();
    this.H4_0 = (new Kotlin.Long(-1009589776, 0)).toInt();
    this.K0020_0 = Kotlin.Long.fromInt(1518500249).toInt();
    this.K2040_0 = Kotlin.Long.fromInt(1859775393).toInt();
    this.K4060_0 = (new Kotlin.Long(-1894007588, 0)).toInt();
    this.K6080_0 = (new Kotlin.Long(-899497514, 0)).toInt();
  }
  var Int32Array_init = Int32Array;
  function SHA1$Uint32ArrayBigEndian(bytes) {
    this.bytes = bytes;
    var $receiver = this.bytes.data.buffer;
    this.ints = new Int32Array_init($receiver, 0 * 4 | 0, ($receiver.byteLength / 4 | 0) - 0 | 0);
  }
  SHA1$Uint32ArrayBigEndian.prototype.get_za3lpa$ = function (index) {
    return SHA1_getInstance().reverseBytes_0(this.ints[index]);
  };
  SHA1$Uint32ArrayBigEndian.prototype.set_vux9f0$ = function (index, value) {
    this.ints[index] = SHA1_getInstance().reverseBytes_0(value);
  };
  SHA1$Uint32ArrayBigEndian.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Uint32ArrayBigEndian',
    interfaces: []
  };
  function SHA1$SHA1$Uint32ArrayBigEndian_init(length, $this) {
    $this = $this || Object.create(SHA1$Uint32ArrayBigEndian.prototype);
    SHA1$Uint32ArrayBigEndian.call($this, new UByteArray(new Int8Array(length * 4 | 0)));
    return $this;
  }
  var Math_0 = Math;
  SHA1.prototype.hash_fqrh44$ = function (input) {
    var tmp$, tmp$_0, tmp$_1;
    var uinput = new UByteArray(input);
    var inputBits = Kotlin.Long.fromInt(uinput.size).multiply(Kotlin.Long.fromInt(8));
    var minBits = inputBits.add(Kotlin.Long.fromInt(65));
    var x = minBits.toNumber() / 512.0;
    var bits = numberToInt(Math_0.ceil(x)) << 9;
    var bytes = bits / 8 | 0;
    var slen = bytes / 4 | 0;
    var s = SHA1$SHA1$Uint32ArrayBigEndian_init(slen);
    var w = new Int32Array(80);
    var h0 = {v: this.H0_0};
    var h1 = {v: this.H1_0};
    var h2 = {v: this.H2_0};
    var h3 = {v: this.H3_0};
    var h4 = {v: this.H4_0};
    tmp$ = uinput.size;
    for (var i = 0; i < tmp$; i++) {
      var tmp$_2 = s.bytes;
      var v = uinput.data[i] & 255;
      tmp$_2.data[i] = toByte(v);
    }
    var $this = s.bytes;
    var n = uinput.size;
    $this.data[n] = toByte(128);
    s.set_vux9f0$(slen - 2 | 0, inputBits.shiftRightUnsigned(32).toInt());
    s.set_vux9f0$(slen - 1 | 0, inputBits.shiftRightUnsigned(0).toInt());
    for (var i_0 = 0; i_0 < slen; i_0 += 16) {
      for (var j = 0; j < 16; j++)
        w[j] = s.get_za3lpa$(i_0 + j | 0);
      for (var j_0 = 16; j_0 < 80; j_0++)
        w[j_0] = this.rotateLeft_0(w[j_0 - 3 | 0] ^ w[j_0 - 8 | 0] ^ w[j_0 - 14 | 0] ^ w[j_0 - 16 | 0], 1);
      var a = h0.v;
      var b = h1.v;
      var c = h2.v;
      var d = h3.v;
      var e = h4.v;
      for (var j_1 = 0; j_1 < 80; j_1++) {
        tmp$_1 = this.rotateLeft_0(a, 5) + e + w[j_1] | 0;
        if (until(0, 20).contains_mef7kx$(j_1))
          tmp$_0 = (b & c | ~b & d) + this.K0020_0 | 0;
        else if (until(20, 40).contains_mef7kx$(j_1))
          tmp$_0 = (b ^ c ^ d) + this.K2040_0 | 0;
        else if (until(40, 60).contains_mef7kx$(j_1))
          tmp$_0 = (b & c ^ b & d ^ c & d) + this.K4060_0 | 0;
        else
          tmp$_0 = (b ^ c ^ d) + this.K6080_0 | 0;
        var temp = tmp$_1 + tmp$_0 | 0;
        e = d;
        d = c;
        c = this.rotateLeft_0(b, 30);
        b = a;
        a = temp;
      }
      h0.v = h0.v + a | 0;
      h1.v = h1.v + b | 0;
      h2.v = h2.v + c | 0;
      h3.v = h3.v + d | 0;
      h4.v = h4.v + e | 0;
    }
    var $receiver = new Int8Array(4 * 5 | 0);
    write32_be($receiver, 0, h0.v);
    write32_be($receiver, 4, h1.v);
    write32_be($receiver, 8, h2.v);
    write32_be($receiver, 12, h3.v);
    write32_be($receiver, 16, h4.v);
    return $receiver;
  };
  SHA1.prototype.rotateLeft_0 = function ($receiver, bits) {
    return $receiver << bits | $receiver >>> 32 - bits;
  };
  SHA1.prototype.reverseBytes_0 = function ($receiver) {
    var v0 = $receiver >>> 0 & 255;
    var v1 = $receiver >>> 8 & 255;
    var v2 = $receiver >>> 16 & 255;
    var v3 = $receiver >>> 24 & 255;
    return v0 << 24 | v1 << 16 | v2 << 8 | v3 << 0;
  };
  SHA1.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SHA1',
    interfaces: []
  };
  var SHA1_instance = null;
  function SHA1_getInstance() {
    if (SHA1_instance === null) {
      new SHA1();
    }
    return SHA1_instance;
  }
  Object.defineProperty(AES, 'Companion', {
    get: AES$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$krypto = package$soywiz.krypto || (package$soywiz.krypto = {});
  package$krypto.AES_init_fqrh44$ = AES_init;
  package$krypto.AES = AES;
  Object.defineProperty(package$krypto, 'Krypto', {
    get: Krypto_getInstance
  });
  Object.defineProperty(package$krypto, 'KRYPTO_VERSION_8be2vx$', {
    get: function () {
      return KRYPTO_VERSION;
    }
  });
  $$importsForInline$$['kmem-js'] = $module$kmem_js;
  Object.defineProperty(package$krypto, 'SHA1', {
    get: SHA1_getInstance
  });
  KRYPTO_VERSION = '0.4.0';
  Kotlin.defineModule('krypto-js', _);
  return _;
}));

//# sourceMappingURL=krypto-js.js.map
