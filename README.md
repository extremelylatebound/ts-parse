# ts-parse
A small utility for printing a TS AST

### Given
```ts
//hello.ts
function hello(name: string) {
    console.log(`Hello, ${name}!`);
}
```

### When
`$./ts-parse.ts ./hello.ts`

### Then
```ts
{
  "kind": "SourceFile",
  "children": [
    {
      "kind": "FunctionDeclaration",
      "children": [
        {
          "kind": "Identifier",
          "children": [],
          "text": "hello"
        },
        {
          "kind": "Parameters",
          "children": [
            {
              "kind": "Parameter",
              "children": [
                {
                  "kind": "Identifier",
                  "children": [],
                  "text": "name"
                },
                {
                  "kind": "TypeAnnotation",
                  "children": [
                    {
                      "kind": "StringKeyword",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "kind": "Block",
          "children": [
            {
              "kind": "ExpressionStatement",
              "children": [
                {
                  "kind": "CallExpression",
                  "children": [
                    {
                      "kind": "PropertyAccessExpression",
                      "children": [
                        {
                          "kind": "Identifier",
                          "children": [],
                          "text": "console"
                        },
                        {
                          "kind": "Identifier",
                          "children": [],
                          "text": "log"
                        }
                      ]
                    },
                    {
                      "kind": "TemplateExpression",
                      "children": [
                        {
                          "kind": "TemplateHead",
                          "children": [],
                          "text": "`Hello, "
                        },
                        {
                          "kind": "TemplateSpan",
                          "children": [
                            {
                              "kind": "Identifier",
                              "children": [],
                              "text": "name"
                            },
                            {
                              "kind": "TemplateTail",
                              "children": [],
                              "text": "!`"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
