from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import openai

app = FastAPI(title="THCSKIENHUNG8A6 API")

# <-- ADD YOUR OPENAI KEY HERE or set OPENAI_API_KEY env var -->
openai.api_key = os.getenv("OPENAI_API_KEY", "")  # prefer env var; or paste key here temporarily

class ChatRequest(BaseModel):
    prompt: str
    max_tokens: int = 256

@app.post("/chat")
async def chat(req: ChatRequest):
    if not openai.api_key:
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY not set")
    try:
        resp = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": req.prompt}],
            max_tokens=req.max_tokens,
            temperature=0.7,
        )
        return {"reply": resp.choices[0].message.content.strip()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
