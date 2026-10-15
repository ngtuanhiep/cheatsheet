import type { Tool } from "../../types";

export const tuiosTool: Tool = {
  "id": "tuios",
  "name": "TUIOS",
  "icon": "TU",
  "summary": "Terminal multiplexer + window manager dạng modal, có daemon, workspaces và agent inbox.",
  "category": "multiplexer",
  "featured": true,
  "verified": "15/10/2026",
  "sections": [
    {
      "id": "tuios-start",
      "title": "Cài đặt & khởi động",
      "entries": [
        {
          "kind": "command",
          "value": "brew install tuios",
          "description": "Cài TUIOS bằng Homebrew.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios",
          "description": "Attach session dùng gần nhất, hoặc tạo session đầu tiên.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios --show-keys",
          "description": "Mở client kèm overlay phím để học nhanh.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios --standalone",
          "description": "Chạy không qua daemon; session mất khi process thoát.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios --version",
          "description": "Kiểm tra phiên bản đang dùng.",
          "copy": true
        }
      ]
    },
    {
      "id": "tuios-modes",
      "title": "Mental model & modes",
      "entries": [
        {
          "kind": "text",
          "value": "Window Management",
          "description": "Mode sắp xếp, focus, resize và quản lý các window; session mới bắt đầu ở đây."
        },
        {
          "kind": "text",
          "value": "Terminal",
          "description": "Mode gửi phím trực tiếp vào shell/chương trình đang focus."
        },
        {
          "kind": "shortcut",
          "value": "I / Enter",
          "description": "Vào Terminal mode.",
          "context": "Window Management"
        },
        {
          "kind": "shortcut",
          "value": "Alt+Esc / Ctrl+B → Esc",
          "description": "Quay về Window Management; Esc đơn lẻ vẫn được gửi vào chương trình.",
          "context": "Terminal"
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+P",
          "description": "Mở command palette và tìm mọi action.",
          "context": "Mọi mode"
        },
        {
          "kind": "shortcut",
          "value": "Alt+Space",
          "description": "Mở launcher để tìm và chạy chương trình.",
          "context": "Mọi mode"
        }
      ]
    },
    {
      "id": "tuios-windows",
      "title": "Windows & focus",
      "entries": [
        {
          "kind": "shortcut",
          "value": "N",
          "description": "Tạo window mới trong session hiện tại.",
          "context": "Window Management"
        },
        {
          "kind": "shortcut",
          "value": "Tab / Shift+Tab",
          "description": "Focus window tiếp theo / trước đó.",
          "context": "Window Management"
        },
        {
          "kind": "shortcut",
          "value": "1…9",
          "description": "Focus window theo số hiển thị.",
          "context": "Window Management"
        },
        {
          "kind": "shortcut",
          "value": "Alt+← / Alt+→ / Alt+↑ / Alt+↓",
          "description": "Focus window lân cận theo hướng.",
          "context": "Window Management"
        },
        {
          "kind": "shortcut",
          "value": "Z / Ctrl+B → Z",
          "description": "Zoom hoặc bỏ zoom window hiện tại.",
          "context": "Window Management / Terminal"
        },
        {
          "kind": "command",
          "value": "tuios new-window dev --cwd ~/dev",
          "description": "Tạo window tên dev trong session đang active.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios focus-window next",
          "description": "Focus window kế tiếp từ CLI.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios list-windows --json",
          "description": "Liệt kê window dưới dạng JSON cho script.",
          "copy": true
        }
      ]
    },
    {
      "id": "tuios-layout",
      "title": "Layout & workspaces",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+B → Space",
          "description": "Bật/tắt BSP tiling."
        },
        {
          "kind": "shortcut",
          "value": "Alt+1…9",
          "description": "Chuyển workspace.",
          "context": "Mọi mode"
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+B → L → S",
          "description": "Lưu layout template."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+B → L → L",
          "description": "Nạp layout template."
        },
        {
          "kind": "command",
          "value": "tuios list-workspaces",
          "description": "Liệt kê workspace trong session.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios select-workspace 2",
          "description": "Chuyển client sang workspace 2.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios set-layout tiled",
          "description": "Chuyển layout qua CLI/control command.",
          "copy": true
        }
      ]
    },
    {
      "id": "tuios-sessions",
      "title": "Sessions & daemon",
      "entries": [
        {
          "kind": "command",
          "value": "tuios new work --cwd ~/dev/work",
          "description": "Tạo và attach session work với thư mục khởi đầu.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios new build --detach",
          "description": "Tạo headless session cho script/CI.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios ls",
          "description": "Liệt kê các session daemon đang quản lý.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios attach work",
          "description": "Attach session work.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios attach work -c",
          "description": "Attach, hoặc tạo nếu session chưa tồn tại.",
          "copy": true
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+B → D",
          "description": "Detach client; shell/process tiếp tục chạy trong daemon."
        },
        {
          "kind": "command",
          "value": "tuios rename-session work project-x",
          "description": "Đổi tên session.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios kill-session work",
          "description": "Dừng session và toàn bộ window của nó.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "tuios kill-server",
          "description": "Dừng daemon và các session đang chạy.",
          "copy": true,
          "danger": true
        }
      ]
    },
    {
      "id": "tuios-copy-help",
      "title": "Copy mode & trợ giúp",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+B → [",
          "description": "Vào copy mode / scrollback."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+B → ?",
          "description": "Mở help đầy đủ."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+B",
          "description": "Giữ nửa giây để hiện bảng các prefix command.",
          "context": "Mọi mode"
        },
        {
          "kind": "command",
          "value": "tuios help",
          "description": "Xem trợ giúp tổng quan.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios help -i",
          "description": "Tìm mọi command trong explorer tương tác.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios help new-window",
          "description": "Trợ giúp cho một command cụ thể.",
          "copy": true
        }
      ]
    },
    {
      "id": "tuios-config",
      "title": "Config & keybindings",
      "entries": [
        {
          "kind": "command",
          "value": "tuios config path",
          "description": "In đường dẫn file config đang dùng.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios config edit",
          "description": "Mở config bằng $EDITOR/$VISUAL.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios config browse",
          "description": "Tìm và chỉnh option trong explorer.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios config apply",
          "description": "Áp dụng config vào daemon đang chạy.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios config origin",
          "description": "Xem file nào thiết lập từng option.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios config prune --dry-run",
          "description": "Xem các key trùng default có thể loại bỏ.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios keybinds browse",
          "description": "Duyệt/search tất cả binding.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios keybinds explain alt+left",
          "description": "Giải thích scope và xung đột của một phím.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios keybinds doctor",
          "description": "Phát hiện binding bị chiếm hoặc trùng.",
          "copy": true
        }
      ]
    },
    {
      "id": "tuios-automation",
      "title": "Điều khiển & automation",
      "entries": [
        {
          "kind": "command",
          "value": "tuios send-text -s build 'npm test'",
          "description": "Gửi text vào session build.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios send-keys -s work 'ctrl+c'",
          "description": "Gửi chord/phím đặc biệt vào pane.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios capture-pane -s work",
          "description": "Lấy nội dung pane hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios wait-for window-output -s build --pattern 'Build complete'",
          "description": "Chờ output khớp pattern.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios run-command --json NewWindow dev",
          "description": "Chạy action nội bộ và nhận JSON.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios tape exec workflow.tape",
          "description": "Phát lại một tape workflow.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios --skill",
          "description": "In hướng dẫn để coding agent điều khiển TUIOS.",
          "copy": true
        }
      ]
    },
    {
      "id": "tuios-remote",
      "title": "Remote hosts",
      "entries": [
        {
          "kind": "command",
          "value": "tuios hosts add build you@buildbox",
          "description": "Đặt tên cho SSH host.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios hosts test build",
          "description": "Kiểm tra kết nối tới host đã cấu hình.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios attach --host build api",
          "description": "Attach session api trên máy build.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios new --host build ci -d",
          "description": "Tạo detached session ci trên máy từ xa.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios new-window deploy --host build",
          "description": "Mở một window chạy process trên host build.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "tuios list-agents --host build",
          "description": "Liệt kê agent được phát hiện trên host.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [
    "Leader mặc định là Ctrl+B: nhấn Ctrl và B cùng lúc, thả ra, rồi mới nhấn command kế tiếp.",
    "Daemon khôi phục layout và working directory sau restart; process đang chạy không được snapshot/khôi phục nguyên trạng."
  ],
  "sources": [
    {
      "label": "TUIOS — Getting Started",
      "url": "https://tuios.dev/docs/getting-started"
    },
    {
      "label": "TUIOS — Keybindings",
      "url": "https://tuios.dev/docs/keybindings"
    },
    {
      "label": "TUIOS — CLI Reference",
      "url": "https://tuios.dev/docs/cli-reference"
    }
  ]
};
