document.addEventListener("DOMContentLoaded", function () {
    let features = document.querySelectorAll(".feature-box");
    features.forEach((feature) => {
        feature.style.opacity = "0";
        feature.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        features.forEach((feature, index) => {
            setTimeout(() => {
                feature.style.opacity = "1";
                feature.style.transform = "translateY(0)";
            }, index * 300);
        });
    }, 500);
});
