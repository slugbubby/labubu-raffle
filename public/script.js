const participants = {
  absurdititty: 1,
  alexsuneagle: 7,
  amish_andy: 2,
  bascarlo: 1,
  bcx_13: 6,
  bobbycarnage: 1,
  buzzhuey: 6,
  charmandy: 1,
  chilinchiliwilly: 32,
  chuunck: 34,
  ciphersean: 2,
  degenerall: 1,
  gabe_o: 2,
  freckled_phenom: 6,
  haze_kekw: 1,
  hillaryclintonemails: 3,
  imsniffle: 7,
  jupiter_nim: 1,
  matt_lxndr: 16,
  magicalcupcake3: 1,
  markiryu: 3,
  midorisky22: 73,
  newb_saibot: 6,
  nightshadowv0: 2,
  osamabinramyun: 2,
  panpuko: 7,
  petawilleatacat: 6,
  prinnyvinny: 1,
  shaoshall: 1,
  sirxyup: 6,
  slowe8: 8,
  stramberrycow: 3,
  thiccbrained: 1,
  tryalt_f4: 8,
  vanessaxo1208: 8,
  veethevagabond: 1,
  yunrahn: 1
};

const ticketImages = [
  "https://upload.wikimedia.org/wikipedia/en/a/a9/Pop_Mart_Labubu_The_Monsters_Exciting_Macaron.jpg?w=100&h=100&fit=crop",
  "https://i0.wp.com/zaloramalaysiablog.wpcomstaging.com/wp-content/uploads/2024/10/20240617_101957_041165____2_____1200x1200.jpg?w=100&h=100&fit=crop",
  "https://platform.vox.com/wp-content/uploads/sites/2/2025/07/gettyimages-2226084406.jpg?quality=90&strip=all&crop=0%2C4.4877344877345%2C100%2C91.024531024531?w=100&h=100&fit=crop",
  "https://canvasandcharms.com/cdn/shop/files/20250418_172540_561496____6_the-monsters-big-into-energy-series-vinyl-plush-pendant-blind-box_plush_details_popmart-us_____1200x1200_e27f9218-ed73-4754-a251-10e29b62353b.jpg?w=100&h=100&fit=crop",
  "https://canvasandcharms.com/cdn/shop/files/20250424_112639_483553____12_the-monsters-big-into-energy-series-vinyl-plush-pendant-blind-box_plush_details_popmart-us_____1200x1711_ea078202-6cd8-4aa3-94f7-f34181d2c163.webp?v=1750821788&width=823",
  "https://canvasandcharms.com/cdn/shop/files/20250424_112639_430975____11_the-monsters-big-into-energy-series-vinyl-plush-pendant-blind-box_plush_details_popmart-us_____1200x1625_f8a029aa-fe82-402b-adcb-9c0f37ae0b78.webp?v=1750821788&width=823",
  "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2024/07/10162023/450095703_1014672320661450_1399228617381498066_n-1362x900.jpg?tr=w-1600",
  "https://cdn.shopify.com/s/files/1/0708/4415/3891/files/angel-in-clouds_480x480.jpg?v=1737550955",
  "https://www.calembou.com/cdn/shop/files/labubu-yellow-duck-clothing-set_1.jpg?v=1749698859",
  "https://images.ft.com/v3/image/raw/ftcms%3A867d6b77-18a8-40bf-96f4-81b5ef1d493a?source=next-article&fit=scale-down&quality=highest&width=700&dpr=2",
  "https://i.ebayimg.com/images/g/soEAAOSwYKdmrInu/s-l960.webp",
  "https://i.ebayimg.com/images/g/lQQAAOSwBqVmrInw/s-l960.webp",
  "https://www.dinossi.us/cdn/shop/files/labubu-canavarlar-coca-cola-surpriz-figur-serisi-28870.jpg?format=pjpg&v=1750935194&width=1200",
  "https://www.dinossi.us/cdn/shop/files/labubu-canavarlar-coca-cola-surpriz-figur-serisi-28871.jpg?format=pjpg&v=1750935103&width=1200",
  "https://www.dinossi.us/cdn/shop/files/labubu-canavarlar-coca-cola-surpriz-figur-serisi-28873.jpg?format=pjpg&v=1750935107&width=1200",
  "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*i9mUWUCtVcFmgS6F.jpg"
];

let tickets = [];

const games = [
  'don\'t stop girly pop',
  'dynasty warriors',
  'father',
  'heaven does not respond',
  'loop//error',
  'off the text',
  'on-together',
  'side effects',
  'umigari',
  'an unplayable game?!',
  'zombie typing'
];

function initializeRaffle() {
  tickets = [];
  
  // Create tickets for each participant
  // for (const [name, count] of Object.entries(participants)) {
  //   for (let i = 0; i < count; i++) {
  //     tickets.push({
  //       name: name,
  //       revealed: false,
  //       imageUrl: ticketImages[Math.floor(Math.random() * ticketImages.length)]
  //     });
  //   }
  // }

  // Create a ticket for each game
  for (const game of games) {
    tickets.push({
      name: game,
      revealed: false,
      imageUrl: ticketImages[Math.floor(Math.random() * ticketImages.length)]
    })
  }

  // Shuffle tickets
  for (let i = tickets.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tickets[i], tickets[j]] = [tickets[j], tickets[i]];
  }

  renderTickets();
}

function renderTickets() {
  const grid = document.getElementById('ticketsGrid');
  grid.innerHTML = '';

  document.getElementById('totalTickets').textContent = tickets.length;

  tickets.forEach((ticket, index) => {
    const ticketEl = document.createElement('div');
    ticketEl.className = 'ticket';
    
    if (ticket.revealed) {
      ticketEl.classList.add('revealed');
      ticketEl.innerHTML = `<div class="winner-name">${ticket.name}</div>`;
    } else {
      const img = document.createElement('img');
      img.src = ticket.imageUrl;
      img.alt = 'Raffle Ticket';
      ticketEl.appendChild(img);
    }

    ticketEl.onclick = () => onTicketClick(index);
    const ticketNum = document.createElement('div');
    ticketNum.className = 'ticketNum';
    ticketNum.innerHTML += (index+1);

    ticketEl.appendChild(ticketNum)
    grid.appendChild(ticketEl);
  });
}

function onTicketClick(index) {
  tickets[index].revealed = !tickets[index].revealed;
  renderTickets();
}

function resetRaffle() {
  initializeRaffle();
}

// Initialize on load
initializeRaffle();
