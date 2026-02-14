// ============================================
// 💝 TÙY CHỈNH WEBSITE VALENTINE CỦA BẠN 💝
// ============================================

const CONFIG = {
    // Tên người bạn yêu sẽ hiển thị trong tiêu đề
    // Ví dụ: "Jade", "Sarah", "Minh"
    valentineName: "Bé Cún của meow :3",

    // Tiêu đề hiển thị trên tab trình duyệt
    // Bạn có thể dùng emoji! 💝 💖 💗 💓 💞 💕
    pageTitle: "Bé có muốn làm Valentine của Meow khum? 💝",

    // Emoji bay lơ lửng trong background
    // Tìm thêm emoji tại: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Emoji trái tim
        bears: ['🧸', '🐻']                       // Emoji gấu bông dễ thương
    },

    // Câu hỏi và câu trả lời
    // Tùy chỉnh từng câu hỏi và các lựa chọn trả lời
    questions: {
        first: {
            text: "Bé có thích anh không?",                            // Câu hỏi đầu tiên
            yesBtn: "Cóaaa",                                              // Text nút "Có"
            noBtn: "Khummm",                                            // Text nút "Không"
            secretAnswer: "Bé không thích anh đâu, Bé yêu anh nhèo lém! ❤️"     // Câu trả lời bí mật khi hover
        },
        second: {
            text: "Bé yêu anh nhìu như thế nèo?",                     // Cho love meter
            startText: "Nhìu như này nèee!",                               // Text trước phần trăm
            nextBtn: "Tiếp nè ❤️"                                    // Text nút tiếp theo
        },
        third: {
            text: "Bé có muốn làm Valentine của anh vào ngày 14/2/2026 không? 🌹",  // Câu hỏi lớn!
            yesBtn: "Cóaaaa!",                                             // Text nút "Có"
            noBtn: "Không"                                             // Text nút "Không"
        }
    },

    // Tin nhắn love meter
    // Hiển thị tùy theo mức độ kéo slider
    loveMessages: {
        extreme: "WOWWW Bé yêu meow nhiều thế sao?? 🥰🚀💝",   // Hiển thị khi vượt 5000%
        high: "Đến vô cùng và xa hơn nữa! 🚀💝",              // Hiển thị khi vượt 1000%
        normal: "Và hơn thế nữa! 🥰"                          // Hiển thị khi vượt 100%
    },

    // Tin nhắn hiển thị sau khi nói "Có!"
    celebration: {
        title: "Yayyy! Anh là người may mắn nhất thế giới! 🎉💝💖💝💓",
        message: "Giờ thì đến đây nhận quà nè, ôm ôm!",
        emojis: "🎁💖🤗💝💋❤️💕"  // Những emoji này sẽ nhảy xung quanh
    },

    // Bảng màu cho website
    // Dùng https://colorhunt.co hoặc https://coolors.co để tìm bộ màu đẹp
    colors: {
        backgroundStart: "#ffafbd",      // Màu đầu gradient (màu pastel cho cảm giác nhẹ nhàng)
        backgroundEnd: "#ffc3a0",        // Màu cuối gradient (nên bổ sung cho backgroundStart)
        buttonBackground: "#ff6b6b",     // Màu nút (nên nổi bật so với background)
        buttonHover: "#ff8787",          // Màu nút khi hover (sáng hơn một chút so với buttonBackground)
        textColor: "#ff4757"             // Màu chữ (đảm bảo dễ đọc!)
    },

    // Cài đặt animation
    // Điều chỉnh nếu bạn muốn animation nhanh/chậm hơn
    animations: {
        floatDuration: "15s",           // Thời gian trái tim bay lên (khuyến nghị 10-20s)
        floatDistance: "50px",          // Khoảng cách trái tim di chuyển ngang (khuyến nghị 30-70px)
        bounceSpeed: "0.5s",            // Tốc độ animation nảy (khuyến nghị 0.3-0.7s)
        heartExplosionSize: 1.5         // Kích thước hiệu ứng nổ trái tim (khuyến nghị 1.2-2.0)
    },

    // Nhạc nền (Tùy chọn)
    // Thêm URL nhạc của riêng bạn (sau khi có bản quyền hợp lệ)
    music: {
        enabled: true,                     // Bật tính năng nhạc
        autoplay: true,                    // Thử tự động phát (lưu ý: một số trình duyệt có thể chặn)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // URL stream nhạc
        startText: "🎵 Phát nhạc",         // Text nút bắt đầu nhạc
        stopText: "🔇 Tắt nhạc",           // Text nút dừng nhạc
        volume: 0.5                        // Mức âm lượng (0.0 đến 1.0)
    }
};

// Đừng sửa gì bên dưới dòng này trừ khi bạn biết mình đang làm gì
export default CONFIG;
