import type { Tool } from "../../types";

export const starshipTool: Tool = {
  "id": "starship",
  "name": "Starship",
  "icon": "★",
  "summary": "Cross-shell prompt: Git, language version, env, status",
  "category": "prompt",
  "featured": false,
  "sections": [
    {
      "id": "starship-setup",
      "title": "Setup",
      "entries": [
        {
          "kind": "command",
          "value": "eval \"$(starship init zsh)\"",
          "description": "Thêm vào ~/.zshrc.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "source ~/.zshrc",
          "description": "Reload shell.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "mkdir -p ~/.config && touch ~/.config/starship.toml",
          "description": "Tạo config.",
          "copy": true
        }
      ]
    },
    {
      "id": "starship-inspect",
      "title": "Inspect",
      "entries": [
        {
          "kind": "command",
          "value": "starship explain",
          "description": "Giải thích modules đang render.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "starship timings",
          "description": "Xem module nào render chậm.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "starship prompt",
          "description": "Render prompt hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "starship module git_branch",
          "description": "Render riêng module.",
          "copy": true
        }
      ]
    },
    {
      "id": "starship-config-ideas",
      "title": "Config ideas",
      "entries": [
        {
          "kind": "text",
          "value": "add_newline = false",
          "description": "Không thêm blank line."
        },
        {
          "kind": "text",
          "value": "format = '$directory$git_branch$character'",
          "description": "Prompt tối giản."
        },
        {
          "kind": "text",
          "value": "command_timeout = 1000",
          "description": "Timeout module command."
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "Starship Configuration",
      "url": "https://starship.rs/config/"
    }
  ]
};
