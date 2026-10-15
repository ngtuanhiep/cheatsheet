import type { Tool } from "../../types";

export const zoxideTool: Tool = {
  "id": "zoxide",
  "name": "zoxide",
  "icon": "z",
  "summary": "Smarter cd: học những directory bạn dùng thường xuyên",
  "category": "navigation",
  "featured": false,
  "sections": [
    {
      "id": "zoxide-daily",
      "title": "Daily",
      "entries": [
        {
          "kind": "command",
          "value": "z project",
          "description": "Jump tới directory match tốt nhất.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "z foo bar",
          "description": "Match nhiều token.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "zi",
          "description": "Interactive jump qua fzf.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "z -",
          "description": "Quay lại directory trước (tùy shell integration).",
          "copy": true
        }
      ]
    },
    {
      "id": "zoxide-setup-db",
      "title": "Setup / DB",
      "entries": [
        {
          "kind": "command",
          "value": "eval \"$(zoxide init zsh)\"",
          "description": "Bật trong ~/.zshrc.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "zoxide query project",
          "description": "Xem path mà zoxide sẽ chọn.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "zoxide query -l",
          "description": "List matches.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "zoxide add /path",
          "description": "Thêm path thủ công.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "zoxide remove /path",
          "description": "Xóa path khỏi DB.",
          "copy": true
        }
      ]
    },
    {
      "id": "zoxide-combos",
      "title": "Combos",
      "entries": [
        {
          "kind": "command",
          "value": "z project && nvim .",
          "description": "Jump project rồi edit.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "z downloads && y",
          "description": "Jump rồi browse Yazi.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "zoxide — README",
      "url": "https://github.com/ajeetdsouza/zoxide"
    }
  ]
};
