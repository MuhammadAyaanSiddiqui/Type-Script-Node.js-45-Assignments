"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest = void 0;
var guest = ["Baber Azam", "Naseem Shah", "Rizwan"];
exports.guest = guest;
var message = 'Dear';
for (var i = 0; i < guest.length; i++)
    console.log("".concat(message, " ").concat(guest[i], ", I would like to invite you to dinner."));
