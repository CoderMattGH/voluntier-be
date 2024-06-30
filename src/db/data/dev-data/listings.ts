type Listing = {
    list_id: number;
    list_title: string;
    list_location: string;
    list_longitude: number;
    list_latitude: number;
    list_date: string;
    list_time: string;
    list_duration: number;
    list_description: string;
    list_img: string;
    list_visible: boolean;
    list_org: string;
    list_skills: string[];
};

export const listings: Listing[] = [
    {
        list_id: 1,
        list_title: "Community Garden Cleanup",
        list_location: "SW1A 1AA",
        list_longitude: -0.1246,
        list_latitude: 51.5014,
        list_date: "2024-07-01",
        list_time: "09:00",
        list_duration: 4,
        list_description: "Join us for a morning of community gardening in the heart of the city. We will be cleaning up the garden, planting new flowers, and making the area beautiful for everyone to enjoy.",
        list_img: "./images/image1",
        list_visible: true,
        list_org: "Green Spaces Charity",
        list_skills: ["Gardening", "Teamwork", "Physical Work"]
    },
    {
        list_id: 2,
        list_title: "Beach Cleanup Event",
        list_location: "BN1 1AA",
        list_longitude: -0.1364,
        list_latitude: 50.8198,
        list_date: "2024-07-02",
        list_time: "10:00",
        list_duration: 3,
        list_description: "Help us clean up the beach and protect marine life. We will provide all the necessary equipment. All you need to bring is your enthusiasm and love for the environment.",
        list_img: "./images/image2",
        list_visible: false,
        list_org: "Ocean Guardians",
        list_skills: ["Environmental Awareness", "Teamwork", "Physical Work"]
    },
    {
        list_id: 3,
        list_title: "Charity Fun Run",
        list_location: "E1 6AN",
        list_longitude: -0.0722,
        list_latitude: 51.5165,
        list_date: "2024-07-03",
        list_time: "08:00",
        list_duration: 2,
        list_description: "Join our charity fun run to raise funds for local schools. Whether you're a seasoned runner or a beginner, everyone is welcome to participate.",
        list_img: "./images/image3",
        list_visible: true,
        list_org: "School Support Fund",
        list_skills: ["Running", "Fundraising", "Community Engagement"]
    },
    {
        list_id: 4,
        list_title: "Food Bank Volunteering",
        list_location: "M1 1AE",
        list_longitude: -2.2374,
        list_latitude: 53.4794,
        list_date: "2024-07-04",
        list_time: "12:00",
        list_duration: 5,
        list_description: "Assist in organizing and distributing food at our local food bank. Your help will make a significant difference in the lives of those in need.",
        list_img: "./images/image4",
        list_visible: false,
        list_org: "City Food Bank",
        list_skills: ["Organization", "Customer Service", "Teamwork"]
    },
    {
        list_id: 5,
        list_title: "Park Clean Up",
        list_location: "B1 1AA",
        list_longitude: -1.8959,
        list_latitude: 52.4814,
        list_date: "2024-07-05",
        list_time: "14:00",
        list_duration: 3,
        list_description: "Join us in cleaning up the local park. We'll be picking up litter, removing graffiti, and ensuring the park is safe and welcoming for all visitors.",
        list_img: "./images/image5",
        list_visible: true,
        list_org: "Clean Parks Initiative",
        list_skills: ["Environmental Awareness", "Teamwork", "Physical Work"]
    },
    {
        list_id: 6,
        list_title: "Animal Shelter Support",
        list_location: "NG1 1AA",
        list_longitude: -1.1489,
        list_latitude: 52.9548,
        list_date: "2024-07-06",
        list_time: "11:00",
        list_duration: 4,
        list_description: "Help care for animals at our shelter. Duties include feeding, cleaning, and playing with the animals to ensure they receive the attention they need.",
        list_img: "./images/image6",
        list_visible: false,
        list_org: "Happy Paws Rescue",
        list_skills: ["Animal Care", "Patience", "Teamwork"]
    },
    {
        list_id: 7,
        list_title: "Library Book Sale",
        list_location: "LS1 1AA",
        list_longitude: -1.5476,
        list_latitude: 53.8008,
        list_date: "2024-07-07",
        list_time: "09:30",
        list_duration: 6,
        list_description: "Assist in setting up and running our library book sale. This event helps raise funds for new books and library programs.",
        list_img: "./images/image7",
        list_visible: true,
        list_org: "Friends of the Library",
        list_skills: ["Sales", "Organization", "Customer Service"]
    },
    {
        list_id: 8,
        list_title: "Homeless Shelter Dinner Service",
        list_location: "EC1A 1BB",
        list_longitude: -0.0983,
        list_latitude: 51.5205,
        list_date: "2024-07-08",
        list_time: "17:00",
        list_duration: 3,
        list_description: "Volunteer to serve dinner at our homeless shelter. Your kindness will provide a warm meal and a friendly face to those in need.",
        list_img: "./images/image8",
        list_visible: false,
        list_org: "Shelter Helpers",
        list_skills: ["Cooking", "Customer Service", "Compassion"]
    },
    {
        list_id: 9,
        list_title: "Youth Sports Coaching",
        list_location: "CF10 1AA",
        list_longitude: -3.1781,
        list_latitude: 51.4816,
        list_date: "2024-07-09",
        list_time: "16:00",
        list_duration: 2,
        list_description: "Coach a youth sports team and help kids develop their skills and confidence. This is a great opportunity to make a positive impact on young lives.",
        list_img: "./images/image9",
        list_visible: true,
        list_org: "Youth Sports League",
        list_skills: ["Coaching", "Mentoring", "Sports"]
    },
    {
        list_id: 10,
        list_title: "Art Workshop for Seniors",
        list_location: "EH1 1AA",
        list_longitude: -3.1883,
        list_latitude: 55.9533,
        list_date: "2024-07-10",
        list_time: "10:00",
        list_duration: 3,
        list_description: "Facilitate an art workshop for seniors. This event provides an opportunity for creative expression and social interaction for elderly community members.",
        list_img: "./images/image10",
        list_visible: false,
        list_org: "Senior Arts Fund",
        list_skills: ["Art", "Teaching", "Patience"]
    }
];

export type {Listing};