"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode_1 = require("vscode");
const TodoPanel_1 = require("./panels/TodoPanel");
function activate(context) {
    // Add command to the extension context
    context.subscriptions.push(vscode_1.commands.registerCommand("react-todo.run", () => {
        TodoPanel_1.TodoPanel.render(context.extensionUri);
    }));
}
//# sourceMappingURL=extension.js.map