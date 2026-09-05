export type ProductCategory = {
  id: string;
  brand: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  accent: string;
  soft: string;
  items: string[];
};

// Catalogue content is intentionally centralized here.
// To refresh the catalogue later, update images in /public/assets/products and this file only.
export const productCategories: ProductCategory[] = [
  { id:'epson', brand:'EPSON', title:'Epson Products', shortTitle:'Printing & Projection', description:'Inkjet and laser printers, projectors, scanners, inks and related accessories.', image:'/assets/products-v2/epson.jpg', accent:'#1556c0', soft:'#eaf3ff', items:['Inkjet printers','Laser printers','Business projectors','Scanners','Ink & accessories'] },
  { id:'hp', brand:'HP', title:'HP Products', shortTitle:'Computing & Printing', description:'Business laptops, desktops, printers, monitors, workstations and accessories.', image:'/assets/products-v2/hp.jpg', accent:'#0879c9', soft:'#eaf8ff', items:['Business laptops','Desktop computers','Printers & MFP','Monitors','Workstations','Accessories'] },
  { id:'brother', brand:'BROTHER', title:'Brother Products', shortTitle:'Printers & Consumables', description:'Laser and ink-tank printers, multifunction devices, toners, drum units and cartridges.', image:'/assets/products-v2/brother.jpg', accent:'#3d4dd8', soft:'#f0f0ff', items:['Laser printers','Ink-tank printers','Multi-function printers','Toners','Drum units','Cartridges'] },
  { id:'elnova', brand:'ELNOVA', title:'Elnova Power Solutions', shortTitle:'UPS & Power Backup', description:'Online, line-interactive and offline UPS, inverters, batteries and power backup solutions.', image:'/assets/products-v2/elnova.jpg', accent:'#16854a', soft:'#eaf9f1', items:['Online UPS','Line-interactive UPS','Offline UPS','Inverters','Batteries','Power backup systems'] },
  { id:'peoplelink', brand:'PEOPLELINK', title:'PeopleLink Solutions', shortTitle:'Video & Collaboration', description:'Video conferencing, audio-video devices, interactive panels, microphones and webcams.', image:'/assets/products-v2/peoplelink.jpg', accent:'#087fa9', soft:'#e9f8fb', items:['Interactive panels','Video conferencing','Conference cameras','Microphones','Web cameras','Audio-video accessories'] },
  { id:'cp-plus', brand:'CP PLUS', title:'CP PLUS Security Solutions', shortTitle:'Security & Surveillance', description:'CCTV cameras, NVR, DVR and surveillance equipment for monitoring and security requirements.', image:'/assets/products-v2/cp-plus.jpg', accent:'#d9232e', soft:'#fff0f0', items:['CCTV cameras','Network video recorders','Digital video recorders','IP surveillance','Security accessories'] },
  { id:'compatible-cartridges', brand:'COMPATIBLE', title:'Compatible Cartridge', shortTitle:'Printing Consumables', description:'Compatible ink and toner cartridges for major printer brands and common business requirements.', image:'/assets/cartridge-feature.jpg', accent:'#6b35b8', soft:'#f5efff', items:['Compatible toner cartridges','Ink cartridges','Laser cartridges','Printer consumables','Refills & replacements'] },
];

export const company = {
  name:'AMBE MARKETING',
  tagline:'Your Trusted Partner for IT, Power Backup & Security Solutions.',
  phone:'+91 90362 89719', phoneHref:'tel:+919036289719', whatsappHref:'https://wa.me/919036289719',
  email:'admin@ambemarketing.in', emailHref:'mailto:admin@ambemarketing.in',
  address:'Ground Floor, No. 96, Sadar Patrappa Road, Bengaluru, Karnataka 560002'
};

export const aboutText = 'AMBE MARKETING is a trusted supplier and distributor of IT, Power Backup, and Security Solutions, offering a comprehensive range of products from leading national and international brands.';
export const specializationText = {
  it:'Computers, laptops, printers, networking equipment, accessories, peripherals, software and other IT products.',
  power:'Online and offline UPS, industrial UPS, inverters, batteries and related power backup solutions.',
  security:'CCTV cameras, surveillance systems, NVR, DVR and related security products.'
};
