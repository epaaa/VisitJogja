import { Dictionary } from "./Interface";

interface DescriptionDicInterface {
    title:string,
    description:string
}

export const DescriptionDic: Dictionary<DescriptionDicInterface> = {
    Accommodation: {
        title: "Jogja's Accommodation",
        description: "Discover the perfect places to stay in Jogja, offering a blend of comfort, convenience, and authentic local experiences. From boutique hotels to cozy guesthouses, find your ideal accommodation to make your stay in Jogja unforgettable."
    },
    Landmark: {
        title: "Jogja's Landmarks",
        description: "Embark on a journey to explore Jogja's iconic landmarks, each with its own fascinating history and cultural significance. From ancient temples to royal palaces, immerse yourself in the rich heritage and architectural marvels of Jogja."
    },
    Nature: {
        title: "Jogja's Nature",
        description: "Experience the natural beauty of Jogja, where lush landscapes, serene rivers, and breathtaking vistas await. From majestic mountains to pristine beaches, discover the wonders of Jogja's diverse ecosystem and outdoor attractions."
    },
    Culture: {
        title: "Jogja's Culture",
        description: "Immerse yourself in Jogja's vibrant cultural scene, where traditions, arts, and festivities come to life. From traditional dance performances to batik workshops, delve into the rich tapestry of Jogja's cultural heritage and artistic expressions."
    },
    Cuisine: {
        title: "Jogja's Cuisine",
        description: "Indulge in the flavors of Jogja's culinary delights, where local delicacies and street food offerings tantalize your taste buds. From savory gudeg to spicy sambal, savor the authentic flavors of Jogja's diverse cuisine."
    },
    Outdoor: {
        title: "Explore Jogja's Outdoor Activities",
        description: "Embark on thrilling outdoor adventures and adrenaline-pumping activities in Jogja's scenic landscapes. From trekking through lush forests to rafting down exhilarating rapids, experience the thrill of outdoor exploration in Jogja."
    },
    Indoor: {
        title: "Explore Jogja's Indoor Activities",
        description: "Discover a world of indoor entertainment and cultural experiences in Jogja's vibrant cityscape. From visiting museums to attending cultural performances, delve into the diverse array of indoor activities Jogja has to offer."
    },
};
