IMPORTANT - venv placeholder
----------------------------
I could not reliably include a working Windows virtual environment in this zip.
Instead this folder is a placeholder. To create the venv on your Windows machine, run (in backend folder):

  python -m venv venv
  venv\Scripts\activate
  pip install -r requirements.txt

After that, run: uvicorn main:app --reload
