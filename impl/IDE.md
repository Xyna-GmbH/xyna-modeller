IDE:
Visual Studio Code

Plugin                          Version         Priority
---------------------------------------------------------------
Angular Language Service        0.1.9           Essential
TypeScript Import Sorter        1.2.1           Essential
TSLint                          1.0.28          Essential
Auto Import                     1.5.3           Recommended
Empty-Indent                    0.2.0           Recommended
Material Icon Theme             3.2.6           Recommended
Smart Column Indenter           0.0.12          Optional
An Old Hope Theme               3.2.1           Optional



SETTINGS (CTRL + ,)

"importSorter.importStringConfiguration.numberOfEmptyLinesAfterAllImports": 2,
"importSorter.importStringConfiguration.maximumNumberOfImportExpressionsPerLine.type": "newLineEachExpressionAfterCountLimit",
"importSorter.importStringConfiguration.maximumNumberOfImportExpressionsPerLine.count": 1000,
"importSorter.generalConfiguration.sortOnBeforeSave": true,
"importSorter.sortConfiguration.customOrderingRules.rules": [
    {
        "regex": "^@angular",
        "orderLevel": 0,
        "numberOfEmptyLinesAfterGroup": 1
    },
    {
        "regex": "^[@]",
        "orderLevel": 10
    },
    {
        "regex": "^[.]",
        "orderLevel": 30
    }
]