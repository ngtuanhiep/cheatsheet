import type { Tool } from "../../types";

export const lazyvimTool: Tool = {
  "id": "lazyvim",
  "name": "LazyVim",
  "icon": "LV",
  "summary": "Neovim distribution • IDE workflow dựng sẵn trên lazy.nvim, LSP, Snacks, formatter, diagnostics và Git",
  "category": "Neovim distro",
  "featured": true,
  "sections": [
    {
      "id": "lazyvim-mental-model",
      "title": "Mental model",
      "entries": [
        {
          "kind": "text",
          "value": "Space = <leader>",
          "description": "Leader mặc định của LazyVim. Nhấn Space và chờ để xem nhóm phím qua which-key."
        },
        {
          "kind": "command",
          "value": ":Lazy",
          "description": "Mở lazy.nvim UI: plugin loaded/not loaded, update, sync, profile."
        },
        {
          "kind": "command",
          "value": ":LazyHealth",
          "description": "Kiểm tra health của lazy.nvim/LazyVim setup."
        },
        {
          "kind": "command",
          "value": ":checkhealth",
          "description": "Chẩn đoán Neovim, provider, LSP, clipboard, Treesitter và plugin."
        },
        {
          "kind": "command",
          "value": ":Mason",
          "description": "Quản lý language server / formatter / linter do Mason cung cấp."
        },
        {
          "kind": "command",
          "value": ":LazyExtras",
          "description": "Bật/tắt LazyVim Extras cho ngôn ngữ và workflow bổ sung."
        }
      ]
    },
    {
      "id": "lazyvim-find-picker",
      "title": "Find / picker",
      "entries": [
        {
          "kind": "shortcut",
          "value": "<leader><space>",
          "description": "Find files trong project root."
        },
        {
          "kind": "shortcut",
          "value": "<leader>ff",
          "description": "Find Files (Root Dir)."
        },
        {
          "kind": "shortcut",
          "value": "<leader>fF",
          "description": "Find Files từ current working directory."
        },
        {
          "kind": "shortcut",
          "value": "<leader>fg",
          "description": "Find Git files."
        },
        {
          "kind": "shortcut",
          "value": "<leader>fr",
          "description": "Recent files."
        },
        {
          "kind": "shortcut",
          "value": "<leader>,",
          "description": "Chọn buffer đang mở."
        },
        {
          "kind": "shortcut",
          "value": "<leader>/",
          "description": "Grep nội dung trong project root."
        },
        {
          "kind": "shortcut",
          "value": "<leader>:",
          "description": "Command history picker."
        }
      ]
    },
    {
      "id": "lazyvim-explorer",
      "title": "Explorer",
      "entries": [
        {
          "kind": "shortcut",
          "value": "<leader>e",
          "description": "Mở/toggle Snacks Explorer tại project root."
        },
        {
          "kind": "shortcut",
          "value": "<leader>E",
          "description": "Mở Explorer tại current working directory."
        },
        {
          "kind": "shortcut",
          "value": "<leader>fe",
          "description": "Explorer root-dir; alias hữu ích trong nhóm Find."
        },
        {
          "kind": "shortcut",
          "value": "<leader>fE",
          "description": "Explorer current working directory."
        },
        {
          "kind": "shortcut",
          "value": "H",
          "description": "Trong Snacks Explorer: toggle hidden files nếu keymap mặc định của phiên bản hiện tại giữ binding này."
        },
        {
          "kind": "shortcut",
          "value": "?",
          "description": "Trong picker/explorer: mở help/keymap của UI hiện tại khi được hỗ trợ."
        }
      ]
    },
    {
      "id": "lazyvim-buffers-windows",
      "title": "Buffers / windows",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Shift+h / Shift+l",
          "description": "Buffer trước / sau trong workflow LazyVim mặc định."
        },
        {
          "kind": "shortcut",
          "value": "<leader>bd",
          "description": "Delete buffer hiện tại."
        },
        {
          "kind": "shortcut",
          "value": "<leader>bo",
          "description": "Delete các buffer khác."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+h/j/k/l",
          "description": "Di chuyển sang window trái / dưới / trên / phải."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+↑ / ↓",
          "description": "Tăng / giảm chiều cao window."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+← / →",
          "description": "Giảm / tăng chiều rộng window."
        },
        {
          "kind": "shortcut",
          "value": "<leader>- / <leader>|",
          "description": "Split ngang / split dọc theo keymap LazyVim phổ biến."
        }
      ]
    },
    {
      "id": "lazyvim-lsp-navigation",
      "title": "LSP navigation",
      "entries": [
        {
          "kind": "shortcut",
          "value": "gd",
          "description": "Go to definition."
        },
        {
          "kind": "shortcut",
          "value": "gD",
          "description": "Go to declaration khi language server hỗ trợ."
        },
        {
          "kind": "shortcut",
          "value": "gr",
          "description": "Mở nhóm goto/references theo keymap/plugin của phiên bản; dùng which-key để xem binding cụ thể."
        },
        {
          "kind": "shortcut",
          "value": "K",
          "description": "Hover documentation/type info."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+k",
          "description": "Signature help trong Insert mode nếu LSP hỗ trợ."
        },
        {
          "kind": "shortcut",
          "value": "Ctrl+o / Ctrl+i",
          "description": "Quay lại / đi tới trong jump list sau khi dùng definition/reference."
        }
      ]
    },
    {
      "id": "lazyvim-lsp-actions",
      "title": "LSP actions",
      "entries": [
        {
          "kind": "shortcut",
          "value": "<leader>ca",
          "description": "Code Action."
        },
        {
          "kind": "shortcut",
          "value": "<leader>cr",
          "description": "Rename symbol."
        },
        {
          "kind": "shortcut",
          "value": "<leader>cf",
          "description": "Format file/buffer theo formatter được cấu hình."
        },
        {
          "kind": "shortcut",
          "value": "<leader>cl",
          "description": "Mở LSP info / config action tùy phiên bản LazyVim."
        },
        {
          "kind": "shortcut",
          "value": "]d / [d",
          "description": "Diagnostic tiếp / trước."
        },
        {
          "kind": "shortcut",
          "value": "<leader>cd",
          "description": "Hiện diagnostic của dòng/cursor trong float khi mapping hiện tại hỗ trợ."
        }
      ]
    },
    {
      "id": "lazyvim-git",
      "title": "Git",
      "entries": [
        {
          "kind": "shortcut",
          "value": "<leader>gs",
          "description": "Git status picker."
        },
        {
          "kind": "shortcut",
          "value": "<leader>gd",
          "description": "Git diff hunks."
        },
        {
          "kind": "shortcut",
          "value": "<leader>gD",
          "description": "Git diff với origin/base."
        },
        {
          "kind": "shortcut",
          "value": "]h / [h",
          "description": "Đi tới Git hunk tiếp / trước khi gitsigns mapping đang active."
        },
        {
          "kind": "shortcut",
          "value": "<leader>ghp",
          "description": "Preview hunk nếu gitsigns group/keymap được bật."
        },
        {
          "kind": "shortcut",
          "value": "<leader>ghs / <leader>ghr",
          "description": "Stage / reset hunk khi gitsigns mapping được bật."
        }
      ]
    },
    {
      "id": "lazyvim-diagnostics-trouble",
      "title": "Diagnostics / trouble",
      "entries": [
        {
          "kind": "shortcut",
          "value": "<leader>xx",
          "description": "Toggle Trouble diagnostics."
        },
        {
          "kind": "shortcut",
          "value": "<leader>xX",
          "description": "Buffer diagnostics trong Trouble."
        },
        {
          "kind": "shortcut",
          "value": "<leader>cs",
          "description": "Symbols outline/picker tùy backend đã bật."
        },
        {
          "kind": "shortcut",
          "value": "<leader>cS",
          "description": "LSP references/symbols view tùy plugin cấu hình."
        },
        {
          "kind": "command",
          "value": ":LspInfo",
          "description": "Xem LSP client đang attach và thông tin server."
        }
      ]
    },
    {
      "id": "lazyvim-terminal-ui",
      "title": "Terminal / UI",
      "entries": [
        {
          "kind": "shortcut",
          "value": "Ctrl+/",
          "description": "Toggle terminal tích hợp theo LazyVim default phổ biến."
        },
        {
          "kind": "shortcut",
          "value": "<leader>ft",
          "description": "Terminal root-dir."
        },
        {
          "kind": "shortcut",
          "value": "<leader>fT",
          "description": "Terminal tại cwd."
        },
        {
          "kind": "shortcut",
          "value": "<leader>ul",
          "description": "Toggle line numbers."
        },
        {
          "kind": "shortcut",
          "value": "<leader>uL",
          "description": "Toggle relative line numbers."
        },
        {
          "kind": "shortcut",
          "value": "<leader>uw",
          "description": "Toggle wrap."
        },
        {
          "kind": "shortcut",
          "value": "<leader>us",
          "description": "Toggle spelling."
        }
      ]
    },
    {
      "id": "lazyvim-config-locations",
      "title": "Config locations",
      "entries": [
        {
          "kind": "command",
          "value": "~/.config/nvim/lua/config/options.lua",
          "description": "Options cá nhân: number, relativenumber, tab width, clipboard..."
        },
        {
          "kind": "command",
          "value": "~/.config/nvim/lua/config/keymaps.lua",
          "description": "Keymap cá nhân như jj/jk → Esc."
        },
        {
          "kind": "command",
          "value": "~/.config/nvim/lua/plugins/*.lua",
          "description": "Plugin specs và override plugin của LazyVim."
        },
        {
          "kind": "command",
          "value": "~/.config/nvim/lazyvim.json",
          "description": "Trạng thái Extras / schema config do LazyVim quản lý."
        },
        {
          "kind": "command",
          "value": "~/.config/nvim/lazy-lock.json",
          "description": "Lock version/commit plugin; thường commit vào Git nếu bạn quản lý dotfiles."
        }
      ]
    },
    {
      "id": "lazyvim-plugin-management",
      "title": "Plugin management",
      "entries": [
        {
          "kind": "command",
          "value": ":Lazy sync",
          "description": "Install/update/clean để trạng thái plugin khớp config."
        },
        {
          "kind": "command",
          "value": ":Lazy update",
          "description": "Update plugin."
        },
        {
          "kind": "command",
          "value": ":Lazy clean",
          "description": "Gỡ plugin không còn trong config."
        },
        {
          "kind": "command",
          "value": ":Lazy profile",
          "description": "Xem startup/profile plugin load."
        },
        {
          "kind": "command",
          "value": ":Lazy load plugin-name",
          "description": "Ép load plugin lazy-loaded để test/debug."
        },
        {
          "kind": "command",
          "value": ":verbose map {key}",
          "description": "Kiểm tra keymap đến từ file/plugin nào khi có conflict."
        }
      ]
    },
    {
      "id": "lazyvim-daily-workflow",
      "title": "Daily workflow",
      "entries": [
        {
          "kind": "command",
          "value": "nvim .",
          "description": "Mở project → Space e explorer → Space Space find file → Space / grep."
        },
        {
          "kind": "shortcut",
          "value": "Space → which-key",
          "description": "Khi quên keymap, nhấn Space rồi đọc menu thay vì học thuộc tất cả."
        },
        {
          "kind": "shortcut",
          "value": "gd → edit → Ctrl+o",
          "description": "Jump definition, sửa code, rồi quay lại vị trí trước."
        },
        {
          "kind": "shortcut",
          "value": "Space ca → Space cf",
          "description": "Code action rồi format."
        },
        {
          "kind": "shortcut",
          "value": "Space xx",
          "description": "Mở diagnostics khi xử lý lỗi project."
        }
      ]
    }
  ],
  "notes": [
    "LazyVim thay đổi keymap theo version, plugin backend và Extras. Khi có khác biệt, nhấn Space để xem which-key hoặc dùng :verbose map {key}. Các picker/explorer hiện đại của LazyVim thường dùng Snacks.nvim."
  ],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "LazyVim — Keymaps",
      "url": "https://www.lazyvim.org/keymaps"
    }
  ]
};
