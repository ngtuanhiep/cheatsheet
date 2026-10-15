import type { Tool } from "../../types";

export const fzfTool: Tool = {
  "id": "fzf",
  "name": "fzf",
  "icon": "fzf",
  "summary": "Fuzzy finder tương tác cho file, history và mọi stream text",
  "category": "fuzzy finder",
  "featured": false,
  "sections": [
    {
      "id": "fzf-core",
      "title": "Core",
      "entries": [
        {
          "kind": "command",
          "value": "fzf",
          "description": "Fuzzy select từ stdin/file list.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -t f | fzf",
          "description": "Chọn file từ fd.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg --files | fzf",
          "description": "Chọn project file.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "history | fzf",
          "description": "Fuzzy history thủ công.",
          "copy": true
        }
      ]
    },
    {
      "id": "fzf-preview",
      "title": "Preview",
      "entries": [
        {
          "kind": "command",
          "value": "fzf --preview 'bat --color=always {}'",
          "description": "Preview file bằng bat.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -t f | fzf --preview 'bat --style=numbers --color=always {}'",
          "description": "File picker có preview.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fzf --height=60% --layout=reverse --border",
          "description": "Popup-like layout.",
          "copy": true
        }
      ]
    },
    {
      "id": "fzf-shell-integration",
      "title": "Shell integration",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+R",
          "description": "Search command history khi shell integration bật."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+T",
          "description": "Chọn file/path chèn vào command line."
        },
        {
          "kind": "shortcut",
          "value": "Alt+C",
          "description": "Fuzzy cd tới directory (tùy integration)."
        },
        {
          "kind": "command",
          "value": "fzf --zsh",
          "description": "In shell integration script cho zsh bản mới.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "fzf — README",
      "url": "https://github.com/junegunn/fzf"
    }
  ]
};
