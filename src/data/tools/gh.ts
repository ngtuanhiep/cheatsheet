import type { Tool } from "../../types";

export const ghTool: Tool = {
  "id": "gh",
  "name": "GitHub CLI",
  "icon": "GH",
  "summary": "Repo, issue, PR và Actions từ terminal",
  "category": "GitHub",
  "featured": false,
  "sections": [
    {
      "id": "gh-auth-repo",
      "title": "Auth / repo",
      "entries": [
        {
          "kind": "command",
          "value": "gh auth login",
          "description": "Login.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh auth status",
          "description": "Xem auth state.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh repo clone OWNER/REPO",
          "description": "Clone repo.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh repo view",
          "description": "Thông tin repo.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh repo view --web",
          "description": "Mở repo trên browser.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh repo create",
          "description": "Tạo repo tương tác.",
          "copy": true
        }
      ]
    },
    {
      "id": "gh-pull-requests",
      "title": "Pull requests",
      "entries": [
        {
          "kind": "command",
          "value": "gh pr create",
          "description": "Tạo PR.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh pr list",
          "description": "List PR.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh pr view 123",
          "description": "Xem PR #123.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh pr checkout 123",
          "description": "Checkout PR.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh pr diff 123",
          "description": "Xem diff.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh pr checks 123",
          "description": "Xem CI checks.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh pr merge 123",
          "description": "Merge PR.",
          "copy": true
        }
      ]
    },
    {
      "id": "gh-issues-actions",
      "title": "Issues / Actions",
      "entries": [
        {
          "kind": "command",
          "value": "gh issue list",
          "description": "List issues.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh issue create",
          "description": "Tạo issue.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh issue view 42",
          "description": "Xem issue.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh run list",
          "description": "List workflow runs.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh run view",
          "description": "Xem run.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh run watch",
          "description": "Theo dõi run.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh workflow list",
          "description": "List workflows.",
          "copy": true
        }
      ]
    },
    {
      "id": "gh-api",
      "title": "API",
      "entries": [
        {
          "kind": "command",
          "value": "gh api repos/{owner}/{repo}",
          "description": "GitHub API.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "gh api user --jq '.login'",
          "description": "API + jq query.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [],
  "verified": "15/10/2026",
  "sources": [
    {
      "label": "GitHub CLI Manual",
      "url": "https://cli.github.com/manual/"
    }
  ]
};
