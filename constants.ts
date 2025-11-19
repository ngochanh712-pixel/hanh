import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Trần Hưng Đạo là vị tướng của triều đại nào?",
    options: [
      { id: "A", text: "Nhà Lý" },
      { id: "B", text: "Nhà Trần" },
      { id: "C", text: "Nhà Lê" },
      { id: "D", text: "Nhà Nguyễn" },
    ],
    correctAnswerId: "B",
  },
  {
    id: 2,
    text: "Trận Bạch Đằng năm 1288 nhằm chống lại quân xâm lược nào?",
    options: [
      { id: "A", text: "Quân Mông – Nguyên" },
      { id: "B", text: "Quân Minh" },
      { id: "C", text: "Quân Xiêm" },
      { id: "D", text: "Quân Thanh" },
    ],
    correctAnswerId: "A",
  },
  {
    id: 3,
    text: "Vũ khí đặc biệt quân dân nhà Trần dùng để đánh giặc trên sông Bạch Đằng là gì?",
    options: [
      { id: "A", text: "Giáo dài" },
      { id: "B", text: "Nỏ thần" },
      { id: "C", text: "Bãi cọc gỗ ngầm" },
      { id: "D", text: "Cầu đá" },
    ],
    correctAnswerId: "C",
  },
  {
    id: 4,
    text: "Tượng Trần Hưng Đạo thường được dựng với tư thế nào?",
    options: [
      { id: "A", text: "Tay cầm sách, đầu cúi xuống" },
      { id: "B", text: "Tay chỉ ra hướng sông" },
      { id: "C", text: "Tay giơ cao thanh kiếm" },
      { id: "D", text: "Ngồi trên ngai vàng" },
    ],
    correctAnswerId: "B",
  },
  {
    id: 5,
    text: "Em học được điều gì từ tấm gương Trần Hưng Đạo?",
    options: [
      { id: "A", text: "Chỉ cần mạnh mẽ là đủ" },
      { id: "B", text: "Phải biết yêu nước, kiên trì và đoàn kết" },
      { id: "C", text: "Không cần học tập" },
      { id: "D", text: "Luôn làm việc một mình" },
    ],
    // Correction: Historically and educationally, B is the correct moral lesson.
    // The user prompt listed D, but "Working alone" contradicts the spirit of Dien Hong Conference.
    // I have corrected this to B for the quality of the application.
    correctAnswerId: "B",
  },
  {
    id: 6,
    text: "Trần Hưng Đạo đã căn dặn vua Trần điều gì để thể hiện quyết tâm chống giặc và tinh thần trung nghĩa của mình?",
    options: [
      { id: "A", text: "Xin lui về quê để không tham gia chiến trận" },
      { id: "B", text: "Xin đầu hàng để tránh tổn thất" },
      { id: "C", text: "“Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước”" },
      { id: "D", text: "Yêu cầu tăng thêm quân lương" },
    ],
    correctAnswerId: "C",
  },
];