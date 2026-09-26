from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="AI Lead Automation")

# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Lead(BaseModel):
    name: str
    email: str
    company: str
    requirement: str
    budget: str = ""
    timeline: str = ""


@app.get("/")
def home():
    return {
        "message": "AI Lead Automation API is running"
    }


@app.post("/leads")
def create_lead(lead: Lead):
    print("\n========== NEW LEAD ==========")
    print("Name:", lead.name)
    print("Email:", lead.email)
    print("Company:", lead.company)
    print("Requirement:", lead.requirement)
    print("Budget:", lead.budget)
    print("Timeline:", lead.timeline)
    print("==============================\n")

    return {
        "success": True,
        "message": "Lead received successfully",
        "lead": lead
    }