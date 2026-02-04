def assess_risk(data):
    score = 0

    age = int(data["age"])
    bmi = float(data["bmi"])
    bp = int(data["bp"])
    sugar = int(data["sugar"])
    smoking = data["smoking"]
    activity = data["activity"]

    if age >= 45:
        score += 2
    if bmi >= 25:
        score += 2
    if bp >= 140:
        score += 2
    if sugar >= 140:
        score += 2
    if smoking == "yes":
        score += 2
    if activity == "low":
        score += 1

    if score <= 3:
        return "Low Risk", "Maintain a balanced diet, stay active, and continue healthy habits."
    elif score <= 7:
        return "Moderate Risk", "Adopt preventive lifestyle changes and monitor health regularly."
    else:
        return "High Risk", "Seek preventive medical consultation and lifestyle intervention."
