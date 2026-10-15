import type { Tool } from "../../types";

export const ytdlpTool: Tool = {
  "id": "ytdlp",
  "name": "yt-dlp",
  "icon": "▶",
  "summary": "Download media từ các site được hỗ trợ; kết hợp ffmpeg để merge/convert",
  "category": "media",
  "featured": false,
  "sections": [
    {
      "id": "ytdlp-formats",
      "title": "Formats",
      "entries": [
        {
          "kind": "command",
          "value": "yt-dlp URL",
          "description": "Download mặc định.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp -F URL",
          "description": "List formats.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp -f 'bv*+ba/b' URL",
          "description": "Best video + best audio.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp -S 'res:1080' URL",
          "description": "Ưu tiên tới 1080p theo sort.",
          "copy": true
        }
      ]
    },
    {
      "id": "ytdlp-audio-output",
      "title": "Audio / output",
      "entries": [
        {
          "kind": "command",
          "value": "yt-dlp -x --audio-format mp3 URL",
          "description": "Extract MP3.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp -o '%(title)s.%(ext)s' URL",
          "description": "Output template.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp -P ~/Downloads URL",
          "description": "Output path.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp --embed-thumbnail -x --audio-format mp3 URL",
          "description": "MP3 + thumbnail nếu hỗ trợ.",
          "copy": true
        }
      ]
    },
    {
      "id": "ytdlp-subtitles-playlist",
      "title": "Subtitles / playlist",
      "entries": [
        {
          "kind": "command",
          "value": "yt-dlp --write-subs --sub-langs 'en.*,vi.*' URL",
          "description": "Download subtitles.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp --write-auto-subs URL",
          "description": "Auto subtitles nếu có.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp --no-playlist URL",
          "description": "Chỉ item hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp -o '%(playlist_index)s - %(title)s.%(ext)s' PLAYLIST",
          "description": "Tên file theo playlist index.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [
    "Chỉ tải nội dung khi bạn có quyền và tuân thủ điều khoản dịch vụ/bản quyền."
  ],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "yt-dlp — README",
      "url": "https://github.com/yt-dlp/yt-dlp"
    }
  ]
};
