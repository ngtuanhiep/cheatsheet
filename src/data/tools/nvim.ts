import type { Tool } from "../../types";

export const nvimTool: Tool = {
  "id": "nvim",
  "name": "Neovim",
  "icon": "NV",
  "summary": "Modal editor • motions + operators + text objects tạo thành “ngôn ngữ chỉnh sửa”",
  "category": "editor",
  "featured": true,
  "sections": [
    {
      "id": "nvim-modes",
      "title": "Modes",
      "entries": [
        {
          "kind": "shortcut",
          "value": "i / I",
          "description": "Insert trước cursor / tại first non-blank."
        },
        {
          "kind": "shortcut",
          "value": "a / A",
          "description": "Insert sau cursor / cuối dòng."
        },
        {
          "kind": "shortcut",
          "value": "o / O",
          "description": "Dòng mới dưới / trên rồi Insert."
        },
        {
          "kind": "shortcut",
          "value": "v / V / Ctrl+v",
          "description": "Visual character / line / block."
        },
        {
          "kind": "command",
          "value": ":",
          "description": "Command-line mode."
        },
        {
          "kind": "shortcut",
          "value": "R",
          "description": "Replace mode."
        },
        {
          "kind": "shortcut",
          "value": "Esc / Ctrl+[",
          "description": "Về Normal mode."
        }
      ]
    },
    {
      "id": "nvim-navigation",
      "title": "Navigation",
      "entries": [
        {
          "kind": "shortcut",
          "value": "h j k l",
          "description": "Trái / xuống / lên / phải."
        },
        {
          "kind": "shortcut",
          "value": "w / W",
          "description": "Đầu word / WORD tiếp theo."
        },
        {
          "kind": "shortcut",
          "value": "b / B",
          "description": "Đầu word / WORD trước."
        },
        {
          "kind": "shortcut",
          "value": "e / E",
          "description": "Cuối word / WORD."
        },
        {
          "kind": "shortcut",
          "value": "0 / ^ / $",
          "description": "Đầu dòng / first non-blank / cuối dòng."
        },
        {
          "kind": "shortcut",
          "value": "gg / G",
          "description": "Đầu / cuối file."
        },
        {
          "kind": "command",
          "value": ":{N}",
          "description": "Đi tới line N."
        },
        {
          "kind": "shortcut",
          "value": "%",
          "description": "Matching bracket."
        },
        {
          "kind": "shortcut",
          "value": "{ / }",
          "description": "Paragraph trước / sau."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+d / Ctrl+u",
          "description": "Nửa trang xuống / lên."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+f / Ctrl+b",
          "description": "Một trang xuống / lên."
        }
      ]
    },
    {
      "id": "nvim-editing",
      "title": "Editing",
      "entries": [
        {
          "kind": "shortcut",
          "value": "x",
          "description": "Xóa ký tự."
        },
        {
          "kind": "shortcut",
          "value": "dd / dw / D",
          "description": "Xóa dòng / word / tới cuối dòng."
        },
        {
          "kind": "shortcut",
          "value": "yy / yw / Y",
          "description": "Yank dòng / word / tới EOL."
        },
        {
          "kind": "shortcut",
          "value": "p / P",
          "description": "Paste sau / trước."
        },
        {
          "kind": "shortcut",
          "value": "u / Ctrl+r",
          "description": "Undo / redo."
        },
        {
          "kind": "shortcut",
          "value": "cc / cw / C",
          "description": "Change dòng / word / tới EOL."
        },
        {
          "kind": "shortcut",
          "value": "r{char}",
          "description": "Replace 1 ký tự."
        },
        {
          "kind": "shortcut",
          "value": "~",
          "description": "Toggle case."
        },
        {
          "kind": "shortcut",
          "value": "J",
          "description": "Join dòng dưới."
        },
        {
          "kind": "shortcut",
          "value": ".",
          "description": "Lặp lại thay đổi cuối."
        }
      ]
    },
    {
      "id": "nvim-text-objects",
      "title": "Text objects",
      "entries": [
        {
          "kind": "shortcut",
          "value": "diw / daw",
          "description": "Delete inner / around word."
        },
        {
          "kind": "shortcut",
          "value": "ci\" / ca\"",
          "description": "Change trong / cả dấu quote."
        },
        {
          "kind": "shortcut",
          "value": "yi( / ya(",
          "description": "Yank trong / cả ngoặc ()."
        },
        {
          "kind": "shortcut",
          "value": "vi{ / va{",
          "description": "Visual trong / cả {}."
        },
        {
          "kind": "shortcut",
          "value": "dit / dat",
          "description": "Text trong / cả HTML tag."
        },
        {
          "kind": "shortcut",
          "value": "dip / dap",
          "description": "Inner / around paragraph."
        }
      ]
    },
    {
      "id": "nvim-search-replace",
      "title": "Search & replace",
      "entries": [
        {
          "kind": "command",
          "value": "/pattern / ?pattern",
          "description": "Search xuôi / ngược."
        },
        {
          "kind": "shortcut",
          "value": "n / N",
          "description": "Match tiếp / trước."
        },
        {
          "kind": "shortcut",
          "value": "* / #",
          "description": "Search word dưới cursor xuôi / ngược."
        },
        {
          "kind": "command",
          "value": ":s/old/new/",
          "description": "Replace match đầu của dòng.",
          "copy": true
        },
        {
          "kind": "command",
          "value": ":%s/old/new/g",
          "description": "Replace mọi match trong file.",
          "copy": true
        },
        {
          "kind": "command",
          "value": ":%s/old/new/gc",
          "description": "Replace toàn file có confirm.",
          "copy": true
        },
        {
          "kind": "command",
          "value": ":noh",
          "description": "Clear search highlight."
        }
      ]
    },
    {
      "id": "nvim-files-buffers",
      "title": "Files & buffers",
      "entries": [
        {
          "kind": "command",
          "value": ":e file",
          "description": "Edit file.",
          "copy": true
        },
        {
          "kind": "command",
          "value": ":w / :wq / :x",
          "description": "Save / save+quit."
        },
        {
          "kind": "command",
          "value": ":q / :q!",
          "description": "Quit / force quit."
        },
        {
          "kind": "command",
          "value": ":wqa",
          "description": "Save all + quit."
        },
        {
          "kind": "command",
          "value": ":ls / :buffers",
          "description": "List buffers."
        },
        {
          "kind": "command",
          "value": ":bn / :bp",
          "description": "Buffer tiếp / trước."
        },
        {
          "kind": "command",
          "value": ":bd",
          "description": "Đóng buffer."
        },
        {
          "kind": "command",
          "value": ":b N",
          "description": "Switch buffer N."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+^",
          "description": "Toggle 2 buffer gần nhất."
        }
      ]
    },
    {
      "id": "nvim-splits-windows",
      "title": "Splits & windows",
      "entries": [
        {
          "kind": "command",
          "value": ":sp / :vsp",
          "description": "Split ngang / dọc."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+w s / v",
          "description": "Split ngang / dọc."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+w h/j/k/l",
          "description": "Đi giữa windows."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+w H/J/K/L",
          "description": "Đẩy window ra cạnh."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+w =",
          "description": "Equalize sizes."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+w _ / |",
          "description": "Max height / width."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+w +/-",
          "description": "Tăng / giảm height."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+w q / o",
          "description": "Close / close others."
        }
      ]
    },
    {
      "id": "nvim-tabs",
      "title": "Tabs",
      "entries": [
        {
          "kind": "command",
          "value": ":tabnew",
          "description": "Tab mới."
        },
        {
          "kind": "command",
          "value": ":tabnew file",
          "description": "File trong tab mới."
        },
        {
          "kind": "shortcut",
          "value": "gt / gT",
          "description": "Tab tiếp / trước."
        },
        {
          "kind": "shortcut",
          "value": "{N}gt",
          "description": "Tab N."
        },
        {
          "kind": "command",
          "value": ":tabclose / :tabonly",
          "description": "Close tab / close others."
        }
      ]
    },
    {
      "id": "nvim-marks-jumps",
      "title": "Marks & jumps",
      "entries": [
        {
          "kind": "shortcut",
          "value": "m{a-z}",
          "description": "Đặt local mark."
        },
        {
          "kind": "shortcut",
          "value": "m{A-Z}",
          "description": "Đặt global mark."
        },
        {
          "kind": "shortcut",
          "value": "'{mark}",
          "description": "Jump tới dòng mark."
        },
        {
          "kind": "shortcut",
          "value": "`{mark}",
          "description": "Jump đúng vị trí mark."
        },
        {
          "kind": "shortcut",
          "value": "''",
          "description": "Về vị trí trước."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+o / Ctrl+i",
          "description": "Jump history back / forward."
        },
        {
          "kind": "command",
          "value": ":marks",
          "description": "List marks."
        }
      ]
    },
    {
      "id": "nvim-macros-registers",
      "title": "Macros & registers",
      "entries": [
        {
          "kind": "shortcut",
          "value": "q{a-z}",
          "description": "Record macro vào register."
        },
        {
          "kind": "shortcut",
          "value": "q",
          "description": "Dừng record."
        },
        {
          "kind": "text",
          "value": "@{a-z} / @@",
          "description": "Play macro / repeat macro cuối."
        },
        {
          "kind": "shortcut",
          "value": "{N}@a",
          "description": "Play N lần."
        },
        {
          "kind": "command",
          "value": ":reg",
          "description": "Xem registers/macros."
        }
      ]
    },
    {
      "id": "nvim-visual-mode",
      "title": "Visual mode",
      "entries": [
        {
          "kind": "shortcut",
          "value": "v/V/Ctrl+v + motion",
          "description": "Select char/line/block."
        },
        {
          "kind": "shortcut",
          "value": "d / y / c",
          "description": "Delete / yank / change selection."
        },
        {
          "kind": "shortcut",
          "value": "> / <",
          "description": "Indent / unindent."
        },
        {
          "kind": "shortcut",
          "value": "u / U",
          "description": "lowercase / UPPERCASE."
        },
        {
          "kind": "shortcut",
          "value": "gv",
          "description": "Reselect selection cuối."
        }
      ]
    },
    {
      "id": "nvim-folding",
      "title": "Folding",
      "entries": [
        {
          "kind": "shortcut",
          "value": "zc / zo / za",
          "description": "Close / open / toggle fold."
        },
        {
          "kind": "shortcut",
          "value": "zM / zR",
          "description": "Close all / open all."
        },
        {
          "kind": "shortcut",
          "value": "zf{motion}",
          "description": "Tạo fold."
        },
        {
          "kind": "shortcut",
          "value": "zd",
          "description": "Xóa fold."
        },
        {
          "kind": "shortcut",
          "value": "zj / zk",
          "description": "Fold tiếp / trước."
        }
      ]
    },
    {
      "id": "nvim-neovim-lsp",
      "title": "Neovim / LSP",
      "entries": [
        {
          "kind": "command",
          "value": ":checkhealth",
          "description": "Chẩn đoán setup Neovim."
        },
        {
          "kind": "command",
          "value": ":terminal",
          "description": "Terminal tích hợp."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+\\ Ctrl+n",
          "description": "Từ terminal về Normal."
        },
        {
          "kind": "command",
          "value": ":Lazy",
          "description": "Lazy.nvim manager (nếu cài)."
        },
        {
          "kind": "command",
          "value": ":Mason",
          "description": "Mason installer (nếu cài)."
        },
        {
          "kind": "shortcut",
          "value": "K",
          "description": "LSP hover docs."
        },
        {
          "kind": "shortcut",
          "value": "gd",
          "description": "Go to declaration/definition tùy mapping."
        },
        {
          "kind": "shortcut",
          "value": "grr",
          "description": "References."
        },
        {
          "kind": "shortcut",
          "value": "gri",
          "description": "Implementation."
        },
        {
          "kind": "shortcut",
          "value": "grn",
          "description": "Rename symbol."
        },
        {
          "kind": "shortcut",
          "value": "gra",
          "description": "Code action."
        },
        {
          "kind": "shortcut",
          "value": "]d / [d",
          "description": "Diagnostic tiếp / trước."
        }
      ]
    },
    {
      "id": "nvim-useful-commands",
      "title": "Useful commands",
      "entries": [
        {
          "kind": "command",
          "value": ":set number",
          "description": "Line numbers."
        },
        {
          "kind": "command",
          "value": ":set relativenumber",
          "description": "Relative line numbers."
        },
        {
          "kind": "command",
          "value": ":set wrap / nowrap",
          "description": "Toggle wrap."
        },
        {
          "kind": "command",
          "value": ":set ignorecase",
          "description": "Case-insensitive search."
        },
        {
          "kind": "command",
          "value": ":set spell",
          "description": "Spell check."
        },
        {
          "kind": "command",
          "value": ":sort",
          "description": "Sort lines."
        },
        {
          "kind": "command",
          "value": ":!cmd",
          "description": "Run shell command."
        },
        {
          "kind": "command",
          "value": ":r !cmd",
          "description": "Chèn shell output."
        },
        {
          "kind": "command",
          "value": ":verbose map {key}",
          "description": "Xem mapping đến từ đâu."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+g",
          "description": "File + cursor info."
        }
      ]
    }
  ],
  "notes": [
    "Nguồn tham khảo chính: neovimcheatsheet.com. Keybindings plugin hoặc config cá nhân có thể override mặc định."
  ],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "Neovim — User Manual",
      "url": "https://neovim.io/doc/user/"
    }
  ]
};
