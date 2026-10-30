export const defaultQuiz = {
  id: "quiz-standard-20",
  title: "Đấu Trường Tri Thức - Wayground Live",
  description: "Bộ câu hỏi gồm 2 phần (mỗi phần 10 câu), hỗ trợ lên đến 200 người chơi đồng thời.",
  parts: [
    {
      partNumber: 1,
      partTitle: "Phần 1: Kiến thức Công Nghệ & Kỹ Thuật Số",
      partDescription: "10 câu hỏi kiểm tra độ am hiểu thế giới công nghệ hiện đại",
      questions: [
        {
          id: 1,
          question: "HTML là viết tắt của cụm từ tiếng Anh nào?",
          options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTool Multi Language",
            "Home Tool Markup Logic"
          ],
          correctIndex: 0,
          timeLimit: 15,
          points: 100,
          explanation: "HTML viết tắt của HyperText Markup Language (Ngôn ngữ đánh dấu siêu văn bản)."
        },
        {
          id: 2,
          question: "Thành phần CPU trong máy tính được ví như bộ phận nào của con người?",
          options: [
            "Trái tim",
            "Bộ não",
            "Đôi mắt",
            "Hệ tiêu hóa"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "CPU (Central Processing Unit) là bộ xử lý trung tâm, được ví như bộ não điều khiển máy tính."
        },
        {
          id: 3,
          question: "Hệ điều hành di động Android hiện nay thuộc quyền phát triển chính của tập đoàn nào?",
          options: [
            "Microsoft",
            "Apple",
            "Google",
            "Oracle"
          ],
          correctIndex: 2,
          timeLimit: 15,
          points: 100,
          explanation: "Google đã mua lại Android Inc. vào năm 2005 và phát triển Android thành hệ điều hành di động số 1 thế giới."
        },
        {
          id: 4,
          question: "Địa chỉ Internet IPv4 có tổng cộng bao nhiêu bit độ dài?",
          options: [
            "16 bits",
            "32 bits",
            "64 bits",
            "128 bits"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "IPv4 sử dụng 32 bit nhị phân (gồm 4 octet 8 bit). Còn IPv6 dùng 128 bit."
        },
        {
          id: 5,
          question: "Cổng kết nối tiêu chuẩn đảo ngược chiều cắm phổ biến nhất trên smartphone và laptop hiện nay là gì?",
          options: [
            "Micro USB",
            "Lightning",
            "USB Type-C",
            "Mini DisplayPort"
          ],
          correctIndex: 2,
          timeLimit: 15,
          points: 100,
          explanation: "USB Type-C là tiêu chuẩn quốc tế đảo chiều hiện đại truyền dữ liệu và sạc nhanh."
        },
        {
          id: 6,
          question: "Nhà khoa học nào được vinh danh là 'cha đẻ' của mạng toàn cầu World Wide Web (WWW)?",
          options: [
            "Alan Turing",
            "Tim Berners-Lee",
            "Bill Gates",
            "Steve Jobs"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "Sir Tim Berners-Lee đã phát minh ra World Wide Web vào năm 1989 tại CERN."
        },
        {
          id: 7,
          question: "Bộ nhớ RAM khác ROM ở đặc điểm cơ bản nào sau đây?",
          options: [
            "RAM chỉ đọc, không thể ghi",
            "Dữ liệu trong RAM sẽ biến mất khi mất nguồn điện",
            "RAM có tốc độ chậm hơn ROM",
            "ROM có dung lượng luôn lớn hơn RAM"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "RAM là bộ nhớ truy xuất ngẫu nhiên khả biến (volatile), dữ liệu mất khi tắt nguồn."
        },
        {
          id: 8,
          question: "Độ phức tạp thời gian trung bình của thuật toán tìm kiếm nhị phân (Binary Search) là:",
          options: [
            "O(n)",
            "O(n^2)",
            "O(log n)",
            "O(1)"
          ],
          correctIndex: 2,
          timeLimit: 15,
          points: 100,
          explanation: "Tìm kiếm nhị phân chia đôi không gian tìm kiếm sau mỗi bước nên có độ phức tạp O(log n)."
        },
        {
          id: 9,
          question: "Docker sử dụng công nghệ cốt lõi nào của nhân Linux để giới hạn tài nguyên và cô lập container?",
          options: [
            "cgroups và Namespaces",
            "Swap Partition",
            "Systemd Daemon",
            "Cron Job"
          ],
          correctIndex: 0,
          timeLimit: 15,
          points: 100,
          explanation: "Docker sử dụng Linux Namespaces (cô lập view) và Control Groups (cgroups - giới hạn CPU/RAM)."
        },
        {
          id: 10,
          question: "Hệ thống AI nào của DeepMind đã đánh bại đại kiện tướng cờ vây thế giới Lee Sedol năm 2016?",
          options: [
            "Deep Blue",
            "AlphaGo",
            "Watson",
            "AlphaFold"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "AlphaGo của DeepMind đã tạo nên kỳ tích lịch sử khi đánh bại nhà vô địch thế giới với tỷ số 4-1."
        }
      ]
    },
    {
      partNumber: 2,
      partTitle: "Phần 2: Tư Duy Nhanh & Thử Thách Logic",
      partDescription: "10 câu hỏi đòi hỏi tư duy logic, phản xạ tốc độ và quan sát sắc bén",
      questions: [
        {
          id: 11,
          question: "Nếu 5 máy mất 5 phút để sản xuất 5 sản phẩm, thì 100 máy mất bao lâu để sản xuất 100 sản phẩm?",
          options: [
            "100 phút",
            "50 phút",
            "5 phút",
            "1 phút"
          ],
          correctIndex: 2,
          timeLimit: 15,
          points: 100,
          explanation: "1 máy làm 1 sản phẩm mất đúng 5 phút. Vậy 100 máy làm 100 sản phẩm cùng lúc cũng chỉ mất 5 phút!"
        },
        {
          id: 12,
          question: "Bạn đang chạy đua và vượt qua người đang ở vị trí thứ hai. Hiện bạn đang ở vị trí thứ mấy?",
          options: [
            "Thứ nhất",
            "Thứ hai",
            "Thứ ba",
            "Chưa xác định"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "Vượt qua người thứ hai thì bạn sẽ thay thế vị trí của người đó, tức là bạn đứng thứ hai!"
        },
        {
          id: 13,
          question: "Ngăn kéo có tất xanh, đỏ, đen lẫn lộn. Trong phòng tối, bạn cần lấy ít nhất mấy chiếc để chắc chắn có 1 đôi cùng màu?",
          options: [
            "3 chiếc",
            "4 chiếc",
            "7 chiếc",
            "16 chiếc"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "Theo nguyên lý Dirichlet, vì có 3 màu tất khác nhau nên chỉ cần lấy 4 chiếc (3 + 1) là chắc chắn có ít nhất 2 chiếc cùng màu."
        },
        {
          id: 14,
          question: "Số tiếp theo trong dãy Fibonacci: 2, 3, 5, 8, 13, 21, ... là số nào?",
          options: [
            "29",
            "34",
            "35",
            "38"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "Mỗi số bằng tổng 2 số liền trước nó: 13 + 21 = 34."
        },
        {
          id: 15,
          question: "Hoa súng nở phủ kín mặt hồ sau 48 ngày. Mỗi ngày diện tích tăng gấp đôi. Hỏi sau mấy ngày hoa phủ kín nửa hồ?",
          options: [
            "24 ngày",
            "47 ngày",
            "36 ngày",
            "40 ngày"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "Vì mỗi ngày tăng gấp đôi, nên ngày thứ 47 mảng hoa phủ 1/2 hồ, sang ngày 48 nhân đôi là đầy kín hồ."
        },
        {
          id: 16,
          question: "Bố của Mai có 5 người con: Mười, Hai mươi, Ba mươi, Bốn mươi. Người con thứ năm tên là gì?",
          options: [
            "Năm mươi",
            "Trăm",
            "Mai",
            "Út"
          ],
          correctIndex: 2,
          timeLimit: 15,
          points: 100,
          explanation: "Đầu câu đã nói rõ: 'Bố của Mai có 5 người con', vậy người thứ năm chính là Mai!"
        },
        {
          id: 17,
          question: "Có bao nhiêu tháng trong 1 năm có 28 ngày?",
          options: [
            "Chỉ 1 tháng (Tháng 2)",
            "Mỗi 4 năm có 1 tháng",
            "Cả 12 tháng",
            "7 tháng"
          ],
          correctIndex: 2,
          timeLimit: 15,
          points: 100,
          explanation: "Tất cả 12 tháng trong năm đều có ít nhất 28 ngày!"
        },
        {
          id: 18,
          question: "1 cây nến cháy hết trong 20 phút. Nếu thắp đồng thời 3 cây nến cùng loại thì cháy hết trong mấy phút?",
          options: [
            "60 phút",
            "20 phút",
            "30 phút",
            "10 phút"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "Vì thắp đồng thời cùng một lúc nên cả 3 cây cùng cháy và cùng hết sau 20 phút."
        },
        {
          id: 19,
          question: "Theo nghiên cứu khoa học sinh học tiến hóa, con gà có trước hay quả trứng có trước?",
          options: [
            "Con gà có trước",
            "Quả trứng có trước",
            "Xuất hiện cùng một lúc",
            "Chưa có lời giải"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "Sinh vật đẻ trứng (khủng long, bò sát) đã xuất hiện hàng trăm triệu năm trước khi loài chim/gà đầu tiên tiến hóa thành."
        },
        {
          id: 20,
          question: "Trong phòng tối có ngọn nến, bếp lò than, đèn dầu. Bạn chỉ có 1 que diêm. Bạn cần thắp cái gì trước tiên?",
          options: [
            "Ngọn nến",
            "Que diêm",
            "Đèn dầu",
            "Bếp lò than"
          ],
          correctIndex: 1,
          timeLimit: 15,
          points: 100,
          explanation: "Bạn phải quẹt que diêm để có lửa trước tiên thì mới thắp được những thứ còn lại!"
        }
      ]
    }
  ]
};
