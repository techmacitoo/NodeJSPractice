"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.about = exports.contact = exports.index = void 0;
const index = (request, response) => {
    response.render('home/index', { pageTitle: 'Index View' });
};
exports.index = index;
const contact = (request, response) => {
    response.render('home/contact', { pageTitle: 'Contact View' });
};
exports.contact = contact;
const about = (request, response) => {
    response.render('home/about', { pageTitle: 'About View' });
};
exports.about = about;
//# sourceMappingURL=home-controller.js.map