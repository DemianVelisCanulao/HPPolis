"use strict";
(() => {
var exports = {};
exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 9353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handler)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3123);

async function Handler(req, res) {
    try {
        const guest = JSON.parse(req.body);
        if (req.method === "POST") {
            if (!guest.name.length) {
                return res.status(500).json({
                    message: "Por favor inserta un nombre"
                });
            }
            try {
                const date = new Date();
                const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.guests.create({
                    data: {
                        name: guest.name,
                        date_confirmation: date,
                        is_coming: guest.is_coming == "si" ? true : false,
                        invitados: 0
                    }
                });
                return res.status(200).json(data);
            //redirect('/positivo');
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    message: error
                });
            }
        }
    } catch (error) {
        console.log("error 500 fuera");
        return res.status(500).json(error);
    }
}


/***/ }),

/***/ 3123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ client)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./prisma/client.ts

const prisma = global.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const client = (prisma);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9353));
module.exports = __webpack_exports__;

})();