import type { Tool } from "../../types";

export const brewTool: Tool = {
  "id": "brew",
  "name": "Homebrew",
  "icon": "BR",
  "summary": "Package manager cho formula, cask, service và cấu hình máy có thể tái tạo bằng Brewfile.",
  "category": "package manager",
  "featured": true,
  "verified": "15/10/2026",
  "sections": [
    {
      "id": "brew-mental-model",
      "title": "Mental model",
      "entries": [
        {
          "kind": "text",
          "value": "formula",
          "description": "Package thường được build hoặc cài dạng bottle vào Cellar."
        },
        {
          "kind": "text",
          "value": "cask",
          "description": "Ứng dụng/binary đóng gói sẵn, thường là app macOS."
        },
        {
          "kind": "text",
          "value": "tap",
          "description": "Repository bổ sung formula, cask hoặc external command."
        },
        {
          "kind": "text",
          "value": "keg-only",
          "description": "Formula không được symlink tự động vào prefix chung."
        },
        {
          "kind": "command",
          "value": "brew --prefix",
          "description": "In prefix Homebrew hiện tại; thường là /opt/homebrew trên Apple Silicon.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew config",
          "description": "In cấu hình Homebrew và môi trường chẩn đoán.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-discover",
      "title": "Tìm & xem thông tin",
      "entries": [
        {
          "kind": "command",
          "value": "brew search ripgrep",
          "description": "Tìm formula/cask theo tên.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew info ripgrep",
          "description": "Xem version, dependency, option và trạng thái cài đặt.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew info --cask visual-studio-code",
          "description": "Xem thông tin cask.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew home ripgrep",
          "description": "Mở homepage của package.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew desc ripgrep",
          "description": "Xem mô tả ngắn.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew formulae",
          "description": "Liệt kê formula có sẵn.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-install",
      "title": "Cài, gỡ & liên kết",
      "entries": [
        {
          "kind": "command",
          "value": "brew install ripgrep",
          "description": "Cài một formula.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew install --cask ghostty",
          "description": "Cài ứng dụng qua cask.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew reinstall ripgrep",
          "description": "Cài lại formula hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew uninstall ripgrep",
          "description": "Gỡ formula.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew uninstall --cask ghostty",
          "description": "Gỡ cask.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew uninstall --cask --zap ghostty",
          "description": "Gỡ cask cùng dữ liệu phụ do cask khai báo.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "brew link --overwrite package",
          "description": "Symlink keg vào prefix; kiểm tra xung đột trước khi dùng.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "brew unlink package",
          "description": "Gỡ symlink mà không uninstall keg.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-update",
      "title": "Update & upgrade",
      "entries": [
        {
          "kind": "command",
          "value": "brew update",
          "description": "Cập nhật Homebrew và metadata formula/cask.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew outdated",
          "description": "Liệt kê package có bản mới.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew upgrade",
          "description": "Nâng cấp toàn bộ package outdated.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew upgrade ripgrep",
          "description": "Chỉ nâng cấp một formula.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew pin package",
          "description": "Giữ formula ở version hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew unpin package",
          "description": "Cho phép formula được upgrade trở lại.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-inventory",
      "title": "Inventory & dependencies",
      "entries": [
        {
          "kind": "command",
          "value": "brew list",
          "description": "Liệt kê formula đã cài.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew list --cask",
          "description": "Liệt kê cask đã cài.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew leaves",
          "description": "Formula được cài trực tiếp, không chỉ là dependency.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew deps --tree package",
          "description": "Hiện cây dependency của package.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew uses --installed package",
          "description": "Package đã cài nào phụ thuộc vào package này.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew missing",
          "description": "Kiểm tra dependency bị thiếu của package đã cài.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-cleanup",
      "title": "Cleanup an toàn",
      "entries": [
        {
          "kind": "command",
          "value": "brew cleanup --dry-run",
          "description": "Xem trước file/version cũ sẽ bị xóa.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew cleanup",
          "description": "Xóa download và version cũ không còn cần.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew autoremove --dry-run",
          "description": "Xem dependency mồ côi có thể gỡ.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew autoremove",
          "description": "Gỡ dependency chỉ được cài cho package nay đã mất.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "brew cleanup -s",
          "description": "Dọn cache mạnh hơn; nên chạy dry-run trước.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "brew --cache",
          "description": "In thư mục cache để kiểm tra dung lượng.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-services",
      "title": "Services",
      "entries": [
        {
          "kind": "command",
          "value": "brew services list",
          "description": "Liệt kê service và trạng thái.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew services start postgresql@17",
          "description": "Start ngay và đăng ký tự chạy khi login.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew services run postgresql@17",
          "description": "Chạy service nhưng không đăng ký tự khởi động.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew services stop postgresql@17",
          "description": "Dừng và bỏ đăng ký tự khởi động.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew services restart postgresql@17",
          "description": "Restart service.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew services info postgresql@17",
          "description": "Xem chi tiết service.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-taps",
      "title": "Taps & versions",
      "entries": [
        {
          "kind": "command",
          "value": "brew tap",
          "description": "Liệt kê tap đang dùng.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew tap owner/repo",
          "description": "Thêm tap bên thứ ba.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew untap owner/repo",
          "description": "Gỡ tap khi không còn formula phụ thuộc.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew extract --version=1.2 package owner/repo",
          "description": "Đưa version cũ vào tap riêng để quản lý.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew list --versions package",
          "description": "Xem các version đã cài trong rack.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-bundle",
      "title": "Brewfile & tái tạo máy",
      "entries": [
        {
          "kind": "command",
          "value": "brew bundle dump --describe",
          "description": "Tạo Brewfile từ trạng thái đang cài.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew bundle check --verbose",
          "description": "Kiểm tra Brewfile còn thiếu dependency nào.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew bundle install",
          "description": "Cài/upgrade dependency khai báo trong Brewfile.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew bundle list --all",
          "description": "Liệt kê mọi dependency trong Brewfile.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew bundle cleanup",
          "description": "Preview dependency không có trong Brewfile.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew bundle cleanup --force",
          "description": "Thực sự gỡ dependency không có trong Brewfile.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "brew bundle --global",
          "description": "Dùng Brewfile global trong thư mục cấu hình người dùng.",
          "copy": true
        }
      ]
    },
    {
      "id": "brew-diagnose",
      "title": "Shell & troubleshooting",
      "entries": [
        {
          "kind": "command",
          "value": "eval \"$(brew shellenv)\"",
          "description": "Thêm Homebrew vào PATH cho shell hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew doctor",
          "description": "Chạy kiểm tra môi trường và in cảnh báo có thể xử lý.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew update-reset",
          "description": "Reset repository Homebrew về upstream; chỉ dùng khi update hỏng.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "brew linkage --test package",
          "description": "Kiểm tra library link bị thiếu.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew commands",
          "description": "Liệt kê command built-in và external.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew analytics state",
          "description": "Xem trạng thái analytics.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "brew analytics off",
          "description": "Tắt analytics của Homebrew.",
          "copy": true
        }
      ]
    }
  ],
  "notes": [
    "Không chạy Homebrew bằng sudo. Dùng --dry-run trước cleanup/autoremove và đọc danh sách target trước khi xác nhận.",
    "brew update cập nhật metadata; brew upgrade mới nâng phiên bản package đã cài."
  ],
  "sources": [
    {
      "label": "Homebrew — brew(1) Manpage",
      "url": "https://docs.brew.sh/Manpage"
    }
  ]
};
