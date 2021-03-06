import * as vscode from 'vscode';
import { CommandBase } from './Base';

class VisualSplitCommand extends CommandBase {
  constructor() {
    super();
  }
  async execute(): Promise<void> {
    await vscode.commands.executeCommand('workbench.action.splitEditor');
  }
}

export default new VisualSplitCommand();
