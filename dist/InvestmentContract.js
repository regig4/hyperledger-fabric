"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};
Object.defineProperty(exports, "__esModule", { value: true });
var fabric_contract_api_1 = require("fabric-contract-api");
var PaperState_1 = require("./PaperState");
var InvestmentContract = /** @class */ (function (_super) {
    __extends(InvestmentContract, _super);
    function InvestmentContract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appleAddress = '0xF661B71BeC9a6dAac0bd5E897c3d242dF18eDc11';
        _this.googleAddress = '0x94FB29447e4b8FBA43e90eA46a2f51C2191f4Fea';
        _this.facebookAddress = '0x21A4a0D1499A20D503969190C5D98E4Ab51ca4C4';
        return _this;
    }
    InvestmentContract.prototype.initLedger = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var companies, papers, _i, companies_1, company, _a, papers_1, paper;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        companies = [
                            {
                                addr: this.appleAddress,
                                name: 'Apple'
                            },
                            {
                                addr: this.googleAddress,
                                name: 'Google'
                            },
                            {
                                addr: this.facebookAddress,
                                name: 'Facebook'
                            }
                        ];
                        papers = [
                            {
                                id: 1,
                                issuer: companies[0].addr,
                                owner: companies[0].addr,
                                state: PaperState_1.PaperState.Issued,
                                price: 200
                            },
                            {
                                id: 2,
                                issuer: companies[1].addr,
                                owner: companies[1].addr,
                                state: PaperState_1.PaperState.Issued,
                                price: 50
                            },
                            {
                                id: 3,
                                issuer: companies[0].addr,
                                owner: companies[1].addr,
                                state: PaperState_1.PaperState.Trading,
                                price: 20
                            },
                            {
                                id: 4,
                                issuer: companies[0].addr,
                                owner: companies[2].addr,
                                state: PaperState_1.PaperState.Trading,
                                price: 2000
                            },
                            {
                                id: 5,
                                issuer: companies[2].addr,
                                owner: companies[0].addr,
                                state: PaperState_1.PaperState.Trading,
                                price: 800
                            },
                            {
                                id: 6,
                                issuer: companies[1].addr,
                                owner: companies[2].addr,
                                state: PaperState_1.PaperState.Trading,
                                price: 100
                            },
                            {
                                id: 7,
                                issuer: companies[0].addr,
                                owner: companies[0].addr,
                                state: PaperState_1.PaperState.Redeemed,
                                price: 50
                            },
                            {
                                id: 8,
                                issuer: companies[0].addr,
                                owner: companies[0].addr,
                                state: PaperState_1.PaperState.Redeemed,
                                price: 400
                            }
                        ];
                        _i = 0, companies_1 = companies;
                        _b.label = 1;
                    case 1:
                        if (!(_i < companies_1.length)) return [3 /*break*/, 4];
                        company = companies_1[_i];
                        return [4 /*yield*/, ctx.stub.putState(company.addr, Buffer.from(JSON.stringify(company)))];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _a = 0, papers_1 = papers;
                        _b.label = 5;
                    case 5:
                        if (!(_a < papers_1.length)) return [3 /*break*/, 8];
                        paper = papers_1[_a];
                        return [4 /*yield*/, ctx.stub.putState(paper.id.toString(), Buffer.from(JSON.stringify(paper)))];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        _a++;
                        return [3 /*break*/, 5];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    InvestmentContract.prototype.getPapers = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var papers, _a, _b, _c, key, value, strValue, record, e_1_1, e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        papers = [];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, 8, 13]);
                        _a = __asyncValues(ctx.stub.getStateByRange('1', '8'));
                        _e.label = 2;
                    case 2: return [4 /*yield*/, _a.next()];
                    case 3:
                        if (!(_b = _e.sent(), !_b.done)) return [3 /*break*/, 6];
                        return [4 /*yield*/, _b.value];
                    case 4:
                        _c = _e.sent(), key = _c.key, value = _c.value;
                        strValue = Buffer.from(value).toString('utf8');
                        record = void 0;
                        try {
                            record = JSON.parse(strValue);
                        }
                        catch (err) {
                            console.log(err);
                            record = strValue;
                        }
                        papers.push({ Key: key, Record: record });
                        _e.label = 5;
                    case 5: return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _e.trys.push([8, , 11, 12]);
                        if (!(_b && !_b.done && (_d = _a.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _d.call(_a)];
                    case 9:
                        _e.sent();
                        _e.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        console.info(papers);
                        return [2 /*return*/, JSON.stringify(papers)];
                }
            });
        });
    };
    return InvestmentContract;
}(fabric_contract_api_1.Contract));
exports.InvestmentContract = InvestmentContract;
//# sourceMappingURL=InvestmentContract.js.map