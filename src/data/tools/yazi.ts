import type { Tool } from "../../types";

export const yaziTool: Tool = {
  "id": "yazi",
  "name": "Yazi",
  "icon": "ya",
  "summary": "Terminal file manager • dùng y wrapper để thoát và cd theo thư mục cuối",
  "category": "file manager",
  "featured": true,
  "sections": [
    {
      "id": "yazi-launch-shell-wrapper",
      "title": "Launch / shell wrapper",
      "entries": [
        {
          "kind": "command",
          "value": "y",
          "description": "Mở Yazi bằng shell wrapper; khi thoát shell sẽ cd tới thư mục cuối."
        },
        {
          "kind": "command",
          "value": "yazi",
          "description": "Mở binary Yazi trực tiếp; shell CWD thường không đổi sau khi thoát.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "y ~/Downloads",
          "description": "Mở Yazi tại Downloads bằng wrapper.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "yazi --cwd-file=\"$tmp\"",
          "description": "Cơ chế wrapper dùng để nhận thư mục cuối."
        }
      ]
    },
    {
      "id": "yazi-navigation",
      "title": "Navigation",
      "entries": [
        {
          "kind": "shortcut",
          "value": "j / k / ↓ / ↑",
          "description": "Di chuyển xuống / lên."
        },
        {
          "kind": "shortcut",
          "value": "h / ←",
          "description": "Về thư mục cha."
        },
        {
          "kind": "shortcut",
          "value": "l / →",
          "description": "Vào thư mục / mở entry."
        },
        {
          "kind": "shortcut",
          "value": "gg / G",
          "description": "Lên đầu / xuống cuối danh sách."
        },
        {
          "kind": "shortcut",
          "value": "J / K",
          "description": "Preview xuống / lên 5 units."
        },
        {
          "kind": "shortcut",
          "value": "z",
          "description": "Jump tới directory bằng zoxide."
        },
        {
          "kind": "shortcut",
          "value": "Z",
          "description": "Jump/reveal bằng fzf."
        }
      ]
    },
    {
      "id": "yazi-open-file-operations",
      "title": "Open & file operations",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Enter / o",
          "description": "Mở file đã chọn."
        },
        {
          "kind": "shortcut",
          "value": "O",
          "description": "Mở tương tác và chọn opener."
        },
        {
          "kind": "shortcut",
          "value": "Tab",
          "description": "Xem thông tin file."
        },
        {
          "kind": "shortcut",
          "value": "y",
          "description": "Yank/copy file đã chọn."
        },
        {
          "kind": "shortcut",
          "value": "x",
          "description": "Yank/cut file đã chọn."
        },
        {
          "kind": "shortcut",
          "value": "p / P",
          "description": "Paste / paste và overwrite."
        },
        {
          "kind": "shortcut",
          "value": "Y / X",
          "description": "Hủy trạng thái yank."
        },
        {
          "kind": "shortcut",
          "value": "d / D",
          "description": "Trash / xóa vĩnh viễn."
        },
        {
          "kind": "shortcut",
          "value": "a",
          "description": "Tạo file; kết thúc bằng / để tạo folder."
        },
        {
          "kind": "shortcut",
          "value": "r",
          "description": "Rename file(s)."
        },
        {
          "kind": "shortcut",
          "value": ".",
          "description": "Ẩn/hiện hidden files."
        },
        {
          "kind": "shortcut",
          "value": "; / :",
          "description": "Chạy shell command / chạy và block đến khi xong."
        },
        {
          "kind": "shortcut",
          "value": "- / _",
          "description": "Symlink absolute / relative từ file đã yank."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+-",
          "description": "Tạo hardlink từ file đã yank."
        }
      ]
    },
    {
      "id": "yazi-selection",
      "title": "Selection",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Space",
          "description": "Toggle select entry hiện tại."
        },
        {
          "kind": "shortcut",
          "value": "v",
          "description": "Visual/select mode."
        },
        {
          "kind": "shortcut",
          "value": "V",
          "description": "Visual unset mode."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+a",
          "description": "Select tất cả."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+r",
          "description": "Đảo selection."
        },
        {
          "kind": "shortcut",
          "value": "Esc",
          "description": "Hủy selection."
        }
      ]
    },
    {
      "id": "yazi-copy-paths",
      "title": "Copy paths",
      "entries": [
        {
          "kind": "shortcut",
          "value": "cc",
          "description": "Copy full file path."
        },
        {
          "kind": "shortcut",
          "value": "cd",
          "description": "Copy directory path."
        },
        {
          "kind": "shortcut",
          "value": "cf",
          "description": "Copy filename."
        },
        {
          "kind": "shortcut",
          "value": "cn",
          "description": "Copy filename không extension."
        }
      ]
    },
    {
      "id": "yazi-filter-find-search",
      "title": "Filter / find / search",
      "entries": [
        {
          "kind": "shortcut",
          "value": "f",
          "description": "Filter entries trong thư mục hiện tại."
        },
        {
          "kind": "command",
          "value": "/",
          "description": "Find next file."
        },
        {
          "kind": "shortcut",
          "value": "?",
          "description": "Find previous file."
        },
        {
          "kind": "shortcut",
          "value": "n / N",
          "description": "Đi tới kết quả tìm tiếp / trước."
        },
        {
          "kind": "shortcut",
          "value": "s",
          "description": "Search theo tên bằng fd."
        },
        {
          "kind": "shortcut",
          "value": "S",
          "description": "Search theo nội dung bằng ripgrep."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+s",
          "description": "Cancel search đang chạy."
        }
      ]
    },
    {
      "id": "yazi-sorting",
      "title": "Sorting",
      "entries": [
        {
          "kind": "shortcut",
          "value": ",m / ,M",
          "description": "Modified time tăng / giảm."
        },
        {
          "kind": "shortcut",
          "value": ",b / ,B",
          "description": "Birth time tăng / giảm."
        },
        {
          "kind": "shortcut",
          "value": ",e / ,E",
          "description": "Extension tăng / giảm."
        },
        {
          "kind": "shortcut",
          "value": ",a / ,A",
          "description": "Alphabetical tăng / giảm."
        },
        {
          "kind": "shortcut",
          "value": ",n / ,N",
          "description": "Natural sort tăng / giảm."
        },
        {
          "kind": "shortcut",
          "value": ",s / ,S",
          "description": "Size tăng / giảm."
        },
        {
          "kind": "shortcut",
          "value": ",r",
          "description": "Random."
        }
      ]
    },
    {
      "id": "yazi-tabs",
      "title": "Tabs",
      "entries": [
        {
          "kind": "shortcut",
          "value": "t",
          "description": "Tab mới tại CWD."
        },
        {
          "kind": "shortcut",
          "value": "0…9",
          "description": "Chuyển sang tab số n."
        },
        {
          "kind": "shortcut",
          "value": "[ / ]",
          "description": "Tab trước / sau."
        },
        {
          "kind": "shortcut",
          "value": "{ / }",
          "description": "Swap tab với tab trước / sau."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+c",
          "description": "Đóng tab hiện tại."
        }
      ]
    },
    {
      "id": "yazi-config",
      "title": "Config",
      "entries": [
        {
          "kind": "command",
          "value": "~/.config/yazi/yazi.toml",
          "description": "Cấu hình chung."
        },
        {
          "kind": "command",
          "value": "~/.config/yazi/keymap.toml",
          "description": "Keybindings."
        },
        {
          "kind": "command",
          "value": "~/.config/yazi/theme.toml",
          "description": "Theme / màu sắc."
        }
      ]
    }
  ],
  "notes": [
    "Nguồn tham khảo chính cho keymap: Rico Berger Yazi Cheat Sheet. Một số binding có thể thay đổi nếu bạn custom keymap.toml."
  ],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "Yazi — Default Keybindings",
      "url": "https://yazi-rs.github.io/docs/quick-start#keybindings"
    }
  ]
};
