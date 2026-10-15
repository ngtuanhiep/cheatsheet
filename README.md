# Terminal Field Guide

Cheatsheet tiếng Việt cho terminal toolkit trên macOS. Source dùng Vite, TypeScript và Preact; bản build được đóng gói thành đúng một file HTML và chạy offline.

## Chạy local

```bash
npm install
npm run dev
```

## Kiểm tra và build

```bash
npm run check
open dist/index.html
```

`npm run check` chạy unit/component/data tests, type-check, build production và inline toàn bộ CSS/JavaScript vào `dist/index.html`.

## Cập nhật nội dung

- Tạo tool mới và tự đăng ký vào website:

```bash
npm run new:tool -- jq "jq"
```

- Mỗi tool là một module TypeScript độc lập trong `src/data/tools/`; registry nằm ở `src/data/tools/index.ts`.
- Dùng helper typed trong `src/data/helpers.ts`: `command`, `shortcut`, `text`, `section`, `platforms`.
- `platforms("macOS")`, `platforms("Ubuntu")` hoặc `platforms("Cross-platform")` tạo nhãn nền tảng ngay cạnh command.
- Website không còn import JSON legacy hoặc file `additions.ts` khi chạy.
- HTML, JSON và TypeScript trước migration được giữ trong `legacy/` để đối chiếu; chúng không tham gia build.

Shortcut dùng schema riêng với command. Chord được hiển thị thành các keycap riêng (`Ctrl` + `B`), còn sequence dùng mũi tên (`Ctrl` + `B` → `C`).
