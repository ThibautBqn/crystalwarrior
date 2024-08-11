/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Animation.ts":
/*!**********************************!*\
  !*** ./src/classes/Animation.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Animation = void 0;
var Animation = /** @class */ (function () {
    function Animation(frames, tiles) {
        var _this = this;
        this.tiles = [];
        this.frames = frames;
        this.tileId = this.frames[0].tileid;
        this.duration = this.frames.reduce(function (a, b) { return a + b.duration; }, 0);
        this.frames.forEach(function (elem) {
            _this.tiles[elem.tileid] = tiles[elem.tileid];
        });
        // this.changeTileId();
    }
    // changeTileId() {
    //     let index = this.frames.findIndex(elem => {elem.tileid === this.tileId});
    //     setTimeout(() => {
    //         index = this.frames.length < index ? index : 0;
    //         this.tileId = this.frames[index].tileid;
    //         this.changeTileId()
    //     }, this.frames[index].duration);
    // }
    Animation.prototype.getTile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var time, frame;
            return __generator(this, function (_a) {
                time = Math.floor(performance.now() % this.duration);
                for (frame = 0; frame < this.frames.length; frame++) {
                    if (time < this.frames[frame].duration)
                        return [2 /*return*/, this.tiles[this.frames[frame].tileid]];
                    else
                        time -= this.frames[frame].duration;
                }
                return [2 /*return*/];
            });
        });
    };
    return Animation;
}());
exports.Animation = Animation;


/***/ }),

/***/ "./src/classes/Canvas.ts":
/*!*******************************!*\
  !*** ./src/classes/Canvas.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas = void 0;
var Canvas = /** @class */ (function () {
    function Canvas(element) {
        this.context = undefined;
        this.canvas = element;
        console.log(element);
    }
    Canvas.prototype.getContext = function () {
        if (!this.context) {
            this.context = this.canvas.getContext('2d');
        }
        return this.context;
    };
    Canvas.prototype.draw = function () {
        // this.childrenDrawble.forEach(child => child.draw(this.context))
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),

/***/ "./src/classes/Cursor.ts":
/*!*******************************!*\
  !*** ./src/classes/Cursor.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cursor = void 0;
var Cursor = /** @class */ (function () {
    function Cursor(height, width) {
        var _this = this;
        this.size = 64;
        this.ratio = 1;
        this.mapHeight = height - 1;
        this.mapWidth = width - 1;
        this.position = { x: 0, y: 0 };
        document.onkeydown = function (e) {
            console.log(e.code);
            // console.log(glob.cursor.decall)
            if (e.code === 'ArrowLeft' && _this.position.x > 0) {
                _this.position.x--;
            }
            if (e.code === 'ArrowRight' && _this.position.x < _this.mapWidth) {
                _this.position.x++;
            }
            if (e.code === 'ArrowUp' && _this.position.y > 0) {
                _this.position.y--;
            }
            if (e.code === 'ArrowDown' && _this.position.y < _this.mapHeight) {
                _this.position.y++;
            }
            console.log(_this.position);
        };
    }
    Cursor.prototype.draw = function (ctx, position) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.clearRect(0, 0, 576, 576);
                ctx.imageSmoothingEnabled = true;
                ctx.globalAlpha = 0.7;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(position.x * this.size + 38 * this.ratio, position.y * this.size + 2 * this.ratio);
                ctx.lineTo(position.x * this.size + 62 * this.ratio, position.y * this.size + 2 * this.ratio);
                ctx.lineTo(position.x * this.size + 62 * this.ratio, position.y * this.size + 25 * this.ratio);
                ctx.moveTo(position.x * this.size + 62 * this.ratio, position.y * this.size + 38 * this.ratio);
                ctx.lineTo(position.x * this.size + 62 * this.ratio, position.y * this.size + 62 * this.ratio);
                ctx.lineTo(position.x * this.size + 38 * this.ratio, position.y * this.size + 62 * this.ratio);
                ctx.moveTo(position.x * this.size + 25 * this.ratio, position.y * this.size + 62 * this.ratio);
                ctx.lineTo(position.x * this.size + 2 * this.ratio, position.y * this.size + 62 * this.ratio);
                ctx.lineTo(position.x * this.size + 2 * this.ratio, position.y * this.size + 38 * this.ratio);
                ctx.moveTo(position.x * this.size + 2 * this.ratio, position.y * this.size + 25 * this.ratio);
                ctx.lineTo(position.x * this.size + 2 * this.ratio, position.y * this.size + 2 * this.ratio);
                ctx.lineTo(position.x * this.size + 25 * this.ratio, position.y * this.size + 2 * this.ratio);
                ctx.strokeStyle = 'rgb(255,255,255)';
                ctx.stroke();
                return [2 /*return*/];
            });
        });
    };
    return Cursor;
}());
exports.Cursor = Cursor;


/***/ }),

