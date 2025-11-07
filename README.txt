THCSKIENHUNG8A6 - Personal AI Chat (package)
============================================
Các phần chính:
  - backend/: FastAPI server (main.py)
  - frontend-html/: web tĩnh nhẹ (mở file index.html)
  - frontend-bootstrap/: web với Bootstrap
  - frontend-react/: React app (npm install && npm start)

LƯU Ý QUAN TRỌNG về venv:
- Tôi không thể tạo chính xác một 'Windows venv' bên trong môi trường này và đảm bảo hoạt động 100% trên máy bạn.
  Thay vào đó, thư mục backend/venv_placeholder chứa hướng dẫn nhanh để tạo venv trên Windows.
- Nếu bạn muốn, bạn có thể tạo venv bằng:
    python -m venv venv
    venv\Scripts\activate
    pip install -r requirements.txt

HƯỚNG DẪN NHANH CHẠY LOCAL (Windows):
  1) Giải nén zip
  2) Mở PowerShell ở thư mục backend
  3) python -m venv venv
  4) venv\Scripts\activate
  5) pip install -r requirements.txt
  6) ux: uvicorn main:app --reload
  7) Mở frontend-html/index.html trong trình duyệt (hoặc dùng frontend-bootstrap)

Thay đổi API_URL trong các file front-end nếu backend không chạy ở http://127.0.0.1:8000
