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
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SizeInt = $module$korma_js.com.soywiz.korma.geom.SizeInt;
  var Module = $module$korge_js.com.soywiz.korge.scene.Module;
  var crypto = $module$korio_js.com.soywiz.korio.crypto;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var sliceWithSize = $module$korio_js.com.soywiz.korio.stream.sliceWithSize_1r8368$;
  var readAll = $module$korio_js.com.soywiz.korio.stream.readAll_ucmi9i$;
  var throwNPE = Kotlin.throwNPE;
  var Unit = Kotlin.kotlin.Unit;
  var color = $module$korim_js.com.soywiz.korim.color;
  var image = $module$korge_js.com.soywiz.korge.view.image_knk7mb$;
  var Scene = $module$korge_js.com.soywiz.korge.scene.Scene;
  var openSync = $module$korio_js.com.soywiz.korio.stream.openSync_m1iwyb$;
  var Bitmap32 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap32;
  var texture = $module$korge_js.com.soywiz.korge.view.texture_q2u7nr$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var format = $module$korio_js.com.soywiz.korio.lang.format_e33kwl$;
  var Exception = Kotlin.kotlin.Exception;
  var toString = Kotlin.toString;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var equals = Kotlin.equals;
  var replace = Kotlin.kotlin.text.replace_r2fvfm$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var getCallableRef = Kotlin.getCallableRef;
  var lmapOf = $module$korio_js.com.soywiz.korio.ds.lmapOf_qfcya0$;
  var udiv = $module$korio_js.com.soywiz.korio.util.udiv_dqglrj$;
  var urem = $module$korio_js.com.soywiz.korio.util.urem_dqglrj$;
  var util = $module$korio_js.com.soywiz.korio.util;
  var throwUPAE = Kotlin.throwUPAE;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var readStringz = $module$korio_js.com.soywiz.korio.stream.readStringz_4zsegu$;
  var readStringz_0 = $module$korio_js.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var readU8 = $module$korio_js.com.soywiz.korio.stream.readU8_p2awyq$;
  var readUByteArray = $module$korio_js.com.soywiz.korio.stream.readUByteArray_xpzb7k$;
  var readU16_le = $module$korio_js.com.soywiz.korio.stream.readU16_le_p2awyq$;
  var readS32_le = $module$korio_js.com.soywiz.korio.stream.readS32_le_p2awyq$;
  var readS16_le = $module$korio_js.com.soywiz.korio.stream.readS16_le_p2awyq$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Annotation = Kotlin.kotlin.Annotation;
  var MtRand_init = $module$korma_js.com.soywiz.korma.random.MtRand_init_za3lpa$;
  var toByte = Kotlin.toByte;
  var error = $module$korio_js.com.soywiz.korio.error;
  var SyncStreamBase = $module$korio_js.com.soywiz.korio.stream.SyncStreamBase;
  var SyncStream = $module$korio_js.com.soywiz.korio.stream.SyncStream;
  var toShort = Kotlin.toShort;
  var KorioNative$FastMemory = $module$korio_js.com.soywiz.korio.KorioNative.FastMemory;
  KpspemuModule.prototype = Object.create(Module.prototype);
  KpspemuModule.prototype.constructor = KpspemuModule;
  KpspemuMainScene.prototype = Object.create(Scene.prototype);
  KpspemuMainScene.prototype.constructor = KpspemuMainScene;
  InstructionEvaluator.prototype = Object.create(InstructionDecoder.prototype);
  InstructionEvaluator.prototype.constructor = InstructionEvaluator;
  InstructionOpcodeDecoder$evaluator$ObjectLiteral.prototype = Object.create(InstructionEvaluator.prototype);
  InstructionOpcodeDecoder$evaluator$ObjectLiteral.prototype.constructor = InstructionOpcodeDecoder$evaluator$ObjectLiteral;
  Disassembler.prototype = Object.create(InstructionDecoder.prototype);
  Disassembler.prototype.constructor = Disassembler;
  InstructionInterpreter.prototype = Object.create(InstructionEvaluator.prototype);
  InstructionInterpreter.prototype.constructor = InstructionInterpreter;
  ElfSectionHeaderType$Companion.prototype = Object.create(BaseEnum.prototype);
  ElfSectionHeaderType$Companion.prototype.constructor = ElfSectionHeaderType$Companion;
  ElfSectionHeaderType.prototype = Object.create(Enum.prototype);
  ElfSectionHeaderType.prototype.constructor = ElfSectionHeaderType;
  ElfSectionHeaderFlags$Companion.prototype = Object.create(BaseEnum.prototype);
  ElfSectionHeaderFlags$Companion.prototype.constructor = ElfSectionHeaderFlags$Companion;
  ElfSectionHeaderFlags.prototype = Object.create(Enum.prototype);
  ElfSectionHeaderFlags.prototype.constructor = ElfSectionHeaderFlags;
  ElfType$Companion.prototype = Object.create(BaseEnum.prototype);
  ElfType$Companion.prototype.constructor = ElfType$Companion;
  ElfType.prototype = Object.create(Enum.prototype);
  ElfType.prototype.constructor = ElfType;
  ElfMachine$Companion.prototype = Object.create(BaseEnum.prototype);
  ElfMachine$Companion.prototype.constructor = ElfMachine$Companion;
  ElfMachine.prototype = Object.create(Enum.prototype);
  ElfMachine.prototype.constructor = ElfMachine;
  ElfPspModuleFlags$Companion.prototype = Object.create(BaseEnum.prototype);
  ElfPspModuleFlags$Companion.prototype.constructor = ElfPspModuleFlags$Companion;
  ElfPspModuleFlags.prototype = Object.create(Enum.prototype);
  ElfPspModuleFlags.prototype.constructor = ElfPspModuleFlags;
  ElfPspLibFlags$Companion.prototype = Object.create(BaseEnum.prototype);
  ElfPspLibFlags$Companion.prototype.constructor = ElfPspLibFlags$Companion;
  ElfPspLibFlags.prototype = Object.create(Enum.prototype);
  ElfPspLibFlags.prototype.constructor = ElfPspLibFlags;
  ElfPspModuleNids$Companion.prototype = Object.create(BaseEnum.prototype);
  ElfPspModuleNids$Companion.prototype.constructor = ElfPspModuleNids$Companion;
  ElfPspModuleNids.prototype = Object.create(Enum.prototype);
  ElfPspModuleNids.prototype.constructor = ElfPspModuleNids;
  ElfRelocType$Companion.prototype = Object.create(BaseEnum.prototype);
  ElfRelocType$Companion.prototype.constructor = ElfRelocType$Companion;
  ElfRelocType.prototype = Object.create(Enum.prototype);
  ElfRelocType.prototype.constructor = ElfRelocType;
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
      syscalls = new RegistrableSyscallHandler();
    if (mem === void 0)
      mem = Memory$Companion_getInstance().invoke();
    if (display === void 0)
      display = new PspDisplay(mem);
    this.syscalls = syscalls;
    this.mem = mem;
    this.display = display;
    this.mainThread = new PspThread(this.mem, this.syscalls);
    this.cpu = this.mainThread.cpu;
    this.interpreter = new CpuInterpreter(this.cpu);
  }
  Emulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Emulator',
    interfaces: []
  };
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
  function MinifireElf$lambda() {
    return crypto.Base64.decode_61zpoe$('f0VMRgEBAQAAAAAAAAAAAAIACAABAAAACACQCDwAAAA0AAAAATCiEDQAIAABACgA\n' + 'AwACAAAAAAAAAAAAAQAAALAAAAAAAJAIAACQCNgBAADYAQAABwAAABAAAAABAAAA\n' + 'AQAAAAIAAAAAAJAIsAAAANgBAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAMAAAAAAAAA\n' + 'AAAAAIgCAAAXAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAEBVU5QAJAIEDwEAAQm\n' + 'UAAFJhQABiQCAAc8AIAIPCFIAAAAAAAAAAAAAAAAAAAAAAAATBsIACEgQAAhKAAA\n' + 'ITAAAMwbCAAhIAAATBwIACD2vSchIKADzC8IAKAIETywCBI8AEQQPCEgAADgAQUk\n' + 'EAEGJIxOCAAhECACALYINAAAQKD//wgl/f8BBQEAQiQAtDQ2/wGTJiEgoAMMMAgA\n' + 'AQCUJisYkwL7/2AUAACCov4BFSQhIKADDDAIAFkAAyQCAGAUGwBDAA0ABwASEAAA\n' + 'EBgAAAEAYyRAGgMAIKBxACQQVQABAEIkIKCCAgAAlaJZAAgkALIpNgCySzb+ASol\n' + 'AAIkkQECJZEhIIUAAgIlkSEghQABACWRISCFAIIgBAABAIBc//+EJAEAZKEBACkl\n' + 'KxAqAfL/QBQBAGsl//8IJQL8ayXt/wAdAvwpJRAACDwmgAgCIRAAAiFAAAAhUEAC\n' + 'ISAAAgACSyUAAEKRAACCrAAIgqwAEIKsAQBKJSsYSwH5/2AUBACEJAEACCVaAAIt\n' + '9P9AFAAQhCTQCaQnAQAFJAxUCADUCaiPAQAAVcw6CADMUQgAISAAAgACBSQDAAYk\n' + 'AQAHJMxPCAAhQCACIYhAAiQAJAohkAABAC5yb2RhdGEuc2NlTW9kdWxlSW5mbwA=');
  }
  var MinifireElf;
  function get_MinifireElf() {
    new PropertyMetadata('MinifireElf');
    return MinifireElf.value;
  }
  function KpspemuMainScene() {
    Scene.call(this);
    this.elf = Elf$Companion_getInstance().read_39qel5$(openSync(get_MinifireElf()));
    this.emu = new Emulator(void 0, Memory$Companion_getInstance().invoke());
    this.bmp = new Bitmap32(512, 272);
    this.temp = new Int8Array((512 * 272 | 0) * 4 | 0);
    this.tex_t00rkw$_0 = lazy(KpspemuMainScene$tex$lambda(this));
  }
  Object.defineProperty(KpspemuMainScene.prototype, 'tex', {
    get: function () {
      var $receiver = this.tex_t00rkw$_0;
      new PropertyMetadata('tex');
      return $receiver.value;
    }
  });
  function KpspemuMainScene$sceneInit$lambda(this$KpspemuMainScene) {
    return function (it) {
      this$KpspemuMainScene.emu.interpreter.steps_za3lpa$(1000000);
      this$KpspemuMainScene.emu.mem.read_3fge6q$(this$KpspemuMainScene.emu.display.address, this$KpspemuMainScene.temp, 0, this$KpspemuMainScene.temp.length);
      color.RGBA.decodeToBitmap32_131o2$(this$KpspemuMainScene.bmp, this$KpspemuMainScene.temp);
      var bmpData = this$KpspemuMainScene.bmp.data;
      for (var n = 0; n < bmpData.length; n++)
        bmpData[n] = bmpData[n] & 16777215 | (new Kotlin.Long(-16777216, 0)).toInt();
      this$KpspemuMainScene.tex.update_hi0ws4$(this$KpspemuMainScene.bmp);
      return Unit;
    };
  }
  KpspemuMainScene.prototype.sceneInit_f3yb8w$ = function (sceneView, continuation) {
    var $receiver = this.emu;
    var tmp$;
    var ph = this.elf.programHeaders.get_za3lpa$(0);
    var programBytes = readAll(sliceWithSize(this.elf.stream, Kotlin.Long.fromInt(ph.offset), Kotlin.Long.fromInt(ph.fileSize)));
    $receiver.mem.write_3fge6q$(ph.virtualAddress, programBytes);
    var moduleInfo = ElfPspModuleInfo$Companion_getInstance().invoke_39qel5$(((tmp$ = this.elf.sectionHeadersByName.get_11rb$('.rodata.sceModuleInfo')) != null ? tmp$ : throwNPE()).stream.clone());
    $receiver.interpreter.trace = false;
    (new UtilsForUser()).registerPspModule_egl5qq$(this.emu);
    (new sceCtrl()).registerPspModule_egl5qq$(this.emu);
    (new sceDisplay()).registerPspModule_egl5qq$(this.emu);
    $receiver.cpu.GPR.set_vux9f0$(29, 167772160);
    $receiver.cpu.setPC_za3lpa$(143654920);
    sceneView.addUpdatable_b4k9x1$(KpspemuMainScene$sceneInit$lambda(this));
    sceneView.plusAssign_l5rad2$(image(this.views, this.tex));
  };
  function KpspemuMainScene$tex$lambda(this$KpspemuMainScene) {
    return function () {
      return texture(this$KpspemuMainScene.views, this$KpspemuMainScene.bmp);
    };
  }
  KpspemuMainScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KpspemuMainScene',
    interfaces: [Scene]
  };
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
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().add);
  };
  InstructionEvaluator.prototype.addu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().addu);
  };
  InstructionEvaluator.prototype.addi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().addi);
  };
  InstructionEvaluator.prototype.addiu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().addiu);
  };
  InstructionEvaluator.prototype.sub_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sub);
  };
  InstructionEvaluator.prototype.subu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().subu);
  };
  InstructionEvaluator.prototype.and_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().and);
  };
  InstructionEvaluator.prototype.andi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().andi);
  };
  InstructionEvaluator.prototype.nor_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().nor);
  };
  InstructionEvaluator.prototype.or_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().or);
  };
  InstructionEvaluator.prototype.ori_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().ori);
  };
  InstructionEvaluator.prototype.xor_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().xor);
  };
  InstructionEvaluator.prototype.xori_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().xori);
  };
  InstructionEvaluator.prototype.sll_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sll);
  };
  InstructionEvaluator.prototype.sllv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sllv);
  };
  InstructionEvaluator.prototype.sra_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sra);
  };
  InstructionEvaluator.prototype.srav_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().srav);
  };
  InstructionEvaluator.prototype.srl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().srl);
  };
  InstructionEvaluator.prototype.srlv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().srlv);
  };
  InstructionEvaluator.prototype.rotr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().rotr);
  };
  InstructionEvaluator.prototype.rotrv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().rotrv);
  };
  InstructionEvaluator.prototype.slt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().slt);
  };
  InstructionEvaluator.prototype.slti_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().slti);
  };
  InstructionEvaluator.prototype.sltu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sltu);
  };
  InstructionEvaluator.prototype.sltiu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sltiu);
  };
  InstructionEvaluator.prototype.lui_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lui);
  };
  InstructionEvaluator.prototype.seb_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().seb);
  };
  InstructionEvaluator.prototype.seh_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().seh);
  };
  InstructionEvaluator.prototype.bitrev_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bitrev);
  };
  InstructionEvaluator.prototype.max_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().max);
  };
  InstructionEvaluator.prototype.min_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().min);
  };
  InstructionEvaluator.prototype.div_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().div);
  };
  InstructionEvaluator.prototype.divu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().divu);
  };
  InstructionEvaluator.prototype.mult_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mult);
  };
  InstructionEvaluator.prototype.multu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().multu);
  };
  InstructionEvaluator.prototype.madd_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().madd);
  };
  InstructionEvaluator.prototype.maddu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().maddu);
  };
  InstructionEvaluator.prototype.msub_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().msub);
  };
  InstructionEvaluator.prototype.msubu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().msubu);
  };
  InstructionEvaluator.prototype.mfhi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mfhi);
  };
  InstructionEvaluator.prototype.mflo_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mflo);
  };
  InstructionEvaluator.prototype.mthi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mthi);
  };
  InstructionEvaluator.prototype.mtlo_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mtlo);
  };
  InstructionEvaluator.prototype.movz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().movz);
  };
  InstructionEvaluator.prototype.movn_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().movn);
  };
  InstructionEvaluator.prototype.ext_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().ext);
  };
  InstructionEvaluator.prototype.ins_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().ins);
  };
  InstructionEvaluator.prototype.clz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().clz);
  };
  InstructionEvaluator.prototype.clo_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().clo);
  };
  InstructionEvaluator.prototype.wsbh_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().wsbh);
  };
  InstructionEvaluator.prototype.wsbw_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().wsbw);
  };
  InstructionEvaluator.prototype.beq_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().beq);
  };
  InstructionEvaluator.prototype.beql_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().beql);
  };
  InstructionEvaluator.prototype.bgez_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bgez);
  };
  InstructionEvaluator.prototype.bgezl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bgezl);
  };
  InstructionEvaluator.prototype.bgezal_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bgezal);
  };
  InstructionEvaluator.prototype.bgezall_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bgezall);
  };
  InstructionEvaluator.prototype.bltz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bltz);
  };
  InstructionEvaluator.prototype.bltzl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bltzl);
  };
  InstructionEvaluator.prototype.bltzal_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bltzal);
  };
  InstructionEvaluator.prototype.bltzall_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bltzall);
  };
  InstructionEvaluator.prototype.blez_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().blez);
  };
  InstructionEvaluator.prototype.blezl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().blezl);
  };
  InstructionEvaluator.prototype.bgtz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bgtz);
  };
  InstructionEvaluator.prototype.bgtzl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bgtzl);
  };
  InstructionEvaluator.prototype.bne_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bne);
  };
  InstructionEvaluator.prototype.bnel_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bnel);
  };
  InstructionEvaluator.prototype.j_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().j);
  };
  InstructionEvaluator.prototype.jr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().jr);
  };
  InstructionEvaluator.prototype.jalr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().jalr);
  };
  InstructionEvaluator.prototype.jal_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().jal);
  };
  InstructionEvaluator.prototype.bc1f_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bc1f);
  };
  InstructionEvaluator.prototype.bc1t_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bc1t);
  };
  InstructionEvaluator.prototype.bc1fl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bc1fl);
  };
  InstructionEvaluator.prototype.bc1tl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bc1tl);
  };
  InstructionEvaluator.prototype.lb_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lb);
  };
  InstructionEvaluator.prototype.lh_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lh);
  };
  InstructionEvaluator.prototype.lw_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lw);
  };
  InstructionEvaluator.prototype.lwl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lwl);
  };
  InstructionEvaluator.prototype.lwr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lwr);
  };
  InstructionEvaluator.prototype.lbu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lbu);
  };
  InstructionEvaluator.prototype.lhu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lhu);
  };
  InstructionEvaluator.prototype.sb_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sb);
  };
  InstructionEvaluator.prototype.sh_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sh);
  };
  InstructionEvaluator.prototype.sw_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sw);
  };
  InstructionEvaluator.prototype.swl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().swl);
  };
  InstructionEvaluator.prototype.swr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().swr);
  };
  InstructionEvaluator.prototype.ll_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().ll);
  };
  InstructionEvaluator.prototype.sc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sc);
  };
  InstructionEvaluator.prototype.lwc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lwc1);
  };
  InstructionEvaluator.prototype.swc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().swc1);
  };
  InstructionEvaluator.prototype.add_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().add_s);
  };
  InstructionEvaluator.prototype.sub_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sub_s);
  };
  InstructionEvaluator.prototype.mul_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mul_s);
  };
  InstructionEvaluator.prototype.div_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().div_s);
  };
  InstructionEvaluator.prototype.sqrt_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sqrt_s);
  };
  InstructionEvaluator.prototype.abs_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().abs_s);
  };
  InstructionEvaluator.prototype.mov_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mov_s);
  };
  InstructionEvaluator.prototype.neg_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().neg_s);
  };
  InstructionEvaluator.prototype.round_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().round_w_s);
  };
  InstructionEvaluator.prototype.trunc_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().trunc_w_s);
  };
  InstructionEvaluator.prototype.ceil_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().ceil_w_s);
  };
  InstructionEvaluator.prototype.floor_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().floor_w_s);
  };
  InstructionEvaluator.prototype.cvt_s_w_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().cvt_s_w);
  };
  InstructionEvaluator.prototype.cvt_w_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().cvt_w_s);
  };
  InstructionEvaluator.prototype.mfc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mfc1);
  };
  InstructionEvaluator.prototype.mtc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mtc1);
  };
  InstructionEvaluator.prototype.cfc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().cfc1);
  };
  InstructionEvaluator.prototype.ctc1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().ctc1);
  };
  InstructionEvaluator.prototype.c_f_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_f_s);
  };
  InstructionEvaluator.prototype.c_un_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_un_s);
  };
  InstructionEvaluator.prototype.c_eq_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_eq_s);
  };
  InstructionEvaluator.prototype.c_ueq_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_ueq_s);
  };
  InstructionEvaluator.prototype.c_olt_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_olt_s);
  };
  InstructionEvaluator.prototype.c_ult_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_ult_s);
  };
  InstructionEvaluator.prototype.c_ole_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_ole_s);
  };
  InstructionEvaluator.prototype.c_ule_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_ule_s);
  };
  InstructionEvaluator.prototype.c_sf_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_sf_s);
  };
  InstructionEvaluator.prototype.c_ngle_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_ngle_s);
  };
  InstructionEvaluator.prototype.c_seq_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_seq_s);
  };
  InstructionEvaluator.prototype.c_ngl_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_ngl_s);
  };
  InstructionEvaluator.prototype.c_lt_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_lt_s);
  };
  InstructionEvaluator.prototype.c_nge_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_nge_s);
  };
  InstructionEvaluator.prototype.c_le_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_le_s);
  };
  InstructionEvaluator.prototype.c_ngt_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().c_ngt_s);
  };
  InstructionEvaluator.prototype.syscall_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().syscall);
  };
  InstructionEvaluator.prototype.cache_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().cache);
  };
  InstructionEvaluator.prototype.sync_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sync);
  };
  InstructionEvaluator.prototype._break_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance()._break);
  };
  InstructionEvaluator.prototype.dbreak_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().dbreak);
  };
  InstructionEvaluator.prototype.halt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().halt);
  };
  InstructionEvaluator.prototype.dret_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().dret);
  };
  InstructionEvaluator.prototype.eret_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().eret);
  };
  InstructionEvaluator.prototype.mfic_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mfic);
  };
  InstructionEvaluator.prototype.mtic_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mtic);
  };
  InstructionEvaluator.prototype.mfdr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mfdr);
  };
  InstructionEvaluator.prototype.mtdr_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mtdr);
  };
  InstructionEvaluator.prototype.cfc0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().cfc0);
  };
  InstructionEvaluator.prototype.ctc0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().ctc0);
  };
  InstructionEvaluator.prototype.mfc0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mfc0);
  };
  InstructionEvaluator.prototype.mtc0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mtc0);
  };
  InstructionEvaluator.prototype.mfv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mfv);
  };
  InstructionEvaluator.prototype.mfvc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mfvc);
  };
  InstructionEvaluator.prototype.mtv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mtv);
  };
  InstructionEvaluator.prototype.mtvc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mtvc);
  };
  InstructionEvaluator.prototype.lv_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lv_s);
  };
  InstructionEvaluator.prototype.lv_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lv_q);
  };
  InstructionEvaluator.prototype.lvl_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lvl_q);
  };
  InstructionEvaluator.prototype.lvr_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().lvr_q);
  };
  InstructionEvaluator.prototype.sv_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sv_q);
  };
  InstructionEvaluator.prototype.vdot_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vdot);
  };
  InstructionEvaluator.prototype.vscl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vscl);
  };
  InstructionEvaluator.prototype.vsge_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsge);
  };
  InstructionEvaluator.prototype.vslt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vslt);
  };
  InstructionEvaluator.prototype.vrot_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vrot);
  };
  InstructionEvaluator.prototype.vzero_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vzero);
  };
  InstructionEvaluator.prototype.vone_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vone);
  };
  InstructionEvaluator.prototype.vmov_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmov);
  };
  InstructionEvaluator.prototype.vabs_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vabs);
  };
  InstructionEvaluator.prototype.vneg_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vneg);
  };
  InstructionEvaluator.prototype.vocp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vocp);
  };
  InstructionEvaluator.prototype.vsgn_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsgn);
  };
  InstructionEvaluator.prototype.vrcp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vrcp);
  };
  InstructionEvaluator.prototype.vrsq_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vrsq);
  };
  InstructionEvaluator.prototype.vsin_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsin);
  };
  InstructionEvaluator.prototype.vcos_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vcos);
  };
  InstructionEvaluator.prototype.vexp2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vexp2);
  };
  InstructionEvaluator.prototype.vlog2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vlog2);
  };
  InstructionEvaluator.prototype.vsqrt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsqrt);
  };
  InstructionEvaluator.prototype.vasin_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vasin);
  };
  InstructionEvaluator.prototype.vnrcp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vnrcp);
  };
  InstructionEvaluator.prototype.vnsin_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vnsin);
  };
  InstructionEvaluator.prototype.vrexp2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vrexp2);
  };
  InstructionEvaluator.prototype.vsat0_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsat0);
  };
  InstructionEvaluator.prototype.vsat1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsat1);
  };
  InstructionEvaluator.prototype.vcst_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vcst);
  };
  InstructionEvaluator.prototype.vmmul_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmmul);
  };
  InstructionEvaluator.prototype.vhdp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vhdp);
  };
  InstructionEvaluator.prototype.vcrs_t_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vcrs_t);
  };
  InstructionEvaluator.prototype.vcrsp_t_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vcrsp_t);
  };
  InstructionEvaluator.prototype.vi2c_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vi2c);
  };
  InstructionEvaluator.prototype.vi2uc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vi2uc);
  };
  InstructionEvaluator.prototype.vtfm2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vtfm2);
  };
  InstructionEvaluator.prototype.vtfm3_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vtfm3);
  };
  InstructionEvaluator.prototype.vtfm4_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vtfm4);
  };
  InstructionEvaluator.prototype.vhtfm2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vhtfm2);
  };
  InstructionEvaluator.prototype.vhtfm3_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vhtfm3);
  };
  InstructionEvaluator.prototype.vhtfm4_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vhtfm4);
  };
  InstructionEvaluator.prototype.vsrt3_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsrt3);
  };
  InstructionEvaluator.prototype.vfad_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vfad);
  };
  InstructionEvaluator.prototype.vmin_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmin);
  };
  InstructionEvaluator.prototype.vmax_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmax);
  };
  InstructionEvaluator.prototype.vadd_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vadd);
  };
  InstructionEvaluator.prototype.vsub_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsub);
  };
  InstructionEvaluator.prototype.vdiv_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vdiv);
  };
  InstructionEvaluator.prototype.vmul_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmul);
  };
  InstructionEvaluator.prototype.vidt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vidt);
  };
  InstructionEvaluator.prototype.vmidt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmidt);
  };
  InstructionEvaluator.prototype.viim_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().viim);
  };
  InstructionEvaluator.prototype.vmmov_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmmov);
  };
  InstructionEvaluator.prototype.vmzero_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmzero);
  };
  InstructionEvaluator.prototype.vmone_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmone);
  };
  InstructionEvaluator.prototype.vnop_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vnop);
  };
  InstructionEvaluator.prototype.vsync_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsync);
  };
  InstructionEvaluator.prototype.vflush_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vflush);
  };
  InstructionEvaluator.prototype.vpfxd_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vpfxd);
  };
  InstructionEvaluator.prototype.vpfxs_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vpfxs);
  };
  InstructionEvaluator.prototype.vpfxt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vpfxt);
  };
  InstructionEvaluator.prototype.vdet_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vdet);
  };
  InstructionEvaluator.prototype.vrnds_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vrnds);
  };
  InstructionEvaluator.prototype.vrndi_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vrndi);
  };
  InstructionEvaluator.prototype.vrndf1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vrndf1);
  };
  InstructionEvaluator.prototype.vrndf2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vrndf2);
  };
  InstructionEvaluator.prototype.vcmp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vcmp);
  };
  InstructionEvaluator.prototype.vcmovf_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vcmovf);
  };
  InstructionEvaluator.prototype.vcmovt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vcmovt);
  };
  InstructionEvaluator.prototype.vavg_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vavg);
  };
  InstructionEvaluator.prototype.vf2id_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vf2id);
  };
  InstructionEvaluator.prototype.vf2in_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vf2in);
  };
  InstructionEvaluator.prototype.vf2iu_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vf2iu);
  };
  InstructionEvaluator.prototype.vf2iz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vf2iz);
  };
  InstructionEvaluator.prototype.vi2f_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vi2f);
  };
  InstructionEvaluator.prototype.vscmp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vscmp);
  };
  InstructionEvaluator.prototype.vmscl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmscl);
  };
  InstructionEvaluator.prototype.vt4444_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vt4444_q);
  };
  InstructionEvaluator.prototype.vt5551_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vt5551_q);
  };
  InstructionEvaluator.prototype.vt5650_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vt5650_q);
  };
  InstructionEvaluator.prototype.vmfvc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmfvc);
  };
  InstructionEvaluator.prototype.vmtvc_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vmtvc);
  };
  InstructionEvaluator.prototype.mfvme_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mfvme);
  };
  InstructionEvaluator.prototype.mtvme_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().mtvme);
  };
  InstructionEvaluator.prototype.sv_s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().sv_s);
  };
  InstructionEvaluator.prototype.vfim_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vfim);
  };
  InstructionEvaluator.prototype.svl_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().svl_q);
  };
  InstructionEvaluator.prototype.svr_q_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().svr_q);
  };
  InstructionEvaluator.prototype.vbfy1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vbfy1);
  };
  InstructionEvaluator.prototype.vbfy2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vbfy2);
  };
  InstructionEvaluator.prototype.vf2h_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vf2h);
  };
  InstructionEvaluator.prototype.vh2f_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vh2f);
  };
  InstructionEvaluator.prototype.vi2s_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vi2s);
  };
  InstructionEvaluator.prototype.vi2us_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vi2us);
  };
  InstructionEvaluator.prototype.vlgb_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vlgb);
  };
  InstructionEvaluator.prototype.vqmul_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vqmul);
  };
  InstructionEvaluator.prototype.vs2i_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vs2i);
  };
  InstructionEvaluator.prototype.vc2i_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vc2i);
  };
  InstructionEvaluator.prototype.vuc2i_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vuc2i);
  };
  InstructionEvaluator.prototype.vsbn_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsbn);
  };
  InstructionEvaluator.prototype.vsbz_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsbz);
  };
  InstructionEvaluator.prototype.vsocp_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsocp);
  };
  InstructionEvaluator.prototype.vsrt1_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsrt1);
  };
  InstructionEvaluator.prototype.vsrt2_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsrt2);
  };
  InstructionEvaluator.prototype.vsrt4_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vsrt4);
  };
  InstructionEvaluator.prototype.vus2i_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vus2i);
  };
  InstructionEvaluator.prototype.vwbn_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().vwbn);
  };
  InstructionEvaluator.prototype.bvf_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bvf);
  };
  InstructionEvaluator.prototype.bvt_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bvt);
  };
  InstructionEvaluator.prototype.bvfl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bvfl);
  };
  InstructionEvaluator.prototype.bvtl_11rb$ = function (s) {
    this.unimplemented_1wp5la$(s, InstructionTable_getInstance().bvtl);
  };
  InstructionEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionEvaluator',
    interfaces: [InstructionDecoder]
  };
  function InstructionOpcodeDecoder() {
    InstructionOpcodeDecoder_instance = this;
    this.evaluator_0 = new InstructionOpcodeDecoder$evaluator$ObjectLiteral();
    this.dispatcher_0 = new InstructionDispatcher(this.evaluator_0);
  }
  function InstructionOpcodeDecoder$Result(result) {
    if (result === void 0)
      result = InstructionTable_getInstance().add;
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
  InstructionOpcodeDecoder.prototype.invoke_za3lpa$ = function (i) {
    var $receiver = new InstructionOpcodeDecoder$Result();
    this.dispatcher_0.dispatch_8olpll$($receiver, 0, i);
    return $receiver.result;
  };
  function InstructionOpcodeDecoder$evaluator$ObjectLiteral() {
    InstructionEvaluator.call(this);
  }
  InstructionOpcodeDecoder$evaluator$ObjectLiteral.prototype.unimplemented_1wp5la$ = function (s, i) {
    s.result = i;
  };
  InstructionOpcodeDecoder$evaluator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [InstructionEvaluator]
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
  function InstructionTable() {
    InstructionTable_instance = this;
    this.ADDR_TYPE_NONE = 0;
    this.ADDR_TYPE_REG = 1;
    this.ADDR_TYPE_16 = 2;
    this.ADDR_TYPE_26 = 3;
    this.INSTR_TYPE_PSP = 1 << 0;
    this.INSTR_TYPE_SYSCALL = 1 << 1;
    this.INSTR_TYPE_B = 1 << 2;
    this.INSTR_TYPE_LIKELY = 1 << 3;
    this.INSTR_TYPE_JAL = 1 << 4;
    this.INSTR_TYPE_JUMP = 1 << 5;
    this.INSTR_TYPE_BREAK = 1 << 6;
    this.add = this.ID_hht69y$('add', new InstructionTable$VM('000000:rs:rt:rd:00000:100000'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.addu = this.ID_hht69y$('addu', new InstructionTable$VM('000000:rs:rt:rd:00000:100001'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.addi = this.ID_hht69y$('addi', new InstructionTable$VM('001000:rs:rt:imm16'), '%t, %s, %i', this.ADDR_TYPE_NONE, 0);
    this.addiu = this.ID_hht69y$('addiu', new InstructionTable$VM('001001:rs:rt:imm16'), '%t, %s, %i', this.ADDR_TYPE_NONE, 0);
    this.sub = this.ID_hht69y$('sub', new InstructionTable$VM('000000:rs:rt:rd:00000:100010'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.subu = this.ID_hht69y$('subu', new InstructionTable$VM('000000:rs:rt:rd:00000:100011'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.and = this.ID_hht69y$('and', new InstructionTable$VM('000000:rs:rt:rd:00000:100100'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.andi = this.ID_hht69y$('andi', new InstructionTable$VM('001100:rs:rt:imm16'), '%t, %s, %I', this.ADDR_TYPE_NONE, 0);
    this.nor = this.ID_hht69y$('nor', new InstructionTable$VM('000000:rs:rt:rd:00000:100111'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.or = this.ID_hht69y$('or', new InstructionTable$VM('000000:rs:rt:rd:00000:100101'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.ori = this.ID_hht69y$('ori', new InstructionTable$VM('001101:rs:rt:imm16'), '%t, %s, %I', this.ADDR_TYPE_NONE, 0);
    this.xor = this.ID_hht69y$('xor', new InstructionTable$VM('000000:rs:rt:rd:00000:100110'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.xori = this.ID_hht69y$('xori', new InstructionTable$VM('001110:rs:rt:imm16'), '%t, %s, %I', this.ADDR_TYPE_NONE, 0);
    this.sll = this.ID_hht69y$('sll', new InstructionTable$VM('000000:00000:rt:rd:sa:000000'), '%d, %t, %a', this.ADDR_TYPE_NONE, 0);
    this.sllv = this.ID_hht69y$('sllv', new InstructionTable$VM('000000:rs:rt:rd:00000:000100'), '%d, %t, %s', this.ADDR_TYPE_NONE, 0);
    this.sra = this.ID_hht69y$('sra', new InstructionTable$VM('000000:00000:rt:rd:sa:000011'), '%d, %t, %a', this.ADDR_TYPE_NONE, 0);
    this.srav = this.ID_hht69y$('srav', new InstructionTable$VM('000000:rs:rt:rd:00000:000111'), '%d, %t, %s', this.ADDR_TYPE_NONE, 0);
    this.srl = this.ID_hht69y$('srl', new InstructionTable$VM('000000:00000:rt:rd:sa:000010'), '%d, %t, %a', this.ADDR_TYPE_NONE, 0);
    this.srlv = this.ID_hht69y$('srlv', new InstructionTable$VM('000000:rs:rt:rd:00000:000110'), '%d, %t, %s', this.ADDR_TYPE_NONE, 0);
    this.rotr = this.ID_hht69y$('rotr', new InstructionTable$VM('000000:00001:rt:rd:sa:000010'), '%d, %t, %a', this.ADDR_TYPE_NONE, 0);
    this.rotrv = this.ID_hht69y$('rotrv', new InstructionTable$VM('000000:rs:rt:rd:00001:000110'), '%d, %t, %s', this.ADDR_TYPE_NONE, 0);
    this.slt = this.ID_hht69y$('slt', new InstructionTable$VM('000000:rs:rt:rd:00000:101010'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.slti = this.ID_hht69y$('slti', new InstructionTable$VM('001010:rs:rt:imm16'), '%t, %s, %i', this.ADDR_TYPE_NONE, 0);
    this.sltu = this.ID_hht69y$('sltu', new InstructionTable$VM('000000:rs:rt:rd:00000:101011'), '%d, %s, %t', this.ADDR_TYPE_NONE, 0);
    this.sltiu = this.ID_hht69y$('sltiu', new InstructionTable$VM('001011:rs:rt:imm16'), '%t, %s, %i', this.ADDR_TYPE_NONE, 0);
    this.lui = this.ID_hht69y$('lui', new InstructionTable$VM('001111:00000:rt:imm16'), '%t, %I', this.ADDR_TYPE_NONE, 0);
    this.seb = this.ID_hht69y$('seb', new InstructionTable$VM('011111:00000:rt:rd:10000:100000'), '%d, %t', this.ADDR_TYPE_NONE, 0);
    this.seh = this.ID_hht69y$('seh', new InstructionTable$VM('011111:00000:rt:rd:11000:100000'), '%d, %t', this.ADDR_TYPE_NONE, 0);
    this.bitrev = this.ID_hht69y$('bitrev', new InstructionTable$VM('011111:00000:rt:rd:10100:100000'), '%d, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.max = this.ID_hht69y$('max', new InstructionTable$VM('000000:rs:rt:rd:00000:101100'), '%d, %s, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.min = this.ID_hht69y$('min', new InstructionTable$VM('000000:rs:rt:rd:00000:101101'), '%d, %s, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.div = this.ID_hht69y$('div', new InstructionTable$VM('000000:rs:rt:00000:00000:011010'), '%s, %t', this.ADDR_TYPE_NONE, 0);
    this.divu = this.ID_hht69y$('divu', new InstructionTable$VM('000000:rs:rt:00000:00000:011011'), '%s, %t', this.ADDR_TYPE_NONE, 0);
    this.mult = this.ID_hht69y$('mult', new InstructionTable$VM('000000:rs:rt:00000:00000:011000'), '%s, %t', this.ADDR_TYPE_NONE, 0);
    this.multu = this.ID_hht69y$('multu', new InstructionTable$VM('000000:rs:rt:00000:00000:011001'), '%s, %t', this.ADDR_TYPE_NONE, 0);
    this.madd = this.ID_hht69y$('madd', new InstructionTable$VM('000000:rs:rt:00000:00000:011100'), '%s, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.maddu = this.ID_hht69y$('maddu', new InstructionTable$VM('000000:rs:rt:00000:00000:011101'), '%s, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.msub = this.ID_hht69y$('msub', new InstructionTable$VM('000000:rs:rt:00000:00000:101110'), '%s, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.msubu = this.ID_hht69y$('msubu', new InstructionTable$VM('000000:rs:rt:00000:00000:101111'), '%s, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mfhi = this.ID_hht69y$('mfhi', new InstructionTable$VM('000000:00000:00000:rd:00000:010000'), '%d', this.ADDR_TYPE_NONE, 0);
    this.mflo = this.ID_hht69y$('mflo', new InstructionTable$VM('000000:00000:00000:rd:00000:010010'), '%d', this.ADDR_TYPE_NONE, 0);
    this.mthi = this.ID_hht69y$('mthi', new InstructionTable$VM('000000:rs:00000:00000:00000:010001'), '%s', this.ADDR_TYPE_NONE, 0);
    this.mtlo = this.ID_hht69y$('mtlo', new InstructionTable$VM('000000:rs:00000:00000:00000:010011'), '%s', this.ADDR_TYPE_NONE, 0);
    this.movz = this.ID_hht69y$('movz', new InstructionTable$VM('000000:rs:rt:rd:00000:001010'), '%d, %s, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.movn = this.ID_hht69y$('movn', new InstructionTable$VM('000000:rs:rt:rd:00000:001011'), '%d, %s, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.ext = this.ID_hht69y$('ext', new InstructionTable$VM('011111:rs:rt:msb:lsb:000000'), '%t, %s, %a, %ne', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.ins = this.ID_hht69y$('ins', new InstructionTable$VM('011111:rs:rt:msb:lsb:000100'), '%t, %s, %a, %ni', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.clz = this.ID_hht69y$('clz', new InstructionTable$VM('000000:rs:00000:rd:00000:010110'), '%d, %s', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.clo = this.ID_hht69y$('clo', new InstructionTable$VM('000000:rs:00000:rd:00000:010111'), '%d, %s', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.wsbh = this.ID_hht69y$('wsbh', new InstructionTable$VM('011111:00000:rt:rd:00010:100000'), '%d, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.wsbw = this.ID_hht69y$('wsbw', new InstructionTable$VM('011111:00000:rt:rd:00011:100000'), '%d, %t', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.beq = this.ID_hht69y$('beq', new InstructionTable$VM('000100:rs:rt:imm16'), '%s, %t, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B);
    this.beql = this.ID_hht69y$('beql', new InstructionTable$VM('010100:rs:rt:imm16'), '%s, %t, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.bgez = this.ID_hht69y$('bgez', new InstructionTable$VM('000001:rs:00001:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B);
    this.bgezl = this.ID_hht69y$('bgezl', new InstructionTable$VM('000001:rs:00011:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.bgezal = this.ID_hht69y$('bgezal', new InstructionTable$VM('000001:rs:10001:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_JAL);
    this.bgezall = this.ID_hht69y$('bgezall', new InstructionTable$VM('000001:rs:10011:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_LIKELY | this.INSTR_TYPE_JAL);
    this.bltz = this.ID_hht69y$('bltz', new InstructionTable$VM('000001:rs:00000:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B);
    this.bltzl = this.ID_hht69y$('bltzl', new InstructionTable$VM('000001:rs:00010:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.bltzal = this.ID_hht69y$('bltzal', new InstructionTable$VM('000001:rs:10000:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_JAL);
    this.bltzall = this.ID_hht69y$('bltzall', new InstructionTable$VM('000001:rs:10010:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_LIKELY | this.INSTR_TYPE_JAL);
    this.blez = this.ID_hht69y$('blez', new InstructionTable$VM('000110:rs:00000:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B);
    this.blezl = this.ID_hht69y$('blezl', new InstructionTable$VM('010110:rs:00000:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.bgtz = this.ID_hht69y$('bgtz', new InstructionTable$VM('000111:rs:00000:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B);
    this.bgtzl = this.ID_hht69y$('bgtzl', new InstructionTable$VM('010111:rs:00000:imm16'), '%s, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.bne = this.ID_hht69y$('bne', new InstructionTable$VM('000101:rs:rt:imm16'), '%s, %t, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B);
    this.bnel = this.ID_hht69y$('bnel', new InstructionTable$VM('010101:rs:rt:imm16'), '%s, %t, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.j = this.ID_hht69y$('j', new InstructionTable$VM('000010:imm26'), '%j', this.ADDR_TYPE_26, this.INSTR_TYPE_JUMP);
    this.jr = this.ID_hht69y$('jr', new InstructionTable$VM('000000:rs:00000:00000:00000:001000'), '%J', this.ADDR_TYPE_REG, this.INSTR_TYPE_JUMP);
    this.jalr = this.ID_hht69y$('jalr', new InstructionTable$VM('000000:rs:00000:rd:00000:001001'), '%J, %d', this.ADDR_TYPE_REG, this.INSTR_TYPE_JAL);
    this.jal = this.ID_hht69y$('jal', new InstructionTable$VM('000011:imm26'), '%j', this.ADDR_TYPE_26, this.INSTR_TYPE_JAL);
    this.bc1f = this.ID_hht69y$('bc1f', new InstructionTable$VM('010001:01000:00000:imm16'), '%O', this.ADDR_TYPE_16, this.INSTR_TYPE_B);
    this.bc1t = this.ID_hht69y$('bc1t', new InstructionTable$VM('010001:01000:00001:imm16'), '%O', this.ADDR_TYPE_16, this.INSTR_TYPE_B);
    this.bc1fl = this.ID_hht69y$('bc1fl', new InstructionTable$VM('010001:01000:00010:imm16'), '%O', this.ADDR_TYPE_16, this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.bc1tl = this.ID_hht69y$('bc1tl', new InstructionTable$VM('010001:01000:00011:imm16'), '%O', this.ADDR_TYPE_16, this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.lb = this.ID_hht69y$('lb', new InstructionTable$VM('100000:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.lh = this.ID_hht69y$('lh', new InstructionTable$VM('100001:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.lw = this.ID_hht69y$('lw', new InstructionTable$VM('100011:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.lwl = this.ID_hht69y$('lwl', new InstructionTable$VM('100010:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.lwr = this.ID_hht69y$('lwr', new InstructionTable$VM('100110:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.lbu = this.ID_hht69y$('lbu', new InstructionTable$VM('100100:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.lhu = this.ID_hht69y$('lhu', new InstructionTable$VM('100101:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.sb = this.ID_hht69y$('sb', new InstructionTable$VM('101000:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.sh = this.ID_hht69y$('sh', new InstructionTable$VM('101001:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.sw = this.ID_hht69y$('sw', new InstructionTable$VM('101011:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.swl = this.ID_hht69y$('swl', new InstructionTable$VM('101010:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.swr = this.ID_hht69y$('swr', new InstructionTable$VM('101110:rs:rt:imm16'), '%t, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.ll = this.ID_hht69y$('ll', new InstructionTable$VM('110000:rs:rt:imm16'), '%t, %O', this.ADDR_TYPE_NONE, 0);
    this.sc = this.ID_hht69y$('sc', new InstructionTable$VM('111000:rs:rt:imm16'), '%t, %O', this.ADDR_TYPE_NONE, 0);
    this.lwc1 = this.ID_hht69y$('lwc1', new InstructionTable$VM('110001:rs:ft:imm16'), '%T, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.swc1 = this.ID_hht69y$('swc1', new InstructionTable$VM('111001:rs:ft:imm16'), '%T, %i(%s)', this.ADDR_TYPE_NONE, 0);
    this.add_s = this.ID_hht69y$('add.s', new InstructionTable$VM('010001:10000:ft:fs:fd:000000'), '%D, %S, %T', this.ADDR_TYPE_NONE, 0);
    this.sub_s = this.ID_hht69y$('sub.s', new InstructionTable$VM('010001:10000:ft:fs:fd:000001'), '%D, %S, %T', this.ADDR_TYPE_NONE, 0);
    this.mul_s = this.ID_hht69y$('mul.s', new InstructionTable$VM('010001:10000:ft:fs:fd:000010'), '%D, %S, %T', this.ADDR_TYPE_NONE, 0);
    this.div_s = this.ID_hht69y$('div.s', new InstructionTable$VM('010001:10000:ft:fs:fd:000011'), '%D, %S, %T', this.ADDR_TYPE_NONE, 0);
    this.sqrt_s = this.ID_hht69y$('sqrt.s', new InstructionTable$VM('010001:10000:00000:fs:fd:000100'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.abs_s = this.ID_hht69y$('abs.s', new InstructionTable$VM('010001:10000:00000:fs:fd:000101'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.mov_s = this.ID_hht69y$('mov.s', new InstructionTable$VM('010001:10000:00000:fs:fd:000110'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.neg_s = this.ID_hht69y$('neg.s', new InstructionTable$VM('010001:10000:00000:fs:fd:000111'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.round_w_s = this.ID_hht69y$('round.w.s', new InstructionTable$VM('010001:10000:00000:fs:fd:001100'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.trunc_w_s = this.ID_hht69y$('trunc.w.s', new InstructionTable$VM('010001:10000:00000:fs:fd:001101'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.ceil_w_s = this.ID_hht69y$('ceil.w.s', new InstructionTable$VM('010001:10000:00000:fs:fd:001110'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.floor_w_s = this.ID_hht69y$('floor.w.s', new InstructionTable$VM('010001:10000:00000:fs:fd:001111'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.cvt_s_w = this.ID_hht69y$('cvt.s.w', new InstructionTable$VM('010001:10100:00000:fs:fd:100000'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.cvt_w_s = this.ID_hht69y$('cvt.w.s', new InstructionTable$VM('010001:10000:00000:fs:fd:100100'), '%D, %S', this.ADDR_TYPE_NONE, 0);
    this.mfc1 = this.ID_hht69y$('mfc1', new InstructionTable$VM('010001:00000:rt:c1dr:00000:000000'), '%t, %S', this.ADDR_TYPE_NONE, 0);
    this.mtc1 = this.ID_hht69y$('mtc1', new InstructionTable$VM('010001:00100:rt:c1dr:00000:000000'), '%t, %S', this.ADDR_TYPE_NONE, 0);
    this.cfc1 = this.ID_hht69y$('cfc1', new InstructionTable$VM('010001:00010:rt:c1cr:00000:000000'), '%t, %p', this.ADDR_TYPE_NONE, 0);
    this.ctc1 = this.ID_hht69y$('ctc1', new InstructionTable$VM('010001:00110:rt:c1cr:00000:000000'), '%t, %p', this.ADDR_TYPE_NONE, 0);
    this.c_f_s = this.ID_hht69y$('c.f.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:0000'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_un_s = this.ID_hht69y$('c.un.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:0001'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_eq_s = this.ID_hht69y$('c.eq.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:0010'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_ueq_s = this.ID_hht69y$('c.ueq.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:0011'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_olt_s = this.ID_hht69y$('c.olt.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:0100'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_ult_s = this.ID_hht69y$('c.ult.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:0101'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_ole_s = this.ID_hht69y$('c.ole.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:0110'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_ule_s = this.ID_hht69y$('c.ule.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:0111'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_sf_s = this.ID_hht69y$('c.sf.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:1000'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_ngle_s = this.ID_hht69y$('c.ngle.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:1001'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_seq_s = this.ID_hht69y$('c.seq.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:1010'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_ngl_s = this.ID_hht69y$('c.ngl.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:1011'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_lt_s = this.ID_hht69y$('c.lt.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:1100'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_nge_s = this.ID_hht69y$('c.nge.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:1101'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_le_s = this.ID_hht69y$('c.le.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:1110'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.c_ngt_s = this.ID_hht69y$('c.ngt.s', new InstructionTable$VM('010001:10000:ft:fs:00000:11:1111'), '%S, %T', this.ADDR_TYPE_NONE, 0);
    this.syscall = this.ID_hht69y$('syscall', new InstructionTable$VM('000000:imm20:001100'), '%C', this.ADDR_TYPE_NONE, this.INSTR_TYPE_SYSCALL);
    this.cache = this.ID_hht69y$('cache', new InstructionTable$VM('101111:rs:-----:imm16'), '%k, %o', this.ADDR_TYPE_NONE, 0);
    this.sync = this.ID_hht69y$('sync', new InstructionTable$VM('000000:00000:00000:00000:00000:001111'), '', this.ADDR_TYPE_NONE, 0);
    this._break = this.ID_hht69y$('break', new InstructionTable$VM('000000:imm20:001101'), '%c', this.ADDR_TYPE_NONE, this.INSTR_TYPE_BREAK);
    this.dbreak = this.ID_hht69y$('dbreak', new InstructionTable$VM('011100:00000:00000:00000:00000:111111'), '', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP | this.INSTR_TYPE_BREAK);
    this.halt = this.ID_hht69y$('halt', new InstructionTable$VM('011100:00000:00000:00000:00000:000000'), '', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.dret = this.ID_hht69y$('dret', new InstructionTable$VM('011100:00000:00000:00000:00000:111110'), '', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.eret = this.ID_hht69y$('eret', new InstructionTable$VM('010000:10000:00000:00000:00000:011000'), '', this.ADDR_TYPE_NONE, 0);
    this.mfic = this.ID_hht69y$('mfic', new InstructionTable$VM('011100:rt:00000:00000:00000:100100'), '%t, %p', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mtic = this.ID_hht69y$('mtic', new InstructionTable$VM('011100:rt:00000:00000:00000:100110'), '%t, %p', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mfdr = this.ID_hht69y$('mfdr', new InstructionTable$VM('011100:00000:----------:00000:111101'), '%t, %r', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mtdr = this.ID_hht69y$('mtdr', new InstructionTable$VM('011100:00100:----------:00000:111101'), '%t, %r', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.cfc0 = this.ID_hht69y$('cfc0', new InstructionTable$VM('010000:00010:----------:00000:000000'), '%t, %p', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.ctc0 = this.ID_hht69y$('ctc0', new InstructionTable$VM('010000:00110:----------:00000:000000'), '%t, %p', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mfc0 = this.ID_hht69y$('mfc0', new InstructionTable$VM('010000:00000:----------:00000:000000'), '%t, %0', this.ADDR_TYPE_NONE, 0);
    this.mtc0 = this.ID_hht69y$('mtc0', new InstructionTable$VM('010000:00100:----------:00000:000000'), '%t, %0', this.ADDR_TYPE_NONE, 0);
    this.mfv = this.ID_hht69y$('mfv', new InstructionTable$VM('010010:00:011:rt:0:0000000:0:vd'), '%t, %zs', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mfvc = this.ID_hht69y$('mfvc', new InstructionTable$VM('010010:00:011:rt:0:0000000:1:vd'), '%t, %2d', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mtv = this.ID_hht69y$('mtv', new InstructionTable$VM('010010:00:111:rt:0:0000000:0:vd'), '%t, %zs', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mtvc = this.ID_hht69y$('mtvc', new InstructionTable$VM('010010:00:111:rt:0:0000000:1:vd'), '%t, %2d', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.lv_s = this.ID_hht69y$('lv.s', new InstructionTable$VM('110010:rs:vt5:imm14:vt2'), '%Xs, %Y', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.lv_q = this.ID_hht69y$('lv.q', new InstructionTable$VM('110110:rs:vt5:imm14:0:vt1'), '%Xq, %Y', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.lvl_q = this.ID_hht69y$('lvl.q', new InstructionTable$VM('110101:rs:vt5:imm14:0:vt1'), '%Xq, %Y', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.lvr_q = this.ID_hht69y$('lvr.q', new InstructionTable$VM('110101:rs:vt5:imm14:1:vt1'), '%Xq, %Y', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.sv_q = this.ID_hht69y$('sv.q', new InstructionTable$VM('111110:rs:vt5:imm14:0:vt1'), '%Xq, %Y', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vdot = this.ID_hht69y$('vdot', new InstructionTable$VM('011001:001:vt:two:vs:one:vd'), '%zs, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vscl = this.ID_hht69y$('vscl', new InstructionTable$VM('011001:010:vt:two:vs:one:vd'), '%zp, %yp, %xs', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsge = this.ID_hht69y$('vsge', new InstructionTable$VM('011011:110:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vslt = this.ID_hht69y$('vslt', new InstructionTable$VM('011011:111:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vrot = this.ID_hht69y$('vrot', new InstructionTable$VM('111100:111:01:imm5:two:vs:one:vd'), '%zp, %ys, %vr', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vzero = this.ID_hht69y$('vzero', new InstructionTable$VM('110100:00:000:0:0110:two:0000000:one:vd'), '%zp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vone = this.ID_hht69y$('vone', new InstructionTable$VM('110100:00:000:0:0111:two:0000000:one:vd'), '%zp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmov = this.ID_hht69y$('vmov', new InstructionTable$VM('110100:00:000:0:0000:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vabs = this.ID_hht69y$('vabs', new InstructionTable$VM('110100:00:000:0:0001:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vneg = this.ID_hht69y$('vneg', new InstructionTable$VM('110100:00:000:0:0010:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vocp = this.ID_hht69y$('vocp', new InstructionTable$VM('110100:00:010:0:0100:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsgn = this.ID_hht69y$('vsgn', new InstructionTable$VM('110100:00:010:0:1010:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vrcp = this.ID_hht69y$('vrcp', new InstructionTable$VM('110100:00:000:1:0000:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vrsq = this.ID_hht69y$('vrsq', new InstructionTable$VM('110100:00:000:1:0001:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsin = this.ID_hht69y$('vsin', new InstructionTable$VM('110100:00:000:1:0010:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vcos = this.ID_hht69y$('vcos', new InstructionTable$VM('110100:00:000:1:0011:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vexp2 = this.ID_hht69y$('vexp2', new InstructionTable$VM('110100:00:000:1:0100:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vlog2 = this.ID_hht69y$('vlog2', new InstructionTable$VM('110100:00:000:1:0101:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsqrt = this.ID_hht69y$('vsqrt', new InstructionTable$VM('110100:00:000:1:0110:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vasin = this.ID_hht69y$('vasin', new InstructionTable$VM('110100:00:000:1:0111:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vnrcp = this.ID_hht69y$('vnrcp', new InstructionTable$VM('110100:00:000:1:1000:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vnsin = this.ID_hht69y$('vnsin', new InstructionTable$VM('110100:00:000:1:1010:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vrexp2 = this.ID_hht69y$('vrexp2', new InstructionTable$VM('110100:00:000:1:1100:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsat0 = this.ID_hht69y$('vsat0', new InstructionTable$VM('110100:00:000:0:0100:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsat1 = this.ID_hht69y$('vsat1', new InstructionTable$VM('110100:00:000:0:0101:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vcst = this.ID_hht69y$('vcst', new InstructionTable$VM('110100:00:011:imm5:two:0000000:one:vd'), '%zp, %vk', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmmul = this.ID_hht69y$('vmmul', new InstructionTable$VM('111100:000:vt:two:vs:one:vd'), '%zm, %tym, %xm', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vhdp = this.ID_hht69y$('vhdp', new InstructionTable$VM('011001:100:vt:two:vs:one:vd'), '%zs, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vcrs_t = this.ID_hht69y$('vcrs.t', new InstructionTable$VM('011001:101:vt:1:vs:0:vd'), '%zt, %yt, %xt', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vcrsp_t = this.ID_hht69y$('vcrsp.t', new InstructionTable$VM('111100:101:vt:1:vs:0:vd'), '%zt, %yt, %xt', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vi2c = this.ID_hht69y$('vi2c', new InstructionTable$VM('110100:00:001:11:101:two:vs:one:vd'), '%zs, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vi2uc = this.ID_hht69y$('vi2uc', new InstructionTable$VM('110100:00:001:11:100:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vtfm2 = this.ID_hht69y$('vtfm2', new InstructionTable$VM('111100:001:vt:0:vs:1:vd'), '%zp, %ym, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vtfm3 = this.ID_hht69y$('vtfm3', new InstructionTable$VM('111100:010:vt:1:vs:0:vd'), '%zt, %yn, %xt', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vtfm4 = this.ID_hht69y$('vtfm4', new InstructionTable$VM('111100:011:vt:1:vs:1:vd'), '%zq, %yo, %xq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vhtfm2 = this.ID_hht69y$('vhtfm2', new InstructionTable$VM('111100:001:vt:0:vs:0:vd'), '%zp, %ym, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vhtfm3 = this.ID_hht69y$('vhtfm3', new InstructionTable$VM('111100:010:vt:0:vs:1:vd'), '%zt, %yn, %xt', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vhtfm4 = this.ID_hht69y$('vhtfm4', new InstructionTable$VM('111100:011:vt:1:vs:0:vd'), '%zq, %yo, %xq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsrt3 = this.ID_hht69y$('vsrt3', new InstructionTable$VM('110100:00:010:01000:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vfad = this.ID_hht69y$('vfad', new InstructionTable$VM('110100:00:010:00110:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmin = this.ID_hht69y$('vmin', new InstructionTable$VM('011011:010:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmax = this.ID_hht69y$('vmax', new InstructionTable$VM('011011:011:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vadd = this.ID_hht69y$('vadd', new InstructionTable$VM('011000:000:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsub = this.ID_hht69y$('vsub', new InstructionTable$VM('011000:001:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vdiv = this.ID_hht69y$('vdiv', new InstructionTable$VM('011000:111:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmul = this.ID_hht69y$('vmul', new InstructionTable$VM('011001:000:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vidt = this.ID_hht69y$('vidt', new InstructionTable$VM('110100:00:000:0:0011:two:0000000:one:vd'), '%zp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmidt = this.ID_hht69y$('vmidt', new InstructionTable$VM('111100:111:00:00011:two:0000000:one:vd'), '%zm', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.viim = this.ID_hht69y$('viim', new InstructionTable$VM('110111:11:0:vd:imm16'), '%xs, %vi', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmmov = this.ID_hht69y$('vmmov', new InstructionTable$VM('111100:111:00:00000:two:vs:one:vd'), '%zm, %ym', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmzero = this.ID_hht69y$('vmzero', new InstructionTable$VM('111100:111:00:00110:two:0000000:one:vd'), '%zm', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmone = this.ID_hht69y$('vmone', new InstructionTable$VM('111100:111:00:00111:two:0000000:one:vd'), '%zp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vnop = this.ID_hht69y$('vnop', new InstructionTable$VM('111111:1111111111:00000:00000000000'), '', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsync = this.ID_hht69y$('vsync', new InstructionTable$VM('111111:1111111111:00000:01100100000'), '', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vflush = this.ID_hht69y$('vflush', new InstructionTable$VM('111111:1111111111:00000:10000001101'), '', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vpfxd = this.ID_hht69y$('vpfxd', new InstructionTable$VM('110111:10:------------:mskw:mskz:msky:mskx:satw:satz:saty:satx'), '[%vp4, %vp5, %vp6, %vp7]', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vpfxs = this.ID_hht69y$('vpfxs', new InstructionTable$VM('110111:00:----:negw:negz:negy:negx:cstw:cstz:csty:cstx:absw:absz:absy:absx:swzw:swzz:swzy:swzx'), '[%vp0, %vp1, %vp2, %vp3]', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vpfxt = this.ID_hht69y$('vpfxt', new InstructionTable$VM('110111:01:----:negw:negz:negy:negx:cstw:cstz:csty:cstx:absw:absz:absy:absx:swzw:swzz:swzy:swzx'), '[%vp0, %vp1, %vp2, %vp3]', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vdet = this.ID_hht69y$('vdet', new InstructionTable$VM('011001:110:vt:two:vs:one:vd'), '%zs, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vrnds = this.ID_hht69y$('vrnds', new InstructionTable$VM('110100:00:001:00:000:two:vs:one:0000000'), '%ys', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vrndi = this.ID_hht69y$('vrndi', new InstructionTable$VM('110100:00:001:00:001:two:0000000:one:vd'), '%zp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vrndf1 = this.ID_hht69y$('vrndf1', new InstructionTable$VM('110100:00:001:00:010:two:0000000:one:vd'), '%zp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vrndf2 = this.ID_hht69y$('vrndf2', new InstructionTable$VM('110100:00:001:00:011:two:0000000:one:vd'), '%zp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vcmp = this.ID_hht69y$('vcmp', new InstructionTable$VM('011011:000:vt:two:vs:one:000:imm4'), '%Zn, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vcmovf = this.ID_hht69y$('vcmovf', new InstructionTable$VM('110100:10:101:01:imm3:two:vs:one:vd'), '%zp, %yp, %v3', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vcmovt = this.ID_hht69y$('vcmovt', new InstructionTable$VM('110100:10:101:00:imm3:two:vs:one:vd'), '%zp, %yp, %v3', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vavg = this.ID_hht69y$('vavg', new InstructionTable$VM('110100:00:010:00111:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vf2id = this.ID_hht69y$('vf2id', new InstructionTable$VM('110100:10:011:imm5:two:vs:one:vd'), '%zp, %yp, %v5', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vf2in = this.ID_hht69y$('vf2in', new InstructionTable$VM('110100:10:000:imm5:two:vs:one:vd'), '%zp, %yp, %v5', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vf2iu = this.ID_hht69y$('vf2iu', new InstructionTable$VM('110100:10:010:imm5:two:vs:one:vd'), '%zp, %yp, %v5', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vf2iz = this.ID_hht69y$('vf2iz', new InstructionTable$VM('110100:10:001:imm5:two:vs:one:vd'), '%zp, %yp, %v5', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vi2f = this.ID_hht69y$('vi2f', new InstructionTable$VM('110100:10:100:imm5:two:vs:one:vd'), '%zp, %yp, %v5', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vscmp = this.ID_hht69y$('vscmp', new InstructionTable$VM('011011:101:vt:two:vs:one:vd'), '%zp, %yp, %xp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmscl = this.ID_hht69y$('vmscl', new InstructionTable$VM('111100:100:vt:two:vs:one:vd'), '%zm, %ym, %xs', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vt4444_q = this.ID_hht69y$('vt4444.q', new InstructionTable$VM('110100:00:010:11001:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vt5551_q = this.ID_hht69y$('vt5551.q', new InstructionTable$VM('110100:00:010:11010:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vt5650_q = this.ID_hht69y$('vt5650.q', new InstructionTable$VM('110100:00:010:11011:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmfvc = this.ID_hht69y$('vmfvc', new InstructionTable$VM('110100:00:010:10000:1:imm7:0:vd'), '%zs, %2s', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vmtvc = this.ID_hht69y$('vmtvc', new InstructionTable$VM('110100:00:010:10001:0:vs:1:imm7'), '%2d, %ys', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.mfvme = this.ID_hht69y$('mfvme', new InstructionTable$VM('011010--------------------------'), '%t, %i', this.ADDR_TYPE_NONE, 0);
    this.mtvme = this.ID_hht69y$('mtvme', new InstructionTable$VM('101100--------------------------'), '%t, %i', this.ADDR_TYPE_NONE, 0);
    this.sv_s = this.ID_hht69y$('sv.s', new InstructionTable$VM('111010:rs:vt5:imm14:vt2'), '%Xs, %Y', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vfim = this.ID_hht69y$('vfim', new InstructionTable$VM('110111:11:1:vt:imm16'), '%xs, %vh', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.svl_q = this.ID_hht69y$('svl.q', new InstructionTable$VM('111101:rs:vt5:imm14:0:vt1'), '%Xq, %Y', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.svr_q = this.ID_hht69y$('svr.q', new InstructionTable$VM('111101:rs:vt5:imm14:1:vt1'), '%Xq, %Y', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vbfy1 = this.ID_hht69y$('vbfy1', new InstructionTable$VM('110100:00:010:00010:two:vs:one:vd'), '%zp, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vbfy2 = this.ID_hht69y$('vbfy2', new InstructionTable$VM('110100:00:010:00011:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vf2h = this.ID_hht69y$('vf2h', new InstructionTable$VM('110100:00:001:10:010:two:vs:one:vd'), '%zs, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vh2f = this.ID_hht69y$('vh2f', new InstructionTable$VM('110100:00:001:10:011:two:vs:one:vd'), '%zq, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vi2s = this.ID_hht69y$('vi2s', new InstructionTable$VM('110100:00:001:11:111:two:vs:one:vd'), '%zs, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vi2us = this.ID_hht69y$('vi2us', new InstructionTable$VM('110100:00:001:11:110:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vlgb = this.ID_hht69y$('vlgb', new InstructionTable$VM('110100:00:001:10:111:two:vs:one:vd'), '%zs, %ys', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vqmul = this.ID_hht69y$('vqmul', new InstructionTable$VM('111100:101:vt:1:vs:1:vd'), '%zq, %yq, %xq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vs2i = this.ID_hht69y$('vs2i', new InstructionTable$VM('110100:00:001:11:011:two:vs:one:vd'), '%zq, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vc2i = this.ID_hht69y$('vc2i', new InstructionTable$VM('110100:00:001:11:001:two:vs:one:vd'), '%zs, %ys, %xs', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vuc2i = this.ID_hht69y$('vuc2i', new InstructionTable$VM('110100:00:001:11:000:two:vs:one:vd'), '%zq, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsbn = this.ID_hht69y$('vsbn', new InstructionTable$VM('011000:010:vt:two:vs:one:vd'), '%zs, %ys, %xs', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsbz = this.ID_hht69y$('vsbz', new InstructionTable$VM('110100:00:001:10110:two:vs:one:vd'), '%zs, %ys', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsocp = this.ID_hht69y$('vsocp', new InstructionTable$VM('110100:00:010:00101:two:vs:one:vd'), '%zq, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsrt1 = this.ID_hht69y$('vsrt1', new InstructionTable$VM('110100:00:010:00000:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsrt2 = this.ID_hht69y$('vsrt2', new InstructionTable$VM('110100:00:010:00001:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vsrt4 = this.ID_hht69y$('vsrt4', new InstructionTable$VM('110100:00:010:01001:two:vs:one:vd'), '%zq, %yq', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vus2i = this.ID_hht69y$('vus2i', new InstructionTable$VM('110100:00:001:11010:two:vs:one:vd'), '%zq, %yp', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.vwbn = this.ID_hht69y$('vwbn', new InstructionTable$VM('110100:11:imm8:two:vs:one:vd'), '%zs, %xs, %I', this.ADDR_TYPE_NONE, this.INSTR_TYPE_PSP);
    this.bvf = this.ID_hht69y$('bvf', new InstructionTable$VM('010010:01:000:imm3:00:imm16'), '%Zc, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_PSP | this.INSTR_TYPE_B);
    this.bvt = this.ID_hht69y$('bvt', new InstructionTable$VM('010010:01:000:imm3:01:imm16'), '%Zc, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_PSP | this.INSTR_TYPE_B);
    this.bvfl = this.ID_hht69y$('bvfl', new InstructionTable$VM('010010:01:000:imm3:10:imm16'), '%Zc, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_PSP | this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
    this.bvtl = this.ID_hht69y$('bvtl', new InstructionTable$VM('010010:01:000:imm3:11:imm16'), '%Zc, %O', this.ADDR_TYPE_16, this.INSTR_TYPE_PSP | this.INSTR_TYPE_B | this.INSTR_TYPE_LIKELY);
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
  function InstructionTable$VM(format) {
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
  InstructionTable$VM.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VM',
    interfaces: []
  };
  InstructionTable$VM.prototype.component1 = function () {
    return this.format;
  };
  InstructionTable$VM.prototype.copy_61zpoe$ = function (format) {
    return new InstructionTable$VM(format === void 0 ? this.format : format);
  };
  InstructionTable$VM.prototype.toString = function () {
    return 'VM(format=' + Kotlin.toString(this.format) + ')';
  };
  InstructionTable$VM.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    return result;
  };
  InstructionTable$VM.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.format, other.format))));
  };
  InstructionTable.prototype.ID_hht69y$ = function (name, vm, format, addressType, instructionType) {
    return new InstructionType(name, vm, format, addressType, instructionType);
  };
  InstructionTable.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InstructionTable',
    interfaces: []
  };
  var InstructionTable_instance = null;
  function InstructionTable_getInstance() {
    if (InstructionTable_instance === null) {
      new InstructionTable();
    }
    return InstructionTable_instance;
  }
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
      return this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_SYSCALL);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isBreak', {
    get: function () {
      return this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_BREAK);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isBranch', {
    get: function () {
      return this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_B);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isCall', {
    get: function () {
      return this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_JAL);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isJump', {
    get: function () {
      return this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_JAL) || this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_JUMP);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isJumpNoLink', {
    get: function () {
      return this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_JUMP);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isJal', {
    get: function () {
      return this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_JAL);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isJumpOrBranch', {
    get: function () {
      return this.isBranch || this.isJump;
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isLikely', {
    get: function () {
      return this.isInstructionType_0(InstructionTable_getInstance().INSTR_TYPE_LIKELY);
    }
  });
  Object.defineProperty(InstructionType.prototype, 'isRegister', {
    get: function () {
      return this.addressType === InstructionTable_getInstance().ADDR_TYPE_REG;
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
  InstructionType.prototype.copy_hht69y$ = function (name, vm, format, addressType, instructionType) {
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
  function RegistrableSyscallHandler() {
    this.ids = lmapOf([]);
  }
  RegistrableSyscallHandler.prototype.register_p42kcx$ = function (id, handler) {
    this.ids.put_xwzc9p$(id, handler);
  };
  RegistrableSyscallHandler.prototype.unhandled_acv9wa$ = function (state, id) {
    println(format('%08X: Called syscall: ### %04X', [state.getPC(), id]));
  };
  RegistrableSyscallHandler.prototype.syscall_acv9wa$ = function (state, id) {
    var tmp$;
    var handler = (tmp$ = this.ids.get_11rb$(id)) != null ? tmp$ : getCallableRef('unhandled', function ($receiver, state, id) {
      return $receiver.unhandled_acv9wa$(state, id), Unit;
    }.bind(null, this));
    handler(state, id);
  };
  RegistrableSyscallHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegistrableSyscallHandler',
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
  var extract = $module$korio_js.com.soywiz.korio.util.extract_e4yvb3$;
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
        if (equals(type, '%d')) {
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
    this.address = 1140850688;
    this.bufferWidth = 512;
    this.pixelFormat = 0;
    this.sync = 0;
    this.displayMode = 0;
    this.displayWidth = 480;
    this.displayHeight = 272;
  }
  PspDisplay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PspDisplay',
    interfaces: []
  };
  function Elf(stream) {
    Elf$Companion_getInstance();
    this.stream = stream;
    this.header_hvuwf4$_0 = this.header_hvuwf4$_0;
    this.programHeadersStream_tagowb$_0 = this.programHeadersStream_tagowb$_0;
    this.sectionHeadersStream_pqjbo$_0 = this.sectionHeadersStream_pqjbo$_0;
    this.programHeaders_7tbd05$_0 = this.programHeaders_7tbd05$_0;
    this.sectionHeaders_rjk72k$_0 = this.sectionHeaders_rjk72k$_0;
    this.sectionHeaderStringTable_mpgna6$_0 = this.sectionHeaderStringTable_mpgna6$_0;
    this.stringTableStream_48yrue$_0 = this.stringTableStream_48yrue$_0;
    this.sectionHeadersByName_zbrzti$_0 = this.sectionHeadersByName_zbrzti$_0;
  }
  function Elf$Companion() {
    Elf$Companion_instance = this;
  }
  Elf$Companion.prototype.read_39qel5$ = function (stream) {
    var $receiver = new Elf(stream);
    $receiver.read_0();
    return $receiver;
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
      if (this.header_hvuwf4$_0 == null)
        return throwUPAE('header');
      return this.header_hvuwf4$_0;
    },
    set: function (header) {
      this.header_hvuwf4$_0 = header;
    }
  });
  Object.defineProperty(Elf.prototype, 'programHeadersStream', {
    get: function () {
      if (this.programHeadersStream_tagowb$_0 == null)
        return throwUPAE('programHeadersStream');
      return this.programHeadersStream_tagowb$_0;
    },
    set: function (programHeadersStream) {
      this.programHeadersStream_tagowb$_0 = programHeadersStream;
    }
  });
  Object.defineProperty(Elf.prototype, 'sectionHeadersStream', {
    get: function () {
      if (this.sectionHeadersStream_pqjbo$_0 == null)
        return throwUPAE('sectionHeadersStream');
      return this.sectionHeadersStream_pqjbo$_0;
    },
    set: function (sectionHeadersStream) {
      this.sectionHeadersStream_pqjbo$_0 = sectionHeadersStream;
    }
  });
  Object.defineProperty(Elf.prototype, 'programHeaders', {
    get: function () {
      if (this.programHeaders_7tbd05$_0 == null)
        return throwUPAE('programHeaders');
      return this.programHeaders_7tbd05$_0;
    },
    set: function (programHeaders) {
      this.programHeaders_7tbd05$_0 = programHeaders;
    }
  });
  Object.defineProperty(Elf.prototype, 'sectionHeaders', {
    get: function () {
      if (this.sectionHeaders_rjk72k$_0 == null)
        return throwUPAE('sectionHeaders');
      return this.sectionHeaders_rjk72k$_0;
    },
    set: function (sectionHeaders) {
      this.sectionHeaders_rjk72k$_0 = sectionHeaders;
    }
  });
  Object.defineProperty(Elf.prototype, 'sectionHeaderStringTable', {
    get: function () {
      if (this.sectionHeaderStringTable_mpgna6$_0 == null)
        return throwUPAE('sectionHeaderStringTable');
      return this.sectionHeaderStringTable_mpgna6$_0;
    },
    set: function (sectionHeaderStringTable) {
      this.sectionHeaderStringTable_mpgna6$_0 = sectionHeaderStringTable;
    }
  });
  Object.defineProperty(Elf.prototype, 'stringTableStream', {
    get: function () {
      if (this.stringTableStream_48yrue$_0 == null)
        return throwUPAE('stringTableStream');
      return this.stringTableStream_48yrue$_0;
    },
    set: function (stringTableStream) {
      this.stringTableStream_48yrue$_0 = stringTableStream;
    }
  });
  Object.defineProperty(Elf.prototype, 'sectionHeadersByName', {
    get: function () {
      if (this.sectionHeadersByName_zbrzti$_0 == null)
        return throwUPAE('sectionHeadersByName');
      return this.sectionHeadersByName_zbrzti$_0;
    },
    set: function (sectionHeadersByName) {
      this.sectionHeadersByName_zbrzti$_0 = sectionHeadersByName;
    }
  });
  Elf.prototype.read_0 = function () {
    var tmp$;
    this.header = Elf$Header$Companion_getInstance().invoke_39qel5$(this.stream);
    this.programHeadersStream = sliceWithSize(this.stream, Kotlin.Long.fromInt(this.header.programHeaderOffset), Kotlin.Long.fromInt(Kotlin.imul(this.header.programHeaderCount, this.header.programHeaderEntrySize)));
    this.sectionHeadersStream = sliceWithSize(this.stream, Kotlin.Long.fromInt(this.header.sectionHeaderOffset), Kotlin.Long.fromInt(Kotlin.imul(this.header.sectionHeaderCount, this.header.sectionHeaderEntrySize)));
    var $receiver = until(0, this.header.programHeaderCount);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(ElfProgramHeader$Companion_getInstance().invoke_39qel5$(this.programHeadersStream));
    }
    this.programHeaders = destination;
    var $receiver_0 = until(0, this.header.sectionHeaderCount);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
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
      if (sectionHeader.type !== ElfSectionHeaderType$Null_getInstance()) {
        sectionHeader.stream = this.getSectionHeaderFileStream_0(sectionHeader);
      }
      this.sectionHeadersByName.put_xwzc9p$(name, sectionHeader);
    }
  };
  Elf.prototype.getSectionHeaderFileStream_0 = function (sectionHeader) {
    var tmp$, tmp$_0;
    tmp$ = sectionHeader.type;
    if (equals(tmp$, ElfSectionHeaderType$NoBits_getInstance()) || equals(tmp$, ElfSectionHeaderType$Null_getInstance()))
      tmp$_0 = sliceWithSize(this.stream, Kotlin.Long.ZERO, Kotlin.Long.ZERO);
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
  Elf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Elf',
    interfaces: []
  };
  function BaseEnum(values) {
    this.values = values;
    var $receiver = this.values;
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  function BaseEnum$Id() {
  }
  BaseEnum$Id.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Id',
    interfaces: []
  };
  BaseEnum.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : invalidOp("Can't find index " + index + ' in class');
  };
  BaseEnum.prototype.invoke_za3lpa$ = function (index) {
    return this.get_za3lpa$(index);
  };
  BaseEnum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseEnum',
    interfaces: []
  };
  function ElfProgramHeaderType(id) {
    ElfProgramHeaderType$Companion_getInstance();
    this.id_hu8r4r$_0 = id;
  }
  Object.defineProperty(ElfProgramHeaderType.prototype, 'id', {
    get: function () {
      return this.id_hu8r4r$_0;
    }
  });
  function ElfProgramHeaderType$Companion() {
    ElfProgramHeaderType$Companion_instance = this;
    this.NoLoad = 0;
    this.Load = 1;
    this.Reloc1 = 1879048352;
    this.Reloc2 = 1879048353;
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
    interfaces: [BaseEnum$Id]
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
  function ElfSectionHeaderType(name, ordinal, id) {
    Enum.call(this);
    this.id_c5yh38$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElfSectionHeaderType_initFields() {
    ElfSectionHeaderType_initFields = function () {
    };
    ElfSectionHeaderType$Null_instance = new ElfSectionHeaderType('Null', 0, 0);
    ElfSectionHeaderType$ProgramBits_instance = new ElfSectionHeaderType('ProgramBits', 1, 1);
    ElfSectionHeaderType$SYMTAB_instance = new ElfSectionHeaderType('SYMTAB', 2, 2);
    ElfSectionHeaderType$STRTAB_instance = new ElfSectionHeaderType('STRTAB', 3, 3);
    ElfSectionHeaderType$RELA_instance = new ElfSectionHeaderType('RELA', 4, 4);
    ElfSectionHeaderType$HASH_instance = new ElfSectionHeaderType('HASH', 5, 5);
    ElfSectionHeaderType$DYNAMIC_instance = new ElfSectionHeaderType('DYNAMIC', 6, 6);
    ElfSectionHeaderType$NOTE_instance = new ElfSectionHeaderType('NOTE', 7, 7);
    ElfSectionHeaderType$NoBits_instance = new ElfSectionHeaderType('NoBits', 8, 8);
    ElfSectionHeaderType$Relocation_instance = new ElfSectionHeaderType('Relocation', 9, 9);
    ElfSectionHeaderType$SHLIB_instance = new ElfSectionHeaderType('SHLIB', 10, 10);
    ElfSectionHeaderType$DYNSYM_instance = new ElfSectionHeaderType('DYNSYM', 11, 11);
    ElfSectionHeaderType$LOPROC_instance = new ElfSectionHeaderType('LOPROC', 12, 1879048192);
    ElfSectionHeaderType$HIPROC_instance = new ElfSectionHeaderType('HIPROC', 13, 2147483647);
    ElfSectionHeaderType$LOUSER_instance = new ElfSectionHeaderType('LOUSER', 14, (new Kotlin.Long(-2147483648, 0)).toInt());
    ElfSectionHeaderType$HIUSER_instance = new ElfSectionHeaderType('HIUSER', 15, (new Kotlin.Long(-1, 0)).toInt());
    ElfSectionHeaderType$PrxRelocation_instance = new ElfSectionHeaderType('PrxRelocation', 16, ElfSectionHeaderType$LOPROC_getInstance().id | 160);
    ElfSectionHeaderType$PrxRelocation_FW5_instance = new ElfSectionHeaderType('PrxRelocation_FW5', 17, ElfSectionHeaderType$LOPROC_getInstance().id | 161);
    ElfSectionHeaderType$Companion_getInstance();
  }
  Object.defineProperty(ElfSectionHeaderType.prototype, 'id', {
    get: function () {
      return this.id_c5yh38$_0;
    }
  });
  var ElfSectionHeaderType$Null_instance;
  function ElfSectionHeaderType$Null_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$Null_instance;
  }
  var ElfSectionHeaderType$ProgramBits_instance;
  function ElfSectionHeaderType$ProgramBits_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$ProgramBits_instance;
  }
  var ElfSectionHeaderType$SYMTAB_instance;
  function ElfSectionHeaderType$SYMTAB_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$SYMTAB_instance;
  }
  var ElfSectionHeaderType$STRTAB_instance;
  function ElfSectionHeaderType$STRTAB_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$STRTAB_instance;
  }
  var ElfSectionHeaderType$RELA_instance;
  function ElfSectionHeaderType$RELA_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$RELA_instance;
  }
  var ElfSectionHeaderType$HASH_instance;
  function ElfSectionHeaderType$HASH_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$HASH_instance;
  }
  var ElfSectionHeaderType$DYNAMIC_instance;
  function ElfSectionHeaderType$DYNAMIC_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$DYNAMIC_instance;
  }
  var ElfSectionHeaderType$NOTE_instance;
  function ElfSectionHeaderType$NOTE_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$NOTE_instance;
  }
  var ElfSectionHeaderType$NoBits_instance;
  function ElfSectionHeaderType$NoBits_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$NoBits_instance;
  }
  var ElfSectionHeaderType$Relocation_instance;
  function ElfSectionHeaderType$Relocation_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$Relocation_instance;
  }
  var ElfSectionHeaderType$SHLIB_instance;
  function ElfSectionHeaderType$SHLIB_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$SHLIB_instance;
  }
  var ElfSectionHeaderType$DYNSYM_instance;
  function ElfSectionHeaderType$DYNSYM_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$DYNSYM_instance;
  }
  var ElfSectionHeaderType$LOPROC_instance;
  function ElfSectionHeaderType$LOPROC_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$LOPROC_instance;
  }
  var ElfSectionHeaderType$HIPROC_instance;
  function ElfSectionHeaderType$HIPROC_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$HIPROC_instance;
  }
  var ElfSectionHeaderType$LOUSER_instance;
  function ElfSectionHeaderType$LOUSER_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$LOUSER_instance;
  }
  var ElfSectionHeaderType$HIUSER_instance;
  function ElfSectionHeaderType$HIUSER_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$HIUSER_instance;
  }
  var ElfSectionHeaderType$PrxRelocation_instance;
  function ElfSectionHeaderType$PrxRelocation_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$PrxRelocation_instance;
  }
  var ElfSectionHeaderType$PrxRelocation_FW5_instance;
  function ElfSectionHeaderType$PrxRelocation_FW5_getInstance() {
    ElfSectionHeaderType_initFields();
    return ElfSectionHeaderType$PrxRelocation_FW5_instance;
  }
  function ElfSectionHeaderType$Companion() {
    ElfSectionHeaderType$Companion_instance = this;
    BaseEnum.call(this, ElfSectionHeaderType$values());
  }
  ElfSectionHeaderType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [BaseEnum]
  };
  var ElfSectionHeaderType$Companion_instance = null;
  function ElfSectionHeaderType$Companion_getInstance() {
    ElfSectionHeaderType_initFields();
    if (ElfSectionHeaderType$Companion_instance === null) {
      new ElfSectionHeaderType$Companion();
    }
    return ElfSectionHeaderType$Companion_instance;
  }
  ElfSectionHeaderType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfSectionHeaderType',
    interfaces: [BaseEnum$Id, Enum]
  };
  function ElfSectionHeaderType$values() {
    return [ElfSectionHeaderType$Null_getInstance(), ElfSectionHeaderType$ProgramBits_getInstance(), ElfSectionHeaderType$SYMTAB_getInstance(), ElfSectionHeaderType$STRTAB_getInstance(), ElfSectionHeaderType$RELA_getInstance(), ElfSectionHeaderType$HASH_getInstance(), ElfSectionHeaderType$DYNAMIC_getInstance(), ElfSectionHeaderType$NOTE_getInstance(), ElfSectionHeaderType$NoBits_getInstance(), ElfSectionHeaderType$Relocation_getInstance(), ElfSectionHeaderType$SHLIB_getInstance(), ElfSectionHeaderType$DYNSYM_getInstance(), ElfSectionHeaderType$LOPROC_getInstance(), ElfSectionHeaderType$HIPROC_getInstance(), ElfSectionHeaderType$LOUSER_getInstance(), ElfSectionHeaderType$HIUSER_getInstance(), ElfSectionHeaderType$PrxRelocation_getInstance(), ElfSectionHeaderType$PrxRelocation_FW5_getInstance()];
  }
  ElfSectionHeaderType.values = ElfSectionHeaderType$values;
  function ElfSectionHeaderType$valueOf(name) {
    switch (name) {
      case 'Null':
        return ElfSectionHeaderType$Null_getInstance();
      case 'ProgramBits':
        return ElfSectionHeaderType$ProgramBits_getInstance();
      case 'SYMTAB':
        return ElfSectionHeaderType$SYMTAB_getInstance();
      case 'STRTAB':
        return ElfSectionHeaderType$STRTAB_getInstance();
      case 'RELA':
        return ElfSectionHeaderType$RELA_getInstance();
      case 'HASH':
        return ElfSectionHeaderType$HASH_getInstance();
      case 'DYNAMIC':
        return ElfSectionHeaderType$DYNAMIC_getInstance();
      case 'NOTE':
        return ElfSectionHeaderType$NOTE_getInstance();
      case 'NoBits':
        return ElfSectionHeaderType$NoBits_getInstance();
      case 'Relocation':
        return ElfSectionHeaderType$Relocation_getInstance();
      case 'SHLIB':
        return ElfSectionHeaderType$SHLIB_getInstance();
      case 'DYNSYM':
        return ElfSectionHeaderType$DYNSYM_getInstance();
      case 'LOPROC':
        return ElfSectionHeaderType$LOPROC_getInstance();
      case 'HIPROC':
        return ElfSectionHeaderType$HIPROC_getInstance();
      case 'LOUSER':
        return ElfSectionHeaderType$LOUSER_getInstance();
      case 'HIUSER':
        return ElfSectionHeaderType$HIUSER_getInstance();
      case 'PrxRelocation':
        return ElfSectionHeaderType$PrxRelocation_getInstance();
      case 'PrxRelocation_FW5':
        return ElfSectionHeaderType$PrxRelocation_FW5_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.ElfSectionHeaderType.' + name);
    }
  }
  ElfSectionHeaderType.valueOf_61zpoe$ = ElfSectionHeaderType$valueOf;
  function ElfSectionHeaderFlags(name, ordinal, id) {
    Enum.call(this);
    this.id_gpp47b$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ElfSectionHeaderFlags_initFields() {
    ElfSectionHeaderFlags_initFields = function () {
    };
    ElfSectionHeaderFlags$None_instance = new ElfSectionHeaderFlags('None', 0, 0);
    ElfSectionHeaderFlags$Write_instance = new ElfSectionHeaderFlags('Write', 1, 1);
    ElfSectionHeaderFlags$Allocate_instance = new ElfSectionHeaderFlags('Allocate', 2, 2);
    ElfSectionHeaderFlags$Execute_instance = new ElfSectionHeaderFlags('Execute', 3, 4);
    ElfSectionHeaderFlags$Companion_getInstance();
  }
  Object.defineProperty(ElfSectionHeaderFlags.prototype, 'id', {
    get: function () {
      return this.id_gpp47b$_0;
    }
  });
  var ElfSectionHeaderFlags$None_instance;
  function ElfSectionHeaderFlags$None_getInstance() {
    ElfSectionHeaderFlags_initFields();
    return ElfSectionHeaderFlags$None_instance;
  }
  var ElfSectionHeaderFlags$Write_instance;
  function ElfSectionHeaderFlags$Write_getInstance() {
    ElfSectionHeaderFlags_initFields();
    return ElfSectionHeaderFlags$Write_instance;
  }
  var ElfSectionHeaderFlags$Allocate_instance;
  function ElfSectionHeaderFlags$Allocate_getInstance() {
    ElfSectionHeaderFlags_initFields();
    return ElfSectionHeaderFlags$Allocate_instance;
  }
  var ElfSectionHeaderFlags$Execute_instance;
  function ElfSectionHeaderFlags$Execute_getInstance() {
    ElfSectionHeaderFlags_initFields();
    return ElfSectionHeaderFlags$Execute_instance;
  }
  function ElfSectionHeaderFlags$Companion() {
    ElfSectionHeaderFlags$Companion_instance = this;
    BaseEnum.call(this, ElfSectionHeaderFlags$values());
  }
  ElfSectionHeaderFlags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [BaseEnum]
  };
  var ElfSectionHeaderFlags$Companion_instance = null;
  function ElfSectionHeaderFlags$Companion_getInstance() {
    ElfSectionHeaderFlags_initFields();
    if (ElfSectionHeaderFlags$Companion_instance === null) {
      new ElfSectionHeaderFlags$Companion();
    }
    return ElfSectionHeaderFlags$Companion_instance;
  }
  ElfSectionHeaderFlags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ElfSectionHeaderFlags',
    interfaces: [BaseEnum$Id, Enum]
  };
  function ElfSectionHeaderFlags$values() {
    return [ElfSectionHeaderFlags$None_getInstance(), ElfSectionHeaderFlags$Write_getInstance(), ElfSectionHeaderFlags$Allocate_getInstance(), ElfSectionHeaderFlags$Execute_getInstance()];
  }
  ElfSectionHeaderFlags.values = ElfSectionHeaderFlags$values;
  function ElfSectionHeaderFlags$valueOf(name) {
    switch (name) {
      case 'None':
        return ElfSectionHeaderFlags$None_getInstance();
      case 'Write':
        return ElfSectionHeaderFlags$Write_getInstance();
      case 'Allocate':
        return ElfSectionHeaderFlags$Allocate_getInstance();
      case 'Execute':
        return ElfSectionHeaderFlags$Execute_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.ElfSectionHeaderFlags.' + name);
    }
  }
  ElfSectionHeaderFlags.valueOf_61zpoe$ = ElfSectionHeaderFlags$valueOf;
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
    this.id_ibxb1o$_0 = id;
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
      return this.id_ibxb1o$_0;
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
    BaseEnum.call(this, ElfType$values());
  }
  ElfType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [BaseEnum]
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
    interfaces: [BaseEnum$Id, Enum]
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
      default:throwISE('No enum constant com.soywiz.kpspemu.format.ElfType.' + name);
    }
  }
  ElfType.valueOf_61zpoe$ = ElfType$valueOf;
  function ElfMachine(name, ordinal, id) {
    Enum.call(this);
    this.id_gk5h07$_0 = id;
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
      return this.id_gk5h07$_0;
    }
  });
  var ElfMachine$ALLEGREX_instance;
  function ElfMachine$ALLEGREX_getInstance() {
    ElfMachine_initFields();
    return ElfMachine$ALLEGREX_instance;
  }
  function ElfMachine$Companion() {
    ElfMachine$Companion_instance = this;
    BaseEnum.call(this, ElfMachine$values());
  }
  ElfMachine$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [BaseEnum]
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
    interfaces: [BaseEnum$Id, Enum]
  };
  function ElfMachine$values() {
    return [ElfMachine$ALLEGREX_getInstance()];
  }
  ElfMachine.values = ElfMachine$values;
  function ElfMachine$valueOf(name) {
    switch (name) {
      case 'ALLEGREX':
        return ElfMachine$ALLEGREX_getInstance();
      default:throwISE('No enum constant com.soywiz.kpspemu.format.ElfMachine.' + name);
    }
  }
  ElfMachine.valueOf_61zpoe$ = ElfMachine$valueOf;
  function ElfPspModuleFlags(name, ordinal, id) {
    Enum.call(this);
    this.id_h9p6ao$_0 = id;
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
      return this.id_h9p6ao$_0;
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
    BaseEnum.call(this, ElfPspModuleFlags$values());
  }
  ElfPspModuleFlags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [BaseEnum]
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
    interfaces: [BaseEnum$Id, Enum]
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
      default:throwISE('No enum constant com.soywiz.kpspemu.format.ElfPspModuleFlags.' + name);
    }
  }
  ElfPspModuleFlags.valueOf_61zpoe$ = ElfPspModuleFlags$valueOf;
  function ElfPspLibFlags(name, ordinal, id) {
    Enum.call(this);
    this.id_hf9ym7$_0 = id;
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
      return this.id_hf9ym7$_0;
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
    BaseEnum.call(this, ElfPspLibFlags$values());
  }
  ElfPspLibFlags$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [BaseEnum]
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
    interfaces: [BaseEnum$Id, Enum]
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
      default:throwISE('No enum constant com.soywiz.kpspemu.format.ElfPspLibFlags.' + name);
    }
  }
  ElfPspLibFlags.valueOf_61zpoe$ = ElfPspLibFlags$valueOf;
  function ElfPspModuleNids(name, ordinal, id) {
    Enum.call(this);
    this.id_5deg7n$_0 = id;
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
      return this.id_5deg7n$_0;
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
    BaseEnum.call(this, ElfPspModuleNids$values());
  }
  ElfPspModuleNids$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [BaseEnum]
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
    interfaces: [BaseEnum$Id, Enum]
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
      default:throwISE('No enum constant com.soywiz.kpspemu.format.ElfPspModuleNids.' + name);
    }
  }
  ElfPspModuleNids.valueOf_61zpoe$ = ElfPspModuleNids$valueOf;
  function ElfRelocType(name, ordinal, id) {
    Enum.call(this);
    this.id_k08nrr$_0 = id;
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
      return this.id_k08nrr$_0;
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
    BaseEnum.call(this, ElfRelocType$values());
  }
  ElfRelocType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [BaseEnum]
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
    interfaces: [BaseEnum$Id, Enum]
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
      default:throwISE('No enum constant com.soywiz.kpspemu.format.ElfRelocType.' + name);
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
      return ElfRelocType$Companion_getInstance().get_za3lpa$(this.info >>> 0 & 255);
    }
  });
  function ElfReloc$Companion() {
    ElfReloc$Companion_instance = this;
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
  ElfProgramHeader.prototype.copy_cng25b$ = function (type, offset, virtualAddress, psysicalAddress, fileSize, memorySize, flags, alignment) {
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
    this.stream_e55iot$_0 = this.stream_e55iot$_0;
  }
  Object.defineProperty(ElfSectionHeader.prototype, 'stream', {
    get: function () {
      if (this.stream_e55iot$_0 == null)
        return throwUPAE('stream');
      return this.stream_e55iot$_0;
    },
    set: function (stream) {
      this.stream_e55iot$_0 = stream;
    }
  });
  function ElfSectionHeader$Companion() {
    ElfSectionHeader$Companion_instance = this;
  }
  ElfSectionHeader$Companion.prototype.invoke_39qel5$ = function (s) {
    return new ElfSectionHeader(readS32_le(s), '...', ElfSectionHeaderType$Companion_getInstance().get_za3lpa$(readS32_le(s)), ElfSectionHeaderFlags$Companion_getInstance().get_za3lpa$(readS32_le(s)), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s));
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
  ElfSectionHeader.prototype.copy_4mgpoh$ = function (nameOffset, name, type, flags, address, offset, size, link, info, addressAlign, entitySize) {
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
  function ElfPspModuleInfo(moduleAtributes, moduleVersion, name, gp, exportsStart, exportsEnd, importsStart, importsEnd) {
    ElfPspModuleInfo$Companion_getInstance();
    this.moduleAtributes = moduleAtributes;
    this.moduleVersion = moduleVersion;
    this.name = name;
    this.gp = gp;
    this.exportsStart = exportsStart;
    this.exportsEnd = exportsEnd;
    this.importsStart = importsStart;
    this.importsEnd = importsEnd;
    this.pc = 0;
  }
  function ElfPspModuleInfo$Companion() {
    ElfPspModuleInfo$Companion_instance = this;
  }
  ElfPspModuleInfo$Companion.prototype.invoke_39qel5$ = function (s) {
    return new ElfPspModuleInfo(readU16_le(s), readU16_le(s), readStringz_0(s, 28), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s), readS32_le(s));
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
    return this.gp;
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
  ElfPspModuleInfo.prototype.copy_dcsci8$ = function (moduleAtributes, moduleVersion, name, gp, exportsStart, exportsEnd, importsStart, importsEnd) {
    return new ElfPspModuleInfo(moduleAtributes === void 0 ? this.moduleAtributes : moduleAtributes, moduleVersion === void 0 ? this.moduleVersion : moduleVersion, name === void 0 ? this.name : name, gp === void 0 ? this.gp : gp, exportsStart === void 0 ? this.exportsStart : exportsStart, exportsEnd === void 0 ? this.exportsEnd : exportsEnd, importsStart === void 0 ? this.importsStart : importsStart, importsEnd === void 0 ? this.importsEnd : importsEnd);
  };
  ElfPspModuleInfo.prototype.toString = function () {
    return 'ElfPspModuleInfo(moduleAtributes=' + Kotlin.toString(this.moduleAtributes) + (', moduleVersion=' + Kotlin.toString(this.moduleVersion)) + (', name=' + Kotlin.toString(this.name)) + (', gp=' + Kotlin.toString(this.gp)) + (', exportsStart=' + Kotlin.toString(this.exportsStart)) + (', exportsEnd=' + Kotlin.toString(this.exportsEnd)) + (', importsStart=' + Kotlin.toString(this.importsStart)) + (', importsEnd=' + Kotlin.toString(this.importsEnd)) + ')';
  };
  ElfPspModuleInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.moduleAtributes) | 0;
    result = result * 31 + Kotlin.hashCode(this.moduleVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.gp) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportsStart) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportsEnd) | 0;
    result = result * 31 + Kotlin.hashCode(this.importsStart) | 0;
    result = result * 31 + Kotlin.hashCode(this.importsEnd) | 0;
    return result;
  };
  ElfPspModuleInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.moduleAtributes, other.moduleAtributes) && Kotlin.equals(this.moduleVersion, other.moduleVersion) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.gp, other.gp) && Kotlin.equals(this.exportsStart, other.exportsStart) && Kotlin.equals(this.exportsEnd, other.exportsEnd) && Kotlin.equals(this.importsStart, other.importsStart) && Kotlin.equals(this.importsEnd, other.importsEnd)))));
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
  function SceModule() {
    this.e_vhx781$_0 = this.e_vhx781$_0;
    this.rr_hzzurk$_0 = new RegisterReader();
    this.functions = lmapOf([]);
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
  function SceModule$ModuleFunction(name, uid, since, syscall, function_0) {
    this.name = name;
    this.uid = uid;
    this.since = since;
    this.syscall = syscall;
    this.function = function_0;
  }
  SceModule$ModuleFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModuleFunction',
    interfaces: []
  };
  SceModule$ModuleFunction.prototype.component1 = function () {
    return this.name;
  };
  SceModule$ModuleFunction.prototype.component2 = function () {
    return this.uid;
  };
  SceModule$ModuleFunction.prototype.component3 = function () {
    return this.since;
  };
  SceModule$ModuleFunction.prototype.component4 = function () {
    return this.syscall;
  };
  SceModule$ModuleFunction.prototype.component5 = function () {
    return this.function;
  };
  SceModule$ModuleFunction.prototype.copy_gh35x6$ = function (name, uid, since, syscall, function_0) {
    return new SceModule$ModuleFunction(name === void 0 ? this.name : name, uid === void 0 ? this.uid : uid, since === void 0 ? this.since : since, syscall === void 0 ? this.syscall : syscall, function_0 === void 0 ? this.function : function_0);
  };
  SceModule$ModuleFunction.prototype.toString = function () {
    return 'ModuleFunction(name=' + Kotlin.toString(this.name) + (', uid=' + Kotlin.toString(this.uid)) + (', since=' + Kotlin.toString(this.since)) + (', syscall=' + Kotlin.toString(this.syscall)) + (', function=' + Kotlin.toString(this.function)) + ')';
  };
  SceModule$ModuleFunction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.uid) | 0;
    result = result * 31 + Kotlin.hashCode(this.since) | 0;
    result = result * 31 + Kotlin.hashCode(this.syscall) | 0;
    result = result * 31 + Kotlin.hashCode(this.function) | 0;
    return result;
  };
  SceModule$ModuleFunction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.uid, other.uid) && Kotlin.equals(this.since, other.since) && Kotlin.equals(this.syscall, other.syscall) && Kotlin.equals(this.function, other.function)))));
  };
  function SceModule$registerFunctionRaw$lambda(closure$function) {
    return function (cpu, syscall) {
      closure$function.function(cpu);
      return Unit;
    };
  }
  SceModule.prototype.registerFunctionRaw_3nyq0u$ = function (function_0) {
    var $receiver = this.functions;
    var key = function_0.uid.toInt();
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
    this.registerFunctionRaw_3nyq0u$(new SceModule$ModuleFunction(name, uid, since, syscall, function_0));
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
  function NativeFunction(uid, since) {
    this.uid = uid;
    this.since = since;
  }
  NativeFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeFunction',
    interfaces: [Annotation]
  };
  function UtilsForUser() {
    SceModule.call(this);
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
    SceModule.call(this);
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
    SceModule.call(this);
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
    this.display.pixelFormat = pixelFormat;
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
    this.SCRATCHPAD = new Memory$MemorySegment('scatchpad', until(0, 65536));
    this.VIDEOMEM = new Memory$MemorySegment('videomem', until(67108864, 69206016));
    this.MAINMEM = new Memory$MemorySegment('mainmem', until(134217728, 167772160));
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
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kpspemu = package$soywiz.kpspemu || (package$soywiz.kpspemu = {});
  package$kpspemu.PspThread = PspThread;
  package$kpspemu.Emulator = Emulator;
  Object.defineProperty(package$kpspemu, 'Main', {
    get: Main_getInstance
  });
  Object.defineProperty(package$kpspemu, 'KpspemuModule', {
    get: KpspemuModule_getInstance
  });
  Object.defineProperty(package$kpspemu, 'MinifireElf', {
    get: get_MinifireElf
  });
  package$kpspemu.KpspemuMainScene = KpspemuMainScene;
  CpuState.Gpr = CpuState$Gpr;
  var package$cpu = package$kpspemu.cpu || (package$kpspemu.cpu = {});
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
  InstructionTable.prototype.VM = InstructionTable$VM;
  Object.defineProperty(package$cpu, 'InstructionTable', {
    get: InstructionTable_getInstance
  });
  package$cpu.InstructionType = InstructionType;
  package$cpu.kescape_pdl1vz$ = kescape;
  package$cpu.Syscalls = Syscalls;
  package$cpu.TraceSyscallHandler = TraceSyscallHandler;
  package$cpu.RegistrableSyscallHandler = RegistrableSyscallHandler;
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
  package$format.Elf = Elf;
  BaseEnum.Id = BaseEnum$Id;
  package$format.BaseEnum = BaseEnum;
  Object.defineProperty(ElfProgramHeaderType, 'Companion', {
    get: ElfProgramHeaderType$Companion_getInstance
  });
  package$format.ElfProgramHeaderType = ElfProgramHeaderType;
  Object.defineProperty(ElfSectionHeaderType, 'Null', {
    get: ElfSectionHeaderType$Null_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'ProgramBits', {
    get: ElfSectionHeaderType$ProgramBits_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'SYMTAB', {
    get: ElfSectionHeaderType$SYMTAB_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'STRTAB', {
    get: ElfSectionHeaderType$STRTAB_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'RELA', {
    get: ElfSectionHeaderType$RELA_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'HASH', {
    get: ElfSectionHeaderType$HASH_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'DYNAMIC', {
    get: ElfSectionHeaderType$DYNAMIC_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'NOTE', {
    get: ElfSectionHeaderType$NOTE_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'NoBits', {
    get: ElfSectionHeaderType$NoBits_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'Relocation', {
    get: ElfSectionHeaderType$Relocation_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'SHLIB', {
    get: ElfSectionHeaderType$SHLIB_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'DYNSYM', {
    get: ElfSectionHeaderType$DYNSYM_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'LOPROC', {
    get: ElfSectionHeaderType$LOPROC_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'HIPROC', {
    get: ElfSectionHeaderType$HIPROC_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'LOUSER', {
    get: ElfSectionHeaderType$LOUSER_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'HIUSER', {
    get: ElfSectionHeaderType$HIUSER_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'PrxRelocation', {
    get: ElfSectionHeaderType$PrxRelocation_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'PrxRelocation_FW5', {
    get: ElfSectionHeaderType$PrxRelocation_FW5_getInstance
  });
  Object.defineProperty(ElfSectionHeaderType, 'Companion', {
    get: ElfSectionHeaderType$Companion_getInstance
  });
  package$format.ElfSectionHeaderType = ElfSectionHeaderType;
  Object.defineProperty(ElfSectionHeaderFlags, 'None', {
    get: ElfSectionHeaderFlags$None_getInstance
  });
  Object.defineProperty(ElfSectionHeaderFlags, 'Write', {
    get: ElfSectionHeaderFlags$Write_getInstance
  });
  Object.defineProperty(ElfSectionHeaderFlags, 'Allocate', {
    get: ElfSectionHeaderFlags$Allocate_getInstance
  });
  Object.defineProperty(ElfSectionHeaderFlags, 'Execute', {
    get: ElfSectionHeaderFlags$Execute_getInstance
  });
  Object.defineProperty(ElfSectionHeaderFlags, 'Companion', {
    get: ElfSectionHeaderFlags$Companion_getInstance
  });
  package$format.ElfSectionHeaderFlags = ElfSectionHeaderFlags;
  Object.defineProperty(ElfProgramHeaderFlags, 'Companion', {
    get: ElfProgramHeaderFlags$Companion_getInstance
  });
  package$format.ElfProgramHeaderFlags = ElfProgramHeaderFlags;
  Object.defineProperty(ElfType, 'Executable', {
    get: ElfType$Executable_getInstance
  });
  Object.defineProperty(ElfType, 'Prx', {
    get: ElfType$Prx_getInstance
  });
  Object.defineProperty(ElfType, 'Companion', {
    get: ElfType$Companion_getInstance
  });
  package$format.ElfType = ElfType;
  Object.defineProperty(ElfMachine, 'ALLEGREX', {
    get: ElfMachine$ALLEGREX_getInstance
  });
  Object.defineProperty(ElfMachine, 'Companion', {
    get: ElfMachine$Companion_getInstance
  });
  package$format.ElfMachine = ElfMachine;
  Object.defineProperty(ElfPspModuleFlags, 'User', {
    get: ElfPspModuleFlags$User_getInstance
  });
  Object.defineProperty(ElfPspModuleFlags, 'Kernel', {
    get: ElfPspModuleFlags$Kernel_getInstance
  });
  Object.defineProperty(ElfPspModuleFlags, 'Companion', {
    get: ElfPspModuleFlags$Companion_getInstance
  });
  package$format.ElfPspModuleFlags = ElfPspModuleFlags;
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
  package$format.ElfPspLibFlags = ElfPspLibFlags;
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
  package$format.ElfPspModuleNids = ElfPspModuleNids;
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
  package$format.ElfRelocType = ElfRelocType;
  Object.defineProperty(ElfReloc, 'Companion', {
    get: ElfReloc$Companion_getInstance
  });
  package$format.ElfReloc = ElfReloc;
  Object.defineProperty(ElfProgramHeader, 'Companion', {
    get: ElfProgramHeader$Companion_getInstance
  });
  package$format.ElfProgramHeader = ElfProgramHeader;
  Object.defineProperty(ElfSectionHeader, 'Companion', {
    get: ElfSectionHeader$Companion_getInstance
  });
  package$format.ElfSectionHeader = ElfSectionHeader;
  Object.defineProperty(ElfPspModuleInfo, 'Companion', {
    get: ElfPspModuleInfo$Companion_getInstance
  });
  package$format.ElfPspModuleInfo = ElfPspModuleInfo;
  Object.defineProperty(ElfPspModuleImport, 'Companion', {
    get: ElfPspModuleImport$Companion_getInstance
  });
  package$format.ElfPspModuleImport = ElfPspModuleImport;
  var package$hle = package$kpspemu.hle || (package$kpspemu.hle = {});
  var package$modules = package$hle.modules || (package$hle.modules = {});
  package$modules.RegisterReader = RegisterReader;
  SceModule.ModuleFunction = SceModule$ModuleFunction;
  package$modules.SceModule = SceModule;
  package$modules.NativeFunction = NativeFunction;
  package$modules.UtilsForUser = UtilsForUser;
  package$modules.sceCtrl = sceCtrl;
  package$modules.sceDisplay = sceDisplay;
  var package$mem = package$kpspemu.mem || (package$kpspemu.mem = {});
  Object.defineProperty(package$mem, 'LWR_MASK', {
    get: function () {
      return LWR_MASK;
    }
  });
  Object.defineProperty(package$mem, 'LWR_SHIFT', {
    get: function () {
      return LWR_SHIFT;
    }
  });
  Object.defineProperty(package$mem, 'LWL_MASK', {
    get: function () {
      return LWL_MASK;
    }
  });
  Object.defineProperty(package$mem, 'LWL_SHIFT', {
    get: function () {
      return LWL_SHIFT;
    }
  });
  Object.defineProperty(package$mem, 'SWL_MASK', {
    get: function () {
      return SWL_MASK;
    }
  });
  Object.defineProperty(package$mem, 'SWL_SHIFT', {
    get: function () {
      return SWL_SHIFT;
    }
  });
  Object.defineProperty(package$mem, 'SWR_MASK', {
    get: function () {
      return SWR_MASK;
    }
  });
  Object.defineProperty(package$mem, 'SWR_SHIFT', {
    get: function () {
      return SWR_SHIFT;
    }
  });
  Object.defineProperty(Memory, 'Companion', {
    get: Memory$Companion_getInstance
  });
  Memory.MemorySegment = Memory$MemorySegment;
  package$mem.Memory = Memory;
  package$mem.DummyMemory = DummyMemory;
  package$mem.trace_w7fru8$ = trace;
  package$mem.TraceMemory = TraceMemory;
  package$mem.openSync_qe2j2c$ = openSync_0;
  package$mem.FastMemory = FastMemory;
  package$mem.SmallMemory = SmallMemory;
  package$mem.Ptr = Ptr;
  package$mem.MemPtr = MemPtr;
  MinifireElf = lazy(MinifireElf$lambda);
  MASK = 268435455;
  LWR_MASK = new Int32Array([0, (new Kotlin.Long(-16777216, 0)).toInt(), (new Kotlin.Long(-65536, 0)).toInt(), (new Kotlin.Long(-256, 0)).toInt()]);
  LWR_SHIFT = new Int32Array([0, 8, 16, 24]);
  LWL_MASK = new Int32Array([16777215, 65535, 255, 0]);
  LWL_SHIFT = new Int32Array([24, 16, 8, 0]);
  SWL_MASK = new Int32Array([(new Kotlin.Long(-256, 0)).toInt(), (new Kotlin.Long(-65536, 0)).toInt(), (new Kotlin.Long(-16777216, 0)).toInt(), 0]);
  SWL_SHIFT = new Int32Array([24, 16, 8, 0]);
  SWR_MASK = new Int32Array([0, 255, 65535, 16777215]);
  SWR_SHIFT = new Int32Array([0, 8, 16, 24]);
  Kotlin.defineModule('kpspemu', _);
  return _;
}));

//# sourceMappingURL=kpspemu.js.map
