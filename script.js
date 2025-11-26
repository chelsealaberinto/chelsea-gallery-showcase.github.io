
const content = document.getElementById("content");


const princesses = [
    {
        name: "Snow White",
        movie: "Snow White and the Seven Dwarfs (1937)",
        fullName: "Snow White",
        magic: "None, but has a uniquely pure singing voice that charms animals",
        prince: "The Prince (sometimes called Prince Florian in unofficial sources)",
        characteristics: "Kind-hearted, innocent, nurturing",
        origin: "German fairy tale Snow White",
        created: "1937",
        appearance: "Fair skin, short black hair, red bow, blue-yellow-red dress",
        otherTraits: "First Disney Princess; symbolizes purity and optimism",
        img: "assets/snow.png"
    },
    {
        name: "Cinderella",
        movie: "Cinderella (1950)",
        fullName: "Cinderella (sometimes Ella)",
        magic: "Receives magical help from the Fairy Godmother",
        prince: "Prince Charming (Prince Henry in some sources)",
        characteristics: "Gentle, patient, hopeful",
        origin: "French fairy tale by Charles Perrault",
        created: "1950",
        appearance: "Blonde hair, blue ball gown, glass slippers",
        otherTraits: "Her kindness influences everyone around her",
        img: "assets/cinderella.png"
    },
    {
        name: "Aurora",
        movie: "Sleeping Beauty (1959)",
        fullName: "Princess Aurora (Briar Rose)",
        magic: "None personally; blessed by fairies (beauty, song)",
        prince: "Prince Phillip",
        characteristics: "Graceful, elegant, dreamy",
        origin: "Charles Perrault’s Sleeping Beauty",
        created: "1959",
        appearance: "Long blonde hair, pink or blue gown",
        otherTraits: "Spends most of the film under a sleeping curse",
        img: "assets/aurora.png"
    },
    {
        name: "Ariel",
        movie: "The Little Mermaid (1989)",
        fullName: "Princess Ariel",
        magic: "Originally a mermaid; later transformed by magic",
        prince: "Prince Eric",
        characteristics: "Curious, brave, rebellious",
        origin: "Hans Christian Andersen’s story",
        created: "1989",
        appearance: "Red hair, green mermaid tail",
        otherTraits: "Loves human artifacts; powerful singing voice",
        img: "assets/ariel.png"
    },
    {
        name: "Belle",
        movie: "Beauty and the Beast (1991)",
        fullName: "Belle",
        magic: "None personally",
        prince: "Beast / Prince Adam",
        characteristics: "Intelligent, compassionate, book-loving",
        origin: "French fairy tale",
        created: "1991",
        appearance: "Brown hair, yellow ball gown",
        otherTraits: "Values inner beauty",
        img: "assets/belle.png"
    },
    {
        name: "Jasmine",
        movie: "Aladdin (1992)",
        fullName: "Princess Jasmine",
        magic: "None personally",
        prince: "Aladdin",
        characteristics: "Independent, strong-willed",
        origin: "Aladdin and the Magic Lamp",
        created: "1992",
        appearance: "Long black hair, aqua outfit",
        otherTraits: "Not centered on royal duties",
        img: "assets/jasmine.png"
    },
    {
        name: "Pocahontas",
        movie: "Pocahontas (1995)",
        fullName: "Pocahontas (Matoaka)",
        magic: "None; strong spiritual bond with nature",
        prince: "None officially; love interest John Smith",
        characteristics: "Brave, wise, free-spirited",
        origin: "Powhatan culture",
        created: "1995",
        appearance: "Long black hair, tan dress",
        otherTraits: "Symbolic communication with nature",
        img: "assets/pocahontas.png"
    },
    {
        name: "Mulan",
        movie: "Mulan (1998)",
        fullName: "Fa Mulan",
        magic: "None; exceptional warrior",
        prince: "Li Shang",
        characteristics: "Courageous, resourceful",
        origin: "Chinese “Ballad of Mulan”",
        created: "1998",
        appearance: "Black hair; armor or Hanfu",
        otherTraits: "Saved China in disguise",
        img: "assets/mulan.png"
    },
    {
        name: "Tiana",
        movie: "The Princess and the Frog (2009)",
        fullName: "Tiana",
        magic: "Turned into a frog via voodoo spell",
        prince: "Prince Naveen",
        characteristics: "Ambitious, hardworking",
        origin: "Frog Prince-inspired",
        created: "2009",
        appearance: "Green lily-pad gown",
        otherTraits: "First African-American Disney Princess",
        img: "assets/tiana.png"
    },
    {
        name: "Rapunzel",
        movie: "Tangled (2010)",
        fullName: "Princess Rapunzel",
        magic: "Healing/glowing hair",
        prince: "Eugene Fitzherbert (Flynn Rider)",
        characteristics: "Creative, curious",
        origin: "Grimm fairy tale",
        created: "2010",
        appearance: "Long golden glowing hair",
        otherTraits: "Talented painter",
        img: "assets/rapunzel.png"
    },
    {
        name: "Merida",
        movie: "Brave (2012)",
        fullName: "Princess Merida of DunBroch",
        magic: "None personally",
        prince: "None",
        characteristics: "Fierce, independent",
        origin: "Pixar original",
        created: "2012",
        appearance: "Curly red hair, archery gear",
        otherTraits: "Exceptional archer",
        img: "assets/merida.png"
    },
    {
        name: "Moana",
        movie: "Moana (2016)",
        fullName: "Moana Waialiki",
        magic: "None personally; chosen by the ocean",
        prince: "None",
        characteristics: "Determined, compassionate",
        origin: "Polynesian-inspired",
        created: "2016",
        appearance: "Curly dark hair, island wear",
        otherTraits: "Master navigator",
        img: "assets/moana.png"
    },
    {
        name: "Raya",
        movie: "Raya and the Last Dragon (2021)",
        fullName: "Raya of Kumandra",
        magic: "None personally; uses a magical gem",
        prince: "None",
        characteristics: "Skilled, loyal",
        origin: "Southeast Asian-inspired",
        created: "2021",
        appearance: "Warrior outfit, conical hat",
        otherTraits: "Theme of trust",
        img: "assets/raya.png"
    },
    {
        name: "Elsa",
        movie: "Frozen (2013) & Frozen II (2019)",
        fullName: "Queen Elsa of Arendelle",
        magic: "Ice and snow powers",
        prince: "None",
        characteristics: "Reserved, powerful",
        origin: "Inspired by “The Snow Queen”",
        created: "2013",
        appearance: "Platinum blonde hair, icy gowns",
        otherTraits: "Among Disney’s most powerful magic users",
        img: "assets/elsa.png"
    },
    {
        name: "Anna",
        movie: "Frozen (2013) & Frozen II (2019)",
        fullName: "Princess Anna of Arendelle",
        magic: "None",
        prince: "Kristoff",
        characteristics: "Warm, optimistic",
        origin: "Frozen",
        created: "2013",
        appearance: "Reddish-brown hair, braids",
        otherTraits: "Saved Elsa through true love",
        img: "assets/anna.png"
    },
    {
        name: "Vanellope",
        movie: "Wreck-It Ralph (2012) & Ralph Breaks the Internet (2018)",
        fullName: "Vanellope von Schweetz",
        magic: "Glitching ability",
        prince: "None",
        characteristics: "Energetic, mischievous, confident",
        origin: "Original Disney creation",
        created: "2012",
        appearance: "Black hair in a candy-sprinkled ponytail, mint hoodie, striped leggings, skirt",
        otherTraits: "Becomes princess and later president of Sugar Rush; embraces being a “glitch” as her strength",
        img: "assets/vanellope.png"
    }
];
princesses.forEach((p, index) => {
    const cardHTML = `
  <div class="col-6 col-md-4 col-lg-3 d-flex">
    <div class="card shadow my-3"
         data-bs-toggle="modal" data-bs-target="#princessModal" data-index="${index}"
         style="cursor:pointer; transition: transform 0.3s ease, box-shadow 0.3s ease;"
         onmouseover="this.style.transform='translateY(-10px) scale(1.03)'; this.style.boxShadow='0 15px 30px rgba(0,0,0,0.25)';"
         onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 1px 6px rgba(0,0,0,0.15)';">
      <img src="${p.img}" class="card-img-top" style="width:100%; height:300px; object-fit:cover;">
      <div class="card-body text-center">
        <h5 class="card-title">${p.name}</h5>
      </div>
    </div>
  </div>
  `;
    content.innerHTML += cardHTML;
});



const modalLabel = document.getElementById("princessModalLabel");
const modalImage = document.getElementById("modalImage");
const modalDetails = document.getElementById("modalDetails");


const princessModal = document.getElementById('princessModal');
princessModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const index = button.getAttribute('data-index');
    const p = princesses[index];


    modalLabel.textContent = p.name;
    modalImage.src = p.img;


    modalDetails.innerHTML = `
    <p><strong>Movie:</strong> ${p.movie}</p>
    <p><strong>Full Name:</strong> ${p.fullName}</p>
    <p><strong>Magic:</strong> ${p.magic}</p>
    <p><strong>Prince:</strong> ${p.prince}</p>
    <p><strong>Characteristics:</strong> ${p.characteristics}</p>
    <p><strong>Origin:</strong> ${p.origin}</p>
    <p><strong>Created:</strong> ${p.created}</p>
    <p><strong>Appearance:</strong> ${p.appearance}</p>
    <p><strong>Other Traits:</strong> ${p.otherTraits}</p>
  `;
});
