const tooltips= Array.from(document.querySelectorAll('.tooltip'));
const tooltipContainer = document.querySelector ( '.tooltip-container');

const data=[
    {id:1, txt:"Andhra Pradesh, located in southeastern India. With its rich history and diverse culture, it holds great fame. From ancient temples to bustling cities, it has much to offer. With scenic landscapes and beautiful beaches, it's a traveler's harbor. Known for its mouthwatering cuisine, especially spicy biryani, Andhra Pradesh welcomes visitors with warmth and hospitality."},
    {id:2, txt:" Arunachal Pradesh, nestled in the northeastern part of India. A land of breathtaking beauty and mystique that will make you sigh. With its snow-capped mountains and verdant valleys so serene. It's a paradise for nature lovers, a sight to be seen. Home to diverse indigenous tribes, each with its unique traditions, Arunachal Pradesh preserves its cultural heritage with utmost dedication."},
    {id:3, txt:" Assam, a jewel in the northeastern region of India. Blessed with lush green landscapes and the mighty Brahmaputra River's pride. Famous for its tea gardens, producing flavors that delight. Where fragrant brews enchant, filling cups from morning to night. Rich in biodiversity, with Kaziranga's rhinos in its embrace, Assam welcomes you with warmth, a blend of tradition and grace. "},
    {id:4, txt:" Bihar, a state in the eastern part of India's map,Steeped in ancient history, where empires left their mark. From Nalanda's ancient university to Bodh Gaya's sacred shrine,Bihar's cultural heritage continues to shine. With the Ganges flowing through its heart, a lifeline so grand, Bihar's fertile plains nourish the land. With its vibrant festivals and warm hospitality, Bihar welcomes all with open arms, a land of unity."},
    {id:5, txt:" Chhattisgarh, a state in central India, so vast,Abounds with natural wonders, from forests to mountains that last. With lush green landscapes and majestic waterfalls in its stride, Chhattisgarh's beauty is a true source of pride.Home to indigenous tribes, their traditions held dear, Chhattisgarh's rich cultural heritage is crystal clear. A land of vibrant art forms and folk dances that enthrall,Chhattisgarh welcomes visitors with open arms, for all. "},
    {id:6, txt:" Goa, a coastal gem nestled on India's western shore, With golden sandy beaches and the ocean's calming roar.Known for its vibrant nightlife and lively party scene, Goa's revelry and fun create an atmosphere serene. Portuguese influence is evident in its architecture and cuisine, Goa's blend of cultures creates a unique and vibrant scene. From ancient churches to water sports, it has something for all, Goa beckons you to relax, unwind, and have a ball."},
    {id:7, txt:" Gujarat, a state in western India, full of pride,With a rich history and vibrant culture that cannot hide. Home to the mighty Gir Forest, where lions roam free, Gujarat's wildlife and natural beauty are a sight to see. From the iconic white desert of Kutch to Sabarmati's serene flow, Gujarat's landscapes captivate and continue to grow. With its delicious cuisine and warm hospitality, Gujarat welcomes all with open hearts and unity."},
    {id:8, txt:" Haryana, a state in northern India, strong and bold, Known for its agricultural lands and fields of gold. Steeped in history, with ancient sites and tales, Haryana's heritage and glory never fail. From the vibrant festivals to traditional sports' acclaim, Haryana's culture and traditions proudly proclaim. With a spirit of resilience and progress, Haryana shines bright, Welcoming visitors with warmth and a captivating sight."},
    {id:9, txt:" Himachal Pradesh, a land of breathtaking beauty and grace, With snow-capped mountains and valleys, a picturesque embrace. From Shimla's colonial charm to Manali's scenic heights, Himachal Pradesh offers adventure and serene delights. Home to ancient temples and spiritual retreats,Himachal Pradesh's tranquility brings inner peace, a retreat. With warm hospitality and vibrant local culture to explore, Himachal Pradesh welcomes you to a land you'll adore."},
    {id:10, txt:" Jharkhand, a state in eastern India's embrace, Abundant in natural resources and diverse landscapes, a place. With lush forests and rolling hills that hold hidden treasures, Jharkhand's scenic beauty leaves visitors in awe and pleasure. Home to vibrant tribal communities, their art and traditions thrive, Jharkhand's cultural heritage comes alive. From ancient cave paintings to majestic waterfalls tall, Jharkhand invites you to explore its wonders, one and all."},
    {id:11, txt:"Karnataka, a land of rich heritage and ancient tales, Where history unfolds through its architectural trails. From the majestic Mysore Palace to Hampi's ruins grand, Karnataka's landmarks speak of a glorious past so grand. With lush Western Ghats and serene Coorg's misty hills, Karnataka's natural beauty soothes and thrills. Known for its diverse cuisine and vibrant festivals galore, Karnataka welcomes you with open arms, forevermore. "},
    {id:12, txt:" Kerala, God's own country, a coastal paradise so serene, With palm-fringed beaches and backwaters, a breathtaking scene.  From the misty tea plantations of Munnar to the tranquil Alleppey, Kerala's landscapes enchant, casting a spell of tranquility. With vibrant Kathakali dances and Ayurvedic healing traditions, Kerala's culture and traditions offer unforgettable renditions. Known for its spicy seafood and aromatic spices galore, Kerala invites you to explore its beauty and savor its flavors for sure."},
    {id:13, txt:" Madhya Pradesh, the heart of India, it stands, With its diverse landscapes and historical lands. From the majestic temples of Khajuraho's fame, To the wildlife sanctuaries where rare species claim. Gwalior's fort and Bhopal's lakeside charm, Madhya Pradesh's heritage leaves visitors warm. With warm hospitality and cultural tapestry to behold, Madhya Pradesh welcomes you with stories yet untold."},
    {id:14, txt:" Maharashtra, a state on India's western coast, Boasts a rich tapestry of culture and history that engrossed. From the bustling streets of Mumbai, a city of dreams, To the ancient caves of Ajanta and Ellora, it gleams. With its iconic beaches and the Western Ghats' embrace, Maharashtra's diverse landscapes offer a scenic chase. Renowned for its lip-smacking street food and festivals galore, Maharashtra invites you to explore, indulge, and adore. "},
    {id:15, txt:"Manipur, a northeastern gem of natural bliss, With lush green valleys and mountains that kiss. Imbued with rich cultural heritage and traditions so deep, Manipur's folk dances and handlooms make hearts leap. Home to Loktak Lake, a floating paradise serene, Manipur's beauty captivates, leaving a lasting scene. With warm hospitality and vibrant colors to explore, Manipur welcomes you to a land of beauty and folklore. "},
    {id:16, txt:" Meghalaya, a land of clouds and pristine beauty, With rolling hills and waterfalls, a sight to see. Cherrapunji, the rainiest place on Earth, holds its fame, While Mawlynnong, the cleanest village, earns acclaim. Living root bridges and mysterious caves adorn its land, Meghalaya's enchanting landscapes make nature's magic grand. With warm-hearted people and a unique tribal culture to share, Meghalaya welcomes you to a land beyond compare."},
    {id:17, txt:" Mizoram, a jewel in India's northeast, Where nature thrives and tranquility is at its best. With emerald green hills and misty valleys so serene, Mizoram's beauty casts a spell, a mesmerizing scene. Home to diverse tribal communities with vibrant traditions, Mizoram's cultural heritage weaves captivating renditions. With warm hospitality and a peaceful atmosphere, Mizoram invites you to explore its beauty and draw near."},
    {id:18, txt:"Nagaland, a land of vibrant tribes and rich traditions, Where hills and valleys merge in breathtaking compositions. With colorful festivals like Hornbill, a grand celebration, Nagaland's cultural heritage is a source of fascination. Known for its exquisite handicrafts and intricate weaves, Nagaland's craftsmanship and artistry leave hearts pleased. With warm hospitality and a spirit of unity, Nagaland welcomes you to experience its diversity. "},
    {id:19, txt:" Odisha, a coastal state in eastern India's embrace, Where ancient temples and artistry find their rightful place. From the world-famous Sun Temple in Konark's glory, To the sacred pilgrimage site of Puri's timeless story. With pristine beaches and the scenic Chilika Lake, Odisha's natural beauty is a haven for solace and break. Known for its vibrant dance forms and exquisite handloom, Odisha invites you to explore its treasures and bloom."},
    {id:20, txt:" Punjab, the land of five rivers flowing strong, With a rich history and cultural heritage that throngs. From the Golden Temple in Amritsar, a spiritual abode, To the vibrant Bhangra beats that lighten every load. Renowned for its agriculture and fertile lands, Punjab's prosperity and hardworking spirit expand. With warm hospitality and delectable cuisine to share, Punjab welcomes you with open arms and flavors beyond compare. "},
    {id:21, txt:" Rajasthan, the land of kings and grandeur untold, With its majestic palaces and forts that behold. From the royal city of Jaipur, in hues of pink, To the golden sand dunes of Jaisalmer, where camels blink. With vibrant festivals like Pushkar's camel fair, Rajasthan's culture and traditions are rich and rare. With warm hospitality and folk music's rhythmic cheer, Rajasthan invites you to a timeless journey, my dear."},
    {id:22, txt:"Sikkim, a Himalayan gem of pristine beauty, With snow-capped peaks and valleys so heavenly. Gangtok, its capital, nestled amidst nature's splendor, Sikkim's charm and tranquility you will surrender. Home to ancient monasteries and spiritual retreats,  Sikkim's serene ambiance provides solace and treats. With warm-hearted people and a blend of cultures to explore, Sikkim welcomes you to a land where tranquility and adventure soar. "},
    {id:23, txt:"Tamil Nadu, a state in southern India's domain, Where history, art, and culture forever remain. From the magnificent temples of Madurai's pride, To the colonial charm of Chennai's seaside. With lush green Nilgiri hills and pristine coastal shores,Tamil Nadu's landscapes delight and allure. Known for its classical music and traditional dance, Tamil Nadu welcomes you with open arms, a cultural trance. "},
    {id:24, txt:"Telangana, a state in southern India's embrace, With a blend of tradition, history, and modern grace. From the iconic Charminar in Hyderabad's old city, To the serene beauty of Nagarjuna Sagar's vicinity. With the rich heritage of Kakatiya dynasty's reign, Telangana's cultural treasures hold stories untamed. With warm hospitality and flavorsome cuisine to share, Telangana welcomes you to experience its vibrant flair. "},
    {id:25, txt:"Tripura, a northeastern jewel of natural delight, With verdant hills and valleys, a breathtaking sight. From the ancient Ujjayanta Palace, a regal abode, To the serene lakes of Neermahal, a royal ode. Known for its rich tribal heritage and cultural blend, Tripura's traditional dances and crafts transcend. With warm hospitality and a tranquil ambiance so pure, Tripura welcomes you to explore its beauty and allure. "},
    {id:26, txt:" Uttar Pradesh, the land of heritage and grandeur, Where history, spirituality, and diversity endure. From the iconic Taj Mahal's majestic embrace, To the holy Ganges' flow, a sacred space. With vibrant festivals like Kumbh Mela's massive gathering, Uttar Pradesh's cultural tapestry is worth exploring. With warm hospitality and a blend of traditions to partake, Uttar Pradesh invites you to a journey that memories make."},
    {id:27, txt:" Uttarakhand, where the majestic Himalayas reside, A land of spirituality and adventure side by side. From the sacred banks of the Ganges that flow, To the snow-clad peaks that touch the sky's glow. With serene hill stations like Mussoorie's charm, Uttarakhand's beauty holds a captivating arm. With warm hospitality and a tranquil mountain air, Uttarakhand invites you to a journey beyond compare."},
    {id:28, txt:" West Bengal, a land of cultural vibrance and pride, Where history and artistry gracefully coincide. From the iconic Howrah Bridge spanning the Hooghly's tide, To the grandeur of Kolkata, where old and new collide. With rich literary heritage and Tagore's poetic sway, West Bengal's creativity and intellect hold sway. With warm hospitality and delectable sweets to share, West Bengal welcomes you to a tapestry of flavors and flair."},
    {id:29, txt:" Andaman and Nicobar Islands, a tropical paradise set free, Where azure waters and pristine beaches redefine glee. With Havelock Island's Radhanagar, a beach of pure bliss, And the vibrant coral reefs that leave hearts amiss. Home to indigenous tribes and rich biodiversity, Andaman and Nicobar Islands offer nature's serenity. With warm hospitality and an island escape so grand, Andaman and Nicobar Islands beckon you to a paradise so unplanned."},
    {id:30, txt:" Chandigarh, a city of modern architectural delight, Designed by Le Corbusier, a visionary's sight. With the iconic Capitol Complex's grandeur and grace, And the Rock Garden's artistic marvels in place. Known for its clean streets and urban planning finesse, Chandigarh's charm and liveliness never cease. With warm hospitality and a cosmopolitan flair, Chandigarh welcomes you to a city beyond compare."},
    {id:31, txt:" Dadra and Nagar Haveli and Daman and Diu, Two union territories, unique and true. Dadra and Nagar Haveli, nestled amidst nature's embrace, With serene lakes and lush forests, a tranquil space. Daman and Diu, coastal gems on the Arabian Sea, With picturesque beaches and colonial heritage, a sight to see. With warm hospitality and a blend of cultures to explore, Dadra and Nagar Haveli and Daman and Diu invite you to their shores."},
    {id:32, txt:"Jammu and Kashmir, a crown of India's land, With snow-capped mountains and valleys so grand. From the enchanting Dal Lake in Srinagar's embrace, To the spiritual solace of Amarnath's sacred place. Known for its vibrant handicrafts and rich cuisine, Jammu and Kashmir's cultural heritage is serene. With warm hospitality and nature's beauty to adore, Jammu and Kashmir welcomes you to a paradise forevermore. "},
    {id:33, txt:" Ladakh, a mystical land nestled in the Himalayas' might, With rugged landscapes and awe-inspiring heights. From the ancient monasteries that grace its terrain, To the shimmering lakes like Pangong's serene domain. Known for its vibrant festivals and rich Buddhist heritage, Ladakh's culture and spirituality resonate. With warm Ladakhi hospitality and adventure in the air, Ladakh invites you to a realm where tranquility is rare."},
    {id:34, txt:"Lakshadweep, an archipelago of pristine allure, With turquoise waters and coral reefs so pure. From the golden beaches of Agatti's coastal charm, To the tranquil lagoons that calm and disarm. Known for its abundant marine life and water sports galore, Lakshadweep's natural beauty leaves hearts to explore. With warm hospitality and a tranquil island vibe, Lakshadweep invites you to a paradise where serenity thrives. "},
    {id:35, txt:"National Capital Territory of Delhi, a bustling metropolis grand, Where history meets modernity in a vibrant blend. From the majestic Red Fort's towering walls, To the iconic India Gate that proudly calls. Known for its diverse culture and culinary delights, Delhi's charm and flavors create unforgettable nights. With warm hospitality and a cosmopolitan flair, Delhi welcomes you to a city beyond compare. "},
    {id:36, txt:"Puducherry, a coastal beauty on India's southeastern shore, With French colonial charm and tranquility galore. From the picturesque promenade, a delightful stroll, To the spiritual bliss of Aurobindo's ashram, a soulful goal. Known for its distinct blend of cultures and serene beaches, Puducherry's ambiance and vibes leave visitors in reaches. With warm hospitality and a relaxed seaside air, Puducherry invites you to unwind and find solace there. "}
]

let tooltipID;

tooltips.forEach(tooltip => { 

tooltip.addEventListener('mouseenter',(e) =>{
    tooltipID= e.target.getAttribute
    ('data-id');
    tooltipContainer.classList.add('fade-in');
    tooltipContainer.style.left = `${e.pageX}px`; 
    tooltipContainer.style.top = `${e.pageY}px`;  
    tooltipContainer.innerText = data
    [tooltipID - 1].txt;
});  
tooltip.addEventListener("mouseout", () => {
    tooltipContainer.classList.remove("fade-in");
  });
});