import type { Tool } from "../../types";

export const itermTool: Tool = {
  "id": "iterm",
  "name": "iTerm2",
  "icon": "⌘",
  "summary": "Terminal emulator cho macOS: tabs, panes, profiles, search",
  "category": "terminal",
  "featured": false,
  "sections": [
    {
      "id": "iterm-tabs-panes",
      "title": "Tabs / panes",
      "entries": [
        {
          "kind": "shortcut",
          "value": "⌘T",
          "description": "Tab mới."
        },
        {
          "kind": "shortcut",
          "value": "⌘D",
          "description": "Split pane dọc."
        },
        {
          "kind": "shortcut",
          "value": "⌘⇧D",
          "description": "Split pane ngang."
        },
        {
          "kind": "shortcut",
          "value": "⌘W",
          "description": "Đóng pane/tab hiện tại."
        },
        {
          "kind": "shortcut",
          "value": "⌘] / ⌘[",
          "description": "Pane tiếp / trước."
        },
        {
          "kind": "shortcut",
          "value": "⌘⌥←/→/↑/↓",
          "description": "Đi giữa panes theo hướng (default thường dùng)."
        }
      ]
    },
    {
      "id": "iterm-navigation-search",
      "title": "Navigation / search",
      "entries": [
        {
          "kind": "shortcut",
          "value": "⌘F",
          "description": "Search terminal output."
        },
        {
          "kind": "shortcut",
          "value": "⌘K",
          "description": "Clear scrollback/buffer."
        },
        {
          "kind": "shortcut",
          "value": "⌘Enter",
          "description": "Toggle fullscreen."
        },
        {
          "kind": "shortcut",
          "value": "⌘1…⌘9",
          "description": "Switch tab theo số."
        },
        {
          "kind": "shortcut",
          "value": "⌘⇧Enter",
          "description": "Maximize pane (tùy key mapping/version)."
        }
      ]
    },
    {
      "id": "iterm-daily-setup",
      "title": "Daily setup",
      "entries": [
        {
          "kind": "text",
          "value": "Profiles",
          "description": "Tạo profile riêng coding/SSH."
        },
        {
          "kind": "text",
          "value": "Separate Light/Dark",
          "description": "Cho iTerm đổi color preset theo macOS appearance."
        },
        {
          "kind": "text",
          "value": "Nerd Font",
          "description": "Cần nếu prompt/Yazi/Starship dùng icons."
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "iTerm2 Documentation",
      "url": "https://iterm2.com/documentation.html"
    }
  ]
};
