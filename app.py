from flask import Flask, render_template, request, session, redirect, url_for, jsonify
from risk_engine import assess_risk
from translations import translations
from chatbot_engine import get_bot_response

app = Flask(__name__)
app.secret_key = "preventive_health_secret"

@app.route("/")
def home():
    lang = session.get("lang", "en")
    return render_template("index.html", t=translations[lang], lang=lang)

@app.route("/set_language", methods=["POST"])
def set_language():
    session["lang"] = request.form["lang"]
    return redirect(url_for("assessment"))

@app.route("/assessment")
def assessment():
    lang = session.get("lang", "en")
    return render_template("assessment.html", t=translations[lang])

@app.route("/result", methods=["GET", "POST"])
def result():
    if request.method == "GET":
        return redirect(url_for("assessment"))

    lang = session.get("lang", "en")
    data = request.form.to_dict()

    risk, advice = assess_risk(data)
    session["risk_level"] = risk

    return render_template("result.html", t=translations[lang], risk=risk, advice=advice)

@app.route("/chatbot")
def chatbot():
    lang = session.get("lang", "en")
    return render_template("chatbot.html", t=translations[lang])

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.form.get("message")
    risk_level = session.get("risk_level")
    lang = session.get("lang", "en")

    reply = get_bot_response(user_message, risk_level, lang)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)
