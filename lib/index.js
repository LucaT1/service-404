"use strict";
exports.__esModule = true;
var React = require("react");
var server_1 = require("react-dom/server");
var styled_components_1 = require("styled-components");
var container_1 = require("./container");
var Page = function () {
    return React.createElement(container_1.Container, null,
        React.createElement("h2", null, "404"),
        React.createElement("div", { style: { width: 60, height: '100%' } }),
        React.createElement("span", null, "The URL you requested was not found"));
};
exports["default"] = function (req, res) {
    var sheet = new styled_components_1.ServerStyleSheet();
    var html = server_1.renderToString(sheet.collectStyles(React.createElement(Page, null)));
    return res.end(sheet.getStyleTags() + html);
};
