import type { Tool } from "../../types";

export const curlTool: Tool = {
  "id": "curl",
  "name": "curl",
  "icon": "↗",
  "summary": "HTTP/API client; rất mạnh cho debug headers, TLS và request",
  "category": "network",
  "featured": false,
  "sections": [
    {
      "id": "curl-get-download",
      "title": "GET / download",
      "entries": [
        {
          "kind": "command",
          "value": "curl URL",
          "description": "GET và in body.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -I URL",
          "description": "Headers only.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -L URL",
          "description": "Follow redirects.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -o file.zip URL",
          "description": "Lưu tên tùy chọn.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -O URL",
          "description": "Giữ remote filename.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -C - -O URL",
          "description": "Resume download.",
          "copy": true
        }
      ]
    },
    {
      "id": "curl-api",
      "title": "API",
      "entries": [
        {
          "kind": "command",
          "value": "curl -s URL | jq",
          "description": "JSON pretty print với jq.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -H 'Authorization: Bearer TOKEN' URL",
          "description": "Custom header.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -X POST -H 'Content-Type: application/json' -d '{\"name\":\"Mac\"}' URL",
          "description": "POST JSON.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -F 'file=@photo.jpg' URL",
          "description": "Multipart upload.",
          "copy": true
        }
      ]
    },
    {
      "id": "curl-debug",
      "title": "Debug",
      "entries": [
        {
          "kind": "command",
          "value": "curl -v URL",
          "description": "Verbose DNS/TLS/HTTP.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -i URL",
          "description": "Headers + body.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl --http2 -I URL",
          "description": "Test HTTP/2.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -w \"%{http_code}\\n\" -o /dev/null -s URL",
          "description": "Chỉ status code.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl --connect-timeout 5 URL",
          "description": "Connect timeout.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "curl — Man Page",
      "url": "https://curl.se/docs/manpage.html"
    }
  ]
};
