import type { Tool } from "../../types";

export const combosTool: Tool = {
  "id": "combos",
  "name": "Daily Power Combos",
  "icon": "⚡",
  "summary": "Các chuỗi lệnh kết hợp tool để làm việc nhanh hơn",
  "category": "workflow",
  "featured": true,
  "sections": [
    {
      "id": "combos-find-preview-edit",
      "title": "Find → preview → edit",
      "entries": [
        {
          "kind": "command",
          "value": "nvim \"$(fd -t f | fzf --preview 'bat --color=always {}')\"",
          "description": "fd tìm file → fzf chọn → bat preview → nvim edit.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -l TODO | fzf --preview 'bat --color=always {}'",
          "description": "Tìm file có TODO rồi preview.",
          "copy": true
        }
      ]
    },
    {
      "id": "combos-directory-workflow",
      "title": "Directory workflow",
      "entries": [
        {
          "kind": "command",
          "value": "z project && y",
          "description": "Jump project quen → Yazi.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "zi",
          "description": "Interactive zoxide picker.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "cd \"$(fd -t d | fzf)\"",
          "description": "Fuzzy cd folder chưa quen.",
          "copy": true
        }
      ]
    },
    {
      "id": "combos-project-search",
      "title": "Project search",
      "entries": [
        {
          "kind": "command",
          "value": "rg -n \"TODO|FIXME\"",
          "description": "Tìm task markers.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "rg -n 'function_name' | fzf",
          "description": "Search nội dung rồi lọc tương tác.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "nvim $(rg -l 'pattern' | fzf)",
          "description": "Chọn file có match và edit.",
          "copy": true
        }
      ]
    },
    {
      "id": "combos-media",
      "title": "Media",
      "entries": [
        {
          "kind": "command",
          "value": "yt-dlp -x --audio-format mp3 URL",
          "description": "Download → ffmpeg extract MP3.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yt-dlp -f 'bv*+ba/b' URL",
          "description": "Best streams + ffmpeg merge.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "ffmpeg -i input.mov output.mp4",
          "description": "Convert media nhanh.",
          "copy": true
        }
      ]
    },
    {
      "id": "combos-github-flow",
      "title": "GitHub flow",
      "entries": [
        {
          "kind": "command",
          "value": "git push -u origin HEAD && gh pr create",
          "description": "Push branch rồi tạo PR.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh pr checks && gh pr view --web",
          "description": "Check CI rồi mở PR.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh run watch",
          "description": "Theo dõi Actions từ terminal.",
          "copy": true
        }
      ]
    },
    {
      "id": "combos-http-api",
      "title": "HTTP/API",
      "entries": [
        {
          "kind": "command",
          "value": "curl -s URL | jq",
          "description": "Fetch + pretty JSON.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -v URL",
          "description": "Debug TLS/HTTP.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "curl -w '%{http_code}\\n' -o /dev/null -s URL",
          "description": "Quick status code.",
          "copy": true
        }
      ]
    },
    {
      "id": "combos-shell-ux",
      "title": "Shell UX",
      "entries": [
        {
          "kind": "command",
          "value": "eval \"$(zoxide init zsh)\"",
          "description": "zoxide integration.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "eval \"$(starship init zsh)\"",
          "description": "Starship prompt.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "source ~/.zshrc",
          "description": "Reload tất cả.",
          "copy": true
        }
      ]
    },
    {
      "id": "combos-mental-model",
      "title": "Mental model",
      "entries": [
        {
          "kind": "text",
          "value": "zoxide → fd → fzf → bat → nvim",
          "description": "Jump → find → choose → preview → edit."
        },
        {
          "kind": "command",
          "value": "Yazi + zoxide + fd + rg",
          "description": "Yazi có thể tận dụng z/fd/rg trực tiếp."
        },
        {
          "kind": "command",
          "value": "yt-dlp + ffmpeg",
          "description": "Download + post-process media."
        },
        {
          "kind": "command",
          "value": "git + gh",
          "description": "Local Git + GitHub remote workflow."
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "Nguồn của từng công cụ",
      "url": "https://github.com/tldr-pages/tldr"
    }
  ]
};
