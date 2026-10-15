import type { Tool } from "../../types";
import { command, platforms, section, text } from "../helpers";

const cross = platforms("Cross-platform");
const mac = platforms("macOS");
const ubuntu = platforms("Ubuntu");

export const dustTool: Tool = {
  id: "dust",
  name: "dust",
  icon: "du",
  summary: "Disk usage trực quan dạng cây — tìm thư mục và file chiếm dung lượng mà không cần ghép du, sort và head.",
  category: "disk usage",
  featured: true,
  verified: "15/10/2026 · v1.2.6",
  sections: [
    section("dust-install", "Cài đặt & bắt đầu", [
      command("brew install dust", "Cài dust bằng Homebrew trên macOS hoặc Linuxbrew.", mac),
      command("cargo install du-dust", "Build và cài bản mới từ crates.io; binary sau khi cài vẫn có tên dust.", cross),
      command("snap install dust", "Cài bằng Snap trên Ubuntu; bản Snap chỉ truy cập được dữ liệu trong /home.", { ...ubuntu, context: "Snap: chỉ /home" }),
      command("dust", "Phân tích thư mục hiện tại và tự chọn các mục lớn nhất vừa chiều cao terminal.", cross),
      command("dust ~/Downloads", "Phân tích một thư mục cụ thể.", cross),
      command("dust ~/Downloads ~/Documents", "So sánh nhiều thư mục trong cùng một cây kết quả.", cross),
      command("dust --version", "Xem phiên bản đang chạy.", cross),
      command("dust --help", "Xem toàn bộ option của phiên bản đã cài.", cross),
    ]),
    section("dust-shape", "Độ sâu & hình dạng cây", [
      command("dust -n 20", "Chỉ hiển thị 20 entry lớn nhất thay vì tự lấy theo chiều cao terminal.", cross),
      command("dust -d 2 .", "Giới hạn cây ở hai cấp bên dưới thư mục hiện tại.", cross),
      command("dust -d 3 -n 40 ~/", "Xem tối đa 40 entry trong ba cấp đầu của home directory.", cross),
      command("dust -p .", "In full path, không rút gọn đường dẫn của thư mục con.", cross),
      command("dust -r .", "Đảo cây để entry lớn nhất xuất hiện phía trên.", cross),
      command("dust -D .", "Chỉ hiển thị directory.", cross),
      command("dust -F .", "Chỉ hiển thị file; hữu ích để tìm file lớn nhất.", cross),
      command("dust --collapse node_modules --collapse .git .", "Giữ các cây lớn đã biết ở dạng thu gọn thay vì mở sâu vào bên trong.", cross),
    ]),
    section("dust-scope", "Filesystem, link & hidden", [
      command("dust -x /", "Không đi sang filesystem/mount khác khi phân tích root.", cross),
      command("dust -L path", "Dereference symlink và đi vào directory mà symlink trỏ tới.", { ...cross, context: "Có thể đếm ngoài cây" }),
      command("dust -i .", "Bỏ qua file và directory ẩn.", cross),
      command("dust -X node_modules -X .git .", "Loại trừ path có tên node_modules và .git.", cross),
      command("dust --print-errors .", "In cụ thể những path không thể đọc thay vì chỉ hiện tổng số lỗi permission.", cross),
      command("dust -x -i -X node_modules -X .git -d 3 -n 40 .", "Audit nhanh project: cùng filesystem, bỏ hidden/dependency và giới hạn kết quả.", cross),
    ]),
    section("dust-filter", "Lọc theo tên, loại & size", [
      command("dust -z 100M .", "Chỉ giữ file/directory có dung lượng từ 100 MB trở lên.", cross),
      command("dust -e '\\.(mp4|mkv|mov)$' -F -n 30 ~/", "Tìm tối đa 30 video lớn theo regex trong home directory.", cross),
      command("dust -v '(^|/)(node_modules|\\.git)(/|$)' .", "Loại trừ path khớp regex node_modules hoặc .git.", cross),
      command("dust -t ~/Downloads", "Nhóm và tổng hợp dung lượng theo loại file.", cross),
      command("dust -F -n 20 -z 500M ~/", "Tìm 20 file từ 500 MB trở lên trong home directory.", cross),
      command("dust -I .dustignore .", "Đọc danh sách regex loại trừ từ file .dustignore.", cross),
    ]),
    section("dust-measure", "Cách đo dung lượng & thời gian", [
      command("dust -s .", "Dùng apparent size (độ dài file) thay vì số block thực chiếm trên disk.", cross),
      command("dust -f .", "Đổi phép đo directory thành số lượng file con thay vì dung lượng.", cross),
      command("dust -f -s .", "Đếm file theo apparent size semantics, gồm cả inode/hard link trùng.", cross),
      command("dust -M -7 .", "Chỉ xét file được sửa trong vòng bảy ngày gần đây.", cross),
      command("dust -M +30 .", "Chỉ xét file được sửa hơn 30 ngày trước.", cross),
      command("dust -A -7 .", "Lọc theo access time trong bảy ngày gần đây.", cross),
      command("dust -y -7 .", "Lọc theo change time metadata trong bảy ngày gần đây.", cross),
      command("dust -m m .", "Xếp size của directory theo modification time mới nhất của file con.", cross),
    ]),
    section("dust-output", "Output, pipe & accessibility", [
      command("dust -c .", "Tắt màu; phù hợp khi redirect hoặc chạy trong watch.", cross),
      command("dust -C .", "Ép xuất màu kể cả khi stdout không phải TTY.", cross),
      command("dust --dim .", "Làm mờ percent bar để dễ nhìn trên terminal nền tối.", cross),
      command("dust -b .", "Ẩn percent bar và phần trăm, chỉ giữ cây và dung lượng.", cross),
      command("dust -B .", "Chuyển percent bar sang bên phải.", cross),
      command("dust -o si .", "Hiển thị size theo SI, dùng lũy thừa 1000.", cross),
      command("dust -o gb .", "Ép toàn bộ size hiển thị theo GB.", cross),
      command("dust -j . | jq .", "Xuất cây JSON ra stdout rồi format/query bằng jq.", cross),
      command("dust -R -p .", "Chế độ screen reader: bỏ bar/ký hiệu, thêm cột depth và giữ full path.", cross),
      command("watch -n 5 'dust -c -d 2 -n 20 .'", "Cập nhật disk usage mỗi năm giây; -c tránh escape color trong watch.", { ...cross, context: "watch" }),
      command("dust --skip-total -w 120 .", "Bỏ dòng total và ép chiều rộng output thành 120 cột.", cross),
    ]),
    section("dust-input", "Input nâng cao & performance", [
      command("find . -type f -print0 | dust --files0-from=-", "Đưa danh sách path NUL-terminated từ find vào dust, an toàn với khoảng trắng/newline.", cross),
      command("git ls-files -z | dust --files0-from=-", "Chỉ phân tích file đang được Git theo dõi trong repository.", cross),
      command("dust --files-from paths.txt", "Đọc danh sách path phân cách bằng newline từ file.", cross),
      command("dust -T 16 /mnt/remote", "Dùng 16 walker thread; có thể hữu ích với NFS hoặc storage latency cao.", { ...ubuntu, context: "NFS / remote mount" }),
      command("dust -P .", "Tắt progress indicator khi chạy trong script hoặc CI log.", cross),
      command("dust --config ~/.config/dust/config.toml .", "Chỉ định file config thay vì dùng vị trí mặc định.", cross),
      text("~/.config/dust/config.toml hoặc ~/.dust.toml", "Vị trí config mặc định; key dùng tên long option dạng kebab-case.", cross),
      text("reverse=true\nlimit-filesystem=true", "Ví dụ config: đảo cây và giới hạn trong cùng filesystem.", cross),
    ]),
  ],
  notes: [
    "dust ưu tiên cho overview trực quan: mặc định tự chọn các entry lớn nhất vừa terminal, nên thường không cần ghép du | sort | head.",
    "-s là apparent size; mặc định dust đo disk blocks. Với sparse file hoặc hard link, hai cách đo có thể cho kết quả khác nhau.",
  ],
  sources: [
    { label: "dust — official README", url: "https://github.com/bootandy/dust" },
    { label: "dust v1.2.6 release", url: "https://github.com/bootandy/dust/releases/tag/v1.2.6" },
  ],
};
