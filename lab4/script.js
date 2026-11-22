class Application {
    constructor(name, email, consent) {
        this.name = name;
        this.email = email;
        this.consent = consent;
    }

    print() {
        console.log(`Заявка DS Mentor:\nИмя: ${this.name}\nEmail: ${this.email}\nСогласие: ${this.consent ? "да" : "нет"}`);
    }
}
document.getElementById("application-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const application = new Application(
        document.getElementById("student-name").value.trim(),
        document.getElementById("student-email").value.trim(),
        document.getElementById("consent").checked
    );

    application.print();
});
