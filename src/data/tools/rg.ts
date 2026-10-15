import type { Tool } from "../../types";

export const rgTool: Tool = {
  "id": "rg",
  "name": "ripgrep",
  "icon": "rg",
  "summary": "Recursive text search cực nhanh, tôn trọng .gitignore",
  "category": "search",
  "featured": false,
  "sections": [
    {
      "id": "rg-core",
      "title": "Core",
      "entries": [
        {
          "kind": "command",
          "value": "rg \"TODO\"",
          "description": "Tìm recursive.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -n \"pattern\"",
          "description": "Hiện line number.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -i \"error\"",
          "description": "Ignore case.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -S \"Error\"",
          "description": "Smart case.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -w \"word\"",
          "description": "Whole word.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -F \"a+b\"",
          "description": "Literal/fixed string.",
          "copy": true
        }
      ]
    },
    {
      "id": "rg-files-globs",
      "title": "Files / globs",
      "entries": [
        {
          "kind": "command",
          "value": "rg -l \"x\"",
          "description": "Chỉ filename có match.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg --files",
          "description": "List searchable files.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -g '*.py' 'import'",
          "description": "Chỉ *.py.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -g '!node_modules/**' x",
          "description": "Exclude glob.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg --hidden x",
          "description": "Bao gồm hidden.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -uu x",
          "description": "Bao gồm hidden + ignored.",
          "copy": true
        }
      ]
    },
    {
      "id": "rg-context-counts",
      "title": "Context / counts",
      "entries": [
        {
          "kind": "command",
          "value": "rg -C 2 x",
          "description": "2 dòng context quanh match.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -A 3 x",
          "description": "3 dòng sau.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -B 3 x",
          "description": "3 dòng trước.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -c x",
          "description": "Count matches theo file.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg --stats x",
          "description": "Search statistics.",
          "copy": true
        }
      ]
    },
    {
      "id": "rg-power",
      "title": "Power",
      "entries": [
        {
          "kind": "command",
          "value": "rg -n \"TODO|FIXME\"",
          "description": "Regex alternation.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg --files | fzf",
          "description": "Fuzzy pick project file.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -l 'foo' | xargs nvim",
          "description": "Mở file có match.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "ripgrep — Guide",
      "url": "https://github.com/BurntSushi/ripgrep/blob/master/GUIDE.md"
    }
  ]
};