/***/ "./src/classes/Drawer.ts":
/*!*******************************!*\
  !*** ./src/classes/Drawer.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Drawer = void 0;
var Drawer = /** @class */ (function () {
    function Drawer() {
        this.viewHeight = 9;
        this.viewWidth = 9;
        this.viewOrigin = { x: 0, y: 0 };
        this.origin = { x: 0, y: 0 };
        console.log("Drawer.ts - constructor");
    }
    Drawer.prototype.init = function (gameData, tiles) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.mapHeight = gameData.data.height;
                this.mapWidth = gameData.data.width;
                this.layers = gameData.data.layers;
                this.canvas = document.getElementsByTagName("canvas");
                this.tiles = tiles;
                console.log(this.canvas);
                return [2 /*return*/];
            });
        });
    };
    Drawer.prototype.doWhatYouWereCreatedToDo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.defineOrigin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.drawLayers()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.drawCursor()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Drawer.prototype.defineOrigin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var position, xMiddle, yMiddle;
            return __generator(this, function (_a) {
                position = __assign({}, this.cursor.position);
                xMiddle = Math.floor(this.viewWidth / 2);
                yMiddle = Math.floor(this.viewHeight / 2);
                this.origin.x = this.cursor.position.x - xMiddle;
                this.origin.y = this.cursor.position.y - yMiddle;
                if (this.origin.x < 0) {
                    this.origin.x = 0;
                }
                if (this.origin.y < 0) {
                    this.origin.y = 0;
                }
                if (this.origin.x > this.mapWidth - this.viewWidth) {
                    this.origin.x = this.mapWidth - this.viewWidth;
                }
                if (this.origin.y > this.mapHeight - this.viewHeight) {
                    this.origin.y = this.mapHeight - this.viewHeight;
                }
                return [2 /*return*/];
            });
        });
    };
    Drawer.prototype.drawLayers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.layers.forEach(function (item, index) {
                    var tmpLayer = item.matrice.map(function (y) { return y.filter(function (value, x) { return x >= _this.origin.x && x < _this.origin.x + _this.viewWidth; }); })
                        .filter(function (value, y) { return y >= _this.origin.y && y < _this.origin.y + _this.viewHeight; });
                    var canvas = _this.canvas[item.name];
                    if (canvas.getContext) {
                        var ctx = canvas.getContext('2d');
                    }
                    ctx.imageSmoothingEnabled = false;
                    ctx.clearRect(0, 0, 576, 576);
                    for (var y = 0; y < tmpLayer.length; y++) {
                        for (var x = 0; x < tmpLayer[y].length; x++) {
                            if (!tmpLayer[y][x])
                                continue;
                            _this.tiles[tmpLayer[y][x] - 1].draw(ctx, { x: x, y: y });
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Drawer.prototype.drawCursor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var position, xMiddle, yMiddle, canvas, context;
            return __generator(this, function (_a) {
                position = __assign({}, this.cursor.position);
                xMiddle = Math.floor(this.viewWidth / 2);
                yMiddle = Math.floor(this.viewHeight / 2);
                if (this.cursor.position.x > xMiddle) {
                    position.x = xMiddle;
                }
                if (this.cursor.position.x >= this.mapWidth - xMiddle) {
                    position.x = 2 * xMiddle + this.cursor.position.x - this.mapWidth + 1;
                }
                if (this.cursor.position.y > yMiddle) {
                    position.y = yMiddle;
                }
                if (this.cursor.position.y >= this.mapHeight - yMiddle) {
                    position.y = 2 * yMiddle + this.cursor.position.y - this.mapHeight + 1;
                }
                canvas = this.canvas['ui-layer'];
                context = undefined;
                if (canvas.getContext) {
                    context = canvas.getContext('2d');
                }
                if (!context) {
                    return [2 /*return*/];
                }
                ;
                context.imageSmoothingEnabled = false;
                context.clearRect(0, 0, 576, 576);
                this.cursor.draw(context, position);
                return [2 /*return*/];
            });
        });
    };
    return Drawer;
}());
exports.Drawer = Drawer;


/***/ }),

/***/ "./src/classes/Tile.ts":
/*!*****************************!*\
  !*** ./src/classes/Tile.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tile = void 0;
var Tile = /** @class */ (function () {
    function Tile(id, img, nbColumns, frames) {
        if (frames === void 0) { frames = undefined; }
        this.height = 16;
        this.width = 16;
        this.size = 64;
        this.animation = undefined;
        this.id = id;
        this.img = img;
        this.filePosition = {
            x: (this.id % nbColumns),
            y: Math.floor(this.id / nbColumns)
        };
        this.frames = frames;
    }
    Tile.prototype.draw = function (ctx, position) {
        return __awaiter(this, void 0, void 0, function () {
            var filePosition, tile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filePosition = { x: this.filePosition.x, y: this.filePosition.y };
                        if (!this.animation) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.animation.getTile()];
                    case 1:
                        tile = _a.sent();
                        // if(this.id === 225 || this.id === 226) {
                        //     console.log(tile);
                        // }
                        filePosition = {
                            x: tile.filePosition.x,
                            y: tile.filePosition.y,
                        };
                        _a.label = 2;
                    case 2:
                        ctx.drawImage(this.img, filePosition.x * this.width, filePosition.y * this.height, this.width, this.height, position.x * this.size, position.y * this.size, this.size, this.size);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Tile;
}());
exports.Tile = Tile;


/***/ }),

/***/ "./src/classes/index.ts":
/*!******************************!*\
  !*** ./src/classes/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tile = exports.Drawer = exports.Cursor = exports.Canvas = exports.Animation = void 0;
var Canvas_1 = __webpack_require__(/*! ./Canvas */ "./src/classes/Canvas.ts");
Object.defineProperty(exports, "Canvas", ({ enumerable: true, get: function () { return Canvas_1.Canvas; } }));
var Drawer_1 = __webpack_require__(/*! ./Drawer */ "./src/classes/Drawer.ts");
Object.defineProperty(exports, "Drawer", ({ enumerable: true, get: function () { return Drawer_1.Drawer; } }));
var Tile_1 = __webpack_require__(/*! ./Tile */ "./src/classes/Tile.ts");
Object.defineProperty(exports, "Tile", ({ enumerable: true, get: function () { return Tile_1.Tile; } }));
var Animation_1 = __webpack_require__(/*! ./Animation */ "./src/classes/Animation.ts");
Object.defineProperty(exports, "Animation", ({ enumerable: true, get: function () { return Animation_1.Animation; } }));
var Cursor_1 = __webpack_require__(/*! ./Cursor */ "./src/classes/Cursor.ts");
Object.defineProperty(exports, "Cursor", ({ enumerable: true, get: function () { return Cursor_1.Cursor; } }));


/***/ }),

