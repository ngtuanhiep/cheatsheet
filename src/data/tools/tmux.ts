import type { Tool } from "../../types";

export const tmuxTool: Tool = {
  "id": "tmux",
  "name": "tmux",
  "icon": "tm",
  "summary": "Terminal multiplexer • session → window → pane; giữ workspace sống khi terminal/SSH ngắt",
  "category": "multiplexer",
  "featured": true,
  "sections": [
    {
      "id": "tmux-mental-model-prefix",
      "title": "Mental model / prefix",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Prefix = Ctrl+b",
          "description": "Prefix mặc định. Nhấn Ctrl+b, thả ra, rồi nhấn phím lệnh."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b ?",
          "description": "Hiện toàn bộ key bindings."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b :",
          "description": "Mở tmux command prompt."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b Ctrl+b",
          "description": "Gửi Ctrl+b thật vào chương trình bên trong pane."
        },
        {
          "kind": "shortcut",
          "value": "session → window → pane",
          "description": "Session chứa nhiều windows; mỗi window chứa nhiều panes."
        }
      ]
    },
    {
      "id": "tmux-start-attach",
      "title": "Start / attach",
      "entries": [
        {
          "kind": "command",
          "value": "tmux",
          "description": "Tạo session mới.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux new -s dev",
          "description": "Tạo session tên dev.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux ls",
          "description": "List sessions.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux attach -t dev",
          "description": "Attach vào session dev.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux a",
          "description": "Attach session gần nhất.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux kill-session -t dev",
          "description": "Kill session dev.",
          "copy": true
        }
      ]
    },
    {
      "id": "tmux-sessions",
      "title": "Sessions",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+b d",
          "description": "Detach khỏi session; process vẫn tiếp tục chạy."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b s",
          "description": "Interactive session chooser."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b $",
          "description": "Rename session hiện tại."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b ( / )",
          "description": "Session trước / sau."
        },
        {
          "kind": "command",
          "value": "tmux switch-client -t dev",
          "description": "Chuyển client hiện tại sang session dev.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux kill-server",
          "description": "Kill toàn bộ tmux server và mọi session — dùng cẩn thận.",
          "copy": true
        }
      ]
    },
    {
      "id": "tmux-windows",
      "title": "Windows",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+b c",
          "description": "Tạo window mới."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b ,",
          "description": "Rename window."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b n / p",
          "description": "Window tiếp / trước."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b 0…9",
          "description": "Nhảy tới window số N."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b w",
          "description": "Interactive window/session tree."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b &",
          "description": "Kill window hiện tại, có confirm."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b l",
          "description": "Quay lại window vừa dùng trước đó."
        }
      ]
    },
    {
      "id": "tmux-panes-split",
      "title": "Panes / split",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+b %",
          "description": "Split pane trái/phải."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b \"",
          "description": "Split pane trên/dưới."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b o",
          "description": "Cycle sang pane tiếp."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b ↑/↓/←/→",
          "description": "Di chuyển sang pane theo hướng."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b q",
          "description": "Hiện số pane; nhấn số để jump."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b x",
          "description": "Kill pane hiện tại, có confirm."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b z",
          "description": "Zoom/unzoom pane hiện tại."
        }
      ]
    },
    {
      "id": "tmux-resize-layout",
      "title": "Resize / layout",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+b Ctrl+↑/↓/←/→",
          "description": "Resize pane từng bước trên nhiều terminal/build mặc định."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b Alt+↑/↓/←/→",
          "description": "Resize theo bước lớn hơn trên keymap mặc định phổ biến."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b Space",
          "description": "Cycle qua các pane layouts."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b Alt+1…5",
          "description": "Chọn layout định sẵn: even-horizontal, even-vertical, main-horizontal, main-vertical, tiled."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b { / }",
          "description": "Swap pane với pane trước / sau."
        }
      ]
    },
    {
      "id": "tmux-copy-mode",
      "title": "Copy mode",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+b [",
          "description": "Vào copy mode / scrollback."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b ]",
          "description": "Paste tmux buffer gần nhất."
        },
        {
          "kind": "shortcut",
          "value": "q",
          "description": "Thoát copy mode."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+u / Ctrl+d",
          "description": "Half-page up / down trong vi copy mode."
        },
        {
          "kind": "command",
          "value": "/",
          "description": "Search forward trong vi copy mode."
        },
        {
          "kind": "shortcut",
          "value": "Space → Enter",
          "description": "Với vi copy-mode mặc định: bắt đầu selection → copy/cancel."
        },
        {
          "kind": "command",
          "value": "set -g mode-keys vi",
          "description": "Dùng vi-style copy/navigation keymap trong tmux."
        }
      ]
    },
    {
      "id": "tmux-commands-inspect",
      "title": "Commands / inspect",
      "entries": [
        {
          "kind": "command",
          "value": "tmux list-keys",
          "description": "List toàn bộ bindings.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux list-keys -N",
          "description": "List bindings kèm mô tả.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux show-options -g",
          "description": "Xem global session options.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux show-window-options -g",
          "description": "Xem global window options.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tmux display-message -p '#S:#I.#P'",
          "description": "In session:window.pane hiện tại.",
          "copy": true
        }
      ]
    },
    {
      "id": "tmux-config",
      "title": "Config",
      "entries": [
        {
          "kind": "command",
          "value": "~/.tmux.conf",
          "description": "Config truyền thống và phổ biến."
        },
        {
          "kind": "command",
          "value": "~/.config/tmux/tmux.conf",
          "description": "Config theo XDG trên tmux phiên bản hỗ trợ."
        },
        {
          "kind": "command",
          "value": "tmux source-file ~/.tmux.conf",
          "description": "Reload config không cần restart server.",
          "copy": true
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b :",
          "description": "Gõ source-file ~/.tmux.conf để reload ngay trong tmux."
        },
        {
          "kind": "command",
          "value": "set -g mouse on",
          "description": "Bật mouse chọn pane, resize và scroll."
        },
        {
          "kind": "command",
          "value": "set -g history-limit 100000",
          "description": "Tăng scrollback history."
        }
      ]
    },
    {
      "id": "tmux-useful-custom-config",
      "title": "Useful custom config",
      "entries": [
        {
          "kind": "command",
          "value": "set -g base-index 1",
          "description": "Window bắt đầu từ 1 thay vì 0."
        },
        {
          "kind": "command",
          "value": "setw -g pane-base-index 1",
          "description": "Pane bắt đầu từ 1."
        },
        {
          "kind": "command",
          "value": "set -g renumber-windows on",
          "description": "Tự renumber khi đóng window."
        },
        {
          "kind": "command",
          "value": "set -g status-interval 5",
          "description": "Tần suất refresh status line."
        },
        {
          "kind": "command",
          "value": "set -g escape-time 0",
          "description": "Giảm delay Esc; hữu ích với Neovim, nhưng nên test tương thích terminal."
        }
      ]
    },
    {
      "id": "tmux-tmux-neovim",
      "title": "tmux + Neovim",
      "entries": [
        {
          "kind": "command",
          "value": "tmux new -s code",
          "description": "Tạo workspace coding; mở nvim trong pane chính."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b %",
          "description": "Pane trái: Neovim; pane phải: test/server/log."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b \"",
          "description": "Thêm shell dưới để chạy Git hoặc command ngắn."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b z",
          "description": "Zoom Neovim khi cần tập trung; nhấn lại để quay layout."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b d",
          "description": "Detach nhưng dev server/process vẫn sống."
        }
      ]
    },
    {
      "id": "tmux-remote-ssh-workflow",
      "title": "Remote / SSH workflow",
      "entries": [
        {
          "kind": "command",
          "value": "ssh server",
          "description": "SSH vào máy từ xa."
        },
        {
          "kind": "command",
          "value": "tmux new -As work",
          "description": "Attach session work nếu có, nếu chưa có thì tạo mới.",
          "copy": true
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+b d",
          "description": "Detach trước khi thoát SSH; job tiếp tục chạy."
        },
        {
          "kind": "command",
          "value": "exit",
          "description": "Đóng SSH; lần sau attach lại session."
        }
      ]
    }
  ],
  "notes": [
    "tmux dùng prefix mặc định Ctrl+b. Nếu ~/.tmux.conf của bạn đổi prefix (ví dụ Ctrl+a) thì thay Ctrl+b bằng prefix mới. Chạy Ctrl+b ? hoặc tmux list-keys -N để xem binding thật trên máy."
  ],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "tmux — Getting Started",
      "url": "https://github.com/tmux/tmux/wiki/Getting-Started"
    }
  ]
};
