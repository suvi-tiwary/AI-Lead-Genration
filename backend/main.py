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


from pydantic import BaseModel, EmailStr, Field


class Lead(BaseModel):
    name: str = Field(min_length=2)
    email: EmailStr
    company: str = Field(min_length=2)
    requirement: str = Field(min_length=10)
    budget: str = ""
    timeline: str = ""

def calculate_score(lead):
    score = 0

    if lead.budget:
        score += 30

    if lead.timeline:
        score += 20

    if len(lead.requirement) >= 30:
        score += 20

    if "@" in lead.email:
        score += 10

    if lead.company:
        score += 20

    return score

@app.get("/")
def home():
    return {
        "message": "AI Lead Automation API is running"
    }

@app.post("/leads")
def create_lead(lead: Lead):

    score = calculate_score(lead)

    print("\n========== NEW LEAD ==========")
    print("Name:", lead.name)
    print("Email:", lead.email)
    print("Company:", lead.company)
    print("Requirement:", lead.requirement)
    print("Budget:", lead.budget)
    print("Timeline:", lead.timeline)
    print("Score:", score)
    print("==============================\n")

    return {
        "success": True,
        "message": "Lead analyzed successfully",
        "score": score,
        "lead": lead
    }