/***/ "./src/gameData.ts":
/*!*************************!*\
  !*** ./src/gameData.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameData = void 0;
var GameData = /** @class */ (function () {
    function GameData(round) {
        if (round === void 0) { round = 5; }
        this.round = round;
    }
    GameData.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, buffer, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3000/getmaps/".concat(this.round))];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.body.getReader().read()];
                    case 2:
                        buffer = _b.sent();
                        _a = this;
                        return [4 /*yield*/, JSON.parse(new TextDecoder().decode(buffer.value))];
                    case 3:
                        _a.data = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameData.prototype.setRound = function (round) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.round = round;
                        return [4 /*yield*/, this.reload()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameData.prototype.reload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(GameData.prototype, "mapHeight", {
        get: function () {
            return this.data.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "mapWidth", {
        get: function () {
            return this.data.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "characters", {
        get: function () {
            return this.data.characters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "tileset", {
        get: function () {
            return this.data.tileset;
        },
        enumerable: false,
        configurable: true
    });
    return GameData;
}());
exports.GameData = GameData;


/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Global = void 0;
var classes_1 = __webpack_require__(/*! ./classes */ "./src/classes/index.ts");
var gameData_1 = __webpack_require__(/*! ./gameData */ "./src/gameData.ts");
var Global = /** @class */ (function () {
    function Global() {
        this.fps = 0;
        this.secondsPassed = 0;
        this.round = 5;
        this.tiles = [];
        this.drawer = new classes_1.Drawer();
        this.gameData = new gameData_1.GameData();
        console.log('hum', this);
    }
    Global.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Global - init() : called");
                        return [4 /*yield*/, this.gameData.init()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.initTiles()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.initAnimation()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.drawer.init(this.gameData, this.tiles)];
                    case 4:
                        _a.sent();
                        this.drawer.cursor = new classes_1.Cursor(this.gameData.mapHeight, this.gameData.mapWidth);
                        return [2 /*return*/];
                }
            });
        });
    };
    Global.prototype.initTiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var img = new Image();
                        img.onload = function () {
                            var _a;
                            console.log("initTiles() - img.onload() callback - gameData.tileset.tilecount: ".concat(_this.gameData.tileset.tilecount, " - this.gameData.tileset.columns: ").concat(_this.gameData.tileset.columns));
                            for (var y = 0; y < (_this.gameData.tileset.tilecount / _this.gameData.tileset.columns); y++) {
                                var _loop_1 = function (x) {
                                    var tileId = x + y * _this.gameData.tileset.columns;
                                    var frames_1 = ((_a = _this.gameData.data.tileset.tiles.filter(function (item) { return item.id === tileId; })[0]) === null || _a === void 0 ? void 0 : _a.animation) || [];
                                    _this.tiles[tileId] = new classes_1.Tile(tileId, img, _this.gameData.tileset.columns, frames_1);
                                    if (y == (_this.gameData.tileset.tilecount / _this.gameData.tileset.columns) - 1 && x == _this.gameData.tileset.columns - 1)
                                        resolve(true);
                                };
                                for (var x = 0; x < _this.gameData.tileset.columns; x++) {
                                    _loop_1(x);
                                }
                            }
                        };
                        img.src = 'img/worldTiles.png';
                    })];
            });
        });
    };
    Global.prototype.initAnimation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.tiles
                    .filter(function (tile) { return tile.frames.length; })
                    .forEach(function (tile) { return tile.animation = new classes_1.Animation(tile.frames, _this.tiles); });
                return [2 /*return*/];
            });
        });
    };
    Global.prototype.draw = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.drawer.doWhatYouWereCreatedToDo();
                return [2 /*return*/];
            });
        });
    };
    return Global;
}());
exports.Global = Global;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
console.log("refactorization to module import");
console.log("trying import of testor module");
// import { Testor } from "./testor";
var global_1 = __webpack_require__(/*! ./global */ "./src/global.ts");
// import { GameData } from "./gameData";
// import { Position } from "./interfaces";
// import { Tile } from "./classes";
// enum Phase {
//     fight = "fight",
//     tactical = "tactical"
// }
// interface Global {
//     time: Date,
//     fps: number,
//     secondsPassed: number,
//     phase: Phase,
//     cursor: Cursor
//     charactersPosition: Character[],
//     background: Background
// }
// interface Cursor {
//     position: Position,
//     selected: Character
// }
// interface Character {
//     position: Position
// }
// interface Background {
//     position: Position
// }
var global = new global_1.Global();
// const glob: Global = {
//     time: new Date,
//     fps: 0,
//     secondsPassed: 0,
//     phase: Phase.tactical,
//     cursor: {
//         position: {
//             x: 0,
//             y: 0
//         },
//         selected: undefined
//     },
//     charactersPosition: [],
//     background: {
//         position: {
//             x: 0,
//             y: 0
//         }
//     }
// };
// let gameData: GameData;
function main(now) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    global.time = now;
                    global.fps++;
                    if (global.fps == 60) {
                        global.secondsPassed++;
                        if (global.secondsPassed % 5 === 0) {
                            console.log("Ho yeah !");
                        }
                        global.fps = 0;
                    }
                    return [4 /*yield*/, global.draw()];
                case 1:
                    _a.sent();
                    // if (global.phase == 'fight') {
                    //     return window.requestAnimationFrame(main);
                    // }
                    // if (global.phase == 'tactical') {
                    //     return window.requestAnimationFrame(main);
                    // }
                    return [2 /*return*/, window.requestAnimationFrame(main)];
            }
        });
    });
}
// async function initTiles(gameData) {
//     return new Promise((resolve, reject) => {
//         let img = new Image();
//         img.onload = function() {
//             console.log(`initTiles() - img.onload() callback - gameData.tileset.tilecount: ${gameData.tileset.tilecount} - gameData.tileset.columns: ${gameData.tileset.columns}`);
//             for (let y = 0 ; y < (gameData.tileset.tilecount / gameData.tileset.columns) ; y++) {
//                 for (let x = 0 ; x < gameData.tileset.columns ; x++) {
//                     global.tiles[x + y*gameData.tileset.columns] = new Tile(x + y*gameData.tileset.columns, img, gameData.tileset.columns)
//                     if (y == (gameData.tileset.tilecount / gameData.tileset.columns) - 1 && x == gameData.tileset.columns - 1)
//                         resolve(true);
//                 }
//             }
//         }
//         img.src = 'img/worldTiles.png';  
//     })
// }
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, global.init()];
                case 1:
                    _a.sent();
                    // gameData = new GameData(global.round);
                    // await gameData.init();
                    // console.log('gameData : ', gameData);
                    // console.log('gameData.mapHeight: ', gameData.mapHeight);
                    // console.log('Game initialysing...')
                    // await initTiles(gameData);
                    // console.log(global.tiles);
                    // await setAnimatedTiles()
                    // glob.background.limit = {x: data.width - 9, y: data.height - 9}
                    // glob.setMainController()
                    console.log('loading data');
                    console.log('loading sprites');
                    // await initCharacters()
                    // await initCharactersSides()
                    // glob.ia.initCharacters(glob.pcChar, glob.playerChar.sort((a,b) => {
                    //   return a.id == b.id ? 0 : a.id < b.id ? -1 : 1
                    // }))
                    // console.log(glob.characters)
                    console.log('loading keybinding');
                    // keyBinding()
                    console.log('Game loaded');
                    // glob.phase = 'tactical'
                    console.log('Game lunched');
                    window.requestAnimationFrame(main);
                    return [2 /*return*/];
            }
        });
    });
}
init();
// console.log(Testor);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7O1VDM0tBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlzdGFsLXdhcnJpb3JzLy4vc3JjL2NsYXNzZXMvQW5pbWF0aW9uLnRzIiwid2VicGFjazovL2NyeXN0YWwtd2FycmlvcnMvLi9zcmMvY2xhc3Nlcy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vY3J5c3RhbC13YXJyaW9ycy8uL3NyYy9jbGFzc2VzL0N1cnNvci50cyIsIndlYnBhY2s6Ly9jcnlzdGFsLXdhcnJpb3JzLy4vc3JjL2NsYXNzZXMvRHJhd2VyLnRzIiwid2VicGFjazovL2NyeXN0YWwtd2FycmlvcnMvLi9zcmMvY2xhc3Nlcy9UaWxlLnRzIiwid2VicGFjazovL2NyeXN0YWwtd2FycmlvcnMvLi9zcmMvY2xhc3Nlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9jcnlzdGFsLXdhcnJpb3JzLy4vc3JjL2dhbWVEYXRhLnRzIiwid2VicGFjazovL2NyeXN0YWwtd2FycmlvcnMvLi9zcmMvZ2xvYmFsLnRzIiwid2VicGFjazovL2NyeXN0YWwtd2FycmlvcnMvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9jcnlzdGFsLXdhcnJpb3JzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NyeXN0YWwtd2FycmlvcnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jcnlzdGFsLXdhcnJpb3JzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jcnlzdGFsLXdhcnJpb3JzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQW5pbWF0aW9uID0gdm9pZCAwO1xudmFyIEFuaW1hdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbmltYXRpb24oZnJhbWVzLCB0aWxlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRpbGVzID0gW107XG4gICAgICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgICAgICB0aGlzLnRpbGVJZCA9IHRoaXMuZnJhbWVzWzBdLnRpbGVpZDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuZnJhbWVzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSArIGIuZHVyYXRpb247IH0sIDApO1xuICAgICAgICB0aGlzLmZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICBfdGhpcy50aWxlc1tlbGVtLnRpbGVpZF0gPSB0aWxlc1tlbGVtLnRpbGVpZF07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVRpbGVJZCgpO1xuICAgIH1cbiAgICAvLyBjaGFuZ2VUaWxlSWQoKSB7XG4gICAgLy8gICAgIGxldCBpbmRleCA9IHRoaXMuZnJhbWVzLmZpbmRJbmRleChlbGVtID0+IHtlbGVtLnRpbGVpZCA9PT0gdGhpcy50aWxlSWR9KTtcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgICAgICBpbmRleCA9IHRoaXMuZnJhbWVzLmxlbmd0aCA8IGluZGV4ID8gaW5kZXggOiAwO1xuICAgIC8vICAgICAgICAgdGhpcy50aWxlSWQgPSB0aGlzLmZyYW1lc1tpbmRleF0udGlsZWlkO1xuICAgIC8vICAgICAgICAgdGhpcy5jaGFuZ2VUaWxlSWQoKVxuICAgIC8vICAgICB9LCB0aGlzLmZyYW1lc1tpbmRleF0uZHVyYXRpb24pO1xuICAgIC8vIH1cbiAgICBBbmltYXRpb24ucHJvdG90eXBlLmdldFRpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aW1lLCBmcmFtZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aW1lID0gTWF0aC5mbG9vcihwZXJmb3JtYW5jZS5ub3coKSAlIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGZvciAoZnJhbWUgPSAwOyBmcmFtZSA8IHRoaXMuZnJhbWVzLmxlbmd0aDsgZnJhbWUrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA8IHRoaXMuZnJhbWVzW2ZyYW1lXS5kdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnRpbGVzW3RoaXMuZnJhbWVzW2ZyYW1lXS50aWxlaWRdXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSAtPSB0aGlzLmZyYW1lc1tmcmFtZV0uZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb247XG59KCkpO1xuZXhwb3J0cy5BbmltYXRpb24gPSBBbmltYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2FudmFzID0gdm9pZCAwO1xudmFyIENhbnZhcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYW52YXMoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZWxlbWVudDtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgfVxuICAgIENhbnZhcy5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgICB9O1xuICAgIENhbnZhcy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhpcy5jaGlsZHJlbkRyYXdibGUuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5kcmF3KHRoaXMuY29udGV4dCkpXG4gICAgfTtcbiAgICByZXR1cm4gQ2FudmFzO1xufSgpKTtcbmV4cG9ydHMuQ2FudmFzID0gQ2FudmFzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkN1cnNvciA9IHZvaWQgMDtcbnZhciBDdXJzb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ3Vyc29yKGhlaWdodCwgd2lkdGgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zaXplID0gNjQ7XG4gICAgICAgIHRoaXMucmF0aW8gPSAxO1xuICAgICAgICB0aGlzLm1hcEhlaWdodCA9IGhlaWdodCAtIDE7XG4gICAgICAgIHRoaXMubWFwV2lkdGggPSB3aWR0aCAtIDE7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY29kZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhnbG9iLmN1cnNvci5kZWNhbGwpXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dMZWZ0JyAmJiBfdGhpcy5wb3NpdGlvbi54ID4gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnBvc2l0aW9uLngtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1JpZ2h0JyAmJiBfdGhpcy5wb3NpdGlvbi54IDwgX3RoaXMubWFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wb3NpdGlvbi54Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dVcCcgJiYgX3RoaXMucG9zaXRpb24ueSA+IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wb3NpdGlvbi55LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dEb3duJyAmJiBfdGhpcy5wb3NpdGlvbi55IDwgX3RoaXMubWFwSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucG9zaXRpb24ueSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coX3RoaXMucG9zaXRpb24pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBDdXJzb3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA1NzYsIDU3Nik7XG4gICAgICAgICAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC43O1xuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHBvc2l0aW9uLnggKiB0aGlzLnNpemUgKyAzOCAqIHRoaXMucmF0aW8sIHBvc2l0aW9uLnkgKiB0aGlzLnNpemUgKyAyICogdGhpcy5yYXRpbyk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhwb3NpdGlvbi54ICogdGhpcy5zaXplICsgNjIgKiB0aGlzLnJhdGlvLCBwb3NpdGlvbi55ICogdGhpcy5zaXplICsgMiAqIHRoaXMucmF0aW8pO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8ocG9zaXRpb24ueCAqIHRoaXMuc2l6ZSArIDYyICogdGhpcy5yYXRpbywgcG9zaXRpb24ueSAqIHRoaXMuc2l6ZSArIDI1ICogdGhpcy5yYXRpbyk7XG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwb3NpdGlvbi54ICogdGhpcy5zaXplICsgNjIgKiB0aGlzLnJhdGlvLCBwb3NpdGlvbi55ICogdGhpcy5zaXplICsgMzggKiB0aGlzLnJhdGlvKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHBvc2l0aW9uLnggKiB0aGlzLnNpemUgKyA2MiAqIHRoaXMucmF0aW8sIHBvc2l0aW9uLnkgKiB0aGlzLnNpemUgKyA2MiAqIHRoaXMucmF0aW8pO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8ocG9zaXRpb24ueCAqIHRoaXMuc2l6ZSArIDM4ICogdGhpcy5yYXRpbywgcG9zaXRpb24ueSAqIHRoaXMuc2l6ZSArIDYyICogdGhpcy5yYXRpbyk7XG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwb3NpdGlvbi54ICogdGhpcy5zaXplICsgMjUgKiB0aGlzLnJhdGlvLCBwb3NpdGlvbi55ICogdGhpcy5zaXplICsgNjIgKiB0aGlzLnJhdGlvKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHBvc2l0aW9uLnggKiB0aGlzLnNpemUgKyAyICogdGhpcy5yYXRpbywgcG9zaXRpb24ueSAqIHRoaXMuc2l6ZSArIDYyICogdGhpcy5yYXRpbyk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhwb3NpdGlvbi54ICogdGhpcy5zaXplICsgMiAqIHRoaXMucmF0aW8sIHBvc2l0aW9uLnkgKiB0aGlzLnNpemUgKyAzOCAqIHRoaXMucmF0aW8pO1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9zaXRpb24ueCAqIHRoaXMuc2l6ZSArIDIgKiB0aGlzLnJhdGlvLCBwb3NpdGlvbi55ICogdGhpcy5zaXplICsgMjUgKiB0aGlzLnJhdGlvKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHBvc2l0aW9uLnggKiB0aGlzLnNpemUgKyAyICogdGhpcy5yYXRpbywgcG9zaXRpb24ueSAqIHRoaXMuc2l6ZSArIDIgKiB0aGlzLnJhdGlvKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHBvc2l0aW9uLnggKiB0aGlzLnNpemUgKyAyNSAqIHRoaXMucmF0aW8sIHBvc2l0aW9uLnkgKiB0aGlzLnNpemUgKyAyICogdGhpcy5yYXRpbyk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigyNTUsMjU1LDI1NSknO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ3Vyc29yO1xufSgpKTtcbmV4cG9ydHMuQ3Vyc29yID0gQ3Vyc29yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EcmF3ZXIgPSB2b2lkIDA7XG52YXIgRHJhd2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERyYXdlcigpIHtcbiAgICAgICAgdGhpcy52aWV3SGVpZ2h0ID0gOTtcbiAgICAgICAgdGhpcy52aWV3V2lkdGggPSA5O1xuICAgICAgICB0aGlzLnZpZXdPcmlnaW4gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEcmF3ZXIudHMgLSBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG4gICAgRHJhd2VyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGdhbWVEYXRhLCB0aWxlcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBIZWlnaHQgPSBnYW1lRGF0YS5kYXRhLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFdpZHRoID0gZ2FtZURhdGEuZGF0YS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVycyA9IGdhbWVEYXRhLmRhdGEubGF5ZXJzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcyA9IHRpbGVzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEcmF3ZXIucHJvdG90eXBlLmRvV2hhdFlvdVdlcmVDcmVhdGVkVG9EbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmRlZmluZU9yaWdpbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5kcmF3TGF5ZXJzKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmRyYXdDdXJzb3IoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEcmF3ZXIucHJvdG90eXBlLmRlZmluZU9yaWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uLCB4TWlkZGxlLCB5TWlkZGxlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gX19hc3NpZ24oe30sIHRoaXMuY3Vyc29yLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB4TWlkZGxlID0gTWF0aC5mbG9vcih0aGlzLnZpZXdXaWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgIHlNaWRkbGUgPSBNYXRoLmZsb29yKHRoaXMudmlld0hlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luLnggPSB0aGlzLmN1cnNvci5wb3NpdGlvbi54IC0geE1pZGRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbi55ID0gdGhpcy5jdXJzb3IucG9zaXRpb24ueSAtIHlNaWRkbGU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3JpZ2luLnggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luLnggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcmlnaW4ueSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnaW4ueSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9yaWdpbi54ID4gdGhpcy5tYXBXaWR0aCAtIHRoaXMudmlld1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luLnggPSB0aGlzLm1hcFdpZHRoIC0gdGhpcy52aWV3V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9yaWdpbi55ID4gdGhpcy5tYXBIZWlnaHQgLSB0aGlzLnZpZXdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnaW4ueSA9IHRoaXMubWFwSGVpZ2h0IC0gdGhpcy52aWV3SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEcmF3ZXIucHJvdG90eXBlLmRyYXdMYXllcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcExheWVyID0gaXRlbS5tYXRyaWNlLm1hcChmdW5jdGlvbiAoeSkgeyByZXR1cm4geS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlLCB4KSB7IHJldHVybiB4ID49IF90aGlzLm9yaWdpbi54ICYmIHggPCBfdGhpcy5vcmlnaW4ueCArIF90aGlzLnZpZXdXaWR0aDsgfSk7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSwgeSkgeyByZXR1cm4geSA+PSBfdGhpcy5vcmlnaW4ueSAmJiB5IDwgX3RoaXMub3JpZ2luLnkgKyBfdGhpcy52aWV3SGVpZ2h0OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmNhbnZhc1tpdGVtLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNTc2LCA1NzYpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRtcExheWVyLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRtcExheWVyW3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0bXBMYXllclt5XVt4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGlsZXNbdG1wTGF5ZXJbeV1beF0gLSAxXS5kcmF3KGN0eCwgeyB4OiB4LCB5OiB5IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRHJhd2VyLnByb3RvdHlwZS5kcmF3Q3Vyc29yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24sIHhNaWRkbGUsIHlNaWRkbGUsIGNhbnZhcywgY29udGV4dDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IF9fYXNzaWduKHt9LCB0aGlzLmN1cnNvci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgeE1pZGRsZSA9IE1hdGguZmxvb3IodGhpcy52aWV3V2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICB5TWlkZGxlID0gTWF0aC5mbG9vcih0aGlzLnZpZXdIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJzb3IucG9zaXRpb24ueCA+IHhNaWRkbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueCA9IHhNaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnNvci5wb3NpdGlvbi54ID49IHRoaXMubWFwV2lkdGggLSB4TWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnggPSAyICogeE1pZGRsZSArIHRoaXMuY3Vyc29yLnBvc2l0aW9uLnggLSB0aGlzLm1hcFdpZHRoICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3Vyc29yLnBvc2l0aW9uLnkgPiB5TWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSB5TWlkZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJzb3IucG9zaXRpb24ueSA+PSB0aGlzLm1hcEhlaWdodCAtIHlNaWRkbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSA9IDIgKiB5TWlkZGxlICsgdGhpcy5jdXJzb3IucG9zaXRpb24ueSAtIHRoaXMubWFwSGVpZ2h0ICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FudmFzID0gdGhpcy5jYW52YXNbJ3VpLWxheWVyJ107XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA1NzYsIDU3Nik7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IuZHJhdyhjb250ZXh0LCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERyYXdlcjtcbn0oKSk7XG5leHBvcnRzLkRyYXdlciA9IERyYXdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UaWxlID0gdm9pZCAwO1xudmFyIFRpbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGlsZShpZCwgaW1nLCBuYkNvbHVtbnMsIGZyYW1lcykge1xuICAgICAgICBpZiAoZnJhbWVzID09PSB2b2lkIDApIHsgZnJhbWVzID0gdW5kZWZpbmVkOyB9XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTY7XG4gICAgICAgIHRoaXMud2lkdGggPSAxNjtcbiAgICAgICAgdGhpcy5zaXplID0gNjQ7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuaW1nID0gaW1nO1xuICAgICAgICB0aGlzLmZpbGVQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmlkICUgbmJDb2x1bW5zKSxcbiAgICAgICAgICAgIHk6IE1hdGguZmxvb3IodGhpcy5pZCAvIG5iQ29sdW1ucylcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgfVxuICAgIFRpbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoY3R4LCBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmlsZVBvc2l0aW9uLCB0aWxlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBvc2l0aW9uID0geyB4OiB0aGlzLmZpbGVQb3NpdGlvbi54LCB5OiB0aGlzLmZpbGVQb3NpdGlvbi55IH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYW5pbWF0aW9uLmdldFRpbGUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZih0aGlzLmlkID09PSAyMjUgfHwgdGhpcy5pZCA9PT0gMjI2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGlsZS5maWxlUG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aWxlLmZpbGVQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgZmlsZVBvc2l0aW9uLnggKiB0aGlzLndpZHRoLCBmaWxlUG9zaXRpb24ueSAqIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcG9zaXRpb24ueCAqIHRoaXMuc2l6ZSwgcG9zaXRpb24ueSAqIHRoaXMuc2l6ZSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUaWxlO1xufSgpKTtcbmV4cG9ydHMuVGlsZSA9IFRpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGlsZSA9IGV4cG9ydHMuRHJhd2VyID0gZXhwb3J0cy5DdXJzb3IgPSBleHBvcnRzLkNhbnZhcyA9IGV4cG9ydHMuQW5pbWF0aW9uID0gdm9pZCAwO1xudmFyIENhbnZhc18xID0gcmVxdWlyZShcIi4vQ2FudmFzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2FudmFzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBDYW52YXNfMS5DYW52YXM7IH0gfSk7XG52YXIgRHJhd2VyXzEgPSByZXF1aXJlKFwiLi9EcmF3ZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEcmF3ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERyYXdlcl8xLkRyYXdlcjsgfSB9KTtcbnZhciBUaWxlXzEgPSByZXF1aXJlKFwiLi9UaWxlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVGlsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVGlsZV8xLlRpbGU7IH0gfSk7XG52YXIgQW5pbWF0aW9uXzEgPSByZXF1aXJlKFwiLi9BbmltYXRpb25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBbmltYXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFuaW1hdGlvbl8xLkFuaW1hdGlvbjsgfSB9KTtcbnZhciBDdXJzb3JfMSA9IHJlcXVpcmUoXCIuL0N1cnNvclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkN1cnNvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ3Vyc29yXzEuQ3Vyc29yOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVEYXRhID0gdm9pZCAwO1xudmFyIEdhbWVEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWVEYXRhKHJvdW5kKSB7XG4gICAgICAgIGlmIChyb3VuZCA9PT0gdm9pZCAwKSB7IHJvdW5kID0gNTsgfVxuICAgICAgICB0aGlzLnJvdW5kID0gcm91bmQ7XG4gICAgfVxuICAgIEdhbWVEYXRhLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGJ1ZmZlciwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2dldG1hcHMvXCIuY29uY2F0KHRoaXMucm91bmQpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKS5yZWFkKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBKU09OLnBhcnNlKG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShidWZmZXIudmFsdWUpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmRhdGEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2FtZURhdGEucHJvdG90eXBlLnNldFJvdW5kID0gZnVuY3Rpb24gKHJvdW5kKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91bmQgPSByb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVsb2FkKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2FtZURhdGEucHJvdG90eXBlLnJlbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmluaXQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZURhdGEucHJvdG90eXBlLCBcIm1hcEhlaWdodFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oZWlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZURhdGEucHJvdG90eXBlLCBcIm1hcFdpZHRoXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVEYXRhLnByb3RvdHlwZSwgXCJjaGFyYWN0ZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmNoYXJhY3RlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2FtZURhdGEucHJvdG90eXBlLCBcInRpbGVzZXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEudGlsZXNldDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBHYW1lRGF0YTtcbn0oKSk7XG5leHBvcnRzLkdhbWVEYXRhID0gR2FtZURhdGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2xvYmFsID0gdm9pZCAwO1xudmFyIGNsYXNzZXNfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXNcIik7XG52YXIgZ2FtZURhdGFfMSA9IHJlcXVpcmUoXCIuL2dhbWVEYXRhXCIpO1xudmFyIEdsb2JhbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHbG9iYWwoKSB7XG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgdGhpcy5zZWNvbmRzUGFzc2VkID0gMDtcbiAgICAgICAgdGhpcy5yb3VuZCA9IDU7XG4gICAgICAgIHRoaXMudGlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSBuZXcgY2xhc3Nlc18xLkRyYXdlcigpO1xuICAgICAgICB0aGlzLmdhbWVEYXRhID0gbmV3IGdhbWVEYXRhXzEuR2FtZURhdGEoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2h1bScsIHRoaXMpO1xuICAgIH1cbiAgICBHbG9iYWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsIC0gaW5pdCgpIDogY2FsbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nYW1lRGF0YS5pbml0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmluaXRUaWxlcygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5pbml0QW5pbWF0aW9uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmRyYXdlci5pbml0KHRoaXMuZ2FtZURhdGEsIHRoaXMudGlsZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXIuY3Vyc29yID0gbmV3IGNsYXNzZXNfMS5DdXJzb3IodGhpcy5nYW1lRGF0YS5tYXBIZWlnaHQsIHRoaXMuZ2FtZURhdGEubWFwV2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdsb2JhbC5wcm90b3R5cGUuaW5pdFRpbGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXRUaWxlcygpIC0gaW1nLm9ubG9hZCgpIGNhbGxiYWNrIC0gZ2FtZURhdGEudGlsZXNldC50aWxlY291bnQ6IFwiLmNvbmNhdChfdGhpcy5nYW1lRGF0YS50aWxlc2V0LnRpbGVjb3VudCwgXCIgLSB0aGlzLmdhbWVEYXRhLnRpbGVzZXQuY29sdW1uczogXCIpLmNvbmNhdChfdGhpcy5nYW1lRGF0YS50aWxlc2V0LmNvbHVtbnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IChfdGhpcy5nYW1lRGF0YS50aWxlc2V0LnRpbGVjb3VudCAvIF90aGlzLmdhbWVEYXRhLnRpbGVzZXQuY29sdW1ucyk7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZUlkID0geCArIHkgKiBfdGhpcy5nYW1lRGF0YS50aWxlc2V0LmNvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJhbWVzXzEgPSAoKF9hID0gX3RoaXMuZ2FtZURhdGEuZGF0YS50aWxlc2V0LnRpbGVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gdGlsZUlkOyB9KVswXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFuaW1hdGlvbikgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50aWxlc1t0aWxlSWRdID0gbmV3IGNsYXNzZXNfMS5UaWxlKHRpbGVJZCwgaW1nLCBfdGhpcy5nYW1lRGF0YS50aWxlc2V0LmNvbHVtbnMsIGZyYW1lc18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ID09IChfdGhpcy5nYW1lRGF0YS50aWxlc2V0LnRpbGVjb3VudCAvIF90aGlzLmdhbWVEYXRhLnRpbGVzZXQuY29sdW1ucykgLSAxICYmIHggPT0gX3RoaXMuZ2FtZURhdGEudGlsZXNldC5jb2x1bW5zIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IF90aGlzLmdhbWVEYXRhLnRpbGVzZXQuY29sdW1uczsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL3dvcmxkVGlsZXMucG5nJztcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR2xvYmFsLnByb3RvdHlwZS5pbml0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZXNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodGlsZSkgeyByZXR1cm4gdGlsZS5mcmFtZXMubGVuZ3RoOyB9KVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAodGlsZSkgeyByZXR1cm4gdGlsZS5hbmltYXRpb24gPSBuZXcgY2xhc3Nlc18xLkFuaW1hdGlvbih0aWxlLmZyYW1lcywgX3RoaXMudGlsZXMpOyB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHbG9iYWwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlci5kb1doYXRZb3VXZXJlQ3JlYXRlZFRvRG8oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gR2xvYmFsO1xufSgpKTtcbmV4cG9ydHMuR2xvYmFsID0gR2xvYmFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zb2xlLmxvZyhcInJlZmFjdG9yaXphdGlvbiB0byBtb2R1bGUgaW1wb3J0XCIpO1xuY29uc29sZS5sb2coXCJ0cnlpbmcgaW1wb3J0IG9mIHRlc3RvciBtb2R1bGVcIik7XG4vLyBpbXBvcnQgeyBUZXN0b3IgfSBmcm9tIFwiLi90ZXN0b3JcIjtcbnZhciBnbG9iYWxfMSA9IHJlcXVpcmUoXCIuL2dsb2JhbFwiKTtcbi8vIGltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSBcIi4vZ2FtZURhdGFcIjtcbi8vIGltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuLy8gaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbi8vIGVudW0gUGhhc2Uge1xuLy8gICAgIGZpZ2h0ID0gXCJmaWdodFwiLFxuLy8gICAgIHRhY3RpY2FsID0gXCJ0YWN0aWNhbFwiXG4vLyB9XG4vLyBpbnRlcmZhY2UgR2xvYmFsIHtcbi8vICAgICB0aW1lOiBEYXRlLFxuLy8gICAgIGZwczogbnVtYmVyLFxuLy8gICAgIHNlY29uZHNQYXNzZWQ6IG51bWJlcixcbi8vICAgICBwaGFzZTogUGhhc2UsXG4vLyAgICAgY3Vyc29yOiBDdXJzb3Jcbi8vICAgICBjaGFyYWN0ZXJzUG9zaXRpb246IENoYXJhY3RlcltdLFxuLy8gICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmRcbi8vIH1cbi8vIGludGVyZmFjZSBDdXJzb3Ige1xuLy8gICAgIHBvc2l0aW9uOiBQb3NpdGlvbixcbi8vICAgICBzZWxlY3RlZDogQ2hhcmFjdGVyXG4vLyB9XG4vLyBpbnRlcmZhY2UgQ2hhcmFjdGVyIHtcbi8vICAgICBwb3NpdGlvbjogUG9zaXRpb25cbi8vIH1cbi8vIGludGVyZmFjZSBCYWNrZ3JvdW5kIHtcbi8vICAgICBwb3NpdGlvbjogUG9zaXRpb25cbi8vIH1cbnZhciBnbG9iYWwgPSBuZXcgZ2xvYmFsXzEuR2xvYmFsKCk7XG4vLyBjb25zdCBnbG9iOiBHbG9iYWwgPSB7XG4vLyAgICAgdGltZTogbmV3IERhdGUsXG4vLyAgICAgZnBzOiAwLFxuLy8gICAgIHNlY29uZHNQYXNzZWQ6IDAsXG4vLyAgICAgcGhhc2U6IFBoYXNlLnRhY3RpY2FsLFxuLy8gICAgIGN1cnNvcjoge1xuLy8gICAgICAgICBwb3NpdGlvbjoge1xuLy8gICAgICAgICAgICAgeDogMCxcbi8vICAgICAgICAgICAgIHk6IDBcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgc2VsZWN0ZWQ6IHVuZGVmaW5lZFxuLy8gICAgIH0sXG4vLyAgICAgY2hhcmFjdGVyc1Bvc2l0aW9uOiBbXSxcbi8vICAgICBiYWNrZ3JvdW5kOiB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiB7XG4vLyAgICAgICAgICAgICB4OiAwLFxuLy8gICAgICAgICAgICAgeTogMFxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfTtcbi8vIGxldCBnYW1lRGF0YTogR2FtZURhdGE7XG5mdW5jdGlvbiBtYWluKG5vdykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnRpbWUgPSBub3c7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5mcHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbC5mcHMgPT0gNjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5zZWNvbmRzUGFzc2VkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLnNlY29uZHNQYXNzZWQgJSA1ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIbyB5ZWFoICFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZnBzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnbG9iYWwuZHJhdygpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGdsb2JhbC5waGFzZSA9PSAnZmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoZ2xvYmFsLnBoYXNlID09ICd0YWN0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW4pO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW4pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBhc3luYyBmdW5jdGlvbiBpbml0VGlsZXMoZ2FtZURhdGEpIHtcbi8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4vLyAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbml0VGlsZXMoKSAtIGltZy5vbmxvYWQoKSBjYWxsYmFjayAtIGdhbWVEYXRhLnRpbGVzZXQudGlsZWNvdW50OiAke2dhbWVEYXRhLnRpbGVzZXQudGlsZWNvdW50fSAtIGdhbWVEYXRhLnRpbGVzZXQuY29sdW1uczogJHtnYW1lRGF0YS50aWxlc2V0LmNvbHVtbnN9YCk7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMCA7IHkgPCAoZ2FtZURhdGEudGlsZXNldC50aWxlY291bnQgLyBnYW1lRGF0YS50aWxlc2V0LmNvbHVtbnMpIDsgeSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDAgOyB4IDwgZ2FtZURhdGEudGlsZXNldC5jb2x1bW5zIDsgeCsrKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC50aWxlc1t4ICsgeSpnYW1lRGF0YS50aWxlc2V0LmNvbHVtbnNdID0gbmV3IFRpbGUoeCArIHkqZ2FtZURhdGEudGlsZXNldC5jb2x1bW5zLCBpbWcsIGdhbWVEYXRhLnRpbGVzZXQuY29sdW1ucylcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHkgPT0gKGdhbWVEYXRhLnRpbGVzZXQudGlsZWNvdW50IC8gZ2FtZURhdGEudGlsZXNldC5jb2x1bW5zKSAtIDEgJiYgeCA9PSBnYW1lRGF0YS50aWxlc2V0LmNvbHVtbnMgLSAxKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaW1nLnNyYyA9ICdpbWcvd29ybGRUaWxlcy5wbmcnOyAgXG4vLyAgICAgfSlcbi8vIH1cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnbG9iYWwuaW5pdCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2FtZURhdGEgPSBuZXcgR2FtZURhdGEoZ2xvYmFsLnJvdW5kKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXdhaXQgZ2FtZURhdGEuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2FtZURhdGEgOiAnLCBnYW1lRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdnYW1lRGF0YS5tYXBIZWlnaHQ6ICcsIGdhbWVEYXRhLm1hcEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdHYW1lIGluaXRpYWx5c2luZy4uLicpXG4gICAgICAgICAgICAgICAgICAgIC8vIGF3YWl0IGluaXRUaWxlcyhnYW1lRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdsb2JhbC50aWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNldEFuaW1hdGVkVGlsZXMoKVxuICAgICAgICAgICAgICAgICAgICAvLyBnbG9iLmJhY2tncm91bmQubGltaXQgPSB7eDogZGF0YS53aWR0aCAtIDksIHk6IGRhdGEuaGVpZ2h0IC0gOX1cbiAgICAgICAgICAgICAgICAgICAgLy8gZ2xvYi5zZXRNYWluQ29udHJvbGxlcigpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIGRhdGEnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgc3ByaXRlcycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBhd2FpdCBpbml0Q2hhcmFjdGVycygpXG4gICAgICAgICAgICAgICAgICAgIC8vIGF3YWl0IGluaXRDaGFyYWN0ZXJzU2lkZXMoKVxuICAgICAgICAgICAgICAgICAgICAvLyBnbG9iLmlhLmluaXRDaGFyYWN0ZXJzKGdsb2IucGNDaGFyLCBnbG9iLnBsYXllckNoYXIuc29ydCgoYSxiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIGEuaWQgPT0gYi5pZCA/IDAgOiBhLmlkIDwgYi5pZCA/IC0xIDogMVxuICAgICAgICAgICAgICAgICAgICAvLyB9KSlcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ2xvYi5jaGFyYWN0ZXJzKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZyBrZXliaW5kaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGtleUJpbmRpbmcoKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBsb2FkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2xvYi5waGFzZSA9ICd0YWN0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgbHVuY2hlZCcpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW4pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuaW5pdCgpO1xuLy8gY29uc29sZS5sb2coVGVzdG9yKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9