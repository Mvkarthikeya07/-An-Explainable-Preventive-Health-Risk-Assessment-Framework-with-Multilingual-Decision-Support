# 🩺 Preventive Health Risk Analysis and Multilingual Decision Support System

## 📌 Abstract

This project presents a **Preventive Health Risk Analysis and Multilingual Decision Support System** aimed at improving early health awareness and preventive decision-making among diverse and underserved populations. The system evaluates individual health risk levels using physiological and lifestyle indicators and provides **explainable, multilingual, and voice-assisted guidance** through an interactive web interface and a deterministic health assistant chatbot.

Designed with a **prevention-first and transparency-oriented philosophy**, the system prioritizes interpretability, accessibility, and safety over opaque black-box intelligence. The project is particularly relevant for public health informatics, responsible AI, and accessibility-focused healthcare technologies.

---

## 🎯 Objectives

* To assess **preventive health risk levels** (Low / Moderate / High) using a rule-based risk stratification framework.
* To provide **clear, non-diagnostic health guidance** understandable to non-medical users.
* To support **multiple Indian languages** for wider public accessibility.
* To enable **voice-based interaction** for illiterate and semi-literate users.
* To design an **explainable and deterministic system** suitable for healthcare-oriented applications.

---

## 🧠 Methodology

The system employs a **rule-based health risk assessment engine** derived from widely accepted preventive health thresholds (e.g., BMI ranges, blood pressure categories, blood glucose levels, and lifestyle risk indicators). Each health parameter contributes to a cumulative risk score based on predefined rules and weights.

### Key Methodological Choices

* **Rule-Based Logic:** Ensures transparency, interpretability, and predictable behavior—critical in healthcare contexts.
* **Explainable Outputs:** Users receive risk classifications accompanied by clear explanations and preventive suggestions.
* **Language-Aware Responses:** All system outputs are mapped through a translation layer to support multilingual delivery.
* **Deterministic NLP Chatbot:** Keyword-based intent matching avoids hallucinations and ensures safe responses.

This approach intentionally prioritizes **explainability and safety** over probabilistic accuracy, aligning with responsible AI principles in healthcare.

---

## 🧪 Health Risk Assessment Parameters

The preventive risk analysis considers the following inputs:

* Age
* Body Mass Index (BMI)
* Blood Pressure
* Blood Sugar Level
* Smoking Habits
* Physical Activity Levels
* Lifestyle Factors

Based on cumulative scoring, users are classified into:

* **Low Risk** – Preventive maintenance guidance
* **Moderate Risk** – Lifestyle improvement recommendations
* **High Risk** – Strong preventive warnings and professional consultation advice

---

## 🤖 Multilingual Health Assistant (Chatbot)

The integrated health assistant provides:

* Diet and nutrition guidance
* Physical activity recommendations
* General preventive health advice
* Risk explanation and lifestyle tips

### Chatbot Characteristics

* Rule-based NLP with intent matching
* Multilingual, language-aware responses
* Voice-enabled output
* Deterministic and safe behavior (no generative hallucinations)

---

## 🌍 Accessibility & Inclusion

To ensure inclusivity, especially for underserved populations, the system incorporates:

* Voice-based narration of health results
* Voice-assisted chatbot responses
* Minimal text dependency
* Simple and guided user interface design

---

## 🌐 Supported Languages

The system currently supports five languages selected to maximize accessibility in the Indian context:

* English
* Hindi
* Telugu
* Tamil
* Malayalam

---

## ⚙️ Technology Stack

### Backend

* Python
* Flask

### Frontend

* HTML
* CSS
* JavaScript

### Core Logic

* Rule-Based Health Risk Engine
* Rule-Based NLP Chatbot (Intent Matching)

### Voice & Accessibility

* Web Speech API (Text-to-Speech)
* Multilingual Voice Output

---

## 🧪 Evaluation & Validation

The system was evaluated using **synthetic and rule-consistent user profiles** representing diverse age groups, physiological ranges, and lifestyle patterns.

### Evaluation Focus

* Consistency of risk classification across boundary conditions
* Correct handling of edge cases (e.g., borderline BMI or BP values)
* Stability and predictability of chatbot responses
* Verification of multilingual output consistency

