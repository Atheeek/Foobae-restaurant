import { useEffect, useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSwipeable } from "react-swipeable";

// Declare global window.google type
declare global {
  interface Window {
    google?: any;
  }
}

interface Review {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  relative_time_description: string;
  locationName?: string;
}

// --- CONFIGURATION ---
const locations = [
  { name: "Electronic City", placeId: "ChIJiSf4fpJrrjsR0gZNALy14hQ" },
  { name: "Sulthan Bathery", placeId: "ChIJhx7yuwsJpjsR3EtVwl2vfmM" },
  { name: "Ottapalam", placeId: "ChIJMzjwUt3bpzsRbRBLQbE0uXU" },
];

const GOOGLE_MAPS_API_KEY = "AIzaSyB8Z-9vlITIqlvT_PBb-xLGcOGse8lLimE"; // MUST REPLACE
const REVIEWS_PER_BRANCH_FOR_ALL_VIEW = 2;

const TestimonialsSection = () => {
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [currentReview, setCurrentReview] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // The google script loading logic remains the same...
    const loadGoogleScript = () => {
      if (window.google && window.google.maps) { fetchAllReviews(); return; }
      if (document.getElementById("google-maps-script")) return;
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true; script.defer = true; script.onload = fetchAllReviews;
      document.body.appendChild(script);
    };
    const fetchAllReviews = () => {
      if (!window.google || !window.google.maps) { console.error("Google Maps API not loaded"); setLoading(false); return; }
      const service = new window.google.maps.places.PlacesService(document.createElement("div"));
      const promises = locations.map(location => new Promise<Review[]>((resolve) => {
        const request = { placeId: location.placeId, fields: ["reviews"] };
        service.getDetails(request, (place: any, status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place.reviews) {
            const reviewsWithLocation = place.reviews.map((review: Review) => ({ ...review, locationName: location.name }));
            resolve(reviewsWithLocation);
          } else { resolve([]); }
        });
      }));
      Promise.all(promises).then(results => {
        const combinedReviews = results.flat();
        setAllReviews(combinedReviews);
        filterAndSetReviews("All", combinedReviews);
        setLoading(false);
      });
    };
    loadGoogleScript();
  }, []);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; }
    return array;
  }

  const filterAndSetReviews = (locationName: string, sourceReviews: Review[] = allReviews) => {
    setSelectedLocation(locationName);
    setCurrentReview(0);
    if (locationName === "All") {
      let topReviewsFromEachLocation: Review[] = [];
      locations.forEach(location => {
        const reviewsForThisLocation = sourceReviews.filter(review => review.locationName === location.name).sort((a, b) => b.rating - a.rating).slice(0, REVIEWS_PER_BRANCH_FOR_ALL_VIEW);
        topReviewsFromEachLocation.push(...reviewsForThisLocation);
      });
      setFilteredReviews(shuffleArray(topReviewsFromEachLocation));
    } else {
      const reviewsForThisLocation = sourceReviews.filter(review => review.locationName === locationName).sort((a, b) => b.rating - a.rating).slice(0, 5);
      setFilteredReviews(reviewsForThisLocation);
    }
  };
  
  useEffect(() => {
    if (isPaused || filteredReviews.length <= 1) { if (autoplayInterval.current) clearInterval(autoplayInterval.current); return; }
    autoplayInterval.current = setInterval(() => { nextReview(); }, 5000);
    return () => { if (autoplayInterval.current) clearInterval(autoplayInterval.current); };
  }, [currentReview, isPaused, filteredReviews]);

  const nextReview = () => setCurrentReview(prev => (prev + 1) % filteredReviews.length);
  const prevReview = () => setCurrentReview(prev => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  const swipeHandlers = useSwipeable({ onSwipedLeft: () => nextReview(), onSwipedRight: () => prevReview(), preventScrollOnSwipe: true, trackMouse: true });

  if (loading) { return ( <section id="testimonials" className="py-20 bg-muted/30"><div className="text-center text-lg text-muted-foreground animate-pulse">Loading live Google reviews...</div></section> ); }

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12"><p className="text-primary text-lg italic mb-2">What our customers say</p><h2 className="text-4xl font-bold mb-4">Customer Reviews</h2><div className="w-24 h-1 bg-primary mx-auto rounded-full"></div></div>
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-12 flex-wrap">
          <Button variant={selectedLocation === "All" ? "default" : "outline"} onClick={() => filterAndSetReviews("All")}>All Locations</Button>
          {locations.map(loc => (<Button key={loc.name} variant={selectedLocation === loc.name ? "default" : "outline"} onClick={() => filterAndSetReviews(loc.name)}>{loc.name}</Button>))}
        </div>

        <div {...swipeHandlers} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="max-w-4xl mx-auto relative overflow-hidden min-h-[450px]">
          {filteredReviews.length > 0 ? (
            <>
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentReview * 100}%)` }}>
                {filteredReviews.map((review, index) => {
                  const authorNameForAvatar = encodeURIComponent(review.author_name || '');
                  const fallbackAvatarUrl = `https://ui-avatars.com/api/?name=${authorNameForAvatar}&background=random&color=fff&bold=true`;

                  return (
                    <div key={`${review.author_name}-${index}`} className="w-full flex-shrink-0 px-4">
                      <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 max-w-2xl mx-auto shadow-lg">
                        <CardContent className="p-8 text-center relative">
                          <Quote className="h-16 w-16 text-primary/20 mx-auto mb-6" />
                          {/* REVERTED: Use original photo OR the fallback */}
                          <img src={review.profile_photo_url || fallbackAvatarUrl} alt={review.author_name} className="w-20 h-20 rounded-full border-2 border-primary mx-auto mb-4 object-cover bg-muted"/>
                          <h3 className="text-lg sm:text-xl font-semibold mb-2">{review.author_name}</h3>
                          <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className={`h-5 w-5 mx-1 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"}`} />))}</div>
                          <p className="text-muted-foreground leading-relaxed italic text-base sm:text-lg max-w-md mx-auto line-clamp-4">“{review.text}”</p>
                          {review.text.length > 250 && (<button onClick={() => setSelectedReview(review)} className="text-primary text-sm font-medium mt-2 hover:underline">Read more</button>)}
                          <p className="text-sm text-muted-foreground mt-4">{review.relative_time_description}</p>
                          {selectedLocation === "All" && review.locationName && (<p className="text-xs font-semibold text-primary/80 mt-4 tracking-wider uppercase">FROM OUR {review.locationName} BRANCH</p>)}
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
              
              {filteredReviews.length > 1 && (
                <>
                  <Button variant="outline" size="icon" className="absolute left-0 sm-left-2 top-1/2 transform -translate-y-1/2 bg-card/90" onClick={prevReview} aria-label="Previous review"><ChevronLeft className="h-5 w-5" /></Button>
                  <Button variant="outline" size="icon" className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 bg-card/90" onClick={nextReview} aria-label="Next review"><ChevronRight className="h-5 w-5" /></Button>
                  <div className="flex justify-center mt-8 space-x-2">{filteredReviews.map((_, index) => (<button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReview ? "bg-primary scale-125" : "bg-muted-foreground/50 hover:bg-muted-foreground"}`} onClick={() => setCurrentReview(index)} aria-label={`Go to review ${index + 1}`} />))}</div>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground">No top-rated reviews found for this location.</div>
          )}
        </div>
      </div>
      
      <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="sm:max-w-[625px]">
          {selectedReview && (
            <>
              <DialogHeader><DialogTitle className="flex items-center space-x-4 mb-4">
                {/* REVERTED: Use original photo OR the fallback in the dialog */}
                {selectedReview.profile_photo_url ?
                  <img src={selectedReview.profile_photo_url} alt={selectedReview.author_name} className="w-12 h-12 rounded-full border-2 border-primary object-cover"/>
                  :
                  <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReview.author_name || '')}&background=random&color=fff&bold=true`} alt={selectedReview.author_name} className="w-12 h-12 rounded-full border-2 border-primary object-cover"/>
                }
                <div><h3 className="text-lg font-semibold">{selectedReview.author_name}</h3><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className={`h-4 w-4 mr-1 ${i < selectedReview.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"}`} />))}</div></div></DialogTitle></DialogHeader>
              <div className="prose prose-sm sm:prose-base max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar no-scroll-chain"><p className="italic">"{selectedReview.text}"</p></div>
              <p className="text-xs text-muted-foreground mt-4 text-right">{selectedReview.relative_time_description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;