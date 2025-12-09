import Seo from "../components/Seo";
import drprerna from "../assets/drprerna.jpg";
import whatotherdoctorsaresaying from "../assets/whatotherdoctorsaresaying.jpg";
import drmariumroy from "../assets/drmariumroy.jpg";

const testimonials = [
  {
    name: "Dr. Pooja Deshmukh",
    degree: "BAMS",
    image: drprerna, 
    rating: 5,
    text: `"Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical–free products help restore balance and promote holistic well–being. I often recommend them to my patients seeking natural healing."`,
  },
  {
    name: "Dr. Rajesh Iyer",
    degree: "Ayurvedic Practitioner",
    image: whatotherdoctorsaresaying, 
    rating: 4,
    text: `"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high–quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."`,
  },
  {
    name: "Dr. Ananya Sharma",
    degree: "BAMS",
    image: drmariumroy, 
    rating: 5,
    text: `"As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients using their products."`,
  },
];

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="Hear what Ayurvedic Doctors say about Amrutam"
        keywords="testimonials, doctor reviews, Ayurveda"
      />

      <section className="min-h-screen bg-[#F8F0D8] py-20 px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-[#2F5E3A]">
          What other Ayurvedic Doctors are Saying
        </h2>
        <p className="mt-2 text-[#5C5C5C] text-lg">
          Trusted by experts — Hear what Ayurvedic doctors say about Amrutam!
        </p>

        {/* Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-[#F9E7B1] p-8 rounded-xl shadow-md text-left"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-[#2F2F2F] text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#2F5E3A]">{item.degree}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mt-3 gap-1">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <span
                    key={idx}
                    className="text-yellow-500 text-xl"
                  >
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - item.rating }).map((_, idx) => (
                  <span
                    key={idx}
                    className="text-gray-400 text-xl"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 text-[#5C5C5C] leading-relaxed text-[15px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}