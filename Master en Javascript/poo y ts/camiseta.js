var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// como generar un decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: ".concat(logo));
        };
    };
}
var Camiseta = function () {
    var _classDecorators = [estampar("azul")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Camiseta = _classThis = /** @class */ (function () {
        function Camiseta_1(color, modelo, marca, talla, precio) {
            this.color = color;
            this.modelo = modelo;
            this.marca = marca;
            this.talla = talla;
            this.precio = precio;
        }
        Camiseta_1.prototype.getColor = function () {
            return this.color;
        };
        Camiseta_1.prototype.setColor = function (color) {
            this.color = color;
        };
        Camiseta_1.prototype.getModelo = function () {
            return this.modelo;
        };
        Camiseta_1.prototype.setModelo = function (modelo) {
            this.modelo = modelo;
        };
        Camiseta_1.prototype.getMarca = function () {
            return this.marca;
        };
        Camiseta_1.prototype.setMarca = function (marca) {
            this.marca = marca;
        };
        Camiseta_1.prototype.getTalla = function () {
            return this.talla;
        };
        Camiseta_1.prototype.setTalla = function (talla) {
            this.talla = talla;
        };
        Camiseta_1.prototype.getPrecio = function () {
            return this.precio;
        };
        Camiseta_1.prototype.setPrecio = function (precio) {
            this.precio = precio;
        };
        Camiseta_1.prototype.toString = function () {
            return "\n            Color: ".concat(this.getColor(), "\n            Modelo: ").concat(this.getModelo(), "\n            marca: ").concat(this.getMarca(), "\n            talla: ").concat(this.getTalla(), "\n            precio: ").concat(this.getPrecio(), "\n        ");
        };
        Camiseta_1.prototype.getClasst = function () {
            return { color: this.color, modelo: this.modelo, marca: this.marca, talla: this.talla, precio: this.precio };
        };
        return Camiseta_1;
    }());
    __setFunctionName(_classThis, "Camiseta");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Camiseta = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Camiseta = _classThis;
}();
var camiseta1 = new Camiseta('Rojo', 'Manga corta', 'Nike', 'L', 100);
console.log(camiseta1.getTalla());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(capucha, camiseta) {
        var _this = _super.call(this, camiseta.getColor(), camiseta.getModelo(), camiseta.getMarca(), camiseta.getTalla(), camiseta.getPrecio()) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    Sudadera.prototype.toString = function () {
        return "\n            Color: ".concat(this.getColor(), "\n            modelos: ").concat(this.getModelo(), "\n            marca: ").concat(this.getMarca(), "\n            talla: ").concat(this.getTalla(), "\n            precio: ").concat(this.getPrecio(), "\n            Capucha: ").concat(this.getCapucha(), "\n        ");
    };
    return Sudadera;
}(Camiseta));
var sudadera_nike = new Sudadera(true, new Camiseta('Rojo', 'Manga corta', 'Nike', 'L', 100));
console.log(sudadera_nike.toString());
console.log(sudadera_nike.getCapucha());
console.log(sudadera_nike);
