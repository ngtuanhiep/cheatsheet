import type { Tool } from "../../types";

export const fdTool: Tool = {
  "id": "fd",
  "name": "fd",
  "icon": "fd",
  "summary": "Friendly, fast alternative to find",
  "category": "find",
  "featured": false,
  "sections": [
    {
      "id": "fd-find",
      "title": "Find",
      "entries": [
        {
          "kind": "command",
          "value": "fd name",
          "description": "Tìm tên entry.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -t f",
          "description": "Chỉ files.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -t d",
          "description": "Chỉ directories.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -e py",
          "description": "Theo extension.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -H name",
          "description": "Bao gồm hidden.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -I name",
          "description": "Bao gồm ignored.",
          "copy": true
        }
      ]
    },
    {
      "id": "fd-depth-paths",
      "title": "Depth / paths",
      "entries": [
        {
          "kind": "command",
          "value": "fd -d 2",
          "description": "Giới hạn depth 2.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd . src",
          "description": "Tất cả entry dưới src.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd 'test' ~/projects",
          "description": "Search trong path chỉ định.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -a name",
          "description": "Absolute paths.",
          "copy": true
        }
      ]
    },
    {
      "id": "fd-execute",
      "title": "Execute",
      "entries": [
        {
          "kind": "command",
          "value": "fd -e jpg -x echo {}",
          "description": "Chạy command cho từng result.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -e py -X wc -l",
          "description": "Batch results vào một command.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "fd -t f | fzf",
          "description": "Fuzzy picker.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "nvim \"$(fd -t f | fzf)\"",
          "description": "Chọn file rồi mở Neovim.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "fd — README",
      "url": "https://github.com/sharkdp/fd"
    }
  ]
};