Although the system does not claim clinical diagnostic accuracy, its outputs were manually validated against standard preventive health thresholds to ensure logical correctness.

---

## ⚠️ Limitations

* The system does **not provide medical diagnoses** and is intended solely for preventive awareness.
* Rule-based logic lacks adaptive learning and may not generalize to complex clinical scenarios.
* No real patient data was used due to ethical and privacy considerations.
* Multilingual translations are rule-mapped and may lack contextual nuance.

These limitations are intentionally accepted to preserve transparency, safety, and ethical deployment.

---

## 🌱 Sustainable Development Goals (SDG) Alignment

This project contributes to the following UN SDGs:

* **SDG 3 – Good Health and Well-Being:** Promotes early preventive health awareness.
* **SDG 10 – Reduced Inequalities:** Enables access for non-English and illiterate users.
* **SDG 9 – Industry, Innovation, and Infrastructure:** Demonstrates deployable, lightweight healthcare technology.

By enabling low-cost, accessible preventive healthcare support, the system aligns with sustainable public health objectives.

---

## 🗂️ Project Structure

```
preventive-health-risk-main/
│
├── app.py
├── risk_engine.py
├── chatbot_engine.py
├── translations.py
├── requirements.txt
│
├── templates/
│   ├── index.html
│   ├── assessment.html
│   ├── result.html
│   └── chatbot.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── main.js
│       ├── chatbot.js
│       └── voice.js
│
└── screenshots/
```

---

## 📸 Application Screenshots

The repository includes screenshots demonstrating:

* Language selection interface
<img width="1366" height="768" alt="Screenshot (152)" src="https://github.com/user-attachments/assets/9fd50428-00cc-4439-bca8-3fba38623cb8" />

* Health assessment input form
<img width="1366" height="768" alt="Screenshot (153)" src="https://github.com/user-attachments/assets/ccc58e03-78e0-454d-be12-6ef85141f141" />

* Low, Moderate, and High risk outputs
* <img width="1366" height="768" alt="Screenshot (156)" src="https://github.com/user-attachments/assets/44c53a8c-b3e2-40ff-a814-5c21a0727d8d" />

* <img width="1366" height="768" alt="Screenshot (155)" src="https://github.com/user-attachments/assets/0d0badc8-1cc7-4d62-ab28-52920436906e" />

* <img width="1366" height="768" alt="Screenshot (154)" src="https://github.com/user-attachments/assets/3b2e685d-5806-475c-8e39-88c083909269" />

* Multilingual chatbot interaction
* <img width="1366" height="768" alt="Screenshot (157)" src="https://github.com/user-attachments/assets/b63e2d5e-648d-4f3a-975a-a00a2bd8bfaf" />

* Project directory structure
* <img width="1366" height="768" alt="Screenshot (158)" src="https://github.com/user-attachments/assets/9d344dc3-8e32-462c-be43-d0f2ec521482" />

---

## 🏆 Hackathon Recognition

This project was developed and presented at:

**INNOCLASH’26 – SDG-Aligned 24-Hour International Hybrid Hackathon**
Organized by the Department of Computer Science and Engineering,
Rajalakshmi Institute of Technology, Chennai,
In association with Datamind, UAE.

The hackathon emphasized SDG-aligned problem solving, real-world societal impact, and time-constrained engineering design.

---

## 🚀 Future Enhancements

* Integration of machine learning models for adaptive risk prediction
* LLM-based conversational assistant with medical safeguards
* Cloud-based neural Text-to-Speech for improved voice consistency
* Mobile application development
* Integration with wearable health devices

---

## 🎓 Academic & Research Relevance

This project demonstrates competencies in:

* Applied software engineering
* Responsible and explainable AI design
* Preventive public health informatics
* Multilingual system development
* Accessibility-oriented UI/UX

It is suitable for:

* MS programs in Computer Science, Data Science, and Health Informatics
* Research-oriented academic evaluations

---

## 📜 Disclaimer

This system is intended strictly for **educational and preventive awareness purposes** and must not be used as a substitute for professional medical advice or diagnosis.

---

## 📜 License

This project is released under the MIT License and is intended strictly for academic and educational purposes.
