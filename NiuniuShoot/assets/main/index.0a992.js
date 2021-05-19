window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Bomb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24f86QXqU5F/4oZF67ocpsZ", "Bomb");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bomb = function(_super) {
      __extends(Bomb, _super);
      function Bomb() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isLeft = true;
        _this.isDown = true;
        return _this;
      }
      Bomb.prototype.start = function() {};
      Bomb.prototype.update = function(dt) {
        var dx = 3;
        var dy = 8;
        this.isLeft && (dx = 0 - dx);
        this.node.x += dx;
        this.isDown && (dy = 0 - dy);
        this.node.y += dy;
        this.isLeft && this.node.x < -450 && (this.isLeft = false);
        !this.isLeft && this.node.x > 650 && (this.isLeft = true);
        this.isDown && this.node.y < -100 && (this.isDown = false);
        !this.isDown && this.node.y > 600 && (this.isDown = true);
      };
      Bomb = __decorate([ ccclass ], Bomb);
      return Bomb;
    }(cc.Component);
    exports.default = Bomb;
    cc._RF.pop();
  }, {} ],
  Bonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b09acLV2+9Dd5c2g2jute/e", "Bonus");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bonus = function(_super) {
      __extends(Bonus, _super);
      function Bonus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.x = 0;
        _this.initSpeed = 20 + 60 * Math.random();
        return _this;
      }
      Bonus.prototype.start = function() {};
      Bonus.prototype.update = function(dt) {
        this.node.y -= -this.x + this.initSpeed;
        this.x <= this.initSpeed ? this.x += 1 : this.x = 0;
        this.node.y <= -4e3 && (this.node.y = 5e3);
      };
      Bonus = __decorate([ ccclass ], Bonus);
      return Bonus;
    }(cc.Component);
    exports.default = Bonus;
    cc._RF.pop();
  }, {} ],
  Book: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be06eGoNhVKXbNAbeXxk8wx", "Book");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isLeft = true;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        var dx = 12;
        this.isLeft && (dx = 0 - dx);
        this.node.x += dx;
        this.isLeft && this.node.x < -1e3 && (this.isLeft = false);
        !this.isLeft && this.node.x > 1e3 && (this.isLeft = true);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Cannon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0397akpLJ1FEqF6uTRoNZZG", "Cannon");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Common_1 = require("./Common");
    var Heart_1 = require("./Heart");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.startPos = null;
        _this.startAngle = null;
        _this.countLabel = null;
        _this.instructLabel = null;
        _this.heartIcon = null;
        _this.audioFire = null;
        _this.audioTarget = null;
        _this.audioExplode = null;
        _this.audioBonus = null;
        _this.audioBook = null;
        _this.audioMoney = null;
        _this.bgm = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.node.angle = 0;
        var node = cc.find("Canvas/shooting/count");
        this.countLabel = node.getComponent(cc.Label);
        this.countLabel.string = " x " + Common_1.default.cnt;
        var node2 = cc.find("Canvas/score/dialogue/greeting");
        Common_1.default.greetingLabel = node2.getComponent(cc.Label);
        Common_1.default.greetingLabel.string = "\u5403\u70b9\u90fd\u5fb7\u5417\uff1f";
        var instructNode = cc.find("Canvas/shooting/instruction");
        cc.tween(instructNode).to(.5, {
          scale: .8
        }).to(.5, {
          scale: 1
        }).union().repeatForever().start();
        this.node.on("touchstart", this.onTouchStart, this);
        this.node.on("touchmove", this.onTouchMove, this);
        this.node.on("touchend", this.onTouchEnd, this);
        this.node.on("touchcancel", this.onTouchEnd, this);
      };
      NewClass.prototype.start = function() {
        null != this.bgm && cc.audioEngine.play(this.bgm, true, .1);
      };
      NewClass.prototype.onTouchStart = function(e) {
        this.startPos = this.node.parent.convertToNodeSpaceAR(e.getLocation());
        this.startAngle = this.node.angle;
        var instructNode = cc.find("Canvas/shooting/instruction");
        instructNode.active = false;
      };
      NewClass.prototype.onTouchMove = function(e) {
        var pos = this.node.parent.convertToNodeSpaceAR(e.getLocation());
        var sweep_radian = pos.signAngle(this.startPos);
        var sweep_angle = 180 * sweep_radian / Math.PI;
        var angle = this.startAngle - sweep_angle;
        angle < -45 && (angle = -45);
        angle > 45 && (angle = 45);
        this.node.angle = angle;
      };
      NewClass.prototype.onTouchEnd = function(e) {
        Common_1.default.cnt > 0 && this.fire();
      };
      NewClass.prototype.fire = function() {
        null != this.audioFire && cc.audioEngine.play(this.audioFire, false, .1);
        if (null == this.heartIcon) {
          cc.log("set heart icon");
          return;
        }
        var angle = this.node.angle;
        var radian = angle * Math.PI / 180;
        var direction = cc.v2(-Math.sin(radian), Math.cos(radian));
        var heart = new cc.Node();
        var sprite = heart.addComponent(cc.Sprite);
        sprite.spriteFrame = this.heartIcon;
        heart.parent = this.node.parent;
        heart.angle = this.node.angle;
        var r = 250;
        var heart_x = r * direction.x;
        var heart_y = r * direction.y;
        heart.setPosition(cc.v3(heart_x, heart_y, 0));
        var ht = heart.addComponent(Heart_1.default);
        ht.direction = direction;
        ht.target = cc.find("Canvas/hk");
        ht.book = cc.find("Canvas/book");
        ht.bomb = cc.find("Canvas/bomb");
        ht.wyz = cc.find("Canvas/wyz");
        ht.pyy = cc.find("Canvas/pyy");
        ht.money = cc.find("Canvas/money");
        ht.bonus_pyy = cc.find("Canvas/pyy");
        ht.bonus_wyz = cc.find("Canvas/wyz");
        ht.wyzInitPos = cc.find("Canvas/wyz").getPosition();
        ht.pyyInitPos = cc.find("Canvas/pyy").getPosition();
        ht.audioExplode = this.audioExplode;
        ht.audioBonus = this.audioBonus;
        ht.audioTarget = this.audioTarget;
        ht.audioBook = this.audioBook;
        ht.audioMoney = this.audioMoney;
        Common_1.default.cnt = Common_1.default.cnt - 1;
        this.countLabel.getComponent(cc.Label).string = " \xd7 " + Common_1.default.cnt;
      };
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "heartIcon", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "audioFire", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "audioTarget", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "audioExplode", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "audioBonus", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "audioBook", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "audioMoney", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "bgm", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Common": "Common",
    "./Heart": "Heart"
  } ],
  Common: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7337dHLznlApY+f7bKNU5XC", "Common");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Result_1 = require("./Result");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Common = function(_super) {
      __extends(Common, _super);
      function Common() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Common_1 = Common;
      Common.prototype.onLoad = function() {
        Common_1.result = cc.find("Canvas/score").getComponent(Result_1.default);
      };
      Common.prototype.start = function() {};
      Common.resetGame = function() {
        Common_1.score = 0;
        Common_1.cnt = 30;
      };
      Common.showResultDialog = function() {
        var node = cc.find("Canvas/score");
        node.active = true;
        var ctrl = node.getComponent(Result_1.default);
        ctrl.show();
      };
      var Common_1;
      Common.score = 0;
      Common.result = null;
      Common.cnt = 30;
      Common.greetingLabel = null;
      Common = Common_1 = __decorate([ ccclass ], Common);
      return Common;
    }(cc.Component);
    exports.default = Common;
    cc._RF.pop();
  }, {
    "./Result": "Result"
  } ],
  Heart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9e38hBn5RFgKahW2DFZI7Z", "Heart");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Common_1 = require("./Common");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.direction = null;
        _this.target = null;
        _this.book = null;
        _this.bomb = null;
        _this.money = null;
        _this.wyz = null;
        _this.pyy = null;
        _this.bonus_pyy = null;
        _this.bonus_wyz = null;
        _this.wyzInitPos = null;
        _this.pyyInitPos = null;
        _this.audioExplode = null;
        _this.audioTarget = null;
        _this.audioBonus = null;
        _this.audioBook = null;
        _this.audioMoney = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.schedule(this.onTimer, .016);
      };
      NewClass.prototype.onTimer = function() {
        this.bombHit() && this.bombBoom();
        this.node.x < -450 && this.node.x > -600 && this.wyzHit() && this.getBonus();
        this.node.x > 450 && this.node.x < 600 && this.pyyHit() && this.getBonus();
        this.node.y > 900 && this.node.y < 1e3 && this.bookHit() && this.bookReward();
        this.node.y > 1200 && this.node.y < 1250 && this.isHit() && this.success();
        if (this.node.y > 1700) {
          this.moneyHit() && this.moneyGain();
          this.failed();
          return;
        }
        var speed = 30;
        var dx = speed * this.direction.x;
        var dy = speed * this.direction.y;
        this.node.x += dx;
        this.node.y += dy;
      };
      NewClass.prototype.dismiss = function() {
        this.node.destroy();
        Common_1.default.cnt <= 0 && Common_1.default.showResultDialog();
      };
      NewClass.prototype.isHit = function() {
        var targetPos = this.getWorldLocation(this.target);
        var selfPos = this.getWorldLocation(this.node);
        var distance = Math.abs(targetPos.x - selfPos.x);
        if (distance < 100) return true;
        return false;
      };
      NewClass.prototype.bookHit = function() {
        var bookPos = this.getWorldLocation(this.book);
        var selfPos = this.getWorldLocation(this.node);
        var distance = Math.abs(bookPos.x - selfPos.x);
        if (distance < 100) return true;
        return false;
      };
      NewClass.prototype.moneyHit = function() {
        var bookPos = this.getWorldLocation(this.money);
        var selfPos = this.getWorldLocation(this.node);
        var distance = Math.abs(bookPos.x - selfPos.x);
        if (distance < 50) return true;
        return false;
      };
      NewClass.prototype.getWorldLocation = function(node) {
        var pos = node.getPosition();
        return node.parent.convertToNodeSpaceAR(pos);
      };
      NewClass.prototype.success = function() {
        this.explode();
        this.cheer(500);
        this.node.destroy();
        Common_1.default.score += 500;
        Common_1.default.greetingLabel.getComponent(cc.Label).string = "\u91d1\u5361\u94f6\u5361\u7eff\u5361\u9ed1\u5361\n\u4e0d\u5982\u6211\u7684\u597d\u8d3a\u5361";
      };
      NewClass.prototype.bookReward = function() {
        null != this.audioBook && cc.audioEngine.play(this.audioBook, false, .1);
        this.cheer(100);
        this.node.destroy();
        Common_1.default.score += 100;
        Common_1.default.greetingLabel.getComponent(cc.Label).string = "\u903b\u8f91\u5b66\u662f\u7814\u7a76\u601d\u7ef4\u3001\n\u601d\u7ef4\u7684\u89c4\u5b9a\n\u548c\u89c4\u5f8b\u7684\u79d1\u5b66\u3002";
      };
      NewClass.prototype.moneyGain = function() {
        null != this.audioMoney && cc.audioEngine.play(this.audioMoney, false, .1);
        this.cheer(1e6);
        this.node.destroy();
        Common_1.default.score += 1e6;
        Common_1.default.greetingLabel.getComponent(cc.Label).string = "\u6253\u51fb\u7535\u4fe1\u8bc8\u9a97\n\u4fdd\u969c\u8d44\u91d1\u5b89\u5168";
      };
      NewClass.prototype.failed = function() {
        this.dismiss();
      };
      NewClass.prototype.explode = function() {
        null != this.audioTarget && cc.audioEngine.play(this.audioTarget, false, 1);
      };
      NewClass.prototype.cheer = function(number) {
        var node = new cc.Node();
        var label = node.addComponent(cc.Label);
        label.string = "+ " + number;
        node.color = new cc.Color(255, 192, 203);
        node.parent = this.node.parent;
        node.setPosition(cc.v3(100, 250, 0));
        node.opacity = 200;
        cc.tween(node).to(.3, {
          scale: 1.3
        }).to(.2, {
          opacity: 0
        }).call(function() {
          node.destroy;
        }).start();
      };
      NewClass.prototype.bombHit = function() {
        var bombPos = this.getWorldLocation(this.bomb);
        var selfPos = this.getWorldLocation(this.node);
        bombPos.y = bombPos.y + 700 + 960;
        var distance_x = Math.abs(bombPos.x - selfPos.x);
        var distance_y = Math.abs(bombPos.y - selfPos.y);
        var distance = Math.pow(distance_x, 2) + Math.pow(distance_y, 2);
        if (distance < 2e4) return true;
        return false;
      };
      NewClass.prototype.bombBoom = function() {
        this.boomExplodeFunc();
        this.node.destroy();
        Common_1.default.showResultDialog();
        0 == Common_1.default.score && (Common_1.default.greetingLabel.getComponent(cc.Label).string = "\u4eba\u4eba\u9632\u707e\u9632\u706b\n\u5bb6\u5bb6\u5e73\u5b89\u5feb\u4e50");
      };
      NewClass.prototype.boomExplodeFunc = function() {
        null != this.audioExplode && cc.audioEngine.play(this.audioExplode, false, .1);
      };
      NewClass.prototype.wyzHit = function() {
        var wyzPos = this.getWorldLocation(this.wyz);
        var selfPos = this.getWorldLocation(this.node);
        wyzPos.y = -wyzPos.y - 450;
        var distance = Math.abs(wyzPos.y - selfPos.y);
        if (distance < 100) return true;
        return false;
      };
      NewClass.prototype.pyyHit = function() {
        var pyyPos = this.getWorldLocation(this.pyy);
        var selfPos = this.getWorldLocation(this.node);
        pyyPos.y = -pyyPos.y - 450;
        var distance = Math.abs(pyyPos.y - selfPos.y);
        if (distance < 100) return true;
        return false;
      };
      NewClass.prototype.getBonus = function() {
        null != this.audioBonus && cc.audioEngine.play(this.audioBonus, false, .1);
        this.node.destroy();
        this.cheer(1e4);
        Common_1.default.score += 1e4;
        Common_1.default.greetingLabel.getComponent(cc.Label).string = "nzh\u662f\u5feb\u4e50\u661f\u7403\n    \u6700\u7f8e\u5973\u5b69\uff01\n ----\u5434\u5f66\u7956";
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Common": "Common"
  } ],
  Money: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "669dfdcIXRLrpKS+KOBSmm4", "Money");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isLeft = false;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        var dx = 5;
        this.isLeft && (dx = 0 - dx);
        this.node.x += dx;
        this.isLeft && this.node.x < -300 && (this.isLeft = false);
        !this.isLeft && this.node.x > 300 && (this.isLeft = true);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Pyy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7443h2a5ZIm51Hqr86XTfW", "Pyy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.x = 0;
        _this.initSpeed = 30;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        this.node.y -= -this.x + this.initSpeed;
        this.x <= this.initSpeed ? this.x += 1 : this.x = 0;
        this.node.y <= -3e3 && (this.node.y = 3e3);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Result: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5fc3IuoExAfZshboMY2yLU", "Result");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Common_1 = require("./Common");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Result = function(_super) {
      __extends(Result, _super);
      function Result() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Result.prototype.onLoad = function() {
        this.node.active = false;
        var replayNode = cc.find("newgame", this.node);
        replayNode.on("touchstart", this.dismiss, this);
        var closeButton = cc.find("close", this.node);
        closeButton.on("touchstart", this.dismiss, this);
        this.node.on("touchstart", this.onTouchDisable, this);
        this.node.on("touchmove", this.onTouchDisable, this);
        this.node.on("touchend", this.onTouchDisable, this);
      };
      Result.prototype.start = function() {};
      Result.prototype.show = function() {
        var scoreNode = cc.find("number", this.node);
        var scoreLabel = scoreNode.getComponent(cc.Label);
        scoreLabel.string = Common_1.default.score + " pts";
      };
      Result.prototype.dismiss = function() {
        this.node.active = false;
        Common_1.default.resetGame();
      };
      Result.prototype.onTouchDisable = function(e) {
        e.stopPropagation();
      };
      Result = __decorate([ ccclass ], Result);
      return Result;
    }(cc.Component);
    exports.default = Result;
    cc._RF.pop();
  }, {
    "./Common": "Common"
  } ],
  Target: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bb300kbJBAioXmdKyvynUV", "Target");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Target = function(_super) {
      __extends(Target, _super);
      function Target() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isLeft = true;
        return _this;
      }
      Target.prototype.start = function() {};
      Target.prototype.update = function(dt) {
        var dx = 5;
        this.isLeft && (dx = 0 - dx);
        this.node.x += dx;
        this.isLeft && this.node.x < -480 && (this.isLeft = false);
        !this.isLeft && this.node.x > 480 && (this.isLeft = true);
      };
      Target = __decorate([ ccclass ], Target);
      return Target;
    }(cc.Component);
    exports.default = Target;
    cc._RF.pop();
  }, {} ],
  Welcome: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90a0fjfYtRGnJzWoWJtg6bL", "Welcome");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Welcome = function(_super) {
      __extends(Welcome, _super);
      function Welcome() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgm = null;
        return _this;
      }
      Welcome.prototype.onLoad = function() {
        var directNode = cc.find("Canvas/start");
        cc.tween(directNode).to(.5, {
          scale: .8
        }).to(.5, {
          scale: 1
        }).union().repeatForever().start();
        directNode.on("touchstart", this.toGame, this);
        directNode.on("touchmove", this.toGame, this);
        directNode.on("touchend", this.toGame, this);
      };
      Welcome.prototype.start = function() {
        null != this.bgm && cc.audioEngine.play(this.bgm, true, .1);
      };
      Welcome.prototype.toGame = function() {
        var directNode = cc.find("Canvas/start");
        var loading = directNode.getComponent(cc.Label);
        loading.string = "Loading...";
        cc.director.loadScene("Game");
        cc.audioEngine.stopAll();
      };
      __decorate([ property(cc.AudioClip) ], Welcome.prototype, "bgm", void 0);
      Welcome = __decorate([ ccclass ], Welcome);
      return Welcome;
    }(cc.Component);
    exports.default = Welcome;
    cc._RF.pop();
  }, {} ],
  Wyz: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fd50dzTQ5MWJnaR+mEjbxN", "Wyz");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.x = 0;
        _this.initSpeed = 20;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {
        this.node.y -= -this.x + this.initSpeed;
        this.x <= this.initSpeed ? this.x += 1 : this.x = 0;
        this.node.y <= -8e3 && (this.node.y = 8e3);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Bomb", "Bonus", "Book", "Cannon", "Common", "Heart", "Money", "Pyy", "Result", "Target", "Welcome", "Wyz" ]);