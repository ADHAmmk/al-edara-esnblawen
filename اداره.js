const schools = [
    {
        name: "مدرسة السادات الثانوية بنين",
        location: "السنبلاوين - الدقهلية",
        link: "https://example.com"
    },
    {
        name: "مدرسة السنبلاوين الثانوية بنات",
        location: "السنبلاوين - الدقهلية",
        link: "https://example.com"
    },
    {
        name: "مدرسة السنبلاوين الثانوية المشتركة",
        location: "السنبلاوين - الدقهلية",
        link: "https://example.com"
    }
];

function searchSchool() {

    let search = document
        .getElementById("schoolSearch")
        .value
        .trim()
        .toLowerCase();

    let results = document.getElementById("results");

    results.innerHTML = "";

    if (search === "") {
        return;
    }

    let found = schools.filter(school =>
        school.name.toLowerCase().includes(search)
    );

    if (found.length === 0) {
        results.innerHTML = `
            <p class="not-found">
                لم يتم العثور على المدرسة
            </p>
        `;
        return;
    }

    found.forEach(school => {

        results.innerHTML += `
            <div class="school-card">

                <h3>🏫 ${school.name}</h3>

                <p>📍 ${school.location}</p>

                <a href="${school.link}" target="_blank">
                    دخول إلى الموقع
                </a>

            </div>
        `;
    });
}