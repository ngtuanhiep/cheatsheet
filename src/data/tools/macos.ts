import type { Tool } from "../../types";

export const macosTool: Tool = {
  "id": "macos",
  "name": "macOS Ops",
  "icon": "MAC",
  "summary": "Chẩn đoán máy, network, process, file và package bằng các công cụ có sẵn trên macOS.",
  "category": "System",
  "featured": true,
  "verified": "15/10/2026",
  "sections": [
    {
      "id": "mac-system",
      "title": "System & hardware",
      "entries": [
        {
          "kind": "command",
          "value": "sw_vers && uname -m",
          "description": "Xem phiên bản macOS, build và kiến trúc CPU (arm64/x86_64).",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "system_profiler SPHardwareDataType",
          "description": "Tóm tắt model, chip, RAM, serial và hardware UUID.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "sysctl -n hw.logicalcpu hw.memsize",
          "description": "In số logical CPU và dung lượng RAM theo byte, tiện dùng trong script.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "softwareupdate -l",
          "description": "Kiểm tra các bản cập nhật macOS đang khả dụng mà chưa cài.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "pmset -g batt",
          "description": "Xem phần trăm pin, trạng thái sạc và nguồn điện hiện tại.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "caffeinate -dimsu",
          "description": "Giữ máy, display và disk không sleep cho tới khi nhấn Ctrl+C.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "sudo powermetrics --samplers cpu_power,gpu_power -i 1000",
          "description": "Theo dõi công suất CPU/GPU mỗi giây; dừng bằng Ctrl+C.",
          "copy": true,
          "platforms": [
            "macOS"
          ],
          "danger": true
        }
      ]
    },
    {
      "id": "mac-process",
      "title": "Processes, ports & services",
      "entries": [
        {
          "kind": "command",
          "value": "lsof -nP -iTCP:3000 -sTCP:LISTEN",
          "description": "Tìm process đang listen TCP port 3000 mà không resolve DNS/service name.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "pgrep -fl 'node|vite'",
          "description": "Tìm PID và command line của process khớp node hoặc vite.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "ps -Ao pid,ppid,%cpu,%mem,etime,command | sort -k3 -nr | head -20",
          "description": "Top process theo CPU, kèm parent PID, RAM và thời gian chạy.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "launchctl print gui/$(id -u)",
          "description": "In toàn bộ service trong GUI domain của user hiện tại.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "launchctl print gui/$(id -u)/com.example.agent",
          "description": "Xem state, PID, lần thoát và environment của một LaunchAgent cụ thể.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "log stream --style compact --predicate 'process == \"MyApp\"'",
          "description": "Stream Unified Log chỉ cho một process, dễ đọc hơn log mặc định.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "sample PID 5 -file /tmp/sample.txt",
          "description": "Lấy stack sample process trong 5 giây để điều tra treo hoặc CPU cao.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        }
      ]
    },
    {
      "id": "mac-network",
      "title": "Network & DNS",
      "entries": [
        {
          "kind": "command",
          "value": "route -n get default | awk '/gateway:/{print $2}'",
          "description": "Lấy default gateway hiện tại mà không cần parse toàn bộ routing table.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "networksetup -listallhardwareports",
          "description": "Ánh xạ tên Wi-Fi/Ethernet với device như en0, en1.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "ipconfig getifaddr en0",
          "description": "Lấy IPv4 của interface en0; đổi interface theo kết quả networksetup.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "scutil --dns",
          "description": "Xem resolver, search domain và DNS theo từng network service/VPN.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "dig +short example.com A; dig +short example.com AAAA",
          "description": "Kiểm tra nhanh bản ghi IPv4 và IPv6 của domain.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "nc -vz -G 3 host.example.com 443",
          "description": "Test kết nối TCP port 443 với timeout 3 giây.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "sudo tcpdump -i any -nn 'port 53'",
          "description": "Theo dõi DNS traffic thô trên mọi interface; dừng bằng Ctrl+C.",
          "copy": true,
          "platforms": [
            "macOS"
          ],
          "danger": true
        }
      ]
    },
    {
      "id": "mac-files",
      "title": "Files, disk & metadata",
      "entries": [
        {
          "kind": "command",
          "value": "df -h",
          "description": "Xem dung lượng và phần trăm sử dụng của các filesystem đã mount.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "du -hd 1 . | sort -h",
          "description": "Tính dung lượng từng mục ngay dưới thư mục hiện tại rồi sắp xếp tăng dần.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "find . -type f -size +100M -print",
          "description": "Tìm file lớn hơn 100 MiB trong cây thư mục hiện tại.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "find . -type f -print0 | xargs -0 stat -f '%z %N' | sort -nr | head -20",
          "description": "Liệt kê 20 file lớn nhất, an toàn với tên chứa khoảng trắng/newline.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "mdfind -onlyin . 'kMDItemFSName == \"*.pdf\"cd'",
          "description": "Dùng Spotlight tìm PDF trong thư mục hiện tại, không phân biệt hoa thường.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "xattr -lr path",
          "description": "Xem extended attributes đệ quy, gồm quarantine metadata.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "shasum -a 256 file",
          "description": "Tính SHA-256 để kiểm tra integrity của file tải về.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        }
      ]
    },
    {
      "id": "mac-clipboard",
      "title": "Finder & clipboard",
      "entries": [
        {
          "kind": "command",
          "value": "open .",
          "description": "Mở thư mục hiện tại trong Finder.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "open -a 'Visual Studio Code' .",
          "description": "Mở thư mục hiện tại bằng một ứng dụng cụ thể.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "printf '%s' 'text' | pbcopy",
          "description": "Ghi text vào clipboard, không kèm newline cuối.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "pbpaste | sed -n '1,20p'",
          "description": "Đọc và chỉ hiển thị 20 dòng đầu clipboard.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        },
        {
          "kind": "command",
          "value": "osascript -e 'display notification \"Done\" with title \"Terminal\"'",
          "description": "Gửi notification macOS khi một job dài hoàn tất.",
          "copy": true,
          "platforms": [
            "macOS"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "label": "Apple Terminal User Guide",
      "url": "https://support.apple.com/guide/terminal/welcome/mac"
    },
    {
      "label": "macOS manual pages",
      "url": "https://keith.github.io/xcode-man-pages/"
    }
  ]
};
