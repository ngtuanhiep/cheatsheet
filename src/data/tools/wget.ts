import type { Tool } from "../../types";

export const wgetTool: Tool = {
  "id": "wget",
  "name": "wget",
  "icon": "↓",
  "summary": "Downloader tiện cho file, recursive fetch và resume",
  "category": "network",
  "featured": false,
  "sections": [
    {
      "id": "wget-download",
      "title": "Download",
      "entries": [
        {
          "kind": "command",
          "value": "wget URL",
          "description": "Download file.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "wget -O output.zip URL",
          "description": "Tên output.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "wget -c URL",
          "description": "Resume.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "wget -P ~/Downloads URL",
          "description": "Chọn directory output.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "wget --limit-rate=2m URL",
          "description": "Giới hạn tốc độ.",
          "copy": true
        }
      ]
    },
    {
      "id": "wget-recursive",
      "title": "Recursive",
      "entries": [
        {
          "kind": "command",
          "value": "wget -r URL",
          "description": "Recursive download.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "wget -np -r URL",
          "description": "Không đi lên parent.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "wget -m URL",
          "description": "Mirror mode.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "wget --spider URL",
          "description": "Check resource không download.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "GNU Wget Manual",
      "url": "https://www.gnu.org/software/wget/manual/wget.html"
    }
  ]
};
