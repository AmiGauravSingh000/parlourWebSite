const testimonials = [
    {
        name: "kavita",
        job: "beauty parlour",
        image: "profile.jpg",
        testimonial: "Peptide Maglc Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum esse animi quo quia accusamus delectus nemo officiis, temporibus, mollitia quaerat similique vero, non iure."
    },
    {
        name: "kavita",
        job: "beauty parlout",
        image: "profile.jpg",
        testimonial: "Peptide Maglc Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum esse animi quo quia accusamus delectus nemo officiis, temporibus, mollitia quaerat similique vero, non iure."
    },
    {
        name: "kavita",
        job: "beauty parlour",
        image: "profile.jpg",
        testimonial: "Peptide Maglc Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum esse animi quo quia accusamus delectus nemo officiis, temporibus, mollitia quaerat similique vero, non iure."
    },
    {
        name: "kavita",
        job: "beauty parlour",
        image: "profile.jpg",
        testimonial: "Peptide Maglc Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum esse animi quo quia accusamus delectus nemo officiis, temporibus, mollitia quaerat similique vero, non iure."
    }
];

let i = 0;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    `;
};
window.onload = displayTestimonial;
