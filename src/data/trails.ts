
export interface Trail {
  name: string;
  description: string;
  image: string;
  duration: string;
  highlights: string[];
  link: string;
  isSponsored?: boolean;
  sponsorName?: string;
  affiliateLinks?: {
    hotels: string;
    tours: string;
    insurance: string;
  };
}

export const trailsData: Trail[] = [
  {
    name: "Cultural Trail",
    description: "Discover ancient ruins, royal palaces, and UNESCO World Heritage sites including Sigiriya Rock Fortress and the sacred city of Anuradhapura.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "7-10 days",
    highlights: ["Sigiriya Rock Fortress", "Anuradhapura Ancient City", "Kandy Temple of the Tooth", "Polonnaruwa Ruins"],
    link: "#cultural-trail",
    isSponsored: true,
    sponsorName: "Ceylon Heritage Tours",
    affiliateLinks: {
      hotels: "https://booking.com/cultural-hotels-sri-lanka",
      tours: "https://getyourguide.com/cultural-tours-sri-lanka",
      insurance: "https://worldnomads.com/sri-lanka-travel-insurance"
    }
  },
  {
    name: "Coastal Trail",
    description: "Relax on pristine beaches, explore colonial Galle Fort, and enjoy water sports along Sri Lanka's stunning southern and western coastline.",
    image: "https://images.unsplash.com/photo-1571152832930-0f71efe30d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "5-7 days",
    highlights: ["Galle Fort", "Unawatuna Beach", "Mirissa Whale Watching", "Bentota Water Sports"],
    link: "#coastal-trail",
    affiliateLinks: {
      hotels: "https://booking.com/beach-hotels-sri-lanka",
      tours: "https://getyourguide.com/coastal-tours-sri-lanka",
      insurance: "https://worldnomads.com/sri-lanka-travel-insurance"
    }
  },
  {
    name: "Highland Trail",
    description: "Journey through misty mountains, lush tea plantations, and charming hill stations like Ella and Nuwara Eliya in Sri Lanka's cool highlands.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "6-8 days",
    highlights: ["Ella Nine Arch Bridge", "Adam's Peak", "Nuwara Eliya Tea Estates", "Horton Plains"],
    link: "#highland-trail",
    affiliateLinks: {
      hotels: "https://booking.com/highland-hotels-sri-lanka",
      tours: "https://getyourguide.com/highland-tours-sri-lanka",
      insurance: "https://worldnomads.com/sri-lanka-travel-insurance"
    }
  },
  {
    name: "Wildlife Trail",
    description: "Embark on thrilling safaris in Yala and Udawalawe National Parks to spot elephants, leopards, and hundreds of bird species.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4-6 days",
    highlights: ["Yala National Park", "Udawalawe Elephant Orphanage", "Sinharaja Rainforest", "Bundala Bird Sanctuary"],
    link: "#wildlife-trail",
    isSponsored: true,
    sponsorName: "Wild Lanka Safaris",
    affiliateLinks: {
      hotels: "https://booking.com/safari-lodges-sri-lanka",
      tours: "https://getyourguide.com/wildlife-tours-sri-lanka",
      insurance: "https://worldnomads.com/sri-lanka-travel-insurance"
    }
  }
];
