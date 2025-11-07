#!/bin/bash
echo "🚀 Bắt đầu khởi chạy AI THCSKIENHUNG8A6 trên GitHub Codespaces..."

# B1: Vào thư mục backend
cd backend || exit

# B2: Tạo venv (nếu chưa có)
if [ ! -d "venv" ]; then
  echo "📦 Đang tạo môi trường ảo (venv)..."
  python3 -m venv venv
fi

# B3: Kích hoạt venv
source venv/bin/activate

# B4: Cài đặt thư viện cần thiết
echo "📚 Đang cài đặt requirements..."
pip install -r requirements.txt

# B5: Kiểm tra biến API key
if [ -z "$OPENAI_API_KEY" ]; then
  echo "⚠️  Bạn chưa xuất biến OPENAI_API_KEY!"
  echo "   Hãy chạy lệnh: export OPENAI_API_KEY=\"sk-...\""
  echo "Sau đó chạy lại script này: bash start_codespace.sh"
  deactivate
  exit 1
fi

# B6: Chạy server FastAPI
echo "✅ Mọi thứ đã sẵn sàng! Khởi động server..."
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
