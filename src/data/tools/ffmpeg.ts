import type { Tool } from "../../types";

export const ffmpegTool: Tool = {
  "id": "ffmpeg",
  "name": "ffmpeg",
  "icon": "FF",
  "summary": "Swiss-army knife cho audio/video: convert, trim, extract, compress",
  "category": "media",
  "featured": false,
  "sections": [
    {
      "id": "ffmpeg-inspect-convert",
      "title": "Inspect / convert",
      "entries": [
        {
          "kind": "command",
          "value": "ffmpeg -i input.mp4",
          "description": "Inspect streams/metadata.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i input.mov output.mp4",
          "description": "Convert container/codec mặc định.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i input.wav output.mp3",
          "description": "Convert audio.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i input.mp4 -vn audio.mp3",
          "description": "Extract audio.",
          "copy": true
        }
      ]
    },
    {
      "id": "ffmpeg-trim-resize",
      "title": "Trim / resize",
      "entries": [
        {
          "kind": "command",
          "value": "ffmpeg -ss 00:01:00 -to 00:02:00 -i in.mp4 -c copy out.mp4",
          "description": "Trim nhanh không re-encode.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i in.mp4 -vf 'scale=1280:-2' out.mp4",
          "description": "Resize width 1280 giữ ratio.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i in.mp4 -r 30 out.mp4",
          "description": "Set 30 FPS.",
          "copy": true
        }
      ]
    },
    {
      "id": "ffmpeg-compression",
      "title": "Compression",
      "entries": [
        {
          "kind": "command",
          "value": "ffmpeg -i in.mp4 -c:v libx264 -crf 23 -c:a aac out.mp4",
          "description": "H.264 CRF 23.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i in.mp4 -c:v libx265 -crf 28 out.mp4",
          "description": "HEVC nhỏ hơn, encode chậm hơn.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i in.wav -b:a 192k out.mp3",
          "description": "MP3 192 kbps.",
          "copy": true
        }
      ]
    },
    {
      "id": "ffmpeg-useful",
      "title": "Useful",
      "entries": [
        {
          "kind": "command",
          "value": "ffmpeg -i in.mp4 -frames:v 1 cover.jpg",
          "description": "Lấy frame đầu.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -ss 10 -i in.mp4 -frames:v 1 shot.jpg",
          "description": "Screenshot tại 10s.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i in.mp4 -map 0:s:0 subs.srt",
          "description": "Extract subtitle stream.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "FFmpeg Documentation",
      "url": "https://ffmpeg.org/documentation.html"
    }
  ]
};
