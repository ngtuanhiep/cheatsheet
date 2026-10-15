import type { Tool } from "../../types";

export const batTool: Tool = {
  "id": "bat",
  "name": "bat",
  "icon": "bat",
  "summary": "cat nâng cấp: syntax highlight, line numbers, Git changes",
  "category": "viewer",
  "featured": false,
  "sections": [
    {
      "id": "bat-view",
      "title": "View",
      "entries": [
        {
          "kind": "command",
          "value": "bat file.py",
          "description": "View đẹp mặc định.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "bat -n file.py",
          "description": "Line numbers.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "bat -p file.txt",
          "description": "Plain output.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "bat -A file.txt",
          "description": "Hiện non-printing chars.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "bat --language json file",
          "description": "Ép syntax.",
          "copy": true
        }
      ]
    },
    {
      "id": "bat-ranges-styles",
      "title": "Ranges / styles",
      "entries": [
        {
          "kind": "command",
          "value": "bat -r 40:80 file.py",
          "description": "Chỉ range dòng.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "bat --highlight-line 42 file.py",
          "description": "Highlight line.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "bat --style=numbers,changes file.py",
          "description": "Numbers + git changes.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "bat --paging=never file",
          "description": "Tắt pager.",
          "copy": true
        }
      ]
    },
    {
      "id": "bat-combos",
      "title": "Combos",
      "entries": [
        {
          "kind": "command",
          "value": "fzf --preview 'bat --color=always {}'",
          "description": "Preview cho fzf.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -l TODO | fzf --preview 'bat --color=always {}'",
          "description": "Search → preview.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "bat — README",
      "url": "https://github.com/sharkdp/bat"
    }
  ]
};
