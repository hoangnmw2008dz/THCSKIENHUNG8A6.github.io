HƯỚNG DẪN CHẠY BACKEND (Windows)
-------------------------------
1) Mở PowerShell trong thư mục 'backend' sau khi giải nén.
2) Tạo venv (nếu bạn chưa có):
   python -m venv venv
3) Kích hoạt venv:
   venv\Scripts\activate
4) Cài dependencies:
   pip install -r requirements.txt
5) Thêm OPENAI API KEY (1 trong 2 cách):
   - Cách A (khuyến nghị): thiết lập biến môi trường trong PowerShell:
     $env:OPENAI_API_KEY = "sk-..."
   - Cách B (tạm thời): mở main.py và thay dòng openai.api_key = os.getenv(...)
     bằng openai.api_key = "sk-..."
6) Chạy server:
   uvicorn main:app --reload
7) Mặc định server chạy ở http://127.0.0.1:8000
   Ví dụ test:
   curl -X POST http://127.0.0.1:8000/chat -H "Content-Type: application/json" -d '{"prompt":"Xin chào"}'
