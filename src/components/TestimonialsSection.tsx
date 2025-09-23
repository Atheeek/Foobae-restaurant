import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Ahmed Hassan",
      rating: 5,
      review: "Great taste! Wonderful ambiance and sufficient car parking space. Friendly customer service. The biryani here is exceptional and the staff is very accommodating.",
      avatar: "AH"
    },
    {
      id: 2,
      name: "Sarah Johnson", 
      rating: 5,
      review: "Great place for dine with friends and family. They serve authentic global cuisine. Foodbae is highly recommended for anyone looking for quality food and excellent service.",
      avatar: "SJ"
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 4,
      review: "Best international cuisine in the city. It is really yummy, also polite staff & good service. The variety of dishes and the quality of ingredients make this place special.",
      avatar: "MC"
    },
    {
      id: 4,
      name: "Fatima Al-Zahra",
      rating: 5,
      review: "Outstanding food quality and presentation. The atmosphere is perfect for family gatherings. Highly recommend their signature dishes - you won't be disappointed!",
      avatar: "FZ"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="gold-text text-lg italic mb-2">What said about us</p>
          <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
          <div className="decorative-dots"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 max-w-2xl mx-auto">
                      <CardContent className="p-8 text-center relative">
                        {/* Large Quote Icon */}
                        <Quote className="h-16 w-16 text-primary/20 mx-auto mb-6" />
                        
                        {/* Avatar */}
                        <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary mx-auto mb-4 flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">{review.avatar}</span>
                        </div>

                        {/* Name */}
                        <h3 className="text-xl font-bold mb-2">{review.name}</h3>

                        {/* Rating */}
                        <div className="flex justify-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 mx-1 ${
                                i < review.rating 
                                  ? 'text-primary fill-current' 
                                  : 'text-muted-foreground'
                              }`} 
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-muted-foreground leading-relaxed italic text-lg max-w-md mx-auto">
                          "{review.review}"
                        </p>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 left-4">
                          <Quote className="h-6 w-6 text-primary/10 rotate-180" />
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <Quote className="h-6 w-6 text-primary/10" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/90 border-primary/50 hover:bg-primary hover:text-black transition-all duration-300"
              onClick={prevReview}
              disabled={currentReview === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/90 border-primary/50 hover:bg-primary hover:text-black transition-all duration-300"
              onClick={nextReview}
              disabled={currentReview === reviews.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center relative">
                {/* Quote Icon */}
                <Quote className="h-12 w-12 text-primary/20 mx-auto mb-4" />
                
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{reviews[currentReview].avatar}</span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold mb-2">{reviews[currentReview].name}</h3>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 mx-0.5 ${
                        i < reviews[currentReview].rating 
                          ? 'text-primary fill-current' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{reviews[currentReview].review}"
                </p>

                {/* Mobile Navigation */}
                <div className="flex justify-center mt-6 space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevReview}
                    disabled={currentReview === 0}
                    className="border-primary/50 hover:bg-primary hover:text-black"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextReview}
                    disabled={currentReview === reviews.length - 1}
                    className="border-primary/50 hover:bg-primary hover:text-black"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;