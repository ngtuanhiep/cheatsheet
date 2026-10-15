import type { Tool } from "../../types";

export const ubuntuTool: Tool = {
  "id": "ubuntu",
  "name": "Ubuntu Ops",
  "icon": "APT",
  "summary": "Lệnh vận hành Ubuntu cho service, log, package, network, disk và phân tích sự cố thực tế.",
  "category": "System",
  "featured": true,
  "verified": "15/10/2026",
  "sections": [
    {
      "id": "ubuntu-system",
      "title": "System & resources",
      "entries": [
        {
          "kind": "command",
          "value": "cat /etc/os-release && uname -m",
          "description": "Xem distro/version chính xác và kiến trúc CPU.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "lscpu | sed -n '1,20p'",
          "description": "Tóm tắt CPU, core/thread, kiến trúc và virtualization.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "free -h && df -hT",
          "description": "Xem RAM/swap và dung lượng filesystem kèm loại filesystem.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "uptime && who -b",
          "description": "Xem load average, thời gian chạy và thời điểm boot gần nhất.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "timedatectl status",
          "description": "Kiểm tra timezone, đồng bộ NTP và đồng hồ hệ thống.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "dmesg --level=err,warn --ctime | tail -100",
          "description": "Xem 100 kernel warning/error gần nhất với timestamp dễ đọc.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ],
          "context": "kernel"
        }
      ]
    },
    {
      "id": "ubuntu-services",
      "title": "systemd & logs",
      "entries": [
        {
          "kind": "command",
          "value": "systemctl --failed",
          "description": "Liệt kê unit systemd đang thất bại.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "systemctl status nginx --no-pager -l",
          "description": "Xem trạng thái đầy đủ của service, không cắt dòng và không mở pager.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "journalctl -u nginx -f",
          "description": "Theo dõi log service nginx theo thời gian thực.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "journalctl -u nginx --since '1 hour ago' -p warning..alert",
          "description": "Lọc warning/error của nginx trong một giờ gần nhất.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "systemctl list-dependencies --reverse nginx",
          "description": "Tìm các unit phụ thuộc ngược vào nginx trước khi restart/disable.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "systemctl show nginx -p FragmentPath -p ExecStart -p Environment",
          "description": "In file unit, command khởi chạy và environment ở dạng dễ parse.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "systemd-analyze blame | head -20",
          "description": "Tìm 20 unit làm chậm quá trình boot nhiều nhất.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        }
      ]
    },
    {
      "id": "ubuntu-network",
      "title": "Network, sockets & DNS",
      "entries": [
        {
          "kind": "command",
          "value": "ss -lntup",
          "description": "Liệt kê TCP/UDP socket đang listen cùng process/PID nếu có quyền.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "ip -br address",
          "description": "Xem interface và địa chỉ IP ở dạng gọn một dòng mỗi interface.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "ip route get 1.1.1.1",
          "description": "Cho biết route, gateway, interface và source IP sẽ dùng để ra Internet.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "resolvectl status",
          "description": "Xem DNS server, search domain và trạng thái DNS theo từng link.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "curl -sS -o /dev/null -w 'status=%{http_code} dns=%{time_namelookup}s connect=%{time_connect}s tls=%{time_appconnect}s total=%{time_total}s\\n' https://example.com",
          "description": "Đo riêng DNS, TCP, TLS và tổng thời gian của một HTTP request.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "sudo tcpdump -i any -nn 'tcp port 443'",
          "description": "Capture traffic HTTPS metadata trên mọi interface; payload vẫn được mã hóa.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ],
          "danger": true
        },
        {
          "kind": "command",
          "value": "mtr -rwzc 20 example.com",
          "description": "Chạy 20 lượt đo route/loss/latency và in report; cần cài package mtr-tiny.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ],
          "context": "mtr-tiny"
        }
      ]
    },
    {
      "id": "ubuntu-packages",
      "title": "APT & package ownership",
      "entries": [
        {
          "kind": "command",
          "value": "apt-cache policy fzf",
          "description": "Xem version đang cài, candidate version và repository ưu tiên.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "dpkg -S \"$(command -v fzf)\"",
          "description": "Tìm package Debian sở hữu binary fzf hiện đang được resolve.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "dpkg -L fzf",
          "description": "Liệt kê toàn bộ file mà package fzf đã cài.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "apt-mark showmanual",
          "description": "Liệt kê package được đánh dấu cài thủ công, hữu ích khi audit máy.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "sudo apt update && apt list --upgradable",
          "description": "Refresh package index rồi xem các package có thể nâng cấp.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ],
          "danger": true
        },
        {
          "kind": "command",
          "value": "sudo apt-get --simulate autoremove",
          "description": "Xem trước package sẽ bị autoremove mà chưa thay đổi hệ thống.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ],
          "danger": true
        },
        {
          "kind": "command",
          "value": "{ cat /var/log/apt/history.log 2>/dev/null; zcat /var/log/apt/history.log.*.gz 2>/dev/null; } | grep -E '^Commandline:|^(Install|Upgrade|Remove):' | tail -50",
          "description": "Đọc cả history hiện tại và file nén để xem 50 hành động APT gần đây.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        }
      ]
    },
    {
      "id": "ubuntu-files",
      "title": "Disk, files & permissions",
      "entries": [
        {
          "kind": "command",
          "value": "du -h --max-depth=1 . | sort -h",
          "description": "Tính dung lượng từng mục cấp một rồi sắp xếp tăng dần.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "find . -type f -printf '%s %p\\0' | sort -z -nr | head -z -20 | tr '\\0' '\\n'",
          "description": "Liệt kê 20 file lớn nhất, vẫn xử lý đúng tên có khoảng trắng.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "find . -xdev -type f -mtime -1 -printf '%TY-%Tm-%Td %TH:%TM %p\\n' | sort",
          "description": "Tìm file đổi trong 24 giờ, không đi sang filesystem khác.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "stat -c '%A %U:%G %s %y %n' path",
          "description": "In permission, owner/group, size, thời gian sửa và tên file.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "namei -l /path/to/file",
          "description": "Phân rã từng thành phần đường dẫn và permission để tìm chỗ gây Permission denied.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "sha256sum file",
          "description": "Tính SHA-256 để đối chiếu checksum của artifact.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "sudo lsof +L1",
          "description": "Tìm file đã bị xóa nhưng process vẫn giữ handle và chiếm disk.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ],
          "danger": true,
          "aliases": [
            "deleted open files disk space"
          ]
        }
      ]
    },
    {
      "id": "ubuntu-process",
      "title": "Processes & one-liners",
      "entries": [
        {
          "kind": "command",
          "value": "ps -eo pid,ppid,user,%cpu,%mem,etime,cmd --sort=-%cpu | head -20",
          "description": "Top process theo CPU kèm owner, parent, RAM và elapsed time.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "pgrep -af 'node|vite'",
          "description": "Tìm PID và toàn bộ command line khớp node hoặc vite.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "pstree -aps PID",
          "description": "Xem toàn bộ cây parent của một process cùng PID và arguments.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "sudo strace -f -p PID -e trace=network,file",
          "description": "Attach process và chỉ trace system call liên quan network/file.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ],
          "danger": true
        },
        {
          "kind": "command",
          "value": "watch -n 1 'ss -s; free -h'",
          "description": "Cập nhật thống kê socket và RAM mỗi giây.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        },
        {
          "kind": "command",
          "value": "find /var/log -type f -name '*.log' -print0 | xargs -0 grep -HnEi 'error|failed|panic' 2>/dev/null | tail -100",
          "description": "Tìm 100 dòng lỗi gần cuối trong các file .log, an toàn với tên file có khoảng trắng.",
          "copy": true,
          "platforms": [
            "Ubuntu"
          ]
        }
      ]
    }
  ],
  "notes": [
    "Các lệnh có sudo được gắn nhãn Cẩn thận. Hãy bỏ sudo khi quyền đọc hiện tại đã đủ."
  ],
  "sources": [
    {
      "label": "Ubuntu Server documentation",
      "url": "https://documentation.ubuntu.com/server/"
    },
    {
      "label": "Ubuntu manpages",
      "url": "https://manpages.ubuntu.com/"
    }
  ]
};
