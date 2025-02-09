// TYPES
import type { typesTeamMember } from "@/types/typesTeamMember";

const TEAM_IMAGES_PATH = 'team';

export const team: typesTeamMember[] = [
    { 
        name: "Giovanni",
        role: "CEO", 
        image: `${TEAM_IMAGES_PATH}/gio.jpg`,
        bio: `Born in the Bay Area, California, Giovanni Polizzi is an entrepreneur, leader, and visionary with a deep passion for music and sports. 
            His journey, shaped by the discipline of professional sports and the creativity of the entertainment 
            industry, led him to create Vocal Aura Entertainment, a platform for emerging artists to express themselves freely and connect with audiences.`,
        bio2: `As the Chief Executive Officer and co-founder, Giovanni envisioned Vocal Aura as more than just an agency; 
            it is a creative movement that fosters authenticity, innovation, and artistic growth. His experience as a semi-professional 
            soccer player in Spain instilled in him relentless discipline, work ethic, and a drive to succeed, qualities 
            he now applies to the music industry. With Vocal Aura Entertainment, Giovanni is on a mission to elevate raw talent, 
            amplify voices, and create a global platform where artists can thrive.`
    },
    { 
        name: "Adam", 
        role: "COO", 
        image: `${TEAM_IMAGES_PATH}/adam.jpg`,
        bio: `Hailing from Dallas, Texas, Adam Gadol’s journey stems from London to Tel Aviv, Chicago to Los Angeles, and now Valencia, Spain. 
            The different cultures and learning environments have shaped his perception of the modern-entertainment scene in which he 
            and Giovanni started Vocal Aura Ent. in. As a co-founder and Chief Operations Officer of Vocal Aura, Adam heads the daily tasks as well as heading the artistry department and live event planning. 
            With a driving passion for the live sector, Adam’s ideas work hand-in-hand with Vocal Aura’s many ambitions.`,
        bio2: `Currently a Master’s student at Berklee Valencia, he is working to complete his degree in Music Business and Global Entertainment.`
    },
    { 
        name: "Denny", 
        role: "Head of A&R and Music Supervisor", 
        image: `${TEAM_IMAGES_PATH}/denny.jpg`,
        bio: `As the Head of A&R and Music Supervisor at Vocal Aura, Denny Lee specializes in artist scouting, brand development, 
            and music curation. Originally from Taiwan, he has worked in the U.S. and London and is now based in Spain, 
            connecting emerging talent with global opportunities. At Vocal Aura, he leads artist development, oversees music placement, 
            and helps shape the future of independent music.`
    },
    { 
        name: "Malyka", 
        role: "Creative & Public Relations", 
        image: `${TEAM_IMAGES_PATH}/malyka.jpg`,
        bio: `Born in Canada to an Entrepreneur, Malyka has always been influenced by the innovative mindset of 
            someone turning passions into businesses. Having studied in International Business, 
            she leads creative projects within the company with a wide vision that exceeds all regular 
            experiences limited by the current place she is in. With a background in sales and marketing, 
            she has worked across the globe from Canada to the Netherlands, all the way to Japan.`
    },
    { 
        name: "Antonio", 
        role: "Strategy Advisor", 
        image: `${TEAM_IMAGES_PATH}/antonio.jpg`,
        bio: `Antonio is the driving force that keeps our vision sharp and our momentum strong. A natural leader, innovator, and team player, 
            he thrives on pushing boundaries and turning ideas into action. His entrepreneurial spirit is fueled by a simple 
            yet powerful goal: to make our audience feel the same electrifying energy he experienced at his first Anne Noor concert. 
            That moment of connection is what made him believe in Vocal Aura—and it's the spark he’s determined to ignite in everything we do.`,
        bio2: `Passionate about reimagining Valencia’s nightlife, Antonio’s mission is clear: no more dull nights, no more monotony. 
            With his strategic mind and relentless enthusiasm, he’s here to make Valencia vibrant, dynamic, and unforgettable once again.`
    },
    { 
        name: "Fabiana", 
        role: "Marketing and Creative", 
        image: `${TEAM_IMAGES_PATH}/fabiana.jpg`,
        bio: `Born in Venezuela, Fabiana is a talented marketing professional who, at just 22, has already worked with top brands like Zara. 
            Her expertise in branding, strategy, and creative direction makes her a key force at Vocal Aura Entertainment.`,
        bio2: `Passionate about innovation, she transforms ideas into unforgettable experiences, constantly finding new ways to engage
            audiences and elevate brand presence. With a sharp strategic vision and creative talent, Fabiana plays a crucial 
            role in building strong brand identities and crafting compelling narratives. Her energy and dedication make her an invaluable asset to the team.`
    },
]