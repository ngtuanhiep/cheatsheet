import type { Tool } from "../../types";

export const shellDiagnosticsTool: Tool = {
  "id": "shell-diagnostics",
  "name": "Shell & PATH",
  "icon": "$?",
  "summary": "Tìm đúng executable, phân biệt alias/function/binary và lần theo nguyên nhân một command chạy sai bản.",
  "category": "System",
  "featured": true,
  "verified": "15/10/2026",
  "sections": [
    {
      "id": "shell-locate",
      "title": "Executable resolution",
      "entries": [
        {
          "kind": "command",
          "value": "command -v fzf",
          "description": "Cách portable để kiểm tra shell có resolve được fzf hay không; phù hợp dùng trong script.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ],
          "aliases": [
            "find executable",
            "path lookup"
          ]
        },
        {
          "kind": "command",
          "value": "type -a fzf",
          "description": "Liệt kê mọi cách shell có thể resolve fzf: alias, function, builtin và các binary trong PATH.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ],
          "aliases": [
            "all executable locations"
          ]
        },
        {
          "kind": "command",
          "value": "which fzf",
          "description": "Hiển thị binary đầu tiên theo PATH. Hữu ích để kiểm tra nhanh, nhưng trong script nên ưu tiên command -v.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ]
        },
        {
          "kind": "command",
          "value": "whence -va fzf",
          "description": "Bản kiểm tra chuyên sâu của zsh: in tất cả alias, function, builtin và đường dẫn khớp.",
          "copy": true,
          "platforms": [
            "macOS"
          ],
          "context": "zsh"
        },
        {
          "kind": "command",
          "value": "whereis fzf",
          "description": "Tìm binary, source và man page trong các vị trí hệ thống chuẩn.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "type -a fzf; command -V fzf; alias fzf 2>/dev/null",
          "description": "Một lượt kiểm tra xem fzf đang bị alias/function che khuất hay được resolve thành binary nào.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ]
        },
        {
          "kind": "command",
          "value": "hash -r",
          "description": "Xóa cache đường dẫn command của shell sau khi cài, gỡ hoặc đổi vị trí binary.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ],
          "aliases": [
            "rehash command cache"
          ]
        }
      ]
    },
    {
      "id": "shell-path",
      "title": "Inspect PATH & binary",
      "entries": [
        {
          "kind": "command",
          "value": "printf '%s\\n' \"${PATH//:/$'\\n'}\" | nl -ba",
          "description": "Tách PATH thành từng dòng có số thứ tự để phát hiện mục trùng hoặc sai thứ tự.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ],
          "context": "bash / zsh"
        },
        {
          "kind": "command",
          "value": "printf '%s\\n' ${path[@]}",
          "description": "Hiển thị PATH theo từng phần tử bằng biến mảng liên kết sẵn của zsh.",
          "copy": true,
          "platforms": [
            "macOS"
          ],
          "context": "zsh"
        },
        {
          "kind": "command",
          "value": "bin=$(command -v fzf) && printf '%s\\n' \"$bin\" && file \"$bin\"",
          "description": "Resolve fzf rồi kiểm tra loại file và kiến trúc binary trong một lệnh.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ]
        },
        {
          "kind": "command",
          "value": "readlink -f \"$(command -v fzf)\"",
          "description": "Theo toàn bộ symlink để lấy đường dẫn binary thật.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "otool -L \"$(command -v fzf)\"",
          "description": "Liệt kê dynamic libraries mà binary fzf liên kết trên macOS.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "ldd \"$(command -v fzf)\"",
          "description": "Liệt kê shared libraries và đường dẫn được loader chọn trên Ubuntu.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "env -i HOME=\"$HOME\" PATH=\"$PATH\" zsh -f",
          "description": "Mở zsh sạch, bỏ qua dotfiles, để xác định lỗi đến từ cấu hình shell hay môi trường.",
          "copy": true,
          "platforms": [
            "macOS"
          ],
          "context": "debug dotfiles"
        }
      ]
    },
    {
      "id": "shell-env",
      "title": "Environment & timing",
      "entries": [
        {
          "kind": "command",
          "value": "env | sort",
          "description": "In toàn bộ biến môi trường theo thứ tự để so sánh giữa terminal, SSH và process khác.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ]
        },
        {
          "kind": "command",
          "value": "env | sort > /tmp/env.before; env | sort > /tmp/env.after; diff -u /tmp/env.before /tmp/env.after",
          "description": "Mẫu chụp và diff môi trường trước/sau khi source cấu hình hoặc activate runtime.",
          "copy": true,
          "platforms": [
            "Cross-platform"
          ]
        },
        {
          "kind": "command",
          "value": "time zsh -i -c exit",
          "description": "Đo tổng thời gian khởi động interactive zsh.",
          "copy": true,
          "platforms": [
            "macOS"
          ],
          "context": "zsh"
        },
        {
          "kind": "command",
          "value": "PS4='+%N:%i> ' zsh -xlic exit 2> /tmp/zsh-trace.log",
          "description": "Trace file và số dòng được chạy khi zsh khởi động; xem /tmp/zsh-trace.log để tìm plugin chậm.",
          "copy": true,
          "platforms": [
            "macOS"
          ],
          "context": "zsh startup"
        },
        {
          "kind": "command",
          "value": "strace -f -e trace=file -o /tmp/command.trace command args",
          "description": "Theo dõi mọi file command cố mở để tìm config, library hoặc file bị thiếu.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ],
          "context": "deep debug"
        },
        {
          "kind": "command",
          "value": "sudo dtruss -f command args 2> /tmp/command.trace",
          "description": "Theo dõi system call trên macOS; SIP có thể giới hạn một số process.",
          "copy": true,
          "platforms": [
            "macOS"
          ],
          "danger": true,
          "context": "deep debug"
        }
      ]
    }
  ],
  "notes": [
    "type -a/whence thấy được alias và function; which thường chỉ nhìn PATH. Khi viết script, command -v là lựa chọn portable hơn."
  ],
  "sources": [
    {
      "label": "POSIX command",
      "url": "https://pubs.opengroup.org/onlinepubs/9799919799/utilities/command.html"
    },
    {
      "label": "Zsh builtins",
      "url": "https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html"
    }
  ]
};
