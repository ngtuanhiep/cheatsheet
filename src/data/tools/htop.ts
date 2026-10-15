import type { Tool } from "../../types";

export const htopTool: Tool = {
  "id": "htop",
  "name": "htop",
  "icon": "CPU",
  "summary": "Interactive process monitor trong terminal",
  "category": "system",
  "featured": false,
  "sections": [
    {
      "id": "htop-navigation",
      "title": "Navigation",
      "entries": [
        {
          "kind": "command",
          "value": "htop",
          "description": "Mở htop.",
          "copy": true
        },
        {
          "kind": "shortcut",
          "value": "↑ ↓ / PgUp PgDn",
          "description": "Di chuyển process list."
        },
        {
          "kind": "shortcut",
          "value": "F3 / /",
          "description": "Search."
        },
        {
          "kind": "shortcut",
          "value": "F4 / \\",
          "description": "Filter."
        },
        {
          "kind": "shortcut",
          "value": "F5",
          "description": "Tree view."
        },
        {
          "kind": "shortcut",
          "value": "F6",
          "description": "Sort by."
        },
        {
          "kind": "shortcut",
          "value": "q / F10",
          "description": "Quit."
        }
      ]
    },
    {
      "id": "htop-process-actions",
      "title": "Process actions",
      "entries": [
        {
          "kind": "shortcut",
          "value": "F9",
          "description": "Signal/kill process."
        },
        {
          "kind": "shortcut",
          "value": "k",
          "description": "Kill menu (tùy keymap/build)."
        },
        {
          "kind": "shortcut",
          "value": "Space",
          "description": "Tag process."
        },
        {
          "kind": "shortcut",
          "value": "U",
          "description": "Untag all."
        },
        {
          "kind": "shortcut",
          "value": "H",
          "description": "Toggle user threads."
        },
        {
          "kind": "shortcut",
          "value": "K",
          "description": "Toggle kernel threads (platform-dependent)."
        }
      ]
    },
    {
      "id": "htop-useful",
      "title": "Useful",
      "entries": [
        {
          "kind": "command",
          "value": "htop -u \"$USER\"",
          "description": "Chỉ process user hiện tại nếu build hỗ trợ option.",
          "copy": true
        },
        {
          "kind": "shortcut",
          "value": "P / M / T",
          "description": "Sort CPU / memory / time trên nhiều htop builds."
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "htop — README",
      "url": "https://github.com/htop-dev/htop"
    }
  ]
};
