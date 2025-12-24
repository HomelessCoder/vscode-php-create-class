import * as vscode from 'vscode'
import Creator from './Creator'

export function activate(context: vscode.ExtensionContext) {
    let creator: Creator = new Creator()

    let createClass = vscode.commands.registerCommand('phpCreateClassMultiDir.createClass', (folder) => creator.createFile('class', folder))
    let createInterface = vscode.commands.registerCommand('phpCreateClassMultiDir.createInterface', (folder) => creator.createFile('interface', folder))
    let createTrait = vscode.commands.registerCommand('phpCreateClassMultiDir.createTrait', (folder) => creator.createFile('trait', folder))
    let createEnum = vscode.commands.registerCommand('phpCreateClassMultiDir.createEnum', (folder) => creator.createFile('enum', folder))
    let generateClassCode = vscode.commands.registerCommand('phpCreateClassMultiDir.generateClassCode', () => creator.generateCode('class'))
    let generateInterfaceCode = vscode.commands.registerCommand('phpCreateClassMultiDir.generateInterfaceCode', () => creator.generateCode('interface'))
    let generateTraitCode = vscode.commands.registerCommand('phpCreateClassMultiDir.generateTraitCode', () => creator.generateCode('trait'))
    let generateEnumCode = vscode.commands.registerCommand('phpCreateClassMultiDir.generateEnumCode', () => creator.generateCode('enum'))

    context.subscriptions.push(createClass)
    context.subscriptions.push(createInterface)
    context.subscriptions.push(createTrait)
    context.subscriptions.push(createEnum)
    context.subscriptions.push(generateClassCode)
    context.subscriptions.push(generateInterfaceCode)
    context.subscriptions.push(generateTraitCode)
    context.subscriptions.push(generateEnumCode)

    vscode.commands.executeCommand('setContext', 'phpCreateClassMultiDir.activated', true);
}

export function deactivate() { }
