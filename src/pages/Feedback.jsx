export default function FeedbackPage() {
  const feedbacks = [
    {
      name: "Ahmed Mohamed",
      stars: 5,
      comment: "The material is a masterpiece and the delivery is very fast.",
    },
    {
      name: "Sara Ali",
      stars: 4,
      comment: "The t-shirt is excellent but the size was a bit large.",
    },
    {
      name: "Kamer Adli",
      stars: 5,
      comment: "The design is different and the customer service is excellent.",
    },
   {
      name: "Mohamed",
      stars: 3,
      comment: "The material is a masterpiece and the delivery is very fast.",
    },
    {
      name: "Kamer Adli",
      stars: 5,
      comment: "The design is different and the customer service is excellent.",
    },
 
  ];

  return (
    <div className="min-h-screen py-10 pt-26 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">آراء عملائنا</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {feedbacks.map((fb, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg text-right border"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-pink-800 text-lg">{fb.name}</h3>
              <div className="text-yellow-400">
                {Array.from({ length: fb.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <p className="text-pink-600">{fb.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
