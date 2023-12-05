// Import TypeScript libraries from Deno
import { createSourceFile, forEachChild, ScriptTarget, SyntaxKind } from "https://deno.land/std/typescript/mod.ts";

async function readTsFile(filePath: string): Promise<string> {
    return await Deno.readTextFile(filePath);
}

function collectAst(node: any): any {
    let nodeObj: any = {
        kind: SyntaxKind[node.kind],
        children: []
    };

    forEachChild(node, childNode => {
        nodeObj.children.push(collectAst(childNode));
    });

    return nodeObj;
}

if (Deno.args.length === 0) {
    console.error("No file path provided.");
    Deno.exit(1);
}

const filePath = Deno.args[0]; // Get file path from command-line arguments
const fileContent = await readTsFile(filePath);
const sourceFile = createSourceFile(filePath, fileContent, ScriptTarget.Latest, true);

const astJson = collectAst(sourceFile);
console.log(JSON.stringify(astJson, null, 2));
