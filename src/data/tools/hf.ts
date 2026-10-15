import type { Tool } from "../../types";

export const hfTool: Tool = {
  "id": "hf",
  "name": "Hugging Face CLI",
  "icon": "HF",
  "summary": "CLI `hf` để làm việc với Hub, model, dataset, cache, Jobs và Inference Endpoints.",
  "category": "AI / model hub",
  "featured": true,
  "verified": "15/10/2026",
  "sections": [
    {
      "id": "hf-install",
      "title": "Cài đặt & trợ giúp",
      "entries": [
        {
          "kind": "command",
          "value": "brew install hf",
          "description": "Cài CLI độc lập bằng Homebrew.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "pip install -U \"huggingface_hub\"",
          "description": "Cài hoặc nâng cấp package chứa CLI hf.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "uvx hf --help",
          "description": "Chạy CLI mới nhất trong môi trường uv tạm thời.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf --help",
          "description": "Liệt kê nhóm command khả dụng trong phiên bản hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf env",
          "description": "In version, cache paths và biến môi trường hữu ích khi debug.",
          "copy": true
        }
      ]
    },
    {
      "id": "hf-auth",
      "title": "Auth & tokens",
      "entries": [
        {
          "kind": "command",
          "value": "hf auth login",
          "description": "Đăng nhập bằng access token và lưu credential cục bộ.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf auth whoami",
          "description": "Xem tài khoản và organization hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf auth list",
          "description": "Liệt kê token đã lưu trên máy.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf auth switch",
          "description": "Chọn token khác đã lưu.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf auth logout",
          "description": "Xóa token được lưu cục bộ; không vô hiệu token trên website.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "text",
          "value": "HF_TOKEN",
          "description": "Token từ biến môi trường có ưu tiên riêng; logout không thể unset biến này."
        }
      ]
    },
    {
      "id": "hf-download",
      "title": "Download",
      "entries": [
        {
          "kind": "command",
          "value": "hf download gpt2 config.json",
          "description": "Tải một file và in đường dẫn trong cache.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf download gpt2",
          "description": "Tải snapshot của toàn bộ model repo.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf download org/data --repo-type dataset",
          "description": "Tải dataset repo.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf download gpt2 --revision main",
          "description": "Tải từ branch, tag hoặc commit cụ thể.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf download gpt2 --include '*.json' --exclude '*.bin'",
          "description": "Lọc file trong snapshot.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf download gpt2 --local-dir ./models/gpt2",
          "description": "Tải vào thư mục rõ ràng thay vì chỉ dùng cache.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf download gpt2 --quiet",
          "description": "Chỉ in path cuối; phù hợp dùng trong script.",
          "copy": true
        }
      ]
    },
    {
      "id": "hf-upload",
      "title": "Upload",
      "entries": [
        {
          "kind": "command",
          "value": "hf upload USER/model ./model .",
          "description": "Upload cả thư mục vào root của model repo.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf upload USER/model ./model.safetensors",
          "description": "Upload một file.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf upload USER/data ./data /train --repo-type dataset",
          "description": "Upload folder vào dataset repo.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf upload USER/space . . --repo-type space",
          "description": "Upload source của một Space.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf upload USER/model ./model . --commit-message 'Epoch 10'",
          "description": "Đặt commit message cho lần upload.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf upload USER/model logs/ --every=10",
          "description": "Đồng bộ log định kỳ mỗi 10 phút cho tới khi dừng.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf upload USER/model ./checkpoints .",
          "description": "Upload folder lớn theo pipeline nhiều commit, có thể chạy lại để resume.",
          "copy": true
        }
      ]
    },
    {
      "id": "hf-buckets",
      "title": "Buckets & đồng bộ dữ liệu",
      "entries": [
        {
          "kind": "command",
          "value": "hf buckets create checkpoints --private",
          "description": "Tạo object-storage bucket riêng tư cho checkpoint/log.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf buckets list -h",
          "description": "Liệt kê bucket với dung lượng dễ đọc.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf buckets list USER/checkpoints --tree -h -R",
          "description": "Xem cây file trong bucket.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf cp ./model.safetensors hf://buckets/USER/checkpoints/",
          "description": "Copy một file lên bucket.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf buckets sync ./outputs hf://buckets/USER/checkpoints --dry-run",
          "description": "Preview kế hoạch đồng bộ thư mục.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf buckets sync ./outputs hf://buckets/USER/checkpoints",
          "description": "Đồng bộ các file thay đổi lên bucket.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf buckets rm USER/checkpoints/old/ --recursive --dry-run",
          "description": "Preview xóa file theo prefix.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf buckets delete USER/checkpoints --yes",
          "description": "Xóa toàn bộ bucket mà không hỏi lại.",
          "copy": true,
          "danger": true
        }
      ]
    },
    {
      "id": "hf-cache",
      "title": "Cache",
      "entries": [
        {
          "kind": "command",
          "value": "hf cache ls",
          "description": "Liệt kê repo đang chiếm cache.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf cache ls --revisions",
          "description": "Xem chi tiết từng revision.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf cache verify gpt2",
          "description": "Kiểm tra checksum file cache.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf cache rm model/gpt2",
          "description": "Xóa một repo khỏi cache.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "hf cache prune",
          "description": "Xóa revision không còn được tham chiếu.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "text",
          "value": "HF_HOME",
          "description": "Đổi thư mục gốc chứa token và cache Hugging Face."
        },
        {
          "kind": "text",
          "value": "HF_HUB_CACHE",
          "description": "Chỉ đổi thư mục cache Hub."
        },
        {
          "kind": "text",
          "value": "HF_HUB_OFFLINE=1",
          "description": "Buộc thư viện/CLI chỉ dùng dữ liệu đã cache."
        }
      ]
    },
    {
      "id": "hf-browse",
      "title": "Tìm tài nguyên Hub",
      "entries": [
        {
          "kind": "command",
          "value": "hf models ls --search bert --limit 10",
          "description": "Tìm model theo từ khóa.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf models ls --author google --sort downloads",
          "description": "Lọc model theo owner và sắp xếp.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf datasets ls --search vietnamese",
          "description": "Tìm dataset.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf spaces ls --search demo",
          "description": "Tìm Space.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf collections ls --owner USER",
          "description": "Liệt kê collection của một owner.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf models ls --search bert --json | jq '.[].id'",
          "description": "Xuất JSON ổn định cho automation.",
          "copy": true
        }
      ]
    },
    {
      "id": "hf-jobs",
      "title": "Jobs · có thể phát sinh chi phí",
      "entries": [
        {
          "kind": "command",
          "value": "hf jobs run python:3.12 python -c 'print(\"hello\")'",
          "description": "Chạy job container và stream log.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "JOB_ID=$(hf jobs run -dq python:3.12 python train.py)",
          "description": "Chạy detached và lấy riêng job ID.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf jobs ls",
          "description": "Liệt kê job đang chạy.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf jobs inspect JOB_ID",
          "description": "Xem trạng thái và cấu hình job.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf jobs logs JOB_ID",
          "description": "Xem log của job.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf jobs wait JOB_ID",
          "description": "Chờ job kết thúc và trả exit code tương ứng.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf jobs cancel JOB_ID",
          "description": "Hủy job đang chạy.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "hf jobs run --flavor a10g-small IMAGE COMMAND",
          "description": "Chọn GPU flavor; kiểm tra giá trước khi chạy.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "hf jobs run -s HF_TOKEN python:3.12 python train.py",
          "description": "Truyền secret từ environment mà không ghi giá trị lên command line.",
          "copy": true
        }
      ]
    },
    {
      "id": "hf-endpoints",
      "title": "Inference Endpoints · trả phí",
      "entries": [
        {
          "kind": "command",
          "value": "hf endpoints ls",
          "description": "Liệt kê endpoint trong namespace hiện tại.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf endpoints describe NAME",
          "description": "Xem cấu hình endpoint trước khi update.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf endpoints hardware --vendor aws --region eu-west-1",
          "description": "Xem hardware, quota và giá theo giờ.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf endpoints catalog ls --search llama --limit 10",
          "description": "Tìm recipe đã được tối ưu trong catalog.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf endpoints catalog deploy --repo MODEL_ID --name NAME",
          "description": "Deploy recipe mặc định; thao tác này có thể phát sinh chi phí.",
          "copy": true,
          "danger": true
        },
        {
          "kind": "command",
          "value": "hf endpoints pause NAME",
          "description": "Pause endpoint để ngừng serving khi được hỗ trợ.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf endpoints delete NAME --yes",
          "description": "Xóa endpoint và bỏ qua prompt xác nhận.",
          "copy": true,
          "danger": true
        }
      ]
    },
    {
      "id": "hf-troubleshoot",
      "title": "Automation & troubleshooting",
      "entries": [
        {
          "kind": "command",
          "value": "export HF_HUB_DOWNLOAD_TIMEOUT=30",
          "description": "Tăng timeout download cho mạng chậm.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "export HF_HUB_DISABLE_UPDATE_CHECK=1",
          "description": "Tắt kiểm tra phiên bản trong CI/offline.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf download gpt2 --token \"$HF_TOKEN\"",
          "description": "Dùng token từ biến môi trường; không ghi token thật vào shell history.",
          "copy": true
        },
        {
          "kind": "command",
          "value": "hf upload --help",
          "description": "Đối chiếu flag đúng với version đang cài.",
          "copy": true
        },
        {
          "kind": "text",
          "value": "--json / --format json",
          "description": "Ưu tiên output có cấu trúc khi nối CLI vào jq hoặc script."
        },
        {
          "kind": "text",
          "value": "Private / gated repos",
          "description": "Cần token có quyền phù hợp và đã chấp nhận điều khoản truy cập nếu repo yêu cầu."
        }
      ]
    }
  ],
  "notes": [
    "Dùng command `hf`; `huggingface-cli` là tên cũ và không được trình bày như cú pháp chính.",
    "Không dán token thật vào command được lưu trong shell history. Jobs và Endpoints có thể phát sinh chi phí cloud."
  ],
  "sources": [
    {
      "label": "Hugging Face — CLI Guide",
      "url": "https://huggingface.co/docs/huggingface_hub/main/guides/cli"
    }
  ]
};
