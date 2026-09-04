import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase import create_client, Client

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError("Supabase environment variables are missing.")

supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_KEY,
)

app = FastAPI(title="OUTRANK API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: str
    business: str
    service: str
    message: str


@app.get("/")
def root():
    return {"message": "OUTRANK backend is running!"}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/contact")
def contact(form: ContactForm):
    response = (
        supabase
        .table("enquiries")
        .insert({
            "name": form.name,
            "email": form.email,
            "business": form.business,
            "service": form.service,
            "message": form.message,
        })
        .execute()
    )

    return {
        "success": True,
        "message": "Thanks! Your enquiry has been received.",
        "data": response.data,
    }