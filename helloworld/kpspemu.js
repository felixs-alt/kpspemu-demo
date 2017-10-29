(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korge-js', 'korio-js', 'korma-js', 'korim-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korge-js'), require('korio-js'), require('korma-js'), require('korim-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kpspemu'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kpspemu'.");
    }
    if (typeof this['korge-js'] === 'undefined') {
      throw new Error("Error loading module 'kpspemu'. Its dependency 'korge-js' was not found. Please, check whether 'korge-js' is loaded prior to 'kpspemu'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'kpspemu'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'kpspemu'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'kpspemu'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'kpspemu'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'kpspemu'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'kpspemu'.");
    }
    root.kpspemu = factory(typeof kpspemu === 'undefined' ? {} : kpspemu, kotlin, this['korge-js'], this['korio-js'], this['korma-js'], this['korim-js']);
  }
}(this, function (_, Kotlin, $module$korge_js, $module$korio_js, $module$korma_js, $module$korim_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var korge = $module$korge_js.com.soywiz.korge;
  var AsyncInjector = $module$korio_js.com.soywiz.korio.inject.AsyncInjector;
  var getKClass = Kotlin.getKClass;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SizeInt = $module$korma_js.com.soywiz.korma.geom.SizeInt;
  var Module = $module$korge_js.com.soywiz.korge.scene.Module;
  var vfs = $module$korio_js.com.soywiz.korio.vfs;
  var util = $module$korio_js.com.soywiz.korio.util;
  var openSync = $module$korio_js.com.soywiz.korio.stream.openSync_m1iwyb$;
  var Unit = Kotlin.kotlin.Unit;
  var Bitmap32 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap32;
  var texture = $module$korge_js.com.soywiz.korge.view.texture_q2u7nr$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var image = $module$korge_js.com.soywiz.korge.view.image_knk7mb$;
  var Scene = $module$korge_js.com.soywiz.korge.scene.Scene;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var extract = $module$korio_js.com.soywiz.korio.util.extract_e4yvb3$;
  var format = $module$korio_js.com.soywiz.korio.lang.format_e33kwl$;
  var Exception = Kotlin.kotlin.Exception;
  var toString = Kotlin.toString;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var equals = Kotlin.equals;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var udiv = $module$korio_js.com.soywiz.korio.util.udiv_dqglrj$;
  var urem = $module$korio_js.com.soywiz.korio.util.urem_dqglrj$;
  var color = $module$korim_js.com.soywiz.korim.color;
  var throwUPAE = Kotlin.throwUPAE;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var sliceWithSize = $module$korio_js.com.soywiz.korio.stream.sliceWithSize_1r8368$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var lmapOf = $module$korio_js.com.soywiz.korio.ds.lmapOf_qfcya0$;
  var sliceWithSize_0 = $module$korio_js.com.soywiz.korio.stream.sliceWithSize_acdave$;
  var readStringz = $module$korio_js.com.soywiz.korio.stream.readStringz_4zsegu$;
  var readStringz_0 = $module$korio_js.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var readU8 = $module$korio_js.com.soywiz.korio.stream.readU8_p2awyq$;
  var readUByteArray = $module$korio_js.com.soywiz.korio.stream.readUByteArray_xpzb7k$;
  var readU16_le = $module$korio_js.com.soywiz.korio.stream.readU16_le_p2awyq$;
  var readS32_le = $module$korio_js.com.soywiz.korio.stream.readS32_le_p2awyq$;
  var readS16_le = $module$korio_js.com.soywiz.korio.stream.readS16_le_p2awyq$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var numberToInt = Kotlin.numberToInt;
  var nextAlignedTo = $module$korma_js.com.soywiz.korma.numeric.nextAlignedTo_dqglrj$;
  var until_0 = Kotlin.kotlin.ranges.until_ebnic$;
  var Error_0 = Kotlin.kotlin.Error;
  var copyTo = $module$korio_js.com.soywiz.korio.stream.copyTo_y2f6oo$;
  var readAll = $module$korio_js.com.soywiz.korio.stream.readAll_ucmi9i$;
  var slice = $module$korio_js.com.soywiz.korio.stream.slice_i2r7m7$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var write32_le = $module$korio_js.com.soywiz.korio.stream.write32_le_n5df9z$;
  var insert = $module$korio_js.com.soywiz.korio.util.insert_4684dr$;
  var throwNPE = Kotlin.throwNPE;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var getCallableRef = Kotlin.getCallableRef;
  var MtRand_init = $module$korma_js.com.soywiz.korma.random.MtRand_init_za3lpa$;
  var toByte = Kotlin.toByte;
  var sliceWithStart = $module$korio_js.com.soywiz.korio.stream.sliceWithStart_gezhyr$;
  var error = $module$korio_js.com.soywiz.korio.error;
  var SyncStreamBase = $module$korio_js.com.soywiz.korio.stream.SyncStreamBase;
  var SyncStream = $module$korio_js.com.soywiz.korio.stream.SyncStream;
  var toShort = Kotlin.toShort;
  var KorioNative$FastMemory = $module$korio_js.com.soywiz.korio.KorioNative.FastMemory;
  var LocalVfs = $module$korio_js.com.soywiz.korio.vfs.LocalVfs_61zpoe$;
  var toStringUnsigned = $module$korio_js.com.soywiz.korio.util.toStringUnsigned_dqglrj$;
  KpspemuModule.prototype = Object.create(Module.prototype);
  KpspemuModule.prototype.constructor = KpspemuModule;
  KpspemuMainScene.prototype = Object.create(Scene.prototype);
  KpspemuMainScene.prototype.constructor = KpspemuMainScene;
  InstructionEvaluator.prototype = Object.create(InstructionDecoder.prototype);
  InstructionEvaluator.prototype.constructor = InstructionEvaluator;
  InstructionOpcodeDecoder$ResultInstructionEvaluator.prototype = Object.create(InstructionEvaluator.prototype);
  InstructionOpcodeDecoder$ResultInstructionEvaluator.prototype.constructor = InstructionOpcodeDecoder$ResultInstructionEvaluator;
  Disassembler.prototype = Object.create(InstructionDecoder.prototype);
  Disassembler.prototype.constructor = Disassembler;
  InstructionInterpreter.prototype = Object.create(InstructionEvaluator.prototype);
  InstructionInterpreter.prototype.constructor = InstructionInterpreter;
  ElfType.prototype = Object.create(Enum.prototype);
  ElfType.prototype.constructor = ElfType;
  ElfMachine.prototype = Object.create(Enum.prototype);
  ElfMachine.prototype.constructor = ElfMachine;
  ElfPspModuleFlags.prototype = Object.create(Enum.prototype);
  ElfPspModuleFlags.prototype.constructor = ElfPspModuleFlags;
  ElfPspLibFlags.prototype = Object.create(Enum.prototype);
  ElfPspLibFlags.prototype.constructor = ElfPspLibFlags;
  ElfPspModuleNids.prototype = Object.create(Enum.prototype);
  ElfPspModuleNids.prototype.constructor = ElfPspModuleNids;
  ElfRelocType.prototype = Object.create(Enum.prototype);
  ElfRelocType.prototype.constructor = ElfRelocType;
  PixelFormat.prototype = Object.create(Enum.prototype);
  PixelFormat.prototype.constructor = PixelFormat;
  MemoryAnchor.prototype = Object.create(Enum.prototype);
  MemoryAnchor.prototype.constructor = MemoryAnchor;
  OutOfMemoryError.prototype = Object.create(Exception.prototype);
  OutOfMemoryError.prototype.constructor = OutOfMemoryError;
  UtilsForUser.prototype = Object.create(SceModule.prototype);
  UtilsForUser.prototype.constructor = UtilsForUser;
  sceCtrl.prototype = Object.create(SceModule.prototype);
  sceCtrl.prototype.constructor = sceCtrl;
  sceDisplay.prototype = Object.create(SceModule.prototype);
  sceDisplay.prototype.constructor = sceDisplay;
  DummyMemory.prototype = Object.create(Memory.prototype);
  DummyMemory.prototype.constructor = DummyMemory;
  TraceMemory.prototype = Object.create(Memory.prototype);
  TraceMemory.prototype.constructor = TraceMemory;
  openSync$ObjectLiteral.prototype = Object.create(SyncStreamBase.prototype);
  openSync$ObjectLiteral.prototype.constructor = openSync$ObjectLiteral;
  FastMemory.prototype = Object.create(Memory.prototype);
  FastMemory.prototype.constructor = FastMemory;
  SmallMemory.prototype = Object.create(Memory.prototype);
  SmallMemory.prototype.constructor = SmallMemory;
  function PspThread(mem, syscalls) {
    this.mem = mem;
    this.syscalls = syscalls;
    this.cpu = new CpuState(this.mem, this.syscalls);
  }
  PspThread.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PspThread',
    interfaces: []
  };
  function Emulator(syscalls, mem, display) {
    if (syscalls === void 0)
      syscalls = new SyscallManager();
    if (mem === void 0)
      mem = Memory$Companion_getInstance().invoke();
    if (display === void 0)
      display = new PspDisplay(mem);
    this.syscalls = syscalls;
    this.mem = mem;
    this.display = display;
    this.memoryManager = new MemoryManager();
    this.moduleManager = new ModuleManager(this);
    this.mainThread = new PspThread(this.mem, this.syscalls);
    this.cpu = this.mainThread.cpu;
    this.interpreter = new CpuInterpreter(this.cpu);
  }
  Emulator.prototype.frameStep = function () {
    this.display.dispatchVsync();
    this.interpreter.steps_za3lpa$(1000000);
  };
  Emulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Emulator',
    interfaces: []
  };
  function main(args) {
    Main_getInstance().main_kand9s$(args);
  }
  function Main() {
    Main_instance = this;
  }
  function Main$main$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$Main$main$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Main$main$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Main$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Main$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Main$main$lambda.prototype.constructor = Coroutine$Main$main$lambda;
  Coroutine$Main$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new KpspemuMainScene();
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
  Main.prototype.main_kand9s$ = function (args) {
    korge.Korge.invoke_lakzb2$(KpspemuModule_getInstance(), void 0, void 0, void 0, void 0, void 0, (new AsyncInjector()).mapPrototype_7g6y7r$(getKClass(KpspemuMainScene), Main$main$lambda));
  };
  Main.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Main',
    interfaces: []
  };
  var Main_instance = null;
  function Main_getInstance() {
    if (Main_instance === null) {
      new Main();
    }
    return Main_instance;
  }
  function KpspemuModule() {
    KpspemuModule_instance = this;
    Module.call(this);
    this.mainScene_x1qskp$_0 = getKClass(KpspemuMainScene);
    this.title_f8gi32$_0 = 'kpspemu';
  }
  Object.defineProperty(KpspemuModule.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_x1qskp$_0;
    }
  });
  Object.defineProperty(KpspemuModule.prototype, 'title', {
    get: function () {
      return this.title_f8gi32$_0;
    }
  });
  Object.defineProperty(KpspemuModule.prototype, 'size', {
    get: function () {
      return new SizeInt(480, 272);
    }
  });
  KpspemuModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KpspemuModule',
    interfaces: [Module]
  };
  var KpspemuModule_instance = null;
  function KpspemuModule_getInstance() {
    if (KpspemuModule_instance === null) {
      new KpspemuModule();
    }
    return KpspemuModule_instance;
  }
  function KpspemuMainScene() {
    Scene.call(this);
  }
  function KpspemuMainScene$sceneInit$lambda(this$KpspemuMainScene, closure$bmp) {
    return function () {
      return texture(this$KpspemuMainScene.views, closure$bmp);
    };
  }
  function KpspemuMainScene$sceneInit$lambda_0(closure$emu, closure$running, closure$bmp, closure$tex) {
    return function (it) {
      var $receiver = closure$emu;
      var closure$running_0 = closure$running;
      var closure$bmp_0 = closure$bmp;
      var closure$tex_0 = closure$tex;
      if (closure$running_0.v) {
        try {
          $receiver.frameStep();
          if ($receiver.display.rawDisplay) {
            $receiver.display.decodeToBitmap32_59u9qz$(closure$bmp_0);
            new PropertyMetadata('tex');
            closure$tex_0.value.update_hi0ws4$(closure$bmp_0);
          }
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            printStackTrace(e);
            closure$running_0.v = false;
          }
           else
            throw e;
        }
      }
      return Unit;
    };
  }
  KpspemuMainScene.prototype.sceneInit_f3yb8w$ = function (sceneView_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_f3yb8w$(this, sceneView_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneInit_f3yb8w$($this, sceneView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$sceneView = sceneView_0;
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
            var tmp$;
            if (util.OS.isJs)
              tmp$ = vfs.applicationVfs;
            else
              tmp$ = vfs.applicationVfs.get_61zpoe$('samples').jail();
            var samplesFolder = tmp$;
            this.state_0 = 2;
            this.result_0 = samplesFolder.get_61zpoe$('HelloWorldPSP.elf').readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var elfBytes = this.result_0;
            var $receiver = new Emulator(void 0, Memory$Companion_getInstance().invoke());
            registerNativeModules($receiver);
            loadElfAndSetRegisters($receiver, openSync(elfBytes));
            set_SP($receiver.cpu, 167772160);
            var emu = $receiver;
            var bmp = new Bitmap32(512, 272);
            var tex = lazy(KpspemuMainScene$sceneInit$lambda(this.$this, bmp));
            emu.interpreter.trace = false;
            var running = {v: true};
            this.local$sceneView.addUpdatable_b4k9x1$(KpspemuMainScene$sceneInit$lambda_0(emu, running, bmp, tex));
            var tmp$_0 = this.$this.views;
            new PropertyMetadata('tex');
            this.local$sceneView.plusAssign_l5rad2$(image(tmp$_0, tex.value));
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
  KpspemuMainScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KpspemuMainScene',
    interfaces: [Scene]
  };
  function get_K0($receiver) {
    return $receiver.r26;
  }
  function set_K0($receiver, value) {
    $receiver.r26 = value;
  }
  function get_K1($receiver) {
    return $receiver.r27;
  }
  function set_K1($receiver, value) {
    $receiver.r27 = value;
  }
  function get_GP($receiver) {
    return $receiver.r28;
  }
  function set_GP($receiver, value) {
    $receiver.r28 = value;
  }
  function get_SP($receiver) {
    return $receiver.r29;
  }
  function set_SP($receiver, value) {
    $receiver.r29 = value;
  }
  function get_FP($receiver) {
    return $receiver.r30;
  }
  function set_FP($receiver, value) {
    $receiver.r30 = value;
  }
  function get_RA($receiver) {
    return $receiver.r31;
  }
  function set_RA($receiver, value) {
    $receiver.r31 = value;
  }
  function CpuState(mem, syscalls) {
    if (syscalls === void 0)
      syscalls = new TraceSyscallHandler();
    this.mem = mem;
    this.syscalls = syscalls;
    this._R = new Int32Array(32);
    this.GPR = new CpuState$Gpr(this);
    this.IR = 0;
    this._PC = 0;
    this._nPC = 0;
    this.LO = 0;
    this.HI = 0;
    this.IC = 0;
  }
  Object.defineProperty(CpuState.prototype, 'r0', {
    get: function () {
      return 0;
    },
    set: function (value) {
    }
  });
  Object.defineProperty(CpuState.prototype, 'r1', {
    get: function () {
      return this._R[1];
    },
    set: function (value) {
      this._R[1] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r2', {
    get: function () {
      return this._R[2];
    },
    set: function (value) {
      this._R[2] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r3', {
    get: function () {
      return this._R[3];
    },
    set: function (value) {
      this._R[3] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r4', {
    get: function () {
      return this._R[4];
    },
    set: function (value) {
      this._R[4] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r5', {
    get: function () {
      return this._R[5];
    },
    set: function (value) {
      this._R[5] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r6', {
    get: function () {
      return this._R[6];
    },
    set: function (value) {
      this._R[6] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r7', {
    get: function () {
      return this._R[7];
    },
    set: function (value) {
      this._R[7] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r8', {
    get: function () {
      return this._R[8];
    },
    set: function (value) {
      this._R[8] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r9', {
    get: function () {
      return this._R[9];
    },
    set: function (value) {
      this._R[9] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r10', {
    get: function () {
      return this._R[10];
    },
    set: function (value) {
      this._R[10] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r11', {
    get: function () {
      return this._R[11];
    },
    set: function (value) {
      this._R[11] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r12', {
    get: function () {
      return this._R[12];
    },
    set: function (value) {
      this._R[12] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r13', {
    get: function () {
      return this._R[13];
    },
    set: function (value) {
      this._R[13] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r14', {
    get: function () {
      return this._R[14];
    },
    set: function (value) {
      this._R[14] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r15', {
    get: function () {
      return this._R[15];
    },
    set: function (value) {
      this._R[15] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r16', {
    get: function () {
      return this._R[16];
    },
    set: function (value) {
      this._R[16] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r17', {
    get: function () {
      return this._R[17];
    },
    set: function (value) {
      this._R[17] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r18', {
    get: function () {
      return this._R[18];
    },
    set: function (value) {
      this._R[18] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r19', {
    get: function () {
      return this._R[19];
    },
    set: function (value) {
      this._R[19] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r20', {
    get: function () {
      return this._R[20];
    },
    set: function (value) {
      this._R[20] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r21', {
    get: function () {
      return this._R[21];
    },
    set: function (value) {
      this._R[21] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r22', {
    get: function () {
      return this._R[22];
    },
    set: function (value) {
      this._R[22] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r23', {
    get: function () {
      return this._R[23];
    },
    set: function (value) {
      this._R[23] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r24', {
    get: function () {
      return this._R[24];
    },
    set: function (value) {
      this._R[24] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r25', {
    get: function () {
      return this._R[25];
    },
    set: function (value) {
      this._R[25] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r26', {
    get: function () {
      return this._R[26];
    },
    set: function (value) {
      this._R[26] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r27', {
    get: function () {
      return this._R[27];
    },
    set: function (value) {
      this._R[27] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r28', {
    get: function () {
      return this._R[28];
    },
    set: function (value) {
      this._R[28] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r29', {
    get: function () {
      return this._R[29];
    },
    set: function (value) {
      this._R[29] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r30', {
    get: function () {
      return this._R[30];
    },
    set: function (value) {
      this._R[30] = value;
    }
  });
  Object.defineProperty(CpuState.prototype, 'r31', {
    get: function () {
      return this._R[31];
    },
    set: function (value) {
      this._R[31] = value;
    }
  });
  CpuState.prototype.setPC_za3lpa$ = function (pc) {
    this._PC = pc;
    this._nPC = pc + 4 | 0;
  };
  CpuState.prototype.getPC = function () {
    return this._PC;
  };
  CpuState.prototype.jump_za3lpa$ = function (pc) {
    this._PC = pc;
    this._nPC = pc + 4 | 0;
  };
  CpuState.prototype.advance_pc_za3lpa$ = function (offset) {
    this._PC = this._nPC;
    this._nPC = this._nPC + offset | 0;
  };
  CpuState.prototype.getGpr_za3lpa$ = function (index) {
    return this._R[index & 31];
  };
  CpuState.prototype.setGpr_vux9f0$ = function (index, v) {
    if (index !== 0) {
      this._R[index & 31] = v;
    }
  };
  function CpuState$Gpr(state) {
    this.state = state;
  }
  CpuState$Gpr.prototype.get_za3lpa$ = function (index) {
    return this.state.getGpr_za3lpa$(index);
  };
  CpuState$Gpr.prototype.set_vux9f0$ = function (index, v) {
    this.state.setGpr_vux9f0$(index, v);
  };
  CpuState$Gpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gpr',
    interfaces: []
  };
  CpuState.prototype.syscall_za3lpa$ = function (syscall) {
    this.syscalls.syscall_acv9wa$(this, syscall);
  };
  CpuState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CpuState',
    interfaces: []
  };
  function InstructionDecoder() {
  }
  InstructionDecoder.prototype.get_lsb_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_lsb_s8ev3n$', function ($receiver) {
    return $receiver >>> 6 & 31;
  });
  InstructionDecoder.prototype.get_msb_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_msb_s8ev3n$', function ($receiver) {
    return $receiver >>> 11 & 31;
  });
  InstructionDecoder.prototype.get_pos_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_pos_s8ev3n$', function ($receiver) {
    return $receiver >>> 6 & 31;
  });
  InstructionDecoder.prototype.get_rd_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_rd_s8ev3n$', function ($receiver) {
    return $receiver >>> 11 & 31;
  });
  InstructionDecoder.prototype.get_rt_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_rt_s8ev3n$', function ($receiver) {
    return $receiver >>> 16 & 31;
  });
  InstructionDecoder.prototype.get_rs_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_rs_s8ev3n$', function ($receiver) {
    return $receiver >>> 21 & 31;
  });
  InstructionDecoder.prototype.get_syscall_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_syscall_s8ev3n$', wrapFunction(function () {
    var extract = _.$$importsForInline$$['korio-js'].com.soywiz.korio.util.extract_e4yvb3$;
    return function ($receiver) {
      return extract($receiver, 6, 20);
    };
  }));
  InstructionDecoder.prototype.get_s_imm16_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_s_imm16_s8ev3n$', function ($receiver) {
    return ($receiver & 65535) << 16 >> 16;
  });
  InstructionDecoder.prototype.get_u_imm16_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_u_imm16_s8ev3n$', function ($receiver) {
    return $receiver & 65535;
  });
  InstructionDecoder.prototype.get_u_imm26_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_u_imm26_s8ev3n$', wrapFunction(function () {
    var extract = _.$$importsForInline$$['korio-js'].com.soywiz.korio.util.extract_e4yvb3$;
    return function ($receiver) {
      return extract($receiver, 0, 26);
    };
  }));
  InstructionDecoder.prototype.get_jump_address_s8ev3n$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_jump_address_s8ev3n$', wrapFunction(function () {
    var extract = _.$$importsForInline$$['korio-js'].com.soywiz.korio.util.extract_e4yvb3$;
    return function ($receiver) {
      return extract($receiver, 0, 26) * 4 | 0;
    };
  }));
  InstructionDecoder.prototype.invoke_6rdgz4$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.invoke_6rdgz4$', function ($receiver, callback) {
    callback($receiver);
    $receiver.advance_pc_za3lpa$(4);
  });
  InstructionDecoder.prototype.normal_6rdgz4$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.normal_6rdgz4$', function ($receiver, callback) {
    callback($receiver);
    $receiver.advance_pc_za3lpa$(4);
  });
  InstructionDecoder.prototype.none_6rdgz4$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.none_6rdgz4$', function ($receiver, callback) {
    callback($receiver);
  });
  InstructionDecoder.prototype.branch_bqb35s$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.branch_bqb35s$', function ($receiver, callback) {
    var result = callback($receiver);
    if (result) {
      $receiver.advance_pc_za3lpa$((($receiver.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      $receiver.advance_pc_za3lpa$(4);
    }
  });
  InstructionDecoder.prototype.branchLikely_bqb35s$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.branchLikely_bqb35s$', function ($receiver, callback) {
    var result = callback($receiver);
    if (result) {
      $receiver.advance_pc_za3lpa$((($receiver.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      $receiver._PC = $receiver._nPC + 4 | 0;
      $receiver._nPC = $receiver._PC + 4 | 0;
    }
  });
  InstructionDecoder.prototype.get_RD_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_RD_he8x89$', function ($receiver) {
    return $receiver.getGpr_za3lpa$($receiver.IR >>> 11 & 31);
  });
  InstructionDecoder.prototype.set_RD_shbxjr$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.set_RD_shbxjr$', wrapFunction(function () {
    return function ($receiver, value) {
      $receiver.setGpr_vux9f0$($receiver.IR >>> 11 & 31, value);
    };
  }));
  InstructionDecoder.prototype.get_RT_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_RT_he8x89$', function ($receiver) {
    return $receiver.getGpr_za3lpa$($receiver.IR >>> 16 & 31);
  });
  InstructionDecoder.prototype.set_RT_shbxjr$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.set_RT_shbxjr$', wrapFunction(function () {
    return function ($receiver, value) {
      $receiver.setGpr_vux9f0$($receiver.IR >>> 16 & 31, value);
    };
  }));
  InstructionDecoder.prototype.get_RS_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_RS_he8x89$', function ($receiver) {
    return $receiver.getGpr_za3lpa$($receiver.IR >>> 21 & 31);
  });
  InstructionDecoder.prototype.set_RS_shbxjr$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.set_RS_shbxjr$', wrapFunction(function () {
    return function ($receiver, value) {
      $receiver.setGpr_vux9f0$($receiver.IR >>> 21 & 31, value);
    };
  }));
  InstructionDecoder.prototype.get_RS_IMM16_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_RS_IMM16_he8x89$', function ($receiver) {
    return $receiver.getGpr_za3lpa$($receiver.IR >>> 21 & 31) + (($receiver.IR & 65535) << 16 >> 16) | 0;
  });
  InstructionDecoder.prototype.get_S_IMM16_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_S_IMM16_he8x89$', function ($receiver) {
    return ($receiver.IR & 65535) << 16 >> 16;
  });
  InstructionDecoder.prototype.get_U_IMM16_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_U_IMM16_he8x89$', function ($receiver) {
    return $receiver.IR & 65535;
  });
  InstructionDecoder.prototype.get_POS_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_POS_he8x89$', function ($receiver) {
    return $receiver.IR >>> 6 & 31;
  });
  InstructionDecoder.prototype.get_SYSCALL_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_SYSCALL_he8x89$', wrapFunction(function () {
    var extract = _.$$importsForInline$$['korio-js'].com.soywiz.korio.util.extract_e4yvb3$;
    return function ($receiver) {
      return extract($receiver.IR, 6, 20);
    };
  }));
  InstructionDecoder.prototype.get_U_IMM26_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_U_IMM26_he8x89$', wrapFunction(function () {
    var extract = _.$$importsForInline$$['korio-js'].com.soywiz.korio.util.extract_e4yvb3$;
    return function ($receiver) {
      return extract($receiver.IR, 0, 26);
    };
  }));
  InstructionDecoder.prototype.get_JUMP_ADDRESS_he8x89$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.cpu.InstructionDecoder.get_JUMP_ADDRESS_he8x89$', wrapFunction(function () {
    var extract = _.$$importsForInline$$['korio-js'].com.soywiz.korio.util.extract_e4yvb3$;
    return function ($receiver) {
      return extract($receiver.IR, 0, 26) * 4 | 0;
    };
  }));
  InstructionDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionDecoder',
    interfaces: []
  };
  function InstructionDispatcher(e) {
    this.e = e;
  }
  InstructionDispatcher.prototype.dispatch_8olpll$ = function (s, pc, i) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37;
    tmp$ = i & (new Kotlin.Long(-67108864, 0)).toInt();
    if (tmp$ === 0) {
      tmp$_0 = i & 63;
      if (tmp$_0 === 32)
        return this.e.add_11rb$(s);
      else if (tmp$_0 === 33)
        return this.e.addu_11rb$(s);
      else if (tmp$_0 === 34)
        return this.e.sub_11rb$(s);
      else if (tmp$_0 === 35)
        return this.e.subu_11rb$(s);
      else if (tmp$_0 === 36)
        return this.e.and_11rb$(s);
      else if (tmp$_0 === 39)
        return this.e.nor_11rb$(s);
      else if (tmp$_0 === 37)
        return this.e.or_11rb$(s);
      else if (tmp$_0 === 38)
        return this.e.xor_11rb$(s);
      else if (tmp$_0 === 0)
        return this.e.sll_11rb$(s);
      else if (tmp$_0 === 4)
        return this.e.sllv_11rb$(s);
      else if (tmp$_0 === 3)
        return this.e.sra_11rb$(s);
      else if (tmp$_0 === 7)
        return this.e.srav_11rb$(s);
      else if (tmp$_0 === 2) {
        tmp$_1 = i & (new Kotlin.Long(-2097152, 0)).toInt();
        if (tmp$_1 === 0)
          return this.e.srl_11rb$(s);
        else if (tmp$_1 === 2097152)
          return this.e.rotr_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (0) failed mask 0x%08X', [i, pc, -2097152]));
      }
       else if (tmp$_0 === 6) {
        tmp$_2 = i & (new Kotlin.Long(-67106880, 0)).toInt();
        if (tmp$_2 === 0)
          return this.e.srlv_11rb$(s);
        else if (tmp$_2 === 64)
          return this.e.rotrv_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (1) failed mask 0x%08X', [i, pc, -67106880]));
      }
       else if (tmp$_0 === 42)
        return this.e.slt_11rb$(s);
      else if (tmp$_0 === 43)
        return this.e.sltu_11rb$(s);
      else if (tmp$_0 === 44)
        return this.e.max_11rb$(s);
      else if (tmp$_0 === 45)
        return this.e.min_11rb$(s);
      else if (tmp$_0 === 26)
        return this.e.div_11rb$(s);
      else if (tmp$_0 === 27)
        return this.e.divu_11rb$(s);
      else if (tmp$_0 === 24)
        return this.e.mult_11rb$(s);
      else if (tmp$_0 === 25)
        return this.e.multu_11rb$(s);
      else if (tmp$_0 === 28)
        return this.e.madd_11rb$(s);
      else if (tmp$_0 === 29)
        return this.e.maddu_11rb$(s);
      else if (tmp$_0 === 46)
        return this.e.msub_11rb$(s);
      else if (tmp$_0 === 47)
        return this.e.msubu_11rb$(s);
      else if (tmp$_0 === 16)
        return this.e.mfhi_11rb$(s);
      else if (tmp$_0 === 18)
        return this.e.mflo_11rb$(s);
      else if (tmp$_0 === 17)
        return this.e.mthi_11rb$(s);
      else if (tmp$_0 === 19)
        return this.e.mtlo_11rb$(s);
      else if (tmp$_0 === 10)
        return this.e.movz_11rb$(s);
      else if (tmp$_0 === 11)
        return this.e.movn_11rb$(s);
      else if (tmp$_0 === 22)
        return this.e.clz_11rb$(s);
      else if (tmp$_0 === 23)
        return this.e.clo_11rb$(s);
      else if (tmp$_0 === 8)
        return this.e.jr_11rb$(s);
      else if (tmp$_0 === 9)
        return this.e.jalr_11rb$(s);
      else if (tmp$_0 === 12)
        return this.e.syscall_11rb$(s);
      else if (tmp$_0 === 15)
        return this.e.sync_11rb$(s);
      else if (tmp$_0 === 13)
        return this.e._break_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (2) failed mask 0x%08X', [i, pc, 63]));
    }
     else if (tmp$ === 536870912)
      return this.e.addi_11rb$(s);
    else if (tmp$ === 603979776)
      return this.e.addiu_11rb$(s);
    else if (tmp$ === 805306368)
      return this.e.andi_11rb$(s);
    else if (tmp$ === 872415232)
      return this.e.ori_11rb$(s);
    else if (tmp$ === 939524096)
      return this.e.xori_11rb$(s);
    else if (tmp$ === 671088640)
      return this.e.slti_11rb$(s);
    else if (tmp$ === 738197504)
      return this.e.sltiu_11rb$(s);
    else if (tmp$ === 1006632960)
      return this.e.lui_11rb$(s);
    else if (tmp$ === 2080374784) {
      tmp$_3 = i & 63;
      if (tmp$_3 === 32) {
        tmp$_4 = i & (new Kotlin.Long(-2095168, 0)).toInt();
        if (tmp$_4 === 2080375808)
          return this.e.seb_11rb$(s);
        else if (tmp$_4 === 2080376320)
          return this.e.seh_11rb$(s);
        else if (tmp$_4 === 2080376064)
          return this.e.bitrev_11rb$(s);
        else if (tmp$_4 === 2080374912)
          return this.e.wsbh_11rb$(s);
        else if (tmp$_4 === 2080374976)
          return this.e.wsbw_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (3) failed mask 0x%08X', [i, pc, -2095168]));
      }
       else if (tmp$_3 === 0)
        return this.e.ext_11rb$(s);
      else if (tmp$_3 === 4)
        return this.e.ins_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (4) failed mask 0x%08X', [i, pc, 63]));
    }
     else if (tmp$ === 268435456)
      return this.e.beq_11rb$(s);
    else if (tmp$ === 1342177280)
      return this.e.beql_11rb$(s);
    else if (tmp$ === 67108864) {
      tmp$_5 = i & 2031616;
      if (tmp$_5 === 65536)
        return this.e.bgez_11rb$(s);
      else if (tmp$_5 === 196608)
        return this.e.bgezl_11rb$(s);
      else if (tmp$_5 === 1114112)
        return this.e.bgezal_11rb$(s);
      else if (tmp$_5 === 1245184)
        return this.e.bgezall_11rb$(s);
      else if (tmp$_5 === 0)
        return this.e.bltz_11rb$(s);
      else if (tmp$_5 === 131072)
        return this.e.bltzl_11rb$(s);
      else if (tmp$_5 === 1048576)
        return this.e.bltzal_11rb$(s);
      else if (tmp$_5 === 1179648)
        return this.e.bltzall_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (5) failed mask 0x%08X', [i, pc, 2031616]));
    }
     else if (tmp$ === 402653184)
      return this.e.blez_11rb$(s);
    else if (tmp$ === 1476395008)
      return this.e.blezl_11rb$(s);
    else if (tmp$ === 469762048)
      return this.e.bgtz_11rb$(s);
    else if (tmp$ === 1543503872)
      return this.e.bgtzl_11rb$(s);
    else if (tmp$ === 335544320)
      return this.e.bne_11rb$(s);
    else if (tmp$ === 1409286144)
      return this.e.bnel_11rb$(s);
    else if (tmp$ === 134217728)
      return this.e.j_11rb$(s);
    else if (tmp$ === 201326592)
      return this.e.jal_11rb$(s);
    else if (tmp$ === 1140850688) {
      tmp$_6 = i & 65011712;
      if (tmp$_6 === 16777216) {
        tmp$_7 = i & (new Kotlin.Long(-65077248, 0)).toInt();
        if (tmp$_7 === 1140850688)
          return this.e.bc1f_11rb$(s);
        else if (tmp$_7 === 1140916224)
          return this.e.bc1t_11rb$(s);
        else if (tmp$_7 === 1140981760)
          return this.e.bc1fl_11rb$(s);
        else if (tmp$_7 === 1141047296)
          return this.e.bc1tl_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (6) failed mask 0x%08X', [i, pc, -65077248]));
      }
       else if (tmp$_6 === 33554432) {
        tmp$_8 = i & (new Kotlin.Long(-67108801, 0)).toInt();
        if (tmp$_8 === 1140850688)
          return this.e.add_s_11rb$(s);
        else if (tmp$_8 === 1140850689)
          return this.e.sub_s_11rb$(s);
        else if (tmp$_8 === 1140850690)
          return this.e.mul_s_11rb$(s);
        else if (tmp$_8 === 1140850691)
          return this.e.div_s_11rb$(s);
        else if (tmp$_8 === 1140850692)
          return this.e.sqrt_s_11rb$(s);
        else if (tmp$_8 === 1140850693)
          return this.e.abs_s_11rb$(s);
        else if (tmp$_8 === 1140850694)
          return this.e.mov_s_11rb$(s);
        else if (tmp$_8 === 1140850695)
          return this.e.neg_s_11rb$(s);
        else if (tmp$_8 === 1140850700)
          return this.e.round_w_s_11rb$(s);
        else if (tmp$_8 === 1140850701)
          return this.e.trunc_w_s_11rb$(s);
        else if (tmp$_8 === 1140850702)
          return this.e.ceil_w_s_11rb$(s);
        else if (tmp$_8 === 1140850703)
          return this.e.floor_w_s_11rb$(s);
        else if (tmp$_8 === 1140850724)
          return this.e.cvt_w_s_11rb$(s);
        else if (tmp$_8 === 1140850736)
          return this.e.c_f_s_11rb$(s);
        else if (tmp$_8 === 1140850737)
          return this.e.c_un_s_11rb$(s);
        else if (tmp$_8 === 1140850738)
          return this.e.c_eq_s_11rb$(s);
        else if (tmp$_8 === 1140850739)
          return this.e.c_ueq_s_11rb$(s);
        else if (tmp$_8 === 1140850740)
          return this.e.c_olt_s_11rb$(s);
        else if (tmp$_8 === 1140850741)
          return this.e.c_ult_s_11rb$(s);
        else if (tmp$_8 === 1140850742)
          return this.e.c_ole_s_11rb$(s);
        else if (tmp$_8 === 1140850743)
          return this.e.c_ule_s_11rb$(s);
        else if (tmp$_8 === 1140850744)
          return this.e.c_sf_s_11rb$(s);
        else if (tmp$_8 === 1140850745)
          return this.e.c_ngle_s_11rb$(s);
        else if (tmp$_8 === 1140850746)
          return this.e.c_seq_s_11rb$(s);
        else if (tmp$_8 === 1140850747)
          return this.e.c_ngl_s_11rb$(s);
        else if (tmp$_8 === 1140850748)
          return this.e.c_lt_s_11rb$(s);
        else if (tmp$_8 === 1140850749)
          return this.e.c_nge_s_11rb$(s);
        else if (tmp$_8 === 1140850750)
          return this.e.c_le_s_11rb$(s);
        else if (tmp$_8 === 1140850751)
          return this.e.c_ngt_s_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (7) failed mask 0x%08X', [i, pc, -67108801]));
      }
       else if (tmp$_6 === 41943040)
        return this.e.cvt_s_w_11rb$(s);
      else if (tmp$_6 === 0)
        return this.e.mfc1_11rb$(s);
      else if (tmp$_6 === 8388608)
        return this.e.mtc1_11rb$(s);
      else if (tmp$_6 === 4194304)
        return this.e.cfc1_11rb$(s);
      else if (tmp$_6 === 12582912)
        return this.e.ctc1_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (8) failed mask 0x%08X', [i, pc, 65011712]));
    }
     else if (tmp$ === (new Kotlin.Long(-2147483648, 0)).toInt())
      return this.e.lb_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-2080374784, 0)).toInt())
      return this.e.lh_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1946157056, 0)).toInt())
      return this.e.lw_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-2013265920, 0)).toInt())
      return this.e.lwl_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1744830464, 0)).toInt())
      return this.e.lwr_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1879048192, 0)).toInt())
      return this.e.lbu_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1811939328, 0)).toInt())
      return this.e.lhu_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1610612736, 0)).toInt())
      return this.e.sb_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1543503872, 0)).toInt())
      return this.e.sh_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1409286144, 0)).toInt())
      return this.e.sw_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1476395008, 0)).toInt())
      return this.e.swl_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1207959552, 0)).toInt())
      return this.e.swr_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1073741824, 0)).toInt())
      return this.e.ll_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-536870912, 0)).toInt())
      return this.e.sc_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1006632960, 0)).toInt())
      return this.e.lwc1_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-469762048, 0)).toInt())
      return this.e.swc1_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1140850688, 0)).toInt())
      return this.e.cache_11rb$(s);
    else if (tmp$ === 1879048192) {
      tmp$_9 = i & 2047;
      if (tmp$_9 === 63)
        return this.e.dbreak_11rb$(s);
      else if (tmp$_9 === 0)
        return this.e.halt_11rb$(s);
      else if (tmp$_9 === 62)
        return this.e.dret_11rb$(s);
      else if (tmp$_9 === 36)
        return this.e.mfic_11rb$(s);
      else if (tmp$_9 === 38)
        return this.e.mtic_11rb$(s);
      else if (tmp$_9 === 61) {
        tmp$_10 = i & (new Kotlin.Long(-2097152, 0)).toInt();
        if (tmp$_10 === 1879048192)
          return this.e.mfdr_11rb$(s);
        else if (tmp$_10 === 1887436800)
          return this.e.mtdr_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (9) failed mask 0x%08X', [i, pc, -2097152]));
      }
       else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (10) failed mask 0x%08X', [i, pc, 2047]));
    }
     else if (tmp$ === 1073741824) {
      tmp$_11 = i & 65013759;
      if (tmp$_11 === 33554456)
        return this.e.eret_11rb$(s);
      else if (tmp$_11 === 4194304)
        return this.e.cfc0_11rb$(s);
      else if (tmp$_11 === 12582912)
        return this.e.ctc0_11rb$(s);
      else if (tmp$_11 === 0)
        return this.e.mfc0_11rb$(s);
      else if (tmp$_11 === 8388608)
        return this.e.mtc0_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (11) failed mask 0x%08X', [i, pc, 65013759]));
    }
     else if (tmp$ === 1207959552) {
      tmp$_12 = i & 65011712;
      if (tmp$_12 === 6291456) {
        tmp$_13 = i & (new Kotlin.Long(-67043456, 0)).toInt();
        if (tmp$_13 === 1207959552)
          return this.e.mfv_11rb$(s);
        else if (tmp$_13 === 1207959680)
          return this.e.mfvc_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (12) failed mask 0x%08X', [i, pc, -67043456]));
      }
       else if (tmp$_12 === 14680064) {
        tmp$_14 = i & (new Kotlin.Long(-67043456, 0)).toInt();
        if (tmp$_14 === 1207959552)
          return this.e.mtv_11rb$(s);
        else if (tmp$_14 === 1207959680)
          return this.e.mtvc_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (13) failed mask 0x%08X', [i, pc, -67043456]));
      }
       else if (tmp$_12 === 16777216) {
        tmp$_15 = i & (new Kotlin.Long(-66912256, 0)).toInt();
        if (tmp$_15 === 1207959552)
          return this.e.bvf_11rb$(s);
        else if (tmp$_15 === 1208025088)
          return this.e.bvt_11rb$(s);
        else if (tmp$_15 === 1208090624)
          return this.e.bvfl_11rb$(s);
        else if (tmp$_15 === 1208156160)
          return this.e.bvtl_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (14) failed mask 0x%08X', [i, pc, -66912256]));
      }
       else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (15) failed mask 0x%08X', [i, pc, 65011712]));
    }
     else if (tmp$ === (new Kotlin.Long(-939524096, 0)).toInt())
      return this.e.lv_s_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-671088640, 0)).toInt())
      return this.e.lv_q_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-738197504, 0)).toInt()) {
      tmp$_16 = i & 2;
      if (tmp$_16 === 0)
        return this.e.lvl_q_11rb$(s);
      else if (tmp$_16 === 2)
        return this.e.lvr_q_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (16) failed mask 0x%08X', [i, pc, 2]));
    }
     else if (tmp$ === (new Kotlin.Long(-134217728, 0)).toInt())
      return this.e.sv_q_11rb$(s);
    else if (tmp$ === 1677721600) {
      tmp$_17 = i & 58720256;
      if (tmp$_17 === 8388608)
        return this.e.vdot_11rb$(s);
      else if (tmp$_17 === 16777216)
        return this.e.vscl_11rb$(s);
      else if (tmp$_17 === 33554432)
        return this.e.vhdp_11rb$(s);
      else if (tmp$_17 === 41943040)
        return this.e.vcrs_t_11rb$(s);
      else if (tmp$_17 === 0)
        return this.e.vmul_11rb$(s);
      else if (tmp$_17 === 50331648)
        return this.e.vdet_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (17) failed mask 0x%08X', [i, pc, 58720256]));
    }
     else if (tmp$ === 1811939328) {
      tmp$_18 = i & 58720256;
      if (tmp$_18 === 50331648)
        return this.e.vsge_11rb$(s);
      else if (tmp$_18 === 58720256)
        return this.e.vslt_11rb$(s);
      else if (tmp$_18 === 16777216)
        return this.e.vmin_11rb$(s);
      else if (tmp$_18 === 25165824)
        return this.e.vmax_11rb$(s);
      else if (tmp$_18 === 0)
        return this.e.vcmp_11rb$(s);
      else if (tmp$_18 === 41943040)
        return this.e.vscmp_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (18) failed mask 0x%08X', [i, pc, 58720256]));
    }
     else if (tmp$ === (new Kotlin.Long(-268435456, 0)).toInt()) {
      tmp$_19 = i & 58720256;
      if (tmp$_19 === 58720256) {
        tmp$_20 = i & (new Kotlin.Long(-60817408, 0)).toInt();
        if (tmp$_20 === (new Kotlin.Long(-266338304, 0)).toInt())
          return this.e.vrot_11rb$(s);
        else if (tmp$_20 === (new Kotlin.Long(-268435456, 0)).toInt()) {
          tmp$_21 = i & 60751872;
          if (tmp$_21 === 58916864)
            return this.e.vmidt_11rb$(s);
          else if (tmp$_21 === 58720256)
            return this.e.vmmov_11rb$(s);
          else if (tmp$_21 === 59113472)
            return this.e.vmzero_11rb$(s);
          else if (tmp$_21 === 59179008)
            return this.e.vmone_11rb$(s);
          else
            throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (19) failed mask 0x%08X', [i, pc, 60751872]));
        }
         else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (20) failed mask 0x%08X', [i, pc, -60817408]));
      }
       else if (tmp$_19 === 0)
        return this.e.vmmul_11rb$(s);
      else if (tmp$_19 === 41943040) {
        tmp$_22 = i & (new Kotlin.Long(-67075968, 0)).toInt();
        if (tmp$_22 === (new Kotlin.Long(-268402688, 0)).toInt())
          return this.e.vcrsp_t_11rb$(s);
        else if (tmp$_22 === (new Kotlin.Long(-268402560, 0)).toInt())
          return this.e.vqmul_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (21) failed mask 0x%08X', [i, pc, -67075968]));
      }
       else if (tmp$_19 === 8388608) {
        tmp$_23 = i & (new Kotlin.Long(-67075968, 0)).toInt();
        if (tmp$_23 === (new Kotlin.Long(-268435328, 0)).toInt())
          return this.e.vtfm2_11rb$(s);
        else if (tmp$_23 === (new Kotlin.Long(-268435456, 0)).toInt())
          return this.e.vhtfm2_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (22) failed mask 0x%08X', [i, pc, -67075968]));
      }
       else if (tmp$_19 === 16777216) {
        tmp$_24 = i & (new Kotlin.Long(-67075968, 0)).toInt();
        if (tmp$_24 === (new Kotlin.Long(-268402688, 0)).toInt())
          return this.e.vtfm3_11rb$(s);
        else if (tmp$_24 === (new Kotlin.Long(-268435328, 0)).toInt())
          return this.e.vhtfm3_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (23) failed mask 0x%08X', [i, pc, -67075968]));
      }
       else if (tmp$_19 === 25165824) {
        tmp$_25 = i & (new Kotlin.Long(-67075968, 0)).toInt();
        if (tmp$_25 === (new Kotlin.Long(-268402560, 0)).toInt())
          return this.e.vtfm4_11rb$(s);
        else if (tmp$_25 === (new Kotlin.Long(-268402688, 0)).toInt())
          return this.e.vhtfm4_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (24) failed mask 0x%08X', [i, pc, -67075968]));
      }
       else if (tmp$_19 === 33554432)
        return this.e.vmscl_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (25) failed mask 0x%08X', [i, pc, 58720256]));
    }
     else if (tmp$ === (new Kotlin.Long(-805306368, 0)).toInt()) {
      tmp$_26 = i & 50331648;
      if (tmp$_26 === 0) {
        tmp$_27 = i & (new Kotlin.Long(-52428800, 0)).toInt();
        if (tmp$_27 === (new Kotlin.Long(-805306368, 0)).toInt()) {
          tmp$_28 = i & 52363264;
          if (tmp$_28 === 393216)
            return this.e.vzero_11rb$(s);
          else if (tmp$_28 === 458752)
            return this.e.vone_11rb$(s);
          else if (tmp$_28 === 0)
            return this.e.vmov_11rb$(s);
          else if (tmp$_28 === 65536)
            return this.e.vabs_11rb$(s);
          else if (tmp$_28 === 131072)
            return this.e.vneg_11rb$(s);
          else if (tmp$_28 === 1048576)
            return this.e.vrcp_11rb$(s);
          else if (tmp$_28 === 1114112)
            return this.e.vrsq_11rb$(s);
          else if (tmp$_28 === 1179648)
            return this.e.vsin_11rb$(s);
          else if (tmp$_28 === 1245184)
            return this.e.vcos_11rb$(s);
          else if (tmp$_28 === 1310720)
            return this.e.vexp2_11rb$(s);
          else if (tmp$_28 === 1376256)
            return this.e.vlog2_11rb$(s);
          else if (tmp$_28 === 1441792)
            return this.e.vsqrt_11rb$(s);
          else if (tmp$_28 === 1507328)
            return this.e.vasin_11rb$(s);
          else if (tmp$_28 === 1572864)
            return this.e.vnrcp_11rb$(s);
          else if (tmp$_28 === 1703936)
            return this.e.vnsin_11rb$(s);
          else if (tmp$_28 === 1835008)
            return this.e.vrexp2_11rb$(s);
          else if (tmp$_28 === 262144)
            return this.e.vsat0_11rb$(s);
          else if (tmp$_28 === 327680)
            return this.e.vsat1_11rb$(s);
          else if (tmp$_28 === 196608)
            return this.e.vidt_11rb$(s);
          else
            throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (26) failed mask 0x%08X', [i, pc, 52363264]));
        }
         else if (tmp$_27 === (new Kotlin.Long(-801112064, 0)).toInt()) {
          tmp$_29 = i & 52363264;
          if (tmp$_29 === 262144)
            return this.e.vocp_11rb$(s);
          else if (tmp$_29 === 655360)
            return this.e.vsgn_11rb$(s);
          else if (tmp$_29 === 524288)
            return this.e.vsrt3_11rb$(s);
          else if (tmp$_29 === 393216)
            return this.e.vfad_11rb$(s);
          else if (tmp$_29 === 458752)
            return this.e.vavg_11rb$(s);
          else if (tmp$_29 === 1638400)
            return this.e.vt4444_q_11rb$(s);
          else if (tmp$_29 === 1703936)
            return this.e.vt5551_q_11rb$(s);
          else if (tmp$_29 === 1769472)
            return this.e.vt5650_q_11rb$(s);
          else if (tmp$_29 === 1048576)
            return this.e.vmfvc_11rb$(s);
          else if (tmp$_29 === 1114112)
            return this.e.vmtvc_11rb$(s);
          else if (tmp$_29 === 131072)
            return this.e.vbfy1_11rb$(s);
          else if (tmp$_29 === 196608)
            return this.e.vbfy2_11rb$(s);
          else if (tmp$_29 === 327680)
            return this.e.vsocp_11rb$(s);
          else if (tmp$_29 === 0)
            return this.e.vsrt1_11rb$(s);
          else if (tmp$_29 === 65536)
            return this.e.vsrt2_11rb$(s);
          else if (tmp$_29 === 589824)
            return this.e.vsrt4_11rb$(s);
          else
            throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (27) failed mask 0x%08X', [i, pc, 52363264]));
        }
         else if (tmp$_27 === (new Kotlin.Long(-799014912, 0)).toInt())
          return this.e.vcst_11rb$(s);
        else if (tmp$_27 === (new Kotlin.Long(-803209216, 0)).toInt()) {
          tmp$_30 = i & 52363264;
          if (tmp$_30 === 1900544)
            return this.e.vi2c_11rb$(s);
          else if (tmp$_30 === 1835008)
            return this.e.vi2uc_11rb$(s);
          else if (tmp$_30 === 0)
            return this.e.vrnds_11rb$(s);
          else if (tmp$_30 === 65536)
            return this.e.vrndi_11rb$(s);
          else if (tmp$_30 === 131072)
            return this.e.vrndf1_11rb$(s);
          else if (tmp$_30 === 196608)
            return this.e.vrndf2_11rb$(s);
          else if (tmp$_30 === 1179648)
            return this.e.vf2h_11rb$(s);
          else if (tmp$_30 === 1245184)
            return this.e.vh2f_11rb$(s);
          else if (tmp$_30 === 2031616)
            return this.e.vi2s_11rb$(s);
          else if (tmp$_30 === 1966080)
            return this.e.vi2us_11rb$(s);
          else if (tmp$_30 === 1507328)
            return this.e.vlgb_11rb$(s);
          else if (tmp$_30 === 1769472)
            return this.e.vs2i_11rb$(s);
          else if (tmp$_30 === 1638400)
            return this.e.vc2i_11rb$(s);
          else if (tmp$_30 === 1572864)
            return this.e.vuc2i_11rb$(s);
          else if (tmp$_30 === 1441792)
            return this.e.vsbz_11rb$(s);
          else if (tmp$_30 === 1703936)
            return this.e.vus2i_11rb$(s);
          else
            throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (28) failed mask 0x%08X', [i, pc, 52363264]));
        }
         else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (29) failed mask 0x%08X', [i, pc, -52428800]));
      }
       else if (tmp$_26 === 33554432) {
        tmp$_31 = i & (new Kotlin.Long(-52428800, 0)).toInt();
        if (tmp$_31 === (new Kotlin.Long(-794820608, 0)).toInt()) {
          tmp$_32 = i & 51904512;
          if (tmp$_32 === 34078720)
            return this.e.vcmovf_11rb$(s);
          else if (tmp$_32 === 33554432)
            return this.e.vcmovt_11rb$(s);
          else
            throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (30) failed mask 0x%08X', [i, pc, 51904512]));
        }
         else if (tmp$_31 === (new Kotlin.Long(-799014912, 0)).toInt())
          return this.e.vf2id_11rb$(s);
        else if (tmp$_31 === (new Kotlin.Long(-805306368, 0)).toInt())
          return this.e.vf2in_11rb$(s);
        else if (tmp$_31 === (new Kotlin.Long(-801112064, 0)).toInt())
          return this.e.vf2iu_11rb$(s);
        else if (tmp$_31 === (new Kotlin.Long(-803209216, 0)).toInt())
          return this.e.vf2iz_11rb$(s);
        else if (tmp$_31 === (new Kotlin.Long(-796917760, 0)).toInt())
          return this.e.vi2f_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (31) failed mask 0x%08X', [i, pc, -52428800]));
      }
       else if (tmp$_26 === 50331648)
        return this.e.vwbn_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (32) failed mask 0x%08X', [i, pc, 50331648]));
    }
     else if (tmp$ === 1610612736) {
      tmp$_33 = i & 58720256;
      if (tmp$_33 === 0)
        return this.e.vadd_11rb$(s);
      else if (tmp$_33 === 8388608)
        return this.e.vsub_11rb$(s);
      else if (tmp$_33 === 58720256)
        return this.e.vdiv_11rb$(s);
      else if (tmp$_33 === 16777216)
        return this.e.vsbn_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (33) failed mask 0x%08X', [i, pc, 58720256]));
    }
     else if (tmp$ === (new Kotlin.Long(-603979776, 0)).toInt()) {
      tmp$_34 = i & 50331648;
      if (tmp$_34 === 50331648) {
        tmp$_35 = i & (new Kotlin.Long(-58720256, 0)).toInt();
        if (tmp$_35 === (new Kotlin.Long(-603979776, 0)).toInt())
          return this.e.viim_11rb$(s);
        else if (tmp$_35 === (new Kotlin.Long(-595591168, 0)).toInt())
          return this.e.vfim_11rb$(s);
        else
          throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (34) failed mask 0x%08X', [i, pc, -58720256]));
      }
       else if (tmp$_34 === 33554432)
        return this.e.vpfxd_11rb$(s);
      else if (tmp$_34 === 0)
        return this.e.vpfxs_11rb$(s);
      else if (tmp$_34 === 16777216)
        return this.e.vpfxt_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (35) failed mask 0x%08X', [i, pc, 50331648]));
    }
     else if (tmp$ === (new Kotlin.Long(-67108864, 0)).toInt()) {
      tmp$_36 = i & 67108863;
      if (tmp$_36 === 67043328)
        return this.e.vnop_11rb$(s);
      else if (tmp$_36 === 67044128)
        return this.e.vsync_11rb$(s);
      else if (tmp$_36 === 67044365)
        return this.e.vflush_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (36) failed mask 0x%08X', [i, pc, 67108863]));
    }
     else if (tmp$ === 1744830464)
      return this.e.mfvme_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-1342177280, 0)).toInt())
      return this.e.mtvme_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-402653184, 0)).toInt())
      return this.e.sv_s_11rb$(s);
    else if (tmp$ === (new Kotlin.Long(-201326592, 0)).toInt()) {
      tmp$_37 = i & 2;
      if (tmp$_37 === 0)
        return this.e.svl_q_11rb$(s);
      else if (tmp$_37 === 2)
        return this.e.svr_q_11rb$(s);
      else
        throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (37) failed mask 0x%08X', [i, pc, 2]));
    }
     else
      throw new Exception(format('Invalid instruction 0x%08X at 0x%08X (38) failed mask 0x%08X', [i, pc, -67108864]));
  };
  InstructionDispatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionDispatcher',
    interfaces: []
  };
  function dispatch($receiver, s) {
    s.IR = s.mem.lw_za3lpa$(s._PC);
    $receiver.dispatch_8olpll$(s, s._PC, s.IR);
  }
  function InstructionEvaluator() {
    InstructionDecoder.call(this);
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  InstructionEvaluator.prototype.unimplemented_1wp5la$ = function (s, i) {
    throw new NotImplementedError_init('An operation is not implemented: ' + ('unimplemented: ' + i.name + ' : ' + toString(i)));
  };
  InstructionEvaluator.prototype.add_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().add);
  };
  InstructionEvaluator.prototype.addu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().addu);
  };
  InstructionEvaluator.prototype.addi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().addi);
  };
  InstructionEvaluator.prototype.addiu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().addiu);
  };
  InstructionEvaluator.prototype.sub_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sub);
  };
  InstructionEvaluator.prototype.subu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().subu);
  };
  InstructionEvaluator.prototype.and_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().and);
  };
  InstructionEvaluator.prototype.andi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().andi);
  };
  InstructionEvaluator.prototype.nor_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().nor);
  };
  InstructionEvaluator.prototype.or_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().or);
  };
  InstructionEvaluator.prototype.ori_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().ori);
  };
  InstructionEvaluator.prototype.xor_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().xor);
  };
  InstructionEvaluator.prototype.xori_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().xori);
  };
  InstructionEvaluator.prototype.sll_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sll);
  };
  InstructionEvaluator.prototype.sllv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sllv);
  };
  InstructionEvaluator.prototype.sra_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sra);
  };
  InstructionEvaluator.prototype.srav_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().srav);
  };
  InstructionEvaluator.prototype.srl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().srl);
  };
  InstructionEvaluator.prototype.srlv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().srlv);
  };
  InstructionEvaluator.prototype.rotr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().rotr);
  };
  InstructionEvaluator.prototype.rotrv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().rotrv);
  };
  InstructionEvaluator.prototype.slt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().slt);
  };
  InstructionEvaluator.prototype.slti_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().slti);
  };
  InstructionEvaluator.prototype.sltu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sltu);
  };
  InstructionEvaluator.prototype.sltiu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sltiu);
  };
  InstructionEvaluator.prototype.lui_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lui);
  };
  InstructionEvaluator.prototype.seb_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().seb);
  };
  InstructionEvaluator.prototype.seh_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().seh);
  };
  InstructionEvaluator.prototype.bitrev_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bitrev);
  };
  InstructionEvaluator.prototype.max_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().max);
  };
  InstructionEvaluator.prototype.min_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().min);
  };
  InstructionEvaluator.prototype.div_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().div);
  };
  InstructionEvaluator.prototype.divu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().divu);
  };
  InstructionEvaluator.prototype.mult_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mult);
  };
  InstructionEvaluator.prototype.multu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().multu);
  };
  InstructionEvaluator.prototype.madd_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().madd);
  };
  InstructionEvaluator.prototype.maddu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().maddu);
  };
  InstructionEvaluator.prototype.msub_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().msub);
  };
  InstructionEvaluator.prototype.msubu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().msubu);
  };
  InstructionEvaluator.prototype.mfhi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mfhi);
  };
  InstructionEvaluator.prototype.mflo_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mflo);
  };
  InstructionEvaluator.prototype.mthi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mthi);
  };
  InstructionEvaluator.prototype.mtlo_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mtlo);
  };
  InstructionEvaluator.prototype.movz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().movz);
  };
  InstructionEvaluator.prototype.movn_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().movn);
  };
  InstructionEvaluator.prototype.ext_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().ext);
  };
  InstructionEvaluator.prototype.ins_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().ins);
  };
  InstructionEvaluator.prototype.clz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().clz);
  };
  InstructionEvaluator.prototype.clo_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().clo);
  };
  InstructionEvaluator.prototype.wsbh_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().wsbh);
  };
  InstructionEvaluator.prototype.wsbw_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().wsbw);
  };
  InstructionEvaluator.prototype.beq_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().beq);
  };
  InstructionEvaluator.prototype.beql_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().beql);
  };
  InstructionEvaluator.prototype.bgez_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bgez);
  };
  InstructionEvaluator.prototype.bgezl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bgezl);
  };
  InstructionEvaluator.prototype.bgezal_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bgezal);
  };
  InstructionEvaluator.prototype.bgezall_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bgezall);
  };
  InstructionEvaluator.prototype.bltz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bltz);
  };
  InstructionEvaluator.prototype.bltzl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bltzl);
  };
  InstructionEvaluator.prototype.bltzal_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bltzal);
  };
  InstructionEvaluator.prototype.bltzall_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bltzall);
  };
  InstructionEvaluator.prototype.blez_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().blez);
  };
  InstructionEvaluator.prototype.blezl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().blezl);
  };
  InstructionEvaluator.prototype.bgtz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bgtz);
  };
  InstructionEvaluator.prototype.bgtzl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bgtzl);
  };
  InstructionEvaluator.prototype.bne_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bne);
  };
  InstructionEvaluator.prototype.bnel_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bnel);
  };
  InstructionEvaluator.prototype.j_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().j);
  };
  InstructionEvaluator.prototype.jr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().jr);
  };
  InstructionEvaluator.prototype.jalr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().jalr);
  };
  InstructionEvaluator.prototype.jal_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().jal);
  };
  InstructionEvaluator.prototype.bc1f_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bc1f);
  };
  InstructionEvaluator.prototype.bc1t_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bc1t);
  };
  InstructionEvaluator.prototype.bc1fl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bc1fl);
  };
  InstructionEvaluator.prototype.bc1tl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bc1tl);
  };
  InstructionEvaluator.prototype.lb_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lb);
  };
  InstructionEvaluator.prototype.lh_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lh);
  };
  InstructionEvaluator.prototype.lw_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lw);
  };
  InstructionEvaluator.prototype.lwl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lwl);
  };
  InstructionEvaluator.prototype.lwr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lwr);
  };
  InstructionEvaluator.prototype.lbu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lbu);
  };
  InstructionEvaluator.prototype.lhu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lhu);
  };
  InstructionEvaluator.prototype.sb_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sb);
  };
  InstructionEvaluator.prototype.sh_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sh);
  };
  InstructionEvaluator.prototype.sw_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sw);
  };
  InstructionEvaluator.prototype.swl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().swl);
  };
  InstructionEvaluator.prototype.swr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().swr);
  };
  InstructionEvaluator.prototype.ll_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().ll);
  };
  InstructionEvaluator.prototype.sc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sc);
  };
  InstructionEvaluator.prototype.lwc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lwc1);
  };
  InstructionEvaluator.prototype.swc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().swc1);
  };
  InstructionEvaluator.prototype.add_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().add_s);
  };
  InstructionEvaluator.prototype.sub_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sub_s);
  };
  InstructionEvaluator.prototype.mul_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mul_s);
  };
  InstructionEvaluator.prototype.div_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().div_s);
  };
  InstructionEvaluator.prototype.sqrt_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sqrt_s);
  };
  InstructionEvaluator.prototype.abs_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().abs_s);
  };
  InstructionEvaluator.prototype.mov_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mov_s);
  };
  InstructionEvaluator.prototype.neg_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().neg_s);
  };
  InstructionEvaluator.prototype.round_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().round_w_s);
  };
  InstructionEvaluator.prototype.trunc_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().trunc_w_s);
  };
  InstructionEvaluator.prototype.ceil_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().ceil_w_s);
  };
  InstructionEvaluator.prototype.floor_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().floor_w_s);
  };
  InstructionEvaluator.prototype.cvt_s_w_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().cvt_s_w);
  };
  InstructionEvaluator.prototype.cvt_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().cvt_w_s);
  };
  InstructionEvaluator.prototype.mfc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mfc1);
  };
  InstructionEvaluator.prototype.mtc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mtc1);
  };
  InstructionEvaluator.prototype.cfc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().cfc1);
  };
  InstructionEvaluator.prototype.ctc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().ctc1);
  };
  InstructionEvaluator.prototype.c_f_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_f_s);
  };
  InstructionEvaluator.prototype.c_un_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_un_s);
  };
  InstructionEvaluator.prototype.c_eq_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_eq_s);
  };
  InstructionEvaluator.prototype.c_ueq_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_ueq_s);
  };
  InstructionEvaluator.prototype.c_olt_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_olt_s);
  };
  InstructionEvaluator.prototype.c_ult_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_ult_s);
  };
  InstructionEvaluator.prototype.c_ole_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_ole_s);
  };
  InstructionEvaluator.prototype.c_ule_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_ule_s);
  };
  InstructionEvaluator.prototype.c_sf_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_sf_s);
  };
  InstructionEvaluator.prototype.c_ngle_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_ngle_s);
  };
  InstructionEvaluator.prototype.c_seq_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_seq_s);
  };
  InstructionEvaluator.prototype.c_ngl_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_ngl_s);
  };
  InstructionEvaluator.prototype.c_lt_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_lt_s);
  };
  InstructionEvaluator.prototype.c_nge_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_nge_s);
  };
  InstructionEvaluator.prototype.c_le_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_le_s);
  };
  InstructionEvaluator.prototype.c_ngt_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().c_ngt_s);
  };
  InstructionEvaluator.prototype.syscall_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().syscall);
  };
  InstructionEvaluator.prototype.cache_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().cache);
  };
  InstructionEvaluator.prototype.sync_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sync);
  };
  InstructionEvaluator.prototype._break_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance()._break);
  };
  InstructionEvaluator.prototype.dbreak_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().dbreak);
  };
  InstructionEvaluator.prototype.halt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().halt);
  };
  InstructionEvaluator.prototype.dret_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().dret);
  };
  InstructionEvaluator.prototype.eret_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().eret);
  };
  InstructionEvaluator.prototype.mfic_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mfic);
  };
  InstructionEvaluator.prototype.mtic_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mtic);
  };
  InstructionEvaluator.prototype.mfdr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mfdr);
  };
  InstructionEvaluator.prototype.mtdr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mtdr);
  };
  InstructionEvaluator.prototype.cfc0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().cfc0);
  };
  InstructionEvaluator.prototype.ctc0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().ctc0);
  };
  InstructionEvaluator.prototype.mfc0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mfc0);
  };
  InstructionEvaluator.prototype.mtc0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mtc0);
  };
  InstructionEvaluator.prototype.mfv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mfv);
  };
  InstructionEvaluator.prototype.mfvc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mfvc);
  };
  InstructionEvaluator.prototype.mtv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mtv);
  };
  InstructionEvaluator.prototype.mtvc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mtvc);
  };
  InstructionEvaluator.prototype.lv_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lv_s);
  };
  InstructionEvaluator.prototype.lv_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lv_q);
  };
  InstructionEvaluator.prototype.lvl_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lvl_q);
  };
  InstructionEvaluator.prototype.lvr_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().lvr_q);
  };
  InstructionEvaluator.prototype.sv_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sv_q);
  };
  InstructionEvaluator.prototype.vdot_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vdot);
  };
  InstructionEvaluator.prototype.vscl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vscl);
  };
  InstructionEvaluator.prototype.vsge_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsge);
  };
  InstructionEvaluator.prototype.vslt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vslt);
  };
  InstructionEvaluator.prototype.vrot_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vrot);
  };
  InstructionEvaluator.prototype.vzero_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vzero);
  };
  InstructionEvaluator.prototype.vone_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vone);
  };
  InstructionEvaluator.prototype.vmov_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmov);
  };
  InstructionEvaluator.prototype.vabs_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vabs);
  };
  InstructionEvaluator.prototype.vneg_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vneg);
  };
  InstructionEvaluator.prototype.vocp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vocp);
  };
  InstructionEvaluator.prototype.vsgn_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsgn);
  };
  InstructionEvaluator.prototype.vrcp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vrcp);
  };
  InstructionEvaluator.prototype.vrsq_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vrsq);
  };
  InstructionEvaluator.prototype.vsin_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsin);
  };
  InstructionEvaluator.prototype.vcos_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vcos);
  };
  InstructionEvaluator.prototype.vexp2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vexp2);
  };
  InstructionEvaluator.prototype.vlog2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vlog2);
  };
  InstructionEvaluator.prototype.vsqrt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsqrt);
  };
  InstructionEvaluator.prototype.vasin_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vasin);
  };
  InstructionEvaluator.prototype.vnrcp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vnrcp);
  };
  InstructionEvaluator.prototype.vnsin_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vnsin);
  };
  InstructionEvaluator.prototype.vrexp2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vrexp2);
  };
  InstructionEvaluator.prototype.vsat0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsat0);
  };
  InstructionEvaluator.prototype.vsat1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsat1);
  };
  InstructionEvaluator.prototype.vcst_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vcst);
  };
  InstructionEvaluator.prototype.vmmul_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmmul);
  };
  InstructionEvaluator.prototype.vhdp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vhdp);
  };
  InstructionEvaluator.prototype.vcrs_t_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vcrs_t);
  };
  InstructionEvaluator.prototype.vcrsp_t_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vcrsp_t);
  };
  InstructionEvaluator.prototype.vi2c_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vi2c);
  };
  InstructionEvaluator.prototype.vi2uc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vi2uc);
  };
  InstructionEvaluator.prototype.vtfm2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vtfm2);
  };
  InstructionEvaluator.prototype.vtfm3_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vtfm3);
  };
  InstructionEvaluator.prototype.vtfm4_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vtfm4);
  };
  InstructionEvaluator.prototype.vhtfm2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vhtfm2);
  };
  InstructionEvaluator.prototype.vhtfm3_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vhtfm3);
  };
  InstructionEvaluator.prototype.vhtfm4_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vhtfm4);
  };
  InstructionEvaluator.prototype.vsrt3_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsrt3);
  };
  InstructionEvaluator.prototype.vfad_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vfad);
  };
  InstructionEvaluator.prototype.vmin_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmin);
  };
  InstructionEvaluator.prototype.vmax_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmax);
  };
  InstructionEvaluator.prototype.vadd_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vadd);
  };
  InstructionEvaluator.prototype.vsub_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsub);
  };
  InstructionEvaluator.prototype.vdiv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vdiv);
  };
  InstructionEvaluator.prototype.vmul_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmul);
  };
  InstructionEvaluator.prototype.vidt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vidt);
  };
  InstructionEvaluator.prototype.vmidt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmidt);
  };
  InstructionEvaluator.prototype.viim_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().viim);
  };
  InstructionEvaluator.prototype.vmmov_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmmov);
  };
  InstructionEvaluator.prototype.vmzero_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmzero);
  };
  InstructionEvaluator.prototype.vmone_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmone);
  };
  InstructionEvaluator.prototype.vnop_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vnop);
  };
  InstructionEvaluator.prototype.vsync_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsync);
  };
  InstructionEvaluator.prototype.vflush_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vflush);
  };
  InstructionEvaluator.prototype.vpfxd_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vpfxd);
  };
  InstructionEvaluator.prototype.vpfxs_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vpfxs);
  };
  InstructionEvaluator.prototype.vpfxt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vpfxt);
  };
  InstructionEvaluator.prototype.vdet_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vdet);
  };
  InstructionEvaluator.prototype.vrnds_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vrnds);
  };
  InstructionEvaluator.prototype.vrndi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vrndi);
  };
  InstructionEvaluator.prototype.vrndf1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vrndf1);
  };
  InstructionEvaluator.prototype.vrndf2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vrndf2);
  };
  InstructionEvaluator.prototype.vcmp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vcmp);
  };
  InstructionEvaluator.prototype.vcmovf_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vcmovf);
  };
  InstructionEvaluator.prototype.vcmovt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vcmovt);
  };
  InstructionEvaluator.prototype.vavg_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vavg);
  };
  InstructionEvaluator.prototype.vf2id_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vf2id);
  };
  InstructionEvaluator.prototype.vf2in_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vf2in);
  };
  InstructionEvaluator.prototype.vf2iu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vf2iu);
  };
  InstructionEvaluator.prototype.vf2iz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vf2iz);
  };
  InstructionEvaluator.prototype.vi2f_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vi2f);
  };
  InstructionEvaluator.prototype.vscmp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vscmp);
  };
  InstructionEvaluator.prototype.vmscl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmscl);
  };
  InstructionEvaluator.prototype.vt4444_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vt4444_q);
  };
  InstructionEvaluator.prototype.vt5551_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vt5551_q);
  };
  InstructionEvaluator.prototype.vt5650_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vt5650_q);
  };
  InstructionEvaluator.prototype.vmfvc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmfvc);
  };
  InstructionEvaluator.prototype.vmtvc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vmtvc);
  };
  InstructionEvaluator.prototype.mfvme_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mfvme);
  };
  InstructionEvaluator.prototype.mtvme_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().mtvme);
  };
  InstructionEvaluator.prototype.sv_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().sv_s);
  };
  InstructionEvaluator.prototype.vfim_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vfim);
  };
  InstructionEvaluator.prototype.svl_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().svl_q);
  };
  InstructionEvaluator.prototype.svr_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().svr_q);
  };
  InstructionEvaluator.prototype.vbfy1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vbfy1);
  };
  InstructionEvaluator.prototype.vbfy2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vbfy2);
  };
  InstructionEvaluator.prototype.vf2h_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vf2h);
  };
  InstructionEvaluator.prototype.vh2f_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vh2f);
  };
  InstructionEvaluator.prototype.vi2s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vi2s);
  };
  InstructionEvaluator.prototype.vi2us_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vi2us);
  };
  InstructionEvaluator.prototype.vlgb_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vlgb);
  };
  InstructionEvaluator.prototype.vqmul_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vqmul);
  };
  InstructionEvaluator.prototype.vs2i_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vs2i);
  };
  InstructionEvaluator.prototype.vc2i_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vc2i);
  };
  InstructionEvaluator.prototype.vuc2i_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vuc2i);
  };
  InstructionEvaluator.prototype.vsbn_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsbn);
  };
  InstructionEvaluator.prototype.vsbz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsbz);
  };
  InstructionEvaluator.prototype.vsocp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsocp);
  };
  InstructionEvaluator.prototype.vsrt1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsrt1);
  };
  InstructionEvaluator.prototype.vsrt2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsrt2);
  };
  InstructionEvaluator.prototype.vsrt4_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vsrt4);
  };
  InstructionEvaluator.prototype.vus2i_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vus2i);
  };
  InstructionEvaluator.prototype.vwbn_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().vwbn);
  };
  InstructionEvaluator.prototype.bvf_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bvf);
  };
  InstructionEvaluator.prototype.bvt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bvt);
  };
  InstructionEvaluator.prototype.bvfl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bvfl);
  };
  InstructionEvaluator.prototype.bvtl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, Instructions_getInstance().bvtl);
  };
  InstructionEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionEvaluator',
    interfaces: [InstructionDecoder]
  };
  function InstructionOpcodeDecoder() {
    InstructionOpcodeDecoder_instance = this;
    this.evaluator_0 = new InstructionOpcodeDecoder$ResultInstructionEvaluator();
    this.dispatcher_0 = new InstructionDispatcher(this.evaluator_0);
  }
  function InstructionOpcodeDecoder$Result(result) {
    if (result === void 0)
      result = Instructions_getInstance().add;
    this.result = result;
  }
  InstructionOpcodeDecoder$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  InstructionOpcodeDecoder$Result.prototype.component1 = function () {
    return this.result;
  };
  InstructionOpcodeDecoder$Result.prototype.copy_9b8q6v$ = function (result) {
    return new InstructionOpcodeDecoder$Result(result === void 0 ? this.result : result);
  };
  InstructionOpcodeDecoder$Result.prototype.toString = function () {
    return 'Result(result=' + Kotlin.toString(this.result) + ')';
  };
  InstructionOpcodeDecoder$Result.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    return result;
  };
  InstructionOpcodeDecoder$Result.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.result, other.result))));
  };
  function InstructionOpcodeDecoder$ResultInstructionEvaluator() {
    InstructionEvaluator.call(this);
  }
  InstructionOpcodeDecoder$ResultInstructionEvaluator.prototype.unimplemented_1wp5la$ = function (s, i) {
    s.result = i;
  };
  InstructionOpcodeDecoder$ResultInstructionEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultInstructionEvaluator',
    interfaces: [InstructionEvaluator]
  };
  InstructionOpcodeDecoder.prototype.invoke_za3lpa$ = function (i) {
    var $receiver = new InstructionOpcodeDecoder$Result();
    this.dispatcher_0.dispatch_8olpll$($receiver, 0, i);
    return $receiver.result;
  };
  InstructionOpcodeDecoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InstructionOpcodeDecoder',
    interfaces: []
  };
  var InstructionOpcodeDecoder_instance = null;
  function InstructionOpcodeDecoder_getInstance() {
    if (InstructionOpcodeDecoder_instance === null) {
      new InstructionOpcodeDecoder();
    }
    return InstructionOpcodeDecoder_instance;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Instructions() {
    Instructions_instance = this;
    this.add = ID('add', VM('000000:rs:rt:rd:00000:100000'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.addu = ID('addu', VM('000000:rs:rt:rd:00000:100001'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.addi = ID('addi', VM('001000:rs:rt:imm16'), '%t, %s, %i', ADDR_TYPE_NONE, 0);
    this.addiu = ID('addiu', VM('001001:rs:rt:imm16'), '%t, %s, %i', ADDR_TYPE_NONE, 0);
    this.sub = ID('sub', VM('000000:rs:rt:rd:00000:100010'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.subu = ID('subu', VM('000000:rs:rt:rd:00000:100011'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.and = ID('and', VM('000000:rs:rt:rd:00000:100100'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.andi = ID('andi', VM('001100:rs:rt:imm16'), '%t, %s, %I', ADDR_TYPE_NONE, 0);
    this.nor = ID('nor', VM('000000:rs:rt:rd:00000:100111'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.or = ID('or', VM('000000:rs:rt:rd:00000:100101'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.ori = ID('ori', VM('001101:rs:rt:imm16'), '%t, %s, %I', ADDR_TYPE_NONE, 0);
    this.xor = ID('xor', VM('000000:rs:rt:rd:00000:100110'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.xori = ID('xori', VM('001110:rs:rt:imm16'), '%t, %s, %I', ADDR_TYPE_NONE, 0);
    this.sll = ID('sll', VM('000000:00000:rt:rd:sa:000000'), '%d, %t, %a', ADDR_TYPE_NONE, 0);
    this.sllv = ID('sllv', VM('000000:rs:rt:rd:00000:000100'), '%d, %t, %s', ADDR_TYPE_NONE, 0);
    this.sra = ID('sra', VM('000000:00000:rt:rd:sa:000011'), '%d, %t, %a', ADDR_TYPE_NONE, 0);
    this.srav = ID('srav', VM('000000:rs:rt:rd:00000:000111'), '%d, %t, %s', ADDR_TYPE_NONE, 0);
    this.srl = ID('srl', VM('000000:00000:rt:rd:sa:000010'), '%d, %t, %a', ADDR_TYPE_NONE, 0);
    this.srlv = ID('srlv', VM('000000:rs:rt:rd:00000:000110'), '%d, %t, %s', ADDR_TYPE_NONE, 0);
    this.rotr = ID('rotr', VM('000000:00001:rt:rd:sa:000010'), '%d, %t, %a', ADDR_TYPE_NONE, 0);
    this.rotrv = ID('rotrv', VM('000000:rs:rt:rd:00001:000110'), '%d, %t, %s', ADDR_TYPE_NONE, 0);
    this.slt = ID('slt', VM('000000:rs:rt:rd:00000:101010'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.slti = ID('slti', VM('001010:rs:rt:imm16'), '%t, %s, %i', ADDR_TYPE_NONE, 0);
    this.sltu = ID('sltu', VM('000000:rs:rt:rd:00000:101011'), '%d, %s, %t', ADDR_TYPE_NONE, 0);
    this.sltiu = ID('sltiu', VM('001011:rs:rt:imm16'), '%t, %s, %i', ADDR_TYPE_NONE, 0);
    this.lui = ID('lui', VM('001111:00000:rt:imm16'), '%t, %I', ADDR_TYPE_NONE, 0);
    this.seb = ID('seb', VM('011111:00000:rt:rd:10000:100000'), '%d, %t', ADDR_TYPE_NONE, 0);
    this.seh = ID('seh', VM('011111:00000:rt:rd:11000:100000'), '%d, %t', ADDR_TYPE_NONE, 0);
    this.bitrev = ID('bitrev', VM('011111:00000:rt:rd:10100:100000'), '%d, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.max = ID('max', VM('000000:rs:rt:rd:00000:101100'), '%d, %s, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.min = ID('min', VM('000000:rs:rt:rd:00000:101101'), '%d, %s, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.div = ID('div', VM('000000:rs:rt:00000:00000:011010'), '%s, %t', ADDR_TYPE_NONE, 0);
    this.divu = ID('divu', VM('000000:rs:rt:00000:00000:011011'), '%s, %t', ADDR_TYPE_NONE, 0);
    this.mult = ID('mult', VM('000000:rs:rt:00000:00000:011000'), '%s, %t', ADDR_TYPE_NONE, 0);
    this.multu = ID('multu', VM('000000:rs:rt:00000:00000:011001'), '%s, %t', ADDR_TYPE_NONE, 0);
    this.madd = ID('madd', VM('000000:rs:rt:00000:00000:011100'), '%s, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.maddu = ID('maddu', VM('000000:rs:rt:00000:00000:011101'), '%s, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.msub = ID('msub', VM('000000:rs:rt:00000:00000:101110'), '%s, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.msubu = ID('msubu', VM('000000:rs:rt:00000:00000:101111'), '%s, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mfhi = ID('mfhi', VM('000000:00000:00000:rd:00000:010000'), '%d', ADDR_TYPE_NONE, 0);
    this.mflo = ID('mflo', VM('000000:00000:00000:rd:00000:010010'), '%d', ADDR_TYPE_NONE, 0);
    this.mthi = ID('mthi', VM('000000:rs:00000:00000:00000:010001'), '%s', ADDR_TYPE_NONE, 0);
    this.mtlo = ID('mtlo', VM('000000:rs:00000:00000:00000:010011'), '%s', ADDR_TYPE_NONE, 0);
    this.movz = ID('movz', VM('000000:rs:rt:rd:00000:001010'), '%d, %s, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.movn = ID('movn', VM('000000:rs:rt:rd:00000:001011'), '%d, %s, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.ext = ID('ext', VM('011111:rs:rt:msb:lsb:000000'), '%t, %s, %a, %ne', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.ins = ID('ins', VM('011111:rs:rt:msb:lsb:000100'), '%t, %s, %a, %ni', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.clz = ID('clz', VM('000000:rs:00000:rd:00000:010110'), '%d, %s', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.clo = ID('clo', VM('000000:rs:00000:rd:00000:010111'), '%d, %s', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.wsbh = ID('wsbh', VM('011111:00000:rt:rd:00010:100000'), '%d, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.wsbw = ID('wsbw', VM('011111:00000:rt:rd:00011:100000'), '%d, %t', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.beq = ID('beq', VM('000100:rs:rt:imm16'), '%s, %t, %O', ADDR_TYPE_16, INSTR_TYPE_B);
    this.beql = ID('beql', VM('010100:rs:rt:imm16'), '%s, %t, %O', ADDR_TYPE_16, INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.bgez = ID('bgez', VM('000001:rs:00001:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_B);
    this.bgezl = ID('bgezl', VM('000001:rs:00011:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.bgezal = ID('bgezal', VM('000001:rs:10001:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_JAL);
    this.bgezall = ID('bgezall', VM('000001:rs:10011:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_LIKELY | INSTR_TYPE_JAL);
    this.bltz = ID('bltz', VM('000001:rs:00000:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_B);
    this.bltzl = ID('bltzl', VM('000001:rs:00010:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.bltzal = ID('bltzal', VM('000001:rs:10000:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_JAL);
    this.bltzall = ID('bltzall', VM('000001:rs:10010:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_LIKELY | INSTR_TYPE_JAL);
    this.blez = ID('blez', VM('000110:rs:00000:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_B);
    this.blezl = ID('blezl', VM('010110:rs:00000:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.bgtz = ID('bgtz', VM('000111:rs:00000:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_B);
    this.bgtzl = ID('bgtzl', VM('010111:rs:00000:imm16'), '%s, %O', ADDR_TYPE_16, INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.bne = ID('bne', VM('000101:rs:rt:imm16'), '%s, %t, %O', ADDR_TYPE_16, INSTR_TYPE_B);
    this.bnel = ID('bnel', VM('010101:rs:rt:imm16'), '%s, %t, %O', ADDR_TYPE_16, INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.j = ID('j', VM('000010:imm26'), '%j', ADDR_TYPE_26, INSTR_TYPE_JUMP);
    this.jr = ID('jr', VM('000000:rs:00000:00000:00000:001000'), '%J', ADDR_TYPE_REG, INSTR_TYPE_JUMP);
    this.jalr = ID('jalr', VM('000000:rs:00000:rd:00000:001001'), '%J, %d', ADDR_TYPE_REG, INSTR_TYPE_JAL);
    this.jal = ID('jal', VM('000011:imm26'), '%j', ADDR_TYPE_26, INSTR_TYPE_JAL);
    this.bc1f = ID('bc1f', VM('010001:01000:00000:imm16'), '%O', ADDR_TYPE_16, INSTR_TYPE_B);
    this.bc1t = ID('bc1t', VM('010001:01000:00001:imm16'), '%O', ADDR_TYPE_16, INSTR_TYPE_B);
    this.bc1fl = ID('bc1fl', VM('010001:01000:00010:imm16'), '%O', ADDR_TYPE_16, INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.bc1tl = ID('bc1tl', VM('010001:01000:00011:imm16'), '%O', ADDR_TYPE_16, INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.lb = ID('lb', VM('100000:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.lh = ID('lh', VM('100001:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.lw = ID('lw', VM('100011:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.lwl = ID('lwl', VM('100010:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.lwr = ID('lwr', VM('100110:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.lbu = ID('lbu', VM('100100:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.lhu = ID('lhu', VM('100101:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.sb = ID('sb', VM('101000:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.sh = ID('sh', VM('101001:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.sw = ID('sw', VM('101011:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.swl = ID('swl', VM('101010:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.swr = ID('swr', VM('101110:rs:rt:imm16'), '%t, %i(%s)', ADDR_TYPE_NONE, 0);
    this.ll = ID('ll', VM('110000:rs:rt:imm16'), '%t, %O', ADDR_TYPE_NONE, 0);
    this.sc = ID('sc', VM('111000:rs:rt:imm16'), '%t, %O', ADDR_TYPE_NONE, 0);
    this.lwc1 = ID('lwc1', VM('110001:rs:ft:imm16'), '%T, %i(%s)', ADDR_TYPE_NONE, 0);
    this.swc1 = ID('swc1', VM('111001:rs:ft:imm16'), '%T, %i(%s)', ADDR_TYPE_NONE, 0);
    this.add_s = ID('add.s', VM('010001:10000:ft:fs:fd:000000'), '%D, %S, %T', ADDR_TYPE_NONE, 0);
    this.sub_s = ID('sub.s', VM('010001:10000:ft:fs:fd:000001'), '%D, %S, %T', ADDR_TYPE_NONE, 0);
    this.mul_s = ID('mul.s', VM('010001:10000:ft:fs:fd:000010'), '%D, %S, %T', ADDR_TYPE_NONE, 0);
    this.div_s = ID('div.s', VM('010001:10000:ft:fs:fd:000011'), '%D, %S, %T', ADDR_TYPE_NONE, 0);
    this.sqrt_s = ID('sqrt.s', VM('010001:10000:00000:fs:fd:000100'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.abs_s = ID('abs.s', VM('010001:10000:00000:fs:fd:000101'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.mov_s = ID('mov.s', VM('010001:10000:00000:fs:fd:000110'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.neg_s = ID('neg.s', VM('010001:10000:00000:fs:fd:000111'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.round_w_s = ID('round.w.s', VM('010001:10000:00000:fs:fd:001100'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.trunc_w_s = ID('trunc.w.s', VM('010001:10000:00000:fs:fd:001101'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.ceil_w_s = ID('ceil.w.s', VM('010001:10000:00000:fs:fd:001110'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.floor_w_s = ID('floor.w.s', VM('010001:10000:00000:fs:fd:001111'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.cvt_s_w = ID('cvt.s.w', VM('010001:10100:00000:fs:fd:100000'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.cvt_w_s = ID('cvt.w.s', VM('010001:10000:00000:fs:fd:100100'), '%D, %S', ADDR_TYPE_NONE, 0);
    this.mfc1 = ID('mfc1', VM('010001:00000:rt:c1dr:00000:000000'), '%t, %S', ADDR_TYPE_NONE, 0);
    this.mtc1 = ID('mtc1', VM('010001:00100:rt:c1dr:00000:000000'), '%t, %S', ADDR_TYPE_NONE, 0);
    this.cfc1 = ID('cfc1', VM('010001:00010:rt:c1cr:00000:000000'), '%t, %p', ADDR_TYPE_NONE, 0);
    this.ctc1 = ID('ctc1', VM('010001:00110:rt:c1cr:00000:000000'), '%t, %p', ADDR_TYPE_NONE, 0);
    this.c_f_s = ID('c.f.s', VM('010001:10000:ft:fs:00000:11:0000'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_un_s = ID('c.un.s', VM('010001:10000:ft:fs:00000:11:0001'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_eq_s = ID('c.eq.s', VM('010001:10000:ft:fs:00000:11:0010'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_ueq_s = ID('c.ueq.s', VM('010001:10000:ft:fs:00000:11:0011'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_olt_s = ID('c.olt.s', VM('010001:10000:ft:fs:00000:11:0100'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_ult_s = ID('c.ult.s', VM('010001:10000:ft:fs:00000:11:0101'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_ole_s = ID('c.ole.s', VM('010001:10000:ft:fs:00000:11:0110'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_ule_s = ID('c.ule.s', VM('010001:10000:ft:fs:00000:11:0111'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_sf_s = ID('c.sf.s', VM('010001:10000:ft:fs:00000:11:1000'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_ngle_s = ID('c.ngle.s', VM('010001:10000:ft:fs:00000:11:1001'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_seq_s = ID('c.seq.s', VM('010001:10000:ft:fs:00000:11:1010'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_ngl_s = ID('c.ngl.s', VM('010001:10000:ft:fs:00000:11:1011'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_lt_s = ID('c.lt.s', VM('010001:10000:ft:fs:00000:11:1100'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_nge_s = ID('c.nge.s', VM('010001:10000:ft:fs:00000:11:1101'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_le_s = ID('c.le.s', VM('010001:10000:ft:fs:00000:11:1110'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.c_ngt_s = ID('c.ngt.s', VM('010001:10000:ft:fs:00000:11:1111'), '%S, %T', ADDR_TYPE_NONE, 0);
    this.syscall = ID('syscall', VM('000000:imm20:001100'), '%C', ADDR_TYPE_NONE, INSTR_TYPE_SYSCALL);
    this.cache = ID('cache', VM('101111:rs:-----:imm16'), '%k, %o', ADDR_TYPE_NONE, 0);
    this.sync = ID('sync', VM('000000:00000:00000:00000:00000:001111'), '', ADDR_TYPE_NONE, 0);
    this._break = ID('break', VM('000000:imm20:001101'), '%c', ADDR_TYPE_NONE, INSTR_TYPE_BREAK);
    this.dbreak = ID('dbreak', VM('011100:00000:00000:00000:00000:111111'), '', ADDR_TYPE_NONE, INSTR_TYPE_PSP | INSTR_TYPE_BREAK);
    this.halt = ID('halt', VM('011100:00000:00000:00000:00000:000000'), '', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.dret = ID('dret', VM('011100:00000:00000:00000:00000:111110'), '', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.eret = ID('eret', VM('010000:10000:00000:00000:00000:011000'), '', ADDR_TYPE_NONE, 0);
    this.mfic = ID('mfic', VM('011100:rt:00000:00000:00000:100100'), '%t, %p', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mtic = ID('mtic', VM('011100:rt:00000:00000:00000:100110'), '%t, %p', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mfdr = ID('mfdr', VM('011100:00000:----------:00000:111101'), '%t, %r', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mtdr = ID('mtdr', VM('011100:00100:----------:00000:111101'), '%t, %r', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.cfc0 = ID('cfc0', VM('010000:00010:----------:00000:000000'), '%t, %p', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.ctc0 = ID('ctc0', VM('010000:00110:----------:00000:000000'), '%t, %p', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mfc0 = ID('mfc0', VM('010000:00000:----------:00000:000000'), '%t, %0', ADDR_TYPE_NONE, 0);
    this.mtc0 = ID('mtc0', VM('010000:00100:----------:00000:000000'), '%t, %0', ADDR_TYPE_NONE, 0);
    this.mfv = ID('mfv', VM('010010:00:011:rt:0:0000000:0:vd'), '%t, %zs', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mfvc = ID('mfvc', VM('010010:00:011:rt:0:0000000:1:vd'), '%t, %2d', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mtv = ID('mtv', VM('010010:00:111:rt:0:0000000:0:vd'), '%t, %zs', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mtvc = ID('mtvc', VM('010010:00:111:rt:0:0000000:1:vd'), '%t, %2d', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.lv_s = ID('lv.s', VM('110010:rs:vt5:imm14:vt2'), '%Xs, %Y', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.lv_q = ID('lv.q', VM('110110:rs:vt5:imm14:0:vt1'), '%Xq, %Y', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.lvl_q = ID('lvl.q', VM('110101:rs:vt5:imm14:0:vt1'), '%Xq, %Y', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.lvr_q = ID('lvr.q', VM('110101:rs:vt5:imm14:1:vt1'), '%Xq, %Y', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.sv_q = ID('sv.q', VM('111110:rs:vt5:imm14:0:vt1'), '%Xq, %Y', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vdot = ID('vdot', VM('011001:001:vt:two:vs:one:vd'), '%zs, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vscl = ID('vscl', VM('011001:010:vt:two:vs:one:vd'), '%zp, %yp, %xs', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsge = ID('vsge', VM('011011:110:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vslt = ID('vslt', VM('011011:111:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vrot = ID('vrot', VM('111100:111:01:imm5:two:vs:one:vd'), '%zp, %ys, %vr', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vzero = ID('vzero', VM('110100:00:000:0:0110:two:0000000:one:vd'), '%zp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vone = ID('vone', VM('110100:00:000:0:0111:two:0000000:one:vd'), '%zp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmov = ID('vmov', VM('110100:00:000:0:0000:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vabs = ID('vabs', VM('110100:00:000:0:0001:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vneg = ID('vneg', VM('110100:00:000:0:0010:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vocp = ID('vocp', VM('110100:00:010:0:0100:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsgn = ID('vsgn', VM('110100:00:010:0:1010:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vrcp = ID('vrcp', VM('110100:00:000:1:0000:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vrsq = ID('vrsq', VM('110100:00:000:1:0001:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsin = ID('vsin', VM('110100:00:000:1:0010:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vcos = ID('vcos', VM('110100:00:000:1:0011:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vexp2 = ID('vexp2', VM('110100:00:000:1:0100:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vlog2 = ID('vlog2', VM('110100:00:000:1:0101:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsqrt = ID('vsqrt', VM('110100:00:000:1:0110:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vasin = ID('vasin', VM('110100:00:000:1:0111:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vnrcp = ID('vnrcp', VM('110100:00:000:1:1000:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vnsin = ID('vnsin', VM('110100:00:000:1:1010:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vrexp2 = ID('vrexp2', VM('110100:00:000:1:1100:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsat0 = ID('vsat0', VM('110100:00:000:0:0100:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsat1 = ID('vsat1', VM('110100:00:000:0:0101:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vcst = ID('vcst', VM('110100:00:011:imm5:two:0000000:one:vd'), '%zp, %vk', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmmul = ID('vmmul', VM('111100:000:vt:two:vs:one:vd'), '%zm, %tym, %xm', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vhdp = ID('vhdp', VM('011001:100:vt:two:vs:one:vd'), '%zs, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vcrs_t = ID('vcrs.t', VM('011001:101:vt:1:vs:0:vd'), '%zt, %yt, %xt', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vcrsp_t = ID('vcrsp.t', VM('111100:101:vt:1:vs:0:vd'), '%zt, %yt, %xt', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vi2c = ID('vi2c', VM('110100:00:001:11:101:two:vs:one:vd'), '%zs, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vi2uc = ID('vi2uc', VM('110100:00:001:11:100:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vtfm2 = ID('vtfm2', VM('111100:001:vt:0:vs:1:vd'), '%zp, %ym, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vtfm3 = ID('vtfm3', VM('111100:010:vt:1:vs:0:vd'), '%zt, %yn, %xt', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vtfm4 = ID('vtfm4', VM('111100:011:vt:1:vs:1:vd'), '%zq, %yo, %xq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vhtfm2 = ID('vhtfm2', VM('111100:001:vt:0:vs:0:vd'), '%zp, %ym, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vhtfm3 = ID('vhtfm3', VM('111100:010:vt:0:vs:1:vd'), '%zt, %yn, %xt', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vhtfm4 = ID('vhtfm4', VM('111100:011:vt:1:vs:0:vd'), '%zq, %yo, %xq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsrt3 = ID('vsrt3', VM('110100:00:010:01000:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vfad = ID('vfad', VM('110100:00:010:00110:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmin = ID('vmin', VM('011011:010:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmax = ID('vmax', VM('011011:011:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vadd = ID('vadd', VM('011000:000:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsub = ID('vsub', VM('011000:001:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vdiv = ID('vdiv', VM('011000:111:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmul = ID('vmul', VM('011001:000:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vidt = ID('vidt', VM('110100:00:000:0:0011:two:0000000:one:vd'), '%zp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmidt = ID('vmidt', VM('111100:111:00:00011:two:0000000:one:vd'), '%zm', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.viim = ID('viim', VM('110111:11:0:vd:imm16'), '%xs, %vi', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmmov = ID('vmmov', VM('111100:111:00:00000:two:vs:one:vd'), '%zm, %ym', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmzero = ID('vmzero', VM('111100:111:00:00110:two:0000000:one:vd'), '%zm', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmone = ID('vmone', VM('111100:111:00:00111:two:0000000:one:vd'), '%zp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vnop = ID('vnop', VM('111111:1111111111:00000:00000000000'), '', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsync = ID('vsync', VM('111111:1111111111:00000:01100100000'), '', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vflush = ID('vflush', VM('111111:1111111111:00000:10000001101'), '', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vpfxd = ID('vpfxd', VM('110111:10:------------:mskw:mskz:msky:mskx:satw:satz:saty:satx'), '[%vp4, %vp5, %vp6, %vp7]', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vpfxs = ID('vpfxs', VM('110111:00:----:negw:negz:negy:negx:cstw:cstz:csty:cstx:absw:absz:absy:absx:swzw:swzz:swzy:swzx'), '[%vp0, %vp1, %vp2, %vp3]', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vpfxt = ID('vpfxt', VM('110111:01:----:negw:negz:negy:negx:cstw:cstz:csty:cstx:absw:absz:absy:absx:swzw:swzz:swzy:swzx'), '[%vp0, %vp1, %vp2, %vp3]', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vdet = ID('vdet', VM('011001:110:vt:two:vs:one:vd'), '%zs, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vrnds = ID('vrnds', VM('110100:00:001:00:000:two:vs:one:0000000'), '%ys', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vrndi = ID('vrndi', VM('110100:00:001:00:001:two:0000000:one:vd'), '%zp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vrndf1 = ID('vrndf1', VM('110100:00:001:00:010:two:0000000:one:vd'), '%zp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vrndf2 = ID('vrndf2', VM('110100:00:001:00:011:two:0000000:one:vd'), '%zp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vcmp = ID('vcmp', VM('011011:000:vt:two:vs:one:000:imm4'), '%Zn, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vcmovf = ID('vcmovf', VM('110100:10:101:01:imm3:two:vs:one:vd'), '%zp, %yp, %v3', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vcmovt = ID('vcmovt', VM('110100:10:101:00:imm3:two:vs:one:vd'), '%zp, %yp, %v3', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vavg = ID('vavg', VM('110100:00:010:00111:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vf2id = ID('vf2id', VM('110100:10:011:imm5:two:vs:one:vd'), '%zp, %yp, %v5', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vf2in = ID('vf2in', VM('110100:10:000:imm5:two:vs:one:vd'), '%zp, %yp, %v5', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vf2iu = ID('vf2iu', VM('110100:10:010:imm5:two:vs:one:vd'), '%zp, %yp, %v5', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vf2iz = ID('vf2iz', VM('110100:10:001:imm5:two:vs:one:vd'), '%zp, %yp, %v5', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vi2f = ID('vi2f', VM('110100:10:100:imm5:two:vs:one:vd'), '%zp, %yp, %v5', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vscmp = ID('vscmp', VM('011011:101:vt:two:vs:one:vd'), '%zp, %yp, %xp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmscl = ID('vmscl', VM('111100:100:vt:two:vs:one:vd'), '%zm, %ym, %xs', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vt4444_q = ID('vt4444.q', VM('110100:00:010:11001:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vt5551_q = ID('vt5551.q', VM('110100:00:010:11010:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vt5650_q = ID('vt5650.q', VM('110100:00:010:11011:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmfvc = ID('vmfvc', VM('110100:00:010:10000:1:imm7:0:vd'), '%zs, %2s', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vmtvc = ID('vmtvc', VM('110100:00:010:10001:0:vs:1:imm7'), '%2d, %ys', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.mfvme = ID('mfvme', VM('011010--------------------------'), '%t, %i', ADDR_TYPE_NONE, 0);
    this.mtvme = ID('mtvme', VM('101100--------------------------'), '%t, %i', ADDR_TYPE_NONE, 0);
    this.sv_s = ID('sv.s', VM('111010:rs:vt5:imm14:vt2'), '%Xs, %Y', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vfim = ID('vfim', VM('110111:11:1:vt:imm16'), '%xs, %vh', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.svl_q = ID('svl.q', VM('111101:rs:vt5:imm14:0:vt1'), '%Xq, %Y', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.svr_q = ID('svr.q', VM('111101:rs:vt5:imm14:1:vt1'), '%Xq, %Y', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vbfy1 = ID('vbfy1', VM('110100:00:010:00010:two:vs:one:vd'), '%zp, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vbfy2 = ID('vbfy2', VM('110100:00:010:00011:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vf2h = ID('vf2h', VM('110100:00:001:10:010:two:vs:one:vd'), '%zs, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vh2f = ID('vh2f', VM('110100:00:001:10:011:two:vs:one:vd'), '%zq, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vi2s = ID('vi2s', VM('110100:00:001:11:111:two:vs:one:vd'), '%zs, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vi2us = ID('vi2us', VM('110100:00:001:11:110:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vlgb = ID('vlgb', VM('110100:00:001:10:111:two:vs:one:vd'), '%zs, %ys', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vqmul = ID('vqmul', VM('111100:101:vt:1:vs:1:vd'), '%zq, %yq, %xq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vs2i = ID('vs2i', VM('110100:00:001:11:011:two:vs:one:vd'), '%zq, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vc2i = ID('vc2i', VM('110100:00:001:11:001:two:vs:one:vd'), '%zs, %ys, %xs', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vuc2i = ID('vuc2i', VM('110100:00:001:11:000:two:vs:one:vd'), '%zq, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsbn = ID('vsbn', VM('011000:010:vt:two:vs:one:vd'), '%zs, %ys, %xs', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsbz = ID('vsbz', VM('110100:00:001:10110:two:vs:one:vd'), '%zs, %ys', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsocp = ID('vsocp', VM('110100:00:010:00101:two:vs:one:vd'), '%zq, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsrt1 = ID('vsrt1', VM('110100:00:010:00000:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsrt2 = ID('vsrt2', VM('110100:00:010:00001:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vsrt4 = ID('vsrt4', VM('110100:00:010:01001:two:vs:one:vd'), '%zq, %yq', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vus2i = ID('vus2i', VM('110100:00:001:11010:two:vs:one:vd'), '%zq, %yp', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.vwbn = ID('vwbn', VM('110100:11:imm8:two:vs:one:vd'), '%zs, %xs, %I', ADDR_TYPE_NONE, INSTR_TYPE_PSP);
    this.bvf = ID('bvf', VM('010010:01:000:imm3:00:imm16'), '%Zc, %O', ADDR_TYPE_16, INSTR_TYPE_PSP | INSTR_TYPE_B);
    this.bvt = ID('bvt', VM('010010:01:000:imm3:01:imm16'), '%Zc, %O', ADDR_TYPE_16, INSTR_TYPE_PSP | INSTR_TYPE_B);
    this.bvfl = ID('bvfl', VM('010010:01:000:imm3:10:imm16'), '%Zc, %O', ADDR_TYPE_16, INSTR_TYPE_PSP | INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.bvtl = ID('bvtl', VM('010010:01:000:imm3:11:imm16'), '%Zc, %O', ADDR_TYPE_16, INSTR_TYPE_PSP | INSTR_TYPE_B | INSTR_TYPE_LIKELY);
    this.instructions = listOf([this.add, this.addu, this.addi, this.addiu, this.sub, this.subu, this.and, this.andi, this.nor, this.or, this.ori, this.xor, this.xori, this.sll, this.sllv, this.sra, this.srav, this.srl, this.srlv, this.rotr, this.rotrv, this.slt, this.slti, this.sltu, this.sltiu, this.lui, this.seb, this.seh, this.bitrev, this.max, this.min, this.div, this.divu, this.mult, this.multu, this.madd, this.maddu, this.msub, this.msubu, this.mfhi, this.mflo, this.mthi, this.mtlo, this.movz, this.movn, this.ext, this.ins, this.clz, this.clo, this.wsbh, this.wsbw, this.beq, this.beql, this.bgez, this.bgezl, this.bgezal, this.bgezall, this.bltz, this.bltzl, this.bltzal, this.bltzall, this.blez, this.blezl, this.bgtz, this.bgtzl, this.bne, this.bnel, this.j, this.jr, this.jalr, this.jal, this.bc1f, this.bc1t, this.bc1fl, this.bc1tl, this.lb, this.lh, this.lw, this.lwl, this.lwr, this.lbu, this.lhu, this.sb, this.sh, this.sw, this.swl, this.swr, this.ll, this.sc, this.lwc1, this.swc1, this.add_s, this.sub_s, this.mul_s, this.div_s, this.sqrt_s, this.abs_s, this.mov_s, this.neg_s, this.round_w_s, this.trunc_w_s, this.ceil_w_s, this.floor_w_s, this.cvt_s_w, this.cvt_w_s, this.mfc1, this.mtc1, this.cfc1, this.ctc1, this.c_f_s, this.c_un_s, this.c_eq_s, this.c_ueq_s, this.c_olt_s, this.c_ult_s, this.c_ole_s, this.c_ule_s, this.c_sf_s, this.c_ngle_s, this.c_seq_s, this.c_ngl_s, this.c_lt_s, this.c_nge_s, this.c_le_s, this.c_ngt_s, this.syscall, this.cache, this.sync, this._break, this.dbreak, this.halt, this.dret, this.eret, this.mfic, this.mtic, this.mfdr, this.mtdr, this.cfc0, this.ctc0, this.mfc0, this.mtc0, this.mfv, this.mfvc, this.mtv, this.mtvc, this.lv_s, this.lv_q, this.lvl_q, this.lvr_q, this.sv_q, this.vdot, this.vscl, this.vsge, this.vslt, this.vrot, this.vzero, this.vone, this.vmov, this.vabs, this.vneg, this.vocp, this.vsgn, this.vrcp, this.vrsq, this.vsin, this.vcos, this.vexp2, this.vlog2, this.vsqrt, this.vasin, this.vnrcp, this.vnsin, this.vrexp2, this.vsat0, this.vsat1, this.vcst, this.vmmul, this.vhdp, this.vcrs_t, this.vcrsp_t, this.vi2c, this.vi2uc, this.vtfm2, this.vtfm3, this.vtfm4, this.vhtfm2, this.vhtfm3, this.vhtfm4, this.vsrt3, this.vfad, this.vmin, this.vmax, this.vadd, this.vsub, this.vdiv, this.vmul, this.vidt, this.vmidt, this.viim, this.vmmov, this.vmzero, this.vmone, this.vnop, this.vsync, this.vflush, this.vpfxd, this.vpfxs, this.vpfxt, this.vdet, this.vrnds, this.vrndi, this.vrndf1, this.vrndf2, this.vcmp, this.vcmovf, this.vcmovt, this.vavg, this.vf2id, this.vf2in, this.vf2iu, this.vf2iz, this.vi2f, this.vscmp, this.vmscl, this.vt4444_q, this.vt5551_q, this.vt5650_q, this.vmfvc, this.vmtvc, this.mfvme, this.mtvme, this.sv_s, this.vfim, this.svl_q, this.svr_q, this.vbfy1, this.vbfy2, this.vf2h, this.vh2f, this.vi2s, this.vi2us, this.vlgb, this.vqmul, this.vs2i, this.vc2i, this.vuc2i, this.vsbn, this.vsbz, this.vsocp, this.vsrt1, this.vsrt2, this.vsrt4, this.vus2i, this.vwbn, this.bvf, this.bvt, this.bvfl, this.bvtl]);
    var $receiver = this.instructions;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.name, item));
    }
    this.instructionsByName = toMap(destination);
  }
  Instructions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Instructions',
    interfaces: []
  };
  var Instructions_instance = null;
  function Instructions_getInstance() {
    if (Instructions_instance === null) {
      new Instructions();
    }
    return Instructions_instance;
  }
  var ADDR_TYPE_NONE;
  var ADDR_TYPE_REG;
  var ADDR_TYPE_16;
  var ADDR_TYPE_26;
  var INSTR_TYPE_PSP;
  var INSTR_TYPE_SYSCALL;
  var INSTR_TYPE_B;
  var INSTR_TYPE_LIKELY;
  var INSTR_TYPE_JAL;
  var INSTR_TYPE_JUMP;
  var INSTR_TYPE_BREAK;
  function VM(format) {
    return new ValueMask(format);
  }
  function ID(name, vm, format, addressType, instructionType) {
    return new InstructionType(name, vm, format, addressType, instructionType);
  }
  function ValueMask(format) {
    this.format = format;
    this.value = 0;
    this.mask = 0;
    var tmp$, tmp$_0, tmp$_1;
    var counts = mapOf([to('cstw', 1), to('cstz', 1), to('csty', 1), to('cstx', 1), to('absw', 1), to('absz', 1), to('absy', 1), to('absx', 1), to('mskw', 1), to('mskz', 1), to('msky', 1), to('mskx', 1), to('negw', 1), to('negz', 1), to('negy', 1), to('negx', 1), to('one', 1), to('two', 1), to('vt1', 1), to('vt2', 2), to('satw', 2), to('satz', 2), to('saty', 2), to('satx', 2), to('swzw', 2), to('swzz', 2), to('swzy', 2), to('swzx', 2), to('imm3', 3), to('imm4', 4), to('fcond', 4), to('c0dr', 5), to('c0cr', 5), to('c1dr', 5), to('c1cr', 5), to('imm5', 5), to('vt5', 5), to('rs', 5), to('rd', 5), to('rt', 5), to('sa', 5), to('lsb', 5), to('msb', 5), to('fs', 5), to('fd', 5), to('ft', 5), to('vs', 7), to('vt', 7), to('vd', 7), to('imm7', 7), to('imm8', 8), to('imm14', 14), to('imm16', 16), to('imm20', 20), to('imm26', 26)]);
    var value = 0;
    var mask = 0;
    tmp$ = split(this.format, Kotlin.charArrayOf(58)).iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (Regex('^[01\\-]+$').matches_6bul2c$(item)) {
        tmp$_0 = iterator(item);
        while (tmp$_0.hasNext()) {
          var c = unboxChar(tmp$_0.next());
          value = value << 1;
          mask = mask << 1;
          if (c === 48) {
            value = value | 0;
            mask = mask | 1;
          }
          if (c === 49) {
            value = value | 1;
            mask = mask | 1;
          }
          if (c === 45) {
            value = value | 0;
            mask = mask | 0;
          }
        }
      }
       else {
        tmp$_1 = counts.get_11rb$(item);
        if (tmp$_1 == null) {
          throw new Exception("Invalid item '" + item + "'");
        }
        var displacement = tmp$_1;
        value = value << displacement;
        mask = mask << displacement;
      }
    }
    this.value = value;
    this.mask = mask;
  }
  ValueMask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValueMask',
    interfaces: []
  };
  ValueMask.prototype.component1 = function () {
    return this.format;
  };
  ValueMask.prototype.copy_61zpoe$ = function (format) {
    return new ValueMask(format === void 0 ? this.format : format);
  };
  ValueMask.prototype.toString = function () {
    return 'ValueMask(format=' + Kotlin.toString(this.format) + ')';
  };
  ValueMask.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    return result;
  };
  ValueMask.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.format, other.format))));
  };
  function InstructionType(name, vm, format, addressType, instructionType) {
    this.name = name;
    this.vm = vm;
    this.format = format;
    this.addressType = addressType;
    this.instructionType = instructionType;
  }
  InstructionType.prototype.match_za3lpa$ = function (i32) {
    return (i32 & this.vm.mask) === (this.vm.value & this.vm.mask);
  };
  InstructionType.prototype.isInstructionType_0 = function (mask) {
    return (this.instructionType & mask) !== 0;
  };
  Object.defineProperty(InstructionType.prototype, 'isSyscall', {
    get: function () {
      return this.isInstructionType_0(INSTR_TYPE_SYSCALL);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isBreak', {
    get: function () {
      return this.isInstructionType_0(INSTR_TYPE_BREAK);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isBranch', {
    get: function () {
      return this.isInstructionType_0(INSTR_TYPE_B);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isCall', {
    get: function () {
      return this.isInstructionType_0(INSTR_TYPE_JAL);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isJump', {
    get: function () {
      return this.isInstructionType_0(INSTR_TYPE_JAL) || this.isInstructionType_0(INSTR_TYPE_JUMP);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isJumpNoLink', {
    get: function () {
      return this.isInstructionType_0(INSTR_TYPE_JUMP);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isJal', {
    get: function () {
      return this.isInstructionType_0(INSTR_TYPE_JAL);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isJumpOrBranch', {
    get: function () {
      return this.isBranch || this.isJump;
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isLikely', {
    get: function () {
      return this.isInstructionType_0(INSTR_TYPE_LIKELY);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isRegister', {
    get: function () {
      return this.addressType === ADDR_TYPE_REG;
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isFixedAddressJump', {
    get: function () {
      return this.isJumpOrBranch && !this.isRegister;
    }
  });
  Object.defineProperty(InstructionType.prototype, 'hasDelayedBranch', {
    get: function () {
      return this.isJumpOrBranch;
    }
  });
  InstructionType.prototype.toString = function () {
    return "InstructionType('" + this.name + "', " + format('%08X', [this.vm.value]) + ', ' + format('%08X', [this.vm.mask]) + ')';
  };
  InstructionType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionType',
    interfaces: []
  };
  InstructionType.prototype.component1 = function () {
    return this.name;
  };
  InstructionType.prototype.component2 = function () {
    return this.vm;
  };
  InstructionType.prototype.component3 = function () {
    return this.format;
  };
  InstructionType.prototype.component4 = function () {
    return this.addressType;
  };
  InstructionType.prototype.component5 = function () {
    return this.instructionType;
  };
  InstructionType.prototype.copy_9bnh32$ = function (name, vm, format, addressType, instructionType) {
    return new InstructionType(name === void 0 ? this.name : name, vm === void 0 ? this.vm : vm, format === void 0 ? this.format : format, addressType === void 0 ? this.addressType : addressType, instructionType === void 0 ? this.instructionType : instructionType);
  };
  InstructionType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.vm) | 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    result = result * 31 + Kotlin.hashCode(this.addressType) | 0;
    result = result * 31 + Kotlin.hashCode(this.instructionType) | 0;
    return result;
  };
  InstructionType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.vm, other.vm) && Kotlin.equals(this.format, other.format) && Kotlin.equals(this.addressType, other.addressType) && Kotlin.equals(this.instructionType, other.instructionType)))));
  };
  function kescape($receiver) {
    if (equals($receiver, 'break'))
      return '_' + $receiver;
    else
      return replace($receiver, 46, 95);
  }
  function Syscalls() {
  }
  Syscalls.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Syscalls',
    interfaces: []
  };
  function TraceSyscallHandler() {
  }
  TraceSyscallHandler.prototype.syscall_acv9wa$ = function (state, id) {
    println(format('%08X: Called syscall: ### %04X', [state.getPC(), id]));
  };
  TraceSyscallHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraceSyscallHandler',
    interfaces: [Syscalls]
  };
  function Disassembler() {
    Disassembler_instance = this;
    InstructionDecoder.call(this);
    this.PERCENT_REGEX_0 = Regex('%\\w+');
  }
  Disassembler.prototype.gprStr_za3lpa$ = function (i) {
    return 'r' + i;
  };
  Disassembler.prototype.fprStr_za3lpa$ = function (i) {
    return 'f' + i;
  };
  Disassembler.prototype.disasmMacro_vux9f0$ = function (pc, i) {
    if (i === 0)
      return 'nop';
    var op = InstructionOpcodeDecoder_getInstance().invoke_za3lpa$(i);
    return this.disasm_w87lk9$(op, pc, i);
  };
  Disassembler.prototype.disasm_vux9f0$ = function (pc, i) {
    return this.disasm_w87lk9$(InstructionOpcodeDecoder_getInstance().invoke_za3lpa$(i), pc, i);
  };
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  Disassembler.prototype.disasm_w87lk9$ = function (op, pc, i) {
    var $receiver = op.format;
    var regex = this.PERCENT_REGEX_0;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = match != null ? match : throwNPE();
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        var tmp$ = sb.append_gw00v9$;
        var transform$result;
        var type = foundMatch.groupValues.get_za3lpa$(0);
        if (equals(type, '%j')) {
          transform$result = format('0x%08X', [pc & (new Kotlin.Long(-268435456, 0)).toInt() | (extract(i, 0, 26) * 4 | 0)]);
        }
         else if (equals(type, '%J')) {
          transform$result = this.gprStr_za3lpa$(i >>> 21 & 31);
        }
         else if (equals(type, '%d')) {
          transform$result = this.gprStr_za3lpa$(i >>> 11 & 31);
        }
         else if (equals(type, '%s')) {
          transform$result = this.gprStr_za3lpa$(i >>> 21 & 31);
        }
         else if (equals(type, '%a')) {
          transform$result = (i >>> 6 & 31).toString();
        }
         else if (equals(type, '%O')) {
          transform$result = 'PC + ' + ((i & 65535) << 16 >> 16);
        }
         else if (equals(type, '%t')) {
          transform$result = this.gprStr_za3lpa$(i >>> 16 & 31);
        }
         else if (equals(type, '%C')) {
          transform$result = format('0x%04X', [extract(i, 6, 20)]);
        }
         else if (equals(type, '%I')) {
          transform$result = (i & 65535).toString();
        }
         else if (equals(type, '%i')) {
          transform$result = ((i & 65535) << 16 >> 16).toString();
        }
         else {
          transform$result = type;
        }
        tmp$.call(sb, transform$result);
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var params = replace_20wsma$result;
    return op.name + ' ' + params;
  };
  Disassembler.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Disassembler',
    interfaces: [InstructionDecoder]
  };
  var Disassembler_instance = null;
  function Disassembler_getInstance() {
    if (Disassembler_instance === null) {
      new Disassembler();
    }
    return Disassembler_instance;
  }
  function disasm($receiver, pc) {
    return Disassembler_getInstance().disasm_vux9f0$(pc, $receiver.lw_za3lpa$(pc));
  }
  function disasmMacro($receiver, pc) {
    return Disassembler_getInstance().disasmMacro_vux9f0$(pc, $receiver.lw_za3lpa$(pc));
  }
  function CpuInterpreter(cpu, trace) {
    if (trace === void 0)
      trace = false;
    this.cpu = cpu;
    this.trace = trace;
    this.dispatcher = new InstructionDispatcher(InstructionInterpreter_getInstance());
  }
  CpuInterpreter.prototype.step = function () {
    if (this.cpu._PC === 0)
      throw new IllegalStateException('Trying to execute PC=0');
    if (this.trace)
      println(format('%08X: %s', [this.cpu._PC, disasmMacro(this.cpu.mem, this.cpu._PC)]));
    dispatch(this.dispatcher, this.cpu);
  };
  CpuInterpreter.prototype.steps_za3lpa$ = function (count) {
    for (var n = 0; n < count; n++)
      this.step();
  };
  CpuInterpreter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CpuInterpreter',
    interfaces: []
  };
  function InstructionInterpreter() {
    InstructionInterpreter_instance = this;
    InstructionEvaluator.call(this);
  }
  InstructionInterpreter.prototype.unimplemented_1wp5la$ = function (s, i) {
    throw new NotImplementedError_init('An operation is not implemented: ' + ('unimplemented: ' + i.name + ' : ' + toString(i) + (' at ' + format('%08X', [s._PC]))));
  };
  InstructionInterpreter.prototype.lui_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, (s.IR & 65535) << 16);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.add_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) + s.getGpr_za3lpa$(s.IR >>> 16 & 31) | 0);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.addu_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) + s.getGpr_za3lpa$(s.IR >>> 16 & 31) | 0);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.subu_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) - s.getGpr_za3lpa$(s.IR >>> 16 & 31) | 0);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.addiu_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.divu_11rb$ = function (s) {
    s.LO = udiv(s.getGpr_za3lpa$(s.IR >>> 21 & 31), s.getGpr_za3lpa$(s.IR >>> 16 & 31));
    s.HI = urem(s.getGpr_za3lpa$(s.IR >>> 21 & 31), s.getGpr_za3lpa$(s.IR >>> 16 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.mflo_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.LO);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.mfhi_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.HI);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.mfic_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.IC);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.mtlo_11rb$ = function (s) {
    s.LO = s.getGpr_za3lpa$(s.IR >>> 21 & 31);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.mthi_11rb$ = function (s) {
    s.HI = s.getGpr_za3lpa$(s.IR >>> 21 & 31);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.mtic_11rb$ = function (s) {
    s.IC = s.getGpr_za3lpa$(s.IR >>> 16 & 31);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.or_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) | s.getGpr_za3lpa$(s.IR >>> 16 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.xor_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) ^ s.getGpr_za3lpa$(s.IR >>> 16 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.and_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) & s.getGpr_za3lpa$(s.IR >>> 16 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.ori_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) | s.IR & 65535);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.xori_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) ^ s.IR & 65535);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.andi_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.getGpr_za3lpa$(s.IR >>> 21 & 31) & (s.IR & 65535));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.sll_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 16 & 31) << (s.IR >>> 6 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.sra_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 16 & 31) >> (s.IR >>> 6 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.srl_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, s.getGpr_za3lpa$(s.IR >>> 16 & 31) >>> (s.IR >>> 6 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.lb_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.mem.lb_za3lpa$(s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.lbu_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.mem.lbu_za3lpa$(s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.lh_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.mem.lh_za3lpa$(s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.lhu_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.mem.lhu_za3lpa$(s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.lw_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, s.mem.lw_za3lpa$(s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.sb_11rb$ = function (s) {
    s.mem.sb_vux9f0$(s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0, s.getGpr_za3lpa$(s.IR >>> 16 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.sh_11rb$ = function (s) {
    s.mem.sh_vux9f0$(s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0, s.getGpr_za3lpa$(s.IR >>> 16 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.sw_11rb$ = function (s) {
    s.mem.sw_vux9f0$(s.getGpr_za3lpa$(s.IR >>> 21 & 31) + ((s.IR & 65535) << 16 >> 16) | 0, s.getGpr_za3lpa$(s.IR >>> 16 & 31));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.syscall_11rb$ = function (s) {
    s.syscall_za3lpa$(extract(s.IR, 6, 20));
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.slt_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, util.IntEx.compare_vux9f0$(s.getGpr_za3lpa$(s.IR >>> 21 & 31), s.getGpr_za3lpa$(s.IR >>> 16 & 31)) < 0 ? 1 : 0);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.sltu_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 11 & 31, util.IntEx.compareUnsigned_vux9f0$(s.getGpr_za3lpa$(s.IR >>> 21 & 31), s.getGpr_za3lpa$(s.IR >>> 16 & 31)) < 0 ? 1 : 0);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.slti_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, util.IntEx.compare_vux9f0$(s.getGpr_za3lpa$(s.IR >>> 21 & 31), (s.IR & 65535) << 16 >> 16) < 0 ? 1 : 0);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.sltiu_11rb$ = function (s) {
    s.setGpr_vux9f0$(s.IR >>> 16 & 31, util.IntEx.compareUnsigned_vux9f0$(s.getGpr_za3lpa$(s.IR >>> 21 & 31), (s.IR & 65535) << 16 >> 16) < 0 ? 1 : 0);
    s.advance_pc_za3lpa$(4);
  };
  InstructionInterpreter.prototype.beq_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) === s.getGpr_za3lpa$(s.IR >>> 16 & 31);
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s.advance_pc_za3lpa$(4);
    }
  };
  InstructionInterpreter.prototype.bne_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) !== s.getGpr_za3lpa$(s.IR >>> 16 & 31);
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s.advance_pc_za3lpa$(4);
    }
  };
  InstructionInterpreter.prototype.bltz_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) < 0;
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s.advance_pc_za3lpa$(4);
    }
  };
  InstructionInterpreter.prototype.blez_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) <= 0;
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s.advance_pc_za3lpa$(4);
    }
  };
  InstructionInterpreter.prototype.bgtz_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) > 0;
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s.advance_pc_za3lpa$(4);
    }
  };
  InstructionInterpreter.prototype.bgez_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) >= 0;
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s.advance_pc_za3lpa$(4);
    }
  };
  InstructionInterpreter.prototype.beql_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) === s.getGpr_za3lpa$(s.IR >>> 16 & 31);
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s._PC = s._nPC + 4 | 0;
      s._nPC = s._PC + 4 | 0;
    }
  };
  InstructionInterpreter.prototype.bnel_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) !== s.getGpr_za3lpa$(s.IR >>> 16 & 31);
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s._PC = s._nPC + 4 | 0;
      s._nPC = s._PC + 4 | 0;
    }
  };
  InstructionInterpreter.prototype.bltzl_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) < 0;
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s._PC = s._nPC + 4 | 0;
      s._nPC = s._PC + 4 | 0;
    }
  };
  InstructionInterpreter.prototype.blezl_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) <= 0;
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s._PC = s._nPC + 4 | 0;
      s._nPC = s._PC + 4 | 0;
    }
  };
  InstructionInterpreter.prototype.bgtzl_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) > 0;
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s._PC = s._nPC + 4 | 0;
      s._nPC = s._PC + 4 | 0;
    }
  };
  InstructionInterpreter.prototype.bgezl_11rb$ = function (s) {
    var result = s.getGpr_za3lpa$(s.IR >>> 21 & 31) >= 0;
    if (result) {
      s.advance_pc_za3lpa$(((s.IR & 65535) << 16 >> 16) * 4 | 0);
    }
     else {
      s._PC = s._nPC + 4 | 0;
      s._nPC = s._PC + 4 | 0;
    }
  };
  InstructionInterpreter.prototype.j_11rb$ = function (s) {
    s._PC = s._nPC;
    s._nPC = s._PC & (new Kotlin.Long(-268435456, 0)).toInt() | (extract(s.IR, 0, 26) * 4 | 0);
  };
  InstructionInterpreter.prototype.jal_11rb$ = function (s) {
    set_RA(s, s._nPC + 4 | 0);
    s._PC = s._nPC;
    s._nPC = s._PC & (new Kotlin.Long(-268435456, 0)).toInt() | (extract(s.IR, 0, 26) * 4 | 0);
  };
  InstructionInterpreter.prototype.jr_11rb$ = function (s) {
    s._PC = s._nPC;
    s._nPC = s.getGpr_za3lpa$(s.IR >>> 21 & 31);
  };
  InstructionInterpreter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InstructionInterpreter',
    interfaces: [InstructionEvaluator]
  };
  var InstructionInterpreter_instance = null;
  function InstructionInterpreter_getInstance() {
    if (InstructionInterpreter_instance === null) {
      new InstructionInterpreter();
    }
    return InstructionInterpreter_instance;
  }
  function PspDisplay(mem) {
    this.mem = mem;
    this.rawDisplay = true;
    this.address = 1140850688;
    this.bufferWidth = 512;
    this.pixelFormat = PixelFormat$RGBA_8888_getInstance();
    this.sync = 0;
    this.displayMode = 0;
    this.displayWidth = 480;
    this.displayHeight = 272;
    this.temp_0 = new Int8Array((512 * 272 | 0) * 4 | 0);
  }
  PspDisplay.prototype.dispatchVsync = function () {
  };
  PspDisplay.prototype.decodeToBitmap32_59u9qz$ = function (out) {
    var tmp$;
    this.mem.read_3fge6q$(this.address, this.temp_0, 0, this.temp_0.length);
    if (equals(this.pixelFormat, PixelFormat$RGBA_5551_getInstance()))
      tmp$ = color.RGBA_5551;
    else
      tmp$ = color.RGBA;
    var color_0 = tmp$;
    color_0.decodeToBitmap32_131o2$(out, this.temp_0);
    var bmpData = out.data;
    for (var n = 0; n < bmpData.length; n++)
      bmpData[n] = bmpData[n] & 16777215 | (new Kotlin.Long(-16777216, 0)).toInt();
  };
  PspDisplay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PspDisplay',
    interfaces: []
  };
  function Elf(stream) {
    Elf$Companion_getInstance();
    this.stream = stream;
    this.header_zcfiun$_0 = this.header_zcfiun$_0;
    this.programHeadersStream_n6lbb0$_0 = this.programHeadersStream_n6lbb0$_0;
    this.sectionHeadersStream_6tlwwz$_0 = this.sectionHeadersStream_6tlwwz$_0;
    this.programHeaders_4fs524$_0 = this.programHeaders_4fs524$_0;
    this.sectionHeaders_v8gcub$_0 = this.sectionHeaders_v8gcub$_0;
    this.sectionHeaderStringTable_p15lw3$_0 = this.sectionHeaderStringTable_p15lw3$_0;
    this.stringTableStream_bu0j0n$_0 = this.stringTableStream_bu0j0n$_0;
    this.sectionHeadersByName_tlgokb$_0 = this.sectionHeadersByName_tlgokb$_0;
  }
  function Elf$Companion() {
    Elf$Companion_instance = this;
  }
  Elf$Companion.prototype.read_39qel5$ = function (stream) {
    var $receiver = new Elf(stream);
    $receiver.read_0();
    return $receiver;
  };
  Elf$Companion.prototype.fromStream_39qel5$ = function (stream) {
    return this.read_39qel5$(stream);
  };
  Elf$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Elf$Companion_instance = null;
  function Elf$Companion_getInstance() {
    if (Elf$Companion_instance === null) {
      new Elf$Companion();
    }
    return Elf$Companion_instance;
  }
  Object.defineProperty(Elf.prototype, 'header', {
    get: function () {
      if (this.header_zcfiun$_0 == null)
        return throwUPAE('header');
      return this.header_zcfiun$_0;
    },
    set: function (header) {
      this.header_zcfiun$_0 = header;
    }
  });
  Object.defineProperty(Elf.prototype, 'programHeadersStream', {
    get: function () {
      if (this.programHeadersStream_n6lbb0$_0 == null)
        return throwUPAE('programHeadersStream');
      return this.programHeadersStream_n6lbb0$_0;
    },
    set: function (programHeadersStream) {
      this.programHeadersStream_n6lbb0$_0 = programHeadersStream;
    }
  });
  Object.defineProperty(Elf.prototype, 'sectionHeadersStream', {
    get: function () {
      if (this.sectionHeadersStream_6tlwwz$_0 == null)
        return throwUPAE('sectionHeadersStream');
      return this.sectionHeadersStream_6tlwwz$_0;
    },
    set: function (sectionHeadersStream) {
      this.sectionHeadersStream_6tlwwz$_0 = sectionHeadersStream;
    }
  });
  Object.defineProperty(Elf.prototype, 'programHeaders', {
    get: function () {
      if (this.programHeaders_4fs524$_0 == null)
        return throwUPAE('programHeaders');
      return this.programHeaders_4fs524$_0;
    },
    set: function (programHeaders) {
      this.programHeaders_4fs524$_0 = programHeaders;
    }
  });
  Object.defineProperty(Elf.prototype, 'sectionHeaders', {
    get: function () {
      if (this.sectionHeaders_v8gcub$_0 == null)
        return throwUPAE('sectionHeaders');
      return this.sectionHeaders_v8gcub$_0;
    },
    set: function (sectionHeaders) {
      this.sectionHeaders_v8gcub$_0 = sectionHeaders;
    }
  });
  Object.defineProperty(Elf.prototype, 'sectionHeaderStringTable', {
    get: function () {
      if (this.sectionHeaderStringTable_p15lw3$_0 == null)
        return throwUPAE('sectionHeaderStringTable');
      return this.sectionHeaderStringTable_p15lw3$_0;
    },
    set: function (sectionHeaderStringTable) {
      this.sectionHeaderStringTable_p15lw3$_0 = sectionHeaderStringTable;
    }
  });
  Object.defineProperty(Elf.prototype, 'stringTableStream', {
    get: function () {
      if (this.stringTableStream_bu0j0n$_0 == null)
        return throwUPAE('stringTableStream');
      return this.stringTableStream_bu0j0n$_0;
    },
    set: function (stringTableStream) {
      this.stringTableStream_bu0j0n$_0 = stringTableStream;
    }
  });
  Object.defineProperty(Elf.prototype, 'sectionHeadersByName', {
    get: function () {
      if (this.sectionHeadersByName_tlgokb$_0 == null)
        return throwUPAE('sectionHeadersByName');
      return this.sectionHeadersByName_tlgokb$_0;
    },
    set: function (sectionHeadersByName) {
      this.sectionHeadersByName_tlgokb$_0 = sectionHeadersByName;
    }
  });
  Elf.prototype.getSectionHeader_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.sectionHeadersByName.get_11rb$(name)) != null ? tmp$ : invalidOp("Can't find section header '" + name + "'");
  };
  Elf.prototype.read_0 = function () {
    var tmp$, tmp$_0;
    this.header = Elf$Header$Companion_getInstance().invoke_39qel5$(this.stream);
    this.programHeadersStream = sliceWithSize(this.stream, Kotlin.Long.fromInt(this.header.programHeaderOffset), Kotlin.Long.fromInt(Kotlin.imul(this.header.programHeaderCount, this.header.programHeaderEntrySize)));
    this.sectionHeadersStream = sliceWithSize(this.stream, Kotlin.Long.fromInt(this.header.sectionHeaderOffset), Kotlin.Long.fromInt(Kotlin.imul(this.header.sectionHeaderCount, this.header.sectionHeaderEntrySize)));
    var $receiver = until(0, this.header.programHeaderCount);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(ElfProgramHeader$Companion_getInstance().invoke_39qel5$(this.programHeadersStream));
    }
    this.programHeaders = destination;
    var $receiver_0 = until(0, this.header.sectionHeaderCount);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(ElfSectionHeader$Companion_getInstance().invoke_39qel5$(this.sectionHeadersStream));
    }
    this.sectionHeaders = destination_0;
    this.sectionHeaderStringTable = this.sectionHeaders.get_za3lpa$(this.header.sectionHeaderStringTable);
    this.stringTableStream = this.getSectionHeaderFileStream_0(this.sectionHeaderStringTable);
    this.sectionHeadersByName = lmapOf([]);
    tmp$ = this.sectionHeaders.iterator();
    while (tmp$.hasNext()) {
      var sectionHeader = tmp$.next();
      var name = this.getStringFromStringTable_0(sectionHeader.nameOffset);
      sectionHeader.name = name;
      if (!((tmp$_0 = sectionHeader.type) != null ? tmp$_0.equals(ElfSectionHeaderType$Companion_getInstance().Null) : null)) {
        sectionHeader.stream = this.getSectionHeaderFileStream_0(sectionHeader);
      }
      this.sectionHeadersByName.put_xwzc9p$(name, sectionHeader);
    }
  };
  Elf.prototype.getSectionHeaderFileStream_0 = function (sectionHeader) {
    var tmp$, tmp$_0;
    tmp$ = sectionHeader.type;
    if (equals(tmp$, ElfSectionHeaderType$Companion_getInstance().NoBits) || equals(tmp$, ElfSectionHeaderType$Companion_getInstance().Null))
      tmp$_0 = sliceWithSize_0(this.stream, 0, 0);
    else
      tmp$_0 = sliceWithSize(this.stream, Kotlin.Long.fromInt(sectionHeader.offset), Kotlin.Long.fromInt(sectionHeader.size));
    return tmp$_0;
  };
  Elf.prototype.getStringFromStringTable_0 = function (index) {
    this.stringTableStream.position = Kotlin.Long.fromInt(index);
    return readStringz(this.stringTableStream);
  };
  function Elf$Header(magic, clazz, data, idVersion, padding, type, machine, version, entryPoint, programHeaderOffset, sectionHeaderOffset, flags, elfHeaderSize, programHeaderEntrySize, programHeaderCount, sectionHeaderEntrySize, sectionHeaderCount, sectionHeaderStringTable) {
    Elf$Header$Companion_getInstance();
    this.magic = magic;
    this.clazz = clazz;
    this.data = data;
    this.idVersion = idVersion;
    this.padding = padding;
    this.type = type;
    this.machine = machine;
    this.version = version;
    this.entryPoint = entryPoint;
    this.programHeaderOffset = programHeaderOffset;
    this.sectionHeaderOffset = sectionHeaderOffset;
    this.flags = flags;
    this.elfHeaderSize = elfHeaderSize;
    this.programHeaderEntrySize = programHeaderEntrySize;
    this.programHeaderCount = programHeaderCount;
    this.sectionHeaderEntrySize = sectionHeaderEntrySize;
    this.sectionHeaderCount = sectionHeaderCount;
    this.sectionHeaderStringTable = sectionHeaderStringTable;
    if (!this.hasValidMagic)
      invalidOp('Not an ELF file');
    if (!this.hasValidMachine)
      invalidOp('Not a PSP ELF file');
    if (!this.hasValidType)
      invalidOp('Not a executable or a Prx but has type ' + this.type);
  }
  function Elf$Header$Companion() {
    Elf$Header$Companion_instance = this;
  }
  Elf$Header$Companion.prototype.invoke_39qel5$ = function (s) {
    var $receiver = readStringz_0(s, 4);
    if (!equals($receiver, '\x7FELF'))
      invalidOp('Not an ELF file');
    return new Elf$Header($receiver, readU8(s), readU8(s), readU8(s), readUByteArray(s, 9), readU16_le(s), readU16_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS16_le(s), readS16_le(s), readU16_le(s), readU16_le(s), readU16_le(s), readU16_le(s));
  };
  Elf$Header$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Elf$Header$Companion_instance = null;
  function Elf$Header$Companion_getInstance() {
    if (Elf$Header$Companion_instance === null) {
      new Elf$Header$Companion();
    }
    return Elf$Header$Companion_instance;
  }
  Object.defineProperty(Elf$Header.prototype, 'hasValidMagic', {
    get: function () {
      return equals(this.magic, '\x7FELF');
    }
  });
  Object.defineProperty(Elf$Header.prototype, 'hasValidMachine', {
    get: function () {
      return this.machine === ElfMachine$ALLEGREX_getInstance().id;
    }
  });
  Object.defineProperty(Elf$Header.prototype, 'hasValidType', {
    get: function () {
      return listOf([ElfType$Executable_getInstance().id, ElfType$Prx_getInstance().id]).contains_11rb$(this.type);
    }
  });
  Elf$Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: []
  };
  Elf$Header.prototype.component1 = function () {
    return this.magic;
  };
  Elf$Header.prototype.component2 = function () {
    return this.clazz;
  };
  Elf$Header.prototype.component3 = function () {
    return this.data;
  };
  Elf$Header.prototype.component4 = function () {
    return this.idVersion;
  };
  Elf$Header.prototype.component5 = function () {
    return this.padding;
  };
  Elf$Header.prototype.component6 = function () {
    return this.type;
  };
  Elf$Header.prototype.component7 = function () {
    return this.machine;
  };
  Elf$Header.prototype.component8 = function () {
    return this.version;
  };
  Elf$Header.prototype.component9 = function () {
    return this.entryPoint;
  };
  Elf$Header.prototype.component10 = function () {
    return this.programHeaderOffset;
  };
  Elf$Header.prototype.component11 = function () {
    return this.sectionHeaderOffset;
  };
  Elf$Header.prototype.component12 = function () {
    return this.flags;
  };
  Elf$Header.prototype.component13 = function () {
    return this.elfHeaderSize;
  };
  Elf$Header.prototype.component14 = function () {
    return this.programHeaderEntrySize;
  };
  Elf$Header.prototype.component15 = function () {
    return this.programHeaderCount;
  };
  Elf$Header.prototype.component16 = function () {
    return this.sectionHeaderEntrySize;
  };
  Elf$Header.prototype.component17 = function () {
    return this.sectionHeaderCount;
  };
  Elf$Header.prototype.component18 = function () {
    return this.sectionHeaderStringTable;
  };
  Elf$Header.prototype.copy_jbxty2$ = function (magic, clazz, data, idVersion, padding, type, machine, version, entryPoint, programHeaderOffset, sectionHeaderOffset, flags, elfHeaderSize, programHeaderEntrySize, programHeaderCount, sectionHeaderEntrySize, sectionHeaderCount, sectionHeaderStringTable) {
    return new Elf$Header(magic === void 0 ? this.magic : magic, clazz === void 0 ? this.clazz : clazz, data === void 0 ? this.data : data, idVersion === void 0 ? this.idVersion : idVersion, padding === void 0 ? this.padding : padding, type === void 0 ? this.type : type, machine === void 0 ? this.machine : machine, version === void 0 ? this.version : version, entryPoint === void 0 ? this.entryPoint : entryPoint, programHeaderOffset === void 0 ? this.programHeaderOffset : programHeaderOffset, sectionHeaderOffset === void 0 ? this.sectionHeaderOffset : sectionHeaderOffset, flags === void 0 ? this.flags : flags, elfHeaderSize === void 0 ? this.elfHeaderSize : elfHeaderSize, programHeaderEntrySize === void 0 ? this.programHeaderEntrySize : programHeaderEntrySize, programHeaderCount === void 0 ? this.programHeaderCount : programHeaderCount, sectionHeaderEntrySize === void 0 ? this.sectionHeaderEntrySize : sectionHeaderEntrySize, sectionHeaderCount === void 0 ? this.sectionHeaderCount : sectionHeaderCount, sectionHeaderStringTable === void 0 ? this.sectionHeaderStringTable : sectionHeaderStringTable);
  };
  Elf$Header.prototype.toString = function () {
    return 'Header(magic=' + Kotlin.toString(this.magic) + (', clazz=' + Kotlin.toString(this.clazz)) + (', data=' + Kotlin.toString(this.data)) + (', idVersion=' + Kotlin.toString(this.idVersion)) + (', padding=' + Kotlin.toString(this.padding)) + (', type=' + Kotlin.toString(this.type)) + (', machine=' + Kotlin.toString(this.machine)) + (', version=' + Kotlin.toString(this.version)) + (', entryPoint=' + Kotlin.toString(this.entryPoint)) + (', programHeaderOffset=' + Kotlin.toString(this.programHeaderOffset)) + (', sectionHeaderOffset=' + Kotlin.toString(this.sectionHeaderOffset)) + (', flags=' + Kotlin.toString(this.flags)) + (', elfHeaderSize=' + Kotlin.toString(this.elfHeaderSize)) + (', programHeaderEntrySize=' + Kotlin.toString(this.programHeaderEntrySize)) + (', programHeaderCount=' + Kotlin.toString(this.programHeaderCount)) + (', sectionHeaderEntrySize=' + Kotlin.toString(this.sectionHeaderEntrySize)) + (', sectionHeaderCount=' + Kotlin.toString(this.sectionHeaderCount)) + (', sectionHeaderStringTable=' + Kotlin.toString(this.sectionHeaderStringTable)) + ')';
  };
  Elf$Header.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.magic) | 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    result = result * 31 + Kotlin.hashCode(this.idVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.padding) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.machine) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.entryPoint) | 0;
    result = result * 31 + Kotlin.hashCode(this.programHeaderOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.sectionHeaderOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.elfHeaderSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.programHeaderEntrySize) | 0;
    result = result * 31 + Kotlin.hashCode(this.programHeaderCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.sectionHeaderEntrySize) | 0;
    result = result * 31 + Kotlin.hashCode(this.sectionHeaderCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.sectionHeaderStringTable) | 0;
    return result;
  };
  Elf$Header.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.magic, other.magic) && Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.data, other.data) && Kotlin.equals(this.idVersion, other.idVersion) && Kotlin.equals(this.padding, other.padding) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.machine, other.machine) && Kotlin.equals(this.version, other.version) && Kotlin.equals(this.entryPoint, other.entryPoint) && Kotlin.equals(this.programHeaderOffset, other.programHeaderOffset) && Kotlin.equals(this.sectionHeaderOffset, other.sectionHeaderOffset) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.elfHeaderSize, other.elfHeaderSize) && Kotlin.equals(this.programHeaderEntrySize, other.programHeaderEntrySize) && Kotlin.equals(this.programHeaderCount, other.programHeaderCount) && Kotlin.equals(this.sectionHeaderEntrySize, other.sectionHeaderEntrySize) && Kotlin.equals(this.sectionHeaderCount, other.sectionHeaderCount) && Kotlin.equals(this.sectionHeaderStringTable, other.sectionHeaderStringTable)))));
  };
  Object.defineProperty(Elf.prototype, 'isPrx', {
    get: function () {
      return (this.header.type & ElfType$Prx_getInstance().id) !== 0;
    }
  });
  Object.defineProperty(Elf.prototype, 'needsRelocation', {
    get: function () {
      return this.isPrx || this.header.entryPoint < Memory$Companion_getInstance().MAIN_OFFSET;
    }
  });
  Elf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Elf',
    interfaces: []
  };
  function ElfProgramHeaderType(id) {
    ElfProgramHeaderType$Companion_getInstance();
    this.id_pw4186$_0 = id;
  }
  Object.defineProperty(ElfProgramHeaderType.prototype, 'id', {
    get: function () {
      return this.id_pw4186$_0;
    }
  });
  function ElfProgramHeaderType$Companion() {
    ElfProgramHeaderType$Companion_instance = this;
    this.NoLoad = new ElfProgramHeaderType(0);
    this.Load = new ElfProgramHeaderType(1);
    this.Reloc1 = new ElfProgramHeaderType(1879048352);
    this.Reloc2 = new ElfProgramHeaderType(1879048353);
  }
  ElfProgramHeaderType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfProgramHeaderType$Companion_instance = null;
  function ElfProgramHeaderType$Companion_getInstance() {
    if (ElfProgramHeaderType$Companion_instance === null) {
      new ElfProgramHeaderType$Companion();
    }
    return ElfProgramHeaderType$Companion_instance;
  }
  ElfProgramHeaderType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfProgramHeaderType',
    interfaces: [Flags]
  };
  ElfProgramHeaderType.prototype.component1 = function () {
    return this.id;
  };
  ElfProgramHeaderType.prototype.copy_za3lpa$ = function (id) {
    return new ElfProgramHeaderType(id === void 0 ? this.id : id);
  };
  ElfProgramHeaderType.prototype.toString = function () {
    return 'ElfProgramHeaderType(id=' + Kotlin.toString(this.id) + ')';
  };
  ElfProgramHeaderType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  ElfProgramHeaderType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function ElfSectionHeaderType(id) {
    ElfSectionHeaderType$Companion_getInstance();
    this.id_f4ssiz$_0 = id;
  }
  Object.defineProperty(ElfSectionHeaderType.prototype, 'id', {
    get: function () {
      return this.id_f4ssiz$_0;
    }
  });
  function ElfSectionHeaderType$Companion() {
    ElfSectionHeaderType$Companion_instance = this;
    this.Null = new ElfSectionHeaderType(0);
    this.ProgramBits = new ElfSectionHeaderType(1);
    this.SYMTAB = new ElfSectionHeaderType(2);
    this.STRTAB = new ElfSectionHeaderType(3);
    this.RELA = new ElfSectionHeaderType(4);
    this.HASH = new ElfSectionHeaderType(5);
    this.DYNAMIC = new ElfSectionHeaderType(6);
    this.NOTE = new ElfSectionHeaderType(7);
    this.NoBits = new ElfSectionHeaderType(8);
    this.Relocation = new ElfSectionHeaderType(9);
    this.SHLIB = new ElfSectionHeaderType(10);
    this.DYNSYM = new ElfSectionHeaderType(11);
    this.LOPROC = new ElfSectionHeaderType(1879048192);
    this.HIPROC = new ElfSectionHeaderType(2147483647);
    this.LOUSER = new ElfSectionHeaderType((new Kotlin.Long(-2147483648, 0)).toInt());
    this.HIUSER = new ElfSectionHeaderType((new Kotlin.Long(-1, 0)).toInt());
    this.PrxRelocation = new ElfSectionHeaderType(this.LOPROC.id | 160);
    this.PrxRelocation_FW5 = new ElfSectionHeaderType(this.LOPROC.id | 161);
  }
  ElfSectionHeaderType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfSectionHeaderType$Companion_instance = null;
  function ElfSectionHeaderType$Companion_getInstance() {
    if (ElfSectionHeaderType$Companion_instance === null) {
      new ElfSectionHeaderType$Companion();
    }
    return ElfSectionHeaderType$Companion_instance;
  }
  ElfSectionHeaderType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfSectionHeaderType',
    interfaces: [Flags]
  };
  ElfSectionHeaderType.prototype.component1 = function () {
    return this.id;
  };
  ElfSectionHeaderType.prototype.copy_za3lpa$ = function (id) {
    return new ElfSectionHeaderType(id === void 0 ? this.id : id);
  };
  ElfSectionHeaderType.prototype.toString = function () {
    return 'ElfSectionHeaderType(id=' + Kotlin.toString(this.id) + ')';
  };
  ElfSectionHeaderType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  ElfSectionHeaderType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function ElfSectionHeaderFlags(id) {
    ElfSectionHeaderFlags$Companion_getInstance();
    this.id_altqm0$_0 = id;
  }
  Object.defineProperty(ElfSectionHeaderFlags.prototype, 'id', {
    get: function () {
      return this.id_altqm0$_0;
    }
  });
  function ElfSectionHeaderFlags$Companion() {
    ElfSectionHeaderFlags$Companion_instance = this;
    this.None = new ElfSectionHeaderFlags(0);
    this.Write = new ElfSectionHeaderFlags(1);
    this.Allocate = new ElfSectionHeaderFlags(2);
    this.Execute = new ElfSectionHeaderFlags(4);
  }
  ElfSectionHeaderFlags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfSectionHeaderFlags$Companion_instance = null;
  function ElfSectionHeaderFlags$Companion_getInstance() {
    if (ElfSectionHeaderFlags$Companion_instance === null) {
      new ElfSectionHeaderFlags$Companion();
    }
    return ElfSectionHeaderFlags$Companion_instance;
  }
  ElfSectionHeaderFlags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfSectionHeaderFlags',
    interfaces: [Flags]
  };
  ElfSectionHeaderFlags.prototype.component1 = function () {
    return this.id;
  };
  ElfSectionHeaderFlags.prototype.copy_za3lpa$ = function (id) {
    return new ElfSectionHeaderFlags(id === void 0 ? this.id : id);
  };
  ElfSectionHeaderFlags.prototype.toString = function () {
    return 'ElfSectionHeaderFlags(id=' + Kotlin.toString(this.id) + ')';
  };
  ElfSectionHeaderFlags.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  ElfSectionHeaderFlags.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function ElfProgramHeaderFlags(id) {
    ElfProgramHeaderFlags$Companion_getInstance();
    this.id = id;
  }
  function ElfProgramHeaderFlags$Companion() {
    ElfProgramHeaderFlags$Companion_instance = this;
    this.Executable = 1;
    this.Writable = 2;
    this.Readable = 4;
  }
  ElfProgramHeaderFlags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfProgramHeaderFlags$Companion_instance = null;
  function ElfProgramHeaderFlags$Companion_getInstance() {
    if (ElfProgramHeaderFlags$Companion_instance === null) {
      new ElfProgramHeaderFlags$Companion();
    }
    return ElfProgramHeaderFlags$Companion_instance;
  }
  ElfProgramHeaderFlags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfProgramHeaderFlags',
    interfaces: []
  };
  ElfProgramHeaderFlags.prototype.component1 = function () {
    return this.id;
  };
  ElfProgramHeaderFlags.prototype.copy_za3lpa$ = function (id) {
    return new ElfProgramHeaderFlags(id === void 0 ? this.id : id);
  };
  ElfProgramHeaderFlags.prototype.toString = function () {
    return 'ElfProgramHeaderFlags(id=' + Kotlin.toString(this.id) + ')';
  };
  ElfProgramHeaderFlags.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  ElfProgramHeaderFlags.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function ElfType(name, ordinal, id) {
    Enum.call(this);
    this.id_ywd483$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElfType_initFields() {
    ElfType_initFields = function () {
    };
    ElfType$Executable_instance = new ElfType('Executable', 0, 2);
    ElfType$Prx_instance = new ElfType('Prx', 1, 65440);
    ElfType$Companion_getInstance();
  }
  Object.defineProperty(ElfType.prototype, 'id', {
    get: function () {
      return this.id_ywd483$_0;
    }
  });
  var ElfType$Executable_instance;
  function ElfType$Executable_getInstance() {
    ElfType_initFields();
    return ElfType$Executable_instance;
  }
  var ElfType$Prx_instance;
  function ElfType$Prx_getInstance() {
    ElfType_initFields();
    return ElfType$Prx_instance;
  }
  function ElfType$Companion() {
    ElfType$Companion_instance = this;
    var $receiver = ElfType$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  ElfType$Companion.prototype.invoke_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : invalidOp("Can't find index " + index + ' in class');
  };
  ElfType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfType$Companion_instance = null;
  function ElfType$Companion_getInstance() {
    ElfType_initFields();
    if (ElfType$Companion_instance === null) {
      new ElfType$Companion();
    }
    return ElfType$Companion_instance;
  }
  ElfType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfType',
    interfaces: [NumericEnum, Enum]
  };
  function ElfType$values() {
    return [ElfType$Executable_getInstance(), ElfType$Prx_getInstance()];
  }
  ElfType.values = ElfType$values;
  function ElfType$valueOf(name) {
    switch (name) {
      case 'Executable':
        return ElfType$Executable_getInstance();
      case 'Prx':
        return ElfType$Prx_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.elf.ElfType.' + name);
    }
  }
  ElfType.valueOf_61zpoe$ = ElfType$valueOf;
  function ElfMachine(name, ordinal, id) {
    Enum.call(this);
    this.id_1aklmi$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElfMachine_initFields() {
    ElfMachine_initFields = function () {
    };
    ElfMachine$ALLEGREX_instance = new ElfMachine('ALLEGREX', 0, 8);
    ElfMachine$Companion_getInstance();
  }
  Object.defineProperty(ElfMachine.prototype, 'id', {
    get: function () {
      return this.id_1aklmi$_0;
    }
  });
  var ElfMachine$ALLEGREX_instance;
  function ElfMachine$ALLEGREX_getInstance() {
    ElfMachine_initFields();
    return ElfMachine$ALLEGREX_instance;
  }
  function ElfMachine$Companion() {
    ElfMachine$Companion_instance = this;
    var $receiver = ElfMachine$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  ElfMachine$Companion.prototype.invoke_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : invalidOp("Can't find index " + index + ' in class');
  };
  ElfMachine$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfMachine$Companion_instance = null;
  function ElfMachine$Companion_getInstance() {
    ElfMachine_initFields();
    if (ElfMachine$Companion_instance === null) {
      new ElfMachine$Companion();
    }
    return ElfMachine$Companion_instance;
  }
  ElfMachine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfMachine',
    interfaces: [NumericEnum, Enum]
  };
  function ElfMachine$values() {
    return [ElfMachine$ALLEGREX_getInstance()];
  }
  ElfMachine.values = ElfMachine$values;
  function ElfMachine$valueOf(name) {
    switch (name) {
      case 'ALLEGREX':
        return ElfMachine$ALLEGREX_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.elf.ElfMachine.' + name);
    }
  }
  ElfMachine.valueOf_61zpoe$ = ElfMachine$valueOf;
  function ElfPspModuleFlags(name, ordinal, id) {
    Enum.call(this);
    this.id_zh8gh$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElfPspModuleFlags_initFields() {
    ElfPspModuleFlags_initFields = function () {
    };
    ElfPspModuleFlags$User_instance = new ElfPspModuleFlags('User', 0, 0);
    ElfPspModuleFlags$Kernel_instance = new ElfPspModuleFlags('Kernel', 1, 4096);
    ElfPspModuleFlags$Companion_getInstance();
  }
  Object.defineProperty(ElfPspModuleFlags.prototype, 'id', {
    get: function () {
      return this.id_zh8gh$_0;
    }
  });
  var ElfPspModuleFlags$User_instance;
  function ElfPspModuleFlags$User_getInstance() {
    ElfPspModuleFlags_initFields();
    return ElfPspModuleFlags$User_instance;
  }
  var ElfPspModuleFlags$Kernel_instance;
  function ElfPspModuleFlags$Kernel_getInstance() {
    ElfPspModuleFlags_initFields();
    return ElfPspModuleFlags$Kernel_instance;
  }
  function ElfPspModuleFlags$Companion() {
    ElfPspModuleFlags$Companion_instance = this;
    var $receiver = ElfPspModuleFlags$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  ElfPspModuleFlags$Companion.prototype.invoke_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : invalidOp("Can't find index " + index + ' in class');
  };
  ElfPspModuleFlags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfPspModuleFlags$Companion_instance = null;
  function ElfPspModuleFlags$Companion_getInstance() {
    ElfPspModuleFlags_initFields();
    if (ElfPspModuleFlags$Companion_instance === null) {
      new ElfPspModuleFlags$Companion();
    }
    return ElfPspModuleFlags$Companion_instance;
  }
  ElfPspModuleFlags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfPspModuleFlags',
    interfaces: [NumericEnum, Enum]
  };
  function ElfPspModuleFlags$values() {
    return [ElfPspModuleFlags$User_getInstance(), ElfPspModuleFlags$Kernel_getInstance()];
  }
  ElfPspModuleFlags.values = ElfPspModuleFlags$values;
  function ElfPspModuleFlags$valueOf(name) {
    switch (name) {
      case 'User':
        return ElfPspModuleFlags$User_getInstance();
      case 'Kernel':
        return ElfPspModuleFlags$Kernel_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.elf.ElfPspModuleFlags.' + name);
    }
  }
  ElfPspModuleFlags.valueOf_61zpoe$ = ElfPspModuleFlags$valueOf;
  function ElfPspLibFlags(name, ordinal, id) {
    Enum.call(this);
    this.id_t9xycu$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElfPspLibFlags_initFields() {
    ElfPspLibFlags_initFields = function () {
    };
    ElfPspLibFlags$DirectJump_instance = new ElfPspLibFlags('DirectJump', 0, 1);
    ElfPspLibFlags$Syscall_instance = new ElfPspLibFlags('Syscall', 1, 16384);
    ElfPspLibFlags$SysLib_instance = new ElfPspLibFlags('SysLib', 2, 32768);
    ElfPspLibFlags$Companion_getInstance();
  }
  Object.defineProperty(ElfPspLibFlags.prototype, 'id', {
    get: function () {
      return this.id_t9xycu$_0;
    }
  });
  var ElfPspLibFlags$DirectJump_instance;
  function ElfPspLibFlags$DirectJump_getInstance() {
    ElfPspLibFlags_initFields();
    return ElfPspLibFlags$DirectJump_instance;
  }
  var ElfPspLibFlags$Syscall_instance;
  function ElfPspLibFlags$Syscall_getInstance() {
    ElfPspLibFlags_initFields();
    return ElfPspLibFlags$Syscall_instance;
  }
  var ElfPspLibFlags$SysLib_instance;
  function ElfPspLibFlags$SysLib_getInstance() {
    ElfPspLibFlags_initFields();
    return ElfPspLibFlags$SysLib_instance;
  }
  function ElfPspLibFlags$Companion() {
    ElfPspLibFlags$Companion_instance = this;
    var $receiver = ElfPspLibFlags$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  ElfPspLibFlags$Companion.prototype.invoke_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : invalidOp("Can't find index " + index + ' in class');
  };
  ElfPspLibFlags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfPspLibFlags$Companion_instance = null;
  function ElfPspLibFlags$Companion_getInstance() {
    ElfPspLibFlags_initFields();
    if (ElfPspLibFlags$Companion_instance === null) {
      new ElfPspLibFlags$Companion();
    }
    return ElfPspLibFlags$Companion_instance;
  }
  ElfPspLibFlags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfPspLibFlags',
    interfaces: [NumericEnum, Enum]
  };
  function ElfPspLibFlags$values() {
    return [ElfPspLibFlags$DirectJump_getInstance(), ElfPspLibFlags$Syscall_getInstance(), ElfPspLibFlags$SysLib_getInstance()];
  }
  ElfPspLibFlags.values = ElfPspLibFlags$values;
  function ElfPspLibFlags$valueOf(name) {
    switch (name) {
      case 'DirectJump':
        return ElfPspLibFlags$DirectJump_getInstance();
      case 'Syscall':
        return ElfPspLibFlags$Syscall_getInstance();
      case 'SysLib':
        return ElfPspLibFlags$SysLib_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.elf.ElfPspLibFlags.' + name);
    }
  }
  ElfPspLibFlags.valueOf_61zpoe$ = ElfPspLibFlags$valueOf;
  function ElfPspModuleNids(name, ordinal, id) {
    Enum.call(this);
    this.id_u1uq9u$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElfPspModuleNids_initFields() {
    ElfPspModuleNids_initFields = function () {
    };
    ElfPspModuleNids$MODULE_INFO_instance = new ElfPspModuleNids('MODULE_INFO', 0, (new Kotlin.Long(-266505305, 0)).toInt());
    ElfPspModuleNids$MODULE_BOOTSTART_instance = new ElfPspModuleNids('MODULE_BOOTSTART', 1, (new Kotlin.Long(-747353120, 0)).toInt());
    ElfPspModuleNids$MODULE_REBOOT_BEFORE_instance = new ElfPspModuleNids('MODULE_REBOOT_BEFORE', 2, 788942758);
    ElfPspModuleNids$MODULE_START_instance = new ElfPspModuleNids('MODULE_START', 3, (new Kotlin.Long(-701322021, 0)).toInt());
    ElfPspModuleNids$MODULE_START_THREAD_PARAMETER_instance = new ElfPspModuleNids('MODULE_START_THREAD_PARAMETER', 4, 259794796);
    ElfPspModuleNids$MODULE_STOP_instance = new ElfPspModuleNids('MODULE_STOP', 5, (new Kotlin.Long(-823633604, 0)).toInt());
    ElfPspModuleNids$MODULE_STOP_THREAD_PARAMETER_instance = new ElfPspModuleNids('MODULE_STOP_THREAD_PARAMETER', 6, (new Kotlin.Long(-821246313, 0)).toInt());
    ElfPspModuleNids$Companion_getInstance();
  }
  Object.defineProperty(ElfPspModuleNids.prototype, 'id', {
    get: function () {
      return this.id_u1uq9u$_0;
    }
  });
  var ElfPspModuleNids$MODULE_INFO_instance;
  function ElfPspModuleNids$MODULE_INFO_getInstance() {
    ElfPspModuleNids_initFields();
    return ElfPspModuleNids$MODULE_INFO_instance;
  }
  var ElfPspModuleNids$MODULE_BOOTSTART_instance;
  function ElfPspModuleNids$MODULE_BOOTSTART_getInstance() {
    ElfPspModuleNids_initFields();
    return ElfPspModuleNids$MODULE_BOOTSTART_instance;
  }
  var ElfPspModuleNids$MODULE_REBOOT_BEFORE_instance;
  function ElfPspModuleNids$MODULE_REBOOT_BEFORE_getInstance() {
    ElfPspModuleNids_initFields();
    return ElfPspModuleNids$MODULE_REBOOT_BEFORE_instance;
  }
  var ElfPspModuleNids$MODULE_START_instance;
  function ElfPspModuleNids$MODULE_START_getInstance() {
    ElfPspModuleNids_initFields();
    return ElfPspModuleNids$MODULE_START_instance;
  }
  var ElfPspModuleNids$MODULE_START_THREAD_PARAMETER_instance;
  function ElfPspModuleNids$MODULE_START_THREAD_PARAMETER_getInstance() {
    ElfPspModuleNids_initFields();
    return ElfPspModuleNids$MODULE_START_THREAD_PARAMETER_instance;
  }
  var ElfPspModuleNids$MODULE_STOP_instance;
  function ElfPspModuleNids$MODULE_STOP_getInstance() {
    ElfPspModuleNids_initFields();
    return ElfPspModuleNids$MODULE_STOP_instance;
  }
  var ElfPspModuleNids$MODULE_STOP_THREAD_PARAMETER_instance;
  function ElfPspModuleNids$MODULE_STOP_THREAD_PARAMETER_getInstance() {
    ElfPspModuleNids_initFields();
    return ElfPspModuleNids$MODULE_STOP_THREAD_PARAMETER_instance;
  }
  function ElfPspModuleNids$Companion() {
    ElfPspModuleNids$Companion_instance = this;
    var $receiver = ElfPspModuleNids$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  ElfPspModuleNids$Companion.prototype.invoke_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : invalidOp("Can't find index " + index + ' in class');
  };
  ElfPspModuleNids$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfPspModuleNids$Companion_instance = null;
  function ElfPspModuleNids$Companion_getInstance() {
    ElfPspModuleNids_initFields();
    if (ElfPspModuleNids$Companion_instance === null) {
      new ElfPspModuleNids$Companion();
    }
    return ElfPspModuleNids$Companion_instance;
  }
  ElfPspModuleNids.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfPspModuleNids',
    interfaces: [NumericEnum, Enum]
  };
  function ElfPspModuleNids$values() {
    return [ElfPspModuleNids$MODULE_INFO_getInstance(), ElfPspModuleNids$MODULE_BOOTSTART_getInstance(), ElfPspModuleNids$MODULE_REBOOT_BEFORE_getInstance(), ElfPspModuleNids$MODULE_START_getInstance(), ElfPspModuleNids$MODULE_START_THREAD_PARAMETER_getInstance(), ElfPspModuleNids$MODULE_STOP_getInstance(), ElfPspModuleNids$MODULE_STOP_THREAD_PARAMETER_getInstance()];
  }
  ElfPspModuleNids.values = ElfPspModuleNids$values;
  function ElfPspModuleNids$valueOf(name) {
    switch (name) {
      case 'MODULE_INFO':
        return ElfPspModuleNids$MODULE_INFO_getInstance();
      case 'MODULE_BOOTSTART':
        return ElfPspModuleNids$MODULE_BOOTSTART_getInstance();
      case 'MODULE_REBOOT_BEFORE':
        return ElfPspModuleNids$MODULE_REBOOT_BEFORE_getInstance();
      case 'MODULE_START':
        return ElfPspModuleNids$MODULE_START_getInstance();
      case 'MODULE_START_THREAD_PARAMETER':
        return ElfPspModuleNids$MODULE_START_THREAD_PARAMETER_getInstance();
      case 'MODULE_STOP':
        return ElfPspModuleNids$MODULE_STOP_getInstance();
      case 'MODULE_STOP_THREAD_PARAMETER':
        return ElfPspModuleNids$MODULE_STOP_THREAD_PARAMETER_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.elf.ElfPspModuleNids.' + name);
    }
  }
  ElfPspModuleNids.valueOf_61zpoe$ = ElfPspModuleNids$valueOf;
  function ElfRelocType(name, ordinal, id) {
    Enum.call(this);
    this.id_ipmbzu$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElfRelocType_initFields() {
    ElfRelocType_initFields = function () {
    };
    ElfRelocType$None_instance = new ElfRelocType('None', 0, 0);
    ElfRelocType$Mips16_instance = new ElfRelocType('Mips16', 1, 1);
    ElfRelocType$Mips32_instance = new ElfRelocType('Mips32', 2, 2);
    ElfRelocType$MipsRel32_instance = new ElfRelocType('MipsRel32', 3, 3);
    ElfRelocType$Mips26_instance = new ElfRelocType('Mips26', 4, 4);
    ElfRelocType$MipsHi16_instance = new ElfRelocType('MipsHi16', 5, 5);
    ElfRelocType$MipsLo16_instance = new ElfRelocType('MipsLo16', 6, 6);
    ElfRelocType$MipsGpRel16_instance = new ElfRelocType('MipsGpRel16', 7, 7);
    ElfRelocType$MipsLiteral_instance = new ElfRelocType('MipsLiteral', 8, 8);
    ElfRelocType$MipsGot16_instance = new ElfRelocType('MipsGot16', 9, 9);
    ElfRelocType$MipsPc16_instance = new ElfRelocType('MipsPc16', 10, 10);
    ElfRelocType$MipsCall16_instance = new ElfRelocType('MipsCall16', 11, 11);
    ElfRelocType$MipsGpRel32_instance = new ElfRelocType('MipsGpRel32', 12, 12);
    ElfRelocType$StopRelocation_instance = new ElfRelocType('StopRelocation', 13, 255);
    ElfRelocType$Companion_getInstance();
  }
  Object.defineProperty(ElfRelocType.prototype, 'id', {
    get: function () {
      return this.id_ipmbzu$_0;
    }
  });
  var ElfRelocType$None_instance;
  function ElfRelocType$None_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$None_instance;
  }
  var ElfRelocType$Mips16_instance;
  function ElfRelocType$Mips16_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$Mips16_instance;
  }
  var ElfRelocType$Mips32_instance;
  function ElfRelocType$Mips32_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$Mips32_instance;
  }
  var ElfRelocType$MipsRel32_instance;
  function ElfRelocType$MipsRel32_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsRel32_instance;
  }
  var ElfRelocType$Mips26_instance;
  function ElfRelocType$Mips26_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$Mips26_instance;
  }
  var ElfRelocType$MipsHi16_instance;
  function ElfRelocType$MipsHi16_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsHi16_instance;
  }
  var ElfRelocType$MipsLo16_instance;
  function ElfRelocType$MipsLo16_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsLo16_instance;
  }
  var ElfRelocType$MipsGpRel16_instance;
  function ElfRelocType$MipsGpRel16_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsGpRel16_instance;
  }
  var ElfRelocType$MipsLiteral_instance;
  function ElfRelocType$MipsLiteral_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsLiteral_instance;
  }
  var ElfRelocType$MipsGot16_instance;
  function ElfRelocType$MipsGot16_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsGot16_instance;
  }
  var ElfRelocType$MipsPc16_instance;
  function ElfRelocType$MipsPc16_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsPc16_instance;
  }
  var ElfRelocType$MipsCall16_instance;
  function ElfRelocType$MipsCall16_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsCall16_instance;
  }
  var ElfRelocType$MipsGpRel32_instance;
  function ElfRelocType$MipsGpRel32_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$MipsGpRel32_instance;
  }
  var ElfRelocType$StopRelocation_instance;
  function ElfRelocType$StopRelocation_getInstance() {
    ElfRelocType_initFields();
    return ElfRelocType$StopRelocation_instance;
  }
  function ElfRelocType$Companion() {
    ElfRelocType$Companion_instance = this;
    var $receiver = ElfRelocType$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  ElfRelocType$Companion.prototype.invoke_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : invalidOp("Can't find index " + index + ' in class');
  };
  ElfRelocType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfRelocType$Companion_instance = null;
  function ElfRelocType$Companion_getInstance() {
    ElfRelocType_initFields();
    if (ElfRelocType$Companion_instance === null) {
      new ElfRelocType$Companion();
    }
    return ElfRelocType$Companion_instance;
  }
  ElfRelocType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfRelocType',
    interfaces: [NumericEnum, Enum]
  };
  function ElfRelocType$values() {
    return [ElfRelocType$None_getInstance(), ElfRelocType$Mips16_getInstance(), ElfRelocType$Mips32_getInstance(), ElfRelocType$MipsRel32_getInstance(), ElfRelocType$Mips26_getInstance(), ElfRelocType$MipsHi16_getInstance(), ElfRelocType$MipsLo16_getInstance(), ElfRelocType$MipsGpRel16_getInstance(), ElfRelocType$MipsLiteral_getInstance(), ElfRelocType$MipsGot16_getInstance(), ElfRelocType$MipsPc16_getInstance(), ElfRelocType$MipsCall16_getInstance(), ElfRelocType$MipsGpRel32_getInstance(), ElfRelocType$StopRelocation_getInstance()];
  }
  ElfRelocType.values = ElfRelocType$values;
  function ElfRelocType$valueOf(name) {
    switch (name) {
      case 'None':
        return ElfRelocType$None_getInstance();
      case 'Mips16':
        return ElfRelocType$Mips16_getInstance();
      case 'Mips32':
        return ElfRelocType$Mips32_getInstance();
      case 'MipsRel32':
        return ElfRelocType$MipsRel32_getInstance();
      case 'Mips26':
        return ElfRelocType$Mips26_getInstance();
      case 'MipsHi16':
        return ElfRelocType$MipsHi16_getInstance();
      case 'MipsLo16':
        return ElfRelocType$MipsLo16_getInstance();
      case 'MipsGpRel16':
        return ElfRelocType$MipsGpRel16_getInstance();
      case 'MipsLiteral':
        return ElfRelocType$MipsLiteral_getInstance();
      case 'MipsGot16':
        return ElfRelocType$MipsGot16_getInstance();
      case 'MipsPc16':
        return ElfRelocType$MipsPc16_getInstance();
      case 'MipsCall16':
        return ElfRelocType$MipsCall16_getInstance();
      case 'MipsGpRel32':
        return ElfRelocType$MipsGpRel32_getInstance();
      case 'StopRelocation':
        return ElfRelocType$StopRelocation_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.elf.ElfRelocType.' + name);
    }
  }
  ElfRelocType.valueOf_61zpoe$ = ElfRelocType$valueOf;
  function ElfReloc(pointerAddress, info) {
    ElfReloc$Companion_getInstance();
    this.pointerAddress = pointerAddress;
    this.info = info;
  }
  Object.defineProperty(ElfReloc.prototype, 'pointeeSectionHeaderBase', {
    get: function () {
      return this.info >>> 16 & 255;
    }
  });
  Object.defineProperty(ElfReloc.prototype, 'pointerSectionHeaderBase', {
    get: function () {
      return this.info >>> 8 & 255;
    }
  });
  Object.defineProperty(ElfReloc.prototype, 'type', {
    get: function () {
      return ElfRelocType$Companion_getInstance().invoke_za3lpa$(this.info >>> 0 & 255);
    }
  });
  function ElfReloc$Companion() {
    ElfReloc$Companion_instance = this;
    this.SIZE = 8;
  }
  ElfReloc$Companion.prototype.invoke_39qel5$ = function (s) {
    return new ElfReloc(readS32_le(s), readS32_le(s));
  };
  ElfReloc$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfReloc$Companion_instance = null;
  function ElfReloc$Companion_getInstance() {
    if (ElfReloc$Companion_instance === null) {
      new ElfReloc$Companion();
    }
    return ElfReloc$Companion_instance;
  }
  ElfReloc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfReloc',
    interfaces: []
  };
  function ElfProgramHeader(type, offset, virtualAddress, psysicalAddress, fileSize, memorySize, flags, alignment) {
    ElfProgramHeader$Companion_getInstance();
    this.type = type;
    this.offset = offset;
    this.virtualAddress = virtualAddress;
    this.psysicalAddress = psysicalAddress;
    this.fileSize = fileSize;
    this.memorySize = memorySize;
    this.flags = flags;
    this.alignment = alignment;
  }
  function ElfProgramHeader$Companion() {
    ElfProgramHeader$Companion_instance = this;
  }
  ElfProgramHeader$Companion.prototype.invoke_39qel5$ = function (s) {
    return new ElfProgramHeader(new ElfProgramHeaderType(readS32_le(s)), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), new ElfProgramHeaderFlags(readS32_le(s)), readS32_le(s));
  };
  ElfProgramHeader$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfProgramHeader$Companion_instance = null;
  function ElfProgramHeader$Companion_getInstance() {
    if (ElfProgramHeader$Companion_instance === null) {
      new ElfProgramHeader$Companion();
    }
    return ElfProgramHeader$Companion_instance;
  }
  ElfProgramHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfProgramHeader',
    interfaces: []
  };
  ElfProgramHeader.prototype.component1 = function () {
    return this.type;
  };
  ElfProgramHeader.prototype.component2 = function () {
    return this.offset;
  };
  ElfProgramHeader.prototype.component3 = function () {
    return this.virtualAddress;
  };
  ElfProgramHeader.prototype.component4 = function () {
    return this.psysicalAddress;
  };
  ElfProgramHeader.prototype.component5 = function () {
    return this.fileSize;
  };
  ElfProgramHeader.prototype.component6 = function () {
    return this.memorySize;
  };
  ElfProgramHeader.prototype.component7 = function () {
    return this.flags;
  };
  ElfProgramHeader.prototype.component8 = function () {
    return this.alignment;
  };
  ElfProgramHeader.prototype.copy_fo9t6r$ = function (type, offset, virtualAddress, psysicalAddress, fileSize, memorySize, flags, alignment) {
    return new ElfProgramHeader(type === void 0 ? this.type : type, offset === void 0 ? this.offset : offset, virtualAddress === void 0 ? this.virtualAddress : virtualAddress, psysicalAddress === void 0 ? this.psysicalAddress : psysicalAddress, fileSize === void 0 ? this.fileSize : fileSize, memorySize === void 0 ? this.memorySize : memorySize, flags === void 0 ? this.flags : flags, alignment === void 0 ? this.alignment : alignment);
  };
  ElfProgramHeader.prototype.toString = function () {
    return 'ElfProgramHeader(type=' + Kotlin.toString(this.type) + (', offset=' + Kotlin.toString(this.offset)) + (', virtualAddress=' + Kotlin.toString(this.virtualAddress)) + (', psysicalAddress=' + Kotlin.toString(this.psysicalAddress)) + (', fileSize=' + Kotlin.toString(this.fileSize)) + (', memorySize=' + Kotlin.toString(this.memorySize)) + (', flags=' + Kotlin.toString(this.flags)) + (', alignment=' + Kotlin.toString(this.alignment)) + ')';
  };
  ElfProgramHeader.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.virtualAddress) | 0;
    result = result * 31 + Kotlin.hashCode(this.psysicalAddress) | 0;
    result = result * 31 + Kotlin.hashCode(this.fileSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.memorySize) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.alignment) | 0;
    return result;
  };
  ElfProgramHeader.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.virtualAddress, other.virtualAddress) && Kotlin.equals(this.psysicalAddress, other.psysicalAddress) && Kotlin.equals(this.fileSize, other.fileSize) && Kotlin.equals(this.memorySize, other.memorySize) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.alignment, other.alignment)))));
  };
  function ElfSectionHeader(nameOffset, name, type, flags, address, offset, size, link, info, addressAlign, entitySize) {
    ElfSectionHeader$Companion_getInstance();
    this.nameOffset = nameOffset;
    this.name = name;
    this.type = type;
    this.flags = flags;
    this.address = address;
    this.offset = offset;
    this.size = size;
    this.link = link;
    this.info = info;
    this.addressAlign = addressAlign;
    this.entitySize = entitySize;
    this.stream_tl79o4$_0 = this.stream_tl79o4$_0;
  }
  Object.defineProperty(ElfSectionHeader.prototype, 'stream', {
    get: function () {
      if (this.stream_tl79o4$_0 == null)
        return throwUPAE('stream');
      return this.stream_tl79o4$_0;
    },
    set: function (stream) {
      this.stream_tl79o4$_0 = stream;
    }
  });
  function ElfSectionHeader$Companion() {
    ElfSectionHeader$Companion_instance = this;
  }
  ElfSectionHeader$Companion.prototype.invoke_39qel5$ = function (s) {
    return new ElfSectionHeader(readS32_le(s), '...', new ElfSectionHeaderType(readS32_le(s)), new ElfSectionHeaderFlags(readS32_le(s)), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s));
  };
  ElfSectionHeader$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfSectionHeader$Companion_instance = null;
  function ElfSectionHeader$Companion_getInstance() {
    if (ElfSectionHeader$Companion_instance === null) {
      new ElfSectionHeader$Companion();
    }
    return ElfSectionHeader$Companion_instance;
  }
  ElfSectionHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfSectionHeader',
    interfaces: []
  };
  ElfSectionHeader.prototype.component1 = function () {
    return this.nameOffset;
  };
  ElfSectionHeader.prototype.component2 = function () {
    return this.name;
  };
  ElfSectionHeader.prototype.component3 = function () {
    return this.type;
  };
  ElfSectionHeader.prototype.component4 = function () {
    return this.flags;
  };
  ElfSectionHeader.prototype.component5 = function () {
    return this.address;
  };
  ElfSectionHeader.prototype.component6 = function () {
    return this.offset;
  };
  ElfSectionHeader.prototype.component7 = function () {
    return this.size;
  };
  ElfSectionHeader.prototype.component8 = function () {
    return this.link;
  };
  ElfSectionHeader.prototype.component9 = function () {
    return this.info;
  };
  ElfSectionHeader.prototype.component10 = function () {
    return this.addressAlign;
  };
  ElfSectionHeader.prototype.component11 = function () {
    return this.entitySize;
  };
  ElfSectionHeader.prototype.copy_1jye5d$ = function (nameOffset, name, type, flags, address, offset, size, link, info, addressAlign, entitySize) {
    return new ElfSectionHeader(nameOffset === void 0 ? this.nameOffset : nameOffset, name === void 0 ? this.name : name, type === void 0 ? this.type : type, flags === void 0 ? this.flags : flags, address === void 0 ? this.address : address, offset === void 0 ? this.offset : offset, size === void 0 ? this.size : size, link === void 0 ? this.link : link, info === void 0 ? this.info : info, addressAlign === void 0 ? this.addressAlign : addressAlign, entitySize === void 0 ? this.entitySize : entitySize);
  };
  ElfSectionHeader.prototype.toString = function () {
    return 'ElfSectionHeader(nameOffset=' + Kotlin.toString(this.nameOffset) + (', name=' + Kotlin.toString(this.name)) + (', type=' + Kotlin.toString(this.type)) + (', flags=' + Kotlin.toString(this.flags)) + (', address=' + Kotlin.toString(this.address)) + (', offset=' + Kotlin.toString(this.offset)) + (', size=' + Kotlin.toString(this.size)) + (', link=' + Kotlin.toString(this.link)) + (', info=' + Kotlin.toString(this.info)) + (', addressAlign=' + Kotlin.toString(this.addressAlign)) + (', entitySize=' + Kotlin.toString(this.entitySize)) + ')';
  };
  ElfSectionHeader.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nameOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    result = result * 31 + Kotlin.hashCode(this.addressAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.entitySize) | 0;
    return result;
  };
  ElfSectionHeader.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nameOffset, other.nameOffset) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.address, other.address) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.info, other.info) && Kotlin.equals(this.addressAlign, other.addressAlign) && Kotlin.equals(this.entitySize, other.entitySize)))));
  };
  function ElfDwarf() {
  }
  ElfDwarf.prototype.parseElfLoader_xqzwj6$ = function (elfLoader) {
    println('ElfDwarfLoader.parseElfLoader: Not implemented');
  };
  ElfDwarf.prototype.getSymbolAt_za3lpa$ = function (address) {
  };
  ElfDwarf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfDwarf',
    interfaces: []
  };
  function ElfPspModuleInfo(moduleAtributes, moduleVersion, name, GP, exportsStart, exportsEnd, importsStart, importsEnd, PC) {
    ElfPspModuleInfo$Companion_getInstance();
    if (PC === void 0)
      PC = 0;
    this.moduleAtributes = moduleAtributes;
    this.moduleVersion = moduleVersion;
    this.name = name;
    this.GP = GP;
    this.exportsStart = exportsStart;
    this.exportsEnd = exportsEnd;
    this.importsStart = importsStart;
    this.importsEnd = importsEnd;
    this.PC = PC;
  }
  function ElfPspModuleInfo$Companion() {
    ElfPspModuleInfo$Companion_instance = this;
  }
  ElfPspModuleInfo$Companion.prototype.invoke_39qel5$ = function (s) {
    return new ElfPspModuleInfo(readU16_le(s), readU16_le(s), readStringz_0(s, 28), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), 0);
  };
  ElfPspModuleInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfPspModuleInfo$Companion_instance = null;
  function ElfPspModuleInfo$Companion_getInstance() {
    if (ElfPspModuleInfo$Companion_instance === null) {
      new ElfPspModuleInfo$Companion();
    }
    return ElfPspModuleInfo$Companion_instance;
  }
  ElfPspModuleInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfPspModuleInfo',
    interfaces: []
  };
  ElfPspModuleInfo.prototype.component1 = function () {
    return this.moduleAtributes;
  };
  ElfPspModuleInfo.prototype.component2 = function () {
    return this.moduleVersion;
  };
  ElfPspModuleInfo.prototype.component3 = function () {
    return this.name;
  };
  ElfPspModuleInfo.prototype.component4 = function () {
    return this.GP;
  };
  ElfPspModuleInfo.prototype.component5 = function () {
    return this.exportsStart;
  };
  ElfPspModuleInfo.prototype.component6 = function () {
    return this.exportsEnd;
  };
  ElfPspModuleInfo.prototype.component7 = function () {
    return this.importsStart;
  };
  ElfPspModuleInfo.prototype.component8 = function () {
    return this.importsEnd;
  };
  ElfPspModuleInfo.prototype.component9 = function () {
    return this.PC;
  };
  ElfPspModuleInfo.prototype.copy_qoc76$ = function (moduleAtributes, moduleVersion, name, GP, exportsStart, exportsEnd, importsStart, importsEnd, PC) {
    return new ElfPspModuleInfo(moduleAtributes === void 0 ? this.moduleAtributes : moduleAtributes, moduleVersion === void 0 ? this.moduleVersion : moduleVersion, name === void 0 ? this.name : name, GP === void 0 ? this.GP : GP, exportsStart === void 0 ? this.exportsStart : exportsStart, exportsEnd === void 0 ? this.exportsEnd : exportsEnd, importsStart === void 0 ? this.importsStart : importsStart, importsEnd === void 0 ? this.importsEnd : importsEnd, PC === void 0 ? this.PC : PC);
  };
  ElfPspModuleInfo.prototype.toString = function () {
    return 'ElfPspModuleInfo(moduleAtributes=' + Kotlin.toString(this.moduleAtributes) + (', moduleVersion=' + Kotlin.toString(this.moduleVersion)) + (', name=' + Kotlin.toString(this.name)) + (', GP=' + Kotlin.toString(this.GP)) + (', exportsStart=' + Kotlin.toString(this.exportsStart)) + (', exportsEnd=' + Kotlin.toString(this.exportsEnd)) + (', importsStart=' + Kotlin.toString(this.importsStart)) + (', importsEnd=' + Kotlin.toString(this.importsEnd)) + (', PC=' + Kotlin.toString(this.PC)) + ')';
  };
  ElfPspModuleInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.moduleAtributes) | 0;
    result = result * 31 + Kotlin.hashCode(this.moduleVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.GP) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportsStart) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportsEnd) | 0;
    result = result * 31 + Kotlin.hashCode(this.importsStart) | 0;
    result = result * 31 + Kotlin.hashCode(this.importsEnd) | 0;
    result = result * 31 + Kotlin.hashCode(this.PC) | 0;
    return result;
  };
  ElfPspModuleInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.moduleAtributes, other.moduleAtributes) && Kotlin.equals(this.moduleVersion, other.moduleVersion) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.GP, other.GP) && Kotlin.equals(this.exportsStart, other.exportsStart) && Kotlin.equals(this.exportsEnd, other.exportsEnd) && Kotlin.equals(this.importsStart, other.importsStart) && Kotlin.equals(this.importsEnd, other.importsEnd) && Kotlin.equals(this.PC, other.PC)))));
  };
  function ElfPspModuleImport(nameOffset, version, flags, entrySize, functionCount, variableCount, nidAddress, callAddress) {
    ElfPspModuleImport$Companion_getInstance();
    this.nameOffset = nameOffset;
    this.version = version;
    this.flags = flags;
    this.entrySize = entrySize;
    this.functionCount = functionCount;
    this.variableCount = variableCount;
    this.nidAddress = nidAddress;
    this.callAddress = callAddress;
    this.name = '';
  }
  function ElfPspModuleImport$Companion() {
    ElfPspModuleImport$Companion_instance = this;
    this.SIZE = 20;
  }
  ElfPspModuleImport$Companion.prototype.invoke_39qel5$ = function (s) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = readS32_le(s);
    tmp$_0 = readU16_le(s);
    tmp$_1 = readU16_le(s);
    tmp$_2 = readU8(s);
    tmp$_3 = readU8(s);
    return new ElfPspModuleImport(tmp$, tmp$_0, tmp$_1, tmp$_2, readU16_le(s), tmp$_3, readS32_le(s), readS32_le(s));
  };
  ElfPspModuleImport$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfPspModuleImport$Companion_instance = null;
  function ElfPspModuleImport$Companion_getInstance() {
    if (ElfPspModuleImport$Companion_instance === null) {
      new ElfPspModuleImport$Companion();
    }
    return ElfPspModuleImport$Companion_instance;
  }
  ElfPspModuleImport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfPspModuleImport',
    interfaces: []
  };
  ElfPspModuleImport.prototype.component1 = function () {
    return this.nameOffset;
  };
  ElfPspModuleImport.prototype.component2 = function () {
    return this.version;
  };
  ElfPspModuleImport.prototype.component3 = function () {
    return this.flags;
  };
  ElfPspModuleImport.prototype.component4 = function () {
    return this.entrySize;
  };
  ElfPspModuleImport.prototype.component5 = function () {
    return this.functionCount;
  };
  ElfPspModuleImport.prototype.component6 = function () {
    return this.variableCount;
  };
  ElfPspModuleImport.prototype.component7 = function () {
    return this.nidAddress;
  };
  ElfPspModuleImport.prototype.component8 = function () {
    return this.callAddress;
  };
  ElfPspModuleImport.prototype.copy_wrdw30$ = function (nameOffset, version, flags, entrySize, functionCount, variableCount, nidAddress, callAddress) {
    return new ElfPspModuleImport(nameOffset === void 0 ? this.nameOffset : nameOffset, version === void 0 ? this.version : version, flags === void 0 ? this.flags : flags, entrySize === void 0 ? this.entrySize : entrySize, functionCount === void 0 ? this.functionCount : functionCount, variableCount === void 0 ? this.variableCount : variableCount, nidAddress === void 0 ? this.nidAddress : nidAddress, callAddress === void 0 ? this.callAddress : callAddress);
  };
  ElfPspModuleImport.prototype.toString = function () {
    return 'ElfPspModuleImport(nameOffset=' + Kotlin.toString(this.nameOffset) + (', version=' + Kotlin.toString(this.version)) + (', flags=' + Kotlin.toString(this.flags)) + (', entrySize=' + Kotlin.toString(this.entrySize)) + (', functionCount=' + Kotlin.toString(this.functionCount)) + (', variableCount=' + Kotlin.toString(this.variableCount)) + (', nidAddress=' + Kotlin.toString(this.nidAddress)) + (', callAddress=' + Kotlin.toString(this.callAddress)) + ')';
  };
  ElfPspModuleImport.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nameOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.flags) | 0;
    result = result * 31 + Kotlin.hashCode(this.entrySize) | 0;
    result = result * 31 + Kotlin.hashCode(this.functionCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.variableCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.nidAddress) | 0;
    result = result * 31 + Kotlin.hashCode(this.callAddress) | 0;
    return result;
  };
  ElfPspModuleImport.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nameOffset, other.nameOffset) && Kotlin.equals(this.version, other.version) && Kotlin.equals(this.flags, other.flags) && Kotlin.equals(this.entrySize, other.entrySize) && Kotlin.equals(this.functionCount, other.functionCount) && Kotlin.equals(this.variableCount, other.variableCount) && Kotlin.equals(this.nidAddress, other.nidAddress) && Kotlin.equals(this.callAddress, other.callAddress)))));
  };
  function ElfPspModuleExport(name, version, flags, entrySize, variableCount, functionCount, exports) {
    ElfPspModuleExport$Companion_getInstance();
    this.name = name;
    this.version = version;
    this.flags = flags;
    this.entrySize = entrySize;
    this.variableCount = variableCount;
    this.functionCount = functionCount;
    this.exports = exports;
  }
  function ElfPspModuleExport$Companion() {
    ElfPspModuleExport$Companion_instance = this;
  }
  ElfPspModuleExport$Companion.prototype.invoke_39qel5$ = function (s) {
    return new ElfPspModuleExport(readS32_le(s), readU16_le(s), readU16_le(s), readU8(s), readU8(s), readU16_le(s), readS32_le(s));
  };
  ElfPspModuleExport$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfPspModuleExport$Companion_instance = null;
  function ElfPspModuleExport$Companion_getInstance() {
    if (ElfPspModuleExport$Companion_instance === null) {
      new ElfPspModuleExport$Companion();
    }
    return ElfPspModuleExport$Companion_instance;
  }
  ElfPspModuleExport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfPspModuleExport',
    interfaces: []
  };
  function ElfPspModuleInfoAtributesEnum(id) {
    ElfPspModuleInfoAtributesEnum$Companion_getInstance();
    this.id = id;
  }
  function ElfPspModuleInfoAtributesEnum$Companion() {
    ElfPspModuleInfoAtributesEnum$Companion_instance = this;
    this.UserMode = 0;
    this.KernelMode = 256;
  }
  ElfPspModuleInfoAtributesEnum$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ElfPspModuleInfoAtributesEnum$Companion_instance = null;
  function ElfPspModuleInfoAtributesEnum$Companion_getInstance() {
    if (ElfPspModuleInfoAtributesEnum$Companion_instance === null) {
      new ElfPspModuleInfoAtributesEnum$Companion();
    }
    return ElfPspModuleInfoAtributesEnum$Companion_instance;
  }
  ElfPspModuleInfoAtributesEnum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfPspModuleInfoAtributesEnum',
    interfaces: []
  };
  ElfPspModuleInfoAtributesEnum.prototype.component1 = function () {
    return this.id;
  };
  ElfPspModuleInfoAtributesEnum.prototype.copy_za3lpa$ = function (id) {
    return new ElfPspModuleInfoAtributesEnum(id === void 0 ? this.id : id);
  };
  ElfPspModuleInfoAtributesEnum.prototype.toString = function () {
    return 'ElfPspModuleInfoAtributesEnum(id=' + Kotlin.toString(this.id) + ')';
  };
  ElfPspModuleInfoAtributesEnum.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  ElfPspModuleInfoAtributesEnum.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function InstructionReader(memory) {
    this.memory_0 = memory;
  }
  InstructionReader.prototype.read_za3lpa$ = function (address) {
    return new Instruction(address, this.memory_0.lw_za3lpa$(address));
  };
  InstructionReader.prototype.write_7xc7mf$ = function (address, instruction) {
    this.memory_0.sw_vux9f0$(address, instruction.data);
  };
  InstructionReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionReader',
    interfaces: []
  };
  function loadElf($receiver, file) {
    return PspElf$Companion_getInstance().loadInto_fyu811$(file, $receiver);
  }
  function loadElfAndSetRegisters($receiver, file) {
    var elf = loadElf($receiver, file);
    $receiver.cpu.setPC_za3lpa$(elf.moduleInfo.PC);
    set_GP($receiver.cpu, elf.moduleInfo.GP);
    return elf;
  }
  function PspElf(memory, memoryManager, moduleManager, syscallManager) {
    PspElf$Companion_getInstance();
    this.memory_0 = memory;
    this.memoryManager_0 = memoryManager;
    this.moduleManager_0 = moduleManager;
    this.syscallManager_0 = syscallManager;
    this.elf_xm4kwm$_0 = this.elf_xm4kwm$_0;
    this.moduleInfo_qarplb$_0 = this.moduleInfo_qarplb$_0;
    this.dwarf_f2x1fr$_0 = this.dwarf_f2x1fr$_0;
    this.baseAddress_qvceca$_0 = 0;
  }
  Object.defineProperty(PspElf.prototype, 'elf', {
    get: function () {
      if (this.elf_xm4kwm$_0 == null)
        return throwUPAE('elf');
      return this.elf_xm4kwm$_0;
    },
    set: function (elf) {
      this.elf_xm4kwm$_0 = elf;
    }
  });
  Object.defineProperty(PspElf.prototype, 'moduleInfo', {
    get: function () {
      if (this.moduleInfo_qarplb$_0 == null)
        return throwUPAE('moduleInfo');
      return this.moduleInfo_qarplb$_0;
    },
    set: function (moduleInfo) {
      this.moduleInfo_qarplb$_0 = moduleInfo;
    }
  });
  Object.defineProperty(PspElf.prototype, 'dwarf', {
    get: function () {
      if (this.dwarf_f2x1fr$_0 == null)
        return throwUPAE('dwarf');
      return this.dwarf_f2x1fr$_0;
    },
    set: function (dwarf) {
      this.dwarf_f2x1fr$_0 = dwarf;
    }
  });
  Object.defineProperty(PspElf.prototype, 'baseAddress', {
    get: function () {
      return this.baseAddress_qvceca$_0;
    },
    set: function (baseAddress) {
      this.baseAddress_qvceca$_0 = baseAddress;
    }
  });
  function PspElf$Companion() {
    PspElf$Companion_instance = this;
  }
  PspElf$Companion.prototype.loadInto_fyu811$ = function (stream, emulator) {
    var loader = new PspElf(emulator.mem, emulator.memoryManager, emulator.moduleManager, emulator.syscalls);
    loader.load_39qel5$(stream);
    return loader;
  };
  PspElf$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PspElf$Companion_instance = null;
  function PspElf$Companion_getInstance() {
    if (PspElf$Companion_instance === null) {
      new PspElf$Companion();
    }
    return PspElf$Companion_instance;
  }
  PspElf.prototype.load_39qel5$ = function (stream) {
    this.elf = Elf$Companion_getInstance().read_39qel5$(stream);
    this.allocateMemory_0();
    this.writeToMemory_0();
    this.relocateFromHeaders_0();
    this.readModuleInfo_0();
    this.updateModuleImports_0();
    this.dwarf = new ElfDwarf();
    this.dwarf.parseElfLoader_xqzwj6$(this.elf);
  };
  PspElf.prototype.getSymbolAt_za3lpa$ = function (address) {
    this.dwarf.getSymbolAt_za3lpa$(address);
  };
  PspElf.prototype.getSectionHeaderMemoryStream_0 = function (sectionHeader) {
    return this.memory_0.getPointerStream_vux9f0$(this.baseAddress + sectionHeader.address | 0, sectionHeader.size);
  };
  PspElf.prototype.readModuleInfo_0 = function () {
    this.moduleInfo = ElfPspModuleInfo$Companion_getInstance().invoke_39qel5$(this.getSectionHeaderMemoryStream_0(this.elf.getSectionHeader_61zpoe$('.rodata.sceModuleInfo')));
    this.moduleInfo.PC = this.baseAddress + this.elf.header.entryPoint | 0;
  };
  function PspElf$allocateMemory$lambda(it) {
    return it.size;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
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
  var Math_0 = Math;
  var min = Kotlin.kotlin.js.min_bug313$;
  var max = Kotlin.kotlin.js.max_bug313$;
  var numberToDouble = Kotlin.numberToDouble;
  PspElf.prototype.allocateMemory_0 = function () {
    var tmp$, tmp$_0;
    this.baseAddress = 0;
    if (this.elf.needsRelocation) {
      this.baseAddress = numberToInt(last(sortedWith(this.memoryManager_0.userPartition.childPartitions, new Comparator$ObjectLiteral(compareBy$lambda(PspElf$allocateMemory$lambda)))).low);
      this.baseAddress = nextAlignedTo(this.baseAddress, 4096);
    }
    var lowest = new Kotlin.Long(-1, 0);
    var highest = Kotlin.Long.ZERO;
    var $receiver = this.elf.sectionHeaders;
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (element.flags.hasFlag_fzutc1$(ElfSectionHeaderFlags$Companion_getInstance().Allocate))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var section = tmp$.next();
      lowest = min(Math_0, lowest, Kotlin.Long.fromInt(this.baseAddress).add(Kotlin.Long.fromInt(section.address)));
      highest = max(Math_0, highest, Kotlin.Long.fromInt(this.baseAddress).add(Kotlin.Long.fromInt(section.address)).add(Kotlin.Long.fromInt(section.size)));
    }
    tmp$_0 = this.elf.programHeaders.iterator();
    while (tmp$_0.hasNext()) {
      var program = tmp$_0.next();
      lowest = min(Math_0, lowest, Kotlin.Long.fromInt(this.baseAddress).add(Kotlin.Long.fromInt(program.virtualAddress)));
      highest = max(Math_0, highest, Kotlin.Long.fromInt(this.baseAddress).add(Kotlin.Long.fromInt(program.virtualAddress)).add(Kotlin.Long.fromInt(program.memorySize)));
    }
    var $this = this.memoryManager_0.userPartition;
    var size = highest.subtract(lowest);
    var addressLow = lowest;
    var memorySegment = $this.allocateSet_rpaqe6$(numberToDouble(size), numberToDouble(addressLow), 'Elf');
  };
  PspElf.prototype.relocateFromHeaders_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var RelocProgramIndex = 0;
    tmp$ = this.elf.programHeaders.iterator();
    while (tmp$.hasNext()) {
      var programHeader = tmp$.next();
      tmp$_0 = programHeader.type;
      if (equals(tmp$_0, ElfProgramHeaderType$Companion_getInstance().Reloc1))
        println('SKIPPING Elf.ProgramHeader.TypeEnum.Reloc1!');
      else if (equals(tmp$_0, ElfProgramHeaderType$Companion_getInstance().Reloc2))
        throw new Exception('Not implemented');
    }
    var RelocSectionIndex = 0;
    tmp$_1 = this.elf.sectionHeaders.iterator();
    while (tmp$_1.hasNext()) {
      var sectionHeader = tmp$_1.next();
      tmp$_2 = sectionHeader.type;
      if (equals(tmp$_2, ElfSectionHeaderType$Companion_getInstance().Relocation)) {
        println('sectionHeader: ' + sectionHeader);
        println('Not implemented ElfSectionHeaderType.Relocation');
      }
       else if (equals(tmp$_2, ElfSectionHeaderType$Companion_getInstance().PrxRelocation)) {
        var $receiver = until_0(0, sectionHeader.stream.length.div(Kotlin.Long.fromInt(ElfReloc$Companion_getInstance().SIZE)));
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_3;
        tmp$_3 = $receiver.iterator();
        while (tmp$_3.hasNext()) {
          var item = tmp$_3.next();
          destination.add_11rb$(ElfReloc$Companion_getInstance().invoke_39qel5$(sectionHeader.stream));
        }
        var relocs = destination;
        this.relocateRelocs_0(relocs);
      }
       else if (equals(tmp$_2, ElfSectionHeaderType$Companion_getInstance().PrxRelocation_FW5))
        throw new Error_0('Not implemented ElfSectionHeader.Type.PrxRelocation_FW5');
    }
  };
  PspElf.prototype.relocateRelocs_0 = function (relocs) {
    var tmp$, tmp$_0, tmp$_1;
    var baseAddress = this.baseAddress;
    var hiValue = 0;
    var deferredHi16 = ArrayList_init();
    var instructionReader = new InstructionReader(this.memory_0);
    tmp$ = relocs.size;
    for (var index = 0; index < tmp$; index++) {
      var reloc = relocs.get_za3lpa$(index);
      if (reloc.type === ElfRelocType$StopRelocation_getInstance())
        break;
      var pointerBaseOffset = this.elf.programHeaders.get_za3lpa$(reloc.pointerSectionHeaderBase).virtualAddress;
      var pointeeBaseOffset = this.elf.programHeaders.get_za3lpa$(reloc.pointeeSectionHeaderBase).virtualAddress;
      var RelocatedPointerAddress = baseAddress + reloc.pointerAddress + pointerBaseOffset | 0;
      var instruction = instructionReader.read_za3lpa$(RelocatedPointerAddress);
      var S = baseAddress + pointeeBaseOffset | 0;
      var GP_ADDR = baseAddress + reloc.pointerAddress | 0;
      var GP_OFFSET = GP_ADDR - (baseAddress & (new Kotlin.Long(-65536, 0)).toInt()) | 0;
      tmp$_0 = reloc.type;
      if (!equals(tmp$_0, ElfRelocType$None_getInstance()))
        if (equals(tmp$_0, ElfRelocType$Mips16_getInstance()))
          instruction.u_imm16 = instruction.u_imm16 + S | 0;
        else if (equals(tmp$_0, ElfRelocType$Mips32_getInstance()))
          instruction.data = instruction.data + S | 0;
        else if (equals(tmp$_0, ElfRelocType$MipsRel32_getInstance()))
          throw new Exception('Not implemented MipsRel32');
        else if (equals(tmp$_0, ElfRelocType$Mips26_getInstance()))
          instruction.jump_real = instruction.jump_real + S | 0;
        else if (equals(tmp$_0, ElfRelocType$MipsHi16_getInstance())) {
          hiValue = instruction.u_imm16;
          deferredHi16.add_11rb$(RelocatedPointerAddress);
        }
         else if (equals(tmp$_0, ElfRelocType$MipsLo16_getInstance())) {
          var A = instruction.u_imm16;
          instruction.u_imm16 = (hiValue << 16 | A & 65535) + S | 0;
          tmp$_1 = deferredHi16.iterator();
          while (tmp$_1.hasNext()) {
            var data_addr2 = tmp$_1.next();
            var data2 = instructionReader.read_za3lpa$(data_addr2);
            var result = ((data2.data & 65535) << 16) + A + S | 0;
            if ((A & 32768) !== 0) {
              result = result - 65536 | 0;
            }
            if ((result & 32768) !== 0) {
              result = result + 65536 | 0;
            }
            data2.u_imm16 = result >>> 16;
            instructionReader.write_7xc7mf$(data_addr2, data2);
          }
          deferredHi16 = ArrayList_init();
        }
         else if (!equals(tmp$_0, ElfRelocType$MipsGpRel16_getInstance()))
          throw new Error_0(format('RelocType %d not implemented', [reloc.type]));
      instructionReader.write_7xc7mf$(RelocatedPointerAddress, instruction);
    }
  };
  PspElf.prototype.writeToMemory_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var needsRelocate = this.elf.needsRelocation;
    var loadAddress = this.baseAddress;
    println(format('PspElfLoader: needsRelocate=%s, loadAddress=%08X', [needsRelocate, loadAddress]));
    var $receiver = this.elf.programHeaders;
    var destination = ArrayList_init();
    var tmp$_3;
    tmp$_3 = $receiver.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      var tmp$_4;
      if ((tmp$_4 = element.type) != null ? tmp$_4.equals(ElfProgramHeaderType$Companion_getInstance().Load) : null)
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var programHeader = tmp$.next();
      var fileOffset = programHeader.offset;
      var memOffset = this.baseAddress + programHeader.virtualAddress | 0;
      var fileSize = programHeader.fileSize;
      var memSize = programHeader.memorySize;
      copyTo(sliceWithSize_0(this.elf.stream, fileOffset, fileSize), this.memory_0.getPointerStream_vux9f0$(memOffset, fileSize));
      this.memory_0.memset_qt1dr2$(memOffset + fileSize | 0, 0, memSize - fileSize | 0);
      println('Program Header: ' + format('%08X:%08X, %08X:%08X', [fileOffset, fileSize, memOffset, memSize]));
    }
    var $receiver_0 = this.elf.sectionHeaders;
    var destination_0 = ArrayList_init();
    var tmp$_5;
    tmp$_5 = $receiver_0.iterator();
    while (tmp$_5.hasNext()) {
      var element_0 = tmp$_5.next();
      if (element_0.flags.hasFlag_fzutc1$(ElfSectionHeaderFlags$Companion_getInstance().Allocate))
        destination_0.add_11rb$(element_0);
    }
    tmp$_0 = destination_0.iterator();
    while (tmp$_0.hasNext()) {
      var sectionHeader = tmp$_0.next();
      var low = loadAddress + sectionHeader.address | 0;
      println(format('Section Header: %s LOW:%08X, SIZE:%08X', [sectionHeader.toString(), low, sectionHeader.size]));
      tmp$_1 = sectionHeader.type;
      if (equals(tmp$_1, ElfSectionHeaderType$Companion_getInstance().NoBits)) {
        tmp$_2 = sectionHeader.size;
        for (var n = 0; n < tmp$_2; n++)
          this.memory_0.sb_vux9f0$(low + n | 0, 0);
      }
       else if (equals(tmp$_1, ElfSectionHeaderType$Companion_getInstance().ProgramBits)) {
        var stream = sectionHeader.stream;
        var length = stream.length;
        this.memory_0.write_3fge6q$(low, readAll(stream));
      }
    }
  };
  PspElf.prototype.updateModuleImports_0 = function () {
    var tmp$;
    var moduleInfo = this.moduleInfo;
    println('updateModuleImports.moduleInfo: ' + moduleInfo);
    var importsBytesSize = moduleInfo.importsEnd - moduleInfo.importsStart | 0;
    var importsStream = slice(openSync_0(this.memory_0), until(moduleInfo.importsStart, moduleInfo.importsEnd));
    var importsCount = importsBytesSize / ElfPspModuleImport$Companion_getInstance().SIZE | 0;
    var $receiver = until(0, importsCount);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(ElfPspModuleImport$Companion_getInstance().invoke_39qel5$(importsStream));
    }
    var imports = destination;
    tmp$ = imports.iterator();
    while (tmp$.hasNext()) {
      var _import = tmp$.next();
      _import.name = this.memory_0.readStringz_za3lpa$(_import.nameOffset);
      var imported = this.updateModuleFunctions_0(_import);
      this.updateModuleVars_0(_import);
      var tmp$_1 = 'Imported: ' + imported.name + ' ';
      var $receiver_0 = imported.registeredNativeFunctions;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        destination_0.add_11rb$(item_0.name);
      }
      println(tmp$_1 + destination_0);
    }
  };
  function PspElf$updateModuleFunctions$lambda$lambda(closure$_module, closure$nfunc) {
    return function (state) {
      var tmp$, tmp$_0;
      println(closure$_module);
      println("updateModuleFunctions: Not implemented '" + toString((tmp$ = closure$nfunc.v) != null ? tmp$.name : null) + "'");
      lang.Debugger.enterDebugger();
      throw new Error_0("updateModuleFunctions: Not implemented '" + toString((tmp$_0 = closure$nfunc.v) != null ? tmp$_0.name : null) + "'");
    };
  }
  function PspElf$updateModuleFunctions$lambda(closure$_module, closure$unknownFunctions, closure$moduleImport, closure$registeredNativeFunctions, this$PspElf) {
    return function (nid, n) {
      var nfunc = {v: closure$_module.getByNidOrNull_za3lpa$(nid)};
      if (nfunc.v == null) {
        closure$unknownFunctions.add_11rb$(format("'%s':0x%08X", [closure$_module.name, nid]));
        nfunc.v = new NativeFunction(format('%s:0x%08X', [closure$moduleImport.name, nid]), Kotlin.Long.fromInt(nid), 150, -1, PspElf$updateModuleFunctions$lambda$lambda(closure$_module, nfunc));
      }
      closure$registeredNativeFunctions.add_11rb$(nfunc.v);
      var syscallId = this$PspElf.syscallManager_0.register_3px1e6$(nfunc.v);
      return syscallId;
    };
  }
  PspElf.prototype.updateModuleFunctions_0 = function (moduleImport) {
    var tmp$;
    var _module = this.moduleManager_0.getByName_61zpoe$(moduleImport.name);
    var nidsStream = sliceWithSize_0(openSync_0(this.memory_0), moduleImport.nidAddress, moduleImport.functionCount * 4 | 0);
    var callStream = sliceWithSize_0(openSync_0(this.memory_0), moduleImport.callAddress, moduleImport.functionCount * 8 | 0);
    var registeredNativeFunctions = ArrayList_init();
    var unknownFunctions = ArrayList_init();
    var registerN = PspElf$updateModuleFunctions$lambda(_module, unknownFunctions, moduleImport, registeredNativeFunctions, this);
    tmp$ = moduleImport.functionCount;
    for (var n = 0; n < tmp$; n++) {
      var nid = readS32_le(nidsStream);
      var syscall = registerN(nid, n);
      write32_le(callStream, 65011720);
      write32_le(callStream, 12 | syscall << 6);
    }
    if (unknownFunctions.size > 0) {
      println("Can't find functions: " + toString(unknownFunctions));
    }
    return new PspElf$Res1(moduleImport.name, registeredNativeFunctions);
  };
  function PspElf$Res1(name, registeredNativeFunctions) {
    this.name = name;
    this.registeredNativeFunctions = registeredNativeFunctions;
  }
  PspElf$Res1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Res1',
    interfaces: []
  };
  PspElf.prototype.updateModuleVars_0 = function (moduleImport) {
  };
  PspElf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PspElf',
    interfaces: []
  };
  function Bits(offset, size) {
    this.offset = offset;
    this.size = size;
  }
  Bits.prototype.getValue_qkrva5$ = function (i, p) {
    return extract(i.data, this.offset, this.size);
  };
  Bits.prototype.setValue_445zcl$ = function (i, p, value) {
    i.data = insert(i.data, value, this.offset, this.size);
  };
  Bits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bits',
    interfaces: []
  };
  function Instruction(address, data) {
    this.address = address;
    this.data = data;
    this.u_imm16_u2rt4z$_0 = new Bits(0, 16);
    this.jump_bits_n8rtjk$_0 = new Bits(0, 26);
  }
  Object.defineProperty(Instruction.prototype, 'u_imm16', {
    get: function () {
      return this.u_imm16_u2rt4z$_0.getValue_qkrva5$(this, new PropertyMetadata('u_imm16'));
    },
    set: function (u_imm16) {
      this.u_imm16_u2rt4z$_0.setValue_445zcl$(this, new PropertyMetadata('u_imm16'), u_imm16);
    }
  });
  Object.defineProperty(Instruction.prototype, 'jump_bits', {
    get: function () {
      return this.jump_bits_n8rtjk$_0.getValue_qkrva5$(this, new PropertyMetadata('jump_bits'));
    },
    set: function (jump_bits) {
      this.jump_bits_n8rtjk$_0.setValue_445zcl$(this, new PropertyMetadata('jump_bits'), jump_bits);
    }
  });
  Object.defineProperty(Instruction.prototype, 'jump_real', {
    get: function () {
      return this.jump_bits * 4 | 0;
    },
    set: function (value) {
      this.jump_bits = value / 4 | 0;
    }
  });
  Instruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Instruction',
    interfaces: []
  };
  Instruction.prototype.component1 = function () {
    return this.address;
  };
  Instruction.prototype.component2 = function () {
    return this.data;
  };
  Instruction.prototype.copy_vux9f0$ = function (address, data) {
    return new Instruction(address === void 0 ? this.address : address, data === void 0 ? this.data : data);
  };
  Instruction.prototype.toString = function () {
    return 'Instruction(address=' + Kotlin.toString(this.address) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  Instruction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.address) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  Instruction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.address, other.address) && Kotlin.equals(this.data, other.data)))));
  };
  function PixelFormat(name, ordinal, id) {
    Enum.call(this);
    this.id_va3z88$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PixelFormat_initFields() {
    PixelFormat_initFields = function () {
    };
    PixelFormat$RGBA_5650_instance = new PixelFormat('RGBA_5650', 0, 0);
    PixelFormat$RGBA_5551_instance = new PixelFormat('RGBA_5551', 1, 1);
    PixelFormat$RGBA_4444_instance = new PixelFormat('RGBA_4444', 2, 2);
    PixelFormat$RGBA_8888_instance = new PixelFormat('RGBA_8888', 3, 3);
    PixelFormat$PALETTE_T4_instance = new PixelFormat('PALETTE_T4', 4, 4);
    PixelFormat$PALETTE_T8_instance = new PixelFormat('PALETTE_T8', 5, 5);
    PixelFormat$PALETTE_T16_instance = new PixelFormat('PALETTE_T16', 6, 6);
    PixelFormat$PALETTE_T32_instance = new PixelFormat('PALETTE_T32', 7, 7);
    PixelFormat$COMPRESSED_DXT1_instance = new PixelFormat('COMPRESSED_DXT1', 8, 8);
    PixelFormat$COMPRESSED_DXT3_instance = new PixelFormat('COMPRESSED_DXT3', 9, 9);
    PixelFormat$COMPRESSED_DXT5_instance = new PixelFormat('COMPRESSED_DXT5', 10, 10);
    PixelFormat$Companion_getInstance();
  }
  Object.defineProperty(PixelFormat.prototype, 'id', {
    get: function () {
      return this.id_va3z88$_0;
    }
  });
  var PixelFormat$RGBA_5650_instance;
  function PixelFormat$RGBA_5650_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$RGBA_5650_instance;
  }
  var PixelFormat$RGBA_5551_instance;
  function PixelFormat$RGBA_5551_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$RGBA_5551_instance;
  }
  var PixelFormat$RGBA_4444_instance;
  function PixelFormat$RGBA_4444_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$RGBA_4444_instance;
  }
  var PixelFormat$RGBA_8888_instance;
  function PixelFormat$RGBA_8888_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$RGBA_8888_instance;
  }
  var PixelFormat$PALETTE_T4_instance;
  function PixelFormat$PALETTE_T4_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$PALETTE_T4_instance;
  }
  var PixelFormat$PALETTE_T8_instance;
  function PixelFormat$PALETTE_T8_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$PALETTE_T8_instance;
  }
  var PixelFormat$PALETTE_T16_instance;
  function PixelFormat$PALETTE_T16_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$PALETTE_T16_instance;
  }
  var PixelFormat$PALETTE_T32_instance;
  function PixelFormat$PALETTE_T32_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$PALETTE_T32_instance;
  }
  var PixelFormat$COMPRESSED_DXT1_instance;
  function PixelFormat$COMPRESSED_DXT1_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$COMPRESSED_DXT1_instance;
  }
  var PixelFormat$COMPRESSED_DXT3_instance;
  function PixelFormat$COMPRESSED_DXT3_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$COMPRESSED_DXT3_instance;
  }
  var PixelFormat$COMPRESSED_DXT5_instance;
  function PixelFormat$COMPRESSED_DXT5_getInstance() {
    PixelFormat_initFields();
    return PixelFormat$COMPRESSED_DXT5_instance;
  }
  function PixelFormat$Companion() {
    PixelFormat$Companion_instance = this;
    this.values = PixelFormat$values();
  }
  PixelFormat$Companion.prototype.invoke_za3lpa$ = function (id) {
    return this.values[id];
  };
  PixelFormat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PixelFormat$Companion_instance = null;
  function PixelFormat$Companion_getInstance() {
    PixelFormat_initFields();
    if (PixelFormat$Companion_instance === null) {
      new PixelFormat$Companion();
    }
    return PixelFormat$Companion_instance;
  }
  PixelFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PixelFormat',
    interfaces: [NumericEnum, Enum]
  };
  function PixelFormat$values() {
    return [PixelFormat$RGBA_5650_getInstance(), PixelFormat$RGBA_5551_getInstance(), PixelFormat$RGBA_4444_getInstance(), PixelFormat$RGBA_8888_getInstance(), PixelFormat$PALETTE_T4_getInstance(), PixelFormat$PALETTE_T8_getInstance(), PixelFormat$PALETTE_T16_getInstance(), PixelFormat$PALETTE_T32_getInstance(), PixelFormat$COMPRESSED_DXT1_getInstance(), PixelFormat$COMPRESSED_DXT3_getInstance(), PixelFormat$COMPRESSED_DXT5_getInstance()];
  }
  PixelFormat.values = PixelFormat$values;
  function PixelFormat$valueOf(name) {
    switch (name) {
      case 'RGBA_5650':
        return PixelFormat$RGBA_5650_getInstance();
      case 'RGBA_5551':
        return PixelFormat$RGBA_5551_getInstance();
      case 'RGBA_4444':
        return PixelFormat$RGBA_4444_getInstance();
      case 'RGBA_8888':
        return PixelFormat$RGBA_8888_getInstance();
      case 'PALETTE_T4':
        return PixelFormat$PALETTE_T4_getInstance();
      case 'PALETTE_T8':
        return PixelFormat$PALETTE_T8_getInstance();
      case 'PALETTE_T16':
        return PixelFormat$PALETTE_T16_getInstance();
      case 'PALETTE_T32':
        return PixelFormat$PALETTE_T32_getInstance();
      case 'COMPRESSED_DXT1':
        return PixelFormat$COMPRESSED_DXT1_getInstance();
      case 'COMPRESSED_DXT3':
        return PixelFormat$COMPRESSED_DXT3_getInstance();
      case 'COMPRESSED_DXT5':
        return PixelFormat$COMPRESSED_DXT5_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.hle.PixelFormat.' + name);
    }
  }
  PixelFormat.valueOf_61zpoe$ = PixelFormat$valueOf;
  function MemoryManager() {
    this.memoryPartitionsUid = LinkedHashMap_init();
    var tmp$ = this.memoryPartitionsUid;
    var tmp$_0 = MemoryPartitions$Companion_getInstance().Kernel0;
    var name = 'Kernel Partition 1';
    var low = new Kotlin.Long(-2013265920, 0);
    var high = new Kotlin.Long(-2010120192, 0);
    var value = new MemoryPartition(name, numberToDouble(low), numberToDouble(high), false, null);
    tmp$.put_xwzc9p$(tmp$_0, value);
    var tmp$_1 = this.memoryPartitionsUid;
    var tmp$_2 = MemoryPartitions$Companion_getInstance().User;
    var name_0 = 'User Partition';
    var high_0 = 142606336 + (1048576 * 24 | 0) | 0;
    var value_0 = new MemoryPartition(name_0, numberToDouble(142606336), numberToDouble(high_0), false, null);
    tmp$_1.put_xwzc9p$(tmp$_2, value_0);
    var tmp$_3 = this.memoryPartitionsUid;
    var tmp$_4 = MemoryPartitions$Companion_getInstance().UserStacks;
    var name_1 = 'User Stacks Partition';
    var high_1 = 142606336 + (1048576 * 24 | 0) | 0;
    var value_1 = new MemoryPartition(name_1, numberToDouble(142606336), numberToDouble(high_1), false, null);
    tmp$_3.put_xwzc9p$(tmp$_4, value_1);
    var tmp$_5 = this.memoryPartitionsUid;
    var tmp$_6 = MemoryPartitions$Companion_getInstance().VolatilePartition;
    var value_2 = new MemoryPartition('Volatile Partition', numberToDouble(138412032), numberToDouble(142606336), false, null);
    tmp$_5.put_xwzc9p$(tmp$_6, value_2);
  }
  Object.defineProperty(MemoryManager.prototype, 'kernelPartition', {
    get: function () {
      var tmp$;
      return (tmp$ = this.memoryPartitionsUid.get_11rb$(MemoryPartitions$Companion_getInstance().Kernel0)) != null ? tmp$ : throwNPE();
    }
  });
  Object.defineProperty(MemoryManager.prototype, 'userPartition', {
    get: function () {
      var tmp$;
      return (tmp$ = this.memoryPartitionsUid.get_11rb$(MemoryPartitions$Companion_getInstance().User)) != null ? tmp$ : throwNPE();
    }
  });
  Object.defineProperty(MemoryManager.prototype, 'stackPartition', {
    get: function () {
      var tmp$;
      return (tmp$ = this.memoryPartitionsUid.get_11rb$(MemoryPartitions$Companion_getInstance().UserStacks)) != null ? tmp$ : throwNPE();
    }
  });
  MemoryManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoryManager',
    interfaces: []
  };
  function MemoryPartitions(id) {
    MemoryPartitions$Companion_getInstance();
    this.id = id;
  }
  function MemoryPartitions$Companion() {
    MemoryPartitions$Companion_instance = this;
    this.Kernel0 = 0;
    this.User = 2;
    this.VolatilePartition = 5;
    this.UserStacks = 6;
  }
  MemoryPartitions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MemoryPartitions$Companion_instance = null;
  function MemoryPartitions$Companion_getInstance() {
    if (MemoryPartitions$Companion_instance === null) {
      new MemoryPartitions$Companion();
    }
    return MemoryPartitions$Companion_instance;
  }
  MemoryPartitions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoryPartitions',
    interfaces: []
  };
  function MemoryAnchor(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MemoryAnchor_initFields() {
    MemoryAnchor_initFields = function () {
    };
    MemoryAnchor$Low_instance = new MemoryAnchor('Low', 0, 0);
    MemoryAnchor$High_instance = new MemoryAnchor('High', 1, 1);
    MemoryAnchor$Address_instance = new MemoryAnchor('Address', 2, 2);
    MemoryAnchor$LowAligned_instance = new MemoryAnchor('LowAligned', 3, 3);
    MemoryAnchor$HighAligned_instance = new MemoryAnchor('HighAligned', 4, 4);
  }
  var MemoryAnchor$Low_instance;
  function MemoryAnchor$Low_getInstance() {
    MemoryAnchor_initFields();
    return MemoryAnchor$Low_instance;
  }
  var MemoryAnchor$High_instance;
  function MemoryAnchor$High_getInstance() {
    MemoryAnchor_initFields();
    return MemoryAnchor$High_instance;
  }
  var MemoryAnchor$Address_instance;
  function MemoryAnchor$Address_getInstance() {
    MemoryAnchor_initFields();
    return MemoryAnchor$Address_instance;
  }
  var MemoryAnchor$LowAligned_instance;
  function MemoryAnchor$LowAligned_getInstance() {
    MemoryAnchor_initFields();
    return MemoryAnchor$LowAligned_instance;
  }
  var MemoryAnchor$HighAligned_instance;
  function MemoryAnchor$HighAligned_getInstance() {
    MemoryAnchor_initFields();
    return MemoryAnchor$HighAligned_instance;
  }
  MemoryAnchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoryAnchor',
    interfaces: [Enum]
  };
  function MemoryAnchor$values() {
    return [MemoryAnchor$Low_getInstance(), MemoryAnchor$High_getInstance(), MemoryAnchor$Address_getInstance(), MemoryAnchor$LowAligned_getInstance(), MemoryAnchor$HighAligned_getInstance()];
  }
  MemoryAnchor.values = MemoryAnchor$values;
  function MemoryAnchor$valueOf(name) {
    switch (name) {
      case 'Low':
        return MemoryAnchor$Low_getInstance();
      case 'High':
        return MemoryAnchor$High_getInstance();
      case 'Address':
        return MemoryAnchor$Address_getInstance();
      case 'LowAligned':
        return MemoryAnchor$LowAligned_getInstance();
      case 'HighAligned':
        return MemoryAnchor$HighAligned_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.hle.manager.MemoryAnchor.' + name);
    }
  }
  MemoryAnchor.valueOf_61zpoe$ = MemoryAnchor$valueOf;
  function OutOfMemoryError(message) {
    Exception.call(this, message);
    this.name = 'OutOfMemoryError';
  }
  OutOfMemoryError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OutOfMemoryError',
    interfaces: [Exception]
  };
  function MemoryPartition(name, low, high, allocated, parent) {
    MemoryPartition$Companion_getInstance();
    if (parent === void 0)
      parent = null;
    this.name = name;
    this.low = low;
    this.high = high;
    this.allocated = allocated;
    this.parent = parent;
    this.address = this.low;
    this._childPartitions_0 = ArrayList_init();
  }
  function MemoryPartition$Companion() {
    MemoryPartition$Companion_instance = this;
  }
  MemoryPartition$Companion.prototype.invoke_irad7e$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.hle.manager.MemoryPartition.Companion.invoke_irad7e$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var MemoryPartition_init = _.com.soywiz.kpspemu.hle.manager.MemoryPartition;
    return function (name, low, high, allocated, parent) {
      if (parent === void 0)
        parent = null;
      return new MemoryPartition_init(name, numberToDouble(low), numberToDouble(high), allocated, parent);
    };
  }));
  MemoryPartition$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MemoryPartition$Companion_instance = null;
  function MemoryPartition$Companion_getInstance() {
    if (MemoryPartition$Companion_instance === null) {
      new MemoryPartition$Companion();
    }
    return MemoryPartition$Companion_instance;
  }
  Object.defineProperty(MemoryPartition.prototype, 'free', {
    get: function () {
      return !this.allocated;
    }
  });
  Object.defineProperty(MemoryPartition.prototype, 'size', {
    get: function () {
      return this.high - this.low;
    }
  });
  Object.defineProperty(MemoryPartition.prototype, 'root', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.root : null) != null ? tmp$_0 : this;
    }
  });
  Object.defineProperty(MemoryPartition.prototype, 'childPartitions', {
    get: function () {
      if (this._childPartitions_0.isEmpty()) {
        this._childPartitions_0.add_11rb$(new MemoryPartition('', this.low, this.high, false, this));
      }
      return this._childPartitions_0;
    }
  });
  MemoryPartition.prototype.contains_14dthe$ = function (address) {
    return address >= this.low && address < this.high;
  };
  MemoryPartition.prototype.deallocate = function () {
    var tmp$;
    this.allocated = false;
    (tmp$ = this.parent) != null ? (tmp$.cleanup_0(), Unit) : null;
  };
  MemoryPartition.prototype.allocate_sin65v$ = function (size, anchor, address, name) {
    if (address === void 0)
      address = 0.0;
    if (name === void 0)
      name = '';
    if (equals(anchor, MemoryAnchor$LowAligned_getInstance()) || equals(anchor, MemoryAnchor$Low_getInstance()))
      return this.allocateLow_t0es5s$(size, name);
    else if (equals(anchor, MemoryAnchor$High_getInstance()))
      return this.allocateHigh_tdm7pe$(size, name);
    else if (equals(anchor, MemoryAnchor$Address_getInstance()))
      return this.allocateSet_rpaqe6$(size, address, name);
    else
      throw new Error_0(format('Not implemented anchor %d:%s', [anchor, anchor]));
  };
  MemoryPartition.prototype.allocateSet_7prga6$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.hle.manager.MemoryPartition.allocateSet_7prga6$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (size, addressLow, name) {
      if (name === void 0)
        name = '';
      return this.allocateSet_rpaqe6$(numberToDouble(size), numberToDouble(addressLow), name);
    };
  }));
  MemoryPartition.prototype.allocateLow_xfy9o8$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.hle.manager.MemoryPartition.allocateLow_xfy9o8$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (size, name) {
      if (name === void 0)
        name = '';
      return this.allocateLow_t0es5s$(numberToDouble(size), name);
    };
  }));
  MemoryPartition.prototype.allocateHigh_oj6pkq$ = defineInlineFunction('kpspemu.com.soywiz.kpspemu.hle.manager.MemoryPartition.allocateHigh_oj6pkq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (size, name, alignment) {
      if (name === void 0)
        name = '';
      if (alignment === void 0)
        alignment = 1;
      return this.allocateHigh_tdm7pe$(numberToDouble(size), name);
    };
  }));
  MemoryPartition.prototype.allocateSet_rpaqe6$ = function (size, addressLow, name) {
    if (name === void 0)
      name = '';
    var childs = this.childPartitions;
    var addressHigh = addressLow + size;
    if (!this.contains_14dthe$(addressLow) || !this.contains_14dthe$(addressHigh)) {
      throw new OutOfMemoryError(format("Can't allocate [%08X-%08X] in [%08X-%08X]", [addressLow, addressHigh, this.low, this.high]));
    }
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$;
      var index = 0;
      tmp$ = childs.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (item.contains_14dthe$(addressLow)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var index_0 = indexOfFirst$result;
    if (index_0 < 0) {
      println(format('address: %08X, size: %d', [addressLow, size]));
      println(this);
      throw new Error_0("Can't find the segment");
    }
    var child = childs.get_za3lpa$(index_0);
    if (child.allocated)
      throw new Error_0('Memory already allocated');
    if (!child.contains_14dthe$(addressHigh - 1))
      throw new Error_0("Can't fit memory");
    var p1 = new MemoryPartition('', child.low, addressLow, false, this);
    var p2 = new MemoryPartition(name, addressLow, addressHigh, true, this);
    var p3 = new MemoryPartition('', addressHigh, child.high, false, this);
    splice(childs, index_0, 1, [p1, p2, p3]);
    this.cleanup_0();
    return p2;
  };
  MemoryPartition.prototype.allocateLow_t0es5s$ = function (size, name) {
    if (name === void 0)
      name = '';
    return this.allocateLowHigh_0(size, true, name);
  };
  MemoryPartition.prototype.allocateHigh_tdm7pe$ = function (size, name, alignment) {
    if (name === void 0)
      name = '';
    if (alignment === void 0)
      alignment = 1;
    return this.allocateLowHigh_0(size, false, name);
  };
  MemoryPartition.prototype._validateChilds_0 = function () {
    var tmp$;
    var childs = this.childPartitions;
    if (childs.get_za3lpa$(0).low !== this.low)
      throw new Error_0("First child low doesn't match container low");
    if (childs.get_za3lpa$(childs.size - 1 | 0).high !== this.high)
      throw new Error_0("Last child high doesn't match container high");
    tmp$ = childs.size - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      if (childs.get_za3lpa$(n + 0 | 0).high !== childs.get_za3lpa$(n + 1 | 0).low)
        throw new Error_0('Children at ' + n + ' are not contiguous');
    }
  };
  MemoryPartition.prototype.allocateLowHigh_0 = function (size, low, name) {
    if (name === void 0)
      name = '';
    var childs = this.childPartitions;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$;
      var index = 0;
      tmp$ = childs.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (item.free && item.size >= size) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var index_0 = indexOfFirst$result;
    if (index_0 < 0)
      throw new OutOfMemoryError("Can't find a partition with " + size + ' available');
    var child = childs.get_za3lpa$(index_0);
    var unallocatedChild;
    var allocatedChild;
    if (low) {
      var p1 = child.low;
      var p2 = child.low + size;
      var p3 = child.high;
      allocatedChild = new MemoryPartition(name, p1, p2, true, this);
      unallocatedChild = new MemoryPartition('', p2, p3, false, this);
      splice(childs, index_0, 1, [allocatedChild, unallocatedChild]);
    }
     else {
      var p1_0 = child.low;
      var p2_0 = child.high - size;
      var p3_0 = child.high;
      unallocatedChild = new MemoryPartition('', p1_0, p2_0, false, this);
      allocatedChild = new MemoryPartition(name, p2_0, p3_0, true, this);
      splice(childs, index_0, 1, [unallocatedChild, allocatedChild]);
    }
    this.cleanup_0();
    return allocatedChild;
  };
  MemoryPartition.prototype.unallocate = function () {
    var tmp$;
    this.name = '';
    this.allocated = false;
    (tmp$ = this.parent) != null ? (tmp$.cleanup_0(), Unit) : null;
  };
  MemoryPartition.prototype.cleanup_0 = function () {
    var startTotalFreeMemory = this.getTotalFreeMemory();
    this._validateChilds_0();
    var childs = {v: this.childPartitions};
    if (childs.v.size >= 2) {
      var n = 0;
      while (n < (childs.v.size - 1 | 0)) {
        var l = childs.v.get_za3lpa$(n + 0 | 0);
        var r = childs.v.get_za3lpa$(n + 1 | 0);
        if (!l.allocated && !r.allocated) {
          var new_0 = new MemoryPartition('', l.low, r.high, false, this);
          splice(childs.v, n, 2, [new_0]);
        }
         else {
          n = n + 1 | 0;
        }
      }
    }
    var n_0 = 0;
    while (n_0 < childs.v.size) {
      var child = childs.v.get_za3lpa$(n_0);
      if (!child.allocated && child.size === 0.0) {
        splice(childs.v, n_0, 1, []);
      }
       else {
        n_0 = n_0 + 1 | 0;
      }
    }
    this._validateChilds_0();
    var endTotalFreeMemory = this.getTotalFreeMemory();
    if (endTotalFreeMemory !== startTotalFreeMemory) {
      println('assertion failed [1]! : ' + startTotalFreeMemory + ',' + endTotalFreeMemory);
    }
  };
  Object.defineProperty(MemoryPartition.prototype, 'nonAllocatedPartitions', {
    get: function () {
      var $receiver = this.childPartitions;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!element.allocated)
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  function MemoryPartition$getTotalFreeMemory$lambda(prev, item) {
    return item.size + prev;
  }
  MemoryPartition.prototype.getTotalFreeMemory = function () {
    return reduceAcumulate(this.nonAllocatedPartitions, 0.0, MemoryPartition$getTotalFreeMemory$lambda);
  };
  MemoryPartition.prototype.getMaxContiguousFreeMemory = function () {
    var tmp$, tmp$_0;
    var $receiver = this.nonAllocatedPartitions;
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var maxValue = maxElem.size;
      while (iterator.hasNext()) {
        var e = iterator.next();
        var v = e.size;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    return (tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.size : null) != null ? tmp$_0 : 0.0;
  };
  MemoryPartition.prototype.getTotalFreeMemoryInt = function () {
    return numberToInt(this.getTotalFreeMemory());
  };
  MemoryPartition.prototype.getMaxContiguousFreeMemoryInt = function () {
    return numberToInt(this.getMaxContiguousFreeMemory());
  };
  MemoryPartition.prototype.findFreeChildWithSize_0 = function (size) {
  };
  MemoryPartition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemoryPartition',
    interfaces: []
  };
  MemoryPartition.prototype.component1 = function () {
    return this.name;
  };
  MemoryPartition.prototype.component2 = function () {
    return this.low;
  };
  MemoryPartition.prototype.component3 = function () {
    return this.high;
  };
  MemoryPartition.prototype.component4 = function () {
    return this.allocated;
  };
  MemoryPartition.prototype.component5 = function () {
    return this.parent;
  };
  MemoryPartition.prototype.copy_xwah62$ = function (name, low, high, allocated, parent) {
    return new MemoryPartition(name === void 0 ? this.name : name, low === void 0 ? this.low : low, high === void 0 ? this.high : high, allocated === void 0 ? this.allocated : allocated, parent === void 0 ? this.parent : parent);
  };
  MemoryPartition.prototype.toString = function () {
    return 'MemoryPartition(name=' + Kotlin.toString(this.name) + (', low=' + Kotlin.toString(this.low)) + (', high=' + Kotlin.toString(this.high)) + (', allocated=' + Kotlin.toString(this.allocated)) + (', parent=' + Kotlin.toString(this.parent)) + ')';
  };
  MemoryPartition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.low) | 0;
    result = result * 31 + Kotlin.hashCode(this.high) | 0;
    result = result * 31 + Kotlin.hashCode(this.allocated) | 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    return result;
  };
  MemoryPartition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.low, other.low) && Kotlin.equals(this.high, other.high) && Kotlin.equals(this.allocated, other.allocated) && Kotlin.equals(this.parent, other.parent)))));
  };
  function ModuleManager(e) {
    this.e = e;
    this.modules = LinkedHashMap_init();
  }
  ModuleManager.prototype.register_wfqky4$ = function (module_0) {
    var $receiver = this.modules;
    var key = module_0.name;
    $receiver.put_xwzc9p$(key, module_0);
    module_0.registerPspModule_egl5qq$(this.e);
  };
  ModuleManager.prototype.getByName_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.modules.get_11rb$(name)) != null ? tmp$ : invalidOp("Can't find module '" + name + "'");
  };
  ModuleManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModuleManager',
    interfaces: []
  };
  function SyscallManager() {
    this.lasSyscallId = 1;
    this.syscallToFunc = LinkedHashMap_init();
  }
  SyscallManager.prototype.unhandled_acv9wa$ = function (state, id) {
    println(format('%08X: Called syscall: ### %04X', [state.getPC(), id]));
  };
  SyscallManager.prototype.register_p42kcx$ = function (id, callback) {
    if (id === void 0)
      id = -1;
    var tmp$;
    var syscallId = id < 0 ? (tmp$ = this.lasSyscallId, this.lasSyscallId = tmp$ + 1 | 0, tmp$) : id;
    this.syscallToFunc.put_xwzc9p$(syscallId, callback);
    return syscallId;
  };
  function SyscallManager$register$lambda(closure$nfunc) {
    return function (cpu, f) {
      closure$nfunc.function(cpu);
      return Unit;
    };
  }
  SyscallManager.prototype.register_3px1e6$ = function (nfunc, id) {
    if (id === void 0)
      id = -1;
    return this.register_p42kcx$(id, SyscallManager$register$lambda(nfunc));
  };
  SyscallManager.prototype.syscall_acv9wa$ = function (state, id) {
    var tmp$;
    var func = (tmp$ = this.syscallToFunc.get_11rb$(id)) != null ? tmp$ : getCallableRef('unhandled', function ($receiver, state, id) {
      return $receiver.unhandled_acv9wa$(state, id), Unit;
    }.bind(null, this));
    func(state, id);
  };
  SyscallManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SyscallManager',
    interfaces: [Syscalls]
  };
  function registerNativeModules($receiver) {
    registerNativeModules_0($receiver.moduleManager);
  }
  function registerNativeModules_0($receiver) {
    $receiver.register_wfqky4$(new sceCtrl());
    $receiver.register_wfqky4$(new sceDisplay());
    $receiver.register_wfqky4$(new UtilsForUser());
  }
  function RegisterReader() {
    this.pos = 4;
    this.e_3kfihc$_0 = this.e_3kfihc$_0;
    this.cpu_iwpsz7$_0 = this.cpu_iwpsz7$_0;
  }
  Object.defineProperty(RegisterReader.prototype, 'e', {
    get: function () {
      if (this.e_3kfihc$_0 == null)
        return throwUPAE('e');
      return this.e_3kfihc$_0;
    },
    set: function (e) {
      this.e_3kfihc$_0 = e;
    }
  });
  Object.defineProperty(RegisterReader.prototype, 'cpu', {
    get: function () {
      if (this.cpu_iwpsz7$_0 == null)
        return throwUPAE('cpu');
      return this.cpu_iwpsz7$_0;
    },
    set: function (cpu) {
      this.cpu_iwpsz7$_0 = cpu;
    }
  });
  RegisterReader.prototype.reset_xt3zvs$ = function (cpu) {
    this.cpu = cpu;
    this.pos = 4;
  };
  Object.defineProperty(RegisterReader.prototype, 'thread', {
    get: function () {
      return new PspThread(this.mem, this.cpu.syscalls);
    }
  });
  Object.defineProperty(RegisterReader.prototype, 'mem', {
    get: function () {
      return this.cpu.mem;
    }
  });
  Object.defineProperty(RegisterReader.prototype, 'int', {
    get: function () {
      var tmp$;
      return this.cpu.GPR.get_za3lpa$((tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$));
    }
  });
  Object.defineProperty(RegisterReader.prototype, 'ptr', {
    get: function () {
      return new MemPtr(this.mem, this.int);
    }
  });
  RegisterReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegisterReader',
    interfaces: []
  };
  function NativeFunction(name, nid, since, syscall, function_0) {
    this.name = name;
    this.nid = nid;
    this.since = since;
    this.syscall = syscall;
    this.function = function_0;
  }
  NativeFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeFunction',
    interfaces: []
  };
  NativeFunction.prototype.component1 = function () {
    return this.name;
  };
  NativeFunction.prototype.component2 = function () {
    return this.nid;
  };
  NativeFunction.prototype.component3 = function () {
    return this.since;
  };
  NativeFunction.prototype.component4 = function () {
    return this.syscall;
  };
  NativeFunction.prototype.component5 = function () {
    return this.function;
  };
  NativeFunction.prototype.copy_gh35x6$ = function (name, nid, since, syscall, function_0) {
    return new NativeFunction(name === void 0 ? this.name : name, nid === void 0 ? this.nid : nid, since === void 0 ? this.since : since, syscall === void 0 ? this.syscall : syscall, function_0 === void 0 ? this.function : function_0);
  };
  NativeFunction.prototype.toString = function () {
    return 'NativeFunction(name=' + Kotlin.toString(this.name) + (', nid=' + Kotlin.toString(this.nid)) + (', since=' + Kotlin.toString(this.since)) + (', syscall=' + Kotlin.toString(this.syscall)) + (', function=' + Kotlin.toString(this.function)) + ')';
  };
  NativeFunction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.nid) | 0;
    result = result * 31 + Kotlin.hashCode(this.since) | 0;
    result = result * 31 + Kotlin.hashCode(this.syscall) | 0;
    result = result * 31 + Kotlin.hashCode(this.function) | 0;
    return result;
  };
  NativeFunction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.nid, other.nid) && Kotlin.equals(this.since, other.since) && Kotlin.equals(this.syscall, other.syscall) && Kotlin.equals(this.function, other.function)))));
  };
  function SceModule(name) {
    this.name = name;
    this.e_vhx781$_0 = this.e_vhx781$_0;
    this.rr_hzzurk$_0 = new RegisterReader();
    this.functions = LinkedHashMap_init();
  }
  Object.defineProperty(SceModule.prototype, 'e', {
    get: function () {
      if (this.e_vhx781$_0 == null)
        return throwUPAE('e');
      return this.e_vhx781$_0;
    },
    set: function (e) {
      this.e_vhx781$_0 = e;
    }
  });
  SceModule.prototype.registerPspModule_egl5qq$ = function (e) {
    this.e = e;
    this.registerModule();
  };
  SceModule.prototype.getByNidOrNull_za3lpa$ = function (nid) {
    return this.functions.get_11rb$(nid);
  };
  SceModule.prototype.getByNid_za3lpa$ = function (nid) {
    var tmp$;
    return (tmp$ = this.getByNidOrNull_za3lpa$(nid)) != null ? tmp$ : invalidOp(format("Can't find NID 0x%08X in %s", [nid, this.name]));
  };
  function SceModule$registerFunctionRaw$lambda(closure$function) {
    return function (cpu, syscall) {
      closure$function.function(cpu);
      return Unit;
    };
  }
  SceModule.prototype.registerFunctionRaw_ux1oik$ = function (function_0) {
    var $receiver = this.functions;
    var key = function_0.nid.toInt();
    $receiver.put_xwzc9p$(key, function_0);
    if (function_0.syscall >= 0) {
      this.e.syscalls.register_p42kcx$(function_0.syscall, SceModule$registerFunctionRaw$lambda(function_0));
    }
  };
  SceModule.prototype.registerFunctionRaw_gh35x6$ = function (name, uid, since, syscall, function_0) {
    if (since === void 0)
      since = 150;
    if (syscall === void 0)
      syscall = -1;
    this.registerFunctionRaw_ux1oik$(new NativeFunction(name, uid, since, syscall, function_0));
  };
  function SceModule$registerFunctionRR$lambda(this$SceModule, closure$function) {
    return function (it) {
      this$SceModule.rr_hzzurk$_0.reset_xt3zvs$(it);
      closure$function(this$SceModule.rr_hzzurk$_0, it);
      return Unit;
    };
  }
  SceModule.prototype.registerFunctionRR_aq82hb$ = function (name, uid, since, syscall, function_0) {
    if (since === void 0)
      since = 150;
    if (syscall === void 0)
      syscall = -1;
    this.registerFunctionRaw_gh35x6$(name, uid, since, syscall, SceModule$registerFunctionRR$lambda(this, function_0));
  };
  SceModule.prototype.registerFunctionVoid_aq82hb$ = function (name, uid, since, syscall, function_0) {
    if (since === void 0)
      since = 150;
    if (syscall === void 0)
      syscall = -1;
    this.registerFunctionRR_aq82hb$(name, uid, since, syscall, function_0);
  };
  function SceModule$registerFunctionInt$lambda(closure$function) {
    return function ($receiver, it) {
      $receiver.cpu.GPR.set_vux9f0$(2, closure$function($receiver, it));
      return Unit;
    };
  }
  SceModule.prototype.registerFunctionInt_e365ve$ = function (name, uid, since, syscall, function_0) {
    if (since === void 0)
      since = 150;
    if (syscall === void 0)
      syscall = -1;
    this.registerFunctionRR_aq82hb$(name, uid, since, syscall, SceModule$registerFunctionInt$lambda(function_0));
  };
  SceModule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SceModule',
    interfaces: []
  };
  function UtilsForUser() {
    SceModule.call(this, 'UtilsForUser');
    this.random = MtRand_init(0);
  }
  function UtilsForUser$registerModule$lambda(this$UtilsForUser) {
    return function ($receiver, it) {
      return this$UtilsForUser.sceKernelUtilsMt19937Init_qjt2zx$($receiver.mem, $receiver.int, $receiver.int);
    };
  }
  function UtilsForUser$registerModule$lambda_0(this$UtilsForUser) {
    return function ($receiver, it) {
      return this$UtilsForUser.sceKernelUtilsMt19937UInt_ktor8l$($receiver.mem, $receiver.int);
    };
  }
  UtilsForUser.prototype.registerModule = function () {
    this.registerFunctionInt_e365ve$('sceKernelUtilsMt19937Init', new Kotlin.Long(-396302498, 0), 150, 8383, UtilsForUser$registerModule$lambda(this));
    this.registerFunctionInt_e365ve$('sceKernelUtilsMt19937UInt', Kotlin.Long.fromInt(117148259), 150, 8384, UtilsForUser$registerModule$lambda_0(this));
  };
  UtilsForUser.prototype.sceKernelUtilsMt19937Init_qjt2zx$ = function (memory, ctx, seed) {
    println('Not implemented UtilsForUser.sceKernelUtilsMt19937Init');
    return 0;
  };
  UtilsForUser.prototype.sceKernelUtilsMt19937UInt_ktor8l$ = function (memory, ctx) {
    var value = this.random.nextInt();
    return value;
  };
  UtilsForUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UtilsForUser',
    interfaces: [SceModule]
  };
  function sceCtrl() {
    SceModule.call(this, 'sceCtrl');
  }
  function sceCtrl$registerModule$lambda(this$sceCtrl) {
    return function ($receiver, it) {
      return this$sceCtrl.sceCtrlPeekBufferPositive_1fpi1a$($receiver.ptr, $receiver.int);
    };
  }
  sceCtrl.prototype.registerModule = function () {
    this.registerFunctionInt_e365ve$('sceCtrlPeekBufferPositive', Kotlin.Long.fromInt(979510608), 150, 8528, sceCtrl$registerModule$lambda(this));
  };
  sceCtrl.prototype.sceCtrlPeekBufferPositive_1fpi1a$ = function (sceCtrlDataPtr, count) {
    for (var n = 0; n < count; n++) {
      sceCtrlDataPtr.sw_vux9f0$(n * 4 | 0, 0);
    }
    return count;
  };
  sceCtrl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'sceCtrl',
    interfaces: [SceModule]
  };
  function sceDisplay() {
    SceModule.call(this, 'sceDisplay');
    this.display_jcq7bg$_0 = lazy(sceDisplay$display$lambda(this));
  }
  Object.defineProperty(sceDisplay.prototype, 'display', {
    get: function () {
      var $receiver = this.display_jcq7bg$_0;
      new PropertyMetadata('display');
      return $receiver.value;
    }
  });
  function sceDisplay$registerModule$lambda(this$sceDisplay) {
    return function ($receiver, it) {
      return this$sceDisplay.sceDisplaySetMode_qt1dr2$($receiver.int, $receiver.int, $receiver.int);
    };
  }
  function sceDisplay$registerModule$lambda_0(this$sceDisplay) {
    return function ($receiver, it) {
      return this$sceDisplay.sceDisplayWaitVblankStart_li5xa6$($receiver.thread);
    };
  }
  function sceDisplay$registerModule$lambda_1(this$sceDisplay) {
    return function ($receiver, it) {
      return this$sceDisplay.sceDisplaySetFrameBuf_tjonv8$($receiver.int, $receiver.int, $receiver.int, $receiver.int);
    };
  }
  sceDisplay.prototype.registerModule = function () {
    this.registerFunctionInt_e365ve$('sceDisplaySetMode', Kotlin.Long.fromInt(237039991), 150, 8506, sceDisplay$registerModule$lambda(this));
    this.registerFunctionInt_e365ve$('sceDisplayWaitVblankStart', new Kotlin.Long(-1739839513, 0), 150, 8519, sceDisplay$registerModule$lambda_0(this));
    this.registerFunctionInt_e365ve$('sceDisplaySetFrameBuf', Kotlin.Long.fromInt(681411326), 150, 8511, sceDisplay$registerModule$lambda_1(this));
  };
  sceDisplay.prototype.sceDisplaySetMode_qt1dr2$ = function (mode, width, height) {
    this.display.displayMode = mode;
    this.display.displayWidth = width;
    this.display.displayHeight = height;
    return 0;
  };
  sceDisplay.prototype.sceDisplayWaitVblankStart_li5xa6$ = function (thread) {
    return 0;
  };
  sceDisplay.prototype.sceDisplaySetFrameBuf_tjonv8$ = function (address, bufferWidth, pixelFormat, sync) {
    this.display.address = address;
    this.display.bufferWidth = bufferWidth;
    this.display.pixelFormat = PixelFormat$Companion_getInstance().invoke_za3lpa$(pixelFormat);
    this.display.sync = sync;
    return 0;
  };
  function sceDisplay$display$lambda(this$sceDisplay) {
    return function () {
      return this$sceDisplay.e.display;
    };
  }
  sceDisplay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'sceDisplay',
    interfaces: [SceModule]
  };
  var MASK;
  var LWR_MASK;
  var LWR_SHIFT;
  var LWL_MASK;
  var LWL_SHIFT;
  var SWL_MASK;
  var SWL_SHIFT;
  var SWR_MASK;
  var SWR_SHIFT;
  function Memory(dummy) {
    Memory$Companion_getInstance();
  }
  function Memory$Companion() {
    Memory$Companion_instance = this;
    this.MAIN_OFFSET = 134217728;
    this.SCRATCHPAD = new Memory$MemorySegment('scatchpad', until(0, 65536));
    this.VIDEOMEM = new Memory$MemorySegment('videomem', until(67108864, 69206016));
    this.MAINMEM = new Memory$MemorySegment('mainmem', until(this.MAIN_OFFSET, 167772160));
  }
  Memory$Companion.prototype.invoke = function () {
    return new FastMemory();
  };
  Memory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Memory$Companion_instance = null;
  function Memory$Companion_getInstance() {
    if (Memory$Companion_instance === null) {
      new Memory$Companion();
    }
    return Memory$Companion_instance;
  }
  function Memory$MemorySegment(name, range) {
    this.name = name;
    this.range = range;
  }
  Object.defineProperty(Memory$MemorySegment.prototype, 'start', {
    get: function () {
      return this.range.start;
    }
  });
  Object.defineProperty(Memory$MemorySegment.prototype, 'end', {
    get: function () {
      return this.range.endInclusive + 1 | 0;
    }
  });
  Memory$MemorySegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemorySegment',
    interfaces: []
  };
  Memory$MemorySegment.prototype.component1 = function () {
    return this.name;
  };
  Memory$MemorySegment.prototype.component2 = function () {
    return this.range;
  };
  Memory$MemorySegment.prototype.copy_olwhvr$ = function (name, range) {
    return new Memory$MemorySegment(name === void 0 ? this.name : name, range === void 0 ? this.range : range);
  };
  Memory$MemorySegment.prototype.toString = function () {
    return 'MemorySegment(name=' + Kotlin.toString(this.name) + (', range=' + Kotlin.toString(this.range)) + ')';
  };
  Memory$MemorySegment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    return result;
  };
  Memory$MemorySegment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.range, other.range)))));
  };
  Memory.prototype.read_3fge6q$ = function (srcPos, dst, dstPos, len) {
    if (dstPos === void 0)
      dstPos = 0;
    if (len === void 0)
      len = dst.length - dstPos | 0;
    for (var n = 0; n < len; n++)
      dst[dstPos + n | 0] = toByte(this.lb_za3lpa$(srcPos + n | 0));
  };
  Memory.prototype.readBytes_vux9f0$ = function (srcPos, count) {
    var $receiver = new Int8Array(count);
    this.read_3fge6q$(srcPos, $receiver, 0, count);
    return $receiver;
  };
  Memory.prototype.write_3fge6q$ = function (dstPos, src, srcPos, len) {
    if (srcPos === void 0)
      srcPos = 0;
    if (len === void 0)
      len = src.length - srcPos | 0;
    for (var n = 0; n < len; n++)
      this.sb_vux9f0$(dstPos + n | 0, src[srcPos + n | 0]);
  };
  Memory.prototype.lwl_vux9f0$ = function (address, value) {
    var align = address & 3;
    var oldvalue = this.lw_za3lpa$(address & ~3);
    return oldvalue << LWL_SHIFT[align] | value & LWL_MASK[align];
  };
  Memory.prototype.lwr_vux9f0$ = function (address, value) {
    var align = address & 3;
    var oldvalue = this.lw_za3lpa$(address & ~3);
    return oldvalue >>> LWR_SHIFT[align] | value & LWR_MASK[align];
  };
  Memory.prototype.swl_vux9f0$ = function (address, value) {
    var align = address & 3;
    var aadress = address & ~3;
    var vwrite = value >>> SWL_SHIFT[align] | this.lw_za3lpa$(aadress) & SWL_MASK[align];
    this.sw_vux9f0$(aadress, vwrite);
  };
  Memory.prototype.swr_vux9f0$ = function (address, value) {
    var align = address & 3;
    var aadress = address & ~3;
    var vwrite = value << SWR_SHIFT[align] | this.lw_za3lpa$(aadress) & SWR_MASK[align];
    this.sw_vux9f0$(aadress, vwrite);
  };
  Memory.prototype.lbu_za3lpa$ = function (address) {
    return this.lb_za3lpa$(address) & 255;
  };
  Memory.prototype.lhu_za3lpa$ = function (address) {
    return this.lh_za3lpa$(address) & 65535;
  };
  Memory.prototype.memset_qt1dr2$ = function (address, value, size) {
    for (var n = 0; n < size; n++)
      this.sb_vux9f0$(address, value);
  };
  Memory.prototype.getPointerStream_vux9f0$ = function (address, size) {
    return sliceWithSize_0(openSync_0(this), address, size);
  };
  Memory.prototype.readStringz_za3lpa$ = function (offset) {
    return readStringz(sliceWithStart(openSync_0(this), Kotlin.Long.fromInt(offset)));
  };
  Memory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Memory',
    interfaces: []
  };
  function DummyMemory() {
    Memory.call(this, true);
  }
  DummyMemory.prototype.sb_vux9f0$ = function (address, value) {
  };
  DummyMemory.prototype.sh_vux9f0$ = function (address, value) {
  };
  DummyMemory.prototype.sw_vux9f0$ = function (address, value) {
  };
  DummyMemory.prototype.lb_za3lpa$ = function (address) {
    return 0;
  };
  DummyMemory.prototype.lh_za3lpa$ = function (address) {
    return 0;
  };
  DummyMemory.prototype.lw_za3lpa$ = function (address) {
    return 0;
  };
  DummyMemory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyMemory',
    interfaces: [Memory]
  };
  function trace($receiver, traceWrites, traceReads) {
    if (traceWrites === void 0)
      traceWrites = true;
    if (traceReads === void 0)
      traceReads = false;
    return new TraceMemory($receiver, traceWrites, traceReads);
  }
  function TraceMemory(parent, traceWrites, traceReads) {
    if (parent === void 0)
      parent = Memory$Companion_getInstance().invoke();
    if (traceWrites === void 0)
      traceWrites = true;
    if (traceReads === void 0)
      traceReads = false;
    Memory.call(this, true);
    this.parent = parent;
    this.traceWrites = traceWrites;
    this.traceReads = traceReads;
  }
  TraceMemory.prototype.normalized_za3lpa$ = function (address) {
    return address & MASK;
  };
  TraceMemory.prototype.sb_vux9f0$ = function (address, value) {
    if (this.traceWrites)
      println(format('sb(0x%08X) = %d', [this.normalized_za3lpa$(address), value]));
    this.parent.sb_vux9f0$(address, value);
  };
  TraceMemory.prototype.sh_vux9f0$ = function (address, value) {
    if (this.traceWrites)
      println(format('sh(0x%08X) = %d', [this.normalized_za3lpa$(address), value]));
    this.parent.sh_vux9f0$(address, value);
  };
  TraceMemory.prototype.sw_vux9f0$ = function (address, value) {
    if (this.traceWrites)
      println(format('sw(0x%08X) = %d', [this.normalized_za3lpa$(address), value]));
    this.parent.sw_vux9f0$(address, value);
  };
  TraceMemory.prototype.lb_za3lpa$ = function (address) {
    if (this.traceReads)
      println(format('lb(0x%08X)', [this.normalized_za3lpa$(address)]));
    var res = this.parent.lb_za3lpa$(address);
    if (this.traceReads)
      println(format('-> %d', [res]));
    return res;
  };
  TraceMemory.prototype.lh_za3lpa$ = function (address) {
    if (this.traceReads)
      println(format('lh(0x%08X)', [this.normalized_za3lpa$(address)]));
    var res = this.parent.lh_za3lpa$(address);
    if (this.traceReads)
      println(format('-> %d', [res]));
    return res;
  };
  TraceMemory.prototype.lw_za3lpa$ = function (address) {
    if (this.traceReads)
      println(format('lw(0x%08X)', [this.normalized_za3lpa$(address)]));
    var res = this.parent.lw_za3lpa$(address);
    if (this.traceReads)
      println(format('-> %d', [res]));
    return res;
  };
  TraceMemory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraceMemory',
    interfaces: [Memory]
  };
  function openSync$ObjectLiteral(closure$mem) {
    this.closure$mem = closure$mem;
    SyncStreamBase.call(this);
  }
  Object.defineProperty(openSync$ObjectLiteral.prototype, 'length', {
    get: function () {
      return new Kotlin.Long(-1, 0);
    },
    set: function (value) {
      error.invalidOp;
    }
  });
  openSync$ObjectLiteral.prototype.close = function () {
  };
  openSync$ObjectLiteral.prototype.read_4m9kcn$ = function (position, buffer, offset, len) {
    this.closure$mem.read_3fge6q$(position.toInt(), buffer, offset, len);
    return len;
  };
  openSync$ObjectLiteral.prototype.write_4m9kcn$ = function (position, buffer, offset, len) {
    this.closure$mem.write_3fge6q$(position.toInt(), buffer, offset, len);
  };
  openSync$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SyncStreamBase]
  };
  function openSync_0($receiver) {
    var mem = $receiver;
    return new SyncStream(new openSync$ObjectLiteral(mem));
  }
  function FastMemory() {
    Memory.call(this, true);
    this.buffer_0 = KorioNative$FastMemory.Companion.alloc_za3lpa$(167772160);
  }
  FastMemory.prototype.index_za3lpa$ = function (address) {
    return address & MASK;
  };
  FastMemory.prototype.sb_vux9f0$ = function (address, value) {
    this.buffer_0.set_vux9f0$(this.index_za3lpa$(address), value);
  };
  FastMemory.prototype.sh_vux9f0$ = function (address, value) {
    this.buffer_0.setAlignedInt16_2bqt6h$(this.index_za3lpa$(address) >>> 1, toShort(value));
  };
  FastMemory.prototype.sw_vux9f0$ = function (address, value) {
    this.buffer_0.setAlignedInt32_vux9f0$(this.index_za3lpa$(address) >>> 2, value);
  };
  FastMemory.prototype.lb_za3lpa$ = function (address) {
    return this.buffer_0.get_za3lpa$(this.index_za3lpa$(address));
  };
  FastMemory.prototype.lh_za3lpa$ = function (address) {
    return this.buffer_0.getAlignedInt16_za3lpa$(this.index_za3lpa$(address) >>> 1);
  };
  FastMemory.prototype.lw_za3lpa$ = function (address) {
    return this.buffer_0.getAlignedInt32_za3lpa$(this.index_za3lpa$(address) >>> 2);
  };
  FastMemory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FastMemory',
    interfaces: [Memory]
  };
  function SmallMemory() {
    Memory.call(this, true);
    this.buffer_0 = KorioNative$FastMemory.Companion.alloc_za3lpa$(33554432 + 2097152 + 65536 | 0);
  }
  SmallMemory.prototype.index_za3lpa$ = function (address) {
    if (address >= 134217728)
      return address - 134217728 | 0;
    else if (address >= 67108864)
      return address - 67108864 + 33554432 | 0;
    else
      return address + 67108864 + 33554432 | 0;
  };
  SmallMemory.prototype.sb_vux9f0$ = function (address, value) {
    this.buffer_0.set_vux9f0$(this.index_za3lpa$(address), value);
  };
  SmallMemory.prototype.sh_vux9f0$ = function (address, value) {
    this.buffer_0.setAlignedInt16_2bqt6h$(this.index_za3lpa$(address) >>> 1, toShort(value));
  };
  SmallMemory.prototype.sw_vux9f0$ = function (address, value) {
    this.buffer_0.setAlignedInt32_vux9f0$(this.index_za3lpa$(address) >>> 2, value);
  };
  SmallMemory.prototype.lb_za3lpa$ = function (address) {
    return this.buffer_0.get_za3lpa$(this.index_za3lpa$(address));
  };
  SmallMemory.prototype.lh_za3lpa$ = function (address) {
    return this.buffer_0.getAlignedInt16_za3lpa$(this.index_za3lpa$(address) >>> 1);
  };
  SmallMemory.prototype.lw_za3lpa$ = function (address) {
    return this.buffer_0.getAlignedInt32_za3lpa$(this.index_za3lpa$(address) >>> 2);
  };
  SmallMemory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SmallMemory',
    interfaces: [Memory]
  };
  function Ptr() {
  }
  Ptr.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Ptr',
    interfaces: []
  };
  function MemPtr(mem, addr) {
    this.mem = mem;
    this.addr_xq0922$_0 = addr;
  }
  Object.defineProperty(MemPtr.prototype, 'addr', {
    get: function () {
      return this.addr_xq0922$_0;
    }
  });
  MemPtr.prototype.sb_vux9f0$ = function (offset, value) {
    this.mem.sb_vux9f0$(this.addr + offset | 0, value);
  };
  MemPtr.prototype.sh_vux9f0$ = function (offset, value) {
    this.mem.sh_vux9f0$(this.addr + offset | 0, value);
  };
  MemPtr.prototype.sw_vux9f0$ = function (offset, value) {
    this.mem.sw_vux9f0$(this.addr + offset | 0, value);
  };
  MemPtr.prototype.lb_za3lpa$ = function (offset) {
    return this.mem.lb_za3lpa$(this.addr + offset | 0);
  };
  MemPtr.prototype.lh_za3lpa$ = function (offset) {
    return this.mem.lh_za3lpa$(this.addr + offset | 0);
  };
  MemPtr.prototype.lw_za3lpa$ = function (offset) {
    return this.mem.lw_za3lpa$(this.addr + offset | 0);
  };
  MemPtr.prototype.toString = function () {
    return format('Ptr(0x%08X)', [this.addr]);
  };
  MemPtr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemPtr',
    interfaces: [Ptr]
  };
  MemPtr.prototype.component1 = function () {
    return this.mem;
  };
  MemPtr.prototype.component2 = function () {
    return this.addr;
  };
  MemPtr.prototype.copy_ktor8l$ = function (mem, addr) {
    return new MemPtr(mem === void 0 ? this.mem : mem, addr === void 0 ? this.addr : addr);
  };
  MemPtr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mem) | 0;
    result = result * 31 + Kotlin.hashCode(this.addr) | 0;
    return result;
  };
  MemPtr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.mem, other.mem) && Kotlin.equals(this.addr, other.addr)))));
  };
  function CurrentVfs$lambda() {
    return LocalVfs(KPspEmuNative_getInstance().getCurrentDirectory());
  }
  var CurrentVfs;
  function get_CurrentVfs() {
    new PropertyMetadata('CurrentVfs');
    return CurrentVfs.value;
  }
  function NumericEnum() {
  }
  NumericEnum.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NumericEnum',
    interfaces: []
  };
  function Flags() {
  }
  Flags.prototype.hasFlag_fzutc1$ = function (item) {
    return (this.id & item.id) === item.id;
  };
  Flags.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Flags',
    interfaces: [NumericEnum]
  };
  function splice($receiver, removeOffset, removeCount, itemsToAdd) {
    for (var n = 0; n < removeCount; n++)
      $receiver.removeAt_za3lpa$(removeOffset);
    for (var n_0 = 0; n_0 < itemsToAdd.length; n_0++) {
      $receiver.add_wxm5ur$(removeOffset + n_0 | 0, itemsToAdd[n_0]);
    }
  }
  function reduceAcumulate($receiver, init, reductor) {
    var tmp$;
    var acc = init;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      acc = reductor(acc, item);
    }
    return acc;
  }
  function UnsignedInt(value) {
    this.value = value;
  }
  UnsignedInt.prototype.plus_za3lpa$ = function (that) {
    return new UnsignedInt(this.value + that | 0);
  };
  UnsignedInt.prototype.plus_hiuml5$ = function (that) {
    return new UnsignedInt(this.value + that.value | 0);
  };
  UnsignedInt.prototype.times_za3lpa$ = function (that) {
    return new UnsignedInt(this.value + that | 0);
  };
  UnsignedInt.prototype.times_hiuml5$ = function (that) {
    return new UnsignedInt(this.value + that.value | 0);
  };
  UnsignedInt.prototype.toString = function () {
    return toStringUnsigned(this.value, 10);
  };
  UnsignedInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnsignedInt',
    interfaces: []
  };
  UnsignedInt.prototype.component1 = function () {
    return this.value;
  };
  UnsignedInt.prototype.copy_za3lpa$ = function (value) {
    return new UnsignedInt(value === void 0 ? this.value : value);
  };
  UnsignedInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  UnsignedInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function ult($receiver, that) {
    return util.IntEx.compareUnsigned_vux9f0$($receiver, that) < 0;
  }
  function ule($receiver, that) {
    return util.IntEx.compareUnsigned_vux9f0$($receiver, that) <= 0;
  }
  function ugt($receiver, that) {
    return util.IntEx.compareUnsigned_vux9f0$($receiver, that) > 0;
  }
  function uge($receiver, that) {
    return util.IntEx.compareUnsigned_vux9f0$($receiver, that) >= 0;
  }
  function KPspEmuNative() {
    KPspEmuNative_instance = this;
  }
  KPspEmuNative.prototype.getCurrentDirectory = function () {
    return '.';
  };
  KPspEmuNative.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KPspEmuNative',
    interfaces: []
  };
  var KPspEmuNative_instance = null;
  function KPspEmuNative_getInstance() {
    if (KPspEmuNative_instance === null) {
      new KPspEmuNative();
    }
    return KPspEmuNative_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kpspemu = package$soywiz.kpspemu || (package$soywiz.kpspemu = {});
  package$kpspemu.PspThread = PspThread;
  package$kpspemu.Emulator = Emulator;
  package$kpspemu.main_kand9s$ = main;
  Object.defineProperty(package$kpspemu, 'Main', {
    get: Main_getInstance
  });
  Object.defineProperty(package$kpspemu, 'KpspemuModule', {
    get: KpspemuModule_getInstance
  });
  package$kpspemu.KpspemuMainScene = KpspemuMainScene;
  var package$cpu = package$kpspemu.cpu || (package$kpspemu.cpu = {});
  package$cpu.get_K0_he8x89$ = get_K0;
  package$cpu.set_K0_shbxjr$ = set_K0;
  package$cpu.get_K1_he8x89$ = get_K1;
  package$cpu.set_K1_shbxjr$ = set_K1;
  package$cpu.get_GP_he8x89$ = get_GP;
  package$cpu.set_GP_shbxjr$ = set_GP;
  package$cpu.get_SP_he8x89$ = get_SP;
  package$cpu.set_SP_shbxjr$ = set_SP;
  package$cpu.get_FP_he8x89$ = get_FP;
  package$cpu.set_FP_shbxjr$ = set_FP;
  package$cpu.get_RA_he8x89$ = get_RA;
  package$cpu.set_RA_shbxjr$ = set_RA;
  CpuState.Gpr = CpuState$Gpr;
  package$cpu.CpuState = CpuState;
  $$importsForInline$$.kpspemu = _;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$cpu.InstructionDecoder = InstructionDecoder;
  package$cpu.InstructionDispatcher = InstructionDispatcher;
  package$cpu.dispatch_jlbamt$ = dispatch;
  package$cpu.InstructionEvaluator = InstructionEvaluator;
  Object.defineProperty(package$cpu, 'InstructionOpcodeDecoder', {
    get: InstructionOpcodeDecoder_getInstance
  });
  Object.defineProperty(package$cpu, 'Instructions', {
    get: Instructions_getInstance
  });
  Object.defineProperty(package$cpu, 'ADDR_TYPE_NONE', {
    get: function () {
      return ADDR_TYPE_NONE;
    }
  });
  Object.defineProperty(package$cpu, 'ADDR_TYPE_REG', {
    get: function () {
      return ADDR_TYPE_REG;
    }
  });
  Object.defineProperty(package$cpu, 'ADDR_TYPE_16', {
    get: function () {
      return ADDR_TYPE_16;
    }
  });
  Object.defineProperty(package$cpu, 'ADDR_TYPE_26', {
    get: function () {
      return ADDR_TYPE_26;
    }
  });
  Object.defineProperty(package$cpu, 'INSTR_TYPE_PSP', {
    get: function () {
      return INSTR_TYPE_PSP;
    }
  });
  Object.defineProperty(package$cpu, 'INSTR_TYPE_SYSCALL', {
    get: function () {
      return INSTR_TYPE_SYSCALL;
    }
  });
  Object.defineProperty(package$cpu, 'INSTR_TYPE_B', {
    get: function () {
      return INSTR_TYPE_B;
    }
  });
  Object.defineProperty(package$cpu, 'INSTR_TYPE_LIKELY', {
    get: function () {
      return INSTR_TYPE_LIKELY;
    }
  });
  Object.defineProperty(package$cpu, 'INSTR_TYPE_JAL', {
    get: function () {
      return INSTR_TYPE_JAL;
    }
  });
  Object.defineProperty(package$cpu, 'INSTR_TYPE_JUMP', {
    get: function () {
      return INSTR_TYPE_JUMP;
    }
  });
  Object.defineProperty(package$cpu, 'INSTR_TYPE_BREAK', {
    get: function () {
      return INSTR_TYPE_BREAK;
    }
  });
  package$cpu.ValueMask = ValueMask;
  package$cpu.InstructionType = InstructionType;
  package$cpu.kescape_pdl1vz$ = kescape;
  package$cpu.Syscalls = Syscalls;
  package$cpu.TraceSyscallHandler = TraceSyscallHandler;
  var package$dis = package$cpu.dis || (package$cpu.dis = {});
  Object.defineProperty(package$dis, 'Disassembler', {
    get: Disassembler_getInstance
  });
  package$dis.disasm_w2yn32$ = disasm;
  package$dis.disasmMacro_w2yn32$ = disasmMacro;
  var package$interpreter = package$cpu.interpreter || (package$cpu.interpreter = {});
  package$interpreter.CpuInterpreter = CpuInterpreter;
  Object.defineProperty(package$interpreter, 'InstructionInterpreter', {
    get: InstructionInterpreter_getInstance
  });
  var package$display = package$kpspemu.display || (package$kpspemu.display = {});
  package$display.PspDisplay = PspDisplay;
  Object.defineProperty(Elf, 'Companion', {
    get: Elf$Companion_getInstance
  });
  Object.defineProperty(Elf$Header, 'Companion', {
    get: Elf$Header$Companion_getInstance
  });
  Elf.Header = Elf$Header;
  var package$format = package$kpspemu.format || (package$kpspemu.format = {});
  var package$elf = package$format.elf || (package$format.elf = {});
  package$elf.Elf = Elf;
  Object.defineProperty(ElfProgramHeaderType, 'Companion', {
    get: ElfProgramHeaderType$Companion_getInstance
  });
  package$elf.ElfProgramHeaderType = ElfProgramHeaderType;
  Object.defineProperty(ElfSectionHeaderType, 'Companion', {
    get: ElfSectionHeaderType$Companion_getInstance
  });
  package$elf.ElfSectionHeaderType = ElfSectionHeaderType;
  Object.defineProperty(ElfSectionHeaderFlags, 'Companion', {
    get: ElfSectionHeaderFlags$Companion_getInstance
  });
  package$elf.ElfSectionHeaderFlags = ElfSectionHeaderFlags;
  Object.defineProperty(ElfProgramHeaderFlags, 'Companion', {
    get: ElfProgramHeaderFlags$Companion_getInstance
  });
  package$elf.ElfProgramHeaderFlags = ElfProgramHeaderFlags;
  Object.defineProperty(ElfType, 'Executable', {
    get: ElfType$Executable_getInstance
  });
  Object.defineProperty(ElfType, 'Prx', {
    get: ElfType$Prx_getInstance
  });
  Object.defineProperty(ElfType, 'Companion', {
    get: ElfType$Companion_getInstance
  });
  package$elf.ElfType = ElfType;
  Object.defineProperty(ElfMachine, 'ALLEGREX', {
    get: ElfMachine$ALLEGREX_getInstance
  });
  Object.defineProperty(ElfMachine, 'Companion', {
    get: ElfMachine$Companion_getInstance
  });
  package$elf.ElfMachine = ElfMachine;
  Object.defineProperty(ElfPspModuleFlags, 'User', {
    get: ElfPspModuleFlags$User_getInstance
  });
  Object.defineProperty(ElfPspModuleFlags, 'Kernel', {
    get: ElfPspModuleFlags$Kernel_getInstance
  });
  Object.defineProperty(ElfPspModuleFlags, 'Companion', {
    get: ElfPspModuleFlags$Companion_getInstance
  });
  package$elf.ElfPspModuleFlags = ElfPspModuleFlags;
  Object.defineProperty(ElfPspLibFlags, 'DirectJump', {
    get: ElfPspLibFlags$DirectJump_getInstance
  });
  Object.defineProperty(ElfPspLibFlags, 'Syscall', {
    get: ElfPspLibFlags$Syscall_getInstance
  });
  Object.defineProperty(ElfPspLibFlags, 'SysLib', {
    get: ElfPspLibFlags$SysLib_getInstance
  });
  Object.defineProperty(ElfPspLibFlags, 'Companion', {
    get: ElfPspLibFlags$Companion_getInstance
  });
  package$elf.ElfPspLibFlags = ElfPspLibFlags;
  Object.defineProperty(ElfPspModuleNids, 'MODULE_INFO', {
    get: ElfPspModuleNids$MODULE_INFO_getInstance
  });
  Object.defineProperty(ElfPspModuleNids, 'MODULE_BOOTSTART', {
    get: ElfPspModuleNids$MODULE_BOOTSTART_getInstance
  });
  Object.defineProperty(ElfPspModuleNids, 'MODULE_REBOOT_BEFORE', {
    get: ElfPspModuleNids$MODULE_REBOOT_BEFORE_getInstance
  });
  Object.defineProperty(ElfPspModuleNids, 'MODULE_START', {
    get: ElfPspModuleNids$MODULE_START_getInstance
  });
  Object.defineProperty(ElfPspModuleNids, 'MODULE_START_THREAD_PARAMETER', {
    get: ElfPspModuleNids$MODULE_START_THREAD_PARAMETER_getInstance
  });
  Object.defineProperty(ElfPspModuleNids, 'MODULE_STOP', {
    get: ElfPspModuleNids$MODULE_STOP_getInstance
  });
  Object.defineProperty(ElfPspModuleNids, 'MODULE_STOP_THREAD_PARAMETER', {
    get: ElfPspModuleNids$MODULE_STOP_THREAD_PARAMETER_getInstance
  });
  Object.defineProperty(ElfPspModuleNids, 'Companion', {
    get: ElfPspModuleNids$Companion_getInstance
  });
  package$elf.ElfPspModuleNids = ElfPspModuleNids;
  Object.defineProperty(ElfRelocType, 'None', {
    get: ElfRelocType$None_getInstance
  });
  Object.defineProperty(ElfRelocType, 'Mips16', {
    get: ElfRelocType$Mips16_getInstance
  });
  Object.defineProperty(ElfRelocType, 'Mips32', {
    get: ElfRelocType$Mips32_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsRel32', {
    get: ElfRelocType$MipsRel32_getInstance
  });
  Object.defineProperty(ElfRelocType, 'Mips26', {
    get: ElfRelocType$Mips26_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsHi16', {
    get: ElfRelocType$MipsHi16_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsLo16', {
    get: ElfRelocType$MipsLo16_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsGpRel16', {
    get: ElfRelocType$MipsGpRel16_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsLiteral', {
    get: ElfRelocType$MipsLiteral_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsGot16', {
    get: ElfRelocType$MipsGot16_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsPc16', {
    get: ElfRelocType$MipsPc16_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsCall16', {
    get: ElfRelocType$MipsCall16_getInstance
  });
  Object.defineProperty(ElfRelocType, 'MipsGpRel32', {
    get: ElfRelocType$MipsGpRel32_getInstance
  });
  Object.defineProperty(ElfRelocType, 'StopRelocation', {
    get: ElfRelocType$StopRelocation_getInstance
  });
  Object.defineProperty(ElfRelocType, 'Companion', {
    get: ElfRelocType$Companion_getInstance
  });
  package$elf.ElfRelocType = ElfRelocType;
  Object.defineProperty(ElfReloc, 'Companion', {
    get: ElfReloc$Companion_getInstance
  });
  package$elf.ElfReloc = ElfReloc;
  Object.defineProperty(ElfProgramHeader, 'Companion', {
    get: ElfProgramHeader$Companion_getInstance
  });
  package$elf.ElfProgramHeader = ElfProgramHeader;
  Object.defineProperty(ElfSectionHeader, 'Companion', {
    get: ElfSectionHeader$Companion_getInstance
  });
  package$elf.ElfSectionHeader = ElfSectionHeader;
  package$elf.ElfDwarf = ElfDwarf;
  Object.defineProperty(ElfPspModuleInfo, 'Companion', {
    get: ElfPspModuleInfo$Companion_getInstance
  });
  package$elf.ElfPspModuleInfo = ElfPspModuleInfo;
  Object.defineProperty(ElfPspModuleImport, 'Companion', {
    get: ElfPspModuleImport$Companion_getInstance
  });
  package$elf.ElfPspModuleImport = ElfPspModuleImport;
  Object.defineProperty(ElfPspModuleExport, 'Companion', {
    get: ElfPspModuleExport$Companion_getInstance
  });
  package$elf.ElfPspModuleExport = ElfPspModuleExport;
  Object.defineProperty(ElfPspModuleInfoAtributesEnum, 'Companion', {
    get: ElfPspModuleInfoAtributesEnum$Companion_getInstance
  });
  package$elf.ElfPspModuleInfoAtributesEnum = ElfPspModuleInfoAtributesEnum;
  package$elf.InstructionReader = InstructionReader;
  package$elf.loadElf_9qh7za$ = loadElf;
  package$elf.loadElfAndSetRegisters_9qh7za$ = loadElfAndSetRegisters;
  Object.defineProperty(PspElf, 'Companion', {
    get: PspElf$Companion_getInstance
  });
  PspElf.Res1 = PspElf$Res1;
  package$elf.PspElf = PspElf;
  package$elf.Bits = Bits;
  package$elf.Instruction = Instruction;
  Object.defineProperty(PixelFormat, 'RGBA_5650', {
    get: PixelFormat$RGBA_5650_getInstance
  });
  Object.defineProperty(PixelFormat, 'RGBA_5551', {
    get: PixelFormat$RGBA_5551_getInstance
  });
  Object.defineProperty(PixelFormat, 'RGBA_4444', {
    get: PixelFormat$RGBA_4444_getInstance
  });
  Object.defineProperty(PixelFormat, 'RGBA_8888', {
    get: PixelFormat$RGBA_8888_getInstance
  });
  Object.defineProperty(PixelFormat, 'PALETTE_T4', {
    get: PixelFormat$PALETTE_T4_getInstance
  });
  Object.defineProperty(PixelFormat, 'PALETTE_T8', {
    get: PixelFormat$PALETTE_T8_getInstance
  });
  Object.defineProperty(PixelFormat, 'PALETTE_T16', {
    get: PixelFormat$PALETTE_T16_getInstance
  });
  Object.defineProperty(PixelFormat, 'PALETTE_T32', {
    get: PixelFormat$PALETTE_T32_getInstance
  });
  Object.defineProperty(PixelFormat, 'COMPRESSED_DXT1', {
    get: PixelFormat$COMPRESSED_DXT1_getInstance
  });
  Object.defineProperty(PixelFormat, 'COMPRESSED_DXT3', {
    get: PixelFormat$COMPRESSED_DXT3_getInstance
  });
  Object.defineProperty(PixelFormat, 'COMPRESSED_DXT5', {
    get: PixelFormat$COMPRESSED_DXT5_getInstance
  });
  Object.defineProperty(PixelFormat, 'Companion', {
    get: PixelFormat$Companion_getInstance
  });
  var package$hle = package$kpspemu.hle || (package$kpspemu.hle = {});
  package$hle.PixelFormat = PixelFormat;
  var package$manager = package$hle.manager || (package$hle.manager = {});
  package$manager.MemoryManager = MemoryManager;
  Object.defineProperty(MemoryPartitions, 'Companion', {
    get: MemoryPartitions$Companion_getInstance
  });
  package$manager.MemoryPartitions = MemoryPartitions;
  Object.defineProperty(MemoryAnchor, 'Low', {
    get: MemoryAnchor$Low_getInstance
  });
  Object.defineProperty(MemoryAnchor, 'High', {
    get: MemoryAnchor$High_getInstance
  });
  Object.defineProperty(MemoryAnchor, 'Address', {
    get: MemoryAnchor$Address_getInstance
  });
  Object.defineProperty(MemoryAnchor, 'LowAligned', {
    get: MemoryAnchor$LowAligned_getInstance
  });
  Object.defineProperty(MemoryAnchor, 'HighAligned', {
    get: MemoryAnchor$HighAligned_getInstance
  });
  package$manager.MemoryAnchor = MemoryAnchor;
  package$manager.OutOfMemoryError = OutOfMemoryError;
  Object.defineProperty(MemoryPartition, 'Companion', {
    get: MemoryPartition$Companion_getInstance
  });
  package$manager.MemoryPartition = MemoryPartition;
  package$manager.ModuleManager = ModuleManager;
  package$manager.SyscallManager = SyscallManager;
  var package$modules = package$hle.modules || (package$hle.modules = {});
  package$modules.registerNativeModules_m3jm4f$ = registerNativeModules;
  package$modules.registerNativeModules_c03h7v$ = registerNativeModules_0;
  package$modules.RegisterReader = RegisterReader;
  package$modules.NativeFunction = NativeFunction;
  package$modules.SceModule = SceModule;
  package$modules.UtilsForUser = UtilsForUser;
  package$modules.sceCtrl = sceCtrl;
  package$modules.sceDisplay = sceDisplay;
  Object.defineProperty(Memory, 'Companion', {
    get: Memory$Companion_getInstance
  });
  Memory.MemorySegment = Memory$MemorySegment;
  var package$mem = package$kpspemu.mem || (package$kpspemu.mem = {});
  package$mem.Memory = Memory;
  package$mem.DummyMemory = DummyMemory;
  package$mem.trace_w7fru8$ = trace;
  package$mem.TraceMemory = TraceMemory;
  package$mem.openSync_qe2j2c$ = openSync_0;
  package$mem.FastMemory = FastMemory;
  package$mem.SmallMemory = SmallMemory;
  package$mem.Ptr = Ptr;
  package$mem.MemPtr = MemPtr;
  var package$native = package$kpspemu.native || (package$kpspemu.native = {});
  Object.defineProperty(package$native, 'CurrentVfs', {
    get: get_CurrentVfs
  });
  var package$util = package$kpspemu.util || (package$kpspemu.util = {});
  package$util.NumericEnum = NumericEnum;
  package$util.Flags = Flags;
  package$util.splice_b7gcku$ = splice;
  package$util.reduceAcumulate_l1hrho$ = reduceAcumulate;
  package$util.UnsignedInt = UnsignedInt;
  package$util.ult_dqglrj$ = ult;
  package$util.ule_dqglrj$ = ule;
  package$util.ugt_dqglrj$ = ugt;
  package$util.uge_dqglrj$ = uge;
  Object.defineProperty(package$native, 'KPspEmuNative', {
    get: KPspEmuNative_getInstance
  });
  ElfProgramHeaderType.prototype.hasFlag_fzutc1$ = Flags.prototype.hasFlag_fzutc1$;
  ElfSectionHeaderType.prototype.hasFlag_fzutc1$ = Flags.prototype.hasFlag_fzutc1$;
  ElfSectionHeaderFlags.prototype.hasFlag_fzutc1$ = Flags.prototype.hasFlag_fzutc1$;
  ADDR_TYPE_NONE = 0;
  ADDR_TYPE_REG = 1;
  ADDR_TYPE_16 = 2;
  ADDR_TYPE_26 = 3;
  INSTR_TYPE_PSP = 1 << 0;
  INSTR_TYPE_SYSCALL = 1 << 1;
  INSTR_TYPE_B = 1 << 2;
  INSTR_TYPE_LIKELY = 1 << 3;
  INSTR_TYPE_JAL = 1 << 4;
  INSTR_TYPE_JUMP = 1 << 5;
  INSTR_TYPE_BREAK = 1 << 6;
  MASK = 268435455;
  LWR_MASK = new Int32Array([0, (new Kotlin.Long(-16777216, 0)).toInt(), (new Kotlin.Long(-65536, 0)).toInt(), (new Kotlin.Long(-256, 0)).toInt()]);
  LWR_SHIFT = new Int32Array([0, 8, 16, 24]);
  LWL_MASK = new Int32Array([16777215, 65535, 255, 0]);
  LWL_SHIFT = new Int32Array([24, 16, 8, 0]);
  SWL_MASK = new Int32Array([(new Kotlin.Long(-256, 0)).toInt(), (new Kotlin.Long(-65536, 0)).toInt(), (new Kotlin.Long(-16777216, 0)).toInt(), 0]);
  SWL_SHIFT = new Int32Array([24, 16, 8, 0]);
  SWR_MASK = new Int32Array([0, 255, 65535, 16777215]);
  SWR_SHIFT = new Int32Array([0, 8, 16, 24]);
  CurrentVfs = lazy(CurrentVfs$lambda);
  main([]);
  Kotlin.defineModule('kpspemu', _);
  return _;
}));

//# sourceMappingURL=kpspemu.js.map
